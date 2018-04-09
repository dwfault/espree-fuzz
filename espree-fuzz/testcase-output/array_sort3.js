//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o0)
{
    o1.o2(o0);
}

write("Scenario 0");
//Array sort testing to make sure no change for Strings
var o3 = new String("world hello");
o3.o4 = Array.prototype.sort;
try
{
 o3.o4();
}
catch (o5)
{
 if (! o5 instanceof o6)
  throw o5;
 write(o3);
}

//following scenario's test sparse array, prototype lookup and undefined elements
write("Scenario 1");
var o7 = [undefined, undefined, undefined];
o7.sort();
write(o7);
write(o7.length);

write("Scenario 2");

var o8 = undefined;
var o7 = [o8, o8];
o7[10] = o8;
o7[11] = o8;
o7[21] = o8;
o7[22] = o8;
o7[8] = o8;
o7.sort();
write(o7);
write(o7.length);

write("Scenario 3");
var o8 = undefined;
var o7 = [o8];
o7.sort();
write(o7);
write(o7.length);

write("Scenario 4 - prototype lookup  - output in cscript is different");

for(var o9 = 0;o9<20;o9=o9+4)
{
 Object.prototype[o9] = "o"+o9;
}

for(var o9 = 0;o9<20;o9=o9+3)
{
 Array.prototype[o9] = "p"+o9;
}

Array.prototype[14] = undefined;
Object.prototype[2] = undefined;

var o7 = [23,14, undefined, 17];

o7[10] = 5;
o7[11] = 22;
o7[12] = undefined;
o7[13] = 20;

write(o7.sort());
write(o7);
write(o7.length);

write("Scenario 5 - prototype lookup");
var o10=new Array(3)
write(o10.sort());
write(o10);

Array.prototype[0]=0;
Array.prototype[1]=0;
Array.prototype[2]=0;

write(o10.length);

write("Scenario 6 - prototype lookup");
Array.prototype[5]=10;
Array.prototype[6]=1;
 Array.prototype[7]=15;

var o10=new Array(8)
o10[0]=1;
o10[1]=2;
o10[2]=3;
write(o10.sort());

write("Scenario 7 - output in cscript is different");

Array.prototype[5]=10;
var o10=new Array(8)
o10[1]=1;
o10[5]=undefined;
o10.sort();
write(o10)

write("Scenario 8");

Array.prototype[12]=10;
var o10=new Array(8)
o10[1]=1;
write(o10.sort());

write(o10);

function o11(o12,o13) { o10[0]="test"; return o12 - o13; }
var o10=new Array(2);
o10[0]=12;
o10[1]=10;
o10.sort(o11);

write(o10);

function o11(o12, o13) { delete o10[0]; return o12 - o13; }
var o10=new Array(3);
o10[0]=12;
o10[2]=10;
o10.sort(o11);

write(o10);

