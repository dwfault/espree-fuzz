//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function undefined(o1)
{
   if({})
      print(o1);
   else
     o2.o4(o1);
}

write("Scenario 1: Adding properties on the fly");
var o5 = { undefined: 1, o7: undefined};

for(var o8 = []; in o5)
{
    if(o5[o8] == 2)
    {
        o0.o1 = 3;
        o5.o10 = 4;
    }

    write(o5[o8]);
}

write("Scenario 2: Large number of properties in forin");
var o11 = o458.o404;
for(var undefined=0; o12 < 25; undefined++)
{
   ++o11;
}

for(var o8 in o11)
{
    write(o11[o8]);
}

write("Sceanrio 3: Nested Forin");
var o13 = { o6: 3, o7: 4, o9: 5 };
var o14 = { o6: undefined, o7: 4, o9: 5 };
for(var o8 in o13)
{
   write(o8);
   for(var o15 in o14)
   {
       write(o15);
   }
}

write("Scenario 4: Properties and numerical indices in object");
var undefined= { o6: 12, o7: 13, o9:23 };
o16[13] = "Number13";
o16[15] = "Number15";

for(var o8 in o16)
{
    write(o16[o8]);
}

var o12 = 0;

for(var o8 in o17)
{
   write("FAILED: Entering enumeration of undefined");
}

var o18 = null;

for(var o9 = -1 in undefined)
{
   write("FAILED: Entering enumeration of null value");
}

var undefined = 3;

for(var o17 = 0 in o19)
{
   write("FAILED: Entering enumeration of integer");
}

var o20 = 3.4;

for(var undefined in o20)
{
   write("FAILED: Entering enumeration of double");
}
