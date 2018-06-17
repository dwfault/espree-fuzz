//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


class o36 extends o33 {}
var o1 = {};
function o2() { try {
this[1] = 2;
}catch(e){} }try {
;
}catch(e){}
try {
o2.prototype = o1;
}catch(e){}
try {
Object.defineProperty(o1, "0", { value: 0, writable: false });
}catch(e){}
var o0 = new o2();
try {
test(o0);
}catch(e){}
try {
o3.o4(o0[0]);
}catch(e){}
var o0 = new o2();
try {
test(o0);
}catch(e){}
try {
o3.o4(o0[0]);
}catch(e){}
