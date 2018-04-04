//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = { o1: 3, o2: null };

Object.defineProperty(o0, "b", {
    get: function () { return this.o1 + 1; },
    set: function (o0) { this.o1 = o0 / 2; }
});

Object.defineProperty(o0, "onlyone", {
    get: function () { return this.o2; }
});

o7.o8(o9, 50);

/////////////////

function o9()
{
    o10(`typeof (x): ${typeof (o0)}`, true); //object

    o10(`x.foo: ${o0.o1}`, true); //3
    o10(`x.b: ${o0.o11}`, true); //4

    o10(`x.onlyone: ${o0.o12}`, true); //null

    ////
    o0.o11 = 12;
    ////

    o10(`x.foo: ${o0.o1}`, true); //6
    o10(`x.b: ${o0.o11}`, true); //7
}