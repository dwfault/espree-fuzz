//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1, o2)
{
    o3.o4(o2());
}
function test(o6)
{
    var o7 = function()
    {
        return o6;
    }
    o0(1, o7);
}

test("test1");
test("test2");

