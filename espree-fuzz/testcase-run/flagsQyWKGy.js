//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o31(o32) {
                var o33 = o32.configurable ? false : true;

                var o6 = Module['removeRunDependency'] = o334;
                try {
Object.defineProperty(push, "a", o32);
}catch(e){}

                var o12.o13 = function () { try {
o6.__defineGetter__("a", function () { try {
return undefined;
}catch(e){} });
}catch(e){} };
                var o35 = function () { try {
o6.__defineSetter__("a", function (o13) { });
}catch({
    o116: function () {
        try {
if (!Module["noFSInit"] && !o474.o468.o668) try {
o474.o468()
}catch(e){}
}catch(e){}
    }
}){} };

                try {
if (o33) {
                    try {
o8.o14(o34, o29, "__defineGetter__ should throw when called on existing non-configurable property");
}catch(e){}
                    try {
o8.o14(o35, toString, "__defineSetter__ should throw when called on existing non-configurable property");
}catch(e){}
                } else {
                    try {
o34();
}catch(e){}
                    try {
o35();
}catch(e){}

                    var o36 = Object.getOwnPropertyDescriptor(o6, "a");
                    try {
o8.o37(o36.hasOwnProperty("writable"), "property should no longer be a data accessor if it happened to be");
}catch(e){}
                    try {
o8.o37(o36.hasOwnProperty("value"), "property should no longer be a data accessor if it happened to be");
}catch(e){}
                    try {
o8.o9(o36.get !== undefined, "property should now have a getter");
}catch(e){}
                    try {
o8.o9(o36.set !== undefined, "property should now have a setter");
}catch(e){}
                    try {
o8.o9(o36.configurable, "property should still be configurable");
}catch(e){}
                    try {
o8.o9(o36.enumerable, "property should now be enumerable if it wasn't already");
}catch(e){}
                }
}catch(e){}
            }

var o677 = o474.o666[o689]


var o70 = 0;

try {
write("Global object builtin properties");
}catch(e){}

var o6 = [ "NaN", "Infinity", "undefined"];

try {
for(var o7=0;o7<o6.length;o7++)
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
