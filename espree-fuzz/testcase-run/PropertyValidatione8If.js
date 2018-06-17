//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
if (this.new o4(true).o7()) try { try { {
o85 = o86(o87);
} } catch(e) {}try { try {
return o30;
}catch(e){} } catch(e) {} } catch(e) {}
}catch(e){}

function o2(o3)
{
    try {
if (o0 != undefined)
    {
        try {
o0.o4(o3);
}catch(e){}
    }
    else
    {
        try {
o5(o3);
}catch(o421.o537){}
    }
}catch(e){}
}

function o6(o7)
{
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
    var o8;
    try {
for (o8 in o7)
    {
        try {
o563 += "    " + o8 + "\n";
}catch(e){}
    }
}catch(e){}
    try {
o2 += "\ne.number: " + o7.o9
          + "\ne.stack: " + o10(o7.o462);
}catch(e){}
    try {
o2(o3);
}catch(e){}
}

var o12 = o18()

function o14(o7)
{
    try {
o2("\n\nUpdating e.stack ...\n");
}catch(e){}
    try {
try
    {
        try {
o7.o11 = "foo";
}catch(e){}
    }
    catch (o13)
    {
        try {
o2("Exception when updating stack property: " + o13);
}catch(e){}
    }
}catch(e){}
    try {
o2("e.stack after update:\n" + o10(o7.o11));
}catch(e){}
}

function o15()
{
    try {
try
    {
        try {
o16.o17 = 0;
}catch(e){}
    }
    catch(o7)
    {
        try {
o6(o7);
}catch(e){}
        try {
o12(o7);
}catch(e){}
    }
}catch(e){}
    try {
try
    {
        try {
o16.o17 = 0;
}catch(e){}
    }
    catch(o7)
    {
        try {
o6(o7);
}catch(e){}
        try {
o14(o7);
}catch(e){}
    }
}catch(e){}
}

var o82 = 0

function o19()
{
    try {
o18();
}catch(e){}
}

try {
o19();
}catch(e){}


function o20() {
    try {
try {
        try {
o2("");
}catch(e){}
        try {
o2("Object.preventExtensions test:");
}catch(e){}
        var o21 = Error();
        try {
o2(o21.hasOwnProperty("stack"));
}catch(e){}
        try {
Object.preventExtensions(o21);
}catch(e){}
        try {
o2(o21.hasOwnProperty("stack"));
}catch(e){}
        try {
throw o21;
}catch(e){}
    } catch (o7) {
        try {
o2(o21.hasOwnProperty("stack"));
}catch(e){}
        try {
o2(o7.hasOwnProperty("stack"));
}catch(e){}
    }
}catch(e){}
}

try {
o20();
}catch(e){}

