//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Subclassable tests -- verifies subclass construction behavior

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
    o1062 = o308,
    function () { // Test in current engine to use switch -ForceSerialized
            var o12 = {
                o19: 100,
                __proto__: { o24: "p0", o26: "p1" },
                o21: 300,
            };

            // Serialized bytecode should correctly mark if initializer has__proto__
            try {
o13.o14("a,b", Object.keys(o12).toString());
}catch(e){}
        },
    {
        name: "Subclass of Number",
        o3: function () {
            class o20 extends Number {
                constructor(...o5) {
                    try {
super(...o5);
}catch(e){}
                    try {
this.o6 = 'mynumber';
}catch(e){}
                }

                o7() {
                    try {
return this.o6;
}catch(e){}
                }
            }

            try {
o8.o9('mynumber', new o20(0).o7(), "Subclass of Number has correct methods and properties");
}catch(e){}
            try {
o8.o10(new o20(123) == 123, "Subclass of Number object has correct value");
}catch(e){}
            try {
o8.o10(new o20() == 0, "MyNumber constructor calls super with no argument should behave the same way as Number constructor and return NaN!");
}catch(e){}
        }
    },
    {
        name: "Subclass of Array",
        o3: function () {
            class o21 extends Array {
                constructor(...o5) {
                    try {
super(...o5);
}catch(e){}
                    try {
this.o6 = 'myarray';
}catch(e){}
                }

                o7() {
                    try {
return this.o6;
}catch(e){}
                }
            }

            try {
o8.o9('myarray', new o21().o7(), "Subclass of Array has correct methods and properties");
}catch(e){}
            try {
o8.o9(0, new o21().length, "Subclass of Array object has correct length when constructor called with no arguments");
}catch(e){}
            try {
o8.o9(100, new o21(100).length, "Subclass of Array object has correct length when constructor called with single numeric argument");
}catch(e){}
            try {
o8.o9(50, new o21(50.0).length, "Subclass of Array object has correct length when constructor called with single float argument");
}catch(e){}
            try {
o8.o9(1, new o21('something').length, "Subclass of Array object has correct length when constructor called with single non-numeric argument");
}catch(e){}
            try {
o8.o9('something', new o21('something')[0], "Subclass of Array object has correct length when constructor called with single non-numeric argument");
}catch(e){}

            var o22 = new o21(1,2,3);
            try {
o8.o9(3, o22.length, "Subclass of Array object has correct length when constructor called with multiple arguments");
}catch(e){}
            try {
o8.o9(1, o22[0], "Subclass of Array object has correct values when constructor called with multiple arguments");
}catch(e){}
            try {
o8.o9(2, o22[1], "Subclass of Array object has correct values when constructor called with multiple arguments");
}catch(e){}
            try {
o8.o9(3, o22[2], "Subclass of Array object has correct values when constructor called with multiple arguments");
}catch(e){}

            try {
o8.o10(Array.isArray(o22), "Subclass of Array is an array as tested via Array.isArray");
}catch(e){}
        }
    },
    {
        name: "Subclass of Array - proto chain",
        o3: function () {
            class o21 extends Array
            {
                constructor(...o23) { try {
super(...o23);
}catch(e){} }
                o24() { try {
return this.length > 0 ? this[0] : undefined;
}catch(e){} }
                o25() { try {
return this.length > 0 ? this[this.length-1] : undefined;
}catch(e){} }
            }
            class o26 extends o21
            {
                constructor(...o23) { try {
super(...o23);
}catch(e){} }
                o27() { try {
return this.length;
}catch(e){} }
            }

            function o28(o29, length, o30, o31)
            {
                try {
o8.o9(false, o29 instanceof Function, "Subclass of Array is not a function object");
}catch(e){}
                try {
o8.o9(true, o29 instanceof Array, "Subclass of Array is an Array");
}catch(e){}
                try {
o8.o9(true, o29 instanceof o21, "Subclass of Array is a 'MyArray' instance");
}catch(e){}
                try {
o8.o9(true, o29 instanceof o26, "Subclass of Array is a 'OurArray' instance");
}catch(e){}

                try {
o8.o9(o26.prototype, o29.__proto__, "obj's [[Prototype]] slot points to OurArray.prototype");
}catch(e){}
                try {
o8.o9(o21.prototype, o29.__proto__.__proto__, "obj's 2nd-order [[Prototype]] points to MyArray.prototype");
}catch(e){}
                try {
o8.o9(Array.prototype, o29.__proto__.__proto__.__proto__, "obj's 3rd-order [[Prototype]] chain points to Array.prototype");
}catch(e){}

                try {
o8.o9(length, o29.length, "Subclass of Array is a 'OurArray' instance");
}catch(e){}
                try {
o29[length] = o30;
}catch(e){}
                try {
o8.o9(length + 1, o29.length, "Subclass of Array is a 'OurArray' instance");
}catch(e){}

                try {
o8.o9(length + 1, o29.o27(), "obj.getLength() returns "+ (length + 1));
}catch(e){}
                try {
o8.o9(o31, o29.o24(), "obj.getFirstElement() returns "+ o31);
}catch(e){}
                try {
o8.o9(o30, o29.o25(), "obj.getLastElement() returns "+ o30);
}catch(e){}
            }

            try {
o8.o9(o21, o26.__proto__, "OurArray's [[Prototype]] slot points to MyArray");
}catch(e){}
            try {
o8.o9(Array, o21.__proto__, "MyArray's [[Prototype]] slot points to Array");
}catch(e){}

            try {
o28(new o26(), 0, 1, 1);
}catch(e){}
            try {
o28(new o26('e'), 1, 'element', 'e');
}catch(e){}
            try {
o28(new o26('xyz',2), 2, function(){}, 'xyz');
}catch(e){}
            try {
o28(new o26(1,2,3), 3, 4, 1);
}catch(e){}
            try {
o28(new o26('a','b','c','d'), 4, 'e', 'a');
}catch(e){}
            try {
o28(new o26(100), 100, 'element', undefined);
}catch(e){}
        }
    },
    {
        name: "Subclass of built-in constructors - verify proto chain",
        o3: function () {
            function o32 (o33, o34, o35)
            {
                class o36 extends o33
                {
                    constructor(...o23) { try {
super(...o23);
}catch(e){} try {
this.o37="method1";
}catch(e){} }
                    o38() { try {
return ">"+this.o37;
}catch(e){} }
                }
                class o39 extends o36
                {
                    constructor(...o23) { try {
super(...o23);
}catch(e){} try {
this.o40="method0";
}catch(e){} }
                    o41() { try {
return ">"+this.o40;
}catch(e){} }
                }

                function o28(o29)
                {
                    try {
o8.o9(o34, o29 instanceof Function, "Subclass of "+ o33.name +" is" + (o34 ? "" : " not")  + " a function object");
}catch(e){}
                    try {
o8.o9(true, o29 instanceof o33, "Subclass of " + o33.name + " is an instance of " + o33.name);
}catch(e){}
                    try {
o8.o9(true, o29 instanceof o36, "Subclass of " + o33.name + " is an instance of 'MyType'");
}catch(e){}
                    try {
o8.o9(true, o29 instanceof o39, "Subclass of " + o33.name + " is an instance of 'OurType'");
}catch(e){}

                    try {
o8.o9(o39.prototype, o29.__proto__, "obj's [[Prototype]] slot points to OurType.prototype");
}catch(e){}
                    try {
o8.o9(o36.prototype, o29.__proto__.__proto__, "obj's 2nd-order [[Prototype]] points to MyType.prototype");
}catch(e){}
                    try {
o8.o9(o33.prototype, o29.__proto__.__proto__.__proto__, "obj's 3rd-order [[Prototype]] chain points to Type.prototype");
}catch(e){}

                    try {
o8.o9(">method0", o29.o41(), "obj");
}catch(e){}
                    try {
o8.o9(">method1", o29.o38(), "obj");
}catch(e){}
                }

                try {
o8.o9(o36, o39.__proto__, "OurType's [[Prototype]] slot points to MyType");
}catch(e){}
                try {
o8.o9(o33, o36.__proto__, "MyType's [[Prototype]] slot points to Type");
}catch(e){}

                try {
o28(eval("new OurType("+o35+")"));
}catch(e){}
            }

            function o42 (o33, o34, o35)
            {
                class o36 extends o33 {}
                let o29 = Reflect.construct(o33, eval("["+o35+"]"), o36);

                try {
o8.o9(true, o29 instanceof o36, "new.target should be available in built-in subclassable constructor " + o33.name);
}catch(e){}
            }

            function o43(test)
            {
                let o44 = (function* o45() {}).constructor;
                let o46 = Int8Array.__proto__;

                try {
test(Array, false, "");
}catch(e){}
                try {
test(ArrayBuffer, false, "");
}catch(e){}
                try {
test(Boolean, false, "");
}catch(e){}
                try {
test(DataView, false, "new ArrayBuffer()");
}catch(e){}
                try {
test(Date, false, "");
}catch(e){}
                try {
test(Error, false, "");
}catch(e){}
                try {
test(  o14, false, "");
}catch(e){}
                try {
test(  o15, false, "");
}catch(e){}
                try {
test(  o16, false, "");
}catch(e){}
                try {
test(  o17, false, "");
}catch(e){}
                try {
test(  o18, false, "");
}catch(e){}
                try {
test(  o19, false, "");
}catch(e){}
                try {
test(Function, true, "");
}catch(e){}
                try {
test(o44, true, "");
}catch(e){}
                try {
test(Map, false, "");
}catch(e){}
                try {
test(Number, false, "");
}catch(e){}
                try {
test(Object, false, "");
}catch(e){}
                try {
test(Promise, false, "function() {}");
}catch(e){}
                try {
test(RegExp, false, "");
}catch(e){}
                try {
test(Set, false, "");
}catch(e){}
                try {
test(String, false, "");
}catch(e){}
                try {
o8.o47( function() { try {
test(Symbol, false, "");
}catch(e){} }, o18,
                    "Subclasses of Symbol cannot be instantiated", "Function is not a constructor");
}catch(e){}
                try {
o8.o47( function() { try {
test(o46, false, "");
}catch(e){} }, o18,
                    "Subclasses of typed array constructor cannot be instantiated", "Typed array constructor argument is invalid");
}catch(e){}
                try {
test(  Int8Array, false, "");
}catch(e){}
                try {
test(  Int16Array, false, "");
}catch(e){}
                try {
test(  Int32Array, false, "");
}catch(e){}
                try {
test(  Uint8Array, false, "");
}catch(e){}
                try {
test(  Uint8ClampedArray, false, "");
}catch(e){}
                try {
test(  Uint16Array, false, "");
}catch(e){}
                try {
test(  Uint32Array, false, "");
}catch(e){}
                try {
test(  Float32Array, false, "");
}catch(e){}
                try {
test(  Float64Array, false, "");
}catch(e){}
                try {
test(WeakMap, false, "");
}catch(e){}
                try {
test(WeakSet, false, "");
}catch(e){}
            }
            try {
o43(o32);
}catch(e){}
            try {
o43(o42);
}catch(e){}
       }
    },
];

try {
o48.o49(o4, Symbol.for);
}catch(o0){}
