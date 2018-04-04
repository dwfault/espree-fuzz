//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = {};
    var o2 = {};
    var o3 = {};
    var o4 = function () {
    };
    o2.o5 = o4;
    var o6 = Array();
    o3 = Object.create(o2);
    o3.o10 = -3503483882018380000;
    o6[0] = -689066480;
    o6[1] = -766274957.9;
    for (var o11 in o6) {
        o3.length = -51;
        for (var o13 in o3) {
            if (o13.indexOf('method') != -1) {
                continue;
            }
            o3[o13] = typeof o1.o10;
            o3.o5.call();
            o3 = {
                o5: function () {
                },
                o16: function () {
                }
            };
            o3.o10 = (o3.o17);
        }
    }
}
o0();

o18.o19('pass');