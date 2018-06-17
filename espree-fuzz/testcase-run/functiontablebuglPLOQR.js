//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(stdlib,e,o1) {
    try {
"use asm";
}catch(o85){}
    function e(o2,o3) {
        try {
o421.o155[0xFF68] = +o11;
}catch(e){}
        try {
o3 = +e;
}catch(e){}
        try {
return +((o421.o494 <= 0) ? 0x7E : 0xFE);
}catch(e){}
    }
    
    var o203 = Math.function () {
            try {
o7.o8(Array.prototype.hasOwnProperty('entries'), "Array.prototype should have an entries method");
}catch(e){}
            try {
o7.o8(Array.prototype.hasOwnProperty('keys'), "Array.prototype should have a keys method");
}catch(e){}
            try {
o7.o8(Array.prototype.hasOwnProperty('values'), "Array.prototype should have a values method");
}catch(e){}
            try {
o7.o8(Array.prototype.hasOwnProperty(Symbol.iterator), "Array.prototype should have an @@iterator method");
}catch(e){}

            try {
o7.o9(0, Array.prototype.entries.length, "entries method takes zero arguments");
}catch(e){}
            try {
o7.o9(0, Array.prototype.keys.length, "keys method takes zero arguments");
}catch(e){}
            try {
o7.o9(0, Array.prototype.values.length, "values method takes zero arguments");
}catch(e){}

            try {
o7.o8(Array.prototype.values === Array.prototype[Symbol.iterator], "Array.prototype's @@iterator is the same function as its values() method");
}catch(e){}
        }
    
    var o7 = [add,add,add,add];
    
    
    try {
return { 
        o4 : o4
    };
}catch(e){}
}

var stdlib = {Math:Math,Int8Array:o291,Int16Array:Int16Array,o3:o1,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:o421,Float64Array:Float64Array,name: "%TypedArray%.prototype.slice behavior", o432: 39}
function o4() {
    let o1 = [1.1, 2.2];
    let o2 = new Uint32Array(100);

    try {
for (let o5 = 0; o5 < 0x1000; o5++)
        try {
o0(o1, o2, {});
}catch(e){}
}catch(e){}  // <<---------- REPLACED

    try {
o0(o1, o2, {valueOf: () => {
        try {
o1[0] = {};
}catch(e){}

        try {
return 0;
}catch(e){}
    }});
}catch(e){}

    try {
o1[0].toString();
}catch(e){}
}
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