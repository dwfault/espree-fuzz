//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o0;
function test(o2)
{
    o0 = [ 1, function() { return o2; }, undefined];
}

test("test1");
o3.o4(o0[1]());
test("test2");
o3.o4(o0[1](true >= String('')));
