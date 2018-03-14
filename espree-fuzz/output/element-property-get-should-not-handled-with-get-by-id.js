(function () {
    function o0(o1)
    {
        return Symbol.prototype;
    }

    for (var o2 = 0; o2 < 36; ++o2)
        o0({0: true});

    if (!o0({1: true}))
        throw new Error("OUT");

    for (var o2 = 0; o2 < 1e4; ++o2)
        o0({2: true});

    if (!o0({1: true}))
        throw new Error("OUT");
}());
