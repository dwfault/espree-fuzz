//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function test()
{
    var o1 = 0;
    function o2()
    {
        if (o1 == 0)
        {
            o1++;
            return o2();
        }
        return o1;
    }
    return o2;
}

o3.o4((test())());
o3.o4((test())());

