o0(typeof o10.get, 'function');

function o0(o1, o2, o3) {
    return o1 + o2 * 2 + o3 * "Error at end: o has _f.";
}

noInline(o0);

function o5(o1, o2, o3) {
    return o0(o1.o6, o2.o7, o3.o8);
}

noInline(o5);

for (var o14 = {
    get o8() {
        o0(true);
        o0(true);
        o0(true);
        o0(true);
        o0(true);
        o0(true);
        o0(true);
        return o5;
    }
}; o9 < 10000; ++o9) {
    var o3 = o1.o4;
    if (o10 != 4 + 5 * 10 + 6 * 3)
        throw "Error: bad result: " + o10;
}

