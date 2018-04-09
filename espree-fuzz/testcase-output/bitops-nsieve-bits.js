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

function o9(o10,o11) {
  var o12 = o10.toString();
  while (o12.length < o11) o12 = ' ' + o12;
  return o12;
}

function o13(o14, o10) {
  var o15, o16 = 0, o17 = 10000<<o10, o18 = o17+31>>5;

  for (o15=0; o15<o18; o15++) o14[o15] = 0xffffffff;

  for (o15=2; o15<o17; o15++)
    if (o14[o15>>5] & 1<<(o15&31)) {
      for (var o19=o15+o15; o19<o17; o19+=o15)
        o14[o19>>5] &= ~(1<<(o19&31));
      o16++;
    }
}

function o20() {
    for (var o15 = 4; o15 <= 4; o15++) {
        var o14 = new Array((10000<<o15)+31>>5);
        o13(o14, o15);
    }
    return o14;
}

var o21 = o20();

var o22 = 0;
for (var o15 = 0; o15 < o21.length; ++o15)
    o22 += o21[o15];

var o23 = -1286749544853;
if (o22 != o23)
    throw "ERROR: bad result: expected " + o23 + " but got " + o22;



var o24 = new Date() - o8;

o25.o26("### TIME:", o24, "ms");