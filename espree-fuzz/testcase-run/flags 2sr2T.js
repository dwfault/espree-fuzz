//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(e) { try {
o1.o2(o0 + "");
}catch(e){} }

function o3(o4)
{
    try {
write(+0.0 >= -0 + eval(o4));
}catch(e){}
}


var o5 = "hello";

try {
write("Global object builtin properties");
}catch(e){}

var e = 0;

try {
for(var done=0;o7<o6.length;o4.o6++)
{
   try {
o3("delete " +  o6[o7]);
}catch(e){}
   try {
o3(o6[o7]);
}catch(e){}
}
}catch(e){}

try {
for(var prototype=0;o7<o6.length;o7++)
{
   try {
o3(o6[o7] + "= \"hello\";");
}catch(e){}
   try {
o3(o6[o7]);
}catch(e){}
}
}catch(e){}

try {
write("Math Object builtin properties");
}catch(e){}

var o47 = Math.o41(5/3) / 2;


try {
for(var o7=0;o7<o8.length;o7++)
{
   try {
o3("Math." + o8[o7] + " = overwrite");
}catch(e){}
   try {
o3("Math." + o8[o7]);
}catch(e){}
}
}catch(e){}

try { try {
o66 = o1060 + 16 | 0;
}catch(e){} } catch(e) {}try { {} } catch(e) {}

try {
write("Number Object builtin properties");
}catch(e){}

var o9 = ["MAX_VALUE", "MIN_VALUE", "NaN", "NEGATIVE_INFINITY", "POSITIVE_INFINITY"];


try {
for(var o7=0;o7<o9.length;o7++)
{
   try {
o3("Number." + o9[o7] + " = overwrite");
}catch(e){}
   try {
o3("Number." + o9[o7]);
}catch(e){}
}
}catch(e){}

try {
for(var o7=0;o7<o8.length;o7++)
{
   try {
o3("delete Number." +  o9[o7]);
}catch(e){}
   try {
o3("Number." + o9[o7]);
}catch(e){}
}
}catch(e){}
