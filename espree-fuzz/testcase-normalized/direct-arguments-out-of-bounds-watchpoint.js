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

o0(o4(), undefined);
o0(o4(0), undefined);
o0(o4(0, 1), 1);
for (var o8 = 0; o8 < 1e6; ++o8)
    o0(o4(), undefined);
Object.prototype[1] = 42;
o0(o4(), 42);
