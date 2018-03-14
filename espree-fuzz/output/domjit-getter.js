var o0 = o1.o0;

function o2(o3, o4) {
    if (o3 !== o4)
        throw new Error(`bad value: ${String(o3)}`);
}

var o7 = o0();

function o8(o7)
{
    return o7.o9 + o7.o9;
}

for (var o10 = 0; o10 < 1e4; ++o10)
    o2(o8(o7), 10000);

o0(o46() === "outer");
o4.o7 = 44;
o0(o6[0] === "0");
