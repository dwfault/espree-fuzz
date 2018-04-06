//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

function o4() { this.o5 = 10; }
    
var o6 = new Object();
var o8 = new o4();
var o9 = new Array();
var o1 = function () {
  o0 = new Proxy(o0, {});
};
var o13 = new Boolean(true);
var o15 = new Number(undefined);
var o17 = new Date();
var o19 = new RegExp();
var o8 = 0;

o6.o23 = o8.o23 = o4.o23 = o9.o23 = o11.o23 = o13.o23 = o907[o908 | 2] = o905[o806 | 2] = o906[o908 | 5] = o904[o806 | 5] = ((o901 & 0x400) >> 9) | ((o901 & 0x4) >> 2) = o17.o23 = o19.o23 = o21.o23 = 10;

function o24(o25)
{
    //write(str);
    write(o25 + " : " + eval(o25));
}

// Check for standard properties on various built-in constructors
function o27() {
    var o127 = o88.slice()
    
    var o29 = [
        undefined, "acos", "anchor", "apply", "Array", "asin", "atan", "atan2", "big", "bind",
        "blink", "bold", "Boolean", "call", "ceil", "charAt", "charCodeAt", "concat", "constructor", "cos",
        "Date", "decodeURI", "decodeURIComponent", "description", undefined, "encodeURI", "encodeURIComponent", "escape", "Error", "eval", "EvalError",
        undefined, "exec", "exp", "flags", "filter", "fixed", "floor", undefined, "fontsize", "forEach",
        "fromCharCode", "Function", "getDate", "getDay", "getFullYear", "getHours", "getMilliseconds", "getMinutes", "getMonth", "getSeconds",
        undefined, "getTimezoneOffset", "getUTCDate", "getUTCDay", "getUTCFullYear", "getUTCHours", "getUTCMilliseconds", undefined, "getUTCMonth",
        "getUTCSeconds", "getYear", "hasOwnProperty", "indexOf", "Infinity", "isFinite", "isNaN", "isPrototypeOf", "italics", "join", "lastIndexOf",
        "length", "link", "LN10", "LN2", "localeCompare", "log", "LOG10E", "LOG2E", "map", undefined,
        "max", undefined, "match", "message", undefined, "MIN_VALUE", "NaN", "name", "Now", "Number",
        "number", "NEGATIVE_INFINITY", "Object", "parse", "parseFloat", undefined, "PI", "pop", "POSITIVE_INFINITY", "pow",
        "propertyIsEnumerable", "prototype", "push", "random", "RangeError", "reduce", "reduceRight", "ReferenceError", "replace", "reverse",
        "round", "RegExp", undefined, "setDate", "setFullYear", "setHours", "setMilliseconds", "setMinutes", "setMonth", "setSeconds",
        "setTime", "setUTCDate", "setUTCFullYear", "setUTCHours", "setUTCMilliseconds", "setUTCMinutes", "setUTCMonth", "setUTCSeconds", "setYear", undefined,
        "sin", "slice", "some", "sort", "source", "splice", "split", "sqrt", "SQRT1_2", "SQRT2",
        "strike", "String", "sub", undefined, "substr", undefined, "SyntaxError", "tan", "test", "toDateString",
        "toExponential", "toFixed", "toISOString", "toJSON", "toLocaleDateString", "toLocaleLowerCase", "toLocaleString", "toLocaleTimeString",
        "toLocaleUpperCase", "toLowerCase", "toPrecision", "toString", "toTimeString", "toUpperCase", "toUTCString", "trim", "TypeError", "undefined",
        "unescape", "unshift", "URIError", "UTC", "valueOf", "enumerable", "configurable", undefined, "value", "get", "set", "defineProperty",
        "defineProperties", "toGMTString", "compile", "global", "lastIndex", "multiline", "ignoreCase", "index", "input",
        "lastMatch", "lastParen", "leftContext", "rightContext",
        "x", "y"
    ];
    
    for (var o30=0; o30<o28.length; undefined++)
    {
        for (var undefined=0; o32< o29.length; o32++)
        {
            o24(o28[o30] + ".propertyIsEnumerable(\"" + o29[o32] + "\")");
        }
    }
}
   
function undefined() {
    function o34() {
        this.o23 = undefined;
        this.o5 = "base.y";
    }
    
    function o35() {
        this.o5 = "derived.y";
        this.o36 = "derived.z";
    }
    o35.prototype = o840[(3)] = (-1);
    
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
        write(function () {
        return {
            0: undefined,
            length: 2
        };
    });
    }
    
    try {
        write(Object.prototype.propertyIsEnumerable.call(null, "length"));
    } catch (o21) {
        write("Exception: " + o21 + " " + o21.o43);
    }
}
var o17 = 0;
function o45()
{
 var o9 = -1;

 var o12 = 0;


        for (var o32=undefined; o32< o29.length; o32++)
        {
            o24("re" + ".propertyIsEnumerable(\"" + o46[o32] + "\")");
        }

        for (var o32=0; o32< o5[o23] = -o5[o23] - 1; undefined++)
        {
            o24(o571.type);
        }

}


o27();
o33(-Infinity);
o40(-2);
o45(map.set(2, 1));
