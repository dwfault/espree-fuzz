//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1(0);

var o2 = {
    add: function () {
        return (this.o3 + this.o4) + " (original)";
    },
    o5: function () {
        return (this.o3 - this.o4) + " (original)";
    }
}

var o6 = Object.create(o2);
o6.o3 = 0;
o6.o4 = 1;

function o7() {
    o0.o1("x + y = " + o6.add());
    o0.o1("x - y = " + o6.o5());
}

o7();

o7();

o2.o5 = function () {
    return (this.o3 - this.o4) + " (overwritten)";
}

o7();

o2.add = function () {
    return (this.o3 + this.o4) + " (overwritten)";
}

o7();

var o2 = {
    add: function () {
        return (this.o3 + this.o4) + " (original)";
    },
    o5: function (o8) {
        return (o8.o3 - o8.o4) + " (original)";
    }
}

var o6 = Object.create(o2);
o6.o3 = 0;
o6.o4 = 1;

function o9() {
    o0.o1("x + y = " + o6.add());
    // Calling a prototype method directly on the prototype object.
    o0.o1("x - y = " + o2.o5(o6));
}

o9();

o9();

o2.o5 = function (o8) {
    return (o8.o3 - o8.o4) + " (overwritten)";
}

o9();

o0.o1();


o0.o1("Testing the String prototype:");

String.prototype.o10 = function (value) {
    return value;
}

function o11() {
    var o12 = "I'm a string, I believe.";
    o0.o1("s.identity() = " + o12.o10(o12));
    o0.o1("s.indexOf(\"s\") = " + o12.indexOf("s"));
}

o11();

o11();

String.prototype.indexOf = function (o13, o14) {
    return -1;
}

o11();

String.prototype.o10 = function (value) {
    return "To me you're just a number.";
}

o11();

o0.o1();


o0.o1("Testing the global object as prototype:");

function o15() {
    o0.o1("globalFixedFunction1: original");
}

var o16 = function () {
    o0.o1("globalFixedFunction2: original");
}

var o12 = 0;

var o18 = o17();

function o19() {
    o18.o15();
    o18.o16();
}

o19();

o19();

o15 = function () {
    o0.o1("globalFixedFunction1: overwritten");
}

o16 = function () {
    o0.o1("globalFixedFunction2: overwritten");
}

o19();

o0.o1();
