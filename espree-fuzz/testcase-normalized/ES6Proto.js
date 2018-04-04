//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Tests for Object.setPrototypeOf and Object#__proto__ ES6 behavior

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');
var o6 = o2.set;
var o8 = o2.get;

var o10 = [
    {
        name: "Sanity base cases",
        o12: function() {
            o13.o14('function', typeof o6, "Object#__proto__ is an accessor property with set method");
            o13.o14('function', typeof o8, "Object#__proto__ is an accessor property with get method");
        }
    },
    {
        name: "Error conditions for Object#__proto__",
        o12: function () {
            o13.o15(function() { o6.call(); }, o17, "set Object#__proto__ throws if this argument is not passed", "Object.prototype.__proto__: 'this' is not an Object");
            o13.o15(function() { o6.call(undefined); }, o17, "set Object#__proto__ throws if this argument is undefined", "Object.prototype.__proto__: 'this' is not an Object");
            o13.o15(function() { o6.call(null); }, o17, "set Object#__proto__ throws if this argument is null", "Object.prototype.__proto__: 'this' is not an Object");

            o13.o15(function() { o8.call(); }, o17, "get Object#__proto__ throws if this argument is not passed", "Object.prototype.__proto__: 'this' is not an Object");
            o13.o15(function() { o8.call(undefined); }, o17, "get Object#__proto__ throws if this argument is undefined", "Object.prototype.__proto__: 'this' is not an Object");
            o13.o15(function() { o8.call(null); }, o17, "get Object#__proto__ throws if this argument is null", "Object.prototype.__proto__: 'this' is not an Object");
        }
    },
    {
        name: "Cases where Object#__proto__ shouldn't change [[Prototype]]",
        o12: function () {
            var o19 = {};
            var o20 = Object.create(o19);

            o13.o14(undefined, o6.call(o20), "set Object#__proto__ returns undefined if the proto argument is not passed");
            o13.o14(o19, o8.call(o20), "[[Prototype]] slot of o was not changed");
            o13.o14(undefined, o6.call(o20, undefined), "set Object#__proto__ returns undefined if the proto argument is undefined");
            o13.o14(o19, o8.call(o20), "[[Prototype]] slot of o was not changed");
            o13.o14(undefined, o6.call(o20, 5), "set Object#__proto__ returns undefined if the proto argument is non-object");
            o13.o14(o19, o8.call(o20), "[[Prototype]] slot of o was not changed");

            var o22 = 5;
            o13.o14(undefined, o6.call(o22, {}), "set Object#__proto__ returns undefined if the this argument is non-object when proto argument is supplied");
            o13.o14(Number.prototype, o8.call(o22), "[[Prototype]] slot of n was not changed");
        }
    },
    {
        name: "Simple validation of Object#__proto__",
        o12: function () {
            var o19 = {};
            var o20 = Object.create(o19);

            o13.o14(undefined, o6.call(o20, null), "set Object#__proto__ returns undefined if the proto argument is null");
            o13.o14(null, o8.call(o20), "[[Prototype]] slot of o was changed to null");

            o13.o14(undefined, o6.call(o20, o19), "set Object#__proto__ returns undefined if the proto argument is object");
            o13.o14(o19, o8.call(o20), "[[Prototype]] slot of o was changed to p");
        }
    },
    {
        name: "Error conditions for Object.setPrototypeOf/getPrototypeOf",
        o12: function () {
            o13.o15(function() { Object.setPrototypeOf(); }, o17, "Object.setPrototypeOf throws when called with no arguments", "Object.setPrototypeOf: argument is not an Object");
            o13.o15(function() { Object.setPrototypeOf(undefined); }, o17, "Object.setPrototypeOf throws when object argument is undefined", "Object.setPrototypeOf: argument is not an Object");
            o13.o15(function() { Object.setPrototypeOf(null); }, o17, "Object.setPrototypeOf throws when object argument is null", "Object.setPrototypeOf: argument is not an Object");

            o13.o15(function() { Object.setPrototypeOf({}); }, o17, "Object.setPrototypeOf throws when proto is not passed", "Object.setPrototypeOf: argument is not an Object and is not null");
            o13.o15(function() { Object.setPrototypeOf({}, undefined); }, o17, "Object.setPrototypeOf throws when proto is undefined", "Object.setPrototypeOf: argument is not an Object and is not null");
            o13.o15(function() { Object.setPrototypeOf({}, 5); }, o17, "Object.setPrototypeOf throws when proto is not object", "Object.setPrototypeOf: argument is not an Object and is not null");

            o13.o15(function() { Object.getPrototypeOf(); }, o17, "Object.getPrototypeOf throws when argument is not passed", "Object.getPrototypeOf: argument is not an Object");
            o13.o15(function() { Object.getPrototypeOf(undefined); }, o17, "Object.getPrototypeOf throws when argument is undefined", "Object.getPrototypeOf: argument is not an Object");
            o13.o15(function() { Object.getPrototypeOf(null); }, o17, "Object.getPrototypeOf throws when argument is null", "Object.getPrototypeOf: argument is not an Object");
        }
    },
    {
        name: "Object.setPrototypeOf used on non-object argument doesn't change [[Prototype]]",
        o12: function () {
            var o22 = 5;
            o13.o14(5, Object.setPrototypeOf(o22, {}), "Object.setPrototypeOf returns first argument if argument is non-object when proto argument is supplied");
            o13.o14(Number.prototype, Object.getPrototypeOf(o22), "[[Prototype]] slot of n was not changed");
        }
    },
    {
        name: "Simple validation of Object.setPrototypeOf",
        o12: function () {
            var o19 = {};
            var o20 = Object.create(o19);

            o13.o14(o20, Object.setPrototypeOf(o20, null), "Object.setPrototypeOf returns o if the proto argument is null");
            o13.o14(null, Object.getPrototypeOf(o20), "[[Prototype]] slot of o was changed to null");

            o13.o14(o20, Object.setPrototypeOf(o20, o19), "Object.setPrototypeOf returns o if the proto argument is object");
            o13.o14(o19, Object.getPrototypeOf(o20), "[[Prototype]] slot of o was changed to p");
        }
    },
];

o26.o27(o10, { o28: o0.o29[0] != "summary" });
