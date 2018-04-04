//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//Test odd parameters
var o0 = [0, 1, 2, 3, 4, 5, 6];
var o1 = o0.splice(-100, -100);
o3.o4(o0);
o3.o4(o1);

o1 = o0.splice();
o3.o4(o0);
o3.o4(o1);

o1 = o0.splice(0);
o3.o4(o0);
o3.o4(o1);

var o1 = o0.splice(0, 0);
o3.o4(o0);
o3.o4(o1);


var o1 = o0.splice(1, -4);
o3.o4(o0);
o3.o4(o1);

var o1 = o0.splice(7, -4, 8, 9, 10);
o3.o4(o0);
o3.o4(o1);

var o1 = o0.splice(20, 40);
o3.o4(o0);
o3.o4(o1);

var o1 = o0.splice(-20, 4, 11, 12);
o3.o4(o0);
o3.o4(o1);

o1 = o0.splice(-100, -100);
o3.o4(o0);
o3.o4(o1);

//Test array
var o5 = [8,9];
var o6 = [11,12];

o1 = o0.splice(5,1);
o3.o4(o1);
o3.o4(o0);

o1 = o0.splice(2, 2, o5, o6);
o3.o4(o1);
o3.o4(o0);

o1 = o0.splice(-2, -2, o5, o6);
o3.o4(o1);
o3.o4(o0);

o1 = o0.splice(10, o5, o5, o5, o5, o5, o5, o5, o5, o5, o5, o5, o5, o5, o5, o5, o5, o5, o5, o5, o5, o5);
o3.o4(o1);
o3.o4(o0);

var o7 = [1, [2, 3, 4], [5, 6, 7]];
o1 = o0.splice(5, 1, o7);
o3.o4(o1);
o3.o4(o0);

var o8 = new Object();
o8.o1 = 0;
o8.o10 = 1;
o8.o11 = 2;

o1 = o0.splice(1,2, o8, "hello");
o3.o4(o1);
o3.o4(o0);


//Test object
var o1 = new Object();

o1.length = 6;
o1[0] = 1;
o1[1] = 2;
o1[2] = 3;
o1[3] = 4;
o1[4] = 5;
o1[5] = 6;


o1.o13 = Array.prototype.splice;
o3.o4(o1.length);
var o10 = o1.o13(0, 1, 9, 10, 11, 12);
o3.o4(o10);
o3.o4(o1.length);

o10 = o1.o13(0, 9);
o3.o4(o10);
o3.o4(o1.length);

o10 = o1.o13(0, 0, 1, 2, 3, 4, 5, 6);
o3.o4(o10);
o3.o4(o1.length);

o10 = o1.o13(3, 3, 7);
o3.o4(o10);
o3.o4(o1.length);

o10 = o1.o13(0, 8);
o3.o4(o10);
o3.o4(o1.length);

//Test string
o1 = new String("hello world");
o1.o13 = Array.prototype.splice;
o10 = undefined;
try
{
 o10 = o1.o13(0, 5);
}
catch(o18)
{
 if (!o18 instanceof o19) throw(o18);
 o3.o4(o10);
 o3.o4(o1);
}

try
{
 o10 = o1.o13(0, 5);
}
catch(o18)
{
 if (!o18 instanceof o19) throw(o18);
 o3.o4(o10);
 o3.o4(o1);
}

try
{
 o10 = o1.o13(0, 13);
}
 catch(o18)
{
 if (!o18 instanceof o19) throw(o18);
 o3.o4(o10);
 o3.o4(o1);
}

o3.o4("Test: splice when the item to replace is not writable."); // WOOB: 1139812
var o0 = {};
Object.defineProperty(o0, "0", { value: 0 });
Object.defineProperty(o0, "1", { value: 1 });
o0.length = 2;
try {
  Array.prototype.splice.apply(o0, [0, 1, 'z']);
} catch (o23) {
  o3.o4("e instanceOf TypeError = " + (o23 instanceof o19));
}
o3.o4("a.length = " + o0.length);

o0 = new Array(1000);
o1 = o0.splice(1, 17, "a");

function o24()
{
    var o25 = [0,1,2,3,4,5,6,7,8,9];
    for(var o26 = 0; o26 < 2; o26++)
    {
      o25.length --;
      o25.splice(3,1,31,32,33);
    }
    return o25.length;
}
o3.o4("arr.length = " + o24());