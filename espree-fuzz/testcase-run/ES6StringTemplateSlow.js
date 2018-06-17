//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
    {
        name: "Octal escape sequences are not allowed in string template literals - exhaustive test",
        o3: function() {
            function o4(o5) {
                try {
if (o5 < 10) {
                    try {
o6.o7(function () { try {
eval('print(`\\00' + o5 + '`)');
}catch(e){} }, o8, "Scanning an octal escape sequence " + "`\\00" + o5 + "` throws SyntaxError.", "Octal numeric literals and escape characters not allowed in strict mode");
}catch(e){}
                }
}catch(e){}
                try {
if (o5 < 100) {
                    try {
o6.o7(function () { try {
eval('print(`\\0' + o5 + '`)');
}catch(e){} }, o8, "Scanning an octal escape sequence " + "`\\0" + o5 + "` throws SyntaxError.", "Octal numeric literals and escape characters not allowed in strict mode");
}catch(e){}
                }
}catch(e){}
                try {
o6.o7(function () { try {
eval('print(`\\' + o5 + '`)');
}catch(e){} }, o8, "Scanning an octal escape sequence " + "`\\" + o5 + "` throws SyntaxError.", "Octal numeric literals and escape characters not allowed in strict mode");
}catch(e){}
            }
            try {
for (var o9 = 1; o9 <= 255; o9++) {
                try {
o4(o9.toString(8));
}catch(e){}
            }
}catch(e){}
        }
    },
];

try {
o10.o11(o2, { o12: o0.o13[0] != "summary" });
}catch(e){}
