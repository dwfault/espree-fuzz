//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Test the happy path of the new object optimization involving script constructors.
o0.o1("Test 1:");
function o2() {
    this.o3 = 1;
    this.o4 = 2;
    this.o5 = 3;
}

o2.prototype = { o7: 0 };

function o8() {
    var o9 = new o2();
    o9.o10 = 4;
    o9.o11 = 5;
    o9.o12 = 6;
    return o9;
}

var o9 = o8();
o0.o1("o = { a: " + o9.o3 + ", b: " + o9.o4 + ", c: " + o9.o5 + ", p: " + o9.o7 + ", q: " + o9.o13 + ", x: " + o9.o10 + ", y: " + o9.o11 + " }");

o9 = o8();
o0.o1("o = { a: " + o9.o3 + ", b: " + o9.o4 + ", c: " + o9.o5 + ", p: " + o9.o7 + ", q: " + o9.o13 + ", x: " + o9.o10 + ", y: " + o9.o11 + " }");

o9 = o8();
o0.o1("o = { a: " + o9.o3 + ", b: " + o9.o4 + ", c: " + o9.o5 + ", p: " + o9.o7 + ", q: " + o9.o13 + ", x: " + o9.o10 + ", y: " + o9.o11 + " }");
o0.o1("");

o0.o1("Test 2:");
function o14(o3, o4, o5) {
    this.o3 = o3;
    this.o4 = o4;
    this.o5 = o5;
}

o14.prototype = { o7: 0 };

function o15() {
    var o9 = new o14(1, 2, 3);
    o9.o10 = 4;
    o9.o11 = 5;
    o9.o12 = 6;
    return o9;
}

var o9 = o15();
o0.o1("o = { a: " + o9.o3 + ", b: " + o9.o4 + ", c: " + o9.o5 + ", p: " + o9.o7 + ", q: " + o9.o13 + ", x: " + o9.o10 + ", y: " + o9.o11 + " }");

o9 = o15();
o0.o1("o = { a: " + o9.o3 + ", b: " + o9.o4 + ", c: " + o9.o5 + ", p: " + o9.o7 + ", q: " + o9.o13 + ", x: " + o9.o10 + ", y: " + o9.o11 + " }");

o9 = o15();
o0.o1("o = { a: " + o9.o3 + ", b: " + o9.o4 + ", c: " + o9.o5 + ", p: " + o9.o7 + ", q: " + o9.o13 + ", x: " + o9.o10 + ", y: " + o9.o11 + " }");
o0.o1("");

o0.o1("Test 3:");
function o16(o3, o4, o5) {
    this.o3 = o3;
    this.o4 = o4;
    this.o5 = o5;
}

o16.prototype = { o7: 0 };

function o17(o3, o4, o5) {
    var o9 = new o16();
    o9.o10 = 4;
    o9.o11 = 5;
    o9.o12 = 6;
    return o9;
}

var o9 = o17(1, 2, 3);
o0.o1("o = { a: " + o9.o3 + ", b: " + o9.o4 + ", c: " + o9.o5 + ", p: " + o9.o7 + ", q: " + o9.o13 + ", x: " + o9.o10 + ", y: " + o9.o11 + " }");

o9 = o17(1, 2, 3);
o0.o1("o = { a: " + o9.o3 + ", b: " + o9.o4 + ", c: " + o9.o5 + ", p: " + o9.o7 + ", q: " + o9.o13 + ", x: " + o9.o10 + ", y: " + o9.o11 + " }");

o9 = o17(1, 2, 3);
o0.o1("o = { a: " + o9.o3 + ", b: " + o9.o4 + ", c: " + o9.o5 + ", p: " + o9.o7 + ", q: " + o9.o13 + ", x: " + o9.o10 + ", y: " + o9.o11 + " }");
o0.o1("");

o0.o1("Test 4:");
function o18(o3, o4, o5) {
    this.o3 = o3;
    this.o4 = o4;
    this.o5 = o5;
}

o18.prototype = { o7: 0 };

function o19() {
    var o9 = new o18();
    o9.o10 = 4;
    o9.o11 = 5;
    o9.o12 = 6;
    return o9;
}

var o9 = o19();
o0.o1("o = { a: " + o9.o3 + ", b: " + o9.o4 + ", c: " + o9.o5 + ", p: " + o9.o7 + ", q: " + o9.o13 + ", x: " + o9.o10 + ", y: " + o9.o11 + " }");

var o9 = o19();
o0.o1("o = { a: " + o9.o3 + ", b: " + o9.o4 + ", c: " + o9.o5 + ", p: " + o9.o7 + ", q: " + o9.o13 + ", x: " + o9.o10 + ", y: " + o9.o11 + " }");

o9 = o19();
o0.o1("o = { a: " + o9.o3 + ", b: " + o9.o4 + ", c: " + o9.o5 + ", p: " + o9.o7 + ", q: " + o9.o13 + ", x: " + o9.o10 + ", y: " + o9.o11 + " }");
o0.o1("");

o0.o1("Test 5:");
function o20(o3, o4, o5) {
    var o9 = {};
    o9.o3 = o3;
    o9.o4 = o4;
    o9.o5 = o5;
    return o9;
}

o20.prototype = { o7: 0 };

function o21() {
    var o9 = new o20();
    o9.o10 = 4;
    o9.o11 = 5;
    o9.o12 = 6;
    return o9;
}

var o9 = o21();
o0.o1("o = { a: " + o9.o3 + ", b: " + o9.o4 + ", c: " + o9.o5 + ", p: " + o9.o7 + ", q: " + o9.o13 + ", x: " + o9.o10 + ", y: " + o9.o11 + " }");

var o9 = o21();
o0.o1("o = { a: " + o9.o3 + ", b: " + o9.o4 + ", c: " + o9.o5 + ", p: " + o9.o7 + ", q: " + o9.o13 + ", x: " + o9.o10 + ", y: " + o9.o11 + " }");

o9 = o21();
o0.o1("o = { a: " + o9.o3 + ", b: " + o9.o4 + ", c: " + o9.o5 + ", p: " + o9.o7 + ", q: " + o9.o13 + ", x: " + o9.o10 + ", y: " + o9.o11 + " }");
o0.o1("");

o0.o1("Test 6:");
function o22(o3, o4, o5) {
    return o3 + o4 + o5;
}

o22.prototype = { o7: 0 };

function o23() {
    var o9 = new o22();
    o9.o10 = 4;
    o9.o11 = 5;
    o9.o12 = 6;
    return o9;
}

var o9 = o23();
o0.o1("o = { a: " + o9.o3 + ", b: " + o9.o4 + ", c: " + o9.o5 + ", p: " + o9.o7 + ", q: " + o9.o13 + ", x: " + o9.o10 + ", y: " + o9.o11 + " }");

var o9 = o23();
o0.o1("o = { a: " + o9.o3 + ", b: " + o9.o4 + ", c: " + o9.o5 + ", p: " + o9.o7 + ", q: " + o9.o13 + ", x: " + o9.o10 + ", y: " + o9.o11 + " }");

o9 = o23();
o0.o1("o = { a: " + o9.o3 + ", b: " + o9.o4 + ", c: " + o9.o5 + ", p: " + o9.o7 + ", q: " + o9.o13 + ", x: " + o9.o10 + ", y: " + o9.o11 + " }");
o0.o1("");

o0.o1("Test 7:");
function o24(o3, o4, o5, o25) {
    this.o3 = o25 ? o3 : -o3;
    this.o4 = o25 ? o4 : -o4;
    this.o5 = o25 ? o5 : -o5;
}

o24.prototype = { o7: 0 };

function o26(o3, o4, o5, o25) {
    var o9 = new o24(o3, o4, o5);
    o9.o10 = 4;
    o9.o11 = 5;
    o9.o12 = 6;
    return o9;
}

var o9 = o26(1, 2, 3, false);
o0.o1("o = { a: " + o9.o3 + ", b: " + o9.o4 + ", c: " + o9.o5 + ", p: " + o9.o7 + ", q: " + o9.o13 + ", x: " + o9.o10 + ", y: " + o9.o11 + " }");

o9 = o26(1, 2, 3, false);
o0.o1("o = { a: " + o9.o3 + ", b: " + o9.o4 + ", c: " + o9.o5 + ", p: " + o9.o7 + ", q: " + o9.o13 + ", x: " + o9.o10 + ", y: " + o9.o11 + " }");

o9 = o26(1, 2, 3, true);
o0.o1("o = { a: " + o9.o3 + ", b: " + o9.o4 + ", c: " + o9.o5 + ", p: " + o9.o7 + ", q: " + o9.o13 + ", x: " + o9.o10 + ", y: " + o9.o11 + " }");
o0.o1("");

o0.o1("Test 8:");
function o27(o3, o4, o5) {
    this.o3 = o3;
    this.o4 = o4;
    this.o5 = o5;
    throw this;
}

o27.prototype = { o7: 0 };

function o28(o3, o4, o5) {
    var o9 = new o27();
    o9.o10 = 4;
    o9.o11 = 5;
    o9.o12 = 6;
    return o9;
}

var o9 = {};

try {
    var o9 = o28(1, 2, 3);
} catch (o29) {
    o0.o1("Exception: " + o29);
}
o0.o1("o = { a: " + o9.o3 + ", b: " + o9.o4 + ", c: " + o9.o5 + ", p: " + o9.o7 + ", q: " + o9.o13 + ", x: " + o9.o10 + ", y: " + o9.o11 + " }");

try {
    o9 = o28(1, 2, 3);
} catch (o29) {
    o0.o1("Exception: " + o29);
}
o0.o1("o = { a: " + o9.o3 + ", b: " + o9.o4 + ", c: " + o9.o5 + ", p: " + o9.o7 + ", q: " + o9.o13 + ", x: " + o9.o10 + ", y: " + o9.o11 + " }");

try {
    o9 = o28(1, 2, 3);
} catch (o29) {
    o0.o1("Exception: " + o29);
}
o0.o1("o = { a: " + o9.o3 + ", b: " + o9.o4 + ", c: " + o9.o5 + ", p: " + o9.o7 + ", q: " + o9.o13 + ", x: " + o9.o10 + ", y: " + o9.o11 + " }");
o0.o1("");
