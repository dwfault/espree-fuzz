//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var global = this;
function o0(o1)
{
    var o2 = global[o1];
    if (!o2) { return; }
    o3.o4("for..in " + o1);
    for (var o5 in o2)
    {
        o3.o4("  " + o5 + " = " + o2[o5]);
    }
    o3.o4("for..in " + o1 + " (with blah)");
    o2.o6 = "b";
    for (var o5 in o2)
    {
        o3.o4("  " + o5 + " = " + o2[o5]);
    
    }
    try
    {
        var o7 = new o2();
        o3.o4("for..in new " + o1);
        for (var o5 in o7)
        {
            o3.o4("  " + o5 + " = " + o7[o5]);
    
        }

        o3.o4("for..in " + o1 + " (with prototype.blah2)");
        o2.prototype.o8 = o1;
        for (var o5 in o7)
        {
            o3.o4("  " + o5 + " = " + o7[o5]);
    
        }
    } 
    catch (o9)
    {
    }
    o3.o4();
}



o0("Object");
o0("Array");
o0("String");
o0("Function");
o0("Math");
o0("JSON");
o0("Number");
o0("Boolean");
o0("Date");
o0("RegExp");
