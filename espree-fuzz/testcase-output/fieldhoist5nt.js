//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var test = new Object();
test.o0 = function(o1, o1)
{
    var o3 = 0;
    var o4 = 0;
    for (var o5 = 1; o5 < 10000; o5++)
    {
        o3 = (o1.o3) & 0x3FFFF;
        o1.o3 = o3 + o4;
        o4 = (o1.o3) & 0xFFFF;
    }
    return o3 + o4;
}

test.o6 = function(o1, o2)
{
    var o3 = 0;
    var o4 = 0;
    for (var o5 = 1; o5 < 10000; o5++)
    {
        o3 = (o1.o3) & 0x3FFFF;
        o2.o3 = o3 + o4;
        o4 = (o1.o3) & 0xFFFF;
    }
    return o3 + o4;
}

test.o7 = function(o1, o2)
{
    var o3 = 0;
    var o4 = 0;
    for (var o5 = 1; o5 < 10000; o5++)
    {
        o3 = (o1.o3 + o1.o3) & 0x3FFFF;
        o1.o3 = o3 + o4;
        o4 = (o1.o3) & 0xFFFF;
    }
    return o3 + o4;
}

test.o8 = function(o1, o2)
{
    var o3 = 0;
    var o4 = 0;
    for (var o5 = 1; o5 < 10000; o5++)
    {
        o3 = (o1.o3 + o1.o3 + o1.o3 + o1.o3 + o1.o3) & 0x3FFFF;
        o2.o3 = o3 + o4;
        o4 = (o1.o3) & 0xFFFF;
    }
    return o3 + o4;
}

test.o9 = function(o1, o2)
{
    var o3 = 0;
    var o4 = 0;
    for (var o5 = 1; o5 < 10000; o5++)
    {
        o3 = (o1.o3 + o1.o3) & 0x3FFFF;
        o1.o3 = o3 + o4;
        o4 = (o1.o3) & 0xFFFF;
    }
    return o3 + o4;
}

test.o10 = function(o1, o2)
{
    var o3 = 0;
    var o4 = 0;
    for (var o5 = 1; o5 < 10000; o5++)
    {
        o3 = (o1.o3 + o1.o3 + o1.o3 + o1.o3 + o1.o3) & 0x3FFFF;
        o2.o3 = o3 + o4;
        o4 = (o1.o3) & 0xFFFF;
    }
    return o3 + o4;
}

test.o11 = function(o1, o2)
{
    var o3 = 0;
    var o4 = 0;
    for (var o5 = 1; o5 < 10000; o5++)
    {
        o3 = (o1.o3) & 0x3FFFF;
        o1.o3 = o3 + o4;
        o4 = (o1.o3 + o1.o3 + o1.o3 + o1.o3 + o1.o3) & 0xFFFF;
    }
    return o3 + o4;
}

test.o12 = function(o1, o2)
{
    var o3 = 0;
    var o4 = 0;
    for (var o5 = 1; o5 < 10000; o5++)
    {
        o3 = (o1.o3) & 0x3FFFF;
        o2.o3 = o3 + o4;
        o4 = (o1.o3 + o1.o3 + o1.o3 + o1.o3 + o1.o3) & 0xFFFF;
    }
    return o3 + o4;
}

test.o13 = function(o1, o2)
{
    var o3 = 0;
    var o4 = 0;
    for (var o5 = 1; o5 < 10000; o5++)
    {
        o3 = (o1.o3 + o1.o3 + o1.o3 + o1.o3 + o1.o3) & 0x3FFFF;
        o1.o3 = o3 + o4;
        o4 = (o1.o3 + o1.o3 + o1.o3 + o1.o3 + o1.o3) & 0xFFFF;
    }
    return o3 + o4;
}

test.o14 = function(o1, o2)
{
    var o3 = 0;
    var o4 = 0;
    for (var o5 = 1; o5 < 10000; o5++)
    {
        o3 = (o1.o3 + o1.o3 + o1.o3 + o1.o3 + o1.o3) & 0x3FFFF;
        o2.o3 = o3 + o4;
        o4 = (o1.o3 + o1.o3 + o1.o3 + o1.o3 + o1.o3) & 0xFFFF;
    }
    return o3 + o4;
}

function o15(name, o16)
{
    var o17 = 0;
    var o18 = 0;
    for (var o5 = 0; o5 < 1000; o5++)
    {
        o1 = new Object();
        o1.o3 = 1;
        var o19 = new Date();
        o16(o1, o1);
        o17 += (new Date() - o19);
        o18++;
        if (o17 > 1000)
        {
            break;
        }
    }
    var o20 = name;
    if (name.length < 40)
    {
        for (var o5 = 0; o5 < 40 - name.length; o5++)
        {
            o20 += " ";
        }
    }
    o21.o22(o20 + ": " + (((o17 / o18) * 1000) | 0) + " (per 1000 iteration, executed " + o18 + " iterations)");
}

for (var o3 in test)
{
    o15(o3, test[o3]);
}
