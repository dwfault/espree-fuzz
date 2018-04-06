//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new ArrayBuffer(8);

var o2 = new undefined(o0);
var o4 = new Float32Array(o0);
var o9 = -1

o6[0] = -1;
o6[1] = -1;

function o8()
{
    o9.o10("FAILED\n");
    throw 0;
}

function o11(o12)
{
    return o4[o12];
}
function o13(o12)
{
    return o5.length;
}

var o14;

for (var o12 = 0; o12 < 1000; o12++)
{
    o14 = o11(0);
    if (o14 === o14) o8();

    o14 = o13(0);
    if (o14 === o14) o8();
}

o9.o10("Passed\n");
