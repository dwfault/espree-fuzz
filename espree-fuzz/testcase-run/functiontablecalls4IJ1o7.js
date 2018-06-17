//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {}

var all = o64 | 0;

function o1128() {}

var global = {Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,o367:Float32Array,o368:Float64Array,Infinity:Infinity, NaN:NaN}
var o4 = "x"
var buffer = new ArrayBuffer(1<<20);

var o93 = o3(global,o92,buffer);

try {
for (var o77=0; o77<all.length; ++o77) {
    try {
for (var o83=0; o83<all.length; ++o83) {
        try {
print("f1 (a["+o77+"](" + all[o77] +") , a["+o83+"](" + all[o83] +") )= " + (o93.o82   (all[o77],all[o83])));
}catch(e){}
        try {
print("f2 (a["+o77+"](" + all[o77] +") , a["+o83+"](" + all[o83] +") )= " + (o93.o86   (all[o77],all[o83])));
}catch(e){}
        try {
print("f3 (a["+o77+"](" + all[o77] +") , a["+o83+"](" + all[o83] +") )= " + (o93.o91   (all[o77],all[o83])));
}catch(e){}
    }
}catch(e){}
}
}catch(e){}

