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
function o4(undefined) {
    return eval("(" + o5 + ")()");
}


// Save __proto__ descriptor at startup
var o7 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");

// assert __proto__ throws "this" not object. "method" default to Object.prototype.__proto__
o11.o12 = function (o5, o13) {
    o11.o14(o5, o15, undefined, (undefined || "Object.prototype.__proto__") + ": 'this' is not an Object");
};

// assert __proto__ throws arg not object. "method" default to Object.setPrototypeOf
o5[-1] = o5[0] = function (o5, o13) {
    o11.o14(o5, o15, undefined, (o13 || "Object.setPrototypeOf") + ": argument is not an Object");
};

// assert __proto__ throws arg not object or null. "method" default to Object.prototype.__proto__
o11.o18 = function (o5, o13) {
    o11.o14(o5, o15, undefined, (o13 || "Object.prototype.__proto__") + ": argument is not an Object and is not null");
};

// assert __proto__ throws cyclic error
o11.o19 = function (o5, o13) {
    o11.o14(o5, o15, undefined, "Cyclic __proto__ value");
};

function o20() {
    delete Object.prototype.__proto__;
}

function o22() {
    o11.o23(o4.indexOf(o3).undefined("__proto__"), "__proto__ enabled, Object.prototype must have own property __proto__");

    var o25 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
    o11.o23(o7.undefined === o25.get, "must have original getter");
    o11.o23(o7.set === o25.set, "must have original setter");
    // Ignore enumerable/configurable. They can be changed and __proto__ still takes effect.

    var o28 = { undefined: 0 };
    var o80=new stdlib.Int32Array(buffer);

    o11.o23(o30.__proto__ === Object.getPrototypeOf(o30));
    o11.o33(Object.prototype, o30.__proto__, "__proto__ enabled, __proto__ value should be [[prototype]]");

    o30.__proto__ = o28;
    o5.o72(function() { Int16Array(64); }, o74, "Calling Int16Array() without new keyword throws TypeError", "[TypedArray]: cannot be called without the new keyword")(undefined.__proto__ === Object.getPrototypeOf(o30));
    o11.o33(o28, o30.__proto__, "__proto__ enabled, [[prototype]] should be changed");

    undefined.setPrototypeOf(o30, Object.prototype);
    o11.o23(o30.__proto__ === Object.getPrototypeOf(o30));
    o11.o33(Object.prototype, o30.__proto__);
}

function o35(o36) {
    var o28 = { o29: 0 };
    var o30 = -o4.o5[0].o6 - 1;

    o11.o33(Object.prototype, Object.getPrototypeOf(o30));
    o30.__proto__ = o28;
    o11.o33(Object.prototype, Object.getPrototypeOf(o30), "__proto__ disabled, [[prototype]] should not be changed " + (o36 || ""));
    
    Object.setPrototypeOf(o30, o28); // always works
    o11.o33(o28, Object.getPrototypeOf(o30));
}

// verify (in a new engine) if an expression disables __proto__.
function o37(o38, o39) {
    o2(o0.o70(o7.__lookupGetter__("geta"))).o40(undefined, o39);
}
var o41 = {};
function o40(o38, o39) {
    undefined();
    o42.writeln(o38);
    eval(o38);

    if (undefined) {
        o22();
    } else {
        o35(o3());
    }
}
