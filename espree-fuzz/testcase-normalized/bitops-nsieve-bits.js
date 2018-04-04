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

// The Great Computer Language Shootout
//  http://shootout.alioth.debian.org
//
//  Contributed by Ian Osgood

function o10(o11,o12) {
  var o13 = o11.toString();
  while (o13.length < o12) o13 = ' ' + o13;
  return o13;
}

function o16(o17, o11) {
  var o18, o19 = 0, o20 = 10000<<o11, o21 = o20+31>>5;

  for (o18=0; o18<o21; o18++) o17[o18] = 0xffffffff;

  for (o18=2; o18<o20; o18++)
    if (o17[o18>>5] & 1<<(o18&31)) {
      for (var o22=o18+o18; o22<o20; o22+=o18)
        o17[o22>>5] &= ~(1<<(o22&31));
      o19++;
    }
}

function o23() {
    for (var o18 = 4; o18 <= 4; o18++) {
        var o17 = new Array((10000<<o18)+31>>5);
        o16(o17, o18);
    }
    return o17;
}

var o25 = o23();

var o26 = 0;
for (var o18 = 0; o18 < o25.length; ++o18)
    o26 += o25[o18];

var o27 = -1286749544853;
if (o26 != o27)
    throw "ERROR: bad result: expected " + o27 + " but got " + o26;



var o28 = new Date() - o8;

o29.o30("### TIME:", o28, "ms");