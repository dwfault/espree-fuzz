//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1) {
    o2.o3(o1);
}

o0("-------slice sparse array-------------");
function o4(o5) {
    o0("length: " + o5.length);
    for (var o7 in o5) {
        o0("  " + o7 + ": " + o5[o7]);
    }
}

o0("-- arr1");
var o5 = [];
o5[2147483647] = 100;
var o8 = o5.slice(0, 2147483648);
o4(o8);

o0("-- arr2");
var o5 = [];
var o10 = 4294967290;
for (var o11 = 0; o11 < 10; o11++) {
    o5[o10 + o11] = 100 + o11;
}
o0("-src");
o4(o5);
o0("-sliced");
var o8 = o5.slice(2147483648, 4294967299);
o4(o8);


o0("-------test prototype lookup-------------");
function o12(o13, o14) {

    for (var o11 = 0; o11 < 10; o11++) {
        Array.prototype[o11] = 100 + o11;
    }
    delete Array.prototype[3];

    var o17 = [200, 201, 202, 203, 204];
    delete o17[1];
    o17[7] = 207;

    var o18 = "" + o17;
    var o19 = o17.slice(o13, o14);

    for (var o11 = 0; o11 < 10; o11++) {
        delete Array.prototype[o11];
    }

    o0(o18 + " ==> [" + o13 + ".." + o14 + "]: " + o19);
}

o12(0, 0);
o12(0, 5);
o12(0, 7);
o12(0, 8);
o12(0, 100);
o12(2, 0);
o12(2, 5);
o12(2, 7);
o12(2, 8);
o12(2, 100);
o12(7, 0);
o12(7, 5);
o12(7, 7);
o12(7, 8);
o12(7, 100);
o12(8, 0);
o12(8, 5);
o12(8, 7);
o12(8, 8);
o12(8, 100);
