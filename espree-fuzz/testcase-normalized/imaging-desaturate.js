/*
 Copyright (C) 2007 Apple Inc.  All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:
 1. Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.

 THIS SOFTWARE IS PROVIDED BY APPLE COMPUTER, INC. ``AS IS'' AND ANY
 EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE COMPUTER, INC. OR
 CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 
*/

if(typeof(o0) === "undefined")
{
    var o0 = {
        o1: print
    }
}

function o3(o4) {
    o5.o6("console").o7 = o4 + "ms";
    if (o8.o9) {
        o9.o10(o4);
    }
}


var o12 = 400, o13 = 267;


var o14 = new Date();

/*
 * Pixastic Lib - Desaturation filter - v0.1.1
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt] (MPL 1.1)
 */

var o16 = {};
o16.o17 = {};
o16.o17.o18 = {
    o19 : function(o20) {
        var o21 = !!(o20.o22.o23 && o20.o22.o23 != "false");
        var o24 = o20.o24;
        var o25 = o20.o22.o25;
        var o26 = o25.o12;
        var o27 = o25.o13;

        var o28 = o26*o27;
        var o29 = o28*4, o30, o31;

        if (o21) {
            while (o28--) 
                o24[o29-=4] = o24[o30=o29+1] = o24[o31=o29+2] = (o24[o29]+o24[o30]+o24[o31])/3
        } else {
            while (o28--)
                o24[o29-=4] = o24[o30=o29+1] = o24[o31=o29+2] = (o24[o29]*0.3 + o24[o30]*0.59 + o24[o31]*0.11);
        }
        return true;
    }
}

var o20 = {
    o22: {
        o25: { o12: o12, o13: o13},
    },
    o24: o11
}

//XXX improve dataset rather than loop
for (var o32 = 0; o32 < 200; o32++)
    o16.o17.o18.o19(o20);

var o33 = new Date() - o14;

o0.o1("### TIME:", o33, "ms");