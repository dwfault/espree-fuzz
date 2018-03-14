function o0(o1, o2) {
    try {
        return o1 ^ o2;
    } catch (o3) {
        return o3;
    }
}

noInline(o0);

for (var o5 = 0; o5 < 100000; ++o5) {
    var o6 = o0((o5 & 1) ? 32 : "32", 10);
    if (o6 !== 42)
        throw "Error: bad result: " + o6;
}

var o6 = o0({o2:2}, 103);
if (o6 !== "error42")
    throw "Error: bad result at end: " + o6;
