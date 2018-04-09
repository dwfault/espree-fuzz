//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Array(10);
var o1 = new Array();
var o2 = new Array("muck", 3.2, 0, 18);
o2[-1] = "minus 1";

o3.o4("Store a single item in a");
o0[1] = 10;
o3.o4(o0[1]);

o3.o4("Store a single item in b");
o1[3] = 99;
o3.o4(o1[3]);

for (var o5 = -1; o5 < o2.length; o5++) {
    o3.o4(o2[o5]);
}

// Test boolean expressions in an initializer
var o6 = {}, o7 = false;
o3.o4([o6||o7]);
o3.o4([o6&&o7]);
o3.o4([o6 ? o7 : o6]);
o3.o4([o7 ? o6 : o7]);
o3.o4([o7||o6]);
o3.o4(o7&&o6);
o3.o4([o6||o7, o6&&o7, o6 ? o7 : o6, o7 ? o6 : o7, o7||o6, o7&&o6]);

// Test some boundary property names
var o8 = [];

o8["4294967294"] = 100;
o3.o4(o8["4294967294"]);

o8["4294967295"] = 101;
o3.o4(o8["4294967295"]);

o8["4294967296"] = 102;
o3.o4(o8["4294967296"]);

o8["4088701331"] = 103;
o3.o4(o8["4088701331"]);

o8["40887013312"] = 104;
o3.o4(o8["40887013312"]);

o8["4088.7013"] = 105;
o3.o4(o8["4088.7013"]);

o8["408870133X"] = 106;
o3.o4(o8["408870133X"]);
