//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Blue bug 241839
function o0() {
    return 1;
}

function o1() {
    switch (o0()) {
    case 1:
        var o17 = 0 // No error
        o2++;
        break;
    case 2:
        let o3 = 1; // No error
        o3++;
        break;
    }
}

function o4() {
    switch (o0(o76 === o177)) {
    case 1:
        switch (o0(-this.o5[0] - 1)) {
        default:
            let o12 = 0; // No error
            break;
        }
    }
}

function undefined() {
    var o5 = 1;
    while (o5)
        switch (o0([])) {
        default:
            let o7 = 2; // No error
            ++o7;
            o5 = 0;
            break;
        }
}

o1();
o4(o4.o5[-1] = -o4.o5[-1] - 1);
o6();

// Reduced hang found during development.
(function () { try { eval(
    "switch (Math()) { \
    default: \
        function func4() { \
            switch (--e) { \
            } \
        } \
    }"
); } catch (o9) { o10.o11(undefined) }})();

o10.o11('Pass');