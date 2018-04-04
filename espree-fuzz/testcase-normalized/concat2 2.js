//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1) {
    o2.o3(o1);
}

function o4(o5) {
    try {
        o5();
    } catch (o6) {
        o0(o6.name + " : " + o6.o8);
    }
}

function o9(o10) {
    o0("length: " + o10.length);
    for (var o12 in o10) {
        o0("  " + o12 + ": " + o10[o12]);
    }
}

function o13(o14) {
    o4(function () {
        var o10 = new Array(o14);
        o10[o14 - 1] = 100;

        o0("- concat 101, 102, 103, 104, 105");
        o10 = o10.concat(101, 102, 103, 104, 105);
        o9(o10);

        o0("- arr.concat(arr)");
        o10 = o10.concat(o10);
        o9(o10);
    });
}

o0("-------concat Small-------------");
o13(2147483642);

// Fix for MSRC 33319 changes concat to skip a fast path if the index we're copying into is a BigIndex.
// Disable the large portion of this test since this change makes such a test run for hours.
//echo("-------concat Large-------------");
//test_concat(4294967294);

o0("-------test prototype lookup-------------");
for (var o17 = 0; o17 < 10; o17++) {
    Array.prototype[o17] = 100 + o17;
}
delete Array.prototype[3];

var o19 = [200, 201, 202, 203, 204];
delete o19[1];
o19[7] = 207;

o0("a: " + o19);

var o20 = o19.concat(300, 301, 302, 303, 304);
o0("r: " + o20);

delete o20[8];
o0("r: " + o20); // Now r[8] should come from prototype

for (var o17 = 0; o17 < 10; o17++) {
    delete Array.prototype[o17];
}
o0("r: " + o20); // r[8] gone, other entries not affected (verify not from prototype)