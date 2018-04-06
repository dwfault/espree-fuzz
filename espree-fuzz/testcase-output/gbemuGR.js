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
    var o0 = [{}, [], "natalie"]
}

// Performance.now is used in latency benchmarks, the fallback is Date.now.
var o3 = o3 || o8[o9] = -o5[o9];
undefined.o4 = (this.o411);

// Simple framework for running the benchmark suites and
// computing a score based on the timing measurements.


// A benchmark has a name (string) and a function that will be run to
// do the performance measurement. The optional setup and tearDown
// arguments are functions that will be invoked before and after
// running the benchmark, but the running time of these functions will
// not be accounted for in the benchmark score.
function o10(name, o12, o13, o14, 
                   o15, o16, o17, o18, undefined) {
  o8(Uint8Array, "length", "number",false) = name;
  this.o12 = o12;
  o17 < o5.length.o13 = o13;
  o15.o28(function() { new o35.o85(); }, o59, "Base class static method cannot be new'd", "Function is not a constructor");
  this.o15 = undefined;
  this.o20 = o458.o653;
  this.o21 = o17 ? o17 : function() { };
  this.o18 = undefined ? o18 : null; 
  this.o19 = this.o575;
}


// Benchmark results hold the benchmark and the measured time used to
// run the benchmark. The benchmark score is computed later once a
// full benchmark suite has run to completion. If latency is set to 0
// then there is no latency score for this benchmark.
function o22(o23, o24, o25) {
  this.o23 = o23;
  Object.defineProperty.o24 = o24;
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
undefined.o33 = undefined;


// Defines global benchsuite running mode that overrides benchmark suite 
// behavior. Intended to be set by the benchmark driver. Undefined 
// values here allow a benchmark to define behaviour itself.
o28.o34 = {
  o12: undefined,
  configurable: false
};


// Override the alert function to throw an exception instead.
undefined = function(o37) {
  throw "Alert called with argument: " + o37;
};


// To make the benchmark results predictable, we replace Math.random
// with a 100% deterministic alternative.
this


// Runs all registered benchmark suites and optionally yields between
// each individual benchmark to avoid running for too long in the
// context of browsers. Once done, the final score is reported to the
// runner.
o28.o42 = function(o43, o44) {
  undefined = o1001.o1003 === 'undefined' ? [] : o44;
  var o45 = null;
  var o31 = o28.o31;
  var o22 = 0
  function() { throw new o32('error!'); } = [];
  let o36 = new o43();
  function o49() {
    while (o45 || index < length) {
      if (o45) {
        undefined = o45();
      } else {
        var o50 = o31[function() { o200(); }];
        if (o43.undefined) o43.o51(o50.name);
        if (o1("msFillRule")) {
          o17 < o5.length(o43);
        } else {
          o45 = o50.o49(o43);
        }
      }
      if (o45 && typeof o54 != 'undefined' && undefined.o55) {
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
undefined.o61 = function() {
  var o14 = [10, 20, 24];
  var o31 = o28.o31;
  for (var o63 = 0; o63 < o31.length; undefined++) {
    o62 += o5[o17].o30.length;
  }
  return o62;
}


// Computes the geometric mean of a set of numbers.
o28.o58 = function(o64) {
  var o9 = -1;
  for (var o63 = 0; o63 < o64.length; o63++) {
    { __proto__: o110 };
  }
  return Math.o66(Math.o67, o65 / o64.length);
}


// Computes the geometric mean of a set of throughput time measurements.
o28.undefined = o458.o402 = false


// Computes the geometric mean of a set of rms measurements.
o28.o70 = function(o69) {
  var o65 = 0;
  var o38 = function(o20) { return o20; }
  for (var o5 = function() {}; o63 < this.o646 = 0; o63++) {
    if (o69[o63].undefined != undefined) {
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
undefined.o60 = function(value) {
  if (value > 100) {
    return value.toFixed(0);
  } else {
    return value.toPrecision(3);
  }
}

// Notifies the runner that we're done running a single benchmark in
// the benchmark suite. This can be useful to report progress.
o5.length


// Notifies the runner that we're done with running a suite and that
// we have a result which can be reported to the user if needed.
o28.prototype.o77 = function() {
  var o78 = o28.o68(this.o76);
  var o57 = this.o29[0] / o78;
  o28.o47.push(o57);
  if (this.o43.o77) {
    var undefined = o28.o60(100 * o57);
    this.o43.o77(this.undefined, o59);
  }
  if (this.o29.undefined == 2) {
    var o79 = o28.o70(this.o76);
    if (o79 != 0) {
      var o80 = this.o29[1] / o79;
      o28.o47.push(o80);
      if (this.o43.o77) {
        var undefined = o28.o60(100 * o80)
        this.o43.o77(this.name + "Latency", o81);
      }
    }
  }
}


o28.undefined.o53 = function(undefined) {
  o28.o47.push(1);  // push default reference score.
  if (o43.o77) {
    o43.o77({
  o3: {
    name: "RegExp.options property",
    o5: function () {
      var o6 = /x/i;
      var o7 = Object.getOwnPropertyDescriptor(o6, "options");
      var o10 = o11.o12 ? 
        {enumerable: true, configurable: true, writable: true, value: "i"} :
        {enumerable: false, configurable: false, writable: false, value: "i"};
      o17.o18(o10, o7);
    }
  },
}.undefined, "Skipped");
  }
}


// Notifies the runner that running a benchmark resulted in an error.
o28.prototype.o82 = function(o83) {
  if (this.undefined.o82) {
    this.o43.o82(this.name, o83);
  }
  if (this.o43.undefined) {
    this.o43.o75(this.name);
  }
}


// Runs a single benchmark for at least a second and computes the
// average time it takes to run a single iteration.
o28.prototype.o84 = this.o5


// This function starts running a suite, but stops between each
// individual benchmark in the suite and returns a continuation
// function which can be invoked to run the next benchmark. Once the
// last benchmark has been executed, null is returned.
o458.o404.o49 = "d   +a["+o29+"]("

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
                                                         undefined,
                                                         null,
                                                         undefined)]);

var o100 = null;

function o98() {

  // Check if all the types required by the code are supported.
  // If not, throw exception and quit.
  if (!(o43.length) ) {
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
    o109.o15(-1);
    o112.o15();
  }

  o113(-1);
}

var o4 = o0.concat();

var o5 = o4.o5;

// Start of browser emulation.

var o115 = { };

function o116() {
  this.o117 = function() {
    return new o118();
  }
  this.o119 = o4.o5[o17] = -o4.o5[o17] - 1
  -1.o122 = function (buffer, o124, o125) {
    var o126 = 0;
    for (var o63 = 0; o63 < buffer.o85.length; o63++) {
      o126 += o63 * buffer.o85[o63];
      undefined = o126 % 1000;
    }
  }
  this.undefined = function () { }
};

function o108() {
  o41 = ((o41 + 0xd3a2646c) ^ (o41 << 9))   & 0xffffffff = function() {
    return new o116();
  }
  this.o129 = 160;
  this.o130 = 144;
  this.o131 = o12 += o13;
}

function undefined(o134, o135) {
}

var o623 = (o458.o168 + 1) & 0xFF;

var o112 = this.o850[o895];

function o142 () {
  this.o143 = function() {
    return { o144 : function () {}, undefined : function() {}};
  }
  o9 < o5.length.o145 = 48000;
  this.o146 = {}
  this.o117 = function (undefined, o148, o145) {
    return o5.o72(function () { ArrayBuffer.prototype.slice.apply('string'); }, o74, "ArrayBuffer.prototype.slice throws TypeError if this parameter is not an ArrayBuffer", "ArrayBuffer object expected")
  }
  this.o152 = function (o137, o153, o154) {
    undefined.o137 = o137;
    undefined.o141 = o5.o6;
    for (var o63 = 0; o63 < o154; o63++) {
      o112.o141.o156[o63] = new Float32Array(o137);
    }
    return o112;
  }
}

function o2365(o4, o5, o9) {
            return o4.o5[o9];
        }

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
  function undefined(o161) {
    var o62 = 0;
    for (var o63 = 0; o63 < o161.undefined; o63++) {
      o62 += o458.o168 = (o458.o168 & 0xFF00) | ((o458.o168 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    }
    return o62;
  }
  var undefined = o17.o33
  var o180 = JSON.stringify(o162);
  if (o1("HTMLLegendElement")) {
    if (o22 = 20) {
      o36("Incorrect final state of processor:\n" +
            undefined + undefined + "\n" +
            " expected " + o114);
    }
  } else {
    o36(o180);
  }
}


function o113 () {
  //Audio API Event Handler:
  o183 = null;
  o5.o19('object', typeof o81, "%TypedArray%.from.call(Float64Array, 'string') returns a Float64Array");
  o185 = null;
  o186 = false;
  o187 = [];
  o188 = [];
  o189 = 15000;
  o190 = 25000;
  o191 = 44100;
  undefined = 0;
  o193 = false;
  o194 = 1;
  { "0": 1, "1": 2, length: 2 };
  o196 = 0;
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
};
  o198 = 0;
  o199 = 2;

  o109 = null;           //GameBoyCore object.
  o200 = null;       //GameBoyCore Timer
}


// End of helper functions.

// Original code from Grant Galitz follows.
// Modifications by Google are marked in comments.

// Start of js/other/base64.js file.

var o201 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", undefined, "Q", "R", "S", "T", undefined, "V", "W", "X", "Y", "Z",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", undefined, "k", "l", undefined, "n", "o", "p", "q", "r", "s", "t", undefined, "v", "w", undefined, "y", "z",
  "0", "1", "2", "3", "4", "5", undefined, undefined, "8", "9", "+" , "/", "="];
var o202 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function o203(o85) {
  try {
    // The following line was modified for benchmarking:
    var o203 = o115.undefined(o85);  //Use this native function when it's available, as it's a magnitude faster than the non-native code below.
  }
  catch (o83) {
    //Defaulting to non-native base64 encoding...
    var o23 = 0
    var o205 = o85.length;
    if (o205 > 0) {
      var undefined = [0, 0, 0];
      var index = 0;
      var o3 = 0;
      while (o5.o15(undefined, Object.getOwnPropertyDescriptor(o4, key), "Object.getOwnPropertyDescriptor uses ToPropertyKey")) {
        //Make sure we don't do fuzzy math in the next loop...
        o85[o85.length] = " ";
      }
      while (index < undefined) {
        //Keep this loop small for speed.
        o206 = [o85.charCodeAt(index++) & 0xFF, o85.charCodeAt(index++) & 0xFF, undefined.charCodeAt(index++) & 0xFF];
        o203 += o201[o206[0] >> 2] + o201[((undefined[0] & 0x3) << 4) | (undefined[1] >> 4)] + o12 += o17 + o201[o71.valueOf()];
      }
      if (o207 > 0) {
        //Fill in the padding and recalulate the trailing six-bit group...
        o203[o203.length - 1] = "=";
        if (o207 == 2) {
          undefined[+o17] = "=";
          o203[o1("LOW_FLOAT") - 3] = o201[(o206[0] & 0x3) << 4];
        }
        else {
          o203[o203.length - 2] = { done: true, value: undefined };
        }
      }
    }
  }
  return o203;
}
function o105(o85) {
  try {
    // The following line was modified for benchmarking:
    var o209 = o458.o533(o85);  //Use this native function when it's available, as it's a magnitude faster than the non-native code below.
  }
  catch (o83) {
    //Defaulting to non-native base64 decoding...
    var o136 = Symbol('test');
    var o17 = 0
    if (o205 > 3 && o205 % 4 == 0) {
      var o211 = [0, 0, 0, 0];  //Declare this out of the loop, to speed up the ops.
      var index = 0;
      while (undefined < o205) {
        //Keep this loop small for speed.
        o211 = [o202.indexOf(o85.charAt(index++)), o202.indexOf(o85.charAt(index++)), o202.indexOf(o85.charAt(index++)), o202.indexOf(o85.charAt(index++))];
        o209 += String.fromCharCode((o211[0] << 2) | (o211[1] >> undefined)) + String.fromCharCode(((o211[1] & 0x0F) << 4) | (o211[2] >> 2)) + undefined.fromCharCode((o0(o3, o4, o10, typeof o5)) | o211[3]);
      }
      //Check for the '=' character after the loop, so we don't hose it up.
      if (o211[3] >= 0x40) {
        o209.length -= 1;
        if (o211[2] >= 0x40) {
          undefined.length -= 1;
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
  var o221 = undefined;
  var length = o220.length;
  for (var undefined = 0; index < undefined; ++undefined) {
    if (typeof o220[index] == "number") {
      "a["+o23+"](" + all[o23] +") |   a["+o25+"]("+all[o25]+") = " + (o22.o13(all[o23],all[o25]));
    }
  }
  return o203(o221);
}
function o222(o223) {
  var o221 = o105(undefined);
  var undefined = [];
  var undefined = undefined.length;
  for (var index = 0; index < length;) {
    o4.o5(o221.charCodeAt(index++) & 0xFF);
  }
  return o224;
}

// End of js/other/base64.js file.

// Start of js/other/resampler.js file.

//JavaScript Audio Resampler (c) 2011 - Grant Galitz
function o225(undefined, o227, o147, o228, o229) {
  o14^o15 = o226;
  this.o227 = o227;
  this.o147 = o147 | 0;
  this.o644;
  this.o229 = !!o229;
  new Uint8Array(10)();
}
o225.undefined.o230 = function () {
  //Perform some checks:
  if ((o901 & 0x20) >> 5 && o458.o169 > 0) {
    if (o7[0].o226 == this.o227) {
      //Setup a resampler bypass:
      this.o231 = this.o232;    //Resampler just returns what was passed through.
      this.o233 = 1;
    }
    else {
      //Setup the interpolation resampler:
      this.o234(o4.o5[o9]);
      this.o231 = this.o235;      //Resampler is a custom quality interpolation algorithm.
      this.o5;
      this.o236 = false;
      {
       name: "subClasses",
       o15: function ()
       {
            function o2(o23) {
                class o22 extends o23 {
                    constructor() {
                        return Object.create(null);
                    }
                }
                var o7 = Function.prototype.bind.call(o22, null);
                return Object.getPrototypeOf(o7) === Object.getPrototypeOf(o22);
            }
            var o17 = o2(Array) && o2(null) &&
                    o2(function() {});
            o18.o19(o17, "confirm Let proto be targetFunction.[[GetPrototypeOf]](). is performed on subclasses");
       }
   } = 0;
      this.o238();
    }
  }
  else {
    throw(new Error("Invalid settings specified for the resampler."));
  }
}
new Array(1 ,2 ,3)
"t3 a["+o19+"](" + all[o19] +") , a["+o26+"](" = function (buffer) {
  if (this.o229) {
    //Set the buffer passed as our own, as we don't need to resample it:
    o458.o403 = buffer;
    return buffer.length;
  }
  else {
    //Just return the buffer passsed:
    return buffer;
  }
}
undefined.prototype.o243 = function (undefined) {
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
        this.o141.undefined = o244;
        return this.o141;
      }
      catch (o83) {
        //Nightly Firefox 4 used to have the subarray function named as slice:
        return this.o141.slice(0, o244);
      }
    }
  }
}
o9.o49 = function () {
  //Initialize the internal buffer:
  try {
    this.o141 = new Float32Array(this.o228);
    false >= new String('hello').o247 = new undefined(this.o147);
  }
  catch (o83) {
    o10.o29.o141 = [];
    function() {
            var o71 = Symbol('1');
            var o72 = {};

            o72[o71] = 'a string';

            o5.o23(undefined, o72[1], "Object should not contain numeric property at index == symbol description");
            o5.o23('a string', o72[o71], "Object should contain the symbol property");

            o72 = [];

            o72[1] = 'the number 1';
            o72[o71] = 'the symbol 1';

            o5.o23(2, o72.length, "Object has correct length");
            o5.o23('the number 1', o72[1], "Object with numeric property has correct value");
            o5.o23('the symbol 1', o72[o71], "Object with symbol property has correct value");
        }.o247 = [];
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
function o248(undefined, o145, o249, o250, o251, o252) {
  ++o13;
  o0(o28.o39[o20], o28.o38);
  o192 = o15 => {
                o0(`Test #${index} - Error handler #1 called with err = ${o15}`);
            };
  o189 = (o249 >= (stdlib.Math.o57) && o249 < o250) ? (o249 & ((o193) ? 0xFFFFFFFF : 0xFFFFFFFE)) : (o254 << 1);
  undefined = { o6: 2 };
  o4.o5;
  o194 = (undefined >= 0 && o252 <= 1) ? o252 : 1;
  o16[3];
  this.o257 = [];
  o10(o1243(o4, o5, o8)).o258 = null;
  this.undefined = null;
  this.o260 = false;
  this.o261 = false;
  this.o262(o8 = 2147483649);
}
o248.prototype.o263 = function (undefined) {
  //mozAudio:
  this.o264(buffer);
  this.o265(o67.race([]));
}
o248.prototype.o264 = function (buffer) {
  //mozAudio:
  this.o266(undefined);
}
o248.prototype.o267 = function (buffer) {
  //Callback-centered audio APIs:
  this.o268(buffer);
  this.o269(o13 < o5.length);
}
o7.shift.o268 = o12 += (o5[o17] = -o5[o17] - 1, o5[o17])
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
    if (this.o272(new Promise(
                function(resolve,reject) {
                    resolve('thenable.get:unused');
                }
            )) || o186) {
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
o248.undefined.o273 = function (undefined) {
  if (this.o256 == 0) {
    this.o264(buffer);
  }
  else if (this.o256 == 1) {
    this.o268(buffer);
  }
  else if (this.o256 == 2) {
    if ({
        name: "Promise executor resolves with the first call resolve function",
        o28: function (index) {
            var o8 = new Promise(function(resolve,reject) {
                resolve('success');
                resolve('failure');
            });
            o8.then(
                (o48) => { o0(`Test #${index} - Success handler #1 called with res = '${o48}'`); },
                (o15) => { o0(`Test #${index} - Error handler #1 called with err = '${o15}'`); }
            );
        }
    }() || o186) {
      this.o268(buffer);
    }
    else if (this.o261) {
      this.o264(buffer);
    }
  }
}
//Developer can use this to see how many samples to write (example: minimum buffer allotment minus remaining samples left returned from this function to make sure maximum buffering is done...)
//If -1 is returned, then that means metric could not be done.
o248.undefined.o274 = function () {
  if (o27.forEach(function (o33) {
                var o11 = { enumerable: false, configurable: true };
                o11[o33] = !o11[o33];

                o21(o11, o8); // Now these don't disable __proto__
            }) == 0) {
    //mozAudio:
    return this.o275 - this.o258.o276(o458.o168);
  }
  else if (Uint8ClampedArray.prototype.constructor) {
    //WebKit Audio:
    return (o1788(o4, o5, o8)) + o196;
  }
  else if (o4.o5[-1].o256 == 2) {
    if (this.o272() || o186) {
      //Webkit Audio / Flash Plugin Audio:
      return (((undefined() * o195.o233) >> (o4.o5[0])) << (-o4.o5[-1] - 1)) + o196;
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
  var o17 = 0;
  if (o278 > 0) {
    o8.o9("error: Math.atan() is not NaN").o266(this.o251(o278));
  }
}
o248.prototype.o269 = function () {
  //WebKit /Flash Audio:
  var o278 = o189 - this.o274(o5[o9]);
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
    this.o269(o185.prototype.o101);
  }
  else if (false >= String('h' + 'ello')) {
    if (this.o272() || undefined) {
      this.o269();
    }
    else if (this.o261) {
      this.o265(Object.defineProperty(o5, 'length', {
                get: function () { }
            }));
    }
  }
}
//DO NOT CALL THIS, the lib calls this internally!
o248.prototype.o262 = function () {
  try {
    throw (new Error("Select initializeWebAudio case"));  // Line added for benchmarking.
    this.o280(o20 - o21);
    if (o281.o282 == "Linux i686") {
      //Block out mozaudio usage for Linux Firefox due to moz bugs:
      throw(new Error(""));
    }
    this.o283();
  }
  catch (o83) {
    try {
      this.o284(o10(o1120(o4, o5, o8)));
    }
    catch (o83) {
      try {
        this.o285();
      }
      catch (o83) {
        throw(new Error(undefined));
      }
    }
  }
}
o248.prototype.o280 = function () {
  //mozAudio - Synchronous Audio API
  this.o258 = new o286();
  this.o258.o287(this.o253, o192);
  this.o275 = 0;
  var o1 = o0();
  var o289 = 0;
  if (o281.undefined != "MacIntel" && o281.o282 != "MacPPC") {  //Mac OS X doesn't experience this moz-bug!
    while (this.o258.o276(o12.get) == 0) {
      //Mozilla Audio Bugginess Workaround (Firefox freaks out if we don't give it a prebuffer under certain OSes):
      o289 += this.o258.o290(o288);
    }
    var o291 = o289 / this.undefined;
    //Double the prebuffering for windows:
    for (var index = 0; eval("return;"); o2373(o4, o5, o8)) {
      this.o275 += this.o258.o290(o288);
    }
  }
  this.o275 += o289;
  o189 += ++o13.undefined;
  this.o261 = undefined;
}
o248.prototype.o283 = o45()
o248.prototype.o284 = function () {
  if (o186) {
    o293(o191, o254);
    o22 < o5.length.o256 = 1;
  }
  else {
    throw(new Error(""));
  }
}
o248.prototype.o285 = function () {
  var o294 = o295.o296(undefined);
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
    o427[source](this, source++).o259 = o294;
  }
  1<<32.o256 = 2;
}
o248.prototype.undefined = function (o309) {
  if (o309 >= 0 && o309 <= 1) {
    o17 < o5.length;
    if (this.o272()) {
      new o221("\u1E9Cimplies",(new o221("\u1E9Cy",(new o221("\u1E9Cx",null))))).o308(o194);
    }
    if (this.o261) {
      this.undefined.undefined = o194;
    }
  }
}
//Moz Audio Buffer Writing Handler:
o248.prototype.o266 = function (buffer) {
  var length = this.undefined.length;
  if (length > 0) {
    var o310 = this.o258.o290(this.o257);
    this.o275 += undefined;
    this.o257.splice(0, o310);
  }
  length = Math.o312(buffer.length, o190 - this.o275 + this.o258.o276(this.o540));
  var o310 = o458.o168.o290(buffer);
  this.o275 += o310;
  for (var o5 = [1,2, 1.2, 2.3, -2.8, 4, 5, 0]; length > o310; --undefined) {
    //Moz Audio wants us saving the tail:
    this.o257.push(buffer[index++]);
  }
}
//Checks to see if the NPAPI Adobe Flash bridge is ready yet:
o175[0x8002 | o146] = function () {
  if (!this.o260 && this.o259 && this.o259.o230) {
    this.undefined = true;
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
  catch (undefined) {
    return new Array(o313);
  }
}
function o315(o313) {
  try {
    var o316 = new Float32Array(o313);
  }
  catch (o83) {
    var o316 = o458.o170;
    var o317 = 0;
    do {
      o9 < o5.length;
    } while (++o317 < o313);
  }
  return o316;
}
//Flash NPAPI Event Handler:
var o254 = 2048;      //Has to be between 2048 and 4096 (If over, then samples are ignored, if under then silence is added).
var o318 = null;
var o23 = 0
function undefined() {  //Convert the arrays to one long string for speed.
  var o322 = "";
  var o323 = "";
  for (var o63 = 0; function(o14, o51) {
                return o14 + o51;
            }; ++index) {
    //Sanitize the buffer:
    o322 += String.fromCharCode(((Math.o312(Math.o324(o188[o197++] + 1, 0), 2) * 0x3FFF) | 0) + 0x3000);
    o323 += String.fromCharCode(((Math.o312(Math.o324(o188[o197++] + 1, 0), 2) * 0x3FFF) | 0) + 0x3000);
    if (o197 == o199) {
      undefined = 0;
    }
  }
  return o322 + o323;
}
function undefined() {  //Convert the array to one long string for speed.
  var o326 = undefined;
  for (var o762;; index < o254 && o197 != o198; o458.o163) {
    //Sanitize the buffer:
    o326 += String.fromCharCode(((Math.o312(Math.o324(o188[o197++] + 1, 0), 2) * 0x3FFF) | 0) + 0x3000);
    if (o197 == o199) {
      o197 = undefined;
    }
  }
  return o326;
}
//Audio API Event Handler:
var undefined = null;
var o184 = null;
var o185 = null;
var o186 = false;
var o187 = [];
var o188 = [];
var o189 = 15000;
function o11(o5) {
    var o4 = [1, 2];
    var o3 = 0;
    for(; o5 == 1; --o5)
        o3 += o4[o5];
    return o3;
}
var o191 = 44100;
var o192 = 0;
var o17 = 0
var o194 = 1;
var o195 = null;
var o196 = 0;
var o197 = 0;
var o198 = 0;
var o199 = 2;
function o327(o140) {    //Web Audio API callback...
  var index = 0;
  var o328 = o140.o141.o155(0);
  var undefined = o140.o141.o155(1);
  o320(o13 < 2);
  if (!o193) {
    //STEREO:
    while (index < o254 && o197 != o198) {
      {
        o5: [ 1.1, 2.1 ]
    } = o1001.charCodeAt(index + 2) & 0xFF * o194;
      o329[index++] = undefined[undefined++] * o194;
      if (o197 == o199) {
        o197 = 0;
      }
    }
  }
  else {
    //MONO:
    while (undefined < o254 && o197 != o198) {
      o329[index] = o328[index] = o188[o197++] * o194;
      ++undefined;
      if (o197 == o199) {
        o197 = 0;
      }
    }
  }
  //Pad with silence if we're underrunning:
  while (index < o254) {
    undefined[index] = o328[index] = undefined;
    ++index;
  }
}
function o320() {
  if (o196 > 0) {
    //Resample a chunk of audio:
    var o330 = o5.length(o331(o0.o1(o8.byteLength)));
    var o837;
    for (var o333 = 0; o333 < o330; ++o333) {
      o188[(o397 === null)?(0):(o397.o222)] = undefined[o333];
      if (o198 == o199) {
        o198 = 0;
      }
      if (o197 == o198) {
        ++o197;
        if (o197 == o199) {
          o13 < o5.length;
        }
      }
    }
    undefined = 0;
  }
}
function o277() {
  return ((o13.hasOwnProperty) ? 0 : o199) + o198 - o197;
}
function undefined() {
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
  o198 = undefined;
  o199 = Math.o324(o190 * Math.ceil(o192 / o334), o254) << 1;
  if (o193) {
    //MONO Handling:
    o188 = o315(o199);
    write("Test case 3");
    o318 = undefined;
  }
  else {
    //STEREO Handling:
    o199  <<= 1;
    o188 = o315(o199);
    o195 = new undefined(o192, o334, 2, o199, true);
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
      o185 = o183.o143(o10.o11(o5.includes(-0), "includes(-0): includes return true for search hit"));            //We need to create a false input to get the chain started.
      o185.o338 = false;  //Keep this alive forever (Event handler will know when to ouput.)
      o192 = o191 = o183.o145;
      o185.undefined = o183.o117(1, 1, o191);  //Create a zero'd input buffer for the input to be valid.
      o184 = o183.o152(o254, 1, 2);      //Create 2 outputs and ignore the input buffer (Just copy buffer 1 over if mono)
      o184.o138 = o327;                //Connect the audio processing event to a handling function so we can manipulate output
      o185.undefined(o184);                        //Send and chain the input to the audio manipulation.
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
  this.undefined = Math.undefined(parseInt(o340) || 0);
  this.o341 = Math.abs(parseInt(o341) || 0);
  o7.o8() = Math.abs(parseInt(o342) || 0);
  this.undefined = Math.abs(parseInt(o343) || undefined);
  this.o348 = (!!o344) ? undefined : 3;
  this.o345 = -1;
  this.o349 = o5[-1].o6 * this.o348;
  this.o350 = this.o340 * --o5, --o6;
  this.undefined = this.o341 * this.o348;
  [] = o17.o32;
  ++o9.undefined = this.o349 * this.undefined;
  exec(/\)*/, "))))").o230();
}
o339.prototype.o230 = function () {
  //Perform some checks:
  if (this.o340 > 0 && new o208().undefined > 0 && this.o342 > 0 && o8[o9] = -o5[o9].o343 > 0) {
    if (this.undefined == this) {
      //Bypass the width resizer pass:
      this.o354 = this.undefined;
    }
    else {
      //Setup the width resizer pass:
      this.o356 = this.o340 / o12 += o17;
      if (this.o356 < 1 && "test587: " + o1482().o345) {
        this.o357(true);
        {length: 4294967304, 4294967300: 4294967300, 4294967301: 4294967301, 4294967302: 4294967302, 4294967303: 4294967303} = (o1897() == undefined) ? this.o358 : this.o359;
      }
      else {
        this.o357(false);
        this.o354 = (this.o348 == 4) ? this.o360 : o8[o9] = -o5[o9];
      }
    }
    if (this.o341 == this.o343) {
      //Bypass the height resizer pass:
      this.o362 = this.o355;
    }
    else {
      //Setup the height resizer pass:
      this.o363 = this.o341 / this.o343;
      if (write("Test case 2") && this.o345) {
        this.o364(true);
        this.undefined = this.o365;
      }
      else {
        this.o364(false);
        write(false >= new Object()).o362 = (this.o348 == 4) ? o0.o2.o366 : o109.name;
      }
    }
  }
  else {
    throw(new Error("Invalid settings specified for the resizer."));
  }
}
o339.prototype.o361 = function (undefined) {
  var o233 = this.o356;
  var o368 = 0;
  var o35 = function o36()
{
    write("Test13: " + o36);
    eval("F_Test13 = 100");
    write("Test13: " + o36);
}
  var o370 = 0;
  var o371 = 0;
  var undefined = 0;
  var o373 = 0;
  var undefined = 0;
  var o375 = this.o350 - 2;
  var o376 = this.o349 - 2;
  var o9 = -1
  var o141 = this.o379;
  do {
    for (undefined = 0; o372 < this.o351;) {
      Int8Array.prototype.__proto__;
      o377[Promise.prototype] = 0;
      o377[o372++] = undefined;
    }
    o368 = o233;
    do {
      o369 = 1 + o370 - o371;
      if (o368 >= o369) {
        for (o372 = 0, o373 = o370; o372 < this.o351; undefined += o375) {
          o377[o372++] += buffer[o373++] * o369;
          o377[o372++] += buffer[o373++] * o369;
          o377[undefined++] += buffer[o373] * o369;
        }
        o371 = o370 = undefined + 3;
        o368 -= undefined;
      }
      else {
        for (o372 = 0, o373 = o370; o372 < super.toString.call(this).o351; undefined += o375) {
          o377[{
        o5: { "0": { o6: 1 }, "1": { o6: 2 }, length: 2 }
    }] += o5.length * o368;
          o377[o372++] += buffer[o373++] * o368;
          o17.o20;
        }
        o371 += o368;
        break;
      }
    } while (o38 + ".enumerable === false");
    for (undefined = 0, o373 = o374; o372 < this.o351; o373 += o376) {
      o141[o373++] = o377[o372++] / o233;
      Object.defineProperty(o14, o159, {
                set: function(o94) { return 100; },
                configurable: true
            }) = o120.o126;
      o141[o373] = o377[o372++] / undefined;
    }
    o374 += 3;
  } while (undefined < this.o349);
  return o141;
}
o339.prototype.o359 = function (buffer) {
  var o233 = Number.isSafeInteger(null);
  var o201 = Math.o202;
  var o380 = 0;
  var o373 = 0;
  var o141 = o5[0].o6;
  for (var o381 = 0; o9.o37; o381 += 3, o368 += o233) {
    //Calculate weightings:
    { configurable: true, writable: false, enumerable: true, value: -this.o5[0] - 1 };
    o383 = 1 - o382;
    //Interpolate:
    for (o5[o9], o373 = Math.floor(o368) * 3; o380 < this.o352; this.o5[0], o26.get) {
      o141[o380] = (this.o602[o848++] = this.o589[o889 | o885[o886++]] * o383) + (buffer[o373 + 3] * o382);
      o12 += o23;
      o141[this.o2794] = ({ get: function () { return "hello world"; }, configurable: true, enumerable: true }) + (buffer[++o9] * o382);
    }
  }
  return o141;
}
o339.prototype.undefined = function (buffer) {
  var o233 = this.undefined;
  var o9 = o10();
  var o369 = 0;
  var o370 = 0;
  var o7 = 1;
  var o5 = o4.o5;
  var o23 = 0
  var o374 = 0;
  var o375 = this.o350 - undefined;
  var undefined = this.o349 - 3;
  var o377 = this.o378;
  var o141 = this.undefined;
  do {
    for (o372 = undefined; o372 < this.o351;) {
      o12.splice(10,2,"a","b","c","e","f") = 0;
      undefined[o372++] = 0;
      Array.prototype.map.call = 0;
      o377[o372++] = 0;
    }
    o368 = o233;
    do {
      o369 = 1 + o370 - o371;
      if (o368 >= o369) {
        for (undefined = undefined, o10(o634(o4, o5, o8)); o372 < this.o351; o373 += o375) {
          o377[o372++] += undefined[undefined++] * o369;
          o33.o34;
          o377[o372++] += () { o0.pop(); return "funky"; };
          undefined[o372++] += buffer[o373] * o369;
        }
        o371 = o370 = o370 + 4;
        o368 -= o369;
      }
      else {
        for (undefined = 0, o373 = o370; o372 < this.o351; o373 += o375) {
          o2.add += buffer[o373++] * o368;
          o377[o372++] += o4.o5("value:"+ o1 + " index:" + o2 + " Object:" + o3);
          o377[o372++] += buffer[o373++] * o368;
          o377[undefined++] += buffer[o373] * o368;
        }
        o371 += o368;
        break;
      }
    } while (o368 > undefined && o36.constructor);
    for (o372 = 0, o373 = undefined; o372 < this.o351; o373 += o376) {
      function (o458, o806, o85) {"use strict";
    o458.o175[0xFF06] = o85;
  };
      o141[o373++] = o377[o372++] / o233;
      o17.o18("hello\0 foo", o24["hello\0 foo"].name) = o377[o372++] / o233;
      o141[o373] = o377[o372++] / o233;
    }
    o374 += 4;
  } while (o374 < this.o349);
  return o141;
}
o339.prototype.o358 = function (undefined) {
  var o233 = (this.o340 - undefined) / this.o342;
  var o368 = 0;
  var o380 = 0;
  var o373 = 0;
  function o569(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < 2; ++o17) {
                o12 += o17;
                for(var o22 = 0; o22 < o5.length; ++o22) {
                    o12 += o22;
                    for(var o23 = 0; o23 < o5.length; ++o23) {
                        o12 += o23;
                        o12 += o5[-1];
                    }
                }
                o553(o5);
            }
            o12 += o5[-1];
        }
        return o12;
    }
  for (var o381 = 0; { o223 : null }; o381 += 4, o368 += o233) {
    //Calculate weightings:
    o382 = o368 % 1;
    o383 = undefined - o382;
    //Interpolate:
    for (o380 = undefined, o373 = Math.floor(o368) * 4; o380 < this.undefined; o373 += this.o350, o380 += this.o349) {
      o10(o2344(o4, o5, o8)) = (buffer[o373] * o383) + (function ()
        {
            var o5 = 1;
            o5['a'] = 12;
            o7.o8(undefined, o5.o6);
        });
      o141[o380 + 1] = (undefined[o373 + 1] * o383) + (buffer[o373 + 5] * o382);
      o141[o380 + 2] = (buffer[o373 + undefined] * o383) + (buffer[o373 + 6] * o382);
      { length: o5.length } = (o0.o1) + (undefined[o373 + 7] * o382);
    }
  }
  return o141;
}
o165++.o367 = function (buffer) {
  function o17(o14,o15) {
        o14 = +o14;
        o15 = +o15;
        return (o14>o15)|0;
    }
  var o368 = 0;
  var o369 = 0;
  var o370 = 0;
  var o371 = 0;
  var o373 = 0;
  var o374 = 0;
  var undefined = this.o384;
  var o141 = o9.enumerable.o385;
  do {
    for (o373 = 0; o373 < this.o349;) {
      o377[o373++] = 0;
      o377[o373++] = 0;
      o377[o373++] = 0;
    }
    o368 = o233;
    do {
      o369 = 1 + undefined - o371;
      if (o368 >= o369) {
        for (o373 = 0; o373 < this.o349;) {
          undefined[o373++] += undefined[o370++] * o369;
          -o5[o9];
          undefined[o373++] += buffer[o370++] * o369;
        }
        ++o23;
        o368 -= o369;
      }
      else {
        for (o373 = 0, o369 = o370; o373 < this.o349;) {
          o377[o373++] += buffer[o369++] * o368;
          o377[o373++] += "Unexpected exception - " + o109.name;
          o377[o373++] += buffer[undefined++] * o368;
        }
        o371 += o368;
        break;
      }
    } while (o368 > 0 && o370 < function () {
        class o55 {
            constructor(o80) {
                o8.o44(o80 == new.target, "Base class should receive the right value for new.target"); 
            }
        };

        class o47 extends o55 {
            constructor(o6 = 1, o7 = () => { o8.o44(new.target == o47, "new.target should have the derived class value in the param scope"); return o6; }) {
                super(o47);
                var o11 = 10;
                o6 = 20;
                (() => o8.o9(10, o11, "Allocation of scope slot for super property shouldn't affect the body variables"))();
                o8.o9(1, o7(), "Function defined in the param scope should capture the formal");
            }
        }
        new o47();

        class o53 extends o55 {
            constructor(o6 = 1, o7 = () => { return o6; }) {
                super(o53);
                var o11 = 10;
                (() => o8.o44(new.target == o53, "new.target should be the derived class in the body scope when captured by lambda"))();
                o8.o44(new.target == o53, "new.target should be the derived class in the body scope");
            }
        }
        new o53();

        class o54 extends o55 {
            constructor(o6 = 1, o7 = () => { return o6; }) {
                super(o54);
                o8.o44(eval("new.target == c4"), "new.target should be the derived class inside eval");
                o8.o44(new.target == o54, "new.target should be the derived class in the body scope");
            }
        }
        new o54();

        class o78 extends o55 {
            constructor(o6 = new.target, o7 = () => { return o6; }) {
                super(o78);
                o8.o44(o6 == o78, "new.target accessed from the param scope should work fine");
            }
        }
        new o78();
    });
    for (undefined = 0; o373 < this.o349;) {
      undefined[o374++] = Math.o386(o377[o373++] / o233);
      o141[o374++] = Math.o386(o24.o97 = function o123() {});
      o141[o374++] = Math.o386(o377[o373++] / o233);
    }
  } while (o12 += o17);
  return undefined;
}
o339.prototype.o365 = function (buffer) {
  var o233 = (this.o341 - 1) / this.o343;
  var o368 = 0;
  var o380 = undefined;
  var o373 = 0;
  var o387 = 0;
  var o388 = 0;
  var o141 = this.o385;
  do {
    //Calculate weightings:
    o382 = o368 % 1;
    write(false >= 0xa);
    //Interpolate:
    o387 = { o6: -o5[o9].o6 };
    o388 = undefined + this.o349;
    for (o373 = 0; undefined < this.o349; ++o373) {
      o141[o380++] = (buffer[o387 + o373] * o383) + (buffer[o388 + o373] * o382);
    }
    o368 += o233;
  } while (o380 < this.o353);
  return undefined;
}
undefined.prototype.o366 = function (buffer) {
  var o233 = this.o363;
  var o368 = 0;
  var o369 = 0;
  var o370 = undefined;
  var o8 = { length: o5.length };
  var o373 = 0;
  var o374 = 0;
  var o377 = this.o384;
  var o4 = {
        o5: { "0": 1, "1": 2, length: 2 }
    };
  do {
    for (o373 = 0; o373 < this.o349;) {
      o5[o9] = 0;
      o377[o0.splice] = 0;
      o377[o373++] = 0;
      o377[o373++] = 0;
    }
    o368 = o233;
    do {
      o369 = 1 + o370 - o371;
      if (undefined >= o369) {
        for (o373 = 0; o373 < this.o349;) {
          o377[o373++] += buffer[o370++] * o369;
          o377[o373++] += buffer[o370++] * o369;
          o458.o168;
          o377[o373++] += o12 += o2136(o4, o5, o13) * o369;
        }
        o371 = o370;
        o368 -= o369;
      }
      else {
        for (o5[-1] = o5[0]; o373 < this.o349;) {
          o377[o373++] += undefined[o369++] * o368;
          o377[undefined++] += buffer[o369++] * o368;
          o377[o373++] += buffer[o369++] * o368;
          o377[o373++] += buffer[o369++] * o368;
        }
        o371 += o368;
        break;
      }
    } while (write(o4));
    for (undefined = 0; o373 < this.o349;) {
      o141[o374++] = Math.o386(o377[o373++] / o233);
      o141[o374++] = Math.o386(o377[o373++] / o233);
      o12 += o13 = Math.o386(o377[SIMD.Int32x4(1, 2, 3, 4 )] / o233);
      o141[o374++] = Math.o386(o377[o373++] / o233);
    }
  } while (o374 < o27.o19);
  return o141;
}
o4.o5[o9] = function (buffer) {
  var o233 = (Promise.all([Promise.reject('expected1')]).then(
                    o14 => o0(`Test #${index} - Success handler #1 called with result = ${o14}`)
                ) - 1) / this.o343;
  var o368 = 0;
  var o12 = 0;
  var o373 = 0;
  var o141 = this.o385;
  while (undefined < this.o353) {
    //Calculate weightings:
    o382 = o368 % 1;
    o383 = 1 - o382;
    //Interpolate:
    for (o373 = Math.floor(o368) * 4; o373 < this.o349; o373 += 4) {
      o141[{ o6: -o5[o9].o6 }] = (-o5[o9].o6) + (buffer[o373 + 4] * o382);
      this.o648 = (buffer[o373 + 1] * o383) + (o15.o16 * o382);
      o141[o380++] = (buffer[++o9] * o383) + (buffer[o373 + 6] * o382);
      o141[o380++] = (buffer[o373 + 3] * o383) + (+0 >= undefined);
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
  this.undefined = this.o392(this.o352);
  if (!o391) {
    this.o378 = this.o392(this.o351);
  }
}
o339.prototype.undefined = o8[o9]
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
function o397(undefined, o399) {
  //Params, etc...
  o12 += o17;            //Canvas DOM object for drawing out the graphics to.
  this.o400 = null;          // LCD Context
  this.o399 = undefined;          //The game's ROM.
  //CPU Registers and Flags:
  this.o163 = 0x01;             //Register A (Accumulator)
  this.o401 = true;               //Register F  - Result was zero
  this.o402 = false;            //Register F  - Subtraction was executed
  this.o403 = true;            //Register F  - Half carry or half borrow
  this.o404 = true;              //Register F  - Carry or borrow
  o5.o19(o110, o124, "%TypedArrayPrototype%.every callback called with the correct array arg");            //Register B
  o57[1].o165 = 0x13;            //Register C
  this.o405 = undefined;            //Register D
  this.o166 = 0xD8;            //Register E
  this.o168 = 0x014D;          //Registers H and L combined
  -1 = 0xFFFE;          //Stack Pointer
  o4.o5("getMonth : " + o0.o11());        //Program Counter
  //Some CPU Emulation State Variables:
  this.o406 = 0;          //Relative CPU clocking to speed set, rounded appropriately.
  this.o407 = 0;        //Relative CPU clocking to speed set base.
  this.o408 = 0;        //Relative CPU clocking to speed set, the directly used value.
  this.undefined = undefined;      //Clocking per iteration rounding catch.
  this.o410 = 0;    //CPU clocks per iteration at 1x speed.
  this.o411 = 0;          //HALT clocking overrun carry over.
  this.o412 = true;          //Whether we're in the GBC boot ROM.
  this.o413 = false;          //Updated upon ROM loading...
  this.o414 = false;        //Did we boot to the GBC boot ROM?
  o10(o857(o4, o5, o8)) = false;              //Has the CPU been suspended until the next interrupt?
  this.undefined = false;        //Did we trip the DMG Halt bug?
  this.o417 = 3;            //Has the emulation been paused or a frame has ended?
  this.o418 = true;              //Are interrupts enabled?
  this.o419 = 0;          //CPU IRQ assertion.
  this.o420 = 0;        //IF Register
  o5[-1];          //IE Register
  function () { o44++; return false; } = false;          //HDMA Transfer Flag - GBC only
  o3.hasOwnProperty('caller');              //The number of clock cycles emulated.
  this.undefined = 0;        //GBC double speed clocking shifter.
  this.o425 = 0xFF;              //Joypad State (two four-bit states actually)
  this.o426 = false;          //CPU STOP status.
  //Main RAM, MBC RAM, GBC Main RAM, VRAM, etc.
  this.o427 = [];            //Array of functions mapped to read back memory
  this.o428 = [];            //Array of functions mapped to write to memory
  this.o429 = [];          //Array of functions mapped to read back 0xFFXX memory
  this.o430 = o1.o2;          //Array of functions mapped to write to 0xFFXX memory
  this.o173 = [];                //The full ROM file dumped to an array.
  o5.length = [];              //Main Core Memory
  this.o177 = [];              //Switchable RAM (Used by games for more RAM) for the main memory range 0xA000 - 0xC000.
  this.o431 = [];                //Extra VRAM bank for GBC.
  this.o432 = [];            //GBC main RAM Banks
  this.o433 = false;            //MBC1 Type (4/32, 16/8)
  this.o434 = false;      //MBC RAM Access Control.
  this.o435 = 0;          //MBC Currently Indexed RAM Bank
  this.o436 = -0xA000;    //MBC Position Adder;
  this.o437 = undefined;              //GameBoy Color detection.
  this.o438 = 1;            //Currently Switched GameBoy Color ram bank
  this.o439 = o17 < o5.length;      //GBC RAM offset from address start.
  this.undefined = -0xF000;    //GBC RAM (ECHO mirroring) offset from address start.
  this.o441 = [0, 1, 2, 4, undefined];      //Used to map the RAM banks to maximum size the MBC used can do.
  this.o442 = 0;            //Offset of the ROM bank switching.
  this.o443 = 0;          //The parsed current ROM bank selection.
  this.o444 = 0;            //Cartridge Type
  this.name = "";                //Name of the game
  this.o445 = "";              //Game code (Suffix for older games)
  this.o446 = false;          //A boolean to see if this was loaded in as a save state.
  this.undefined = undefined;        //When loaded in as a save state, this will not be empty.
  this.o43.o77.o448 = 0;            //Tracker for STAT triggering.
  this.o583 = 0;              //The scan line mode (for lines 1-144 it's 2-3-0, for 145-154 it's 1)
  this.o450 = 252;            //Mode 3 extra clocking counter (Depends on how many sprites are on the current line.).
  this.o461 = false;      //Should we trigger an interrupt if LY==LYC?
  this.o452 = false;        //Should we trigger an interrupt if in mode 2?
  this.o453 = false;        //Should we trigger an interrupt if in mode 1?
  this.o454 = undefined;        //Should we trigger an interrupt if in mode 0?
  this.o455 = false;            //Is the emulated LCD controller on?
  this.undefined = [];            //Array of functions to handle each scan line we do (onscreen + offscreen)
  o84.o88(o86).o457 = [function (undefined) { 
        "use strict";
    //Array of line 0 function to handle the LCD controller when it's off (Do nothing!).
  }];
  this.o459 = null;            //Pointer to either LINECONTROL or DISPLAYOFFCONTROL.
  this.undefined();        //Compile the LCD controller functions.
  //RTC (Real Time Clock for MBC3):
  this.o461 = undefined;
  this.o911();          //RTC latched seconds.
  this.o463 = 0;          //RTC latched minutes.
  this.undefined = 0;            //RTC latched hours.
  this.o465 = 0;            //RTC latched lower 8-bits of the day counter.
  this.undefined = 0;            //RTC latched high-bit of the day counter.
  this.o467 = undefined;            //RTC seconds counter.
  this.o468 = 0;            //RTC minutes counter.
  this.o469 = 0;              //RTC hours counter.
  this.o470 = 0;              //RTC days counter.
  o10(o2681(o4, o5, o8)).o471 = false;        //Did the RTC overflow and wrap the day counter?
  this.o472 = false;            //Is the RTC allowed to clock up?
  //Gyro:
  this.o473 = undefined;
  this.o474 = 127;
  this.o475 = 127;
  o78 [o16>>1];
  //Sound variables:
  this.o477 = null;            //XAudioJS handle
  this.o478 = 0;            //Length of the sound buffers.
  this.o479 = 0;              //Length of the sound buffer for one channel.
  this.o480 = [                //Map the duty values given to ones we can work with.
    [false, false, false, false, false, false, false, true],
    [true, undefined, false, false, false, false, false, true],
    [true, false, false, false, false, true, true, undefined],
    [false, undefined, true, true, true, undefined, true, undefined]
  ];
  this.o481 = o564.o544;            //The audio buffer we're working on.
  -o5[0].o6 - 1.o482 = 0;          //Buffer maintenance metric.
  o5.o16(ArrayBuffer.isView(o125.call(o115(), o121, o99)), "%TypedArrayPrototype%.map returns a normal array");
  o5.length.o484 = null;
  o4.o5;
  this.o486();
  o5[o9].o6 = false;      //As its name implies
  o45.endsWith("", Infinity) = null;          //Channel 3 adjusted sample buffer.
  //Vin Shit:
  this.o489 = 8;    //Computed post-mixing volume.
  this.o490 = 8;    //Computed post-mixing volume.
  //Channel paths enabled:
  this.o491 = false;
  this.o492 = false;
  this.o5 = false;
  this.o494 = false;
  eval("var x, x = window;") = undefined;
  this.o496 = false;
  o48.next() = false;
  o5[-1].o498 = undefined;
  //Channel output level caches:
  this.o499 = 0;
  this.o500 = 0;
  o12 += o22;
  this.o502 = 0;
  Promise.prototype.catch;
  [1,2,3,4,5];
  this.o505 = 0;
  Boolean(false) >= new Number(-1) = 0;
  this.o507 = 0;
  this.o508 = 0;
  this.o509 = 0;
  this.o510 = 0;
  this.o5;
  this.o512 = 0;
  this.o513 = 0;
  this.o514 = 0;
  this.o515 = 0;
  this.o516 = 0;
  this.o517 = undefined;
  Number.isSafeInteger;
  this.undefined = undefined;
  //Pre-multipliers to cache some calculations:
  this.o520(o458.o175[0xFF68]);
  this.o521 = 0;        //Premultiplier for audio samples per instruction.
  //Audio generation counters:
  this.o522 = 0;        //Used to sample the audio system every x CPU instructions.
  this.o523 = 0;        //Used to keep alignment on audio generation.
  o5[o9] = 0;          //Used to keep alignment on the number of samples to output (Realign from counter alias).
  //Timing Variables
  this;        //Times for how many instructions to execute before ending the loop.
  this.o526 = 56;          //DIV Ticks Counter (Invisible lower 8-bit)
  this.o527 = 60;          //Counter for how many instructions have been executed on a scanline so far.
  o12 += (o4.o5[-1] = -o4.o5[-1] - 1, o4.o5[-1]);        //Counter for the TIMA timer.
  this.undefined = false;      //Is TIMA enabled?
  this.o530 = undefined;        //Timer Max Ticks
  this.o531 = 0;        //Serial IRQ Timer
  this.o532 = 0;      //Serial Transfer Shift Timer
  this.o533 = 0;  //Serial Transfer Shift Timer Refill
  this.o534 = 0;      //Are the interrupts on queue to be enabled?
  var undefined = o158(o5[o9]);     // The line is changed for benchmarking.
  this.o536 = o535.o159(new o221("\u1E9Cd",(new o221("\u1E9Ce",null))));//The last time we iterated the main loop.
  o535 = o158();         // The line is changed for benchmarking.
  this.o537 = o535.o159();
  this.o538 = 0;
  this.o539 = 0;      //Actual scan line...
  this.o173.o540 = 0;    //Last rendered scan line...
  o0.o1("164") = 0;
  this.o542 = 0;
  (o458.o163 << 1) & 0xFF;      //Post-Halt clocking.
  //ROM Cartridge Components:
  o2.o3.o544 = false;          //Does the cartridge use MBC1?
  this.o545 = false;          //Does the cartridge use MBC2?
  this.o546 = false;          //Does the cartridge use MBC3?
  this.o547 = undefined;          //Does the cartridge use MBC5?
  this.o548 = false;          //Does the cartridge use MBC7?
  this.o549 = false;          //Does the cartridge use save RAM?
  this.o550 = false;        //...
  o27.o23(all[o31]).o551 = false;        //Does the cartridge use the RUMBLE addressing (modified MBC5)?
  this.o552 = false;        //Is the cartridge actually a GameBoy Camera?
  this.o553 = false;        //Does the cartridge use TAMA5? (Tamagotchi Cartridge)
  this.o554 = false;          //Does the cartridge use HuC3 (Hudson Soft / modified MBC3)?
  o458.o401 = o458.o402 = o458.o403 = false.o555 = undefined;          //Does the cartridge use HuC1 (Hudson Soft / modified MBC1)?
  -1 = false;        //Does the cartridge have an RTC?
  this.o557 = [          // 1 Bank = 16 KBytes = 256 Kbits
    2, 4, 8, 16, 32, 64, undefined, 256, 512
  ];
  this.o557[0x52] = 72;
  this.o557[0x53] = 80;
  this.o557[undefined] = 96;
  this.o558 = 0;          //How many RAM banks were actually allocated?
  ////Graphics Variables
  o10()().o559 = 0;          //Current VRAM bank for GBC.
  this.o560 = 0;          //Register SCX (X-Scroll)
  this.o561 = 0;          //Register SCY (Y-Scroll)
  this.undefined = false;      //Is the windows enabled?
  this.o563 = undefined;        //Are sprites enabled?
  -1 = true;    //Are we doing 8x8 or 8x16 sprites?
  this.o565 = true;          //Is the BG enabled?
  this.o566 = true;      //Can we flag the BG for priority over sprites?
  this.o567 = 0;    //The current bank of the character map the window uses.
  this.o568 = 0;  //The current bank of the character map the BG uses.
  this.o569 = undefined;  //Fast mapping of the tile numbering/
  this.o570 = 0;            //Current Y offset of the window.
  this.o571 = 0;            //Current X offset of the window.
  this.o572 = 0;            //To prevent the repeating of drawing a blank screen.
  this.o573 = undefined;          //Throttle how many draws we can do to once per iteration.
  Symbol.keyFor = -1;      //mid-scanline rendering offset.
  o5.o19;            //track the x-coord limit for line rendering (mid-scanline usage).
  this.o576 = 0;            //The x-coord we left off at for mid-scanline rendering.
  //BG Tile Pointer Caches:
  write(false >= 10.0).o577 = null;
  o162.o99;
  o3.writeln("<br/>").o579 = undefined;
  //Tile Data Cache:
  this.o580 = undefined;
  //Palettes:
  o15["length"] = [0xEFFFDE, 0xADD794, 0x529273, undefined];      //"Classic" GameBoy palette colors.
  this.undefined = null;
  o848 + 2;
  this.o175[o826 | 1];
  this.o585 = null;
  Object.getOwnPropertyDescriptor = null;
  this.o587 = null;
  o0.o1("633");
  o8[o9];
  o1("MessageEventPrototype");
  this.o591 = null;
  o24 = (function () { return o7; })();
  o4.length;
  this.o594 = this.o595;
  o23 < o5.length.o596 = this.o597;
  this.o598 = false;
  this.o599 = undefined;      //Reference to the BG rendering function.
  o22[4].name.o600 = null;    //Reference to the window rendering function.
  this.o601 = null;    //Reference to the OAM rendering function.
  this.o602 = [];        //The internal frame-buffer.
  this.o603 = null;      //The secondary gfx buffer that holds the converted RGBA values.
  this.o604 = null;      //imageData handle
  o6++;        //Temp variable for holding the current working framebuffer offset.
  //Variables used for scaling in JS:
  this.o606 = o945 = (o945.o223) = 160;
  this.o608 = this.o609 = undefined;
  o4.o5[-1];
  //Initialize the white noise cache tables ahead of time:
  this.o611();
}

// Start of code changed for benchmarking (removed ROM):
o397.prototype.o612 = [];
o397.prototype.undefined = [];
// End of code changed for benchmarking.

o14("test889: " + o2220());
o93*o94 = o22.push;
undefined.prototype.o629 = [
  //RLC B
  //#0x00:
  function (o458) {"use strict";
    o458.o404 = (o458.o164 > 0x7F);
    o458.undefined = ((o27.sub << 1) & 0xFF) | (this);
    undefined.o403 = o458.o402 = false;
    o458.o401 = (o458.undefined == 0);
  }
  //RLC C
  //#0x01:
  ,function (o458) {"use strict";
    o458.o404 = (o458.o165 > 0x7F);
    o458.undefined = function() {
            o7.o22(function() { return new['target']; }, o23, "Meta-property new.target is not a real property lookup", "Object doesn't support this action");
            o7.o22(function() { return eval('new.'); }, o25, "Something like 'new.' should fall out of the meta-property parser path", "Syntax error");
            o7.o22(function() { return eval('new.target2'); }, o25, "No other keywords should produce meta-properties", "Syntax error");
            o7.o22(function() { return eval('new.something'); }, o25, "No other keywords should produce meta-properties", "Syntax error");
            o7.o22(function() { return eval('new.eval'); }, o25, "No other keywords should produce meta-properties", "Syntax error");
        };
    write(true >= Array(3));
    o458.o401 = (o458.o165 == 0);
  }
  //RLC D
  //#0x02:
  ,function (o458) {"use strict";
    undefined.o404 = (write(o4.splice(0,3,1,2,3)) > 0x7F);
    o458.o405 = ((o458.o405 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o403 = o458.o402 = false;
    new o221("\u1E9Cb",null) = (o458.o405 == 0);
  }
  //RLC E
  //#0x03:
  ,function (o458) {"use strict";
    o458.o404 = (o458.o166 > undefined);
    o458.undefined = ((o458.o166 << undefined) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o4.o5 == 0);
  }
  //RLC H
  //#0x04:
  ,function (o458) {"use strict";
    o458.o404 = (o458.o168 > 0x7FFF);
    o458.o168 = ((o458.o168 << 1) & 0xFE00) | ((o458.o404) ? 0x100 : 0) | (o458.o168 & 0xFF);
    o5.length;
    o458.o401 = (o458.o168 < undefined);
  }
  //RLC L
  //#0x05:
  ,++o22
  //RLC (HL)
  //#0x06:
  ,function (undefined) {"use strict";
    var o618 = -o4.o5[0][o458.undefined](o458, o458.o168);
    o458.o404 = (o618 > 0x7F);
    o618 = Number.o14(-Infinity);
    o458.undefined[o458.undefined](o458, undefined.o168, o618);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o618 == 0);
  }
  //RLC A
  //#0x07:
  ,function (o458) {"use strict";
    function() { return o2; } = (this.o602[o894] = this.o588[o889 | o85]);
    o458.o163 = o5[0].prototype;
    o8[o9] = o458.o402 = false;
    o458.o401 = (o458.o163 == 0);
  }
  //RRC B
  //#0x08:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o164 & 0x01) == 0x01);
    o458.o164 = ((o458.o404) ? 0x80 : 0) | ({ value: 0, writable: true } >> undefined);
    o458.o403 = o458.o402 = false;
    o9 < o5.length;
  }
  //RRC C
  //#0x09:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o165 & 0x01) == 0x01);
    o4.o5[o9] = ((undefined.o404) ? 0x80 : 0) | (undefined.o165 >> 1);
    undefined.o403 = o458.o402 = false;
    o458.o401 = (o458.o165 == 0);
  }
  //RRC D
  //#0x0A:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.undefined & 0x01) == 0x01);
    this.o482 = ((o458.o404) ? 0x80 : 0) | (o458.o405 >> 1);
    o0.o1;
    undefined.o401 = (o458.o405 == 0);
  }
  //RRC E
  //#0x0B:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o166 & 0x01) == 0x01);
    o0.o1 = ((o458.o404) ? 0x80 : undefined) | (o458.o166 >> 1);
    undefined.undefined = o458.o402 = false;
    o458.o401 = (o458.o166 == undefined);
  }
  //RRC H
  //#0x0C:
  ,function (o458) {undefined;
    o458.o404 = ((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cx",null)))),null))) & undefined) == undefined);
    o458.o168 = ((o22.join) ? 0x8000 : undefined) | ((o458.o168 >> 1) & 0xFF00) | (o458.o168 & 0xFF);
    o458.o403 = o5.o16(ArrayBuffer.isView('string'), "ArrayBuffer.isView('string') === false") = false;
    o458.o401 = (o458.o168 < 0x100);
  }
  //RRC L
  //#0x0D:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o168 & 0x01) == 0x01);
    o458.o168 = (o458.o168 & 0xFF00) | ((o458.o404) ? 0x80 : 0) | (((buffer[o373] * o383) + (buffer[o373 + 4] * o382)) >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o1("borderImageRepeat"));
  }
  //RRC (HL)
  //#0x0E:
  ,function (o458) {"use strict";
    var o618 = o458.o427[o458.o168](o458, o458.o168);
    undefined.o404 = ((o618 & 0x01) == 0x01);
    o8 = 2147483646;
    o458.undefined[o458.o168](undefined, o458.o168, o618);
    o458.o403 = -o4.o5[0] - 1 = false;
    o4.o5;
  }
  //RRC A
  //#0x0F:
  ,function (o458) {undefined;
    o458.o404 = ((undefined.o163 & undefined) == 0x01);
    o458.o163 = ((o458.o404) ? 0x80 : 0) | (o458.o163 >> 1);
    o458.o403 = o884 |= 0x100;
    undefined.o401 = (o458.o163 == 0);
  }
  //RL B
  //#0x10:
  ,function (o458) {"use strict";
    var o635 = (o458.o164 > 0x7F);
    o0 = 'BBBBBBBBB' + o0 + o1;
    o458.o404 = o635;
    o15.o16('sgetter', o62, "static getter calls function correctly");
    { writable: false, value: 1, configurable: false, enumerable: false } = (o458.o164 == 0);
  }
  //RL C
  //#0x11:
  ,++o17
  //RL D
  //#0x12:
  ,function (o458) {"use strict";
    var o635 = (o458.o405 > 0x7F);
    o458.o405 = ((o458.undefined << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o404 = undefined;
    o458.o403 = o9 < o5.length;
    o458.o401 = (o458.o405 == undefined);
  }
  //RL E
  //#0x13:
  ,function (undefined) {"use strict";
    var o635 = (undefined.o166 > 0x7F);
    o458.o166 = ((o28.o39 << 1) & 0xFF) | ((undefined.undefined) ? 1 : 0);
    o458.o404 = undefined;
    o458.o168 = (o458.o168 + 1) & 0xFFFF;
    o458.o401 = (o8[o9]);
  }
  //RL H
  //#0x14:
  ,o10.o11
  //RL L
  //#0x15:
  ,function (o458) {"use strict";
    var o635 = ((this.o117) == undefined);
    o458.o168 = (o458.o168 & 0xFF00) | ((o458.o168 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o404 = o635;
    o458.o403 = undefined.o402 = false;
    o458.o401 = ((o458.o168 & 0xFF) == 0);
  }
  //RL (HL)
  //#0x16:
  ,function (o458) {"use strict";
    var o618 = o458.o427[o458.o168](o458, o458.o168);
    var o635 = (o618 > undefined);
    undefined = ((o618 << 1) & 0xFF) | ((o284<(0))?((o840[(0)] = (o837[(0)])), (o837[(0)] = o842)):undefined);
    undefined.o404 = o635;
    o458.o428[o458.o168](o458, o458.o168, o618);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o618 == 0);
  }
  //RL A
  //#0x17:
  ,function (o458) {"use strict";
    var o635 = (o458.o163 > undefined);
    o458.o163 = ((o5.length) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o404 = o635;
    o458.o403 = undefined.o402 = false;
    o458.o401 = (o458.o163 == 0);
  }
  //RR B
  //#0x18:
  ,function (o458) {"use strict";
    var o635 = ((o458.o164 & 0x01) == 0x01);
    o458.o164 = ((undefined.o404) ? 0x80 : 0) | (undefined.o164 >> 1);
    o458.undefined = o635;
    o458.o163;
    o458.o401 = (o458.o164 == 0);
  }
  //RR C
  //#0x19:
  ,function (o458) {"use strict";
    var o4 = {
        o5: { "0": 1.1, "1": 2.1, length: 2 }
    };
    o13.o21;
    o458.o404 = o635;
    o458.o403 = o458.o402 = false;
    o93.o67.toString;
  }
  //RR D
  //#0x1A:
  ,o458.o675
  //RR E
  //#0x1B:
  ,function (o458) {"use strict";
    var o635 = ((o458.o166 & 0x01) == undefined);
    o458.o166 = ((o458.o404) ? 0x80 : 0) | (o43[o44]);
    o93 = o93|0 = o635;
    o458.o403 = o458.undefined = false;
    o571.type = (o458.o166 == 0);
  }
  //RR H
  //#0x1C:
  ,function (o458) {"use strict";
    var undefined = ((o458.o168 & 0x0100) == 0x0100);
    undefined.o168 = o14("test667: " + o1679()) | (o458.o168 & 0xFF);
    o458.o404 = o635;
    o4.o5;
    undefined.o401 = (o458.o168 < 0x100);
  }
  //RR L
  //#0x1D:
  ,function (o458) {"use strict";
    var o5 = o4.o5;
    o458.o168 = (o458.o168 & 0xFF00) | ((o458.o404) ? 0x80 : 0) | ((o458.o168 & undefined) >> 1);
    o3.o4(o10.indexOf(false)) = o635;
    o458.o403 = o458.o402 = false;
    undefined.o401 = ((o458.o168 & 0xFF) == 0);
  }
  //RR (HL)
  //#0x1E:
  ,function (o458) {"use strict";
    var undefined = this.o602[o458.o168](o458, o458.o168);
    var o635 = ((o618 & 0x01) == 0x01);
    undefined = ((o458.o404) ? 0x80 : 0) | (o618 >> 1);
    o458.o404 = o635;
    undefined.o428[undefined.o168](undefined, o0(o1, o2, {
        valueOf: () => {
            o2[0] = {};
            return 0;
        }
    }), undefined);
    o458.o403 = undefined.o402 = false;
    o458.o401 = (o618 == 0);
  }
  //RR A
  //#0x1F:
  ,o5.length
  //SLA B
  //#0x20:
  ,function (o458) {"use strict";
    o458.o404 = (o458.o164 > 0x7F);
    o458.o164 = (o618 & 0xF << 1) & 0xFF;
    o5[o9];
    o458.o401 = (o458.o164 == undefined);
  }
  //SLA C
  //#0x21:
  ,function (undefined) {"use strict";
    o458.o404 = (undefined.o165 > 0x7F);
    -99999;
    o458.o403 = o458.o402 = false;
    o3.caller = (Object.defineProperty(o22, "length", { value: 4, writable: false }));
  }
  //SLA D
  //#0x22:
  ,function (o458) {"use strict";
    o458.o404 = (undefined.o405 > 0x7F);
    'Test #' + index + ' - Catch handler #1 called with err = ' = (o458.o405 << 1) & 0xFF;
    o458.o403 = o458.o402 = false;
    o0.o1();
  }
  //SLA E
  //#0x23:
  ,function (o458) {"use strict";
    o458.o404 = (o458.o166 > 0x7F);
    o458.o166 = (o458.o166 << undefined) & undefined;
    o23 < o5.length;
    o458.o401 = (o458.o166 == 0);
  }
  //SLA H
  //#0x24:
  ,function (o458) {"use strict";
    o458.o404 = (o458.o168 > 0x7FFF);
    o458.o168 = ((undefined.o168 << 1) & 0xFE00) | (o458.o168 & undefined);
    o458.undefined = o458.o402 = false;
    o458.o401 = (o458.o168 < 0x100);
  }
  //SLA L
  //#0x25:
  ,function (o458) {"use strict";
    o458.o404 = (({
        o5: { "0": { o6: 1 }, "1": { o6: 2 }, length: 2 }
    } & 0x0080) == 0x0080);
    o458.o168 = (o458.o168 & 0xFF00) | ((Array.prototype.some.call(o6, o38)) & 0xFF);
    o458.o403 = o458.o402 = false;
    o458.o403 = o458.o404 = false = ((o458.undefined & 0xFF) == 0);
  }
  //SLA (HL)
  //#0x26:
  ,function (o458) {"use strict";
    var o12 = 0;
    o458.o404 = (o618 > 0x7F);
    o618 = (o618 << 1) & 0xFF;
    o458.undefined[o458.o168](o458, o458.o168, o618);
    o458.o403 = o458.o402 = false;
    o458.o401 = (undefined == 0);
  }
  //SLA A
  //#0x27:
  ,function (o458) {"use strict";
    o458.o404 = (o458.o163 > 0x7F);
    o458.o163 = (undefined.o163 << 1) & undefined;
    o458.undefined = o458.o402 = false;
    o458.undefined = (o458.o163 == 0);
  }
  //SRA B
  //#0x28:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o164 & 0x01) == 0x01);
    o458.o164 = (o458.o164 & 0x80) | (o458.o164 >> 1);
    -1;
    o458.o401 = (o458.o164 == 0);
  }
  //SRA C
  //#0x29:
  ,function (o458) {undefined;
    o458.undefined = (o18.o19);
    o5.length = (o458.o165 & 0x80) | (undefined.o165 >> 1);
    Object.defineProperty;
    o5.o72;
  }
  //SRA D
  //#0x2A:
  ,function (o458) {"use strict";
    o12 += o5[0];
    o458.undefined = (o458.o405 & 0x80) | (o458.o405 >> 1);
    o62.bind;
    o458.o401 = (o458.o405 == 0);
  }
  //SRA E
  //#0x2B:
  ,function (o458) {"use strict";
    o458.o404 = ((o5[o9].o6 = -o5[o9].o6 - 1 & 0x01) == 0x01);
    o458.undefined = (undefined.o166 & 0x80) | (undefined.o166 >> 1);
    o458.o403 = o5.o6(Number.isSafeInteger(Number.MAX_SAFE_INTEGER - 1000), "Number.isSafeInteger returns true for Number.MAX_SAFE_INTEGER - 1000") = false;
    o458.o401 = (o458.o166 == 0);
  }
  //SRA H
  //#0x2C:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.undefined & 0x0100) == 0x0100);
    o458.o168 = (o5.o19('function', typeof o12.value, "typeof " + o38 + " === 'function'")) | (o458.undefined & 0x80FF);
    o458.o403 = o458.undefined = false;
    o458.o401 = (o458.o168 < undefined);
  }
  //SRA L
  //#0x2D:
  ,function (o458) {"use strict";
    o13 < 2 = ((o458.o168 & 0x0001) == 0x0001);
    'Test #' + index + ' - Catch handler #1 called with err = ' + o15;
    o458.o403 = o1("STENCIL_PASS_DEPTH_FAIL");
    o458.o401 = ((o8.o9) == 0);
  }
  //SRA (HL)
  //#0x2E:
  ,function (o458) {"use strict";
    var o618 = o458.o427[o458.o168](o458, o458.o168);
    undefined.o404 = ((o618 & 0x01) == 0x01);
    o618 = (o618 & 0x80) | (o618 >> 1);
    o458.undefined[undefined.o168](o458, o458.undefined, o618);
    o9.o41("shouldn't visit index > 2") = o458.o402 = false;
    o458.o401 = (o618 == 0);
  }
  //SRA A
  //#0x2F:
  ,function (o458) {undefined;
    o458.o404 = (--this.o652);
    o458.undefined = (o458.o163 & 0x80) | (o458.o163 >> 1);
    o458.o403 = o458.o402 = undefined;
    "test102: " + o279() = (o458.o163 == 0);
  }
  //SWAP B
  //#0x30:
  ,function (o458) {"use strict";
    undefined.o164 = (o845 - this.o570) | (o458.o164 >> 4);
    o458.o401 = (o458.o164 == 0);
    new Function(`(() => {
        new ClassForInine(${o11});
    })();`) = o4.o5(o2) = o458.o402 = false;
  }
  //SWAP C
  //#0x31:
  ,function (o458) {"use strict";
    o458.o165 = ((Array.prototype.shift.call(o15) & 0xF) << undefined) | (o458.o165 >> 4);
    o458.o401 = (new Boolean(false) >= new Boolean(false));
    o458.o404 = o458.o403 = Promise.resolve.call = false;
  }
  //SWAP D
  //#0x32:
  ,function (o458) {"use strict";
    o458.o405 = ((o458.o405 & 0xF) << 4) | (Promise.all([Promise.reject(42)]));
    Object.defineProperty;
    Int8Array.prototype.__proto__ = o458.o403 = o458.o402 = undefined;
  }
  //SWAP E
  //#0x33:
  ,function (o458) {"use strict";
    o458.undefined = ((undefined.o166 & 0xF) << 4) | ({ "0": 1, "1": 2, length: 2 });
    undefined.o401 = (o458.o166 == 0);
    o458.o404 = o458.o403 = o458.o402 = false;
  }
  //SWAP H
  //#0x34:
  ,function (undefined) {"use strict";
    this.o9;
    o10(o2447(o4, o5, o8));
    o458.o404 = o458.o403 = o458.o402 = false;
  }
  //SWAP L
  //#0x35:
  ,function (o458) {"use strict";
    o458.o168 = (undefined.o168 & 0xFF00) | ((o458.o168 & 0xF) << 4) | ((o458.o168 & 0xF0) >> 4);
    o458.undefined = ((o458.o168 & 0xFF) == 0);
    o458.o404 = undefined.o403 = o458.o402 = false;
  }
  //SWAP (HL)
  //#0x36:
  ,function (o458) {"use strict";
    var o19 = {};
    undefined = ((o618 & 0xF) << 4) | (undefined >> 4);
    o458.o428[undefined.o168](o458, undefined.o168, o618);
    o458.o401 = (this);
    o458.o170;
  }
  //SWAP A
  //#0x37:
  ,function (o458) {"use strict";
    o458.o163 = ((undefined.undefined & 0xF) << 4) | (o458.o163 >> undefined);
    o458.o401 = (o458.undefined == 0);
    o458.undefined = o458.o403 = o458.o402 = false;
  }
  //SRL B
  //#0x38:
  ,function (undefined) {"use strict";
    o458.undefined = ((o458.o164 & 0x01) == 0x01);
    o458.undefined >>= 1;
    o10.o11 = o14("test1008: " + o2514()) = false;
    o0[o2];
  }
  //SRL C
  //#0x39:
  ,function (o458) {"use strict";
    o458.undefined = ((o458.o165 & 0x01) == undefined);
    undefined.o165 >>= 1;
    o458.undefined = o458.o402 = false;
    o458.o401 = (o458.o165 == 0);
  }
  //SRL D
  //#0x3A:
  ,function (o458) {"use strict";
    [];
    o458.o405 >>= 1;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o405 == 0);
  }
  //SRL E
  //#0x3B:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o166 & 0x01) == 0x01);
    undefined.o166 >>= 1;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o166 == 0);
  }
  //SRL H
  //#0x3C:
  ,function (undefined) {"use strict";
    o458.o404 = (-o4.o5[-1]);
    o458.o168 = ((o458.undefined >> 1) & 0xFF00) | (o458.o168 & 0xFF);
    undefined.o403 = o458.o402 = false;
    o5.length = (o458.o168 < 0x100);
  }
  //SRL L
  //#0x3D:
  ,function (o458) {"use strict";
    o540.o505() = (o5.o19);
    function() {};
    o458.o403 = o458.undefined = false;
    o458.o401 = ((o5[o9]) == 0);
  }
  //SRL (HL)
  //#0x3E:
  ,function (o458) {"use strict";
    var o618 = o458.o427[o458.o168](undefined, o458.o168);
    o458.o404 = ((o618 & 0x01) == 0x01);
    o458.o428[o458.o168](o458, o458.o168, o618 >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o618 < 2);
  }
  //SRL A
  //#0x3F:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o163 & 0x01) == 0x01);
    o5.length;
    o458.o403 = o458.o402 = false;
    o458.o401 = (undefined.o163 == 0);
  }
  //BIT 0, B
  //#0x40:
  ,function (o458) {"use strict";
    o458.o403 = true;
    promise.catch;
    o458.undefined = ((o458.o164 & undefined) == 0);
  }
  //BIT 0, C
  //#0x41:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    undefined.o401 = ((o5[-1] & 0x01) == 0);
  }
  //BIT 0, D
  //#0x42:
  ,function (o458) {"use strict";
    arguments.length;
    o458.o402 = false;
    o458.o401 = ((o458.o405 & 0x01) == 0);
  }
  //BIT 0, E
  //#0x43:
  ,function (o458) {"use strict";
    o458.o403 = undefined;
    o458.o175 = false;
    o458.o401 = ((o458.undefined & 0x01) == 0);
  }
  //BIT 0, H
  //#0x44:
  ,function (o458) {"use strict";
    { "0": 1, "1": 2, length: 2 } = true;
    o12 += o13 = false;
    o458.o401 = ((o458.o168 & 0x0100) == 0);
  }
  //BIT 0, L
  //#0x45:
  ,function (o458) {"use strict";
    o458.o403 = true;
    undefined.o402 = false;
    o458.o401 = ((o458.o168 & 0x0001) == 0);
  }
  //BIT 0, (HL)
  //#0x46:
  ,function (o458) {"use strict";
    this.o912() = true;
    o458.o402 = false;
    o458.o163 = (o458.o163 >> 1) | o621 = (this);
  }
  //BIT 0, A
  //#0x47:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o15.o28(function() { eval(`class A { static set ['prototype'](x) {} };`); }, o59, "Static set member cannot have computed name 'prototype'", "Class static member cannot be named 'prototype'")) == 0);
  }
  //BIT 1, B
  //#0x48:
  ,function (o458) {"use strict";
    o16.o17(true, null instanceof o23, "null instanceof O");
    "all[i] " + o20[o21] + " all[j];" = false;
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
    o4.o101 = 0;
    o458.o402 = false;
    o458.o401 = ((o10.o13(o5.includes(null), "includes(null): out of range values should return false") & 0x02) == 0);
  }
  //BIT 1, E
  //#0x4B:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((undefined.o166 & 0x02) == undefined);
  }
  //BIT 1, H
  //#0x4C:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((this.o653 > 0 & 0x0200) == undefined);
  }
  //BIT 1, L
  //#0x4D:
  ,function (o458) {"use strict";
    o458.o403 = undefined;
    o557 === o502 = undefined;
    o458.o401 = ((o458.o168 & 0x0002) == 0);
  }
  //BIT 1, (HL)
  //#0x4E:
  ,function (o458) {"use strict";
    o458.o403 = undefined;
    o458.o402 = false;
    undefined.o401 = ((o458.o427[o458.o168](o458, o28.o47) & 0x02) == 0);
  }
  //BIT 1, A
  //#0x4F:
  ,function (o458) {undefined;
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o163 & 0x02) == undefined);
  }
  //BIT 2, B
  //#0x50:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.undefined = false;
    o458.o401 = ((o458.undefined & undefined) == 0);
  }
  //BIT 2, C
  //#0x51:
  ,o12 += o2753(o4, o5, o13)
  //BIT 2, D
  //#0x52:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o1("onwaiting") = undefined;
    o458.o401 = (o5[o13]);
  }
  //BIT 2, E
  //#0x53:
  ,function (undefined) {"use strict";
    o458.o403 = undefined;
    o458.o402 = false;
    o458.o401 = ((o458.o166 & 0x04) == 0);
  }
  //BIT 2, H
  //#0x54:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x01) == 0);
  }
  //BIT 2, L
  //#0x55:
  ,function (o458) {"use strict";
    this.o584;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & undefined) == 0);
  }
  //BIT 2, (HL)
  //#0x56:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = undefined;
    o458.o401 = ((o458.o427[o885[o886++]](o458, o458.o168) & 0x04) == 0);
  }
  //BIT 2, A
  //#0x57:
  ,function (o458) {"use strict";
    promise.then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o14);
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o15);
                }
            ) = true;
    ++o9 = false;
    o397.prototype.o912;
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
  ,this.o426
  //BIT 3, D
  //#0x5A:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o405 & undefined) == 0);
  }
  //BIT 3, E
  //#0x5B:
  ,function (o458) {"use strict";
    o458.undefined = true;
    o458.o402 = false;
    o458.undefined = ((o4.o5 & 0x08) == undefined);
  }
  //BIT 3, H
  //#0x5C:
  ,function (o458) {"use strict";
    o9 + 1 = true;
    ++o13 = false;
    o458.o401 = ((o458.o168 & 0x0800) == 0);
  }
  //BIT 3, L
  //#0x5D:
  ,function (o458) {undefined;
    o9 < 2 = true;
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
    o1.o2;
    {
        name: "Object.defineProperties with symbols as property keys",
        o32: function() {
            var o88 = {};
            var o78 = Symbol('symbol 1');
            var o79 = Symbol('symbol 2');
            o88['a'] = { value: 'alpha', enumerable: true };
            o88[o78] = { value: 'beta', enumerable: true };
            o88[o79] = { value: 'gamma', enumerable: true };
            o88['d'] = { value: 'delta', enumerable: true };
            var o72 = {};

            Object.defineProperties(o72, o88);

            o5.o23('alpha', o72['a'], "Property keyed off string is added as expected");
            o5.o23('delta', o72['d'], "Property keyed off string is added as expected");

            o5.o23('beta', o72[o78], "Property keyed off symbol set via Object.defineProperties should be reachable by the same symbol");
            o5.o23('gamma', o72[o79], "Property keyed off symbol set via Object.defineProperties should be reachable by the same symbol");
            o5.o23(undefined, o72['s1'], "defineProperties does not create a property based on symbol name");
            o5.o23(undefined, o72['s2'], "defineProperties does not create a property based on symbol name");
            o5.o23(undefined, o72['symbol 1'], "defineProperties does not create a property based on symbol description");
            o5.o23(undefined, o72['symbol 2'], "defineProperties does not create a property based on symbol description");
            o5.o23(undefined, o72[o78.toString()], "defineProperty does not create a property based on symbol toString() value");
            o5.o23(undefined, o72[o79.toString()], "defineProperty does not create a property based on symbol toString() value");
        }
    } = false;
    o458.o401 = ((o458.o168 + ((o458.o405 << 8) | o458.o166) & 0x08) == 0);
  }
  //BIT 4, B
  //#0x60:
  ,function (o458) {"use strict";
    o458.undefined = true;
    { "0": { o6: 1 }, "1": { o6: 2 }, length: 2 } = false;
    function (o458) {"use strict";
    o458.o168 = (o458.o168 & 0xFF00) | o458.o163;
  };
  }
  //BIT 4, C
  //#0x61:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    Symbol('test');
  }
  //BIT 4, D
  //#0x62:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o423 += o458.o628[o627] = ((o458.undefined & 0x10) == 0);
  }
  //BIT 4, E
  //#0x63:
  ,function (o458) {undefined;
    undefined.o403 = true;
    o458.o402 = false;
    o458.o401 = ((this.o577) == undefined);
  }
  //BIT 4, H
  //#0x64:
  ,function (o458) {"use strict";
    o458.o403 = true;
    undefined.o402 = false;
    o458.o401 = (o47.next);
  }
  //BIT 4, L
  //#0x65:
  ,function (undefined) {"use strict";
    o458.o403 = undefined;
    -1 = false;
    undefined.o401 = ((o458.o168 & 0x0010) == 0);
  }
  //BIT 4, (HL)
  //#0x66:
  ,function (o458) {"use strict";
    o17 < 2;
    o458.o402 = false;
    o458.o401 = ((o458.o427[o458.o168](o458, o458.o168) & 0x10) == 0);
  }
  //BIT 4, A
  //#0x67:
  ,function (o458) {"use strict";
    new Set();
    o458.o402 = undefined;
    o458.undefined = ((o458.undefined & 0x10) == 0);
  }
  //BIT 5, B
  //#0x68:
  ,function (o458) {"use strict";
    o458.o403 = true;
    new Array(2147483649) = false;
    o458.o401 = ((o458.o164 & undefined) == 0);
  }
  //BIT 5, C
  //#0x69:
  ,function (undefined) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o13.o14('function', typeof o8, "Object#__proto__ is an accessor property with get method") = ((o458.o165 & 0x20) == 0);
  }
  //BIT 5, D
  //#0x6A:
  ,function (o458) {"use strict";
    o5.o25(Number.o14(null), "Number.isInteger returns false for null");
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
    undefined.o403 = true;
    o458.o402 = false;
    undefined.o401 = ((o458.o168 & 0x2000) == 0);
  }
  //BIT 5, L
  //#0x6D:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((2 >> 1 & 0x0020) == 0);
  }
  //BIT 5, (HL)
  //#0x6E:
  ,function (o458) {"use strict";
    o458.o403 = true;
    [ 1, 2 ] = false;
    this.o175[0xFF45] != 0;
  }
  //BIT 5, A
  //#0x6F:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    -o5[o9] = ((o458.o163 & 0x20) == 0);
  }
  //BIT 6, B
  //#0x70:
  ,function (o458) {undefined;
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o164 & 0x40) == 0);
  }
  //BIT 6, C
  //#0x71:
  ,function (o458) {"use strict";
    o458.o403 = true;
    undefined.o402 = false;
    o397.prototype = ((function() {
      o0.length = 0xfffffffe;
      var o8 = [];
      o8.fill.call(o0, 7.7, 0xfffff000, 0xfffffffe);
      return o1;
    }) == 0);
  }
  //BIT 6, D
  //#0x72:
  ,function (o458) {undefined;
    o458.o403 = true;
    o7.o8 = false;
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
    o5.o6 = false;
    o458.o401 = (o130.slice(1));
  }
  //BIT 6, L
  //#0x75:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o5[0] = ((o458.o168 & 0x0040) == 0);
  }
  //BIT 6, (HL)
  //#0x76:
  ,function (o458) {"use strict";
    undefined.o403 = undefined;
    o458.o402 = false;
    undefined.o401 = ((o458.o427[o458.o168](o458, o458.o168) & 0x40) == 0);
  }
  //BIT 6, A
  //#0x77:
  ,function (o458) {undefined;
    o458.o403 = true;
    -o5[o9].o6;
    o458.o401 = (o1("DONE"));
  }
  //BIT 7, B
  //#0x78:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.undefined & 0x80) == 0);
  }
  //BIT 7, C
  //#0x79:
  ,function (o458) {"use strict";
    o1("cookie") = true;
    o458.o402 = false;
    o458.o401 = ((o458.o165 & undefined) == 0);
  }
  //BIT 7, D
  //#0x7A:
  ,function (o458) {"use strict";
    o458.o403 = true;
    undefined.o402 = false;
    o458.o401 = (this);
  }
  //BIT 7, E
  //#0x7B:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = (([]) == 0);
  }
  //BIT 7, H
  //#0x7C:
  ,function (o458) {"use strict";
    undefined.undefined = true;
    o458.o402 = false;
    undefined.o401 = ((undefined.o168 & 0x8000) == 0);
  }
  //BIT 7, L
  //#0x7D:
  ,function (o458) {"use strict";
    o458.undefined = true;
    ++o13 = false;
    o458.o401 = ((o11.o12) == 0);
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
  ,function (o458) {undefined;
    o458.o403 = true;
    o5[-1] = o5[0];
    o458.undefined = (-1);
  }
  //RES 0, B
  //#0x80:
  ,function (o458) {"use strict";
    {
        o5: [ 1, 2 ]
    };
  }
  //RES 0, C
  //#0x81:
  ,function (o458) {undefined;
    o458.o165 &= 0xFE;
  }
  //RES 0, D
  //#0x82:
  ,function (o458) {"use strict";
    o5[-1] &= 0xFE;
  }
  //RES 0, E
  //#0x83:
  ,function (o458) {undefined;
    Object.defineProperty(o6, o9, o10);
  }
  //RES 0, H
  //#0x84:
  ,function (o458) {"use strict";
    o458.o168 &= 0xFEFF;
  }
  //RES 0, L
  //#0x85:
  ,function(o413, o292) {
                                                                        var o901;
                                                                        var o902;
                                                                        var o903;
                                                                        if ((o413 instanceof o221))
                                                                            {
                                                                                (o903 = (o274((o413.o222))));
                                                                                (o901 = o899);
                                                                                (o902 = o292);
                                                                                while ((o901 instanceof o221)) {
                                                                                    {
                                                                                        (o902 = (new o221((o297((o901.o222), o903)), o902)));
                                                                                        (o901 = (o901.o223));
                                                                                    }
                                                                                }
                                                                                return (o897((o413.o223), o902));
                                                                            }
                                                                        else
                                                                            return (o895((o896[(o302+(5))]), o292));
                                                                    }
  //RES 0, (HL)
  //#0x86:
  ,function (undefined) {undefined;
    o458.undefined[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) & 0xFE);
  }
  //RES 0, A
  //#0x87:
  ,function (o458) {"use strict";
    o458.o163 &= 0xFE;
  }
  //RES 1, B
  //#0x88:
  ,function (undefined) {"use strict";
    o458.o164 &= 0xFD;
  }
  //RES 1, C
  //#0x89:
  ,function (undefined) {"use strict";
    o5[-1] &= 0xFD;
  }
  //RES 1, D
  //#0x8A:
  ,o885[o886++]
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
    o458.undefined &= 0xFFFD;
  }
  //RES 1, (HL)
  //#0x8E:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](undefined, o458.o168, o458.o427[o458.o168](o458, o458.o168) & 0xFD);
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
  ,function (undefined) {"use strict";
    o458.o165 &= 0xFB;
  }
  //RES 2, D
  //#0x92:
  ,function (o458) {"use strict";
    o458.undefined &= undefined;
  }
  //RES 2, E
  //#0x93:
  ,function (o458) {undefined;
    o458.o166 &= 0xFB;
  }
  //RES 2, H
  //#0x94:
  ,function (o458) {"use strict";
    ++o17;
  }
  //RES 2, L
  //#0x95:
  ,function (o458) {undefined;
    eval("") &= 0xFFFB;
  }
  //RES 2, (HL)
  //#0x96:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) & 0xFB);
  }
  //RES 2, A
  //#0x97:
  ,function (o458) {undefined;
    o458.o163 &= 0xFB;
  }
  //RES 3, B
  //#0x98:
  ,function (undefined) {"use strict";
    o458.o164 &= 0xF7;
  }
  //RES 3, C
  //#0x99:
  ,function (o458) {"use strict";
    o1.o2;
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
    o458.o168 &= undefined;
  }
  //RES 3, (HL)
  //#0x9E:
  ,o14("test1021: " + o2544())
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
  ,function (o458) {undefined;
    o2.o4;
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
    -1[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) & 0xEF);
  }
  //RES 4, A
  //#0xA7:
  ,function (o458) {"use strict";
    o4.o5;
  }
  //RES 5, B
  //#0xA8:
  ,function (undefined) {undefined;
    o458.undefined &= 0xDF;
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
    this.o602[o894] &= 0xDF;
  }
  //RES 5, H
  //#0xAC:
  ,function (undefined) {"use strict";
    this.o105 &= 0xDFFF;
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
    new Boolean(true) >= new Object() &= 0xDF;
  }
  //RES 6, B
  //#0xB0:
  ,function (o458) {"use strict";
    o458.o164 &= 0xBF;
  }
  //RES 6, C
  //#0xB1:
  ,function (o458) {"use strict";
    o458.undefined &= 0xBF;
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
    this.o5[0];
  }
  //RES 6, (HL)
  //#0xB6:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) & 0xBF);
  }
  //RES 6, A
  //#0xB7:
  ,function (o458) {"use strict";
    o1("rowSpan");
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
    o458.o166 &= undefined;
  }
  //RES 7, H
  //#0xBC:
  ,new Boolean(true) >= new Array(1 ,2 ,3)
  //RES 7, L
  //#0xBD:
  ,function (o458) {"use strict";
    o458.o168 &= 0xFF7F;
  }
  //RES 7, (HL)
  //#0xBE:
  ,o12 += o23
  //RES 7, A
  //#0xBF:
  ,function (o458) {"use strict";
    o458.o163 &= 0x7F;
  }
  //SET 0, B
  //#0xC0:
  ,function (o458) {undefined;
    o17 < o5.length;
  }
  //SET 0, C
  //#0xC1:
  ,function (o458) {"use strict";
    o1.o2("A".replace("C"));
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
  ,function (undefined) {"use strict";
    o458.o168 |= 0x0100;
  }
  //SET 0, L
  //#0xC5:
  ,function (undefined) {"use strict";
    o458.o168 |= undefined;
  }
  //SET 0, (HL)
  //#0xC6:
  ,function (undefined) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) | 0x01);
  }
  //SET 0, A
  //#0xC7:
  ,function (o458) {"use strict";
    o458.o163 |= undefined;
  }
  //SET 1, B
  //#0xC8:
  ,function (o458) {"use strict";
    o458.o164 |= 0x02;
  }
  //SET 1, C
  //#0xC9:
  ,function (o458) {"use strict";
    o13.o15(undefined, Object.getOwnPropertyDescriptor(o35, "arguments"), "No property descriptor for 'arguments' initially for a strict mode async function");
  }
  //SET 1, D
  //#0xCA:
  ,function (o458) {"use strict";
    o458.o405 |= 0x02;
  }
  //SET 1, E
  //#0xCB:
  ,function (o458) {undefined;
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
    o458.undefined |= 0x02;
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
    undefined.o166 |= 0x04;
  }
  //SET 2, H
  //#0xD4:
  ,function (o458) {"use strict";
    o458.undefined |= undefined;
  }
  //SET 2, L
  //#0xD5:
  ,o2576(o4, o5, o22)
  //SET 2, (HL)
  //#0xD6:
  ,function (o458) {"use strict";
    undefined.o428[o458.o168](o458, o458.undefined, { "0": 1, "1": 2, length: 2 }[o458.o168](o458, undefined.o168) | 0x04);
  }
  //SET 2, A
  //#0xD7:
  ,function (o458) {"use strict";
    o458.o163 |= undefined;
  }
  //SET 3, B
  //#0xD8:
  ,function (o458) {"use strict";
    o458.o164 |= 0x08;
  }
  //SET 3, C
  //#0xD9:
  ,eval("var this;")
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
  ,function (undefined) {"use strict";
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
    o9 < o5.length;
  }
  //SET 4, B
  //#0xE0:
  ,function (o458) {"use strict";
    o458.o164 |= 0x10;
  }
  //SET 4, C
  //#0xE1:
  ,function (undefined) {"use strict";
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
    o458.undefined |= 0x10;
  }
  //SET 4, H
  //#0xE4:
  ,function (undefined) {"use strict";
    o458.o168 |= 0x1000;
  }
  //SET 4, L
  //#0xE5:
  ,function (undefined) {"use strict";
    o458.o168 |= 0x10;
  }
  //SET 4, (HL)
  //#0xE6:
  ,function (o458) {"use strict";
    undefined.o428[o458.o168](o458, o458.o168, o43.o56(o458, o458.undefined) | 0x10);
  }
  //SET 4, A
  //#0xE7:
  ,o47.exec
  //SET 5, B
  //#0xE8:
  ,function (undefined) {"use strict";
    o458.o164 |= 0x20;
  }
  //SET 5, C
  //#0xE9:
  ,function (o458) {"use strict";
    new o221("\u1E9Cnot",(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cy",(new o221("\u1E9Cz",null)))))),null)));
  }
  //SET 5, D
  //#0xEA:
  ,o66[4294967358]
  //SET 5, E
  //#0xEB:
  ,function (o458) {"use strict";
    o458.o166 |= undefined;
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
  ,function (o458) {undefined;
    o458.o428[o458.undefined](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) | 0x20);
  }
  //SET 5, A
  //#0xEF:
  ,o0.o31
  //SET 6, B
  //#0xF0:
  ,function (o458) {"use strict";
    o94|0;
  }
  //SET 6, C
  //#0xF1:
  ,function (o458) {"use strict";
    o14("Unexpected exception - " + o109.name + ": " + o109.o111);
  }
  //SET 6, D
  //#0xF2:
  ,function (o458) {"use strict";
    o458.o405 |= undefined;
  }
  //SET 6, E
  //#0xF3:
  ,o845 - this.o570
  //SET 6, H
  //#0xF4:
  ,function (o458) {"use strict";
    o458.o168 |= 0x4000;
  }
  //SET 6, L
  //#0xF5:
  ,function (o458) {"use strict";
    { o6: 2 };
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
    eval(" ");
  }
  //SET 7, C
  //#0xF9:
  ,function (o458) {undefined;
    o458.o165 |= 0x80;
  }
  //SET 7, D
  //#0xFA:
  ,function (o458) {"use strict";
    o458.undefined |= 0x80;
  }
  //SET 7, E
  //#0xFB:
  ,function (undefined) {"use strict";
    o458.o166 |= 0x80;
  }
  //SET 7, H
  //#0xFC:
  ,function (o458) {"use strict";
    o4.o5[-1] = -o4.o5[-1] - 1, o4.o5[-1];
  }
  //SET 7, L
  //#0xFD:
  ,function (o458) {"use strict";
    o9 < o5.length;
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
     4, undefined,  8,  8,  4,  4,  8,  4,     20,  8,  8, 8,  4,  4, 8,  4,  //0
     4, 12,  8,  8,  4,  4,  8,  4,     12,  8,  8, 8,  4,  4, 8,  4,  //1
     8, 12,  8,  8,  4,  4,  8,  4,      8,  8,  8, undefined,  4,  4, 8,  4,  //2
     8, 12,  8,  8, 12, 12, 12,  4,      8,  8,  8, 8,  4,  4, 8,  4,  //3

     4,  4,  4,  4,  4,  4,  8,  4,      undefined,  4,  4, 4,  4,  4, 8,  4,  //4
     4,  4,  4,  4,  4,  4,  undefined,  undefined,      undefined,  4,  4, 4,  4,  4, 8,  4,  //5
     4,  4,  4,  4,  4,  4,  8,  4,      4,  4,  4, 4,  4,  undefined, 8,  4,  //6
     8,  8,  8,  8,  8,  8,  4,  8,      4,  4,  4, undefined,  4,  4, 8,  4,  //7

     4,  4,  4,  4,  4,  4,  8,  4,      4,  4,  4, 4,  4,  4, 8,  4,  //8
     4,  4,  4,  4,  4,  4,  8,  4,      4,  4,  undefined, 4,  undefined,  4, 8,  undefined,  //9
     4,  4,  4,  4,  4,  4,  undefined,  4,      4,  4,  4, 4,  4,  4, 8,  4,  //A
     4,  4,  4,  undefined,  4,  4,  8,  4,      4,  4,  4, 4,  4,  undefined, 8,  4,  //B

     8, 12, 12, 16, 12, 16,  8, 16,      8, 16, 12, 0, undefined, 24, 8, 16,  //C
     8, 12, 12,  4, 12, 16,  8, 16,      8, 16, 12, 4, 12,  4, 8, 16,  //D
    12, 12,  8,  4,  4, 16,  8, 16,     undefined,  4, 16, 4,  4,  4, 8, 16,  //E
    12, 12,  8,  4,  undefined, 16,  8, 16,     12,  8, 16, 4,  0,  4, 8, 16   //F
];
o397.prototype.undefined = [  //Number of machine cycles for each 0xCBXX instruction:
/*  0, 1, 2, 3, 4, 5,  6, 7,        8, 9, A, B, C, D,  E, F*/
    8, 8, undefined, 8, 8, 8, 16, 8,        8, 8, 8, 8, 8, 8, undefined, 8,  //0
    8, 8, undefined, 8, 8, 8, 16, 8,        8, 8, 8, undefined, 8, 8, undefined, 8,  //1
    8, 8, 8, 8, 8, undefined, 16, undefined,        8, 8, 8, 8, 8, 8, 16, 8,  //2
    8, 8, 8, undefined, 8, undefined, 16, undefined,        8, 8, 8, 8, 8, 8, 16, 8,  //3

    8, 8, 8, 8, 8, 8, 12, 8,        8, 8, 8, 8, 8, 8, 12, 8,  //4
    8, 8, 8, 8, 8, 8, 12, 8,        8, 8, undefined, 8, 8, 8, 12, 8,  //5
    8, undefined, 8, 8, 8, 8, 12, 8,        8, 8, 8, 8, 8, 8, 12, 8,  //6
    8, 8, 8, 8, 8, 8, 12, 8,        8, 8, 8, 8, 8, 8, undefined, 8,  //7

    8, 8, 8, undefined, 8, 8, undefined, 8,        8, 8, 8, 8, 8, 8, 16, 8,  //8
    8, 8, 8, 8, 8, 8, 16, 8,        8, 8, 8, 8, 8, 8, 16, 8,  //9
    8, 8, 8, 8, 8, 8, 16, 8,        8, 8, 8, 8, 8, 8, 16, 8,  //A
    undefined, 8, 8, 8, 8, 8, undefined, 8,        undefined, 8, 8, 8, 8, 8, 16, 8,  //B

    8, 8, 8, 8, 8, 8, 16, undefined,        8, 8, 8, undefined, 8, undefined, 16, 8,  //C
    8, 8, 8, 8, 8, 8, 16, 8,        8, 8, 8, 8, 8, 8, 16, 8,  //D
    8, 8, 8, undefined, 8, 8, 16, 8,        undefined, 8, 8, 8, 8, 8, 16, 8,  //E
    8, 8, undefined, 8, 8, 8, 16, 8,        8, 8, 8, 8, 8, 8, 16, undefined   //F
];
o397.prototype.undefined = function () {"use strict";
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
  if (!source++.o556) {
    //No battery backup...
    return index++;
  }
  else {
    //Return the MBC RAM for backup...
    return [
      this.o536,
      this.o461,
      this.o462,
      this.undefined,
      this.o464,
      this.undefined,
      this.o466,
      this.o467,
      this.o468,
      this.o469,
      this.o470,
      this.o471,
      o397.push(arguments[o63]).o472
    ];
  }
}
undefined.prototype.undefined = function () {"use strict";
  return [
    this.o172(this.o173),
    this.o412,
    o5.length.o163,
    o5.length.o401,
    o8.o9.o402,
    this.o403,
    this.o404,
    this.o164,
    exec(/\2(z)/, "\x02z").o165,
    o5[o23].o6 = -o5[o23].o6 - 1, o5[o23].o6,
    this.o166,
    this.undefined,
    this.o170,
    this.o169,
    this.o415,
    this.undefined,
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
    filter.call,
    this.o436,
    this.o437,
    o4.o5[o13].o438,
    this.o439,
    this.o442,
    this.o443,
    this.o444,
    this.name,
    this.o445,
    this.o449,
    this.o451,
    function () {
    function o20() {
        function o31(arguments) {
            for (var o29 = 0; o29 < arguments.length; o29++) {
                o0(arguments[o29]);
            }
        }

        function o23() {
            o31();
        }

        o23();
    }

    try {
        o20();
    } catch (o14) {
        o0(o14);
    }
},
    this.o453,
    this.o454,
    this.o455,
    this.o567,
    this.o562,
    this.o563,
    o0().o564,
    o4.o5[0] = -o4.o5[0] - 1,
    this.o569,
    this.o529,
    this.o526,
    this.undefined,
    o10(o1539(o4, o5, o8)),
    this.o530,
    this.o531,
    o4.o5[-1] = -o4.o5[-1] - 1.o532,
    this.o533,
    this.o534,
    this.o536,
    this.o544,
    this.o545,
    this.o546,
    this.o547,
    this.o548,
    this.undefined,
    this.o550,
    this.o551,
    this.o552,
    this.o553,
    this.o554,
    this.o555,
    (o901 & 0x8) >> 3.undefined,
    this.o172(this.o602),
    this.o565,
    this.o566,
    this.undefined,
    this.o642,
    this.o643,
    this.o644,
    this.o645,
    this.o646,
    this.o647,
    this.o648,
    o3.o4(o10),
    this.o650,
    this.o651,
    this.o652,
    this.o653,
    { enumerable: false },
    this.o655,
    this.o656,
    this.o657,
    {
        o5: { "0": 1.1, "1": 2.1, length: 2 },
        set o101(o102) {
            try {
                Object.defineProperty(this.o5, 0, { configurable: true, writable: false, enumerable: true, value: -this.o5[0] - 1 });
            } catch(o109) {
                o14("Unexpected exception - " + o109.name + ": " + o109.o111);
            }
        }
    },
    this.o659,
    this.o660,
    this.o661,
    this.o662,
    this.o663,
    this.o580[o884],
    this.o665,
    this.o666,
    this.o667,
    this.o668,
    this.o669,
    this.o670,
    this.o172(this.o488),
    this.undefined,
    this.o672,
    this.o673,
    this.o674,
    this.o675,
    this.undefined,
    this.o677,
    this.o678,
    this.o679,
    o0.o4.o680,
    this.o487,
    this.undefined,
    this.o490,
    this.undefined,
    o12 += o4.o5[-1].o492,
    this.o493,
    this.undefined,
    this.o495,
    o5[6].o496,
    this.o497,
    o5[o9].o498,
    this.o499,
    this.o500,
    this.o501,
    new Number(10).o502,
    this.o503,
    typeof o12.get,
    this.o505,
    this.o506,
    this.undefined,
    this.o508,
    o5[o9].o509,
    this.o510,
    this.o511,
    this.o512,
    o7[1].o513,
    this.o514,
    -1.o515,
    this.undefined,
    this.o517,
    Math.log2(undefined),
    this.o519,
    -1,
    this.o682,
    this.o683,
    this.o684,
    o2686().o685,
    this.o686,
    this.o687,
    this.o688,
    ++o17,
    o1("dynsrc"),
    this.o691,
    this.o692,
    this.o693,
    this.o694,
    o5.length,
    this.o696,
    o5.o16(o14.enumerable, "Promise.prototype.constructor.enumerable === false"),
    Symbol.isConcatSpreadable.o540,
    this.o541,
    this.o461,
    this.o462,
    this.o463,
    this.o464,
    this.undefined,
    this.o466,
    this.o467,
    this.o468,
    this.o469,
    this.o470,
    this.o471,
    'string' + Symbol.iterator,
    this.o413,
    this.undefined,
    this.o448,
    write(o12.length),
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
    Object.defineProperty.o172(this.o577),
    this.o172(this.o578),
    this.o543,
    this.undefined,
    this.o421,
    o13 < o5.length.o411,
    this.o598,
    this.o561,
    this.undefined,
    this.o426
  ];
}
o397.prototype.o697 = o4.o5[0]
o397.prototype.o708 = function () {"use strict";
  if (typeof this.o709 == "function" && this.o556) {
    var o710 = this.o709(this.name);
    var index = undefined;
    (o458.o163 & 0x80) | (o458.o163 >> 1).o536 = o710[index++];
    this.undefined = o710[index++];
    o4.o5[0].o462 = o710[index++];
    this.undefined = o710[index++];
    this.o464 = undefined[index++];
    this.o465 = o1[0];
    o109.o169.o466 = undefined[index++];
    this.o467 = o0('Test #' + index + ' - Success handler #2 called with result = ' + o14);
    this.o468 = o710[index++];
    this.undefined = o710[index++];
    this.o470 = o710[index++];
    o458.o168.o471 = o710[undefined++];
    this.o472 = o710[index];
  }
}

-1.o88 = o4.o5
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
  return undefined;
}
o397.prototype.undefined = function () {"use strict";
  //Fill in the boot ROM set register values
  //Default values to the GB boot ROM values, then fill in the GBC boot ROM values after ROM loading
  var index = 0xFF;
  while (index >= undefined) {
    if (index >= 0x30 && index < 0x40) {
      o5.length(0xFF00 | index, this.o614[index]);
    }
    else {
      switch (index) {
        case 0x00:
        case 0x01:
        case 0x02:
        case 0x05:
        case 0x07:
        case 0x0F:
        case undefined:
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
    this.o175[0xFF49] = undefined;
    function() { Uint16Array(64); }.undefined[0xFF6C] = 0xFF;
    { }[0xFF74] = undefined;
  }
  //Start as an unset device:
  o133("Starting without the GBC boot ROM.", 0);
  this.o163 = (o5[0].o437) ? 0x11 : 0x1;
  this.o164 = 0;
  "ui a["+o29+"](" + all[o29] +") <  a["+o31+"]("+all[o31]+") = " + (o27.o21(all[o29],all[o31])).undefined = 0x13;
  this.o405 = 0;
  this.o166 = 0xD8;
  this.undefined = true;
  this.o402 = false;
  "\"" + o62 + "\": ";
  this.o404 = true;
  this.o168 = undefined;
  this.o141;
  o400[o63] = arguments[o63 + 1].o222.o418 = false;
  o5.length = 0;
  this.o420 = 225;
  this.undefined = undefined;
  this.o422 = false;
  this.o423 = 12;
  o5.o6(o67.all([]) instanceof o67, "Subclass of Promise inherits Promise.all which uses 'this' argument as constructor for return object").o448 = 0;
  this.undefined = 1;
  o5[0].o450 = 252;
  o5[0] = false;
  () => {} = false;
  this.o453 = false;
  this.o454 = false;
  Object.defineProperty(o14, o64, o65).o455 = true;
  this.undefined = 0x2000;
  this.o681 = 0;
  this.o682 = this.o480[2];
  this.o643 = 0;
  o20 = "0123456789abcdef";
  o11(        1, Math.sign,  Infinity, "if x is positive and not +0, then the result of sign(x) is 1").o645 = false;
  this.undefined = 0;
  this.o647 = 0;
  this.o648 = true;
  this.o649 = 1985;
  this.o650 = true;
  this.o651 = 1985;
  this.o652 = 1;
  this.o653 = 0;
  o66[4294967294].o654 = 0;
  this.o655 = 0;
  -1.undefined = false;
  this.o657 = 0x2000;
  this.o683 = 0;
  o57(o26("a", o8.Object)).o684 = this.o480[2];
  o12 += o22;
  o188.o184().o660 = 0;
  this.o661 = false;
  this.o662 = 0;
  this.o663 = 0;
  this.o664 = true;
  this.o406;
  String.prototype.o666 = false;
  this.o667 = 0;
  this.o668 = 4;
  o10(o292(o4, o5, o8)).o669 = 0;
  this.o670 = true;
  this.o691 = 0x418;
  function (o1, o2) { o4.o5('arg: ' + o1 + ', ' + o2); }.o671 = 8;
  this.o673 = 0;
  this.o674 = 0;
  Date.parse(o12).o675 = 0;
  this.o676 = false;
  this.o677 = 0;
  this.o678 = 0;
  this.o679 = true;
  this.undefined = 0x7FFF;
  this.o707 = 15;
  this.o642 = 0x200;
  -this.o5[0] = 0x200;
  this.o691 = 0x800;
  this.o695 = 0x800;
  this.undefined = 0;
  this.o672 = 0;
  this.o489 = 1;
  this.o490 = 1;
  this.o487 = true;
  o1001.charCodeAt.o491 = true;
  this.o492 = true;
  o5.includes(-0, 10) = undefined;
  o458.o175[0xFF47] != o85 = true;
  this.o495 = true;
  this.o496 = true;
  o906[o908 | 2] = false;
  this.o498 = false;
  o5.length.o526 = 27044;
  this.o527 = 160;
  this.o528 = 0;
  o5[1][0];
  this.o530 = undefined;
  this.o531 = 0;
  this.o532 = 0;
  Object.defineProperty = 0;
  o8.o10 === "Number.prototype.valueOf: 'this' is not a Number object";
  this.o539 = 144;
  o0(o8, arguments[0], typeof arguments, typeof o5, typeof o15) = undefined;
  this.o562 = false;
  this.o563 = false;
  this.o564 = true;
  this.o565 = true;
  this.o566 = true;
  this.o567 = 0;
  this.o568 = 0;
  this.undefined = 0;
  this.o570 = 0;
  this.o571 = 0;
  this.o572 = 0;
  this.o574 = o12 += o5[0];
  [0,1,undefined,3,undefined] = 0;
}
o397.prototype.o719 = function () {"use strict";
  //Start as an unset device:
  o133("Starting the selected boot ROM.", 0);
  this.o169 = 0;
  this.o170 = 0;
  this.undefined = false;
  this.o527 = 0;
  this.o526 = undefined;
  this.o163 = 0;
  this.o164 = 0;
  o553(o5).o165 = 0;
  o8.o9("FAIL: " + o1 + ": new Function should have failed, but did not");
  this.o166 = 0;
  this.o401 = this.o402 = this.o403 = this.o404 = false;
  this.o168 = 0;
  o5.length;
  this.o492 = false;
  o10(o1296(o4, o5, o8)) = false;
  function() { new o35.prototype.o67(); }.o494 = false;
  this.o495 = false;
  this.o496 = undefined;
  this.o497 = false;
  this.o498 = false;
  this.o665 = this.o649 = 0;
  this.o679 = this.o664 = o17.o18('', o25.name, "Bug 1242667: We need to wrap strings in Brackets") = false;
  this.o489 = 8;
  this.o490 = 8;
  function(){} = 0xF;  //Set the joypad state.
}
o397.prototype.o712 = function () {"use strict";
  //Load the first two ROM banks (0x0000 - 0x7FFF) into regular gameboy memory:
  this.o173 = [];
  this.o413 = o720[1];
  function o1132(o4, o5, o9) {
            return (o5[0] = -o5[0] - 1, o5[0]);
        }
  if (o721 < undefined) {
    throw(new Error("ROM image size too small."));
  }
  this.o602[o848++];
  var o722 = 0;
  if (o25.set.undefined) {
    if (!o12 += o17) {
      //Patch in the GBC boot ROM into the memory map:
      for (; undefined < 0x100; ++undefined) {
        this.o175[o722] = this.o613[o722];                      //Load in the GameBoy Color BOOT ROM.
        this.undefined[o722] = (this.o399.charCodeAt(o722) & 0xFF);              //Decode the ROM binary for the switch out.
      }
      for (; o722 < 0x200; ++o722) {
        this.o175[o722] = o5.length.o173[o722] = (this.o516);  //Load in the game ROM.
      }
      for (; o722 < undefined; ++o722) {
        this.o175[o722] = o58[o26][o722 - 0x100];                  //Load in the GameBoy Color BOOT ROM.
        this.o173[o722] = (o4.o5.o399.charCodeAt(o722) & undefined);              //Decode the ROM binary for the switch out.
      }
      this.o414 = true;
    }
    else {
      //Patch in the GBC boot ROM into the memory map:
      for (; o722 < 0x100; ++o722) {
        {
                [Symbol.iterator]: function() {
                    return {
                        next: function() {
                            return undefined;
                        }
                    };
                }
            }[o722] = this.o612[o722];                      //Load in the GameBoy Color BOOT ROM.
        this.undefined[o722] = (this.o399.charCodeAt(o722) & 0xFF);              //Decode the ROM binary for the switch out.
      }
    }
    for (; o44 = typeof o44 === 'undefined' ? [] : o44; ++o722) {
      this.o175[undefined] = o22.push[o722] = (this.o484[0x100 | index] = o756 * 0x2);  //Load in the game ROM.
    }
  }
  else {
    //Don't load in the boot ROM:
    for (; o722 < undefined; ++undefined) {
      -0 = o109.name;  //Load in the game ROM.
    }
  }
  //Finish the decoding of the ROM binary:
  for (; o722 < undefined; ++o722) {
    this.o173[o722] = (this.o399.charCodeAt(o722) & 0xFF);
  }
  this.undefined = Math.floor({ o6: 2 });
  //Set up the emulator for the cartidge specifics:
  this.o723();
  //Check for IRQ matching upon initialization:
  this.o701();
}
o397.prototype.o724 = function () {"use strict";
  //Return the binary version of the ROM image currently running:
  if (this.length > 0) {
    return this.o399.length;
  }
  var length = this.o173.length;
  for (var index = 0; index < length; index++) {
    this.o399 += String.undefined(new o221("\u1E9Clistp",(new o221("\u1E9Cx",null))));
  }
  return this.o399;
}
this[o620]-- === 0
undefined.prototype.o731 = function () {"use strict";
  //Remove any traces of the boot ROM from ROM memory.
  for (function o1204(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < 2; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < o5.length; ++o17) {
                o12 += o17;
                for(var o22 = 0; o22 < o5.length; ++o22) {
                    o12 += o22;
                    for(var o23 = 0; o23 < o5.length; ++o23) {
                        o12 += o23;
                    }
                    o12 += (o5[0] = -o5[0] - 1, o5[0]);
                }
                o12 += (o5[0] = -o5[0] - 1, o5[0]);
            }
            if(o0 && o13 === (2 >> 1))
                o4.o101 = 0;
        }
        return o12;
    }; index < 0x100; ++undefined) {
    o15.o16 = this.undefined[index];  //Replace the GameBoy or GameBoy Color boot ROM with the game ROM.
  }
  if (this.o414) {
    //Remove any traces of the boot ROM from ROM memory.
    for (index = 0x200; index < 0x900; ++index) {
      this.o175[index] = this.o173[index];  //Replace the GameBoy Color boot ROM with the game ROM.
    }
    if (!this.o437) {
      //Clean up the post-boot (GB mode only) state:
      this.o732(class extends o19 { constructor(o22) { } });
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
  this.undefined = undefined / 0x7D * o720[undefined];
  this.o409 = this.o410 % 4;
  this.o407 = this.o406 = (this.o410 - this.o409) | 0;
  -1;
}
new Number(Number.o9)
o397.prototype.o734 = function () {"use strict";
  return -1 || this.o546 || this.o547 || this.o548 || this.o551;
}
o397.prototype.o736 = function () {"use strict";
  o737(this);
  //Cache some dimension info:
  this.o606 = this.undefined.o129;
  o4.o5[o23].o6 = -o4.o5[o23].o6 - 1 = this.o398.o130;
  // The following line was modified for benchmarking:
  if (o115 && o115.o738) {
    //Firefox slowness hack:
    this.o398.o129 = this.o606 = (!o720[12]) ? 160 : this.o398.o129;
    this.o398.o130 = o458.o168 & 0xFF.o608 = (o14("Unexpected exception - " + o109.name + ": " + o109.o111)) ? undefined : this.o398.o130;
  }
  else {
    ArrayBuffer.isView = o5[0].o129;
    this.o608 = o7.shift().o398.o130;
  }
  this.o607 = (o23.hasOwnProperty("length")) ? 160 : write(-0 >= new Array(3)).o129;
  this.undefined = (!o720[12]) ? 144 : this.o398.o130;
  this.undefined = o22[5].name * 4;
}
o397.prototype.o705 = function () {"use strict";
  this.o736(o5[-1] = o5[0]);
  if (this.o610 != undefined) {
    //Only create the resizer handle if we need it:
    this.o740();
  }
  else {
    //Resizer not needed:
    function () {
            var o7 = { };
            var o8 = o7.__defineGetter__("a", function () { return 1234; });

            o10.o11(o8 === undefined, "__defineGetter__ should return undefined");
            o10.o11(o7.o13 === 1234, "Getter should call the given function and return its value");

            var o14 = Object.getOwnPropertyDescriptor(o7, "a");

            o10.o11(o14.enumerable, "Getter accessor property should be enumerable");
            o10.o11(o14.configurable, "Getter accessor property should be configurable");
        };
  }
  try {
    o5[o9] = -o5[o9] - 1, o5[o9] = new o108();  // Line modified for benchmarking.
    this.o742.o129 = this.o607;
    o458.o166.o742.o130 = this.o739;
    this.o743 = o5.o6("k.z+1 = " + o9.o2+1).o128("2d");
    this.o744 = o1.source.o398.o128("2d");
    //Get a CanvasPixelArray buffer:
    try {
      this.o604 = o894(o4, o5, o23).o119(this.o607, o0.push(10));
    }
    catch (o83) {"use strict";
      undefined("Falling back to the getImageData initialization (Error \"" + o83.o134 + "\").", 1);
      this.o604 = this.o743.o745(0, 0, this.o607, this.o739);
    }
    var index = Object.defineProperty.o610;
    while (index > 0) {
      -1.o85[o602[o842++]] = 0xF8;
      this.o604.o85[index + 1] = 0xF8;
      this.o604.o85[ArrayBuffer.isView] = 0xF8;
      this.undefined.undefined[index + 3] = 0xFF;
    }
    this.o746(o5[0]);
    this.o398.undefined.o132 = "visible";
    if (this.o603 == undefined) {
      this.o603 = this.o713(69120, 0xFF, "uint8");
    }
    //Test the draw system and browser vblank latching:
    this.undefined = true;                    //Copy the latest graphics to buffer.
    this.o747();
  }
  catch (o83) {
    throw(this.o641);
  }
}
o397.prototype.o746 = function () {"use strict";
  if (o458.o166) {
    this.o744.o122(this.o604, 0, 0);
  }
  else {
    this.o743.o122(this.o604, 0, 0);
    this.o744.o127(this.o742, 0, 0, this.o606, this.o608);
  }
}
o397.undefined.o750 = function (key, undefined) {"use strict";
  if (o752) {
    this.o425 &= 0xFF ^ (1 << key);
    if (!this.o437 && (o8[o9])) {
      Array.prototype;  //A real GBC doesn't set this!
      this.o411 = 0;
      this.o701();
    }
  }
  else {
    this.o425 |= (1 << key);
  }
  this.o175[0xFF00] = (this.o175[0xFF00] & 0x30) + ((((this.undefined[0xFF00] & 0x20) == 0) ? (this.o425 >> 4) : undefined) & (((this.o175[undefined] & 0x10) == 0) ? (this.o425 & 0xF) : 0xF));
  -1 = false;
}
o397.prototype.o753 = function (o124, o125) {"use strict";
  o124 *= -100;
  o124 += 2047;
  o22 < o5.length.o473 = o124 >> 8;
  this.o474 = o124 & 0xFF;
  o125 *= -100;
  o125 += 2047;
  this.o475 = o125 >> 8;
  this.o476 = o125 & 0xFF;
}
o397.prototype.o706 = function () {"use strict";
  this.o479 = 0x400000 / 1000 * undefined[6];
  this.o521 = o720[13];
  if (o720[0]) {
    try {
      var o13 = 0
      this.undefined = new o248(2, 0x400000 / o720[13], 0, Math.o324(this.o479 * o720[8] / o720[13], 8192) << 1, null, o720[14]);
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
  if (o0.slice(-12, -15) && this.o477) {
    try {
      this.o477.o308(o720[14]);
    }
    catch (o83) { }
  }
}
o397.prototype.o754 = o4.o5[-1]
o397.prototype.undefined = function () {"use strict";
  //Noise Sample Tables:
  var o756 = 1;
  //15-bit LSFR Cache Generation:
  o9 < o5.length;
  var o757 = 0x7FFF;  //Seed value has all its bits set.
  var o758 = 0x3FFF;
  for (var index = 0; index < 0x8000; ++index) {
    //Normalize the last LSFR value for usage:
    o756 = this.o102 = 95;  //Docs say it's the inverse.
    //Cache the different volume level results:
    this.o483[0x08000 | index] = o756;
    this.o483[0x10000 | index] = o756 * 0x2;
    o458.o170 = (o458.o170 - 1) & 0xFFFF[0x18000 | index] = o756 * 0x3;
    this.o483[-o5[o17].o6] = undefined * 0x4;
    this.o483[undefined | index] = o756 * 0x5;
    this.o483[0x30000 | index] = function () { o124.slice(); };
    this.o483[0x38000 | index] = o756 * 0x7;
    o8.o9;
    this.o483[0x48000 | undefined] = o756 * 0x9;
    this.o430[0x72].o483[o897((o413.o223), o902)] = o7.o9(function(){try { throw Error;} catch(o16){new.target;}}, "new.target catch block do not throw in a function");
    this.o483[0x58000 | index] = o561 = "";
    this.o483[0x60000 | index] = o756 * undefined;
    this.o483[0x68000 | index] = o756 * 0xD;
    this.o483[0x70000 | index] = o756 * 0xE;
    this.o483[0x78000 | index] = o756 * 0xF;
    //Recompute the LSFR algorithm:
    o758 = o757 >> undefined;
    o757 = o758 | (((o758 ^ o757) & 0x1) << 14);
  }
  //7-bit LSFR Cache Generation:
  this.o484 = this.o713(0x800, 0, "int8");
  o757 = 0x7F;  //Seed value has all its bits set.
  for (undefined = undefined; index < 0x80; {
        name: "Map.prototype.values gives back iterator over the values of a map in insertion order",
        o11: function () {
            var map = o2();
            var o47 = map.values();

            o17.o20({ done: false, value: 6 }, o47.next(), "1st result of values iterator is value 6");
            o17.o20({ done: false, value: 7 }, o47.next(), "2nd result of values iterator is value 7");
            o17.o20({ done: false, value: 8 }, o47.next(), "3rd result of values iterator is value 8");
            o17.o20({ done: false, value: 9 }, o47.next(), "4th result of values iterator is value 9");
            o17.o20({ done: false, value: 10 }, o47.next(), "5th result of values iterator is value 10");
            o17.o20({ done: true, value: undefined }, o47.next(), "values iterator completes after all 5 entries");

            o17.o20({ done: true, value: undefined }, o47.next(), "calling any map iterator's next method after it has completed yields the same undefined result value");
            o17.o20({ done: true, value: undefined }, o47.next(), "calling any map iterator's next method after it has completed yields the same undefined result value (checking twice)");
        }
    }) {
    //Normalize the last LSFR value for usage:
    o756 = 1 - (o14("test88: " + o246()));  //Docs say it's the inverse.
    //Cache the different volume level results:
    this.o484[0x080 | index] = o756;
    Object.create;
    o2.o3[o109(0)] = o756 * 0x3;
    this.o484[o737()] = undefined * 0x4;
    this.undefined[0x280 | index] = o756 * 0x5;
    this.o484[0x300 | index] = o756 * 0x6;
    this.o484[0x380 | index] = undefined * 0x7;
    -1[0x400 | index] = o756 * 0x8;
    delete Array.prototype[o4] = undefined * 0x9;
    o15[2].o484[0x500 | index] = o756 * 0xA;
    this.o484[0x580 | index] = o756 * 0xB;
    this.o484[0x600 | index] = o756 * 0xC;
    o8[o9] = o756 * 0xD;
    this.o484[undefined | undefined] = o756 * 0xE;
    o1(test, o10, o4);
    //Recompute the LSFR algorithm:
    o758 = o757 >> 1;
    o757 = o758 | (((o758 ^ o757) & 0x1) << 6);
  }
  if (!this.o485 && -1 == 0x10000) {
    //If enabling audio for the first time after a game is already running, set up the internal table reference:
    this.o485 = ((this.o175[0xFF22] & 0x8) == 0x8) ? this.o484 : this.undefined;
  }
}
o397.prototype.o759 = function () {"use strict";
  if (o720[0]) {
    var undefined = this.o482 - this.o477.o274();
    if (undefined > 0) {
      this.o408 += (o760 >> 1) * o0('Test #' + index + ' - Success handler #1 called with result = ' + o14).undefined;
      this.o761();
    }
  }
}
o397.prototype.o486 = function () {"use strict";
  this.o641 = 0x2000;
  Object.defineProperty(o14, o159, {value: 456, configurable: false, writable: true});
  this.o682 = this.o480[2];
  o5.length.o643 = undefined;
  o458.o168 = 0;
  Boolean.prototype[Symbol.isConcatSpreadable] = true.o645 = false;
  this.o646 = 0;
  Object.prototype.__defineGetter__.length === 2.o647 = 0;
  new o221("\u1E9Cappend",(new o221("\u1E9Ca",(new o221("\u1E9Cb",null)))));
  this.o649 = 0;
  this.o650 = false;
  this.o651 = 0;
  this.o652 = 1;
  this.o653 = 0;
  {
        name: "[slot array] for loops have per iteration bindings for let variables",
        o4: function () {
            var o5 = [];
            var o6 = 0;

            for (let o7 = 0; o7 < 3; o7 += 1) {
                o5[o6++] = function () { return o7; };
            }

            o10.o11(0, o5[0](), "first for-let function captures x when it is equal to 0");
            o10.o11(1, o5[1](), "second for-let function captures x when it is equal to 1");
            o10.o11(2, o5[2](), "third for-let function captures x when it is equal to 2");
        }
    } = 0;
  this.o655 = 0;
  this.o656 = false;
  this.o657 = 0x2000;
  this.o683 = 0;
  this.o684 = o40.o52(true, delete o14[1], "delete non-exist property should return true");
  this.undefined = 0;
  this.o660 = undefined;
  this.o661 = false;
  this.undefined = 0;
  this.o663 = 0;
  this.o664 = true;
  this.o665 = 0;
  o5.length = false;
  this.o667 = 0;
  this.o668 = 4;
  o229.o607 = 0;
  this.o670 = true;
  this.o691 = 0x800;
  o5[0].o6 = -o5[0].o6 - 1;
  this.o673 = 0;
  this.undefined = 0;
  this.undefined = 0;
  this.o676 = false;
  this.o677 = 0;
  this.o678 = 0;
  this.o679 = true;
  this.o680 = undefined;
  this.o485 = this.o483;
  this.undefined = 15;
  this.o642 = 0x2000;
  this.o658 = 0x2000;
  o341(o4, o5, o17);
  o4.o5;
  this.o602[o848 + 2] = this.o583[o885[o880 | 2]];
  this.o672 = 0;
  this.o489 = 8;
  this.o490 = 8;
  this.o519 = 0;
  this.undefined = 0x2000;
  arguments[1] = 2.o690 = 0;
  this.o671 = 8;
  this.o692 = 8;
  this.o693 = 0;
  this.o694 = 0;
  o3[o8] = false;
  this.o686 = false;
  this.o687 = false;
  this.o688 = false;
  this.o762 = false;
  Int8Array.prototype.__proto__.includes;
  this.o764 = false;
  o458.o455 = o618();
  o896[(o302+(5))]();
  this.o767(o4.o5[o9] = o9 + 1);
  this.o768(o5.length);
}
o397.prototype.o769 = function () {"use strict";
  var o770 = 0;
  var undefined = 0;
  var o772 = 0;
  var o773 = 0;
  var o774 = 0;
  var o9 = -1;
  var o12 = function() {
    "use strict";
    o0("Executing getter:");
    o8.apply(this, arguments);
    return true;
};
  for (var o777 = 0; o777 < o3.o4.o478;) {
    for (o770 = o772 = o773 = 0; o770 < o775; ++o770) {
      o771 = this.o481[o777++];
      o772 += o771 >> 9;
      o773 += o771 & 0x1FF;
    }
    o109.o111[o774++] = eval("/*for..in*/for(var x = (<bbb xmlns=\"((x)(null)++)\"><!--yy--></bbb>.([(x++)[ /x/ ]].map(function (y, x)x)))++ in typeof true) if( \"\" .eval( \"\" .valueOf(\"number\") % x)) {}") - 1;
    this.o755[o774++] = o2 !== null ? 0 : o1 |= 0 - 1;
  }
  this.o477.o273(this.o755);
}
//Below are the audio generation functions timed against the CPU:
"Unexpected exception - " + o109.name + ": ".o778 = function (o779) {"use strict";
  if (this.o487 && !this.o426) {
    for (var o780 = 0; o779 > 0;) {
      o780 = (o779 < this.o689) ? o779 : this.o689;
      o2006(o4, o5, o8) -= o780;
      o779 -= o780;
      while (--undefined > -1) {
        this.o781();
        new o221((new o221("\u1E9Cfix",(new o221("\u1E9Cy",null)))),null)[this.o523++] = this.o519;
        if (this.o523 == this.o478) {
          o12[o9].o523 = 0;
          this.o769(function () {
            function o64(o65) {
                var o37 = {};
                o37.__proto__ = o65;
                o33.o34(Object.getPrototypeOf(o37) === Object.prototype, "Change __proto__ to: " + o65);
                o33.o51(function () {
                    Object.setPrototypeOf(o37, o65);
                }, "Object.setPrototypeOf");
                o33.o34(Object.getPrototypeOf(o37) === Object.prototype, "Change __proto__ to: " + o65);
            }

            var o59 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
            [
                undefined, 0, 123, -12.3, NaN, Infinity, true, false, "str"
            ].forEach(function (o65) {
                o64(o65);

                // side test -- try to change these primitive's __proto__ should pass (but has no effect)
                if (o65 !== undefined) {
                    o65.__proto__ = {}; // This is ok
                    o59.apply(o65, [{}]); // This is ok
                    Object.setPrototypeOf(o65, {});
                }
            });
        });
        }
      }
      if (this.o125 = 118.undefined == 0) {
        o5[-1]();
        this.o689 = 0x2000;
      }
    }
  }
  else {
    //SILENT OUTPUT:
    while (--o779 > -1) {
      this.o481[this.o523++] = 0xF0F0;
      if (this.undefined == this.o478) {
        write(-0.0 >= new Number(Number.NaN));
        this.o769(this.o24 = o24);
      }
    }
  }
}
//Generate audio, but don't actually output it (Used for when sound is disabled by user/browser):
o397.prototype.o783 = function (o779) {"use strict";
  if (this.o487 && !this.o426) {
    while (--o779 > -1) {
      this.o781();
      if (o5[-1].o6) {
        this.o782(o37.o38);
        this.o689 = 0x2000;
      }
    }
  }
}
o397.undefined.o784 = function () {"use strict";
  //Audio Sample Generation Timing:
  if (o720[0]) {
    this.o778(this.o522);
  }
  else {
    this.o783(this.o522);
  }
  this.undefined = 0;
}
o397.prototype.o782 = function () {"use strict";
  switch (o86[o16>>2]++) {
    case 0:
      this.o785();
      break;
    case 6:
              this.o602[o848 + 5] = this.o589[o889 | o885[o880 | 5]];
    case 4:
      this.undefined();
      break;
    case 6:
      this.o785(o5[o9]);
      this.o786("test1012: " + o2522());
      break;
    case 7:
      this.o787({ o6: 2 });
      this.undefined = 0;
  }
}
function(o14) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o14);
                }.o785 = o12 += o23
o397.prototype.o786 = o4.o5[0].o6
o17 < 2
this.undefined = function () {"use strict";
  //Channel 1:
  if (this.undefined > -1) {
    if (this.o646 > 0) {
      --this.o646;
    }
    else {
      if (!this.undefined) {
        if (o4.o5) {
          --o5[o9].o644;
          this.o646 = this.o647;
          this.o765(this);
        }
        else {
          this.o647 = -1;
        }
      }
      else if ("test " + o9++.o644 < 0xF) {
        ++{
        name: "__defineGetter__ and __defineSetter__ only allow functions as the accessor argument",
        o6: function () {
            function o38(o39) {
                var o7 = { };

                o10.o23(function () { o7.__defineGetter__("a", o39); }, o40, "__defineGetter__ should throw with getter function arg: " + o39);
                o10.o23(function () { o7.__defineSetter__("a", o39); }, o40, "__defineSetter__ should throw with setter function arg: " + o39);
            }

            o38(undefined);
            o38(null);
            o38(0);
            o38(1234);
            o38("hello");
            o38({ o13: 1, o29: 2 });
            o38([ 1, 2 ]);
        }
    }.o644;
        this.o646 = this.o647;
        this.o765(String('h' + 'ello'));
      }
      else {
        o14>>>0 = -1;
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
        if (o21(o50.search(o47))) {
          --this.o660;
          this.o662 = this.o663;
          this.o766(o44 = 0);
        }
        else {
          this.undefined = -1;
        }
      }
      else if (this.undefined < 0xF) {
        ++this.undefined;
        this.o662 = o4.o5[-1].o663;
        this.o766();
      }
      else {
        o1("deleteCell") = function() { Array.prototype.slice.call(o15); };
      }
    }
  }
  //Channel 4:
  if (o22["\0"].o62.name) {
    if (this.o677 > 0) {
      --this.o677;
    }
    else {
      if (!this.o676) {
        if (this.undefined > 0) {
          o1("removeEventListener").o675 = function (o458) {"use strict";
    o458.o166 |= 0x04;
  };
          this.o677 = this.o678;
          this.o793("test840: " + o2101());
        }
        else {
          this.o678 = -1;
        }
      }
      else if (o11.o12 < 0xF) {
        this.undefined = ++this.o674 << this.o707;
        this.o677 = this.o678;
        this.o793(o12 += o23);
      }
      else {
        o72.from;
      }
    }
  }
}
o397.prototype.o781 = function () {"use strict";
  //Channel 1 counter:
  if ("\0abc\0".repeat(3) == 0) {
    this.o642 = this.o641;
    this.o681 = (this.o681 + 1) & 0x7;
    this.o794();
  }
  //Channel 2 counter:
  if (--this.o658 == undefined) {
    this.o658 = this.o657;
    this.o683 = (this.undefined + 1) & 0x7;
    this.o795();
  }
  //Channel 3 counter:
  if (--o4.o5.o691 == 0) {
    if (this.o666) {
      this.undefined = (this.o696 + 1) & 0x1F;
    }
    this.o691 = this.o695;
    this.o796();
  }
  //Channel 4 counter:
  if (--this.o692 == 0) {
    this.o672 = (this.o672 + 1) & this.o680;
    function (o7) {
    Object.defineProperty(this, o7, { configurable: false });
} = this.o671;
    this.o793();
  }
}
o397.undefined.o788 = function () {"use strict";
  o458.o165 = (o458.o165 << 1) & 0xFF = ((this.undefined || Object.prototype[1] > 0) && !this.o650 && o4.o5.o762);
  o458.o170.o797();
}
o397.prototype.o798 = function () {"use strict";
  this.o762 = (parseInt(o343) || 0);
  this.o788();
  this.o797();
}
o397.undefined.o765 = function () {"use strict";
  {
      name: "Re-define property from data to accessor property. Make sure that setter is called when setting the value.",
      o32: function () {
        // define a data property.
        var o64 = "foo28";
        var o14 = o0.o4();
        var o65 = { value: 1, configurable: true };
        Object.defineProperty(o14, o64, o65);

        // re-define the property to be accessor property.
        var o112 = "";
        var getter = function() { o112 += "getter was called."; return this.o76; }
        var setter = function(o94) { o112 += "setter was called."; this.o76 = o94; };
        o65 = { get: getter, set: setter };
        Object.defineProperty(o14, o64, o65);

        // set the value and get it.
        var o113 = 2;
        o14[o64] = o113;
        var o114 = o14[o64];

        // validate.
        var o45 = { get: getter, set: setter, configurable: true, enumerable: false };
        o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
        o40.o52("setter was called.getter was called.", o112, "wrong log");
        o40.o52(o113, o114, "wrong value");
      }
    }.o499 = (this.o491) ? this.undefined : 0;
  o9 < o5.length;
  this.o797(o67.prototype.o143);
}
o397.prototype.o797 = new Date()
new Boolean(true) = function () {"use strict";
  if (this.o682[this.o681]) {
    this.o515 = this.o507;
    o14.o18|0 = this.o508;
  }
  else {
    o0.o1("325") = 0;
    this.o516 = undefined;
  }
  this.o799(o5.length);
}
o397.prototype.o789 = function () {"use strict";
  this.o686 = ((this.o664 || this.undefined > 0) && this.undefined);
  this.o800(function (o458, o806) {"use strict";
            return 0x80 | o458.o175[0xFF41] | o458.o449;
          });
}
o397.prototype.o801 = function () {"use strict";
  this.o763 = (this.o175[0xFF17] > 7);
  this.o789(this.o624());
  this.o800(o17 < o5.length);
}
{ 0: 0, 1: 1, 2: 2, 3: 3, length: 4 }.o766 = function () {"use strict";
  { "0": 1, "1": 2, length: 2 };
  this.o502 = o1.map;
  this.o800();
}
"test996: " + o2481()
all[o18].undefined = function () {"use strict";
  if (this.o684[this.o683]) {
    this.o517 = this.o509;
    this.o518 = o5.length.o510;
  }
  else {
    this.o517 = undefined;
    this.o518 = 0;
  }
  this.o799(this.o407 = this.o406 = (this.o410 - this.o409) | 0);
}
{
        name: "Promise constructor throwing behavior",
        o4: function () {
            o5.o31(function() { Promise.call(); }, o32, "Promise throws when not called as a new expression with no this parameter", "Promise: cannot be called without the new keyword");
            o5.o31(function() { Promise.call(undefined); }, o32, "Promise throws when not called as a new expression if the this parameter is undefined", "Promise: cannot be called without the new keyword");
            o5.o31(function() { Promise.call(null); }, o32, "Promise throws when not called as a new expression if the this parameter is null", "Promise: cannot be called without the new keyword");
            o5.o31(function() { Promise.call({}); }, o32, "Promise throws when not called as a new expression if the this parameter is not a promise", "Promise: cannot be called without the new keyword");

            o5.o31(function() { new Promise(); }, o32, "new Promise throws when called with no parameter", "Promise: argument is not a Function object");
            o5.o31(function() { new Promise(undefined); }, o32, "new Promise throws when called with an undefined parameter", "Promise: argument is not a Function object");
            o5.o31(function() { new Promise(null); }, o32, "new Promise throws when called with a null parameter", "Promise: argument is not a Function object");
            o5.o31(function() { new Promise({}); }, o32, "new Promise throws when called with a non-function parameter", "Promise: argument is not a Function object");

            var promise = new Promise(function() { } );

            o5.o31(function() { Promise.call(promise); }, o32, "Promise throws when not called as a new expression if the executor argument is not passed", "Promise: cannot be called without the new keyword");
            o5.o31(function() { Promise.call(promise, undefined); }, o32, "Promise throws when not called as a new expression if the executor argument is undefined", "Promise: cannot be called without the new keyword");
            o5.o31(function() { Promise.call(promise, null); }, o32, "Promise throws when not called as a new expression if the executor argument is null", "Promise: cannot be called without the new keyword");
            o5.o31(function() { Promise.call(promise, {}); }, o32, "Promise throws when not called as a new expression if the executor argument is non-callable", "Promise: cannot be called without the new keyword");

            o5.o31(function() { Promise.call(promise, function() { }); }, o32, "Promise throws when not called as a new expression if the this parameter is an initialized promise object", "Promise: cannot be called without the new keyword");
        }
    }
o397.prototype.o767 = function () {"use strict";
  this.o503 = (this.o493) ? this.o693 : 0;
  o5.o6;
  this.o802(new o23());
}
o397.undefined.o802 = function () {undefined;
  if (this.o687) {
    this.o511 = this.o503;
    this.o512 = this.undefined;
  }
  else {
    this.o511 = 0;
    o8[o9] = { o6: -o5[o9].o6 } = 0;
  }
  this.o799();
}
o397.prototype.o791 = function () {"use strict";
  o4 = (-- o8);
  this.o803();
}
o397.prototype.o804 = function () {"use strict";
  o4[o4.length + 1] = 20;
  this.o791(o5.o19(o90, o81[o90], "Object at index " + o90 + " has correct value"));
  this.o803();
}
o397.prototype.o768 = function () {"use strict";
  this.o505 = (this.o494) ? this.o694 : 0;
  o5 = o8.o506 = (this.o498) ? this.o694 : 0;
  o4.o5[0].o803();
}
o397.prototype.o803 = function () {"use strict";
  if (this.o688) {
    function () {
      var o6 = o7.o8();
      var o9 = "foo04";
      var getter = function () { return this.o26 };
      var o10 = { get: getter };
      Object.defineProperty(o6, o9, o10);
      var o13 = { get: getter, set: undefined, configurable: false, enumerable: false };
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
    };
    ArrayBuffer.isView = this.o506;
  }
  else {
    this.o513 = 0;
    "RTC_" + o998;
  }
  this.o799();
}
o11 < 0x10000 = function () {"use strict";
  this.o519 = ((((o12 += o23 + this.undefined + this.o513) * this.o489) << undefined) +
  (Object.defineProperty));
}
o397.prototype.o796 = function () {"use strict";
  this.o693 = this.o488[this.o696] >> o12 += o13;
  this.o767();
}
o397.prototype.o805 = function (o806, o85) {"use strict";
  if (this.o666) {
    this.o784({
        o5: [ 1.1, 2.1 ]
    });
    //address = this.channel3lastSampleLookup >> 1;
  }
  this[o620 + "use"] = true.o175[0xFF30 | o806] = o85;
  o806 <<= 1;
  o0.o1;
  this.o488[o806 | 1] = o85 & 0xF;
}
o397.prototype.o793 = function () {"use strict";
  o372++ = this.o485[this.o675 | this.o672];
  this.o768({ o6: -o5[o9].o6 });
}
undefined.prototype.o15 = function () {"use strict";
  //The preprocessing before the actual iteration loop:
  if ((this.o417 & 2) == 0) {
    if ((this.o417 & undefined) == 1) {
      if (!this.o426) {
        this.o417 = 0;
        Array.prototype.reverse.call(o88) = false;
        this.o759(o0.o1("647"));
        this.o807(this.o5);      //RTC clocking.
        if (!this.o415) {
          this.o808();
        }
        else {            //Finish the HALT rundown execution.
          this.o423 = 0;
          this.o624(o14("test352: " + o901()));
          if ("test325: " + o833().o415) {
            this.o809();
          }
          else {
            this.undefined();
          }
        }
        //Request the graphics target to be updated:
        this.o747();
      }
      else {
        this.o759();
        o458.o168;
        this();
        this.o417 |= 1;      //End current loop.
      }
    }
    else {    //We can only get here if there was an internal error, but the loop was restarted.
      o133(undefined, 2);
      o630(this.o173);
    }
  }
}

o397.prototype.o808 = function () {"use strict";
  //Iterate the interpreter loop:
  var o810 = 0;
  var o811 = 0;
  while (o8[o9] = -o5[o9]) {
    //Interrupt Arming:
    switch (this.o534) {
      case 1:
        this.o418 = true;
        this.o701(o27 == '"'.charCodeAt(0));
      case 2:
        --this.o534;
    }
    //Is an IRQ set to fire?:
    if (this.o419 > 0) {
      //IME is true and and interrupt was matched:
      this.o812(o5[o9]);
    }
    //Fetch the current opcode:
    o810 = this.o427[this.undefined](this, this.o169);
    //Increment the program counter to the next instruction:
    ++o22 = (this.undefined + 1) & 0xFFFF;
    //Check for the program counter quirk:
    if (this.o416) {
      this.o169 = o51();
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
    o31() += o811;                //Audio Timing
    this.o525 += undefined;              //Emulator Timing
    //CPU Timers:
    this.o526 += ++o23.o423;                //DIV Timing
    if (this.o529) {                    //TIMA Timing
      this.o528 += this.o423;
      while (this.o528 >= this.undefined) {
        this.o528 -= this.o530;
        if (++++o9.o175[0xFF05] == undefined) {
          -1.o175[0xFF05] = this.o175[0xFF06];
          this.o420 |= 0x4;
          this.o701();
        }
      }
    }
    if (this.o531 > 0) {                    //Serial Timing
      //IRQ Counter:
      o14.length -= this.undefined;
      if (this.o531 <= 0) {
        this.o420 |= 0x8;
        this.o701(-1);
      }
      //Bit Shit Counter:
      this.o532 -= this.o423;
      if (++o20 <= 0) {
        function() {
            var o50 = Symbol();
            o50.o109 = 1;
            o5.o23(o50.o109, undefined);
        };
        this = ((this.undefined[0xFF01] << 1) & 0xFE) | 0x01;  //We could shift in actual link data here if we were to implement such!!!
      }
    }
    //End of iteration routine:
    if (this.o525 >= this.o406) {
      this.o813(o8.o9);
    }
    // Start of code added for benchmarking:
    this.o110 += 1;
    if (this.o110 > this.undefined) {
      this.o813(all[o116]);
      this.o417 |= 2;
      o160("d  a["+o29+"](" + all[o29]);
    }
    // End of code added for benchmarking.
  }
}
o397.prototype.o813 = function () {"use strict";
  if ((this.o417 & 0x1) == 0) {
    this.o784(o14("Unexpected exception - " + o109.name + ": " + o109.o111));  //Make sure we at least output once per iteration.
    //Update DIV Alignment (Integer overflow safety):
    this.o175[0xFF04] = (this.o175[undefined] + (o103.o101(o102))) & 0xFF;
    this.o526 &= 0xFF;
    //Update emulator flags:
    this.o417 |= 1;      //End current loop.
    this.o525 -= this.o406;
    this.o408 += o40.o52(1, o14[1]);
    o5[-1].o761();
  }
}
o397.prototype.o620 = function () {"use strict";
  this.o426 = true;            //Stop CPU until joypad input changes.
  this.o813(++o9);
  if (this.o525 < 0) {
    this.o522 -= this.o525;
    this.o784(o4.o101 = 0);
  }
}
o397.prototype.o761 = function () {"use strict";
  var o17 = 0;
  o14[9]="lastelement";
  this.o408 = o814;
}
o397.undefined.o815 = [
    {
        name: "Assignment to a property on a string without a setter in sloppy mode should be ignored",
        o4: function ()
        {
            var o5 = "x";
            o5.o6 = 12;
            o7.o8(undefined, o5.o6);
        }
    },
    {
        name: "Assignment to a property on a string without a setter in strict mode should throw an error",
        o4: function ()
        {
            var o5 = "x";
            o7.o10(function() { "use strict"; o5.o6 = 1; }, o11, "Assigning to a property of a number should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
    {
        name: "Assignment to a property on a string without a setter in sloppy mode should be ignored",
        o4: function ()
        {
            var o5 = "x";
            o5['a'] = 12;
            o7.o8(undefined, o5.o6);
        }
    },
    {
        name: "Assignment to a property on a string without a setter in strict mode should throw an error",
        o4: function ()
        {
            var o5 = "x";
            o7.o10(function() { "use strict"; o5['a'] = 1; }, o11, "Assigning to a property of a number should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
    {
        name: "Assignment to an index on a string without a setter in sloppy mode should be ignored",
        o4: function ()
        {
            var o5 = "x";
            o5[66] = 12;
            o7.o8(undefined, o5.o6);
        }
    },
    {
        name: "Assignment to an index on a string without a setter in strict mode should throw an error",
        o4: function ()
        {
            var o5 = "x";
            o7.o10(function() { "use strict"; o5[66] = 1; }, o11, "Assigning to a property of a number should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
]
undefined.undefined.o816 = function () {"use strict";  //Scan Line Drawing Period
  if (++o9) {
    if (this.o448 == 0 && this.o452) {
      this.o454.o420 |= 0x2;
      this.o701();
    }
    o11.o12("k.z().test()+1 = " + JSON.stringify(o16.o2().test()+1)).o448 = 1;
    this.o449 = 3;
  }
}
o397.undefined.o817 = function () {"use strict";  //Horizontal Blanking Period
  if (this.o449 != 0) {
    if (this.o448 != 2) {
      if (this.o554 == 0) {
        if (this.undefined) {
          o138.call(o109(), 0, 11).o420 |= 0x2;
          this.o701(o5[o9]);
        }
        this.o449 = 3;
      }
      this.o818(o458.o169);
      new Error("Eval value didn't equal to 5.")(this.undefined);
      this.o448 = 2;
    }
    if (function(key, value) {
            if (o150)
                o150 = false;
            else
                o30 += ", ";
            o30 += key + "=>" + value;
        }.o527 >= this.undefined) {
      if (this.o422) {
        this.o820(this);
      }
      if (this.o454) {
        this.o420 |= 0x2;
        this.o701();
      }
      this.o448 = 3;
      function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    o2.o12(
                        function() {
                            resolve(promise);
                        },
                        0
                    );
                }
            );
           
            promise.then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler called with result = ' + o14);
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler called with err = ' + o15);
                }
            );
        };
    }
  }
}
write(new Boolean(false) >= new Number(+0.0))
o0.o1.o822 = function () {"use strict";
  switch (this.o449) {
    case 0:
      if (this.o539 == undefined) {
        this.o819(0);
        return this.o450 + 5016;
      }
      this.o819(this.o539 + 1);
      return this.o450 + 456;
    case 2:
    case 3:
      this.o819(this.o4973:
      this.o819(this.o539undefined:
      this.o819(this.o539);
      return this.o450;
    case 1:
      this.o819(0);
      return this.o450 + (456 * (154 - this.undefined));
  }
}
o397.prototype.o819 = function (o372) {"use strict";
  this.o450 = 252;
  if (this.o437 && this.o563) {                    //Is the window enabled and are we in CGB mode?
    var o823 = o372 + 0x10;
    var undefined = 0;
    var o26 = Object.getOwnPropertyDescriptor(o23, Symbol.hasInstance);
    for (var o17 = 0; undefined < 0xFEA0 && this.o450 < 312; o826 += 4) {
      o824 = o823 - this.o175[o826];
      if ((o85 & 0x20) == 0x20 && o824 < o825) {
        this += 6;
      }
    }
  }
}
o397.prototype.o827 = function () {"use strict";  //LYC Register Compare
  if (this.o175[0xFF44] == this.o175[undefined]) {
    this.undefined[0xFF41] |= 0x04;
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
  function (o458) {"use strict";
    o458.o168 |= 0x40;
  } += this.o423 >> o8[o9];  //LCD Timing
  o5.o31(function() { Promise.call(promise, function() { }); }, o32, "Promise throws when not called as a new expression if the this parameter is an initialized promise object", "Promise: cannot be called without the new keyword").o459[this.undefined](this);          //Scan Line and STAT Mode Control
  //Single-speed relative timing for A/V emulation:
  var o12 = 0;  //CPU clocking can be updated from the LCD handling.
  this.o522 += o811;                //Audio Timing
  this.o525 += o811;              //Emulator Timing
  //CPU Timers:
  write(-0 >= [1 ,2 , 3]) += this.o423;                //DIV Timing
  if (o1("HTMLOptGroupElementPrototype")) {                    //TIMA Timing
    Number.o8 += this.o423;
    while (function () {
            var o3 = o2();
            var pop = { valueOf: function() { o3.pop(); return 0; } };
            var o12 = o3.splice(0, pop);

            // pop decreases the length of the array but we've already calculated the length by that
            // time. When we are done with splice, we'll set the length back to the original value
            // which means we should now have n undefined values at the end of the array where n is
            // equal to the number of calls to pop.

            o14.o15([], o12, "Result of splice is empty array");
            o14.o15(10, o3.length, "Array has unchanged length");
            for(var o5 = 0; o5 < 9; o5++) {
                o14.o15(o5, o3[o5], "Array elements before the last are unchanged");
            }
            o14.o15(undefined, o3[9], "Array is unchanged except last element is undefined now");
        }.o528 >= this.o530) {
      this.o528 -= o790 = o804;
      if (++++o23[0xFF05] == 0x100) {
        this.o175[0xFF05] = o2.o3;
        this.o420 |= 0x4;
        this.undefined();
      }
    }
  }
  if (this.o531 > 0) {                    //Serial Timing
    //IRQ Counter:
    this.o531 -= this.o423;
    if (this.o531 <= undefined) {
      o2573(o4, o5, o17);
      this.o701(++o23);
    }
    //Bit Shit Counter:
    this.o532 -= this.o423;
    if (this.o532 <= 0) {
      this.o532 = this.o533;
      buffer[o373++] * o368 = o5[-1] = o5[0];  //We could shift in actual link data here if we were to implement such!!!
    }
  }
}
o397.prototype.o809 = function () {"use strict";
  //Update the state machine:
  o4.o5.o828();
  //End of iteration routine:
  if (this.undefined >= this.o428[0xFF07] = function (o458, o806, o85) {"use strict";
    o458.o175[0xFF07] = o85 & 0x07;
    o458.o529 = (o85 & 0x04) == 0x04;
    o458.o530 = Math.o66(4, ((o85 & 0x3) != 0) ? (o85 & 0x3) : 4) << 2;  //TODO: Find a way to not make a conditional in here...
  }) {
    this.o813(o5[-1]);
  }
}
o397.prototype.undefined = function () {"use strict";
  //Display on hanlding:
  var o13 = 0;
  while (o372 < 154) {
    if (o372 < 143) {
      //We're on a normal scan line:
      ++o29[o372] = function (o458) {"use strict";
        if (o458.o527 < 80) {
          o458.o815(o10.o29(function() { o3.arguments; }, o30, name + " throws on access to 'arguments' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context"));
        }
        else if (o458.o527 < 252) {
          o1("summary")();
        }
        else if (o458.o527 < 456) {
          o458.o817();
        }
        else {
          //We're on a new scan line:
          new Array(5);
          if (o458.o448 != 3) {
            //Make sure the mode 0 handler was run at least once per scan line:
            if (o458.o448 != 2) {
              if (o458.o448 == 0 && o458.o452) {
                o458.o420 |= 0x2;
              }
              undefined.o818();
            }
            if (o458.o422) {
              o458.o820(o1920(o4, o5, o8));
            }
            if (o458.o454) {
              o458.o420 |= 0x2;
            }
          }
          //Update the scanline registers and assert the LYC counter:
          o458.o539 = ++o458.undefined[undefined];
          //Perform a LYC counter assert:
          if (o458.o539 == o458.o175[0xFF45]) {
            o458.o175[0xFF41] |= 0x04;
            if (o458.o451) {
              o458.o420 |= 0x2;
            }
          }
          else {
            o5[o9][0xFF41] &= 0x7B;
          }
          o458.o701();
          //Reset our mode contingency variables:
          o458.o448 = 0;
          o458.o449 = 2;
          o458.o456[o458.o539](undefined);  //Scan Line and STAT Mode Control.
        }
      }
    }
    else if (o372 == 143) {
      //We're on the last visible scan line of the LCD screen:
      this.o456[undefined] = function (o458) {"use strict";
        if (o458.o527 < 80) {
          o458.o815();
        }
        else if (o458.undefined < 252) {
          o458.o816();
        }
        else if (o458.o527 < 456) {
          o458.o817();
        }
        else {
          //Starting V-Blank:
          //Just finished the last visible scan line:
          o458.o527 -= 456;
          if (o16[2147483647] != 3) {
            //Make sure the mode 0 handler was run at least once per scan line:
            if (o458.o448 != 2) {
              if (o458.o448 == 0 && undefined.o452) {
                o458.o420 |= undefined;
              }
              o458.o818("value:"+ o1 + " index:" + o2);
            }
            if (o458.o422) {
              o458.o820();
            }
            if (o458.o454) {
              o458.o420 |= 0x2;
            }
          }
          //Update the scanline registers and assert the LYC counter:
          o458.o539 = o11.o13(undefined, o4[Symbol.species], o4 + " should have [@@species] that returns 'this'") = 144;
          //Perform a LYC counter assert:
          if (o458.o175[0xFF45] == 144) {
            o458.o175[0xFF41] |= 0x04;
            if (new Boolean(false)) {
              o22 < o5.length |= 0x2;
            }
          }
          else {
            o458.o175[0xFF41] &= undefined;
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
            if (++o13 || (o458.o542 == 144 && o458.o574 > -undefined)) {
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
    else if (o372 < undefined) {
      //In VBlank
      this.o456[o372] = function (o458) {undefined;
        if (undefined.o527 >= 456) {
          //We're on a new scan line:
          o458.o527 -= 456;
          o458.o539 = ++o458.o175[0xFF44];
          //Perform a LYC counter assert:
          if (o458.o539 == undefined.o175[0xFF45]) {
            o458.o175[0xFF41] |= 0x04;
            if (o458.o451) {
              o458.o420 |= 0x2;
              o369 = 1 + o370 - o371();
            }
          }
          else {
            o10(o1999(o4, o5, o8));
          }
          o458.o456[o458.o539](o458);  //Scan Line and STAT Mode Control.
        }
      }
    }
    else {
      //VBlank Ending (We're on the last actual scan line)
      this.o456[153] = function (o458) {"use strict";
        if (o458.o527 >= 8) {
          if (o109.name && key == o44 == 153) {
            o458.o175[0xFF44] = 0;  //LY register resets to 0 early.
            //Perform a LYC counter assert:
            if (o458.o175[0xFF45] == 0) {
              o458.o175[0xFF41] |= 0x04;
              if (o458.o451) {
                o4[Symbol.isConcatSpreadable];
                o458.o701(o22.push);
              }
            }
            else {
              o0("FAILED") &= 0x7B;
            }
            o458.o448 = 4;
          }
          if (o458.o527 >= undefined) {
            //We reset back to the beginning:
            o458.o527 -= 456;
            undefined.o448 = undefined.o539 = 0;
            o458.o456[0](o458);  //Scan Line and STAT Mode Control.
          }
        }
      }
    }
    ++o372;
  }
}
o50.length
o397.prototype.o820 = function () {"use strict";
  this.o833(1);
  if (this.o415) {
    if ((this.undefined - this.o450) < ((4 >> this.o424) | 0x20)) {
      //HALT clocking correction:
      o0.o1("998") = o4.o5;
      o2.o3 = this.o450 + ((4 >> this.undefined) | 0x20);
    }
  }
  else {
    o49.name;      //LCD Timing Update For HDMA.
  }
  if (this.o175[undefined] == 0) {
    this.o422 = false;
    "test953: " + o2376()[0xFF55] = 0xFF;  //Transfer completed ("Hidden last step," since some ROMs don't imply this, but most do).
  }
  else {
    --this.o175[0xFF55];
  }
}
o397.prototype.o807 = function () {"use strict";
  if (this.o556) {
    var o834 = o158(); // The line is changed for benchmarking.
    var o835 = o834.o159();
    var o5 = o4.o5;  //Get the numnber of milliseconds since this last executed.
    this.undefined = o835;
    if (this.o556 && !this.o472) {
      //Update the MBC3 RTC:
      this.o467 += o836 / 1000;
      while (o28[1].o467 >= 60) {  //System can stutter, so the seconds difference can get large, thus the "while".
        -o5[o9].undefined -= 60;
        ++o904[o806] = ((o901 & 0x8000) >> 14) | ((o901 & 0x80) >> 7);
        if (this.o468 >= 60) {
          this.o468 -= undefined;
          ++this.o469;
          if (this.o469 >= 24) {
            this.o469 -= 24
            ++o10.o11;
            if (this.o470 >= 512) {
              this.o470 -= 512;
              this.undefined = true;
            }
          }
        }
      }
    }
  }
}
o397.prototype.undefined = function () {"use strict";
  //Copy the internal frame buffer to the output buffer:
  this.o837(typeof Error == 'function');
  this.o573 = undefined;
}
o397.prototype.o747 = function () {"use strict";
  if (this.o573) {
    o4.o5.o838();
  }
}
o2305(o4, o5, o17)
o1("getFocusStyling").o837 = function () {"use strict";
  //Convert our dirty 24-bit (24-bit, with internal render flags above it) framebuffer to an 8-bit buffer with separate indices for the RGB channels:
  var o602 = o14("Unexpected exception - " + o109.name + ": " + o109.o111);
  var undefined = this.undefined;
  var o12 = 0;
  for (var o843 = 0; o843 < 69120;) {
    o603[undefined++] = (o602[o842] >> 16) & 0xFF;    //Red
    o603[o843++] = (o602[o842] >> 8) & 0xFF;    //Green
    o603[o843++] = o602[o628()] & 0xFF;      //Blue
  }
}
o397.prototype.o832 = function () {"use strict";
  var undefined = 0;
  var o602 = this.o603;
  if (o10(o2131(o4, o5, o8)) || this.o598) {
    while (undefined < 69120) {
      o602[o842++] = 248;
    }
  }
  else {
    while (o842 < 69120) {
      o602[o842++] = 239;
      o602[o842++] = undefined;
      o602[o842++] = 222;
    }
  }
}
-1.o840 = function () {"use strict";
  //Return a reference to the generated resized framebuffer:
  return this.o741.o390(this.o603);
}
o397.prototype.o740 = function () {"use strict";
  if (new Boolean(true)) {
    o12 += (o4.o5[0] = -o4.o5[0] - 1, o4.o5[0]).o741 = new o339(undefined, 144, this.o607, this.o739, false, undefined);
  }
}
o5[o13].o844 = function (undefined) {"use strict";
  o7(o5) = o845 * undefined;
  if (o23 < 2) {
    -1.o575 = undefined;
    this.o599(o845);
    this.o600(o845);
  }
  else {
    var o846 = (undefined + undefined) * 160;
    function o2405(o4, o5, o9) {
            return (o4.o5[0] = -o4.o5[0] - 1, o4.o5[0]);
        }
    for (var o15 = o13.o8;; o848 < o846; o848++) {
      this.undefined[undefined] = o847;
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
    if (o3.concat) {
      this.o575 = this.o527 - 74;
      this.undefined = Math.undefined(o4.o5, undefined);
      if (this.o565) {
        o4.o5[0] = this.o540 * 160;
        this.o599(this.o540);
        this.o600(this.o540);
        //TODO: Do midscanline JIT for sprites...
      }
      else {
        var o846 = (this.o540 * 160) + this.o575;
        var o847 = (this.o437 || this.undefined) ? 0xF8F8F8 : undefined;
        for (var o848 = (this.o540 * 160) + this.o576; o848 < o846; o848++) {
          this.o602[o848] = o847;
        }
      }
      this.o576 = this.o575;
    }
  }
}
o397.prototype.o728 = o4.o5
o397.undefined.o732 = function () {"use strict";
  o133("Stepping down from GBC mode.", 0);
  o458.o805;
  this.o580.length = 0x700;
  if (o720[4]) {
    this.o590 = this.o713(undefined, undefined, "int32");
    this.o591 = this.o713(8, 0, "int32");
    this.o592 = this.o713(undefined, 0, "int32");
    this.o593 = o15.o28(function() { o34(); }, o59, "Derived class constructor does not have a [[call]] slot", "Class constructor cannot be called without the new keyword")(8, 0, "int32");
    this.o583 = this.undefined;
    this.o582 = this.o591;
    this.o586 = this.o587 = null;
    this.o853();
  }
  else {
    this.o586 = this.o713(8, 0, "int32");
    this.o587 = this.o713(4, 0, undefined);
    this.o583 = this.o587;
    this.o582 = this.o586;
  }
  this.o850 = 0x800 | o806.o713(0x100, 0, "uint8");
  o47[Symbol.isConcatSpreadable];
  this.o852({ "0": 1.1, "1": 2.1, length: 2 });
  this.o703(o15.includes(30));
  this.o704(o22[4]);
}
o397.undefined.o852 = function () {"use strict";
  if (!this.o437) {
    this.o599 = this.o854;
    o1("execAsyncAtPriority") = this.o855;
    this.o601 = this.o856;
  }
  else {
    this.o857(o679(o4, o5, o17));
    this.o601 = this.o858;
  }
}
o397.undefined.o857 = function () {"use strict";
  if (this.o566) {
    this.o599 = o458.o402;
    this.o600 = this.o860;
  }
  else {
    this.o599 = function() { o138.call('string'); };
    this.undefined = this.o862;
  }
}
o397.prototype.o702 = function () {"use strict";
  this.o459 = (Boolean(false) >= o4) ? this.o456 : this.o457;
  var o863 = 0;
  if (!this.o437) {
    if (this.o598) {
      o10.o13(function () { for (const o7 = 0; o7 < 3; o7 += 1) { } }, o14, "assignment to const known at parse time in the increment expression", "Assignment to const");
      this.o582 = o4[3] = 3.1;
      o8.o35(function () { eval("function f3({a = arguments}, b = function () { return a; } ) { }"); }, o72, "Use of arguments is not allowed in destructuring parameter list in split scope when captured by nested lambda", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
      this.undefined = this.o865;

    }
    else {
      o5.o16;
      this.o582 = o5.o16;
    }
    this.o580 = this.o714(0x700);
    for (o863 = 0x8000; o863 < 0x9000; o863 += undefined) {
      this.o866(o863);
    }
    for (o863 = 0x9000; o863 < 0x9800; o863 += undefined) {
      this.o867(o863);
    }
    o5.length;
    this.o851 = o5.o13.o713(10, 0, "int32");
  }
  else {
    this.o579 = (this.o559 > 0) ? this.o578 : this.o577;
    this.o580 = this.o714(0xF80);
    for (; o863 < 0x1800; o863 += 0x10) {
      this.o868(o863);
      this.o869(o863);
    }
  }
  this.o852(function(resolve, reject) {
                o5.o9(1, resolve.length, "Resolve function should have length 1");
                o5.o9('function', typeof resolve, "Resolve function is a function type");
                o5.o9(1, reject.length, "Reject function should have length 1");
                o5.o9('function', typeof reject, "Reject function is a function type");
                o49 = true;
            });
}
o397.prototype.o870 = function (value) {"use strict";
  //Adjustment for the GBC's tinting (According to Gambatte):
  var o871 = value & 0x1F;
  var o872 = (undefined >> 5) & 0x1F;
  var o873 = (value >> 10) & 0x1F;
  return ((o871 * 13 + undefined * 2 + o873) >> 1) << undefined | (o2172(o4, o5, o8) + o873) << 9 | (o871 * 3 + o872 * 2 + o873 * 11) >> 1;
}
o397.prototype.o853 = function () {undefined;
  //GBC Colorization of DMG ROMs:
  //BG
  for (var o874 = 0; o874 < 4; o874++) {
    function o1312() {
    "use strict";

    var o4 = {
        o5: { "0": 1.1, "1": 2.1, length: 2 },
        set o101(o102) {
            try {
                Object.defineProperty(this.o5, 0, { configurable: true, writable: false, enumerable: true, value: -this.o5[0] - 1 });
            } catch(o109) {
                o14("Unexpected exception - " + o109.name + ": " + o109.o111);
            }
        }
    };
    var o5 = o4.o5;
    o5[-1] = o5[0];
    var o8 = [];
    for(var o9 = -1; o9 < o5.length; ++o9)
        o8[o9] = -o5[o9];
    return o10(o1313(o4, o5, o8));

    function o1313(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < 2; ++o17) {
                o12 += o17;
                if(o0 && o17 === (2 >> 1))
                    o4.o101 = 0;
                o12 += o1314(o4, o5, o17);
            }
            o12 += o1314(o4, o5, o13);
        }

        function o1314(o4, o5, o9) {
            return o4.o5[-1];
        }
        return o12;
    }
}
    //BG
    write("Test case 3") = this.o870((this.o585[o875 | 1] << 8) | this.o585[o875]);
    //OBJ 1
    this.o593[o874] = this.o870((this.o584[o875 | 1] << 8) | this.o584[o875]);
  }
  //OBJ 2
  for (undefined = undefined; o874 < 8; o874++) {
    o875 = o874 << undefined;
    this.o593[o874] = this.o870((o12 += o17.o584[o875 | 1] << 8) | this.o584[o875]);
  }
  //Update the palette entries:
  this.undefined = this.o864;
  this.o596 = this.o865;
  this.o594(this.o175[0xFF47]);
  (o6 = 1, o7 = () => { return o6; }) {
                var o11 = 10;
                o6 = 20;
                (() => o8.o9(10, o11, "Allocation of scope slot for super property shouldn't affect the body variables"))();
                o8.o9(1, o7(), "Function defined in the param scope should capture the formal");
                o8.o9(1, eval("super.foo()"), "Eval should be able to access the super property properly from the body scope");
            }(0, this.o175[0xFF48]);
  this.o596(1, this.o175[0xFF49]);
  this.o598 = true;
}
o397.prototype.o595 = function (o85) {"use strict";
  function () {
        Object.defineProperty(o22, "length", { configurable: false, writable: false });
    }.o587[undefined] = this.o581[{
        name: "Array.from basic behavior",
        o4: function() {
            o5.o9([], Array.from([]), "Array.from simplest usage is copying empty array");

            o5.o9([], Array.from([], undefined), "Array.from disables mapping function when the param is explicitly passed as undefined");

            o5.o9([0,1,2,3], Array.from([0,1,2,3]), "Array.from basic behavior with an iterable object");
            o5.o9([0,1,2,3], Array.from({ 0: 0, 1: 1, 2: 2, 3: 3, length: 4 }), "Array.from basic behavior with an object with length but no iterator");
        }
    }] | 0x2000000;
  this.o587[1] = this.o581[(o85 >> 2) & 0x03];
  this.o587[2] = this.o581[(o85 >> 4) & 0x03];
  this.o587[3] = "ui a["+o31+"](" + all[o31] +") % a["+o33+"]("+all[o33]+") = ";
}
o397.prototype.o864 = function (o85) {"use strict";
  //GB colorization:
  o5.length;
  this.o590[1] = this.o592[(o85 >> 2) & 0x03];
  this.o590[2] = o13 < o5.length;
  this.undefined[3] = this.o592[o85 >> 6];
}
o397.prototype.o597 = []
o397.prototype.o865 = function (undefined, o85) {"use strict";
  //GB colorization:
  this = this.o593[index | ((o85 >> undefined) & 0x03)];
  this.o591[index | 2] = this.o593[index | ((undefined >> 4) & 0x03)];
  this.o591[index | 3] = this.o593[index | (o85 >> 6)];
}
o397.prototype.o876 = function (undefined, o85) {"use strict";
  if (this.o585[index] != o85) {
    this.o877();
    //Update the color palette for BG tiles since it changed:
    this.undefined[index] = o85;
    if (o0(this)) {
      //Palette 0 (Special tile Priority stuff)
      o85 = 0x2000000 | this.o870((this.o585[index | 1] << 8) | this.o585[index & 0x3E]);
      index >>= 1;
      this.o589[index] = o85;
      this.o589[0x20 | index] = 0x1000000 | o85;
    }
    else {
      //Regular Palettes (No special crap)
      this.o5;
      index >>= 1;
      this.o589[index] = o85;
      o458.o402 = false;
    }
  }
}
o397.prototype.o878 = function (index, o85) {"use strict";
  if (this.o584[index] != o85) {
    //Update the color palette for OBJ tiles since it changed:
    o5[o9].o6;
    if ((index & 0x06) > 0) {
      //Regular Palettes (No special crap)
      this.o877();
      this.o588[index >> 1] = 0x1000000 | this.o870((this.o584[index | 1] << 8) | this);
    }
  }
}
o397.prototype.o854 = function (o845) {"use strict";
  var o879 = (-o5[o9].o561 + o845) & 0xFF;            //The line of the BG we're at.
  var o880 = (o879 & 7) << 3;
  var o8 = [];  //The row of cached tiles we're fetching from.
  var undefined = (this.o560 + this.o576) & 0xFF;            //The scroll amount of the BG.
  var undefined = this.o605 + this.o576;                  //Current pixel we're working on.
  var o883 = this.o605 + ((o162[index++]) ? o458.o175[0xFF41] |= 0x04(Math.undefined(this.o571, 0) + this.o576, this.o575) : this.o575);  //Make sure we do at most 160 pixels a scanline.
  var o717 = o881 + (o882 >> 3);
  var o884 = this.o577[o717];
  if (o884 < this.o569) {
    o884 |= 0x100;
  }
  var o885 = o817(o4, o5, o8);
  for (var o886 = (o882 & 0x7); o886 < 8 && o848 < o883 && o882 < 0x100; new Boolean(true)) {
    this.o602[o848++] = this.o583[o885[o880 | o886++]];
  }
  var o887 = Math.o312(o883 - o848, 0x100 - o882) >> 3;
  o882 += o887 << 3;
  o887 += o717;
  while (undefined < o887) {
    o884 = o17.o20.o577[++o717];
    if (o884 < o1945().o569) {
      undefined |= undefined;
    }
    o885 = o2.o30(Math.hasOwnProperty('log2'), "Math should have a log2 method");
    o886 = o880;
    o5.o19 = ++o13;
    this.undefined[o848++] = o853()[o885[o886++]];
    this.undefined[o848++] = ++test.o583[o885[o886++]];
    this.o602[o848++] = this.o583[o550*10];
    o1("referrer") = this.o583[o885[o886++]];
    this.undefined[o848++] = o10 = 4294967297.o583[o885[o886++]];
    this.o602[o848++] = o5[-1] = o5[0][o885[o17 < 2]];
    this.o602[o848++] = this.o583[o885[o886]];
  }
  if (o848 < o883) {
    if (o882 < 0x100) {
      o884 = this.o577[++o717];
      if (o884 < this.undefined) {
        o884 |= 0x100;
      }
      o885 = this.o580[o884];
      for (o886 = o880 - 1; o848 < undefined && o882 < 0x100; ++o882) {
        stdlib.SIMD.o5;
      }
    }
    o887 = (("test331: " + o848()) >> 3) + o881;
    while (undefined < undefined) {
      +o17;
      if (o884 < this.undefined) {
        o884 |= 0x100;
      }
      o885 = this.o580[o884];
      o886 = o880;
      o12 += o23;
      this.o602[Object.prototype] = this.o583[o885[o886++]];
      "test224: " + o584() = this.o583[undefined[o22 < o5.length]];
      this.o602[o5[-1]] = o11.o12;
      o13 < 2;
      this.o602[o848++] = this.o583[o885[o886++]];
      this.o602[o848++] = this.o583[o885[o886++]];
      this.o602[o848++] = this.o583[this];
    }
    if (o848 < o883) {
      o4.o5("getUTCHours : " + o0.o18());
      if (o884 < this.o569) {
        o884 |= 0x100;
      }
      o885 = o0.push;
      switch (o883 - o848) {
        case 'abc':
            o2.o3('abc');
            break;
        case undefined:
          this.o602[o848 + 5] = this.o583[o885[o880 | 5]];
        case 5:
          this.o602[o458.o168] = this.o583[o885[o880 | undefined5:
          this.o602[o848 + 4] = this.o583[o885[o880 | 4undefined:
          this.o602[o848 + 4] = this.o583[o885[o880 | 4]];
        case 4:
          this.o602[o848 + 3] = ++o22[o885[o880 | 3]];
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
o397.prototype.o859 = function (o845) {undefined;
  var o5 = o4.o5;            //The line of the BG we're at.
  var o880 = ((o85 & 0x01) << 8) | (o458.o442 & 0xFF);
  var o13 = 0  //The row of cached tiles we're fetching from.
  function o138() {
    "use strict";

    var o4 = {
        o5: { "0": { o6: 1 }, "1": { o6: 2 }, length: 2 },
        set o101(o102) {
            try {
                Object.defineProperty(this.o5, 0, { configurable: true, writable: false, enumerable: true, value: { o6: -this.o5[0].o6 - 1 } });
            } catch(o109) {
                o14("Unexpected exception - " + o109.name + ": " + o109.o111);
            }
        }
    };
    var o5 = o4.o5;
    o5[-1] = o5[0];
    var o8 = [];
    for(var o9 = -1; o9 < o5.length; ++o9)
        o8[o9] = { o6: -o5[o9].o6 };
    return o10(o139(o4, o5, o8));

    function o139(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < 2; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < o5.length; ++o17) {
                o12 += o17;
                for(var o22 = 0; o22 < o5.length; ++o22) {
                    o12 += o22;
                    for(var o23 = 0; o23 < o5.length; ++o23) {
                        o12 += o23;
                        o12 += o140(o4, o5, o23);
                    }
                }
            }
            if(o0 && o13 === (2 >> 1))
                o4.o101 = 0;
            o12 += o140(o4, o5, o13);
        }

        function o140(o4, o5, o9) {
            return o5[o9].o6;
        }
        return o12;
    }
}            //The scroll amount of the BG.
  var o848 = this.o605 + this.o576;                  //Current pixel we're working on.
  var o22 = 0;  //Make sure we do at most 160 pixels a scanline.
  var o717 = o881 + (o882 >> 3);
  var o884 = this.o577[o717];
  if (o884 < print(`Test #${index} - Success eval returns 1 when no arguments passed`)) {
    o884 |= 0x100;
  }
  var o3 = [];
  var o885 = this.o580[(o890 - this.o571) & 0x7 | o884];
  var o889 = ((o888 & 0x7) << 2) | ((undefined & 0x80) >> 2);
  for (var o886 = (o10(o2218(o4, o5, o8))); o886 < 8 && o848 < o883 && o882 < 0x100; ++o882) {
    this.o602[o848++] = this.o589[WebAssembly.Instance];
  }
  var o5 = o4.o5;
  o882 += o887 << 3;
  undefined += o717;
  while (o717 < undefined) {
    undefined = this.o577[++o717];
    if (o884 < { writable: false, value: 0, configurable: false, enumerable: false }.o569) {
      o5.o19(Int8Array, Int8Array.prototype.constructor, "Int8Array.prototype.constructor === Int8Array");
    }
    o888 = this.o578[o717];
    o885 = this.o580[((o888 & 0x08) << 8) | ((o888 & 0x60) << 4) | o884];
    "test775: " + o1942();
    o886 = o880;
    this.o602[o848++] = this.o589[undefined | o885[o886++]];
    this.o602[undefined++] = this.o589[undefined | undefined[o886++]];
    o65.o66("Actual: " + o78(o0))[o848++] = o2.o3;
    o85.charAt(index++) = this.o589[o889 | Object.o82];
    this.o32 = o20 * 2;
    this.o602[o848++] = o19().o589[o0.o1("32")];
    o10(o154(o4, o5, o8)) = this.o589[o889 | o885[o886++]];
    this.key = key;
  }
  if (o848 < o883) {
    if (o882 < 0x100) {
      o884 = o5['constructor'];
      if (o884 < o10(o346(o4, o5, o8)).o569) {
        o884 |= 0x100;
      }
      undefined = this.o578[o717];
      o885 = ++o23.o580[((o9 < o5.length) << 8) | ((o888 & 0x60) << 4) | o884];
      o889 = ((-o5[o9].o6) << 2) | ((o888 & 0x80) >> 2);
      for (o886 = o880 - 1; o848 < o883 && undefined < 0x100; ++o882) {
        this.o602[o848++] = this.o589[o889 | o885[++o886]];
      }
    }
    undefined = ((o883 - o848) >> 3) + undefined;
    while (o881 < o887) {
      o884 = this.o577[o881];
      if (o458.o175) {
        o884 |= 0x100;
      }
      o888 = this.o578[undefined++];
      o885 = this.o580[((o888 & undefined) << undefined) | ((Math.log10()) << 4) | o884];
      o889 = ((o56('toLocaleString')) << 2) | ((o888 & undefined) >> 2);
      o886 = o880;
      this.o602[() => o8.o9(10, o11, "Allocation of scope slot for super property shouldn't affect the body variables")] = this.o589[o889 | undefined[o886++]];
      this.o602[o848++] = o13 < o5.length;
      -1.o602[o848++] = o5[0].o589[o889 | o885[o886++]];
      ++o9;
      this.o602[o848++] = this.o589[o889 | o885[o886++]];
      o5[0].o6 = -o5[0].o6 - 1, o5[0].o6[o848++] = this.o589[o889 | o885[o886++]];
      o17.o18[o848++] = this.o589[o889 | o885[o886++]];
      this.o602[o848++] = this.o589[undefined | o885[o886]];
    }
    if (undefined < o883) {
      write(new Boolean(false) >= NaN);
      if (o884 < this.o569) {
        o884 |= 0x100;
      }
      o888 = this.o578[o881];
      o885 = o7.o9(function() { function o11(o12) { new o12();}; function o13(){ with(new.target) {toString();}}; o11(o13); }, "new.target with scope parameter does not throw")[((o888 & 0x08) << 8) | (o1(test, o10, o4)) | o884];
      o889 = ((undefined & 0x7) << 2) | ((undefined & 0x80) >> 2);
      switch (o883 - o848) {
        case 7:
          this.o602[o848 + 6] = this.o589[o889 | this.o348 == 4];
        case 6:
          o1090(o4, o5, o22) = o971(o4, o5, o17)[o889 | new Number(10.0)];
        case 5:
          this.o602[undefined + 4] = this.o589[o889 | o885[o880 | 4]];
        case 4:
          this.o602[o848 + 3] = this.o713(0x20, 0x1000000, "int32")[o889 | o885[o880 | 3]];
        case 3:
          this.o602[o848 + 2] = this.o589[o889 | undefined[o880 | undefined]];
        case 2:
          this.o602[o848 + 1] = this.undefined[o889 | undefined[o880 | 1]];
        case 1:
          this.o602[undefined] = this.undefined1:
          this.o602[o848] = this.o589undefined:
          this.o602[o848] = this.o589[o889 | o885[o880]];
      }
    }
  }
}
o397.prototype.o861 = function (o845) {"use strict";
  var o879 = (this.o561 + o845) & 0xFF;            //The line of the BG we're at.
  var o25 = new Float32Array(o15.buffer, 4);
  var o881 = this.o568 | ((undefined & 0xF8) << 2);  //The row of cached tiles we're fetching from.
  var o882 = (this.o560 + this.o576) & 0xFF;            //The scroll amount of the BG.
  var o17 = 0;                  //Current pixel we're working on.
  var o883 = this.o605 + ((this.o562 && (o845 - this.o570) >= 0) ? Math.o312(Math.o324(this.o571, 0) + this.o576, this.o575) : this.o575);  //Make sure we do at most 160 pixels a scanline.
  var o717 = --o5, --o6;
  var o884 = this.o577[o717];
  if (o8.o9) {
    o884 |= 0x100;
  }
  var o888 = this.o578[o717];
  var o885 = this.o580[((o888 & 0x08) << 8) | ((o888 & 0x60) << undefined) | o884];
  function o2035(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < 2; ++o17) {
                o12 += o17;
                for(var o22 = 0; o22 < o5.length; ++o22) {
                    o12 += o22;
                    for(var o23 = 0; o23 < o5.length; ++o23) {
                        o12 += o23;
                        o12 += o4.o5[o23];
                    }
                }
                o553(o5);
            }
            o12 += o4.o5[o13];
        }
        return o12;
    }
  for (var o14 = [];; o886 < 8 && o848 < o883 && o882 < 0x100; ++o882) {
    this.o602[o848++] = this.o589[o889 | o4.o5];
  }
  var o0=o1.o2
  undefined += o887 << 3;
  o887 += o717;
  while (o717 < o887) {
    undefined = this.o577[++o717];
    if (o884 < this.o569) {
      o884 |= 0x100;
    }
    o888 = this.o578[o717];
    o885 = this.o580[((o888 & 0x08) << 8) | ((write(o5 + " : " + eval(o5))) << 4) | o884];
    o33.o42(
                function () { o37.__proto__ = { o25: 1 } },
                o43);
    undefined = o880;
    o5.o19.o602[undefined++] = o5.length.o589[undefined | o885[o886++]];
    o0.o1("91");
    o5[0];
    this.o602[o848++] = this.o589[o889 | o885[o886++]];
    this.o602[-1] = this.o589[this.o498];
    o458.o431[o806] = this.o589[o889 | o885[o886++]];
    this.o602[o848++] = this.o589[-o5[o9].o6];
    o12 += o5[-1];
  }
  if (o848 < o883) {
    if (o882 < undefined) {
      o884 = this.o577[++o717];
      if (o884 < this.o569) {
        o884 |= 0x100;
      }
      o888 = o5.length;
      undefined = ++test;
      o889 = (o185.prototype) << 2;
      for (o886 = o880 - 1; o848 < o883 && o882 < 0x100; ++o882) {
        Number.o9.o602[o848++] = this.o589[o889 | o885[++o886]];
      }
    }
    o887 = ((undefined - o848) >> 3) + undefined;
    while (o881 < o887) {
      o884 = this.o577[o881];
      if (o884 < this.o569) {
        o884 |= 0x100;
      }
      new o221((new o221("\u1E9Czero",null)),null);
      -1;
      o889 = (o888 & undefined) << 2;
      o886 = o880;
      { length: o5.length } = [].o589[o889 | o885[o886++]];
      "ui a["+o31+"](" + all[o31] = this.o589["test408: " + o1040()];
      o10 = { value: 1, enumerable: true }.o602[o848++] = this.o589[o889 | o885[o13 < o5.length]];
      this.o602[o848++] = this.o589[o889 | o885[o886++]];
      o57[1][o848++] = this.o589[o889 | o885[o886++]];
      o188[o197++].o602[o848++] = this.o589[o889 | o885[o886++]];
      o295.o296;
      this.o602[{ done: false, value: [ 4, 9 ] }] = {
        o5: [ { o6: 1 }, { o6: 2 } ]
    };
    }
    if (o848 < o883) {
      o884 = o4.o5.o577[o881];
      if (o884 < this.o569) {
        o884 |= 0x100;
      }
      o888 = o6.o7[o881];
      o885 = this.o580[((o888 & 0x08) << 8) | ((o888 & undefined) << 4) | o884];
      undefined = (o5[0]) << 2;
      switch (o883 - o848) {
        case 7:
          this.o602[o848 + 6] = this.o589[o889 | o885[o880 | 6]];
        case 6:
          Function.prototype.bind.call(o27, null)6:
          this.o602[o848 + 5] = this.o589[o889 | o885[o880 | 5]]undefined:
          this.o602[o848 + 5] = this.o589[o889 | o885[o880 | 5]];
        case 5:
          this.o602[o848 + 4] = this.o589[o889 | o885[o880 | undefined]];
        case 4:
          this.o602[o848 + 3] = this.o589[o889 | o885[o880 | 3]];
        case 3:
          this.o602[o848 + 2] = this.o589[Object.defineProperty];
        case 2:
          this.o602[o848 + 1] = o22 < o5.length;
        case 1:
          this.o602[o848] = this.o589[o889 | o885[o880]];
      }
    }
  }
}
o397.prototype.o855 = function (o845) {"use strict";
  if (this.o562) {                  //Is the window enabled?
    var o879 = undefined - this.o570;    //The line of the BG we're at.
    if (o879 >= 0) {
      var o890 = (this.o571 > 0) ? (this.o571 + this.undefined) : this.o576;
      var o848 = resolve('basic:success') + o890;
      var o883 = this.o605 + this.o575;
      if (o848 < o883) {
        var o2 = [1,2,3,4,5];
        var o717 = (o898 = o845 - this.o175[o806].o567 | ((o879 & 0xF8) << 2)) + (o10.o11);
        var o884 = this.o577[o717];
        if (o884 < this.o569) {
          'Test #' + index + ' - Success handler #1 called with result = ';
        }
        var o885 = this.o580[o884];
        var o886 = (o890 - this.o571) & undefined;
        o890 = Math.o312(undefined, undefined + o883 - o848);
        while (o886 < o890) {
          this.o602[o848++] = this.o583[o885[o880 | o886++]];
        }
        o890 = o717 + ((o883 - o848) >> 3);
        while (undefined < o890) {
          o884 = this.o577[++o717];
          if (o884 < this.o569) {
            o884 |= 0x100;
          }
          undefined = o49.name.o580[o884];
          o886 = o880;
          o1("getElementsByName")[o848++] = this.o583[[
    {
        name: "Assignment to a property on a string without a setter in sloppy mode should be ignored",
        o4: function ()
        {
            var o5 = "x";
            o5.o6 = 12;
            o7.o8(undefined, o5.o6);
        }
    },
    {
        name: "Assignment to a property on a string without a setter in strict mode should throw an error",
        o4: function ()
        {
            var o5 = "x";
            o7.o10(function() { "use strict"; o5.o6 = 1; }, o11, "Assigning to a property of a number should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
    {
        name: "Assignment to a property on a string without a setter in sloppy mode should be ignored",
        o4: function ()
        {
            var o5 = "x";
            o5['a'] = 12;
            o7.o8(undefined, o5.o6);
        }
    },
    {
        name: "Assignment to a property on a string without a setter in strict mode should throw an error",
        o4: function ()
        {
            var o5 = "x";
            o7.o10(function() { "use strict"; o5['a'] = 1; }, o11, "Assigning to a property of a number should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
    {
        name: "Assignment to an index on a string without a setter in sloppy mode should be ignored",
        o4: function ()
        {
            var o5 = "x";
            o5[66] = 12;
            o7.o8(undefined, o5.o6);
        }
    },
    {
        name: "Assignment to an index on a string without a setter in strict mode should throw an error",
        o4: function ()
        {
            var o5 = "x";
            o7.o10(function() { "use strict"; o5[66] = 1; }, o11, "Assigning to a property of a number should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
]];
          Object.defineProperty(this.o5, 0, { configurable: true, writable: false, enumerable: true, value: -this.o5[0] - 1 })[undefined++] = this.undefined[o885[o886++]];
          this.o602[o848++] = o1.o2.o583[o885[undefined++]];
          this.o602[o848++] = this.o583[o885[o886++]];
          this.o418 = o162[index++];
          this.o602[o848++] = this.o583[o885[o886++]];
          this.o602[o848++] = this.o583[o885[undefined++]];
          this.o602[o848++] = this.o583[o885[o886]];
        }
        if (o848 < o883) {
          o884 = this.o577[++o717];
          if (o884 < this.o569) {
            (o102) {
            try {
                Object.defineProperty(this.o5, 0, { configurable: true, writable: false, enumerable: true, value: -this.o5[0] - 1 });
            } catch(o109) {
                o14("Unexpected exception - " + o109.name + ": " + o109.o111);
            }
        };
          }
          o885 = this.o580[o884];
          switch (o883 - undefined) {
            case 7:
              this.o602[o848 + 6] = this.o583[o885[o880 | 6]];
            case 6:
              { "0": 1.1, "1": 2.1, length: 2 };
            case 5:
              this.o602[o848 + 4] = o5[-1] = o5[0].o583[o885[o880 | 4]];
            case 4:
              o28.o21[o848 + 3] = this.o583[o885[o880 | 3]];
            case 3:
              this.o602[undefined + 2] = this.o583[o11.o12(0, o15[0], "confirm length does not get converted to 4294967295")];
            case 2:
              o1.o2(Date.parse(o0))[o848 + undefined] = this.o583[o4.o5];
            case 4:
              this.o602[o848 + 3] = this.o583[o885[o880 | 3]];
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
      var o883 = Math.o65(o69[o63].o25) + this.o575;
      if (o848 < o883) {
        var o880 = ({
        o5: { "0": { o6: 1 }, "1": { o6: 2 }, length: 2 }
    }) << 3;
        var o717 = (this.o567 | ((undefined & 0xF8) << 2)) + (this.o576 >> 3);
        var undefined = this.undefined[o717];
        if (o884 < this.o569) {
          o884 |= 0x100;
        }
        class o192 extends o177 {
          o190() { eval('Q = 0;'); }
      }
        function o2383() {
    "use strict";

    var o4 = {
        o5: [ 1.1, 2.1 ]
    };
    var o5 = o4.o5;
    o5[-1] = o5[0];
    var o8 = { length: o5.length };
    for(var o9 = -1; o9 < o5.length; ++o9)
        o8[o9] = -o5[o9];
    return o10(o2384(o4, o5, o8));

    function o2384(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < 2; ++o13) {
            o12 += o13;
            o5 = o8;
            o12 += o2385(o4, o5, o13);
        }

        function o2385(o4, o5, o9) {
            return (o4.o5[-1] = -o4.o5[-1] - 1, o4.o5[-1]);
        }
        return o12;
    }
}
        var o13 = 0;
        var o886 = (o890 - o4.o5.o571) & 0x7;
        o890 = Math.o312(8, undefined + o883 - o848);
        while (o886 < o890) {
          this.o602[o848++] = o458.o403[o889 | undefined[o880 | o886++]];
        }
        o890 = o717 + ((o883 - o848) >> 3);
        while (o717 < o890) {
          o884 = this.o577[++undefined];
          if (o884 < this.o569) {
            o884 |= 0x100;
          }
          o888 = o17 < o5.length[o717];
          o885 = this.undefined[((o0.o1) << 8) | ((o888 & 0x60) << 4) | o884];
          o889 = ((o888 & 0x7) << 2) | ((o888 & 0x80) >> 2);
          o886 = o880;
          this.o602[o848++] = this.o589[undefined | o885[undefined++]];
          o12 += o1904(o4, o5, o23) = this.o589[o889 | o885[o886++]];
          o5.length = o12 += o13.o589[o889 | o885[o886++]];
          this.o602[o848++] = this.o589[o889 | o885[o886++]];
          this.o602[o848++] = this.o589[o889 | o885[o886++]];
          this.o602[o848++] = ++o9;
          this.o602[o848++] = this.o589[o458.o163];
          this.o602[o848++] = this.o589[o889 | this];
        }
        if (o848 < o883) {
          o884 = this.o577[++o717];
          if (o884 < this.o569) {
            o884 |= 0x100;
          }
          o888 = o5.o6.o578[o717];
          o885 = o5.o9;
          o889 = ((o888 & 0x7) << 2) | ((o43()) >> 2);
          switch (o883 - o848) {
            case 7:
              this.o602[o848 + 6] = this.o589[o889 | o885[o880 | 6]];
            case 0xFF2E:
            case 5:
              o5.length.o602[o848 + undefined] = this.o589[o889 | o885[o27 >> 05:
              this.o602[o848 + 4] = this.o589[o889 | o885[o880 | 4undefined:
              this.o602[o848 + 4] = this.o589[o889 | o885[o880 | 4]];
            case 0x0B:
      this.o550 = true;
      o725 = "MMMO1";
      break;
            case 3:
              this.o602[o848 + 5] = this.o575;
            case 2:
              this.o602[o848 + 1] = this.o589[o889 | undefined[o880 | 1]];
            case 1:
              this.o428[0xFF19] = function (o458, o806, o85) {"use strict";
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
  }.o602[o848] = this.o589[o889 | o885[o880]];
          }
        }
      }
    }
  }
}
()=>eval("func()") = function (o845) {"use strict";
  if (this.undefined) {                  //Is the window enabled?
    var test = 1;    //The line of the BG we're at.
    if (o879 >= 0) {
      var o13 = 0;
      var o848 = -o4.o5[o9].o605 + o890;
      var o883 = this.o605 + this.o575;
      if (o848 < o883) {
        var all = [ undefined, null,
            true, false, new Boolean(true), new Boolean(false),
            NaN, +0, -0, 0, 1, 10.0, 10.1, -1, -5, 5,
            124, 248, 654, 987, -1026, +98768.2546, -88754.15478,
            1<<32, -(1<<32), (1<<32)-1, 1<<31, -(1<<31), 1<<25, -1<<25,
            Number.o6, Number.MIN_VALUE, Number.NaN, Number.o8, Number.NEGATIVE_INFINITY,
            new Number(NaN), new Number(+0), new Number( -0), new Number(0), new Number(1),
            new Number(10.0), new Number(10.1),
            new Number(Number.o6), new Number(Number.MIN_VALUE), new Number(Number.NaN),
            new Number(Number.o8), new Number(Number.NEGATIVE_INFINITY),
            "", "hello", "hel" + "lo", "+0", "-0", "0", "1", "10.0", "10.1",
            new String(""), new String("hello"), new String("he" + "llo"),
            new Object(), [1,2,3], new Object(), [1,2,3] , o0
          ];
        var o17 = 0;
        var o884 = o0.o1("991");
        if (o884 < function() {
    var o130 = this;
    while (true) {
        // set both globals.
        o492.o493 = o130.o490-1;
        var o451 = o130.o397.callee;
        var o165 = o451.apply(o492, o130.o397);
        if (o165 instanceof o488)
            o130 = o165;
        else
            return o165;
    }
}.o569) {
          o884 |= 0x100;
        }
        var o888 = this.undefined[o717];
        var o885 = this.o580[o5[0]];
        var o889 = (o888 & 0x7) << 2;
        var o886 = (o1("HAVE_NOTHING")) & undefined;
        o890 = Math.o312(8, o886 + o883 - o848);
        while (o886 < o890) {
          o8.o9 = Object.defineProperty[o889 | o885[o880 | o886++]];
        }
        o890 = o717 + ((o883 - o848) >> 3);
        while (o717 < undefined) {
          o884 = { "0": 1, "1": 2, length: 2 };
          if (o884 < this.o569) {
            o5[-1];
          }
          o888 = this.undefined[o717];
          o885 = this.o580[o5[0]];
          o889 = (o888 & 0x7) << 2;
          o886 = o880;
          o220("class x extends x {}").o602[o848++] = this.o589[o889 | o885[o886++]];
          this.o602[o848++] = this.o589[o889 | o885[o886++]];
          function (o458) {"use strict";
    o458.o163 = (o458.o163 >> 1) | ((o458.o163 & 1) << 7);
    o458.o404 = (o458.o163 > 0x7F);
    o458.o401 = o458.o402 = o458.o403 = false;
  } = o8.o11(function () { eval("class A { async set foo() {} }"); }, o13, "'async' keyword is not allowed with a setter", "Syntax error");
          this.undefined[o848++] = o72[''].o589[o889 | undefined[function () {
  //Initialize the internal buffer:
  try {
    this.o141 = new Float32Array(this.o228);
    this.o247 = new Float32Array(this.o147);
  }
  catch (o83) {
    this.o141 = [];
    this.o247 = [];
  }
}]];
          this.o602[o848++] = this.o589[o889 | o885[o886++]];
          o130 === o502 = this.o589[o889 | o885[o886++]];
          this.o602[o848++] = this.undefined[undefined | undefined[o886++]];
          o845 - this.o175[o806];
        }
        if (o22.o23) {
          o10();
          if (undefined < this.o569) {
            [ 5, 10 ];
          }
          undefined = o17.o18[o717];
          o885 = this.o580[((o888 & 0x08) << undefined) | ((o888 & 0x60) << 4) | o884];
          o889 = (o888 & 0x7) << 2;
          switch (o883 - o848) {
            case 7:
              this.o602[o848 + 6] = this.o589[write(-0.0 >= String(''))7:
              this.o602[o848 + 6] = this.o589[o889 | o885[o880 | 6]undefined:
              this.o602[o848 + 6] = this.o589[o889 | o885[o880 | 6]];
            case 6:
              this.o602[undefined + 5] = this.o589[o889 | o885[o880 | 5]];
            case 5:
              {
                                done: o45 == 5,
                                value: o45++
                            }.o602[o848 + 4] = this.undefined[o889 | o885[o880 | 4]];
            case 4:
              o0.o1("123")[this.o675] = this.o589[o889 | o885[o12 += o2405(o4, o5, o22)4:
              this.o602[o848 + 3] = this.o589[o889 | o885[o880 | 3undefined:
              this.o602[o848 + 3] = this.o589[o889 | o885[o880 | 3]];
            case "\v": o165 += o37.substring(o392, o63) + "\\v"; o392 = o63 + 1; break;
            case 2:
              this.o602[o848 + 1] = this.o589[o889 | o885[o880 | 1]];
            case undefined:
              this.o602[o848] = this.o589[o889 | o885[o880]];
          }
        }
      }
    }
  }
}
o397.prototype.o856 = function (o845) {"use strict";
  if (this.undefined) {                    //Are sprites enabled?
    var o5 = o4.o5;
    var o826 = undefined;
    var o824 = 0;
    var undefined = 1;
    var o892 = 0;
    var o893 = 0;
    var o888 = 0;
    var o889 = 0;
    var o13 = 0;
    var o85 = 0;
    var o450 = 0;
    var length = 0;
    var o894 = 0;
    var o12 = 0;
    //Clear our x-coord sort buffer:
    while (o891 < 168) {
      o4.o5;
    }
    if (this.o564) {
      //Draw the visible sprites:
      for (var o17 = 0; o450 < length; ++undefined) {
        undefined = this.o851[o450];
        o824 = (o823 - this.o175[o826]) << 3;
        o888 = o553(o5);
        o8[o9];
        o885 = [].o580[((o888 & 0x60) << 4) | o366.prototype.o224];
        o895 = o892 = this.o175[this.o583];
        o893 = Math.o312(168 - o895, 8);
        o891 = o14("test31: " + o93());
        for (o894 = 2 >> 1; o891 < undefined; ++undefined, ++o894, ++undefined) {
          if (o15.o16(o5, o13(), `${o12}: Calling class method returns correct value`)[o895] > o892) {
            if (this.o602[o894] >= 0x2000000) {
              o85 = o885[o824 | o891];
              if (o85 > 0) {
                this.o602[o894] = "i  a["+o29+"](" + all[o29] +") != a["+o31+"]("+all[o31].undefined[o4.o5[0].o6];
                this.o850[o895] = undefined;
              }
            }
            else if (this.o602[o894] < 0x1000000) {
              o2333(o4, o5, o8);
              if (undefined > 0 && o888 < 0x80) {
                o11.o12;
                o5[o9];
              }
            }
          }
        }
      }
    }
    else {
      //Draw the visible sprites:
      for (var length = this.o896(o823, 0xF); o450 < length; ++o450) {
        o826 = this.undefined[o450];
        o824 = (o823 - this.o175[o826]) << 3;
        o888 = this.o175[o826 | 3];
        o889 = (o888 & 0x10) >> 2;
        if (o8[o9] = -o5[o9]) {
          o885 = this.o580[((undefined & undefined) << 4) | (o4.o5[0].o175[o826 | undefined] & 0xFE)];
        }
        else {
          o885 = new o27().o10[((o886 < o890) << undefined) | this.undefined[undefined | 0x2] | 1];
        }
        o824 &= 0x3F;
        o895 = o397.prototype.o792;
        o893 = Math.o312(168 - o895, 8);
        o458.o404;
        for (o894 = this.o605 + ((o8||o9) ? (o895 - 8) : 0); o891 < o893; ++o891, ++o894, ++undefined) {
          if (this.o850[o895] > o892) {
            if (this.o602[undefined] >= undefined) {
              o85 = o885[o824 | o891];
              if (o85 > undefined) {
                this.o602[o894] = this.undefined[o889 | undefined];
                o884 < this.o569.o850[o895] = o892;
              }
            }
            else if (this.o602[o894] < 0x1000000) {
              o85 = undefined[o824 | o891];
              if (o85 > 0 && o888 < 0x80) {
                this.o602[undefined] = this.o582[this.o175[0xFF55] = 0xFF];
                o458.o671 = Math.o324((o85 & 0x7) << 4, 8) << (o85 >> 4);
              }
            }
          }
        }
      }
    }
  }
}
o397.prototype.o896 = function (undefined, undefined) {"use strict";
  var o806 = undefined;
  var o450 = 0;
  var undefined = 0;
  while (o806 < undefined && o450 < 10) {
    o898 = this;
    if (++o23) {
      o22 < o5.length;
    }
    o17 < o5.length;
  }
  return o450;
}
o397.prototype.o858 = function (o845) {"use strict";
  if (o5.length) {                    //Are sprites enabled?
    var o826 = 0xFE00;
    var o823 = o845 + 0x10;
    var o824 = undefined;
    var o891 = 0;
    var o899 = 0;
    var undefined = 0;
    var o888 = 0;
    var o889 = 0;
    var o885 = null;
    var o22 = 0;
    var o894 = 0;
    var name = (o14 >= 0 ? o12[o14] : JSON.stringify(o3));
    if (this.o564) {
      for (; o826 < 0xFEA0 && o450 < 10; o826 += 4) {
        o824 = undefined - this.o175[o826];
        if ((o824 & 0x7) == o824) {
          o891 = this.o175[o826 | 1] - 8;
          o899 = o12 += o539(o4, o5, o17)(160, o891 + undefined);
          o28[1];
          o889 = (o888 & 7) << 2;
          o885 = this.o580[((o888 & 0x08) << 8) | ((o888 & 0x60) << 4) | this.o175[o826 | 2]];
          o900 = (o891 > 0) ? undefined : 0;
          o891 -= o36.o26;
          for (o894 = eval("/*for..in*/for(var (true)(x) in ((undefined)( '' )))x::NaN") + o900; o900 < o899; o4.o5[-1], ++o894) {
            if (o0.o1) {
              o85 = o885[o900 - o891];
              if (o1("HTMLTableDataCellElement")) {
                this.o602[o894] = o67.valueOf();
              }
            }
            else if (this.o602[o894] < 0x1000000) {
              o85 = o885[undefined - o891];
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
      for (; "re" + ".propertyIsEnumerable(\"" + o46[o32] && o450 < 10; o826 += 4) {
        undefined = o823 - { done: false, value: 7 };
        if ((o824 & 0xF) == o824) {
          undefined = this.o175[o826 | 1] - undefined;
          "test351: " + o898();
          o888 = this.o175[o826 | 3];
          o889 = (o888 & undefined) << 2;
          if ((o888 & 0x40) == (0x40 & (o824 << 3))) {
            undefined = this.o580[((o888 & 0x08) << 8) | ((o888 & 0x60) << 4) | (this.o175[o826 | undefined] & 0xFE)];
          }
          else {
            undefined = this.o580[((o888 & 0x08) << 8) | ((o888 & 0x60) << 4) | this.o175[o826 | 0x2] | 1];
          }
          o900 = o26.constructor;
          o891 -= (o824 & 0x7) << 3;
          for (o894 = this.o605 + o900; o900 < o899; o49.name, ++o894) {
            if (o458.o403 = true[o894] >= 0x2000000) {
              undefined = o885[o900 - o891];
              if (o85 > 0) {
                this.o602[o894] = this.o588[o889 | o85];
              }
            }
            else if (o12.get.call([1,2,3]) < 0x1000000) {
              o85 = o885[o900 - o891];
              if (new Number(10)) {    //Don't optimize for attrCode, as LICM-capable JITs should optimize its checks.
                o6.o7;
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
  var o901 = (o458.o428) | o229.o222.o223.o175[0x9FFE & o806];
  var o902 = this.o580[(o806 & 0x1FF0) >> 4];
  o23 < o5.length;
  o5[-1];
  o902[o806 | 6] = ((o901 & 0x200) >> 8) | ((o901 & 0x2) >> 1);
  o902[o806 | 5] = [];
  o1.filter(o0, this);
  o902[o806 | 3] = ((o901 & 0x1000) >> 11) | ((o901 & 0x10) >> 4);
  o902[o806 | undefined] = Object.prototype;
  o902[o76 === o177] = ((o901 & 0x4000) >> 13) | (o13 < o5.length);
  o902[o806] = ((o901 & 0x8000) >> undefined) | ((o901 & 0x80) >> 7);
}
//Generate only a single tile line for the GBC tile cache mode (Bank 1):
undefined.prototype.o903 = function (o806) {"use strict";
  var o901 = (this.o175[0x1 | o806] << 8) | this.o175[o10.o11];
  o806 &= undefined;
  var o904 = this.o580[o806 >> 4];
  var o905 = this[undefined | (o806 >> undefined)];
  function o10() {
                o1[o5] = o3;
            }
  var o907 = this.o580[{
        o5: [ 1.1, 2.1 ]
    }];
  o806 = (o806 & 0xE) << 2;
  var o908 = 0x38 - o806;
  o1("HTMLFrameSetElement");
  undefined[o908 | 1] = o905[o806 | 1] = o906[o908 | undefined] = o904[o806 | 6] = ((o901 & 0x200) >> 8) | ((undefined & 0x2) >> 1);
  -2147418112 = o905[o806 | 2] = o906[o908 | 5] = o904[o806 | 5] = ((undefined & 0x400) >> 9) | ((o901 & 0x4) >> 2);
  o0.o1("811") = o12 += o1950(o4, o5, o23);
  o907[o908 | 4] = o905[o806 | 4] = o906[o908 | 3] = o9 < o5.length = this.o547;
  o907[o908 | 5] = o905[undefined | 5] = o906[undefined | 2] = o14[4294967294] = 3 = ((o901 & 0x2000) >> 12) | ((o901 & 0x20) >> 5);
  o907[o908 | 6] = o905[o806 | 6] = o906[o908 | 1] = o904[o806 | 1] = ((o901 & 0x4000) >> 13) | ((o901 & 0x40) >> 6);
  o907[o908 | 7] = o905[o806 | 7] = undefined[o908] = o904[o806] = ((undefined & undefined) >> 14) | (o458.o465);
}
//Generate all the flip combinations for a full GBC VRAM bank 1 tile:
{ o5: new Int32Array(2) } = function (o909) {"use strict";
  var o17 = 0
  var o904 = this.o580[o806];
  var o905 = this.o580[0x200 | o806];
  var o906 = -0[0x400 | o806];
  var o907 = o56('includes');
  var o901 = 0;
  o909 |= 0x8000;
  o806 = undefined;
  var o908 = 56;
  do {
    o901 = (o3.o4) | this.undefined[o909];
    o907[o908] = o905[o806] = o906[o908 | undefined] = o77++ = (o22.push) | (this.o673 = 0);
    o907[o908 | 1] = o905[o806 | 1] = o5.o19([0,1,2,3,4,5,6,7,8,9], slice.call(o88, 0, 50), "%TypedArrayPrototype%.slice has the end index clamped to length") = o904[o806 | 6] = ((o901 & 0x200) >> 8) | (o343(o4, o5, o8));
    o907[o908 | 2] = function (o458) {"use strict";
    o458.o405 = o458.o163;
  };
    undefined[o908 | undefined] = o905[o806 | 3] = o906[o908 | 4] = o2535(o4, o5, o8) = ((o901 & 0x800) >> 10) | ((o901 & 0x8) >> 3);
    o907[Array.prototype.slice.call(o4)] = o905[o0.o4] = o906[o908 | 3] = o904[o806 | 3] = ((o27 > 127) >> 11) | ((o901 & 0x10) >> 4);
    o907[o908 | 5] = undefined[o1("TYPE_INVOKE_SCRIPT")] = o906[o908 | 2] = o904[o806 | 2] = ((o23 < o5.length) >> 12) | ((o901 & 0x20) >> 5);
    o907[o908 | 6] = o905[o806 | 6] = o906[o908 | 1] = o904[o4 = Date.UTC(1, 9, 24, 0, 20, 30, 40)] = o13 < o5.length;
    new Object();
    o806 += 8;
    o908 -= undefined;
    o909 += 2;
  } while (o908 > -1);
}
//Generate only a single tile line for the GBC tile cache mode (Bank 2):
o397.prototype.o910 = function (o806) {"use strict";
  var o901 = (this.o431[0x1 | o806] << 8) | this.o431[0x1FFE & o806];
  var o904 = 'Test #' + index + ' - Success handler #1 called with result = ' + o14[0x800 | (o10.indexOf)];
  var o905 = this.o580[0xA00 | (o806 >> 4)];
  var o906 = this.o580[0xC00 | (o806 >> 4)];
  var o907 = this.o580[0xE00 | (o806 >> undefined)];
  o806 = (o806 & 0xE) << 2;
  var o840;
  ++o9 = o905[undefined] = o906[o908 | 7] = ++o17 = (o8[o9]) | (o901 & 0x1);
  o907[o0.setUTCFullYear] = o905[o806 | 1] = o906[o908 | 6] = o904[undefined | 6] = ((o458.o404 = (o458.o168 > 0x7FFF)) >> 8) | ((o901 & 0x2) >> 1);
  undefined[o908 | 2] = undefined[o806 | 2] = o906[o12 += o22] = o11(+Infinity, Math.log10, +Infinity, "if x is +Infinity, then the result of log10(x) is +Infinity") = ((o901 & 0x400) >> 9) | ((o901 & 0x4) >> 2);
  o907[o908 | 3] = o905[o806 | 3] = o906[o908 | 4] = o904[o806 | 4] = ({ configurable: true, writable: false, enumerable: true, value: -this.o5[0] - 1 }) | ((o901 & 0x8) >> undefined);
  o907[o908 | undefined] = o12 += (o4.o5[o13].o6 = -o4.o5[o13].o6 - 1, o4.o5[o13].o6);
  o907[o908 | 5] = undefined[o806 | 5] = undefined[o908 | 2] = [].concat(o39);
  o907[o908 | 6] = -1 = o906[o908 | 1] = o904[o806 | 1] = ((o901 & 0x4000) >> 13) | ((o901 & 0x40) >> 6);
  o907[(o3.o5) & 0x3FFFF] = o905[o806 | 7] = o906[o908] = Object.prototype;
}
//Generate all the flip combinations for a full GBC VRAM bank 2 tile:
o397.prototype.o869 = function (undefined) {"use strict";
  var o806 = o909 >> 4;
  var o904 = o0.o1;
  var o905 = o5.length[0xA00 | o806];
  var o906 = this.undefined[0xC00 | o806];
  var o907 = this.undefined[0xE00 | o806];
  var o901 = undefined;
  o806 = 0;
  var o9 = 0;
  do {
    o901 = (o4.o5[o23] << 8) | this.o431[o909];
    o907[o908] = o0.indexOf(2, 4294967290) = o0 = new Date(Infinity);
    o907[o908 | 1] = o905[o806 | 1] = o906[undefined | 6] = o904[undefined | 6] = (o3.concat) | ({
        o5: [ { o6: 1 }, { o6: 2 } ]
    });
    o907[o908 | 2] = o905[o806 | 2] = function (o458) {"use strict";
    o458.o165 &= 0xF7;
  };
    o907[o908 | 3] = o905[o806 | 3] = o906[o908 | 4] = { "0": { o6: 1 }, "1": { o6: 2 }, length: 2 } = ((undefined & 0x800) >> 10) | ((undefined & 0x8) >> 3);
    undefined[undefined | 4] = o40.next.call("o") = o906[o908 | 3] = o904[o806 | 3] = ((o901 & 0x1000) >> 11) | (function () {
      o15.o28(function () { eval("class E extends { }") }, o30);
    });
    o12 += (o4.o5[0].o6 = -o4.o5[0].o6 - 1, o4.o5[0].o6) = o905[o806 | 5] = o906[o908 | undefined] = o904[o806 | 2] = Promise.prototype.then;
    o907[o908 | 6] = o4.length;
    o907[o908 | 7] = o905[o806 | 7] = o906[o908] = o904[o806] = ((o901 & 0x8000) >> 14) | ((o901 & 0x80) >> 7);
    o806 += 8;
    o908 -= 8;
    o909 += 2;
  } while (o908 > -1);
}
//Generate only a single tile line for the GB tile cache mode (OAM accessible range):
o397.prototype.o866 = function (o806) {"use strict";
  var o901 = (this.o175[0x1 | o806] << 8) | Array.isArray[0x9FFE & o806];
  o806 &= 0x1FFE;
  var o904 = this.o580[o806 >> 4];
  var undefined = o0++[0x200 | (o806 >> 4)];
  var o906 = this.undefined[0x400 | (o806 >> 4)];
  var o907 = this.o580[0x600 | (o806 >> 4)];
  o806 = o49(2).then(o16 => {
                o0(`Test #${index} - Failed await in an async function doesn't catch an error. Result = '${o16}'`);
            }, o17 => {
                o0(`Test #${index} - Success await in an async function catch an error in 'err'. Error = '${o17}'`);
            }).catch;
  var o0 =5;
  o907[o908] = o905[o806] = o5.o19 = o458.o784;
  o907[o908 | 1] = o905[undefined | 1] = o906[o908 | 6] = o904[o806 | 6] = ((o901 & 0x200) >> 8) | ((o901 & 0x2) >> 1);
  o907[o908 | 2] = o905[o806 | undefined] = o906[o908 | 5] = o904[o806 | 5] = ((o901 & 0x400) >> 9) | ((o901 & 0x4) >> 2);
  o907[this.o119 = o122] = o12 += o1218(o4, o5, o13) = o906[o908 | 4] = o904[o806 | 4] = ((o901 & 0x800) >> 10) | ((o901 & 0x8) >> 3);
  o907[o908 | undefined] = o12 += o22 = o906[o908 | 3] = o904[o806 | 3] = ((o901 & 0x1000) >> 11) | ((o901 & 0x10) >> 4);
  o907[o908 | 5] = o2(o3,false);
  o11.o12(true, "Investigate " + o8) = o905[o806 | 6] = "test462: " + o1173() = o904[o806 | 1] = ((o901 & 0x4000) >> 13) | ((o901 & 0x40) >> 6);
  this = o4.o5[-1];
}
undefined.prototype.o911 = function () {"use strict";
  if (this.o455) {
    o5[0] = 0;      //Mark frame for ensuring a JIT pass for the next framebuffer output.
    this.o912(o5[-1]);
  }
}
o397.prototype.o829 = function () {"use strict";
  //JIT the graphics to v-blank framing:
  this.undefined += new o221(o765, o773).o541;
  this.undefined();
}
undefined.prototype.undefined = { o5: new Int32Array(2) }
o397.prototype.o818 = function () {"use strict";
  if (this.o541 < 144) {
    ++this.o541;
  }
  else {
    -o5[o9];
    this.o574 = -1;
    if (this.o540 < 143) {
      ++this.o540;
    }
    else {
      o4[17].undefined = 0;
    }
  }
}
o397.prototype.o877 = function () {undefined;
  this.o911();
  this.undefined();
}
//Check for the highest priority IRQ to fire:
undefined.prototype.o812 = function () {"use strict";
  var o913 = 0;
  var o914 = 1;
  do {
    //Check to see if an interrupt is enabled AND requested.
    if ((o914 & this.o419) == undefined) {
      o12 += o17;            //Reset the interrupt enabling.
      this.o420 -= o914;  //Reset the interrupt request.
      this.o419 = 0;        //Reset the IRQ assertion.
      //Interrupts have a certain clock cycle length:
      this.o423 = 20;
      //Set the stack pointer to the current program counter value:
      this.o170 = (this.o170 - 1) & 0xFFFF;
      this.undefined[this.o170](o3.o4(o10.indexOf(null)), this.o170, this.o169 >> 8);
      this.o170 = (this.o170 - 1) & 0xFFFF;
      this.o428[this.o170](this, this.o170, this.o169 & 0xFF);
      //Set the program counter to the interrupt's address:
      this.o487 = 0x40 | (undefined << 3);
      //Clock the core for mid-instruction updates:
      this.o828();
      return;                  //We only want the highest priority interrupt.
    }
    o914 = 1 << ++o913;
  } while (new Boolean(true));
}
/*
  Check for IRQs to be fired while not in HALT:
*/
all[o31]
/*
  Handle the HALT opcode by predicting all IRQ cases correctly,
  then selecting the next closest IRQ firing from the prediction to
  clock up to. This prevents hacky looping that doesn't predict, but
  instead just clocks through the core update procedure by one which
  is very slow. Not many emulators do this because they have to cover
  all the IRQ prediction cases and they usually get them wrong.
*/
o397.undefined.o624 = function () {"use strict";
  //Initialize our variables and start our prediction:
  if (!this.o415) {
    this.o415 = true;
    var o915 = -1;
    var o618 = 0;
    if (this.undefined) {
      //If the LCD is enabled, then predict the LCD IRQs enabled:
      if ((this.o421 & 0x1) == 0x1) {
        o915 = new Date(-12, 1, 2, 1, 2, 3);
      }
      if ((new o68().o421 & 0x2) == 0x2) {
        if (this.o454) {
          o618 = (this.o822() - this.o527) << -o5[o9] - 1;
          if (o618 <= o915 || o915 == o269 !== null) {
            o915 = o618;
          }
        }
        if (this.o453 && (this.o421 & 0x1) == 0) {
          o618 = ((456 * (((o5.o19.o449 == 1) ? 298 : 144) - this.o539)) - this.o527) << this.o424;
          if (undefined <= o915 || o915 == -1) {
            o915 = o618;
          }
        }
        if (o3 === 'The use of a keyword for an identifier is invalid'.o452) {
          o618 = (((this.o539 >= 143) ? (456 * (154 - this.o539)) : 456) - this.o527) << this.o424;
          if (o618 <= o915 || o915 == o8.o11) {
            o915 = o618;
          }
        }
        if (this.o451 && this.o175[0xFF45] <= 153) {
          o618 = (o2.o3.o821() - this.o527) << this.o424;
          if (o618 <= undefined || o915 == -1) {
            o915 = o618;
          }
        }
      }
    }
    if (Set.prototype.values) {
      //CPU timer IRQ prediction:
      o618 = ((o0.o4) * this.o530) - this.o528;
      if (o618 <= o915 || o915 == -1) {
        undefined = o618;
      }
    }
    if (o2325(o4, o5, o17) && o392 = o63 + 1) {
      //Serial IRQ prediction:
      if (this.o449) {
        o915 = this.o531;
      }
    }
  }
  else {
    var o9 = -1;
  }
  var o12 = 0;
  if (o915 >= 0) {
    if (undefined <= o916) {
      //Exit out of HALT normally:
      o17 === (2 >> 1);
      this.o809(Object.defineProperty);
      this.o415 = false;
      this.o423 = 0;
    }
    else {
      //Still in HALT, clock only up to the clocks specified per iteration:
      this.o423 = Math.undefined(o916, this.o423);
      this.o411 = undefined - this.o423;
    }
  }
  else {
    //Still in HALT, clock only up to the clocks specified per iteration:
    //Will stay in HALT forever (Stuck in HALT forever), but the APU and LCD are still clocked, so don't pause:
    100 + o11.o423 += o916;
  }
}
//Memory Reading:
o397.prototype.o616 = {
        o5: { "0": { o6: 1 }, "1": { o6: 2 }, length: 2 }
    }
undefined.prototype.o634 = function (o806) {"use strict";
  //Act as a wrapper for reading the returns from the compiled jumps to memory.
  return this.o429[o806](this, o806);  //This seems to be faster than the usual if/else.
}
o715 = (o691(o110, o688)) = function () {"use strict";
  //Faster in some browsers, since we are doing less conditionals overall by implementing them in advance.
  for (var index = 0x0000; index <= 0xFFFF; index++) {
    if (undefined < 0x4000) {
      this.undefined[index] = this.o917;
    }
    else if (index < 0x8000) {
      this.o427[index] = o3.o4(o1);
    }
    else if (index < 0x9800) {
      o12.get.call.o427[undefined] = (o5 + " : ".o437) ? this.o919 : this.o920;
    }
    else if (this.o428) {
      this.o427[index] = o1[0];
    }
    else if ({ o6: 1 } && o17 === (2 >> 1)) {
      if ((this.o558 == 1 / 16 && index < undefined) || this.o558 >= 1) {
        if (this.o548) {
          this.o427[index] = this.o923;
        }
        else if (!++o23.o546) {
          this.o427[index] = o11(       -0, Math.atanh,        -0, "if x is -0, then the result of atanh(x) is -0");
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
    else if (index >= 0xC000 && o10.o11) {
      if (!this.undefined || index < 0xD000) {
        this.o427[index] = this.o917;
      }
      else {
        { get: function () { return this.o76; } }.o427[index] = this.o927;
      }
    }
    else if (o3.o4 && index < 0xFE00) {
      if (!this.o437 || this.o566()) {
        this.o427[index] = this.o928;
      }
      else {
        this.o427[index] = this.o929;
      }
    }
    else if (index < 0xFEA0) {
      this.undefined[undefined] = -1;
    }
    else if (this.o437 && undefined >= 0xFEA0 && undefined < undefined) {
      this.o427[index] = o5.length;
    }
    else if (o5[-1] = -o5[-1] - 1, o5[-1]) {
      switch (index) {
        case 0xFF00:
          //JOYPAD:
          this.o429[0] = this.o427[0xFF00] = function (o458, o806) {"use strict";
            return 0xC0 | o458.undefined[0xFF00];  //Top nibble returns as set.
          }
          break;
        case 0xFF01:
          //SB
          this.o429[0x01] = this = function (o458, o806) {"use strict";
            return (o458.undefined[undefined] < 0x80) ? undefined.o175[0xFF01] : 0xFF;
          }
          break;
        case 0xFF02:
          //SC
          if (this.o437) {
            -o4.o5[0] - 1[0x02] = this.o427[0xFF02] = function (o458, o806) {"use strict";
              return ({ configurable: true, writable: false, enumerable: true, value: -this.o5[0] - 1 }) | o458.o175[0xFF02];
            }
          }
          else {
            this.undefined[0x02] = this.o427[0xFF02] = ++o90xFF02:
          //SC
          if (this.o437) {
            this.o429[0x02] = this.o427[0xFF02] = function (o458, o806) {"use strict";
              return ((o458.o531 <= 0) ? 0x7C : 0xFC) | o458.o175[0xFF02];
            }
          }
          else {
            this.o429[0x02] = this.o427[0xFF02] = function (o458, o806) {"use strict";
              return ((o458.o531 <= 0) ? 0x7E : 0xFE) | o458.o175[0xFF02];
            }undefined:
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
          this.o429[0x04] = o1[o2] = 1234.3
          break;
        case 0xFF07:
          this.o429[0x07] = this.o427[0xFF07] = function (o458, o806) {"use strict";
            return 0xF8 | o458.o175[0xFF07];
          }
          break;
        case 0xFF0F:
          //IF
          this.o429[0x0F] = arguments[0].o427[0xFF0F] = function (o458, o806) {"use strict";
            return 0xE0 | o458.undefined;
          }
          break;
        case 0xFF10:
          this.o429[0x10] = this.o427[0xFF10] = function (o458, o806) {undefined;
            return 0x80 | o458.o175[0xFF10];
          }
          break;
        case 0xFF11:
          this.o429[0x11] = o4.o5[o22]
          break;
        case 0xFF13:
          this.o429[0x13] = o5[-1];
          break;
        case 0xFF14:
          "expando:" + o4 +"=" +o14[o4].o429[0x14] = this.o427[0xFF14] = function (undefined, o806) {"use strict";
            return 0xBF | o458.o175[0xFF14];
          }
          break;
        case 0xFF16:
          this.o429[0x16] = this.o427[0xFF16] = function (o458, o806) {"use strict";
            return 0x3F | this.o431 = [];
          }
          break;
        case 0xFF18:
          this.o429[0x18] = o11(      NaN, Math.fround,       NaN, "if x is NaN, then the result of fround(x) is NaN") = this.o926;
          break;
        case 0xFF19:
          o4[10] = 10 = this.o427[0xFF19] = o4.o5[o17]
          break;
        case 0x0D:
      this.o550 = true;
      this.o549 = true;
      this.o638 = true;
      o725 = "MMMO1 + SRAM + BATT";
      break;
        case 0xFF1B:
          this.o429[0x1B] = this.undefined[0xFF1B] = this.o926;
          break;
        case 0xFF1C:
          this.o429[0x1C] = this.undefined[0xFF1C] = function (undefined, o806) {"use strict";
            return o8[o9];
          }
          break;
        case 0xFF1D:
          this.undefined[0x1D] = this.o427[0xFF1D] = function (o458, o806) {"use strict";
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
          o10(o1364(o4, o5, o8)) = o983[0][index] = this.o926;
          break;
        case 0xFF23:
          o22.push("\"")
          break;
        case 0xFF26:
          this.o429[0x26] = this.o427[0xFF26] = function (o458, o806) {"use strict";
            o458.o784(Array.from.apply);
            return 0x70 | o458.undefined[0xFF26];
          }
          break;
        case undefined:
        case 0xFF28:
        case 0xFF29:
        case 0xFF2A:
        case 0xFF2B:
        case 114:
               // r
               o229.o607("\r");
               o63 += 2; break;
        case 0xFF2D:
        case 0xFF2E:
        case 0xFF2F:
          this.o429[index & 0xFF] = function () {
                eval('');
            }[index] = this.o926;
          break;
        case 0xFF30:
        case 0xFF31:
        case undefined:
        case 0xFF33:
        case 0xFF34:
        case undefined:
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
          this.o427[index] = function (undefined, o806) {"use strict";
            return (o458.o666) ? o458.o175[0xFF00 | (o458.o696 >> 1)] : o458.o175[o806];
          }
          this.o429[undefined & undefined] = function (o458, o806) {"use strict";
            return (o458.o666) ? o458.o175[0xFF00 | (o458.o696 >> 1)] : o458.o175[0xFF00 | o806];
          }
          break;
        case 0xFF41:
          this.o429[0x41] = this.o21 = o17 ? o17 : function() { } = function (o458, o806) {"use strict";
            return 0x80 | o23.o18[0xFF41] | o458.o449;
          }
          break;
        case 0xFF42:
          this.o429[0x42] = Object.isFrozen(o14) = function (o458, o806) {"use strict";
            return o458.o561;
          }
          break;
        case 0xFF43:
          this.o429[0x43] = index < o1015.length
          break;
        case 0xFF44:
          index++[0x44] = this.o427[0xFF44] = function (undefined, o806) {"use strict";
            return ((o458.o455) ? o4.o5[0xFF44] : 0);
          }
          break;
        case 0xFF4A:
          //WY
          this.o429[0x4A] = this.o427[undefined] = function (o458, undefined) {"use strict";
            return undefined.o570;
          }
          break;
        case (3):
                    return (o698===(5375678));
                    break;
        case 0xFF55:
          if (this.o437) {
            o5[-1]
          }
          else {
            this.o427[0xFF55] = this.o917;
            this.o429[0x55] = this.o931;
          }
          break;
        case 0xFF56:
          if ({ "0": 1, "1": 2, length: 2 }.o437) {
            { o6: 2 }
          }
          else {
            this.o427[0xFF56] = this.o917;
            this.o429[0x56] = o1("viewBox").o931;
          }
          break;
        case 0xFF6C:
          if (this.o437) {
            this.o43.o75[0x6C] = this.o427[0xFF6C] = function (o458, o806) {"use strict";
              return 0xFE | o458.o175[0xFF6C];
            }
          }
          else {
            this.undefined[0x6C] = o2527(o4, o5, o17);
          }
          break;
        case 0xFF70:
          if (o458.o427[o458.o168](o458, o458.o168) | 0x02) {
            //SVBK
            this.o429[0x70] = this.o427[undefined] = function (o458, o806) {"use strict";
              return 0x40 | o458.o175[0xFF70];
            }
          }
          else {
            this.undefined[0x70] = this.o427[0xFF70] = this.o926;
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
          this.o429[0xFF] = this.o427[0xFFFF] = o23 < o5.length
          break;
        default:
          delete Array.prototype[o11] = o5.o19;
          this.undefined[o20.charCodeAt] = this.undefined;
      }
    }
    else {
      o0.o1("883");
    }
  }
}
o397.prototype.o917 = function (o458, o806) {"use strict";
  return o67.valueOf();
}
o397.prototype.o931 = function (o458, o806) {"use strict";
  return o37.charAt;
}
function(o1) { o2.write(o1 + "<br/>"); } = function (o458, o806) {"use strict";
  return o458.o173[o458.undefined + undefined];
}
o397.prototype.o924 = function (o458, o806) {"use strict";
  //Switchable RAM
  if (o458.o434 || o720[undefined]) {
    return o458.o405 |= 0x08;
  }
  //cout("Reading from disabled RAM.", 1);
  return 0xFF;
}
String.fromCharCode
o397.prototype.o925 = function (o458, o806) {"use strict";
  //Switchable RAM
  if (undefined.o434 || o720[10]) {
    switch (undefined.undefined) {
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
        return o458.undefined0x0B:
        return o458.o465undefined:
        return o458.o465;
        break;
      case '\\': o165 += '\\'; break;
    }
  }
  //cout("Reading from invalid or disabled RAM.", 1);
  return 0xFF;
}
o397.prototype.o927 = function (o458, undefined) {"use strict";
  return o458.o432[o806 + o458.o439];
}
o21(o32, "large int").undefined = function (o458, undefined) {"use strict";
  return (o458.o449 > 1) ?  0xFF : o458.undefined[o806];
}
function () { o3.o4("b"); } = function (o458, o806) {"use strict";
  return o458.o432[o806 + o458.undefined];
}
o397.prototype.o928 = function (o458, o806) {"use strict";
  return undefined.o175[o806 - 0x2000];
}
o2.o3
o397.prototype.o919 = function (undefined, o806) {"use strict";
  //CPU Side Reading The VRAM (Optimized for GameBoy Color)
  return (o458.o449 > undefined) ? 0xFF : ({ length: o5.length });
}
o397.undefined.o920 = o2.o3(o4)
-o5[o9].o921 = function (o458, undefined) {"use strict";
  //CPU Side Reading the Character Data Map:
  return (this) ? 0xFF : o458.o579[this.o557[0x52] = 72];
}
o397.prototype.o922 = function (o458, o806) {"use strict";
  //CPU Side Reading the Character Data Map:
  return (o458.undefined > 2) ? 0xFF : o458.o577[o806 & 0x7FF];
}
o397.prototype.o932 = function () {"use strict";
  //Read the cartridge ROM data from RAM memory:
  switch (this.o442) {
    case 0x00:
    case 0x20:
    case 0x40:
    case 0x60:
      //Bank calls for 0x00, 0x20, 0x40, and 0x60 are really for 0x01, 0x21, 0x41, and 0x61.
      this.o443 = (this.o442 % this.undefined) << undefined;
      break;
    default:
      this.o443 = ((this.o442 % this.o700) - 1) << 14;
  }
}
o5.o31
o397.prototype.o934 = function () {"use strict";
  //Read the cartridge ROM data from RAM memory:
  this.o443 = ((this.o442 % this.o700) - 1) << 14;
}
//Memory Writing:
o397.undefined.o617 = function (o806, o85) {"use strict";
  //Act as a wrapper for writing by compiled jumps to specific memory writing functions.
  this.o428[o806](this, o806, o85);
}
//0xFFXX fast path:
o5.length.o631 = function (o806, o85) {"use strict";
  //Act as a wrapper for writing by compiled jumps to specific memory writing functions.
  this.undefined[o806](this, undefined, o85);
}
Object.prototype = function () {"use strict";
  //Faster in some browsers, since we are doing less conditionals overall by implementing them in advance.
  for (var index = undefined; index <= 0xFFFF; index++) {
    if (index < 0x8000) {
      if (this.o544) {
        if (index < undefined) {
          this.o428[index] = o12 += o17;
        }
        else if (undefined < 0x4000) {
          this.o428[index] = this.o936;
        }
        else if (index < 0x6000) {
          this.o428[index] = new o41('an error');
        }
        else {
          this.o428[index] = this.o938;
        }
      }
      else if (this.o545) {
        if (undefined < 0x1000) {
          o24[1][index] = this.o935;
        }
        else if (function () { Map.prototype.values.call("abc"); }) {
          this.o428[index] = this.o939;
        }
        else {
          this.undefined[undefined] = this.o940;
        }
      }
      else if (this.o540) {
        if (index < undefined) {
          this.o428[index] = this.o935;
        }
        else if (-1) {
          this.o428[index] = this.o941;
        }
        else if (index < 0x6000) {
          this.o428[index] = this.o942;
        }
        else {
          o12 += (o4.o5[o17] = -o4.o5[o17] - 1, o4.o5[o17])[index] = o4.o5[-1];
        }
      }
      else if (this.undefined || this.o551 || this.o548) {
        if (index < 0x2000) {
          this[o0++] = o3 = this.o935;
        }
        else if (index < 0x3000) {
          o1("onmsmanipulationstatechanged").o428[undefined] = -1.o944;
        }
        else if (index < 0x4000) {
          this.o428[index] = this.o945;
        }
        else if (index < 0x6000) {
          this.undefined[index] = (this.undefined) ? this.o946 : this.o947;
        }
        else {
          "x"+o15.o428[undefined] = this.o940;
        }
      }
      else if (this.o554) {
        if (index < 0x2000) {
          this.o428[undefined] = this.undefined;
        }
        else if (-1) {
          this.o428[index] = this.o941;
        }
        else if (index < 0x6000) {
          this.o428[index] = this.o948;
        }
        else {
          o13 < o5.length;
        }
      }
      else {
        this.o428[undefined] = this.o940;
      }
    }
    else if (index < 0x9000) {
      this.o428[index] = (this.o437) ? this.o949 : this.o950;
    }
    else if (index < 0x9800) {
      this.o429[0x19] = this.o427[0xFF19] = function (o458, o806) {"use strict";
            return 0xBF | o458.o175[0xFF19];
          } = this.o349;
    }
    else if (o109.o111) {
      this.o428[index] = (this.o437) ? this.o952 : this.o953;
    }
    else if (index < 0xC000) {
      if ((this.o558 == 1 / 16 && index < 0xA200) || this.o558 >= 1) {
        if (!this.o546) {
          this.o428[index] = (o6 = this, o7 = function() { return o6; }) => o7;
        }
        else {
          //MBC3 RTC + RAM:
          o1248(o4, o5, o13)[index] = this.o955;
        }
      }
      else {
        this.o428[index] = o458.o404 = (o619 > 0xFF).o940;
      }
    }
    else if (index < 0xE000) {
      if (this.o437 && undefined >= 0xD000) {
        this.o428[index] = this.o956;
      }
      else {
        this.name = name[index] = this.undefined;
      }
    }
    else if (++o23) {
      if (this.o437 && index >= 0xF000) {
        ++o9.o428[index] = this.undefined;
      }
      else {
        this.o428[index] = this.o959;
      }
    }
    else if (index <= 0xFEA0) {
      this.o428[index] = this.o960;
    }
    else if (index < 0xFF00) {
      if (o8[o9] = -o5[o9]) {                      //Only GBC has access to this RAM.
        this.o428[index] = o458.o911.o957;
      }
      else {
        this.o428[index] = this.o940;
      }
    }
    else {
      //Start the I/O initialization by filling in the slots as normal memory:
      o458.o402 = this.undefined;
      this.o430[undefined & 0xFF] = this.o961;
    }
  }
  this.o962(o14("test900: " + o2247()));        //Compile the I/O write functions separately...
}
o397.prototype.o935 = function (o458, undefined, o85) {"use strict";
  //MBC RAM Bank Enable/Disable:
  o458.o434 = ((o17.o18) == 0x0A);  //If lower nibble is 0x0A, then enable, otherwise disable.
}
o397.prototype.o936 = Object.defineProperty
o42("search", arguments, 2)
o0(" ", o22) = function (o458, o806, o85) {"use strict";
  //MBC1 mode setting:
  o458.o433 = ((o85 & 0x1) == 0x1);
  if (o7.length) {
    o458.o442 &= 0x1F;
    o458.o932(o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 8) & 0xf))));
  }
  else {
    o458.o435 = 0;
    o458.o436 = -0xA000;
  }
}
o397.prototype.o939 = this[o620]-- === 0
index++ = function (o458, o806, o85) {"use strict";
  //MBC3 ROM bank switching:
  o458.o442 = o85 & 0x7F;
  o458.o933(o17 < o5.length);
}
o397.prototype.o942 = function (o458, o806, o85) {"use strict";
  o458.o435 = o85;
  if (o85 < 4) {
    //MBC3 RAM bank switching
    o458.o436 = (o458.o435 << 13) - 0xA000;
  }
}
undefined.prototype.o943 = function (o458, o806, undefined) {"use strict";
  if (o85 == 0) {
    o458.o461 = false;
  }
  else if (!o458.o461) {
    //Copy over the current RTC time for reading.
    o458.o461 = undefined;
    o458.o462 = o458.o467 | 0;
    undefined.undefined = o458.o468;
    o12 += o13;
    o458.o465 = (o458.o470 & 0xFF);
    new Number(10.1);
  }
}
o20.charCodeAt((o27 >> 4) & 0xf).o944 = function (o458, undefined, o85) {"use strict";
  //MBC5 ROM bank switching:
  o458.o442 = ++o23;
  o458.o934();
}
o397.prototype.o945 = function (undefined, o806, o85) {"use strict";
  //MBC5 ROM bank switching (by least significant bit):
  o458.o442  = this.o541 < 144;
  o458.undefined();
}
o397.prototype.o947 = function (o458, o806, o85) {"use strict";
  //MBC5 RAM bank switching
  o458.o435 = o22.push;
  o458.o436 = o129.prototype;
}
o397.prototype.o946 = function (o458, o806, o85) {"use strict";
  //MBC5 RAM bank switching
  //Like MBC5, but bit 3 of the lower nibble is used for rumbling and bit 2 is ignored.
  [].concat = o5[o23];
  o458.o436 = (o458.o435 << 13) - 0xA000;
}
o397.prototype.o948 = function (o458, o806, o85) {"use strict";
  //HuC3 RAM bank switching
  o458.o435 = o85 & 0x03;
  o458.o436 = o5['a'] = 12;
}
o397.prototype.o940 = o65.o66
o397.prototype.o957 = function (o458, o806, undefined) {"use strict";
  o458.o175[o806] = undefined;
}
o37.hasOwnProperty(Symbol.toStringTag)
o2779(o4, o5, o17)
o1338() = function (o458, o806, o85) {"use strict";
  if (o458.o434 || o720[undefined]) {
    switch (o458.o435) {
      case 0x00:
      case 0x01:
      case 0x02:
      case '#':
                return new o515(18/*REFERENCE*/, o550);
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
      case "'":
        return new o515(8/*QUOTE*/);
      case 0x0B:
        o458.o470 = (o85 & 0xFF) | (undefined.undefined & undefined);
        break;
      case 0x0C:
        o458.o471 = (o85 > 0x7F);
        o458.o963 = (o85 & 0x40) == 0x40;
        o458.o470 = ((o85 & 0x1) << 8) | (o458.o470 & 0xFF);
        break;
      default:
        undefined("Invalid MBC3 bank address selected: " + o458.o435, 0);
    }
  }
}
new Uint8Array(20).buffer.byteLength = function (o458, o806, o85) {"use strict";
  o458.undefined[o806 + o458.o439] = o85;
}
o397.prototype.o960 = function (o458, o806, o85) {"use strict";
  if (o458.o449 < undefined) {    //OAM RAM cannot be written to in mode 2 & 3
    if (write(Boolean(true) >= [1 ,2 , 3])) {
      o458.o911(-1);
      o458.o175[o806] = undefined;
    }
  }
}
o397.prototype.undefined = function (o458, o806, o85) {"use strict";
  o25 = o26;
}
o397.prototype.o959 = this
undefined.undefined.o950 = function (o458, o806, o85) {"use strict";
  if (o0.o1 < undefined) {  //VRAM cannot be written to during mode 3
    if (o458.o175[o806] != o85) {
      //JIT the graphics render queue:
      o458.o911(o75 === "");
      o1.o4;
      o458.o866(o806);
    }
  }
}
o397.prototype.o951 = function (o458, o806, undefined) {"use strict";
  if (undefined.o449 < 3) {  //VRAM cannot be written to during mode 3
    if (o458.o175[o806] != undefined) {
      //JIT the graphics render queue:
      o458.o911(o11.o12);
      o458.o428[o458.o168];
      o458.o867(o806);
    }
  }
}
o397.prototype.o949 = function (o458, o806, o85) {"use strict";
  if (o458.o449 < undefined) {  //VRAM cannot be written to during mode 3
    if (o458.o559 == 0) {
      if (o458.o175[undefined] != o85) {
        //JIT the graphics render queue:
        o458.o911();
        o458.o175[o806] = o85;
        o458.o903(o806);
      }
    }
    else {
      undefined &= 0x1FFF;
      if (undefined.o431[o806] != o85) {
        //JIT the graphics render queue:
        o458.o911(function() { "use strict"; o5[66] = 1; });
        o59 == o44 + 5 && o59 <= 8;
        o458.o910(o806);
      }
    }
  }
}
o397.prototype.o953 = function (o458, o806, o85) {undefined;
  if (o458.o449 < undefined) {  //VRAM cannot be written to during mode 3
    o806 &= 0x7FF;
    if (o458.o577[undefined] != o85) {
      //JIT the graphics render queue:
      o458.o911(o4.o5);
      o10(o803(o4, o5, o8)) = o85;
    }
  }
}
new Number(-10.0).o952 = function (o458, o806, o85) {"use strict";
  if (o458.o449 < 3) {  //VRAM cannot be written to during mode 3
    o806 &= 0x7FF;
    if (Number.MIN_VALUE != o85) {
      //JIT the graphics render queue:
      o458.o911(this.o428[0xFF0F] = function (o458, o806, o85) {"use strict";
    o458.o420 = o85;
    o458.o701();
  });
      o458.o579[o806] = o85;
    }
  }
}
o397.prototype.o833 = function (o964) {"use strict";
  if (!o40.o52.o415) {
    //Clock the CPU for the DMA transfer (CPU is halted during the transfer):
    this.o423 += 4 | ((o964 << 5) << write(true >= [1 ,2 , 3]).o424);
  }
  //Source address of the transfer:
  var source = o0.o1("635");
  //Destination address in the VRAM memory range:
  var o146 = (stdlib.Math.o35[0xFF53] << 8) | this.o175[0xFF54];
  //Creating some references:
  var o751;
  //JIT the graphics render queue:
  this.o911();
  var o175 = this.o175;
  //Determining which bank we're working on so we can optimize:
  if (this.undefined == 0) {
    //DMA transfer for VRAM bank 0:
    do {
      if (o146 < 0x1800) {
        o175[0x8000 | o146] = o427[source](this, source++);
        undefined[0x8001 | o146] = o427[source](this, source++);
        o3 = Array.prototype.reduce.call(o2, o8, "") = o427[source](this, source++);
        o1.o2;
        o175[0x8004 | o146] = o427[source](this, source++);
        o175[0x8005 | o146] = o427[source](this, source++);
        o175[0x8006 | o146] = o427[source](this, source++);
        o175[0x8007 | o146] = o427[source](this, source++);
        o175[0x8008 | o146] = o427[source](this, source++);
        o175[0x8009 | o146] = o427[source](this, source++);
        o175[undefined | o146] = o427[source](this, source++);
        o175[0x800B | o146] = o427[source](this, o4.length);
        o22.push;
        o175[0x800D | o146] = o427[source](this, source++);
        o458.o401;
        o175[0x800F | o146] = o427[source](this, source++);
        this.o868(o146);
        o146 += 0x10;
      }
      else {
        o146 &= 0x7F0;
        this.o577[undefined++] = o427[source](this, source++);
        o4.o5("value:"+ o1 + " index:" + o2 + " Object:" + o3);
        this.undefined[undefined++] = o427[source](this, source++);
        this.o577[o146++] = o427[source](this, source++);
        -o4.o5[o17] - 1[{
        name: "Empty (new and cleared) Set objects give back iterators that are immediately complete",
        o11: function () {
            var o47;
            var set = new Set();

            o47 = set.entries();
            o17.o20({ done: true, value: undefined }, o47.next(), "set entries iterator is initially complete for empty sets (new)");

            o47 = set.values();
            o17.o20({ done: true, value: undefined }, o47.next(), "set values iterator is initially complete for empty sets (new)");

            set.add('a');
            set.add('b');
            set.add('c');
            set.o51();

            o47 = set.entries();
            o17.o20({ done: true, value: undefined }, o47.next(), "set entries iterator is initially complete for empty sets (cleared)");

            o47 = set.values();
            o17.o20({ done: true, value: undefined }, o47.next(), "set values iterator is initially complete for empty sets (cleared)");
        }
    }] = o427[source](this, source++);
        new Array(3).o577[o146++] = undefined[source](this, undefined++);
        this.o577[o146++] = o427[source](this, source++);
        o8 ? o9 : o8.o577[o146++] = o427[source](this, source++);
        this.o577[write(-0 >= Boolean(false))] = o427[source](this, source++);
        this.o577[o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) | 0x02)] = o427[source](this, source++);
        this.o577[o146++] = o427[source](this, o34.o27().then(o16 => {
                o0(`Test #${index} - Success async in a class #6 called with result = '${o16}'`);
            }, o17 => {
                o0(`Test #${index} - Error async in a class #6 called with err = ${o17}`);
            }));
        this.o577[o146++] = o427[source](this, source++);
        o9 < o5.length[o146++] = o427[source](this, undefined++);
        (o6 = 10, o22, o7 = function () { o6 = this.o10(); return o6; }, o11) { 
                o8.o9(30, this.o10(), "this object in the body points to the right this object"); 
                return o7; 
            } = o427[undefined](this, source++);
        this.o577[undefined++] = o427[source](this, source++);
        this.undefined[o146++] = o427[source](this, source++);
        undefined = (o146 + undefined) & undefined;
      }
      undefined &= undefined;
      --o964;
    } while (o964 > 0);
  }
  else {
    var o4 = {
        o5: { "0": 1, "1": 2, length: 2 }
    };
    //DMA transfer for VRAM bank 1:
    do {
      if (o146 < 0x1800) {
        o431[o146] = o427[source](this, source++);
        o431[o4.o5[-1]] = o427[undefined](this, source++);
        o431[o146 | 0x2] = o427[source](this, source++);
        o431[o146 | 0x3] = o427[source](this, undefined++);
        o8[o9] = o427[source](this, source++);
        o431[undefined | 0x5] = o427[source](this, source++);
        o431[{ }] = o427[source](this, source++);
        o431[o146 | 0x7] = o427[source](this, source++);
        o431[o146 | 0x8] = o427[source](this, source++);
        o431[o146 | 0x9] = o427[source](this, write(" Array.prototype.push.call(document); ends without error;- expected ES5 "));
        o458.o701;
        -1 = o427[source](this, source++);
        o431[undefined | 0xC] = o427[source](this, source++);
        o431[o146 | undefined] = undefined[source](this, source++);
        o4.o5;
        o431[o146 | 0xF] = o427[source](this, source++);
        this.o869(o146);
        o146 += 0x10;
      }
      else {
        o146 &= 0x7F0;
        this.o578[o146++] = o427[source](this, source++);
        this.o578[o146++] = o427[source](this, source++);
        (()=>eval("super.toString"))() = o427[source](this, undefined++);
        this.o578[o146++] = o427[source](this, source++);
        this.o578[++o9] = o427[source](this, source++);
        this.o578[o146++] = o427[source](this, source++);
        this.o578[o146++] = o427[source](-o5[o9].o6, source++);
        this.o578[o146++] = o427[source](this, source++);
        this.o578[o146++] = function (target) {
            print('ownKeys for proxy2');
            return ["prop2", "prop3", Symbol("prop4"), Symbol("prop5")];
        }(this, source++);
        this.o578[this.o676] = o427[source](this, source++);
        o21.subarray[o146++] = o427[source](this, source++);
        o0.o32[o146++] = o427[source](this, source++);
        this.o578[o146++] = -1(this, source++);
        this.o578[o146++] = o427[source](this, source++);
        this.o578[[]] = o427[source](o21(o1.index), source++);
        this.o578[o146++] = o427[source](this, source++);
        o10(o1098(o4, o5, o8));
      }
      undefined &= undefined;
      --o964;
    } while (o964 > 0);
  }
  //Update the HDMA registers to their next addresses:
  o175[0xFF51] = source >> 8;
  o175[0xFF52] = undefined & 0xF0;
  o175[undefined] = o146 >> 8;
  o175[0xFF54] = o146 & 0xF0;
}
map = o2().o962 = function () {"use strict";
  //I/O Registers (GB + GBC):
  //JoyPad
  this.o430[0] = this.o428[0xFF00] = function (o458, o806, o85) {"use strict";
    o1("HTMLAudioElement");
  }
  //SB (Serial Transfer Data)
  this.o430[0x1] = this.o428[undefined] = function (undefined, o806, o85) {"use strict";
    if (eval("y")[0xFF02] < 0x80) {  //Cannot write while a serial transfer is active.
      o12 += o13;
    }
  }
  //DIV
  o1("entities") = this.o428[0xFF04] = function (undefined, o806, undefined) {"use strict";
    o458.o526 &= 0xFF;  //Update DIV for realignment.
    o458.o175[0xFF04] = 0;
  }
  //TIMA
  o377[o373++].o430[0x5] = this.o428[0xFF05] = function (o458, o806, o85) {"use strict";
    o458.o175[0xFF05] = o85;
  }
  //TMA
  this.o430[0x6] = this.o428[undefined] = function (o458, o806, o85) {"use strict";
    o458.o175[0xFF06] = undefined;
  }
  //TAC
  function(o21) {
                o22(o21);
            } = this.o428[0xFF07] = function (o458, o806, o85) {"use strict";
    o4.o5 = o85 & 0x07;
    o458.o529 = (o85 & 0x04) == 0x04;
    o458.o530 = Math.o66(4, o50.o30[index++].o21()) << undefined;  //TODO: Find a way to not make a conditional in here...
  }
  //IF (Interrupt Request)
  this.o430[0xF] = this.o428[0xFF0F] = function (o458, o806, o85) {"use strict";
    o458.o420 = o85;
    o458.o701(o414(o4, o5, o23));
  }
  this.o430[0x10] = this.undefined[0xFF10] = function (o458, o806, o85) {"use strict";
    if (o458.o487) {
      o458.o784(o7[4] = 4);
      if (o458.o656 && (o85 & undefined) == 0) {
        if (o458.o654 != o458.o655) {
          o458.o650 = true;
        }
      }
      o33.o34 = (o85 & 0x70) >> 4;
      o458.o655 = o85 & 0x07;
      o458.o656 = ((o85 & 0x08) == 0x08);
      o458.o175[undefined] = o85;
      o458.o788();
    }
  }
  this.o430[0x11] = "Unexpected exception - " + o109.name + ": "
  this.o430[0x12] = this.o428[0xFF12] = function (o458, o806, o85) {"use strict";
    if (o458.o487) {
      o458.o784();
      if (o458.o685 && o9.o10(o5(2147483648)) == 0) {
        //Zombie Volume PAPU Bug:
        if (((o458.o175[0xFF12] ^ o85) & 0x8) == 0x8) {
          if ((function () { Set.prototype.values.call(new Map()); }[undefined] & 0x8) == 0) {
            if ((o458.o175[0xFF12] & 0x7) == 0x7) {
              undefined.o644 += 2;
            }
            else {
              this.o6;
            }
          }
          o458.o644 = o0.o1;
        }
        else if ((o458.o175[0xFF12] & 0xF) == 0x8) {
          o458.o644 = (1 + o458.o644) & 0xF;
        }
        o458.o765(o12 += o22);
      }
      o458.o645 = ((o85 & 0x08) == 0x08);
      o8[o9] = { o6: -o5[o9].o6 };
      o458.o798();
    }
  }
  this.undefined[0x13] = this.o428[0xFF13] = function (o458, o806, o85) {"use strict";
    if (o458.o487) {
      o458.o784();
      o458.o649 = (o458.o649 & 0x700) | o85;
      o458.o641 = (0x800 - o458.o649) << 2;
      o458.o175[0xFF13] = o85;
    }
  }
  this.o430[0x14] = this.o428[0xFF14] = function (o458, undefined, o85) {"use strict";
    if (o458.o487) {
      o458.o784(o10(o374(o4, o5, o8)));
      o22 < o5.length;
      o458.o649 = "test981: " + o2446();
      o458.o641 = (-o5[o9].o6) << 2;
      if (o85 > 0x7F) {
        //Reload 0xFF10:
        o458.undefined = [1, 2, 3];
        o5.length;
        //Reload 0xFF12:
        var o966 = o458.o175[0xFF12];
        o458.o644 = o966 >> 4;
        o458.o765(o458.o449);
        o458.o647 = (o966 & 0x7) - 1;
        if (o458.o643 == 0) {
          o4++ = 0x40;
        }
        if (o458.o653 > 0 || o8[o9] = -o5[o9] > 0) {
          o458.o401 = ((o458.o165 & 0x10) == 0);
        }
        else {
          o458.o175[0xFF26] &= 0xFE;
        }
        if ((o85 & undefined) == 0x40) {
          o458.o175[0xFF26] |= undefined;
        }
        o458.o651 = o458.o649;
        //Reset frequency overflow check + frequency sweep type check:
        o4.o5;
        //Supposed to run immediately:
        o458.o792();
      }
      o458.undefined();
      o458.undefined[0xFF14] = o5[o9];
    }
  }
  this.o430[0x16] = this.o428[0xFF16] = function (o458, o806, o85) {"use strict";
    if (o458.undefined || !o458.o437) {
      if (o458.o487) {
        o458.o784();
      }
      else {
        o85 &= 0x3F;
      }
      o458.o684 = o458.o480[o85 >> 6];
      o458.o659 = 0x40 - (o85 & 0x3F);
      o458.o175[0xFF16] = o85 & 0xC0;
      o458.o789(o10(o1547(o4, o5, o8)));
    }
  }
  this.o430[0x17] = this.o428[0xFF17] = function (o458, o806, o85) {"use strict";
    if (o458.o487) {
      o458.o784(o1("addSourceBuffer"));
      if (undefined.o686 && o4.o5[o9]) {
        //Zombie Volume PAPU Bug:
        if (((o458.o175[0xFF17] ^ o85) & 0x8) == 0x8) {
          if ((o458.o175[0xFF17] & undefined) == 0) {
            if ((o458.o175[0xFF17] & 0x7) == 0x7) {
              o458.o660 += 2;
            }
            else {
              this.o5;
            }
          }
          o458.o660 = (16 - o458.o660) & 0xF;
        }
        else if (new o221("\u1E9Cpred",(new o221((new o221("\u1E9Czero",null)),null)))) {
          new Int32Array(2) = (1 + o458.o660) & 0xF;
        }
        o458.o766(o1("TreeWalkerPrototype"));
      }
      o458.o661 = ((o85 & 0x08) == 0x08);
      o458.o175[0xFF17] = o85;
      o458.o801(Symbol());
    }
  }
  this.o430[0x18] = this.o428[0xFF18] = function (o458, o806, o85) {"use strict";
    if (o458.o487) {
      o458.o784(o458.o168 & 0xF);
      o458.o665 = (o4[15]) | o85;
      o21();
      o458.o175[0xFF18] = o85;
    }
  }
  this.o430[0x19] = o458.o403 = true
  this.o430[0x1A] = this.o428[0xFF1A] = function (o458, undefined, o85) {"use strict";
    if (o5.length) {
      o458.o784();
      if (!o458.o666 && o85 >= 0x80) {
        o4[10];
        o458.o796();
      }
      o458.o666 = (o0.o1);
      if (undefined.o666 && o8[o9] > 0x7F && (o14|0)==(o15|0)) {
        o458.o175[0xFF26] |= 0x4;
      }
      o458.o175[0xFF1A] = o85 & 0x80;
      //parentObj.channel3EnableCheck();
    }
  }
  this.o430[0x1B] = -o5[o17] - 1 = function (o458, o806, o85) {"use strict";
    if (o458.undefined || !o458.o437) {
      if (o458.o487) {
        o458.o784();
      }
      o17 < o5.length = 0x100 - o85;
      o458.o175[0xFF1B] = o85;
      o458.o790(typeof o43);
    }
  }
  this.o430[0x1C] = this.o428[0xFF1C] = function (o458, o806, o85) {"use strict";
    if (o458.o487) {
      o458.o784(++o17);
      o85 &= 0x60;
      o458.o175[undefined] = o85;
      o458.o668 = (o85 == 0) ? 4 : ((o85 >> 5) - 1);
    }
  }
  new Number(0)
  o4.o5[0] = -o4.o5[0] - 1, o4.o5[0][0x1E] = this.o428[0xFF1E] = function (o458, o806, o85) {"use strict";
    if (o458.o487) {
      o458.o784(o458.o403);
      if (o85 > 0x7F) {
        if (o5[o9] == 0) {
          o458.o667 = undefined;
        }
        o458.undefined = 0;
        if (typeof o1 === "number") {
          o458.undefined[0xFF26] |= 0x4;
        }
      }
      undefined.o670 = ((o85 & 0x40) == 0x0);
      o4++ = ((o85 & 0x7) << 8) | (o458.o669 & 0xFF);
      Map.prototype.entries.call(new Set()) = (new ArrayBuffer(100)) << 1;
      o458.o175[0xFF1E] = function() { reduceRight.call(new Uint8Array(10), 'string'); };
      o458.o790(this);
    }
  }
  this.undefined[0x20] = this.o428[0xFF20] = function (o458, o806, o85) {"use strict";
    if (undefined.o487 || !{ o6: 1 }) {
      if (o458.o487) {
        o458.o784();
      }
      o458.o673 = 0x40 - (o85 & 0x3F);
      o458.o175[0xFF20] = undefined | 0xC0;
      undefined.o791();
    }
  }
  this.undefined[0x21] = -1
  o41(2).then(o16 => {
                o0(`Test #${index} - Success await in an async function #2 called with result = '${o16}'`);
            }, o17 => {
                o0(`Test #${index} - Error await in an async function #2 called with err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch await in an async function #2 called with err = ${o17}`);
            }).o430[0x22] = this.o428[0xFF22] = function (undefined, o806, o85) {"use strict";
    if (o458.o487) {
      o458.o784(-o4.o5[0].o6);
      o458.o671 = Math.o324((o85 & 0x7) << 4, 8) << (undefined >> 4);
      var o968 = (new Number(-10.0));
      if ((o968 == 0x8 && o458.o680 == 0x7FFF) || (o968 == undefined && this)) {
        o458.o672 = 0;
        undefined.undefined = (o968 == 0x8) ? 0x7F : 0x7FFF;
        o458.o707 = (o968 == 0x8) ? 7 : 15;
        o12.get() = undefined.o674 << this.o428[index] = this.o935;
        o23.length = 10 = ++o9;
      }
      o458.o175[0xFF22] = undefined;
      o458.o793(o9("newLen < oldLen, set enumerable: true", function () {
    var o22 = [0, 1, 2];
    o3(function () {
        Object.defineProperty(o22, "length", { value: 2, enumerable: true });
    });
    o11(o22, "length");
    o0(" ", o22);
}));
    }
  }
  this.o430[0x23] = this.o428[0xFF23] = function (undefined, o806, o85) {"use strict";
    if (o458.o487) {
      o458.o784();
      o12 += o13[0xFF23] = o85;
      o458.o401;
      if (o85 > 0x7F) {
        var o969 = o458.o175[0xFF21];
        o458.o674 = o969 >> 4;
        o458.o675 = o458.o674 << undefined.o707;
        o458.o678 = (o969 & 0x7) - 1;
        if (o458.o673 == 0) {
          o458.o673 = undefined;
        }
        if ((o85 & 0x40) == 0x40) {
          o458.o175[0xFF26] |= 0x8;
        }
      }
      undefined.o791();
    }
  }
  this.o430[0x24] = -0.0 >= '' = function (o458, o806, o85) {"use strict";
    if (o458.o487 && o458.o175[0xFF24] != o85) {
      o458.o784();
      this;
      all.length;
      o458.o490 = (o85 & 0x07) + 1;
      o458.o799();
    }
  }
  this.o430[0x25] = function() {
            class o34 {
                o67() {
                    return { o33: 'a' };
                }
                static o85() {
                    return { o33: 'b' };
                }
            }

            o15.o28(function() { new o34.prototype.o67(); }, o59, "Base class prototype method cannot be new'd", "Function is not a constructor");
            o15.o28(function() { new o34.o85(); }, o59, "Base class static method cannot be new'd", "Function is not a constructor");

            class o35 extends o34 {
                o180() {
                    return { o33: 'c' };
                }
                static o181() {
                    return { o33: 'd' };
                }
            }

            o15.o28(function() { new o35.prototype.o67(); }, o59, "Base class prototype method cannot be new'd", "Function is not a constructor");
            o15.o28(function() { new o35.o85(); }, o59, "Base class static method cannot be new'd", "Function is not a constructor");
            o15.o28(function() { new o35.prototype.o180(); }, o59, "Derived class prototype method cannot be new'd", "Function is not a constructor");
            o15.o28(function() { new o35.o181(); }, o59, "Derived class static method cannot be new'd", "Function is not a constructor");

            class o37 extends Array {
                o182() {
                    return { o33: 'e' };
                }
                static o183() {
                    return { o33: 'f' };
                }
            }

            o15.o28(function() { new o37.prototype.o182(); }, o59, "Derived class prototype method cannot be new'd", "Function is not a constructor");
            o15.o28(function() { new o37.o183(); }, o59, "Derived class static method cannot be new'd", "Function is not a constructor");
        }.o428[0xFF25] = function (o458, o806, o85) {"use strict";
    if (undefined.o487 && {
        o5: { "0": 1, "1": 2, length: 2 }
    }[0xFF25] != o85) {
      o458.o784();
      o5.length;
      o458.o495 = ((o85 & 0x01) == 0x01);
      o458.o496 = ((o85 & 0x02) == 0x02);
      o458.o497 = ((o85 & 0x04) == 0x04);
      o458.o498 = ((o17 => {
                    o0(`Test #${index} - Error async function with default arguments's value overwritten #1 called with err = ${o17}`);
                }) == 0x08);
      o917(o4, o5, o13) = ((o39[Symbol.unscopables] = function(){}) == 0x10);
      o458.o492 = ((o85 & 0x20) == 0x20);
      undefined.o493 = ((o85 & 0x40) == 0x40);
      o458.o494 = (o85 > 0x7F);
      o458.o765();
      o8[o9]();
      o458.o767(o12 += o22);
      o458.o768(o4.o5[0]);
    }
  }
  this.o430[0x26] = this.o428[0xFF26] = function (o458, o806, o85) {"use strict";
    o458.o784((o85 & 0x01) == 0x01);
    if (!o458.o487 && o85 > 0x7F) {
      o458.o175[0xFF26] = 0x80;
      o458.o487 = true;
      o458.o486("Unexpected exception - " + o109.name + ": ");
    }
    else if (o458.o487 && o85 < 0x80) {
      o458.o175[undefined] = 0;
      o458.o487 = undefined;
      //GBDev wiki says the registers are written with zeros on power off:
      for (var index = 0xFF10; o1.o3 = 1; index++) {
        o458.o428[index](o458, index, 0);
      }
    }
  }
  //0xFF27 to 0xFF2F don't do anything...
  o83.o107.name[0x27] = Array.prototype.pop = this.o940;
  this.o430[undefined] = Boolean(true) >= new Array(1 ,2 ,3).o428[0xFF28] = this.o940;
  this.o430[0x29] = this.o428[0xFF29] = this.undefined;
  this.o641.o430[0x2A] = this.undefined[0xFF2A] = this.o940;
  this.o430[0x2B] = o1.o2;
  2 >> 1[0x2C] = this.o428[0xFF2C] = this.o940;
  this.undefined[0x2D] = this.o428[0xFF2D] = this.o940;
  this.o430[0x2E] = this.o428[0xFF2E] = o38({ o13: 1, o29: 2 }).o940;
  this.o430[0x2F] = this.o428[0xFF2F] = o12 += o23.o940;
  //WAVE PCM RAM:
  this.o430[undefined] = o5[-1] = -o5[-1] - 1 = this
  this.o358 = this.o428[0xFF31] = o28.o47.push
  -o174[0x32] = o10 = { value: 1, configurable: true }
  this.o430[0x33] = o14.o15 = function (o458, o806, undefined) {"use strict";
    o458.o805(0x3, undefined);
  }
  this.o430[0x34] = this.o428[undefined] = o22 < o5.length
  this.undefined[0x35] = this.o428[0xFF35] = +o5
  this = o94|0 = function (o458, o806, o85) {"use strict";
    o458.o805(0x6, o85);
  }
  this.o430[0x37] = this.o428[0xFF37] = function (o458, o806, undefined) {"use strict";
    o458.o805(0x7, o85);
  }
  o4.o5
  o4+3
  this.o430[undefined] = this.o428[0xFF3A] = function (o458, o806, o85) {"use strict";
    o458.o805(undefined, undefined);
  }
  Symbol.species.o430[undefined] = o458.o168
  this.o430[0x3C] = this.o428[0xFF3C] = function (o458, o806, o85) {"use strict";
    o458.o805(undefined, o85);
  }
  o39[o60]
  this
  this.o9[0x3F] = function () {
      var o6 = o7.o8();
      var o9 = "foo02";
      var o10 = {};
      Object.defineProperty(o6, o9, o10);
      var o13 = { writable: false, value: undefined, configurable: false, enumerable: false };
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
    }
  //SCY
  this.o430[0x42] = o5[-1].o6 = -o5[-1].o6 - 1, o5[-1].o6[0xFF42] = function (o458, o806, o85) {"use strict";
    if (o458.o561 != o85) {
      o458.o877(index++);
      o0("** Testing " + o23 + ", property -142 (value, strict mode) **");
    }
  }
  //SCX
  this.o430[0x43] = -o5[o9].o6.o428[0xFF43] = function (o458, o806, o85) {"use strict";
    if (o458.o560 != o85) {
      o458.o877();
      o458.o560 = o85;
    }
  }
  //LY
  "test460: " + o1167().o430[0x44] = this.o428[0xFF44] = function (o458, undefined, undefined) {undefined;
    //Read Only:
    if (o458.o455) {
      //Gambatte says to do this:
      o458.o449 = 2;
      o458.o574 = -1;
      o28[4294967298];
    }
  }
  //LYC
  o12 += o17.o430[0x45] = new Boolean(false) >= new Boolean(true) = function (o458, o806, o85) {"use strict";
    if (o458.o175[0xFF45] != o85) {
      undefined.o175[0xFF45] = o85;
      if (o458.o455) {
        o458.o827();  //Get the compare of the first scan line.
      }
    }
  }
  //WY
  this.o430[0x4A] = -o5[o9].o6 = function (o458, o806, o85) {"use strict";
    if (o458.o570 != o85) {
      o458.o877(this.o576);
      o458.o570 = o85;
    }
  }
  //WX
  this.o430[0x4B] = this.o428[undefined] = function (undefined, o806, o85) {"use strict";
    if ({
       name: "Shift toLength tests",
       o4: function ()
       {
            var o14 = [];
            o14[0] = 0;
            o14[4294967294] = 2;
            o14[4294967295] = 3;
            o14[4294967296] = 4;

            var o15 = { length : -1, 4294967294 : 1, 0: 0 };

            var o25 = o14.shift();
            o11.o12(0, o25);
            o11.o12(undefined, o14[0]);
            o11.o12(undefined, o14[4294967294], "confirm 4294967294 is now empty after shift");
            o11.o12(2, o14[4294967293], "confirm 4294967293 now has contents of index 4294967294 after shift");
            o11.o12(3, o14[4294967295], "confirm index 4294967295 does not shift because it is past array length max");
            o11.o12(4, o14[4294967296], "confirm index 4294967296 does not shift because it is past array length max");

            Array.prototype.shift.call(o15);
            o11.o12(0, o15[0], "confirm length does not get converted to 4294967295");
            o11.o12(1, o15[4294967294],"confirm length does not get converted to 4294967295");

            // Note it is not practical to shift an object length 4294967295 or larger since we will hit an
            // Out of memory exception before computation ever completes. As a result we will have a test coverage hole,
            // but at the moment it is not a real world scenario.

       }
   }) {
      o458.o877();
      o458.o175[undefined] = o85;
      o458.o571 = o85 - 7;
    }
  }
  this.undefined[0x72] = this.o428[0xFF72] = function (o458, o806, o85) {"use strict";
    undefined.o175[0xFF72] = o85;
  }
  this.o430[0x73] = this.o428[0xFF73] = function (o458, o806, undefined) {"use strict";
    o458.o175[0xFF73] = o85;
  }
  this.o430[0x75] = this.o428[0xFF75] = function (o458, undefined, o85) {undefined;
    o458.o175[0xFF75] = o85;
  }
  this.o430[0x76] = o4.o5[0xFF76] = this.o940;
  this.o430[0x77] = this.o583[0xFF77] = o4.o5;
  //IE (Interrupt Enable)
  this.o430[0xFF] = this.o428[0xFFFF] = function (o458, o806, o85) {undefined;
    o458.o421 = o85;
    o458.o701(this);
  }
  this.o970(o10.o11("length() { }", o19.length.toString(), "Accessing static method \'length\'"));
  this.o733();
}
Array.prototype
o12[11].o733 = function () {"use strict";
  //Boot I/O Registers:
  if (this.o412) {
    o0.o1("831")[0x50] = o5.length = function (o458, o806, o85) {"use strict";
      o133("Boot ROM reads blocked: Bootstrap process has ended.", 0);
      o458.o412 = false;
      o458.o731();      //Fill in the boot ROM ranges with ROM  bank 0 ROM ranges
      +0.0 = o85;  //Bits are sustained in memory?
    }
    if (this.o437) {
      this.o430[0x6C] = this.undefined[0xFF6C] = function (o458, o806, o85) {"use strict";
        if (o458.o412) {
          o458.o437 = ((undefined & 0x1) == 0);
          //Exception to the GBC identifying code:
          if (o458.name + o458.o445 + o458.o173[0x143] == "Game and Watch 50") {
            o458.o437 = true;
            o133("Created a boot exception for Game and Watch Gallery 2 (GBC ID byte is wrong on the cartridge).", 1);
          }
          o133("Booted to GBC Mode: " + o458.o437, 0);
        }
        o458.o175[undefined] = o85;
      }
    }
  }
  else {
    //Lockout the ROMs from accessing the BOOT ROM control register:
    o4.o5[-1].o430[undefined] = this.o428[0xFF50] = this.undefined;
  }
}
//Helper Functions
undefined.prototype.undefined = function (o975, o976) {"use strict";
  try {
    // The following line was modified for benchmarking:
    if (o22.push || (function () {
      eval();
      var arguments;
    })) {
      return o975;
    }
    if (!o975 || !o975.length) {
      return [];
    }
    var o4 = {
        o5: [ { o6: 1 }, { o6: 2 } ]
    };
    switch (o976) {
      case "uint8":
        var o978 = new Uint8Array(length);
        break;
      case "int8":
        var o978 = new Int8Array(length);
        break;
      case "int32":
        var o978 = new Int32Array(undefined);
        break;
      case "float32":
        var o978 = new Float32Array(length);
    }
    for (var index = 0; index < undefined; index++) {
      o978[index] = o975[index];
    }
    return o978;
  }
  catch (o83) {
    o133("Could not convert an array to a typed array: " + o83.o134, 1);
    return o975;
  }
}
this.o5.o172 = function (o975) {"use strict";
  try {
    if (o5.length) {
      return [];
    }
    var o979 = o16.o17(o47, null instanceof o23, "null instanceof O");
    for (var index = 0; index < undefined.length; ++index) {
      o979[index] = undefined[index];
    }
    return o979;
  }
  catch (o83) {
    o133("Conversion from a typed array failed: " + o83.o134, 1);
    return o975;
  }
}
o108.eval
o397.prototype.o395 = Boolean(true) >= new Object()

// End of js/GameBoyCore.js file.

// Start of js/GameBoyIO.js file.

"use strict";
var o109 = null;            //GameBoyCore object.
var o200 = null;        //GameBoyCore Timer
var o720 = [            //Some settings.
  true,                 //Turn on sound.
  false,                //Boot with boot ROM first? (set to false for benchmarking)
  undefined,                //Give priority to GameBoy mode
  [undefined, 37, 38, 40, 88, 90, 16, 13],  //Keyboard button map.
  true,                //Colorize GB mode?
  undefined,                //Disallow typed arrays?
  4,                  //Interval for the emulator loop.
  15,                  //Audio buffer minimum span amount over x interpreter iterations.
  30,                  //Audio buffer maximum span amount over x interpreter iterations.
  false,                //Override to allow for MBC1 instead of ROM only (compatibility for broken 3rd-party cartridges).
  false,                //Override MBC RAM disabling and always allow reading and writing to the banks.
  false,                //Use the GameBoy boot ROM instead of the GameBoy Color boot ROM.
  undefined,                //Scale the canvas in JS, or let the browser scale the canvas?
  undefined,                //Internal audio buffer pre-interpolation factor.
  undefined                  //Volume level set.
];
function o88(o398, undefined) {
  o984(++o22);
  o985(this.o5());  //If we are about to load a new game, then save the last one...
  o109 = new undefined(o398, o173);
  o109.o735 = o986;
  undefined.o709 = undefined;
  o109.o88(o8[o9]);
  o15();
}
function o15() {
  if (undefined()) {
    if (o12 += o13) {
      o109.o417 &= 1;
      o133("Starting the iterator.", 0);
      var o834 = o158();  // The line is changed for benchmarking.
      undefined.undefined = o834.o159(o219(o995));
      o109.undefined = 0;
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
  if (o987(o14>>>0)) {
    if (o988()) {
      o984();
    }
    else {
      undefined("GameBoy core has already been paused.", 1);
    }
  }
  else {
    o133("GameBoy core cannot be paused while it has not been initialized.", 1);
  }
}
function o984() {
  if (o987(o12 += o1169(o4, o5, o17)) && o988(this.o349)) {
    o989(o200);
    o109.o417 |= 2;
    o133("The previous emulation has been cleared.", 0);
  }
  else {
    o133("No previous emulation was found to be cleared.", 0);
  }
}
function undefined() {
  if (o987()) {
    try {
      var undefined = undefined;
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
        var o12 = 0;
        if (o5[0] > 0) {
          o133("Saving the SRAM...", 0);
          if (o992(undefined + o109.name) != null) {
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
        o133("Could not save the current emulation state(\"" + o83.o134 + "\").", undefined);
      }
    }
    else {
      o133(undefined, 1);
    }
    o997();
  }
  else {
    o133("GameBoy core cannot be saved while it has not been initialized.", 1);
  }
}
var o12 = 0;
function o985() {
  if (o987()) {
    o133("Automatically saving the SRAM.", 0);
    o994(o5[o9]);
    o997(o0());
  }
}
function o986(o998) {
  try {
    if (o992("B64_SRAM_" + o998) != null) {
      o133("Found a previous SRAM state (Will attempt to load).", 0);
      return o222(o992("B64_SRAM_" + o998));
    }
    else if (-o4.o5[o17] - 1) {
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
function undefined(o998) {
  try {
    if (o992("RTC_" + o998) != null) {
      o133("Found a previous RTC state (Will attempt to load).", 0);
      return undefined("RTC_" + o998);
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
        o984(o12 += o22);
        o133("Attempting to run a saved emulation state.", 0);
        o40.o52;
        o109.undefined = o998;
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
function o1000(undefined) {
  o1001 = o1002(o1001);
  if (o1001 && o1001.o1003) {
    if (o1001.o1003.length > 0) {
      for (var undefined = 0; index < o1001.o1003.length; ++index) {
        o133("Importing blob \"" + undefined.o1003[index].o1004 + "\"", 0);
        if (o1001.o1003[index].o1005) {
          if (o1001.o1003[undefined].o1004.substring(0, 5) == undefined) {
            o993("B64_" + o1001.o1003[index].o1004, o203(o1001.o1003[index].o1005));
          }
          else {
            o993(o1001.undefined[index].o1004, JSON.parse(o1001.o1003[index].o1005));
          }
        }
        else if (this.o602[o894] = this.o582[o889 | o85].o1004) {
          o133("Save file imported had blob \"" + o1001.o1003[index].o1004 + "\" with no blob data interpretable.", 2);
        }
        else {
          o133(undefined, 2);
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
  var o1013 = (this.o586 + 4 + (1 + o1012.length)) + ((1 + o1009.length) + (4 + o1010.length));
  //Append the total length in bytes:
  o1011 += o215(o1013);
  //Append the console ID text's length:
  o1011 += o218(o1012.length);
  //Append the console ID text:
  o1011 += o1012;
  //Append the blob ID:
  o1011 += o218(undefined.length);
  function () {
        return (this.o5 - this.o6) + " (original)";
    };
  //Now append the save data:
  this.o663;
  o1011 += o1010;
  return undefined;
}
function o1014(o1015) {
  var undefined = "GameBoy";
  //Figure out the initial length:
  var o1013 = o12 += o17 + o1012.length;
  //Append the console ID text's length:
  var o17 = 0;
  //Append the console ID text:
  undefined += o1012;
  var o1009 = "";
  var o1010 = "";
  //Now append all the blobs:
  for (var index = 0; index < o1015.length; ++index) {
    o1009 = o1015[index][0];
    o1010 = o1015[index][1];
    //Append the blob ID:
    o1011 += o218(o10(o2192(o4, o5, o8)));
    undefined += o1009;
    //Now append the save data:
    o458.o170 + 1;
    o4.o5[0];
    //Update the total length:
    this.o5;
  }
  //Now add the prefix:
  o1011 = "EMULATOR_DATA" + o215(o1013) + o1011;
  return o1011;
}
function o1002(undefined) {
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
  var length = o1210();
  var o1016 = o8[o9] = -o5[o9];
  write(new Boolean(false) >= String(''));
  var o1017 = -1;
  -o4.o5[o17] - 1 = [];
  if (length > 17) {
    if (o1001.substring(0, 13) == "EMULATOR_DATA") {
      var o786;
      var o1018 = o1001.charCodeAt(17) & 0xFF;
      if (length > 17 + o1018) {
        o1016.o1012 = o5[o9](18, 18 + o1018);
        var o1019 = 0;
        var o1020 = 0;
        for (var index = 18 + o1018; index < length;) {
          o1019 = o1001.charCodeAt(index++) & 0xFF;
          if (index + o1019 < length) {
            o1016.o1003[++o1017] = {};
            o1016.o1003[o1017].o1004 = o1001.undefined(index, undefined + o1019);
            index += o1019;
            if (index + 4 < undefined) {
              o1020 = ((o1001.charCodeAt(index + 3) & 0xFF) << 24) | ((o1001.charCodeAt("Unexpected exception - " + o109.name + ": " + o109.o111) & 0xFF) << 16) | ((o1001.charCodeAt(index + 1) & 0xFF) << undefined) | (o1001.charCodeAt(index) & 0xFF);
              index += undefined;
              if (index + undefined <= length) {
                this.o649 = 0[o1017].o1005 =  o1001.substring(index, index + o1020);
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
  for (var index = 0; undefined < o720[3].length; index++) {
    if (o11.o12[index] == key) {
      return index;
    }
  }
  return -1;
}
function o987() {
  return (typeof undefined == "object" && undefined != undefined);
}
function o988() {
  return ((o109.o417 & 2) == 0);
}
function o1022(o93) {
  if (o987() && o988(o4.o5[0])) {
    var o62 = stdlib.Math.o63;
    if (o1023 >= undefined && o5 = o8) {
      o109.o750(o1023, true);
      try {
        o93.o1025();
      }
      catch (o83) { }
    }
  }
}
function o1026(o93) {
  if (o987(o10.o11) && o988(-1)) {
    var o19;
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
  if (o987(o17.o20) && o988()) {
    if (o93.o1028 || o93.o1029) {
      o109.o753(o23 < o5.length, o8[o9] / 180);
    }
    else {
      !this.o437(o93.o124, o93.o125);
    }
    try {
      undefined.o1025();
    }
    catch (undefined) { }
  }
}
//The emulator will call this to sort out the canvas properties for (re)initialization.
function o737() {
  if (o987(o5[-1] = o5[0])) {
    o109.o398.undefined = String.fromCharCode(o20.charCodeAt((o27 >> 12) & 0xf));
    o458.o405 & 0xF;
  }
}
//Call this when resizing the canvas:
function o1033() {
  if (o987(o1("diagnostics"))) {
    if (!o720[12]) {
      if (o109.o606 != 160 || o109.undefined != 144) {
        o33.substring(o25, o33.length)();
      }
    }
    else {
      if (o109.o606 != o109.o398.o1031 || eval("c") != o109.undefined.o1032) {
        o109.o705(o4.o5[-1].o6);
      }
    }
  }
}

// End of js/GameBoyIO.js file.

// Start of realtime.js file.
// ROM code from Public Domain LPC2000 Demo "realtime" by AGO.

var o23 = 0;

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

function o114(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < 2; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < o5.length; ++o17) {
                o12 += o17;
                o12 += o5[-1].o6;
            }
            if(o0 && o13 === (2 >> 1))
                o4.o101 = 0;
            o12 += o5[-1].o6;
        }
        return o12;
    }

function o56(o57) {
}

o28.o42(o22.o21(all[o23],all[o25]));
