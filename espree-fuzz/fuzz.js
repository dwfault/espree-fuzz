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
const binPath = "~/Desktop/webkit-afa67f9-asan/WebKitBuild/Debug/bin/jsc";


const ARGUMENT_MUTATION_COUNT = 6;







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
 * STEP 2.1, Normalized.Substitutions, change the Identifiers using "start" "end" "oldName" "on".
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

			toSubstituteIdentifiers = toSubstituteIdentifiers.sort(function (a, b) { return (a.start - b.start); });

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

/**
 * STEP 2.2, Normalized.Substitutions, add Statement with try catch,
 * 
 * From testcase dir transport to testcase-normalized. Prepare a new types array.
 */
function substituteStatements(pathI, pathO) {
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
			let toSubstituteStatements = [];
			function traverseNode(node) {
				for (let i in node) {
					let current = node[i];
					if ((current == node) || (typeof current == "string") || (typeof current == "number") || current == null) { }
					else {
						if (current.hasOwnProperty("type")) {
							typesArray.push({
								type: current.type,
								code: jsCode.substring(current.start, current.end)
							});
							if ((current.type.toString().endsWith("Statement") && current.type.toString() != "BlockStatement")) {
								//console.log(jsCode.substring(current.start, current.end));
								//console.log(current);

								toSubstituteStatements.push({
									//code: jsCode.substring(current.start, current.end),
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
			if (toSubstituteStatements.length > 0) {
				let insertPoints = [];
				for (let scalar of toSubstituteStatements) {
					insertPoints.push({
						position: 1,
						value: scalar.start
					});
					insertPoints.push({
						position: -1,
						value: scalar.end
					});
				}
				insertPoints = insertPoints.sort(function (a, b) { return (a.value - b.value); });

				let newContent = [];
				newContent = jsCode.substring(0, insertPoints[0].value);
				for (let i = 0; i < insertPoints.length; i++) {
					//console.log(insertPoints[i]);

					if (insertPoints[i].position == 1) {
						newContent += 'try {\n';
					}
					else if (insertPoints[i].position == -1) {
						newContent += '\n}catch(e){}';
					}
					try {
						newContent += jsCode.substring(insertPoints[i].value, insertPoints[i + 1].value);
					}
					catch (e) {
						newContent += jsCode.substring(insertPoints[i].value, jsCode.length);
					}
				}
				insertPoints = null;


				fs.writeFileSync(pathO + file, newContent);
			}

		} catch (e) {
			console.log('[+] Exception in substituteStatements: ' + file + ':' + e);
		}
	}
}
substituteStatements(testcaseNormalizedDir, testcaseNormalizedDir);

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
for (let scalar of typeStatement) {
	scalar.code = 'try { ' + scalar.code + ' } catch(e) {}';
}
/*
for (let scalar of typeStatement) {
	console.log(scalar);
}
process.exit(0);
*/
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
const typeMethodDefinition = typesArray.filter(function (x) { if (x.type == 'MethodDefinition') return x; });
const typeSwitchCase = typesArray.filter(function (x) { if (x.type == 'SwitchCase') return x; });

const typeLeftValueExpression = typeExpression.filter(function (x) { if (x.type == 'MemberExpression') return x; });
const typeLeftValueIdentifier = typeIdentifier.filter(function (x) { if ((x.code[0] == 'o') && (x.code[1] >= '0') && (x.code[1] <= '9')) return x; });

let round = 0;
const p = probability;

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
					let parent = node;
					if ((current == parent) || (typeof current == "string") || (typeof current == "number") || current == null) {
					}
					else {
						if (current.hasOwnProperty("type")) {
							/*
							if (parent.hasOwnProperty("type")) {
								console.log(parent);
								console.log(`[-] parent: ${jsCode.substring(parent.start, parent.end)}`);
								console.log(current);
								console.log(`[-] child: ${jsCode.substring(current.start, current.end)}`);
								console.log('--------------------------');
							}
							*/
							let leftValueFlag = false;
							if (parent.hasOwnProperty("type")) {
								switch (parent.type.toString()) {
									case 'AssignmentExpression':
										if (parent.left == current) {
											leftValueFlag = true;//current should be a left value
										}
										break;
									case 'UpdateExpression':
										if (parent.argument == current) {
											leftValueFlag = true;//current should be a left value
										}
										break;
									case 'UnaryExpression':
										if (parent.operator.toString() == 'delete') {
											leftValueFlag = true;//current should be a left value
										}
										break;
								}
							}
							if (leftValueFlag) {
								if (p(0.5)) {
									mutated++;
									let randomScalar = [];
									if (p(0.5)) {
										randomScalar = typeLeftValueExpression[Math.floor((Math.random() * (typeLeftValueExpression.length)) + 0)];
									}
									else {
										randomScalar = typeLeftValueIdentifier[Math.floor((Math.random() * (typeLeftValueIdentifier.length)) + 0)];
									}
									toSubstituteNodes.push({
										start: current.start,
										end: current.end,
										code: randomScalar.code
									});
								}
							}
							else {
								if (current.type.toString().endsWith("Expression")) {
									if (current.type.toString() == 'CallExpression') {
										if (p(0.5)) {
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
										if (p(0.5)) {
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
										if (p(0.1)) {
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
									if (p(0.01)) {
										mutated++;
										let randomScalar = typeStatement[Math.floor((Math.random() * (typeStatement.length)) + 0)];
										if (p(0.5)) {
											let randomScalar2 = typeStatement[Math.floor((Math.random() * (typeStatement.length)) + 0)];
											randomScalar.code += randomScalar2.code;
										}
										toSubstituteNodes.push({
											start: current.start,
											end: current.end,
											code: randomScalar.code
										});
										return;
									}
								}
								else if (current.type.toString().endsWith("Pattern")) {
									if (p(0.1)) {
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
									if (p(0.1)) {
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
									if (p(0.1)) {
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
									if (p(0.1)) {
										mutated++;
										let randomScalar = [];
										if (p(0.33)) {
											randomScalar = typeIdentifier[Math.floor((Math.random() * (typeIdentifier.length)) + 0)];
										}
										else if (p(0.33)) {
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
									if (p(0.1)) {
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
									switch (current.type.toString()) {
										case 'Identifier':
											let randomScalar = [];
											if (parent.hasOwnProperty("type")) {
												if (p(0.1)) {
													switch (parent.type.toString()) {
														case 'FunctionDeclaration':	//This Identifier is the name of the function.
														case 'ClassDeclaration':	//This Identifier is the name of the class.
														case 'NewExpression':		//This Identifier is like Float32Array in "new Float32Array(o0)"
														case 'CallExpression':		//This Identifier is like o5 in "o5()" BUT**could be substitute to few expressions without a ()**
															mutated++;
															randomScalar = typeIdentifier[Math.floor((Math.random() * (typeIdentifier.length)) + 0)];
															toSubstituteNodes.push({
																start: current.start,
																end: current.end,
																code: randomScalar.code
															});
															return;
															break;
														case 'Property':			//This Identifier is like value in "get value() { return "funky"; }".
															mutated++;
															if (p(0.2)) {
																randomScalar = typeLiteral[Math.floor((Math.random() * (typeLiteral.length)) + 0)];
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
															break;

														case 'VariableDeclarator':	//This Indentifier is like o0 in "o0 = new Array(0x7f)" BUT**should be lvalue if as expression**
														case 'MemberExpression':	//This Indentifier is like o2 in "o2[-1]" BUT**rvalue lead to error if as expression**
														case 'UpdateExpression':	//This Indentifier is like o5 in "o5++" BUT**should be lvalue if as expression**
														case 'SwitchStatement':		//This Indentifier is like o1 in "switch(o1) ..."	BUT**should be lvalue if as expression**
														case 'SpreadElement':		//This Indentifier is like o0 in "...o0" BUT**should be lvalue if as expression**
															mutated++;
															if (p(0.50)) {
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
															break;
														case 'BinaryExpression':	//This Indentifier is like o1 in "value + o1" BUT**should be lvalue if as expression**
														case 'LogicalExpression':	//This Indentifier is like o6 in "o6||o7" BUT**should be lvalue if as expression**
														case 'AssignmentExpression'://This Indentifier is like o1 in "o1 = '['" BUT**rvalue lead to error if as expression**
														case 'UnaryExpression':		//This Indentifier is like o6 in "+o6"
														case 'ReturnStatement':		//This Indentifier is like o2 in "return 02;"
														case 'ForInStatement':		//This Indentifier is like o3 in "for(o4 in o3)"
														case 'ForOfStatement':		//This Indentifier is like o3 in "for(o4 of o3)"
														case 'IfStatement':			//This Indentifier is like o3 in "if(o3){...}"
														case 'WhileStatement':			//This Indentifier is like o3 in "while(o3){...}"
														case 'WithStatement':			//This Indentifier is like o3 in "with(o3){...}"
														default:
															mutated++;
															if (p(0.1)) {
																randomScalar = typeLiteral[Math.floor((Math.random() * (typeLiteral.length)) + 0)];
															}
															else if (p(0.33)) {
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
															break;
													}
												}
											}
											else if (parent instanceof Array) {
												if (p(0.1)) {
													mutated++;
													randomScalar = typeIdentifier[Math.floor((Math.random() * (typeIdentifier.length)) + 0)];
													toSubstituteNodes.push({
														start: current.start,
														end: current.end,
														code: randomScalar.code
													});
													return;
												}
											}
											break;
										case 'VariableDeclarator':
											if (p(0.1)) {
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
											if (p(0.1)) {
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
											if (p(0.1)) {
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
											if (p(0.1)) {
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
						}
						if (mutated < ARGUMENT_MUTATION_COUNT) {
							traverseNode(current);
						}
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
				if (newContent.toString() != jsCode.toString())
					fs.writeFileSync(pathO + file.substring(0, file.length - 3) + randomString2() + '.js', newContent);
			}
		} catch (e) {
			if (e.toString().indexOf('SyntaxError') != -1) {
				//console.log('[+] Exception in randomlySubstitute SyntaxError: ' + file + ':' + e);
				//fs.unlinkSync(pathI + file);
			}
			else if (e.toString().indexOf('ENOSPC') != -1) {
				console.log('[+] Exception in randomlySubstitute : ' + file + ':' + e);
				execSync('node duplicate.js');

				let cminI = pathO;
				let cminO = './cminO/'
				if (aflcmin(cminI, cminO)) {
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
			}
			else {
				console.log(`[+] Exception in randomlySubstitute ROUND ${round} : ${file} : ${e}`);
			}
		}
	}
}







let files = fs.readdirSync(testcaseNormalizedDir);
for (let file of files) {
	fs.copyFileSync(testcaseNormalizedDir + file, testcaseOutputDir + file);
}


randomlySubstitute(testcaseNormalizedDir, testcaseOutputDir);
randomlySubstitute(testcaseNormalizedDir, testcaseOutputDir);
randomlySubstitute(testcaseNormalizedDir, testcaseOutputDir);
randomlySubstitute(testcaseOutputDir, testcaseOutputDir);
randomlySubstitute(testcaseOutputDir, testcaseOutputDir);
randomlySubstitute(testcaseOutputDir, testcaseOutputDir);
randomlySubstitute(testcaseOutputDir, testcaseOutputDir);
//ROUND 8.
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
				if (count % 0x18 == 0)
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


function probability(value) {
	//assert(0.0 < value <1.0 )
	if (Math.floor(Math.random() + value))
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
	if (cminLog.indexOf('no instrumentation detected'))
		return false;
	else
		return true;
}