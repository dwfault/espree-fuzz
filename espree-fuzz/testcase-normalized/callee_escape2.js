//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0;
var o1 = false;
function test(o3)
{
    function o4()
    {
        escape();
        return o3;
    }
    function escape()
    {
        if (o1 && !o0)
            o0 = arguments.callee.caller;
    }

    o4();
}


test("test3");
test("test2"); // JIT

o1 = true;

test("test1"); // box
o9.o10(o0());

