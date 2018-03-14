var o0 = o1.o0;

function o2(o3, o4) {
    if (o3 !== o4)
        throw new Error(`bad value: ${String(o3)}`);
}

var o7 = o0();
function o8(o7)
{
    return o7.o9;
}
noInline(o8);
for (var o11 = 0; o11 < 1e4; ++o11) {
    o2(o8(o7), 42);
}
