//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Array(10);
var o2 = new Array();
var o3 = new Array("muck", 3.2, 0, 18);
o3[-1] = "minus 1";

o4.o5("Store a single item in a");
o0[1] = 10;
o4.o5(o0[1]);

o4.o5("Store a single item in b");
o2[3] = 99;
o4.o5(o2[3]);

for (var o6 = -1; o6 < o3.length; o6++) {
    o4.o5(o3[o6]);
}

// Test boolean expressions in an initializer
var o8 = {}, o9 = false;
o4.o5([o8||o9]);
o4.o5([o8&&o9]);
o4.o5([o8 ? o9 : o8]);
o4.o5([o9 ? o8 : o9]);
o4.o5([o9||o8]);
o4.o5(o9&&o8);
o4.o5([o8||o9, o8&&o9, o8 ? o9 : o8, o9 ? o8 : o9, o9||o8, o9&&o8]);

// Test some boundary property names
var o10 = [];

o10["4294967294"] = 100;
o4.o5(o10["4294967294"]);

o10["4294967295"] = 101;
o4.o5(o10["4294967295"]);

o10["4294967296"] = 102;
o4.o5(o10["4294967296"]);

o10["4088701331"] = 103;
o4.o5(o10["4088701331"]);

o10["40887013312"] = 104;
o4.o5(o10["40887013312"]);

o10["4088.7013"] = 105;
o4.o5(o10["4088.7013"]);

o10["408870133X"] = 106;
o4.o5(o10["408870133X"]);
