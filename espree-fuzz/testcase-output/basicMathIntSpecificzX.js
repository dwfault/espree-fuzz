//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {}

var all = [ undefined, null,
            true, false, new Boolean(true), new Boolean(false),
            NaN, +0, -2, 0, 1, 10.0, 10.1, -1, -5, 5,
            124, 248, 654, 987, -1026, +98768.2546, -88754.15478,
            1<<32, o16.call, (1<<32)-1, 1<<31, -(1<<31), 1<<25, -1<<25,
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
        return (o5|o6)|0;
    }
    function o7(o5,o6) {
        o5 = o5|0;
        o6 = o6|0;
        return (o5&o6)|0;
    }
    function o8(o5,o6) {
        o5 = o5|0;
        o6 = o6|0;
        return (o5>>o6)|0;
    }
    function o9(o5,o6) {
        o5 = o5|0;
        o6 = o6|0;
        return (o5<<o6)|0;
    }
    function o10(o5,o6) {
        o5 = o5|0;
        o6 = o6|0;
        return (o5^o6)|0;
    }
    function o11(o5,o6) {
        o5 = o5|0;
        o6 = o6|0;
        return (o5>>>o6)|0;
    }
    function o12(o5,o6) {
        o5 = o5|0;
        o6 = o6|0;
        return ((o5|0)%(o6|0))|0;
    }

    return {
        o4  :o4
        ,o7 :o7
        ,o8 :o8
        ,o9 :o9
        ,o10 :o10
        ,o11:o11
        ,o12:o12
    };
}

var o13 = o3();     // produces AOT-compiled version
for (var o14=0; o14<all.length; ++o14) {
    for (var o15=0; o15<all.length; ++o15) {
        print("a["+o14+"](" + all[o14] +") |   a["+o15+"]("+all[o15]+") = " + (o13.o4(all[o14],all[o15])));
        print("a["+o14+"](" + all[o14] +") &   a["+o15+"]("+all[o15]+") = " + (o13.o7(all[o14],all[o15])));
        print("a["+o14+"](" + all[o14] +") >>  a["+o15+"]("+all[o15]+") = " + (o13.o8(all[o14],all[o15])));
        print("a["+o14+"](" + all[o14] +") <<  a["+o15+"]("+all[o15]+") = " + (o13.o9(all[o14],all[o15])));
        print("a["+o14+"](" + all[o14] +") ^   a["+o15+"]("+all[o15]+") = " + (o13.o10(all[o14],all[o15])));
        print("a["+o14+"](" + all[o14] +") >>> a["+o15+"]("+all[o15]+") = " + (o13.o11(all[o14],all[o15])));
        print("a["+o14+"](" + all[o14] +") %   a["+o15+"]("+all[o15]+") = " + (o13.o12(all[o14],all[o15])));
    }
}
