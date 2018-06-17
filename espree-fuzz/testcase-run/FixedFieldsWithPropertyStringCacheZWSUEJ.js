//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Run with jc -maxinterpretcount:1

// Create a path type with fixed method 'o.inspect'.
var o0 = () => Array.from;
try {
o259[10720 >> 2] = "__proto__ disabled, [[prototype]] should not be changed " + (o25 || "");
}catch(e){}

// JIT a function that uses the fixed method
function o4(o5) {
    try {
try { o4.o6('function', typeof Promise, "Type of Promise global is 'function'")([], o109, "buf.slice(Number.POSITIVE_INFINITY, 3) returns elements an empty ArrayBuffer"); } catch(e) {}
}catch(e){}
}
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
