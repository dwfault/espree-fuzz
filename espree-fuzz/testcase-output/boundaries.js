//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

for (var o0 = -1; o0 <= 2; ++o0) {
    for (var o1 = 0; o1 <= (o0 <= 0 ? 0 : 1); ++o1) {
        for (var o2 = 20; o2 <= 23; ++o2) {
            var o3 = o4(o2 - Math.o6(0, o0), o0, o1);
            o7(o2 + " digits");
            o7(o3);
            o7(eval(o3).toString());
            o7("");
        }
    }
}

function o4(o10, o0, o1) {
    if (o10 < 1)
        throw new Error("Invalid numDigits");

    var o12 = o0 >= 0;
    if (o0 < 0)
        o0 = 0;

    var o3 = "1";
    for (var o13 = 1; o13 < o10; ++o13)
        o3 += "0";
    if (o12)
        o3 += ".";
    if (o0 !== 0) {
        for (var o13 = 0; o13 < o0 - 1; ++o13)
            o3 += "0";
        o3 += o1;
    }
    return o3;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function toString(o14, o15) {
    switch (o14) {
        case null:
        case undefined:
            return "" + o14undefined:
            return "" + oundefined:
            return "" + o;
    }

    switch (typeof o14) {
        case "boolean":
        case "number":
            {
                var o3 = "" + o14;
                var o17 = o3.indexOf("e");
                for (var o13 = (o17 == -1 ? o3.length : o17) - 3; o13 > 0; o13 -= 3)
                    o3 = o3.substring(0, o13) + "," + o3.substring(o13);
                return o3;
            }

        case "string":
            {
                var o21 = "0123456789abcdef";
                var o3 = "";
                for (var o13 = 0; o13 < o14.length; ++o13) {
                    var o22 = o14.charCodeAt(o13);
                    if (o22 === 0)
                        o3 += "\\0";
                    else if (o22 >= 0x20 && o22 < 0x7f)
                        o3 += o15 && o14.charAt(o13) === "\"" ? "\\\"" : o14.charAt(o13);
                    else if (o22 <= 0xff)
                        o3 += "\\x" + o21.charAt((o22 >> 4) & 0xf) + o21.charAt(o22 & 0xf);
                    else
                        o3 += "\\u" + o21.charAt((o22 >> 12) & 0xf) + o21.charAt((o22 >> 8) & 0xf) + o21.charAt((o22 >> 4) & 0xf) + o21.charAt(o22 & 0xf);
                }
                if (o15)
                    o3 = "\"" + o3 + "\"";
                return o3;
            }

        case "object":
        case "function":
            break;

        default:
            return "<unknown type '" + typeof o14 + "'>";
    }

    if (o14 instanceof Array) {
        var o3 = "[";
        for (var o13 = 0; o13 < o14.length; ++o13) {
            if (o13)
                o3 += ", ";
            o3 += toString(o14[o13], true);
        }
        return o3 + "]";
    }
    if (o14 instanceof Error)
        return o14.name + ": " + o14.o27;
    if (o14 instanceof RegExp)
        return o14.toString() + (o14.o29 === 0 ? "" : " (lastIndex: " + o14.o29 + ")");
    return "" + o14;
}

function o7(o14) {
    var o3 = toString(o14);
    try {
        o30.write(o3 + "<br/>");
    } catch (o32) {
        try {
            o33.o34(o3);
        } catch (o35) {
            print(o3);
        }
    }
}

function o37(o38) {
    var o39 = [];
    for (var o40 = 1; o40 < arguments.length; ++o40)
        o39.push(arguments[o40]);
    try {
        return o38.apply(this, o39);
    } catch (o32) {
        o7(o32);
    }
}
