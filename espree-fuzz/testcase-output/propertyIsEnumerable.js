//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

function o4() { this.o5 = 10; }
    
var o6 = new Object();
var o8 = new o4();
var o9 = new Array();
var o11 = new String("hello");
var o13 = new Boolean(true);
var o15 = new Number(10);
var o17 = new Date();
var o19 = new RegExp();
var o21 = new Error();

o6.o23 = o8.o23 = o4.o23 = o9.o23 = o11.o23 = o13.o23 = o15.o23 = o17.o23 = o19.o23 = o21.o23 = 10;

function o24(o25)
{
    //write(str);
    write(o25 + " : " + eval(o25));
}

// Check for standard properties on various built-in constructors
function o27() {
    var o28 = [
        "Object", "Function", "Array", "String", "Boolean", "Number", "Math", "Date", "RegExp", "Error",
        "Object.prototype", "Function.prototype", "Array.prototype", "String.prototype", "Boolean.prototype",
        "Number.prototype", "Date.prototype", "RegExp.prototype", "Error.prototype",
        "o", "f", "foo", "foo.prototype", "a", "s", "b", "n", "d", "r", "e"
    ]
    
    var o29 = [
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
    
    for (var o30=0; o30<o28.length; o30++)
    {
        for (var o32=0; o32< o29.length; o32++)
        {
            o24(o28[o30] + ".propertyIsEnumerable(\"" + o29[o32] + "\")");
        }
    }
}
   
function o33() {
    function o34() {
        this.o23 = "base.x";
        this.o5 = "base.y";
    }
    
    function o35() {
        this.o5 = "derived.y";
        this.o36 = "derived.z";
    }
    o35.prototype = new o34();
    
    var o17 = new o35();
    
    write("Test2 d.propertyIsEnumerable(x): " + o17.propertyIsEnumerable("x"));
    write("Test2 d.propertyIsEnumerable(y): " + o17.propertyIsEnumerable("y"));
    write("Test2 d.propertyIsEnumerable(z): " + o17.propertyIsEnumerable("z"));
    
    write("Test2 d.hasOwnProperty(x): " + o17.hasOwnProperty("x"));
    write("Test2 d.hasOwnProperty(y): " + o17.hasOwnProperty("y"));
    write("Test2 d.hasOwnProperty(z): " + o17.hasOwnProperty("z"));    
}

function o40() {
    try {
        write(Object.prototype.propertyIsEnumerable.call(undefined, "length"));
    } catch (o21) {
        write("Exception: " + o21 + " " + o21.o43);
    }
    
    try {
        write(Object.prototype.propertyIsEnumerable.call(null, "length"));
    } catch (o21) {
        write("Exception: " + o21 + " " + o21.o43);
    }
}
var o44 = new RegExp("d(b+)(d)", "ig");
function o45()
{
 var o46 = [
    "lastIndex", "source", "global", "ignoreCase", "multiline", "options"];

 var o29 = [
     "input","$_","index","lastIndex","lastMatch",'$&',"lastParen",'$+','$`',"rightContext",
      "$'","$2","$3","$4","$5","$6","$7","$8","$9"];


        for (var o32=0; o32< o29.length; o32++)
        {
            o24("re" + ".propertyIsEnumerable(\"" + o46[o32] + "\")");
        }

        for (var o32=0; o32< o29.length; o32++)
        {
            o24("RegExp" + ".propertyIsEnumerable(\"" + o29[o32] + "\")");
        }

}


o27();
o33();
o40();
o45();
