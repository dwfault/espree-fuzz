"use strict";
const Linter = require('eslint').Linter;
const linter = new Linter();
const espree = require("espree");
const fs = require("fs");

const child_process = require('child_process');
const exec = child_process.exec;
const execSync = child_process.execSync;

const heapdump = require("heapdump");


const testcaseRawDir = "./testcase-raw/";
const testcaseNormalizedDir = "./testcase-normalized/";
const testcaseOutputDir = "./testcase-output/";
const testcaseRunDir = "./testcase-run/";
const crashDir = "./crash/";
const binPath = "~/Desktop/webkit-dfc36ec-asan/bin/jsc";


const ARGUMENT_MUTATION_COUNT = 2;







/**
 * STEP 1, Statitical analysis towards "typed" "identifiers" appeard in testcases.
 * 
 * havent done any substitutions, just try some fix.
 */
console.log('[+] STEP 1.');

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
			console.log('[+] Exception in staticalAnalysis: ' + file + ':' + e);
			//console.log(linter.verifyAndFix(jsCode,{rules:{semi: 2}}));
		}
	}
}

statiticalAnalysis(testcaseRawDir);
/*for (let scalar of typesArray)
	console.log(scalar);
for (let scalar of identifiersArray)
	console.log(scalar);
*/


















/**
 * STEP 2, Substitutions, change the Identifiers using "start" "end" "oldName" "on".
 * 
 * From testcase dir transport to testcase-normalized. Prepare a new types array.
 */
console.log('[+] STEP 2.');
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
								if (scalar.newName != current.name) {
									toSubstituteIdentifiers.push({
										oldName: current.name,
										newName: scalar.newName,
										start: current.start,
										end: current.end
									});
								}
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
			console.log('[+] Exception in substituteIdentifiers: ' + file + ':' + e);
		}
	}
}

substituteIdentifiers(testcaseRawDir, testcaseNormalizedDir);

typesArray = [];
statiticalAnalysis(testcaseNormalizedDir);
/*
for (let scalar of typesArray)
	console.log(scalar);
process.exit(0);
*/














/**
 * STEP 3, randomly substitute everything from testcase-normalized dir.
 * 
 * ObjectExpression - ObjectExpression
 */
console.log('[+] STEP 3.');
String.prototype.endsWith = function (suffix) {
	return this.indexOf(suffix, this.length - suffix.length) != -1;
};


const typeExpression = typesArray.filter(function (x) { if (x.type.toString().endsWith('Expression')) return x; });
//AssignmentExpression
//ArrayExpression
//ArrowFunctionExpression
//AwaitExpression
//BinaryExpression
//CallExpression
//ClassExpression
//ConditionExpression
//FunctionExpression
//LogicalExpression
//MemberExpression
//NewExpression
//ObjectExpression
//SequenceExpression
//TaggedTemplateExpression
//ThisExpression
//UnaryExpression
//UpdateExpression
//YieldExpression
//JSX...
const typeStatement = typesArray.filter(function (x) { if (x.type.toString().endsWith('Statement')) return x; });
//AssignmentStatement
//BlockStatement
//BreakStatement
//ContinueStatement
//DoWhileStatement
//DebuggerStatement
//EmptyStatement
//ExpressionStatement
//ForStatement
//ForInStatement
//ForOfStatement
//IfStatement
//LabeledStatement
//ReturnStatement
//SwitchStatement
//ThrowStatement
//TryStatement
//WhileStatement
//WithStatement
const typePattern = typesArray.filter(function (x) { if (x.type.toString().endsWith('Pattern')) return x; });
//AssignmentPattern
//ArrayPattern
//ObjectPattern
const typeProperty = typesArray.filter(function (x) { if (x.type.toString().endsWith('Property')) return x; });
//Property
//ExperimentalRestProperty
//ExperimentalSpreadProperty
//MetaProperty
const typeElement = typesArray.filter(function (x) { if (x.type.toString().endsWith('Element')) return x; });
//RestElement
//SpreadElement
//TemplateElement
//JSX...
const typeLiteral = typesArray.filter(function (x) { if (x.type.toString().endsWith('Literal')) return x; });
//Literal
//TemplateLiteral
const typeDeclaration = typesArray.filter(function (x) { if (x.type.toString().endsWith('Declaration')) return x; });
//ClassDeclaration
//FunctionDeclaration
//VariableDeclaration
//Export...
//Import...
const typeIdentifier = typesArray.filter(function (x) { if (x.type == 'Identifier') return x; });
const typeVariableDeclarator = typesArray.filter(function (x) { if (x.type == 'VariableDeclarator') return x; });
const typeClassBody = typesArray.filter(function (x) { if (x.type == 'ClassBody') return x; });
const typeMethodDefinition = typesArray.filter(function (x) { if (x.type == 'MethodDefinition') return x; });;
const typeSwitchCase = typesArray.filter(function (x) { if (x.type == 'SwitchCase') return x; });;

let round = 0;

//console.log(`${typeExpression.length} ${typeStatement.length} ${typePattern.length} ${typeProperty.length} ${typeElement.length} ${typeLiteral.length} ${typeDeclaration.length} ${typeVariableDeclarator.length} ${typeClassBody.length} ${typeMethodDefinition.length} ${typeSwitchCase.length}`);

function randomlySubstitute(pathI, pathO) {
	console.log('[+] ROUND ' + ++round + '.');
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
			let toSubstituteNodes = [];
			let mutated = 0;
			function traverseNode(node) {
				for (let i in node) {
					let current = node[i];
					//console.log(current);
					if ((current == node) || (typeof current == "string") || (typeof current == "number") || current == null) { }
					else {
						if (current.hasOwnProperty("type")) {

							if (current.type.toString().endsWith("Expression")) {
								if (current.type.toString() == 'CallExpression') {
									if (probability0dot50()) {
										mutated++;
										if (current.arguments.length == 0) {
											let randomScalar = typeExpression[Math.floor((Math.random() * (typeExpression.length)) + 0)];
											let codePiece = jsCode.substring(current.start, current.end);
											let newCallExpression = codePiece.substring(0, codePiece.lastIndexOf('(') + 1) + randomScalar.code + codePiece.substring(codePiece.lastIndexOf(')'), codePiece.length);
											toSubstituteNodes.push({
												start: current.start,
												end: current.end,
												code: newCallExpression
											});
											//console.log(`[+] Callback of argument counted 0: ${jsCode.substring(current.start, current.end)} \n----->>\n ${newCallExpression}`);
										}
										else {
											//console.log(current);
										}
										return;
									}
								}
								else if (current.type.toString() == 'ObjectExpression') {
									if (probability0dot50()) {
										mutated++;
										let randomScalar = typeExpression[Math.floor((Math.random() * (typeExpression.length)) + 0)];
										toSubstituteNodes.push({
											start: current.start,
											end: current.end,
											code: randomScalar.code
										});
										return;
									}
								}
								else {
									if (probability0dot10()) {
										mutated++;
										let randomScalar = typeExpression[Math.floor((Math.random() * (typeExpression.length)) + 0)];
										toSubstituteNodes.push({
											start: current.start,
											end: current.end,
											code: randomScalar.code
										});
										return;
									}
								}
							}
							else if (current.type.toString().endsWith("Statement")) {
								if (probability0dot10() && probability0dot10()) {
									mutated++;
									let randomScalar = typeStatement[Math.floor((Math.random() * (typeStatement.length)) + 0)];
									toSubstituteNodes.push({
										start: current.start,
										end: current.end,
										code: randomScalar.code
									});
									return;
								}
							}
							else if (current.type.toString().endsWith("Pattern")) {
								if (probability0dot10()) {
									mutated++;
									let randomScalar = typePattern[Math.floor((Math.random() * (typePattern.length)) + 0)];
									toSubstituteNodes.push({
										start: current.start,
										end: current.end,
										code: randomScalar.code
									});
									return;
								}
							}
							else if (current.type.toString().endsWith("Property")) {
								if (probability0dot10()) {
									mutated++;
									let randomScalar = typeProperty[Math.floor((Math.random() * (typeProperty.length)) + 0)];
									toSubstituteNodes.push({
										start: current.start,
										end: current.end,
										code: randomScalar.code
									});
									return;
								}
							}
							else if (current.type.toString().endsWith("Element")) {
								if (probability0dot10()) {
									mutated++;
									let randomScalar = typeElement[Math.floor((Math.random() * (typeElement.length)) + 0)];
									toSubstituteNodes.push({
										start: current.start,
										end: current.end,
										code: randomScalar.code
									});
									return;
								}
							}
							else if (current.type.toString().endsWith("Literal")) {
								if (probability0dot10()) {
									mutated++;
									let randomScalar = [];
									if (probability0dot33()) {
										randomScalar = typeIdentifier[Math.floor((Math.random() * (typeIdentifier.length)) + 0)];
									}
									else if (probability0dot33()) {
										randomScalar = typeExpression[Math.floor((Math.random() * (typeExpression.length)) + 0)];
									}
									else {
										randomScalar = typeLiteral[Math.floor((Math.random() * (typeLiteral.length)) + 0)];
									}
									toSubstituteNodes.push({
										start: current.start,
										end: current.end,
										code: randomScalar.code
									});
									return;
								}
							}
							else if (current.type.toString().endsWith("Declaration")) {
								if (probability0dot10()) {
									mutated++;
									let randomScalar = typeDeclaration[Math.floor((Math.random() * (typeDeclaration.length)) + 0)];
									let code = '';
									if ((current.type.toString() == "FunctionDeclaration") || (current.type.toString() == "ClassDeclaration")) {
										if (randomScalar.code.endsWith(';')) {
											code = randomScalar.code.substring(0, randomScalar.code.length - 1);
										}
										else
											code = randomScalar.code;
									}
									else if ((current.type.toString() == "VariableDeclaration")) {
										if (jsCode.substring(current.start, current.end).endsWith(';')) {
											if (randomScalar.code.endsWith(';')) {
												code = randomScalar.code;
											}
											else
												code = randomScalar.code + ';';
										}
										else {	//the origin does not contain ';'
											if (randomScalar.code.endsWith(';')) {
												code = randomScalar.code.substring(0, randomScalar.code.length - 1);
											}
											else
												code = randomScalar.code;
										}
									}
									else
										code = randomScalar.code;
									toSubstituteNodes.push({
										start: current.start,
										end: current.end,
										code: code
									});
									return;
								}
							}
							else {
								switch (current.type) {
									case 'Identifier':
										if (probability0dot10()) {
											mutated++;
											let randomScalar = [];
											if (probability0dot10()) {
												randomScalar = typeLiteral[Math.floor((Math.random() * (typeLiteral.length)) + 0)];
											}
											else if (probability0dot33()) {
												randomScalar = typeExpression[Math.floor((Math.random() * (typeExpression.length)) + 0)];
											}
											else {
												randomScalar = typeIdentifier[Math.floor((Math.random() * (typeIdentifier.length)) + 0)];
											}
											toSubstituteNodes.push({
												start: current.start,
												end: current.end,
												code: randomScalar.code
											});
											return;
										}
										break;
									case 'VariableDeclarator':
										if (probability0dot10()) {
											mutated++;
											let randomScalar = typeVariableDeclarator[Math.floor((Math.random() * (typeVariableDeclarator.length)) + 0)];
											toSubstituteNodes.push({
												start: current.start,
												end: current.end,
												code: randomScalar.code
											});
											return;
										}
										break;
									case 'ClassBody':
										if (probability0dot10()) {
											mutated++;
											let randomScalar = typeClassBody[Math.floor((Math.random() * (typeClassBody.length)) + 0)];
											toSubstituteNodes.push({
												start: current.start,
												end: current.end,
												code: randomScalar.code
											});
											return;
										}
										break;
									case 'MethodDefinition':
										if (probability0dot10()) {
											mutated++;
											let randomScalar = typeMethodDefinition[Math.floor((Math.random() * (typeMethodDefinition.length)) + 0)];
											toSubstituteNodes.push({
												start: current.start,
												end: current.end,
												code: randomScalar.code
											});
											return;
										}
										break;
									case 'SwitchCase':
										if (probability0dot10()) {
											mutated++;
											let randomScalar = typeSwitchCase[Math.floor((Math.random() * (typeSwitchCase.length)) + 0)];
											toSubstituteNodes.push({
												start: current.start,
												end: current.end,
												code: randomScalar.code
											});
											return;
										}
										break;
									default:
										break;

								}
							}
						}
						if (mutated < ARGUMENT_MUTATION_COUNT)
							traverseNode(current);
					}
				}
			}
			traverseNode(ast);
			if (mutated > 0) {
				let newContent = "";
				let fp = 0;
				for (let scalar of toSubstituteNodes) {
					newContent += jsCode.substring(fp, scalar.start);
					newContent += scalar.code;
					fp = scalar.end;
				}
				newContent += jsCode.substring(fp, jsCode.length);
				fs.writeFileSync(pathO + file.substring(0, file.length - 3) + randomString2() + '.js', newContent);
			}
		} catch (e) {
			if (e.toString().indexOf('SyntaxError') != -1) {
				//console.log('[+] Exception in randomlySubstitute SyntaxError: ' + file + ':' + e);
				fs.unlinkSync(pathI + file);
				//console.log('[-] delete ' + pathI + file);
			}
			else if (e.toString().indexOf('ENOSPC') != -1) {
				console.log('[+] Exception in randomlySubstitute : ' + file + ':' + e);
				execSync('node duplicate.js');

				let cminI = pathO;
				let cminO = './cminO/'
				aflcmin(cminI, cminO);
				let files = fs.readdirSync(cminI);
				for (let file of files) {
					fs.unlinkSync(cminI + file);
				}
				files = fs.readdirSync(cminO);
				for (let file of files) {
					fs.copyFileSync(cminO + file, cminI + file);
				}
				files = fs.readdirSync(cminO);
				for (let file of files) {
					fs.unlinkSync(cminO + file);
				}

			}
			else {
				console.log(`[+] Exception in randomlySubstitute ROUND ${round} : ${file} : ${e}`);
				console.trace();
			}
		}
	}
}







let files = fs.readdirSync(testcaseNormalizedDir);
for (let file of files) {
	fs.copyFileSync(testcaseNormalizedDir + file, testcaseOutputDir + file);
}


randomlySubstitute(testcaseNormalizedDir, testcaseOutputDir);
process.exit(0);
randomlySubstitute(testcaseNormalizedDir, testcaseOutputDir);
randomlySubstitute(testcaseNormalizedDir, testcaseOutputDir);
randomlySubstitute(testcaseNormalizedDir, testcaseOutputDir);
randomlySubstitute(testcaseOutputDir, testcaseOutputDir);
randomlySubstitute(testcaseOutputDir, testcaseOutputDir);
randomlySubstitute(testcaseOutputDir, testcaseOutputDir);
//heapdump.writeSnapshot(Date.now() + '.heapsnapshot', );
//process.exit(0);



files = fs.readdirSync(testcaseOutputDir);
for (let file of files) {
	fs.copyFileSync(testcaseOutputDir + file, testcaseRunDir + file);
}
















/**
 * STEP 4 The fuzzing...with some ugly operations.
 */
console.log('[+] STEP 4.');
const timeoutBigLoop = 0;
const timeoutSmallLoop = 0;

function loop() {
	exec('kill -9 $(pidof ' + binPath + ')');

	let files = fs.readdirSync(testcaseRunDir);

	let count = 0;
	let total = files.length;

	function runOne() {
		let file = files[count];
		if (count < total) {
			console.log('[+] node ./fuzz-child.js ' + testcaseRunDir + ' ' + file + ' ' + binPath + ' ' + crashDir + ' ' + testcaseOutputDir);

			try {
				let childSpawn = child_process.spawn('node', ['./fuzz-child.js', testcaseRunDir, file, binPath, crashDir, testcaseOutputDir],
					{ detached: true });

				childSpawn.on('error', (err) => { console.log('[-] Child process failed.\n' + err); count--; exec('kill -9 $(pidof ' + binPath + ')'); setTimeout(runOne, 6000); });
				childSpawn.on('close', (code) => { setTimeout(runOne, timeoutSmallLoop); });

				count++;
				if (count % 0x10 == 0)
					exec('kill -9 $(pidof ' + binPath + ')');
			} catch (e) {
				exec('kill -9 $(pidof ' + binPath + ')');
				setTimeout(runOne, 6000);
			}
		}
		else {
			setTimeout(loop, timeoutBigLoop);
		}
	}
	runOne(files);
	randomlySubstitute(testcaseOutputDir, testcaseRunDir);
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

function probability0dot20() {
	if (Math.floor(Math.random() + 0.20))
		return true;
	else
		return false;
}

function probability0dot33() {
	if (Math.floor(Math.random() + 0.33))
		return true;
	else
		return false;
}

function probability0dot50() {
	if (Math.floor(Math.random() + 0.50))
		return true;
	else
		return false;
}

function aflcmin(pathI, pathO) {
	let aflcminExec = execSync(`afl-cmin -i ${pathI} -o ${pathO} -m 81920000 -t 6000 -- ${binPath} @@`);
	let cminLog = '';
	aflcminExec.stdout.on('data', function (data) {
		cminLog += data;
	});
	aflcminExec.stderr.on('data', function (data) {
		cminLog += data;
	});
	aflcminExec.on('exit', function (code, signal) {
		console.log(cminLog);
	});
}
