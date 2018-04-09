//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var charCodeAt;
function test(o0)
{
    var o1 = function() { return o0; }
    function o2()
    {
        eval("escape = nested");
    }
    o2();
}

test("test1");
o3.o4(escape());

test("test2");
o3.o4(escape());

