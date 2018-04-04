//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Check the case where not all of the upstream equiv set's types are equivalent
// at a downstream access.

var o0 = [];
function o1() {
}
o0.push(o1);
function o3() {
    var o4 = o0.shift();
    o0.push(o4);
    return o4;
}
function o6() {
    var o7 = {};
    o7.o8 = o3();
    return o7;
}
function o9() {
    var o10 = o6();
    var o11 = Object.create(o10);
    var o14 = [];
    var o15 = {};
    var o16 = function () {
        o15.o17;
        o15.o18 = 1924086187;
        o11.o8();
        o14.push(o15.o18);
    };
    o15.o17 = 1458470962.1;
    o19();
    o19();
    o16();
    o16();
    o16();
    o20.o21(o14);
}
o9();
o9();
