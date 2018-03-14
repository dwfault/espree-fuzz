function o0(o1) {
    var o2 = o1;
    var o3 = 0;
    for (var o4 in o2) {
        o3 += o2[o4];
        o2 = {valueOf() {
        if (o3)
            throw new Error("by by");
        return 13.5;
    }, 1:2, o5:3, o6:4};
    }
    return o3;
}

noInline(o0);

for (var o8 = 0; o8 < 10000; ++o8) {
    var o3 = o0({0:0, 1:1, o5:2, o6:3});
    if (o3 != 9)
        throw "Error: bad result: " + o3;
}
