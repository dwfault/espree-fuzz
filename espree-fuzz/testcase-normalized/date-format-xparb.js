/*
 Copyright (C) 2007 Apple Inc.  All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:
 1. Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.

 THIS SOFTWARE IS PROVIDED BY APPLE COMPUTER, INC. ``AS IS'' AND ANY
 EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE COMPUTER, INC. OR
 CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 
*/

function o0(o1) {
    o2.o3("console").o4 = o1 + "ms";
    if (o5.o6) {
        o6.o7(o1);
    }
}

var o8 = new Date();

/*
 * Copyright (C) 2004 Baron Schwartz <baron at sequent dot org>
 *
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by the
 * Free Software Foundation, version 2.1.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU Lesser General Public License for more
 * details.
 */

Date.o10 = {o11:0};
Date.o12 = [];
Date.o13 = {o11:0};

Date.prototype.o15 = function(o16) {
    if (Date.o13[o16] == null) {
        Date.o17(o16);
    }
    var o18 = Date.o13[o16];
    return this[o18]();
}

Date.o17 = function(o16) {
    var o19 = "format" + Date.o13.o11++;
    Date.o13[o16] = o19;
    var o20 = "Date.prototype." + o19 + " = function(){return ";
    var o21 = false;
    var o22 = '';
    for (var o23 = 0; o23 < o16.length; ++o23) {
        o22 = o16.charAt(o23);
        if (!o21 && o22 == "\\\\") {
            o21 = true;
        }
        else if (o21) {
            o21 = false;
            o20 += "'" + String.escape(o22) + "' + ";
        }
        else {
            o20 += Date.o28(o22);
        }
    }
    eval(o20.substring(0, o20.length - 3) + ";}");
}

Date.o28 = function(o31) {
    switch (o31) {
    case "d":
        return "String.leftPad(this.getDate(), 2, '0') + ";
    case "D":
        return "Date.dayNames[this.getDay()].substring(0, 3) + ";
    case "j":
        return "this.getDate() + ";
    case "l":
        return "Date.dayNames[this.getDay()] + ";
    case "S":
        return "this.getSuffix() + ";
    case "w":
        return "this.getDay() + ";
    case "z":
        return "this.getDayOfYear() + ";
    case "W":
        return "this.getWeekOfYear() + ";
    case "F":
        return "Date.monthNames[this.getMonth()] + ";
    case "m":
        return "String.leftPad(this.getMonth() + 1, 2, '0') + ";
    case "M":
        return "Date.monthNames[this.getMonth()].substring(0, 3) + ";
    case "n":
        return "(this.getMonth() + 1) + ";
    case "t":
        return "this.getDaysInMonth() + ";
    case "L":
        return "(this.isLeapYear() ? 1 : 0) + ";
    case "Y":
        return "this.getFullYear() + ";
    case "y":
        return "('' + this.getFullYear()).substring(2, 4) + ";
    case "a":
        return "(this.getHours() < 12 ? 'am' : 'pm') + ";
    case "A":
        return "(this.getHours() < 12 ? 'AM' : 'PM') + ";
    case "g":
        return "((this.getHours() %12) ? this.getHours() % 12 : 12) + ";
    case "G":
        return "this.getHours() + ";
    case "h":
        return "String.leftPad((this.getHours() %12) ? this.getHours() % 12 : 12, 2, '0') + ";
    case "H":
        return "String.leftPad(this.getHours(), 2, '0') + ";
    case "i":
        return "String.leftPad(this.getMinutes(), 2, '0') + ";
    case "s":
        return "String.leftPad(this.getSeconds(), 2, '0') + ";
    case "O":
        return "this.getGMTOffset() + ";
    case "T":
        return "this.getTimezone() + ";
    case "Z":
        return "(this.getTimezoneOffset() * -60) + ";
    default:
        return "'" + String.escape(o31) + "' + ";
    }
}

Date.o32 = function(input, o16) {
    if (Date.o10[o16] == null) {
        Date.o34(o16);
    }
    var o18 = Date.o10[o16];
    return Date[o18](input);
}

Date.o34 = function(o16) {
    var o19 = "parse" + Date.o10.o11++;
    var o35 = Date.o12.length;
    var o36 = 1;
    Date.o10[o16] = o19;

    var o20 = "Date." + o19 + " = function(input){\\n"
        + "var y = -1, m = -1, d = -1, h = -1, i = -1, s = -1;\\n"
        + "var d = new Date();\\n"
        + "y = d.getFullYear();\\n"
        + "m = d.getMonth();\\n"
        + "d = d.getDate();\\n"
        + "var results = input.match(Date.parseRegexes[" + o35 + "]);\\n"
        + "if (results && results.length > 0) {"
    var o37 = "";

    var o21 = false;
    var o22 = '';
    for (var o23 = 0; o23 < o16.length; ++o23) {
        o22 = o16.charAt(o23);
        if (!o21 && o22 == "\\\\") {
            o21 = true;
        }
        else if (o21) {
            o21 = false;
            o37 += String.escape(o22);
        }
        else {
            o38 = Date.o39(o22, o36);
            o36 += o38.o40;
            o37 += o38.o41;
            if (o38.o40 && o38.o42) {
                o20 += o38.o42;
            }
        }
    }

    o20 += "if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0 && s >= 0)\\n"
        + "{return new Date(y, m, d, h, i, s);}\\n"
        + "else if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0)\\n"
        + "{return new Date(y, m, d, h, i);}\\n"
        + "else if (y > 0 && m >= 0 && d > 0 && h >= 0)\\n"
        + "{return new Date(y, m, d, h);}\\n"
        + "else if (y > 0 && m >= 0 && d > 0)\\n"
        + "{return new Date(y, m, d);}\\n"
        + "else if (y > 0 && m >= 0)\\n"
        + "{return new Date(y, m);}\\n"
        + "else if (y > 0)\\n"
        + "{return new Date(y);}\\n"
        + "}return null;}";

    Date.o12[o35] = new RegExp("^" + o37 + "$");
    eval(o20);
}

Date.o39 = function(o31, o36) {
    switch (o31) {
    case "D":
        return {o40:0,
        o42:null,
        o41:"(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)"};
    case "j":
    case "d":
        return {o40:1,
            o42:"d = parseInt(results[" + o36 + "], 10);\\n",
            o41:"(\\\\d{1,2})"};
    case "l":
        return {o40:0,
            o42:null,
            o41:"(?:" + Date.o44.join("|") + ")"};
    case "S":
        return {o40:0,
            o42:null,
            o41:"(?:st|nd|rd|th)"};
    case "w":
        return {o40:0,
            o42:null,
            o41:"\\\\d"};
    case "z":
        return {o40:0,
            o42:null,
            o41:"(?:\\\\d{1,3})"};
    case "W":
        return {o40:0,
            o42:null,
            o41:"(?:\\\\d{2})"};
    case "F":
        return {o40:1,
            o42:"m = parseInt(Date.monthNumbers[results[" + o36 + "].substring(0, 3)], 10);\\n",
            o41:"(" + Date.o46.join("|") + ")"};
    case "M":
        return {o40:1,
            o42:"m = parseInt(Date.monthNumbers[results[" + o36 + "]], 10);\\n",
            o41:"(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)"};
    case "n":
    case "m":
        return {o40:1,
            o42:"m = parseInt(results[" + o36 + "], 10) - 1;\\n",
            o41:"(\\\\d{1,2})"};
    case "t":
        return {o40:0,
            o42:null,
            o41:"\\\\d{1,2}"};
    case "L":
        return {o40:0,
            o42:null,
            o41:"(?:1|0)"};
    case "Y":
        return {o40:1,
            o42:"y = parseInt(results[" + o36 + "], 10);\\n",
            o41:"(\\\\d{4})"};
    case "y":
        return {o40:1,
            o42:"var ty = parseInt(results[" + o36 + "], 10);\\n"
                + "y = ty > Date.y2kYear ? 1900 + ty : 2000 + ty;\\n",
            o41:"(\\\\d{1,2})"};
    case "a":
        return {o40:1,
            o42:"if (results[" + o36 + "] == 'am') {\\n"
                + "if (h == 12) { h = 0; }\\n"
                + "} else { if (h < 12) { h += 12; }}",
            o41:"(am|pm)"};
    case "A":
        return {o40:1,
            o42:"if (results[" + o36 + "] == 'AM') {\\n"
                + "if (h == 12) { h = 0; }\\n"
                + "} else { if (h < 12) { h += 12; }}",
            o41:"(AM|PM)"};
    case "g":
    case "G":
    case "h":
    case "H":
        return {o40:1,
            o42:"h = parseInt(results[" + o36 + "], 10);\\n",
            o41:"(\\\\d{1,2})"};
    case "i":
        return {o40:1,
            o42:"i = parseInt(results[" + o36 + "], 10);\\n",
            o41:"(\\\\d{2})"};
    case "s":
        return {o40:1,
            o42:"s = parseInt(results[" + o36 + "], 10);\\n",
            o41:"(\\\\d{2})"};
    case "O":
        return {o40:0,
            o42:null,
            o41:"[+-]\\\\d{4}"};
    case "T":
        return {o40:0,
            o42:null,
            o41:"[A-Z]{3}"};
    case "Z":
        return {o40:0,
            o42:null,
            o41:"[+-]\\\\d{1,5}"};
    default:
        return {o40:0,
            o42:null,
            o41:String.escape(o31)};
    }
}

Date.prototype.o47 = function() {
    return this.toString().replace(
        /^.*? ([A-Z]{3}) [0-9]{4}.*$/, "$1").replace(
        /^.*?\\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\\)$/, "$1$2$3");
}

Date.prototype.o50 = function() {
    return (this.getTimezoneOffset() > 0 ? "-" : "+")
        + String.o52(Math.floor(this.getTimezoneOffset() / 60), 2, "0")
        + String.o52(this.getTimezoneOffset() % 60, 2, "0");
}

Date.prototype.o55 = function() {
    var o56 = 0;
    Date.o57[1] = this.o58() ? 29 : 28;
    for (var o23 = 0; o23 < this.o59(); ++o23) {
        o56 += Date.o57[o23];
    }
    return o56 + this.o60() - 1;
}

Date.prototype.o61 = function() {
    // Skip to Thursday of this week
    var o62 = this.o55() + (4 - this.o63());
    // Find the first Thursday of the year
    var o64 = new Date(this.getFullYear(), 0, 1);
    var then = (7 - o64.o63() + 4);
    o2.write(then);
    return String.o52(((o62 - then) / 7) + 1, 2, "0");
}

Date.prototype.o58 = function() {
    var o68 = this.getFullYear();
    return ((o68 & 3) == 0 && (o68 % 100 || (o68 % 400 == 0 && o68)));
}

Date.prototype.o69 = function() {
    var o70 = (this.o63() - (this.o60() - 1)) % 7;
    return (o70 < 0) ? (o70 + 7) : o70;
}

Date.prototype.o71 = function() {
    var o70 = (this.o63() + (Date.o57[this.o59()] - this.o60())) % 7;
    return (o70 < 0) ? (o70 + 7) : o70;
}

Date.prototype.o72 = function() {
    Date.o57[1] = this.o58() ? 29 : 28;
    return Date.o57[this.o59()];
}

Date.prototype.o73 = function() {
    switch (this.o60()) {
        case 1:
        case 21:
        case 31:
            return "st";
        case 2:
        case 22:
            return "nd";
        case 3:
        case 23:
            return "rd";
        default:
            return "th";
    }
}

String.escape = function(o74) {
    return o74.replace(/('|\\\\)/g, "\\\\$1");
}

String.o52 = function (o75, o76, o22) {
    var o77 = new String(o75);
    if (o22 == null) {
        o22 = " ";
    }
    while (o77.length < o76) {
        o77 = o22 + o77;
    }
    return o77;
}

Date.o57 = [31,28,31,30,31,30,31,31,30,31,30,31];
Date.o46 =
   ["January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"];
Date.o44 =
   ["Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"];
Date.o78 = 50;
Date.o79 = {
    o80:0,
    o81:1,
    o82:2,
    o83:3,
    o84:4,
    o85:5,
    o86:6,
    o87:7,
    o88:8,
    o89:9,
    o90:10,
    o91:11};
Date.o92 = {
    o93:"Y-m-d H:i:s",
    o94:"Y-m-d",
    o95: "n/j/Y",
    o96: "l, F d, Y",
    o97: "l, F d, Y g:i:s A",
    o98: "F d",
    o99: "g:i A",
    o100: "g:i:s A",
    o101: "Y-m-d\\\\TH:i:s",
    o102: "Y-m-d H:i:sO",
    o103: "F, Y"};

var o104 = new Date("1/1/2007 1:11:11");

for (o23 = 0; o23 < 4000; ++o23) {
    var o105 = o104.o15("Y-m-d");
    var o106 = o104.o15("l, F d, Y g:i:s A");
    o104.o107(o104.o108() + 84266956);
}

// FIXME: Find a way to validate this test.
// https://bugs.webkit.org/show_bug.cgi?id=114849


var o109 = new Date() - o8;

o110.o111("### TIME:", o109, "ms");