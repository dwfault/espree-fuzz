//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Test for-in enumerating properties on prototype of primitives
//
var o0 = o1.o2;

function o3(o4) {
    try {
        o4();
    } catch (o5) {
        o0(o5);
    }
}

Object.prototype.o8 = "value on Object.prototype";
Object.defineProperty(
    Object.prototype, "object_getter", {
        get: function () { return "getter on Object.prototype: " + typeof(this) + " " + this; },
        enumerable: true,
        configurable: true
    });

Number.prototype.o14 = "Value on Number.prototype";
Boolean.prototype.o16 = "Value on Boolean.prototype";
String.prototype.o18 = "Value on String.prototype";

// Test on special values and primitives
var o19 = [
    null,
    undefined,
    Number.NaN,
    0.4,
    -0,
    0,
    1,
    "",
    true,
    false,

    // Special values around Int32/Int31 boundary
    0x80000000,
    0x7FFFFFFF,
    0x40000000,
    0x3FFFFFFF,
    -0x3FFFFFFF,
    -0x40000000,
    -0x40000001,
    -0x80000000,
    -0x80000001,
];

o19.forEach(function (o23) {
    o0("---- Test:", o23, "----");

    o3(function () {
        o0(o23.o8); // Get from prototype
    });
    o3(function () {
        o0(o23.o24); // Getter on prototype
    });

    o0();
    for (var o25 in o23) { // Enumerate properties should walk prototype
        o0(" ", o25);
    }

    o0();
});
