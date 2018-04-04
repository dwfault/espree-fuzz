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

/* The Great Computer Language Shootout
   http://shootout.alioth.debian.org/
   contributed by Isaac Gouy */

function o10(o11) {
   var o12 = 0;
   var o13 = Array(o11);
   var o15 = Array(o11);
   var o16 = Array(o11);
   var o17 = Array(o11);
   var o18 = 0;
   var o19 = o11 - 1;

   for (var o20 = 0; o20 < o11; o20++) o15[o20] = o20;
   var o21 = o11;

   while (true) {
      // write-out the first 30 permutations
      if (o12 < 30){
         var o22 = "";
         for(var o20=0; o20<o11; o20++) o22 += (o15[o20]+1).toString();
         o12++;
      }

      while (o21 != 1) { o16[o21 - 1] = o21; o21--; }
      if (!(o15[0] == 0 || o15[o19] == o19)) {
         for (var o20 = 0; o20 < o11; o20++) o13[o20] = o15[o20];

         var o24 = 0;
         var o25;

         while (!((o25 = o13[0]) == 0)) {
            var o26 = (o25 + 1) >> 1;
            for (var o20 = 0; o20 < o26; o20++) {
               var o27 = o13[o20]; o13[o20] = o13[o25 - o20]; o13[o25 - o20] = o27;
            }
            o24++;
         }

         if (o24 > o18) {
            o18 = o24;
            for (var o20 = 0; o20 < o11; o20++) o17[o20] = o15[o20];
         }
      }

      while (true) {
         if (o21 == o11) return o18;
         var o28 = o15[0];
         var o20 = 0;
         while (o20 < o21) {
            var o29 = o20 + 1;
            o15[o20] = o15[o29];
            o20 = o29;
         }
         o15[o21] = o28;

         o16[o21] = o16[o21] - 1;
         if (o16[o21] > 0) break;
         o21++;
      }
   }
}

var o11 = 8;
var o30 = o10(o11);

var o31 = 22;
if (o30 != o31)
    throw "ERROR: bad result: expected " + o31 + " but got " + o30;



var o32 = new Date() - o8;

o33.o34("### TIME:", o32, "ms");