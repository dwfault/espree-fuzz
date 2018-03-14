function o0(o1, o2) {
    if (o3.dfgTrue())
        o1 = o2 = 2000000000;
    var o5 = o1 + o2;
    if (o6())
        OSRExit();
    return o5 + 42;
}

noInline(o0);

for (var o9 = 0; o9 < 100000; ++o9) {
    var o10 = o0(2000000001, 2000000001);
    if (o10 != 2000000001 + 2000000001 + 42 && o10 != 2000000000 + 2000000000 + 42)
        throw "Error: bad result: " + o10;
}

