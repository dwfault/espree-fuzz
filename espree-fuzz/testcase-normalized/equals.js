//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) {
    o1 = o1.replace(/\(PDT\)/g, "(Pacific Daylight Time)")
         .replace(/\(PST\)/g, "(Pacific Standard Time)");
    o3.o4(o1 + "");
}

function o5() {}

var o6 = new Object(); o6.o8 = function() { return 100; }
var o9 = new Object(); o9.o8 = function() { return false; }
var o10 = new Object(); o10.o8 = function() { return "hello"; }

var o11 = new Number(10); o11.o8 = function() { return 100; }
var o13 = new Number(10); o13.o8 = function() { return false; }
var o14 = new Number(10); o14.o8 = function() { return "hello"; }

var o15 = new Boolean(true); o15.o8 = function() { return 100; }
var o17 = new Boolean(true); o17.o8 = function() { return false; }
var o18 = new Boolean(true); o18.o8 = function() { return "hello"; }

var o19 = new String("world"); o15.o8 = function() { return 100; }
var o21 = new String("world"); o17.o8 = function() { return false; }
var o22 = new String("world"); o18.o8 = function() { return "hello"; }

var all = [ undefined, null,
            true, false,
            Boolean(true), Boolean(false),
            new Boolean(true), new Boolean(false),
            NaN, +0, -0, 0, 0.0, -0.0, +0.0,
            1, 10, 10.0, 10.1, -1,
            -10, -10.0, -10.1,
            Number.o26, Number.MIN_VALUE, Number.NaN, Number.o28, Number.NEGATIVE_INFINITY,
            Number(10), Number(1), Number(0.0),
            new Number(NaN), new Number(+0), new Number(-0), new Number(0),
            new Number(0.0), new Number(-0.0), new Number(+0.0),
            new Number(1), new Number(10), new Number(10.0), new Number(10.1), new Number(-1),
            new Number(-10), new Number(-10.0), new Number(-10.1),
            new Number(Number.o26), new Number(Number.MIN_VALUE), new Number(Number.NaN),
            new Number(Number.o28), new Number(Number.NEGATIVE_INFINITY),
            "", "hello", "hel" + "lo",
            String(""), String("hello"), String("h" + "ello"),
            new String(""), new String("hello"), new String("he" + "llo"),
            new Object(), new Object(),
            [1,2,3], [1,2,3], [],
            new Array(3), Array(3), new Array(1,2,3), Array(1),
            o5, new o5(),
            o6, o9, o10,
            o11, o13, o14,
            o15, o17, o18,
            o19, o21, o22,
            new Date("Thu Oct 24 00:15:01 UTC+0530 1974"), new Date("Wed Oct 23 11:45:01 PDT 1974")
          ];

for (var o32=0; o32<all.length; ++o32) {
    for (var o34=0; o34<all.length; ++o34) {
        write("a["+o32+"]("+all[o32]+") == a["+o34+"]("+all[o34]+") : " + (all[o32] == all[o34]));
        write("a["+o32+"]("+all[o32]+") != a["+o34+"]("+all[o34]+") : " + (all[o32] != all[o34]));
    }
}
