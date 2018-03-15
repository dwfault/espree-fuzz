function o0(o1) {
    o1.o2 = (o1.o2 | 0) + 42;
}

function o3(o1) {
    return o0(o1);
}

noInline(o3);

for (var o5 = 0; o5 < 10000; ++o5) {
    var o6;
    if ((o5 % 3) == 0)
        o6 = {o7:3};
    else if ((o5 % 3) == 1)
        o6 = {o2:1, o7:2};
    else if ((o5 % 3) == 2)
        o6 = {o7:1, o2:2};
    o3(o6);
    if (o6.o2 != 42 + (o5 % 3))
        throw "Error: bad result for i = " + o5 + ": " + o6.o2;
}

function o8(o1) {
    var o9 = o1.o2;
    o0(o1);
    return o9;
}

noInline(o8);

for (var o5 = 0; o5 < 100000; ++o5) {
    var o1 = {o2:42};
    var o9 = o8(o1);
    if (o9 != 42)
        throw "Error: bad result at end: " + o9;
    if (o1.o2 != 42 + 42)
        throw "Error: bad o.f: " + o1.o2;
}

