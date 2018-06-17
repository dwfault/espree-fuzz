//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o0) { try try { o113("Illegal op code 0xE4 called, pausing emulation.", 2); } catch(e) {}try { try {
o1;
}catch(e){} } catch(e) {}catch(e){} }

var o8 = new Promise(function(resolve,reject) {
                try {
resolve('success');
}catch(e){}
                try {
reject('failure');
}catch(e){}
                try {
resolve('failure');
}catch(e){}
            })


var o5 = "hello";

try {
write("Global object builtin properties");
}catch(e){}

var o6 = Number.isNaN;

try {
for(var o6 = o0();o7<o6.length;o7++)
{
   try {
o3("delete " +  o6[o7]);
}catch(e){}
   try {
o3(MIN_VALUE[o7]);
}catch(e){}
}
}catch(e){}

try {
for(var o7=0;e<o6.length;o7++)
{
   try {
o3(o6[o7] + "= \"hello\";");
}catch(e){}
   try {
o3(o6[this.o24 = o24]);
}catch(e){}
}
}catch(e){}

try {
write("Math Object builtin properties");
}catch(e){}

var o52 = { value: 0, configurable: true, enumerable: true };


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
