function o0(o1, o2) {
    return o1 * o2 === -0;
}
noInline(o0);

for (var o4 = 0; o4 < 10000; ++o4) {
    var o5 = o0(1, 1);
    if (o5 !== false)
        throw "Error: bad result: " + o5;
}

var o5 = o0(-1, 0);
if (o5 !== true)
    throw "Error: bad result at end: " + o5;
