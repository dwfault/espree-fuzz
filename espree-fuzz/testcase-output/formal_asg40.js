//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------



function test(o0)
{
    var o1 = o0;
    o0 = function() { return o1; }

    return o103[0];
}


o2.o3(test("test1")());
o2.o3(test("test2")());

