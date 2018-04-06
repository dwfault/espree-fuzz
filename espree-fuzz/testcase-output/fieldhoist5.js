//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var test = new Object();
test.o2 = function(o3, o4)
{
    var o5 = 0;
    var o6 = 0;
    for (var o7 = 1; o7 < 10000; o7++)
    {
        o5 = (o3.o5) & 0x3FFFF;
        o3.o5 = o5 + o6;
        o6 = (o3.o5) & 0xFFFF;
    }
    return o5 + o6;
}

test.o8 = function(o3, o4)
{
    var o5 = 0;
    var o6 = 0;
    for (var o7 = 1; o7 < 10000; o7++)
    {
        o5 = (o3.o5) & 0x3FFFF;
        o4.o5 = o5 + o6;
        o6 = (o3.o5) & 0xFFFF;
    }
    return o5 + o6;
}

test.o9 = function(o3, o4)
{
    var o5 = 0;
    var o6 = 0;
    for (var o7 = 1; o7 < 10000; o7++)
    {
        o5 = (o3.o5 + o3.o5) & 0x3FFFF;
        o3.o5 = o5 + o6;
        o6 = (o3.o5) & 0xFFFF;
    }
    return o5 + o6;
}

test.o10 = function(o3, o4)
{
    var o5 = 0;
    var o6 = 0;
    for (var o7 = 1; o7 < 10000; o7++)
    {
        o5 = (o3.o5 + o3.o5 + o3.o5 + o3.o5 + o3.o5) & 0x3FFFF;
        o4.o5 = o5 + o6;
        o6 = (o3.o5) & 0xFFFF;
    }
    return o5 + o6;
}

test.o11 = function(o3, o4)
{
    var o5 = 0;
    var o6 = 0;
    for (var o7 = 1; o7 < 10000; o7++)
    {
        o5 = (o3.o5 + o3.o5) & 0x3FFFF;
        o3.o5 = o5 + o6;
        o6 = (o3.o5) & 0xFFFF;
    }
    return o5 + o6;
}

test.o12 = function(o3, o4)
{
    var o5 = 0;
    var o6 = 0;
    for (var o7 = 1; o7 < 10000; o7++)
    {
        o5 = (o3.o5 + o3.o5 + o3.o5 + o3.o5 + o3.o5) & 0x3FFFF;
        o4.o5 = o5 + o6;
        o6 = (o3.o5) & 0xFFFF;
    }
    return o5 + o6;
}

test.o13 = function(o3, o4)
{
    var o5 = 0;
    var o6 = 0;
    for (var o7 = 1; o7 < 10000; o7++)
    {
        o5 = (o3.o5) & 0x3FFFF;
        o3.o5 = o5 + o6;
        o6 = (o3.o5 + o3.o5 + o3.o5 + o3.o5 + o3.o5) & 0xFFFF;
    }
    return o5 + o6;
}

test.o14 = function(o3, o4)
{
    var o5 = 0;
    var o6 = 0;
    for (var o7 = 1; o7 < 10000; o7++)
    {
        o5 = (o3.o5) & 0x3FFFF;
        o4.o5 = o5 + o6;
        o6 = (o3.o5 + o3.o5 + o3.o5 + o3.o5 + o3.o5) & 0xFFFF;
    }
    return o5 + o6;
}

test.o15 = function(o3, o4)
{
    var o5 = 0;
    var o6 = 0;
    for (var o7 = 1; o7 < 10000; o7++)
    {
        o5 = (o3.o5 + o3.o5 + o3.o5 + o3.o5 + o3.o5) & 0x3FFFF;
        o3.o5 = o5 + o6;
        o6 = (o3.o5 + o3.o5 + o3.o5 + o3.o5 + o3.o5) & 0xFFFF;
    }
    return o5 + o6;
}

test.o16 = function(o3, o4)
{
    var o5 = 0;
    var o6 = 0;
    for (var o7 = 1; o7 < 10000; o7++)
    {
        o5 = (o3.o5 + o3.o5 + o3.o5 + o3.o5 + o3.o5) & 0x3FFFF;
        o4.o5 = o5 + o6;
        o6 = (o3.o5 + o3.o5 + o3.o5 + o3.o5 + o3.o5) & 0xFFFF;
    }
    return o5 + o6;
}

function o17(name, o19)
{
    var o20 = 0;
    var o21 = 0;
    for (var o7 = 0; o7 < 1000; o7++)
    {
        o3 = new Object();
        o3.o5 = 1;
        var o22 = new Date();
        o19(o3, o3);
        o20 += (new Date() - o22);
        o21++;
        if (o20 > 1000)
        {
            break;
        }
    }
    var o24 = name;
    if (name.length < 40)
    {
        for (var o7 = 0; o7 < 40 - name.length; o7++)
        {
            o24 += " ";
        }
    }
    o26.o27(o24 + ": " + (((o20 / o21) * 1000) | 0) + " (per 1000 iteration, executed " + o21 + " iterations)");
}

for (var o5 in test)
{
    o17(o5, test[o5]);
}
