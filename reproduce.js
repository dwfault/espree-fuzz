var exec = require('child_process').exec;
var fs = require('fs');

var arguments = process.argv.splice(2);

var fuzzeePath = arguments[0];
var crashPath = arguments[1];

var files = fs.readdirSync(crashPath);

var filterNos = ["asanUnsafeJSValue",];

for (file of files) {

    var reproduce = exec(fuzzeePath + ' ' + file);
    var reproduceLog = '[-] ' + file + ':\n';
    reproduce.stderr.on('data', function (data) {
        reproduceLog += data;
    });
    reproduce.stdout.on('data', function (data) {
        reproduceLog += data;
    });
    reproduce.on('close', function (code, signal) {
        reproduceLog += '--------------------';
        var filted = false;
        for (filterNo of fileterNos) {
            if (reproduceLog.indexOf(filterNos) != -1) {
                filted = true;
            }
        }
        if(filted == false)
            console.log(reproduceLog);
    });
}