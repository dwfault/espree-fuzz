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

function o10(o11, o12) {
    for (var o13 = 0; o13 < o11.length; o13++) {
        if (o11[o13] == o12) return true;
    }
    return false;
}

Date.prototype.o16 = function (input,o1) {
    // formatDate :
    // a PHP date like function, for formatting date strings
    // See: http://www.php.net/date
    //
    // input : format string
    // time : epoch time (seconds, and optional)
    //
    // if time is not passed, formatting is based on 
    // the current "this" date object's set time.
    //
    // supported:
    // a, A, B, d, D, F, g, G, h, H, i, j, l (lowercase L), L, 
    // m, M, n, O, r, s, S, t, U, w, W, y, Y, z
    //
    // unsupported:
    // I (capital i), T, Z    

    var o18 =    ["a", "A", "B", "d", "D", "F", "g", "G", "h", "H", 
                       "i", "j", "l", "L", "m", "M", "n", "O", "r", "s", 
                       "S", "t", "U", "w", "W", "y", "Y", "z"];
    var o19 =    ["Sunday", "Monday", "Tuesday", "Wednesday", 
                       "Thursday", "Friday", "Saturday"];
    var o20 =   ["Sun", "Mon", "Tue", "Wed", 
                       "Thu", "Fri", "Sat"];
    var o21 = ["Jan", "Feb", "Mar", "Apr",
                       "May", "Jun", "Jul", "Aug", "Sep",
                       "Oct", "Nov", "Dec"];
    var o22 =  ["January", "February", "March", "April",
                       "May", "June", "July", "August", "September",
                       "October", "November", "December"];
    var o23 = ["st", "nd", "rd", "th", "th", "th", "th", // 1st - 7th
                      "th", "th", "th", "th", "th", "th", "th", // 8th - 14th
                      "th", "th", "th", "th", "th", "th", "st", // 15th - 21st
                      "nd", "rd", "th", "th", "th", "th", "th", // 22nd - 28th
                      "th", "th", "st"];                        // 29th - 31st

    function o24() {
        // Lowercase Ante meridiem and Post meridiem
        return o25.o26() > 11? "pm" : "am";
    }
    function o27() {
        // Uppercase Ante meridiem and Post meridiem
        return o25.o26() > 11? "PM" : "AM";
    }

    function o28(){
        // Swatch internet time. code simply grabbed from ppk,
        // since I was feeling lazy:
        // http://www.xs4all.nl/~ppk/js/beat.html
        var o29 = (o25.getTimezoneOffset() + 60)*60;
        var o31 = (o25.o26() * 3600) + 
                         (o25.o32() * 60) + 
                          o25.o33() + o29;
        var o34 = Math.floor(o31/86.4);
        if (o34 > 1000) o34 -= 1000;
        if (o34 < 0) o34 += 1000;
        if ((""+o34).length == 1) o34 = "00"+o34;
        if ((""+o34).length == 2) o34 = "0"+o34;
        return o34;
    }
    
    function o37() {
        // Day of the month, 2 digits with leading zeros
        return new String(o25.o39()).length == 1?
        "0"+o25.o39() : o25.o39();
    }
    function o40() {
        // A textual representation of a day, three letters
        return o20[o25.o41()];
    }
    function o42() {
        // A full textual representation of a month
        return o22[o25.o43()];
    }
    function o44() {
        // 12-hour format of an hour without leading zeros
        return o25.o26() > 12? o25.o26()-12 : o25.o26();
    }
    function o45() {
        // 24-hour format of an hour without leading zeros
        return o25.o26();
    }
    function o46() {
        // 12-hour format of an hour with leading zeros
        if (o25.o26() > 12) {
          var o47 = new String(o25.o26()-12);
          return o47.length == 1?
          "0"+ (o25.o26()-12) : o25.o26()-12;
        } else { 
          var o47 = new String(o25.o26());
          return o47.length == 1?
          "0"+o25.o26() : o25.o26();
        }  
    }
    function o48() {
        // 24-hour format of an hour with leading zeros
        return new String(o25.o26()).length == 1?
        "0"+o25.o26() : o25.o26();
    }
    function o13() {
        // Minutes with leading zeros
        return new String(o25.o32()).length == 1? 
        "0"+o25.o32() : o25.o32(); 
    }
    function o49() {
        // Day of the month without leading zeros
        return o25.o39();
    }    
    function o50() {
        // A full textual representation of the day of the week
        return o19[o25.o41()];
    }
    function o51() {
        // leap year or not. 1 if leap year, 0 if not.
        // the logic should match iso's 8601 standard.
        var o52 = o53();
        if (         
            (o52 % 4 == 0 && o52 % 100 != 0) ||
            (o52 % 4 == 0 && o52 % 100 == 0 && o52 % 400 == 0)
            ) {
            return 1;
        } else {
            return 0;
        }
    }
    function o54() {
        // Numeric representation of a month, with leading zeros
        return o25.o43() < 9?
        "0"+(o25.o43()+1) : 
        o25.o43()+1;
    }
    function o55() {
        // A short textual representation of a month, three letters
        return o21[o25.o43()];
    }
    function o56() {
        // Numeric representation of a month, without leading zeros
        return o25.o43()+1;
    }
    function o57() {
        // Difference to Greenwich time (GMT) in hours
        var o58 = Math.abs(o25.getTimezoneOffset());
        var o46 = ""+Math.floor(o58/60);
        var o54 = ""+(o58%60);
        o46.length == 1? o46 = "0"+o46:1;
        o54.length == 1? o54 = "0"+o54:1;
        return o25.getTimezoneOffset() < 0 ? "+"+o46+o54 : "-"+o46+o54;
    }
    function o60() {
        // RFC 822 formatted date
        var o60; // result
        //  Thu    ,     21          Dec         2000
        o60 = o40() + ", " + o49() + " " + o55() + " " + o53() +
        //        16     :    01     :    07          +0200
            " " + o48() + ":" + o13() + ":" + o47() + " " + o57();
        return o60;
    }
    function o61() {
        // English ordinal suffix for the day of the month, 2 characters
        return o23[o25.o39()-1];
    }
    function o47() {
        // Seconds, with leading zeros
        return new String(o25.o33()).length == 1?
        "0"+o25.o33() : o25.o33();
    }
    function o62() {

        // thanks to Matt Bannon for some much needed code-fixes here!
        var o63 = [null,31,28,31,30,31,30,31,31,30,31,30,31];
        if (o51()==1 && o56()==2) return 29; // leap day
        return o63[o56()];
    }
    function o64() {
        // Seconds since the Unix Epoch (January 1 1970 00:00:00 GMT)
        return Math.o65(o25.o66()/1000);
    }
    function o67() {
        // Weeknumber, as per ISO specification:
        // http://www.cl.cam.ac.uk/~mgk25/iso-time.html
        
        // if the day is three days before newyears eve,
        // there's a chance it's "week 1" of next year.
        // here we check for that.
        var o68 = 364+o51() - o69();
        var o70  = o69();
        var o71 = o72()!=0?o72()-1:6; // makes sunday (0), into 6.
        if (o68 <= 2 && o71 <= 2-o68) {
            return 1;
        }
        // similarly, if the day is within threedays of newyears
        // there's a chance it belongs in the old year.
        var o73 = new Date("January 1 " + o53() + " 00:00:00");
        var o74 = o73.o41()!=0?o73.o41()-1:6;
        if (
            (o70 <= 2) && 
            (o74 >=4)  && 
            (o70 >= (6-o74))
            ) {
            // Since I'm not sure we can just always return 53,
            // i call the function here again, using the last day
            // of the previous year, as the date, and then just
            // return that week.
            var o75 = new Date("December 31 " + (o53()-1) + " 00:00:00");
            return o75.o16("W");
        }
        
        // week 1, is the week that has the first thursday in it.
        // note that this value is not zero index.
        if (o74 <= 3) {
            // first day of the year fell on a thursday, or earlier.
            return 1 + Math.floor( ( o69() + o74 ) / 7 );
        } else {
            // first day of the year fell on a friday, or later.
            return 1 + Math.floor( ( o69() - ( 7 - o74 ) ) / 7 );
        }
    }
    function o72() {
        // Numeric representation of the day of the week
        return o25.o41();
    }
    
    function o53() {
        // A full numeric representation of a year, 4 digits

        // we first check, if getFullYear is supported. if it
        // is, we just use that. ppks code is nice, but wont
        // work with dates outside 1900-2038, or something like that
        if (o25.getFullYear) {
            var o77 = new Date("January 1 2001 00:00:00 +0000");
            var o12 = o77 .getFullYear();
            if (o12 == 2001) {              
                // i trust the method now
                return o25.getFullYear();
            }
        }
        // else, do this:
        // codes thanks to ppk:
        // http://www.xs4all.nl/~ppk/js/introdate.html
        var o12 = o25.o78();
        var o79 = o12 % 100;
        o79 += (o79 < 38) ? 2000 : 1900;
        return o79;
    }
    function o79() {
        // A two-digit representation of a year
        var o79 = o53()+"";
        return o79.substring(o79.length-2,o79.length);
    }
    function o69() {
        // The day of the year, zero indexed! 0 through 366
        var o62 = new Date("January 1 " + o53() + " 00:00:00");
        var o81 = o25.o66() - o62.o66();
        return Math.floor(o81/1000/60/60/24);
    }
        
    var o25 = this;
    if (o1) {
        // save time
        var o82 = o25.o66();
        o25.o83(o1);
    }
    
    var o84 = input.split("");
    var o86 = 0;
    while (o84[o86]) {
        if (o84[o86] == "\\\\") {
            // this is our way of allowing users to escape stuff
            o84.splice(o86,1);
        } else {
            if (o10(o18,o84[o86])) {
                o84[o86] = eval(o84[o86] + "()");
            }
        }
        o86++;
    }
    // reset time, back to what it was
    if (o82) {
        o25.o83(o82);
    }
    return o84.join("");
}

var o90 = new Date("1/1/2007 1:11:11");

for (o13 = 0; o13 < 500; ++o13) {
    var o91 = o90.o16("Y-m-d");
    var o92 = o90.o16("l, F d, Y g:i:s A");
    o90.o83(o90.o66() + 84266956);
}

// FIXME: Find a way to validate this test.
// https://bugs.webkit.org/show_bug.cgi?id=114849


var o93 = new Date() - o8;

o94.o95("### TIME:", o93, "ms");