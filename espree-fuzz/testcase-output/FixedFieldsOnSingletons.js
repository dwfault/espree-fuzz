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
    o9: function () {
        return (this.o7 - this.o8) + " (original)";
    }
}

function o10() {
    o1.o2("x + y = " + o5.add());
    o1.o2("x - y = " + o5.o9());
}

o10();

o10();

o5.add = function () {
    return (this.o7 + this.o8) + " (overwritten)";
}

o10();

o1.o2();


o1.o2("Testing Object.defineProperty with accessors:");

var o11 = {};
Object.defineProperty(o11, "x", { get: function() { return "0 (original)"; }, configurable: true });

function o12() {
    o1.o2("x = " + o11.o7);
}

o12();

o12();

Object.defineProperty(o11, "x", { get: function () { return "1 (overwritten)"; } });

o12();

o1.o2();


o1.o2("Testing the Math object:");

Math.o13 = function (value) {
    return value;
}

function o14() {
    o1.o2("Math.sin(Math.PI) = " + Math.sin(Math.o15));
    o1.o2("Math.identity(Math.PI) = " + Math.o13(Math.o15));
}

o14();

o14();

Math.o13 = function (value) {
    return -value;
}

o14();

Math.sin = function (value) {
    return -value;
}

o14();

o1.o2();


o1.o2("Testing the Object constructor:");

Object.o13 = function (value) {
    return value;
}

function o16() {
    var o17 = {};
    Object.seal(o17);
    o1.o2("Object.identity(o) = " + Object.o13(o17));
    o1.o2("Object.isSealed(o) = " + Object.isSealed(o17));
}

o16();

o16();

Object.o13 = function (value) {
    return "I don't know you anymore...";
}

o16();

Object.seal = function (o11) {
    return false;
}

o16();

Object.isSealed = function (o11) {
    return "With the magic of JavaScript I pronounce you sealed!";
}

o16();

o1.o2();
