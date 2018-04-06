//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var escape;
function test(o2)
{
    var o3 = function() { return o2; }
    eval("escape = nested");
}

test("test1");
o5.o6(escape());

test("test2");
o5.o6(escape());

