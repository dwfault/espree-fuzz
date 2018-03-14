function o0(o1, o2) {
    if (o1 !== o2)
        throw new Error(`bad value: ${String(o1)}`);
}

var global = this;
for (var o6 = 0; o6 < 100; ++o6) {
    o4(Math.o13);
}

for (var o6 = 0; o6 < 100; ++o6) {
    var o8 = {};
    (function test() {
        // |this| should reference to the function's one.
        o0(eval("x"), o8);
    }).call(o8);
}
