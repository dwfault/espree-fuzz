//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Object.is(x,y) API extension tests -- verifies the API shape and basic functionality

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "Object.is should exist and have length 2",
        o4: function () {
            o5.o6(Object.hasOwnProperty('is'), "Object should have an is method");
            o5.o9(2, Object.is.length, "is method takes two arguments");
        }
    },
    {
        name: "Object.is(undefined, y) returns true for y = undefined, false otherwise",
        o4: function () {
            o5.o6(Object.is(undefined, undefined), "Object.is(undefined, y) returns true for Type(y) = Undefined");
            o5.o13(Object.is(undefined, null), "Object.is(undefined, y) returns false for Type(y) = Null");
            o5.o13(Object.is(undefined, false), "Object.is(undefined, y) returns false for Type(y) = Boolean");
            o5.o13(Object.is(undefined, ""), "Object.is(undefined, y) returns false for Type(y) = String");
            o5.o13(Object.is(undefined, Symbol()), "Object.is(undefined, y) returns false for Type(y) = Symbol");
            o5.o13(Object.is(undefined, 0), "Object.is(undefined, y) returns false for Type(y) = Number");
            o5.o13(Object.is(undefined, { }), "Object.is(undefined, y) returns false for Type(y) = Object");
        }
    },
    {
        name: "Object.is(null, y) returns true for y = null, false otherwise",
        o4: function () {
            o5.o13(Object.is(null, undefined), "Object.is(null, y) returns false for Type(y) = Undefined");
            o5.o6(Object.is(null, null), "Object.is(null, y) returns true for Type(y) = Null");
            o5.o13(Object.is(null, false), "Object.is(null, y) returns false for Type(y) = Boolean");
            o5.o13(Object.is(null, ""), "Object.is(null, y) returns false for Type(y) = String");
            o5.o13(Object.is(null, Symbol()), "Object.is(null, y) returns false for Type(y) = Symbol");
            o5.o13(Object.is(null, 0), "Object.is(null, y) returns false for Type(y) = Number");
            o5.o13(Object.is(null, { }), "Object.is(null, y) returns false for Type(y) = Object");
        }
    },
    {
        name: "Object.is(x, y), where Type(x) is Number, returns true for y = x (bitwise), false otherwise",
        o4: function () {
            o5.o13(Object.is(0, undefined), "Object.is(0, y) returns false for Type(y) = Undefined");
            o5.o13(Object.is(0, null), "Object.is(0, y) returns false for Type(y) = Null");
            o5.o13(Object.is(0, false), "Object.is(0, y) returns false for Type(y) = Boolean");
            o5.o13(Object.is(0, ""), "Object.is(0, y) returns false for Type(y) = String");
            o5.o13(Object.is(0, Symbol()), "Object.is(0, y) returns false for Type(y) = Symbol");
            o5.o6(Object.is(0, 0), "Object.is(0, y) returns true for Type(y) = Number");
            o5.o13(Object.is(0, { }), "Object.is(0, y) returns false for Type(y) = Object");

            o5.o6(Object.is(NaN, NaN), "Object.is(NaN, NaN) returns true");
            o5.o13(Object.is(+0, -0), "Object.is(+0, -0) returns false");
            o5.o13(Object.is(-0, +0), "Object.is(+0, -0) returns false");

            o5.o6(Object.is(10, 10), "Object.is(10, 10) returns true");
            o5.o13(Object.is(10, -10), "Object.is(10, 10) returns false");

            o5.o6(Object.is(Number.o17, Number.o17), "Object.is(+Infinity, +Infinity) returns true");
            o5.o6(Object.is(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY), "Object.is(-Infinity, -Infinity) returns true");
            o5.o13(Object.is(Number.o17, Number.NEGATIVE_INFINITY), "Object.is(+Infinity, -Infinity) returns false");
        }
    },
    {
        name: "Object.is(x, y), where Type(x) is String, returns true when Type(y) is String and x and y have the same sequence of code points, false otherwise",
        o4: function () {
            o5.o13(Object.is("", undefined), "Object.is('', y) returns false for Type(y) = Undefined");
            o5.o13(Object.is("", null), "Object.is('', y) returns false for Type(y) = Null");
            o5.o13(Object.is("", false), "Object.is('', y) returns false for Type(y) = Boolean");
            o5.o6(Object.is("", ""), "Object.is('', y) returns true for Type(y) = String where x == y");
            o5.o13(Object.is("", Symbol()), "Object.is('', y) returns false for Type(y) = Symbol");
            o5.o13(Object.is("", 0), "Object.is('', y) returns false for Type(y) = Number");
            o5.o13(Object.is("", { }), "Object.is('', y) returns false for Type(y) = Object");

            o5.o6(Object.is("abc", "abc"), "Object.is('abc', 'abc') returns true");
            o5.o13(Object.is("abc", "xyz"), "Object.is('abc', 'xyz') returns false");
        }
    },
    {
        name: "Object.is(x, y), where Type(x) is Boolean, returns true when Type(y) is Boolean and x = y, false otherwise",
        o4: function () {
            o5.o13(Object.is(false, undefined), "Object.is(false, y) returns false for Type(y) = Undefined");
            o5.o13(Object.is(false, null), "Object.is(false, y) returns false for Type(y) = Null");
            o5.o6(Object.is(false, false), "Object.is(false, y) returns true for Type(y) = Boolean where x == y");
            o5.o13(Object.is(false, ""), "Object.is(false, y) returns false for Type(y) = String");
            o5.o13(Object.is(false, Symbol()), "Object.is(false, y) returns false for Type(y) = Symbol");
            o5.o13(Object.is(false, 0), "Object.is(false, y) returns false for Type(y) = Number");
            o5.o13(Object.is(false, { }), "Object.is(false, y) returns false for Type(y) = Object");

            o5.o6(Object.is(true, true), "Object.is(true, true) returns true");
            o5.o13(Object.is(false, true), "Object.is(false, true) returns false");
        }
    },
    {
        name: "Object.is(x, y), where Type(x) is Symbol, returns true when Type(y) is Symbol and x and y are the same symbol, false otherwise",
        o4: function () {
            var o19 = Symbol();

            o5.o13(Object.is(o19, undefined), "Object.is(Symbol(), y) returns false for Type(y) = Undefined");
            o5.o13(Object.is(o19, null), "Object.is(Symbol(), y) returns false for Type(y) = Null");
            o5.o13(Object.is(o19, false), "Object.is(Symbol(), y) returns false for Type(y) = Boolean");
            o5.o13(Object.is(o19, ""), "Object.is(Symbol(), y) returns false for Type(y) = String");
            o5.o6(Object.is(o19, o19), "Object.is(x, y) returns true when x and y are the same symbol");
            o5.o13(Object.is(o19, 0), "Object.is(Symbol(), y) returns false for Type(y) = Number");
            o5.o13(Object.is(o19, { }), "Object.is(Symbol(), y) returns false for Type(y) = Object");

            o5.o13(Object.is(o19, Symbol()), "Object.is(x, y) returns false where x and y are different symbols");
        }
    },
    {
        name: "Object.is(x, y), where Type(x) is Symbol, returns true when Type(y) is Symbol and x and y are the same symbol, false otherwise",
        o4: function () {
            var o20 = { };

            o5.o13(Object.is(o20, undefined), "Object.is(Symbol(), y) returns false for Type(y) = Undefined");
            o5.o13(Object.is(o20, null), "Object.is(Symbol(), y) returns false for Type(y) = Null");
            o5.o13(Object.is(o20, false), "Object.is(Symbol(), y) returns false for Type(y) = Boolean");
            o5.o13(Object.is(o20, ""), "Object.is(Symbol(), y) returns false for Type(y) = String");
            o5.o13(Object.is(o20, Symbol()), "Object.is(x, y) returns false when Type(y) = Symbol");
            o5.o13(Object.is(o20, 0), "Object.is(Symbol(), y) returns false for Type(y) = Number");
            o5.o6(Object.is(o20, o20), "Object.is(Symbol(), y) returns true for Type(y) = Object where x and y are the same object");

            o5.o13(Object.is(o20, { }), "Object.is(x, y) returns false when x and y are different objects");
        }
    },
    {
        name: "Object.is(x, y), where Type(x) is function, returns true when Type(y) is function and x and y are the same function or same throw functions in sloppy mode, false otherwise",
        o4: function () {
            function o21() { }
            function o22() { }
            var o23 = { o21fo21 }, o24 = { o21fo21 };
            var o25 = o21.bind();
            var o27 = o21.bind({});

            o5.o6(Object.is(o23.o21, o24.o21), "Object.is should return true when comparing the same function object");
            o5.o6(Object.is(Object.getOwnPropertyDescriptor(o21.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(o21.__proto__, "caller").set), "Object.is should return true when comparing different throw type error methods on the same function");
            o5.o6(Object.is(Object.getOwnPropertyDescriptor(o21.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(o21.__proto__, "caller").get), "Object.is should return true when comparing different throw type error methods on the same function's different accessors");
            o5.o6(Object.is(Object.getOwnPropertyDescriptor(o21.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(o22.__proto__, "arguments").set), "Object.is should return true when comparing same throw type error methods on different functions");
            o5.o6(Object.is(Object.getOwnPropertyDescriptor(o21.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(o22.__proto__, "caller").set), "Object.is should return true when comparing different throw type error methods on the different functions");
            o5.o6(Object.is(Object.getOwnPropertyDescriptor(o21.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(o22.__proto__, "caller").get), "Object.is should return true when comparing different throw type error methods on the different functions' different accessors");
            o5.o6(Object.is(Object.getOwnPropertyDescriptor(o25.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(o25.__proto__, "caller").set), "Object.is should return true when comparing different throw type error methods on the same bound function");
            o5.o6(Object.is(Object.getOwnPropertyDescriptor(o25.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(o25.__proto__, "caller").get), "Object.is should return true when comparing different throw type error methods on the same bound function's different accessors");
            o5.o6(Object.is(Object.getOwnPropertyDescriptor(o27.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(o25.__proto__, "caller").get), "Object.is should return true when comparing different throw type error methods on a different bound function's different accessors");
        }
    },
    {
        name: "Object.is(x, y), where Type(x) is function, returns true when Type(y) is function and x and y are the same function or same throw functions in strict mode, false otherwise",
        o4: function () {
            'use strict';
            function o21() { 'use strict'; }
            var o25 = o21.bind();
            var o27 = o21.bind({});

            o5.o6(Object.is(Object.getOwnPropertyDescriptor(Function.prototype, "arguments").set, Object.getOwnPropertyDescriptor(Function.prototype, "caller").set), "Object.is should return true when comparing different throw type error methods on the same function");
            o5.o6(Object.is(Object.getOwnPropertyDescriptor(Function.prototype, "arguments").set, Object.getOwnPropertyDescriptor(Function.prototype, "caller").get), "Object.is should return true when comparing different throw type error methods on the same function's different accessors");
            o5.o6(Object.is(Object.getOwnPropertyDescriptor(o25.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(o25.__proto__, "caller").set), "Object.is should return true when comparing different throw type error methods on the same bound function");
            o5.o6(Object.is(Object.getOwnPropertyDescriptor(o25.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(o25.__proto__, "caller").get), "Object.is should return true when comparing different throw type error methods on the same bound function's different accessors");
            o5.o6(Object.is(Object.getOwnPropertyDescriptor(o27.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(o25.__proto__, "caller").get), "Object.is should return true when comparing different throw type error methods on a different bound function's different accessors");
        }
    },
    {
        name: "Object.is called with less or more than 2 arguments",
        o4: function () {
            o5.o6(Object.is(), "Object.is() is the same as Object.is(undefined, undefined) which should return true");

            o5.o6(Object.is(undefined), "Object.is(undefined) is the same as Object.is(undefined, undefined) and returns true");
            o5.o13(Object.is(null), "Object.is(null) is the same as Object.is(null, undefined) and returns false");
            o5.o13(Object.is(false), "Object.is(false) is the same as Object.is(false, undefined) and returns false");
            o5.o13(Object.is(""), "Object.is('') is the same as Object.is('', undefined) and returns false");
            o5.o13(Object.is(Symbol()), "Object.is(Symbol()) is the same as Object.is(Symbol(), undefined) and returns false");
            o5.o13(Object.is(0), "Object.is(0) is the same as Object.is(0, undefined) and returns false");
            o5.o13(Object.is({ }), "Object.is({ }) is the same as Object.is({ }, undefined) and returns false");

            o5.o6(Object.is(0, 0, 1), "Object.is ignores arguments after the first two; ignores the 1");
            o5.o13(Object.is("", 0, false), "Object.is ignores arguments after the first two; ignores the false");
        }
    },
];

o34.o35(o2, { o36: o0.o37[0] != "summary" });
