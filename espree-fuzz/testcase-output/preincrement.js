//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var test = 1; 
function o0(o1, o2, o3) { o4.o5("failure in test " + test + "; expected " + o2 + ", got " + o3); }
function o6() {
var o7;
var o8;
var o3;
var o9;
// Test 0: argument is a variable
o7 = 0;
o3 = (++ o7);
o9 = 1;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 1: argument is a variable
o7 = 1;
o3 = (++ o7);
o9 = 2;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 2: argument is a variable
o7 = -1;
o3 = (++ o7);
o9 = 0;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 3: argument is a variable
o7 = 2;
o3 = (++ o7);
o9 = 3;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 4: argument is a variable
o7 = -2;
o3 = (++ o7);
o9 = -1;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 5: argument is a variable
o7 = 3;
o3 = (++ o7);
o9 = 4;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 6: argument is a variable
o7 = -3;
o3 = (++ o7);
o9 = -2;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 7: argument is a variable
o7 = 4;
o3 = (++ o7);
o9 = 5;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 8: argument is a variable
o7 = -4;
o3 = (++ o7);
o9 = -3;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 9: argument is a variable
o7 = 8;
o3 = (++ o7);
o9 = 9;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 10: argument is a variable
o7 = -8;
o3 = (++ o7);
o9 = -7;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 11: argument is a variable
o7 = 1073741822;
o3 = (++ o7);
o9 = 1073741823;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 12: argument is a variable
o7 = 1073741823;
o3 = (++ o7);
o9 = 1073741824;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 13: argument is a variable
o7 = 1073741824;
o3 = (++ o7);
o9 = 1073741825;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 14: argument is a variable
o7 = 1073741825;
o3 = (++ o7);
o9 = 1073741826;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 15: argument is a variable
o7 = -1073741823;
o3 = (++ o7);
o9 = -1073741822;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 16: argument is a variable
o7 = (-0x3fffffff-1);
o3 = (++ o7);
o9 = -1073741823;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 17: argument is a variable
o7 = -1073741825;
o3 = (++ o7);
o9 = -1073741824;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 18: argument is a variable
o7 = -1073741826;
o3 = (++ o7);
o9 = -1073741825;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 19: argument is a variable
o7 = 2147483646;
o3 = (++ o7);
o9 = 2147483647;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 20: argument is a variable
o7 = 2147483647;
o3 = (++ o7);
o9 = 2147483648;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 21: argument is a variable
o7 = 2147483648;
o3 = (++ o7);
o9 = 2147483649;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 22: argument is a variable
o7 = 2147483649;
o3 = (++ o7);
o9 = 2147483650;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 23: argument is a variable
o7 = -2147483647;
o3 = (++ o7);
o9 = -2147483646;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 24: argument is a variable
o7 = -2147483648;
o3 = (++ o7);
o9 = -2147483647;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 25: argument is a variable
o7 = -2147483649;
o3 = (++ o7);
o9 = -2147483648;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 26: argument is a variable
o7 = -2147483650;
o3 = (++ o7);
o9 = -2147483649;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 27: argument is a variable
o7 = 4294967295;
o3 = (++ o7);
o9 = 4294967296;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 28: argument is a variable
o7 = 4294967296;
o3 = (++ o7);
o9 = 4294967297;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 29: argument is a variable
o7 = -4294967295;
o3 = (++ o7);
o9 = -4294967294;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

// Test 30: argument is a variable
o7 = -4294967296;
o3 = (++ o7);
o9 = -4294967295;
if(o3 != o9) { o0(test, o9, o3); } ++test; 

}
o6();
o4.o5("done");
