//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0;
function test(o2)
{
    function o3()
    {
        escape();
        return o2;
    }
    function escape()
    {
        if (!o0)
            o0 = arguments.callee.caller;
    }

    o3();
}


test("test1");
o8.o9(o0());
o0 = undefined;


