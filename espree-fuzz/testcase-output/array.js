//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = [3, null, {}];
var o1 = o0;
o1.o2 = 5;

o3.o4(o5, 50);

/////////////////

function o5()
{
    o6(`Array.isArray(x): ${Array.isArray(o0)}`, true);  //true
    o6(`x.length: ${o0.length}`, true); //3

    o6(`x === y: ${o0 === o1}`, true); //true
    o6(`x.baz: ${o0.o2}`, true); //5
    o6(`x[0]: ${o0[0]}`, true); //3
    o6(`y[1]: ${o1[1]}`, true); //null
    o6(`x[5]: ${o0[5]}`, true); //undefined

    ////
    o0[1] = "non-null";
    o0[5] = { o7: 3 };
    o0.push(10);
    ////

    o6(`post update -- y[1]: ${o1[1]}`, true); //non-null
    o6(`post update -- x[5] !== null: ${o0[5] !== null}`, true); //true
    o6(`post update -- x[5].bar: ${o0[5].o7}`, true); //3
    o6(`post update -- y[6]: ${o1[6]}`, true); //10
}