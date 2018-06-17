//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o0) { o1.o2(o0 + ""); }

function o3() { this.o4 = 10; }
    
var o5 = new Object();
var o6 = new o3();
var o7 = new Array();
var o8 = new String("hello");
var o9 = new Boolean(true);
var o10 = new Number(10);
var o11 = new Date();
var o12 = new RegExp();
var o13 = new Error();

o5.o14 = o6.o14 = o3.o14 = o7.o14 = o8.o14 = o9.o14 = o10.o14 = o11.o14 = o12.o14 = o13.o14 = 10;

function o15(o16)
{
    //write(str);
    write(o16 + " : " + eval(o16));
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
    
    for (var o20=0; o20<o18.length; o20++)
    {
        for (var o21=0; o21< o19.length; o21++)
        {
            o15(o18[o20] + ".propertyIsEnumerable(\"" + o19[o21] + "\")");
        }
    }
}
   
function o22() {
    function o23() {
        this.o14 = "base.x";
        this.o4 = "base.y";
    }
    
    function o24() {
        this.o4 = "derived.y";
        this.o25 = "derived.z";
    }
    o24.prototype = new o23();
    
    var o11 = new o24();
    
    write("Test2 d.propertyIsEnumerable(x): " + o11.propertyIsEnumerable("x"));
    write("Test2 d.propertyIsEnumerable(y): " + o11.propertyIsEnumerable("y"));
    write("Test2 d.propertyIsEnumerable(z): " + o11.propertyIsEnumerable("z"));
    
    write("Test2 d.hasOwnProperty(x): " + o11.hasOwnProperty("x"));
    write("Test2 d.hasOwnProperty(y): " + o11.hasOwnProperty("y"));
    write("Test2 d.hasOwnProperty(z): " + o11.hasOwnProperty("z"));    
}

function o26() {
    try {
        write(Object.prototype.propertyIsEnumerable.call(undefined, "length"));
    } catch (o13) {
        write("Exception: " + o13 + " " + o13.o27);
    }
    
    try {
        write(Object.prototype.propertyIsEnumerable.call(null, "length"));
    } catch (o13) {
        write("Exception: " + o13 + " " + o13.o27);
    }
}
var o28 = new RegExp("d(b+)(d)", "ig");
function o29()
{
 var o30 = [
    "lastIndex", "source", "global", "ignoreCase", "multiline", "options"];

 var o19 = [
     "input","$_","index","lastIndex","lastMatch",'$&',"lastParen",'$+','$`',"rightContext",
      "$'","$2","$3","$4","$5","$6","$7","$8","$9"];


        for (var o21=0; o21< o19.length; o21++)
        {
            o15("re" + ".propertyIsEnumerable(\"" + o30[o21] + "\")");
        }

        for (var o21=0; o21< o19.length; o21++)
        {
            o15("RegExp" + ".propertyIsEnumerable(\"" + o19[o21] + "\")");
        }

}


o17();
o22();
o26();
o29();
