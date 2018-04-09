//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = o1.o2;

function o3(o4) {
    try {
        o4();
    } catch (o5) {
        o0(o5.name + " : " + o5.o6);
    }
}

var o7 = 0;
function o8(o9, o4) {
    if (o7 > 0) {
        o0("\n");
    }
    o0((o7++) + ".", o9);
    o3(o4);
}

function o10(o11, name) {
    var o12 = Object.getOwnPropertyDescriptor(o11, name);
    var o13 = "  " + name + ": " + o11[name];
    if (o12) {
        if (o12.enumerable) { o13 += " enumerable"; }
        if (o12.configurable) { o13 += " configurable"; }
        if (o12.writable) { o13 += " writable"; }
        if (o12.getter) { o13 += " getter"; }
        if (o12.setter) { o13 += " setter"; }
    }
    o0(o13);
}

o8("[[Value]] absent, set enumerable: true", function () {
    var o14 = [];
    o3(function () {
        Object.defineProperty(o14, "length", { enumerable: true });
    });
    o10(o14, "length");
});

o8("[[Value]] absent, set configurable: true", function () {
    var o14 = [];
    o3(function () {
        Object.defineProperty(o14, "length", { configurable: true });
    });
    o10(o14, "length");
});

o8("[[Value]] absent, empty descriptor", function () {
    var o14 = [];
    Object.defineProperty(o14, "length", {});
    o10(o14, "length");
});

o8("[[Value]] absent, no change", function () {
    var o14 = [];
    Object.defineProperty(o14, "length", { enumerable: false, configurable: false });
    o10(o14, "length");
});

o8("[[Value]] absent, set writable: true", function () {
    var o14 = [];
    Object.defineProperty(o14, "length", { writable: true });
    o10(o14, "length");
    o14.length = 10;
    o0("  length:", o14.length);
});

o8("[[Value]] absent, set writable: false", function () {
    var o14 = [];
    Object.defineProperty(o14, "length", { writable: false });
    o10(o14, "length");
    o14.length = 10;
    o0("  length:", o14.length);
});

o8("[[Value]] absent, set multiple -- configurable: false, writable: false", function () {
    var o14 = [];
    o3(function () {
        Object.defineProperty(o14, "length", { configurable: false, writable: false });
    });
    o10(o14, "length");
});

o8("[[Value]] absent, set multiple -- enumerable: false, writable: false", function () {
    var o14 = [];
    o3(function () {
        Object.defineProperty(o14, "length", { enumerable: false, writable: false });
    });
    o10(o14, "length");
});

o8("[[Value]] invalid 1", function () {
    var o14 = [0, 1, 2];
    o3(function () {
        Object.defineProperty(o14, "length", { value: Infinity });
    });
    o10(o14, "length");
    o0(" ", o14);
});

o8("[[Value]] invalid 2", function () {
    var o14 = [0, 1, 2];
    o3(function () {
        Object.defineProperty(o14, "length", { value: -3 });
    });
    o10(o14, "length");
    o0(" ", o14);
});

o8("newLen >= oldLen, set enumerable: true", function () {
    var o14 = [0, 1, 2];
    o3(function () {
        Object.defineProperty(o14, "length", { value: 5, enumerable: true });
    });
    o10(o14, "length");
    o0(" ", o14);
});

o8("newLen >= oldLen, set enumerable: false", function () {
    var o14 = [0, 1, 2];
    Object.defineProperty(o14, "length", { value: 5, enumerable: false });
    o10(o14, "length");
    o0(" ", o14);
});

o8("newLen >= oldLen, set configurable: true", function () {
    var o14 = [0, 1, 2];
    o3(function () {
        Object.defineProperty(o14, "length", { value: 5, configurable: true });
    });
    o10(o14, "length");
    o0(" ", o14);
});

o8("newLen >= oldLen, set configurable: false", function () {
    var o14 = [0, 1, 2];
    Object.defineProperty(o14, "length", { value: 5, configurable: false });
    o10(o14, "length");
    o0(" ", o14);
});

o8("newLen >= oldLen, set configurable: false, enumerable: false", function () {
    var o14 = [0, 1, 2];
    Object.defineProperty(o14, "length", { value: 5, configurable: false, enumerable: false });
    o10(o14, "length");
    o0(" ", o14);
});

o8("newLen >= oldLen, set configurable: false, enumerable: true", function () {
    var o14 = [0, 1, 2];
    Object.defineProperty(o14, "length", { value: 5, configurable: false, enumerable: true });
    o10(o14, "length");
    o0(" ", o14);
});

o8("newLen >= oldLen, set writable: true", function () {
    var o14 = [0, 1, 2];
    Object.defineProperty(o14, "length", { value: 5, writable: true });
    o10(o14, "length");
    o0(" ", o14);
    o14.length = 10;
    o0(" ", o14);
});

o8("newLen >= oldLen, set writable: false", function () {
    var o14 = [0, 1, 2];
    Object.defineProperty(o14, "length", { value: 5, writable: false });
    o10(o14, "length");
    o0(" ", o14);
    o14.length = 10;
    o0(" ", o14);
});

o8("newLen < oldLen, oldLen writable: false", function () {
    var o14 = [0, 1, 2];
    Object.defineProperty(o14, "length", { writable: false });

    o3(function () {
        Object.defineProperty(o14, "length", { value: 2, writable: true });
    });
    o10(o14, "length");
    o0(" ", o14);
    o14.length = 10;
    o0(" ", o14);
});

o8("newLen < oldLen, set enumerable: true", function () {
    var o14 = [0, 1, 2];
    o3(function () {
        Object.defineProperty(o14, "length", { value: 2, enumerable: true });
    });
    o10(o14, "length");
    o0(" ", o14);
});

o8("newLen < oldLen, set configurable: true", function () {
    var o14 = [0, 1, 2];
    o3(function () {
        Object.defineProperty(o14, "length", { value: 2, configurable: true });
    });
    o10(o14, "length");
    o0(" ", o14);
});

o8("newLen < oldLen, set writable: true", function () {
    var o14 = [0, 1, 2];
    Object.defineProperty(o14, "length", { value: 2, writable: true });
    o10(o14, "length");
    o0(" ", o14);
    o14.length = 10;
    o0(" ", o14);
});

o8("newLen < oldLen, set writable: false", function () {
    var o14 = [0, 1, 2];
    Object.defineProperty(o14, "length", { value: 2, writable: false });
    o10(o14, "length");
    o0(" ", o14);
    o14.length = 10;
    o0(" ", o14);
});

o8("newLen < oldLen, set writable: true, an element can't delete", function () {
    var o14 = [0, 1, 2, 3, 4, 5];
    Object.defineProperty(o14, 3, { configurable: false });
    o10(o14, 3);

    o3(function () {
        Object.defineProperty(o14, "length", { value: 2, writable: true });
    });
    o10(o14, "length");
    o0(" ", o14);
});

o8("newLen < oldLen, set writable: false, an element can't delete", function () {
    var o14 = [0, 1, 2, 3, 4, 5];
    Object.defineProperty(o14, 3, { configurable: false });
    o10(o14, 3);

    o3(function () {
        Object.defineProperty(o14, "length", { value: 2, writable: false });
    });
    o10(o14, "length");
    o0(" ", o14);
});

o8("newLen < oldLen, an accessor can't delete", function () {
    var o14 = [0, 1, 2, 3, 4, 5];
    Object.defineProperty(o14, 3, { get: function(){ return "get 3"}, configurable: false });
    o10(o14, 3);

    o3(function () {
        Object.defineProperty(o14, "length", { value: 2, writable: false });
    });
    o10(o14, "length");
    o0(" ", o14);
});

o8("newLen < oldLen, an element can't delete, newLen == it", function () {
    var o14 = [0, 1, 2, 3, 4, 5];
    Object.defineProperty(o14, 3, { configurable: false });
    o10(o14, 3);

    o3(function () {
        Object.defineProperty(o14, "length", { value: 3, writable: false });
    });
    o10(o14, "length");
    o0(" ", o14);
});

o8("newLen < oldLen, an element can't delete, but newLen beyond it", function () {
    var o14 = [0, 1, 2, 3, 4, 5];
    Object.defineProperty(o14, 3, { configurable: false });
    o10(o14, 3);

    Object.defineProperty(o14, "length", { value: 4, writable: false });
    o10(o14, "length");
    o0(" ", o14);
});

o8("newLen < oldLen, many attributes", function () {
    var o14 = [];
    for (var o15 = 0; o15 < 10; o15++) {
        if (o15 % 2) {
            Object.defineProperty(o14, o15, { value: o15, configurable: true });
        } else {
            var o16 = "get" + o15;
            Object.defineProperty(o14, o15, { get: function () { return o16; }, configurable: true });
        }
        o10(o14, o15);
    }
    o0(" ", o14);

    Object.defineProperty(o14, "length", { value: 4, writable: false });
    o10(o14, "length");
    o0(" ", o14);
    for (var o15 = 0; o15 < 10; o15++) {
        o10(o14, o15);
    }
});

o8("newLen < oldLen, many attributes, one cannot delete", function () {
    var o14 = [];
    for (var o15 = 0; o15 < 10; o15++) {
        if (o15 % 2) {
            var o17 = (o15 !== 5);
            Object.defineProperty(o14, o15, { value: o15, configurable: o17 });
        } else {
            var o16 = "get" + o15;
            Object.defineProperty(o14, o15, { get: function () { return o16; }, configurable: true });
        }
        o10(o14, o15);
    }
    o0(" ", o14);

    o3(function () {
        Object.defineProperty(o14, "length", { value: 4, writable: false });
    });
    o10(o14, "length");
    o0(" ", o14);
    for (var o15 = 0; o15 < 10; o15++) {
        o10(o14, o15);
    }
});

o8("newLen < oldLen, many attributes, data item cannot delete", function () {
    var o14 = [];
    for (var o15 = 0; o15 < 10; o15++) {
        if (o15 % 2) {
            Object.defineProperty(o14, o15, { value: o15, configurable: true });
        } else {
            var o16 = "get" + o15;
            Object.defineProperty(o14, o15, { get: function () { return o16; }, configurable: true });
        }
    }
    // append some data item not in attribute map
    for (var o15 = 10; o15 < 15; o15++) {
        o14[o15] = o15;
    }
    Object.seal(o14);
    o0(" ", o14);

    o3(function () {
        Object.defineProperty(o14, "length", { value: 4, writable: false });
    });
    o10(o14, "length");
    o0(" ", o14);
});

o8("newLen < oldLen, a few attributes, one cannot delete", function () {
    var o14 = [];
    for (var o15 = 0; o15 < 10; o15++) {
        if (o15 % 5) {
            o14[o15] = o15;
        } else {
            Object.defineProperty(o14, o15, { value: o15, configurable: false });
        }
    }
    o0(" ", o14);

    o3(function () {
        Object.defineProperty(o14, "length", { value: 3, writable: false });
    });
    o10(o14, "length");
    o0(" ", o14);
});

o8("newLen < oldLen, no attributes, data item cannot delete", function () {
    var o14 = [];
    for (var o15 = 0; o15 < 10; o15++) {
        o14[o15] = o15;
    }
    Object.seal(o14);
    o0(" ", o14);

    o3(function () {
        Object.defineProperty(o14, "length", { value: 3, writable: false });
    });
    o10(o14, "length");
    o0(" ", o14);
});

o8("[[Put]] length: newLen < oldLen, many attributes", function () {
    var o14 = [];
    for (var o15 = 0; o15 < 10; o15++) {
        if (o15 % 2) {
            Object.defineProperty(o14, o15, { value: o15, configurable: true });
        } else {
            var o16 = "get" + o15;
            Object.defineProperty(o14, o15, { get: function () { return o16; }, configurable: true });
        }
        o10(o14, o15);
    }
    o0(" ", o14);

    o14.length = 4;
    o10(o14, "length");
    o0(" ", o14);
    for (var o15 = 0; o15 < 10; o15++) {
        o10(o14, o15);
    }
});

o8("[[Put]] length: newLen < oldLen, many attributes, one cannot delete", function () {
    var o14 = [];
    for (var o15 = 0; o15 < 10; o15++) {
        if (o15 % 2) {
            var o17 = (o15 !== 5);
            Object.defineProperty(o14, o15, { value: o15, configurable: o17 });
        } else {
            var o16 = "get" + o15;
            Object.defineProperty(o14, o15, { get: function () { return o16; }, configurable: true });
        }
        o10(o14, o15);
    }
    o0(" ", o14);

    o14.length = 4; // This would throw in strict mode
    o10(o14, "length");
    o0(" ", o14);
    for (var o15 = 0; o15 < 10; o15++) {
        o10(o14, o15);
    }
});

o8("Add item beyond non-writable length", function () {
    var o14 = [0, 1, 2, 3, 4, 5];
    Object.defineProperty(o14, "length", { writable: false });

    o3(function () {
        Object.defineProperty(o14, 9, { value: 9, enumerable: true, configurable: true, writable: false });
    });
    o0(" ", o14);
});

o8("Add accessor beyond non-writable length", function () {
    var o14 = [0, 1, 2, 3, 4, 5];
    Object.defineProperty(o14, "length", { writable: false });

    o3(function () {
        Object.defineProperty(o14, 9, { get: function () { return "get9"; }, configurable: true });
    });
    o0(" ", o14);
});

o8("SetItem beyond non-writable length", function () {
    var o14 = [0, 1, 2, 3, 4, 5];
    Object.defineProperty(o14, "length", { writable: false });

    o14[9] = 9; // This would throw in strict mode
    o0(" ", o14);
});

o8("SetItem with name beyond non-writable length", function () {
    var o14 = [0, 1, 2, 3, 4, 5];
    Object.defineProperty(o14, "length", { writable: false });

    var name = "9";
    o14[name] = 9; // This would throw in strict mode
    o0(" ", o14);
});

o8("freeze should set length writable: false", function () {
    var o14 = [0, 1, 2, 3, 4, 5];
    Object.freeze(o14);
    o10(o14, "length");
});

o8("isFrozen should check length writable", function () {
    var o14 = [0, 1, 2, 3, 4, 5];
    for (var o15 = 0; o15 < o14.length; o15++) {
        Object.defineProperty(o14, o15, { writable: false, configurable: false });
    }
    Object.preventExtensions(o14);
    o0("isFrozen:", Object.isFrozen(o14)); // false, because length writable

    Object.defineProperty(o14, "length", { writable: false });
    o0("isFrozen:", Object.isFrozen(o14));
});

