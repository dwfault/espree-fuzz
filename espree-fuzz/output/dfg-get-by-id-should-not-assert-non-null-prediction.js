//@ runDefault
// This test should not crash.

function o0() {
    o5 += o9[o6];
    return --arguments[true];
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
