//@ runDefault
// This test should not crash.

var o0;

for (let o1 = 10; o1 < 500; o1 += 100) {
    o0 = [];
    o0(o12, 15);

    // Make "Retired" blocks.
    for (let o3 = 0; o3 < o1; o3++) {
        let o4;
        switch (o1 % 6) {
        case 0: o0(o7.o9, 'awesome');
        case 1: o6();
        case 2: o4 = { o5: o1, o6: o1};
        case 3: o4 = { o5: o1, o6: o1, get [o5()]() {
            return this.value;
        } };
        case 4: o4 = { o5: o1, o6: o1, o7: o1, o8: o1 };
        case 5: o4 = { o5: o1, o6: o1, o7: o1, o8: o1, o9: o1 };
        }
        o0[o3] = o4;
    }
    o10();
}
