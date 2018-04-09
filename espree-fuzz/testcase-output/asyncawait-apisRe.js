//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Async Await API tests -- verifies built-in API objects and properties

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = this;

function o3(name, o4, o5, o188) {
    var o7 = Object.getOwnPropertyDescriptor(o4, o5);

    var o8 = "Property " + o5.toString() + " on " + name + " is ";

    o9.o10(!!o7, o8 + "not found; there is no descriptor");

    o9.o11(o6.writable, o7.writable, o8 + (o6.writable ? "" : "not") + " writable");
    o9.o11(o6.enumerable, o7.enumerable, o8 + (o6.enumerable ? "" : "not") + " enumerable");
    o9.o11(o6.configurable, o7.configurable, o8 + (o6.configurable ? "" : "not") + " configurable");
}

var o12 = [
    {
        name: "AsyncFunction is not exposed on the global object",
        o13: function () {
            o9.o14(o2.hasOwnProperty("AsyncFunction"), "Global object does not have property named AsyncFunction");
        }
    },
    {
        name: "Async function instances have length and name properties",
        o13: function () {
            async function o15() { }

            o9.o10(o15.hasOwnProperty("length"), "Async function objects have a 'length' property");
            o9.o10(o15.hasOwnProperty("name"), "Async function objects have a 'name' property");

            o3("af", o15, "length", { writable: false, enumerable: false, configurable: true });
            o3("af", o15, "name", { writable: false, enumerable: false, configurable: true });

            o9.o11(0, o15.length, "Async function object's 'length' property matches the number of parameters (0)");
            o9.o11("af", o15.name, "Async function object's 'name' property matches the function's name");

            async function o16(o6, o17, o18) { }
            o9.o11(3, o16.length, "Async function object's 'length' property matches the number of parameters (3)");
        }
    },
    {
        name: "Async functions are not constructors and do not have a prototype property",
        o13: function () {
            async function o15() { }

            o9.o19(function () { new o15(); }, o20, "Async functions cannot be used as constructors", "Function is not a constructor");
            o9.o14(o15.hasOwnProperty("prototype"), "Async function objects do not have a 'prototype' property");
        }
    },
    {
        name: "Async functions do not have arguments nor caller properties regardless of strictness",
        o13: function () {
            async function o15() { }

            o9.o14(o15.hasOwnProperty("arguments"), "Async function objects do not have an 'arguments' property");
            o9.o14(o15.hasOwnProperty("caller"), "Async function objects do not have a 'caller' property");

            // Test JavascriptFunction APIs that special case PropertyIds::caller and ::arguments
            Object.setPrototypeOf(o15, Object.prototype); // Remove Function.prototype so we don't find its 'caller' and 'arguments' in these operations
            o9.o14("arguments" in o15, "Has operation on 'arguments' property returns false initially");
            o9.o11(undefined, o15.arguments, "Get operation on 'arguments' property returns undefined initially");
            o9.o11(undefined, Object.getOwnPropertyDescriptor(o15, "arguments"), "No property descriptor for 'arguments' initially");
            o9.o10(delete o15.arguments, "Delete operation on 'arguments' property returns true");

            o9.o11(0, o15.arguments = 0, "Set operation on 'arguments' creates new property with assigned value");
            o9.o10("arguments" in o15, "Has operation on 'arguments' property returns true now");
            o9.o11(0, o15.arguments, "Get operation on 'arguments' property returns property value now");
            o3("af", o15, "arguments", { writable: true, enumerable: true, configurable: true });
            o9.o10(delete o15.arguments, "Delete operation on 'arguments' property still returns true");
            o9.o14(o15.hasOwnProperty("arguments"), "'arguments' property is gone");

            o9.o14("caller" in o15, "Has operation on 'caller' property returns false initially");
            o9.o11(undefined, o15.caller, "Get operation on 'caller' property returns undefined initially");
            o9.o11(undefined, Object.getOwnPropertyDescriptor(o15, "caller"), "No property descriptor for 'caller' initially");
            o9.o10(delete o15.caller, "Delete operation on 'caller' property returns true");

            o9.o11(0, o15.caller = 0, "Set operation on 'caller' creates new property with assigned value");
            o9.o10("caller" in o15, "Has operation on 'caller' property returns true now");
            o9.o11(0, o15.caller, "Get operation on 'caller' property returns property value now");
            o3("af", o15, "caller", { writable: true, enumerable: true, configurable: true });
            o9.o10(delete o15.caller, "Delete operation on 'caller' property still returns true");
            o9.o14(o15.hasOwnProperty("caller"), "'caller' property is gone");

            async function o21() { "use strict"; }

            o9.o14(o21.hasOwnProperty("arguments"), "Strict mode async function objects do not have an 'arguments' property");
            o9.o14(o21.hasOwnProperty("caller"), "Strict mode async function objects do not have a 'caller' property");

            Object.setPrototypeOf(o21, Object.prototype); // Remove Function.prototype so we don't find its 'caller' and 'arguments' in these operations
            o9.o14("arguments" in o21, "Has operation on 'arguments' property returns false initially for a strict mode async function");
            o9.o11(undefined, o21.arguments, "Get operation on 'arguments' property returns undefined initially for a strict mode async function");
            o9.o11(undefined, Object.getOwnPropertyDescriptor(o21, "arguments"), "No property descriptor for 'arguments' initially for a strict mode async function");
            o9.o10(delete o21.arguments, "Delete operation on 'arguments' property returns true initially for a strict mode async function");

            o9.o11(0, o21.arguments = 0, "Set operation on 'arguments' creates new property with assigned value for a strict mode async function");
            o9.o10("arguments" in o21, "Has operation on 'arguments' property returns true now for a strict mode async function");
            o9.o11(0, o21.arguments, "Get operation on 'arguments' property returns property value now for a strict mode async function");
            o3("afstrict", o21, "arguments", { writable: true, enumerable: true, configurable: true });
            o9.o10(delete o21.arguments, "Delete operation on 'arguments' property still returns true for a strict mode async function");
            o9.o14(o21.hasOwnProperty("arguments"), "'arguments' property is gone for a strict mode async function");

            o9.o14("caller" in o21, "Has operation on 'caller' property returns false initially for a strict mode async function");
            o9.o11(undefined, o21.caller, "Get operation on 'caller' property returns undefined initially for a strict mode async function");
            o9.o11(undefined, Object.getOwnPropertyDescriptor(o21, "caller"), "No property descriptor for 'caller' initially for a strict mode async function");
            o9.o10(delete o21.caller, "Delete operation on 'caller' property returns true initially for a strict mode async function");

            o9.o11(0, o21.caller = 0, "Set operation on 'caller' creates new property with assigned value for a strict mode async function");
            o9.o10("caller" in o21, "Has operation on 'caller' property returns true now for a strict mode async function");
            o9.o11(0, o21.caller, "Get operation on 'caller' property returns property value now for a strict mode async function");
            o3("afstrict", o21, "caller", { writable: true, enumerable: true, configurable: true });
            o9.o10(delete o21.caller, "Delete operation on 'caller' property still returns true for a strict mode async function");
            o9.o14(o21.hasOwnProperty("caller"), "'caller' property is gone for a strict mode async function");
        }
    },
    {
        name: "Async function instances have %AsyncFunctionPrototype% as their prototype and it has the specifies properties and prototype",
        o13: function () {
            async function o15() { }
            var o22 = Object.getPrototypeOf(o15);

            o9.o11(Function.prototype, Object.getPrototypeOf(o22), "%AsyncFunctionPrototype%'s prototype is Function.prototype");

            o9.o10(o22.hasOwnProperty("constructor"), "%AsyncFunctionPrototype% has 'constructor' property");
            o9.o10(o22.hasOwnProperty(Symbol.toStringTag), "%AsyncFunctionPrototype% has [Symbol.toStringTag] property");

            o3("%AsyncFunctionPrototype%", o22, "constructor", { writable: false, enumerable: false, configurable: true });
            o3("%AsyncFunctionPrototype%", o22, Symbol.toStringTag, { writable: false, enumerable: false, configurable: true });

            o9.o11("AsyncFunction", o22[Symbol.toStringTag], "%AsyncFunctionPrototype%'s [Symbol.toStringTag] property is 'AsyncFunction'");

            o9.o14(o22.hasOwnProperty("prototype"), "%AsyncFunctionPrototype% does not have a 'prototype' property");
        }
    },
    {
        name: "%AsyncFunction% constructor is the value of the constructor property of %AsyncFunctionPrototype%.prototype and has the specified properties and prototype",
        o13: function () {
            async function o15() { }
            var o22 = Object.getPrototypeOf(o15);
            var o23 = o22.constructor;

            o9.o11(Function, Object.getPrototypeOf(o23), "%AsyncFunction%'s prototype is Function");

            o9.o10(o23.hasOwnProperty("name"), "%AsyncFunction% has 'name' property");
            o9.o10(o23.hasOwnProperty("length"), "%AsyncFunction% has 'length' property");
            o9.o10(o23.hasOwnProperty("prototype"), "%AsyncFunction% has 'prototype' property");

            o3("%AsyncFunction%", o23, "name", { writable: false, enumerable: false, configurable: true });
            o3("%AsyncFunction%", o23, "length", { writable: false, enumerable: false, configurable: true });
            o3("%AsyncFunction%", o23, "prototype", { writable: false, enumerable: false, configurable: false });

            o9.o11("AsyncFunction", o23.name, "%AsyncFunction%'s 'name' property is 'AsyncFunction'");
            o9.o11(o22, o23.prototype, "%AsyncFunction%'s 'prototype' property is %AsyncFunction%.prototype");
            o9.o11(1, o23.length, "%AsyncFunction%'s 'length' property is 1");
        }
    },
    {
        name: "",
        o13: function () {
            var o22 = Object.getPrototypeOf(async function () { });
            var o24 = o22.constructor;

            var o15 = new o24('return await 1;');

            o9.o11(o22, Object.getPrototypeOf(o15), "Async function created by %AsyncFunction% should have the same prototype as syntax declared async functions");

            o9.o11("anonymous", o15.name, "AsyncFunction constructed async function's name is 'anonymous'");
            o9.o11("async function anonymous(\n) {return await 1;\n}", o15.toString(), "toString of AsyncFunction constructed function is named 'anonymous'");

            o15 = new o24('a', 'b', 'c', 'await a; await b; await c;');
            o9.o11("async function anonymous(a,b,c\n) {await a; await b; await c;\n}", o15.toString(), "toString of AsyncFunction constructed function is named 'anonymous' with specified parameters");

            // Cannot verify behavior of async functions in conjunction with UnitTestFramework.js
            // due to callback nature of their execution. Instead, verification of behavior is
            // found in async-functionality.js test.
        }
    },
];

o25.o26(o12, { o27: o0.o28[0] != "summary" });
