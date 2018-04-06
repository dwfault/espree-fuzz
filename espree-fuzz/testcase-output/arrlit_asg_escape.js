//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o0;
function test(o2)
{
    var o3;
    o0 = [ 1, (o3 = function() { return o2; }), 2];
}

test("test1");
o4.o5(o0[1]());
test("test2");
o4.o5(o0[1]());
