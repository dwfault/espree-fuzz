//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "Identifier = value shorthand",
        o4: function() {
            var o5 = "prop";
            o6.o7({ o5 : o5 }, { o5stro5 } );
            o6.o7({"b" : 123, o5 : o5, "foo" : "bar"}, {"b" : 123, o5stro5, "foo" : "bar"});
        }
    },
    {
        name: "Shorthand names `get` and `set` parse without error (they are not keywords in these cases)",
        o4: function () {
            var o8 = 0;
            var get = 1;
            var set = 2;
            var o11 = 3;

            var o12 = { getgetget };
            var o13 = { setsetset };
            var o14 = { getgetget, setsetset };
            var o15 = { setsetset, getgetget };
            var o16 = { getgetget, o11zo11 };
            var o17 = { o8ao8, setsetset };
            var o18 = { o8ao8, getgetget, o11zo11 };

            o6.o7(1, o12.get, "o.get = 1");
            o6.o7(2, o13.set, "p.set = 2");
            o6.o7(1, o14.get, "q.get = 1");
            o6.o7(2, o14.set, "q.set = 2");
            o6.o7(2, o15.set, "r.set = 2");
            o6.o7(1, o15.get, "r.get = 1");
            o6.o7(1, o16.get, "s.get = 1");
            o6.o7(3, o16.o11, "s.z = 3");
            o6.o7(0, o17.o8, "t.a = 0");
            o6.o7(2, o17.set, "t.set = 2");
            o6.o7(0, o18.o8, "u.a = 0");
            o6.o7(1, o18.get, "u.get = 1");
            o6.o7(3, o18.o11, "u.z = 3");
        }
    },
    {
        name: "Concise method shorthand",
        o4: function() {
            var o19 = {
                o20() { return "foo"; }
            };

            o6.o7("foo", o19.o20());
            o6.o7("foo", ({ o20: function() { }, o20() { return "foo"; } }).o20());
            o6.o7("foo", ({ o20(o21) { }, o20() { return "foo"; } }).o20());
        }
    },
    {
        name: "Concise method shorthand with `get` and `set` names",
        o4: function () {
            var o12 = {
                get() { return "g"; },
                set() { return "s"; }
            };

            o6.o7('g', o12.get(), "o.get returns 'g'");
            o6.o7('s', o12.set(), "o.set returns 's'");
        }
    },
    {
        name: "Computed property names",
        o4: function() {
            var o21;
            var o19 = {
                ["foo" + "bar"]   : 1,
                [1 * 10 * 10]     : 2,
                [o21 = "notfoobar"] : 3,

                // computed function name
                ["bar" + "foo"] () { return 4 },
                [2 * 10 * 10] () { return 5 },
                [o21 = "notbarfoo"] () { return 6 },

                // computed get/set method name
                set ["boo" + "far" ] (o8) { this.o21 = o8 * 2 },
                get ["boo" + "far" ] () { return this.o21 },
                set [3 * 10 * 10] (o8) { this.o22 = o8 * o8 },
                get [3 * 10 * 10] () { return this.o22 },
                set [o21 = "notboofar"] (o8) { this.o11 = o8 / 3 },
                get [o21 = "notboofar"] () { return this.o11 }
            };

            o6.o7(1, o19.o23, "String concat expr as property name");
            o6.o7(2, o19[100], "Math expr as property name");
            o6.o7(3, o19.o24, "Element list as property name");

            o6.o7(4, o19.o25(), "String concat expr as method name");
            o6.o7(5, o19[200] (), "Math expr as method name");
            o6.o7(6, o19.o26(), "Element list as method name");

            o19.o27=7;
            o6.o7(14, o19.o27, "String concat expr as setter/getter method names");
            o19[300]=8;
            o6.o7(64, o19[300], "Math expr as setter/getter method names");
            o19.o28=9;
            o6.o7(3, o19.o28, "Element list as setter/getter method names");

            var o29 = {
                ["__proto__"] : { o30 : 123 }
            };
            o6.o7(o29.o30, undefined, "__proto__ does not get assigned as the intrinsic proto when used as a computed property name");
            var o32 = {
                ["__proto__"] : {
                    ["__" + "proto" + "__"] : {
                        o30 : 123
                    }
                }
            };
            o6.o7(o32.o30, undefined, "Nested dynamic __proto__ literals");
            o29 = {
                "__proto__" : { o30 : 123 }
            };
            o6.o7(o29.o30, 123, "__proto__ get assigned when used as a normal production");

            o6.o33(function () { eval("var b = { ['str'] }"); }, o35, "Invalid computed identifier shorthand", "Expected ':'");

            o6.o33(function () { eval("var b = { [1, 2]: 3 }"); }, o35, "Disallow 'Expression' inside 'ComputedPropertyName'", "Expected ']'");
        }
    },
    {
        name: "Duplicate property handling",
        o4: function () {
            // Valid overwrite cases: old style definitions and computed property names
            var o19 = {
                o23          : 1,
                "foobar"        : 2,
                ["foo" + "bar"] : 3,
                ["foo" + "bar"] : 4
            }
            o6.o7(o19.o23, 4, "Opt-in duplicate property handling");

            var o36 = {
                ["foo" + "bar"] : 1,
                ["foo" + "bar"] : 2
            }
            o6.o7(o36.o23, 2, "Duplicate computed property names are allowed");

            // Valid cases
            var o8 = "str";
            o6.o7("str", ({ o8ao8, o8ao8 }).o8, "Duplicate identifier references");
            o6.o7("str", ({ 'foo' : '1', o20() { return "str"; } }).o20(), "Duplicate data property and method definition");
            o6.o7("str", ({ set o20(o21) { }, o20 : "str" }).o20, "Duplicate accessors and data property");
            o6.o7("str", ({ get o20() {}, set o20(o21) { }, o20(o21) { return "str"; } }).o20(), "Duplicate accessors and method definition");
            o6.o7("a", ({ get o20() { return "str"; }, set o20(o21) { }, ["foo"] : "a" }).o20, "Duplicate accessors and computed property");
        }
    },
    {
    name: "BLUE 552728: Object Literal: Use of keywords is not throwing syntax error",
    o4: function () {
        // The following definitions ignore 'yield'
        var o37 = ["break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do",
                        "else", "export", "extends", "finally", "for", "function", "if", "import", "in", "instanceof",
                        "new", "return", "super", "switch", "this", "throw", "try", "typeof", "var", "void", "while",
                        "with"];
        var o38 = ["implements", "let", "private", "public", "interface", "package", "protected", "static"];

        // Strict mode rules
        for (var o39 in o38) {
            o6.o33(function () { eval("use strict; var " + o39 + " = 1; var o = { " + o39 + " };"); }, o35, o39 + " is a forbidden identifier reference");
        }
        // TODO (tcare): When generators are implemented, add a test case where the yield operator is used.
        o6.o33(function () { eval("use strict; var yield = 1; var o = { yield }; "); }, o35);

        // Non-strict mode rules
        for (var o39 in o37) {
            o6.o33(function () { eval("var " + o39 + " = 1; var o = { " + o39 + " };"); }, o35, o39 + " is a forbidden identifier reference");
        }
        var o40 = 1;
        var o41 = { o40yieldo40 }; // No error
    }
    },
    {
        name: "BLUE 551475: Duplicate property definition not throwing syntax error",
        o4: function () {
            o6.o7(3, ({ set o42(o43) { }, o42 : 3 }).o42, "Duplicate set accessor and data property");
            o6.o7(3, ({ get o42() { }, o42 : 3 }).o42, "Duplicate get accessor and data property");
            o6.o7(4, ({ o42 : 3, get o42() { return 4; } }).o42, "Duplicate data property and set accessor");
        }
    },
    {
        name: "BLUE 594468: Computed properties in nested object and function return statements cause assertion",
        o4: function () {
            () => {
                return {
                    ["a"]: null
                }
            }
        }
    },
    {
        name: "BLUE 563637: Computed property ordering causes crash",
        o4: function () {
            var o8 = {
                ["a"] : 10,
                o42() {
                    return this.o8;
                }
            };

            // The implementation of computed properties causes object literals to
            // be constructed (InitFld) up to the first computed property, then StElem
            // for each computed property and StFld for any other non-computed properties.
            // The following test cases test these transitions.
            var o44 = {
                o8 : 1,
                o42 : 2,
                o45 : 3,
                o46 : 4,
                o47 : 5
            };

            var o48 = {
                o8 : 1,
                o42 : 2,
                ["c"] : 3,
                o46 : 4,
                o47 : 5
            };

            var o49 = {
                o8 : 1,
                o42 : 2,
                o45 : 3,
                o46 : 4,
                ["e"] : 5
            };

            var o50 = {
                ["a"] : 1,
                o42 : 2,
                o45 : 3,
                o46 : 4,
                o47 : 5
            };

            var o51 = {
                ["a"] : 1,
                o42 : 2,
                ["c"] : 3,
                o46 : 4,
                ["e"] : 5
            };

            o6.o7(o44, o48);
            o6.o7(o44, o49);
            o6.o7(o44, o50);
            o6.o7(o44, o51);
        }
    },
    {
        name: "BLUE 603997: Method formals redeclaration error",
        o4: function() {
            o6.o52(function() { eval("var obj = { method(a) { var a; } };"); },                  "Object literal method with a var redeclaration does not throw");
            o6.o33(function() { eval("var obj = { method(a) { let a; } };"); },           o35, "Object literal method with a let redeclaration throws",       "Let/Const redeclaration");
            o6.o33(function() { eval("var obj = { method(a) { const a; } };"); },         o35, "Object literal method with a const redeclaration throws",     "Let/Const redeclaration");

            o6.o52(function() { eval("var obj = { method(a,b,c) { var b; } };"); },              "Object literal method with a var redeclaration does not throw");
            o6.o33(function() { eval("var obj = { method(a,b,c) { let b; } };"); },       o35, "Object literal method with a let redeclaration throws",       "Let/Const redeclaration");
            o6.o33(function() { eval("var obj = { method(a,b,c) { const b; } };"); },     o35, "Object literal method with a const redeclaration throws",     "Let/Const redeclaration");

            o6.o52(function() { eval("var obj = { set method(a) { var a; } };"); },              "Object literal set method with a var redeclaration does not throw");
            o6.o33(function() { eval("var obj = { set method(a) { let a; } };"); },       o35, "Object literal set method with a let redeclaration throws",   "Let/Const redeclaration");
            o6.o33(function() { eval("var obj = { set method(a) { const a; } };"); },     o35, "Object literal set method with a const redeclaration throws", "Let/Const redeclaration");
        }
    },
    {
        name: "BLUE 618132: __proto__ after a computed property",
        o4: function () {
            var o13 = { o13: 123 };
            var o12 = {
                ['someprop'] : 'someprop',
                __proto__: o13
            };

            o6.o7(o13, Object.getPrototypeOf(o12));
            o6.o56(!o12.hasOwnProperty("__proto__"));
            o6.o7(123, o12.o13);
            o6.o7('someprop', o12.o58);
            o6.o7(o13, Object.getPrototypeOf(o12));
        }
    },
    {
        name: "BLUE 617446: Arguments identifier syntax",
        o4: function () {
            function o20() {
                var o59 = { argumentsargumentsarguments };
                return [o59.arguments[0], o59.arguments[1], o59.arguments.length];
            }

            o6.o7([undefined, undefined, 0], o20(),         "Arguments object correctly works with identifier syntax");
            o6.o7([-1, 1, 2],                o20(-1, 1),    "Arguments object correctly works with identifier syntax");
            o6.o7([-1, 1, 3],                o20(-1, 1, 0), "Arguments object correctly works with identifier syntax");
        }
    },
    {
        name: "__proto__ productions",
        o4: function() {
            o6.o33(function() { eval("{ __proto__ : Function.prototype, __proto__ : Array.prototype }"); }, o35, "More than one regular productions can't define __proto__");
            var __proto__ = {};
            o6.o33(function() { eval("var o = { __proto__ : Function.prototype, __proto__, __proto__ : Array.prototype };"); }, o35, "More than one regular productions can't define __proto__ even if there are other productions present");
            o6.o56({ __proto____proto____proto__, __proto__ : [], __proto__() {}, __proto____proto____proto__ } instanceof Array, "Regular production model should win over all other");
            o6.o56({ ['__proto__'] : Object.prototype, __proto__ : [], ['__proto__'] : {} } instanceof Array, "Computed property definition of __proto__ shouldn't override the regular production");

            o6.o56({ __proto__ : [] } instanceof Array, "Regular production for __proto__ should set the internal prototype");
            o6.o7(Object.getPrototypeOf({ __proto__ : null }), null, "Null should be set as the prototype when specified using normal production");
            o6.o7(Object.getPrototypeOf({ __proto__ : undefined }),  Object.prototype, "Undefined should not be set as the internal prototype for object literal");
            o6.o7(Object.getPrototypeOf({ __proto__ : "a" }), Object.prototype, "Non-object type string shouldn't be set as the internal prototype for object literal");
            o6.o7(Object.getPrototypeOf({ __proto__ : 10 }), Object.prototype, "Non-object type number shouldn't be set as the internal prototype for object literal");
            o6.o7(Object.getPrototypeOf({ __proto__ : true }), Object.prototype, "Non-object type boolean shouldn't be set as the internal prototype for object literal");
            var o5 = "__proto__";
            o6.o64({ [o5] : [] } instanceof Array, "Computed property shouldn't set the internal prototype");
            __proto__ = [];
            o6.o64({ __proto____proto____proto__ } instanceof Array, "Identifier reference shouldn't set the internal prototype");
            o6.o64({__proto__() {}} instanceof Function, "Method definition shouldn't set the internal prototype");

            function o66() {}
            var o19 = { "__proto__" : [], ["__proto__"] : o66.prototype };
            Array.prototype.o21 = 1;
            o66.prototype.o21 = 10;
            o6.o7(o19.o21, 1, "Regular production should assign the internal prototype");
            o6.o7(o19.__proto__.o21, 10, "Computed property definition of __proto__ is added as a data member");
        }
    },
    {
        name: "computed property getters can call super methods",
        o4: function () {
            function o67(o21) {  return o21; }

            var o68 = {
                o69() {  return ' proto m'; }
            };
            var o70 = {
                get ['a']() { return 'a' + super.o69(); },
                get [o67('b')]() { return 'b' + super.o69(); },
                get [0]() { return '0' + super.o69(); },
                get [o67(1)]() { return '1' + super.o69(); },
            };

            Object.setPrototypeOf(o70, o68);

            o6.o7('a proto m', o70.o8, "The value of `object.a` is `'a proto m'`. Defined as `get ['a']() { return 'a' + super.m(); }`");
            o6.o7('b proto m', o70.o42, "The value of `object.a` is `'b proto m'`. Defined as `get [ID('b')]() { return 'b' + super.m(); }`");
            o6.o7('0 proto m', o70[0], "The value of `object[0]` is `'0 proto m'`. Defined as `get [0]() { return '0' + super.m(); }`");
            o6.o7('1 proto m', o70[1], "The value of `object[1]` is `'1 proto m'`. Defined as `get [ID(1)]() { return '1' + super.m(); }`");
        }
    },
    {
        name: "computed property setters can call super methods",
        o4: function () {
            function o67(o21) {
              return o21;
            }

            var value;
            var o68 = {
                o69(name, o43) {  value = name + ' ' + o43; }
            };
            var o70 = {
                set ['a'](o43) { super.o69('a', o43); },
                set [o67('b')](o43) { super.o69('b', o43); },
                set [0](o43) { super.o69('0', o43); },
                set [o67(1)](o43) { super.o69('1', o43); },
            };

            Object.setPrototypeOf(o70, o68);

            o70.o8 = 2;
            o6.o7('a 2', value, "The value of `value` is `'a 2'`, after executing `object.a = 2;`");
            o70.o42 = 3;
            o6.o7('b 3', value, "The value of `value` is `'b 3'`, after executing `object.b = 3;`");
            o70[0] = 4;
            o6.o7('0 4', value, "The value of `value` is `'0 4'`, after executing `object[0] = 4;`");
            o70[1] = 5;
            o6.o7('1 5', value, "The value of `value` is `'1 5'`, after executing `object[1] = 5;`");
        }
    },
    {
        name: "computed property methods can call super methods",
        o4: function () {
            function o67(o21) { return o21; }

            var o68 = {
                o69() {  return ' proto m'; }
            };
            var o70 = {
                ['a']() { return 'a' + super.o69(); },
                [o67('b')]() { return 'b' + super.o69(); },
                [0]() { return '0' + super.o69(); },
                [o67(1)]() { return '1' + super.o69(); },
            };

            Object.setPrototypeOf(o70, o68);

            o6.o7('a proto m', o70.o8(), "`object.a()` returns `'a proto m'`, after executing `Object.setPrototypeOf(object, proto);`");
            o6.o7('b proto m', o70.o42(), "`object.b()` returns `'b proto m'`, after executing `Object.setPrototypeOf(object, proto);`");
            o6.o7('0 proto m', o70[0](), "`object[0]()` returns `'0 proto m'`, after executing `Object.setPrototypeOf(object, proto);`");
            o6.o7('1 proto m', o70[1](), "`object[1]()` returns `'1 proto m'`, after executing `Object.setPrototypeOf(object, proto);`");
        }
    },
    {
        name: "super method calls in object literal method",
        o4: function () {
            var o68 = {
                o73(o21) {  return 'proto' + o21; }
            };

            var o70 = {
                o73(o21) {  return super.o73(o21); }
            };

            Object.setPrototypeOf(o70, o68);

            o6.o7('proto42', o70.o73(42), "`object.method(42)` returns `'proto42'`, after executing `Object.setPrototypeOf(object, proto);`");
            o6.o7('proto42', o68.o73(42), "`proto.method(42)` returns `'proto42'`, after executing `Object.setPrototypeOf(object, proto);`");
            o6.o7('proto42', Object.getPrototypeOf(o70).o73(42), "`Object.getPrototypeOf(object).method(42)` returns `'proto42'`");
        }
    },
    {
        name: "super method calls in object literal getter",
        o4: function () {
            var o68 = {
                o74: 42,
                get o21() {  return 'proto' + this.o74; }
            };

            var o70 = {
                get o21() {  return super.o21; }
            };

            Object.setPrototypeOf(o70, o68);

            o6.o7('proto42', o70.o21, "The value of `object.x` is `'proto42'`, after executing `Object.setPrototypeOf(object, proto);`");
            o6.o7(42, o70.o74, "The value of `object._x` is `42`, after executing `Object.setPrototypeOf(object, proto);`");
            o6.o7(42, Object.getPrototypeOf(o70).o74, "The value of `Object.getPrototypeOf(object)._x` is `42`");
        }
    },
    {
        name: "super method calls in object literal setter",
        o4: function () {
            var o68 = {
                o74: 0,
                set o21(o43) { return this.o74 = o43; }
            };

            var o70 = {
                set o21(o43) { super.o21 = o43; }
            };

            Object.setPrototypeOf(o70, o68);

            o6.o7(1, o70.o21 = 1, "`object.x = 1` is `1`, after executing `Object.setPrototypeOf(object, proto);`");
            o6.o7(1, o70.o74, "The value of `object._x` is `1`, after executing `Object.setPrototypeOf(object, proto);`");
            o6.o7(0, Object.getPrototypeOf(o70).o74, "The value of `Object.getPrototypeOf(object)._x` is `0`");
        }
    },
    {
        name: "The HomeObject of Functions declared as methods is the Object prototype.",
        o4: function () {
            var o19 = {
                o73() {  return super.toString; }
            };

            o19.toString = null;

            o6.o7(Object.prototype.toString, o19.o73());
        }
    },
    {
        name: "The HomeObject accessed through default argument of Functions declared as methods is the Object prototype.",
        o4: function () {
            var o19 = {
                o73(o21 = super.toString) {  return o21; }
            };

            o19.toString = null;

            o6.o7(Object.prototype.toString, o19.o73());
        }
    },
];

o76.o77(o2, { o78: o0.o79[0] != "summary" });
