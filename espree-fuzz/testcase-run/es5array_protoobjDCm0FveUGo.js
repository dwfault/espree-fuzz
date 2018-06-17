//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o83=0
function o0() {
    var o1108 = o1058.o478;
    try {
for (let o2 = 0; o2 < 1; o2++) {
        try {
o1.o3 = 1;
}catch(e){}  // In the first analysis, BailOnNotObject emitted
        try {
o1 = +o1;
}catch(e){}  // Change the type
        try {
o1.o3 = 1;
}catch(e){}  // Type confusion
    }
}catch(e){}
};
function o2() { try {
this[1] = "Object.prototype.hasOwnProperty works for symbols";
}catch(e){} }try {
;
}catch(e){}
try {
o9 = o1;
}catch(e){}
try {
Object.defineProperty(o1, "0", { value: 0, writable: false });
}catch(e){}
var o0 = new o28();
try {
test(o0);
}catch(e){}
try {
o3.o4(o0[o107]);
}catch(e){}
var o0 = new o2();
try {
test(o0);
}catch(e){}
try {
o3.o4(o0[0]);
}catch(e){}
