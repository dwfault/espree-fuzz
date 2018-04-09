var espree = require("espree");
var fs = require("fs");
var Linter = require('eslint').Linter;
var linter = new Linter();

var arguments = process.argv.splice(2);

var fileToValidate = arguments[0];

let jsCode = fs.readFileSync(fileToValidate, 'utf-8');
try {
    let ast = espree.parse(jsCode, {
        ecmaVersion: 9, sourceType: "script", ecmaFeatures: {
            jsx: true,
            globalReturn: true,
            impliedStrict: false,
            experimentalObjectRestSpread: true
        }
    });
    function traverseNode(node) {
        for (let i in node) {
            let current = node[i];
            if ((current == node) || (typeof current == "string") || (typeof current == "number") || current == null) {
            }
            else {
                if (current.type != undefined)
                    console.log(`[+] ${current.type}:${jsCode.substring(current.start, current.end)}`);
                traverseNode(current);
            }
        }
    }
    traverseNode(ast);
} catch (e) {
    console.log('[+] Exception in staticalAnalysis: ' + e);
    console.log(linter.verifyAndFix(jsCode, { rules: { semi: 2 } }, { fix: true }));
}