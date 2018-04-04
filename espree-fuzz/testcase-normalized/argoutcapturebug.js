//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// OSG bug 2037772
function o0(o1, o2, o3) {
    "use asm";

    function o4(o5)
    {
        o5 = o5|0;
        return o5|0;
    }
    function o6(o5,o3)
    {
        o5 = o5|0;
        o3 = o3|0;
        return;
    }
    function o7(o5)
    {
        o5 = o5|0;
        return o5|0;
    }
    function o8(o5,o3,o9,o10,o11,o12)
    {
        o5 = o5|0;
        o3 = o3|0;
        o9 = o9|0;
        o10 = o10|0;
        o11 = o11|0;
        o12 = o12|0;
        return o5|0;
    }

    function o13() {
     var o14 = 0, o15 = 0;
     o14 = o4(7) | 0;
     o6(o14, o7(6) | 0);
     o15 = o8((o14 | 0) == 0 ? 0 : 4 | 0, 1, 2, 3, 4, 5) | 0;
     o14 = (o14+o15) |0
     return o14|0;
    }

    return o13;
}

var global = {Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array,Infinity:Infinity, NaN:NaN}
var o28 = {o29: function(o30){return o30;}}
var o31 = new ArrayBuffer(1<<20);
var o33 = o0(global, o28, o31);
print(o33());