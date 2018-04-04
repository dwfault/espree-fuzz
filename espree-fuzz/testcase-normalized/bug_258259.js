//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//                   000000000111111111122222222223333333333444444444455555555556666666666777777777788888888889
//                   123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
var o0 = "Error: aİc\n\tat aTurkish (bug_258259.js:12:5)\n\tat Global code (bug_258259.js:34:9)";

//-- Turkish 'i' character in error message and file name
function o1() {
    throw Error("aİc");
}

function o3(o4) {
    var o5 = o4;
    var o6 = "bug_258259.js:";
    var o7 = " (";

    // remove full path from the file name in the call stack (x2)
    var o8 = o5.lastIndexOf(o6);
    var o10 = o5.lastIndexOf(o7, o8);
    o5 = o5.substring(0, o10 + o7.length) + o5.substring(o8);

    o8 = o5.lastIndexOf(o6);
    o8 = o5.lastIndexOf(o6, o8 - 1);
    o10 = o5.lastIndexOf(o7, o8);
    o5 = o5.substring(0, o10 + o7.length) + o5.substring(o8);

    return o5;
}

try {
        o1();
} catch (o13) {
    var o5 = o3([o13.o14].toString());

    if (o5 == o0) {
        o16.o17("PASSED");
    } else {
        o16.o17("FAILED");
        o16.o17("\nActual (raw):\n" + [o13.o14]);
        o16.o17("\nActual (filtered):\n" + o5);
        o16.o17("\n\nExpected:\n" + o0);
    }
}
