//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = {};
    var o2 = {};
    var o3 = {};
    var o4 = function () {
        (function () {
        }(o5++));
    };
    var o6 = function () {
    };
    var o7 = function () {
    };
    o1.o8 = o4;
    o1.o9 = o7;
    o3.o8 = o6;
    o3.o9 = o1.o8;
    var o10 = -647661593;
    var o5 = 1650427918.1;
    Object.create(o3);
    o13 = o3;
    var o14 = 7 + 9;
    while (o10) {
        o14 -= 3;
        if (o14 == 7) {
            break;
        }
        function o15(o16) {
            o3.o8 = o2;
            o16();
        }
        function o17() {
            var o18 = {
                o19: {
                    o20: {
                        o21: { o9: o13.o9 },
                        o22: { o8: o1.o9 },
                        o23: { o21: { o8: o13.o8 } }
                    }
                }
            };
            var o24 = o13.o9();
        }
        o15(o17);
    }
    if (o5 !== 1650427920.1) {
        o25.o26('fail: c === ' + o5);
    }
}
o0();
o0();

o25.o26('pass');