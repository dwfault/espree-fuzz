//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// interesting floating point limits
o0(NaN);
o2(+0, +0);
o2(-0, -0.0);
o2((Math.o4) / 2, +Infinity);
o2(-(Math.o4) / 2, -Infinity);
o2((Math.o4) / 4, 1);


if(!isNaN(Math.o7()))
{
    o8.o9("error: Math.atan() is not NaN");
}

o8.o9("done");

function o2(o10, o11) {
    var o12 = Math.o7(o11);
    if (Math.abs(o12 - o10) > 0.00000000001) {
        o8.o9("atan(" + o11 + ") != " + o10);
        o8.o9(" wrong result is atan(" + o11 + ") = " + o12);
    }
}
function o0(o14) {
    var o15 = Math.o7(o14);
    if (!isNaN(o15)) {
        o8.o9("atan(" + o14 + ") !=  NaN");
        o8.o9(" wrong result is atan(" + o14 + ") = " + o15);
    }
}
