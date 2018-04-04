//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1, o2) {
    this.o3 = o2;
    this.o4 = o1;
}

var o5 = new o0(1, 2);

var o6 = Object.create(o5);

o9.o10(o6.o4);
o9.o10(o6.o3);

o5.o11 = 10;

o9.o10(o6.o4);
o9.o10(o6.o3);
o9.o10(o6.o11);
