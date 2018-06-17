//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Run with jc -maxinterpretcount:1

// Create a path type with fixed method 'o.inspect'.
var o0 = Boolean.prototype.length;
try {
Array.isArray(o10);
}catch(e){}

// JIT a function that uses the fixed method
var o1 = o25.next
try {
o4(o0);
}catch(e){}
try {
o4(o0);
}catch(e)try { try {
o13();
}catch(e){} } catch(e) {}try { o869[o870 | 6] = o867[o768 | 6] = o868[o870 | 1] = o866[o768 | 1] = ((o863 & 0x4000) >> 13) | ((o863 & 0x40) >> 6); } catch(e) {}

// Use the property cache to overwrite the fixed method
function test(e, o6) {
    try {
for (var o851 = 0 in o5) {
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
