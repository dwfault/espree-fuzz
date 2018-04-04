//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

Array.prototype.o6 = Object.prototype.toString; 
Boolean.prototype.o6 = Object.prototype.toString;
Date.prototype.o6 = Object.prototype.toString;
Function.prototype.o6 = Object.prototype.toString; 
Number.prototype.o6 = Object.prototype.toString; 
RegExp.prototype.o6 = Object.prototype.toString; 
String.prototype.o6 = Object.prototype.toString; 

var o15 = new Array();
var o16 = new Boolean(false);
var o17 = new Date();
var o18 = new Function("return undefined;");
var o19 = new Number(+0);
var o20 = new RegExp();
var o21 = new String("hello");

write("a1.getClass()                : " + o15.o6());
write("Array.prototype.getClass()   : " + Array.prototype.o6());

write("b1.getClass()                : " + o16.o6());
write("Boolean.prototype.getClass() : " + Boolean.prototype.o6());

write("d1.getClass()                : " + o17.o6());
write("Date.prototype.getClass()    : " + Date.prototype.o6());

write("f1.getClass()                : " + o18.o6());
write("Function.prototype.getClass(): " + Function.prototype.o6());

write("n1.getClass()                : " + o19.o6());
write("Number.prototype.getClass()  : " + Number.prototype.o6());

write("r1.getClass()                : " + o20.o6());
write("RegExp.prototype.getClass()  : " + RegExp.prototype.o6());

write("s1.getClass()                : " + o21.o6());
write("String.prototype.getClass()  : " + String.prototype.o6());