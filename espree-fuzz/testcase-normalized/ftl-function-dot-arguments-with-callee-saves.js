function o0() {
    return o1.arguments;
}

noInline(o0);

function o1() {
    return o0();
}

function o4(o5, o6) {
    var o7 = o5.o8;
    return [o1(1, 2, 3), o7];
}

noInline(o4);

for (var o6 = 0; o6 < 10000; ++o6) {
    var o9 = o4({o8:42});
    if (o9.length != 2 || o9[0].length != 3 || o9[0][0] != 1 || o9[0][1] != 2 || o9[0][2] != 3 || o9[1] != 42)
        throw "Error: bad result: " + o9;
}

