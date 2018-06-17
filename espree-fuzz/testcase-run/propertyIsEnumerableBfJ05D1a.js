//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o0) { try {
o1.o2(o0 + "");
}catch(e){} }

function o31() { try {
this.o4 = 10;
}catch(e){} }
    
var o60 = 1697877209799190000;
var o18 = o17();
function o2(){
  try {
if(!o0){
    try {
o1 = new Array(1, 2, 3);
}catch(e){}
    try {
this[2] = o1;
}catch(e){}
  }
}catch(e){}
  try {
o0 = true;
}catch(e){}
  try {
return {};
}catch(e){}
};
var o621 = {
    o622: false,
    o623: function () {
        try {
o621.o622 = !!o17.o624.match(/^win/);
}catch(e){}
    },
    o500: function (o500) {
        try {
o73(o16);
}catch(e){}
        try {
return o621.o501(null, '/', o621.o625(o500.o626.o590), 0);
}catch(e){}
    },
    o501: function (o502, name, o503, o471) {
        try {
if (!o474.o523(o503) && !o474.o525(o503) && !o474.o527(o503)) {
            try {
throw new o474.o481(o341.o364);
}catch(e){}
        }
}catch(e){}
        var o479 = o474.o501(o502, name, o503);
        try {
o479.o508 = o621.o508;
}catch(e){}
        try {
o479.o476 = o621.o476;
}catch(e){}
        try {
return o479;
}catch(e){}
    },
    o625: function (o31) {
        var o595;
        try {
try {
            try {
o595 = o627.o628(o31);
}catch(e){}
            try {
if (o621.o622) {
                // On Windows, directories return permission bits 'rw-rw-rw-', even though they have 'rwxrwxrwx', so 
                // propagate write bits to execute bits.
                try {
o595.o503 = o595.o503 | ((o595.o503 & 146) >> 1);
}catch(e){}
            }
}catch(e){}
        } catch (o189) {
            try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
            try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
        }
}catch(e){}
        try {
return o595.o503;
}catch(e){}
    },
    o629: function (o479) {
        var o249 = [];
        try {
while (o479.o502 !== o479) {
            try {
o249.push(o479.name);
}catch(e){}
            try {
o479 = o479.o502;
}catch(e){}
        }
}catch(e){}
        try {
o249.push(o479.o500.o626.o590);
}catch(e){}
        try {
o249.reverse();
}catch(e){}
        try {
return o591.join.apply(null, o249);
}catch(e){}
    },
    o630: {
        0: "r",
        1: "r+",
        2: "r+",
        64: "r",
        65: "r+",
        66: "r+",
        129: "rx+",
        193: "rx+",
        514: "w+",
        577: "w",
        578: "w+",
        705: "wx",
        706: "wx+",
        1024: "a",
        1025: "a",
        1026: "a+",
        1089: "a",
        1090: "a+",
        1153: "ax",
        1154: "ax+",
        1217: "ax",
        1218: "ax+",
        4096: "rs",
        4098: "rs+"
    },
    o631: function (flags) {
        try {
if (flags in o621.o630) {
            try {
return o621.o630[flags];
}catch(e){}
        } else {
            try {
return flags;
}catch(e){}
        }
}catch(e){}
    },
    o508: {
        o507: function (o479) {
            var o31 = o621.o629(o479);
            var o595;
            try {
try {
                try {
o595 = o627.o628(o31);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
            // node.js v0.10.20 doesn't report blksize and blocks on Windows. Fake them with default blksize of 4096.
            // See http://support.microsoft.com/kb/140365
            try {
if (o621.o622 && !o595.o538) {
                try {
o595.o538 = 4096;
}catch(e){}
            }
}catch(e){}
            try {
if (o621.o622 && !o595.o539) {
                try {
o595.o539 = (o595.o85 + o595.o538 - 1) / o595.o538 | 0;
}catch(e){}
            }
}catch(e){}
            try {
return {
                o471: o595.o471,
                o531: o595.o531,
                o503: o595.o503,
                o532: o595.o532,
                o533: o595.o533,
                o534: o595.o534,
                o480: o595.o480,
                o85: o595.o85,
                o535: o595.o535,
                o536: o595.o536,
                o537: o595.o537,
                o538: o595.o538,
                o539: o595.o539
            };
}catch(e){}
        },
        o509: function (o479, o530) {
            var o31 = o621.o629(o479);
            try {
try {
                try {
if (o530.o503 !== undefined) {
                    try {
o627.o632(o31, o530.o503);
}catch(e){}
                    // update the common node structure mode as well
                    try {
o479.o503 = o530.o503;
}catch(e){}
                }
}catch(e){}
                try {
if (o530.o489 !== undefined) {
                    var o633 = new Date(o530.o489);
                    try {
o627.o634(o31, o633, o633);
}catch(e){}
                }
}catch(e){}
                try {
if (o530.o85 !== undefined) {
                    try {
o627.o635(o31, o530.o85);
}catch(e){}
                }
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o510: function (o502, name) {
            var o31 = o591.o592(o621.o629(o502), name);
            var o503 = o621.o625(o31);
            try {
return o621.o501(o502, name, o503);
}catch(e){}
        },
        o511: function (o502, name, o503, o471) {
            var o479 = o621.o501(o502, name, o503, o471);
            // create the backing node for this in the fs root as well
            var o31 = o621.o629(o479);
            try {
try {
                try {
if (o474.o523(o479.o503)) {
                    try {
o627.o636(o31, o479.o503);
}catch(e){}
                } else {
                    try {
o627.o637(o31, '', {
                        o503: o479.o503
                    });
}catch(e){}
                }
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
            try {
return o479;
}catch(e){}
        },
        o512: function (o638, o639, o640) {
            var o641 = o621.o629(o638);
            var o642 = o591.o592(o621.o629(o639), o640);
            try {
try {
                try {
o627.o643(o641, o642);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o513: function (o502, name) {
            var o31 = o591.o592(o621.o629(o502), name);
            try {
try {
                try {
o627.o644(o31);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o514: function (o502, name) {
            var o31 = o591.o592(o621.o629(o502), name);
            try {
try {
                try {
o627.o645(o31);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o515: function (o479) {
            var o31 = o621.o629(o479);
            try {
try {
                try {
return o627.o646(o31);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o516: function (o502, o640, o641) {
            var o642 = o591.o592(o621.o629(o502), o640);
            try {
try {
                try {
o627.o647(o641, o642);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o520: function (o479) {
            var o31 = o621.o629(o479);
            try {
try {
                try {
return o627.o648(o31);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
        }
    },
    o476: {
        o41: function (o477) {
            var o31 = o621.o629(o477.o479);
            try {
try {
                try {
if (o474.o525(o477.o479.o503)) {
                    try {
o477.o649 = o627.o650(o31, o621.o631(o477.flags));
}catch(e){}
                }
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o483: function (o477) {
            try {
try {
                try {
if (o474.o525(o477.o479.o503) && o477.o649) {
                    try {
o627.o651(o477.o649);
}catch(e){}
                }
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o27: function (o477, buffer, o107, length, o548) {
            // FIXME this is terrible.
            var o652 = new o653(length);
            var o654;
            try {
try {
                try {
o654 = o627.o655(o477.o649, o652, 0, length, o548);
}catch(e){}
            } catch (o189) {
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
            try {
if (o654 > 0) {
                try {
for (var o82 = 0; o82 < o654; o82++) {
                    try {
buffer[o107 + o82] = o652[o82];
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
return o654;
}catch(e){}
        },
        write: function (o477, buffer, o107, length, o548) {
            // FIXME this is terrible.
            var o652 = new o653(buffer.subarray(o107, o107 + length));
            var o654;
            try {
try {
                try {
o654 = o627.o656(o477.o649, o652, 0, length, o548);
}catch(e){}
            } catch (o189) {
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
            try {
return o654;
}catch(e){}
        },
        o517: function (o477, o107, o550) {
            var o548 = o107;
            try {
if (o550 === 1) { // SEEK_CUR.
                try {
o548 += o477.o548;
}catch(e){}
            } else try {
if (o550 === 2) { // SEEK_END.
                try {
if (o474.o525(o477.o479.o503)) {
                    try {
try {
                        var o595 = o627.o657(o477.o649);
                        try {
o548 += o595.o85;
}catch(e){}
                    } catch (o189) {
                        try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
}catch(e){}

            try {
if (o548 < 0) {
                try {
throw new o474.o481(o341.o364);
}catch(e){}
            }
}catch(e){}

            try {
o477.o548 = o548;
}catch(e){}
            try {
return o548;
}catch(e){}
        }
    }
};
var o9 = new o82(true);
var o49 = function (o13) { };
var o3 =0;
var o12 = new RegExp();
function o1116(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        try {
o1071 = o247
}catch(e){}
    };

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
