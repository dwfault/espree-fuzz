//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = false;
function o1() {
    var o2 = {};
    var o3 = {};
    var o4 = function () {
        ({
            o5: typeof Error ? Error : Object,
            o6: (o0 ? (Object.defineProperty(this, 'prop5', {
                set: function () {
                },
                configurable: true
            })) : -216, o0 ? (Object.defineProperty(this, 'prop5', {
                set: function () {
                }
            })) : -216)
        });
    };
    var o7 = function () {
        return o4(o4()) < o3 >= 0 ? o4(o4()) : 0;
    };
    var o8 = function () {
    };
    var o9 = function () {
        return o7();
    };
    o2.o10 = o9;
    o2.o11 = o2.o10;
    function o12() {
        o8(o4());
    }
    o8(o4());
    o2.o11();
    var o13 = o12();
}
o1();
o0 = true;
o1();

o14.o15('pass');