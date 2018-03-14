function o0(o1, o2) {
    if (o3.dfgTrue())
        o1 = o2 = 5.4;
    var o5 = o1 + o2;
    if (o6())
        OSRExit();
    return o5 + 0.5;
}

noInline(o0);

for (var o9 = 0; o9 < 100000; ++o9) {
    var o10 = o0(1.4, 1.3);
    if (o10 != 1.4 + 1.3 + 0.5 && o10 != 5.4 + 5.4 + 0.5)
        throw "Error: bad result: " + o10;
}

