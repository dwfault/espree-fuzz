//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// TrimStackTracePath is needed because same file is run in version 1/2 where LoadScriptFile is not defined
function o0(o1)
{
    return o1;
}
if (this.o2 && typeof this.o2.o3 === "function")
{
    this.o2.o3("TrimStackTracePath.js");
}

function o4(o5)
{
    var o6 = "";
    if (o5 === null) {
        o6 = "null";
    } else if (o5 === undefined) {
        o6 = "undefined";
    } else {
        o6 = o5.toString();
    } 
    
    while (o6.length < 12) {
        o6 += ' ';
    }
    return o6;
}

function o10(o11, o12)
{
    if (o11 === "stack")
    {
        o12 = o0(o12);
    }
    o2.o13(o4(o11) + " = " + o4(o12) + "(" + typeof(o12) + ")");
}

function o14(o15)
{
    // "message" and "name" are not enumerable in ES5
    o10("message", o15.o16);
    o10("name", o15.name);

    var o18 = new Array();
    for (var o5 in o15)
    {
        o18[o18.length] = o5;
    }
    o18[o18.length] = "description"; // Explicitly adding the known non-enumerable members
    o18[o18.length] = "number";
    o18[o18.length] = "stack";
    o18.sort();
    for (var o21 = 0; o21 < o18.length; o21++)
    {
        o5 = o18[o21];
        o10(o5, o15[o5]);
    }
}

function o22(o23, o6)
{
    o2.o13("-----------------------------------------");
    o2.o13(o23 + "(" + o6 + ")");
    var o15 = eval("new " + o23 + "(" + o6 + ")");
    o14(o15);
}

function o25(o23)
{
    // No param
    o22(o23, "");

    // 2 primitive type param
    o22(o23, "NaN, NaN");
    o22(o23, "1, 1");
    o22(o23, "1.1, 1.1");
    o22(o23, "undefined, undefined");
    o22(o23, "null, null");
    o22(o23, "true, true");
    o22(o23, "false, false");
    o22(o23, "'blah', 'blah'");

    // 2 object param
    o22(o23, "new Object(), new Object()");
    o22(o23, "new String('blah'), new String('blah')");
    o22(o23, "new Number(1.1), new Number(1.1)");
    o22(o23, "new Boolean(true), new Boolean(true)");
    o22(o23, "Test, Test");

    // 1 primitive param
    o22(o23, "NaN");
    o22(o23, "1");
    o22(o23, "undefined");
    o22(o23, "null");
    o22(o23, "true");
    o22(o23, "false");
    o22(o23, "'blah'");

    // 1 object param
    o22(o23, "new Object()");
    o22(o23, "new String('blah')");
    o22(o23, "new Number(1.1)");
    o22(o23, "new Boolean(1.1)");
    o22(o23, "Test");
}

o25("Error");
o25("TypeError");
