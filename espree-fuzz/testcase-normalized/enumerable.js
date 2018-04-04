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

var o8 = 0;
function o9(o10, o4) {
    if (o8 > 0) {
        o0("\n");
    }
    o0((o8++) + ".", o10);
    o3(o4);
}

// If needed, echo lines sorted to remove dependency on order.
function o11(o12, sort) {
    if (sort) {
        o12.sort();
    }
    for(var o14 = 0; o14 < o12.length; o14++) {
        o0(o12[o14]);
    }
}

// dump own property descriptors of obj
function o16(o17) {
    var o12 = [];
    var o18 = Object.getOwnPropertyNames(o17);
    for (var o21 in o18) {
        var name = o18[o21];
        var o22 = Object.getOwnPropertyDescriptor(o17, name);
        var o24 = "  " + name + ": " + o17[name];
        if (o22.enumerable) { o24 += " enumerable"; }
        if (o22.configurable) { o24 += " configurable"; }
        if (o22.writable) { o24 += " writable"; }
        if (o22.getter) { o24 += " getter"; }
        if (o22.setter) { o24 += " setter"; }
        o12.push(o24);
    }
    o11(o12);
}

// dump obj through for-in enumerator
function o31(o17) {
    var o12 = [];
    for (var o21 in o17) {

        // add property during enumeration
        if (!o17[500]) {
            o17[500] = "Should not enumerate 500";
            o17[600] = "Should not enumerate 600";
            Object.defineProperty(o17, "700", {
                get: function () { return "Should not enumerate 700"; },
                enumerable: true,
                configurable: true
            });
        }

        o12.push("  " + o21 + ": " + o17[o21]);
    }
    o11(o12);
}

// add a bunch of data/attribute properties with different attributes
function o34(o35, o36) {
    Object.defineProperty(o35, o36 + "10", {
        value: "value 10"
    });
    Object.defineProperty(o35, o36 + "11", {
        value: "value 11",
        enumerable: true
    });
    Object.defineProperty(o35, o36 + "12", {
        value: "value 12",
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(o35, o36 + "13", {
        value: "value 13",
        enumerable: true,
        configurable: true,
        writable: true
    });

    Object.defineProperty(o35, o36 + "20", {
        get: function() { return "get 20"; },
    });
    Object.defineProperty(o35, o36 + "21", {
        get: function () { return "get 21"; },
        enumerable: true,
    });
    Object.defineProperty(o35, o36 + "22", {
        get: function () { return "get 22"; },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(o35, o36 + "25", {
        set: function() { o0("do not call 25"); },
    });
    Object.defineProperty(o35, o36 + "26", {
        set: function() { o0("do not call 26"); },
        enumerable: true,
    });
    Object.defineProperty(o35, o36 + "27", {
        set: function() { o0("do not call 27"); },
        enumerable: true,
        configurable: true
    });
}

function o39(o35) {
    o34(o35, "xx");
    o34(o35, "1");
    o0("  --- properties ---");
    o16(o35);
    o0("  --- for-in enumerate ---");
    o31(o35);
}

o9("Test with object", function() {
    o39({
        o40: -12,
        o41: "hello",
        1: undefined,
        3: null
    });
});

o9("Test with array", function() {
    o39([
        -12, "hello", undefined, null
    ]);
});

// Test Object.defineProperties, Object.create
function o43(o44) {
    Object.defineProperties(o44, {
        name: { value: "SHOULD_NOT_enumerate_prototype" },
        0: { get: function() { return "get 0"; } },
        3: { value: 3 },
        1: { get: function() { return "get 1"; }, enumerable: true },
        5: { value: 5, enumerable: true },
        2: { get: function() { return this.name; }, enumerable: true },
    });

    var o35 = Object.create(o44, {
        name: { value: "correct_original_instance" },
        10: { get: function() { return "get 10"; } },
        13: { value: 13 },
        11: { get: function() { return "get 11"; }, enumerable: true },
        15: { value: 15, enumerable: true },
        12: { get: function() { return this.name; }, enumerable: true },        
    });

    o0("*** Prototype ***");
    o16(o44);
    o0("*** Object ***");
    o16(o35);
    o0("*** for in ***");
    o31(o35);
}

o9("Test prototype with object", function() {
    o43({});
});

o9("Test prototype with array", function() {
    o43([]);
});

// Test String index property names
function o47(o35) {
    // Set 0, 1, 2
    o3(function () {
        o35[0] = "x";
        o0(" ", 0, o35[0]);
    });
    o3(function () {
        Object.defineProperty(o35, 1, { value: "y" });
        o0(" ", 1, o35[1]);
    });
    o3(function () {
        Object.defineProperty(o35, 2, { get: function () { return "z"; } });
        o0(" ", 2, o35[2]);
    });

    // Set 6, 7
    o3(function () {
        o35[6] = "6";
        o0(" ", 6, o35[6]);
    });
    o3(function () {
        Object.defineProperty(o35, 7, { get: function () { return "7"; }, enumerable: true });
        o0(" ", 7, o35[7]);
    });

    o3(function () {
        o0("  --- Properties ---");
        o16(o35);
    });
    o3(function () {
        o0("  --- Enumerate ---");
        o31(o35);
    });
}

o9("Test String with String value", function() {
    o47("abcd");
});

o9("Test String with String object", function() {
    o47(new String("abcd"));
});


o9("Testing forin caching when forin changes from array to Es5array", function() {

var o49 = [4, 5, 6];
for (var o14 in o49) {
    o1.o2(o14);
}

// Adding a numeric property with attributes should create an ES5 array.
Object.defineProperty(o49, "8", { get: function () { return 34; }, enumerable: true });

for (var o14 in o49) {
    o1.o2(o14);
}
}
);

o9("Testing RegExp Number String Boolean Object Constructor length property attributes", function() {

function o50()
{
    for(var o14 in arguments[0])
    {
        o1.o2(o14 + ":" + arguments[0][o14]);
    }
}

o50(Object.getOwnPropertyDescriptor(RegExp, "length"));
o50(Object.getOwnPropertyDescriptor(String, "length"));
o50(Object.getOwnPropertyDescriptor(Boolean, "length"));
o50(Object.getOwnPropertyDescriptor(Number, "length"));
o50(Object.getOwnPropertyDescriptor(Object, "length"));

});