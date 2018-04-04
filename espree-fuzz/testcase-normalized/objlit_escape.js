//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o0;
function test(o2)
{
    o0 = { o3: 1, o4: function() { return o2; } };
}

test("test1");
o5.o6(o0.o4());
test("test2");
o5.o6(o0.o4());
