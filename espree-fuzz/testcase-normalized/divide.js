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
// Test 0: both arguments variables
o8 = 0;
o9 = 1;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 1: both arguments constants
o4 = (0 / 1)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 2: LHS constant
o9 = 1;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 3: RHS constant
o8 = 0;
o4 = (o8 / 1)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 4: both arguments variables
o8 = 0;
o9 = -1;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 5: both arguments constants
o4 = (0 / -1)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 6: LHS constant
o9 = -1;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 7: RHS constant
o8 = 0;
o4 = (o8 / -1)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 8: both arguments variables
o8 = 0;
o9 = 2;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 9: both arguments constants
o4 = (0 / 2)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 10: LHS constant
o9 = 2;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 11: RHS constant
o8 = 0;
o4 = (o8 / 2)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 12: both arguments variables
o8 = 0;
o9 = -2;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 13: both arguments constants
o4 = (0 / -2)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 14: LHS constant
o9 = -2;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 15: RHS constant
o8 = 0;
o4 = (o8 / -2)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 16: both arguments variables
o8 = 0;
o9 = 3;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 17: both arguments constants
o4 = (0 / 3)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 18: LHS constant
o9 = 3;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 19: RHS constant
o8 = 0;
o4 = (o8 / 3)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 20: both arguments variables
o8 = 0;
o9 = -3;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 21: both arguments constants
o4 = (0 / -3)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 22: LHS constant
o9 = -3;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 23: RHS constant
o8 = 0;
o4 = (o8 / -3)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 24: both arguments variables
o8 = 0;
o9 = 4;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 25: both arguments constants
o4 = (0 / 4)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 26: LHS constant
o9 = 4;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 27: RHS constant
o8 = 0;
o4 = (o8 / 4)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 28: both arguments variables
o8 = 0;
o9 = -4;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 29: both arguments constants
o4 = (0 / -4)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 30: LHS constant
o9 = -4;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 31: RHS constant
o8 = 0;
o4 = (o8 / -4)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 32: both arguments variables
o8 = 0;
o9 = 8;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 33: both arguments constants
o4 = (0 / 8)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 34: LHS constant
o9 = 8;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 35: RHS constant
o8 = 0;
o4 = (o8 / 8)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 36: both arguments variables
o8 = 0;
o9 = -8;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 37: both arguments constants
o4 = (0 / -8)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 38: LHS constant
o9 = -8;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 39: RHS constant
o8 = 0;
o4 = (o8 / -8)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 40: both arguments variables
o8 = 0;
o9 = 1073741822;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 41: both arguments constants
o4 = (0 / 1073741822)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 42: LHS constant
o9 = 1073741822;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 43: RHS constant
o8 = 0;
o4 = (o8 / 1073741822)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 44: both arguments variables
o8 = 0;
o9 = 1073741823;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 45: both arguments constants
o4 = (0 / 1073741823)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 46: LHS constant
o9 = 1073741823;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 47: RHS constant
o8 = 0;
o4 = (o8 / 1073741823)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 48: both arguments variables
o8 = 0;
o9 = 1073741824;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 49: both arguments constants
o4 = (0 / 1073741824)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 50: LHS constant
o9 = 1073741824;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 51: RHS constant
o8 = 0;
o4 = (o8 / 1073741824)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 52: both arguments variables
o8 = 0;
o9 = 1073741825;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 53: both arguments constants
o4 = (0 / 1073741825)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 54: LHS constant
o9 = 1073741825;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 55: RHS constant
o8 = 0;
o4 = (o8 / 1073741825)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 56: both arguments variables
o8 = 0;
o9 = -1073741823;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 57: both arguments constants
o4 = (0 / -1073741823)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 58: LHS constant
o9 = -1073741823;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 59: RHS constant
o8 = 0;
o4 = (o8 / -1073741823)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 60: both arguments variables
o8 = 0;
o9 = (-0x3fffffff-1);
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 61: both arguments constants
o4 = (0 / (-0x3fffffff-1))
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 62: LHS constant
o9 = (-0x3fffffff-1);
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 63: RHS constant
o8 = 0;
o4 = (o8 / (-0x3fffffff-1))
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 64: both arguments variables
o8 = 0;
o9 = -1073741825;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 65: both arguments constants
o4 = (0 / -1073741825)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 66: LHS constant
o9 = -1073741825;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 67: RHS constant
o8 = 0;
o4 = (o8 / -1073741825)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 68: both arguments variables
o8 = 0;
o9 = -1073741826;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 69: both arguments constants
o4 = (0 / -1073741826)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 70: LHS constant
o9 = -1073741826;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 71: RHS constant
o8 = 0;
o4 = (o8 / -1073741826)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 72: both arguments variables
o8 = 0;
o9 = 2147483646;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 73: both arguments constants
o4 = (0 / 2147483646)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 74: LHS constant
o9 = 2147483646;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 75: RHS constant
o8 = 0;
o4 = (o8 / 2147483646)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 76: both arguments variables
o8 = 0;
o9 = 2147483647;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 77: both arguments constants
o4 = (0 / 2147483647)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 78: LHS constant
o9 = 2147483647;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 79: RHS constant
o8 = 0;
o4 = (o8 / 2147483647)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 80: both arguments variables
o8 = 0;
o9 = 2147483648;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 81: both arguments constants
o4 = (0 / 2147483648)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 82: LHS constant
o9 = 2147483648;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 83: RHS constant
o8 = 0;
o4 = (o8 / 2147483648)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 84: both arguments variables
o8 = 0;
o9 = 2147483649;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 85: both arguments constants
o4 = (0 / 2147483649)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 86: LHS constant
o9 = 2147483649;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 87: RHS constant
o8 = 0;
o4 = (o8 / 2147483649)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 88: both arguments variables
o8 = 0;
o9 = -2147483647;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 89: both arguments constants
o4 = (0 / -2147483647)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 90: LHS constant
o9 = -2147483647;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 91: RHS constant
o8 = 0;
o4 = (o8 / -2147483647)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 92: both arguments variables
o8 = 0;
o9 = -2147483648;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 93: both arguments constants
o4 = (0 / -2147483648)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 94: LHS constant
o9 = -2147483648;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 95: RHS constant
o8 = 0;
o4 = (o8 / -2147483648)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 96: both arguments variables
o8 = 0;
o9 = -2147483649;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 97: both arguments constants
o4 = (0 / -2147483649)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 98: LHS constant
o9 = -2147483649;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 99: RHS constant
o8 = 0;
o4 = (o8 / -2147483649)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

}
function o11() {
var o8;
var o9;
var o4;
var o10;
// Test 100: both arguments variables
o8 = 0;
o9 = -2147483650;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 101: both arguments constants
o4 = (0 / -2147483650)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 102: LHS constant
o9 = -2147483650;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 103: RHS constant
o8 = 0;
o4 = (o8 / -2147483650)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 104: both arguments variables
o8 = 0;
o9 = 4294967295;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 105: both arguments constants
o4 = (0 / 4294967295)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 106: LHS constant
o9 = 4294967295;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 107: RHS constant
o8 = 0;
o4 = (o8 / 4294967295)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 108: both arguments variables
o8 = 0;
o9 = 4294967296;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 109: both arguments constants
o4 = (0 / 4294967296)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 110: LHS constant
o9 = 4294967296;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 111: RHS constant
o8 = 0;
o4 = (o8 / 4294967296)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 112: both arguments variables
o8 = 0;
o9 = -4294967295;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 113: both arguments constants
o4 = (0 / -4294967295)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 114: LHS constant
o9 = -4294967295;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 115: RHS constant
o8 = 0;
o4 = (o8 / -4294967295)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 116: both arguments variables
o8 = 0;
o9 = -4294967296;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 117: both arguments constants
o4 = (0 / -4294967296)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 118: LHS constant
o9 = -4294967296;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 119: RHS constant
o8 = 0;
o4 = (o8 / -4294967296)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 120: both arguments variables
o8 = 1;
o9 = 1;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 121: both arguments constants
o4 = (1 / 1)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 122: LHS constant
o9 = 1;
o4 = (1 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 123: RHS constant
o8 = 1;
o4 = (o8 / 1)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 124: both arguments variables
o8 = 1;
o9 = -1;
o4 = (o8 / o9);
o10 = -1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 125: both arguments constants
o4 = (1 / -1)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 126: LHS constant
o9 = -1;
o4 = (1 / o9)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 127: RHS constant
o8 = 1;
o4 = (o8 / -1)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 128: both arguments variables
o8 = -1;
o9 = 1;
o4 = (o8 / o9);
o10 = -1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 129: both arguments constants
o4 = (-1 / 1)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 130: LHS constant
o9 = 1;
o4 = (-1 / o9)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 131: RHS constant
o8 = -1;
o4 = (o8 / 1)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 132: both arguments variables
o8 = -1;
o9 = -1;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 133: both arguments constants
o4 = (-1 / -1)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 134: LHS constant
o9 = -1;
o4 = (-1 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 135: RHS constant
o8 = -1;
o4 = (o8 / -1)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 136: both arguments variables
o8 = 2;
o9 = 1;
o4 = (o8 / o9);
o10 = 2;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 137: both arguments constants
o4 = (2 / 1)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 138: LHS constant
o9 = 1;
o4 = (2 / o9)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 139: RHS constant
o8 = 2;
o4 = (o8 / 1)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 140: both arguments variables
o8 = 2;
o9 = -1;
o4 = (o8 / o9);
o10 = -2;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 141: both arguments constants
o4 = (2 / -1)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 142: LHS constant
o9 = -1;
o4 = (2 / o9)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 143: RHS constant
o8 = 2;
o4 = (o8 / -1)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 144: both arguments variables
o8 = 2;
o9 = 2;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 145: both arguments constants
o4 = (2 / 2)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 146: LHS constant
o9 = 2;
o4 = (2 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 147: RHS constant
o8 = 2;
o4 = (o8 / 2)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 148: both arguments variables
o8 = 2;
o9 = -2;
o4 = (o8 / o9);
o10 = -1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 149: both arguments constants
o4 = (2 / -2)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 150: LHS constant
o9 = -2;
o4 = (2 / o9)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 151: RHS constant
o8 = 2;
o4 = (o8 / -2)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 152: both arguments variables
o8 = -2;
o9 = 1;
o4 = (o8 / o9);
o10 = -2;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 153: both arguments constants
o4 = (-2 / 1)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 154: LHS constant
o9 = 1;
o4 = (-2 / o9)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 155: RHS constant
o8 = -2;
o4 = (o8 / 1)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 156: both arguments variables
o8 = -2;
o9 = -1;
o4 = (o8 / o9);
o10 = 2;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 157: both arguments constants
o4 = (-2 / -1)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 158: LHS constant
o9 = -1;
o4 = (-2 / o9)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 159: RHS constant
o8 = -2;
o4 = (o8 / -1)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 160: both arguments variables
o8 = -2;
o9 = 2;
o4 = (o8 / o9);
o10 = -1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 161: both arguments constants
o4 = (-2 / 2)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 162: LHS constant
o9 = 2;
o4 = (-2 / o9)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 163: RHS constant
o8 = -2;
o4 = (o8 / 2)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 164: both arguments variables
o8 = -2;
o9 = -2;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 165: both arguments constants
o4 = (-2 / -2)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 166: LHS constant
o9 = -2;
o4 = (-2 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 167: RHS constant
o8 = -2;
o4 = (o8 / -2)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 168: both arguments variables
o8 = 3;
o9 = 1;
o4 = (o8 / o9);
o10 = 3;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 169: both arguments constants
o4 = (3 / 1)
o10 = 3
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 170: LHS constant
o9 = 1;
o4 = (3 / o9)
o10 = 3
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 171: RHS constant
o8 = 3;
o4 = (o8 / 1)
o10 = 3
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 172: both arguments variables
o8 = 3;
o9 = -1;
o4 = (o8 / o9);
o10 = -3;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 173: both arguments constants
o4 = (3 / -1)
o10 = -3
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 174: LHS constant
o9 = -1;
o4 = (3 / o9)
o10 = -3
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 175: RHS constant
o8 = 3;
o4 = (o8 / -1)
o10 = -3
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 176: both arguments variables
o8 = 3;
o9 = 3;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 177: both arguments constants
o4 = (3 / 3)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 178: LHS constant
o9 = 3;
o4 = (3 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 179: RHS constant
o8 = 3;
o4 = (o8 / 3)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 180: both arguments variables
o8 = 3;
o9 = -3;
o4 = (o8 / o9);
o10 = -1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 181: both arguments constants
o4 = (3 / -3)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 182: LHS constant
o9 = -3;
o4 = (3 / o9)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 183: RHS constant
o8 = 3;
o4 = (o8 / -3)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 184: both arguments variables
o8 = -3;
o9 = 1;
o4 = (o8 / o9);
o10 = -3;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 185: both arguments constants
o4 = (-3 / 1)
o10 = -3
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 186: LHS constant
o9 = 1;
o4 = (-3 / o9)
o10 = -3
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 187: RHS constant
o8 = -3;
o4 = (o8 / 1)
o10 = -3
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 188: both arguments variables
o8 = -3;
o9 = -1;
o4 = (o8 / o9);
o10 = 3;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 189: both arguments constants
o4 = (-3 / -1)
o10 = 3
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 190: LHS constant
o9 = -1;
o4 = (-3 / o9)
o10 = 3
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 191: RHS constant
o8 = -3;
o4 = (o8 / -1)
o10 = 3
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 192: both arguments variables
o8 = -3;
o9 = 3;
o4 = (o8 / o9);
o10 = -1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 193: both arguments constants
o4 = (-3 / 3)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 194: LHS constant
o9 = 3;
o4 = (-3 / o9)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 195: RHS constant
o8 = -3;
o4 = (o8 / 3)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 196: both arguments variables
o8 = -3;
o9 = -3;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 197: both arguments constants
o4 = (-3 / -3)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 198: LHS constant
o9 = -3;
o4 = (-3 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 199: RHS constant
o8 = -3;
o4 = (o8 / -3)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

}
function o12() {
var o8;
var o9;
var o4;
var o10;
// Test 200: both arguments variables
o8 = 4;
o9 = 1;
o4 = (o8 / o9);
o10 = 4;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 201: both arguments constants
o4 = (4 / 1)
o10 = 4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 202: LHS constant
o9 = 1;
o4 = (4 / o9)
o10 = 4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 203: RHS constant
o8 = 4;
o4 = (o8 / 1)
o10 = 4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 204: both arguments variables
o8 = 4;
o9 = -1;
o4 = (o8 / o9);
o10 = -4;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 205: both arguments constants
o4 = (4 / -1)
o10 = -4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 206: LHS constant
o9 = -1;
o4 = (4 / o9)
o10 = -4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 207: RHS constant
o8 = 4;
o4 = (o8 / -1)
o10 = -4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 208: both arguments variables
o8 = 4;
o9 = 2;
o4 = (o8 / o9);
o10 = 2;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 209: both arguments constants
o4 = (4 / 2)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 210: LHS constant
o9 = 2;
o4 = (4 / o9)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 211: RHS constant
o8 = 4;
o4 = (o8 / 2)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 212: both arguments variables
o8 = 4;
o9 = -2;
o4 = (o8 / o9);
o10 = -2;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 213: both arguments constants
o4 = (4 / -2)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 214: LHS constant
o9 = -2;
o4 = (4 / o9)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 215: RHS constant
o8 = 4;
o4 = (o8 / -2)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 216: both arguments variables
o8 = 4;
o9 = 4;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 217: both arguments constants
o4 = (4 / 4)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 218: LHS constant
o9 = 4;
o4 = (4 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 219: RHS constant
o8 = 4;
o4 = (o8 / 4)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 220: both arguments variables
o8 = 4;
o9 = -4;
o4 = (o8 / o9);
o10 = -1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 221: both arguments constants
o4 = (4 / -4)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 222: LHS constant
o9 = -4;
o4 = (4 / o9)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 223: RHS constant
o8 = 4;
o4 = (o8 / -4)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 224: both arguments variables
o8 = -4;
o9 = 1;
o4 = (o8 / o9);
o10 = -4;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 225: both arguments constants
o4 = (-4 / 1)
o10 = -4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 226: LHS constant
o9 = 1;
o4 = (-4 / o9)
o10 = -4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 227: RHS constant
o8 = -4;
o4 = (o8 / 1)
o10 = -4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 228: both arguments variables
o8 = -4;
o9 = -1;
o4 = (o8 / o9);
o10 = 4;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 229: both arguments constants
o4 = (-4 / -1)
o10 = 4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 230: LHS constant
o9 = -1;
o4 = (-4 / o9)
o10 = 4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 231: RHS constant
o8 = -4;
o4 = (o8 / -1)
o10 = 4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 232: both arguments variables
o8 = -4;
o9 = 2;
o4 = (o8 / o9);
o10 = -2;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 233: both arguments constants
o4 = (-4 / 2)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 234: LHS constant
o9 = 2;
o4 = (-4 / o9)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 235: RHS constant
o8 = -4;
o4 = (o8 / 2)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 236: both arguments variables
o8 = -4;
o9 = -2;
o4 = (o8 / o9);
o10 = 2;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 237: both arguments constants
o4 = (-4 / -2)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 238: LHS constant
o9 = -2;
o4 = (-4 / o9)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 239: RHS constant
o8 = -4;
o4 = (o8 / -2)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 240: both arguments variables
o8 = -4;
o9 = 4;
o4 = (o8 / o9);
o10 = -1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 241: both arguments constants
o4 = (-4 / 4)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 242: LHS constant
o9 = 4;
o4 = (-4 / o9)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 243: RHS constant
o8 = -4;
o4 = (o8 / 4)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 244: both arguments variables
o8 = -4;
o9 = -4;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 245: both arguments constants
o4 = (-4 / -4)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 246: LHS constant
o9 = -4;
o4 = (-4 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 247: RHS constant
o8 = -4;
o4 = (o8 / -4)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 248: both arguments variables
o8 = 8;
o9 = 1;
o4 = (o8 / o9);
o10 = 8;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 249: both arguments constants
o4 = (8 / 1)
o10 = 8
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 250: LHS constant
o9 = 1;
o4 = (8 / o9)
o10 = 8
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 251: RHS constant
o8 = 8;
o4 = (o8 / 1)
o10 = 8
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 252: both arguments variables
o8 = 8;
o9 = -1;
o4 = (o8 / o9);
o10 = -8;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 253: both arguments constants
o4 = (8 / -1)
o10 = -8
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 254: LHS constant
o9 = -1;
o4 = (8 / o9)
o10 = -8
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 255: RHS constant
o8 = 8;
o4 = (o8 / -1)
o10 = -8
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 256: both arguments variables
o8 = 8;
o9 = 2;
o4 = (o8 / o9);
o10 = 4;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 257: both arguments constants
o4 = (8 / 2)
o10 = 4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 258: LHS constant
o9 = 2;
o4 = (8 / o9)
o10 = 4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 259: RHS constant
o8 = 8;
o4 = (o8 / 2)
o10 = 4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 260: both arguments variables
o8 = 8;
o9 = -2;
o4 = (o8 / o9);
o10 = -4;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 261: both arguments constants
o4 = (8 / -2)
o10 = -4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 262: LHS constant
o9 = -2;
o4 = (8 / o9)
o10 = -4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 263: RHS constant
o8 = 8;
o4 = (o8 / -2)
o10 = -4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 264: both arguments variables
o8 = 8;
o9 = 4;
o4 = (o8 / o9);
o10 = 2;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 265: both arguments constants
o4 = (8 / 4)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 266: LHS constant
o9 = 4;
o4 = (8 / o9)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 267: RHS constant
o8 = 8;
o4 = (o8 / 4)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 268: both arguments variables
o8 = 8;
o9 = -4;
o4 = (o8 / o9);
o10 = -2;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 269: both arguments constants
o4 = (8 / -4)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 270: LHS constant
o9 = -4;
o4 = (8 / o9)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 271: RHS constant
o8 = 8;
o4 = (o8 / -4)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 272: both arguments variables
o8 = 8;
o9 = 8;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 273: both arguments constants
o4 = (8 / 8)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 274: LHS constant
o9 = 8;
o4 = (8 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 275: RHS constant
o8 = 8;
o4 = (o8 / 8)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 276: both arguments variables
o8 = 8;
o9 = -8;
o4 = (o8 / o9);
o10 = -1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 277: both arguments constants
o4 = (8 / -8)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 278: LHS constant
o9 = -8;
o4 = (8 / o9)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 279: RHS constant
o8 = 8;
o4 = (o8 / -8)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 280: both arguments variables
o8 = -8;
o9 = 1;
o4 = (o8 / o9);
o10 = -8;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 281: both arguments constants
o4 = (-8 / 1)
o10 = -8
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 282: LHS constant
o9 = 1;
o4 = (-8 / o9)
o10 = -8
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 283: RHS constant
o8 = -8;
o4 = (o8 / 1)
o10 = -8
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 284: both arguments variables
o8 = -8;
o9 = -1;
o4 = (o8 / o9);
o10 = 8;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 285: both arguments constants
o4 = (-8 / -1)
o10 = 8
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 286: LHS constant
o9 = -1;
o4 = (-8 / o9)
o10 = 8
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 287: RHS constant
o8 = -8;
o4 = (o8 / -1)
o10 = 8
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 288: both arguments variables
o8 = -8;
o9 = 2;
o4 = (o8 / o9);
o10 = -4;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 289: both arguments constants
o4 = (-8 / 2)
o10 = -4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 290: LHS constant
o9 = 2;
o4 = (-8 / o9)
o10 = -4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 291: RHS constant
o8 = -8;
o4 = (o8 / 2)
o10 = -4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 292: both arguments variables
o8 = -8;
o9 = -2;
o4 = (o8 / o9);
o10 = 4;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 293: both arguments constants
o4 = (-8 / -2)
o10 = 4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 294: LHS constant
o9 = -2;
o4 = (-8 / o9)
o10 = 4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 295: RHS constant
o8 = -8;
o4 = (o8 / -2)
o10 = 4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 296: both arguments variables
o8 = -8;
o9 = 4;
o4 = (o8 / o9);
o10 = -2;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 297: both arguments constants
o4 = (-8 / 4)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 298: LHS constant
o9 = 4;
o4 = (-8 / o9)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 299: RHS constant
o8 = -8;
o4 = (o8 / 4)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

}
function o13() {
var o8;
var o9;
var o4;
var o10;
// Test 300: both arguments variables
o8 = -8;
o9 = -4;
o4 = (o8 / o9);
o10 = 2;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 301: both arguments constants
o4 = (-8 / -4)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 302: LHS constant
o9 = -4;
o4 = (-8 / o9)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 303: RHS constant
o8 = -8;
o4 = (o8 / -4)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 304: both arguments variables
o8 = -8;
o9 = 8;
o4 = (o8 / o9);
o10 = -1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 305: both arguments constants
o4 = (-8 / 8)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 306: LHS constant
o9 = 8;
o4 = (-8 / o9)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 307: RHS constant
o8 = -8;
o4 = (o8 / 8)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 308: both arguments variables
o8 = -8;
o9 = -8;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 309: both arguments constants
o4 = (-8 / -8)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 310: LHS constant
o9 = -8;
o4 = (-8 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 311: RHS constant
o8 = -8;
o4 = (o8 / -8)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 312: both arguments variables
o8 = 1073741822;
o9 = 1;
o4 = (o8 / o9);
o10 = 1073741822;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 313: both arguments constants
o4 = (1073741822 / 1)
o10 = 1073741822
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 314: LHS constant
o9 = 1;
o4 = (1073741822 / o9)
o10 = 1073741822
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 315: RHS constant
o8 = 1073741822;
o4 = (o8 / 1)
o10 = 1073741822
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 316: both arguments variables
o8 = 1073741822;
o9 = -1;
o4 = (o8 / o9);
o10 = -1073741822;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 317: both arguments constants
o4 = (1073741822 / -1)
o10 = -1073741822
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 318: LHS constant
o9 = -1;
o4 = (1073741822 / o9)
o10 = -1073741822
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 319: RHS constant
o8 = 1073741822;
o4 = (o8 / -1)
o10 = -1073741822
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 320: both arguments variables
o8 = 1073741822;
o9 = 2;
o4 = (o8 / o9);
o10 = 536870911;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 321: both arguments constants
o4 = (1073741822 / 2)
o10 = 536870911
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 322: LHS constant
o9 = 2;
o4 = (1073741822 / o9)
o10 = 536870911
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 323: RHS constant
o8 = 1073741822;
o4 = (o8 / 2)
o10 = 536870911
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 324: both arguments variables
o8 = 1073741822;
o9 = -2;
o4 = (o8 / o9);
o10 = -536870911;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 325: both arguments constants
o4 = (1073741822 / -2)
o10 = -536870911
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 326: LHS constant
o9 = -2;
o4 = (1073741822 / o9)
o10 = -536870911
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 327: RHS constant
o8 = 1073741822;
o4 = (o8 / -2)
o10 = -536870911
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 328: both arguments variables
o8 = 1073741822;
o9 = 1073741822;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 329: both arguments constants
o4 = (1073741822 / 1073741822)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 330: LHS constant
o9 = 1073741822;
o4 = (1073741822 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 331: RHS constant
o8 = 1073741822;
o4 = (o8 / 1073741822)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 332: both arguments variables
o8 = 1073741823;
o9 = 1;
o4 = (o8 / o9);
o10 = 1073741823;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 333: both arguments constants
o4 = (1073741823 / 1)
o10 = 1073741823
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 334: LHS constant
o9 = 1;
o4 = (1073741823 / o9)
o10 = 1073741823
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 335: RHS constant
o8 = 1073741823;
o4 = (o8 / 1)
o10 = 1073741823
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 336: both arguments variables
o8 = 1073741823;
o9 = -1;
o4 = (o8 / o9);
o10 = -1073741823;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 337: both arguments constants
o4 = (1073741823 / -1)
o10 = -1073741823
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 338: LHS constant
o9 = -1;
o4 = (1073741823 / o9)
o10 = -1073741823
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 339: RHS constant
o8 = 1073741823;
o4 = (o8 / -1)
o10 = -1073741823
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 340: both arguments variables
o8 = 1073741823;
o9 = 3;
o4 = (o8 / o9);
o10 = 357913941;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 341: both arguments constants
o4 = (1073741823 / 3)
o10 = 357913941
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 342: LHS constant
o9 = 3;
o4 = (1073741823 / o9)
o10 = 357913941
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 343: RHS constant
o8 = 1073741823;
o4 = (o8 / 3)
o10 = 357913941
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 344: both arguments variables
o8 = 1073741823;
o9 = -3;
o4 = (o8 / o9);
o10 = -357913941;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 345: both arguments constants
o4 = (1073741823 / -3)
o10 = -357913941
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 346: LHS constant
o9 = -3;
o4 = (1073741823 / o9)
o10 = -357913941
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 347: RHS constant
o8 = 1073741823;
o4 = (o8 / -3)
o10 = -357913941
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 348: both arguments variables
o8 = 1073741823;
o9 = 1073741823;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 349: both arguments constants
o4 = (1073741823 / 1073741823)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 350: LHS constant
o9 = 1073741823;
o4 = (1073741823 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 351: RHS constant
o8 = 1073741823;
o4 = (o8 / 1073741823)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 352: both arguments variables
o8 = 1073741823;
o9 = -1073741823;
o4 = (o8 / o9);
o10 = -1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 353: both arguments constants
o4 = (1073741823 / -1073741823)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 354: LHS constant
o9 = -1073741823;
o4 = (1073741823 / o9)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 355: RHS constant
o8 = 1073741823;
o4 = (o8 / -1073741823)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 356: both arguments variables
o8 = 1073741824;
o9 = 1;
o4 = (o8 / o9);
o10 = 1073741824;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 357: both arguments constants
o4 = (1073741824 / 1)
o10 = 1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 358: LHS constant
o9 = 1;
o4 = (1073741824 / o9)
o10 = 1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 359: RHS constant
o8 = 1073741824;
o4 = (o8 / 1)
o10 = 1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 360: both arguments variables
o8 = 1073741824;
o9 = -1;
o4 = (o8 / o9);
o10 = -1073741824;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 361: both arguments constants
o4 = (1073741824 / -1)
o10 = -1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 362: LHS constant
o9 = -1;
o4 = (1073741824 / o9)
o10 = -1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 363: RHS constant
o8 = 1073741824;
o4 = (o8 / -1)
o10 = -1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 364: both arguments variables
o8 = 1073741824;
o9 = 2;
o4 = (o8 / o9);
o10 = 536870912;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 365: both arguments constants
o4 = (1073741824 / 2)
o10 = 536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 366: LHS constant
o9 = 2;
o4 = (1073741824 / o9)
o10 = 536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 367: RHS constant
o8 = 1073741824;
o4 = (o8 / 2)
o10 = 536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 368: both arguments variables
o8 = 1073741824;
o9 = -2;
o4 = (o8 / o9);
o10 = -536870912;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 369: both arguments constants
o4 = (1073741824 / -2)
o10 = -536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 370: LHS constant
o9 = -2;
o4 = (1073741824 / o9)
o10 = -536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 371: RHS constant
o8 = 1073741824;
o4 = (o8 / -2)
o10 = -536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 372: both arguments variables
o8 = 1073741824;
o9 = 4;
o4 = (o8 / o9);
o10 = 268435456;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 373: both arguments constants
o4 = (1073741824 / 4)
o10 = 268435456
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 374: LHS constant
o9 = 4;
o4 = (1073741824 / o9)
o10 = 268435456
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 375: RHS constant
o8 = 1073741824;
o4 = (o8 / 4)
o10 = 268435456
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 376: both arguments variables
o8 = 1073741824;
o9 = -4;
o4 = (o8 / o9);
o10 = -268435456;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 377: both arguments constants
o4 = (1073741824 / -4)
o10 = -268435456
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 378: LHS constant
o9 = -4;
o4 = (1073741824 / o9)
o10 = -268435456
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 379: RHS constant
o8 = 1073741824;
o4 = (o8 / -4)
o10 = -268435456
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 380: both arguments variables
o8 = 1073741824;
o9 = 8;
o4 = (o8 / o9);
o10 = 134217728;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 381: both arguments constants
o4 = (1073741824 / 8)
o10 = 134217728
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 382: LHS constant
o9 = 8;
o4 = (1073741824 / o9)
o10 = 134217728
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 383: RHS constant
o8 = 1073741824;
o4 = (o8 / 8)
o10 = 134217728
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 384: both arguments variables
o8 = 1073741824;
o9 = -8;
o4 = (o8 / o9);
o10 = -134217728;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 385: both arguments constants
o4 = (1073741824 / -8)
o10 = -134217728
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 386: LHS constant
o9 = -8;
o4 = (1073741824 / o9)
o10 = -134217728
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 387: RHS constant
o8 = 1073741824;
o4 = (o8 / -8)
o10 = -134217728
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 388: both arguments variables
o8 = 1073741824;
o9 = 1073741824;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 389: both arguments constants
o4 = (1073741824 / 1073741824)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 390: LHS constant
o9 = 1073741824;
o4 = (1073741824 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 391: RHS constant
o8 = 1073741824;
o4 = (o8 / 1073741824)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 392: both arguments variables
o8 = 1073741824;
o9 = (-0x3fffffff-1);
o4 = (o8 / o9);
o10 = -1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 393: both arguments constants
o4 = (1073741824 / (-0x3fffffff-1))
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 394: LHS constant
o9 = (-0x3fffffff-1);
o4 = (1073741824 / o9)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 395: RHS constant
o8 = 1073741824;
o4 = (o8 / (-0x3fffffff-1))
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 396: both arguments variables
o8 = 1073741825;
o9 = 1;
o4 = (o8 / o9);
o10 = 1073741825;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 397: both arguments constants
o4 = (1073741825 / 1)
o10 = 1073741825
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 398: LHS constant
o9 = 1;
o4 = (1073741825 / o9)
o10 = 1073741825
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 399: RHS constant
o8 = 1073741825;
o4 = (o8 / 1)
o10 = 1073741825
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

}
function o14() {
var o8;
var o9;
var o4;
var o10;
// Test 400: both arguments variables
o8 = 1073741825;
o9 = -1;
o4 = (o8 / o9);
o10 = -1073741825;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 401: both arguments constants
o4 = (1073741825 / -1)
o10 = -1073741825
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 402: LHS constant
o9 = -1;
o4 = (1073741825 / o9)
o10 = -1073741825
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 403: RHS constant
o8 = 1073741825;
o4 = (o8 / -1)
o10 = -1073741825
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 404: both arguments variables
o8 = 1073741825;
o9 = 1073741825;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 405: both arguments constants
o4 = (1073741825 / 1073741825)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 406: LHS constant
o9 = 1073741825;
o4 = (1073741825 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 407: RHS constant
o8 = 1073741825;
o4 = (o8 / 1073741825)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 408: both arguments variables
o8 = 1073741825;
o9 = -1073741825;
o4 = (o8 / o9);
o10 = -1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 409: both arguments constants
o4 = (1073741825 / -1073741825)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 410: LHS constant
o9 = -1073741825;
o4 = (1073741825 / o9)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 411: RHS constant
o8 = 1073741825;
o4 = (o8 / -1073741825)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 412: both arguments variables
o8 = -1073741823;
o9 = 1;
o4 = (o8 / o9);
o10 = -1073741823;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 413: both arguments constants
o4 = (-1073741823 / 1)
o10 = -1073741823
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 414: LHS constant
o9 = 1;
o4 = (-1073741823 / o9)
o10 = -1073741823
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 415: RHS constant
o8 = -1073741823;
o4 = (o8 / 1)
o10 = -1073741823
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 416: both arguments variables
o8 = -1073741823;
o9 = -1;
o4 = (o8 / o9);
o10 = 1073741823;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 417: both arguments constants
o4 = (-1073741823 / -1)
o10 = 1073741823
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 418: LHS constant
o9 = -1;
o4 = (-1073741823 / o9)
o10 = 1073741823
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 419: RHS constant
o8 = -1073741823;
o4 = (o8 / -1)
o10 = 1073741823
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 420: both arguments variables
o8 = -1073741823;
o9 = 3;
o4 = (o8 / o9);
o10 = -357913941;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 421: both arguments constants
o4 = (-1073741823 / 3)
o10 = -357913941
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 422: LHS constant
o9 = 3;
o4 = (-1073741823 / o9)
o10 = -357913941
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 423: RHS constant
o8 = -1073741823;
o4 = (o8 / 3)
o10 = -357913941
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 424: both arguments variables
o8 = -1073741823;
o9 = -3;
o4 = (o8 / o9);
o10 = 357913941;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 425: both arguments constants
o4 = (-1073741823 / -3)
o10 = 357913941
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 426: LHS constant
o9 = -3;
o4 = (-1073741823 / o9)
o10 = 357913941
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 427: RHS constant
o8 = -1073741823;
o4 = (o8 / -3)
o10 = 357913941
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 428: both arguments variables
o8 = -1073741823;
o9 = 1073741823;
o4 = (o8 / o9);
o10 = -1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 429: both arguments constants
o4 = (-1073741823 / 1073741823)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 430: LHS constant
o9 = 1073741823;
o4 = (-1073741823 / o9)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 431: RHS constant
o8 = -1073741823;
o4 = (o8 / 1073741823)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 432: both arguments variables
o8 = -1073741823;
o9 = -1073741823;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 433: both arguments constants
o4 = (-1073741823 / -1073741823)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 434: LHS constant
o9 = -1073741823;
o4 = (-1073741823 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 435: RHS constant
o8 = -1073741823;
o4 = (o8 / -1073741823)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 436: both arguments variables
o8 = (-0x3fffffff-1);
o9 = 1;
o4 = (o8 / o9);
o10 = -1073741824;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 437: both arguments constants
o4 = ((-0x3fffffff-1) / 1)
o10 = -1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 438: LHS constant
o9 = 1;
o4 = ((-0x3fffffff-1) / o9)
o10 = -1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 439: RHS constant
o8 = (-0x3fffffff-1);
o4 = (o8 / 1)
o10 = -1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 440: both arguments variables
o8 = (-0x3fffffff-1);
o9 = -1;
o4 = (o8 / o9);
o10 = 1073741824;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 441: both arguments constants
o4 = ((-0x3fffffff-1) / -1)
o10 = 1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 442: LHS constant
o9 = -1;
o4 = ((-0x3fffffff-1) / o9)
o10 = 1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 443: RHS constant
o8 = (-0x3fffffff-1);
o4 = (o8 / -1)
o10 = 1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 444: both arguments variables
o8 = (-0x3fffffff-1);
o9 = 2;
o4 = (o8 / o9);
o10 = -536870912;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 445: both arguments constants
o4 = ((-0x3fffffff-1) / 2)
o10 = -536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 446: LHS constant
o9 = 2;
o4 = ((-0x3fffffff-1) / o9)
o10 = -536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 447: RHS constant
o8 = (-0x3fffffff-1);
o4 = (o8 / 2)
o10 = -536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 448: both arguments variables
o8 = (-0x3fffffff-1);
o9 = -2;
o4 = (o8 / o9);
o10 = 536870912;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 449: both arguments constants
o4 = ((-0x3fffffff-1) / -2)
o10 = 536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 450: LHS constant
o9 = -2;
o4 = ((-0x3fffffff-1) / o9)
o10 = 536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 451: RHS constant
o8 = (-0x3fffffff-1);
o4 = (o8 / -2)
o10 = 536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 452: both arguments variables
o8 = (-0x3fffffff-1);
o9 = 4;
o4 = (o8 / o9);
o10 = -268435456;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 453: both arguments constants
o4 = ((-0x3fffffff-1) / 4)
o10 = -268435456
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 454: LHS constant
o9 = 4;
o4 = ((-0x3fffffff-1) / o9)
o10 = -268435456
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 455: RHS constant
o8 = (-0x3fffffff-1);
o4 = (o8 / 4)
o10 = -268435456
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 456: both arguments variables
o8 = (-0x3fffffff-1);
o9 = -4;
o4 = (o8 / o9);
o10 = 268435456;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 457: both arguments constants
o4 = ((-0x3fffffff-1) / -4)
o10 = 268435456
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 458: LHS constant
o9 = -4;
o4 = ((-0x3fffffff-1) / o9)
o10 = 268435456
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 459: RHS constant
o8 = (-0x3fffffff-1);
o4 = (o8 / -4)
o10 = 268435456
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 460: both arguments variables
o8 = (-0x3fffffff-1);
o9 = 8;
o4 = (o8 / o9);
o10 = -134217728;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 461: both arguments constants
o4 = ((-0x3fffffff-1) / 8)
o10 = -134217728
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 462: LHS constant
o9 = 8;
o4 = ((-0x3fffffff-1) / o9)
o10 = -134217728
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 463: RHS constant
o8 = (-0x3fffffff-1);
o4 = (o8 / 8)
o10 = -134217728
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 464: both arguments variables
o8 = (-0x3fffffff-1);
o9 = -8;
o4 = (o8 / o9);
o10 = 134217728;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 465: both arguments constants
o4 = ((-0x3fffffff-1) / -8)
o10 = 134217728
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 466: LHS constant
o9 = -8;
o4 = ((-0x3fffffff-1) / o9)
o10 = 134217728
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 467: RHS constant
o8 = (-0x3fffffff-1);
o4 = (o8 / -8)
o10 = 134217728
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 468: both arguments variables
o8 = (-0x3fffffff-1);
o9 = 1073741824;
o4 = (o8 / o9);
o10 = -1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 469: both arguments constants
o4 = ((-0x3fffffff-1) / 1073741824)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 470: LHS constant
o9 = 1073741824;
o4 = ((-0x3fffffff-1) / o9)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 471: RHS constant
o8 = (-0x3fffffff-1);
o4 = (o8 / 1073741824)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 472: both arguments variables
o8 = (-0x3fffffff-1);
o9 = (-0x3fffffff-1);
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 473: both arguments constants
o4 = ((-0x3fffffff-1) / (-0x3fffffff-1))
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 474: LHS constant
o9 = (-0x3fffffff-1);
o4 = ((-0x3fffffff-1) / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 475: RHS constant
o8 = (-0x3fffffff-1);
o4 = (o8 / (-0x3fffffff-1))
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 476: both arguments variables
o8 = -1073741825;
o9 = 1;
o4 = (o8 / o9);
o10 = -1073741825;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 477: both arguments constants
o4 = (-1073741825 / 1)
o10 = -1073741825
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 478: LHS constant
o9 = 1;
o4 = (-1073741825 / o9)
o10 = -1073741825
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 479: RHS constant
o8 = -1073741825;
o4 = (o8 / 1)
o10 = -1073741825
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 480: both arguments variables
o8 = -1073741825;
o9 = -1;
o4 = (o8 / o9);
o10 = 1073741825;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 481: both arguments constants
o4 = (-1073741825 / -1)
o10 = 1073741825
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 482: LHS constant
o9 = -1;
o4 = (-1073741825 / o9)
o10 = 1073741825
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 483: RHS constant
o8 = -1073741825;
o4 = (o8 / -1)
o10 = 1073741825
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 484: both arguments variables
o8 = -1073741825;
o9 = 1073741825;
o4 = (o8 / o9);
o10 = -1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 485: both arguments constants
o4 = (-1073741825 / 1073741825)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 486: LHS constant
o9 = 1073741825;
o4 = (-1073741825 / o9)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 487: RHS constant
o8 = -1073741825;
o4 = (o8 / 1073741825)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 488: both arguments variables
o8 = -1073741825;
o9 = -1073741825;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 489: both arguments constants
o4 = (-1073741825 / -1073741825)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 490: LHS constant
o9 = -1073741825;
o4 = (-1073741825 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 491: RHS constant
o8 = -1073741825;
o4 = (o8 / -1073741825)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 492: both arguments variables
o8 = -1073741826;
o9 = 1;
o4 = (o8 / o9);
o10 = -1073741826;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 493: both arguments constants
o4 = (-1073741826 / 1)
o10 = -1073741826
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 494: LHS constant
o9 = 1;
o4 = (-1073741826 / o9)
o10 = -1073741826
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 495: RHS constant
o8 = -1073741826;
o4 = (o8 / 1)
o10 = -1073741826
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 496: both arguments variables
o8 = -1073741826;
o9 = -1;
o4 = (o8 / o9);
o10 = 1073741826;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 497: both arguments constants
o4 = (-1073741826 / -1)
o10 = 1073741826
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 498: LHS constant
o9 = -1;
o4 = (-1073741826 / o9)
o10 = 1073741826
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 499: RHS constant
o8 = -1073741826;
o4 = (o8 / -1)
o10 = 1073741826
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

}
function o15() {
var o8;
var o9;
var o4;
var o10;
// Test 500: both arguments variables
o8 = -1073741826;
o9 = 2;
o4 = (o8 / o9);
o10 = -536870913;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 501: both arguments constants
o4 = (-1073741826 / 2)
o10 = -536870913
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 502: LHS constant
o9 = 2;
o4 = (-1073741826 / o9)
o10 = -536870913
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 503: RHS constant
o8 = -1073741826;
o4 = (o8 / 2)
o10 = -536870913
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 504: both arguments variables
o8 = -1073741826;
o9 = -2;
o4 = (o8 / o9);
o10 = 536870913;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 505: both arguments constants
o4 = (-1073741826 / -2)
o10 = 536870913
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 506: LHS constant
o9 = -2;
o4 = (-1073741826 / o9)
o10 = 536870913
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 507: RHS constant
o8 = -1073741826;
o4 = (o8 / -2)
o10 = 536870913
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 508: both arguments variables
o8 = -1073741826;
o9 = 3;
o4 = (o8 / o9);
o10 = -357913942;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 509: both arguments constants
o4 = (-1073741826 / 3)
o10 = -357913942
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 510: LHS constant
o9 = 3;
o4 = (-1073741826 / o9)
o10 = -357913942
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 511: RHS constant
o8 = -1073741826;
o4 = (o8 / 3)
o10 = -357913942
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 512: both arguments variables
o8 = -1073741826;
o9 = -3;
o4 = (o8 / o9);
o10 = 357913942;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 513: both arguments constants
o4 = (-1073741826 / -3)
o10 = 357913942
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 514: LHS constant
o9 = -3;
o4 = (-1073741826 / o9)
o10 = 357913942
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 515: RHS constant
o8 = -1073741826;
o4 = (o8 / -3)
o10 = 357913942
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 516: both arguments variables
o8 = -1073741826;
o9 = -1073741826;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 517: both arguments constants
o4 = (-1073741826 / -1073741826)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 518: LHS constant
o9 = -1073741826;
o4 = (-1073741826 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 519: RHS constant
o8 = -1073741826;
o4 = (o8 / -1073741826)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 520: both arguments variables
o8 = 2147483646;
o9 = 1;
o4 = (o8 / o9);
o10 = 2147483646;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 521: both arguments constants
o4 = (2147483646 / 1)
o10 = 2147483646
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 522: LHS constant
o9 = 1;
o4 = (2147483646 / o9)
o10 = 2147483646
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 523: RHS constant
o8 = 2147483646;
o4 = (o8 / 1)
o10 = 2147483646
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 524: both arguments variables
o8 = 2147483646;
o9 = -1;
o4 = (o8 / o9);
o10 = -2147483646;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 525: both arguments constants
o4 = (2147483646 / -1)
o10 = -2147483646
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 526: LHS constant
o9 = -1;
o4 = (2147483646 / o9)
o10 = -2147483646
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 527: RHS constant
o8 = 2147483646;
o4 = (o8 / -1)
o10 = -2147483646
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 528: both arguments variables
o8 = 2147483646;
o9 = 2;
o4 = (o8 / o9);
o10 = 1073741823;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 529: both arguments constants
o4 = (2147483646 / 2)
o10 = 1073741823
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 530: LHS constant
o9 = 2;
o4 = (2147483646 / o9)
o10 = 1073741823
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 531: RHS constant
o8 = 2147483646;
o4 = (o8 / 2)
o10 = 1073741823
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 532: both arguments variables
o8 = 2147483646;
o9 = -2;
o4 = (o8 / o9);
o10 = -1073741823;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 533: both arguments constants
o4 = (2147483646 / -2)
o10 = -1073741823
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 534: LHS constant
o9 = -2;
o4 = (2147483646 / o9)
o10 = -1073741823
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 535: RHS constant
o8 = 2147483646;
o4 = (o8 / -2)
o10 = -1073741823
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 536: both arguments variables
o8 = 2147483646;
o9 = 3;
o4 = (o8 / o9);
o10 = 715827882;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 537: both arguments constants
o4 = (2147483646 / 3)
o10 = 715827882
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 538: LHS constant
o9 = 3;
o4 = (2147483646 / o9)
o10 = 715827882
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 539: RHS constant
o8 = 2147483646;
o4 = (o8 / 3)
o10 = 715827882
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 540: both arguments variables
o8 = 2147483646;
o9 = -3;
o4 = (o8 / o9);
o10 = -715827882;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 541: both arguments constants
o4 = (2147483646 / -3)
o10 = -715827882
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 542: LHS constant
o9 = -3;
o4 = (2147483646 / o9)
o10 = -715827882
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 543: RHS constant
o8 = 2147483646;
o4 = (o8 / -3)
o10 = -715827882
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 544: both arguments variables
o8 = 2147483646;
o9 = 1073741823;
o4 = (o8 / o9);
o10 = 2;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 545: both arguments constants
o4 = (2147483646 / 1073741823)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 546: LHS constant
o9 = 1073741823;
o4 = (2147483646 / o9)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 547: RHS constant
o8 = 2147483646;
o4 = (o8 / 1073741823)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 548: both arguments variables
o8 = 2147483646;
o9 = -1073741823;
o4 = (o8 / o9);
o10 = -2;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 549: both arguments constants
o4 = (2147483646 / -1073741823)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 550: LHS constant
o9 = -1073741823;
o4 = (2147483646 / o9)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 551: RHS constant
o8 = 2147483646;
o4 = (o8 / -1073741823)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 552: both arguments variables
o8 = 2147483646;
o9 = 2147483646;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 553: both arguments constants
o4 = (2147483646 / 2147483646)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 554: LHS constant
o9 = 2147483646;
o4 = (2147483646 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 555: RHS constant
o8 = 2147483646;
o4 = (o8 / 2147483646)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 556: both arguments variables
o8 = 2147483647;
o9 = 1;
o4 = (o8 / o9);
o10 = 2147483647;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 557: both arguments constants
o4 = (2147483647 / 1)
o10 = 2147483647
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 558: LHS constant
o9 = 1;
o4 = (2147483647 / o9)
o10 = 2147483647
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 559: RHS constant
o8 = 2147483647;
o4 = (o8 / 1)
o10 = 2147483647
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 560: both arguments variables
o8 = 2147483647;
o9 = -1;
o4 = (o8 / o9);
o10 = -2147483647;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 561: both arguments constants
o4 = (2147483647 / -1)
o10 = -2147483647
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 562: LHS constant
o9 = -1;
o4 = (2147483647 / o9)
o10 = -2147483647
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 563: RHS constant
o8 = 2147483647;
o4 = (o8 / -1)
o10 = -2147483647
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 564: both arguments variables
o8 = 2147483647;
o9 = 2147483647;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 565: both arguments constants
o4 = (2147483647 / 2147483647)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 566: LHS constant
o9 = 2147483647;
o4 = (2147483647 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 567: RHS constant
o8 = 2147483647;
o4 = (o8 / 2147483647)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 568: both arguments variables
o8 = 2147483647;
o9 = -2147483647;
o4 = (o8 / o9);
o10 = -1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 569: both arguments constants
o4 = (2147483647 / -2147483647)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 570: LHS constant
o9 = -2147483647;
o4 = (2147483647 / o9)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 571: RHS constant
o8 = 2147483647;
o4 = (o8 / -2147483647)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 572: both arguments variables
o8 = 2147483648;
o9 = 1;
o4 = (o8 / o9);
o10 = 2147483648;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 573: both arguments constants
o4 = (2147483648 / 1)
o10 = 2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 574: LHS constant
o9 = 1;
o4 = (2147483648 / o9)
o10 = 2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 575: RHS constant
o8 = 2147483648;
o4 = (o8 / 1)
o10 = 2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 576: both arguments variables
o8 = 2147483648;
o9 = -1;
o4 = (o8 / o9);
o10 = -2147483648;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 577: both arguments constants
o4 = (2147483648 / -1)
o10 = -2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 578: LHS constant
o9 = -1;
o4 = (2147483648 / o9)
o10 = -2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 579: RHS constant
o8 = 2147483648;
o4 = (o8 / -1)
o10 = -2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 580: both arguments variables
o8 = 2147483648;
o9 = 2;
o4 = (o8 / o9);
o10 = 1073741824;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 581: both arguments constants
o4 = (2147483648 / 2)
o10 = 1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 582: LHS constant
o9 = 2;
o4 = (2147483648 / o9)
o10 = 1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 583: RHS constant
o8 = 2147483648;
o4 = (o8 / 2)
o10 = 1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 584: both arguments variables
o8 = 2147483648;
o9 = -2;
o4 = (o8 / o9);
o10 = -1073741824;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 585: both arguments constants
o4 = (2147483648 / -2)
o10 = -1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 586: LHS constant
o9 = -2;
o4 = (2147483648 / o9)
o10 = -1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 587: RHS constant
o8 = 2147483648;
o4 = (o8 / -2)
o10 = -1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 588: both arguments variables
o8 = 2147483648;
o9 = 4;
o4 = (o8 / o9);
o10 = 536870912;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 589: both arguments constants
o4 = (2147483648 / 4)
o10 = 536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 590: LHS constant
o9 = 4;
o4 = (2147483648 / o9)
o10 = 536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 591: RHS constant
o8 = 2147483648;
o4 = (o8 / 4)
o10 = 536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 592: both arguments variables
o8 = 2147483648;
o9 = -4;
o4 = (o8 / o9);
o10 = -536870912;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 593: both arguments constants
o4 = (2147483648 / -4)
o10 = -536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 594: LHS constant
o9 = -4;
o4 = (2147483648 / o9)
o10 = -536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 595: RHS constant
o8 = 2147483648;
o4 = (o8 / -4)
o10 = -536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 596: both arguments variables
o8 = 2147483648;
o9 = 8;
o4 = (o8 / o9);
o10 = 268435456;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 597: both arguments constants
o4 = (2147483648 / 8)
o10 = 268435456
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 598: LHS constant
o9 = 8;
o4 = (2147483648 / o9)
o10 = 268435456
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 599: RHS constant
o8 = 2147483648;
o4 = (o8 / 8)
o10 = 268435456
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

}
function o16() {
var o8;
var o9;
var o4;
var o10;
// Test 600: both arguments variables
o8 = 2147483648;
o9 = -8;
o4 = (o8 / o9);
o10 = -268435456;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 601: both arguments constants
o4 = (2147483648 / -8)
o10 = -268435456
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 602: LHS constant
o9 = -8;
o4 = (2147483648 / o9)
o10 = -268435456
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 603: RHS constant
o8 = 2147483648;
o4 = (o8 / -8)
o10 = -268435456
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 604: both arguments variables
o8 = 2147483648;
o9 = 1073741824;
o4 = (o8 / o9);
o10 = 2;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 605: both arguments constants
o4 = (2147483648 / 1073741824)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 606: LHS constant
o9 = 1073741824;
o4 = (2147483648 / o9)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 607: RHS constant
o8 = 2147483648;
o4 = (o8 / 1073741824)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 608: both arguments variables
o8 = 2147483648;
o9 = (-0x3fffffff-1);
o4 = (o8 / o9);
o10 = -2;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 609: both arguments constants
o4 = (2147483648 / (-0x3fffffff-1))
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 610: LHS constant
o9 = (-0x3fffffff-1);
o4 = (2147483648 / o9)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 611: RHS constant
o8 = 2147483648;
o4 = (o8 / (-0x3fffffff-1))
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 612: both arguments variables
o8 = 2147483648;
o9 = 2147483648;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 613: both arguments constants
o4 = (2147483648 / 2147483648)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 614: LHS constant
o9 = 2147483648;
o4 = (2147483648 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 615: RHS constant
o8 = 2147483648;
o4 = (o8 / 2147483648)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 616: both arguments variables
o8 = 2147483648;
o9 = -2147483648;
o4 = (o8 / o9);
o10 = -1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 617: both arguments constants
o4 = (2147483648 / -2147483648)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 618: LHS constant
o9 = -2147483648;
o4 = (2147483648 / o9)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 619: RHS constant
o8 = 2147483648;
o4 = (o8 / -2147483648)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 620: both arguments variables
o8 = 2147483649;
o9 = 1;
o4 = (o8 / o9);
o10 = 2147483649;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 621: both arguments constants
o4 = (2147483649 / 1)
o10 = 2147483649
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 622: LHS constant
o9 = 1;
o4 = (2147483649 / o9)
o10 = 2147483649
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 623: RHS constant
o8 = 2147483649;
o4 = (o8 / 1)
o10 = 2147483649
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 624: both arguments variables
o8 = 2147483649;
o9 = -1;
o4 = (o8 / o9);
o10 = -2147483649;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 625: both arguments constants
o4 = (2147483649 / -1)
o10 = -2147483649
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 626: LHS constant
o9 = -1;
o4 = (2147483649 / o9)
o10 = -2147483649
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 627: RHS constant
o8 = 2147483649;
o4 = (o8 / -1)
o10 = -2147483649
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 628: both arguments variables
o8 = 2147483649;
o9 = 3;
o4 = (o8 / o9);
o10 = 715827883;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 629: both arguments constants
o4 = (2147483649 / 3)
o10 = 715827883
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 630: LHS constant
o9 = 3;
o4 = (2147483649 / o9)
o10 = 715827883
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 631: RHS constant
o8 = 2147483649;
o4 = (o8 / 3)
o10 = 715827883
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 632: both arguments variables
o8 = 2147483649;
o9 = -3;
o4 = (o8 / o9);
o10 = -715827883;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 633: both arguments constants
o4 = (2147483649 / -3)
o10 = -715827883
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 634: LHS constant
o9 = -3;
o4 = (2147483649 / o9)
o10 = -715827883
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 635: RHS constant
o8 = 2147483649;
o4 = (o8 / -3)
o10 = -715827883
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 636: both arguments variables
o8 = 2147483649;
o9 = 2147483649;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 637: both arguments constants
o4 = (2147483649 / 2147483649)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 638: LHS constant
o9 = 2147483649;
o4 = (2147483649 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 639: RHS constant
o8 = 2147483649;
o4 = (o8 / 2147483649)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 640: both arguments variables
o8 = 2147483649;
o9 = -2147483649;
o4 = (o8 / o9);
o10 = -1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 641: both arguments constants
o4 = (2147483649 / -2147483649)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 642: LHS constant
o9 = -2147483649;
o4 = (2147483649 / o9)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 643: RHS constant
o8 = 2147483649;
o4 = (o8 / -2147483649)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 644: both arguments variables
o8 = -2147483647;
o9 = 1;
o4 = (o8 / o9);
o10 = -2147483647;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 645: both arguments constants
o4 = (-2147483647 / 1)
o10 = -2147483647
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 646: LHS constant
o9 = 1;
o4 = (-2147483647 / o9)
o10 = -2147483647
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 647: RHS constant
o8 = -2147483647;
o4 = (o8 / 1)
o10 = -2147483647
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 648: both arguments variables
o8 = -2147483647;
o9 = -1;
o4 = (o8 / o9);
o10 = 2147483647;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 649: both arguments constants
o4 = (-2147483647 / -1)
o10 = 2147483647
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 650: LHS constant
o9 = -1;
o4 = (-2147483647 / o9)
o10 = 2147483647
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 651: RHS constant
o8 = -2147483647;
o4 = (o8 / -1)
o10 = 2147483647
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 652: both arguments variables
o8 = -2147483647;
o9 = 2147483647;
o4 = (o8 / o9);
o10 = -1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 653: both arguments constants
o4 = (-2147483647 / 2147483647)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 654: LHS constant
o9 = 2147483647;
o4 = (-2147483647 / o9)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 655: RHS constant
o8 = -2147483647;
o4 = (o8 / 2147483647)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 656: both arguments variables
o8 = -2147483647;
o9 = -2147483647;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 657: both arguments constants
o4 = (-2147483647 / -2147483647)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 658: LHS constant
o9 = -2147483647;
o4 = (-2147483647 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 659: RHS constant
o8 = -2147483647;
o4 = (o8 / -2147483647)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 660: both arguments variables
o8 = -2147483648;
o9 = 1;
o4 = (o8 / o9);
o10 = -2147483648;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 661: both arguments constants
o4 = (-2147483648 / 1)
o10 = -2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 662: LHS constant
o9 = 1;
o4 = (-2147483648 / o9)
o10 = -2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 663: RHS constant
o8 = -2147483648;
o4 = (o8 / 1)
o10 = -2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 664: both arguments variables
o8 = -2147483648;
o9 = -1;
o4 = (o8 / o9);
o10 = 2147483648;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 665: both arguments constants
o4 = (-2147483648 / -1)
o10 = 2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 666: LHS constant
o9 = -1;
o4 = (-2147483648 / o9)
o10 = 2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 667: RHS constant
o8 = -2147483648;
o4 = (o8 / -1)
o10 = 2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 668: both arguments variables
o8 = -2147483648;
o9 = 2;
o4 = (o8 / o9);
o10 = -1073741824;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 669: both arguments constants
o4 = (-2147483648 / 2)
o10 = -1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 670: LHS constant
o9 = 2;
o4 = (-2147483648 / o9)
o10 = -1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 671: RHS constant
o8 = -2147483648;
o4 = (o8 / 2)
o10 = -1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 672: both arguments variables
o8 = -2147483648;
o9 = -2;
o4 = (o8 / o9);
o10 = 1073741824;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 673: both arguments constants
o4 = (-2147483648 / -2)
o10 = 1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 674: LHS constant
o9 = -2;
o4 = (-2147483648 / o9)
o10 = 1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 675: RHS constant
o8 = -2147483648;
o4 = (o8 / -2)
o10 = 1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 676: both arguments variables
o8 = -2147483648;
o9 = 4;
o4 = (o8 / o9);
o10 = -536870912;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 677: both arguments constants
o4 = (-2147483648 / 4)
o10 = -536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 678: LHS constant
o9 = 4;
o4 = (-2147483648 / o9)
o10 = -536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 679: RHS constant
o8 = -2147483648;
o4 = (o8 / 4)
o10 = -536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 680: both arguments variables
o8 = -2147483648;
o9 = -4;
o4 = (o8 / o9);
o10 = 536870912;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 681: both arguments constants
o4 = (-2147483648 / -4)
o10 = 536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 682: LHS constant
o9 = -4;
o4 = (-2147483648 / o9)
o10 = 536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 683: RHS constant
o8 = -2147483648;
o4 = (o8 / -4)
o10 = 536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 684: both arguments variables
o8 = -2147483648;
o9 = 8;
o4 = (o8 / o9);
o10 = -268435456;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 685: both arguments constants
o4 = (-2147483648 / 8)
o10 = -268435456
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 686: LHS constant
o9 = 8;
o4 = (-2147483648 / o9)
o10 = -268435456
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 687: RHS constant
o8 = -2147483648;
o4 = (o8 / 8)
o10 = -268435456
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 688: both arguments variables
o8 = -2147483648;
o9 = -8;
o4 = (o8 / o9);
o10 = 268435456;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 689: both arguments constants
o4 = (-2147483648 / -8)
o10 = 268435456
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 690: LHS constant
o9 = -8;
o4 = (-2147483648 / o9)
o10 = 268435456
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 691: RHS constant
o8 = -2147483648;
o4 = (o8 / -8)
o10 = 268435456
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 692: both arguments variables
o8 = -2147483648;
o9 = 1073741824;
o4 = (o8 / o9);
o10 = -2;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 693: both arguments constants
o4 = (-2147483648 / 1073741824)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 694: LHS constant
o9 = 1073741824;
o4 = (-2147483648 / o9)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 695: RHS constant
o8 = -2147483648;
o4 = (o8 / 1073741824)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 696: both arguments variables
o8 = -2147483648;
o9 = (-0x3fffffff-1);
o4 = (o8 / o9);
o10 = 2;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 697: both arguments constants
o4 = (-2147483648 / (-0x3fffffff-1))
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 698: LHS constant
o9 = (-0x3fffffff-1);
o4 = (-2147483648 / o9)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 699: RHS constant
o8 = -2147483648;
o4 = (o8 / (-0x3fffffff-1))
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

}
function o17() {
var o8;
var o9;
var o4;
var o10;
// Test 700: both arguments variables
o8 = -2147483648;
o9 = 2147483648;
o4 = (o8 / o9);
o10 = -1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 701: both arguments constants
o4 = (-2147483648 / 2147483648)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 702: LHS constant
o9 = 2147483648;
o4 = (-2147483648 / o9)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 703: RHS constant
o8 = -2147483648;
o4 = (o8 / 2147483648)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 704: both arguments variables
o8 = -2147483648;
o9 = -2147483648;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 705: both arguments constants
o4 = (-2147483648 / -2147483648)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 706: LHS constant
o9 = -2147483648;
o4 = (-2147483648 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 707: RHS constant
o8 = -2147483648;
o4 = (o8 / -2147483648)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 708: both arguments variables
o8 = -2147483649;
o9 = 1;
o4 = (o8 / o9);
o10 = -2147483649;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 709: both arguments constants
o4 = (-2147483649 / 1)
o10 = -2147483649
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 710: LHS constant
o9 = 1;
o4 = (-2147483649 / o9)
o10 = -2147483649
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 711: RHS constant
o8 = -2147483649;
o4 = (o8 / 1)
o10 = -2147483649
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 712: both arguments variables
o8 = -2147483649;
o9 = -1;
o4 = (o8 / o9);
o10 = 2147483649;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 713: both arguments constants
o4 = (-2147483649 / -1)
o10 = 2147483649
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 714: LHS constant
o9 = -1;
o4 = (-2147483649 / o9)
o10 = 2147483649
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 715: RHS constant
o8 = -2147483649;
o4 = (o8 / -1)
o10 = 2147483649
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 716: both arguments variables
o8 = -2147483649;
o9 = 3;
o4 = (o8 / o9);
o10 = -715827883;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 717: both arguments constants
o4 = (-2147483649 / 3)
o10 = -715827883
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 718: LHS constant
o9 = 3;
o4 = (-2147483649 / o9)
o10 = -715827883
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 719: RHS constant
o8 = -2147483649;
o4 = (o8 / 3)
o10 = -715827883
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 720: both arguments variables
o8 = -2147483649;
o9 = -3;
o4 = (o8 / o9);
o10 = 715827883;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 721: both arguments constants
o4 = (-2147483649 / -3)
o10 = 715827883
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 722: LHS constant
o9 = -3;
o4 = (-2147483649 / o9)
o10 = 715827883
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 723: RHS constant
o8 = -2147483649;
o4 = (o8 / -3)
o10 = 715827883
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 724: both arguments variables
o8 = -2147483649;
o9 = 2147483649;
o4 = (o8 / o9);
o10 = -1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 725: both arguments constants
o4 = (-2147483649 / 2147483649)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 726: LHS constant
o9 = 2147483649;
o4 = (-2147483649 / o9)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 727: RHS constant
o8 = -2147483649;
o4 = (o8 / 2147483649)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 728: both arguments variables
o8 = -2147483649;
o9 = -2147483649;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 729: both arguments constants
o4 = (-2147483649 / -2147483649)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 730: LHS constant
o9 = -2147483649;
o4 = (-2147483649 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 731: RHS constant
o8 = -2147483649;
o4 = (o8 / -2147483649)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 732: both arguments variables
o8 = -2147483650;
o9 = 1;
o4 = (o8 / o9);
o10 = -2147483650;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 733: both arguments constants
o4 = (-2147483650 / 1)
o10 = -2147483650
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 734: LHS constant
o9 = 1;
o4 = (-2147483650 / o9)
o10 = -2147483650
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 735: RHS constant
o8 = -2147483650;
o4 = (o8 / 1)
o10 = -2147483650
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 736: both arguments variables
o8 = -2147483650;
o9 = -1;
o4 = (o8 / o9);
o10 = 2147483650;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 737: both arguments constants
o4 = (-2147483650 / -1)
o10 = 2147483650
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 738: LHS constant
o9 = -1;
o4 = (-2147483650 / o9)
o10 = 2147483650
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 739: RHS constant
o8 = -2147483650;
o4 = (o8 / -1)
o10 = 2147483650
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 740: both arguments variables
o8 = -2147483650;
o9 = 2;
o4 = (o8 / o9);
o10 = -1073741825;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 741: both arguments constants
o4 = (-2147483650 / 2)
o10 = -1073741825
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 742: LHS constant
o9 = 2;
o4 = (-2147483650 / o9)
o10 = -1073741825
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 743: RHS constant
o8 = -2147483650;
o4 = (o8 / 2)
o10 = -1073741825
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 744: both arguments variables
o8 = -2147483650;
o9 = -2;
o4 = (o8 / o9);
o10 = 1073741825;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 745: both arguments constants
o4 = (-2147483650 / -2)
o10 = 1073741825
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 746: LHS constant
o9 = -2;
o4 = (-2147483650 / o9)
o10 = 1073741825
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 747: RHS constant
o8 = -2147483650;
o4 = (o8 / -2)
o10 = 1073741825
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 748: both arguments variables
o8 = -2147483650;
o9 = 1073741825;
o4 = (o8 / o9);
o10 = -2;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 749: both arguments constants
o4 = (-2147483650 / 1073741825)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 750: LHS constant
o9 = 1073741825;
o4 = (-2147483650 / o9)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 751: RHS constant
o8 = -2147483650;
o4 = (o8 / 1073741825)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 752: both arguments variables
o8 = -2147483650;
o9 = -1073741825;
o4 = (o8 / o9);
o10 = 2;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 753: both arguments constants
o4 = (-2147483650 / -1073741825)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 754: LHS constant
o9 = -1073741825;
o4 = (-2147483650 / o9)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 755: RHS constant
o8 = -2147483650;
o4 = (o8 / -1073741825)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 756: both arguments variables
o8 = -2147483650;
o9 = -2147483650;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 757: both arguments constants
o4 = (-2147483650 / -2147483650)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 758: LHS constant
o9 = -2147483650;
o4 = (-2147483650 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 759: RHS constant
o8 = -2147483650;
o4 = (o8 / -2147483650)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 760: both arguments variables
o8 = 4294967295;
o9 = 1;
o4 = (o8 / o9);
o10 = 4294967295;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 761: both arguments constants
o4 = (4294967295 / 1)
o10 = 4294967295
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 762: LHS constant
o9 = 1;
o4 = (4294967295 / o9)
o10 = 4294967295
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 763: RHS constant
o8 = 4294967295;
o4 = (o8 / 1)
o10 = 4294967295
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 764: both arguments variables
o8 = 4294967295;
o9 = -1;
o4 = (o8 / o9);
o10 = -4294967295;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 765: both arguments constants
o4 = (4294967295 / -1)
o10 = -4294967295
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 766: LHS constant
o9 = -1;
o4 = (4294967295 / o9)
o10 = -4294967295
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 767: RHS constant
o8 = 4294967295;
o4 = (o8 / -1)
o10 = -4294967295
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 768: both arguments variables
o8 = 4294967295;
o9 = 3;
o4 = (o8 / o9);
o10 = 1431655765;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 769: both arguments constants
o4 = (4294967295 / 3)
o10 = 1431655765
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 770: LHS constant
o9 = 3;
o4 = (4294967295 / o9)
o10 = 1431655765
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 771: RHS constant
o8 = 4294967295;
o4 = (o8 / 3)
o10 = 1431655765
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 772: both arguments variables
o8 = 4294967295;
o9 = -3;
o4 = (o8 / o9);
o10 = -1431655765;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 773: both arguments constants
o4 = (4294967295 / -3)
o10 = -1431655765
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 774: LHS constant
o9 = -3;
o4 = (4294967295 / o9)
o10 = -1431655765
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 775: RHS constant
o8 = 4294967295;
o4 = (o8 / -3)
o10 = -1431655765
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 776: both arguments variables
o8 = 4294967295;
o9 = 4294967295;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 777: both arguments constants
o4 = (4294967295 / 4294967295)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 778: LHS constant
o9 = 4294967295;
o4 = (4294967295 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 779: RHS constant
o8 = 4294967295;
o4 = (o8 / 4294967295)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 780: both arguments variables
o8 = 4294967295;
o9 = -4294967295;
o4 = (o8 / o9);
o10 = -1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 781: both arguments constants
o4 = (4294967295 / -4294967295)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 782: LHS constant
o9 = -4294967295;
o4 = (4294967295 / o9)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 783: RHS constant
o8 = 4294967295;
o4 = (o8 / -4294967295)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 784: both arguments variables
o8 = 4294967296;
o9 = 1;
o4 = (o8 / o9);
o10 = 4294967296;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 785: both arguments constants
o4 = (4294967296 / 1)
o10 = 4294967296
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 786: LHS constant
o9 = 1;
o4 = (4294967296 / o9)
o10 = 4294967296
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 787: RHS constant
o8 = 4294967296;
o4 = (o8 / 1)
o10 = 4294967296
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 788: both arguments variables
o8 = 4294967296;
o9 = -1;
o4 = (o8 / o9);
o10 = -4294967296;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 789: both arguments constants
o4 = (4294967296 / -1)
o10 = -4294967296
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 790: LHS constant
o9 = -1;
o4 = (4294967296 / o9)
o10 = -4294967296
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 791: RHS constant
o8 = 4294967296;
o4 = (o8 / -1)
o10 = -4294967296
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 792: both arguments variables
o8 = 4294967296;
o9 = 2;
o4 = (o8 / o9);
o10 = 2147483648;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 793: both arguments constants
o4 = (4294967296 / 2)
o10 = 2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 794: LHS constant
o9 = 2;
o4 = (4294967296 / o9)
o10 = 2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 795: RHS constant
o8 = 4294967296;
o4 = (o8 / 2)
o10 = 2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 796: both arguments variables
o8 = 4294967296;
o9 = -2;
o4 = (o8 / o9);
o10 = -2147483648;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 797: both arguments constants
o4 = (4294967296 / -2)
o10 = -2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 798: LHS constant
o9 = -2;
o4 = (4294967296 / o9)
o10 = -2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 799: RHS constant
o8 = 4294967296;
o4 = (o8 / -2)
o10 = -2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

}
function o18() {
var o8;
var o9;
var o4;
var o10;
// Test 800: both arguments variables
o8 = 4294967296;
o9 = 4;
o4 = (o8 / o9);
o10 = 1073741824;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 801: both arguments constants
o4 = (4294967296 / 4)
o10 = 1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 802: LHS constant
o9 = 4;
o4 = (4294967296 / o9)
o10 = 1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 803: RHS constant
o8 = 4294967296;
o4 = (o8 / 4)
o10 = 1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 804: both arguments variables
o8 = 4294967296;
o9 = -4;
o4 = (o8 / o9);
o10 = -1073741824;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 805: both arguments constants
o4 = (4294967296 / -4)
o10 = -1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 806: LHS constant
o9 = -4;
o4 = (4294967296 / o9)
o10 = -1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 807: RHS constant
o8 = 4294967296;
o4 = (o8 / -4)
o10 = -1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 808: both arguments variables
o8 = 4294967296;
o9 = 8;
o4 = (o8 / o9);
o10 = 536870912;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 809: both arguments constants
o4 = (4294967296 / 8)
o10 = 536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 810: LHS constant
o9 = 8;
o4 = (4294967296 / o9)
o10 = 536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 811: RHS constant
o8 = 4294967296;
o4 = (o8 / 8)
o10 = 536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 812: both arguments variables
o8 = 4294967296;
o9 = -8;
o4 = (o8 / o9);
o10 = -536870912;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 813: both arguments constants
o4 = (4294967296 / -8)
o10 = -536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 814: LHS constant
o9 = -8;
o4 = (4294967296 / o9)
o10 = -536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 815: RHS constant
o8 = 4294967296;
o4 = (o8 / -8)
o10 = -536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 816: both arguments variables
o8 = 4294967296;
o9 = 1073741824;
o4 = (o8 / o9);
o10 = 4;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 817: both arguments constants
o4 = (4294967296 / 1073741824)
o10 = 4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 818: LHS constant
o9 = 1073741824;
o4 = (4294967296 / o9)
o10 = 4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 819: RHS constant
o8 = 4294967296;
o4 = (o8 / 1073741824)
o10 = 4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 820: both arguments variables
o8 = 4294967296;
o9 = (-0x3fffffff-1);
o4 = (o8 / o9);
o10 = -4;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 821: both arguments constants
o4 = (4294967296 / (-0x3fffffff-1))
o10 = -4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 822: LHS constant
o9 = (-0x3fffffff-1);
o4 = (4294967296 / o9)
o10 = -4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 823: RHS constant
o8 = 4294967296;
o4 = (o8 / (-0x3fffffff-1))
o10 = -4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 824: both arguments variables
o8 = 4294967296;
o9 = 2147483648;
o4 = (o8 / o9);
o10 = 2;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 825: both arguments constants
o4 = (4294967296 / 2147483648)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 826: LHS constant
o9 = 2147483648;
o4 = (4294967296 / o9)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 827: RHS constant
o8 = 4294967296;
o4 = (o8 / 2147483648)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 828: both arguments variables
o8 = 4294967296;
o9 = -2147483648;
o4 = (o8 / o9);
o10 = -2;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 829: both arguments constants
o4 = (4294967296 / -2147483648)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 830: LHS constant
o9 = -2147483648;
o4 = (4294967296 / o9)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 831: RHS constant
o8 = 4294967296;
o4 = (o8 / -2147483648)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 832: both arguments variables
o8 = 4294967296;
o9 = 4294967296;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 833: both arguments constants
o4 = (4294967296 / 4294967296)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 834: LHS constant
o9 = 4294967296;
o4 = (4294967296 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 835: RHS constant
o8 = 4294967296;
o4 = (o8 / 4294967296)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 836: both arguments variables
o8 = 4294967296;
o9 = -4294967296;
o4 = (o8 / o9);
o10 = -1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 837: both arguments constants
o4 = (4294967296 / -4294967296)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 838: LHS constant
o9 = -4294967296;
o4 = (4294967296 / o9)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 839: RHS constant
o8 = 4294967296;
o4 = (o8 / -4294967296)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 840: both arguments variables
o8 = -4294967295;
o9 = 1;
o4 = (o8 / o9);
o10 = -4294967295;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 841: both arguments constants
o4 = (-4294967295 / 1)
o10 = -4294967295
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 842: LHS constant
o9 = 1;
o4 = (-4294967295 / o9)
o10 = -4294967295
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 843: RHS constant
o8 = -4294967295;
o4 = (o8 / 1)
o10 = -4294967295
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 844: both arguments variables
o8 = -4294967295;
o9 = -1;
o4 = (o8 / o9);
o10 = 4294967295;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 845: both arguments constants
o4 = (-4294967295 / -1)
o10 = 4294967295
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 846: LHS constant
o9 = -1;
o4 = (-4294967295 / o9)
o10 = 4294967295
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 847: RHS constant
o8 = -4294967295;
o4 = (o8 / -1)
o10 = 4294967295
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 848: both arguments variables
o8 = -4294967295;
o9 = 3;
o4 = (o8 / o9);
o10 = -1431655765;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 849: both arguments constants
o4 = (-4294967295 / 3)
o10 = -1431655765
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 850: LHS constant
o9 = 3;
o4 = (-4294967295 / o9)
o10 = -1431655765
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 851: RHS constant
o8 = -4294967295;
o4 = (o8 / 3)
o10 = -1431655765
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 852: both arguments variables
o8 = -4294967295;
o9 = -3;
o4 = (o8 / o9);
o10 = 1431655765;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 853: both arguments constants
o4 = (-4294967295 / -3)
o10 = 1431655765
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 854: LHS constant
o9 = -3;
o4 = (-4294967295 / o9)
o10 = 1431655765
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 855: RHS constant
o8 = -4294967295;
o4 = (o8 / -3)
o10 = 1431655765
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 856: both arguments variables
o8 = -4294967295;
o9 = 4294967295;
o4 = (o8 / o9);
o10 = -1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 857: both arguments constants
o4 = (-4294967295 / 4294967295)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 858: LHS constant
o9 = 4294967295;
o4 = (-4294967295 / o9)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 859: RHS constant
o8 = -4294967295;
o4 = (o8 / 4294967295)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 860: both arguments variables
o8 = -4294967295;
o9 = -4294967295;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 861: both arguments constants
o4 = (-4294967295 / -4294967295)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 862: LHS constant
o9 = -4294967295;
o4 = (-4294967295 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 863: RHS constant
o8 = -4294967295;
o4 = (o8 / -4294967295)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 864: both arguments variables
o8 = -4294967296;
o9 = 1;
o4 = (o8 / o9);
o10 = -4294967296;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 865: both arguments constants
o4 = (-4294967296 / 1)
o10 = -4294967296
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 866: LHS constant
o9 = 1;
o4 = (-4294967296 / o9)
o10 = -4294967296
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 867: RHS constant
o8 = -4294967296;
o4 = (o8 / 1)
o10 = -4294967296
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 868: both arguments variables
o8 = -4294967296;
o9 = -1;
o4 = (o8 / o9);
o10 = 4294967296;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 869: both arguments constants
o4 = (-4294967296 / -1)
o10 = 4294967296
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 870: LHS constant
o9 = -1;
o4 = (-4294967296 / o9)
o10 = 4294967296
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 871: RHS constant
o8 = -4294967296;
o4 = (o8 / -1)
o10 = 4294967296
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 872: both arguments variables
o8 = -4294967296;
o9 = 2;
o4 = (o8 / o9);
o10 = -2147483648;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 873: both arguments constants
o4 = (-4294967296 / 2)
o10 = -2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 874: LHS constant
o9 = 2;
o4 = (-4294967296 / o9)
o10 = -2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 875: RHS constant
o8 = -4294967296;
o4 = (o8 / 2)
o10 = -2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 876: both arguments variables
o8 = -4294967296;
o9 = -2;
o4 = (o8 / o9);
o10 = 2147483648;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 877: both arguments constants
o4 = (-4294967296 / -2)
o10 = 2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 878: LHS constant
o9 = -2;
o4 = (-4294967296 / o9)
o10 = 2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 879: RHS constant
o8 = -4294967296;
o4 = (o8 / -2)
o10 = 2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 880: both arguments variables
o8 = -4294967296;
o9 = 4;
o4 = (o8 / o9);
o10 = -1073741824;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 881: both arguments constants
o4 = (-4294967296 / 4)
o10 = -1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 882: LHS constant
o9 = 4;
o4 = (-4294967296 / o9)
o10 = -1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 883: RHS constant
o8 = -4294967296;
o4 = (o8 / 4)
o10 = -1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 884: both arguments variables
o8 = -4294967296;
o9 = -4;
o4 = (o8 / o9);
o10 = 1073741824;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 885: both arguments constants
o4 = (-4294967296 / -4)
o10 = 1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 886: LHS constant
o9 = -4;
o4 = (-4294967296 / o9)
o10 = 1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 887: RHS constant
o8 = -4294967296;
o4 = (o8 / -4)
o10 = 1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 888: both arguments variables
o8 = -4294967296;
o9 = 8;
o4 = (o8 / o9);
o10 = -536870912;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 889: both arguments constants
o4 = (-4294967296 / 8)
o10 = -536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 890: LHS constant
o9 = 8;
o4 = (-4294967296 / o9)
o10 = -536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 891: RHS constant
o8 = -4294967296;
o4 = (o8 / 8)
o10 = -536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 892: both arguments variables
o8 = -4294967296;
o9 = -8;
o4 = (o8 / o9);
o10 = 536870912;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 893: both arguments constants
o4 = (-4294967296 / -8)
o10 = 536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 894: LHS constant
o9 = -8;
o4 = (-4294967296 / o9)
o10 = 536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 895: RHS constant
o8 = -4294967296;
o4 = (o8 / -8)
o10 = 536870912
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 896: both arguments variables
o8 = -4294967296;
o9 = 1073741824;
o4 = (o8 / o9);
o10 = -4;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 897: both arguments constants
o4 = (-4294967296 / 1073741824)
o10 = -4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 898: LHS constant
o9 = 1073741824;
o4 = (-4294967296 / o9)
o10 = -4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 899: RHS constant
o8 = -4294967296;
o4 = (o8 / 1073741824)
o10 = -4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

}
function o19() {
var o8;
var o9;
var o4;
var o10;
// Test 900: both arguments variables
o8 = -4294967296;
o9 = (-0x3fffffff-1);
o4 = (o8 / o9);
o10 = 4;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 901: both arguments constants
o4 = (-4294967296 / (-0x3fffffff-1))
o10 = 4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 902: LHS constant
o9 = (-0x3fffffff-1);
o4 = (-4294967296 / o9)
o10 = 4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 903: RHS constant
o8 = -4294967296;
o4 = (o8 / (-0x3fffffff-1))
o10 = 4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 904: both arguments variables
o8 = -4294967296;
o9 = 2147483648;
o4 = (o8 / o9);
o10 = -2;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 905: both arguments constants
o4 = (-4294967296 / 2147483648)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 906: LHS constant
o9 = 2147483648;
o4 = (-4294967296 / o9)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 907: RHS constant
o8 = -4294967296;
o4 = (o8 / 2147483648)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 908: both arguments variables
o8 = -4294967296;
o9 = -2147483648;
o4 = (o8 / o9);
o10 = 2;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 909: both arguments constants
o4 = (-4294967296 / -2147483648)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 910: LHS constant
o9 = -2147483648;
o4 = (-4294967296 / o9)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 911: RHS constant
o8 = -4294967296;
o4 = (o8 / -2147483648)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 912: both arguments variables
o8 = -4294967296;
o9 = 4294967296;
o4 = (o8 / o9);
o10 = -1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 913: both arguments constants
o4 = (-4294967296 / 4294967296)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 914: LHS constant
o9 = 4294967296;
o4 = (-4294967296 / o9)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 915: RHS constant
o8 = -4294967296;
o4 = (o8 / 4294967296)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 916: both arguments variables
o8 = -4294967296;
o9 = -4294967296;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 917: both arguments constants
o4 = (-4294967296 / -4294967296)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 918: LHS constant
o9 = -4294967296;
o4 = (-4294967296 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 919: RHS constant
o8 = -4294967296;
o4 = (o8 / -4294967296)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 920: both arguments variables
o8 = 0;
o9 = 684451;
o4 = (o8 / o9);
o10 = 0;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 921: both arguments constants
o4 = (0 / 684451)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 922: LHS constant
o9 = 684451;
o4 = (0 / o9)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 923: RHS constant
o8 = 0;
o4 = (o8 / 684451)
o10 = 0
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 924: both arguments variables
o8 = 684451;
o9 = 684451;
o4 = (o8 / o9);
o10 = 1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 925: both arguments constants
o4 = (684451 / 684451)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 926: LHS constant
o9 = 684451;
o4 = (684451 / o9)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 927: RHS constant
o8 = 684451;
o4 = (o8 / 684451)
o10 = 1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 928: both arguments variables
o8 = -684451;
o9 = 684451;
o4 = (o8 / o9);
o10 = -1;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 929: both arguments constants
o4 = (-684451 / 684451)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 930: LHS constant
o9 = 684451;
o4 = (-684451 / o9)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 931: RHS constant
o8 = -684451;
o4 = (o8 / 684451)
o10 = -1
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 932: both arguments variables
o8 = 1368902;
o9 = 684451;
o4 = (o8 / o9);
o10 = 2;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 933: both arguments constants
o4 = (1368902 / 684451)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 934: LHS constant
o9 = 684451;
o4 = (1368902 / o9)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 935: RHS constant
o8 = 1368902;
o4 = (o8 / 684451)
o10 = 2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 936: both arguments variables
o8 = -1368902;
o9 = 684451;
o4 = (o8 / o9);
o10 = -2;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 937: both arguments constants
o4 = (-1368902 / 684451)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 938: LHS constant
o9 = 684451;
o4 = (-1368902 / o9)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 939: RHS constant
o8 = -1368902;
o4 = (o8 / 684451)
o10 = -2
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 940: both arguments variables
o8 = 2053353;
o9 = 684451;
o4 = (o8 / o9);
o10 = 3;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 941: both arguments constants
o4 = (2053353 / 684451)
o10 = 3
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 942: LHS constant
o9 = 684451;
o4 = (2053353 / o9)
o10 = 3
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 943: RHS constant
o8 = 2053353;
o4 = (o8 / 684451)
o10 = 3
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 944: both arguments variables
o8 = -2053353;
o9 = 684451;
o4 = (o8 / o9);
o10 = -3;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 945: both arguments constants
o4 = (-2053353 / 684451)
o10 = -3
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 946: LHS constant
o9 = 684451;
o4 = (-2053353 / o9)
o10 = -3
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 947: RHS constant
o8 = -2053353;
o4 = (o8 / 684451)
o10 = -3
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 948: both arguments variables
o8 = 2737804;
o9 = 684451;
o4 = (o8 / o9);
o10 = 4;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 949: both arguments constants
o4 = (2737804 / 684451)
o10 = 4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 950: LHS constant
o9 = 684451;
o4 = (2737804 / o9)
o10 = 4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 951: RHS constant
o8 = 2737804;
o4 = (o8 / 684451)
o10 = 4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 952: both arguments variables
o8 = -2737804;
o9 = 684451;
o4 = (o8 / o9);
o10 = -4;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 953: both arguments constants
o4 = (-2737804 / 684451)
o10 = -4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 954: LHS constant
o9 = 684451;
o4 = (-2737804 / o9)
o10 = -4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 955: RHS constant
o8 = -2737804;
o4 = (o8 / 684451)
o10 = -4
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 956: both arguments variables
o8 = 5475608;
o9 = 684451;
o4 = (o8 / o9);
o10 = 8;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 957: both arguments constants
o4 = (5475608 / 684451)
o10 = 8
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 958: LHS constant
o9 = 684451;
o4 = (5475608 / o9)
o10 = 8
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 959: RHS constant
o8 = 5475608;
o4 = (o8 / 684451)
o10 = 8
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 960: both arguments variables
o8 = -5475608;
o9 = 684451;
o4 = (o8 / o9);
o10 = -8;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 961: both arguments constants
o4 = (-5475608 / 684451)
o10 = -8
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 962: LHS constant
o9 = 684451;
o4 = (-5475608 / o9)
o10 = -8
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 963: RHS constant
o8 = -5475608;
o4 = (o8 / 684451)
o10 = -8
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 964: both arguments variables
o8 = 734923663809722;
o9 = 684451;
o4 = (o8 / o9);
o10 = 1073741822;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 965: both arguments constants
o4 = (734923663809722 / 684451)
o10 = 1073741822
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 966: LHS constant
o9 = 684451;
o4 = (734923663809722 / o9)
o10 = 1073741822
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 967: RHS constant
o8 = 734923663809722;
o4 = (o8 / 684451)
o10 = 1073741822
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 968: both arguments variables
o8 = 734923664494173;
o9 = 684451;
o4 = (o8 / o9);
o10 = 1073741823;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 969: both arguments constants
o4 = (734923664494173 / 684451)
o10 = 1073741823
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 970: LHS constant
o9 = 684451;
o4 = (734923664494173 / o9)
o10 = 1073741823
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 971: RHS constant
o8 = 734923664494173;
o4 = (o8 / 684451)
o10 = 1073741823
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 972: both arguments variables
o8 = 734923665178624;
o9 = 684451;
o4 = (o8 / o9);
o10 = 1073741824;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 973: both arguments constants
o4 = (734923665178624 / 684451)
o10 = 1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 974: LHS constant
o9 = 684451;
o4 = (734923665178624 / o9)
o10 = 1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 975: RHS constant
o8 = 734923665178624;
o4 = (o8 / 684451)
o10 = 1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 976: both arguments variables
o8 = 734923665863075;
o9 = 684451;
o4 = (o8 / o9);
o10 = 1073741825;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 977: both arguments constants
o4 = (734923665863075 / 684451)
o10 = 1073741825
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 978: LHS constant
o9 = 684451;
o4 = (734923665863075 / o9)
o10 = 1073741825
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 979: RHS constant
o8 = 734923665863075;
o4 = (o8 / 684451)
o10 = 1073741825
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 980: both arguments variables
o8 = -734923664494173;
o9 = 684451;
o4 = (o8 / o9);
o10 = -1073741823;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 981: both arguments constants
o4 = (-734923664494173 / 684451)
o10 = -1073741823
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 982: LHS constant
o9 = 684451;
o4 = (-734923664494173 / o9)
o10 = -1073741823
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 983: RHS constant
o8 = -734923664494173;
o4 = (o8 / 684451)
o10 = -1073741823
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 984: both arguments variables
o8 = -734923665178624;
o9 = 684451;
o4 = (o8 / o9);
o10 = -1073741824;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 985: both arguments constants
o4 = (-734923665178624 / 684451)
o10 = -1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 986: LHS constant
o9 = 684451;
o4 = (-734923665178624 / o9)
o10 = -1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 987: RHS constant
o8 = -734923665178624;
o4 = (o8 / 684451)
o10 = -1073741824
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 988: both arguments variables
o8 = -734923665863075;
o9 = 684451;
o4 = (o8 / o9);
o10 = -1073741825;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 989: both arguments constants
o4 = (-734923665863075 / 684451)
o10 = -1073741825
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 990: LHS constant
o9 = 684451;
o4 = (-734923665863075 / o9)
o10 = -1073741825
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 991: RHS constant
o8 = -734923665863075;
o4 = (o8 / 684451)
o10 = -1073741825
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 992: both arguments variables
o8 = -734923666547526;
o9 = 684451;
o4 = (o8 / o9);
o10 = -1073741826;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 993: both arguments constants
o4 = (-734923666547526 / 684451)
o10 = -1073741826
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 994: LHS constant
o9 = 684451;
o4 = (-734923666547526 / o9)
o10 = -1073741826
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 995: RHS constant
o8 = -734923666547526;
o4 = (o8 / 684451)
o10 = -1073741826
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 996: both arguments variables
o8 = 1469847328988346;
o9 = 684451;
o4 = (o8 / o9);
o10 = 2147483646;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 997: both arguments constants
o4 = (1469847328988346 / 684451)
o10 = 2147483646
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 998: LHS constant
o9 = 684451;
o4 = (1469847328988346 / o9)
o10 = 2147483646
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 999: RHS constant
o8 = 1469847328988346;
o4 = (o8 / 684451)
o10 = 2147483646
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

}
function o20() {
var o8;
var o9;
var o4;
var o10;
// Test 1000: both arguments variables
o8 = 1469847329672797;
o9 = 684451;
o4 = (o8 / o9);
o10 = 2147483647;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 1001: both arguments constants
o4 = (1469847329672797 / 684451)
o10 = 2147483647
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1002: LHS constant
o9 = 684451;
o4 = (1469847329672797 / o9)
o10 = 2147483647
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1003: RHS constant
o8 = 1469847329672797;
o4 = (o8 / 684451)
o10 = 2147483647
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1004: both arguments variables
o8 = 1469847330357248;
o9 = 684451;
o4 = (o8 / o9);
o10 = 2147483648;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 1005: both arguments constants
o4 = (1469847330357248 / 684451)
o10 = 2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1006: LHS constant
o9 = 684451;
o4 = (1469847330357248 / o9)
o10 = 2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1007: RHS constant
o8 = 1469847330357248;
o4 = (o8 / 684451)
o10 = 2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1008: both arguments variables
o8 = 1469847331041699;
o9 = 684451;
o4 = (o8 / o9);
o10 = 2147483649;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 1009: both arguments constants
o4 = (1469847331041699 / 684451)
o10 = 2147483649
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1010: LHS constant
o9 = 684451;
o4 = (1469847331041699 / o9)
o10 = 2147483649
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1011: RHS constant
o8 = 1469847331041699;
o4 = (o8 / 684451)
o10 = 2147483649
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1012: both arguments variables
o8 = -1469847329672797;
o9 = 684451;
o4 = (o8 / o9);
o10 = -2147483647;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 1013: both arguments constants
o4 = (-1469847329672797 / 684451)
o10 = -2147483647
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1014: LHS constant
o9 = 684451;
o4 = (-1469847329672797 / o9)
o10 = -2147483647
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1015: RHS constant
o8 = -1469847329672797;
o4 = (o8 / 684451)
o10 = -2147483647
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1016: both arguments variables
o8 = -1469847330357248;
o9 = 684451;
o4 = (o8 / o9);
o10 = -2147483648;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 1017: both arguments constants
o4 = (-1469847330357248 / 684451)
o10 = -2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1018: LHS constant
o9 = 684451;
o4 = (-1469847330357248 / o9)
o10 = -2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1019: RHS constant
o8 = -1469847330357248;
o4 = (o8 / 684451)
o10 = -2147483648
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1020: both arguments variables
o8 = -1469847331041699;
o9 = 684451;
o4 = (o8 / o9);
o10 = -2147483649;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 1021: both arguments constants
o4 = (-1469847331041699 / 684451)
o10 = -2147483649
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1022: LHS constant
o9 = 684451;
o4 = (-1469847331041699 / o9)
o10 = -2147483649
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1023: RHS constant
o8 = -1469847331041699;
o4 = (o8 / 684451)
o10 = -2147483649
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1024: both arguments variables
o8 = -1469847331726150;
o9 = 684451;
o4 = (o8 / o9);
o10 = -2147483650;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 1025: both arguments constants
o4 = (-1469847331726150 / 684451)
o10 = -2147483650
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1026: LHS constant
o9 = 684451;
o4 = (-1469847331726150 / o9)
o10 = -2147483650
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1027: RHS constant
o8 = -1469847331726150;
o4 = (o8 / 684451)
o10 = -2147483650
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1028: both arguments variables
o8 = 2939694660030045;
o9 = 684451;
o4 = (o8 / o9);
o10 = 4294967295;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 1029: both arguments constants
o4 = (2939694660030045 / 684451)
o10 = 4294967295
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1030: LHS constant
o9 = 684451;
o4 = (2939694660030045 / o9)
o10 = 4294967295
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1031: RHS constant
o8 = 2939694660030045;
o4 = (o8 / 684451)
o10 = 4294967295
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1032: both arguments variables
o8 = 2939694660714496;
o9 = 684451;
o4 = (o8 / o9);
o10 = 4294967296;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 1033: both arguments constants
o4 = (2939694660714496 / 684451)
o10 = 4294967296
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1034: LHS constant
o9 = 684451;
o4 = (2939694660714496 / o9)
o10 = 4294967296
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1035: RHS constant
o8 = 2939694660714496;
o4 = (o8 / 684451)
o10 = 4294967296
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1036: both arguments variables
o8 = -2939694660030045;
o9 = 684451;
o4 = (o8 / o9);
o10 = -4294967295;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 1037: both arguments constants
o4 = (-2939694660030045 / 684451)
o10 = -4294967295
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1038: LHS constant
o9 = 684451;
o4 = (-2939694660030045 / o9)
o10 = -4294967295
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1039: RHS constant
o8 = -2939694660030045;
o4 = (o8 / 684451)
o10 = -4294967295
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1040: both arguments variables
o8 = -2939694660714496;
o9 = 684451;
o4 = (o8 / o9);
o10 = -4294967296;
if(o4 != o10) { o1(test, o10, o4); } ++test; 

// Test 1041: both arguments constants
o4 = (-2939694660714496 / 684451)
o10 = -4294967296
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1042: LHS constant
o9 = 684451;
o4 = (-2939694660714496 / o9)
o10 = -4294967296
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

// Test 1043: RHS constant
o8 = -2939694660714496;
o4 = (o8 / 684451)
o10 = -4294967296
if(o4 != o10) {{ o1(test, o10, o4); }} ++test; 

}
o7();
o11();
o12();
o13();
o14();
o15();
o16();
o17();
o18();
o19();
o20();
o5.o6("done");
