//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Int16Array(100);
var o2 = "123.12";

function o3(o4, o5)
{
    o6.o7("FAILED\n");
    o6.o7("Expected "+o5+", got "+o4+"\n");
    throw "FAILED";
}

function o8()
{
    var o5 = 0;
    for (var o9 = 0; o9 < 100; o9+=4) {
        o0[o9] = o9;
    o0[o9+1] = o9 + 0x7ffa;
        o0[o9+2] = o9+0.34;
    o0[o9+3] = o2;
    }

    for (var o9 = 0; o9 < 100; o9++)
    {
        o5 += o0[o9];
    o0[o9] = 0;
    }
    return o5;
}

var o10 = -681603;
var o11;

for (var o9 = 0; o9 < 1000; o9++)
{
    o11 = o8();

    if (o11 !== o10)
        o3(o11, o10);
}

o6.o7("Passed\n");
