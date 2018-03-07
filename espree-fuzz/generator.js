"use strict";
const esutils = require("esutils");
const espree = require("espree");
const fs = require("fs");


fs.readFile('../test2.js','utf-8',function(err,jsCode){
    console.log(jsCode);
    let ast = espree.parse(jsCode,{ecmaVersion:6});
    console.log(ast);
    console.log(ast.body[0].id);
    
    console.log(Object.getPrototypeOf(ast.body[0].id)===Object.getPrototypeOf(ast));//extensible node
    console.log(Object.getPrototypeOf(ast.body[0].id));
    console.log(Object.getOwnPropertyNames(ast.body[0].id));

    let ownPropertyName = 'type';
    console.log(ast.body[0].id[ownPropertyName]);
    
    console.log(ast.body[2].body.body[0]);
    //let tokens = espree.tokenize(jsCode);
    //console.log(tokens);
});
