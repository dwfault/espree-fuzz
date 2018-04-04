//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

var o4;

o4 = new Date("Thu Jan 10 05:30:01 UTC+0530 1970"); write(o4.toISOString());
o4 = new Date("1974"); write(o4.toISOString());
o4 = new Date(1974); write(o4.toISOString());
o4 = new Date(1974, 9); write(o4.toISOString());
o4 = new Date(1974, 9, 24); write(o4.toISOString());
o4 = new Date(1974, 9, 24, 0); write(o4.toISOString());
o4 = new Date(1974, 9, 24, 0, 20); write(o4.toISOString());
o4 = new Date(1974, 9, 24, 0, 20, 30); write(o4.toISOString());
o4 = new Date(1974, 9, 24, 0, 20, 30, 40); write(o4.toISOString());
o4 = new Date(1974, 9, 24, 0, 20, 30, 40, 50); write(o4.toISOString());
o4 = new Date(2000, -1200001); write(o4.toISOString()); // Make sure there is no AV for negative month (WOOB 1140748).
o4 = new Date(2000, -1); write(o4.toISOString());  // Check correctness when month is negative.
o4 = new Date("", 1e81); write(o4); // WOOB 1139099
o4 = new Date(); o4.o7(Number.o9); write(o4);  // WOOB 1142298
o4 = new Date(); o4.o7(-Number.o9); write(o4); // WOOB 1142298
