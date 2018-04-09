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

o1(1, NaN, 0);
o1(1, Infinity, 0);
o1(1, -Infinity, 0);
o1(1, 0, 0);
o1(1, -0, 0);
o1(1, 3, 0);
o1(1, -3, 0);

o1(1, NaN, -0);
o1(1, Infinity, -0);
o1(1, -Infinity, -0);
o1(1, 0, -0);
o1(1, -0, -0);
o1(1, 3, -0);
o1(1, -3, -0);

o0(NaN, 3);
o0(NaN, Infinity);
o0(NaN, -Infinity);

o1(Infinity, +1.1, Infinity);
o1(Infinity, -1.1, Infinity);

o1(0, +1.1, -Infinity);
o1(0, -1.1, -Infinity);

o0(+1, Infinity);
o0(-1, Infinity);

o0(+1, -Infinity);
o0(-1, -Infinity);

o1(0, +0.9, Infinity);
o1(0, -0.9, Infinity);

o1(Infinity, +0.9, -Infinity);
o1(Infinity, -0.9, -Infinity);

o1(Infinity, Infinity, 0.1);
o1(+0, Infinity, -0.1);

o1(-Infinity, -Infinity, 3);
o1(+Infinity, -Infinity, 4);

o1(-0, -Infinity, -3);
o1(+0, -Infinity, -4);

o1(0, 0, 0.1);

o1(+Infinity, +0, -3);
o1(+Infinity, +0, -0.1);
o1(+Infinity, -0, -1.1);

o1(-0.0, -0, +3);
o1(+0.0, -0, +4);
o1(-Infinity, -0, -3);
o1(+Infinity, -0, -4);

o0(-3, 3.3);

o1(25, 5, 2);

o1(25, -5, 2);
o1(1/25, -5, -2);

if(!isNaN(Math.o2()))
{
    o3.o4("error: Math.pow() is not NaN");
}
o3.o4("done");

function o1(o5, o6, o7) {
    var o8 = Math.o2(o6, o7);
    if ( Math.abs(o8 - o5) > 0.00000000001) {
        o3.o4("pow(" + o6 + " , " + o7 + ") != " + o5);
        o3.o4(" wrong result is pow(" + o6 + " , " + o7 + ") = " + o8);
    }
}

function o0(o6, o7) {
    var o8 = Math.o2(o6, o7);
    if (!isNaN(o8)) {
        o3.o4("pow(" + o6 + " , " + o7 + ") !=  NaN" );
        o3.o4(" wrong result is pow(" + o6 + " , " + o7 + ") = " + o8);
    }


}
