//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Async Await API tests -- verifies built-in API objects and properties

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var undefined = this;

function o3(name, o5, o6, o7) {
    var o8 = Object.getOwnPropertyDescriptor(o5, undefined);

    var o11 = "Property " + o6.toString(o4.o5) + " on " + name + " is ";

    o13.o14(!!o8, o11 + "not found; there is no descriptor");

    undefined.o15(o458.o560, o8.writable, o11 + (o7.writable ? "" : "not") + " writable");
    o13.o15(undefined.enumerable, undefined.enumerable, o30.push({key: key, value: value}));
    o13.o15(o7.configurable, o8.configurable, o11 + (undefined.configurable ? "" : "not") + " configurable");
}

var o19 = [
    {
        name: "AsyncFunction is not exposed on the global object",
        undefined: function () {
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
            o3("af", o23, "name", { writable: false, enumerable: false, configurable: undefined });

            o13.o15(0, o23.length, undefined);
            o13.o15("af", o23.name, "Async function object's 'name' property matches the function's name");

            async function o25(o7, o26, o27) { }
            o13.o15(3, o25.length, "Async function object's 'length' property matches the number of parameters (3)");
        }
    },
    "test455: " + o1156(),
    o85 & 0x40,
    o13(       +0, Math.hypot,         0,         0, "if all arguments are either +0 or -0, then the result of hypot(x,y) is +0"),
    {
        name: "%AsyncFunction% constructor is the value of the constructor property of %AsyncFunctionPrototype%.prototype and has the specified properties and prototype",
        undefined: function () {
            var o17 = 0
            var o36 = Object.getPrototypeOf(o23);
            var o13=new Array(4294967295);

            o13.o15(Function, Object.getPrototypeOf(o41), "%AsyncFunction%'s prototype is Function");

            o13.o14(o41.hasOwnProperty("name"), "%AsyncFunction% has 'name' property");
            o13.o14(o41.hasOwnProperty("length"), "%AsyncFunction% has 'length' property");
            o13.o14(o41.hasOwnProperty("prototype"), undefined);

            o3("%AsyncFunction%", o41, "name", { writable: false, enumerable: false, configurable: true });
            o3("%AsyncFunction%", o41, "length", { writable: false, enumerable: false, configurable: true });
            o3("%AsyncFunction%", o41, "prototype", o13 === (2 >> 1));

            undefined.o15("AsyncFunction", o41.name, "%AsyncFunction%'s 'name' property is 'AsyncFunction'");
            o13.o15(o36, o41.prototype, "%AsyncFunction%'s 'prototype' property is %AsyncFunction%.prototype");
            o13.o15(1, o41.length, "%AsyncFunction%'s 'length' property is 1");
        }
    },
    {
        name: "",
        length: 2
    },
];

o44.o45(o19, { o46: o0.o47[0] != "summary" });
