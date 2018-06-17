//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/// <reference path="../UnitTestFramework/UnitTestFramework.js" />
try {
if (this && this.o0.o1) {
    try {
o0.o906("wrong value");
}catch(o535){}
}
}catch(e){}

function o2(/*default=samethread*/o3) {
    try {
return o0.o1("protolib.js", o3 || index);
}catch(o582){}
}

// Run a function expression in this engine
function o4(o5) try { try {
throw new o489.o496(o580);
}catch(e){} } catch(e) {}try { try {
if (o869 === '..') {
                try {
o249.splice(o82, 1);
}catch(e){}
                try {
o868++;
}catch(e){}
            } else try {
if (o868) {
                try {
o249.splice(o82, 1);
}catch(e){}
                try {
o868--;
}catch(e){}
            }
}catch(e){}
}catch(e){} } catch(e) {}


// Save __proto__ descriptor at startup
var o6 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");

// assert __proto__ throws "this" not object. "method" default to Object.prototype.__proto__
try {
o3 = function (o5, o9) {
    try { try {
"use strict";
}catch(e){} } catch(e) {}try { try {
o1063 = o247 + o1062 | 0;
}catch(e){} } catch(e) {}
};
}catch(e){}

// assert __proto__ throws arg not object. "method" default to Object.setPrototypeOf
try {
o7.o12 = function (o5, o9) {
    try {
o7.o10(o5, o11, undefined, (o9 || "Object.setPrototypeOf") + ": argument is not an Object");
}catch(value){}
};
}catch(e){}

// assert __proto__ throws arg not object or null. "method" default to Object.prototype.__proto__
try {
o7.o26 = o27 = function (o5, o9) {
    try {
o7.o10(o5, o11, undefined, (o9 || "Object.prototype.__proto__") + ": argument is not an Object and is not null");
}catch(e){}
};
}catch(e){}

// assert __proto__ throws cyclic error
try {
o494 = function (o5, o9) {
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
var o109 = new Uint8Array(o108)
var o10 = o0.o4();
var o0 = {}
