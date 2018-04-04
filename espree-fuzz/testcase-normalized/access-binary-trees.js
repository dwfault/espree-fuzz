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

function o10(o11,o12,o13){
   this.o11 = o11;
   this.o12 = o12;
   this.o13 = o13;
}

o10.prototype.o15 = function(){
   if (this.o11==null) return this.o13;
   else return this.o13 + this.o11.o15() - this.o12.o15();
}

function o16(o13,o17){
   if (o17>0){
      return new o10(
          o16(2*o13-1, o17-1)
         ,o16(2*o13, o17-1)
         ,o13
      );
   }
   else {
      return new o10(null,null,o13);
   }
}

var o18 = 0;

for ( var o19 = 4; o19 <= 7; o19 += 1 ) {
    var o20 = 4;
    var o21 = Math.o23(o20 + 2, o19);
    var o24 = o21 + 1;
    
    var o25 = o16(0,o24).o15();
    
    var o26 = o16(0,o21);
    for (var o17=o20; o17<=o21; o17+=2){
        var o27 = 1 << (o21 - o17 + o20);

        o25 = 0;
        for (var o28=1; o28<=o27; o28++){
            o25 += o16(o28,o17).o15();
            o25 += o16(-o28,o17).o15();
        }
    }

    o18 += o26.o15();
}

var o29 = -4;
if (o18 != o29)
    throw "ERROR: bad result: expected " + o29 + " but got " + o18;

var o30 = new Date() - o8;

o31.o32("### TIME:", o30, "ms");