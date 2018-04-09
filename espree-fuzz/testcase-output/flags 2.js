//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o0) { o1.o2(o0 + ""); }

function o3(o4)
{
    write(o4 + " : " + eval(o4));
}


var o5 = "hello";

write("Global object builtin properties");

var o6 = [ "NaN", "Infinity", "undefined"];

for(var o7=0;o7<o6.length;o7++)
{
   o3("delete " +  o6[o7]);
   o3(o6[o7]);
}

for(var o7=0;o7<o6.length;o7++)
{
   o3(o6[o7] + "= \"hello\";");
   o3(o6[o7]);
}

write("Math Object builtin properties");

var o8 = ["PI", "E", "LN10", "LN2", "LOG2E", "LOG10E", "SQRT1_2", "SQRT2"];


for(var o7=0;o7<o8.length;o7++)
{
   o3("Math." + o8[o7] + " = overwrite");
   o3("Math." + o8[o7]);
}

for(var o7=0;o7<o8.length;o7++)
{
   o3("delete Math." +  o8[o7]);
   o3("Math." + o8[o7]);
}

write("Number Object builtin properties");

var o9 = ["MAX_VALUE", "MIN_VALUE", "NaN", "NEGATIVE_INFINITY", "POSITIVE_INFINITY"];


for(var o7=0;o7<o9.length;o7++)
{
   o3("Number." + o9[o7] + " = overwrite");
   o3("Number." + o9[o7]);
}

for(var o7=0;o7<o8.length;o7++)
{
   o3("delete Number." +  o9[o7]);
   o3("Number." + o9[o7]);
}
