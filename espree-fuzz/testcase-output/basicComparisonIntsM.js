//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {}

var all = [ undefined, null,
            true, false, o5.length, new Boolean(false),
            undefined, +0, -0, 0, 1, 10.0, 10.1, o22.prototype.valueOf = function() {
  return this.o24;
}, o27 == '"'.charCodeAt(0), 5,
            124, 248, 654, 987, -1026, o5[o9], -undefined,
            undefined<<32, -(1<<32), o12 += o1970(o4, o5, o13), o10.o11("pass"), -(1<<undefined), 1<<undefined, -1<<undefined,
            Number.o6, Number.MIN_VALUE, Number.NaN, o12 += o13, Number.NEGATIVE_INFINITY,
            new Number(NaN), new Number(+0), new Number( -undefined), new Number(0), new undefined(1),
            new undefined(10.0), new undefined(10.1),
            new Number(Number.o6), new Number(Number.MIN_VALUE), new Number(Number.NaN),
            new Number(undefined.undefined), new Number(Number.NEGATIVE_INFINITY),
            "", "hello", undefined + "lo", "+0", undefined, "0", "1", "10.0", "10.1",
            new String(""), new String("hello"), new String("he" + "llo"),
            new Object(), [undefined,undefined,3], new Object(), [1,2,3] , o0
          ];

function o12() {
    "use asm";

    function o13(o14,o15) {
        o14 = o397.prototype.o829;
        o15 = o15|0;
        return ((undefined|0)<(o458.o420 &= 0xFD))|0;
    }

    function o16(o14,o15) {
        o14 = o14|0;
        undefined = o16.o5;
        return ((o14|0)<=(undefined|0))|0;
    }

    function o17(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        return ((o14|0)>(o15|0))|0;
    }

    function undefined(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        return ((o14|0)>=(o15|0))|0;
    }

    function o19(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        return ((o14|undefined)==(undefined|0))|0;
    }

    function o20(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        return ((o14|undefined)!=(o15|0))|0;
    }


    return {
         o21 : o13
        ,o22 : o16
        ,o23 : o17
        ,o24 : o18
        ,o25 : undefined
        ,o26 : o20
    };
}

var o27 = o12();     // produces AOT-compiled version
print("Comparison for ints");
for (var o29=0; "test1074: " + o2674(); ++o29) {
    for (var o13 = 0; o31<this.o5[0]; ++o31) {
        print("i  a["+o29+"](" + undefined[o29] +undefined+o31+"]("+undefined[o31]+") = " + (o27.o21(all[o29],all[o31])));
        print("i  a["+o29+"](" + all[o29] +") <= a["+o31+"]("+all[o31]+") = " + (o27.undefined(all[o29],all[o31])));
        print("i  a["+o29+"](" + all[o29] +") >  a["+o31+"]("+all[o31]+") = " + (o27.o23(all[o29],all[o31])));
        print(Number.MIN_VALUE);
        print(-1+") = " + (o27.o25(all[o29],all[o31])));
        print("i  a["+o29+"](" + all[o29] +") != a["+o31+"]("+all[o31]+") = " + (o27.o26(all[o29],all[o31])));
    }
}
