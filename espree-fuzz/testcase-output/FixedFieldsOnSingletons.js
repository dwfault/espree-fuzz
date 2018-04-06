//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    o1.o2("globalFixedFunction1: original");
}

var o3 = function () {
    o1.o2("globalFixedFunction2: original");
}

function o4() {
    o0();
    o3();
}

o1.o2("Testing the global object:");

o4();

o4();

o0 = function () {
    o1.o2("globalFixedFunction1: overwritten");
}

o3 = function () {
    o1.o2("globalFixedFunction2: overwritten");
}

o4();

o1.o2();


o1.o2("Testing object literal:");

var o5 = {
    o6: 0,
    o7: 0,
    o8: 1,
    add: function () {
        return (this.o7 + this.o8) + " (original)";
    },
    o10: function () {
        return (this.o7 - this.o8) + " (original)";
    }
}

function o11() {
    o1.o2("x + y = " + o5.add());
    o1.o2("x - y = " + o5.o10());
}

o11();

o11();

o5.add = function () {
    return (this.o7 + this.o8) + " (overwritten)";
}

o11();

o1.o2();


o1.o2("Testing Object.defineProperty with accessors:");

var o12 = {};
Object.defineProperty(o12, "x", { get: function() { return "0 (original)"; }, configurable: true });

function o17() {
    o1.o2("x = " + o12.o7);
}

o17();

o17();

Object.defineProperty(o12, "x", { get: function () { return "1 (overwritten)"; } });

o17();

o1.o2();


o1.o2("Testing the Math object:");

Math.o19 = function (value) {
    return value;
}

function o21() {
    o1.o2("Math.sin(Math.PI) = " + Math.sin(Math.o23));
    o1.o2("Math.identity(Math.PI) = " + Math.o19(Math.o23));
}

o21();

o21();

Math.o19 = function (value) {
    return -value;
}

o21();

Math.sin = function (value) {
    return -value;
}

o21();

o1.o2();


o1.o2("Testing the Object constructor:");

Object.o19 = function (value) {
    return value;
}

function o24() {
    var o25 = {};
    Object.seal(o25);
    o1.o2("Object.identity(o) = " + Object.o19(o25));
    o1.o2("Object.isSealed(o) = " + Object.isSealed(o25));
}

o24();

o24();

Object.o19 = function (value) {
    return "I don't know you anymore...";
}

o24();

Object.seal = function (o12) {
    return false;
}

o24();

Object.isSealed = function (o12) {
    return "With the magic of JavaScript I pronounce you sealed!";
}

o24();

o1.o2();
