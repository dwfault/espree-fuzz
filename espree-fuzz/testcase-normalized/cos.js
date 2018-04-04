//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// interesting floating point limits
o0(NaN);
o2(1, +0);
o2(1, -0.0);
o0(+Infinity);
o0(-Infinity);

o2(0, (Math.o5) /2);
o2(0.5 , (Math.o5) / 3);



if(!isNaN(Math.cos()))
{
    o8.o9("error: Math.cos() is not NaN");
}

o8.o9("done");

function o2(o10, o11) {
    var o12 = Math.cos(o11);
    if (Math.abs(o12 - o10) > 0.00000000001) {
        o8.o9("cos(" + o11 + ") != " + o10);
        o8.o9(" wrong result is cos(" + o11 + ") = " + o12);
    }
}
function o0(o14) {
    var o12 = Math.cos(o14);
    if (!isNaN(o12)) {
        o8.o9("cos(" + o14 + ") !=  NaN");
        o8.o9(" wrong result is cos(" + o14 + ") = " + o12);
    }
}
