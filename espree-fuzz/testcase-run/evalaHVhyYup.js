//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o30;
try {
e("evalCode1 = function() { return evalCode1 + ' ' + captured; }");
}catch(e){}

var o10 = o0.o4({
        name: "[0].indexOf(-0.0) should return 0",
        o3: function() {
            try {
o4.o6(0, [0].indexOf(-0.0), "[0].indexOf(-0.0) should return 0");
}catch(e){}
        }
    });
var o2 = undefined;

var o3 = "ok";

function o4()
{
    var o5 = 5;
    var o3 = "bob in setCode2";
    try {
eval("evalCode2 = function() { return evalCode2 + ' ' + captured; }");
}catch(e){}
    
    try {
eval.o3(o1("getAllCookies"), "evalCode3 = function() { return evalCode3 + ' ' + captured; }")
}catch(e)try { {
o331 = null;
} } catch(e) {}try { {
o7.o14(o3.hasOwnProperty('caller'), "Class does not report that it has own property 'caller'")
} } catch(e) {}
}

try {
o4('a'.replace);
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

