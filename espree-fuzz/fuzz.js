"use strict";
const Linter = require('eslint').Linter;
const linter = new Linter();
//const esutils = require("esutils");
const espree = require("espree");
const fs = require("fs");

const child_process = require('child_process');
const exec = child_process.exec;



const testcaseDir = "./testcase-raw/";
const testcaseNormalizedDir = "./testcase-normalized/";
const testcaseOutputDir = "./testcase-output/";
const testcaseRunDir = "./testcase-run/";
const crashDir = "./crash/";

















/**
 * STEP 1, Statitical analysis towards "typed" "identifiers" appeard in testcases.
 * 
 * havent done any substitutions, just try some fix.
 */

let identifiersArray = require("./identifiers.js");
let typesArray = [];

function statiticalAnalysis(path) {
	let files = fs.readdirSync(path);
	for (let file of files) {
		let jsCode = fs.readFileSync(path + file, 'utf-8');
		try {
			let ast = espree.parse(jsCode, {
				ecmaVersion: 9, sourceType: "script", ecmaFeatures: {
					jsx: true,
					globalReturn: true,
					impliedStrict: false,
					experimentalObjectRestSpread: true
				}
			});
			//console.log('======================================================');
			//console.log(ast);
			function traverseNode(node) {
				for (let i in node) {
					let current = node[i];
					//console.log(current);
					if ((current == node) || (typeof current == "string") || (typeof current == "number") || current == null) { }
					else {
						if (current.hasOwnProperty("type")) {
							typesArray.push({
								type: current.type,
								code: jsCode.substring(current.start, current.end)
							});
							if (current.type == "Identifier") {
								let scalar = identifiersArray.filter(function (x) { if (x.oldName == current.name) return x; })[0];
								if (scalar != undefined) {
									++scalar.count;
								}
								else {
									identifiersArray.push({
										oldName: current.name,
										newName: 'o' + identifiersArray.length.toString(),
										count: 0
									});
								}
							}
						}
						traverseNode(current);
					}
				}
			}
			traverseNode(ast);
		} catch (e) {
			console.log('[+] Exception: ' + file + ':' + e);
			//console.log(linter.verifyAndFix(jsCode,{rules:{semi: 2}}));
		}
	}
}

statiticalAnalysis(testcaseDir);
/*for (let scalar of typesArray)
	console.log(scalar);
for (let scalar of identifiersArray)
	console.log(scalar);
*/






















/**
 * STEP 2, Substitutions, change the Identifiers using "start" "end" "oldName" "newName". VERSION 1.
 * 
 * From testcase dir transport to testcase-normalized.
 */
/*
function substituteIdentifiers(pathI, pathO) {
	let files = fs.readdirSync(pathI);
	for (let file of files) {
		let jsCode = fs.readFileSync(pathI + file, 'utf-8');
		try {
			let ast = espree.parse(jsCode, {
				ecmaVersion: 9, sourceType: "script", ecmaFeatures: {
					jsx: true,
					globalReturn: true,
					impliedStrict: false,
					experimentalObjectRestSpread: true
				}
			});
			//console.log('======================================================');
			//console.log(ast);
			let toSubstituteIdentifiers = [];
			function traverseNode(node) {
				for (let i in node) {
					let current = node[i];
					//console.log(current);
					if ((current == node) || (typeof current == "string") || (typeof current == "number") || current == null) { }
					else {
						if (current.hasOwnProperty("type")) {
							typesArray.push({
								type: current.type,
								code: jsCode.substring(current.start, current.end)
							});
							if (current.type == "Identifier") {
								let scalar = identifiersArray.filter(function (x) { if (x.oldName == current.name) return x; })[0];
								//assert(scalar != undefined);
								toSubstituteIdentifiers.push({
									oldName: current.name,
									newName: scalar.newName,
									start: current.start,
									end: current.end
								});
							}
						}
						traverseNode(current);
					}
				}
			}
			traverseNode(ast);

			let newContent = "";
			let fp = 0;
			for (let scalar in toSubstituteIdentifiers) {
				newContent += jsCode.substring(fp, toSubstituteIdentifiers[scalar].start);
				newContent += toSubstituteIdentifiers[scalar].newName;
				fp = toSubstituteIdentifiers[scalar].end;
			}
			newContent += jsCode.substring(fp, jsCode.length);
			fs.writeFileSync(pathO + file, newContent);

		} catch (e) {
			console.log('[+] Exception: ' + file + ':' + e);
		}
	}
}

substituteIdentifiers(testcaseDir, testcaseNormalizedDir);
*/


/**
 * STEP 2, Substitutions, change the Identifiers using "start" "end" "oldName" "on". VERSION 2.
 * 
 * From testcase dir transport to testcase-normalized. Prepare a new types array.
 */
function substituteIdentifiers(pathI, pathO) {
	let files = fs.readdirSync(pathI);
	for (let file of files) {
		let jsCode = fs.readFileSync(pathI + file, 'utf-8');
		try {
			let ast = espree.parse(jsCode, {
				ecmaVersion: 9, sourceType: "script", ecmaFeatures: {
					jsx: true,
					globalReturn: true,
					impliedStrict: false,
					experimentalObjectRestSpread: true
				}
			});
			//console.log('======================================================');
			//console.log(ast);
			let toSubstituteIdentifiers = [];
			function traverseNode(node) {
				for (let i in node) {
					let current = node[i];
					//console.log(current);
					if ((current == node) || (typeof current == "string") || (typeof current == "number") || current == null) { }
					else {
						if (current.hasOwnProperty("type")) {
							typesArray.push({
								type: current.type,
								code: jsCode.substring(current.start, current.end)
							});
							if (current.type == "Identifier") {
								let scalar = identifiersArray.filter(function (x) { if (x.oldName == current.name) return x; })[0];
								//assert(scalar != undefined);
								toSubstituteIdentifiers.push({
									oldName: current.name,
									newName: scalar.newName,
									start: current.start,
									end: current.end
								});
							}
						}
						traverseNode(current);
					}
				}
			}
			traverseNode(ast);

			let orderIdentifiers = [];
			for (let scalar of toSubstituteIdentifiers) {
				if (orderIdentifiers.filter(function (x) { if (x.oldName == scalar.newName) return x; })[0] == undefined) {
					if ((scalar.newName[0] == 'o') && (scalar.newName[1] >= '0') && (scalar.newName[1] <= '9')) {
						orderIdentifiers.push({
							oldName: scalar.newName,
							newName: 'o' + orderIdentifiers.length.toString()
						});
					}
					else {
						orderIdentifiers.push({
							oldName: scalar.newName,
							newName: scalar.newName
						});
					}
				}
			}

			let newContent = "";
			let fp = 0;
			for (let scalar of toSubstituteIdentifiers) {
				newContent += jsCode.substring(fp, scalar.start);
				newContent += orderIdentifiers.filter(function (x) { if (x.oldName == scalar.newName) return x; })[0].newName;
				fp = scalar.end;
			}
			newContent += jsCode.substring(fp, jsCode.length);
			fs.writeFileSync(pathO + file, newContent);

		} catch (e) {
			console.log('[+] Exception: ' + file + ':' + e);
		}
	}
}

substituteIdentifiers(testcaseDir, testcaseNormalizedDir);

typesArray = [];
statiticalAnalysis(testcaseNormalizedDir);
//for (let scalar of typesArray)
//	console.log(scalar);













/**
 * STEP 4, randomly substitute everything from testcase-normalized dir.
 * 
 * ObjectExpression - ObjectExpression
 */
let typeObjectExpression = typesArray.filter(function (x) { if (x.type == 'ObjectExpression') return x; });
//console.log(typeObjectExpression);
let typeProperty = typesArray.filter(function (x) { if (x.type == 'Property') return x; });
let typeLiteral = typesArray.filter(function (x) { if (x.type == 'Literal') return x; });
let typeArrayExpression = typesArray.filter(function (x) { if (x.type == 'ArrayExpression') return x; });
let typeExpressionStatement = typesArray.filter(function (x) { if (x.type == 'ExpressionStatement') return x; });
let typeMemberExpression = typesArray.filter(function (x) { if (x.type == 'MemberExpression') return x; });
let typeAssignmentExpression = typesArray.filter(function (x) { if (x.type == 'AssignmentExpression') return x; });
let typeCallExpression = typesArray.filter(function (x) { if (x.type == 'CallExpression') return x; });
let typeVariableDeclarator = typesArray.filter(function (x) { if (x.type == 'VariableDeclarator') return x; });
let typeUnaryExpression = typesArray.filter(function (x) { if (x.type == 'UnaryExpression') return x; });
let typeArrowFunctionExpression = typesArray.filter(function (x) { if (x.type == 'ArrowFunctionExpression') return x; });

function randomlySubstitue(pathI, pathO) {
	let files = fs.readdirSync(pathI);
	for (let file of files) {
		let jsCode = fs.readFileSync(pathI + file, 'utf-8');
		try {
			let ast = espree.parse(jsCode, {
				ecmaVersion: 9, sourceType: "script", ecmaFeatures: {
					jsx: true,
					globalReturn: true,
					impliedStrict: false,
					experimentalObjectRestSpread: true
				}
			});
			//console.log('======================================================');
			//console.log(ast);
			let toSubstituteTypes = [];
			function traverseNode(node) {
				for (let i in node) {
					let current = node[i];
					//console.log(current);
					if ((current == node) || (typeof current == "string") || (typeof current == "number") || current == null) { }
					else {
						if (current.hasOwnProperty("type")) {
							typesArray.push({
								type: current.type,
								code: jsCode.substring(current.start, current.end)
							});
							switch (current.type) {
								case 'ObjectExpression':
									if (probability0dot10()) {
										let randomScalar = typeObjectExpression[Math.floor((Math.random() * (typeObjectExpression.length + 1)) + 0)];
										toSubstituteTypes.push({
											start: current.start,
											end: current.end,
											code: randomScalar.code
										});
										continue;
									}
									break;

								case 'Property':
									if (probability0dot10()) {
										let randomScalar = typeProperty[Math.floor((Math.random() * (typeProperty.length + 1)) + 0)];
										toSubstituteTypes.push({
											start: current.start,
											end: current.end,
											code: randomScalar.code
										});
										continue;
									}
									break;
								case 'Literal':
									if (probability0dot10()) {
										let randomScalar = typeLiteral[Math.floor((Math.random() * (typeLiteral.length + 1)) + 0)];
										toSubstituteTypes.push({
											start: current.start,
											end: current.end,
											code: randomScalar.code
										});
										continue;
									}
									break;
								case 'ArrayExpression':
									if (probability0dot10()) {
										let randomScalar = typeArrayExpression[Math.floor((Math.random() * (typeArrayExpression.length + 1)) + 0)];
										toSubstituteTypes.push({
											start: current.start,
											end: current.end,
											code: randomScalar.code
										});
										continue;
									}
									break;
								case 'ExpressionStatement':
									if (probability0dot10()) {
										let randomScalar = typeExpressionStatement[Math.floor((Math.random() * (typeExpressionStatement.length + 1)) + 0)];
										toSubstituteTypes.push({
											start: current.start,
											end: current.end,
											code: randomScalar.code
										});
										continue;
									}
									break;
								case 'MemberExpression':
									if (probability0dot10()) {
										let randomScalar = typeMemberExpression[Math.floor((Math.random() * (typeMemberExpression.length + 1)) + 0)];
										toSubstituteTypes.push({
											start: current.start,
											end: current.end,
											code: randomScalar.code
										});
										continue;
									}
									break;
								case 'AssignmentExpression':
									if (probability0dot10()) {
										let randomScalar = typeAssignmentExpression[Math.floor((Math.random() * (typeAssignmentExpression.length + 1)) + 0)];
										toSubstituteTypes.push({
											start: current.start,
											end: current.end,
											code: randomScalar.code
										});
										continue;
									}
									break;
								case 'CallExpression':
									if (probability0dot10()) {
										let randomScalar = typeCallExpression[Math.floor((Math.random() * (typeCallExpression.length + 1)) + 0)];
										toSubstituteTypes.push({
											start: current.start,
											end: current.end,
											code: randomScalar.code
										});
										continue;
									}
									break;
								case 'VariableDeclarator':
									if (probability0dot10()) {
										let randomScalar = typeVariableDeclarator[Math.floor((Math.random() * (typeVariableDeclarator.length + 1)) + 0)];
										toSubstituteTypes.push({
											start: current.start,
											end: current.end,
											code: randomScalar.code
										});
										continue;
									}
									break;
								case 'UnaryExpression':
									if (probability0dot10()) {
										let randomScalar = typeUnaryExpression[Math.floor((Math.random() * (typeUnaryExpression.length + 1)) + 0)];
										toSubstituteTypes.push({
											start: current.start,
											end: current.end,
											code: randomScalar.code
										});
										continue;
									}
									break;
								case 'ArrowFunctionExpression':
									if (probability0dot10()) {
										let randomScalar = typeArrowFunctionExpression[Math.floor((Math.random() * (typeArrowFunctionExpression.length + 1)) + 0)];
										toSubstituteTypes.push({
											start: current.start,
											end: current.end,
											code: randomScalar.code
										});
										continue;
									}
									break;
								default:
									break;
							}
						}
						traverseNode(current);
					}
				}
			}
			traverseNode(ast);

			let newContent = "";
			let fp = 0;
			for (let scalar of toSubstituteTypes) {
				newContent += jsCode.substring(fp, scalar.start);
				newContent += scalar.code;
				fp = scalar.end;
			}
			newContent += jsCode.substring(fp, jsCode.length);
			fs.writeFileSync(pathO + file.substring(0, file.length - 3) + randomString2() + '.js', newContent);

		} catch (e) {
			console.log('[+] Exception: ' + file + ':' + e);
		}
	}
}


let files = fs.readdirSync(testcaseNormalizedDir);
for (let file of files) {
	fs.copyFileSync(testcaseNormalizedDir + file, testcaseOutputDir + file);
}

randomlySubstitue(testcaseNormalizedDir, testcaseOutputDir);
randomlySubstitue(testcaseNormalizedDir, testcaseOutputDir);
randomlySubstitue(testcaseNormalizedDir, testcaseOutputDir);
randomlySubstitue(testcaseNormalizedDir, testcaseOutputDir);
randomlySubstitue(testcaseNormalizedDir, testcaseOutputDir);
randomlySubstitue(testcaseNormalizedDir, testcaseOutputDir);
randomlySubstitue(testcaseNormalizedDir, testcaseOutputDir);
randomlySubstitue(testcaseNormalizedDir, testcaseOutputDir);





/**
 * STEP 5 The fuzzing...
 */

const binPath = "cat";
let timeout = 15000;

function loop() {

	randomlySubstitue(testcaseOutputDir, testcaseRunDir);

	let files = fs.readdirSync(testcaseRunDir);
	for (let file of files) {
		let childSpawn = child_process.spawn('node', ['./fuzz-child.js', testcaseRunDir, file, binPath, crashDir, testcaseOutputDir],
			{ detached: true });

		childSpawn.on('error', (err) => {
			console.log(err);
		});
		childSpawn.on('close', (code => { }));

	}
	setTimeout(loop, timeout);
}

loop();

















































/**
 * Tools functions
 */
function randomString2() {
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var str = '';
	for (let i = 0; i < 2; i++) {
		str += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return str;
}

function probability0dot10() {
	if (Math.floor(Math.random() + 0.10))
		return true;
	else
		return false;
}