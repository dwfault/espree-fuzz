//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = new Uint8Array(256);
    var o3 = o1;
    var o4 = 0;
    var o5 = 0.5;
    var o6 = 0;
    var o7 = 0;
    while (o4 < 10) {
        // Make sure we round ties the same way between the interpreter and the JIT-ed code.
        o3[o6] = o4 + o5;
        o8.o9("cpa8[" + o6 + "] = " + o3[o6++]);
        o4++;
    }
    return o7;
};

o0();

o0();
