//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0;
var o1;
var o2;
var o3;

o0 =
[
    {},
    function ()
    {
        o2 = true;
        return {};
    },
    function ()
    {
        o2 = true;
        return undefined;
    },
    function ()
    {
        o2 = true;
        return "hi";
    }
];

o1 =
[
    {},
    function ()
    {
        o3 = true;
        return {};
    },
    function ()
    {
        o3 = true;
        return undefined;
    },
    function ()
    {
        o3 = true;
        return "hi";
    },
    function ()
    {
        o3 = true;
        return "1/1/1970 1:00 am";
    },
    function ()
    {
        o3 = true;
        return "84";
    },
    function ()
    {
        o3 = true;
        return 37;
    }
];

for (var o5 in o0)
{
    for (var o6 in o1)
    {
        o2 = false;
        o3 = false;

        var o7 = { toString: o0[o5], valueOf: o1[o6] };

        o10.o11("=== Implicit toString ===");
        try
        {
            o10.o11("" + o7);
        }
        catch (o12)
        {
            o10.o11("Got error:");
            o10.o11("    name:     " + o12.name);
            o10.o11("    message:  " + o12.o14);
        }
        o10.o11("toString called:  " + (o2 ? "yes" : "no"));
        o10.o11("valueOf called:   " + (o3 ? "yes" : "no"));

        o10.o11("=== Implicit valueOf ===");
        try
        {
            o10.o11(1 * o7);
        }
        catch (o12)
        {
            o10.o11("Got error:");
            o10.o11("    name:     " + o12.name);
            o10.o11("    message:  " + o12.o14);
        }
        o10.o11("toString called:  " + (o2 ? "yes" : "no"));
        o10.o11("valueOf called:   " + (o3 ? "yes" : "no"));
    }
}
