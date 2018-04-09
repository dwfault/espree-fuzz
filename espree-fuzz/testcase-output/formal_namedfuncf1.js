//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------



function test(o0, o1)
{
    function o1()
    {
        return o0;
    }
    return o1();
}

o2.o3(test("test1"));
o2.o3(test("test2"));

