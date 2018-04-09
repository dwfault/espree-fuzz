//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = false;

var o1 = [];
var o2 = false;
var o3 = [];
var o4 = [];
function o5() {
    if (o4.length > 1) {
        var o6 = o4.shift();
        o4.push(o6);
        return o6;
    }
    else {
        return o4[0];
    }
}
function o7() {
    if (o2) {
        if (o3.length > 1) {
            var o6 = o3.shift();
            o3.push(o6);
            return o6
        }
        else {
            return o3[0];
        }
    }
    else {
        var o8 = {};
        o8.o9 = o5();
        o3.push(o8)
        return o8
    }
};
function o10(o11) {
    o4 = [];
    for (var o12 = 0; o12 < o11.length; o12++) {
        o4.push(o11[o12])
    }
}
;
function o13() {
    var o14 = {};
    var o15 = {};
    var o16 = new Array(10);
    var o17 = 1;
    var o18 = 1;
    var o19 = 0;
    do {
        o19++;
        // Snippet: Array Check hoist for nested loop where bailout happens before 2nd loop.

        var o20 = 0;
        o15[5] = "temp";
        for (var o21 = 0 ; o21 < 3 ; o21++) {

            for (var o22 = 0 ; o22 < 3 ; o22++) {
                o20 += o15[o22 + o21];
            }

            if (o0) {
                Object.defineProperty(o15, "5", { get: function () { o1.push("getter"); return 5; }, configurable: true });
            }

            for (var o23 = 0 ; o23 < 3 ; o23++) {
                o20 += o15[o23 + o21];
            }
            1
        }

        o1.push(o20);
        var o24 = 0;
        do {
            o24++;
            o25 = { o26: 1, o27: (o16.shift()), o28: (o16.pop()), o29: 1, o30: 1, o31: 1, o32: 1, o33: 1 };
            var o34 = { o26: (o16[((o0 ? (o16[1] = 'x') : undefined), 1)], 1, 1, 1), o27: 1 };
        } while ((1) && o24 < 3)
        o15 = Object.prototype;
        var o35 = (o16.push((o18 ^= -4.00753612819473E+18), o17[(((174 >= 0 ? 174 : 0)) & 0XF)], o14.o28))
        ;
    } while ((1) && o19 < 3)
    for (var o12 = 0; o12 < o1.length; o12++) {
        o36.o37(o1[o12]);
    };
};

// generate profile
o13();
// Run Simple JIT
o13();

// run JITted code
o38 = true;
o13();

// run code with bailouts enabled
o0 = true;
o13();
