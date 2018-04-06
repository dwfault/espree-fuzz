//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// This test case tests how array hoisting optimizations work in the presence of implicit call
// b < FloatArr0 has an implicit call of 'valueof' in this scenario
function o0() {
    var o1 = [];
    var o2 = [];
    var o3 = o2;
    for (var o4 = 0; o3 < o1;) {
        for (var o5 = 0; o5; o5++) {
            o1[1];
        }
        while (o6) {
            o1[1];
        }
    }
}
o0();
o0();
o7.o8("PASSED");