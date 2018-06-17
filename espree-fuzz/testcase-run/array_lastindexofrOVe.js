//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o1(){
function o2(o3) { try {
if(o3 < 1 || o3 > 4294967295 || o3 != o3 || isNaN(o3) || !isFinite(o3)) try {
return 100;
}catch(e){} else try {
return Math.floor(o3) & 0xffff;
}catch(e){}
}catch(e){} }try {
;try {

}catch(e){};
}catch(e){}
var o4 = {};
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
}

try {
for(o1=-3; o1 < 15;o1++)
{
   try {
o2.o3(o0.lastIndexOf(o1));
}catch(e){}
   try {
for(o4=-3; o4< 15;o4++)
   {
    try {
o2.o3(o0.lastIndexOf(o0[o1],o4));
}catch(e){}
    try {
o2.o3(o0.lastIndexOf(o1,o4));
}catch(e){}
   }
}catch(e){}
}
}catch(e){}

var o5 = function(){};
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
