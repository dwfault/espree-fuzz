//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Date();
var o2 = o0;

var o3 = new Date(2012, 1);

o2.o4 = 3;

var o5 = Date.o6();

o7.o8(o9, 50);

/////////////////

function o9()
{
    o10(`x === y: ${o0 === o2}`, true); //true
    o10(`w !== z: ${o5 !== o3.valueOf()}`, true); //true

    o10(`y.foo: ${o2.o4}`, true); //3
    o10(`x.foo: ${o0.o4}`, true); //3

    o10(`w - z > 0: ${o5 - o3.valueOf() > 0}`, true); //true
    o10(`x - y: ${o0.valueOf() - o2.valueOf()}`, true); //0
}