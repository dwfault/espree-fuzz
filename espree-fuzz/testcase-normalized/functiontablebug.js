//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(stdlib,o2,buffer) {
    "use asm";
    function add(o5,o6) {
        o5 = +o5;
        o6 = +o6;
        return +(o5+o6);
    }
    
    function o7(o5,o6){
        o5 = +o5;
        o6 = +o6;
        var o8 = 0.0;
        var o9 = 1;
        o8 = +o10[o9&3](o5,o6);
        return +o8;
    }
    
    var o10 = [add,add,add,add];
    
    
    return { 
        o7 : o7
    };
}

var stdlib = {Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array,Infinity:Infinity, NaN:NaN}
var o22 = {}
var buffer = new ArrayBuffer(1<<20);

var o24 = o0(stdlib,o22,buffer);
var o5 = 1;
var o6 = 2;
o25.o26(o24.o7(o5,o6));
o25.o26(o24.o7(o5,o6));