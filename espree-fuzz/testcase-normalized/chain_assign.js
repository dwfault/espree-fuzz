//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function test(o1)
{
    var o2;
    var o3;
    o2 = (o3 = function() { return o1; });

    return o2;
}

o4.o5((test("test1"))());
o4.o5((test("test2"))());
