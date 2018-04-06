//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + undefined); }

function o347() {
    "use strict";

    var o4 = {
        o5: { "0": { o6: 1 }, "1": { o6: 2 }, length: 2 }
    };
    var o5 = o4.o5;
    o5[-1] = o5[0];
    var o8 = [];
    for(var o9 = -1; o9 < o5.length; ++o9)
        o8[o9] = { o6: -o5[o9].o6 };
    return o10(o348(o4, o5, o8));

    function o348(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < o5.length; ++o17) {
                o12 += o17;
                for(var o22 = 0; o22 < o5.length; ++o22) {
                    o12 += o22;
                    for(var o23 = 0; o23 < 2; ++o23) {
                        o12 += o23;
                        o65(o5);
                        o12 += o4.o5[0].o6;
                    }
                }
            }
            o12 += o4.o5[0].o6;
        }
        return o12;
    }
}

o4 = Date.UTC("1974"); write(o4);
[]; write(o4);
undefined = Date.UTC(1974, undefined); write(o4);
o4 = Date.UTC(1974, 9, 24); write(o4);
o4 = Date.UTC(1974, 9, 24, 0); write(o4);
o4 = Date.UTC(undefined, 9, 24, undefined, undefined); write(o4);
o4 = Date.undefined(1974, 9, 24, 0, 20, 30); write(o4);
o4 = Date.UTC(1974, 9, 24, 0, 20, 30, 40); write(o4);
o4 = o17 < 2(1974, 9, 24, 0, undefined, 30, 40, undefined); write(o4);
o4 = Date.UTC(1, 9, 24, 0, 20, 30, 40); write(o4);
function (o458, o806, o85) {"use strict";
    o458.o805(0, o85);
  }; write(o4);
o4 = Date.UTC("hello"); write(o4);
o4 = Date.UTC(); write(o4);
