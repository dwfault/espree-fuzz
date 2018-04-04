//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

function o4() {}

var all = [ undefined, null,
            true, false, new Boolean(true), new Boolean(false),
            NaN, +0, -0, 0, 1, 10.0, 10.1, 
            Number.o10, Number.MIN_VALUE, Number.NaN, Number.o12, Number.NEGATIVE_INFINITY,
            new Number(NaN), new Number(+0), new Number( -0), new Number(0), new Number(1),
            new Number(10.0), new Number(10.1), 
            new Number(Number.o10), new Number(Number.MIN_VALUE), new Number(Number.NaN), 
            new Number(Number.o12), new Number(Number.NEGATIVE_INFINITY),
            "", "hello", "hel" + "lo",
            new String(""), new String("hello"), new String("he" + "llo"),
            new Object(), [1,2,3], new Object(), [1,2,3] , o4
          ];

for (var o16=0; o16<all.length; ++o16) {
    for (var o18=0; o18<all.length; ++o18) {
        write("a["+o16+"](" + all[o16] +") + a["+o18+"]("+all[o18]+") = " + (all[o16] + all[o18]));
    }
}