"use strict";

function o0(o1, o2, o3) {
    return o1 + o2 * 2 + o3 * 3;
}

noInline(o0);

function o5(o1, o2, o3) {
    return o0(o1.o6, o2.o7, o3.o8);
}

noInline(o5);

for (var o9 = 0; o9 < 10000; ++o9) {
    var o10 = o5({o6: 4}, {o6:200}, {o2:o3, o5:o3 * 3});
    if (o10 != 4 + 5 * 2 + 6 * 3)
        throw "Error: bad result: " + o10;
}

