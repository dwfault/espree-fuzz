//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1(/(a|ab)/.exec("ab"));
o0.o1(/(ab|a)/.exec("ab"));

o2 = /(aaab|aaa)/;
o3 = "aaabab";

o0.o1(o3.match(o2));

o2 = /(aaa|aaab)/;
o3 = "aaabab";

o0.o1(o3.match(o2));

o2 = /(a|ab)*/;
o3 = "abab";

o0.o1(o3.match(o2));

o2 = /((a|ab)*)?/;
o3 = "abab";

o0.o1(o3.match(o2));

o2 = /(a|ab)?/;
o3 = "abab";

o0.o1(o3.match(o2));

o2 = /(p\/.*)?(.*)/;
o3 = "p/u";
var o4 = o2.exec(o3);
o0.o1(o4+"");

var o5 = new RegExp("(([^:]*)://([^:/?]*)(:([0-9]+))?)?([^?#]*)([?]([^#]*))?(#(.*))?");
var o6 = "http://shop.ebay.com/i.html?rt=nc&LH_FS=1&_nkw=dell+optiplex&_fln=1&_trksid=p3286.c0.m283";
o0.o1(o6.match(o5));
