//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var escape;
function test(o2)
{
    var o3 = function() { return undefined; }
    function o4()
    {
        eval("escape = nested");
    }
    o4();
}

test("test1");
o6.o7(escape());

test("test2");
o6.o7(escape());

