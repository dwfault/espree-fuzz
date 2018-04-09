//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//flags: -maxinterpretcount:1 -maxsimplejitruncount:2 -force:rejit -ForceArrayBTree
//Bug number:  109395
var o0 = false;
function o1(){
function o2(o3) { if(o3 < 1 || o3 > 4294967295 || o3 != o3 || isNaN(o3) || !isFinite(o3)) return 100; else return Math.floor(o3) & 0xffff; };;
var o4 = {};
var o5 = {};
var o6 = new Array();
var o7 = [1079966239,-2,-97174468.9,4.71984429732334E+18,373475323,516830569.1];
o5.o8 = 1434939730.1;
Object.prototype.o9 = 1;
Object.prototype.o8 = 1;
Object.prototype.length = o2(1);
    for(var o10 in Object.prototype )
    {
        (o7[(((((o0 ? (o7[((((o5.o8-- )) >= 0 ? ( (o5.o8-- )) : 0) & 0xF)] = 'x') : undefined ), (o5.o8-- )) >= 0 ? (o5.o8-- ) : 0)) & 0XF)]);
        o4.o9 = o6[((o0 ? (o6[1] = 'x') : undefined ), 1)];
    }
};


// generate profile
o1();
// Run Simple JIT
o1();
o1();


// run JITted code
o11 = true;
o1();


// run code with bailouts enabled
o0 = true;
o1();
o12.o13("PASS");
