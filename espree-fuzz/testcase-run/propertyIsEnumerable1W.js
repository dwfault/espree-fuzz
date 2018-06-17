//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o0) { try {
o1.o2(o0 + "");
}catch(o421.o150){} }

function o3() { try {
o7.o33 = 10;
}catch(e){} }
    
var o5 = new Object();
var o6 = new o3();
var o7 = new Array();
var o8 = new String("hello");
var o977 = 0;
var o10 = new Number(10);
var o11 = function () {
            try {
Object.prototype.__defineGetter__.call(undefined, "test10_undefined_getter", function () { try {
return undefined;
}catch(e){} });
}catch(e){}
            try {
Object.prototype.__defineGetter__.call(null, "test10_null_getter", function () { try {
return undefined;
}catch(e){} });
}catch(e){}
            try {
Object.prototype.__defineSetter__.call(undefined, "test10_undefined_setter", function (o13) { });
}catch(e){}
            try {
Object.prototype.__defineSetter__.call(null, "test10_null_setter", function (o13) { });
}catch(e){}

            try {
o8.o9(o2.hasOwnProperty("test10_undefined_getter"), "global object should now have a getter named test10_undefined_getter");
}catch(e){}
            try {
o8.o9(o2.hasOwnProperty("test10_null_getter"), "global object should now have a getter named test10_null_getter");
}catch(e){}
            try {
o8.o9(o2.hasOwnProperty("test10_undefined_setter"), "global object should now have a setter named test10_undefined_setter");
}catch(e){}
            try {
o8.o9(o2.hasOwnProperty("test10_null_setter"), "global object should now have a setter named test10_null_setter");
}catch(e){}

            try {
delete o2["test10_undefined_getter"];
}catch(e){}
            try {
delete o2["test10_null_getter"];
}catch(e){}
            try {
delete o2["test10_undefined_setter"];
}catch(e){}
            try {
delete o2["test10_null_setter"];
}catch(e){}
        };
var reduce.call(o62(10), o105, 0) = new RegExp();
var o13 = new Error();

try {
this.o552 = o6.o14 = o3.o14 = o7.o14 = o8.o14 = o9.o14 = o10.o14 = o11.o14 = o12.o14 = o13.o14 = 10;
}catch(e){}

function o15(o16)
{
    //write(str);
    try {
write(o16 + " : " + eval(o16));
}catch(e){}
}

// Check for standard properties on various built-in constructors
function o17() {
    var o18 = [
        "Object", "Function", "Array", "String", "Boolean", "Number", "Math", "Date", "RegExp", "Error",
        "Object.prototype", "Function.prototype", "Array.prototype", "String.prototype", "Boolean.prototype",
        "Number.prototype", "Date.prototype", "RegExp.prototype", "Error.prototype",
        "o", "f", "foo", "foo.prototype", "a", "s", "b", "n", "d", "r", "e"
    ]
    
    var o19 = [
        "abs", "acos", "anchor", "apply", "Array", "asin", "atan", "atan2", "big", "bind",
        "blink", "bold", "Boolean", "call", "ceil", "charAt", "charCodeAt", "concat", "constructor", "cos",
        "Date", "decodeURI", "decodeURIComponent", "description", "E", "encodeURI", "encodeURIComponent", "escape", "Error", "eval", "EvalError",
        "every", "exec", "exp", "flags", "filter", "fixed", "floor", "fontcolor", "fontsize", "forEach",
        "fromCharCode", "Function", "getDate", "getDay", "getFullYear", "getHours", "getMilliseconds", "getMinutes", "getMonth", "getSeconds",
        "getTime", "getTimezoneOffset", "getUTCDate", "getUTCDay", "getUTCFullYear", "getUTCHours", "getUTCMilliseconds", "getUTCMinutes", "getUTCMonth",
        "getUTCSeconds", "getYear", "hasOwnProperty", "indexOf", "Infinity", "isFinite", "isNaN", "isPrototypeOf", "italics", "join", "lastIndexOf",
        "length", "link", "LN10", "LN2", "localeCompare", "log", "LOG10E", "LOG2E", "map", "Math",
        "max", "MAX_VALUE", "match", "message", "min", "MIN_VALUE", "NaN", "name", "Now", "Number",
        "number", "NEGATIVE_INFINITY", "Object", "parse", "parseFloat", "parseInt", "PI", "pop", "POSITIVE_INFINITY", "pow",
        "propertyIsEnumerable", "prototype", "push", "random", "RangeError", "reduce", "reduceRight", "ReferenceError", "replace", "reverse",
        "round", "RegExp", "search", "setDate", "setFullYear", "setHours", "setMilliseconds", "setMinutes", "setMonth", "setSeconds",
        "setTime", "setUTCDate", "setUTCFullYear", "setUTCHours", "setUTCMilliseconds", "setUTCMinutes", "setUTCMonth", "setUTCSeconds", "setYear", "shift",
        "sin", "slice", "some", "sort", "source", "splice", "split", "sqrt", "SQRT1_2", "SQRT2",
        "strike", "String", "sub", "substring", "substr", "sup", "SyntaxError", "tan", "test", "toDateString",
        "toExponential", "toFixed", "toISOString", "toJSON", "toLocaleDateString", "toLocaleLowerCase", "toLocaleString", "toLocaleTimeString",
        "toLocaleUpperCase", "toLowerCase", "toPrecision", "toString", "toTimeString", "toUpperCase", "toUTCString", "trim", "TypeError", "undefined",
        "unescape", "unshift", "URIError", "UTC", "valueOf", "enumerable", "configurable", "writable", "value", "get", "set", "defineProperty",
        "defineProperties", "toGMTString", "compile", "global", "lastIndex", "multiline", "ignoreCase", "index", "input",
        "lastMatch", "lastParen", "leftContext", "rightContext",
        "x", "y"
    ];
    
    try {
for (var o20=0; o20<o18.length; o20++)
    {
        try {
for (var o21=0; o21< o19.length; o21++)
        {
            try {
o15(o18[o20] + ".propertyIsEnumerable(\"" + o19[o21] + "\")");
}catch(e){}
        }
}catch(e){}
    }
}catch(e){}
}
   
var entries = {}

function o26() {
    try {
try {
        try {
write(Object.prototype.propertyIsEnumerable.call(undefined, "length"));
}catch(e){}
    } catch (o13) {
        try {
write("Exception: " + o13 + " " + o13.o27);
}catch(e){}
    }
}catch(e){}
    
    try {
try {
        try {
write(Object.prototype.propertyIsEnumerable.call(null, "length"));
}catch(e){}
    } catch (o13) {
        try {
write("Exception: " + o13 + " " + o13.o27);
}catch(e){}
    }
}catch(e){}
}
var o28 = new RegExp("d(b+)(d)", "ig");
function o29()
{
 var o30 = [
    "lastIndex", "source", "global", "ignoreCase", "multiline", "options"];

 var o19 = [
     "input","$_","index","lastIndex","lastMatch",'$&',"lastParen",'$+','$`',"rightContext",
      "$'","$2","$3","$4","$5","$6","$7","$8","$9"];


        try {
for (var o21=0; o21< o19.length; o21++)
        {
            try {
o15("re" + ".propertyIsEnumerable(\"" + o30[o21] + "\")");
}catch(e){}
        }
}catch(e){}

        try {
for (var o21=0; o21< o19.length; o21++)
        {
            try {
o15("RegExp" + ".propertyIsEnumerable(\"" + o19[o21] + "\")");
}catch(e){}
        }
}catch(e){}

}


try {
o17();
}catch(e){}
try {
o22();
}catch(e){}
try {
o26();
}catch(e){}
try {
o29();
}catch(e){}
