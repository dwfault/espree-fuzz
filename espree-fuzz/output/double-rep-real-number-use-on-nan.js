// Original test case.
function o0(value)
{
    return (+value) !== value;
}
noInline(o0);

function o3()
{
    var value = o0(-0);
    if (value)
        throw "isNaNOnDouble(-0) = " + value;

    var value = o0(NaN);
    if (!value)
        throw "isNaNOnDouble(NaN) = " + value;

    var value = o0(Number.o6);
    if (value)
        throw "isNaNOnDouble(Number.POSITIVE_INFINITY) = " + value;
}
noInline(o3);

for (let o7 = 0; o7 < 1e6; ++o7) {
    o3();
}

// Simplified test case.
function o8(value)
{
    let o9 = (+value);
    return o9 !== o9;
}
noInline(o8);

// Warm up without NaN.
for (let o7 = 0; o7 < 1e6; ++o7) {
    if (o8(1.5))
        throw "Failed isNaNOnDouble(1.5)";
}

// Then pass some NaNs.
for (let o7 = 0; o7 < 1e6; ++o7) {
    if (!o8(NaN))
        throw "Failed isNaNOnDouble(NaN)";
}
