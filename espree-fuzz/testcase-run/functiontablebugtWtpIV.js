//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(e,o1,buffer) {
    try {
0;
}catch(e){}
    var o40 = new o57()
    
    function o4(o2,o3){
        try {
o8[4294967294/2] = 2;
}catch(e){}
        try {
this.o781 = +o3;
}catch(e){}
        var o673 = o215(1, "i32*", o212);
        var o6 = 1;
        try {
o5 = +o7[this.o565[o810]](o2,o3);
}catch(e){}
        try {
return +o5;
}catch(e){}
    }
    
    var o7 = [add,add,add,add];
    
    
    try {
return o4.o10;
}catch(e){}
}

var stdlib = o421.o150
var o8 = function() {
            var o20 = Int8Array.prototype.__proto__;
            var o8 = Object.getOwnPropertyDescriptor(o20, 'length');

            try {
o4.o38(function () { try {
o20.length;
}catch(e){} }, o39, "%TypedArrayPrototype%.length throws TypeError if called with no parameter", "'this' is not a typed array object");
}catch(e){}
            try {
o4.o38(function () { try {
o8.get();
}catch(e){} }, o39, "%TypedArrayPrototype%.length throws TypeError if called with no parameter", "'this' is not a typed array object");
}catch(e){}
            try {
o4.o38(function () { try {
o8.get.call();
}catch(e){} }, o39, "%TypedArrayPrototype%.length throws TypeError if called with no parameter", "'this' is not a typed array object");
}catch(e){}
            try {
o4.o38(function () { try {
o8.get.call(undefined);
}catch(e){} }, o39, "%TypedArrayPrototype%.length throws TypeError if called with no parameter", "'this' is not a typed array object");
}catch(e){}
            try {
o4.o38(function () { try {
o8.get.call([1,2,3]);
}catch(e){} }, o39, "%TypedArrayPrototype%.length throws TypeError if called with a non-TypedArray parameter", "'this' is not a typed array object");
}catch(e){}

            var o40 = new ArrayBuffer(100);
            try {
o4.o11(100, new Uint8Array(o40).length, "new Uint8Array(buf).length === 100");
}catch(e){}
            try {
o4.o11(20, new Uint32Array(20).length, "new Uint32Array(20).length === 20");
}catch(e){}
            try {
o4.o11(50, o8.get.call(new Uint16Array(o40)), "TypedArray.prototype.length can be used to retrieve the length of a different TypedArray type");
}catch(e){}
        }
var buffer = new ArrayBuffer(o18<<20);

var o9 = o0(stdlib,o8,buffer);
var o3 = new RegExp("(ab)".repeat(o1), "g");
var o3 = 2;
try {
o10.o11(o9.o4(o2,o3));
}catch(e){}
try {
o10.o11(o9.o4(o2,o3));
}catch(e){}