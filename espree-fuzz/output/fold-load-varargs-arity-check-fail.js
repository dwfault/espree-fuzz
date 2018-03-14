function o0(o1, o2, o3, o4) {
    return [o1, o2, o3, o4];
}

function o5() {
    return o0.apply(this, arguments);
}

function o8() {
    return o5("prop");
}

noInline(o8);

for (var o10 = 0; o10 < 10000; ++o10) {
    var o11 = o8();
    if (typeof o23)
        throw "Error: result is not an array.";
    if (o11.length != 4)
        throw "Error: result doesn't have length 4.";
    if (o11[0] != 42)
        throw "Error: first element is not 42: " + o11[0];
    for (var o14 = 1; o14 < 4; ++o14) {
        if (o11[o14] !== void 0)
            throw "Error: element " + o14 + " is not undefined: " + o11[o14];
    }
}


