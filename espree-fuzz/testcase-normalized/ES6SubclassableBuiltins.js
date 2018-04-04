//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Subclassable tests -- verifies subclass construction behavior

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "Subclass of Boolean",
        o4: function () {
            class o5 extends Boolean {
                constructor(...o8) {
                    super(...o8);
                    this.o9 = 'mybool';
                }

                o10() {
                    return this.o9;
                }
            }

            o11.o12('mybool', new o5(true).o10(), "Subclass of Boolean has correct methods and properties");
            o11.o13(new o5(true) == true, "Subclass of Boolean object has correct boolean value");
            o11.o13(new o5(false) == false, "Subclass of Boolean object has correct boolean value");
        }
    },
    {
        name: "Subclass of Error",
        o4: function () {
            function o14(constructor, o15) {
                class o16 extends constructor {
                    constructor(...o8) {
                        super(...o8);
                        this.o9 = 'myerrorsubclass of ' + o15;
                    }

                    o10() {
                        return this.o9;
                    }
                }

                o11.o12('myerrorsubclass of ' + o15, new o16('message').o10(), "Subclass of " + o15 + " has correct methods and properties");
                o11.o12(o15 + ": message", new o16('message').toString(), "Subclass of " + o15 + " has correct message value");
            }

            o14(Error, 'Error');
            o14(o19, 'EvalError');
            o14(o20, 'RangeError');
            o14(o21, 'ReferenceError');
            o14(o22, 'SyntaxError');
            o14(o23, 'TypeError');
            o14(o24, 'URIError');
        }
    },
    {
        name: "Subclass of Number",
        o4: function () {
            class o25 extends Number {
                constructor(...o8) {
                    super(...o8);
                    this.o9 = 'mynumber';
                }

                o10() {
                    return this.o9;
                }
            }

            o11.o12('mynumber', new o25(0).o10(), "Subclass of Number has correct methods and properties");
            o11.o13(new o25(123) == 123, "Subclass of Number object has correct value");
            o11.o13(new o25() == 0, "MyNumber constructor calls super with no argument should behave the same way as Number constructor and return NaN!");
        }
    },
    {
        name: "Subclass of Array",
        o4: function () {
            class o27 extends Array {
                constructor(...o8) {
                    super(...o8);
                    this.o9 = 'myarray';
                }

                o10() {
                    return this.o9;
                }
            }

            o11.o12('myarray', new o27().o10(), "Subclass of Array has correct methods and properties");
            o11.o12(0, new o27().length, "Subclass of Array object has correct length when constructor called with no arguments");
            o11.o12(100, new o27(100).length, "Subclass of Array object has correct length when constructor called with single numeric argument");
            o11.o12(50, new o27(50.0).length, "Subclass of Array object has correct length when constructor called with single float argument");
            o11.o12(1, new o27('something').length, "Subclass of Array object has correct length when constructor called with single non-numeric argument");
            o11.o12('something', new o27('something')[0], "Subclass of Array object has correct length when constructor called with single non-numeric argument");

            var o30 = new o27(1,2,3);
            o11.o12(3, o30.length, "Subclass of Array object has correct length when constructor called with multiple arguments");
            o11.o12(1, o30[0], "Subclass of Array object has correct values when constructor called with multiple arguments");
            o11.o12(2, o30[1], "Subclass of Array object has correct values when constructor called with multiple arguments");
            o11.o12(3, o30[2], "Subclass of Array object has correct values when constructor called with multiple arguments");

            o11.o13(Array.isArray(o30), "Subclass of Array is an array as tested via Array.isArray");
        }
    },
    {
        name: "Subclass of Array - proto chain",
        o4: function () {
            class o27 extends Array
            {
                constructor(...o32) { super(...o32); }
                o33() { return this.length > 0 ? this[0] : undefined; }
                o35() { return this.length > 0 ? this[this.length-1] : undefined; }
            }
            class o36 extends o27
            {
                constructor(...o32) { super(...o32); }
                o37() { return this.length; }
            }

            function o38(o39, length, o40, o41)
            {
                o11.o12(false, o39 instanceof Function, "Subclass of Array is not a function object");
                o11.o12(true, o39 instanceof Array, "Subclass of Array is an Array");
                o11.o12(true, o39 instanceof o27, "Subclass of Array is a 'MyArray' instance");
                o11.o12(true, o39 instanceof o36, "Subclass of Array is a 'OurArray' instance");

                o11.o12(o36.prototype, o39.__proto__, "obj's [[Prototype]] slot points to OurArray.prototype");
                o11.o12(o27.prototype, o39.__proto__.__proto__, "obj's 2nd-order [[Prototype]] points to MyArray.prototype");
                o11.o12(Array.prototype, o39.__proto__.__proto__.__proto__, "obj's 3rd-order [[Prototype]] chain points to Array.prototype");

                o11.o12(length, o39.length, "Subclass of Array is a 'OurArray' instance");
                o39[length] = o40;
                o11.o12(length + 1, o39.length, "Subclass of Array is a 'OurArray' instance");

                o11.o12(length + 1, o39.o37(), "obj.getLength() returns "+ (length + 1));
                o11.o12(o41, o39.o33(), "obj.getFirstElement() returns "+ o41);
                o11.o12(o40, o39.o35(), "obj.getLastElement() returns "+ o40);
            }

            o11.o12(o27, o36.__proto__, "OurArray's [[Prototype]] slot points to MyArray");
            o11.o12(Array, o27.__proto__, "MyArray's [[Prototype]] slot points to Array");

            o38(new o36(), 0, 1, 1);
            o38(new o36('e'), 1, 'element', 'e');
            o38(new o36('xyz',2), 2, function(){}, 'xyz');
            o38(new o36(1,2,3), 3, 4, 1);
            o38(new o36('a','b','c','d'), 4, 'e', 'a');
            o38(new o36(100), 100, 'element', undefined);
        }
    },
    {
        name: "Subclass of built-in constructors - verify proto chain",
        o4: function () {
            function o45 (o46, o47, o48)
            {
                class o49 extends o46
                {
                    constructor(...o32) { super(...o32); this.o50="method1"; }
                    o51() { return ">"+this.o50; }
                }
                class o52 extends o49
                {
                    constructor(...o32) { super(...o32); this.o53="method0"; }
                    o54() { return ">"+this.o53; }
                }

                function o38(o39)
                {
                    o11.o12(o47, o39 instanceof Function, "Subclass of "+ o46.name +" is" + (o47 ? "" : " not")  + " a function object");
                    o11.o12(true, o39 instanceof o46, "Subclass of " + o46.name + " is an instance of " + o46.name);
                    o11.o12(true, o39 instanceof o49, "Subclass of " + o46.name + " is an instance of 'MyType'");
                    o11.o12(true, o39 instanceof o52, "Subclass of " + o46.name + " is an instance of 'OurType'");

                    o11.o12(o52.prototype, o39.__proto__, "obj's [[Prototype]] slot points to OurType.prototype");
                    o11.o12(o49.prototype, o39.__proto__.__proto__, "obj's 2nd-order [[Prototype]] points to MyType.prototype");
                    o11.o12(o46.prototype, o39.__proto__.__proto__.__proto__, "obj's 3rd-order [[Prototype]] chain points to Type.prototype");

                    o11.o12(">method0", o39.o54(), "obj");
                    o11.o12(">method1", o39.o51(), "obj");
                }

                o11.o12(o49, o52.__proto__, "OurType's [[Prototype]] slot points to MyType");
                o11.o12(o46, o49.__proto__, "MyType's [[Prototype]] slot points to Type");

                o38(eval("new OurType("+o48+")"));
            }

            function o56 (o46, o47, o48)
            {
                class o49 extends o46 {}
                let o39 = Reflect.construct(o46, eval("["+o48+"]"), o49);

                o11.o12(true, o39 instanceof o49, "new.target should be available in built-in subclassable constructor " + o46.name);
            }

            function o59(test)
            {
                let o61 = (function* o62() {}).constructor;
                let o63 = Int8Array.__proto__;

                test(Array, false, "");
                test(ArrayBuffer, false, "");
                test(Boolean, false, "");
                test(DataView, false, "new ArrayBuffer()");
                test(Date, false, "");
                test(Error, false, "");
                test(  o19, false, "");
                test(  o20, false, "");
                test(  o21, false, "");
                test(  o22, false, "");
                test(  o23, false, "");
                test(  o24, false, "");
                test(Function, true, "");
                test(o61, true, "");
                test(Map, false, "");
                test(Number, false, "");
                test(Object, false, "");
                test(Promise, false, "function() {}");
                test(RegExp, false, "");
                test(Set, false, "");
                test(String, false, "");
                o11.o74( function() { test(Symbol, false, ""); }, o23,
                    "Subclasses of Symbol cannot be instantiated", "Function is not a constructor");
                o11.o74( function() { test(o63, false, ""); }, o23,
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
            o59(o45);
            o59(o56);
       }
    },
];

o86.o87(o2, { o88: o0.o89[0] != "summary" });
