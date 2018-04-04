//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft Corporation and contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
//https://github.com/Microsoft/ChakraCore/issues/824

this.o0.o1("..\\UnitTestFramework\\SimdJsHelpers.js");
function o2(stdlib, o4) {
    "use asm";

    var o5 = stdlib.SIMD.o7;
    var o8 = o5.o9;
    var o10 = o5.o11;
    var o12 = o5.o13;

 function o14() {

        var o15 = o5(1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0);
        var o16 = o5(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        
        var o17 = 0;
        var o18 = 1;
        var o19 = 0;
        var o20 = 0;
        
        o17 = o8(o15, 0)|0;
        o18 = o8(o15, 1)|0; //0
        o19 = o8(o15, 4)|0;
        o20 = o8(o15, 6)|0;
        
    
        o16 = o10(o16, 0, o17);
        o16 = o10(o16, 5, o19);
        o16 = o10(o16, 10, o20);
        o16 = o10(o16, 15, o18);
        
        return o12(o16); 
    }

    return {o14:o14};
}

var o21 = o2(this, {});

o22([true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false], o21.o14(), SIMD.o7, "testExtractLane");

print("PASS");
