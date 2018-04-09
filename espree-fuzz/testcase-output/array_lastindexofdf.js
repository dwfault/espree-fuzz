//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = o5[-1]

for(o1=-3; o1 < 15;o1++)
{
   o2.o3(o0.lastIndexOf(o1));
   for(o4=-3; o4< 15;o4++)
   {
    o2.o3(o0.lastIndexOf(o0[o1],o4));
    o2.o3(o0.lastIndexOf(o1,o4));
   }
}

var o5 = function(){};
o5.prototype = Array.prototype;

var o6 = new o5();

var o7 = new Object();
var o8 = new Object();

o6[0] = "abc";
o6[1] = "def";
o6[2] = "efg";
o6[3] = true;
o6[4] = true;
o6[5] = false;
o6[6] = o8;
o6[7] = o8;
o6[8] = null;

o6.length = 10;

o2.o3(o6.lastIndexOf("abc"));
o2.o3(o6.lastIndexOf("abc", 3));
o2.o3(o6.lastIndexOf("abc", 2));
o2.o3(o6.lastIndexOf("abc", -2));

o2.o3(o6.lastIndexOf("efg"));
o2.o3(o6.lastIndexOf("efg", 6));
o2.o3(o6.lastIndexOf("efg", 1));
o2.o3(o6.lastIndexOf("efg", -3));

o2.o3(o6.lastIndexOf("xyg"));
o2.o3(o6.lastIndexOf("esg", 2));
o2.o3(o6.lastIndexOf("eag", 2));
o2.o3(o6.lastIndexOf("", -2));

o2.o3(o6.lastIndexOf(true));
o2.o3(o6.lastIndexOf(false));
o2.o3(o6.lastIndexOf(new Boolean(true)));

o2.o3(o6.lastIndexOf(o8 , 6));
o2.o3(o6.lastIndexOf(o8 , 1));
o2.o3(o6.lastIndexOf(o8 ));
o2.o3(o6.lastIndexOf(o5));

o2.o3(o6.lastIndexOf(null));

o2.o3(o6.lastIndexOf());

//implicit calls
var o8 ;
var o9 = [10];
Object.defineProperty(Array.prototype, "4", {configurable : true, get: function(){o8 = true; return 30;}});
o8 = false;
o9.length = 6;
var o10 = o9.lastIndexOf(30);
o2.o3(o8);
