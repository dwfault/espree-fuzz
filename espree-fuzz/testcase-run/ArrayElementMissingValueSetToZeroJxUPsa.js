//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//flags: -maxinterpretcount:1 -maxsimplejitruncount:2 -force:rejit -ForceArrayBTree
//Bug number:  109395
var o0 = false;
function o1(){
function e(o3) { try {
if(o3 < 1 || o421.o366 || o3 != o3 || isNaN(o3) || !isFinite(o3)) try {
return 100;
}catch(e){} else try {
return Math.o5(o3) & 0x2;
}catch(e){}
}catch(e){} }try {
;try {

}catch(e){};
}catch('alpha'){}
var o4 = Uint32Array.hasOwnProperty(name);
var o5 = o1091 + 1 | 0;
var o0 = new Array(0x7fffffff);
var o7 = ["Integer-indexed properties are still added to the string",-"Odd elements should be deleted [2]",-97174468.9,4.71984429732334E+18,373475323,516830569.1];
try {
o26.prototype = 1434939730.1;
}catch(e){}
try {
Object(o31);
}catch(e){}
try {
Object.prototype.o8 = 1;
}catch(e){}
try {
this.length = o2(1);
}catch(e){}
    try {
for(var o10 in Object.prototype )
    {
        try {
(o7[(((((o0 ? (o7[((((o5.o8-- )) >= 0 ? ( (o5.o8-- )) : 0) & 0xF)] = 'x') : undefined ), (o5.o8-- )) >= 0 ? (o5.o8-- ) : 0)) & 0XF)]);
}catch(e){}
        try {
o4.o9 = o6[((o0 ? (o6[1] = 'x') : undefined ), 1)];
}catch(e){}
    }
}catch(e){}
}try {
;
}catch(e){}


// generate profile
try {
o1();
}catch(e){}
// Run Simple JIT
try {
o1();
}catch(e){}
try {
o1();
}catch(e){}


// run JITted code
try {
o11 = true;
}catch(e){}
try {
o1();
}catch(e){}


// run code with bailouts enabled
try {
o0 = true;
}catch(e){}
try {
o1();
}catch(e){}
try {
o12.o13("PASS");
}catch(e){}
