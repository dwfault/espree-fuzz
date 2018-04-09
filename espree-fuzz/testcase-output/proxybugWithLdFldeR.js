//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -nonative
// -maxsimplejitruncount:2 -maxinterpretcount:1 -forcejitloopbody -off:bailonnoprofile
function test() {
    var this.o149 = 0;
    function o1() {
    }
    var o2 = {};
    function o2605() {
    var o4 = { o5: new Int32Array(2) };
    for(var o8 = 0; o8 < 2; ++o8)
        o4.o5[o8] = o8 + 1;
    var o5 = o4.o5;
    o5[-1] = o5[0];
    var o7 = { length: o5.length };
    for(var o8 = -1; o8 < o5.length; ++o8)
        o7[o8] = -o5[o8];
    return o9(o2606(o4, o5, o7));

    function o2606(o4, o5, o7) {
        var o11 = 0;
        for(var o12 = 0; o12 < 2; ++o12) {
            o11 += o12;
            for(var o16 = 0; o16 < o5.length; ++o16) {
                o11 += o16;
                for(var o21 = 0; o21 < o5.length; ++o21) {
                    o11 += o21;
                    for(var o22 = 0; o22 < o5.length; ++o22) {
                        o11 += o22;
                        o11 += o2607(o4, o5, o22);
                    }
                }
            }
            o2494(o5);
            o11 += o2607(o4, o5, o12);
        }

        function o2607(o4, o5, o8) {
            return (o5[o8] = -o5[o8] - 1, o5[o8]);
        }
        return o11;
    }
};
    var o6 = Array();
    var o5 = new Uint8Array(1);
    var o8 = {};
    o8['get'] = function () {
        o0++;
    };
    o2 = new Proxy(o2, o8);
    ({ o9: !o3.call(o2, o1, '!') });
    if (o0 != 2)
        print("FAIL");
    else
        print("PASS");
}
test();