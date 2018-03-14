var o0 = o1.o0;

function o2(o3, o4) {
    if (o3 !== o4)
        throw new Error(`bad value: ${String(o3)}`);
}

var o7 = [];
for (var o8 = 0; o8 < 100; ++o8)
    o7.push(o0());

function o10(o11)
{
    return o11.o12 + o11.o12;
}

for (var o8 = 0; o8 < 1e2; ++o8) {
    for (var o13 = 0; o13 < o7.length; ++o13)
        o2(o10(o7[o13]), 84);
}
