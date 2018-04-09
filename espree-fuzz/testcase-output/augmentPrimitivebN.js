//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// FIXME:
// The diagnostic produced by getters is correct, but the setters
// issue assertion failures and other sorts of odd behavior.
// This problem should be fixed, the commented-out calls to obj[...] = {}
// should be restored, and this test should be rebaselined.

var o0 = Array.prototype;

var o3 = function() {
    o0("  Type: " + (typeof this));
    o0("    Is Object:  " + (this instanceof Object));
    o0("    Is Number:  " + (this instanceof Number));
    o0("    Is Boolean: " + (this instanceof Boolean));
    o0("    Is String:  " + (this instanceof String));
}

var o4 = function() {
    "use strict";
    o0("  Type: " + (typeof this));
    o0("    Is Object:  " + (this instanceof Object));
    o0("    Is Number:  " + (this instanceof Number));
    o0("    Is Boolean: " + (this instanceof Boolean));
    o0("    Is String:  " + (this instanceof String));
}

var o5 = function() {
    o0("Executing getter:");
    o3.apply(this, arguments);
    return true;
}

var o6 = function() {
    "use strict";
    o0("Executing getter:");
    o4.apply(this, arguments);
    return true;
}

var o7 = function(o8) {
    o0("Executing setter:");
    o3.apply(this, arguments);
}

var o21 = 0;

var o10 = function(o8) {
    o0("Executing function:");
    o3.apply(this, arguments);
    return function () {
        o0("  ... returning from function");
    }
}

var o11 = function(o8) {
    "use strict";
    o0("Executing function:");
    o4.apply(this, arguments);
    return function () {
        o0("  ... returning from function");
    }
}

Object.defineProperties(
    Number.prototype, {
        "foo": {
            get: o5,
            //set: setDiag
        },
        "foo_strict": {
            get: o6,
            //set: setDiag_strict
        },
        "bar": {
            get: o10
        },
        "bar_strict": {
            get: o11
        },
        "42": {
            get: o5,
            //set: setDiag
        },
        "142": {
            // 142 means "42_strict"
            get: o6,
            //set: setDiag_strict
        },
        "43": {
            get: o10
        },
        "143": {
            // 143 means "43_strict"
            get: o11
        },
        "-42": {
            get: o5,
            //set: setDiag
        },
        "-142": {
            // -142 means "-42_strict"
            get: o6,
            //set: setDiag_strict
        },
        "-43": {
            get: o10
        },
        "-143": {
            // -143 means "-43_strict"
            get: o11
        }
    });

Object.defineProperties(
    Boolean.prototype, {
        "foo": {
            get: o5,
            //set: setDiag
        },
        "foo_strict": {
            get: o6,
            //set: setDiag_strict
        },
        "bar": {
            get: o10
        },
        "bar_strict": {
            get: o11
        },
        "42": {
            get: o5,
            //set: setDiag
        },
        "142": {
            // 142 means "42_strict"
            get: o6,
            //set: setDiag_strict
        },
        "43": {
            get: o10
        },
        "143": {
            // 143 means "43_strict"
            get: o11
        },
        "-42": {
            get: o5,
            //set: setDiag
        },
        "-142": {
            // -142 means "-42_strict"
            get: o6,
            //set: setDiag_strict
        },
        "-43": {
            get: o10
        },
        "-143": {
            // -143 means "-43_strict"
            get: o11
        }
    });

Object.defineProperties(
    String.prototype, {
        "foo": {
            get: o5,
            //set: setDiag
        },
        "foo_strict": {
            get: o6,
            //set: setDiag_strict
        },
        "bar": {
            get: o10
        },
        "bar_strict": {
            get: o11
        },
        "42": {
            get: o5,
            //set: setDiag
        },
        "142": {
            // 142 means "42_strict"
            get: o6,
            //set: setDiag_strict
        },
        "43": {
            get: o10
        },
        "143": {
            // 143 means "43_strict"
            get: o11
        },
        "-42": {
            get: o5,
            //set: setDiag
        },
        "-142": {
            // -142 means "-42_strict"
            get: o6,
            //set: setDiag_strict
        },
        "-43": {
            get: o10
        },
        "-143": {
            // -143 means "-43_strict"
            get: o11
        }
    });

var o12 = function(o13, o14) {
    var o15 = "f";
    var o16 = "b";

    o0("** Testing " + o14 + ", property 'foo' (value) **");
    o13.o17;
    o13[o15 + "oo"];
    typeof o13.o17;
    o13.o17 instanceof Object;
//  obj.foo = {};
    o0("");

    o0("** Testing " + o14 + ", property 'bar' (function) **");
    o13.o18();
    o13[o16 + "ar"]();
    typeof o13.o18();
    o13.o18() instanceof Object;
    o0("");

    o0("** Testing " + o14 + ", property 42 (value) **");
    o13[42];
    o13[41 + 1];
    typeof o13[42];
    o13[42] instanceof Object;
//  obj[42] = {};
    o0("");

    o0("** Testing " + o14 + ", property 43 (function) **");
    o13[43]();
    o13[45 - 2]();
    typeof o13[43]();
    o13[43]() instanceof Object;
    o0("");

    o0("** Testing " + o14 + ", property -42 (value) **");
    o13[-42];
    o13[-41 - 1];
    typeof o13[-42];
    o13[-42] instanceof Object;
//  obj[-42] = {};
    o0("");

    o0("** Testing " + o14 + ", property -43 (function) **");
    o13[-43]();
    o13[-45 + 2]();
    typeof o13[-43]();
    o13[-43]() instanceof Object;
    o0("");
}

var o19 = function(o13, o14) {
    var o15 = "f";
    var o16 = "b";

    o0("** Testing " + o14 + ", property 'foo_strict' (value, strict mode) **");
    o13.o20;
    o13[o15 + "oo_strict"];
    typeof o13.o20;
    o13.o20 instanceof Object;
//  obj.foo_strict = {};
    o0("");

    o0("** Testing " + o14 + ", property 'bar_strict' (function, strict mode) **");
    o13.o21();
    o13[o16 + "ar_strict"]();
    typeof o13.o21();
    o13.o21() instanceof Object;
    o0("");

    o0("** Testing " + o14 + ", property 142 (value, strict mode) **");
    o13[142];
    o13[141 + 1];
    typeof o13[142];
    o13[142] instanceof Object;
//  obj[142] = {};
    o0("");

    o0("** Testing " + o14 + ", property 143 (function, strict mode) **");
    o13[143]();
    o13[145 - 2]();
    typeof o13[143]();
    o13[143]() instanceof Object;
    o0("");

    o0("** Testing " + o14 + ", property -142 (value, strict mode) **");
    o13[-142];
    o13[-141 - 1];
    typeof o13[-142];
    o13[-142] instanceof Object;
//  obj[-142] = {};
    o0("");

    o0("** Testing " + o14 + ", property -143 (function, strict mode) **");
    o13[-143]();
    o13[-145 + 2]();
    typeof o13[-143]();
    o13[-143]() instanceof Object;
    o0("");
}

var o22 = 3;
o12(o22, "int");
o19(o22, "int");

var o23 = (1 << 30) + 1;
o12(o23, "large int");
o19(o23, "large int");

var o24 = 3.14;
o12(o24, "float");
o19(o24, "float");

var o16 = true;
o12(o16, "bool");
o19(o16, "bool");

var o25 = "Hello";
o12(o25, "string");
o19(o25, "string");
