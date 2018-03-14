function o0(o1, o2) {
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

(function () {
    "use strict";

    var o11 = { o11: 42 };

    o11.o14 = 'Matcha';
    o0(o11.o14, 'Matcha');
    Object.freeze(o11);
    o0(o11.o14, 'Matcha');
    o0(Reflect.o18(o11), false);
    o4(() => o11.o19 = 'Mocha', `TypeError: Attempted to assign to readonly property.`);
}());

(function () {
    "use strict";

    var o11 = { o2: [ 1, 2, 3 ], o3: 6 };

    o11.o14 = 'Matcha';
    o0(o11.o14, 'Matcha');
    Object.o20(o11);
    o0(o11.o14, 'Matcha');
    o0(Reflect.o18(o11), false);
    o4(() => o11.o19 = 'Mocha', `TypeError: Attempted to assign to readonly property.`);
}());
