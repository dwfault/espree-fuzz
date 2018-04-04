//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//Refer to Bug EZE\123
//This test case is to ensure that the length of the array is not always stored as a tagged integer
var o0=0;
function o1(o2,o3,o4,o5)
{

    if(o2 !==o3)
        o6.o7(o4+":"+o5+"\t"+"failed");
}

//Test Case 1: Testing Array of length 2^29 (max length of the tagged integer)

var o8=new Array(536870912)
o1(o8.length,536870912,o0++, "\"Testing Array of length 2^29 \"");

// Test Case 2:Testing Array of length 2^29+1(One more than the max length of the tagged integer)

var o11=new Array(536870913)
o1(o11.length, 536870913, o0++,"\"Testing Array of length 2^29+1 \"");

// Test Case 3:Testing an array of length 2^29 -1 (One less than the max length of the tagged integer)

var o12=new Array(536870911)
o1(o12.length, 536870911, o0++,"\"Testing Array of length 2^29-1 \"");

//Test Case 4:Testing an array of length 2^32-1 ( max length of integer)
var o13=new Array(4294967295)
o1(o13.length ,4294967295, o0++,"\"Testing Array of length 2^32-1 \"");

//Test Case 5:Testing an array of length greater than the max length of the Integer

try
{
    var o14=new Array(1024*1024*1024*4)
    o1(1,0,"\"Testing an array of length >2^32 Did not raise an exception\"")
}
catch(o15)
{
    o1(o14,undefined,o0++,"\"Testing an array of length greater than the max length of the Integer\"")
}

//Test Case 6:Testing Array of length 0 (Ensure tagged integers do not include the control bit as their length)

var o17=new Array(0)
o1(o17.length, 0, o0++,"\"Testing Array of length 0 \"");

//Test Case 7:Testing Array of length 2^29 after changing the length property

var o18=new Array(536870911)
o18.length=536870912
o1(o18.length, 536870912,o0++, "\"Testing Array of length 2^29 after changing the length property \"")

//test case 8 testing array of length -1
try
{
var o19=new Array(3);
o19.length=-1
o1(1,0,"\"Testing an array length property with -1 Did not raise an exception\"")
}
catch(o15)
{
o1(o19.length, 3, o0++,"\"Testing negative array length property \"")

}

o6.o7("Done");

