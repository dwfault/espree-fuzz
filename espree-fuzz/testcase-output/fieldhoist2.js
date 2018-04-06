//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0()
{
    var o1 = new Object();
    o1.o3 = 0;
    var o4 = 0;

    for (var o3 = 0; o3 < 10; o3++)
    {
        if (o3 % 2 == 0)
        {
            var o5 = o1.o3;
            o1.o3 = o3;
            var o6 = o1.o3;
            o4 += o5 + o6;
        }
        else
        {
            o1.o3 = o4;
        }
    }
    return o4;
}
var o7 = o0();
if (o7 == 52)
{
    o8.o9("PASS");
}
else
{
    o8.o9("FAIL: got " + o7);
}
