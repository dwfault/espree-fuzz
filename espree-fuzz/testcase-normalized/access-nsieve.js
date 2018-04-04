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
// http://shootout.alioth.debian.org/
//
// modified by Isaac Gouy

function o10(o11,o12){
   var o13 = o11.toString();
   var o15 = o12 - o13.length;
   if (o15>0){
      for (var o17=1; o17<=o15; o17++) o13 = " " + o13;
   }
   return o13;
}

function o18(o19, o20){
   var o17, o21, o22;

   for (o17=2; o17<=o19; o17++) { o20[o17] = true; }
   o22 = 0;

   for (o17=2; o17<=o19; o17++){
      if (o20[o17]) {
         for (o21=o17+o17; o21<=o19; o21+=o17) o20[o21] = false;
         o22++;
      }
   }
   return o22;
}

function o23() {
    var o24 = 0;
    for (var o17 = 1; o17 <= 3; o17++ ) {
        var o19 = (1<<o17)*10000;
        var flags = Array(o19+1);
        o24 += o18(o19, flags);
    }
    return o24;
}

var o27 = o23();

var o28 = 14302;
if (o27 != o28)
    throw "ERROR: bad result: expected " + o28 + " but got " + o27;




var o29 = new Date() - o8;

o30.o31("### TIME:", o29, "ms");