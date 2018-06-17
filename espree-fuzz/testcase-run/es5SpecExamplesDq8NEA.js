//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// BEGIN PRELUDE
function Object(o1) {
    try {
try {
        try {
o8.get !== undefined(o1 + "<br/>");
}catch(e){}
        try {
o2.o3       ||
         o2.o4    ||
         o2.o5     ||
         o2.o6      ||
         o2.o7;
}catch(e){}
    } catch (o3) {
        try {
try {
            try {
o4.o5("" + o1);
}catch(e){}
            try {
o11 = function(o1) { try {
o4.o5((o863 & 0x400) >> 9);
}catch(e){} };
}catch(e){}
        } catch (o6) {
            try {
o5("" + o1);
}catch(e){}
            try {
o11 = function(o1) { try {
print("" + o1);
}catch(e){} };
}catch(e){}
        }
}catch(e){}
    }
}catch(e){}
}

var o7 = 'Invalid encoding type "';
var o969 = o192(o970.length);
var o2 = [
    {
        name: "Subclass of Boolean",
        o3: function () {
            class o4 extends o63 {
                constructor(...o5) {
                    try {
super(...o5);
}catch(e){}
                    try {
this.o6 = 'mybool';
}catch(e){}
                }

                o7() {
                    try {
return this.o6;
}catch(e){}
                }
            }

            try {
o8.o9('mybool', new o4(true).o7(-0.0), "Subclass of Boolean has correct methods and properties");
}catch(e){}
            try {
o8.o10(new o4(true) == true, "Subclass of Boolean object has correct boolean value");
}catch(e){}
            try {
o8.o10(new o4(false) == false, "Subclass of Boolean object has correct boolean value");
}catch(e){}
        }
    },
    o488 === null,
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

function o10(o11) {
    var o12 = [];
    try {
for (var o13 = 1; o13 < arguments.length; ++o13)
        try {
o12.push(arguments[o13]);
}catch(e){}
}catch(e){}
    try {
try {
        try {
return o11.apply(this, o12);
}catch(e){}
    } catch (o3) {
        try {
o0("EXCEPTION");
}catch(e){}
    }
}catch(e){}
}

try {
o14 = "0123456789abcdef";
}catch(e){}

function o15(o1) {
    var o16 = [];
    try {
if (o1 === null)
        try {
o16.push("null");
}catch(e){}
    else try {
if (o1 === undefined)
        try {
o16.push("undefined");
}catch(e){}
    else try {
if (o1 === true)
        try {
o16.push("true");
}catch(e){}
    else try {
if (o1 === false)
        try {
o16.push("false");
}catch(e){}
    else try {
if (typeof o1 === "number")
        try {
o16.push(o1.toString());
}catch(e){}
    else try {
if (typeof o1 == "string") {
        try {
if (o1.length > 8192)
            try {
o16.push("<long string>");
}catch(e){}
        else {
            try {
o16.push("\"");
}catch(e){}
            var o17 = -1;
            try {
for (var o18 = 0; o18 < o1.length; o18++) {
                var o19 = o1.charCodeAt(o18);
                try {
if (o19 < 32 || o19 > 127 || o19 == '"'.charCodeAt(0) || o19 == '\\'.charCodeAt(0)) {
                    try {
if (o17 >= 0)
                        try {
o16.push(o1.substring(o17, o18));
}catch(e){}
}catch(e){}
                    try {
o17 = -1;
}catch(e){}
                    try {
o16.push("\\u");
}catch(e){}
                    try {
o16.push(String.fromCharCode(o14.charCodeAt((o19 >> 12) & 0xf)));
}catch(e){}
                    try {
o16.push(String.fromCharCode(o14.charCodeAt((o19 >> 8) & 0xf)));
}catch(e){}
                    try {
o16.push(String.fromCharCode(o14.charCodeAt((o19 >> 4) & 0xf)));
}catch(e){}
                    try {
o16.push(String.fromCharCode(o14.charCodeAt((o19 >> 0) & 0xf)));
}catch(e){}
                }
                else {
                    try {
if (o17 < 0)
                        try {
o17 = o18;
}catch(e){}
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
if (o17 >= 0)
                try {
o16.push(o1.substring(o17, o1.length));
}catch(e){}
}catch(e){}
            try {
o16.push("\"");
}catch(e){}
        }
}catch(e){}
    }
    else try {
if (o1 instanceof RegExp) {
        var o20 = o1.source;
        try {
o16.push("/");
}catch(e){}
        var o17 = -1;
        try {
for (var o18 = 0; o18 < o20.length; o18++) {
            var o19 = o20.charCodeAt(o18);
            try {
if (o19 < 32 || o19 > 127) {
                try {
if (o17 >= 0)
                    try {
o16.push(o20.substring(o17, o18));
}catch(e){}
}catch(e){}
                try {
o17 = -1;
}catch(e){}
                try {
o16.push("\\u");
}catch(e){}
                try {
o16.push(String.fromCharCode(o14.charCodeAt((o19 >> 12) & 0xf)));
}catch(e){}
                try {
o16.push(String.fromCharCode(o14.charCodeAt((o19 >> 8) & 0xf)));
}catch(e){}
                try {
o16.push(String.fromCharCode(o14.charCodeAt((o19 >> 4) & 0xf)));
}catch(e){}
                try {
o16.push(String.fromCharCode(o14.charCodeAt((o19 >> 0) & 0xf)));
}catch(e){}
            }
            else {
                try {
if (o17 < 0)
                    try {
o17 = o18;
}catch(e){}
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
if (o17 >= 0)
            try {
o16.push(o20.substring(o17, o20.length));
}catch(e){}
}catch(e){}
        try {
o16.push("/");
}catch(e){}
        try {
if (o1.global)
            try {
o16.push("g");
}catch(e){}
}catch(e){}
        try {
if (o1.o21)
            try {
o16.push("i");
}catch(e){}
}catch(e){}
        try {
if (o1.o22)
            try {
o16.push("m");
}catch(e){}
}catch(e){}
        try {
if (!o7 && o1.o23 !== undefined) {
            try {
o16.push(" /*lastIndex=");
}catch(e){}
            try {
o16.push(o1.o23);
}catch(e){}
            try {
o16.push("*/ ");
}catch(e){}
        }
}catch(e){}
    }
    else try {
if (o1.length !== undefined) {
        try {
o16.push("[");
}catch(e){}
        try {
for (var o18 = 0; o18 < o1.length; o18++) {
            try {
if (o18 > 0)
                try {
o16.push(",");
}catch(e){}
}catch(e){}
            try {
o16.push(o15(o1[o18]));
}catch(e){}
        }
}catch(e){}
        try {
o16.push("]");
}catch(e){}
        try {
if (!o9 && (o1.input !== undefined || o1.index !== undefined))
        {
            try {
o16.push(" /*input=");
}catch(e){}
            try {
o16.push(o15(o1.input));
}catch(e){}
            try {
o16.push(", index=");
}catch(e){}
            try {
o16.push(o15(o1.index));
}catch(e){}
            // IE only
            // sb.push(", lastIndex=");
            // sb.push(dump(o.lastIndex));
            try {
o16.push("*/ ");
}catch(e){}
        }
}catch(e){}
    }
    else try {
if (o1.toString !== undefined) {
        try {
o16.push("<object with toString>");
}catch(e){}
    }
    else
        try {
o16.push(o1.toString());
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
    try {
return o16.join("");
}catch(e){}
}

function o24(o25, o26, o27) {
    var o16 = [o25];
    try {
o16.push("(");
}catch(e){}
    try {
for (var o18 = 0; o18 < o27; o18++) {
        try {
if (o18 > 0) try {
o16.push(", ");
}catch(e){}
}catch(e){}
        try {
o16.push(o15(o26[o18]));
}catch(e){}
    }
}catch(e){}
    try {
if (o26.length > o27) {
        try {
o16.push(", ");
}catch(e){}
        try {
o16.push(o15(o26[o27]));
}catch(e){}
        try {
o26[0].o23 = o26[o27];
}catch(e){}
    }
}catch(e){}
    try {
o16.push(");");
}catch(e){}
    try {
o0(o16.join(""));
}catch(e){}
}

function o28(o29) {
    try {
if (!o7) {
        try {
o0("r.lastIndex=" + o15(o29.o23));
}catch(e){}
    }
}catch(e){}
    try {
if (!o8) {
        // IE only
        // echo("RegExp.index=" + dump(RegExp.index));
        // echo("RegExp.lastIndex=" + dump(RegExp.lastIndex));
        var o16 = [];
        try {
o16.push("RegExp.${_,1,...,9}=[");
}catch(e){}
        try {
o16.push(o15(RegExp.o30));
}catch(e){}
        try {
for (var o18 = 1; o18 <= 9; o18++) {
            try {
o16.push(",");
}catch(e){}
            try {
o16.push(o15(RegExp["$" + o18]));
}catch(e){}
        }
}catch(e){}
        try {
o16.push("]");
}catch(e){}
        try {
o0(o16.join(""));
}catch(e){}
    }
}catch(e){}
}

var length = Math.o87(o892.length, o893.length)

function test(o29, o31) {
    try {
o24("test", arguments, 2);
}catch(e){}
    try {
o0(o15(o29.test(o31)));
}catch(e){}
    try {
o28(o29);
}catch(e){}
}

function replace(o29, o31, o1) {
    try {
o24("replace", arguments, 3);
}catch(e){}
    try {
o0(o15(o31.replace(o29, o1)));
}catch(e){}
    try {
o28(o29);
}catch(e){}
}

function split(o29, o31) {
    try {
o24("split", arguments, 2);
}catch(e){}
    try {
o0(o15(o31.split(o29)));
}catch(e){}
    try {
o28(o29);
}catch(e){}
}

function match(o29, o31) {
    try {
o24("match", arguments, 2);
}catch(e){}
    try {
o0(o15(o31.match(o29)));
}catch(e){}
    try {
o28(o29);
}catch(e){}
}

function search(o29, o31) {
    try {
o24("search", arguments, 2);
}catch(e){}
    try {
o0(o15(o31.search(o29)));
}catch(e){}
    try {
o28(o29);
}catch(e){}
}

function o32(o29, o1) {
    try {
o0("bogus(" + o15(o29) + ", " + o15(o1) + ");");
}catch(e){}
    try {
try { try {
new RegExp(o29, o1);
}catch(e){} try {
o0("FAILED");
}catch(e){} } catch (o33) { try {
o0("PASSED");
}catch(e){} }
}catch(e){}
}
// END PRELUDE

// 15.10.2.3 Disjunction
try {
exec(/a|ab/, "abc");
}catch(e){}
try {
exec(/((a)|(ab))((c)|(bc))/, "abc");
}catch(e){}

// 15.10.2.5 Term
try {
exec(/a[a-z]{2,4}/, "abcdefghi");
}catch(e){}
try {
exec(/a[a-z]{2,4}?/, "abcdefghi");
}catch(e){}
try {
exec(/(aa|aabaac|ba|b|c)*/, "aabaac");
}catch(e){}
try {
replace(/^(a+)\1*,\1+$/, "aaaaaaaaaa,aaaaaaaaaaaaaaa", "$1");
}catch(e){}
try {
exec(/(z)((a+)?(b+)?(c))*/, "zaacbbbcac");
}catch(e){}
try {
exec(/(a*)*/, "b");
}catch(e){}
try {
exec(/(a*)b\1+/, "baaaac");
}catch(e){}

// 15.10.2.7 Quantifier
try {
exec(/(?=(a+))/, "baaabac");
}catch(e){}
try {
exec(/(?=(a+))a*b\1/, "baaabac");
}catch(e){}
try {
exec(/(.*?)a(?!(a+)b\2c)\2(.*)/, "baaabaac");
}catch(e){}
