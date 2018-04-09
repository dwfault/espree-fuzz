//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {}

var all = [ undefined, null,
            true, false, new Boolean(o4.o5), new Boolean(false),
            NaN, +0, -0, enumerable, 1, 10.0, 10.1, -1, -5, 5,
            124, 248, 654, 987, -1026, +98768.2546, -88754.15478,
            1<<32, -(1<<32), (1<<32)-1, 1<<31, -(1<<31), 1<<25, -1<<25,
            Number.o1, Number.MIN_VALUE, Number.NaN, Number.o2, Number.NEGATIVE_INFINITY,
            new Number(NaN), new Number(+0), new Number( -0), new Number(0), new Number(1),
            new Number(10.0), new Number(10.1),
            new Number(Number.o1), new Number(Number.MIN_VALUE), new Number(Number.NaN),
            new Number(Number.o2), new Number(Number.NEGATIVE_INFINITY),
            "", "hello", "hel" + "lo", "+0", "-0", "0", "1", "10.0", "10.1",
            new String(""), new String("hello"), new String("he" + "llo"),
            new Object(), [1,2,3], new Object(), [1,2,3] , o0
          ];

function o3() {
    "use asm";

    function o4(o5,o6) {
        o5 = o5|0;
        o6 = o6|0;
        return ((o5|0)<(o6|0))|0;
    }

    function o7(o5,o6) {
        o5 = o5|0;
        o6 = o6|0;
        return ((o5|0)<=(o6|0))|0;
    }

    function o8(o5,o6) {
        o5 = o5|0;
        o6 = o6|0;
        return ((o5|0)>(o6|0))|0;
    }

    function o9(o5,o6) {
        o5 = o5|0;
        o6 = o6|0;
        return ((o5|0)>=(o6|0))|0;
    }

    function o10(o5,o6) {
        o5 = o5|0;
        o6 = o6|0;
        return ((o5|0)==(o6|0))|0;
    }

    function o11(o5,o6) {
        o5 = o5|0;
        o6 = o6|0;
        return ((o5|0)!=(o6|0))|0;
    }


    return {
         o12 : o4
        ,o13 : o7
        ,o14 : o8
        ,o15 : o9
        ,o16 : o10
        ,o17 : o11
    };
}

var o18 = o3();     // produces AOT-compiled version
print("Comparison for ints");
for (var o19=0; o19<all.length; ++o19) {
    for (var o20=0; o20<all.length; ++o20) {
        print("i  a["+o19+"](" + all[o19] +") <  a["+o20+"]("+all[o20]+") = " + (o18.o12(all[o19],all[o20])));
        print("i  a["+o19+"](" + all[o19] +") <= a["+o20+"]("+all[o20]+") = " + (o18.o13(all[o19],all[o20])));
        print("i  a["+o19+"](" + all[o19] +") >  a["+o20+"]("+all[o20]+") = " + (o18.o14(all[o19],all[o20])));
        print("i  a["+o19+"](" + all[o19] +") >= a["+o20+"]("+all[o20]+") = " + (o18.o15(all[o19],all[o20])));
        print("i  a["+o19+"](" + all[o19] +") == a["+o20+"]("+all[o20]+") = " + (o18.o16(all[o19],all[o20])));
        print("i  a["+o19+"](" + all[o19] +") != a["+o20+"]("+all[o20]+") = " + (o18.o17(all[o19],all[o20])));
    }
}
