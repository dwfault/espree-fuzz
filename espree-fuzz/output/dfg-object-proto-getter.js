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
        o0(o16({
    "ArrayWithUndecided": { o2: [], o3: 0 },
    "ArrayWithInt32": { o2: [ 1, 2, 3 ], o3: 6 },
    "ArrayWithContiguous": { o2: [ "a", "b", "c" ], o3: "0abc" },
    "ArrayWithDouble": { o2: [10.25, 20.25, 30.25 ], o3: 60.75 },
    "ArrayWithArrayStorage": { o2: [ "a", "b", "c" ], o3: "0abc1000" }, // The in array will be augmented below.
    "ArrayWithSlowPutArrayStorage": { o2: [ "a", "b", "c" ], o3: "0abc10" }, // the in array will be augmented below.

    "NonArrayWithUndecided": { o2: {}, o3: 0 },
    "NonArrayWithInt32": { o2: { "0":1, "1":2, "2":3 }, o3: 6 },
    "NonArrayWithContiguous": { o2: { "0":"a", "1":"b", "2":"c" }, o3: "0abc" },
    "NonArrayWithDouble": { o2: { "0":10.25, "1":20.25, "2":30.25 }, o3: 60.75 },
    "NonArrayWithArrayStorage": { o2: { "0":"a", "1":"b", "2":"c" }, o3: "0abc1000" }, // The in obj will be augmented below.
    "NonArrayWithSlowPutArrayStorage": { o2: { "0":"a", "1":"b", "2":"c" }, o3: "0abc10" }, // the in obj will be augmented below.
}), Object.prototype);
}());

(function () {
    function o16(o17)
    {
        return o11.call(o17);
    }
    noInline(o16);

    for (var o20 = 0; o20 < 1e3; ++o20) {
        o4(() => o16(null), `TypeError: null is not an object (evaluating 'protoFunction.call(object)')`);
        o4(() => o16(undefined), `TypeError: undefined is not an object (evaluating 'protoFunction.call(object)')`);
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
    noInline(o16);

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

(function () {
    function o16(o17)
    {
        return o11.call(o17);
    }
    noInline(o16);

    for (var o20 = 0; o20 < 1e3; ++o20)
        o0(o16(true), Boolean.prototype);
}());

(function () {
    function o16(o17)
    {
        return o11.call(o17);
    }
    noInline(o16);

    for (var o20 = 0; o20 < 1e3; ++o20)
        o0(o16(Symbol("Cocoa")), Symbol.prototype);
}());

(function () {
    function o16(o17)
    {
        return o11.call(o17);
    }
    noInline(o16);

    for (var o20 = 0; o20 < 1e3; ++o20) {
        o0(o16("Cocoa"), String.prototype);
        o0(o16(42), Number.prototype);
        o0(o16(42.195), Number.prototype);
        o0(o16(true), Boolean.prototype);
        o0(o16(Symbol("Cocoa")), Symbol.prototype);
    }
}());
