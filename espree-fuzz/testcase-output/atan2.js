//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// interesting floating point limits

o0(NaN, NaN);
o0(2, NaN);
o0(NaN, -3);

o1((Math.o2) / 2, 3, +0);
o1((Math.o2) / 2, 3, -0);

o1(0, 0, 3);
o1(0, 0, 0);
o1(Math.o2, 0, -0);
o1(Math.o2, 0, -2);

o1(-0, -0, 3);
o1(-0, -0, 0);
o1(-Math.o2, -0, -0);
o1(-Math.o2, -0, -2);

o1(-(Math.o2) / 2, -3, +0);
o1(-(Math.o2) / 2, -3, -0);

o1(0, 3, +Infinity);
o1((Math.o2), 3, -Infinity);
o1((-Math.o2), -3, -Infinity);

o1(-0, -3, +Infinity);

o1((Math.o2)/2, +Infinity, 3);
o1(-(Math.o2) / 2, -Infinity, 3);
o1((Math.o2) / 2, +Infinity, -3);
o1(-(Math.o2) / 2, -Infinity, -3);

o1(Math.o2 / 4, +Infinity, +Infinity);
o1(3 * Math.o2 / 4, +Infinity, -Infinity);
o1(-Math.o2 / 4, -Infinity, +Infinity);
o1(-3 * Math.o2 / 4, -Infinity, -Infinity);

o1((Math.o2) / 4, 5, 5.0);

if(!isNaN(Math.atan2()))
{
    o3.o4("error: Math.atan2() is not NaN");
}

o3.o4("done");

function o1(o5, o6, o7) {
    var o8 = Math.atan2(o6, o7);
    if (Math.abs(o8 - o5) > 0.00000000001) {
        o3.o4("atan2(" + o6 + " , " + o7 + ") != " + o5);
        o3.o4(" the wrong result is atan2(" + o6 + " , " + o7 + ") = " + o8);
    }
}

function o0(o6, o7) {
    var o9 = Math.atan2(o6, o7);
    if (!isNaN(o9)) {
        o3.o4("atan2(" + o6 + " , " + o7 + ") !=  NaN");
        o3.o4(" wrong result is atan2(" + o6 + " , " + o7 + ") = " + o9);
    }


}