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
  Array.prototype[o4] = "p"+o4;
}

var o7=new Array(10);
var o8=o7.splice(0,5,"d1","d2","d3","d4")

write(o7);
write(o7.length);
write(o8);
write(o8.length);

for(var o4 =0;o4<10;o4++)
{
  delete Array.prototype[o4];
}

write("");
write("Test case 2");

for(var o4 =0;o4<10;o4++)
{
  Array.prototype[o4] = "p"+o4;
}

var o7=new Array(10);
var o8=o7.splice(0,5,"d1","d2","d3","d4","d5","d6","d7")
write(o7);
write(o7.length);
write(o8);
write(o8.length);

for(var o4 =0;o4<10;o4++)
{
  delete Array.prototype[o4];
}

write("");
write("Test case 3");

for(var o4 =0;o4<10;o4++)
{
  o4++;
  Array.prototype[o4] = "p"+o4;
}

var o7=new Array(10);
var o8=o7.splice(0,5,"d1","d2","d3","d4","d5","d6","d7")
write(o7);
write(o7.length);
write(o8);
write(o8.length);

for(var o4 =0;o4<10;o4++)
{
  delete Array.prototype[o4];
}

write("");
write("Test case 4");
for(var o11=0;o11<10;o11++)
{
    Array.prototype[o11]="P"+o11;
}
var o7=new Array(10);
var o8=o7.splice(3,5,"d1","d2","d3")
write(o7);
write(o7.length);
write(o8);
write(o8.length);
for(var o11=0;o11<10;o11++)
{
    delete Array.prototype[o11];
}

write("");
write("Test case 5");
for(var o11=0;o11<10;o11++)
{
    Array.prototype[o11]="P"+o11;
}
var o7=new Array(10);
var o8=o7.splice(3,5,"d1","d2","d3")
write(o7);
write(o7.length);
write(o8);
write(o8.length);

for(var o11=0;o11<10;o11++)
{
    delete Array.prototype[o11];
}

write("");
write("Test case 6");
for(var o11=0;o11<10;o11++)
{
    Array.prototype[o11]="P"+o11;
}
var o7=new Array(10);
var o8=o7.splice(3,1,"d1","d2","d3")

write(o7);
write(o7.length);
write(o8);
write(o8.length);

for(var o11=0;o11<10;o11++)
{
    delete Array.prototype[o11];
}

write("");
write("Test case 7");

Object.prototype.shift=Array.prototype.shift;
var o14 =new Object();
o14.length=10;
o14[0]=101;
o14[1]="string";
o14[9]="lastelement";

var o15=o14.shift()

for(var o4 in o14)
    write("expando:" + o4 +"=" +o14[o4]);

delete Object.prototype.shift;

write("");
write("Test case 8");

Object.prototype[0]="hello world";
Array.prototype[9]="p9";
var o7 =new Array(10);
o7[1]=123;

var o15=o7.shift();
write(o15);
write(o15.length);
write(o7);
write(o7.length);

delete Object.prototype[0];
delete Array.prototype[9];

write("");
write("Test case 9");
var o16 = new Array(2147483649);
o16[2147483647]=100;
var o8=o16.slice(2147483640,2147483648);
write(o8);
write(o8.length);
write(o16.length);

write("");
write("Test case 10");
for(var o4 = 0; o4< 20; o4 = o4+3)
{
  Object.prototype[o4] = "O"+o4;
}

for(var o4 = 1; o4< 20; o4 = o4+3)
{
  Array.prototype[o4] = "a"+o4;
}

var o7 = [];
for(var o4 = 1; o4< 20; o4 = o4+3)
{
  o7[o4] = o4;
}

o7.shift();
write(o7);
write(o7.length);
o7.unshift(10);
write(o7);
write(o7.length);
var o8 = o7.splice(5,2,"a","b");
write(o7);
write(o7.length);
write(o8);
write(o8.length);
o8 = o7.splice(7,6,"a","b");
write(o7);
write(o7.length);
write(o8);
write(o8.length);
o8 = o7.splice(10,2,"a","b","c","e","f");
write(o7);
write(o7.length);
write(o8);
write(o8.length);

write("");
write("Test case 11");
Object.prototype[2] = 10;
var o7 = new Array(5);
write(o7);
write(o7.length);
o7.shift();
write(o7);
write(o7.length);
o7.unshift("10","20");
o7.shift();
write(o7);
o7.shift();
write(o7);
o7.unshift(10,40);
write(o7);
o7.unshift(50);
write(o7);
o7.shift(50);
write(o7);

var o7 = new Array(5);
write(o7);
write(o7.length);
o7.reverse();
write(o7);
write(o7.length);

var o7 = new Array(5);
o7[2] = 2;
o7[3] = 3;
o7[4] = 4;
write(o7);
write(o7.length);
o7.reverse();
write(o7);
write(o7.length);

var o20 = [1, 2, 3];
var o21 = [];
o21.length = 3;
write(o20.concat(o21));
