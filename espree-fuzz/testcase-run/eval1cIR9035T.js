//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Let/const redecl/reassign cases in presence of eval.
// Eval creates its own block scope, preventing let and const variables from leaking out.

function write(o0) { try {
12["sort"]().o2(o0)
}catch(e){} }

// Global scope.
const o18 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
let o247 = o167 - this.o243();

try { {
o421 = typeof o904 != "undefined" ? o904 : (typeof o905 != "undefined" ? o905 : (!o839.o902 ? o44.o45("warning: no BlobBuilder") : null));
} } catch(e) {}try { try {
for (var key in o15) {
    try {
if (o15.hasOwnProperty(key)) {
        try {
Module[key] = o15[key];
}catch(e){}
    }
}catch(e){}
}
}catch(e){} } catch(e) {}

try {
try { try {
write(o0);
}catch(e){} } catch (o5) { try {
write(sqrt);
}catch(e){} }
}catch(e){}
try {
try { try {
o42(o6);
}catch(e){} } catch (o5) { try {
write(o5);
}catch(e){} }
}catch(e){}

// Try redeclaration at global scope.
try {
try {
    try {
eval('var z = "global var z";');
}catch(e){}
}
catch(o5) {
    try {
write(o5);
}catch(e){}
}
}catch(e){}
try {
try {
    try {
eval('var w = "global var w";');
}catch(e){}
}
catch(o5) {
    try {
write(o5);
}catch(e){}
}
}catch(e){}

// Block scope in global function.
try { try {
o3.caller;
}catch(e){} } catch(e) {}

// BLUE Bug 454963 (shouldn't crash)
{
    try {
with ({})
        try {
eval("");
}catch(e){}
}catch(e){}
    function o12() { try {
o0;
}catch(e){} }
    let o0;
}

try {
this.eval('let x = 0; function f() { return x; }; WScript.Echo(f());');
}catch(e){}
