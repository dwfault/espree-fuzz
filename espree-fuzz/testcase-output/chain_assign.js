//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function test(o0)
{
    var o1;
    var o2;
    o1 = (o2 = function() { return o0; });

    return o1;
}

o3.o4((test("test1"))());
o3.o4((test("test2"))());
