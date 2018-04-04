//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("Scenario: Multiple closures with multiple variables");

function o2()
{
    var o3 = 12;
    var o4 = "test";
    var o5 = 1.1;

    var o6 = function()
    {
        o0.o1("1st function");
        o0.o1(o3);
        o0.o1(o4);
        o0.o1(o5);
    }

    var o7 = function()
    {
        o0.o1("2nd function");
        o0.o1(o3);
        o0.o1(o4);
        o0.o1(o5);
    }

    return [o6,o7];
}

function o8(o9)
{
    o9[1]();
    o9[0]();
}

var o10 = o2();
o8(o10);
