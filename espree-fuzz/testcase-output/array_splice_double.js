//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//Test odd parameters
var o0 = [0.6, 1.34, 2.5, 3.34, 4.454, 5.65, 6.634];
var o1 = o0.splice(-100, -100);
o2.o3(o0);
o2.o3(o1);

o1 = o0.splice();
o2.o3(o0);
o2.o3(o1);

o1 = o0.splice(0);
o2.o3(o0);
o2.o3(o1);

var o1 = o0.splice(0, 0);
o2.o3(o0);
o2.o3(o1);


var o1 = o0.splice(1, -4);
o2.o3(o0);
o2.o3(o1);

var o1 = o0.splice(7, -4, 8, 9, 10);
o2.o3(o0);
o2.o3(o1);

var o1 = o0.splice(20, 40);
o2.o3(o0);
o2.o3(o1);

var o1 = o0.splice(-20, 4, 11, 12);
o2.o3(o0);
o2.o3(o1);

o1 = o0.splice(-100, -100);
o2.o3(o0);
o2.o3(o1);

//Test array
var o4 = [8.32,9.232];
var o5 = [11.232,12.234];

o1 = o0.splice(5,1);
o2.o3(o1);
o2.o3(o0);

o1 = o0.splice(2, 2, o4, o5);
o2.o3(o1);
o2.o3(o0);

o1 = o0.splice(-2, -2, o4, o5);
o2.o3(o1);
o2.o3(o0);

o1 = o0.splice(10, o4, o4, o4, o4, o4, o4, o4, o4, o4, o4, o4, o4, o4, o4, o4, o4, o4, o4, o4, o4, o4);
o2.o3(o1);
o2.o3(o0);

var o6 = [1, [2, 3, 4], [5, 6, 7]];
o1 = o0.splice(5, 1, o6);
o2.o3(o1);
o2.o3(o0);

var o7 = new Object();
o7.o1 = 0;
o7.o8 = 1;
o7.o9 = 2;

o1 = o0.splice(1,2, o7, "hello");
o2.o3(o1);
o2.o3(o0);


//Test object
var o1 = new Object();

o1.length = 6;
o1[0] = 1.23;
o1[1] = 2.23;
o1[2] = 3.23;
o1[3] = 4.54;
o1[4] = 5.66;
o1[5] = 6.45;


o1.o10 = Array.prototype.splice;
o2.o3(o1.length);
var o8 = o1.o10(0, 1, 9, 10, 11, 12);
o2.o3(o8);
o2.o3(o1.length);

o8 = o1.o10(0, 9);
o2.o3(o8);
o2.o3(o1.length);

o8 = o1.o10(0, 0, 1, 2, 3, 4, 5, 6);
o2.o3(o8);
o2.o3(o1.length);

o8 = o1.o10(3, 3, 7);
o2.o3(o8);
o2.o3(o1.length);

o8 = o1.o10(0, 8);
o2.o3(o8);
o2.o3(o1.length);

//Test string
o1 = new String("hello world");
o1.o10 = Array.prototype.splice;
o8 = undefined;
try
{
 o8 = o1.o10(0, 5);
}
catch(o11)
{
 if (!o11 instanceof o12) throw(o11);
 o2.o3(o8);
 o2.o3(o1);
}

try
{
 o8 = o1.o10(0, 5);
}
catch(o11)
{
 if (!o11 instanceof o12) throw(o11);
 o2.o3(o8);
 o2.o3(o1);
}

try
{
 o8 = o1.o10(0, 13);
}
 catch(o11)
{
 if (!o11 instanceof o12) throw(o11);
 o2.o3(o8);
 o2.o3(o1);
}

o2.o3("Test: splice when the item to replace is not writable."); // WOOB: 1139812
var o0 = {};
Object.defineProperty(o0, "0", { value: 0 });
Object.defineProperty(o0, "1", { value: 1 });
o0.length = 2;
try {
  Array.prototype.splice.apply(o0, [0, 1, 'z']);
} catch (o13) {
  o2.o3("e instanceOf TypeError = " + (o13 instanceof o12));
}
o2.o3("a.length = " + o0.length);

o0 = new Array(1000);
o1 = o0.splice(1, 17, "a");

function o14()
{
    var o15 = [0,1.12,2.23,3,4.32,5,6.23,7,8,9];
    for(var o16 = 0; o16 < 2; o16++)
    {
      o15.length --;
      o15.splice(3,1,31.23,32.32,33.23);
    }
    return o15.length;
}
o2.o3("arr.length = " + o14());