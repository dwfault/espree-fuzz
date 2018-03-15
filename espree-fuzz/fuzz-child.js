var exec = require('child_process').exec;
var execFile = require('child_process').execFile;
var fs = require('fs');

var arguments = process.argv.splice(2);

var outputFilePath = arguments[0];
var outputFileName = arguments[1];
var binPath = arguments[2];
var crashDir = arguments[3];
var recycleDir = arguments[4];


console.log(binPath + ' ' + outputFileName);

var jscExecFile = execFile(binPath, [outputFilePath + outputFileName], { timeout: 10000 }, (error, stdout, stderr) => {
    if (stdout.indexOf('AddressSanitizer') != -1 || (stderr, indexOf('AddressSanitizer') != -1)) {
        exec('mv ' + outputFilePath + outputFileName + ' ' + crashDir + outputFileName);
    }
    else {
        exec('mv ' + outputFilePath + outputFileName + ' ' + recycleDir + outputFileName);
    }
});