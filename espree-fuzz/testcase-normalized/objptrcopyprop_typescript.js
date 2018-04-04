//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1, o2)
{
    if (o1.o3 == 10)
    {
        o1 = o2;

        if (o1.o3 == 20)
        {
            return;
        }
    }

    return o1.o3;
}


function test()
{
    var o5 = new Object();
    var o7 = new Object();

    o5.o3 = 10;
    o7.o3 = 30;

    for (var o8 = 0; o8 < 1000; o8++)
    {
        var o9 = o0(o5,o7);
        if (o9 != 30)
        {
            o10.o11("FAILED\n");
            return;
        }
    }

    o10.o11("Passed");
}

test();
