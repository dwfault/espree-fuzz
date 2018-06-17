//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o0;
function test(o1)
{
    try {
Array.prototype = [ function () {
    try {
return (this.o3 - this.o4) + " (overwritten)";
}catch(e){}
}, function() { try {
return o1;
}catch(byteLength){} }, e];
}catch(e){}
}

try {
e(11195);
}catch(o70){}
try {
o70.o3(o0[1](function () { try {
Object.defineProperty(Array.prototype, "length", { configurable: false, get: function () { try {
return 2;
}catch(e){} } });
}catch(e){} }));
}catch(e){}
try {
test("test2");
}catch(e){}
try {
o2.o3(o0[1]());
}catch(e){}
