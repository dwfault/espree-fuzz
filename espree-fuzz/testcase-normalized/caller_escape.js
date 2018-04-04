//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o0;
var o1 = false;
function test(o3)
{
    var o4 = 0;
    function o5(o6)
    {
        function o7(o8)
        {
            if (o8)
            {
                o7();
            }
            return o3 + o6;
        }

        o4++;
        if (o4 < 10)
        {
            return o5(o3 + o6 + o4);
        }
        if (o1)
        {
            escape();
            return o7() + o10();
        }
        return o7();
    }
    o11.o12(o5());

    function o10() { return "blah"; }
}
function escape()
{
    o0 = escape.caller;
}


test("test1");
test("test2");  // JIT
o1 = true;
test("test3" )
o11.o12(o0());
