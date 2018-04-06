//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

function o4(o5)
{
    //write(str);
    write(o5 + " : " + eval(o5));
}


var o7 = "hello";

write("Global object builtin properties");

var o8 = [ "NaN", "Infinity", "undefined"];

for(var o9=0;o9<o8.length;o9++)
{
   o4("delete " +  o8[o9]);
   o4(o8[o9]);
}

for(var o9=0;o9<o8.length;o9++)
{
   o4(o8[o9] + "= \"hello\";");
   o4(o8[o9]);
}

write("Math Object builtin properties");

var o11 = ["PI", "E", "LN10", "LN2", "LOG2E", "LOG10E", "SQRT1_2", "SQRT2"];


for(var o9=0;o9<o11.length;o9++)
{
   o4("Math." + o11[o9] + " = overwrite");
   o4("Math." + o11[o9]);
}

for(var o9=0;o9<o11.length;o9++)
{
   o4("delete Math." +  o11[o9]);
   o4("Math." + o11[o9]);
}

write("Number Object builtin properties");

var o12 = ["MAX_VALUE", "MIN_VALUE", "NaN", "NEGATIVE_INFINITY", "POSITIVE_INFINITY"];


for(var o9=0;o9<o12.length;o9++)
{
   o4("Number." + o12[o9] + " = overwrite");
   o4("Number." + o12[o9]);
}

for(var o9=0;o9<o11.length;o9++)
{
   o4("delete Number." +  o12[o9]);
   o4("Number." + o12[o9]);
}
