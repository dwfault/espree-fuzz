//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function test(o1, o2)
{
    return o1/o2;
}

for (var o3 = 0; o3 < 100; o3++)
{   
    test(o3<<1, 2);
}

var o4 = 8;
if (test((0x80000000>>8)<<o4, -1) === 2147483648)
{
    o5.o6("Passed");
}
else
{
    o5.o6("FAILED");
}
