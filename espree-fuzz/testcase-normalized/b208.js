//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft Corporation and contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0 () {
    var o1 = SIMD.o3(NaN, 42, NaN, NaN)
    var o5 = SIMD.o3(NaN, NaN, NaN, 3.14)
    var o6 = SIMD.o3.o7(o1,o5);
    return o6;
}

function o8 () {
    var o1 = SIMD.o3(NaN, 42, NaN, NaN)
    var o5 = SIMD.o3(NaN, NaN, NaN, 3.14)
    var o6 = SIMD.o3.o9(o1,o5);
    return o6;
}


for (var o10 = 0; o10 < 3; o10++) {
    o0();
    o8();
}

print("testMin = " + o8());
print("testMax = " + o0());

