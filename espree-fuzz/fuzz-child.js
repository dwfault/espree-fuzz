var exec = require('child_process').exec;
var fs = require('fs');

var arguments = process.argv.splice(2);

var fuzzFilePath = arguments[0];
var fuzzFileName = arguments[1];
var binPath = arguments[2];
var crashDir = arguments[3];
var recycleDir = arguments[4];


console.log('[+] ' + binPath + ' ' + fuzzFilePath + fuzzFileName);

var jscExec = exec(binPath + ' ' + fuzzFilePath + fuzzFileName, { timeout: 8000 });
var log = '';
jscExec.stdout.on('data', function (data) {
    log += data;
});
jscExec.stderr.on('data', function (data) {
    log += data;
});
jscExec.on('exit', function (code, signal) {
    if ((log.indexOf('AddressSanitizer') != -1) && (log.indexOf('LeakSanitizer') == -1)) {
        exec('cp ' + fuzzFilePath + fuzzFileName + ' ' + crashDir + fuzzFileName);
        exec('mv ' + fuzzFilePath + fuzzFileName + ' ' + recycleDir + fuzzFileName);
    }
    else {
        exec('mv ' + fuzzFilePath + fuzzFileName + ' ' + recycleDir + fuzzFileName);
    }
});