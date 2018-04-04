//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// This test includes Date.toString output. Don't use a baseline.
//
var o0 = o1.o2;

o1.o3("adddata.js");
var o4 = o1.o3("adddata.js", "samethread");

function o5(o6, o7) {
    for (var o8=0; o8<o6.length; ++o8) {
        for (var o10=0; o10<o7.length; ++o10) {
            o0("a["+o8+"](" + o6[o8] +") + a["+o10+"]("+o7[o10]+") = " + (o6[o8] + o7[o10]));
        }
    }
}

o0("==== self var + crosscontext var ====");
o5(this.all, o4.all);

o0();

o0("==== crosscontext var + self var ====");
o5(o4.all, this.all);
