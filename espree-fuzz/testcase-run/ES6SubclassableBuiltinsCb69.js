//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Subclassable tests -- verifies subclass construction behavior

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
    this.o459,
    {
        name: "Subclass of Error",
        o3: function () {
            function o82(o49, o50, o73) {
                try {
o4.o11(o70, o49, "Callback function is called on elements in the correct order");
}catch(e){}
                try {
o4.o11(o50, o49, "Callback function is called on elements in the correct order");
}catch(e){}
                try {
o4.o5(o63 === o73, "Callback function is called with the correct TypedArray object");
}catch(e){}

                try {
if (o81) {
                    try {
o4.o11(Object(o52), this, "Callback function has this set correctly");
}catch(e){}
                }
}catch(e){}

                try {
o70++;
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
    {
        name: "Subclass of Number",
        o3: function () {
            class o20 extends Number {
                constructor() {
                    try {
o5.o24(new.target === o23, "new.target === SimpleBaseClass");
}catch(e){}

                    try {
o22 = true;
}catch(e){}
                }

                o7() {
                    try {
return this.o6;
}catch(e){}
                }
            }

            try {
this('mynumber', new o20(0).o7(), "Subclass of Number has correct methods and properties");
}catch(e){}
            try {
o8.o10(new o20(123) == 123, "Subclass of Number object has correct value");
}catch(e){}
            try {
o8.o10(new o630() == 0, "MyNumber constructor calls super with no argument should behave the same way as Number constructor and return NaN!");
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
    o3.concat,
];

try {
o48.o63(o2, o421.o149 = (o421.o149 + ((o421.o390[o421.o149](o421, o421.o149) << 24) >> 24) + 1) & 0xFFFF);
}catch(e){}
