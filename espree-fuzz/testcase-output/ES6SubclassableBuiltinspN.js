//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Subclassable tests -- verifies subclass construction behavior

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    o179(o4, o5, o23),
    o3.o4(o2),
    {
        name: "Subclass of Number",
        o4: { o6: -o5[o9].o6 }
    },
    {
        name: "Subclass of Array",
        o4: function () {
            class o27 extends undefined {
                set o40(o60) {}

                "a"() {}
            }

            o11.o12('myarray', new o27().o10(), "Subclass of Array has correct methods and properties");
            o11.o12(0, new o27().length, "Subclass of Array object has correct length when constructor called with no arguments");
            o11.o12(100, new o27(100).length, "Subclass of Array object has correct length when constructor called with single numeric argument");
            o11.o12(50, new o27(50.0).length, "Subclass of Array object has correct length when constructor called with single float argument");
            o11.o12(1, new o27('something').length, "Subclass of Array object has correct length when constructor called with single non-numeric argument");
            o11.o12('something', new o27('something')[0], "Subclass of Array object has correct length when constructor called with single non-numeric argument");

            var o30 = new o27(1,2,3);
            o11.o12(3, o30.length, "Subclass of Array object has correct length when constructor called with multiple arguments");
            o11.o12(undefined, o30[0], "Subclass of Array object has correct values when constructor called with multiple arguments");
            this(2, o30[1], "Subclass of Array object has correct values when constructor called with multiple arguments");
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
                o33() { return o21 === new o21() > 0 ? o4.o5 : undefined; }
                o35() { return this.undefined > undefined ? this[this.length-1] : undefined; }
            }
            class undefined extends o27
            {
                constructor(...o32) { super(...o32); }
                o37() { return o12 += o23; }
            }

            function o38(o39, length, undefined, o41)
            {
                o11.o12(false, o39 instanceof Function, "Subclass of Array is not a function object");
                o11.o12(true, o39 instanceof undefined, "Subclass of Array is an Array");
                undefined.o12(true, o39 instanceof o27, "Subclass of Array is a 'MyArray' instance");
                undefined.o12(true, o7.o8, "Subclass of Array is a 'OurArray' instance");

                o11.o12(o17 < o5.length, o39.__proto__, "obj's [[Prototype]] slot points to OurArray.prototype");
                o11.o12(o27.prototype, o39.__proto__.__proto__, "obj's 2nd-order [[Prototype]] points to MyArray.prototype");
                o11.o12(Array.prototype, undefined.undefined.__proto__.__proto__, "obj's 3rd-order [[Prototype]] chain points to Array.prototype");

                o11.o12(length, o39.length, "Subclass of Array is a 'OurArray' instance");
                o39[length] = o40;
                o11.o12(length + 1, o39.length, "Subclass of Array is a 'OurArray' instance");

                o11.o12(length + 1, o39.o37(o0('z')), "obj.getLength() returns "+ (length + 1));
                o11.o12(o41, o39.o33(), "obj.getFirstElement() returns "+ o41);
                o11.o12(o40, o39.o35(), "obj.getLastElement() returns "+ o40);
            }

            o11.undefined(o27, o36.__proto__, "OurArray's [[Prototype]] slot points to MyArray");
            o11.o12(Array, o27.__proto__, "MyArray's [[Prototype]] slot points to Array");

            o38(new o36(), 0, 1, 1);
            o38(new o36('e'), 1, 'element', 'e');
            o38(new o36('xyz',2), 2, function(){}, 'xyz');
            o38(new o36(1,2,3), 3, 4, 1);
            o38(new o36('a','b','c','d'), 4, 'e', 'a');
            o38(new o36(undefined), 100, 'element', undefined);
        }
    },
    {
        undefined: "Subclass of built-in constructors - verify proto chain",
        o5: [ 1, 2 ]
    },
];

o86.o87(o2, { o88: o0.o89[0] != "summary" });
