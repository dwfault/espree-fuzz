"use strict";
const Linter = require('eslint').Linter;
const linter = new Linter();
//const esutils = require("esutils");
const espree = require("espree");
const fs = require("fs");


/**
 * PHASE 1, Statitical analysis towards "typed" "identifiers" appeard in testcases.
 * 
 * havent done any substitutions, just try some fix.
 */

let identifiersArray = [];
let typesArray = [];

function statiticalAnalysis(path) {
	fs.readdir(path, function (err, files) {
		console.log(err);
		files.forEach(function (file) {
			console.log(file);
			fs.readFile(path + file, 'utf-8', function (err, jsCode) {
				try {
					let ast = espree.parse(jsCode, { ecmaVersion: 6 });
					//console.log('===');
					//console.log(ast);
					function traverseNode(node) {
						let start = null;
						let end = null;
						let type = null;
						for (let index in node) {
							if (node[index] == node) {
								return;
							}
							if (typeof node == "string") {
								return;
							}
							//console.log('[+] '+ index + ':' + node[index]);
							if (index == 'type') {
								//console.log(node[index]);
								typesArray.push(node[index]);
							}
							else if(index == 'name'){
								//console.log(node[index]);
								identifiersArray.push(node[index]);
							}
							traverseNode(node[index]);
						}
					}
					traverseNode(ast);
				} catch (e) {
					console.log(file+':'+e);
					console.log(jsCode);
					let message = linter.verifyAndFix(jsCode,{rules:{semi: 2}});
					console.log(message);
				}
			});
		});
	});
	console.log(typesArray);
	console.log(identifiersArray);
}

statiticalAnalysis("../testcase/");



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