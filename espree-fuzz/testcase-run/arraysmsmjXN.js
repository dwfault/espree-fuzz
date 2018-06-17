//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//Refer to Bug EZE\123
//This test case is to ensure that the length of the array is not always stored as a tagged integer
var o596 = (o421.this + o595) & 0xFFFF;
function o1(o2,e,o4,o5)
{

    try {
if(o421.o364 & 0xFF)
        try {
o6.o7(o7.o8(o22 == 3, "set.values() should have stopped after 1, 2, 3")+"failed");
}catch(e)try { try {
return o492.o491.o779(o492, o780, o196);
}catch(e){} } catch(e) {}try { return 'string'; } catch(e) {}
}catch(e){}
}

//Test Case 1: Testing Array of length 2^29 (max length of the tagged integer)

var o8=new Array(536870912)
try {
try { try {
--this.o622;
}catch(e){} } catch(e) {}
}catch(e){}

// Test Case 2:Testing Array of length 2^29+1(One more than the max length of the tagged integer)

function o233(o231, o234) {
    try {
for (var o82 = 0; o82 < o231.length; ++o82) {
        // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
        var o232 = o231.charCodeAt(o82); // possibly a lead surrogate
        try {
o201[(((o234) + (o82 * 2)) >> 1)] = o232;
}catch(e){}
    }
}catch(e){}
    // Null-terminate the pointer to the HEAP.
    try {
o201[(((o234) + (o231.length * 2)) >> 1)] = 0;
}catch(e){}
}
try {
o1(o31.length, 536870913, o0++,"\"Testing Array of length 2^29+1 \"");
}catch(e){}

// Test Case 3:Testing an array of length 2^29 -1 (One less than the max length of the tagged integer)

var o10=new Array(536870911)
try {
o1(o10.length, 536870911, o0++,"\"Testing Array of length 2^29-1 \"");
}catch(e){}

//Test Case 4:Testing an array of length 2^32-1 ( max length of integer)
var o11=new Array(42)
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

var all = [ undefined, null,
            true, false, new Boolean(true), new Boolean(false),
            NaN, +0, -0, 0, 1, 10.0, 10.1, -1, -5, 5,
            124, 248, 654, 987, -1026, +98768.2546, -88754.15478,
            1<<32, -(1<<32), (1<<32)-1, 1<<31, -(1<<31), 1<<25, -1<<25,
            Number.o1, Number.MIN_VALUE, Number.NaN, Number.o2, Number.NEGATIVE_INFINITY,
            new Number(NaN), new Number(+0), new Number( -0), new Number(0), new Number(1),
            new Number(10.0), new Number(10.1),
            new Number(Number.o1), new Number(Number.MIN_VALUE), new Number(Number.NaN),
            new Number(Number.o2), new Number(Number.NEGATIVE_INFINITY),
            "", "hello", "hel" + "lo", "+0", "-0", "0", "1", "10.0", "10.1",
            new String(""), new String("hello"), new String("he" + "llo"),
            new Object(), [1,2,3], new Object(), [1,2,3] , o0
          ]
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

