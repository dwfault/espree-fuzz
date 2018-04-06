//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1)
{
    if (typeof (o2) == "undefined")
        print(o1);
    else
        o2.o4(o1);
}

var o5 = [11,22,33,44];
o5.o6 = "a.x";
o5.o7 = "a.y";
o5.o8 = "a.z";

write("Scenario:1 - Adding new array indexes while enumerating expandos")

for( var o9 in o5)
{
  if(o9 == "y")
  {
    o5[5] = 55;
    o5[6] = 66;
  }
  write("Index:" + o9 + " Value:" + o5[o9]);
}

write("Scenario:2 - Adding new array expandos while enumerating array for second time")

for( var o9 in o5)
{
  if(o9 == "z")
  {
      o5[7] = 77;
      o5[9] = 99;
  }
  if(o9 == "7")
  {
     o5.o10 = "a.xx";
     o5.o11 = "a.yy";
  }
  write("Index:" + o9 + " Value:" + o5[o9]);
}

write("Scenario:3 - Adding new array expandos while enumerating Object for second time")

var o12 = [11,22,33,44];
o12.o6 = "b.x";
o12.o7 = "b.y";
o12.o8 = "b.z";

for( var o9 in o12)
{
  if(o9 == "x")
  {
    o12[5] = 55;
    o12[7] = 77;
  }
  if(o9 == "7")
  {
     o12.o10 = "b.xx";
     o12.o11 = "b.yy";
  }

  if(o9 == "xx")
  {
    o12[9] = 99;
    o12[10] = 1010;
  }

  if(o9 == "9")
  {
     o12.o13 = "b.zz";
  }
  write("Index:" + o9 + " Value:" + o12[o9]);
}

write("Scenario:3 - Adding new array expandos while enumerating Object for second time")

var o12 = [11,22,33,44];
o12.o6 = "b.x";
o12.o7 = "b.y";
o12.o8 = "b.z";

for( var o9 in o12)
{
  if(o9 == "x")
  {
    o12[5] = 55;
    o12[7] = 77;
  }
  if(o9 == "7")
  {
     o12.o10 = "b.xx";
     o12.o11 = "b.yy";
  }

  if(o9 == "xx")
  {
    o12[9] = 99;
    o12[10] = 1010;
  }

  if(o9 == "9")
  {
     o12.o13 = "b.zz";
  }
  write("Index:" + o9 + " Value:" + o12[o9]);
}

write("Scenario:4 - random additions");

var o14 = [1];
var o15 = 0;

for (var o9 in o14)
{
  if(o15 == 25)
  {
    break;
  }
  if(o15%2 == 1)
  {
    o14[o15*o15] = o15*o15;
  }
  else
  {
    o14["x"+o15] = "d.x"+o15;
  }
  write("Index:" + o9 + " Value:" + o14[o9]);
  o15++;
}
