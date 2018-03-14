function o0(o1) {
    return o2(o1.o3) + 1;
}

noInline(o0);

var o1 = {o3:42};

for (var o5 = 0; o5 < 1000000; ++o5) {
    var o6 = o0(o1);
    if (o6 != 43)
        throw "Error: bad result: " + o6;
}
