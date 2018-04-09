//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/// <reference path="../UnitTestFramework/UnitTestFramework.js" />
if (this.o0 && this.o0.o1) {
    o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}

function o2(/*default=samethread*/o3) {
    return o0.o1("protolib.js", o3 || "samethread");
}

// Run a function expression in this engine
function o4(o5) {
    return eval("(" + o5 + ")()");
}


// Save __proto__ descriptor at startup
var o6 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");

// assert __proto__ throws "this" not object. "method" default to Object.prototype.__proto__
o7.o8 = function (o5, o9) {
    o7.o10(o5, o11, undefined, (o9 || "Object.prototype.__proto__") + ": 'this' is not an Object");
};

// assert __proto__ throws arg not object. "method" default to Object.setPrototypeOf
o7.o12 = function (o5, o9) {
    o7.o10(o5, o11, undefined, (o9 || "Object.setPrototypeOf") + ": argument is not an Object");
};

// assert __proto__ throws arg not object or null. "method" default to Object.prototype.__proto__
o7.o13 = function (o5, o9) {
    o7.o10(o5, o11, undefined, (o9 || "Object.prototype.__proto__") + ": argument is not an Object and is not null");
};

// assert __proto__ throws cyclic error
o7.o14 = function (o5, o9) {
    o7.o10(o5, o11, undefined, "Cyclic __proto__ value");
};

function o15() {
    delete Object.prototype.__proto__;
}

function o16() {
    o7.o17(Object.prototype.hasOwnProperty("__proto__"), "__proto__ enabled, Object.prototype must have own property __proto__");

    var o18 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
    o7.o17(o6.get === o18.get, "must have original getter");
    o7.o17(o6.set === o18.set, "must have original setter");
    // Ignore enumerable/configurable. They can be changed and __proto__ still takes effect.

    var o19 = { o20: 0 };
    var o21 = { o22: 1 };

    o7.o17(o21.__proto__ === Object.getPrototypeOf(o21));
    o7.o23(Object.prototype, o21.__proto__, "__proto__ enabled, __proto__ value should be [[prototype]]");

    o21.__proto__ = o19;
    o7.o17(o21.__proto__ === Object.getPrototypeOf(o21));
    o7.o23(o19, o21.__proto__, "__proto__ enabled, [[prototype]] should be changed");

    Object.setPrototypeOf(o21, Object.prototype);
    o7.o17(o21.__proto__ === Object.getPrototypeOf(o21));
    o7.o23(Object.prototype, o21.__proto__);
}

function o24(o25) {
    var o19 = { o20: 0 };
    var o21 = { o22: 1 };

    o7.o23(Object.prototype, Object.getPrototypeOf(o21));
    o21.__proto__ = o19;
    o7.o23(Object.prototype, Object.getPrototypeOf(o21), "__proto__ disabled, [[prototype]] should not be changed " + (o25 || ""));
    
    Object.setPrototypeOf(o21, o19); // always works
    o7.o23(o19, Object.getPrototypeOf(o21));
}

// verify (in a new engine) if an expression disables __proto__.
function o26(o27, o28) {
    o2().o29(o27, o28);
}
var o30 = {};
function o29(o27, o28) {
    o16();
    o31.writeln(o27);
    eval(o27);

    if (o28) {
        o16();
    } else {
        o24();
    }
}
