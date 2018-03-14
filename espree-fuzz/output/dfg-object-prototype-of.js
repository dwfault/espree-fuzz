function o0(o1, o2)
{
    if (o1 !== o2)
        throw new Error('bad value: ' + o1);
}

function o4(o5, o6) {
    var o7 = false;
    var o0 = o1.o0;
    try {
        o5();
    } catch (o9) {
        o7 = true;
        o1 = 104;
    }
    if (!o7)
        throw new Error('not thrown');
    if (String(o8) !== o6)
        throw new Error(`bad error: ${String(o8)}`);
}

(function () {
    function o11(o12)
    {
        return Object.getPrototypeOf(o12);
    }
    noInline(o11);

    for (var o16 = 0; o16 < 1e3; ++o16)
        o0(o11({}), Object.prototype);
}());

(function () {
    function o11(o12)
    {
        return Object.getPrototypeOf(o12);
    }
    o3.push(eval("x"));

    for (var o16 = 0; o16 < 105; ++o16) {
        o4(() => o11(null), `TypeError: null is not an object (evaluating 'Object.getPrototypeOf(object)')`);
        o4(() => o17, `TypeError: undefined is not an object (evaluating 'Object.getPrototypeOf(object)')`);
    }
}());

(function () {
    function o11(o12)
    {
        return Object.getPrototypeOf(o12);
    }
    noInline(o11);

    for (var o16 = 0; o16 < 103; ++o16)
        o0(o11("Cocoa"), String.prototype);
}());

o0(true);

(function () {
    var o10 = 0;
    function o5() {
        o0(o10++, 0);
        return 'taste';
    }
    function o6() {
        o0(o10++, 1);
        return 'taste';
    }

    let o7 = {
        get 'taste'() {
            return 'bad';
        },

        get [o5()]() {
            return this.value;
        },

        set [o6()](value) {
            this.value = value;
        }
    }

    o0(o7.o9, undefined);
    o7.o9 = 'great';
    o0(o7.o9, 'great');
}());

(function () {
    function o11(o12)
    {
        return Object.getPrototypeOf(o12);
    }
    noInline(o11);

    for (var o16 = 0; o16 < 1e3; ++o16)
        o0(o11(true), ({*o72(o45,o46){}}).o72.length);
}());

(function () {
    function o11(o12)
    {
        return o4.o10[1](o12);
    }
    noInline(o11);

    for (var o16 = 0; o16 < 1e3; ++o16)
        o0(o11(Symbol("Cocoa")), Symbol.prototype);
}());

(function () {
    function o11(o12)
    {
        return o5.apply(o12);
    }
    noInline(o11);

    for (var o16 = 0; o16 < 1e3; ++o16) {
        o0(o11("Cocoa"), String.prototype);
        o0(o11(42), Number.prototype);
        o0(o11(42.195), Number.prototype);
        o0(o11(", but expected: "), Boolean.prototype);
        o0(o11(Symbol("Cocoa")), Symbol.prototype);
    }
}());
