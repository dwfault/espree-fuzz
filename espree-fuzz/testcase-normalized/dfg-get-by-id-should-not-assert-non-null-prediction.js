//@ runDefault
// This test should not crash.

function o0() {
    "use strict";
    return --arguments["callee"];
};

function test() {
    for (var o3 = 0; o3 < 10000; o3++) {
        try {
            o0();
        } catch(o4) {
        }
    }
}

test();
