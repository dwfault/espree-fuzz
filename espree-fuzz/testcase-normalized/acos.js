//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// interesting floating point limits
o0(NaN);
o0(5.1);
o0(-2);

o2(+0, 1);
o2((Math.o4) / 2, 0);
o2((Math.o4) / 3, 0.5);
o0(+Infinity);
o0(-Infinity);


if(!isNaN(Math.acos()))
{
    o8.o9("error: Math.acos() is not NaN");
}

o8.o9("done");

function o2(o10, o11) {
    var o12 = Math.acos(o11);
    if (Math.abs(o12 - o10) > 0.00000000001) {
        o8.o9("acos(" + o11 + ") != " + o10);
        o8.o9(" wrong result is acos(" + o11 + ") = " + o12);
    }
}
function o0(o14) {
    var o12 = Math.acos(o14);
    if (!isNaN(o12)) {
        o8.o9("acos(" + o14 + ") !=  NaN");
        o8.o9(" wrong result is acos(" + o14 + ") = " + o12);
    }

}
