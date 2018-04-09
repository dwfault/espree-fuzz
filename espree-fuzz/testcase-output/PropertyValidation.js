//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

if (this.o0) { o0.o1("TrimStackTracePath.js"); }

function o2(o3)
{
    if (o0 != undefined)
    {
        o0.o4(o3);
    }
    else
    {
        o5(o3);
    }
}

function o6(o7)
{
    var o3 = "Properties of e:\n";
    var o8;
    for (o8 in o7)
    {
        o3 += "    " + o8 + "\n";
    }
    o3 += "\ne.number: " + o7.o9
          + "\ne.stack: " + o10(o7.o11);
    o2(o3);
}

function o12(o7)
{
    o2("\n\nDeleting e.stack ...\n");
    try
    {
        delete o7.o11
    }
    catch (o13)
    {
        o2("Exception when deleting stack property: " + o13);
    }
    o2("e.stack after delete:\n" + o10(o7.o11));
}

function o14(o7)
{
    o2("\n\nUpdating e.stack ...\n");
    try
    {
        o7.o11 = "foo";
    }
    catch (o13)
    {
        o2("Exception when updating stack property: " + o13);
    }
    o2("e.stack after update:\n" + o10(o7.o11));
}

function o15()
{
    try
    {
        o16.o17 = 0;
    }
    catch(o7)
    {
        o6(o7);
        o12(o7);
    }
    try
    {
        o16.o17 = 0;
    }
    catch(o7)
    {
        o6(o7);
        o14(o7);
    }
}

function o18()
{
    o15();
}

function o19()
{
    o18();
}

o19();


function o20() {
    try {
        o2("");
        o2("Object.preventExtensions test:");
        var o21 = Error();
        o2(o21.hasOwnProperty("stack"));
        Object.preventExtensions(o21);
        o2(o21.hasOwnProperty("stack"));
        throw o21;
    } catch (o7) {
        o2(o21.hasOwnProperty("stack"));
        o2(o7.hasOwnProperty("stack"));
    }
}

o20();

