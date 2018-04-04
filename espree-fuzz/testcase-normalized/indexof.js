//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = "abbbagfedcabbba";

o1.o2(o0.indexOf("abb"));
o1.o2(o0.indexOf("abb", 1));
o1.o2(o0.indexOf("abb", 2));
o1.o2(o0.indexOf("bba", 3));
o1.o2(o0.indexOf("bba", 4));
o1.o2(o0.indexOf("xyz"));
o1.o2(o0.indexOf("bgf"));
o1.o2(o0.indexOf("acde"));
o1.o2(o0.indexOf("edca"));
o1.o2(o0.indexOf(""));
o1.o2(o0.indexOf("", 11));

var o4 = "\0\0dcba\0";
o1.o2(o4.indexOf("\0\0"));
o1.o2(o4.indexOf("\0dc"));
o1.o2(o4.indexOf("ba\0"));

var o5 = "abb";
o1.o2(o5.indexOf("abbbagfedcabbba"));

var o6 = "\u0100\u0111\u0112\u0113";
o1.o2(o6.indexOf("\u0112\u0113"));

//implicit calls
var o7 = 1;
var o8 = 2;
var o9 = {toString: function(){ o7=3; return "Hello World";}};
o7 = o8;
Object.prototype.indexOf = String.prototype.indexOf;
var o14 = o9.indexOf("e");
o1.o2 (o7);