//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

function o4(o5)
{
    write(o5 + " = " + eval(o5));
}

function o7(type)
{
    o4(type + ".prototype");
    o4("typeof("+ type + ".prototype)");
    o4(type + ".prototype.length");
    o4("typeof("+ type + ".prototype.length)");
    o4(type + ".prototype.toString()");
}

var o9 = [ 
    "Array",
    "Boolean",
    "Date",
    //"Function", // TODO: Check the function.toString
    "Number",
    "RegExp",
    "String"
]

for (var o10=0; o10< o9.length; o10++)
{
    o7(o9[o10]);
}
