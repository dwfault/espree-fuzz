//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0;
eval("evalCode1 = function() { return evalCode1 + ' ' + captured; }");

var o2 = undefined;
var o4 = undefined;

var o5 = "ok";

function o6()
{
    var o7 = 5;
    var o5 = "bob in setCode2";
    eval("evalCode2 = function() { return evalCode2 + ' ' + captured; }");
    
    eval.call(this, "evalCode3 = function() { return evalCode3 + ' ' + captured; }")
}

o6();
o9.o10(o11, 50);

function o11()
{
    o12(`evalCode1: ${o0()}`, true); //function () { return evalCode1 + ' ' + captured; } ok"
    o12(`evalCode2: ${o2()}`, true); //function () { return evalCode2 + ' ' + captured; } bob in setCode2"
    
    o12(`evalCode3: ${o4()}`, true); //function () { return evalCode3 + ' ' + captured; } ok"
}

