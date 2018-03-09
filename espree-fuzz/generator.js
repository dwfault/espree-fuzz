"use strict";
const Linter = require('eslint').Linter;
const linter = new Linter();
//const esutils = require("esutils");
const espree = require("espree");
const fs = require("fs");


/**
 * STEP 1, Statitical analysis towards "typed" "identifiers" appeard in testcases.
 * 
 * havent done any substitutions, just try some fix.
 */

let identifiersArray = [];
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
								let scalar = identifiersArray.filter(function (x) { if(x.oldName == current.name) return x;})[0];
								if (scalar != undefined) {
									scalar.count++;
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

statiticalAnalysis("./testcase-stress/");
//console.log(typesArray);
//console.log(identifiersArray);
for (let scalar of typesArray)
	console.log(scalar);
for (let scalar of identifiersArray)
	console.log(scalar);


	

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
fs.readFile('../test2.js', 'utf-8', function (err, jsCode) {
	console.log(jsCode);
	let ast = espree.parse(jsCode, { ecmaVersion: 6 });
	console.log(ast);

	console.log('========');


	function traverseNode(node, depth) {
		depth++;
		let start = null;                                             //  important fields of the node
		let end = null;
		let type = null;                                              //

		for (let index in node) {

			if (node[index] == node) {
				depth--;
				return;
			}
			if (typeof node == "string") {
				depth--;
				return;
			}
			console.log('[+] 前序遍历' + 'depth:' + depth + ' ' + index + ':' + node[index]);   //  dealing with fields
			if (index == 'start') {
				//console.log('startttttt!');
			}
			//
			traverseNode(node[index], depth);
		}
	}
	traverseNode(ast, 0);

});
*/