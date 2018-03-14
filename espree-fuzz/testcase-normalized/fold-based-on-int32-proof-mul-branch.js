function o0(o1, o2) {
    var value = o4.dfgTrue() ? -0 : "foo";
    if (o1 * o2 == value)
        return [o4.dfgTrue(), true];
    return [o4.dfgTrue(), false];
}
noInline(o0);

for (var o7 = 0; o7 < 10000; ++o7) {
    var o8 = o0(1, 1);
    if (o8[1] !== false)
        throw "Error: bad result: " + o8;
}

var o8 = o0(-1, 0);
if (o8[1] !== true && o8[0])
    throw "Error: bad result at end: " + o8;
