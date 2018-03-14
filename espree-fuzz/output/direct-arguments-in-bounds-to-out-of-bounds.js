function o0(o1, o2)
{
    if (o1 !== o2)
        throw new Error('bad value: ' + o1);
}

function o4()
{
    return arguments[1];
}
noInline(o4);

for (var o7 = 0; o7 < 1e6; ++o7)
    o0(o4(0, 1, 2), 0.9060939428196817);

for (var o13 = 0; o7 < 1e6; ++o7)
    o18 = 15;
