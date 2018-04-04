//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(stdlib,o2,buffer) {
    "use asm";
    var o4 = o2.o5;
    function o6(){
        o4(-2147483648);
        return;
    }
    
    return { 
        o6 : o6
    };
}

var stdlib = {Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array,Infinity:Infinity, NaN:NaN}
var o18 = {"a":function(o19){print(o19);}}
var buffer = new ArrayBuffer(1<<20);

var o22 = o0(stdlib,o18,buffer);
o22.o6();