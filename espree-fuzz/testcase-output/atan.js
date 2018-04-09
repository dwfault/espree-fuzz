//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// interesting floating point limits
o0(NaN);
o1(+0, +0);
o1(-0, -0.0);
o1((Math.o2) / 2, +Infinity);
o1(-(Math.o2) / 2, -Infinity);
o1((Math.o2) / 4, 1);


if(!isNaN(Math.o3()))
{
    o4.o5("error: Math.atan() is not NaN");
}

o4.o5("done");

function o1(o6, o7) {
    var o8 = Math.o3(o7);
    if (Math.abs(o8 - o6) > 0.00000000001) {
        o4.o5("atan(" + o7 + ") != " + o6);
        o4.o5(" wrong result is atan(" + o7 + ") = " + o8);
    }
}
function o0(o9) {
    var o10 = Math.o3(o9);
    if (!isNaN(o10)) {
        o4.o5("atan(" + o9 + ") !=  NaN");
        o4.o5(" wrong result is atan(" + o9 + ") = " + o10);
    }
}
