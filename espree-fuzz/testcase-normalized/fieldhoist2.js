//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0()
{
    var o1 = new Object();
    o1.o2 = 0;
    var o3 = 0;

    for (var o2 = 0; o2 < 10; o2++)
    {
        if (o2 % 2 == 0)
        {
            var o4 = o1.o2;
            o1.o2 = o2;
            var o5 = o1.o2;
            o3 += o4 + o5;
        }
        else
        {
            o1.o2 = o3;
        }
    }
    return o3;
}
var o6 = o0();
if (o6 == 52)
{
    o7.o8("PASS");
}
else
{
    o7.o8("FAIL: got " + o6);
}
