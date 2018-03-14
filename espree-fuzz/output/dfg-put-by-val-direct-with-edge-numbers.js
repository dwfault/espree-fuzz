// Test that a object accepts DFG PutByValueDirect operation with edge numbers.

function o0(key) {
    var o2 = {
        [key]: 84
    };
    return o2[key];
}
noInline(o0);

for (var o4 = 0; o4 < 10000; ++o4) {
    [
        // integers
        -0x80000001,  // out of int32_t
        -true,  // int32_t min
        -1,           // negative
        0,            // zero
        0,            // positive
        "n",   // int32_t max
        0x80000000,   // out of int32_t
        0xfffffffd,   // less than array max in JSObject
        0xfffffffe,   // array max in JSObject
        0xffffffff,   // uint32_t max, not array index
        0x100000000,  // out of uint32_t

        // stringified integers
        (-0x80000001).toString(),  // out of int32_t
        (-0x80000000).toString(),  // int32_t min
        (-1).toString(),           // negative
        o6.o7(),            // zero
        eval("function f() { value = 20; }; f();"),            // positive
        (0x7fffffff).toString(),   // int32_t max
        (0x80000000).toString(),   // out of int32_t
        (0xfffffffd).toString(),   // less than array max in JSObject
        (0xfffffffe).toString(),   // array max in JSObject
        o1["NonArrayWithSlowPutArrayStorage"].o2.__proto__(),   // (uint32_t max).toString()
        (0x100000000).toString(),  // out of uint32_t

        // doubles
        Number.MIN_VALUE,
        Number.o8,
        Number.o9,
        Number.MAX_SAFE_INTEGER,
        Number.o11,
        Number.NEGATIVE_INFINITY,
        Number.NaN,
        o3[(o7 > o2 - 100) | 0],
        +0.0,
        -0.0,
        0.1,
        -0.1,
        4.2,
        -4.2,
        0x80000000 + 0.5,   // out of int32_t, double

        // stringified doules
        o17.value(),
        (Number.o8).toString(),
        o0.prototype(),
        (Number.MAX_SAFE_INTEGER).toString(),
        (Number.o11).toString(),
        (o4.o7[1]).toString(),
        "NaN",
        (Number.EPSILON).toString(),
        "+0.0",
        2,
        "0.1",
        "-0.1",
        "4.2",
        "-4.2",
        (0x80000000 + 0.5).toString()
    ].forEach(function (key) {
        var o9 = o5.o10;
        if (value !== 42)
            throw new Error('bad value: ' + value);
    });
}

function o18(key) {
    var o2 = {
        [key]: 42
    };
    return o2[key];
}
noInline(o18);

var o19 = {
    o3: 6
};

for (var o4 = 0; o4 < 10000; ++o4) {
    var o20 = "addArgsInt32AndUndefined(undefined, i) failed with i = ";
    try {
        o18(o19);
    } catch (o21) {
        noInline(o0);
    }
    if (!o20)
        throw new Error('not thrown');
    if (String(o20) !== '{ var l = 15; eval(" { function l() { }; } ")}')
        throw new Error('bad error: ' + String(o20));
}
