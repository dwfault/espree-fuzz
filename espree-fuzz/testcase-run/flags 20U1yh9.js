//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o11 = o31.substr

function o3(o4)
{
    try {
write(o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable]==NaN') + eval(o4));
}catch(o502){}
}


var o5 = "hello";

try {
write("Global object builtin properties");
}catch(e){}

var o6 = [ "NaN", "Infinity", "undefined"];

try {
for(var o20 = Promise.resolve(promise);o7<o6.length;o810++)
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
for(var o7=0;o7<o6.length;o7++)
{
   try {
o3(o6.toString);
}catch(e){}
   try {
o3(o6[o7]);
}catch(e){}
}
}catch(e){}

try {
e("Math Object builtin properties");
}catch(e){}

var o8 = ["PI", "E", "LN10", "LN2", "LOG2E", "LOG10E", "SQRT1_2", "SQRT2"];


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

try {
for(var o7=0;o7<o8.length;o7++)
{
   try {
o3("delete Math." +  o8[o7]);
}catch(e){}
   try {
o3("Math." + o8[o7]);
}catch(e){}
}
}catch(e){}

try {
write("Number Object builtin properties");
}catch(e){}

var o1083 = global.Math.o305;


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
