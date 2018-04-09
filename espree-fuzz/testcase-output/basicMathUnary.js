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
            Number.o1, Number.MIN_VALUE, Number.NaN, Number.o2, Number.NEGATIVE_INFINITY,
            new Number(NaN), new Number(+0), new Number( -0), new Number(0), new Number(1),
            new Number(10.0), new Number(10.1),
            new Number(Number.o1), new Number(Number.MIN_VALUE), new Number(Number.NaN),
            new Number(Number.o2), new Number(Number.NEGATIVE_INFINITY),
            "", "hello", "hel" + "lo", "+0", "-0", "0", "1", "10.0", "10.1",
            new String(""), new String("hello"), new String("he" + "llo"),
            new Object(), [1,2,3], new Object(), [1,2,3] , o0
          ];

function o3(stdlib) {
    "use asm";

    var fround = stdlib.Math.fround;

    function o4(o5) {
        o5 = o5|0;
        return +(+(o5|0));
    }
    function o6(o5) {
        o5 = o5|0;
        return +(+(o5>>>0));
    }
    function o7(o5) {
        o5 = +o5;
        return +(+o5);
    }

    function o8(o5) {
        o5 = fround(o5);
        return fround(+o5);
    }

    function o9(o5) {
        o5 = o5|0;
        return (-o5)|0;
    }
    function o10(o5) {
        o5 = +o5;
        return +(-o5);
    }
    function o11(o5) {
        o5 = fround(o5);
        return fround(-o5);
    }

    function o12(o5) {
        o5 = o5|0;
        return (~o5)|0;
    }

    function o13(o5) {
        o5 = +o5;
        return (~~o5)|0;
    }

    function o14(o5) {
        o5 = o5|0;
        return (!o5)|0;
    }

    function o15(o5) {
        o5 = o5|0;
        return (!!o5)|0;
    }

    return {
        o4       : o4       ,
        o6      : o6      ,
        o7    : o7    ,
        o8     : o8    ,
        o9       : o9       ,
        o10    : o10    ,
        o11     : o11    ,
        o12    : o12    ,
        o13 : o13 ,
        o14    : o14    ,
        o15   : o15    ,
    };
}


var o16 = o3({Math:Math});

for (var o17=0; o17<all.length; ++o17) {
    print("i   +a["+o17+"](" + all[o17] +") = " + (o16.o4       (all[o17])));
    print("ui  +a["+o17+"](" + all[o17] +") = " + (o16.o6      (all[o17])));
    print("d   +a["+o17+"](" + all[o17] +") = " + (o16.o7    (all[o17])));
    print("f   +a["+o17+"](" + all[o17] +") = " + (o16.o8     (all[o17])));
    print("i   -a["+o17+"](" + all[o17] +") = " + (o16.o9       (all[o17])));
    print("d   -a["+o17+"](" + all[o17] +") = " + (o16.o10    (all[o17])));
    print("f   -a["+o17+"](" + all[o17] +") = " + (o16.o11     (all[o17])));
    print("i   ~a["+o17+"](" + all[o17] +") = " + (o16.o12    (all[o17])));
    print("i  ~~a["+o17+"](" + all[o17] +") = " + (o16.o13 (all[o17])));
    print("i   !a["+o17+"](" + all[o17] +") = " + (o16.o14    (all[o17])));
    print("i  !!a["+o17+"](" + all[o17] +") = " + (o16.o15   (all[o17])));
}
