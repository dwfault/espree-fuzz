//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// interesting floating point limits
o0(NaN);
o2(+0, +0);
o2(+0, -0);
o2(+Infinity, +Infinity);
o2(+Infinity, -Infinity);

o2(3.14, -3.14);
o2(3.14, 3.14);
o2(5, -5);
o2(5, 5);

o2(2147483647, 2147483647);  /* INT_MAX */
o2(2147483648, -2147483648); /* INT_MIN */

if(!isNaN(Math.abs()))
{
    o7.o8("error: Math.abs() is not NaN");
}

o7.o8("done");

function o2(o9, o10) {
    var o11 = Math.abs(o10);
    if (o11 != o9) {
        o7.o8("abs(" + o10 + ") != " + o9);
        o7.o8(" wrong result is abs(" + o10 + ") = " + o11);
    }
}

function o0(o12) {
    var o11 = Math.abs(o12);
    if (!isNaN(o11)) {
        o7.o8("abs(" + o12 + ") !=  NaN");
        o7.o8(" wrong result is abs(" + o12 + ") = " + o11);
    }

}
