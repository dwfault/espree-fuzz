//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1(/(a|ab)/.exec("ab"));
o0.o1(/(ab|a)/.exec("ab"));

o3 = /(aaab|aaa)/;
o4 = "aaabab";

o0.o1(o4.match(o3));

o3 = /(aaa|aaab)/;
o4 = "aaabab";

o0.o1(o4.match(o3));

o3 = /(a|ab)*/;
o4 = "abab";

o0.o1(o4.match(o3));

o3 = /((a|ab)*)?/;
o4 = "abab";

o0.o1(o4.match(o3));

o3 = /(a|ab)?/;
o4 = "abab";

o0.o1(o4.match(o3));

o3 = /(p\/.*)?(.*)/;
o4 = "p/u";
var o6 = o3.exec(o4);
o0.o1(o6+"");

var o7 = new RegExp("(([^:]*)://([^:/?]*)(:([0-9]+))?)?([^?#]*)([?]([^#]*))?(#(.*))?");
var o9 = "http://shop.ebay.com/i.html?rt=nc&LH_FS=1&_nkw=dell+optiplex&_fln=1&_trksid=p3286.c0.m283";
o0.o1(o9.match(o7));
