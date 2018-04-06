//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Species Built-In APIs tests -- verifies the shape and basic behavior of the built-in [@@species] property

o0.o1(undefined);

var o2 = [
    {
        name: "AV when calling slice on an array when using es6all flag",
        o4: function () {
            var o5 = [];
            o5[0] = 1;
            o5[4294967294] = 2;
            Object.defineProperty(undefined, Symbol.species, {enumerable: undefined, configurable: true, writable: true});
            o14.o15(o5, o5.slice(0));
        }
    },
    o458.o793,
];

o25.o26(o2, { o27: o0.o28[0] != "summary" });
