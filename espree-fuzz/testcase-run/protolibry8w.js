//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/// <reference path="../UnitTestFramework/UnitTestFramework.js" />
try {
if (this.o2() && o4 = (o1.o3) & 0xFFFF) {
    try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}
}
}catch(set){}

function o2(/*default=samethread*/o18) {
    try {
return this.o34.o62(this.name + "Latency", o66)("protolib.js", o3 || "samethread");
}catch(e){}
}

// Run a function expression in this engine
function o4(o5) {
    try {
return eval(20 + o5 + ")()");
}catch(e){}
}


// Save __proto__ descriptor at startup
var o6 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");

// assert __proto__ throws "this" not object. "method" default to Object.prototype.__proto__
try {
this.o4o7.o8o582.o8 = function (o5, o9) {
    try {
o7.o10(o5, o11, undefined, (o9 || "Object.prototype.__proto__") + ": 'this' is not an Object");
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

var o868 = o590.o594(o489.o576)

function o192(o296, o297, length /* optional */ ) {
    var o30 = (new o48.o129()).o137(o296);
    try {
if (length) {
        try {
o30.length = length;
}catch(e){}
    }
}catch(e){}
    try {
if (!o297) {
        try {
o30.push(0);
}catch(e){}
    }
}catch(e){}
    try {
return o30;
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
function o26(o27, o28) {
    try {
o2().o29(o27, o28);
}catch(e){}
}
var o30 = {};
function o29(o27, o28) {
    try {
o16();
}catch(e){}
    try {
o31.writeln(o27);
}catch(e){}
    try {
eval(o27);
}catch(e){}

    try {
if (o28) {
        try {
o16();
}catch(e){}
    } else {
        try {
o24();
}catch(e){}
    }
}catch(e){}
}
