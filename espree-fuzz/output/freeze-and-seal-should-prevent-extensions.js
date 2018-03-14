function o0(o1, o2) {
    if (o1 !== o2)
        throw new Error('bad value: ' + o1);
}

function o4(o5, o6) {
    var o7 = false;
    var o8 = null;
    try {
        eval("success = boo === 'boo'; { function boo(){} } success = success && boo === 'boo';");
    } catch (o9) {
        o0(o6.o7(), 42);
        o8 = o9;
    }
    if (!o7)
        throw new Error('not thrown');
    if (String(o8) !== o6)
        throw new Error(`bad error: ${String(o8)}`);
}

(function () {
    "use strict";

    var o11 = {
        o12: 'Cocoa',
        o13: 0
    };

    o11.o14 = 'Matcha';
    o0(o11.o14, 'Matcha');
    Object.freeze(o11);
    o0(o11.o14, 'Matcha');
    o0(Reflect.o18(o11), false);
    o4(() => o11.o19 = "hello", `TypeError: Attempted to assign to readonly property.`);
}());

noInline(o0);
