//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Test throw from dynamic script.
//

function o0(o1)
{
    try {
if (this.e)
    try { try {
if ((o1087 | 0) == 0) {
                                                try {
o1126 = 0
}catch(e){}
                                            } else {
                                                try {
if (o1123 >>> 0 > 16777215) {
                                                    try {
o1126 = 31;
}catch(e){}
                                                    try {
break
}catch(e){}
                                                }
}catch(e){}
                                                try {
o1088 = (o1087 + 1048320 | 0) >>> 16 & 8;
}catch(e){}
                                                try {
o1101 = o1087 << o1088;
}catch(e){}
                                                try {
o1094 = (o1101 + 520192 | 0) >>> 16 & 4;
}catch(e){}
                                                try {
o1092 = o1101 << o1094;
}catch(e){}
                                                try {
o1101 = (o1092 + 245760 | 0) >>> 16 & 2;
}catch(e){}
                                                try {
o1090 = 14 - (o1094 | o1088 | o1101) + (o1092 << o1101 >>> 15) | 0;
}catch(e){}
                                                try {
o1126 = o1123 >>> (o1090 + 7 | 0) & 1 | o1090 << 1
}catch(e){}
                                            }
}catch(e){} } catch(e) {}
    else
    {
        try {
o4(o1);
}catch(e){}
    }
}catch(e){}
}

function o5()
{
    try {
try {
        try {
(function () {
            var o6 = new Function("function foo(){ throw new Error('This is my error'); } foo();");
            try {
o6();
}catch(e){}
        })(o421.o368);
}catch(e){}
    } catch(e) {
        try {
o600(o8(o7.o9));
}catch(e){}
    }
}catch(e){}
}

try {
if ({length: 4294967420, 4294967400: 4294967400, 4294967401: 4294967401, 4294967402: 4294967402, 4294967403: 4294967403, 4294967404: 4294967404}) {
    try {
this.o2.o10("TrimStackTracePath.js");
}catch(e){}
}
}catch(e){}

try {
o5(Object.defineProperty(Object.prototype, 1, {
                    get: function () { try {
return o148;
}catch(e){} },
                    set: function(o72) { try {
o148 = o72 + 300;
}catch(e){} },
                    configurable: true
                }));
}catch(e){}