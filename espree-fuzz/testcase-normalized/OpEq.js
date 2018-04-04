//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = 0;
var o1 = new Array();
var o3 = new Object();
var o5 = 0;
o3.o6 = 0;

o1[o5] = o5;

function o7()
{
    o0++;
    return o1;
}
function o8()
{
    o0++;
    return o3;
}

o7()[o5++]++;

o8().o6 += o0;

if (o1[0] != 1 || o1.length != 1 || o0 != 2 || o5 != 1 || o3.o6 != 2)
{
    o10.o11("FAILED");
}
else
{
    o10.o11("Passed");
}
