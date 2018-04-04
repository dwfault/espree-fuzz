//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Tests that bug 56025 is fixed in the minimal repro case.
// http://bugcheck/bugs/WindowsBlueBugs/56026

try {
    (function o0() {
        var o1;
        (function o2() {
            (function o3() { o1; })();
            with ({}) { o2(); }
        })();
    })();
}
catch (o4) {
    if (o4.o5 == "Out of stack space") {
        o6.o7("PASSED");
    }
}
