function o0(o1) {
    try {
        return new Array(o1);
    } catch (o3) {
        return "error42";
    }
}

noInline(o0);

for (var o5 = 0; o5 < 100000; ++o5) {
    var o6 = o0(1);
    if (o6.length != 1)
        throw "Error: bad result: " + o6;
}

var o6 = o0(-1);
if (o6 != "error42")
    throw "Error: bad result at end: " + o6;

