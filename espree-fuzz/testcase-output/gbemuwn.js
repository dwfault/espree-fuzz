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

if(typeof(0) === "undefined")
{
    var o0 = {
        o1: print
    }
}

// Performance.now is used in latency benchmarks, the fallback is Date.now.
var o2 = o2 || {};
o2.o3 = (function() {
  return o2.o3       ||
         o2.o4    ||
         o2.o5     ||
         o2.o6      ||
         o2.o7 ||
         Date.o3;
})();

// Simple framework for running the benchmark suites and
// computing a score based on the timing measurements.


// A benchmark has a name (string) and a function that will be run to
// do the performance measurement. The optional setup and tearDown
// arguments are functions that will be invoked before and after
// running the benchmark, but the running time of these functions will
// not be accounted for in the benchmark score.



// Benchmark results hold the benchmark and the measured time used to
// run the benchmark. The benchmark score is computed later once a
// full benchmark suite has run to completion. If latency is set to 0
// then there is no latency score for this benchmark.
function o19(o20, o21, o22) {
  this.o20 = o20;
  this.o21 = o21;
  this.o22 = o22;
}


// Automatically convert results to numbers. Used by the geometric
// mean computation.
o19.prototype.valueOf = function() {
  return this.o21;
}


// Suites of benchmarks consist of a name and the set of benchmarks in
// addition to the reference timing that the final score will be based
// on. This way, all scores are relative to a reference run and higher
// scores implies better performance.
function o23(name, o24, o25) {
  this.name = name;
  this.o24 = o24;
  this.o25 = o25;
  o23.o26.push(this);
}


// Keep track of all declared benchmark suites.
o23.o26 = [];

// Scores are not comparable across versions. Bump the version if
// you're making changes that will affect that scores, e.g. if you add
// a new benchmark or change an existing one.
o23.o27 = '9';


// Defines global benchsuite running mode that overrides benchmark suite 
// behavior. Intended to be set by the benchmark driver. Undefined 
// values here allow a benchmark to define behaviour itself.
o23.o28 = {
  o9: undefined,
  o10: undefined
};


// Override the alert function to throw an exception instead.
o29 = function(o30) {
  throw "Alert called with argument: " + o30;
};


// To make the benchmark results predictable, we replace Math.random
// with a 100% deterministic alternative.
o23.o31 = function() {
  Math.random = (function() {
    var o32 = 49734321;
    return function() {
      // Robert Jenkins' 32 bit integer hash function.
      o32 = ((o32 + 0x7ed55d16) + (o32 << 12))  & 0xffffffff;
      o32 = ((o32 ^ 0xc761c23c) ^ (o32 >>> 19)) & 0xffffffff;
      o32 = ((o32 + 0x165667b1) + (o32 << 5))   & 0xffffffff;
      o32 = ((o32 + 0xd3a2646c) ^ (o32 << 9))   & 0xffffffff;
      o32 = ((o32 + 0xfd7046c5) + (o32 << 3))   & 0xffffffff;
      o32 = ((o32 ^ 0xb55a4f09) ^ (o32 >>> 16)) & 0xffffffff;
      return (o32 & 0xfffffff) / 0x10000000;
    };
  })();
}


// Runs all registered benchmark suites and optionally yields between
// each individual benchmark to avoid running for too long in the
// context of browsers. Once done, the final score is reported to the
// runner.
o23.o33 = function(o34, o35) {
  o35 = typeof o35 === 'undefined' ? [] : o35;
  var o36 = null;
  var o26 = o23.o26;
  var length = o26.length;
  o23.o37 = [];
  var index = 0;
  function o38() {
    while (o36 || index < length) {
      if (o36) {
        o36 = o36();
      } else {
        var o39 = o26[index++];
        if (o34.o40) o34.o40(o39.name);
        if (o35.indexOf(o39.name) > -1) {
          o39.o41(o34);
        } else {
          o36 = o39.o38(o34);
        }
      }
      if (o36 && typeof o42 != 'undefined' && o42.o43) {
        o42.o43(o38, 25);
        return;
      }
    }

    // show final result
    if (o34.o44) {
      var o45 = o23.o46(o23.o37);
      var o47 = o23.o48(100 * o45);
      o34.o44(o47);
    }
  }
  o38();
}


// Counts the total number of registered benchmarks. Useful for
// showing progress as a percentage.
o23.o49 = function() {
  var o50 = 0;
  var o26 = o23.o26;
  for (var o51 = 0; o51 < o26.length; o51++) {
    o50 += o26[o51].o25.length;
  }
  return o50;
}


// Computes the geometric mean of a set of numbers.
o23.o46 = function(o52) {
  var o53 = 0;
  for (var o51 = 0; o51 < o52.length; o51++) {
    o53 += Math.o53(o52[o51]);
  }
  return Math.o54(Math.o55, o53 / o52.length);
}


// Computes the geometric mean of a set of throughput time measurements.
o23.o56 = function(o57) {
  var o53 = 0;
  for (var o51 = 0; o51 < o57.length; o51++) {
    o53 += Math.o53(o57[o51].o21);
  }
  return Math.o54(Math.o55, o53 / o57.length);
}


// Computes the geometric mean of a set of rms measurements.
o23.o58 = function(o57) {
  var o53 = 0;
  var o59 = false;
  for (var o51 = 0; o51 < o57.length; o51++) {
    if (o57[o51].o22 != 0) {
      o53 += Math.o53(o57[o51].o22);
      o59 = true;
    }
  }
  if (o59) {
    return Math.o54(Math.o55, o53 / o57.length);
  } else {
    return 0;
  }
}


// Converts a score value to a string with at least three significant
// digits.
o23.o48 = function(value) {
  if (value > 100) {
    return value.toFixed(0);
  } else {
    return value.toPrecision(3);
  }
}

// Notifies the runner that we're done running a single benchmark in
// the benchmark suite. This can be useful to report progress.
o23.prototype.o60 = function(o50) {
  this.o61.push(o50);
  if (this.o34.o60) this.o34.o60(o50.o20.name);
}


// Notifies the runner that we're done with running a suite and that
// we have a result which can be reported to the user if needed.
o23.prototype.o62 = function() {
  var o63 = o23.o56(this.o61);
  var o45 = this.o24[0] / o63;
  o23.o37.push(o45);
  if (this.o34.o62) {
    var o47 = o23.o48(100 * o45);
    this.o34.o62(this.name, o47);
  }
  if (this.o24.length == 2) {
    var o64 = o23.o58(this.o61);
    if (o64 != 0) {
      var o65 = this.o24[1] / o64;
      o23.o37.push(o65);
      if (this.o34.o62) {
        var o66 = o23.o48(100 * o65)
        this.o34.o62(this.name + "Latency", o66);
      }
    }
  }
}


o23.prototype.o41 = function(o34) {
  o23.o37.push(1);  // push default reference score.
  if (o34.o62) {
    o34.o62(this.name, "Skipped");
  }
}


// Notifies the runner that running a benchmark resulted in an error.
o23.prototype.o67 = function(o68) {
  if (this.o34.o67) {
    this.o34.o67(this.name, o68);
  }
  if (this.o34.o60) {
    this.o34.o60(this.name);
  }
}


// Runs a single benchmark for at least a second and computes the
// average time it takes to run a single iteration.
o23.prototype.o69 = function(o20, o70) {
  var o28 = o23.o28;
  var o9 = o28.o9 !== undefined 
                 ? o28.o9 
                 : o20.o9;
  var o10 = o28.o10 !== undefined 
                        ? o28.o10 
                        : o20.o10;

  function o71(o70) {
    var o72 = 0;
    var o73 = new Date();
  
  // Run either for 1 second or for the number of iterations specified
  // by minIterations, depending on the config flag doDeterministic.
    for (var o51 = 0; (o10 ? 
      o51<o20.o11 : o72 < 1000); o51++) {
      o20.o12();
      o72 = new Date() - o73;
    }
    if (o70 != null) {
      o70.o74 += o51;
      o70.o72 += o72;
    }
  }

  // Sets up data in order to skip or not the warmup phase.
  if (!o9 && o70 == null) {
    o70 = { o74: 0, o72: 0 };
  }

  if (o70 == null) {
    o71(null);
    return { o74: 0, o72: 0 };
  } else {
    o71(o70);
    // If we've run too few iterations, we continue for another second.
    if (o70.o74 < o20.o16) return o70;
    var o75 = (o70.o72 * 1000) / o70.o74;
    var o76 = (o20.o15 != null) ? o20.o15() : 0;
    this.o60(new o19(o20, o75, o76));
    return null;
  }
}


// This function starts running a suite, but stops between each
// individual benchmark in the suite and returns a continuation
// function which can be invoked to run the next benchmark. Once the
// last benchmark has been executed, null is returned.
o23.prototype.o38 = function(o34) {
  o23.o31();
  this.o61 = [];
  this.o34 = o34;
  var length = this.o25.length;
  var index = 0;
  var o39 = this;
  var o70;

  // Run the setup, the actual benchmark, and the tear down in three
  // separate steps to allow the framework to yield between any of the
  // steps.

  function o77() {
    if (index < length) {
      try {
        o39.o25[index].o17();
      } catch (o78) {
        o39.o67(o78);
        return null;
      }
      return o79;
    }
    o39.o62();
    return null;
  }

  function o79() {
    try {
      o70 = o39.o69(o39.o25[index], o70);
    } catch (o78) {
      o39.o67(o78);
      return null;
    }
    // If data is null, we're done with this benchmark.
    return (o70 == null) ? o80 : o79();
  }

  function o80() {
    try {
      o39.o25[index++].o18();
    } catch (o78) {
      o39.o67(o78);
      return null;
    }
    return o77;
  }

  // Start out running the setup.
  return o77();
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

var o81 = new o23('Gameboy', [26288412],
                                          [new o8('Gameboy',
                                                         false,
                                                         false,
                                                         20,
                                                         o82,
                                                         o83,
                                                         o84,
                                                         null,
                                                         4)]);

var o85 = null;

function o83() {

  // Check if all the types required by the code are supported.
  // If not, throw exception and quit.
  if (!(typeof Uint8Array != "undefined" &&
      typeof Int8Array != "undefined" &&
      typeof Float32Array != "undefined" &&
      typeof Int32Array != "undefined") ) {
    throw "TypedArrayUnsupported";
  }
  o85 = o86(o87);
  o88 = null;
}

function o82() {
  o73(new o89(), o85);

  o90.o91 = 0;
  o90.o92 = 250000;

  while (o90.o91 <= o90.o92) {
    o90.o12();
    o93.o12();
  }

  o94();
}

function o84() {
  o85 = null;
  o95 = null;
}

var o95 =
  '{"registerA":160,"registerB":255,"registerC":255,"registerE":11,' +
  '"registersHL":51600,"programCounter":24309,"stackPointer":49706,' +
  '"sumROM":10171578,"sumMemory":3435856,"sumMBCRam":234598,"sumVRam":0}';

// Start of browser emulation.

var o96 = { };

function o97() {
  this.o98 = function() {
    return new o99();
  }
  this.o100 = function (o101, o102) {
    var o50 = {};
    // The following line was updated since Octane 1.0 to avoid OOB access.
    o50.o70 = new Uint8Array(o101 * o102 * 4);
    return o50;
  }
  this.o103 = function (buffer, o104, o105) {
    var o106 = 0;
    for (var o51 = 0; o51 < buffer.o70.length; o51++) {
      o106 += o51 * buffer.o70[o51];
      o106 = o106 % 1000;
    }
  }
  this.o107 = function () { }
};

function o89() {
  this.o108 = function() {
    return new o97();
  }
  this.o109 = 160;
  this.o110 = 144;
  this.o111 = { o112: "visibile" };
}

function o113(o114, o115) {
}

function o116() {
}

var o93 = {
  o117 : 0,
  o118 : null ,
  o119 : function () {},
  o12: function() {
    var o120 = {o121 : this.o121};
    this.o118(o120);
  }
};

function o122 () {
  this.o123 = function() {
    return { o124 : function () {}, o119 : function() {}};
  }
  this.o125 = 48000;
  this.o126 = {}
  this.o98 = function (o127, o128, o125) {
    return { o129 : 1,
             o130 : 1,
             length : 1,
             o131 : 0.000020833333110203966,
             o125 : 48000}
  }
  this.o132 = function (o117, o133, o134) {
    o93.o117 = o117;
    o93.o121 = {
        o135 : function (o51) {return this.o136[o51];},
        o136    : []
    };
    for (var o51 = 0; o51 < o134; o51++) {
      o93.o121.o136[o51] = new Float32Array(o117);
    }
    return o93;
  }
}

var o137 = 0;

function o138() {
  return {
    o139: function() {
      o137 += 16;
      return o137;
    }
  };
}

// End of browser emulation.

// Start of helper functions.

function o140() {
  function o106(o141) {
    var o50 = 0;
    for (var o51 = 0; o51 < o141.length; o51++) {
      o50 += o141[o51];
    }
    return o50;
  }
  var o142 = {
    o143: o90.o143,
    o144: o90.o144,
    o145: o90.o145,
    o146: o90.o146,
    o147: o90.o147,
    o148: o90.o148,
    o149: o90.o149,
    o150: o90.o150,
    o151 : o106(o90.o152(o90.o153)),
    o154: o106(o90.o152(o90.o155)),
    o156: o106(o90.o152(o90.o157)),
    o158: o106(o90.o152(o90.o159))
  }
  var o160 = JSON.stringify(o142);
  if (typeof o95 != "undefined") {
    if (o160 != o95) {
      o29("Incorrect final state of processor:\n" +
            " actual   " + o160 + "\n" +
            " expected " + o95);
    }
  } else {
    o29(o160);
  }
}


function o94 () {
  //Audio API Event Handler:
  o161 = null;
  o162 = null;
  o163 = null;
  o164 = false;
  o165 = [];
  o166 = [];
  o167 = 15000;
  o168 = 25000;
  o169 = 44100;
  o170 = 0;
  o171 = false;
  o172 = 1;
  o173 = null;
  o174 = 0;
  o175 = 0;
  o176 = 0;
  o177 = 2;

  o90 = null;           //GameBoyCore object.
  o178 = null;       //GameBoyCore Timer
}


// End of helper functions.

// Original code from Grant Galitz follows.
// Modifications by Google are marked in comments.

// Start of js/other/base64.js file.

var o179 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+" , "/", "="];
var o180 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function o181(o70) {
  try {
    // The following line was modified for benchmarking:
    var o181 = o96.o182(o70);  //Use this native function when it's available, as it's a magnitude faster than the non-native code below.
  }
  catch (o68) {
    //Defaulting to non-native base64 encoding...
    var o181 = "";
    var o183 = o70.length;
    if (o183 > 0) {
      var o184 = [0, 0, 0];
      var index = 0;
      var o185 = o183 % 3;
      while (o70.length % 3 > 0) {
        //Make sure we don't do fuzzy math in the next loop...
        o70[o70.length] = " ";
      }
      while (index < o183) {
        //Keep this loop small for speed.
        o184 = [o70.charCodeAt(index++) & 0xFF, o70.charCodeAt(index++) & 0xFF, o70.charCodeAt(index++) & 0xFF];
        o181 += o179[o184[0] >> 2] + o179[((o184[0] & 0x3) << 4) | (o184[1] >> 4)] + o179[((o184[1] & 0xF) << 2) | (o184[2] >> 6)] + o179[o184[2] & 0x3F];
      }
      if (o185 > 0) {
        //Fill in the padding and recalulate the trailing six-bit group...
        o181[o181.length - 1] = "=";
        if (o185 == 2) {
          o181[o181.length - 2] = "=";
          o181[o181.length - 3] = o179[(o184[0] & 0x3) << 4];
        }
        else {
          o181[o181.length - 2] = o179[(o184[1] & 0xF) << 2];
        }
      }
    }
  }
  return o181;
}
function o86(o70) {
  try {
    // The following line was modified for benchmarking:
    var o186 = o96.o187(o70);  //Use this native function when it's available, as it's a magnitude faster than the non-native code below.
  }
  catch (o68) {
    //Defaulting to non-native base64 decoding...
    var o186 = "";
    var o183 = o70.length;
    if (o183 > 3 && o183 % 4 == 0) {
      var o188 = [0, 0, 0, 0];  //Declare this out of the loop, to speed up the ops.
      var index = 0;
      while (index < o183) {
        //Keep this loop small for speed.
        o188 = [o180.indexOf(o70.charAt(index++)), o180.indexOf(o70.charAt(index++)), o180.indexOf(o70.charAt(index++)), o180.indexOf(o70.charAt(index++))];
        o186 += String.fromCharCode((o188[0] << 2) | (o188[1] >> 4)) + String.fromCharCode(((o188[1] & 0x0F) << 4) | (o188[2] >> 2)) + String.fromCharCode(((o188[2] & 0x03) << 6) | o188[3]);
      }
      //Check for the '=' character after the loop, so we don't hose it up.
      if (o188[3] >= 0x40) {
        o186.length -= 1;
        if (o188[2] >= 0x40) {
          o186.length -= 1;
        }
      }
    }
  }
  return o186;
}
function o189(o190) {
  return o191(o190) + String.fromCharCode((o190 >> 16) & 0xFF, (o190 >> 24) & 0xFF);
}
function o191(o190) {
  return o192(o190) + String.fromCharCode((o190 >> 8) & 0xFF);
}
function o192(o190) {
  return String.fromCharCode(o190 & 0xFF);
}
function o193(o194) {
  var o195 = "";
  var length = o194.length;
  for (var index = 0; index < length; ++index) {
    if (typeof o194[index] == "number") {
      o195 += String.fromCharCode(o194[index]);
    }
  }
  return o181(o195);
}
function o196(o197) {
  var o195 = o86(o197);
  var o198 = [];
  var length = o195.length;
  for (var index = 0; index < length;) {
    o198.push(o195.charCodeAt(index++) & 0xFF);
  }
  return o198;
}

// End of js/other/base64.js file.

// Start of js/other/resampler.js file.

//JavaScript Audio Resampler (c) 2011 - Grant Galitz
function o199(o200, o201, o127, o202, o203) {
  this.o200 = o200;
  this.o201 = o201;
  this.o127 = o127 | 0;
  this.o202 = o202;
  this.o203 = !!o203;
  this.o204();
}
o199.prototype.o204 = function () {
  //Perform some checks:
  if (this.o200 > 0 && this.o201 > 0 && this.o127 > 0) {
    if (this.o200 == this.o201) {
      //Setup a resampler bypass:
      this.o205 = this.o206;    //Resampler just returns what was passed through.
      this.o207 = 1;
    }
    else {
      //Setup the interpolation resampler:
      this.o208();
      this.o205 = this.o209;      //Resampler is a custom quality interpolation algorithm.
      this.o207 = this.o200 / this.o201;
      this.o210 = false;
      this.o211 = 0;
      this.o212();
    }
  }
  else {
    throw(new Error("Invalid settings specified for the resampler."));
  }
}
o199.prototype.o208 = function () {
  var o213 = "var bufferLength = Math.min(buffer.length, this.outputBufferSize);\
  if ((bufferLength % " + this.o127 + ") == 0) {\
    if (bufferLength > 0) {\
      var ratioWeight = this.ratioWeight;\
      var weight = 0;";
  for (var o214 = 0; o214 < this.o127; ++o214) {
    o213 += "var output" + o214 + " = 0;"
  }
  o213 += "var actualPosition = 0;\
      var amountToNext = 0;\
      var alreadyProcessedTail = !this.tailExists;\
      this.tailExists = false;\
      var outputBuffer = this.outputBuffer;\
      var outputOffset = 0;\
      var currentPosition = 0;\
      do {\
        if (alreadyProcessedTail) {\
          weight = ratioWeight;";
  for (o214 = 0; o214 < this.o127; ++o214) {
    o213 += "output" + o214 + " = 0;"
  }
  o213 += "}\
        else {\
          weight = this.lastWeight;";
  for (o214 = 0; o214 < this.o127; ++o214) {
    o213 += "output" + o214 + " = this.lastOutput[" + o214 + "];"
  }
  o213 += "alreadyProcessedTail = true;\
        }\
        while (weight > 0 && actualPosition < bufferLength) {\
          amountToNext = 1 + actualPosition - currentPosition;\
          if (weight >= amountToNext) {";
  for (o214 = 0; o214 < this.o127; ++o214) {
    o213 += "output" + o214 + " += buffer[actualPosition++] * amountToNext;"
  }
  o213 += "currentPosition = actualPosition;\
            weight -= amountToNext;\
          }\
          else {";
  for (o214 = 0; o214 < this.o127; ++o214) {
    o213 += "output" + o214 + " += buffer[actualPosition" + ((o214 > 0) ? (" + " + o214) : "") + "] * weight;"
  }
  o213 += "currentPosition += weight;\
            weight = 0;\
            break;\
          }\
        }\
        if (weight == 0) {";
  for (o214 = 0; o214 < this.o127; ++o214) {
    o213 += "outputBuffer[outputOffset++] = output" + o214 + " / ratioWeight;"
  }
  o213 += "}\
        else {\
          this.lastWeight = weight;";
  for (o214 = 0; o214 < this.o127; ++o214) {
    o213 += "this.lastOutput[" + o214 + "] = output" + o214 + ";"
  }
  o213 += "this.tailExists = true;\
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
  this.o209 = Function("buffer", o213);
}
o199.prototype.o206 = function (buffer) {
  if (this.o203) {
    //Set the buffer passed as our own, as we don't need to resample it:
    this.o121 = buffer;
    return buffer.length;
  }
  else {
    //Just return the buffer passsed:
    return buffer;
  }
}
o199.prototype.o215 = function (o216) {
  if (this.o203) {
    //If we're going to access the properties directly from this object:
    return o216;
  }
  else {
    //Typed array and normal array buffer section referencing:
    try {
      return this.o121.subarray(0, o216);
    }
    catch (o68) {
      try {
        //Regular array pass:
        this.o121.length = o216;
        return this.o121;
      }
      catch (o68) {
        //Nightly Firefox 4 used to have the subarray function named as slice:
        return this.o121.slice(0, o216);
      }
    }
  }
}
o199.prototype.o212 = function () {
  //Initialize the internal buffer:
  try {
    this.o121 = new Float32Array(this.o202);
    this.o217 = new Float32Array(this.o127);
  }
  catch (o68) {
    this.o121 = [];
    this.o217 = [];
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
function o218(o127, o125, o219, o220, o221, o222) {
  this.o223 = (o127 == 2) ? 2 : 1;
  o171 = (this.o223 == 1);
  o170 = (o125 > 0 && o125 <= 0xFFFFFF) ? o125 : 44100;
  o167 = (o219 >= (o224 << 1) && o219 < o220) ? (o219 & ((o171) ? 0xFFFFFFFF : 0xFFFFFFFE)) : (o224 << 1);
  o168 = (Math.floor(o220) > o167 + this.o223) ? (o220 & ((o171) ? 0xFFFFFFFF : 0xFFFFFFFE)) : (o219 << 1);
  this.o221 = (typeof o221 == "function") ? o221 : function () {};
  o172 = (o222 >= 0 && o222 <= 1) ? o222 : 1;
  this.o225 = -1;
  this.o226 = [];
  this.o227 = null;
  this.o228 = null;
  this.o229 = false;
  this.o230 = false;
  this.o231();
}
o218.prototype.o232 = function (buffer) {
  //mozAudio:
  this.o233(buffer);
  this.o234();
}
o218.prototype.o233 = function (buffer) {
  //mozAudio:
  this.o235(buffer);
}
o218.prototype.o236 = function (buffer) {
  //Callback-centered audio APIs:
  this.o237(buffer);
  this.o238();
}
o218.prototype.o237 = function (buffer) {
  //Callback-centered audio APIs:
  var length = buffer.length;
  for (var o239 = 0; o239 < length && o174 < o168;) {
    o165[o174++] = buffer[o239++];
  }
}
/*Pass your samples into here!
Pack your samples as a one-dimenional array
With the channel samplea packed uniformly.
examples:
    mono - [left, left, left, left]
    stereo - [left, right, left, right, left, right, left, right]
*/
o218.prototype.o240 = function (buffer) {
  if (this.o225 == 0) {
    this.o232(buffer);
  }
  else if (this.o225 == 1) {
    this.o236(buffer);
  }
  else if (this.o225 == 2) {
    if (this.o241() || o164) {
      this.o236(buffer);
    }
    else if (this.o230) {
      this.o232(buffer);
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
o218.prototype.o242 = function (buffer) {
  if (this.o225 == 0) {
    this.o233(buffer);
  }
  else if (this.o225 == 1) {
    this.o237(buffer);
  }
  else if (this.o225 == 2) {
    if (this.o241() || o164) {
      this.o237(buffer);
    }
    else if (this.o230) {
      this.o233(buffer);
    }
  }
}
//Developer can use this to see how many samples to write (example: minimum buffer allotment minus remaining samples left returned from this function to make sure maximum buffering is done...)
//If -1 is returned, then that means metric could not be done.
o218.prototype.o243 = function () {
  if (this.o225 == 0) {
    //mozAudio:
    return this.o244 - this.o227.o245();
  }
  else if (this.o225 == 1) {
    //WebKit Audio:
    return (((o246() * o173.o207) >> (this.o223 - 1)) << (this.o223 - 1)) + o174;
  }
  else if (this.o225 == 2) {
    if (this.o241() || o164) {
      //Webkit Audio / Flash Plugin Audio:
      return (((o246() * o173.o207) >> (this.o223 - 1)) << (this.o223 - 1)) + o174;
    }
    else if (this.o230) {
      //mozAudio:
      return this.o244 - this.o227.o245();
    }
  }
  //Default return:
  return 0;
}
o218.prototype.o234 = function () {
  //mozAudio:
  var o247 = o167 - this.o243();
  if (o247 > 0) {
    this.o235(this.o221(o247));
  }
}
o218.prototype.o238 = function () {
  //WebKit /Flash Audio:
  var o247 = o167 - this.o243();
  if (o247 > 0) {
    this.o237(this.o221(o247));
  }
}
//If you just want your callback called for any possible refill (Execution of callback is still conditional):
o218.prototype.o248 = function () {
  if (this.o225 == 0) {
    this.o234();
  }
  else if (this.o225 == 1) {
    this.o238();
  }
  else if (this.o225 == 2) {
    if (this.o241() || o164) {
      this.o238();
    }
    else if (this.o230) {
      this.o234();
    }
  }
}
//DO NOT CALL THIS, the lib calls this internally!
o218.prototype.o231 = function () {
  try {
    throw (new Error("Select initializeWebAudio case"));  // Line added for benchmarking.
    this.o249();
    if (o250.o251 == "Linux i686") {
      //Block out mozaudio usage for Linux Firefox due to moz bugs:
      throw(new Error(""));
    }
    this.o252();
  }
  catch (o68) {
    try {
      this.o253();
    }
    catch (o68) {
      try {
        this.o254();
      }
      catch (o68) {
        throw(new Error("Browser does not support real time audio output."));
      }
    }
  }
}
o218.prototype.o249 = function () {
  //mozAudio - Synchronous Audio API
  this.o227 = new o255();
  this.o227.o256(this.o223, o170);
  this.o244 = 0;
  var o257 = (this.o223 == 2) ? [0, 0] : [0];
  var o258 = 0;
  if (o250.o251 != "MacIntel" && o250.o251 != "MacPPC") {  //Mac OS X doesn't experience this moz-bug!
    while (this.o227.o245() == 0) {
      //Mozilla Audio Bugginess Workaround (Firefox freaks out if we don't give it a prebuffer under certain OSes):
      o258 += this.o227.o259(o257);
    }
    var o260 = o258 / this.o223;
    //Double the prebuffering for windows:
    for (var index = 0; index < o260; index++) {
      this.o244 += this.o227.o259(o257);
    }
  }
  this.o244 += o258;
  o167 += this.o244;
  this.o230 = true;
}
o218.prototype.o252 = function () {
  //Fill in our own buffering up to the minimum specified:
  this.o235(getFloat32(o167));
  this.o225 = 0;
}
o218.prototype.o253 = function () {
  if (o164) {
    o261(o169, o224);
    this.o225 = 1;
  }
  else {
    throw(new Error(""));
  }
}
o218.prototype.o254 = function () {
  var o262 = o263.o264("XAudioJS");
  if (o262 == null) {
    var o265 = this;
    var o266 = o263.o267("div");
    o266.o268("style", "position: fixed; bottom: 0px; right: 0px; margin: 0px; padding: 0px; border: none; width: 8px; height: 8px; overflow: hidden; z-index: -1000; ");
    var o269 = o263.o267("div");
    o269.o268("style", "position: static; border: none; width: 0px; height: 0px; visibility: hidden; margin: 8px; padding: 0px;");
    o269.o268("id", "XAudioJS");
    o266.o270(o269);
    o263.o271("body")[0].o270(o266);
    o272.o273(
      "XAudioJS.swf",
      "XAudioJS",
      "8",
      "8",
      "9.0.0",
      "",
      {},
      {"allowscriptaccess":"always"},
      {"style":"position: static; visibility: hidden; margin: 8px; padding: 0px; border: none"},
      function (o120) {
        if (o120.o274) {
          o265.o228 = o120.o275;
        }
        else {
          o265.o225 = 1;
        }
      }
    );
  }
  else {
    this.o228 = o262;
  }
  this.o225 = 2;
}
o218.prototype.o276 = function (o277) {
  if (o277 >= 0 && o277 <= 1) {
    o172 = o277;
    if (this.o241()) {
      this.o228.o276(o172);
    }
    if (this.o230) {
      this.o227.o222 = o172;
    }
  }
}
//Moz Audio Buffer Writing Handler:
o218.prototype.o235 = function (buffer) {
  var length = this.o226.length;
  if (length > 0) {
    var o278 = this.o227.o259(this.o226);
    this.o244 += o278;
    this.o226.splice(0, o278);
  }
  length = Math.o279(buffer.length, o168 - this.o244 + this.o227.o245());
  var o278 = this.o227.o259(buffer);
  this.o244 += o278;
  for (var index = 0; length > o278; --length) {
    //Moz Audio wants us saving the tail:
    this.o226.push(buffer[index++]);
  }
}
//Checks to see if the NPAPI Adobe Flash bridge is ready yet:
o218.prototype.o241 = function () {
  if (!this.o229 && this.o228 && this.o228.o204) {
    this.o229 = true;
    this.o228.o204(this.o223, o172);
    o261(44100, o224);
  }
  return this.o229;
}
/////////END LIB
function getFloat32(o280) {
  try {
    return new Float32Array(o280);
  }
  catch (o68) {
    return new Array(o280);
  }
}
function o281(o280) {
  try {
    var o282 = new Float32Array(o280);
  }
  catch (o68) {
    var o282 = new Array(o280);
    var o283 = 0;
    do {
      o282[o283] = 0;
    } while (++o283 < o280);
  }
  return o282;
}
//Flash NPAPI Event Handler:
var o224 = 2048;      //Has to be between 2048 and 4096 (If over, then samples are ignored, if under then silence is added).
var o284 = null;
function o285() {    //The callback that flash calls...
  o286();
  return o284();
}
function o287() {  //Convert the arrays to one long string for speed.
  var o288 = "";
  var o289 = "";
  for (var index = 0; index < o224 && o175 != o176; ++index) {
    //Sanitize the buffer:
    o288 += String.fromCharCode(((Math.o279(Math.o290(o166[o175++] + 1, 0), 2) * 0x3FFF) | 0) + 0x3000);
    o289 += String.fromCharCode(((Math.o279(Math.o290(o166[o175++] + 1, 0), 2) * 0x3FFF) | 0) + 0x3000);
    if (o175 == o177) {
      o175 = 0;
    }
  }
  return o288 + o289;
}
function o291() {  //Convert the array to one long string for speed.
  var o292 = "";
  for (var index = 0; index < o224 && o175 != o176; ++index) {
    //Sanitize the buffer:
    o292 += String.fromCharCode(((Math.o279(Math.o290(o166[o175++] + 1, 0), 2) * 0x3FFF) | 0) + 0x3000);
    if (o175 == o177) {
      o175 = 0;
    }
  }
  return o292;
}
//Audio API Event Handler:
var o161 = null;
var o162 = null;
var o163 = null;
var o164 = false;
var o165 = [];
var o166 = [];
var o167 = 15000;
var o168 = 25000;
var o169 = 44100;
var o170 = 0;
var o171 = false;
var o172 = 1;
var o173 = null;
var o174 = 0;
var o175 = 0;
var o176 = 0;
var o177 = 2;
function o293(o120) {    //Web Audio API callback...
  var index = 0;
  var o294 = o120.o121.o135(0);
  var o295 = o120.o121.o135(1);
  o286();
  if (!o171) {
    //STEREO:
    while (index < o224 && o175 != o176) {
      o294[index] = o166[o175++] * o172;
      o295[index++] = o166[o175++] * o172;
      if (o175 == o177) {
        o175 = 0;
      }
    }
  }
  else {
    //MONO:
    while (index < o224 && o175 != o176) {
      o295[index] = o294[index] = o166[o175++] * o172;
      ++index;
      if (o175 == o177) {
        o175 = 0;
      }
    }
  }
  //Pad with silence if we're underrunning:
  while (index < o224) {
    o295[index] = o294[index] = 0;
    ++index;
  }
}
function o286() {
  if (o174 > 0) {
    //Resample a chunk of audio:
    var o296 = o173.o205(o297());
    var o298 = o173.o121;
    for (var o299 = 0; o299 < o296; ++o299) {
      o166[o176++] = o298[o299];
      if (o176 == o177) {
        o176 = 0;
      }
      if (o175 == o176) {
        ++o175;
        if (o175 == o177) {
          o175 = 0;
        }
      }
    }
    o174 = 0;
  }
}
function o246() {
  return ((o175 <= o176) ? 0 : o177) + o176 - o175;
}
function o297() {
  //Typed array and normal array buffer section referencing:
  try {
    return o165.subarray(0, o174);
  }
  catch (o68) {
    try {
      //Regular array pass:
      o165.length = o174;
      return o165;
    }
    catch (o68) {
      //Nightly Firefox 4 used to have the subarray function named as slice:
      return o165.slice(0, o174);
    }
  }
}
//Initialize WebKit Audio /Flash Audio Buffer:
function o261(o300, o301) {
  o165 = getFloat32(o168);
  o174 = o168;
  o175 = 0;
  o176 = 0;
  o177 = Math.o290(o168 * Math.ceil(o170 / o300), o224) << 1;
  if (o171) {
    //MONO Handling:
    o166 = o281(o177);
    o173 = new o199(o170, o300, 1, o177, true);
    o284 = o291;
  }
  else {
    //STEREO Handling:
    o177  <<= 1;
    o166 = o281(o177);
    o173 = new o199(o170, o300, 2, o177, true);
    o284 = o287;
  }
}
//Initialize WebKit Audio:
(function () {
  if (!o164) {
    try {
      // The following line was modified for benchmarking:
      o161 = new o122();              //Create a system audio context.
    }
    catch (o68) {
      try {
        o161 = new o302();                //Create a system audio context.
      }
      catch (o68) {
        return;
      }
    }
    try {
      o163 = o161.o123();            //We need to create a false input to get the chain started.
      o163.o303 = false;  //Keep this alive forever (Event handler will know when to ouput.)
      o170 = o169 = o161.o125;
      o163.buffer = o161.o98(1, 1, o169);  //Create a zero'd input buffer for the input to be valid.
      o162 = o161.o132(o224, 1, 2);      //Create 2 outputs and ignore the input buffer (Just copy buffer 1 over if mono)
      o162.o118 = o293;                //Connect the audio processing event to a handling function so we can manipulate output
      o163.o119(o162);                        //Send and chain the input to the audio manipulation.
      o162.o119(o161.o126);              //Send and chain the output of the audio manipulation to the system audio output.
      o163.o124(0);                            //Start the loop!
    }
    catch (o68) {
      return;
    }
    o164 = true;
  }
})();

// End of js/other/XAudioServer.js file.

// Start of js/other/resize.js file.

//JavaScript Image Resizer (c) 2012 - Grant Galitz
function o304(o305, o306, o307, o308, o309, o310) {
  this.o305 = Math.abs(parseInt(o305) || 0);
  this.o306 = Math.abs(parseInt(o306) || 0);
  this.o307 = Math.abs(parseInt(o307) || 0);
  this.o308 = Math.abs(parseInt(o308) || 0);
  this.o311 = (!!o309) ? 4 : 3;
  this.o310 = !!o310;
  this.o312 = this.o307 * this.o311;
  this.o313 = this.o305 * this.o311;
  this.o314 = this.o306 * this.o311;
  this.o315 = this.o312 * this.o306;
  this.o316 = this.o312 * this.o308;
  this.o204();
}
o304.prototype.o204 = function () {
  //Perform some checks:
  if (this.o305 > 0 && this.o306 > 0 && this.o307 > 0 && this.o308 > 0) {
    if (this.o305 == this.o307) {
      //Bypass the width resizer pass:
      this.o317 = this.o318;
    }
    else {
      //Setup the width resizer pass:
      this.o319 = this.o305 / this.o307;
      if (this.o319 < 1 && this.o310) {
        this.o320(true);
        this.o317 = (this.o311 == 4) ? this.o321 : this.o322;
      }
      else {
        this.o320(false);
        this.o317 = (this.o311 == 4) ? this.o323 : this.o324;
      }
    }
    if (this.o306 == this.o308) {
      //Bypass the height resizer pass:
      this.o325 = this.o318;
    }
    else {
      //Setup the height resizer pass:
      this.o326 = this.o306 / this.o308;
      if (this.o326 < 1 && this.o310) {
        this.o327(true);
        this.o325 = this.o328;
      }
      else {
        this.o327(false);
        this.o325 = (this.o311 == 4) ? this.o329 : this.o330;
      }
    }
  }
  else {
    throw(new Error("Invalid settings specified for the resizer."));
  }
}
o304.prototype.o324 = function (buffer) {
  var o207 = this.o319;
  var o331 = 0;
  var o332 = 0;
  var o333 = 0;
  var o334 = 0;
  var o335 = 0;
  var o336 = 0;
  var o337 = 0;
  var o338 = this.o313 - 2;
  var o339 = this.o312 - 2;
  var o340 = this.o341;
  var o121 = this.o342;
  do {
    for (o335 = 0; o335 < this.o314;) {
      o340[o335++] = 0;
      o340[o335++] = 0;
      o340[o335++] = 0;
    }
    o331 = o207;
    do {
      o332 = 1 + o333 - o334;
      if (o331 >= o332) {
        for (o335 = 0, o336 = o333; o335 < this.o314; o336 += o338) {
          o340[o335++] += buffer[o336++] * o332;
          o340[o335++] += buffer[o336++] * o332;
          o340[o335++] += buffer[o336] * o332;
        }
        o334 = o333 = o333 + 3;
        o331 -= o332;
      }
      else {
        for (o335 = 0, o336 = o333; o335 < this.o314; o336 += o338) {
          o340[o335++] += buffer[o336++] * o331;
          o340[o335++] += buffer[o336++] * o331;
          o340[o335++] += buffer[o336] * o331;
        }
        o334 += o331;
        break;
      }
    } while (o331 > 0 && o333 < this.o313);
    for (o335 = 0, o336 = o337; o335 < this.o314; o336 += o339) {
      o121[o336++] = o340[o335++] / o207;
      o121[o336++] = o340[o335++] / o207;
      o121[o336] = o340[o335++] / o207;
    }
    o337 += 3;
  } while (o337 < this.o312);
  return o121;
}
o304.prototype.o322 = function (buffer) {
  var o207 = (this.o305 - 1) / this.o307;
  var o331 = 0;
  var o343 = 0;
  var o336 = 0;
  var o121 = this.o342;
  for (var o344 = 0; o344 < this.o312; o344 += 3, o331 += o207) {
    //Calculate weightings:
    o345 = o331 % 1;
    o346 = 1 - o345;
    //Interpolate:
    for (o343 = o344, o336 = Math.floor(o331) * 3; o343 < this.o315; o336 += this.o313, o343 += this.o312) {
      o121[o343] = (buffer[o336] * o346) + (buffer[o336 + 3] * o345);
      o121[o343 + 1] = (buffer[o336 + 1] * o346) + (buffer[o336 + 4] * o345);
      o121[o343 + 2] = (buffer[o336 + 2] * o346) + (buffer[o336 + 5] * o345);
    }
  }
  return o121;
}
o304.prototype.o323 = function (buffer) {
  var o207 = this.o319;
  var o331 = 0;
  var o332 = 0;
  var o333 = 0;
  var o334 = 0;
  var o335 = 0;
  var o336 = 0;
  var o337 = 0;
  var o338 = this.o313 - 3;
  var o339 = this.o312 - 3;
  var o340 = this.o341;
  var o121 = this.o342;
  do {
    for (o335 = 0; o335 < this.o314;) {
      o340[o335++] = 0;
      o340[o335++] = 0;
      o340[o335++] = 0;
      o340[o335++] = 0;
    }
    o331 = o207;
    do {
      o332 = 1 + o333 - o334;
      if (o331 >= o332) {
        for (o335 = 0, o336 = o333; o335 < this.o314; o336 += o338) {
          o340[o335++] += buffer[o336++] * o332;
          o340[o335++] += buffer[o336++] * o332;
          o340[o335++] += buffer[o336++] * o332;
          o340[o335++] += buffer[o336] * o332;
        }
        o334 = o333 = o333 + 4;
        o331 -= o332;
      }
      else {
        for (o335 = 0, o336 = o333; o335 < this.o314; o336 += o338) {
          o340[o335++] += buffer[o336++] * o331;
          o340[o335++] += buffer[o336++] * o331;
          o340[o335++] += buffer[o336++] * o331;
          o340[o335++] += buffer[o336] * o331;
        }
        o334 += o331;
        break;
      }
    } while (o331 > 0 && o333 < this.o313);
    for (o335 = 0, o336 = o337; o335 < this.o314; o336 += o339) {
      o121[o336++] = o340[o335++] / o207;
      o121[o336++] = o340[o335++] / o207;
      o121[o336++] = o340[o335++] / o207;
      o121[o336] = o340[o335++] / o207;
    }
    o337 += 4;
  } while (o337 < this.o312);
  return o121;
}
o304.prototype.o321 = function (buffer) {
  var o207 = (this.o305 - 1) / this.o307;
  var o331 = 0;
  var o343 = 0;
  var o336 = 0;
  var o121 = this.o342;
  for (var o344 = 0; o344 < this.o312; o344 += 4, o331 += o207) {
    //Calculate weightings:
    o345 = o331 % 1;
    o346 = 1 - o345;
    //Interpolate:
    for (o343 = o344, o336 = Math.floor(o331) * 4; o343 < this.o315; o336 += this.o313, o343 += this.o312) {
      o121[o343] = (buffer[o336] * o346) + (buffer[o336 + 4] * o345);
      o121[o343 + 1] = (buffer[o336 + 1] * o346) + (buffer[o336 + 5] * o345);
      o121[o343 + 2] = (buffer[o336 + 2] * o346) + (buffer[o336 + 6] * o345);
      o121[o343 + 3] = (buffer[o336 + 3] * o346) + (buffer[o336 + 7] * o345);
    }
  }
  return o121;
}
o304.prototype.o330 = function (buffer) {
  var o207 = this.o326;
  var o331 = 0;
  var o332 = 0;
  var o333 = 0;
  var o334 = 0;
  var o336 = 0;
  var o337 = 0;
  var o340 = this.o347;
  var o121 = this.o348;
  do {
    for (o336 = 0; o336 < this.o312;) {
      o340[o336++] = 0;
      o340[o336++] = 0;
      o340[o336++] = 0;
    }
    o331 = o207;
    do {
      o332 = 1 + o333 - o334;
      if (o331 >= o332) {
        for (o336 = 0; o336 < this.o312;) {
          o340[o336++] += buffer[o333++] * o332;
          o340[o336++] += buffer[o333++] * o332;
          o340[o336++] += buffer[o333++] * o332;
        }
        o334 = o333;
        o331 -= o332;
      }
      else {
        for (o336 = 0, o332 = o333; o336 < this.o312;) {
          o340[o336++] += buffer[o332++] * o331;
          o340[o336++] += buffer[o332++] * o331;
          o340[o336++] += buffer[o332++] * o331;
        }
        o334 += o331;
        break;
      }
    } while (o331 > 0 && o333 < this.o315);
    for (o336 = 0; o336 < this.o312;) {
      o121[o337++] = Math.o349(o340[o336++] / o207);
      o121[o337++] = Math.o349(o340[o336++] / o207);
      o121[o337++] = Math.o349(o340[o336++] / o207);
    }
  } while (o337 < this.o316);
  return o121;
}
o304.prototype.o328 = function (buffer) {
  var o207 = (this.o306 - 1) / this.o308;
  var o331 = 0;
  var o343 = 0;
  var o336 = 0;
  var o350 = 0;
  var o351 = 0;
  var o121 = this.o348;
  do {
    //Calculate weightings:
    o345 = o331 % 1;
    o346 = 1 - o345;
    //Interpolate:
    o350 = Math.floor(o331) * this.o312;
    o351 = o350 + this.o312;
    for (o336 = 0; o336 < this.o312; ++o336) {
      o121[o343++] = (buffer[o350 + o336] * o346) + (buffer[o351 + o336] * o345);
    }
    o331 += o207;
  } while (o343 < this.o316);
  return o121;
}
o304.prototype.o329 = function (buffer) {
  var o207 = this.o326;
  var o331 = 0;
  var o332 = 0;
  var o333 = 0;
  var o334 = 0;
  var o336 = 0;
  var o337 = 0;
  var o340 = this.o347;
  var o121 = this.o348;
  do {
    for (o336 = 0; o336 < this.o312;) {
      o340[o336++] = 0;
      o340[o336++] = 0;
      o340[o336++] = 0;
      o340[o336++] = 0;
    }
    o331 = o207;
    do {
      o332 = 1 + o333 - o334;
      if (o331 >= o332) {
        for (o336 = 0; o336 < this.o312;) {
          o340[o336++] += buffer[o333++] * o332;
          o340[o336++] += buffer[o333++] * o332;
          o340[o336++] += buffer[o333++] * o332;
          o340[o336++] += buffer[o333++] * o332;
        }
        o334 = o333;
        o331 -= o332;
      }
      else {
        for (o336 = 0, o332 = o333; o336 < this.o312;) {
          o340[o336++] += buffer[o332++] * o331;
          o340[o336++] += buffer[o332++] * o331;
          o340[o336++] += buffer[o332++] * o331;
          o340[o336++] += buffer[o332++] * o331;
        }
        o334 += o331;
        break;
      }
    } while (o331 > 0 && o333 < this.o315);
    for (o336 = 0; o336 < this.o312;) {
      o121[o337++] = Math.o349(o340[o336++] / o207);
      o121[o337++] = Math.o349(o340[o336++] / o207);
      o121[o337++] = Math.o349(o340[o336++] / o207);
      o121[o337++] = Math.o349(o340[o336++] / o207);
    }
  } while (o337 < this.o316);
  return o121;
}
o304.prototype.o352 = function (buffer) {
  var o207 = (this.o306 - 1) / this.o308;
  var o331 = 0;
  var o343 = 0;
  var o336 = 0;
  var o121 = this.o348;
  while (o336 < this.o316) {
    //Calculate weightings:
    o345 = o331 % 1;
    o346 = 1 - o345;
    //Interpolate:
    for (o336 = Math.floor(o331) * 4; o336 < this.o312; o336 += 4) {
      o121[o343++] = (buffer[o336] * o346) + (buffer[o336 + 4] * o345);
      o121[o343++] = (buffer[o336 + 1] * o346) + (buffer[o336 + 5] * o345);
      o121[o343++] = (buffer[o336 + 2] * o346) + (buffer[o336 + 6] * o345);
      o121[o343++] = (buffer[o336 + 3] * o346) + (buffer[o336 + 7] * o345);
    }
    o331 += o207;
  }
  return o121;
}
o304.prototype.o353 = function (buffer) {
  return this.o325(this.o317(buffer));
}
o304.prototype.o318 = function (buffer) {
  //Just return the buffer passsed:
  return buffer;
}
o304.prototype.o320 = function (o354) {
  //Initialize the internal width pass buffers:
  this.o342 = this.o355(this.o315);
  if (!o354) {
    this.o341 = this.o355(this.o314);
  }
}
o304.prototype.o327 = function (o354) {
  //Initialize the internal height pass buffers:
  this.o348 = this.o356(this.o316);
  if (!o354) {
    this.o347 = this.o355(this.o312);
  }
}
o304.prototype.o355 = function (o357) {
  //Generate a float32 typed array buffer:
  try {
    return new Float32Array(o357);
  }
  catch (o68) {
    return [];
  }
}
o304.prototype.o356 = function (o357) {
  //Generate a uint8 typed array buffer:
  try {
    return this.o358(new Uint8Array(o357));
  }
  catch (o68) {
    return [];
  }
}
o304.prototype.o358 = function (o359) {
  o359[0] = -1;
  o359[0] >>= 0;
  if (o359[0] != 0xFF) {
    return [];
  }
  else {
    return o359;
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
function o360(o361, o362) {
  //Params, etc...
  this.o361 = o361;            //Canvas DOM object for drawing out the graphics to.
  this.o363 = null;          // LCD Context
  this.o362 = o362;          //The game's ROM.
  //CPU Registers and Flags:
  this.o143 = 0x01;             //Register A (Accumulator)
  this.o364 = true;               //Register F  - Result was zero
  this.o365 = false;            //Register F  - Subtraction was executed
  this.o366 = true;            //Register F  - Half carry or half borrow
  this.o367 = true;              //Register F  - Carry or borrow
  this.o144 = 0x00;            //Register B
  this.o145 = 0x13;            //Register C
  this.o368 = 0x00;            //Register D
  this.o146 = 0xD8;            //Register E
  this.o148 = 0x014D;          //Registers H and L combined
  this.o150 = 0xFFFE;          //Stack Pointer
  this.o149 = 0x0100;        //Program Counter
  //Some CPU Emulation State Variables:
  this.o369 = 0;          //Relative CPU clocking to speed set, rounded appropriately.
  this.o370 = 0;        //Relative CPU clocking to speed set base.
  this.o371 = 0;        //Relative CPU clocking to speed set, the directly used value.
  this.o372 = 0;      //Clocking per iteration rounding catch.
  this.o373 = 0;    //CPU clocks per iteration at 1x speed.
  this.o374 = 0;          //HALT clocking overrun carry over.
  this.o375 = true;          //Whether we're in the GBC boot ROM.
  this.o376 = false;          //Updated upon ROM loading...
  this.o377 = false;        //Did we boot to the GBC boot ROM?
  this.o378 = false;              //Has the CPU been suspended until the next interrupt?
  this.o379 = false;        //Did we trip the DMG Halt bug?
  this.o380 = 3;            //Has the emulation been paused or a frame has ended?
  this.o381 = true;              //Are interrupts enabled?
  this.o382 = 0;          //CPU IRQ assertion.
  this.o383 = 0;        //IF Register
  this.o384 = 0;          //IE Register
  this.o385 = false;          //HDMA Transfer Flag - GBC only
  this.o386 = 0;              //The number of clock cycles emulated.
  this.o387 = 0;        //GBC double speed clocking shifter.
  this.o388 = 0xFF;              //Joypad State (two four-bit states actually)
  this.o389 = false;          //CPU STOP status.
  //Main RAM, MBC RAM, GBC Main RAM, VRAM, etc.
  this.o390 = [];            //Array of functions mapped to read back memory
  this.o391 = [];            //Array of functions mapped to write to memory
  this.o392 = [];          //Array of functions mapped to read back 0xFFXX memory
  this.o393 = [];          //Array of functions mapped to write to 0xFFXX memory
  this.o153 = [];                //The full ROM file dumped to an array.
  this.o155 = [];              //Main Core Memory
  this.o157 = [];              //Switchable RAM (Used by games for more RAM) for the main memory range 0xA000 - 0xC000.
  this.o394 = [];                //Extra VRAM bank for GBC.
  this.o395 = [];            //GBC main RAM Banks
  this.o396 = false;            //MBC1 Type (4/32, 16/8)
  this.o397 = false;      //MBC RAM Access Control.
  this.o398 = 0;          //MBC Currently Indexed RAM Bank
  this.o399 = -0xA000;    //MBC Position Adder;
  this.o400 = false;              //GameBoy Color detection.
  this.o401 = 1;            //Currently Switched GameBoy Color ram bank
  this.o402 = -0xD000;      //GBC RAM offset from address start.
  this.o403 = -0xF000;    //GBC RAM (ECHO mirroring) offset from address start.
  this.o404 = [0, 1, 2, 4, 16];      //Used to map the RAM banks to maximum size the MBC used can do.
  this.o405 = 0;            //Offset of the ROM bank switching.
  this.o406 = 0;          //The parsed current ROM bank selection.
  this.o407 = 0;            //Cartridge Type
  this.name = "";                //Name of the game
  this.o408 = "";              //Game code (Suffix for older games)
  this.o409 = false;          //A boolean to see if this was loaded in as a save state.
  this.o410 = "";        //When loaded in as a save state, this will not be empty.
  this.o411 = 0;            //Tracker for STAT triggering.
  this.o412 = 0;              //The scan line mode (for lines 1-144 it's 2-3-0, for 145-154 it's 1)
  this.o413 = 252;            //Mode 3 extra clocking counter (Depends on how many sprites are on the current line.).
  this.o414 = false;      //Should we trigger an interrupt if LY==LYC?
  this.o415 = false;        //Should we trigger an interrupt if in mode 2?
  this.o416 = false;        //Should we trigger an interrupt if in mode 1?
  this.o417 = false;        //Should we trigger an interrupt if in mode 0?
  this.o418 = false;            //Is the emulated LCD controller on?
  this.o419 = [];            //Array of functions to handle each scan line we do (onscreen + offscreen)
  this.o420 = [function (o421) { 
        "use strict";
    //Array of line 0 function to handle the LCD controller when it's off (Do nothing!).
  }];
  this.o422 = null;            //Pointer to either LINECONTROL or DISPLAYOFFCONTROL.
  this.o423();        //Compile the LCD controller functions.
  //RTC (Real Time Clock for MBC3):
  this.o424 = false;
  this.o425 = 0;          //RTC latched seconds.
  this.o426 = 0;          //RTC latched minutes.
  this.o427 = 0;            //RTC latched hours.
  this.o428 = 0;            //RTC latched lower 8-bits of the day counter.
  this.o429 = 0;            //RTC latched high-bit of the day counter.
  this.o430 = 0;            //RTC seconds counter.
  this.o431 = 0;            //RTC minutes counter.
  this.o432 = 0;              //RTC hours counter.
  this.o433 = 0;              //RTC days counter.
  this.o434 = false;        //Did the RTC overflow and wrap the day counter?
  this.o435 = false;            //Is the RTC allowed to clock up?
  //Gyro:
  this.o436 = 127;
  this.o437 = 127;
  this.o438 = 127;
  this.o439 = 127;
  //Sound variables:
  this.o440 = null;            //XAudioJS handle
  this.o441 = 0;            //Length of the sound buffers.
  this.o442 = 0;              //Length of the sound buffer for one channel.
  this.o443 = [                //Map the duty values given to ones we can work with.
    [false, false, false, false, false, false, false, true],
    [true, false, false, false, false, false, false, true],
    [true, false, false, false, false, true, true, true],
    [false, true, true, true, true, true, true, false]
  ];
  this.o444 = [];            //The audio buffer we're working on.
  this.o445 = 0;          //Buffer maintenance metric.
  this.o446 = null;
  this.o447 = null;
  this.o448 = null;
  this.o449();
  this.o450 = false;      //As its name implies
  this.o451 = null;          //Channel 3 adjusted sample buffer.
  //Vin Shit:
  this.o452 = 8;    //Computed post-mixing volume.
  this.o453 = 8;    //Computed post-mixing volume.
  //Channel paths enabled:
  this.o454 = false;
  this.o455 = false;
  this.o456 = false;
  this.o457 = false;
  this.o458 = false;
  this.o459 = false;
  this.o460 = false;
  this.o461 = false;
  //Channel output level caches:
  this.o462 = 0;
  this.o463 = 0;
  this.o464 = 0;
  this.o465 = 0;
  this.o466 = 0;
  this.o467 = 0;
  this.o468 = 0;
  this.o469 = 0;
  this.o470 = 0;
  this.o471 = 0;
  this.o472 = 0;
  this.o473 = 0;
  this.o474 = 0;
  this.o475 = 0;
  this.o476 = 0;
  this.o477 = 0;
  this.o478 = 0;
  this.o479 = 0;
  this.o480 = 0;
  this.o481 = 0;
  this.o482 = 0;
  //Pre-multipliers to cache some calculations:
  this.o483();
  this.o484 = 0;        //Premultiplier for audio samples per instruction.
  //Audio generation counters:
  this.o485 = 0;        //Used to sample the audio system every x CPU instructions.
  this.o486 = 0;        //Used to keep alignment on audio generation.
  this.o487 = 0;          //Used to keep alignment on the number of samples to output (Realign from counter alias).
  //Timing Variables
  this.o488 = 0;        //Times for how many instructions to execute before ending the loop.
  this.o489 = 56;          //DIV Ticks Counter (Invisible lower 8-bit)
  this.o490 = 60;          //Counter for how many instructions have been executed on a scanline so far.
  this.o491 = 0;        //Counter for the TIMA timer.
  this.o492 = false;      //Is TIMA enabled?
  this.o493 = 1024;        //Timer Max Ticks
  this.o494 = 0;        //Serial IRQ Timer
  this.o495 = 0;      //Serial Transfer Shift Timer
  this.o496 = 0;  //Serial Transfer Shift Timer Refill
  this.o497 = 0;      //Are the interrupts on queue to be enabled?
  var o498 = o138();     // The line is changed for benchmarking.
  this.o499 = o498.o139();//The last time we iterated the main loop.
  o498 = o138();         // The line is changed for benchmarking.
  this.o500 = o498.o139();
  this.o501 = 0;
  this.o502 = 0;      //Actual scan line...
  this.o503 = 0;    //Last rendered scan line...
  this.o504 = 0;
  this.o505 = 0;
  this.o506 = 0;      //Post-Halt clocking.
  //ROM Cartridge Components:
  this.o507 = false;          //Does the cartridge use MBC1?
  this.o508 = false;          //Does the cartridge use MBC2?
  this.o509 = false;          //Does the cartridge use MBC3?
  this.o510 = false;          //Does the cartridge use MBC5?
  this.o511 = false;          //Does the cartridge use MBC7?
  this.o512 = false;          //Does the cartridge use save RAM?
  this.o513 = false;        //...
  this.o514 = false;        //Does the cartridge use the RUMBLE addressing (modified MBC5)?
  this.o515 = false;        //Is the cartridge actually a GameBoy Camera?
  this.o516 = false;        //Does the cartridge use TAMA5? (Tamagotchi Cartridge)
  this.o517 = false;          //Does the cartridge use HuC3 (Hudson Soft / modified MBC3)?
  this.o518 = false;          //Does the cartridge use HuC1 (Hudson Soft / modified MBC1)?
  this.o519 = false;        //Does the cartridge have an RTC?
  this.o520 = [          // 1 Bank = 16 KBytes = 256 Kbits
    2, 4, 8, 16, 32, 64, 128, 256, 512
  ];
  this.o520[0x52] = 72;
  this.o520[0x53] = 80;
  this.o520[0x54] = 96;
  this.o521 = 0;          //How many RAM banks were actually allocated?
  ////Graphics Variables
  this.o522 = 0;          //Current VRAM bank for GBC.
  this.o523 = 0;          //Register SCX (X-Scroll)
  this.o524 = 0;          //Register SCY (Y-Scroll)
  this.o525 = false;      //Is the windows enabled?
  this.o526 = false;        //Are sprites enabled?
  this.o527 = true;    //Are we doing 8x8 or 8x16 sprites?
  this.o528 = true;          //Is the BG enabled?
  this.o529 = true;      //Can we flag the BG for priority over sprites?
  this.o530 = 0;    //The current bank of the character map the window uses.
  this.o531 = 0;  //The current bank of the character map the BG uses.
  this.o532 = 0x80;  //Fast mapping of the tile numbering/
  this.o533 = 0;            //Current Y offset of the window.
  this.o534 = 0;            //Current X offset of the window.
  this.o535 = 0;            //To prevent the repeating of drawing a blank screen.
  this.o536 = false;          //Throttle how many draws we can do to once per iteration.
  this.o537 = -1;      //mid-scanline rendering offset.
  this.o538 = 0;            //track the x-coord limit for line rendering (mid-scanline usage).
  this.o539 = 0;            //The x-coord we left off at for mid-scanline rendering.
  //BG Tile Pointer Caches:
  this.o540 = null;
  this.o541 = null;
  this.o542 = null;
  //Tile Data Cache:
  this.o543 = null;
  //Palettes:
  this.o544 = [0xEFFFDE, 0xADD794, 0x529273, 0x183442];      //"Classic" GameBoy palette colors.
  this.o545 = null;
  this.o546 = null;
  this.o547 = null;
  this.o548 = null;
  this.o549 = null;
  this.o550 = null;
  this.o551 = null;
  this.o552 = null;
  this.o553 = null;
  this.o554 = null;
  this.o555 = null;
  this.o556 = null;
  this.o557 = this.o558;
  this.o559 = this.o560;
  this.o561 = false;
  this.o562 = null;      //Reference to the BG rendering function.
  this.o563 = null;    //Reference to the window rendering function.
  this.o564 = null;    //Reference to the OAM rendering function.
  this.o565 = [];        //The internal frame-buffer.
  this.o566 = null;      //The secondary gfx buffer that holds the converted RGBA values.
  this.o567 = null;      //imageData handle
  this.o568 = 0;        //Temp variable for holding the current working framebuffer offset.
  //Variables used for scaling in JS:
  this.o569 = this.o570 = 160;
  this.o571 = this.o572 = 144;
  this.o573 = this.o569 * this.o571 * 4;
  //Initialize the white noise cache tables ahead of time:
  this.o574();
}

// Start of code changed for benchmarking (removed ROM):
o360.prototype.o575 = [];
o360.prototype.o576 = [];
// End of code changed for benchmarking.

o360.prototype.o577 = [  //Dump of the post-BOOT I/O register state (From gambatte):
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
o360.prototype.o578 = [
  //NOP
  //#0x00:
  function (o421) {"use strict";
    //Do Nothing...
  },
  //LD BC, nn
  //#0x01:
  function (o421) {"use strict";
    o421.o145 = o421.o390[o421.o149](o421, o421.o149);
    o421.o144 = o421.o579((o421.o149 + 1) & 0xFFFF);
    o421.o149 = (o421.o149 + 2) & 0xFFFF;
  },
  //LD (BC), A
  //#0x02:
  function (o421) {"use strict";
    o421.o580((o421.o144 << 8) | o421.o145, o421.o143);
  },
  //INC BC
  //#0x03:
  function (o421) {"use strict";
    var o581 = ((o421.o144 << 8) | o421.o145) + 1;
    o421.o144 = (o581 >> 8) & 0xFF;
    o421.o145 = o581 & 0xFF;
  },
  //INC B
  //#0x04:
  function (o421) {"use strict";
    o421.o144 = (o421.o144 + 1) & 0xFF;
    o421.o364 = (o421.o144 == 0);
    o421.o366 = ((o421.o144 & 0xF) == 0);
    o421.o365 = false;
  },
  //DEC B
  //#0x05:
  function (o421) {"use strict";
    o421.o144 = (o421.o144 - 1) & 0xFF;
    o421.o364 = (o421.o144 == 0);
    o421.o366 = ((o421.o144 & 0xF) == 0xF);
    o421.o365 = true;
  },
  //LD B, n
  //#0x06:
  function (o421) {"use strict";
    o421.o144 = o421.o390[o421.o149](o421, o421.o149);
    o421.o149 = (o421.o149 + 1) & 0xFFFF;
  },
  //RLCA
  //#0x07:
  function (o421) {"use strict";
    o421.o367 = (o421.o143 > 0x7F);
    o421.o143 = ((o421.o143 << 1) & 0xFF) | (o421.o143 >> 7);
    o421.o364 = o421.o365 = o421.o366 = false;
  },
  //LD (nn), SP
  //#0x08:
  function (o421) {"use strict";
    var o581 = (o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149);
    o421.o149 = (o421.o149 + 2) & 0xFFFF;
    o421.o580(o581, o421.o150 & 0xFF);
    o421.o580((o581 + 1) & 0xFFFF, o421.o150 >> 8);
  },
  //ADD HL, BC
  //#0x09:
  function (o421) {"use strict";
    var o582 = o421.o148 + ((o421.o144 << 8) | o421.o145);
    o421.o366 = ((o421.o148 & 0xFFF) > (o582 & 0xFFF));
    o421.o367 = (o582 > 0xFFFF);
    o421.o148 = o582 & 0xFFFF;
    o421.o365 = false;
  },
  //LD A, (BC)
  //#0x0A:
  function (o421) {"use strict";
    o421.o143 = o421.o579((o421.o144 << 8) | o421.o145);
  },
  //DEC BC
  //#0x0B:
  function (o421) {"use strict";
    var o581 = (((o421.o144 << 8) | o421.o145) - 1) & 0xFFFF;
    o421.o144 = o581 >> 8;
    o421.o145 = o581 & 0xFF;
  },
  //INC C
  //#0x0C:
  function (o421) {"use strict";
    o421.o145 = (o421.o145 + 1) & 0xFF;
    o421.o364 = (o421.o145 == 0);
    o421.o366 = ((o421.o145 & 0xF) == 0);
    o421.o365 = false;
  },
  //DEC C
  //#0x0D:
  function (o421) {"use strict";
    o421.o145 = (o421.o145 - 1) & 0xFF;
    o421.o364 = (o421.o145 == 0);
    o421.o366 = ((o421.o145 & 0xF) == 0xF);
    o421.o365 = true;
  },
  //LD C, n
  //#0x0E:
  function (o421) {"use strict";
    o421.o145 = o421.o390[o421.o149](o421, o421.o149);
    o421.o149 = (o421.o149 + 1) & 0xFFFF;
  },
  //RRCA
  //#0x0F:
  function (o421) {"use strict";
    o421.o143 = (o421.o143 >> 1) | ((o421.o143 & 1) << 7);
    o421.o367 = (o421.o143 > 0x7F);
    o421.o364 = o421.o365 = o421.o366 = false;
  },
  //STOP
  //#0x10:
  function (o421) {"use strict";
    if (o421.o400) {
      if ((o421.o155[0xFF4D] & 0x01) == 0x01) {    //Speed change requested.
        if (o421.o155[0xFF4D] > 0x7F) {        //Go back to single speed mode.
          o113("Going into single clock speed mode.", 0);
          o421.o387 = 0;
          o421.o155[0xFF4D] &= 0x7F;        //Clear the double speed mode flag.
        }
        else {                        //Go to double speed mode.
          o113("Going into double clock speed mode.", 0);
          o421.o387 = 1;
          o421.o155[0xFF4D] |= 0x80;        //Set the double speed mode flag.
        }
        o421.o155[0xFF4D] &= 0xFE;          //Reset the request bit.
      }
      else {
        o421.o583();
      }
    }
    else {
      o421.o583();
    }
  },
  //LD DE, nn
  //#0x11:
  function (o421) {"use strict";
    o421.o146 = o421.o390[o421.o149](o421, o421.o149);
    o421.o368 = o421.o579((o421.o149 + 1) & 0xFFFF);
    o421.o149 = (o421.o149 + 2) & 0xFFFF;
  },
  //LD (DE), A
  //#0x12:
  function (o421) {"use strict";
    o421.o580((o421.o368 << 8) | o421.o146, o421.o143);
  },
  //INC DE
  //#0x13:
  function (o421) {"use strict";
    var o581 = ((o421.o368 << 8) | o421.o146) + 1;
    o421.o368 = (o581 >> 8) & 0xFF;
    o421.o146 = o581 & 0xFF;
  },
  //INC D
  //#0x14:
  function (o421) {"use strict";
    o421.o368 = (o421.o368 + 1) & 0xFF;
    o421.o364 = (o421.o368 == 0);
    o421.o366 = ((o421.o368 & 0xF) == 0);
    o421.o365 = false;
  },
  //DEC D
  //#0x15:
  function (o421) {"use strict";
    o421.o368 = (o421.o368 - 1) & 0xFF;
    o421.o364 = (o421.o368 == 0);
    o421.o366 = ((o421.o368 & 0xF) == 0xF);
    o421.o365 = true;
  },
  //LD D, n
  //#0x16:
  function (o421) {"use strict";
    o421.o368 = o421.o390[o421.o149](o421, o421.o149);
    o421.o149 = (o421.o149 + 1) & 0xFFFF;
  },
  //RLA
  //#0x17:
  function (o421) {"use strict";
    var o584 = (o421.o367) ? 1 : 0;
    o421.o367 = (o421.o143 > 0x7F);
    o421.o143 = ((o421.o143 << 1) & 0xFF) | o584;
    o421.o364 = o421.o365 = o421.o366 = false;
  },
  //JR n
  //#0x18:
  function (o421) {"use strict";
    o421.o149 = (o421.o149 + ((o421.o390[o421.o149](o421, o421.o149) << 24) >> 24) + 1) & 0xFFFF;
  },
  //ADD HL, DE
  //#0x19:
  function (o421) {"use strict";
    var o582 = o421.o148 + ((o421.o368 << 8) | o421.o146);
    o421.o366 = ((o421.o148 & 0xFFF) > (o582 & 0xFFF));
    o421.o367 = (o582 > 0xFFFF);
    o421.o148 = o582 & 0xFFFF;
    o421.o365 = false;
  },
  //LD A, (DE)
  //#0x1A:
  function (o421) {"use strict";
    o421.o143 = o421.o579((o421.o368 << 8) | o421.o146);
  },
  //DEC DE
  //#0x1B:
  function (o421) {"use strict";
    var o581 = (((o421.o368 << 8) | o421.o146) - 1) & 0xFFFF;
    o421.o368 = o581 >> 8;
    o421.o146 = o581 & 0xFF;
  },
  //INC E
  //#0x1C:
  function (o421) {"use strict";
    o421.o146 = (o421.o146 + 1) & 0xFF;
    o421.o364 = (o421.o146 == 0);
    o421.o366 = ((o421.o146 & 0xF) == 0);
    o421.o365 = false;
  },
  //DEC E
  //#0x1D:
  function (o421) {"use strict";
    o421.o146 = (o421.o146 - 1) & 0xFF;
    o421.o364 = (o421.o146 == 0);
    o421.o366 = ((o421.o146 & 0xF) == 0xF);
    o421.o365 = true;
  },
  //LD E, n
  //#0x1E:
  function (o421) {"use strict";
    o421.o146 = o421.o390[o421.o149](o421, o421.o149);
    o421.o149 = (o421.o149 + 1) & 0xFFFF;
  },
  //RRA
  //#0x1F:
  function (o421) {"use strict";
    var o584 = (o421.o367) ? 0x80 : 0;
    o421.o367 = ((o421.o143 & 1) == 1);
    o421.o143 = (o421.o143 >> 1) | o584;
    o421.o364 = o421.o365 = o421.o366 = false;
  },
  //JR NZ, n
  //#0x20:
  function (o421) {"use strict";
    if (!o421.o364) {
      o421.o149 = (o421.o149 + ((o421.o390[o421.o149](o421, o421.o149) << 24) >> 24) + 1) & 0xFFFF;
      o421.o386 += 4;
    }
    else {
      o421.o149 = (o421.o149 + 1) & 0xFFFF;
    }
  },
  //LD HL, nn
  //#0x21:
  function (o421) {"use strict";
    o421.o148 = (o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149);
    o421.o149 = (o421.o149 + 2) & 0xFFFF;
  },
  //LDI (HL), A
  //#0x22:
  function (o421) {"use strict";
    o421.o391[o421.o148](o421, o421.o148, o421.o143);
    o421.o148 = (o421.o148 + 1) & 0xFFFF;
  },
  //INC HL
  //#0x23:
  function (o421) {"use strict";
    o421.o148 = (o421.o148 + 1) & 0xFFFF;
  },
  //INC H
  //#0x24:
  function (o421) {"use strict";
    var o585 = ((o421.o148 >> 8) + 1) & 0xFF;
    o421.o364 = (o585 == 0);
    o421.o366 = ((o585 & 0xF) == 0);
    o421.o365 = false;
    o421.o148 = (o585 << 8) | (o421.o148 & 0xFF);
  },
  //DEC H
  //#0x25:
  function (o421) {"use strict";
    var o585 = ((o421.o148 >> 8) - 1) & 0xFF;
    o421.o364 = (o585 == 0);
    o421.o366 = ((o585 & 0xF) == 0xF);
    o421.o365 = true;
    o421.o148 = (o585 << 8) | (o421.o148 & 0xFF);
  },
  //LD H, n
  //#0x26:
  function (o421) {"use strict";
    o421.o148 = (o421.o390[o421.o149](o421, o421.o149) << 8) | (o421.o148 & 0xFF);
    o421.o149 = (o421.o149 + 1) & 0xFFFF;
  },
  //DAA
  //#0x27:
  function (o421) {"use strict";
    if (!o421.o365) {
      if (o421.o367 || o421.o143 > 0x99) {
        o421.o143 = (o421.o143 + 0x60) & 0xFF;
        o421.o367 = true;
      }
      if (o421.o366 || (o421.o143 & 0xF) > 0x9) {
        o421.o143 = (o421.o143 + 0x06) & 0xFF;
        o421.o366 = false;
      }
    }
    else if (o421.o367 && o421.o366) {
      o421.o143 = (o421.o143 + 0x9A) & 0xFF;
      o421.o366 = false;
    }
    else if (o421.o367) {
      o421.o143 = (o421.o143 + 0xA0) & 0xFF;
    }
    else if (o421.o366) {
      o421.o143 = (o421.o143 + 0xFA) & 0xFF;
      o421.o366 = false;
    }
    o421.o364 = (o421.o143 == 0);
  },
  //JR Z, n
  //#0x28:
  function (o421) {"use strict";
    if (o421.o364) {
      o421.o149 = (o421.o149 + ((o421.o390[o421.o149](o421, o421.o149) << 24) >> 24) + 1) & 0xFFFF;
      o421.o386 += 4;
    }
    else {
      o421.o149 = (o421.o149 + 1) & 0xFFFF;
    }
  },
  //ADD HL, HL
  //#0x29:
  function (o421) {"use strict";
    o421.o366 = ((o421.o148 & 0xFFF) > 0x7FF);
    o421.o367 = (o421.o148 > 0x7FFF);
    o421.o148 = (o421.o148 << 1) & 0xFFFF;
    o421.o365 = false;
  },
  //LDI A, (HL)
  //#0x2A:
  function (o421) {"use strict";
    o421.o143 = o421.o390[o421.o148](o421, o421.o148);
    o421.o148 = (o421.o148 + 1) & 0xFFFF;
  },
  //DEC HL
  //#0x2B:
  function (o421) {"use strict";
    o421.o148 = (o421.o148 - 1) & 0xFFFF;
  },
  //INC L
  //#0x2C:
  function (o421) {"use strict";
    var o586 = (o421.o148 + 1) & 0xFF;
    o421.o364 = (o586 == 0);
    o421.o366 = ((o586 & 0xF) == 0);
    o421.o365 = false;
    o421.o148 = (o421.o148 & 0xFF00) | o586;
  },
  //DEC L
  //#0x2D:
  function (o421) {"use strict";
    var o586 = (o421.o148 - 1) & 0xFF;
    o421.o364 = (o586 == 0);
    o421.o366 = ((o586 & 0xF) == 0xF);
    o421.o365 = true;
    o421.o148 = (o421.o148 & 0xFF00) | o586;
  },
  //LD L, n
  //#0x2E:
  function (o421) {"use strict";
    o421.o148 = (o421.o148 & 0xFF00) | o421.o390[o421.o149](o421, o421.o149);
    o421.o149 = (o421.o149 + 1) & 0xFFFF;
  },
  //CPL
  //#0x2F:
  function (o421) {"use strict";
    o421.o143 ^= 0xFF;
    o421.o365 = o421.o366 = true;
  },
  //JR NC, n
  //#0x30:
  function (o421) {"use strict";
    if (!o421.o367) {
      o421.o149 = (o421.o149 + ((o421.o390[o421.o149](o421, o421.o149) << 24) >> 24) + 1) & 0xFFFF;
      o421.o386 += 4;
    }
    else {
      o421.o149 = (o421.o149 + 1) & 0xFFFF;
    }
  },
  //LD SP, nn
  //#0x31:
  function (o421) {"use strict";
    o421.o150 = (o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149);
    o421.o149 = (o421.o149 + 2) & 0xFFFF;
  },
  //LDD (HL), A
  //#0x32:
  function (o421) {"use strict";
    o421.o391[o421.o148](o421, o421.o148, o421.o143);
    o421.o148 = (o421.o148 - 1) & 0xFFFF;
  },
  //INC SP
  //#0x33:
  function (o421) {"use strict";
    o421.o150 = (o421.o150 + 1) & 0xFFFF;
  },
  //INC (HL)
  //#0x34:
  function (o421) {"use strict";
    var o581 = (o421.o390[o421.o148](o421, o421.o148) + 1) & 0xFF;
    o421.o364 = (o581 == 0);
    o421.o366 = ((o581 & 0xF) == 0);
    o421.o365 = false;
    o421.o391[o421.o148](o421, o421.o148, o581);
  },
  //DEC (HL)
  //#0x35:
  function (o421) {"use strict";
    var o581 = (o421.o390[o421.o148](o421, o421.o148) - 1) & 0xFF;
    o421.o364 = (o581 == 0);
    o421.o366 = ((o581 & 0xF) == 0xF);
    o421.o365 = true;
    o421.o391[o421.o148](o421, o421.o148, o581);
  },
  //LD (HL), n
  //#0x36:
  function (o421) {"use strict";
    o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o149](o421, o421.o149));
    o421.o149 = (o421.o149 + 1) & 0xFFFF;
  },
  //SCF
  //#0x37:
  function (o421) {"use strict";
    o421.o367 = true;
    o421.o365 = o421.o366 = false;
  },
  //JR C, n
  //#0x38:
  function (o421) {"use strict";
    if (o421.o367) {
      o421.o149 = (o421.o149 + ((o421.o390[o421.o149](o421, o421.o149) << 24) >> 24) + 1) & 0xFFFF;
      o421.o386 += 4;
    }
    else {
      o421.o149 = (o421.o149 + 1) & 0xFFFF;
    }
  },
  //ADD HL, SP
  //#0x39:
  function (o421) {"use strict";
    var o582 = o421.o148 + o421.o150;
    o421.o366 = ((o421.o148 & 0xFFF) > (o582 & 0xFFF));
    o421.o367 = (o582 > 0xFFFF);
    o421.o148 = o582 & 0xFFFF;
    o421.o365 = false;
  },
  //LDD A, (HL)
  //#0x3A:
  function (o421) {"use strict";
    o421.o143 = o421.o390[o421.o148](o421, o421.o148);
    o421.o148 = (o421.o148 - 1) & 0xFFFF;
  },
  //DEC SP
  //#0x3B:
  function (o421) {"use strict";
    o421.o150 = (o421.o150 - 1) & 0xFFFF;
  },
  //INC A
  //#0x3C:
  function (o421) {"use strict";
    o421.o143 = (o421.o143 + 1) & 0xFF;
    o421.o364 = (o421.o143 == 0);
    o421.o366 = ((o421.o143 & 0xF) == 0);
    o421.o365 = false;
  },
  //DEC A
  //#0x3D:
  function (o421) {"use strict";
    o421.o143 = (o421.o143 - 1) & 0xFF;
    o421.o364 = (o421.o143 == 0);
    o421.o366 = ((o421.o143 & 0xF) == 0xF);
    o421.o365 = true;
  },
  //LD A, n
  //#0x3E:
  function (o421) {"use strict";
    o421.o143 = o421.o390[o421.o149](o421, o421.o149);
    o421.o149 = (o421.o149 + 1) & 0xFFFF;
  },
  //CCF
  //#0x3F:
  function (o421) {"use strict";
    o421.o367 = !o421.o367;
    o421.o365 = o421.o366 = false;
  },
  //LD B, B
  //#0x40:
  function (o421) {"use strict";
    //Do nothing...
  },
  //LD B, C
  //#0x41:
  function (o421) {"use strict";
    o421.o144 = o421.o145;
  },
  //LD B, D
  //#0x42:
  function (o421) {"use strict";
    o421.o144 = o421.o368;
  },
  //LD B, E
  //#0x43:
  function (o421) {"use strict";
    o421.o144 = o421.o146;
  },
  //LD B, H
  //#0x44:
  function (o421) {"use strict";
    o421.o144 = o421.o148 >> 8;
  },
  //LD B, L
  //#0x45:
  function (o421) {"use strict";
    o421.o144 = o421.o148 & 0xFF;
  },
  //LD B, (HL)
  //#0x46:
  function (o421) {"use strict";
    o421.o144 = o421.o390[o421.o148](o421, o421.o148);
  },
  //LD B, A
  //#0x47:
  function (o421) {"use strict";
    o421.o144 = o421.o143;
  },
  //LD C, B
  //#0x48:
  function (o421) {"use strict";
    o421.o145 = o421.o144;
  },
  //LD C, C
  //#0x49:
  function (o421) {"use strict";
    //Do nothing...
  },
  //LD C, D
  //#0x4A:
  function (o421) {"use strict";
    o421.o145 = o421.o368;
  },
  //LD C, E
  //#0x4B:
  function (o421) {"use strict";
    o421.o145 = o421.o146;
  },
  //LD C, H
  //#0x4C:
  function (o421) {"use strict";
    o421.o145 = o421.o148 >> 8;
  },
  //LD C, L
  //#0x4D:
  function (o421) {"use strict";
    o421.o145 = o421.o148 & 0xFF;
  },
  //LD C, (HL)
  //#0x4E:
  function (o421) {"use strict";
    o421.o145 = o421.o390[o421.o148](o421, o421.o148);
  },
  //LD C, A
  //#0x4F:
  function (o421) {"use strict";
    o421.o145 = o421.o143;
  },
  //LD D, B
  //#0x50:
  function (o421) {"use strict";
    o421.o368 = o421.o144;
  },
  //LD D, C
  //#0x51:
  function (o421) {"use strict";
    o421.o368 = o421.o145;
  },
  //LD D, D
  //#0x52:
  function (o421) {"use strict";
    //Do nothing...
  },
  //LD D, E
  //#0x53:
  function (o421) {"use strict";
    o421.o368 = o421.o146;
  },
  //LD D, H
  //#0x54:
  function (o421) {"use strict";
    o421.o368 = o421.o148 >> 8;
  },
  //LD D, L
  //#0x55:
  function (o421) {"use strict";
    o421.o368 = o421.o148 & 0xFF;
  },
  //LD D, (HL)
  //#0x56:
  function (o421) {"use strict";
    o421.o368 = o421.o390[o421.o148](o421, o421.o148);
  },
  //LD D, A
  //#0x57:
  function (o421) {"use strict";
    o421.o368 = o421.o143;
  },
  //LD E, B
  //#0x58:
  function (o421) {"use strict";
    o421.o146 = o421.o144;
  },
  //LD E, C
  //#0x59:
  function (o421) {"use strict";
    o421.o146 = o421.o145;
  },
  //LD E, D
  //#0x5A:
  function (o421) {"use strict";
    o421.o146 = o421.o368;
  },
  //LD E, E
  //#0x5B:
  function (o421) {"use strict";
    //Do nothing...
  },
  //LD E, H
  //#0x5C:
  function (o421) {"use strict";
    o421.o146 = o421.o148 >> 8;
  },
  //LD E, L
  //#0x5D:
  function (o421) {"use strict";
    o421.o146 = o421.o148 & 0xFF;
  },
  //LD E, (HL)
  //#0x5E:
  function (o421) {"use strict";
    o421.o146 = o421.o390[o421.o148](o421, o421.o148);
  },
  //LD E, A
  //#0x5F:
  function (o421) {"use strict";
    o421.o146 = o421.o143;
  },
  //LD H, B
  //#0x60:
  function (o421) {"use strict";
    o421.o148 = (o421.o144 << 8) | (o421.o148 & 0xFF);
  },
  //LD H, C
  //#0x61:
  function (o421) {"use strict";
    o421.o148 = (o421.o145 << 8) | (o421.o148 & 0xFF);
  },
  //LD H, D
  //#0x62:
  function (o421) {"use strict";
    o421.o148 = (o421.o368 << 8) | (o421.o148 & 0xFF);
  },
  //LD H, E
  //#0x63:
  function (o421) {"use strict";
    o421.o148 = (o421.o146 << 8) | (o421.o148 & 0xFF);
  },
  //LD H, H
  //#0x64:
  function (o421) {"use strict";
    //Do nothing...
  },
  //LD H, L
  //#0x65:
  function (o421) {"use strict";
    o421.o148 = (o421.o148 & 0xFF) * 0x101;
  },
  //LD H, (HL)
  //#0x66:
  function (o421) {"use strict";
    o421.o148 = (o421.o390[o421.o148](o421, o421.o148) << 8) | (o421.o148 & 0xFF);
  },
  //LD H, A
  //#0x67:
  function (o421) {"use strict";
    o421.o148 = (o421.o143 << 8) | (o421.o148 & 0xFF);
  },
  //LD L, B
  //#0x68:
  function (o421) {"use strict";
    o421.o148 = (o421.o148 & 0xFF00) | o421.o144;
  },
  //LD L, C
  //#0x69:
  function (o421) {"use strict";
    o421.o148 = (o421.o148 & 0xFF00) | o421.o145;
  },
  //LD L, D
  //#0x6A:
  function (o421) {"use strict";
    o421.o148 = (o421.o148 & 0xFF00) | o421.o368;
  },
  //LD L, E
  //#0x6B:
  function (o421) {"use strict";
    o421.o148 = (o421.o148 & 0xFF00) | o421.o146;
  },
  //LD L, H
  //#0x6C:
  function (o421) {"use strict";
    o421.o148 = (o421.o148 & 0xFF00) | (o421.o148 >> 8);
  },
  //LD L, L
  //#0x6D:
  function (o421) {"use strict";
    //Do nothing...
  },
  //LD L, (HL)
  //#0x6E:
  function (o421) {"use strict";
    o421.o148 = (o421.o148 & 0xFF00) | o421.o390[o421.o148](o421, o421.o148);
  },
  //LD L, A
  //#0x6F:
  function (o421) {"use strict";
    o421.o148 = (o421.o148 & 0xFF00) | o421.o143;
  },
  //LD (HL), B
  //#0x70:
  function (o421) {"use strict";
    o421.o391[o421.o148](o421, o421.o148, o421.o144);
  },
  //LD (HL), C
  //#0x71:
  function (o421) {"use strict";
    o421.o391[o421.o148](o421, o421.o148, o421.o145);
  },
  //LD (HL), D
  //#0x72:
  function (o421) {"use strict";
    o421.o391[o421.o148](o421, o421.o148, o421.o368);
  },
  //LD (HL), E
  //#0x73:
  function (o421) {"use strict";
    o421.o391[o421.o148](o421, o421.o148, o421.o146);
  },
  //LD (HL), H
  //#0x74:
  function (o421) {"use strict";
    o421.o391[o421.o148](o421, o421.o148, o421.o148 >> 8);
  },
  //LD (HL), L
  //#0x75:
  function (o421) {"use strict";
    o421.o391[o421.o148](o421, o421.o148, o421.o148 & 0xFF);
  },
  //HALT
  //#0x76:
  function (o421) {"use strict";
    //See if there's already an IRQ match:
    if ((o421.o384 & o421.o383 & 0x1F) > 0) {
      if (!o421.o400 && !o421.o376) {
        //HALT bug in the DMG CPU model (Program Counter fails to increment for one instruction after HALT):
        o421.o379 = true;
      }
      else {
        //CGB gets around the HALT PC bug by doubling the hidden NOP.
        o421.o386 += 4;
      }
    }
    else {
      //CPU is stalled until the next IRQ match:
      o421.o587();
    }
  },
  //LD (HL), A
  //#0x77:
  function (o421) {"use strict";
    o421.o391[o421.o148](o421, o421.o148, o421.o143);
  },
  //LD A, B
  //#0x78:
  function (o421) {"use strict";
    o421.o143 = o421.o144;
  },
  //LD A, C
  //#0x79:
  function (o421) {"use strict";
    o421.o143 = o421.o145;
  },
  //LD A, D
  //#0x7A:
  function (o421) {"use strict";
    o421.o143 = o421.o368;
  },
  //LD A, E
  //#0x7B:
  function (o421) {"use strict";
    o421.o143 = o421.o146;
  },
  //LD A, H
  //#0x7C:
  function (o421) {"use strict";
    o421.o143 = o421.o148 >> 8;
  },
  //LD A, L
  //#0x7D:
  function (o421) {"use strict";
    o421.o143 = o421.o148 & 0xFF;
  },
  //LD, A, (HL)
  //#0x7E:
  function (o421) {"use strict";
    o421.o143 = o421.o390[o421.o148](o421, o421.o148);
  },
  //LD A, A
  //#0x7F:
  function (o421) {"use strict";
    //Do Nothing...
  },
  //ADD A, B
  //#0x80:
  function (o421) {"use strict";
    var o582 = o421.o143 + o421.o144;
    o421.o366 = ((o582 & 0xF) < (o421.o143 & 0xF));
    o421.o367 = (o582 > 0xFF);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = false;
  },
  //ADD A, C
  //#0x81:
  function (o421) {"use strict";
    var o582 = o421.o143 + o421.o145;
    o421.o366 = ((o582 & 0xF) < (o421.o143 & 0xF));
    o421.o367 = (o582 > 0xFF);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = false;
  },
  //ADD A, D
  //#0x82:
  function (o421) {"use strict";
    var o582 = o421.o143 + o421.o368;
    o421.o366 = ((o582 & 0xF) < (o421.o143 & 0xF));
    o421.o367 = (o582 > 0xFF);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = false;
  },
  //ADD A, E
  //#0x83:
  function (o421) {"use strict";
    var o582 = o421.o143 + o421.o146;
    o421.o366 = ((o582 & 0xF) < (o421.o143 & 0xF));
    o421.o367 = (o582 > 0xFF);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = false;
  },
  //ADD A, H
  //#0x84:
  function (o421) {"use strict";
    var o582 = o421.o143 + (o421.o148 >> 8);
    o421.o366 = ((o582 & 0xF) < (o421.o143 & 0xF));
    o421.o367 = (o582 > 0xFF);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = false;
  },
  //ADD A, L
  //#0x85:
  function (o421) {"use strict";
    var o582 = o421.o143 + (o421.o148 & 0xFF);
    o421.o366 = ((o582 & 0xF) < (o421.o143 & 0xF));
    o421.o367 = (o582 > 0xFF);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = false;
  },
  //ADD A, (HL)
  //#0x86:
  function (o421) {"use strict";
    var o582 = o421.o143 + o421.o390[o421.o148](o421, o421.o148);
    o421.o366 = ((o582 & 0xF) < (o421.o143 & 0xF));
    o421.o367 = (o582 > 0xFF);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = false;
  },
  //ADD A, A
  //#0x87:
  function (o421) {"use strict";
    o421.o366 = ((o421.o143 & 0x8) == 0x8);
    o421.o367 = (o421.o143 > 0x7F);
    o421.o143 = (o421.o143 << 1) & 0xFF;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = false;
  },
  //ADC A, B
  //#0x88:
  function (o421) {"use strict";
    var o582 = o421.o143 + o421.o144 + ((o421.o367) ? 1 : 0);
    o421.o366 = ((o421.o143 & 0xF) + (o421.o144 & 0xF) + ((o421.o367) ? 1 : 0) > 0xF);
    o421.o367 = (o582 > 0xFF);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = false;
  },
  //ADC A, C
  //#0x89:
  function (o421) {"use strict";
    var o582 = o421.o143 + o421.o145 + ((o421.o367) ? 1 : 0);
    o421.o366 = ((o421.o143 & 0xF) + (o421.o145 & 0xF) + ((o421.o367) ? 1 : 0) > 0xF);
    o421.o367 = (o582 > 0xFF);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = false;
  },
  //ADC A, D
  //#0x8A:
  function (o421) {"use strict";
    var o582 = o421.o143 + o421.o368 + ((o421.o367) ? 1 : 0);
    o421.o366 = ((o421.o143 & 0xF) + (o421.o368 & 0xF) + ((o421.o367) ? 1 : 0) > 0xF);
    o421.o367 = (o582 > 0xFF);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = false;
  },
  //ADC A, E
  //#0x8B:
  function (o421) {"use strict";
    var o582 = o421.o143 + o421.o146 + ((o421.o367) ? 1 : 0);
    o421.o366 = ((o421.o143 & 0xF) + (o421.o146 & 0xF) + ((o421.o367) ? 1 : 0) > 0xF);
    o421.o367 = (o582 > 0xFF);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = false;
  },
  //ADC A, H
  //#0x8C:
  function (o421) {"use strict";
    var o588 = (o421.o148 >> 8);
    var o582 = o421.o143 + o588 + ((o421.o367) ? 1 : 0);
    o421.o366 = ((o421.o143 & 0xF) + (o588 & 0xF) + ((o421.o367) ? 1 : 0) > 0xF);
    o421.o367 = (o582 > 0xFF);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = false;
  },
  //ADC A, L
  //#0x8D:
  function (o421) {"use strict";
    var o588 = (o421.o148 & 0xFF);
    var o582 = o421.o143 + o588 + ((o421.o367) ? 1 : 0);
    o421.o366 = ((o421.o143 & 0xF) + (o588 & 0xF) + ((o421.o367) ? 1 : 0) > 0xF);
    o421.o367 = (o582 > 0xFF);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = false;
  },
  //ADC A, (HL)
  //#0x8E:
  function (o421) {"use strict";
    var o588 = o421.o390[o421.o148](o421, o421.o148);
    var o582 = o421.o143 + o588 + ((o421.o367) ? 1 : 0);
    o421.o366 = ((o421.o143 & 0xF) + (o588 & 0xF) + ((o421.o367) ? 1 : 0) > 0xF);
    o421.o367 = (o582 > 0xFF);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = false;
  },
  //ADC A, A
  //#0x8F:
  function (o421) {"use strict";
    //shift left register A one bit for some ops here as an optimization:
    var o582 = (o421.o143 << 1) | ((o421.o367) ? 1 : 0);
    o421.o366 = ((((o421.o143 << 1) & 0x1E) | ((o421.o367) ? 1 : 0)) > 0xF);
    o421.o367 = (o582 > 0xFF);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = false;
  },
  //SUB A, B
  //#0x90:
  function (o421) {"use strict";
    var o582 = o421.o143 - o421.o144;
    o421.o366 = ((o421.o143 & 0xF) < (o582 & 0xF));
    o421.o367 = (o582 < 0);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o582 == 0);
    o421.o365 = true;
  },
  //SUB A, C
  //#0x91:
  function (o421) {"use strict";
    var o582 = o421.o143 - o421.o145;
    o421.o366 = ((o421.o143 & 0xF) < (o582 & 0xF));
    o421.o367 = (o582 < 0);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o582 == 0);
    o421.o365 = true;
  },
  //SUB A, D
  //#0x92:
  function (o421) {"use strict";
    var o582 = o421.o143 - o421.o368;
    o421.o366 = ((o421.o143 & 0xF) < (o582 & 0xF));
    o421.o367 = (o582 < 0);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o582 == 0);
    o421.o365 = true;
  },
  //SUB A, E
  //#0x93:
  function (o421) {"use strict";
    var o582 = o421.o143 - o421.o146;
    o421.o366 = ((o421.o143 & 0xF) < (o582 & 0xF));
    o421.o367 = (o582 < 0);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o582 == 0);
    o421.o365 = true;
  },
  //SUB A, H
  //#0x94:
  function (o421) {"use strict";
    var o582 = o421.o143 - (o421.o148 >> 8);
    o421.o366 = ((o421.o143 & 0xF) < (o582 & 0xF));
    o421.o367 = (o582 < 0);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o582 == 0);
    o421.o365 = true;
  },
  //SUB A, L
  //#0x95:
  function (o421) {"use strict";
    var o582 = o421.o143 - (o421.o148 & 0xFF);
    o421.o366 = ((o421.o143 & 0xF) < (o582 & 0xF));
    o421.o367 = (o582 < 0);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o582 == 0);
    o421.o365 = true;
  },
  //SUB A, (HL)
  //#0x96:
  function (o421) {"use strict";
    var o582 = o421.o143 - o421.o390[o421.o148](o421, o421.o148);
    o421.o366 = ((o421.o143 & 0xF) < (o582 & 0xF));
    o421.o367 = (o582 < 0);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o582 == 0);
    o421.o365 = true;
  },
  //SUB A, A
  //#0x97:
  function (o421) {"use strict";
    //number - same number == 0
    o421.o143 = 0;
    o421.o366 = o421.o367 = false;
    o421.o364 = o421.o365 = true;
  },
  //SBC A, B
  //#0x98:
  function (o421) {"use strict";
    var o582 = o421.o143 - o421.o144 - ((o421.o367) ? 1 : 0);
    o421.o366 = ((o421.o143 & 0xF) - (o421.o144 & 0xF) - ((o421.o367) ? 1 : 0) < 0);
    o421.o367 = (o582 < 0);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = true;
  },
  //SBC A, C
  //#0x99:
  function (o421) {"use strict";
    var o582 = o421.o143 - o421.o145 - ((o421.o367) ? 1 : 0);
    o421.o366 = ((o421.o143 & 0xF) - (o421.o145 & 0xF) - ((o421.o367) ? 1 : 0) < 0);
    o421.o367 = (o582 < 0);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = true;
  },
  //SBC A, D
  //#0x9A:
  function (o421) {"use strict";
    var o582 = o421.o143 - o421.o368 - ((o421.o367) ? 1 : 0);
    o421.o366 = ((o421.o143 & 0xF) - (o421.o368 & 0xF) - ((o421.o367) ? 1 : 0) < 0);
    o421.o367 = (o582 < 0);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = true;
  },
  //SBC A, E
  //#0x9B:
  function (o421) {"use strict";
    var o582 = o421.o143 - o421.o146 - ((o421.o367) ? 1 : 0);
    o421.o366 = ((o421.o143 & 0xF) - (o421.o146 & 0xF) - ((o421.o367) ? 1 : 0) < 0);
    o421.o367 = (o582 < 0);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = true;
  },
  //SBC A, H
  //#0x9C:
  function (o421) {"use strict";
    var o581 = o421.o148 >> 8;
    var o582 = o421.o143 - o581 - ((o421.o367) ? 1 : 0);
    o421.o366 = ((o421.o143 & 0xF) - (o581 & 0xF) - ((o421.o367) ? 1 : 0) < 0);
    o421.o367 = (o582 < 0);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = true;
  },
  //SBC A, L
  //#0x9D:
  function (o421) {"use strict";
    var o582 = o421.o143 - (o421.o148 & 0xFF) - ((o421.o367) ? 1 : 0);
    o421.o366 = ((o421.o143 & 0xF) - (o421.o148 & 0xF) - ((o421.o367) ? 1 : 0) < 0);
    o421.o367 = (o582 < 0);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = true;
  },
  //SBC A, (HL)
  //#0x9E:
  function (o421) {"use strict";
    var o581 = o421.o390[o421.o148](o421, o421.o148);
    var o582 = o421.o143 - o581 - ((o421.o367) ? 1 : 0);
    o421.o366 = ((o421.o143 & 0xF) - (o581 & 0xF) - ((o421.o367) ? 1 : 0) < 0);
    o421.o367 = (o582 < 0);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = true;
  },
  //SBC A, A
  //#0x9F:
  function (o421) {"use strict";
    //Optimized SBC A:
    if (o421.o367) {
      o421.o364 = false;
      o421.o365 = o421.o366 = o421.o367 = true;
      o421.o143 = 0xFF;
    }
    else {
      o421.o366 = o421.o367 = false;
      o421.o365 = o421.o364 = true;
      o421.o143 = 0;
    }
  },
  //AND B
  //#0xA0:
  function (o421) {"use strict";
    o421.o143 &= o421.o144;
    o421.o364 = (o421.o143 == 0);
    o421.o366 = true;
    o421.o365 = o421.o367 = false;
  },
  //AND C
  //#0xA1:
  function (o421) {"use strict";
    o421.o143 &= o421.o145;
    o421.o364 = (o421.o143 == 0);
    o421.o366 = true;
    o421.o365 = o421.o367 = false;
  },
  //AND D
  //#0xA2:
  function (o421) {"use strict";
    o421.o143 &= o421.o368;
    o421.o364 = (o421.o143 == 0);
    o421.o366 = true;
    o421.o365 = o421.o367 = false;
  },
  //AND E
  //#0xA3:
  function (o421) {"use strict";
    o421.o143 &= o421.o146;
    o421.o364 = (o421.o143 == 0);
    o421.o366 = true;
    o421.o365 = o421.o367 = false;
  },
  //AND H
  //#0xA4:
  function (o421) {"use strict";
    o421.o143 &= (o421.o148 >> 8);
    o421.o364 = (o421.o143 == 0);
    o421.o366 = true;
    o421.o365 = o421.o367 = false;
  },
  //AND L
  //#0xA5:
  function (o421) {"use strict";
    o421.o143 &= o421.o148;
    o421.o364 = (o421.o143 == 0);
    o421.o366 = true;
    o421.o365 = o421.o367 = false;
  },
  //AND (HL)
  //#0xA6:
  function (o421) {"use strict";
    o421.o143 &= o421.o390[o421.o148](o421, o421.o148);
    o421.o364 = (o421.o143 == 0);
    o421.o366 = true;
    o421.o365 = o421.o367 = false;
  },
  //AND A
  //#0xA7:
  function (o421) {"use strict";
    //number & same number = same number
    o421.o364 = (o421.o143 == 0);
    o421.o366 = true;
    o421.o365 = o421.o367 = false;
  },
  //XOR B
  //#0xA8:
  function (o421) {"use strict";
    o421.o143 ^= o421.o144;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = o421.o366 = o421.o367 = false;
  },
  //XOR C
  //#0xA9:
  function (o421) {"use strict";
    o421.o143 ^= o421.o145;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = o421.o366 = o421.o367 = false;
  },
  //XOR D
  //#0xAA:
  function (o421) {"use strict";
    o421.o143 ^= o421.o368;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = o421.o366 = o421.o367 = false;
  },
  //XOR E
  //#0xAB:
  function (o421) {"use strict";
    o421.o143 ^= o421.o146;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = o421.o366 = o421.o367 = false;
  },
  //XOR H
  //#0xAC:
  function (o421) {"use strict";
    o421.o143 ^= (o421.o148 >> 8);
    o421.o364 = (o421.o143 == 0);
    o421.o365 = o421.o366 = o421.o367 = false;
  },
  //XOR L
  //#0xAD:
  function (o421) {"use strict";
    o421.o143 ^= (o421.o148 & 0xFF);
    o421.o364 = (o421.o143 == 0);
    o421.o365 = o421.o366 = o421.o367 = false;
  },
  //XOR (HL)
  //#0xAE:
  function (o421) {"use strict";
    o421.o143 ^= o421.o390[o421.o148](o421, o421.o148);
    o421.o364 = (o421.o143 == 0);
    o421.o365 = o421.o366 = o421.o367 = false;
  },
  //XOR A
  //#0xAF:
  function (o421) {"use strict";
    //number ^ same number == 0
    o421.o143 = 0;
    o421.o364 = true;
    o421.o365 = o421.o366 = o421.o367 = false;
  },
  //OR B
  //#0xB0:
  function (o421) {"use strict";
    o421.o143 |= o421.o144;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = o421.o367 = o421.o366 = false;
  },
  //OR C
  //#0xB1:
  function (o421) {"use strict";
    o421.o143 |= o421.o145;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = o421.o367 = o421.o366 = false;
  },
  //OR D
  //#0xB2:
  function (o421) {"use strict";
    o421.o143 |= o421.o368;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = o421.o367 = o421.o366 = false;
  },
  //OR E
  //#0xB3:
  function (o421) {"use strict";
    o421.o143 |= o421.o146;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = o421.o367 = o421.o366 = false;
  },
  //OR H
  //#0xB4:
  function (o421) {"use strict";
    o421.o143 |= (o421.o148 >> 8);
    o421.o364 = (o421.o143 == 0);
    o421.o365 = o421.o367 = o421.o366 = false;
  },
  //OR L
  //#0xB5:
  function (o421) {"use strict";
    o421.o143 |= (o421.o148 & 0xFF);
    o421.o364 = (o421.o143 == 0);
    o421.o365 = o421.o367 = o421.o366 = false;
  },
  //OR (HL)
  //#0xB6:
  function (o421) {"use strict";
    o421.o143 |= o421.o390[o421.o148](o421, o421.o148);
    o421.o364 = (o421.o143 == 0);
    o421.o365 = o421.o367 = o421.o366 = false;
  },
  //OR A
  //#0xB7:
  function (o421) {"use strict";
    //number | same number == same number
    o421.o364 = (o421.o143 == 0);
    o421.o365 = o421.o367 = o421.o366 = false;
  },
  //CP B
  //#0xB8:
  function (o421) {"use strict";
    var o582 = o421.o143 - o421.o144;
    o421.o366 = ((o582 & 0xF) > (o421.o143 & 0xF));
    o421.o367 = (o582 < 0);
    o421.o364 = (o582 == 0);
    o421.o365 = true;
  },
  //CP C
  //#0xB9:
  function (o421) {"use strict";
    var o582 = o421.o143 - o421.o145;
    o421.o366 = ((o582 & 0xF) > (o421.o143 & 0xF));
    o421.o367 = (o582 < 0);
    o421.o364 = (o582 == 0);
    o421.o365 = true;
  },
  //CP D
  //#0xBA:
  function (o421) {"use strict";
    var o582 = o421.o143 - o421.o368;
    o421.o366 = ((o582 & 0xF) > (o421.o143 & 0xF));
    o421.o367 = (o582 < 0);
    o421.o364 = (o582 == 0);
    o421.o365 = true;
  },
  //CP E
  //#0xBB:
  function (o421) {"use strict";
    var o582 = o421.o143 - o421.o146;
    o421.o366 = ((o582 & 0xF) > (o421.o143 & 0xF));
    o421.o367 = (o582 < 0);
    o421.o364 = (o582 == 0);
    o421.o365 = true;
  },
  //CP H
  //#0xBC:
  function (o421) {"use strict";
    var o582 = o421.o143 - (o421.o148 >> 8);
    o421.o366 = ((o582 & 0xF) > (o421.o143 & 0xF));
    o421.o367 = (o582 < 0);
    o421.o364 = (o582 == 0);
    o421.o365 = true;
  },
  //CP L
  //#0xBD:
  function (o421) {"use strict";
    var o582 = o421.o143 - (o421.o148 & 0xFF);
    o421.o366 = ((o582 & 0xF) > (o421.o143 & 0xF));
    o421.o367 = (o582 < 0);
    o421.o364 = (o582 == 0);
    o421.o365 = true;
  },
  //CP (HL)
  //#0xBE:
  function (o421) {"use strict";
    var o582 = o421.o143 - o421.o390[o421.o148](o421, o421.o148);
    o421.o366 = ((o582 & 0xF) > (o421.o143 & 0xF));
    o421.o367 = (o582 < 0);
    o421.o364 = (o582 == 0);
    o421.o365 = true;
  },
  //CP A
  //#0xBF:
  function (o421) {"use strict";
    o421.o366 = o421.o367 = false;
    o421.o364 = o421.o365 = true;
  },
  //RET !FZ
  //#0xC0:
  function (o421) {"use strict";
    if (!o421.o364) {
      o421.o149 = (o421.o579((o421.o150 + 1) & 0xFFFF) << 8) | o421.o390[o421.o150](o421, o421.o150);
      o421.o150 = (o421.o150 + 2) & 0xFFFF;
      o421.o386 += 12;
    }
  },
  //POP BC
  //#0xC1:
  function (o421) {"use strict";
    o421.o145 = o421.o390[o421.o150](o421, o421.o150);
    o421.o144 = o421.o579((o421.o150 + 1) & 0xFFFF);
    o421.o150 = (o421.o150 + 2) & 0xFFFF;
  },
  //JP !FZ, nn
  //#0xC2:
  function (o421) {"use strict";
    if (!o421.o364) {
      o421.o149 = (o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149);
      o421.o386 += 4;
    }
    else {
      o421.o149 = (o421.o149 + 2) & 0xFFFF;
    }
  },
  //JP nn
  //#0xC3:
  function (o421) {"use strict";
    o421.o149 = (o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149);
  },
  //CALL !FZ, nn
  //#0xC4:
  function (o421) {"use strict";
    if (!o421.o364) {
      var o589 = (o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149);
      o421.o149 = (o421.o149 + 2) & 0xFFFF;
      o421.o150 = (o421.o150 - 1) & 0xFFFF;
      o421.o391[o421.o150](o421, o421.o150, o421.o149 >> 8);
      o421.o150 = (o421.o150 - 1) & 0xFFFF;
      o421.o391[o421.o150](o421, o421.o150, o421.o149 & 0xFF);
      o421.o149 = o589;
      o421.o386 += 12;
    }
    else {
      o421.o149 = (o421.o149 + 2) & 0xFFFF;
    }
  },
  //PUSH BC
  //#0xC5:
  function (o421) {"use strict";
    o421.o150 = (o421.o150 - 1) & 0xFFFF;
    o421.o391[o421.o150](o421, o421.o150, o421.o144);
    o421.o150 = (o421.o150 - 1) & 0xFFFF;
    o421.o391[o421.o150](o421, o421.o150, o421.o145);
  },
  //ADD, n
  //#0xC6:
  function (o421) {"use strict";
    var o582 = o421.o143 + o421.o390[o421.o149](o421, o421.o149);
    o421.o149 = (o421.o149 + 1) & 0xFFFF;
    o421.o366 = ((o582 & 0xF) < (o421.o143 & 0xF));
    o421.o367 = (o582 > 0xFF);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = false;
  },
  //RST 0
  //#0xC7:
  function (o421) {"use strict";
    o421.o150 = (o421.o150 - 1) & 0xFFFF;
    o421.o391[o421.o150](o421, o421.o150, o421.o149 >> 8);
    o421.o150 = (o421.o150 - 1) & 0xFFFF;
    o421.o391[o421.o150](o421, o421.o150, o421.o149 & 0xFF);
    o421.o149 = 0;
  },
  //RET FZ
  //#0xC8:
  function (o421) {"use strict";
    if (o421.o364) {
      o421.o149 = (o421.o579((o421.o150 + 1) & 0xFFFF) << 8) | o421.o390[o421.o150](o421, o421.o150);
      o421.o150 = (o421.o150 + 2) & 0xFFFF;
      o421.o386 += 12;
    }
  },
  //RET
  //#0xC9:
  function (o421) {"use strict";
    o421.o149 =  (o421.o579((o421.o150 + 1) & 0xFFFF) << 8) | o421.o390[o421.o150](o421, o421.o150);
    o421.o150 = (o421.o150 + 2) & 0xFFFF;
  },
  //JP FZ, nn
  //#0xCA:
  function (o421) {"use strict";
    if (o421.o364) {
      o421.o149 = (o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149);
      o421.o386 += 4;
    }
    else {
      o421.o149 = (o421.o149 + 2) & 0xFFFF;
    }
  },
  //Secondary OP Code Set:
  //#0xCB:
  function (o421) {"use strict";
    var o590 = o421.o390[o421.o149](o421, o421.o149);
    //Increment the program counter to the next instruction:
    o421.o149 = (o421.o149 + 1) & 0xFFFF;
    //Get how many CPU cycles the current 0xCBXX op code counts for:
    o421.o386 += o421.o591[o590];
    //Execute secondary OP codes for the 0xCB OP code call.
    o421.o592[o590](o421);
  },
  //CALL FZ, nn
  //#0xCC:
  function (o421) {"use strict";
    if (o421.o364) {
      var o589 = (o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149);
      o421.o149 = (o421.o149 + 2) & 0xFFFF;
      o421.o150 = (o421.o150 - 1) & 0xFFFF;
      o421.o391[o421.o150](o421, o421.o150, o421.o149 >> 8);
      o421.o150 = (o421.o150 - 1) & 0xFFFF;
      o421.o391[o421.o150](o421, o421.o150, o421.o149 & 0xFF);
      o421.o149 = o589;
      o421.o386 += 12;
    }
    else {
      o421.o149 = (o421.o149 + 2) & 0xFFFF;
    }
  },
  //CALL nn
  //#0xCD:
  function (o421) {"use strict";
    var o589 = (o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149);
    o421.o149 = (o421.o149 + 2) & 0xFFFF;
    o421.o150 = (o421.o150 - 1) & 0xFFFF;
    o421.o391[o421.o150](o421, o421.o150, o421.o149 >> 8);
    o421.o150 = (o421.o150 - 1) & 0xFFFF;
    o421.o391[o421.o150](o421, o421.o150, o421.o149 & 0xFF);
    o421.o149 = o589;
  },
  //ADC A, n
  //#0xCE:
  function (o421) {"use strict";
    var o588 = o421.o390[o421.o149](o421, o421.o149);
    o421.o149 = (o421.o149 + 1) & 0xFFFF;
    var o582 = o421.o143 + o588 + ((o421.o367) ? 1 : 0);
    o421.o366 = ((o421.o143 & 0xF) + (o588 & 0xF) + ((o421.o367) ? 1 : 0) > 0xF);
    o421.o367 = (o582 > 0xFF);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = false;
  },
  //RST 0x8
  //#0xCF:
  function (o421) {"use strict";
    o421.o150 = (o421.o150 - 1) & 0xFFFF;
    o421.o391[o421.o150](o421, o421.o150, o421.o149 >> 8);
    o421.o150 = (o421.o150 - 1) & 0xFFFF;
    o421.o391[o421.o150](o421, o421.o150, o421.o149 & 0xFF);
    o421.o149 = 0x8;
  },
  //RET !FC
  //#0xD0:
  function (o421) {"use strict";
    if (!o421.o367) {
      o421.o149 = (o421.o579((o421.o150 + 1) & 0xFFFF) << 8) | o421.o390[o421.o150](o421, o421.o150);
      o421.o150 = (o421.o150 + 2) & 0xFFFF;
      o421.o386 += 12;
    }
  },
  //POP DE
  //#0xD1:
  function (o421) {"use strict";
    o421.o146 = o421.o390[o421.o150](o421, o421.o150);
    o421.o368 = o421.o579((o421.o150 + 1) & 0xFFFF);
    o421.o150 = (o421.o150 + 2) & 0xFFFF;
  },
  //JP !FC, nn
  //#0xD2:
  function (o421) {"use strict";
    if (!o421.o367) {
      o421.o149 = (o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149);
      o421.o386 += 4;
    }
    else {
      o421.o149 = (o421.o149 + 2) & 0xFFFF;
    }
  },
  //0xD3 - Illegal
  //#0xD3:
  function (o421) {"use strict";
    o113("Illegal op code 0xD3 called, pausing emulation.", 2);
    o593();
  },
  //CALL !FC, nn
  //#0xD4:
  function (o421) {"use strict";
    if (!o421.o367) {
      var o589 = (o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149);
      o421.o149 = (o421.o149 + 2) & 0xFFFF;
      o421.o150 = (o421.o150 - 1) & 0xFFFF;
      o421.o391[o421.o150](o421, o421.o150, o421.o149 >> 8);
      o421.o150 = (o421.o150 - 1) & 0xFFFF;
      o421.o391[o421.o150](o421, o421.o150, o421.o149 & 0xFF);
      o421.o149 = o589;
      o421.o386 += 12;
    }
    else {
      o421.o149 = (o421.o149 + 2) & 0xFFFF;
    }
  },
  //PUSH DE
  //#0xD5:
  function (o421) {"use strict";
    o421.o150 = (o421.o150 - 1) & 0xFFFF;
    o421.o391[o421.o150](o421, o421.o150, o421.o368);
    o421.o150 = (o421.o150 - 1) & 0xFFFF;
    o421.o391[o421.o150](o421, o421.o150, o421.o146);
  },
  //SUB A, n
  //#0xD6:
  function (o421) {"use strict";
    var o582 = o421.o143 - o421.o390[o421.o149](o421, o421.o149);
    o421.o149 = (o421.o149 + 1) & 0xFFFF;
    o421.o366 = ((o421.o143 & 0xF) < (o582 & 0xF));
    o421.o367 = (o582 < 0);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o582 == 0);
    o421.o365 = true;
  },
  //RST 0x10
  //#0xD7:
  function (o421) {"use strict";
    o421.o150 = (o421.o150 - 1) & 0xFFFF;
    o421.o391[o421.o150](o421, o421.o150, o421.o149 >> 8);
    o421.o150 = (o421.o150 - 1) & 0xFFFF;
    o421.o391[o421.o150](o421, o421.o150, o421.o149 & 0xFF);
    o421.o149 = 0x10;
  },
  //RET FC
  //#0xD8:
  function (o421) {"use strict";
    if (o421.o367) {
      o421.o149 = (o421.o579((o421.o150 + 1) & 0xFFFF) << 8) | o421.o390[o421.o150](o421, o421.o150);
      o421.o150 = (o421.o150 + 2) & 0xFFFF;
      o421.o386 += 12;
    }
  },
  //RETI
  //#0xD9:
  function (o421) {"use strict";
    o421.o149 = (o421.o579((o421.o150 + 1) & 0xFFFF) << 8) | o421.o390[o421.o150](o421, o421.o150);
    o421.o150 = (o421.o150 + 2) & 0xFFFF;
    //Immediate for HALT:
    o421.o497 = (o421.o497 == 2 || o421.o390[o421.o149](o421, o421.o149) == 0x76) ? 1 : 2;
  },
  //JP FC, nn
  //#0xDA:
  function (o421) {"use strict";
    if (o421.o367) {
      o421.o149 = (o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149);
      o421.o386 += 4;
    }
    else {
      o421.o149 = (o421.o149 + 2) & 0xFFFF;
    }
  },
  //0xDB - Illegal
  //#0xDB:
  function (o421) {"use strict";
    o113("Illegal op code 0xDB called, pausing emulation.", 2);
    o593();
  },
  //CALL FC, nn
  //#0xDC:
  function (o421) {"use strict";
    if (o421.o367) {
      var o589 = (o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149);
      o421.o149 = (o421.o149 + 2) & 0xFFFF;
      o421.o150 = (o421.o150 - 1) & 0xFFFF;
      o421.o391[o421.o150](o421, o421.o150, o421.o149 >> 8);
      o421.o150 = (o421.o150 - 1) & 0xFFFF;
      o421.o391[o421.o150](o421, o421.o150, o421.o149 & 0xFF);
      o421.o149 = o589;
      o421.o386 += 12;
    }
    else {
      o421.o149 = (o421.o149 + 2) & 0xFFFF;
    }
  },
  //0xDD - Illegal
  //#0xDD:
  function (o421) {"use strict";
    o113("Illegal op code 0xDD called, pausing emulation.", 2);
    o593();
  },
  //SBC A, n
  //#0xDE:
  function (o421) {"use strict";
    var o581 = o421.o390[o421.o149](o421, o421.o149);
    o421.o149 = (o421.o149 + 1) & 0xFFFF;
    var o582 = o421.o143 - o581 - ((o421.o367) ? 1 : 0);
    o421.o366 = ((o421.o143 & 0xF) - (o581 & 0xF) - ((o421.o367) ? 1 : 0) < 0);
    o421.o367 = (o582 < 0);
    o421.o143 = o582 & 0xFF;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = true;
  },
  //RST 0x18
  //#0xDF:
  function (o421) {"use strict";
    o421.o150 = (o421.o150 - 1) & 0xFFFF;
    o421.o391[o421.o150](o421, o421.o150, o421.o149 >> 8);
    o421.o150 = (o421.o150 - 1) & 0xFFFF;
    o421.o391[o421.o150](o421, o421.o150, o421.o149 & 0xFF);
    o421.o149 = 0x18;
  },
  //LDH (n), A
  //#0xE0:
  function (o421) {"use strict";
    o421.o594(o421.o390[o421.o149](o421, o421.o149), o421.o143);
    o421.o149 = (o421.o149 + 1) & 0xFFFF;
  },
  //POP HL
  //#0xE1:
  function (o421) {"use strict";
    o421.o148 = (o421.o579((o421.o150 + 1) & 0xFFFF) << 8) | o421.o390[o421.o150](o421, o421.o150);
    o421.o150 = (o421.o150 + 2) & 0xFFFF;
  },
  //LD (0xFF00 + C), A
  //#0xE2:
  function (o421) {"use strict";
    o421.o393[o421.o145](o421, o421.o145, o421.o143);
  },
  //0xE3 - Illegal
  //#0xE3:
  function (o421) {"use strict";
    o113("Illegal op code 0xE3 called, pausing emulation.", 2);
    o593();
  },
  //0xE4 - Illegal
  //#0xE4:
  function (o421) {"use strict";
    o113("Illegal op code 0xE4 called, pausing emulation.", 2);
    o593();
  },
  //PUSH HL
  //#0xE5:
  function (o421) {"use strict";
    o421.o150 = (o421.o150 - 1) & 0xFFFF;
    o421.o391[o421.o150](o421, o421.o150, o421.o148 >> 8);
    o421.o150 = (o421.o150 - 1) & 0xFFFF;
    o421.o391[o421.o150](o421, o421.o150, o421.o148 & 0xFF);
  },
  //AND n
  //#0xE6:
  function (o421) {"use strict";
    o421.o143 &= o421.o390[o421.o149](o421, o421.o149);
    o421.o149 = (o421.o149 + 1) & 0xFFFF;
    o421.o364 = (o421.o143 == 0);
    o421.o366 = true;
    o421.o365 = o421.o367 = false;
  },
  //RST 0x20
  //#0xE7:
  function (o421) {"use strict";
    o421.o150 = (o421.o150 - 1) & 0xFFFF;
    o421.o391[o421.o150](o421, o421.o150, o421.o149 >> 8);
    o421.o150 = (o421.o150 - 1) & 0xFFFF;
    o421.o391[o421.o150](o421, o421.o150, o421.o149 & 0xFF);
    o421.o149 = 0x20;
  },
  //ADD SP, n
  //#0xE8:
  function (o421) {"use strict";
    var o595 = (o421.o390[o421.o149](o421, o421.o149) << 24) >> 24;
    o421.o149 = (o421.o149 + 1) & 0xFFFF;
    var o596 = (o421.o150 + o595) & 0xFFFF;
    o595 = o421.o150 ^ o595 ^ o596;
    o421.o150 = o596;
    o421.o367 = ((o595 & 0x100) == 0x100);
    o421.o366 = ((o595 & 0x10) == 0x10);
    o421.o364 = o421.o365 = false;
  },
  //JP, (HL)
  //#0xE9:
  function (o421) {"use strict";
    o421.o149 = o421.o148;
  },
  //LD n, A
  //#0xEA:
  function (o421) {"use strict";
    o421.o580((o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149), o421.o143);
    o421.o149 = (o421.o149 + 2) & 0xFFFF;
  },
  //0xEB - Illegal
  //#0xEB:
  function (o421) {"use strict";
    o113("Illegal op code 0xEB called, pausing emulation.", 2);
    o593();
  },
  //0xEC - Illegal
  //#0xEC:
  function (o421) {"use strict";
    o113("Illegal op code 0xEC called, pausing emulation.", 2);
    o593();
  },
  //0xED - Illegal
  //#0xED:
  function (o421) {"use strict";
    o113("Illegal op code 0xED called, pausing emulation.", 2);
    o593();
  },
  //XOR n
  //#0xEE:
  function (o421) {"use strict";
    o421.o143 ^= o421.o390[o421.o149](o421, o421.o149);
    o421.o149 = (o421.o149 + 1) & 0xFFFF;
    o421.o364 = (o421.o143 == 0);
    o421.o365 = o421.o366 = o421.o367 = false;
  },
  //RST 0x28
  //#0xEF:
  function (o421) {"use strict";
    o421.o150 = (o421.o150 - 1) & 0xFFFF;
    o421.o391[o421.o150](o421, o421.o150, o421.o149 >> 8);
    o421.o150 = (o421.o150 - 1) & 0xFFFF;
    o421.o391[o421.o150](o421, o421.o150, o421.o149 & 0xFF);
    o421.o149 = 0x28;
  },
  //LDH A, (n)
  //#0xF0:
  function (o421) {"use strict";
    o421.o143 = o421.o597(o421.o390[o421.o149](o421, o421.o149));
    o421.o149 = (o421.o149 + 1) & 0xFFFF;
  },
  //POP AF
  //#0xF1:
  function (o421) {"use strict";
    var o581 = o421.o390[o421.o150](o421, o421.o150);
    o421.o364 = (o581 > 0x7F);
    o421.o365 = ((o581 & 0x40) == 0x40);
    o421.o366 = ((o581 & 0x20) == 0x20);
    o421.o367 = ((o581 & 0x10) == 0x10);
    o421.o143 = o421.o579((o421.o150 + 1) & 0xFFFF);
    o421.o150 = (o421.o150 + 2) & 0xFFFF;
  },
  //LD A, (0xFF00 + C)
  //#0xF2:
  function (o421) {"use strict";
    o421.o143 = o421.o392[o421.o145](o421, o421.o145);
  },
  //DI
  //#0xF3:
  function (o421) {"use strict";
    o421.o381 = false;
    o421.o497 = 0;
  },
  //0xF4 - Illegal
  //#0xF4:
  function (o421) {"use strict";
    o113("Illegal op code 0xF4 called, pausing emulation.", 2);
    o593();
  },
  //PUSH AF
  //#0xF5:
  function (o421) {"use strict";
    o421.o150 = (o421.o150 - 1) & 0xFFFF;
    o421.o391[o421.o150](o421, o421.o150, o421.o143);
    o421.o150 = (o421.o150 - 1) & 0xFFFF;
    o421.o391[o421.o150](o421, o421.o150, ((o421.o364) ? 0x80 : 0) | ((o421.o365) ? 0x40 : 0) | ((o421.o366) ? 0x20 : 0) | ((o421.o367) ? 0x10 : 0));
  },
  //OR n
  //#0xF6:
  function (o421) {"use strict";
    o421.o143 |= o421.o390[o421.o149](o421, o421.o149);
    o421.o364 = (o421.o143 == 0);
    o421.o149 = (o421.o149 + 1) & 0xFFFF;
    o421.o365 = o421.o367 = o421.o366 = false;
  },
  //RST 0x30
  //#0xF7:
  function (o421) {"use strict";
    o421.o150 = (o421.o150 - 1) & 0xFFFF;
    o421.o391[o421.o150](o421, o421.o150, o421.o149 >> 8);
    o421.o150 = (o421.o150 - 1) & 0xFFFF;
    o421.o391[o421.o150](o421, o421.o150, o421.o149 & 0xFF);
    o421.o149 = 0x30;
  },
  //LDHL SP, n
  //#0xF8:
  function (o421) {"use strict";
    var o581 = (o421.o390[o421.o149](o421, o421.o149) << 24) >> 24;
    o421.o149 = (o421.o149 + 1) & 0xFFFF;
    o421.o148 = (o421.o150 + o581) & 0xFFFF;
    o581 = o421.o150 ^ o581 ^ o421.o148;
    o421.o367 = ((o581 & 0x100) == 0x100);
    o421.o366 = ((o581 & 0x10) == 0x10);
    o421.o364 = o421.o365 = false;
  },
  //LD SP, HL
  //#0xF9:
  function (o421) {"use strict";
    o421.o150 = o421.o148;
  },
  //LD A, (nn)
  //#0xFA:
  function (o421) {"use strict";
    o421.o143 = o421.o579((o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149));
    o421.o149 = (o421.o149 + 2) & 0xFFFF;
  },
  //EI
  //#0xFB:
  function (o421) {"use strict";
    //Immediate for HALT:
    o421.o497 = (o421.o497 == 2 || o421.o390[o421.o149](o421, o421.o149) == 0x76) ? 1 : 2;
  },
  //0xFC - Illegal
  //#0xFC:
  function (o421) {"use strict";
    o113("Illegal op code 0xFC called, pausing emulation.", 2);
    o593();
  },
  //0xFD - Illegal
  //#0xFD:
  function (o421) {"use strict";
    o113("Illegal op code 0xFD called, pausing emulation.", 2);
    o593();
  },
  //CP n
  //#0xFE:
  function (o421) {"use strict";
    var o582 = o421.o143 - o421.o390[o421.o149](o421, o421.o149);
    o421.o149 = (o421.o149 + 1) & 0xFFFF;
    o421.o366 = ((o582 & 0xF) > (o421.o143 & 0xF));
    o421.o367 = (o582 < 0);
    o421.o364 = (o582 == 0);
    o421.o365 = true;
  },
  //RST 0x38
  //#0xFF:
  function (o421) {"use strict";
    o421.o150 = (o421.o150 - 1) & 0xFFFF;
    o421.o391[o421.o150](o421, o421.o150, o421.o149 >> 8);
    o421.o150 = (o421.o150 - 1) & 0xFFFF;
    o421.o391[o421.o150](o421, o421.o150, o421.o149 & 0xFF);
    o421.o149 = 0x38;
  }
];
o360.prototype.o592 = [
  //RLC B
  //#0x00:
  function (o421) {"use strict";
    o421.o367 = (o421.o144 > 0x7F);
    o421.o144 = ((o421.o144 << 1) & 0xFF) | ((o421.o367) ? 1 : 0);
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o144 == 0);
  }
  //RLC C
  //#0x01:
  ,function (o421) {"use strict";
    o421.o367 = (o421.o145 > 0x7F);
    o421.o145 = ((o421.o145 << 1) & 0xFF) | ((o421.o367) ? 1 : 0);
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o145 == 0);
  }
  //RLC D
  //#0x02:
  ,function (o421) {"use strict";
    o421.o367 = (o421.o368 > 0x7F);
    o421.o368 = ((o421.o368 << 1) & 0xFF) | ((o421.o367) ? 1 : 0);
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o368 == 0);
  }
  //RLC E
  //#0x03:
  ,function (o421) {"use strict";
    o421.o367 = (o421.o146 > 0x7F);
    o421.o146 = ((o421.o146 << 1) & 0xFF) | ((o421.o367) ? 1 : 0);
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o146 == 0);
  }
  //RLC H
  //#0x04:
  ,function (o421) {"use strict";
    o421.o367 = (o421.o148 > 0x7FFF);
    o421.o148 = ((o421.o148 << 1) & 0xFE00) | ((o421.o367) ? 0x100 : 0) | (o421.o148 & 0xFF);
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o148 < 0x100);
  }
  //RLC L
  //#0x05:
  ,function (o421) {"use strict";
    o421.o367 = ((o421.o148 & 0x80) == 0x80);
    o421.o148 = (o421.o148 & 0xFF00) | ((o421.o148 << 1) & 0xFF) | ((o421.o367) ? 1 : 0);
    o421.o366 = o421.o365 = false;
    o421.o364 = ((o421.o148 & 0xFF) == 0);
  }
  //RLC (HL)
  //#0x06:
  ,function (o421) {"use strict";
    var o581 = o421.o390[o421.o148](o421, o421.o148);
    o421.o367 = (o581 > 0x7F);
    o581 = ((o581 << 1) & 0xFF) | ((o421.o367) ? 1 : 0);
    o421.o391[o421.o148](o421, o421.o148, o581);
    o421.o366 = o421.o365 = false;
    o421.o364 = (o581 == 0);
  }
  //RLC A
  //#0x07:
  ,function (o421) {"use strict";
    o421.o367 = (o421.o143 > 0x7F);
    o421.o143 = ((o421.o143 << 1) & 0xFF) | ((o421.o367) ? 1 : 0);
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o143 == 0);
  }
  //RRC B
  //#0x08:
  ,function (o421) {"use strict";
    o421.o367 = ((o421.o144 & 0x01) == 0x01);
    o421.o144 = ((o421.o367) ? 0x80 : 0) | (o421.o144 >> 1);
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o144 == 0);
  }
  //RRC C
  //#0x09:
  ,function (o421) {"use strict";
    o421.o367 = ((o421.o145 & 0x01) == 0x01);
    o421.o145 = ((o421.o367) ? 0x80 : 0) | (o421.o145 >> 1);
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o145 == 0);
  }
  //RRC D
  //#0x0A:
  ,function (o421) {"use strict";
    o421.o367 = ((o421.o368 & 0x01) == 0x01);
    o421.o368 = ((o421.o367) ? 0x80 : 0) | (o421.o368 >> 1);
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o368 == 0);
  }
  //RRC E
  //#0x0B:
  ,function (o421) {"use strict";
    o421.o367 = ((o421.o146 & 0x01) == 0x01);
    o421.o146 = ((o421.o367) ? 0x80 : 0) | (o421.o146 >> 1);
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o146 == 0);
  }
  //RRC H
  //#0x0C:
  ,function (o421) {"use strict";
    o421.o367 = ((o421.o148 & 0x0100) == 0x0100);
    o421.o148 = ((o421.o367) ? 0x8000 : 0) | ((o421.o148 >> 1) & 0xFF00) | (o421.o148 & 0xFF);
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o148 < 0x100);
  }
  //RRC L
  //#0x0D:
  ,function (o421) {"use strict";
    o421.o367 = ((o421.o148 & 0x01) == 0x01);
    o421.o148 = (o421.o148 & 0xFF00) | ((o421.o367) ? 0x80 : 0) | ((o421.o148 & 0xFF) >> 1);
    o421.o366 = o421.o365 = false;
    o421.o364 = ((o421.o148 & 0xFF) == 0);
  }
  //RRC (HL)
  //#0x0E:
  ,function (o421) {"use strict";
    var o581 = o421.o390[o421.o148](o421, o421.o148);
    o421.o367 = ((o581 & 0x01) == 0x01);
    o581 = ((o421.o367) ? 0x80 : 0) | (o581 >> 1);
    o421.o391[o421.o148](o421, o421.o148, o581);
    o421.o366 = o421.o365 = false;
    o421.o364 = (o581 == 0);
  }
  //RRC A
  //#0x0F:
  ,function (o421) {"use strict";
    o421.o367 = ((o421.o143 & 0x01) == 0x01);
    o421.o143 = ((o421.o367) ? 0x80 : 0) | (o421.o143 >> 1);
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o143 == 0);
  }
  //RL B
  //#0x10:
  ,function (o421) {"use strict";
    var o598 = (o421.o144 > 0x7F);
    o421.o144 = ((o421.o144 << 1) & 0xFF) | ((o421.o367) ? 1 : 0);
    o421.o367 = o598;
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o144 == 0);
  }
  //RL C
  //#0x11:
  ,function (o421) {"use strict";
    var o598 = (o421.o145 > 0x7F);
    o421.o145 = ((o421.o145 << 1) & 0xFF) | ((o421.o367) ? 1 : 0);
    o421.o367 = o598;
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o145 == 0);
  }
  //RL D
  //#0x12:
  ,function (o421) {"use strict";
    var o598 = (o421.o368 > 0x7F);
    o421.o368 = ((o421.o368 << 1) & 0xFF) | ((o421.o367) ? 1 : 0);
    o421.o367 = o598;
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o368 == 0);
  }
  //RL E
  //#0x13:
  ,function (o421) {"use strict";
    var o598 = (o421.o146 > 0x7F);
    o421.o146 = ((o421.o146 << 1) & 0xFF) | ((o421.o367) ? 1 : 0);
    o421.o367 = o598;
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o146 == 0);
  }
  //RL H
  //#0x14:
  ,function (o421) {"use strict";
    var o598 = (o421.o148 > 0x7FFF);
    o421.o148 = ((o421.o148 << 1) & 0xFE00) | ((o421.o367) ? 0x100 : 0) | (o421.o148 & 0xFF);
    o421.o367 = o598;
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o148 < 0x100);
  }
  //RL L
  //#0x15:
  ,function (o421) {"use strict";
    var o598 = ((o421.o148 & 0x80) == 0x80);
    o421.o148 = (o421.o148 & 0xFF00) | ((o421.o148 << 1) & 0xFF) | ((o421.o367) ? 1 : 0);
    o421.o367 = o598;
    o421.o366 = o421.o365 = false;
    o421.o364 = ((o421.o148 & 0xFF) == 0);
  }
  //RL (HL)
  //#0x16:
  ,function (o421) {"use strict";
    var o581 = o421.o390[o421.o148](o421, o421.o148);
    var o598 = (o581 > 0x7F);
    o581 = ((o581 << 1) & 0xFF) | ((o421.o367) ? 1 : 0);
    o421.o367 = o598;
    o421.o391[o421.o148](o421, o421.o148, o581);
    o421.o366 = o421.o365 = false;
    o421.o364 = (o581 == 0);
  }
  //RL A
  //#0x17:
  ,function (o421) {"use strict";
    var o598 = (o421.o143 > 0x7F);
    o421.o143 = ((o421.o143 << 1) & 0xFF) | ((o421.o367) ? 1 : 0);
    o421.o367 = o598;
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o143 == 0);
  }
  //RR B
  //#0x18:
  ,function (o421) {"use strict";
    var o598 = ((o421.o144 & 0x01) == 0x01);
    o421.o144 = ((o421.o367) ? 0x80 : 0) | (o421.o144 >> 1);
    o421.o367 = o598;
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o144 == 0);
  }
  //RR C
  //#0x19:
  ,function (o421) {"use strict";
    var o598 = ((o421.o145 & 0x01) == 0x01);
    o421.o145 = ((o421.o367) ? 0x80 : 0) | (o421.o145 >> 1);
    o421.o367 = o598;
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o145 == 0);
  }
  //RR D
  //#0x1A:
  ,function (o421) {"use strict";
    var o598 = ((o421.o368 & 0x01) == 0x01);
    o421.o368 = ((o421.o367) ? 0x80 : 0) | (o421.o368 >> 1);
    o421.o367 = o598;
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o368 == 0);
  }
  //RR E
  //#0x1B:
  ,function (o421) {"use strict";
    var o598 = ((o421.o146 & 0x01) == 0x01);
    o421.o146 = ((o421.o367) ? 0x80 : 0) | (o421.o146 >> 1);
    o421.o367 = o598;
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o146 == 0);
  }
  //RR H
  //#0x1C:
  ,function (o421) {"use strict";
    var o598 = ((o421.o148 & 0x0100) == 0x0100);
    o421.o148 = ((o421.o367) ? 0x8000 : 0) | ((o421.o148 >> 1) & 0xFF00) | (o421.o148 & 0xFF);
    o421.o367 = o598;
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o148 < 0x100);
  }
  //RR L
  //#0x1D:
  ,function (o421) {"use strict";
    var o598 = ((o421.o148 & 0x01) == 0x01);
    o421.o148 = (o421.o148 & 0xFF00) | ((o421.o367) ? 0x80 : 0) | ((o421.o148 & 0xFF) >> 1);
    o421.o367 = o598;
    o421.o366 = o421.o365 = false;
    o421.o364 = ((o421.o148 & 0xFF) == 0);
  }
  //RR (HL)
  //#0x1E:
  ,function (o421) {"use strict";
    var o581 = o421.o390[o421.o148](o421, o421.o148);
    var o598 = ((o581 & 0x01) == 0x01);
    o581 = ((o421.o367) ? 0x80 : 0) | (o581 >> 1);
    o421.o367 = o598;
    o421.o391[o421.o148](o421, o421.o148, o581);
    o421.o366 = o421.o365 = false;
    o421.o364 = (o581 == 0);
  }
  //RR A
  //#0x1F:
  ,function (o421) {"use strict";
    var o598 = ((o421.o143 & 0x01) == 0x01);
    o421.o143 = ((o421.o367) ? 0x80 : 0) | (o421.o143 >> 1);
    o421.o367 = o598;
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o143 == 0);
  }
  //SLA B
  //#0x20:
  ,function (o421) {"use strict";
    o421.o367 = (o421.o144 > 0x7F);
    o421.o144 = (o421.o144 << 1) & 0xFF;
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o144 == 0);
  }
  //SLA C
  //#0x21:
  ,function (o421) {"use strict";
    o421.o367 = (o421.o145 > 0x7F);
    o421.o145 = (o421.o145 << 1) & 0xFF;
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o145 == 0);
  }
  //SLA D
  //#0x22:
  ,function (o421) {"use strict";
    o421.o367 = (o421.o368 > 0x7F);
    o421.o368 = (o421.o368 << 1) & 0xFF;
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o368 == 0);
  }
  //SLA E
  //#0x23:
  ,function (o421) {"use strict";
    o421.o367 = (o421.o146 > 0x7F);
    o421.o146 = (o421.o146 << 1) & 0xFF;
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o146 == 0);
  }
  //SLA H
  //#0x24:
  ,function (o421) {"use strict";
    o421.o367 = (o421.o148 > 0x7FFF);
    o421.o148 = ((o421.o148 << 1) & 0xFE00) | (o421.o148 & 0xFF);
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o148 < 0x100);
  }
  //SLA L
  //#0x25:
  ,function (o421) {"use strict";
    o421.o367 = ((o421.o148 & 0x0080) == 0x0080);
    o421.o148 = (o421.o148 & 0xFF00) | ((o421.o148 << 1) & 0xFF);
    o421.o366 = o421.o365 = false;
    o421.o364 = ((o421.o148 & 0xFF) == 0);
  }
  //SLA (HL)
  //#0x26:
  ,function (o421) {"use strict";
    var o581 = o421.o390[o421.o148](o421, o421.o148);
    o421.o367 = (o581 > 0x7F);
    o581 = (o581 << 1) & 0xFF;
    o421.o391[o421.o148](o421, o421.o148, o581);
    o421.o366 = o421.o365 = false;
    o421.o364 = (o581 == 0);
  }
  //SLA A
  //#0x27:
  ,function (o421) {"use strict";
    o421.o367 = (o421.o143 > 0x7F);
    o421.o143 = (o421.o143 << 1) & 0xFF;
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o143 == 0);
  }
  //SRA B
  //#0x28:
  ,function (o421) {"use strict";
    o421.o367 = ((o421.o144 & 0x01) == 0x01);
    o421.o144 = (o421.o144 & 0x80) | (o421.o144 >> 1);
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o144 == 0);
  }
  //SRA C
  //#0x29:
  ,function (o421) {"use strict";
    o421.o367 = ((o421.o145 & 0x01) == 0x01);
    o421.o145 = (o421.o145 & 0x80) | (o421.o145 >> 1);
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o145 == 0);
  }
  //SRA D
  //#0x2A:
  ,function (o421) {"use strict";
    o421.o367 = ((o421.o368 & 0x01) == 0x01);
    o421.o368 = (o421.o368 & 0x80) | (o421.o368 >> 1);
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o368 == 0);
  }
  //SRA E
  //#0x2B:
  ,function (o421) {"use strict";
    o421.o367 = ((o421.o146 & 0x01) == 0x01);
    o421.o146 = (o421.o146 & 0x80) | (o421.o146 >> 1);
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o146 == 0);
  }
  //SRA H
  //#0x2C:
  ,function (o421) {"use strict";
    o421.o367 = ((o421.o148 & 0x0100) == 0x0100);
    o421.o148 = ((o421.o148 >> 1) & 0xFF00) | (o421.o148 & 0x80FF);
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o148 < 0x100);
  }
  //SRA L
  //#0x2D:
  ,function (o421) {"use strict";
    o421.o367 = ((o421.o148 & 0x0001) == 0x0001);
    o421.o148 = (o421.o148 & 0xFF80) | ((o421.o148 & 0xFF) >> 1);
    o421.o366 = o421.o365 = false;
    o421.o364 = ((o421.o148 & 0xFF) == 0);
  }
  //SRA (HL)
  //#0x2E:
  ,function (o421) {"use strict";
    var o581 = o421.o390[o421.o148](o421, o421.o148);
    o421.o367 = ((o581 & 0x01) == 0x01);
    o581 = (o581 & 0x80) | (o581 >> 1);
    o421.o391[o421.o148](o421, o421.o148, o581);
    o421.o366 = o421.o365 = false;
    o421.o364 = (o581 == 0);
  }
  //SRA A
  //#0x2F:
  ,function (o421) {"use strict";
    o421.o367 = ((o421.o143 & 0x01) == 0x01);
    o421.o143 = (o421.o143 & 0x80) | (o421.o143 >> 1);
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o143 == 0);
  }
  //SWAP B
  //#0x30:
  ,function (o421) {"use strict";
    o421.o144 = ((o421.o144 & 0xF) << 4) | (o421.o144 >> 4);
    o421.o364 = (o421.o144 == 0);
    o421.o367 = o421.o366 = o421.o365 = false;
  }
  //SWAP C
  //#0x31:
  ,function (o421) {"use strict";
    o421.o145 = ((o421.o145 & 0xF) << 4) | (o421.o145 >> 4);
    o421.o364 = (o421.o145 == 0);
    o421.o367 = o421.o366 = o421.o365 = false;
  }
  //SWAP D
  //#0x32:
  ,function (o421) {"use strict";
    o421.o368 = ((o421.o368 & 0xF) << 4) | (o421.o368 >> 4);
    o421.o364 = (o421.o368 == 0);
    o421.o367 = o421.o366 = o421.o365 = false;
  }
  //SWAP E
  //#0x33:
  ,function (o421) {"use strict";
    o421.o146 = ((o421.o146 & 0xF) << 4) | (o421.o146 >> 4);
    o421.o364 = (o421.o146 == 0);
    o421.o367 = o421.o366 = o421.o365 = false;
  }
  //SWAP H
  //#0x34:
  ,function (o421) {"use strict";
    o421.o148 = ((o421.o148 & 0xF00) << 4) | ((o421.o148 & 0xF000) >> 4) | (o421.o148 & 0xFF);
    o421.o364 = (o421.o148 < 0x100);
    o421.o367 = o421.o366 = o421.o365 = false;
  }
  //SWAP L
  //#0x35:
  ,function (o421) {"use strict";
    o421.o148 = (o421.o148 & 0xFF00) | ((o421.o148 & 0xF) << 4) | ((o421.o148 & 0xF0) >> 4);
    o421.o364 = ((o421.o148 & 0xFF) == 0);
    o421.o367 = o421.o366 = o421.o365 = false;
  }
  //SWAP (HL)
  //#0x36:
  ,function (o421) {"use strict";
    var o581 = o421.o390[o421.o148](o421, o421.o148);
    o581 = ((o581 & 0xF) << 4) | (o581 >> 4);
    o421.o391[o421.o148](o421, o421.o148, o581);
    o421.o364 = (o581 == 0);
    o421.o367 = o421.o366 = o421.o365 = false;
  }
  //SWAP A
  //#0x37:
  ,function (o421) {"use strict";
    o421.o143 = ((o421.o143 & 0xF) << 4) | (o421.o143 >> 4);
    o421.o364 = (o421.o143 == 0);
    o421.o367 = o421.o366 = o421.o365 = false;
  }
  //SRL B
  //#0x38:
  ,function (o421) {"use strict";
    o421.o367 = ((o421.o144 & 0x01) == 0x01);
    o421.o144 >>= 1;
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o144 == 0);
  }
  //SRL C
  //#0x39:
  ,function (o421) {"use strict";
    o421.o367 = ((o421.o145 & 0x01) == 0x01);
    o421.o145 >>= 1;
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o145 == 0);
  }
  //SRL D
  //#0x3A:
  ,function (o421) {"use strict";
    o421.o367 = ((o421.o368 & 0x01) == 0x01);
    o421.o368 >>= 1;
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o368 == 0);
  }
  //SRL E
  //#0x3B:
  ,function (o421) {"use strict";
    o421.o367 = ((o421.o146 & 0x01) == 0x01);
    o421.o146 >>= 1;
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o146 == 0);
  }
  //SRL H
  //#0x3C:
  ,function (o421) {"use strict";
    o421.o367 = ((o421.o148 & 0x0100) == 0x0100);
    o421.o148 = ((o421.o148 >> 1) & 0xFF00) | (o421.o148 & 0xFF);
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o148 < 0x100);
  }
  //SRL L
  //#0x3D:
  ,function (o421) {"use strict";
    o421.o367 = ((o421.o148 & 0x0001) == 0x0001);
    o421.o148 = (o421.o148 & 0xFF00) | ((o421.o148 & 0xFF) >> 1);
    o421.o366 = o421.o365 = false;
    o421.o364 = ((o421.o148 & 0xFF) == 0);
  }
  //SRL (HL)
  //#0x3E:
  ,function (o421) {"use strict";
    var o581 = o421.o390[o421.o148](o421, o421.o148);
    o421.o367 = ((o581 & 0x01) == 0x01);
    o421.o391[o421.o148](o421, o421.o148, o581 >> 1);
    o421.o366 = o421.o365 = false;
    o421.o364 = (o581 < 2);
  }
  //SRL A
  //#0x3F:
  ,function (o421) {"use strict";
    o421.o367 = ((o421.o143 & 0x01) == 0x01);
    o421.o143 >>= 1;
    o421.o366 = o421.o365 = false;
    o421.o364 = (o421.o143 == 0);
  }
  //BIT 0, B
  //#0x40:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o144 & 0x01) == 0);
  }
  //BIT 0, C
  //#0x41:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o145 & 0x01) == 0);
  }
  //BIT 0, D
  //#0x42:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o368 & 0x01) == 0);
  }
  //BIT 0, E
  //#0x43:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o146 & 0x01) == 0);
  }
  //BIT 0, H
  //#0x44:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o148 & 0x0100) == 0);
  }
  //BIT 0, L
  //#0x45:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o148 & 0x0001) == 0);
  }
  //BIT 0, (HL)
  //#0x46:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o390[o421.o148](o421, o421.o148) & 0x01) == 0);
  }
  //BIT 0, A
  //#0x47:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o143 & 0x01) == 0);
  }
  //BIT 1, B
  //#0x48:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o144 & 0x02) == 0);
  }
  //BIT 1, C
  //#0x49:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o145 & 0x02) == 0);
  }
  //BIT 1, D
  //#0x4A:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o368 & 0x02) == 0);
  }
  //BIT 1, E
  //#0x4B:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o146 & 0x02) == 0);
  }
  //BIT 1, H
  //#0x4C:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o148 & 0x0200) == 0);
  }
  //BIT 1, L
  //#0x4D:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o148 & 0x0002) == 0);
  }
  //BIT 1, (HL)
  //#0x4E:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o390[o421.o148](o421, o421.o148) & 0x02) == 0);
  }
  //BIT 1, A
  //#0x4F:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o143 & 0x02) == 0);
  }
  //BIT 2, B
  //#0x50:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o144 & 0x04) == 0);
  }
  //BIT 2, C
  //#0x51:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o145 & 0x04) == 0);
  }
  //BIT 2, D
  //#0x52:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o368 & 0x04) == 0);
  }
  //BIT 2, E
  //#0x53:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o146 & 0x04) == 0);
  }
  //BIT 2, H
  //#0x54:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o148 & 0x0400) == 0);
  }
  //BIT 2, L
  //#0x55:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o148 & 0x0004) == 0);
  }
  //BIT 2, (HL)
  //#0x56:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o390[o421.o148](o421, o421.o148) & 0x04) == 0);
  }
  //BIT 2, A
  //#0x57:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o143 & 0x04) == 0);
  }
  //BIT 3, B
  //#0x58:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o144 & 0x08) == 0);
  }
  //BIT 3, C
  //#0x59:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o145 & 0x08) == 0);
  }
  //BIT 3, D
  //#0x5A:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o368 & 0x08) == 0);
  }
  //BIT 3, E
  //#0x5B:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o146 & 0x08) == 0);
  }
  //BIT 3, H
  //#0x5C:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o148 & 0x0800) == 0);
  }
  //BIT 3, L
  //#0x5D:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o148 & 0x0008) == 0);
  }
  //BIT 3, (HL)
  //#0x5E:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o390[o421.o148](o421, o421.o148) & 0x08) == 0);
  }
  //BIT 3, A
  //#0x5F:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o143 & 0x08) == 0);
  }
  //BIT 4, B
  //#0x60:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o144 & 0x10) == 0);
  }
  //BIT 4, C
  //#0x61:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o145 & 0x10) == 0);
  }
  //BIT 4, D
  //#0x62:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o368 & 0x10) == 0);
  }
  //BIT 4, E
  //#0x63:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o146 & 0x10) == 0);
  }
  //BIT 4, H
  //#0x64:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o148 & 0x1000) == 0);
  }
  //BIT 4, L
  //#0x65:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o148 & 0x0010) == 0);
  }
  //BIT 4, (HL)
  //#0x66:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o390[o421.o148](o421, o421.o148) & 0x10) == 0);
  }
  //BIT 4, A
  //#0x67:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o143 & 0x10) == 0);
  }
  //BIT 5, B
  //#0x68:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o144 & 0x20) == 0);
  }
  //BIT 5, C
  //#0x69:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o145 & 0x20) == 0);
  }
  //BIT 5, D
  //#0x6A:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o368 & 0x20) == 0);
  }
  //BIT 5, E
  //#0x6B:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o146 & 0x20) == 0);
  }
  //BIT 5, H
  //#0x6C:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o148 & 0x2000) == 0);
  }
  //BIT 5, L
  //#0x6D:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o148 & 0x0020) == 0);
  }
  //BIT 5, (HL)
  //#0x6E:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o390[o421.o148](o421, o421.o148) & 0x20) == 0);
  }
  //BIT 5, A
  //#0x6F:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o143 & 0x20) == 0);
  }
  //BIT 6, B
  //#0x70:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o144 & 0x40) == 0);
  }
  //BIT 6, C
  //#0x71:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o145 & 0x40) == 0);
  }
  //BIT 6, D
  //#0x72:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o368 & 0x40) == 0);
  }
  //BIT 6, E
  //#0x73:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o146 & 0x40) == 0);
  }
  //BIT 6, H
  //#0x74:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o148 & 0x4000) == 0);
  }
  //BIT 6, L
  //#0x75:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o148 & 0x0040) == 0);
  }
  //BIT 6, (HL)
  //#0x76:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o390[o421.o148](o421, o421.o148) & 0x40) == 0);
  }
  //BIT 6, A
  //#0x77:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o143 & 0x40) == 0);
  }
  //BIT 7, B
  //#0x78:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o144 & 0x80) == 0);
  }
  //BIT 7, C
  //#0x79:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o145 & 0x80) == 0);
  }
  //BIT 7, D
  //#0x7A:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o368 & 0x80) == 0);
  }
  //BIT 7, E
  //#0x7B:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o146 & 0x80) == 0);
  }
  //BIT 7, H
  //#0x7C:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o148 & 0x8000) == 0);
  }
  //BIT 7, L
  //#0x7D:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o148 & 0x0080) == 0);
  }
  //BIT 7, (HL)
  //#0x7E:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o390[o421.o148](o421, o421.o148) & 0x80) == 0);
  }
  //BIT 7, A
  //#0x7F:
  ,function (o421) {"use strict";
    o421.o366 = true;
    o421.o365 = false;
    o421.o364 = ((o421.o143 & 0x80) == 0);
  }
  //RES 0, B
  //#0x80:
  ,function (o421) {"use strict";
    o421.o144 &= 0xFE;
  }
  //RES 0, C
  //#0x81:
  ,function (o421) {"use strict";
    o421.o145 &= 0xFE;
  }
  //RES 0, D
  //#0x82:
  ,function (o421) {"use strict";
    o421.o368 &= 0xFE;
  }
  //RES 0, E
  //#0x83:
  ,function (o421) {"use strict";
    o421.o146 &= 0xFE;
  }
  //RES 0, H
  //#0x84:
  ,function (o421) {"use strict";
    o421.o148 &= 0xFEFF;
  }
  //RES 0, L
  //#0x85:
  ,function (o421) {"use strict";
    o421.o148 &= 0xFFFE;
  }
  //RES 0, (HL)
  //#0x86:
  ,function (o421) {"use strict";
    o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) & 0xFE);
  }
  //RES 0, A
  //#0x87:
  ,function (o421) {"use strict";
    o421.o143 &= 0xFE;
  }
  //RES 1, B
  //#0x88:
  ,function (o421) {"use strict";
    o421.o144 &= 0xFD;
  }
  //RES 1, C
  //#0x89:
  ,function (o421) {"use strict";
    o421.o145 &= 0xFD;
  }
  //RES 1, D
  //#0x8A:
  ,function (o421) {"use strict";
    o421.o368 &= 0xFD;
  }
  //RES 1, E
  //#0x8B:
  ,function (o421) {"use strict";
    o421.o146 &= 0xFD;
  }
  //RES 1, H
  //#0x8C:
  ,function (o421) {"use strict";
    o421.o148 &= 0xFDFF;
  }
  //RES 1, L
  //#0x8D:
  ,function (o421) {"use strict";
    o421.o148 &= 0xFFFD;
  }
  //RES 1, (HL)
  //#0x8E:
  ,function (o421) {"use strict";
    o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) & 0xFD);
  }
  //RES 1, A
  //#0x8F:
  ,function (o421) {"use strict";
    o421.o143 &= 0xFD;
  }
  //RES 2, B
  //#0x90:
  ,function (o421) {"use strict";
    o421.o144 &= 0xFB;
  }
  //RES 2, C
  //#0x91:
  ,function (o421) {"use strict";
    o421.o145 &= 0xFB;
  }
  //RES 2, D
  //#0x92:
  ,function (o421) {"use strict";
    o421.o368 &= 0xFB;
  }
  //RES 2, E
  //#0x93:
  ,function (o421) {"use strict";
    o421.o146 &= 0xFB;
  }
  //RES 2, H
  //#0x94:
  ,function (o421) {"use strict";
    o421.o148 &= 0xFBFF;
  }
  //RES 2, L
  //#0x95:
  ,function (o421) {"use strict";
    o421.o148 &= 0xFFFB;
  }
  //RES 2, (HL)
  //#0x96:
  ,function (o421) {"use strict";
    o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) & 0xFB);
  }
  //RES 2, A
  //#0x97:
  ,function (o421) {"use strict";
    o421.o143 &= 0xFB;
  }
  //RES 3, B
  //#0x98:
  ,function (o421) {"use strict";
    o421.o144 &= 0xF7;
  }
  //RES 3, C
  //#0x99:
  ,function (o421) {"use strict";
    o421.o145 &= 0xF7;
  }
  //RES 3, D
  //#0x9A:
  ,function (o421) {"use strict";
    o421.o368 &= 0xF7;
  }
  //RES 3, E
  //#0x9B:
  ,function (o421) {"use strict";
    o421.o146 &= 0xF7;
  }
  //RES 3, H
  //#0x9C:
  ,function (o421) {"use strict";
    o421.o148 &= 0xF7FF;
  }
  //RES 3, L
  //#0x9D:
  ,function (o421) {"use strict";
    o421.o148 &= 0xFFF7;
  }
  //RES 3, (HL)
  //#0x9E:
  ,function (o421) {"use strict";
    o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) & 0xF7);
  }
  //RES 3, A
  //#0x9F:
  ,function (o421) {"use strict";
    o421.o143 &= 0xF7;
  }
  //RES 3, B
  //#0xA0:
  ,function (o421) {"use strict";
    o421.o144 &= 0xEF;
  }
  //RES 4, C
  //#0xA1:
  ,function (o421) {"use strict";
    o421.o145 &= 0xEF;
  }
  //RES 4, D
  //#0xA2:
  ,function (o421) {"use strict";
    o421.o368 &= 0xEF;
  }
  //RES 4, E
  //#0xA3:
  ,function (o421) {"use strict";
    o421.o146 &= 0xEF;
  }
  //RES 4, H
  //#0xA4:
  ,function (o421) {"use strict";
    o421.o148 &= 0xEFFF;
  }
  //RES 4, L
  //#0xA5:
  ,function (o421) {"use strict";
    o421.o148 &= 0xFFEF;
  }
  //RES 4, (HL)
  //#0xA6:
  ,function (o421) {"use strict";
    o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) & 0xEF);
  }
  //RES 4, A
  //#0xA7:
  ,function (o421) {"use strict";
    o421.o143 &= 0xEF;
  }
  //RES 5, B
  //#0xA8:
  ,function (o421) {"use strict";
    o421.o144 &= 0xDF;
  }
  //RES 5, C
  //#0xA9:
  ,function (o421) {"use strict";
    o421.o145 &= 0xDF;
  }
  //RES 5, D
  //#0xAA:
  ,function (o421) {"use strict";
    o421.o368 &= 0xDF;
  }
  //RES 5, E
  //#0xAB:
  ,function (o421) {"use strict";
    o421.o146 &= 0xDF;
  }
  //RES 5, H
  //#0xAC:
  ,function (o421) {"use strict";
    o421.o148 &= 0xDFFF;
  }
  //RES 5, L
  //#0xAD:
  ,function (o421) {"use strict";
    o421.o148 &= 0xFFDF;
  }
  //RES 5, (HL)
  //#0xAE:
  ,function (o421) {"use strict";
    o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) & 0xDF);
  }
  //RES 5, A
  //#0xAF:
  ,function (o421) {"use strict";
    o421.o143 &= 0xDF;
  }
  //RES 6, B
  //#0xB0:
  ,function (o421) {"use strict";
    o421.o144 &= 0xBF;
  }
  //RES 6, C
  //#0xB1:
  ,function (o421) {"use strict";
    o421.o145 &= 0xBF;
  }
  //RES 6, D
  //#0xB2:
  ,function (o421) {"use strict";
    o421.o368 &= 0xBF;
  }
  //RES 6, E
  //#0xB3:
  ,function (o421) {"use strict";
    o421.o146 &= 0xBF;
  }
  //RES 6, H
  //#0xB4:
  ,function (o421) {"use strict";
    o421.o148 &= 0xBFFF;
  }
  //RES 6, L
  //#0xB5:
  ,function (o421) {"use strict";
    o421.o148 &= 0xFFBF;
  }
  //RES 6, (HL)
  //#0xB6:
  ,function (o421) {"use strict";
    o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) & 0xBF);
  }
  //RES 6, A
  //#0xB7:
  ,function (o421) {"use strict";
    o421.o143 &= 0xBF;
  }
  //RES 7, B
  //#0xB8:
  ,function (o421) {"use strict";
    o421.o144 &= 0x7F;
  }
  //RES 7, C
  //#0xB9:
  ,function (o421) {"use strict";
    o421.o145 &= 0x7F;
  }
  //RES 7, D
  //#0xBA:
  ,function (o421) {"use strict";
    o421.o368 &= 0x7F;
  }
  //RES 7, E
  //#0xBB:
  ,function (o421) {"use strict";
    o421.o146 &= 0x7F;
  }
  //RES 7, H
  //#0xBC:
  ,function (o421) {"use strict";
    o421.o148 &= 0x7FFF;
  }
  //RES 7, L
  //#0xBD:
  ,function (o421) {"use strict";
    o421.o148 &= 0xFF7F;
  }
  //RES 7, (HL)
  //#0xBE:
  ,function (o421) {"use strict";
    o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) & 0x7F);
  }
  //RES 7, A
  //#0xBF:
  ,function (o421) {"use strict";
    o421.o143 &= 0x7F;
  }
  //SET 0, B
  //#0xC0:
  ,function (o421) {"use strict";
    o421.o144 |= 0x01;
  }
  //SET 0, C
  //#0xC1:
  ,function (o421) {"use strict";
    o421.o145 |= 0x01;
  }
  //SET 0, D
  //#0xC2:
  ,function (o421) {"use strict";
    o421.o368 |= 0x01;
  }
  //SET 0, E
  //#0xC3:
  ,function (o421) {"use strict";
    o421.o146 |= 0x01;
  }
  //SET 0, H
  //#0xC4:
  ,function (o421) {"use strict";
    o421.o148 |= 0x0100;
  }
  //SET 0, L
  //#0xC5:
  ,function (o421) {"use strict";
    o421.o148 |= 0x01;
  }
  //SET 0, (HL)
  //#0xC6:
  ,function (o421) {"use strict";
    o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) | 0x01);
  }
  //SET 0, A
  //#0xC7:
  ,function (o421) {"use strict";
    o421.o143 |= 0x01;
  }
  //SET 1, B
  //#0xC8:
  ,function (o421) {"use strict";
    o421.o144 |= 0x02;
  }
  //SET 1, C
  //#0xC9:
  ,function (o421) {"use strict";
    o421.o145 |= 0x02;
  }
  //SET 1, D
  //#0xCA:
  ,function (o421) {"use strict";
    o421.o368 |= 0x02;
  }
  //SET 1, E
  //#0xCB:
  ,function (o421) {"use strict";
    o421.o146 |= 0x02;
  }
  //SET 1, H
  //#0xCC:
  ,function (o421) {"use strict";
    o421.o148 |= 0x0200;
  }
  //SET 1, L
  //#0xCD:
  ,function (o421) {"use strict";
    o421.o148 |= 0x02;
  }
  //SET 1, (HL)
  //#0xCE:
  ,function (o421) {"use strict";
    o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) | 0x02);
  }
  //SET 1, A
  //#0xCF:
  ,function (o421) {"use strict";
    o421.o143 |= 0x02;
  }
  //SET 2, B
  //#0xD0:
  ,function (o421) {"use strict";
    o421.o144 |= 0x04;
  }
  //SET 2, C
  //#0xD1:
  ,function (o421) {"use strict";
    o421.o145 |= 0x04;
  }
  //SET 2, D
  //#0xD2:
  ,function (o421) {"use strict";
    o421.o368 |= 0x04;
  }
  //SET 2, E
  //#0xD3:
  ,function (o421) {"use strict";
    o421.o146 |= 0x04;
  }
  //SET 2, H
  //#0xD4:
  ,function (o421) {"use strict";
    o421.o148 |= 0x0400;
  }
  //SET 2, L
  //#0xD5:
  ,function (o421) {"use strict";
    o421.o148 |= 0x04;
  }
  //SET 2, (HL)
  //#0xD6:
  ,function (o421) {"use strict";
    o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) | 0x04);
  }
  //SET 2, A
  //#0xD7:
  ,function (o421) {"use strict";
    o421.o143 |= 0x04;
  }
  //SET 3, B
  //#0xD8:
  ,function (o421) {"use strict";
    o421.o144 |= 0x08;
  }
  //SET 3, C
  //#0xD9:
  ,function (o421) {"use strict";
    o421.o145 |= 0x08;
  }
  //SET 3, D
  //#0xDA:
  ,function (o421) {"use strict";
    o421.o368 |= 0x08;
  }
  //SET 3, E
  //#0xDB:
  ,function (o421) {"use strict";
    o421.o146 |= 0x08;
  }
  //SET 3, H
  //#0xDC:
  ,function (o421) {"use strict";
    o421.o148 |= 0x0800;
  }
  //SET 3, L
  //#0xDD:
  ,function (o421) {"use strict";
    o421.o148 |= 0x08;
  }
  //SET 3, (HL)
  //#0xDE:
  ,function (o421) {"use strict";
    o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) | 0x08);
  }
  //SET 3, A
  //#0xDF:
  ,function (o421) {"use strict";
    o421.o143 |= 0x08;
  }
  //SET 4, B
  //#0xE0:
  ,function (o421) {"use strict";
    o421.o144 |= 0x10;
  }
  //SET 4, C
  //#0xE1:
  ,function (o421) {"use strict";
    o421.o145 |= 0x10;
  }
  //SET 4, D
  //#0xE2:
  ,function (o421) {"use strict";
    o421.o368 |= 0x10;
  }
  //SET 4, E
  //#0xE3:
  ,function (o421) {"use strict";
    o421.o146 |= 0x10;
  }
  //SET 4, H
  //#0xE4:
  ,function (o421) {"use strict";
    o421.o148 |= 0x1000;
  }
  //SET 4, L
  //#0xE5:
  ,function (o421) {"use strict";
    o421.o148 |= 0x10;
  }
  //SET 4, (HL)
  //#0xE6:
  ,function (o421) {"use strict";
    o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) | 0x10);
  }
  //SET 4, A
  //#0xE7:
  ,function (o421) {"use strict";
    o421.o143 |= 0x10;
  }
  //SET 5, B
  //#0xE8:
  ,function (o421) {"use strict";
    o421.o144 |= 0x20;
  }
  //SET 5, C
  //#0xE9:
  ,function (o421) {"use strict";
    o421.o145 |= 0x20;
  }
  //SET 5, D
  //#0xEA:
  ,function (o421) {"use strict";
    o421.o368 |= 0x20;
  }
  //SET 5, E
  //#0xEB:
  ,function (o421) {"use strict";
    o421.o146 |= 0x20;
  }
  //SET 5, H
  //#0xEC:
  ,function (o421) {"use strict";
    o421.o148 |= 0x2000;
  }
  //SET 5, L
  //#0xED:
  ,function (o421) {"use strict";
    o421.o148 |= 0x20;
  }
  //SET 5, (HL)
  //#0xEE:
  ,function (o421) {"use strict";
    o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) | 0x20);
  }
  //SET 5, A
  //#0xEF:
  ,function (o421) {"use strict";
    o421.o143 |= 0x20;
  }
  //SET 6, B
  //#0xF0:
  ,function (o421) {"use strict";
    o421.o144 |= 0x40;
  }
  //SET 6, C
  //#0xF1:
  ,function (o421) {"use strict";
    o421.o145 |= 0x40;
  }
  //SET 6, D
  //#0xF2:
  ,function (o421) {"use strict";
    o421.o368 |= 0x40;
  }
  //SET 6, E
  //#0xF3:
  ,function (o421) {"use strict";
    o421.o146 |= 0x40;
  }
  //SET 6, H
  //#0xF4:
  ,function (o421) {"use strict";
    o421.o148 |= 0x4000;
  }
  //SET 6, L
  //#0xF5:
  ,function (o421) {"use strict";
    o421.o148 |= 0x40;
  }
  //SET 6, (HL)
  //#0xF6:
  ,function (o421) {"use strict";
    o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) | 0x40);
  }
  //SET 6, A
  //#0xF7:
  ,function (o421) {"use strict";
    o421.o143 |= 0x40;
  }
  //SET 7, B
  //#0xF8:
  ,function (o421) {"use strict";
    o421.o144 |= 0x80;
  }
  //SET 7, C
  //#0xF9:
  ,function (o421) {"use strict";
    o421.o145 |= 0x80;
  }
  //SET 7, D
  //#0xFA:
  ,function (o421) {"use strict";
    o421.o368 |= 0x80;
  }
  //SET 7, E
  //#0xFB:
  ,function (o421) {"use strict";
    o421.o146 |= 0x80;
  }
  //SET 7, H
  //#0xFC:
  ,function (o421) {"use strict";
    o421.o148 |= 0x8000;
  }
  //SET 7, L
  //#0xFD:
  ,function (o421) {"use strict";
    o421.o148 |= 0x80;
  }
  //SET 7, (HL)
  //#0xFE:
  ,function (o421) {"use strict";
    o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) | 0x80);
  }
  //SET 7, A
  //#0xFF:
  ,function (o421) {"use strict";
    o421.o143 |= 0x80;
  }
];
o360.prototype.o599 = [    //Number of machine cycles for each instruction:
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
o360.prototype.o591 = [  //Number of machine cycles for each 0xCBXX instruction:
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
o360.prototype.o600 = function () {"use strict";
  if (!this.o601 || this.o157.length == 0) {
    //No battery backup...
    return [];
  }
  else {
    //Return the MBC RAM for backup...
    return this.o152(this.o157);
  }
}
o360.prototype.o602 = function () {"use strict";
  if (!this.o519) {
    //No battery backup...
    return [];
  }
  else {
    //Return the MBC RAM for backup...
    return [
      this.o499,
      this.o424,
      this.o425,
      this.o426,
      this.o427,
      this.o428,
      this.o429,
      this.o430,
      this.o431,
      this.o432,
      this.o433,
      this.o434,
      this.o435
    ];
  }
}
o360.prototype.o603 = function () {"use strict";
  return [
    this.o152(this.o153),
    this.o375,
    this.o143,
    this.o364,
    this.o365,
    this.o366,
    this.o367,
    this.o144,
    this.o145,
    this.o368,
    this.o146,
    this.o148,
    this.o150,
    this.o149,
    this.o378,
    this.o381,
    this.o385,
    this.o386,
    this.o387,
    this.o152(this.o155),
    this.o152(this.o157),
    this.o152(this.o394),
    this.o522,
    this.o152(this.o395),
    this.o396,
    this.o397,
    this.o398,
    this.o399,
    this.o400,
    this.o401,
    this.o402,
    this.o405,
    this.o406,
    this.o407,
    this.name,
    this.o408,
    this.o412,
    this.o414,
    this.o415,
    this.o416,
    this.o417,
    this.o418,
    this.o530,
    this.o525,
    this.o526,
    this.o527,
    this.o531,
    this.o532,
    this.o492,
    this.o489,
    this.o490,
    this.o491,
    this.o493,
    this.o494,
    this.o495,
    this.o496,
    this.o497,
    this.o499,
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
    this.o535,
    this.o152(this.o565),
    this.o528,
    this.o529,
    this.o604,
    this.o605,
    this.o606,
    this.o607,
    this.o608,
    this.o609,
    this.o610,
    this.o611,
    this.o612,
    this.o613,
    this.o614,
    this.o615,
    this.o616,
    this.o617,
    this.o618,
    this.o619,
    this.o620,
    this.o621,
    this.o622,
    this.o623,
    this.o624,
    this.o625,
    this.o626,
    this.o627,
    this.o628,
    this.o629,
    this.o630,
    this.o631,
    this.o632,
    this.o633,
    this.o152(this.o451),
    this.o634,
    this.o635,
    this.o636,
    this.o637,
    this.o638,
    this.o639,
    this.o640,
    this.o641,
    this.o642,
    this.o643,
    this.o450,
    this.o452,
    this.o453,
    this.o454,
    this.o455,
    this.o456,
    this.o457,
    this.o458,
    this.o459,
    this.o460,
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
    this.o473,
    this.o474,
    this.o475,
    this.o476,
    this.o477,
    this.o478,
    this.o479,
    this.o480,
    this.o481,
    this.o482,
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
    this.o502,
    this.o503,
    this.o504,
    this.o424,
    this.o425,
    this.o426,
    this.o427,
    this.o428,
    this.o429,
    this.o430,
    this.o431,
    this.o432,
    this.o433,
    this.o434,
    this.o435,
    this.o376,
    this.o379,
    this.o411,
    this.o403,
    this.o521,
    this.o533,
    this.o534,
    this.o152(this.o547),
    this.o152(this.o548),
    this.o152(this.o549),
    this.o152(this.o550),
    this.o152(this.o551),
    this.o152(this.o552),
    this.o152(this.o553),
    this.o152(this.o554),
    this.o152(this.o555),
    this.o152(this.o556),
    this.o152(this.o540),
    this.o152(this.o541),
    this.o506,
    this.o383,
    this.o384,
    this.o374,
    this.o561,
    this.o524,
    this.o523,
    this.o389
  ];
}
o360.prototype.o660 = function (o661) {"use strict";
  var index = 0;
  var o142 = o661.slice(0);
  this.o153 = this.o662(o142[index++], "uint8");
  this.o663 = Math.floor(this.o153.length / 0x4000);
  this.o375 = o142[index++];
  this.o143 = o142[index++];
  this.o364 = o142[index++];
  this.o365 = o142[index++];
  this.o366 = o142[index++];
  this.o367 = o142[index++];
  this.o144 = o142[index++];
  this.o145 = o142[index++];
  this.o368 = o142[index++];
  this.o146 = o142[index++];
  this.o148 = o142[index++];
  this.o150 = o142[index++];
  this.o149 = o142[index++];
  this.o378 = o142[index++];
  this.o381 = o142[index++];
  this.o385 = o142[index++];
  this.o386 = o142[index++];
  this.o387 = o142[index++];
  this.o155 = this.o662(o142[index++], "uint8");
  this.o157 = this.o662(o142[index++], "uint8");
  this.o394 = this.o662(o142[index++], "uint8");
  this.o522 = o142[index++];
  this.o395 = this.o662(o142[index++], "uint8");
  this.o396 = o142[index++];
  this.o397 = o142[index++];
  this.o398 = o142[index++];
  this.o399 = o142[index++];
  this.o400 = o142[index++];
  this.o401 = o142[index++];
  this.o402 = o142[index++];
  this.o405 = o142[index++];
  this.o406 = o142[index++];
  this.o407 = o142[index++];
  this.name = o142[index++];
  this.o408 = o142[index++];
  this.o412 = o142[index++];
  this.o414 = o142[index++];
  this.o415 = o142[index++];
  this.o416 = o142[index++];
  this.o417 = o142[index++];
  this.o418 = o142[index++];
  this.o530 = o142[index++];
  this.o525 = o142[index++];
  this.o526 = o142[index++];
  this.o527 = o142[index++];
  this.o531 = o142[index++];
  this.o532 = o142[index++];
  this.o492 = o142[index++];
  this.o489 = o142[index++];
  this.o490 = o142[index++];
  this.o491 = o142[index++];
  this.o493 = o142[index++];
  this.o494 = o142[index++];
  this.o495 = o142[index++];
  this.o496 = o142[index++];
  this.o497 = o142[index++];
  this.o499 = o142[index++];
  this.o507 = o142[index++];
  this.o508 = o142[index++];
  this.o509 = o142[index++];
  this.o510 = o142[index++];
  this.o511 = o142[index++];
  this.o512 = o142[index++];
  this.o513 = o142[index++];
  this.o514 = o142[index++];
  this.o515 = o142[index++];
  this.o516 = o142[index++];
  this.o517 = o142[index++];
  this.o518 = o142[index++];
  this.o535 = o142[index++];
  this.o565 = this.o662(o142[index++], "int32");
  this.o528 = o142[index++];
  this.o529 = o142[index++];
  this.o604 = o142[index++];
  this.o605 = o142[index++];
  this.o606 = o142[index++];
  this.o607 = o142[index++];
  this.o608 = o142[index++];
  this.o609 = o142[index++];
  this.o610 = o142[index++];
  this.o611 = o142[index++];
  this.o612 = o142[index++];
  this.o613 = o142[index++];
  this.o614 = o142[index++];
  this.o615 = o142[index++];
  this.o616 = o142[index++];
  this.o617 = o142[index++];
  this.o618 = o142[index++];
  this.o619 = o142[index++];
  this.o620 = o142[index++];
  this.o621 = o142[index++];
  this.o622 = o142[index++];
  this.o623 = o142[index++];
  this.o624 = o142[index++];
  this.o625 = o142[index++];
  this.o626 = o142[index++];
  this.o627 = o142[index++];
  this.o628 = o142[index++];
  this.o629 = o142[index++];
  this.o630 = o142[index++];
  this.o631 = o142[index++];
  this.o632 = o142[index++];
  this.o633 = o142[index++];
  this.o451 = this.o662(o142[index++], "int8");
  this.o634 = o142[index++];
  this.o635 = o142[index++];
  this.o636 = o142[index++];
  this.o637 = o142[index++];
  this.o638 = o142[index++];
  this.o639 = o142[index++];
  this.o640 = o142[index++];
  this.o641 = o142[index++];
  this.o642 = o142[index++];
  this.o643 = o142[index++];
  this.o450 = o142[index++];
  this.o452 = o142[index++];
  this.o453 = o142[index++];
  this.o454 = o142[index++];
  this.o455 = o142[index++];
  this.o456 = o142[index++];
  this.o457 = o142[index++];
  this.o458 = o142[index++];
  this.o459 = o142[index++];
  this.o460 = o142[index++];
  this.o461 = o142[index++];
  this.o462 = o142[index++];
  this.o463 = o142[index++];
  this.o464 = o142[index++];
  this.o465 = o142[index++];
  this.o466 = o142[index++];
  this.o467 = o142[index++];
  this.o468 = o142[index++];
  this.o469 = o142[index++];
  this.o470 = o142[index++];
  this.o471 = o142[index++];
  this.o472 = o142[index++];
  this.o473 = o142[index++];
  this.o474 = o142[index++];
  this.o475 = o142[index++];
  this.o476 = o142[index++];
  this.o477 = o142[index++];
  this.o478 = o142[index++];
  this.o479 = o142[index++];
  this.o480 = o142[index++];
  this.o481 = o142[index++];
  this.o482 = o142[index++];
  this.o644 = o142[index++];
  this.o645 = o142[index++];
  this.o646 = o142[index++];
  this.o647 = o142[index++];
  this.o648 = o142[index++];
  this.o649 = o142[index++];
  this.o650 = o142[index++];
  this.o651 = o142[index++];
  this.o652 = o142[index++];
  this.o653 = o142[index++];
  this.o654 = o142[index++];
  this.o655 = o142[index++];
  this.o656 = o142[index++];
  this.o657 = o142[index++];
  this.o658 = o142[index++];
  this.o659 = o142[index++];
  this.o502 = o142[index++];
  this.o503 = o142[index++];
  this.o504 = o142[index++];
  this.o424 = o142[index++];
  this.o425 = o142[index++];
  this.o426 = o142[index++];
  this.o427 = o142[index++];
  this.o428 = o142[index++];
  this.o429 = o142[index++];
  this.o430 = o142[index++];
  this.o431 = o142[index++];
  this.o432 = o142[index++];
  this.o433 = o142[index++];
  this.o434 = o142[index++];
  this.o435 = o142[index++];
  this.o376 = o142[index++];
  this.o379 = o142[index++];
  this.o411 = o142[index++];
  this.o403 = o142[index++];
  this.o521 = o142[index++];
  this.o533 = o142[index++];
  this.o534 = o142[index++];
  this.o547 = this.o662(o142[index++], "uint8");
  this.o548 = this.o662(o142[index++], "uint8");
  this.o549 = this.o662(o142[index++], "int32");
  this.o550 = this.o662(o142[index++], "int32");
  this.o551 = this.o662(o142[index++], "int32");
  this.o552 = this.o662(o142[index++], "int32");
  this.o553 = this.o662(o142[index++], "int32");
  this.o554 = this.o662(o142[index++], "int32");
  this.o555 = this.o662(o142[index++], "int32");
  this.o556 = this.o662(o142[index++], "int32");
  this.o540 = this.o662(o142[index++], "uint8");
  this.o541 = this.o662(o142[index++], "uint8");
  this.o506 = o142[index++];
  this.o383 = o142[index++];
  this.o384 = o142[index++];
  this.o664();
  this.o374 = o142[index++];
  this.o561 = o142[index++];
  this.o524 = o142[index++];
  this.o523 = o142[index++];
  this.o389 = o142[index];
  this.o409 = true;
  this.o599 = this.o662(this.o599, "uint8");
  this.o591 = this.o662(this.o591, "uint8");
  this.o665();
  this.o666();
  this.o667();
  this.o668();
  this.o669();
  this.o448 = (this.o643 == 0x7FFF) ? this.o446 : this.o447;
  this.o670 = (this.o643 == 0x7FFF) ? 15 : 7;
}
o360.prototype.o671 = function () {"use strict";
  if (typeof this.o672 == "function" && this.o519) {
    var o673 = this.o672(this.name);
    var index = 0;
    this.o499 = o673[index++];
    this.o424 = o673[index++];
    this.o425 = o673[index++];
    this.o426 = o673[index++];
    this.o427 = o673[index++];
    this.o428 = o673[index++];
    this.o429 = o673[index++];
    this.o430 = o673[index++];
    this.o431 = o673[index++];
    this.o432 = o673[index++];
    this.o433 = o673[index++];
    this.o434 = o673[index++];
    this.o435 = o673[index];
  }
}

o360.prototype.o73 = function () {"use strict";
  this.o674();  //Write the startup memory.
  this.o675();    //Load the ROM into memory and get cartridge information from it.
  this.o668();    //Initialize the graphics.
  this.o669();  //Sound object initialization.
  this.o12();      //Start the emulation.
}
o360.prototype.o674 = function () {"use strict";
  //Initialize the RAM:
  this.o155 = this.o676(0x10000, 0, "uint8");
  this.o565 = this.o676(23040, 0xF8F8F8, "int32");
  this.o540 = this.o676(0x800, 0, "uint8");
  this.o599 = this.o662(this.o599, "uint8");
  this.o591 = this.o662(this.o591, "uint8");
  this.o451 = this.o676(0x20, 0, "int8");
}
o360.prototype.o677 = function (o678) {"use strict";
  var o679 = [];
  var o680 = 0;
  while (o680 < o678) {
    o679[o680++] = this.o676(64, 0, "uint8");
  }
  return o679;
}
o360.prototype.o681 = function () {"use strict";
  //Fill in the boot ROM set register values
  //Default values to the GB boot ROM values, then fill in the GBC boot ROM values after ROM loading
  var index = 0xFF;
  while (index >= 0) {
    if (index >= 0x30 && index < 0x40) {
      this.o580(0xFF00 | index, this.o577[index]);
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
          this.o580(0xFF00 | index, this.o577[index]);
          break;
        default:
          this.o155[0xFF00 | index] = this.o577[index];
      }
    }
    --index;
  }
  if (this.o400) {
    this.o155[0xFF6C] = 0xFE;
    this.o155[0xFF74] = 0xFE;
  }
  else {
    this.o155[0xFF48] = 0xFF;
    this.o155[0xFF49] = 0xFF;
    this.o155[0xFF6C] = 0xFF;
    this.o155[0xFF74] = 0xFF;
  }
  //Start as an unset device:
  o113("Starting without the GBC boot ROM.", 0);
  this.o143 = (this.o400) ? 0x11 : 0x1;
  this.o144 = 0;
  this.o145 = 0x13;
  this.o368 = 0;
  this.o146 = 0xD8;
  this.o364 = true;
  this.o365 = false;
  this.o366 = true;
  this.o367 = true;
  this.o148 = 0x014D;
  this.o422 = this.o419;
  this.o381 = false;
  this.o382 = 0;
  this.o383 = 225;
  this.o384 = 0;
  this.o385 = false;
  this.o386 = 12;
  this.o411 = 0;
  this.o412 = 1;
  this.o413 = 252;
  this.o414 = false;
  this.o415 = false;
  this.o416 = false;
  this.o417 = false;
  this.o418 = true;
  this.o604 = 0x2000;
  this.o644 = 0;
  this.o645 = this.o443[2];
  this.o606 = 0;
  this.o607 = 0;
  this.o608 = false;
  this.o609 = 0;
  this.o610 = 0;
  this.o611 = true;
  this.o612 = 1985;
  this.o613 = true;
  this.o614 = 1985;
  this.o615 = 1;
  this.o616 = 0;
  this.o617 = 0;
  this.o618 = 0;
  this.o619 = false;
  this.o620 = 0x2000;
  this.o646 = 0;
  this.o647 = this.o443[2];
  this.o622 = 0;
  this.o623 = 0;
  this.o624 = false;
  this.o625 = 0;
  this.o626 = 0;
  this.o627 = true;
  this.o628 = 0;
  this.o629 = false;
  this.o630 = 0;
  this.o631 = 4;
  this.o632 = 0;
  this.o633 = true;
  this.o654 = 0x418;
  this.o634 = 8;
  this.o636 = 0;
  this.o637 = 0;
  this.o638 = 0;
  this.o639 = false;
  this.o640 = 0;
  this.o641 = 0;
  this.o642 = true;
  this.o643 = 0x7FFF;
  this.o670 = 15;
  this.o605 = 0x200;
  this.o621 = 0x200;
  this.o654 = 0x800;
  this.o658 = 0x800;
  this.o659 = 0;
  this.o635 = 0;
  this.o452 = 1;
  this.o453 = 1;
  this.o450 = true;
  this.o454 = true;
  this.o455 = true;
  this.o456 = true;
  this.o457 = true;
  this.o458 = true;
  this.o459 = true;
  this.o460 = false;
  this.o461 = false;
  this.o489 = 27044;
  this.o490 = 160;
  this.o491 = 0;
  this.o492 = false;
  this.o493 = 1024;
  this.o494 = 0;
  this.o495 = 0;
  this.o496 = 0;
  this.o497 = 0;
  this.o502 = 144;
  this.o503 = 0;
  this.o525 = false;
  this.o526 = false;
  this.o527 = true;
  this.o528 = true;
  this.o529 = true;
  this.o530 = 0;
  this.o531 = 0;
  this.o532 = 0;
  this.o533 = 0;
  this.o534 = 0;
  this.o535 = 0;
  this.o537 = -1;
  this.o539 = 0;
}
o360.prototype.o682 = function () {"use strict";
  //Start as an unset device:
  o113("Starting the selected boot ROM.", 0);
  this.o149 = 0;
  this.o150 = 0;
  this.o381 = false;
  this.o490 = 0;
  this.o489 = 0;
  this.o143 = 0;
  this.o144 = 0;
  this.o145 = 0;
  this.o368 = 0;
  this.o146 = 0;
  this.o364 = this.o365 = this.o366 = this.o367 = false;
  this.o148 = 0;
  this.o454 = false;
  this.o455 = false;
  this.o456 = false;
  this.o457 = false;
  this.o458 = false;
  this.o459 = false;
  this.o460 = false;
  this.o461 = false;
  this.o628 = this.o612 = 0;
  this.o642 = this.o627 = this.o611 = false;
  this.o452 = 8;
  this.o453 = 8;
  this.o155[0xFF00] = 0xF;  //Set the joypad state.
}
o360.prototype.o675 = function () {"use strict";
  //Load the first two ROM banks (0x0000 - 0x7FFF) into regular gameboy memory:
  this.o153 = [];
  this.o376 = o683[1];
  var o684 = this.o362.length;
  if (o684 < 0x4000) {
    throw(new Error("ROM image size too small."));
  }
  this.o153 = this.o676(o684, 0, "uint8");
  var o685 = 0;
  if (this.o376) {
    if (!o683[11]) {
      //Patch in the GBC boot ROM into the memory map:
      for (; o685 < 0x100; ++o685) {
        this.o155[o685] = this.o576[o685];                      //Load in the GameBoy Color BOOT ROM.
        this.o153[o685] = (this.o362.charCodeAt(o685) & 0xFF);              //Decode the ROM binary for the switch out.
      }
      for (; o685 < 0x200; ++o685) {
        this.o155[o685] = this.o153[o685] = (this.o362.charCodeAt(o685) & 0xFF);  //Load in the game ROM.
      }
      for (; o685 < 0x900; ++o685) {
        this.o155[o685] = this.o576[o685 - 0x100];                  //Load in the GameBoy Color BOOT ROM.
        this.o153[o685] = (this.o362.charCodeAt(o685) & 0xFF);              //Decode the ROM binary for the switch out.
      }
      this.o377 = true;
    }
    else {
      //Patch in the GBC boot ROM into the memory map:
      for (; o685 < 0x100; ++o685) {
        this.o155[o685] = this.o575[o685];                      //Load in the GameBoy Color BOOT ROM.
        this.o153[o685] = (this.o362.charCodeAt(o685) & 0xFF);              //Decode the ROM binary for the switch out.
      }
    }
    for (; o685 < 0x4000; ++o685) {
      this.o155[o685] = this.o153[o685] = (this.o362.charCodeAt(o685) & 0xFF);  //Load in the game ROM.
    }
  }
  else {
    //Don't load in the boot ROM:
    for (; o685 < 0x4000; ++o685) {
      this.o155[o685] = this.o153[o685] = (this.o362.charCodeAt(o685) & 0xFF);  //Load in the game ROM.
    }
  }
  //Finish the decoding of the ROM binary:
  for (; o685 < o684; ++o685) {
    this.o153[o685] = (this.o362.charCodeAt(o685) & 0xFF);
  }
  this.o663 = Math.floor(this.o153.length / 0x4000);
  //Set up the emulator for the cartidge specifics:
  this.o686();
  //Check for IRQ matching upon initialization:
  this.o664();
}
o360.prototype.o687 = function () {"use strict";
  //Return the binary version of the ROM image currently running:
  if (this.o362.length > 0) {
    return this.o362.length;
  }
  var length = this.o153.length;
  for (var index = 0; index < length; index++) {
    this.o362 += String.fromCharCode(this.o153[index]);
  }
  return this.o362;
}
o360.prototype.o686 = function () {"use strict";
  // ROM name
  for (var index = 0x134; index < 0x13F; index++) {
    if (this.o362.charCodeAt(index) > 0) {
      this.name += this.o362[index];
    }
  }
  // ROM game code (for newer games)
  for (var index = 0x13F; index < 0x143; index++) {
    if (this.o362.charCodeAt(index) > 0) {
      this.o408 += this.o362[index];
    }
  }
  o113("Game Title: " + this.name + "[" + this.o408 + "][" + this.o362[0x143] + "]", 0);
  o113("Game Code: " + this.o408, 0);
  // Cartridge type
  this.o407 = this.o153[0x147];
  o113("Cartridge type #" + this.o407, 0);
  //Map out ROM cartridge sub-types.
  var o688 = "";
  switch (this.o407) {
    case 0x00:
      //ROM w/o bank switching
      if (!o683[9]) {
        o688 = "ROM";
        break;
      }
    case 0x01:
      this.o507 = true;
      o688 = "MBC1";
      break;
    case 0x02:
      this.o507 = true;
      this.o512 = true;
      o688 = "MBC1 + SRAM";
      break;
    case 0x03:
      this.o507 = true;
      this.o512 = true;
      this.o601 = true;
      o688 = "MBC1 + SRAM + BATT";
      break;
    case 0x05:
      this.o508 = true;
      o688 = "MBC2";
      break;
    case 0x06:
      this.o508 = true;
      this.o601 = true;
      o688 = "MBC2 + BATT";
      break;
    case 0x08:
      this.o512 = true;
      o688 = "ROM + SRAM";
      break;
    case 0x09:
      this.o512 = true;
      this.o601 = true;
      o688 = "ROM + SRAM + BATT";
      break;
    case 0x0B:
      this.o513 = true;
      o688 = "MMMO1";
      break;
    case 0x0C:
      this.o513 = true;
      this.o512 = true;
      o688 = "MMMO1 + SRAM";
      break;
    case 0x0D:
      this.o513 = true;
      this.o512 = true;
      this.o601 = true;
      o688 = "MMMO1 + SRAM + BATT";
      break;
    case 0x0F:
      this.o509 = true;
      this.o519 = true;
      this.o601 = true;
      o688 = "MBC3 + TIMER + BATT";
      break;
    case 0x10:
      this.o509 = true;
      this.o519 = true;
      this.o601 = true;
      this.o512 = true;
      o688 = "MBC3 + TIMER + BATT + SRAM";
      break;
    case 0x11:
      this.o509 = true;
      o688 = "MBC3";
      break;
    case 0x12:
      this.o509 = true;
      this.o512 = true;
      o688 = "MBC3 + SRAM";
      break;
    case 0x13:
      this.o509 = true;
      this.o512 = true;
      this.o601 = true;
      o688 = "MBC3 + SRAM + BATT";
      break;
    case 0x19:
      this.o510 = true;
      o688 = "MBC5";
      break;
    case 0x1A:
      this.o510 = true;
      this.o512 = true;
      o688 = "MBC5 + SRAM";
      break;
    case 0x1B:
      this.o510 = true;
      this.o512 = true;
      this.o601 = true;
      o688 = "MBC5 + SRAM + BATT";
      break;
    case 0x1C:
      this.o514 = true;
      o688 = "RUMBLE";
      break;
    case 0x1D:
      this.o514 = true;
      this.o512 = true;
      o688 = "RUMBLE + SRAM";
      break;
    case 0x1E:
      this.o514 = true;
      this.o512 = true;
      this.o601 = true;
      o688 = "RUMBLE + SRAM + BATT";
      break;
    case 0x1F:
      this.o515 = true;
      o688 = "GameBoy Camera";
      break;
    case 0x22:
      this.o511 = true;
      this.o512 = true;
      this.o601 = true;
      o688 = "MBC7 + SRAM + BATT";
      break;
    case 0xFD:
      this.o516 = true;
      o688 = "TAMA5";
      break;
    case 0xFE:
      this.o517 = true;
      o688 = "HuC3";
      break;
    case 0xFF:
      this.o518 = true;
      o688 = "HuC1";
      break;
    default:
      o688 = "Unknown";
      o113("Cartridge type is unknown.", 2);
      o593();
  }
  o113("Cartridge Type: " + o688 + ".", 0);
  // ROM and RAM banks
  this.o689 = this.o520[this.o153[0x148]];
  o113(this.o689 + " ROM banks.", 0);
  switch (this.o404[this.o153[0x149]]) {
    case 0:
      o113("No RAM banking requested for allocation or MBC is of type 2.", 0);
      break;
    case 2:
      o113("1 RAM bank requested for allocation.", 0);
      break;
    case 3:
      o113("4 RAM banks requested for allocation.", 0);
      break;
    case 4:
      o113("16 RAM banks requested for allocation.", 0);
      break;
    default:
      o113("RAM bank amount requested is unknown, will use maximum allowed by specified MBC type.", 0);
  }
  //Check the GB/GBC mode byte:
  if (!this.o376) {
    switch (this.o153[0x143]) {
      case 0x00:  //Only GB mode
        this.o400 = false;
        o113("Only GB mode detected.", 0);
        break;
      case 0x32:  //Exception to the GBC identifying code:
        if (!o683[2] && this.name + this.o408 + this.o153[0x143] == "Game and Watch 50") {
          this.o400 = true;
          o113("Created a boot exception for Game and Watch Gallery 2 (GBC ID byte is wrong on the cartridge).", 1);
        }
        else {
          this.o400 = false;
        }
        break;
      case 0x80:  //Both GB + GBC modes
        this.o400 = !o683[2];
        o113("GB and GBC mode detected.", 0);
        break;
      case 0xC0:  //Only GBC mode
        this.o400 = true;
        o113("Only GBC mode detected.", 0);
        break;
      default:
        this.o400 = false;
        o113("Unknown GameBoy game type code #" + this.o153[0x143] + ", defaulting to GB mode (Old games don't have a type code).", 1);
    }
    this.o375 = false;
    this.o690();  //CPU/(V)RAM initialization.
    this.o681();
    this.o449(); // Line added for benchmarking.
  }
  else {
    this.o400 = this.o377;  //Allow the GBC boot ROM to run in GBC mode...
    this.o690();  //CPU/(V)RAM initialization.
    this.o682();
  }
  this.o691();
  //License Code Lookup:
  var o692 = this.o153[0x14B];
  var o693 = (this.o153[0x144] & 0xFF00) | (this.o153[0x145] & 0xFF);
  if (o692 != 0x33) {
    //Old Style License Header
    o113("Old style license code: " + o692, 0);
  }
  else {
    //New Style License Header
    o113("New style license code: " + o693, 0);
  }
  this.o362 = "";  //Memory consumption reduction.
}
o360.prototype.o694 = function () {"use strict";
  //Remove any traces of the boot ROM from ROM memory.
  for (var index = 0; index < 0x100; ++index) {
    this.o155[index] = this.o153[index];  //Replace the GameBoy or GameBoy Color boot ROM with the game ROM.
  }
  if (this.o377) {
    //Remove any traces of the boot ROM from ROM memory.
    for (index = 0x200; index < 0x900; ++index) {
      this.o155[index] = this.o153[index];  //Replace the GameBoy Color boot ROM with the game ROM.
    }
    if (!this.o400) {
      //Clean up the post-boot (GB mode only) state:
      this.o695();
    }
    else {
      this.o696();
    }
  }
  else {
    this.o696();
  }
}
o360.prototype.o483 = function () {"use strict";
  //Emulator Timing:
  this.o373 = 0x80000 / 0x7D * o683[6];
  this.o372 = this.o373 % 4;
  this.o370 = this.o369 = (this.o373 - this.o372) | 0;
  this.o371 = 0;
}
o360.prototype.o690 = function () {"use strict";
  //Setup the auxilliary/switchable RAM:
  if (this.o508) {
    this.o521 = 1 / 16;
  }
  else if (this.o507 || this.o514 || this.o509 || this.o517) {
    this.o521 = 4;
  }
  else if (this.o510) {
    this.o521 = 16;
  }
  else if (this.o512) {
    this.o521 = 1;
  }
  if (this.o521 > 0) {
    if (!this.o697()) {
      //For ROM and unknown MBC cartridges using the external RAM:
      this.o397 = true;
    }
    //Switched RAM Used
    var o157 = (typeof this.o698 == "function") ? this.o698(this.name) : [];
    if (o157.length > 0) {
      //Flash the SRAM into memory:
      this.o157 = this.o662(o157, "uint8");
    }
    else {
      this.o157 = this.o676(this.o521 * 0x2000, 0, "uint8");
    }
  }
  o113("Actual bytes of MBC RAM allocated: " + (this.o521 * 0x2000), 0);
  this.o671();
  //Setup the RAM for GBC mode.
  if (this.o400) {
    this.o394 = this.o676(0x2000, 0, "uint8");
    this.o395 = this.o676(0x7000, 0, "uint8");
  }
  this.o666();
  this.o667();
}
o360.prototype.o697 = function () {"use strict";
  return this.o507 || this.o508 || this.o509 || this.o510 || this.o511 || this.o514;
}
o360.prototype.o699 = function () {"use strict";
  o700();
  //Cache some dimension info:
  this.o569 = this.o361.o109;
  this.o571 = this.o361.o110;
  // The following line was modified for benchmarking:
  if (o96 && o96.o701) {
    //Firefox slowness hack:
    this.o361.o109 = this.o569 = (!o683[12]) ? 160 : this.o361.o109;
    this.o361.o110 = this.o571 = (!o683[12]) ? 144 : this.o361.o110;
  }
  else {
    this.o569 = this.o361.o109;
    this.o571 = this.o361.o110;
  }
  this.o570 = (!o683[12]) ? 160 : this.o361.o109;
  this.o702 = (!o683[12]) ? 144 : this.o361.o110;
  this.o573 = this.o570 * this.o702 * 4;
}
o360.prototype.o668 = function () {"use strict";
  this.o699();
  if (this.o573 != 92160) {
    //Only create the resizer handle if we need it:
    this.o703();
  }
  else {
    //Resizer not needed:
    this.o704 = null;
  }
  try {
    this.o705 = new o89();  // Line modified for benchmarking.
    this.o705.o109 = this.o570;
    this.o705.o110 = this.o702;
    this.o706 = this.o705.o108("2d");
    this.o707 = this.o361.o108("2d");
    //Get a CanvasPixelArray buffer:
    try {
      this.o567 = this.o706.o100(this.o570, this.o702);
    }
    catch (o68) {"use strict";
      o113("Falling back to the getImageData initialization (Error \"" + o68.o114 + "\").", 1);
      this.o567 = this.o706.o708(0, 0, this.o570, this.o702);
    }
    var index = this.o573;
    while (index > 0) {
      this.o567.o70[index -= 4] = 0xF8;
      this.o567.o70[index + 1] = 0xF8;
      this.o567.o70[index + 2] = 0xF8;
      this.o567.o70[index + 3] = 0xFF;
    }
    this.o709();
    this.o361.o111.o112 = "visible";
    if (this.o566 == null) {
      this.o566 = this.o676(69120, 0xFF, "uint8");
    }
    //Test the draw system and browser vblank latching:
    this.o536 = true;                    //Copy the latest graphics to buffer.
    this.o710();
  }
  catch (o68) {
    throw(new Error("HTML5 Canvas support required: " + o68.o114 + "file: " + o68.o711 + ", line: " + o68.o712));
  }
}
o360.prototype.o709 = function () {"use strict";
  if (this.o570 == this.o569 && this.o702 == this.o571) {
    this.o707.o103(this.o567, 0, 0);
  }
  else {
    this.o706.o103(this.o567, 0, 0);
    this.o707.o107(this.o705, 0, 0, this.o569, this.o571);
  }
}
o360.prototype.o713 = function (key, o714) {"use strict";
  if (o714) {
    this.o388 &= 0xFF ^ (1 << key);
    if (!this.o400 && (!this.o376 || !this.o377)) {
      this.o383 |= 0x10;  //A real GBC doesn't set this!
      this.o374 = 0;
      this.o664();
    }
  }
  else {
    this.o388 |= (1 << key);
  }
  this.o155[0xFF00] = (this.o155[0xFF00] & 0x30) + ((((this.o155[0xFF00] & 0x20) == 0) ? (this.o388 >> 4) : 0xF) & (((this.o155[0xFF00] & 0x10) == 0) ? (this.o388 & 0xF) : 0xF));
  this.o389 = false;
}
o360.prototype.o715 = function (o104, o105) {"use strict";
  o104 *= -100;
  o104 += 2047;
  this.o436 = o104 >> 8;
  this.o437 = o104 & 0xFF;
  o105 *= -100;
  o105 += 2047;
  this.o438 = o105 >> 8;
  this.o439 = o105 & 0xFF;
}
o360.prototype.o669 = function () {"use strict";
  this.o442 = 0x400000 / 1000 * o683[6];
  this.o484 = o683[13];
  if (o683[0]) {
    try {
      var o421 = this;
      this.o440 = new o218(2, 0x400000 / o683[13], 0, Math.o290(this.o442 * o683[8] / o683[13], 8192) << 1, null, o683[14]);
      this.o716();
    }
    catch (o68) {
      o113("Audio system cannot run: " + o68.o114, 2);
      o683[0] = false;
    }
  }
  else if (this.o440) {
    //Mute the audio output, as it has an immediate silencing effect:
    try {
      this.o440.o276(0);
    }
    catch (o68) { }
  }
}
o360.prototype.o276 = function () {"use strict";
  if (o683[0] && this.o440) {
    try {
      this.o440.o276(o683[14]);
    }
    catch (o68) { }
  }
}
o360.prototype.o716 = function () {"use strict";
  this.o486 = 0;
  this.o445 = Math.o290(this.o442 * o683[7] / o683[13], 4096) << 1;
  this.o441 = (this.o442 - (this.o442 % o683[13])) | 0;
  this.o444 = this.o676(this.o441, 0xF0F0, "int32");
  this.o717 = this.o676((this.o441 << 1) / o683[13], 0, "float32");
}
o360.prototype.o574 = function () {"use strict";
  //Noise Sample Tables:
  var o718 = 1;
  //15-bit LSFR Cache Generation:
  this.o446 = this.o676(0x80000, 0, "int8");
  var o719 = 0x7FFF;  //Seed value has all its bits set.
  var o720 = 0x3FFF;
  for (var index = 0; index < 0x8000; ++index) {
    //Normalize the last LSFR value for usage:
    o718 = 1 - (o719 & 1);  //Docs say it's the inverse.
    //Cache the different volume level results:
    this.o446[0x08000 | index] = o718;
    this.o446[0x10000 | index] = o718 * 0x2;
    this.o446[0x18000 | index] = o718 * 0x3;
    this.o446[0x20000 | index] = o718 * 0x4;
    this.o446[0x28000 | index] = o718 * 0x5;
    this.o446[0x30000 | index] = o718 * 0x6;
    this.o446[0x38000 | index] = o718 * 0x7;
    this.o446[0x40000 | index] = o718 * 0x8;
    this.o446[0x48000 | index] = o718 * 0x9;
    this.o446[0x50000 | index] = o718 * 0xA;
    this.o446[0x58000 | index] = o718 * 0xB;
    this.o446[0x60000 | index] = o718 * 0xC;
    this.o446[0x68000 | index] = o718 * 0xD;
    this.o446[0x70000 | index] = o718 * 0xE;
    this.o446[0x78000 | index] = o718 * 0xF;
    //Recompute the LSFR algorithm:
    o720 = o719 >> 1;
    o719 = o720 | (((o720 ^ o719) & 0x1) << 14);
  }
  //7-bit LSFR Cache Generation:
  this.o447 = this.o676(0x800, 0, "int8");
  o719 = 0x7F;  //Seed value has all its bits set.
  for (index = 0; index < 0x80; ++index) {
    //Normalize the last LSFR value for usage:
    o718 = 1 - (o719 & 1);  //Docs say it's the inverse.
    //Cache the different volume level results:
    this.o447[0x080 | index] = o718;
    this.o447[0x100 | index] = o718 * 0x2;
    this.o447[0x180 | index] = o718 * 0x3;
    this.o447[0x200 | index] = o718 * 0x4;
    this.o447[0x280 | index] = o718 * 0x5;
    this.o447[0x300 | index] = o718 * 0x6;
    this.o447[0x380 | index] = o718 * 0x7;
    this.o447[0x400 | index] = o718 * 0x8;
    this.o447[0x480 | index] = o718 * 0x9;
    this.o447[0x500 | index] = o718 * 0xA;
    this.o447[0x580 | index] = o718 * 0xB;
    this.o447[0x600 | index] = o718 * 0xC;
    this.o447[0x680 | index] = o718 * 0xD;
    this.o447[0x700 | index] = o718 * 0xE;
    this.o447[0x780 | index] = o718 * 0xF;
    //Recompute the LSFR algorithm:
    o720 = o719 >> 1;
    o719 = o720 | (((o720 ^ o719) & 0x1) << 6);
  }
  if (!this.o448 && this.o155.length == 0x10000) {
    //If enabling audio for the first time after a game is already running, set up the internal table reference:
    this.o448 = ((this.o155[0xFF22] & 0x8) == 0x8) ? this.o447 : this.o446;
  }
}
o360.prototype.o721 = function () {"use strict";
  if (o683[0]) {
    var o722 = this.o445 - this.o440.o243();
    if (o722 > 0) {
      this.o371 += (o722 >> 1) * this.o484;
      this.o723();
    }
  }
}
o360.prototype.o449 = function () {"use strict";
  this.o604 = 0x2000;
  this.o644 = 0;
  this.o645 = this.o443[2];
  this.o606 = 0;
  this.o607 = 0;
  this.o608 = false;
  this.o609 = 0;
  this.o610 = 0;
  this.o611 = true;
  this.o612 = 0;
  this.o613 = false;
  this.o614 = 0;
  this.o615 = 1;
  this.o616 = 0;
  this.o617 = 0;
  this.o618 = 0;
  this.o619 = false;
  this.o620 = 0x2000;
  this.o646 = 0;
  this.o647 = this.o443[2];
  this.o622 = 0;
  this.o623 = 0;
  this.o624 = false;
  this.o625 = 0;
  this.o626 = 0;
  this.o627 = true;
  this.o628 = 0;
  this.o629 = false;
  this.o630 = 0;
  this.o631 = 4;
  this.o632 = 0;
  this.o633 = true;
  this.o654 = 0x800;
  this.o634 = 8;
  this.o636 = 0;
  this.o637 = 0;
  this.o638 = 0;
  this.o639 = false;
  this.o640 = 0;
  this.o641 = 0;
  this.o642 = true;
  this.o643 = 0x7FFF;
  this.o448 = this.o446;
  this.o670 = 15;
  this.o605 = 0x2000;
  this.o621 = 0x2000;
  this.o654 = 0x800;
  this.o658 = 0x800;
  this.o659 = 0;
  this.o635 = 0;
  this.o452 = 8;
  this.o453 = 8;
  this.o482 = 0;
  this.o652 = 0x2000;
  this.o653 = 0;
  this.o634 = 8;
  this.o655 = 8;
  this.o656 = 0;
  this.o657 = 0;
  this.o648 = false;
  this.o649 = false;
  this.o650 = false;
  this.o651 = false;
  this.o724 = false;
  this.o725 = false;
  this.o726 = false;
  this.o727();
  this.o728();
  this.o729();
  this.o730();
}
o360.prototype.o731 = function () {"use strict";
  var o732 = 0;
  var o733 = 0;
  var o734 = 0;
  var o735 = 0;
  var o736 = 0;
  var o737 = o683[13];
  var o738 = o737 * 0xF0;
  for (var o739 = 0; o739 < this.o441;) {
    for (o732 = o734 = o735 = 0; o732 < o737; ++o732) {
      o733 = this.o444[o739++];
      o734 += o733 >> 9;
      o735 += o733 & 0x1FF;
    }
    this.o717[o736++] = o734 / o738 - 1;
    this.o717[o736++] = o735 / o738 - 1;
  }
  this.o440.o242(this.o717);
}
//Below are the audio generation functions timed against the CPU:
o360.prototype.o740 = function (o741) {"use strict";
  if (this.o450 && !this.o389) {
    for (var o742 = 0; o741 > 0;) {
      o742 = (o741 < this.o652) ? o741 : this.o652;
      this.o652 -= o742;
      o741 -= o742;
      while (--o742 > -1) {
        this.o743();
        this.o444[this.o486++] = this.o482;
        if (this.o486 == this.o441) {
          this.o486 = 0;
          this.o731();
        }
      }
      if (this.o652 == 0) {
        this.o744();
        this.o652 = 0x2000;
      }
    }
  }
  else {
    //SILENT OUTPUT:
    while (--o741 > -1) {
      this.o444[this.o486++] = 0xF0F0;
      if (this.o486 == this.o441) {
        this.o486 = 0;
        this.o731();
      }
    }
  }
}
//Generate audio, but don't actually output it (Used for when sound is disabled by user/browser):
o360.prototype.o745 = function (o741) {"use strict";
  if (this.o450 && !this.o389) {
    while (--o741 > -1) {
      this.o743();
      if (--this.o652 == 0) {
        this.o744();
        this.o652 = 0x2000;
      }
    }
  }
}
o360.prototype.o746 = function () {"use strict";
  //Audio Sample Generation Timing:
  if (o683[0]) {
    this.o740(this.o485);
  }
  else {
    this.o745(this.o485);
  }
  this.o485 = 0;
}
o360.prototype.o744 = function () {"use strict";
  switch (this.o653++) {
    case 0:
      this.o747();
      break;
    case 2:
      this.o747();
      this.o748();
      break;
    case 4:
      this.o747();
      break;
    case 6:
      this.o747();
      this.o748();
      break;
    case 7:
      this.o749();
      this.o653 = 0;
  }
}
o360.prototype.o747 = function () {"use strict";
  //Channel 1:
  if (this.o606 > 1) {
    --this.o606;
  }
  else if (this.o606 == 1) {
    this.o606 = 0;
    this.o750();
    this.o155[0xFF26] &= 0xFE;  //Channel #1 On Flag Off
  }
  //Channel 2:
  if (this.o622 > 1) {
    --this.o622;
  }
  else if (this.o622 == 1) {
    this.o622 = 0;
    this.o751();
    this.o155[0xFF26] &= 0xFD;  //Channel #2 On Flag Off
  }
  //Channel 3:
  if (this.o630 > 1) {
    --this.o630;
  }
  else if (this.o630 == 1) {
    this.o630 = 0;
    this.o752();
    this.o155[0xFF26] &= 0xFB;  //Channel #3 On Flag Off
  }
  //Channel 4:
  if (this.o636 > 1) {
    --this.o636;
  }
  else if (this.o636 == 1) {
    this.o636 = 0;
    this.o753();
    this.o155[0xFF26] &= 0xF7;  //Channel #4 On Flag Off
  }
}
o360.prototype.o748 = function () {"use strict";
  //Channel 1:
  if (!this.o613 && this.o615 > 0) {
    if (--this.o615 == 0) {
      this.o754();
    }
  }
}
o360.prototype.o754 = function () {"use strict";
  //Channel 1:
  if (this.o616 > 0) {
    if (this.o618 > 0) {
      if (this.o617 > 0) {
        --this.o617;
        if (this.o619) {
          this.o614 -= this.o614 >> this.o618;
          this.o612 = this.o614 & 0x7FF;
          this.o604 = (0x800 - this.o612) << 2;
        }
        else {
          this.o614 += this.o614 >> this.o618;
          this.o612 = this.o614;
          if (this.o614 <= 0x7FF) {
            this.o604 = (0x800 - this.o612) << 2;
            //Run overflow check twice:
            if ((this.o614 + (this.o614 >> this.o618)) > 0x7FF) {
              this.o613 = true;
              this.o750();
              this.o155[0xFF26] &= 0xFE;  //Channel #1 On Flag Off
            }
          }
          else {
            this.o612 &= 0x7FF;
            this.o613 = true;
            this.o750();
            this.o155[0xFF26] &= 0xFE;  //Channel #1 On Flag Off
          }
        }
      }
      this.o615 = this.o616;
    }
    else {
      //Channel has sweep disabled and timer becomes a length counter:
      this.o613 = true;
      this.o750();
    }
  }
}
o360.prototype.o749 = function () {"use strict";
  //Channel 1:
  if (this.o610 > -1) {
    if (this.o609 > 0) {
      --this.o609;
    }
    else {
      if (!this.o608) {
        if (this.o607 > 0) {
          --this.o607;
          this.o609 = this.o610;
          this.o727();
        }
        else {
          this.o610 = -1;
        }
      }
      else if (this.o607 < 0xF) {
        ++this.o607;
        this.o609 = this.o610;
        this.o727();
      }
      else {
        this.o610 = -1;
      }
    }
  }
  //Channel 2:
  if (this.o626 > -1) {
    if (this.o625 > 0) {
      --this.o625;
    }
    else {
      if (!this.o624) {
        if (this.o623 > 0) {
          --this.o623;
          this.o625 = this.o626;
          this.o728();
        }
        else {
          this.o626 = -1;
        }
      }
      else if (this.o623 < 0xF) {
        ++this.o623;
        this.o625 = this.o626;
        this.o728();
      }
      else {
        this.o626 = -1;
      }
    }
  }
  //Channel 4:
  if (this.o641 > -1) {
    if (this.o640 > 0) {
      --this.o640;
    }
    else {
      if (!this.o639) {
        if (this.o637 > 0) {
          this.o638 = --this.o637 << this.o670;
          this.o640 = this.o641;
          this.o755();
        }
        else {
          this.o641 = -1;
        }
      }
      else if (this.o637 < 0xF) {
        this.o638 = ++this.o637 << this.o670;
        this.o640 = this.o641;
        this.o755();
      }
      else {
        this.o641 = -1;
      }
    }
  }
}
o360.prototype.o743 = function () {"use strict";
  //Channel 1 counter:
  if (--this.o605 == 0) {
    this.o605 = this.o604;
    this.o644 = (this.o644 + 1) & 0x7;
    this.o756();
  }
  //Channel 2 counter:
  if (--this.o621 == 0) {
    this.o621 = this.o620;
    this.o646 = (this.o646 + 1) & 0x7;
    this.o757();
  }
  //Channel 3 counter:
  if (--this.o654 == 0) {
    if (this.o629) {
      this.o659 = (this.o659 + 1) & 0x1F;
    }
    this.o654 = this.o658;
    this.o758();
  }
  //Channel 4 counter:
  if (--this.o655 == 0) {
    this.o635 = (this.o635 + 1) & this.o643;
    this.o655 = this.o634;
    this.o755();
  }
}
o360.prototype.o750 = function () {"use strict";
  this.o648 = ((this.o611 || this.o606 > 0) && !this.o613 && this.o724);
  this.o759();
}
o360.prototype.o760 = function () {"use strict";
  this.o724 = (this.o155[0xFF12] > 7);
  this.o750();
  this.o759();
}
o360.prototype.o727 = function () {"use strict";
  this.o462 = (this.o454) ? this.o607 : 0;
  this.o463 = (this.o458) ? this.o607 : 0;
  this.o759();
}
o360.prototype.o759 = function () {"use strict";
  if (this.o648) {
    this.o470 = this.o462;
    this.o471 = this.o463;
  }
  else {
    this.o470 = 0;
    this.o471 = 0;
  }
  this.o756();
}
o360.prototype.o756 = function () {"use strict";
  if (this.o645[this.o644]) {
    this.o478 = this.o470;
    this.o479 = this.o471;
  }
  else {
    this.o478 = 0;
    this.o479 = 0;
  }
  this.o761();
}
o360.prototype.o751 = function () {"use strict";
  this.o649 = ((this.o627 || this.o622 > 0) && this.o725);
  this.o762();
}
o360.prototype.o763 = function () {"use strict";
  this.o725 = (this.o155[0xFF17] > 7);
  this.o751();
  this.o762();
}
o360.prototype.o728 = function () {"use strict";
  this.o464 = (this.o455) ? this.o623 : 0;
  this.o465 = (this.o459) ? this.o623 : 0;
  this.o762();
}
o360.prototype.o762 = function () {"use strict";
  if (this.o649) {
    this.o472 = this.o464;
    this.o473 = this.o465;
  }
  else {
    this.o472 = 0;
    this.o473 = 0;
  }
  this.o757();
}
o360.prototype.o757 = function () {"use strict";
  if (this.o647[this.o646]) {
    this.o480 = this.o472;
    this.o481 = this.o473;
  }
  else {
    this.o480 = 0;
    this.o481 = 0;
  }
  this.o761();
}
o360.prototype.o752 = function () {"use strict";
  this.o650 = (/*this.channel3canPlay && */(this.o633 || this.o630 > 0));
  this.o764();
}
o360.prototype.o729 = function () {"use strict";
  this.o466 = (this.o456) ? this.o656 : 0;
  this.o467 = (this.o460) ? this.o656 : 0;
  this.o764();
}
o360.prototype.o764 = function () {"use strict";
  if (this.o650) {
    this.o474 = this.o466;
    this.o475 = this.o467;
  }
  else {
    this.o474 = 0;
    this.o475 = 0;
  }
  this.o761();
}
o360.prototype.o753 = function () {"use strict";
  this.o651 = ((this.o642 || this.o636 > 0) && this.o726);
  this.o765();
}
o360.prototype.o766 = function () {"use strict";
  this.o726 = (this.o155[0xFF21] > 7);
  this.o753();
  this.o765();
}
o360.prototype.o730 = function () {"use strict";
  this.o468 = (this.o457) ? this.o657 : 0;
  this.o469 = (this.o461) ? this.o657 : 0;
  this.o765();
}
o360.prototype.o765 = function () {"use strict";
  if (this.o651) {
    this.o476 = this.o468;
    this.o477 = this.o469;
  }
  else {
    this.o476 = 0;
    this.o477 = 0;
  }
  this.o761();
}
o360.prototype.o761 = function () {"use strict";
  this.o482 = ((((this.o478 + this.o480 + this.o474 + this.o476) * this.o452) << 9) +
  ((this.o479 + this.o481 + this.o475 + this.o477) * this.o453));
}
o360.prototype.o758 = function () {"use strict";
  this.o656 = this.o451[this.o659] >> this.o631;
  this.o729();
}
o360.prototype.o767 = function (o768, o70) {"use strict";
  if (this.o629) {
    this.o746();
    //address = this.channel3lastSampleLookup >> 1;
  }
  this.o155[0xFF30 | o768] = o70;
  o768 <<= 1;
  this.o451[o768] = o70 >> 4;
  this.o451[o768 | 1] = o70 & 0xF;
}
o360.prototype.o755 = function () {"use strict";
  this.o657 = this.o448[this.o638 | this.o635];
  this.o730();
}
o360.prototype.o12 = function () {"use strict";
  //The preprocessing before the actual iteration loop:
  if ((this.o380 & 2) == 0) {
    if ((this.o380 & 1) == 1) {
      if (!this.o389) {
        this.o380 = 0;
        this.o536 = false;
        this.o721();
        this.o769();      //RTC clocking.
        if (!this.o378) {
          this.o770();
        }
        else {            //Finish the HALT rundown execution.
          this.o386 = 0;
          this.o587();
          if (this.o378) {
            this.o771();
          }
          else {
            this.o770();
          }
        }
        //Request the graphics target to be updated:
        this.o710();
      }
      else {
        this.o721();
        this.o485 += this.o369;
        this.o746();
        this.o380 |= 1;      //End current loop.
      }
    }
    else {    //We can only get here if there was an internal error, but the loop was restarted.
      o113("Iterator restarted a faulted core.", 2);
      o593();
    }
  }
}

o360.prototype.o770 = function () {"use strict";
  //Iterate the interpreter loop:
  var o772 = 0;
  var o773 = 0;
  while (this.o380 == 0) {
    //Interrupt Arming:
    switch (this.o497) {
      case 1:
        this.o381 = true;
        this.o664();
      case 2:
        --this.o497;
    }
    //Is an IRQ set to fire?:
    if (this.o382 > 0) {
      //IME is true and and interrupt was matched:
      this.o774();
    }
    //Fetch the current opcode:
    o772 = this.o390[this.o149](this, this.o149);
    //Increment the program counter to the next instruction:
    this.o149 = (this.o149 + 1) & 0xFFFF;
    //Check for the program counter quirk:
    if (this.o379) {
      this.o149 = (this.o149 - 1) & 0xFFFF;
      this.o379 = false;
    }
    //Get how many CPU cycles the current instruction counts for:
    this.o386 = this.o599[o772];
    //Execute the current instruction:
    this.o578[o772](this);
    //Update the state (Inlined updateCoreFull manually here):
    //Update the clocking for the LCD emulation:
    this.o490 += this.o386 >> this.o387;  //LCD Timing
    this.o422[this.o502](this);          //Scan Line and STAT Mode Control
    //Single-speed relative timing for A/V emulation:
    o773 = this.o386 >> this.o387;    //CPU clocking can be updated from the LCD handling.
    this.o485 += o773;                //Audio Timing
    this.o488 += o773;              //Emulator Timing
    //CPU Timers:
    this.o489 += this.o386;                //DIV Timing
    if (this.o492) {                    //TIMA Timing
      this.o491 += this.o386;
      while (this.o491 >= this.o493) {
        this.o491 -= this.o493;
        if (++this.o155[0xFF05] == 0x100) {
          this.o155[0xFF05] = this.o155[0xFF06];
          this.o383 |= 0x4;
          this.o664();
        }
      }
    }
    if (this.o494 > 0) {                    //Serial Timing
      //IRQ Counter:
      this.o494 -= this.o386;
      if (this.o494 <= 0) {
        this.o383 |= 0x8;
        this.o664();
      }
      //Bit Shit Counter:
      this.o495 -= this.o386;
      if (this.o495 <= 0) {
        this.o495 = this.o496;
        this.o155[0xFF01] = ((this.o155[0xFF01] << 1) & 0xFE) | 0x01;  //We could shift in actual link data here if we were to implement such!!!
      }
    }
    //End of iteration routine:
    if (this.o488 >= this.o369) {
      this.o775();
    }
    // Start of code added for benchmarking:
    this.o91 += 1;
    if (this.o91 > this.o92) {
      this.o775();
      this.o380 |= 2;
      o140();
    }
    // End of code added for benchmarking.
  }
}
o360.prototype.o775 = function () {"use strict";
  if ((this.o380 & 0x1) == 0) {
    this.o746();  //Make sure we at least output once per iteration.
    //Update DIV Alignment (Integer overflow safety):
    this.o155[0xFF04] = (this.o155[0xFF04] + (this.o489 >> 8)) & 0xFF;
    this.o489 &= 0xFF;
    //Update emulator flags:
    this.o380 |= 1;      //End current loop.
    this.o488 -= this.o369;
    this.o371 += this.o372;
    this.o723();
  }
}
o360.prototype.o583 = function () {"use strict";
  this.o389 = true;            //Stop CPU until joypad input changes.
  this.o775();
  if (this.o488 < 0) {
    this.o485 -= this.o488;
    this.o746();
  }
}
o360.prototype.o723 = function () {"use strict";
  var o776 = this.o371 % 4;
  this.o369 = this.o370 + this.o371 - o776;
  this.o371 = o776;
}
o360.prototype.o777 = function () {"use strict";  //OAM Search Period
  if (this.o411 != 1) {
    if (this.o415) {
      this.o383 |= 0x2;
      this.o664();
    }
    this.o411 = 1;
    this.o412 = 2;
  }
}
o360.prototype.o778 = function () {"use strict";  //Scan Line Drawing Period
  if (this.o412 != 3) {
    if (this.o411 == 0 && this.o415) {
      this.o383 |= 0x2;
      this.o664();
    }
    this.o411 = 1;
    this.o412 = 3;
  }
}
o360.prototype.o779 = function () {"use strict";  //Horizontal Blanking Period
  if (this.o412 != 0) {
    if (this.o411 != 2) {
      if (this.o411 == 0) {
        if (this.o415) {
          this.o383 |= 0x2;
          this.o664();
        }
        this.o412 = 3;
      }
      this.o780();
      this.o781(this.o502);
      this.o411 = 2;
    }
    if (this.o490 >= this.o413) {
      if (this.o385) {
        this.o782();
      }
      if (this.o417) {
        this.o383 |= 0x2;
        this.o664();
      }
      this.o411 = 3;
      this.o412 = 0;
    }
  }
}
o360.prototype.o783 = function () {"use strict";
  if (this.o155[0xFF45] != 0) {
    if (this.o155[0xFF45] > this.o502) {
      return 456 * (this.o155[0xFF45] - this.o502);
    }
    return 456 * (154 - this.o502 + this.o155[0xFF45]);
  }
  return (456 * ((this.o502 == 153 && this.o155[0xFF44] == 0) ? 154 : (153 - this.o502))) + 8;
}
o360.prototype.o784 = function () {"use strict";
  switch (this.o412) {
    case 0:
      if (this.o502 == 143) {
        this.o781(0);
        return this.o413 + 5016;
      }
      this.o781(this.o502 + 1);
      return this.o413 + 456;
    case 2:
    case 3:
      this.o781(this.o502);
      return this.o413;
    case 1:
      this.o781(0);
      return this.o413 + (456 * (154 - this.o502));
  }
}
o360.prototype.o781 = function (o335) {"use strict";
  this.o413 = 252;
  if (this.o400 && this.o526) {                    //Is the window enabled and are we in CGB mode?
    var o785 = o335 + 0x10;
    var o786 = 0;
    var o787 = (this.o527) ? 0x8 : 0x10;
    for (var o788 = 0xFE00; o788 < 0xFEA0 && this.o413 < 312; o788 += 4) {
      o786 = o785 - this.o155[o788];
      if (o786 > -1 && o786 < o787) {
        this.o413 += 6;
      }
    }
  }
}
o360.prototype.o789 = function () {"use strict";  //LYC Register Compare
  if (this.o155[0xFF44] == this.o155[0xFF45]) {
    this.o155[0xFF41] |= 0x04;
    if (this.o414) {
      this.o383 |= 0x2;
      this.o664();
    }
  }
  else {
    this.o155[0xFF41] &= 0x7B;
  }
}
o360.prototype.o790 = function () {"use strict";
  //Update the clocking for the LCD emulation:
  this.o490 += this.o386 >> this.o387;  //LCD Timing
  this.o422[this.o502](this);          //Scan Line and STAT Mode Control
  //Single-speed relative timing for A/V emulation:
  var o773 = this.o386 >> this.o387;  //CPU clocking can be updated from the LCD handling.
  this.o485 += o773;                //Audio Timing
  this.o488 += o773;              //Emulator Timing
  //CPU Timers:
  this.o489 += this.o386;                //DIV Timing
  if (this.o492) {                    //TIMA Timing
    this.o491 += this.o386;
    while (this.o491 >= this.o493) {
      this.o491 -= this.o493;
      if (++this.o155[0xFF05] == 0x100) {
        this.o155[0xFF05] = this.o155[0xFF06];
        this.o383 |= 0x4;
        this.o664();
      }
    }
  }
  if (this.o494 > 0) {                    //Serial Timing
    //IRQ Counter:
    this.o494 -= this.o386;
    if (this.o494 <= 0) {
      this.o383 |= 0x8;
      this.o664();
    }
    //Bit Shit Counter:
    this.o495 -= this.o386;
    if (this.o495 <= 0) {
      this.o495 = this.o496;
      this.o155[0xFF01] = ((this.o155[0xFF01] << 1) & 0xFE) | 0x01;  //We could shift in actual link data here if we were to implement such!!!
    }
  }
}
o360.prototype.o771 = function () {"use strict";
  //Update the state machine:
  this.o790();
  //End of iteration routine:
  if (this.o488 >= this.o369) {
    this.o775();
  }
}
o360.prototype.o423 = function () {"use strict";
  //Display on hanlding:
  var o335 = 0;
  while (o335 < 154) {
    if (o335 < 143) {
      //We're on a normal scan line:
      this.o419[o335] = function (o421) {"use strict";
        if (o421.o490 < 80) {
          o421.o777();
        }
        else if (o421.o490 < 252) {
          o421.o778();
        }
        else if (o421.o490 < 456) {
          o421.o779();
        }
        else {
          //We're on a new scan line:
          o421.o490 -= 456;
          if (o421.o411 != 3) {
            //Make sure the mode 0 handler was run at least once per scan line:
            if (o421.o411 != 2) {
              if (o421.o411 == 0 && o421.o415) {
                o421.o383 |= 0x2;
              }
              o421.o780();
            }
            if (o421.o385) {
              o421.o782();
            }
            if (o421.o417) {
              o421.o383 |= 0x2;
            }
          }
          //Update the scanline registers and assert the LYC counter:
          o421.o502 = ++o421.o155[0xFF44];
          //Perform a LYC counter assert:
          if (o421.o502 == o421.o155[0xFF45]) {
            o421.o155[0xFF41] |= 0x04;
            if (o421.o414) {
              o421.o383 |= 0x2;
            }
          }
          else {
            o421.o155[0xFF41] &= 0x7B;
          }
          o421.o664();
          //Reset our mode contingency variables:
          o421.o411 = 0;
          o421.o412 = 2;
          o421.o419[o421.o502](o421);  //Scan Line and STAT Mode Control.
        }
      }
    }
    else if (o335 == 143) {
      //We're on the last visible scan line of the LCD screen:
      this.o419[143] = function (o421) {"use strict";
        if (o421.o490 < 80) {
          o421.o777();
        }
        else if (o421.o490 < 252) {
          o421.o778();
        }
        else if (o421.o490 < 456) {
          o421.o779();
        }
        else {
          //Starting V-Blank:
          //Just finished the last visible scan line:
          o421.o490 -= 456;
          if (o421.o411 != 3) {
            //Make sure the mode 0 handler was run at least once per scan line:
            if (o421.o411 != 2) {
              if (o421.o411 == 0 && o421.o415) {
                o421.o383 |= 0x2;
              }
              o421.o780();
            }
            if (o421.o385) {
              o421.o782();
            }
            if (o421.o417) {
              o421.o383 |= 0x2;
            }
          }
          //Update the scanline registers and assert the LYC counter:
          o421.o502 = o421.o155[0xFF44] = 144;
          //Perform a LYC counter assert:
          if (o421.o155[0xFF45] == 144) {
            o421.o155[0xFF41] |= 0x04;
            if (o421.o414) {
              o421.o383 |= 0x2;
            }
          }
          else {
            o421.o155[0xFF41] &= 0x7B;
          }
          //Reset our mode contingency variables:
          o421.o411 = 0;
          //Update our state for v-blank:
          o421.o412 = 1;
          o421.o383 |= (o421.o416) ? 0x3 : 0x1;
          o421.o664();
          //Attempt to blit out to our canvas:
          if (o421.o535 == 0) {
            //Ensure JIT framing alignment:
            if (o421.o505 < 144 || (o421.o505 == 144 && o421.o537 > -1)) {
              //Make sure our gfx are up-to-date:
              o421.o791();
              //Draw the frame:
              o421.o792();
            }
          }
          else {
            //LCD off takes at least 2 frames:
            --o421.o535;
          }
          o421.o419[144](o421);  //Scan Line and STAT Mode Control.
        }
      }
    }
    else if (o335 < 153) {
      //In VBlank
      this.o419[o335] = function (o421) {"use strict";
        if (o421.o490 >= 456) {
          //We're on a new scan line:
          o421.o490 -= 456;
          o421.o502 = ++o421.o155[0xFF44];
          //Perform a LYC counter assert:
          if (o421.o502 == o421.o155[0xFF45]) {
            o421.o155[0xFF41] |= 0x04;
            if (o421.o414) {
              o421.o383 |= 0x2;
              o421.o664();
            }
          }
          else {
            o421.o155[0xFF41] &= 0x7B;
          }
          o421.o419[o421.o502](o421);  //Scan Line and STAT Mode Control.
        }
      }
    }
    else {
      //VBlank Ending (We're on the last actual scan line)
      this.o419[153] = function (o421) {"use strict";
        if (o421.o490 >= 8) {
          if (o421.o411 != 4 && o421.o155[0xFF44] == 153) {
            o421.o155[0xFF44] = 0;  //LY register resets to 0 early.
            //Perform a LYC counter assert:
            if (o421.o155[0xFF45] == 0) {
              o421.o155[0xFF41] |= 0x04;
              if (o421.o414) {
                o421.o383 |= 0x2;
                o421.o664();
              }
            }
            else {
              o421.o155[0xFF41] &= 0x7B;
            }
            o421.o411 = 4;
          }
          if (o421.o490 >= 456) {
            //We reset back to the beginning:
            o421.o490 -= 456;
            o421.o411 = o421.o502 = 0;
            o421.o419[0](o421);  //Scan Line and STAT Mode Control.
          }
        }
      }
    }
    ++o335;
  }
}
o360.prototype.o793 = function () {"use strict";
  if (this.o535 == 0) {
    //Output a blank screen to the output framebuffer:
    this.o794();
    this.o536 = true;
  }
  this.o535 = 2;
}
o360.prototype.o782 = function () {"use strict";
  this.o795(1);
  if (this.o378) {
    if ((this.o490 - this.o413) < ((4 >> this.o387) | 0x20)) {
      //HALT clocking correction:
      this.o386 = 4 + ((0x20 + this.o413) << this.o387);
      this.o490 = this.o413 + ((4 >> this.o387) | 0x20);
    }
  }
  else {
    this.o490 += (4 >> this.o387) | 0x20;      //LCD Timing Update For HDMA.
  }
  if (this.o155[0xFF55] == 0) {
    this.o385 = false;
    this.o155[0xFF55] = 0xFF;  //Transfer completed ("Hidden last step," since some ROMs don't imply this, but most do).
  }
  else {
    --this.o155[0xFF55];
  }
}
o360.prototype.o769 = function () {"use strict";
  if (this.o519) {
    var o796 = o138(); // The line is changed for benchmarking.
    var o797 = o796.o139();
    var o798 = o797 - this.o499;  //Get the numnber of milliseconds since this last executed.
    this.o499 = o797;
    if (this.o519 && !this.o435) {
      //Update the MBC3 RTC:
      this.o430 += o798 / 1000;
      while (this.o430 >= 60) {  //System can stutter, so the seconds difference can get large, thus the "while".
        this.o430 -= 60;
        ++this.o431;
        if (this.o431 >= 60) {
          this.o431 -= 60;
          ++this.o432;
          if (this.o432 >= 24) {
            this.o432 -= 24
            ++this.o433;
            if (this.o433 >= 512) {
              this.o433 -= 512;
              this.o434 = true;
            }
          }
        }
      }
    }
  }
}
o360.prototype.o792 = function () {"use strict";
  //Copy the internal frame buffer to the output buffer:
  this.o799();
  this.o536 = true;
}
o360.prototype.o710 = function () {"use strict";
  if (this.o536) {
    this.o800();
  }
}
o360.prototype.o800 = function () {"use strict";
  var o801 = this.o573;
  if (o801 > 0) {
    //We actually updated the graphics internally, so copy out:
    var o565 = (o801 == 92160) ? this.o566 : this.o802();
    var o803 = this.o567.o70;
    var o804 = 0;
    for (var o805 = 0; o805 < o801; ++o805) {
      o803[o805++] = o565[o804++];
      o803[o805++] = o565[o804++];
      o803[o805++] = o565[o804++];
    }
    this.o709();
  }
}
o360.prototype.o799 = function () {"use strict";
  //Convert our dirty 24-bit (24-bit, with internal render flags above it) framebuffer to an 8-bit buffer with separate indices for the RGB channels:
  var o565 = this.o565;
  var o566 = this.o566;
  var o804 = 0;
  for (var o805 = 0; o805 < 69120;) {
    o566[o805++] = (o565[o804] >> 16) & 0xFF;    //Red
    o566[o805++] = (o565[o804] >> 8) & 0xFF;    //Green
    o566[o805++] = o565[o804++] & 0xFF;      //Blue
  }
}
o360.prototype.o794 = function () {"use strict";
  var o804 = 0;
  var o565 = this.o566;
  if (this.o400 || this.o561) {
    while (o804 < 69120) {
      o565[o804++] = 248;
    }
  }
  else {
    while (o804 < 69120) {
      o565[o804++] = 239;
      o565[o804++] = 255;
      o565[o804++] = 222;
    }
  }
}
o360.prototype.o802 = function () {"use strict";
  //Return a reference to the generated resized framebuffer:
  return this.o704.o353(this.o566);
}
o360.prototype.o703 = function () {"use strict";
  if (this.o573 > 0) {
    this.o704 = new o304(160, 144, this.o570, this.o702, false, true);
  }
}
o360.prototype.o806 = function (o807) {"use strict";
  this.o568 = o807 * 160;
  if (this.o528) {
    this.o538 = 160;
    this.o562(o807);
    this.o563(o807);
  }
  else {
    var o808 = (o807 + 1) * 160;
    var o809 = (this.o400 || this.o561) ? 0xF8F8F8 : 0xEFFFDE;
    for (var o810 = (o807 * 160) + this.o539; o810 < o808; o810++) {
      this.o565[o810] = o809;
    }
  }
  this.o564(o807);
  this.o539 = 0;
  this.o537 = -1;
}
o360.prototype.o811 = function () {"use strict";
  if (this.o502 < 144 && this.o412 == 3) {
    //TODO: Get this accurate:
    if (this.o537 == -1) {
      this.o537 = this.o523 & 0x7;
    }
    if (this.o490 >= 82) {
      this.o538 = this.o490 - 74;
      this.o538 = Math.o279(this.o538 - this.o537 - (this.o538 % 0x8), 160);
      if (this.o528) {
        this.o568 = this.o503 * 160;
        this.o562(this.o503);
        this.o563(this.o503);
        //TODO: Do midscanline JIT for sprites...
      }
      else {
        var o808 = (this.o503 * 160) + this.o538;
        var o809 = (this.o400 || this.o561) ? 0xF8F8F8 : 0xEFFFDE;
        for (var o810 = (this.o503 * 160) + this.o539; o810 < o808; o810++) {
          this.o565[o810] = o809;
        }
      }
      this.o539 = this.o538;
    }
  }
}
o360.prototype.o691 = function () {"use strict";
  this.o422 = (this.o418) ? this.o419 : this.o420;
  if (this.o400) {
    this.o547 = this.o676(0x40, 0, "uint8");
    this.o548 = this.o676(0x40, 0, "uint8");
    this.o551 = this.o676(0x20, 0x1000000, "int32");
    this.o552 = this.o676(0x40, 0, "int32");
    this.o541 = this.o676(0x800, 0, "uint8");
    this.o542 = (this.o522 > 0) ? this.o541 : this.o540;
    this.o543 = this.o677(0xF80);
  }
  else {
    this.o549 = this.o676(8, 0, "int32");
    this.o550 = this.o676(4, 0, "int32");
    this.o546 = this.o550;
    this.o545 = this.o549;
    this.o543 = this.o677(0x700);
    this.o812 = this.o676(0x100, 0, "uint8");
    this.o813 = this.o676(10, 0, "int32");
  }
  this.o814();
}
o360.prototype.o695 = function () {"use strict";
  o113("Stepping down from GBC mode.", 0);
  this.o394 = this.o395 = this.o542 = this.o541 = null;
  this.o543.length = 0x700;
  if (o683[4]) {
    this.o553 = this.o676(4, 0, "int32");
    this.o554 = this.o676(8, 0, "int32");
    this.o555 = this.o676(4, 0, "int32");
    this.o556 = this.o676(8, 0, "int32");
    this.o546 = this.o553;
    this.o545 = this.o554;
    this.o549 = this.o550 = null;
    this.o815();
  }
  else {
    this.o549 = this.o676(8, 0, "int32");
    this.o550 = this.o676(4, 0, "int32");
    this.o546 = this.o550;
    this.o545 = this.o549;
  }
  this.o812 = this.o676(0x100, 0, "uint8");
  this.o813 = this.o676(10, 0, "int32");
  this.o814();
  this.o666();
  this.o667();
}
o360.prototype.o814 = function () {"use strict";
  if (!this.o400) {
    this.o562 = this.o816;
    this.o563 = this.o817;
    this.o564 = this.o818;
  }
  else {
    this.o819();
    this.o564 = this.o820;
  }
}
o360.prototype.o819 = function () {"use strict";
  if (this.o529) {
    this.o562 = this.o821;
    this.o563 = this.o822;
  }
  else {
    this.o562 = this.o823;
    this.o563 = this.o824;
  }
}
o360.prototype.o665 = function () {"use strict";
  this.o422 = (this.o418) ? this.o419 : this.o420;
  var o825 = 0;
  if (!this.o400) {
    if (this.o561) {
      this.o546 = this.o553;
      this.o545 = this.o554;
      this.o557 = this.o826;
      this.o559 = this.o827;

    }
    else {
      this.o546 = this.o550;
      this.o545 = this.o549;
    }
    this.o543 = this.o677(0x700);
    for (o825 = 0x8000; o825 < 0x9000; o825 += 2) {
      this.o828(o825);
    }
    for (o825 = 0x9000; o825 < 0x9800; o825 += 2) {
      this.o829(o825);
    }
    this.o812 = this.o676(0x100, 0, "uint8");
    this.o813 = this.o676(10, 0, "int32");
  }
  else {
    this.o542 = (this.o522 > 0) ? this.o541 : this.o540;
    this.o543 = this.o677(0xF80);
    for (; o825 < 0x1800; o825 += 0x10) {
      this.o830(o825);
      this.o831(o825);
    }
  }
  this.o814();
}
o360.prototype.o832 = function (value) {"use strict";
  //Adjustment for the GBC's tinting (According to Gambatte):
  var o833 = value & 0x1F;
  var o834 = (value >> 5) & 0x1F;
  var o835 = (value >> 10) & 0x1F;
  return ((o833 * 13 + o834 * 2 + o835) >> 1) << 16 | (o834 * 3 + o835) << 9 | (o833 * 3 + o834 * 2 + o835 * 11) >> 1;
}
o360.prototype.o815 = function () {"use strict";
  //GBC Colorization of DMG ROMs:
  //BG
  for (var o836 = 0; o836 < 4; o836++) {
    var o837 = o836 << 1;
    //BG
    this.o555[o836] = this.o832((this.o548[o837 | 1] << 8) | this.o548[o837]);
    //OBJ 1
    this.o556[o836] = this.o832((this.o547[o837 | 1] << 8) | this.o547[o837]);
  }
  //OBJ 2
  for (o836 = 4; o836 < 8; o836++) {
    o837 = o836 << 1;
    this.o556[o836] = this.o832((this.o547[o837 | 1] << 8) | this.o547[o837]);
  }
  //Update the palette entries:
  this.o557 = this.o826;
  this.o559 = this.o827;
  this.o557(this.o155[0xFF47]);
  this.o559(0, this.o155[0xFF48]);
  this.o559(1, this.o155[0xFF49]);
  this.o561 = true;
}
o360.prototype.o558 = function (o70) {"use strict";
  this.o550[0] = this.o544[o70 & 0x03] | 0x2000000;
  this.o550[1] = this.o544[(o70 >> 2) & 0x03];
  this.o550[2] = this.o544[(o70 >> 4) & 0x03];
  this.o550[3] = this.o544[o70 >> 6];
}
o360.prototype.o826 = function (o70) {"use strict";
  //GB colorization:
  this.o553[0] = this.o555[o70 & 0x03] | 0x2000000;
  this.o553[1] = this.o555[(o70 >> 2) & 0x03];
  this.o553[2] = this.o555[(o70 >> 4) & 0x03];
  this.o553[3] = this.o555[o70 >> 6];
}
o360.prototype.o560 = function (index, o70) {"use strict";
  this.o549[index | 1] = this.o544[(o70 >> 2) & 0x03];
  this.o549[index | 2] = this.o544[(o70 >> 4) & 0x03];
  this.o549[index | 3] = this.o544[o70 >> 6];
}
o360.prototype.o827 = function (index, o70) {"use strict";
  //GB colorization:
  this.o554[index | 1] = this.o556[index | ((o70 >> 2) & 0x03)];
  this.o554[index | 2] = this.o556[index | ((o70 >> 4) & 0x03)];
  this.o554[index | 3] = this.o556[index | (o70 >> 6)];
}
o360.prototype.o838 = function (index, o70) {"use strict";
  if (this.o548[index] != o70) {
    this.o839();
    //Update the color palette for BG tiles since it changed:
    this.o548[index] = o70;
    if ((index & 0x06) == 0) {
      //Palette 0 (Special tile Priority stuff)
      o70 = 0x2000000 | this.o832((this.o548[index | 1] << 8) | this.o548[index & 0x3E]);
      index >>= 1;
      this.o552[index] = o70;
      this.o552[0x20 | index] = 0x1000000 | o70;
    }
    else {
      //Regular Palettes (No special crap)
      o70 = this.o832((this.o548[index | 1] << 8) | this.o548[index & 0x3E]);
      index >>= 1;
      this.o552[index] = o70;
      this.o552[0x20 | index] = 0x1000000 | o70;
    }
  }
}
o360.prototype.o840 = function (index, o70) {"use strict";
  if (this.o547[index] != o70) {
    //Update the color palette for OBJ tiles since it changed:
    this.o547[index] = o70;
    if ((index & 0x06) > 0) {
      //Regular Palettes (No special crap)
      this.o839();
      this.o551[index >> 1] = 0x1000000 | this.o832((this.o547[index | 1] << 8) | this.o547[index & 0x3E]);
    }
  }
}
o360.prototype.o816 = function (o807) {"use strict";
  var o841 = (this.o524 + o807) & 0xFF;            //The line of the BG we're at.
  var o842 = (o841 & 7) << 3;
  var o843 = this.o531 | ((o841 & 0xF8) << 2);  //The row of cached tiles we're fetching from.
  var o844 = (this.o523 + this.o539) & 0xFF;            //The scroll amount of the BG.
  var o810 = this.o568 + this.o539;                  //Current pixel we're working on.
  var o845 = this.o568 + ((this.o525 && (o807 - this.o533) >= 0) ? Math.o279(Math.o290(this.o534, 0) + this.o539, this.o538) : this.o538);  //Make sure we do at most 160 pixels a scanline.
  var o680 = o843 + (o844 >> 3);
  var o846 = this.o540[o680];
  if (o846 < this.o532) {
    o846 |= 0x100;
  }
  var o847 = this.o543[o846];
  for (var o848 = (o844 & 0x7); o848 < 8 && o810 < o845 && o844 < 0x100; ++o844) {
    this.o565[o810++] = this.o546[o847[o842 | o848++]];
  }
  var o849 = Math.o279(o845 - o810, 0x100 - o844) >> 3;
  o844 += o849 << 3;
  o849 += o680;
  while (o680 < o849) {
    o846 = this.o540[++o680];
    if (o846 < this.o532) {
      o846 |= 0x100;
    }
    o847 = this.o543[o846];
    o848 = o842;
    this.o565[o810++] = this.o546[o847[o848++]];
    this.o565[o810++] = this.o546[o847[o848++]];
    this.o565[o810++] = this.o546[o847[o848++]];
    this.o565[o810++] = this.o546[o847[o848++]];
    this.o565[o810++] = this.o546[o847[o848++]];
    this.o565[o810++] = this.o546[o847[o848++]];
    this.o565[o810++] = this.o546[o847[o848++]];
    this.o565[o810++] = this.o546[o847[o848]];
  }
  if (o810 < o845) {
    if (o844 < 0x100) {
      o846 = this.o540[++o680];
      if (o846 < this.o532) {
        o846 |= 0x100;
      }
      o847 = this.o543[o846];
      for (o848 = o842 - 1; o810 < o845 && o844 < 0x100; ++o844) {
        this.o565[o810++] = this.o546[o847[++o848]];
      }
    }
    o849 = ((o845 - o810) >> 3) + o843;
    while (o843 < o849) {
      o846 = this.o540[o843++];
      if (o846 < this.o532) {
        o846 |= 0x100;
      }
      o847 = this.o543[o846];
      o848 = o842;
      this.o565[o810++] = this.o546[o847[o848++]];
      this.o565[o810++] = this.o546[o847[o848++]];
      this.o565[o810++] = this.o546[o847[o848++]];
      this.o565[o810++] = this.o546[o847[o848++]];
      this.o565[o810++] = this.o546[o847[o848++]];
      this.o565[o810++] = this.o546[o847[o848++]];
      this.o565[o810++] = this.o546[o847[o848++]];
      this.o565[o810++] = this.o546[o847[o848]];
    }
    if (o810 < o845) {
      o846 = this.o540[o843];
      if (o846 < this.o532) {
        o846 |= 0x100;
      }
      o847 = this.o543[o846];
      switch (o845 - o810) {
        case 7:
          this.o565[o810 + 6] = this.o546[o847[o842 | 6]];
        case 6:
          this.o565[o810 + 5] = this.o546[o847[o842 | 5]];
        case 5:
          this.o565[o810 + 4] = this.o546[o847[o842 | 4]];
        case 4:
          this.o565[o810 + 3] = this.o546[o847[o842 | 3]];
        case 3:
          this.o565[o810 + 2] = this.o546[o847[o842 | 2]];
        case 2:
          this.o565[o810 + 1] = this.o546[o847[o842 | 1]];
        case 1:
          this.o565[o810] = this.o546[o847[o842]];
      }
    }
  }
}
o360.prototype.o821 = function (o807) {"use strict";
  var o841 = (this.o524 + o807) & 0xFF;            //The line of the BG we're at.
  var o842 = (o841 & 7) << 3;
  var o843 = this.o531 | ((o841 & 0xF8) << 2);  //The row of cached tiles we're fetching from.
  var o844 = (this.o523 + this.o539) & 0xFF;            //The scroll amount of the BG.
  var o810 = this.o568 + this.o539;                  //Current pixel we're working on.
  var o845 = this.o568 + ((this.o525 && (o807 - this.o533) >= 0) ? Math.o279(Math.o290(this.o534, 0) + this.o539, this.o538) : this.o538);  //Make sure we do at most 160 pixels a scanline.
  var o680 = o843 + (o844 >> 3);
  var o846 = this.o540[o680];
  if (o846 < this.o532) {
    o846 |= 0x100;
  }
  var o850 = this.o541[o680];
  var o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
  var o851 = ((o850 & 0x7) << 2) | ((o850 & 0x80) >> 2);
  for (var o848 = (o844 & 0x7); o848 < 8 && o810 < o845 && o844 < 0x100; ++o844) {
    this.o565[o810++] = this.o552[o851 | o847[o842 | o848++]];
  }
  var o849 = Math.o279(o845 - o810, 0x100 - o844) >> 3;
  o844 += o849 << 3;
  o849 += o680;
  while (o680 < o849) {
    o846 = this.o540[++o680];
    if (o846 < this.o532) {
      o846 |= 0x100;
    }
    o850 = this.o541[o680];
    o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
    o851 = ((o850 & 0x7) << 2) | ((o850 & 0x80) >> 2);
    o848 = o842;
    this.o565[o810++] = this.o552[o851 | o847[o848++]];
    this.o565[o810++] = this.o552[o851 | o847[o848++]];
    this.o565[o810++] = this.o552[o851 | o847[o848++]];
    this.o565[o810++] = this.o552[o851 | o847[o848++]];
    this.o565[o810++] = this.o552[o851 | o847[o848++]];
    this.o565[o810++] = this.o552[o851 | o847[o848++]];
    this.o565[o810++] = this.o552[o851 | o847[o848++]];
    this.o565[o810++] = this.o552[o851 | o847[o848]];
  }
  if (o810 < o845) {
    if (o844 < 0x100) {
      o846 = this.o540[++o680];
      if (o846 < this.o532) {
        o846 |= 0x100;
      }
      o850 = this.o541[o680];
      o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
      o851 = ((o850 & 0x7) << 2) | ((o850 & 0x80) >> 2);
      for (o848 = o842 - 1; o810 < o845 && o844 < 0x100; ++o844) {
        this.o565[o810++] = this.o552[o851 | o847[++o848]];
      }
    }
    o849 = ((o845 - o810) >> 3) + o843;
    while (o843 < o849) {
      o846 = this.o540[o843];
      if (o846 < this.o532) {
        o846 |= 0x100;
      }
      o850 = this.o541[o843++];
      o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
      o851 = ((o850 & 0x7) << 2) | ((o850 & 0x80) >> 2);
      o848 = o842;
      this.o565[o810++] = this.o552[o851 | o847[o848++]];
      this.o565[o810++] = this.o552[o851 | o847[o848++]];
      this.o565[o810++] = this.o552[o851 | o847[o848++]];
      this.o565[o810++] = this.o552[o851 | o847[o848++]];
      this.o565[o810++] = this.o552[o851 | o847[o848++]];
      this.o565[o810++] = this.o552[o851 | o847[o848++]];
      this.o565[o810++] = this.o552[o851 | o847[o848++]];
      this.o565[o810++] = this.o552[o851 | o847[o848]];
    }
    if (o810 < o845) {
      o846 = this.o540[o843];
      if (o846 < this.o532) {
        o846 |= 0x100;
      }
      o850 = this.o541[o843];
      o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
      o851 = ((o850 & 0x7) << 2) | ((o850 & 0x80) >> 2);
      switch (o845 - o810) {
        case 7:
          this.o565[o810 + 6] = this.o552[o851 | o847[o842 | 6]];
        case 6:
          this.o565[o810 + 5] = this.o552[o851 | o847[o842 | 5]];
        case 5:
          this.o565[o810 + 4] = this.o552[o851 | o847[o842 | 4]];
        case 4:
          this.o565[o810 + 3] = this.o552[o851 | o847[o842 | 3]];
        case 3:
          this.o565[o810 + 2] = this.o552[o851 | o847[o842 | 2]];
        case 2:
          this.o565[o810 + 1] = this.o552[o851 | o847[o842 | 1]];
        case 1:
          this.o565[o810] = this.o552[o851 | o847[o842]];
      }
    }
  }
}
o360.prototype.o823 = function (o807) {"use strict";
  var o841 = (this.o524 + o807) & 0xFF;            //The line of the BG we're at.
  var o842 = (o841 & 7) << 3;
  var o843 = this.o531 | ((o841 & 0xF8) << 2);  //The row of cached tiles we're fetching from.
  var o844 = (this.o523 + this.o539) & 0xFF;            //The scroll amount of the BG.
  var o810 = this.o568 + this.o539;                  //Current pixel we're working on.
  var o845 = this.o568 + ((this.o525 && (o807 - this.o533) >= 0) ? Math.o279(Math.o290(this.o534, 0) + this.o539, this.o538) : this.o538);  //Make sure we do at most 160 pixels a scanline.
  var o680 = o843 + (o844 >> 3);
  var o846 = this.o540[o680];
  if (o846 < this.o532) {
    o846 |= 0x100;
  }
  var o850 = this.o541[o680];
  var o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
  var o851 = (o850 & 0x7) << 2;
  for (var o848 = (o844 & 0x7); o848 < 8 && o810 < o845 && o844 < 0x100; ++o844) {
    this.o565[o810++] = this.o552[o851 | o847[o842 | o848++]];
  }
  var o849 = Math.o279(o845 - o810, 0x100 - o844) >> 3;
  o844 += o849 << 3;
  o849 += o680;
  while (o680 < o849) {
    o846 = this.o540[++o680];
    if (o846 < this.o532) {
      o846 |= 0x100;
    }
    o850 = this.o541[o680];
    o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
    o851 = (o850 & 0x7) << 2;
    o848 = o842;
    this.o565[o810++] = this.o552[o851 | o847[o848++]];
    this.o565[o810++] = this.o552[o851 | o847[o848++]];
    this.o565[o810++] = this.o552[o851 | o847[o848++]];
    this.o565[o810++] = this.o552[o851 | o847[o848++]];
    this.o565[o810++] = this.o552[o851 | o847[o848++]];
    this.o565[o810++] = this.o552[o851 | o847[o848++]];
    this.o565[o810++] = this.o552[o851 | o847[o848++]];
    this.o565[o810++] = this.o552[o851 | o847[o848]];
  }
  if (o810 < o845) {
    if (o844 < 0x100) {
      o846 = this.o540[++o680];
      if (o846 < this.o532) {
        o846 |= 0x100;
      }
      o850 = this.o541[o680];
      o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
      o851 = (o850 & 0x7) << 2;
      for (o848 = o842 - 1; o810 < o845 && o844 < 0x100; ++o844) {
        this.o565[o810++] = this.o552[o851 | o847[++o848]];
      }
    }
    o849 = ((o845 - o810) >> 3) + o843;
    while (o843 < o849) {
      o846 = this.o540[o843];
      if (o846 < this.o532) {
        o846 |= 0x100;
      }
      o850 = this.o541[o843++];
      o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
      o851 = (o850 & 0x7) << 2;
      o848 = o842;
      this.o565[o810++] = this.o552[o851 | o847[o848++]];
      this.o565[o810++] = this.o552[o851 | o847[o848++]];
      this.o565[o810++] = this.o552[o851 | o847[o848++]];
      this.o565[o810++] = this.o552[o851 | o847[o848++]];
      this.o565[o810++] = this.o552[o851 | o847[o848++]];
      this.o565[o810++] = this.o552[o851 | o847[o848++]];
      this.o565[o810++] = this.o552[o851 | o847[o848++]];
      this.o565[o810++] = this.o552[o851 | o847[o848]];
    }
    if (o810 < o845) {
      o846 = this.o540[o843];
      if (o846 < this.o532) {
        o846 |= 0x100;
      }
      o850 = this.o541[o843];
      o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
      o851 = (o850 & 0x7) << 2;
      switch (o845 - o810) {
        case 7:
          this.o565[o810 + 6] = this.o552[o851 | o847[o842 | 6]];
        case 6:
          this.o565[o810 + 5] = this.o552[o851 | o847[o842 | 5]];
        case 5:
          this.o565[o810 + 4] = this.o552[o851 | o847[o842 | 4]];
        case 4:
          this.o565[o810 + 3] = this.o552[o851 | o847[o842 | 3]];
        case 3:
          this.o565[o810 + 2] = this.o552[o851 | o847[o842 | 2]];
        case 2:
          this.o565[o810 + 1] = this.o552[o851 | o847[o842 | 1]];
        case 1:
          this.o565[o810] = this.o552[o851 | o847[o842]];
      }
    }
  }
}
o360.prototype.o817 = function (o807) {"use strict";
  if (this.o525) {                  //Is the window enabled?
    var o841 = o807 - this.o533;    //The line of the BG we're at.
    if (o841 >= 0) {
      var o852 = (this.o534 > 0) ? (this.o534 + this.o539) : this.o539;
      var o810 = this.o568 + o852;
      var o845 = this.o568 + this.o538;
      if (o810 < o845) {
        var o842 = (o841 & 0x7) << 3;
        var o680 = (this.o530 | ((o841 & 0xF8) << 2)) + (this.o539 >> 3);
        var o846 = this.o540[o680];
        if (o846 < this.o532) {
          o846 |= 0x100;
        }
        var o847 = this.o543[o846];
        var o848 = (o852 - this.o534) & 0x7;
        o852 = Math.o279(8, o848 + o845 - o810);
        while (o848 < o852) {
          this.o565[o810++] = this.o546[o847[o842 | o848++]];
        }
        o852 = o680 + ((o845 - o810) >> 3);
        while (o680 < o852) {
          o846 = this.o540[++o680];
          if (o846 < this.o532) {
            o846 |= 0x100;
          }
          o847 = this.o543[o846];
          o848 = o842;
          this.o565[o810++] = this.o546[o847[o848++]];
          this.o565[o810++] = this.o546[o847[o848++]];
          this.o565[o810++] = this.o546[o847[o848++]];
          this.o565[o810++] = this.o546[o847[o848++]];
          this.o565[o810++] = this.o546[o847[o848++]];
          this.o565[o810++] = this.o546[o847[o848++]];
          this.o565[o810++] = this.o546[o847[o848++]];
          this.o565[o810++] = this.o546[o847[o848]];
        }
        if (o810 < o845) {
          o846 = this.o540[++o680];
          if (o846 < this.o532) {
            o846 |= 0x100;
          }
          o847 = this.o543[o846];
          switch (o845 - o810) {
            case 7:
              this.o565[o810 + 6] = this.o546[o847[o842 | 6]];
            case 6:
              this.o565[o810 + 5] = this.o546[o847[o842 | 5]];
            case 5:
              this.o565[o810 + 4] = this.o546[o847[o842 | 4]];
            case 4:
              this.o565[o810 + 3] = this.o546[o847[o842 | 3]];
            case 3:
              this.o565[o810 + 2] = this.o546[o847[o842 | 2]];
            case 2:
              this.o565[o810 + 1] = this.o546[o847[o842 | 1]];
            case 1:
              this.o565[o810] = this.o546[o847[o842]];
          }
        }
      }
    }
  }
}
o360.prototype.o822 = function (o807) {"use strict";
  if (this.o525) {                  //Is the window enabled?
    var o841 = o807 - this.o533;    //The line of the BG we're at.
    if (o841 >= 0) {
      var o852 = (this.o534 > 0) ? (this.o534 + this.o539) : this.o539;
      var o810 = this.o568 + o852;
      var o845 = this.o568 + this.o538;
      if (o810 < o845) {
        var o842 = (o841 & 0x7) << 3;
        var o680 = (this.o530 | ((o841 & 0xF8) << 2)) + (this.o539 >> 3);
        var o846 = this.o540[o680];
        if (o846 < this.o532) {
          o846 |= 0x100;
        }
        var o850 = this.o541[o680];
        var o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
        var o851 = ((o850 & 0x7) << 2) | ((o850 & 0x80) >> 2);
        var o848 = (o852 - this.o534) & 0x7;
        o852 = Math.o279(8, o848 + o845 - o810);
        while (o848 < o852) {
          this.o565[o810++] = this.o552[o851 | o847[o842 | o848++]];
        }
        o852 = o680 + ((o845 - o810) >> 3);
        while (o680 < o852) {
          o846 = this.o540[++o680];
          if (o846 < this.o532) {
            o846 |= 0x100;
          }
          o850 = this.o541[o680];
          o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
          o851 = ((o850 & 0x7) << 2) | ((o850 & 0x80) >> 2);
          o848 = o842;
          this.o565[o810++] = this.o552[o851 | o847[o848++]];
          this.o565[o810++] = this.o552[o851 | o847[o848++]];
          this.o565[o810++] = this.o552[o851 | o847[o848++]];
          this.o565[o810++] = this.o552[o851 | o847[o848++]];
          this.o565[o810++] = this.o552[o851 | o847[o848++]];
          this.o565[o810++] = this.o552[o851 | o847[o848++]];
          this.o565[o810++] = this.o552[o851 | o847[o848++]];
          this.o565[o810++] = this.o552[o851 | o847[o848]];
        }
        if (o810 < o845) {
          o846 = this.o540[++o680];
          if (o846 < this.o532) {
            o846 |= 0x100;
          }
          o850 = this.o541[o680];
          o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
          o851 = ((o850 & 0x7) << 2) | ((o850 & 0x80) >> 2);
          switch (o845 - o810) {
            case 7:
              this.o565[o810 + 6] = this.o552[o851 | o847[o842 | 6]];
            case 6:
              this.o565[o810 + 5] = this.o552[o851 | o847[o842 | 5]];
            case 5:
              this.o565[o810 + 4] = this.o552[o851 | o847[o842 | 4]];
            case 4:
              this.o565[o810 + 3] = this.o552[o851 | o847[o842 | 3]];
            case 3:
              this.o565[o810 + 2] = this.o552[o851 | o847[o842 | 2]];
            case 2:
              this.o565[o810 + 1] = this.o552[o851 | o847[o842 | 1]];
            case 1:
              this.o565[o810] = this.o552[o851 | o847[o842]];
          }
        }
      }
    }
  }
}
o360.prototype.o824 = function (o807) {"use strict";
  if (this.o525) {                  //Is the window enabled?
    var o841 = o807 - this.o533;    //The line of the BG we're at.
    if (o841 >= 0) {
      var o852 = (this.o534 > 0) ? (this.o534 + this.o539) : this.o539;
      var o810 = this.o568 + o852;
      var o845 = this.o568 + this.o538;
      if (o810 < o845) {
        var o842 = (o841 & 0x7) << 3;
        var o680 = (this.o530 | ((o841 & 0xF8) << 2)) + (this.o539 >> 3);
        var o846 = this.o540[o680];
        if (o846 < this.o532) {
          o846 |= 0x100;
        }
        var o850 = this.o541[o680];
        var o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
        var o851 = (o850 & 0x7) << 2;
        var o848 = (o852 - this.o534) & 0x7;
        o852 = Math.o279(8, o848 + o845 - o810);
        while (o848 < o852) {
          this.o565[o810++] = this.o552[o851 | o847[o842 | o848++]];
        }
        o852 = o680 + ((o845 - o810) >> 3);
        while (o680 < o852) {
          o846 = this.o540[++o680];
          if (o846 < this.o532) {
            o846 |= 0x100;
          }
          o850 = this.o541[o680];
          o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
          o851 = (o850 & 0x7) << 2;
          o848 = o842;
          this.o565[o810++] = this.o552[o851 | o847[o848++]];
          this.o565[o810++] = this.o552[o851 | o847[o848++]];
          this.o565[o810++] = this.o552[o851 | o847[o848++]];
          this.o565[o810++] = this.o552[o851 | o847[o848++]];
          this.o565[o810++] = this.o552[o851 | o847[o848++]];
          this.o565[o810++] = this.o552[o851 | o847[o848++]];
          this.o565[o810++] = this.o552[o851 | o847[o848++]];
          this.o565[o810++] = this.o552[o851 | o847[o848]];
        }
        if (o810 < o845) {
          o846 = this.o540[++o680];
          if (o846 < this.o532) {
            o846 |= 0x100;
          }
          o850 = this.o541[o680];
          o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
          o851 = (o850 & 0x7) << 2;
          switch (o845 - o810) {
            case 7:
              this.o565[o810 + 6] = this.o552[o851 | o847[o842 | 6]];
            case 6:
              this.o565[o810 + 5] = this.o552[o851 | o847[o842 | 5]];
            case 5:
              this.o565[o810 + 4] = this.o552[o851 | o847[o842 | 4]];
            case 4:
              this.o565[o810 + 3] = this.o552[o851 | o847[o842 | 3]];
            case 3:
              this.o565[o810 + 2] = this.o552[o851 | o847[o842 | 2]];
            case 2:
              this.o565[o810 + 1] = this.o552[o851 | o847[o842 | 1]];
            case 1:
              this.o565[o810] = this.o552[o851 | o847[o842]];
          }
        }
      }
    }
  }
}
o360.prototype.o818 = function (o807) {"use strict";
  if (this.o526) {                    //Are sprites enabled?
    var o785 = o807 + 0x10;
    var o788 = 0xFE00;
    var o786 = 0;
    var o853 = 1;
    var o854 = 0;
    var o855 = 0;
    var o850 = 0;
    var o851 = 0;
    var o847 = null;
    var o70 = 0;
    var o413 = 0;
    var length = 0;
    var o856 = 0;
    var o857 = 0;
    //Clear our x-coord sort buffer:
    while (o853 < 168) {
      this.o812[o853++] = 0xFF;
    }
    if (this.o527) {
      //Draw the visible sprites:
      for (var length = this.o858(o785, 0x7); o413 < length; ++o413) {
        o788 = this.o813[o413];
        o786 = (o785 - this.o155[o788]) << 3;
        o850 = this.o155[o788 | 3];
        o851 = (o850 & 0x10) >> 2;
        o847 = this.o543[((o850 & 0x60) << 4) | this.o155[o788 | 0x2]];
        o857 = o854 = this.o155[o788 | 1];
        o855 = Math.o279(168 - o857, 8);
        o853 = (o857 > 7) ? 0 : (8 - o857);
        for (o856 = this.o568 + ((o857 > 8) ? (o857 - 8) : 0); o853 < o855; ++o853, ++o856, ++o857) {
          if (this.o812[o857] > o854) {
            if (this.o565[o856] >= 0x2000000) {
              o70 = o847[o786 | o853];
              if (o70 > 0) {
                this.o565[o856] = this.o545[o851 | o70];
                this.o812[o857] = o854;
              }
            }
            else if (this.o565[o856] < 0x1000000) {
              o70 = o847[o786 | o853];
              if (o70 > 0 && o850 < 0x80) {
                this.o565[o856] = this.o545[o851 | o70];
                this.o812[o857] = o854;
              }
            }
          }
        }
      }
    }
    else {
      //Draw the visible sprites:
      for (var length = this.o858(o785, 0xF); o413 < length; ++o413) {
        o788 = this.o813[o413];
        o786 = (o785 - this.o155[o788]) << 3;
        o850 = this.o155[o788 | 3];
        o851 = (o850 & 0x10) >> 2;
        if ((o850 & 0x40) == (0x40 & o786)) {
          o847 = this.o543[((o850 & 0x60) << 4) | (this.o155[o788 | 0x2] & 0xFE)];
        }
        else {
          o847 = this.o543[((o850 & 0x60) << 4) | this.o155[o788 | 0x2] | 1];
        }
        o786 &= 0x3F;
        o857 = o854 = this.o155[o788 | 1];
        o855 = Math.o279(168 - o857, 8);
        o853 = (o857 > 7) ? 0 : (8 - o857);
        for (o856 = this.o568 + ((o857 > 8) ? (o857 - 8) : 0); o853 < o855; ++o853, ++o856, ++o857) {
          if (this.o812[o857] > o854) {
            if (this.o565[o856] >= 0x2000000) {
              o70 = o847[o786 | o853];
              if (o70 > 0) {
                this.o565[o856] = this.o545[o851 | o70];
                this.o812[o857] = o854;
              }
            }
            else if (this.o565[o856] < 0x1000000) {
              o70 = o847[o786 | o853];
              if (o70 > 0 && o850 < 0x80) {
                this.o565[o856] = this.o545[o851 | o70];
                this.o812[o857] = o854;
              }
            }
          }
        }
      }
    }
  }
}
o360.prototype.o858 = function (o807, o859) {"use strict";
  var o768 = 0xFE00;
  var o413 = 0;
  var o860 = 0;
  while (o768 < 0xFEA0 && o413 < 10) {
    o860 = o807 - this.o155[o768];
    if ((o860 & o859) == o860) {
      this.o813[o413++] = o768;
    }
    o768 += 4;
  }
  return o413;
}
o360.prototype.o820 = function (o807) {"use strict";
  if (this.o526) {                    //Are sprites enabled?
    var o788 = 0xFE00;
    var o785 = o807 + 0x10;
    var o786 = 0;
    var o853 = 0;
    var o861 = 0;
    var o862 = 0;
    var o850 = 0;
    var o851 = 0;
    var o847 = null;
    var o70 = 0;
    var o856 = 0;
    var o413 = 0;
    if (this.o527) {
      for (; o788 < 0xFEA0 && o413 < 10; o788 += 4) {
        o786 = o785 - this.o155[o788];
        if ((o786 & 0x7) == o786) {
          o853 = this.o155[o788 | 1] - 8;
          o861 = Math.o279(160, o853 + 8);
          o850 = this.o155[o788 | 3];
          o851 = (o850 & 7) << 2;
          o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | this.o155[o788 | 2]];
          o862 = (o853 > 0) ? o853 : 0;
          o853 -= o786 << 3;
          for (o856 = this.o568 + o862; o862 < o861; ++o862, ++o856) {
            if (this.o565[o856] >= 0x2000000) {
              o70 = o847[o862 - o853];
              if (o70 > 0) {
                this.o565[o856] = this.o551[o851 | o70];
              }
            }
            else if (this.o565[o856] < 0x1000000) {
              o70 = o847[o862 - o853];
              if (o70 > 0 && o850 < 0x80) {    //Don't optimize for attrCode, as LICM-capable JITs should optimize its checks.
                this.o565[o856] = this.o551[o851 | o70];
              }
            }
          }
          ++o413;
        }
      }
    }
    else {
      for (; o788 < 0xFEA0 && o413 < 10; o788 += 4) {
        o786 = o785 - this.o155[o788];
        if ((o786 & 0xF) == o786) {
          o853 = this.o155[o788 | 1] - 8;
          o861 = Math.o279(160, o853 + 8);
          o850 = this.o155[o788 | 3];
          o851 = (o850 & 7) << 2;
          if ((o850 & 0x40) == (0x40 & (o786 << 3))) {
            o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | (this.o155[o788 | 0x2] & 0xFE)];
          }
          else {
            o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | this.o155[o788 | 0x2] | 1];
          }
          o862 = (o853 > 0) ? o853 : 0;
          o853 -= (o786 & 0x7) << 3;
          for (o856 = this.o568 + o862; o862 < o861; ++o862, ++o856) {
            if (this.o565[o856] >= 0x2000000) {
              o70 = o847[o862 - o853];
              if (o70 > 0) {
                this.o565[o856] = this.o551[o851 | o70];
              }
            }
            else if (this.o565[o856] < 0x1000000) {
              o70 = o847[o862 - o853];
              if (o70 > 0 && o850 < 0x80) {    //Don't optimize for attrCode, as LICM-capable JITs should optimize its checks.
                this.o565[o856] = this.o551[o851 | o70];
              }
            }
          }
          ++o413;
        }
      }
    }
  }
}
//Generate only a single tile line for the GB tile cache mode:
o360.prototype.o829 = function (o768) {"use strict";
  var o863 = (this.o155[0x1 | o768] << 8) | this.o155[0x9FFE & o768];
  var o864 = this.o543[(o768 & 0x1FF0) >> 4];
  o768 = (o768 & 0xE) << 2;
  o864[o768 | 7] = ((o863 & 0x100) >> 7) | (o863 & 0x1);
  o864[o768 | 6] = ((o863 & 0x200) >> 8) | ((o863 & 0x2) >> 1);
  o864[o768 | 5] = ((o863 & 0x400) >> 9) | ((o863 & 0x4) >> 2);
  o864[o768 | 4] = ((o863 & 0x800) >> 10) | ((o863 & 0x8) >> 3);
  o864[o768 | 3] = ((o863 & 0x1000) >> 11) | ((o863 & 0x10) >> 4);
  o864[o768 | 2] = ((o863 & 0x2000) >> 12) | ((o863 & 0x20) >> 5);
  o864[o768 | 1] = ((o863 & 0x4000) >> 13) | ((o863 & 0x40) >> 6);
  o864[o768] = ((o863 & 0x8000) >> 14) | ((o863 & 0x80) >> 7);
}
//Generate only a single tile line for the GBC tile cache mode (Bank 1):
o360.prototype.o865 = function (o768) {"use strict";
  var o863 = (this.o155[0x1 | o768] << 8) | this.o155[0x9FFE & o768];
  o768 &= 0x1FFE;
  var o866 = this.o543[o768 >> 4];
  var o867 = this.o543[0x200 | (o768 >> 4)];
  var o868 = this.o543[0x400 | (o768 >> 4)];
  var o869 = this.o543[0x600 | (o768 >> 4)];
  o768 = (o768 & 0xE) << 2;
  var o870 = 0x38 - o768;
  o869[o870] = o867[o768] = o868[o870 | 7] = o866[o768 | 7] = ((o863 & 0x100) >> 7) | (o863 & 0x1);
  o869[o870 | 1] = o867[o768 | 1] = o868[o870 | 6] = o866[o768 | 6] = ((o863 & 0x200) >> 8) | ((o863 & 0x2) >> 1);
  o869[o870 | 2] = o867[o768 | 2] = o868[o870 | 5] = o866[o768 | 5] = ((o863 & 0x400) >> 9) | ((o863 & 0x4) >> 2);
  o869[o870 | 3] = o867[o768 | 3] = o868[o870 | 4] = o866[o768 | 4] = ((o863 & 0x800) >> 10) | ((o863 & 0x8) >> 3);
  o869[o870 | 4] = o867[o768 | 4] = o868[o870 | 3] = o866[o768 | 3] = ((o863 & 0x1000) >> 11) | ((o863 & 0x10) >> 4);
  o869[o870 | 5] = o867[o768 | 5] = o868[o870 | 2] = o866[o768 | 2] = ((o863 & 0x2000) >> 12) | ((o863 & 0x20) >> 5);
  o869[o870 | 6] = o867[o768 | 6] = o868[o870 | 1] = o866[o768 | 1] = ((o863 & 0x4000) >> 13) | ((o863 & 0x40) >> 6);
  o869[o870 | 7] = o867[o768 | 7] = o868[o870] = o866[o768] = ((o863 & 0x8000) >> 14) | ((o863 & 0x80) >> 7);
}
//Generate all the flip combinations for a full GBC VRAM bank 1 tile:
o360.prototype.o830 = function (o871) {"use strict";
  var o768 = o871 >> 4;
  var o866 = this.o543[o768];
  var o867 = this.o543[0x200 | o768];
  var o868 = this.o543[0x400 | o768];
  var o869 = this.o543[0x600 | o768];
  var o863 = 0;
  o871 |= 0x8000;
  o768 = 0;
  var o870 = 56;
  do {
    o863 = (this.o155[0x1 | o871] << 8) | this.o155[o871];
    o869[o870] = o867[o768] = o868[o870 | 7] = o866[o768 | 7] = ((o863 & 0x100) >> 7) | (o863 & 0x1);
    o869[o870 | 1] = o867[o768 | 1] = o868[o870 | 6] = o866[o768 | 6] = ((o863 & 0x200) >> 8) | ((o863 & 0x2) >> 1);
    o869[o870 | 2] = o867[o768 | 2] = o868[o870 | 5] = o866[o768 | 5] = ((o863 & 0x400) >> 9) | ((o863 & 0x4) >> 2);
    o869[o870 | 3] = o867[o768 | 3] = o868[o870 | 4] = o866[o768 | 4] = ((o863 & 0x800) >> 10) | ((o863 & 0x8) >> 3);
    o869[o870 | 4] = o867[o768 | 4] = o868[o870 | 3] = o866[o768 | 3] = ((o863 & 0x1000) >> 11) | ((o863 & 0x10) >> 4);
    o869[o870 | 5] = o867[o768 | 5] = o868[o870 | 2] = o866[o768 | 2] = ((o863 & 0x2000) >> 12) | ((o863 & 0x20) >> 5);
    o869[o870 | 6] = o867[o768 | 6] = o868[o870 | 1] = o866[o768 | 1] = ((o863 & 0x4000) >> 13) | ((o863 & 0x40) >> 6);
    o869[o870 | 7] = o867[o768 | 7] = o868[o870] = o866[o768] = ((o863 & 0x8000) >> 14) | ((o863 & 0x80) >> 7);
    o768 += 8;
    o870 -= 8;
    o871 += 2;
  } while (o870 > -1);
}
//Generate only a single tile line for the GBC tile cache mode (Bank 2):
o360.prototype.o872 = function (o768) {"use strict";
  var o863 = (this.o394[0x1 | o768] << 8) | this.o394[0x1FFE & o768];
  var o866 = this.o543[0x800 | (o768 >> 4)];
  var o867 = this.o543[0xA00 | (o768 >> 4)];
  var o868 = this.o543[0xC00 | (o768 >> 4)];
  var o869 = this.o543[0xE00 | (o768 >> 4)];
  o768 = (o768 & 0xE) << 2;
  var o870 = 0x38 - o768;
  o869[o870] = o867[o768] = o868[o870 | 7] = o866[o768 | 7] = ((o863 & 0x100) >> 7) | (o863 & 0x1);
  o869[o870 | 1] = o867[o768 | 1] = o868[o870 | 6] = o866[o768 | 6] = ((o863 & 0x200) >> 8) | ((o863 & 0x2) >> 1);
  o869[o870 | 2] = o867[o768 | 2] = o868[o870 | 5] = o866[o768 | 5] = ((o863 & 0x400) >> 9) | ((o863 & 0x4) >> 2);
  o869[o870 | 3] = o867[o768 | 3] = o868[o870 | 4] = o866[o768 | 4] = ((o863 & 0x800) >> 10) | ((o863 & 0x8) >> 3);
  o869[o870 | 4] = o867[o768 | 4] = o868[o870 | 3] = o866[o768 | 3] = ((o863 & 0x1000) >> 11) | ((o863 & 0x10) >> 4);
  o869[o870 | 5] = o867[o768 | 5] = o868[o870 | 2] = o866[o768 | 2] = ((o863 & 0x2000) >> 12) | ((o863 & 0x20) >> 5);
  o869[o870 | 6] = o867[o768 | 6] = o868[o870 | 1] = o866[o768 | 1] = ((o863 & 0x4000) >> 13) | ((o863 & 0x40) >> 6);
  o869[o870 | 7] = o867[o768 | 7] = o868[o870] = o866[o768] = ((o863 & 0x8000) >> 14) | ((o863 & 0x80) >> 7);
}
//Generate all the flip combinations for a full GBC VRAM bank 2 tile:
o360.prototype.o831 = function (o871) {"use strict";
  var o768 = o871 >> 4;
  var o866 = this.o543[0x800 | o768];
  var o867 = this.o543[0xA00 | o768];
  var o868 = this.o543[0xC00 | o768];
  var o869 = this.o543[0xE00 | o768];
  var o863 = 0;
  o768 = 0;
  var o870 = 56;
  do {
    o863 = (this.o394[0x1 | o871] << 8) | this.o394[o871];
    o869[o870] = o867[o768] = o868[o870 | 7] = o866[o768 | 7] = ((o863 & 0x100) >> 7) | (o863 & 0x1);
    o869[o870 | 1] = o867[o768 | 1] = o868[o870 | 6] = o866[o768 | 6] = ((o863 & 0x200) >> 8) | ((o863 & 0x2) >> 1);
    o869[o870 | 2] = o867[o768 | 2] = o868[o870 | 5] = o866[o768 | 5] = ((o863 & 0x400) >> 9) | ((o863 & 0x4) >> 2);
    o869[o870 | 3] = o867[o768 | 3] = o868[o870 | 4] = o866[o768 | 4] = ((o863 & 0x800) >> 10) | ((o863 & 0x8) >> 3);
    o869[o870 | 4] = o867[o768 | 4] = o868[o870 | 3] = o866[o768 | 3] = ((o863 & 0x1000) >> 11) | ((o863 & 0x10) >> 4);
    o869[o870 | 5] = o867[o768 | 5] = o868[o870 | 2] = o866[o768 | 2] = ((o863 & 0x2000) >> 12) | ((o863 & 0x20) >> 5);
    o869[o870 | 6] = o867[o768 | 6] = o868[o870 | 1] = o866[o768 | 1] = ((o863 & 0x4000) >> 13) | ((o863 & 0x40) >> 6);
    o869[o870 | 7] = o867[o768 | 7] = o868[o870] = o866[o768] = ((o863 & 0x8000) >> 14) | ((o863 & 0x80) >> 7);
    o768 += 8;
    o870 -= 8;
    o871 += 2;
  } while (o870 > -1);
}
//Generate only a single tile line for the GB tile cache mode (OAM accessible range):
o360.prototype.o828 = function (o768) {"use strict";
  var o863 = (this.o155[0x1 | o768] << 8) | this.o155[0x9FFE & o768];
  o768 &= 0x1FFE;
  var o866 = this.o543[o768 >> 4];
  var o867 = this.o543[0x200 | (o768 >> 4)];
  var o868 = this.o543[0x400 | (o768 >> 4)];
  var o869 = this.o543[0x600 | (o768 >> 4)];
  o768 = (o768 & 0xE) << 2;
  var o870 = 0x38 - o768;
  o869[o870] = o867[o768] = o868[o870 | 7] = o866[o768 | 7] = ((o863 & 0x100) >> 7) | (o863 & 0x1);
  o869[o870 | 1] = o867[o768 | 1] = o868[o870 | 6] = o866[o768 | 6] = ((o863 & 0x200) >> 8) | ((o863 & 0x2) >> 1);
  o869[o870 | 2] = o867[o768 | 2] = o868[o870 | 5] = o866[o768 | 5] = ((o863 & 0x400) >> 9) | ((o863 & 0x4) >> 2);
  o869[o870 | 3] = o867[o768 | 3] = o868[o870 | 4] = o866[o768 | 4] = ((o863 & 0x800) >> 10) | ((o863 & 0x8) >> 3);
  o869[o870 | 4] = o867[o768 | 4] = o868[o870 | 3] = o866[o768 | 3] = ((o863 & 0x1000) >> 11) | ((o863 & 0x10) >> 4);
  o869[o870 | 5] = o867[o768 | 5] = o868[o870 | 2] = o866[o768 | 2] = ((o863 & 0x2000) >> 12) | ((o863 & 0x20) >> 5);
  o869[o870 | 6] = o867[o768 | 6] = o868[o870 | 1] = o866[o768 | 1] = ((o863 & 0x4000) >> 13) | ((o863 & 0x40) >> 6);
  o869[o870 | 7] = o867[o768 | 7] = o868[o870] = o866[o768] = ((o863 & 0x8000) >> 14) | ((o863 & 0x80) >> 7);
}
o360.prototype.o873 = function () {"use strict";
  if (this.o418) {
    this.o505 = 0;      //Mark frame for ensuring a JIT pass for the next framebuffer output.
    this.o874();
  }
}
o360.prototype.o791 = function () {"use strict";
  //JIT the graphics to v-blank framing:
  this.o505 += this.o504;
  this.o874();
}
o360.prototype.o874 = function () {"use strict";
  //Normal rendering JIT, where we try to do groups of scanlines at once:
  while (this.o504 > 0) {
    this.o806(this.o503);
    if (this.o503 < 143) {
      ++this.o503;
    }
    else {
      this.o503 = 0;
    }
    --this.o504;
  }
}
o360.prototype.o780 = function () {"use strict";
  if (this.o504 < 144) {
    ++this.o504;
  }
  else {
    this.o539 = 0;
    this.o537 = -1;
    if (this.o503 < 143) {
      ++this.o503;
    }
    else {
      this.o503 = 0;
    }
  }
}
o360.prototype.o839 = function () {"use strict";
  this.o873();
  this.o811();
}
//Check for the highest priority IRQ to fire:
o360.prototype.o774 = function () {"use strict";
  var o875 = 0;
  var o876 = 1;
  do {
    //Check to see if an interrupt is enabled AND requested.
    if ((o876 & this.o382) == o876) {
      this.o381 = false;            //Reset the interrupt enabling.
      this.o383 -= o876;  //Reset the interrupt request.
      this.o382 = 0;        //Reset the IRQ assertion.
      //Interrupts have a certain clock cycle length:
      this.o386 = 20;
      //Set the stack pointer to the current program counter value:
      this.o150 = (this.o150 - 1) & 0xFFFF;
      this.o391[this.o150](this, this.o150, this.o149 >> 8);
      this.o150 = (this.o150 - 1) & 0xFFFF;
      this.o391[this.o150](this, this.o150, this.o149 & 0xFF);
      //Set the program counter to the interrupt's address:
      this.o149 = 0x40 | (o875 << 3);
      //Clock the core for mid-instruction updates:
      this.o790();
      return;                  //We only want the highest priority interrupt.
    }
    o876 = 1 << ++o875;
  } while (o875 < 5);
}
/*
  Check for IRQs to be fired while not in HALT:
*/
o360.prototype.o664 = function () {"use strict";
  if (this.o381) {
    this.o382 = this.o384 & this.o383 & 0x1F;
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
o360.prototype.o587 = function () {"use strict";
  //Initialize our variables and start our prediction:
  if (!this.o378) {
    this.o378 = true;
    var o877 = -1;
    var o581 = 0;
    if (this.o418) {
      //If the LCD is enabled, then predict the LCD IRQs enabled:
      if ((this.o384 & 0x1) == 0x1) {
        o877 = ((456 * (((this.o412 == 1) ? 298 : 144) - this.o502)) - this.o490) << this.o387;
      }
      if ((this.o384 & 0x2) == 0x2) {
        if (this.o417) {
          o581 = (this.o784() - this.o490) << this.o387;
          if (o581 <= o877 || o877 == -1) {
            o877 = o581;
          }
        }
        if (this.o416 && (this.o384 & 0x1) == 0) {
          o581 = ((456 * (((this.o412 == 1) ? 298 : 144) - this.o502)) - this.o490) << this.o387;
          if (o581 <= o877 || o877 == -1) {
            o877 = o581;
          }
        }
        if (this.o415) {
          o581 = (((this.o502 >= 143) ? (456 * (154 - this.o502)) : 456) - this.o490) << this.o387;
          if (o581 <= o877 || o877 == -1) {
            o877 = o581;
          }
        }
        if (this.o414 && this.o155[0xFF45] <= 153) {
          o581 = (this.o783() - this.o490) << this.o387;
          if (o581 <= o877 || o877 == -1) {
            o877 = o581;
          }
        }
      }
    }
    if (this.o492 && (this.o384 & 0x4) == 0x4) {
      //CPU timer IRQ prediction:
      o581 = ((0x100 - this.o155[0xFF05]) * this.o493) - this.o491;
      if (o581 <= o877 || o877 == -1) {
        o877 = o581;
      }
    }
    if (this.o494 > 0 && (this.o384 & 0x8) == 0x8) {
      //Serial IRQ prediction:
      if (this.o494 <= o877 || o877 == -1) {
        o877 = this.o494;
      }
    }
  }
  else {
    var o877 = this.o374;
  }
  var o878 = (this.o369 - this.o488) << this.o387;
  if (o877 >= 0) {
    if (o877 <= o878) {
      //Exit out of HALT normally:
      this.o386 = Math.o290(o877, this.o386);
      this.o771();
      this.o378 = false;
      this.o386 = 0;
    }
    else {
      //Still in HALT, clock only up to the clocks specified per iteration:
      this.o386 = Math.o290(o878, this.o386);
      this.o374 = o877 - this.o386;
    }
  }
  else {
    //Still in HALT, clock only up to the clocks specified per iteration:
    //Will stay in HALT forever (Stuck in HALT forever), but the APU and LCD are still clocked, so don't pause:
    this.o386 += o878;
  }
}
//Memory Reading:
o360.prototype.o579 = function (o768) {"use strict";
  //Act as a wrapper for reading the returns from the compiled jumps to memory.
  return this.o390[o768](this, o768);  //This seems to be faster than the usual if/else.
}
o360.prototype.o597 = function (o768) {"use strict";
  //Act as a wrapper for reading the returns from the compiled jumps to memory.
  return this.o392[o768](this, o768);  //This seems to be faster than the usual if/else.
}
o360.prototype.o666 = function () {"use strict";
  //Faster in some browsers, since we are doing less conditionals overall by implementing them in advance.
  for (var index = 0x0000; index <= 0xFFFF; index++) {
    if (index < 0x4000) {
      this.o390[index] = this.o879;
    }
    else if (index < 0x8000) {
      this.o390[index] = this.o880;
    }
    else if (index < 0x9800) {
      this.o390[index] = (this.o400) ? this.o881 : this.o882;
    }
    else if (index < 0xA000) {
      this.o390[index] = (this.o400) ? this.o883 : this.o884;
    }
    else if (index >= 0xA000 && index < 0xC000) {
      if ((this.o521 == 1 / 16 && index < 0xA200) || this.o521 >= 1) {
        if (this.o511) {
          this.o390[index] = this.o885;
        }
        else if (!this.o509) {
          this.o390[index] = this.o886;
        }
        else {
          //MBC3 RTC + RAM:
          this.o390[index] = this.o887;
        }
      }
      else {
        this.o390[index] = this.o888;
      }
    }
    else if (index >= 0xC000 && index < 0xE000) {
      if (!this.o400 || index < 0xD000) {
        this.o390[index] = this.o879;
      }
      else {
        this.o390[index] = this.o889;
      }
    }
    else if (index >= 0xE000 && index < 0xFE00) {
      if (!this.o400 || index < 0xF000) {
        this.o390[index] = this.o890;
      }
      else {
        this.o390[index] = this.o891;
      }
    }
    else if (index < 0xFEA0) {
      this.o390[index] = this.o892;
    }
    else if (this.o400 && index >= 0xFEA0 && index < 0xFF00) {
      this.o390[index] = this.o879;
    }
    else if (index >= 0xFF00) {
      switch (index) {
        case 0xFF00:
          //JOYPAD:
          this.o392[0] = this.o390[0xFF00] = function (o421, o768) {"use strict";
            return 0xC0 | o421.o155[0xFF00];  //Top nibble returns as set.
          }
          break;
        case 0xFF01:
          //SB
          this.o392[0x01] = this.o390[0xFF01] = function (o421, o768) {"use strict";
            return (o421.o155[0xFF02] < 0x80) ? o421.o155[0xFF01] : 0xFF;
          }
          break;
        case 0xFF02:
          //SC
          if (this.o400) {
            this.o392[0x02] = this.o390[0xFF02] = function (o421, o768) {"use strict";
              return ((o421.o494 <= 0) ? 0x7C : 0xFC) | o421.o155[0xFF02];
            }
          }
          else {
            this.o392[0x02] = this.o390[0xFF02] = function (o421, o768) {"use strict";
              return ((o421.o494 <= 0) ? 0x7E : 0xFE) | o421.o155[0xFF02];
            }
          }
          break;
        case 0xFF04:
          //DIV
          this.o392[0x04] = this.o390[0xFF04] = function (o421, o768) {"use strict";
            o421.o155[0xFF04] = (o421.o155[0xFF04] + (o421.o489 >> 8)) & 0xFF;
            o421.o489 &= 0xFF;
            return o421.o155[0xFF04];

          }
          break;
        case 0xFF07:
          this.o392[0x07] = this.o390[0xFF07] = function (o421, o768) {"use strict";
            return 0xF8 | o421.o155[0xFF07];
          }
          break;
        case 0xFF0F:
          //IF
          this.o392[0x0F] = this.o390[0xFF0F] = function (o421, o768) {"use strict";
            return 0xE0 | o421.o383;
          }
          break;
        case 0xFF10:
          this.o392[0x10] = this.o390[0xFF10] = function (o421, o768) {"use strict";
            return 0x80 | o421.o155[0xFF10];
          }
          break;
        case 0xFF11:
          this.o392[0x11] = this.o390[0xFF11] = function (o421, o768) {"use strict";
            return 0x3F | o421.o155[0xFF11];
          }
          break;
        case 0xFF13:
          this.o392[0x13] = this.o390[0xFF13] = this.o888;
          break;
        case 0xFF14:
          this.o392[0x14] = this.o390[0xFF14] = function (o421, o768) {"use strict";
            return 0xBF | o421.o155[0xFF14];
          }
          break;
        case 0xFF16:
          this.o392[0x16] = this.o390[0xFF16] = function (o421, o768) {"use strict";
            return 0x3F | o421.o155[0xFF16];
          }
          break;
        case 0xFF18:
          this.o392[0x18] = this.o390[0xFF18] = this.o888;
          break;
        case 0xFF19:
          this.o392[0x19] = this.o390[0xFF19] = function (o421, o768) {"use strict";
            return 0xBF | o421.o155[0xFF19];
          }
          break;
        case 0xFF1A:
          this.o392[0x1A] = this.o390[0xFF1A] = function (o421, o768) {"use strict";
            return 0x7F | o421.o155[0xFF1A];
          }
          break;
        case 0xFF1B:
          this.o392[0x1B] = this.o390[0xFF1B] = this.o888;
          break;
        case 0xFF1C:
          this.o392[0x1C] = this.o390[0xFF1C] = function (o421, o768) {"use strict";
            return 0x9F | o421.o155[0xFF1C];
          }
          break;
        case 0xFF1D:
          this.o392[0x1D] = this.o390[0xFF1D] = function (o421, o768) {"use strict";
            return 0xFF;
          }
          break;
        case 0xFF1E:
          this.o392[0x1E] = this.o390[0xFF1E] = function (o421, o768) {"use strict";
            return 0xBF | o421.o155[0xFF1E];
          }
          break;
        case 0xFF1F:
        case 0xFF20:
          this.o392[index & 0xFF] = this.o390[index] = this.o888;
          break;
        case 0xFF23:
          this.o392[0x23] = this.o390[0xFF23] = function (o421, o768) {"use strict";
            return 0xBF | o421.o155[0xFF23];
          }
          break;
        case 0xFF26:
          this.o392[0x26] = this.o390[0xFF26] = function (o421, o768) {"use strict";
            o421.o746();
            return 0x70 | o421.o155[0xFF26];
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
          this.o392[index & 0xFF] = this.o390[index] = this.o888;
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
          this.o390[index] = function (o421, o768) {"use strict";
            return (o421.o629) ? o421.o155[0xFF00 | (o421.o659 >> 1)] : o421.o155[o768];
          }
          this.o392[index & 0xFF] = function (o421, o768) {"use strict";
            return (o421.o629) ? o421.o155[0xFF00 | (o421.o659 >> 1)] : o421.o155[0xFF00 | o768];
          }
          break;
        case 0xFF41:
          this.o392[0x41] = this.o390[0xFF41] = function (o421, o768) {"use strict";
            return 0x80 | o421.o155[0xFF41] | o421.o412;
          }
          break;
        case 0xFF42:
          this.o392[0x42] = this.o390[0xFF42] = function (o421, o768) {"use strict";
            return o421.o524;
          }
          break;
        case 0xFF43:
          this.o392[0x43] = this.o390[0xFF43] = function (o421, o768) {"use strict";
            return o421.o523;
          }
          break;
        case 0xFF44:
          this.o392[0x44] = this.o390[0xFF44] = function (o421, o768) {"use strict";
            return ((o421.o418) ? o421.o155[0xFF44] : 0);
          }
          break;
        case 0xFF4A:
          //WY
          this.o392[0x4A] = this.o390[0xFF4A] = function (o421, o768) {"use strict";
            return o421.o533;
          }
          break;
        case 0xFF4F:
          this.o392[0x4F] = this.o390[0xFF4F] = function (o421, o768) {"use strict";
            return o421.o522;
          }
          break;
        case 0xFF55:
          if (this.o400) {
            this.o392[0x55] = this.o390[0xFF55] = function (o421, o768) {"use strict";
              if (!o421.o418 && o421.o385) {  //Undocumented behavior alert: HDMA becomes GDMA when LCD is off (Worms Armageddon Fix).
                //DMA
                o421.o795((o421.o155[0xFF55] & 0x7F) + 1);
                o421.o155[0xFF55] = 0xFF;  //Transfer completed.
                o421.o385 = false;
              }
              return o421.o155[0xFF55];
            }
          }
          else {
            this.o390[0xFF55] = this.o879;
            this.o392[0x55] = this.o893;
          }
          break;
        case 0xFF56:
          if (this.o400) {
            this.o392[0x56] = this.o390[0xFF56] = function (o421, o768) {"use strict";
              //Return IR "not connected" status:
              return 0x3C | ((o421.o155[0xFF56] >= 0xC0) ? (0x2 | (o421.o155[0xFF56] & 0xC1)) : (o421.o155[0xFF56] & 0xC3));
            }
          }
          else {
            this.o390[0xFF56] = this.o879;
            this.o392[0x56] = this.o893;
          }
          break;
        case 0xFF6C:
          if (this.o400) {
            this.o392[0x6C] = this.o390[0xFF6C] = function (o421, o768) {"use strict";
              return 0xFE | o421.o155[0xFF6C];
            }
          }
          else {
            this.o392[0x6C] = this.o390[0xFF6C] = this.o888;
          }
          break;
        case 0xFF70:
          if (this.o400) {
            //SVBK
            this.o392[0x70] = this.o390[0xFF70] = function (o421, o768) {"use strict";
              return 0x40 | o421.o155[0xFF70];
            }
          }
          else {
            this.o392[0x70] = this.o390[0xFF70] = this.o888;
          }
          break;
        case 0xFF75:
          this.o392[0x75] = this.o390[0xFF75] = function (o421, o768) {"use strict";
            return 0x8F | o421.o155[0xFF75];
          }
          break;
        case 0xFF76:
        case 0xFF77:
          this.o392[index & 0xFF] = this.o390[index] = function (o421, o768) {"use strict";
            return 0;
          }
          break;
        case 0xFFFF:
          //IE
          this.o392[0xFF] = this.o390[0xFFFF] = function (o421, o768) {"use strict";
            return o421.o384;
          }
          break;
        default:
          this.o390[index] = this.o879;
          this.o392[index & 0xFF] = this.o893;
      }
    }
    else {
      this.o390[index] = this.o888;
    }
  }
}
o360.prototype.o879 = function (o421, o768) {"use strict";
  return o421.o155[o768];
}
o360.prototype.o893 = function (o421, o768) {"use strict";
  return o421.o155[0xFF00 | o768];
}
o360.prototype.o880 = function (o421, o768) {"use strict";
  return o421.o153[o421.o406 + o768];
}
o360.prototype.o886 = function (o421, o768) {"use strict";
  //Switchable RAM
  if (o421.o397 || o683[10]) {
    return o421.o157[o768 + o421.o399];
  }
  //cout("Reading from disabled RAM.", 1);
  return 0xFF;
}
o360.prototype.o885 = function (o421, o768) {"use strict";
  //Switchable RAM
  if (o421.o397 || o683[10]) {
    switch (o768) {
      case 0xA000:
      case 0xA060:
      case 0xA070:
        return 0;
      case 0xA080:
        //TODO: Gyro Control Register
        return 0;
      case 0xA050:
        //Y High Byte
        return o421.o438;
      case 0xA040:
        //Y Low Byte
        return o421.o439;
      case 0xA030:
        //X High Byte
        return o421.o436;
      case 0xA020:
        //X Low Byte:
        return o421.o437;
      default:
        return o421.o157[o768 + o421.o399];
    }
  }
  //cout("Reading from disabled RAM.", 1);
  return 0xFF;
}
o360.prototype.o887 = function (o421, o768) {"use strict";
  //Switchable RAM
  if (o421.o397 || o683[10]) {
    switch (o421.o398) {
      case 0x00:
      case 0x01:
      case 0x02:
      case 0x03:
        return o421.o157[o768 + o421.o399];
        break;
      case 0x08:
        return o421.o425;
        break;
      case 0x09:
        return o421.o426;
        break;
      case 0x0A:
        return o421.o427;
        break;
      case 0x0B:
        return o421.o428;
        break;
      case 0x0C:
        return (((o421.o434) ? 0x80 : 0) + ((o421.o435) ? 0x40 : 0)) + o421.o429;
    }
  }
  //cout("Reading from invalid or disabled RAM.", 1);
  return 0xFF;
}
o360.prototype.o889 = function (o421, o768) {"use strict";
  return o421.o395[o768 + o421.o402];
}
o360.prototype.o892 = function (o421, o768) {"use strict";
  return (o421.o412 > 1) ?  0xFF : o421.o155[o768];
}
o360.prototype.o891 = function (o421, o768) {"use strict";
  return o421.o395[o768 + o421.o403];
}
o360.prototype.o890 = function (o421, o768) {"use strict";
  return o421.o155[o768 - 0x2000];
}
o360.prototype.o888 = function (o421, o768) {"use strict";
  return 0xFF;
}
o360.prototype.o881 = function (o421, o768) {"use strict";
  //CPU Side Reading The VRAM (Optimized for GameBoy Color)
  return (o421.o412 > 2) ? 0xFF : ((o421.o522 == 0) ? o421.o155[o768] : o421.o394[o768 & 0x1FFF]);
}
o360.prototype.o882 = function (o421, o768) {"use strict";
  //CPU Side Reading The VRAM (Optimized for classic GameBoy)
  return (o421.o412 > 2) ? 0xFF : o421.o155[o768];
}
o360.prototype.o883 = function (o421, o768) {"use strict";
  //CPU Side Reading the Character Data Map:
  return (o421.o412 > 2) ? 0xFF : o421.o542[o768 & 0x7FF];
}
o360.prototype.o884 = function (o421, o768) {"use strict";
  //CPU Side Reading the Character Data Map:
  return (o421.o412 > 2) ? 0xFF : o421.o540[o768 & 0x7FF];
}
o360.prototype.o894 = function () {"use strict";
  //Read the cartridge ROM data from RAM memory:
  switch (this.o405) {
    case 0x00:
    case 0x20:
    case 0x40:
    case 0x60:
      //Bank calls for 0x00, 0x20, 0x40, and 0x60 are really for 0x01, 0x21, 0x41, and 0x61.
      this.o406 = (this.o405 % this.o663) << 14;
      break;
    default:
      this.o406 = ((this.o405 % this.o663) - 1) << 14;
  }
}
o360.prototype.o895 = function () {"use strict";
  //Read the cartridge ROM data from RAM memory:
  //Only map bank 0 to bank 1 here (MBC2 is like MBC1, but can only do 16 banks, so only the bank 0 quirk appears for MBC2):
  this.o406 = Math.o290((this.o405 % this.o663) - 1, 0) << 14;
}
o360.prototype.o896 = function () {"use strict";
  //Read the cartridge ROM data from RAM memory:
  this.o406 = ((this.o405 % this.o663) - 1) << 14;
}
//Memory Writing:
o360.prototype.o580 = function (o768, o70) {"use strict";
  //Act as a wrapper for writing by compiled jumps to specific memory writing functions.
  this.o391[o768](this, o768, o70);
}
//0xFFXX fast path:
o360.prototype.o594 = function (o768, o70) {"use strict";
  //Act as a wrapper for writing by compiled jumps to specific memory writing functions.
  this.o393[o768](this, o768, o70);
}
o360.prototype.o667 = function () {"use strict";
  //Faster in some browsers, since we are doing less conditionals overall by implementing them in advance.
  for (var index = 0x0000; index <= 0xFFFF; index++) {
    if (index < 0x8000) {
      if (this.o507) {
        if (index < 0x2000) {
          this.o391[index] = this.o897;
        }
        else if (index < 0x4000) {
          this.o391[index] = this.o898;
        }
        else if (index < 0x6000) {
          this.o391[index] = this.o899;
        }
        else {
          this.o391[index] = this.o900;
        }
      }
      else if (this.o508) {
        if (index < 0x1000) {
          this.o391[index] = this.o897;
        }
        else if (index >= 0x2100 && index < 0x2200) {
          this.o391[index] = this.o901;
        }
        else {
          this.o391[index] = this.o902;
        }
      }
      else if (this.o509) {
        if (index < 0x2000) {
          this.o391[index] = this.o897;
        }
        else if (index < 0x4000) {
          this.o391[index] = this.o903;
        }
        else if (index < 0x6000) {
          this.o391[index] = this.o904;
        }
        else {
          this.o391[index] = this.o905;
        }
      }
      else if (this.o510 || this.o514 || this.o511) {
        if (index < 0x2000) {
          this.o391[index] = this.o897;
        }
        else if (index < 0x3000) {
          this.o391[index] = this.o906;
        }
        else if (index < 0x4000) {
          this.o391[index] = this.o907;
        }
        else if (index < 0x6000) {
          this.o391[index] = (this.o514) ? this.o908 : this.o909;
        }
        else {
          this.o391[index] = this.o902;
        }
      }
      else if (this.o517) {
        if (index < 0x2000) {
          this.o391[index] = this.o897;
        }
        else if (index < 0x4000) {
          this.o391[index] = this.o903;
        }
        else if (index < 0x6000) {
          this.o391[index] = this.o910;
        }
        else {
          this.o391[index] = this.o902;
        }
      }
      else {
        this.o391[index] = this.o902;
      }
    }
    else if (index < 0x9000) {
      this.o391[index] = (this.o400) ? this.o911 : this.o912;
    }
    else if (index < 0x9800) {
      this.o391[index] = (this.o400) ? this.o911 : this.o913;
    }
    else if (index < 0xA000) {
      this.o391[index] = (this.o400) ? this.o914 : this.o915;
    }
    else if (index < 0xC000) {
      if ((this.o521 == 1 / 16 && index < 0xA200) || this.o521 >= 1) {
        if (!this.o509) {
          this.o391[index] = this.o916;
        }
        else {
          //MBC3 RTC + RAM:
          this.o391[index] = this.o917;
        }
      }
      else {
        this.o391[index] = this.o902;
      }
    }
    else if (index < 0xE000) {
      if (this.o400 && index >= 0xD000) {
        this.o391[index] = this.o918;
      }
      else {
        this.o391[index] = this.o919;
      }
    }
    else if (index < 0xFE00) {
      if (this.o400 && index >= 0xF000) {
        this.o391[index] = this.o920;
      }
      else {
        this.o391[index] = this.o921;
      }
    }
    else if (index <= 0xFEA0) {
      this.o391[index] = this.o922;
    }
    else if (index < 0xFF00) {
      if (this.o400) {                      //Only GBC has access to this RAM.
        this.o391[index] = this.o919;
      }
      else {
        this.o391[index] = this.o902;
      }
    }
    else {
      //Start the I/O initialization by filling in the slots as normal memory:
      this.o391[index] = this.o919;
      this.o393[index & 0xFF] = this.o923;
    }
  }
  this.o924();        //Compile the I/O write functions separately...
}
o360.prototype.o897 = function (o421, o768, o70) {"use strict";
  //MBC RAM Bank Enable/Disable:
  o421.o397 = ((o70 & 0x0F) == 0x0A);  //If lower nibble is 0x0A, then enable, otherwise disable.
}
o360.prototype.o898 = function (o421, o768, o70) {"use strict";
  //MBC1 ROM bank switching:
  o421.o405 = (o421.o405 & 0x60) | (o70 & 0x1F);
  o421.o894();
}
o360.prototype.o899 = function (o421, o768, o70) {"use strict";
  //MBC1 RAM bank switching
  if (o421.o396) {
    //4/32 Mode
    o421.o398 = o70 & 0x03;
    o421.o399 = (o421.o398 << 13) - 0xA000;
  }
  else {
    //16/8 Mode
    o421.o405 = ((o70 & 0x03) << 5) | (o421.o405 & 0x1F);
    o421.o894();
  }
}
o360.prototype.o900 = function (o421, o768, o70) {"use strict";
  //MBC1 mode setting:
  o421.o396 = ((o70 & 0x1) == 0x1);
  if (o421.o396) {
    o421.o405 &= 0x1F;
    o421.o894();
  }
  else {
    o421.o398 = 0;
    o421.o399 = -0xA000;
  }
}
o360.prototype.o901 = function (o421, o768, o70) {"use strict";
  //MBC2 ROM bank switching:
  o421.o405 = o70 & 0x0F;
  o421.o895();
}
o360.prototype.o903 = function (o421, o768, o70) {"use strict";
  //MBC3 ROM bank switching:
  o421.o405 = o70 & 0x7F;
  o421.o895();
}
o360.prototype.o904 = function (o421, o768, o70) {"use strict";
  o421.o398 = o70;
  if (o70 < 4) {
    //MBC3 RAM bank switching
    o421.o399 = (o421.o398 << 13) - 0xA000;
  }
}
o360.prototype.o905 = function (o421, o768, o70) {"use strict";
  if (o70 == 0) {
    o421.o424 = false;
  }
  else if (!o421.o424) {
    //Copy over the current RTC time for reading.
    o421.o424 = true;
    o421.o425 = o421.o430 | 0;
    o421.o426 = o421.o431;
    o421.o427 = o421.o432;
    o421.o428 = (o421.o433 & 0xFF);
    o421.o429 = o421.o433 >> 8;
  }
}
o360.prototype.o906 = function (o421, o768, o70) {"use strict";
  //MBC5 ROM bank switching:
  o421.o405 = (o421.o405 & 0x100) | o70;
  o421.o896();
}
o360.prototype.o907 = function (o421, o768, o70) {"use strict";
  //MBC5 ROM bank switching (by least significant bit):
  o421.o405  = ((o70 & 0x01) << 8) | (o421.o405 & 0xFF);
  o421.o896();
}
o360.prototype.o909 = function (o421, o768, o70) {"use strict";
  //MBC5 RAM bank switching
  o421.o398 = o70 & 0xF;
  o421.o399 = (o421.o398 << 13) - 0xA000;
}
o360.prototype.o908 = function (o421, o768, o70) {"use strict";
  //MBC5 RAM bank switching
  //Like MBC5, but bit 3 of the lower nibble is used for rumbling and bit 2 is ignored.
  o421.o398 = o70 & 0x03;
  o421.o399 = (o421.o398 << 13) - 0xA000;
}
o360.prototype.o910 = function (o421, o768, o70) {"use strict";
  //HuC3 RAM bank switching
  o421.o398 = o70 & 0x03;
  o421.o399 = (o421.o398 << 13) - 0xA000;
}
o360.prototype.o902 = function (o421, o768, o70) {"use strict";
  //We might have encountered illegal RAM writing or such, so just do nothing...
}
o360.prototype.o919 = function (o421, o768, o70) {"use strict";
  o421.o155[o768] = o70;
}
o360.prototype.o923 = function (o421, o768, o70) {"use strict";
  o421.o155[0xFF00 | o768] = o70;
}
o360.prototype.o916 = function (o421, o768, o70) {"use strict";
  if (o421.o397 || o683[10]) {
    o421.o157[o768 + o421.o399] = o70;
  }
}
o360.prototype.o917 = function (o421, o768, o70) {"use strict";
  if (o421.o397 || o683[10]) {
    switch (o421.o398) {
      case 0x00:
      case 0x01:
      case 0x02:
      case 0x03:
        o421.o157[o768 + o421.o399] = o70;
        break;
      case 0x08:
        if (o70 < 60) {
          o421.o430 = o70;
        }
        else {
          o113("(Bank #" + o421.o398 + ") RTC write out of range: " + o70, 1);
        }
        break;
      case 0x09:
        if (o70 < 60) {
          o421.o431 = o70;
        }
        else {
          o113("(Bank #" + o421.o398 + ") RTC write out of range: " + o70, 1);
        }
        break;
      case 0x0A:
        if (o70 < 24) {
          o421.o432 = o70;
        }
        else {
          o113("(Bank #" + o421.o398 + ") RTC write out of range: " + o70, 1);
        }
        break;
      case 0x0B:
        o421.o433 = (o70 & 0xFF) | (o421.o433 & 0x100);
        break;
      case 0x0C:
        o421.o434 = (o70 > 0x7F);
        o421.o925 = (o70 & 0x40) == 0x40;
        o421.o433 = ((o70 & 0x1) << 8) | (o421.o433 & 0xFF);
        break;
      default:
        o113("Invalid MBC3 bank address selected: " + o421.o398, 0);
    }
  }
}
o360.prototype.o918 = function (o421, o768, o70) {"use strict";
  o421.o395[o768 + o421.o402] = o70;
}
o360.prototype.o922 = function (o421, o768, o70) {"use strict";
  if (o421.o412 < 2) {    //OAM RAM cannot be written to in mode 2 & 3
    if (o421.o155[o768] != o70) {
      o421.o873();
      o421.o155[o768] = o70;
    }
  }
}
o360.prototype.o920 = function (o421, o768, o70) {"use strict";
  o421.o395[o768 + o421.o403] = o70;
}
o360.prototype.o921 = function (o421, o768, o70) {"use strict";
  o421.o155[o768 - 0x2000] = o70;
}
o360.prototype.o912 = function (o421, o768, o70) {"use strict";
  if (o421.o412 < 3) {  //VRAM cannot be written to during mode 3
    if (o421.o155[o768] != o70) {
      //JIT the graphics render queue:
      o421.o873();
      o421.o155[o768] = o70;
      o421.o828(o768);
    }
  }
}
o360.prototype.o913 = function (o421, o768, o70) {"use strict";
  if (o421.o412 < 3) {  //VRAM cannot be written to during mode 3
    if (o421.o155[o768] != o70) {
      //JIT the graphics render queue:
      o421.o873();
      o421.o155[o768] = o70;
      o421.o829(o768);
    }
  }
}
o360.prototype.o911 = function (o421, o768, o70) {"use strict";
  if (o421.o412 < 3) {  //VRAM cannot be written to during mode 3
    if (o421.o522 == 0) {
      if (o421.o155[o768] != o70) {
        //JIT the graphics render queue:
        o421.o873();
        o421.o155[o768] = o70;
        o421.o865(o768);
      }
    }
    else {
      o768 &= 0x1FFF;
      if (o421.o394[o768] != o70) {
        //JIT the graphics render queue:
        o421.o873();
        o421.o394[o768] = o70;
        o421.o872(o768);
      }
    }
  }
}
o360.prototype.o915 = function (o421, o768, o70) {"use strict";
  if (o421.o412 < 3) {  //VRAM cannot be written to during mode 3
    o768 &= 0x7FF;
    if (o421.o540[o768] != o70) {
      //JIT the graphics render queue:
      o421.o873();
      o421.o540[o768] = o70;
    }
  }
}
o360.prototype.o914 = function (o421, o768, o70) {"use strict";
  if (o421.o412 < 3) {  //VRAM cannot be written to during mode 3
    o768 &= 0x7FF;
    if (o421.o542[o768] != o70) {
      //JIT the graphics render queue:
      o421.o873();
      o421.o542[o768] = o70;
    }
  }
}
o360.prototype.o795 = function (o926) {"use strict";
  if (!this.o378) {
    //Clock the CPU for the DMA transfer (CPU is halted during the transfer):
    this.o386 += 4 | ((o926 << 5) << this.o387);
  }
  //Source address of the transfer:
  var source = (this.o155[0xFF51] << 8) | this.o155[0xFF52];
  //Destination address in the VRAM memory range:
  var o126 = (this.o155[0xFF53] << 8) | this.o155[0xFF54];
  //Creating some references:
  var o390 = this.o390;
  //JIT the graphics render queue:
  this.o873();
  var o155 = this.o155;
  //Determining which bank we're working on so we can optimize:
  if (this.o522 == 0) {
    //DMA transfer for VRAM bank 0:
    do {
      if (o126 < 0x1800) {
        o155[0x8000 | o126] = o390[source](this, source++);
        o155[0x8001 | o126] = o390[source](this, source++);
        o155[0x8002 | o126] = o390[source](this, source++);
        o155[0x8003 | o126] = o390[source](this, source++);
        o155[0x8004 | o126] = o390[source](this, source++);
        o155[0x8005 | o126] = o390[source](this, source++);
        o155[0x8006 | o126] = o390[source](this, source++);
        o155[0x8007 | o126] = o390[source](this, source++);
        o155[0x8008 | o126] = o390[source](this, source++);
        o155[0x8009 | o126] = o390[source](this, source++);
        o155[0x800A | o126] = o390[source](this, source++);
        o155[0x800B | o126] = o390[source](this, source++);
        o155[0x800C | o126] = o390[source](this, source++);
        o155[0x800D | o126] = o390[source](this, source++);
        o155[0x800E | o126] = o390[source](this, source++);
        o155[0x800F | o126] = o390[source](this, source++);
        this.o830(o126);
        o126 += 0x10;
      }
      else {
        o126 &= 0x7F0;
        this.o540[o126++] = o390[source](this, source++);
        this.o540[o126++] = o390[source](this, source++);
        this.o540[o126++] = o390[source](this, source++);
        this.o540[o126++] = o390[source](this, source++);
        this.o540[o126++] = o390[source](this, source++);
        this.o540[o126++] = o390[source](this, source++);
        this.o540[o126++] = o390[source](this, source++);
        this.o540[o126++] = o390[source](this, source++);
        this.o540[o126++] = o390[source](this, source++);
        this.o540[o126++] = o390[source](this, source++);
        this.o540[o126++] = o390[source](this, source++);
        this.o540[o126++] = o390[source](this, source++);
        this.o540[o126++] = o390[source](this, source++);
        this.o540[o126++] = o390[source](this, source++);
        this.o540[o126++] = o390[source](this, source++);
        this.o540[o126++] = o390[source](this, source++);
        o126 = (o126 + 0x1800) & 0x1FF0;
      }
      source &= 0xFFF0;
      --o926;
    } while (o926 > 0);
  }
  else {
    var o394 = this.o394;
    //DMA transfer for VRAM bank 1:
    do {
      if (o126 < 0x1800) {
        o394[o126] = o390[source](this, source++);
        o394[o126 | 0x1] = o390[source](this, source++);
        o394[o126 | 0x2] = o390[source](this, source++);
        o394[o126 | 0x3] = o390[source](this, source++);
        o394[o126 | 0x4] = o390[source](this, source++);
        o394[o126 | 0x5] = o390[source](this, source++);
        o394[o126 | 0x6] = o390[source](this, source++);
        o394[o126 | 0x7] = o390[source](this, source++);
        o394[o126 | 0x8] = o390[source](this, source++);
        o394[o126 | 0x9] = o390[source](this, source++);
        o394[o126 | 0xA] = o390[source](this, source++);
        o394[o126 | 0xB] = o390[source](this, source++);
        o394[o126 | 0xC] = o390[source](this, source++);
        o394[o126 | 0xD] = o390[source](this, source++);
        o394[o126 | 0xE] = o390[source](this, source++);
        o394[o126 | 0xF] = o390[source](this, source++);
        this.o831(o126);
        o126 += 0x10;
      }
      else {
        o126 &= 0x7F0;
        this.o541[o126++] = o390[source](this, source++);
        this.o541[o126++] = o390[source](this, source++);
        this.o541[o126++] = o390[source](this, source++);
        this.o541[o126++] = o390[source](this, source++);
        this.o541[o126++] = o390[source](this, source++);
        this.o541[o126++] = o390[source](this, source++);
        this.o541[o126++] = o390[source](this, source++);
        this.o541[o126++] = o390[source](this, source++);
        this.o541[o126++] = o390[source](this, source++);
        this.o541[o126++] = o390[source](this, source++);
        this.o541[o126++] = o390[source](this, source++);
        this.o541[o126++] = o390[source](this, source++);
        this.o541[o126++] = o390[source](this, source++);
        this.o541[o126++] = o390[source](this, source++);
        this.o541[o126++] = o390[source](this, source++);
        this.o541[o126++] = o390[source](this, source++);
        o126 = (o126 + 0x1800) & 0x1FF0;
      }
      source &= 0xFFF0;
      --o926;
    } while (o926 > 0);
  }
  //Update the HDMA registers to their next addresses:
  o155[0xFF51] = source >> 8;
  o155[0xFF52] = source & 0xF0;
  o155[0xFF53] = o126 >> 8;
  o155[0xFF54] = o126 & 0xF0;
}
o360.prototype.o924 = function () {"use strict";
  //I/O Registers (GB + GBC):
  //JoyPad
  this.o393[0] = this.o391[0xFF00] = function (o421, o768, o70) {"use strict";
    o421.o155[0xFF00] = (o70 & 0x30) | ((((o70 & 0x20) == 0) ? (o421.o388 >> 4) : 0xF) & (((o70 & 0x10) == 0) ? (o421.o388 & 0xF) : 0xF));
  }
  //SB (Serial Transfer Data)
  this.o393[0x1] = this.o391[0xFF01] = function (o421, o768, o70) {"use strict";
    if (o421.o155[0xFF02] < 0x80) {  //Cannot write while a serial transfer is active.
      o421.o155[0xFF01] = o70;
    }
  }
  //DIV
  this.o393[0x4] = this.o391[0xFF04] = function (o421, o768, o70) {"use strict";
    o421.o489 &= 0xFF;  //Update DIV for realignment.
    o421.o155[0xFF04] = 0;
  }
  //TIMA
  this.o393[0x5] = this.o391[0xFF05] = function (o421, o768, o70) {"use strict";
    o421.o155[0xFF05] = o70;
  }
  //TMA
  this.o393[0x6] = this.o391[0xFF06] = function (o421, o768, o70) {"use strict";
    o421.o155[0xFF06] = o70;
  }
  //TAC
  this.o393[0x7] = this.o391[0xFF07] = function (o421, o768, o70) {"use strict";
    o421.o155[0xFF07] = o70 & 0x07;
    o421.o492 = (o70 & 0x04) == 0x04;
    o421.o493 = Math.o54(4, ((o70 & 0x3) != 0) ? (o70 & 0x3) : 4) << 2;  //TODO: Find a way to not make a conditional in here...
  }
  //IF (Interrupt Request)
  this.o393[0xF] = this.o391[0xFF0F] = function (o421, o768, o70) {"use strict";
    o421.o383 = o70;
    o421.o664();
  }
  this.o393[0x10] = this.o391[0xFF10] = function (o421, o768, o70) {"use strict";
    if (o421.o450) {
      o421.o746();
      if (o421.o619 && (o70 & 0x08) == 0) {
        if (o421.o617 != o421.o618) {
          o421.o613 = true;
        }
      }
      o421.o616 = (o70 & 0x70) >> 4;
      o421.o618 = o70 & 0x07;
      o421.o619 = ((o70 & 0x08) == 0x08);
      o421.o155[0xFF10] = o70;
      o421.o750();
    }
  }
  this.o393[0x11] = this.o391[0xFF11] = function (o421, o768, o70) {"use strict";
    if (o421.o450 || !o421.o400) {
      if (o421.o450) {
        o421.o746();
      }
      else {
        o70 &= 0x3F;
      }
      o421.o645 = o421.o443[o70 >> 6];
      o421.o606 = 0x40 - (o70 & 0x3F);
      o421.o155[0xFF11] = o70 & 0xC0;
      o421.o750();
    }
  }
  this.o393[0x12] = this.o391[0xFF12] = function (o421, o768, o70) {"use strict";
    if (o421.o450) {
      o421.o746();
      if (o421.o648 && o421.o609 == 0) {
        //Zombie Volume PAPU Bug:
        if (((o421.o155[0xFF12] ^ o70) & 0x8) == 0x8) {
          if ((o421.o155[0xFF12] & 0x8) == 0) {
            if ((o421.o155[0xFF12] & 0x7) == 0x7) {
              o421.o607 += 2;
            }
            else {
              ++o421.o607;
            }
          }
          o421.o607 = (16 - o421.o607) & 0xF;
        }
        else if ((o421.o155[0xFF12] & 0xF) == 0x8) {
          o421.o607 = (1 + o421.o607) & 0xF;
        }
        o421.o727();
      }
      o421.o608 = ((o70 & 0x08) == 0x08);
      o421.o155[0xFF12] = o70;
      o421.o760();
    }
  }
  this.o393[0x13] = this.o391[0xFF13] = function (o421, o768, o70) {"use strict";
    if (o421.o450) {
      o421.o746();
      o421.o612 = (o421.o612 & 0x700) | o70;
      o421.o604 = (0x800 - o421.o612) << 2;
      o421.o155[0xFF13] = o70;
    }
  }
  this.o393[0x14] = this.o391[0xFF14] = function (o421, o768, o70) {"use strict";
    if (o421.o450) {
      o421.o746();
      o421.o611 = ((o70 & 0x40) == 0x0);
      o421.o612 = ((o70 & 0x7) << 8) | (o421.o612 & 0xFF);
      o421.o604 = (0x800 - o421.o612) << 2;
      if (o70 > 0x7F) {
        //Reload 0xFF10:
        o421.o615 = o421.o616;
        o421.o617 = o421.o618;
        //Reload 0xFF12:
        var o927 = o421.o155[0xFF12];
        o421.o607 = o927 >> 4;
        o421.o727();
        o421.o610 = (o927 & 0x7) - 1;
        if (o421.o606 == 0) {
          o421.o606 = 0x40;
        }
        if (o421.o616 > 0 || o421.o618 > 0) {
          o421.o155[0xFF26] |= 0x1;
        }
        else {
          o421.o155[0xFF26] &= 0xFE;
        }
        if ((o70 & 0x40) == 0x40) {
          o421.o155[0xFF26] |= 0x1;
        }
        o421.o614 = o421.o612;
        //Reset frequency overflow check + frequency sweep type check:
        o421.o613 = false;
        //Supposed to run immediately:
        o421.o754();
      }
      o421.o750();
      o421.o155[0xFF14] = o70 & 0x40;
    }
  }
  this.o393[0x16] = this.o391[0xFF16] = function (o421, o768, o70) {"use strict";
    if (o421.o450 || !o421.o400) {
      if (o421.o450) {
        o421.o746();
      }
      else {
        o70 &= 0x3F;
      }
      o421.o647 = o421.o443[o70 >> 6];
      o421.o622 = 0x40 - (o70 & 0x3F);
      o421.o155[0xFF16] = o70 & 0xC0;
      o421.o751();
    }
  }
  this.o393[0x17] = this.o391[0xFF17] = function (o421, o768, o70) {"use strict";
    if (o421.o450) {
      o421.o746();
      if (o421.o649 && o421.o625 == 0) {
        //Zombie Volume PAPU Bug:
        if (((o421.o155[0xFF17] ^ o70) & 0x8) == 0x8) {
          if ((o421.o155[0xFF17] & 0x8) == 0) {
            if ((o421.o155[0xFF17] & 0x7) == 0x7) {
              o421.o623 += 2;
            }
            else {
              ++o421.o623;
            }
          }
          o421.o623 = (16 - o421.o623) & 0xF;
        }
        else if ((o421.o155[0xFF17] & 0xF) == 0x8) {
          o421.o623 = (1 + o421.o623) & 0xF;
        }
        o421.o728();
      }
      o421.o624 = ((o70 & 0x08) == 0x08);
      o421.o155[0xFF17] = o70;
      o421.o763();
    }
  }
  this.o393[0x18] = this.o391[0xFF18] = function (o421, o768, o70) {"use strict";
    if (o421.o450) {
      o421.o746();
      o421.o628 = (o421.o628 & 0x700) | o70;
      o421.o620 = (0x800 - o421.o628) << 2;
      o421.o155[0xFF18] = o70;
    }
  }
  this.o393[0x19] = this.o391[0xFF19] = function (o421, o768, o70) {"use strict";
    if (o421.o450) {
      o421.o746();
      if (o70 > 0x7F) {
        //Reload 0xFF17:
        var o928 = o421.o155[0xFF17];
        o421.o623 = o928 >> 4;
        o421.o728();
        o421.o626 = (o928 & 0x7) - 1;
        if (o421.o622 == 0) {
          o421.o622 = 0x40;
        }
        if ((o70 & 0x40) == 0x40) {
          o421.o155[0xFF26] |= 0x2;
        }
      }
      o421.o627 = ((o70 & 0x40) == 0x0);
      o421.o628 = ((o70 & 0x7) << 8) | (o421.o628 & 0xFF);
      o421.o620 = (0x800 - o421.o628) << 2;
      o421.o155[0xFF19] = o70 & 0x40;
      o421.o751();
    }
  }
  this.o393[0x1A] = this.o391[0xFF1A] = function (o421, o768, o70) {"use strict";
    if (o421.o450) {
      o421.o746();
      if (!o421.o629 && o70 >= 0x80) {
        o421.o659 = 0;
        o421.o758();
      }
      o421.o629 = (o70 > 0x7F);
      if (o421.o629 && o421.o155[0xFF1A] > 0x7F && !o421.o633) {
        o421.o155[0xFF26] |= 0x4;
      }
      o421.o155[0xFF1A] = o70 & 0x80;
      //parentObj.channel3EnableCheck();
    }
  }
  this.o393[0x1B] = this.o391[0xFF1B] = function (o421, o768, o70) {"use strict";
    if (o421.o450 || !o421.o400) {
      if (o421.o450) {
        o421.o746();
      }
      o421.o630 = 0x100 - o70;
      o421.o155[0xFF1B] = o70;
      o421.o752();
    }
  }
  this.o393[0x1C] = this.o391[0xFF1C] = function (o421, o768, o70) {"use strict";
    if (o421.o450) {
      o421.o746();
      o70 &= 0x60;
      o421.o155[0xFF1C] = o70;
      o421.o631 = (o70 == 0) ? 4 : ((o70 >> 5) - 1);
    }
  }
  this.o393[0x1D] = this.o391[0xFF1D] = function (o421, o768, o70) {"use strict";
    if (o421.o450) {
      o421.o746();
      o421.o632 = (o421.o632 & 0x700) | o70;
      o421.o658 = (0x800 - o421.o632) << 1;
      o421.o155[0xFF1D] = o70;
    }
  }
  this.o393[0x1E] = this.o391[0xFF1E] = function (o421, o768, o70) {"use strict";
    if (o421.o450) {
      o421.o746();
      if (o70 > 0x7F) {
        if (o421.o630 == 0) {
          o421.o630 = 0x100;
        }
        o421.o659 = 0;
        if ((o70 & 0x40) == 0x40) {
          o421.o155[0xFF26] |= 0x4;
        }
      }
      o421.o633 = ((o70 & 0x40) == 0x0);
      o421.o632 = ((o70 & 0x7) << 8) | (o421.o632 & 0xFF);
      o421.o658 = (0x800 - o421.o632) << 1;
      o421.o155[0xFF1E] = o70 & 0x40;
      o421.o752();
    }
  }
  this.o393[0x20] = this.o391[0xFF20] = function (o421, o768, o70) {"use strict";
    if (o421.o450 || !o421.o400) {
      if (o421.o450) {
        o421.o746();
      }
      o421.o636 = 0x40 - (o70 & 0x3F);
      o421.o155[0xFF20] = o70 | 0xC0;
      o421.o753();
    }
  }
  this.o393[0x21] = this.o391[0xFF21] = function (o421, o768, o70) {"use strict";
    if (o421.o450) {
      o421.o746();
      if (o421.o651 && o421.o640 == 0) {
        //Zombie Volume PAPU Bug:
        if (((o421.o155[0xFF21] ^ o70) & 0x8) == 0x8) {
          if ((o421.o155[0xFF21] & 0x8) == 0) {
            if ((o421.o155[0xFF21] & 0x7) == 0x7) {
              o421.o637 += 2;
            }
            else {
              ++o421.o637;
            }
          }
          o421.o637 = (16 - o421.o637) & 0xF;
        }
        else if ((o421.o155[0xFF21] & 0xF) == 0x8) {
          o421.o637 = (1 + o421.o637) & 0xF;
        }
        o421.o638 = o421.o637 << o421.o670;
      }
      o421.o639 = ((o70 & 0x08) == 0x08);
      o421.o155[0xFF21] = o70;
      o421.o755();
      o421.o766();
    }
  }
  this.o393[0x22] = this.o391[0xFF22] = function (o421, o768, o70) {"use strict";
    if (o421.o450) {
      o421.o746();
      o421.o634 = Math.o290((o70 & 0x7) << 4, 8) << (o70 >> 4);
      var o929 = (o70 & 0x8);
      if ((o929 == 0x8 && o421.o643 == 0x7FFF) || (o929 == 0 && o421.o643 == 0x7F)) {
        o421.o635 = 0;
        o421.o643 = (o929 == 0x8) ? 0x7F : 0x7FFF;
        o421.o670 = (o929 == 0x8) ? 7 : 15;
        o421.o638 = o421.o637 << o421.o670;
        o421.o448 = (o929 == 0x8) ? o421.o447 : o421.o446;
      }
      o421.o155[0xFF22] = o70;
      o421.o755();
    }
  }
  this.o393[0x23] = this.o391[0xFF23] = function (o421, o768, o70) {"use strict";
    if (o421.o450) {
      o421.o746();
      o421.o155[0xFF23] = o70;
      o421.o642 = ((o70 & 0x40) == 0x0);
      if (o70 > 0x7F) {
        var o930 = o421.o155[0xFF21];
        o421.o637 = o930 >> 4;
        o421.o638 = o421.o637 << o421.o670;
        o421.o641 = (o930 & 0x7) - 1;
        if (o421.o636 == 0) {
          o421.o636 = 0x40;
        }
        if ((o70 & 0x40) == 0x40) {
          o421.o155[0xFF26] |= 0x8;
        }
      }
      o421.o753();
    }
  }
  this.o393[0x24] = this.o391[0xFF24] = function (o421, o768, o70) {"use strict";
    if (o421.o450 && o421.o155[0xFF24] != o70) {
      o421.o746();
      o421.o155[0xFF24] = o70;
      o421.o452 = ((o70 >> 4) & 0x07) + 1;
      o421.o453 = (o70 & 0x07) + 1;
      o421.o761();
    }
  }
  this.o393[0x25] = this.o391[0xFF25] = function (o421, o768, o70) {"use strict";
    if (o421.o450 && o421.o155[0xFF25] != o70) {
      o421.o746();
      o421.o155[0xFF25] = o70;
      o421.o458 = ((o70 & 0x01) == 0x01);
      o421.o459 = ((o70 & 0x02) == 0x02);
      o421.o460 = ((o70 & 0x04) == 0x04);
      o421.o461 = ((o70 & 0x08) == 0x08);
      o421.o454 = ((o70 & 0x10) == 0x10);
      o421.o455 = ((o70 & 0x20) == 0x20);
      o421.o456 = ((o70 & 0x40) == 0x40);
      o421.o457 = (o70 > 0x7F);
      o421.o727();
      o421.o728();
      o421.o729();
      o421.o730();
    }
  }
  this.o393[0x26] = this.o391[0xFF26] = function (o421, o768, o70) {"use strict";
    o421.o746();
    if (!o421.o450 && o70 > 0x7F) {
      o421.o155[0xFF26] = 0x80;
      o421.o450 = true;
      o421.o449();
    }
    else if (o421.o450 && o70 < 0x80) {
      o421.o155[0xFF26] = 0;
      o421.o450 = false;
      //GBDev wiki says the registers are written with zeros on power off:
      for (var index = 0xFF10; index < 0xFF26; index++) {
        o421.o391[index](o421, index, 0);
      }
    }
  }
  //0xFF27 to 0xFF2F don't do anything...
  this.o393[0x27] = this.o391[0xFF27] = this.o902;
  this.o393[0x28] = this.o391[0xFF28] = this.o902;
  this.o393[0x29] = this.o391[0xFF29] = this.o902;
  this.o393[0x2A] = this.o391[0xFF2A] = this.o902;
  this.o393[0x2B] = this.o391[0xFF2B] = this.o902;
  this.o393[0x2C] = this.o391[0xFF2C] = this.o902;
  this.o393[0x2D] = this.o391[0xFF2D] = this.o902;
  this.o393[0x2E] = this.o391[0xFF2E] = this.o902;
  this.o393[0x2F] = this.o391[0xFF2F] = this.o902;
  //WAVE PCM RAM:
  this.o393[0x30] = this.o391[0xFF30] = function (o421, o768, o70) {"use strict";
    o421.o767(0, o70);
  }
  this.o393[0x31] = this.o391[0xFF31] = function (o421, o768, o70) {"use strict";
    o421.o767(0x1, o70);
  }
  this.o393[0x32] = this.o391[0xFF32] = function (o421, o768, o70) {"use strict";
    o421.o767(0x2, o70);
  }
  this.o393[0x33] = this.o391[0xFF33] = function (o421, o768, o70) {"use strict";
    o421.o767(0x3, o70);
  }
  this.o393[0x34] = this.o391[0xFF34] = function (o421, o768, o70) {"use strict";
    o421.o767(0x4, o70);
  }
  this.o393[0x35] = this.o391[0xFF35] = function (o421, o768, o70) {"use strict";
    o421.o767(0x5, o70);
  }
  this.o393[0x36] = this.o391[0xFF36] = function (o421, o768, o70) {"use strict";
    o421.o767(0x6, o70);
  }
  this.o393[0x37] = this.o391[0xFF37] = function (o421, o768, o70) {"use strict";
    o421.o767(0x7, o70);
  }
  this.o393[0x38] = this.o391[0xFF38] = function (o421, o768, o70) {"use strict";
    o421.o767(0x8, o70);
  }
  this.o393[0x39] = this.o391[0xFF39] = function (o421, o768, o70) {"use strict";
    o421.o767(0x9, o70);
  }
  this.o393[0x3A] = this.o391[0xFF3A] = function (o421, o768, o70) {"use strict";
    o421.o767(0xA, o70);
  }
  this.o393[0x3B] = this.o391[0xFF3B] = function (o421, o768, o70) {"use strict";
    o421.o767(0xB, o70);
  }
  this.o393[0x3C] = this.o391[0xFF3C] = function (o421, o768, o70) {"use strict";
    o421.o767(0xC, o70);
  }
  this.o393[0x3D] = this.o391[0xFF3D] = function (o421, o768, o70) {"use strict";
    o421.o767(0xD, o70);
  }
  this.o393[0x3E] = this.o391[0xFF3E] = function (o421, o768, o70) {"use strict";
    o421.o767(0xE, o70);
  }
  this.o393[0x3F] = this.o391[0xFF3F] = function (o421, o768, o70) {"use strict";
    o421.o767(0xF, o70);
  }
  //SCY
  this.o393[0x42] = this.o391[0xFF42] = function (o421, o768, o70) {"use strict";
    if (o421.o524 != o70) {
      o421.o839();
      o421.o524 = o70;
    }
  }
  //SCX
  this.o393[0x43] = this.o391[0xFF43] = function (o421, o768, o70) {"use strict";
    if (o421.o523 != o70) {
      o421.o839();
      o421.o523 = o70;
    }
  }
  //LY
  this.o393[0x44] = this.o391[0xFF44] = function (o421, o768, o70) {"use strict";
    //Read Only:
    if (o421.o418) {
      //Gambatte says to do this:
      o421.o412 = 2;
      o421.o537 = -1;
      o421.o505 = o421.o539 = o421.o504 = o421.o503 = o421.o490 = o421.o411 = o421.o502 = o421.o155[0xFF44] = 0;
    }
  }
  //LYC
  this.o393[0x45] = this.o391[0xFF45] = function (o421, o768, o70) {"use strict";
    if (o421.o155[0xFF45] != o70) {
      o421.o155[0xFF45] = o70;
      if (o421.o418) {
        o421.o789();  //Get the compare of the first scan line.
      }
    }
  }
  //WY
  this.o393[0x4A] = this.o391[0xFF4A] = function (o421, o768, o70) {"use strict";
    if (o421.o533 != o70) {
      o421.o839();
      o421.o533 = o70;
    }
  }
  //WX
  this.o393[0x4B] = this.o391[0xFF4B] = function (o421, o768, o70) {"use strict";
    if (o421.o155[0xFF4B] != o70) {
      o421.o839();
      o421.o155[0xFF4B] = o70;
      o421.o534 = o70 - 7;
    }
  }
  this.o393[0x72] = this.o391[0xFF72] = function (o421, o768, o70) {"use strict";
    o421.o155[0xFF72] = o70;
  }
  this.o393[0x73] = this.o391[0xFF73] = function (o421, o768, o70) {"use strict";
    o421.o155[0xFF73] = o70;
  }
  this.o393[0x75] = this.o391[0xFF75] = function (o421, o768, o70) {"use strict";
    o421.o155[0xFF75] = o70;
  }
  this.o393[0x76] = this.o391[0xFF76] = this.o902;
  this.o393[0x77] = this.o391[0xFF77] = this.o902;
  //IE (Interrupt Enable)
  this.o393[0xFF] = this.o391[0xFFFF] = function (o421, o768, o70) {"use strict";
    o421.o384 = o70;
    o421.o664();
  }
  this.o931();
  this.o696();
}
o360.prototype.o931 = function () {"use strict";
  if (this.o400) {
    //GameBoy Color Specific I/O:
    //SC (Serial Transfer Control Register)
    this.o393[0x2] = this.o391[0xFF02] = function (o421, o768, o70) {"use strict";
      if (((o70 & 0x1) == 0x1)) {
        //Internal clock:
        o421.o155[0xFF02] = (o70 & 0x7F);
        o421.o494 = ((o70 & 0x2) == 0) ? 4096 : 128;  //Set the Serial IRQ counter.
        o421.o495 = o421.o496 = ((o70 & 0x2) == 0) ? 512 : 16;  //Set the transfer data shift counter.
      }
      else {
        //External clock:
        o421.o155[0xFF02] = o70;
        o421.o495 = o421.o496 = o421.o494 = 0;  //Zero the timers, since we're emulating as if nothing is connected.
      }
    }
    this.o393[0x40] = this.o391[0xFF40] = function (o421, o768, o70) {"use strict";
      if (o421.o155[0xFF40] != o70) {
        o421.o839();
        var o581 = (o70 > 0x7F);
        if (o581 != o421.o418) {
          //When the display mode changes...
          o421.o418 = o581;
          o421.o155[0xFF41] &= 0x78;
          o421.o537 = -1;
          o421.o505 = o421.o539 = o421.o504 = o421.o503 = o421.o411 = o421.o490 = o421.o502 = o421.o155[0xFF44] = 0;
          if (o421.o418) {
            o421.o412 = 2;
            o421.o789();  //Get the compare of the first scan line.
            o421.o422 = o421.o419;
          }
          else {
            o421.o412 = 0;
            o421.o422 = o421.o420;
            o421.o793();
          }
          o421.o383 &= 0xFD;
        }
        o421.o530 = ((o70 & 0x40) == 0x40) ? 0x400 : 0;
        o421.o525 = ((o70 & 0x20) == 0x20);
        o421.o532 = ((o70 & 0x10) == 0x10) ? 0 : 0x80;
        o421.o531 = ((o70 & 0x08) == 0x08) ? 0x400 : 0;
        o421.o527 = ((o70 & 0x04) == 0);
        o421.o526 = ((o70 & 0x02) == 0x02);
        o421.o529 = ((o70 & 0x01) == 0x01);
        o421.o819();  //Special case the priority flagging as an optimization.
        o421.o155[0xFF40] = o70;
      }
    }
    this.o393[0x41] = this.o391[0xFF41] = function (o421, o768, o70) {"use strict";
      o421.o414 = ((o70 & 0x40) == 0x40);
      o421.o415 = ((o70 & 0x20) == 0x20);
      o421.o416 = ((o70 & 0x10) == 0x10);
      o421.o417 = ((o70 & 0x08) == 0x08);
      o421.o155[0xFF41] = o70 & 0x78;
    }
    this.o393[0x46] = this.o391[0xFF46] = function (o421, o768, o70) {"use strict";
      o421.o155[0xFF46] = o70;
      if (o70 < 0xE0) {
        o70 <<= 8;
        o768 = 0xFE00;
        var o932 = o421.o412;
        o421.o412 = 0;
        var o933 = 0;
        do {
          o933 = o421.o390[o70](o421, o70++);
          if (o933 != o421.o155[o768]) {
            //JIT the graphics render queue:
            o421.o412 = o932;
            o421.o873();
            o421.o412 = 0;
            o421.o155[o768++] = o933;
            break;
          }
        } while (++o768 < 0xFEA0);
        if (o768 < 0xFEA0) {
          do {
            o421.o155[o768++] = o421.o390[o70](o421, o70++);
            o421.o155[o768++] = o421.o390[o70](o421, o70++);
            o421.o155[o768++] = o421.o390[o70](o421, o70++);
            o421.o155[o768++] = o421.o390[o70](o421, o70++);
          } while (o768 < 0xFEA0);
        }
        o421.o412 = o932;
      }
    }
    //KEY1
    this.o393[0x4D] = this.o391[0xFF4D] = function (o421, o768, o70) {"use strict";
      o421.o155[0xFF4D] = (o70 & 0x7F) | (o421.o155[0xFF4D] & 0x80);
    }
    this.o393[0x4F] = this.o391[0xFF4F] = function (o421, o768, o70) {"use strict";
      o421.o522 = o70 & 0x01;
      if (o421.o522 > 0) {
        o421.o542 = o421.o541;
      }
      else {
        o421.o542 = o421.o540;
      }
      //Only writable by GBC.
    }
    this.o393[0x51] = this.o391[0xFF51] = function (o421, o768, o70) {"use strict";
      if (!o421.o385) {
        o421.o155[0xFF51] = o70;
      }
    }
    this.o393[0x52] = this.o391[0xFF52] = function (o421, o768, o70) {"use strict";
      if (!o421.o385) {
        o421.o155[0xFF52] = o70 & 0xF0;
      }
    }
    this.o393[0x53] = this.o391[0xFF53] = function (o421, o768, o70) {"use strict";
      if (!o421.o385) {
        o421.o155[0xFF53] = o70 & 0x1F;
      }
    }
    this.o393[0x54] = this.o391[0xFF54] = function (o421, o768, o70) {"use strict";
      if (!o421.o385) {
        o421.o155[0xFF54] = o70 & 0xF0;
      }
    }
    this.o393[0x55] = this.o391[0xFF55] = function (o421, o768, o70) {"use strict";
      if (!o421.o385) {
        if ((o70 & 0x80) == 0) {
          //DMA
          o421.o795((o70 & 0x7F) + 1);
          o421.o155[0xFF55] = 0xFF;  //Transfer completed.
        }
        else {
          //H-Blank DMA
          o421.o385 = true;
          o421.o155[0xFF55] = o70 & 0x7F;
        }
      }
      else if ((o70 & 0x80) == 0) {
        //Stop H-Blank DMA
        o421.o385 = false;
        o421.o155[0xFF55] |= 0x80;
      }
      else {
        o421.o155[0xFF55] = o70 & 0x7F;
      }
    }
    this.o393[0x68] = this.o391[0xFF68] = function (o421, o768, o70) {"use strict";
      o421.o155[0xFF69] = o421.o548[o70 & 0x3F];
      o421.o155[0xFF68] = o70;
    }
    this.o393[0x69] = this.o391[0xFF69] = function (o421, o768, o70) {"use strict";
      o421.o838(o421.o155[0xFF68] & 0x3F, o70);
      if (o421.o155[0xFF68] > 0x7F) { // high bit = autoincrement
        var next = ((o421.o155[0xFF68] + 1) & 0x3F);
        o421.o155[0xFF68] = (next | 0x80);
        o421.o155[0xFF69] = o421.o548[next];
      }
      else {
        o421.o155[0xFF69] = o70;
      }
    }
    this.o393[0x6A] = this.o391[0xFF6A] = function (o421, o768, o70) {"use strict";
      o421.o155[0xFF6B] = o421.o547[o70 & 0x3F];
      o421.o155[0xFF6A] = o70;
    }
    this.o393[0x6B] = this.o391[0xFF6B] = function (o421, o768, o70) {"use strict";
      o421.o840(o421.o155[0xFF6A] & 0x3F, o70);
      if (o421.o155[0xFF6A] > 0x7F) { // high bit = autoincrement
        var next = ((o421.o155[0xFF6A] + 1) & 0x3F);
        o421.o155[0xFF6A] = (next | 0x80);
        o421.o155[0xFF6B] = o421.o547[next];
      }
      else {
        o421.o155[0xFF6B] = o70;
      }
    }
    //SVBK
    this.o393[0x70] = this.o391[0xFF70] = function (o421, o768, o70) {"use strict";
      var o934 = (o421.o155[0xFF51] << 8) | o421.o155[0xFF52];  //Cannot change the RAM bank while WRAM is the source of a running HDMA.
      if (!o421.o385 || o934 < 0xD000 || o934 >= 0xE000) {
        o421.o401 = Math.o290(o70 & 0x07, 1);  //Bank range is from 1-7
        o421.o402 = ((o421.o401 - 1) << 12) - 0xD000;
        o421.o403 = o421.o402 - 0x2000;
      }
      o421.o155[0xFF70] = o70;  //Bit 6 cannot be written to.
    }
    this.o393[0x74] = this.o391[0xFF74] = function (o421, o768, o70) {"use strict";
      o421.o155[0xFF74] = o70;
    }
  }
  else {
    //Fill in the GameBoy Color I/O registers as normal RAM for GameBoy compatibility:
    //SC (Serial Transfer Control Register)
    this.o393[0x2] = this.o391[0xFF02] = function (o421, o768, o70) {"use strict";
      if (((o70 & 0x1) == 0x1)) {
        //Internal clock:
        o421.o155[0xFF02] = (o70 & 0x7F);
        o421.o494 = 4096;  //Set the Serial IRQ counter.
        o421.o495 = o421.o496 = 512;  //Set the transfer data shift counter.
      }
      else {
        //External clock:
        o421.o155[0xFF02] = o70;
        o421.o495 = o421.o496 = o421.o494 = 0;  //Zero the timers, since we're emulating as if nothing is connected.
      }
    }
    this.o393[0x40] = this.o391[0xFF40] = function (o421, o768, o70) {"use strict";
      if (o421.o155[0xFF40] != o70) {
        o421.o839();
        var o581 = (o70 > 0x7F);
        if (o581 != o421.o418) {
          //When the display mode changes...
          o421.o418 = o581;
          o421.o155[0xFF41] &= 0x78;
          o421.o537 = -1;
          o421.o505 = o421.o539 = o421.o504 = o421.o503 = o421.o411 = o421.o490 = o421.o502 = o421.o155[0xFF44] = 0;
          if (o421.o418) {
            o421.o412 = 2;
            o421.o789();  //Get the compare of the first scan line.
            o421.o422 = o421.o419;
          }
          else {
            o421.o412 = 0;
            o421.o422 = o421.o420;
            o421.o793();
          }
          o421.o383 &= 0xFD;
        }
        o421.o530 = ((o70 & 0x40) == 0x40) ? 0x400 : 0;
        o421.o525 = (o70 & 0x20) == 0x20;
        o421.o532 = ((o70 & 0x10) == 0x10) ? 0 : 0x80;
        o421.o531 = ((o70 & 0x08) == 0x08) ? 0x400 : 0;
        o421.o527 = ((o70 & 0x04) == 0);
        o421.o526 = (o70 & 0x02) == 0x02;
        o421.o528 = ((o70 & 0x01) == 0x01);
        o421.o155[0xFF40] = o70;
      }
    }
    this.o393[0x41] = this.o391[0xFF41] = function (o421, o768, o70) {"use strict";
      o421.o414 = ((o70 & 0x40) == 0x40);
      o421.o415 = ((o70 & 0x20) == 0x20);
      o421.o416 = ((o70 & 0x10) == 0x10);
      o421.o417 = ((o70 & 0x08) == 0x08);
      o421.o155[0xFF41] = o70 & 0x78;
      if ((!o421.o376 || !o421.o377) && o421.o418 && o421.o412 < 2) {
        o421.o383 |= 0x2;
        o421.o664();
      }
    }
    this.o393[0x46] = this.o391[0xFF46] = function (o421, o768, o70) {"use strict";
      o421.o155[0xFF46] = o70;
      if (o70 > 0x7F && o70 < 0xE0) {  //DMG cannot DMA from the ROM banks.
        o70 <<= 8;
        o768 = 0xFE00;
        var o932 = o421.o412;
        o421.o412 = 0;
        var o933 = 0;
        do {
          o933 = o421.o390[o70](o421, o70++);
          if (o933 != o421.o155[o768]) {
            //JIT the graphics render queue:
            o421.o412 = o932;
            o421.o873();
            o421.o412 = 0;
            o421.o155[o768++] = o933;
            break;
          }
        } while (++o768 < 0xFEA0);
        if (o768 < 0xFEA0) {
          do {
            o421.o155[o768++] = o421.o390[o70](o421, o70++);
            o421.o155[o768++] = o421.o390[o70](o421, o70++);
            o421.o155[o768++] = o421.o390[o70](o421, o70++);
            o421.o155[o768++] = o421.o390[o70](o421, o70++);
          } while (o768 < 0xFEA0);
        }
        o421.o412 = o932;
      }
    }
    this.o393[0x47] = this.o391[0xFF47] = function (o421, o768, o70) {"use strict";
      if (o421.o155[0xFF47] != o70) {
        o421.o839();
        o421.o557(o70);
        o421.o155[0xFF47] = o70;
      }
    }
    this.o393[0x48] = this.o391[0xFF48] = function (o421, o768, o70) {"use strict";
      if (o421.o155[0xFF48] != o70) {
        o421.o839();
        o421.o559(0, o70);
        o421.o155[0xFF48] = o70;
      }
    }
    this.o393[0x49] = this.o391[0xFF49] = function (o421, o768, o70) {"use strict";
      if (o421.o155[0xFF49] != o70) {
        o421.o839();
        o421.o559(4, o70);
        o421.o155[0xFF49] = o70;
      }
    }
    this.o393[0x4D] = this.o391[0xFF4D] = function (o421, o768, o70) {"use strict";
      o421.o155[0xFF4D] = o70;
    }
    this.o393[0x4F] = this.o391[0xFF4F] = this.o902;  //Not writable in DMG mode.
    this.o393[0x55] = this.o391[0xFF55] = this.o902;
    this.o393[0x68] = this.o391[0xFF68] = this.o902;
    this.o393[0x69] = this.o391[0xFF69] = this.o902;
    this.o393[0x6A] = this.o391[0xFF6A] = this.o902;
    this.o393[0x6B] = this.o391[0xFF6B] = this.o902;
    this.o393[0x6C] = this.o391[0xFF6C] = this.o902;
    this.o393[0x70] = this.o391[0xFF70] = this.o902;
    this.o393[0x74] = this.o391[0xFF74] = this.o902;
  }
}
o360.prototype.o696 = function () {"use strict";
  //Boot I/O Registers:
  if (this.o375) {
    this.o393[0x50] = this.o391[0xFF50] = function (o421, o768, o70) {"use strict";
      o113("Boot ROM reads blocked: Bootstrap process has ended.", 0);
      o421.o375 = false;
      o421.o694();      //Fill in the boot ROM ranges with ROM  bank 0 ROM ranges
      o421.o155[0xFF50] = o70;  //Bits are sustained in memory?
    }
    if (this.o400) {
      this.o393[0x6C] = this.o391[0xFF6C] = function (o421, o768, o70) {"use strict";
        if (o421.o375) {
          o421.o400 = ((o70 & 0x1) == 0);
          //Exception to the GBC identifying code:
          if (o421.name + o421.o408 + o421.o153[0x143] == "Game and Watch 50") {
            o421.o400 = true;
            o113("Created a boot exception for Game and Watch Gallery 2 (GBC ID byte is wrong on the cartridge).", 1);
          }
          o113("Booted to GBC Mode: " + o421.o400, 0);
        }
        o421.o155[0xFF6C] = o70;
      }
    }
  }
  else {
    //Lockout the ROMs from accessing the BOOT ROM control register:
    this.o393[0x50] = this.o391[0xFF50] = this.o902;
  }
}
//Helper Functions
o360.prototype.o662 = function (o935, o936) {"use strict";
  try {
    // The following line was modified for benchmarking:
    if (o683[5] || (o936 != "float32" && o96.o937 && this.o358())) {
      return o935;
    }
    if (!o935 || !o935.length) {
      return [];
    }
    var length = o935.length;
    switch (o936) {
      case "uint8":
        var o938 = new Uint8Array(length);
        break;
      case "int8":
        var o938 = new Int8Array(length);
        break;
      case "int32":
        var o938 = new Int32Array(length);
        break;
      case "float32":
        var o938 = new Float32Array(length);
    }
    for (var index = 0; index < length; index++) {
      o938[index] = o935[index];
    }
    return o938;
  }
  catch (o68) {
    o113("Could not convert an array to a typed array: " + o68.o114, 1);
    return o935;
  }
}
o360.prototype.o152 = function (o935) {"use strict";
  try {
    if (!o935 || !o935.length) {
      return [];
    }
    var o939 = [];
    for (var index = 0; index < o935.length; ++index) {
      o939[index] = o935[index];
    }
    return o939;
  }
  catch (o68) {
    o113("Conversion from a typed array failed: " + o68.o114, 1);
    return o935;
  }
}
o360.prototype.o676 = function (length, o940, o941) {"use strict";
  try {
    if (o683[5]) {
      throw(new Error(""));
    }
    // The following line was modified for benchmarking:
    if (o941 != "float32" && o96.o937 && this.o358()) {
      //Caught Opera breaking typed array math:
      throw(new Error(""));
    }
    switch (o941) {
      case "int8":
        var o942 = new Int8Array(length);
        break;
      case "uint8":
        var o942 = new Uint8Array(length);
        break;
      case "int32":
        var o942 = new Int32Array(length);
        break;
      case "float32":
        var o942 = new Float32Array(length);
    }
    if (o940 != 0) {
      var index = 0;
      while (index < length) {
        o942[index++] = o940;
      }
    }
  }
  catch (o68) {
    o113("Could not convert an array to a typed array: " + o68.o114, 1);
    var o942 = [];
    var index = 0;
    while (index < length) {
      o942[index++] = o940;
    }
  }
  return o942;
}
o360.prototype.o358 = function () {"use strict";
  var o943 = new Uint8Array(1);
  o943[0] = -1;
  o943[0] >>= 0;
  if (o943[0] != 0xFF) {
    o113("Detected faulty math by your browser.", 2);
    return true;
  }
  else {
    return false;
  }
}

// End of js/GameBoyCore.js file.

// Start of js/GameBoyIO.js file.

"use strict";
var o90 = null;            //GameBoyCore object.
var o178 = null;        //GameBoyCore Timer
var o683 = [            //Some settings.
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
function o73(o361, o153) {
  o944();
  o945();  //If we are about to load a new game, then save the last one...
  o90 = new o360(o361, o153);
  o90.o698 = o946;
  o90.o672 = o672;
  o90.o73();
  o12();
}
function o12() {
  if (o947()) {
    if (!o948()) {
      o90.o380 &= 1;
      o113("Starting the iterator.", 0);
      var o796 = o138();  // The line is changed for benchmarking.
      o90.o500 = o796.o139();
      o90.o501 = 0;
      // The following lines are commented out for benchmarking.
      // gbRunInterval = setInterval(function () {"use strict";
      //  if (!document.hidden && !document.msHidden && !document.mozHidden && !document.webkitHidden) {
      //    gameboy.run();
      // }
      // }, settings[6]);
    }
    else {
      o113("The GameBoy core is already running.", 1);
    }
  }
  else {
    o113("GameBoy core cannot run while it has not been initialized.", 1);
  }
}
function o593() {
  if (o947()) {
    if (o948()) {
      o944();
    }
    else {
      o113("GameBoy core has already been paused.", 1);
    }
  }
  else {
    o113("GameBoy core cannot be paused while it has not been initialized.", 1);
  }
}
function o944() {
  if (o947() && o948()) {
    o949(o178);
    o90.o380 |= 2;
    o113("The previous emulation has been cleared.", 0);
  }
  else {
    o113("No previous emulation was found to be cleared.", 0);
  }
}
function o950() {
  if (o947()) {
    try {
      var o951 = 0;
      while (o952("FREEZE_" + o90.name + "_" + o951) != null) {
        o951++;
      }
      o953("FREEZE_" + o90.name + "_" + o951, o90.o603());
      o113("Saved the current state as: FREEZE_" + o90.name + "_" + o951, 0);
    }
    catch (o68) {
      o113("Could not save the current emulation state(\"" + o68.o114 + "\").", 2);
    }
  }
  else {
    o113("GameBoy core cannot be saved while it has not been initialized.", 1);
  }
}
function o954() {
  if (o947()) {
    if (o90.o601) {
      try {
        var o955 = o90.o600();
        if (o955.length > 0) {
          o113("Saving the SRAM...", 0);
          if (o952("SRAM_" + o90.name) != null) {
            //Remove the outdated storage format save:
            o113("Deleting the old SRAM save due to outdated format.", 0);
            o956("SRAM_" + o90.name);
          }
          o953("B64_SRAM_" + o90.name, o193(o955));
        }
        else {
          o113("SRAM could not be saved because it was empty.", 1);
        }
      }
      catch (o68) {
        o113("Could not save the current emulation state(\"" + o68.o114 + "\").", 2);
      }
    }
    else {
      o113("Cannot save a game that does not have battery backed SRAM specified.", 1);
    }
    o957();
  }
  else {
    o113("GameBoy core cannot be saved while it has not been initialized.", 1);
  }
}
function o957() {  //Execute this when SRAM is being saved as well.
  if (o947()) {
    if (o90.o519) {
      try {
        o113("Saving the RTC...", 0);
        o953("RTC_" + o90.name, o90.o602());
      }
      catch (o68) {
        o113("Could not save the RTC of the current emulation state(\"" + o68.o114 + "\").", 2);
      }
    }
  }
  else {
    o113("GameBoy core cannot be saved while it has not been initialized.", 1);
  }
}
function o945() {
  if (o947()) {
    o113("Automatically saving the SRAM.", 0);
    o954();
    o957();
  }
}
function o946(o958) {
  try {
    if (o952("B64_SRAM_" + o958) != null) {
      o113("Found a previous SRAM state (Will attempt to load).", 0);
      return o196(o952("B64_SRAM_" + o958));
    }
    else if (o952("SRAM_" + o958) != null) {
      o113("Found a previous SRAM state (Will attempt to load).", 0);
      return o952("SRAM_" + o958);
    }
    else {
      o113("Could not find any previous SRAM copy for the current ROM.", 0);
    }
  }
  catch (o68) {
    o113("Could not open the  SRAM of the saved emulation state.", 2);
  }
  return [];
}
function o672(o958) {
  try {
    if (o952("RTC_" + o958) != null) {
      o113("Found a previous RTC state (Will attempt to load).", 0);
      return o952("RTC_" + o958);
    }
    else {
      o113("Could not find any previous RTC copy for the current ROM.", 0);
    }
  }
  catch (o68) {
    o113("Could not open the RTC data of the saved emulation state.", 2);
  }
  return [];
}
function o959(o958, o361) {
  try {
    if (o952(o958) != null) {
      try {
        o944();
        o113("Attempting to run a saved emulation state.", 0);
        o90 = new o360(o361, "");
        o90.o410 = o958;
        o90.o660(o952(o958));
        o12();
      }
      catch (o68) {
        o29(o68.o114 + " file: " + o68.o711 + " line: " + o68.o712);
      }
    }
    else {
      o113("Could not find the save state " + o958 + "\".", 2);
    }
  }
  catch (o68) {
    o113("Could not open the saved emulation state.", 2);
  }
}
function o960(o961) {
  o961 = o962(o961);
  if (o961 && o961.o963) {
    if (o961.o963.length > 0) {
      for (var index = 0; index < o961.o963.length; ++index) {
        o113("Importing blob \"" + o961.o963[index].o964 + "\"", 0);
        if (o961.o963[index].o965) {
          if (o961.o963[index].o964.substring(0, 5) == "SRAM_") {
            o953("B64_" + o961.o963[index].o964, o181(o961.o963[index].o965));
          }
          else {
            o953(o961.o963[index].o964, JSON.parse(o961.o963[index].o965));
          }
        }
        else if (o961.o963[index].o964) {
          o113("Save file imported had blob \"" + o961.o963[index].o964 + "\" with no blob data interpretable.", 2);
        }
        else {
          o113("Blob chunk information missing completely.", 2);
        }
      }
    }
    else {
      o113("Could not decode the imported file.", 2);
    }
  }
  else {
    o113("Could not decode the imported file.", 2);
  }
}
function o966(o967, o968) {
  //Append the file format prefix:
  var o969 = "EMULATOR_DATA";
  var o970 = "GameBoy";
  //Figure out the length:
  var o971 = (o969.length + 4 + (1 + o970.length)) + ((1 + o967.length) + (4 + o968.length));
  //Append the total length in bytes:
  o969 += o189(o971);
  //Append the console ID text's length:
  o969 += o192(o970.length);
  //Append the console ID text:
  o969 += o970;
  //Append the blob ID:
  o969 += o192(o967.length);
  o969 += o967;
  //Now append the save data:
  o969 += o189(o968.length);
  o969 += o968;
  return o969;
}
function o972(o973) {
  var o970 = "GameBoy";
  //Figure out the initial length:
  var o971 = 13 + 4 + 1 + o970.length;
  //Append the console ID text's length:
  var o969 = o192(o970.length);
  //Append the console ID text:
  o969 += o970;
  var o967 = "";
  var o968 = "";
  //Now append all the blobs:
  for (var index = 0; index < o973.length; ++index) {
    o967 = o973[index][0];
    o968 = o973[index][1];
    //Append the blob ID:
    o969 += o192(o967.length);
    o969 += o967;
    //Now append the save data:
    o969 += o189(o968.length);
    o969 += o968;
    //Update the total length:
    o971 += 1 + o967.length + 4 + o968.length;
  }
  //Now add the prefix:
  o969 = "EMULATOR_DATA" + o189(o971) + o969;
  return o969;
}
function o962(o961) {
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
  var length = o961.length;
  var o974 = {};
  o974.o970 = null;
  var o975 = -1;
  o974.o963 = [];
  if (length > 17) {
    if (o961.substring(0, 13) == "EMULATOR_DATA") {
      var length = Math.o279(((o961.charCodeAt(16) & 0xFF) << 24) | ((o961.charCodeAt(15) & 0xFF) << 16) | ((o961.charCodeAt(14) & 0xFF) << 8) | (o961.charCodeAt(13) & 0xFF), length);
      var o976 = o961.charCodeAt(17) & 0xFF;
      if (length > 17 + o976) {
        o974.o970 = o961.substring(18, 18 + o976);
        var o977 = 0;
        var o978 = 0;
        for (var index = 18 + o976; index < length;) {
          o977 = o961.charCodeAt(index++) & 0xFF;
          if (index + o977 < length) {
            o974.o963[++o975] = {};
            o974.o963[o975].o964 = o961.substring(index, index + o977);
            index += o977;
            if (index + 4 < length) {
              o978 = ((o961.charCodeAt(index + 3) & 0xFF) << 24) | ((o961.charCodeAt(index + 2) & 0xFF) << 16) | ((o961.charCodeAt(index + 1) & 0xFF) << 8) | (o961.charCodeAt(index) & 0xFF);
              index += 4;
              if (index + o978 <= length) {
                o974.o963[o975].o965 =  o961.substring(index, index + o978);
                index += o978;
              }
              else {
                o113("Blob length check failed, blob determined to be incomplete.", 2);
                break;
              }
            }
            else {
              o113("Blob was incomplete, bailing out.", 2);
              break;
            }
          }
          else {
            o113("Blob was incomplete, bailing out.", 2);
            break;
          }
        }
      }
    }
  }
  return o974;
}
function o979(key) {  //Maps a keyboard key to a gameboy key.
  //Order: Right, Left, Up, Down, A, B, Select, Start
  for (var index = 0; index < o683[3].length; index++) {
    if (o683[3][index] == key) {
      return index;
    }
  }
  return -1;
}
function o947() {
  return (typeof o90 == "object" && o90 != null);
}
function o948() {
  return ((o90.o380 & 2) == 0);
}
function o980(o78) {
  if (o947() && o948()) {
    var o981 = o979(o78.o982);
    if (o981 >= 0 && o981 < 8) {
      o90.o713(o981, true);
      try {
        o78.o983();
      }
      catch (o68) { }
    }
  }
}
function o984(o78) {
  if (o947() && o948()) {
    var o981 = o979(o78.o982);
    if (o981 >= 0 && o981 < 8) {
      o90.o713(o981, false);
      try {
        o78.o983();
      }
      catch (o68) { }
    }
  }
}
function o985(o78) {
  if (o947() && o948()) {
    if (o78.o986 || o78.o987) {
      o90.o715(o78.o986 * Math.o988 / 180, o78.o987 * Math.o988 / 180);
    }
    else {
      o90.o715(o78.o104, o78.o105);
    }
    try {
      o78.o983();
    }
    catch (o68) { }
  }
}
//The emulator will call this to sort out the canvas properties for (re)initialization.
function o700() {
  if (o947()) {
    o90.o361.o109 = o90.o361.o989;
    o90.o361.o110 = o90.o361.o990;
  }
}
//Call this when resizing the canvas:
function o991() {
  if (o947()) {
    if (!o683[12]) {
      if (o90.o569 != 160 || o90.o571 != 144) {
        o90.o668();
      }
    }
    else {
      if (o90.o569 != o90.o361.o989 || o90.o571 != o90.o361.o990) {
        o90.o668();
      }
    }
  }
}

// End of js/GameBoyIO.js file.

// Start of realtime.js file.
// ROM code from Public Domain LPC2000 Demo "realtime" by AGO.

var o87='r+BPyZiEZwA+AeBPySAobeEq6gAgKlYj5WJv6SRmZjjhKuXqACDJ/////////////////////////////////xgHZwCYhGcA2fX6/3/1xdXlIRPKNgHN9f/h0cHx6gAg+hLKtyAC8cnwgLcoF/CC7hjgUT6Q4FOv4FLgVOCAPv/gVfHZ8IG3IALx2fBA7gjgQA8PD+YB7gHgT/CC4FHuEOCCPojgU6/gUuBU4IE+/uBV4ID6NMs86jTL8dkKCgoKbWFkZSBieSBhZ28uIGVtYWlsOmdvYnV6b3ZAeWFob28uY29tCnVybDogc3BlY2N5LmRhLnJ1CgoKCv///////wDDSgnO7WZmzA0ACwNzAIMADAANAAgRH4iJAA7czG7m3d3Zmbu7Z2NuDuzM3dyZn7u5Mz5BR08nUyBSRUFMVElNRSCAAAAAAgEDADMBSTQeIUD/y37I8P/1y4fg//BE/pEg+su+8eD/yT7A4EY+KD0g/cnF1eWvEQPK1RITEhMGAyEAyuXFTgYAIWAMCQkqEhMqEhPB4SMFIOrhrwYIzYsU4dHByf////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAgMFBggJCwwOEBETFBYXGBobHR4fISIjJSYnKSorLC0uLzAxMjM0NTY3ODg5Ojo7PDw9PT4+Pj8/Pz9AQEBAQEBAQEBAPz8/Pz4+PT08PDs7Ojk5ODc2NTU0MzIxMC8uLCsqKSgmJSQjISAfHRwaGRcWFRMSEA8NCwoIBwUEAgH//fz6+ff29PPx8O7t6+ro5+Xk4uHg3t3c2tnY19bU09LR0M/OzczLysnJyMfGxsXFxMPDw8LCwcHBwcDAwMDAwMDAwMDBwcHBwsLDw8PExcXGxsfIycnKy8zNzs/Q0dLT1NXX2Nna3N3e4OHi5OXn6Onr7O7v8fL09vf5+vz9AAEECRAZJDFAUWR5kKnE4QAhRGmQueQRQHGk2RBJhMEAQYTJEFmk8UCR5DmQ6UShAGHEKZD5ZNFAsSSZEIkEgQCBBIkQmSSxQNFk+ZApxGEAoUTpkDnkkUDxpFkQyYRBAMGESRDZpHFAEeS5kGlEIQDhxKmQeWRRQDEkGRAJBAEAAQQJEBkkMUBRZHmQqcThACFEaZC55BFAcaTZEEmEwQBBhMkQWaTxQJHkOZDpRKEAYcQpkPlk0UCxJJkQiQSBAIEEiRCZJLFA0WT5kCnEYQChROmQOeSRQPGkWRDJhEEAwYRJENmkcUAR5LmQaUQhAOHEqZB5ZFFAMSQZEAkEAQAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAgICAgIDAwMDBAQEBAUFBQUGBgYHBwcICAkJCQoKCgsLDAwNDQ4ODw8QEBEREhITExQUFRUWFxcYGRkaGhscHB0eHh8gISEiIyQkJSYnJygpKisrLC0uLzAxMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1FSU1RVVldZWltcXV9gYWJkZWZnaWprbG5vcHJzdHZ3eXp7fX5/gYKEhYeIiouNjpCRk5SWl5manJ2foKKkpaepqqytr7GytLa3ubu9vsDCxMXHycvMztDS1NXX2dvd3+Hi5Obo6uzu8PL09vj6/P4A//z38Ofcz8CvnIdwVzwfAN+8l3BHHO/Aj1wn8Ld8PwC/fDfwp1wPwG8cx3AXvF8AnzzXcAecL8BP3Gfwd/x/AH/8d/Bn3E/AL5wHcNc8nwBfvBdwxxxvwA9cp/A3fL8AP3y38Cdcj8DvHEdwl7zfAB88V3CHnK/Az9zn8Pf8/wD//Pfw59zPwK+ch3BXPB8A37yXcEcc78CPXCfwt3w/AL98N/CnXA/AbxzHcBe8XwCfPNdwB5wvwE/cZ/B3/H8Af/x38GfcT8AvnAdw1zyfAF+8F3DHHG/AD1yn8Dd8vwA/fLfwJ1yPwO8cR3CXvN8AHzxXcIecr8DP3Ofw9/z/AP/////////////////////+/v7+/v79/f39/fz8/Pz8+/v7+vr6+vn5+fj4+Pf39/b29fX19PTz8/Ly8fHw8PDv7u7t7ezs6+vq6uno6Ofn5uXl5OPj4uHh4N/e3t3c3Nva2djY19bV1NTT0tHQz8/OzczLysnIx8bFxMPCwcDAvr28u7q5uLe2tbSzsrGwr62sq6qpqKalpKOioJ+enZyamZiWlZSTkZCPjYyLiYiHhYSCgYB+fXt6eHd1dHJxcG5sa2loZmVjYmBfXVtaWFdVU1JQTk1LSUhGREJBPz08Ojg2NDMxLy0rKigmJCIgHx0bGRcVExEPDQsJBwUDAf9/Px8PBwMBgEAgEAgEAgEAAQEBAQEBAQEBAQEA//////////////+AEAcAAQABAAEBAAEBAAEA/wD//wD//wD/AP+AKwcBAAEAAQD/AP8A/wD/AP8A/wABAAEAAQCARgcBAQEBAQD//////////////wABAQEBAQGAYQf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+AwODw+Pz+/xEAwAGxwj4E9cU+BfUKbwMKZ37+gCALI34LAiN+AwILGOsahhIDHBwcHPE9IN7BIRAAGVRdPgX1Cm8DCmcalhIjfAILfQIDAx0dHR3xPSDnIRgAGVRd8T0grskRAcAB6cI+BPUKbwMKZ37+gCALI34LAiN+AwILGOs+CvUahhIcHBwc8T0g9CN8Agt9AgMD8T0g0MkgIEZJTExFRCAgIFBPTFlHT05TIEhFTElDT1BURVJJTiBBQ1RJT04gIQDADgpwLHQsGhPWICI2ACwNIPE+oOoQyngBCQDlYmsJVF3hDMYKR3AsdCwaG9YgIjYALA0g8a/qEcrJ+hDK/jDI1gTqEMpHPqCQ/lA4Aj5QDgAM1ggw+3ghAcARBAB3xggZDSD5+hHKg+oRykf+UDgCPlAOAAzWCDD7eC4td9YIGQ0g+ckh9grzMf/PzVABr+Am4P/gD+BD4EL2SOBFPkDgQT4E4AfN9RM+CuoAAA4HeeBwJqCvIstsKPsNIPIh/v8yy30g+wEKABH1/yFpAc3kE+cCAVYAEQDBIVt2zeQTrwYYIWsOzYsUIYsOzaQUxwGwAxEAgCGhF8XlzeQT4cERAIjN5BMhAJgRAwABYMDHcc9yIwUg+BQdIPHN9RMhuxUGAc2WE82JEz5E4EGv4EU+A+D/+z4B6hLK4E0QAAB4zccTBSD6zZATxwEACFkhAIhzIwt4sSD5IQDHPv9FdyRwJCJ3JXclcCwg8x5/IQCYx3PPNgDL1DYIx3PLlCPLVCjuPoABDxARIAAhIpjF5XfL1HfLlDwZDSD1POEswQUg7D486jPLr+o0yz3qL8s+oOCCPgLqG8vNiRM+ROBBr+BFPgPg/68+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MAGEeRcvT/F5MAIvPIVvJrcBAAA+t7zLEbrLED6/vcsRu8sQPj+8P8sRuj/LEL0/yxG7P8sQeLHIeKHAebcgB3xiV31rX3jLH9L/HD5AlU97lW96lPUwAi88R6/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGcsRyxeVMAGFyxHLF5UwAYXLEcsXlTABhcsRyxeVMAGFyxHLF5UwAYXLEcsXlTABhcsRyxeVMAGFyxHLF5UwAYV5Fy9P8XkwAi88hGcuQMMxHMsf0pcdPkCUT3qUZ3uV9TACLzxHr8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZyxHLF5QwAYTLEcsXlDABhMsRyxeUMAGEyxHLF5QwAYTLEcsXlDABhMsRyxeUMAGEyxHLF5QwAYTLEcsXlDABhHkXL0/xeTACLzyFbyZAwzEcyx/SoRt91r9PfZNvepT1MAIvPEevyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxnLEcsXlTABhcsRyxeVMAGFyxHLF5UwAYXLEcsXlTABhcsRyxeVMAGFyxHLF5UwAYXLEcsXlTABhcsRyxeVMAGFeRcvT/F5MAIvPIRnLr/DMRz//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////3q8MAVUZ3tdb3u90pdAfZNPepRfkTA+V3nLPy88g+CDPn+R5YdPbyYARCkpKQkBkVIJweV41kAXb3nWQB8fH+YPZ/CChGd55gcGB/YITwpP8INHLMl5S1+RV3nLPy88g+CDPneR5YdPbyYARCkpKQkBklsJweV41kAXb3nWQB8fH+YPZ/CChGd55gcGB/YITwpP8INHLMmVT3qUX5EwPld5yz8vPIPggz5/keWHT28mAEQpKSkJAR9BCcHleNZAF2951kAfHx/mD2fwgoRneeYHBgf2CE8KT/CDRyzJeUtfkVd5yz8vPIPggz53keWHT28mAEQpKSkJASBKCcHleNZAF2951kAfHx/mD2fwgoRneeYHBgf2CE8KT/CDRyzJfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkyX6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALMl+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASXJfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsyf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wHRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyIxDsrh+eEWwxgNIf3Er+oLyuoMyiwsLPCPPcjgj14sGrcqKPDGeeCT+g3Ktygm+gvKPP4DIAI+AeoLyiAH+gzKPOoMyvoMyl8WyvCT1nkSe8bH4JMqTypHKuUmxl+Hh4M8PG8qX1Z5h4eBPDxveE4sh4eARjw8bypmb3y6OAViV31rX3y4OAVgR31pT3q4OAVQR3tZT3iU4JR8h+CV5dXFr+CSzUpifeCS0eHVzUpi0eE+AeCSzUpi8JRfPniTZy5Hr8sdMAGEH8sdMAGEH8sdMAGEH8sdMAGEH8sdMAGEH8sdMAGEH8sdMAGEH8sdMAGEH8sdxkBnCA7KMQDC5fCVb8l7vTBVfZNPepRfkTAkV3nLPy88Rz5/kU3Fh09vJgBEKSkJAfdiCcHlJsLwkm94BoDJeUtfkVd5yz8vPEc+d5FNxYdPbyYARCkpCQH4ZwnB5SbC8JJveAaAyZVPepRfkTAkV3nLPy88Rz5/kU3Fh09vJgBEKSkJAalsCcHlJsLwkm94BoDJeUtfkVd5yz8vPEc+d5FNxYdPbyYARCkpCQGqcQnB5SbC8JJveAaAyYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNyXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDcmDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDMlxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggzJxg+Hh+oawXovpl96obMiei+mX3qgszIkeRgAInAtJCJwLSQicC0kInAtJCJwLSQicC0kInAtJCJwLSQicC0kInAtJCJwLSQicC0kInAtJCJwLSQW/8n///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+qqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVACEzDDPAABIAEjPAMwwAIQAhMwwzwAASABIzwDMMACEAITMMM8AAEgASM8AzDAAhACEzDDPAABIAEjPAMwwAIQAhMwwzwAASABIzwDMMACEAITMM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cAkicAkicAkicAkicAkicAkicAkicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCSJwCSJwCSJwCXIscAl7InAJInAJInAJInAJInAJInAJInAJInAJInAJLCwly2XIJGjJycnJyeEicAkicAkicAkicAkicAkicAkicAlyLHAJeyJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSwsJctlyCRoycnJycnhInAJInAJInAJInAJInAJInAJInAJInAJcixwCXsicAkicAkicAkicAkicAkicAkicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCXIscAl7InAJInAJInAJInAJInAJInAJLCwly2XIJGjJycnJyeEicAkicAkicAkicAkicAkicAkicAkicAkicAkicAlyLHAJeyJwCSJwCSJwCSJwCSJwCSwsJctlyCRoycnJycnhInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJcixwCXsicAkicAkicAkicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCXIscAl7InAJInAJInAJLCwly2XIJGjJycnJyeEicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAlyLHAJeyJwCSJwCSwsJctlyCRoycnJycnhInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJcixwCXsicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCXIscAl7LCwly2XIJGjJycnJydE+t5LI4IXmB8RSRPCFHx8focjlzTJE4XkicCwicCwicCwicCwicCwicCwicCwicCzJ+ABUXWhHeZAfyx1nATNZCfCCMQCv/qAoAzEAvwH/AOlHPgeQVF1HDjOvyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxlHIbRXCeViaz7/AQ8Ayfoay2/6G8uFZ/4UIAU+/y0YBtbsIAU8LOoby3zqGsvNr2AhlEbNyhDwpMagV/Cjxn9f1SGXRs3KEPCkxqBn8KPGf2/RzTEcKAsf2hhZH9oYWcPERny6OAViV31rX+XNmkbh1Xu90sxFe9ZA4Ih9k0884Il6lF/ghjzgij2RMGvgh3nLPy88g+CF8IIBDwBvVHzWQBfLN6GFZ3rmBxdvGAjwij3KAETgivCJX/CGV/CFGASCHSgLy38g+Ffwh4LghR3NYkUY2nvgifCIg1/l5gf2CG8mB1Z7aB8fHx/LHR/LHeYDxkBnrx7/6XnghpPgh3vLPy88geCF8IIBDwBvVHzWQBfLN6GFZ3rmBxdv8Ilf8IZX8IXLfyAHV/CHgh0YAYLghc1iRfCKPcoAROCKGN171kDgiHuVTzzgiXqUX+CGPOCKPZEwa+CHecs/LzyD4IXwggEPAG9UfNZAF8s3oYVneuYHF28YCPCKPcoAROCK8Ilf8IZX8IUYBIIdKAvLfyD4V/CHguCFHc0qRhjae+CJ8IiTX+XmB/YQbyYHVntoHx8fH8sdH8sd5gPGQGc+/1jpeeCGk+CHe8s/LzyB4IXwggEPAG9UfNZAF8s3oYVneuYHF2/wiV/whlfwhct/IAdX8IeCHRgBguCFzSpG8Io9ygBE4IoY3UYAALoAAHzWQMhPHx8f5h9HeeYHKAsE/gUwBvUhylblBT4PkCHJRoRn5fCCZ69vyfCCZ69vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIsnxAQ8APcqEVz0odj0oOj0idwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwksLCXLZSgCJGgidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwksLCXLZSgCJGgidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwksLCXLZSgCJGgidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkid8kicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAloyfgAVF3wgjEAr/6gKAMxAL8B/wDFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcVia/nJJgJ+4JovPOCYfcZAb37gl+Cbr+CZ4JzgneCePkDgn8n/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Aw==';

// End of realtime.js file.

////////////////////////////////////////////////////////////////////////////////
// Runner
////////////////////////////////////////////////////////////////////////////////

var o274 = true;

function o40(name) {
}

function o67(name, o68) {
  o0.o1(name + " : ERROR : " +o68.o992);
  o274 = false;
}

function o62(name, o45) {
  if (o274) {
    o0.o1("### SCORE:", o45);
  }
}

function o44(o45) {
}

o23.o33({
        o40 : o40,
    o67 : o67,
    o62 : o62,
    o44 : o44
});
