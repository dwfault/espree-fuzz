//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = o1.o2;

var o3 = this;

var o4 = {};
function o5() {
    o0(" ", "Evaluate arg list");
}

function test(o7, o8) {
    o0(o7);
    try {
        o8();
    } catch (o9) {
        o0(" ", o9.name);
    }
    o0();
}

test("Global member missing", function () {
    o11(o5());
});

test("Global member undefined", function () {
    o11 = undefined;
    o11(o5());
});

test("Global member null", function () {
    o11 = null;
    o11(o5());
});

test("Global member is not callable", function () {
    o11 = 23;
    o11(o5());
});

if (Object.defineProperties) {
    test("Global member getter returns undefined", function () {
        Object.defineProperty(this, "bar", {
            get: function () { },
            configurable: true
        });
        o11(o5());
    });

    test("Global member getter returns null", function () {
        Object.defineProperty(this, "bar", {
            get: function () { return null; },
            configurable: true
        });
        o11(o5());
    });
}

o0();

test("Global member missing via property reference via dot syntax", function () {
    o3.o18(o5());
});

test("Global member undefined via property reference via dot syntax", function () {
    o3.o18 = undefined;
    o3.o18(o5());
});

test("Global member null via property reference via dot syntax", function () {
    o3.o18 = null;
    o3.o18(o5());
});

test("Global member is not callable via property reference via dot syntax", function () {
    o3.o18 = 23;
    o3.o18(o5());
});

if (Object.defineProperties) {
    test("Global member getter returns undefined via property reference via dot syntax", function () {
        Object.defineProperty(this, "baz", {
            get: function () { },
            configurable: true
        });
        o3.o18(o5());
    });

    test("Global member getter returns null via property reference via dot syntax", function () {
        Object.defineProperty(this, "baz", {
            get: function () { return null; },
            configurable: true
        });
        o3.o18(o5());
    });
}

o0();

function o19() { return "buz"; }

test("Global member missing via property reference via element access syntax", function () {
    o3[o19()](o5());
});

test("Global member undefined via property reference via element access syntax", function () {
    o3[o19()] = undefined;
    o3[o19()](o5());
});

test("Global member null via property reference via element access syntax", function () {
    o3[o19()] = null;
    o3[o19()](o5());
});

test("Global member is not callable via property reference via element access syntax", function () {
    o3[o19()] = 23;
    o3[o19()](o5());
});

if (Object.defineProperties) {
    test("Global member getter returns undefined via property reference via element access syntax", function () {
        Object.defineProperty(this, o19(), {
            get: function () { },
            configurable: true
        });
        o3[o19()](o5());
    });

    test("Global member getter returns null via property reference via element access syntax", function () {
        Object.defineProperty(this, o19(), {
            get: function () { return null; },
            configurable: true
        });
        o3[o19()](o5());
    });
}

o0();

test("Object member missing", function () {
    o4.o11(o5());
});

test("Object member undefined", function () {
    o4.o11 = undefined;
    o4.o11(o5());
});

test("Object member null", function () {
    o4.o11 = null;
    o4.o11(o5());
});

test("Object member is not callable", function () {
    o4.o11 = 23;
    o4.o11(o5());
});

if (Object.defineProperties) {
    test("Object member getter returns undefined", function () {
        Object.defineProperty(o4, "bar", {
            get: function () { },
            configurable: true
        });
        o4.o11(o5());
    });

    test("Object member getter returns null", function () {
        Object.defineProperty(o4, "bar", {
            get: function () { return null; },
            configurable: true
        });
        o4.o11(o5());
    });
}

o0();

test("Object element missing", function () {
    o4[3](o5());
});

test("Object element undefined", function () {
    o4[3] = undefined;
    o4[3](o5());
});

test("Object element null", function () {
    o4[3] = null;
    o4[3](o5());
});

test("Object element is not callable", function () {
    o4[3] = 23;
    o4[3](o5());
});

if (Object.defineProperties) {
    test("Object element getter returns undefined", function () {
        Object.defineProperty(o4, 3, {
            get: function () { },
            configurable: true
        });
        o4[3](o5());
    });

    test("Object element getter returns null", function () {
        Object.defineProperty(o4, 3, {
            get: function () { return null; },
            configurable: true
        });
        o4[3](o5());
    });
}
