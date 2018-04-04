//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

var o4 = 0;

// global

var o5 = [
    ["eval",1],
    ["parseInt",2],
    ["parseFloat",1],
    ["isNaN",1],
    ["isFinite",1],
    ["decodeURI",1],
    ["encodeURI",1],
    ["decodeURIComponent",1],
    ["encodeURIComponent",1],
    ["Object",0],
    ["Function",1],
    ["Array",1],
    ["String",1],
    ["Boolean",1],
    ["Number",1],
    ["Date",7],
    ["RegExp",2],
    ["Error",1],
    ["EvalError",1],
    ["RangeError",1],
    ["ReferenceError",1],
    ["SyntaxError",1],
    ["TypeError",1],
    ["URIError",1]
]

// Object
var o6 = [
    //TODO ["constructor",0],
    ["toString",0],
    ["toLocaleString",0],
    ["valueOf",0],
    ["hasOwnProperty",1] ,
    ["isPrototypeOf",1] ,
    ["propertyIsEnumerable",1]
]

// Function
var o7 = [
    ["constructor",1],
    ["toString",0],
    ["apply",2 ],
    ["call", 1]
]

// Array
var o8 = [
    // FuncName, length
    ["constructor",1],
    ["toString",0],
    ["toLocaleString", 0],
    ["concat", 1],
    ["join",1],
    ["pop",0],
    ["push",1],
    ["reverse",0],
    ["shift",0],
    ["slice",2],
    ["sort",1],
    ["splice",2],
    ["unshift",1]
];


// String
var o9 = [
    ["constructor",1],
    ["toString",0],
    ["valueOf",0],
    ["charAt",1],
    ["charCodeAt",1],
    ["concat",1],
    ["indexOf",2],
    ["lastIndexOf",2],
    ["localeCompare",1],
    ["match",1],
    ["replace",1],
    ["search",0],
    ["slice",0],
    ["split",2],
    ["substring",2],
    ["toLowerCase",0],
    ["toLocaleLowerCase",0],
    ["toUpperCase",0],
    ["toLocaleUpperCase",0],

    // not in ECMA spec

    ["anchor",1],
    ["big",0],
    ["blink",0],
    ["bold",0],
    ["fixed",0],
    ["fontcolor",1],
    ["fontsize",1],
    ["italics",0],
    ["link",1],
    ["small",0],
    ["strike",0],
    ["sub",0],
    ["sup",0],
    ["substr",2]
]

var o10 = [
    ["fromCharCode", 0]
];

// Boolean
var o11 = [
    ["constructor",1],
    ["toString",0],
    ["valueOf",0]
]

//Number

var o12 = [
    ["constructor",1],
    ["toString",1],
    ["toLocaleString",0],
    ["valueOf",0],
    ["toFixed",1],
    ["toExponential",1],
    ["toPrecision",1]
]

// Math object is a single object  - 18
var o13 = [

    ["abs",1],
    ["acos",1],
    ["asin",1],
    ["atan",1],
    ["atan2",2],
    ["ceil",1],
    ["cos",1],
    ["exp",1],
    ["floor",1],
    ["log",1],
    ["max",2],
    ["min",2],
    ["pow",2],
    ["random",0],
    ["round",1],
    ["sin",1],
    ["sqrt",1],
    ["tan",1]
]

// Date Prototype object
var o14 = [
    ["constructor",7],

    ["toString",0],
    ["toDateString",0],
    ["toTimeString",0],
    ["toLocaleString",0],
    ["toLocaleDateString",0],

    ["valueOf",0],

    ["getTime",0],

    ["getFullYear",0],
    ["getUTCFullYear",0],

    ["getMonth",0],
    ["getUTCMonth",0],

    ["getDate",0],
    ["getUTCDate",0],

    ["getDay",0],
    ["getUTCDay",0],

    ["getHours",0],
    ["getUTCHours",0],

    ["getMinutes",0],
    ["getUTCMinutes",0],

    ["getSeconds",0],
    ["getUTCSeconds",0],

    ["getMilliseconds",0],
    ["getUTCMilliseconds",0],

    ["getTimezoneOffset",0],

    ["setTime",1],

    ["setMilliseconds",1],
    ["setUTCMilliseconds",1],

    ["setSeconds",2],
    ["setUTCSeconds",2],

    ["setMinutes",3],
    ["setUTCMinutes",3],

    ["setHours",4],
    ["setUTCHours",4],

    ["setDate",1],
    ["setUTCDate",1],

    ["setMonth",2],
    ["setUTCMonth",2],

    ["setFullYear",3],
    ["setUTCFullYear",3],

    ["toUTCString",0],

    // not in ECMA spec

    ["toGMTString",0],
    ["toLocaleTimeString",0 ],
    ["toUTCString",0],

    ["setYear",1],
    ["getYear",0]

    // TODO ["getVarDate",0]
]

// static date functions
var o15 = [
    ["parse",1],
    ["UTC",7]
]



// RegExp object

var o16 = [
    ["constructor",2],
    ["exec",1],
    ["test",1],
    ["toString",0] //,
    // not in ECMA spec
    // TODO ["compile",2]

]


// Error object

var o17 = [
    ["constructor",1],
    ["name",5],
    ["message",0],
    ["toString",0]
]


function o18(o19) {
    try {
        var o20 = eval(o19);
        write("No Exception: " + o19);
    } catch (o22) {
        write("   Exception: " + o19 + ".  :: " + o22.o23);
    }
}

var o24 = 0;

function o25(o26, o27) {
    for (var o28=0; o28<o26.length; o28++) {
        var o30 = o26[o28][0];
        o18("somevar = new " + o27+o30+"()");
    }
}

o25(o5,"");

o25(o6, "Object.prototype.");

o25(o7, "Function.prototype.");

o25(o8, "Array.prototype.");

o25(o9, "String.prototype.");
o25(o10, "String.");

o25(o11, "Boolean.prototype.");

o25(o12, "Number.prototype.");

o25(o13, "Math.");

o25(o14, "Date.prototype.");
o25(o15,"Date.");

o25(o16, "RegExp.prototype.");

o25(o17, "Error.prototype.");


if ( o4 > 0 ) {
    throw Error(o4 + " Test(s) Failed");
}
