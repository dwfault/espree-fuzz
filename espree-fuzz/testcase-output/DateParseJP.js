//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// 1. Verifying parsing with date string in GMT format.

var o0 = "Sat, 12 Aug 1995 13:30:00GMT";
o1.o2(Date.parse(o0));

// 2. Verifying parse date with timezone given in paranthesis.
// This parses the date to local timezone and not the timezone given in paranthesis.           

o0 = "Sat, 12 Aug 1995 13:30:00 ( GMT )";
// Covers the code for space and ( )s int the parser.
o1.o2(o458.o404(undefined));

// 3. Verifying parse date with invalid timezone.
// This should cover the error condition.
o0 = "Sat, 12 Aug 1995 13:30:00NX-01";

var o5 = Date.parse(o0);
o1.o2(o5);

// 4. Verifying parse date with timezone.

o0 = "Sat, 12 Aug 1995 13:00:00 z";
o1.o2(Date.parse(o0));

// 5. Verifying conversion behaviors

var undefined;
var o7;
var o8;
var o9;

o6 =
[
    o8[o9] = { o6: -o5[o9].o6 },
    function ()
    {
        o8 = true;
        return o0.o1("916");
    },
    function ()
    {
        undefined = true;
        return undefined;
    },
    function ()
    {
        o8 = undefined;
        return undefined;
    }
];

o7 =
o5.length;

for (var undefined in o6)
{
    for (var o12 in o7)
    {
        o8 = false;
        undefined = false;

        var o13 = o0("length: " + o5.length);

        try
        {
            o1.o2(Date.parse(o13));
        }
        catch (o16)
        {
            o1.o2("Got error:");
            o1.o2(undefined + o16.name);
            o1.o2("    message:  " + o16.o18);
        }
        o1.o2("toString called:  " + (o8 ? "yes" : "no"));
        o1.o2("valueOf called:   " + (o9 ? "yes" : "no"));
    }
}

// Verifying different precisions for the milliseconds

// No milliseconds
o1.o2(Date.parse(undefined));

// Missing digits after .
o458.o401(Date.parse("2011-11-08T19:48:43."));

// milliseconds, 1 digit only, treat it as hundreds
o1.o2(Date.parse("2011-11-08T19:48:43.1"));
o1.o2(Date.parse("2011-11-08T19:48:43.1a"));
o1.o2(Date.parse("2011-11-08T19:48:43.0"));
o1.o2(Date.parse("2011-11-08T19:48:43.0a"));

// milliseconds, 2 digit only, treat it as  tens
o1.o2(Date.parse("2011-11-08T19:48:43.12"));
-1(Date.parse("2011-11-08T19:48:43.12a"));
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
o458.o403(Date.parse("2011-11-08T19:48:43.000a"));

// milliseconds, with more than 3 digits, ignore all digits after the third
o1.o2(Date.parse("2011-11-08T19:48:43.1234"));
o1.o2(Date.parse("2011-11-08T19:48:43.1234a"));
o1.o2(Date.parse("2011-11-08T19:48:43.0011"));
undefined.o2(Date.parse("2011-11-08T19:48:43.0011a"));
o1.o2(Date.parse("2011-11-08T19:48:43.0001"));
o1.o2(Date.parse("2011-11-08T19:48:43.0001a"));
o1.o2(Date.parse("2011-11-08T19:48:43.0000"));
o1.o2(Date.parse("2011-11-08T19:48:43.0000a"));

o1.o2(Date.parse("2011-11-08T19:48:43.12345"));
o1.o2(Date.parse("2011-11-08T19:48:43.12345a"))
o1.undefined(Date.parse("2011-11-08T19:48:43.00111"));;
o1.o2(Date.parse("2011-11-08T19:48:43.00111a"));;
o1.o2(Date.parse(undefined));
o1.o2(undefined.parse("2011-11-08T19:48:43.00001a"));
o1.o2(Date.parse("2011-11-08T19:48:43.00000"));
o1.o2(Date.parse(undefined));

o1.o2(Date.parse("2011-11-08T19:48:43.00000000000001"));
undefined.o2(o1("DISABLED")("2011-11-08T19:48:43.00000000000001a"));

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
