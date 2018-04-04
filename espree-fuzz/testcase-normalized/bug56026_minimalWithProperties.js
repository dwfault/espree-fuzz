//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Tests that bug 56025 is fixed in the minimal repro case with "with" object property usage.
// http://bugcheck/bugs/WindowsBlueBugs/56026

try {
    (function o0() {
        var o1;
        (function o2() {
            (function o3() { o1; })();
            var o4 = { o5: 1 }
            with (o4) {
                o2();
                o5++;
            }
        })();
    })();
}
catch (o6) {
    if (o6.o7 == "Out of stack space") {
        o8.o9("PASSED");
    }
}
