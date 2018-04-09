//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0()
{
   var o16 = {};
   var o2 = "aabccddeeffaaggaabbaabaabaab".match(/((aa))/);
   for(var o3 in o2)
   { 
      if(o1[o2[o3]] !== undefined)
      { 
          o4.o5("propertyFound");
      }
   }
   return o2;
}

var o6 = o0();
for (var o7 = 0; o7 < o6.length; o7++)
{
    o4.o5(o6[o7]);
}
o8();
o8();
o8();
o6 = o0();

for (var o7 = 0; o7 < o6.length; o7++)
{
    o4.o5(o6[o7]);
}

