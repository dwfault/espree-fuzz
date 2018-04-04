//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1, o2, o3, o4) {
    var o5 = 1;
    if (o3) {
        Object.defineProperty(o1, o4, o8);
    }
    o5 = o1[o4];
    if (o3)
        o5 = o1[o4];
    return o5;
}

o9 = { "prop4": 4 };
var o10 = 0;

for (var o11 = 0; o11 < 200; o11++) {
    o0(o9, "text", false, "prop4");
}

var o8 = { get: function () { return o10++; } };

if (o0(o9, "text", true, "prop4") != 1)
    o13.o14("FAILED");
else
    o13.o14("Passed");


