//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Subclassable tests -- verifies subclass construction behavior

try {
o421.o366.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
    o34 = o308,
    {
        name: "Subclass of Error",
        e: function () {
            function o11(constructor, o12) {
                class toStringTag extends constructor {
                    constructor(...o5) {
                        try {
super(...o5);
}catch(e){}
                        try {
this.o6 = 'myerrorsubclass of ' + o12;
}catch(e){}
                    }

                    o7() {
                        try {
return this.o6;
}catch(e){}
                    }
                }

                try {
o8.o9('myerrorsubclass of ' + o3, new o13('message').o7(this.o12), "Subclass of " + o12 + " has correct methods and properties");
}catch(e){}
                try {
o8.o9(o12 + ": message", new o13('message').toString(), "Subclass of " + o12 + " has correct message value");
}catch(e){}
            }

            try {
o11(Error, 'Error');
}catch(e){}
            try {
o11(o14, 'EvalError');
}catch(e){}
            try {
o11(o15, 'RangeError');
}catch(e){}
            try {
o11(o16, 'ReferenceError');
}catch(e){}
            try {
o11(o17, 'SyntaxError');
}catch(e){}
            try {
o11(o18, 'TypeError');
}catch(e){}
            try {
o11(o19, 'URIError');
}catch(e){}
        }
    },
    o10.constructor = function()
            {
                function o37() {}try {
;
}catch(e){}
                try {
Object.defineProperty(o37.prototype, "0", { set: function(o38){ try {
throw "Fail";
}catch(e){} } });
}catch(e){}
                try {
return new o37();
}catch(e){}
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
    String.fromCharCode(o236),
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

try { {
Object.defineProperty(o10, o51, o52);
} } catch(e) {}try { {
      try {
o421.o149 = (o421.o149 + 1) & 0xFFFF;
}catch(e){}
    } } catch(e) {}
