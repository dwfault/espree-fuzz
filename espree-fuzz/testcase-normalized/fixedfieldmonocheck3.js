//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = 0;
function o1() {
    o0++;
    var o2 = {};
    var o3 = {};
    var o4 = {};
    var o5 = {};
    var o6 = function () {
    };
    var o7 = function () {
        this.o8 = 10;
        for (var o9 = 0; o9 < 4; ++o9) {
            o10 = this.o8;
            o8 = 30;
        }
        return Error(), this.o8;
    };
    var o12 = function (o13) {
        return typeof {
            o14: o1.caller,
            o8: arguments[10] * (o17[1073741823] + o18[9 & 255]),
            o19: o18[9 & 255] * ((false ? (o20 = {
                valueOf: function () {
                    o22.o23('f valueOf');
                    return 3;
                }
            }, o1.caller) : o1.caller) + o1.caller),
            o24: ~((false ? (o25 = {
                valueOf: function () {
                    o22.o23('a valueOf');
                    return 3;
                }
            }, Object.prototype.length) : Object.prototype.length) * o29++ - (-773191191 === 467528665)),
            o30: false ? o7() : o7(),
            o31: /a/ instanceof (typeof Error == 'function' ? Error : Object),
            o32: o5[false ? o5[8] = 'x' : undefined, 8],
            o34: (0 && 1886309404 ? o35 < 7989750482363150000 && o4.o8 !== o13 : o5.length != o13) && o5.o19
        };
    };
    var o36 = function () {
        return { o31: o12() };
    };
    o2.o37 = o12;
    o4.o38 = o6;
    o4.o37 = o7;
    Object.prototype.o37 = o4.o38;
    var o18 = new Int8Array();
    var o17 = new Float64Array();
    var o29 = -2128076251;
    o36();
    var o41 = [
      o3,
      o2
    ];
    o41[o0 % o41.length].o37(o4.o37());
    o12();
    if (o10 !== 30) {
        o22.o23('i === ' + o10);
    }
}
o1();
o1();

o22.o23('pass');