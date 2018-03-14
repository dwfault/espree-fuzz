function o0(o1, o2) {
    var o3 = o1 + o2;
    return (o3 | 0) == o3;
}
noInline(o0);

for (var o5 = 0; o5 < 10000; ++o5) {
    var o6 = o0(1, 1);
    if (o6 !== true)
        throw "Error: bad result: " + o6;
}

var o6 = o0(1073741824, 1073741824);
if (o6 !== false)
    throw "Error: bad result at end: " + o6;
