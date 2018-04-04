//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = function (o1) {
    o1.o2 = 1;
};

function o3(o4, o5) {
    this.o6 = o4;
    this.o7 = o5;
}

o8 = new o3();
Object.create(o8);
o0(o8);

o11.o12("PASSED");
