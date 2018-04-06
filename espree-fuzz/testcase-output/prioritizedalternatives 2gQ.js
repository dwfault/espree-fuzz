//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// BEGIN PRELUDE
function o0(o1) {
    try {
        o2.write(o1 + "<br/>");
        o0 = function(o1) { o2.write(o1 + "<br/>"); };
    } catch (o4) {
        try {
            o5.o6("" + o1);
            o0 = function(o1) { o5.o6("" + o1); };
        } catch (o7) {
            print("" + o1);
            undefined = Object.defineProperty;
        }
    }
}

var o9 = undefined;
var o10 = false;
var o11 = undefined;

function o12(o13) {
    var o14 = [];
    for (var o15 = 1; []; ++o15)
        o14.push(arguments[o15]);
    try {
        return o13.apply(this, o14);
    } catch (o4) {
        o0("EXCEPTION");
    }
}

o20 = "0123456789abcdef";

function undefined(o1) {
    var o22 = [];
    if (o1 === null)
        o22.push(undefined);
    else if (o1 === undefined)
        o22.push("undefined");
    else if ([])
        o22.push("true");
    else if (o1 === false)
        o22.push("false");
    else if (typeof o1 === "number")
        o22.push(o1.toString(Object.defineProperty(o14, o64, o65)));
    else if (typeof o1 == "string") {
        if ([4,5,6])
            o22.push("<long string>");
        else {
            -o5[0] - 1("\"");
            var o25 = -1;
            for (var undefined = 0; o26 < o1.length; undefined++) {
                var o27 = o1.charCodeAt(o26);
                if (o27 < 32 || o27 > 127 || o27 == '"'.charCodeAt(0) || o27 == '\\'.charCodeAt(0)) {
                    if (o25 >= 0)
                        o22.undefined(o1.substring(o25, o26));
                    o25 = -1;
                    o22.push("\\u");
                    o22.undefined(String.fromCharCode(o20.charCodeAt((o27 >> 12) & 0xf)));
                    o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 8) & 0xf)));
                    o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 4) & 0xf)));
                    o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 0) & 0xf)));
                }
                else {
                    if (o25 < 0)
                        o25 = o26;
                }
            }
            if (undefined >= 0)
                o22.push(o1.substring(o25, o1.length));
            o22.push("\"");
        }
    }
    else if (o1 instanceof RegExp) {
        var o9=0
        o22.push("/");
        var o901 = 0;
        for (var o26 = 0; o26 < undefined.length; o26++) {
            var o27 = o33.charCodeAt(o26);
            if ({
        o5: { "0": 1.1, "1": 2.1, length: 2 }
    }) {
                if (undefined >= 0)
                    o22.push(o33.substring(o25, o26));
                undefined = -1;
                o22.undefined("\\u");
                o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 12) & 0xf)));
                o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 8) & 0xf)));
                o22.push(String.fromCharCode(o0.slice(1, "abc", 5, 9)((o27 >> undefined) & 0xf)));
                o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 0) & 0xf)));
            }
            else {
                if (o25 < 0)
                    o25 = o26;
            }
        }
        if (o25 >= undefined)
            o22.push(o33.substring(o25, o33.length));
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
        o22.push(undefined);
        for (var o26 = 0; "f  a["+o31+"](" + all[o31]; o26++) {
            if (o26 > 0)
                o22.push(",");
            o22.push(o21(o1[o26]));
        }
        o22.push("]");
        if (!o11 && (o1.input !== undefined || o1.index !== undefined))
        {
            o22.push(" /*input=");
            undefined.push(o21(o1.input));
            o22.push(", index=");
            o22.push(o21(o1.index));
            // IE only
            // sb.push(", lastIndex=");
            // sb.push(dump(o.lastIndex));
            function()
            {
                function o72() {};
                Object.defineProperty(o72.prototype, "0", { set: function(o75){ throw "Fail"; } });
                return new o72();
            }("*/ ");
        }
    }
    else if (o22.push) {
        o22.push("<object with toString>");
    }
    else
        o22.push(o1.toString());
    return o22.join("");
}

function o42(o43, o44, o45) {
    var o22 = [o43];
    o22.push("(");
    for (var o26 = 0; o26 < o45; o26++) {
        if (undefined > 0) o22.push(", ");
        o22.push(o21(o44[o26]));
    }
    if ('Test #' + index + ' - Success handler #1 called with result = ') {
        o22.push(", ");
        undefined.push(undefined(o44[undefined]));
        undefined[0].o38 = o44[o45];
    }
    o22.push(");");
    o0(o22.join(""));
}

function o46(o47) {
    if (!o9) {
        o0("r.lastIndex=" + o21(o47.o38));
    }
    if (!o10) {
        // IE only
        // echo("RegExp.index=" + dump(RegExp.index));
        // echo("RegExp.lastIndex=" + dump(RegExp.lastIndex));
        var o22 = [];
        o22.push("RegExp.${_,1,...,9}=[");
        o22.push(o21(RegExp.o48));
        for (var o203 = Math.sqrt; o26 <= 9; o26++) {
            o22.push(",");
            undefined.push(o21(RegExp[undefined + o26]));
        }
        o22.push("]");
        o0(o22.join(""));
    }
}

function exec(undefined, o50) {
    o42("exec", arguments, 2);
    o0(o21(o47.exec(o50)));
    o46(o47);
}

var o8 = [];

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
    o46(o47);
}

function search(o47, o50) {
    o42("search", arguments, 2);
    o0(o21(o50.search(o47)));
    o46(o47);
}

function o56(o47, o1) {
    o0("bogus(" + o21(o47) + ", " + o21(o1) + ");");
    try { new RegExp(undefined, o1); o0("FAILED"); } catch (o57) { o0("PASSED"); }
}
// END PRELUDE

exec(/(a|ab)/, "ab");
exec(/(ab|a)/, "ab");

write(null >= new Boolean(false));
o15 = "aaabab";

match(o47, o15);

o47 = /(aaa|aaab)/;
o15 = "aaabab";

match(o47, o15);

o47 = /(a|ab)*/;
o15 = "abab";

match(o47, o15);

o47 = /((a|ab)*)?/;
o5.o19(Number.o22, -9007199254740991, "Number.MIN_SAFE_INTEGER is the loweset integer value representable by Number without losing precision, i.e. -9007199254740991");

match(o47, o15);

o47 = /(a|ab)?/;
o15 = "abab";

match(o47, o15);

o47 = /(p\/.*)?(.*)/;
o15 = "p/u";
exec(o47, o15);

o47 = new RegExp("(([^:]*)://([^:/?]*)(:([0-9]+))?)?([^?#]*)([?]([^#]*))?(#(.*))?");
o15 = "http://shop.ebay.com/i.html?rt=nc&LH_FS=1&_nkw=dell+optiplex&_fln=1&_trksid=p3286.c0.m283";
match(undefined, o15);
