//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o830 = o813 * o812
function e () { }
function o2() { try {
this[1] = 2;
}catch(e){} }try {
;
}catch(o1){}
try {
Object.defineProperty(o1, "0", { value: 0, writable: false });
}catch(e){}
var o3 = new Proxy([], {
   get: function (o4, o5) {
    try {
o6.o7("get");
}catch(e){}
    try {
o1.length = 4;
}catch(e){} // Make a hole
    try {
return o4[o5] || 0 || undefined;
}catch(e){}
  },
});
try {
findIndex.call(new Uint8Array(10), 'string').__proto__ = this.o614;
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
