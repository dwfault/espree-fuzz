var exec = require('child_process').exec;
var execFile = require('child_process').execFile;
var fs = require('fs');

var arguments = process.argv.splice(2);

var fuzzFilePath = arguments[0];
var fuzzFileName = arguments[1];
var binPath = arguments[2];
var crashDir = arguments[3];
var recycleDir = arguments[4];


console.log(binPath + ' ' + fuzzFilePath + fuzzFileName);

var jscExecFile = execFile(binPath, [fuzzFilePath + fuzzFileName], { timeout: 10000 }, (error, stdout, stderr) => {
    console.log('[+] stdout:' + stdout);
    console.log('[+] stderr:' + stderr);
    if (stdout.indexOf('AddressSanitizer') != -1 || (stderr.indexOf('AddressSanitizer') != -1)) {
        exec('cp ' + fuzzFilePath + fuzzFileName + ' ' + crashDir + fuzzFileName);
        exec('mv ' + fuzzFilePath + fuzzFileName + ' ' + recycleDir + fuzzFileName);
    }
    else {
        exec('mv ' + fuzzFilePath + fuzzFileName + ' ' + recycleDir + fuzzFileName);
    }
});