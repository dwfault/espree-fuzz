//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1) {
    o1 = o1.replace(/\(PDT\)/g, "(Pacific Daylight Time)")
         .replace(/\(PST\)/g, "(Pacific Standard Time)");
    o3.o4(o1);
}

// Test the happy path of the new object optimization involving built-ins.
o0("Test 01:");

function o5() {
    var o6 = new Array();
    o6.o8 = 4;
    o6.o9 = 5;
    o6.o10 = 6;
    return o6;
}

var o6 = o5();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o5();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o5();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");
o0("");


o0("Test 02:");

var o16 = { o14: 1001, o15: 1002 };

function o17() {
    var o6 = new Array(10);
    o6.o8 = 4;
    o6.o9 = 5;
    o6.o10 = 6;
    return o6;
}

var o6 = o17();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o17();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o17();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");
o0("");

o0("Test 03:");

var o18 = { o14: 1001, o15: 1002 };

Array.prototype = o18;

function o20() {
    var o6 = new Array();
    o6.o8 = 4;
    o6.o9 = 5;
    o6.o10 = 6;
    return o6;
}

var o6 = o20();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o20();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o20();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");
o0("");

o0("Test 04:");

function o21() {
    this.o11 = 1;
    this.o12 = 2;
    this.o13 = 3;
}

var o22 = { o14: 1001, o15: 1002 };

o21.prototype = o22;

Array = o21;

function o23() {
    var o6 = new Array();
    o6.o8 = 4;
    o6.o9 = 5;
    o6.o10 = 6;
    return o6;
}

var o6 = o23();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o23();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o23();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");
o0("");

o0("Test 11:");

function o24() {
    var o6 = new Boolean();
    o6.o8 = 4;
    o6.o9 = 5;
    o6.o10 = 6;
    return o6;
}

var o6 = o24();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o24();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o24();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");
o0("");

o0("Test 12:");

var o26 = { o14: 1001, o15: 1002 };

function o27() {
    var o6 = new Boolean(true);
    o6.o8 = 4;
    o6.o9 = 5;
    o6.o10 = 6;
    return o6;
}

var o6 = o27();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o27();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o27();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");
o0("");


o0("Test 13:");

var o28 = { o14: 1001, o15: 1002 };

Boolean.prototype = o28;

function o29() {
    var o6 = new Boolean();
    o6.o8 = 4;
    o6.o9 = 5;
    o6.o10 = 6;
    return o6;
}

var o6 = o29();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o29();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o29();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");
o0("");

o0("Test 14:");

function o30() {
    this.o11 = 1;
    this.o12 = 2;
    this.o13 = 3;
}

var o31 = { o14: 1001, o15: 1002 };

o30.prototype = o31;

Boolean = o30;

function o32() {
    var o6 = new Boolean();
    o6.o8 = 4;
    o6.o9 = 5;
    o6.o10 = 6;
    return o6;
}

var o6 = o32();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o32();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o32();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");
o0("");

o0("Test 21:");

function o33() {
    var o6 = new Number();
    o6.o8 = 4;
    o6.o9 = 5;
    o6.o10 = 6;
    return o6;
}

var o6 = o33();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o33();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o33();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");
o0("");

o0("Test 22:");

var o35 = { o14: 1001, o15: 1002 };

function o36() {
    var o6 = new Number(0);
    o6.o8 = 4;
    o6.o9 = 5;
    o6.o10 = 6;
    return o6;
}

var o6 = o36();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o36();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o36();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");
o0("");

o0("Test 23:");

var o37 = { o14: 1001, o15: 1002 };

Number.prototype = o37;

function o38() {
    var o6 = new Number();
    o6.o8 = 4;
    o6.o9 = 5;
    o6.o10 = 6;
    return o6;
}

var o6 = o38();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o38();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o38();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");
o0("");

o0("Test 24:");

function o39() {
    this.o11 = 1;
    this.o12 = 2;
    this.o13 = 3;
}

var o40 = { o14: 1001, o15: 1002 };

o39.prototype = o40;

Number = o39;

function o41() {
    var o6 = new Number();
    o6.o8 = 4;
    o6.o9 = 5;
    o6.o10 = 6;
    return o6;
}

var o6 = o41();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o41();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o41();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");
o0("");

o0("Test 31:");

function o42() {
    var o6 = new String();
    o6.o8 = 4;
    o6.o9 = 5;
    o6.o10 = 6;
    return o6;
}

var o6 = o42();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o42();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o42();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");
o0("");

o0("Test 32:");

var o44 = { o14: 1001, o15: 1002 };

function o45() {
    var o6 = new String("text");
    o6.o8 = 4;
    o6.o9 = 5;
    o6.o10 = 6;
    return o6;
}

var o6 = o45();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o45();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o45();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");
o0("");

o0("Test 33:");

var o46 = { o14: 1001, o15: 1002 };

String.prototype = o46;

function o47() {
    var o6 = new String();
    o6.o8 = 4;
    o6.o9 = 5;
    o6.o10 = 6;
    return o6;
}

var o6 = o47();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o47();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o47();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");
o0("");

o0("Test 34:");

function o48() {
    this.o11 = 1;
    this.o12 = 2;
    this.o13 = 3;
}

var o49 = { o14: 1001, o15: 1002 };

o48.prototype = o49;

String = o48;

function o50() {
    var o6 = new String();
    o6.o8 = 4;
    o6.o9 = 5;
    o6.o10 = 6;
    return o6;
}

var o6 = o50();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o50();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o50();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");
o0("");

o0("Test 41:");

function o51() {
    var o6 = new Date("2013/12/03");
    o6.o8 = 4;
    o6.o9 = 5;
    o6.o10 = 6;
    return o6;
}

var o6 = o51();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o51();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o51();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");
o0("");

o0("Test 42:");

var o53 = { o14: 1041, o15: 1042 };

Date.prototype = o53;

function o54() {
    var o6 = new Date("2013/12/03");
    o6.o8 = 4;
    o6.o9 = 5;
    o6.o10 = 6;
    return o6;
}

var o6 = o54();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o54();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o54();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");
o0("");

o0("Test 43:");

function o55() {
    this.o11 = 1;
    this.o12 = 2;
    this.o13 = 3;
}
var o56 = { o14: 1041, o15: 1042 };

o55.prototype = o56;

Date = o55;

function o57() {
    var o6 = new Date();
    o6.o8 = 4;
    o6.o9 = 5;
    o6.o10 = 6;
    return o6;
}

var o6 = o57();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o57();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o57();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");
o0("");

o0("Test 51:");

function o58() {
    var o6 = new Object();
    o6.o8 = 4;
    o6.o9 = 5;
    o6.o10 = 6;
    return o6;
}

var o6 = o58();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o58();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o58();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");
o0("");

o0("Test 52:");

var o60 = { o14: 1041, o15: 1042 };

function o61() {
    var o6 = new Object(o60);
    o6.o8 = 4;
    o6.o9 = 5;
    o6.o10 = 6;
    return o6;
}

var o6 = o61();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o61();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o61();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");
o0("");

o0("Test 53:");

var o62 = { o14: 1041, o15: 1042 };

Object.prototype = o62;

function o63() {
    var o6 = new Object();
    o6.o8 = 4;
    o6.o9 = 5;
    o6.o10 = 6;
    return o6;
}

var o6 = o63();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o63();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o63();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");
o0("");

o0("Test 54:");

function o64() {
    this.o11 = 1;
    this.o12 = 2;
    this.o13 = 3;
}

var o65 = { o14: 1001, o15: 1002 };

o64.prototype = o65;

Object = o64;

function o66() {
    var o6 = new Object();
    o6.o8 = 4;
    o6.o9 = 5;
    o6.o10 = 6;
    return o6;
}

var o6 = o66();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o66();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o66();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");
o0("");

o0("Test 55:");

function o67() {
    this.o11 = 1;
    this.o12 = 2;
    this.o13 = 3;
}

var o68 = { o14: 1041, o15: 1042 };
var o69 = { o14: 1051, o15: 1052 };

o67.prototype = o68;

Object = o67;

function o70() {
    var o6 = new Object(o69);
    o6.o8 = 4;
    o6.o9 = 5;
    o6.o10 = 6;
    return o6;
}

var o6 = o70();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o70();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");

o6 = o70();
o0("o = " + o6 + " ({ a: " + o6.o11 + ", b: " + o6.o12 + ", c: " + o6.o13 + ", p: " + o6.o14 + ", q: " + o6.o15 + ", x: " + o6.o8 + ", y: " + o6.o9 + " })");
o0("");
