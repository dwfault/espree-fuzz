//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//Refer to Bug EZE\123
//This test case is to ensure that the length of the array is not always stored as a tagged integer
var o0=0;
function o1(o2,o3,o4,o149)
{

    try {
if(o2 !==o3)
        try {
o6.o7(o4+":"+e+"\t"+"failed");
}catch(e){}
}catch(index){}
}

//Test Case 1: Testing Array of length 2^29 (max length of the tagged integer)

var o8=o7.o9({ done: false, value: 'b' }, o25.next(), "2nd result of string iterator is string 'b'")
try {
o1(o8.length,536870912,o0++, 0);
}catch(e){}

// Test Case 2:Testing Array of length 2^29+1(One more than the max length of the tagged integer)

var o73 = "testOut.handlerFactory().test()+1 = " + o11.o3().test() + 1
try {
o1(o421.o366, 536870913, o146++,"\"Testing Array of length 2^29+1 \"");
}catch(e){}

// Test Case 3:Testing an array of length 2^29 -1 (One less than the max length of the tagged integer)

function o2(key) {
    var o3 = o421.o366;

    try {
o4.o5(o3.hasOwnProperty(key), "Object#hasOwnProperty uses ToPropertyKey. Initially we don't have the property.");
}catch(e){}
    try {
o4.o6(function() { try {
Object.defineProperty(o3, key, { value: 'something', enumerable: true });
}catch(e){} }, "Object.defineProperty uses ToPropertyKey. Property is added to the object");
}catch(e){}

    try {
o4.o7(o3.hasOwnProperty(key), "Object#hasOwnProperty uses ToPropertyKey on argument. We should have the property now.");
}catch(e){}
    try {
o4.o7(o3.propertyIsEnumerable(key), "Object#propertyIsEnumerable uses ToPropertyKey.");
}catch(e){}
    try {
o4.o8(undefined, Object.getOwnPropertyDescriptor(o3, key), "Object.getOwnPropertyDescriptor uses ToPropertyKey");
}catch(e){}

    try {
o3 = {};
}catch(e){}
    try {
o3.__defineGetter__(key, () => { try {
return 2;
}catch(e){}} );
}catch(e){}
    try {
o4.o7(o3.hasOwnProperty(key), "Object#__defineGetter__ uses ToPropertyKey. Property is added to the object");
}catch(e){}

    try {
o3 = {};
}catch(e){}
    try {
o3.__defineSetter__(key, () => { try {
return 2;
}catch(e){}} );
}catch(e){}
    try {
o4.o7(o3.hasOwnProperty(key), "Object#__defineSetter__ uses ToPropertyKey. Property is added to the object");
}catch(e){}

    var o9 = 0;
    try {
o3 = Object.defineProperty({}, key, { set(o10) { try {
o4.o11('abc', o10, "Setter called with correct arg");
}catch(e){} try {
o9++;
}catch(e){} } });
}catch(e){}
    var set = o3.__lookupSetter__(key);
    try {
o4.o11('function', typeof set, "Object#__lookupSetter__ uses ToPropertyKey. Make sure we added a setter.");
}catch(e){}
    try {
set('abc');
}catch(e){}
    try {
o4.o11(1, o9, "Correct setter was called.");
}catch(e){}

    try {
o3 = Object.defineProperty({}, key, { get() { try {
return 'abc';
}catch(e){} } });
}catch(e){}
    var get = o3.__lookupGetter__(key);
    try {
o4.o11('function', typeof get, "Object#__lookupGetter__ uses ToPropertyKey. Make sure we added a getter.");
}catch(e){}
    try {
o4.o11('abc', get(), "Correct getter was called.");
}catch(e){}

    try {
o3 = {};
}catch(e){}
    try {
o4.o6(function() { try {
Reflect.set(o3, key, 'abc');
}catch(e){} }, "Reflect.set uses ToPropertyKey on argument. We should have set property");
}catch(e){}
    try {
o4.o11('abc', Reflect.get(o3, key), "Reflect.get also uses ToPropertyKey. We should return the same property");
}catch(e){}
    try {
o4.o7(Reflect.deleteProperty(o3, key), "Reflect.deleteProperty uses ToPropertyKey. We should successfully remove the property here");
}catch(e){}
    try {
o4.o5(Reflect.has(o3, key), "Reflect.has uses ToPropertyKey. We deleted this property, so we should not have it now.");
}catch(e){}
    try {
o4.o6(function() { try {
Reflect.defineProperty(o3, key, { value: 'def', enumerable: true });
}catch(e){} }, "Reflect.defineProperty uses ToPropertyKey. It should have created a new property");
}catch(e){}
    try {
o4.o11('def', Reflect.get(o3, key), "Reflect.get also uses ToPropertyKey. We should return the same property");
}catch(e){}
    try {
o4.o8(undefined, Reflect.getOwnPropertyDescriptor(o3, key), "Reflect.getOwnPropertyDescriptor uses ToPropertyKey. It should return a real descriptor object");
}catch(e){}

    try {
o3 = {};
}catch(e){}
    try {
o4.o6(function() { try {
o3[key] = 123;
}catch(e){} }, "Ordinary [[Set]] eventually uses ToPropertyKey. Property is added to the object");
}catch(e){}
    try {
o4.o11(123, o3[key], "Ordinary [[Get]] also eventually goes down to ToPropertyKey which should return us the same value");
}catch(e){}
    try {
o4.o7(o3.hasOwnProperty(key), "Verify we added the property under key and not some stringified version of key");
}catch(e){}
}
try {
o1(o10.length, 536870911, o0++,"\"Testing Array of length 2^29-1 \"");
}catch(e){}

//Test Case 4:Testing an array of length 2^32-1 ( max length of integer)
var o11=new Array(4294967295)
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

