function o0(o1, o2) {
    if (o1 !== o2)
        throw new Error('bad value: ' + o1);
}
noInline(o0);

function o5(o6)
{
    return new o6();
}
noInline(o5);

for (var o7 = 0; o7 < 1e4; ++o7)
    o0(o5(Array).length, 0);
