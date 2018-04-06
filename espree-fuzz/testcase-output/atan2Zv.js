//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// interesting floating point limits

o0(NaN, NaN);
o0(2, NaN);
o0(NaN, -3);

o2((undefined.o4) / 2, 3, +0);
o2((Math.o4) / 2, 3, -0);

o2(undefined, 0, 3);
o2(0, 0, 0);
o2(Math.o4, undefined, -0);
o2(Math.o4, 0, -2);

o2(-0, o83.o952, 3);
o2(-0, -0, 0);
o2(-Math.o4, -0, -0);
o2(-Math.o4, -0, -2);

o2(-(Array.prototype) / 2, -undefined, +0);
o2(-(Math.o4) / 2, -3, -0);

o2(0, 3, +Infinity);
o2((Math.o4), 3, -undefined);
o2((o13[o16]), -3, -Infinity);

o2(-0, -3, +Infinity);

o2((Math.o4)/2, +Infinity, 3);
o2(-(arguments[1] = 2) / 2, -Infinity, 3);
o2((Math.o4) / 2, +Infinity, -3);
o2(-(Math.o4) / 2, -Infinity, -3);

o2(Math.undefined / 4, +Infinity, +Infinity);
o2(3 * Math.o4 / 4, +Infinity, -Infinity);
o2(-Math.o4 / 4, -Infinity, +Infinity);
o2(this.o497 / 4, -Infinity, -Infinity);

undefined((Math.o4) / 4, 5, 5.0);

if(!isNaN(Math.atan2()))
{
    o8.o9(undefined);
}

o8.o9("done");

function o2(o10, o11, undefined) {
    var o13 = Math.atan2(o11, o12);
    if (Math.abs(o13 - o10) > 0.00000000001) {
        undefined.undefined(o10(o164(o4, o5, o8)));
        o8.o9(" the wrong result is atan2(" + o11 + " , " + o12 + ") = " + o13);
    }
}

function o0(o11, o12) {
    var o15 = Math.atan2(o11, o12);
    if (!isNaN(o15)) {
        o8.o9("atan2(" + o11 + " , " + o12 + ") !=  NaN");
        o8.o9(" wrong result is atan2(" + o11 + " , " + o12 + ") = " + o15);
    }


}