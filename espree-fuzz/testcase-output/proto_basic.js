//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/// <reference path="protolib.js" />
if (this.o0 && this.o0.o1) {
    o0.o1("protolib.js");
}

function o2(o3) {
    var o4 = [
        Number.prototype, Boolean.prototype, String.prototype, Object.prototype, Array.prototype, Function.prototype,
    ];
    var o12 = [
        "Number.prototype", "Boolean.prototype", "String.prototype", "Object.prototype", "Array.prototype", "Function.prototype",
    ];

    var o13 = "";
    while (o3) {
        var o14 = o4.indexOf(o3);
        var name = (o14 >= 0 ? o12[o14] : JSON.stringify(o3));
        if (o13 == "") {
            o13 = name;
        } else {
            o13 += " -> " + name;
        }

        o3 = Object.getPrototypeOf(o3);
    }

    o20.writeln(o13);
}

function o22(o23, o24) {
    return { o25: o23, o26: o24 };
}

var o27;
if (o20.o28) { // TODO: Change to _11_OrLater
    o27 = [
    {
        name: "Test Object.prototype.__proto__ attributes",
        o29: function () {
            var o30 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
            o20.o32(o30);
        }
    },

    {
        name: "Read built-in __proto__",
        o29: function () {
            o33.o34(12["__proto__"] === Number.prototype, "int __proto__");
            o33.o34(12.3["__proto__"] === Number.prototype, "float __proto__");
            o33.o34((new Number(12)).__proto__ === Number.prototype, "Number Object __proto__");

            o33.o34(true.__proto__ === Boolean.prototype, "Boolean Value __proto__");
            o33.o34(false.__proto__ === Boolean.prototype, "Boolean Value __proto__");
            o33.o34((new Boolean(true)).__proto__ === Boolean.prototype, "Boolean Object __proto__");
            o33.o34((new Boolean(false)).__proto__ === Boolean.prototype, "Boolean Object __proto__");

            o33.o34("hello".__proto__ === String.prototype, "String Value __proto__");
            o33.o34(new String("hello").__proto__ === String.prototype, "String Object __proto__");

            o33.o34({}.__proto__ === Object.prototype, "{} __proto__");
            o33.o34([].__proto__ === Array.prototype, "[] __proto__");

            o33.o34(Array.prototype.__proto__ === Object.prototype, "Array.prototype.__proto__");
            o33.o34(Object.prototype.__proto__ === null, "Object.prototype.__proto__");

            o33.o34(Array.__proto__ === Function.prototype, "Array.__proto__");
            o33.o34(Function.__proto__ === Function.prototype, "Function.__proto__");
            o33.o34(Function.prototype.__proto__ === Object.prototype, "Function.prototype.__proto__");

            var o36 = { o37: 0 };
            o33.o34(o36.__proto__ === Object.prototype, "o.__proto__");
            o33.o34(o36.__proto__.__proto__ === null, "o.__proto__.__proto__");
        }
    },

    {
        name: "Change built-in's __proto__ chain",
        o29: function () {
            function o38(o3, o39, test) {
                var o41 = o3.__proto__;
                o3.__proto__ = o39;
                o2(o3);
                try {
                    test();
                } finally {
                    o3.__proto__ = o41; // Restore old __proto__
                }
            }

            // Number doesn't have sort method, should throw
            o33.o42(function () { 12["sort"]() }, o43, "Object doesn't support property or method 'sort'");

            // Number gets Array methods from new prototype in the chain
            o38(Number.prototype, Array.prototype, function () {
                12["sort"]();

                var o36 = new Number(34);
                o36[0] = 8;
                o36[1] = 3;
                o36[2] = 9;
                o36[3] = 5;
                o36.length = 4;
                o33.o45("8 3 9 5", o36.join(" "));
                o36.sort();
                o33.o45("3 5 8 9", o36.join(" "));
            });

            // Boolean doesn't have String methods
            o33.o42(function () { true.toUpperCase() }, o43, "Object doesn't support property or method 'toUpperCase'");

            // Boolean gets String methods from new prototype in the chain
            o38(Boolean.prototype, new String("abc"), function () {
                o33.o45("TRUE", true.toUpperCase());
                o33.o45("FALSE", false.toUpperCase());
                o33.o45("TRUE", (new Boolean(true)).toUpperCase());
                o33.o45("FALSE", (new Boolean(false)).toUpperCase());
            });
        }
    },

    {
        name: "Change __proto__ to null/undefined",
        o29: function () {
            var o37 = {};

            // Set an object's prototype to undefined
            {
                var o37 = {};

                o33.o34(o37.__proto__ === Object.prototype);
                o33.o34(!o37.isPrototypeOf(o37));

                o37.__proto__ = undefined;

                o33.o34(o37.__proto__ === Object.prototype);
                o33.o34(!o37.isPrototypeOf(o37));

                o33.o51(function () { Object.setPrototypeOf(o37, undefined); }, "Object.setPrototypeOf");
            }

            // Set an object's prototype to null
            function o53(o54, o55) { o54.__proto__ = o55; }
            function o56(o54, o55) { Object.setPrototypeOf(o54, o55); }
            [o53, o56].forEach(function (o58) {
                var o37 = {};

                o33.o34(o37.__proto__ === Object.prototype);
                o33.o34(!o37.isPrototypeOf(o37));

                o58(o37, null);
                o33.o34(Object.getPrototypeOf(o37) === null);
                o33.o34(o37.__proto__ === undefined, "lost Object.prototype __proto__ getter");
                o33.o34(o37.isPrototypeOf === undefined, "lost Object.prototype methods");
            });

            // side test -- try to change null/undefined's __proto__ should throw
            var o59 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
            [null, undefined].forEach(function (o36) {
                o33.o61(function () {
                    o59.apply(o36, [{}]);
                });
                o33.o63(function () {
                    Object.setPrototypeOf(o36, {});
                });
            });
        }
    },

    {
        name: "Change __proto__ to neither Object nor null, should throw",
        o29: function () {
            function o64(o65) {
                var o37 = {};
                o37.__proto__ = o65;
                o33.o34(Object.getPrototypeOf(o37) === Object.prototype, "Change __proto__ to: " + o65);
                o33.o51(function () {
                    Object.setPrototypeOf(o37, o65);
                }, "Object.setPrototypeOf");
                o33.o34(Object.getPrototypeOf(o37) === Object.prototype, "Change __proto__ to: " + o65);
            }

            var o59 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
            [
                undefined, 0, 123, -12.3, NaN, Infinity, true, false, "str"
            ].forEach(function (o65) {
                o64(o65);

                // side test -- try to change these primitive's __proto__ should pass (but has no effect)
                if (o65 !== undefined) {
                    o65.__proto__ = {}; // This is ok
                    o59.apply(o65, [{}]); // This is ok
                    Object.setPrototypeOf(o65, {});
                }
            });
        }
    },

    {
        name: "Change object.__proto__ to an object",
        o29: function () {
            var o37 = { o37: 100, o68: 100 };
            var o68 = { o68: 200, o69: 200 };
            o68.__proto__ = o37;
            o20.o32(o68);

            o20.writeln("\n-- delete b.b --");
            delete o68.o68;
            o20.o32(o68);
        }
    },

    {
        name: "Change object.__proto__ to an array",
        o29: function () {
            var o37 = [8, 3, 9, 5];
            var o68 = { o68: 200 };

            // b.sort not available
            o33.o42(function () { o68.sort(); });

            o68.__proto__ = o37;
            o33.o34(!Array.isArray(o68), "Still not Array");
            o20.o32(o68);

            o20.writeln("\n-- a.sort --");
            o37.sort();
            o20.o32(o68);

            o20.writeln("\n-- b.sort --");
            o68.sort();
            o20.o32(o68);
        }
    },

    {
        name: "Change array.__proto__ to an object",
        o29: function () {
            var o37 = { o37: 100 };
            var o68 = [8, 3, 9, 5];

            o68.__proto__ = o37;
            o33.o34(Array.isArray(o68), "Still is Array");
            o20.o32(o68);

            // But now b.sort is gone
            o33.o42(function () { o68.sort(); });

            // We can sort by apply
            o20.writeln("\n-- sort.apply --");
            Array.prototype.sort.apply(o68);
            o20.o32(o68);
        }
    },

    {
        name: "Attempt to change DOM object __proto__",
        o29: function () {
            function test(o71, o72) {
                var o73 = Object.getPrototypeOf(o71);
                o33.o34(o73 === o71.__proto__);

                var o74 = { __proto__: o73 };
                o71.__proto__ = o74;

                o33.o45(o72, Object.getPrototypeOf(o71) === o74);
                o33.o34(o72 || o71.o75 !== null); // expected succeed or otherwise window
            }

            if (o20.o76()) {
                test(this, false);
                test(o77, false);
                test(o77.o78[0], false);

                test(o75, true);
                test(o75.o29, true);
                test(o75.o79("div"), true);

                // test form scope
                var o58 = o75.o80("form1");
                var o73 = o58.__proto__;
                o58.__proto__ = { o81: "form1_injected_value", __proto__: o73 };

                var o82 = o75.o80("button1");
                o82.o83();
                o33.o45("form1_injected_value", o82.o84);
            }
        }
    },

    {
        name: "__proto__ and instanceof/isPrototypeOf",
        o29: function () {
            function o85() { }
            function o86() { }

            var o37 = new o85();
            var o68 = new o86();

            o33.o34(!(o68 instanceof o85), "Initially b is not instance of A");
            o33.o34(!(o85.prototype.isPrototypeOf(o68)));
            o33.o34(o68 instanceof o86, "Initially b is instance of B");
            o33.o34(o86.prototype.isPrototypeOf(o68));            

            o68.__proto__ = o85.prototype;
            o33.o34(o68 instanceof o85, "Now b is instance of A");
            o33.o34(o85.prototype.isPrototypeOf(o68));
            o33.o34(!(o68 instanceof o86), "Now b is not instance of B");
            o33.o34(!(o86.prototype.isPrototypeOf(o68)));

            o68.__proto__ = o37;
            o33.o34(o68 instanceof o85, "b is still instance of A");
            o33.o34(o85.prototype.isPrototypeOf(o68));
            o33.o34(!(o68 instanceof o86), "b is still not instance of B");
            o33.o34(!(o86.prototype.isPrototypeOf(o68)));

            o68.__proto__ = o86.prototype;
            o33.o34(!(o68 instanceof o85), "b is back not instance of A");
            o33.o34(!(o85.prototype.isPrototypeOf(o68)));
            o33.o34(o68 instanceof o86, "b is back instance of B");
            o33.o34(o86.prototype.isPrototypeOf(o68));
        }
    },

    {
        name: "Verify we reject simple __proto__ cycle",
        o29: function () {
            var o37 = {};
            var o68 = {};
            var o69 = {};

            o37.__proto__ = o68;
            o68.__proto__ = o69;

            o33.o87(function () { o69.__proto__ = o37 });
            o33.o87(function () { o37.__proto__ = o37 });
            o33.o87(function () { Array.prototype.__proto__ = [] });
        }
    },

    {
        name: "Verify proto cache is discarded",
        o29: function () {
            var o37 = o22(1, 2);
            var o68 = o22(3, 4);

            //
            // Create prototype chain:
            //      x -> y -> a
            // where x inherits properties from prototype a.
            //
            var o26 = Object.create(o37);
            var o25 = Object.create(o26);

            function print(o36) {
                o20.writeln(o36.o25 + ", " + o36.o26);
            }

            o20.writeln("Before change");
            print(o25);

            //
            // Now change prototype chain:
            //    x -> y -> b
            // While changing y.__proto__, we should discard inline proto cache in original chain.
            // x should now get changed properties from prototype b.
            //
            o20.writeln("After change");
            o26.__proto__ = o68;
            print(o25);
        }
    },

    {
        // Copy of above proto cache test and change a getter
        name: "Verify proto getter cache is discarded",
        o29: function () {
            var o37 = o22(1, 2);
            var o68 = o22(3, 4);
            Object.defineProperty(o37, "y", { get: function () { return 7; }, enumerable: true, configurable: true });

            //
            // Create prototype chain:
            //      x -> y -> a
            // where x inherits properties from prototype a.
            //
            var o26 = Object.create(o37);
            var o25 = Object.create(o26);

            function print(o36) {
                o20.writeln(o36.o25 + ", " + o36.o26);
            }

            o20.writeln("Before change");
            print(o25);

            //
            // Now change prototype chain:
            //    x -> y -> b
            // While changing y.__proto__, we should discard inline proto cache in original chain.
            // x should now get changed properties from prototype b.
            //
            o20.writeln("After change");
            o26.__proto__ = o68;
            print(o25);
        },
    },

    {
        name: "Verify the new proto object is marked as proto, so that changing the proto object invalidates related proto cache",
        o29: function () {
            var o68 = o22(3, 4);

            function print(o36) {
                o20.writeln(o36.o25 + ", " + o36.o26);
            }

            var o25 = {};

            o20.writeln("Before change");
            print(o25);

            o20.writeln("After change");
            o25.__proto__ = o68; // This should mark "b" as a prototype object
            print(o25);

            //
            // Now we make certain change to "b". If b is marked on prototype correctly, the following should invalidate related proto cache.
            //
            o20.writeln("After change proto property");
            Object.defineProperty(o68, "x", { get: function () { return 9; }, enumerable: true, configurable: true });
            print(o25);
        }
    },

    {
        name: "Verify changing __proto__ works safely with ObjTypeSpec",
        o29: function () {
            function o58(o36, o37) {
                var o94 = o36.o25;
                if (o37 > 0)
                {
                    o36.__proto__ = {}; // ObjTypeSpec won't generate 2nd type check for the next "o.x" load. But implicit call bailout should bailout right here.
                }
                var o95 = o36.o25;

                o33.o45(1, o94);
                o33.o45(o37 > 0 ? undefined : 1, o95);
            }

            var o96 = { o25: 1 };
            var o36 = Object.create(o96);
            o58(o36, 0); // no __proto__ change in interpreter.
            o58(o36, 0); // -maxInterpretCount:1, still no __proto__ change in jit.
            o58(o36, 1); // -maxInterpretCount:1, now with __proto__ change in jit.
        }
    },

    {
        name: "Verify PathTypeHandler successor Types continue to work, case 1",
        o29: function () {
            function o58() {
                return { o97: 1 }; // Use x_100 to start a unique path
            }

            var o98 = o58();
            o98.__proto__ = { o37: 2 };
            o98.o26 = 1; // This has path "x" -> "x, y"

            var o99 = o58();
            o99.o26 = 1; // This also has path "x" -> "x, y"

            // But o1 and o2 can't go to the same Type. If they do, they have the same [[prototype]], which is wrong.
            o33.o45(2, o98.o37, "from prototype");
            o33.o45(undefined, o99.o37, "should be undefined");
        }
    },

    {
        name: "Verify PathTypeHandler successor Types continue to work, case 2",
        o29: function () {
            function o58() {
                return { o100: 1 }; // Use x_101 to start a unique path
            }

            var o98 = o58();
            o98.o26 = 1; // This has path "x" -> "x, y"

            var o99 = o58();
            o99.__proto__ = { o37: 2 };
            o99.o26 = 1; // This also has path "x" -> "x, y"

            // But o1 and o2 can't go to the same Type. If they do, they have the same [[prototype]], which is wrong.
            o33.o45(undefined, o98.o37, "should be undefined");
            o33.o45(2, o99.o37, "from prototype");
        }
    },

    {
        name: "Verify that we can shadow __proto__ property",
        o29: function () {
            var o96 = {};
            var o36 = {};
            o36.__proto__ = o96;

            Object.defineProperty(o96, "__proto__", { value: 10, writable: true, enumerable: true, configurable: true });
            o33.o45(10, o36.__proto__);

            o36.__proto__ = -100;
            o33.o45(-100, o36.__proto__);

            delete o36.__proto__;
            o33.o45(10, o36.__proto__);

            delete o96.__proto__;
            o33.o45(o96, o36.__proto__);
            o33.o45(Object.prototype, o96.__proto__);

            o36.__proto__ = { o37: 123 };
            o33.o45(123, o36.o37);
        }
    },

    {
        name: "Test fast path o[i] with changed prototype",
        o29: function () {
            var o36 = []; o36.length = 10;

            var o96 = [123];
            o36.__proto__ = o96; // Now o's prototype != Array.prototype
            o33.o45(123, o36[0]);

            var o73 = { "1": 4 };
            o96.__proto__ = o73; // Now p's prototype != Object.prototype
            o33.o45(4, o36[1]);

            o73.__proto__ = null;
            o33.o45(undefined, o36[2]);
        }
    },

    {
        name: "Test fast path o[i] when o.__proto__ == null",
        o29: function () {
            var o36 = [];
            o36.__proto__ = null;
            o33.o45(undefined, o36[1]);
        }
    },

    {
        name: "Test fast path o[i] when o.__proto__.__proto__ == null",
        o29: function () {
            var o36 = [];
            o36.__proto__ = [12, 34];
            o36.__proto__.__proto__ = null;
            o33.o45(undefined, o36[5]);
        }
    },

    {
        name: "Test Array methods with changed prototype",
        o29: function () {
            function o103() {
                var o104 = [];
                for (var o96 in arguments) {
                    var o14 = arguments[o96];
                    o104[o14] = o14;
                }
                return o104;
            }

            var o36 = []; o36.length = 10;

            o36.__proto__ = o103(0, 1, 2);
            o36.__proto__.__proto__ = o103(3, 4);
            o36.__proto__.__proto__.__proto__ = { "5": 5, "6": 6 };
            o36.__proto__.__proto__.__proto__.__proto__ = Array.prototype;

            var o37 = o36.slice();
            o33.o45("0,1,2,3,4,5,6,,,", o37.toString());

            o37.__proto__ = o103(8, 9);
            o33.o45("0,1,2,3,4,5,6,,8,9", o37.toString());
        }
    },

    {
        name: "Test cross-site change prototype",
        o29: function () {
            if (this.o0.o1) {
                var o108 = o109();
                var o110 = o108.eval('var o = { get name() {return this.v}, set name(value) {this.v = value}, v: "a name" }; o');

                var o36 = { __proto__: o110 };
                o33.o45("a name", o36.name);
            }
        }
    },

    {
        name: "Test change prototype of global object",
        o29: function () {
            if (this.o0.o1) {
                o109().o112(function () {
                    function test(o25) {
                        var o96 = { o37: 1 };

                        // Should go through general change prototype code path and mark "p" as prototype. Then changes to "p" should invalidate proto cache.
                        o25.__proto__ = o96;
                        o33.o45(1, o25.o37);

                        Object.defineProperty(o96, "a", { get: function () { return 2; }, configurable: true });
                        o33.o45(2, o25.o37);
                    }
                    
                    o33.o34(__proto__ === Object.prototype); // default binds to global this.__proto__
                    test(this);

                    __proto__ = { o68: 3, __proto__: __proto__ };
                    o33.o45(2, o37);
                    o33.o45(3, o68);
                });
            }
        }
    },

    {
        name: "Blue 62526: __proto__: ArrayElementEnumerator does not expect non-TypeIds_Object on prototype",
        o29: function () {
            var o37 = new String();
            o37[1] = "a1";
            o37[2] = "a2";
            o37.__proto__ = [];

            var o68 = [0];

            o68.__proto__ = o37;
            o68.length = 5;
            o68 = o68.concat([]);

            o33.o45('[0,"a1","a2",null,null]', JSON.stringify(o68));
        }
    },

    {
        name: "Blue 114364: __proto__: Object.preventExtensions should make [[prototype]] immutable",
        o29: function () {
            var o37 = {};
            Object.preventExtensions(o37);
            
            o33.o42(
                function () { o37.__proto__ = { o25: 1 } },
                o43);
            o33.o34(o37.__proto__ === Object.prototype, "__proto__ should remain unchanged");
        }
    },

    {
        name: "Blue 245453: __proto__: Invalid has-only-writable-data-property cache",
        o29: function () {
            var o37 = { __proto__: {} };
            o37.o25 = 0; // populate cache -- whole prototype chain has only writable data properties
            o37.__proto__.__proto__ = /a_regex/;
            o37.source = 1;

            o33.o45("a_regex", o37.source, "prototype chain should NOT has-only-writable-data-properties");
        }
    },

    {
        name: "Blue 245453: __proto__: Invalid has-only-writable-data-property cache -- verify cross-context",
        o29: function () {
            if (this.o0.o1) {
                var o108 = o109();
                var o110 = o108.eval('({b: 1})');

                var o37 = { __proto__: o110 };
                o33.o45(1, o37.o68, "a.b from prototype");

                o37.o25 = 0; // try to populate cache -- prototype chain has only writable data properties -- our code actually would not cache cross-context
                Object.defineProperty(o110, "y", { value: 2, enumerable: true, writable: false });
                o37.o26 = 1234;
                o33.o45(2, o37.o26, "prototype chain should NOT be has-only-writable-data-properties");
            }
        }
    },

    ];
} else {
    o27 = [
    {
        name: "Test Object.prototype.__proto__",
        o29: function () {
            o33.o34(Object.prototype.__proto__ === undefined, "Object.prototype.__proto__ only supported on IE11 or later");
            o33.o34(Object.hasOwnProperty("getPrototypeOf") && !Object.hasOwnProperty("setPrototypeOf"), "Object.setPrototypeOf only supported on IE11 or later");

            var o36 = { __proto__: { o117: 123 } }; // compat mode: not working in object literal
            o33.o45(undefined, o36.o117);
        }
    }
    ];
}

o118.o112(o27);
