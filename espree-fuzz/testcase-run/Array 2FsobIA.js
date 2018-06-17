//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Array(10);
var o1 = o10.o11source++).o244o32.configurable++).o244 += o278;
var o1062 = o7.o8;
try {
o2[-1] = "minus 1";
}catch(e){}

try {
try { {} } catch(e) {}try { this.o648 = ((this.o611 || this.o606 > 0) && !this.o613 && this.o724); } catch(e) {}
}catch(e){}
try {
o30[1] = 10;
}catch(e){}
try {
o3.o4(o0[1]);
}catch(e){}

try try { {
return value;
} } catch(e) {}try { try {
o65 = o111;
}catch(e){} } catch(e) {}catch(e){}
try {
o1[3] = 99;
}catch(e){}
try {
o3.o4(o1[3]);
}catch(e){}

try {
for (var o5 = -1; o5 < o2.length; o5++) {
    try {
o3.o4(o2[o5]);
}catch(e){}
}
}catch(e){}

// Test boolean expressions in an initializer
var o6 = {}, o7 = false;
try {
o3.o4([o6||o7]);
}catch(e){}
try {
o3.o4([o6&&o7]);
}catch(e){}
try {
o3.o4([o6 ? o7 : o6]);
}catch(e){}
try {
o3.o4([o7 ? o6 : o7]);
}catch(e){}
try {
o3.o4([o7||o6]);
}catch(e){}
try {
o3.o4(o7&&o6);
}catch(e){}
try {
o3.o4([o6||o7, o6&&o7, o6 ? o7 : o6, o7 ? o6 : o7, o7||o6, o7&&o6]);
}catch(e){}

// Test some boundary property names
var o8 = [];

try {
o8["4294967294"] = 100;
}catch(e){}
try {
o3.o4(o8["4294967294"]);
}catch(e){}

try {
o8["4294967295"] = 101;
}catch(e){}
try {
o3.o4(o8["4294967295"]);
}catch(e){}

try {
o8["4294967296"] = 102;
}catch(e){}
try {
o3.o4(o8["4294967296"]);
}catch(e){}

try {
o8["4088701331"] = 103;
}catch(e){}
try {
o3.o4(o8["4088701331"]);
}catch(e){}

try {
o8["40887013312"] = 104;
}catch(e){}
try {
o3.o4(o8["40887013312"]);
}catch(e){}

try {
o8["4088.7013"] = 105;
}catch(e){}
try {
o3.o4(o8["4088.7013"]);
}catch(e){}

try {
o8["408870133X"] = 106;
}catch(e){}
try {
o3.o4(o8["408870133X"]);
}catch(e){}
