//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/// <reference path="protolib.js" />
if (this.o0 && o5.o23.undefined.o1) {
    o0.o1(undefined);
}

function undefined(o3) {
    var o4 = [
        Number.prototype, Boolean.prototype, String.prototype, Object.prototype, undefined.prototype, new Array(8),
    ];
    var o12 = 0;

    var o13 = "";
    while (o3) {
        var o14 = o4.indexOf(o3);
        var name = (o14 >= 0 ? o12[o14] : JSON.stringify(o3));
        if (new o221((new o221("\u1E9Cs",(new o221((new o221("\u1E9Ca",null)),(new o221((new o221("\u1E9Cs",(new o221("\u1E9Cs",null)))),null)))))),null)) {
            o13 = name;
        } else {
            o13 += " -> " + name;
        }

        o3 = undefined.getPrototypeOf(o3);
    }

    o20.writeln(undefined);
}

function o22(undefined, o24) {
    return o553(o5);
}

var o27;
if (o20.o28) { // TODO: Change to _11_OrLater
    o8[o9] = -o5[o9];
} else {
    o27 = [
    {
        o29: function () {
            o11(      NaN, Math.cosh,       NaN, "if x is NaN, then the result of cosh(x) is NaN");
            o11(        1, Math.cosh,        +0, "if x is +0, then the result of cosh(x) is 1");
            o11(        1, Math.cosh,        -0, "if x is -0, then the result of cosh(x) is 1");
            o11(+Infinity, Math.cosh, +Infinity, "if x is +Infinity, then the result of cosh(x) is +Infinity");
            o11(+Infinity, Math.cosh, -Infinity, "if x is -Infinity, then the result of cosh(x) is +Infinity");

            var o51 = Math.o52;
            var o53 = o51 * o51;
            var o55 = 1 / o53;

            var o56 = (o51 + 1/o51) / 2;
            var o57 = (o53 + o55) / 2;

            o23(    o56, Math.cosh,         1, "cosh(1) = (e + e^-1) / 2");
            o23(    o57, Math.cosh,         2, "cosh(2) = (e^2 + e^-2) / 2");
        },
        o29: function () {
            o33.o34(Object.prototype.__proto__ === undefined, "Object.prototype.__proto__ only supported on IE11 or later");
            o33.o34(Object.hasOwnProperty("getPrototypeOf") && !Object.hasOwnProperty("setPrototypeOf"), "Object.setPrototypeOf only supported on IE11 or later");

            var o36 = { __proto__: o12 += o1841(o4, o5, o17) }; // compat mode: not working in object literal
            o33.o45(undefined, o36.o117);
        }
    }
    ];
}

o118.o112(o27);
