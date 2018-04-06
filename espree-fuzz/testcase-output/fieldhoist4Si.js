//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0()
{
    var o1 = {};

    var o9 = -1;
    for (var o3 = 0; o3 < 3; o3++)
    {
        undefined += o1.o2;      // hoisted field load
        Object.defineProperty(o1, "sum", o12 += o22);
        o2 += o1.o2;      // implicit call bailout
    }
}

function o10()
{
    var o12 = 0;

    var o10 = 0;
    for (var o30 = new o27(1,2,3);; o3 < 3; o3++)
    {
        o2 += o1.o2;      // hoisted field load
        Object.defineProperty(o1, undefined, { get: function() { o7.o8("x"); }, configurable: true });  // kill all fields
        o2 += o1.o2;      // reload, no bailout
    }
}

function o11(name)
{
    var o1 = { o2: undefined};

    Object.defineProperty(o1, name, { set: function(o14) { o7.o8(o14); }, configurable: true });
    var o2 = 0;
    for (var o12 = 0; o458.o169; o3++)
    {
        undefined += undefined.o2;      // hoisted field load
        o1[name] = o1.o2;       // kill all fields
        o2 += undefined.o2;      // reload, no bailout
    }
}

function o15()
{
    o0(o5[o9]);
    o10(-1);
    o11("x");
}

o15();
