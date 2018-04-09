//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    'use strict';
    try {
        var o1 = o13("test822: " + o2049());
        var o2 = new Array(10);
        o1.length = 1;
        var o3 = 0;
        while ((1) && o3 < 3) {
            o3++;
            o2.length = -804513990;
        }
        //Snippet 3: fewer arguments than formal parameters
        o1.length = (function (o4, o5, o6, o7, o8) {
            o9 *= o1.o10;
            var o11 = o4 + o5 + o6 + o7 + o8;
            return o11 + o2[(1)];
        })(1, 1, 1);
    }
    catch(o9) {
        o12.o13(o9);
    }
};

// generate profile
o0();

// run JITted code
o0();

var o14 = false;
function o15() {
    'use strict';
    try {
        var o1 = {};
        var o16 = {};
        var o17 = function (o18) {
            switch ((o19)) {
                case 1:
                    break;
                case (o20--):
                    break;
                default:
                    o16.o10 -= 1;
                    break;
                case 1:
                    break;
                case 1:
                    break;
            }
            (o14 ? (Object.defineProperty(o1, 'prop0', { writable: false, enumerable: true, configurable: true }), 1) : 1);
        }
        o16.o21 = o17;
        var o20 = 1;
        var o19 = -27;
        o16.o21();
        var o22 = 0;
        do {
            o22++;
        } while (((o1.length & (o14 ? (o1.o10 = { valueOf: function () { o12.o13('obj0.prop0 valueOf'); return 3; } }, 1) : 1))) && o22 < 3)
    }
    catch (o9) {
        o12.o13(o9);
    }
    o12.o13("obj1.prop0 = " + (o16.o10 | 0));
};

// generate profile
o15();

// run JITted code
o15();

// run code with bailouts enabled
o14 = true;
o15();
