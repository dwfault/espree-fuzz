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
            o8: (o0 ? (Object.defineProperty(this, 'prop5', {
                set: function () {
                },
                configurable: true
            })) : -216, o0 ? (Object.defineProperty(this, 'prop5', {
                set: function () {
                }
            })) : -216)
        });
    };
    var o12 = function () {
        return o4(o4()) < o3 >= 0 ? o4(o4()) : 0;
    };
    var o13 = function () {
    };
    var o14 = function () {
        return o12();
    };
    o2.o15 = o14;
    o2.o16 = o2.o15;
    function o17() {
        o13(o4());
    }
    o13(o4());
    o2.o16();
    var o18 = o17();
}
o1();
o0 = true;
o1();

o19.o20('pass');