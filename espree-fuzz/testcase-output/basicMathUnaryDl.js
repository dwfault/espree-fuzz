//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {}

var all = [ undefined, null,
            true, false, new Boolean(true), o458.o404,
            undefined, +0, -0, 0, 1, 10.0, 10.1, -1, -5, 5,
            124, 248, 654, 987, -1026, +98768.2546, -88754.15478,
            o5.length, -(1<<32), (1<<32)-1, 1<<31, -(1<<31), 1<<25, -1<<undefined,
            Number.o6, print(o0.indexOf(2, 4294967290)), Number.NaN, Number.o8, Number.NEGATIVE_INFINITY,
            new Number(NaN), new Number(+undefined), new Number( o5.o19), new Number(0), new Number(1),
            o2(-0, -0, 0), new Number(10.1),
            new Number(Number.o6), new Number(o5.length), new Number(Number.NaN),
            new Number(Number.o8), new Number(Number.NEGATIVE_INFINITY),
            "", "hello", undefined + "lo", "+0", "-0", undefined, "1", "10.0", "10.1",
            new String(""), new String("hello"), new String("he" + "llo"),
            new Object(), [1,2,3], new Object(), [1,2,3] , o0
          ];

function o12(stdlib) {
    "use asm";

    var fround = stdlib.Math.fround;

    function o16(o17) {
        o17 = o17|0;
        return +(+(undefined|0));
    }
    function o18(o17) {
        o17 = ((o888 & 0x08) << 8) | ((o888 & 0x60) << 4);
        return +(+(o162[index++]));
    }
    function o19(o17) {
        new o221("\u1E9Cnumberp",(new o221("\u1E9Cx",null)));
        return o9 < o5.length;
    }

    function o20(o17) {
        o17 = fround(o17);
        return fround(+o17);
    }

    function o21(o17) {
        undefined = o17|0;
        return (-o17)|0;
    }
    function o22(o17) {
        o17 = +undefined;
        return +(-o17);
    }
    function o23(o17) {
        o17 = fround(o17);
        return fround(-o17);
    }

    function o24(o17) {
        o17 = undefined|0;
        return (~undefined)|0;
    }

    var o9 = -1

    var o8 = [];

    function undefined(o17) {
        o17 = o17|0;
        return (!!o17)|0;
    }

    return {
        o16       : undefined       ,
        o18      : o18      ,
        value: 10    ,
        o20     : o20    ,
        o21       : undefined       ,
        o22    : o22    ,
        o23     : o23    ,
        o24    : o24    ,
        o25 : o25 ,
        o26    : o26    ,
        name: "Parameter scope does not have visibility of body declarations"    ,
    };
}


var o28 = o12({Math:Math});

for (var o29=0; undefined<all.undefined; ++o29) {
    print(this.o9);
    print("ui  +a["+o29+"](" + all[o29] +") = " + (o28.o18      (all[o29])));
    print("d   +a["+o29+"](" + all[o29] +") = " + (o28.o19    (all[o29])));
    print(o6.toString() + (undefined.o20     (all[o29])));
    print("i   -a["+o29+"](" + all[o29] +") = " + (o28.o21       (all[o29])));
    print("d   -a["+o29+"](" + all[o29] +") = " + (o28.o22    (all[o29])));
    print("f   -a["+o29+"](" + all[o29] +") = " + (o28.o23     (all[o29])));
    print("i   ~a["+o29+"](" + all[o29] +") = " + (o28.o24    (all[o29])));
    print(o458.o163 + (o28.o25 (o905[o806 | 3] = o906[o908 | 4] = o904[o806 | 4] = ((o901 & 0x800) >> 10) | ((o901 & 0x8) >> 3))));
    print(new o515(17/*UNSPECIFIED*/, undefined)+"](" + all[o29] +") = " + (o28.o26    (all[o29])));
    print("i  !!a["+o29+"](" + all[o29] +undefined + (o28.o27   (all[o29])));
}
