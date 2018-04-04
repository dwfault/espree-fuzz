//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Smoke test to verify that generator functions successfully execute when
// they are deferred parsed and deferred deserialized.
var o0 = true;

function o1(o2, o3) {
    if (o2.value !== o3) {
        o5.o6("FAILED: Expected '" + o3 + "' but got '" + o2.value + "'");
        o0 = false;
    }
}

function test() {
    function* o8() {
        yield 1;
        yield 2;
        yield 3;
        return null;
    }

    var o9 = o8();

    o1(o9.next(), 1);
    o1(o9.next(), 2);
    o1(o9.next(), 3);
    o1(o9.next(), null);
}

test();

if (o0) {
    o5.o6("PASSED");
}
