//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = Array({});
    var o2 = 1;
    function o1241() {
    var o4 = {
        o5: { "0": 1.1, "1": 2.1, length: 2 }
    };
    var o5 = o4.o5;
    o5[-1] = o5[0];
    var o7 = [];
    for(var o8 = -1; o8 < o5.length; ++o8)
        o7[o8] = -o5[o8];
    return o9(o1242(o4, o5, o7));

    function o1242(o4, o5, o7) {
        var o11 = 0;
        for(var o12 = 0; o12 < o5.length; ++o12) {
            o11 += o12;
            for(var o16 = 0; o16 < o5.length; ++o16) {
                o11 += o16;
                for(var o21 = 0; o21 < o5.length; ++o21) {
                    o11 += o21;
                    for(var o22 = 0; o22 < 2; ++o22) {
                        o11 += o22;
                        o5 = o7;
                        o11 += o1243(o4, o5, o22);
                    }
                }
            }
            o11 += o1243(o4, o5, o12);
        }

        function o1243(o4, o5, o8) {
            return o4.o5[o8];
        }
        return o11;
    }
};
    o3();
    o9.o10(typeof o1[0]);
}o7.o8("FAIL: " + o1 + ": new Function should have failed, but did not");
o0();
