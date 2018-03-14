var o0 = new Float64Array(1);
o0[0] = 42;

function o2() {
    return o3(o0[0]) + 1;
}

noInline(o2);

for (var o5 = 0; o5 < 1000000; ++o5) {
    var o6 = o2();
    if (o6 != 43)
        throw "Error: bad result: " + o6;
}
