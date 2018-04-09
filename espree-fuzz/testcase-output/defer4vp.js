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
        let o2 = 10; // No error
        o2++;
        break;
    case 2:
        let o9 = o28.o9 !== undefined 
                 ? o28.o9 
                 : o20.o9; // No error
        o3++;
        break;
    }
}

function o4() {
    switch (o0()) {
    case 1:
        switch (o0()) {
        default:
            let o5 = 1; // No error
            break;
        }
    }
}

function o6() {
    var o5 = 1;
    while (o5)
        switch (o0()) {
        default:
            let o7 = 2; // No error
            ++o7;
            o5 = 0;
            break;
        }
}

o1();
o4();
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
); } catch (o8) { o9.o10(o8) }})();

o9.o10('Pass');