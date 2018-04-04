//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1); }
Object.prototype.concat = Array.prototype.concat;

var o8 = 10;
var o9 = new Array();
var o10 = new Object();

for (var o11=0; o11<10; o11++) {
    o10[o11] = o9[o11] = o11 * o11 + 1;
}

write(o9.concat());
write(o10.concat());

var o12 = o9.concat(undefined) + "";
write(o12);
write(o9.concat(undefined));
write(o10.concat(undefined));

write(o9.concat(null));
write(o10.concat(null));

write(o9.concat("hello"));
write(o10.concat("hello"));

write(o9.concat(o9));
write(o10.concat(o9));

write(o9.concat(o10));
write(o10.concat(o10));

var o14 = Array.prototype.concat.call(10);
write(o14[0] == 10); // true
write(o14[0] === 10); // false

//implicit calls
var o9 ;
var o16 = [10];
Object.defineProperty(Array.prototype, "4", {configurable : true, get: function(){o9 = true; return 30;}});
o9 = false;
o16.length = 6;
var o21 = o16.concat([30]);
o2.o3(o9);
