//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    function o1() {
    }
    var o2 = {};
    var o3 = {};
    var o4 = {};
    var o5 = function () {
        (function () {
            while (this) {
                o4.o6 = { 6: o4.o7 };
                for (; o4.o6.o7; o8) {
                }
                if (78) {
                    o1(arguments);
                    break;
                }
            }
        }());
    };
    var o10 = function () {
        eval();
    };
    o2.o12 = o5;
    o2.o13 = o2.o12;
    o3.o13 = o2.o13;
    var o14 = Array();
    var o8 = new Int32Array();
    o4.o7 = -195;
    o2.o12();
    function o17() {
        for (var o18 = 7; o3.o13() ;) {
        }
    }
    var o19 = o17();
}
o0();
o0();
o0();

o20.o21('pass');