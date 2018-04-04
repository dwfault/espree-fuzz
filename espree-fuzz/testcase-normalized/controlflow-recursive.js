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

function o0(o1) {
    o2.o3("console").o4 = o1 + "ms";
    if (o5.o6) {
        o6.o7(o1);
    }
}

var o8 = new Date();

// The Computer Language Shootout
// http://shootout.alioth.debian.org/
// contributed by Isaac Gouy

function o10(o11,o12){
   if (o11==0) { return o12+1; }
   if (o12==0) { return o10(o11-1,1); }
   return o10(o11-1, o10(o11,o12-1) );
}

function o13(o12) {
    if (o12 < 2){ return 1; }
    return o13(o12-2) + o13(o12-1);
}

function o14(o15,o16,o17) {
    if (o16 >= o15) return o17;
    return o14(o14(o15-1,o16,o17), o14(o16-1,o17,o15), o14(o17-1,o15,o16));
}

var o18 = 0;

for ( var o19 = 3; o19 <= 5; o19++ ) {
    o18 += o10(3,o19);
    o18 += o13(17.0+o19);
    o18 += o14(3*o19+3,2*o19+2,o19+1);
}

var o20 = 57775;
if (o18 != o20)
    throw "ERROR: bad result: expected " + o20 + " but got " + o18;



var o21 = new Date() - o8;

o22.o23("### TIME:", o21, "ms");