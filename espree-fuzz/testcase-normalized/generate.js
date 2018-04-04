//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = ["+", "-", "*", "/", "%", ">>", ">>>", "<<", "|", "&", "^", "||", "&&"];
var o1 =  ["!", "~", "-", "+" ];

var o2 = [

    // Single bit set
    0x8000,
    0x4000,
    0x2000,
    0x1000,
    0x0800,
    0x0400,
    0x0200,
    0x0100,
    0x0080,
    0x0040,
    0x0020,
    0x0010,
    0x0008,
    0x0004,
    0x0002,
    0x0001,

    // 4 bits set
    0xf000,
    0x0f00,
    0x00f0,
    0x000f,

    // Bytes set
    0xff00,
    0x00ff,

    // Word set
    0xffff,

    // Top bit/2-bits not set
    0x7fff,
    0x3fff,
    0x7f00,
    0x3f00,
    0x007f,
    0x003f,
    0xff7f,
    0xff3f

];

function o3(o4)
{
    var o5 = new ArrayBuffer(8);
    var o7 = new Float64Array(o5);
    var o9 = new Uint16Array(o5);

    // Lower 48 bits are specific values
    o9[0] = 0xacac;
    o9[1] = 0xdd33;
    o9[2] = 0x1b2f;

    // Top 16 bits are varied.
    o9[3] = o4;

    return o7[0];
}

function o11(o12)
{
    // disable inlining
    eval("");
    return o12;
}

function o14(o15)
{
    o16.o17("function f"+o15+"() {");
}
function o18()
{
    o16.o17("}");
}

function o19(o20, o21, o22)
{
    o21 = o3(o21);

    if(o22 === undefined)
    {
        o16.o17("WScript.Echo(" + o20 + "  hide(" + o21 + "));");
    }
    else
    {
        o22 = o3(o22);
        o16.o17("WScript.Echo(hide(" + o21 + ")  " + o20 + "  hide(" + o22 + "));");
    }
}

// Generate the test cases.
o16.o17(o11);

var o24 = 0;
for(var o21 in o2)
{
    o14(o24);
    for(o22 in o2)
    {
        for(o20 in o0)
        {
            o19(o0[o20], o2[o21], o2[o22]);
        }
    }
    for(o20 in o1)
    {
        o19(o1[o20], o2[o21]);
    }
    o18();
    ++o24;
}
for(var o25 = 0; o25 < o24; ++o25)
{
    o16.o17("f"+o25+"();");
}
