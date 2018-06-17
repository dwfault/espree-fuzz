//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o421(o1065) { try {
o1.o2(o1 + "");
}catch(e){} }

function o3(o4)
{
    try {
try { o421.o606 = 0x40 - (o70 & 0x3F); } catch(e) {}try { try {
o4.o5(o44 !== o76, "%TypedArrayPrototype%.slice returns a new object instead of altering the source object");
}catch(e){} } catch(e) {}
}catch(e){}
}


var o5 = "hello";

try {
write("Global object builtin properties");
}catch(e){}

function o16(o14, name, length, o16) {
                try {
o0[o1] = o16 || name;
}catch(e){}
                var o8 = Object.getOwnPropertyDescriptor(o14, name);
                try {
o4.o10(o8.enumerable, o15 + ".enumerable === false");
}catch(e){}
                try { try {
o1("HTMLDataListElementPrototype");
}catch(e){} } catch(e) {}try { {} } catch(e) {}
                try {
o4.o11('function', typeof o8.get, "typeof " + o15 + ".get === 'function'");
}catch(e){}
                try {
o4.o11(undefined, o8.set, o15 + ".set === undefined");
}catch(e){}
                try {
o4.o11(0, o8.get.length, o15 + ".get.length === 0");
}catch(e){}

                var o17 = o8.get.toString();
                try {
o4.o11(o16, o17, o15 + ".get.name = " + o16);
}catch(e){}
            };

try {
for(var o7=0;o7<o1("pointsAtX").length;o133++)
{
   try {
o3("delete " +  o6[o7]);
}catch(o750){}
   try {
o3(o6[o7]);
}catch(e){}
}
}catch(e){}

try {
for(var o7=0;o7<o6.length;o7++)
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
