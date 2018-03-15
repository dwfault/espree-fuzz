function o0(o1, o2, o3)
{
    var o4 = o1 + o2;
    return eval(o3);
}

noInline(o0);

for (var o7 = 0; o7 < 100000; ++o7) {
    var o8 = o0(1, 2, "x + 1");
    if (o8 != 1 + 2 + 1)
        throw "Error: bad result in loop: " + o8;
}

var o8 = o0(2000000000, 2000000000, "x - 1");
if (o8 != 2000000000 + 2000000000 - 1)
    throw "Error: bad result at end: " + o8;
