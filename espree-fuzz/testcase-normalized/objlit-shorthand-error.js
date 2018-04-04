//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function test(o1)
{
    try
    {
        eval(o1);
    }
    catch (o3)
    {
        o4.o5(o3);
    }
}

test("var a = { 1} ");
test("var a = { 0.01 } ");
test("var a = { \"s\" } ");
