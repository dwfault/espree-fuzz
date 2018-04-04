//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("Scenario: testing binding to the closure");

function o2()
{
        o3 = 12;

        this.get = function()
        {
                o0.o1("x = " + o3);
                return o3;
        }

        this.set = function(o6)
        {
                o0.o1("Setting x to " + o6);
                o3 = o6;
        }

        // Declare the variable at the lexical end of the scope to
        // make the binding tougher for the byte code generator.
        var o3;
}

var o3 = new o2();
var o7 = new o2();

for(o8 = 0; o8 < 4; ++o8)
{
        o3.set(o8);
        o7.set(o8+100);
        o3.get();
        o7.get();
}
