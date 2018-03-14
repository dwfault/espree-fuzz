function o0(o1, o2) {
    var o3 = o2.o4;
    if (o3 != 92160)
        o1.o5 = 42;
    return o1.o4.o4 + o3;
}

noInline(o0);

for (var o3 = 0; o3 < 100000; ++o3) {
    var o7 = o0({o4:{o4:42}}, {o4:92160});
    if (o7 != 92202)
        throw "Error: bad result: " + o7;
}

var o7 = o0({o4:{o5:20, o4:21}}, {o4:92160});
if (o7 != 92181)
    throw "Error: bad result: " + o7;
