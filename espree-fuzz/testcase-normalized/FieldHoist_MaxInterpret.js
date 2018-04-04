//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1) {
    for(var o2 = 0; o2 < 2; ++o2)
        (+o1).toSource;
};
o0({});
o0({});

function o4() {
    var o1 = { o5: 0 };
    var o6 = 0;
    for(var o7 = 0; o7 < 1; ++o7) {
        o1.o5 |= 0;
        for(var o8 = 0; o8 < 1; ++o8) {
            o1.o5 = 0;
            if(o1.o5)
                ++o6;
            for(var o9 = 0; o9 < 1; ++o9)
                o6 += o1.o5;
        }
    }
    return o6;
};
o4();
o4();

o10.o11("pass");
