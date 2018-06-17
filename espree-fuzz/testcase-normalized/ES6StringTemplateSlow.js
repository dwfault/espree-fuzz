//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "Octal escape sequences are not allowed in string template literals - exhaustive test",
        o3: function() {
            function o4(o5) {
                if (o5 < 10) {
                    o6.o7(function () { eval('print(`\\00' + o5 + '`)'); }, o8, "Scanning an octal escape sequence " + "`\\00" + o5 + "` throws SyntaxError.", "Octal numeric literals and escape characters not allowed in strict mode");
                }
                if (o5 < 100) {
                    o6.o7(function () { eval('print(`\\0' + o5 + '`)'); }, o8, "Scanning an octal escape sequence " + "`\\0" + o5 + "` throws SyntaxError.", "Octal numeric literals and escape characters not allowed in strict mode");
                }
                o6.o7(function () { eval('print(`\\' + o5 + '`)'); }, o8, "Scanning an octal escape sequence " + "`\\" + o5 + "` throws SyntaxError.", "Octal numeric literals and escape characters not allowed in strict mode");
            }
            for (var o9 = 1; o9 <= 255; o9++) {
                o4(o9.toString(8));
            }
        }
    },
];

o10.o11(o2, { o12: o0.o13[0] != "summary" });
