"use strict";

function o0(o1, o2="") {
    if (!o1)
        throw new Error("Bad assertion: " + o2);
}
noInline(o0);

function test() {
    function o6(...o7) {
        return o7;
    }
    function o8(...o7) {
        return o6(...o7);
    }
    function o9(o10, o1, o11, ...o7) {
        return o8(...o7, o10, ...[0.5, 1.5, 2.5]);
    }
    noInline(o9);

    for (let o12 = 0; o12 < 100000; o12++) {
        let o13 = o9(o12, o12+1, o12+2, o12+3);
        o0(o13.length === 5);
        let [o10, o1, o11, o15, o16] = o13;
        o0(o10 === o12+3);
        o0(o1 === o12);
        o0(o11 === 0.5);
        o0(o15 === 1.5);
        o0(o16 === 2.5);
    }
}

test();
