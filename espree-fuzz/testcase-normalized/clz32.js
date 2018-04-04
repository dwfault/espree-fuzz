//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// intended to test inlining of Math.clz32
// compliance tests are in es6 UT folder
function o0(o1, o2, o3) {
    var o4 = o1.Math.clz32;
    
    function o7(o8)
    {
        o8 = o8|0;
        return o4(o8);
    }
    
    function o9()
    {
        return o4(0);
    }
    function o10()
    {
        return o4(0x80000000);
    }
    function o11()
    {
        return o4(32768);
    }
    function o12()
    {
        return o4(NaN);
    }
    function o14()
    {
        return o4(Infinity);
    }
    function o16()
    {
        return o4(undefined);
    }
    function o18()
    {
        return o4(true);
    }
    function o19()
    {
        return o4();
    }
    return {
        o7:o7,
        o9:o9,
        o10:o10,
        o11:o11,
        o12:o12,
        o14:o14,
        o16:o16,
        o18:o18,
        o19:o19
    }
}

var global = this;
var o21 = {}
var o22 = new ArrayBuffer(1<<20);
var o24 = o0(global, o21, o22);

print(o24.o7(0));
print(o24.o7(0));
print(o24.o7(0x80000000));
print(o24.o7(32768));
print(o24.o7(NaN));
print(o24.o7(Infinity));
print(o24.o7(undefined));
print(o24.o7(true));
print(o24.o9());
print(o24.o9());
print(o24.o10());
print(o24.o10());
print(o24.o11());
print(o24.o11());
print(o24.o12());
print(o24.o12());
print(o24.o14());
print(o24.o14());
print(o24.o16());
print(o24.o16());
print(o24.o18());
print(o24.o18());
print(o24.o19());
print(o24.o19());
