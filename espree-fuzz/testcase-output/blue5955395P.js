//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1, o2) {
    try {
        var o3 = "var " + o1 + "a = 5;";
        eval(o3);
        if (o4 !== 5) {
            throw new Error("Eval value didn't equal to 5.");
        }
    } catch (o5) {
        o6.o7("Whitespace error with: " + o2 + "\r\nMessage: " + o5.o8);
    }
}

var o9 = [
    { o10: 0x9, o11: "0x9" },
    { o10: 0xB, o11: "0xB" },
    { o10: 0xC, o11: "0xC" },
    { o10: 0x20, o11: "0x20" },
    { o10: 0xA0, o11: "0xA0" },
    { o10: 0xFEFF, o11: "0xFEFF" }];

o9.forEach(function (o12) { o0(String.fromCharCode(o12.o10), o12.o11); });

o6.o7("Pass");