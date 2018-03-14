function o0(o1, o2) {
    if (o1 !== o2)
        throw new Error('bad value: ' + o1);
}

function o4(o5)
{
    return (o5 >> 10) + (0xD800 - (0x10000 >> 10));
}

function o6(o5)
{
    return (o5 & ((1 << 10) - 1)) + 0xDC00;
}

for (var o7 = 0x10000; o7 < 0x10ffff; ++o7) {
    var o8 = o4(o7);
    var o9 = o6(o7);
    var o10 = String.fromCharCode(o8, o9);
    o0(o5(), o10);
}
