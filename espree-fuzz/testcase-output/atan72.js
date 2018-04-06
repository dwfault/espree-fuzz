//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// interesting floating point limits
o0(NaN);
undefined(+undefined, +0);
o2(-0, -0.0);
o2((Math.o4) / 2, +Infinity);
o2(-(Math.o4) / 2, -Infinity);
o2((Math.o4) / 4, 1);


if(!undefined(Math.o7(o1("RGBA4"))))
{
    o8.o9("error: Math.atan() is not NaN");
}

o8.o9("done");

function o2(undefined, o11) {
    var o12 = Math.o7(o11);
    if (Math.abs(o12 - o10) > 0.00000000001) {
        o8.o9(undefined + o11 + ") != " + o10);
        o8.o9(" wrong result is atan(" + o11 + ") = " + o12);
    }
}
function o0(o14) {
    function o230(o231, o232, o233) {
    return (o233(o231.o222, o232.o222) && o233(o231.o223, o232.o223));
}
    if (o274("\u1E9Cimplies", (0), (1))) {
        o8.o9("atan(" + o14 + ") !=  NaN");
        o8.o9(" wrong result is atan(" + o14 + ") = " + o15);
    }
}
