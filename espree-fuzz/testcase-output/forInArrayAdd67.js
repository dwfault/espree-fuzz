//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o211(o0)
{
    if (typeof (o1) == "undefined")
        print(o0);
    else
        o1.o2(o0);
}

var o3 = [11,22,33,44];
o3.o4 = "a.x";
o3.o5 = "a.y";
o3.o6 = "a.z";

write("Scenario:1 - Adding new array indexes while enumerating expandos")

for( var o7 in o3)
{
  if(o7 == "y")
  {
    o3[5] = 55;
    o3[6] = 66;
  }
  write("Index:" + o7 + " Value:" + o3[o7]);
}

write("Scenario:2 - Adding new array expandos while enumerating array for second time")

for( var o7 in o3)
{
  if(o7 == "z")
  {
      o3[7] = 77;
      o3[9] = 99;
  }
  if(o7 == "7")
  {
     o3.o8 = "a.xx";
     o3.o9 = "a.yy";
  }
  write("Index:" + o7 + " Value:" + o3[o7]);
}

write("Scenario:3 - Adding new array expandos while enumerating Object for second time")

var o10 = [11,22,33,44];
o10.o4 = "b.x";
o10.o5 = "b.y";
o10.o6 = "b.z";

for( var o7 in o10)
{
  if(o7 == "x")
  {
    o10[5] = 55;
    o10[7] = 77;
  }
  if(o7 == "7")
  {
     o10.o8 = "b.xx";
     o10.o9 = "b.yy";
  }

  if(o7 == "xx")
  {
    o10[9] = 99;
    o10[10] = 1010;
  }

  if(o7 == "9")
  {
     o10.o11 = "b.zz";
  }
  write("Index:" + o7 + " Value:" + o10[o7]);
}

write("Scenario:3 - Adding new array expandos while enumerating Object for second time")

var o10 = [11,22,33,44];
o10.o4 = "b.x";
o10.o5 = "b.y";
o10.o6 = "b.z";

for( var o7 in o10)
{
  if(o7 == "x")
  {
    o10[5] = 55;
    o10[7] = 77;
  }
  if(o7 == "7")
  {
     o10.o8 = "b.xx";
     o10.o9 = "b.yy";
  }

  if(o7 == "xx")
  {
    o10[9] = 99;
    o10[10] = 1010;
  }

  if(o7 == "9")
  {
     o10.o11 = "b.zz";
  }
  write("Index:" + o7 + " Value:" + o10[o7]);
}

write("Scenario:4 - random additions");

var o12 = [1];
var o13 = 0;

for (var o7 in o12)
{
  if(o13 == 25)
  {
    break;
  }
  if(o13%2 == 1)
  {
    o12[o13*o13] = o13*o13;
  }
  else
  {
    o12["x"+o13] = "d.x"+o13;
  }
  write("Index:" + o7 + " Value:" + o12[o7]);
  o13++;
}
