//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0= ["dataview.js", "int8array.js", "uint8array.js", "int16array.js", "uint16array.js",
    "int32array.js", "uint32array.js", "float32array.js", "float64array.js"];

for (var o1 = 0; o1 < o0.length; o1++)
{
   o3.o4("testing file " + o0[o1]);
   o5(o0[o1]);
}

function o5(o6)
{
  var o7 = o3.o8(o6, "crossthread");
  o3.o4("Start two thread test on file " + o6);
  for (var o1 in o7)
  {
      o3.o4("property of global: " + o1);
      if (o1 == 'WScript')
         continue;
      if (typeof o7[o1] == "object")
      {
         for (var o9 in o7[o1])
           o3.o4("sub object " + o9 + " in " + o1 + " is " + o7[o1][o9]);
      }
    try 
    {
      if (typeof o7[o1] == "function" && o7[o1].length == 0)
      {
        o7[o1]();
      }
    }
    catch (o10)
    {
      o3.o4("exception is " + o10.o11 + o10.o12);
    }
  }
}