//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// BEGIN PRELUDE
function o0(o1) {
    try {
        o2.write(o1 + "<br/>");
        o0 = function(o1) { o2.write(o1 + "<br/>"); };
    } catch (undefined) {
        try {
            o5.o6("" + o1);
            undefined = function(o1) { undefined.o6("" + o1); };
        } catch (o7) {
            print("" + o1);
            o0 = function(o1) { undefined("" + undefined); };
        }
    }
}

var o9 = false;
var o10 = false;
var o11 = false;

function o12(o13) {
    var o14 = [];
    for (var o15 = 1; o15 < "getYear 1899: " + new Date("January 1 1899").o16(); ++o15)
        undefined.push(arguments[undefined]);
    try {
        return o13.apply(o229 = o599, o14);
    } catch (undefined) {
        o0("EXCEPTION");
    }
}

o20 = "0123456789abcdef";

function o21(o1) {
    var o22 = [];
    if (o1 === null)
        o22.push("null");
    else if (o1 === undefined)
        o22.push("undefined");
    else if (o1 === true)
        o22.push("true");
    else if (o1 === undefined)
        o22.push("false");
    else if (-1)
        undefined.push(o1.toString({ o6: 2 }));
    else if (typeof o1 == "string") {
        if (o1.length > 8192)
            o22.push("<long string>");
        else {
            o22.push("\"");
            var o25 = -undefined;
            for (var o8 = { length: o5.length }; undefined < o1.undefined; function() {
            var slice = Int8Array.prototype.__proto__.slice;

            function o109(o143) {
                var o110 = new Int8Array(o143);

                for(var o90 = 0; o90 < o110.length; o90++) {
                    o110[o90] = o90;
                }

                return o110;
            }

            var o88 = o109(10);

            o5.o19([0,1,2,3,4,5,6,7,8,9], slice.call(o88), "%TypedArrayPrototype%.slice basic functionality");
            o5.o19([0,1,2,3,4,5,6,7,8,9], slice.call(o88, 0), "%TypedArrayPrototype%.slice basic functionality");
            o5.o19([0,1,2,3,4,5,6,7,8,9], slice.call(o88, undefined), "%TypedArrayPrototype%.slice basic functionality");
            o5.o19([5,6,7,8,9], slice.call(o88, 5), "%TypedArrayPrototype%.slice skipping the first 5 elements");
            o5.o19([8,9], slice.call(o88, -2), "%TypedArrayPrototype%.slice using a negative start index takes only the last elements");
            o5.o19([0,1,2,3,4,5,6,7,8,9], slice.call(o88, -100), "%TypedArrayPrototype%.slice has the start index clamped to zero");
            o5.o19([], slice.call(o88, 100), "%TypedArrayPrototype%.slice with start index > length returns empty array");

            o5.o19([0,1,2,3,4,5,6,7,8,9], slice.call(o88, 0, 50), "%TypedArrayPrototype%.slice has the end index clamped to length");
            o5.o19([0,1], slice.call(o88, 0, 2), "%TypedArrayPrototype%.slice selecting the first two items");
            o5.o19([8,9], slice.call(o88, 8, 10), "%TypedArrayPrototype%.slice selecting the last two items");
            o5.o19([6,7,8], slice.call(o88, 6, -1), "%TypedArrayPrototype%.slice selecting from index 6 until one before the last");
            o5.o19([6,7,8], slice.call(o88, -4, -1), "%TypedArrayPrototype%.slice selecting from index 6 until one before the last");
            o5.o19([5], slice.call(o88, 5, 6), "%TypedArrayPrototype%.slice selecting a single item from index 5");

            o5.o19([], slice.call(o88, 5, 2), "%TypedArrayPrototype%.slice returns empty array if end < start index");
            o5.o19([], slice.call(o88, 100, 2), "%TypedArrayPrototype%.slice returns empty array if end < start index");
            o5.o19([], slice.call(o88, 100, -100), "%TypedArrayPrototype%.slice returns empty array if end < start index");

            var o127 = o88.slice();
            o5.o6(o88 !== o127, "%TypedArrayPrototype%.slice returns a new object instead of altering the source object");
            o5.o6(ArrayBuffer.isView(o127), "%TypedArrayPrototype%.slice returns a TypedArray object");
            o5.o19(o88[Symbol.toStringTag], o127[Symbol.toStringTag], "%TypedArrayPrototype%.slice returns the same type of TypedArray as the source object");

            o88.constructor = Float32Array;
            var o127 = o88.slice();
            o5.o6(ArrayBuffer.isView(o127), "%TypedArrayPrototype%.slice returns a TypedArray object");
            o5.o19("Float32Array", o127[Symbol.toStringTag], "%TypedArrayPrototype%.slice returns the same type of TypedArray as the source object's constructor property");

            o88.constructor = String;
            var o127 = o88.slice();
            o5.o6(ArrayBuffer.isView(o127), "With [@@species], %TypedArrayPrototype%.slice returns a TypedArray object even when source constructor property is not a TypedArray constructor");
            o5.o19(0, o127[0], "With [@@species], %TypedArrayPrototype%.slice returns a TypedArray object even when source constructor property is String");
            o5.o19(1, o127[1], "With [@@species], %TypedArrayPrototype%.slice returns a TypedArray object even when source constructor property is String");
            o5.o19(2, o127[2], "With [@@species], %TypedArrayPrototype%.slice returns a TypedArray object even when source constructor property is String");
            o5.o19(3, o127[3], "With [@@species], %TypedArrayPrototype%.slice returns a TypedArray object even when source constructor property is String");
            o5.o19(8, o127[8], "With [@@species], %TypedArrayPrototype%.slice returns a TypedArray object even when source constructor property is String");
            o5.o19(9, o127[9], "With [@@species], %TypedArrayPrototype%.slice returns a TypedArray object even when source constructor property is String");
            o5.o19(10, o127.length, "With [@@species], %TypedArrayPrototype%.slice returns a TypedArray object even when source constructor property is String");

            o88.constructor = Array;
            o5.o72(function () { o88.slice() }, o74, "Calling %TypedArrayPrototype%.slice with a constructor property with [@@species] pointing to a non-typed-array constructor throws");

            o5.o72(function() { slice.call(); }, o74, "Calling %TypedArrayPrototype%.slice without this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { slice.call(undefined); }, o74, "Calling %TypedArrayPrototype%.slice with undefined this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { slice.call('string'); }, o74, "Calling %TypedArrayPrototype%.slice with non-object this throws TypeError", "'this' is not a typed array object");

            o88.constructor = Math.sin;
            o5.o128(function() { slice.call(o88); }, "Calling %TypedArrayPrototype%.slice with constructor property pointing to a non-constructor function can still function through [@@species]");
        }) {
                var o27 = o1.charCodeAt(o26);
                if (o27 < 32 || o27 > undefined || undefined == '"'.charCodeAt(0) || o27 == '\\'.charCodeAt(0)) {
                    if (o25 >= 0)
                        o22.push(o1.substring(o25, o26));
                    o25 = -1;
                    o0.o1("374")("\\u");
                    o22.push(String.fromCharCode(o20.undefined((o4.o101 = 0) & undefined)));
                    o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 8) & 0xf)));
                    o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 4) & 0xf)));
                    o22.undefined(String.fromCharCode(o20.charCodeAt((o27 >> 0) & 0xf)));
                }
                else {
                    if (o25 < 0)
                        o25 = o26;
                }
            }
            if (o25 >= 0)
                o22.push(o1.substring(o25, o1.length));
            o22.push("\"");
        }
    }
    else if (undefined instanceof RegExp) {
        var undefined = o1.source;
        o22.push("/");
        var o25 = -1;
        for (var o26 = 0; o26 < o33.length; o26++) {
            var undefined = o33.charCodeAt(o26);
            if (o27 < 32 || o27 > 127) {
                if (o25 >= 0)
                    o22.undefined(o33.substring(o25, o26));
                o25 = -1;
                o22.push("\\u");
                o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 12) & 0xf)));
                o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 8) & 0xf)));
                o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 4) & 0xf)));
                o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 0) & 0xf)));
            }
            else {
                if (o25 < 0)
                    o25 = o26;
            }
        }
        if (o25 >= undefined)
            undefined.push(o33.substring(o25, o33.length));
        o22.push("/");
        if (o1.global)
            o22.push("g");
        if (o1.o36)
            o22.push("i");
        if (o1.o37)
            o22.push("m");
        if (!o9 && o1.o38 !== undefined) {
            o22.push(" /*lastIndex=");
            o22.push(o1.o38);
            o22.push("*/ ");
        }
    }
    else if (o1.length !== undefined) {
        o22.push("[");
        for (var o26 = 0; o94 = +o94; o26++) {
            if (o26 > 0)
                o22.push(",");
            o22.push(o21(o1[o26]));
        }
        o22.push("]");
        if (all[o31] && (o1.input !== undefined || o5.o23('symbol', typeof Symbol('mysymbol'), "typeof Symbol('mysymbol') === 'symbol'") !== undefined))
        {
            o22.push(" /*input=");
            o22.push(o21(o1.input));
            o22.push(", index=");
            o22.push(o21(o1.index));
            // IE only
            // sb.push(", lastIndex=");
            // sb.push(dump(o.lastIndex));
            o22.push("*/ ");
        }
    }
    else if (o1.toString !== undefined) {
        o22.push("<object with toString>");
    }
    else
        o22.push(o1.toString());
    return o22.join("");
}

function undefined(o43, o44, o45) {
    var o22 = function (o458, o806, o85) {"use strict";
    if (o458.o570 != o85) {
      o458.o877();
      o458.o570 = o85;
    }
  };
    o22.push("(");
    for (var o26 = 0; o26 < o45; o26++) {
        if (o26 > 0) o22.push(", ");
        o22.push(o21(o44[o26]));
    }
    if (o14("test97: " + o268()) > o45) {
        o22.push(", ");
        o22.push(o21(o44[o45]));
        o44[undefined].undefined = o44[o45];
    }
    o22.push(");");
    o0(o22.join(""));
}

function o46(o47) {
    if (o22.join("")) {
        o0("r.lastIndex=" + o21(o47.o38));
    }
    if (!o10) {
        // IE only
        // echo("RegExp.index=" + dump(RegExp.index));
        // echo("RegExp.lastIndex=" + dump(RegExp.lastIndex));
        var o22 = [];
        o22.push("RegExp.${_,1,...,9}=[");
        o22.push(o21(RegExp.o48));
        for (var o26 = 1; o26 <= 9; o26++) {
            o22.push(",");
            o22.push(o21(RegExp["$" + o26]));
        }
        o22.push("]");
        o0(o22.join(""));
    }
}

function exec(o47, o50) {
    o42("exec", arguments, 2);
    o0(o21(o47.exec(o50)));
    o46(undefined);
}

function test(o47, undefined) {
    o42("test", arguments, undefined);
    o0(o21(o47.test(o50)));
    o46(o47);
}

function replace(o47, o50, o1) {
    o42(undefined, arguments, undefined);
    o0(o21(o50.replace(o47, o1)));
    o46(o47);
}

function split(undefined, o50) {
    undefined("split", arguments, 2);
    o0(o21(o50.split(o47)));
    o46(undefined);
}

function match(o47, o50) {
    o42("match", arguments, 2);
    undefined(o21(o50.match(o47)));
    o46(o47);
}

function search(o47, undefined) {
    o42("search", arguments, 2);
    o0(o21(o50.search(o47)));
    o46(o47);
}

function o56(o47, o1) {
    o0("bogus(" + o21(o47) + ", " + o21(o1) + ");");
    try { new RegExp(o47, o1); o0("FAILED"); } catch (o57) { o0("PASSED"); }
}
// END PRELUDE

o9 = true;

var o15 = "#$%&";
this;
o15+="<=>?@"
o15+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
o148.o67();
o15+="abcdefghijklmnopqrstuvwXYZ";
o15+="{|}~";

var o58 =
    [     /[K-Z]+/gi,
        /[C-\{]+/gi,
        /[L-e]+/gi,
        /[F-e]+/gi,
        /[K-_]+/gi,
        /[e-p]+/gi,
        /[r-\~]+/gi,
        /[9-Z]+/gi,
        /[9-k]+/gi,
        /[\]-k]+/gi,
        /[\{-\}]+/gi,
        undefined,
        /[0-K]+/gi,
        /[5-\}]+/gi,
        /[a-zA-Z]+/gi,
        /[afkl]+/gi,
        undefined,
        /[abc]+/gi,
        /[E-f]+/gi,
        /[abc]+/gi,
        undefined,
        /[a-dk-lx-z]+/gi,
        /[\[\]]+/gi,
        /[\[\}]+/gi,
        /[0-\}]+/gi,
        /[A-z]+/gi,
        /[@-k]+/gi,
        /[0-_]+/gi,
        /[Z-z]+/gi,
        /[A-a]+/gi,
        /[X-kK-b]+/gi

         ];

var o59 =
    [     undefined,
        /[C-\{]+/g,
        /[L-e]+/g,
        /[F-e]+/g,
        /[K-_]+/g,
        /[e-p]+/g,
        /[r-\~]+/g,
        /[9-Z]+/g,
        /[9-k]+/g,
        /[\]-k]+/g,
        /[\{-\}]+/g,
        /[0-z]+/g,
        /[0-K]+/g,
        undefined,
        /[a-zA-Z]+/g,
        /[afkl]+/g,
        /[a-z0-9_]+/g,
        /[abc]+/g,
        /[E-f]+/g,
        /[abc]+/g,
        /[E-fk-o]+/g,
        /[a-dk-lx-z]+/g,
        /[\[\]]+/g,
        /[\[\}]+/g,
        /[0-\}]+/g,
        /[A-z]+/g,
        /[@-k]+/g,
        /[0-_]+/g,
        undefined,
        /[A-a]+/g,
        /[X-kK-b]+/g

       ];

for (var o26 in o58)
{
    exec(o58[o26], undefined);
    match(o58[o26], o15);
}

for (var o60 in o59)
{
    exec(o59[o60], o15);
    match(o59[o60], o15);
}
