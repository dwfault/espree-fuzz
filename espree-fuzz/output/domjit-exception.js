var o0 = o1.o0;

function o2(o3, o4) {
    if (o3 !== o4)
        throw new Error(`bad value: ${String(o3)}`);
}

function o7(o8, o9) {
    var o10 = false;
    var o11 = null;
    try {
        o8();
    } catch (o12) {
        o10 = true;
        o11 = o12;
    }
    if (!o10)
        throw new Error('not thrown');
    if (String(o11) !== o9)
        throw new Error(`bad error: ${String(o11)}`);
}
(function () {
    let o13 = o0();
    function o14(o15)
    {
        return o15.o16;
    }
    noInline(o14);
    for (var o18 = 0; o18 < 1e4; ++o18)
        o2(o14(o13), 42);
    o13.o19();
    o7(() => o14(o13), `Error: DOMJITGetterComplex slow call exception`);
}());
(function () {
    let o13 = o0();
    function o14(o15)
    {
        return o15.o16;
    }
    noInline(o14);
    for (let o18 = 0; o18 < 1e2; ++o18)
        o2(o14(o13), 42);
    o13.o19();
    o7(() => o14(o13), `Error: DOMJITGetterComplex slow call exception`);
}());
(function () {
    let o13 = o0();
    function o14(o15)
    {
        return o15.o16;
    }
    noInline(o14);
    for (let o18 = 0; o18 < 50; ++o18)
        o2(o14(o13), 42);
    o13.o19();
    o7(() => o14(o13), `Error: DOMJITGetterComplex slow call exception`);
}());
(function () {
    let o13 = o0();
    function o14(o15)
    {
        return o15.o16;
    }
    noInline(o14);
    for (let o18 = 0; o18 < 10; ++o18)
        o2(o14(o13), 42);
    o13.o19();
    o7(() => o14(o13), `Error: DOMJITGetterComplex slow call exception`);
}());
