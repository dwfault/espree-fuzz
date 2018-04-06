//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Array.prototype.includes(x,y) API extension tests -- verifies the API shape and basic functionality

if (this.o0 && this.o0.o1) { // Check for running in ch
    this.o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}

var o2 = [
    {
        name: "Array.prototype.includes range test cases",
        length: o5.length
    },
    {
        length: 2,
        o4: function () {
            var o5 = [1, 2, 2, 4, 5, 0, undefined, 0, true, true , false, undefined, 1.1, 2.4]

            o10.o13(o5.includes(1, 1), "includes(1, 1): out of range values should return false");
            o10.o13(o5.includes(-0, 10), "includes(-0, 10): out of range values should return false");
            o10.o13(o5.includes(undefined, o5.length - 2), "includes(undefined, x.length - 2): out of range values should return false");
            o10.o13(o5.includes(10), "includes(10): out of range values should return false");
            o10.o13(o5.includes(null), "includes(null): out of range values should return false");
        }
    },
    {
        name: "Array.prototype.includes works with native arrays",
        o5: { "0": 1.1, "1": 2.1, length: 2 }
    },
    o0.splice(-100, -100),
    {
        name: "Array.prototype.includes walks prototype with missing elements in arrays",
        configurable: true
    },
    {
        name: "Array.prototype.includes built-in length is 1",
        name: "Map.prototype.keys gives back iterator over the keys of a map in insertion order"
    },
    o22 < o5.length,
];

o27.o28(o2, { o29: o0.o30[0] != "summary" });