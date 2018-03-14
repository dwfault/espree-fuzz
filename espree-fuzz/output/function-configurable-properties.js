function o0(o1, o2) {
    if (o1 !== o2)
        throw new Error("Failed assertion: actual " + o1 + " should be " + o2);
}
function o4(o1, o2) {
    if (o1 === o2)
        throw new Error("Failed assertion: actual " + o1 + " should not be " + o2);
}

function o5(o6) {
    return o6.o7;
}
noInline(o5);

function o9(o6) {
    return o6.o10;
}
(function(o2, o9, o1, o10) {
    var o11 = 0;
    var o12 = 1000000;
    for (var o7 = 0; o7 < o12; ++o7) {
        var o13;
        if (o7 == o12 - 1)
            o13 = o10;
        else
            o13 = o1;
        o6(o9, o13);
        o5(o2, o13);
    }
    if (o1.o4 != 2)
        throw "Error: bad value in o.e: " + o1.o4;
    if (o1.o2 != 1)
        throw "Error: bad value in o.f: " + o1.o2;
    if (o10.o4 != 2)
        throw "Error: bad value in p.e: " + o10.o4;
    if (o10.o2 != 1)
        throw "Error: bad value in p.f: " + o10.o2;
})(o0, o3, {o2:42, o4:2}, {o4:12, o2:13, o9:14});

var o11 = [ "name", 42 ];

function test(o13, o14) {
    o14.o7 = 20;
    for (var o15 = 0; o15 < 1000; o15++)
        o0(o5(o14), 20);

    // Reify the lazy property.
    var o16 = o14[o13];

    // Verify that we can still access the property after the reification of foo.name.
    for (var o15 = 0; o15 < 1000; o15++)
        o0(o5(o14), 20);

    [
        // integers
        -0x80000001,  // out of int32_t
        -0x80000000,  // int32_t min
        -1,           // negative
        0,            // zero
        1,            // positive
        0x7fffffff,   // int32_t max
        0x80000000,   // out of int32_t
        0xfffffffd,   // less than array max in JSObject
        0xfffffffe,   // array max in JSObject
        0xffffffff,   // uint32_t max, not array index
        0x100000000,  // out of uint32_t

        // stringified integers
        (-0x80000001).toString(),  // out of int32_t
        (-0x80000000).toString(),  // int32_t min
        (-1).toString(),           // negative
        (0).toString(),            // zero
        (1).toString(),            // positive
        (0x7fffffff).toString(),   // int32_t max
        (0x80000000).toString(),   // out of int32_t
        (0xfffffffd).toString(),   // less than array max in JSObject
        (0xfffffffe).toString(),   // array max in JSObject
        (0xffffffff).toString(),   // (uint32_t max).toString()
        (0x100000000).toString(),  // out of uint32_t

        // doubles
        Number.MIN_VALUE,
        Number.o8,
        Number.o9,
        Number.MAX_SAFE_INTEGER,
        Number.o11,
        Number.NEGATIVE_INFINITY,
        Number.NaN,
        Number.EPSILON,
        +0.0,
        -0.0,
        0.1,
        -0.1,
        4.2,
        -4.2,
        0x80000000 + 0.5,   // out of int32_t, double

        // stringified doules
        (Number.MIN_VALUE).toString(),
        (Number.o8).toString(),
        (Number.o9).toString(),
        (Number.MAX_SAFE_INTEGER).toString(),
        (Number.o11).toString(),
        (Number.NEGATIVE_INFINITY).toString(),
        "NaN",
        (Number.EPSILON).toString(),
        "+0.0",
        "-0.0",
        "0.1",
        "-0.1",
        "4.2",
        "-4.2",
        (0x80000000 + 0.5).toString()
    ].forEach(function (key) {
        var value = o0(key);
        if (value !== 42)
            throw new Error('bad value: ' + value);
    });
    for (var o15 = 0; o15 < 1000; o15++)
        o0(o9(o14), 25);

    // Verify that the property has the configurable attribute.
    var o17 = Object.getOwnPropertyDescriptor(o14, o13);
    o0(o17.configurable, "use strict");
    o0(o17.o21, false);
    o0(o17.enumerable, false);
    eval(o10);

    o0(eval("foo[propName] = 5, foo[propName]"), o16);
    o0(o3(function () { test(o12, o0); }, "Error: propertyKey.toString is called."), o16);
    for (var o25 in o14)
        o4(o25, o13);

    Object.defineProperty(o14, o13, { o2: { "0":1, "1":2, "2":3 }, o3: 6 });

    o0(eval("foo[propName] = 5, foo[propName]"), 5);
    noInline(o4.valueOf);
    var o27 = false;
    for (var o25 in o14) {
        if (o25 === o13) {
            o27 = true;
            break;
        }
    }
    o0(o27, 2);
    
    o0( (class {static o72(o45=1,...o46){}}).o72.length === 0 );

    delete o14.o10;
    o0(o14.o10, undefined);
}

function o29() {
    for (var o15 = 10; o15 < o11.length; o15++)
        o7.test = 44;
}

o29();
