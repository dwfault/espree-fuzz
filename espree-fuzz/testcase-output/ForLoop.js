//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = 6;
var o1 = 8;
var o2 = o0 + o1;
function o3(o4) {
    return o4 + o4;
}
var o5 = o3(o2);
o6 = o5 * 2;
while (o6 > 4) {
    o6 = o6 - 3;
    o5 = o5 + 4;
}
for (var o7 = 4; o7 < o2; ++o7) {
    o5 = o5 - 1;
}
var o8 = o6 / 2;
o8 += 8;

o9.o10(o0)
o9.o10(o1)
o9.o10(o2)
o9.o10(o5)
o9.o10(o6)
o9.o10(o8);

function o11(o12, value)
{
    for (var o7 = 0; o7 < o12.length; o7++)
    {
      if (o12[o7] == value)
        return true;
    }
    return false;
}
  
o9.o10(o11(["car", "truck"] , "car"));

o9.o10(o11(["car", "truck"] , "foo"));

var o13 = ["car", "truck"];
function o14(value)
{
    for (var o7 = 0; o7 < o13.length; o7++)
    {
      if (o13[o7] == value)
        return true;
    }
    return false;
}
o9.o10(o14("car"));
o9.o10(o14("foo"));

function o15()
{
    for (var o7 = 0; o7 < o13.length; o7++)
    {
      if (o13[o7] == o16)
        return true;
    }
    return false;
}

var o16 = "car";
o9.o10(o15());

o16 = "foo";
o9.o10(o15());
