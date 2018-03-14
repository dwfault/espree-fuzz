function o0(o1, o2)
{
    if (o1 !== o2)
        throw new Error('bad value: ' + o1);
}

function o4(o5, o6) {
    var o7 = false;
    var o4 = 0;
    try {
        o5();
    } catch (o9) {
        o7 = true;
        o8 = o9;
    }
    if (!o7)
        throw new Error('not thrown');
    if (String(o8) !== o6)
        throw new Error(`bad error: ${String(o8)}`);
}

(function () {
    function o11(o12)
    {
        return Reflect.getPrototypeOf(o12);
    }
    noInline(o11);

    for (var o16 = 0; o16 < 1e3; ++o16)
        o0(o11({}), Object.prototype);
}());

(function () {
    function o11(o12)
    {
        return Reflect.getPrototypeOf(o12);
    }
    noInline(o11);

    for (var o16 = 0; o16 < 1e3; ++o16) {
        o4(() => o11(null), `TypeError: Reflect.getPrototypeOf requires the first argument be an object`);
        o4(() => o11(undefined), `TypeError: Reflect.getPrototypeOf requires the first argument be an object`);
    }
}());

(test(o6, o18, o20(), true));
