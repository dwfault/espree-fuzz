function o0(o1, o2) {
    var o3 = o2.o4;
    if (o3 != 92160)
        o1.o5 = 42;
    return o5.o11.o4 + o3;
}

noInline(o4);

for (var o3 = 0; o3 < 100000; ++o3) {
    var o7 = o0({valueOf: function() { return 5; }}, {o4:92160});
    if (o7 != 92202)
        throw "Error: bad result: " + o7;
}

var o7 = o0({o2:1, o4:2});
if (o7 != 92181)
    throw "Error: bad result: " + o7;
