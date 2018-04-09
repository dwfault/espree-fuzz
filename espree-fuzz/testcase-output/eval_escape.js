//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var escape;
function test(o0)
{
    var o1 = function() { return o0; }
    eval("escape = nested");
}

test("test1");
o2.o3(escape());

test("test2");
o2.o3(escape());

