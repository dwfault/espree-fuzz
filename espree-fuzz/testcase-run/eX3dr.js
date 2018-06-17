//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = 10;
function o1() {

    const defineProperty = 5;
    {
        var o823 = (function (from, o824) {
                    try {
if (from > o824) try {
throw new Error("invalid range (" + from + ", " + o824 + ") or no bytes requested!");
}catch(e){}
}catch(e){}
                    try {
if (o824 > o819 - 1) try {
throw new Error("only " + o819 + " bytes available! programmer error!");
}catch(e){}
}catch(e){}

                    // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
                    var o39 = new o40();
                    try {
o39.o41('GET', o38, false);
}catch(e){}
                    try {
if (o819 !== o812) try {
o39.o825("Range", "bytes=" + from + "-" + o824);
}catch(e){}
}catch(e){}

                    // Some hints to the browser that we want binary data.
                    try {
if (typeof Uint8Array != 'undefined') try {
o39.o826 = 'arraybuffer';
}catch(e){}
}catch(e){}
                    try {
if (o39.o827) {
                        try {
o39.o827('text/plain; charset=x-user-defined');
}catch(e){}
                    }
}catch(e){}

                    try {
o39.o42(null);
}catch(e){}
                    try {
if (!(o39.o818 >= 200 && o39.o818 < 300 || o39.o818 === 304)) try {
throw new Error("Couldn't load " + o38 + ". Status: " + o39.o818);
}catch(e){}
}catch(e){}
                    try {
if (o39.o828 !== undefined) {
                        try {
return new Uint8Array(o39.o828 || []);
}catch(e){}
                    } else {
                        try {
return o192(o39.o43 || '', true);
}catch(e){}
                    }
}catch(e){}
                });
        try {
o2.o3(o0);
}catch(e){}
        {
            const o0 = "SVGFEMergeElement";
            try {
o2.o3(o0);
}catch(e){}
        }
        try {
o2.o3(o0);
}catch(e){}
        {
           const o0 = 222222;
            try {
o2.o3(o0);
}catch(e){}
        }
        try {
o2.o3(o0);
}catch(e){}
    }
    try {
o2.o3(o0);
}catch(e){}
}try {
;
}catch(e){}
try {
o1(!o154);
}catch(e){}
try {
o2.o3(o0);
}catch(e){}
