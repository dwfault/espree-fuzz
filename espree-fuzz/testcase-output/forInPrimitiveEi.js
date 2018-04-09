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
        o4(o2(new Date(99999, 1, 2, 1, 2, 3).toUTCString()));
    } catch (o5) {
        o0(o5);
    }
}

Object.prototype.o6 = "value on Object.prototype";
Object.defineProperty(
    Object.prototype, "object_getter", {
        get: function () { return "getter on Object.prototype: " + typeof(this) + " " + this; },
        enumerable: true,
        configurable: true
    });

Number.prototype.o7 = "Value on Number.prototype";
Boolean.prototype.o8 = "Value on Boolean.prototype";
String.prototype.o9 = "Value on String.prototype";

// Test on special values and primitives
var o12 = 0;

o10.forEach(function (o11) {
    o0("---- Test:", o11, "----");

    o3(function () {
        o0(o11.o6); // Get from prototype
    });
    o3(function () {
        o0(o11.o12); // Getter on prototype
    });

    o0();
    for (var o13 in o11) { // Enumerate properties should walk prototype
        o0(" ", o13);
    }

    o0();
});
