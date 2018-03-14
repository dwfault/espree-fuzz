var o0 = o1.o0;

function o2(o3) {
    var o4 = o3;
    var o5 = 0;
    for (var o6 in o4) {
        o5 += o4[o6];
    }
    return o5;
}

noInline(o2);

for (var o8 = 0; o8 < 10000; ++o8) {
    var o5 = o2(o0({2: true, o10:2, o11:3, o12:4}));
    if (o5 != 1 + 2 + 3 + 4)
        throw "Error: bad result: " + o5;
}
