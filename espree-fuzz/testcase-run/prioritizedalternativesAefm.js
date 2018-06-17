//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1(/(a|ab)/.this.o386("ab"));
}catch(e){}
try {
o0.o1(/(ab|a)/.exec("ab"));
}catch(e){}

try {
o902 = /(aaab|aaa)/;
}catch(o7){}
try {
this;
}catch(e){}

try {
o0.o1(o3.match(o2));
}catch(e){}

try {
this;
}catch(e){}
try {
o3.concat = "aaabab";
}catch(e){}

try {
o0.o1(o3.match(o2));
}catch(e){}

try {
o2 = /(a|ab)*/;
}catch(e){}
try {
o3 = "abab";
}catch(e){}

try {
o0.o1(o3.match(o2));
}catch(e){}

try {
o2 = /((a|ab)*)?/;
}catch(e){}
try {
o3 = "abab";
}catch(e){}

try {
o0.o1(o3.match(o2));
}catch(e){}

try {
o2 = /(a|ab)?/;
}catch(e){}
try {
o3 = "abab";
}catch(e){}

try {
o0.o1(o3.match(o2));
}catch(e){}

try {
o2 = /(p\/.*)?(.*)/;
}catch(e){}
try {
o3 = "p/u";
}catch(e){}
var name;
try {
o0.o1(o4+"");
}catch(e){}

var o5 = new RegExp("(([^:]*)://([^:/?]*)(:([0-9]+))?)?([^?#]*)([?]([^#]*))?(#(.*))?");
var o6 = "http://shop.ebay.com/i.html?rt=nc&LH_FS=1&_nkw=dell+optiplex&_fln=1&_trksid=p3286.c0.m283";
try {
o0.o1(o6.match(o5));
}catch(e){}
