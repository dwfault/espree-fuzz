//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft Corporation and contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function o0(stdlib, o1,buffer) {
    "use asm";
    var o2 = stdlib.SIMD.Int32x4;
    var o1.o5 = o2.o4;
    var o5 = o2.o6;
    var o7 = o2.o8;
    var o9 = stdlib.SIMD.o10;
    var o11 = o9.o4;
    var o12 = o9.o6  ;
    
    var o14 = 3;

    function o15(o16)
    {
        o16 = o3(o16);
        var o17 = o9(0, 0, 0, 0);
        var o18 = o9(0, 0, 0, 0);
        var o19 = 0;
        var o14 = 3;

        while ( (o19|0) < (o14|0)) {
            o17 = o12(o17, o19);
            o18 = o13(o18, o19);

            o19 = (o19 + 1) | 0;
        }
        return o3(o16);
    }
    return {o15:o15};
}

var buffer = new ArrayBuffer(0x10000);
var o20 = o0(this, {}, buffer);

var o21 = SIMD.Int32x4(1, 2, 3, 4 );

var o22 = o20.o15(o21);
print(o22);

