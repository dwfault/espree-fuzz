//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("Checking for new Date() with DST issues: ");
o0.o1("Backward loop starts");
for (var o2 = new Date(2014, 2, 1) ; o2.getFullYear() > 1940;)
{                
        var o5 = o2.o6();
        var o7 = o2.getFullYear();
        var o8 = o2.o9();
        o5 -= 1;

        o2 = new Date(o7, o8, o5);
        if (o2.o10() > 0)
        {
                o0.o1("" + o2 + "  from:" + o7 + "," + o8 + "," + o5 + "");

                o5--;
                o2 = new Date(o7, o8, o5); //skip over this date
        }                              
}

o0.o1("Forwards loop starts");
for (var o2 = new Date(1940, 0, 0) ; o2.getFullYear() < 2014;)
{
        var o5 = o2.o6();
        var o7 = o2.getFullYear();
        var o8 = o2.o9();
        o5 += 1;

        o2 = new Date(o7, o8, o5);

        if (o2.o10() > 0)
        {
                o0.o1("" + o2 + "  from:" + o7 + "," + o8 + "," + o5 + "");

                o5++;
                o2 = new Date(o7, o8, o5); //skip over this date
        }                              
}

o0.o1("done.");
