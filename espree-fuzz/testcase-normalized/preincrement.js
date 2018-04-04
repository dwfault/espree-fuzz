//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var test = 1; 
function o1(o2, o3, o4) { o5.o6("failure in test " + test + "; expected " + o3 + ", got " + o4); }
function o7() {
var o8;
var o9;
var o4;
var o10;
// Test 0: argument is a variable
o8 = 0;
o4 = (++ o8);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 1: argument is a variable
o8 = 1;
o4 = (++ o8);
o10 = 2;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 2: argument is a variable
o8 = -1;
o4 = (++ o8);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 3: argument is a variable
o8 = 2;
o4 = (++ o8);
o10 = 3;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 4: argument is a variable
o8 = -2;
o4 = (++ o8);
o10 = -1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 5: argument is a variable
o8 = 3;
o4 = (++ o8);
o10 = 4;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 6: argument is a variable
o8 = -3;
o4 = (++ o8);
o10 = -2;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 7: argument is a variable
o8 = 4;
o4 = (++ o8);
o10 = 5;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 8: argument is a variable
o8 = -4;
o4 = (++ o8);
o10 = -3;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 9: argument is a variable
o8 = 8;
o4 = (++ o8);
o10 = 9;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 10: argument is a variable
o8 = -8;
o4 = (++ o8);
o10 = -7;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 11: argument is a variable
o8 = 1073741822;
o4 = (++ o8);
o10 = 1073741823;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 12: argument is a variable
o8 = 1073741823;
o4 = (++ o8);
o10 = 1073741824;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 13: argument is a variable
o8 = 1073741824;
o4 = (++ o8);
o10 = 1073741825;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 14: argument is a variable
o8 = 1073741825;
o4 = (++ o8);
o10 = 1073741826;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 15: argument is a variable
o8 = -1073741823;
o4 = (++ o8);
o10 = -1073741822;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 16: argument is a variable
o8 = (-0x3fffffff-1);
o4 = (++ o8);
o10 = -1073741823;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 17: argument is a variable
o8 = -1073741825;
o4 = (++ o8);
o10 = -1073741824;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 18: argument is a variable
o8 = -1073741826;
o4 = (++ o8);
o10 = -1073741825;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 19: argument is a variable
o8 = 2147483646;
o4 = (++ o8);
o10 = 2147483647;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 20: argument is a variable
o8 = 2147483647;
o4 = (++ o8);
o10 = 2147483648;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 21: argument is a variable
o8 = 2147483648;
o4 = (++ o8);
o10 = 2147483649;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 22: argument is a variable
o8 = 2147483649;
o4 = (++ o8);
o10 = 2147483650;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 23: argument is a variable
o8 = -2147483647;
o4 = (++ o8);
o10 = -2147483646;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 24: argument is a variable
o8 = -2147483648;
o4 = (++ o8);
o10 = -2147483647;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 25: argument is a variable
o8 = -2147483649;
o4 = (++ o8);
o10 = -2147483648;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 26: argument is a variable
o8 = -2147483650;
o4 = (++ o8);
o10 = -2147483649;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 27: argument is a variable
o8 = 4294967295;
o4 = (++ o8);
o10 = 4294967296;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 28: argument is a variable
o8 = 4294967296;
o4 = (++ o8);
o10 = 4294967297;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 29: argument is a variable
o8 = -4294967295;
o4 = (++ o8);
o10 = -4294967294;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 30: argument is a variable
o8 = -4294967296;
o4 = (++ o8);
o10 = -4294967295;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

}
o7();
o5.o6("done");
