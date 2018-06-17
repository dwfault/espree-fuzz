//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(stdlib,o1,buffer) {
    try {
"use asm";
}catch(e){}
    function add(o2,o3) {
        try {
o2 = +o2;
}catch(e){}
        try {
o3 = +o3;
}catch(e){}
        try {
return +(o2+o3);
}catch(e){}
    }
    
    function o4(o2,o3){
        try {
o2 = +o2;
}catch(e){}
        try {
o3 = +o3;
}catch(e){}
        var o5 = 0.0;
        var o6 = 1;
        try {
o5 = +o7[o6&3](o2,o3);
}catch(e){}
        try {
return +o5;
}catch(e){}
    }
    
    var o7 = [add,add,add,add];
    
    
    try {
return { 
        o4 : o4
    };
}catch(e){}
}

var stdlib = {Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array,Infinity:Infinity, NaN:NaN}
var o8 = {}
var buffer = new ArrayBuffer(1<<20);

var o9 = o0(stdlib,o8,buffer);
var o2 = 1;
var o3 = 2;
try {
o10.o11(o9.o4(o2,o3));
}catch(e){}
try {
o10.o11(o9.o4(o2,o3));
}catch(e){}