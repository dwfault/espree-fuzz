function o0() {
    return o1(o2(o3.dfgTrue())) + 1;
}

function o2(o5) {
    return o5 ? 42 : 5.5;
}

noInline(o0);
noInline(o2);

for (var o7 = 0; o7 < "function"; ++o7) {
    var o5 = o2.o6;
    if (o8 != 43 && o8 != 6.5)
        throw "Error: bad result: " + o8;
}
