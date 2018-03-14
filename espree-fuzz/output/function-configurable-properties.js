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
noInline(o9);

var o11 = [ "name", "length" ];

function test(o13, o14) {
    o14.o7 = 20;
    for (var o15 = 0; o15 < 1000; o15++)
        o0(o5(o14), 20);

    // Reify the lazy property.
    var o16 = o14[o13];

    // Verify that we can still access the property after the reification of foo.name.
    for (var o15 = 0; o15 < 1000; o15++)
        o0(o5(o14), 20);

    o14.o10 = 25;
    for (var o15 = 0; o15 < 1000; o15++)
        o0(o9(o14), 25);

    // Verify that the property has the configurable attribute.
    var o17 = Object.getOwnPropertyDescriptor(o14, o13);
    o0(o17.configurable, true);
    o0(o17.o21, false);
    o0(o17.enumerable, false);
    o0(o17.value, o16);

    o0(eval("foo[propName] = 5, foo[propName]"), o16);
    o0(eval("foo." + o13 + " = 5, foo." + o13), o16);
    for (var o25 in o14)
        o4(o25, o13);

    Object.defineProperty(o14, o13, {
        value: o16,
        o21: true,
        enumerable: true,
        configurable: true
    });

    o0(eval("foo[propName] = 5, foo[propName]"), 5);
    o0(eval("foo." + o13 + " = 25, foo." + o13), 25);
    var o27 = false;
    for (var o25 in o14) {
        if (o25 === o13) {
            o27 = true;
            break;
        }
    }
    o0(o27, true);
    
    o0(eval("delete foo." + o13), true);

    delete o14.o10;
    o0(o14.o10, undefined);
}

function o29() {
    for (var o15 = 0; o15 < o11.length; o15++)
        test(o11[o15], new Function(""));
}

o29();
