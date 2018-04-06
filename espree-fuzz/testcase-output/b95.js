//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft Corporation and contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(stdlib, o2) {
    "use asm";

    var o3 = stdlib.SIMD.o5;
    var o6 = o3.o7;
    var o8 = stdlib.SIMD.Int32x4;
    var o10 = o3.o11;
    var o12 = o3.add;
    var o14 = o8.o15;

    function o16(o17)
    {
        o17 = o6(o17);
        return o17;
    }

    function o18()
    {
        var o17 = o3(255, 40, -40, 40, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        var o19 = o8(255,0,0,0);
        var o20 = 0;
        o20 = o14 (o19, 0);
        o17 = o10(o17, o20 >>> 0);
        o17 = o6(o16(o17));
        return o20|0;
    }

    return {
        o18: o18 };
}

var o21 = o0(this, {});

print (o21.o18());
print (o21.o18());
