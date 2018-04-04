//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// - 'o2' is hoisted outside the loop
// - 'test0b' is inlined
// - 'o2 = 0' should kill 'o2' in the inliner function 'test0', causing the loop to exit early
function o0() {
    var o1 = { o2: 0 };
    var o3 = { o2: 4 };
    for(; o1.o2 < o3.o2; ++o1.o2)
        o4();
    return o1.o2;

    function o5() { eval(""); }
    function o4() { o3 = 0; }
}
o7.o8("test0: " + o0());
