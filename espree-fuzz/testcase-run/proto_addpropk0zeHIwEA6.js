//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/// <reference path="../UnitTestFramework/UnitTestFramework.js" />
try {
if (o474.o709(o249, name, true)) {
    try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}
}
}catch(e){}


var o2 = o1("IDBIndex") | 0;

function Intl() { try {
o1 = null;
}catch(o421){} /*reserve slots, make jit code simpler to read*/ }
try {
o810 = o2;
}catch(Module){}

var o3 = 'const f'

function o7(o8) {
    try {
o52 = 1;
}catch(e){}
    try {
o1087 = 2;
}catch(e){}
}

// Need to run this twice. Test with maxinterpretcount 1 and 2
try {
o4(o6());
}catch(e){}
try {
o7(o6());
}catch(e){}

var o11 = o6([2, NaN, function(){}]);

try {
o12.o13(Object.getPrototypeOf(o11) === o2);
}catch(e){}
try {
o2.__proto__ = { get o9() { try {
return "x";
}catch(e){} } };
}catch(e){}

try {
o7(o11);
}catch(e){}

try {
o12.o14("x", o11.o9, "Shouldn't add field x");
}catch(e){}

try {
o0.o15("pass");
}catch(e){}
