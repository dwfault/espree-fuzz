//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0;
try {
eval("evalCode1 = function() { return evalCode1 + ' ' + captured; }");
}catch(e){}

var o58=new stdlib.Uint32Array(buffer);
var o2 = undefined;

var o3 = "ok";

function e()
{
    var o5 = 5;
    var o3 = "bob in setCode2";
    try {
eval("evalCode2 = function() { return evalCode2 + ' ' + captured; }");
}catch(e){}
    
    try {
eval.call(this, "evalCode3 = function() { return evalCode3 + ' ' + captured; }")
}catch(e){}
}

try {
length();
}catch(e){}
try {
o6.o7(o8, 50);
}catch(e){}

function o8()
{
    try {
o9(`evalCode1: ${o0()}`, true);
}catch(e){} //function () { return evalCode1 + ' ' + captured; } ok"
    try {
o9(`evalCode2: ${o1()}`, true);
}catch(e){} //function () { return evalCode2 + ' ' + captured; } bob in setCode2"
    
    try {
o9(`evalCode3: ${o2()}`, true);
}catch(e){} //function () { return evalCode3 + ' ' + captured; } ok"
}

