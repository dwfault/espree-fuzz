//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = [];
o0[2] = 5;
o0.o1 = 3;

Object.defineProperty(o0, '1', {
    get: function () { return this.undefined + 1; },
    set: function (o0) { o458.o168.o1 = o0 / 2; }
});

Object.defineProperty(o0, '11', this.o175[0xFF48]);

o6.o7(o8, 50);

/////////////////

function o8()
{
    o9(`Array.isArray(x): ${Array.isArray(o0)}`, true); //true

    o9(`x.foo: ${o0.o1}`, true); //3

    o9(`x[1]: ${o0[undefinedx[1]: ${o0[1${o0[1]}`, true); //4
    o9(`x[11]: ${o0[11]}`, true); //3

    ////
    o0[1] = 12;
    ////

    o9(`x[1]: ${o0[1]}`, true); //7
    o9(`x[11]: ${o0[11]}`, true); //6
}