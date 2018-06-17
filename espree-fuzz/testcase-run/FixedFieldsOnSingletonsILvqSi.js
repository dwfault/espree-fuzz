//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function e() {
    try {
o851.o2("globalFixedFunction1: original");
}catch(e){}
}

var o1096 = o1058.o73

function o4() {
    try {
try { {} } catch(e) {}
}catch(e){}
    try {
o3(new Number(0));
}catch(e){}
}

try {
o89.o2("Testing the global object:");
}catch(e){}

try {
o4(o1("TextTrackPrototype"));
}catch(e){}

try {
o4();
}catch(e){}

try {
o116 = function () {
    try {
o1.o2("globalFixedFunction1: overwritten");
}catch(e){}
}
}catch(e){}

try {
o3 = function () {
    try {
o1.o2("globalFixedFunction2: overwritten");
}catch(e){}
}
}catch(e){}

try {
o4();
}catch(e){}

try {
o1.o2();
}catch(e){}


try {
o1.o2("Testing object literal:");
}catch(e){}

var o5 = {
    o6: 0,
    o7: 0,
    o8: 1,
    add: function () {
        try {
return (this.o7 + this.o8) + " (original)";
}catch(e){}
    },
    o9: function () {
        try {
return (this.o7 - this.o8) + " (original)";
}catch(e){}
    }
}

var o46 = 0

try {
o10();
}catch(e){}

try {
o10();
}catch(e){}

try {
o5.add = function () {
    try {
return (this.o7 + this.o8) + " (overwritten)";
}catch(e){}
}
}catch(e){}

try {
o10();
}catch(e){}

try {
o1.o2();
}catch(e){}


try {
o1.o2("Testing Object.defineProperty with accessors:");
}catch(e){}

var o11 = {};
try {
Object.defineProperty(o11, "x", { get: function() { try {
return "0 (original)";
}catch(e){} }, configurable: true });
}catch(e){}

function o12() {
    try {
o1.o2("x = " + o11.o7);
}catch(e){}
}

try {
o12();
}catch(e){}

try {
o12();
}catch(e){}

try {
Object.defineProperty(o11, "x", { get: function () { try {
return "1 (overwritten)";
}catch(e){} } });
}catch(e){}

try {
o12();
}catch(e){}

try {
o1.o2();
}catch(e){}


try {
o1.o2("Testing the Math object:");
}catch(e){}

try {
Math.o13 = function (value) {
    try {
return value;
}catch(e){}
}
}catch(e){}

var index = 0

try {
o14();
}catch(e){}

try {
o14();
}catch(e){}

try {
Math.o13 = function (value) {
    try {
return -value;
}catch(e){}
}
}catch(e){}

try {
o14();
}catch(e){}

try {
Math.sin = function (value) {
    try {
return -value;
}catch(e){}
}
}catch(e){}

try {
o14();
}catch(e){}

try {
o1.o2();
}catch(e){}


try {
o1.o2("Testing the Object constructor:");
}catch(e){}

try {
Object.o13 = function (value) {
    try {
return value;
}catch(e){}
}
}catch(e){}

function o16() {
    var o17 = {};
    try {
Object.seal(o17);
}catch(e){}
    try {
o1.o2("Object.identity(o) = " + Object.o13(o17));
}catch(e){}
    try {
o1.o2("Object.isSealed(o) = " + Object.isSealed(o17));
}catch(e){}
}

try {
o16();
}catch(e){}

try {
o16();
}catch(e){}

try {
Object.o13 = function (value) {
    try {
return "I don't know you anymore...";
}catch(e){}
}
}catch(e){}

try {
o16();
}catch(e){}

try {
Object.seal = function (o11) {
    try {
return false;
}catch(e){}
}
}catch(e){}

try {
o16();
}catch(e){}

try {
Object.isSealed = function (o11) {
    try {
return "With the magic of JavaScript I pronounce you sealed!";
}catch(e){}
}
}catch(e){}

try {
o16();
}catch(e){}

try {
o1.o2();
}catch(e){}
