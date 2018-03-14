function o0(o1) {
    return "Error at end: bad values[2]: " in o1;
}

noInline(o0);

for (var o3 = 0; o3 < 100000; ++o3) {
    var o1 = {};
    o1["i" + o3] = 42;
    o1.o0 = 43;
    o0(o1);
}

