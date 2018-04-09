//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

for (var o0 = -1; o0 <= 2; ++o0) {
    for (var o1 = 0; o1 <= (o0 <= 0 ? 0 : 1); ++o1) {
        for (var o2 = 20; o2 <= 23; ++o2) {
            var o3 = o4(o2 - Math.o5(0, o0), o0, o1);
            o6(o2 + " digits");
            o6(o3);
            o6(eval(o3).toString());
            o6("");
        }
    }
}

function o4(o7, o0, o1) {
    if (o7 < 1)
        throw new Error("Invalid numDigits");

    var o8 = o0 >= 0;
    if (o0 < 0)
        o0 = 0;

    var o3 = "1";
    for (var o9 = 1; o9 < o7; ++o9)
        o3 += "0";
    if (o8)
        o3 += ".";
    if (o0 !== 0) {
        for (var o9 = 0; o9 < o0 - 1; ++o9)
            o3 += "0";
        o3 += o1;
    }
    return o3;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function toString(o10, o11) {
    switch (o10) {
        case null:
        case undefined:
            return "" + o10;
    }

    switch (typeof o10) {
        case "boolean":
        case "number":
            {
                var o3 = "" + o10;
                var o12 = o3.indexOf("e");
                for (var o9 = (o12 == -1 ? o3.length : o12) - 3; o9 > 0; o9 -= 3)
                    o3 = o3.substring(0, o9) + "," + o3.substring(o9);
                return o3;
            }

        case "string":
            {
                var o13 = "0123456789abcdef";
                var o3 = "";
                for (var o9 = 0; o9 < o10.length; ++o9) {
                    var o14 = o10.charCodeAt(o9);
                    if (o14 === 0)
                        o3 += "\\0";
                    else if (o14 >= 0x20 && o14 < 0x7f)
                        o3 += o11 && o10.charAt(o9) === "\"" ? "\\\"" : o10.charAt(o9);
                    else if (o14 <= 0xff)
                        o3 += "\\x" + o13.charAt((o14 >> 4) & 0xf) + o13.charAt(o14 & 0xf);
                    else
                        o3 += "\\u" + o13.charAt((o14 >> 12) & 0xf) + o13.charAt((o14 >> 8) & 0xf) + o13.charAt((o14 >> 4) & 0xf) + o13.charAt(o14 & 0xf);
                }
                if (o11)
                    o3 = "\"" + o3 + "\"";
                return o3;
            }

        case "object":
        case "function":
            break;

        default:
            return "<unknown type '" + typeof o10 + "'>";
    }

    if (o10 instanceof Array) {
        var o3 = "[";
        for (var o9 = 0; o9 < o10.length; ++o9) {
            if (o9)
                o3 += ", ";
            o3 += toString(o10[o9], true);
        }
        return o3 + "]";
    }
    if (o10 instanceof Error)
        return o10.name + ": " + o10.o15;
    if (o10 instanceof RegExp)
        return o10.toString() + (o10.o16 === 0 ? "" : " (lastIndex: " + o10.o16 + ")");
    return "" + o10;
}

function o6(o10) {
    var o3 = toString(o10);
    try {
        o17.write(o3 + "<br/>");
    } catch (o18) {
        try {
            o19.o20(o3);
        } catch (o21) {
            print(o3);
        }
    }
}

function o22(o23) {
    var o24 = [];
    for (var o25 = 1; o25 < arguments.length; ++o25)
        o24.push(arguments[o25]);
    try {
        return o23.apply(this, o24);
    } catch (o18) {
        o6(o18);
    }
}
