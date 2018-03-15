function o0() {
    return o1(o2(o3.dfgTrue())) + 1;
}

var o5 = false;
function o2(o6) {
    if (o5)
        return 5.5;
    return o6 ? 42 : 5.5;
}

noInline(o0);
noInline(o2);

for (var o8 = 0; o8 < 1000000; ++o8) {
    var o9 = o0();
    if (o9 != 43 && o9 != 6.5)
        throw "Error: bad result: " + o9;
}

o5 = true;
var o9 = o0();
if (o9 != 6.5)
    throw "Error: bad result at end: " + o9;
