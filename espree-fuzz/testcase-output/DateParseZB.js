//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// 1. Verifying parsing with date string in GMT format.

var o0 = "Sat, 12 Aug 1995 13:30:00GMT";
o1.o2(Date.parse(o13.o12(all[o9],all[o14])));

// 2. Verifying parse date with timezone given in paranthesis.
// This parses the date to local timezone and not the timezone given in paranthesis.           

o0 = "Sat, 12 Aug 1995 13:30:00 ( GMT )";
// Covers the code for space and ( )s int the parser.
o1.o2(Date.parse(o0));

// 3. Verifying parse date with invalid timezone.
// This should cover the error condition.
o0 = "Sat, 12 Aug 1995 13:30:00NX-01";

var o3 = Date.parse(o0);
o1.o2(o3);

// 4. Verifying parse date with timezone.

o0 = "Sat, 12 Aug 1995 13:00:00 z";
o1.o2(Date.parse(o0));

// 5. Verifying conversion behaviors

var o4;
var o5;
var o6;
var o7;

o4 =
[
    {},
    function ()
    {
        o6 = true;
        return {};
    },
    function ()
    {
        o6 = true;
        return undefined;
    },
    function ()
    {
        o6 = true;
        return "1/1/1970 12:00 am";
    }
];

o5 =
[
    {},
    function ()
    {
        o7 = true;
        return {};
    },
    function ()
    {
        o7 = true;
        return undefined;
    },
    function ()
    {
        o7 = true;
        return "1/1/1970 1:00 am";
    },
    function ()
    {
        o7 = true;
        return "84";
    }
];

for (var o8 in o4)
{
    for (var o9 in o5)
    {
        o6 = false;
        o7 = false;

        var o10 = { toString: o4[o8], valueOf: o5[o9] };

        try
        {
            o1.o2(Date.parse(o10));
        }
        catch (o11)
        {
            o1.o2("Got error:");
            o1.o2("    name:     " + o11.name);
            o1.o2("    message:  " + o11.o12);
        }
        o1.o2("toString called:  " + (o6 ? "yes" : "no"));
        o1.o2("valueOf called:   " + (o7 ? "yes" : "no"));
    }
}

// Verifying different precisions for the milliseconds

// No milliseconds
o1.o2(Date.parse("2011-11-08T19:48:43"));

// Missing digits after .
o1.o2(Date.parse("2011-11-08T19:48:43."));

// milliseconds, 1 digit only, treat it as hundreds
o1.o2(Date.parse("2011-11-08T19:48:43.1"));
if(typeof(o0) === "undefined")
{
    var o0 = {
        o1: print
    }
}
o1.o2(Date.parse("2011-11-08T19:48:43.0"));
o1.o2(Date.parse("2011-11-08T19:48:43.0a"));

// milliseconds, 2 digit only, treat it as  tens
o1.o2(Date.parse("2011-11-08T19:48:43.12"));
o1.o2(Date.parse("2011-11-08T19:48:43.12a"));
o1.o2(Date.parse("2011-11-08T19:48:43.01"));
o1.o2(Date.parse("2011-11-08T19:48:43.01a"));
o1.o2(Date.parse("2011-11-08T19:48:43.00"));
o1.o2(Date.parse("2011-11-08T19:48:43.00a"));

// milliseconds, canonical 3 digit, per EcmaScript spec
o1.o2(Date.parse("2011-11-08T19:48:43.123"));
o1.o2(Date.parse("2011-11-08T19:48:43.123a"));
o1.o2(Date.parse("2011-11-08T19:48:43.001"));
o1.o2(Date.parse("2011-11-08T19:48:43.001a"));
o1.o2(Date.parse("2011-11-08T19:48:43.000"));
o1.o2(Date.parse("2011-11-08T19:48:43.000a"));

// milliseconds, with more than 3 digits, ignore all digits after the third
o1.o2(Date.parse("2011-11-08T19:48:43.1234"));
o1.o2(Date.parse("2011-11-08T19:48:43.1234a"));
o1.o2(Date.parse("2011-11-08T19:48:43.0011"));
o1.o2(Date.parse("2011-11-08T19:48:43.0011a"));
o1.o2(Date.parse("2011-11-08T19:48:43.0001"));
o1.o2(Date.parse("2011-11-08T19:48:43.0001a"));
o1.o2(Date.parse("2011-11-08T19:48:43.0000"));
o1.o2(Date.parse("2011-11-08T19:48:43.0000a"));

o1.o2(Date.parse("2011-11-08T19:48:43.12345"));
o1.o2(Date.parse("2011-11-08T19:48:43.12345a"))
o1.o2(Date.parse("2011-11-08T19:48:43.00111"));;
o1.o2(Date.parse("2011-11-08T19:48:43.00111a"));;
o1.o2(Date.parse("2011-11-08T19:48:43.00001"));
o1.o2(Date.parse("2011-11-08T19:48:43.00001a"));
o1.o2(Date.parse("2011-11-08T19:48:43.00000"));
o1.o2(Date.parse("2011-11-08T19:48:43.00000a"));

o1.o2(Date.parse("2011-11-08T19:48:43.00000000000001"));
o1.o2(Date.parse("2011-11-08T19:48:43.00000000000001a"));

// Verifying non-standard delimiters

// Some delimiters are allowed to be compatible with other browsers
o1.o2(Date.parse("2011-11-08/19:48:43"));
o1.o2(Date.parse("2011-11-08:19:48:43"));
o1.o2(Date.parse("2011-11-08 19:48:43"));
o1.o2(Date.parse("2011-11-08/: 19:48:43"));

o1.o2(Date.parse("2011/11/08/19:48:43"));
o1.o2(Date.parse("2011/11/08:19:48:43"));
o1.o2(Date.parse("2011/11/08 19:48:43"));
o1.o2(Date.parse("2011/11/08/: 19:48:43"));

// Mixed delimiters in the date are allowed
o1.o2(Date.parse("2011-11/08 19:48:43"));
o1.o2(Date.parse("2011/11-08 19:48:43"));

// Multiple 'T's aren't allowed
o1.o2(Date.parse("2011-11-08TT19:48:43"));
