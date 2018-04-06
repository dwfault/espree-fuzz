//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(stdlib,o2,buffer) {
    "use asm";
    var o4 = stdlib.Math.fround;
    //views
    var o7  =new stdlib.Float64Array(buffer);

    function o9(){
        var o10 = 0.5
        var o11 = o4(1.5);
        o7[1] = o11;
        return +(o7[1])
    }
    return o9;
}

var global = {Math:Math,Float64Array:Float64Array}
var o13 = {}
var buffer = new ArrayBuffer(1<<20);

var o15 = o0(global,o13,buffer);

o16.o17(o15());
o16.o17(o15());
