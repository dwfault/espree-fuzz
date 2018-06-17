//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(stdlib,o1,buffer) {
    "use asm";
    var o2 = stdlib.Math.fround;
    //views
    var o3  =new stdlib.Float64Array(buffer);

    function o4(){
        var o5 = 0.5
        var o6 = o2(1.5);
        o3[1] = o6;
        return +(o3[1])
    }
    return o4;
}

var global = {Math:Math,Float64Array:Float64Array}
var o7 = {}
var buffer = new ArrayBuffer(1<<20);

var o8 = o0(global,o7,buffer);

o9.o10(o8());
o9.o10(o8());
