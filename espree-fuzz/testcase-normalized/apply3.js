//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1) {
    o2.o3(o1);
}

function o4(o5) {
    try {
        o5();
    } catch(o6) {
        o0("Exception: " + o6.name + " : " + o6.o8);
    }
}

function o9() {
    var o10 = "";
    for (var o11 = 0; o11 < arguments.length; o11++) {
        if (o11 > 0) {
            o10 += ", ";
        }
        o10 += arguments[o11];
    }
    o0("Called with this: " + typeof this + "[" + this + "], args: [" + o10 + "]");
}

// 1. If IsCallable(func) is false, throw TypeError
var o14 = {
    apply: Function.prototype.apply
};
o0("--- f is not callable ---");
o4(function() {
    o14.apply();
});
o4(function() {
    o14.apply({}, [1, 2, 3]);
});

// 2. If argArray is null or undefined, call func with an empty list of arguments
var o18 = {};
o0("\n--- f.apply(x) ---");
o4(function() {
    o9.apply(o18);
});
o0("\n--- f.apply(x, null), f.apply(x, undefined) ---");
o4(function() {
    o9.apply(o18, null);
});
o4(function() {
    o9.apply(o18, undefined);
});

// 3. Type(argArray) is invalid
o0("\n--- f.apply(x, 123), f.apply(x, 'string'), f.apply(x, true) ---");
o4(function() {
    o9.apply(o18, 123);
});
o4(function() {
    o9.apply(o18, 'string');
});
o4(function() {
    o9.apply(o18, true);
});

// 5, 7 argArray.length is invalid
o0("\n--- f.apply(x, obj), obj.length is null/undefined/NaN/string/OutOfRange ---");
o4(function() {
    o9.apply(o18, {length: null});
});
o4(function() {
    o9.apply(o18, {length: undefined});
});
o4(function() {
    o9.apply(o18, {length: NaN});
});
o4(function() {
    o9.apply(o18, {length: 'string'});
});
o4(function() {
    o9.apply(o18, {length: 4294967295 + 1}); //UINT32_MAX + 1
});
o4(function() {
    o9.apply(o18, {length: -1});
});

o0("\n--- f.apply(x, arr), arr.length is huge ---");
var o21 = [];
o21.length = 2147483647; //INT32_MAX
o4(function() {
    o9.apply(o18, o21);
});
o0("\n--- f.apply(x, obj), obj.length is huge ---");
o4(function() {
    o9.apply(o18, {length: 4294967295}); //UINT32_MAX
});

// Normal usage -- argArray tests
o0("\n--- f.apply(x, arr) ---");
o9.apply(o18, []);
o9.apply(o18, [1]);
o9.apply(o18, [2, 3, NaN, null, undefined, false, "hello", o18]);

o0("\n--- f.apply(x, arr) arr.length increased ---");
var o22 = [1, 2];
o22.length = 5;
o9.apply(o18, o22);

o0("\n--- f.apply(x, arguments) ---");
function o23() {
    o9.apply(o18, arguments);
}
o23();
o23(1);
o23(2, 3, NaN, null, undefined, false, "hello", o18);

o0("\n--- f.apply(x, obj) ---");
o4(function() {
    o9.apply(o18, {
        length: 0
    });
});
o4(function() {
    o9.apply(o18, {
        length: 1,
        "0": 1
    });
});
o4(function() {
    o9.apply(o18, {
        length: 8,
        "0": 2,
        "1": 3,
        "2": NaN,
        "3": null,
        "4": undefined,
        "5": false,
        "6": "hello",
        "7": o18
    });
});

// Normal usage -- thisArg tests
function o24() {
    this.o25 = "hello";
}

o0("\n--- f.apply(), f.apply(null), f.apply(undefined), global x1 should be changed ---");
o24.apply();
o0("global x1 : " + o25);

o25 = 0;
o24.apply(null);
o0("global x1 : " + o25);

o25 = 0;
o24.apply(undefined);
o0("global x1 : " + o25);

o0("\n--- f.apply(x), global x1 should NOT be changed ---");
var o18 = {};
o25 = 0;
o24.apply(o18);
o0("global x1 : " + o25);
o0("o.x1 : " + o18.o25);

// apply on non-objects -- test thisArg
function o26(o5, o27) {

    var o28 = function(o1) {
        if (o27) {
            o0(o1);
        }
    };

    o4(function() {
        o28(o5.apply());
    });
    o4(function() {
        o28(o5.apply(null));
    });
    o4(function() {
        o28(o5.apply(undefined));
    });
    o4(function() {
        o28(o5.apply(123));
    });
    o4(function() {
        o28(o5.apply(true));
    });
    o4(function() {
        o28(o5.apply("string"));
    });
}

o0("\n--- f.apply(v), v is missing/null/undefined/123/true/'string' ---");
o26(o9);

//
// ES5: String.prototype.charCodeAt calls CheckObjectCoercible(thisArg). It should throw
// when thisArg is missing/null/undefined.
//
o0("\n--- f.apply(v), v is missing/null/undefined/123/true/'string', f: string.charCodeAt ---");
o26(String.prototype.charCodeAt, true);

o0("\n--- f.apply(v), v is missing/null/undefined/123/true/'string', f: string.charAt ---");
o26(String.prototype.charAt, true);

//
// Similarly, test thisArg behavior in Function.prototype.call
//
// call on non-objects -- test thisArg
function o32(o5, o27) {

    var o28 = function(o1) {
        if (o27) {
            o0(o1);
        }
    };

    o4(function() {
        o28(o5.call());
    });
    o4(function() {
        o28(o5.call(null));
    });
    o4(function() {
        o28(o5.call(undefined));
    });
    o4(function() {
        o28(o5.call(123));
    });
    o4(function() {
        o28(o5.call(true));
    });
    o4(function() {
        o28(o5.call("string"));
    });
}

o0("\n--- f.call(v), v is missing/null/undefined/123/true/'string' ---");
o32(o9);

o0("\n--- f.call(v), v is missing/null/undefined/123/true/'string', f: string.charCodeAt ---");
o32(String.prototype.charCodeAt, true);

o0("\n--- f.call(v), v is missing/null/undefined/123/true/'string', f: string.charAt ---");
o32(String.prototype.charAt, true);
