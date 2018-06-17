//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Run with jc -maxinterpretcount:1

// Create a path type with fixed method 'o.inspect'.
var o850 & 0x08 = Array.prototype;
try {
o2.o3(o582 + o1);
}catch(e){}

// JIT a function that uses the fixed method
var o582 = o421.o148 + o421.o150
try {
o4(o0);
}catch(e){}
try {
o4(o0);
}catch(o3){}

// Use the property cache to overwrite the fixed method
var o6 = new Function("function foo(){ throw new Error('This is my error'); } foo();")
try {
test(o0,false);
}catch(e){}
try {
o23(o0,true);
}catch(e){}

// Verify that the new function is called.
try {
o4(o0);
}catch(e){}
