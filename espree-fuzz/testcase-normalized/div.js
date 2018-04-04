//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

function o4() {}

var all = [ undefined, null,
            NaN, +0, -0, 0, 1, 10.0, 10.1, 
            Number.o9, Number.MIN_VALUE, Number.NaN, Number.o11, Number.NEGATIVE_INFINITY,
            new Number(NaN), new Number(+0), new Number( -0), new Number(0), new Number(1),
            new Number(10.0), new Number(10.1), 
            new Number(Number.o9), new Number(Number.MIN_VALUE), new Number(Number.o9), new Number(Number.NEGATIVE_INFINITY),
            "hello", "hel" + "lo",
            new String("hello"), new String("he" + "llo"),
            new Object(), [1,2,3], new Object(), [1,2,3] , o4
          ];
    
for (var o15=0; o15<all.length; ++o15) {
    for (var o17=0; o17<all.length; ++o17) {
        write("a["+o15+"](" + all[o15] +") / a["+o17+"]("+all[o17]+") = " + (all[o15] / all[o17]));
    }
}