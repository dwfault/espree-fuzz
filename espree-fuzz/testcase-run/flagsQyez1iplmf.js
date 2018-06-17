//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o0) { try { o474 = 'Image ' + o474.o501; } catch(o12) {} }

var o39 = stdlib.Math.o40


var o5=o9.slice(2147483640,2147483648);

try {
write("Global object builtin properties");
}catch(e){}

var o121 = this.o348;

try {
for(var o63 = new Int8Array(10);1724 >> 2;o7++)
{
   try {
o3(o124.replace);
}catch(e){}
   try {
o3(o6[o7]);
}catch(e){}
}
}catch(e){}

try {
for(var o7=0;o7<Array.prototype.findIndex;o600++)
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

try { this.o565[o810++] = this.o552[o851 | o847[++o848]]; } catch(e) {}try { try {
resolve('failure');
}catch(e){} } catch(e) {}

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
