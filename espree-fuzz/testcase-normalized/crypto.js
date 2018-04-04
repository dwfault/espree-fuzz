////////////////////////////////////////////////////////////////////////////////
// base.js
////////////////////////////////////////////////////////////////////////////////

// Copyright 2013 the V8 project authors. All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
//       copyright notice, this list of conditions and the following
//       disclaimer in the documentation and/or other materials provided
//       with the distribution.
//     * Neither the name of Google Inc. nor the names of its
//       contributors may be used to endorse or promote products derived
//       from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

if(typeof(o0) === "undefined")
{
    var o0 = {
        o1: print
    }
}

// Performance.now is used in latency benchmarks, the fallback is Date.now.
var o3 = o3 || {};
o3.o4 = (function() {
  return o3.o4       ||
         o3.o5    ||
         o3.o6     ||
         o3.o7      ||
         o3.o8 ||
         Date.o4;
})();

// Simple framework for running the benchmark suites and
// computing a score based on the timing measurements.


// A benchmark has a name (string) and a function that will be run to
// do the performance measurement. The optional setup and tearDown
// arguments are functions that will be invoked before and after
// running the benchmark, but the running time of these functions will
// not be accounted for in the benchmark score.
function o10(name, o12, o13, o14, 
                   o15, o16, o17, o18, o19) {
  this.name = name;
  this.o12 = o12;
  this.o13 = o13;
  this.o14 = o14;
  this.o15 = o15;
  this.o20 = o16 ? o16 : function() { };
  this.o21 = o17 ? o17 : function() { };
  this.o18 = o18 ? o18 : null; 
  this.o19 = o19 ? o19 : 32;
}


// Benchmark results hold the benchmark and the measured time used to
// run the benchmark. The benchmark score is computed later once a
// full benchmark suite has run to completion. If latency is set to 0
// then there is no latency score for this benchmark.
function o22(o23, o24, o25) {
  this.o23 = o23;
  this.o24 = o24;
  this.o25 = o25;
}


// Automatically convert results to numbers. Used by the geometric
// mean computation.
o22.prototype.valueOf = function() {
  return this.o24;
}


// Suites of benchmarks consist of a name and the set of benchmarks in
// addition to the reference timing that the final score will be based
// on. This way, all scores are relative to a reference run and higher
// scores implies better performance.
function o28(name, o29, o30) {
  this.name = name;
  this.o29 = o29;
  this.o30 = o30;
  o28.o31.push(this);
}


// Keep track of all declared benchmark suites.
o28.o31 = [];

// Scores are not comparable across versions. Bump the version if
// you're making changes that will affect that scores, e.g. if you add
// a new benchmark or change an existing one.
o28.o33 = '9';


// Defines global benchsuite running mode that overrides benchmark suite 
// behavior. Intended to be set by the benchmark driver. Undefined 
// values here allow a benchmark to define behaviour itself.
o28.o34 = {
  o12: undefined,
  o13: undefined
};


// Override the alert function to throw an exception instead.
o36 = function(o37) {
  throw "Alert called with argument: " + o37;
};


// To make the benchmark results predictable, we replace Math.random
// with a 100% deterministic alternative.
o28.o38 = function() {
  Math.random = (function() {
    var o41 = 49734321;
    return function() {
      // Robert Jenkins' 32 bit integer hash function.
      o41 = ((o41 + 0x7ed55d16) + (o41 << 12))  & 0xffffffff;
      o41 = ((o41 ^ 0xc761c23c) ^ (o41 >>> 19)) & 0xffffffff;
      o41 = ((o41 + 0x165667b1) + (o41 << 5))   & 0xffffffff;
      o41 = ((o41 + 0xd3a2646c) ^ (o41 << 9))   & 0xffffffff;
      o41 = ((o41 + 0xfd7046c5) + (o41 << 3))   & 0xffffffff;
      o41 = ((o41 ^ 0xb55a4f09) ^ (o41 >>> 16)) & 0xffffffff;
      return (o41 & 0xfffffff) / 0x10000000;
    };
  })();
}


// Runs all registered benchmark suites and optionally yields between
// each individual benchmark to avoid running for too long in the
// context of browsers. Once done, the final score is reported to the
// runner.
o28.o42 = function(o43, o44) {
  o44 = typeof o44 === 'undefined' ? [] : o44;
  var o45 = null;
  var o31 = o28.o31;
  var length = o31.length;
  o28.o47 = [];
  var index = 0;
  function o49() {
    while (o45 || index < length) {
      if (o45) {
        o45 = o45();
      } else {
        var o50 = o31[index++];
        if (o43.o51) o43.o51(o50.name);
        if (o44.indexOf(o50.name) > -1) {
          o50.o53(o43);
        } else {
          o45 = o50.o49(o43);
        }
      }
      if (o45 && typeof o54 != 'undefined' && o54.o55) {
        o54.o55(o49, 25);
        return;
      }
    }

    // show final result
    if (o43.o56) {
      var o57 = o28.o58(o28.o47);
      var o59 = o28.o60(100 * o57);
      o43.o56(o59);
    }
  }
  o49();
}


// Counts the total number of registered benchmarks. Useful for
// showing progress as a percentage.
o28.o61 = function() {
  var o62 = 0;
  var o31 = o28.o31;
  for (var o63 = 0; o63 < o31.length; o63++) {
    o62 += o31[o63].o30.length;
  }
  return o62;
}


// Computes the geometric mean of a set of numbers.
o28.o58 = function(o64) {
  var o65 = 0;
  for (var o63 = 0; o63 < o64.length; o63++) {
    o65 += Math.o65(o64[o63]);
  }
  return Math.o66(Math.o67, o65 / o64.length);
}


// Computes the geometric mean of a set of throughput time measurements.
o28.o68 = function(o69) {
  var o65 = 0;
  for (var o63 = 0; o63 < o69.length; o63++) {
    o65 += Math.o65(o69[o63].o24);
  }
  return Math.o66(Math.o67, o65 / o69.length);
}


// Computes the geometric mean of a set of rms measurements.
o28.o70 = function(o69) {
  var o65 = 0;
  var o71 = false;
  for (var o63 = 0; o63 < o69.length; o63++) {
    if (o69[o63].o25 != 0) {
      o65 += Math.o65(o69[o63].o25);
      o71 = true;
    }
  }
  if (o71) {
    return Math.o66(Math.o67, o65 / o69.length);
  } else {
    return 0;
  }
}


// Converts a score value to a string with at least three significant
// digits.
o28.o60 = function(value) {
  if (value > 100) {
    return value.toFixed(0);
  } else {
    return value.toPrecision(3);
  }
}

// Notifies the runner that we're done running a single benchmark in
// the benchmark suite. This can be useful to report progress.
o28.prototype.o75 = function(o62) {
  this.o76.push(o62);
  if (this.o43.o75) this.o43.o75(o62.o23.name);
}


// Notifies the runner that we're done with running a suite and that
// we have a result which can be reported to the user if needed.
o28.prototype.o77 = function() {
  var o78 = o28.o68(this.o76);
  var o57 = this.o29[0] / o78;
  o28.o47.push(o57);
  if (this.o43.o77) {
    var o59 = o28.o60(100 * o57);
    this.o43.o77(this.name, o59);
  }
  if (this.o29.length == 2) {
    var o79 = o28.o70(this.o76);
    if (o79 != 0) {
      var o80 = this.o29[1] / o79;
      o28.o47.push(o80);
      if (this.o43.o77) {
        var o81 = o28.o60(100 * o80)
        this.o43.o77(this.name + "Latency", o81);
      }
    }
  }
}


o28.prototype.o53 = function(o43) {
  o28.o47.push(1);  // push default reference score.
  if (o43.o77) {
    o43.o77(this.name, "Skipped");
  }
}


// Notifies the runner that running a benchmark resulted in an error.
o28.prototype.o82 = function(o83) {
  if (this.o43.o82) {
    this.o43.o82(this.name, o83);
  }
  if (this.o43.o75) {
    this.o43.o75(this.name);
  }
}


// Runs a single benchmark for at least a second and computes the
// average time it takes to run a single iteration.
o28.prototype.o84 = function(o23, o85) {
  var o34 = o28.o34;
  var o12 = o34.o12 !== undefined 
                 ? o34.o12 
                 : o23.o12;
  var o13 = o34.o13 !== undefined 
                        ? o34.o13 
                        : o23.o13;

  function o86(o85) {
    var o87 = 0;
    var o88 = new Date();
  
  // Run either for 1 second or for the number of iterations specified
  // by minIterations, depending on the config flag doDeterministic.
    for (var o63 = 0; (o13 ? 
      o63<o23.o14 : o87 < 1000); o63++) {
      o23.o15();
      o87 = new Date() - o88;
    }
    if (o85 != null) {
      o85.o89 += o63;
      o85.o87 += o87;
    }
  }

  // Sets up data in order to skip or not the warmup phase.
  if (!o12 && o85 == null) {
    o85 = { o89: 0, o87: 0 };
  }

  if (o85 == null) {
    o86(null);
    return { o89: 0, o87: 0 };
  } else {
    o86(o85);
    // If we've run too few iterations, we continue for another second.
    if (o85.o89 < o23.o19) return o85;
    var o90 = (o85.o87 * 1000) / o85.o89;
    var o91 = (o23.o18 != null) ? o23.o18() : 0;
    this.o75(new o22(o23, o90, o91));
    return null;
  }
}


// This function starts running a suite, but stops between each
// individual benchmark in the suite and returns a continuation
// function which can be invoked to run the next benchmark. Once the
// last benchmark has been executed, null is returned.
o28.prototype.o49 = function(o43) {
  o28.o38();
  this.o76 = [];
  this.o43 = o43;
  var length = this.o30.length;
  var index = 0;
  var o50 = this;
  var o85;

  // Run the setup, the actual benchmark, and the tear down in three
  // separate steps to allow the framework to yield between any of the
  // steps.

  function o92() {
    if (index < length) {
      try {
        o50.o30[index].o20();
      } catch (o93) {
        o50.o82(o93);
        return null;
      }
      return o94;
    }
    o50.o77();
    return null;
  }

  function o94() {
    try {
      o85 = o50.o84(o50.o30[index], o85);
    } catch (o93) {
      o50.o82(o93);
      return null;
    }
    // If data is null, we're done with this benchmark.
    return (o85 == null) ? o95 : o94();
  }

  function o95() {
    try {
      o50.o30[index++].o21();
    } catch (o93) {
      o50.o82(o93);
      return null;
    }
    return o92;
  }

  // Start out running the setup.
  return o92();
}

/////////////////////////////////////////////////////////////
// crypto.js
/////////////////////////////////////////////////////////////

/*
 * Copyright (c) 2003-2005  Tom Wu
 * All Rights Reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS-IS" AND WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS, IMPLIED OR OTHERWISE, INCLUDING WITHOUT LIMITATION, ANY
 * WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
 *
 * IN NO EVENT SHALL TOM WU BE LIABLE FOR ANY SPECIAL, INCIDENTAL,
 * INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY DAMAGES WHATSOEVER
 * RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER OR NOT ADVISED OF
 * THE POSSIBILITY OF DAMAGE, AND ON ANY THEORY OF LIABILITY, ARISING OUT
 * OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * In addition, the following condition applies:
 *
 * All redistributions must retain an intact copy of this copyright notice
 * and disclaimer.
 */


// The code has been adapted for use as a benchmark by Google.
var o96 = new o28('Crypto', [266181], [
  new o10("Encrypt", true, false, 3900, o97),
  new o10("Decrypt", true, false, 220, o98)
]);


// Basic JavaScript BN library - subset useful for RSA encryption.

// Bits per digit
var o99;
var o100;
var o101;
var o102;

var o103;
var o104;
var o105;
var o106;

// JavaScript engine analysis
var o107 = 0xdeadbeefcafe;
var o108 = ((o107&0xffffff)==0xefcafe);

// (public) Constructor
function o109(o110,o111,o112) {
  this.o113 = new Array();
  if(o110 != null)
    if("number" == typeof o110) this.o115(o110,o111,o112);
    else if(o111 == null && "string" != typeof o110) this.o116(o110,256);
    else this.o116(o110,o111);
}

// return new, unset BigInteger
function o117() { return new o109(null); }

// am: Compute w_j += (x*this_i), propagate carries,
// c is initial carry, returns final carry.
// c < 3*dvalue, x < 2*dvalue, this_i < dvalue
// We need to select the fastest one that works in this environment.

// am1: use a single mult and divide to get the high bits,
// max digit bits should be 26 because
// max internal value = 2*dvalue^2-2*dvalue (< 2^53)
function o118(o63,o119,o120,o121,o112,o122) {
  var o123 = this.o113;
  var o124    = o120.o113;
  while(--o122 >= 0) {
    var o125 = o119*o123[o63++]+o124[o121]+o112;
    o112 = Math.floor(o125/0x4000000);
    o124[o121++] = o125&0x3ffffff;
  }
  return o112;
}

// am2 avoids a big mult-and-extract completely.
// Max digit bits should be <= 30 because we do bitwise ops
// on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
function o127(o63,o119,o120,o121,o112,o122) {
  var o123 = this.o113;
  var o124    = o120.o113;
  var o128 = o119&0x7fff, o129 = o119>>15;
  while(--o122 >= 0) {
    var o130 = o123[o63]&0x7fff;
    var o131 = o123[o63++]>>15;
    var o132 = o129*o130+o131*o128;
    o130 = o128*o130+((o132&0x7fff)<<15)+o124[o121]+(o112&0x3fffffff);
    o112 = (o130>>>30)+(o132>>>15)+o129*o131+(o112>>>30);
    o124[o121++] = o130&0x3fffffff;
  }
  return o112;
}

// Alternately, set max digit bits to 28 since some
// browsers slow down when dealing with 32-bit numbers.
function o133(o63,o119,o120,o121,o112,o122) {
  var o123 = this.o113;
  var o124    = o120.o113;

  var o128 = o119&0x3fff, o129 = o119>>14;
  while(--o122 >= 0) {
    var o130 = o123[o63]&0x3fff;
    var o131 = o123[o63++]>>14;
    var o132 = o129*o130+o131*o128;
    o130 = o128*o130+((o132&0x3fff)<<14)+o124[o121]+o112;
    o112 = (o130>>28)+(o132>>14)+o129*o131;
    o124[o121++] = o130&0xfffffff;
  }
  return o112;
}

// This is tailored to VMs with 2-bit tagging. It makes sure
// that all the computations stay within the 29 bits available.
function o134(o63,o119,o120,o121,o112,o122) {
  var o123 = this.o113;
  var o124    = o120.o113;

  var o128 = o119&0x1fff, o129 = o119>>13;
  while(--o122 >= 0) {
    var o130 = o123[o63]&0x1fff;
    var o131 = o123[o63++]>>13;
    var o132 = o129*o130+o131*o128;
    o130 = o128*o130+((o132&0x1fff)<<13)+o124[o121]+o112;
    o112 = (o130>>26)+(o132>>13)+o129*o131;
    o124[o121++] = o130&0x3ffffff;
  }
  return o112;
}

// am3/28 is best for SM, Rhino, but am4/26 is best for v8.
// Kestrel (Opera 9.5) gets its best result with am4/26.
// IE7 does 9% better with am3/28 than with am4/26.
// Firefox (SM) gets 10% faster with am3/28 than with am4/26.

o135 = function(o136, o137) {
  o109.prototype.o138 = o136;
  o99 = o137;

  o100 = o99;
  o101 = ((1<<o99)-1);
  o102 = (1<<o99);

  o103 = 52;
  o104 = Math.o66(2,o103);
  o105 = o103-o99;
  o106 = 2*o99-o103;
}


// Digit conversions
var o139 = "0123456789abcdefghijklmnopqrstuvwxyz";
var o140 = new Array();
var o141,o142;
o141 = "0".charCodeAt(0);
for(o142 = 0; o142 <= 9; ++o142) o140[o141++] = o142;
o141 = "a".charCodeAt(0);
for(o142 = 10; o142 < 36; ++o142) o140[o141++] = o142;
o141 = "A".charCodeAt(0);
for(o142 = 10; o142 < 36; ++o142) o140[o141++] = o142;

function o144(o122) { return o139.charAt(o122); }
function o146(o37,o63) {
  var o112 = o140[o37.charCodeAt(o63)];
  return (o112==null)?-1:o112;
}

// (protected) copy this to r
function o147(o148) {
  var o123 = this.o113;
  var o149    = o148.o113;

  for(var o63 = this.o150-1; o63 >= 0; --o63) o149[o63] = o123[o63];
  o148.o150 = this.o150;
  o148.o37 = this.o37;
}

// (protected) set from integer value x, -DV <= x < DV
function o151(o119) {
  var o123 = this.o113;
  this.o150 = 1;
  this.o37 = (o119<0)?-1:0;
  if(o119 > 0) o123[0] = o119;
  else if(o119 < -1) o123[0] = o119+o152;
  else this.o150 = 0;
}

// return bigint initialized to value
function o153(o63) { var o148 = o117(); o148.o154(o63); return o148; }

// (protected) set from string and radix
function o155(o37,o111) {
  var o123 = this.o113;
  var o156;
  if(o111 == 16) o156 = 4;
  else if(o111 == 8) o156 = 3;
  else if(o111 == 256) o156 = 8; // byte array
  else if(o111 == 2) o156 = 1;
  else if(o111 == 32) o156 = 5;
  else if(o111 == 4) o156 = 2;
  else { this.o157(o37,o111); return; }
  this.o150 = 0;
  this.o37 = 0;
  var o63 = o37.length, o158 = false, o159 = 0;
  while(--o63 >= 0) {
    var o119 = (o156==8)?o37[o63]&0xff:o146(o37,o63);
    if(o119 < 0) {
      if(o37.charAt(o63) == "-") o158 = true;
      continue;
    }
    o158 = false;
    if(o159 == 0)
      o123[this.o150++] = o119;
    else if(o159+o156 > o100) {
      o123[this.o150-1] |= (o119&((1<<(o100-o159))-1))<<o159;
      o123[this.o150++] = (o119>>(o100-o159));
    }
    else
      o123[this.o150-1] |= o119<<o159;
    o159 += o156;
    if(o159 >= o100) o159 -= o100;
  }
  if(o156 == 8 && (o37[0]&0x80) != 0) {
    this.o37 = -1;
    if(o159 > 0) o123[this.o150-1] |= ((1<<(o100-o159))-1)<<o159;
  }
  this.o160();
  if(o158) o109.o161.o162(this,this);
}

// (protected) clamp off excess high words
function o163() {
  var o123 = this.o113;
  var o112 = this.o37&o101;
  while(this.o150 > 0 && o123[this.o150-1] == o112) --this.o150;
}

// (public) return string representation in given radix
function o164(o111) {
  var o123 = this.o113;
  if(this.o37 < 0) return "-"+this.o165().toString(o111);
  var o156;
  if(o111 == 16) o156 = 4;
  else if(o111 == 8) o156 = 3;
  else if(o111 == 2) o156 = 1;
  else if(o111 == 32) o156 = 5;
  else if(o111 == 4) o156 = 2;
  else return this.o167(o111);
  var o168 = (1<<o156)-1, o169, o132 = false, o148 = "", o63 = this.o150;
  var o170 = o100-(o63*o100)%o156;
  if(o63-- > 0) {
    if(o170 < o100 && (o169 = o123[o63]>>o170) > 0) { o132 = true; o148 = o144(o169); }
    while(o63 >= 0) {
      if(o170 < o156) {
        o169 = (o123[o63]&((1<<o170)-1))<<(o156-o170);
        o169 |= o123[--o63]>>(o170+=o100-o156);
      }
      else {
        o169 = (o123[o63]>>(o170-=o156))&o168;
        if(o170 <= 0) { o170 += o100; --o63; }
      }
      if(o169 > 0) o132 = true;
      if(o132) o148 += o144(o169);
    }
  }
  return o132?o148:"0";
}

// (public) -this
function o171() { var o148 = o117(); o109.o161.o162(this,o148); return o148; }

// (public) |this|
function o172() { return (this.o37<0)?this.o165():this; }

// (public) return + if this > a, - if this < a, 0 if equal
function o173(o110) {
  var o123 = this.o113;
  var o174 = o110.o113;

  var o148 = this.o37-o110.o37;
  if(o148 != 0) return o148;
  var o63 = this.o150;
  o148 = o63-o110.o150;
  if(o148 != 0) return o148;
  while(--o63 >= 0) if((o148=o123[o63]-o174[o63]) != 0) return o148;
  return 0;
}

// returns bit length of the integer x
function o175(o119) {
  var o148 = 1, o150;
  if((o150=o119>>>16) != 0) { o119 = o150; o148 += 16; }
  if((o150=o119>>8) != 0) { o119 = o150; o148 += 8; }
  if((o150=o119>>4) != 0) { o119 = o150; o148 += 4; }
  if((o150=o119>>2) != 0) { o119 = o150; o148 += 2; }
  if((o150=o119>>1) != 0) { o119 = o150; o148 += 1; }
  return o148;
}

// (public) return the number of bits in "this"
function o176() {
  var o123 = this.o113;
  if(this.o150 <= 0) return 0;
  return o100*(this.o150-1)+o175(o123[this.o150-1]^(this.o37&o101));
}

// (protected) r = this << n*DB
function o177(o122,o148) {
  var o123 = this.o113;
  var o149 = o148.o113;
  var o63;
  for(o63 = this.o150-1; o63 >= 0; --o63) o149[o63+o122] = o123[o63];
  for(o63 = o122-1; o63 >= 0; --o63) o149[o63] = 0;
  o148.o150 = this.o150+o122;
  o148.o37 = this.o37;
}

// (protected) r = this >> n*DB
function o178(o122,o148) {
  var o123 = this.o113;
  var o149 = o148.o113;
  for(var o63 = o122; o63 < this.o150; ++o63) o149[o63-o122] = o123[o63];
  o148.o150 = Math.o179(this.o150-o122,0);
  o148.o37 = this.o37;
}

// (protected) r = this << n
function o180(o122,o148) {
  var o123 = this.o113;
  var o149 = o148.o113;
  var o181 = o122%o100;
  var o182 = o100-o181;
  var o183 = (1<<o182)-1;
  var o184 = Math.floor(o122/o100), o112 = (this.o37<<o181)&o101, o63;
  for(o63 = this.o150-1; o63 >= 0; --o63) {
    o149[o63+o184+1] = (o123[o63]>>o182)|o112;
    o112 = (o123[o63]&o183)<<o181;
  }
  for(o63 = o184-1; o63 >= 0; --o63) o149[o63] = 0;
  o149[o184] = o112;
  o148.o150 = this.o150+o184+1;
  o148.o37 = this.o37;
  o148.o160();
}

// (protected) r = this >> n
function o185(o122,o148) {
  var o123 = this.o113;
  var o149 = o148.o113;
  o148.o37 = this.o37;
  var o184 = Math.floor(o122/o100);
  if(o184 >= this.o150) { o148.o150 = 0; return; }
  var o181 = o122%o100;
  var o182 = o100-o181;
  var o183 = (1<<o181)-1;
  o149[0] = o123[o184]>>o181;
  for(var o63 = o184+1; o63 < this.o150; ++o63) {
    o149[o63-o184-1] |= (o123[o63]&o183)<<o182;
    o149[o63-o184] = o123[o63]>>o181;
  }
  if(o181 > 0) o149[this.o150-o184-1] |= (this.o37&o183)<<o182;
  o148.o150 = this.o150-o184;
  o148.o160();
}

// (protected) r = this - a
function o186(o110,o148) {
  var o123 = this.o113;
  var o149 = o148.o113;
  var o174 = o110.o113;
  var o63 = 0, o112 = 0, o132 = Math.o187(o110.o150,this.o150);
  while(o63 < o132) {
    o112 += o123[o63]-o174[o63];
    o149[o63++] = o112&o101;
    o112 >>= o100;
  }
  if(o110.o150 < this.o150) {
    o112 -= o110.o37;
    while(o63 < this.o150) {
      o112 += o123[o63];
      o149[o63++] = o112&o101;
      o112 >>= o100;
    }
    o112 += this.o37;
  }
  else {
    o112 += this.o37;
    while(o63 < o110.o150) {
      o112 -= o174[o63];
      o149[o63++] = o112&o101;
      o112 >>= o100;
    }
    o112 -= o110.o37;
  }
  o148.o37 = (o112<0)?-1:0;
  if(o112 < -1) o149[o63++] = o102+o112;
  else if(o112 > 0) o149[o63++] = o112;
  o148.o150 = o63;
  o148.o160();
}

// (protected) r = this * a, r != this,a (HAC 14.12)
// "this" should be the larger one if appropriate.
function o188(o110,o148) {
  var o123 = this.o113;
  var o149 = o148.o113;
  var o119 = this.abs(), o190 = o110.abs();
  var o191 = o190.o113;

  var o63 = o119.o150;
  o148.o150 = o63+o190.o150;
  while(--o63 >= 0) o149[o63] = 0;
  for(o63 = 0; o63 < o190.o150; ++o63) o149[o63+o119.o150] = o119.o138(0,o191[o63],o148,o63,0,o119.o150);
  o148.o37 = 0;
  o148.o160();
  if(this.o37 != o110.o37) o109.o161.o162(o148,o148);
}

// (protected) r = this^2, r != this (HAC 14.16)
function o192(o148) {
  var o119 = this.abs();
  var o193 = o119.o113;
  var o149 = o148.o113;

  var o63 = o148.o150 = 2*o119.o150;
  while(--o63 >= 0) o149[o63] = 0;
  for(o63 = 0; o63 < o119.o150-1; ++o63) {
    var o112 = o119.o138(o63,o193[o63],o148,2*o63,0,1);
    if((o149[o63+o119.o150]+=o119.o138(o63+1,2*o193[o63],o148,2*o63+1,o112,o119.o150-o63-1)) >= o102) {
      o149[o63+o119.o150] -= o102;
      o149[o63+o119.o150+1] = 1;
    }
  }
  if(o148.o150 > 0) o149[o148.o150-1] += o119.o138(o63,o193[o63],o148,2*o63,0,1);
  o148.o37 = 0;
  o148.o160();
}

// (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
// r != q, this != m.  q or r may be null.
function o194(o132,o195,o148) {
  var o196 = o132.abs();
  if(o196.o150 <= 0) return;
  var o197 = this.abs();
  if(o197.o150 < o196.o150) {
    if(o195 != null) o195.o154(0);
    if(o148 != null) this.o198(o148);
    return;
  }
  if(o148 == null) o148 = o117();
  var o190 = o117(), o199 = this.o37, o200 = o132.o37;
  var o201 = o196.o113;
  var o202 = o100-o175(o201[o196.o150-1]);      // normalize modulus
  if(o202 > 0) { o196.o203(o202,o190); o197.o203(o202,o148); }
  else { o196.o198(o190); o197.o198(o148); }
  var o204 = o190.o150;

  var o191 = o190.o113;
  var o205 = o191[o204-1];
  if(o205 == 0) return;
  var o206 = o205*(1<<o105)+((o204>1)?o191[o204-2]>>o106:0);
  var o207 = o104/o206, o208 = (1<<o105)/o206, o93 = 1<<o106;
  var o63 = o148.o150, o121 = o63-o204, o150 = (o195==null)?o117():o195;
  o190.o209(o121,o150);

  var o149 = o148.o113;
  if(o148.o210(o150) >= 0) {
    o149[o148.o150++] = 1;
    o148.o162(o150,o148);
  }
  o109.o211.o209(o204,o150);
  o150.o162(o190,o190); // "negative" y so we can replace sub with am later
  while(o190.o150 < o204) o191[o190.o150++] = 0;
  while(--o121 >= 0) {
    // Estimate quotient digit
    var o212 = (o149[--o63]==o205)?o101:Math.floor(o149[o63]*o207+(o149[o63-1]+o93)*o208);
    if((o149[o63]+=o190.o138(0,o212,o148,o121,0,o204)) < o212) {        // Try it out
      o190.o209(o121,o150);
      o148.o162(o150,o148);
      while(o149[o63] < --o212) o148.o162(o150,o148);
    }
  }
  if(o195 != null) {
    o148.o213(o204,o195);
    if(o199 != o200) o109.o161.o162(o195,o195);
  }
  o148.o150 = o204;
  o148.o160();
  if(o202 > 0) o148.o214(o202,o148);        // Denormalize remainder
  if(o199 < 0) o109.o161.o162(o148,o148);
}

// (public) this mod a
function o215(o110) {
  var o148 = o117();
  this.abs().o216(o110,null,o148);
  if(this.o37 < 0 && o148.o210(o109.o161) > 0) o110.o162(o148,o148);
  return o148;
}

// Modular reduction using "classic" algorithm
function o217(o132) { this.o132 = o132; }
function o218(o119) {
  if(o119.o37 < 0 || o119.o210(this.o132) >= 0) return o119.o219(this.o132);
  else return o119;
}
function o220(o119) { return o119; }
function o221(o119) { o119.o216(this.o132,null,o119); }
function o222(o119,o190,o148) { o119.o223(o190,o148); this.reduce(o148); }
function o225(o119,o148) { o119.o226(o148); this.reduce(o148); }

o217.prototype.o227 = o218;
o217.prototype.o228 = o220;
o217.prototype.reduce = o221;
o217.prototype.o229 = o222;
o217.prototype.o230 = o225;

// (protected) return "-1/this % 2^DB"; useful for Mont. reduction
// justification:
//         xy == 1 (mod m)
//         xy =  1+km
//   xy(2-xy) = (1+km)(1-km)
// x[y(2-xy)] = 1-k^2m^2
// x[y(2-xy)] == 1 (mod m^2)
// if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
// should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
// JS multiply "overflows" differently from C/C++, so care is needed here.
function o231() {
  var o123 = this.o113;
  if(this.o150 < 1) return 0;
  var o119 = o123[0];
  if((o119&1) == 0) return 0;
  var o190 = o119&3;          // y == 1/x mod 2^2
  o190 = (o190*(2-(o119&0xf)*o190))&0xf;    // y == 1/x mod 2^4
  o190 = (o190*(2-(o119&0xff)*o190))&0xff;  // y == 1/x mod 2^8
  o190 = (o190*(2-(((o119&0xffff)*o190)&0xffff)))&0xffff;   // y == 1/x mod 2^16
  // last step - calculate inverse mod DV directly;
  // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
  o190 = (o190*(2-o119*o190%o102))%o102;          // y == 1/x mod 2^dbits
  // we really want the negative inverse, and -DV < y < DV
  return (o190>0)?o102-o190:-o190;
}

// Montgomery reduction
function o232(o132) {
  this.o132 = o132;
  this.o233 = o132.o234();
  this.o235 = this.o233&0x7fff;
  this.o236 = this.o233>>15;
  this.o237 = (1<<(o100-15))-1;
  this.o238 = 2*o132.o150;
}

// xR mod m
function o239(o119) {
  var o148 = o117();
  o119.abs().o209(this.o132.o150,o148);
  o148.o216(this.o132,null,o148);
  if(o119.o37 < 0 && o148.o210(o109.o161) > 0) this.o132.o162(o148,o148);
  return o148;
}

// x/R mod m
function o240(o119) {
  var o148 = o117();
  o119.o198(o148);
  this.reduce(o148);
  return o148;
}

// x = x/R mod m (HAC 14.32)
function o241(o119) {
  var o193 = o119.o113;
  while(o119.o150 <= this.o238)        // pad x so am has enough room later
    o193[o119.o150++] = 0;
  for(var o63 = 0; o63 < this.o132.o150; ++o63) {
    // faster way of calculating u0 = x[i]*mp mod DV
    var o121 = o193[o63]&0x7fff;
    var o242 = (o121*this.o235+(((o121*this.o236+(o193[o63]>>15)*this.o235)&this.o237)<<15))&o101;
    // use am to combine the multiply-shift-add into one call
    o121 = o63+this.o132.o150;
    o193[o121] += this.o132.o138(0,o242,o119,o63,0,this.o132.o150);
    // propagate carry
    while(o193[o121] >= o102) { o193[o121] -= o102; o193[++o121]++; }
  }
  o119.o160();
  o119.o213(this.o132.o150,o119);
  if(o119.o210(this.o132) >= 0) o119.o162(this.o132,o119);
}

// r = "x^2/R mod m"; x != r
function o243(o119,o148) { o119.o226(o148); this.reduce(o148); }

// r = "xy/R mod m"; x,y != r
function o244(o119,o190,o148) { o119.o223(o190,o148); this.reduce(o148); }

o232.prototype.o227 = o239;
o232.prototype.o228 = o240;
o232.prototype.reduce = o241;
o232.prototype.o229 = o244;
o232.prototype.o230 = o243;

// (protected) true iff this is even
function o245() {
  var o123 = this.o113;
  return ((this.o150>0)?(o123[0]&1):this.o37) == 0;
}

// (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
function o246(o93,o247) {
  if(o93 > 0xffffffff || o93 < 1) return o109.o211;
  var o148 = o117(), o248 = o117(), o249 = o247.o227(this), o63 = o175(o93)-1;
  o249.o198(o148);
  while(--o63 >= 0) {
    o247.o230(o148,o248);
    if((o93&(1<<o63)) > 0) o247.o229(o248,o249,o148);
    else { var o150 = o148; o148 = o248; o248 = o150; }
  }
  return o247.o228(o148);
}

// (public) this^e % m, 0 <= e < 2^32
function o250(o93,o132) {
  var o247;
  if(o93 < 256 || o132.o251()) o247 = new o217(o132); else o247 = new o232(o132);
  return this.o252(o93,o247);
}

// protected
o109.prototype.o198 = o147;
o109.prototype.o154 = o151;
o109.prototype.o116 = o155;
o109.prototype.o160 = o163;
o109.prototype.o209 = o177;
o109.prototype.o213 = o178;
o109.prototype.o203 = o180;
o109.prototype.o214 = o185;
o109.prototype.o162 = o186;
o109.prototype.o223 = o188;
o109.prototype.o226 = o192;
o109.prototype.o216 = o194;
o109.prototype.o234 = o231;
o109.prototype.o251 = o245;
o109.prototype.o252 = o246;

// public
o109.prototype.toString = o164;
o109.prototype.o165 = o171;
o109.prototype.abs = o172;
o109.prototype.o210 = o173;
o109.prototype.o253 = o176;
o109.prototype.o219 = o215;
o109.prototype.o254 = o250;

// "constants"
o109.o161 = o153(0);
o109.o211 = o153(1);
// Copyright (c) 2005  Tom Wu
// All Rights Reserved.
// See "LICENSE" for details.

// Extended JavaScript BN functions, required for RSA private ops.

// (public)
function o255() { var o148 = o117(); this.o198(o148); return o148; }

// (public) return value as integer
function o256() {
  var o123 = this.o113;
  if(this.o37 < 0) {
    if(this.o150 == 1) return o123[0]-o102;
    else if(this.o150 == 0) return -1;
  }
  else if(this.o150 == 1) return o123[0];
  else if(this.o150 == 0) return 0;
  // assumes 16 < DB < 32
  return ((o123[1]&((1<<(32-o100))-1))<<o100)|o123[0];
}

// (public) return value as byte
function o257() {
  var o123 = this.o113;
  return (this.o150==0)?this.o37:(o123[0]<<24)>>24;
}

// (public) return value as short (assumes DB>=16)
function o258() {
  var o123 = this.o113;
  return (this.o150==0)?this.o37:(o123[0]<<16)>>16;
}

// (protected) return x s.t. r^x < DV
function o259(o148) { return Math.floor(Math.o260*o100/Math.o65(o148)); }

// (public) 0 if this == 0, 1 if this > 0
function o261() {
  var o123 = this.o113;
  if(this.o37 < 0) return -1;
  else if(this.o150 <= 0 || (this.o150 == 1 && o123[0] <= 0)) return 0;
  else return 1;
}

// (protected) convert to radix string
function o262(o111) {
  if(o111 == null) o111 = 10;
  if(this.o263() == 0 || o111 < 2 || o111 > 36) return "0";
  var o264 = this.o265(o111);
  var o110 = Math.o66(o111,o264);
  var o169 = o153(o110), o190 = o117(), o247 = o117(), o148 = "";
  this.o216(o169,o190,o247);
  while(o190.o263() > 0) {
    o148 = (o110+o247.o266()).toString(o111).substr(1) + o148;
    o190.o216(o169,o190,o247);
  }
  return o247.o266().toString(o111) + o148;
}

// (protected) convert from radix string
function o268(o37,o111) {
  this.o154(0);
  if(o111 == null) o111 = 10;
  var o264 = this.o265(o111);
  var o169 = Math.o66(o111,o264), o158 = false, o121 = 0, o120 = 0;
  for(var o63 = 0; o63 < o37.length; ++o63) {
    var o119 = o146(o37,o63);
    if(o119 < 0) {
      if(o37.charAt(o63) == "-" && this.o263() == 0) o158 = true;
      continue;
    }
    o120 = o111*o120+o119;
    if(++o121 >= o264) {
      this.o269(o169);
      this.o270(o120,0);
      o121 = 0;
      o120 = 0;
    }
  }
  if(o121 > 0) {
    this.o269(Math.o66(o111,o121));
    this.o270(o120,0);
  }
  if(o158) o109.o161.o162(this,this);
}

// (protected) alternate constructor
function o271(o110,o111,o112) {
  if("number" == typeof o111) {
    // new BigInteger(int,int,RNG)
    if(o110 < 2) this.o154(1);
    else {
      this.o115(o110,o112);
      if(!this.o272(o110-1))    // force MSB set
        this.o273(o109.o211.o274(o110-1),o275,this);
      if(this.o251()) this.o270(1,0); // force odd
      while(!this.o276(o111)) {
        this.o270(2,0);
        if(this.o253() > o110) this.o162(o109.o211.o274(o110-1),this);
      }
    }
  }
  else {
    // new BigInteger(int,RNG)
    var o119 = new Array(), o150 = o110&7;
    o119.length = (o110>>3)+1;
    o111.o277(o119);
    if(o150 > 0) o119[0] &= ((1<<o150)-1); else o119[0] = 0;
    this.o116(o119,256);
  }
}

// (public) convert to bigendian byte array
function o278() {
  var o123 = this.o113;
  var o63 = this.o150, o148 = new Array();
  o148[0] = this.o37;
  var o170 = o100-(o63*o100)%8, o169, o156 = 0;
  if(o63-- > 0) {
    if(o170 < o100 && (o169 = o123[o63]>>o170) != (this.o37&o101)>>o170)
      o148[o156++] = o169|(this.o37<<(o100-o170));
    while(o63 >= 0) {
      if(o170 < 8) {
        o169 = (o123[o63]&((1<<o170)-1))<<(8-o170);
        o169 |= o123[--o63]>>(o170+=o100-8);
      }
      else {
        o169 = (o123[o63]>>(o170-=8))&0xff;
        if(o170 <= 0) { o170 += o100; --o63; }
      }
      if((o169&0x80) != 0) o169 |= -256;
      if(o156 == 0 && (this.o37&0x80) != (o169&0x80)) ++o156;
      if(o156 > 0 || o169 != this.o37) o148[o156++] = o169;
    }
  }
  return o148;
}

function o279(o110) { return(this.o210(o110)==0); }
function o280(o110) { return(this.o210(o110)<0)?this:o110; }
function o281(o110) { return(this.o210(o110)>0)?this:o110; }

// (protected) r = this op a (bitwise)
function o282(o110,o283,o148) {
  var o123 = this.o113;
  var o174    = o110.o113;
  var o149    = o148.o113;
  var o63, o284, o132 = Math.o187(o110.o150,this.o150);
  for(o63 = 0; o63 < o132; ++o63) o149[o63] = o283(o123[o63],o174[o63]);
  if(o110.o150 < this.o150) {
    o284 = o110.o37&o101;
    for(o63 = o132; o63 < this.o150; ++o63) o149[o63] = o283(o123[o63],o284);
    o148.o150 = this.o150;
  }
  else {
    o284 = this.o37&o101;
    for(o63 = o132; o63 < o110.o150; ++o63) o149[o63] = o283(o284,o174[o63]);
    o148.o150 = o110.o150;
  }
  o148.o37 = o283(this.o37,o110.o37);
  o148.o160();
}

// (public) this & a
function o285(o119,o190) { return o119&o190; }
function o286(o110) { var o148 = o117(); this.o273(o110,o285,o148); return o148; }

// (public) this | a
function o275(o119,o190) { return o119|o190; }
function o287(o110) { var o148 = o117(); this.o273(o110,o275,o148); return o148; }

// (public) this ^ a
function o288(o119,o190) { return o119^o190; }
function o289(o110) { var o148 = o117(); this.o273(o110,o288,o148); return o148; }

// (public) this & ~a
function o290(o119,o190) { return o119&~o190; }
function o291(o110) { var o148 = o117(); this.o273(o110,o290,o148); return o148; }

// (public) ~this
function o292() {
  var o123 = this.o113;
  var o148 = o117();
  var o149 = o148.o113;

  for(var o63 = 0; o63 < this.o150; ++o63) o149[o63] = o101&~o123[o63];
  o148.o150 = this.o150;
  o148.o37 = ~this.o37;
  return o148;
}

// (public) this << n
function o293(o122) {
  var o148 = o117();
  if(o122 < 0) this.o214(-o122,o148); else this.o203(o122,o148);
  return o148;
}

// (public) this >> n
function o294(o122) {
  var o148 = o117();
  if(o122 < 0) this.o203(-o122,o148); else this.o214(o122,o148);
  return o148;
}

// return index of lowest 1-bit in x, x < 2^31
function o295(o119) {
  if(o119 == 0) return -1;
  var o148 = 0;
  if((o119&0xffff) == 0) { o119 >>= 16; o148 += 16; }
  if((o119&0xff) == 0) { o119 >>= 8; o148 += 8; }
  if((o119&0xf) == 0) { o119 >>= 4; o148 += 4; }
  if((o119&3) == 0) { o119 >>= 2; o148 += 2; }
  if((o119&1) == 0) ++o148;
  return o148;
}

// (public) returns index of lowest 1-bit (or -1 if none)
function o296() {
  var o123 = this.o113;
  for(var o63 = 0; o63 < this.o150; ++o63)
    if(o123[o63] != 0) return o63*o100+o295(o123[o63]);
  if(this.o37 < 0) return this.o150*o100;
  return -1;
}

// return number of 1 bits in x
function o297(o119) {
  var o148 = 0;
  while(o119 != 0) { o119 &= o119-1; ++o148; }
  return o148;
}

// (public) return number of set bits
function o298() {
  var o148 = 0, o119 = this.o37&o101;
  for(var o63 = 0; o63 < this.o150; ++o63) o148 += o297(o123[o63]^o119);
  return o148;
}

// (public) true iff nth bit is set
function o299(o122) {
  var o123 = this.o113;
  var o121 = Math.floor(o122/o100);
  if(o121 >= this.o150) return(this.o37!=0);
  return((o123[o121]&(1<<(o122%o100)))!=0);
}

// (protected) this op (1<<n)
function o300(o122,o283) {
  var o148 = o109.o211.o274(o122);
  this.o273(o148,o283,o148);
  return o148;
}

// (public) this | (1<<n)
function o301(o122) { return this.o302(o122,o275); }

// (public) this & ~(1<<n)
function o303(o122) { return this.o302(o122,o290); }

// (public) this ^ (1<<n)
function o304(o122) { return this.o302(o122,o288); }

// (protected) r = this + a
function o305(o110,o148) {
  var o123 = this.o113;
  var o174 = o110.o113;
  var o149 = o148.o113;
  var o63 = 0, o112 = 0, o132 = Math.o187(o110.o150,this.o150);
  while(o63 < o132) {
    o112 += o123[o63]+o174[o63];
    o149[o63++] = o112&o101;
    o112 >>= o100;
  }
  if(o110.o150 < this.o150) {
    o112 += o110.o37;
    while(o63 < this.o150) {
      o112 += o123[o63];
      o149[o63++] = o112&o101;
      o112 >>= o100;
    }
    o112 += this.o37;
  }
  else {
    o112 += this.o37;
    while(o63 < o110.o150) {
      o112 += o174[o63];
      o149[o63++] = o112&o101;
      o112 >>= o100;
    }
    o112 += o110.o37;
  }
  o148.o37 = (o112<0)?-1:0;
  if(o112 > 0) o149[o63++] = o112;
  else if(o112 < -1) o149[o63++] = o102+o112;
  o148.o150 = o63;
  o148.o160();
}

// (public) this + a
function o306(o110) { var o148 = o117(); this.o307(o110,o148); return o148; }

// (public) this - a
function o308(o110) { var o148 = o117(); this.o162(o110,o148); return o148; }

// (public) this * a
function o309(o110) { var o148 = o117(); this.o223(o110,o148); return o148; }

// (public) this / a
function o310(o110) { var o148 = o117(); this.o216(o110,o148,null); return o148; }

// (public) this % a
function o311(o110) { var o148 = o117(); this.o216(o110,null,o148); return o148; }

// (public) [this/a,this%a]
function o312(o110) {
  var o195 = o117(), o148 = o117();
  this.o216(o110,o195,o148);
  return new Array(o195,o148);
}

// (protected) this *= n, this >= 0, 1 < n < DV
function o313(o122) {
  var o123 = this.o113;
  o123[this.o150] = this.o138(0,o122-1,this,0,0,this.o150);
  ++this.o150;
  this.o160();
}

// (protected) this += n << w words, this >= 0
function o314(o122,o120) {
  var o123 = this.o113;
  while(this.o150 <= o120) o123[this.o150++] = 0;
  o123[o120] += o122;
  while(o123[o120] >= o102) {
    o123[o120] -= o102;
    if(++o120 >= this.o150) o123[this.o150++] = 0;
    ++o123[o120];
  }
}

// A "null" reducer
function o315() {}
function o316(o119) { return o119; }
function o317(o119,o190,o148) { o119.o223(o190,o148); }
function o318(o119,o148) { o119.o226(o148); }

o315.prototype.o227 = o316;
o315.prototype.o228 = o316;
o315.prototype.o229 = o317;
o315.prototype.o230 = o318;

// (public) this^e
function o319(o93) { return this.o252(o93,new o315()); }

// (protected) r = lower n words of "this * a", a.t <= n
// "this" should be the larger one if appropriate.
function o320(o110,o122,o148) {
  var o149 = o148.o113;
  var o174 = o110.o113;
  var o63 = Math.o187(this.o150+o110.o150,o122);
  o148.o37 = 0; // assumes a,this >= 0
  o148.o150 = o63;
  while(o63 > 0) o149[--o63] = 0;
  var o121;
  for(o121 = o148.o150-this.o150; o63 < o121; ++o63) o149[o63+this.o150] = this.o138(0,o174[o63],o148,o63,0,this.o150);
  for(o121 = Math.o187(o110.o150,o122); o63 < o121; ++o63) this.o138(0,o174[o63],o148,o63,0,o122-o63);
  o148.o160();
}

// (protected) r = "this * a" without lower n words, n > 0
// "this" should be the larger one if appropriate.
function o321(o110,o122,o148) {
  var o149 = o148.o113;
  var o174 = o110.o113;
  --o122;
  var o63 = o148.o150 = this.o150+o110.o150-o122;
  o148.o37 = 0; // assumes a,this >= 0
  while(--o63 >= 0) o149[o63] = 0;
  for(o63 = Math.o179(o122-this.o150,0); o63 < o110.o150; ++o63)
    o149[this.o150+o63-o122] = this.o138(o122-o63,o174[o63],o148,0,0,this.o150+o63-o122);
  o148.o160();
  o148.o213(1,o148);
}

// Barrett modular reduction
function o322(o132) {
  // setup Barrett
  this.o248 = o117();
  this.o323 = o117();
  o109.o211.o209(2*o132.o150,this.o248);
  this.o324 = this.o248.o325(o132);
  this.o132 = o132;
}

function o326(o119) {
  if(o119.o37 < 0 || o119.o150 > 2*this.o132.o150) return o119.o219(this.o132);
  else if(o119.o210(this.o132) < 0) return o119;
  else { var o148 = o117(); o119.o198(o148); this.reduce(o148); return o148; }
}

function o327(o119) { return o119; }

// x = x mod m (HAC 14.42)
function o328(o119) {
  o119.o213(this.o132.o150-1,this.o248);
  if(o119.o150 > this.o132.o150+1) { o119.o150 = this.o132.o150+1; o119.o160(); }
  this.o324.o329(this.o248,this.o132.o150+1,this.o323);
  this.o132.o330(this.o323,this.o132.o150+1,this.o248);
  while(o119.o210(this.o248) < 0) o119.o270(1,this.o132.o150+1);
  o119.o162(this.o248,o119);
  while(o119.o210(this.o132) >= 0) o119.o162(this.o132,o119);
}

// r = x^2 mod m; x != r
function o331(o119,o148) { o119.o226(o148); this.reduce(o148); }

// r = x*y mod m; x,y != r
function o332(o119,o190,o148) { o119.o223(o190,o148); this.reduce(o148); }

o322.prototype.o227 = o326;
o322.prototype.o228 = o327;
o322.prototype.reduce = o328;
o322.prototype.o229 = o332;
o322.prototype.o230 = o331;

// (public) this^e % m (HAC 14.85)
function o333(o93,o132) {
  var o334 = o93.o113;
  var o63 = o93.o253(), o156, o148 = o153(1), o247;
  if(o63 <= 0) return o148;
  else if(o63 < 18) o156 = 1;
  else if(o63 < 48) o156 = 3;
  else if(o63 < 144) o156 = 4;
  else if(o63 < 768) o156 = 5;
  else o156 = 6;
  if(o63 < 8)
    o247 = new o217(o132);
  else if(o132.o251())
    o247 = new o322(o132);
  else
    o247 = new o232(o132);

  // precomputation
  var o249 = new Array(), o122 = 3, o335 = o156-1, o168 = (1<<o156)-1;
  o249[1] = o247.o227(this);
  if(o156 > 1) {
    var o336 = o117();
    o247.o230(o249[1],o336);
    while(o122 <= o168) {
      o249[o122] = o117();
      o247.o229(o336,o249[o122-2],o249[o122]);
      o122 += 2;
    }
  }

  var o121 = o93.o150-1, o120, o337 = true, o248 = o117(), o150;
  o63 = o175(o334[o121])-1;
  while(o121 >= 0) {
    if(o63 >= o335) o120 = (o334[o121]>>(o63-o335))&o168;
    else {
      o120 = (o334[o121]&((1<<(o63+1))-1))<<(o335-o63);
      if(o121 > 0) o120 |= o334[o121-1]>>(o100+o63-o335);
    }

    o122 = o156;
    while((o120&1) == 0) { o120 >>= 1; --o122; }
    if((o63 -= o122) < 0) { o63 += o100; --o121; }
    if(o337) {   // ret == 1, don't bother squaring or multiplying it
      o249[o120].o198(o148);
      o337 = false;
    }
    else {
      while(o122 > 1) { o247.o230(o148,o248); o247.o230(o248,o148); o122 -= 2; }
      if(o122 > 0) o247.o230(o148,o248); else { o150 = o148; o148 = o248; o248 = o150; }
      o247.o229(o248,o249[o120],o148);
    }

    while(o121 >= 0 && (o334[o121]&(1<<o63)) == 0) {
      o247.o230(o148,o248); o150 = o148; o148 = o248; o248 = o150;
      if(--o63 < 0) { o63 = o100-1; --o121; }
    }
  }
  return o247.o228(o148);
}

// (public) gcd(this,a) (HAC 14.54)
function o338(o110) {
  var o119 = (this.o37<0)?this.o165():this.o339();
  var o190 = (o110.o37<0)?o110.o165():o110.o339();
  if(o119.o210(o190) < 0) { var o150 = o119; o119 = o190; o190 = o150; }
  var o63 = o119.o340(), o249 = o190.o340();
  if(o249 < 0) return o119;
  if(o63 < o249) o249 = o63;
  if(o249 > 0) {
    o119.o214(o249,o119);
    o190.o214(o249,o190);
  }
  while(o119.o263() > 0) {
    if((o63 = o119.o340()) > 0) o119.o214(o63,o119);
    if((o63 = o190.o340()) > 0) o190.o214(o63,o190);
    if(o119.o210(o190) >= 0) {
      o119.o162(o190,o119);
      o119.o214(1,o119);
    }
    else {
      o190.o162(o119,o190);
      o190.o214(1,o190);
    }
  }
  if(o249 > 0) o190.o203(o249,o190);
  return o190;
}

// (protected) this % n, n < 2^26
function o341(o122) {
  var o123 = this.o113;
  if(o122 <= 0) return 0;
  var o169 = o102%o122, o148 = (this.o37<0)?o122-1:0;
  if(this.o150 > 0)
    if(o169 == 0) o148 = o123[0]%o122;
    else for(var o63 = this.o150-1; o63 >= 0; --o63) o148 = (o169*o148+o123[o63])%o122;
  return o148;
}

// (public) 1/this % m (HAC 14.61)
function o342(o132) {
  var o343 = o132.o251();
  if((this.o251() && o343) || o132.o263() == 0) return o109.o161;
  var o344 = o132.o339(), o125 = this.o339();
  var o110 = o153(1), o111 = o153(0), o112 = o153(0), o169 = o153(1);
  while(o344.o263() != 0) {
    while(o344.o251()) {
      o344.o214(1,o344);
      if(o343) {
        if(!o110.o251() || !o111.o251()) { o110.o307(this,o110); o111.o162(o132,o111); }
        o110.o214(1,o110);
      }
      else if(!o111.o251()) o111.o162(o132,o111);
      o111.o214(1,o111);
    }
    while(o125.o251()) {
      o125.o214(1,o125);
      if(o343) {
        if(!o112.o251() || !o169.o251()) { o112.o307(this,o112); o169.o162(o132,o169); }
        o112.o214(1,o112);
      }
      else if(!o169.o251()) o169.o162(o132,o169);
      o169.o214(1,o169);
    }
    if(o344.o210(o125) >= 0) {
      o344.o162(o125,o344);
      if(o343) o110.o162(o112,o110);
      o111.o162(o169,o111);
    }
    else {
      o125.o162(o344,o125);
      if(o343) o112.o162(o110,o112);
      o169.o162(o111,o169);
    }
  }
  if(o125.o210(o109.o211) != 0) return o109.o161;
  if(o169.o210(o132) >= 0) return o169.o345(o132);
  if(o169.o263() < 0) o169.o307(o132,o169); else return o169;
  if(o169.o263() < 0) return o169.add(o132); else return o169;
}

var o347 = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509];
var o348 = (1<<26)/o347[o347.length-1];

// (public) test primality with certainty >= 1-.5^t
function o349(o150) {
  var o63, o119 = this.abs();
  var o193 = o119.o113;
  if(o119.o150 == 1 && o193[0] <= o347[o347.length-1]) {
    for(o63 = 0; o63 < o347.length; ++o63)
      if(o193[0] == o347[o63]) return true;
    return false;
  }
  if(o119.o251()) return false;
  o63 = 1;
  while(o63 < o347.length) {
    var o132 = o347[o63], o121 = o63+1;
    while(o121 < o347.length && o132 < o348) o132 *= o347[o121++];
    o132 = o119.o350(o132);
    while(o63 < o121) if(o132%o347[o63++] == 0) return false;
  }
  return o119.o351(o150);
}

// (protected) true if probably prime (HAC 4.24, Miller-Rabin)
function o352(o150) {
  var o353 = this.o345(o109.o211);
  var o156 = o353.o340();
  if(o156 <= 0) return false;
  var o148 = o353.o354(o156);
  o150 = (o150+1)>>1;
  if(o150 > o347.length) o150 = o347.length;
  var o110 = o117();
  for(var o63 = 0; o63 < o150; ++o63) {
    o110.o154(o347[o63]);
    var o190 = o110.o355(o148,this);
    if(o190.o210(o109.o211) != 0 && o190.o210(o353) != 0) {
      var o121 = 1;
      while(o121++ < o156 && o190.o210(o353) != 0) {
        o190 = o190.o254(2,this);
        if(o190.o210(o109.o211) == 0) return false;
      }
      if(o190.o210(o353) != 0) return false;
    }
  }
  return true;
}

// protected
o109.prototype.o265 = o259;
o109.prototype.o167 = o262;
o109.prototype.o157 = o268;
o109.prototype.o115 = o271;
o109.prototype.o273 = o282;
o109.prototype.o302 = o300;
o109.prototype.o307 = o305;
o109.prototype.o269 = o313;
o109.prototype.o270 = o314;
o109.prototype.o330 = o320;
o109.prototype.o329 = o321;
o109.prototype.o350 = o341;
o109.prototype.o351 = o352;

// public
o109.prototype.o339 = o255;
o109.prototype.o266 = o256;
o109.prototype.o356 = o257;
o109.prototype.o357 = o258;
o109.prototype.o263 = o261;
o109.prototype.o358 = o278;
o109.prototype.o359 = o279;
o109.prototype.o187 = o280;
o109.prototype.o179 = o281;
o109.prototype.and = o286;
o109.prototype.or = o287;
o109.prototype.xor = o289;
o109.prototype.o363 = o291;
o109.prototype.o364 = o292;
o109.prototype.o274 = o293;
o109.prototype.o354 = o294;
o109.prototype.o340 = o296;
o109.prototype.o365 = o298;
o109.prototype.o272 = o299;
o109.prototype.o366 = o301;
o109.prototype.o367 = o303;
o109.prototype.o368 = o304;
o109.prototype.add = o306;
o109.prototype.o345 = o308;
o109.prototype.o369 = o309;
o109.prototype.o325 = o310;
o109.prototype.o370 = o311;
o109.prototype.o371 = o312;
o109.prototype.o355 = o333;
o109.prototype.o372 = o342;
o109.prototype.o66 = o319;
o109.prototype.o373 = o338;
o109.prototype.o276 = o349;

// BigInteger interfaces not implemented in jsbn:

// BigInteger(int signum, byte[] magnitude)
// double doubleValue()
// float floatValue()
// int hashCode()
// long longValue()
// static BigInteger valueOf(long val)
// prng4.js - uses Arcfour as a PRNG

function o374() {
  this.o63 = 0;
  this.o121 = 0;
  this.o375 = new Array();
}

// Initialize arcfour context from key, an array of ints, each from [0..255]
function o376(key) {
  var o63, o121, o150;
  for(o63 = 0; o63 < 256; ++o63)
    this.o375[o63] = o63;
  o121 = 0;
  for(o63 = 0; o63 < 256; ++o63) {
    o121 = (o121 + this.o375[o63] + key[o63 % key.length]) & 255;
    o150 = this.o375[o63];
    this.o375[o63] = this.o375[o121];
    this.o375[o121] = o150;
  }
  this.o63 = 0;
  this.o121 = 0;
}

function o378() {
  var o150;
  this.o63 = (this.o63 + 1) & 255;
  this.o121 = (this.o121 + this.o375[this.o63]) & 255;
  o150 = this.o375[this.o63];
  this.o375[this.o63] = this.o375[this.o121];
  this.o375[this.o121] = o150;
  return this.o375[(o150 + this.o375[this.o63]) & 255];
}

o374.prototype.o379 = o376;
o374.prototype.next = o378;

// Plug in your RNG constructor here
function o381() {
  return new o374();
}

// Pool size must be a multiple of 4 and greater than 32.
// An array of bytes the size of the pool will be passed to init()
var o382 = 256;
// Random number generator - requires a PRNG backend, e.g. prng4.js

// For best results, put code like
// <body onClick='rng_seed_time();' onKeyPress='rng_seed_time();'>
// in your main HTML document.

var o383;
var o384;
var o385;

// Mix in a 32-bit integer into the pool
function o386(o119) {
  o384[o385++] ^= o119 & 255;
  o384[o385++] ^= (o119 >> 8) & 255;
  o384[o385++] ^= (o119 >> 16) & 255;
  o384[o385++] ^= (o119 >> 24) & 255;
  if(o385 >= o382) o385 -= o382;
}

// Mix in the current time (w/milliseconds) into the pool
function o387() {
  // Use pre-computed date to avoid making the benchmark
  // results dependent on the current date.
  o386(1122926989487);
}

// Initialize the pool with junk if needed.
if(o384 == null) {
  o384 = new Array();
  o385 = 0;
  var o150;
  while(o385 < o382) {  // extract some randomness from Math.random()
    o150 = Math.floor(65536 * Math.random());
    o384[o385++] = o150 >>> 8;
    o384[o385++] = o150 & 255;
  }
  o385 = 0;
  o387();
  //rng_seed_int(window.screenX);
  //rng_seed_int(window.screenY);
}

function o388() {
  if(o383 == null) {
    o387();
    o383 = o381();
    o383.o379(o384);
    for(o385 = 0; o385 < o384.length; ++o385)
      o384[o385] = 0;
    o385 = 0;
    //rng_pool = null;
  }
  // TODO: allow reseeding after first request
  return o383.next();
}

function o389(o390) {
  var o63;
  for(o63 = 0; o63 < o390.length; ++o63) o390[o63] = o388();
}

function o391() {}

o391.prototype.o277 = o389;
// Depends on jsbn.js and rng.js

// convert a (hex) string to a bignum object
function o392(o393,o148) {
  return new o109(o393,o148);
}

function o394(o37,o122) {
  var o395 = "";
  var o63 = 0;
  while(o63 + o122 < o37.length) {
    o395 += o37.substring(o63,o63+o122) + "\n";
    o63 += o122;
  }
  return o395 + o37.substring(o63,o37.length);
}

function o397(o111) {
  if(o111 < 0x10)
    return "0" + o111.toString(16);
  else
    return o111.toString(16);
}

// PKCS#1 (type 2, random) pad input string s to n bytes, and return a bigint
function o398(o37,o122) {
  if(o122 < o37.length + 11) {
    o36("Message too long for RSA");
    return null;
  }
  var o390 = new Array();
  var o63 = o37.length - 1;
  while(o63 >= 0 && o122 > 0) o390[--o122] = o37.charCodeAt(o63--);
  o390[--o122] = 0;
  var o399 = new o391();
  var o119 = new Array();
  while(o122 > 2) { // random non-zero pad
    o119[0] = 0;
    while(o119[0] == 0) o399.o277(o119);
    o390[--o122] = o119[0];
  }
  o390[--o122] = 2;
  o390[--o122] = 0;
  return new o109(o390);
}

// "empty" RSA key constructor
function o400() {
  this.o122 = null;
  this.o93 = 0;
  this.o169 = null;
  this.o170 = null;
  this.o195 = null;
  this.o401 = null;
  this.o402 = null;
  this.o403 = null;
}

// Set the public key fields N and e from hex strings
function o404(o405,o67) {
  if(o405 != null && o67 != null && o405.length > 0 && o67.length > 0) {
    this.o122 = o392(o405,16);
    this.o93 = parseInt(o67,16);
  }
  else
    o36("Invalid RSA public key");
}

// Perform raw public operation on "x": return x^e (mod n)
function o407(o119) {
  return o119.o254(this.o93, this.o122);
}

// Return the PKCS#1 RSA encryption of "text" as an even-length hex string
function o408(o409) {
  var o132 = o398(o409,(this.o122.o253()+7)>>3);
  if(o132 == null) return null;
  var o112 = this.o410(o132);
  if(o112 == null) return null;
  var o131 = o112.toString(16);
  if((o131.length & 1) == 0) return o131; else return "0" + o131;
}

// Return the PKCS#1 RSA encryption of "text" as a Base64-encoded string
//function RSAEncryptB64(text) {
//  var h = this.encrypt(text);
//  if(h) return hex2b64(h); else return null;
//}

// protected
o400.prototype.o410 = o407;

// public
o400.prototype.o411 = o404;
o400.prototype.o97 = o408;
//RSAKey.prototype.encrypt_b64 = RSAEncryptB64;
// Depends on rsa.js and jsbn2.js

// Undo PKCS#1 (type 2, random) padding and, if valid, return the plaintext
function o412(o169,o122) {
  var o111 = o169.o358();
  var o63 = 0;
  while(o63 < o111.length && o111[o63] == 0) ++o63;
  if(o111.length-o63 != o122-1 || o111[o63] != 2)
    return null;
  ++o63;
  while(o111[o63] != 0)
    if(++o63 >= o111.length) return null;
  var o395 = "";
  while(++o63 < o111.length)
    o395 += String.fromCharCode(o111[o63]);
  return o395;
}

// Set the private key fields N, e, and d from hex strings
function o415(o405,o67,o416) {
  if(o405 != null && o67 != null && o405.length > 0 && o67.length > 0) {
    this.o122 = o392(o405,16);
    this.o93 = parseInt(o67,16);
    this.o169 = o392(o416,16);
  }
  else
    o36("Invalid RSA private key");
}

// Set the private key fields N, e, d and CRT params from hex strings
function o417(o405,o67,o416,o418,o419,o420,o421,o422) {
  if(o405 != null && o67 != null && o405.length > 0 && o67.length > 0) {
    this.o122 = o392(o405,16);
    this.o93 = parseInt(o67,16);
    this.o169 = o392(o416,16);
    this.o170 = o392(o418,16);
    this.o195 = o392(o419,16);
    this.o401 = o392(o420,16);
    this.o402 = o392(o421,16);
    this.o403 = o392(o422,16);
  }
  else
    o36("Invalid RSA private key");
}

// Generate a new random private key B bits long, using public expt E
function o423(o424,o67) {
  var o399 = new o391();
  var o425 = o424>>1;
  this.o93 = parseInt(o67,16);
  var o426 = new o109(o67,16);
  for(;;) {
    for(;;) {
      this.o170 = new o109(o424-o425,1,o399);
      if(this.o170.o345(o109.o211).o373(o426).o210(o109.o211) == 0 && this.o170.o276(10)) break;
    }
    for(;;) {
      this.o195 = new o109(o425,1,o399);
      if(this.o195.o345(o109.o211).o373(o426).o210(o109.o211) == 0 && this.o195.o276(10)) break;
    }
    if(this.o170.o210(this.o195) <= 0) {
      var o150 = this.o170;
      this.o170 = this.o195;
      this.o195 = o150;
    }
    var o427 = this.o170.o345(o109.o211);
    var o428 = this.o195.o345(o109.o211);
    var o429 = o427.o369(o428);
    if(o429.o373(o426).o210(o109.o211) == 0) {
      this.o122 = this.o170.o369(this.o195);
      this.o169 = o426.o372(o429);
      this.o401 = this.o169.o219(o427);
      this.o402 = this.o169.o219(o428);
      this.o403 = this.o195.o372(this.o170);
      break;
    }
  }
}

// Perform raw private operation on "x": return x^d (mod n)
function o430(o119) {
  if(this.o170 == null || this.o195 == null)
    return o119.o355(this.o169, this.o122);

  // TODO: re-calculate any missing CRT params
  var o431 = o119.o219(this.o170).o355(this.o401, this.o170);
  var o432 = o119.o219(this.o195).o355(this.o402, this.o195);

  while(o431.o210(o432) < 0)
    o431 = o431.add(this.o170);
  return o431.o345(o432).o369(this.o403).o219(this.o170).o369(this.o195).add(o432);
}

// Return the PKCS#1 RSA decryption of "ctext".
// "ctext" is an even-length hex string and the output is a plain string.
function o433(o434) {
  var o112 = o392(o434, 16);
  var o132 = this.o435(o112);
  if(o132 == null) return null;
  return o412(o132, (this.o122.o253()+7)>>3);
}

// Return the PKCS#1 RSA decryption of "ctext".
// "ctext" is a Base64-encoded string and the output is a plain string.
//function RSAB64Decrypt(ctext) {
//  var h = b64tohex(ctext);
//  if(h) return this.decrypt(h); else return null;
//}

// protected
o400.prototype.o435 = o430;

// public
o400.prototype.o436 = o415;
o400.prototype.o437 = o417;
o400.prototype.o438 = o423;
o400.prototype.o98 = o433;
//RSAKey.prototype.b64_decrypt = RSAB64Decrypt;


o439="a5261939975948bb7a58dffe5ff54e65f0498f9175f5a09288810b8975871e99af3b5dd94057b0fc07535f5f97444504fa35169d461d0d30cf0192e307727c065168c788771c561a9400fb49175e9e6aa4e23fe11af69e9412dd23b0cb6684c4c2429bce139e848ab26d0829073351f4acd36074eafd036a5eb83359d2a698d3";
o440="10001";
o441="8e9912f6d3645894e8d38cb58c0db81ff516cf4c7e5a14c7f1eddb1459d2cded4d8d293fc97aee6aefb861859c8b6a3d1dfe710463e1f9ddc72048c09751971c4a580aa51eb523357a3cc48d31cfad1d4a165066ed92d4748fb6571211da5cb14bc11b6e2df7c1a559e6d5ac1cd5c94703a22891464fba23d0d965086277a161";
o442="d090ce58a92c75233a6486cb0a9209bf3583b64f540c76f5294bb97d285eed33aec220bde14b2417951178ac152ceab6da7090905b478195498b352048f15e7d";
o443="cab575dc652bb66df15a0359609d51d1db184750c00c6698b90ef3465c99655103edbf0d54c56aec0ce3c4d22592338092a126a0cc49f65a4a30d222b411e58f";
o444="1a24bca8e273df2f0e47c199bbf678604e7df7215480c77c8db39f49b000ce2cf7500038acfff5433b7d582a01f1826e6f4d42e1c57f5e1fef7b12aabc59fd25";
o445="3d06982efbbe47339e1f6d36b1216b8a741d410b0c662f54f7118b27b9a4ec9d914337eb39841d8666f3034408cf94f5b62f11c402fc994fe15a05493150d9fd";
o446="3a3e731acd8960b7ff9eb81a7ff93bd1cfa74cbd56987db58b4594fb09c09084db1734c8143f98b602b981aaa9243ca28deb69b5b280ee8dcee0fd2625e53250";

o135(o133, 28);

var o447 = "The quick brown fox jumped over the extremely lazy frog! " +
    "Now is the time for all good men to come to the party.";
var o448;

function o97() {
  var o449 = new o400();
  o449.o411(o439, o440);
  o449.o437(o439, o440, o441, o442, o443, o444, o445, o446);
  o448 = o449.o97(o447);
}

function o98() {
  var o449 = new o400();
  o449.o411(o439, o440);
  o449.o437(o439, o440, o441, o442, o443, o444, o445, o446);
  var o450 = o449.o98(o448);
  if (o450 != o447) {
    throw new Error("Crypto operation failed");
  }
}

////////////////////////////////////////////////////////////////////////////////
// Runner
////////////////////////////////////////////////////////////////////////////////

var o452 = true;

function o51(name) {
}

function o82(name, o83) {
  o0.o1(name + " : ERROR : " +o83.o453);
  o452 = false;
}

function o77(name, o57) {
  if (o452) {
    o0.o1("### SCORE:", o57);
  }
}

function o56(o57) {
}

o28.o42({
        o51 : o51,
    o82 : o82,
    o77 : o77,
    o56 : o56
});
