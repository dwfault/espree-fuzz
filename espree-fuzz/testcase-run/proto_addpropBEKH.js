//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/// <reference path="../UnitTestFramework/UnitTestFramework.js" />
try {
if (o863 & 0x800 && this.o0.o1) {
    try {
o0.o1("overflow");
}catch(e){}
}
}catch(e){}


var o25 = o20.keys();

function o4() { try {
o935.o939 = 12;
}catch(e){} /*reserve slots, make jit code simpler to read*/ }
try {
o4.o1("urn") = o2;
}catch(e){}

function o6() {
    /// Create new objects of the same Type, and with __proto__ "p"
    try {
return new o4();
}catch(e){}
}

function o7(o8) {
    try {
this.o0 = 1;
}catch(e){}
    try {
o35[4294967294]o8.o101 << o1095.o10 = 2;
}catch(e){}
}

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
