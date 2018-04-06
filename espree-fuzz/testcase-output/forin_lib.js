//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var global = this;
function o1(o2)
{
    var o3 = global[o2];
    if (!o3) { return; }
    o4.o5("for..in " + o2);
    for (var o6 in o3)
    {
        o4.o5("  " + o6 + " = " + o3[o6]);
    }
    o4.o5("for..in " + o2 + " (with blah)");
    o3.o7 = "b";
    for (var o6 in o3)
    {
        o4.o5("  " + o6 + " = " + o3[o6]);
    
    }
    try
    {
        var o8 = new o3();
        o4.o5("for..in new " + o2);
        for (var o6 in o8)
        {
            o4.o5("  " + o6 + " = " + o8[o6]);
    
        }

        o4.o5("for..in " + o2 + " (with prototype.blah2)");
        o3.prototype.o10 = o2;
        for (var o6 in o8)
        {
            o4.o5("  " + o6 + " = " + o8[o6]);
    
        }
    } 
    catch (o11)
    {
    }
    o4.o5();
}



o1("Object");
o1("Array");
o1("String");
o1("Function");
o1("Math");
o1("JSON");
o1("Number");
o1("Boolean");
o1("Date");
o1("RegExp");
