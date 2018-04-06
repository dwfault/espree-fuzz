//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1) {
    return o1.replace("(PST)", "(Pacific Standard Time)")
              .replace("(PDT)", "(Pacific Daylight Time)");
}

for (var o3 = 0; o3 < 4 * 60; o3++) {
    var o4 = new Date(2012, 2, 11, 0, o3, 0);
    o6.o7(o0(o4.toString()));
}
for (var o3 = 0; o3 < 4 * 60; o3++) {
    var o4 = new Date(2012, 10, 4, 0, o3, 0);
    o6.o7(o0(o4.toString()));
}

// BLUE: 538457
var o9 = new Date(1383672529000000);
o6.o7(o0(o9.toString()));
