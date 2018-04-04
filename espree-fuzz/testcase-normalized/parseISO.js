//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = 0, o1 = 0, o2 = 0;

o3("////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////");
o3("// Definitely valid ISO strings");
o3("");

o3("// Auto-generated");
o3("");
o4();
var o5 = 0, o6 = 0, o7 = 0, o8 = 0, o9 = 0, o10 = 0;
for (o5 = 4; o5 <= 6; o5 += 2) {
    o7 = o6 = 0;
    o11();
    o6 = 2;
    o11();
    o7 = 2;
    o11();
}
function o11() {
    o10 = o9 = o8 = 0;
    o12();
    o8 = 2;
    o12();
    o9 = 2;
    o12();
    o10 = 3;
    o12();
}

o13();

o3("////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////");
o3("// Definitely invalid ISO strings");
o3("");

o3("// Field value outside valid range");
o3("");
o14("0001-00-01T01:01:01.001Z");
o14("0001-13-01T01:01:01.001Z");
o14("0001-01-00T01:01:01.001Z");
o14("0001-01-32T01:01:01.001Z");
o14("0001-01-01T25:01:01.001Z");
o14("0001-01-01T01:01:01.001+25:00");
o14("0001-01-01T01:60:01.001Z");
o14("0001-01-01T01:01:01.001+00:60");
o14("0001-01-01T01:01:60.001Z");

o3("// Time value outside valid range");
o3("");
o14("-300000-01-01T01:01:01.001Z");
o14("+300000-01-01T01:01:01.001Z");

// Many other invalid ISO strings are tested in "potential cross-browser compatibility issues" section

o13();

o3("////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////");
o3("// Potential cross-browser compatilibity issues");
o3("");

o3("// Leading and trailing whitespace, nulls, or non-whitespace non-nulls");
o3("");
var o15 = "0001-01-01T01:01:01.001Z";
var o16 = ["", "\0", "\t", "\n", "\v", "\f", "\r", " ", "\u00a0", "\u2028", "\u2029", "\ufeff"];
for (var o17 = 0; o17 < o16.length; ++o17) {
    if (o15 !== "") {
        o14(o16[o17] + o15);
        o14(o15 + o16[o17]);
    }
    o14(o15 + o16[o17] + "x");
}

o3("// Less and more digits per field");
o3("");
o14("001-01-01T01:01:01.001Z");
o14("00001-01-01T01:01:01.001Z");
o14("0001-1-01T01:01:01.001Z");
o14("0001-001-01T01:01:01.001Z");
o14("0001-01-1T01:01:01.001Z");
o14("0001-01-001T01:01:01.001Z");
o14("0001-01-01T1:01:01.001Z");
o14("0001-01-01T001:01:01.001Z");
o14("0001-01-01T01:1:01.001Z");
o14("0001-01-01T01:001:01.001Z");
o14("0001-01-01T01:01:1.001Z");
o14("0001-01-01T01:01:001.001Z");
o14("0001-01-01T01:01:01.01Z");
o14("0001-01-01T01:01:01.0001Z");

o3("// Date-only forms with UTC offset");
o3("");
o14("0001Z");
o14("0001-01Z");
o14("0001-01-01Z"); // note: this is rejected by the ISO parser as it should be, but it's accepted by the fallback parser

o3("// Optionality of minutes");
o3("");
o14("0001-01-01T01Z");
o14("0001-01-01T01:01:01.001+01");

o3("// Time-only forms");
o3("");
o14("T01:01Z");
o14("T01:01:01Z");
o14("T01:01:01.001Z");

o3("// Field before missing optional field ending with separator");
o3("");
o14("0001-");
o14("0001-01-");
o14("0001-T01:01:01.001Z");
o14("0001-01-T01:01:01.001Z");
o14("0001-01-01T01:01:Z");
o14("0001-01-01T01:01:01.Z");

o3("// Optionality and type of sign on years");
o3("");
o14("+0001-01-01T01:01:01.001Z");
o14("-0001-01-01T01:01:01.001Z");
o14("010000-01-01T01:01:01.001Z");
o14("-000000-01-01T01:01:01.001Z");

o3("// Test support for zones without colons (DEVDIV2: 481975)");
o3("");
o14("2012-02-22T03:08:26+0000");

o13();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Test-specific helpers

function o14(o15) {
    ++o0;
    o3(o15);
    o19(function () {
        var o20 = new Date(o15);
        var o22 = o20.o23();
        if (isNaN(o22)) {
            o3(o20);
        } else {
            o20 = o20.toISOString();
            o3(o20);
            var o26 = new Date(o20).o23();
            o3(o22 + " " + (o22 === o26 ? "===" : "!==") + " " + o26);
            if (o20.indexOf("Invalid", 0) === -1) {
                if (o22 === o26)
                    ++o1;
                else
                    ++o2;
            }
        }
    });
    o3("");
}

function o12() {
    var o15 =
        o28(
            o5,
            o6,
            o7,
            o8,
            o8,
            o9,
            o10);
    for (var o17 = 0; o17 < o15.length; ++o17)
        o14(o15[o17]);
}

var o29, o30;
function o4() {
    o29 = ["+", "-"];
    o30 = ["", "Z"];
    var o31 = ["00", "01", "10"];
    for (var o17 = 0; o17 < o31.length; ++o17)
        for (var o32 = 0; o32 < o31.length; ++o32)
            for (var o33 = 0; o33 < o29.length; ++o33) 
                o30.push(o29[o33] + o31[o17] + ":" + o31[o32]);
}

// Generates date strings in the following format:
//     date format: "[+|-]YYYYYY[-MM[-DD]]"
//     separator:   "T| "
//     time format: "HH:mm[:ss[.sss]]"
//     time zone:   "Z|(+|-)HH:mm"
// - The separator is required only if both the date and time portions are included in the string.
// - Zero-padding is optional
// - Positive sign (+) is optional when the year is nonnegative
// - Negative sign (-) is optional when the year is zero
// - Time zone is optional
// 
// The function will return an array of strings to test against, based on the parameters.
function o28(
    o5,         // number of digits to include for the year (0-6), 0 - exclude the year (monthDigits must also be 0)
    o6,        // number of digits to include for the month (0-2), 0 - exclude the month (dayDigits must also be 0)
    o7,          // number of digits to include for the day (0-2), 0 - exclude the day
    o35,         // number of digits to include for the hour (0-2), 0 - exclude the hour (minuteDigits must also be 0)
    o36,       // number of digits to include for the minute (0-2), 0 - exclude the minute (hourDigits and secondDigits must also be 0)
    o9,       // number of digits to include for the second (0-2), 0 - exclude the second (millisecondDigits must also be 0)
    o10)  // number of digits to include for the millisecond (0-3), 0 - exclude the millisecond
{
    if (o5 === 0 && o6 !== 0 ||
        o6 === 0 && o7 !== 0 ||
        o35 === 0 && o36 !== 0 ||
        o36 === 0 && (o35 !== 0 || o9 !== 0) ||
        o9 === 0 && o10 !== 0 ||
        o5 === 0 && (o35 === 0 || o36 === 0))
        return [];

    var o15 = [""];

    if (o5 !== 0) {
        o37(o15, o5, true);
        if (o6 !== 0) {
            o38(o15, ["-"]);
            o37(o15, o6, false);
            if (o7 !== 0) {
                o38(o15, ["-"]);
                o37(o15, o7, false);
            }
        }
    }

    if (o35 !== 0 && o36 !== 0) {
        o38(o15, ["T"]);
        o37(o15, o35, true);
        o38(o15, [":"]);
        o37(o15, o36, true);
        if (o9 !== 0) {
            o38(o15, [":"]);
            o37(o15, o9, true);
            if (o10 !== 0) {
                o38(o15, ["."]);
                o37(o15, o10, true);
            }
        }
    }

    if (o5 !== 0 && o35 !== 0 && o36 !== 0)
        o15 = o39(o15, o30, function (o40, o41) { return o40 + o41; });
    if(o5 === 6) {
        o15 =
            o39(
                o15,
                o29,
                function (o40, sign) {
                    if(sign === "-" && o40.length >= 6 && o40.substring(0, 6) === "000000")
                        return undefined; // "-000000" is not allowed
                    return sign + o40;
                });
    }

    return o15;
}

// Appends interesting combinations of n digits to the string array
function o37(o45, o46, o47) {
    var o48 = [];
    switch (o46) {
        case 0:
            break;

        case 1:
            if (o47)
                o48.push("0");
            o48.push("1");
            o38(o45, o48);
            break;

        case 3:
        case 6:
            if (o46 === 3)
                o48.push("010");
            else
                o48.push("010010");

        default:
            var o49 = o50(o46 - 1);
            if (o47)
                o48.push(o49 + "0");
            o48.push(o49 + "1");
            o48.push("1" + o49);
            o38(o45, o48);
            break;
    }
}

// Returns a string of n zeroes
function o50(o46) {
    var o15 = "";
    while (o46-- > 0)
        o15 += "0";
    return o15;
}

// Appends patterns to the string array. The array is extended to acommodate the number of patterns, and the patterns are
// repeated to acommodate the length of the array.
function o38(o45, o51) {
    o52(o45, o51.length);
    for (var o17 = 0; o17 < o45.length; ++o17)
        o45[o17] += o51[o17 % o51.length];
}

// Applies the function 'f' to each combination of elements in 'a' and 'p'. 'f' will receive the element of 'a' on which it
// should apply the pattern from 'p' and it should return the modified string. The string returned by 'f' will be pushed onto a
// new array, which will be returned.
function o39(o45, o51, o53) {
    var o54 = [];
    for(var o17 = 0; o17 < o45.length; ++o17) {
        for(var o32 = 0; o32 < o51.length; ++o32) {
            var o55 = o53(o45[o17], o51[o32]);
            if(o55 !== undefined)
                o54.push(o55);
        }
    }
    return o54;
}

// Extends an array to have length n, by copying the last element as necessary
function o52(o45, o46) {
    var o56 = o45.length;
    for (var o17 = o56; o17 < o46; ++o17)
        o45.push(o45[o56 - 1]);
}

function o13() {
    o3("Total: " + o0);
    o3("Accepted: " + o1);
    o3("Rejected: " + (o0 - o1 - o2));
    o3("Failed: " + o2);
    o3("");
    o2 = o1 = o0 = 0;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// General helpers

function toString(o58, o59) {
    switch (o58) {
        case null:
        case undefined:
            return "" + o58undefined:
            return "" + oundefined:
            return "" + o;
    }

    switch (typeof o58) {
        case "boolean":
        case "number":
            return "" + o58;

        case "string":
            {
                var o60 = "0123456789abcdef";
                var o15 = "";
                for (var o17 = 0; o17 < o58.length; ++o17) {
                    var o61 = o58.charCodeAt(o17);
                    if (o61 === 0)
                        o15 += "\\0";
                    else if (o61 >= 0x20 && o61 < 0x7f)
                        o15 += o59 && o58.charAt(o17) === "\"" ? "\\\"" : o58.charAt(o17);
                    else if (o61 <= 0xff)
                        o15 += "\\x" + o60.charAt((o61 >> 4) & 0xf) + o60.charAt(o61 & 0xf);
                    else
                        o15 += "\\u" + o60.charAt((o61 >> 12) & 0xf) + o60.charAt((o61 >> 8) & 0xf) + o60.charAt((o61 >> 4) & 0xf) + o60.charAt(o61 & 0xf);
                }
                if (o59)
                    o15 = "\"" + o15 + "\"";
                return o15;
            }

        case "object":
        case "function":
            break;

        default:
            return "<unknown type '" + typeof o58 + "'>";
    }

    if (o58 instanceof Array) {
        var o15 = "[";
        for (var o17 = 0; o17 < o58.length; ++o17) {
            if (o17)
                o15 += ", ";

            o15 += this.toString(o58[o17], true);
        }
        return o15 + "]";
    }
    if (o58 instanceof Error)
        return o58.name + ": " + o58.o67;
    if (o58 instanceof RegExp)
        return o58.toString() + (o58.o69 === 0 ? "" : " (lastIndex: " + o58.o69 + ")");
    return "" + o58;
}

function o3(o58) {
    var o15 = this.toString(o58);
    try {
        o70.write(o15 + "<br/>");
    } catch (o72) {
        try {
            o73.o74(o15);
        } catch (o75) {
            print(o15);
        }
    }
}

function o19(o53) {
    var o77 = [];
    for (var o45 = 1; o45 < arguments.length; ++o45)
        o77.push(arguments[o45]);
    try {
        return o53.apply(this, o77);
    } catch (o72) {
        o3(o72);
    }
}
