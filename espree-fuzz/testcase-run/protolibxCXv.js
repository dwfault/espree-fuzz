//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/// <reference path="../UnitTestFramework/UnitTestFramework.js" />
try {
if (this.o0 && o13.prototype) {
    try {
o6.o14(o24.includes("\0def"), "string with embedded null character includes prefix including and starting with null character in search string")("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}
}
}catch(e){}

function o26(/*default=samethread*/o3) {
    try {
return o0.o1("protolib.js", o3 || index);
}catch(o582){}
}

// Run a function expression in this engine
function o4(o5) {
    try {
return eval("(" + o5 + ")()");
}catch(e){}
}


// Save __proto__ descriptor at startup
var o6 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");

// assert __proto__ throws "this" not object. "method" default to Object.prototype.__proto__
try {
o3 = function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 + (o421.o148 & 0xFF);
    try {
o421.o366 = ((o582 & 0xF) < (o421.o143 & 0xF));
}catch(e){}
    try {
o421.o367 = (o582 > 0xFF);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
  };
}catch(e){}

// assert __proto__ throws arg not object. "method" default to Object.setPrototypeOf
try {
o7.o12 = function (o5, o9) {
    try {
o7.o10(o5, o11, undefined, (o9 || "Object.setPrototypeOf") + ": argument is not an Object");
}catch(e){}
};
}catch(e){}

// assert __proto__ throws arg not object or null. "method" default to Object.prototype.__proto__
try {
o7.o13 = function (o5, o9) {
    try {
o7.o10(o5, o11, undefined, (o9 || "Object.prototype.__proto__") + ": argument is not an Object and is not null");
}catch(e){}
};
}catch(e){}

// assert __proto__ throws cyclic error
try {
o7.o14 = function (o5, o9) {
    try {
o7.o10(o5, o11, undefined, "Cyclic __proto__ value");
}catch(e){}
};
}catch(e){}

function o15() {
    try {
delete Object.prototype.__proto__;
}catch(e){}
}

function o16() {
    try {
o7.o17(Object.prototype.hasOwnProperty("__proto__"), "__proto__ enabled, Object.prototype must have own property __proto__");
}catch(e){}

    var o18 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
    try {
o7.o17(o6.get === o18.get, "must have original getter");
}catch(e){}
    try {
o7.o17(o6.set === o18.set, "must have original setter");
}catch(e){}
    // Ignore enumerable/configurable. They can be changed and __proto__ still takes effect.

    var o19 = { o20: 0 };
    var o21 = { o22: 1 };

    try {
o7.o17(o21.__proto__ === Object.getPrototypeOf(o21));
}catch(e){}
    try {
o7.o23(Object.prototype, o21.__proto__, "__proto__ enabled, __proto__ value should be [[prototype]]");
}catch(e){}

    try {
o21.__proto__ = o19;
}catch(e){}
    try {
o7.o17(o21.__proto__ === Object.getPrototypeOf(o21));
}catch(e){}
    try {
o7.o23(o19, o21.__proto__, "__proto__ enabled, [[prototype]] should be changed");
}catch(e){}

    try {
Object.setPrototypeOf(o21, Object.prototype);
}catch(e){}
    try {
o7.o17(o21.__proto__ === Object.getPrototypeOf(o21));
}catch(e){}
    try {
o7.o23(Object.prototype, o21.__proto__);
}catch(e){}
}

function o24(o25) {
    var o19 = { o20: 0 };
    var o21 = { o22: 1 };

    try {
o7.o23(Object.prototype, Object.getPrototypeOf(o21));
}catch(e){}
    try {
o21.__proto__ = o19;
}catch(e){}
    try {
o7.o23(Object.prototype, Object.getPrototypeOf(o21), "__proto__ disabled, [[prototype]] should not be changed " + (o25 || ""));
}catch(e){}
    
    try {
Object.setPrototypeOf(o21, o19);
}catch(e){} // always works
    try {
o7.o23(o19, Object.getPrototypeOf(o21));
}catch(e){}
}

// verify (in a new engine) if an expression disables __proto__.
var o59 = {o60: Symbol()}
var o30 = {};
var o0 = {}
