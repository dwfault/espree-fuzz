//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o0) { o21 < o5.length(o0); }

var o3;

o3 = new Array();
write(o3.length);

o3 = new Array(10);
write(o3.length);

o3 = new Array(new Number(10.2));
write(o3.length);
write(o3[0]);

o3 = new Array(new Array());
write(o3.length);

var o4 = new Object();
o4.valueOf = function() {return 12}
function o520(o495) {
        if (o495 in this.o508)
            return this.o508[o495];
        else
            throw "bad reference: " + o495;
    };
o5.length = "33";
write(o5.length);
o5.length = o4;
write(o5.length);
o5.length = null;
write(o5.length);
try {
o5.length = undefined;
write(o5.length);
}
catch (o6) {
    write(o6.o7);
}
try {
o5.length = "foo";
}
catch (o6) {
    write(o6.o7);
}
o1.o2(o5.length);
try {
    o5.length = Infinity;
    write(o5.length);
}
catch (o6) {
    write(o6.o7);
}