function o0(o1) {
    return -o1;
}

noInline(o0);

for (var o3 = 0; o3 < 10000; ++o3) {
    var o4 = o0(0);
    if (1 / o4 != "-Infinity")
        throw "Error: bad result: " + o4;
}

