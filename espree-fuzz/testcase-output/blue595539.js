//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1, o2) {
    try {
        var o3 = "var " + o1 + "a = 5;";
        eval(o3);
        if (o5 !== 5) {
            throw new Error("Eval value didn't equal to 5.");
        }
    } catch (o7) {
        o8.o9("Whitespace error with: " + o2 + "\r\nMessage: " + o7.o10);
    }
}

var o11 = [
    { o12: 0x9, o13: "0x9" },
    { o12: 0xB, o13: "0xB" },
    { o12: 0xC, o13: "0xC" },
    { o12: 0x20, o13: "0x20" },
    { o12: 0xA0, o13: "0xA0" },
    { o12: 0xFEFF, o13: "0xFEFF" }];

o11.forEach(function (o15) { o0(String.fromCharCode(o15.o12), o15.o13); });

o8.o9("Pass");