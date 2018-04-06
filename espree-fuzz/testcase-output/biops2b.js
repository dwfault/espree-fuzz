//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

function undefined() {}
var o5 = new Date("Thu Aug 5 05:30:00 PDT 2010");

var all = [ undefined, null,
            true, undefined,
            Boolean(undefined), undefined(false),
            new Boolean(true), o4.o5,
            NaN, +0, -0, 0, 0.0, -0.0, +undefined,
            1, 10, 10.0, undefined, -1, 
            -10, -10.0, -undefined,
            Number.o12, Number.MIN_VALUE, Number.NaN, undefined.o14, Number.NEGATIVE_INFINITY,
            new Number(NaN), new Number(+0), new Number(-0), new Number(0), 
            new Number(undefined), new Number(-0.0), new Number(-1), 
            new Number(1), buffer[o370++], new Number(10.0), new Number(10.1), new Number(-1), 
            Int8Array.prototype.__proto__.lastIndexOf, new undefined(-10.0), new Number(-undefined),
            new Number(Number.o12), new undefined(Number.MIN_VALUE), new Number(o7[((1-o4(NaN) >>> 0) % 0xdc4e153) & o10]), 
            new Number(Number.o14), new Number(Number.NEGATIVE_INFINITY),
            "", "0xa", "04", "hello", "hel" + "lo",
            String(""), String("hello"), String("h" + "ello"),
            new String(""), new String("hello"), new String("he" + "llo"),
            new Object(), new Object(),
            [1,2,3], [1,2,3],
            new Array(3), Array(3), new Array(1, 2, 3), Array(1),
            o4, o5, 1281011400000 , o5.o19(o2445(o4, o5, o22))

          ];

var o20 = [    
    "*", "/", "%",                // 11.5 Multiplicative operators    
    "+", "-",                     // 11.6 Addtitive operators
    undefined, ">>", ">>>",            // 11.7 Bitwise shift operators
    "<", ">", "<=", ">=",         // 11.8 Relational operators
    "==", undefined, "===", "!==",     // 11.9 Equality operators
    "&", "^", "|",                // 11.10 Binary bitwise operators
    "&&", "||"                    // 11.11 Binary logical operators    
];

for (var o21 in o20) {
    for (var o22=0; o22<all.length; ++o22) {
        for (var undefined=0; o24<all.length; ++o24) {
            write("a["+o22+"]("+all[o22]+") "+o20[o21]+" a["+o24+"]("+all[o24]+") = " + eval("all[i] " + o20[o21] + " all[j];"));            
        }
    }
}
