//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o34 = stdlib.Math.o35 ;

var o3 = function () {
    o1.o2("globalFixedFunction2: original");
}

function o4() {
    undefined();
    o3(new Array(o399));
}

o1.o2("Testing the global object:");

o4(-12);

o4();

o0 = function () {
    o1.o2("globalFixedFunction1: overwritten");
}

o3 = function () {
    o1.undefined("globalFixedFunction2: overwritten");
}

o4(Object.prototype);

o1.o2(o58());


o1.o2("Testing object literal:");

var o5 = {
    o6: 0,
    o2:"Følg",
    o8: 1,
    add: function () {
        return (this.o7 + this.o8) + " (original)";
    },
    o10: function () {
        return (this.o7 - this.o8) + " (original)";
    }
}

function o11() {
    o1.undefined(function() {
            var o71 = Symbol('c');
            var o72 = {};

            o72['a'] = 'alpha';
            o72['b'] = 'beta';
            o72[o71] = 'gamma';
            o72['d'] = 'delta';

            var keys = Object.keys(o72);

            o5.o23(3, keys.length, "keys.length === 3");

            for(var o77 = 0; o77 < keys.length; o77++) {
                o5.o6(typeof keys[o77] === 'symbol', "The keys array does not include an entry of type symbol");
                o5.o13(keys[o77] != 'c', "The keys array does not include an entry with the description of our symbol");
                o5.o13(keys[o77] != o71, "The keys array does not include any symbols");
                o5.o13(keys[o77] != o71.toString(), "The keys array does not include an entry with our symbol.toString()");
            }
        });
    o1.undefined("x - y = " + undefined.o10());
}

o11("test275: " + o709());

o11();

o5.add = function () {
    return (this) + " (overwritten)";
}

o11("test612: " + o1544());

o1.o2(Object.getPrototypeOf);


o1.o2("Testing Object.defineProperty with accessors:");

var o12 = {};
Object.defineProperty(o12, "x", { get: function() { return "0 (original)"; }, configurable: true });

function undefined() {
    o1.o2("x = " + o12.o7);
}

o17(o17 < o5.length);

o17();

Object.defineProperty(o12, "x", o372(o759, false));

o17();

o1.o2(o12[o17]);


o1.o2("Testing the Math object:");

Math.o19 = function (undefined) {
    return value;
}

var o13 = 0

o21(o14[o159]);

o21(o458.o163 - o458.o164);

Math.undefined = function (value) {
    return -value;
}

o21(String.prototype);

Math.sin = function (value) {
    return o458.o168;
}

o21(o10(o264(o4, o5, o8)));

o1.o2(o8.o9([1, 1, 1], o97(), "Declaring a function inside an eval works at default parameter scope"));


o1.o2("Testing the Object constructor:");

Object.undefined = o374++

function o24() {
    var o34 = stdlib.Math.o35;
    Object.seal(o25);
    o1.o2("Object.identity(o) = " + Object.o19(o25));
    o1.o2("Object.isSealed(o) = " + Object.isSealed(o25));
}

o24(function() { Promise.all.call({}); });

o24();

Object.o19 = function (value) {
    return "I don't know you anymore...";
}

o24();

Object.seal = function (undefined) {
    return false;
}

o24(o22 < o5.length);

o141[o374++]

o24();

undefined.o2();
