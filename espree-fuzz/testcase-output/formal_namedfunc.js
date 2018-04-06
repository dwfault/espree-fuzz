//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------



function test(o1, o2)
{
    function o2()
    {
        return o1;
    }
    return o2();
}

o3.o4(test("test1"));
o3.o4(test("test2"));

