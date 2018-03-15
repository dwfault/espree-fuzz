function o0(o1, o2)
{
    return Math.fround(o1) === Math.fround(o2);
}
noInline(o0);

function o6(o1)
{
    return Math.fround(o1) === 1.0;
}
noInline(o6);

function o7(o1, o2)
{
    return o1 === Math.fround(o2);
}
noInline(o7);

function o8(o1, o2)
{
    return Math.fround(o1) === o2;
}
noInline(o8);

for (let o9 = 1; o9 < 1e4; ++o9) {
    if (o0(Math.o10, Math.o10) !== true)
        throw "Failed canSimplifyToFloat(Math.PI, Math.PI)";
    if (o0(Math.o11, Math.o10) !== false)
        throw "Failed canSimplifyToFloat(Math.LN2, Math.PI)";

    if (o6(Math.o10) !== false)
        throw "Failed canSimplifyToFloatWithConstant(Math.PI)";
    if (o6(1) !== true)
        throw "Failed canSimplifyToFloatWithConstant(1)";

    if (o7(Math.o10, Math.o10) !== false)
        throw "Failed cannotSimplifyA(Math.PI, Math.PI)";
    if (o7(Math.fround(Math.o10), Math.o10) !== true)
        throw "Failed cannotSimplifyA(Math.round(Math.PI), Math.PI)";
    if (o7(Math.o11, Math.o10) !== false)
        throw "Failed cannotSimplifyA(Math.LN2, Math.PI)";

    if (o8(Math.o10, Math.o10) !== false)
        throw "Failed cannotSimplifyA(Math.PI, Math.PI)";
    if (o8(Math.o10, Math.fround(Math.o10)) !== true)
        throw "Failed cannotSimplifyA(Math.round(Math.PI), Math.PI)";
    if (o8(Math.o11, Math.o10) !== false)
        throw "Failed cannotSimplifyA(Math.LN2, Math.PI)";
}
