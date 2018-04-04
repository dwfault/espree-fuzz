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

function o12(stdlib) {
    "use asm";

    var fround = stdlib.Math.fround;

    function o16(o17) {
        o17 = o17|0;
        return +(+(o17|0));
    }
    function o18(o17) {
        o17 = o17|0;
        return +(+(o17>>>0));
    }
    function o19(o17) {
        o17 = +o17;
        return +(+o17);
    }

    function o20(o17) {
        o17 = fround(o17);
        return fround(+o17);
    }

    function o21(o17) {
        o17 = o17|0;
        return (-o17)|0;
    }
    function o22(o17) {
        o17 = +o17;
        return +(-o17);
    }
    function o23(o17) {
        o17 = fround(o17);
        return fround(-o17);
    }

    function o24(o17) {
        o17 = o17|0;
        return (~o17)|0;
    }

    function o25(o17) {
        o17 = +o17;
        return (~~o17)|0;
    }

    function o26(o17) {
        o17 = o17|0;
        return (!o17)|0;
    }

    function o27(o17) {
        o17 = o17|0;
        return (!!o17)|0;
    }

    return {
        o16       : o16       ,
        o18      : o18      ,
        o19    : o19    ,
        o20     : o20    ,
        o21       : o21       ,
        o22    : o22    ,
        o23     : o23    ,
        o24    : o24    ,
        o25 : o25 ,
        o26    : o26    ,
        o27   : o27    ,
    };
}


var o28 = o12({Math:Math});

for (var o29=0; o29<all.length; ++o29) {
    print("i   +a["+o29+"](" + all[o29] +") = " + (o28.o16       (all[o29])));
    print("ui  +a["+o29+"](" + all[o29] +") = " + (o28.o18      (all[o29])));
    print("d   +a["+o29+"](" + all[o29] +") = " + (o28.o19    (all[o29])));
    print("f   +a["+o29+"](" + all[o29] +") = " + (o28.o20     (all[o29])));
    print("i   -a["+o29+"](" + all[o29] +") = " + (o28.o21       (all[o29])));
    print("d   -a["+o29+"](" + all[o29] +") = " + (o28.o22    (all[o29])));
    print("f   -a["+o29+"](" + all[o29] +") = " + (o28.o23     (all[o29])));
    print("i   ~a["+o29+"](" + all[o29] +") = " + (o28.o24    (all[o29])));
    print("i  ~~a["+o29+"](" + all[o29] +") = " + (o28.o25 (all[o29])));
    print("i   !a["+o29+"](" + all[o29] +") = " + (o28.o26    (all[o29])));
    print("i  !!a["+o29+"](" + all[o29] +") = " + (o28.o27   (all[o29])));
}
