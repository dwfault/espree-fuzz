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

// Copyright (c) 2004 by Arthur Langereis (arthur_ext at domain xfinitegames, tld com)


var o9 = 0;

// 1 op = 2 assigns, 16 compare/branches, 8 ANDs, (0-8) ADDs, 8 SHLs
// O(n)
function o10(o11) {
var o12 = 1, o13 = 0;
while(o12<0x100) {
if(o11 & o12) o13++;
o12 <<= 1;
}
return o13;
}

function o14(o15) {
var o16, o17, o18;
var o19 = 0;
for(var o16=0; o16<350; o16++)
for(var o17=0; o17<256; o17++) o19 += o15(o17);
return o19;
}

o9 = o14(o10);

var o20 = 358400;
if (o9 != o20)
    throw "ERROR: bad result: expected " + o20 + " but got " + o9;



var o21 = new Date() - o8;

o22.o23("### TIME:", o21, "ms");