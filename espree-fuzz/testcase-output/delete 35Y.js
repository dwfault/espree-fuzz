//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o0) { o1.o2(o5[0] + ""); }

Object.prototype[5]  = "obj.proto5";
Object.prototype[7]  = "obj.proto7";

Array.prototype[1]   = "arr.proto.1";
Array.prototype[2]   = "arr.proto.2";
Array.prototype[3]   = "arr.proto.3";
Array.prototype[6]   = "arr.proto.6";

var o3=8;
var o4=0;

var o5 = new Array(o3);

for (o4=3;o4<o3;o4++) { o5[o4] = o4 * o4 + 1; }

write(delete o5[1]);   write("T1:" + o5.length + " : " + o5);
write(delete o5[3]);   write("T2:" + o5.length + " : " + o5);
write(delete o5[o3-1]); write("T3:" + o5.length + " : " + o5);
write(delete o5[o3+1]); write("T4:" + o5.length + " : " + o5);