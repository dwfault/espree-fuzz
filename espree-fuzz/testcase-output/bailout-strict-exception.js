//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    'use strict';
    try {
        var o1 = {};
        var o2 = new Array(10);
        o1.length = 1;
        var o5 = 0;
        while ((1) && o5 < 3) {
            o5++;
            o2.length = -804513990;
        }
        //Snippet 3: fewer arguments than formal parameters
        o1.length = (function (o6, o7, o8, o9, o10) {
            o11 *= o1.o12;
            var o13 = o6 + o7 + o8 + o9 + o10;
            return o13 + o2[(1)];
        })(1, 1, 1);
    }
    catch(o11) {
        o14.o15(o11);
    }
};

// generate profile
o0();

// run JITted code
o0();

var o16 = false;
function o17() {
    'use strict';
    try {
        var o1 = {};
        var o18 = {};
        var o19 = function (o20) {
            switch ((o21)) {
                case 1:
                    break;
                case (o22--):
                    break;
                default:
                    o18.o12 -= 1;
                    break;
                case 1:
                    break;
                case 1:
                    break;
            }
            (o16 ? (Object.defineProperty(o1, 'prop0', { writable: false, enumerable: true, configurable: true }), 1) : 1);
        }
        o18.o28 = o19;
        var o22 = 1;
        var o21 = -27;
        o18.o28();
        var o29 = 0;
        do {
            o29++;
        } while (((o1.length & (o16 ? (o1.o12 = { valueOf: function () { o14.o15('obj0.prop0 valueOf'); return 3; } }, 1) : 1))) && o29 < 3)
    }
    catch (o11) {
        o14.o15(o11);
    }
    o14.o15("obj1.prop0 = " + (o18.o12 | 0));
};

// generate profile
o17();

// run JITted code
o17();

// run code with bailouts enabled
o16 = true;
o17();
