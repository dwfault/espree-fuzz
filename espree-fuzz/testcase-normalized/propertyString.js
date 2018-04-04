//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0()
{
   var o1 = {};
   var o2 = "aabccddeeffaaggaabbaabaabaab".match(/((aa))/);
   for(var o4 in o2)
   { 
      if(o1[o2[o4]] !== undefined)
      { 
          o6.o7("propertyFound");
      }
   }
   return o2;
}

var o8 = o0();
for (var o9 = 0; o9 < o8.length; o9++)
{
    o6.o7(o8[o9]);
}
o11();
o11();
o11();
o8 = o0();

for (var o9 = 0; o9 < o8.length; o9++)
{
    o6.o7(o8[o9]);
}

