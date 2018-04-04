//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o0 = 0;
function test(o2)
{
    var o3;
    function o4(o5)
    {
        o3 = function() { return o2 + o5; }
    }

    o4(o0++);
    return o3();
}


o6.o7(test("test1"));
o6.o7(test("test2"));
