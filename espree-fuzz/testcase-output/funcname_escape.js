//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function test()
{
    var o0 = 0;
    function o1()
    {
        if (o0 == 0)
        {
            o0++;
            return o1();
        }
        return o0;
    }
    return o1;
}

o2.o3((test())());
o2.o3((test())());

