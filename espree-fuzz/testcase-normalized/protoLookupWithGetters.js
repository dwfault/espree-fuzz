//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1)
{
 o2.o3(o1);
}

write("Test case 1");

for(var o4 =0;o4<10;o4++)
{
  Object.defineProperty(Array.prototype, o4, { get: function (o4) { return function () { return "p"+o4; } }(o4), configurable: true, enumerable: true });
}

var o12=new Array(10);
var o13=o12.splice(0,5,"d1","d2","d3","d4")

write(o12);
write(o12.length);
write(o13);
write(o13.length);

for(var o4 =0;o4<10;o4++)
{
  delete Array.prototype[o4];
}

write("");
write("Test case 2");

for(var o4 =0;o4<10;o4++)
{
  Object.defineProperty(Array.prototype, o4, { get: function (o4) { return function () { return "p"+o4; } }(o4), configurable: true, enumerable: true });
}

var o12=new Array(10);
var o13=o12.splice(0,5,"d1","d2","d3","d4","d5","d6","d7")
write(o12);
write(o12.length);
write(o13);
write(o13.length);

for(var o4 =0;o4<10;o4++)
{
  delete Array.prototype[o4];
}

write("");
write("Test case 3");

for(var o4 =0;o4<10;o4++)
{
  o4++;
  Object.defineProperty(Array.prototype, o4, { get: function (o4) { return function () { return "p"+o4; } }(o4), configurable: true, enumerable: true });
}

var o12=new Array(10);
var o13=o12.splice(0,5,"d1","d2","d3","d4","d5","d6","d7")
write(o12);
write(o12.length);
write(o13);
write(o13.length);

for(var o4 =0;o4<10;o4++)
{
  delete Array.prototype[o4];
}

write("");
write("Test case 4");
for(var o16=0;o16<10;o16++)
{
  Object.defineProperty(Array.prototype, o16, { get: function (o16) { return function () { return "P"+o16; } }(o16), configurable: true, enumerable: true });
}
var o12=new Array(10);
var o13=o12.splice(3,5,"d1","d2","d3")
write(o12);
write(o12.length);
write(o13);
write(o13.length);
for(var o16=0;o16<10;o16++)
{
    delete Array.prototype[o16];
}

write("");
write("Test case 5");
for(var o16=0;o16<10;o16++)
{
  Object.defineProperty(Array.prototype, o16, { get: function (o16) { return function () { return "P"+o16; } }(o16), configurable: true, enumerable: true });
}
var o12=new Array(10);
var o13=o12.splice(3,5,"d1","d2","d3")
write(o12);
write(o12.length);
write(o13);
write(o13.length);

for(var o16=0;o16<10;o16++)
{
    delete Array.prototype[o16];
}

write("");
write("Test case 6");
for(var o16=0;o16<10;o16++)
{
  Object.defineProperty(Array.prototype, o16, { get: function (o16) { return function () { return "P"+o16; } }(o16), configurable: true, enumerable: true });
}
var o12=new Array(10);
var o13=o12.splice(3,1,"d1","d2","d3")

write(o12);
write(o12.length);
write(o13);
write(o13.length);

for(var o16=0;o16<10;o16++)
{
    delete Array.prototype[o16];
}

write("");
write("Test case 7");

Object.prototype.shift=Array.prototype.shift;
var o18 =new Object();
o18.length=10;
o18[0]=101;
o18[1]="string";
o18[9]="lastelement";

var o19=o18.shift()

for(var o4 in o18)
    write("expando:" + o4 +"=" +o18[o4]);

delete Object.prototype.shift;

write("");
write("Test case 8");

Object.defineProperty(Object.prototype, 0, { get: function () { return "hello world"; }, configurable: true, enumerable: true });
Object.defineProperty(Array.prototype, 9, { get: function () { return "p9"; }, configurable: true, enumerable: true });
var o12 =new Array(10);
o12[1]=123;

var o19=o12.shift();
write(o19);
write(o19.length);
write(o12);
write(o12.length);

delete Object.prototype[0];
delete Array.prototype[9];

write("");
write("Test case 9");
var o20 = new Array(2147483649);
o20[2147483647]=100;
var o13=o20.slice(2147483640,2147483648);
write(o13);
write(o13.length);
write(o20.length);

var o22 = new Array(5);
o22[2] = 2;
o22[3] = 3;
o22[4] = 4;

write("");
write("Test case 10");
var o12 = [];
for(var o4 = 1; o4< 20; o4 = o4+3)
{
  o12[o4] = o4;
}
for(var o4 = 0; o4< 20; o4 = o4+3)
{
  Object.defineProperty(Object.prototype, o4, { get: function (o4) { return function () { return "O"+o4; } }(o4), configurable: true, enumerable: true });
}

for(var o4 = 1; o4< 20; o4 = o4+3)
{
  Object.defineProperty(Array.prototype, o4, { get: function (o4) { return function () { return "a"+o4; } }(o4), configurable: true, enumerable: true });
}

o12.shift();
write(o12);
write(o12.length);
o12.unshift(10);
write(o12);
write(o12.length);
var o13 = o12.splice(5,2,"a","b");
write(o12);
write(o12.length);
write(o13);
write(o13.length);
o13 = o12.splice(7,6,"a","b");
write(o12);
write(o12.length);
write(o13);
write(o13.length);
o13 = o12.splice(10,2,"a","b","c","e","f");
write(o12);
write(o12.length);
write(o13);
write(o13.length);

write("");
write("Test case 11");
Object.defineProperty(Object.prototype, 2, { get: function () { return 10; }, configurable: true, enumerable: true });
var o12 = new Array(5);
write(o12);
write(o12.length);
o12.shift();
write(o12);
write(o12.length);
o12.unshift("10","20");
o12.shift();
write(o12);
o12.shift();
write(o12);
o12.unshift(10,40);
write(o12);
o12.unshift(50);
write(o12);
o12.shift(50);
write(o12);

var o12 = new Array(5);
write(o12);
write(o12.length);
o12.reverse();
write(o12);
write(o12.length);

var o12 = o22;
write(o12);
write(o12.length);
o12.reverse();
write(o12);
write(o12.length);

var o25 = [1, 2, 3];
var o26 = [];
o26.length = 3;
write(o25.concat(o26));
