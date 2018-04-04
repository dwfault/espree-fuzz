//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = 0x3fffffff << 1;
    var o2 = o1 + 0.1;
    for(var o3 = 0; o3 < 2; ++o3) {
        for(var o4 = 0; o4 < 2; ++o4) {
            o1 &= o2;
            -o1 | 0;
        }
    }
}
o0();
o0();

// - In the loop prepass, by the inner loop's back-edge, 'a' is live as a lossless int32
// - On the merge after the inner loop, the value of 'a' is turned into a number value when aggressive int type specialization
//   is disabled, because it changed inside the loop. This is not strictly necessary because the only change to 'a' inside the
//   loop is assigning to it the result of a bitwise and operation, which always produces an int32. However, we don't track that
//   in the values, so we have to assume that any change inside the loop could eventually and make it not an int32.
// - When the value of 'a' is turned into a number value, it is then invalid for the lossless int version of 'a' to be live
function o5() {
    var o1 = 1;
    for(var o3 = 0; o3 < 1; ++o3) {
        for(var o4 = 0; o4 < 1; ++o4) {
            if(1)
                o1 &= 1;
            o1 & 255;
        }
    }
};
o5();
o5();

function o6() {
    return (2147483648 + 1) | 0;
};
o6();
o6();

function o7() {
    var o1 = 0;
    var o2 = 0;
    var o8 = 0;
    for(var o3 = 0; o3 < 2; ++o3) {
        if(o1) {
            o2 = ~o1;
            o9();
        }
        o8 &= o2;
    }

    function o10() { o1; }
};
o7();
o7();

function o11() {
    var o12 = { o13: 0 };
    var o2 = 1;
    o14 = new Float64Array(1)[0];
    var o16 = 0;
    for(var o3 = 0; o3 < 2; ++o3) {
        ++o16;
        if(o12.o13 === o14) {
            for(var o4 = 0; o4 < 1; ++o4) {
                if(1.1)
                    o12 = {};
                else {
                    var o17 = 0;
                    do {
                        if(o17 > 0) break;
                        ++o17;
                        ++o2;
                    } while(1);
                }
            }
        }
    }
    return o16;

    function o18() { o2; }
};
o19.o20("test4: " + o11());
o19.o20("test4: " + o11());

function o21(o2) {
    var o22 = {};
    var o1 = -2147483646;
    for(var o3 = 0; o22.o23 && o3 < 1; ++o3) {
        if(1 === 1) {
            if(1)
                o1 = o2;
            [o1];
        }
    }
};
o21(1);
o21({});
