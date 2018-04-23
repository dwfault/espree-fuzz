var exec = require('child_process').exec;
var fs = require('fs');

var arguments = process.argv.splice(2);

var fuzzeePath = arguments[0];
var crashPath = arguments[1];

var files = fs.readdirSync(crashPath);

var filterNos = ["asanUnsafeJSValue", "prepareOSREntry", "JSC::Register::jsValue()", "JSC::ConservativeRoots::genericAddSpan", "LeakSanitizer"];

var i = 0;

function reproduceOne(files) {
    if (i == files.length)
        return;

    var file = files[i];

    var reproduce = exec(fuzzeePath + ' ' + crashPath + file);
    var reproduceLog = '[-] ' + file + ':\n';
    reproduce.stderr.on('data', function (data) {
        reproduceLog += data;
    });
    reproduce.stdout.on('data', function (data) {
        reproduceLog += data;
    });
    reproduce.on('close', function (code, signal) {
        reproduceLog += '--------------------\n\n\n\n';
        var filted = false;
        for (filterNo of filterNos) {
            if (reproduceLog.indexOf(filterNo) != -1) {
                filted = true;
            }
        }
        if (filted == false)
            console.log(reproduceLog);
        else {
            exec("rm " + crashPath + file);
        }
        i++;
        reproduceOne(files);
    });
}
reproduceOne(files);
