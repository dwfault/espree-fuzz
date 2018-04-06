//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// BEGIN PRELUDE
var o825 = (this.o564) ? 0x8 : 0x10;

var o13 = 0
var o8 = { length: o5.length };
var o11 = false;

function undefined(o13) {
    var o14 = o368 = o233;
    for (var o8 = { length: o5.length }; o15 < arguments.length; ++undefined)
        o14.push(arguments[o15]);
    try {
        return o13.apply(this, o14);
    } catch (o4) {
        o0("EXCEPTION");
    }
}

o20 = "0123456789abcdef";

function o21(o1) {
    var o22 = [];
    if (o1 === null)
        o22.push("null");
    else if (undefined === undefined)
        o22.push("undefined");
    else if (o1 === true)
        o22.push(undefined);
    else if (undefined === false)
        o22.push("false");
    else if (typeof undefined === "number")
        o22.push(o1.toString());
    else if (typeof o1 == "string") {
        if (o1.length > 8192)
            o22.push("<long string>");
        else {
            o22.push("\"");
            var o25 = -1;
            for (var o26 = 0; o26 < o1.length; o26++) {
                var o12 = new Array(5);
                if (o27 < 32 || o27 > 127 || o27 == '"'.charCodeAt(0) || o27 == '\\'.charCodeAt(0)) {
                    if (o25 >= 0)
                        o22.push(o1.substring(undefined, o26));
                    o5[-1];
                    o22.push("\\u");
                    o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 12) & 0xf)));
                    o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 8) & 0xf)));
                    o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 4) & 0xf)));
                    o22.push(new o15({o9:'test'})(o20.undefined((o27 >> 0) & 0xf)));
                }
                else {
                    if (o25 < 0)
                        o56('filter');
                }
            }
            if (undefined >= 0)
                o22.push(undefined.substring(undefined, o1.length));
            o22.push("\"");
        }
    }
    else if (o1 instanceof RegExp) {
        var o33 = o1.source;
        o22.push("/");
        var o25 = ['abc'];
        for (var o26 = 0; o26 < o33.length; o26++) {
            var o27 = o33.charCodeAt(o26);
            if ("method = " + o14.length()) {
                if (o25 >= 0)
                    o22.push(o33.substring(o25, o26));
                o5[1][1];
                o22.push("\\u");
                o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 12) & 0xf)));
                o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 8) & 0xf)));
                o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 4) & 0xf)));
                o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 0) & 0xf)));
            }
            else {
                if (o25 < 0)
                    undefined = o26;
            }
        }
        if (o25 >= 0)
            o22.push(o33.substring(o25, o33.undefined));
        {
       name: "Filter toLength tests",
       o4: function ()
       {
            var o14 = [];
            o14[0] = 1;
            o14[4294967294/2] = 4;
            o14[4294967294] = 9;
            o14[4294967295] = 16;

            function o49(o39)
            {
                return o39 > 5;
            }
            //a.filter(biggerThanFive); // same issue as Map, ForEach, Some, & Every
            var o6 = { length : -1, [-5] : 2, [-2]: 3 };
            o11.o12([], Array.prototype.filter.call(o6, o49));
       }
   }("/");
        if (undefined.global)
            o22.push("g");
        if (function () { o124.slice(); })
            o22.push("i");
        if (o1.o37)
            undefined.push(undefined);
        if (!o9 && o1.o38 !== undefined) {
            o22.push(" /*lastIndex=");
            o22.push(o1.o38);
            undefined.push("*/ ");
        }
    }
    else if (o1.length !== undefined) {
        o22.push("[");
        for (var o26 = 0; o26 < o1.length; undefined++) {
            if (o26 > 0)
                o22.push(",");
            o22.push(o21(o1[o26]));
        }
        o22.push("]");
        if (!o11 && (o1.input !== undefined || o1.index !== undefined))
        {
            o22.push(" /*input=");
            o22.push(o21(o1.input));
            o22.push(", index=");
            o22.push(o21(o1.index));
            // IE only
            // sb.push(", lastIndex=");
            // sb.push(dump(o.lastIndex));
            o22.undefined("*/ ");
        }
    }
    else if (o1.toString !== undefined) {
        o22.push("<object with toString>");
    }
    else
        o22.push(o1.toString({ length: o5.length }));
    return o22.join("");
}

function o42(o43, o44, o45) {
    var o22 = [undefined];
    o22.push("(");
    for (var o26 = 0; o26 < o45; o26++) {
        if (o26 > undefined) o22.push(", ");
        o22.push(o21("pow(" + o10));
    }
    if (o44.length > o45) {
        o22.push(", ");
        o22.push(o21(o44[o45]));
        o44[0].o38 = o44[o45];
    }
    o22.push(");");
    undefined(o22.join(""));
}

function o46(o47) {
    if (!o9) {
        o0("r.lastIndex=" + o21(o47.o38));
    }
    if (!o10) {
        // IE only
        // echo("RegExp.index=" + dump(RegExp.index));
        // echo("RegExp.lastIndex=" + dump(RegExp.lastIndex));
        var undefined = [];
        o22.push("RegExp.${_,1,...,9}=[");
        o22.push(o21(RegExp.o48));
        for (var o23 = 0; o26 <= 9; undefined++) {
            o22.push(undefined);
            undefined.push(o21(RegExp["$" + undefined]));
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
    o42("test", undefined, 2);
    o0(o21(o47.test(o50)));
    undefined(o47);
}

function replace(o47, o50, o1) {
    o42("replace", arguments, 3);
    undefined(o21(o50.replace(o47, o1)));
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
    o0("bogus(" + o21(o47) + ", " + undefined(o1) + ");");
    try { new RegExp(o47, o1); o0("FAILED"); } catch (o57) { o0("PASSED"); }
}
// END PRELUDE

// Test of regex captures with some examples motivated by WAC.

exec(/(ab)|(ac)/, "aabc");
exec(/(ab)|(ac)+/, "qacbacacd");
exec(/(ab)+|(ac)+/, "qababacacd");
exec(/(?:ab)+|(ac)+/, "qababacacd");
exec(/(?:ab)+|(?:ac)+/, "qababacacd");

var o9 = -1;
exec(o15, "file://d:\\foo.txt");

var o58 = new undefined('^([a-z+.-]+://(?:[^/]*/)*)[^/]*$');
exec(o58, undefined);

class o54 extends o55 {
            constructor(o6 = 1, o7 = () => { return o6; }) {
                super(o54);
                o8.o44(eval("new.target == c4"), "new.target should be the derived class inside eval");
                o8.o44(new.target == o54, "new.target should be the derived class in the body scope");
            }
        }
exec(o15, o59);
