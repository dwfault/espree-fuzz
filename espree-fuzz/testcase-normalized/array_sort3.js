//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1)
{
    o2.o3(o1);
}

write("Scenario 0");
//Array sort testing to make sure no change for Strings
var o4 = new String("world hello");
o4.o6 = Array.prototype.sort;
try
{
 o4.o6();
}
catch (o10)
{
 if (! o10 instanceof o11)
  throw o10;
 write(o4);
}

//following scenario's test sparse array, prototype lookup and undefined elements
write("Scenario 1");
var o12 = [undefined, undefined, undefined];
o12.sort();
write(o12);
write(o12.length);

write("Scenario 2");

var o15 = undefined;
var o12 = [o15, o15];
o12[10] = o15;
o12[11] = o15;
o12[21] = o15;
o12[22] = o15;
o12[8] = o15;
o12.sort();
write(o12);
write(o12.length);

write("Scenario 3");
var o15 = undefined;
var o12 = [o15];
o12.sort();
write(o12);
write(o12.length);

write("Scenario 4 - prototype lookup  - output in cscript is different");

for(var o16 = 0;o16<20;o16=o16+4)
{
 Object.prototype[o16] = "o"+o16;
}

for(var o16 = 0;o16<20;o16=o16+3)
{
 Array.prototype[o16] = "p"+o16;
}

Array.prototype[14] = undefined;
Object.prototype[2] = undefined;

var o12 = [23,14, undefined, 17];

o12[10] = 5;
o12[11] = 22;
o12[12] = undefined;
o12[13] = 20;

write(o12.sort());
write(o12);
write(o12.length);

write("Scenario 5 - prototype lookup");
var o18=new Array(3)
write(o18.sort());
write(o18);

Array.prototype[0]=0;
Array.prototype[1]=0;
Array.prototype[2]=0;

write(o18.length);

write("Scenario 6 - prototype lookup");
Array.prototype[5]=10;
Array.prototype[6]=1;
 Array.prototype[7]=15;

var o18=new Array(8)
o18[0]=1;
o18[1]=2;
o18[2]=3;
write(o18.sort());

write("Scenario 7 - output in cscript is different");

Array.prototype[5]=10;
var o18=new Array(8)
o18[1]=1;
o18[5]=undefined;
o18.sort();
write(o18)

write("Scenario 8");

Array.prototype[12]=10;
var o18=new Array(8)
o18[1]=1;
write(o18.sort());

write(o18);

function o19(o20,o21) { o18[0]="test"; return o20 - o21; }
var o18=new Array(2);
o18[0]=12;
o18[1]=10;
o18.sort(o19);

write(o18);

function o19(o20, o21) { delete o18[0]; return o20 - o21; }
var o18=new Array(3);
o18[0]=12;
o18[2]=10;
o18.sort(o19);

write(o18);

