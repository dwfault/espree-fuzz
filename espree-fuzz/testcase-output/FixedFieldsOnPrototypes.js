//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("Testing object literal as prototype:");

var o2 = {
    add: function () {
        return (this.o4 + this.o5) + " (original)";
    },
    o6: function () {
        return (this.o4 - this.o5) + " (original)";
    }
}

var o7 = Object.create(o2);
o7.o4 = 0;
o7.o5 = 1;

function o10() {
    o0.o1("x + y = " + o7.add());
    o0.o1("x - y = " + o7.o6());
}

o10();

o10();

o2.o6 = function () {
    return (this.o4 - this.o5) + " (overwritten)";
}

o10();

o2.add = function () {
    return (this.o4 + this.o5) + " (overwritten)";
}

o10();

var o2 = {
    add: function () {
        return (this.o4 + this.o5) + " (original)";
    },
    o6: function (o11) {
        return (o11.o4 - o11.o5) + " (original)";
    }
}

var o7 = Object.create(o2);
o7.o4 = 0;
o7.o5 = 1;

function o12() {
    o0.o1("x + y = " + o7.add());
    // Calling a prototype method directly on the prototype object.
    o0.o1("x - y = " + o2.o6(o7));
}

o12();

o12();

o2.o6 = function (o11) {
    return (o11.o4 - o11.o5) + " (overwritten)";
}

o12();

o0.o1();


o0.o1("Testing the String prototype:");

String.prototype.o15 = function (value) {
    return value;
}

function o17() {
    var o18 = "I'm a string, I believe.";
    o0.o1("s.identity() = " + o18.o15(o18));
    o0.o1("s.indexOf(\"s\") = " + o18.indexOf("s"));
}

o17();

o17();

String.prototype.indexOf = function (o20, o21) {
    return -1;
}

o17();

String.prototype.o15 = function (value) {
    return "To me you're just a number.";
}

o17();

o0.o1();


o0.o1("Testing the global object as prototype:");

function o22() {
    o0.o1("globalFixedFunction1: original");
}

var o23 = function () {
    o0.o1("globalFixedFunction2: original");
}

function o24() {
    return Object.create(this);
}

var o25 = o24();

function o26() {
    o25.o22();
    o25.o23();
}

o26();

o26();

o22 = function () {
    o0.o1("globalFixedFunction1: overwritten");
}

o23 = function () {
    o0.o1("globalFixedFunction2: overwritten");
}

o26();

o0.o1();
