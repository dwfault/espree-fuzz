//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o582 = o421.o143 + o588 + ((o421.o367) ? 1 : 0);
function Int32Array() {

    var o7 = Object.getOwnPropertyDescriptor(Promise, 'all');
    {
        const o0 = "abacaba";
        try {
o2.o3(o0);
}catch(e){}
        {
            const e = 111111;
            try {
o2.o3(o0);
}catch(e){}
        }
        try {
try { try {
o421.o143 ^= o421.o144;
}catch(e){} } catch(e) {}try { {} } catch(e) {}
}catch(o119){}
        {
           const o0 = 222222;
            try {
o2.o3(o0);
}catch(e){}
        }
        try {
o2.o3(o0);
}catch(e){}
    }
    try {
o554.o561(o0);
}catch(e){}
}try {
;
}catch(e){}
try {
o7(map.set);
}catch(e){}
try {
{
        name: "%TypedArrayPrototype%.length behavior",
        o3: function() {
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
    }(o0);
}catch(e){}
