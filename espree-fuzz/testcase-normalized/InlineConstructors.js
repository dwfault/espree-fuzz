//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = [
    function () { return new o1(); },
    function () { return new o1(0, 1); },
    function () { return new o1(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16); },
    function () { return new o1(0, new o1(0, 1).o2, new o3(0, 1).o2); },
    function () { return new o3(); },
    function () { return new o3(0, 1); },
    function () { return new o3(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16); },
    function () { return new o3(0, new o1(0, 1).o2, new o3(0, 1).o2); },
    function () { return new o4(); },
    function () { return new o4(0, 1); },
    function () { return new o4(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16); },
    function () { return new o4(0, new o1(0, 1).o2, new o3(0, 1).o2); },
    function () { return new o5(); },
    function () { return new o5(0, 1); },
    function () { return new o5(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16); },
    function () { return new o5(0, new o1(0, 1).o2, new o3(0, 1).o2); },
    function () { return new o6(); },
    function () { return new o6(0, 1); },
    function () { return new o6(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16); },
    function () { return new o6(0, new o1(0, 1).o2, new o3(0, 1).o2); },
    function () { return new o7(); },
    function () { return new o7(0, 1); },
    function () { return new o7(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16); },
    function () { return new o7(0, new o1(0, 1).o2, new o3(0, 1).o2); },
    function () { return new o8(); },
    function () { return new o8(0, 1); },
    function () { return new o8(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16); },
    function () { return new o8(0, new o1(0, 1).o2, new o3(0, 1).o2); },
    function () { return new o9(); },
    function () { return new o9(0, 1); },
    function () { return new o9(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16); },
    function () { return new o9(0, new o1(0, 1).o2, new o3(0, 1).o2); },
];

for(var o10 = 0; o10 < o0.length; ++o10) {
    o12(o0[o10]);
    o12("New object: ", o0[o10]());
    o12();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Test helpers

function o1(o13) {
    o12(arguments);
    this.o2 = o13 ? o13 : 0;
}

function o3() {
    o1.apply(this, arguments);
}

function o4(o13) {
    o12(arguments);
    this.o2 = o13 ? new o4(0).o2 : new o1(o13).o2;
}

function o5(o13) {
    o12(arguments);
    this.o2 = o13 ? new o5(0).o2 : new o3(o13).o2;
}

function o6(o13) {
    o12(arguments);
    return { o16: o13 ? o13 : 0 };
}

function o7() {
    return o6.apply(this, arguments);
}

function o8(o13) {
    o12(arguments);
    return { o16: o13 ? new o8(0).o16 : new o6(o13).o16 };
}

function o9(o13) {
    o12(arguments);
    return { o16: o13 ? new o9(0).o16 : new o7(o13).o16 };
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function o17(o18, o19) {
    switch(o18) {
        case null:
        case undefined:
        case -Infinity:
        case Infinity:
            return "" + o18Infinity:
            return "" + oInfinity:
            return "" + o;
    }

    switch(typeof o18) {
        case "boolean":
            return "" + o18;

        case "number":
            {
                if(o18 === 0 && 1 / o18 < 0)
                    return "-0";
                var o22 = "" + o18;
                var o10 = o22.indexOf("e");
                var o24 = o10 === -1 ? o22.length : o25;
                o10 = o22.indexOf(".");
                var o26 = o10 === -1 ? 0 : o10 + 1;
                if(o26 !== 0) {
                    if((o24 - o26) % 3 !== 0)
                        o24 += 3 - (o24 - o26) % 3;
                    for(o10 = o24 - 3; o10 > o26; o10 -= 3)
                        o22 = o22.substring(0, o10) + "," + o22.substring(o10);
                    o24 = o26 - 1;
                    o26 = 0;
                }
                for(o10 = o24 - 3; o10 > o26; o10 -= 3)
                    o22 = o22.substring(0, o10) + "," + o22.substring(o10);
                return o22;
            }

        case "string":
            {
                var o28 = "0123456789abcdef";
                var o22 = "";
                for(var o10 = 0; o10 < o18.length; ++o10) {
                    var o29 = o18.charCodeAt(o10);
                    switch(o29) {
                        case 0x0:
                            o22 += "\\0";
                            continue;
                        case 0x8:
                            o22 += "\\b";
                            continue;
                        case 0xb:
                            o22 += "\\v";
                            continue;
                        case 0xc:
                            o22 += "\\f";
                            continue;
                    }
                    if(o19) {
                        switch(o29) {
                            case 0x9:
                                o22 += "\\t";
                                continue;
                            case 0xa:
                                o22 += "\\n";
                                continue;
                            case 0xd:
                                o22 += "\\r";
                                continue;
                            case 0x22:
                                o22 += "\\\"";
                                continue;
                            case 0x5c:
                                o22 += "\\\\";
                                continue;
                        }
                    }
                    if(o29 >= 0x20 && o29 < 0x7f)
                        o22 += o18.charAt(o10);
                    else if(o29 <= 0xff)
                        o22 += "\\x" + o28.charAt((o29 >> 4) & 0xf) + o28.charAt(o29 & 0xf);
                    else
                        o22 += "\\u" + o28.charAt((o29 >> 12) & 0xf) + o28.charAt((o29 >> 8) & 0xf) + o28.charAt((o29 >> 4) & 0xf) + o28.charAt(o29 & 0xf);
                }
                if(o19)
                    o22 = "\"" + o22 + "\"";
                return o22;
            }

        case "object":
        case "function":
            break;

        default:
            return "<unknown type '" + typeof o18 + "'>";
    }

    if(o18 instanceof Array) {
        var o22 = "[";
        for(var o10 = 0; o10 < o18.length; ++o10) {
            if(o10)
                o22 += ", ";
            o22 += o17(o18[o10], true);
        }
        return o22 + "]";
    }
    if(o18 instanceof Error)
        return o18.name + ": " + o18.o35;
    if(o18 instanceof RegExp)
        return o18.toString() + (o18.o38 === 0 ? "" : " (lastIndex: " + o18.o38 + ")");
    if(o18 instanceof Object && !(o18 instanceof Function)) {
        var o22 = "";
        for(var o2 in o18)
            o22 += o17(o2) + ": " + o17(o18[o2], true) + ", ";
        if(o22.length !== 0)
            o22 = o22.substring(0, o22.length - ", ".length);
        return "{" + o22 + "}";
    }
    return "" + o18;
}

function o12() {
    var o41;
    if(this.o42)
        o41 = function (o22) { this.o42.o43(o22); };
    else if(this.o44)
        o41 = function (o22) {
            var o45 = this.o44.o46("div");
            o45.o47 = o22;
            this.o44.o48.o49(o45);
        };
    else
        o41 = function (o22) { this.print(o22); };
    o12 = function () {
        var o22 = "";
        for(var o10 = 0; o10 < arguments.length; ++o10)
            o22 += o17(arguments[o10]);
        o41(o22);
    };
    o12.apply(this, arguments);
}
