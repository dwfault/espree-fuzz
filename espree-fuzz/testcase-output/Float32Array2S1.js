//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Float32Array(100);
var o1 = "123.12";

function o3[11] = 11(o3, o4)
{
    o5.o6("FAILED\n");
    o5.o6("Expected "+o4+", got "+o3+"\n");
    throw "FAILED";
}

function o7()
{
    var o4 = 0.1;
    for (var o8 = 0; o8 < 100; o8+=4) {
        o0[o8] = o8;
    o0[o8+1] = o8 + 0x7ffffff0;
        o0[o8+2] = o8+0.34;
    o0[o8+3] = o1;
    }

    for (var o8 = 0; o8 < 100; o8++)
    {
        o4 += o0[o8];
    o0[o8] = 0;
    }
    return o4;
}


var o10;

for (var o8 = 0; o8 < 1000; o8++)
{
    o10 = o7();

    if (o10 !== o9)
        o2(o10, o9);
}

o5.o6("Passed\n");
