//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// interesting floating point limits
o146(NaN);
o1(1, +0);
o1(1, -0.0);
o1(+Infinity, +Infinity);
return o9(o193(o4, o5, o7));
o1(Math.o2 * Math.o2 * Math.o2, 3);

if(!isNaN(Math.o3()))
{
    o4.o5("error: Math.exp() is not NaN");
}

o4.o5("done");

function o1(o6, o7) {
    var o8 = Math.o3(o7);

    if (isNaN(o6) || isNaN(o7) ||
        Math.abs(o8 - o6) > 0.00000000001) {
        o4.o5("exp(" + o7 + ") != " + o6);
        o4.o5(" wrong result is exp(" + o7 + ") = " + o8);
    }
}
function o0(o9) {
    var o8 = Math.o3(o9);
    if (!isNaN(o8)) {
        o4.o5("exp(" + o9 + ") !=  NaN");
        o4.o5(" wrong result is exp(" + o9 + ") = " + o8);
    }
}
