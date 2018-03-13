"use strict";
const Linter = require('eslint').Linter;
const linter = new Linter();
//const esutils = require("esutils");
const espree = require("espree");
const fs = require("fs");

const testcaseDir = "./testcase/";
const testcaseNormalizedDir = "./testcase-normalized/";

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
 * STEP 2, Substitutions, change the Identifiers using "start" "end" "oldName" "newName".
 * 
 * From testcase dir transport to testcase-normalized.
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



/**
 * STEP 4, randomly substitute everything from testcase-normalized dir.
 * 
 * 
 */
typesArray = [];
statiticalAnalysis(testcaseNormalizedDir);
for (let scalar of typesArray)
	console.log(scalar);
