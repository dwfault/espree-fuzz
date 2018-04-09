//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// WOOB 1147829 - these cause a crash in the compat regex engine, but they don't repro the crash most of the time
match(/^a/m, "b");
match(/$a?/m, "");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function o0(o1) {
    var o2 = new Date();
    o1();
    o3(new Date() - o2);
}

function o4(o5, o6) {
    switch(o5) {
        case null:
        case undefined:
            return "" + o5;
    }

    switch(typeof o5) {
        case "boolean":
            return "" + o5;

        case "number":
            {
                var o7 = "" + o5;
                var o8 = o7.indexOf("e");
                for(var o9 = (o8 == -1 ? o7.length : o8) - 3; o9 > 0; o9 -= 3)
                    o7 = o7.substring(0, o9) + "," + o7.substring(o9);
                return o7;
            }

        case "string":
            {
                var o10 = "0123456789abcdef";
                var o7 = "";
                for(var o9 = 0; o9 < o5.length; ++o9) {
                    var o11 = o5.charCodeAt(o9);
                    switch(o11) {
                        case 0x0:
                            o7 += "\\0";
                            continue;
                        case 0x8:
                            o7 += "\\b";
                            continue;
                        case 0xb:
                            o7 += "\\v";
                            continue;
                        case 0xc:
                            o7 += "\\f";
                            continue;
                    }
                    if(o6) {
                        switch(o11) {
                            case 0x9:
                                o7 += "\\t";
                                continue;
                            case 0xa:
                                o7 += "\\n";
                                continue;
                            case 0xd:
                                o7 += "\\r";
                                continue;
                            case 0x22:
                                o7 += "\\\"";
                                continue;
                            case 0x5c:
                                o7 += "\\\\";
                                continue;
                        }
                    }
                    if(o11 >= 0x20 && o11 < 0x7f)
                        o7 += o5.charAt(o9);
                    else if(o11 <= 0xff)
                        o7 += "\\x" + o10.charAt((o11 >> 4) & 0xf) + o10.charAt(o11 & 0xf);
                    else
                        o7 += "\\u" + o10.charAt((o11 >> 12) & 0xf) + o10.charAt((o11 >> 8) & 0xf) + o10.charAt((o11 >> 4) & 0xf) + o10.charAt(o11 & 0xf);
                }
                if(o6)
                    o7 = "\"" + o7 + "\"";
                return o7;
            }

        case "object":
        case "function":
            break;

        default:
            return "<unknown type '" + typeof o5 + "'>";
    }

    if(o5 instanceof Array) {
        var o7 = "[";
        for(var o9 = 0; o9 < o5.length; ++o9) {
            if(o9)
                o7 += ", ";
            o7 += o4(o5[o9], true);
        }
        return o7 + "]";
    }
    if(o5 instanceof Error)
        return o5.name + ": " + o5.o12;
    if(o5 instanceof RegExp)
        return o5.toString() + (o5.o13 === 0 ? "" : " (lastIndex: " + o5.o13 + ")");
    return "" + o5;
}

function o3() {
    var o14;
    if(this.o15)
        o14 = function (o7) { this.o15.o16(o7); };
    else if(this.o17)
        o14 =
            function (o7) {
                o7 = o7
                    .replace(/&/g, "&&")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;");
                this.o17.write(o7 + "<br/>");
            };
    else
        o14 = function (o7) { this.print(o7); };
    o3 =
        function () {
            var o7 = "";
            for(var o9 = 0; o9 < arguments.length; ++o9)
                o7 += o4(arguments[o9]);
            o14(o7);
        };
    o3.apply(this, arguments);
}

function o18(o1) {
    var o19 = [];
    for(var o20 = 1; o20 < arguments.length; ++o20)
        o19.push(arguments[o20]);
    try {
        return o1.apply(this, o19);
    } catch(o21) {
        o3(o21);
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function exec(o22, o7) {
    o3("exec(", o22, ", ", o4(o7, true), ");");
    var o23 = o22.exec(o7);
    o3(o23);
    return o23;
}

function test(o22, o7) {
    o3("test(", o22, ", ", o4(o7, true), ");");
    var o23 = o22.test(o7);
    o3(o23);
    return o23;
}

function match(o22, o7) {
    o3("match(", o22, ", ", o4(o7, true), ");");
    var o23 = o7.match(o22);
    o3(o23);
    return o23;
}

function replace(o22, o7, o24) {
    o3("replace(", o4(o22, true), ", ", o4(o7, true), ", ", o4(o24, true), ");");
    var o23 = o7.replace(o22, o24);
    o3(o23);
    return o23;
}

function split(o22, o7) {
    o3("split(", o22, ", ", o4(o7, true), ");");
    var o23 = o7.split(o22);
    o3(o23);
    return o23;
}

function search(o22, o7) {
    o3("search(", o22, ", ", o4(o7, true), ");");
    var o23 = o7.search(o22);
    o3(o23);
    return o23;
}
