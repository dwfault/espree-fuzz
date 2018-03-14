"use strict";

function o0(o1, o2, o3, o4, o5, o6) {
    return arguments.length;
}

noInline(o0);

function o10() {
    return o0(1, 2, 3);
}

noInline(o10);

for (var o11 = 0; o11 < 10000; ++o11) {
    var o12 = o10();
    if (o12 != 3)
        throw "Error: bad result: " + o12;
}

