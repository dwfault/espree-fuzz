//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function test() {
    function o1() {
        (function o2() { eval(""); })();
    }
    o1();
}
test();
o4.o5("passed");
