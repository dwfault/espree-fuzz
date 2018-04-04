//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/*
This file is executed from fabs1.js

fabs from ucrtbase.dll doesn't restore the FPU Control word correctly when passed a NaN. 
This is exposed if we WScript.LoadScriptFile() code with Math.Abs(NaN) in it. 
Causing an assertion failure in SmartFPUControl. The change special-handles NaN without calling fabs
*/

function o0(stdlib, o2, o3) {
    "use asm";
    var abs = stdlib.Math.abs;
    function o6(o7) {
        o7 = +o7;
        return +abs(o7);
    };
    return {o6 : o6};
}


var o8 = o0({Math:Math},{}, new ArrayBuffer(1<<20));


o10.o11(o8.o6(-123.334) === 123.334);
o10.o11(isNaN(o8.o6(NaN)));
o10.o11(isNaN(o8.o6(-NaN)));
o10.o11(o8.o6(Infinity) === Infinity);
o10.o11(o8.o6(-Infinity) === Infinity);
o10.o11(o8.o6(0.0) === 0.0);
o10.o11(o8.o6(-0.0) === 0.0);

