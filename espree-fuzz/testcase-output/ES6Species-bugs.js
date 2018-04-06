//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Species Built-In APIs tests -- verifies the shape and basic behavior of the built-in [@@species] property

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "AV when calling slice on an array when using es6all flag",
        o4: function () {
            var o5 = [];
            o5[0] = 1;
            o5[4294967294] = 2;
            Object.defineProperty(Array, Symbol.species, {enumerable: false, configurable: true, writable: true});
            o14.o15(o5, o5.slice(0));
        }
    },
    {
        name: "Flag 'isNotPathTypeHandlerOrHasUserDefinedCtor' should propagate in PathTypeHandler chain",
        o4: function () {
            var o17 = [1,2,3,4,5,6];
            o17.constructor = null;
            o17.o19 = 1;
            o14.o20(function() { Array.prototype.splice.call(o17, 0, 3); }, o24, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");
        }
    },
];

o25.o26(o2, { o27: o0.o28[0] != "summary" });
