//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Subclassable tests -- verifies subclass construction behavior

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "Subclass of Boolean",
        o3: function () {
            class o4 extends Boolean {
                constructor(...o5) {
                    super(...o5);
                    this.o6 = 'mybool';
                }

                o7() {
                    return this.o6;
                }
            }

            o8.o9('mybool', new o4(true).o7(), "Subclass of Boolean has correct methods and properties");
            o8.o10(new o4(true) == true, "Subclass of Boolean object has correct boolean value");
            o8.o10(new o4(false) == false, "Subclass of Boolean object has correct boolean value");
        }
    },
    {
        name: "Subclass of Error",
        o3: function () {
            function o11(constructor, o12) {
                class o13 extends constructor {
                    constructor(...o5) {
                        super(...o5);
                        this.o6 = 'myerrorsubclass of ' + o12;
                    }

                    o7() {
                        return this.o6;
                    }
                }

                o8.o9('myerrorsubclass of ' + o12, new o13('message').o7(), "Subclass of " + o12 + " has correct methods and properties");
                o8.o9(o12 + ": message", new o13('message').toString(), "Subclass of " + o12 + " has correct message value");
            }

            o11(Error, 'Error');
            o11(o14, 'EvalError');
            o11(o15, 'RangeError');
            o11(o16, 'ReferenceError');
            o11(o17, 'SyntaxError');
            o11(o18, 'TypeError');
            o11(o19, 'URIError');
        }
    },
    {
        name: "Subclass of Number",
        o3: function () {
            class o20 extends Number {
                constructor(...o5) {
                    super(...o5);
                    this.o6 = 'mynumber';
                }

                o7() {
                    return this.o6;
                }
            }

            o8.o9('mynumber', new o20(0).o7(), "Subclass of Number has correct methods and properties");
            o8.o10(new o20(123) == 123, "Subclass of Number object has correct value");
            o8.o10(new o20() == 0, "MyNumber constructor calls super with no argument should behave the same way as Number constructor and return NaN!");
        }
    },
    {
        name: "Subclass of Array",
        o3: function () {
            class o21 extends Array {
                constructor(...o5) {
                    super(...o5);
                    this.o6 = 'myarray';
                }

                o7() {
                    return this.o6;
                }
            }

            o8.o9('myarray', new o21().o7(), "Subclass of Array has correct methods and properties");
            o8.o9(0, new o21().length, "Subclass of Array object has correct length when constructor called with no arguments");
            o8.o9(100, new o21(100).length, "Subclass of Array object has correct length when constructor called with single numeric argument");
            o8.o9(50, new o21(50.0).length, "Subclass of Array object has correct length when constructor called with single float argument");
            o8.o9(1, new o21('something').length, "Subclass of Array object has correct length when constructor called with single non-numeric argument");
            o8.o9('something', new o21('something')[0], "Subclass of Array object has correct length when constructor called with single non-numeric argument");

            var o22 = new o21(1,2,3);
            o8.o9(3, o22.length, "Subclass of Array object has correct length when constructor called with multiple arguments");
            o8.o9(1, o22[0], "Subclass of Array object has correct values when constructor called with multiple arguments");
            o8.o9(2, o22[1], "Subclass of Array object has correct values when constructor called with multiple arguments");
            o8.o9(3, o22[2], "Subclass of Array object has correct values when constructor called with multiple arguments");

            o8.o10(Array.isArray(o22), "Subclass of Array is an array as tested via Array.isArray");
        }
    },
    {
        name: "Subclass of Array - proto chain",
        o3: function () {
            class o21 extends Array
            {
                constructor(...o23) { super(...o23); }
                o24() { return this.length > 0 ? this[0] : undefined; }
                o25() { return this.length > 0 ? this[this.length-1] : undefined; }
            }
            class o26 extends o21
            {
                constructor(...o23) { super(...o23); }
                o27() { return this.length; }
            }

            function o28(o29, length, o30, o31)
            {
                o8.o9(false, o29 instanceof Function, "Subclass of Array is not a function object");
                o8.o9(true, o29 instanceof Array, "Subclass of Array is an Array");
                o8.o9(true, o29 instanceof o21, "Subclass of Array is a 'MyArray' instance");
                o8.o9(true, o29 instanceof o26, "Subclass of Array is a 'OurArray' instance");

                o8.o9(o26.prototype, o29.__proto__, "obj's [[Prototype]] slot points to OurArray.prototype");
                o8.o9(o21.prototype, o29.__proto__.__proto__, "obj's 2nd-order [[Prototype]] points to MyArray.prototype");
                o8.o9(Array.prototype, o29.__proto__.__proto__.__proto__, "obj's 3rd-order [[Prototype]] chain points to Array.prototype");

                o8.o9(length, o29.length, "Subclass of Array is a 'OurArray' instance");
                o29[length] = o30;
                o8.o9(length + 1, o29.length, "Subclass of Array is a 'OurArray' instance");

                o8.o9(length + 1, o29.o27(), "obj.getLength() returns "+ (length + 1));
                o8.o9(o31, o29.o24(), "obj.getFirstElement() returns "+ o31);
                o8.o9(o30, o29.o25(), "obj.getLastElement() returns "+ o30);
            }

            o8.o9(o21, o26.__proto__, "OurArray's [[Prototype]] slot points to MyArray");
            o8.o9(Array, o21.__proto__, "MyArray's [[Prototype]] slot points to Array");

            o28(new o26(), 0, 1, 1);
            o28(new o26('e'), 1, 'element', 'e');
            o28(new o26('xyz',2), 2, function(){}, 'xyz');
            o28(new o26(1,2,3), 3, 4, 1);
            o28(new o26('a','b','c','d'), 4, 'e', 'a');
            o28(new o26(100), 100, 'element', undefined);
        }
    },
    {
        name: "Subclass of built-in constructors - verify proto chain",
        o3: function () {
            function o32 (o33, o34, o35)
            {
                class o36 extends o33
                {
                    constructor(...o23) { super(...o23); this.o37="method1"; }
                    o38() { return ">"+this.o37; }
                }
                class o39 extends o36
                {
                    constructor(...o23) { super(...o23); this.o40="method0"; }
                    o41() { return ">"+this.o40; }
                }

                function o28(o29)
                {
                    o8.o9(o34, o29 instanceof Function, "Subclass of "+ o33.name +" is" + (o34 ? "" : " not")  + " a function object");
                    o8.o9(true, o29 instanceof o33, "Subclass of " + o33.name + " is an instance of " + o33.name);
                    o8.o9(true, o29 instanceof o36, "Subclass of " + o33.name + " is an instance of 'MyType'");
                    o8.o9(true, o29 instanceof o39, "Subclass of " + o33.name + " is an instance of 'OurType'");

                    o8.o9(o39.prototype, o29.__proto__, "obj's [[Prototype]] slot points to OurType.prototype");
                    o8.o9(o36.prototype, o29.__proto__.__proto__, "obj's 2nd-order [[Prototype]] points to MyType.prototype");
                    o8.o9(o33.prototype, o29.__proto__.__proto__.__proto__, "obj's 3rd-order [[Prototype]] chain points to Type.prototype");

                    o8.o9(">method0", o29.o41(), "obj");
                    o8.o9(">method1", o29.o38(), "obj");
                }

                o8.o9(o36, o39.__proto__, "OurType's [[Prototype]] slot points to MyType");
                o8.o9(o33, o36.__proto__, "MyType's [[Prototype]] slot points to Type");

                o28(eval("new OurType("+o35+")"));
            }

            function o42 (o33, o34, o35)
            {
                class o36 extends o33 {}
                let o29 = Reflect.construct(o33, eval("["+o35+"]"), o36);

                o8.o9(true, o29 instanceof o36, "new.target should be available in built-in subclassable constructor " + o33.name);
            }

            function o43(test)
            {
                let o44 = (function* o45() {}).constructor;
                let o46 = Int8Array.__proto__;

                test(Array, false, "");
                test(ArrayBuffer, false, "");
                test(Boolean, false, "");
                test(DataView, false, "new ArrayBuffer()");
                test(Date, false, "");
                test(Error, false, "");
                test(  o14, false, "");
                test(  o15, false, "");
                test(  o16, false, "");
                test(  o17, false, "");
                test(  o18, false, "");
                test(  o19, false, "");
                test(Function, true, "");
                test(o44, true, "");
                test(Map, false, "");
                test(Number, false, "");
                test(Object, false, "");
                test(Promise, false, "function() {}");
                test(RegExp, false, "");
                test(Set, false, "");
                test(String, false, "");
                o8.o47( function() { test(Symbol, false, ""); }, o18,
                    "Subclasses of Symbol cannot be instantiated", "Function is not a constructor");
                o8.o47( function() { test(o46, false, ""); }, o18,
                    "Subclasses of typed array constructor cannot be instantiated", "Typed array constructor argument is invalid");
                test(  Int8Array, false, "");
                test(  Int16Array, false, "");
                test(  Int32Array, false, "");
                test(  Uint8Array, false, "");
                test(  Uint8ClampedArray, false, "");
                test(  Uint16Array, false, "");
                test(  Uint32Array, false, "");
                test(  Float32Array, false, "");
                test(  Float64Array, false, "");
                test(WeakMap, false, "");
                test(WeakSet, false, "");
            }
            o43(o32);
            o43(o42);
       }
    },
];

o48.o49(o2, { o50: o0.o51[0] != "summary" });
