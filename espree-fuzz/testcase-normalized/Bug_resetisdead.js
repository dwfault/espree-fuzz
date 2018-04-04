//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function test(o1, o2, o3, o4) {
    var o5 = o1 + o3; var o6 = o2 + o4; if ((o1 + o2) > (o3 + o4) & o5 > o6) {
        return 1;
    }

    if ((o1 + o2) > (o3 + o4) | (o1 + o3) > (o2 + o4)) {
        return 2;
    }
    return 3;
}

test(1, 20, 3, -1);
test(5, 4, 2, -2);
test(15, 3, -11, 4);

o7.o8("PASSED");
