let o0 = [];
let o1 = {length: 2**55, __proto__: []};
let o4 = (o5) => o5;

noInline(Array.prototype.map);

// This test should not crash.
for (let o10 = 0; o10 < 100000; ++o10) {
    try {
        if (o10 > 0 && (o10 % 1000) === 0)
            o1.map(o4)
        o0.map(o4);
    } catch(o11) {
    }
}
