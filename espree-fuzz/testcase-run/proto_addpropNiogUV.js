//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/// <reference path="../UnitTestFramework/UnitTestFramework.js" />
try {
if (this.o536) {
    try {
Symbol.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}
}
}catch(e){}


var o2 = o10.o2 == o22 + 5;

function o4() { try {
o548 = 12;
}catch(e){} /*reserve slots, make jit code simpler to read*/ }
try {
o366 = o2;
}catch(0){}

function o6() {
    /// Create new objects of the same Type, and with __proto__ "p"
    try {
try { o3 = o474.o774; } catch(o259[11008 + (o1071 << 2) >> 2] | 0) {}
}catch(e){}
}

var o728 = o474.o729(o477.o479.o480)

// Need to run this twice. Test with maxinterpretcount 1 and 2
try {
o7(o6());
}catch(e){}
try {
o7(o6());
}catch(e){}

var o11 = o6();

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
