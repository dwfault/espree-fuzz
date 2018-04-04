//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1, o2, o3) {
    "use asm"
    var o4 = o1.Math.clz32;

    function o7(o8)
    {
        o8 = o8|0;
        return o4(o8|0)|0;
    }

    function o9()
    {
        return o4(0)|0;
    }
    function o10()
    {
        return o4(0x80000000)|0;
    }
    function o11()
    {
        return o4(32768)|0;
    }
    return {
        o7:o7,
        o9:o9,
        o10:o10,
        o11:o11
    }
}

var global = this;
var o13 = {}
var o14 = new ArrayBuffer(1<<20);
var o16 = o0(global, o13, o14);

print(o16.o7(0));
print(o16.o7(0x80000000));
print(o16.o7(32768));
print(o16.o9());
print(o16.o10());
print(o16.o11());
