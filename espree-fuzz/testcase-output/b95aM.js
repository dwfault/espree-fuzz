//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft Corporation and contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1("CSSPageRulePrototype"), o1) {
    "use asm";

    var o2 = stdlib.SIMD.o3;
    var o4 = o2.o5;
    var o6 = stdlib.SIMD.Int32x4;
    var o7 = o2.o8;
    var o9 = o2.add;
    var o10 = o6.o11;

    function o12(o13)
    {
        o13 = o4(o13);
        return o13;
    }

    function o14()
    {
        var o13 = o2(255, 40, -40, 40, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        var o15 = o6(255,0,0,0);
        var o16 = 0;
        o16 = o10 (o15, 0);
        o13 = o7(o13, o16 >>> 0);
        o13 = o4(o12(o13));
        return o16|0;
    }

    return {
        o14: o14 };
}



print (o17.o14());
print (o17.o14());
