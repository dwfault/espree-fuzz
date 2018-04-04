//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {}

var all = [ undefined, null,
            true, false, new Boolean(true), new Boolean(false),
            NaN, +0, -0, 0, 1, 10.0, 10.1, -1, -5, 5,
            124, 248, 654, 987, -1026, +98768.2546, -88754.15478,
            1<<32, -(1<<32), (1<<32)-1, 1<<31, -(1<<31), 1<<25, -1<<25,
            Number.o6, Number.MIN_VALUE, Number.NaN, Number.o8, Number.NEGATIVE_INFINITY,
            new Number(NaN), new Number(+0), new Number( -0), new Number(0), new Number(1),
            new Number(10.0), new Number(10.1),
            new Number(Number.o6), new Number(Number.MIN_VALUE), new Number(Number.NaN),
            new Number(Number.o8), new Number(Number.NEGATIVE_INFINITY),
            "", "hello", "hel" + "lo", "+0", "-0", "0", "1", "10.0", "10.1",
            new String(""), new String("hello"), new String("he" + "llo"),
            new Object(), [1,2,3], new Object(), [1,2,3] , o0
          ];

function o12() {
    "use asm";

    function o13(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        return (o14|o15)|0;
    }
    function o16(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        return (o14&o15)|0;
    }
    function o17(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        return (o14>>o15)|0;
    }
    function o18(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        return (o14<<o15)|0;
    }
    function o19(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        return (o14^o15)|0;
    }
    function o20(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        return (o14>>>o15)|0;
    }
    function o21(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        return ((o14|0)%(o15|0))|0;
    }

    return {
        o13  :o13
        ,o16 :o16
        ,o17 :o17
        ,o18 :o18
        ,o19 :o19
        ,o20:o20
        ,o21:o21
    };
}

var o22 = o12();     // produces AOT-compiled version
for (var o23=0; o23<all.length; ++o23) {
    for (var o25=0; o25<all.length; ++o25) {
        print("a["+o23+"](" + all[o23] +") |   a["+o25+"]("+all[o25]+") = " + (o22.o13(all[o23],all[o25])));
        print("a["+o23+"](" + all[o23] +") &   a["+o25+"]("+all[o25]+") = " + (o22.o16(all[o23],all[o25])));
        print("a["+o23+"](" + all[o23] +") >>  a["+o25+"]("+all[o25]+") = " + (o22.o17(all[o23],all[o25])));
        print("a["+o23+"](" + all[o23] +") <<  a["+o25+"]("+all[o25]+") = " + (o22.o18(all[o23],all[o25])));
        print("a["+o23+"](" + all[o23] +") ^   a["+o25+"]("+all[o25]+") = " + (o22.o19(all[o23],all[o25])));
        print("a["+o23+"](" + all[o23] +") >>> a["+o25+"]("+all[o25]+") = " + (o22.o20(all[o23],all[o25])));
        print("a["+o23+"](" + all[o23] +") %   a["+o25+"]("+all[o25]+") = " + (o22.o21(all[o23],all[o25])));
    }
}
