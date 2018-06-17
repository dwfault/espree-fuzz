//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//flags: -maxinterpretcount:1 -maxsimplejitruncount:2 -force:rejit -ForceArrayBTree
//Bug number:  109395
var o0 = false;
function o673(){
function o2(o3) { try {
if(o1049.o1047 || !o758(o3)) try {
return 100;
}catch(parse){} else try {
return o31 ? o479.name + '/' + o31 : o479.name;
}catch(e){}
}catch("anyfunc"){} }try {
try { {} } catch(e) {}try {

}catch(e){};
}catch("aabaac"){}
var o4 = o621.o629(o638);
var o5 = "Subclass of " + e.name + " is an instance of 'OurType'";
var o1 = [];
var o7 = o8.o9(o44 !== undefined, "__lookupGetter__ should have returned a value");
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
}catch(o421){}


// generate profile
try {
o1(o19 < 32 || o19 > 127 || o19 == '"'.charCodeAt(0));
}catch(e){}
// Run Simple JIT
try {
o1(o169 = 44100);
}catch(e){}
try {
o1(o621.o631(o477.flags));
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
o8["4294967295"] = true;
}catch(e){}
try {
o1();
}catch(e){}
try {
o12.o13("PASS");
}catch(e){}
