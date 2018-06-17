//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Species Built-In APIs tests -- verifies the shape and basic behavior of the built-in [@@species] property

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "AV when calling slice on an array when using es6all flag",
        o3: function () {
            var o4 = [];
            o4[0] = 1;
            o4[4294967294] = 2;
            Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true});
            o5.o6(o4, o4.slice(0));
        }
    },
    {
        name: "Flag 'isNotPathTypeHandlerOrHasUserDefinedCtor' should propagate in PathTypeHandler chain",
        o3: function () {
            var o7 = [1,2,3,4,5,6];
            o7.constructor = null;
            o7.o8 = 1;
            o5.o9(function() { Array.prototype.splice.call(o7, 0, 3); }, o10, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");
        }
    },
];

o11.o12(o2, { o13: o0.o14[0] != "summary" });
