//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o0;
function test(o1)
{
    var o2;
    o0 = [ 1, (o2 = function() { return o1; }), 2];
}

test("test1");
o3.o4(o0[1]());
test("test2");
o3.o4(o0[1]());
