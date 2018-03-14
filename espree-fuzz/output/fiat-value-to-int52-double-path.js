var o0 = new Float64Array(1);
o0[0] = 42;

function o2() {
    return o3(o4()) + 1;
}

function o4() {
    return o0[0];
}

noInline(o2);
noInline(o4);

for (var o6 = 0; o6 < 1000000; ++o6) {
    var o7 = o2();
    if (o7 != 43)
        throw "Error: bad result: " + o7;
}
