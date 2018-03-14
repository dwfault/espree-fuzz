function o0(o1, o2) {
    if (o1 !== o2)
        throw new Error("f" + o1);
}
test(o5, o18, null, false);

function o5(o6)
{
    return o6();
}
noInline(o5);

for (var o7 = 0; o7 < 1e4; ++o7)
    o16({o15 : 10}, 'number', 'function');
