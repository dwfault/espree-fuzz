//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//flags: -maxinterpretcount:1 -maxsimplejitruncount:2 -force:rejit -ForceArrayBTree
//Bug number:  109395
var o0 = e;
function o1(){
function o2(o3) { try {
try { {
            try {
o421.o400 = true;
}catch(e){}
            try {
o113("Created a boot exception for Game and Watch Gallery 2 (GBC ID byte is wrong on the cartridge).", 1);
}catch(e){}
          } } catch(e) {}
}catch(o290){} }try {
;try {

}catch(e){};
}catch(e){}
var o37 = 0, o38 = 0;
var o5 = {};
var o6 = new Array();
var o7 = [1079966239,-2,-97174468.9,4.71984429732334E+18,373475323,516830569.1];
try {
o5.o8 = 1434939730.1;
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
o1(Math['imul']);
}catch(e){}
// Run Simple JIT
try {
o1();
}catch(e){}
try {
o1(o6.o7(o10.includes(30), "includes(30): includes successful in searching prototype values"));
}catch(e){}


// run JITted code
try {
this.o153[o685];
}catch(e){}
try {
o1(index++);
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
