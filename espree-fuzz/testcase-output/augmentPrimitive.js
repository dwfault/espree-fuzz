//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// FIXME:
// The diagnostic produced by getters is correct, but the setters
// issue assertion failures and other sorts of odd behavior.
// This problem should be fixed, the commented-out calls to obj[...] = {}
// should be restored, and this test should be rebaselined.

var o0 = o1.o2;

var o3 = function() {
    o0("  Type: " + (typeof this));
    o0("    Is Object:  " + (this instanceof Object));
    o0("    Is Number:  " + (this instanceof Number));
    o0("    Is Boolean: " + (this instanceof Boolean));
    o0("    Is String:  " + (this instanceof String));
}

var o8 = function() {
    "use strict";
    o0("  Type: " + (typeof this));
    o0("    Is Object:  " + (this instanceof Object));
    o0("    Is Number:  " + (this instanceof Number));
    o0("    Is Boolean: " + (this instanceof Boolean));
    o0("    Is String:  " + (this instanceof String));
}

var o9 = function() {
    o0("Executing getter:");
    o3.apply(this, arguments);
    return true;
}

var o12 = function() {
    "use strict";
    o0("Executing getter:");
    o8.apply(this, arguments);
    return true;
}

var o13 = function(o14) {
    o0("Executing setter:");
    o3.apply(this, arguments);
}

var o15 = function(o14) {
    "use strict";
    o0("Executing setter:");
    o8.apply(this, arguments);
}

var o16 = function(o14) {
    o0("Executing function:");
    o3.apply(this, arguments);
    return function () {
        o0("  ... returning from function");
    }
}

var o17 = function(o14) {
    "use strict";
    o0("Executing function:");
    o8.apply(this, arguments);
    return function () {
        o0("  ... returning from function");
    }
}

Object.defineProperties(
    Number.prototype, {
        "foo": {
            get: o9,
            //set: setDiag
        },
        "foo_strict": {
            get: o12,
            //set: setDiag_strict
        },
        "bar": {
            get: o16
        },
        "bar_strict": {
            get: o17
        },
        "42": {
            get: o9,
            //set: setDiag
        },
        "142": {
            // 142 means "42_strict"
            get: o12,
            //set: setDiag_strict
        },
        "43": {
            get: o16
        },
        "143": {
            // 143 means "43_strict"
            get: o17
        },
        "-42": {
            get: o9,
            //set: setDiag
        },
        "-142": {
            // -142 means "-42_strict"
            get: o12,
            //set: setDiag_strict
        },
        "-43": {
            get: o16
        },
        "-143": {
            // -143 means "-43_strict"
            get: o17
        }
    });

Object.defineProperties(
    Boolean.prototype, {
        "foo": {
            get: o9,
            //set: setDiag
        },
        "foo_strict": {
            get: o12,
            //set: setDiag_strict
        },
        "bar": {
            get: o16
        },
        "bar_strict": {
            get: o17
        },
        "42": {
            get: o9,
            //set: setDiag
        },
        "142": {
            // 142 means "42_strict"
            get: o12,
            //set: setDiag_strict
        },
        "43": {
            get: o16
        },
        "143": {
            // 143 means "43_strict"
            get: o17
        },
        "-42": {
            get: o9,
            //set: setDiag
        },
        "-142": {
            // -142 means "-42_strict"
            get: o12,
            //set: setDiag_strict
        },
        "-43": {
            get: o16
        },
        "-143": {
            // -143 means "-43_strict"
            get: o17
        }
    });

Object.defineProperties(
    String.prototype, {
        "foo": {
            get: o9,
            //set: setDiag
        },
        "foo_strict": {
            get: o12,
            //set: setDiag_strict
        },
        "bar": {
            get: o16
        },
        "bar_strict": {
            get: o17
        },
        "42": {
            get: o9,
            //set: setDiag
        },
        "142": {
            // 142 means "42_strict"
            get: o12,
            //set: setDiag_strict
        },
        "43": {
            get: o16
        },
        "143": {
            // 143 means "43_strict"
            get: o17
        },
        "-42": {
            get: o9,
            //set: setDiag
        },
        "-142": {
            // -142 means "-42_strict"
            get: o12,
            //set: setDiag_strict
        },
        "-43": {
            get: o16
        },
        "-143": {
            // -143 means "-43_strict"
            get: o17
        }
    });

var o21 = function(o22, o23) {
    var o24 = "f";
    var o25 = "b";

    o0("** Testing " + o23 + ", property 'foo' (value) **");
    o22.o26;
    o22[o24 + "oo"];
    typeof o22.o26;
    o22.o26 instanceof Object;
//  obj.foo = {};
    o0("");

    o0("** Testing " + o23 + ", property 'bar' (function) **");
    o22.o27();
    o22[o25 + "ar"]();
    typeof o22.o27();
    o22.o27() instanceof Object;
    o0("");

    o0("** Testing " + o23 + ", property 42 (value) **");
    o22[42];
    o22[41 + 1];
    typeof o22[42];
    o22[42] instanceof Object;
//  obj[42] = {};
    o0("");

    o0("** Testing " + o23 + ", property 43 (function) **");
    o22[43]();
    o22[45 - 2]();
    typeof o22[43]();
    o22[43]() instanceof Object;
    o0("");

    o0("** Testing " + o23 + ", property -42 (value) **");
    o22[-42];
    o22[-41 - 1];
    typeof o22[-42];
    o22[-42] instanceof Object;
//  obj[-42] = {};
    o0("");

    o0("** Testing " + o23 + ", property -43 (function) **");
    o22[-43]();
    o22[-45 + 2]();
    typeof o22[-43]();
    o22[-43]() instanceof Object;
    o0("");
}

var o28 = function(o22, o23) {
    var o24 = "f";
    var o25 = "b";

    o0("** Testing " + o23 + ", property 'foo_strict' (value, strict mode) **");
    o22.o29;
    o22[o24 + "oo_strict"];
    typeof o22.o29;
    o22.o29 instanceof Object;
//  obj.foo_strict = {};
    o0("");

    o0("** Testing " + o23 + ", property 'bar_strict' (function, strict mode) **");
    o22.o30();
    o22[o25 + "ar_strict"]();
    typeof o22.o30();
    o22.o30() instanceof Object;
    o0("");

    o0("** Testing " + o23 + ", property 142 (value, strict mode) **");
    o22[142];
    o22[141 + 1];
    typeof o22[142];
    o22[142] instanceof Object;
//  obj[142] = {};
    o0("");

    o0("** Testing " + o23 + ", property 143 (function, strict mode) **");
    o22[143]();
    o22[145 - 2]();
    typeof o22[143]();
    o22[143]() instanceof Object;
    o0("");

    o0("** Testing " + o23 + ", property -142 (value, strict mode) **");
    o22[-142];
    o22[-141 - 1];
    typeof o22[-142];
    o22[-142] instanceof Object;
//  obj[-142] = {};
    o0("");

    o0("** Testing " + o23 + ", property -143 (function, strict mode) **");
    o22[-143]();
    o22[-145 + 2]();
    typeof o22[-143]();
    o22[-143]() instanceof Object;
    o0("");
}

var o31 = 3;
o21(o31, "int");
o28(o31, "int");

var o32 = (1 << 30) + 1;
o21(o32, "large int");
o28(o32, "large int");

var o33 = 3.14;
o21(o33, "float");
o28(o33, "float");

var o25 = true;
o21(o25, "bool");
o28(o25, "bool");

var o34 = "Hello";
o21(o34, "string");
o28(o34, "string");
