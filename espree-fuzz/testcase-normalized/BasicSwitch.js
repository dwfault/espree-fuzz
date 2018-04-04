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
        var o16 = 0;

        switch(o14|0){
        case 0:
            o16 = 0;
        break;

        case 1:
        case 2:
            o16 = 1;
        break;

        case 5:
            o16 = 5;
        break;

        case 3:
            o16 = 3;
        break;

        default:
            o16 = 7;
        break;
        }

        return o16|0;
    }

    function o17(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        var o16 = 0;

        switch(o14|0){
        case 0:
            o16 = 0;
        break;

        case 1:
        case 2:
            o16 = 1;
        break;

        case 5:
            o16 = 5;
        break;

        case 3:
            o16 = 3;
        break;
        case -2147483648:
            o16 = 3;
        break;

        case 2147483647:
            o16 = 3;
        break;

        }

        return o16|0;
    }

    return {
        o13 : o13,
        o17 : o17,
    };
}


var o18 = o12();

for (var o16=0; o16<all.length; ++o16) {
    print("f1 a["+o16+"](" + all[o16] +") = " + (o18.o13   (all[o16])));
    print("f2 a["+o16+"](" + all[o16] +") = " + (o18.o17   (all[o16])));
}

