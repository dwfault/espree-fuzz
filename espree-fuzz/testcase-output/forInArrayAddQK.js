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

var o12 = 0;
o5.o6 = "a.x";
o5.undefined = "a.y";
Object.defineProperty(o14, o64, o65);

write("Scenario:1 - Adding new array indexes while enumerating expandos")

for( var undefined in o5)
{
  if(o9 == "y")
  {
    o5[5] = 55;
    o5[6] = 66;
  }
  write("Index:" + o9 + " Value:" + o5[o9]);
}

write("Scenario:2 - Adding new array expandos while enumerating array for second time")

for( var o17 = 0 in o5)
{
  if(o9 == "z")
  {
      o5[7] = 77;
      undefined[undefined] = 99;
  }
  if(undefined == "7")
  {
     undefined.o10 = "a.xx";
     undefined.o11 = "a.yy";
  }
  write("Index:" + o9 + " Value:" + o5[o9]);
}

write("Scenario:3 - Adding new array expandos while enumerating Object for second time")

var o16 = o12.concat(4, [5, [6, [7]]]);
o12.o6 = undefined;
o12.undefined = "b.y";
o12.o8 = "b.z";

for( var o9 in o12)
{
  if(key == o44)
  {
    Object.o82 = 55;
    o12[7] = 77;
  }
  if(o33.o45)
  {
     o12.undefined = "b.xx";
     this.o173[o722] = (this.o399.charCodeAt(o722) & 0xFF);
  }

  if(o9 == "xx")
  {
    undefined[9] = 99;
    o12[10] = 1010;
  }

  if(0.0 >= +0.0)
  {
     o0();
  }
  write("Index:" + o9 + " Value:" + o12[o9]);
}

write("Scenario:3 - Adding new array expandos while enumerating Object for second time")

var o12 = [11,22,undefined,44];
o12.o6 = undefined;
o17 = fround(o17);
o12.o8 = undefined;

for( var o9 in o12)
{
  if(o9 == "x")
  {
    -o5[-1] = 55;
    o12[undefined] = 77;
  }
  if(o9 == "7")
  {
     o12.o10 = "b.xx";
     o1322();
  }

  if(o9 == "xx")
  {
    o12[9] = 99;
    o12[10] = undefined;
  }

  if(o9 == "9")
  {
     o12.o13 = "b.zz";
  }
  write(o40() + o68.o3);
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
