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

////////////////////////////////////////////////////////////////////////////////
// gbemu-part1.js
////////////////////////////////////////////////////////////////////////////////

// Portions copyright 2013 Google, Inc

// Copyright (C) 2010 - 2012 Grant Galitz
// This program is free software; you can redistribute it and/or modify
// it under the terms of the GNU General Public License version 2 as
// published by the Free Software Foundation.
// The full license is available at http://www.gnu.org/licenses/gpl.html
// This program is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
// See the GNU General Public License for more details.

// The code has been adapted for use as a benchmark by Google.

var o96 = new o28('Gameboy', [26288412],
                                          [new o10('Gameboy',
                                                         false,
                                                         false,
                                                         20,
                                                         o97,
                                                         o98,
                                                         o99,
                                                         null,
                                                         4)]);

var o100 = null;

function o98() {

  // Check if all the types required by the code are supported.
  // If not, throw exception and quit.
  if (!(typeof Uint8Array != "undefined" &&
      typeof Int8Array != "undefined" &&
      typeof Float32Array != "undefined" &&
      typeof Int32Array != "undefined") ) {
    throw "TypedArrayUnsupported";
  }
  o100 = o105(o106);
  o107 = null;
}

function o97() {
  o88(new o108(), o100);

  o109.o110 = 0;
  o109.o111 = 250000;

  while (o109.o110 <= o109.o111) {
    o109.o15();
    o112.o15();
  }

  o113();
}

function o99() {
  o100 = null;
  o114 = null;
}

var o114 =
  '{"registerA":160,"registerB":255,"registerC":255,"registerE":11,' +
  '"registersHL":51600,"programCounter":24309,"stackPointer":49706,' +
  '"sumROM":10171578,"sumMemory":3435856,"sumMBCRam":234598,"sumVRam":0}';

// Start of browser emulation.

var o115 = { };

function o116() {
  this.o117 = function() {
    return new o118();
  }
  this.o119 = function (o120, o121) {
    var o62 = {};
    // The following line was updated since Octane 1.0 to avoid OOB access.
    o62.o85 = new Uint8Array(o120 * o121 * 4);
    return o62;
  }
  this.o122 = function (buffer, o124, o125) {
    var o126 = 0;
    for (var o63 = 0; o63 < buffer.o85.length; o63++) {
      o126 += o63 * buffer.o85[o63];
      o126 = o126 % 1000;
    }
  }
  this.o127 = function () { }
};

function o108() {
  this.o128 = function() {
    return new o116();
  }
  this.o129 = 160;
  this.o130 = 144;
  this.o131 = { o132: "visibile" };
}

function o133(o134, o135) {
}

function o136() {
}

var o112 = {
  o137 : 0,
  o138 : null ,
  o139 : function () {},
  o15: function() {
    var o140 = {o141 : this.o141};
    this.o138(o140);
  }
};

function o142 () {
  this.o143 = function() {
    return { o144 : function () {}, o139 : function() {}};
  }
  this.o145 = 48000;
  this.o146 = {}
  this.o117 = function (o147, o148, o145) {
    return { o149 : 1,
             o150 : 1,
             length : 1,
             o151 : 0.000020833333110203966,
             o145 : 48000}
  }
  this.o152 = function (o137, o153, o154) {
    o112.o137 = o137;
    o112.o141 = {
        o155 : function (o63) {return this.o156[o63];},
        o156    : []
    };
    for (var o63 = 0; o63 < o154; o63++) {
      o112.o141.o156[o63] = new Float32Array(o137);
    }
    return o112;
  }
}

var o157 = 0;

function o158() {
  return {
    o159: function() {
      o157 += 16;
      return o157;
    }
  };
}

// End of browser emulation.

// Start of helper functions.

function o160() {
  function o126(o161) {
    var o62 = 0;
    for (var o63 = 0; o63 < o161.length; o63++) {
      o62 += o161[o63];
    }
    return o62;
  }
  var o162 = {
    o163: o109.o163,
    o164: o109.o164,
    o165: o109.o165,
    o166: o109.o166,
    o167: o109.o167,
    o168: o109.o168,
    o169: o109.o169,
    o170: o109.o170,
    o171 : o126(o109.o172(o109.o173)),
    o174: o126(o109.o172(o109.o175)),
    o176: o126(o109.o172(o109.o177)),
    o178: o126(o109.o172(o109.o179))
  }
  var o180 = JSON.stringify(o162);
  if (typeof o114 != "undefined") {
    if (o180 != o114) {
      o36("Incorrect final state of processor:\n" +
            " actual   " + o180 + "\n" +
            " expected " + o114);
    }
  } else {
    o36(o180);
  }
}


function o113 () {
  //Audio API Event Handler:
  o183 = null;
  o184 = null;
  o185 = null;
  o186 = false;
  o187 = [];
  o188 = [];
  o189 = 15000;
  o190 = 25000;
  o191 = 44100;
  o192 = 0;
  o193 = false;
  o194 = 1;
  o195 = null;
  o196 = 0;
  o197 = 0;
  o198 = 0;
  o199 = 2;

  o109 = null;           //GameBoyCore object.
  o200 = null;       //GameBoyCore Timer
}


// End of helper functions.

// Original code from Grant Galitz follows.
// Modifications by Google are marked in comments.

// Start of js/other/base64.js file.

var o201 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+" , "/", "="];
var o202 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function o203(o85) {
  try {
    // The following line was modified for benchmarking:
    var o203 = o115.o204(o85);  //Use this native function when it's available, as it's a magnitude faster than the non-native code below.
  }
  catch (o83) {
    //Defaulting to non-native base64 encoding...
    var o203 = "";
    var o205 = o85.length;
    if (o205 > 0) {
      var o206 = [0, 0, 0];
      var index = 0;
      var o207 = o205 % 3;
      while (o85.length % 3 > 0) {
        //Make sure we don't do fuzzy math in the next loop...
        o85[o85.length] = " ";
      }
      while (index < o205) {
        //Keep this loop small for speed.
        o206 = [o85.charCodeAt(index++) & 0xFF, o85.charCodeAt(index++) & 0xFF, o85.charCodeAt(index++) & 0xFF];
        o203 += o201[o206[0] >> 2] + o201[((o206[0] & 0x3) << 4) | (o206[1] >> 4)] + o201[((o206[1] & 0xF) << 2) | (o206[2] >> 6)] + o201[o206[2] & 0x3F];
      }
      if (o207 > 0) {
        //Fill in the padding and recalulate the trailing six-bit group...
        o203[o203.length - 1] = "=";
        if (o207 == 2) {
          o203[o203.length - 2] = "=";
          o203[o203.length - 3] = o201[(o206[0] & 0x3) << 4];
        }
        else {
          o203[o203.length - 2] = o201[(o206[1] & 0xF) << 2];
        }
      }
    }
  }
  return o203;
}
function o105(o85) {
  try {
    // The following line was modified for benchmarking:
    var o209 = o115.o210(o85);  //Use this native function when it's available, as it's a magnitude faster than the non-native code below.
  }
  catch (o83) {
    //Defaulting to non-native base64 decoding...
    var o209 = "";
    var o205 = o85.length;
    if (o205 > 3 && o205 % 4 == 0) {
      var o211 = [0, 0, 0, 0];  //Declare this out of the loop, to speed up the ops.
      var index = 0;
      while (index < o205) {
        //Keep this loop small for speed.
        o211 = [o202.indexOf(o85.charAt(index++)), o202.indexOf(o85.charAt(index++)), o202.indexOf(o85.charAt(index++)), o202.indexOf(o85.charAt(index++))];
        o209 += String.fromCharCode((o211[0] << 2) | (o211[1] >> 4)) + String.fromCharCode(((o211[1] & 0x0F) << 4) | (o211[2] >> 2)) + String.fromCharCode(((o211[2] & 0x03) << 6) | o211[3]);
      }
      //Check for the '=' character after the loop, so we don't hose it up.
      if (o211[3] >= 0x40) {
        o209.length -= 1;
        if (o211[2] >= 0x40) {
          o209.length -= 1;
        }
      }
    }
  }
  return o209;
}
function o215(o216) {
  return o217(o216) + String.fromCharCode((o216 >> 16) & 0xFF, (o216 >> 24) & 0xFF);
}
function o217(o216) {
  return o218(o216) + String.fromCharCode((o216 >> 8) & 0xFF);
}
function o218(o216) {
  return String.fromCharCode(o216 & 0xFF);
}
function o219(o220) {
  var o221 = "";
  var length = o220.length;
  for (var index = 0; index < length; ++index) {
    if (typeof o220[index] == "number") {
      o221 += String.fromCharCode(o220[index]);
    }
  }
  return o203(o221);
}
function o222(o223) {
  var o221 = o105(o223);
  var o224 = [];
  var length = o221.length;
  for (var index = 0; index < length;) {
    o224.push(o221.charCodeAt(index++) & 0xFF);
  }
  return o224;
}

// End of js/other/base64.js file.

// Start of js/other/resampler.js file.

//JavaScript Audio Resampler (c) 2011 - Grant Galitz
function o225(o226, o227, o147, o228, o229) {
  this.o226 = o226;
  this.o227 = o227;
  this.o147 = o147 | 0;
  this.o228 = o228;
  this.o229 = !!o229;
  this.o230();
}
o225.prototype.o230 = function () {
  //Perform some checks:
  if (this.o226 > 0 && this.o227 > 0 && this.o147 > 0) {
    if (this.o226 == this.o227) {
      //Setup a resampler bypass:
      this.o231 = this.o232;    //Resampler just returns what was passed through.
      this.o233 = 1;
    }
    else {
      //Setup the interpolation resampler:
      this.o234();
      this.o231 = this.o235;      //Resampler is a custom quality interpolation algorithm.
      this.o233 = this.o226 / this.o227;
      this.o236 = false;
      this.o237 = 0;
      this.o238();
    }
  }
  else {
    throw(new Error("Invalid settings specified for the resampler."));
  }
}
o225.prototype.o234 = function () {
  var o240 = "var bufferLength = Math.min(buffer.length, this.outputBufferSize);\
  if ((bufferLength % " + this.o147 + ") == 0) {\
    if (bufferLength > 0) {\
      var ratioWeight = this.ratioWeight;\
      var weight = 0;";
  for (var o241 = 0; o241 < this.o147; ++o241) {
    o240 += "var output" + o241 + " = 0;"
  }
  o240 += "var actualPosition = 0;\
      var amountToNext = 0;\
      var alreadyProcessedTail = !this.tailExists;\
      this.tailExists = false;\
      var outputBuffer = this.outputBuffer;\
      var outputOffset = 0;\
      var currentPosition = 0;\
      do {\
        if (alreadyProcessedTail) {\
          weight = ratioWeight;";
  for (o241 = 0; o241 < this.o147; ++o241) {
    o240 += "output" + o241 + " = 0;"
  }
  o240 += "}\
        else {\
          weight = this.lastWeight;";
  for (o241 = 0; o241 < this.o147; ++o241) {
    o240 += "output" + o241 + " = this.lastOutput[" + o241 + "];"
  }
  o240 += "alreadyProcessedTail = true;\
        }\
        while (weight > 0 && actualPosition < bufferLength) {\
          amountToNext = 1 + actualPosition - currentPosition;\
          if (weight >= amountToNext) {";
  for (o241 = 0; o241 < this.o147; ++o241) {
    o240 += "output" + o241 + " += buffer[actualPosition++] * amountToNext;"
  }
  o240 += "currentPosition = actualPosition;\
            weight -= amountToNext;\
          }\
          else {";
  for (o241 = 0; o241 < this.o147; ++o241) {
    o240 += "output" + o241 + " += buffer[actualPosition" + ((o241 > 0) ? (" + " + o241) : "") + "] * weight;"
  }
  o240 += "currentPosition += weight;\
            weight = 0;\
            break;\
          }\
        }\
        if (weight == 0) {";
  for (o241 = 0; o241 < this.o147; ++o241) {
    o240 += "outputBuffer[outputOffset++] = output" + o241 + " / ratioWeight;"
  }
  o240 += "}\
        else {\
          this.lastWeight = weight;";
  for (o241 = 0; o241 < this.o147; ++o241) {
    o240 += "this.lastOutput[" + o241 + "] = output" + o241 + ";"
  }
  o240 += "this.tailExists = true;\
          break;\
        }\
      } while (actualPosition < bufferLength);\
      return this.bufferSlice(outputOffset);\
    }\
    else {\
      return (this.noReturn) ? 0 : [];\
    }\
  }\
  else {\
    throw(new Error(\"Buffer was of incorrect sample length.\"));\
  }";
  this.o235 = Function("buffer", o240);
}
o225.prototype.o232 = function (buffer) {
  if (this.o229) {
    //Set the buffer passed as our own, as we don't need to resample it:
    this.o141 = buffer;
    return buffer.length;
  }
  else {
    //Just return the buffer passsed:
    return buffer;
  }
}
o225.prototype.o243 = function (o244) {
  if (this.o229) {
    //If we're going to access the properties directly from this object:
    return o244;
  }
  else {
    //Typed array and normal array buffer section referencing:
    try {
      return this.o141.subarray(0, o244);
    }
    catch (o83) {
      try {
        //Regular array pass:
        this.o141.length = o244;
        return this.o141;
      }
      catch (o83) {
        //Nightly Firefox 4 used to have the subarray function named as slice:
        return this.o141.slice(0, o244);
      }
    }
  }
}
o225.prototype.o238 = function () {
  //Initialize the internal buffer:
  try {
    this.o141 = new Float32Array(this.o228);
    this.o247 = new Float32Array(this.o147);
  }
  catch (o83) {
    this.o141 = [];
    this.o247 = [];
  }
}

// End of js/other/resampler.js file.

// Start of js/other/XAudioServer.js file.

/*Initialize here first:
  Example:
    Stereo audio with a sample rate of 70 khz, a minimum buffer of 15000 samples total, a maximum buffer of 25000 samples total and a starting volume level of 1.
      var parentObj = this;
      this.audioHandle = new XAudioServer(2, 70000, 15000, 25000, function (sampleCount) {
        return parentObj.audioUnderRun(sampleCount);
      }, 1);

  The callback is passed the number of samples requested, while it can return any number of samples it wants back.
*/
function o248(o147, o145, o249, o250, o251, o252) {
  this.o253 = (o147 == 2) ? 2 : 1;
  o193 = (this.o253 == 1);
  o192 = (o145 > 0 && o145 <= 0xFFFFFF) ? o145 : 44100;
  o189 = (o249 >= (o254 << 1) && o249 < o250) ? (o249 & ((o193) ? 0xFFFFFFFF : 0xFFFFFFFE)) : (o254 << 1);
  o190 = (Math.floor(o250) > o189 + this.o253) ? (o250 & ((o193) ? 0xFFFFFFFF : 0xFFFFFFFE)) : (o249 << 1);
  this.o251 = (typeof o251 == "function") ? o251 : function () {};
  o194 = (o252 >= 0 && o252 <= 1) ? o252 : 1;
  this.o256 = -1;
  this.o257 = [];
  this.o258 = null;
  this.o259 = null;
  this.o260 = false;
  this.o261 = false;
  this.o262();
}
o248.prototype.o263 = function (buffer) {
  //mozAudio:
  this.o264(buffer);
  this.o265();
}
o248.prototype.o264 = function (buffer) {
  //mozAudio:
  this.o266(buffer);
}
o248.prototype.o267 = function (buffer) {
  //Callback-centered audio APIs:
  this.o268(buffer);
  this.o269();
}
o248.prototype.o268 = function (buffer) {
  //Callback-centered audio APIs:
  var length = buffer.length;
  for (var o270 = 0; o270 < length && o196 < o190;) {
    o187[o196++] = buffer[o270++];
  }
}
/*Pass your samples into here!
Pack your samples as a one-dimenional array
With the channel samplea packed uniformly.
examples:
    mono - [left, left, left, left]
    stereo - [left, right, left, right, left, right, left, right]
*/
o248.prototype.o271 = function (buffer) {
  if (this.o256 == 0) {
    this.o263(buffer);
  }
  else if (this.o256 == 1) {
    this.o267(buffer);
  }
  else if (this.o256 == 2) {
    if (this.o272() || o186) {
      this.o267(buffer);
    }
    else if (this.o261) {
      this.o263(buffer);
    }
  }
}
/*Pass your samples into here if you don't want automatic callback calling:
Pack your samples as a one-dimenional array
With the channel samplea packed uniformly.
examples:
    mono - [left, left, left, left]
    stereo - [left, right, left, right, left, right, left, right]
Useful in preventing infinite recursion issues with calling writeAudio inside your callback.
*/
o248.prototype.o273 = function (buffer) {
  if (this.o256 == 0) {
    this.o264(buffer);
  }
  else if (this.o256 == 1) {
    this.o268(buffer);
  }
  else if (this.o256 == 2) {
    if (this.o272() || o186) {
      this.o268(buffer);
    }
    else if (this.o261) {
      this.o264(buffer);
    }
  }
}
//Developer can use this to see how many samples to write (example: minimum buffer allotment minus remaining samples left returned from this function to make sure maximum buffering is done...)
//If -1 is returned, then that means metric could not be done.
o248.prototype.o274 = function () {
  if (this.o256 == 0) {
    //mozAudio:
    return this.o275 - this.o258.o276();
  }
  else if (this.o256 == 1) {
    //WebKit Audio:
    return (((o277() * o195.o233) >> (this.o253 - 1)) << (this.o253 - 1)) + o196;
  }
  else if (this.o256 == 2) {
    if (this.o272() || o186) {
      //Webkit Audio / Flash Plugin Audio:
      return (((o277() * o195.o233) >> (this.o253 - 1)) << (this.o253 - 1)) + o196;
    }
    else if (this.o261) {
      //mozAudio:
      return this.o275 - this.o258.o276();
    }
  }
  //Default return:
  return 0;
}
o248.prototype.o265 = function () {
  //mozAudio:
  var o278 = o189 - this.o274();
  if (o278 > 0) {
    this.o266(this.o251(o278));
  }
}
o248.prototype.o269 = function () {
  //WebKit /Flash Audio:
  var o278 = o189 - this.o274();
  if (o278 > 0) {
    this.o268(this.o251(o278));
  }
}
//If you just want your callback called for any possible refill (Execution of callback is still conditional):
o248.prototype.o279 = function () {
  if (this.o256 == 0) {
    this.o265();
  }
  else if (this.o256 == 1) {
    this.o269();
  }
  else if (this.o256 == 2) {
    if (this.o272() || o186) {
      this.o269();
    }
    else if (this.o261) {
      this.o265();
    }
  }
}
//DO NOT CALL THIS, the lib calls this internally!
o248.prototype.o262 = function () {
  try {
    throw (new Error("Select initializeWebAudio case"));  // Line added for benchmarking.
    this.o280();
    if (o281.o282 == "Linux i686") {
      //Block out mozaudio usage for Linux Firefox due to moz bugs:
      throw(new Error(""));
    }
    this.o283();
  }
  catch (o83) {
    try {
      this.o284();
    }
    catch (o83) {
      try {
        this.o285();
      }
      catch (o83) {
        throw(new Error("Browser does not support real time audio output."));
      }
    }
  }
}
o248.prototype.o280 = function () {
  //mozAudio - Synchronous Audio API
  this.o258 = new o286();
  this.o258.o287(this.o253, o192);
  this.o275 = 0;
  var o288 = (this.o253 == 2) ? [0, 0] : [0];
  var o289 = 0;
  if (o281.o282 != "MacIntel" && o281.o282 != "MacPPC") {  //Mac OS X doesn't experience this moz-bug!
    while (this.o258.o276() == 0) {
      //Mozilla Audio Bugginess Workaround (Firefox freaks out if we don't give it a prebuffer under certain OSes):
      o289 += this.o258.o290(o288);
    }
    var o291 = o289 / this.o253;
    //Double the prebuffering for windows:
    for (var index = 0; index < o291; index++) {
      this.o275 += this.o258.o290(o288);
    }
  }
  this.o275 += o289;
  o189 += this.o275;
  this.o261 = true;
}
o248.prototype.o283 = function () {
  //Fill in our own buffering up to the minimum specified:
  this.o266(getFloat32(o189));
  this.o256 = 0;
}
o248.prototype.o284 = function () {
  if (o186) {
    o293(o191, o254);
    this.o256 = 1;
  }
  else {
    throw(new Error(""));
  }
}
o248.prototype.o285 = function () {
  var o294 = o295.o296("XAudioJS");
  if (o294 == null) {
    var o297 = this;
    var o298 = o295.o299("div");
    o298.o300("style", "position: fixed; bottom: 0px; right: 0px; margin: 0px; padding: 0px; border: none; width: 8px; height: 8px; overflow: hidden; z-index: -1000; ");
    var o301 = o295.o299("div");
    o301.o300("style", "position: static; border: none; width: 0px; height: 0px; visibility: hidden; margin: 8px; padding: 0px;");
    o301.o300("id", "XAudioJS");
    o298.o302(o301);
    o295.o303("body")[0].o302(o298);
    o304.o305(
      "XAudioJS.swf",
      "XAudioJS",
      "8",
      "8",
      "9.0.0",
      "",
      {},
      {"allowscriptaccess":"always"},
      {"style":"position: static; visibility: hidden; margin: 8px; padding: 0px; border: none"},
      function (o140) {
        if (o140.o306) {
          o297.o259 = o140.o307;
        }
        else {
          o297.o256 = 1;
        }
      }
    );
  }
  else {
    this.o259 = o294;
  }
  this.o256 = 2;
}
o248.prototype.o308 = function (o309) {
  if (o309 >= 0 && o309 <= 1) {
    o194 = o309;
    if (this.o272()) {
      this.o259.o308(o194);
    }
    if (this.o261) {
      this.o258.o252 = o194;
    }
  }
}
//Moz Audio Buffer Writing Handler:
o248.prototype.o266 = function (buffer) {
  var length = this.o257.length;
  if (length > 0) {
    var o310 = this.o258.o290(this.o257);
    this.o275 += o310;
    this.o257.splice(0, o310);
  }
  length = Math.o312(buffer.length, o190 - this.o275 + this.o258.o276());
  var o310 = this.o258.o290(buffer);
  this.o275 += o310;
  for (var index = 0; length > o310; --length) {
    //Moz Audio wants us saving the tail:
    this.o257.push(buffer[index++]);
  }
}
//Checks to see if the NPAPI Adobe Flash bridge is ready yet:
o248.prototype.o272 = function () {
  if (!this.o260 && this.o259 && this.o259.o230) {
    this.o260 = true;
    this.o259.o230(this.o253, o194);
    o293(44100, o254);
  }
  return this.o260;
}
/////////END LIB
function getFloat32(o313) {
  try {
    return new Float32Array(o313);
  }
  catch (o83) {
    return new Array(o313);
  }
}
function o315(o313) {
  try {
    var o316 = new Float32Array(o313);
  }
  catch (o83) {
    var o316 = new Array(o313);
    var o317 = 0;
    do {
      o316[o317] = 0;
    } while (++o317 < o313);
  }
  return o316;
}
//Flash NPAPI Event Handler:
var o254 = 2048;      //Has to be between 2048 and 4096 (If over, then samples are ignored, if under then silence is added).
var o318 = null;
function o319() {    //The callback that flash calls...
  o320();
  return o318();
}
function o321() {  //Convert the arrays to one long string for speed.
  var o322 = "";
  var o323 = "";
  for (var index = 0; index < o254 && o197 != o198; ++index) {
    //Sanitize the buffer:
    o322 += String.fromCharCode(((Math.o312(Math.o324(o188[o197++] + 1, 0), 2) * 0x3FFF) | 0) + 0x3000);
    o323 += String.fromCharCode(((Math.o312(Math.o324(o188[o197++] + 1, 0), 2) * 0x3FFF) | 0) + 0x3000);
    if (o197 == o199) {
      o197 = 0;
    }
  }
  return o322 + o323;
}
function o325() {  //Convert the array to one long string for speed.
  var o326 = "";
  for (var index = 0; index < o254 && o197 != o198; ++index) {
    //Sanitize the buffer:
    o326 += String.fromCharCode(((Math.o312(Math.o324(o188[o197++] + 1, 0), 2) * 0x3FFF) | 0) + 0x3000);
    if (o197 == o199) {
      o197 = 0;
    }
  }
  return o326;
}
//Audio API Event Handler:
var o183 = null;
var o184 = null;
var o185 = null;
var o186 = false;
var o187 = [];
var o188 = [];
var o189 = 15000;
var o190 = 25000;
var o191 = 44100;
var o192 = 0;
var o193 = false;
var o194 = 1;
var o195 = null;
var o196 = 0;
var o197 = 0;
var o198 = 0;
var o199 = 2;
function o327(o140) {    //Web Audio API callback...
  var index = 0;
  var o328 = o140.o141.o155(0);
  var o329 = o140.o141.o155(1);
  o320();
  if (!o193) {
    //STEREO:
    while (index < o254 && o197 != o198) {
      o328[index] = o188[o197++] * o194;
      o329[index++] = o188[o197++] * o194;
      if (o197 == o199) {
        o197 = 0;
      }
    }
  }
  else {
    //MONO:
    while (index < o254 && o197 != o198) {
      o329[index] = o328[index] = o188[o197++] * o194;
      ++index;
      if (o197 == o199) {
        o197 = 0;
      }
    }
  }
  //Pad with silence if we're underrunning:
  while (index < o254) {
    o329[index] = o328[index] = 0;
    ++index;
  }
}
function o320() {
  if (o196 > 0) {
    //Resample a chunk of audio:
    var o330 = o195.o231(o331());
    var o332 = o195.o141;
    for (var o333 = 0; o333 < o330; ++o333) {
      o188[o198++] = o332[o333];
      if (o198 == o199) {
        o198 = 0;
      }
      if (o197 == o198) {
        ++o197;
        if (o197 == o199) {
          o197 = 0;
        }
      }
    }
    o196 = 0;
  }
}
function o277() {
  return ((o197 <= o198) ? 0 : o199) + o198 - o197;
}
function o331() {
  //Typed array and normal array buffer section referencing:
  try {
    return o187.subarray(0, o196);
  }
  catch (o83) {
    try {
      //Regular array pass:
      o187.length = o196;
      return o187;
    }
    catch (o83) {
      //Nightly Firefox 4 used to have the subarray function named as slice:
      return o187.slice(0, o196);
    }
  }
}
//Initialize WebKit Audio /Flash Audio Buffer:
function o293(o334, o335) {
  o187 = getFloat32(o190);
  o196 = o190;
  o197 = 0;
  o198 = 0;
  o199 = Math.o324(o190 * Math.ceil(o192 / o334), o254) << 1;
  if (o193) {
    //MONO Handling:
    o188 = o315(o199);
    o195 = new o225(o192, o334, 1, o199, true);
    o318 = o325;
  }
  else {
    //STEREO Handling:
    o199  <<= 1;
    o188 = o315(o199);
    o195 = new o225(o192, o334, 2, o199, true);
    o318 = o321;
  }
}
//Initialize WebKit Audio:
(function () {
  if (!o186) {
    try {
      // The following line was modified for benchmarking:
      o183 = new o142();              //Create a system audio context.
    }
    catch (o83) {
      try {
        o183 = new o337();                //Create a system audio context.
      }
      catch (o83) {
        return;
      }
    }
    try {
      o185 = o183.o143();            //We need to create a false input to get the chain started.
      o185.o338 = false;  //Keep this alive forever (Event handler will know when to ouput.)
      o192 = o191 = o183.o145;
      o185.buffer = o183.o117(1, 1, o191);  //Create a zero'd input buffer for the input to be valid.
      o184 = o183.o152(o254, 1, 2);      //Create 2 outputs and ignore the input buffer (Just copy buffer 1 over if mono)
      o184.o138 = o327;                //Connect the audio processing event to a handling function so we can manipulate output
      o185.o139(o184);                        //Send and chain the input to the audio manipulation.
      o184.o139(o183.o146);              //Send and chain the output of the audio manipulation to the system audio output.
      o185.o144(0);                            //Start the loop!
    }
    catch (o83) {
      return;
    }
    o186 = true;
  }
})();

// End of js/other/XAudioServer.js file.

// Start of js/other/resize.js file.

//JavaScript Image Resizer (c) 2012 - Grant Galitz
function o339(o340, o341, o342, o343, o344, o345) {
  this.o340 = Math.abs(parseInt(o340) || 0);
  this.o341 = Math.abs(parseInt(o341) || 0);
  this.o342 = Math.abs(parseInt(o342) || 0);
  this.o343 = Math.abs(parseInt(o343) || 0);
  this.o348 = (!!o344) ? 4 : 3;
  this.o345 = !!o345;
  this.o349 = this.o342 * this.o348;
  this.o350 = this.o340 * this.o348;
  this.o351 = this.o341 * this.o348;
  this.o352 = this.o349 * this.o341;
  this.o353 = this.o349 * this.o343;
  this.o230();
}
o339.prototype.o230 = function () {
  //Perform some checks:
  if (this.o340 > 0 && this.o341 > 0 && this.o342 > 0 && this.o343 > 0) {
    if (this.o340 == this.o342) {
      //Bypass the width resizer pass:
      this.o354 = this.o355;
    }
    else {
      //Setup the width resizer pass:
      this.o356 = this.o340 / this.o342;
      if (this.o356 < 1 && this.o345) {
        this.o357(true);
        this.o354 = (this.o348 == 4) ? this.o358 : this.o359;
      }
      else {
        this.o357(false);
        this.o354 = (this.o348 == 4) ? this.o360 : this.o361;
      }
    }
    if (this.o341 == this.o343) {
      //Bypass the height resizer pass:
      this.o362 = this.o355;
    }
    else {
      //Setup the height resizer pass:
      this.o363 = this.o341 / this.o343;
      if (this.o363 < 1 && this.o345) {
        this.o364(true);
        this.o362 = this.o365;
      }
      else {
        this.o364(false);
        this.o362 = (this.o348 == 4) ? this.o366 : this.o367;
      }
    }
  }
  else {
    throw(new Error("Invalid settings specified for the resizer."));
  }
}
o339.prototype.o361 = function (buffer) {
  var o233 = this.o356;
  var o368 = 0;
  var o369 = 0;
  var o370 = 0;
  var o371 = 0;
  var o372 = 0;
  var o373 = 0;
  var o374 = 0;
  var o375 = this.o350 - 2;
  var o376 = this.o349 - 2;
  var o377 = this.o378;
  var o141 = this.o379;
  do {
    for (o372 = 0; o372 < this.o351;) {
      o377[o372++] = 0;
      o377[o372++] = 0;
      o377[o372++] = 0;
    }
    o368 = o233;
    do {
      o369 = 1 + o370 - o371;
      if (o368 >= o369) {
        for (o372 = 0, o373 = o370; o372 < this.o351; o373 += o375) {
          o377[o372++] += buffer[o373++] * o369;
          o377[o372++] += buffer[o373++] * o369;
          o377[o372++] += buffer[o373] * o369;
        }
        o371 = o370 = o370 + 3;
        o368 -= o369;
      }
      else {
        for (o372 = 0, o373 = o370; o372 < this.o351; o373 += o375) {
          o377[o372++] += buffer[o373++] * o368;
          o377[o372++] += buffer[o373++] * o368;
          o377[o372++] += buffer[o373] * o368;
        }
        o371 += o368;
        break;
      }
    } while (o368 > 0 && o370 < this.o350);
    for (o372 = 0, o373 = o374; o372 < this.o351; o373 += o376) {
      o141[o373++] = o377[o372++] / o233;
      o141[o373++] = o377[o372++] / o233;
      o141[o373] = o377[o372++] / o233;
    }
    o374 += 3;
  } while (o374 < this.o349);
  return o141;
}
o339.prototype.o359 = function (buffer) {
  var o233 = (this.o340 - 1) / this.o342;
  var o368 = 0;
  var o380 = 0;
  var o373 = 0;
  var o141 = this.o379;
  for (var o381 = 0; o381 < this.o349; o381 += 3, o368 += o233) {
    //Calculate weightings:
    o382 = o368 % 1;
    o383 = 1 - o382;
    //Interpolate:
    for (o380 = o381, o373 = Math.floor(o368) * 3; o380 < this.o352; o373 += this.o350, o380 += this.o349) {
      o141[o380] = (buffer[o373] * o383) + (buffer[o373 + 3] * o382);
      o141[o380 + 1] = (buffer[o373 + 1] * o383) + (buffer[o373 + 4] * o382);
      o141[o380 + 2] = (buffer[o373 + 2] * o383) + (buffer[o373 + 5] * o382);
    }
  }
  return o141;
}
o339.prototype.o360 = function (buffer) {
  var o233 = this.o356;
  var o368 = 0;
  var o369 = 0;
  var o370 = 0;
  var o371 = 0;
  var o372 = 0;
  var o373 = 0;
  var o374 = 0;
  var o375 = this.o350 - 3;
  var o376 = this.o349 - 3;
  var o377 = this.o378;
  var o141 = this.o379;
  do {
    for (o372 = 0; o372 < this.o351;) {
      o377[o372++] = 0;
      o377[o372++] = 0;
      o377[o372++] = 0;
      o377[o372++] = 0;
    }
    o368 = o233;
    do {
      o369 = 1 + o370 - o371;
      if (o368 >= o369) {
        for (o372 = 0, o373 = o370; o372 < this.o351; o373 += o375) {
          o377[o372++] += buffer[o373++] * o369;
          o377[o372++] += buffer[o373++] * o369;
          o377[o372++] += buffer[o373++] * o369;
          o377[o372++] += buffer[o373] * o369;
        }
        o371 = o370 = o370 + 4;
        o368 -= o369;
      }
      else {
        for (o372 = 0, o373 = o370; o372 < this.o351; o373 += o375) {
          o377[o372++] += buffer[o373++] * o368;
          o377[o372++] += buffer[o373++] * o368;
          o377[o372++] += buffer[o373++] * o368;
          o377[o372++] += buffer[o373] * o368;
        }
        o371 += o368;
        break;
      }
    } while (o368 > 0 && o370 < this.o350);
    for (o372 = 0, o373 = o374; o372 < this.o351; o373 += o376) {
      o141[o373++] = o377[o372++] / o233;
      o141[o373++] = o377[o372++] / o233;
      o141[o373++] = o377[o372++] / o233;
      o141[o373] = o377[o372++] / o233;
    }
    o374 += 4;
  } while (o374 < this.o349);
  return o141;
}
o339.prototype.o358 = function (buffer) {
  var o233 = (this.o340 - 1) / this.o342;
  var o368 = 0;
  var o380 = 0;
  var o373 = 0;
  var o141 = this.o379;
  for (var o381 = 0; o381 < this.o349; o381 += 4, o368 += o233) {
    //Calculate weightings:
    o382 = o368 % 1;
    o383 = 1 - o382;
    //Interpolate:
    for (o380 = o381, o373 = Math.floor(o368) * 4; o380 < this.o352; o373 += this.o350, o380 += this.o349) {
      o141[o380] = (buffer[o373] * o383) + (buffer[o373 + 4] * o382);
      o141[o380 + 1] = (buffer[o373 + 1] * o383) + (buffer[o373 + 5] * o382);
      o141[o380 + 2] = (buffer[o373 + 2] * o383) + (buffer[o373 + 6] * o382);
      o141[o380 + 3] = (buffer[o373 + 3] * o383) + (buffer[o373 + 7] * o382);
    }
  }
  return o141;
}
o339.prototype.o367 = function (buffer) {
  var o233 = this.o363;
  var o368 = 0;
  var o369 = 0;
  var o370 = 0;
  var o371 = 0;
  var o373 = 0;
  var o374 = 0;
  var o377 = this.o384;
  var o141 = this.o385;
  do {
    for (o373 = 0; o373 < this.o349;) {
      o377[o373++] = 0;
      o377[o373++] = 0;
      o377[o373++] = 0;
    }
    o368 = o233;
    do {
      o369 = 1 + o370 - o371;
      if (o368 >= o369) {
        for (o373 = 0; o373 < this.o349;) {
          o377[o373++] += buffer[o370++] * o369;
          o377[o373++] += buffer[o370++] * o369;
          o377[o373++] += buffer[o370++] * o369;
        }
        o371 = o370;
        o368 -= o369;
      }
      else {
        for (o373 = 0, o369 = o370; o373 < this.o349;) {
          o377[o373++] += buffer[o369++] * o368;
          o377[o373++] += buffer[o369++] * o368;
          o377[o373++] += buffer[o369++] * o368;
        }
        o371 += o368;
        break;
      }
    } while (o368 > 0 && o370 < this.o352);
    for (o373 = 0; o373 < this.o349;) {
      o141[o374++] = Math.o386(o377[o373++] / o233);
      o141[o374++] = Math.o386(o377[o373++] / o233);
      o141[o374++] = Math.o386(o377[o373++] / o233);
    }
  } while (o374 < this.o353);
  return o141;
}
o339.prototype.o365 = function (buffer) {
  var o233 = (this.o341 - 1) / this.o343;
  var o368 = 0;
  var o380 = 0;
  var o373 = 0;
  var o387 = 0;
  var o388 = 0;
  var o141 = this.o385;
  do {
    //Calculate weightings:
    o382 = o368 % 1;
    o383 = 1 - o382;
    //Interpolate:
    o387 = Math.floor(o368) * this.o349;
    o388 = o387 + this.o349;
    for (o373 = 0; o373 < this.o349; ++o373) {
      o141[o380++] = (buffer[o387 + o373] * o383) + (buffer[o388 + o373] * o382);
    }
    o368 += o233;
  } while (o380 < this.o353);
  return o141;
}
o339.prototype.o366 = function (buffer) {
  var o233 = this.o363;
  var o368 = 0;
  var o369 = 0;
  var o370 = 0;
  var o371 = 0;
  var o373 = 0;
  var o374 = 0;
  var o377 = this.o384;
  var o141 = this.o385;
  do {
    for (o373 = 0; o373 < this.o349;) {
      o377[o373++] = 0;
      o377[o373++] = 0;
      o377[o373++] = 0;
      o377[o373++] = 0;
    }
    o368 = o233;
    do {
      o369 = 1 + o370 - o371;
      if (o368 >= o369) {
        for (o373 = 0; o373 < this.o349;) {
          o377[o373++] += buffer[o370++] * o369;
          o377[o373++] += buffer[o370++] * o369;
          o377[o373++] += buffer[o370++] * o369;
          o377[o373++] += buffer[o370++] * o369;
        }
        o371 = o370;
        o368 -= o369;
      }
      else {
        for (o373 = 0, o369 = o370; o373 < this.o349;) {
          o377[o373++] += buffer[o369++] * o368;
          o377[o373++] += buffer[o369++] * o368;
          o377[o373++] += buffer[o369++] * o368;
          o377[o373++] += buffer[o369++] * o368;
        }
        o371 += o368;
        break;
      }
    } while (o368 > 0 && o370 < this.o352);
    for (o373 = 0; o373 < this.o349;) {
      o141[o374++] = Math.o386(o377[o373++] / o233);
      o141[o374++] = Math.o386(o377[o373++] / o233);
      o141[o374++] = Math.o386(o377[o373++] / o233);
      o141[o374++] = Math.o386(o377[o373++] / o233);
    }
  } while (o374 < this.o353);
  return o141;
}
o339.prototype.o389 = function (buffer) {
  var o233 = (this.o341 - 1) / this.o343;
  var o368 = 0;
  var o380 = 0;
  var o373 = 0;
  var o141 = this.o385;
  while (o373 < this.o353) {
    //Calculate weightings:
    o382 = o368 % 1;
    o383 = 1 - o382;
    //Interpolate:
    for (o373 = Math.floor(o368) * 4; o373 < this.o349; o373 += 4) {
      o141[o380++] = (buffer[o373] * o383) + (buffer[o373 + 4] * o382);
      o141[o380++] = (buffer[o373 + 1] * o383) + (buffer[o373 + 5] * o382);
      o141[o380++] = (buffer[o373 + 2] * o383) + (buffer[o373 + 6] * o382);
      o141[o380++] = (buffer[o373 + 3] * o383) + (buffer[o373 + 7] * o382);
    }
    o368 += o233;
  }
  return o141;
}
o339.prototype.o390 = function (buffer) {
  return this.o362(this.o354(buffer));
}
o339.prototype.o355 = function (buffer) {
  //Just return the buffer passsed:
  return buffer;
}
o339.prototype.o357 = function (o391) {
  //Initialize the internal width pass buffers:
  this.o379 = this.o392(this.o352);
  if (!o391) {
    this.o378 = this.o392(this.o351);
  }
}
o339.prototype.o364 = function (o391) {
  //Initialize the internal height pass buffers:
  this.o385 = this.o393(this.o353);
  if (!o391) {
    this.o384 = this.o392(this.o349);
  }
}
o339.prototype.o392 = function (o394) {
  //Generate a float32 typed array buffer:
  try {
    return new Float32Array(o394);
  }
  catch (o83) {
    return [];
  }
}
o339.prototype.o393 = function (o394) {
  //Generate a uint8 typed array buffer:
  try {
    return this.o395(new Uint8Array(o394));
  }
  catch (o83) {
    return [];
  }
}
o339.prototype.o395 = function (o396) {
  o396[0] = -1;
  o396[0] >>= 0;
  if (o396[0] != 0xFF) {
    return [];
  }
  else {
    return o396;
  }
}

// End of js/other/resize.js file.

// Remaining files are in gbemu-part2.js, since they run in strict mode.

//////////////////////////////////////////////////////////////////
// gbemu-part2.js
//////////////////////////////////////////////////////////////////

// Portions copyright 2013 Google, Inc

// Copyright (C) 2010 - 2012 Grant Galitz
// This program is free software; you can redistribute it and/or modify
// it under the terms of the GNU General Public License version 2 as
// published by the Free Software Foundation.
// The full license is available at http://www.gnu.org/licenses/gpl.html
// This program is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
// See the GNU General Public License for more details.

// The code has been adapted for use as a benchmark by Google.

// Previous files are in gbemu-part1.js, since they need to run in sloppy mode.

// Start of js/GameBoyCore.js file.

/*
 * JavaScript GameBoy Color Emulator
 * Copyright (C) 2010 - 2012 Grant Galitz
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * version 2 as published by the Free Software Foundation.
 * The full license is available at http://www.gnu.org/licenses/gpl.html
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 */
function o397(o398, o399) {
  //Params, etc...
  this.o398 = o398;            //Canvas DOM object for drawing out the graphics to.
  this.o400 = null;          // LCD Context
  this.o399 = o399;          //The game's ROM.
  //CPU Registers and Flags:
  this.o163 = 0x01;             //Register A (Accumulator)
  this.o401 = true;               //Register F  - Result was zero
  this.o402 = false;            //Register F  - Subtraction was executed
  this.o403 = true;            //Register F  - Half carry or half borrow
  this.o404 = true;              //Register F  - Carry or borrow
  this.o164 = 0x00;            //Register B
  this.o165 = 0x13;            //Register C
  this.o405 = 0x00;            //Register D
  this.o166 = 0xD8;            //Register E
  this.o168 = 0x014D;          //Registers H and L combined
  this.o170 = 0xFFFE;          //Stack Pointer
  this.o169 = 0x0100;        //Program Counter
  //Some CPU Emulation State Variables:
  this.o406 = 0;          //Relative CPU clocking to speed set, rounded appropriately.
  this.o407 = 0;        //Relative CPU clocking to speed set base.
  this.o408 = 0;        //Relative CPU clocking to speed set, the directly used value.
  this.o409 = 0;      //Clocking per iteration rounding catch.
  this.o410 = 0;    //CPU clocks per iteration at 1x speed.
  this.o411 = 0;          //HALT clocking overrun carry over.
  this.o412 = true;          //Whether we're in the GBC boot ROM.
  this.o413 = false;          //Updated upon ROM loading...
  this.o414 = false;        //Did we boot to the GBC boot ROM?
  this.o415 = false;              //Has the CPU been suspended until the next interrupt?
  this.o416 = false;        //Did we trip the DMG Halt bug?
  this.o417 = 3;            //Has the emulation been paused or a frame has ended?
  this.o418 = true;              //Are interrupts enabled?
  this.o419 = 0;          //CPU IRQ assertion.
  this.o420 = 0;        //IF Register
  this.o421 = 0;          //IE Register
  this.o422 = false;          //HDMA Transfer Flag - GBC only
  this.o423 = 0;              //The number of clock cycles emulated.
  this.o424 = 0;        //GBC double speed clocking shifter.
  this.o425 = 0xFF;              //Joypad State (two four-bit states actually)
  this.o426 = false;          //CPU STOP status.
  //Main RAM, MBC RAM, GBC Main RAM, VRAM, etc.
  this.o427 = [];            //Array of functions mapped to read back memory
  this.o428 = [];            //Array of functions mapped to write to memory
  this.o429 = [];          //Array of functions mapped to read back 0xFFXX memory
  this.o430 = [];          //Array of functions mapped to write to 0xFFXX memory
  this.o173 = [];                //The full ROM file dumped to an array.
  this.o175 = [];              //Main Core Memory
  this.o177 = [];              //Switchable RAM (Used by games for more RAM) for the main memory range 0xA000 - 0xC000.
  this.o431 = [];                //Extra VRAM bank for GBC.
  this.o432 = [];            //GBC main RAM Banks
  this.o433 = false;            //MBC1 Type (4/32, 16/8)
  this.o434 = false;      //MBC RAM Access Control.
  this.o435 = 0;          //MBC Currently Indexed RAM Bank
  this.o436 = -0xA000;    //MBC Position Adder;
  this.o437 = false;              //GameBoy Color detection.
  this.o438 = 1;            //Currently Switched GameBoy Color ram bank
  this.o439 = -0xD000;      //GBC RAM offset from address start.
  this.o440 = -0xF000;    //GBC RAM (ECHO mirroring) offset from address start.
  this.o441 = [0, 1, 2, 4, 16];      //Used to map the RAM banks to maximum size the MBC used can do.
  this.o442 = 0;            //Offset of the ROM bank switching.
  this.o443 = 0;          //The parsed current ROM bank selection.
  this.o444 = 0;            //Cartridge Type
  this.name = "";                //Name of the game
  this.o445 = "";              //Game code (Suffix for older games)
  this.o446 = false;          //A boolean to see if this was loaded in as a save state.
  this.o447 = "";        //When loaded in as a save state, this will not be empty.
  this.o448 = 0;            //Tracker for STAT triggering.
  this.o449 = 0;              //The scan line mode (for lines 1-144 it's 2-3-0, for 145-154 it's 1)
  this.o450 = 252;            //Mode 3 extra clocking counter (Depends on how many sprites are on the current line.).
  this.o451 = false;      //Should we trigger an interrupt if LY==LYC?
  this.o452 = false;        //Should we trigger an interrupt if in mode 2?
  this.o453 = false;        //Should we trigger an interrupt if in mode 1?
  this.o454 = false;        //Should we trigger an interrupt if in mode 0?
  this.o455 = false;            //Is the emulated LCD controller on?
  this.o456 = [];            //Array of functions to handle each scan line we do (onscreen + offscreen)
  this.o457 = [function (o458) { 
        "use strict";
    //Array of line 0 function to handle the LCD controller when it's off (Do nothing!).
  }];
  this.o459 = null;            //Pointer to either LINECONTROL or DISPLAYOFFCONTROL.
  this.o460();        //Compile the LCD controller functions.
  //RTC (Real Time Clock for MBC3):
  this.o461 = false;
  this.o462 = 0;          //RTC latched seconds.
  this.o463 = 0;          //RTC latched minutes.
  this.o464 = 0;            //RTC latched hours.
  this.o465 = 0;            //RTC latched lower 8-bits of the day counter.
  this.o466 = 0;            //RTC latched high-bit of the day counter.
  this.o467 = 0;            //RTC seconds counter.
  this.o468 = 0;            //RTC minutes counter.
  this.o469 = 0;              //RTC hours counter.
  this.o470 = 0;              //RTC days counter.
  this.o471 = false;        //Did the RTC overflow and wrap the day counter?
  this.o472 = false;            //Is the RTC allowed to clock up?
  //Gyro:
  this.o473 = 127;
  this.o474 = 127;
  this.o475 = 127;
  this.o476 = 127;
  //Sound variables:
  this.o477 = null;            //XAudioJS handle
  this.o478 = 0;            //Length of the sound buffers.
  this.o479 = 0;              //Length of the sound buffer for one channel.
  this.o480 = [                //Map the duty values given to ones we can work with.
    [false, false, false, false, false, false, false, true],
    [true, false, false, false, false, false, false, true],
    [true, false, false, false, false, true, true, true],
    [false, true, true, true, true, true, true, false]
  ];
  this.o481 = [];            //The audio buffer we're working on.
  this.o482 = 0;          //Buffer maintenance metric.
  this.o483 = null;
  this.o484 = null;
  this.o485 = null;
  this.o486();
  this.o487 = false;      //As its name implies
  this.o488 = null;          //Channel 3 adjusted sample buffer.
  //Vin Shit:
  this.o489 = 8;    //Computed post-mixing volume.
  this.o490 = 8;    //Computed post-mixing volume.
  //Channel paths enabled:
  this.o491 = false;
  this.o492 = false;
  this.o493 = false;
  this.o494 = false;
  this.o495 = false;
  this.o496 = false;
  this.o497 = false;
  this.o498 = false;
  //Channel output level caches:
  this.o499 = 0;
  this.o500 = 0;
  this.o501 = 0;
  this.o502 = 0;
  this.o503 = 0;
  this.o504 = 0;
  this.o505 = 0;
  this.o506 = 0;
  this.o507 = 0;
  this.o508 = 0;
  this.o509 = 0;
  this.o510 = 0;
  this.o511 = 0;
  this.o512 = 0;
  this.o513 = 0;
  this.o514 = 0;
  this.o515 = 0;
  this.o516 = 0;
  this.o517 = 0;
  this.o518 = 0;
  this.o519 = 0;
  //Pre-multipliers to cache some calculations:
  this.o520();
  this.o521 = 0;        //Premultiplier for audio samples per instruction.
  //Audio generation counters:
  this.o522 = 0;        //Used to sample the audio system every x CPU instructions.
  this.o523 = 0;        //Used to keep alignment on audio generation.
  this.o524 = 0;          //Used to keep alignment on the number of samples to output (Realign from counter alias).
  //Timing Variables
  this.o525 = 0;        //Times for how many instructions to execute before ending the loop.
  this.o526 = 56;          //DIV Ticks Counter (Invisible lower 8-bit)
  this.o527 = 60;          //Counter for how many instructions have been executed on a scanline so far.
  this.o528 = 0;        //Counter for the TIMA timer.
  this.o529 = false;      //Is TIMA enabled?
  this.o530 = 1024;        //Timer Max Ticks
  this.o531 = 0;        //Serial IRQ Timer
  this.o532 = 0;      //Serial Transfer Shift Timer
  this.o533 = 0;  //Serial Transfer Shift Timer Refill
  this.o534 = 0;      //Are the interrupts on queue to be enabled?
  var o535 = o158();     // The line is changed for benchmarking.
  this.o536 = o535.o159();//The last time we iterated the main loop.
  o535 = o158();         // The line is changed for benchmarking.
  this.o537 = o535.o159();
  this.o538 = 0;
  this.o539 = 0;      //Actual scan line...
  this.o540 = 0;    //Last rendered scan line...
  this.o541 = 0;
  this.o542 = 0;
  this.o543 = 0;      //Post-Halt clocking.
  //ROM Cartridge Components:
  this.o544 = false;          //Does the cartridge use MBC1?
  this.o545 = false;          //Does the cartridge use MBC2?
  this.o546 = false;          //Does the cartridge use MBC3?
  this.o547 = false;          //Does the cartridge use MBC5?
  this.o548 = false;          //Does the cartridge use MBC7?
  this.o549 = false;          //Does the cartridge use save RAM?
  this.o550 = false;        //...
  this.o551 = false;        //Does the cartridge use the RUMBLE addressing (modified MBC5)?
  this.o552 = false;        //Is the cartridge actually a GameBoy Camera?
  this.o553 = false;        //Does the cartridge use TAMA5? (Tamagotchi Cartridge)
  this.o554 = false;          //Does the cartridge use HuC3 (Hudson Soft / modified MBC3)?
  this.o555 = false;          //Does the cartridge use HuC1 (Hudson Soft / modified MBC1)?
  this.o556 = false;        //Does the cartridge have an RTC?
  this.o557 = [          // 1 Bank = 16 KBytes = 256 Kbits
    2, 4, 8, 16, 32, 64, 128, 256, 512
  ];
  this.o557[0x52] = 72;
  this.o557[0x53] = 80;
  this.o557[0x54] = 96;
  this.o558 = 0;          //How many RAM banks were actually allocated?
  ////Graphics Variables
  this.o559 = 0;          //Current VRAM bank for GBC.
  this.o560 = 0;          //Register SCX (X-Scroll)
  this.o561 = 0;          //Register SCY (Y-Scroll)
  this.o562 = false;      //Is the windows enabled?
  this.o563 = false;        //Are sprites enabled?
  this.o564 = true;    //Are we doing 8x8 or 8x16 sprites?
  this.o565 = true;          //Is the BG enabled?
  this.o566 = true;      //Can we flag the BG for priority over sprites?
  this.o567 = 0;    //The current bank of the character map the window uses.
  this.o568 = 0;  //The current bank of the character map the BG uses.
  this.o569 = 0x80;  //Fast mapping of the tile numbering/
  this.o570 = 0;            //Current Y offset of the window.
  this.o571 = 0;            //Current X offset of the window.
  this.o572 = 0;            //To prevent the repeating of drawing a blank screen.
  this.o573 = false;          //Throttle how many draws we can do to once per iteration.
  this.o574 = -1;      //mid-scanline rendering offset.
  this.o575 = 0;            //track the x-coord limit for line rendering (mid-scanline usage).
  this.o576 = 0;            //The x-coord we left off at for mid-scanline rendering.
  //BG Tile Pointer Caches:
  this.o577 = null;
  this.o578 = null;
  this.o579 = null;
  //Tile Data Cache:
  this.o580 = null;
  //Palettes:
  this.o581 = [0xEFFFDE, 0xADD794, 0x529273, 0x183442];      //"Classic" GameBoy palette colors.
  this.o582 = null;
  this.o583 = null;
  this.o584 = null;
  this.o585 = null;
  this.o586 = null;
  this.o587 = null;
  this.o588 = null;
  this.o589 = null;
  this.o590 = null;
  this.o591 = null;
  this.o592 = null;
  this.o593 = null;
  this.o594 = this.o595;
  this.o596 = this.o597;
  this.o598 = false;
  this.o599 = null;      //Reference to the BG rendering function.
  this.o600 = null;    //Reference to the window rendering function.
  this.o601 = null;    //Reference to the OAM rendering function.
  this.o602 = [];        //The internal frame-buffer.
  this.o603 = null;      //The secondary gfx buffer that holds the converted RGBA values.
  this.o604 = null;      //imageData handle
  this.o605 = 0;        //Temp variable for holding the current working framebuffer offset.
  //Variables used for scaling in JS:
  this.o606 = this.o607 = 160;
  this.o608 = this.o609 = 144;
  this.o610 = this.o606 * this.o608 * 4;
  //Initialize the white noise cache tables ahead of time:
  this.o611();
}

// Start of code changed for benchmarking (removed ROM):
o397.prototype.o612 = [];
o397.prototype.o613 = [];
// End of code changed for benchmarking.

o397.prototype.o614 = [  //Dump of the post-BOOT I/O register state (From gambatte):
  0x0F, 0x00, 0x7C, 0xFF, 0x00, 0x00, 0x00, 0xF8,   0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x01,
  0x80, 0xBF, 0xF3, 0xFF, 0xBF, 0xFF, 0x3F, 0x00,   0xFF, 0xBF, 0x7F, 0xFF, 0x9F, 0xFF, 0xBF, 0xFF,
  0xFF, 0x00, 0x00, 0xBF, 0x77, 0xF3, 0xF1, 0xFF,   0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
  0x00, 0xFF, 0x00, 0xFF, 0x00, 0xFF, 0x00, 0xFF,   0x00, 0xFF, 0x00, 0xFF, 0x00, 0xFF, 0x00, 0xFF,
  0x91, 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFC,   0x00, 0x00, 0x00, 0x00, 0xFF, 0x7E, 0xFF, 0xFE,
  0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x3E, 0xFF,   0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
  0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,   0xC0, 0xFF, 0xC1, 0x00, 0xFE, 0xFF, 0xFF, 0xFF,
  0xF8, 0xFF, 0x00, 0x00, 0x00, 0x8F, 0x00, 0x00,   0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
  0xCE, 0xED, 0x66, 0x66, 0xCC, 0x0D, 0x00, 0x0B,   0x03, 0x73, 0x00, 0x83, 0x00, 0x0C, 0x00, 0x0D,
  0x00, 0x08, 0x11, 0x1F, 0x88, 0x89, 0x00, 0x0E,   0xDC, 0xCC, 0x6E, 0xE6, 0xDD, 0xDD, 0xD9, 0x99,
  0xBB, 0xBB, 0x67, 0x63, 0x6E, 0x0E, 0xEC, 0xCC,   0xDD, 0xDC, 0x99, 0x9F, 0xBB, 0xB9, 0x33, 0x3E,
  0x45, 0xEC, 0x52, 0xFA, 0x08, 0xB7, 0x07, 0x5D,   0x01, 0xFD, 0xC0, 0xFF, 0x08, 0xFC, 0x00, 0xE5,
  0x0B, 0xF8, 0xC2, 0xCE, 0xF4, 0xF9, 0x0F, 0x7F,   0x45, 0x6D, 0x3D, 0xFE, 0x46, 0x97, 0x33, 0x5E,
  0x08, 0xEF, 0xF1, 0xFF, 0x86, 0x83, 0x24, 0x74,   0x12, 0xFC, 0x00, 0x9F, 0xB4, 0xB7, 0x06, 0xD5,
  0xD0, 0x7A, 0x00, 0x9E, 0x04, 0x5F, 0x41, 0x2F,   0x1D, 0x77, 0x36, 0x75, 0x81, 0xAA, 0x70, 0x3A,
  0x98, 0xD1, 0x71, 0x02, 0x4D, 0x01, 0xC1, 0xFF,   0x0D, 0x00, 0xD3, 0x05, 0xF9, 0x00, 0x0B, 0x00
];
o397.prototype.o615 = [
  //NOP
  //#0x00:
  function (o458) {"use strict";
    //Do Nothing...
  },
  //LD BC, nn
  //#0x01:
  function (o458) {"use strict";
    o458.o165 = o458.o427[o458.o169](o458, o458.o169);
    o458.o164 = o458.o616((o458.o169 + 1) & 0xFFFF);
    o458.o169 = (o458.o169 + 2) & 0xFFFF;
  },
  //LD (BC), A
  //#0x02:
  function (o458) {"use strict";
    o458.o617((o458.o164 << 8) | o458.o165, o458.o163);
  },
  //INC BC
  //#0x03:
  function (o458) {"use strict";
    var o618 = ((o458.o164 << 8) | o458.o165) + 1;
    o458.o164 = (o618 >> 8) & 0xFF;
    o458.o165 = o618 & 0xFF;
  },
  //INC B
  //#0x04:
  function (o458) {"use strict";
    o458.o164 = (o458.o164 + 1) & 0xFF;
    o458.o401 = (o458.o164 == 0);
    o458.o403 = ((o458.o164 & 0xF) == 0);
    o458.o402 = false;
  },
  //DEC B
  //#0x05:
  function (o458) {"use strict";
    o458.o164 = (o458.o164 - 1) & 0xFF;
    o458.o401 = (o458.o164 == 0);
    o458.o403 = ((o458.o164 & 0xF) == 0xF);
    o458.o402 = true;
  },
  //LD B, n
  //#0x06:
  function (o458) {"use strict";
    o458.o164 = o458.o427[o458.o169](o458, o458.o169);
    o458.o169 = (o458.o169 + 1) & 0xFFFF;
  },
  //RLCA
  //#0x07:
  function (o458) {"use strict";
    o458.o404 = (o458.o163 > 0x7F);
    o458.o163 = ((o458.o163 << 1) & 0xFF) | (o458.o163 >> 7);
    o458.o401 = o458.o402 = o458.o403 = false;
  },
  //LD (nn), SP
  //#0x08:
  function (o458) {"use strict";
    var o618 = (o458.o616((o458.o169 + 1) & 0xFFFF) << 8) | o458.o427[o458.o169](o458, o458.o169);
    o458.o169 = (o458.o169 + 2) & 0xFFFF;
    o458.o617(o618, o458.o170 & 0xFF);
    o458.o617((o618 + 1) & 0xFFFF, o458.o170 >> 8);
  },
  //ADD HL, BC
  //#0x09:
  function (o458) {"use strict";
    var o619 = o458.o168 + ((o458.o164 << 8) | o458.o165);
    o458.o403 = ((o458.o168 & 0xFFF) > (o619 & 0xFFF));
    o458.o404 = (o619 > 0xFFFF);
    o458.o168 = o619 & 0xFFFF;
    o458.o402 = false;
  },
  //LD A, (BC)
  //#0x0A:
  function (o458) {"use strict";
    o458.o163 = o458.o616((o458.o164 << 8) | o458.o165);
  },
  //DEC BC
  //#0x0B:
  function (o458) {"use strict";
    var o618 = (((o458.o164 << 8) | o458.o165) - 1) & 0xFFFF;
    o458.o164 = o618 >> 8;
    o458.o165 = o618 & 0xFF;
  },
  //INC C
  //#0x0C:
  function (o458) {"use strict";
    o458.o165 = (o458.o165 + 1) & 0xFF;
    o458.o401 = (o458.o165 == 0);
    o458.o403 = ((o458.o165 & 0xF) == 0);
    o458.o402 = false;
  },
  //DEC C
  //#0x0D:
  function (o458) {"use strict";
    o458.o165 = (o458.o165 - 1) & 0xFF;
    o458.o401 = (o458.o165 == 0);
    o458.o403 = ((o458.o165 & 0xF) == 0xF);
    o458.o402 = true;
  },
  //LD C, n
  //#0x0E:
  function (o458) {"use strict";
    o458.o165 = o458.o427[o458.o169](o458, o458.o169);
    o458.o169 = (o458.o169 + 1) & 0xFFFF;
  },
  //RRCA
  //#0x0F:
  function (o458) {"use strict";
    o458.o163 = (o458.o163 >> 1) | ((o458.o163 & 1) << 7);
    o458.o404 = (o458.o163 > 0x7F);
    o458.o401 = o458.o402 = o458.o403 = false;
  },
  //STOP
  //#0x10:
  function (o458) {"use strict";
    if (o458.o437) {
      if ((o458.o175[0xFF4D] & 0x01) == 0x01) {    //Speed change requested.
        if (o458.o175[0xFF4D] > 0x7F) {        //Go back to single speed mode.
          o133("Going into single clock speed mode.", 0);
          o458.o424 = 0;
          o458.o175[0xFF4D] &= 0x7F;        //Clear the double speed mode flag.
        }
        else {                        //Go to double speed mode.
          o133("Going into double clock speed mode.", 0);
          o458.o424 = 1;
          o458.o175[0xFF4D] |= 0x80;        //Set the double speed mode flag.
        }
        o458.o175[0xFF4D] &= 0xFE;          //Reset the request bit.
      }
      else {
        o458.o620();
      }
    }
    else {
      o458.o620();
    }
  },
  //LD DE, nn
  //#0x11:
  function (o458) {"use strict";
    o458.o166 = o458.o427[o458.o169](o458, o458.o169);
    o458.o405 = o458.o616((o458.o169 + 1) & 0xFFFF);
    o458.o169 = (o458.o169 + 2) & 0xFFFF;
  },
  //LD (DE), A
  //#0x12:
  function (o458) {"use strict";
    o458.o617((o458.o405 << 8) | o458.o166, o458.o163);
  },
  //INC DE
  //#0x13:
  function (o458) {"use strict";
    var o618 = ((o458.o405 << 8) | o458.o166) + 1;
    o458.o405 = (o618 >> 8) & 0xFF;
    o458.o166 = o618 & 0xFF;
  },
  //INC D
  //#0x14:
  function (o458) {"use strict";
    o458.o405 = (o458.o405 + 1) & 0xFF;
    o458.o401 = (o458.o405 == 0);
    o458.o403 = ((o458.o405 & 0xF) == 0);
    o458.o402 = false;
  },
  //DEC D
  //#0x15:
  function (o458) {"use strict";
    o458.o405 = (o458.o405 - 1) & 0xFF;
    o458.o401 = (o458.o405 == 0);
    o458.o403 = ((o458.o405 & 0xF) == 0xF);
    o458.o402 = true;
  },
  //LD D, n
  //#0x16:
  function (o458) {"use strict";
    o458.o405 = o458.o427[o458.o169](o458, o458.o169);
    o458.o169 = (o458.o169 + 1) & 0xFFFF;
  },
  //RLA
  //#0x17:
  function (o458) {"use strict";
    var o621 = (o458.o404) ? 1 : 0;
    o458.o404 = (o458.o163 > 0x7F);
    o458.o163 = ((o458.o163 << 1) & 0xFF) | o621;
    o458.o401 = o458.o402 = o458.o403 = false;
  },
  //JR n
  //#0x18:
  function (o458) {"use strict";
    o458.o169 = (o458.o169 + ((o458.o427[o458.o169](o458, o458.o169) << 24) >> 24) + 1) & 0xFFFF;
  },
  //ADD HL, DE
  //#0x19:
  function (o458) {"use strict";
    var o619 = o458.o168 + ((o458.o405 << 8) | o458.o166);
    o458.o403 = ((o458.o168 & 0xFFF) > (o619 & 0xFFF));
    o458.o404 = (o619 > 0xFFFF);
    o458.o168 = o619 & 0xFFFF;
    o458.o402 = false;
  },
  //LD A, (DE)
  //#0x1A:
  function (o458) {"use strict";
    o458.o163 = o458.o616((o458.o405 << 8) | o458.o166);
  },
  //DEC DE
  //#0x1B:
  function (o458) {"use strict";
    var o618 = (((o458.o405 << 8) | o458.o166) - 1) & 0xFFFF;
    o458.o405 = o618 >> 8;
    o458.o166 = o618 & 0xFF;
  },
  //INC E
  //#0x1C:
  function (o458) {"use strict";
    o458.o166 = (o458.o166 + 1) & 0xFF;
    o458.o401 = (o458.o166 == 0);
    o458.o403 = ((o458.o166 & 0xF) == 0);
    o458.o402 = false;
  },
  //DEC E
  //#0x1D:
  function (o458) {"use strict";
    o458.o166 = (o458.o166 - 1) & 0xFF;
    o458.o401 = (o458.o166 == 0);
    o458.o403 = ((o458.o166 & 0xF) == 0xF);
    o458.o402 = true;
  },
  //LD E, n
  //#0x1E:
  function (o458) {"use strict";
    o458.o166 = o458.o427[o458.o169](o458, o458.o169);
    o458.o169 = (o458.o169 + 1) & 0xFFFF;
  },
  //RRA
  //#0x1F:
  function (o458) {"use strict";
    var o621 = (o458.o404) ? 0x80 : 0;
    o458.o404 = ((o458.o163 & 1) == 1);
    o458.o163 = (o458.o163 >> 1) | o621;
    o458.o401 = o458.o402 = o458.o403 = false;
  },
  //JR NZ, n
  //#0x20:
  function (o458) {"use strict";
    if (!o458.o401) {
      o458.o169 = (o458.o169 + ((o458.o427[o458.o169](o458, o458.o169) << 24) >> 24) + 1) & 0xFFFF;
      o458.o423 += 4;
    }
    else {
      o458.o169 = (o458.o169 + 1) & 0xFFFF;
    }
  },
  //LD HL, nn
  //#0x21:
  function (o458) {"use strict";
    o458.o168 = (o458.o616((o458.o169 + 1) & 0xFFFF) << 8) | o458.o427[o458.o169](o458, o458.o169);
    o458.o169 = (o458.o169 + 2) & 0xFFFF;
  },
  //LDI (HL), A
  //#0x22:
  function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o163);
    o458.o168 = (o458.o168 + 1) & 0xFFFF;
  },
  //INC HL
  //#0x23:
  function (o458) {"use strict";
    o458.o168 = (o458.o168 + 1) & 0xFFFF;
  },
  //INC H
  //#0x24:
  function (o458) {"use strict";
    var o622 = ((o458.o168 >> 8) + 1) & 0xFF;
    o458.o401 = (o622 == 0);
    o458.o403 = ((o622 & 0xF) == 0);
    o458.o402 = false;
    o458.o168 = (o622 << 8) | (o458.o168 & 0xFF);
  },
  //DEC H
  //#0x25:
  function (o458) {"use strict";
    var o622 = ((o458.o168 >> 8) - 1) & 0xFF;
    o458.o401 = (o622 == 0);
    o458.o403 = ((o622 & 0xF) == 0xF);
    o458.o402 = true;
    o458.o168 = (o622 << 8) | (o458.o168 & 0xFF);
  },
  //LD H, n
  //#0x26:
  function (o458) {"use strict";
    o458.o168 = (o458.o427[o458.o169](o458, o458.o169) << 8) | (o458.o168 & 0xFF);
    o458.o169 = (o458.o169 + 1) & 0xFFFF;
  },
  //DAA
  //#0x27:
  function (o458) {"use strict";
    if (!o458.o402) {
      if (o458.o404 || o458.o163 > 0x99) {
        o458.o163 = (o458.o163 + 0x60) & 0xFF;
        o458.o404 = true;
      }
      if (o458.o403 || (o458.o163 & 0xF) > 0x9) {
        o458.o163 = (o458.o163 + 0x06) & 0xFF;
        o458.o403 = false;
      }
    }
    else if (o458.o404 && o458.o403) {
      o458.o163 = (o458.o163 + 0x9A) & 0xFF;
      o458.o403 = false;
    }
    else if (o458.o404) {
      o458.o163 = (o458.o163 + 0xA0) & 0xFF;
    }
    else if (o458.o403) {
      o458.o163 = (o458.o163 + 0xFA) & 0xFF;
      o458.o403 = false;
    }
    o458.o401 = (o458.o163 == 0);
  },
  //JR Z, n
  //#0x28:
  function (o458) {"use strict";
    if (o458.o401) {
      o458.o169 = (o458.o169 + ((o458.o427[o458.o169](o458, o458.o169) << 24) >> 24) + 1) & 0xFFFF;
      o458.o423 += 4;
    }
    else {
      o458.o169 = (o458.o169 + 1) & 0xFFFF;
    }
  },
  //ADD HL, HL
  //#0x29:
  function (o458) {"use strict";
    o458.o403 = ((o458.o168 & 0xFFF) > 0x7FF);
    o458.o404 = (o458.o168 > 0x7FFF);
    o458.o168 = (o458.o168 << 1) & 0xFFFF;
    o458.o402 = false;
  },
  //LDI A, (HL)
  //#0x2A:
  function (o458) {"use strict";
    o458.o163 = o458.o427[o458.o168](o458, o458.o168);
    o458.o168 = (o458.o168 + 1) & 0xFFFF;
  },
  //DEC HL
  //#0x2B:
  function (o458) {"use strict";
    o458.o168 = (o458.o168 - 1) & 0xFFFF;
  },
  //INC L
  //#0x2C:
  function (o458) {"use strict";
    var o623 = (o458.o168 + 1) & 0xFF;
    o458.o401 = (o623 == 0);
    o458.o403 = ((o623 & 0xF) == 0);
    o458.o402 = false;
    o458.o168 = (o458.o168 & 0xFF00) | o623;
  },
  //DEC L
  //#0x2D:
  function (o458) {"use strict";
    var o623 = (o458.o168 - 1) & 0xFF;
    o458.o401 = (o623 == 0);
    o458.o403 = ((o623 & 0xF) == 0xF);
    o458.o402 = true;
    o458.o168 = (o458.o168 & 0xFF00) | o623;
  },
  //LD L, n
  //#0x2E:
  function (o458) {"use strict";
    o458.o168 = (o458.o168 & 0xFF00) | o458.o427[o458.o169](o458, o458.o169);
    o458.o169 = (o458.o169 + 1) & 0xFFFF;
  },
  //CPL
  //#0x2F:
  function (o458) {"use strict";
    o458.o163 ^= 0xFF;
    o458.o402 = o458.o403 = true;
  },
  //JR NC, n
  //#0x30:
  function (o458) {"use strict";
    if (!o458.o404) {
      o458.o169 = (o458.o169 + ((o458.o427[o458.o169](o458, o458.o169) << 24) >> 24) + 1) & 0xFFFF;
      o458.o423 += 4;
    }
    else {
      o458.o169 = (o458.o169 + 1) & 0xFFFF;
    }
  },
  //LD SP, nn
  //#0x31:
  function (o458) {"use strict";
    o458.o170 = (o458.o616((o458.o169 + 1) & 0xFFFF) << 8) | o458.o427[o458.o169](o458, o458.o169);
    o458.o169 = (o458.o169 + 2) & 0xFFFF;
  },
  //LDD (HL), A
  //#0x32:
  function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o163);
    o458.o168 = (o458.o168 - 1) & 0xFFFF;
  },
  //INC SP
  //#0x33:
  function (o458) {"use strict";
    o458.o170 = (o458.o170 + 1) & 0xFFFF;
  },
  //INC (HL)
  //#0x34:
  function (o458) {"use strict";
    var o618 = (o458.o427[o458.o168](o458, o458.o168) + 1) & 0xFF;
    o458.o401 = (o618 == 0);
    o458.o403 = ((o618 & 0xF) == 0);
    o458.o402 = false;
    o458.o428[o458.o168](o458, o458.o168, o618);
  },
  //DEC (HL)
  //#0x35:
  function (o458) {"use strict";
    var o618 = (o458.o427[o458.o168](o458, o458.o168) - 1) & 0xFF;
    o458.o401 = (o618 == 0);
    o458.o403 = ((o618 & 0xF) == 0xF);
    o458.o402 = true;
    o458.o428[o458.o168](o458, o458.o168, o618);
  },
  //LD (HL), n
  //#0x36:
  function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o169](o458, o458.o169));
    o458.o169 = (o458.o169 + 1) & 0xFFFF;
  },
  //SCF
  //#0x37:
  function (o458) {"use strict";
    o458.o404 = true;
    o458.o402 = o458.o403 = false;
  },
  //JR C, n
  //#0x38:
  function (o458) {"use strict";
    if (o458.o404) {
      o458.o169 = (o458.o169 + ((o458.o427[o458.o169](o458, o458.o169) << 24) >> 24) + 1) & 0xFFFF;
      o458.o423 += 4;
    }
    else {
      o458.o169 = (o458.o169 + 1) & 0xFFFF;
    }
  },
  //ADD HL, SP
  //#0x39:
  function (o458) {"use strict";
    var o619 = o458.o168 + o458.o170;
    o458.o403 = ((o458.o168 & 0xFFF) > (o619 & 0xFFF));
    o458.o404 = (o619 > 0xFFFF);
    o458.o168 = o619 & 0xFFFF;
    o458.o402 = false;
  },
  //LDD A, (HL)
  //#0x3A:
  function (o458) {"use strict";
    o458.o163 = o458.o427[o458.o168](o458, o458.o168);
    o458.o168 = (o458.o168 - 1) & 0xFFFF;
  },
  //DEC SP
  //#0x3B:
  function (o458) {"use strict";
    o458.o170 = (o458.o170 - 1) & 0xFFFF;
  },
  //INC A
  //#0x3C:
  function (o458) {"use strict";
    o458.o163 = (o458.o163 + 1) & 0xFF;
    o458.o401 = (o458.o163 == 0);
    o458.o403 = ((o458.o163 & 0xF) == 0);
    o458.o402 = false;
  },
  //DEC A
  //#0x3D:
  function (o458) {"use strict";
    o458.o163 = (o458.o163 - 1) & 0xFF;
    o458.o401 = (o458.o163 == 0);
    o458.o403 = ((o458.o163 & 0xF) == 0xF);
    o458.o402 = true;
  },
  //LD A, n
  //#0x3E:
  function (o458) {"use strict";
    o458.o163 = o458.o427[o458.o169](o458, o458.o169);
    o458.o169 = (o458.o169 + 1) & 0xFFFF;
  },
  //CCF
  //#0x3F:
  function (o458) {"use strict";
    o458.o404 = !o458.o404;
    o458.o402 = o458.o403 = false;
  },
  //LD B, B
  //#0x40:
  function (o458) {"use strict";
    //Do nothing...
  },
  //LD B, C
  //#0x41:
  function (o458) {"use strict";
    o458.o164 = o458.o165;
  },
  //LD B, D
  //#0x42:
  function (o458) {"use strict";
    o458.o164 = o458.o405;
  },
  //LD B, E
  //#0x43:
  function (o458) {"use strict";
    o458.o164 = o458.o166;
  },
  //LD B, H
  //#0x44:
  function (o458) {"use strict";
    o458.o164 = o458.o168 >> 8;
  },
  //LD B, L
  //#0x45:
  function (o458) {"use strict";
    o458.o164 = o458.o168 & 0xFF;
  },
  //LD B, (HL)
  //#0x46:
  function (o458) {"use strict";
    o458.o164 = o458.o427[o458.o168](o458, o458.o168);
  },
  //LD B, A
  //#0x47:
  function (o458) {"use strict";
    o458.o164 = o458.o163;
  },
  //LD C, B
  //#0x48:
  function (o458) {"use strict";
    o458.o165 = o458.o164;
  },
  //LD C, C
  //#0x49:
  function (o458) {"use strict";
    //Do nothing...
  },
  //LD C, D
  //#0x4A:
  function (o458) {"use strict";
    o458.o165 = o458.o405;
  },
  //LD C, E
  //#0x4B:
  function (o458) {"use strict";
    o458.o165 = o458.o166;
  },
  //LD C, H
  //#0x4C:
  function (o458) {"use strict";
    o458.o165 = o458.o168 >> 8;
  },
  //LD C, L
  //#0x4D:
  function (o458) {"use strict";
    o458.o165 = o458.o168 & 0xFF;
  },
  //LD C, (HL)
  //#0x4E:
  function (o458) {"use strict";
    o458.o165 = o458.o427[o458.o168](o458, o458.o168);
  },
  //LD C, A
  //#0x4F:
  function (o458) {"use strict";
    o458.o165 = o458.o163;
  },
  //LD D, B
  //#0x50:
  function (o458) {"use strict";
    o458.o405 = o458.o164;
  },
  //LD D, C
  //#0x51:
  function (o458) {"use strict";
    o458.o405 = o458.o165;
  },
  //LD D, D
  //#0x52:
  function (o458) {"use strict";
    //Do nothing...
  },
  //LD D, E
  //#0x53:
  function (o458) {"use strict";
    o458.o405 = o458.o166;
  },
  //LD D, H
  //#0x54:
  function (o458) {"use strict";
    o458.o405 = o458.o168 >> 8;
  },
  //LD D, L
  //#0x55:
  function (o458) {"use strict";
    o458.o405 = o458.o168 & 0xFF;
  },
  //LD D, (HL)
  //#0x56:
  function (o458) {"use strict";
    o458.o405 = o458.o427[o458.o168](o458, o458.o168);
  },
  //LD D, A
  //#0x57:
  function (o458) {"use strict";
    o458.o405 = o458.o163;
  },
  //LD E, B
  //#0x58:
  function (o458) {"use strict";
    o458.o166 = o458.o164;
  },
  //LD E, C
  //#0x59:
  function (o458) {"use strict";
    o458.o166 = o458.o165;
  },
  //LD E, D
  //#0x5A:
  function (o458) {"use strict";
    o458.o166 = o458.o405;
  },
  //LD E, E
  //#0x5B:
  function (o458) {"use strict";
    //Do nothing...
  },
  //LD E, H
  //#0x5C:
  function (o458) {"use strict";
    o458.o166 = o458.o168 >> 8;
  },
  //LD E, L
  //#0x5D:
  function (o458) {"use strict";
    o458.o166 = o458.o168 & 0xFF;
  },
  //LD E, (HL)
  //#0x5E:
  function (o458) {"use strict";
    o458.o166 = o458.o427[o458.o168](o458, o458.o168);
  },
  //LD E, A
  //#0x5F:
  function (o458) {"use strict";
    o458.o166 = o458.o163;
  },
  //LD H, B
  //#0x60:
  function (o458) {"use strict";
    o458.o168 = (o458.o164 << 8) | (o458.o168 & 0xFF);
  },
  //LD H, C
  //#0x61:
  function (o458) {"use strict";
    o458.o168 = (o458.o165 << 8) | (o458.o168 & 0xFF);
  },
  //LD H, D
  //#0x62:
  function (o458) {"use strict";
    o458.o168 = (o458.o405 << 8) | (o458.o168 & 0xFF);
  },
  //LD H, E
  //#0x63:
  function (o458) {"use strict";
    o458.o168 = (o458.o166 << 8) | (o458.o168 & 0xFF);
  },
  //LD H, H
  //#0x64:
  function (o458) {"use strict";
    //Do nothing...
  },
  //LD H, L
  //#0x65:
  function (o458) {"use strict";
    o458.o168 = (o458.o168 & 0xFF) * 0x101;
  },
  //LD H, (HL)
  //#0x66:
  function (o458) {"use strict";
    o458.o168 = (o458.o427[o458.o168](o458, o458.o168) << 8) | (o458.o168 & 0xFF);
  },
  //LD H, A
  //#0x67:
  function (o458) {"use strict";
    o458.o168 = (o458.o163 << 8) | (o458.o168 & 0xFF);
  },
  //LD L, B
  //#0x68:
  function (o458) {"use strict";
    o458.o168 = (o458.o168 & 0xFF00) | o458.o164;
  },
  //LD L, C
  //#0x69:
  function (o458) {"use strict";
    o458.o168 = (o458.o168 & 0xFF00) | o458.o165;
  },
  //LD L, D
  //#0x6A:
  function (o458) {"use strict";
    o458.o168 = (o458.o168 & 0xFF00) | o458.o405;
  },
  //LD L, E
  //#0x6B:
  function (o458) {"use strict";
    o458.o168 = (o458.o168 & 0xFF00) | o458.o166;
  },
  //LD L, H
  //#0x6C:
  function (o458) {"use strict";
    o458.o168 = (o458.o168 & 0xFF00) | (o458.o168 >> 8);
  },
  //LD L, L
  //#0x6D:
  function (o458) {"use strict";
    //Do nothing...
  },
  //LD L, (HL)
  //#0x6E:
  function (o458) {"use strict";
    o458.o168 = (o458.o168 & 0xFF00) | o458.o427[o458.o168](o458, o458.o168);
  },
  //LD L, A
  //#0x6F:
  function (o458) {"use strict";
    o458.o168 = (o458.o168 & 0xFF00) | o458.o163;
  },
  //LD (HL), B
  //#0x70:
  function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o164);
  },
  //LD (HL), C
  //#0x71:
  function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o165);
  },
  //LD (HL), D
  //#0x72:
  function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o405);
  },
  //LD (HL), E
  //#0x73:
  function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o166);
  },
  //LD (HL), H
  //#0x74:
  function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o168 >> 8);
  },
  //LD (HL), L
  //#0x75:
  function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o168 & 0xFF);
  },
  //HALT
  //#0x76:
  function (o458) {"use strict";
    //See if there's already an IRQ match:
    if ((o458.o421 & o458.o420 & 0x1F) > 0) {
      if (!o458.o437 && !o458.o413) {
        //HALT bug in the DMG CPU model (Program Counter fails to increment for one instruction after HALT):
        o458.o416 = true;
      }
      else {
        //CGB gets around the HALT PC bug by doubling the hidden NOP.
        o458.o423 += 4;
      }
    }
    else {
      //CPU is stalled until the next IRQ match:
      o458.o624();
    }
  },
  //LD (HL), A
  //#0x77:
  function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o163);
  },
  //LD A, B
  //#0x78:
  function (o458) {"use strict";
    o458.o163 = o458.o164;
  },
  //LD A, C
  //#0x79:
  function (o458) {"use strict";
    o458.o163 = o458.o165;
  },
  //LD A, D
  //#0x7A:
  function (o458) {"use strict";
    o458.o163 = o458.o405;
  },
  //LD A, E
  //#0x7B:
  function (o458) {"use strict";
    o458.o163 = o458.o166;
  },
  //LD A, H
  //#0x7C:
  function (o458) {"use strict";
    o458.o163 = o458.o168 >> 8;
  },
  //LD A, L
  //#0x7D:
  function (o458) {"use strict";
    o458.o163 = o458.o168 & 0xFF;
  },
  //LD, A, (HL)
  //#0x7E:
  function (o458) {"use strict";
    o458.o163 = o458.o427[o458.o168](o458, o458.o168);
  },
  //LD A, A
  //#0x7F:
  function (o458) {"use strict";
    //Do Nothing...
  },
  //ADD A, B
  //#0x80:
  function (o458) {"use strict";
    var o619 = o458.o163 + o458.o164;
    o458.o403 = ((o619 & 0xF) < (o458.o163 & 0xF));
    o458.o404 = (o619 > 0xFF);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = false;
  },
  //ADD A, C
  //#0x81:
  function (o458) {"use strict";
    var o619 = o458.o163 + o458.o165;
    o458.o403 = ((o619 & 0xF) < (o458.o163 & 0xF));
    o458.o404 = (o619 > 0xFF);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = false;
  },
  //ADD A, D
  //#0x82:
  function (o458) {"use strict";
    var o619 = o458.o163 + o458.o405;
    o458.o403 = ((o619 & 0xF) < (o458.o163 & 0xF));
    o458.o404 = (o619 > 0xFF);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = false;
  },
  //ADD A, E
  //#0x83:
  function (o458) {"use strict";
    var o619 = o458.o163 + o458.o166;
    o458.o403 = ((o619 & 0xF) < (o458.o163 & 0xF));
    o458.o404 = (o619 > 0xFF);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = false;
  },
  //ADD A, H
  //#0x84:
  function (o458) {"use strict";
    var o619 = o458.o163 + (o458.o168 >> 8);
    o458.o403 = ((o619 & 0xF) < (o458.o163 & 0xF));
    o458.o404 = (o619 > 0xFF);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = false;
  },
  //ADD A, L
  //#0x85:
  function (o458) {"use strict";
    var o619 = o458.o163 + (o458.o168 & 0xFF);
    o458.o403 = ((o619 & 0xF) < (o458.o163 & 0xF));
    o458.o404 = (o619 > 0xFF);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = false;
  },
  //ADD A, (HL)
  //#0x86:
  function (o458) {"use strict";
    var o619 = o458.o163 + o458.o427[o458.o168](o458, o458.o168);
    o458.o403 = ((o619 & 0xF) < (o458.o163 & 0xF));
    o458.o404 = (o619 > 0xFF);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = false;
  },
  //ADD A, A
  //#0x87:
  function (o458) {"use strict";
    o458.o403 = ((o458.o163 & 0x8) == 0x8);
    o458.o404 = (o458.o163 > 0x7F);
    o458.o163 = (o458.o163 << 1) & 0xFF;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = false;
  },
  //ADC A, B
  //#0x88:
  function (o458) {"use strict";
    var o619 = o458.o163 + o458.o164 + ((o458.o404) ? 1 : 0);
    o458.o403 = ((o458.o163 & 0xF) + (o458.o164 & 0xF) + ((o458.o404) ? 1 : 0) > 0xF);
    o458.o404 = (o619 > 0xFF);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = false;
  },
  //ADC A, C
  //#0x89:
  function (o458) {"use strict";
    var o619 = o458.o163 + o458.o165 + ((o458.o404) ? 1 : 0);
    o458.o403 = ((o458.o163 & 0xF) + (o458.o165 & 0xF) + ((o458.o404) ? 1 : 0) > 0xF);
    o458.o404 = (o619 > 0xFF);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = false;
  },
  //ADC A, D
  //#0x8A:
  function (o458) {"use strict";
    var o619 = o458.o163 + o458.o405 + ((o458.o404) ? 1 : 0);
    o458.o403 = ((o458.o163 & 0xF) + (o458.o405 & 0xF) + ((o458.o404) ? 1 : 0) > 0xF);
    o458.o404 = (o619 > 0xFF);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = false;
  },
  //ADC A, E
  //#0x8B:
  function (o458) {"use strict";
    var o619 = o458.o163 + o458.o166 + ((o458.o404) ? 1 : 0);
    o458.o403 = ((o458.o163 & 0xF) + (o458.o166 & 0xF) + ((o458.o404) ? 1 : 0) > 0xF);
    o458.o404 = (o619 > 0xFF);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = false;
  },
  //ADC A, H
  //#0x8C:
  function (o458) {"use strict";
    var o625 = (o458.o168 >> 8);
    var o619 = o458.o163 + o625 + ((o458.o404) ? 1 : 0);
    o458.o403 = ((o458.o163 & 0xF) + (o625 & 0xF) + ((o458.o404) ? 1 : 0) > 0xF);
    o458.o404 = (o619 > 0xFF);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = false;
  },
  //ADC A, L
  //#0x8D:
  function (o458) {"use strict";
    var o625 = (o458.o168 & 0xFF);
    var o619 = o458.o163 + o625 + ((o458.o404) ? 1 : 0);
    o458.o403 = ((o458.o163 & 0xF) + (o625 & 0xF) + ((o458.o404) ? 1 : 0) > 0xF);
    o458.o404 = (o619 > 0xFF);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = false;
  },
  //ADC A, (HL)
  //#0x8E:
  function (o458) {"use strict";
    var o625 = o458.o427[o458.o168](o458, o458.o168);
    var o619 = o458.o163 + o625 + ((o458.o404) ? 1 : 0);
    o458.o403 = ((o458.o163 & 0xF) + (o625 & 0xF) + ((o458.o404) ? 1 : 0) > 0xF);
    o458.o404 = (o619 > 0xFF);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = false;
  },
  //ADC A, A
  //#0x8F:
  function (o458) {"use strict";
    //shift left register A one bit for some ops here as an optimization:
    var o619 = (o458.o163 << 1) | ((o458.o404) ? 1 : 0);
    o458.o403 = ((((o458.o163 << 1) & 0x1E) | ((o458.o404) ? 1 : 0)) > 0xF);
    o458.o404 = (o619 > 0xFF);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = false;
  },
  //SUB A, B
  //#0x90:
  function (o458) {"use strict";
    var o619 = o458.o163 - o458.o164;
    o458.o403 = ((o458.o163 & 0xF) < (o619 & 0xF));
    o458.o404 = (o619 < 0);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o619 == 0);
    o458.o402 = true;
  },
  //SUB A, C
  //#0x91:
  function (o458) {"use strict";
    var o619 = o458.o163 - o458.o165;
    o458.o403 = ((o458.o163 & 0xF) < (o619 & 0xF));
    o458.o404 = (o619 < 0);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o619 == 0);
    o458.o402 = true;
  },
  //SUB A, D
  //#0x92:
  function (o458) {"use strict";
    var o619 = o458.o163 - o458.o405;
    o458.o403 = ((o458.o163 & 0xF) < (o619 & 0xF));
    o458.o404 = (o619 < 0);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o619 == 0);
    o458.o402 = true;
  },
  //SUB A, E
  //#0x93:
  function (o458) {"use strict";
    var o619 = o458.o163 - o458.o166;
    o458.o403 = ((o458.o163 & 0xF) < (o619 & 0xF));
    o458.o404 = (o619 < 0);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o619 == 0);
    o458.o402 = true;
  },
  //SUB A, H
  //#0x94:
  function (o458) {"use strict";
    var o619 = o458.o163 - (o458.o168 >> 8);
    o458.o403 = ((o458.o163 & 0xF) < (o619 & 0xF));
    o458.o404 = (o619 < 0);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o619 == 0);
    o458.o402 = true;
  },
  //SUB A, L
  //#0x95:
  function (o458) {"use strict";
    var o619 = o458.o163 - (o458.o168 & 0xFF);
    o458.o403 = ((o458.o163 & 0xF) < (o619 & 0xF));
    o458.o404 = (o619 < 0);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o619 == 0);
    o458.o402 = true;
  },
  //SUB A, (HL)
  //#0x96:
  function (o458) {"use strict";
    var o619 = o458.o163 - o458.o427[o458.o168](o458, o458.o168);
    o458.o403 = ((o458.o163 & 0xF) < (o619 & 0xF));
    o458.o404 = (o619 < 0);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o619 == 0);
    o458.o402 = true;
  },
  //SUB A, A
  //#0x97:
  function (o458) {"use strict";
    //number - same number == 0
    o458.o163 = 0;
    o458.o403 = o458.o404 = false;
    o458.o401 = o458.o402 = true;
  },
  //SBC A, B
  //#0x98:
  function (o458) {"use strict";
    var o619 = o458.o163 - o458.o164 - ((o458.o404) ? 1 : 0);
    o458.o403 = ((o458.o163 & 0xF) - (o458.o164 & 0xF) - ((o458.o404) ? 1 : 0) < 0);
    o458.o404 = (o619 < 0);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = true;
  },
  //SBC A, C
  //#0x99:
  function (o458) {"use strict";
    var o619 = o458.o163 - o458.o165 - ((o458.o404) ? 1 : 0);
    o458.o403 = ((o458.o163 & 0xF) - (o458.o165 & 0xF) - ((o458.o404) ? 1 : 0) < 0);
    o458.o404 = (o619 < 0);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = true;
  },
  //SBC A, D
  //#0x9A:
  function (o458) {"use strict";
    var o619 = o458.o163 - o458.o405 - ((o458.o404) ? 1 : 0);
    o458.o403 = ((o458.o163 & 0xF) - (o458.o405 & 0xF) - ((o458.o404) ? 1 : 0) < 0);
    o458.o404 = (o619 < 0);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = true;
  },
  //SBC A, E
  //#0x9B:
  function (o458) {"use strict";
    var o619 = o458.o163 - o458.o166 - ((o458.o404) ? 1 : 0);
    o458.o403 = ((o458.o163 & 0xF) - (o458.o166 & 0xF) - ((o458.o404) ? 1 : 0) < 0);
    o458.o404 = (o619 < 0);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = true;
  },
  //SBC A, H
  //#0x9C:
  function (o458) {"use strict";
    var o618 = o458.o168 >> 8;
    var o619 = o458.o163 - o618 - ((o458.o404) ? 1 : 0);
    o458.o403 = ((o458.o163 & 0xF) - (o618 & 0xF) - ((o458.o404) ? 1 : 0) < 0);
    o458.o404 = (o619 < 0);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = true;
  },
  //SBC A, L
  //#0x9D:
  function (o458) {"use strict";
    var o619 = o458.o163 - (o458.o168 & 0xFF) - ((o458.o404) ? 1 : 0);
    o458.o403 = ((o458.o163 & 0xF) - (o458.o168 & 0xF) - ((o458.o404) ? 1 : 0) < 0);
    o458.o404 = (o619 < 0);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = true;
  },
  //SBC A, (HL)
  //#0x9E:
  function (o458) {"use strict";
    var o618 = o458.o427[o458.o168](o458, o458.o168);
    var o619 = o458.o163 - o618 - ((o458.o404) ? 1 : 0);
    o458.o403 = ((o458.o163 & 0xF) - (o618 & 0xF) - ((o458.o404) ? 1 : 0) < 0);
    o458.o404 = (o619 < 0);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = true;
  },
  //SBC A, A
  //#0x9F:
  function (o458) {"use strict";
    //Optimized SBC A:
    if (o458.o404) {
      o458.o401 = false;
      o458.o402 = o458.o403 = o458.o404 = true;
      o458.o163 = 0xFF;
    }
    else {
      o458.o403 = o458.o404 = false;
      o458.o402 = o458.o401 = true;
      o458.o163 = 0;
    }
  },
  //AND B
  //#0xA0:
  function (o458) {"use strict";
    o458.o163 &= o458.o164;
    o458.o401 = (o458.o163 == 0);
    o458.o403 = true;
    o458.o402 = o458.o404 = false;
  },
  //AND C
  //#0xA1:
  function (o458) {"use strict";
    o458.o163 &= o458.o165;
    o458.o401 = (o458.o163 == 0);
    o458.o403 = true;
    o458.o402 = o458.o404 = false;
  },
  //AND D
  //#0xA2:
  function (o458) {"use strict";
    o458.o163 &= o458.o405;
    o458.o401 = (o458.o163 == 0);
    o458.o403 = true;
    o458.o402 = o458.o404 = false;
  },
  //AND E
  //#0xA3:
  function (o458) {"use strict";
    o458.o163 &= o458.o166;
    o458.o401 = (o458.o163 == 0);
    o458.o403 = true;
    o458.o402 = o458.o404 = false;
  },
  //AND H
  //#0xA4:
  function (o458) {"use strict";
    o458.o163 &= (o458.o168 >> 8);
    o458.o401 = (o458.o163 == 0);
    o458.o403 = true;
    o458.o402 = o458.o404 = false;
  },
  //AND L
  //#0xA5:
  function (o458) {"use strict";
    o458.o163 &= o458.o168;
    o458.o401 = (o458.o163 == 0);
    o458.o403 = true;
    o458.o402 = o458.o404 = false;
  },
  //AND (HL)
  //#0xA6:
  function (o458) {"use strict";
    o458.o163 &= o458.o427[o458.o168](o458, o458.o168);
    o458.o401 = (o458.o163 == 0);
    o458.o403 = true;
    o458.o402 = o458.o404 = false;
  },
  //AND A
  //#0xA7:
  function (o458) {"use strict";
    //number & same number = same number
    o458.o401 = (o458.o163 == 0);
    o458.o403 = true;
    o458.o402 = o458.o404 = false;
  },
  //XOR B
  //#0xA8:
  function (o458) {"use strict";
    o458.o163 ^= o458.o164;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = o458.o403 = o458.o404 = false;
  },
  //XOR C
  //#0xA9:
  function (o458) {"use strict";
    o458.o163 ^= o458.o165;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = o458.o403 = o458.o404 = false;
  },
  //XOR D
  //#0xAA:
  function (o458) {"use strict";
    o458.o163 ^= o458.o405;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = o458.o403 = o458.o404 = false;
  },
  //XOR E
  //#0xAB:
  function (o458) {"use strict";
    o458.o163 ^= o458.o166;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = o458.o403 = o458.o404 = false;
  },
  //XOR H
  //#0xAC:
  function (o458) {"use strict";
    o458.o163 ^= (o458.o168 >> 8);
    o458.o401 = (o458.o163 == 0);
    o458.o402 = o458.o403 = o458.o404 = false;
  },
  //XOR L
  //#0xAD:
  function (o458) {"use strict";
    o458.o163 ^= (o458.o168 & 0xFF);
    o458.o401 = (o458.o163 == 0);
    o458.o402 = o458.o403 = o458.o404 = false;
  },
  //XOR (HL)
  //#0xAE:
  function (o458) {"use strict";
    o458.o163 ^= o458.o427[o458.o168](o458, o458.o168);
    o458.o401 = (o458.o163 == 0);
    o458.o402 = o458.o403 = o458.o404 = false;
  },
  //XOR A
  //#0xAF:
  function (o458) {"use strict";
    //number ^ same number == 0
    o458.o163 = 0;
    o458.o401 = true;
    o458.o402 = o458.o403 = o458.o404 = false;
  },
  //OR B
  //#0xB0:
  function (o458) {"use strict";
    o458.o163 |= o458.o164;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = o458.o404 = o458.o403 = false;
  },
  //OR C
  //#0xB1:
  function (o458) {"use strict";
    o458.o163 |= o458.o165;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = o458.o404 = o458.o403 = false;
  },
  //OR D
  //#0xB2:
  function (o458) {"use strict";
    o458.o163 |= o458.o405;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = o458.o404 = o458.o403 = false;
  },
  //OR E
  //#0xB3:
  function (o458) {"use strict";
    o458.o163 |= o458.o166;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = o458.o404 = o458.o403 = false;
  },
  //OR H
  //#0xB4:
  function (o458) {"use strict";
    o458.o163 |= (o458.o168 >> 8);
    o458.o401 = (o458.o163 == 0);
    o458.o402 = o458.o404 = o458.o403 = false;
  },
  //OR L
  //#0xB5:
  function (o458) {"use strict";
    o458.o163 |= (o458.o168 & 0xFF);
    o458.o401 = (o458.o163 == 0);
    o458.o402 = o458.o404 = o458.o403 = false;
  },
  //OR (HL)
  //#0xB6:
  function (o458) {"use strict";
    o458.o163 |= o458.o427[o458.o168](o458, o458.o168);
    o458.o401 = (o458.o163 == 0);
    o458.o402 = o458.o404 = o458.o403 = false;
  },
  //OR A
  //#0xB7:
  function (o458) {"use strict";
    //number | same number == same number
    o458.o401 = (o458.o163 == 0);
    o458.o402 = o458.o404 = o458.o403 = false;
  },
  //CP B
  //#0xB8:
  function (o458) {"use strict";
    var o619 = o458.o163 - o458.o164;
    o458.o403 = ((o619 & 0xF) > (o458.o163 & 0xF));
    o458.o404 = (o619 < 0);
    o458.o401 = (o619 == 0);
    o458.o402 = true;
  },
  //CP C
  //#0xB9:
  function (o458) {"use strict";
    var o619 = o458.o163 - o458.o165;
    o458.o403 = ((o619 & 0xF) > (o458.o163 & 0xF));
    o458.o404 = (o619 < 0);
    o458.o401 = (o619 == 0);
    o458.o402 = true;
  },
  //CP D
  //#0xBA:
  function (o458) {"use strict";
    var o619 = o458.o163 - o458.o405;
    o458.o403 = ((o619 & 0xF) > (o458.o163 & 0xF));
    o458.o404 = (o619 < 0);
    o458.o401 = (o619 == 0);
    o458.o402 = true;
  },
  //CP E
  //#0xBB:
  function (o458) {"use strict";
    var o619 = o458.o163 - o458.o166;
    o458.o403 = ((o619 & 0xF) > (o458.o163 & 0xF));
    o458.o404 = (o619 < 0);
    o458.o401 = (o619 == 0);
    o458.o402 = true;
  },
  //CP H
  //#0xBC:
  function (o458) {"use strict";
    var o619 = o458.o163 - (o458.o168 >> 8);
    o458.o403 = ((o619 & 0xF) > (o458.o163 & 0xF));
    o458.o404 = (o619 < 0);
    o458.o401 = (o619 == 0);
    o458.o402 = true;
  },
  //CP L
  //#0xBD:
  function (o458) {"use strict";
    var o619 = o458.o163 - (o458.o168 & 0xFF);
    o458.o403 = ((o619 & 0xF) > (o458.o163 & 0xF));
    o458.o404 = (o619 < 0);
    o458.o401 = (o619 == 0);
    o458.o402 = true;
  },
  //CP (HL)
  //#0xBE:
  function (o458) {"use strict";
    var o619 = o458.o163 - o458.o427[o458.o168](o458, o458.o168);
    o458.o403 = ((o619 & 0xF) > (o458.o163 & 0xF));
    o458.o404 = (o619 < 0);
    o458.o401 = (o619 == 0);
    o458.o402 = true;
  },
  //CP A
  //#0xBF:
  function (o458) {"use strict";
    o458.o403 = o458.o404 = false;
    o458.o401 = o458.o402 = true;
  },
  //RET !FZ
  //#0xC0:
  function (o458) {"use strict";
    if (!o458.o401) {
      o458.o169 = (o458.o616((o458.o170 + 1) & 0xFFFF) << 8) | o458.o427[o458.o170](o458, o458.o170);
      o458.o170 = (o458.o170 + 2) & 0xFFFF;
      o458.o423 += 12;
    }
  },
  //POP BC
  //#0xC1:
  function (o458) {"use strict";
    o458.o165 = o458.o427[o458.o170](o458, o458.o170);
    o458.o164 = o458.o616((o458.o170 + 1) & 0xFFFF);
    o458.o170 = (o458.o170 + 2) & 0xFFFF;
  },
  //JP !FZ, nn
  //#0xC2:
  function (o458) {"use strict";
    if (!o458.o401) {
      o458.o169 = (o458.o616((o458.o169 + 1) & 0xFFFF) << 8) | o458.o427[o458.o169](o458, o458.o169);
      o458.o423 += 4;
    }
    else {
      o458.o169 = (o458.o169 + 2) & 0xFFFF;
    }
  },
  //JP nn
  //#0xC3:
  function (o458) {"use strict";
    o458.o169 = (o458.o616((o458.o169 + 1) & 0xFFFF) << 8) | o458.o427[o458.o169](o458, o458.o169);
  },
  //CALL !FZ, nn
  //#0xC4:
  function (o458) {"use strict";
    if (!o458.o401) {
      var o626 = (o458.o616((o458.o169 + 1) & 0xFFFF) << 8) | o458.o427[o458.o169](o458, o458.o169);
      o458.o169 = (o458.o169 + 2) & 0xFFFF;
      o458.o170 = (o458.o170 - 1) & 0xFFFF;
      o458.o428[o458.o170](o458, o458.o170, o458.o169 >> 8);
      o458.o170 = (o458.o170 - 1) & 0xFFFF;
      o458.o428[o458.o170](o458, o458.o170, o458.o169 & 0xFF);
      o458.o169 = o626;
      o458.o423 += 12;
    }
    else {
      o458.o169 = (o458.o169 + 2) & 0xFFFF;
    }
  },
  //PUSH BC
  //#0xC5:
  function (o458) {"use strict";
    o458.o170 = (o458.o170 - 1) & 0xFFFF;
    o458.o428[o458.o170](o458, o458.o170, o458.o164);
    o458.o170 = (o458.o170 - 1) & 0xFFFF;
    o458.o428[o458.o170](o458, o458.o170, o458.o165);
  },
  //ADD, n
  //#0xC6:
  function (o458) {"use strict";
    var o619 = o458.o163 + o458.o427[o458.o169](o458, o458.o169);
    o458.o169 = (o458.o169 + 1) & 0xFFFF;
    o458.o403 = ((o619 & 0xF) < (o458.o163 & 0xF));
    o458.o404 = (o619 > 0xFF);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = false;
  },
  //RST 0
  //#0xC7:
  function (o458) {"use strict";
    o458.o170 = (o458.o170 - 1) & 0xFFFF;
    o458.o428[o458.o170](o458, o458.o170, o458.o169 >> 8);
    o458.o170 = (o458.o170 - 1) & 0xFFFF;
    o458.o428[o458.o170](o458, o458.o170, o458.o169 & 0xFF);
    o458.o169 = 0;
  },
  //RET FZ
  //#0xC8:
  function (o458) {"use strict";
    if (o458.o401) {
      o458.o169 = (o458.o616((o458.o170 + 1) & 0xFFFF) << 8) | o458.o427[o458.o170](o458, o458.o170);
      o458.o170 = (o458.o170 + 2) & 0xFFFF;
      o458.o423 += 12;
    }
  },
  //RET
  //#0xC9:
  function (o458) {"use strict";
    o458.o169 =  (o458.o616((o458.o170 + 1) & 0xFFFF) << 8) | o458.o427[o458.o170](o458, o458.o170);
    o458.o170 = (o458.o170 + 2) & 0xFFFF;
  },
  //JP FZ, nn
  //#0xCA:
  function (o458) {"use strict";
    if (o458.o401) {
      o458.o169 = (o458.o616((o458.o169 + 1) & 0xFFFF) << 8) | o458.o427[o458.o169](o458, o458.o169);
      o458.o423 += 4;
    }
    else {
      o458.o169 = (o458.o169 + 2) & 0xFFFF;
    }
  },
  //Secondary OP Code Set:
  //#0xCB:
  function (o458) {"use strict";
    var o627 = o458.o427[o458.o169](o458, o458.o169);
    //Increment the program counter to the next instruction:
    o458.o169 = (o458.o169 + 1) & 0xFFFF;
    //Get how many CPU cycles the current 0xCBXX op code counts for:
    o458.o423 += o458.o628[o627];
    //Execute secondary OP codes for the 0xCB OP code call.
    o458.o629[o627](o458);
  },
  //CALL FZ, nn
  //#0xCC:
  function (o458) {"use strict";
    if (o458.o401) {
      var o626 = (o458.o616((o458.o169 + 1) & 0xFFFF) << 8) | o458.o427[o458.o169](o458, o458.o169);
      o458.o169 = (o458.o169 + 2) & 0xFFFF;
      o458.o170 = (o458.o170 - 1) & 0xFFFF;
      o458.o428[o458.o170](o458, o458.o170, o458.o169 >> 8);
      o458.o170 = (o458.o170 - 1) & 0xFFFF;
      o458.o428[o458.o170](o458, o458.o170, o458.o169 & 0xFF);
      o458.o169 = o626;
      o458.o423 += 12;
    }
    else {
      o458.o169 = (o458.o169 + 2) & 0xFFFF;
    }
  },
  //CALL nn
  //#0xCD:
  function (o458) {"use strict";
    var o626 = (o458.o616((o458.o169 + 1) & 0xFFFF) << 8) | o458.o427[o458.o169](o458, o458.o169);
    o458.o169 = (o458.o169 + 2) & 0xFFFF;
    o458.o170 = (o458.o170 - 1) & 0xFFFF;
    o458.o428[o458.o170](o458, o458.o170, o458.o169 >> 8);
    o458.o170 = (o458.o170 - 1) & 0xFFFF;
    o458.o428[o458.o170](o458, o458.o170, o458.o169 & 0xFF);
    o458.o169 = o626;
  },
  //ADC A, n
  //#0xCE:
  function (o458) {"use strict";
    var o625 = o458.o427[o458.o169](o458, o458.o169);
    o458.o169 = (o458.o169 + 1) & 0xFFFF;
    var o619 = o458.o163 + o625 + ((o458.o404) ? 1 : 0);
    o458.o403 = ((o458.o163 & 0xF) + (o625 & 0xF) + ((o458.o404) ? 1 : 0) > 0xF);
    o458.o404 = (o619 > 0xFF);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = false;
  },
  //RST 0x8
  //#0xCF:
  function (o458) {"use strict";
    o458.o170 = (o458.o170 - 1) & 0xFFFF;
    o458.o428[o458.o170](o458, o458.o170, o458.o169 >> 8);
    o458.o170 = (o458.o170 - 1) & 0xFFFF;
    o458.o428[o458.o170](o458, o458.o170, o458.o169 & 0xFF);
    o458.o169 = 0x8;
  },
  //RET !FC
  //#0xD0:
  function (o458) {"use strict";
    if (!o458.o404) {
      o458.o169 = (o458.o616((o458.o170 + 1) & 0xFFFF) << 8) | o458.o427[o458.o170](o458, o458.o170);
      o458.o170 = (o458.o170 + 2) & 0xFFFF;
      o458.o423 += 12;
    }
  },
  //POP DE
  //#0xD1:
  function (o458) {"use strict";
    o458.o166 = o458.o427[o458.o170](o458, o458.o170);
    o458.o405 = o458.o616((o458.o170 + 1) & 0xFFFF);
    o458.o170 = (o458.o170 + 2) & 0xFFFF;
  },
  //JP !FC, nn
  //#0xD2:
  function (o458) {"use strict";
    if (!o458.o404) {
      o458.o169 = (o458.o616((o458.o169 + 1) & 0xFFFF) << 8) | o458.o427[o458.o169](o458, o458.o169);
      o458.o423 += 4;
    }
    else {
      o458.o169 = (o458.o169 + 2) & 0xFFFF;
    }
  },
  //0xD3 - Illegal
  //#0xD3:
  function (o458) {"use strict";
    o133("Illegal op code 0xD3 called, pausing emulation.", 2);
    o630();
  },
  //CALL !FC, nn
  //#0xD4:
  function (o458) {"use strict";
    if (!o458.o404) {
      var o626 = (o458.o616((o458.o169 + 1) & 0xFFFF) << 8) | o458.o427[o458.o169](o458, o458.o169);
      o458.o169 = (o458.o169 + 2) & 0xFFFF;
      o458.o170 = (o458.o170 - 1) & 0xFFFF;
      o458.o428[o458.o170](o458, o458.o170, o458.o169 >> 8);
      o458.o170 = (o458.o170 - 1) & 0xFFFF;
      o458.o428[o458.o170](o458, o458.o170, o458.o169 & 0xFF);
      o458.o169 = o626;
      o458.o423 += 12;
    }
    else {
      o458.o169 = (o458.o169 + 2) & 0xFFFF;
    }
  },
  //PUSH DE
  //#0xD5:
  function (o458) {"use strict";
    o458.o170 = (o458.o170 - 1) & 0xFFFF;
    o458.o428[o458.o170](o458, o458.o170, o458.o405);
    o458.o170 = (o458.o170 - 1) & 0xFFFF;
    o458.o428[o458.o170](o458, o458.o170, o458.o166);
  },
  //SUB A, n
  //#0xD6:
  function (o458) {"use strict";
    var o619 = o458.o163 - o458.o427[o458.o169](o458, o458.o169);
    o458.o169 = (o458.o169 + 1) & 0xFFFF;
    o458.o403 = ((o458.o163 & 0xF) < (o619 & 0xF));
    o458.o404 = (o619 < 0);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o619 == 0);
    o458.o402 = true;
  },
  //RST 0x10
  //#0xD7:
  function (o458) {"use strict";
    o458.o170 = (o458.o170 - 1) & 0xFFFF;
    o458.o428[o458.o170](o458, o458.o170, o458.o169 >> 8);
    o458.o170 = (o458.o170 - 1) & 0xFFFF;
    o458.o428[o458.o170](o458, o458.o170, o458.o169 & 0xFF);
    o458.o169 = 0x10;
  },
  //RET FC
  //#0xD8:
  function (o458) {"use strict";
    if (o458.o404) {
      o458.o169 = (o458.o616((o458.o170 + 1) & 0xFFFF) << 8) | o458.o427[o458.o170](o458, o458.o170);
      o458.o170 = (o458.o170 + 2) & 0xFFFF;
      o458.o423 += 12;
    }
  },
  //RETI
  //#0xD9:
  function (o458) {"use strict";
    o458.o169 = (o458.o616((o458.o170 + 1) & 0xFFFF) << 8) | o458.o427[o458.o170](o458, o458.o170);
    o458.o170 = (o458.o170 + 2) & 0xFFFF;
    //Immediate for HALT:
    o458.o534 = (o458.o534 == 2 || o458.o427[o458.o169](o458, o458.o169) == 0x76) ? 1 : 2;
  },
  //JP FC, nn
  //#0xDA:
  function (o458) {"use strict";
    if (o458.o404) {
      o458.o169 = (o458.o616((o458.o169 + 1) & 0xFFFF) << 8) | o458.o427[o458.o169](o458, o458.o169);
      o458.o423 += 4;
    }
    else {
      o458.o169 = (o458.o169 + 2) & 0xFFFF;
    }
  },
  //0xDB - Illegal
  //#0xDB:
  function (o458) {"use strict";
    o133("Illegal op code 0xDB called, pausing emulation.", 2);
    o630();
  },
  //CALL FC, nn
  //#0xDC:
  function (o458) {"use strict";
    if (o458.o404) {
      var o626 = (o458.o616((o458.o169 + 1) & 0xFFFF) << 8) | o458.o427[o458.o169](o458, o458.o169);
      o458.o169 = (o458.o169 + 2) & 0xFFFF;
      o458.o170 = (o458.o170 - 1) & 0xFFFF;
      o458.o428[o458.o170](o458, o458.o170, o458.o169 >> 8);
      o458.o170 = (o458.o170 - 1) & 0xFFFF;
      o458.o428[o458.o170](o458, o458.o170, o458.o169 & 0xFF);
      o458.o169 = o626;
      o458.o423 += 12;
    }
    else {
      o458.o169 = (o458.o169 + 2) & 0xFFFF;
    }
  },
  //0xDD - Illegal
  //#0xDD:
  function (o458) {"use strict";
    o133("Illegal op code 0xDD called, pausing emulation.", 2);
    o630();
  },
  //SBC A, n
  //#0xDE:
  function (o458) {"use strict";
    var o618 = o458.o427[o458.o169](o458, o458.o169);
    o458.o169 = (o458.o169 + 1) & 0xFFFF;
    var o619 = o458.o163 - o618 - ((o458.o404) ? 1 : 0);
    o458.o403 = ((o458.o163 & 0xF) - (o618 & 0xF) - ((o458.o404) ? 1 : 0) < 0);
    o458.o404 = (o619 < 0);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = true;
  },
  //RST 0x18
  //#0xDF:
  function (o458) {"use strict";
    o458.o170 = (o458.o170 - 1) & 0xFFFF;
    o458.o428[o458.o170](o458, o458.o170, o458.o169 >> 8);
    o458.o170 = (o458.o170 - 1) & 0xFFFF;
    o458.o428[o458.o170](o458, o458.o170, o458.o169 & 0xFF);
    o458.o169 = 0x18;
  },
  //LDH (n), A
  //#0xE0:
  function (o458) {"use strict";
    o458.o631(o458.o427[o458.o169](o458, o458.o169), o458.o163);
    o458.o169 = (o458.o169 + 1) & 0xFFFF;
  },
  //POP HL
  //#0xE1:
  function (o458) {"use strict";
    o458.o168 = (o458.o616((o458.o170 + 1) & 0xFFFF) << 8) | o458.o427[o458.o170](o458, o458.o170);
    o458.o170 = (o458.o170 + 2) & 0xFFFF;
  },
  //LD (0xFF00 + C), A
  //#0xE2:
  function (o458) {"use strict";
    o458.o430[o458.o165](o458, o458.o165, o458.o163);
  },
  //0xE3 - Illegal
  //#0xE3:
  function (o458) {"use strict";
    o133("Illegal op code 0xE3 called, pausing emulation.", 2);
    o630();
  },
  //0xE4 - Illegal
  //#0xE4:
  function (o458) {"use strict";
    o133("Illegal op code 0xE4 called, pausing emulation.", 2);
    o630();
  },
  //PUSH HL
  //#0xE5:
  function (o458) {"use strict";
    o458.o170 = (o458.o170 - 1) & 0xFFFF;
    o458.o428[o458.o170](o458, o458.o170, o458.o168 >> 8);
    o458.o170 = (o458.o170 - 1) & 0xFFFF;
    o458.o428[o458.o170](o458, o458.o170, o458.o168 & 0xFF);
  },
  //AND n
  //#0xE6:
  function (o458) {"use strict";
    o458.o163 &= o458.o427[o458.o169](o458, o458.o169);
    o458.o169 = (o458.o169 + 1) & 0xFFFF;
    o458.o401 = (o458.o163 == 0);
    o458.o403 = true;
    o458.o402 = o458.o404 = false;
  },
  //RST 0x20
  //#0xE7:
  function (o458) {"use strict";
    o458.o170 = (o458.o170 - 1) & 0xFFFF;
    o458.o428[o458.o170](o458, o458.o170, o458.o169 >> 8);
    o458.o170 = (o458.o170 - 1) & 0xFFFF;
    o458.o428[o458.o170](o458, o458.o170, o458.o169 & 0xFF);
    o458.o169 = 0x20;
  },
  //ADD SP, n
  //#0xE8:
  function (o458) {"use strict";
    var o632 = (o458.o427[o458.o169](o458, o458.o169) << 24) >> 24;
    o458.o169 = (o458.o169 + 1) & 0xFFFF;
    var o633 = (o458.o170 + o632) & 0xFFFF;
    o632 = o458.o170 ^ o632 ^ o633;
    o458.o170 = o633;
    o458.o404 = ((o632 & 0x100) == 0x100);
    o458.o403 = ((o632 & 0x10) == 0x10);
    o458.o401 = o458.o402 = false;
  },
  //JP, (HL)
  //#0xE9:
  function (o458) {"use strict";
    o458.o169 = o458.o168;
  },
  //LD n, A
  //#0xEA:
  function (o458) {"use strict";
    o458.o617((o458.o616((o458.o169 + 1) & 0xFFFF) << 8) | o458.o427[o458.o169](o458, o458.o169), o458.o163);
    o458.o169 = (o458.o169 + 2) & 0xFFFF;
  },
  //0xEB - Illegal
  //#0xEB:
  function (o458) {"use strict";
    o133("Illegal op code 0xEB called, pausing emulation.", 2);
    o630();
  },
  //0xEC - Illegal
  //#0xEC:
  function (o458) {"use strict";
    o133("Illegal op code 0xEC called, pausing emulation.", 2);
    o630();
  },
  //0xED - Illegal
  //#0xED:
  function (o458) {"use strict";
    o133("Illegal op code 0xED called, pausing emulation.", 2);
    o630();
  },
  //XOR n
  //#0xEE:
  function (o458) {"use strict";
    o458.o163 ^= o458.o427[o458.o169](o458, o458.o169);
    o458.o169 = (o458.o169 + 1) & 0xFFFF;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = o458.o403 = o458.o404 = false;
  },
  //RST 0x28
  //#0xEF:
  function (o458) {"use strict";
    o458.o170 = (o458.o170 - 1) & 0xFFFF;
    o458.o428[o458.o170](o458, o458.o170, o458.o169 >> 8);
    o458.o170 = (o458.o170 - 1) & 0xFFFF;
    o458.o428[o458.o170](o458, o458.o170, o458.o169 & 0xFF);
    o458.o169 = 0x28;
  },
  //LDH A, (n)
  //#0xF0:
  function (o458) {"use strict";
    o458.o163 = o458.o634(o458.o427[o458.o169](o458, o458.o169));
    o458.o169 = (o458.o169 + 1) & 0xFFFF;
  },
  //POP AF
  //#0xF1:
  function (o458) {"use strict";
    var o618 = o458.o427[o458.o170](o458, o458.o170);
    o458.o401 = (o618 > 0x7F);
    o458.o402 = ((o618 & 0x40) == 0x40);
    o458.o403 = ((o618 & 0x20) == 0x20);
    o458.o404 = ((o618 & 0x10) == 0x10);
    o458.o163 = o458.o616((o458.o170 + 1) & 0xFFFF);
    o458.o170 = (o458.o170 + 2) & 0xFFFF;
  },
  //LD A, (0xFF00 + C)
  //#0xF2:
  function (o458) {"use strict";
    o458.o163 = o458.o429[o458.o165](o458, o458.o165);
  },
  //DI
  //#0xF3:
  function (o458) {"use strict";
    o458.o418 = false;
    o458.o534 = 0;
  },
  //0xF4 - Illegal
  //#0xF4:
  function (o458) {"use strict";
    o133("Illegal op code 0xF4 called, pausing emulation.", 2);
    o630();
  },
  //PUSH AF
  //#0xF5:
  function (o458) {"use strict";
    o458.o170 = (o458.o170 - 1) & 0xFFFF;
    o458.o428[o458.o170](o458, o458.o170, o458.o163);
    o458.o170 = (o458.o170 - 1) & 0xFFFF;
    o458.o428[o458.o170](o458, o458.o170, ((o458.o401) ? 0x80 : 0) | ((o458.o402) ? 0x40 : 0) | ((o458.o403) ? 0x20 : 0) | ((o458.o404) ? 0x10 : 0));
  },
  //OR n
  //#0xF6:
  function (o458) {"use strict";
    o458.o163 |= o458.o427[o458.o169](o458, o458.o169);
    o458.o401 = (o458.o163 == 0);
    o458.o169 = (o458.o169 + 1) & 0xFFFF;
    o458.o402 = o458.o404 = o458.o403 = false;
  },
  //RST 0x30
  //#0xF7:
  function (o458) {"use strict";
    o458.o170 = (o458.o170 - 1) & 0xFFFF;
    o458.o428[o458.o170](o458, o458.o170, o458.o169 >> 8);
    o458.o170 = (o458.o170 - 1) & 0xFFFF;
    o458.o428[o458.o170](o458, o458.o170, o458.o169 & 0xFF);
    o458.o169 = 0x30;
  },
  //LDHL SP, n
  //#0xF8:
  function (o458) {"use strict";
    var o618 = (o458.o427[o458.o169](o458, o458.o169) << 24) >> 24;
    o458.o169 = (o458.o169 + 1) & 0xFFFF;
    o458.o168 = (o458.o170 + o618) & 0xFFFF;
    o618 = o458.o170 ^ o618 ^ o458.o168;
    o458.o404 = ((o618 & 0x100) == 0x100);
    o458.o403 = ((o618 & 0x10) == 0x10);
    o458.o401 = o458.o402 = false;
  },
  //LD SP, HL
  //#0xF9:
  function (o458) {"use strict";
    o458.o170 = o458.o168;
  },
  //LD A, (nn)
  //#0xFA:
  function (o458) {"use strict";
    o458.o163 = o458.o616((o458.o616((o458.o169 + 1) & 0xFFFF) << 8) | o458.o427[o458.o169](o458, o458.o169));
    o458.o169 = (o458.o169 + 2) & 0xFFFF;
  },
  //EI
  //#0xFB:
  function (o458) {"use strict";
    //Immediate for HALT:
    o458.o534 = (o458.o534 == 2 || o458.o427[o458.o169](o458, o458.o169) == 0x76) ? 1 : 2;
  },
  //0xFC - Illegal
  //#0xFC:
  function (o458) {"use strict";
    o133("Illegal op code 0xFC called, pausing emulation.", 2);
    o630();
  },
  //0xFD - Illegal
  //#0xFD:
  function (o458) {"use strict";
    o133("Illegal op code 0xFD called, pausing emulation.", 2);
    o630();
  },
  //CP n
  //#0xFE:
  function (o458) {"use strict";
    var o619 = o458.o163 - o458.o427[o458.o169](o458, o458.o169);
    o458.o169 = (o458.o169 + 1) & 0xFFFF;
    o458.o403 = ((o619 & 0xF) > (o458.o163 & 0xF));
    o458.o404 = (o619 < 0);
    o458.o401 = (o619 == 0);
    o458.o402 = true;
  },
  //RST 0x38
  //#0xFF:
  function (o458) {"use strict";
    o458.o170 = (o458.o170 - 1) & 0xFFFF;
    o458.o428[o458.o170](o458, o458.o170, o458.o169 >> 8);
    o458.o170 = (o458.o170 - 1) & 0xFFFF;
    o458.o428[o458.o170](o458, o458.o170, o458.o169 & 0xFF);
    o458.o169 = 0x38;
  }
];
o397.prototype.o629 = [
  //RLC B
  //#0x00:
  function (o458) {"use strict";
    o458.o404 = (o458.o164 > 0x7F);
    o458.o164 = ((o458.o164 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o164 == 0);
  }
  //RLC C
  //#0x01:
  ,function (o458) {"use strict";
    o458.o404 = (o458.o165 > 0x7F);
    o458.o165 = ((o458.o165 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o165 == 0);
  }
  //RLC D
  //#0x02:
  ,function (o458) {"use strict";
    o458.o404 = (o458.o405 > 0x7F);
    o458.o405 = ((o458.o405 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o405 == 0);
  }
  //RLC E
  //#0x03:
  ,function (o458) {"use strict";
    o458.o404 = (o458.o166 > 0x7F);
    o458.o166 = ((o458.o166 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o166 == 0);
  }
  //RLC H
  //#0x04:
  ,function (o458) {"use strict";
    o458.o404 = (o458.o168 > 0x7FFF);
    o458.o168 = ((o458.o168 << 1) & 0xFE00) | ((o458.o404) ? 0x100 : 0) | (o458.o168 & 0xFF);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o168 < 0x100);
  }
  //RLC L
  //#0x05:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o168 & 0x80) == 0x80);
    o458.o168 = (o458.o168 & 0xFF00) | ((o458.o168 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o403 = o458.o402 = false;
    o458.o401 = ((o458.o168 & 0xFF) == 0);
  }
  //RLC (HL)
  //#0x06:
  ,function (o458) {"use strict";
    var o618 = o458.o427[o458.o168](o458, o458.o168);
    o458.o404 = (o618 > 0x7F);
    o618 = ((o618 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o428[o458.o168](o458, o458.o168, o618);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o618 == 0);
  }
  //RLC A
  //#0x07:
  ,function (o458) {"use strict";
    o458.o404 = (o458.o163 > 0x7F);
    o458.o163 = ((o458.o163 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o163 == 0);
  }
  //RRC B
  //#0x08:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o164 & 0x01) == 0x01);
    o458.o164 = ((o458.o404) ? 0x80 : 0) | (o458.o164 >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o164 == 0);
  }
  //RRC C
  //#0x09:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o165 & 0x01) == 0x01);
    o458.o165 = ((o458.o404) ? 0x80 : 0) | (o458.o165 >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o165 == 0);
  }
  //RRC D
  //#0x0A:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o405 & 0x01) == 0x01);
    o458.o405 = ((o458.o404) ? 0x80 : 0) | (o458.o405 >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o405 == 0);
  }
  //RRC E
  //#0x0B:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o166 & 0x01) == 0x01);
    o458.o166 = ((o458.o404) ? 0x80 : 0) | (o458.o166 >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o166 == 0);
  }
  //RRC H
  //#0x0C:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o168 & 0x0100) == 0x0100);
    o458.o168 = ((o458.o404) ? 0x8000 : 0) | ((o458.o168 >> 1) & 0xFF00) | (o458.o168 & 0xFF);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o168 < 0x100);
  }
  //RRC L
  //#0x0D:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o168 & 0x01) == 0x01);
    o458.o168 = (o458.o168 & 0xFF00) | ((o458.o404) ? 0x80 : 0) | ((o458.o168 & 0xFF) >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = ((o458.o168 & 0xFF) == 0);
  }
  //RRC (HL)
  //#0x0E:
  ,function (o458) {"use strict";
    var o618 = o458.o427[o458.o168](o458, o458.o168);
    o458.o404 = ((o618 & 0x01) == 0x01);
    o618 = ((o458.o404) ? 0x80 : 0) | (o618 >> 1);
    o458.o428[o458.o168](o458, o458.o168, o618);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o618 == 0);
  }
  //RRC A
  //#0x0F:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o163 & 0x01) == 0x01);
    o458.o163 = ((o458.o404) ? 0x80 : 0) | (o458.o163 >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o163 == 0);
  }
  //RL B
  //#0x10:
  ,function (o458) {"use strict";
    var o635 = (o458.o164 > 0x7F);
    o458.o164 = ((o458.o164 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o404 = o635;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o164 == 0);
  }
  //RL C
  //#0x11:
  ,function (o458) {"use strict";
    var o635 = (o458.o165 > 0x7F);
    o458.o165 = ((o458.o165 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o404 = o635;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o165 == 0);
  }
  //RL D
  //#0x12:
  ,function (o458) {"use strict";
    var o635 = (o458.o405 > 0x7F);
    o458.o405 = ((o458.o405 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o404 = o635;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o405 == 0);
  }
  //RL E
  //#0x13:
  ,function (o458) {"use strict";
    var o635 = (o458.o166 > 0x7F);
    o458.o166 = ((o458.o166 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o404 = o635;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o166 == 0);
  }
  //RL H
  //#0x14:
  ,function (o458) {"use strict";
    var o635 = (o458.o168 > 0x7FFF);
    o458.o168 = ((o458.o168 << 1) & 0xFE00) | ((o458.o404) ? 0x100 : 0) | (o458.o168 & 0xFF);
    o458.o404 = o635;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o168 < 0x100);
  }
  //RL L
  //#0x15:
  ,function (o458) {"use strict";
    var o635 = ((o458.o168 & 0x80) == 0x80);
    o458.o168 = (o458.o168 & 0xFF00) | ((o458.o168 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o404 = o635;
    o458.o403 = o458.o402 = false;
    o458.o401 = ((o458.o168 & 0xFF) == 0);
  }
  //RL (HL)
  //#0x16:
  ,function (o458) {"use strict";
    var o618 = o458.o427[o458.o168](o458, o458.o168);
    var o635 = (o618 > 0x7F);
    o618 = ((o618 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o404 = o635;
    o458.o428[o458.o168](o458, o458.o168, o618);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o618 == 0);
  }
  //RL A
  //#0x17:
  ,function (o458) {"use strict";
    var o635 = (o458.o163 > 0x7F);
    o458.o163 = ((o458.o163 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o404 = o635;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o163 == 0);
  }
  //RR B
  //#0x18:
  ,function (o458) {"use strict";
    var o635 = ((o458.o164 & 0x01) == 0x01);
    o458.o164 = ((o458.o404) ? 0x80 : 0) | (o458.o164 >> 1);
    o458.o404 = o635;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o164 == 0);
  }
  //RR C
  //#0x19:
  ,function (o458) {"use strict";
    var o635 = ((o458.o165 & 0x01) == 0x01);
    o458.o165 = ((o458.o404) ? 0x80 : 0) | (o458.o165 >> 1);
    o458.o404 = o635;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o165 == 0);
  }
  //RR D
  //#0x1A:
  ,function (o458) {"use strict";
    var o635 = ((o458.o405 & 0x01) == 0x01);
    o458.o405 = ((o458.o404) ? 0x80 : 0) | (o458.o405 >> 1);
    o458.o404 = o635;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o405 == 0);
  }
  //RR E
  //#0x1B:
  ,function (o458) {"use strict";
    var o635 = ((o458.o166 & 0x01) == 0x01);
    o458.o166 = ((o458.o404) ? 0x80 : 0) | (o458.o166 >> 1);
    o458.o404 = o635;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o166 == 0);
  }
  //RR H
  //#0x1C:
  ,function (o458) {"use strict";
    var o635 = ((o458.o168 & 0x0100) == 0x0100);
    o458.o168 = ((o458.o404) ? 0x8000 : 0) | ((o458.o168 >> 1) & 0xFF00) | (o458.o168 & 0xFF);
    o458.o404 = o635;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o168 < 0x100);
  }
  //RR L
  //#0x1D:
  ,function (o458) {"use strict";
    var o635 = ((o458.o168 & 0x01) == 0x01);
    o458.o168 = (o458.o168 & 0xFF00) | ((o458.o404) ? 0x80 : 0) | ((o458.o168 & 0xFF) >> 1);
    o458.o404 = o635;
    o458.o403 = o458.o402 = false;
    o458.o401 = ((o458.o168 & 0xFF) == 0);
  }
  //RR (HL)
  //#0x1E:
  ,function (o458) {"use strict";
    var o618 = o458.o427[o458.o168](o458, o458.o168);
    var o635 = ((o618 & 0x01) == 0x01);
    o618 = ((o458.o404) ? 0x80 : 0) | (o618 >> 1);
    o458.o404 = o635;
    o458.o428[o458.o168](o458, o458.o168, o618);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o618 == 0);
  }
  //RR A
  //#0x1F:
  ,function (o458) {"use strict";
    var o635 = ((o458.o163 & 0x01) == 0x01);
    o458.o163 = ((o458.o404) ? 0x80 : 0) | (o458.o163 >> 1);
    o458.o404 = o635;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o163 == 0);
  }
  //SLA B
  //#0x20:
  ,function (o458) {"use strict";
    o458.o404 = (o458.o164 > 0x7F);
    o458.o164 = (o458.o164 << 1) & 0xFF;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o164 == 0);
  }
  //SLA C
  //#0x21:
  ,function (o458) {"use strict";
    o458.o404 = (o458.o165 > 0x7F);
    o458.o165 = (o458.o165 << 1) & 0xFF;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o165 == 0);
  }
  //SLA D
  //#0x22:
  ,function (o458) {"use strict";
    o458.o404 = (o458.o405 > 0x7F);
    o458.o405 = (o458.o405 << 1) & 0xFF;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o405 == 0);
  }
  //SLA E
  //#0x23:
  ,function (o458) {"use strict";
    o458.o404 = (o458.o166 > 0x7F);
    o458.o166 = (o458.o166 << 1) & 0xFF;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o166 == 0);
  }
  //SLA H
  //#0x24:
  ,function (o458) {"use strict";
    o458.o404 = (o458.o168 > 0x7FFF);
    o458.o168 = ((o458.o168 << 1) & 0xFE00) | (o458.o168 & 0xFF);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o168 < 0x100);
  }
  //SLA L
  //#0x25:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o168 & 0x0080) == 0x0080);
    o458.o168 = (o458.o168 & 0xFF00) | ((o458.o168 << 1) & 0xFF);
    o458.o403 = o458.o402 = false;
    o458.o401 = ((o458.o168 & 0xFF) == 0);
  }
  //SLA (HL)
  //#0x26:
  ,function (o458) {"use strict";
    var o618 = o458.o427[o458.o168](o458, o458.o168);
    o458.o404 = (o618 > 0x7F);
    o618 = (o618 << 1) & 0xFF;
    o458.o428[o458.o168](o458, o458.o168, o618);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o618 == 0);
  }
  //SLA A
  //#0x27:
  ,function (o458) {"use strict";
    o458.o404 = (o458.o163 > 0x7F);
    o458.o163 = (o458.o163 << 1) & 0xFF;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o163 == 0);
  }
  //SRA B
  //#0x28:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o164 & 0x01) == 0x01);
    o458.o164 = (o458.o164 & 0x80) | (o458.o164 >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o164 == 0);
  }
  //SRA C
  //#0x29:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o165 & 0x01) == 0x01);
    o458.o165 = (o458.o165 & 0x80) | (o458.o165 >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o165 == 0);
  }
  //SRA D
  //#0x2A:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o405 & 0x01) == 0x01);
    o458.o405 = (o458.o405 & 0x80) | (o458.o405 >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o405 == 0);
  }
  //SRA E
  //#0x2B:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o166 & 0x01) == 0x01);
    o458.o166 = (o458.o166 & 0x80) | (o458.o166 >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o166 == 0);
  }
  //SRA H
  //#0x2C:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o168 & 0x0100) == 0x0100);
    o458.o168 = ((o458.o168 >> 1) & 0xFF00) | (o458.o168 & 0x80FF);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o168 < 0x100);
  }
  //SRA L
  //#0x2D:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o168 & 0x0001) == 0x0001);
    o458.o168 = (o458.o168 & 0xFF80) | ((o458.o168 & 0xFF) >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = ((o458.o168 & 0xFF) == 0);
  }
  //SRA (HL)
  //#0x2E:
  ,function (o458) {"use strict";
    var o618 = o458.o427[o458.o168](o458, o458.o168);
    o458.o404 = ((o618 & 0x01) == 0x01);
    o618 = (o618 & 0x80) | (o618 >> 1);
    o458.o428[o458.o168](o458, o458.o168, o618);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o618 == 0);
  }
  //SRA A
  //#0x2F:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o163 & 0x01) == 0x01);
    o458.o163 = (o458.o163 & 0x80) | (o458.o163 >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o163 == 0);
  }
  //SWAP B
  //#0x30:
  ,function (o458) {"use strict";
    o458.o164 = ((o458.o164 & 0xF) << 4) | (o458.o164 >> 4);
    o458.o401 = (o458.o164 == 0);
    o458.o404 = o458.o403 = o458.o402 = false;
  }
  //SWAP C
  //#0x31:
  ,function (o458) {"use strict";
    o458.o165 = ((o458.o165 & 0xF) << 4) | (o458.o165 >> 4);
    o458.o401 = (o458.o165 == 0);
    o458.o404 = o458.o403 = o458.o402 = false;
  }
  //SWAP D
  //#0x32:
  ,function (o458) {"use strict";
    o458.o405 = ((o458.o405 & 0xF) << 4) | (o458.o405 >> 4);
    o458.o401 = (o458.o405 == 0);
    o458.o404 = o458.o403 = o458.o402 = false;
  }
  //SWAP E
  //#0x33:
  ,function (o458) {"use strict";
    o458.o166 = ((o458.o166 & 0xF) << 4) | (o458.o166 >> 4);
    o458.o401 = (o458.o166 == 0);
    o458.o404 = o458.o403 = o458.o402 = false;
  }
  //SWAP H
  //#0x34:
  ,function (o458) {"use strict";
    o458.o168 = ((o458.o168 & 0xF00) << 4) | ((o458.o168 & 0xF000) >> 4) | (o458.o168 & 0xFF);
    o458.o401 = (o458.o168 < 0x100);
    o458.o404 = o458.o403 = o458.o402 = false;
  }
  //SWAP L
  //#0x35:
  ,function (o458) {"use strict";
    o458.o168 = (o458.o168 & 0xFF00) | ((o458.o168 & 0xF) << 4) | ((o458.o168 & 0xF0) >> 4);
    o458.o401 = ((o458.o168 & 0xFF) == 0);
    o458.o404 = o458.o403 = o458.o402 = false;
  }
  //SWAP (HL)
  //#0x36:
  ,function (o458) {"use strict";
    var o618 = o458.o427[o458.o168](o458, o458.o168);
    o618 = ((o618 & 0xF) << 4) | (o618 >> 4);
    o458.o428[o458.o168](o458, o458.o168, o618);
    o458.o401 = (o618 == 0);
    o458.o404 = o458.o403 = o458.o402 = false;
  }
  //SWAP A
  //#0x37:
  ,function (o458) {"use strict";
    o458.o163 = ((o458.o163 & 0xF) << 4) | (o458.o163 >> 4);
    o458.o401 = (o458.o163 == 0);
    o458.o404 = o458.o403 = o458.o402 = false;
  }
  //SRL B
  //#0x38:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o164 & 0x01) == 0x01);
    o458.o164 >>= 1;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o164 == 0);
  }
  //SRL C
  //#0x39:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o165 & 0x01) == 0x01);
    o458.o165 >>= 1;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o165 == 0);
  }
  //SRL D
  //#0x3A:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o405 & 0x01) == 0x01);
    o458.o405 >>= 1;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o405 == 0);
  }
  //SRL E
  //#0x3B:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o166 & 0x01) == 0x01);
    o458.o166 >>= 1;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o166 == 0);
  }
  //SRL H
  //#0x3C:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o168 & 0x0100) == 0x0100);
    o458.o168 = ((o458.o168 >> 1) & 0xFF00) | (o458.o168 & 0xFF);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o168 < 0x100);
  }
  //SRL L
  //#0x3D:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o168 & 0x0001) == 0x0001);
    o458.o168 = (o458.o168 & 0xFF00) | ((o458.o168 & 0xFF) >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = ((o458.o168 & 0xFF) == 0);
  }
  //SRL (HL)
  //#0x3E:
  ,function (o458) {"use strict";
    var o618 = o458.o427[o458.o168](o458, o458.o168);
    o458.o404 = ((o618 & 0x01) == 0x01);
    o458.o428[o458.o168](o458, o458.o168, o618 >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o618 < 2);
  }
  //SRL A
  //#0x3F:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o163 & 0x01) == 0x01);
    o458.o163 >>= 1;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o163 == 0);
  }
  //BIT 0, B
  //#0x40:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o164 & 0x01) == 0);
  }
  //BIT 0, C
  //#0x41:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o165 & 0x01) == 0);
  }
  //BIT 0, D
  //#0x42:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o405 & 0x01) == 0);
  }
  //BIT 0, E
  //#0x43:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o166 & 0x01) == 0);
  }
  //BIT 0, H
  //#0x44:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x0100) == 0);
  }
  //BIT 0, L
  //#0x45:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x0001) == 0);
  }
  //BIT 0, (HL)
  //#0x46:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o427[o458.o168](o458, o458.o168) & 0x01) == 0);
  }
  //BIT 0, A
  //#0x47:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o163 & 0x01) == 0);
  }
  //BIT 1, B
  //#0x48:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o164 & 0x02) == 0);
  }
  //BIT 1, C
  //#0x49:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o165 & 0x02) == 0);
  }
  //BIT 1, D
  //#0x4A:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o405 & 0x02) == 0);
  }
  //BIT 1, E
  //#0x4B:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o166 & 0x02) == 0);
  }
  //BIT 1, H
  //#0x4C:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x0200) == 0);
  }
  //BIT 1, L
  //#0x4D:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x0002) == 0);
  }
  //BIT 1, (HL)
  //#0x4E:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o427[o458.o168](o458, o458.o168) & 0x02) == 0);
  }
  //BIT 1, A
  //#0x4F:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o163 & 0x02) == 0);
  }
  //BIT 2, B
  //#0x50:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o164 & 0x04) == 0);
  }
  //BIT 2, C
  //#0x51:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o165 & 0x04) == 0);
  }
  //BIT 2, D
  //#0x52:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o405 & 0x04) == 0);
  }
  //BIT 2, E
  //#0x53:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o166 & 0x04) == 0);
  }
  //BIT 2, H
  //#0x54:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x0400) == 0);
  }
  //BIT 2, L
  //#0x55:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x0004) == 0);
  }
  //BIT 2, (HL)
  //#0x56:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o427[o458.o168](o458, o458.o168) & 0x04) == 0);
  }
  //BIT 2, A
  //#0x57:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o163 & 0x04) == 0);
  }
  //BIT 3, B
  //#0x58:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o164 & 0x08) == 0);
  }
  //BIT 3, C
  //#0x59:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o165 & 0x08) == 0);
  }
  //BIT 3, D
  //#0x5A:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o405 & 0x08) == 0);
  }
  //BIT 3, E
  //#0x5B:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o166 & 0x08) == 0);
  }
  //BIT 3, H
  //#0x5C:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x0800) == 0);
  }
  //BIT 3, L
  //#0x5D:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x0008) == 0);
  }
  //BIT 3, (HL)
  //#0x5E:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o427[o458.o168](o458, o458.o168) & 0x08) == 0);
  }
  //BIT 3, A
  //#0x5F:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o163 & 0x08) == 0);
  }
  //BIT 4, B
  //#0x60:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o164 & 0x10) == 0);
  }
  //BIT 4, C
  //#0x61:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o165 & 0x10) == 0);
  }
  //BIT 4, D
  //#0x62:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o405 & 0x10) == 0);
  }
  //BIT 4, E
  //#0x63:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o166 & 0x10) == 0);
  }
  //BIT 4, H
  //#0x64:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x1000) == 0);
  }
  //BIT 4, L
  //#0x65:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x0010) == 0);
  }
  //BIT 4, (HL)
  //#0x66:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o427[o458.o168](o458, o458.o168) & 0x10) == 0);
  }
  //BIT 4, A
  //#0x67:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o163 & 0x10) == 0);
  }
  //BIT 5, B
  //#0x68:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o164 & 0x20) == 0);
  }
  //BIT 5, C
  //#0x69:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o165 & 0x20) == 0);
  }
  //BIT 5, D
  //#0x6A:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o405 & 0x20) == 0);
  }
  //BIT 5, E
  //#0x6B:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o166 & 0x20) == 0);
  }
  //BIT 5, H
  //#0x6C:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x2000) == 0);
  }
  //BIT 5, L
  //#0x6D:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x0020) == 0);
  }
  //BIT 5, (HL)
  //#0x6E:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o427[o458.o168](o458, o458.o168) & 0x20) == 0);
  }
  //BIT 5, A
  //#0x6F:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o163 & 0x20) == 0);
  }
  //BIT 6, B
  //#0x70:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o164 & 0x40) == 0);
  }
  //BIT 6, C
  //#0x71:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o165 & 0x40) == 0);
  }
  //BIT 6, D
  //#0x72:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o405 & 0x40) == 0);
  }
  //BIT 6, E
  //#0x73:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o166 & 0x40) == 0);
  }
  //BIT 6, H
  //#0x74:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x4000) == 0);
  }
  //BIT 6, L
  //#0x75:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x0040) == 0);
  }
  //BIT 6, (HL)
  //#0x76:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o427[o458.o168](o458, o458.o168) & 0x40) == 0);
  }
  //BIT 6, A
  //#0x77:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o163 & 0x40) == 0);
  }
  //BIT 7, B
  //#0x78:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o164 & 0x80) == 0);
  }
  //BIT 7, C
  //#0x79:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o165 & 0x80) == 0);
  }
  //BIT 7, D
  //#0x7A:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o405 & 0x80) == 0);
  }
  //BIT 7, E
  //#0x7B:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o166 & 0x80) == 0);
  }
  //BIT 7, H
  //#0x7C:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x8000) == 0);
  }
  //BIT 7, L
  //#0x7D:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x0080) == 0);
  }
  //BIT 7, (HL)
  //#0x7E:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o427[o458.o168](o458, o458.o168) & 0x80) == 0);
  }
  //BIT 7, A
  //#0x7F:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o163 & 0x80) == 0);
  }
  //RES 0, B
  //#0x80:
  ,function (o458) {"use strict";
    o458.o164 &= 0xFE;
  }
  //RES 0, C
  //#0x81:
  ,function (o458) {"use strict";
    o458.o165 &= 0xFE;
  }
  //RES 0, D
  //#0x82:
  ,function (o458) {"use strict";
    o458.o405 &= 0xFE;
  }
  //RES 0, E
  //#0x83:
  ,function (o458) {"use strict";
    o458.o166 &= 0xFE;
  }
  //RES 0, H
  //#0x84:
  ,function (o458) {"use strict";
    o458.o168 &= 0xFEFF;
  }
  //RES 0, L
  //#0x85:
  ,function (o458) {"use strict";
    o458.o168 &= 0xFFFE;
  }
  //RES 0, (HL)
  //#0x86:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) & 0xFE);
  }
  //RES 0, A
  //#0x87:
  ,function (o458) {"use strict";
    o458.o163 &= 0xFE;
  }
  //RES 1, B
  //#0x88:
  ,function (o458) {"use strict";
    o458.o164 &= 0xFD;
  }
  //RES 1, C
  //#0x89:
  ,function (o458) {"use strict";
    o458.o165 &= 0xFD;
  }
  //RES 1, D
  //#0x8A:
  ,function (o458) {"use strict";
    o458.o405 &= 0xFD;
  }
  //RES 1, E
  //#0x8B:
  ,function (o458) {"use strict";
    o458.o166 &= 0xFD;
  }
  //RES 1, H
  //#0x8C:
  ,function (o458) {"use strict";
    o458.o168 &= 0xFDFF;
  }
  //RES 1, L
  //#0x8D:
  ,function (o458) {"use strict";
    o458.o168 &= 0xFFFD;
  }
  //RES 1, (HL)
  //#0x8E:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) & 0xFD);
  }
  //RES 1, A
  //#0x8F:
  ,function (o458) {"use strict";
    o458.o163 &= 0xFD;
  }
  //RES 2, B
  //#0x90:
  ,function (o458) {"use strict";
    o458.o164 &= 0xFB;
  }
  //RES 2, C
  //#0x91:
  ,function (o458) {"use strict";
    o458.o165 &= 0xFB;
  }
  //RES 2, D
  //#0x92:
  ,function (o458) {"use strict";
    o458.o405 &= 0xFB;
  }
  //RES 2, E
  //#0x93:
  ,function (o458) {"use strict";
    o458.o166 &= 0xFB;
  }
  //RES 2, H
  //#0x94:
  ,function (o458) {"use strict";
    o458.o168 &= 0xFBFF;
  }
  //RES 2, L
  //#0x95:
  ,function (o458) {"use strict";
    o458.o168 &= 0xFFFB;
  }
  //RES 2, (HL)
  //#0x96:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) & 0xFB);
  }
  //RES 2, A
  //#0x97:
  ,function (o458) {"use strict";
    o458.o163 &= 0xFB;
  }
  //RES 3, B
  //#0x98:
  ,function (o458) {"use strict";
    o458.o164 &= 0xF7;
  }
  //RES 3, C
  //#0x99:
  ,function (o458) {"use strict";
    o458.o165 &= 0xF7;
  }
  //RES 3, D
  //#0x9A:
  ,function (o458) {"use strict";
    o458.o405 &= 0xF7;
  }
  //RES 3, E
  //#0x9B:
  ,function (o458) {"use strict";
    o458.o166 &= 0xF7;
  }
  //RES 3, H
  //#0x9C:
  ,function (o458) {"use strict";
    o458.o168 &= 0xF7FF;
  }
  //RES 3, L
  //#0x9D:
  ,function (o458) {"use strict";
    o458.o168 &= 0xFFF7;
  }
  //RES 3, (HL)
  //#0x9E:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) & 0xF7);
  }
  //RES 3, A
  //#0x9F:
  ,function (o458) {"use strict";
    o458.o163 &= 0xF7;
  }
  //RES 3, B
  //#0xA0:
  ,function (o458) {"use strict";
    o458.o164 &= 0xEF;
  }
  //RES 4, C
  //#0xA1:
  ,function (o458) {"use strict";
    o458.o165 &= 0xEF;
  }
  //RES 4, D
  //#0xA2:
  ,function (o458) {"use strict";
    o458.o405 &= 0xEF;
  }
  //RES 4, E
  //#0xA3:
  ,function (o458) {"use strict";
    o458.o166 &= 0xEF;
  }
  //RES 4, H
  //#0xA4:
  ,function (o458) {"use strict";
    o458.o168 &= 0xEFFF;
  }
  //RES 4, L
  //#0xA5:
  ,function (o458) {"use strict";
    o458.o168 &= 0xFFEF;
  }
  //RES 4, (HL)
  //#0xA6:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) & 0xEF);
  }
  //RES 4, A
  //#0xA7:
  ,function (o458) {"use strict";
    o458.o163 &= 0xEF;
  }
  //RES 5, B
  //#0xA8:
  ,function (o458) {"use strict";
    o458.o164 &= 0xDF;
  }
  //RES 5, C
  //#0xA9:
  ,function (o458) {"use strict";
    o458.o165 &= 0xDF;
  }
  //RES 5, D
  //#0xAA:
  ,function (o458) {"use strict";
    o458.o405 &= 0xDF;
  }
  //RES 5, E
  //#0xAB:
  ,function (o458) {"use strict";
    o458.o166 &= 0xDF;
  }
  //RES 5, H
  //#0xAC:
  ,function (o458) {"use strict";
    o458.o168 &= 0xDFFF;
  }
  //RES 5, L
  //#0xAD:
  ,function (o458) {"use strict";
    o458.o168 &= 0xFFDF;
  }
  //RES 5, (HL)
  //#0xAE:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) & 0xDF);
  }
  //RES 5, A
  //#0xAF:
  ,function (o458) {"use strict";
    o458.o163 &= 0xDF;
  }
  //RES 6, B
  //#0xB0:
  ,function (o458) {"use strict";
    o458.o164 &= 0xBF;
  }
  //RES 6, C
  //#0xB1:
  ,function (o458) {"use strict";
    o458.o165 &= 0xBF;
  }
  //RES 6, D
  //#0xB2:
  ,function (o458) {"use strict";
    o458.o405 &= 0xBF;
  }
  //RES 6, E
  //#0xB3:
  ,function (o458) {"use strict";
    o458.o166 &= 0xBF;
  }
  //RES 6, H
  //#0xB4:
  ,function (o458) {"use strict";
    o458.o168 &= 0xBFFF;
  }
  //RES 6, L
  //#0xB5:
  ,function (o458) {"use strict";
    o458.o168 &= 0xFFBF;
  }
  //RES 6, (HL)
  //#0xB6:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) & 0xBF);
  }
  //RES 6, A
  //#0xB7:
  ,function (o458) {"use strict";
    o458.o163 &= 0xBF;
  }
  //RES 7, B
  //#0xB8:
  ,function (o458) {"use strict";
    o458.o164 &= 0x7F;
  }
  //RES 7, C
  //#0xB9:
  ,function (o458) {"use strict";
    o458.o165 &= 0x7F;
  }
  //RES 7, D
  //#0xBA:
  ,function (o458) {"use strict";
    o458.o405 &= 0x7F;
  }
  //RES 7, E
  //#0xBB:
  ,function (o458) {"use strict";
    o458.o166 &= 0x7F;
  }
  //RES 7, H
  //#0xBC:
  ,function (o458) {"use strict";
    o458.o168 &= 0x7FFF;
  }
  //RES 7, L
  //#0xBD:
  ,function (o458) {"use strict";
    o458.o168 &= 0xFF7F;
  }
  //RES 7, (HL)
  //#0xBE:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) & 0x7F);
  }
  //RES 7, A
  //#0xBF:
  ,function (o458) {"use strict";
    o458.o163 &= 0x7F;
  }
  //SET 0, B
  //#0xC0:
  ,function (o458) {"use strict";
    o458.o164 |= 0x01;
  }
  //SET 0, C
  //#0xC1:
  ,function (o458) {"use strict";
    o458.o165 |= 0x01;
  }
  //SET 0, D
  //#0xC2:
  ,function (o458) {"use strict";
    o458.o405 |= 0x01;
  }
  //SET 0, E
  //#0xC3:
  ,function (o458) {"use strict";
    o458.o166 |= 0x01;
  }
  //SET 0, H
  //#0xC4:
  ,function (o458) {"use strict";
    o458.o168 |= 0x0100;
  }
  //SET 0, L
  //#0xC5:
  ,function (o458) {"use strict";
    o458.o168 |= 0x01;
  }
  //SET 0, (HL)
  //#0xC6:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) | 0x01);
  }
  //SET 0, A
  //#0xC7:
  ,function (o458) {"use strict";
    o458.o163 |= 0x01;
  }
  //SET 1, B
  //#0xC8:
  ,function (o458) {"use strict";
    o458.o164 |= 0x02;
  }
  //SET 1, C
  //#0xC9:
  ,function (o458) {"use strict";
    o458.o165 |= 0x02;
  }
  //SET 1, D
  //#0xCA:
  ,function (o458) {"use strict";
    o458.o405 |= 0x02;
  }
  //SET 1, E
  //#0xCB:
  ,function (o458) {"use strict";
    o458.o166 |= 0x02;
  }
  //SET 1, H
  //#0xCC:
  ,function (o458) {"use strict";
    o458.o168 |= 0x0200;
  }
  //SET 1, L
  //#0xCD:
  ,function (o458) {"use strict";
    o458.o168 |= 0x02;
  }
  //SET 1, (HL)
  //#0xCE:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) | 0x02);
  }
  //SET 1, A
  //#0xCF:
  ,function (o458) {"use strict";
    o458.o163 |= 0x02;
  }
  //SET 2, B
  //#0xD0:
  ,function (o458) {"use strict";
    o458.o164 |= 0x04;
  }
  //SET 2, C
  //#0xD1:
  ,function (o458) {"use strict";
    o458.o165 |= 0x04;
  }
  //SET 2, D
  //#0xD2:
  ,function (o458) {"use strict";
    o458.o405 |= 0x04;
  }
  //SET 2, E
  //#0xD3:
  ,function (o458) {"use strict";
    o458.o166 |= 0x04;
  }
  //SET 2, H
  //#0xD4:
  ,function (o458) {"use strict";
    o458.o168 |= 0x0400;
  }
  //SET 2, L
  //#0xD5:
  ,function (o458) {"use strict";
    o458.o168 |= 0x04;
  }
  //SET 2, (HL)
  //#0xD6:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) | 0x04);
  }
  //SET 2, A
  //#0xD7:
  ,function (o458) {"use strict";
    o458.o163 |= 0x04;
  }
  //SET 3, B
  //#0xD8:
  ,function (o458) {"use strict";
    o458.o164 |= 0x08;
  }
  //SET 3, C
  //#0xD9:
  ,function (o458) {"use strict";
    o458.o165 |= 0x08;
  }
  //SET 3, D
  //#0xDA:
  ,function (o458) {"use strict";
    o458.o405 |= 0x08;
  }
  //SET 3, E
  //#0xDB:
  ,function (o458) {"use strict";
    o458.o166 |= 0x08;
  }
  //SET 3, H
  //#0xDC:
  ,function (o458) {"use strict";
    o458.o168 |= 0x0800;
  }
  //SET 3, L
  //#0xDD:
  ,function (o458) {"use strict";
    o458.o168 |= 0x08;
  }
  //SET 3, (HL)
  //#0xDE:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) | 0x08);
  }
  //SET 3, A
  //#0xDF:
  ,function (o458) {"use strict";
    o458.o163 |= 0x08;
  }
  //SET 4, B
  //#0xE0:
  ,function (o458) {"use strict";
    o458.o164 |= 0x10;
  }
  //SET 4, C
  //#0xE1:
  ,function (o458) {"use strict";
    o458.o165 |= 0x10;
  }
  //SET 4, D
  //#0xE2:
  ,function (o458) {"use strict";
    o458.o405 |= 0x10;
  }
  //SET 4, E
  //#0xE3:
  ,function (o458) {"use strict";
    o458.o166 |= 0x10;
  }
  //SET 4, H
  //#0xE4:
  ,function (o458) {"use strict";
    o458.o168 |= 0x1000;
  }
  //SET 4, L
  //#0xE5:
  ,function (o458) {"use strict";
    o458.o168 |= 0x10;
  }
  //SET 4, (HL)
  //#0xE6:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) | 0x10);
  }
  //SET 4, A
  //#0xE7:
  ,function (o458) {"use strict";
    o458.o163 |= 0x10;
  }
  //SET 5, B
  //#0xE8:
  ,function (o458) {"use strict";
    o458.o164 |= 0x20;
  }
  //SET 5, C
  //#0xE9:
  ,function (o458) {"use strict";
    o458.o165 |= 0x20;
  }
  //SET 5, D
  //#0xEA:
  ,function (o458) {"use strict";
    o458.o405 |= 0x20;
  }
  //SET 5, E
  //#0xEB:
  ,function (o458) {"use strict";
    o458.o166 |= 0x20;
  }
  //SET 5, H
  //#0xEC:
  ,function (o458) {"use strict";
    o458.o168 |= 0x2000;
  }
  //SET 5, L
  //#0xED:
  ,function (o458) {"use strict";
    o458.o168 |= 0x20;
  }
  //SET 5, (HL)
  //#0xEE:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) | 0x20);
  }
  //SET 5, A
  //#0xEF:
  ,function (o458) {"use strict";
    o458.o163 |= 0x20;
  }
  //SET 6, B
  //#0xF0:
  ,function (o458) {"use strict";
    o458.o164 |= 0x40;
  }
  //SET 6, C
  //#0xF1:
  ,function (o458) {"use strict";
    o458.o165 |= 0x40;
  }
  //SET 6, D
  //#0xF2:
  ,function (o458) {"use strict";
    o458.o405 |= 0x40;
  }
  //SET 6, E
  //#0xF3:
  ,function (o458) {"use strict";
    o458.o166 |= 0x40;
  }
  //SET 6, H
  //#0xF4:
  ,function (o458) {"use strict";
    o458.o168 |= 0x4000;
  }
  //SET 6, L
  //#0xF5:
  ,function (o458) {"use strict";
    o458.o168 |= 0x40;
  }
  //SET 6, (HL)
  //#0xF6:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) | 0x40);
  }
  //SET 6, A
  //#0xF7:
  ,function (o458) {"use strict";
    o458.o163 |= 0x40;
  }
  //SET 7, B
  //#0xF8:
  ,function (o458) {"use strict";
    o458.o164 |= 0x80;
  }
  //SET 7, C
  //#0xF9:
  ,function (o458) {"use strict";
    o458.o165 |= 0x80;
  }
  //SET 7, D
  //#0xFA:
  ,function (o458) {"use strict";
    o458.o405 |= 0x80;
  }
  //SET 7, E
  //#0xFB:
  ,function (o458) {"use strict";
    o458.o166 |= 0x80;
  }
  //SET 7, H
  //#0xFC:
  ,function (o458) {"use strict";
    o458.o168 |= 0x8000;
  }
  //SET 7, L
  //#0xFD:
  ,function (o458) {"use strict";
    o458.o168 |= 0x80;
  }
  //SET 7, (HL)
  //#0xFE:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) | 0x80);
  }
  //SET 7, A
  //#0xFF:
  ,function (o458) {"use strict";
    o458.o163 |= 0x80;
  }
];
o397.prototype.o636 = [    //Number of machine cycles for each instruction:
/*   0,  1,  2,  3,  4,  5,  6,  7,      8,  9,  A, B,  C,  D, E,  F*/
     4, 12,  8,  8,  4,  4,  8,  4,     20,  8,  8, 8,  4,  4, 8,  4,  //0
     4, 12,  8,  8,  4,  4,  8,  4,     12,  8,  8, 8,  4,  4, 8,  4,  //1
     8, 12,  8,  8,  4,  4,  8,  4,      8,  8,  8, 8,  4,  4, 8,  4,  //2
     8, 12,  8,  8, 12, 12, 12,  4,      8,  8,  8, 8,  4,  4, 8,  4,  //3

     4,  4,  4,  4,  4,  4,  8,  4,      4,  4,  4, 4,  4,  4, 8,  4,  //4
     4,  4,  4,  4,  4,  4,  8,  4,      4,  4,  4, 4,  4,  4, 8,  4,  //5
     4,  4,  4,  4,  4,  4,  8,  4,      4,  4,  4, 4,  4,  4, 8,  4,  //6
     8,  8,  8,  8,  8,  8,  4,  8,      4,  4,  4, 4,  4,  4, 8,  4,  //7

     4,  4,  4,  4,  4,  4,  8,  4,      4,  4,  4, 4,  4,  4, 8,  4,  //8
     4,  4,  4,  4,  4,  4,  8,  4,      4,  4,  4, 4,  4,  4, 8,  4,  //9
     4,  4,  4,  4,  4,  4,  8,  4,      4,  4,  4, 4,  4,  4, 8,  4,  //A
     4,  4,  4,  4,  4,  4,  8,  4,      4,  4,  4, 4,  4,  4, 8,  4,  //B

     8, 12, 12, 16, 12, 16,  8, 16,      8, 16, 12, 0, 12, 24, 8, 16,  //C
     8, 12, 12,  4, 12, 16,  8, 16,      8, 16, 12, 4, 12,  4, 8, 16,  //D
    12, 12,  8,  4,  4, 16,  8, 16,     16,  4, 16, 4,  4,  4, 8, 16,  //E
    12, 12,  8,  4,  4, 16,  8, 16,     12,  8, 16, 4,  0,  4, 8, 16   //F
];
o397.prototype.o628 = [  //Number of machine cycles for each 0xCBXX instruction:
/*  0, 1, 2, 3, 4, 5,  6, 7,        8, 9, A, B, C, D,  E, F*/
    8, 8, 8, 8, 8, 8, 16, 8,        8, 8, 8, 8, 8, 8, 16, 8,  //0
    8, 8, 8, 8, 8, 8, 16, 8,        8, 8, 8, 8, 8, 8, 16, 8,  //1
    8, 8, 8, 8, 8, 8, 16, 8,        8, 8, 8, 8, 8, 8, 16, 8,  //2
    8, 8, 8, 8, 8, 8, 16, 8,        8, 8, 8, 8, 8, 8, 16, 8,  //3

    8, 8, 8, 8, 8, 8, 12, 8,        8, 8, 8, 8, 8, 8, 12, 8,  //4
    8, 8, 8, 8, 8, 8, 12, 8,        8, 8, 8, 8, 8, 8, 12, 8,  //5
    8, 8, 8, 8, 8, 8, 12, 8,        8, 8, 8, 8, 8, 8, 12, 8,  //6
    8, 8, 8, 8, 8, 8, 12, 8,        8, 8, 8, 8, 8, 8, 12, 8,  //7

    8, 8, 8, 8, 8, 8, 16, 8,        8, 8, 8, 8, 8, 8, 16, 8,  //8
    8, 8, 8, 8, 8, 8, 16, 8,        8, 8, 8, 8, 8, 8, 16, 8,  //9
    8, 8, 8, 8, 8, 8, 16, 8,        8, 8, 8, 8, 8, 8, 16, 8,  //A
    8, 8, 8, 8, 8, 8, 16, 8,        8, 8, 8, 8, 8, 8, 16, 8,  //B

    8, 8, 8, 8, 8, 8, 16, 8,        8, 8, 8, 8, 8, 8, 16, 8,  //C
    8, 8, 8, 8, 8, 8, 16, 8,        8, 8, 8, 8, 8, 8, 16, 8,  //D
    8, 8, 8, 8, 8, 8, 16, 8,        8, 8, 8, 8, 8, 8, 16, 8,  //E
    8, 8, 8, 8, 8, 8, 16, 8,        8, 8, 8, 8, 8, 8, 16, 8   //F
];
o397.prototype.o637 = function () {"use strict";
  if (!this.o638 || this.o177.length == 0) {
    //No battery backup...
    return [];
  }
  else {
    //Return the MBC RAM for backup...
    return this.o172(this.o177);
  }
}
o397.prototype.o639 = function () {"use strict";
  if (!this.o556) {
    //No battery backup...
    return [];
  }
  else {
    //Return the MBC RAM for backup...
    return [
      this.o536,
      this.o461,
      this.o462,
      this.o463,
      this.o464,
      this.o465,
      this.o466,
      this.o467,
      this.o468,
      this.o469,
      this.o470,
      this.o471,
      this.o472
    ];
  }
}
o397.prototype.o640 = function () {"use strict";
  return [
    this.o172(this.o173),
    this.o412,
    this.o163,
    this.o401,
    this.o402,
    this.o403,
    this.o404,
    this.o164,
    this.o165,
    this.o405,
    this.o166,
    this.o168,
    this.o170,
    this.o169,
    this.o415,
    this.o418,
    this.o422,
    this.o423,
    this.o424,
    this.o172(this.o175),
    this.o172(this.o177),
    this.o172(this.o431),
    this.o559,
    this.o172(this.o432),
    this.o433,
    this.o434,
    this.o435,
    this.o436,
    this.o437,
    this.o438,
    this.o439,
    this.o442,
    this.o443,
    this.o444,
    this.name,
    this.o445,
    this.o449,
    this.o451,
    this.o452,
    this.o453,
    this.o454,
    this.o455,
    this.o567,
    this.o562,
    this.o563,
    this.o564,
    this.o568,
    this.o569,
    this.o529,
    this.o526,
    this.o527,
    this.o528,
    this.o530,
    this.o531,
    this.o532,
    this.o533,
    this.o534,
    this.o536,
    this.o544,
    this.o545,
    this.o546,
    this.o547,
    this.o548,
    this.o549,
    this.o550,
    this.o551,
    this.o552,
    this.o553,
    this.o554,
    this.o555,
    this.o572,
    this.o172(this.o602),
    this.o565,
    this.o566,
    this.o641,
    this.o642,
    this.o643,
    this.o644,
    this.o645,
    this.o646,
    this.o647,
    this.o648,
    this.o649,
    this.o650,
    this.o651,
    this.o652,
    this.o653,
    this.o654,
    this.o655,
    this.o656,
    this.o657,
    this.o658,
    this.o659,
    this.o660,
    this.o661,
    this.o662,
    this.o663,
    this.o664,
    this.o665,
    this.o666,
    this.o667,
    this.o668,
    this.o669,
    this.o670,
    this.o172(this.o488),
    this.o671,
    this.o672,
    this.o673,
    this.o674,
    this.o675,
    this.o676,
    this.o677,
    this.o678,
    this.o679,
    this.o680,
    this.o487,
    this.o489,
    this.o490,
    this.o491,
    this.o492,
    this.o493,
    this.o494,
    this.o495,
    this.o496,
    this.o497,
    this.o498,
    this.o499,
    this.o500,
    this.o501,
    this.o502,
    this.o503,
    this.o504,
    this.o505,
    this.o506,
    this.o507,
    this.o508,
    this.o509,
    this.o510,
    this.o511,
    this.o512,
    this.o513,
    this.o514,
    this.o515,
    this.o516,
    this.o517,
    this.o518,
    this.o519,
    this.o681,
    this.o682,
    this.o683,
    this.o684,
    this.o685,
    this.o686,
    this.o687,
    this.o688,
    this.o689,
    this.o690,
    this.o691,
    this.o692,
    this.o693,
    this.o694,
    this.o695,
    this.o696,
    this.o539,
    this.o540,
    this.o541,
    this.o461,
    this.o462,
    this.o463,
    this.o464,
    this.o465,
    this.o466,
    this.o467,
    this.o468,
    this.o469,
    this.o470,
    this.o471,
    this.o472,
    this.o413,
    this.o416,
    this.o448,
    this.o440,
    this.o558,
    this.o570,
    this.o571,
    this.o172(this.o584),
    this.o172(this.o585),
    this.o172(this.o586),
    this.o172(this.o587),
    this.o172(this.o588),
    this.o172(this.o589),
    this.o172(this.o590),
    this.o172(this.o591),
    this.o172(this.o592),
    this.o172(this.o593),
    this.o172(this.o577),
    this.o172(this.o578),
    this.o543,
    this.o420,
    this.o421,
    this.o411,
    this.o598,
    this.o561,
    this.o560,
    this.o426
  ];
}
o397.prototype.o697 = function (o698) {"use strict";
  var index = 0;
  var o162 = o698.slice(0);
  this.o173 = this.o699(o162[index++], "uint8");
  this.o700 = Math.floor(this.o173.length / 0x4000);
  this.o412 = o162[index++];
  this.o163 = o162[index++];
  this.o401 = o162[index++];
  this.o402 = o162[index++];
  this.o403 = o162[index++];
  this.o404 = o162[index++];
  this.o164 = o162[index++];
  this.o165 = o162[index++];
  this.o405 = o162[index++];
  this.o166 = o162[index++];
  this.o168 = o162[index++];
  this.o170 = o162[index++];
  this.o169 = o162[index++];
  this.o415 = o162[index++];
  this.o418 = o162[index++];
  this.o422 = o162[index++];
  this.o423 = o162[index++];
  this.o424 = o162[index++];
  this.o175 = this.o699(o162[index++], "uint8");
  this.o177 = this.o699(o162[index++], "uint8");
  this.o431 = this.o699(o162[index++], "uint8");
  this.o559 = o162[index++];
  this.o432 = this.o699(o162[index++], "uint8");
  this.o433 = o162[index++];
  this.o434 = o162[index++];
  this.o435 = o162[index++];
  this.o436 = o162[index++];
  this.o437 = o162[index++];
  this.o438 = o162[index++];
  this.o439 = o162[index++];
  this.o442 = o162[index++];
  this.o443 = o162[index++];
  this.o444 = o162[index++];
  this.name = o162[index++];
  this.o445 = o162[index++];
  this.o449 = o162[index++];
  this.o451 = o162[index++];
  this.o452 = o162[index++];
  this.o453 = o162[index++];
  this.o454 = o162[index++];
  this.o455 = o162[index++];
  this.o567 = o162[index++];
  this.o562 = o162[index++];
  this.o563 = o162[index++];
  this.o564 = o162[index++];
  this.o568 = o162[index++];
  this.o569 = o162[index++];
  this.o529 = o162[index++];
  this.o526 = o162[index++];
  this.o527 = o162[index++];
  this.o528 = o162[index++];
  this.o530 = o162[index++];
  this.o531 = o162[index++];
  this.o532 = o162[index++];
  this.o533 = o162[index++];
  this.o534 = o162[index++];
  this.o536 = o162[index++];
  this.o544 = o162[index++];
  this.o545 = o162[index++];
  this.o546 = o162[index++];
  this.o547 = o162[index++];
  this.o548 = o162[index++];
  this.o549 = o162[index++];
  this.o550 = o162[index++];
  this.o551 = o162[index++];
  this.o552 = o162[index++];
  this.o553 = o162[index++];
  this.o554 = o162[index++];
  this.o555 = o162[index++];
  this.o572 = o162[index++];
  this.o602 = this.o699(o162[index++], "int32");
  this.o565 = o162[index++];
  this.o566 = o162[index++];
  this.o641 = o162[index++];
  this.o642 = o162[index++];
  this.o643 = o162[index++];
  this.o644 = o162[index++];
  this.o645 = o162[index++];
  this.o646 = o162[index++];
  this.o647 = o162[index++];
  this.o648 = o162[index++];
  this.o649 = o162[index++];
  this.o650 = o162[index++];
  this.o651 = o162[index++];
  this.o652 = o162[index++];
  this.o653 = o162[index++];
  this.o654 = o162[index++];
  this.o655 = o162[index++];
  this.o656 = o162[index++];
  this.o657 = o162[index++];
  this.o658 = o162[index++];
  this.o659 = o162[index++];
  this.o660 = o162[index++];
  this.o661 = o162[index++];
  this.o662 = o162[index++];
  this.o663 = o162[index++];
  this.o664 = o162[index++];
  this.o665 = o162[index++];
  this.o666 = o162[index++];
  this.o667 = o162[index++];
  this.o668 = o162[index++];
  this.o669 = o162[index++];
  this.o670 = o162[index++];
  this.o488 = this.o699(o162[index++], "int8");
  this.o671 = o162[index++];
  this.o672 = o162[index++];
  this.o673 = o162[index++];
  this.o674 = o162[index++];
  this.o675 = o162[index++];
  this.o676 = o162[index++];
  this.o677 = o162[index++];
  this.o678 = o162[index++];
  this.o679 = o162[index++];
  this.o680 = o162[index++];
  this.o487 = o162[index++];
  this.o489 = o162[index++];
  this.o490 = o162[index++];
  this.o491 = o162[index++];
  this.o492 = o162[index++];
  this.o493 = o162[index++];
  this.o494 = o162[index++];
  this.o495 = o162[index++];
  this.o496 = o162[index++];
  this.o497 = o162[index++];
  this.o498 = o162[index++];
  this.o499 = o162[index++];
  this.o500 = o162[index++];
  this.o501 = o162[index++];
  this.o502 = o162[index++];
  this.o503 = o162[index++];
  this.o504 = o162[index++];
  this.o505 = o162[index++];
  this.o506 = o162[index++];
  this.o507 = o162[index++];
  this.o508 = o162[index++];
  this.o509 = o162[index++];
  this.o510 = o162[index++];
  this.o511 = o162[index++];
  this.o512 = o162[index++];
  this.o513 = o162[index++];
  this.o514 = o162[index++];
  this.o515 = o162[index++];
  this.o516 = o162[index++];
  this.o517 = o162[index++];
  this.o518 = o162[index++];
  this.o519 = o162[index++];
  this.o681 = o162[index++];
  this.o682 = o162[index++];
  this.o683 = o162[index++];
  this.o684 = o162[index++];
  this.o685 = o162[index++];
  this.o686 = o162[index++];
  this.o687 = o162[index++];
  this.o688 = o162[index++];
  this.o689 = o162[index++];
  this.o690 = o162[index++];
  this.o691 = o162[index++];
  this.o692 = o162[index++];
  this.o693 = o162[index++];
  this.o694 = o162[index++];
  this.o695 = o162[index++];
  this.o696 = o162[index++];
  this.o539 = o162[index++];
  this.o540 = o162[index++];
  this.o541 = o162[index++];
  this.o461 = o162[index++];
  this.o462 = o162[index++];
  this.o463 = o162[index++];
  this.o464 = o162[index++];
  this.o465 = o162[index++];
  this.o466 = o162[index++];
  this.o467 = o162[index++];
  this.o468 = o162[index++];
  this.o469 = o162[index++];
  this.o470 = o162[index++];
  this.o471 = o162[index++];
  this.o472 = o162[index++];
  this.o413 = o162[index++];
  this.o416 = o162[index++];
  this.o448 = o162[index++];
  this.o440 = o162[index++];
  this.o558 = o162[index++];
  this.o570 = o162[index++];
  this.o571 = o162[index++];
  this.o584 = this.o699(o162[index++], "uint8");
  this.o585 = this.o699(o162[index++], "uint8");
  this.o586 = this.o699(o162[index++], "int32");
  this.o587 = this.o699(o162[index++], "int32");
  this.o588 = this.o699(o162[index++], "int32");
  this.o589 = this.o699(o162[index++], "int32");
  this.o590 = this.o699(o162[index++], "int32");
  this.o591 = this.o699(o162[index++], "int32");
  this.o592 = this.o699(o162[index++], "int32");
  this.o593 = this.o699(o162[index++], "int32");
  this.o577 = this.o699(o162[index++], "uint8");
  this.o578 = this.o699(o162[index++], "uint8");
  this.o543 = o162[index++];
  this.o420 = o162[index++];
  this.o421 = o162[index++];
  this.o701();
  this.o411 = o162[index++];
  this.o598 = o162[index++];
  this.o561 = o162[index++];
  this.o560 = o162[index++];
  this.o426 = o162[index];
  this.o446 = true;
  this.o636 = this.o699(this.o636, "uint8");
  this.o628 = this.o699(this.o628, "uint8");
  this.o702();
  this.o703();
  this.o704();
  this.o705();
  this.o706();
  this.o485 = (this.o680 == 0x7FFF) ? this.o483 : this.o484;
  this.o707 = (this.o680 == 0x7FFF) ? 15 : 7;
}
o397.prototype.o708 = function () {"use strict";
  if (typeof this.o709 == "function" && this.o556) {
    var o710 = this.o709(this.name);
    var index = 0;
    this.o536 = o710[index++];
    this.o461 = o710[index++];
    this.o462 = o710[index++];
    this.o463 = o710[index++];
    this.o464 = o710[index++];
    this.o465 = o710[index++];
    this.o466 = o710[index++];
    this.o467 = o710[index++];
    this.o468 = o710[index++];
    this.o469 = o710[index++];
    this.o470 = o710[index++];
    this.o471 = o710[index++];
    this.o472 = o710[index];
  }
}

o397.prototype.o88 = function () {"use strict";
  this.o711();  //Write the startup memory.
  this.o712();    //Load the ROM into memory and get cartridge information from it.
  this.o705();    //Initialize the graphics.
  this.o706();  //Sound object initialization.
  this.o15();      //Start the emulation.
}
o397.prototype.o711 = function () {"use strict";
  //Initialize the RAM:
  this.o175 = this.o713(0x10000, 0, "uint8");
  this.o602 = this.o713(23040, 0xF8F8F8, "int32");
  this.o577 = this.o713(0x800, 0, "uint8");
  this.o636 = this.o699(this.o636, "uint8");
  this.o628 = this.o699(this.o628, "uint8");
  this.o488 = this.o713(0x20, 0, "int8");
}
o397.prototype.o714 = function (o715) {"use strict";
  var o716 = [];
  var o717 = 0;
  while (o717 < o715) {
    o716[o717++] = this.o713(64, 0, "uint8");
  }
  return o716;
}
o397.prototype.o718 = function () {"use strict";
  //Fill in the boot ROM set register values
  //Default values to the GB boot ROM values, then fill in the GBC boot ROM values after ROM loading
  var index = 0xFF;
  while (index >= 0) {
    if (index >= 0x30 && index < 0x40) {
      this.o617(0xFF00 | index, this.o614[index]);
    }
    else {
      switch (index) {
        case 0x00:
        case 0x01:
        case 0x02:
        case 0x05:
        case 0x07:
        case 0x0F:
        case 0xFF:
          this.o617(0xFF00 | index, this.o614[index]);
          break;
        default:
          this.o175[0xFF00 | index] = this.o614[index];
      }
    }
    --index;
  }
  if (this.o437) {
    this.o175[0xFF6C] = 0xFE;
    this.o175[0xFF74] = 0xFE;
  }
  else {
    this.o175[0xFF48] = 0xFF;
    this.o175[0xFF49] = 0xFF;
    this.o175[0xFF6C] = 0xFF;
    this.o175[0xFF74] = 0xFF;
  }
  //Start as an unset device:
  o133("Starting without the GBC boot ROM.", 0);
  this.o163 = (this.o437) ? 0x11 : 0x1;
  this.o164 = 0;
  this.o165 = 0x13;
  this.o405 = 0;
  this.o166 = 0xD8;
  this.o401 = true;
  this.o402 = false;
  this.o403 = true;
  this.o404 = true;
  this.o168 = 0x014D;
  this.o459 = this.o456;
  this.o418 = false;
  this.o419 = 0;
  this.o420 = 225;
  this.o421 = 0;
  this.o422 = false;
  this.o423 = 12;
  this.o448 = 0;
  this.o449 = 1;
  this.o450 = 252;
  this.o451 = false;
  this.o452 = false;
  this.o453 = false;
  this.o454 = false;
  this.o455 = true;
  this.o641 = 0x2000;
  this.o681 = 0;
  this.o682 = this.o480[2];
  this.o643 = 0;
  this.o644 = 0;
  this.o645 = false;
  this.o646 = 0;
  this.o647 = 0;
  this.o648 = true;
  this.o649 = 1985;
  this.o650 = true;
  this.o651 = 1985;
  this.o652 = 1;
  this.o653 = 0;
  this.o654 = 0;
  this.o655 = 0;
  this.o656 = false;
  this.o657 = 0x2000;
  this.o683 = 0;
  this.o684 = this.o480[2];
  this.o659 = 0;
  this.o660 = 0;
  this.o661 = false;
  this.o662 = 0;
  this.o663 = 0;
  this.o664 = true;
  this.o665 = 0;
  this.o666 = false;
  this.o667 = 0;
  this.o668 = 4;
  this.o669 = 0;
  this.o670 = true;
  this.o691 = 0x418;
  this.o671 = 8;
  this.o673 = 0;
  this.o674 = 0;
  this.o675 = 0;
  this.o676 = false;
  this.o677 = 0;
  this.o678 = 0;
  this.o679 = true;
  this.o680 = 0x7FFF;
  this.o707 = 15;
  this.o642 = 0x200;
  this.o658 = 0x200;
  this.o691 = 0x800;
  this.o695 = 0x800;
  this.o696 = 0;
  this.o672 = 0;
  this.o489 = 1;
  this.o490 = 1;
  this.o487 = true;
  this.o491 = true;
  this.o492 = true;
  this.o493 = true;
  this.o494 = true;
  this.o495 = true;
  this.o496 = true;
  this.o497 = false;
  this.o498 = false;
  this.o526 = 27044;
  this.o527 = 160;
  this.o528 = 0;
  this.o529 = false;
  this.o530 = 1024;
  this.o531 = 0;
  this.o532 = 0;
  this.o533 = 0;
  this.o534 = 0;
  this.o539 = 144;
  this.o540 = 0;
  this.o562 = false;
  this.o563 = false;
  this.o564 = true;
  this.o565 = true;
  this.o566 = true;
  this.o567 = 0;
  this.o568 = 0;
  this.o569 = 0;
  this.o570 = 0;
  this.o571 = 0;
  this.o572 = 0;
  this.o574 = -1;
  this.o576 = 0;
}
o397.prototype.o719 = function () {"use strict";
  //Start as an unset device:
  o133("Starting the selected boot ROM.", 0);
  this.o169 = 0;
  this.o170 = 0;
  this.o418 = false;
  this.o527 = 0;
  this.o526 = 0;
  this.o163 = 0;
  this.o164 = 0;
  this.o165 = 0;
  this.o405 = 0;
  this.o166 = 0;
  this.o401 = this.o402 = this.o403 = this.o404 = false;
  this.o168 = 0;
  this.o491 = false;
  this.o492 = false;
  this.o493 = false;
  this.o494 = false;
  this.o495 = false;
  this.o496 = false;
  this.o497 = false;
  this.o498 = false;
  this.o665 = this.o649 = 0;
  this.o679 = this.o664 = this.o648 = false;
  this.o489 = 8;
  this.o490 = 8;
  this.o175[0xFF00] = 0xF;  //Set the joypad state.
}
o397.prototype.o712 = function () {"use strict";
  //Load the first two ROM banks (0x0000 - 0x7FFF) into regular gameboy memory:
  this.o173 = [];
  this.o413 = o720[1];
  var o721 = this.o399.length;
  if (o721 < 0x4000) {
    throw(new Error("ROM image size too small."));
  }
  this.o173 = this.o713(o721, 0, "uint8");
  var o722 = 0;
  if (this.o413) {
    if (!o720[11]) {
      //Patch in the GBC boot ROM into the memory map:
      for (; o722 < 0x100; ++o722) {
        this.o175[o722] = this.o613[o722];                      //Load in the GameBoy Color BOOT ROM.
        this.o173[o722] = (this.o399.charCodeAt(o722) & 0xFF);              //Decode the ROM binary for the switch out.
      }
      for (; o722 < 0x200; ++o722) {
        this.o175[o722] = this.o173[o722] = (this.o399.charCodeAt(o722) & 0xFF);  //Load in the game ROM.
      }
      for (; o722 < 0x900; ++o722) {
        this.o175[o722] = this.o613[o722 - 0x100];                  //Load in the GameBoy Color BOOT ROM.
        this.o173[o722] = (this.o399.charCodeAt(o722) & 0xFF);              //Decode the ROM binary for the switch out.
      }
      this.o414 = true;
    }
    else {
      //Patch in the GBC boot ROM into the memory map:
      for (; o722 < 0x100; ++o722) {
        this.o175[o722] = this.o612[o722];                      //Load in the GameBoy Color BOOT ROM.
        this.o173[o722] = (this.o399.charCodeAt(o722) & 0xFF);              //Decode the ROM binary for the switch out.
      }
    }
    for (; o722 < 0x4000; ++o722) {
      this.o175[o722] = this.o173[o722] = (this.o399.charCodeAt(o722) & 0xFF);  //Load in the game ROM.
    }
  }
  else {
    //Don't load in the boot ROM:
    for (; o722 < 0x4000; ++o722) {
      this.o175[o722] = this.o173[o722] = (this.o399.charCodeAt(o722) & 0xFF);  //Load in the game ROM.
    }
  }
  //Finish the decoding of the ROM binary:
  for (; o722 < o721; ++o722) {
    this.o173[o722] = (this.o399.charCodeAt(o722) & 0xFF);
  }
  this.o700 = Math.floor(this.o173.length / 0x4000);
  //Set up the emulator for the cartidge specifics:
  this.o723();
  //Check for IRQ matching upon initialization:
  this.o701();
}
o397.prototype.o724 = function () {"use strict";
  //Return the binary version of the ROM image currently running:
  if (this.o399.length > 0) {
    return this.o399.length;
  }
  var length = this.o173.length;
  for (var index = 0; index < length; index++) {
    this.o399 += String.fromCharCode(this.o173[index]);
  }
  return this.o399;
}
o397.prototype.o723 = function () {"use strict";
  // ROM name
  for (var index = 0x134; index < 0x13F; index++) {
    if (this.o399.charCodeAt(index) > 0) {
      this.name += this.o399[index];
    }
  }
  // ROM game code (for newer games)
  for (var index = 0x13F; index < 0x143; index++) {
    if (this.o399.charCodeAt(index) > 0) {
      this.o445 += this.o399[index];
    }
  }
  o133("Game Title: " + this.name + "[" + this.o445 + "][" + this.o399[0x143] + "]", 0);
  o133("Game Code: " + this.o445, 0);
  // Cartridge type
  this.o444 = this.o173[0x147];
  o133("Cartridge type #" + this.o444, 0);
  //Map out ROM cartridge sub-types.
  var o725 = "";
  switch (this.o444) {
    case 0x00:
      //ROM w/o bank switching
      if (!o720[9]) {
        o725 = "ROM";
        break;
      }
    case 0x01:
      this.o544 = true;
      o725 = "MBC1";
      break;
    case 0x02:
      this.o544 = true;
      this.o549 = true;
      o725 = "MBC1 + SRAM";
      break;
    case 0x03:
      this.o544 = true;
      this.o549 = true;
      this.o638 = true;
      o725 = "MBC1 + SRAM + BATT";
      break;
    case 0x05:
      this.o545 = true;
      o725 = "MBC2";
      break;
    case 0x06:
      this.o545 = true;
      this.o638 = true;
      o725 = "MBC2 + BATT";
      break;
    case 0x08:
      this.o549 = true;
      o725 = "ROM + SRAM";
      break;
    case 0x09:
      this.o549 = true;
      this.o638 = true;
      o725 = "ROM + SRAM + BATT";
      break;
    case 0x0B:
      this.o550 = true;
      o725 = "MMMO1";
      break;
    case 0x0C:
      this.o550 = true;
      this.o549 = true;
      o725 = "MMMO1 + SRAM";
      break;
    case 0x0D:
      this.o550 = true;
      this.o549 = true;
      this.o638 = true;
      o725 = "MMMO1 + SRAM + BATT";
      break;
    case 0x0F:
      this.o546 = true;
      this.o556 = true;
      this.o638 = true;
      o725 = "MBC3 + TIMER + BATT";
      break;
    case 0x10:
      this.o546 = true;
      this.o556 = true;
      this.o638 = true;
      this.o549 = true;
      o725 = "MBC3 + TIMER + BATT + SRAM";
      break;
    case 0x11:
      this.o546 = true;
      o725 = "MBC3";
      break;
    case 0x12:
      this.o546 = true;
      this.o549 = true;
      o725 = "MBC3 + SRAM";
      break;
    case 0x13:
      this.o546 = true;
      this.o549 = true;
      this.o638 = true;
      o725 = "MBC3 + SRAM + BATT";
      break;
    case 0x19:
      this.o547 = true;
      o725 = "MBC5";
      break;
    case 0x1A:
      this.o547 = true;
      this.o549 = true;
      o725 = "MBC5 + SRAM";
      break;
    case 0x1B:
      this.o547 = true;
      this.o549 = true;
      this.o638 = true;
      o725 = "MBC5 + SRAM + BATT";
      break;
    case 0x1C:
      this.o551 = true;
      o725 = "RUMBLE";
      break;
    case 0x1D:
      this.o551 = true;
      this.o549 = true;
      o725 = "RUMBLE + SRAM";
      break;
    case 0x1E:
      this.o551 = true;
      this.o549 = true;
      this.o638 = true;
      o725 = "RUMBLE + SRAM + BATT";
      break;
    case 0x1F:
      this.o552 = true;
      o725 = "GameBoy Camera";
      break;
    case 0x22:
      this.o548 = true;
      this.o549 = true;
      this.o638 = true;
      o725 = "MBC7 + SRAM + BATT";
      break;
    case 0xFD:
      this.o553 = true;
      o725 = "TAMA5";
      break;
    case 0xFE:
      this.o554 = true;
      o725 = "HuC3";
      break;
    case 0xFF:
      this.o555 = true;
      o725 = "HuC1";
      break;
    default:
      o725 = "Unknown";
      o133("Cartridge type is unknown.", 2);
      o630();
  }
  o133("Cartridge Type: " + o725 + ".", 0);
  // ROM and RAM banks
  this.o726 = this.o557[this.o173[0x148]];
  o133(this.o726 + " ROM banks.", 0);
  switch (this.o441[this.o173[0x149]]) {
    case 0:
      o133("No RAM banking requested for allocation or MBC is of type 2.", 0);
      break;
    case 2:
      o133("1 RAM bank requested for allocation.", 0);
      break;
    case 3:
      o133("4 RAM banks requested for allocation.", 0);
      break;
    case 4:
      o133("16 RAM banks requested for allocation.", 0);
      break;
    default:
      o133("RAM bank amount requested is unknown, will use maximum allowed by specified MBC type.", 0);
  }
  //Check the GB/GBC mode byte:
  if (!this.o413) {
    switch (this.o173[0x143]) {
      case 0x00:  //Only GB mode
        this.o437 = false;
        o133("Only GB mode detected.", 0);
        break;
      case 0x32:  //Exception to the GBC identifying code:
        if (!o720[2] && this.name + this.o445 + this.o173[0x143] == "Game and Watch 50") {
          this.o437 = true;
          o133("Created a boot exception for Game and Watch Gallery 2 (GBC ID byte is wrong on the cartridge).", 1);
        }
        else {
          this.o437 = false;
        }
        break;
      case 0x80:  //Both GB + GBC modes
        this.o437 = !o720[2];
        o133("GB and GBC mode detected.", 0);
        break;
      case 0xC0:  //Only GBC mode
        this.o437 = true;
        o133("Only GBC mode detected.", 0);
        break;
      default:
        this.o437 = false;
        o133("Unknown GameBoy game type code #" + this.o173[0x143] + ", defaulting to GB mode (Old games don't have a type code).", 1);
    }
    this.o412 = false;
    this.o727();  //CPU/(V)RAM initialization.
    this.o718();
    this.o486(); // Line added for benchmarking.
  }
  else {
    this.o437 = this.o414;  //Allow the GBC boot ROM to run in GBC mode...
    this.o727();  //CPU/(V)RAM initialization.
    this.o719();
  }
  this.o728();
  //License Code Lookup:
  var o729 = this.o173[0x14B];
  var o730 = (this.o173[0x144] & 0xFF00) | (this.o173[0x145] & 0xFF);
  if (o729 != 0x33) {
    //Old Style License Header
    o133("Old style license code: " + o729, 0);
  }
  else {
    //New Style License Header
    o133("New style license code: " + o730, 0);
  }
  this.o399 = "";  //Memory consumption reduction.
}
o397.prototype.o731 = function () {"use strict";
  //Remove any traces of the boot ROM from ROM memory.
  for (var index = 0; index < 0x100; ++index) {
    this.o175[index] = this.o173[index];  //Replace the GameBoy or GameBoy Color boot ROM with the game ROM.
  }
  if (this.o414) {
    //Remove any traces of the boot ROM from ROM memory.
    for (index = 0x200; index < 0x900; ++index) {
      this.o175[index] = this.o173[index];  //Replace the GameBoy Color boot ROM with the game ROM.
    }
    if (!this.o437) {
      //Clean up the post-boot (GB mode only) state:
      this.o732();
    }
    else {
      this.o733();
    }
  }
  else {
    this.o733();
  }
}
o397.prototype.o520 = function () {"use strict";
  //Emulator Timing:
  this.o410 = 0x80000 / 0x7D * o720[6];
  this.o409 = this.o410 % 4;
  this.o407 = this.o406 = (this.o410 - this.o409) | 0;
  this.o408 = 0;
}
o397.prototype.o727 = function () {"use strict";
  //Setup the auxilliary/switchable RAM:
  if (this.o545) {
    this.o558 = 1 / 16;
  }
  else if (this.o544 || this.o551 || this.o546 || this.o554) {
    this.o558 = 4;
  }
  else if (this.o547) {
    this.o558 = 16;
  }
  else if (this.o549) {
    this.o558 = 1;
  }
  if (this.o558 > 0) {
    if (!this.o734()) {
      //For ROM and unknown MBC cartridges using the external RAM:
      this.o434 = true;
    }
    //Switched RAM Used
    var o177 = (typeof this.o735 == "function") ? this.o735(this.name) : [];
    if (o177.length > 0) {
      //Flash the SRAM into memory:
      this.o177 = this.o699(o177, "uint8");
    }
    else {
      this.o177 = this.o713(this.o558 * 0x2000, 0, "uint8");
    }
  }
  o133("Actual bytes of MBC RAM allocated: " + (this.o558 * 0x2000), 0);
  this.o708();
  //Setup the RAM for GBC mode.
  if (this.o437) {
    this.o431 = this.o713(0x2000, 0, "uint8");
    this.o432 = this.o713(0x7000, 0, "uint8");
  }
  this.o703();
  this.o704();
}
o397.prototype.o734 = function () {"use strict";
  return this.o544 || this.o545 || this.o546 || this.o547 || this.o548 || this.o551;
}
o397.prototype.o736 = function () {"use strict";
  o737();
  //Cache some dimension info:
  this.o606 = this.o398.o129;
  this.o608 = this.o398.o130;
  // The following line was modified for benchmarking:
  if (o115 && o115.o738) {
    //Firefox slowness hack:
    this.o398.o129 = this.o606 = (!o720[12]) ? 160 : this.o398.o129;
    this.o398.o130 = this.o608 = (!o720[12]) ? 144 : this.o398.o130;
  }
  else {
    this.o606 = this.o398.o129;
    this.o608 = this.o398.o130;
  }
  this.o607 = (!o720[12]) ? 160 : this.o398.o129;
  this.o739 = (!o720[12]) ? 144 : this.o398.o130;
  this.o610 = this.o607 * this.o739 * 4;
}
o397.prototype.o705 = function () {"use strict";
  this.o736();
  if (this.o610 != 92160) {
    //Only create the resizer handle if we need it:
    this.o740();
  }
  else {
    //Resizer not needed:
    this.o741 = null;
  }
  try {
    this.o742 = new o108();  // Line modified for benchmarking.
    this.o742.o129 = this.o607;
    this.o742.o130 = this.o739;
    this.o743 = this.o742.o128("2d");
    this.o744 = this.o398.o128("2d");
    //Get a CanvasPixelArray buffer:
    try {
      this.o604 = this.o743.o119(this.o607, this.o739);
    }
    catch (o83) {"use strict";
      o133("Falling back to the getImageData initialization (Error \"" + o83.o134 + "\").", 1);
      this.o604 = this.o743.o745(0, 0, this.o607, this.o739);
    }
    var index = this.o610;
    while (index > 0) {
      this.o604.o85[index -= 4] = 0xF8;
      this.o604.o85[index + 1] = 0xF8;
      this.o604.o85[index + 2] = 0xF8;
      this.o604.o85[index + 3] = 0xFF;
    }
    this.o746();
    this.o398.o131.o132 = "visible";
    if (this.o603 == null) {
      this.o603 = this.o713(69120, 0xFF, "uint8");
    }
    //Test the draw system and browser vblank latching:
    this.o573 = true;                    //Copy the latest graphics to buffer.
    this.o747();
  }
  catch (o83) {
    throw(new Error("HTML5 Canvas support required: " + o83.o134 + "file: " + o83.o748 + ", line: " + o83.o749));
  }
}
o397.prototype.o746 = function () {"use strict";
  if (this.o607 == this.o606 && this.o739 == this.o608) {
    this.o744.o122(this.o604, 0, 0);
  }
  else {
    this.o743.o122(this.o604, 0, 0);
    this.o744.o127(this.o742, 0, 0, this.o606, this.o608);
  }
}
o397.prototype.o750 = function (key, o752) {"use strict";
  if (o752) {
    this.o425 &= 0xFF ^ (1 << key);
    if (!this.o437 && (!this.o413 || !this.o414)) {
      this.o420 |= 0x10;  //A real GBC doesn't set this!
      this.o411 = 0;
      this.o701();
    }
  }
  else {
    this.o425 |= (1 << key);
  }
  this.o175[0xFF00] = (this.o175[0xFF00] & 0x30) + ((((this.o175[0xFF00] & 0x20) == 0) ? (this.o425 >> 4) : 0xF) & (((this.o175[0xFF00] & 0x10) == 0) ? (this.o425 & 0xF) : 0xF));
  this.o426 = false;
}
o397.prototype.o753 = function (o124, o125) {"use strict";
  o124 *= -100;
  o124 += 2047;
  this.o473 = o124 >> 8;
  this.o474 = o124 & 0xFF;
  o125 *= -100;
  o125 += 2047;
  this.o475 = o125 >> 8;
  this.o476 = o125 & 0xFF;
}
o397.prototype.o706 = function () {"use strict";
  this.o479 = 0x400000 / 1000 * o720[6];
  this.o521 = o720[13];
  if (o720[0]) {
    try {
      var o458 = this;
      this.o477 = new o248(2, 0x400000 / o720[13], 0, Math.o324(this.o479 * o720[8] / o720[13], 8192) << 1, null, o720[14]);
      this.o754();
    }
    catch (o83) {
      o133("Audio system cannot run: " + o83.o134, 2);
      o720[0] = false;
    }
  }
  else if (this.o477) {
    //Mute the audio output, as it has an immediate silencing effect:
    try {
      this.o477.o308(0);
    }
    catch (o83) { }
  }
}
o397.prototype.o308 = function () {"use strict";
  if (o720[0] && this.o477) {
    try {
      this.o477.o308(o720[14]);
    }
    catch (o83) { }
  }
}
o397.prototype.o754 = function () {"use strict";
  this.o523 = 0;
  this.o482 = Math.o324(this.o479 * o720[7] / o720[13], 4096) << 1;
  this.o478 = (this.o479 - (this.o479 % o720[13])) | 0;
  this.o481 = this.o713(this.o478, 0xF0F0, "int32");
  this.o755 = this.o713((this.o478 << 1) / o720[13], 0, "float32");
}
o397.prototype.o611 = function () {"use strict";
  //Noise Sample Tables:
  var o756 = 1;
  //15-bit LSFR Cache Generation:
  this.o483 = this.o713(0x80000, 0, "int8");
  var o757 = 0x7FFF;  //Seed value has all its bits set.
  var o758 = 0x3FFF;
  for (var index = 0; index < 0x8000; ++index) {
    //Normalize the last LSFR value for usage:
    o756 = 1 - (o757 & 1);  //Docs say it's the inverse.
    //Cache the different volume level results:
    this.o483[0x08000 | index] = o756;
    this.o483[0x10000 | index] = o756 * 0x2;
    this.o483[0x18000 | index] = o756 * 0x3;
    this.o483[0x20000 | index] = o756 * 0x4;
    this.o483[0x28000 | index] = o756 * 0x5;
    this.o483[0x30000 | index] = o756 * 0x6;
    this.o483[0x38000 | index] = o756 * 0x7;
    this.o483[0x40000 | index] = o756 * 0x8;
    this.o483[0x48000 | index] = o756 * 0x9;
    this.o483[0x50000 | index] = o756 * 0xA;
    this.o483[0x58000 | index] = o756 * 0xB;
    this.o483[0x60000 | index] = o756 * 0xC;
    this.o483[0x68000 | index] = o756 * 0xD;
    this.o483[0x70000 | index] = o756 * 0xE;
    this.o483[0x78000 | index] = o756 * 0xF;
    //Recompute the LSFR algorithm:
    o758 = o757 >> 1;
    o757 = o758 | (((o758 ^ o757) & 0x1) << 14);
  }
  //7-bit LSFR Cache Generation:
  this.o484 = this.o713(0x800, 0, "int8");
  o757 = 0x7F;  //Seed value has all its bits set.
  for (index = 0; index < 0x80; ++index) {
    //Normalize the last LSFR value for usage:
    o756 = 1 - (o757 & 1);  //Docs say it's the inverse.
    //Cache the different volume level results:
    this.o484[0x080 | index] = o756;
    this.o484[0x100 | index] = o756 * 0x2;
    this.o484[0x180 | index] = o756 * 0x3;
    this.o484[0x200 | index] = o756 * 0x4;
    this.o484[0x280 | index] = o756 * 0x5;
    this.o484[0x300 | index] = o756 * 0x6;
    this.o484[0x380 | index] = o756 * 0x7;
    this.o484[0x400 | index] = o756 * 0x8;
    this.o484[0x480 | index] = o756 * 0x9;
    this.o484[0x500 | index] = o756 * 0xA;
    this.o484[0x580 | index] = o756 * 0xB;
    this.o484[0x600 | index] = o756 * 0xC;
    this.o484[0x680 | index] = o756 * 0xD;
    this.o484[0x700 | index] = o756 * 0xE;
    this.o484[0x780 | index] = o756 * 0xF;
    //Recompute the LSFR algorithm:
    o758 = o757 >> 1;
    o757 = o758 | (((o758 ^ o757) & 0x1) << 6);
  }
  if (!this.o485 && this.o175.length == 0x10000) {
    //If enabling audio for the first time after a game is already running, set up the internal table reference:
    this.o485 = ((this.o175[0xFF22] & 0x8) == 0x8) ? this.o484 : this.o483;
  }
}
o397.prototype.o759 = function () {"use strict";
  if (o720[0]) {
    var o760 = this.o482 - this.o477.o274();
    if (o760 > 0) {
      this.o408 += (o760 >> 1) * this.o521;
      this.o761();
    }
  }
}
o397.prototype.o486 = function () {"use strict";
  this.o641 = 0x2000;
  this.o681 = 0;
  this.o682 = this.o480[2];
  this.o643 = 0;
  this.o644 = 0;
  this.o645 = false;
  this.o646 = 0;
  this.o647 = 0;
  this.o648 = true;
  this.o649 = 0;
  this.o650 = false;
  this.o651 = 0;
  this.o652 = 1;
  this.o653 = 0;
  this.o654 = 0;
  this.o655 = 0;
  this.o656 = false;
  this.o657 = 0x2000;
  this.o683 = 0;
  this.o684 = this.o480[2];
  this.o659 = 0;
  this.o660 = 0;
  this.o661 = false;
  this.o662 = 0;
  this.o663 = 0;
  this.o664 = true;
  this.o665 = 0;
  this.o666 = false;
  this.o667 = 0;
  this.o668 = 4;
  this.o669 = 0;
  this.o670 = true;
  this.o691 = 0x800;
  this.o671 = 8;
  this.o673 = 0;
  this.o674 = 0;
  this.o675 = 0;
  this.o676 = false;
  this.o677 = 0;
  this.o678 = 0;
  this.o679 = true;
  this.o680 = 0x7FFF;
  this.o485 = this.o483;
  this.o707 = 15;
  this.o642 = 0x2000;
  this.o658 = 0x2000;
  this.o691 = 0x800;
  this.o695 = 0x800;
  this.o696 = 0;
  this.o672 = 0;
  this.o489 = 8;
  this.o490 = 8;
  this.o519 = 0;
  this.o689 = 0x2000;
  this.o690 = 0;
  this.o671 = 8;
  this.o692 = 8;
  this.o693 = 0;
  this.o694 = 0;
  this.o685 = false;
  this.o686 = false;
  this.o687 = false;
  this.o688 = false;
  this.o762 = false;
  this.o763 = false;
  this.o764 = false;
  this.o765();
  this.o766();
  this.o767();
  this.o768();
}
o397.prototype.o769 = function () {"use strict";
  var o770 = 0;
  var o771 = 0;
  var o772 = 0;
  var o773 = 0;
  var o774 = 0;
  var o775 = o720[13];
  var o776 = o775 * 0xF0;
  for (var o777 = 0; o777 < this.o478;) {
    for (o770 = o772 = o773 = 0; o770 < o775; ++o770) {
      o771 = this.o481[o777++];
      o772 += o771 >> 9;
      o773 += o771 & 0x1FF;
    }
    this.o755[o774++] = o772 / o776 - 1;
    this.o755[o774++] = o773 / o776 - 1;
  }
  this.o477.o273(this.o755);
}
//Below are the audio generation functions timed against the CPU:
o397.prototype.o778 = function (o779) {"use strict";
  if (this.o487 && !this.o426) {
    for (var o780 = 0; o779 > 0;) {
      o780 = (o779 < this.o689) ? o779 : this.o689;
      this.o689 -= o780;
      o779 -= o780;
      while (--o780 > -1) {
        this.o781();
        this.o481[this.o523++] = this.o519;
        if (this.o523 == this.o478) {
          this.o523 = 0;
          this.o769();
        }
      }
      if (this.o689 == 0) {
        this.o782();
        this.o689 = 0x2000;
      }
    }
  }
  else {
    //SILENT OUTPUT:
    while (--o779 > -1) {
      this.o481[this.o523++] = 0xF0F0;
      if (this.o523 == this.o478) {
        this.o523 = 0;
        this.o769();
      }
    }
  }
}
//Generate audio, but don't actually output it (Used for when sound is disabled by user/browser):
o397.prototype.o783 = function (o779) {"use strict";
  if (this.o487 && !this.o426) {
    while (--o779 > -1) {
      this.o781();
      if (--this.o689 == 0) {
        this.o782();
        this.o689 = 0x2000;
      }
    }
  }
}
o397.prototype.o784 = function () {"use strict";
  //Audio Sample Generation Timing:
  if (o720[0]) {
    this.o778(this.o522);
  }
  else {
    this.o783(this.o522);
  }
  this.o522 = 0;
}
o397.prototype.o782 = function () {"use strict";
  switch (this.o690++) {
    case 0:
      this.o785();
      break;
    case 2:
      this.o785();
      this.o786();
      break;
    case 4:
      this.o785();
      break;
    case 6:
      this.o785();
      this.o786();
      break;
    case 7:
      this.o787();
      this.o690 = 0;
  }
}
o397.prototype.o785 = function () {"use strict";
  //Channel 1:
  if (this.o643 > 1) {
    --this.o643;
  }
  else if (this.o643 == 1) {
    this.o643 = 0;
    this.o788();
    this.o175[0xFF26] &= 0xFE;  //Channel #1 On Flag Off
  }
  //Channel 2:
  if (this.o659 > 1) {
    --this.o659;
  }
  else if (this.o659 == 1) {
    this.o659 = 0;
    this.o789();
    this.o175[0xFF26] &= 0xFD;  //Channel #2 On Flag Off
  }
  //Channel 3:
  if (this.o667 > 1) {
    --this.o667;
  }
  else if (this.o667 == 1) {
    this.o667 = 0;
    this.o790();
    this.o175[0xFF26] &= 0xFB;  //Channel #3 On Flag Off
  }
  //Channel 4:
  if (this.o673 > 1) {
    --this.o673;
  }
  else if (this.o673 == 1) {
    this.o673 = 0;
    this.o791();
    this.o175[0xFF26] &= 0xF7;  //Channel #4 On Flag Off
  }
}
o397.prototype.o786 = function () {"use strict";
  //Channel 1:
  if (!this.o650 && this.o652 > 0) {
    if (--this.o652 == 0) {
      this.o792();
    }
  }
}
o397.prototype.o792 = function () {"use strict";
  //Channel 1:
  if (this.o653 > 0) {
    if (this.o655 > 0) {
      if (this.o654 > 0) {
        --this.o654;
        if (this.o656) {
          this.o651 -= this.o651 >> this.o655;
          this.o649 = this.o651 & 0x7FF;
          this.o641 = (0x800 - this.o649) << 2;
        }
        else {
          this.o651 += this.o651 >> this.o655;
          this.o649 = this.o651;
          if (this.o651 <= 0x7FF) {
            this.o641 = (0x800 - this.o649) << 2;
            //Run overflow check twice:
            if ((this.o651 + (this.o651 >> this.o655)) > 0x7FF) {
              this.o650 = true;
              this.o788();
              this.o175[0xFF26] &= 0xFE;  //Channel #1 On Flag Off
            }
          }
          else {
            this.o649 &= 0x7FF;
            this.o650 = true;
            this.o788();
            this.o175[0xFF26] &= 0xFE;  //Channel #1 On Flag Off
          }
        }
      }
      this.o652 = this.o653;
    }
    else {
      //Channel has sweep disabled and timer becomes a length counter:
      this.o650 = true;
      this.o788();
    }
  }
}
o397.prototype.o787 = function () {"use strict";
  //Channel 1:
  if (this.o647 > -1) {
    if (this.o646 > 0) {
      --this.o646;
    }
    else {
      if (!this.o645) {
        if (this.o644 > 0) {
          --this.o644;
          this.o646 = this.o647;
          this.o765();
        }
        else {
          this.o647 = -1;
        }
      }
      else if (this.o644 < 0xF) {
        ++this.o644;
        this.o646 = this.o647;
        this.o765();
      }
      else {
        this.o647 = -1;
      }
    }
  }
  //Channel 2:
  if (this.o663 > -1) {
    if (this.o662 > 0) {
      --this.o662;
    }
    else {
      if (!this.o661) {
        if (this.o660 > 0) {
          --this.o660;
          this.o662 = this.o663;
          this.o766();
        }
        else {
          this.o663 = -1;
        }
      }
      else if (this.o660 < 0xF) {
        ++this.o660;
        this.o662 = this.o663;
        this.o766();
      }
      else {
        this.o663 = -1;
      }
    }
  }
  //Channel 4:
  if (this.o678 > -1) {
    if (this.o677 > 0) {
      --this.o677;
    }
    else {
      if (!this.o676) {
        if (this.o674 > 0) {
          this.o675 = --this.o674 << this.o707;
          this.o677 = this.o678;
          this.o793();
        }
        else {
          this.o678 = -1;
        }
      }
      else if (this.o674 < 0xF) {
        this.o675 = ++this.o674 << this.o707;
        this.o677 = this.o678;
        this.o793();
      }
      else {
        this.o678 = -1;
      }
    }
  }
}
o397.prototype.o781 = function () {"use strict";
  //Channel 1 counter:
  if (--this.o642 == 0) {
    this.o642 = this.o641;
    this.o681 = (this.o681 + 1) & 0x7;
    this.o794();
  }
  //Channel 2 counter:
  if (--this.o658 == 0) {
    this.o658 = this.o657;
    this.o683 = (this.o683 + 1) & 0x7;
    this.o795();
  }
  //Channel 3 counter:
  if (--this.o691 == 0) {
    if (this.o666) {
      this.o696 = (this.o696 + 1) & 0x1F;
    }
    this.o691 = this.o695;
    this.o796();
  }
  //Channel 4 counter:
  if (--this.o692 == 0) {
    this.o672 = (this.o672 + 1) & this.o680;
    this.o692 = this.o671;
    this.o793();
  }
}
o397.prototype.o788 = function () {"use strict";
  this.o685 = ((this.o648 || this.o643 > 0) && !this.o650 && this.o762);
  this.o797();
}
o397.prototype.o798 = function () {"use strict";
  this.o762 = (this.o175[0xFF12] > 7);
  this.o788();
  this.o797();
}
o397.prototype.o765 = function () {"use strict";
  this.o499 = (this.o491) ? this.o644 : 0;
  this.o500 = (this.o495) ? this.o644 : 0;
  this.o797();
}
o397.prototype.o797 = function () {"use strict";
  if (this.o685) {
    this.o507 = this.o499;
    this.o508 = this.o500;
  }
  else {
    this.o507 = 0;
    this.o508 = 0;
  }
  this.o794();
}
o397.prototype.o794 = function () {"use strict";
  if (this.o682[this.o681]) {
    this.o515 = this.o507;
    this.o516 = this.o508;
  }
  else {
    this.o515 = 0;
    this.o516 = 0;
  }
  this.o799();
}
o397.prototype.o789 = function () {"use strict";
  this.o686 = ((this.o664 || this.o659 > 0) && this.o763);
  this.o800();
}
o397.prototype.o801 = function () {"use strict";
  this.o763 = (this.o175[0xFF17] > 7);
  this.o789();
  this.o800();
}
o397.prototype.o766 = function () {"use strict";
  this.o501 = (this.o492) ? this.o660 : 0;
  this.o502 = (this.o496) ? this.o660 : 0;
  this.o800();
}
o397.prototype.o800 = function () {"use strict";
  if (this.o686) {
    this.o509 = this.o501;
    this.o510 = this.o502;
  }
  else {
    this.o509 = 0;
    this.o510 = 0;
  }
  this.o795();
}
o397.prototype.o795 = function () {"use strict";
  if (this.o684[this.o683]) {
    this.o517 = this.o509;
    this.o518 = this.o510;
  }
  else {
    this.o517 = 0;
    this.o518 = 0;
  }
  this.o799();
}
o397.prototype.o790 = function () {"use strict";
  this.o687 = (/*this.channel3canPlay && */(this.o670 || this.o667 > 0));
  this.o802();
}
o397.prototype.o767 = function () {"use strict";
  this.o503 = (this.o493) ? this.o693 : 0;
  this.o504 = (this.o497) ? this.o693 : 0;
  this.o802();
}
o397.prototype.o802 = function () {"use strict";
  if (this.o687) {
    this.o511 = this.o503;
    this.o512 = this.o504;
  }
  else {
    this.o511 = 0;
    this.o512 = 0;
  }
  this.o799();
}
o397.prototype.o791 = function () {"use strict";
  this.o688 = ((this.o679 || this.o673 > 0) && this.o764);
  this.o803();
}
o397.prototype.o804 = function () {"use strict";
  this.o764 = (this.o175[0xFF21] > 7);
  this.o791();
  this.o803();
}
o397.prototype.o768 = function () {"use strict";
  this.o505 = (this.o494) ? this.o694 : 0;
  this.o506 = (this.o498) ? this.o694 : 0;
  this.o803();
}
o397.prototype.o803 = function () {"use strict";
  if (this.o688) {
    this.o513 = this.o505;
    this.o514 = this.o506;
  }
  else {
    this.o513 = 0;
    this.o514 = 0;
  }
  this.o799();
}
o397.prototype.o799 = function () {"use strict";
  this.o519 = ((((this.o515 + this.o517 + this.o511 + this.o513) * this.o489) << 9) +
  ((this.o516 + this.o518 + this.o512 + this.o514) * this.o490));
}
o397.prototype.o796 = function () {"use strict";
  this.o693 = this.o488[this.o696] >> this.o668;
  this.o767();
}
o397.prototype.o805 = function (o806, o85) {"use strict";
  if (this.o666) {
    this.o784();
    //address = this.channel3lastSampleLookup >> 1;
  }
  this.o175[0xFF30 | o806] = o85;
  o806 <<= 1;
  this.o488[o806] = o85 >> 4;
  this.o488[o806 | 1] = o85 & 0xF;
}
o397.prototype.o793 = function () {"use strict";
  this.o694 = this.o485[this.o675 | this.o672];
  this.o768();
}
o397.prototype.o15 = function () {"use strict";
  //The preprocessing before the actual iteration loop:
  if ((this.o417 & 2) == 0) {
    if ((this.o417 & 1) == 1) {
      if (!this.o426) {
        this.o417 = 0;
        this.o573 = false;
        this.o759();
        this.o807();      //RTC clocking.
        if (!this.o415) {
          this.o808();
        }
        else {            //Finish the HALT rundown execution.
          this.o423 = 0;
          this.o624();
          if (this.o415) {
            this.o809();
          }
          else {
            this.o808();
          }
        }
        //Request the graphics target to be updated:
        this.o747();
      }
      else {
        this.o759();
        this.o522 += this.o406;
        this.o784();
        this.o417 |= 1;      //End current loop.
      }
    }
    else {    //We can only get here if there was an internal error, but the loop was restarted.
      o133("Iterator restarted a faulted core.", 2);
      o630();
    }
  }
}

o397.prototype.o808 = function () {"use strict";
  //Iterate the interpreter loop:
  var o810 = 0;
  var o811 = 0;
  while (this.o417 == 0) {
    //Interrupt Arming:
    switch (this.o534) {
      case 1:
        this.o418 = true;
        this.o701();
      case 2:
        --this.o534;
    }
    //Is an IRQ set to fire?:
    if (this.o419 > 0) {
      //IME is true and and interrupt was matched:
      this.o812();
    }
    //Fetch the current opcode:
    o810 = this.o427[this.o169](this, this.o169);
    //Increment the program counter to the next instruction:
    this.o169 = (this.o169 + 1) & 0xFFFF;
    //Check for the program counter quirk:
    if (this.o416) {
      this.o169 = (this.o169 - 1) & 0xFFFF;
      this.o416 = false;
    }
    //Get how many CPU cycles the current instruction counts for:
    this.o423 = this.o636[o810];
    //Execute the current instruction:
    this.o615[o810](this);
    //Update the state (Inlined updateCoreFull manually here):
    //Update the clocking for the LCD emulation:
    this.o527 += this.o423 >> this.o424;  //LCD Timing
    this.o459[this.o539](this);          //Scan Line and STAT Mode Control
    //Single-speed relative timing for A/V emulation:
    o811 = this.o423 >> this.o424;    //CPU clocking can be updated from the LCD handling.
    this.o522 += o811;                //Audio Timing
    this.o525 += o811;              //Emulator Timing
    //CPU Timers:
    this.o526 += this.o423;                //DIV Timing
    if (this.o529) {                    //TIMA Timing
      this.o528 += this.o423;
      while (this.o528 >= this.o530) {
        this.o528 -= this.o530;
        if (++this.o175[0xFF05] == 0x100) {
          this.o175[0xFF05] = this.o175[0xFF06];
          this.o420 |= 0x4;
          this.o701();
        }
      }
    }
    if (this.o531 > 0) {                    //Serial Timing
      //IRQ Counter:
      this.o531 -= this.o423;
      if (this.o531 <= 0) {
        this.o420 |= 0x8;
        this.o701();
      }
      //Bit Shit Counter:
      this.o532 -= this.o423;
      if (this.o532 <= 0) {
        this.o532 = this.o533;
        this.o175[0xFF01] = ((this.o175[0xFF01] << 1) & 0xFE) | 0x01;  //We could shift in actual link data here if we were to implement such!!!
      }
    }
    //End of iteration routine:
    if (this.o525 >= this.o406) {
      this.o813();
    }
    // Start of code added for benchmarking:
    this.o110 += 1;
    if (this.o110 > this.o111) {
      this.o813();
      this.o417 |= 2;
      o160();
    }
    // End of code added for benchmarking.
  }
}
o397.prototype.o813 = function () {"use strict";
  if ((this.o417 & 0x1) == 0) {
    this.o784();  //Make sure we at least output once per iteration.
    //Update DIV Alignment (Integer overflow safety):
    this.o175[0xFF04] = (this.o175[0xFF04] + (this.o526 >> 8)) & 0xFF;
    this.o526 &= 0xFF;
    //Update emulator flags:
    this.o417 |= 1;      //End current loop.
    this.o525 -= this.o406;
    this.o408 += this.o409;
    this.o761();
  }
}
o397.prototype.o620 = function () {"use strict";
  this.o426 = true;            //Stop CPU until joypad input changes.
  this.o813();
  if (this.o525 < 0) {
    this.o522 -= this.o525;
    this.o784();
  }
}
o397.prototype.o761 = function () {"use strict";
  var o814 = this.o408 % 4;
  this.o406 = this.o407 + this.o408 - o814;
  this.o408 = o814;
}
o397.prototype.o815 = function () {"use strict";  //OAM Search Period
  if (this.o448 != 1) {
    if (this.o452) {
      this.o420 |= 0x2;
      this.o701();
    }
    this.o448 = 1;
    this.o449 = 2;
  }
}
o397.prototype.o816 = function () {"use strict";  //Scan Line Drawing Period
  if (this.o449 != 3) {
    if (this.o448 == 0 && this.o452) {
      this.o420 |= 0x2;
      this.o701();
    }
    this.o448 = 1;
    this.o449 = 3;
  }
}
o397.prototype.o817 = function () {"use strict";  //Horizontal Blanking Period
  if (this.o449 != 0) {
    if (this.o448 != 2) {
      if (this.o448 == 0) {
        if (this.o452) {
          this.o420 |= 0x2;
          this.o701();
        }
        this.o449 = 3;
      }
      this.o818();
      this.o819(this.o539);
      this.o448 = 2;
    }
    if (this.o527 >= this.o450) {
      if (this.o422) {
        this.o820();
      }
      if (this.o454) {
        this.o420 |= 0x2;
        this.o701();
      }
      this.o448 = 3;
      this.o449 = 0;
    }
  }
}
o397.prototype.o821 = function () {"use strict";
  if (this.o175[0xFF45] != 0) {
    if (this.o175[0xFF45] > this.o539) {
      return 456 * (this.o175[0xFF45] - this.o539);
    }
    return 456 * (154 - this.o539 + this.o175[0xFF45]);
  }
  return (456 * ((this.o539 == 153 && this.o175[0xFF44] == 0) ? 154 : (153 - this.o539))) + 8;
}
o397.prototype.o822 = function () {"use strict";
  switch (this.o449) {
    case 0:
      if (this.o539 == 143) {
        this.o819(0);
        return this.o450 + 5016;
      }
      this.o819(this.o539 + 1);
      return this.o450 + 456;
    case 2:
    case 3:
      this.o819(this.o539);
      return this.o450;
    case 1:
      this.o819(0);
      return this.o450 + (456 * (154 - this.o539));
  }
}
o397.prototype.o819 = function (o372) {"use strict";
  this.o450 = 252;
  if (this.o437 && this.o563) {                    //Is the window enabled and are we in CGB mode?
    var o823 = o372 + 0x10;
    var o824 = 0;
    var o825 = (this.o564) ? 0x8 : 0x10;
    for (var o826 = 0xFE00; o826 < 0xFEA0 && this.o450 < 312; o826 += 4) {
      o824 = o823 - this.o175[o826];
      if (o824 > -1 && o824 < o825) {
        this.o450 += 6;
      }
    }
  }
}
o397.prototype.o827 = function () {"use strict";  //LYC Register Compare
  if (this.o175[0xFF44] == this.o175[0xFF45]) {
    this.o175[0xFF41] |= 0x04;
    if (this.o451) {
      this.o420 |= 0x2;
      this.o701();
    }
  }
  else {
    this.o175[0xFF41] &= 0x7B;
  }
}
o397.prototype.o828 = function () {"use strict";
  //Update the clocking for the LCD emulation:
  this.o527 += this.o423 >> this.o424;  //LCD Timing
  this.o459[this.o539](this);          //Scan Line and STAT Mode Control
  //Single-speed relative timing for A/V emulation:
  var o811 = this.o423 >> this.o424;  //CPU clocking can be updated from the LCD handling.
  this.o522 += o811;                //Audio Timing
  this.o525 += o811;              //Emulator Timing
  //CPU Timers:
  this.o526 += this.o423;                //DIV Timing
  if (this.o529) {                    //TIMA Timing
    this.o528 += this.o423;
    while (this.o528 >= this.o530) {
      this.o528 -= this.o530;
      if (++this.o175[0xFF05] == 0x100) {
        this.o175[0xFF05] = this.o175[0xFF06];
        this.o420 |= 0x4;
        this.o701();
      }
    }
  }
  if (this.o531 > 0) {                    //Serial Timing
    //IRQ Counter:
    this.o531 -= this.o423;
    if (this.o531 <= 0) {
      this.o420 |= 0x8;
      this.o701();
    }
    //Bit Shit Counter:
    this.o532 -= this.o423;
    if (this.o532 <= 0) {
      this.o532 = this.o533;
      this.o175[0xFF01] = ((this.o175[0xFF01] << 1) & 0xFE) | 0x01;  //We could shift in actual link data here if we were to implement such!!!
    }
  }
}
o397.prototype.o809 = function () {"use strict";
  //Update the state machine:
  this.o828();
  //End of iteration routine:
  if (this.o525 >= this.o406) {
    this.o813();
  }
}
o397.prototype.o460 = function () {"use strict";
  //Display on hanlding:
  var o372 = 0;
  while (o372 < 154) {
    if (o372 < 143) {
      //We're on a normal scan line:
      this.o456[o372] = function (o458) {"use strict";
        if (o458.o527 < 80) {
          o458.o815();
        }
        else if (o458.o527 < 252) {
          o458.o816();
        }
        else if (o458.o527 < 456) {
          o458.o817();
        }
        else {
          //We're on a new scan line:
          o458.o527 -= 456;
          if (o458.o448 != 3) {
            //Make sure the mode 0 handler was run at least once per scan line:
            if (o458.o448 != 2) {
              if (o458.o448 == 0 && o458.o452) {
                o458.o420 |= 0x2;
              }
              o458.o818();
            }
            if (o458.o422) {
              o458.o820();
            }
            if (o458.o454) {
              o458.o420 |= 0x2;
            }
          }
          //Update the scanline registers and assert the LYC counter:
          o458.o539 = ++o458.o175[0xFF44];
          //Perform a LYC counter assert:
          if (o458.o539 == o458.o175[0xFF45]) {
            o458.o175[0xFF41] |= 0x04;
            if (o458.o451) {
              o458.o420 |= 0x2;
            }
          }
          else {
            o458.o175[0xFF41] &= 0x7B;
          }
          o458.o701();
          //Reset our mode contingency variables:
          o458.o448 = 0;
          o458.o449 = 2;
          o458.o456[o458.o539](o458);  //Scan Line and STAT Mode Control.
        }
      }
    }
    else if (o372 == 143) {
      //We're on the last visible scan line of the LCD screen:
      this.o456[143] = function (o458) {"use strict";
        if (o458.o527 < 80) {
          o458.o815();
        }
        else if (o458.o527 < 252) {
          o458.o816();
        }
        else if (o458.o527 < 456) {
          o458.o817();
        }
        else {
          //Starting V-Blank:
          //Just finished the last visible scan line:
          o458.o527 -= 456;
          if (o458.o448 != 3) {
            //Make sure the mode 0 handler was run at least once per scan line:
            if (o458.o448 != 2) {
              if (o458.o448 == 0 && o458.o452) {
                o458.o420 |= 0x2;
              }
              o458.o818();
            }
            if (o458.o422) {
              o458.o820();
            }
            if (o458.o454) {
              o458.o420 |= 0x2;
            }
          }
          //Update the scanline registers and assert the LYC counter:
          o458.o539 = o458.o175[0xFF44] = 144;
          //Perform a LYC counter assert:
          if (o458.o175[0xFF45] == 144) {
            o458.o175[0xFF41] |= 0x04;
            if (o458.o451) {
              o458.o420 |= 0x2;
            }
          }
          else {
            o458.o175[0xFF41] &= 0x7B;
          }
          //Reset our mode contingency variables:
          o458.o448 = 0;
          //Update our state for v-blank:
          o458.o449 = 1;
          o458.o420 |= (o458.o453) ? 0x3 : 0x1;
          o458.o701();
          //Attempt to blit out to our canvas:
          if (o458.o572 == 0) {
            //Ensure JIT framing alignment:
            if (o458.o542 < 144 || (o458.o542 == 144 && o458.o574 > -1)) {
              //Make sure our gfx are up-to-date:
              o458.o829();
              //Draw the frame:
              o458.o830();
            }
          }
          else {
            //LCD off takes at least 2 frames:
            --o458.o572;
          }
          o458.o456[144](o458);  //Scan Line and STAT Mode Control.
        }
      }
    }
    else if (o372 < 153) {
      //In VBlank
      this.o456[o372] = function (o458) {"use strict";
        if (o458.o527 >= 456) {
          //We're on a new scan line:
          o458.o527 -= 456;
          o458.o539 = ++o458.o175[0xFF44];
          //Perform a LYC counter assert:
          if (o458.o539 == o458.o175[0xFF45]) {
            o458.o175[0xFF41] |= 0x04;
            if (o458.o451) {
              o458.o420 |= 0x2;
              o458.o701();
            }
          }
          else {
            o458.o175[0xFF41] &= 0x7B;
          }
          o458.o456[o458.o539](o458);  //Scan Line and STAT Mode Control.
        }
      }
    }
    else {
      //VBlank Ending (We're on the last actual scan line)
      this.o456[153] = function (o458) {"use strict";
        if (o458.o527 >= 8) {
          if (o458.o448 != 4 && o458.o175[0xFF44] == 153) {
            o458.o175[0xFF44] = 0;  //LY register resets to 0 early.
            //Perform a LYC counter assert:
            if (o458.o175[0xFF45] == 0) {
              o458.o175[0xFF41] |= 0x04;
              if (o458.o451) {
                o458.o420 |= 0x2;
                o458.o701();
              }
            }
            else {
              o458.o175[0xFF41] &= 0x7B;
            }
            o458.o448 = 4;
          }
          if (o458.o527 >= 456) {
            //We reset back to the beginning:
            o458.o527 -= 456;
            o458.o448 = o458.o539 = 0;
            o458.o456[0](o458);  //Scan Line and STAT Mode Control.
          }
        }
      }
    }
    ++o372;
  }
}
o397.prototype.o831 = function () {"use strict";
  if (this.o572 == 0) {
    //Output a blank screen to the output framebuffer:
    this.o832();
    this.o573 = true;
  }
  this.o572 = 2;
}
o397.prototype.o820 = function () {"use strict";
  this.o833(1);
  if (this.o415) {
    if ((this.o527 - this.o450) < ((4 >> this.o424) | 0x20)) {
      //HALT clocking correction:
      this.o423 = 4 + ((0x20 + this.o450) << this.o424);
      this.o527 = this.o450 + ((4 >> this.o424) | 0x20);
    }
  }
  else {
    this.o527 += (4 >> this.o424) | 0x20;      //LCD Timing Update For HDMA.
  }
  if (this.o175[0xFF55] == 0) {
    this.o422 = false;
    this.o175[0xFF55] = 0xFF;  //Transfer completed ("Hidden last step," since some ROMs don't imply this, but most do).
  }
  else {
    --this.o175[0xFF55];
  }
}
o397.prototype.o807 = function () {"use strict";
  if (this.o556) {
    var o834 = o158(); // The line is changed for benchmarking.
    var o835 = o834.o159();
    var o836 = o835 - this.o536;  //Get the numnber of milliseconds since this last executed.
    this.o536 = o835;
    if (this.o556 && !this.o472) {
      //Update the MBC3 RTC:
      this.o467 += o836 / 1000;
      while (this.o467 >= 60) {  //System can stutter, so the seconds difference can get large, thus the "while".
        this.o467 -= 60;
        ++this.o468;
        if (this.o468 >= 60) {
          this.o468 -= 60;
          ++this.o469;
          if (this.o469 >= 24) {
            this.o469 -= 24
            ++this.o470;
            if (this.o470 >= 512) {
              this.o470 -= 512;
              this.o471 = true;
            }
          }
        }
      }
    }
  }
}
o397.prototype.o830 = function () {"use strict";
  //Copy the internal frame buffer to the output buffer:
  this.o837();
  this.o573 = true;
}
o397.prototype.o747 = function () {"use strict";
  if (this.o573) {
    this.o838();
  }
}
o397.prototype.o838 = function () {"use strict";
  var o839 = this.o610;
  if (o839 > 0) {
    //We actually updated the graphics internally, so copy out:
    var o602 = (o839 == 92160) ? this.o603 : this.o840();
    var o841 = this.o604.o85;
    var o842 = 0;
    for (var o843 = 0; o843 < o839; ++o843) {
      o841[o843++] = o602[o842++];
      o841[o843++] = o602[o842++];
      o841[o843++] = o602[o842++];
    }
    this.o746();
  }
}
o397.prototype.o837 = function () {"use strict";
  //Convert our dirty 24-bit (24-bit, with internal render flags above it) framebuffer to an 8-bit buffer with separate indices for the RGB channels:
  var o602 = this.o602;
  var o603 = this.o603;
  var o842 = 0;
  for (var o843 = 0; o843 < 69120;) {
    o603[o843++] = (o602[o842] >> 16) & 0xFF;    //Red
    o603[o843++] = (o602[o842] >> 8) & 0xFF;    //Green
    o603[o843++] = o602[o842++] & 0xFF;      //Blue
  }
}
o397.prototype.o832 = function () {"use strict";
  var o842 = 0;
  var o602 = this.o603;
  if (this.o437 || this.o598) {
    while (o842 < 69120) {
      o602[o842++] = 248;
    }
  }
  else {
    while (o842 < 69120) {
      o602[o842++] = 239;
      o602[o842++] = 255;
      o602[o842++] = 222;
    }
  }
}
o397.prototype.o840 = function () {"use strict";
  //Return a reference to the generated resized framebuffer:
  return this.o741.o390(this.o603);
}
o397.prototype.o740 = function () {"use strict";
  if (this.o610 > 0) {
    this.o741 = new o339(160, 144, this.o607, this.o739, false, true);
  }
}
o397.prototype.o844 = function (o845) {"use strict";
  this.o605 = o845 * 160;
  if (this.o565) {
    this.o575 = 160;
    this.o599(o845);
    this.o600(o845);
  }
  else {
    var o846 = (o845 + 1) * 160;
    var o847 = (this.o437 || this.o598) ? 0xF8F8F8 : 0xEFFFDE;
    for (var o848 = (o845 * 160) + this.o576; o848 < o846; o848++) {
      this.o602[o848] = o847;
    }
  }
  this.o601(o845);
  this.o576 = 0;
  this.o574 = -1;
}
o397.prototype.o849 = function () {"use strict";
  if (this.o539 < 144 && this.o449 == 3) {
    //TODO: Get this accurate:
    if (this.o574 == -1) {
      this.o574 = this.o560 & 0x7;
    }
    if (this.o527 >= 82) {
      this.o575 = this.o527 - 74;
      this.o575 = Math.o312(this.o575 - this.o574 - (this.o575 % 0x8), 160);
      if (this.o565) {
        this.o605 = this.o540 * 160;
        this.o599(this.o540);
        this.o600(this.o540);
        //TODO: Do midscanline JIT for sprites...
      }
      else {
        var o846 = (this.o540 * 160) + this.o575;
        var o847 = (this.o437 || this.o598) ? 0xF8F8F8 : 0xEFFFDE;
        for (var o848 = (this.o540 * 160) + this.o576; o848 < o846; o848++) {
          this.o602[o848] = o847;
        }
      }
      this.o576 = this.o575;
    }
  }
}
o397.prototype.o728 = function () {"use strict";
  this.o459 = (this.o455) ? this.o456 : this.o457;
  if (this.o437) {
    this.o584 = this.o713(0x40, 0, "uint8");
    this.o585 = this.o713(0x40, 0, "uint8");
    this.o588 = this.o713(0x20, 0x1000000, "int32");
    this.o589 = this.o713(0x40, 0, "int32");
    this.o578 = this.o713(0x800, 0, "uint8");
    this.o579 = (this.o559 > 0) ? this.o578 : this.o577;
    this.o580 = this.o714(0xF80);
  }
  else {
    this.o586 = this.o713(8, 0, "int32");
    this.o587 = this.o713(4, 0, "int32");
    this.o583 = this.o587;
    this.o582 = this.o586;
    this.o580 = this.o714(0x700);
    this.o850 = this.o713(0x100, 0, "uint8");
    this.o851 = this.o713(10, 0, "int32");
  }
  this.o852();
}
o397.prototype.o732 = function () {"use strict";
  o133("Stepping down from GBC mode.", 0);
  this.o431 = this.o432 = this.o579 = this.o578 = null;
  this.o580.length = 0x700;
  if (o720[4]) {
    this.o590 = this.o713(4, 0, "int32");
    this.o591 = this.o713(8, 0, "int32");
    this.o592 = this.o713(4, 0, "int32");
    this.o593 = this.o713(8, 0, "int32");
    this.o583 = this.o590;
    this.o582 = this.o591;
    this.o586 = this.o587 = null;
    this.o853();
  }
  else {
    this.o586 = this.o713(8, 0, "int32");
    this.o587 = this.o713(4, 0, "int32");
    this.o583 = this.o587;
    this.o582 = this.o586;
  }
  this.o850 = this.o713(0x100, 0, "uint8");
  this.o851 = this.o713(10, 0, "int32");
  this.o852();
  this.o703();
  this.o704();
}
o397.prototype.o852 = function () {"use strict";
  if (!this.o437) {
    this.o599 = this.o854;
    this.o600 = this.o855;
    this.o601 = this.o856;
  }
  else {
    this.o857();
    this.o601 = this.o858;
  }
}
o397.prototype.o857 = function () {"use strict";
  if (this.o566) {
    this.o599 = this.o859;
    this.o600 = this.o860;
  }
  else {
    this.o599 = this.o861;
    this.o600 = this.o862;
  }
}
o397.prototype.o702 = function () {"use strict";
  this.o459 = (this.o455) ? this.o456 : this.o457;
  var o863 = 0;
  if (!this.o437) {
    if (this.o598) {
      this.o583 = this.o590;
      this.o582 = this.o591;
      this.o594 = this.o864;
      this.o596 = this.o865;

    }
    else {
      this.o583 = this.o587;
      this.o582 = this.o586;
    }
    this.o580 = this.o714(0x700);
    for (o863 = 0x8000; o863 < 0x9000; o863 += 2) {
      this.o866(o863);
    }
    for (o863 = 0x9000; o863 < 0x9800; o863 += 2) {
      this.o867(o863);
    }
    this.o850 = this.o713(0x100, 0, "uint8");
    this.o851 = this.o713(10, 0, "int32");
  }
  else {
    this.o579 = (this.o559 > 0) ? this.o578 : this.o577;
    this.o580 = this.o714(0xF80);
    for (; o863 < 0x1800; o863 += 0x10) {
      this.o868(o863);
      this.o869(o863);
    }
  }
  this.o852();
}
o397.prototype.o870 = function (value) {"use strict";
  //Adjustment for the GBC's tinting (According to Gambatte):
  var o871 = value & 0x1F;
  var o872 = (value >> 5) & 0x1F;
  var o873 = (value >> 10) & 0x1F;
  return ((o871 * 13 + o872 * 2 + o873) >> 1) << 16 | (o872 * 3 + o873) << 9 | (o871 * 3 + o872 * 2 + o873 * 11) >> 1;
}
o397.prototype.o853 = function () {"use strict";
  //GBC Colorization of DMG ROMs:
  //BG
  for (var o874 = 0; o874 < 4; o874++) {
    var o875 = o874 << 1;
    //BG
    this.o592[o874] = this.o870((this.o585[o875 | 1] << 8) | this.o585[o875]);
    //OBJ 1
    this.o593[o874] = this.o870((this.o584[o875 | 1] << 8) | this.o584[o875]);
  }
  //OBJ 2
  for (o874 = 4; o874 < 8; o874++) {
    o875 = o874 << 1;
    this.o593[o874] = this.o870((this.o584[o875 | 1] << 8) | this.o584[o875]);
  }
  //Update the palette entries:
  this.o594 = this.o864;
  this.o596 = this.o865;
  this.o594(this.o175[0xFF47]);
  this.o596(0, this.o175[0xFF48]);
  this.o596(1, this.o175[0xFF49]);
  this.o598 = true;
}
o397.prototype.o595 = function (o85) {"use strict";
  this.o587[0] = this.o581[o85 & 0x03] | 0x2000000;
  this.o587[1] = this.o581[(o85 >> 2) & 0x03];
  this.o587[2] = this.o581[(o85 >> 4) & 0x03];
  this.o587[3] = this.o581[o85 >> 6];
}
o397.prototype.o864 = function (o85) {"use strict";
  //GB colorization:
  this.o590[0] = this.o592[o85 & 0x03] | 0x2000000;
  this.o590[1] = this.o592[(o85 >> 2) & 0x03];
  this.o590[2] = this.o592[(o85 >> 4) & 0x03];
  this.o590[3] = this.o592[o85 >> 6];
}
o397.prototype.o597 = function (index, o85) {"use strict";
  this.o586[index | 1] = this.o581[(o85 >> 2) & 0x03];
  this.o586[index | 2] = this.o581[(o85 >> 4) & 0x03];
  this.o586[index | 3] = this.o581[o85 >> 6];
}
o397.prototype.o865 = function (index, o85) {"use strict";
  //GB colorization:
  this.o591[index | 1] = this.o593[index | ((o85 >> 2) & 0x03)];
  this.o591[index | 2] = this.o593[index | ((o85 >> 4) & 0x03)];
  this.o591[index | 3] = this.o593[index | (o85 >> 6)];
}
o397.prototype.o876 = function (index, o85) {"use strict";
  if (this.o585[index] != o85) {
    this.o877();
    //Update the color palette for BG tiles since it changed:
    this.o585[index] = o85;
    if ((index & 0x06) == 0) {
      //Palette 0 (Special tile Priority stuff)
      o85 = 0x2000000 | this.o870((this.o585[index | 1] << 8) | this.o585[index & 0x3E]);
      index >>= 1;
      this.o589[index] = o85;
      this.o589[0x20 | index] = 0x1000000 | o85;
    }
    else {
      //Regular Palettes (No special crap)
      o85 = this.o870((this.o585[index | 1] << 8) | this.o585[index & 0x3E]);
      index >>= 1;
      this.o589[index] = o85;
      this.o589[0x20 | index] = 0x1000000 | o85;
    }
  }
}
o397.prototype.o878 = function (index, o85) {"use strict";
  if (this.o584[index] != o85) {
    //Update the color palette for OBJ tiles since it changed:
    this.o584[index] = o85;
    if ((index & 0x06) > 0) {
      //Regular Palettes (No special crap)
      this.o877();
      this.o588[index >> 1] = 0x1000000 | this.o870((this.o584[index | 1] << 8) | this.o584[index & 0x3E]);
    }
  }
}
o397.prototype.o854 = function (o845) {"use strict";
  var o879 = (this.o561 + o845) & 0xFF;            //The line of the BG we're at.
  var o880 = (o879 & 7) << 3;
  var o881 = this.o568 | ((o879 & 0xF8) << 2);  //The row of cached tiles we're fetching from.
  var o882 = (this.o560 + this.o576) & 0xFF;            //The scroll amount of the BG.
  var o848 = this.o605 + this.o576;                  //Current pixel we're working on.
  var o883 = this.o605 + ((this.o562 && (o845 - this.o570) >= 0) ? Math.o312(Math.o324(this.o571, 0) + this.o576, this.o575) : this.o575);  //Make sure we do at most 160 pixels a scanline.
  var o717 = o881 + (o882 >> 3);
  var o884 = this.o577[o717];
  if (o884 < this.o569) {
    o884 |= 0x100;
  }
  var o885 = this.o580[o884];
  for (var o886 = (o882 & 0x7); o886 < 8 && o848 < o883 && o882 < 0x100; ++o882) {
    this.o602[o848++] = this.o583[o885[o880 | o886++]];
  }
  var o887 = Math.o312(o883 - o848, 0x100 - o882) >> 3;
  o882 += o887 << 3;
  o887 += o717;
  while (o717 < o887) {
    o884 = this.o577[++o717];
    if (o884 < this.o569) {
      o884 |= 0x100;
    }
    o885 = this.o580[o884];
    o886 = o880;
    this.o602[o848++] = this.o583[o885[o886++]];
    this.o602[o848++] = this.o583[o885[o886++]];
    this.o602[o848++] = this.o583[o885[o886++]];
    this.o602[o848++] = this.o583[o885[o886++]];
    this.o602[o848++] = this.o583[o885[o886++]];
    this.o602[o848++] = this.o583[o885[o886++]];
    this.o602[o848++] = this.o583[o885[o886++]];
    this.o602[o848++] = this.o583[o885[o886]];
  }
  if (o848 < o883) {
    if (o882 < 0x100) {
      o884 = this.o577[++o717];
      if (o884 < this.o569) {
        o884 |= 0x100;
      }
      o885 = this.o580[o884];
      for (o886 = o880 - 1; o848 < o883 && o882 < 0x100; ++o882) {
        this.o602[o848++] = this.o583[o885[++o886]];
      }
    }
    o887 = ((o883 - o848) >> 3) + o881;
    while (o881 < o887) {
      o884 = this.o577[o881++];
      if (o884 < this.o569) {
        o884 |= 0x100;
      }
      o885 = this.o580[o884];
      o886 = o880;
      this.o602[o848++] = this.o583[o885[o886++]];
      this.o602[o848++] = this.o583[o885[o886++]];
      this.o602[o848++] = this.o583[o885[o886++]];
      this.o602[o848++] = this.o583[o885[o886++]];
      this.o602[o848++] = this.o583[o885[o886++]];
      this.o602[o848++] = this.o583[o885[o886++]];
      this.o602[o848++] = this.o583[o885[o886++]];
      this.o602[o848++] = this.o583[o885[o886]];
    }
    if (o848 < o883) {
      o884 = this.o577[o881];
      if (o884 < this.o569) {
        o884 |= 0x100;
      }
      o885 = this.o580[o884];
      switch (o883 - o848) {
        case 7:
          this.o602[o848 + 6] = this.o583[o885[o880 | 6]];
        case 6:
          this.o602[o848 + 5] = this.o583[o885[o880 | 5]];
        case 5:
          this.o602[o848 + 4] = this.o583[o885[o880 | 4]];
        case 4:
          this.o602[o848 + 3] = this.o583[o885[o880 | 3]];
        case 3:
          this.o602[o848 + 2] = this.o583[o885[o880 | 2]];
        case 2:
          this.o602[o848 + 1] = this.o583[o885[o880 | 1]];
        case 1:
          this.o602[o848] = this.o583[o885[o880]];
      }
    }
  }
}
o397.prototype.o859 = function (o845) {"use strict";
  var o879 = (this.o561 + o845) & 0xFF;            //The line of the BG we're at.
  var o880 = (o879 & 7) << 3;
  var o881 = this.o568 | ((o879 & 0xF8) << 2);  //The row of cached tiles we're fetching from.
  var o882 = (this.o560 + this.o576) & 0xFF;            //The scroll amount of the BG.
  var o848 = this.o605 + this.o576;                  //Current pixel we're working on.
  var o883 = this.o605 + ((this.o562 && (o845 - this.o570) >= 0) ? Math.o312(Math.o324(this.o571, 0) + this.o576, this.o575) : this.o575);  //Make sure we do at most 160 pixels a scanline.
  var o717 = o881 + (o882 >> 3);
  var o884 = this.o577[o717];
  if (o884 < this.o569) {
    o884 |= 0x100;
  }
  var o888 = this.o578[o717];
  var o885 = this.o580[((o888 & 0x08) << 8) | ((o888 & 0x60) << 4) | o884];
  var o889 = ((o888 & 0x7) << 2) | ((o888 & 0x80) >> 2);
  for (var o886 = (o882 & 0x7); o886 < 8 && o848 < o883 && o882 < 0x100; ++o882) {
    this.o602[o848++] = this.o589[o889 | o885[o880 | o886++]];
  }
  var o887 = Math.o312(o883 - o848, 0x100 - o882) >> 3;
  o882 += o887 << 3;
  o887 += o717;
  while (o717 < o887) {
    o884 = this.o577[++o717];
    if (o884 < this.o569) {
      o884 |= 0x100;
    }
    o888 = this.o578[o717];
    o885 = this.o580[((o888 & 0x08) << 8) | ((o888 & 0x60) << 4) | o884];
    o889 = ((o888 & 0x7) << 2) | ((o888 & 0x80) >> 2);
    o886 = o880;
    this.o602[o848++] = this.o589[o889 | o885[o886++]];
    this.o602[o848++] = this.o589[o889 | o885[o886++]];
    this.o602[o848++] = this.o589[o889 | o885[o886++]];
    this.o602[o848++] = this.o589[o889 | o885[o886++]];
    this.o602[o848++] = this.o589[o889 | o885[o886++]];
    this.o602[o848++] = this.o589[o889 | o885[o886++]];
    this.o602[o848++] = this.o589[o889 | o885[o886++]];
    this.o602[o848++] = this.o589[o889 | o885[o886]];
  }
  if (o848 < o883) {
    if (o882 < 0x100) {
      o884 = this.o577[++o717];
      if (o884 < this.o569) {
        o884 |= 0x100;
      }
      o888 = this.o578[o717];
      o885 = this.o580[((o888 & 0x08) << 8) | ((o888 & 0x60) << 4) | o884];
      o889 = ((o888 & 0x7) << 2) | ((o888 & 0x80) >> 2);
      for (o886 = o880 - 1; o848 < o883 && o882 < 0x100; ++o882) {
        this.o602[o848++] = this.o589[o889 | o885[++o886]];
      }
    }
    o887 = ((o883 - o848) >> 3) + o881;
    while (o881 < o887) {
      o884 = this.o577[o881];
      if (o884 < this.o569) {
        o884 |= 0x100;
      }
      o888 = this.o578[o881++];
      o885 = this.o580[((o888 & 0x08) << 8) | ((o888 & 0x60) << 4) | o884];
      o889 = ((o888 & 0x7) << 2) | ((o888 & 0x80) >> 2);
      o886 = o880;
      this.o602[o848++] = this.o589[o889 | o885[o886++]];
      this.o602[o848++] = this.o589[o889 | o885[o886++]];
      this.o602[o848++] = this.o589[o889 | o885[o886++]];
      this.o602[o848++] = this.o589[o889 | o885[o886++]];
      this.o602[o848++] = this.o589[o889 | o885[o886++]];
      this.o602[o848++] = this.o589[o889 | o885[o886++]];
      this.o602[o848++] = this.o589[o889 | o885[o886++]];
      this.o602[o848++] = this.o589[o889 | o885[o886]];
    }
    if (o848 < o883) {
      o884 = this.o577[o881];
      if (o884 < this.o569) {
        o884 |= 0x100;
      }
      o888 = this.o578[o881];
      o885 = this.o580[((o888 & 0x08) << 8) | ((o888 & 0x60) << 4) | o884];
      o889 = ((o888 & 0x7) << 2) | ((o888 & 0x80) >> 2);
      switch (o883 - o848) {
        case 7:
          this.o602[o848 + 6] = this.o589[o889 | o885[o880 | 6]];
        case 6:
          this.o602[o848 + 5] = this.o589[o889 | o885[o880 | 5]];
        case 5:
          this.o602[o848 + 4] = this.o589[o889 | o885[o880 | 4]];
        case 4:
          this.o602[o848 + 3] = this.o589[o889 | o885[o880 | 3]];
        case 3:
          this.o602[o848 + 2] = this.o589[o889 | o885[o880 | 2]];
        case 2:
          this.o602[o848 + 1] = this.o589[o889 | o885[o880 | 1]];
        case 1:
          this.o602[o848] = this.o589[o889 | o885[o880]];
      }
    }
  }
}
o397.prototype.o861 = function (o845) {"use strict";
  var o879 = (this.o561 + o845) & 0xFF;            //The line of the BG we're at.
  var o880 = (o879 & 7) << 3;
  var o881 = this.o568 | ((o879 & 0xF8) << 2);  //The row of cached tiles we're fetching from.
  var o882 = (this.o560 + this.o576) & 0xFF;            //The scroll amount of the BG.
  var o848 = this.o605 + this.o576;                  //Current pixel we're working on.
  var o883 = this.o605 + ((this.o562 && (o845 - this.o570) >= 0) ? Math.o312(Math.o324(this.o571, 0) + this.o576, this.o575) : this.o575);  //Make sure we do at most 160 pixels a scanline.
  var o717 = o881 + (o882 >> 3);
  var o884 = this.o577[o717];
  if (o884 < this.o569) {
    o884 |= 0x100;
  }
  var o888 = this.o578[o717];
  var o885 = this.o580[((o888 & 0x08) << 8) | ((o888 & 0x60) << 4) | o884];
  var o889 = (o888 & 0x7) << 2;
  for (var o886 = (o882 & 0x7); o886 < 8 && o848 < o883 && o882 < 0x100; ++o882) {
    this.o602[o848++] = this.o589[o889 | o885[o880 | o886++]];
  }
  var o887 = Math.o312(o883 - o848, 0x100 - o882) >> 3;
  o882 += o887 << 3;
  o887 += o717;
  while (o717 < o887) {
    o884 = this.o577[++o717];
    if (o884 < this.o569) {
      o884 |= 0x100;
    }
    o888 = this.o578[o717];
    o885 = this.o580[((o888 & 0x08) << 8) | ((o888 & 0x60) << 4) | o884];
    o889 = (o888 & 0x7) << 2;
    o886 = o880;
    this.o602[o848++] = this.o589[o889 | o885[o886++]];
    this.o602[o848++] = this.o589[o889 | o885[o886++]];
    this.o602[o848++] = this.o589[o889 | o885[o886++]];
    this.o602[o848++] = this.o589[o889 | o885[o886++]];
    this.o602[o848++] = this.o589[o889 | o885[o886++]];
    this.o602[o848++] = this.o589[o889 | o885[o886++]];
    this.o602[o848++] = this.o589[o889 | o885[o886++]];
    this.o602[o848++] = this.o589[o889 | o885[o886]];
  }
  if (o848 < o883) {
    if (o882 < 0x100) {
      o884 = this.o577[++o717];
      if (o884 < this.o569) {
        o884 |= 0x100;
      }
      o888 = this.o578[o717];
      o885 = this.o580[((o888 & 0x08) << 8) | ((o888 & 0x60) << 4) | o884];
      o889 = (o888 & 0x7) << 2;
      for (o886 = o880 - 1; o848 < o883 && o882 < 0x100; ++o882) {
        this.o602[o848++] = this.o589[o889 | o885[++o886]];
      }
    }
    o887 = ((o883 - o848) >> 3) + o881;
    while (o881 < o887) {
      o884 = this.o577[o881];
      if (o884 < this.o569) {
        o884 |= 0x100;
      }
      o888 = this.o578[o881++];
      o885 = this.o580[((o888 & 0x08) << 8) | ((o888 & 0x60) << 4) | o884];
      o889 = (o888 & 0x7) << 2;
      o886 = o880;
      this.o602[o848++] = this.o589[o889 | o885[o886++]];
      this.o602[o848++] = this.o589[o889 | o885[o886++]];
      this.o602[o848++] = this.o589[o889 | o885[o886++]];
      this.o602[o848++] = this.o589[o889 | o885[o886++]];
      this.o602[o848++] = this.o589[o889 | o885[o886++]];
      this.o602[o848++] = this.o589[o889 | o885[o886++]];
      this.o602[o848++] = this.o589[o889 | o885[o886++]];
      this.o602[o848++] = this.o589[o889 | o885[o886]];
    }
    if (o848 < o883) {
      o884 = this.o577[o881];
      if (o884 < this.o569) {
        o884 |= 0x100;
      }
      o888 = this.o578[o881];
      o885 = this.o580[((o888 & 0x08) << 8) | ((o888 & 0x60) << 4) | o884];
      o889 = (o888 & 0x7) << 2;
      switch (o883 - o848) {
        case 7:
          this.o602[o848 + 6] = this.o589[o889 | o885[o880 | 6]];
        case 6:
          this.o602[o848 + 5] = this.o589[o889 | o885[o880 | 5]];
        case 5:
          this.o602[o848 + 4] = this.o589[o889 | o885[o880 | 4]];
        case 4:
          this.o602[o848 + 3] = this.o589[o889 | o885[o880 | 3]];
        case 3:
          this.o602[o848 + 2] = this.o589[o889 | o885[o880 | 2]];
        case 2:
          this.o602[o848 + 1] = this.o589[o889 | o885[o880 | 1]];
        case 1:
          this.o602[o848] = this.o589[o889 | o885[o880]];
      }
    }
  }
}
o397.prototype.o855 = function (o845) {"use strict";
  if (this.o562) {                  //Is the window enabled?
    var o879 = o845 - this.o570;    //The line of the BG we're at.
    if (o879 >= 0) {
      var o890 = (this.o571 > 0) ? (this.o571 + this.o576) : this.o576;
      var o848 = this.o605 + o890;
      var o883 = this.o605 + this.o575;
      if (o848 < o883) {
        var o880 = (o879 & 0x7) << 3;
        var o717 = (this.o567 | ((o879 & 0xF8) << 2)) + (this.o576 >> 3);
        var o884 = this.o577[o717];
        if (o884 < this.o569) {
          o884 |= 0x100;
        }
        var o885 = this.o580[o884];
        var o886 = (o890 - this.o571) & 0x7;
        o890 = Math.o312(8, o886 + o883 - o848);
        while (o886 < o890) {
          this.o602[o848++] = this.o583[o885[o880 | o886++]];
        }
        o890 = o717 + ((o883 - o848) >> 3);
        while (o717 < o890) {
          o884 = this.o577[++o717];
          if (o884 < this.o569) {
            o884 |= 0x100;
          }
          o885 = this.o580[o884];
          o886 = o880;
          this.o602[o848++] = this.o583[o885[o886++]];
          this.o602[o848++] = this.o583[o885[o886++]];
          this.o602[o848++] = this.o583[o885[o886++]];
          this.o602[o848++] = this.o583[o885[o886++]];
          this.o602[o848++] = this.o583[o885[o886++]];
          this.o602[o848++] = this.o583[o885[o886++]];
          this.o602[o848++] = this.o583[o885[o886++]];
          this.o602[o848++] = this.o583[o885[o886]];
        }
        if (o848 < o883) {
          o884 = this.o577[++o717];
          if (o884 < this.o569) {
            o884 |= 0x100;
          }
          o885 = this.o580[o884];
          switch (o883 - o848) {
            case 7:
              this.o602[o848 + 6] = this.o583[o885[o880 | 6]];
            case 6:
              this.o602[o848 + 5] = this.o583[o885[o880 | 5]];
            case 5:
              this.o602[o848 + 4] = this.o583[o885[o880 | 4]];
            case 4:
              this.o602[o848 + 3] = this.o583[o885[o880 | 3]];
            case 3:
              this.o602[o848 + 2] = this.o583[o885[o880 | 2]];
            case 2:
              this.o602[o848 + 1] = this.o583[o885[o880 | 1]];
            case 1:
              this.o602[o848] = this.o583[o885[o880]];
          }
        }
      }
    }
  }
}
o397.prototype.o860 = function (o845) {"use strict";
  if (this.o562) {                  //Is the window enabled?
    var o879 = o845 - this.o570;    //The line of the BG we're at.
    if (o879 >= 0) {
      var o890 = (this.o571 > 0) ? (this.o571 + this.o576) : this.o576;
      var o848 = this.o605 + o890;
      var o883 = this.o605 + this.o575;
      if (o848 < o883) {
        var o880 = (o879 & 0x7) << 3;
        var o717 = (this.o567 | ((o879 & 0xF8) << 2)) + (this.o576 >> 3);
        var o884 = this.o577[o717];
        if (o884 < this.o569) {
          o884 |= 0x100;
        }
        var o888 = this.o578[o717];
        var o885 = this.o580[((o888 & 0x08) << 8) | ((o888 & 0x60) << 4) | o884];
        var o889 = ((o888 & 0x7) << 2) | ((o888 & 0x80) >> 2);
        var o886 = (o890 - this.o571) & 0x7;
        o890 = Math.o312(8, o886 + o883 - o848);
        while (o886 < o890) {
          this.o602[o848++] = this.o589[o889 | o885[o880 | o886++]];
        }
        o890 = o717 + ((o883 - o848) >> 3);
        while (o717 < o890) {
          o884 = this.o577[++o717];
          if (o884 < this.o569) {
            o884 |= 0x100;
          }
          o888 = this.o578[o717];
          o885 = this.o580[((o888 & 0x08) << 8) | ((o888 & 0x60) << 4) | o884];
          o889 = ((o888 & 0x7) << 2) | ((o888 & 0x80) >> 2);
          o886 = o880;
          this.o602[o848++] = this.o589[o889 | o885[o886++]];
          this.o602[o848++] = this.o589[o889 | o885[o886++]];
          this.o602[o848++] = this.o589[o889 | o885[o886++]];
          this.o602[o848++] = this.o589[o889 | o885[o886++]];
          this.o602[o848++] = this.o589[o889 | o885[o886++]];
          this.o602[o848++] = this.o589[o889 | o885[o886++]];
          this.o602[o848++] = this.o589[o889 | o885[o886++]];
          this.o602[o848++] = this.o589[o889 | o885[o886]];
        }
        if (o848 < o883) {
          o884 = this.o577[++o717];
          if (o884 < this.o569) {
            o884 |= 0x100;
          }
          o888 = this.o578[o717];
          o885 = this.o580[((o888 & 0x08) << 8) | ((o888 & 0x60) << 4) | o884];
          o889 = ((o888 & 0x7) << 2) | ((o888 & 0x80) >> 2);
          switch (o883 - o848) {
            case 7:
              this.o602[o848 + 6] = this.o589[o889 | o885[o880 | 6]];
            case 6:
              this.o602[o848 + 5] = this.o589[o889 | o885[o880 | 5]];
            case 5:
              this.o602[o848 + 4] = this.o589[o889 | o885[o880 | 4]];
            case 4:
              this.o602[o848 + 3] = this.o589[o889 | o885[o880 | 3]];
            case 3:
              this.o602[o848 + 2] = this.o589[o889 | o885[o880 | 2]];
            case 2:
              this.o602[o848 + 1] = this.o589[o889 | o885[o880 | 1]];
            case 1:
              this.o602[o848] = this.o589[o889 | o885[o880]];
          }
        }
      }
    }
  }
}
o397.prototype.o862 = function (o845) {"use strict";
  if (this.o562) {                  //Is the window enabled?
    var o879 = o845 - this.o570;    //The line of the BG we're at.
    if (o879 >= 0) {
      var o890 = (this.o571 > 0) ? (this.o571 + this.o576) : this.o576;
      var o848 = this.o605 + o890;
      var o883 = this.o605 + this.o575;
      if (o848 < o883) {
        var o880 = (o879 & 0x7) << 3;
        var o717 = (this.o567 | ((o879 & 0xF8) << 2)) + (this.o576 >> 3);
        var o884 = this.o577[o717];
        if (o884 < this.o569) {
          o884 |= 0x100;
        }
        var o888 = this.o578[o717];
        var o885 = this.o580[((o888 & 0x08) << 8) | ((o888 & 0x60) << 4) | o884];
        var o889 = (o888 & 0x7) << 2;
        var o886 = (o890 - this.o571) & 0x7;
        o890 = Math.o312(8, o886 + o883 - o848);
        while (o886 < o890) {
          this.o602[o848++] = this.o589[o889 | o885[o880 | o886++]];
        }
        o890 = o717 + ((o883 - o848) >> 3);
        while (o717 < o890) {
          o884 = this.o577[++o717];
          if (o884 < this.o569) {
            o884 |= 0x100;
          }
          o888 = this.o578[o717];
          o885 = this.o580[((o888 & 0x08) << 8) | ((o888 & 0x60) << 4) | o884];
          o889 = (o888 & 0x7) << 2;
          o886 = o880;
          this.o602[o848++] = this.o589[o889 | o885[o886++]];
          this.o602[o848++] = this.o589[o889 | o885[o886++]];
          this.o602[o848++] = this.o589[o889 | o885[o886++]];
          this.o602[o848++] = this.o589[o889 | o885[o886++]];
          this.o602[o848++] = this.o589[o889 | o885[o886++]];
          this.o602[o848++] = this.o589[o889 | o885[o886++]];
          this.o602[o848++] = this.o589[o889 | o885[o886++]];
          this.o602[o848++] = this.o589[o889 | o885[o886]];
        }
        if (o848 < o883) {
          o884 = this.o577[++o717];
          if (o884 < this.o569) {
            o884 |= 0x100;
          }
          o888 = this.o578[o717];
          o885 = this.o580[((o888 & 0x08) << 8) | ((o888 & 0x60) << 4) | o884];
          o889 = (o888 & 0x7) << 2;
          switch (o883 - o848) {
            case 7:
              this.o602[o848 + 6] = this.o589[o889 | o885[o880 | 6]];
            case 6:
              this.o602[o848 + 5] = this.o589[o889 | o885[o880 | 5]];
            case 5:
              this.o602[o848 + 4] = this.o589[o889 | o885[o880 | 4]];
            case 4:
              this.o602[o848 + 3] = this.o589[o889 | o885[o880 | 3]];
            case 3:
              this.o602[o848 + 2] = this.o589[o889 | o885[o880 | 2]];
            case 2:
              this.o602[o848 + 1] = this.o589[o889 | o885[o880 | 1]];
            case 1:
              this.o602[o848] = this.o589[o889 | o885[o880]];
          }
        }
      }
    }
  }
}
o397.prototype.o856 = function (o845) {"use strict";
  if (this.o563) {                    //Are sprites enabled?
    var o823 = o845 + 0x10;
    var o826 = 0xFE00;
    var o824 = 0;
    var o891 = 1;
    var o892 = 0;
    var o893 = 0;
    var o888 = 0;
    var o889 = 0;
    var o885 = null;
    var o85 = 0;
    var o450 = 0;
    var length = 0;
    var o894 = 0;
    var o895 = 0;
    //Clear our x-coord sort buffer:
    while (o891 < 168) {
      this.o850[o891++] = 0xFF;
    }
    if (this.o564) {
      //Draw the visible sprites:
      for (var length = this.o896(o823, 0x7); o450 < length; ++o450) {
        o826 = this.o851[o450];
        o824 = (o823 - this.o175[o826]) << 3;
        o888 = this.o175[o826 | 3];
        o889 = (o888 & 0x10) >> 2;
        o885 = this.o580[((o888 & 0x60) << 4) | this.o175[o826 | 0x2]];
        o895 = o892 = this.o175[o826 | 1];
        o893 = Math.o312(168 - o895, 8);
        o891 = (o895 > 7) ? 0 : (8 - o895);
        for (o894 = this.o605 + ((o895 > 8) ? (o895 - 8) : 0); o891 < o893; ++o891, ++o894, ++o895) {
          if (this.o850[o895] > o892) {
            if (this.o602[o894] >= 0x2000000) {
              o85 = o885[o824 | o891];
              if (o85 > 0) {
                this.o602[o894] = this.o582[o889 | o85];
                this.o850[o895] = o892;
              }
            }
            else if (this.o602[o894] < 0x1000000) {
              o85 = o885[o824 | o891];
              if (o85 > 0 && o888 < 0x80) {
                this.o602[o894] = this.o582[o889 | o85];
                this.o850[o895] = o892;
              }
            }
          }
        }
      }
    }
    else {
      //Draw the visible sprites:
      for (var length = this.o896(o823, 0xF); o450 < length; ++o450) {
        o826 = this.o851[o450];
        o824 = (o823 - this.o175[o826]) << 3;
        o888 = this.o175[o826 | 3];
        o889 = (o888 & 0x10) >> 2;
        if ((o888 & 0x40) == (0x40 & o824)) {
          o885 = this.o580[((o888 & 0x60) << 4) | (this.o175[o826 | 0x2] & 0xFE)];
        }
        else {
          o885 = this.o580[((o888 & 0x60) << 4) | this.o175[o826 | 0x2] | 1];
        }
        o824 &= 0x3F;
        o895 = o892 = this.o175[o826 | 1];
        o893 = Math.o312(168 - o895, 8);
        o891 = (o895 > 7) ? 0 : (8 - o895);
        for (o894 = this.o605 + ((o895 > 8) ? (o895 - 8) : 0); o891 < o893; ++o891, ++o894, ++o895) {
          if (this.o850[o895] > o892) {
            if (this.o602[o894] >= 0x2000000) {
              o85 = o885[o824 | o891];
              if (o85 > 0) {
                this.o602[o894] = this.o582[o889 | o85];
                this.o850[o895] = o892;
              }
            }
            else if (this.o602[o894] < 0x1000000) {
              o85 = o885[o824 | o891];
              if (o85 > 0 && o888 < 0x80) {
                this.o602[o894] = this.o582[o889 | o85];
                this.o850[o895] = o892;
              }
            }
          }
        }
      }
    }
  }
}
o397.prototype.o896 = function (o845, o897) {"use strict";
  var o806 = 0xFE00;
  var o450 = 0;
  var o898 = 0;
  while (o806 < 0xFEA0 && o450 < 10) {
    o898 = o845 - this.o175[o806];
    if ((o898 & o897) == o898) {
      this.o851[o450++] = o806;
    }
    o806 += 4;
  }
  return o450;
}
o397.prototype.o858 = function (o845) {"use strict";
  if (this.o563) {                    //Are sprites enabled?
    var o826 = 0xFE00;
    var o823 = o845 + 0x10;
    var o824 = 0;
    var o891 = 0;
    var o899 = 0;
    var o900 = 0;
    var o888 = 0;
    var o889 = 0;
    var o885 = null;
    var o85 = 0;
    var o894 = 0;
    var o450 = 0;
    if (this.o564) {
      for (; o826 < 0xFEA0 && o450 < 10; o826 += 4) {
        o824 = o823 - this.o175[o826];
        if ((o824 & 0x7) == o824) {
          o891 = this.o175[o826 | 1] - 8;
          o899 = Math.o312(160, o891 + 8);
          o888 = this.o175[o826 | 3];
          o889 = (o888 & 7) << 2;
          o885 = this.o580[((o888 & 0x08) << 8) | ((o888 & 0x60) << 4) | this.o175[o826 | 2]];
          o900 = (o891 > 0) ? o891 : 0;
          o891 -= o824 << 3;
          for (o894 = this.o605 + o900; o900 < o899; ++o900, ++o894) {
            if (this.o602[o894] >= 0x2000000) {
              o85 = o885[o900 - o891];
              if (o85 > 0) {
                this.o602[o894] = this.o588[o889 | o85];
              }
            }
            else if (this.o602[o894] < 0x1000000) {
              o85 = o885[o900 - o891];
              if (o85 > 0 && o888 < 0x80) {    //Don't optimize for attrCode, as LICM-capable JITs should optimize its checks.
                this.o602[o894] = this.o588[o889 | o85];
              }
            }
          }
          ++o450;
        }
      }
    }
    else {
      for (; o826 < 0xFEA0 && o450 < 10; o826 += 4) {
        o824 = o823 - this.o175[o826];
        if ((o824 & 0xF) == o824) {
          o891 = this.o175[o826 | 1] - 8;
          o899 = Math.o312(160, o891 + 8);
          o888 = this.o175[o826 | 3];
          o889 = (o888 & 7) << 2;
          if ((o888 & 0x40) == (0x40 & (o824 << 3))) {
            o885 = this.o580[((o888 & 0x08) << 8) | ((o888 & 0x60) << 4) | (this.o175[o826 | 0x2] & 0xFE)];
          }
          else {
            o885 = this.o580[((o888 & 0x08) << 8) | ((o888 & 0x60) << 4) | this.o175[o826 | 0x2] | 1];
          }
          o900 = (o891 > 0) ? o891 : 0;
          o891 -= (o824 & 0x7) << 3;
          for (o894 = this.o605 + o900; o900 < o899; ++o900, ++o894) {
            if (this.o602[o894] >= 0x2000000) {
              o85 = o885[o900 - o891];
              if (o85 > 0) {
                this.o602[o894] = this.o588[o889 | o85];
              }
            }
            else if (this.o602[o894] < 0x1000000) {
              o85 = o885[o900 - o891];
              if (o85 > 0 && o888 < 0x80) {    //Don't optimize for attrCode, as LICM-capable JITs should optimize its checks.
                this.o602[o894] = this.o588[o889 | o85];
              }
            }
          }
          ++o450;
        }
      }
    }
  }
}
//Generate only a single tile line for the GB tile cache mode:
o397.prototype.o867 = function (o806) {"use strict";
  var o901 = (this.o175[0x1 | o806] << 8) | this.o175[0x9FFE & o806];
  var o902 = this.o580[(o806 & 0x1FF0) >> 4];
  o806 = (o806 & 0xE) << 2;
  o902[o806 | 7] = ((o901 & 0x100) >> 7) | (o901 & 0x1);
  o902[o806 | 6] = ((o901 & 0x200) >> 8) | ((o901 & 0x2) >> 1);
  o902[o806 | 5] = ((o901 & 0x400) >> 9) | ((o901 & 0x4) >> 2);
  o902[o806 | 4] = ((o901 & 0x800) >> 10) | ((o901 & 0x8) >> 3);
  o902[o806 | 3] = ((o901 & 0x1000) >> 11) | ((o901 & 0x10) >> 4);
  o902[o806 | 2] = ((o901 & 0x2000) >> 12) | ((o901 & 0x20) >> 5);
  o902[o806 | 1] = ((o901 & 0x4000) >> 13) | ((o901 & 0x40) >> 6);
  o902[o806] = ((o901 & 0x8000) >> 14) | ((o901 & 0x80) >> 7);
}
//Generate only a single tile line for the GBC tile cache mode (Bank 1):
o397.prototype.o903 = function (o806) {"use strict";
  var o901 = (this.o175[0x1 | o806] << 8) | this.o175[0x9FFE & o806];
  o806 &= 0x1FFE;
  var o904 = this.o580[o806 >> 4];
  var o905 = this.o580[0x200 | (o806 >> 4)];
  var o906 = this.o580[0x400 | (o806 >> 4)];
  var o907 = this.o580[0x600 | (o806 >> 4)];
  o806 = (o806 & 0xE) << 2;
  var o908 = 0x38 - o806;
  o907[o908] = o905[o806] = o906[o908 | 7] = o904[o806 | 7] = ((o901 & 0x100) >> 7) | (o901 & 0x1);
  o907[o908 | 1] = o905[o806 | 1] = o906[o908 | 6] = o904[o806 | 6] = ((o901 & 0x200) >> 8) | ((o901 & 0x2) >> 1);
  o907[o908 | 2] = o905[o806 | 2] = o906[o908 | 5] = o904[o806 | 5] = ((o901 & 0x400) >> 9) | ((o901 & 0x4) >> 2);
  o907[o908 | 3] = o905[o806 | 3] = o906[o908 | 4] = o904[o806 | 4] = ((o901 & 0x800) >> 10) | ((o901 & 0x8) >> 3);
  o907[o908 | 4] = o905[o806 | 4] = o906[o908 | 3] = o904[o806 | 3] = ((o901 & 0x1000) >> 11) | ((o901 & 0x10) >> 4);
  o907[o908 | 5] = o905[o806 | 5] = o906[o908 | 2] = o904[o806 | 2] = ((o901 & 0x2000) >> 12) | ((o901 & 0x20) >> 5);
  o907[o908 | 6] = o905[o806 | 6] = o906[o908 | 1] = o904[o806 | 1] = ((o901 & 0x4000) >> 13) | ((o901 & 0x40) >> 6);
  o907[o908 | 7] = o905[o806 | 7] = o906[o908] = o904[o806] = ((o901 & 0x8000) >> 14) | ((o901 & 0x80) >> 7);
}
//Generate all the flip combinations for a full GBC VRAM bank 1 tile:
o397.prototype.o868 = function (o909) {"use strict";
  var o806 = o909 >> 4;
  var o904 = this.o580[o806];
  var o905 = this.o580[0x200 | o806];
  var o906 = this.o580[0x400 | o806];
  var o907 = this.o580[0x600 | o806];
  var o901 = 0;
  o909 |= 0x8000;
  o806 = 0;
  var o908 = 56;
  do {
    o901 = (this.o175[0x1 | o909] << 8) | this.o175[o909];
    o907[o908] = o905[o806] = o906[o908 | 7] = o904[o806 | 7] = ((o901 & 0x100) >> 7) | (o901 & 0x1);
    o907[o908 | 1] = o905[o806 | 1] = o906[o908 | 6] = o904[o806 | 6] = ((o901 & 0x200) >> 8) | ((o901 & 0x2) >> 1);
    o907[o908 | 2] = o905[o806 | 2] = o906[o908 | 5] = o904[o806 | 5] = ((o901 & 0x400) >> 9) | ((o901 & 0x4) >> 2);
    o907[o908 | 3] = o905[o806 | 3] = o906[o908 | 4] = o904[o806 | 4] = ((o901 & 0x800) >> 10) | ((o901 & 0x8) >> 3);
    o907[o908 | 4] = o905[o806 | 4] = o906[o908 | 3] = o904[o806 | 3] = ((o901 & 0x1000) >> 11) | ((o901 & 0x10) >> 4);
    o907[o908 | 5] = o905[o806 | 5] = o906[o908 | 2] = o904[o806 | 2] = ((o901 & 0x2000) >> 12) | ((o901 & 0x20) >> 5);
    o907[o908 | 6] = o905[o806 | 6] = o906[o908 | 1] = o904[o806 | 1] = ((o901 & 0x4000) >> 13) | ((o901 & 0x40) >> 6);
    o907[o908 | 7] = o905[o806 | 7] = o906[o908] = o904[o806] = ((o901 & 0x8000) >> 14) | ((o901 & 0x80) >> 7);
    o806 += 8;
    o908 -= 8;
    o909 += 2;
  } while (o908 > -1);
}
//Generate only a single tile line for the GBC tile cache mode (Bank 2):
o397.prototype.o910 = function (o806) {"use strict";
  var o901 = (this.o431[0x1 | o806] << 8) | this.o431[0x1FFE & o806];
  var o904 = this.o580[0x800 | (o806 >> 4)];
  var o905 = this.o580[0xA00 | (o806 >> 4)];
  var o906 = this.o580[0xC00 | (o806 >> 4)];
  var o907 = this.o580[0xE00 | (o806 >> 4)];
  o806 = (o806 & 0xE) << 2;
  var o908 = 0x38 - o806;
  o907[o908] = o905[o806] = o906[o908 | 7] = o904[o806 | 7] = ((o901 & 0x100) >> 7) | (o901 & 0x1);
  o907[o908 | 1] = o905[o806 | 1] = o906[o908 | 6] = o904[o806 | 6] = ((o901 & 0x200) >> 8) | ((o901 & 0x2) >> 1);
  o907[o908 | 2] = o905[o806 | 2] = o906[o908 | 5] = o904[o806 | 5] = ((o901 & 0x400) >> 9) | ((o901 & 0x4) >> 2);
  o907[o908 | 3] = o905[o806 | 3] = o906[o908 | 4] = o904[o806 | 4] = ((o901 & 0x800) >> 10) | ((o901 & 0x8) >> 3);
  o907[o908 | 4] = o905[o806 | 4] = o906[o908 | 3] = o904[o806 | 3] = ((o901 & 0x1000) >> 11) | ((o901 & 0x10) >> 4);
  o907[o908 | 5] = o905[o806 | 5] = o906[o908 | 2] = o904[o806 | 2] = ((o901 & 0x2000) >> 12) | ((o901 & 0x20) >> 5);
  o907[o908 | 6] = o905[o806 | 6] = o906[o908 | 1] = o904[o806 | 1] = ((o901 & 0x4000) >> 13) | ((o901 & 0x40) >> 6);
  o907[o908 | 7] = o905[o806 | 7] = o906[o908] = o904[o806] = ((o901 & 0x8000) >> 14) | ((o901 & 0x80) >> 7);
}
//Generate all the flip combinations for a full GBC VRAM bank 2 tile:
o397.prototype.o869 = function (o909) {"use strict";
  var o806 = o909 >> 4;
  var o904 = this.o580[0x800 | o806];
  var o905 = this.o580[0xA00 | o806];
  var o906 = this.o580[0xC00 | o806];
  var o907 = this.o580[0xE00 | o806];
  var o901 = 0;
  o806 = 0;
  var o908 = 56;
  do {
    o901 = (this.o431[0x1 | o909] << 8) | this.o431[o909];
    o907[o908] = o905[o806] = o906[o908 | 7] = o904[o806 | 7] = ((o901 & 0x100) >> 7) | (o901 & 0x1);
    o907[o908 | 1] = o905[o806 | 1] = o906[o908 | 6] = o904[o806 | 6] = ((o901 & 0x200) >> 8) | ((o901 & 0x2) >> 1);
    o907[o908 | 2] = o905[o806 | 2] = o906[o908 | 5] = o904[o806 | 5] = ((o901 & 0x400) >> 9) | ((o901 & 0x4) >> 2);
    o907[o908 | 3] = o905[o806 | 3] = o906[o908 | 4] = o904[o806 | 4] = ((o901 & 0x800) >> 10) | ((o901 & 0x8) >> 3);
    o907[o908 | 4] = o905[o806 | 4] = o906[o908 | 3] = o904[o806 | 3] = ((o901 & 0x1000) >> 11) | ((o901 & 0x10) >> 4);
    o907[o908 | 5] = o905[o806 | 5] = o906[o908 | 2] = o904[o806 | 2] = ((o901 & 0x2000) >> 12) | ((o901 & 0x20) >> 5);
    o907[o908 | 6] = o905[o806 | 6] = o906[o908 | 1] = o904[o806 | 1] = ((o901 & 0x4000) >> 13) | ((o901 & 0x40) >> 6);
    o907[o908 | 7] = o905[o806 | 7] = o906[o908] = o904[o806] = ((o901 & 0x8000) >> 14) | ((o901 & 0x80) >> 7);
    o806 += 8;
    o908 -= 8;
    o909 += 2;
  } while (o908 > -1);
}
//Generate only a single tile line for the GB tile cache mode (OAM accessible range):
o397.prototype.o866 = function (o806) {"use strict";
  var o901 = (this.o175[0x1 | o806] << 8) | this.o175[0x9FFE & o806];
  o806 &= 0x1FFE;
  var o904 = this.o580[o806 >> 4];
  var o905 = this.o580[0x200 | (o806 >> 4)];
  var o906 = this.o580[0x400 | (o806 >> 4)];
  var o907 = this.o580[0x600 | (o806 >> 4)];
  o806 = (o806 & 0xE) << 2;
  var o908 = 0x38 - o806;
  o907[o908] = o905[o806] = o906[o908 | 7] = o904[o806 | 7] = ((o901 & 0x100) >> 7) | (o901 & 0x1);
  o907[o908 | 1] = o905[o806 | 1] = o906[o908 | 6] = o904[o806 | 6] = ((o901 & 0x200) >> 8) | ((o901 & 0x2) >> 1);
  o907[o908 | 2] = o905[o806 | 2] = o906[o908 | 5] = o904[o806 | 5] = ((o901 & 0x400) >> 9) | ((o901 & 0x4) >> 2);
  o907[o908 | 3] = o905[o806 | 3] = o906[o908 | 4] = o904[o806 | 4] = ((o901 & 0x800) >> 10) | ((o901 & 0x8) >> 3);
  o907[o908 | 4] = o905[o806 | 4] = o906[o908 | 3] = o904[o806 | 3] = ((o901 & 0x1000) >> 11) | ((o901 & 0x10) >> 4);
  o907[o908 | 5] = o905[o806 | 5] = o906[o908 | 2] = o904[o806 | 2] = ((o901 & 0x2000) >> 12) | ((o901 & 0x20) >> 5);
  o907[o908 | 6] = o905[o806 | 6] = o906[o908 | 1] = o904[o806 | 1] = ((o901 & 0x4000) >> 13) | ((o901 & 0x40) >> 6);
  o907[o908 | 7] = o905[o806 | 7] = o906[o908] = o904[o806] = ((o901 & 0x8000) >> 14) | ((o901 & 0x80) >> 7);
}
o397.prototype.o911 = function () {"use strict";
  if (this.o455) {
    this.o542 = 0;      //Mark frame for ensuring a JIT pass for the next framebuffer output.
    this.o912();
  }
}
o397.prototype.o829 = function () {"use strict";
  //JIT the graphics to v-blank framing:
  this.o542 += this.o541;
  this.o912();
}
o397.prototype.o912 = function () {"use strict";
  //Normal rendering JIT, where we try to do groups of scanlines at once:
  while (this.o541 > 0) {
    this.o844(this.o540);
    if (this.o540 < 143) {
      ++this.o540;
    }
    else {
      this.o540 = 0;
    }
    --this.o541;
  }
}
o397.prototype.o818 = function () {"use strict";
  if (this.o541 < 144) {
    ++this.o541;
  }
  else {
    this.o576 = 0;
    this.o574 = -1;
    if (this.o540 < 143) {
      ++this.o540;
    }
    else {
      this.o540 = 0;
    }
  }
}
o397.prototype.o877 = function () {"use strict";
  this.o911();
  this.o849();
}
//Check for the highest priority IRQ to fire:
o397.prototype.o812 = function () {"use strict";
  var o913 = 0;
  var o914 = 1;
  do {
    //Check to see if an interrupt is enabled AND requested.
    if ((o914 & this.o419) == o914) {
      this.o418 = false;            //Reset the interrupt enabling.
      this.o420 -= o914;  //Reset the interrupt request.
      this.o419 = 0;        //Reset the IRQ assertion.
      //Interrupts have a certain clock cycle length:
      this.o423 = 20;
      //Set the stack pointer to the current program counter value:
      this.o170 = (this.o170 - 1) & 0xFFFF;
      this.o428[this.o170](this, this.o170, this.o169 >> 8);
      this.o170 = (this.o170 - 1) & 0xFFFF;
      this.o428[this.o170](this, this.o170, this.o169 & 0xFF);
      //Set the program counter to the interrupt's address:
      this.o169 = 0x40 | (o913 << 3);
      //Clock the core for mid-instruction updates:
      this.o828();
      return;                  //We only want the highest priority interrupt.
    }
    o914 = 1 << ++o913;
  } while (o913 < 5);
}
/*
  Check for IRQs to be fired while not in HALT:
*/
o397.prototype.o701 = function () {"use strict";
  if (this.o418) {
    this.o419 = this.o421 & this.o420 & 0x1F;
  }
}
/*
  Handle the HALT opcode by predicting all IRQ cases correctly,
  then selecting the next closest IRQ firing from the prediction to
  clock up to. This prevents hacky looping that doesn't predict, but
  instead just clocks through the core update procedure by one which
  is very slow. Not many emulators do this because they have to cover
  all the IRQ prediction cases and they usually get them wrong.
*/
o397.prototype.o624 = function () {"use strict";
  //Initialize our variables and start our prediction:
  if (!this.o415) {
    this.o415 = true;
    var o915 = -1;
    var o618 = 0;
    if (this.o455) {
      //If the LCD is enabled, then predict the LCD IRQs enabled:
      if ((this.o421 & 0x1) == 0x1) {
        o915 = ((456 * (((this.o449 == 1) ? 298 : 144) - this.o539)) - this.o527) << this.o424;
      }
      if ((this.o421 & 0x2) == 0x2) {
        if (this.o454) {
          o618 = (this.o822() - this.o527) << this.o424;
          if (o618 <= o915 || o915 == -1) {
            o915 = o618;
          }
        }
        if (this.o453 && (this.o421 & 0x1) == 0) {
          o618 = ((456 * (((this.o449 == 1) ? 298 : 144) - this.o539)) - this.o527) << this.o424;
          if (o618 <= o915 || o915 == -1) {
            o915 = o618;
          }
        }
        if (this.o452) {
          o618 = (((this.o539 >= 143) ? (456 * (154 - this.o539)) : 456) - this.o527) << this.o424;
          if (o618 <= o915 || o915 == -1) {
            o915 = o618;
          }
        }
        if (this.o451 && this.o175[0xFF45] <= 153) {
          o618 = (this.o821() - this.o527) << this.o424;
          if (o618 <= o915 || o915 == -1) {
            o915 = o618;
          }
        }
      }
    }
    if (this.o529 && (this.o421 & 0x4) == 0x4) {
      //CPU timer IRQ prediction:
      o618 = ((0x100 - this.o175[0xFF05]) * this.o530) - this.o528;
      if (o618 <= o915 || o915 == -1) {
        o915 = o618;
      }
    }
    if (this.o531 > 0 && (this.o421 & 0x8) == 0x8) {
      //Serial IRQ prediction:
      if (this.o531 <= o915 || o915 == -1) {
        o915 = this.o531;
      }
    }
  }
  else {
    var o915 = this.o411;
  }
  var o916 = (this.o406 - this.o525) << this.o424;
  if (o915 >= 0) {
    if (o915 <= o916) {
      //Exit out of HALT normally:
      this.o423 = Math.o324(o915, this.o423);
      this.o809();
      this.o415 = false;
      this.o423 = 0;
    }
    else {
      //Still in HALT, clock only up to the clocks specified per iteration:
      this.o423 = Math.o324(o916, this.o423);
      this.o411 = o915 - this.o423;
    }
  }
  else {
    //Still in HALT, clock only up to the clocks specified per iteration:
    //Will stay in HALT forever (Stuck in HALT forever), but the APU and LCD are still clocked, so don't pause:
    this.o423 += o916;
  }
}
//Memory Reading:
o397.prototype.o616 = function (o806) {"use strict";
  //Act as a wrapper for reading the returns from the compiled jumps to memory.
  return this.o427[o806](this, o806);  //This seems to be faster than the usual if/else.
}
o397.prototype.o634 = function (o806) {"use strict";
  //Act as a wrapper for reading the returns from the compiled jumps to memory.
  return this.o429[o806](this, o806);  //This seems to be faster than the usual if/else.
}
o397.prototype.o703 = function () {"use strict";
  //Faster in some browsers, since we are doing less conditionals overall by implementing them in advance.
  for (var index = 0x0000; index <= 0xFFFF; index++) {
    if (index < 0x4000) {
      this.o427[index] = this.o917;
    }
    else if (index < 0x8000) {
      this.o427[index] = this.o918;
    }
    else if (index < 0x9800) {
      this.o427[index] = (this.o437) ? this.o919 : this.o920;
    }
    else if (index < 0xA000) {
      this.o427[index] = (this.o437) ? this.o921 : this.o922;
    }
    else if (index >= 0xA000 && index < 0xC000) {
      if ((this.o558 == 1 / 16 && index < 0xA200) || this.o558 >= 1) {
        if (this.o548) {
          this.o427[index] = this.o923;
        }
        else if (!this.o546) {
          this.o427[index] = this.o924;
        }
        else {
          //MBC3 RTC + RAM:
          this.o427[index] = this.o925;
        }
      }
      else {
        this.o427[index] = this.o926;
      }
    }
    else if (index >= 0xC000 && index < 0xE000) {
      if (!this.o437 || index < 0xD000) {
        this.o427[index] = this.o917;
      }
      else {
        this.o427[index] = this.o927;
      }
    }
    else if (index >= 0xE000 && index < 0xFE00) {
      if (!this.o437 || index < 0xF000) {
        this.o427[index] = this.o928;
      }
      else {
        this.o427[index] = this.o929;
      }
    }
    else if (index < 0xFEA0) {
      this.o427[index] = this.o930;
    }
    else if (this.o437 && index >= 0xFEA0 && index < 0xFF00) {
      this.o427[index] = this.o917;
    }
    else if (index >= 0xFF00) {
      switch (index) {
        case 0xFF00:
          //JOYPAD:
          this.o429[0] = this.o427[0xFF00] = function (o458, o806) {"use strict";
            return 0xC0 | o458.o175[0xFF00];  //Top nibble returns as set.
          }
          break;
        case 0xFF01:
          //SB
          this.o429[0x01] = this.o427[0xFF01] = function (o458, o806) {"use strict";
            return (o458.o175[0xFF02] < 0x80) ? o458.o175[0xFF01] : 0xFF;
          }
          break;
        case 0xFF02:
          //SC
          if (this.o437) {
            this.o429[0x02] = this.o427[0xFF02] = function (o458, o806) {"use strict";
              return ((o458.o531 <= 0) ? 0x7C : 0xFC) | o458.o175[0xFF02];
            }
          }
          else {
            this.o429[0x02] = this.o427[0xFF02] = function (o458, o806) {"use strict";
              return ((o458.o531 <= 0) ? 0x7E : 0xFE) | o458.o175[0xFF02];
            }
          }
          break;
        case 0xFF04:
          //DIV
          this.o429[0x04] = this.o427[0xFF04] = function (o458, o806) {"use strict";
            o458.o175[0xFF04] = (o458.o175[0xFF04] + (o458.o526 >> 8)) & 0xFF;
            o458.o526 &= 0xFF;
            return o458.o175[0xFF04];

          }
          break;
        case 0xFF07:
          this.o429[0x07] = this.o427[0xFF07] = function (o458, o806) {"use strict";
            return 0xF8 | o458.o175[0xFF07];
          }
          break;
        case 0xFF0F:
          //IF
          this.o429[0x0F] = this.o427[0xFF0F] = function (o458, o806) {"use strict";
            return 0xE0 | o458.o420;
          }
          break;
        case 0xFF10:
          this.o429[0x10] = this.o427[0xFF10] = function (o458, o806) {"use strict";
            return 0x80 | o458.o175[0xFF10];
          }
          break;
        case 0xFF11:
          this.o429[0x11] = this.o427[0xFF11] = function (o458, o806) {"use strict";
            return 0x3F | o458.o175[0xFF11];
          }
          break;
        case 0xFF13:
          this.o429[0x13] = this.o427[0xFF13] = this.o926;
          break;
        case 0xFF14:
          this.o429[0x14] = this.o427[0xFF14] = function (o458, o806) {"use strict";
            return 0xBF | o458.o175[0xFF14];
          }
          break;
        case 0xFF16:
          this.o429[0x16] = this.o427[0xFF16] = function (o458, o806) {"use strict";
            return 0x3F | o458.o175[0xFF16];
          }
          break;
        case 0xFF18:
          this.o429[0x18] = this.o427[0xFF18] = this.o926;
          break;
        case 0xFF19:
          this.o429[0x19] = this.o427[0xFF19] = function (o458, o806) {"use strict";
            return 0xBF | o458.o175[0xFF19];
          }
          break;
        case 0xFF1A:
          this.o429[0x1A] = this.o427[0xFF1A] = function (o458, o806) {"use strict";
            return 0x7F | o458.o175[0xFF1A];
          }
          break;
        case 0xFF1B:
          this.o429[0x1B] = this.o427[0xFF1B] = this.o926;
          break;
        case 0xFF1C:
          this.o429[0x1C] = this.o427[0xFF1C] = function (o458, o806) {"use strict";
            return 0x9F | o458.o175[0xFF1C];
          }
          break;
        case 0xFF1D:
          this.o429[0x1D] = this.o427[0xFF1D] = function (o458, o806) {"use strict";
            return 0xFF;
          }
          break;
        case 0xFF1E:
          this.o429[0x1E] = this.o427[0xFF1E] = function (o458, o806) {"use strict";
            return 0xBF | o458.o175[0xFF1E];
          }
          break;
        case 0xFF1F:
        case 0xFF20:
          this.o429[index & 0xFF] = this.o427[index] = this.o926;
          break;
        case 0xFF23:
          this.o429[0x23] = this.o427[0xFF23] = function (o458, o806) {"use strict";
            return 0xBF | o458.o175[0xFF23];
          }
          break;
        case 0xFF26:
          this.o429[0x26] = this.o427[0xFF26] = function (o458, o806) {"use strict";
            o458.o784();
            return 0x70 | o458.o175[0xFF26];
          }
          break;
        case 0xFF27:
        case 0xFF28:
        case 0xFF29:
        case 0xFF2A:
        case 0xFF2B:
        case 0xFF2C:
        case 0xFF2D:
        case 0xFF2E:
        case 0xFF2F:
          this.o429[index & 0xFF] = this.o427[index] = this.o926;
          break;
        case 0xFF30:
        case 0xFF31:
        case 0xFF32:
        case 0xFF33:
        case 0xFF34:
        case 0xFF35:
        case 0xFF36:
        case 0xFF37:
        case 0xFF38:
        case 0xFF39:
        case 0xFF3A:
        case 0xFF3B:
        case 0xFF3C:
        case 0xFF3D:
        case 0xFF3E:
        case 0xFF3F:
          this.o427[index] = function (o458, o806) {"use strict";
            return (o458.o666) ? o458.o175[0xFF00 | (o458.o696 >> 1)] : o458.o175[o806];
          }
          this.o429[index & 0xFF] = function (o458, o806) {"use strict";
            return (o458.o666) ? o458.o175[0xFF00 | (o458.o696 >> 1)] : o458.o175[0xFF00 | o806];
          }
          break;
        case 0xFF41:
          this.o429[0x41] = this.o427[0xFF41] = function (o458, o806) {"use strict";
            return 0x80 | o458.o175[0xFF41] | o458.o449;
          }
          break;
        case 0xFF42:
          this.o429[0x42] = this.o427[0xFF42] = function (o458, o806) {"use strict";
            return o458.o561;
          }
          break;
        case 0xFF43:
          this.o429[0x43] = this.o427[0xFF43] = function (o458, o806) {"use strict";
            return o458.o560;
          }
          break;
        case 0xFF44:
          this.o429[0x44] = this.o427[0xFF44] = function (o458, o806) {"use strict";
            return ((o458.o455) ? o458.o175[0xFF44] : 0);
          }
          break;
        case 0xFF4A:
          //WY
          this.o429[0x4A] = this.o427[0xFF4A] = function (o458, o806) {"use strict";
            return o458.o570;
          }
          break;
        case 0xFF4F:
          this.o429[0x4F] = this.o427[0xFF4F] = function (o458, o806) {"use strict";
            return o458.o559;
          }
          break;
        case 0xFF55:
          if (this.o437) {
            this.o429[0x55] = this.o427[0xFF55] = function (o458, o806) {"use strict";
              if (!o458.o455 && o458.o422) {  //Undocumented behavior alert: HDMA becomes GDMA when LCD is off (Worms Armageddon Fix).
                //DMA
                o458.o833((o458.o175[0xFF55] & 0x7F) + 1);
                o458.o175[0xFF55] = 0xFF;  //Transfer completed.
                o458.o422 = false;
              }
              return o458.o175[0xFF55];
            }
          }
          else {
            this.o427[0xFF55] = this.o917;
            this.o429[0x55] = this.o931;
          }
          break;
        case 0xFF56:
          if (this.o437) {
            this.o429[0x56] = this.o427[0xFF56] = function (o458, o806) {"use strict";
              //Return IR "not connected" status:
              return 0x3C | ((o458.o175[0xFF56] >= 0xC0) ? (0x2 | (o458.o175[0xFF56] & 0xC1)) : (o458.o175[0xFF56] & 0xC3));
            }
          }
          else {
            this.o427[0xFF56] = this.o917;
            this.o429[0x56] = this.o931;
          }
          break;
        case 0xFF6C:
          if (this.o437) {
            this.o429[0x6C] = this.o427[0xFF6C] = function (o458, o806) {"use strict";
              return 0xFE | o458.o175[0xFF6C];
            }
          }
          else {
            this.o429[0x6C] = this.o427[0xFF6C] = this.o926;
          }
          break;
        case 0xFF70:
          if (this.o437) {
            //SVBK
            this.o429[0x70] = this.o427[0xFF70] = function (o458, o806) {"use strict";
              return 0x40 | o458.o175[0xFF70];
            }
          }
          else {
            this.o429[0x70] = this.o427[0xFF70] = this.o926;
          }
          break;
        case 0xFF75:
          this.o429[0x75] = this.o427[0xFF75] = function (o458, o806) {"use strict";
            return 0x8F | o458.o175[0xFF75];
          }
          break;
        case 0xFF76:
        case 0xFF77:
          this.o429[index & 0xFF] = this.o427[index] = function (o458, o806) {"use strict";
            return 0;
          }
          break;
        case 0xFFFF:
          //IE
          this.o429[0xFF] = this.o427[0xFFFF] = function (o458, o806) {"use strict";
            return o458.o421;
          }
          break;
        default:
          this.o427[index] = this.o917;
          this.o429[index & 0xFF] = this.o931;
      }
    }
    else {
      this.o427[index] = this.o926;
    }
  }
}
o397.prototype.o917 = function (o458, o806) {"use strict";
  return o458.o175[o806];
}
o397.prototype.o931 = function (o458, o806) {"use strict";
  return o458.o175[0xFF00 | o806];
}
o397.prototype.o918 = function (o458, o806) {"use strict";
  return o458.o173[o458.o443 + o806];
}
o397.prototype.o924 = function (o458, o806) {"use strict";
  //Switchable RAM
  if (o458.o434 || o720[10]) {
    return o458.o177[o806 + o458.o436];
  }
  //cout("Reading from disabled RAM.", 1);
  return 0xFF;
}
o397.prototype.o923 = function (o458, o806) {"use strict";
  //Switchable RAM
  if (o458.o434 || o720[10]) {
    switch (o806) {
      case 0xA000:
      case 0xA060:
      case 0xA070:
        return 0;
      case 0xA080:
        //TODO: Gyro Control Register
        return 0;
      case 0xA050:
        //Y High Byte
        return o458.o475;
      case 0xA040:
        //Y Low Byte
        return o458.o476;
      case 0xA030:
        //X High Byte
        return o458.o473;
      case 0xA020:
        //X Low Byte:
        return o458.o474;
      default:
        return o458.o177[o806 + o458.o436];
    }
  }
  //cout("Reading from disabled RAM.", 1);
  return 0xFF;
}
o397.prototype.o925 = function (o458, o806) {"use strict";
  //Switchable RAM
  if (o458.o434 || o720[10]) {
    switch (o458.o435) {
      case 0x00:
      case 0x01:
      case 0x02:
      case 0x03:
        return o458.o177[o806 + o458.o436];
        break;
      case 0x08:
        return o458.o462;
        break;
      case 0x09:
        return o458.o463;
        break;
      case 0x0A:
        return o458.o464;
        break;
      case 0x0B:
        return o458.o465;
        break;
      case 0x0C:
        return (((o458.o471) ? 0x80 : 0) + ((o458.o472) ? 0x40 : 0)) + o458.o466;
    }
  }
  //cout("Reading from invalid or disabled RAM.", 1);
  return 0xFF;
}
o397.prototype.o927 = function (o458, o806) {"use strict";
  return o458.o432[o806 + o458.o439];
}
o397.prototype.o930 = function (o458, o806) {"use strict";
  return (o458.o449 > 1) ?  0xFF : o458.o175[o806];
}
o397.prototype.o929 = function (o458, o806) {"use strict";
  return o458.o432[o806 + o458.o440];
}
o397.prototype.o928 = function (o458, o806) {"use strict";
  return o458.o175[o806 - 0x2000];
}
o397.prototype.o926 = function (o458, o806) {"use strict";
  return 0xFF;
}
o397.prototype.o919 = function (o458, o806) {"use strict";
  //CPU Side Reading The VRAM (Optimized for GameBoy Color)
  return (o458.o449 > 2) ? 0xFF : ((o458.o559 == 0) ? o458.o175[o806] : o458.o431[o806 & 0x1FFF]);
}
o397.prototype.o920 = function (o458, o806) {"use strict";
  //CPU Side Reading The VRAM (Optimized for classic GameBoy)
  return (o458.o449 > 2) ? 0xFF : o458.o175[o806];
}
o397.prototype.o921 = function (o458, o806) {"use strict";
  //CPU Side Reading the Character Data Map:
  return (o458.o449 > 2) ? 0xFF : o458.o579[o806 & 0x7FF];
}
o397.prototype.o922 = function (o458, o806) {"use strict";
  //CPU Side Reading the Character Data Map:
  return (o458.o449 > 2) ? 0xFF : o458.o577[o806 & 0x7FF];
}
o397.prototype.o932 = function () {"use strict";
  //Read the cartridge ROM data from RAM memory:
  switch (this.o442) {
    case 0x00:
    case 0x20:
    case 0x40:
    case 0x60:
      //Bank calls for 0x00, 0x20, 0x40, and 0x60 are really for 0x01, 0x21, 0x41, and 0x61.
      this.o443 = (this.o442 % this.o700) << 14;
      break;
    default:
      this.o443 = ((this.o442 % this.o700) - 1) << 14;
  }
}
o397.prototype.o933 = function () {"use strict";
  //Read the cartridge ROM data from RAM memory:
  //Only map bank 0 to bank 1 here (MBC2 is like MBC1, but can only do 16 banks, so only the bank 0 quirk appears for MBC2):
  this.o443 = Math.o324((this.o442 % this.o700) - 1, 0) << 14;
}
o397.prototype.o934 = function () {"use strict";
  //Read the cartridge ROM data from RAM memory:
  this.o443 = ((this.o442 % this.o700) - 1) << 14;
}
//Memory Writing:
o397.prototype.o617 = function (o806, o85) {"use strict";
  //Act as a wrapper for writing by compiled jumps to specific memory writing functions.
  this.o428[o806](this, o806, o85);
}
//0xFFXX fast path:
o397.prototype.o631 = function (o806, o85) {"use strict";
  //Act as a wrapper for writing by compiled jumps to specific memory writing functions.
  this.o430[o806](this, o806, o85);
}
o397.prototype.o704 = function () {"use strict";
  //Faster in some browsers, since we are doing less conditionals overall by implementing them in advance.
  for (var index = 0x0000; index <= 0xFFFF; index++) {
    if (index < 0x8000) {
      if (this.o544) {
        if (index < 0x2000) {
          this.o428[index] = this.o935;
        }
        else if (index < 0x4000) {
          this.o428[index] = this.o936;
        }
        else if (index < 0x6000) {
          this.o428[index] = this.o937;
        }
        else {
          this.o428[index] = this.o938;
        }
      }
      else if (this.o545) {
        if (index < 0x1000) {
          this.o428[index] = this.o935;
        }
        else if (index >= 0x2100 && index < 0x2200) {
          this.o428[index] = this.o939;
        }
        else {
          this.o428[index] = this.o940;
        }
      }
      else if (this.o546) {
        if (index < 0x2000) {
          this.o428[index] = this.o935;
        }
        else if (index < 0x4000) {
          this.o428[index] = this.o941;
        }
        else if (index < 0x6000) {
          this.o428[index] = this.o942;
        }
        else {
          this.o428[index] = this.o943;
        }
      }
      else if (this.o547 || this.o551 || this.o548) {
        if (index < 0x2000) {
          this.o428[index] = this.o935;
        }
        else if (index < 0x3000) {
          this.o428[index] = this.o944;
        }
        else if (index < 0x4000) {
          this.o428[index] = this.o945;
        }
        else if (index < 0x6000) {
          this.o428[index] = (this.o551) ? this.o946 : this.o947;
        }
        else {
          this.o428[index] = this.o940;
        }
      }
      else if (this.o554) {
        if (index < 0x2000) {
          this.o428[index] = this.o935;
        }
        else if (index < 0x4000) {
          this.o428[index] = this.o941;
        }
        else if (index < 0x6000) {
          this.o428[index] = this.o948;
        }
        else {
          this.o428[index] = this.o940;
        }
      }
      else {
        this.o428[index] = this.o940;
      }
    }
    else if (index < 0x9000) {
      this.o428[index] = (this.o437) ? this.o949 : this.o950;
    }
    else if (index < 0x9800) {
      this.o428[index] = (this.o437) ? this.o949 : this.o951;
    }
    else if (index < 0xA000) {
      this.o428[index] = (this.o437) ? this.o952 : this.o953;
    }
    else if (index < 0xC000) {
      if ((this.o558 == 1 / 16 && index < 0xA200) || this.o558 >= 1) {
        if (!this.o546) {
          this.o428[index] = this.o954;
        }
        else {
          //MBC3 RTC + RAM:
          this.o428[index] = this.o955;
        }
      }
      else {
        this.o428[index] = this.o940;
      }
    }
    else if (index < 0xE000) {
      if (this.o437 && index >= 0xD000) {
        this.o428[index] = this.o956;
      }
      else {
        this.o428[index] = this.o957;
      }
    }
    else if (index < 0xFE00) {
      if (this.o437 && index >= 0xF000) {
        this.o428[index] = this.o958;
      }
      else {
        this.o428[index] = this.o959;
      }
    }
    else if (index <= 0xFEA0) {
      this.o428[index] = this.o960;
    }
    else if (index < 0xFF00) {
      if (this.o437) {                      //Only GBC has access to this RAM.
        this.o428[index] = this.o957;
      }
      else {
        this.o428[index] = this.o940;
      }
    }
    else {
      //Start the I/O initialization by filling in the slots as normal memory:
      this.o428[index] = this.o957;
      this.o430[index & 0xFF] = this.o961;
    }
  }
  this.o962();        //Compile the I/O write functions separately...
}
o397.prototype.o935 = function (o458, o806, o85) {"use strict";
  //MBC RAM Bank Enable/Disable:
  o458.o434 = ((o85 & 0x0F) == 0x0A);  //If lower nibble is 0x0A, then enable, otherwise disable.
}
o397.prototype.o936 = function (o458, o806, o85) {"use strict";
  //MBC1 ROM bank switching:
  o458.o442 = (o458.o442 & 0x60) | (o85 & 0x1F);
  o458.o932();
}
o397.prototype.o937 = function (o458, o806, o85) {"use strict";
  //MBC1 RAM bank switching
  if (o458.o433) {
    //4/32 Mode
    o458.o435 = o85 & 0x03;
    o458.o436 = (o458.o435 << 13) - 0xA000;
  }
  else {
    //16/8 Mode
    o458.o442 = ((o85 & 0x03) << 5) | (o458.o442 & 0x1F);
    o458.o932();
  }
}
o397.prototype.o938 = function (o458, o806, o85) {"use strict";
  //MBC1 mode setting:
  o458.o433 = ((o85 & 0x1) == 0x1);
  if (o458.o433) {
    o458.o442 &= 0x1F;
    o458.o932();
  }
  else {
    o458.o435 = 0;
    o458.o436 = -0xA000;
  }
}
o397.prototype.o939 = function (o458, o806, o85) {"use strict";
  //MBC2 ROM bank switching:
  o458.o442 = o85 & 0x0F;
  o458.o933();
}
o397.prototype.o941 = function (o458, o806, o85) {"use strict";
  //MBC3 ROM bank switching:
  o458.o442 = o85 & 0x7F;
  o458.o933();
}
o397.prototype.o942 = function (o458, o806, o85) {"use strict";
  o458.o435 = o85;
  if (o85 < 4) {
    //MBC3 RAM bank switching
    o458.o436 = (o458.o435 << 13) - 0xA000;
  }
}
o397.prototype.o943 = function (o458, o806, o85) {"use strict";
  if (o85 == 0) {
    o458.o461 = false;
  }
  else if (!o458.o461) {
    //Copy over the current RTC time for reading.
    o458.o461 = true;
    o458.o462 = o458.o467 | 0;
    o458.o463 = o458.o468;
    o458.o464 = o458.o469;
    o458.o465 = (o458.o470 & 0xFF);
    o458.o466 = o458.o470 >> 8;
  }
}
o397.prototype.o944 = function (o458, o806, o85) {"use strict";
  //MBC5 ROM bank switching:
  o458.o442 = (o458.o442 & 0x100) | o85;
  o458.o934();
}
o397.prototype.o945 = function (o458, o806, o85) {"use strict";
  //MBC5 ROM bank switching (by least significant bit):
  o458.o442  = ((o85 & 0x01) << 8) | (o458.o442 & 0xFF);
  o458.o934();
}
o397.prototype.o947 = function (o458, o806, o85) {"use strict";
  //MBC5 RAM bank switching
  o458.o435 = o85 & 0xF;
  o458.o436 = (o458.o435 << 13) - 0xA000;
}
o397.prototype.o946 = function (o458, o806, o85) {"use strict";
  //MBC5 RAM bank switching
  //Like MBC5, but bit 3 of the lower nibble is used for rumbling and bit 2 is ignored.
  o458.o435 = o85 & 0x03;
  o458.o436 = (o458.o435 << 13) - 0xA000;
}
o397.prototype.o948 = function (o458, o806, o85) {"use strict";
  //HuC3 RAM bank switching
  o458.o435 = o85 & 0x03;
  o458.o436 = (o458.o435 << 13) - 0xA000;
}
o397.prototype.o940 = function (o458, o806, o85) {"use strict";
  //We might have encountered illegal RAM writing or such, so just do nothing...
}
o397.prototype.o957 = function (o458, o806, o85) {"use strict";
  o458.o175[o806] = o85;
}
o397.prototype.o961 = function (o458, o806, o85) {"use strict";
  o458.o175[0xFF00 | o806] = o85;
}
o397.prototype.o954 = function (o458, o806, o85) {"use strict";
  if (o458.o434 || o720[10]) {
    o458.o177[o806 + o458.o436] = o85;
  }
}
o397.prototype.o955 = function (o458, o806, o85) {"use strict";
  if (o458.o434 || o720[10]) {
    switch (o458.o435) {
      case 0x00:
      case 0x01:
      case 0x02:
      case 0x03:
        o458.o177[o806 + o458.o436] = o85;
        break;
      case 0x08:
        if (o85 < 60) {
          o458.o467 = o85;
        }
        else {
          o133("(Bank #" + o458.o435 + ") RTC write out of range: " + o85, 1);
        }
        break;
      case 0x09:
        if (o85 < 60) {
          o458.o468 = o85;
        }
        else {
          o133("(Bank #" + o458.o435 + ") RTC write out of range: " + o85, 1);
        }
        break;
      case 0x0A:
        if (o85 < 24) {
          o458.o469 = o85;
        }
        else {
          o133("(Bank #" + o458.o435 + ") RTC write out of range: " + o85, 1);
        }
        break;
      case 0x0B:
        o458.o470 = (o85 & 0xFF) | (o458.o470 & 0x100);
        break;
      case 0x0C:
        o458.o471 = (o85 > 0x7F);
        o458.o963 = (o85 & 0x40) == 0x40;
        o458.o470 = ((o85 & 0x1) << 8) | (o458.o470 & 0xFF);
        break;
      default:
        o133("Invalid MBC3 bank address selected: " + o458.o435, 0);
    }
  }
}
o397.prototype.o956 = function (o458, o806, o85) {"use strict";
  o458.o432[o806 + o458.o439] = o85;
}
o397.prototype.o960 = function (o458, o806, o85) {"use strict";
  if (o458.o449 < 2) {    //OAM RAM cannot be written to in mode 2 & 3
    if (o458.o175[o806] != o85) {
      o458.o911();
      o458.o175[o806] = o85;
    }
  }
}
o397.prototype.o958 = function (o458, o806, o85) {"use strict";
  o458.o432[o806 + o458.o440] = o85;
}
o397.prototype.o959 = function (o458, o806, o85) {"use strict";
  o458.o175[o806 - 0x2000] = o85;
}
o397.prototype.o950 = function (o458, o806, o85) {"use strict";
  if (o458.o449 < 3) {  //VRAM cannot be written to during mode 3
    if (o458.o175[o806] != o85) {
      //JIT the graphics render queue:
      o458.o911();
      o458.o175[o806] = o85;
      o458.o866(o806);
    }
  }
}
o397.prototype.o951 = function (o458, o806, o85) {"use strict";
  if (o458.o449 < 3) {  //VRAM cannot be written to during mode 3
    if (o458.o175[o806] != o85) {
      //JIT the graphics render queue:
      o458.o911();
      o458.o175[o806] = o85;
      o458.o867(o806);
    }
  }
}
o397.prototype.o949 = function (o458, o806, o85) {"use strict";
  if (o458.o449 < 3) {  //VRAM cannot be written to during mode 3
    if (o458.o559 == 0) {
      if (o458.o175[o806] != o85) {
        //JIT the graphics render queue:
        o458.o911();
        o458.o175[o806] = o85;
        o458.o903(o806);
      }
    }
    else {
      o806 &= 0x1FFF;
      if (o458.o431[o806] != o85) {
        //JIT the graphics render queue:
        o458.o911();
        o458.o431[o806] = o85;
        o458.o910(o806);
      }
    }
  }
}
o397.prototype.o953 = function (o458, o806, o85) {"use strict";
  if (o458.o449 < 3) {  //VRAM cannot be written to during mode 3
    o806 &= 0x7FF;
    if (o458.o577[o806] != o85) {
      //JIT the graphics render queue:
      o458.o911();
      o458.o577[o806] = o85;
    }
  }
}
o397.prototype.o952 = function (o458, o806, o85) {"use strict";
  if (o458.o449 < 3) {  //VRAM cannot be written to during mode 3
    o806 &= 0x7FF;
    if (o458.o579[o806] != o85) {
      //JIT the graphics render queue:
      o458.o911();
      o458.o579[o806] = o85;
    }
  }
}
o397.prototype.o833 = function (o964) {"use strict";
  if (!this.o415) {
    //Clock the CPU for the DMA transfer (CPU is halted during the transfer):
    this.o423 += 4 | ((o964 << 5) << this.o424);
  }
  //Source address of the transfer:
  var source = (this.o175[0xFF51] << 8) | this.o175[0xFF52];
  //Destination address in the VRAM memory range:
  var o146 = (this.o175[0xFF53] << 8) | this.o175[0xFF54];
  //Creating some references:
  var o427 = this.o427;
  //JIT the graphics render queue:
  this.o911();
  var o175 = this.o175;
  //Determining which bank we're working on so we can optimize:
  if (this.o559 == 0) {
    //DMA transfer for VRAM bank 0:
    do {
      if (o146 < 0x1800) {
        o175[0x8000 | o146] = o427[source](this, source++);
        o175[0x8001 | o146] = o427[source](this, source++);
        o175[0x8002 | o146] = o427[source](this, source++);
        o175[0x8003 | o146] = o427[source](this, source++);
        o175[0x8004 | o146] = o427[source](this, source++);
        o175[0x8005 | o146] = o427[source](this, source++);
        o175[0x8006 | o146] = o427[source](this, source++);
        o175[0x8007 | o146] = o427[source](this, source++);
        o175[0x8008 | o146] = o427[source](this, source++);
        o175[0x8009 | o146] = o427[source](this, source++);
        o175[0x800A | o146] = o427[source](this, source++);
        o175[0x800B | o146] = o427[source](this, source++);
        o175[0x800C | o146] = o427[source](this, source++);
        o175[0x800D | o146] = o427[source](this, source++);
        o175[0x800E | o146] = o427[source](this, source++);
        o175[0x800F | o146] = o427[source](this, source++);
        this.o868(o146);
        o146 += 0x10;
      }
      else {
        o146 &= 0x7F0;
        this.o577[o146++] = o427[source](this, source++);
        this.o577[o146++] = o427[source](this, source++);
        this.o577[o146++] = o427[source](this, source++);
        this.o577[o146++] = o427[source](this, source++);
        this.o577[o146++] = o427[source](this, source++);
        this.o577[o146++] = o427[source](this, source++);
        this.o577[o146++] = o427[source](this, source++);
        this.o577[o146++] = o427[source](this, source++);
        this.o577[o146++] = o427[source](this, source++);
        this.o577[o146++] = o427[source](this, source++);
        this.o577[o146++] = o427[source](this, source++);
        this.o577[o146++] = o427[source](this, source++);
        this.o577[o146++] = o427[source](this, source++);
        this.o577[o146++] = o427[source](this, source++);
        this.o577[o146++] = o427[source](this, source++);
        this.o577[o146++] = o427[source](this, source++);
        o146 = (o146 + 0x1800) & 0x1FF0;
      }
      source &= 0xFFF0;
      --o964;
    } while (o964 > 0);
  }
  else {
    var o431 = this.o431;
    //DMA transfer for VRAM bank 1:
    do {
      if (o146 < 0x1800) {
        o431[o146] = o427[source](this, source++);
        o431[o146 | 0x1] = o427[source](this, source++);
        o431[o146 | 0x2] = o427[source](this, source++);
        o431[o146 | 0x3] = o427[source](this, source++);
        o431[o146 | 0x4] = o427[source](this, source++);
        o431[o146 | 0x5] = o427[source](this, source++);
        o431[o146 | 0x6] = o427[source](this, source++);
        o431[o146 | 0x7] = o427[source](this, source++);
        o431[o146 | 0x8] = o427[source](this, source++);
        o431[o146 | 0x9] = o427[source](this, source++);
        o431[o146 | 0xA] = o427[source](this, source++);
        o431[o146 | 0xB] = o427[source](this, source++);
        o431[o146 | 0xC] = o427[source](this, source++);
        o431[o146 | 0xD] = o427[source](this, source++);
        o431[o146 | 0xE] = o427[source](this, source++);
        o431[o146 | 0xF] = o427[source](this, source++);
        this.o869(o146);
        o146 += 0x10;
      }
      else {
        o146 &= 0x7F0;
        this.o578[o146++] = o427[source](this, source++);
        this.o578[o146++] = o427[source](this, source++);
        this.o578[o146++] = o427[source](this, source++);
        this.o578[o146++] = o427[source](this, source++);
        this.o578[o146++] = o427[source](this, source++);
        this.o578[o146++] = o427[source](this, source++);
        this.o578[o146++] = o427[source](this, source++);
        this.o578[o146++] = o427[source](this, source++);
        this.o578[o146++] = o427[source](this, source++);
        this.o578[o146++] = o427[source](this, source++);
        this.o578[o146++] = o427[source](this, source++);
        this.o578[o146++] = o427[source](this, source++);
        this.o578[o146++] = o427[source](this, source++);
        this.o578[o146++] = o427[source](this, source++);
        this.o578[o146++] = o427[source](this, source++);
        this.o578[o146++] = o427[source](this, source++);
        o146 = (o146 + 0x1800) & 0x1FF0;
      }
      source &= 0xFFF0;
      --o964;
    } while (o964 > 0);
  }
  //Update the HDMA registers to their next addresses:
  o175[0xFF51] = source >> 8;
  o175[0xFF52] = source & 0xF0;
  o175[0xFF53] = o146 >> 8;
  o175[0xFF54] = o146 & 0xF0;
}
o397.prototype.o962 = function () {"use strict";
  //I/O Registers (GB + GBC):
  //JoyPad
  this.o430[0] = this.o428[0xFF00] = function (o458, o806, o85) {"use strict";
    o458.o175[0xFF00] = (o85 & 0x30) | ((((o85 & 0x20) == 0) ? (o458.o425 >> 4) : 0xF) & (((o85 & 0x10) == 0) ? (o458.o425 & 0xF) : 0xF));
  }
  //SB (Serial Transfer Data)
  this.o430[0x1] = this.o428[0xFF01] = function (o458, o806, o85) {"use strict";
    if (o458.o175[0xFF02] < 0x80) {  //Cannot write while a serial transfer is active.
      o458.o175[0xFF01] = o85;
    }
  }
  //DIV
  this.o430[0x4] = this.o428[0xFF04] = function (o458, o806, o85) {"use strict";
    o458.o526 &= 0xFF;  //Update DIV for realignment.
    o458.o175[0xFF04] = 0;
  }
  //TIMA
  this.o430[0x5] = this.o428[0xFF05] = function (o458, o806, o85) {"use strict";
    o458.o175[0xFF05] = o85;
  }
  //TMA
  this.o430[0x6] = this.o428[0xFF06] = function (o458, o806, o85) {"use strict";
    o458.o175[0xFF06] = o85;
  }
  //TAC
  this.o430[0x7] = this.o428[0xFF07] = function (o458, o806, o85) {"use strict";
    o458.o175[0xFF07] = o85 & 0x07;
    o458.o529 = (o85 & 0x04) == 0x04;
    o458.o530 = Math.o66(4, ((o85 & 0x3) != 0) ? (o85 & 0x3) : 4) << 2;  //TODO: Find a way to not make a conditional in here...
  }
  //IF (Interrupt Request)
  this.o430[0xF] = this.o428[0xFF0F] = function (o458, o806, o85) {"use strict";
    o458.o420 = o85;
    o458.o701();
  }
  this.o430[0x10] = this.o428[0xFF10] = function (o458, o806, o85) {"use strict";
    if (o458.o487) {
      o458.o784();
      if (o458.o656 && (o85 & 0x08) == 0) {
        if (o458.o654 != o458.o655) {
          o458.o650 = true;
        }
      }
      o458.o653 = (o85 & 0x70) >> 4;
      o458.o655 = o85 & 0x07;
      o458.o656 = ((o85 & 0x08) == 0x08);
      o458.o175[0xFF10] = o85;
      o458.o788();
    }
  }
  this.o430[0x11] = this.o428[0xFF11] = function (o458, o806, o85) {"use strict";
    if (o458.o487 || !o458.o437) {
      if (o458.o487) {
        o458.o784();
      }
      else {
        o85 &= 0x3F;
      }
      o458.o682 = o458.o480[o85 >> 6];
      o458.o643 = 0x40 - (o85 & 0x3F);
      o458.o175[0xFF11] = o85 & 0xC0;
      o458.o788();
    }
  }
  this.o430[0x12] = this.o428[0xFF12] = function (o458, o806, o85) {"use strict";
    if (o458.o487) {
      o458.o784();
      if (o458.o685 && o458.o646 == 0) {
        //Zombie Volume PAPU Bug:
        if (((o458.o175[0xFF12] ^ o85) & 0x8) == 0x8) {
          if ((o458.o175[0xFF12] & 0x8) == 0) {
            if ((o458.o175[0xFF12] & 0x7) == 0x7) {
              o458.o644 += 2;
            }
            else {
              ++o458.o644;
            }
          }
          o458.o644 = (16 - o458.o644) & 0xF;
        }
        else if ((o458.o175[0xFF12] & 0xF) == 0x8) {
          o458.o644 = (1 + o458.o644) & 0xF;
        }
        o458.o765();
      }
      o458.o645 = ((o85 & 0x08) == 0x08);
      o458.o175[0xFF12] = o85;
      o458.o798();
    }
  }
  this.o430[0x13] = this.o428[0xFF13] = function (o458, o806, o85) {"use strict";
    if (o458.o487) {
      o458.o784();
      o458.o649 = (o458.o649 & 0x700) | o85;
      o458.o641 = (0x800 - o458.o649) << 2;
      o458.o175[0xFF13] = o85;
    }
  }
  this.o430[0x14] = this.o428[0xFF14] = function (o458, o806, o85) {"use strict";
    if (o458.o487) {
      o458.o784();
      o458.o648 = ((o85 & 0x40) == 0x0);
      o458.o649 = ((o85 & 0x7) << 8) | (o458.o649 & 0xFF);
      o458.o641 = (0x800 - o458.o649) << 2;
      if (o85 > 0x7F) {
        //Reload 0xFF10:
        o458.o652 = o458.o653;
        o458.o654 = o458.o655;
        //Reload 0xFF12:
        var o966 = o458.o175[0xFF12];
        o458.o644 = o966 >> 4;
        o458.o765();
        o458.o647 = (o966 & 0x7) - 1;
        if (o458.o643 == 0) {
          o458.o643 = 0x40;
        }
        if (o458.o653 > 0 || o458.o655 > 0) {
          o458.o175[0xFF26] |= 0x1;
        }
        else {
          o458.o175[0xFF26] &= 0xFE;
        }
        if ((o85 & 0x40) == 0x40) {
          o458.o175[0xFF26] |= 0x1;
        }
        o458.o651 = o458.o649;
        //Reset frequency overflow check + frequency sweep type check:
        o458.o650 = false;
        //Supposed to run immediately:
        o458.o792();
      }
      o458.o788();
      o458.o175[0xFF14] = o85 & 0x40;
    }
  }
  this.o430[0x16] = this.o428[0xFF16] = function (o458, o806, o85) {"use strict";
    if (o458.o487 || !o458.o437) {
      if (o458.o487) {
        o458.o784();
      }
      else {
        o85 &= 0x3F;
      }
      o458.o684 = o458.o480[o85 >> 6];
      o458.o659 = 0x40 - (o85 & 0x3F);
      o458.o175[0xFF16] = o85 & 0xC0;
      o458.o789();
    }
  }
  this.o430[0x17] = this.o428[0xFF17] = function (o458, o806, o85) {"use strict";
    if (o458.o487) {
      o458.o784();
      if (o458.o686 && o458.o662 == 0) {
        //Zombie Volume PAPU Bug:
        if (((o458.o175[0xFF17] ^ o85) & 0x8) == 0x8) {
          if ((o458.o175[0xFF17] & 0x8) == 0) {
            if ((o458.o175[0xFF17] & 0x7) == 0x7) {
              o458.o660 += 2;
            }
            else {
              ++o458.o660;
            }
          }
          o458.o660 = (16 - o458.o660) & 0xF;
        }
        else if ((o458.o175[0xFF17] & 0xF) == 0x8) {
          o458.o660 = (1 + o458.o660) & 0xF;
        }
        o458.o766();
      }
      o458.o661 = ((o85 & 0x08) == 0x08);
      o458.o175[0xFF17] = o85;
      o458.o801();
    }
  }
  this.o430[0x18] = this.o428[0xFF18] = function (o458, o806, o85) {"use strict";
    if (o458.o487) {
      o458.o784();
      o458.o665 = (o458.o665 & 0x700) | o85;
      o458.o657 = (0x800 - o458.o665) << 2;
      o458.o175[0xFF18] = o85;
    }
  }
  this.o430[0x19] = this.o428[0xFF19] = function (o458, o806, o85) {"use strict";
    if (o458.o487) {
      o458.o784();
      if (o85 > 0x7F) {
        //Reload 0xFF17:
        var o967 = o458.o175[0xFF17];
        o458.o660 = o967 >> 4;
        o458.o766();
        o458.o663 = (o967 & 0x7) - 1;
        if (o458.o659 == 0) {
          o458.o659 = 0x40;
        }
        if ((o85 & 0x40) == 0x40) {
          o458.o175[0xFF26] |= 0x2;
        }
      }
      o458.o664 = ((o85 & 0x40) == 0x0);
      o458.o665 = ((o85 & 0x7) << 8) | (o458.o665 & 0xFF);
      o458.o657 = (0x800 - o458.o665) << 2;
      o458.o175[0xFF19] = o85 & 0x40;
      o458.o789();
    }
  }
  this.o430[0x1A] = this.o428[0xFF1A] = function (o458, o806, o85) {"use strict";
    if (o458.o487) {
      o458.o784();
      if (!o458.o666 && o85 >= 0x80) {
        o458.o696 = 0;
        o458.o796();
      }
      o458.o666 = (o85 > 0x7F);
      if (o458.o666 && o458.o175[0xFF1A] > 0x7F && !o458.o670) {
        o458.o175[0xFF26] |= 0x4;
      }
      o458.o175[0xFF1A] = o85 & 0x80;
      //parentObj.channel3EnableCheck();
    }
  }
  this.o430[0x1B] = this.o428[0xFF1B] = function (o458, o806, o85) {"use strict";
    if (o458.o487 || !o458.o437) {
      if (o458.o487) {
        o458.o784();
      }
      o458.o667 = 0x100 - o85;
      o458.o175[0xFF1B] = o85;
      o458.o790();
    }
  }
  this.o430[0x1C] = this.o428[0xFF1C] = function (o458, o806, o85) {"use strict";
    if (o458.o487) {
      o458.o784();
      o85 &= 0x60;
      o458.o175[0xFF1C] = o85;
      o458.o668 = (o85 == 0) ? 4 : ((o85 >> 5) - 1);
    }
  }
  this.o430[0x1D] = this.o428[0xFF1D] = function (o458, o806, o85) {"use strict";
    if (o458.o487) {
      o458.o784();
      o458.o669 = (o458.o669 & 0x700) | o85;
      o458.o695 = (0x800 - o458.o669) << 1;
      o458.o175[0xFF1D] = o85;
    }
  }
  this.o430[0x1E] = this.o428[0xFF1E] = function (o458, o806, o85) {"use strict";
    if (o458.o487) {
      o458.o784();
      if (o85 > 0x7F) {
        if (o458.o667 == 0) {
          o458.o667 = 0x100;
        }
        o458.o696 = 0;
        if ((o85 & 0x40) == 0x40) {
          o458.o175[0xFF26] |= 0x4;
        }
      }
      o458.o670 = ((o85 & 0x40) == 0x0);
      o458.o669 = ((o85 & 0x7) << 8) | (o458.o669 & 0xFF);
      o458.o695 = (0x800 - o458.o669) << 1;
      o458.o175[0xFF1E] = o85 & 0x40;
      o458.o790();
    }
  }
  this.o430[0x20] = this.o428[0xFF20] = function (o458, o806, o85) {"use strict";
    if (o458.o487 || !o458.o437) {
      if (o458.o487) {
        o458.o784();
      }
      o458.o673 = 0x40 - (o85 & 0x3F);
      o458.o175[0xFF20] = o85 | 0xC0;
      o458.o791();
    }
  }
  this.o430[0x21] = this.o428[0xFF21] = function (o458, o806, o85) {"use strict";
    if (o458.o487) {
      o458.o784();
      if (o458.o688 && o458.o677 == 0) {
        //Zombie Volume PAPU Bug:
        if (((o458.o175[0xFF21] ^ o85) & 0x8) == 0x8) {
          if ((o458.o175[0xFF21] & 0x8) == 0) {
            if ((o458.o175[0xFF21] & 0x7) == 0x7) {
              o458.o674 += 2;
            }
            else {
              ++o458.o674;
            }
          }
          o458.o674 = (16 - o458.o674) & 0xF;
        }
        else if ((o458.o175[0xFF21] & 0xF) == 0x8) {
          o458.o674 = (1 + o458.o674) & 0xF;
        }
        o458.o675 = o458.o674 << o458.o707;
      }
      o458.o676 = ((o85 & 0x08) == 0x08);
      o458.o175[0xFF21] = o85;
      o458.o793();
      o458.o804();
    }
  }
  this.o430[0x22] = this.o428[0xFF22] = function (o458, o806, o85) {"use strict";
    if (o458.o487) {
      o458.o784();
      o458.o671 = Math.o324((o85 & 0x7) << 4, 8) << (o85 >> 4);
      var o968 = (o85 & 0x8);
      if ((o968 == 0x8 && o458.o680 == 0x7FFF) || (o968 == 0 && o458.o680 == 0x7F)) {
        o458.o672 = 0;
        o458.o680 = (o968 == 0x8) ? 0x7F : 0x7FFF;
        o458.o707 = (o968 == 0x8) ? 7 : 15;
        o458.o675 = o458.o674 << o458.o707;
        o458.o485 = (o968 == 0x8) ? o458.o484 : o458.o483;
      }
      o458.o175[0xFF22] = o85;
      o458.o793();
    }
  }
  this.o430[0x23] = this.o428[0xFF23] = function (o458, o806, o85) {"use strict";
    if (o458.o487) {
      o458.o784();
      o458.o175[0xFF23] = o85;
      o458.o679 = ((o85 & 0x40) == 0x0);
      if (o85 > 0x7F) {
        var o969 = o458.o175[0xFF21];
        o458.o674 = o969 >> 4;
        o458.o675 = o458.o674 << o458.o707;
        o458.o678 = (o969 & 0x7) - 1;
        if (o458.o673 == 0) {
          o458.o673 = 0x40;
        }
        if ((o85 & 0x40) == 0x40) {
          o458.o175[0xFF26] |= 0x8;
        }
      }
      o458.o791();
    }
  }
  this.o430[0x24] = this.o428[0xFF24] = function (o458, o806, o85) {"use strict";
    if (o458.o487 && o458.o175[0xFF24] != o85) {
      o458.o784();
      o458.o175[0xFF24] = o85;
      o458.o489 = ((o85 >> 4) & 0x07) + 1;
      o458.o490 = (o85 & 0x07) + 1;
      o458.o799();
    }
  }
  this.o430[0x25] = this.o428[0xFF25] = function (o458, o806, o85) {"use strict";
    if (o458.o487 && o458.o175[0xFF25] != o85) {
      o458.o784();
      o458.o175[0xFF25] = o85;
      o458.o495 = ((o85 & 0x01) == 0x01);
      o458.o496 = ((o85 & 0x02) == 0x02);
      o458.o497 = ((o85 & 0x04) == 0x04);
      o458.o498 = ((o85 & 0x08) == 0x08);
      o458.o491 = ((o85 & 0x10) == 0x10);
      o458.o492 = ((o85 & 0x20) == 0x20);
      o458.o493 = ((o85 & 0x40) == 0x40);
      o458.o494 = (o85 > 0x7F);
      o458.o765();
      o458.o766();
      o458.o767();
      o458.o768();
    }
  }
  this.o430[0x26] = this.o428[0xFF26] = function (o458, o806, o85) {"use strict";
    o458.o784();
    if (!o458.o487 && o85 > 0x7F) {
      o458.o175[0xFF26] = 0x80;
      o458.o487 = true;
      o458.o486();
    }
    else if (o458.o487 && o85 < 0x80) {
      o458.o175[0xFF26] = 0;
      o458.o487 = false;
      //GBDev wiki says the registers are written with zeros on power off:
      for (var index = 0xFF10; index < 0xFF26; index++) {
        o458.o428[index](o458, index, 0);
      }
    }
  }
  //0xFF27 to 0xFF2F don't do anything...
  this.o430[0x27] = this.o428[0xFF27] = this.o940;
  this.o430[0x28] = this.o428[0xFF28] = this.o940;
  this.o430[0x29] = this.o428[0xFF29] = this.o940;
  this.o430[0x2A] = this.o428[0xFF2A] = this.o940;
  this.o430[0x2B] = this.o428[0xFF2B] = this.o940;
  this.o430[0x2C] = this.o428[0xFF2C] = this.o940;
  this.o430[0x2D] = this.o428[0xFF2D] = this.o940;
  this.o430[0x2E] = this.o428[0xFF2E] = this.o940;
  this.o430[0x2F] = this.o428[0xFF2F] = this.o940;
  //WAVE PCM RAM:
  this.o430[0x30] = this.o428[0xFF30] = function (o458, o806, o85) {"use strict";
    o458.o805(0, o85);
  }
  this.o430[0x31] = this.o428[0xFF31] = function (o458, o806, o85) {"use strict";
    o458.o805(0x1, o85);
  }
  this.o430[0x32] = this.o428[0xFF32] = function (o458, o806, o85) {"use strict";
    o458.o805(0x2, o85);
  }
  this.o430[0x33] = this.o428[0xFF33] = function (o458, o806, o85) {"use strict";
    o458.o805(0x3, o85);
  }
  this.o430[0x34] = this.o428[0xFF34] = function (o458, o806, o85) {"use strict";
    o458.o805(0x4, o85);
  }
  this.o430[0x35] = this.o428[0xFF35] = function (o458, o806, o85) {"use strict";
    o458.o805(0x5, o85);
  }
  this.o430[0x36] = this.o428[0xFF36] = function (o458, o806, o85) {"use strict";
    o458.o805(0x6, o85);
  }
  this.o430[0x37] = this.o428[0xFF37] = function (o458, o806, o85) {"use strict";
    o458.o805(0x7, o85);
  }
  this.o430[0x38] = this.o428[0xFF38] = function (o458, o806, o85) {"use strict";
    o458.o805(0x8, o85);
  }
  this.o430[0x39] = this.o428[0xFF39] = function (o458, o806, o85) {"use strict";
    o458.o805(0x9, o85);
  }
  this.o430[0x3A] = this.o428[0xFF3A] = function (o458, o806, o85) {"use strict";
    o458.o805(0xA, o85);
  }
  this.o430[0x3B] = this.o428[0xFF3B] = function (o458, o806, o85) {"use strict";
    o458.o805(0xB, o85);
  }
  this.o430[0x3C] = this.o428[0xFF3C] = function (o458, o806, o85) {"use strict";
    o458.o805(0xC, o85);
  }
  this.o430[0x3D] = this.o428[0xFF3D] = function (o458, o806, o85) {"use strict";
    o458.o805(0xD, o85);
  }
  this.o430[0x3E] = this.o428[0xFF3E] = function (o458, o806, o85) {"use strict";
    o458.o805(0xE, o85);
  }
  this.o430[0x3F] = this.o428[0xFF3F] = function (o458, o806, o85) {"use strict";
    o458.o805(0xF, o85);
  }
  //SCY
  this.o430[0x42] = this.o428[0xFF42] = function (o458, o806, o85) {"use strict";
    if (o458.o561 != o85) {
      o458.o877();
      o458.o561 = o85;
    }
  }
  //SCX
  this.o430[0x43] = this.o428[0xFF43] = function (o458, o806, o85) {"use strict";
    if (o458.o560 != o85) {
      o458.o877();
      o458.o560 = o85;
    }
  }
  //LY
  this.o430[0x44] = this.o428[0xFF44] = function (o458, o806, o85) {"use strict";
    //Read Only:
    if (o458.o455) {
      //Gambatte says to do this:
      o458.o449 = 2;
      o458.o574 = -1;
      o458.o542 = o458.o576 = o458.o541 = o458.o540 = o458.o527 = o458.o448 = o458.o539 = o458.o175[0xFF44] = 0;
    }
  }
  //LYC
  this.o430[0x45] = this.o428[0xFF45] = function (o458, o806, o85) {"use strict";
    if (o458.o175[0xFF45] != o85) {
      o458.o175[0xFF45] = o85;
      if (o458.o455) {
        o458.o827();  //Get the compare of the first scan line.
      }
    }
  }
  //WY
  this.o430[0x4A] = this.o428[0xFF4A] = function (o458, o806, o85) {"use strict";
    if (o458.o570 != o85) {
      o458.o877();
      o458.o570 = o85;
    }
  }
  //WX
  this.o430[0x4B] = this.o428[0xFF4B] = function (o458, o806, o85) {"use strict";
    if (o458.o175[0xFF4B] != o85) {
      o458.o877();
      o458.o175[0xFF4B] = o85;
      o458.o571 = o85 - 7;
    }
  }
  this.o430[0x72] = this.o428[0xFF72] = function (o458, o806, o85) {"use strict";
    o458.o175[0xFF72] = o85;
  }
  this.o430[0x73] = this.o428[0xFF73] = function (o458, o806, o85) {"use strict";
    o458.o175[0xFF73] = o85;
  }
  this.o430[0x75] = this.o428[0xFF75] = function (o458, o806, o85) {"use strict";
    o458.o175[0xFF75] = o85;
  }
  this.o430[0x76] = this.o428[0xFF76] = this.o940;
  this.o430[0x77] = this.o428[0xFF77] = this.o940;
  //IE (Interrupt Enable)
  this.o430[0xFF] = this.o428[0xFFFF] = function (o458, o806, o85) {"use strict";
    o458.o421 = o85;
    o458.o701();
  }
  this.o970();
  this.o733();
}
o397.prototype.o970 = function () {"use strict";
  if (this.o437) {
    //GameBoy Color Specific I/O:
    //SC (Serial Transfer Control Register)
    this.o430[0x2] = this.o428[0xFF02] = function (o458, o806, o85) {"use strict";
      if (((o85 & 0x1) == 0x1)) {
        //Internal clock:
        o458.o175[0xFF02] = (o85 & 0x7F);
        o458.o531 = ((o85 & 0x2) == 0) ? 4096 : 128;  //Set the Serial IRQ counter.
        o458.o532 = o458.o533 = ((o85 & 0x2) == 0) ? 512 : 16;  //Set the transfer data shift counter.
      }
      else {
        //External clock:
        o458.o175[0xFF02] = o85;
        o458.o532 = o458.o533 = o458.o531 = 0;  //Zero the timers, since we're emulating as if nothing is connected.
      }
    }
    this.o430[0x40] = this.o428[0xFF40] = function (o458, o806, o85) {"use strict";
      if (o458.o175[0xFF40] != o85) {
        o458.o877();
        var o618 = (o85 > 0x7F);
        if (o618 != o458.o455) {
          //When the display mode changes...
          o458.o455 = o618;
          o458.o175[0xFF41] &= 0x78;
          o458.o574 = -1;
          o458.o542 = o458.o576 = o458.o541 = o458.o540 = o458.o448 = o458.o527 = o458.o539 = o458.o175[0xFF44] = 0;
          if (o458.o455) {
            o458.o449 = 2;
            o458.o827();  //Get the compare of the first scan line.
            o458.o459 = o458.o456;
          }
          else {
            o458.o449 = 0;
            o458.o459 = o458.o457;
            o458.o831();
          }
          o458.o420 &= 0xFD;
        }
        o458.o567 = ((o85 & 0x40) == 0x40) ? 0x400 : 0;
        o458.o562 = ((o85 & 0x20) == 0x20);
        o458.o569 = ((o85 & 0x10) == 0x10) ? 0 : 0x80;
        o458.o568 = ((o85 & 0x08) == 0x08) ? 0x400 : 0;
        o458.o564 = ((o85 & 0x04) == 0);
        o458.o563 = ((o85 & 0x02) == 0x02);
        o458.o566 = ((o85 & 0x01) == 0x01);
        o458.o857();  //Special case the priority flagging as an optimization.
        o458.o175[0xFF40] = o85;
      }
    }
    this.o430[0x41] = this.o428[0xFF41] = function (o458, o806, o85) {"use strict";
      o458.o451 = ((o85 & 0x40) == 0x40);
      o458.o452 = ((o85 & 0x20) == 0x20);
      o458.o453 = ((o85 & 0x10) == 0x10);
      o458.o454 = ((o85 & 0x08) == 0x08);
      o458.o175[0xFF41] = o85 & 0x78;
    }
    this.o430[0x46] = this.o428[0xFF46] = function (o458, o806, o85) {"use strict";
      o458.o175[0xFF46] = o85;
      if (o85 < 0xE0) {
        o85 <<= 8;
        o806 = 0xFE00;
        var o971 = o458.o449;
        o458.o449 = 0;
        var o972 = 0;
        do {
          o972 = o458.o427[o85](o458, o85++);
          if (o972 != o458.o175[o806]) {
            //JIT the graphics render queue:
            o458.o449 = o971;
            o458.o911();
            o458.o449 = 0;
            o458.o175[o806++] = o972;
            break;
          }
        } while (++o806 < 0xFEA0);
        if (o806 < 0xFEA0) {
          do {
            o458.o175[o806++] = o458.o427[o85](o458, o85++);
            o458.o175[o806++] = o458.o427[o85](o458, o85++);
            o458.o175[o806++] = o458.o427[o85](o458, o85++);
            o458.o175[o806++] = o458.o427[o85](o458, o85++);
          } while (o806 < 0xFEA0);
        }
        o458.o449 = o971;
      }
    }
    //KEY1
    this.o430[0x4D] = this.o428[0xFF4D] = function (o458, o806, o85) {"use strict";
      o458.o175[0xFF4D] = (o85 & 0x7F) | (o458.o175[0xFF4D] & 0x80);
    }
    this.o430[0x4F] = this.o428[0xFF4F] = function (o458, o806, o85) {"use strict";
      o458.o559 = o85 & 0x01;
      if (o458.o559 > 0) {
        o458.o579 = o458.o578;
      }
      else {
        o458.o579 = o458.o577;
      }
      //Only writable by GBC.
    }
    this.o430[0x51] = this.o428[0xFF51] = function (o458, o806, o85) {"use strict";
      if (!o458.o422) {
        o458.o175[0xFF51] = o85;
      }
    }
    this.o430[0x52] = this.o428[0xFF52] = function (o458, o806, o85) {"use strict";
      if (!o458.o422) {
        o458.o175[0xFF52] = o85 & 0xF0;
      }
    }
    this.o430[0x53] = this.o428[0xFF53] = function (o458, o806, o85) {"use strict";
      if (!o458.o422) {
        o458.o175[0xFF53] = o85 & 0x1F;
      }
    }
    this.o430[0x54] = this.o428[0xFF54] = function (o458, o806, o85) {"use strict";
      if (!o458.o422) {
        o458.o175[0xFF54] = o85 & 0xF0;
      }
    }
    this.o430[0x55] = this.o428[0xFF55] = function (o458, o806, o85) {"use strict";
      if (!o458.o422) {
        if ((o85 & 0x80) == 0) {
          //DMA
          o458.o833((o85 & 0x7F) + 1);
          o458.o175[0xFF55] = 0xFF;  //Transfer completed.
        }
        else {
          //H-Blank DMA
          o458.o422 = true;
          o458.o175[0xFF55] = o85 & 0x7F;
        }
      }
      else if ((o85 & 0x80) == 0) {
        //Stop H-Blank DMA
        o458.o422 = false;
        o458.o175[0xFF55] |= 0x80;
      }
      else {
        o458.o175[0xFF55] = o85 & 0x7F;
      }
    }
    this.o430[0x68] = this.o428[0xFF68] = function (o458, o806, o85) {"use strict";
      o458.o175[0xFF69] = o458.o585[o85 & 0x3F];
      o458.o175[0xFF68] = o85;
    }
    this.o430[0x69] = this.o428[0xFF69] = function (o458, o806, o85) {"use strict";
      o458.o876(o458.o175[0xFF68] & 0x3F, o85);
      if (o458.o175[0xFF68] > 0x7F) { // high bit = autoincrement
        var next = ((o458.o175[0xFF68] + 1) & 0x3F);
        o458.o175[0xFF68] = (next | 0x80);
        o458.o175[0xFF69] = o458.o585[next];
      }
      else {
        o458.o175[0xFF69] = o85;
      }
    }
    this.o430[0x6A] = this.o428[0xFF6A] = function (o458, o806, o85) {"use strict";
      o458.o175[0xFF6B] = o458.o584[o85 & 0x3F];
      o458.o175[0xFF6A] = o85;
    }
    this.o430[0x6B] = this.o428[0xFF6B] = function (o458, o806, o85) {"use strict";
      o458.o878(o458.o175[0xFF6A] & 0x3F, o85);
      if (o458.o175[0xFF6A] > 0x7F) { // high bit = autoincrement
        var next = ((o458.o175[0xFF6A] + 1) & 0x3F);
        o458.o175[0xFF6A] = (next | 0x80);
        o458.o175[0xFF6B] = o458.o584[next];
      }
      else {
        o458.o175[0xFF6B] = o85;
      }
    }
    //SVBK
    this.o430[0x70] = this.o428[0xFF70] = function (o458, o806, o85) {"use strict";
      var o974 = (o458.o175[0xFF51] << 8) | o458.o175[0xFF52];  //Cannot change the RAM bank while WRAM is the source of a running HDMA.
      if (!o458.o422 || o974 < 0xD000 || o974 >= 0xE000) {
        o458.o438 = Math.o324(o85 & 0x07, 1);  //Bank range is from 1-7
        o458.o439 = ((o458.o438 - 1) << 12) - 0xD000;
        o458.o440 = o458.o439 - 0x2000;
      }
      o458.o175[0xFF70] = o85;  //Bit 6 cannot be written to.
    }
    this.o430[0x74] = this.o428[0xFF74] = function (o458, o806, o85) {"use strict";
      o458.o175[0xFF74] = o85;
    }
  }
  else {
    //Fill in the GameBoy Color I/O registers as normal RAM for GameBoy compatibility:
    //SC (Serial Transfer Control Register)
    this.o430[0x2] = this.o428[0xFF02] = function (o458, o806, o85) {"use strict";
      if (((o85 & 0x1) == 0x1)) {
        //Internal clock:
        o458.o175[0xFF02] = (o85 & 0x7F);
        o458.o531 = 4096;  //Set the Serial IRQ counter.
        o458.o532 = o458.o533 = 512;  //Set the transfer data shift counter.
      }
      else {
        //External clock:
        o458.o175[0xFF02] = o85;
        o458.o532 = o458.o533 = o458.o531 = 0;  //Zero the timers, since we're emulating as if nothing is connected.
      }
    }
    this.o430[0x40] = this.o428[0xFF40] = function (o458, o806, o85) {"use strict";
      if (o458.o175[0xFF40] != o85) {
        o458.o877();
        var o618 = (o85 > 0x7F);
        if (o618 != o458.o455) {
          //When the display mode changes...
          o458.o455 = o618;
          o458.o175[0xFF41] &= 0x78;
          o458.o574 = -1;
          o458.o542 = o458.o576 = o458.o541 = o458.o540 = o458.o448 = o458.o527 = o458.o539 = o458.o175[0xFF44] = 0;
          if (o458.o455) {
            o458.o449 = 2;
            o458.o827();  //Get the compare of the first scan line.
            o458.o459 = o458.o456;
          }
          else {
            o458.o449 = 0;
            o458.o459 = o458.o457;
            o458.o831();
          }
          o458.o420 &= 0xFD;
        }
        o458.o567 = ((o85 & 0x40) == 0x40) ? 0x400 : 0;
        o458.o562 = (o85 & 0x20) == 0x20;
        o458.o569 = ((o85 & 0x10) == 0x10) ? 0 : 0x80;
        o458.o568 = ((o85 & 0x08) == 0x08) ? 0x400 : 0;
        o458.o564 = ((o85 & 0x04) == 0);
        o458.o563 = (o85 & 0x02) == 0x02;
        o458.o565 = ((o85 & 0x01) == 0x01);
        o458.o175[0xFF40] = o85;
      }
    }
    this.o430[0x41] = this.o428[0xFF41] = function (o458, o806, o85) {"use strict";
      o458.o451 = ((o85 & 0x40) == 0x40);
      o458.o452 = ((o85 & 0x20) == 0x20);
      o458.o453 = ((o85 & 0x10) == 0x10);
      o458.o454 = ((o85 & 0x08) == 0x08);
      o458.o175[0xFF41] = o85 & 0x78;
      if ((!o458.o413 || !o458.o414) && o458.o455 && o458.o449 < 2) {
        o458.o420 |= 0x2;
        o458.o701();
      }
    }
    this.o430[0x46] = this.o428[0xFF46] = function (o458, o806, o85) {"use strict";
      o458.o175[0xFF46] = o85;
      if (o85 > 0x7F && o85 < 0xE0) {  //DMG cannot DMA from the ROM banks.
        o85 <<= 8;
        o806 = 0xFE00;
        var o971 = o458.o449;
        o458.o449 = 0;
        var o972 = 0;
        do {
          o972 = o458.o427[o85](o458, o85++);
          if (o972 != o458.o175[o806]) {
            //JIT the graphics render queue:
            o458.o449 = o971;
            o458.o911();
            o458.o449 = 0;
            o458.o175[o806++] = o972;
            break;
          }
        } while (++o806 < 0xFEA0);
        if (o806 < 0xFEA0) {
          do {
            o458.o175[o806++] = o458.o427[o85](o458, o85++);
            o458.o175[o806++] = o458.o427[o85](o458, o85++);
            o458.o175[o806++] = o458.o427[o85](o458, o85++);
            o458.o175[o806++] = o458.o427[o85](o458, o85++);
          } while (o806 < 0xFEA0);
        }
        o458.o449 = o971;
      }
    }
    this.o430[0x47] = this.o428[0xFF47] = function (o458, o806, o85) {"use strict";
      if (o458.o175[0xFF47] != o85) {
        o458.o877();
        o458.o594(o85);
        o458.o175[0xFF47] = o85;
      }
    }
    this.o430[0x48] = this.o428[0xFF48] = function (o458, o806, o85) {"use strict";
      if (o458.o175[0xFF48] != o85) {
        o458.o877();
        o458.o596(0, o85);
        o458.o175[0xFF48] = o85;
      }
    }
    this.o430[0x49] = this.o428[0xFF49] = function (o458, o806, o85) {"use strict";
      if (o458.o175[0xFF49] != o85) {
        o458.o877();
        o458.o596(4, o85);
        o458.o175[0xFF49] = o85;
      }
    }
    this.o430[0x4D] = this.o428[0xFF4D] = function (o458, o806, o85) {"use strict";
      o458.o175[0xFF4D] = o85;
    }
    this.o430[0x4F] = this.o428[0xFF4F] = this.o940;  //Not writable in DMG mode.
    this.o430[0x55] = this.o428[0xFF55] = this.o940;
    this.o430[0x68] = this.o428[0xFF68] = this.o940;
    this.o430[0x69] = this.o428[0xFF69] = this.o940;
    this.o430[0x6A] = this.o428[0xFF6A] = this.o940;
    this.o430[0x6B] = this.o428[0xFF6B] = this.o940;
    this.o430[0x6C] = this.o428[0xFF6C] = this.o940;
    this.o430[0x70] = this.o428[0xFF70] = this.o940;
    this.o430[0x74] = this.o428[0xFF74] = this.o940;
  }
}
o397.prototype.o733 = function () {"use strict";
  //Boot I/O Registers:
  if (this.o412) {
    this.o430[0x50] = this.o428[0xFF50] = function (o458, o806, o85) {"use strict";
      o133("Boot ROM reads blocked: Bootstrap process has ended.", 0);
      o458.o412 = false;
      o458.o731();      //Fill in the boot ROM ranges with ROM  bank 0 ROM ranges
      o458.o175[0xFF50] = o85;  //Bits are sustained in memory?
    }
    if (this.o437) {
      this.o430[0x6C] = this.o428[0xFF6C] = function (o458, o806, o85) {"use strict";
        if (o458.o412) {
          o458.o437 = ((o85 & 0x1) == 0);
          //Exception to the GBC identifying code:
          if (o458.name + o458.o445 + o458.o173[0x143] == "Game and Watch 50") {
            o458.o437 = true;
            o133("Created a boot exception for Game and Watch Gallery 2 (GBC ID byte is wrong on the cartridge).", 1);
          }
          o133("Booted to GBC Mode: " + o458.o437, 0);
        }
        o458.o175[0xFF6C] = o85;
      }
    }
  }
  else {
    //Lockout the ROMs from accessing the BOOT ROM control register:
    this.o430[0x50] = this.o428[0xFF50] = this.o940;
  }
}
//Helper Functions
o397.prototype.o699 = function (o975, o976) {"use strict";
  try {
    // The following line was modified for benchmarking:
    if (o720[5] || (o976 != "float32" && o115.o977 && this.o395())) {
      return o975;
    }
    if (!o975 || !o975.length) {
      return [];
    }
    var length = o975.length;
    switch (o976) {
      case "uint8":
        var o978 = new Uint8Array(length);
        break;
      case "int8":
        var o978 = new Int8Array(length);
        break;
      case "int32":
        var o978 = new Int32Array(length);
        break;
      case "float32":
        var o978 = new Float32Array(length);
    }
    for (var index = 0; index < length; index++) {
      o978[index] = o975[index];
    }
    return o978;
  }
  catch (o83) {
    o133("Could not convert an array to a typed array: " + o83.o134, 1);
    return o975;
  }
}
o397.prototype.o172 = function (o975) {"use strict";
  try {
    if (!o975 || !o975.length) {
      return [];
    }
    var o979 = [];
    for (var index = 0; index < o975.length; ++index) {
      o979[index] = o975[index];
    }
    return o979;
  }
  catch (o83) {
    o133("Conversion from a typed array failed: " + o83.o134, 1);
    return o975;
  }
}
o397.prototype.o713 = function (length, o980, o981) {"use strict";
  try {
    if (o720[5]) {
      throw(new Error(""));
    }
    // The following line was modified for benchmarking:
    if (o981 != "float32" && o115.o977 && this.o395()) {
      //Caught Opera breaking typed array math:
      throw(new Error(""));
    }
    switch (o981) {
      case "int8":
        var o982 = new Int8Array(length);
        break;
      case "uint8":
        var o982 = new Uint8Array(length);
        break;
      case "int32":
        var o982 = new Int32Array(length);
        break;
      case "float32":
        var o982 = new Float32Array(length);
    }
    if (o980 != 0) {
      var index = 0;
      while (index < length) {
        o982[index++] = o980;
      }
    }
  }
  catch (o83) {
    o133("Could not convert an array to a typed array: " + o83.o134, 1);
    var o982 = [];
    var index = 0;
    while (index < length) {
      o982[index++] = o980;
    }
  }
  return o982;
}
o397.prototype.o395 = function () {"use strict";
  var o983 = new Uint8Array(1);
  o983[0] = -1;
  o983[0] >>= 0;
  if (o983[0] != 0xFF) {
    o133("Detected faulty math by your browser.", 2);
    return true;
  }
  else {
    return false;
  }
}

// End of js/GameBoyCore.js file.

// Start of js/GameBoyIO.js file.

"use strict";
var o109 = null;            //GameBoyCore object.
var o200 = null;        //GameBoyCore Timer
var o720 = [            //Some settings.
  true,                 //Turn on sound.
  false,                //Boot with boot ROM first? (set to false for benchmarking)
  false,                //Give priority to GameBoy mode
  [39, 37, 38, 40, 88, 90, 16, 13],  //Keyboard button map.
  true,                //Colorize GB mode?
  false,                //Disallow typed arrays?
  4,                  //Interval for the emulator loop.
  15,                  //Audio buffer minimum span amount over x interpreter iterations.
  30,                  //Audio buffer maximum span amount over x interpreter iterations.
  false,                //Override to allow for MBC1 instead of ROM only (compatibility for broken 3rd-party cartridges).
  false,                //Override MBC RAM disabling and always allow reading and writing to the banks.
  false,                //Use the GameBoy boot ROM instead of the GameBoy Color boot ROM.
  false,                //Scale the canvas in JS, or let the browser scale the canvas?
  0x10,                //Internal audio buffer pre-interpolation factor.
  1                  //Volume level set.
];
function o88(o398, o173) {
  o984();
  o985();  //If we are about to load a new game, then save the last one...
  o109 = new o397(o398, o173);
  o109.o735 = o986;
  o109.o709 = o709;
  o109.o88();
  o15();
}
function o15() {
  if (o987()) {
    if (!o988()) {
      o109.o417 &= 1;
      o133("Starting the iterator.", 0);
      var o834 = o158();  // The line is changed for benchmarking.
      o109.o537 = o834.o159();
      o109.o538 = 0;
      // The following lines are commented out for benchmarking.
      // gbRunInterval = setInterval(function () {"use strict";
      //  if (!document.hidden && !document.msHidden && !document.mozHidden && !document.webkitHidden) {
      //    gameboy.run();
      // }
      // }, settings[6]);
    }
    else {
      o133("The GameBoy core is already running.", 1);
    }
  }
  else {
    o133("GameBoy core cannot run while it has not been initialized.", 1);
  }
}
function o630() {
  if (o987()) {
    if (o988()) {
      o984();
    }
    else {
      o133("GameBoy core has already been paused.", 1);
    }
  }
  else {
    o133("GameBoy core cannot be paused while it has not been initialized.", 1);
  }
}
function o984() {
  if (o987() && o988()) {
    o989(o200);
    o109.o417 |= 2;
    o133("The previous emulation has been cleared.", 0);
  }
  else {
    o133("No previous emulation was found to be cleared.", 0);
  }
}
function o990() {
  if (o987()) {
    try {
      var o991 = 0;
      while (o992("FREEZE_" + o109.name + "_" + o991) != null) {
        o991++;
      }
      o993("FREEZE_" + o109.name + "_" + o991, o109.o640());
      o133("Saved the current state as: FREEZE_" + o109.name + "_" + o991, 0);
    }
    catch (o83) {
      o133("Could not save the current emulation state(\"" + o83.o134 + "\").", 2);
    }
  }
  else {
    o133("GameBoy core cannot be saved while it has not been initialized.", 1);
  }
}
function o994() {
  if (o987()) {
    if (o109.o638) {
      try {
        var o995 = o109.o637();
        if (o995.length > 0) {
          o133("Saving the SRAM...", 0);
          if (o992("SRAM_" + o109.name) != null) {
            //Remove the outdated storage format save:
            o133("Deleting the old SRAM save due to outdated format.", 0);
            o996("SRAM_" + o109.name);
          }
          o993("B64_SRAM_" + o109.name, o219(o995));
        }
        else {
          o133("SRAM could not be saved because it was empty.", 1);
        }
      }
      catch (o83) {
        o133("Could not save the current emulation state(\"" + o83.o134 + "\").", 2);
      }
    }
    else {
      o133("Cannot save a game that does not have battery backed SRAM specified.", 1);
    }
    o997();
  }
  else {
    o133("GameBoy core cannot be saved while it has not been initialized.", 1);
  }
}
function o997() {  //Execute this when SRAM is being saved as well.
  if (o987()) {
    if (o109.o556) {
      try {
        o133("Saving the RTC...", 0);
        o993("RTC_" + o109.name, o109.o639());
      }
      catch (o83) {
        o133("Could not save the RTC of the current emulation state(\"" + o83.o134 + "\").", 2);
      }
    }
  }
  else {
    o133("GameBoy core cannot be saved while it has not been initialized.", 1);
  }
}
function o985() {
  if (o987()) {
    o133("Automatically saving the SRAM.", 0);
    o994();
    o997();
  }
}
function o986(o998) {
  try {
    if (o992("B64_SRAM_" + o998) != null) {
      o133("Found a previous SRAM state (Will attempt to load).", 0);
      return o222(o992("B64_SRAM_" + o998));
    }
    else if (o992("SRAM_" + o998) != null) {
      o133("Found a previous SRAM state (Will attempt to load).", 0);
      return o992("SRAM_" + o998);
    }
    else {
      o133("Could not find any previous SRAM copy for the current ROM.", 0);
    }
  }
  catch (o83) {
    o133("Could not open the  SRAM of the saved emulation state.", 2);
  }
  return [];
}
function o709(o998) {
  try {
    if (o992("RTC_" + o998) != null) {
      o133("Found a previous RTC state (Will attempt to load).", 0);
      return o992("RTC_" + o998);
    }
    else {
      o133("Could not find any previous RTC copy for the current ROM.", 0);
    }
  }
  catch (o83) {
    o133("Could not open the RTC data of the saved emulation state.", 2);
  }
  return [];
}
function o999(o998, o398) {
  try {
    if (o992(o998) != null) {
      try {
        o984();
        o133("Attempting to run a saved emulation state.", 0);
        o109 = new o397(o398, "");
        o109.o447 = o998;
        o109.o697(o992(o998));
        o15();
      }
      catch (o83) {
        o36(o83.o134 + " file: " + o83.o748 + " line: " + o83.o749);
      }
    }
    else {
      o133("Could not find the save state " + o998 + "\".", 2);
    }
  }
  catch (o83) {
    o133("Could not open the saved emulation state.", 2);
  }
}
function o1000(o1001) {
  o1001 = o1002(o1001);
  if (o1001 && o1001.o1003) {
    if (o1001.o1003.length > 0) {
      for (var index = 0; index < o1001.o1003.length; ++index) {
        o133("Importing blob \"" + o1001.o1003[index].o1004 + "\"", 0);
        if (o1001.o1003[index].o1005) {
          if (o1001.o1003[index].o1004.substring(0, 5) == "SRAM_") {
            o993("B64_" + o1001.o1003[index].o1004, o203(o1001.o1003[index].o1005));
          }
          else {
            o993(o1001.o1003[index].o1004, JSON.parse(o1001.o1003[index].o1005));
          }
        }
        else if (o1001.o1003[index].o1004) {
          o133("Save file imported had blob \"" + o1001.o1003[index].o1004 + "\" with no blob data interpretable.", 2);
        }
        else {
          o133("Blob chunk information missing completely.", 2);
        }
      }
    }
    else {
      o133("Could not decode the imported file.", 2);
    }
  }
  else {
    o133("Could not decode the imported file.", 2);
  }
}
function o1008(o1009, o1010) {
  //Append the file format prefix:
  var o1011 = "EMULATOR_DATA";
  var o1012 = "GameBoy";
  //Figure out the length:
  var o1013 = (o1011.length + 4 + (1 + o1012.length)) + ((1 + o1009.length) + (4 + o1010.length));
  //Append the total length in bytes:
  o1011 += o215(o1013);
  //Append the console ID text's length:
  o1011 += o218(o1012.length);
  //Append the console ID text:
  o1011 += o1012;
  //Append the blob ID:
  o1011 += o218(o1009.length);
  o1011 += o1009;
  //Now append the save data:
  o1011 += o215(o1010.length);
  o1011 += o1010;
  return o1011;
}
function o1014(o1015) {
  var o1012 = "GameBoy";
  //Figure out the initial length:
  var o1013 = 13 + 4 + 1 + o1012.length;
  //Append the console ID text's length:
  var o1011 = o218(o1012.length);
  //Append the console ID text:
  o1011 += o1012;
  var o1009 = "";
  var o1010 = "";
  //Now append all the blobs:
  for (var index = 0; index < o1015.length; ++index) {
    o1009 = o1015[index][0];
    o1010 = o1015[index][1];
    //Append the blob ID:
    o1011 += o218(o1009.length);
    o1011 += o1009;
    //Now append the save data:
    o1011 += o215(o1010.length);
    o1011 += o1010;
    //Update the total length:
    o1013 += 1 + o1009.length + 4 + o1010.length;
  }
  //Now add the prefix:
  o1011 = "EMULATOR_DATA" + o215(o1013) + o1011;
  return o1011;
}
function o1002(o1001) {
  /*Format is as follows:
    - 13 byte string "EMULATOR_DATA"
    - 4 byte total size (including these 4 bytes).
    - 1 byte Console type ID length
    - Console type ID text of 8 bit size
    blobs {
      - 1 byte blob ID length
      - blob ID text (Used to say what the data is (SRAM/freeze state/etc...))
      - 4 byte blob length
      - blob length of 32 bit size
    }
  */
  var length = o1001.length;
  var o1016 = {};
  o1016.o1012 = null;
  var o1017 = -1;
  o1016.o1003 = [];
  if (length > 17) {
    if (o1001.substring(0, 13) == "EMULATOR_DATA") {
      var length = Math.o312(((o1001.charCodeAt(16) & 0xFF) << 24) | ((o1001.charCodeAt(15) & 0xFF) << 16) | ((o1001.charCodeAt(14) & 0xFF) << 8) | (o1001.charCodeAt(13) & 0xFF), length);
      var o1018 = o1001.charCodeAt(17) & 0xFF;
      if (length > 17 + o1018) {
        o1016.o1012 = o1001.substring(18, 18 + o1018);
        var o1019 = 0;
        var o1020 = 0;
        for (var index = 18 + o1018; index < length;) {
          o1019 = o1001.charCodeAt(index++) & 0xFF;
          if (index + o1019 < length) {
            o1016.o1003[++o1017] = {};
            o1016.o1003[o1017].o1004 = o1001.substring(index, index + o1019);
            index += o1019;
            if (index + 4 < length) {
              o1020 = ((o1001.charCodeAt(index + 3) & 0xFF) << 24) | ((o1001.charCodeAt(index + 2) & 0xFF) << 16) | ((o1001.charCodeAt(index + 1) & 0xFF) << 8) | (o1001.charCodeAt(index) & 0xFF);
              index += 4;
              if (index + o1020 <= length) {
                o1016.o1003[o1017].o1005 =  o1001.substring(index, index + o1020);
                index += o1020;
              }
              else {
                o133("Blob length check failed, blob determined to be incomplete.", 2);
                break;
              }
            }
            else {
              o133("Blob was incomplete, bailing out.", 2);
              break;
            }
          }
          else {
            o133("Blob was incomplete, bailing out.", 2);
            break;
          }
        }
      }
    }
  }
  return o1016;
}
function o1021(key) {  //Maps a keyboard key to a gameboy key.
  //Order: Right, Left, Up, Down, A, B, Select, Start
  for (var index = 0; index < o720[3].length; index++) {
    if (o720[3][index] == key) {
      return index;
    }
  }
  return -1;
}
function o987() {
  return (typeof o109 == "object" && o109 != null);
}
function o988() {
  return ((o109.o417 & 2) == 0);
}
function o1022(o93) {
  if (o987() && o988()) {
    var o1023 = o1021(o93.o1024);
    if (o1023 >= 0 && o1023 < 8) {
      o109.o750(o1023, true);
      try {
        o93.o1025();
      }
      catch (o83) { }
    }
  }
}
function o1026(o93) {
  if (o987() && o988()) {
    var o1023 = o1021(o93.o1024);
    if (o1023 >= 0 && o1023 < 8) {
      o109.o750(o1023, false);
      try {
        o93.o1025();
      }
      catch (o83) { }
    }
  }
}
function o1027(o93) {
  if (o987() && o988()) {
    if (o93.o1028 || o93.o1029) {
      o109.o753(o93.o1028 * Math.o1030 / 180, o93.o1029 * Math.o1030 / 180);
    }
    else {
      o109.o753(o93.o124, o93.o125);
    }
    try {
      o93.o1025();
    }
    catch (o83) { }
  }
}
//The emulator will call this to sort out the canvas properties for (re)initialization.
function o737() {
  if (o987()) {
    o109.o398.o129 = o109.o398.o1031;
    o109.o398.o130 = o109.o398.o1032;
  }
}
//Call this when resizing the canvas:
function o1033() {
  if (o987()) {
    if (!o720[12]) {
      if (o109.o606 != 160 || o109.o608 != 144) {
        o109.o705();
      }
    }
    else {
      if (o109.o606 != o109.o398.o1031 || o109.o608 != o109.o398.o1032) {
        o109.o705();
      }
    }
  }
}

// End of js/GameBoyIO.js file.

// Start of realtime.js file.
// ROM code from Public Domain LPC2000 Demo "realtime" by AGO.

var o106='r+BPyZiEZwA+AeBPySAobeEq6gAgKlYj5WJv6SRmZjjhKuXqACDJ/////////////////////////////////xgHZwCYhGcA2fX6/3/1xdXlIRPKNgHN9f/h0cHx6gAg+hLKtyAC8cnwgLcoF/CC7hjgUT6Q4FOv4FLgVOCAPv/gVfHZ8IG3IALx2fBA7gjgQA8PD+YB7gHgT/CC4FHuEOCCPojgU6/gUuBU4IE+/uBV4ID6NMs86jTL8dkKCgoKbWFkZSBieSBhZ28uIGVtYWlsOmdvYnV6b3ZAeWFob28uY29tCnVybDogc3BlY2N5LmRhLnJ1CgoKCv///////wDDSgnO7WZmzA0ACwNzAIMADAANAAgRH4iJAA7czG7m3d3Zmbu7Z2NuDuzM3dyZn7u5Mz5BR08nUyBSRUFMVElNRSCAAAAAAgEDADMBSTQeIUD/y37I8P/1y4fg//BE/pEg+su+8eD/yT7A4EY+KD0g/cnF1eWvEQPK1RITEhMGAyEAyuXFTgYAIWAMCQkqEhMqEhPB4SMFIOrhrwYIzYsU4dHByf////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAgMFBggJCwwOEBETFBYXGBobHR4fISIjJSYnKSorLC0uLzAxMjM0NTY3ODg5Ojo7PDw9PT4+Pj8/Pz9AQEBAQEBAQEBAPz8/Pz4+PT08PDs7Ojk5ODc2NTU0MzIxMC8uLCsqKSgmJSQjISAfHRwaGRcWFRMSEA8NCwoIBwUEAgH//fz6+ff29PPx8O7t6+ro5+Xk4uHg3t3c2tnY19bU09LR0M/OzczLysnJyMfGxsXFxMPDw8LCwcHBwcDAwMDAwMDAwMDBwcHBwsLDw8PExcXGxsfIycnKy8zNzs/Q0dLT1NXX2Nna3N3e4OHi5OXn6Onr7O7v8fL09vf5+vz9AAEECRAZJDFAUWR5kKnE4QAhRGmQueQRQHGk2RBJhMEAQYTJEFmk8UCR5DmQ6UShAGHEKZD5ZNFAsSSZEIkEgQCBBIkQmSSxQNFk+ZApxGEAoUTpkDnkkUDxpFkQyYRBAMGESRDZpHFAEeS5kGlEIQDhxKmQeWRRQDEkGRAJBAEAAQQJEBkkMUBRZHmQqcThACFEaZC55BFAcaTZEEmEwQBBhMkQWaTxQJHkOZDpRKEAYcQpkPlk0UCxJJkQiQSBAIEEiRCZJLFA0WT5kCnEYQChROmQOeSRQPGkWRDJhEEAwYRJENmkcUAR5LmQaUQhAOHEqZB5ZFFAMSQZEAkEAQAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAgICAgIDAwMDBAQEBAUFBQUGBgYHBwcICAkJCQoKCgsLDAwNDQ4ODw8QEBEREhITExQUFRUWFxcYGRkaGhscHB0eHh8gISEiIyQkJSYnJygpKisrLC0uLzAxMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1FSU1RVVldZWltcXV9gYWJkZWZnaWprbG5vcHJzdHZ3eXp7fX5/gYKEhYeIiouNjpCRk5SWl5manJ2foKKkpaepqqytr7GytLa3ubu9vsDCxMXHycvMztDS1NXX2dvd3+Hi5Obo6uzu8PL09vj6/P4A//z38Ofcz8CvnIdwVzwfAN+8l3BHHO/Aj1wn8Ld8PwC/fDfwp1wPwG8cx3AXvF8AnzzXcAecL8BP3Gfwd/x/AH/8d/Bn3E/AL5wHcNc8nwBfvBdwxxxvwA9cp/A3fL8AP3y38Cdcj8DvHEdwl7zfAB88V3CHnK/Az9zn8Pf8/wD//Pfw59zPwK+ch3BXPB8A37yXcEcc78CPXCfwt3w/AL98N/CnXA/AbxzHcBe8XwCfPNdwB5wvwE/cZ/B3/H8Af/x38GfcT8AvnAdw1zyfAF+8F3DHHG/AD1yn8Dd8vwA/fLfwJ1yPwO8cR3CXvN8AHzxXcIecr8DP3Ofw9/z/AP/////////////////////+/v7+/v79/f39/fz8/Pz8+/v7+vr6+vn5+fj4+Pf39/b29fX19PTz8/Ly8fHw8PDv7u7t7ezs6+vq6uno6Ofn5uXl5OPj4uHh4N/e3t3c3Nva2djY19bV1NTT0tHQz8/OzczLysnIx8bFxMPCwcDAvr28u7q5uLe2tbSzsrGwr62sq6qpqKalpKOioJ+enZyamZiWlZSTkZCPjYyLiYiHhYSCgYB+fXt6eHd1dHJxcG5sa2loZmVjYmBfXVtaWFdVU1JQTk1LSUhGREJBPz08Ojg2NDMxLy0rKigmJCIgHx0bGRcVExEPDQsJBwUDAf9/Px8PBwMBgEAgEAgEAgEAAQEBAQEBAQEBAQEA//////////////+AEAcAAQABAAEBAAEBAAEA/wD//wD//wD/AP+AKwcBAAEAAQD/AP8A/wD/AP8A/wABAAEAAQCARgcBAQEBAQD//////////////wABAQEBAQGAYQf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+AwODw+Pz+/xEAwAGxwj4E9cU+BfUKbwMKZ37+gCALI34LAiN+AwILGOsahhIDHBwcHPE9IN7BIRAAGVRdPgX1Cm8DCmcalhIjfAILfQIDAx0dHR3xPSDnIRgAGVRd8T0grskRAcAB6cI+BPUKbwMKZ37+gCALI34LAiN+AwILGOs+CvUahhIcHBwc8T0g9CN8Agt9AgMD8T0g0MkgIEZJTExFRCAgIFBPTFlHT05TIEhFTElDT1BURVJJTiBBQ1RJT04gIQDADgpwLHQsGhPWICI2ACwNIPE+oOoQyngBCQDlYmsJVF3hDMYKR3AsdCwaG9YgIjYALA0g8a/qEcrJ+hDK/jDI1gTqEMpHPqCQ/lA4Aj5QDgAM1ggw+3ghAcARBAB3xggZDSD5+hHKg+oRykf+UDgCPlAOAAzWCDD7eC4td9YIGQ0g+ckh9grzMf/PzVABr+Am4P/gD+BD4EL2SOBFPkDgQT4E4AfN9RM+CuoAAA4HeeBwJqCvIstsKPsNIPIh/v8yy30g+wEKABH1/yFpAc3kE+cCAVYAEQDBIVt2zeQTrwYYIWsOzYsUIYsOzaQUxwGwAxEAgCGhF8XlzeQT4cERAIjN5BMhAJgRAwABYMDHcc9yIwUg+BQdIPHN9RMhuxUGAc2WE82JEz5E4EGv4EU+A+D/+z4B6hLK4E0QAAB4zccTBSD6zZATxwEACFkhAIhzIwt4sSD5IQDHPv9FdyRwJCJ3JXclcCwg8x5/IQCYx3PPNgDL1DYIx3PLlCPLVCjuPoABDxARIAAhIpjF5XfL1HfLlDwZDSD1POEswQUg7D486jPLr+o0yz3qL8s+oOCCPgLqG8vNiRM+ROBBr+BFPgPg/68+ACEXyyI+CiI+IHev6h7L4ITgluodyz4B6h/L6g/D6g3KBlARnAjNxAjNcwsBLAHFzTsLzQAJwQt4sSDzzZATxwEACFkhAIhzIwt4sSD5zfUTeQYQIYMOzYsUPv/qKcsGgBGwCM3ECM2JEwEsAcXNbAzNAAnBC3ixIPOv6hLKzZATPpDgU/PHAbADEQCIIaEXzeQTzfUTIQIWBgHNlhPNiRM+ROBBr+BFPgPg//sY/j4D6gAgzcRGBgMhF8t+gCJ+gDwifoB3zckP+jDLb/oxy2fNtgs+AeCB8IG3IPv6Dcq3KAPNcwHJ+h3LBgARTg2Hb2AZKmZvTgkq4ItfKjzgjD1PKuCNe4eHg0cRAMUqEhwFIPp5h4eBRxEAxCoSHAUg+n3qMMt86jHLyfCL4I7wjOCP8I3gkBEAw9XlzcoQ4dHwpeaAEhwBAwAJ8JA94JAg6CEAxQYPKk+gXxq3IB95yzegXxq3IBYqT6BfGrcgD3nLN6BfGrcgBiwsLBhHLOXNyhDwlrcoKwYB8KXGP0/LfygBBcXwpMY/Vx4AzZMOe8H18KPGP1ceAM2TDsHhJCJwGAzhJPCjxj8i8KTGPyIsJRbDBg/wjj3gjsLiCz4C6gAgw1JhfBjcHwAL7mpIYL9vBgMhF8t+gCJ+gDwifoB3zckPIcsNEQDGzf4MI+U+A+oAICEgy83+DPocy9YIb+ocy82vYAYDESDLIWIOxeXVzcoQ4fCjxhQi8KQiNg8jVF3hIyMjwQUg5M3ERsE+AeoAIAr+/ygiEQDGbyYAKRnlAwoDbyYAKRleI1bhKmZvxc0xHMwAQMEY2T4B4IHwgbcg+8l+PMjl1c3KEAYB8KVPy38oAQXF8KTLf/UoAi88Vx4AzZMO8XsgAi88xn/B9fCjy3/1KAIvPFceAM2TDvF7KAIvPMZ/wdESE3gSE+EjIyMYsFANAgAIDAYCRCgoFANEKAAUE0QAABQSRAAoFAJVKCjsA1UoAOwTVQAA7BJVACjsAAAEBQAAAAEFAAEBAwIGAQEDBwYCAgAHAwICAAcEAwMBAgYDAwEFBgQEAAECBAQAAwIFBQQFBgUFBAcGMgAAzgAAADIAAM4AAAAyAADOKAAAHhEAChEAAAAACu8AHu8AFAAKFAD2FAAPCgAF6AAC4gAQ3gAQ4gD+CgD74g4C3Q4C4QAC4vIC3fIC4AAM4PsM4PsQ4/sJ3fsJ/wABAQICAwMEBAUFAAAGAQYCBgMGBAYFBgAHAQcCBwMHBAcFBwYICQoKCwsMDA0NDgoPDxAQEQoSEhMTERQVFRYVFxUYCBkIGggb/yAAD/AbD/DlD/9//3+XEQAAAGD/f5cRAAAYAP9/lxEAAIB8lxH/f/9/QHz/f18IAADLI8sSeC9HeS9PAyEAAH2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEssoyxkJ0BPJ+hfLJgJvfuCcLzzgnn3GQG9+4Jvgn6/gmOCZ4JrgneChPkDgl/oYy29OfcZAb0bFeOCgeeCizdMQ8KPgpvCk4KnwpeCsr+Cg4KI+QOChzdMQ8KPgp/Ck4KrwpeCtwXkvPOCgr+CheOCizdMQ8KPgmfCk4JzwpeCf8Kbgl/Cp4JrwrOCd8KfgmPCq4JvwreCe+hnLJgJvTn3GQG9GxXjgoHkvPOChr+CizdMQ8KPgpvCk4KnwpeCswXngoHjgoa/gos3TEPCj4KfwpOCq8KXgra/goOChPkDgos3TEPCj4JnwpOCc8KXgn/Cm4JfwqeCa8KzgnfCn4JjwquCb8K3gnskq4KAq4KEq4KLwl1/woCYGV8t6ICDLe3soJy88X3qTMAIvPG96g1YlXiVvfiVuZxl8LzwYH3ovPFfLeyjhey88X5IwAi88b3qDViVeJW9+JW5nGXxH8Jhf8KEmBlfLeiAgy3t7KCcvPF96kzACLzxveoNWJV4lb34lbmcZfC88GB96LzxXy3so4XsvPF+SMAIvPG96g1YlXiVvfiVuZxl8T/CZX/CiJgZXy3ogIMt7eygnLzxfepMwAi88b3qDViVeJW9+JW5nGXwvPBgfei88V8t7KOF7LzxfkjACLzxveoNWJV4lb34lbmcZfICB4KPwml/woCYGV8t6ICDLe3soJy88X3qTMAIvPG96g1YlXiVvfiVuZxl8LzwYH3ovPFfLeyjhey88X5IwAi88b3qDViVeJW9+JW5nGXxH8Jtf8KEmBlfLeiAgy3t7KCcvPF96kzACLzxveoNWJV4lb34lbmcZfC88GB96LzxXy3so4XsvPF+SMAIvPG96g1YlXiVvfiVuZxl8T/CcX/CiJgZXy3ogIMt7eygnLzxfepMwAi88b3qDViVeJW9+JW5nGXwvPBgfei88V8t7KOF7LzxfkjACLzxveoNWJV4lb34lbmcZfICB4KTwnV/woCYGV8t6ICDLe3soJy88X3qTMAIvPG96g1YlXiVvfiVuZxl8LzwYH3ovPFfLeyjhey88X5IwAi88b3qDViVeJW9+JW5nGXxH8J5f8KEmBlfLeiAgy3t7KCcvPF96kzACLzxveoNWJV4lb34lbmcZfC88GB96LzxXy3so4XsvPF+SMAIvPG96g1YlXiVvfiVuZxl8T/CfX/CiJgZXy3ogIMt7eygnLzxfepMwAi88b3qDViVeJW9+JW5nGXwvPBgfei88V8t7KOF7LzxfkjACLzxveoNWJV4lb34lbmcZfICB4KXJ9T6D4EDxyfWv4EDxyfXF1eXHKv7/KFD+FiAaTiMqh4eHVF1vJgApKXgGmAlHelRne11vGNzGYBLPeBIcGNN2ACETyjQ1KPc1yfvFBmR2AAUg+8HJ+3YABSD7yfXF1eUqEhMLeLEg+OHRwfHJxeUBAKAhAMDNAxThwcnF5XEjBSD74cHJxdXlAQCAIZXKzQMU4dHBycXV5a/qFcuwIAwaEyIaEzIEDXjqFcvlxRq+EyAPIxq+IAkTIw0gCMHhGBkrGyMjBSDmecFPBBoTIhoTIiEVyzThDSDS+hXL4dHBydVfzXIUuzD60cnF9cH6FMrLD6mAR/CLkR+AR/AFqOoUysHJ9cXltxcXF/aA4Ggq4GkFIPo+5OBH4cHxyfXF5bcXFxf2gOBqKuBrBSD6PuTgSOBJ4cHxyT4Q4ADwAC/LN+bwRz4g4ADwAC/mD7DqFsvJzyEAgK8GIE8+CCINIPwFIPnHIQCABiBPIg0g/AUg+cnFzQMVSs0eFcHJxc0RFUjNGRVLzSMVwcnFBgHNKxXBycUGABj2xQYDGPHFBgLNKxXByfXlh4eAJsBvceHxyfXlh4cmwG9GI04jXiNW4fHJ9cXV5eCDKjzK8BPWIF/wg835FF95xghPezwY6PXF1eXF1c13FdHBex4FIS3LGNUBKssR8NjNlRURGPzNlRURnP/NlRUR9v/NlRUR//8+LzwZOPwCA3ovV3svXxMZyTAwRlBT/zAwUE5UU/8wMExJTkVT/xYFB1dFTENPTUUgVE8WBQgtUkVBTFRJTUUtFgAJREVNTyBNQURFIEVTUEVDSUFMTFkWAQpGT1IgTENQJzIwMDAgUEFSVFn/FgAAR1JFRVRJTlg6ICAgICAgICAgICAWAAFEU0MsUEFOLFNBQixGQVRBTElUWRYAAkpFRkYgRlJPSFdFSU4sSUNBUlVTFgADRE9YLFFVQU5HLEFCWVNTICAgICAWAAQgICAgICAgICAgICAgICAgICAgIBYABUNSRURJVFM6ICAgICAgICAgICAgFgAGQUxMIEdGWCZDT0RFIEJZIEFHTyAWAAdIRUxJQ09QVEVSIDNEIE1PREVMIBYACENSRUFURUQgQlkgQlVTWSAgICAgFgAJICAgICAgICAgICAgICAgICAgICAWAApVU0VEIFNPRlRXQVJFOiAgICAgIBYAC1JHQkRTLE5PJENBU0gsRkFSICAgFgAMICAgICAgICAgICAgICAgICAgICAWAA1DT05UQUNUOiAgICAgICAgICAgIBYADkdPQlVaT1ZAWUFIT08uQ09NICAgFgAPSFRUUDovL1NQRUNDWS5EQS5SVSAWABAgICAgICAgICAgICAgICAgICAgIBYAEVNFRSBZT1UgT04gR0JERVYyMDAw/wAAAAAAAAAAAAAAAAAAAAAICBwUHBQ4KDgoMDBwUCAgKCh8VHxUKCgAAAAAAAAAABQUPip/QT4qfFT+gnxUKCgICDw0fkL8rP6Cfmr8hHhYJCR+Wn5SPCR4SPyU/LRISBgYPCR+Wjwkflr8tH5KNDQQEDgocFAgIAAAAAAAAAAABAQOChwUOCg4KDgoHBQICBAQOCgcFBwUHBQ4KHBQICAAABQUPio8NH5CPCx8VCgoAAAICBwUPDR+QjwsOCgQEAAAAAAAAAAAEBA4KHBQcFAAAAAAAAB8fP6CfHwAAAAAAAAAAAAAAAAwMHhIeEgwMAQEDgoeEjwkeEjwkOCgQEAYGDwkflr+qv6q/LR4SDAwGBg8JHxUPDQ4KHxs/oJ8fBwcPiJ+Wjw0eEj8vP6CfHwcHD4iflo8NE5K/LR4SDAwJCR+Wn5afFT8tP6CfGwQEBwcPiJ8XPyEfnr8tHhIMDAYGDwkeFj8pP66/LR4SDAwPDx+Qv66XFQ4KHBQcFAgIBwcPiJ+Wjwkflr8tPiIcHAcHD4iflr+sn5KfHT4iHBwAAAAAAgIHBQICBAQOCgQEAAACAgcFAgIEBA4KDgocFAAAAAAHBQ4KHBQcFA4KAAAAAAAADw8fkJ8fPyEeHgAAAAAAAA4KBwUHBQ4KHBQAAAYGDwkflr8tHhoEBA4KBAQHBw+In5a/rL8pPi4+IhwcBwcPiJ+Wv66/oL+uvy0SEg4OHxEflr8pP6a/LT4iHBwHBw+In5a5qbgoP6y/IxwcDAweEh8VH5a7qr+uvyEeHgcHD4ifFx8RHhY/Lz+gnx8HBw+Inxc/IT4uOCg4KBAQBwcPiJ+Wvy8/qL+uvyEeHgkJH5a/rr+gv66/LT8tEhIPDx+QjwsOChwUHhY/IR4eDw8fkI+Og4KXFT8tHhIMDAkJH5afFR+Qv66/LT8tEhIICBwUHBQ4KDkpP66fEQ4OCgofFR+Qv6q/rr8tPy0SEgkJH5a/pr+qv6y7qr8tEhIHBw+In5a7qruqvy0+IhwcBwcPiJ+Wv66/IT4uOCgQEAcHD4iflr+uv6q/LT+inZ2HBw+In5a/LT4iPy0/LRISBwcPiJ8XP6Cfnr8tPiIcHB8fP6CfGw4KHBQcFBwUCAgJCR+Wn5a7qruqvy0eEgwMERE7qruqnxUfFR4SHBQICAkJH5aflr+uv6q/KR8VCgoJCR+WnxUOCg8JH5a/LRISCQkflr8tPy0eEhwUHBQICA8PH5C/LT46Dwsflr8hHh4HBw+IjwsOChwUHhYfEQ4OEBA4KDwkHhIPCQeEg4KBAQ4OHxEPDQcFDgoeGj4iHBwGBg8JH5a7qpERAAAAAAAAAAAAAAAAAAAAAB8fP6CfHx81rdPfJJne5X1MAIvPEevyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxnLEcsXlDABhMsRyxeUMAGEyxHLF5QwAYTLEcsXlDABhMsRyxeUMAGEyxHLF5QwAYTLEcsXlDABhMsRyxeUMAGEeRcvT/F5MAIvPIVvJrcBAAA+t7zLEbrLED6/vcsRu8sQPj+8P8sRuj/LEL0/yxG7P8sQeLHIeKHAebcgB3xiV31rX3jLH9L/HD5AlU97lW96lPUwAi88R6/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGcsRyxeVMAGFyxHLF5UwAYXLEcsXlTABhcsRyxeVMAGFyxHLF5UwAYXLEcsXlTABhcsRyxeVMAGFyxHLF5UwAYV5Fy9P8XkwAi88hGcuQMMxHMsf0pcdPkCUT3qUZ3uV9TACLzxHr8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZyxHLF5QwAYTLEcsXlDABhMsRyxeUMAGEyxHLF5QwAYTLEcsXlDABhMsRyxeUMAGEyxHLF5QwAYTLEcsXlDABhHkXL0/xeTACLzyFbyZAwzEcyx/SoRt91r9PfZNvepT1MAIvPEevyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxnLEcsXlTABhcsRyxeVMAGFyxHLF5UwAYXLEcsXlTABhcsRyxeVMAGFyxHLF5UwAYXLEcsXlTABhcsRyxeVMAGFeRcvT/F5MAIvPIRnLr/DMRz//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////3q8MAVUZ3tdb3u90pdAfZNPepRfkTA+V3nLPy88g+CDPn+R5YdPbyYARCkpKQkBkVIJweV41kAXb3nWQB8fH+YPZ/CChGd55gcGB/YITwpP8INHLMl5S1+RV3nLPy88g+CDPneR5YdPbyYARCkpKQkBklsJweV41kAXb3nWQB8fH+YPZ/CChGd55gcGB/YITwpP8INHLMmVT3qUX5EwPld5yz8vPIPggz5/keWHT28mAEQpKSkJAR9BCcHleNZAF2951kAfHx/mD2fwgoRneeYHBgf2CE8KT/CDRyzJeUtfkVd5yz8vPIPggz53keWHT28mAEQpKSkJASBKCcHleNZAF2951kAfHx/mD2fwgoRneeYHBgf2CE8KT/CDRyzJfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkyX6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALMl+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASXJfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsyf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wHRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYt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uDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNyXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDcmDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDMlxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggzJxg+Hh+oawXovpl96obMiei+mX3qgszIkeRgAInAtJCJwLSQicC0kInAtJCJwLSQicC0kInAtJCJwLSQicC0kInAtJCJwLSQicC0kInAtJCJwLSQW/8n///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+qqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVACEzDDPAABIAEjPAMwwAIQAhMwwzwAASABIzwDMMACEAITMMM8AAEgASM8AzDAAhACEzDDPAABIAEjPAMwwAIQAhMwwzwAASABIzwDMMACEAITMM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cAkicAkicAkicAkicAkicAkicAkicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCSJwCSJwCSJwCXIscAl7InAJInAJInAJInAJInAJInAJInAJInAJInAJLCwly2XIJGjJycnJyeEicAkicAkicAkicAkicAkicAkicAlyLHAJeyJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSwsJctlyCRoycnJycnhInAJInAJInAJInAJInAJInAJInAJInAJcixwCXsicAkicAkicAkicAkicAkicAkicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCXIscAl7InAJInAJInAJInAJInAJInAJLCwly2XIJGjJycnJyeEicAkicAkicAkicAkicAkicAkicAkicAkicAkicAlyLHAJeyJwCSJwCSJwCSJwCSJwCSwsJctlyCRoycnJycnhInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJcixwCXsicAkicAkicAkicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCXIscAl7InAJInAJInAJLCwly2XIJGjJycnJyeEicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAlyLHAJeyJwCSJwCSwsJctlyCRoycnJycnhInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJcixwCXsicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCXIscAl7LCwly2XIJGjJycnJydE+t5LI4IXmB8RSRPCFHx8focjlzTJE4XkicCwicCwicCwicCwicCwicCwicCwicCzJ+ABUXWhHeZAfyx1nATNZCfCCMQCv/qAoAzEAvwH/AOlHPgeQVF1HDjOvyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxlHIbRXCeViaz7/AQ8Ayfoay2/6G8uFZ/4UIAU+/y0YBtbsIAU8LOoby3zqGsvNr2AhlEbNyhDwpMagV/Cjxn9f1SGXRs3KEPCkxqBn8KPGf2/RzTEcKAsf2hhZH9oYWcPERny6OAViV31rX+XNmkbh1Xu90sxFe9ZA4Ih9k0884Il6lF/ghjzgij2RMGvgh3nLPy88g+CF8IIBDwBvVHzWQBfLN6GFZ3rmBxdvGAjwij3KAETgivCJX/CGV/CFGASCHSgLy38g+Ffwh4LghR3NYkUY2nvgifCIg1/l5gf2CG8mB1Z7aB8fHx/LHR/LHeYDxkBnrx7/6XnghpPgh3vLPy88geCF8IIBDwBvVHzWQBfLN6GFZ3rmBxdv8Ilf8IZX8IXLfyAHV/CHgh0YAYLghc1iRfCKPcoAROCKGN171kDgiHuVTzzgiXqUX+CGPOCKPZEwa+CHecs/LzyD4IXwggEPAG9UfNZAF8s3oYVneuYHF28YCPCKPcoAROCK8Ilf8IZX8IUYBIIdKAvLfyD4V/CHguCFHc0qRhjae+CJ8IiTX+XmB/YQbyYHVntoHx8fH8sdH8sd5gPGQGc+/1jpeeCGk+CHe8s/LzyB4IXwggEPAG9UfNZAF8s3oYVneuYHF2/wiV/whlfwhct/IAdX8IeCHRgBguCFzSpG8Io9ygBE4IoY3UYAALoAAHzWQMhPHx8f5h9HeeYHKAsE/gUwBvUhylblBT4PkCHJRoRn5fCCZ69vyfCCZ69vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIsnxAQ8APcqEVz0odj0oOj0idwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwksLCXLZSgCJGgidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwksLCXLZSgCJGgidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwksLCXLZSgCJGgidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkid8kicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAloyfgAVF3wgjEAr/6gKAMxAL8B/wDFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcVia/nJJgJ+4JovPOCYfcZAb37gl+Cbr+CZ4JzgneCePkDgn8n/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Aw==';

// End of realtime.js file.

////////////////////////////////////////////////////////////////////////////////
// Runner
////////////////////////////////////////////////////////////////////////////////

var o306 = true;

function o51(name) {
}

function o82(name, o83) {
  o0.o1(name + " : ERROR : " +o83.o1034);
  o306 = false;
}

function o77(name, o57) {
  if (o306) {
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
