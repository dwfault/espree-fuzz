//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// A non-helper block may fall through into a helper block (in this case, an unconditional bailout caused by the switch opt)
function o0(o1) {
    var o2 = -1;
    switch(o1 ? o1 * 1 : o1 * 0.1) {
        case 0:
            o2 = 0;
            break;
        case 1:
            o2 = 1;
            break;
        case 2:
            o2 = 2;
            break;
        case 3:
            o2 = 3;
    }
    return o2;
}
o0(1);
o0(0);

// - Should be able to successfully create an airlock block on a multi-branch edge
// - A multi-branch involving multiple of the same target block should create only one airlock block per target block
function o3(o1, o2) {
    ++o2;
    switch(o1) {
        case "0":
            o2 += 0.1;
            break;
        case "1":
        case "2":
        case "3":
    }
    return o2;
}
o3("1", 0);
o3("1", 0);

o4.o5("pass");
