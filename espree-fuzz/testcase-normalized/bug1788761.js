//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
}
function o1() {
}
var o2 = {};
var o3 = function (o4, o5) {
    for (var o6 in o5) {
        o5[o6] = typeof o7[o5.pop() & 255];
    }
};
var o9 = function () {
    o3(o1, o10);
};
o2.o11 = o9;
var o10 = new Array();
var o7 = new Float32Array();
var o14 = Array;
o0({ o15: o2.o11(o10.splice(12, 14, o2.o11())) });
try {
} catch (o17) {
} finally {
    try {
        o18();
    } catch (o17) {
        var o19 = o14({ o15: o2.o11() });
    } finally {
    }
}

o20.o21('pass');