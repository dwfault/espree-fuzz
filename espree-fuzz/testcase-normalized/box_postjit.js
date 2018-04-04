//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Compile with -mic:1 -forcedeferparse to generate jitted code with stack funcs and stack closures.
// Then box after jitting and force jitted code to detect that it must allocate closures on heap.
function o0() {
    o1.o2('outer');
    function o3() {
        return o3;
    }
    if (o4) return o3();
    o4++;
}
var o4 = 0;
o0();
o0();
var o5 = o0();
o1.o2(typeof o5());

