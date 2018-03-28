const fs = require('fs');
const exec = require('child_process').exec;

let hashSet = new Set();

let files = fs.readdirSync('./');
let i = 0;

let duplicatedCount = 0;
let unDuplicatedCount = 0;

function loop() {
	let hashExec = exec('md5 ' + files[i], function (error, stdout, stderr) {
		let hash = stdout;
		hash = hash.slice(hash.indexOf('=') + 2, hash.length - 1);

		if (hashSet.has(hash)) {
			console.log('[-] duplicated: ' + duplicatedCount++ + ' ' + files[i]+':'+hash);
		}
		else {
			console.log('[+] first time seen: ' + unDuplicatedCount++ + ' ' + files[i]+':'+hash);
			hashSet.add(hash);
		}
		i++;
		if(i < files.length)
			setTimeout(loop,1);
	});
}
loop();

