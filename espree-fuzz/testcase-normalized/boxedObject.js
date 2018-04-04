//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Boolean(true);
var o2 = o0;
o2.o3 = 3;

var o4 = new Boolean(true);

var o5 = new Number(5);
var o7 = o5;
o7.o8 = 3;

var o9 = new Number(5);

var o10 = new String("bob");
var o12 = o10;
o12.o13 = 3;

var o14 = new String("bob");

o15.o16(o17, 50);

/////////////////

function o17()
{
    o18(`typeof (xb): ${typeof (o0)}`, true); //object"
    o18(`xb === yb: ${o0 === o2}`, true); //true
    o18(`xb !== zb: ${o0 !== o4}`, true); //true
    o18(`xb == true: ${o0 == true}`, true); //true
    o18(`xb === true: ${o0 === true}`, true); //false
    o18(`xb.foob: ${o0.o3}`, true); //3

    o18(`typeof (xn): ${typeof (o5)}`, true); //object"
    o18(`xn === yn: ${o5 === o7}`, true); //true
    o18(`xn !== zn: ${o5 !== o9}`, true); //true
    o18(`xn == 5: ${o5 == 5}`, true); //true
    o18(`xn === 5: ${o5 === 5}`, true); //false
    o18(`xn.foon: ${o5.o8}`, true); //3

    o18(`typeof (xs): ${typeof (o10)}`, true); //object"
    o18(`xs === ys: ${o10 === o12}`, true); //true
    o18(`xs !== zs: ${o10 !== o14}`, true); //true
    o18(`xs == \'bob\': ${o10 == "bob"}`, true); //true
    o18(`xs === \'bob\': ${o10 === "bob"}`, true); //false
    o18(`xs.foos: ${o10.o13}`, true); //3
}