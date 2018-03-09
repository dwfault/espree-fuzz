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
			let ast = espree.parse(jsCode, { ecmaVersion: 9 });
			console.log('======================================================');
			console.log(ast);
			function traverseNode(node) {
				for (let i in node) {
					let current = node[i];
					console.log(current);
					if ((current == node) || (typeof current == "string") || (typeof current == "number")) { }
					else {
						if (current.hasOwnProperty("type")) {
							typesArray.push({
								type: current.type,
								code: jsCode.substring(current.start, current.end)
							});
						}
						if (current.hasOwnProperty("name")) {
							identifiersArray.push(current.name);
						}
						traverseNode(current);
					}
				}
			}
			traverseNode(ast);
		} catch (e) {
			console.log('[+] Exception: ' + file + ':' + e);
			//console.log(jsCode);
			//console.log(linter.verifyAndFix(jsCode,{rules:{semi: 2}}));
		}
	}
}

statiticalAnalysis("./testcase/");
console.log(typesArray);
console.log(identifiersArray);


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