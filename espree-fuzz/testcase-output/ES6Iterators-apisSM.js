//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Iterators Built-In APIs tests -- verifies the shape and basic behavior of the built-in iterators (Array, String, Map, Set)

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

function o2() {
    var map = new Map();

    map.set(1, 6);
    map.set(2, 7);
    map.set(3, 8);
    map.set(4, 9);
    map.set(5, 10);

    return map;
}

function o3() {
    var set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);
    set.add(4);
    set.add(5);

    return set;
}

function o542(o4, o5, o7) {
        var o11 = 0;
        for(var o12 = 0; o12 < o5.length; ++o12) {
            o11 += o12;
            for(var o16 = 0; o16 < o5.length; ++o16) {
                o11 += o16;
                for(var o21 = 0; o21 < o5.length; ++o21) {
                    o11 += o21;
                    for(var o22 = 0; o22 < 2; ++o22) {
                        o11 += o22;
                        o5 = o7;
                        o11 += o5[o22];
                    }
                }
            }
            o11 += o5[o12];
        }
        return o11;
    };

o36.o37(o4, { o38: o0.o39[0] != "summary" });
