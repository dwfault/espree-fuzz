//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

﻿o0("Phase 1 - known dates");

o0("A --");
o1(new Date(-2012, 1, 2, 1, 2, 3));
o2(new Date(-2012, 1, 2, 1, 2, 3).toString());
o2(new Date(-2012, 1, 2, 1, 2, 3).toUTCString());
o2(new Date(-2012, 1, 2, 1, 2, 3).toISOString());

o0("B --");
o1(new Date(2012, 1, 2, 1, 2, 3));
o2(new Date(2012, 1, 2, 1, 2, 3).toString());
o2(new Date(2012, 1, 2, 1, 2, 3).toUTCString());
o2(new Date(2012, 1, 2, 1, 2, 3).toISOString());

o0("C --");
o1(new Date(99999, 1, 2, 1, 2, 3));
o2(new Date(99999, 1, 2, 1, 2, 3).toString());
o2(new Date(99999, 1, 2, 1, 2, 3).toUTCString());
o2(new Date(99999, 1, 2, 1, 2, 3).toISOString());

o0("D --");
o1(new Date(-99999, 1, 2, 1, 2, 3));
o2(new Date(-99999, 1, 2, 1, 2, 3).toString());
o2(new Date(-99999, 1, 2, 1, 2, 3).toUTCString());
o2(new Date(-99999, 1, 2, 1, 2, 3).toISOString());

o0("E --");
o1(new Date(-12, 1, 2, 1, 2, 3));
o2(new Date(-12, 1, 2, 1, 2, 3).toString());
o2(new Date(-12, 1, 2, 1, 2, 3).toUTCString());
o2(new Date(-12, 1, 2, 1, 2, 3).toISOString());

o0("F --");
o1(new Date(12, 1, 2, 1, 2, 3));
o2(new Date(12, 1, 2, 1, 2, 3).toString());
o2(new Date(12, 1, 2, 1, 2, 3).toUTCString());
o2(new Date(12, 1, 2, 1, 2, 3).toISOString());

o0("Phase 2 - parsing sample date strings");
o2("Tue Feb 02 2012 01:02:03 GMT-0800 (Pacific Standard Time)");
o2("Tue Feb 02 2012 01:02:03 GMT+0800 (prisec)");
o3("Tue Feb 02 2012 01:02:03 GMT+0000", " (ﾊﾇ)");
o2("Tue Feb 02 2012 01:02:03 GMT-0000");
o2("Tue Feb 02 2012 01:02:03 GMT+0430 (prisec@)");
o2("Tue Feb 2 01:02:03 PST 2013 B.C.");
o2("Thu Feb 2 01:02:03 PST 2012");

function o4(o5) {
    return o5.replace("(PST)", "(Pacific Standard Time)")
              .replace("(PDT)", "(Pacific Daylight Time)");
}

function o1(o6) {
    o2(o6.toString());
}

function o2(o7) {
    o0("Date string:\t\t" + o7);
    var o8 = Date.parse(o7);
    o9(o8);
}

// This is to avoid printing non-printable chars
function o3(o7, o10) {
    o0("Date string:\t\t" + o7);
    var o8 = Date.parse(o7 + o10);
    o9(o8);
}

function o9(o8) {
    o0("\t raw:\t\t" + o8);
    o8 = new Date(o8);
    o0("\t toString:\t" + o8.toString());
    o0("\t toUTCString:\t" + o8.toUTCString());
    o0("\t toGMTString:\t" + o8.o11());
    if (isNaN(o8) === false) {
        o0("\t toISOString:\t" + o8.toISOString());
        o0("\t\t\t" + o8.o12() + " " + o8.o13() + " " + o8.getTimezoneOffset());
        o0("\t\t\t" + o8.getFullYear() + "/" + o8.o14() + "/" + o8.o15());
        o0("\t\t\t" + o8.o16() + ":" + o8.o17() + ":" + o8.o18() + "." + o8.getMilliseconds());
    }
    o0("");
}


