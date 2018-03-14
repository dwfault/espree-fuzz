function o0() {
    return o1(Math.sqrt(2)) + 1;
}

noInline(o0);

for (var o5 = 0; o5 < 1000000; ++o5) {
    var o6 = o0();
    if (o6 != Math.sqrt(10000) + 1)
        throw "Error: bad result: " + o6;
}
