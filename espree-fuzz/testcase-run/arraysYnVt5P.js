//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//Refer to Bug EZE\123
//This test case is to ensure that the length of the array is not always stored as a tagged integer
var o0=0;
var o22 = 0

//Test Case 1: Testing Array of length 2^29 (max length of the tagged integer)

var function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
if (o421.o450) {
      try {
o421.o746();
}catch(e){}
      try {
if (o421.o651 && o421.o640 == 0) {
        //Zombie Volume PAPU Bug:
        try {
if (((o421.o155[0xFF21] ^ o70) & 0x8) == 0x8) {
          try {
if ((o421.o155[0xFF21] & 0x8) == 0) {
            try {
if ((o421.o155[0xFF21] & 0x7) == 0x7) {
              try {
o421.o637 += 2;
}catch(e){}
            }
            else {
              try {
++o421.o637;
}catch(e){}
            }
}catch(e){}
          }
}catch(e){}
          try {
o421.o637 = (16 - o421.o637) & 0xF;
}catch(e){}
        }
        else try {
if ((o421.o155[0xFF21] & 0xF) == 0x8) {
          try {
o421.o637 = (1 + o421.o637) & 0xF;
}catch(e){}
        }
}catch(e){}
}catch(e){}
        try {
o421.o638 = o421.o637 << o421.o670;
}catch(e){}
      }
}catch(e){}
      try {
o421.o639 = ((o70 & 0x08) == 0x08);
}catch(e){}
      try {
o421.o155[0xFF21] = o70;
}catch(e){}
      try {
o421.o755();
}catch(e){}
      try {
o421.o766();
}catch(e){}
    }
}catch(e){}
  }=new Array(536870912)
try {
o1(o8.length,536870912,o851++, "\"Testing Array of length 2^29 \"");
}catch(e){}

// Test Case 2:Testing Array of length 2^29+1(One more than the max length of the tagged integer)

var o525 = o489.o617(o31, {
                o696: true
            })
try {
o1(o9.length, 536870913, o21++,"\"Testing Array of length 2^29+1 \"");
}catch(e){}

// Test Case 3:Testing an array of length 2^29 -1 (One less than the max length of the tagged integer)

var o10=new Array(536870911)
try {
o149(o10.length, 536870911, o0++,"\"Testing Array of length 2^29-1 \"");
}catch(e){}

//Test Case 4:Testing an array of length 2^32-1 ( max length of integer)
var o39=new Array(4294967295)
try {
o1(o11.length ,4294967295, o0++,"\"Testing Array of length 2^32-1 \"");
}catch(e){}

//Test Case 5:Testing an array of length greater than the max length of the Integer

try {
try
{
    var o12=new Array(o421.o155*1024*4)
    try {
o1(1,0,"\"Testing an array of length >2^32 Did not raise an exception\"")
}catch(e){}
}
catch(o13)
{
    try {
o1(o12,undefined,o0++,"\"Testing an array of length greater than the max length of the Integer\"")
}catch(e){}
}
}catch(e){}

//Test Case 6:Testing Array of length 0 (Ensure tagged integers do not include the control bit as their length)

var o14=new Array(0)
try {
o1(o14.length, 0, o0++,"\"Testing Array of length 0 \"");
}catch(e){}

//Test Case 7:Testing Array of length 2^29 after changing the length property

var o15=new Array(536870911)
try {
o15.length=536870912
}catch(e){}
try {
o1(o15.length, 536870912,o0++, "\"Testing Array of length 2^29 after changing the length property \"")
}catch(e){}

//test case 8 testing array of length -1
try {
try
{
var o16=new Array(3);
try {
o16.length=-1
}catch(e){}
try {
o1(1,0,"\"Testing an array length property with -1 Did not raise an exception\"")
}catch(e){}
}
catch(o13)
{
try {
o1(o16.length, 3, o0++,"\"Testing negative array length property \"")
}catch(e){}

}
}catch(e){}

try {
o6.o7("Done");
}catch(e){}

