//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

if (this.o0) { o0.o1("TrimStackTracePath.js"); }

function o2(o3)
{
    if (o0 != undefined)
    {
        o0.o5(o3);
    }
    else
    {
        o6(o3);
    }
}

function o7(o8)
{
    var o3 = "Properties of e:\n";
    var o9;
    for (o9 in o8)
    {
        o3 += "    " + o9 + "\n";
    }
    o3 += "\ne.number: " + o8.o10
          + "\ne.stack: " + o11(o8.o12);
    o2(o3);
}

function o13(o8)
{
    o2("\n\nDeleting e.stack ...\n");
    try
    {
        delete o8.o12
    }
    catch (o14)
    {
        o2("Exception when deleting stack property: " + o14);
    }
    o2("e.stack after delete:\n" + o11(o8.o12));
}

function o15(o8)
{
    o2("\n\nUpdating e.stack ...\n");
    try
    {
        o8.o12 = "foo";
    }
    catch (o14)
    {
        o2("Exception when updating stack property: " + o14);
    }
    o2("e.stack after update:\n" + o11(o8.o12));
}

function o16()
{
    try
    {
        o17.o18 = 0;
    }
    catch(o8)
    {
        o7(o8);
        o13(o8);
    }
    try
    {
        o17.o18 = 0;
    }
    catch(o8)
    {
        o7(o8);
        o15(o8);
    }
}

function o19()
{
    o16();
}

function o20()
{
    o19();
}

o20();


function o21() {
    try {
        o2("");
        o2("Object.preventExtensions test:");
        var o22 = Error();
        o2(o22.hasOwnProperty("stack"));
        Object.preventExtensions(o22);
        o2(o22.hasOwnProperty("stack"));
        throw o22;
    } catch (o8) {
        o2(o22.hasOwnProperty("stack"));
        o2(o8.hasOwnProperty("stack"));
    }
}

o21();

