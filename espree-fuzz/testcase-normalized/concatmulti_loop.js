//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function test()
{
    var o1 = "1";
    for (var o2 = 0; o2 < 2; o2++)
    {
        if (o2 == 0)
        {
            o1 = "1000000" + o1 + "1";
        }
        else 
        {
            o1 -= 1;
        }
    }
    o3.o4(o1);
}
    test();
    test();
