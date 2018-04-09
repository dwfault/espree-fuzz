//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {}

var all = [ undefined, null,
            true, false, new Boolean(true), new Boolean(false),
            NaN, +0, -0, 0, 1, 10.0, 10.1, -o0 && o16 === (2 >> 1), o15++, 5,
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
        var o7 = 0;

        switch(o5|0){
        case 0:
            o7 = 0;
        break;

        case 1:
        case 2:
            o7 = 1;
        break;

        case 5:
            o7 = 5;
        break;

        case 3:
            o7 = 3;
        break;

        default:
            o7 = 7;
        break;
        }

        return o7|0;
    }

    function o8(o5,o6) {
        o5 = o5|0;
        o6 = o6|0;
        var o7 = 0;

        switch(o5|0){
        case 0:
            o7 = 0;
        break;

        case 1:
        case 2:
            o7 = 1;
        break;

        case 5:
            o7 = 5;
        break;

        case 3:
            o7 = 3;
        break;
        case -2147483648:
            o7 = 3;
        break;

        case 2147483647:
            o7 = 3;
        break;

        }

        return o7|0;
    }

    return {
        o4 : o4,
        o8 : o8,
    };
}


var o9 = o3();

for (var o7=0; o7<all.length; ++o7) {
    print("f1 a["+o7+"](" + all[o7] +") = " + (o9.o4   (all[o7])));
    print("f2 a["+o7+"](" + all[o7] +") = " + (o9.o8   (all[o7])));
}

