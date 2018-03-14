function o0(o1, o2) {
    return [o1, o2];
}

function o3() {
    return o0.apply(this, arguments);
}

function o6() {
    return o3(42);
}

noInline(o6);

for (var o8 = 0; o8 < 10000; ++o8) {
    var o9 = o6();
    if (!(o9 instanceof Array))
        throw "Error: result is not an array.";
    if (o9.length != 2)
        throw "Error: result doesn't have length 4.";
    if (o9[0] != 42)
        throw "Error: first element is not 42: " + o9[0];
    for (var o12 = 1; o12 < 2; ++o12) {
        if (o9[o12] !== void 0)
            throw "Error: element " + o12 + " is not undefined: " + o9[o12];
    }
}

