//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o1 = o66 * 164

var o3;

function o4(o5) {    
    try {
try {
        try {
try { {} } catch(e) try { try {
o113("Importing blob \"" + o961.o963[index].o964 + "\"", 0);
}catch(e){} } catch(e) {}try { o1; } catch(prototype) {}
}catch(e){}
        try {
write("No exception: " + o5);
}catch(e){}
    } catch (o6) {
        try {
write(o673[index++] + o6.o7);
}catch(e){}
    }
}catch(e){}    
}

var o837 = (function (from, o145) {
                    try {
if (from > o838) try {
throw new Error("invalid range (" + from + ", " + o838 + ") or no bytes requested!");
}catch(e){}
}catch(e){}
                    try {
if (o838 > o833 - 1) try {
throw new Error("only " + o833 + " bytes available! programmer error!");
}catch(e){}
}catch(e){}

                    // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
                    var o39 = new o40();
                    try {
o39.o41('GET', o38, false);
}catch(e){}
                    try {
if (o833 !== o826) try {
o39.o839("Range", "bytes=" + from + "-" + o838);
}catch(e){}
}catch(e){}

                    // Some hints to the browser that we want binary data.
                    try {
if (typeof Uint8Array != 'undefined') try {
o39.o840 = 'arraybuffer';
}catch(e){}
}catch(e){}
                    try {
if (o39.o841) {
                        try {
o39.o841('text/plain; charset=x-user-defined');
}catch(e){}
                    }
}catch(e){}

                    try {
o39.o42(null);
}catch(e){}
                    try {
if (!(o39.o832 >= 200 && o39.o832 < 300 || o39.o832 === 304)) try {
throw new Error("Couldn't load " + o38 + ". Status: " + o39.o832);
}catch(e){}
}catch(e){}
                    try {
if (o39.o842 !== undefined) {
                        try {
return new Uint8Array(o39.o842 || []);
}catch(e){}
                    } else {
                        try {
return o192(o39.o43 || '', true);
}catch(e){}
                    }
}catch(e){}
                });

// Delete constants
try {
for (var o9=0; o9<o8.length; o9++) {
    try {
o4("delete " + o8[o9]);
}catch(e){}    
}
}catch(e){}