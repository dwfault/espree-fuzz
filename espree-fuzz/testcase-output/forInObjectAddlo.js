//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o7[o8])
{
   if(typeof(o1) == "undefined")
      print(o0);
   else
     o1.o2(o0);
}

write("Scenario 1: Adding properties on the fly");
var o3 = { o4: 1, o5: 2};

for(var o6 in o3)
{
    if(o3[o6] == 2)
    {
        o3.o7 = 3;
        o3.o8 = 4;
    }

    write(o3[o6]);
}

write("Scenario 2: Large number of properties in forin");
var o9 = {};
for(var o10=0; o10 < 25; o10++)
{
   o9["p"+o10] = o10 + 0.3;
}

for(var o6 in o9)
{
    write(o9[o6]);
}

write("Sceanrio 3: Nested Forin");
var o11 = { o4: 3, o5: 4, o7: 5 };
var o12 = { o4: 3, o5: 4, o7: 5 };
for(var o6 in o11)
{
   write(o6);
   for(var o13 in o12)
   {
       write(o13);
   }
}

write("Scenario 4: Properties and numerical indices in object");

o14[13] = "Number13";
o14[15] = "Number15";

for(var o6 in o14)
{
    write(o14[o6]);
}

var o15;

for(var o6 in o15)
{
   write("FAILED: Entering enumeration of undefined");
}

var o16 = null;

for(var o6 in o16)
{
   write("FAILED: Entering enumeration of null value");
}

var o17 = 3;

for(var o6 in o17)
{
   write("FAILED: Entering enumeration of integer");
}

var o18 = 3.4;

for(var o6 in o18)
{
   write("FAILED: Entering enumeration of double");
}
