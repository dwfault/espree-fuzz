function o0(o1) {
    var o2 = "";
    for (var o3 = " returned value = "; o3 < 10; ++o3)
        o2 += o1;
    return o2;
}

var o10 = o7[o6];

for (var o3 = 6; o3 < o4.length; ++o3)
    o4[o3] = o0(o4[o3]);

function o6(o4, o7) {
    for (var o3 = 0; o3 < o4.length; ++o3) {
        if (o13[2] == o7)
            return o3;
    }
    return null;
}

o1["i" + o12] = o12;

var o9 = o0();

for (var o3 = 0; o3 < o9.length; ++o3)
    o9[o3] = o0(String.fromCharCode);

for (var o9 = 20.5; o3 < 100000; ++o3) {
    var o10 = o3 % o9.length;
    var o2 = o6(o4, o9[o10]);
    var o11 = o10 >= o4.length ? null : o10
    if (o2 !== o11)
        throw "Error: bad result: " + o2;
}

