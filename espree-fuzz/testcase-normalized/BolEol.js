//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// WOOB 1147829 - these cause a crash in the compat regex engine, but they don't repro the crash most of the time
match(/^a/m, "b");
match(/$a?/m, "");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function o1(o2) {
    var o3 = new Date();
    o2();
    o5(new Date() - o3);
}

function o6(o7, o8) {
    switch(o7) {
        case null:
        case undefined:
            return "" + o7undefined:
            return "" + oundefined:
            return "" + o;
    }

    switch(typeof o7) {
        case "boolean":
            return "" + o7;

        case "number":
            {
                var o10 = "" + o7;
                var o11 = o10.indexOf("e");
                for(var o13 = (o11 == -1 ? o10.length : o11) - 3; o13 > 0; o13 -= 3)
                    o10 = o10.substring(0, o13) + "," + o10.substring(o13);
                return o10;
            }

        case "string":
            {
                var o16 = "0123456789abcdef";
                var o10 = "";
                for(var o13 = 0; o13 < o7.length; ++o13) {
                    var o17 = o7.charCodeAt(o13);
                    switch(o17) {
                        case 0x0:
                            o10 += "\\0";
                            continue;
                        case 0x8:
                            o10 += "\\b";
                            continue;
                        case 0xb:
                            o10 += "\\v";
                            continue;
                        case 0xc:
                            o10 += "\\f";
                            continue;
                    }
                    if(o8) {
                        switch(o17) {
                            case 0x9:
                                o10 += "\\t";
                                continue;
                            case 0xa:
                                o10 += "\\n";
                                continue;
                            case 0xd:
                                o10 += "\\r";
                                continue;
                            case 0x22:
                                o10 += "\\\"";
                                continue;
                            case 0x5c:
                                o10 += "\\\\";
                                continue;
                        }
                    }
                    if(o17 >= 0x20 && o17 < 0x7f)
                        o10 += o7.charAt(o13);
                    else if(o17 <= 0xff)
                        o10 += "\\x" + o16.charAt((o17 >> 4) & 0xf) + o16.charAt(o17 & 0xf);
                    else
                        o10 += "\\u" + o16.charAt((o17 >> 12) & 0xf) + o16.charAt((o17 >> 8) & 0xf) + o16.charAt((o17 >> 4) & 0xf) + o16.charAt(o17 & 0xf);
                }
                if(o8)
                    o10 = "\"" + o10 + "\"";
                return o10;
            }

        case "object":
        case "function":
            break;

        default:
            return "<unknown type '" + typeof o7 + "'>";
    }

    if(o7 instanceof Array) {
        var o10 = "[";
        for(var o13 = 0; o13 < o7.length; ++o13) {
            if(o13)
                o10 += ", ";
            o10 += o6(o7[o13], true);
        }
        return o10 + "]";
    }
    if(o7 instanceof Error)
        return o7.name + ": " + o7.o23;
    if(o7 instanceof RegExp)
        return o7.toString() + (o7.o26 === 0 ? "" : " (lastIndex: " + o7.o26 + ")");
    return "" + o7;
}

function o5() {
    var o27;
    if(this.o28)
        o27 = function (o10) { this.o28.o29(o10); };
    else if(this.o30)
        o27 =
            function (o10) {
                o10 = o10
                    .replace(/&/g, "&&")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;");
                this.o30.write(o10 + "<br/>");
            };
    else
        o27 = function (o10) { this.print(o10); };
    o5 =
        function () {
            var o10 = "";
            for(var o13 = 0; o13 < arguments.length; ++o13)
                o10 += o6(arguments[o13]);
            o27(o10);
        };
    o5.apply(this, arguments);
}

function o36(o2) {
    var o37 = [];
    for(var o38 = 1; o38 < arguments.length; ++o38)
        o37.push(arguments[o38]);
    try {
        return o2.apply(this, o37);
    } catch(o40) {
        o5(o40);
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function exec(o42, o10) {
    o5("exec(", o42, ", ", o6(o10, true), ");");
    var o43 = o42.exec(o10);
    o5(o43);
    return o43;
}

function test(o42, o10) {
    o5("test(", o42, ", ", o6(o10, true), ");");
    var o43 = o42.test(o10);
    o5(o43);
    return o43;
}

function match(o42, o10) {
    o5("match(", o42, ", ", o6(o10, true), ");");
    var o43 = o10.match(o42);
    o5(o43);
    return o43;
}

function replace(o42, o10, o45) {
    o5("replace(", o6(o42, true), ", ", o6(o10, true), ", ", o6(o45, true), ");");
    var o43 = o10.replace(o42, o45);
    o5(o43);
    return o43;
}

function split(o42, o10) {
    o5("split(", o42, ", ", o6(o10, true), ");");
    var o43 = o10.split(o42);
    o5(o43);
    return o43;
}

function search(o42, o10) {
    o5("search(", o42, ", ", o6(o10, true), ");");
    var o43 = o10.search(o42);
    o5(o43);
    return o43;
}
