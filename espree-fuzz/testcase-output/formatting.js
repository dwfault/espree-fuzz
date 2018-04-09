//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1) {
    return o1.replace("(PST)", "(Pacific Standard Time)")
              .replace("(PDT)", "(Pacific Daylight Time)");
}

for (var o2 = 0; o2 < 4 * 60; o2++) {
    var o3 = new Date(2012, 2, 11, 0, o2, 0);
    o4.o5(o0(o3.toString()));
}
for (var o2 = 0; o2 < 4 * 60; o2++) {
    var o3 = new Date(2012, 10, 4, 0, o2, 0);
    o4.o5(o0(o3.toString()));
}

// BLUE: 538457
var o6 = new Date(1383672529000000);
o4.o5(o0(o6.toString()));
