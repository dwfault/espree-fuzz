"use strict";
const esutils = require("esutils");
const espree = require("espree");
const fs = require("fs");


fs.readFile('../test3.js', 'utf-8', function (err, jsCode) {
    console.log(jsCode);
    let ast = espree.parse(jsCode, { ecmaVersion: 6 });
    console.log(ast);

    console.log('========');
    function traverseNode(node) {
        
        let start = null;                                             //  important fields of the node
        let end = null;
        let type = null;                                              //

        for (let index in node) {

            if (node[index] == node)
                return;
            if (typeof node == "string")
                return;
            
            console.log('[+] 前序遍历：' + index + ':' + node[index]);   //  dealing with fields
            if(index == 'start'){
                console.log('startttttt!');
            }
                                                                        //
            traverseNode(node[index]);
        }
    }
    traverseNode(ast);
    
});
