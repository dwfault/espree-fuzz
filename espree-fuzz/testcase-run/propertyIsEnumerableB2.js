//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o0) { try {
o1.o2(o0 + "");
}catch(e){} }

function o242(o116) {
    var o82 = 3;
    // params, etc.
    var o243 = {
        'v': 'void',
        'b': 'bool',
        'c': 'char',
        's': 'short',
        'i': 'int',
        'l': 'long',
        'f': 'float',
        'd': 'double',
        'w': 'wchar_t',
        'a': 'signed char',
        'h': 'unsigned char',
        't': 'unsigned short',
        'j': 'unsigned int',
        'm': 'unsigned long',
        'x': 'long long',
        'y': 'unsigned long long',
        'z': '...'
    };
    var o244 = [];
    var o245 = true;

    function o47(o23) {
        //return;
        try {
if (o23) try {
Module.print(o23);
}catch(e){}
}catch(e){}
        try {
Module.print(o116);
}catch(e){}
        var o246 = '';
        try {
for (var o247 = 0; o247 < o82; o247++) try {
o246 += ' ';
}catch(e){}
}catch(e){}
        try {
Module.print(o246 + '^');
}catch(e){}
    }

    function o248() {
        try {
o82++;
}catch(e){}
        try {
if (o116[o82] === 'K') try {
o82++;
}catch(e){}
}catch(e){} // ignore const
        var o249 = [];
        try {
while (o116[o82] !== 'E') {
            try {
if (o116[o82] === 'S') { // substitution
                try {
o82++;
}catch(e){}
                var next = o116.indexOf('_', o82);
                var o250 = o116.substring(o82, next) || 0;
                try {
o249.push(o244[o250] || '?');
}catch(e){}
                try {
o82 = next + 1;
}catch(e){}
                try {
continue;
}catch(e){}
            }
}catch(e){}
            try {
if (o116[o82] === 'C') { // constructor
                try {
o249.push(o249[o249.length - 1]);
}catch(e){}
                try {
o82 += 2;
}catch(e){}
                try {
continue;
}catch(e){}
            }
}catch(e){}
            var o85 = parseInt(o116.substr(o82));
            var o246 = o85.toString().length;
            try {
if (!o85 || !o246) {
                try {
o82--;
}catch(e){}
                try {
break;
}catch(e){}
            }
}catch(e){} // counter i++ below us
            var o99 = o116.substr(o82 + o246, o85);
            try {
o249.push(o99);
}catch(e){}
            try {
o244.push(o99);
}catch(e){}
            try {
o82 += o246 + o85;
}catch(e){}
        }
}catch(e){}
        try {
o82++;
}catch(e){} // skip E
        try {
return o249;
}catch(e){}
    }

    function parse(o251, o252, o253) { // main parser
        try {
o252 = o252 || Infinity;
}catch(e){}
        var o30 = '',
            o254 = [];

        function o255() {
            try {
return '(' + o254.join(', ') + ')';
}catch(e){}
        }
        var name;
        try {
if (o116[o82] === 'N') {
            // namespaced N-E
            try {
name = o248().join('::');
}catch(e){}
            try {
o252--;
}catch(e){}
            try {
if (o252 === 0) try {
return o251 ? [name] : name;
}catch(e){}
}catch(e){}
        } else {
            // not namespaced
            try {
if (o116[o82] === 'K' || (o245 && o116[o82] === 'L')) try {
o82++;
}catch(e){}
}catch(e){} // ignore const and first 'L'
            var o85 = parseInt(o116.substr(o82));
            try {
if (o85) {
                var o246 = o85.toString().length;
                try {
name = o116.substr(o82 + o246, o85);
}catch(e){}
                try {
o82 += o246 + o85;
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
o245 = false;
}catch(e){}
        try {
if (o116[o82] === 'I') {
            try {
o82++;
}catch(e){}
            var o256 = parse(true);
            var o257 = parse(true, 1, true);
            try {
o30 += o257[0] + ' ' + name + '<' + o256.join(', ') + '>';
}catch(e){}
        } else {
            try {
o30 = name;
}catch(e){}
        }
}catch(e){}
        try {
o258: try {
while (o82 < o116.length && o252-- > 0) {
            //dump('paramLoop');
            var o259 = o116[o82++];
            try {
if (o259 in o243) {
                try {
o254.push(o243[o259]);
}catch(e){}
            } else {
                try {
switch (o259) {
                case 'P':
                    try {
o254.push(parse(true, 1, true)[0] + '*');
}catch(e){}
                    try {
break;
}catch(e){} // pointer
                case 'R':
                    try {
o254.push(parse(true, 1, true)[0] + '&');
}catch(e){}
                    try {
break;
}catch(e){} // reference
                case 'L':
                    { // literal
                        try {
o82++;
}catch(e){} // skip basic type
                        var o260 = o116.indexOf('E', o82);
                        var o85 = o260 - o82;
                        try {
o254.push(o116.substr(o82, o85));
}catch(e){}
                        try {
o82 += o85 + 2;
}catch(e){} // size + 'EE'
                        try {
break;
}catch(e){}
                    }
                case 'A':
                    { // array
                        var o85 = parseInt(o116.substr(o82));
                        try {
o82 += o85.toString().length;
}catch(e){}
                        try {
if (o116[o82] !== '_') try {
throw '?';
}catch(e){}
}catch(e){}
                        try {
o82++;
}catch(e){} // skip _
                        try {
o254.push(parse(true, 1, true)[0] + ' [' + o85 + ']');
}catch(e){}
                        try {
break;
}catch(e){}
                    }
                case 'E':
                    try {
break o258;
}catch(e){}
                default:
                    try {
o30 += '?' + o259;
}catch(e){}
                    try {
break o258;
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
}catch(e){}
        try {
if (!o253 && o254.length === 1 && o254[0] === 'void') try {
o254 = [];
}catch(e){}
}catch(e){} // avoid (void)
        try {
return o251 ? o254 : o30 + o255();
}catch(e){}
    }
    try {
try {
        // Special-case the entry point, since its name differs from other name mangling.
        try {
if (o116 == 'Object._main' || o116 == '_main') {
            try {
return 'main()';
}catch(e){}
        }
}catch(e){}
        try {
if (typeof o116 === 'number') try {
o116 = o122(o116);
}catch(e){}
}catch(e){}
        try {
if (o116[0] !== '_') try {
return o116;
}catch(e){}
}catch(e){}
        try {
if (o116[1] !== '_') try {
return o116;
}catch(e){}
}catch(e){} // C function
        try {
if (o116[2] !== 'Z') try {
return o116;
}catch(e){}
}catch(e){}
        try {
switch (o116[3]) {
        case 'n':
            try {
return 'operator new()';
}catch(e){}
        case 'd':
            try {
return 'operator delete()';
}catch(e){}
        }
}catch(e){}
        try {
return parse();
}catch(e){}
    } catch (o189) {
        try {
return o116;
}catch(e){}
    }
}catch(e){}
}
    
var o5 = new Object();
var o6 = new o3();
var o7 = new Array();
var o8 = new String("hello");
var o9 = new Boolean(true);
var o10 = new Number(10);
var o11 = new Date();
var o12 = new RegExp();
var o13 = new Error();

try {
o5.o14 = o6.o14 = o3.o14 = o7.o14 = o8.o14 = o9.o14 = o10.o14 = o11.o14 = o12.o14 = o13.o14 = 10;
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
   
function o22() {
    function o23() {
        try {
this.o14 = "base.x";
}catch(e){}
        try {
this.o4 = "base.y";
}catch(e){}
    }
    
    function o24() {
        try {
this.o4 = "derived.y";
}catch(e){}
        try {
this.o25 = "derived.z";
}catch(e){}
    }
    try {
o24.prototype = new o23();
}catch(e){}
    
    var o11 = new o24();
    
    try {
write("Test2 d.propertyIsEnumerable(x): " + o11.propertyIsEnumerable("x"));
}catch(e){}
    try {
write("Test2 d.propertyIsEnumerable(y): " + o11.propertyIsEnumerable("y"));
}catch(e){}
    try {
write("Test2 d.propertyIsEnumerable(z): " + o11.propertyIsEnumerable("z"));
}catch(e){}
    
    try {
write("Test2 d.hasOwnProperty(x): " + o11.hasOwnProperty("x"));
}catch(e){}
    try {
write("Test2 d.hasOwnProperty(y): " + o11.hasOwnProperty("y"));
}catch(e){}
    try {
write("Test2 d.hasOwnProperty(z): " + o11.hasOwnProperty("z"));
}catch(e){}    
}

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
