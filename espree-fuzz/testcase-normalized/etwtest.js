//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Test etw rundown.
//

function o0() {
    var o1 = "";
    for (var o2 = 0; o2 < 40; o2++) {
        o1 += "bar";
    }
    (function (o3) { })(o1);
}

var o4 = 2000; //max ms to run the following loop (and bound etw rundown time)
var o5 = new Date();

// Keep generating new functions.
for (var o2 = 0; o2 < 1000; o2++) {
    var o7 = "foo" + o2; // different function names
    eval("function " + o7 + "(){ bar();} " + o7 + "();");

    var o9 = new Date();
    if (o9 - o5 >= o4) {
        break;
    }
}

o10.o11("pass");