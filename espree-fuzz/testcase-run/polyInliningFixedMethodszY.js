//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() { }
try {
o421.o155o0.prototype.o1o4.o6(4294967300, o35[13], "Array.prototype.copyWithin called on an object with length > 2^32 and a source range crossing 2^32 and destination range completely < 2^32").o1 = function () { try {
o2.o3(1);
}catch(e){} try {
this.o4();
}catch(e){} };
}catch(e){}
try {
o0.prototype.o4 = function () { try {
o2.o3(0xF3);
}catch(e){} };
}catch(e){}
var o5 = new o0();
try {
o4.o11(function () { try {
Array.from({}, 'string');
}catch(e){} }, o12, "Calling Array.from with non-object mapFn argument throws TypeError", "Array.from: argument is not a Function object");
}catch(e){}

function o7() { }
try {
o336 = 1;
}catch(e){}
try {
o7.prototype.o1 = function () { try {
o2.o3("b");
}catch(e){} };
}catch(e){}
try {
o7.prototype.o6 = function () { try {
o2.o3("b1");
}catch(e){} };
}catch(e){}
try {
o7.prototype.o4 = function () { try {
o2.o3("b");
}catch(e){} };
}catch(e){}
var o9 = new o7();

function o10(){}try {
;
}catch(e){}
try {
o10.o6 = function() {try {
o2.o3("pr")
}catch(e){}};
}catch(e){}
try {
o7.prototype = o10;
}catch(e){}
try {
o11 = new o7();
}catch(e){}

function o12() {
    try {
this.o6 = function () { try {
o2.o3("f");
}catch(e){} }
}catch(e){}
}

function o13() { }
try {
o13.prototype.o1 = function () { try {
o2.o3(2);
}catch(e){} };
}catch(e){}
try {
o13.prototype.o14 = 1;
}catch(e){}
try {
o13.prototype.o8 = 1;
}catch(e){}

try {
o12.prototype = o0.prototype;
}catch(e){}
try {
o13.prototype = new o12();
}catch(e){}

var o15 = new o13();

var o108 = o40.slice(NaN)
try {
o16.prototype.o1 = function () { try {
o2.o3(2);
}catch(e){} };
}catch(e){}
try {
o16.prototype.o17 = 1;
}catch(e){}
try {
o16.prototype.o14 = 1;
}catch(e){}
try {
o16.prototype.o8 = 1;
}catch(e){}

//Inheriter.prototype = b.prototype;
try {
o16.prototype = new o12();
}catch(e){}

var o18 = new o16();

function o19(o20) {
    try {
o20.o6();
}catch(e){}
}

try {
o19(o9);
}catch(e){}
try {
o19(o11);
}catch(e){}
try {
o19(o9);
}catch(e){}
try {
o19(o18);
}catch(e){}

try {
o19(o5);
}catch(e){}
try {
o19(o9);
}catch(e){}
try {
o19(o15);
}catch(e){}
try {
o19(o18);
}catch(e){}