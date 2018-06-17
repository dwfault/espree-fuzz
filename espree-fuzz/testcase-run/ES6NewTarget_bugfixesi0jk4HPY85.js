//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = o39.o470;

try try { {
            try {
o16.push("\"");
}catch(e){}
            var o17 = -1;
            try {
for (var o18 = 0; o18 < o1.length; o18++) {
                var o19 = o1.charCodeAt(o18);
                try {
if (o19 < 32 || o19 > 127 || o19 == '"'.charCodeAt(0) || o19 == '\\'.charCodeAt(0)) {
                    try {
if (o17 >= 0)
                        try {
o16.push(o1.substring(o17, o18));
}catch(e){}
}catch(e){}
                    try {
o17 = -1;
}catch(e){}
                    try {
o16.push("\\u");
}catch(e){}
                    try {
o16.push(String.fromCharCode(o14.charCodeAt((o19 >> 12) & 0xf)));
}catch(e){}
                    try {
o16.push(String.fromCharCode(o14.charCodeAt((o19 >> 8) & 0xf)));
}catch(e){}
                    try {
o16.push(String.fromCharCode(o14.charCodeAt((o19 >> 4) & 0xf)));
}catch(e){}
                    try {
o16.push(String.fromCharCode(o14.charCodeAt((o19 >> 0) & 0xf)));
}catch(e){}
                }
                else {
                    try {
if (o17 < 0)
                        try {
o17 = o18;
}catch(e){}
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
if (o17 >= 0)
                try {
o16.push(o1.substring(o17, o1.length));
}catch(e){}
}catch(e){}
            try {
o16.push("\"");
}catch(e){}
        } } catch(e) {}try { {
o4.o5(o31 === true, "sym !== true");
} } catch(e) {}catch(o421){}
