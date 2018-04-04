//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Tests that bug 56025 is fixed.
// http://bugcheck/bugs/WindowsBlueBugs/56026

try {
    (function () {
        with ({}) with ({}) with ({}) {
            for (eval("a = 0");
              o1 < 1;
              function o2() {
                  with ({}) with ({}) with ({}) (function o3() { new Function })();
                  with ({}) o2();
              } ()
            ) {
            }
        }
    })();
}
catch (o5) {
    if (o5.o6 == "Out of stack space") {
        o7.o8("PASSED");
    }
}
