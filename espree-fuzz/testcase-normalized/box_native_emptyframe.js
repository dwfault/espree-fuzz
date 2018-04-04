//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = [];
    function o2() {
    }
    var o3 = {};
    var o4 = {};
    var o5 = function () {
        o6 = o3;
        var o7 = 3;
        for (; ; o7++) {
            if (o7 === 3 + 3) {
                break;
            }
            function o8() {
                if (o3.o9) {
                    o1.push(o7);
                    Math.sin(Error());
                } else {
                    o14 = o3;
                }
            }
            function o15() {
                o8();
            }
            o8();
        }
    };
    var o16 = function () {
        o14.o9 = o4;
    };
    var o17 = function () {
        return o5();
    };
    var o18 = function () {
        o19.push(o16(), o5() ? (o20) : o17());
    };
    o3.o21 = o18;
    var o19 = Array();
    o2(o17());
    o6.o21();
    o23.o24(o1);
}
o0();
