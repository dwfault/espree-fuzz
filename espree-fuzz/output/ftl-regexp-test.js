function o0(o1) {
    return /foo/.test(o1);
}

noInline(o0);

for (var o4 = 0; o4 < 100000; ++o4) {
    if (!o0("foo"))
        throw "Error: bad result for foo";
    if (o0("bar"))
        throw "Error: bad result for bar";
}
