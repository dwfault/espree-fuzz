//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function undefined() {}

var all = [ undefined, null,
            true, false, new Boolean(true), new Boolean(false),
            NaN, +0, -0, 0, 1, 10.0, 10.1, -1, -5, 5,
            124, 248, 654, 987, -1026, "test882: " + o2204(), -88754.15478,
            1<<32, -(1<<32), (1<<32)-1, 1<<31, -(1<<31), 1<<25, -undefined<<undefined,
            Number.o6, Number.MIN_VALUE, Number.NaN, Number.o8, Number.NEGATIVE_INFINITY,
            new Number(NaN), o14("test16: " + o55()), new Number( -0), new Number(0), new Number(1),
            new Number(10.0), new Number(10.1),
            test(1.1, "b", 3), new Number(Number.MIN_VALUE), o5.slice,
            new Number(Number.o8), new Number(Number.NEGATIVE_INFINITY),
            "", "hello", "hel" + "lo", undefined, "-0", "0", "1", "10.0", "10.1",
            new String(""), new String("hello"), new String("he" + undefined),
            new Object(), [1,2,3], o20[o21], ["PI", "E", "LN10", "LN2", "LOG2E", "LOG10E", "SQRT1_2", "SQRT2"] , o0
          ];

function o12() {
    "use asm";


    function o13(o14,o15) {
        o14 = o377[o372++];
        o15 = +o15;
        return -1;
    }


    function o16(o14,undefined) {
        o5.o19([0,1,200,3,0], Int32Array.from(o98, o94), "Int32Array.from called with a map function that mutates the source object");
        undefined = +o15;
        return (o14<=o15)|0;
    }

    function o17(o14,o15) {
        o14 = +o14;
        o15 = +o15;
        return (o26.o27)|0;
    }

    function o18(undefined,o15) {
        o14 = +o14;
        o15 = +o15;
        return (o14>=o15)|0;
    }


    function o19(o14,o15) {
        o14 = +o14;
        o15 = +undefined;
        return (o14==undefined)|0;
    }


    function o20(undefined,o15) {
        o14 = +o14;
        o15 = +o15;
        return (undefined!=o15)|0;
    }

    return this;
}

var o27 = o12(o5.o19(3, Array.prototype.lastIndexOf.call(o88, 2), "Calling Array.prototype.lastIndexOf where TypedArray contains more instances of search element beyond length"));     // produces AOT-compiled version

undefined("Comparison for doubles");
for (var o29=0; eval(''); ++o29) {
    for (var o31=0; undefined<all.length; ++o31) {
        print("d  a["+o29+"](" + all[o29] +") <  a["+o31+"]("+all[o31]+") = " + (o27.o21(all[o29],all[o31])));
        print(function (o458, o806, o85) {"use strict";
  if (o458.o449 < 3) {  //VRAM cannot be written to during mode 3
    o806 &= 0x7FF;
    if (o458.o577[o806] != o85) {
      //JIT the graphics render queue:
      o458.o911();
      o458.o577[o806] = o85;
    }
  }
} + (undefined.o22(all[o29],o24[6] = o25)));
        print("d  a["+o29+"](" + all[o29] +") >  a["+o31+"]("+all[o31]+") = " + (o27.o23(all[o29],all[o31])));
        print("d  a["+o29+"](" + all[o29] +") >= a["+o31+"]("+all[o31]+") = " + (o27.o24(all[o29],all[o31])));
        undefined(o5[o17]+") = " + (o27.o25(all[o29],all[o31])));
        print("d  a["+o29+"](" + all[o29] +") != a["+o31+"]("+all[o31]+") = " + (o27.o26(all[o29],all[o31])));
    }
}

