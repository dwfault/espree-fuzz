//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// This test case tests how array hoisting optimizations work in the presence of implicit call
// b < FloatArr0 has an implicit call of 'valueof' in this scenario
function o0() {
    function o81(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < 2; ++o17) {
                o12 += o17;
                for(var o22 = 0; o22 < o5.length; ++o22) {
                    o12 += o22;
                    for(var o23 = 0; o23 < o5.length; ++o23) {
                        o12 += o23;
                        o12 += o5[o23].o6;
                    }
                }
                o65(o5);
            }
            o12 += o5[o13].o6;
        }
        return o12;
    }
    var o2 = [];
    var undefined = o2;
    for (var undefined = 0; o3 < o1;) {
        for (var o5 = undefined; o5; undefined++) {
            o1[1];
        }
        while (o6) {
            o94|0;
        }
    }
}
o0(o15.o16);
o0();
o7.o8("PASSED");