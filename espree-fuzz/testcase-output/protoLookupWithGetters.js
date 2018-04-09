//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o0)
{
 o1.o2(o0);
}

write("Test case 1");

for(var o3 =0;o3<10;o3++)
{
  Object.defineProperty(Array.prototype, o3, { get: function (o3) { return function () { return "p"+o3; } }(o3), configurable: true, enumerable: true });
}

var o4=new Array(10);
var o5=o4.splice(0,5,"d1","d2","d3","d4")

write(o4);
write(o4.length);
write(o5);
write(o5.length);

for(var o3 =0;o3<10;o3++)
{
  delete Array.prototype[o3];
}

write("");
write("Test case 2");

for(var o3 =0;o3<10;o3++)
{
  Object.defineProperty(Array.prototype, o3, { get: function (o3) { return function () { return "p"+o3; } }(o3), configurable: true, enumerable: true });
}

var o4=new Array(10);
var o5=o4.splice(0,5,"d1","d2","d3","d4","d5","d6","d7")
write(o4);
write(o4.length);
write(o5);
write(o5.length);

for(var o3 =0;o3<10;o3++)
{
  delete Array.prototype[o3];
}

write("");
write("Test case 3");

for(var o3 =0;o3<10;o3++)
{
  o3++;
  Object.defineProperty(Array.prototype, o3, { get: function (o3) { return function () { return "p"+o3; } }(o3), configurable: true, enumerable: true });
}

var o4=new Array(10);
var o5=o4.splice(0,5,"d1","d2","d3","d4","d5","d6","d7")
write(o4);
write(o4.length);
write(o5);
write(o5.length);

for(var o3 =0;o3<10;o3++)
{
  delete Array.prototype[o3];
}

write("");
write("Test case 4");
for(var o6=0;o6<10;o6++)
{
  Object.defineProperty(Array.prototype, o6, { get: function (o6) { return function () { return "P"+o6; } }(o6), configurable: true, enumerable: true });
}
var o4=new Array(10);
var o5=o4.splice(3,5,"d1","d2","d3")
write(o4);
write(o4.length);
write(o5);
write(o5.length);
for(var o6=0;o6<10;o6++)
{
    delete Array.prototype[o6];
}

write("");
write("Test case 5");
for(var o6=0;o6<10;o6++)
{
  Object.defineProperty(Array.prototype, o6, { get: function (o6) { return function () { return "P"+o6; } }(o6), configurable: true, enumerable: true });
}
var o4=new Array(10);
var o5=o4.splice(3,5,"d1","d2","d3")
write(o4);
write(o4.length);
write(o5);
write(o5.length);

for(var o6=0;o6<10;o6++)
{
    delete Array.prototype[o6];
}

write("");
write("Test case 6");
for(var o6=0;o6<10;o6++)
{
  Object.defineProperty(Array.prototype, o6, { get: function (o6) { return function () { return "P"+o6; } }(o6), configurable: true, enumerable: true });
}
var o4=new Array(10);
var o5=o4.splice(3,1,"d1","d2","d3")

write(o4);
write(o4.length);
write(o5);
write(o5.length);

for(var o6=0;o6<10;o6++)
{
    delete Array.prototype[o6];
}

write("");
write("Test case 7");

Object.prototype.shift=Array.prototype.shift;
var o7 =new Object();
o7.length=10;
o7[0]=101;
o7[1]="string";
o7[9]="lastelement";

var o8=o7.shift()

for(var o3 in o7)
    write("expando:" + o3 +"=" +o7[o3]);

delete Object.prototype.shift;

write("");
write("Test case 8");

Object.defineProperty(Object.prototype, 0, { get: function () { return "hello world"; }, configurable: true, enumerable: true });
Object.defineProperty(Array.prototype, 9, { get: function () { return "p9"; }, configurable: true, enumerable: true });
var o4 =new Array(10);
o4[1]=123;

var o8=o4.shift();
write(o8);
write(o8.length);
write(o4);
write(o4.length);

delete Object.prototype[0];
delete Array.prototype[9];

write("");
write("Test case 9");
var o9 = new Array(2147483649);
o9[2147483647]=100;
var o5=o9.slice(2147483640,2147483648);
write(o5);
write(o5.length);
write(o9.length);

var o10 = new Array(5);
o10[2] = 2;
o10[3] = 3;
o10[4] = 4;

write("");
write("Test case 10");
var o4 = [];
for(var o3 = 1; o3< 20; o3 = o3+3)
{
  o4[o3] = o3;
}
for(var o3 = 0; o3< 20; o3 = o3+3)
{
  Object.defineProperty(Object.prototype, o3, { get: function (o3) { return function () { return "O"+o3; } }(o3), configurable: true, enumerable: true });
}

for(var o3 = 1; o3< 20; o3 = o3+3)
{
  Object.defineProperty(Array.prototype, o3, { get: function (o3) { return function () { return "a"+o3; } }(o3), configurable: true, enumerable: true });
}

o4.shift();
write(o4);
write(o4.length);
o4.unshift(10);
write(o4);
write(o4.length);
var o5 = o4.splice(5,2,"a","b");
write(o4);
write(o4.length);
write(o5);
write(o5.length);
o5 = o4.splice(7,6,"a","b");
write(o4);
write(o4.length);
write(o5);
write(o5.length);
o5 = o4.splice(10,2,"a","b","c","e","f");
write(o4);
write(o4.length);
write(o5);
write(o5.length);

write("");
write("Test case 11");
Object.defineProperty(Object.prototype, 2, { get: function () { return 10; }, configurable: true, enumerable: true });
var o4 = new Array(5);
write(o4);
write(o4.length);
o4.shift();
write(o4);
write(o4.length);
o4.unshift("10","20");
o4.shift();
write(o4);
o4.shift();
write(o4);
o4.unshift(10,40);
write(o4);
o4.unshift(50);
write(o4);
o4.shift(50);
write(o4);

var o4 = new Array(5);
write(o4);
write(o4.length);
o4.reverse();
write(o4);
write(o4.length);

var o4 = o10;
write(o4);
write(o4.length);
o4.reverse();
write(o4);
write(o4.length);

var o11 = [1, 2, 3];
var o12 = [];
o12.length = 3;
write(o11.concat(o12));
