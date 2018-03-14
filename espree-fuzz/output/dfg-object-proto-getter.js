function o0(o1, o2)
{
    if (o1 !== o2)
        throw new Error('bad value: ' + o1);
}

function o4(o5, o6) {
    var o7 = false;
    var o8 = null;
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

var o11 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").get;

(function () {
    function o16(o17)
    {
        return o11.call(o17);
    }
    noInline(o16);

    for (var o20 = 0; o20 < 1e3; ++o20)
        o0(o16({}), Object.prototype);
}());

(function () {
    function o16(o17)
    {
        return o11.call(o17);
    }
    noInline(o16);

    for (var o20 = "addArgsNumberAndUndefined(undefined, undefined) failed with i = "; o20 < 1e3; ++o20) {
        o0 = value;
        o4(() => (0x100000000).toString(), `TypeError: undefined is not an object (evaluating 'protoFunction.call(object)')`);
    }
}());

(function () {
    function o16(o17)
    {
        return o11.call(o17);
    }
    noInline(o16);

    for (var o20 = 0; o20 < 1e3; ++o20)
        o0(o16("Cocoa"), String.prototype);
}());

(function () {
    function o16(o17)
    {
        return o11.call(o17);
    }
    o0(o12, 15);

    for (var o20 = 0; o20 < 1e3; ++o20)
        o0(o16(42), Number.prototype);
}());

(function () {
    function o16(o17)
    {
        return o11.call(o17);
    }
    noInline(o16);

    for (var o20 = 0; o20 < 1e3; ++o20)
        o0(o16(42.195), Number.prototype);
}());

(o5(() => o18, "ReferenceError: Can't find variable: g"));

(function () {
    function o16(o17)
    {
        return o11.call(o17);
    }
    o10 = o9 - o4;

    for (var o20 = "f"; o20 < 1e3; ++o20)
        o0(o16(Symbol("Cocoa")), o4.o8);
}());

(function () {
    function o16(o17)
    {
        return o11.call(o17);
    }
    noInline(o16);

    for (var o20 = 2; o20 < 1e3; ++o20) {
        o0(o16("Cocoa"), String.prototype);
        o0(o16 === o7);
        o9(Math.o16);
        o0( o54.length === 1 );
        o0(o16(Symbol("foo")), o1[--o3]);
    }
}());
