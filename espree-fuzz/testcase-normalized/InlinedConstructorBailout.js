//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1) {
    return new o2(o1);

    function o2(o1) {
        this.o1 = (o1 << 1) + 2;
    }
}
o3.o4(o0(0x3fffffff).o1);

function o5(o1) {
    return new o2(o1);

    function o2(o1) {
        return { o1: (o1 << 1) + 2 };
    }
}
o3.o4(o0(0x3fffffff).o1);
