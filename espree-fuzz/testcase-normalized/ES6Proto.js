//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Tests for Object.setPrototypeOf and Object#__proto__ ES6 behavior

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');
var o3 = o2.set;
var o4 = o2.get;

var o5 = [
    {
        name: "Sanity base cases",
        o6: function() {
            o7.o8('function', typeof o3, "Object#__proto__ is an accessor property with set method");
            o7.o8('function', typeof o4, "Object#__proto__ is an accessor property with get method");
        }
    },
    {
        name: "Error conditions for Object#__proto__",
        o6: function () {
            o7.o9(function() { o3.call(); }, o10, "set Object#__proto__ throws if this argument is not passed", "Object.prototype.__proto__: 'this' is not an Object");
            o7.o9(function() { o3.call(undefined); }, o10, "set Object#__proto__ throws if this argument is undefined", "Object.prototype.__proto__: 'this' is not an Object");
            o7.o9(function() { o3.call(null); }, o10, "set Object#__proto__ throws if this argument is null", "Object.prototype.__proto__: 'this' is not an Object");

            o7.o9(function() { o4.call(); }, o10, "get Object#__proto__ throws if this argument is not passed", "Object.prototype.__proto__: 'this' is not an Object");
            o7.o9(function() { o4.call(undefined); }, o10, "get Object#__proto__ throws if this argument is undefined", "Object.prototype.__proto__: 'this' is not an Object");
            o7.o9(function() { o4.call(null); }, o10, "get Object#__proto__ throws if this argument is null", "Object.prototype.__proto__: 'this' is not an Object");
        }
    },
    {
        name: "Cases where Object#__proto__ shouldn't change [[Prototype]]",
        o6: function () {
            var o11 = {};
            var o12 = Object.create(o11);

            o7.o8(undefined, o3.call(o12), "set Object#__proto__ returns undefined if the proto argument is not passed");
            o7.o8(o11, o4.call(o12), "[[Prototype]] slot of o was not changed");
            o7.o8(undefined, o3.call(o12, undefined), "set Object#__proto__ returns undefined if the proto argument is undefined");
            o7.o8(o11, o4.call(o12), "[[Prototype]] slot of o was not changed");
            o7.o8(undefined, o3.call(o12, 5), "set Object#__proto__ returns undefined if the proto argument is non-object");
            o7.o8(o11, o4.call(o12), "[[Prototype]] slot of o was not changed");

            var o13 = 5;
            o7.o8(undefined, o3.call(o13, {}), "set Object#__proto__ returns undefined if the this argument is non-object when proto argument is supplied");
            o7.o8(Number.prototype, o4.call(o13), "[[Prototype]] slot of n was not changed");
        }
    },
    {
        name: "Simple validation of Object#__proto__",
        o6: function () {
            var o11 = {};
            var o12 = Object.create(o11);

            o7.o8(undefined, o3.call(o12, null), "set Object#__proto__ returns undefined if the proto argument is null");
            o7.o8(null, o4.call(o12), "[[Prototype]] slot of o was changed to null");

            o7.o8(undefined, o3.call(o12, o11), "set Object#__proto__ returns undefined if the proto argument is object");
            o7.o8(o11, o4.call(o12), "[[Prototype]] slot of o was changed to p");
        }
    },
    {
        name: "Error conditions for Object.setPrototypeOf/getPrototypeOf",
        o6: function () {
            o7.o9(function() { Object.setPrototypeOf(); }, o10, "Object.setPrototypeOf throws when called with no arguments", "Object.setPrototypeOf: argument is not an Object");
            o7.o9(function() { Object.setPrototypeOf(undefined); }, o10, "Object.setPrototypeOf throws when object argument is undefined", "Object.setPrototypeOf: argument is not an Object");
            o7.o9(function() { Object.setPrototypeOf(null); }, o10, "Object.setPrototypeOf throws when object argument is null", "Object.setPrototypeOf: argument is not an Object");

            o7.o9(function() { Object.setPrototypeOf({}); }, o10, "Object.setPrototypeOf throws when proto is not passed", "Object.setPrototypeOf: argument is not an Object and is not null");
            o7.o9(function() { Object.setPrototypeOf({}, undefined); }, o10, "Object.setPrototypeOf throws when proto is undefined", "Object.setPrototypeOf: argument is not an Object and is not null");
            o7.o9(function() { Object.setPrototypeOf({}, 5); }, o10, "Object.setPrototypeOf throws when proto is not object", "Object.setPrototypeOf: argument is not an Object and is not null");

            o7.o9(function() { Object.getPrototypeOf(); }, o10, "Object.getPrototypeOf throws when argument is not passed", "Object.getPrototypeOf: argument is not an Object");
            o7.o9(function() { Object.getPrototypeOf(undefined); }, o10, "Object.getPrototypeOf throws when argument is undefined", "Object.getPrototypeOf: argument is not an Object");
            o7.o9(function() { Object.getPrototypeOf(null); }, o10, "Object.getPrototypeOf throws when argument is null", "Object.getPrototypeOf: argument is not an Object");
        }
    },
    {
        name: "Object.setPrototypeOf used on non-object argument doesn't change [[Prototype]]",
        o6: function () {
            var o13 = 5;
            o7.o8(5, Object.setPrototypeOf(o13, {}), "Object.setPrototypeOf returns first argument if argument is non-object when proto argument is supplied");
            o7.o8(Number.prototype, Object.getPrototypeOf(o13), "[[Prototype]] slot of n was not changed");
        }
    },
    {
        name: "Simple validation of Object.setPrototypeOf",
        o6: function () {
            var o11 = {};
            var o12 = Object.create(o11);

            o7.o8(o12, Object.setPrototypeOf(o12, null), "Object.setPrototypeOf returns o if the proto argument is null");
            o7.o8(null, Object.getPrototypeOf(o12), "[[Prototype]] slot of o was changed to null");

            o7.o8(o12, Object.setPrototypeOf(o12, o11), "Object.setPrototypeOf returns o if the proto argument is object");
            o7.o8(o11, Object.getPrototypeOf(o12), "[[Prototype]] slot of o was changed to p");
        }
    },
];

o14.o15(o5, { o16: o0.o17[0] != "summary" });
