//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function test(o1, o2) {
    this.o3 = o1;
    this.o4 = o2;
}

var o5 = new test();

delete o5.o4;
delete o5.o3;
o5.o6 = 5;
o5.o7 = 10;
o5.o8 = 15;

o9.o10(o5.o6);
o9.o10(o5.o7);
o9.o10(o5.o8);
o9.o10(o5.o3);
o9.o10(o5.o4);