//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = { o1: 3, o2: null };
var o3 = o0;

o3.o4 = "new prop";

var o5 = new Object();
o5['foo'] = 3;
o5[1] = "bob";
o5['2'] = "bob2";

o7.o8(o9, 50);

/////////////////

function o9()
{
    o10(`typeof (x): ${typeof (o0)}`, true); //object
    o10(`typeof (z): ${typeof (o5)}`, true); //object;

    o10(`x === y: ${o0 === o3}`, true); //true
    o10(`x !== z: ${o0 !== o5}`, true); //true

    o10(`y.foo: ${o3.o1}`, true); //3
    o10(`z.foo: ${o5.o1}`, true); //3
    o10(`z[1]: ${o5[1]}`, true); //bob
    o10(`z[2]: ${o5[2]}`, true); //bob2

    o10(`x.foo: ${o0.o1}`, true); //3
    o10(`x.bar: ${o0.o2}`, true); //null
    o10(`x.baz: ${o0.o4}`, true); //new prop"

    o10(`x.notPresent: ${o0.o11}`, true); //undefined
    o10(`z[0]: ${o5[0]}`, true); //undefined
    o10(`z[5]: ${o5[5]}`, true); //undefined

    ////
    o5.o1 = 0;
    o3.o1 = 10;
    o3.o12 = "ten";
    o3[10] = "foo";
    o3.o2 = 3;
    ////

    o10(`post update -- z[0]: ${o5[0]}`, true); //undefined
    o10(`post update -- z.foo: ${o5.o1}`, true); //0
    o10(`post update -- x.foo: ${o0.o1}`, true); //10
    o10(`post update -- x.foo2: ${o0.o12}`, true); //ten
    o10(`post update -- x[0]: ${o0[0]}`, true); //undefined
    o10(`post update -- x[10]: ${o0[10]}`, true); //foo

    o10(`post update -- y.bar: ${o3.o2}`, true); //3
    o10(`post update -- x.bar: ${o0.o2}`, true); //3
}