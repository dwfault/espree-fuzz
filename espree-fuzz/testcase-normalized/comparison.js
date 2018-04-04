//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Tagged Integers Test Plan, testcase #1
//
// Tests integer comparisons, with special attention to values interesting to
// tagged integers.

function o0(o1,o2)
{
    if(!o1)
    {
        o3.o4("FAIL: " + o2);
    }
}

// BEGIN INTEGER DEFINITIONS
var o5 = 573;
var o6 = 572;
var o7 = new Object;

o7.o9 = 0;
o7.o10 = 0x0;
o7.o11 = new Number(0);
o7.o13 = o6 - o6;

o7.o14 = 1
o7.o15 = 0x1;
o7.o16 = new Number(1);
o7.o17 = o5 - o6;

o7.o18 = 2;
o7.o19 = 0x2;
o7.o20 = new Number(2);
o7.o21 = 2*(o5-o6);

o7.o22 = -1
o7.o23 = -0x1;
o7.o24 = -new Number(1);
o7.o25 = o6-o5;

o7.o26 = -2;
o7.o27 = -0x2;
o7.o28 = -new Number(2);
o7.o29 = 2*(o6-o5);

o7.o30 = 536870911;
o7.o31 = 0x1fffffff;
o7.o32 = new Number(536870911);
o7.o33 = 936947*o5+280;

o7.o34 = -536870912;
o7.o35 = -0x20000000;
o7.o36 = new Number(-536870912);
o7.o37 = -(936947*o5+280)-1;

o7.o38 = 536870910;
o7.o39 = 0x1ffffffe;
o7.o40 = new Number(536870910);
o7.o41 = 936947*o5+280-1;

o7.o42 = -536870911;
o7.o43 = -0x1fffffff;
o7.o44 = new Number(-536870911);
o7.o45 = -(936947*o5+280);

o7.o46 = 4294967295;
o7.o47 = 0xffffffff;
o7.o48 = new Number(4294967295);
o7.o49 = 7495579*o5+528;

o7.o50 = 4294967294;
o7.o51 = 0xfffffffe;
o7.o52 = new Number(4294967294);
o7.o53 = 7495579*o5+528-1;

o7.o54 = 2147483647;
o7.o55 = 0x7fffffff;
o7.o56 = new Number(2147483647);
o7.o57 = 2147483074+o5;

o7.o58 = 2147483646;
o7.o59 = 0x7ffffffe;
o7.o60 = new Number(2147483646);
o7.o61 = 2147483073+o5;

o7.o62 = -2147483648;
o7.o63 = -0x80000000;
o7.o64 = new Number(-2147483648);
o7.o65 = -2147483075-o5;

o7.o66 = -2147483647;
o7.o67 = -0x7fffffff;
o7.o68 = new Number(-2147483647);
o7.o69 = -2147483074-o5;

//
// These values are in increasing numeric value.  It's important to keep
// that ordering.
//
var o70 = [ "intmin",
         "intminplusone",
         "tagmin",
         "tagminplusone",
         "negtwo",
         "negone",
         "zero",
         "one",
         "two",
         "tagmaxminusone",
         "tagmax",
         "intmaxminusone",
         "intmax",
         "uintmaxminusone",
         "uintmax"
        ];

// END DEFINITIONS

// Test for equality
function o71()
{
    for(var o72 = 0; o72 < o70.length; ++o72)
    {
        for(var o74 = 1; o74 <= 4; ++o74)
        {
            for(var o75 = 1; o75 <= 4; ++o75)
            {
                var o76 = o70[o72]+o74;
                var o77 = o70[o72]+o75;

                var o78 = false;

                if(o7[o76] == o7[o77])
                {
                    o78 = true;
                }
                o0(o78, o7[o76] + " == " + o7[o77]);
            }
        }
    }
}

// Test for inequality
function o79()
{
    for(var o80 = 0; o80 < o70.length; ++o80)
    {

        for(var o81 = 0; o81 < o70.length; ++o81)
        {
            if(o80 == o81)
                continue;

            for(var o74 = 1; o74 <= 4; ++o74)
            {
                for(var o75 = 1; o75 <= 4; ++o75)
                {
                    var o76 = o70[o80]+o74;
                    var o77 = o70[o81]+o75;

                    var o78 = false;

                    if(o7[o76] != o7[o77])
                    {
                        o78 = true;
                    }
                    o0(o78, o7[o76] + " != " + o7[o77]);
                }
            }
        }
    }
}

// Test for greater/less than
function o82()
{
    for(var o80 = 0; o80 < o70.length; ++o80)
    {

        for(var o81 = 0; o81 < o70.length; ++o81)
        {
            if(o80 == o81)
                continue;

            for(var o74 = 1; o74 <= 4; ++o74)
            {
                for(var o75 = 1; o75 <= 4; ++o75)
                {
                    var o76 = o70[o80]+o74;
                    var o77 = o70[o81]+o75;
                    var o78 = false;

                    var o2 = "ERROR";

                    if(o80 > o81)
                    {
                        o2 = " > ";

                        if(o7[o76] > o7[o77])
                        {
                            o78 = true;
                        }
                    }
                    else if(o80 < o81)
                    {
                        o2 = " < ";

                        if(o7[o76] < o7[o77])
                        {
                            o78 = true;
                        }
                    }
                    else
                    {
                        o3.o4("should never get here!");
                        o78 = false;
                    }

                    o0(o78, o7[o76] + o2 + o7[o77]);
                }
            }
        }
    }
}

// Test for greaterequals/lessequals
function o83()
{
    for(var o80 = 0; o80 < o70.length; ++o80)
    {

        for(var o81 = 0; o81 < o70.length; ++o81)
        {
            for(var o74 = 1; o74 <= 4; ++o74)
            {
                for(var o75 = 1; o75 <= 4; ++o75)
                {
                    var o76 = o70[o80]+o74;
                    var o77 = o70[o81]+o75;
                    var o78 = false;

                    var o2 = "ERROR";

                    if(o80 > o81)
                    {
                        o2 = " >= ";

                        if(o7[o76] >= o7[o77])
                        {
                            o78 = true;
                        }
                    }
                    else if(o80 < o81)
                    {
                        o2 = " <= ";

                        if(o7[o76] <= o7[o77])
                        {
                            o78 = true;
                        }
                    }
                    else if(o80 == o81)
                    {
                        if(o74 >= o75)
                        {
                            if(o7[o76] >= o7[o77])
                            {
                                o78 = true;
                            }
                        }
                        else
                        {
                            if(o7[o76] <= o7[o77])
                            {
                                o78 = true;
                            }
                        }
                    }

                    o0(o78, o7[o76] + o2 + o7[o77]);
                }
            }
        }
    }
}

o71();
o79();
o82();
o83();

o3.o4("done");
