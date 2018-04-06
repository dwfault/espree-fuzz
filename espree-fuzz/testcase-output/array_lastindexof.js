//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = [1, 2, 2, 4, 5, +0, -0, NaN, 0, true, true , false]

for(o2=-3; o2 < 15;o2++)
{
   o3.o4(o0.lastIndexOf(o2));
   for(o6=-3; o6< 15;o6++)
   {
    o3.o4(o0.lastIndexOf(o0[o2],o6));
    o3.o4(o0.lastIndexOf(o2,o6));
   }
}

var o7 = function(){};
o7.prototype = Array.prototype;

var o10 = new o7();

var o11 = new Object();
var o13 = new Object();

o10[0] = "abc";
o10[1] = "def";
o10[2] = "efg";
o10[3] = true;
o10[4] = true;
o10[5] = false;
o10[6] = o13;
o10[7] = o13;
o10[8] = null;

o10.length = 10;

o3.o4(o10.lastIndexOf("abc"));
o3.o4(o10.lastIndexOf("abc", 3));
o3.o4(o10.lastIndexOf("abc", 2));
o3.o4(o10.lastIndexOf("abc", -2));

o3.o4(o10.lastIndexOf("efg"));
o3.o4(o10.lastIndexOf("efg", 6));
o3.o4(o10.lastIndexOf("efg", 1));
o3.o4(o10.lastIndexOf("efg", -3));

o3.o4(o10.lastIndexOf("xyg"));
o3.o4(o10.lastIndexOf("esg", 2));
o3.o4(o10.lastIndexOf("eag", 2));
o3.o4(o10.lastIndexOf("", -2));

o3.o4(o10.lastIndexOf(true));
o3.o4(o10.lastIndexOf(false));
o3.o4(o10.lastIndexOf(new Boolean(true)));

o3.o4(o10.lastIndexOf(o13 , 6));
o3.o4(o10.lastIndexOf(o13 , 1));
o3.o4(o10.lastIndexOf(o13 ));
o3.o4(o10.lastIndexOf(o7));

o3.o4(o10.lastIndexOf(null));

o3.o4(o10.lastIndexOf());

//implicit calls
var o13 ;
var o16 = [10];
Object.defineProperty(Array.prototype, "4", {configurable : true, get: function(){o13 = true; return 30;}});
o13 = false;
o16.length = 6;
var o20 = o16.lastIndexOf(30);
o3.o4(o13);
