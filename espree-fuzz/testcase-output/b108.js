//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft Corporation and contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function o0(stdlib, o2,buffer) {
    "use asm";
    var o4 = stdlib.SIMD.Int32x4;
    var o7 = o4.o8;
    var o9 = o4.o10;
    var o11 = o4.o12;
    var o13 = stdlib.SIMD.o14;
    var o15 = o13.o8;
    var o16 = o13.o10  ;
    var o17= o13.o12 ;
    var o18 = 3;

    function o19(o20)
    {
        o20 = o7(o20);
        var o21 = o13(0, 0, 0, 0);
        var o22 = o13(0, 0, 0, 0);
        var o23 = 0;
        var o18 = 3;

        while ( (o23|0) < (o18|0)) {
            o21 = o16(o21, o23);
            o22 = o17(o22, o23);

            o23 = (o23 + 1) | 0;
        }
        return o7(o20);
    }
    return {o19:o19};
}

var buffer = new ArrayBuffer(0x10000);
var o25 = o0(this, {}, buffer);

var o26 = SIMD.Int32x4(1, 2, 3, 4 );

var o27 = o25.o19(o26);
print(o27);

