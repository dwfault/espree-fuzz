//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Test binary operations with potential side-effects on already-evaluated opnds.

function o0() {
    var o1 = 0;
    var o2 = o1 & (o1 = 1)
    o3.o4(o2)
    o1 = 0;
    o1 &= (o1 |= 1);
    o3.o4(o1);
}
o0();

(function () {

    var o5 = 5;

    o1 = (o5 * (o5++));

    o3.o4("x = " + o1);

})();

var o6 = new Object();
function o8(o9) {
    o9.o10 = o9.o11 = o9 = null;
}

o8(o6);


