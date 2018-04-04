//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    function o1() {
    }
    function o2(o3) {
        for (var o4 in o3) {
            if (Array) {
                o2(o3[o4]);
                ({ o6: this.undefined });
                o8 = o1();
            }
        }
    }
    o2([[[[]]]]);
}
o0();
o0();

o9.o10('pass');
