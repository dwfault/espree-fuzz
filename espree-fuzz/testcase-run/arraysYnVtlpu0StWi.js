//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//Refer to Bug EZE\123
//This test case is to ensure that the length of the array is not always stored as a tagged integer
function o83(o114) {

    try {
o200[o337] = o200[o114];
}catch(e){}

    try {
o200[o337 + 1] = o200[o114 + 1];
}catch(e){}

    try {
o200[o337 + 2] = o200[o114 + 2];
}catch(e){}

    try {
o200[o337 + 3] = o200[o114 + 3];
}catch(e){}

    try {
o200[o337 + 4] = o200[o114 + 4];
}catch(e){}

    try {
o200[o337 + 5] = o200[o114 + 5];
}catch(e){}

    try {
o200[o337 + 6] = o200[o114 + 6];
}catch(e){}

    try {
o200[o337 + 7] = o200[o114 + 7];
}catch(e){}

};
function o18(o19, o852, __proto__) {
                var index = 0;

                try {
o13.o14(Object.prototype, Object.getPrototypeOf(o12));
}catch(e){}
                try {
o13.o7.o9(o6, Object.getPrototypeOf(o11), "%MapIteratorPrototype%'s prototype is %IteratorPrototype%")(o685.prototype, o12.__proto__);
}catch(e){}
                try {
o13.o15(!o12.hasOwnProperty("__proto__"));
}catch(e){}
                try {
o13.o14(1, o12[0]);
}catch(e){}
                try {
o13.o14(3, o12[2].o19);
}catch(e){}
                try {
o13.o14(4, __proto__.o21);
}catch(e){}
            }

//Test Case 1: Testing Array of length 2^29 (max length of the tagged integer)

var o109 = new Uint8Array(o108)
try {
o1(o8.length,536870912,o0++, "\"Testing Array of length 2^29 \"");
}catch(e){}

// Test Case 2:Testing Array of length 2^29+1(One more than the max length of the tagged integer)

var o581 = (o70 > 0x7F)
try {
o1(o9.length, 536870913, o0++,"\"Testing Array of length 2^29+1 \"");
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

