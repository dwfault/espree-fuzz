//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

try
{
    o4 = random();
}
catch ( o6 )
{
    write(o6.o7 + " " + o6.o8);
}

try
{
    o9();
}
catch ( o6 )
{
    write(o6.o7 + " " + o6.o8);
}

try {
    var o10 = new o11();
}
catch(o6) {
    write(o6.o7 + " " + o6.o8);
}

try
{
    eval("function u\u3000n01() { return 3; }");
}
catch ( o6 )
{
    write(o6.o7 + " " + o6.o8);
}

try
{
    var o13 = new Date();
    o13.o15();
}
catch ( o6 )
{
    write(o6.o7 + " " + o6.o8);
}

try
{
    o16 = encodeURI(String.fromCharCode(0xD800));
}
catch ( o6 )
{
    write(o6.o7 + " " + o6.o8);
}

try
{
    o16 = decodeURI("%");
}
catch ( o6 )
{
    write(o6.o7 + " " + o6.o8);
}

try
{
    var o21 = "AABBCCDD";
    var o22 = new RegExp("(?{ $a = 3+$b })");
    o24 = o21.match(o22);
}
catch (o6)
{
    write(o6.o7 + " " + o6.o8);
}

try
{
    var o21 = "foo";
    var o22 = new RegExp("(in","i");
    o24 = o21.match(o22);
}
catch (o6)
{
    write(o6.o7 + " " + o6.o8);
}

try
{
    var o26 = new Number(10.12345);
    var o24 = o26.toPrecision(0);
}
catch (o6)
{
    write(o6.o7 + " " + o6.o8);
}

try
{
    var o22 = new RegExp("[z-a]","i");
}
catch (o6)
{
    write(o6.o7 + " " + o6.o8);
}

try
{
    eval("var u\u200Cn01 = 14;");
}
catch (o6)
{
    write(o6.o7 + " " + o6.o8);
}

