//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = [1, 2, 2, 4, 5, +0, -0, NaN, 0, true, true , false]

for(o1=-3; o1 < 15;o1++)
{
   o2.o3(o0.indexOf(o1));
   for(o4=-3; o4< 15;o4++)
   {
        o2.o3(o0.indexOf(o0[o1],o4));
        o2.o3(o0.indexOf(o1,o4));
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

o2.o3(o6.indexOf("abc"));
o2.o3(o6.indexOf("abc", 3));
o2.o3(o6.indexOf("abc", 2));
o2.o3(o6.indexOf("abc", -2));

o2.o3(o6.indexOf("efg"));
o2.o3(o6.indexOf("efg", 6));
o2.o3(o6.indexOf("efg", 1));
o2.o3(o6.indexOf("efg", -3));

o2.o3(o6.indexOf("xyg"));
o2.o3(o6.indexOf("esg", 2));
o2.o3(o6.indexOf("eag", 2));
o2.o3(o6.indexOf("", -2));

o2.o3(o6.indexOf(true));
o2.o3(o6.indexOf(false));
o2.o3(o6.indexOf(new Boolean(true)));

o2.o3(o6.indexOf(o8 , 6));
o2.o3(o6.indexOf(o8 , 1));
o2.o3(o6.indexOf(o8 ));
o2.o3(o6.indexOf(o5));

o2.o3(o6.indexOf(null));


o2.o3(o6.indexOf());

//implicit calls
var o8 ;
var o9 = [10];
Object.defineProperty(Array.prototype, "4", {configurable : true, get: function(){o8 = true; return 30;}});
o8 = false;
o9.length = 6;
var o10 = o9.indexOf(30);
o2.o3(o8);

//Float array with gaps
var o11 = new Array(5.5, 5.6);
o11[6] =  5.6;
o2.o3(o11.indexOf(5.7));

// Cases where we do/don't have to resume after failing to find the value in the head segment.
// Run with -forcearraybtree to really stress these.
var o12 = [0, 1];
o2.o3(o12.indexOf(4));
Array.prototype[2] = 'foo';
o2.o3(o12.indexOf('foo'));
o12[5] = 4;
o2.o3(o12.indexOf('foo'));
o2.o3(o12.indexOf(4));

o12 = [0, 1.1];
o2.o3(o12.indexOf(4));
Array.prototype[2] = 'bar';
o2.o3(o12.indexOf('bar'));
o12[5] = 4;
o2.o3(o12.indexOf(4));
o2.o3(o12.indexOf('bar'));

o12 = [0, 'test'];
o2.o3(o12.indexOf(4));
Array.prototype[2] = 4;
o2.o3(o12.indexOf(4));
o12[5] = 4;
o2.o3(o12.indexOf(4));
delete Array.prototype[2]
o2.o3(o12.indexOf(4));
