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
    for (var o6 in o5) {
        o0("  " + o6 + ": " + o5[o6]);
    }
}

o0("-- arr1");
var o5 = [];
o5[2147483647] = 100;
var o7 = o5.slice(0, 2147483648);
o4(o7);

o0("-- arr2");
var o5 = [];
var o8 = 4294967290;
for (var o9 = 0; o9 < 10; o9++) {
    o5[o8 + o9] = 100 + o9;
}
o0("-src");
o4(o5);
o0("-sliced");
var o7 = o5.slice(2147483648, 4294967299);
o4(o7);


o0("-------test prototype lookup-------------");
function o10(o11, o12) {

    for (var o9 = 0; o9 < 10; o9++) {
        Array.prototype[o9] = 100 + o9;
    }
    delete Array.prototype[3];

    var o13 = [200, 201, 202, 203, 204];
    delete o13[1];
    o13[7] = 207;

    var o14 = "" + o13;
    var o15 = o13.slice(o11, o12);

    for (var o9 = 0; o9 < 10; o9++) {
        delete Array.prototype[o9];
    }

    o0(o14 + " ==> [" + o11 + ".." + o12 + "]: " + o15);
}

o10(0, 0);
o10(0, 5);
o10(0, 7);
o10(0, 8);
o10(0, 100);
o10(2, 0);
o10(2, 5);
o10(2, 7);
o10(2, 8);
o10(2, 100);
o10(7, 0);
o10(7, 5);
o10(7, 7);
o10(7, 8);
o10(7, 100);
o10(8, 0);
o10(8, 5);
o10(8, 7);
o10(8, 8);
o10(8, 100);
