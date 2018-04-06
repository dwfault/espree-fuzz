//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = [1, 2, 2, 4, 5, +0, -0, NaN, 0, true, true , false]

for(o2=-3; o2 < 15;o2++)
{
   o3.o4(o0.indexOf(o2));
   for(o6=-3; o6< 15;o6++)
   {
        o3.o4(o0.indexOf(o0[o2],o6));
        o3.o4(o0.indexOf(o2,o6));
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

o3.o4(o10.indexOf("abc"));
o3.o4(o10.indexOf("abc", 3));
o3.o4(o10.indexOf("abc", 2));
o3.o4(o10.indexOf("abc", -2));

o3.o4(o10.indexOf("efg"));
o3.o4(o10.indexOf("efg", 6));
o3.o4(o10.indexOf("efg", 1));
o3.o4(o10.indexOf("efg", -3));

o3.o4(o10.indexOf("xyg"));
o3.o4(o10.indexOf("esg", 2));
o3.o4(o10.indexOf("eag", 2));
o3.o4(o10.indexOf("", -2));

o3.o4(o10.indexOf(true));
o3.o4(o10.indexOf(false));
o3.o4(o10.indexOf(new Boolean(true)));

o3.o4(o10.indexOf(o13 , 6));
o3.o4(o10.indexOf(o13 , 1));
o3.o4(o10.indexOf(o13 ));
o3.o4(o10.indexOf(o7));

o3.o4(o10.indexOf(null));


o3.o4(o10.indexOf());

//implicit calls
var o13 ;
var o16 = [10];
Object.defineProperty(Array.prototype, "4", {configurable : true, get: function(){o13 = true; return 30;}});
o13 = false;
o16.length = 6;
var o20 = o16.indexOf(30);
o3.o4(o13);

//Float array with gaps
var o21 = new Array(5.5, 5.6);
o21[6] =  5.6;
o3.o4(o21.indexOf(5.7));

// Cases where we do/don't have to resume after failing to find the value in the head segment.
// Run with -forcearraybtree to really stress these.
var o22 = [0, 1];
o3.o4(o22.indexOf(4));
Array.prototype[2] = 'foo';
o3.o4(o22.indexOf('foo'));
o22[5] = 4;
o3.o4(o22.indexOf('foo'));
o3.o4(o22.indexOf(4));

o22 = [0, 1.1];
o3.o4(o22.indexOf(4));
Array.prototype[2] = 'bar';
o3.o4(o22.indexOf('bar'));
o22[5] = 4;
o3.o4(o22.indexOf(4));
o3.o4(o22.indexOf('bar'));

o22 = [0, 'test'];
o3.o4(o22.indexOf(4));
Array.prototype[2] = 4;
o3.o4(o22.indexOf(4));
o22[5] = 4;
o3.o4(o22.indexOf(4));
delete Array.prototype[2]
o3.o4(o22.indexOf(4));
