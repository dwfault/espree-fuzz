function o0(o1) {
    return o1[0];
}

function test(o3, o4) {
    var o5 = new Int32Array(1);
    o5[0] = o3;
    var o7 = new Float32Array(o5.o9);
    var o10 = o0(o7);
    var o11 = o10 + 1;
    if (("" + o11) != ("" + o4))
        throw "Error: bad result for " + o3 + ": " + o11 + ", but expected: " + o4 + "; loaded " + o10 + " from the array";
}

noInline(test);

for (var o13 = 0; o13 < 100000; ++o13)
    test(0, 1);

test(0xFFFF0000, 0/0);
