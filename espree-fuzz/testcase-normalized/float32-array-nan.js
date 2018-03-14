function o0(o1) {
    return o1[0];
}

noInline(o0);

function test(o4, o5) {
    var o6 = new Int32Array(1);
    o6[0] = o4;
    var o8 = new Float32Array(o6.o10);
    var o11 = o0(o8);
    var o12 = o11 + 1;
    if (("" + o12) != ("" + o5))
        throw "Error: bad result for " + o4 + ": " + o12 + ", but expected: " + o5 + "; loaded " + o11 + " from the array";
}

for (var o13 = 0; o13 < 100000; ++o13)
    test(0, 1);

test(0xFFFF0000, 0/0);
