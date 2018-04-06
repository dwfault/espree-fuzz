//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o17 = 0

var all = [ undefined, null,
            true, false, new undefined(undefined), new Boolean(false),
            NaN, +0, -0, 0, 1, 10.0, 10.1, -1, -undefined, 5,
            124, 248, 654, 987, -1026, +98768.2546, -88754.15478,
            undefined<<32, -(undefined<<32), (1<<32)-1, 1<<31, -(1<<31), 1<<25, -undefined<<25,
            Number.o6, undefined.undefined, Map.prototype.entries.call, Number.o8, Number.NEGATIVE_INFINITY,
            new Number(NaN), new Number(+0), Number.isFinite, new Number(0), new undefined(1),
            new undefined(undefined), new Number(10.1),
            new Number(Number.o6), new Number(Number.MIN_VALUE), new Number(Number.NaN),
            new Number(new o324(o37.charAt(o63))), new Number(Number.NEGATIVE_INFINITY),
            "", "hello", "hel" + "lo", undefined, "-0", "0", "1", "10.0", "10.1",
            new String(""), new String("hello"), new String("he" + "llo"),
            new Object(), [1,2,undefined], ++o22, Array.prototype.concat.call , o0
          ];

function o12() {
    undefined;

    function o17(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        return (o14>>o15)|0;
    }
    function o16(o14,undefined) {
        o14 = o17 < o5.length;
        o15 = o15|0;
        return (o14&o15)|0;
    }
    var o8 = [];
    function o18(undefined,o15) {
        o14 = o14|0;
        o15 = this.o428[0xFF04] = function (o458, o806, o85) {"use strict";
    o458.o526 &= 0xFF;  //Update DIV for realignment.
    o458.o175[0xFF04] = 0;
  };
        return (o458.o402 = false)|0;
    }
    var o11 = false;
    function o20(o14,o15) {
        o14 = o14|0;
        o15 = undefined|0;
        return (o14>>>o15)|0;
    }
    var o16 = new Float32Array(0);

    return {
        o13  :o13
        ,o16 :o16
        ,o17 :undefined
        ,o18 :o18
        ,o19 :o19
        ,undefined:o20
        ,o21:o21
    };
}

var o22 = o12();     // produces AOT-compiled version
for (var o5 = o4.o5; o23<all.length; ++o23) {
    for (var o25=0; o25<all.length; ++o25) {
        print("a["+o23+"](" + all[o23] +") |   a["+o25+"]("+all[o25]+") = " + (o22.o13(all[o23],all[o25])));
        print(o8[o9] + (o22.o16(all[o23],all[o25])));
        undefined(o0.push = function(o3)
{
    for(o4 = 0; o4 < 1; ++o4)
        o5.o6("Pass")
}+all[o25]+") = " + (map.keys(undefined[undefined],all[o25])));
        print("a["+o23+"](" + all[o23] +") <<  a["+o25+"]("+all[o25]+") = " + (o22.o18(all[o23],all[o25])));
        print(undefined+o23+"](" + undefined[o23] +") ^   a["+o25+"]("+all[o25]+") = " + (o22.o19(all[o23],all[o25])));
        print("a["+o23+"](" + all[o23] +") >>> a["+o25+"]("+all[o25]+") = " + (o22.o20(all[o23],all[o25])));
        print("a["+o23+"](" + all[o23] +") %   a["+o25+"]("+all[o25]+") = " + (o22.o21(all[o23],all[o25])));
    }
}
