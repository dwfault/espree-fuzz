//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o421(o1065) { try {
o1.o2(o1 + "");
}catch(e){} }

function o3(o866)
{
    try {
try { o10o606e = 0x40 - (o70 & 0x3F); } catch(e) {}try { try {
o4.o5(o44 !== o76, "%TypedArrayPrototype%.slice returns a new object instead of altering the source object");
}catch(e){} } catch(e) {}
}catch(e){}
}


var o5 = "hello";

try {
o421("Global object builtin properties");
}catch(e){}

var o2 = [
    {
        name: "Octal escape sequences are not allowed in string template literals - exhaustive test",
        o3: function() {
            function o4(o5) {
                try {
if (o5 < 10) {
                    try {
o6.o7(function () { try {
eval('print(`\\00' + o5 + '`)');
}catch(e){} }, o8, "Scanning an octal escape sequence " + "`\\00" + o5 + "` throws SyntaxError.", "Octal numeric literals and escape characters not allowed in strict mode");
}catch(e){}
                }
}catch(e){}
                try {
if (o5 < 100) {
                    try {
o6.o7(function () { try {
eval('print(`\\0' + o5 + '`)');
}catch(e){} }, o8, "Scanning an octal escape sequence " + "`\\0" + o5 + "` throws SyntaxError.", "Octal numeric literals and escape characters not allowed in strict mode");
}catch(e){}
                }
}catch(e){}
                try {
o6.o7(function () { try {
eval('print(`\\' + o5 + '`)');
}catch(e){} }, o8, "Scanning an octal escape sequence " + "`\\" + o5 + "` throws SyntaxError.", "Octal numeric literals and escape characters not allowed in strict mode");
}catch(e){}
            }
            try {
for (var o9 = 1; o9 <= 255; o9++) {
                try {
o4(o9.toString(8));
}catch(e){}
            }
}catch(e){}
        }
    },
];

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
