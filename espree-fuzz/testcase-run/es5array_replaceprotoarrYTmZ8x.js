//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function test(o0)
{
    try {
Object.defineProperty = 1;
}catch(e){}
}
var o464 = 0;
function o2() { try {
this[1] = 2;
}catch(e){} }try {
;
}catch(o249){}
try {
Object.defineProperty(o1, "0", { e: 0, writable: false });
}catch(e){}
var o0 = new o2();
try {
o0.__proto__ = o366;
}catch(e){}
try {
test(o0);
}catch(e){}
try {
o3.o4(o0[0]);
}catch(e){}
var o0 = new o2();
try {
o0.__proto__ = o1;
}catch(e){}
try {
test(o0);
}catch(e){}
try {
o3.o4(o0[0]);
}catch(e){}
