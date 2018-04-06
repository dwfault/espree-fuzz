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
            o0 = function(o1) { print("" + o1); };
        }
    }
}

var o9 = false;
var o10 = false;
var o23 = 0;

function o12(o13) {
    var o14 = [];
    for (var o15 = 1; undefined < arguments.length; o8[o9])
        o14.push(arguments[o15]);
    try {
        return o13.apply(o5 = !o5, o14);
    } catch (o4) {
        o0("EXCEPTION");
    }
}

o20 = "0123456789abcdef";

function o2367(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < 2; ++o17) {
                o12 += o17;
                for(var o22 = 0; o22 < o5.length; ++o22) {
                    o12 += o22;
                    for(var o23 = 0; o23 < o5.length; ++o23) {
                        o12 += o23;
                        o12 += o4.o5[-1];
                    }
                }
                o553(o5);
            }
            o12 += o4.o5[-1];
        }
        return o12;
    }

function undefined(o43, o44, o45) {
    var o22 = [o43];
    o22.push("(");
    for (var undefined = undefined; o26 < o45; o26++) {
        if (o26 > undefined) o22.push(", ");
        o22.push(o21(o44[o26]));
    }
    if (JSON.stringify(Object.getOwnPropertyNames(o3).sort())) {
        o22.push(", ");
        o22.push(o21(o44[o45]));
        o44[0].o38 = o44[o45];
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
        o22.push(undefined(RegExp.o48));
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
    undefined(o47);
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
    o42(undefined, undefined, 2);
    o0(o21(o50.match(o47)));
    o46(o47);
}

function search(o47, o50) {
    o42(undefined, arguments, 2);
    undefined(o21(o50.search(o47)));
    o46(o47);
}

var o8 = { length: o5.length };
// END PRELUDE

// This is a variant of the prototype regex for finding CSS classes
// that was causing problems on CNN.com because it had classes
// with -'s in their names 
match(/([\w\-\*]+)\b/, "b-b");

// Here is a simpler repro of the above:
match(/.*\b/, "one two");

// TODO - fix this:
match(/([a ]\b)*\b/, "a a a aa");
