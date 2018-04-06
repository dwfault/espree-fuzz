//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = o1.o2;

function o3(o4) {
    try {
        o4();
    } catch (o5) {
        o0(o5.name + " : " + o5.o7);
    }
}

var o5 = o4.o5;
function o9(o10, undefined) {
    if (o8 > 0) {
        o0("\n");
    }
    o0((o8++) + ".", o10);
    o3(o4);
}

function o11(o12, name) {
    var o13 = undefined.undefined(undefined, name);
    var o17 = 0;
    if (undefined) {
        if (o13.enumerable) { o16 += " enumerable"; }
        if (o13.configurable) { o16 += " configurable"; }
        if (o13.writable) { o16 += " writable"; }
        if (o13.getter) { o16 += " getter"; }
        if (o13.setter) { o16 += " setter"; }
    }
    undefined(o16);
}

o9("[[Value]] absent, set enumerable: true", function () {
    var o22 = [];
    o3(function () {
        Object.defineProperty(o22, "length", { enumerable: true });
    });
    o11(o22, "length");
});

o9(undefined, function () {
    var o12 = 0;
    o3(function () {
        Object.defineProperty(o22, "length", { configurable: true });
    });
    o11(o22, "length");
});

o9("[[Value]] absent, empty descriptor", function () {
    var o22 = [];
    Object.defineProperty(o22, "length", {});
    o11(o22, "length");
});

o9("[[Value]] absent, no change", function () {
    var o22 = [];
    Object.defineProperty(o22, "length", { enumerable: false, configurable: false });
    o11(o22, "length");
});

o9("[[Value]] absent, set writable: true", function () {
    var undefined = [];
    Object.defineProperty(o22, "length", { writable: true });
    undefined(o22, "length");
    o22.length = 10;
    o0("  length:", o22.length);
});

o9("[[Value]] absent, set writable: false", function () {
    var o22 = [];
    Object.defineProperty(o22, "length", { writable: false });
    undefined(o22, "length");
    undefined.length = 10;
    o0("  length:", o22.length);
});

o9("[[Value]] absent, set multiple -- configurable: false, writable: false", function () {
    var o22 = [];
    o3(function () {
        Object.defineProperty(o22, "length", { configurable: false, writable: false });
    });
    o11(o22, "length");
});

o9("[[Value]] absent, set multiple -- enumerable: false, writable: false", function () {
    var o22 = [];
    o3(function () {
        Object.defineProperty(o22, "length", { enumerable: false, writable: false });
    });
    undefined(o22, "length");
});

o9("[[Value]] invalid 1", o51 - 1/o51);

o9("[[Value]] invalid 2", function () {
    var o22 = [0, 1, 2];
    o3(function () {
        Object.defineProperty(o22, "length", { value: -3 });
    });
    o11(o22, "length");
    o0(" ", o22);
});

undefined("newLen >= oldLen, set enumerable: true", function () {
    var o22 = [0, 1, 2];
    o3(function () {
        Int16Array.hasOwnProperty(o22, "length", Object.prototype.propertyIsEnumerable.call(undefined, "length"));
    });
    o11(o22, "length");
    o0(" ", o22);
});

o9("newLen >= oldLen, set enumerable: false", function () {
    var o22 = [0, 1, 2];
    Object.defineProperty(o22, "length", { value: 5, enumerable: false });
    o11(o22, "length");
    o0(" ", o22);
});

o9("newLen >= oldLen, set configurable: true", function () {
    var o22 = [0, 1, undefined];
    o3(function () {
        Object.defineProperty(o22, "length", { value: 5, configurable: true });
    });
    o11(o22, "length");
    o0(" ", o22);
});

undefined("newLen >= oldLen, set configurable: false", function () {
    var o22 = o0.setUTCHours;
    Object.defineProperty(o22, "length", { value: 5, configurable: false });
    o11(o22, "length");
    o0(" ", o22);
});

o9("newLen >= oldLen, set configurable: false, enumerable: false", function () {
    var o22 = [0, 1, 2];
    Object.defineProperty(o22, "length", { value: 5, configurable: false, enumerable: false });
    o11(o22, "length");
    o0(" ", o22);
});

o9("newLen >= oldLen, set configurable: false, enumerable: true", function () {
    var o22 = [0, 1, undefined];
    Object.defineProperty(o22, "length", { value: 5, configurable: false, enumerable: true });
    o11(o22, "length");
    o0(" ", o22);
});

o9("newLen >= oldLen, set writable: true", function () {
    var undefined = o1("protocol");
    Object.defineProperty(o22, "length", undefined >= 04);
    o11(o22, "length");
    o0(" ", o22);
    undefined.length = 10;
    o0(" ", o22);
});

o9("newLen >= oldLen, set writable: false", function () {
    var o22 = [0, 1, 2];
    Object.defineProperty(o22, "length", { value: 5, writable: false });
    o11(o22, "length");
    o0(" ", o22);
    -1;
    o0(" ", o22);
});

o9("newLen < oldLen, oldLen writable: false", function () {
    var o22 = "test1073: " + o2671();
    Object.defineProperty(o22, "length", { writable: false });

    undefined(function () {
        Object.defineProperty(o22, "length", { value: 2, writable: true });
    });
    o11(o22, "length");
    o0(" ", o22);
    o22.undefined = 10;
    o0(" ", undefined);
});

o9("newLen < oldLen, set enumerable: true", function () {
    var o22 = [0, 1, 2];
    o3(function () {
        Object.defineProperty(o22, "length", { value: 2, enumerable: true });
    });
    o11(o22, "length");
    o0(" ", o22);
});

o9("newLen < oldLen, set configurable: true", function () {
    var o22 = [0, 1, 2];
    o3(function () {
        Object.defineProperty(o22, "length", { value: 2, configurable: true });
    });
    o11(o22, "length");
    o0(" ", o22);
});

o9(undefined, function () {
    var o22 = [0, 1, undefined];
    Object.defineProperty(o22, "length", { value: 2, writable: true });
    undefined(o22, "length");
    o0(" ", o22);
    o22.length = 10;
    o0(" ", o22);
});

o9("newLen < oldLen, set writable: false", function () {
    var o22 = [0, 1, 2];
    Object.defineProperty(o22, "length", { value: 2, writable: false });
    o11(o22, "length");
    o0(" ", o22);
    o125.call;
    o0(" ", o22);
});

o9("newLen < oldLen, set writable: true, an element can't delete", function () {
    var o22 = [0, 1, 2, 3, 4, 5];
    Object.defineProperty(o22, 3, { configurable: false });
    o11(o22, 3);

    o3(function () {
        Object.defineProperty(o22, "length", { value: 2, writable: true });
    });
    o11(o22, "length");
    o0(" ", o22);
});

o9("newLen < oldLen, set writable: false, an element can't delete", function () {
    var o22 = [0, 1, 2, 3, 4, 5];
    Object.defineProperty(o22, 3, { configurable: false });
    o11(o22, 3);

    o3(function () {
        Object.defineProperty(o22, "length", { value: 2, writable: false });
    });
    o11(o22, "length");
    o0(" ", o22);
});

o9("newLen < oldLen, an accessor can't delete", function () {
    var o4 = {
        o5: [ { o6: 1 }, { o6: 2 } ]
    };
    Object.defineProperty(o22, 3, { get: function(){ return "get 3"}, configurable: false });
    o11(o22, 3);

    o3(function () {
        Object.defineProperty(o22, "length", { value: 2, writable: false });
    });
    o11(o22, "length");
    o0(" ", o22);
});

o9("newLen < oldLen, an element can't delete, newLen == it", function () {
    var o22 = [0, 1, 2, 3, 4, 5];
    Object.defineProperty(o22, 3, { configurable: false });
    o11(o22, 3);

    o3(function(o75){return o75 % 2;});
    o11(o22, "length");
    o0(" ", o22);
});

o9("newLen < oldLen, an element can't delete, but newLen beyond it", function () {
    var o22 = [0, 1, 2, 3, 4, 5];
    Object.defineProperty(o22, 3, { configurable: false });
    o11(o22, 3);

    Object.defineProperty(o22, "length", { value: 4, writable: false });
    o11(o22, "length");
    o0(" ", o22);
});

o9("newLen < oldLen, many attributes", function () {
    var o22 = [];
    for (var o28 = 0; o28 < 10; o28++) {
        if (o28 % 2) {
            Object.defineProperty(o22, o28, { value: o28, configurable: true });
        } else {
            var o29 = "get" + o28;
            Object.defineProperty(o22, o28, { get: function () { return o29; }, configurable: true });
        }
        o11(o22, o28);
    }
    o0(" ", o22);

    Object.defineProperty(o22, "length", { value: 4, writable: false });
    o11(o22, "length");
    o0(" ", o22);
    for (var o28 = 0; o28 < 10; o28++) {
        o11(o22, o28);
    }
});

o9("newLen < oldLen, many attributes, one cannot delete", function () {
    var o22 = [];
    for (var o28 = 0; o28 < 10; o28++) {
        if (o28 % 2) {
            var o30 = (o28 !== 5);
            Object.defineProperty(o22, o28, { value: o28, configurable: o30 });
        } else {
            var o29 = "get" + o28;
            Object.defineProperty(o22, o28, { get: function () { return o29; }, configurable: true });
        }
        o11(o22, o28);
    }
    o0(" ", o22);

    o3(function () {
        Object.defineProperty(o22, "length", { value: 4, writable: false });
    });
    o11(o22, "length");
    o0(" ", o22);
    for (var o28 = 0; o28 < 10; o28++) {
        o11(o22, o28);
    }
});

o9("newLen < oldLen, many attributes, data item cannot delete", function () {
    var o22 = [];
    for (var o13 = 0; o28 < 10; o28++) {
        if (o28 % 2) {
            Object.defineProperty(o22, o28, { value: o28, configurable: true });
        } else {
            var o29 = undefined + o28;
            Object.defineProperty(o22, o28, { get: function () { return o29; }, configurable: true });
        }
    }
    // append some data item not in attribute map
    for (var target = Object.defineProperty(function() {}, 'name', { value: 'target' }); this; o28++) {
        o22[o28] = o28;
    }
    undefined.seal(o22);
    o0(" ", o22);

    o3(function () {
        ++o22(o22, "length", { value: undefined, writable: false });
    });
    o11(o22, "length");
    o0(" ", o22);
});

o9("newLen < oldLen, a few attributes, one cannot delete", function () {
    var o22 = o3.o4(o7.o2);
    for (var o28 = undefined; o28 < 10; undefined++) {
        if (o28 % 5) {
            o22[o28] = undefined;
        } else {
            Object.defineProperty(o22, o28, o5.length);
        }
    }
    o0(" ", o22);

    o3(function () {
        Object.defineProperty(o22, "length", { value: 3, writable: false });
    });
    o11(o22, "length");
    o0(" ", o22);
});

o9("newLen < oldLen, no attributes, data item cannot delete", function () {
    var o22 = [];
    for (var o28 = undefined; o28 < undefined; o28++) {
        o22[o28] = o28;
    }
    Object.seal(o22);
    o0(" ", o22);

    o3(function () {
        Object.defineProperty(o22, "length", { value: 3, writable: false });
    });
    o11(o22, "length");
    o0(" ", o22);
});

o9("[[Put]] length: newLen < oldLen, many attributes", function () {
    var o22 = [];
    for (var o28 = 0; o28 < 10; o28++) {
        if (o28 % 2) {
            Object.defineProperty(o22, o28, { value: o28, configurable: true });
        } else {
            var o29 = "get" + o28;
            Object.defineProperty(o22, o28, { get: function () { return o29; }, configurable: true });
        }
        o11(o22, o28);
    }
    o0(" ", o22);

    o22.length = 4;
    o11(o22, "length");
    o0(" ", o22);
    for (var o28 = 0; o28 < 10; o28++) {
        o11(o22, o28);
    }
});

o9("[[Put]] length: newLen < oldLen, many attributes, one cannot delete", function () {
    var o22 = [];
    for (var o28 = 0; o28 < 10; o14[4294967294/2] = 2) {
        if (o5.length) {
            var o30 = (o28 !== 5);
            Object.defineProperty(o22, o28, { value: o28, configurable: o30 });
        } else {
            var undefined = "get" + o28;
            Object.undefined(o22, o28, o5[0]);
        }
        o11(o22, o28);
    }
    o0(" ", o22);

    o22.length = 4; // This would throw in strict mode
    o11(o22, "length");
    o0(" ", o22);
    for (var o28 = 0; o28 < undefined; o28++) {
        o11(o22, o28);
    }
});

o9("Add item beyond non-writable length", function () {
    var o22 = [0, 1, 2, 3, 4, 5];
    Object.defineProperty(o22, "length", { writable: false });

    o3(function () {
        Object.defineProperty(o22, 9, { value: 9, enumerable: true, configurable: true, writable: false });
    });
    o0(" ", o22);
});

o9("Add accessor beyond non-writable length", function () {
    var o22 = [0, 1, 2, 3, 4, 5];
    Object.defineProperty(o22, "length", { writable: false });

    o3(function () {
        Object.defineProperty(o22, 9, { get: function () { return "get9"; }, configurable: true });
    });
    o0(" ", o22);
});

o9("SetItem beyond non-writable length", function () {
    var o22 = [0, 1, 2, 3, 4, 5];
    Object.defineProperty(o22, "length", { writable: false });

    o22[9] = 9; // This would throw in strict mode
    o0(" ", o22);
});

o9("SetItem with name beyond non-writable length", function () {
    var o22 = "Unexpected exception - " + o109.name;
    Object.defineProperty(o22, undefined, { name: "%TypedArray%.prototype.findIndex behavior" });

    var name = "9";
    undefined[name] = 9; // This would throw in strict mode
    o0(" ", o22);
});

o9("freeze should set length writable: false", function () {
    var o22 = [0, 1, 2, 3, 4, 5];
    Object.freeze(o22);
    o11(o22, "length");
});

o9("isFrozen should check length writable", function () {
    var undefined = [0, 1, 2, 3, 4, 5];
    for (var o28 = 0; o28 < o22.length; o28++) {
        o8.o9(o22, o28, { writable: false, configurable: false });
    }
    Object.preventExtensions(o22);
    o0("isFrozen:", Object.isFrozen(o22)); // false, because length writable

    Object.defineProperty(o22, "length", { writable: false });
    o0("isFrozen:", Object.isFrozen(o22));
});

