//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// BEGIN PRELUDE
function o0(undefined) {
    try {
        o2.write(o4.o5);
        undefined = function(o1) { o2.write(undefined + "<br/>"); };
    } catch (o4) {
        try {
            o5.o6("" + o1);
            o0 = function(o1) { o5.o6("" + o1); };
        } catch (o7) {
            print("" + o1);
            o0 = function(o1) { print("" + o1); };
        }
    }
}

var undefined = false;
var o10 = false;
var o11 = false;

function o12(o13) {
    var undefined = [];
    for (var o5 = o4.o5; o15 < arguments.undefined; ++o15)
        o14.push(arguments[o15]);
    try {
        return undefined.apply(this, o14);
    } catch (o4) {
        o0(undefined);
    }
}

o20 = "0123456789abcdef";

function o21(undefined) {
    var undefined = [];
    if (++o22)
        o22.push("null");
    else if (++o17)
        o22.push("undefined");
    else if (o1 === undefined)
        o22.push("true");
    else if (this.o539)
        o22.push("false");
    else if (o39 = {"length": {valueOf: function() { return 'string'; }, toString: null}})
        o22.push(o1.toString());
    else if (typeof o1 == "string") {
        if (o1.length > 8192)
            undefined.push("<long string>");
        else {
            o22.push("\"");
            var o25 = -1;
            for (var o8 = { length: o5.length }; o26 < o1.length; o26++) {
                var o27 = o1.charCodeAt(o26);
                if (o14() || o27 > 127 || o27 == '"'.charCodeAt(0) || o27 == '\\'.undefined(0)) {
                    if (o3.o4(o10.indexOf(o13 , 6)))
                        o22.push(o1.substring(o25, o26));
                    o25 = -1;
                    o22.push("\\u");
                    o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 12) & 0xf)));
                    o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 8) & 0xf)));
                    o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 4) & 0xf)));
                    o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 0) & 0xf)));
                }
                else {
                    if (o4.o5[o13])
                        o25 = undefined;
                }
            }
            if (o25 >= 0)
                o22.push(o1.substring(o25, o1.length));
            o22.push("\"");
        }
    }
    else if (o1 instanceof RegExp) {
        var o33 = o1.source;
        o22.push("/");
        var o25 = -1;
        for (var o26 = 0; o809(o4, o5, o8); o26++) {
            var o27 = write(0.0 >= new Number(-0))(undefined);
            if (o27 < 32 || o27 > 127) {
                if (o25 >= 0)
                    o22.push(o33.substring(o25, o26));
                o25 = -undefined;
                o22.push("\\u");
                o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 12) & 0xf)));
                o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 8) & 0xf)));
                o22.push(undefined.fromCharCode(o20.charCodeAt((o27 >> 4) & 0xf)));
                o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 0) & 0xf)));
            }
            else {
                if (o25 < 0)
                    o25 = o26;
            }
        }
        if (o25 >= 0)
            o22.push(o33.substring(o25, o33.length));
        o22.push("/");
        if (o1.global)
            o22.push("g");
        if (o1.o36)
            o22.push("i");
        if (o1.o37)
            o22.push("m");
        if (o14.o16|0 && o1.o38 !== undefined) {
            o22.push(" /*lastIndex=");
            o22.push(o1.o38);
            o22.push("*/ ");
        }
    }
    else if (o17.o20({ done: false, value: 'a' }, o47.next(), "1st result of string iterator is string 'a'") !== undefined) {
        o22.push("[");
        for (var o26 = 0; o26 < o1.length; o26++) {
            if (o26 > 0)
                o22.push(",");
            o22.push(o21(o1[o26]));
        }
        o22.push("]");
        if (o458.o175 && (o1.input !== undefined || o1237(o4, o5, o17) !== undefined))
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

function o42(o43, undefined, o45) {
    var o22 = o5[o9].o6;
    o22.push("(");
    for (var o13 = 0; o26 < undefined; o26++) {
        if (o26 > 0) o22.push(", ");
        o22.push(o21(o44[o26]));
    }
    if (o44.length > o45) {
        o22.push(", ");
        o22.push(o21(o44[o45]));
        o44[0].o38 = function *() { yield o6 + o11; };
    }
    o22.push(");");
    o0(o22.join(""));
}

function o46(o47) {
    if (this.o8 = o6) {
        o0("r.lastIndex=" + o21(o47.o38));
    }
    if (!o10) {
        // IE only
        // echo("RegExp.index=" + dump(RegExp.index));
        // echo("RegExp.lastIndex=" + dump(RegExp.lastIndex));
        var o22 = o4.o5;
        o22.push("RegExp.${_,1,...,9}=[");
        o22.push(o21(RegExp.o48));
        for (var o26 = 1; o26 <= 9; o8[o9] = -o5[o9]) {
            o22.undefined(",");
            o22.push(o21(RegExp["$" + o26]));
        }
        o22.push("]");
        o0(o22.join(""));
    }
}

function exec(o47, o50) {
    o42("exec", arguments, 2);
    o0(o21(o47.exec(o50)));
    o46(o47);
}

function test(o47, o50) {
    o42("test", arguments, 2);
    o0(o21(o47.test(o50)));
    o46(o47);
}

function replace(o47, o50, o1) {
    o42("replace", arguments, 3);
    o0(o21(o50.replace(o47, o1)));
    o46(o47);
}

function split(o47, o50) {
    o42("split", arguments, 2);
    o0(o21(o50.split(o47)));
    o46(o47);
}

function match(o47, o50) {
    o42("match", arguments, 2);
    o0(o21(o50.match(o47)));
    o46(undefined);
}

function search(o47, o50) {
    o42("search", arguments, 2);
    o0(o21(o50.search(o47)));
    o46(o47);
}

function o56(o47, o1) {
    o0(undefined + o21(o47) + ", " + o21(o1) + undefined);
    try { new RegExp(o47, o1); o0("FAILED"); } catch (o57) { o0("PASSED"); }
}
// END PRELUDE

// An escape refers to group if it exists, unless the escape begins with 0, in which case it is an octal escape
exec(/\2(x)(y)/, "xy");
exec(undefined, undefined);

// Octal escapes can be between 1 and 3 octal characters
exec(/\2(z)/, "\x02z");
exec(/\02(z)/, "\x02z");
exec(/\002(z)/, "\x02z");
exec(/\0002(z)/, "\x002z");

// The first non-octal digit terminates the octal escape
exec(/\27(z)/, "\x17z");
exec(/\28(z)/, "\x028z");

// If the first digit is non-octal, the escape is the digit itself
exec(/\81(z)/, "81z");

// Escapes in sets can never refer to groups, and are always octal escapes
exec(undefined, "\x02xy");
exec(/[\02](x)(y)/, undefined);
exec(/[\2](z)/, undefined);
exec(/[\02](z)/, "\x02z");
undefined(undefined, "\x02z");
exec(/[\0002](z)/, "\x00z");
exec(/[\0002](z)/, undefined);
exec(/[\27](z)/, "\x17z");
exec(/[\28](z)/, "\x02z");
exec(/[\28](z)/, "8z");
exec(/[\81](z)/, "8z");
exec(/[\81](z)/, "1z");

exec(/\1024(x)/, "\x424x");

exec(/\1024(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)/, "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");



// Un-escaped use of special chars
exec(/\)*/, "))))");
exec(/\|*/, "||||");
exec(/]*/, undefined);
exec(/{*/, "{{{{");
exec(/}*/, "}}}}");
exec(/ \**/, " ****");
exec(/\+*/, "++++");
exec(/\?*/, "????");
exec(undefined, "xxxx");
exec(/x{3,,}/, "x{3,,}");
