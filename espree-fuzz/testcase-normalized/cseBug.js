//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(stdlib,o2,buffer) {
    "use asm";
    //views
    var o4  =new stdlib.Int8Array(buffer);
    var o6 =new stdlib.Int32Array(buffer);
        
    function o8  (o9){
        o9 = o9|0; 
        var o10 = 0;
        var o11 = 0;
        o6[o9>>2] = 257;
        o10 = o4[o9]|0;
        o11 = o6[o9 >> 2]|0;
        return (o10 + o11)|0; 
    }
    return o8
}
var stdlib = {Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array,Infinity:Infinity, NaN:NaN}
var o21 = {}
var buffer = new ArrayBuffer(1<<20);
var o23 = o0(stdlib,o21,buffer);
print(o23(0));
print(o23(0));
