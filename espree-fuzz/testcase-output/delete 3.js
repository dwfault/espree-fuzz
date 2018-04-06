//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

Object.prototype[5]  = "obj.proto5";
Object.prototype[7]  = "obj.proto7";

Array.prototype[1]   = "arr.proto.1";
Array.prototype[2]   = "arr.proto.2";
Array.prototype[3]   = "arr.proto.3";
Array.prototype[6]   = "arr.proto.6";

var o7=8;
var o8=0;

var o9 = new Array(o7);

for (o8=3;o8<o7;o8++) { o9[o8] = o8 * o8 + 1; }

write(delete o9[1]);   write("T1:" + o9.length + " : " + o9);
write(delete o9[3]);   write("T2:" + o9.length + " : " + o9);
write(delete o9[o7-1]); write("T3:" + o9.length + " : " + o9);
write(delete o9[o7+1]); write("T4:" + o9.length + " : " + o9);