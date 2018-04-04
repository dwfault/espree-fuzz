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

var o10 = 3.141592653589793;
var o11 = 4 * o10 * o10;
var o12 = 365.24;

function o13(o14,o15,o16,o17,o18,o19,o20){
   this.o14 = o14;
   this.o15 = o15;
   this.o16 = o16;
   this.o17 = o17;
   this.o18 = o18;
   this.o19 = o19;
   this.o20 = o20;
}

o13.prototype.o22 = function(o23,o24,o25) {
   this.o17 = -o23 / o11;
   this.o18 = -o24 / o11;
   this.o19 = -o25 / o11;
   return this;
}

function o26(){
   return new o13(
      4.84143144246472090e+00,
      -1.16032004402742839e+00,
      -1.03622044471123109e-01,
      1.66007664274403694e-03 * o12,
      7.69901118419740425e-03 * o12,
      -6.90460016972063023e-05 * o12,
      9.54791938424326609e-04 * o11
   );
}

function o27(){
   return new o13(
      8.34336671824457987e+00,
      4.12479856412430479e+00,
      -4.03523417114321381e-01,
      -2.76742510726862411e-03 * o12,
      4.99852801234917238e-03 * o12,
      2.30417297573763929e-05 * o12,
      2.85885980666130812e-04 * o11
   );
}

function o28(){
   return new o13(
      1.28943695621391310e+01,
      -1.51111514016986312e+01,
      -2.23307578892655734e-01,
      2.96460137564761618e-03 * o12,
      2.37847173959480950e-03 * o12,
      -2.96589568540237556e-05 * o12,
      4.36624404335156298e-05 * o11
   );
}

function o29(){
   return new o13(
      1.53796971148509165e+01,
      -2.59193146099879641e+01,
      1.79258772950371181e-01,
      2.68067772490389322e-03 * o12,
      1.62824170038242295e-03 * o12,
      -9.51592254519715870e-05 * o12,
      5.15138902046611451e-05 * o11
   );
}

function o30(){
   return new o13(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, o11);
}


function o31(o32){
   this.o32 = o32;
   var o23 = 0.0;
   var o24 = 0.0;
   var o25 = 0.0;
   var o33 = this.o32.length;
   for (var o35=0; o35<o33; o35++){
      var o36 = this.o32[o35];
      var o37 = o36.o20;
      o23 += o36.o17 * o37;
      o24 += o36.o18 * o37;
      o25 += o36.o19 * o37;
   }
   this.o32[0].o22(o23,o24,o25);
}

o31.prototype.o38 = function(o39){
   var o40, o41, o42, o43, o44;
   var o33 = this.o32.length;

   for (var o35=0; o35<o33; o35++) {
      var o45 = this.o32[o35];
      for (var o46=o35+1; o46<o33; o46++) {
         var o47 = this.o32[o46];
         o40 = o45.o14 - o47.o14;
         o41 = o45.o15 - o47.o15;
         o42 = o45.o16 - o47.o16;

         o43 = Math.sqrt(o40*o40 + o41*o41 + o42*o42);
         o44 = o39 / (o43 * o43 * o43);

         o45.o17 -= o40 * o47.o20 * o44;
         o45.o18 -= o41 * o47.o20 * o44;
         o45.o19 -= o42 * o47.o20 * o44;

         o47.o17 += o40 * o45.o20 * o44;
         o47.o18 += o41 * o45.o20 * o44;
         o47.o19 += o42 * o45.o20 * o44;
      }
   }

   for (var o35=0; o35<o33; o35++) {
      var o50 = this.o32[o35];
      o50.o14 += o39 * o50.o17;
      o50.o15 += o39 * o50.o18;
      o50.o16 += o39 * o50.o19;
   }
}

o31.prototype.o51 = function(){
   var o40, o41, o42, o43;
   var o52 = 0.0;
   var o33 = this.o32.length;

   for (var o35=0; o35<o33; o35++) {
      var o45 = this.o32[o35];

      o52 += 0.5 * o45.o20 *
         ( o45.o17 * o45.o17
         + o45.o18 * o45.o18
         + o45.o19 * o45.o19 );

      for (var o46=o35+1; o46<o33; o46++) {
         var o47 = this.o32[o46];
         o40 = o45.o14 - o47.o14;
         o41 = o45.o15 - o47.o15;
         o42 = o45.o16 - o47.o16;

         o43 = Math.sqrt(o40*o40 + o41*o41 + o42*o42);
         o52 -= (o45.o20 * o47.o20) / o43;
      }
   }
   return o52;
}

var o53 = 0;

for ( var o54 = 3; o54 <= 24; o54 *= 2 ) {
    (function(){
        var o32 = new o31( Array(
           o30(),o26(),o27(),o28(),o29()
        ));
        var o56 = o54 * 100;
        
        o53 += o32.o51();
        for (var o35=0; o35<o56; o35++){
            o32.o38(0.01);
        }
        o53 += o32.o51();
    })();
}

var o57 = -1.3524862408537381;
if (o53 != o57)
    throw "ERROR: bad result: expected " + o57 + " but got " + o53;



var o58 = new Date() - o8;

o59.o60("### TIME:", o58, "ms");