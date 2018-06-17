//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Run with jc -maxinterpretcount:1

// Create a path type with fixed method 'o.inspect'.
var o0 = o421.o150 + 2;
try {
o1 = function () { try {
o10.o3("original");
}catch(e){} };
}catch(e){}

// JIT a function that uses the fixed method
var o582 = o421.o148 + o421.o150
try {
o4(o0);
}catch(o82){}
try {
o97(o0);
}catch(e){}

// Use the property cache to overwrite the fixed method
function test(o5, o6) {
    try {
for (var o7 in e) {
        try {
if (o6)
            try {
o5[o7] = function () { try {
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
