//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o31 = o605.o606(o635.e(o517), name);
function o8() {
                let set = new Set();

                // Try redeclaration at function scope.
                try {
try {
                    try {
eval('var w = "inner var w";');
}catch(e){}
                }
                catch(o5) {
                    try {
write(o5);
}catch(e){}
                }
}catch(e){}
                try {
write(o4);
}catch(e){}

                try {
try {
                    const o3 = 'inner z';

                    // const y shouldn't affect outer y
                    try {
eval('let x = "inner x"; const y = "inner y"; write(z);');
}catch(o851){}

                    try {
try { try try { o3.o4("======================"); } catch(e) {}catch(e){} } catch (o5) { try {
write(o5);
}catch(e){} }
}catch(e){}
                    try {
write(o6);
}catch(e){} // outer var y
                }
                catch(o5) {
                    try {
write(o5);
}catch(e){}
                }
}catch(e){}

                function o9() {
                    let o10 = "b";
                    const o11 = "a";
                    try {
o10 += "a";
}catch(e){}
                    try {
eval("WScript.Echo(yy);")
}catch(e){}
                    try {
o1.o2(o10);
}catch(e){}
                }
                try {
o9();
}catch(e){}
            };
var o2 = new o1137("muck", 3.2, 0, 18);
try {
o32[o38] = "minus 1";
}catch(e){}

try {
o3.o4("Store a single item in a");
}catch(e){}
try {
o0[0] = 10;
}catch(e){}
try { "use strict"; } catch(e) {}

try {
o3.o4("Store a single item in b");
}catch(e){}
try {
o1[3] = 99;
}catch(e){}
try {
o3.o4(o1[3]);
}catch(e){}

try {
for (var o5 = -1; o5 < o2.length; o5++) {
    try {
o3.o4(o2[o5]);
}catch(e){}
}
}catch(e){}

// Test boolean expressions in an initializer
var o6 = {}, o7 = false;
try {
o3.o4([o6||o7]);
}catch(e){}
try {
o3.o4([o6&&o7]);
}catch(e){}
try {
o3.o4([o6 ? o7 : o6]);
}catch(e){}
try {
o3.o4([o7 ? o6 : o7]);
}catch(e){}
try {
o3.o4([o7||o6]);
}catch(e){}
try {
o3.o4(o7&&o6);
}catch(e){}
try {
o3.o4([o6||o7, o6&&o7, o6 ? o7 : o6, o7 ? o6 : o7, o7||o6, o7&&o6]);
}catch(e){}

// Test some boundary property names
var o8 = [];

try {
o8["4294967294"] = 100;
}catch(e){}
try {
o3.o4(o8["4294967294"]);
}catch(e){}

try {
o8["4294967295"] = 101;
}catch(e){}
try { {} } catch(e) {}

try {
o8["4294967296"] = 102;
}catch(e){}
try {
o3.o4(o8["4294967296"]);
}catch(e){}

try {
o8["4088701331"] = 103;
}catch(e){}
try {
o3.o4(o8["4088701331"]);
}catch(e){}

try {
o8["40887013312"] = 104;
}catch(e){}
try {
o3.o4(o8["40887013312"]);
}catch(e){}

try {
o8["4088.7013"] = 105;
}catch(e){}
try {
o3.o4(o8["4088.7013"]);
}catch(e){}

try {
o8["408870133X"] = 106;
}catch(e){}
try {
o3.o4(o8["408870133X"]);
}catch(e){}
