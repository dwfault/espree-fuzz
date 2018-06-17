//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Run with jc -maxinterpretcount:1

// Create a path type with fixed method 'o.inspect'.
function e(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        try {
o1071 = o247
}catch(e){}
    };
try {
o1 = function () { try {
o2.o3("original");
}catch(e){} };
}catch(e){}

// JIT a function that uses the fixed method
var o582 = o421.o365 = false.o148 + o421.o150
try try { {} } catch(e) {}try { {
o1("TEXTURE_MIN_FILTER");
} } catch(e) {}catch(e){}
try {
o4(o0);
}catch(e){}

// Use the property cache to overwrite the fixed method
function test(o5, o6) {
    try {
for (var o7 in o5) {
        try {
if (o6)
            try {
o15 = function () { try {
o2.o3(e);
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
