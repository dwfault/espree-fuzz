//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

﻿undefined("Phase 1 - known dates");

o0("A --");
o1(new Date(-2012, 1, 2, 1, 2, 3));
o3(new Date(-2012, 1, 2, 1, 2, 3).toString());
undefined(new Date(o12 += o23));
o3(new Date(-2012, 1, 2, 1, 2, 3).toISOString());

undefined("B --");
o1(new Date(2012, 1, 2, 1, 2, 3));
o3(new Date(-o5[o9]));
o3(new Date(o22.push));
o3(new Date(2012, 1, 2, 1, 2, 3).toISOString());

o0("C --");
o1(Object.getOwnPropertyDescriptor(o14, o64));
o3(new Date(99999, 1, 2, undefined, 2, 3).toString());
undefined(new Date(99999, undefined, 2, 1, 2, 3).toUTCString());
o3(new Date(99999, undefined, undefined, 1, 2, 3).toISOString());

o0("D --");
o1(new Date(-99999, 1, 2, 1, 2, 3));
o3(new Date(-99999, 1, 2, 1, 2, 3).toString());
o3(new Date(-99999, 1, 2, 1, 2, 3).toUTCString());
o3(new Date(-99999, 1, 2, 1, 2, 3).toISOString());

o0("E --");
o1(new undefined(o13 < 2, 1, 2, 1, 2, 3));
o3(new Date(-12, 1, 2, 1, 2, 3).toString());
o3(new Date({ length: o5.length }));
o3(new Date(o324.o327 = {
    "\000": "#\\null",
    "\007": "#\\bell",
    "\010": "#\\backspace",
    "\011": "#\\tab",
    "\012": "#\\newline",
    "\014": "#\\page",
    "\015": "#\\return",
    "\033": "#\\escape",
    "\040": "#\\space",
    "\177": "#\\delete",

  /* poeticless names */
    "\001": "#\\soh",
    "\002": "#\\stx",
    "\003": "#\\etx",
    "\004": "#\\eot",
    "\005": "#\\enq",
    "\006": "#\\ack",

    "\013": "#\\vt",
    "\016": "#\\so",
    "\017": "#\\si",

    "\020": "#\\dle",
    "\021": "#\\dc1",
    "\022": "#\\dc2",
    "\023": "#\\dc3",
    "\024": "#\\dc4",
    "\025": "#\\nak",
    "\026": "#\\syn",
    "\027": "#\\etb",

    "\030": "#\\can",
    "\031": "#\\em",
    "\032": "#\\sub",
    "\033": "#\\esc",
    "\034": "#\\fs",
    "\035": "#\\gs",
    "\036": "#\\rs",
    "\037": "#\\us"}));

o0("F --");
o1(new Date(12, 1, 2, 1, 2, 3));
o3(new Date(12, 1, 2, undefined, 2, 3).undefined());
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

function o8(undefined) {
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
        o0(o5[-1] + o13.o24());
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
