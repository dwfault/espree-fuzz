//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1); }

Object.prototype.join = Array.prototype.join;

var o8 = 10;
var o9 = new Array();
var o10 = new Object();

for (var o11=0; o11<10; o11++) {
    o10[o11] = o9[o11] = o11 * o11 + 1;
}

write(o10.join());

write(o10.join(undefined));

write(o10.join("hello"));

write(o9.join(o9));
write(o10.join(o9));

write(o9.join(o10));
write(o10.join(o10));

write(Array.prototype.join.call(o9, o9));
write(Array.prototype.join.call(o10, o9));

write(Array.prototype.join.call(o9, o10));
write(Array.prototype.join.call(o10, o10));

//implicit calls
var o9 ;
var o14 = [10];
Object.defineProperty(Array.prototype, "4", {configurable : true, get: function(){o9 = true; return 30;}});
o9 = false;
o14.length = 6;
var o19 = o14.join();
o2.o3(o9);

Object.prototype['length'] = 2;
o2.o3(([""].join).call(5));
Object.prototype['0'] = "test";
o2.o3(([""].join).call(5.5));
