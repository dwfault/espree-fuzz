//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o0,o1,buffer) {
    "use asm";
    function add(o2,o3) {
        o2 = +o2;
        o3 = +o3;
        return +(o2+o3);
    }
    
    function o4(o2,o3){
        o2 = +o2;
        o3 = +o3;
        var o5 = 0.0;
        var o6 = 1;
        o5 = +o7[o6&3](o2,o3);
        return +o5;
    }
    
    var o7 = [add,add,add,add];
    
    
    return { 
        o4 : o4
    };
}

var stdlib = {Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array,Infinity:Infinity, NaN:NaN}
var o8 = {}
var buffer = new ArrayBuffer(1<<20);

var o9 = o0(stdlib,o8,buffer);
var o2 = 1;
var o3 = 2;
o10.o11(o9.o4(o2,o3));
o10.o11(o9.o4(o2,o3));