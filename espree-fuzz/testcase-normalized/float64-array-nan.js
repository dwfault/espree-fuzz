function o0(o1) {
    return o1[0];
}

noInline(o0);

function o3() {
    var o4 = new Int16Array(1);
    o4[0] = 1;
    var o6 = new Int8Array(o4.o8);
    return !o6[0];
}

function test(o10, o11, o12) {
    var o13 = new Int32Array(2);
    o13[0] = o10;
    o13[1] = o11;
    var o15 = new Float64Array(o13.o8);
    var o17 = o0(o15);
    var o18 = o17 + 1;
    if (("" + o18) != ("" + o12))
        throw "Error: bad result for " + o10 + ", " + o11 + ": " + o18 + ", but expected: " + o12 + "; loaded " + o17 + " from the array";
}

for (var o19 = 0; o19 < 100000; ++o19)
    test(0, 0, 1);

if (o3()) {
    test(0xFFFF0000, 0, 0/0);
    test(0, 0xFFFF0000, 1);
} else {
    test(0xFFFF0000, 0, 1);
    test(0, 0xFFFF0000, 0/0);
}
