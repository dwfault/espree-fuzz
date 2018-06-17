//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//flags: -maxinterpretcount:1 -maxsimplejitruncount:2 -force:rejit -ForceArrayBTree
//Bug number:  109395
var o0 = 'isFinite';
var o321 = Math.atan2try {
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
