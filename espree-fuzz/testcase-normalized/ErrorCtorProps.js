//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = [Error, o2, o3, o4, o5, o6, o7];
o8(eval, "ctors.push(RegExpError);");
o8(eval, "ctors.push(ConversionError);");

var o10 = ["message", "name", "description", "call", "apply"];

for (var o11 in o0)
{
    o12(o0[o11]);
}

function o12(o13)
{
    o14.o15("---------------------------------");
    o14.o15("toString(): " + o13.toString());
    for (var o17 in o10)
    {
        var o18 = o10[o17];
        o14.o15("Property: '" + o18 + "'");
        o14.o15("Value: '" + o13[o18] + "'");
        o14.o15("hasOwnProperty: " + o13.hasOwnProperty(o18));
    }
    o14.o15();
}

function o8(o20) {
    var o21 = [];
    for (var o22 = 1; o22 < arguments.length; ++o22)
        o21.push(arguments[o22]);
    try {
        return o20.apply(this, o21);
    } catch (o27) {
        o14.o15(o27.name + ": " + o27.o29);
    }
}
