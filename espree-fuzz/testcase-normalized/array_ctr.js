//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1); }

var o4;

o4 = new Array();
write(o4.length);

o4 = new Array(10);
write(o4.length);

o4 = new Array(new Number(10.2));
write(o4.length);
write(o4[0]);

o4 = new Array(new Array());
write(o4.length);

var o8 = new Object();
o8.valueOf = function() {return 12}
var o11 = [1, 2, 3];
o11.length = "33";
write(o11.length);
o11.length = o8;
write(o11.length);
o11.length = null;
write(o11.length);
try {
o11.length = undefined;
write(o11.length);
}
catch (o13) {
    write(o13.o14);
}
try {
o11.length = "foo";
}
catch (o13) {
    write(o13.o14);
}
o2.o3(o11.length);
try {
    o11.length = Infinity;
    write(o11.length);
}
catch (o13) {
    write(o13.o14);
}