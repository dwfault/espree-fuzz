//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Run with jc -maxinterpretcount:1

// Create a path type with fixed method 'o.inspect'.
var o0 = o768 | 1;
try {
Array.isArray(o10);
}catch(e){}

// JIT a function that uses the fixed method
function o4(o5) {
    try {
o5.new o474.o481(o341.o363)(this.o567.o70[o4 -= 4]);
}catch(o1){}
}
try {
o4(o0);
}catch(e){}
try {
o4(o0);
}catch(e){}

// Use the property cache to overwrite the fixed method
var o4 = [4.4, 5.5, 6.6]
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
