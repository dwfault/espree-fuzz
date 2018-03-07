"use strict";

//const eslint = require('../eslint');
const eslump = require('eslump');

const child_process = require('child_process');
const exec = child_process.exec;

const fs = require('fs');



function GenJS() {
	let randomJSString = eslump.generateRandomJS({
		sourceType: "script",
		//sourceType: "module",
		maxDepth: 8,
		comments: false,
		whitespace: false
	});
	return (randomJSString);
}


function Run() {

	function loop() {
		for (let i = 0; i < iteratorCount; i++) {
			let outputFileName = RandomString16() + '.js';

			fs.writeFile('output/' + outputFileName, GenJS(), function () {
				
				let childSpawn = child_process.spawn('node', ['./fuzz-child.js', outputFileName, binPath], { detached: true });
				childSpawn.stdout.on('data', function (data) {
					console.log('[+] child stdout:' + data);
				});
				childSpawn.stderr.on('data', function (data) {
					console.log('[+] child stdout:' + data);
				});
				childSpawn.on('error', (err) => {
					console.log('[+] Failed to start child process.');
					console.log(err);
				});
				childSpawn.on('close', (code => { }));
			});
		}
		setTimeout(loop, timeout);
	}
	loop();
}

function Init() {
	let mkdirExec = exec('mkdir -p output');
	mkdirExec.stdout.on('data', function (data) {
		console.log(data);
	});
	mkdirExec.stderr.on('data', function (data) {
		console.log(data);
	});
	mkdirExec.on('exit', function (code, signal) {
		if (code != 0)
			console.log(code + ':' + signal);
		else {
			let mkdirExec = exec('mkdir -p crash');
			mkdirExec.stdout.on('data', function (data) {
				console.log(data);
			});
			mkdirExec.stderr.on('data', function (data) {
				console.log(data);
			});
			mkdirExec.on('exit', function (code, signal) {
				if (code != 0)
					console.log(code + ':' + signal);
			});
		}
	});
}


//	~/Desktop/webkit-320b1fc/bin/jsc
//	~/Desktop/gecko-dev-afl/js/src/build_DBG.OBJ/js/src/shell
const binPath = "cat";

console.log('[+] Javascript engine path:' + binPath + '\n');
const timeout = 15000;
const iteratorCount = 300;
Init();
Run();




































function RandomString16() {
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkmnoprstuvwxyz0123456789';
	var str = '';
	for (let i = 0; i < 16; i++) {
		str += chars.charAt(Math.floor(Math.random() * 60));
	}
	return str;
}