
var o0 = {
    toString() {
        throw new Error("propertyKey.toString is called.");
    }
};

function o3(o4, o5) {
    var o6 = null;
    try {
        o4();
    } catch (o7) {
        o6 = o7;
    }
    if (!o6)
        throw new Error("not thrown.");
    if (String(o6) !== o5)
        throw new Error("bad error: " + String(o6));
}

// GetByVal.
(function () {
    var o9 = null;
    var o10 = false;
    var o11 = {
        toString() {
            o10 = true;
            return "value";
        }
    };
    var o12 = {
        get value() {
        },
        set value(o14) {
        }
    };
    Object.defineProperty(o12, '', {
        get: function () {
            o9 = "getter for '' is called.";
        }
    });

    function test(o12, o11) {
        o12[o11];
    }
    noInline(test);

    o3(function () { test(o12, o0); }, "Error: propertyKey.toString is called.");
    if (o9)
        throw new Error(o9);
    o10 = false;
    o3(function () { test(null, o0); }, "TypeError: null is not an object (evaluating 'object[property]')");
    if (o10)
        throw new Error("toString is called.");
}());

// GetByVal DFG.
(function () {
    var o9 = null;
    var o10 = false;
    var o11 = {
        toString() {
            o10 = true;
            return "value";
        }
    };
    var o12 = {
        get ""() {
            o9 = "getter for '' is called.";
        },
        set ""(o14) {
            o9 = "setter for '' is called.";
        },

        get value() {
        },
        set value(o14) {
        }
    };

    function test(o12, o11) {
        o12[o11];
    }
    noInline(test);

    for (var o20 = 0; o20 < 10000; ++o20)
        test(o12, o11);

    o3(function () { test(o12, o0); }, "Error: propertyKey.toString is called.");
    if (o9)
        throw new Error(o9);
    o10 = false;
    o3(function () { test(null, o0); }, "TypeError: null is not an object (evaluating 'object[property]')");
    if (o10)
        throw new Error("toString is called.");
}());


// GetByValString.
(function () {
    var o9;
    var o10 = false;
    var o11 = {
        toString() {
            o10 = true;
            return "value";
        }
    };
    function test(o21, length, o11) {
        var o23 = 0;
        for (var o20 = 0; o20 < length; ++o20)
            o23 += o21[o11];
        return o23;
    }
    noInline(test);

    Object.defineProperty(String.prototype, "", {
        get: function () {
            o9 = "getter for '' is called.";
        }
    });

    var o21 = [1, 2, 3];
    for (var o20 = 0; o20 < 100000; ++o20)
        test(o21, o21.length, 0);

    var o21 = [1, false, 3];
    for (var o20 = 0; o20 < 100000; ++o20)
        test(o21, o21.length, 1);

    test("hello", "hello".length, 2);
    o3(function () { test("hello", "hello".length, o0); }, "Error: propertyKey.toString is called.");
    if (o9)
        throw new Error(o9);
    o10 = false;
    o3(function () { test(null, 20, o0); }, "TypeError: null is not an object (evaluating 'array[property]')");
    if (o10)
        throw new Error("toString is called.");
}());
