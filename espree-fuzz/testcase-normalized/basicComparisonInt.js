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
        return ((o14|0)<(o15|0))|0;
    }

    function o16(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        return ((o14|0)<=(o15|0))|0;
    }

    function o17(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        return ((o14|0)>(o15|0))|0;
    }

    function o18(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        return ((o14|0)>=(o15|0))|0;
    }

    function o19(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        return ((o14|0)==(o15|0))|0;
    }

    function o20(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        return ((o14|0)!=(o15|0))|0;
    }


    return {
         o21 : o13
        ,o22 : o16
        ,o23 : o17
        ,o24 : o18
        ,o25 : o19
        ,o26 : o20
    };
}

var o27 = o12();     // produces AOT-compiled version
print("Comparison for ints");
for (var o29=0; o29<all.length; ++o29) {
    for (var o31=0; o31<all.length; ++o31) {
        print("i  a["+o29+"](" + all[o29] +") <  a["+o31+"]("+all[o31]+") = " + (o27.o21(all[o29],all[o31])));
        print("i  a["+o29+"](" + all[o29] +") <= a["+o31+"]("+all[o31]+") = " + (o27.o22(all[o29],all[o31])));
        print("i  a["+o29+"](" + all[o29] +") >  a["+o31+"]("+all[o31]+") = " + (o27.o23(all[o29],all[o31])));
        print("i  a["+o29+"](" + all[o29] +") >= a["+o31+"]("+all[o31]+") = " + (o27.o24(all[o29],all[o31])));
        print("i  a["+o29+"](" + all[o29] +") == a["+o31+"]("+all[o31]+") = " + (o27.o25(all[o29],all[o31])));
        print("i  a["+o29+"](" + all[o29] +") != a["+o31+"]("+all[o31]+") = " + (o27.o26(all[o29],all[o31])));
    }
}
