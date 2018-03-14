function o0(o1, o2) {
    var o3 = o2.o3;
    if (o1)
        return o3.o4;
    return o3.o5;
}

noInline(o0);

var o2 = {
    o10: 40
}{o4: 41, o5: 42}}{o4:1, o2:2, o9:3}};

for (var o7 = 0; o7 < 100000; ++o7) {
    var o8 = o0(false, o2);
    if (o8 != 42)
        throw "Error: bad result: " + o8;
}

var o8 = o0(true, o2);
if (o8 != 41)
    throw "Error: bad result at end: " + o8;

