//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Run with jc -maxinterpretcount:1

// Create a path type with fixed method 'o.inspect'.
var o0 = Uint8Array.prototype.__proto__;
try {
o0.o1 = function () { try {
o2.o3(0);
}catch(o39){} };
}catch(o1048){}

// JIT a function that uses the fixed method
var o1 = 0
try {
o4(o0);
}catch(e){}
try {
o4(o0);
}catch(e){}

// Use the property cache to overwrite the fixed method
var o52 = { value: 1 }
try {
test(o0,false);
}catch(e){}
try {
test(o0,true);
}catch(e){}

// Verify that the new function is called.
try {
o4(o0);
}catch(e){}
