const fs = require('fs');
const exec = require('child_process').exec;

let hashSet = new Set();
const path = './testcase-output/'

const files = fs.readdirSync(path);
let i = 0;

let duplicatedCount = 0;
let unDuplicatedCount = 0;

function loop() {
	let hashExec = exec('md5 ' + path + files[i], function (error, stdout, stderr) {
		console.log(stderr);
		
		let hash = stdout.slice(stdout.indexOf('=') + 2, stdout.length - 1);
		
		if (hashSet.has(hash)) {
			console.log('[-] Remove duplicated: ' + duplicatedCount++ + ' ' + files[i] + ':' + hash);
			fs.unlinkFileSync(path + files[i]);
		}
		else {
			console.log('[+] First time seen: ' + unDuplicatedCount++ + ' ' + files[i] + ':' + hash);
			hashSet.add(hash);
		}
		i++;
		if (i < files.length)
			setTimeout(loop, 0);
	});
}
loop();

