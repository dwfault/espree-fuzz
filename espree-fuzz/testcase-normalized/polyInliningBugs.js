//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = 0;
function o1() {
    o0++;
    var o2 = {};
    var o3 = {};
    var o4 = function () {
    };
    var o5 = function () {
    };
    o2.o6 = o4;
    o3.o6 = o5;
    o7 = Object.create(o2);
    o10 = Object.create(o3);
    o2 = o10;
    var o11 = 0;
    for (; o11 < 3; o11++) {
        (function () {
            for (var o12 = 0; o12 < arguments.length; ++o12) {
                var o15 = [
                        o7,
                        o2
                    ];
                o15[o0 % o15.length].o6();
            }
        }(1));
    }
}
o1();
o1();
o1();
o16.o17("PASSED\n");
