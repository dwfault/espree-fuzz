//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o0) { try {
o1.o2(o0 + "");
}catch(o6.o7(true, Array.prototype.every.call(o5, o21), "oNeg has length coerced 0, so we never find an index that proves our comparison false")){} }

function o3(o4)
{
    try {
write(o4 + " : " + eval(o4));
}catch(e){}
}


var o5 = "hello";

try {
write("Global object builtin properties");
}catch(e){}

function o19(o9) {
    try {
o0.o1("x + y = " + o9.add());
}catch(e){}
    try {
o0.o1("x - y = " + o9.o6());
}catch(e){}
};

try {
for(var o7=0;o7<o6.length;o7++)
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
