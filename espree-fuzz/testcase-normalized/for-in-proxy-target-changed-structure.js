var o0 = o1.o0;

var o2;

function o3() {
    delete o2.o4;
    delete o2.o5;
    delete o2.o6;
    delete o2.o7;
    for (var o8 = 0; o8 < 10; ++o8)
        o2["i" + o8] = 42;
    o2.o4 = 11;
    o2.o5 = 12;
    o2.o6 = 13;
    o2.o7 = 14;
}

function o9(o10) {
    var o11 = o10;
    var o12 = 0;
    for (var o13 in o11) {
        o12 += o11[o13];
        o3();
    }
    return o12;
}

noInline(o9);

for (var o8 = 0; o8 < 10000; ++o8) {
    var o12 = o9(o0(o2 = {o4:1, o5:2, o6:3, o7:4}));
    if (o12 != 1 + 12 + 13 + 14)
        throw "Error: bad result: " + o12;
}
