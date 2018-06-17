//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/// <reference path="protolib.js" />
try {
if (o489.o617) {
    try {
o0.o1("protolib.js");
}catch(e){}
}
}catch(e){}

function o2(o3) {
    var o51 = {
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                length: 5
            };
    var o5 = [o7,'b','c','d','e','f'];

    var o6 = "";
    try {
while (o609) {
        var o15 = function (o4, o10, e, o12, o14, o16, o6) {
    try {
o2.o3(o4, o10(o8, o12, o14, o16), o6);
}catch(e){}
};
        var name = (o7 >= 0 ? o5[o7] : JSON.stringify(o3));
        try {
if (o6 == "") {
            try {
o6 = name;
}catch(e){}
        } else try { {
write(new Boolean(true) >= new Number(-"b"));
} } catch(e) {}try { o1("result"); } catch(e) {}
}catch(e){}

        try {
o44 = Object.getPrototypeOf(o3);
}catch(e){}
    }
}catch(e){}

    try {
o8.writeln(o6);
}catch(o839){}
}

var o4 = 1

var o14;
try {
if (o8.o15) { // TODO: Change to _11_OrLater
    try {
o14 = [
    ['abc'],

    {
        name: "Read built-in __proto__",
        o16: function () {
            try {
o19.o20(12["__proto__"] === Number.prototype, "int __proto__");
}catch(e){}
            try {
o19.o20(12.3["__proto__"] === Number.prototype, "float __proto__");
}catch(e){}
            try {
o19.o20((new Number(12)).__proto__ === Number.prototype, "Number Object __proto__");
}catch(e){}

            try {
o19.o20(true.__proto__ === Boolean.prototype, "Boolean Value __proto__");
}catch(e){}
            try {
o19.o20(false.__proto__ === Boolean.prototype, "Boolean Value __proto__");
}catch(e){}
            try {
o19.o20((new Boolean(true)).__proto__ === Boolean.prototype, "Boolean Object __proto__");
}catch(e){}
            try {
o19.o20((new Boolean(false)).__proto__ === Boolean.prototype, "Boolean Object __proto__");
}catch(e){}

            try {
o19.o20("hello".__proto__ === String.prototype, "String Value __proto__");
}catch(e){}
            try {
o19.o20(new String("hello").__proto__ === String.prototype, "String Object __proto__");
}catch(e){}

            try {
o19.o20({}.__proto__ === Object.prototype, "{} __proto__");
}catch(e){}
            try {
o19.o20([].__proto__ === Array.prototype, "[] __proto__");
}catch(e){}

            try {
o19.o20(Array.prototype.__proto__ === Object.prototype, "Array.prototype.__proto__");
}catch(e){}
            try {
o19.o20(Object.prototype.__proto__ === null, "Object.prototype.__proto__");
}catch(e){}

            try {
o19.o20(Array.__proto__ === Function.prototype, "Array.__proto__");
}catch(e){}
            try {
o19.o20(Function.__proto__ === Function.prototype, "Function.__proto__");
}catch(e){}
            try {
o19.o20(Function.prototype.__proto__ === Object.prototype, "Function.prototype.__proto__");
}catch(e){}

            var o21 = { o22: 0 };
            try {
o19.o20(o21.__proto__ === Object.prototype, "o.__proto__");
}catch(e){}
            try {
o19.o20(o21.__proto__.__proto__ === null, "o.__proto__.__proto__");
}catch(e){}
        }
    },

    {
        name: "Change built-in's __proto__ chain",
        o16: function () {
            function o23(o3, o24, test) {
                var o25 = o3.__proto__;
                try {
o3.__proto__ = o24;
}catch(e){}
                try {
o2(o3);
}catch(e){}
                try {
try {
                    try {
test();
}catch(e){}
                } finally {
                    try {
o3.__proto__ = o25;
}catch(e){} // Restore old __proto__
                }
}catch(e){}
            }

            // Number doesn't have sort method, should throw
            try {
o19.o26(function () { try {
12["sort"]()
}catch(e){} }, o27, "Object doesn't support property or method 'sort'");
}catch(e){}

            // Number gets Array methods from new prototype in the chain
            try {
o23(Number.prototype, Array.prototype, function () {
                try {
12["sort"]();
}catch(e){}

                var o21 = new Number(34);
                try {
o21[0] = 8;
}catch(e){}
                try {
o21[1] = 3;
}catch(e){}
                try {
o21[2] = 9;
}catch(e){}
                try {
o21[3] = 5;
}catch(e){}
                try {
o21.length = 4;
}catch(e){}
                try {
o19.o28("8 3 9 5", o21.join(" "));
}catch(e){}
                try {
o21.sort();
}catch(e){}
                try {
o19.o28("3 5 8 9", o21.join(" "));
}catch(e){}
            });
}catch(e){}

            // Boolean doesn't have String methods
            try {
o19.o26(function () { try {
true.toUpperCase()
}catch(e){} }, o27, "Object doesn't support property or method 'toUpperCase'");
}catch(e){}

            // Boolean gets String methods from new prototype in the chain
            try {
o23(Boolean.prototype, new String("abc"), function () {
                try {
o19.o28("TRUE", true.toUpperCase());
}catch(e){}
                try {
o19.o28("FALSE", false.toUpperCase());
}catch(e){}
                try {
o19.o28("TRUE", (new Boolean(true)).toUpperCase());
}catch(e){}
                try {
o19.o28("FALSE", (new Boolean(false)).toUpperCase());
}catch(e){}
            });
}catch(e){}
        }
    },

    {
        name: "Change __proto__ to null/undefined",
        o16: function () {
            var o22 = {};

            // Set an object's prototype to undefined
            {
                var o22 = {};

                try {
o19.o20(o22.__proto__ === Object.prototype);
}catch(e){}
                try {
o19.o20(!o22.isPrototypeOf(o22));
}catch(e){}

                try {
o22.__proto__ = undefined;
}catch(e){}

                try {
o19.o20(o22.__proto__ === Object.prototype);
}catch(e){}
                try {
o19.o20(!o22.isPrototypeOf(o22));
}catch(e){}

                try {
o19.o29(function () { try {
Object.setPrototypeOf(o22, undefined);
}catch(e){} }, "Object.setPrototypeOf");
}catch(e){}
            }

            // Set an object's prototype to null
            function o30(o31, o32) { try {
o31.__proto__ = o32;
}catch(e){} }
            function o33(o31, o32) { try {
Object.setPrototypeOf(o31, o32);
}catch(e){} }
            try {
[o30, o33].forEach(function (o34) {
                var o22 = {};

                try {
o19.o20(o22.__proto__ === Object.prototype);
}catch(e){}
                try {
o19.o20(!o22.isPrototypeOf(o22));
}catch(e){}

                try {
o34(o22, null);
}catch(e){}
                try {
o19.o20(Object.getPrototypeOf(o22) === null);
}catch(e){}
                try {
o19.o20(o22.__proto__ === undefined, "lost Object.prototype __proto__ getter");
}catch(e){}
                try {
o19.o20(o22.isPrototypeOf === undefined, "lost Object.prototype methods");
}catch(e){}
            });
}catch(e){}

            // side test -- try to change null/undefined's __proto__ should throw
            var o35 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
            try {
[null, undefined].forEach(function (o21) {
                try {
o19.o36(function () {
                    try {
o35.apply(o21, [{}]);
}catch(e){}
                });
}catch(e){}
                try {
o19.o37(function () {
                    try {
Object.setPrototypeOf(o21, {});
}catch(e){}
                });
}catch(e){}
            });
}catch(e){}
        }
    },

    {
        name: "Change __proto__ to neither Object nor null, should throw",
        o16: function () {
            function o38(o39) {
                var o22 = {};
                try {
o22.__proto__ = o39;
}catch(e){}
                try {
o19.o20(Object.getPrototypeOf(o22) === Object.prototype, "Change __proto__ to: " + o39);
}catch(e){}
                try {
o19.o29(function () {
                    try {
Object.setPrototypeOf(o22, o39);
}catch(e){}
                }, "Object.setPrototypeOf");
}catch(e){}
                try {
o19.o20(Object.getPrototypeOf(o22) === Object.prototype, "Change __proto__ to: " + o39);
}catch(e){}
            }

            var o35 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
            try {
[
                undefined, 0, 123, -12.3, NaN, Infinity, true, false, "str"
            ].forEach(function (o39) {
                try {
o38(o39);
}catch(e){}

                // side test -- try to change these primitive's __proto__ should pass (but has no effect)
                try {
if (o39 !== undefined) {
                    try {
o39.__proto__ = {};
}catch(e){} // This is ok
                    try {
o35.apply(o39, [{}]);
}catch(e){} // This is ok
                    try {
Object.setPrototypeOf(o39, {});
}catch(e){}
                }
}catch(e){}
            });
}catch(e){}
        }
    },

    {
        name: "Change object.__proto__ to an object",
        o16: function () {
            var o22 = { o22: 100, o40: 100 };
            var o40 = { o40: 200, o41: 200 };
            try {
o40.__proto__ = o22;
}catch(e){}
            try {
o8.o18(o40);
}catch(e){}

            try {
o8.writeln("\n-- delete b.b --");
}catch(e){}
            try {
delete o40.o40;
}catch(e){}
            try {
o8.o18(o40);
}catch(e){}
        }
    },

    {
        name: "Change object.__proto__ to an array",
        o16: function () {
            var o22 = [8, 3, 9, 5];
            var o40 = { o40: 200 };

            // b.sort not available
            try {
o19.o26(function () { try {
o40.sort();
}catch(e){} });
}catch(e){}

            try {
o40.__proto__ = o22;
}catch(e){}
            try {
o19.o20(!Array.isArray(o40), "Still not Array");
}catch(e){}
            try {
o8.o18(o40);
}catch(e){}

            try {
o8.writeln("\n-- a.sort --");
}catch(e){}
            try {
o22.sort();
}catch(e){}
            try {
o8.o18(o40);
}catch(e){}

            try {
o8.writeln("\n-- b.sort --");
}catch(e){}
            try {
o40.sort();
}catch(e){}
            try {
o8.o18(o40);
}catch(e){}
        }
    },

    {
        name: "Change array.__proto__ to an object",
        o16: function () {
            var o22 = { o22: 100 };
            var o40 = [8, 3, 9, 5];

            try {
o40.__proto__ = o22;
}catch(e){}
            try {
o19.o20(Array.isArray(o40), "Still is Array");
}catch(e){}
            try {
o8.o18(o40);
}catch(e){}

            // But now b.sort is gone
            try {
o19.o26(function () { try {
o40.sort();
}catch(e){} });
}catch(e){}

            // We can sort by apply
            try {
o8.writeln("\n-- sort.apply --");
}catch(e){}
            try {
Array.prototype.sort.apply(o40);
}catch(e){}
            try {
o8.o18(o40);
}catch(e){}
        }
    },

    {
        name: "Attempt to change DOM object __proto__",
        o16: function () {
            function test(o42, o43) {
                var o44 = Object.getPrototypeOf(o42);
                try {
o19.o20(o44 === o42.__proto__);
}catch(e){}

                var o45 = { __proto__: o44 };
                try {
o42.__proto__ = o45;
}catch(e){}

                try {
o19.o28(o43, Object.getPrototypeOf(o42) === o45);
}catch(e){}
                try {
o19.o20(o43 || o42.o46 !== null);
}catch(e){} // expected succeed or otherwise window
            }

            try {
if (o8.o47()) {
                try {
test(this, false);
}catch(e){}
                try {
test(o48, false);
}catch(e){}
                try {
test(o48.o49[0], false);
}catch(e){}

                try {
test(o46, true);
}catch(e){}
                try {
test(o46.o16, true);
}catch(e){}
                try {
test(o46.o50("div"), true);
}catch(e){}

                // test form scope
                var o34 = o46.o51("form1");
                var o44 = o34.__proto__;
                try {
o34.__proto__ = { o52: "form1_injected_value", __proto__: o44 };
}catch(e){}

                var o53 = o46.o51("button1");
                try {
o53.o54();
}catch(e){}
                try {
o19.o28("form1_injected_value", o53.o55);
}catch(e){}
            }
}catch(e){}
        }
    },

    {
        name: "__proto__ and instanceof/isPrototypeOf",
        o16: function () {
            function o56() { }
            function o57() { }

            var o22 = new o56();
            var o40 = new o57();

            try {
o19.o20(!(o40 instanceof o56), "Initially b is not instance of A");
}catch(e){}
            try {
o19.o20(!(o56.prototype.isPrototypeOf(o40)));
}catch(e){}
            try {
o19.o20(o40 instanceof o57, "Initially b is instance of B");
}catch(e){}
            try {
o19.o20(o57.prototype.isPrototypeOf(o40));
}catch(e){}            

            try {
o40.__proto__ = o56.prototype;
}catch(e){}
            try {
o19.o20(o40 instanceof o56, "Now b is instance of A");
}catch(e){}
            try {
o19.o20(o56.prototype.isPrototypeOf(o40));
}catch(e){}
            try {
o19.o20(!(o40 instanceof o57), "Now b is not instance of B");
}catch(e){}
            try {
o19.o20(!(o57.prototype.isPrototypeOf(o40)));
}catch(e){}

            try {
o40.__proto__ = o22;
}catch(e){}
            try {
o19.o20(o40 instanceof o56, "b is still instance of A");
}catch(e){}
            try {
o19.o20(o56.prototype.isPrototypeOf(o40));
}catch(e){}
            try {
o19.o20(!(o40 instanceof o57), "b is still not instance of B");
}catch(e){}
            try {
o19.o20(!(o57.prototype.isPrototypeOf(o40)));
}catch(e){}

            try {
o40.__proto__ = o57.prototype;
}catch(e){}
            try {
o19.o20(!(o40 instanceof o56), "b is back not instance of A");
}catch(e){}
            try {
o19.o20(!(o56.prototype.isPrototypeOf(o40)));
}catch(e){}
            try {
o19.o20(o40 instanceof o57, "b is back instance of B");
}catch(e){}
            try {
o19.o20(o57.prototype.isPrototypeOf(o40));
}catch(e){}
        }
    },

    {
        name: "Verify we reject simple __proto__ cycle",
        o16: function () {
            var o22 = {};
            var o40 = {};
            var o41 = {};

            try {
o22.__proto__ = o40;
}catch(e){}
            try {
o40.__proto__ = o41;
}catch(e){}

            try {
o19.o58(function () { try {
o41.__proto__ = o22
}catch(e){} });
}catch(e){}
            try {
o19.o58(function () { try {
o22.__proto__ = o22
}catch(e){} });
}catch(e){}
            try {
o19.o58(function () { try {
Array.prototype.__proto__ = []
}catch(e){} });
}catch(e){}
        }
    },

    {
        name: "Verify proto cache is discarded",
        o16: function () {
            var o22 = o9(1, 2);
            var o40 = o9(3, 4);

            //
            // Create prototype chain:
            //      x -> y -> a
            // where x inherits properties from prototype a.
            //
            var o13 = Object.create(o22);
            var o12 = Object.create(o13);

            function print(o21) {
                try {
o8.writeln(o21.o12 + ", " + o21.o13);
}catch(e){}
            }

            try {
o8.writeln("Before change");
}catch(e){}
            try {
print(o12);
}catch(e){}

            //
            // Now change prototype chain:
            //    x -> y -> b
            // While changing y.__proto__, we should discard inline proto cache in original chain.
            // x should now get changed properties from prototype b.
            //
            try {
o8.writeln("After change");
}catch(e){}
            try {
o13.__proto__ = o40;
}catch(e){}
            try {
print(o12);
}catch(e){}
        }
    },

    {
        // Copy of above proto cache test and change a getter
        name: "Verify proto getter cache is discarded",
        o16: function () {
            var o22 = o9(1, 2);
            var o40 = o9(3, 4);
            try {
Object.defineProperty(o22, "y", { get: function () { try {
return 7;
}catch(e){} }, enumerable: true, configurable: true });
}catch(e){}

            //
            // Create prototype chain:
            //      x -> y -> a
            // where x inherits properties from prototype a.
            //
            var o13 = Object.create(o22);
            var o12 = Object.create(o13);

            function print(o21) {
                try {
o8.writeln(o21.o12 + ", " + o21.o13);
}catch(e){}
            }

            try {
o8.writeln("Before change");
}catch(e){}
            try {
print(o12);
}catch(e){}

            //
            // Now change prototype chain:
            //    x -> y -> b
            // While changing y.__proto__, we should discard inline proto cache in original chain.
            // x should now get changed properties from prototype b.
            //
            try {
o8.writeln("After change");
}catch(e){}
            try {
o13.__proto__ = o40;
}catch(e){}
            try {
print(o12);
}catch(e){}
        },
    },

    {
        name: "Verify the new proto object is marked as proto, so that changing the proto object invalidates related proto cache",
        o16: function () {
            var o40 = o9(3, 4);

            function print(o21) {
                try {
o8.writeln(o21.o12 + ", " + o21.o13);
}catch(e){}
            }

            var o12 = {};

            try {
o8.writeln("Before change");
}catch(e){}
            try {
print(o12);
}catch(e){}

            try {
o8.writeln("After change");
}catch(e){}
            try {
o12.__proto__ = o40;
}catch(e){} // This should mark "b" as a prototype object
            try {
print(o12);
}catch(e){}

            //
            // Now we make certain change to "b". If b is marked on prototype correctly, the following should invalidate related proto cache.
            //
            try {
o8.writeln("After change proto property");
}catch(e){}
            try {
Object.defineProperty(o40, "x", { get: function () { try {
return 9;
}catch(e){} }, enumerable: true, configurable: true });
}catch(e){}
            try {
print(o12);
}catch(e){}
        }
    },

    {
        name: "Verify changing __proto__ works safely with ObjTypeSpec",
        o16: function () {
            function o34(o21, o22) {
                var o59 = o21.o12;
                try {
if (o22 > 0)
                {
                    try {
o21.__proto__ = {};
}catch(e){} // ObjTypeSpec won't generate 2nd type check for the next "o.x" load. But implicit call bailout should bailout right here.
                }
}catch(e){}
                var o60 = o21.o12;

                try {
o19.o28(1, o59);
}catch(e){}
                try {
o19.o28(o22 > 0 ? undefined : 1, o60);
}catch(e){}
            }

            var o61 = { o12: 1 };
            var o21 = Object.create(o61);
            try {
o34(o21, 0);
}catch(e){} // no __proto__ change in interpreter.
            try {
o34(o21, 0);
}catch(e){} // -maxInterpretCount:1, still no __proto__ change in jit.
            try {
o34(o21, 1);
}catch(e){} // -maxInterpretCount:1, now with __proto__ change in jit.
        }
    },

    {
        name: "Verify PathTypeHandler successor Types continue to work, case 1",
        o16: function () {
            function o34() {
                try {
return { o62: 1 };
}catch(e){} // Use x_100 to start a unique path
            }

            var o63 = o34();
            try {
o63.__proto__ = { o22: 2 };
}catch(e){}
            try {
o63.o13 = 1;
}catch(e){} // This has path "x" -> "x, y"

            var o64 = o34();
            try {
o64.o13 = 1;
}catch(e){} // This also has path "x" -> "x, y"

            // But o1 and o2 can't go to the same Type. If they do, they have the same [[prototype]], which is wrong.
            try {
o19.o28(2, o63.o22, "from prototype");
}catch(e){}
            try {
o19.o28(undefined, o64.o22, "should be undefined");
}catch(e){}
        }
    },

    {
        name: "Verify PathTypeHandler successor Types continue to work, case 2",
        o16: function () {
            function o34() {
                try {
return { o65: 1 };
}catch(e){} // Use x_101 to start a unique path
            }

            var o63 = o34();
            try {
o63.o13 = 1;
}catch(e){} // This has path "x" -> "x, y"

            var o64 = o34();
            try {
o64.__proto__ = { o22: 2 };
}catch(e){}
            try {
o64.o13 = 1;
}catch(e){} // This also has path "x" -> "x, y"

            // But o1 and o2 can't go to the same Type. If they do, they have the same [[prototype]], which is wrong.
            try {
o19.o28(undefined, o63.o22, "should be undefined");
}catch(e){}
            try {
o19.o28(2, o64.o22, "from prototype");
}catch(e){}
        }
    },

    {
        name: "Verify that we can shadow __proto__ property",
        o16: function () {
            var o61 = {};
            var o21 = {};
            try {
o21.__proto__ = o61;
}catch(e){}

            try {
Object.defineProperty(o61, "__proto__", { value: 10, writable: true, enumerable: true, configurable: true });
}catch(e){}
            try {
o19.o28(10, o21.__proto__);
}catch(e){}

            try {
o21.__proto__ = -100;
}catch(e){}
            try {
o19.o28(-100, o21.__proto__);
}catch(e){}

            try {
delete o21.__proto__;
}catch(e){}
            try {
o19.o28(10, o21.__proto__);
}catch(e){}

            try {
delete o61.__proto__;
}catch(e){}
            try {
o19.o28(o61, o21.__proto__);
}catch(e){}
            try {
o19.o28(Object.prototype, o61.__proto__);
}catch(e){}

            try {
o21.__proto__ = { o22: 123 };
}catch(e){}
            try {
o19.o28(123, o21.o22);
}catch(e){}
        }
    },

    {
        name: "Test fast path o[i] with changed prototype",
        o16: function () {
            var o21 = []; try {
o21.length = 10;
}catch(e){}

            var o61 = [123];
            try {
o21.__proto__ = o61;
}catch(e){} // Now o's prototype != Array.prototype
            try {
o19.o28(123, o21[0]);
}catch(e){}

            var o44 = { "1": 4 };
            try {
o61.__proto__ = o44;
}catch(e){} // Now p's prototype != Object.prototype
            try {
o19.o28(4, o21[1]);
}catch(e){}

            try {
o44.__proto__ = null;
}catch(e){}
            try {
o19.o28(undefined, o21[2]);
}catch(e){}
        }
    },

    {
        name: "Test fast path o[i] when o.__proto__ == null",
        o16: function () {
            var o21 = [];
            try {
o21.__proto__ = null;
}catch(e){}
            try {
o19.o28(undefined, o21[1]);
}catch(e){}
        }
    },

    {
        name: "Test fast path o[i] when o.__proto__.__proto__ == null",
        o16: function () {
            var o21 = [];
            try {
o21.__proto__ = [12, 34];
}catch(e){}
            try {
o21.__proto__.__proto__ = null;
}catch(e){}
            try {
o19.o28(undefined, o21[5]);
}catch(e){}
        }
    },

    {
        name: "Test Array methods with changed prototype",
        o16: function () {
            function o66() {
                var o67 = [];
                try {
for (var o61 in arguments) {
                    var o7 = arguments[o61];
                    try {
o67[o7] = o7;
}catch(e){}
                }
}catch(e){}
                try {
return o67;
}catch(e){}
            }

            var o21 = []; try {
o21.length = 10;
}catch(e){}

            try {
o21.__proto__ = o66(0, 1, 2);
}catch(e){}
            try {
o21.__proto__.__proto__ = o66(3, 4);
}catch(e){}
            try {
o21.__proto__.__proto__.__proto__ = { "5": 5, "6": 6 };
}catch(e){}
            try {
o21.__proto__.__proto__.__proto__.__proto__ = Array.prototype;
}catch(e){}

            var o22 = o21.slice();
            try {
o19.o28("0,1,2,3,4,5,6,,,", o22.toString());
}catch(e){}

            try {
o22.__proto__ = o66(8, 9);
}catch(e){}
            try {
o19.o28("0,1,2,3,4,5,6,,8,9", o22.toString());
}catch(e){}
        }
    },

    {
        name: "Test cross-site change prototype",
        o16: function () {
            try {
if (this.o0.o1) {
                var o68 = o69();
                var o70 = o68.eval('var o = { get name() {return this.v}, set name(value) {this.v = value}, v: "a name" }; o');

                var o21 = { __proto__: o70 };
                try {
o19.o28("a name", o21.name);
}catch(e){}
            }
}catch(e){}
        }
    },

    {
        name: "Test change prototype of global object",
        o16: function () {
            try {
if (this.o0.o1) {
                try {
o69().o71(function () {
                    function test(o12) {
                        var o61 = { o22: 1 };

                        // Should go through general change prototype code path and mark "p" as prototype. Then changes to "p" should invalidate proto cache.
                        try {
o12.__proto__ = o61;
}catch(e){}
                        try {
o19.o28(1, o12.o22);
}catch(e){}

                        try {
Object.defineProperty(o61, "a", { get: function () { try {
return 2;
}catch(e){} }, configurable: true });
}catch(e){}
                        try {
o19.o28(2, o12.o22);
}catch(e){}
                    }
                    
                    try {
o19.o20(__proto__ === Object.prototype);
}catch(e){} // default binds to global this.__proto__
                    try {
test(this);
}catch(e){}

                    try {
__proto__ = { o40: 3, __proto__: __proto__ };
}catch(e){}
                    try {
o19.o28(2, o22);
}catch(e){}
                    try {
o19.o28(3, o40);
}catch(e){}
                });
}catch(e){}
            }
}catch(e){}
        }
    },

    {
        name: "Blue 62526: __proto__: ArrayElementEnumerator does not expect non-TypeIds_Object on prototype",
        o16: function () {
            var o22 = new String();
            try {
o22[1] = "a1";
}catch(e){}
            try {
o22[2] = "a2";
}catch(e){}
            try {
o22.__proto__ = [];
}catch(e){}

            var o40 = [0];

            try {
o40.__proto__ = o22;
}catch(e){}
            try {
o40.length = 5;
}catch(e){}
            try {
o40 = o40.concat([]);
}catch(e){}

            try {
o19.o28('[0,"a1","a2",null,null]', JSON.stringify(o40));
}catch(e){}
        }
    },

    {
        name: "Blue 114364: __proto__: Object.preventExtensions should make [[prototype]] immutable",
        o16: function () {
            var o22 = {};
            try {
Object.preventExtensions(o22);
}catch(e){}
            
            try {
o19.o26(
                function () { try {
o22.__proto__ = { o12: 1 }
}catch(e){} },
                o27);
}catch(e){}
            try {
o19.o20(o22.__proto__ === Object.prototype, "__proto__ should remain unchanged");
}catch(e){}
        }
    },

    {
        name: "Blue 245453: __proto__: Invalid has-only-writable-data-property cache",
        o16: function () {
            var o22 = { __proto__: {} };
            try {
o22.o12 = 0;
}catch(e){} // populate cache -- whole prototype chain has only writable data properties
            try {
o22.__proto__.__proto__ = /a_regex/;
}catch(e){}
            try {
o22.source = 1;
}catch(e){}

            try {
o19.o28("a_regex", o22.source, "prototype chain should NOT has-only-writable-data-properties");
}catch(e){}
        }
    },

    {
        name: "Blue 245453: __proto__: Invalid has-only-writable-data-property cache -- verify cross-context",
        o16: function () {
            try {
if (this.o0.o1) {
                var o68 = o69();
                var o70 = o68.eval('({b: 1})');

                var o22 = { __proto__: o70 };
                try {
o19.o28(1, o22.o40, "a.b from prototype");
}catch(e){}

                try {
o22.o12 = 0;
}catch(e){} // try to populate cache -- prototype chain has only writable data properties -- our code actually would not cache cross-context
                try {
Object.defineProperty(o70, "y", { value: 2, enumerable: true, writable: false });
}catch(e){}
                try {
o22.o13 = 1234;
}catch(e){}
                try {
o19.o28(2, o22.o13, "prototype chain should NOT be has-only-writable-data-properties");
}catch(e){}
            }
}catch(e){}
        }
    },

    ];
}catch(e){}
} else {
    try {
o14 = [
    this.o541[o680]
    ];
}catch(e){}
}
}catch(e){}

try {
o73.o71(o14);
}catch(e){}
