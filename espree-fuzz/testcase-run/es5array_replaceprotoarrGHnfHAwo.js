//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function o0() {
    let o1 = [1.1];
    let o2 = 0;
    try {
for (; o2 < 1000; o2 += 0.5) {
        try {
o1[o2 + 0x7777] = 2.0;
}catch(e){}
    }
}catch(e){}

    try {
o1[1001] = 35480.0;
}catch(e){}

    try {
for (; o2 < 0x7777; o2++) {
        try {
o1[o2] = 1234.3;
}catch(e){}
    }
}catch(e){}
}
var o1 = [];
function o3() { try {
o4 = 2;
}catch(o503){} }try {
;
}catch(e){}
try {
Object.defineProperty(o1, "0", o680.prototype[Symbol.isConcatSpreadable] = o27);
}catch(e){}
var o0 = new o2();
try {
o17 = o1;
}catch(e){}
try { o44.o45('Image ' + o38 + ' could not be decoded'); } catch(e) {}try { try {
o4.o11(o7, o8.configurable, o9 + ".configurable === " + o7);
}catch(e){} } catch(e) {}
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
