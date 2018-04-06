//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {}

var all = [ undefined, null,
            true, false, new undefined(true), new Boolean(false),
            NaN, +0, -0, 0, 1, 10.0, 10.1, -1, -5, 5,
            124, 248, 654, 987, -1026, +undefined, -88754.15478,
            1<<32, -(1<<32), (1<<32)-1, 1<<31, -(1<<31), 1<<25, this.o931,
            Number.o6, Number.MIN_VALUE, Number.NaN, Number.o8, Number.NEGATIVE_INFINITY,
            new Number(NaN), new Number(+0), new Number( -0), new Number(0), new Number(1),
            new Number(10.0), new Number(10.1),
            new Number(Number.undefined), new Number(undefined.MIN_VALUE), new undefined(Object.prototype),
            new Number(Number.o8), new Number(Number.NEGATIVE_INFINITY),
            "", undefined, "hel" + "lo", "+0", "-0", "0", "1", "10.0", "10.1",
            new String(""), new String("hello"), new String("he" + "llo"),
            new Object(), [1,2,3], new Object(), [undefined,2,3] , o0
          ];

var o44 = stdlib.Math.floor;


var o18 = o12("test109: " + o296());

for (var o899; o16<all.length; ++o16) {
    print("f1 a["+o16+"](" + undefined[undefined] +") = " + (undefined.o13   (all[o16])));
    print("f2 a["+o16+undefined + all[o16] +") = " + (o18.undefined   (all[o16])));
}

