//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

﻿o0("Phase 1 - known dates");

o0("A --");
o1(new Date(-2012, 1, 2, 1, 2, 3));
o3(new Date(-2012, 1, 2, 1, 2, 3).toString());
o3(new Date(-2012, 1, 2, 1, 2, 3).toUTCString());
o3(new Date(-2012, 1, 2, 1, 2, 3).toISOString());

o0("B --");
o1(new Date(2012, 1, 2, 1, 2, 3));
o3(new Date(2012, 1, 2, 1, 2, 3).toString());
o3(new Date(2012, 1, 2, 1, 2, 3).toUTCString());
o3(new Date(2012, 1, 2, 1, 2, 3).toISOString());

o0("C --");
o1(new Date(99999, 1, 2, 1, 2, 3));
o3(new Date(99999, 1, 2, 1, 2, 3).toString());
o3(new Date(99999, 1, 2, 1, 2, 3).toUTCString());
o3(new Date(99999, 1, 2, 1, 2, 3).toISOString());

o0("D --");
o1(new Date(-99999, 1, 2, 1, 2, 3));
o3(new Date(-99999, 1, 2, 1, 2, 3).toString());
o3(new Date(-99999, 1, 2, 1, 2, 3).toUTCString());
o3(new Date(-99999, 1, 2, 1, 2, 3).toISOString());

o0("E --");
o1(new Date(-12, 1, 2, 1, 2, 3));
o3(new Date(-12, 1, 2, 1, 2, 3).toString());
o3(new Date(-12, 1, 2, 1, 2, 3).toUTCString());
o3(new Date(-12, 1, 2, 1, 2, 3).toISOString());

o0("F --");
o1(new Date(12, 1, 2, 1, 2, 3));
o3(new Date(12, 1, 2, 1, 2, 3).toString());
o3(new Date(12, 1, 2, 1, 2, 3).toUTCString());
o3(new Date(12, 1, 2, 1, 2, 3).toISOString());

o0("Phase 2 - parsing sample date strings");
o3("Tue Feb 02 2012 01:02:03 GMT-0800 (Pacific Standard Time)");
o3("Tue Feb 02 2012 01:02:03 GMT+0800 (prisec)");
o7("Tue Feb 02 2012 01:02:03 GMT+0000", " (ﾊﾇ)");
o3("Tue Feb 02 2012 01:02:03 GMT-0000");
o3("Tue Feb 02 2012 01:02:03 GMT+0430 (prisec@)");
o3("Tue Feb 2 01:02:03 PST 2013 B.C.");
o3("Thu Feb 2 01:02:03 PST 2012");

function o8(o9) {
    return o9.replace("(PST)", "(Pacific Standard Time)")
              .replace("(PDT)", "(Pacific Daylight Time)");
}

function o1(o11) {
    o3(o11.toString());
}

function o3(o12) {
    o0("Date string:\t\t" + o12);
    var o13 = Date.parse(o12);
    o15(o13);
}

// This is to avoid printing non-printable chars
function o7(o12, o16) {
    o0("Date string:\t\t" + o12);
    var o13 = Date.parse(o12 + o16);
    o15(o13);
}

function o15(o13) {
    o0("\t raw:\t\t" + o13);
    o13 = new Date(o13);
    o0("\t toString:\t" + o13.toString());
    o0("\t toUTCString:\t" + o13.toUTCString());
    o0("\t toGMTString:\t" + o13.o17());
    if (isNaN(o13) === false) {
        o0("\t toISOString:\t" + o13.toISOString());
        o0("\t\t\t" + o13.o19() + " " + o13.o20() + " " + o13.getTimezoneOffset());
        o0("\t\t\t" + o13.getFullYear() + "/" + o13.o23() + "/" + o13.o24());
        o0("\t\t\t" + o13.o25() + ":" + o13.o26() + ":" + o13.o27() + "." + o13.getMilliseconds());
    }
    o0("");
}

function o0(o9) {
    if (o29.o30 !== undefined) {
        o29.o30(o8(o9));
    }
    else {
        throw "no print!";
    }
}
