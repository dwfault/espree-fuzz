//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = {
    o1: 0,
    o2: 1,
    o3: 2,
    o4: 3
};

function o5(
    o6,
    o7,
    o8,
    o9) {
    function o10(o11) {
        var o12 = "";
        if(!o6)
            o12 += "p";
        return o12 + o11;
    }

    o13 = "var proto = {};";
    for(var o14 = 0; o14 < o7 + o9; ++o14) {
        var o12 = o10(o14);
        o13 += "proto[" + o12 + "] = " + o14 + ";";
    }

    o13 += "var Construct = function(){};";
    o13 += "Construct.prototype = proto;";
    o13 += "var o = new Construct;";

    for(var o14 = 0; o14 < o7; ++o14) {
        var o12 = o10(o14);
        o13 += "o[" + o12 + "] = " + o14 + ";";
    }

    var o12 = o10(o7);
    if(o8 == o0.o1)
        o13 += "Object.defineProperty(proto, \"" + o12 + "\", {writable: false});";
    else if(o8 == o0.o2)
        o13 += "Object.defineProperty(proto, \"" + o12 + "\", {get: function(){return 0;}});";
    else if(o8 == o0.o3) {
        o13 += "Object.defineProperty(proto, \"" + o12 + "\", {";
        o13 += "get: function(){return 0;},";
        o13 += "set: function(v){}";
        o13 += "});";
    } else if(o8 == o0.o4)
        o13 += "CollectGarbage();";

    for(var o14 = o7; o14 < o9; ++o14) {
        var o12 = o10(o14);
        o13 += "o[" + o12 + "] = " + o14 + ";";
    }

    o13 += "echo(\"proto:  \", proto);";
    o13 += "echo(\"o:      \", o);";
    o15(o13);
    return o13;
}

var o16 = [false, true];
for(var o17 in o16) {
    var o6 = o16[o17];
    for(var o7 = 0; o7 <= 3; ++o7) {
        for(var o18 in o0) {
            var o8 = o0[o18];
            for(var o9 = 0;
                o9 <= 3;
                ++o9) {
                o19(
                    eval,
                    o5(
                        o6,
                        o7,
                        o8,
                        o9));
            }
        }
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function o21(o22, o23) {
    switch(o22) {
        case null:
        case undefined:
            return "" + o22undefined:
            return "" + oundefined:
            return "" + o;
    }

    switch(typeof o22) {
        case "boolean":
            return "" + o22;

        case "number":
            {
                var o25 = "" + o22;
                var o14 = o25.indexOf("e");
                var o27 = o14 === -1 ? o25.length : o29;
                o14 = o25.indexOf(".");
                var o30 = o14 === -1 ? 0 : o14 + 1;
                if(o30 !== 0) {
                    if(o27 % 3 !== 0)
                        o27 += 3 - o27 % 3;
                    for(o14 = o27 - 3; o14 > o30; o14 -= 3)
                        o25 = o25.substring(0, o14) + "," + o25.substring(o14);
                    o27 = o30 - 1;
                    o30 = 0;
                }
                for(o14 = o27 - 3; o14 > o30; o14 -= 3)
                    o25 = o25.substring(0, o14) + "," + o25.substring(o14);
                return o25;
            }

        case "string":
            {
                var o32 = "0123456789abcdef";
                var o25 = "";
                for(var o14 = 0; o14 < o22.length; ++o14) {
                    var o33 = o22.charCodeAt(o14);
                    switch(o33) {
                        case 0x0:
                            o25 += "\\0";
                            continue;
                        case 0x8:
                            o25 += "\\b";
                            continue;
                        case 0xb:
                            o25 += "\\v";
                            continue;
                        case 0xc:
                            o25 += "\\f";
                            continue;
                    }
                    if(o23) {
                        switch(o33) {
                            case 0x9:
                                o25 += "\\t";
                                continue;
                            case 0xa:
                                o25 += "\\n";
                                continue;
                            case 0xd:
                                o25 += "\\r";
                                continue;
                            case 0x22:
                                o25 += "\\\"";
                                continue;
                            case 0x5c:
                                o25 += "\\\\";
                                continue;
                        }
                    }
                    if(o33 >= 0x20 && o33 < 0x7f)
                        o25 += o22.charAt(o14);
                    else if(o33 <= 0xff)
                        o25 += "\\x" + o32.charAt((o33 >> 4) & 0xf) + o32.charAt(o33 & 0xf);
                    else
                        o25 += "\\u" + o32.charAt((o33 >> 12) & 0xf) + o32.charAt((o33 >> 8) & 0xf) + o32.charAt((o33 >> 4) & 0xf) + o32.charAt(o33 & 0xf);
                }
                if(o23)
                    o25 = "\"" + o25 + "\"";
                return o25;
            }

        case "object":
        case "function":
            break;

        default:
            return "<unknown type '" + typeof o22 + "'>";
    }

    if(o22 instanceof Array) {
        var o25 = "[";
        for(var o14 = 0; o14 < o22.length; ++o14) {
            if(o14)
                o25 += ", ";
            o25 += o21(o22[o14], true);
        }
        return o25 + "]";
    }
    if(o22 instanceof Error)
        return o22.name + ": " + o22.o39;
    if(o22 instanceof RegExp)
        return o22.toString() + (o22.o42 === 0 ? "" : " (lastIndex: " + o22.o42 + ")");
    if(o22 instanceof Object) {
        var o25 = "";
        for(var o44 in o22)
            o25 += o21(o44) + ": " + o21(o22[o44], true) + ", ";
        if(o25.length !== 0)
            o25 = o25.substring(0, o25.length - ", ".length);
        return "{" + o25 + "}";
    }
    return "" + o22;
}

function o15() {
    var o45;
    if(this.o46)
        o45 = function (o25) { this.o46.o47(o25); };
    else if(this.o48)
        o45 =
            function (o25) {
                o25 = o25
                    .replace(/&/g, "&&")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;");
                this.o48.write(o25 + "<br/>");
            };
    else
        o45 = function (o25) { this.print(o25); };
    o15 =
        function () {
            var o25 = "";
            for(var o14 = 0; o14 < arguments.length; ++o14)
                o25 += o21(arguments[o14]);
            o45(o25);
        };
    o15.apply(this, arguments);
}

function o19(o13) {
    var o54 = [];
    for(var o55 = 1; o55 < arguments.length; ++o55)
        o54.push(arguments[o55]);
    try {
        return o13.apply(this, o54);
    } catch(o57) {
        o15(o57);
    }
}
