function o0(o1) {
    return -1000;
}

noInline(o0);

for (var o4 = 0; o3 < 10000; ++o3) {
    var o4 = o0(0);
    if (1 / o4 != "-Infinity")
        throw "foo" + o4;
}

