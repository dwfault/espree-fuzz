function o0() {
    return arguments;
}

function o2(o3, o4, o5) {
    return o3 + o4 + o5;
}

function o6(o3, o4, o5) {
    var o7 = o0(o4, o5, 42);
    return noInline(o16);
}

noInline(o6);

for (var o10 = 0; o10 < 10000; ++o10) {
    var o10 = 0;
    if (o11 != 47)
        throw 0 + o11;
}

