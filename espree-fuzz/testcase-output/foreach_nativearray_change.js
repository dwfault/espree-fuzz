//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Array();
o1 = 1;
o0[0] = 1;
o0[1] = 1;
o0[3] = 2147483647;
o0[2] = 1;
o0 = o0.concat(o1);
// Native Int Array change to Native Float Array in the middle of forEach
o0.forEach(function (o2, index) {
    o3.o4(o0[index]++);
    o3.o4(o2);
});

