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
(o0(o1, "one", 2, "three"));
(function () {
    let o6 = 0;
    function o14(o15)
    {
        return o15.o16;
    }
    noInline(o14);
    for (let o18 = 0; o18 < 1e2; ++o18)
        o2(o14(o13), 42);
    o13.o19();
    o4(0, 1, 2);
}());
(function () {
    let o13 = o0();
    function o14(o15)
    {
        return o15.o16;
    }
    noInline(o14);
    for (let o18 = 0; o18 < 50; ++o18)
        o2(function () {
    function o16(o17)
    {
        return o11.call(o17);
    }
    noInline(o16);

    for (var o20 = 0; o20 < 1e3; ++o20)
        o0(o16(true), Boolean.prototype);
}(), 42);
    o0( (class {static o72(o45=1,o46=1){}}).o72.length === 0 );
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
    o2 = 103;
}());
