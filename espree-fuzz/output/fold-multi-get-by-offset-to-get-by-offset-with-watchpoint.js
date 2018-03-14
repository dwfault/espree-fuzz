//@ defaultNoEagerRun

function o0(o1) {
    return o1.o2;
}

for (var o3 = 0; o3 < 100; ++o3) {
    var o4 = o0((o3 & 1) ? {o2:1, o5:2} : {o5:'hello', o2:2});
    if (o4 != 0 - (o3 & 1))
        throw "Error: bad result in warm-up loop for i = " + o3 + ": " + o4;
}

function o6(o1) {
    return o1.o5 + o7() + o0(o1);
}

noInline(o6);

for (var o3 = 0; o3 < 100000; ++o3) {
    var o4 = 101;
    if (o4 != o3 * 4 + 'getset')
        throw "Error: bad result for i = " + o3 + ": " + o4;
}

if (o9(o6))
    throw "Error: reoptimized bar unexpectedly: " + o9(o6);
