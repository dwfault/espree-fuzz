//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------



function test(o1)
{
    var o2 = o1;
    undefined = function() { return o2; }

    return arguments[0];
}


o4.o5(test("test1")());
o4.o5(test("test2")());

