//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o0) { o1.o2(o0 + ""); }

function o3() {}
var o4 = new Date("Thu Aug 5 05:30:00 PDT 2010");

var all = [ undefined, null,
            true, false,
            Boolean(true), Boolean(false),
            new Boolean(true), new Boolean(false),
            NaN, +0, -0, 0, 0.0, -0.0, +0.0,
            1, 10, 10.0, 10.1, -1, 
            -10, -10.0, -10.1,
            Number.o5, Number.MIN_VALUE, Number.NaN, Number.o6, Number.NEGATIVE_INFINITY,
            new Number(NaN), new Number(+0), new Number(-0), new Number(0), 
            new Number(0.0), new Number(-0.0), new Number(+0.0), 
            new Number(1), new Number(10), new Number(10.0), new Number(10.1), new Number(-1), 
            new Number(-10), new Number(-10.0), new Number(-10.1),
            new Number(Number.o5), new Number(Number.MIN_VALUE), new Number(Number.NaN), 
            new Number(Number.o6), new Number(Number.NEGATIVE_INFINITY),
            "", "0xa", "04", "hello", "hel" + "lo",
            String(""), String("hello"), String("h" + "ello"),
            new String(""), new String("hello"), new String("he" + "llo"),
            new Object(), new Object(),
            [1,2,3], [1,2,3],
            new Array(3), Array(3), new Array(1, 2, 3), Array(1),
            o3, o4, 1281011400000 , o4.o7()

          ];

var o8 = [    
    "*", "/", "%",                // 11.5 Multiplicative operators    
    "+", "-",                     // 11.6 Addtitive operators
    "<<", ">>", ">>>",            // 11.7 Bitwise shift operators
    "<", ">", "<=", ">=",         // 11.8 Relational operators
    "==", "!=", "===", "!==",     // 11.9 Equality operators
    "&", "^", "|",                // 11.10 Binary bitwise operators
    "&&", "||"                    // 11.11 Binary logical operators    
];

for (var o9 in o8) {
    for (var o10=0; o10<all.length; ++o10) {
        for (var o11=0; o11<all.length; ++o11) {
            write("a["+o10+"]("+all[o10]+") "+o8[o9]+" a["+o11+"]("+all[o11]+") = " + eval("all[i] " + o8[o9] + " all[j];"));            
        }
    }
}
