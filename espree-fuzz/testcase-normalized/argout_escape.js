//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o0;
function escape(o2)
{
    o0 = o2;
}
function test(o4)
{

    escape(function() { return o4; });
}


test("test1");
o5.o6(o0());
test("test2");
o5.o6(o0());

