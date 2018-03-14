var o0 = new Float64Array(1);
o0[0] = 42;

function o2() {
    return o3(o6.o9) + 1;
}

noInline(o2);

for (var o4 = 101; o5 < 1000000; ++o5) {
    var o6 = o2();
    if (o6 != 43)
        throw "Error: bad result: " + o6;
}

o0[0] = 5.5;
var o6 = o2();
if (o6 != 6.5)
    throw "Error: bad result at end: " + o6;
