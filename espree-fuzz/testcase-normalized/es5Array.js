//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = [];
o0[2] = 5;
o0.o1 = 3;

Object.defineProperty(o0, '1', {
    get: function () { return this.o1 + 1; },
    set: function (o0) { this.o1 = o0 / 2; }
});

Object.defineProperty(o0, '11', {
    get: function () { return this.o1; }
});

o2.o3(o4, 50);

/////////////////

function o4()
{
    o5(`Array.isArray(x): ${Array.isArray(o0)}`, true); //true

    o5(`x.foo: ${o0.o1}`, true); //3

    o5(`x[1]: ${o0[1]}`, true); //4
    o5(`x[11]: ${o0[11]}`, true); //3

    ////
    o0[1] = 12;
    ////

    o5(`x[1]: ${o0[1]}`, true); //7
    o5(`x[11]: ${o0[11]}`, true); //6
}