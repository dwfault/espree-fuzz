//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() { return 1; }
function o1() {
    var o2 = true || true;
    return o0();
}
function o3 () {
    var o4 = true || true;
    return o0();
}
function o5(o6) {
    var o7 = o6();
    return o0(o7);
}
o5(o1);
o5(o3);
o5(o3);
var o4 = o5(o3);
o8.o9(o4);