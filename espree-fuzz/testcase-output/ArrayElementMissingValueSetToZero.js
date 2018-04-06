//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//flags: -maxinterpretcount:1 -maxsimplejitruncount:2 -force:rejit -ForceArrayBTree
//Bug number:  109395
var o0 = false;
function o1(){
function o2(o3) { if(o3 < 1 || o3 > 4294967295 || o3 != o3 || isNaN(o3) || !isFinite(o3)) return 100; else return Math.floor(o3) & 0xffff; };;
var o8 = {};
var o9 = {};
var o10 = new Array();
var o12 = [1079966239,-2,-97174468.9,4.71984429732334E+18,373475323,516830569.1];
o9.o13 = 1434939730.1;
Object.prototype.o16 = 1;
Object.prototype.o13 = 1;
Object.prototype.length = o2(1);
    for(var o18 in Object.prototype )
    {
        (o12[(((((o0 ? (o12[((((o9.o13-- )) >= 0 ? ( (o9.o13-- )) : 0) & 0xF)] = 'x') : undefined ), (o9.o13-- )) >= 0 ? (o9.o13-- ) : 0)) & 0XF)]);
        o8.o16 = o10[((o0 ? (o10[1] = 'x') : undefined ), 1)];
    }
};


// generate profile
o1();
// Run Simple JIT
o1();
o1();


// run JITted code
o20 = true;
o1();


// run code with bailouts enabled
o0 = true;
o1();
o21.o22("PASS");
