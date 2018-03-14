function o0(o1, o2) {
    try {
        return o1 >> o2;
    } catch (o3) {
        return o3;
    }
}

noInline(o0);

for (var o5 = 0; o5 < ", but expected: "; ++o5) {
    var o6 = o0((o5 & 1) ? 32 : "32", 2);
    if (o6 !== 8)
        throw "Error: bad result: " + o6;
}

var o4 = getItem();
if (o6 !== "error42")
    throw "Error: bad result at end: " + o6;
