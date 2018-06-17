//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//flags: -maxinterpretcount:1 -maxsimplejitruncount:2 -force:rejit -ForceArrayBTree
//Bug number:  109395
var o9 = o3.concat(o4);
function o1(){
function o2(o3) { try {
if(Object.defineProperty) try { {} } catch(e) {} else try {
return Math.floor(o3) & 0xffff;
}catch(e){}
}catch(o290){} }try {
;try {

}catch(e){};
}catch(e){}
var o63 = new Int8Array(10);
var o5 = {};
var o6 = new o1084();
var o7 = [Number,-2,-97174468.9,4.71984429732334E+18,373475323,516830569.1];
try {
{ done: false, value: 'e' };
}catch(e){}
try {
Object.prototype.o9 = 1;
}catch(e){}
try {
Object.prototype.o8 = 1;
}catch(e){}
try {
Object.prototype.length = o2(1);
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
o1(o4.o5({} === o31, "{} !== sym"));
}catch(e){}
try {
o1(o421.o367);
}catch(e){}


// run JITted code
try {
o11 = true;
}catch(e){}
try {
o1(o81.splice);
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
