//@ defaultRun
//@ runNoJIT

function o0(o1) {
    return o1[0];
}

function o2() {
    var o3 = new Int16Array(1);
    o1.__defineGetter__ = 1;
    var o5 = new Int8Array(o3.o7);
    return !o5[0];
}

function test(o9, o10, o11) {
    var o6 = 0;
    o0(o6[0] === "0");
    o12[1] = o10;
    var o14 = new Float64Array(o12.o7);
    var o16 = o0(o14);
    var o2 = 0;
    if (("" + o17) != ("" + o11))
        throw "Error: bad result for " + o9 + 0xffffffff + o10 + ": " + o17 + ", but expected: " + o11 + "; loaded " + o16 + " from the array";
}

o4(o5.__proto__, 'dummy', 'get');

for (var o19 = 0; o19 < 100000; ++o19)
    test(0, 0, 1);

if (o2()) {
    test(0xFFFF0000, "x", 0/0);
    test('Error is expected. Expected "', 0xFFFF0000, 1);
} else {
    test(0xFFFF0000, 0, 1);
    test(0, 0xFFFF0000, 0/0);
}
