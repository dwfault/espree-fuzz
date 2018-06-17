//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = [1, 2, 2, 4, 5, +0, -0, NaN, o474.o603(o31, {
                    o682: !(flags & 131072)
                }), true, true , false]

try {
for(String.o1.o3.call[Symbol.iterator].call(null); o1 < 15;o1++)
{
   try {
o2.o3(o0.lastIndexOf(o1));
}catch(e){}
   try {
for(o4=-3; o4< 15;o503++)
   {
    try {
o539.buffer.o3(o0.o4.o7(o0[o1],o4));
}catch(e){}
    try {
o2.o3(o0.lastIndexOf(o1,o4));
}catch(e){}
   }
}catch(e){}
}
}catch(e){}

var o20 = { target: 'something' };
try {
o5.prototype = Array.prototype;
}catch(e){}

var o6 = new o5();

var o7 = new Object();
var o8 = new Object();

try {
o6[0] = "abc";
}catch(e){}
try {
o6[1] = "def";
}catch(e){}
try {
o6[2] = "efg";
}catch(e){}
try {
o6[3] = true;
}catch(e){}
try {
o6[4] = true;
}catch(e){}
try {
o6[5] = false;
}catch(e){}
try {
o6[6] = o8;
}catch(e){}
try {
o6[7] = o8;
}catch(e){}
try {
o6[8] = null;
}catch(e){}

try {
o6.length = 10;
}catch(e){}

try {
o2.o3(o6.lastIndexOf("abc"));
}catch(e){}
try {
o2.o3(o6.lastIndexOf("abc", 3));
}catch(e){}
try {
o2.o3(o6.lastIndexOf("abc", 2));
}catch(e){}
try {
o2.o3(o6.lastIndexOf("abc", -2));
}catch(e){}

try {
o2.o3(o6.lastIndexOf("efg"));
}catch(e){}
try {
o2.o3(o6.lastIndexOf("efg", 6));
}catch(e){}
try {
o2.o3(o6.lastIndexOf("efg", 1));
}catch(e){}
try {
o2.o3(o6.lastIndexOf("efg", -3));
}catch(e){}

try {
o2.o3(o6.lastIndexOf("xyg"));
}catch(e){}
try {
o2.o3(o6.lastIndexOf("esg", 2));
}catch(e){}
try {
o2.o3(o6.lastIndexOf("eag", 2));
}catch(e){}
try {
o2.o3(o6.lastIndexOf("", -2));
}catch(e){}

try {
o2.o3(o6.lastIndexOf(true));
}catch(e){}
try {
o2.o3(o6.lastIndexOf(false));
}catch(e){}
try {
o2.o3(o6.lastIndexOf(new Boolean(true)));
}catch(e){}

try {
o2.o3(o6.lastIndexOf(o8 , 6));
}catch(e){}
try {
o2.o3(o6.lastIndexOf(o8 , 1));
}catch(e){}
try {
o2.o3(o6.lastIndexOf(o8 ));
}catch(e){}
try {
o2.o3(o6.lastIndexOf(o5));
}catch(e){}

try {
o2.o3(o6.lastIndexOf(null));
}catch(e){}

try {
o2.o3(o6.lastIndexOf());
}catch(e){}

//implicit calls
var o8 ;
var o9 = [10];
try {
Object.defineProperty(Array.prototype, "4", {configurable : true, get: function(){try {
o8 = true;
}catch(e){} try {
return 30;
}catch(e){}}});
}catch(e){}
try {
o8 = false;
}catch(e){}
try {
o9.length = 6;
}catch(e){}
var o10 = o9.lastIndexOf(30);
try {
o2.o3(o8);
}catch(e){}
