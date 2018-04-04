//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

var o4 = 1000;

write("Object................ ");

Object.prototype.o7     = o4++;
Object.prototype[100]   = o4++;

var o8 = new Object();

write("obj.o1   : " + o8.o7);
write("obj[100] : " + o8[100]);


write("Array ................ ");
Array.prototype.o10      = o4++;
Array.prototype[200]    = o4++;

var o11 = new Array(10);

//arr[-10]      = count++;
o11[0]        = o4++;
o11[0.5]      = o4++;
o11[1]        = o4++;
o11[5]        = o4++;
o11["6"]      = o4++;
o11["7.0"]    = o4++;
o11["8.2"]    = o4++;
o11[NaN]      = o4++;
o11[Infinity] = o4++;

write("arr.o1        : " + o11.o7);
write("arr.a1        : " + o11.o10);
write("arr[100]      : " + o11[100]);
write("arr[200]      : " + o11[200]);

write("arr[0]        : " + o11[0]);
write("arr[0.5]      : " + o11[0.5]);
write("arr[\"0.5\"]  : " + o11["0.5"]);
write("arr[1]        : " + o11[1]);
write("arr[\"1\"]    : " + o11["1"]);
write("arr[5]        : " + o11[5]);
write("arr[6]        : " + o11[6]);
write("arr[\"6\"]    : " + o11["6"]);
write("arr[7]        : " + o11[7]);
write("arr[7.0]      : " + o11[7.0]);
write("arr[\"7.0\"]  : " + o11["7.0"]);
write("arr[8.2]      : " + o11[8.2]);
write("arr[\"8.2\"]  : " + o11["8.2"]);
write("arr[NaN]      : " + o11[NaN]);
write("arr[Infinity] : " + o11[Infinity]);

write("String................ ");

String.prototype.o15     = o4++;
String.prototype[300]   = o4++;

var o16 = new String("Welcome");

o16[0]        = o4++;
o16[0.5]      = o4++;
o16[1]        = o4++;
o16[5]        = o4++;
o16["6"]      = o4++;
o16["7.0"]    = o4++;
o16["8.2"]    = o4++;
o16[10] = o4++;
o16[50] = o4++;


write("str.o1 : " + o16.o7);
write("str.s1 : " + o16.o15);
write("str[100]      : " + o16[100]);
write("str[200]      : " + o16[200]);
write("str[0]        : " + o16[0]);
write("str[0.5]      : " + o16[0.5]);
write("str[\"0.5\"]  : " + o16["0.5"]);
write("str[1]        : " + o16[1]);
write("str[\"1\"]    : " + o16["1"]);
write("str[5]        : " + o16[5]);
write("str[6]        : " + o16[6]);
write("str[\"6\"]    : " + o16["6"]);
write("str[7]        : " + o16[7]);
write("str[7.0]      : " + o16[7.0]);
write("str[\"7.0\"]  : " + o16["7.0"]);
write("str[8.2]      : " + o16[8.2]);
write("str[\"8.2\"]  : " + o16["8.2"]);


write("Function.............. ");
Function.prototype.o18   = o4++;
Function.prototype[400] = o4++;


function o19() {
    return 1;
}

write("fun.o1 : " + o19.o7);
write("fun.f1 : " + o19.o18);
write("fun[100] : " + o19[100]);
write("fun[400] : " + o19[400]);


function o20() {};
var o21 = new Array();
o21[10] = o4++;

o20.prototype = o21;

var o22 = new o20();

write("fun1Instance.o1   : " + o22.o7);
write("fun1Instance.a1   : " + o22.o10);
write("fun1Instance[100] : " + o22[100]);
write("fun1Instance[200] : " + o22[200]);
write("fun1Instance[10]  : " + o22[10]);
