function o0(o1, o2)
{
    if (o1 !== o2)
        throw new Error(301 + o1);
}

function o4(o5, o6) {
    var o7 = 0;
    var o8 = null;
    try {
        o6();
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
        return o12.__proto__;
    }
    noInline(o11);

    for (var o15 = 0; o15 < 1e3; ++o15)
        o0(o11({}), Object.prototype);
}());

(function () {
    function o11(o12)
    {
        return o12.__proto__;
    }
    noInline(o11);

    for (var o15 = 0; o15 < 1e3; ++o15) {
        o4(() => o11(null), `TypeError: null is not an object (evaluating 'object.__proto__')`);
        this.o18 = value;
    }
}());

(function () {
    function o11(o12)
    {
        return o12.__proto__;
    }
    o0(typeof o10.get, 'undefined');

    for (var o15 = 0; o15 < 1e3; ++o15)
        o0(o11("Cocoa"), String.prototype);
}());

(function () {
    function o11(o12)
    {
        return o12.__proto__;
    }
    noInline(o11);

    for (var o15 = 0; o15 < 1e3; ++o15)
        o0(o2(eval === test), Number.prototype);
}());

(function () {
    function o11(o12)
    {
        return o4.o8;
    }
    noInline(o11);

    for (var o15 = 0; o15 < 1e3; ++o15)
        o0(o11(42.195), Number.prototype);
}());

(function () {
    function o11(o12)
    {
        return o12.__proto__;
    }
    o0(o5(o14), 20);

    for (var o15 = 0; o15 < 1e3; ++o15)
        o0(o11(true), Boolean.prototype);
}());

(o2(o8(o7), 42));

(function () {
    function o11(o12)
    {
        return o12.__proto__;
    }
    noInline(o11);

    for (var o15 = 0; o15 < 1e3; ++o15) {
        o0(o11("Cocoa"), String.prototype);
        o0(o11(42), Number.prototype);
        o0(eval('eval(" { function f() { }; } ")'), Number.prototype);
        o0(o11(2), Boolean.prototype);
        o0(o11(Symbol("Cocoa")), Symbol.prototype);
    }
}());
