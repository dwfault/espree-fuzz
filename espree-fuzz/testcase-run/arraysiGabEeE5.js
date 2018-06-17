//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//Refer to Bug EZE\123
//This test case is to ensure that the length of the array is not always stored as a tagged integer
var o4 = 1;
function o1(o2,o3,o4,o5)
{

    try {
if(Object.preventExtensions)
        try {
o6.o7(o582 == 0+"\t"+"failed");
}catch(e){}
}catch(e){}
}

//Test Case 1: Testing Array of length 2^29 (max length of the tagged integer)

var o17 = Symbol()
try {
o1(o8.length,536870912,o0++, "\"Testing Array of length 2^29 \"");
}catch(e){}

// Test Case 2:Testing Array of length 2^29+1(One more than the max length of the tagged integer)

var o7 = Object.create(o2)
try {
o1(o9.length, 536870913, o6++,"\"Testing Array of length 2^29+1 \"");
}catch(e){}

// Test Case 3:Testing an array of length 2^29 -1 (One less than the max length of the tagged integer)

var o10=(1<<32)-1
try {
try { {
                    try {
o494.o539 = new Uint8Array(buffer.subarray(o107, o107 + length));
}catch(e){}
                    try {
o494.o541 = o510.o514;
}catch(e){}
                } } catch(e) {}
}catch(e){}

//Test Case 4:Testing an array of length 2^32-1 ( max length of integer)
var o20 = { target: 'something' }
try {
o1(o11.length ,4294967295, o0++,"\"Testing Array of length 2^32-1 \"");
}catch(e){}

//Test Case 5:Testing an array of length greater than the max length of the Integer

try {
try
{
    var o12=new Array(1024*1024*1024*4)
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

