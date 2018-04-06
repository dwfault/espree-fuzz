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
        var o7 = o4.shift();
        o4.push(o7);
        return o7;
    }
    else {
        return o4[0];
    }
}
function o10() {
    if (o2) {
        if (o3.length > 1) {
            var o7 = o3.shift();
            o3.push(o7);
            return o7
        }
        else {
            return o3[0];
        }
    }
    else {
        var o11 = {};
        o11.o12 = o5();
        o3.push(o11)
        return o11
    }
};
function o13(o14) {
    o4 = [];
    for (var o15 = 0; o15 < o14.length; o15++) {
        o4.push(o14[o15])
    }
}
;
function o16() {
    var o17 = {};
    var o18 = {};
    var o19 = new Array(10);
    var o21 = 1;
    var o22 = 1;
    var o23 = 0;
    do {
        o23++;
        // Snippet: Array Check hoist for nested loop where bailout happens before 2nd loop.

        var o24 = 0;
        o18[5] = "temp";
        for (var o25 = 0 ; o25 < 3 ; o25++) {

            for (var o26 = 0 ; o26 < 3 ; o26++) {
                o24 += o18[o26 + o25];
            }

            if (o0) {
                Object.defineProperty(o18, "5", { get: function () { o1.push("getter"); return 5; }, configurable: true });
            }

            for (var o31 = 0 ; o31 < 3 ; o31++) {
                o24 += o18[o31 + o25];
            }
            1
        }

        o1.push(o24);
        var o32 = 0;
        do {
            o32++;
            o33 = { o34: 1, o35: (o19.shift()), o36: (o19.pop()), o38: 1, o39: 1, o40: 1, o41: 1, o42: 1 };
            var o43 = { o34: (o19[((o0 ? (o19[1] = 'x') : undefined), 1)], 1, 1, 1), o35: 1 };
        } while ((1) && o32 < 3)
        o18 = Object.prototype;
        var o46 = (o19.push((o22 ^= -4.00753612819473E+18), o21[(((174 >= 0 ? 174 : 0)) & 0XF)], o17.o36))
        ;
    } while ((1) && o23 < 3)
    for (var o15 = 0; o15 < o1.length; o15++) {
        o47.o48(o1[o15]);
    };
};

// generate profile
o16();
// Run Simple JIT
o16();

// run JITted code
o49 = true;
o16();

// run code with bailouts enabled
o0 = true;
o16();
