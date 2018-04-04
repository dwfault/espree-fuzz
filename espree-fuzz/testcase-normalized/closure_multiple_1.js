//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("Scenario: Closure with multiple variables");

function o2(o3)
{
    var o4 = 12;
    var o5 = "test";
    var o6 = 1.1;

        var o7 = function()
        {
                o0.o1(o3);
                o0.o1(o4);
                o0.o1(o5);
                o0.o1(o6);
        }

    return o7;
}

function o8(o9)
{
    o9();
}

var o10 = o2("ArgIn");
o8(o10);
