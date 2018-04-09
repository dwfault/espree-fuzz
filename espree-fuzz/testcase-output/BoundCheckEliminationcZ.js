//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1, o2) {
    var o3 = 0, o4;

    o4 = this.o379;
    for(var o5 = 0; o5 < 4; ++o5)
        o3 += o4[o5];

    o4 = [1, 2, 3, 4];
    for(var o5 = 3; o5 >= 0; --o5)
        o3 += o4[o5];

    o4 = [1, 2, 3, 4];
    for(var o5 = 0, o6 = 0; o5 < 4; ++o5, ++o6)
        o3 += o4[o6];

    o4 = [1, 2, 3, 4];
    for(var o5 = 3, o6 = 3; o5 >= 0; --o5, --o6)
        o3 += o4[o6];

    var o4 = [1, 2, 3, 4];
    for(var o5 = o1; o5 < o2; ++o5)
        o3 += o4[o5];

    o4 = [1, 2, 3, 4];
    for(var o5 = o2 - 1; o5 >= o1; --o5)
        o3 += o4[o5];

    o4 = [1, 2, 3, 4];
    for(var o5 = o1, o6 = o1; o5 < o2; ++o5, ++o6)
        o3 += o4[o6];

    o4 = [1, 2, 3, 4];
    for(var o5 = o2 - 1, o6 = o2 - 1; o5 >= o1; --o5, --o6)
        o3 += o4[o6];

    return o3;
}
o7.o8("testHoistability: " + o0(0, 4));
o7.o8("testHoistability: " + o0(0, 4));
o7.o8("");

function o9(o1, o2) {
    var o3 = 0, o4;

    o4 = [1, 2, 3, 4];
    for(var o5 = -1; o5 < 4; ++o5)
        o3 += o4[o5];

    o4 = [1, 2, 3, 4];
    for(var o5 = 3; o5 >= -1; --o5)
        o3 += o4[o5];

    o4 = [1, 2, 3, 4];
    for(var o5 = 0; o5 < 5; ++o5)
        o3 += o4[o5];

    o4 = [1, 2, 3, 4];
    for(var o5 = 4; o5 >= 0; --o5)
        o3 += o4[o5];

    o4 = [1, 2, 3, 4];
    for(var o5 = -1, o6 = -1; o5 < 4; ++o5, ++o6)
        o3 += o4[o6];

    o4 = [1, 2, 3, 4];
    for(var o5 = 3, o6 = 3; o5 >= -1; --o5, --o6)
        o3 += o4[o6];

    o4 = [1, 2, 3, 4];
    for(var o5 = 0, o6 = 0; o5 < 5; ++o5, ++o6)
        o3 += o4[o6];

    o4 = [1, 2, 3, 4];
    for(var o5 = 4, o6 = 4; o5 >= 0; --o5, --o6)
        o3 += o4[o6];

    var o4 = [1, 2, 3, 4];
    for(var o5 = o1 - 1; o5 < o2; ++o5)
        o3 += o4[o5];

    o4 = [1, 2, 3, 4];
    for(var o5 = o2 - 1; o5 >= o1 - 1; --o5)
        o3 += o4[o5];

    var o4 = [1, 2, 3, 4];
    for(var o5 = o1; o5 <= o2; ++o5)
        o3 += o4[o5];

    o4 = [1, 2, 3, 4];
    for(var o5 = o2; o5 >= o1; --o5)
        o3 += o4[o5];

    o4 = [1, 2, 3, 4];
    for(var o5 = o1 - 1, o6 = o1 - 1; o5 < o2; ++o5, ++o6)
        o3 += o4[o6];

    o4 = [1, 2, 3, 4];
    for(var o5 = o2 - 1, o6 = o2 - 1; o5 >= o1 - 1; --o5, --o6)
        o3 += o4[o6];

    o4 = [1, 2, 3, 4];
    for(var o5 = o1, o6 = o1; o5 <= o2; ++o5, ++o6)
        o3 += o4[o6];

    o4 = [1, 2, 3, 4];
    for(var o5 = o2, o6 = o2; o5 >= o1; --o5, --o6)
        o3 += o4[o6];

    return o3;
}
o7.o8("testUnhoistability: " + o9(0, 4));
o7.o8("testUnhoistability: " + o9(0, 4));
o7.o8("");

function o10(o5) {
    var o4 = [1, 2];
    var o3 = 0;
    for(; o5 == 1; ++o5)
        o3 += o4[o5];
    return o3;
}
o7.o8("testInductionVariableWithConstantValue_0: " + o10(1));
o7.o8("testInductionVariableWithConstantValue_0: " + o10(1));
o7.o8("");

function o11(o5) {
    var o4 = [1, 2];
    var o3 = 0;
    for(; o5 == 1; --o5)
        o3 += o4[o5];
    return o3;
}
o7.o8("testInductionVariableWithConstantValue_1: " + o11(1));
o7.o8("testInductionVariableWithConstantValue_1: " + o11(1));
o7.o8("");

function o12(o5) {
    var o4 = [1, 2];
    var o3 = 0;
    for(var o6 = o5; o5 == 1; ++o5, ++o6)
        o3 += o4[o6];
    return o3;
}
o7.o8("testInductionVariableWithConstantValue_2: " + o12(1));
o7.o8("testInductionVariableWithConstantValue_2: " + o12(1));
o7.o8("");

function o13(o5) {
    var o4 = [1, 2];
    var o3 = 0;
    for(var o6 = o5; o5 == 1; --o5, --o6)
        o3 += o4[o6];
    return o3;
}
o7.o8("testInductionVariableWithConstantValue_3: " + o13(1));
o7.o8("testInductionVariableWithConstantValue_3: " + o13(1));
o7.o8("");

(function() {
    function o14(o4, o5, o15) {
        var o3 = 0;
        for(; o5 < o15; ++o5) {
            if(o5 === 0)
                o3 = 0;
            o3 += o4[o5];
        }
        return o3;
    }
    var o4 = [1, 2];
    o14(o4, 0, 2);
    o14(o4, 0, 2);
    o7.o8("");
})();

(function() {
    function o16(o4, o17) {
        var o3 = 0;
        var o15 = o4.length;
        for(var o5 = 0; o5 < o15; ++o5) {
            if(o4[o5] === 0) {
                ++o3;
                break;
            }
        }
        if(o17)
            o4[o15] = 0;
        return o3;
    }
    var o4 = [1, 2];
    o16(o4);
    o16(o4);
    o7.o8("");
})();
