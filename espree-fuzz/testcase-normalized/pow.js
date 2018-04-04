//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// interesting floating point limits
o0(NaN, NaN);
o0(Infinity, NaN);
o0(-Infinity, NaN);
o0(0, NaN);
o0(-0, NaN);
o0(3, NaN);
o0(-3, NaN);

o3(1, NaN, 0);
o3(1, Infinity, 0);
o3(1, -Infinity, 0);
o3(1, 0, 0);
o3(1, -0, 0);
o3(1, 3, 0);
o3(1, -3, 0);

o3(1, NaN, -0);
o3(1, Infinity, -0);
o3(1, -Infinity, -0);
o3(1, 0, -0);
o3(1, -0, -0);
o3(1, 3, -0);
o3(1, -3, -0);

o0(NaN, 3);
o0(NaN, Infinity);
o0(NaN, -Infinity);

o3(Infinity, +1.1, Infinity);
o3(Infinity, -1.1, Infinity);

o3(0, +1.1, -Infinity);
o3(0, -1.1, -Infinity);

o0(+1, Infinity);
o0(-1, Infinity);

o0(+1, -Infinity);
o0(-1, -Infinity);

o3(0, +0.9, Infinity);
o3(0, -0.9, Infinity);

o3(Infinity, +0.9, -Infinity);
o3(Infinity, -0.9, -Infinity);

o3(Infinity, Infinity, 0.1);
o3(+0, Infinity, -0.1);

o3(-Infinity, -Infinity, 3);
o3(+Infinity, -Infinity, 4);

o3(-0, -Infinity, -3);
o3(+0, -Infinity, -4);

o3(0, 0, 0.1);

o3(+Infinity, +0, -3);
o3(+Infinity, +0, -0.1);
o3(+Infinity, -0, -1.1);

o3(-0.0, -0, +3);
o3(+0.0, -0, +4);
o3(-Infinity, -0, -3);
o3(+Infinity, -0, -4);

o0(-3, 3.3);

o3(25, 5, 2);

o3(25, -5, 2);
o3(1/25, -5, -2);

if(!isNaN(Math.o6()))
{
    o7.o8("error: Math.pow() is not NaN");
}
o7.o8("done");

function o3(o9, o10, o11) {
    var o12 = Math.o6(o10, o11);
    if ( Math.abs(o12 - o9) > 0.00000000001) {
        o7.o8("pow(" + o10 + " , " + o11 + ") != " + o9);
        o7.o8(" wrong result is pow(" + o10 + " , " + o11 + ") = " + o12);
    }
}

function o0(o10, o11) {
    var o12 = Math.o6(o10, o11);
    if (!isNaN(o12)) {
        o7.o8("pow(" + o10 + " , " + o11 + ") !=  NaN" );
        o7.o8(" wrong result is pow(" + o10 + " , " + o11 + ") = " + o12);
    }


}
