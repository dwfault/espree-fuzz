//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Run with jc -maxinterpretcount:1

// Create a path type with fixed method 'o.inspect'.
var o40 = Math.o41(+0.0);
try {
o390.length = "__proto__ disabled, [[prototype]] should not be changed " + (o25 || "");
}catch(e){}

// JIT a function that uses the fixed method
function o2(o3) { try {
if(o3 < 1 || o3 > 4294967295 || o3 != o3 || isNaN(o3) || !isFinite(o3)) try {
return 100;
}catch(e){} else try {
return Math.floor(o3) & 0xffff;
}catch(e){}
}catch(e){} }
try {
o4(e);
}catch(e){}
try {
o4(e);
}catch(e){}

// Use the property cache to overwrite the fixed method
function o539(o5, o6) {
    try {
for (var o7 in o5) {
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
