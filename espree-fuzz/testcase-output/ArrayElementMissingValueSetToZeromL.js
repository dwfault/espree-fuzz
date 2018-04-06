//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//flags: -maxinterpretcount:1 -maxsimplejitruncount:2 -force:rejit -ForceArrayBTree
//Bug number:  109395
var o0 = false;
function o1(){
var o4 = {
        o5: { "0": 1.1, "1": 2.1, length: 2 }
    };;;
var o8 = [ 1, 2 ];
var o9 = {};
var o10 = new undefined();
var o12 = [1079966239,-2,-97174468.9,4.71984429732334E+18,373475323,516830569.1];
o9.o13 = 1434939730.1;
undefined.prototype.o16 = 1;
Object.prototype.undefined = 1;
Object.prototype.length = o2(1);
    for(var o18 in Object.prototype )
    {
        (o12[(((((undefined ? (o12[((-o5[o9].o6) & 0xF)] = 'x') : undefined ), (o9.o13-- )) >= 0 ? (o9.o13-- ) : 0)) & 0XF)]);
        o8.o16 = o10[((o0 ? (o10[1] = 'x') : undefined ), 1)];
    }
};


// generate profile
o1(o45.endsWith("aaaxyz"));
// Run Simple JIT
o1(o169(o4, o5, o8));
undefined();


// run JITted code
o20 = true;
o1(o5[o9]);


// run code with bailouts enabled
o0 = true;
o1();
o21.undefined("PASS");
