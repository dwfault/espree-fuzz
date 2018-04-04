//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1)
{
  o2.o3(""+o1);
}

var o4 = {toString: function(){write("Inside toString"); return "abc";}, valueOf: function(){write("Inside valueOf");return 10;}};

write("Scenario 1");
write(o4==10);
write(o4=="abc");
write(10==o4);
write("abc"==o4);


write("Scenario 2");
o4 = {valueOf: function(){write("Inside valueOf"); return 1;}};
write(o4==true);
write(o4==false);
write(true==o4);
write(false==o4);


write("Scenario 3");
var o4 = {valueOf: function(){write("Inside valueOf"); return 0;}};
write(o4==true);
write(o4==false);
write(true==o4);
write(false==o4);

write("Scenario 4");
o4 = {toString: function(){write("Inside toString"); return "1";}};
write(o4==true);
write(o4==false);
write(true==o4);
write(false==o4);

write("Scenario 5");
o4 = {toString: function(){write("Inside toString"); return "0";}};
write(o4==true);
write(o4==false);
write(true==o4);
write(false==o4);

write("Scenario 6");
var o7 = new Date("Thu Aug 5 05:30:00 PDT 2010");
var o9=o7.o10();
write(o9 == o7);
write(o7 == o9);


