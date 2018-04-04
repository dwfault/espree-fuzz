//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "Octal escape sequences are not allowed in string template literals - exhaustive test",
        o4: function() {
            function o5(o6) {
                if (o6 < 10) {
                    o7.o8(function () { eval('print(`\\00' + o6 + '`)'); }, o10, "Scanning an octal escape sequence " + "`\\00" + o6 + "` throws SyntaxError.", "Octal numeric literals and escape characters not allowed in strict mode");
                }
                if (o6 < 100) {
                    o7.o8(function () { eval('print(`\\0' + o6 + '`)'); }, o10, "Scanning an octal escape sequence " + "`\\0" + o6 + "` throws SyntaxError.", "Octal numeric literals and escape characters not allowed in strict mode");
                }
                o7.o8(function () { eval('print(`\\' + o6 + '`)'); }, o10, "Scanning an octal escape sequence " + "`\\" + o6 + "` throws SyntaxError.", "Octal numeric literals and escape characters not allowed in strict mode");
            }
            for (var o11 = 1; o11 <= 255; o11++) {
                o5(o11.toString(8));
            }
        }
    },
];

o13.o14(o2, { o15: o0.o16[0] != "summary" });
