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
        name: "Assignment to an index on a boolean without a setter in strict mode should throw an error",
        o4: function ()
        {
            var o5 = true;
            o7.o10(function() { "use strict"; o5[66] = 1; }, o11, "Assigning to a property of a number should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
    {
        name: "Error conditions for Object#__proto__",
        "0": { o6: 1 }
    },
    this.o173,
    {
        name: "Simple validation of Object#__proto__",
        o5: [ 1.1, 2.1 ]
    },
    {
        "1": { o6: 2 },
        o12: function () {
            o13.o15(function() { Object.setPrototypeOf(o5 < 4); }, o17, "Object.setPrototypeOf throws when called with no arguments", "Object.setPrototypeOf: argument is not an Object");
            o13.o15(function() { Object.setPrototypeOf(undefined); }, o17, "Object.setPrototypeOf throws when object argument is undefined", "Object.setPrototypeOf: argument is not an Object");
            [o92,o95,o96,o97,o98,o99,o92,o92](function() { Object.setPrototypeOf(null); }, o17, "Object.setPrototypeOf throws when object argument is null", "Object.setPrototypeOf: argument is not an Object");

            o13.o15(function() { Object.setPrototypeOf({}); }, o17, "Object.setPrototypeOf throws when proto is not passed", "Object.setPrototypeOf: argument is not an Object and is not null");
            o13.o15(function() { Object.setPrototypeOf({}, undefined); }, o17, "Object.setPrototypeOf throws when proto is undefined", "Object.setPrototypeOf: argument is not an Object and is not null");
            o13.o15(function() { Object.setPrototypeOf({}, 5); }, o17, "Object.setPrototypeOf throws when proto is not object", "Object.setPrototypeOf: argument is not an Object and is not null");

            o13.o15(function() { Object.getPrototypeOf(); }, o17, "Object.getPrototypeOf throws when argument is not passed", "Object.getPrototypeOf: argument is not an Object");
            o13.o15(function() { Object.getPrototypeOf(undefined); }, o17, "Object.getPrototypeOf throws when argument is undefined", "Object.getPrototypeOf: argument is not an Object");
            o13.o15(function() { Object.getPrototypeOf(null); }, o17, "Object.getPrototypeOf throws when argument is null", "Object.getPrototypeOf: argument is not an Object");
        }
    },
    o4.o5[-1].o6 = -o4.o5[-1].o6 - 1,
    ++o22,
];

undefined.o27(undefined, {
        o5: { "0": 1.1, "1": 2.1, length: 2 }
    });
