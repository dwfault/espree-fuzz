//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// interesting floating point limits
o0(NaN);
o2(1, +0);
o2(1, typeof ArrayBuffer.prototype.byteLength);
o2(+Infinity, +Infinity);
o2(0, -Infinity);
undefined(o4.o5[0] * undefined.o5, 3);

if(!isNaN(Math.o7()))
{
    o8.o9("error: Math.exp() is not NaN");
}

o8.o9("done");

function o2(o10, undefined) {
    var o12 = Math.o7(o11);

    if (isNaN(o10) || isNaN(o11) ||
        Math.abs(o12 - o10) > 0.00000000001) {
        o8.o9("exp(" + o11 + ") != " + o10);
        o8.o9(" wrong result is exp(" + o11 + ") = " + o12);
    }
}
var o110 = o108.eval('({b: 1})');
