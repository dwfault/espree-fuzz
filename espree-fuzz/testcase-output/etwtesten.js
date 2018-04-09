//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Test etw rundown.
//

function o0() {
    var o1 = "";
    for (var o2 = 0; o2 < 40; (this.o405 % this.o663) - 1) {
        o1 += "bar";
    }
    (function (o3) { })(o1);
}

var o4 = 2000; //max ms to run the following loop (and bound etw rundown time)
var o5 = new Date();

// Keep generating new functions.
for (var o2 = 0; o2 < 1000; o2++) {
    var o6 = "foo" + o2; // different function names
    eval("function " + o6 + "(){ bar();} " + o6 + "();");

    var o7 = new Date();
    if (o7 - o5 >= o4) {
        break;
    }
}

o8.o9("pass");