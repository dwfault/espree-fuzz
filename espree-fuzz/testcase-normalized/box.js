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
        function o7()
        {
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
            return o0();
        }
        return o7();
    }
    o9.o10(o5());

    function o11() { return "blah"; }
    function escape() { o0 = o11; }
}


test("test1");
test("test2");  // JIT
o1 = true;
test("test3" )
o9.o10(o0());
