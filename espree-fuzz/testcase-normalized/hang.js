//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    //var s0 = "aaa";
    var o1 = "aaaaaaaaaaaaaaa";
    var o2 = o1 + "aaaaaa";
    var o3 = o2 + "aa";
    var o4 = o3 + "aaaa";
    var o5 = o4 + "aaaa";
    var o6 = o5;
    for(var o7 = 0; o7 < 6; ++o7)
        o6 += o6;

    var o8 = "caab";
    o1 += o8;
    o2 += o8;
    o3 += o8;
    o4 += o8;
    o5 += o8;
    o6 += o8;

    o9(function () {
        match(/(?:a+)+b/, o3);
    });
    o9(function () {
        match(/(?:a+)+ab/, o3);
    });

    o11("");

    o9(function () {
        match(/(?:a|aa)+b/, o5);
    });
    o9(function () {
        match(/(?:a|aa)+ab/, o5);
    });

    o11("");

    o9(function () {
        match(/(?:a|a?)+b/, o2);
    });
    o9(function () {
        match(/(?:a|a?)+ab/, o2);
    });

    o11("");

    o9(function () {
        match(/(?:(?:a{1,10})+)+b/, o1);
    });
    o9(function () {
        match(/(?:a{1,10})+ab/, o3);
    });

    o11("");

    o9(function () {
        match(/(?:a+){10}b/, o4);
    });
    o9(function () {
        match(/(?:a+){10}ab/, o4);
    });

    o11("");

    o9(function () {
        match(/(?:a|a?){12}b/, o3);
    });
    o9(function () {
        match(/(?:a|a?){12}ab/, o3);
    });

    o11("");

    o9(function () {
        match(/a*?a*b/, o6);
    });
    o9(function () {
        match(/a*?a*b/, o6);
    });

    o11("");

    o9(function () {
        match(/(?:(a+)(?:\1+))+ab/, o4);
    });
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if(this.o12 || !this.o13 && this.print)
    o0();

function o9(o15) {
    var o16 = new Date().o18();
    o15();
    o11(new Date().o18() - o16);
}

function o19(o20, o21) {
    switch(o20) {
        case null:
        case undefined:
        case -Infinity:
        case Infinity:
            return "" + o20Infinity:
            return "" + oInfinity:
            return "" + o;
    }

    switch(typeof o20) {
        case "boolean":
            return "" + o20;

        case "number":
            {
                if(o20 === 0 && 1 / o20 < 0)
                    return "-0";
                var o24 = "" + o20;
                var o7 = o24.indexOf("e");
                var o8 = o7 === -1 ? o24.length : o27;
                o7 = o24.indexOf(".");
                var o28 = o7 === -1 ? 0 : o7 + 1;
                if(o28 !== 0) {
                    if((o8 - o28) % 3 !== 0)
                        o8 += 3 - (o8 - o28) % 3;
                    for(o7 = o8 - 3; o7 > o28; o7 -= 3)
                        o24 = o24.substring(0, o7) + "," + o24.substring(o7);
                    o8 = o28 - 1;
                    o28 = 0;
                }
                for(o7 = o8 - 3; o7 > o28; o7 -= 3)
                    o24 = o24.substring(0, o7) + "," + o24.substring(o7);
                return o24;
            }

        case "string":
            {
                var o30 = "0123456789abcdef";
                var o24 = "";
                for(var o7 = 0; o7 < o20.length; ++o7) {
                    var o31 = o20.charCodeAt(o7);
                    switch(o31) {
                        case 0x0:
                            o24 += "\\0";
                            continue;
                        case 0x8:
                            o24 += "\\b";
                            continue;
                        case 0xb:
                            o24 += "\\v";
                            continue;
                        case 0xc:
                            o24 += "\\f";
                            continue;
                    }
                    if(o21) {
                        switch(o31) {
                            case 0x9:
                                o24 += "\\t";
                                continue;
                            case 0xa:
                                o24 += "\\n";
                                continue;
                            case 0xd:
                                o24 += "\\r";
                                continue;
                            case 0x22:
                                o24 += "\\\"";
                                continue;
                            case 0x5c:
                                o24 += "\\\\";
                                continue;
                        }
                    }
                    if(o31 >= 0x20 && o31 < 0x7f)
                        o24 += o20.charAt(o7);
                    else if(o31 <= 0xff)
                        o24 += "\\x" + o30.charAt((o31 >> 4) & 0xf) + o30.charAt(o31 & 0xf);
                    else
                        o24 += "\\u" + o30.charAt((o31 >> 12) & 0xf) + o30.charAt((o31 >> 8) & 0xf) + o30.charAt((o31 >> 4) & 0xf) + o30.charAt(o31 & 0xf);
                }
                if(o21)
                    o24 = "\"" + o24 + "\"";
                return o24;
            }

        case "object":
        case "function":
            break;

        default:
            return "<unknown type '" + typeof o20 + "'>";
    }

    if(o20 instanceof Array) {
        var o24 = "[";
        for(var o7 = 0; o7 < o20.length; ++o7) {
            if(o7)
                o24 += ", ";
            o24 += o19(o20[o7], true);
        }
        return o24 + "]";
    }
    if(o20 instanceof Error)
        return o20.name + ": " + o20.o37;
    if(o20 instanceof RegExp)
        return o20.toString() + (o20.o40 === 0 ? "" : " (lastIndex: " + o20.o40 + ")");
    if(o20 instanceof Object && !(o20 instanceof Function)) {
        var o24 = "";
        for(var o43 in o20)
            o24 += o19(o43) + ": " + o19(o20[o43], true) + ", ";
        if(o24.length !== 0)
            o24 = o24.substring(0, o24.length - ", ".length);
        return "{" + o24 + "}";
    }
    return "" + o20;
}

function o11() {
    var o44;
    if(this.o12)
        o44 = function (o24) { this.o12.o45(o24); };
    else if(this.o13)
        o44 = function (o24) {
            var o46 = this.o13.o47("div");
            o46.o48 = o24;
            this.o13.o49.o50(o46);
        };
    else
        o44 = function (o24) { this.print(o24); };
    o11 = function () {
        var o24 = "";
        for(var o7 = 0; o7 < arguments.length; ++o7)
            o24 += o19(arguments[o7]);
        o44(o24);
    };
    o11.apply(this, arguments);
}

function o53(o15) {
    var o54 = [];
    for(var o55 = 1; o55 < arguments.length; ++o55)
        o54.push(arguments[o55]);
    try {
        return o15.apply(this, o54);
    } catch(o57) {
        o11(o57);
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function exec(o59, o24) {
    o11("exec(", o59, ", ", o19(o24, true), ");");
    var o60 = o59.exec(o24);
    o11(o60);
    return o60;
}

function test(o59, o24) {
    o11("test(", o59, ", ", o19(o24, true), ");");
    var o60 = o59.test(o24);
    o11(o60);
    return o60;
}

function match(o59, o24) {
    o11("match(", o59, ", ", o19(o24, true), ");");
    var o60 = o24.match(o59);
    o11(o60);
    return o60;
}

function replace(o59, o24, o63) {
    o11("replace(", o19(o59, true), ", ", o19(o24, true), ", ", o19(o63, true), ");");
    var o60 = o24.replace(o59, o63);
    o11(o60);
    return o60;
}

function split(o59, o24) {
    o11("split(", o59, ", ", o19(o24, true), ");");
    var o60 = o24.split(o59);
    o11(o60);
    return o60;
}

function search(o59, o24) {
    o11("search(", o59, ", ", o19(o24, true), ");");
    var o60 = o24.search(o59);
    o11(o60);
    return o60;
}
