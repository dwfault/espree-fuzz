//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Async Await API tests -- verifies built-in API objects and properties

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = this;

function o3(name, o5, o6, o7) {
    var o8 = Object.getOwnPropertyDescriptor(o5, o6);

    var o11 = "Property " + o6.toString() + " on " + name + " is ";

    o13.o14(!!o8, o11 + "not found; there is no descriptor");

    o13.o15(o7.writable, o8.writable, o11 + (o7.writable ? "" : "not") + " writable");
    o13.o15(o7.enumerable, o8.enumerable, o11 + (o7.enumerable ? "" : "not") + " enumerable");
    o13.o15(o7.configurable, o8.configurable, o11 + (o7.configurable ? "" : "not") + " configurable");
}

var o19 = [
    {
        name: "AsyncFunction is not exposed on the global object",
        o20: function () {
            o13.o21(o2.hasOwnProperty("AsyncFunction"), "Global object does not have property named AsyncFunction");
        }
    },
    {
        name: "Async function instances have length and name properties",
        o20: function () {
            async function o23() { }

            o13.o14(o23.hasOwnProperty("length"), "Async function objects have a 'length' property");
            o13.o14(o23.hasOwnProperty("name"), "Async function objects have a 'name' property");

            o3("af", o23, "length", { writable: false, enumerable: false, configurable: true });
            o3("af", o23, "name", { writable: false, enumerable: false, configurable: true });

            o13.o15(0, o23.length, "Async function object's 'length' property matches the number of parameters (0)");
            o13.o15("af", o23.name, "Async function object's 'name' property matches the function's name");

            async function o25(o7, o26, o27) { }
            o13.o15(3, o25.length, "Async function object's 'length' property matches the number of parameters (3)");
        }
    },
    {
        name: "Async functions are not constructors and do not have a prototype property",
        o20: function () {
            async function o23() { }

            o13.o28(function () { new o23(); }, o29, "Async functions cannot be used as constructors", "Function is not a constructor");
            o13.o21(o23.hasOwnProperty("prototype"), "Async function objects do not have a 'prototype' property");
        }
    },
    {
        name: "Async functions do not have arguments nor caller properties regardless of strictness",
        o20: function () {
            async function o23() { }

            o13.o21(o23.hasOwnProperty("arguments"), "Async function objects do not have an 'arguments' property");
            o13.o21(o23.hasOwnProperty("caller"), "Async function objects do not have a 'caller' property");

            // Test JavascriptFunction APIs that special case PropertyIds::caller and ::arguments
            Object.setPrototypeOf(o23, Object.prototype); // Remove Function.prototype so we don't find its 'caller' and 'arguments' in these operations
            o13.o21("arguments" in o23, "Has operation on 'arguments' property returns false initially");
            o13.o15(undefined, o23.arguments, "Get operation on 'arguments' property returns undefined initially");
            o13.o15(undefined, Object.getOwnPropertyDescriptor(o23, "arguments"), "No property descriptor for 'arguments' initially");
            o13.o14(delete o23.arguments, "Delete operation on 'arguments' property returns true");

            o13.o15(0, o23.arguments = 0, "Set operation on 'arguments' creates new property with assigned value");
            o13.o14("arguments" in o23, "Has operation on 'arguments' property returns true now");
            o13.o15(0, o23.arguments, "Get operation on 'arguments' property returns property value now");
            o3("af", o23, "arguments", { writable: true, enumerable: true, configurable: true });
            o13.o14(delete o23.arguments, "Delete operation on 'arguments' property still returns true");
            o13.o21(o23.hasOwnProperty("arguments"), "'arguments' property is gone");

            o13.o21("caller" in o23, "Has operation on 'caller' property returns false initially");
            o13.o15(undefined, o23.caller, "Get operation on 'caller' property returns undefined initially");
            o13.o15(undefined, Object.getOwnPropertyDescriptor(o23, "caller"), "No property descriptor for 'caller' initially");
            o13.o14(delete o23.caller, "Delete operation on 'caller' property returns true");

            o13.o15(0, o23.caller = 0, "Set operation on 'caller' creates new property with assigned value");
            o13.o14("caller" in o23, "Has operation on 'caller' property returns true now");
            o13.o15(0, o23.caller, "Get operation on 'caller' property returns property value now");
            o3("af", o23, "caller", { writable: true, enumerable: true, configurable: true });
            o13.o14(delete o23.caller, "Delete operation on 'caller' property still returns true");
            o13.o21(o23.hasOwnProperty("caller"), "'caller' property is gone");

            async function o35() { "use strict"; }

            o13.o21(o35.hasOwnProperty("arguments"), "Strict mode async function objects do not have an 'arguments' property");
            o13.o21(o35.hasOwnProperty("caller"), "Strict mode async function objects do not have a 'caller' property");

            Object.setPrototypeOf(o35, Object.prototype); // Remove Function.prototype so we don't find its 'caller' and 'arguments' in these operations
            o13.o21("arguments" in o35, "Has operation on 'arguments' property returns false initially for a strict mode async function");
            o13.o15(undefined, o35.arguments, "Get operation on 'arguments' property returns undefined initially for a strict mode async function");
            o13.o15(undefined, Object.getOwnPropertyDescriptor(o35, "arguments"), "No property descriptor for 'arguments' initially for a strict mode async function");
            o13.o14(delete o35.arguments, "Delete operation on 'arguments' property returns true initially for a strict mode async function");

            o13.o15(0, o35.arguments = 0, "Set operation on 'arguments' creates new property with assigned value for a strict mode async function");
            o13.o14("arguments" in o35, "Has operation on 'arguments' property returns true now for a strict mode async function");
            o13.o15(0, o35.arguments, "Get operation on 'arguments' property returns property value now for a strict mode async function");
            o3("afstrict", o35, "arguments", { writable: true, enumerable: true, configurable: true });
            o13.o14(delete o35.arguments, "Delete operation on 'arguments' property still returns true for a strict mode async function");
            o13.o21(o35.hasOwnProperty("arguments"), "'arguments' property is gone for a strict mode async function");

            o13.o21("caller" in o35, "Has operation on 'caller' property returns false initially for a strict mode async function");
            o13.o15(undefined, o35.caller, "Get operation on 'caller' property returns undefined initially for a strict mode async function");
            o13.o15(undefined, Object.getOwnPropertyDescriptor(o35, "caller"), "No property descriptor for 'caller' initially for a strict mode async function");
            o13.o14(delete o35.caller, "Delete operation on 'caller' property returns true initially for a strict mode async function");

            o13.o15(0, o35.caller = 0, "Set operation on 'caller' creates new property with assigned value for a strict mode async function");
            o13.o14("caller" in o35, "Has operation on 'caller' property returns true now for a strict mode async function");
            o13.o15(0, o35.caller, "Get operation on 'caller' property returns property value now for a strict mode async function");
            o3("afstrict", o35, "caller", { writable: true, enumerable: true, configurable: true });
            o13.o14(delete o35.caller, "Delete operation on 'caller' property still returns true for a strict mode async function");
            o13.o21(o35.hasOwnProperty("caller"), "'caller' property is gone for a strict mode async function");
        }
    },
    {
        name: "Async function instances have %AsyncFunctionPrototype% as their prototype and it has the specifies properties and prototype",
        o20: function () {
            async function o23() { }
            var o36 = Object.getPrototypeOf(o23);

            o13.o15(Function.prototype, Object.getPrototypeOf(o36), "%AsyncFunctionPrototype%'s prototype is Function.prototype");

            o13.o14(o36.hasOwnProperty("constructor"), "%AsyncFunctionPrototype% has 'constructor' property");
            o13.o14(o36.hasOwnProperty(Symbol.toStringTag), "%AsyncFunctionPrototype% has [Symbol.toStringTag] property");

            o3("%AsyncFunctionPrototype%", o36, "constructor", { writable: false, enumerable: false, configurable: true });
            o3("%AsyncFunctionPrototype%", o36, Symbol.toStringTag, { writable: false, enumerable: false, configurable: true });

            o13.o15("AsyncFunction", o36[Symbol.toStringTag], "%AsyncFunctionPrototype%'s [Symbol.toStringTag] property is 'AsyncFunction'");

            o13.o21(o36.hasOwnProperty("prototype"), "%AsyncFunctionPrototype% does not have a 'prototype' property");
        }
    },
    {
        name: "%AsyncFunction% constructor is the value of the constructor property of %AsyncFunctionPrototype%.prototype and has the specified properties and prototype",
        o20: function () {
            async function o23() { }
            var o36 = Object.getPrototypeOf(o23);
            var o41 = o36.constructor;

            o13.o15(Function, Object.getPrototypeOf(o41), "%AsyncFunction%'s prototype is Function");

            o13.o14(o41.hasOwnProperty("name"), "%AsyncFunction% has 'name' property");
            o13.o14(o41.hasOwnProperty("length"), "%AsyncFunction% has 'length' property");
            o13.o14(o41.hasOwnProperty("prototype"), "%AsyncFunction% has 'prototype' property");

            o3("%AsyncFunction%", o41, "name", { writable: false, enumerable: false, configurable: true });
            o3("%AsyncFunction%", o41, "length", { writable: false, enumerable: false, configurable: true });
            o3("%AsyncFunction%", o41, "prototype", { writable: false, enumerable: false, configurable: false });

            o13.o15("AsyncFunction", o41.name, "%AsyncFunction%'s 'name' property is 'AsyncFunction'");
            o13.o15(o36, o41.prototype, "%AsyncFunction%'s 'prototype' property is %AsyncFunction%.prototype");
            o13.o15(1, o41.length, "%AsyncFunction%'s 'length' property is 1");
        }
    },
    {
        name: "",
        o20: function () {
            var o36 = Object.getPrototypeOf(async function () { });
            var o43 = o36.constructor;

            var o23 = new o43('return await 1;');

            o13.o15(o36, Object.getPrototypeOf(o23), "Async function created by %AsyncFunction% should have the same prototype as syntax declared async functions");

            o13.o15("anonymous", o23.name, "AsyncFunction constructed async function's name is 'anonymous'");
            o13.o15("async function anonymous(\n) {return await 1;\n}", o23.toString(), "toString of AsyncFunction constructed function is named 'anonymous'");

            o23 = new o43('a', 'b', 'c', 'await a; await b; await c;');
            o13.o15("async function anonymous(a,b,c\n) {await a; await b; await c;\n}", o23.toString(), "toString of AsyncFunction constructed function is named 'anonymous' with specified parameters");

            // Cannot verify behavior of async functions in conjunction with UnitTestFramework.js
            // due to callback nature of their execution. Instead, verification of behavior is
            // found in async-functionality.js test.
        }
    },
];

o44.o45(o19, { o46: o0.o47[0] != "summary" });
