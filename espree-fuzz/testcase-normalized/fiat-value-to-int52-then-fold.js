function o0() {
    return o1(o2.dfgTrue() ? 42 : 5.5) + 1;
}

noInline(o0);

for (var o5 = 0; o5 < 1000000; ++o5) {
    var o6 = o0();
    if (o6 != 43 && o6 != 6.5)
        throw "Error: bad result: " + o6;
}
