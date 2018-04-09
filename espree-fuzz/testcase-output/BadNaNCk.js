//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new ArrayBuffer(8);

var o1 = new Float64Array(o0);
var o2 = o5 = o7;
var o3 = new Int32Array(o0);

o3[0] = -1;
o3[1] = -1;

function o4()
{
    o5.o6("FAILED\n");
    throw 0;
}

function o7(o8)
{
    return o2[o8];
}


var o10;

for (var o8 = 0; o8 < 1000; o8++)
{
    o10 = o7(0);
    if (o10 === o10) o4();

    o10 = o9(0);
    if (o10 === o10) o4();
}

o5.o6("Passed\n");
