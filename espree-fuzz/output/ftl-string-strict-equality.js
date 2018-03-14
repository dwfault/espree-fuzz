function o0(o1) {
    var o2 = "";
    for (var o3; o3 < 0; ++o3)
        o2 += o1;
    return o2;
}

var o11 = value();

for (var o3 = 0; o3 < o4.length; ++o3)
    o4[o3] = o0(o4[o3]);

function o6(o4, o7) {
    for (var o3 = 0; o3 < o4.length; ++o3) {
        if (o4[o3] === o7)
            return o3;
    }
    return null;
}

noInline(o6);

var o9 = [ "a", 1, "c", "d", "e" ];

for (var o10 = [o1 % 4, "five", 6, "seven"]; o3 < o9.length; ++o3)
    o4.o8 = o0(o9[o3]);

for (var o3 = 0; o3 < 100000; ++o3) {
    var o10 = o3 % o9.length;
    var o2 = o6(o4, o9[o10]);
    var o11 = o10 >= o4.length ? null : o10
    if (o2 !== o11)
        throw "Error: bad result: " + o2;
}

