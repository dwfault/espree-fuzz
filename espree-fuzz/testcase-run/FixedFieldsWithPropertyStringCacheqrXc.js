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
o5.o1(new Boolean(true) >= NaN);
}catch(e){}
}
try {
o4(e);
}catch(e){}
try {
o4(o0);
}catch(e){}

// Use the property cache to overwrite the fixed method
function test(o5, o0) {
    try {
for (var o0 = new WasmModuleBuilder() in o5) {
        try {
if (o6)
            try {
o516 = function () { try {
o2.o3("new");
}catch(e){} }
}catch(e){}
}catch(e){}
    }
}catch(e){}
}
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
