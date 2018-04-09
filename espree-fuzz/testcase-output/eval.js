//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0;
eval("evalCode1 = function() { return evalCode1 + ' ' + captured; }");

var o1 = undefined;
var o2 = undefined;

var o3 = "ok";

function o4()
{
    var o5 = 5;
    var o3 = "bob in setCode2";
    eval("evalCode2 = function() { return evalCode2 + ' ' + captured; }");
    
    eval.call(this, "evalCode3 = function() { return evalCode3 + ' ' + captured; }")
}

o4();
o6.o7(o8, 50);

function o8()
{
    o9(`evalCode1: ${o0()}`, true); //function () { return evalCode1 + ' ' + captured; } ok"
    o9(`evalCode2: ${o1()}`, true); //function () { return evalCode2 + ' ' + captured; } bob in setCode2"
    
    o9(`evalCode3: ${o2()}`, true); //function () { return evalCode3 + ' ' + captured; } ok"
}

