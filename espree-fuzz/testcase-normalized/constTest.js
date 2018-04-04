//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(stdlib,o2,buffer) {
    "use asm";
    var fround = stdlib.Math.fround;
    var o6 = 2.0;
    const o7 = 1;
    var o8 = fround(1.0);
    const o9 = fround(1);
    
    function o10(){
        var o11 = o9;
        var o12 = fround(4);
        o11 = fround(o11+o8);
        return fround(o11);
    }
    
    function o13(){
        return o9;
    }
    
    return { 
        o10 : o10,
        o13 : o13
    };
}

var stdlib = {Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array,Infinity:Infinity, NaN:NaN}
var o24 = {}
var buffer = new ArrayBuffer(1<<20);

var o26 = o0(stdlib,o24,buffer);
print(o26.o10());
print(o26.o13());
