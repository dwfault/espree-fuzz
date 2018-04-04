//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = o1.o2;

function o3(o4, o5) {
    try {
        Object.defineProperty(o4, o5, {
            get: function () { o0(" ", "FAIL: THIS SHOULD NOT BE CALLED"); },
            configurable: false,
            enumerable: false
        });
    } catch (o11) {
        o0(" ", "pass", "...can not defineProperty...", "(" + o5 + ")");
        return;
    }
    o0(" ", o4.hasOwnProperty(o5) && !o4.propertyIsEnumerable(o5) ? "pass" : "fail",
        "(" + o5 + ")");
}

var o14 = {
    "empty object": function () {
        return {};
    },

    "empty array": function () {
        return [];
    },

    "number object": function () {
        return new Number(123);
    },

    "string object": function () {
        return new String("test");
    },

    "Object": function () {
        return Object;
    },

    "global object": function () {
        return this;
    },

    "object with 1 property": function () {
        return {
            o17: "world"
        };
    },

    "object with many properties": function () {
        var o4 = {};
        for (var o18 = 0; o18 < 50; o18++) {
            Object.defineProperty(o4, "prop" + o18, {
                value: "value" + o18
            });
        }
        return o4;
    },

    "object with accessor": function () {
        return {
            get o17() { return "world"; },
            0: "value0",
            1: "value1",
            2: "value2"
        };
    },

    "array": function () {
        return [0, 1, 2, 3];
    },

    "es5 array": function () {
        var o4 = [0, 1, 2, 3];
        Object.defineProperty(o4, 1, {
            get: function() { return "getter1"; }
        });
        return o4;
    },
};

var o20 = [
    "abc",
    -1,
    0,
    1,
    10,
    0xfffffffe,
    "x y",
    "x\u0000y",
    "x\u0000\u0000y"
];

for (var o21 in o14) {
    o0("Test " + o21);
    for(var o5 in o20) {
        o3(o14[o21](), o20[o5]);
    }
}
