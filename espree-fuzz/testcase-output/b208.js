//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft Corporation and contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0 () {
    var o1 = SIMD.o2(NaN, 42, NaN, NaN)
    var o3 = SIMD.o2(NaN, NaN, NaN, 3.14)
    var o4 = SIMD.o2.o5(o1,o3);
    return o4;
}

function o6 () {
    var o1 = SIMD.o2(NaN, 42, NaN, NaN)
    var o3 = SIMD.o2(NaN, NaN, NaN, 3.14)
    var o4 = SIMD.o2.o7(o1,o3);
    return o4;
}


for (var o8 = 0; o8 < 3; o8++) {
    o0();
    o6();
}

print("testMin = " + o6());
print("testMax = " + o0());

