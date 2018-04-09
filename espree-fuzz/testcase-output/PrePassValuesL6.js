//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = false;

function o1215() {
    "use strict";

    var o4 = {
        o5: { "0": 1.1, "1": 2.1, length: 2 }
    };
    var o5 = o4.o5;
    o5[-1] = o5[0];
    var o7 = [];
    for(var o8 = -1; o8 < o5.length; ++o8)
        o7[o8] = -o5[o8];
    return o9(o1216(o4, o5, o7));

    function o1216(o4, o5, o7) {
        var o11 = 0;
        for(var o12 = 0; o12 < o5.length; ++o12) {
            o11 += o12;
            for(var o16 = 0; o16 < o5.length; ++o16) {
                o11 += o16;
                o11 += o4.o5[o16];
            }
            o11 += o4.o5[o12];
        }
        return o11;
    }
};

for (var o7 = 0; o7 < 500; o7++)
{
    o1(false);
}

o1(true);
