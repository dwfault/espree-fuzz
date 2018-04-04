//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = { o2: 1, o3: 2 };
    var o4 = 0;
    for(var o5 = 0; o5 < 1; ++o5)
        if(o5 !== 0)
            for(var o6 in o1)
                o4 += o1[o6];
    return o4;
}
o7.o8("test0: " + o0());
