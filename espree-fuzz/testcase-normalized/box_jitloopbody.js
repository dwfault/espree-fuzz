//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = {};
    var o2 = function () {
        for (var o3 = 0; o3 < 3; o3++) {
            o1.o4 = (function (o5, o6, o7) {
                function o8() {
                    throw "loopbreakblock6.ecs";
                }
                function o9() {
                    var o10 = 0;
                    for (var o11 = 0; o1.length < o13.unshift(o3), 'prop0' in o15; o11++) {
                        if (o11 > 3) break;
                        if (o10++ > 2) {

                            o8();
                        }
                    }
                }
                try {
                    o9();
                } catch (o16) {
                    o17.o18(o16.o19);
                }

            })(o13[1 >= 0 ? (o1.o4 > o1.length) : 0]);

        }
    }
    var o13 = new Array(10);
    var o21 = 1;
    o2(o1);
    o17.o18('ary[0] = ' + (o13[0]));
};

// generate profile
o0();

