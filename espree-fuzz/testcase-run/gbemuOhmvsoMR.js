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

try {
if(o19(o54, "test4") === "undefined")
{
    var o231 = ''
}
}catch(o9){}

// Performance.now is used in latency benchmarks, the fallback is Date.now.
var o82 = 10.1;
try {
o278 = (o4.write(0.0 >= new Number(Number.MIN_VALUE)))();
}catch(e){}

// Simple framework for running the benchmark suites and
// computing a score based on the timing measurements.


// A benchmark has a name (string) and a function that will be run to
// do the performance measurement. The optional setup and tearDown
// arguments are functions that will be invoked before and after
// running the benchmark, but the running time of these functions will
// not be accounted for in the benchmark score.
function o32(name, o9, e, o11, 
                   o12, o13, o14, o15, o16) {
  try {
o10.o11(9, o9, "Symbol.hasInstance in a normal function contructor - checked==9").nameo0.o494("x + y = " + o6.add(this.o391)).name = name;
}catch(e){}
  try {
o16 = o9;
}catch(e){}
  try {
global.Math;
}catch(e){}
  try {
this.o11 = o11;
}catch(e){}
  try {
this.o12 = o12;
}catch(e){}
  try {
this.o17 = o13 ? o13 : function() { };
}catch(e){}
  try {
this.o18 = o14 ? o14 : function() { };
}catch(e){}
  try {
this.o15 = o15 ? o15 : null;
}catch(e){} 
  try {
this.o16 = o16 ? o16 : 32;
}catch(e){}
}


// Benchmark results hold the benchmark and the measured time used to
// run the benchmark. The benchmark score is computed later once a
// full benchmark suite has run to completion. If latency is set to 0
// then there is no latency score for this benchmark.
function o19(o20, o21, o22) {
  try {
o49 = o20;
}catch(e){}
  try {
this.o705 = o21;
}catch(e){}
  try {
o1 = o22;
}catch(e){}
}


// Automatically convert results to numbers. Used by the geometric
// mean computation.
try {
o19.prototype.valueOf = function() {
  try {
return this.o21;
}catch(e){}
}
}catch(e){}


// Suites of benchmarks consist of a name and the set of benchmarks in
// addition to the reference timing that the final score will be based
// on. This way, all scores are relative to a reference run and higher
// scores implies better performance.
var o871 = o868.o627(o489.o804(o31).o734.o539, o31)


// Keep track of all declared benchmark suites.
try {
o23.o26 = [];
}catch(e){}

// Scores are not comparable across versions. Bump the version if
// you're making changes that will affect that scores, e.g. if you add
// a new benchmark or change an existing one.
try {
o23.o27 = '9';
}catch(e){}


// Defines global benchsuite running mode that overrides benchmark suite 
// behavior. Intended to be set by the benchmark driver. Undefined 
// values here allow a benchmark to define behaviour itself.
try {
o23.o28 = {
  o9: undefined,
  o10: undefined
};
}catch(e){}


// Override the alert function to throw an exception instead.
try {
o29 = function(o30) {
  try {
throw "Alert called with argument: " + o30;
}catch(e){}
};
}catch(e){}


// To make the benchmark results predictable, we replace Math.random
// with a 100% deterministic alternative.
try {
o23.o31 = function() {
  try {
Math.random = (function() {
    var o32 = 49734321;
    try {
return function() {
      // Robert Jenkins' 32 bit integer hash function.
      try {
o32 = ((o32 + 0x7ed55d16) + (o32 << 12))  & 0xffffffff;
}catch(e){}
      try {
o32 = ((o32 ^ 0xc761c23c) ^ (o32 >>> 19)) & 0xffffffff;
}catch(e){}
      try {
o32 = ((o32 + 0x165667b1) + (o32 << 5))   & 0xffffffff;
}catch(e){}
      try {
o32 = ((o32 + 0xd3a2646c) ^ (o32 << 9))   & 0xffffffff;
}catch(e){}
      try {
o32 = ((o32 + 0xfd7046c5) + (o32 << 3))   & 0xffffffff;
}catch(e){}
      try {
o32 = ((o32 ^ 0xb55a4f09) ^ (o32 >>> 16)) & 0xffffffff;
}catch(e){}
      try {
return (o32 & 0xfffffff) / 0x10000000;
}catch(e){}
    };
}catch(e){}
  })();
}catch(e){}
}
}catch(e){}


// Runs all registered benchmark suites and optionally yields between
// each individual benchmark to avoid running for too long in the
// context of browsers. Once done, the final score is reported to the
// runner.
try {
o23.o33 = function(o34, o35) {
  try {
o35 = typeof o35 === 'undefined' ? [] : o35;
}catch(e){}
  var o36 = null;
  var o26 = o23.o26;
  var length = o26.length;
  try {
o23.o37 = [];
}catch(e){}
  var index = 0;
  function o38() {
    try {
while (o36 || index < length) {
      try {
if (o36) {
        try {
o36 = o36();
}catch(e){}
      } else {
        var o39 = o26[index++];
        try {
if (o34.o40) try {
o34.o40(o39.name);
}catch(e){}
}catch(e){}
        try {
if (o35.indexOf(o39.name) > -1) {
          try {
o39.o41(o34);
}catch(e){}
        } else {
          try {
o36 = o39.o38(o34);
}catch(e){}
        }
}catch(e){}
      }
}catch(e){}
      try {
if (o36 && typeof o42 != 'undefined' && o42.o43) {
        try {
o42.o43(o38, 25);
}catch(e){}
        try {
return;
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}

    // show final result
    try {
if (o34.o44) {
      var o45 = o23.o46(o23.o37);
      var o47 = o23.o48(100 * o45);
      try {
o34.o44(o47);
}catch(e){}
    }
}catch(e){}
  }
  try {
o38();
}catch(e){}
}
}catch(e){}


// Counts the total number of registered benchmarks. Useful for
// showing progress as a percentage.
try {
o23.o49 = function() {
  var o50 = 0;
  var o26 = o23.o26;
  try {
for (var o51 = 0; o51 < o26.length; o51++) {
    try {
o50 += o26[o51].o25.length;
}catch(e){}
  }
}catch(e){}
  try {
return o50;
}catch(e){}
}
}catch(e){}


// Computes the geometric mean of a set of numbers.
try {
o23.o46 = function(o52) {
  var o53 = 0;
  try {
for (var o51 = 0; o51 < o52.length; o51++) {
    try {
o53 += Math.o53(o52[o51]);
}catch(e){}
  }
}catch(e){}
  try {
return Math.o54(Math.o55, o53 / o52.length);
}catch(e){}
}
}catch(e){}


// Computes the geometric mean of a set of throughput time measurements.
try {
o23.o56 = function(o57) {
  var o53 = 0;
  try {
for (var o51 = 0; o51 < o57.length; o51++) {
    try {
o53 += Math.o53(o57[o51].o21);
}catch(e){}
  }
}catch(e){}
  try {
return Math.o54(Math.o55, o53 / o57.length);
}catch(e){}
}
}catch(e){}


// Computes the geometric mean of a set of rms measurements.
try {
o23.o58 = function(o57) {
  var o53 = 0;
  var o59 = false;
  try {
for (var o51 = 0; o51 < o57.length; o51++) {
    try {
if (o57[o51].o22 != 0) {
      try {
o53 += Math.o53(o57[o51].o22);
}catch(e){}
      try {
o59 = true;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
if (o59) {
    try {
return Math.o54(Math.o55, o53 / o57.length);
}catch(e){}
  } else {
    try {
return 0;
}catch(e){}
  }
}catch(e){}
}
}catch(e){}


// Converts a score value to a string with at least three significant
// digits.
try {
o23.o48 = function(value) {
  try {
if (value > 100) {
    try {
return value.toFixed(0);
}catch(e){}
  } else {
    try {
return value.toPrecision(3);
}catch(e){}
  }
}catch(e){}
}
}catch(e){}

// Notifies the runner that we're done running a single benchmark in
// the benchmark suite. This can be useful to report progress.
try { o4.o11([1,6,7,8,9,6,7,8,9,10], o67.call(o68(), 1, -5, -1), "%TypedArrayPrototype%.copyWithin copying the middle of the array to the last index - 1"); } catch(e) {}


// Notifies the runner that we're done with running a suite and that
// we have a result which can be reported to the user if needed.
try {
o23.prototype.o62 = function() {
  var o63 = o23.o56(this.o61);
  var o45 = this.o24[0] / o63;
  try {
o23.o37.push(o45);
}catch(e){}
  try {
if (this.o34.o62) {
    var o47 = o23.o48(100 * o45);
    try {
this.o34.o62(this.name, o47);
}catch(e){}
  }
}catch(e){}
  try {
if (this.o24.length == 2) {
    var o64 = o23.o58(this.o61);
    try {
if (o64 != 0) {
      var o65 = this.o24[1] / o64;
      try {
o23.o37.push(o65);
}catch(e){}
      try {
if (this.o34.o62) {
        var o66 = o23.o48(100 * o65)
        try {
this.o34.o62(this.name + "Latency", o66);
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}


try {
o23.prototype.o41 = function(o34) {
  try {
o23.o37.push(1);
}catch(e){}  // push default reference score.
  try {
if (o34.o62) {
    try {
o34.o62(this.name, "Skipped");
}catch(e){}
  }
}catch(e){}
}
}catch(e){}


// Notifies the runner that running a benchmark resulted in an error.
try {
o23.prototype.o67 = function(o68) {
  try {
if (this.o34.o67) {
    try {
this.o34.o67(this.name, o68);
}catch(e){}
  }
}catch(e){}
  try {
if (this.o34.o60) {
    try {
this.o34.o60(this.name);
}catch(e){}
  }
}catch(e){}
}
}catch(e){}


// Runs a single benchmark for at least a second and computes the
// average time it takes to run a single iteration.
try {
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
    try {
for (var o51 = 0; (o10 ? 
      o51<o20.o11 : o72 < 1000); o51++) {
      try {
o20.o12();
}catch(e){}
      try {
o72 = new Date() - o73;
}catch(e){}
    }
}catch(e){}
    try {
if (o70 != null) {
      try {
o70.o74 += o51;
}catch(e){}
      try {
o70.o72 += o72;
}catch(e){}
    }
}catch(e){}
  }

  // Sets up data in order to skip or not the warmup phase.
  try {
if (!o9 && o70 == null) {
    try {
o70 = { o74: 0, o72: 0 };
}catch(e){}
  }
}catch(e){}

  try {
if (o70 == null) {
    try {
o71(null);
}catch(e){}
    try {
return { o74: 0, o72: 0 };
}catch(e){}
  } else {
    try {
o71(o70);
}catch(e){}
    // If we've run too few iterations, we continue for another second.
    try {
if (o70.o74 < o20.o16) try {
return o70;
}catch(e){}
}catch(e){}
    var o75 = (o70.o72 * 1000) / o70.o74;
    var o76 = (o20.o15 != null) ? o20.o15() : 0;
    try {
this.o60(new o19(o20, o75, o76));
}catch(e){}
    try {
return null;
}catch(e){}
  }
}catch(e){}
}
}catch(e){}


// This function starts running a suite, but stops between each
// individual benchmark in the suite and returns a continuation
// function which can be invoked to run the next benchmark. Once the
// last benchmark has been executed, null is returned.
try {
o23.prototype.o38 = function(o34) {
  try {
o23.o31();
}catch(e){}
  try {
this.o61 = [];
}catch(e){}
  try {
this.o34 = o34;
}catch(e){}
  var length = this.o25.length;
  var index = 0;
  var o39 = this;
  var o70;

  // Run the setup, the actual benchmark, and the tear down in three
  // separate steps to allow the framework to yield between any of the
  // steps.

  function o77() {
    try {
if (index < length) {
      try {
try {
        try {
o39.o25[index].o17();
}catch(e){}
      } catch (o78) {
        try {
o39.o67(o78);
}catch(e){}
        try {
return null;
}catch(e){}
      }
}catch(e){}
      try {
return o79;
}catch(e){}
    }
}catch(e){}
    try {
o39.o62();
}catch(e){}
    try {
return null;
}catch(e){}
  }

  function o79() {
    try {
try {
      try {
o70 = o39.o69(o39.o25[index], o70);
}catch(e){}
    } catch (o78) {
      try {
o39.o67(o78);
}catch(e){}
      try {
return null;
}catch(e){}
    }
}catch(e){}
    // If data is null, we're done with this benchmark.
    try {
return (o70 == null) ? o80 : o79();
}catch(e){}
  }

  function o80() {
    try {
try {
      try {
o39.o25[index++].o18();
}catch(e){}
    } catch (o78) {
      try {
o39.o67(o78);
}catch(e){}
      try {
return null;
}catch(e){}
    }
}catch(e){}
    try {
return o77;
}catch(e){}
  }

  // Start out running the setup.
  try {
return o77();
}catch(e){}
}
}catch(e){}

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

function o956(o598) {
            try {
o955 = o598.o957 || o955;
}catch(e){}
        }

function o82() {
  try {
o73(new o89(), o85);
}catch(e){}

  try {
o90.o91 = 0;
}catch(e){}
  try {
o90.o92 = 250000;
}catch(e){}

  try {
while (o90.o91 <= o90.o92) {
    try {
o90.o12();
}catch(e){}
    try {
o93.o12();
}catch(e){}
  }
}catch(e){}

  try {
o94();
}catch(e){}
}

function o84() {
  try {
o85 = null;
}catch(e){}
  try {
o95 = null;
}catch(e){}
}

let o30 = false;

// Start of browser emulation.

var o96 = { };

function o97() {
  try {
this.o98 = function() {
    try {
return new o99();
}catch(e){}
  }
}catch(e){}
  try {
this.o100 = function (o101, o102) {
    var o50 = {};
    // The following line was updated since Octane 1.0 to avoid OOB access.
    try {
o50.o70 = new Uint8Array(o101 * o102 * 4);
}catch(e){}
    try {
return o50;
}catch(e){}
  }
}catch(e){}
  try {
this.o103 = function (buffer, o104, o105) {
    var o106 = 0;
    try {
for (var o51 = 0; o51 < buffer.o70.length; o51++) {
      try {
o106 += o51 * buffer.o70[o51];
}catch(e){}
      try {
o106 = o106 % 1000;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
this.o107 = function () { }
}catch(e){}
}try {
;
}catch(e){}

function o89() {
  try {
this.o108 = function() {
    try {
return new o97();
}catch(e){}
  }
}catch(e){}
  try {
this.o109 = 160;
}catch(e){}
  try {
this.o110 = 144;
}catch(e){}
  try {
this.o111 = { o112: "visibile" };
}catch(e){}
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
    try {
this.o118(o120);
}catch(e){}
  }
};

function o122 () {
  try {
this.o123 = function() {
    try {
return { o124 : function () {}, o119 : function() {}};
}catch(e){}
  }
}catch(e){}
  try {
this.o125 = 48000;
}catch(e){}
  try {
this.o126 = {}
}catch(e){}
  try {
this.o98 = function (o127, o128, o125) {
    try {
return { o129 : 1,
             o130 : 1,
             length : 1,
             o131 : 0.000020833333110203966,
             o125 : 48000}
}catch(e){}
  }
}catch(e){}
  try {
this.o132 = function (o117, o133, o134) {
    try {
o93.o117 = o117;
}catch(e){}
    try {
o93.o121 = {
        o135 : function (o51) {try {
return this.o136[o51];
}catch(e){}},
        o136    : []
    };
}catch(e){}
    try {
for (var o51 = 0; o51 < o134; o51++) {
      try {
o93.o121.o136[o51] = new Float32Array(o117);
}catch(e){}
    }
}catch(e){}
    try {
return o93;
}catch(e){}
  }
}catch(e){}
}

var o137 = 0;

function o138() {
  try {
return {
    o139: function() {
      try {
o137 += 16;
}catch(e){}
      try {
return o137;
}catch(e){}
    }
  };
}catch(e){}
}

// End of browser emulation.

// Start of helper functions.

function o140() {
  function o106(o141) {
    var o50 = 0;
    try {
for (var o51 = 0; o51 < o141.length; o51++) {
      try {
o50 += o141[o51];
}catch(e){}
    }
}catch(e){}
    try {
return o50;
}catch(e){}
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
  try {
if (typeof o95 != "undefined") {
    try {
if (o160 != o95) {
      try {
o29("Incorrect final state of processor:\n" +
            " actual   " + o160 + "\n" +
            " expected " + o95);
}catch(e){}
    }
}catch(e){}
  } else {
    try {
o29(o160);
}catch(e){}
  }
}catch(e){}
}


function o94 () {
  //Audio API Event Handler:
  try {
o161 = null;
}catch(e){}
  try {
o162 = null;
}catch(e){}
  try {
o163 = null;
}catch(e){}
  try {
o164 = false;
}catch(e){}
  try {
o165 = [];
}catch(e){}
  try {
o166 = [];
}catch(e){}
  try {
o167 = 15000;
}catch(e){}
  try {
o168 = 25000;
}catch(e){}
  try {
o169 = 44100;
}catch(e){}
  try {
o170 = 0;
}catch(e){}
  try {
o171 = false;
}catch(e){}
  try {
o172 = 1;
}catch(e){}
  try {
o173 = null;
}catch(e){}
  try {
o174 = 0;
}catch(e){}
  try {
o175 = 0;
}catch(e){}
  try {
o176 = 0;
}catch(e){}
  try {
o177 = 2;
}catch(e){}

  try {
o90 = null;
}catch(e){}           //GameBoyCore object.
  try {
o178 = null;
}catch(e){}       //GameBoyCore Timer
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
try {
    // The following line was modified for benchmarking:
    var o181 = o96.o182(o70);  //Use this native function when it's available, as it's a magnitude faster than the non-native code below.
  }
  catch (o68) {
    //Defaulting to non-native base64 encoding...
    var o181 = "";
    var o183 = o70.length;
    try {
if (o183 > 0) {
      var o184 = [0, 0, 0];
      var index = 0;
      var o185 = o183 % 3;
      try {
while (o70.length % 3 > 0) {
        //Make sure we don't do fuzzy math in the next loop...
        try {
o70[o70.length] = " ";
}catch(e){}
      }
}catch(e){}
      try {
while (index < o183) {
        //Keep this loop small for speed.
        try {
o184 = [o70.charCodeAt(index++) & 0xFF, o70.charCodeAt(index++) & 0xFF, o70.charCodeAt(index++) & 0xFF];
}catch(e){}
        try {
o181 += o179[o184[0] >> 2] + o179[((o184[0] & 0x3) << 4) | (o184[1] >> 4)] + o179[((o184[1] & 0xF) << 2) | (o184[2] >> 6)] + o179[o184[2] & 0x3F];
}catch(e){}
      }
}catch(e){}
      try {
if (o185 > 0) {
        //Fill in the padding and recalulate the trailing six-bit group...
        try {
o181[o181.length - 1] = "=";
}catch(e){}
        try {
if (o185 == 2) {
          try {
o181[o181.length - 2] = "=";
}catch(e){}
          try {
o181[o181.length - 3] = o179[(o184[0] & 0x3) << 4];
}catch(e){}
        }
        else {
          try {
o181[o181.length - 2] = o179[(o184[1] & 0xF) << 2];
}catch(e){}
        }
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
return o181;
}catch(e){}
}
function o86(o70) {
  try {
try {
    // The following line was modified for benchmarking:
    var o186 = o96.o187(o70);  //Use this native function when it's available, as it's a magnitude faster than the non-native code below.
  }
  catch (o68) {
    //Defaulting to non-native base64 decoding...
    var o186 = "";
    var o183 = o70.length;
    try {
if (o183 > 3 && o183 % 4 == 0) {
      var o188 = [0, 0, 0, 0];  //Declare this out of the loop, to speed up the ops.
      var index = 0;
      try {
while (index < o183) {
        //Keep this loop small for speed.
        try {
o188 = [o180.indexOf(o70.charAt(index++)), o180.indexOf(o70.charAt(index++)), o180.indexOf(o70.charAt(index++)), o180.indexOf(o70.charAt(index++))];
}catch(e){}
        try {
o186 += String.fromCharCode((o188[0] << 2) | (o188[1] >> 4)) + String.fromCharCode(((o188[1] & 0x0F) << 4) | (o188[2] >> 2)) + String.fromCharCode(((o188[2] & 0x03) << 6) | o188[3]);
}catch(e){}
      }
}catch(e){}
      //Check for the '=' character after the loop, so we don't hose it up.
      try {
if (o188[3] >= 0x40) {
        try {
o186.length -= 1;
}catch(e){}
        try {
if (o188[2] >= 0x40) {
          try {
o186.length -= 1;
}catch(e){}
        }
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
return o186;
}catch(e){}
}
function o189(o190) {
  try {
return o191(o190) + String.fromCharCode((o190 >> 16) & 0xFF, (o190 >> 24) & 0xFF);
}catch(e){}
}
function o191(o190) {
  try {
return o192(o190) + String.fromCharCode((o190 >> 8) & 0xFF);
}catch(e){}
}
function o192(o190) {
  try {
return String.fromCharCode(o190 & 0xFF);
}catch(e){}
}
function o193(o194) {
  var o195 = "";
  var length = o194.length;
  try {
for (var index = 0; index < length; ++index) {
    try {
if (typeof o194[index] == "number") {
      try {
o195 += String.fromCharCode(o194[index]);
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
return o181(o195);
}catch(e){}
}
function o196(o197) {
  var o195 = o86(o197);
  var o198 = [];
  var length = o195.length;
  try {
for (var index = 0; index < length;) {
    try {
o198.push(o195.charCodeAt(index++) & 0xFF);
}catch(e){}
  }
}catch(e){}
  try {
return o198;
}catch(e){}
}

// End of js/other/base64.js file.

// Start of js/other/resampler.js file.

//JavaScript Audio Resampler (c) 2011 - Grant Galitz
function o199(o200, o201, o127, o202, o203) {
  try {
this.o200 = o200;
}catch(e){}
  try {
this.o201 = o201;
}catch(e){}
  try {
this.o127 = o127 | 0;
}catch(e){}
  try {
this.o202 = o202;
}catch(e){}
  try {
this.o203 = !!o203;
}catch(e){}
  try {
this.o204();
}catch(e){}
}
try {
o199.prototype.o204 = function () {
  //Perform some checks:
  try {
if (this.o200 > 0 && this.o201 > 0 && this.o127 > 0) {
    try {
if (this.o200 == this.o201) {
      //Setup a resampler bypass:
      try {
this.o205 = this.o206;
}catch(e){}    //Resampler just returns what was passed through.
      try {
this.o207 = 1;
}catch(e){}
    }
    else {
      //Setup the interpolation resampler:
      try {
this.o208();
}catch(e){}
      try {
this.o205 = this.o209;
}catch(e){}      //Resampler is a custom quality interpolation algorithm.
      try {
this.o207 = this.o200 / this.o201;
}catch(e){}
      try {
this.o210 = false;
}catch(e){}
      try {
this.o211 = 0;
}catch(e){}
      try {
this.o212();
}catch(e){}
    }
}catch(e){}
  }
  else {
    try {
throw(new Error("Invalid settings specified for the resampler."));
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o199.prototype.o208 = function () {
  var o213 = "var bufferLength = Math.min(buffer.length, this.outputBufferSize);\
  if ((bufferLength % " + this.o127 + ") == 0) {\
    if (bufferLength > 0) {\
      var ratioWeight = this.ratioWeight;\
      var weight = 0;";
  try {
for (var o214 = 0; o214 < this.o127; ++o214) {
    try {
o213 += "var output" + o214 + " = 0;"
}catch(e){}
  }
}catch(e){}
  try {
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
}catch(e){}
  try {
for (o214 = 0; o214 < this.o127; ++o214) {
    try {
o213 += "output" + o214 + " = 0;"
}catch(e){}
  }
}catch(e){}
  try {
o213 += "}\
        else {\
          weight = this.lastWeight;";
}catch(e){}
  try {
for (o214 = 0; o214 < this.o127; ++o214) {
    try {
o213 += "output" + o214 + " = this.lastOutput[" + o214 + "];"
}catch(e){}
  }
}catch(e){}
  try {
o213 += "alreadyProcessedTail = true;\
        }\
        while (weight > 0 && actualPosition < bufferLength) {\
          amountToNext = 1 + actualPosition - currentPosition;\
          if (weight >= amountToNext) {";
}catch(e){}
  try {
for (o214 = 0; o214 < this.o127; ++o214) {
    try {
o213 += "output" + o214 + " += buffer[actualPosition++] * amountToNext;"
}catch(e){}
  }
}catch(e){}
  try {
o213 += "currentPosition = actualPosition;\
            weight -= amountToNext;\
          }\
          else {";
}catch(e){}
  try {
for (o214 = 0; o214 < this.o127; ++o214) {
    try {
o213 += "output" + o214 + " += buffer[actualPosition" + ((o214 > 0) ? (" + " + o214) : "") + "] * weight;"
}catch(e){}
  }
}catch(e){}
  try {
o213 += "currentPosition += weight;\
            weight = 0;\
            break;\
          }\
        }\
        if (weight == 0) {";
}catch(e){}
  try {
for (o214 = 0; o214 < this.o127; ++o214) {
    try {
o213 += "outputBuffer[outputOffset++] = output" + o214 + " / ratioWeight;"
}catch(e){}
  }
}catch(e){}
  try {
o213 += "}\
        else {\
          this.lastWeight = weight;";
}catch(e){}
  try {
for (o214 = 0; o214 < this.o127; ++o214) {
    try {
o213 += "this.lastOutput[" + o214 + "] = output" + o214 + ";"
}catch(e){}
  }
}catch(e){}
  try {
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
}catch(e){}
  try {
this.o209 = Function("buffer", o213);
}catch(e){}
}
}catch(e){}
try {
o199.prototype.o206 = function (buffer) {
  try {
if (this.o203) {
    //Set the buffer passed as our own, as we don't need to resample it:
    try {
this.o121 = buffer;
}catch(e){}
    try {
return buffer.length;
}catch(e){}
  }
  else {
    //Just return the buffer passsed:
    try {
return buffer;
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o199.prototype.o215 = function (o216) {
  try {
if (this.o203) {
    //If we're going to access the properties directly from this object:
    try {
return o216;
}catch(e){}
  }
  else {
    //Typed array and normal array buffer section referencing:
    try {
try {
      try {
return this.o121.subarray(0, o216);
}catch(e){}
    }
    catch (o68) {
      try {
try {
        //Regular array pass:
        try {
this.o121.length = o216;
}catch(e){}
        try {
return this.o121;
}catch(e){}
      }
      catch (o68) {
        //Nightly Firefox 4 used to have the subarray function named as slice:
        try {
return this.o121.slice(0, o216);
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o199.prototype.o212 = function () {
  //Initialize the internal buffer:
  try {
try {
    try {
this.o121 = new Float32Array(this.o202);
}catch(e){}
    try {
this.o217 = new Float32Array(this.o127);
}catch(e){}
  }
  catch (o68) {
    try {
this.o121 = [];
}catch(e){}
    try {
this.o217 = [];
}catch(e){}
  }
}catch(e){}
}
}catch(e){}

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
  try {
this.o223 = (o127 == 2) ? 2 : 1;
}catch(e){}
  try {
o171 = (this.o223 == 1);
}catch(e){}
  try {
o170 = (o125 > 0 && o125 <= 0xFFFFFF) ? o125 : 44100;
}catch(e){}
  try {
o167 = (o219 >= (o224 << 1) && o219 < o220) ? (o219 & ((o171) ? 0xFFFFFFFF : 0xFFFFFFFE)) : (o224 << 1);
}catch(e){}
  try {
o168 = (Math.floor(o220) > o167 + this.o223) ? (o220 & ((o171) ? 0xFFFFFFFF : 0xFFFFFFFE)) : (o219 << 1);
}catch(e){}
  try {
this.o221 = (typeof o221 == "function") ? o221 : function () {};
}catch(e){}
  try {
o172 = (o222 >= 0 && o222 <= 1) ? o222 : 1;
}catch(e){}
  try {
this.o225 = -1;
}catch(e){}
  try {
this.o226 = [];
}catch(e){}
  try {
this.o227 = null;
}catch(e){}
  try {
this.o228 = null;
}catch(e){}
  try {
this.o229 = false;
}catch(e){}
  try {
this.o230 = false;
}catch(e){}
  try {
this.o231();
}catch(e){}
}
try {
o218.prototype.o232 = function (buffer) {
  //mozAudio:
  try {
this.o233(buffer);
}catch(e){}
  try {
this.o234();
}catch(e){}
}
}catch(e){}
try {
o218.prototype.o233 = function (buffer) {
  //mozAudio:
  try {
this.o235(buffer);
}catch(e){}
}
}catch(e){}
try {
o218.prototype.o236 = function (buffer) {
  //Callback-centered audio APIs:
  try {
this.o237(buffer);
}catch(e){}
  try {
this.o238();
}catch(e){}
}
}catch(e){}
try {
o218.prototype.o237 = function (buffer) {
  //Callback-centered audio APIs:
  var length = buffer.length;
  try {
for (var o239 = 0; o239 < length && o174 < o168;) {
    try {
o165[o174++] = buffer[o239++];
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
/*Pass your samples into here!
Pack your samples as a one-dimenional array
With the channel samplea packed uniformly.
examples:
    mono - [left, left, left, left]
    stereo - [left, right, left, right, left, right, left, right]
*/
try {
o218.prototype.o240 = function (buffer) {
  try {
if (this.o225 == 0) {
    try {
this.o232(buffer);
}catch(e){}
  }
  else try {
if (this.o225 == 1) {
    try {
this.o236(buffer);
}catch(e){}
  }
  else try {
if (this.o225 == 2) {
    try {
if (this.o241() || o164) {
      try {
this.o236(buffer);
}catch(e){}
    }
    else try {
if (this.o230) {
      try {
this.o232(buffer);
}catch(e){}
    }
}catch(e){}
}catch(e){}
  }
}catch(e){}
}catch(e){}
}catch(e){}
}
}catch(e){}
/*Pass your samples into here if you don't want automatic callback calling:
Pack your samples as a one-dimenional array
With the channel samplea packed uniformly.
examples:
    mono - [left, left, left, left]
    stereo - [left, right, left, right, left, right, left, right]
Useful in preventing infinite recursion issues with calling writeAudio inside your callback.
*/
try {
o218.prototype.o242 = function (buffer) {
  try {
if (this.o225 == 0) {
    try {
this.o233(buffer);
}catch(e){}
  }
  else try {
if (this.o225 == 1) {
    try {
this.o237(buffer);
}catch(e){}
  }
  else try {
if (this.o225 == 2) {
    try {
if (this.o241() || o164) {
      try {
this.o237(buffer);
}catch(e){}
    }
    else try {
if (this.o230) {
      try {
this.o233(buffer);
}catch(e){}
    }
}catch(e){}
}catch(e){}
  }
}catch(e){}
}catch(e){}
}catch(e){}
}
}catch(e){}
//Developer can use this to see how many samples to write (example: minimum buffer allotment minus remaining samples left returned from this function to make sure maximum buffering is done...)
//If -1 is returned, then that means metric could not be done.
try {
o218.prototype.o243 = function () {
  try {
if (this.o225 == 0) {
    //mozAudio:
    try {
return this.o244 - this.o227.o245();
}catch(e){}
  }
  else try {
if (this.o225 == 1) {
    //WebKit Audio:
    try {
return (((o246() * o173.o207) >> (this.o223 - 1)) << (this.o223 - 1)) + o174;
}catch(e){}
  }
  else try {
if (this.o225 == 2) {
    try {
if (this.o241() || o164) {
      //Webkit Audio / Flash Plugin Audio:
      try {
return (((o246() * o173.o207) >> (this.o223 - 1)) << (this.o223 - 1)) + o174;
}catch(e){}
    }
    else try {
if (this.o230) {
      //mozAudio:
      try {
return this.o244 - this.o227.o245();
}catch(e){}
    }
}catch(e){}
}catch(e){}
  }
}catch(e){}
}catch(e){}
}catch(e){}
  //Default return:
  try {
return 0;
}catch(e){}
}
}catch(e){}
try {
o218.prototype.o234 = function () {
  //mozAudio:
  var o247 = o167 - this.o243();
  try {
if (o247 > 0) {
    try {
this.o235(this.o221(o247));
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o218.prototype.o238 = function () {
  //WebKit /Flash Audio:
  var o247 = o167 - this.o243();
  try {
if (o247 > 0) {
    try {
this.o237(this.o221(o247));
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
//If you just want your callback called for any possible refill (Execution of callback is still conditional):
try {
o218.prototype.o248 = function () {
  try {
if (this.o225 == 0) {
    try {
this.o234();
}catch(e){}
  }
  else try {
if (this.o225 == 1) {
    try {
this.o238();
}catch(e){}
  }
  else try {
if (this.o225 == 2) {
    try {
if (this.o241() || o164) {
      try {
this.o238();
}catch(e){}
    }
    else try {
if (this.o230) {
      try {
this.o234();
}catch(e){}
    }
}catch(e){}
}catch(e){}
  }
}catch(e){}
}catch(e){}
}catch(e){}
}
}catch(e){}
//DO NOT CALL THIS, the lib calls this internally!
try {
o218.prototype.o231 = function () {
  try {
try {
    try {
throw (new Error("Select initializeWebAudio case"));
}catch(e){}  // Line added for benchmarking.
    try {
this.o249();
}catch(e){}
    try {
if (o250.o251 == "Linux i686") {
      //Block out mozaudio usage for Linux Firefox due to moz bugs:
      try {
throw(new Error(""));
}catch(e){}
    }
}catch(e){}
    try {
this.o252();
}catch(e){}
  }
  catch (o68) {
    try {
try {
      try {
this.o253();
}catch(e){}
    }
    catch (o68) {
      try {
try {
        try {
this.o254();
}catch(e){}
      }
      catch (o68) {
        try {
throw(new Error("Browser does not support real time audio output."));
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o218.prototype.o249 = function () {
  //mozAudio - Synchronous Audio API
  try {
this.o227 = new o255();
}catch(e){}
  try {
this.o227.o256(this.o223, o170);
}catch(e){}
  try {
this.o244 = 0;
}catch(e){}
  var o257 = (this.o223 == 2) ? [0, 0] : [0];
  var o258 = 0;
  try {
if (o250.o251 != "MacIntel" && o250.o251 != "MacPPC") {  //Mac OS X doesn't experience this moz-bug!
    try {
while (this.o227.o245() == 0) {
      //Mozilla Audio Bugginess Workaround (Firefox freaks out if we don't give it a prebuffer under certain OSes):
      try {
o258 += this.o227.o259(o257);
}catch(e){}
    }
}catch(e){}
    var o260 = o258 / this.o223;
    //Double the prebuffering for windows:
    try {
for (var index = 0; index < o260; index++) {
      try {
this.o244 += this.o227.o259(o257);
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
this.o244 += o258;
}catch(e){}
  try {
o167 += this.o244;
}catch(e){}
  try {
this.o230 = true;
}catch(e){}
}
}catch(e){}
try {
o218.prototype.o252 = function () {
  //Fill in our own buffering up to the minimum specified:
  try {
this.o235(getFloat32(o167));
}catch(e){}
  try {
this.o225 = 0;
}catch(e){}
}
}catch(e){}
try {
o218.prototype.o253 = function () {
  try {
if (o164) {
    try {
o261(o169, o224);
}catch(e){}
    try {
this.o225 = 1;
}catch(e){}
  }
  else {
    try {
throw(new Error(""));
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o218.prototype.o254 = function () {
  var o262 = o263.o264("XAudioJS");
  try {
if (o262 == null) {
    var o265 = this;
    var o266 = o263.o267("div");
    try {
o266.o268("style", "position: fixed; bottom: 0px; right: 0px; margin: 0px; padding: 0px; border: none; width: 8px; height: 8px; overflow: hidden; z-index: -1000; ");
}catch(e){}
    var o269 = o263.o267("div");
    try {
o269.o268("style", "position: static; border: none; width: 0px; height: 0px; visibility: hidden; margin: 8px; padding: 0px;");
}catch(e){}
    try {
o269.o268("id", "XAudioJS");
}catch(e){}
    try {
o266.o270(o269);
}catch(e){}
    try {
o263.o271("body")[0].o270(o266);
}catch(e){}
    try {
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
        try {
if (o120.o274) {
          try {
o265.o228 = o120.o275;
}catch(e){}
        }
        else {
          try {
o265.o225 = 1;
}catch(e){}
        }
}catch(e){}
      }
    );
}catch(e){}
  }
  else {
    try {
this.o228 = o262;
}catch(e){}
  }
}catch(e){}
  try {
this.o225 = 2;
}catch(e){}
}
}catch(e){}
try {
o218.prototype.o276 = function (o277) {
  try {
if (o277 >= 0 && o277 <= 1) {
    try {
o172 = o277;
}catch(e){}
    try {
if (this.o241()) {
      try {
this.o228.o276(o172);
}catch(e){}
    }
}catch(e){}
    try {
if (this.o230) {
      try {
this.o227.o222 = o172;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
//Moz Audio Buffer Writing Handler:
try {
o218.prototype.o235 = function (buffer) {
  var length = this.o226.length;
  try {
if (length > 0) {
    var o278 = this.o227.o259(this.o226);
    try {
this.o244 += o278;
}catch(e){}
    try {
this.o226.splice(0, o278);
}catch(e){}
  }
}catch(e){}
  try {
length = Math.o279(buffer.length, o168 - this.o244 + this.o227.o245());
}catch(e){}
  var o278 = this.o227.o259(buffer);
  try {
this.o244 += o278;
}catch(e){}
  try {
for (var index = 0; length > o278; --length) {
    //Moz Audio wants us saving the tail:
    try {
this.o226.push(buffer[index++]);
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
//Checks to see if the NPAPI Adobe Flash bridge is ready yet:
try {
o218.prototype.o241 = function () {
  try {
if (!this.o229 && this.o228 && this.o228.o204) {
    try {
this.o229 = true;
}catch(e){}
    try {
this.o228.o204(this.o223, o172);
}catch(e){}
    try {
o261(44100, o224);
}catch(e){}
  }
}catch(e){}
  try {
return this.o229;
}catch(e){}
}
}catch(e){}
/////////END LIB
function getFloat32(o280) {
  try {
try {
    try {
return new Float32Array(o280);
}catch(e){}
  }
  catch (o68) {
    try {
return new Array(o280);
}catch(e){}
  }
}catch(e){}
}
function o281(o280) {
  try {
try {
    var o282 = new Float32Array(o280);
  }
  catch (o68) {
    var o282 = new Array(o280);
    var o283 = 0;
    try {
do {
      try {
o282[o283] = 0;
}catch(e){}
    } while (++o283 < o280);
}catch(e){}
  }
}catch(e){}
  try {
return o282;
}catch(e){}
}
//Flash NPAPI Event Handler:
var o224 = 2048;      //Has to be between 2048 and 4096 (If over, then samples are ignored, if under then silence is added).
var o284 = null;
function o285() {    //The callback that flash calls...
  try {
o286();
}catch(e){}
  try {
return o284();
}catch(e){}
}
function o287() {  //Convert the arrays to one long string for speed.
  var o288 = "";
  var o289 = "";
  try {
for (var index = 0; index < o224 && o175 != o176; ++index) {
    //Sanitize the buffer:
    try {
o288 += String.fromCharCode(((Math.o279(Math.o290(o166[o175++] + 1, 0), 2) * 0x3FFF) | 0) + 0x3000);
}catch(e){}
    try {
o289 += String.fromCharCode(((Math.o279(Math.o290(o166[o175++] + 1, 0), 2) * 0x3FFF) | 0) + 0x3000);
}catch(e){}
    try {
if (o175 == o177) {
      try {
o175 = 0;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
return o288 + o289;
}catch(e){}
}
function o291() {  //Convert the array to one long string for speed.
  var o292 = "";
  try {
for (var index = 0; index < o224 && o175 != o176; ++index) {
    //Sanitize the buffer:
    try {
o292 += String.fromCharCode(((Math.o279(Math.o290(o166[o175++] + 1, 0), 2) * 0x3FFF) | 0) + 0x3000);
}catch(e){}
    try {
if (o175 == o177) {
      try {
o175 = 0;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
return o292;
}catch(e){}
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
  try {
o286();
}catch(e){}
  try {
if (!o171) {
    //STEREO:
    try {
while (index < o224 && o175 != o176) {
      try {
o294[index] = o166[o175++] * o172;
}catch(e){}
      try {
o295[index++] = o166[o175++] * o172;
}catch(e){}
      try {
if (o175 == o177) {
        try {
o175 = 0;
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
  else {
    //MONO:
    try {
while (index < o224 && o175 != o176) {
      try {
o295[index] = o294[index] = o166[o175++] * o172;
}catch(e){}
      try {
++index;
}catch(e){}
      try {
if (o175 == o177) {
        try {
o175 = 0;
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  //Pad with silence if we're underrunning:
  try {
while (index < o224) {
    try {
o295[index] = o294[index] = 0;
}catch(e){}
    try {
++index;
}catch(e){}
  }
}catch(e){}
}
function o286() {
  try {
if (o174 > 0) {
    //Resample a chunk of audio:
    var o296 = o173.o205(o297());
    var o298 = o173.o121;
    try {
for (var o299 = 0; o299 < o296; ++o299) {
      try {
o166[o176++] = o298[o299];
}catch(e){}
      try {
if (o176 == o177) {
        try {
o176 = 0;
}catch(e){}
      }
}catch(e){}
      try {
if (o175 == o176) {
        try {
++o175;
}catch(e){}
        try {
if (o175 == o177) {
          try {
o175 = 0;
}catch(e){}
        }
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
    try {
o174 = 0;
}catch(e){}
  }
}catch(e){}
}
function o246() {
  try {
return ((o175 <= o176) ? 0 : o177) + o176 - o175;
}catch(e){}
}
function o297() {
  //Typed array and normal array buffer section referencing:
  try {
try {
    try {
return o165.subarray(0, o174);
}catch(e){}
  }
  catch (o68) {
    try {
try {
      //Regular array pass:
      try {
o165.length = o174;
}catch(e){}
      try {
return o165;
}catch(e){}
    }
    catch (o68) {
      //Nightly Firefox 4 used to have the subarray function named as slice:
      try {
return o165.slice(0, o174);
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
//Initialize WebKit Audio /Flash Audio Buffer:
function o261(o300, o301) {
  try {
o165 = getFloat32(o168);
}catch(e){}
  try {
o174 = o168;
}catch(e){}
  try {
o175 = 0;
}catch(e){}
  try {
o176 = 0;
}catch(e){}
  try {
o177 = Math.o290(o168 * Math.ceil(o170 / o300), o224) << 1;
}catch(e){}
  try {
if (o171) {
    //MONO Handling:
    try {
o166 = o281(o177);
}catch(e){}
    try {
o173 = new o199(o170, o300, 1, o177, true);
}catch(e){}
    try {
o284 = o291;
}catch(e){}
  }
  else {
    //STEREO Handling:
    try {
o177  <<= 1;
}catch(e){}
    try {
o166 = o281(o177);
}catch(e){}
    try {
o173 = new o199(o170, o300, 2, o177, true);
}catch(e){}
    try {
o284 = o287;
}catch(e){}
  }
}catch(e){}
}
//Initialize WebKit Audio:
try {
(function () {
  try {
if (!o164) {
    try {
try {
      // The following line was modified for benchmarking:
      try {
o161 = new o122();
}catch(e){}              //Create a system audio context.
    }
    catch (o68) {
      try {
try {
        try {
o161 = new o302();
}catch(e){}                //Create a system audio context.
      }
      catch (o68) {
        try {
return;
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
    try {
try {
      try {
o163 = o161.o123();
}catch(e){}            //We need to create a false input to get the chain started.
      try {
o163.o303 = false;
}catch(e){}  //Keep this alive forever (Event handler will know when to ouput.)
      try {
o170 = o169 = o161.o125;
}catch(e){}
      try {
o163.buffer = o161.o98(1, 1, o169);
}catch(e){}  //Create a zero'd input buffer for the input to be valid.
      try {
o162 = o161.o132(o224, 1, 2);
}catch(e){}      //Create 2 outputs and ignore the input buffer (Just copy buffer 1 over if mono)
      try {
o162.o118 = o293;
}catch(e){}                //Connect the audio processing event to a handling function so we can manipulate output
      try {
o163.o119(o162);
}catch(e){}                        //Send and chain the input to the audio manipulation.
      try {
o162.o119(o161.o126);
}catch(e){}              //Send and chain the output of the audio manipulation to the system audio output.
      try {
o163.o124(0);
}catch(e){}                            //Start the loop!
    }
    catch (o68) {
      try {
return;
}catch(e){}
    }
}catch(e){}
    try {
o164 = true;
}catch(e){}
  }
}catch(e){}
})();
}catch(e){}

// End of js/other/XAudioServer.js file.

// Start of js/other/resize.js file.

//JavaScript Image Resizer (c) 2012 - Grant Galitz
function o304(o305, o306, o307, o308, o309, o310) {
  try {
this.o305 = Math.abs(parseInt(o305) || 0);
}catch(e){}
  try {
this.o306 = Math.abs(parseInt(o306) || 0);
}catch(e){}
  try {
this.o307 = Math.abs(parseInt(o307) || 0);
}catch(e){}
  try {
this.o308 = Math.abs(parseInt(o308) || 0);
}catch(e){}
  try {
this.o311 = (!!o309) ? 4 : 3;
}catch(e){}
  try {
this.o310 = !!o310;
}catch(e){}
  try {
this.o312 = this.o307 * this.o311;
}catch(e){}
  try {
this.o313 = this.o305 * this.o311;
}catch(e){}
  try {
this.o314 = this.o306 * this.o311;
}catch(e){}
  try {
this.o315 = this.o312 * this.o306;
}catch(e){}
  try {
this.o316 = this.o312 * this.o308;
}catch(e){}
  try {
this.o204();
}catch(e){}
}
try {
o304.prototype.o204 = function () {
  //Perform some checks:
  try {
if (this.o305 > 0 && this.o306 > 0 && this.o307 > 0 && this.o308 > 0) {
    try {
if (this.o305 == this.o307) {
      //Bypass the width resizer pass:
      try {
this.o317 = this.o318;
}catch(e){}
    }
    else {
      //Setup the width resizer pass:
      try {
this.o319 = this.o305 / this.o307;
}catch(e){}
      try {
if (this.o319 < 1 && this.o310) {
        try {
this.o320(true);
}catch(e){}
        try {
this.o317 = (this.o311 == 4) ? this.o321 : this.o322;
}catch(e){}
      }
      else {
        try {
this.o320(false);
}catch(e){}
        try {
this.o317 = (this.o311 == 4) ? this.o323 : this.o324;
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
    try {
if (this.o306 == this.o308) {
      //Bypass the height resizer pass:
      try {
this.o325 = this.o318;
}catch(e){}
    }
    else {
      //Setup the height resizer pass:
      try {
this.o326 = this.o306 / this.o308;
}catch(e){}
      try {
if (this.o326 < 1 && this.o310) {
        try {
this.o327(true);
}catch(e){}
        try {
this.o325 = this.o328;
}catch(e){}
      }
      else {
        try {
this.o327(false);
}catch(e){}
        try {
this.o325 = (this.o311 == 4) ? this.o329 : this.o330;
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
  else {
    try {
throw(new Error("Invalid settings specified for the resizer."));
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
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
  try {
do {
    try {
for (o335 = 0; o335 < this.o314;) {
      try {
o340[o335++] = 0;
}catch(e){}
      try {
o340[o335++] = 0;
}catch(e){}
      try {
o340[o335++] = 0;
}catch(e){}
    }
}catch(e){}
    try {
o331 = o207;
}catch(e){}
    try {
do {
      try {
o332 = 1 + o333 - o334;
}catch(e){}
      try {
if (o331 >= o332) {
        try {
for (o335 = 0, o336 = o333; o335 < this.o314; o336 += o338) {
          try {
o340[o335++] += buffer[o336++] * o332;
}catch(e){}
          try {
o340[o335++] += buffer[o336++] * o332;
}catch(e){}
          try {
o340[o335++] += buffer[o336] * o332;
}catch(e){}
        }
}catch(e){}
        try {
o334 = o333 = o333 + 3;
}catch(e){}
        try {
o331 -= o332;
}catch(e){}
      }
      else {
        try {
for (o335 = 0, o336 = o333; o335 < this.o314; o336 += o338) {
          try {
o340[o335++] += buffer[o336++] * o331;
}catch(e){}
          try {
o340[o335++] += buffer[o336++] * o331;
}catch(e){}
          try {
o340[o335++] += buffer[o336] * o331;
}catch(e){}
        }
}catch(e){}
        try {
o334 += o331;
}catch(e){}
        try {
break;
}catch(e){}
      }
}catch(e){}
    } while (o331 > 0 && o333 < this.o313);
}catch(e){}
    try {
for (o335 = 0, o336 = o337; o335 < this.o314; o336 += o339) {
      try {
o121[o336++] = o340[o335++] / o207;
}catch(e){}
      try {
o121[o336++] = o340[o335++] / o207;
}catch(e){}
      try {
o121[o336] = o340[o335++] / o207;
}catch(e){}
    }
}catch(e){}
    try {
o337 += 3;
}catch(e){}
  } while (o337 < this.o312);
}catch(e){}
  try {
return o121;
}catch(e){}
}
}catch(e){}
try {
o304.prototype.o322 = function (buffer) {
  var o207 = (this.o305 - 1) / this.o307;
  var o331 = 0;
  var o343 = 0;
  var o336 = 0;
  var o121 = this.o342;
  try {
for (var o344 = 0; o344 < this.o312; o344 += 3, o331 += o207) {
    //Calculate weightings:
    try {
o345 = o331 % 1;
}catch(e){}
    try {
o346 = 1 - o345;
}catch(e){}
    //Interpolate:
    try {
for (o343 = o344, o336 = Math.floor(o331) * 3; o343 < this.o315; o336 += this.o313, o343 += this.o312) {
      try {
o121[o343] = (buffer[o336] * o346) + (buffer[o336 + 3] * o345);
}catch(e){}
      try {
o121[o343 + 1] = (buffer[o336 + 1] * o346) + (buffer[o336 + 4] * o345);
}catch(e){}
      try {
o121[o343 + 2] = (buffer[o336 + 2] * o346) + (buffer[o336 + 5] * o345);
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
return o121;
}catch(e){}
}
}catch(e){}
try {
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
  try {
do {
    try {
for (o335 = 0; o335 < this.o314;) {
      try {
o340[o335++] = 0;
}catch(e){}
      try {
o340[o335++] = 0;
}catch(e){}
      try {
o340[o335++] = 0;
}catch(e){}
      try {
o340[o335++] = 0;
}catch(e){}
    }
}catch(e){}
    try {
o331 = o207;
}catch(e){}
    try {
do {
      try {
o332 = 1 + o333 - o334;
}catch(e){}
      try {
if (o331 >= o332) {
        try {
for (o335 = 0, o336 = o333; o335 < this.o314; o336 += o338) {
          try {
o340[o335++] += buffer[o336++] * o332;
}catch(e){}
          try {
o340[o335++] += buffer[o336++] * o332;
}catch(e){}
          try {
o340[o335++] += buffer[o336++] * o332;
}catch(e){}
          try {
o340[o335++] += buffer[o336] * o332;
}catch(e){}
        }
}catch(e){}
        try {
o334 = o333 = o333 + 4;
}catch(e){}
        try {
o331 -= o332;
}catch(e){}
      }
      else {
        try {
for (o335 = 0, o336 = o333; o335 < this.o314; o336 += o338) {
          try {
o340[o335++] += buffer[o336++] * o331;
}catch(e){}
          try {
o340[o335++] += buffer[o336++] * o331;
}catch(e){}
          try {
o340[o335++] += buffer[o336++] * o331;
}catch(e){}
          try {
o340[o335++] += buffer[o336] * o331;
}catch(e){}
        }
}catch(e){}
        try {
o334 += o331;
}catch(e){}
        try {
break;
}catch(e){}
      }
}catch(e){}
    } while (o331 > 0 && o333 < this.o313);
}catch(e){}
    try {
for (o335 = 0, o336 = o337; o335 < this.o314; o336 += o339) {
      try {
o121[o336++] = o340[o335++] / o207;
}catch(e){}
      try {
o121[o336++] = o340[o335++] / o207;
}catch(e){}
      try {
o121[o336++] = o340[o335++] / o207;
}catch(e){}
      try {
o121[o336] = o340[o335++] / o207;
}catch(e){}
    }
}catch(e){}
    try {
o337 += 4;
}catch(e){}
  } while (o337 < this.o312);
}catch(e){}
  try {
return o121;
}catch(e){}
}
}catch(e){}
try {
o304.prototype.o321 = function (buffer) {
  var o207 = (this.o305 - 1) / this.o307;
  var o331 = 0;
  var o343 = 0;
  var o336 = 0;
  var o121 = this.o342;
  try {
for (var o344 = 0; o344 < this.o312; o344 += 4, o331 += o207) {
    //Calculate weightings:
    try {
o345 = o331 % 1;
}catch(e){}
    try {
o346 = 1 - o345;
}catch(e){}
    //Interpolate:
    try {
for (o343 = o344, o336 = Math.floor(o331) * 4; o343 < this.o315; o336 += this.o313, o343 += this.o312) {
      try {
o121[o343] = (buffer[o336] * o346) + (buffer[o336 + 4] * o345);
}catch(e){}
      try {
o121[o343 + 1] = (buffer[o336 + 1] * o346) + (buffer[o336 + 5] * o345);
}catch(e){}
      try {
o121[o343 + 2] = (buffer[o336 + 2] * o346) + (buffer[o336 + 6] * o345);
}catch(e){}
      try {
o121[o343 + 3] = (buffer[o336 + 3] * o346) + (buffer[o336 + 7] * o345);
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
return o121;
}catch(e){}
}
}catch(e){}
try {
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
  try {
do {
    try {
for (o336 = 0; o336 < this.o312;) {
      try {
o340[o336++] = 0;
}catch(e){}
      try {
o340[o336++] = 0;
}catch(e){}
      try {
o340[o336++] = 0;
}catch(e){}
    }
}catch(e){}
    try {
o331 = o207;
}catch(e){}
    try {
do {
      try {
o332 = 1 + o333 - o334;
}catch(e){}
      try {
if (o331 >= o332) {
        try {
for (o336 = 0; o336 < this.o312;) {
          try {
o340[o336++] += buffer[o333++] * o332;
}catch(e){}
          try {
o340[o336++] += buffer[o333++] * o332;
}catch(e){}
          try {
o340[o336++] += buffer[o333++] * o332;
}catch(e){}
        }
}catch(e){}
        try {
o334 = o333;
}catch(e){}
        try {
o331 -= o332;
}catch(e){}
      }
      else {
        try {
for (o336 = 0, o332 = o333; o336 < this.o312;) {
          try {
o340[o336++] += buffer[o332++] * o331;
}catch(e){}
          try {
o340[o336++] += buffer[o332++] * o331;
}catch(e){}
          try {
o340[o336++] += buffer[o332++] * o331;
}catch(e){}
        }
}catch(e){}
        try {
o334 += o331;
}catch(e){}
        try {
break;
}catch(e){}
      }
}catch(e){}
    } while (o331 > 0 && o333 < this.o315);
}catch(e){}
    try {
for (o336 = 0; o336 < this.o312;) {
      try {
o121[o337++] = Math.o349(o340[o336++] / o207);
}catch(e){}
      try {
o121[o337++] = Math.o349(o340[o336++] / o207);
}catch(e){}
      try {
o121[o337++] = Math.o349(o340[o336++] / o207);
}catch(e){}
    }
}catch(e){}
  } while (o337 < this.o316);
}catch(e){}
  try {
return o121;
}catch(e){}
}
}catch(e){}
try {
o304.prototype.o328 = function (buffer) {
  var o207 = (this.o306 - 1) / this.o308;
  var o331 = 0;
  var o343 = 0;
  var o336 = 0;
  var o350 = 0;
  var o351 = 0;
  var o121 = this.o348;
  try {
do {
    //Calculate weightings:
    try {
o345 = o331 % 1;
}catch(e){}
    try {
o346 = 1 - o345;
}catch(e){}
    //Interpolate:
    try {
o350 = Math.floor(o331) * this.o312;
}catch(e){}
    try {
o351 = o350 + this.o312;
}catch(e){}
    try {
for (o336 = 0; o336 < this.o312; ++o336) {
      try {
o121[o343++] = (buffer[o350 + o336] * o346) + (buffer[o351 + o336] * o345);
}catch(e){}
    }
}catch(e){}
    try {
o331 += o207;
}catch(e){}
  } while (o343 < this.o316);
}catch(e){}
  try {
return o121;
}catch(e){}
}
}catch(e){}
try {
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
  try {
do {
    try {
for (o336 = 0; o336 < this.o312;) {
      try {
o340[o336++] = 0;
}catch(e){}
      try {
o340[o336++] = 0;
}catch(e){}
      try {
o340[o336++] = 0;
}catch(e){}
      try {
o340[o336++] = 0;
}catch(e){}
    }
}catch(e){}
    try {
o331 = o207;
}catch(e){}
    try {
do {
      try {
o332 = 1 + o333 - o334;
}catch(e){}
      try {
if (o331 >= o332) {
        try {
for (o336 = 0; o336 < this.o312;) {
          try {
o340[o336++] += buffer[o333++] * o332;
}catch(e){}
          try {
o340[o336++] += buffer[o333++] * o332;
}catch(e){}
          try {
o340[o336++] += buffer[o333++] * o332;
}catch(e){}
          try {
o340[o336++] += buffer[o333++] * o332;
}catch(e){}
        }
}catch(e){}
        try {
o334 = o333;
}catch(e){}
        try {
o331 -= o332;
}catch(e){}
      }
      else {
        try {
for (o336 = 0, o332 = o333; o336 < this.o312;) {
          try {
o340[o336++] += buffer[o332++] * o331;
}catch(e){}
          try {
o340[o336++] += buffer[o332++] * o331;
}catch(e){}
          try {
o340[o336++] += buffer[o332++] * o331;
}catch(e){}
          try {
o340[o336++] += buffer[o332++] * o331;
}catch(e){}
        }
}catch(e){}
        try {
o334 += o331;
}catch(e){}
        try {
break;
}catch(e){}
      }
}catch(e){}
    } while (o331 > 0 && o333 < this.o315);
}catch(e){}
    try {
for (o336 = 0; o336 < this.o312;) {
      try {
o121[o337++] = Math.o349(o340[o336++] / o207);
}catch(e){}
      try {
o121[o337++] = Math.o349(o340[o336++] / o207);
}catch(e){}
      try {
o121[o337++] = Math.o349(o340[o336++] / o207);
}catch(e){}
      try {
o121[o337++] = Math.o349(o340[o336++] / o207);
}catch(e){}
    }
}catch(e){}
  } while (o337 < this.o316);
}catch(e){}
  try {
return o121;
}catch(e){}
}
}catch(e){}
try {
o304.prototype.o352 = function (buffer) {
  var o207 = (this.o306 - 1) / this.o308;
  var o331 = 0;
  var o343 = 0;
  var o336 = 0;
  var o121 = this.o348;
  try {
while (o336 < this.o316) {
    //Calculate weightings:
    try {
o345 = o331 % 1;
}catch(e){}
    try {
o346 = 1 - o345;
}catch(e){}
    //Interpolate:
    try {
for (o336 = Math.floor(o331) * 4; o336 < this.o312; o336 += 4) {
      try {
o121[o343++] = (buffer[o336] * o346) + (buffer[o336 + 4] * o345);
}catch(e){}
      try {
o121[o343++] = (buffer[o336 + 1] * o346) + (buffer[o336 + 5] * o345);
}catch(e){}
      try {
o121[o343++] = (buffer[o336 + 2] * o346) + (buffer[o336 + 6] * o345);
}catch(e){}
      try {
o121[o343++] = (buffer[o336 + 3] * o346) + (buffer[o336 + 7] * o345);
}catch(e){}
    }
}catch(e){}
    try {
o331 += o207;
}catch(e){}
  }
}catch(e){}
  try {
return o121;
}catch(e){}
}
}catch(e){}
try {
o304.prototype.o353 = function (buffer) {
  try {
return this.o325(this.o317(buffer));
}catch(e){}
}
}catch(e){}
try {
o304.prototype.o318 = function (buffer) {
  //Just return the buffer passsed:
  try {
return buffer;
}catch(e){}
}
}catch(e){}
try {
o304.prototype.o320 = function (o354) {
  //Initialize the internal width pass buffers:
  try {
this.o342 = this.o355(this.o315);
}catch(e){}
  try {
if (!o354) {
    try {
this.o341 = this.o355(this.o314);
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o304.prototype.o327 = function (o354) {
  //Initialize the internal height pass buffers:
  try {
this.o348 = this.o356(this.o316);
}catch(e){}
  try {
if (!o354) {
    try {
this.o347 = this.o355(this.o312);
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o304.prototype.o355 = function (o357) {
  //Generate a float32 typed array buffer:
  try {
try {
    try {
return new Float32Array(o357);
}catch(e){}
  }
  catch (o68) {
    try {
return [];
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o304.prototype.o356 = function (o357) {
  //Generate a uint8 typed array buffer:
  try {
try {
    try {
return this.o358(new Uint8Array(o357));
}catch(e){}
  }
  catch (o68) {
    try {
return [];
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o304.prototype.o358 = function (o359) {
  try {
o359[0] = -1;
}catch(e){}
  try {
o359[0] >>= 0;
}catch(e){}
  try {
if (o359[0] != 0xFF) {
    try {
return [];
}catch(e){}
  }
  else {
    try {
return o359;
}catch(e){}
  }
}catch(e){}
}
}catch(e){}

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
  try {
this.o361 = o361;
}catch(e){}            //Canvas DOM object for drawing out the graphics to.
  try {
this.o363 = null;
}catch(e){}          // LCD Context
  try {
this.o362 = o362;
}catch(e){}          //The game's ROM.
  //CPU Registers and Flags:
  try {
this.o143 = 0x01;
}catch(e){}             //Register A (Accumulator)
  try {
this.o364 = true;
}catch(e){}               //Register F  - Result was zero
  try {
this.o365 = false;
}catch(e){}            //Register F  - Subtraction was executed
  try {
this.o366 = true;
}catch(e){}            //Register F  - Half carry or half borrow
  try {
this.o367 = true;
}catch(e){}              //Register F  - Carry or borrow
  try {
this.o144 = 0x00;
}catch(e){}            //Register B
  try {
this.o145 = 0x13;
}catch(e){}            //Register C
  try {
this.o368 = 0x00;
}catch(e){}            //Register D
  try {
this.o146 = 0xD8;
}catch(e){}            //Register E
  try {
this.o148 = 0x014D;
}catch(e){}          //Registers H and L combined
  try {
this.o150 = 0xFFFE;
}catch(e){}          //Stack Pointer
  try {
this.o149 = 0x0100;
}catch(e){}        //Program Counter
  //Some CPU Emulation State Variables:
  try {
this.o369 = 0;
}catch(e){}          //Relative CPU clocking to speed set, rounded appropriately.
  try {
this.o370 = 0;
}catch(e){}        //Relative CPU clocking to speed set base.
  try {
this.o371 = 0;
}catch(e){}        //Relative CPU clocking to speed set, the directly used value.
  try {
this.o372 = 0;
}catch(e){}      //Clocking per iteration rounding catch.
  try {
this.o373 = 0;
}catch(e){}    //CPU clocks per iteration at 1x speed.
  try {
this.o374 = 0;
}catch(e){}          //HALT clocking overrun carry over.
  try {
this.o375 = true;
}catch(e){}          //Whether we're in the GBC boot ROM.
  try {
this.o376 = false;
}catch(e){}          //Updated upon ROM loading...
  try {
this.o377 = false;
}catch(e){}        //Did we boot to the GBC boot ROM?
  try {
this.o378 = false;
}catch(e){}              //Has the CPU been suspended until the next interrupt?
  try {
this.o379 = false;
}catch(e){}        //Did we trip the DMG Halt bug?
  try {
this.o380 = 3;
}catch(e){}            //Has the emulation been paused or a frame has ended?
  try {
this.o381 = true;
}catch(e){}              //Are interrupts enabled?
  try {
this.o382 = 0;
}catch(e){}          //CPU IRQ assertion.
  try {
this.o383 = 0;
}catch(e){}        //IF Register
  try {
this.o384 = 0;
}catch(e){}          //IE Register
  try {
this.o385 = false;
}catch(e){}          //HDMA Transfer Flag - GBC only
  try {
this.o386 = 0;
}catch(e){}              //The number of clock cycles emulated.
  try {
this.o387 = 0;
}catch(e){}        //GBC double speed clocking shifter.
  try {
this.o388 = 0xFF;
}catch(e){}              //Joypad State (two four-bit states actually)
  try {
this.o389 = false;
}catch(e){}          //CPU STOP status.
  //Main RAM, MBC RAM, GBC Main RAM, VRAM, etc.
  try {
this.o390 = [];
}catch(e){}            //Array of functions mapped to read back memory
  try {
this.o391 = [];
}catch(e){}            //Array of functions mapped to write to memory
  try {
this.o392 = [];
}catch(e){}          //Array of functions mapped to read back 0xFFXX memory
  try {
this.o393 = [];
}catch(e){}          //Array of functions mapped to write to 0xFFXX memory
  try {
this.o153 = [];
}catch(e){}                //The full ROM file dumped to an array.
  try {
this.o155 = [];
}catch(e){}              //Main Core Memory
  try {
this.o157 = [];
}catch(e){}              //Switchable RAM (Used by games for more RAM) for the main memory range 0xA000 - 0xC000.
  try {
this.o394 = [];
}catch(e){}                //Extra VRAM bank for GBC.
  try {
this.o395 = [];
}catch(e){}            //GBC main RAM Banks
  try {
this.o396 = false;
}catch(e){}            //MBC1 Type (4/32, 16/8)
  try {
this.o397 = false;
}catch(e){}      //MBC RAM Access Control.
  try {
this.o398 = 0;
}catch(e){}          //MBC Currently Indexed RAM Bank
  try {
this.o399 = -0xA000;
}catch(e){}    //MBC Position Adder;
  try {
this.o400 = false;
}catch(e){}              //GameBoy Color detection.
  try {
this.o401 = 1;
}catch(e){}            //Currently Switched GameBoy Color ram bank
  try {
this.o402 = -0xD000;
}catch(e){}      //GBC RAM offset from address start.
  try {
this.o403 = -0xF000;
}catch(e){}    //GBC RAM (ECHO mirroring) offset from address start.
  try {
this.o404 = [0, 1, 2, 4, 16];
}catch(e){}      //Used to map the RAM banks to maximum size the MBC used can do.
  try {
this.o405 = 0;
}catch(e){}            //Offset of the ROM bank switching.
  try {
this.o406 = 0;
}catch(e){}          //The parsed current ROM bank selection.
  try {
this.o407 = 0;
}catch(e){}            //Cartridge Type
  try {
this.name = "";
}catch(e){}                //Name of the game
  try {
this.o408 = "";
}catch(e){}              //Game code (Suffix for older games)
  try {
this.o409 = false;
}catch(e){}          //A boolean to see if this was loaded in as a save state.
  try {
this.o410 = "";
}catch(e){}        //When loaded in as a save state, this will not be empty.
  try {
this.o411 = 0;
}catch(e){}            //Tracker for STAT triggering.
  try {
this.o412 = 0;
}catch(e){}              //The scan line mode (for lines 1-144 it's 2-3-0, for 145-154 it's 1)
  try {
this.o413 = 252;
}catch(e){}            //Mode 3 extra clocking counter (Depends on how many sprites are on the current line.).
  try {
this.o414 = false;
}catch(e){}      //Should we trigger an interrupt if LY==LYC?
  try {
this.o415 = false;
}catch(e){}        //Should we trigger an interrupt if in mode 2?
  try {
this.o416 = false;
}catch(e){}        //Should we trigger an interrupt if in mode 1?
  try {
this.o417 = false;
}catch(e){}        //Should we trigger an interrupt if in mode 0?
  try {
this.o418 = false;
}catch(e){}            //Is the emulated LCD controller on?
  try {
this.o419 = [];
}catch(e){}            //Array of functions to handle each scan line we do (onscreen + offscreen)
  try {
this.o420 = [function (o421) { 
        try {
"use strict";
}catch(e){}
    //Array of line 0 function to handle the LCD controller when it's off (Do nothing!).
  }];
}catch(e){}
  try {
this.o422 = null;
}catch(e){}            //Pointer to either LINECONTROL or DISPLAYOFFCONTROL.
  try {
this.o423();
}catch(e){}        //Compile the LCD controller functions.
  //RTC (Real Time Clock for MBC3):
  try {
this.o424 = false;
}catch(e){}
  try {
this.o425 = 0;
}catch(e){}          //RTC latched seconds.
  try {
this.o426 = 0;
}catch(e){}          //RTC latched minutes.
  try {
this.o427 = 0;
}catch(e){}            //RTC latched hours.
  try {
this.o428 = 0;
}catch(e){}            //RTC latched lower 8-bits of the day counter.
  try {
this.o429 = 0;
}catch(e){}            //RTC latched high-bit of the day counter.
  try {
this.o430 = 0;
}catch(e){}            //RTC seconds counter.
  try {
this.o431 = 0;
}catch(e){}            //RTC minutes counter.
  try {
this.o432 = 0;
}catch(e){}              //RTC hours counter.
  try {
this.o433 = 0;
}catch(e){}              //RTC days counter.
  try {
this.o434 = false;
}catch(e){}        //Did the RTC overflow and wrap the day counter?
  try {
this.o435 = false;
}catch(e){}            //Is the RTC allowed to clock up?
  //Gyro:
  try {
this.o436 = 127;
}catch(e){}
  try {
this.o437 = 127;
}catch(e){}
  try {
this.o438 = 127;
}catch(e){}
  try {
this.o439 = 127;
}catch(e){}
  //Sound variables:
  try {
this.o440 = null;
}catch(e){}            //XAudioJS handle
  try {
this.o441 = 0;
}catch(e){}            //Length of the sound buffers.
  try {
this.o442 = 0;
}catch(e){}              //Length of the sound buffer for one channel.
  try {
this.o443 = [                //Map the duty values given to ones we can work with.
    [false, false, false, false, false, false, false, true],
    [true, false, false, false, false, false, false, true],
    [true, false, false, false, false, true, true, true],
    [false, true, true, true, true, true, true, false]
  ];
}catch(e){}
  try {
this.o444 = [];
}catch(e){}            //The audio buffer we're working on.
  try {
this.o445 = 0;
}catch(e){}          //Buffer maintenance metric.
  try {
this.o446 = null;
}catch(e){}
  try {
this.o447 = null;
}catch(e){}
  try {
this.o448 = null;
}catch(e){}
  try {
this.o449();
}catch(e){}
  try {
this.o450 = false;
}catch(e){}      //As its name implies
  try {
this.o451 = null;
}catch(e){}          //Channel 3 adjusted sample buffer.
  //Vin Shit:
  try {
this.o452 = 8;
}catch(e){}    //Computed post-mixing volume.
  try {
this.o453 = 8;
}catch(e){}    //Computed post-mixing volume.
  //Channel paths enabled:
  try {
this.o454 = false;
}catch(e){}
  try {
this.o455 = false;
}catch(e){}
  try {
this.o456 = false;
}catch(e){}
  try {
this.o457 = false;
}catch(e){}
  try {
this.o458 = false;
}catch(e){}
  try {
this.o459 = false;
}catch(e){}
  try {
this.o460 = false;
}catch(e){}
  try {
this.o461 = false;
}catch(e){}
  //Channel output level caches:
  try {
this.o462 = 0;
}catch(e){}
  try {
this.o463 = 0;
}catch(e){}
  try {
this.o464 = 0;
}catch(e){}
  try {
this.o465 = 0;
}catch(e){}
  try {
this.o466 = 0;
}catch(e){}
  try {
this.o467 = 0;
}catch(e){}
  try {
this.o468 = 0;
}catch(e){}
  try {
this.o469 = 0;
}catch(e){}
  try {
this.o470 = 0;
}catch(e){}
  try {
this.o471 = 0;
}catch(e){}
  try {
this.o472 = 0;
}catch(e){}
  try {
this.o473 = 0;
}catch(e){}
  try {
this.o474 = 0;
}catch(e){}
  try {
this.o475 = 0;
}catch(e){}
  try {
this.o476 = 0;
}catch(e){}
  try {
this.o477 = 0;
}catch(e){}
  try {
this.o478 = 0;
}catch(e){}
  try {
this.o479 = 0;
}catch(e){}
  try {
this.o480 = 0;
}catch(e){}
  try {
this.o481 = 0;
}catch(e){}
  try {
this.o482 = 0;
}catch(e){}
  //Pre-multipliers to cache some calculations:
  try {
this.o483();
}catch(e){}
  try {
this.o484 = 0;
}catch(e){}        //Premultiplier for audio samples per instruction.
  //Audio generation counters:
  try {
this.o485 = 0;
}catch(e){}        //Used to sample the audio system every x CPU instructions.
  try {
this.o486 = 0;
}catch(e){}        //Used to keep alignment on audio generation.
  try {
this.o487 = 0;
}catch(e){}          //Used to keep alignment on the number of samples to output (Realign from counter alias).
  //Timing Variables
  try {
this.o488 = 0;
}catch(e){}        //Times for how many instructions to execute before ending the loop.
  try {
this.o489 = 56;
}catch(e){}          //DIV Ticks Counter (Invisible lower 8-bit)
  try {
this.o490 = 60;
}catch(e){}          //Counter for how many instructions have been executed on a scanline so far.
  try {
this.o491 = 0;
}catch(e){}        //Counter for the TIMA timer.
  try {
this.o492 = false;
}catch(e){}      //Is TIMA enabled?
  try {
this.o493 = 1024;
}catch(e){}        //Timer Max Ticks
  try {
this.o494 = 0;
}catch(e){}        //Serial IRQ Timer
  try {
this.o495 = 0;
}catch(e){}      //Serial Transfer Shift Timer
  try {
this.o496 = 0;
}catch(e){}  //Serial Transfer Shift Timer Refill
  try {
this.o497 = 0;
}catch(e){}      //Are the interrupts on queue to be enabled?
  var o498 = o138();     // The line is changed for benchmarking.
  try {
this.o499 = o498.o139();
}catch(e){}//The last time we iterated the main loop.
  try {
o498 = o138();
}catch(e){}         // The line is changed for benchmarking.
  try {
this.o500 = o498.o139();
}catch(e){}
  try {
this.o501 = 0;
}catch(e){}
  try {
this.o502 = 0;
}catch(e){}      //Actual scan line...
  try {
this.o503 = 0;
}catch(e){}    //Last rendered scan line...
  try {
this.o504 = 0;
}catch(e){}
  try {
this.o505 = 0;
}catch(e){}
  try {
this.o506 = 0;
}catch(e){}      //Post-Halt clocking.
  //ROM Cartridge Components:
  try {
this.o507 = false;
}catch(e){}          //Does the cartridge use MBC1?
  try {
this.o508 = false;
}catch(e){}          //Does the cartridge use MBC2?
  try {
this.o509 = false;
}catch(e){}          //Does the cartridge use MBC3?
  try {
this.o510 = false;
}catch(e){}          //Does the cartridge use MBC5?
  try {
this.o511 = false;
}catch(e){}          //Does the cartridge use MBC7?
  try {
this.o512 = false;
}catch(e){}          //Does the cartridge use save RAM?
  try {
this.o513 = false;
}catch(e){}        //...
  try {
this.o514 = false;
}catch(e){}        //Does the cartridge use the RUMBLE addressing (modified MBC5)?
  try {
this.o515 = false;
}catch(e){}        //Is the cartridge actually a GameBoy Camera?
  try {
this.o516 = false;
}catch(e){}        //Does the cartridge use TAMA5? (Tamagotchi Cartridge)
  try {
this.o517 = false;
}catch(e){}          //Does the cartridge use HuC3 (Hudson Soft / modified MBC3)?
  try {
this.o518 = false;
}catch(e){}          //Does the cartridge use HuC1 (Hudson Soft / modified MBC1)?
  try {
this.o519 = false;
}catch(e){}        //Does the cartridge have an RTC?
  try {
this.o520 = [          // 1 Bank = 16 KBytes = 256 Kbits
    2, 4, 8, 16, 32, 64, 128, 256, 512
  ];
}catch(e){}
  try {
this.o520[0x52] = 72;
}catch(e){}
  try {
this.o520[0x53] = 80;
}catch(e){}
  try {
this.o520[0x54] = 96;
}catch(e){}
  try {
this.o521 = 0;
}catch(e){}          //How many RAM banks were actually allocated?
  ////Graphics Variables
  try {
this.o522 = 0;
}catch(e){}          //Current VRAM bank for GBC.
  try {
this.o523 = 0;
}catch(e){}          //Register SCX (X-Scroll)
  try {
this.o524 = 0;
}catch(e){}          //Register SCY (Y-Scroll)
  try {
this.o525 = false;
}catch(e){}      //Is the windows enabled?
  try {
this.o526 = false;
}catch(e){}        //Are sprites enabled?
  try {
this.o527 = true;
}catch(e){}    //Are we doing 8x8 or 8x16 sprites?
  try {
this.o528 = true;
}catch(e){}          //Is the BG enabled?
  try {
this.o529 = true;
}catch(e){}      //Can we flag the BG for priority over sprites?
  try {
this.o530 = 0;
}catch(e){}    //The current bank of the character map the window uses.
  try {
this.o531 = 0;
}catch(e){}  //The current bank of the character map the BG uses.
  try {
this.o532 = 0x80;
}catch(e){}  //Fast mapping of the tile numbering/
  try {
this.o533 = 0;
}catch(e){}            //Current Y offset of the window.
  try {
this.o534 = 0;
}catch(e){}            //Current X offset of the window.
  try {
this.o535 = 0;
}catch(e){}            //To prevent the repeating of drawing a blank screen.
  try {
this.o536 = false;
}catch(e){}          //Throttle how many draws we can do to once per iteration.
  try {
this.o537 = -1;
}catch(e){}      //mid-scanline rendering offset.
  try {
this.o538 = 0;
}catch(e){}            //track the x-coord limit for line rendering (mid-scanline usage).
  try {
this.o539 = 0;
}catch(e){}            //The x-coord we left off at for mid-scanline rendering.
  //BG Tile Pointer Caches:
  try {
this.o540 = null;
}catch(e){}
  try {
this.o541 = null;
}catch(e){}
  try {
this.o542 = null;
}catch(e){}
  //Tile Data Cache:
  try {
this.o543 = null;
}catch(e){}
  //Palettes:
  try {
this.o544 = [0xEFFFDE, 0xADD794, 0x529273, 0x183442];
}catch(e){}      //"Classic" GameBoy palette colors.
  try {
this.o545 = null;
}catch(e){}
  try {
this.o546 = null;
}catch(e){}
  try {
this.o547 = null;
}catch(e){}
  try {
this.o548 = null;
}catch(e){}
  try {
this.o549 = null;
}catch(e){}
  try {
this.o550 = null;
}catch(e){}
  try {
this.o551 = null;
}catch(e){}
  try {
this.o552 = null;
}catch(e){}
  try {
this.o553 = null;
}catch(e){}
  try {
this.o554 = null;
}catch(e){}
  try {
this.o555 = null;
}catch(e){}
  try {
this.o556 = null;
}catch(e){}
  try {
this.o557 = this.o558;
}catch(e){}
  try {
this.o559 = this.o560;
}catch(e){}
  try {
this.o561 = false;
}catch(e){}
  try {
this.o562 = null;
}catch(e){}      //Reference to the BG rendering function.
  try {
this.o563 = null;
}catch(e){}    //Reference to the window rendering function.
  try {
this.o564 = null;
}catch(e){}    //Reference to the OAM rendering function.
  try {
this.o565 = [];
}catch(e){}        //The internal frame-buffer.
  try {
this.o566 = null;
}catch(e){}      //The secondary gfx buffer that holds the converted RGBA values.
  try {
this.o567 = null;
}catch(e){}      //imageData handle
  try {
this.o568 = 0;
}catch(e){}        //Temp variable for holding the current working framebuffer offset.
  //Variables used for scaling in JS:
  try {
this.o569 = this.o570 = 160;
}catch(e){}
  try {
this.o571 = this.o572 = 144;
}catch(e){}
  try {
this.o573 = this.o569 * this.o571 * 4;
}catch(e){}
  //Initialize the white noise cache tables ahead of time:
  try {
this.o574();
}catch(e){}
}

// Start of code changed for benchmarking (removed ROM):
try {
o360.prototype.o575 = [];
}catch(e){}
try {
o360.prototype.o576 = [];
}catch(e){}
// End of code changed for benchmarking.

try {
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
}catch(e){}
try {
o360.prototype.o578 = [
  //NOP
  //#0x00:
  function (o421) {try {
"use strict";
}catch(e){}
    //Do Nothing...
  },
  //LD BC, nn
  //#0x01:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 = o421.o390[o421.o149](o421, o421.o149);
}catch(e){}
    try {
o421.o144 = o421.o579((o421.o149 + 1) & 0xFFFF);
}catch(e){}
    try {
o421.o149 = (o421.o149 + 2) & 0xFFFF;
}catch(e){}
  },
  //LD (BC), A
  //#0x02:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o580((o421.o144 << 8) | o421.o145, o421.o143);
}catch(e){}
  },
  //INC BC
  //#0x03:
  function (o421) {try {
"use strict";
}catch(e){}
    var o581 = ((o421.o144 << 8) | o421.o145) + 1;
    try {
o421.o144 = (o581 >> 8) & 0xFF;
}catch(e){}
    try {
o421.o145 = o581 & 0xFF;
}catch(e){}
  },
  //INC B
  //#0x04:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o144 = (o421.o144 + 1) & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o144 == 0);
}catch(e){}
    try {
o421.o366 = ((o421.o144 & 0xF) == 0);
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
  },
  //DEC B
  //#0x05:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o144 = (o421.o144 - 1) & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o144 == 0);
}catch(e){}
    try {
o421.o366 = ((o421.o144 & 0xF) == 0xF);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
  },
  //LD B, n
  //#0x06:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o144 = o421.o390[o421.o149](o421, o421.o149);
}catch(e){}
    try {
o421.o149 = (o421.o149 + 1) & 0xFFFF;
}catch(e){}
  },
  //RLCA
  //#0x07:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = (o421.o143 > 0x7F);
}catch(e){}
    try {
o421.o143 = ((o421.o143 << 1) & 0xFF) | (o421.o143 >> 7);
}catch(e){}
    try {
o421.o364 = o421.o365 = o421.o366 = false;
}catch(e){}
  },
  //LD (nn), SP
  //#0x08:
  function (o421) {try {
"use strict";
}catch(e){}
    var o581 = (o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149);
    try {
o421.o149 = (o421.o149 + 2) & 0xFFFF;
}catch(e){}
    try {
o421.o580(o581, o421.o150 & 0xFF);
}catch(e){}
    try {
o421.o580((o581 + 1) & 0xFFFF, o421.o150 >> 8);
}catch(e){}
  },
  //ADD HL, BC
  //#0x09:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o148 + ((o421.o144 << 8) | o421.o145);
    try {
o421.o366 = ((o421.o148 & 0xFFF) > (o582 & 0xFFF));
}catch(e){}
    try {
o421.o367 = (o582 > 0xFFFF);
}catch(e){}
    try {
o421.o148 = o582 & 0xFFFF;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
  },
  //LD A, (BC)
  //#0x0A:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 = o421.o579((o421.o144 << 8) | o421.o145);
}catch(e){}
  },
  //DEC BC
  //#0x0B:
  function (o421) {try {
"use strict";
}catch(e){}
    var o581 = (((o421.o144 << 8) | o421.o145) - 1) & 0xFFFF;
    try {
o421.o144 = o581 >> 8;
}catch(e){}
    try {
o421.o145 = o581 & 0xFF;
}catch(e){}
  },
  //INC C
  //#0x0C:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 = (o421.o145 + 1) & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o145 == 0);
}catch(e){}
    try {
o421.o366 = ((o421.o145 & 0xF) == 0);
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
  },
  //DEC C
  //#0x0D:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 = (o421.o145 - 1) & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o145 == 0);
}catch(e){}
    try {
o421.o366 = ((o421.o145 & 0xF) == 0xF);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
  },
  //LD C, n
  //#0x0E:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 = o421.o390[o421.o149](o421, o421.o149);
}catch(e){}
    try {
o421.o149 = (o421.o149 + 1) & 0xFFFF;
}catch(e){}
  },
  //RRCA
  //#0x0F:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 = (o421.o143 >> 1) | ((o421.o143 & 1) << 7);
}catch(e){}
    try {
o421.o367 = (o421.o143 > 0x7F);
}catch(e){}
    try {
o421.o364 = o421.o365 = o421.o366 = false;
}catch(e){}
  },
  //STOP
  //#0x10:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
if (o421.o400) {
      try {
if ((o421.o155[0xFF4D] & 0x01) == 0x01) {    //Speed change requested.
        try {
if (o421.o155[0xFF4D] > 0x7F) {        //Go back to single speed mode.
          try {
o113("Going into single clock speed mode.", 0);
}catch(e){}
          try {
o421.o387 = 0;
}catch(e){}
          try {
o421.o155[0xFF4D] &= 0x7F;
}catch(e){}        //Clear the double speed mode flag.
        }
        else {                        //Go to double speed mode.
          try {
o113("Going into double clock speed mode.", 0);
}catch(e){}
          try {
o421.o387 = 1;
}catch(e){}
          try {
o421.o155[0xFF4D] |= 0x80;
}catch(e){}        //Set the double speed mode flag.
        }
}catch(e){}
        try {
o421.o155[0xFF4D] &= 0xFE;
}catch(e){}          //Reset the request bit.
      }
      else {
        try {
o421.o583();
}catch(e){}
      }
}catch(e){}
    }
    else {
      try {
o421.o583();
}catch(e){}
    }
}catch(e){}
  },
  //LD DE, nn
  //#0x11:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o146 = o421.o390[o421.o149](o421, o421.o149);
}catch(e){}
    try {
o421.o368 = o421.o579((o421.o149 + 1) & 0xFFFF);
}catch(e){}
    try {
o421.o149 = (o421.o149 + 2) & 0xFFFF;
}catch(e){}
  },
  //LD (DE), A
  //#0x12:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o580((o421.o368 << 8) | o421.o146, o421.o143);
}catch(e){}
  },
  //INC DE
  //#0x13:
  function (o421) {try {
"use strict";
}catch(e){}
    var o581 = ((o421.o368 << 8) | o421.o146) + 1;
    try {
o421.o368 = (o581 >> 8) & 0xFF;
}catch(e){}
    try {
o421.o146 = o581 & 0xFF;
}catch(e){}
  },
  //INC D
  //#0x14:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o368 = (o421.o368 + 1) & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o368 == 0);
}catch(e){}
    try {
o421.o366 = ((o421.o368 & 0xF) == 0);
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
  },
  //DEC D
  //#0x15:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o368 = (o421.o368 - 1) & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o368 == 0);
}catch(e){}
    try {
o421.o366 = ((o421.o368 & 0xF) == 0xF);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
  },
  //LD D, n
  //#0x16:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o368 = o421.o390[o421.o149](o421, o421.o149);
}catch(e){}
    try {
o421.o149 = (o421.o149 + 1) & 0xFFFF;
}catch(e){}
  },
  //RLA
  //#0x17:
  function (o421) {try {
"use strict";
}catch(e){}
    var o584 = (o421.o367) ? 1 : 0;
    try {
o421.o367 = (o421.o143 > 0x7F);
}catch(e){}
    try {
o421.o143 = ((o421.o143 << 1) & 0xFF) | o584;
}catch(e){}
    try {
o421.o364 = o421.o365 = o421.o366 = false;
}catch(e){}
  },
  //JR n
  //#0x18:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o149 = (o421.o149 + ((o421.o390[o421.o149](o421, o421.o149) << 24) >> 24) + 1) & 0xFFFF;
}catch(e){}
  },
  //ADD HL, DE
  //#0x19:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o148 + ((o421.o368 << 8) | o421.o146);
    try {
o421.o366 = ((o421.o148 & 0xFFF) > (o582 & 0xFFF));
}catch(e){}
    try {
o421.o367 = (o582 > 0xFFFF);
}catch(e){}
    try {
o421.o148 = o582 & 0xFFFF;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
  },
  //LD A, (DE)
  //#0x1A:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 = o421.o579((o421.o368 << 8) | o421.o146);
}catch(e){}
  },
  //DEC DE
  //#0x1B:
  function (o421) {try {
"use strict";
}catch(e){}
    var o581 = (((o421.o368 << 8) | o421.o146) - 1) & 0xFFFF;
    try {
o421.o368 = o581 >> 8;
}catch(e){}
    try {
o421.o146 = o581 & 0xFF;
}catch(e){}
  },
  //INC E
  //#0x1C:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o146 = (o421.o146 + 1) & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o146 == 0);
}catch(e){}
    try {
o421.o366 = ((o421.o146 & 0xF) == 0);
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
  },
  //DEC E
  //#0x1D:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o146 = (o421.o146 - 1) & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o146 == 0);
}catch(e){}
    try {
o421.o366 = ((o421.o146 & 0xF) == 0xF);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
  },
  //LD E, n
  //#0x1E:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o146 = o421.o390[o421.o149](o421, o421.o149);
}catch(e){}
    try {
o421.o149 = (o421.o149 + 1) & 0xFFFF;
}catch(e){}
  },
  //RRA
  //#0x1F:
  function (o421) {try {
"use strict";
}catch(e){}
    var o584 = (o421.o367) ? 0x80 : 0;
    try {
o421.o367 = ((o421.o143 & 1) == 1);
}catch(e){}
    try {
o421.o143 = (o421.o143 >> 1) | o584;
}catch(e){}
    try {
o421.o364 = o421.o365 = o421.o366 = false;
}catch(e){}
  },
  //JR NZ, n
  //#0x20:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
if (!o421.o364) {
      try {
o421.o149 = (o421.o149 + ((o421.o390[o421.o149](o421, o421.o149) << 24) >> 24) + 1) & 0xFFFF;
}catch(e){}
      try {
o421.o386 += 4;
}catch(e){}
    }
    else {
      try {
o421.o149 = (o421.o149 + 1) & 0xFFFF;
}catch(e){}
    }
}catch(e){}
  },
  //LD HL, nn
  //#0x21:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 = (o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149);
}catch(e){}
    try {
o421.o149 = (o421.o149 + 2) & 0xFFFF;
}catch(e){}
  },
  //LDI (HL), A
  //#0x22:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o421.o143);
}catch(e){}
    try {
o421.o148 = (o421.o148 + 1) & 0xFFFF;
}catch(e){}
  },
  //INC HL
  //#0x23:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 = (o421.o148 + 1) & 0xFFFF;
}catch(e){}
  },
  //INC H
  //#0x24:
  function (o421) {try {
"use strict";
}catch(e){}
    var o585 = ((o421.o148 >> 8) + 1) & 0xFF;
    try {
o421.o364 = (o585 == 0);
}catch(e){}
    try {
o421.o366 = ((o585 & 0xF) == 0);
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o148 = (o585 << 8) | (o421.o148 & 0xFF);
}catch(e){}
  },
  //DEC H
  //#0x25:
  function (o421) {try {
"use strict";
}catch(e){}
    var o585 = ((o421.o148 >> 8) - 1) & 0xFF;
    try {
o421.o364 = (o585 == 0);
}catch(e){}
    try {
o421.o366 = ((o585 & 0xF) == 0xF);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
    try {
o421.o148 = (o585 << 8) | (o421.o148 & 0xFF);
}catch(e){}
  },
  //LD H, n
  //#0x26:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 = (o421.o390[o421.o149](o421, o421.o149) << 8) | (o421.o148 & 0xFF);
}catch(e){}
    try {
o421.o149 = (o421.o149 + 1) & 0xFFFF;
}catch(e){}
  },
  //DAA
  //#0x27:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
if (!o421.o365) {
      try {
if (o421.o367 || o421.o143 > 0x99) {
        try {
o421.o143 = (o421.o143 + 0x60) & 0xFF;
}catch(e){}
        try {
o421.o367 = true;
}catch(e){}
      }
}catch(e){}
      try {
if (o421.o366 || (o421.o143 & 0xF) > 0x9) {
        try {
o421.o143 = (o421.o143 + 0x06) & 0xFF;
}catch(e){}
        try {
o421.o366 = false;
}catch(e){}
      }
}catch(e){}
    }
    else try {
if (o421.o367 && o421.o366) {
      try {
o421.o143 = (o421.o143 + 0x9A) & 0xFF;
}catch(e){}
      try {
o421.o366 = false;
}catch(e){}
    }
    else try {
if (o421.o367) {
      try {
o421.o143 = (o421.o143 + 0xA0) & 0xFF;
}catch(e){}
    }
    else try {
if (o421.o366) {
      try {
o421.o143 = (o421.o143 + 0xFA) & 0xFF;
}catch(e){}
      try {
o421.o366 = false;
}catch(e){}
    }
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
  },
  //JR Z, n
  //#0x28:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
if (o421.o364) {
      try {
o421.o149 = (o421.o149 + ((o421.o390[o421.o149](o421, o421.o149) << 24) >> 24) + 1) & 0xFFFF;
}catch(e){}
      try {
o421.o386 += 4;
}catch(e){}
    }
    else {
      try {
o421.o149 = (o421.o149 + 1) & 0xFFFF;
}catch(e){}
    }
}catch(e){}
  },
  //ADD HL, HL
  //#0x29:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = ((o421.o148 & 0xFFF) > 0x7FF);
}catch(e){}
    try {
o421.o367 = (o421.o148 > 0x7FFF);
}catch(e){}
    try {
o421.o148 = (o421.o148 << 1) & 0xFFFF;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
  },
  //LDI A, (HL)
  //#0x2A:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 = o421.o390[o421.o148](o421, o421.o148);
}catch(e){}
    try {
o421.o148 = (o421.o148 + 1) & 0xFFFF;
}catch(e){}
  },
  //DEC HL
  //#0x2B:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 = (o421.o148 - 1) & 0xFFFF;
}catch(e){}
  },
  //INC L
  //#0x2C:
  function (o421) {try {
"use strict";
}catch(e){}
    var o586 = (o421.o148 + 1) & 0xFF;
    try {
o421.o364 = (o586 == 0);
}catch(e){}
    try {
o421.o366 = ((o586 & 0xF) == 0);
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o148 = (o421.o148 & 0xFF00) | o586;
}catch(e){}
  },
  //DEC L
  //#0x2D:
  function (o421) {try {
"use strict";
}catch(e){}
    var o586 = (o421.o148 - 1) & 0xFF;
    try {
o421.o364 = (o586 == 0);
}catch(e){}
    try {
o421.o366 = ((o586 & 0xF) == 0xF);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
    try {
o421.o148 = (o421.o148 & 0xFF00) | o586;
}catch(e){}
  },
  //LD L, n
  //#0x2E:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 = (o421.o148 & 0xFF00) | o421.o390[o421.o149](o421, o421.o149);
}catch(e){}
    try {
o421.o149 = (o421.o149 + 1) & 0xFFFF;
}catch(e){}
  },
  //CPL
  //#0x2F:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 ^= 0xFF;
}catch(e){}
    try {
o421.o365 = o421.o366 = true;
}catch(e){}
  },
  //JR NC, n
  //#0x30:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
if (!o421.o367) {
      try {
o421.o149 = (o421.o149 + ((o421.o390[o421.o149](o421, o421.o149) << 24) >> 24) + 1) & 0xFFFF;
}catch(e){}
      try {
o421.o386 += 4;
}catch(e){}
    }
    else {
      try {
o421.o149 = (o421.o149 + 1) & 0xFFFF;
}catch(e){}
    }
}catch(e){}
  },
  //LD SP, nn
  //#0x31:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o150 = (o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149);
}catch(e){}
    try {
o421.o149 = (o421.o149 + 2) & 0xFFFF;
}catch(e){}
  },
  //LDD (HL), A
  //#0x32:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o421.o143);
}catch(e){}
    try {
o421.o148 = (o421.o148 - 1) & 0xFFFF;
}catch(e){}
  },
  //INC SP
  //#0x33:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o150 = (o421.o150 + 1) & 0xFFFF;
}catch(e){}
  },
  //INC (HL)
  //#0x34:
  function (o421) {try {
"use strict";
}catch(e){}
    var o581 = (o421.o390[o421.o148](o421, o421.o148) + 1) & 0xFF;
    try {
o421.o364 = (o581 == 0);
}catch(e){}
    try {
o421.o366 = ((o581 & 0xF) == 0);
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o581);
}catch(e){}
  },
  //DEC (HL)
  //#0x35:
  function (o421) {try {
"use strict";
}catch(e){}
    var o581 = (o421.o390[o421.o148](o421, o421.o148) - 1) & 0xFF;
    try {
o421.o364 = (o581 == 0);
}catch(e){}
    try {
o421.o366 = ((o581 & 0xF) == 0xF);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o581);
}catch(e){}
  },
  //LD (HL), n
  //#0x36:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o149](o421, o421.o149));
}catch(e){}
    try {
o421.o149 = (o421.o149 + 1) & 0xFFFF;
}catch(e){}
  },
  //SCF
  //#0x37:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = true;
}catch(e){}
    try {
o421.o365 = o421.o366 = false;
}catch(e){}
  },
  //JR C, n
  //#0x38:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
if (o421.o367) {
      try {
o421.o149 = (o421.o149 + ((o421.o390[o421.o149](o421, o421.o149) << 24) >> 24) + 1) & 0xFFFF;
}catch(e){}
      try {
o421.o386 += 4;
}catch(e){}
    }
    else {
      try {
o421.o149 = (o421.o149 + 1) & 0xFFFF;
}catch(e){}
    }
}catch(e){}
  },
  //ADD HL, SP
  //#0x39:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o148 + o421.o150;
    try {
o421.o366 = ((o421.o148 & 0xFFF) > (o582 & 0xFFF));
}catch(e){}
    try {
o421.o367 = (o582 > 0xFFFF);
}catch(e){}
    try {
o421.o148 = o582 & 0xFFFF;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
  },
  //LDD A, (HL)
  //#0x3A:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 = o421.o390[o421.o148](o421, o421.o148);
}catch(e){}
    try {
o421.o148 = (o421.o148 - 1) & 0xFFFF;
}catch(e){}
  },
  //DEC SP
  //#0x3B:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
  },
  //INC A
  //#0x3C:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 = (o421.o143 + 1) & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o366 = ((o421.o143 & 0xF) == 0);
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
  },
  //DEC A
  //#0x3D:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 = (o421.o143 - 1) & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o366 = ((o421.o143 & 0xF) == 0xF);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
  },
  //LD A, n
  //#0x3E:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 = o421.o390[o421.o149](o421, o421.o149);
}catch(e){}
    try {
o421.o149 = (o421.o149 + 1) & 0xFFFF;
}catch(e){}
  },
  //CCF
  //#0x3F:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = !o421.o367;
}catch(e){}
    try {
o421.o365 = o421.o366 = false;
}catch(e){}
  },
  //LD B, B
  //#0x40:
  function (o421) {try {
"use strict";
}catch(e){}
    //Do nothing...
  },
  //LD B, C
  //#0x41:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o144 = o421.o145;
}catch(e){}
  },
  //LD B, D
  //#0x42:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o144 = o421.o368;
}catch(e){}
  },
  //LD B, E
  //#0x43:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o144 = o421.o146;
}catch(e){}
  },
  //LD B, H
  //#0x44:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o144 = o421.o148 >> 8;
}catch(e){}
  },
  //LD B, L
  //#0x45:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o144 = o421.o148 & 0xFF;
}catch(e){}
  },
  //LD B, (HL)
  //#0x46:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o144 = o421.o390[o421.o148](o421, o421.o148);
}catch(e){}
  },
  //LD B, A
  //#0x47:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o144 = o421.o143;
}catch(e){}
  },
  //LD C, B
  //#0x48:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 = o421.o144;
}catch(e){}
  },
  //LD C, C
  //#0x49:
  function (o421) {try {
"use strict";
}catch(e){}
    //Do nothing...
  },
  //LD C, D
  //#0x4A:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 = o421.o368;
}catch(e){}
  },
  //LD C, E
  //#0x4B:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 = o421.o146;
}catch(e){}
  },
  //LD C, H
  //#0x4C:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 = o421.o148 >> 8;
}catch(e){}
  },
  //LD C, L
  //#0x4D:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 = o421.o148 & 0xFF;
}catch(e){}
  },
  //LD C, (HL)
  //#0x4E:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 = o421.o390[o421.o148](o421, o421.o148);
}catch(e){}
  },
  //LD C, A
  //#0x4F:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 = o421.o143;
}catch(e){}
  },
  //LD D, B
  //#0x50:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o368 = o421.o144;
}catch(e){}
  },
  //LD D, C
  //#0x51:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o368 = o421.o145;
}catch(e){}
  },
  //LD D, D
  //#0x52:
  function (o421) {try {
"use strict";
}catch(e){}
    //Do nothing...
  },
  //LD D, E
  //#0x53:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o368 = o421.o146;
}catch(e){}
  },
  //LD D, H
  //#0x54:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o368 = o421.o148 >> 8;
}catch(e){}
  },
  //LD D, L
  //#0x55:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o368 = o421.o148 & 0xFF;
}catch(e){}
  },
  //LD D, (HL)
  //#0x56:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o368 = o421.o390[o421.o148](o421, o421.o148);
}catch(e){}
  },
  //LD D, A
  //#0x57:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o368 = o421.o143;
}catch(e){}
  },
  //LD E, B
  //#0x58:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o146 = o421.o144;
}catch(e){}
  },
  //LD E, C
  //#0x59:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o146 = o421.o145;
}catch(e){}
  },
  //LD E, D
  //#0x5A:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o146 = o421.o368;
}catch(e){}
  },
  //LD E, E
  //#0x5B:
  function (o421) {try {
"use strict";
}catch(e){}
    //Do nothing...
  },
  //LD E, H
  //#0x5C:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o146 = o421.o148 >> 8;
}catch(e){}
  },
  //LD E, L
  //#0x5D:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o146 = o421.o148 & 0xFF;
}catch(e){}
  },
  //LD E, (HL)
  //#0x5E:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o146 = o421.o390[o421.o148](o421, o421.o148);
}catch(e){}
  },
  //LD E, A
  //#0x5F:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o146 = o421.o143;
}catch(e){}
  },
  //LD H, B
  //#0x60:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 = (o421.o144 << 8) | (o421.o148 & 0xFF);
}catch(e){}
  },
  //LD H, C
  //#0x61:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 = (o421.o145 << 8) | (o421.o148 & 0xFF);
}catch(e){}
  },
  //LD H, D
  //#0x62:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 = (o421.o368 << 8) | (o421.o148 & 0xFF);
}catch(e){}
  },
  //LD H, E
  //#0x63:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 = (o421.o146 << 8) | (o421.o148 & 0xFF);
}catch(e){}
  },
  //LD H, H
  //#0x64:
  function (o421) {try {
"use strict";
}catch(e){}
    //Do nothing...
  },
  //LD H, L
  //#0x65:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 = (o421.o148 & 0xFF) * 0x101;
}catch(e){}
  },
  //LD H, (HL)
  //#0x66:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 = (o421.o390[o421.o148](o421, o421.o148) << 8) | (o421.o148 & 0xFF);
}catch(e){}
  },
  //LD H, A
  //#0x67:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 = (o421.o143 << 8) | (o421.o148 & 0xFF);
}catch(e){}
  },
  //LD L, B
  //#0x68:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 = (o421.o148 & 0xFF00) | o421.o144;
}catch(e){}
  },
  //LD L, C
  //#0x69:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 = (o421.o148 & 0xFF00) | o421.o145;
}catch(e){}
  },
  //LD L, D
  //#0x6A:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 = (o421.o148 & 0xFF00) | o421.o368;
}catch(e){}
  },
  //LD L, E
  //#0x6B:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 = (o421.o148 & 0xFF00) | o421.o146;
}catch(e){}
  },
  //LD L, H
  //#0x6C:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 = (o421.o148 & 0xFF00) | (o421.o148 >> 8);
}catch(e){}
  },
  //LD L, L
  //#0x6D:
  function (o421) {try {
"use strict";
}catch(e){}
    //Do nothing...
  },
  //LD L, (HL)
  //#0x6E:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 = (o421.o148 & 0xFF00) | o421.o390[o421.o148](o421, o421.o148);
}catch(e){}
  },
  //LD L, A
  //#0x6F:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 = (o421.o148 & 0xFF00) | o421.o143;
}catch(e){}
  },
  //LD (HL), B
  //#0x70:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o421.o144);
}catch(e){}
  },
  //LD (HL), C
  //#0x71:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o421.o145);
}catch(e){}
  },
  //LD (HL), D
  //#0x72:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o421.o368);
}catch(e){}
  },
  //LD (HL), E
  //#0x73:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o421.o146);
}catch(e){}
  },
  //LD (HL), H
  //#0x74:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o421.o148 >> 8);
}catch(e){}
  },
  //LD (HL), L
  //#0x75:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o421.o148 & 0xFF);
}catch(e){}
  },
  //HALT
  //#0x76:
  function (o421) {try {
"use strict";
}catch(e){}
    //See if there's already an IRQ match:
    try {
if ((o421.o384 & o421.o383 & 0x1F) > 0) {
      try {
if (!o421.o400 && !o421.o376) {
        //HALT bug in the DMG CPU model (Program Counter fails to increment for one instruction after HALT):
        try {
o421.o379 = true;
}catch(e){}
      }
      else {
        //CGB gets around the HALT PC bug by doubling the hidden NOP.
        try {
o421.o386 += 4;
}catch(e){}
      }
}catch(e){}
    }
    else {
      //CPU is stalled until the next IRQ match:
      try {
o421.o587();
}catch(e){}
    }
}catch(e){}
  },
  //LD (HL), A
  //#0x77:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o421.o143);
}catch(e){}
  },
  //LD A, B
  //#0x78:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 = o421.o144;
}catch(e){}
  },
  //LD A, C
  //#0x79:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 = o421.o145;
}catch(e){}
  },
  //LD A, D
  //#0x7A:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 = o421.o368;
}catch(e){}
  },
  //LD A, E
  //#0x7B:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 = o421.o146;
}catch(e){}
  },
  //LD A, H
  //#0x7C:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 = o421.o148 >> 8;
}catch(e){}
  },
  //LD A, L
  //#0x7D:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 = o421.o148 & 0xFF;
}catch(e){}
  },
  //LD, A, (HL)
  //#0x7E:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 = o421.o390[o421.o148](o421, o421.o148);
}catch(e){}
  },
  //LD A, A
  //#0x7F:
  function (o421) {try {
"use strict";
}catch(e){}
    //Do Nothing...
  },
  //ADD A, B
  //#0x80:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 + o421.o144;
    try {
o421.o366 = ((o582 & 0xF) < (o421.o143 & 0xF));
}catch(e){}
    try {
o421.o367 = (o582 > 0xFF);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
  },
  //ADD A, C
  //#0x81:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 + o421.o145;
    try {
o421.o366 = ((o582 & 0xF) < (o421.o143 & 0xF));
}catch(e){}
    try {
o421.o367 = (o582 > 0xFF);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
  },
  //ADD A, D
  //#0x82:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 + o421.o368;
    try {
o421.o366 = ((o582 & 0xF) < (o421.o143 & 0xF));
}catch(e){}
    try {
o421.o367 = (o582 > 0xFF);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
  },
  //ADD A, E
  //#0x83:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 + o421.o146;
    try {
o421.o366 = ((o582 & 0xF) < (o421.o143 & 0xF));
}catch(e){}
    try {
o421.o367 = (o582 > 0xFF);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
  },
  //ADD A, H
  //#0x84:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 + (o421.o148 >> 8);
    try {
o421.o366 = ((o582 & 0xF) < (o421.o143 & 0xF));
}catch(e){}
    try {
o421.o367 = (o582 > 0xFF);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
  },
  //ADD A, L
  //#0x85:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 + (o421.o148 & 0xFF);
    try {
o421.o366 = ((o582 & 0xF) < (o421.o143 & 0xF));
}catch(e){}
    try {
o421.o367 = (o582 > 0xFF);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
  },
  //ADD A, (HL)
  //#0x86:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 + o421.o390[o421.o148](o421, o421.o148);
    try {
o421.o366 = ((o582 & 0xF) < (o421.o143 & 0xF));
}catch(e){}
    try {
o421.o367 = (o582 > 0xFF);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
  },
  //ADD A, A
  //#0x87:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = ((o421.o143 & 0x8) == 0x8);
}catch(e){}
    try {
o421.o367 = (o421.o143 > 0x7F);
}catch(e){}
    try {
o421.o143 = (o421.o143 << 1) & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
  },
  //ADC A, B
  //#0x88:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 + o421.o144 + ((o421.o367) ? 1 : 0);
    try {
o421.o366 = ((o421.o143 & 0xF) + (o421.o144 & 0xF) + ((o421.o367) ? 1 : 0) > 0xF);
}catch(e){}
    try {
o421.o367 = (o582 > 0xFF);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
  },
  //ADC A, C
  //#0x89:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 + o421.o145 + ((o421.o367) ? 1 : 0);
    try {
o421.o366 = ((o421.o143 & 0xF) + (o421.o145 & 0xF) + ((o421.o367) ? 1 : 0) > 0xF);
}catch(e){}
    try {
o421.o367 = (o582 > 0xFF);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
  },
  //ADC A, D
  //#0x8A:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 + o421.o368 + ((o421.o367) ? 1 : 0);
    try {
o421.o366 = ((o421.o143 & 0xF) + (o421.o368 & 0xF) + ((o421.o367) ? 1 : 0) > 0xF);
}catch(e){}
    try {
o421.o367 = (o582 > 0xFF);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
  },
  //ADC A, E
  //#0x8B:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 + o421.o146 + ((o421.o367) ? 1 : 0);
    try {
o421.o366 = ((o421.o143 & 0xF) + (o421.o146 & 0xF) + ((o421.o367) ? 1 : 0) > 0xF);
}catch(e){}
    try {
o421.o367 = (o582 > 0xFF);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
  },
  //ADC A, H
  //#0x8C:
  function (o421) {try {
"use strict";
}catch(e){}
    var o588 = (o421.o148 >> 8);
    var o582 = o421.o143 + o588 + ((o421.o367) ? 1 : 0);
    try {
o421.o366 = ((o421.o143 & 0xF) + (o588 & 0xF) + ((o421.o367) ? 1 : 0) > 0xF);
}catch(e){}
    try {
o421.o367 = (o582 > 0xFF);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
  },
  //ADC A, L
  //#0x8D:
  function (o421) {try {
"use strict";
}catch(e){}
    var o588 = (o421.o148 & 0xFF);
    var o582 = o421.o143 + o588 + ((o421.o367) ? 1 : 0);
    try {
o421.o366 = ((o421.o143 & 0xF) + (o588 & 0xF) + ((o421.o367) ? 1 : 0) > 0xF);
}catch(e){}
    try {
o421.o367 = (o582 > 0xFF);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
  },
  //ADC A, (HL)
  //#0x8E:
  function (o421) {try {
"use strict";
}catch(e){}
    var o588 = o421.o390[o421.o148](o421, o421.o148);
    var o582 = o421.o143 + o588 + ((o421.o367) ? 1 : 0);
    try {
o421.o366 = ((o421.o143 & 0xF) + (o588 & 0xF) + ((o421.o367) ? 1 : 0) > 0xF);
}catch(e){}
    try {
o421.o367 = (o582 > 0xFF);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
  },
  //ADC A, A
  //#0x8F:
  function (o421) {try {
"use strict";
}catch(e){}
    //shift left register A one bit for some ops here as an optimization:
    var o582 = (o421.o143 << 1) | ((o421.o367) ? 1 : 0);
    try {
o421.o366 = ((((o421.o143 << 1) & 0x1E) | ((o421.o367) ? 1 : 0)) > 0xF);
}catch(e){}
    try {
o421.o367 = (o582 > 0xFF);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
  },
  //SUB A, B
  //#0x90:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 - o421.o144;
    try {
o421.o366 = ((o421.o143 & 0xF) < (o582 & 0xF));
}catch(e){}
    try {
o421.o367 = (o582 < 0);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o582 == 0);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
  },
  //SUB A, C
  //#0x91:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 - o421.o145;
    try {
o421.o366 = ((o421.o143 & 0xF) < (o582 & 0xF));
}catch(e){}
    try {
o421.o367 = (o582 < 0);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o582 == 0);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
  },
  //SUB A, D
  //#0x92:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 - o421.o368;
    try {
o421.o366 = ((o421.o143 & 0xF) < (o582 & 0xF));
}catch(e){}
    try {
o421.o367 = (o582 < 0);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o582 == 0);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
  },
  //SUB A, E
  //#0x93:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 - o421.o146;
    try {
o421.o366 = ((o421.o143 & 0xF) < (o582 & 0xF));
}catch(e){}
    try {
o421.o367 = (o582 < 0);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o582 == 0);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
  },
  //SUB A, H
  //#0x94:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 - (o421.o148 >> 8);
    try {
o421.o366 = ((o421.o143 & 0xF) < (o582 & 0xF));
}catch(e){}
    try {
o421.o367 = (o582 < 0);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o582 == 0);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
  },
  //SUB A, L
  //#0x95:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 - (o421.o148 & 0xFF);
    try {
o421.o366 = ((o421.o143 & 0xF) < (o582 & 0xF));
}catch(e){}
    try {
o421.o367 = (o582 < 0);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o582 == 0);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
  },
  //SUB A, (HL)
  //#0x96:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 - o421.o390[o421.o148](o421, o421.o148);
    try {
o421.o366 = ((o421.o143 & 0xF) < (o582 & 0xF));
}catch(e){}
    try {
o421.o367 = (o582 < 0);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o582 == 0);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
  },
  //SUB A, A
  //#0x97:
  function (o421) {try {
"use strict";
}catch(e){}
    //number - same number == 0
    try {
o421.o143 = 0;
}catch(e){}
    try {
o421.o366 = o421.o367 = false;
}catch(e){}
    try {
o421.o364 = o421.o365 = true;
}catch(e){}
  },
  //SBC A, B
  //#0x98:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 - o421.o144 - ((o421.o367) ? 1 : 0);
    try {
o421.o366 = ((o421.o143 & 0xF) - (o421.o144 & 0xF) - ((o421.o367) ? 1 : 0) < 0);
}catch(e){}
    try {
o421.o367 = (o582 < 0);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
  },
  //SBC A, C
  //#0x99:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 - o421.o145 - ((o421.o367) ? 1 : 0);
    try {
o421.o366 = ((o421.o143 & 0xF) - (o421.o145 & 0xF) - ((o421.o367) ? 1 : 0) < 0);
}catch(e){}
    try {
o421.o367 = (o582 < 0);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
  },
  //SBC A, D
  //#0x9A:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 - o421.o368 - ((o421.o367) ? 1 : 0);
    try {
o421.o366 = ((o421.o143 & 0xF) - (o421.o368 & 0xF) - ((o421.o367) ? 1 : 0) < 0);
}catch(e){}
    try {
o421.o367 = (o582 < 0);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
  },
  //SBC A, E
  //#0x9B:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 - o421.o146 - ((o421.o367) ? 1 : 0);
    try {
o421.o366 = ((o421.o143 & 0xF) - (o421.o146 & 0xF) - ((o421.o367) ? 1 : 0) < 0);
}catch(e){}
    try {
o421.o367 = (o582 < 0);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
  },
  //SBC A, H
  //#0x9C:
  function (o421) {try {
"use strict";
}catch(e){}
    var o581 = o421.o148 >> 8;
    var o582 = o421.o143 - o581 - ((o421.o367) ? 1 : 0);
    try {
o421.o366 = ((o421.o143 & 0xF) - (o581 & 0xF) - ((o421.o367) ? 1 : 0) < 0);
}catch(e){}
    try {
o421.o367 = (o582 < 0);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
  },
  //SBC A, L
  //#0x9D:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 - (o421.o148 & 0xFF) - ((o421.o367) ? 1 : 0);
    try {
o421.o366 = ((o421.o143 & 0xF) - (o421.o148 & 0xF) - ((o421.o367) ? 1 : 0) < 0);
}catch(e){}
    try {
o421.o367 = (o582 < 0);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
  },
  //SBC A, (HL)
  //#0x9E:
  function (o421) {try {
"use strict";
}catch(e){}
    var o581 = o421.o390[o421.o148](o421, o421.o148);
    var o582 = o421.o143 - o581 - ((o421.o367) ? 1 : 0);
    try {
o421.o366 = ((o421.o143 & 0xF) - (o581 & 0xF) - ((o421.o367) ? 1 : 0) < 0);
}catch(e){}
    try {
o421.o367 = (o582 < 0);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
  },
  //SBC A, A
  //#0x9F:
  function (o421) {try {
"use strict";
}catch(e){}
    //Optimized SBC A:
    try {
if (o421.o367) {
      try {
o421.o364 = false;
}catch(e){}
      try {
o421.o365 = o421.o366 = o421.o367 = true;
}catch(e){}
      try {
o421.o143 = 0xFF;
}catch(e){}
    }
    else {
      try {
o421.o366 = o421.o367 = false;
}catch(e){}
      try {
o421.o365 = o421.o364 = true;
}catch(e){}
      try {
o421.o143 = 0;
}catch(e){}
    }
}catch(e){}
  },
  //AND B
  //#0xA0:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 &= o421.o144;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = o421.o367 = false;
}catch(e){}
  },
  //AND C
  //#0xA1:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 &= o421.o145;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = o421.o367 = false;
}catch(e){}
  },
  //AND D
  //#0xA2:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 &= o421.o368;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = o421.o367 = false;
}catch(e){}
  },
  //AND E
  //#0xA3:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 &= o421.o146;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = o421.o367 = false;
}catch(e){}
  },
  //AND H
  //#0xA4:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 &= (o421.o148 >> 8);
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = o421.o367 = false;
}catch(e){}
  },
  //AND L
  //#0xA5:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 &= o421.o148;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = o421.o367 = false;
}catch(e){}
  },
  //AND (HL)
  //#0xA6:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 &= o421.o390[o421.o148](o421, o421.o148);
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = o421.o367 = false;
}catch(e){}
  },
  //AND A
  //#0xA7:
  function (o421) {try {
"use strict";
}catch(e){}
    //number & same number = same number
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = o421.o367 = false;
}catch(e){}
  },
  //XOR B
  //#0xA8:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 ^= o421.o144;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = o421.o366 = o421.o367 = false;
}catch(e){}
  },
  //XOR C
  //#0xA9:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 ^= o421.o145;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = o421.o366 = o421.o367 = false;
}catch(e){}
  },
  //XOR D
  //#0xAA:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 ^= o421.o368;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = o421.o366 = o421.o367 = false;
}catch(e){}
  },
  //XOR E
  //#0xAB:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 ^= o421.o146;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = o421.o366 = o421.o367 = false;
}catch(e){}
  },
  //XOR H
  //#0xAC:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 ^= (o421.o148 >> 8);
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = o421.o366 = o421.o367 = false;
}catch(e){}
  },
  //XOR L
  //#0xAD:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 ^= (o421.o148 & 0xFF);
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = o421.o366 = o421.o367 = false;
}catch(e){}
  },
  //XOR (HL)
  //#0xAE:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 ^= o421.o390[o421.o148](o421, o421.o148);
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = o421.o366 = o421.o367 = false;
}catch(e){}
  },
  //XOR A
  //#0xAF:
  function (o421) {try {
"use strict";
}catch(e){}
    //number ^ same number == 0
    try {
o421.o143 = 0;
}catch(e){}
    try {
o421.o364 = true;
}catch(e){}
    try {
o421.o365 = o421.o366 = o421.o367 = false;
}catch(e){}
  },
  //OR B
  //#0xB0:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 |= o421.o144;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = o421.o367 = o421.o366 = false;
}catch(e){}
  },
  //OR C
  //#0xB1:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 |= o421.o145;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = o421.o367 = o421.o366 = false;
}catch(e){}
  },
  //OR D
  //#0xB2:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 |= o421.o368;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = o421.o367 = o421.o366 = false;
}catch(e){}
  },
  //OR E
  //#0xB3:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 |= o421.o146;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = o421.o367 = o421.o366 = false;
}catch(e){}
  },
  //OR H
  //#0xB4:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 |= (o421.o148 >> 8);
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = o421.o367 = o421.o366 = false;
}catch(e){}
  },
  //OR L
  //#0xB5:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 |= (o421.o148 & 0xFF);
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = o421.o367 = o421.o366 = false;
}catch(e){}
  },
  //OR (HL)
  //#0xB6:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 |= o421.o390[o421.o148](o421, o421.o148);
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = o421.o367 = o421.o366 = false;
}catch(e){}
  },
  //OR A
  //#0xB7:
  function (o421) {try {
"use strict";
}catch(e){}
    //number | same number == same number
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = o421.o367 = o421.o366 = false;
}catch(e){}
  },
  //CP B
  //#0xB8:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 - o421.o144;
    try {
o421.o366 = ((o582 & 0xF) > (o421.o143 & 0xF));
}catch(e){}
    try {
o421.o367 = (o582 < 0);
}catch(e){}
    try {
o421.o364 = (o582 == 0);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
  },
  //CP C
  //#0xB9:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 - o421.o145;
    try {
o421.o366 = ((o582 & 0xF) > (o421.o143 & 0xF));
}catch(e){}
    try {
o421.o367 = (o582 < 0);
}catch(e){}
    try {
o421.o364 = (o582 == 0);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
  },
  //CP D
  //#0xBA:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 - o421.o368;
    try {
o421.o366 = ((o582 & 0xF) > (o421.o143 & 0xF));
}catch(e){}
    try {
o421.o367 = (o582 < 0);
}catch(e){}
    try {
o421.o364 = (o582 == 0);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
  },
  //CP E
  //#0xBB:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 - o421.o146;
    try {
o421.o366 = ((o582 & 0xF) > (o421.o143 & 0xF));
}catch(e){}
    try {
o421.o367 = (o582 < 0);
}catch(e){}
    try {
o421.o364 = (o582 == 0);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
  },
  //CP H
  //#0xBC:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 - (o421.o148 >> 8);
    try {
o421.o366 = ((o582 & 0xF) > (o421.o143 & 0xF));
}catch(e){}
    try {
o421.o367 = (o582 < 0);
}catch(e){}
    try {
o421.o364 = (o582 == 0);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
  },
  //CP L
  //#0xBD:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 - (o421.o148 & 0xFF);
    try {
o421.o366 = ((o582 & 0xF) > (o421.o143 & 0xF));
}catch(e){}
    try {
o421.o367 = (o582 < 0);
}catch(e){}
    try {
o421.o364 = (o582 == 0);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
  },
  //CP (HL)
  //#0xBE:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 - o421.o390[o421.o148](o421, o421.o148);
    try {
o421.o366 = ((o582 & 0xF) > (o421.o143 & 0xF));
}catch(e){}
    try {
o421.o367 = (o582 < 0);
}catch(e){}
    try {
o421.o364 = (o582 == 0);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
  },
  //CP A
  //#0xBF:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = o421.o367 = false;
}catch(e){}
    try {
o421.o364 = o421.o365 = true;
}catch(e){}
  },
  //RET !FZ
  //#0xC0:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
if (!o421.o364) {
      try {
o421.o149 = (o421.o579((o421.o150 + 1) & 0xFFFF) << 8) | o421.o390[o421.o150](o421, o421.o150);
}catch(e){}
      try {
o421.o150 = (o421.o150 + 2) & 0xFFFF;
}catch(e){}
      try {
o421.o386 += 12;
}catch(e){}
    }
}catch(e){}
  },
  //POP BC
  //#0xC1:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 = o421.o390[o421.o150](o421, o421.o150);
}catch(e){}
    try {
o421.o144 = o421.o579((o421.o150 + 1) & 0xFFFF);
}catch(e){}
    try {
o421.o150 = (o421.o150 + 2) & 0xFFFF;
}catch(e){}
  },
  //JP !FZ, nn
  //#0xC2:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
if (!o421.o364) {
      try {
o421.o149 = (o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149);
}catch(e){}
      try {
o421.o386 += 4;
}catch(e){}
    }
    else {
      try {
o421.o149 = (o421.o149 + 2) & 0xFFFF;
}catch(e){}
    }
}catch(e){}
  },
  //JP nn
  //#0xC3:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o149 = (o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149);
}catch(e){}
  },
  //CALL !FZ, nn
  //#0xC4:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
if (!o421.o364) {
      var o589 = (o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149);
      try {
o421.o149 = (o421.o149 + 2) & 0xFFFF;
}catch(e){}
      try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
      try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 >> 8);
}catch(e){}
      try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
      try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 & 0xFF);
}catch(e){}
      try {
o421.o149 = o589;
}catch(e){}
      try {
o421.o386 += 12;
}catch(e){}
    }
    else {
      try {
o421.o149 = (o421.o149 + 2) & 0xFFFF;
}catch(e){}
    }
}catch(e){}
  },
  //PUSH BC
  //#0xC5:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, o421.o144);
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, o421.o145);
}catch(e){}
  },
  //ADD, n
  //#0xC6:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 + o421.o390[o421.o149](o421, o421.o149);
    try {
o421.o149 = (o421.o149 + 1) & 0xFFFF;
}catch(e){}
    try {
o421.o366 = ((o582 & 0xF) < (o421.o143 & 0xF));
}catch(e){}
    try {
o421.o367 = (o582 > 0xFF);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
  },
  //RST 0
  //#0xC7:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 >> 8);
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 & 0xFF);
}catch(e){}
    try {
o421.o149 = 0;
}catch(e){}
  },
  //RET FZ
  //#0xC8:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
if (o421.o364) {
      try {
o421.o149 = (o421.o579((o421.o150 + 1) & 0xFFFF) << 8) | o421.o390[o421.o150](o421, o421.o150);
}catch(e){}
      try {
o421.o150 = (o421.o150 + 2) & 0xFFFF;
}catch(e){}
      try {
o421.o386 += 12;
}catch(e){}
    }
}catch(e){}
  },
  //RET
  //#0xC9:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o149 =  (o421.o579((o421.o150 + 1) & 0xFFFF) << 8) | o421.o390[o421.o150](o421, o421.o150);
}catch(e){}
    try {
o421.o150 = (o421.o150 + 2) & 0xFFFF;
}catch(e){}
  },
  //JP FZ, nn
  //#0xCA:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
if (o421.o364) {
      try {
o421.o149 = (o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149);
}catch(e){}
      try {
o421.o386 += 4;
}catch(e){}
    }
    else {
      try {
o421.o149 = (o421.o149 + 2) & 0xFFFF;
}catch(e){}
    }
}catch(e){}
  },
  //Secondary OP Code Set:
  //#0xCB:
  function (o421) {try {
"use strict";
}catch(e){}
    var o590 = o421.o390[o421.o149](o421, o421.o149);
    //Increment the program counter to the next instruction:
    try {
o421.o149 = (o421.o149 + 1) & 0xFFFF;
}catch(e){}
    //Get how many CPU cycles the current 0xCBXX op code counts for:
    try {
o421.o386 += o421.o591[o590];
}catch(e){}
    //Execute secondary OP codes for the 0xCB OP code call.
    try {
o421.o592[o590](o421);
}catch(e){}
  },
  //CALL FZ, nn
  //#0xCC:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
if (o421.o364) {
      var o589 = (o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149);
      try {
o421.o149 = (o421.o149 + 2) & 0xFFFF;
}catch(e){}
      try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
      try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 >> 8);
}catch(e){}
      try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
      try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 & 0xFF);
}catch(e){}
      try {
o421.o149 = o589;
}catch(e){}
      try {
o421.o386 += 12;
}catch(e){}
    }
    else {
      try {
o421.o149 = (o421.o149 + 2) & 0xFFFF;
}catch(e){}
    }
}catch(e){}
  },
  //CALL nn
  //#0xCD:
  function (o421) {try {
"use strict";
}catch(e){}
    var o589 = (o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149);
    try {
o421.o149 = (o421.o149 + 2) & 0xFFFF;
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 >> 8);
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 & 0xFF);
}catch(e){}
    try {
o421.o149 = o589;
}catch(e){}
  },
  //ADC A, n
  //#0xCE:
  function (o421) {try {
"use strict";
}catch(e){}
    var o588 = o421.o390[o421.o149](o421, o421.o149);
    try {
o421.o149 = (o421.o149 + 1) & 0xFFFF;
}catch(e){}
    var o582 = o421.o143 + o588 + ((o421.o367) ? 1 : 0);
    try {
o421.o366 = ((o421.o143 & 0xF) + (o588 & 0xF) + ((o421.o367) ? 1 : 0) > 0xF);
}catch(e){}
    try {
o421.o367 = (o582 > 0xFF);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
  },
  //RST 0x8
  //#0xCF:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 >> 8);
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 & 0xFF);
}catch(e){}
    try {
o421.o149 = 0x8;
}catch(e){}
  },
  //RET !FC
  //#0xD0:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
if (!o421.o367) {
      try {
o421.o149 = (o421.o579((o421.o150 + 1) & 0xFFFF) << 8) | o421.o390[o421.o150](o421, o421.o150);
}catch(e){}
      try {
o421.o150 = (o421.o150 + 2) & 0xFFFF;
}catch(e){}
      try {
o421.o386 += 12;
}catch(e){}
    }
}catch(e){}
  },
  //POP DE
  //#0xD1:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o146 = o421.o390[o421.o150](o421, o421.o150);
}catch(e){}
    try {
o421.o368 = o421.o579((o421.o150 + 1) & 0xFFFF);
}catch(e){}
    try {
o421.o150 = (o421.o150 + 2) & 0xFFFF;
}catch(e){}
  },
  //JP !FC, nn
  //#0xD2:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
if (!o421.o367) {
      try {
o421.o149 = (o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149);
}catch(e){}
      try {
o421.o386 += 4;
}catch(e){}
    }
    else {
      try {
o421.o149 = (o421.o149 + 2) & 0xFFFF;
}catch(e){}
    }
}catch(e){}
  },
  //0xD3 - Illegal
  //#0xD3:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o113("Illegal op code 0xD3 called, pausing emulation.", 2);
}catch(e){}
    try {
o593();
}catch(e){}
  },
  //CALL !FC, nn
  //#0xD4:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
if (!o421.o367) {
      var o589 = (o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149);
      try {
o421.o149 = (o421.o149 + 2) & 0xFFFF;
}catch(e){}
      try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
      try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 >> 8);
}catch(e){}
      try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
      try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 & 0xFF);
}catch(e){}
      try {
o421.o149 = o589;
}catch(e){}
      try {
o421.o386 += 12;
}catch(e){}
    }
    else {
      try {
o421.o149 = (o421.o149 + 2) & 0xFFFF;
}catch(e){}
    }
}catch(e){}
  },
  //PUSH DE
  //#0xD5:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, o421.o368);
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, o421.o146);
}catch(e){}
  },
  //SUB A, n
  //#0xD6:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 - o421.o390[o421.o149](o421, o421.o149);
    try {
o421.o149 = (o421.o149 + 1) & 0xFFFF;
}catch(e){}
    try {
o421.o366 = ((o421.o143 & 0xF) < (o582 & 0xF));
}catch(e){}
    try {
o421.o367 = (o582 < 0);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o582 == 0);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
  },
  //RST 0x10
  //#0xD7:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 >> 8);
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 & 0xFF);
}catch(e){}
    try {
o421.o149 = 0x10;
}catch(e){}
  },
  //RET FC
  //#0xD8:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
if (o421.o367) {
      try {
o421.o149 = (o421.o579((o421.o150 + 1) & 0xFFFF) << 8) | o421.o390[o421.o150](o421, o421.o150);
}catch(e){}
      try {
o421.o150 = (o421.o150 + 2) & 0xFFFF;
}catch(e){}
      try {
o421.o386 += 12;
}catch(e){}
    }
}catch(e){}
  },
  //RETI
  //#0xD9:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o149 = (o421.o579((o421.o150 + 1) & 0xFFFF) << 8) | o421.o390[o421.o150](o421, o421.o150);
}catch(e){}
    try {
o421.o150 = (o421.o150 + 2) & 0xFFFF;
}catch(e){}
    //Immediate for HALT:
    try {
o421.o497 = (o421.o497 == 2 || o421.o390[o421.o149](o421, o421.o149) == 0x76) ? 1 : 2;
}catch(e){}
  },
  //JP FC, nn
  //#0xDA:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
if (o421.o367) {
      try {
o421.o149 = (o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149);
}catch(e){}
      try {
o421.o386 += 4;
}catch(e){}
    }
    else {
      try {
o421.o149 = (o421.o149 + 2) & 0xFFFF;
}catch(e){}
    }
}catch(e){}
  },
  //0xDB - Illegal
  //#0xDB:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o113("Illegal op code 0xDB called, pausing emulation.", 2);
}catch(e){}
    try {
o593();
}catch(e){}
  },
  //CALL FC, nn
  //#0xDC:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
if (o421.o367) {
      var o589 = (o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149);
      try {
o421.o149 = (o421.o149 + 2) & 0xFFFF;
}catch(e){}
      try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
      try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 >> 8);
}catch(e){}
      try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
      try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 & 0xFF);
}catch(e){}
      try {
o421.o149 = o589;
}catch(e){}
      try {
o421.o386 += 12;
}catch(e){}
    }
    else {
      try {
o421.o149 = (o421.o149 + 2) & 0xFFFF;
}catch(e){}
    }
}catch(e){}
  },
  //0xDD - Illegal
  //#0xDD:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o113("Illegal op code 0xDD called, pausing emulation.", 2);
}catch(e){}
    try {
o593();
}catch(e){}
  },
  //SBC A, n
  //#0xDE:
  function (o421) {try {
"use strict";
}catch(e){}
    var o581 = o421.o390[o421.o149](o421, o421.o149);
    try {
o421.o149 = (o421.o149 + 1) & 0xFFFF;
}catch(e){}
    var o582 = o421.o143 - o581 - ((o421.o367) ? 1 : 0);
    try {
o421.o366 = ((o421.o143 & 0xF) - (o581 & 0xF) - ((o421.o367) ? 1 : 0) < 0);
}catch(e){}
    try {
o421.o367 = (o582 < 0);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
  },
  //RST 0x18
  //#0xDF:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 >> 8);
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 & 0xFF);
}catch(e){}
    try {
o421.o149 = 0x18;
}catch(e){}
  },
  //LDH (n), A
  //#0xE0:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o594(o421.o390[o421.o149](o421, o421.o149), o421.o143);
}catch(e){}
    try {
o421.o149 = (o421.o149 + 1) & 0xFFFF;
}catch(e){}
  },
  //POP HL
  //#0xE1:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 = (o421.o579((o421.o150 + 1) & 0xFFFF) << 8) | o421.o390[o421.o150](o421, o421.o150);
}catch(e){}
    try {
o421.o150 = (o421.o150 + 2) & 0xFFFF;
}catch(e){}
  },
  //LD (0xFF00 + C), A
  //#0xE2:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o393[o421.o145](o421, o421.o145, o421.o143);
}catch(e){}
  },
  //0xE3 - Illegal
  //#0xE3:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o113("Illegal op code 0xE3 called, pausing emulation.", 2);
}catch(e){}
    try {
o593();
}catch(e){}
  },
  //0xE4 - Illegal
  //#0xE4:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o113("Illegal op code 0xE4 called, pausing emulation.", 2);
}catch(e){}
    try {
o593();
}catch(e){}
  },
  //PUSH HL
  //#0xE5:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, o421.o148 >> 8);
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, o421.o148 & 0xFF);
}catch(e){}
  },
  //AND n
  //#0xE6:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 &= o421.o390[o421.o149](o421, o421.o149);
}catch(e){}
    try {
o421.o149 = (o421.o149 + 1) & 0xFFFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = o421.o367 = false;
}catch(e){}
  },
  //RST 0x20
  //#0xE7:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 >> 8);
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 & 0xFF);
}catch(e){}
    try {
o421.o149 = 0x20;
}catch(e){}
  },
  //ADD SP, n
  //#0xE8:
  function (o421) {try {
"use strict";
}catch(e){}
    var o595 = (o421.o390[o421.o149](o421, o421.o149) << 24) >> 24;
    try {
o421.o149 = (o421.o149 + 1) & 0xFFFF;
}catch(e){}
    var o596 = (o421.o150 + o595) & 0xFFFF;
    try {
o595 = o421.o150 ^ o595 ^ o596;
}catch(e){}
    try {
o421.o150 = o596;
}catch(e){}
    try {
o421.o367 = ((o595 & 0x100) == 0x100);
}catch(e){}
    try {
o421.o366 = ((o595 & 0x10) == 0x10);
}catch(e){}
    try {
o421.o364 = o421.o365 = false;
}catch(e){}
  },
  //JP, (HL)
  //#0xE9:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o149 = o421.o148;
}catch(e){}
  },
  //LD n, A
  //#0xEA:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o580((o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149), o421.o143);
}catch(e){}
    try {
o421.o149 = (o421.o149 + 2) & 0xFFFF;
}catch(e){}
  },
  //0xEB - Illegal
  //#0xEB:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o113("Illegal op code 0xEB called, pausing emulation.", 2);
}catch(e){}
    try {
o593();
}catch(e){}
  },
  //0xEC - Illegal
  //#0xEC:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o113("Illegal op code 0xEC called, pausing emulation.", 2);
}catch(e){}
    try {
o593();
}catch(e){}
  },
  //0xED - Illegal
  //#0xED:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o113("Illegal op code 0xED called, pausing emulation.", 2);
}catch(e){}
    try {
o593();
}catch(e){}
  },
  //XOR n
  //#0xEE:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 ^= o421.o390[o421.o149](o421, o421.o149);
}catch(e){}
    try {
o421.o149 = (o421.o149 + 1) & 0xFFFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = o421.o366 = o421.o367 = false;
}catch(e){}
  },
  //RST 0x28
  //#0xEF:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 >> 8);
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 & 0xFF);
}catch(e){}
    try {
o421.o149 = 0x28;
}catch(e){}
  },
  //LDH A, (n)
  //#0xF0:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 = o421.o597(o421.o390[o421.o149](o421, o421.o149));
}catch(e){}
    try {
o421.o149 = (o421.o149 + 1) & 0xFFFF;
}catch(e){}
  },
  //POP AF
  //#0xF1:
  function (o421) {try {
"use strict";
}catch(e){}
    var o581 = o421.o390[o421.o150](o421, o421.o150);
    try {
o421.o364 = (o581 > 0x7F);
}catch(e){}
    try {
o421.o365 = ((o581 & 0x40) == 0x40);
}catch(e){}
    try {
o421.o366 = ((o581 & 0x20) == 0x20);
}catch(e){}
    try {
o421.o367 = ((o581 & 0x10) == 0x10);
}catch(e){}
    try {
o421.o143 = o421.o579((o421.o150 + 1) & 0xFFFF);
}catch(e){}
    try {
o421.o150 = (o421.o150 + 2) & 0xFFFF;
}catch(e){}
  },
  //LD A, (0xFF00 + C)
  //#0xF2:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 = o421.o392[o421.o145](o421, o421.o145);
}catch(e){}
  },
  //DI
  //#0xF3:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o381 = false;
}catch(e){}
    try {
o421.o497 = 0;
}catch(e){}
  },
  //0xF4 - Illegal
  //#0xF4:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o113("Illegal op code 0xF4 called, pausing emulation.", 2);
}catch(e){}
    try {
o593();
}catch(e){}
  },
  //PUSH AF
  //#0xF5:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, o421.o143);
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, ((o421.o364) ? 0x80 : 0) | ((o421.o365) ? 0x40 : 0) | ((o421.o366) ? 0x20 : 0) | ((o421.o367) ? 0x10 : 0));
}catch(e){}
  },
  //OR n
  //#0xF6:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 |= o421.o390[o421.o149](o421, o421.o149);
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o149 = (o421.o149 + 1) & 0xFFFF;
}catch(e){}
    try {
o421.o365 = o421.o367 = o421.o366 = false;
}catch(e){}
  },
  //RST 0x30
  //#0xF7:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 >> 8);
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 & 0xFF);
}catch(e){}
    try {
o421.o149 = 0x30;
}catch(e){}
  },
  //LDHL SP, n
  //#0xF8:
  function (o421) {try {
"use strict";
}catch(e){}
    var o581 = (o421.o390[o421.o149](o421, o421.o149) << 24) >> 24;
    try {
o421.o149 = (o421.o149 + 1) & 0xFFFF;
}catch(e){}
    try {
o421.o148 = (o421.o150 + o581) & 0xFFFF;
}catch(e){}
    try {
o581 = o421.o150 ^ o581 ^ o421.o148;
}catch(e){}
    try {
o421.o367 = ((o581 & 0x100) == 0x100);
}catch(e){}
    try {
o421.o366 = ((o581 & 0x10) == 0x10);
}catch(e){}
    try {
o421.o364 = o421.o365 = false;
}catch(e){}
  },
  //LD SP, HL
  //#0xF9:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o150 = o421.o148;
}catch(e){}
  },
  //LD A, (nn)
  //#0xFA:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 = o421.o579((o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149));
}catch(e){}
    try {
o421.o149 = (o421.o149 + 2) & 0xFFFF;
}catch(e){}
  },
  //EI
  //#0xFB:
  function (o421) {try {
"use strict";
}catch(e){}
    //Immediate for HALT:
    try {
o421.o497 = (o421.o497 == 2 || o421.o390[o421.o149](o421, o421.o149) == 0x76) ? 1 : 2;
}catch(e){}
  },
  //0xFC - Illegal
  //#0xFC:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o113("Illegal op code 0xFC called, pausing emulation.", 2);
}catch(e){}
    try {
o593();
}catch(e){}
  },
  //0xFD - Illegal
  //#0xFD:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o113("Illegal op code 0xFD called, pausing emulation.", 2);
}catch(e){}
    try {
o593();
}catch(e){}
  },
  //CP n
  //#0xFE:
  function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 - o421.o390[o421.o149](o421, o421.o149);
    try {
o421.o149 = (o421.o149 + 1) & 0xFFFF;
}catch(e){}
    try {
o421.o366 = ((o582 & 0xF) > (o421.o143 & 0xF));
}catch(e){}
    try {
o421.o367 = (o582 < 0);
}catch(e){}
    try {
o421.o364 = (o582 == 0);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
  },
  //RST 0x38
  //#0xFF:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 >> 8);
}catch(e){}
    try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
    try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 & 0xFF);
}catch(e){}
    try {
o421.o149 = 0x38;
}catch(e){}
  }
];
}catch(e){}
try {
o360.prototype.o592 = [
  //RLC B
  //#0x00:
  function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = (o421.o144 > 0x7F);
}catch(e){}
    try {
o421.o144 = ((o421.o144 << 1) & 0xFF) | ((o421.o367) ? 1 : 0);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o144 == 0);
}catch(e){}
  }
  //RLC C
  //#0x01:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = (o421.o145 > 0x7F);
}catch(e){}
    try {
o421.o145 = ((o421.o145 << 1) & 0xFF) | ((o421.o367) ? 1 : 0);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o145 == 0);
}catch(e){}
  }
  //RLC D
  //#0x02:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = (o421.o368 > 0x7F);
}catch(e){}
    try {
o421.o368 = ((o421.o368 << 1) & 0xFF) | ((o421.o367) ? 1 : 0);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o368 == 0);
}catch(e){}
  }
  //RLC E
  //#0x03:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = (o421.o146 > 0x7F);
}catch(e){}
    try {
o421.o146 = ((o421.o146 << 1) & 0xFF) | ((o421.o367) ? 1 : 0);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o146 == 0);
}catch(e){}
  }
  //RLC H
  //#0x04:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = (o421.o148 > 0x7FFF);
}catch(e){}
    try {
o421.o148 = ((o421.o148 << 1) & 0xFE00) | ((o421.o367) ? 0x100 : 0) | (o421.o148 & 0xFF);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o148 < 0x100);
}catch(e){}
  }
  //RLC L
  //#0x05:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = ((o421.o148 & 0x80) == 0x80);
}catch(e){}
    try {
o421.o148 = (o421.o148 & 0xFF00) | ((o421.o148 << 1) & 0xFF) | ((o421.o367) ? 1 : 0);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o148 & 0xFF) == 0);
}catch(e){}
  }
  //RLC (HL)
  //#0x06:
  ,function (o421) {try {
"use strict";
}catch(e){}
    var o581 = o421.o390[o421.o148](o421, o421.o148);
    try {
o421.o367 = (o581 > 0x7F);
}catch(e){}
    try {
o581 = ((o581 << 1) & 0xFF) | ((o421.o367) ? 1 : 0);
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o581);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o581 == 0);
}catch(e){}
  }
  //RLC A
  //#0x07:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = (o421.o143 > 0x7F);
}catch(e){}
    try {
o421.o143 = ((o421.o143 << 1) & 0xFF) | ((o421.o367) ? 1 : 0);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
  }
  //RRC B
  //#0x08:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = ((o421.o144 & 0x01) == 0x01);
}catch(e){}
    try {
o421.o144 = ((o421.o367) ? 0x80 : 0) | (o421.o144 >> 1);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o144 == 0);
}catch(e){}
  }
  //RRC C
  //#0x09:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = ((o421.o145 & 0x01) == 0x01);
}catch(e){}
    try {
o421.o145 = ((o421.o367) ? 0x80 : 0) | (o421.o145 >> 1);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o145 == 0);
}catch(e){}
  }
  //RRC D
  //#0x0A:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = ((o421.o368 & 0x01) == 0x01);
}catch(e){}
    try {
o421.o368 = ((o421.o367) ? 0x80 : 0) | (o421.o368 >> 1);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o368 == 0);
}catch(e){}
  }
  //RRC E
  //#0x0B:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = ((o421.o146 & 0x01) == 0x01);
}catch(e){}
    try {
o421.o146 = ((o421.o367) ? 0x80 : 0) | (o421.o146 >> 1);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o146 == 0);
}catch(e){}
  }
  //RRC H
  //#0x0C:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = ((o421.o148 & 0x0100) == 0x0100);
}catch(e){}
    try {
o421.o148 = ((o421.o367) ? 0x8000 : 0) | ((o421.o148 >> 1) & 0xFF00) | (o421.o148 & 0xFF);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o148 < 0x100);
}catch(e){}
  }
  //RRC L
  //#0x0D:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = ((o421.o148 & 0x01) == 0x01);
}catch(e){}
    try {
o421.o148 = (o421.o148 & 0xFF00) | ((o421.o367) ? 0x80 : 0) | ((o421.o148 & 0xFF) >> 1);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o148 & 0xFF) == 0);
}catch(e){}
  }
  //RRC (HL)
  //#0x0E:
  ,function (o421) {try {
"use strict";
}catch(e){}
    var o581 = o421.o390[o421.o148](o421, o421.o148);
    try {
o421.o367 = ((o581 & 0x01) == 0x01);
}catch(e){}
    try {
o581 = ((o421.o367) ? 0x80 : 0) | (o581 >> 1);
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o581);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o581 == 0);
}catch(e){}
  }
  //RRC A
  //#0x0F:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = ((o421.o143 & 0x01) == 0x01);
}catch(e){}
    try {
o421.o143 = ((o421.o367) ? 0x80 : 0) | (o421.o143 >> 1);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
  }
  //RL B
  //#0x10:
  ,function (o421) {try {
"use strict";
}catch(e){}
    var o598 = (o421.o144 > 0x7F);
    try {
o421.o144 = ((o421.o144 << 1) & 0xFF) | ((o421.o367) ? 1 : 0);
}catch(e){}
    try {
o421.o367 = o598;
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o144 == 0);
}catch(e){}
  }
  //RL C
  //#0x11:
  ,function (o421) {try {
"use strict";
}catch(e){}
    var o598 = (o421.o145 > 0x7F);
    try {
o421.o145 = ((o421.o145 << 1) & 0xFF) | ((o421.o367) ? 1 : 0);
}catch(e){}
    try {
o421.o367 = o598;
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o145 == 0);
}catch(e){}
  }
  //RL D
  //#0x12:
  ,function (o421) {try {
"use strict";
}catch(e){}
    var o598 = (o421.o368 > 0x7F);
    try {
o421.o368 = ((o421.o368 << 1) & 0xFF) | ((o421.o367) ? 1 : 0);
}catch(e){}
    try {
o421.o367 = o598;
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o368 == 0);
}catch(e){}
  }
  //RL E
  //#0x13:
  ,function (o421) {try {
"use strict";
}catch(e){}
    var o598 = (o421.o146 > 0x7F);
    try {
o421.o146 = ((o421.o146 << 1) & 0xFF) | ((o421.o367) ? 1 : 0);
}catch(e){}
    try {
o421.o367 = o598;
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o146 == 0);
}catch(e){}
  }
  //RL H
  //#0x14:
  ,function (o421) {try {
"use strict";
}catch(e){}
    var o598 = (o421.o148 > 0x7FFF);
    try {
o421.o148 = ((o421.o148 << 1) & 0xFE00) | ((o421.o367) ? 0x100 : 0) | (o421.o148 & 0xFF);
}catch(e){}
    try {
o421.o367 = o598;
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o148 < 0x100);
}catch(e){}
  }
  //RL L
  //#0x15:
  ,function (o421) {try {
"use strict";
}catch(e){}
    var o598 = ((o421.o148 & 0x80) == 0x80);
    try {
o421.o148 = (o421.o148 & 0xFF00) | ((o421.o148 << 1) & 0xFF) | ((o421.o367) ? 1 : 0);
}catch(e){}
    try {
o421.o367 = o598;
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o148 & 0xFF) == 0);
}catch(e){}
  }
  //RL (HL)
  //#0x16:
  ,function (o421) {try {
"use strict";
}catch(e){}
    var o581 = o421.o390[o421.o148](o421, o421.o148);
    var o598 = (o581 > 0x7F);
    try {
o581 = ((o581 << 1) & 0xFF) | ((o421.o367) ? 1 : 0);
}catch(e){}
    try {
o421.o367 = o598;
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o581);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o581 == 0);
}catch(e){}
  }
  //RL A
  //#0x17:
  ,function (o421) {try {
"use strict";
}catch(e){}
    var o598 = (o421.o143 > 0x7F);
    try {
o421.o143 = ((o421.o143 << 1) & 0xFF) | ((o421.o367) ? 1 : 0);
}catch(e){}
    try {
o421.o367 = o598;
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
  }
  //RR B
  //#0x18:
  ,function (o421) {try {
"use strict";
}catch(e){}
    var o598 = ((o421.o144 & 0x01) == 0x01);
    try {
o421.o144 = ((o421.o367) ? 0x80 : 0) | (o421.o144 >> 1);
}catch(e){}
    try {
o421.o367 = o598;
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o144 == 0);
}catch(e){}
  }
  //RR C
  //#0x19:
  ,function (o421) {try {
"use strict";
}catch(e){}
    var o598 = ((o421.o145 & 0x01) == 0x01);
    try {
o421.o145 = ((o421.o367) ? 0x80 : 0) | (o421.o145 >> 1);
}catch(e){}
    try {
o421.o367 = o598;
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o145 == 0);
}catch(e){}
  }
  //RR D
  //#0x1A:
  ,function (o421) {try {
"use strict";
}catch(e){}
    var o598 = ((o421.o368 & 0x01) == 0x01);
    try {
o421.o368 = ((o421.o367) ? 0x80 : 0) | (o421.o368 >> 1);
}catch(e){}
    try {
o421.o367 = o598;
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o368 == 0);
}catch(e){}
  }
  //RR E
  //#0x1B:
  ,function (o421) {try {
"use strict";
}catch(e){}
    var o598 = ((o421.o146 & 0x01) == 0x01);
    try {
o421.o146 = ((o421.o367) ? 0x80 : 0) | (o421.o146 >> 1);
}catch(e){}
    try {
o421.o367 = o598;
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o146 == 0);
}catch(e){}
  }
  //RR H
  //#0x1C:
  ,function (o421) {try {
"use strict";
}catch(e){}
    var o598 = ((o421.o148 & 0x0100) == 0x0100);
    try {
o421.o148 = ((o421.o367) ? 0x8000 : 0) | ((o421.o148 >> 1) & 0xFF00) | (o421.o148 & 0xFF);
}catch(e){}
    try {
o421.o367 = o598;
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o148 < 0x100);
}catch(e){}
  }
  //RR L
  //#0x1D:
  ,function (o421) {try {
"use strict";
}catch(e){}
    var o598 = ((o421.o148 & 0x01) == 0x01);
    try {
o421.o148 = (o421.o148 & 0xFF00) | ((o421.o367) ? 0x80 : 0) | ((o421.o148 & 0xFF) >> 1);
}catch(e){}
    try {
o421.o367 = o598;
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o148 & 0xFF) == 0);
}catch(e){}
  }
  //RR (HL)
  //#0x1E:
  ,function (o421) {try {
"use strict";
}catch(e){}
    var o581 = o421.o390[o421.o148](o421, o421.o148);
    var o598 = ((o581 & 0x01) == 0x01);
    try {
o581 = ((o421.o367) ? 0x80 : 0) | (o581 >> 1);
}catch(e){}
    try {
o421.o367 = o598;
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o581);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o581 == 0);
}catch(e){}
  }
  //RR A
  //#0x1F:
  ,function (o421) {try {
"use strict";
}catch(e){}
    var o598 = ((o421.o143 & 0x01) == 0x01);
    try {
o421.o143 = ((o421.o367) ? 0x80 : 0) | (o421.o143 >> 1);
}catch(e){}
    try {
o421.o367 = o598;
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
  }
  //SLA B
  //#0x20:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = (o421.o144 > 0x7F);
}catch(e){}
    try {
o421.o144 = (o421.o144 << 1) & 0xFF;
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o144 == 0);
}catch(e){}
  }
  //SLA C
  //#0x21:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = (o421.o145 > 0x7F);
}catch(e){}
    try {
o421.o145 = (o421.o145 << 1) & 0xFF;
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o145 == 0);
}catch(e){}
  }
  //SLA D
  //#0x22:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = (o421.o368 > 0x7F);
}catch(e){}
    try {
o421.o368 = (o421.o368 << 1) & 0xFF;
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o368 == 0);
}catch(e){}
  }
  //SLA E
  //#0x23:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = (o421.o146 > 0x7F);
}catch(e){}
    try {
o421.o146 = (o421.o146 << 1) & 0xFF;
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o146 == 0);
}catch(e){}
  }
  //SLA H
  //#0x24:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = (o421.o148 > 0x7FFF);
}catch(e){}
    try {
o421.o148 = ((o421.o148 << 1) & 0xFE00) | (o421.o148 & 0xFF);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o148 < 0x100);
}catch(e){}
  }
  //SLA L
  //#0x25:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = ((o421.o148 & 0x0080) == 0x0080);
}catch(e){}
    try {
o421.o148 = (o421.o148 & 0xFF00) | ((o421.o148 << 1) & 0xFF);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o148 & 0xFF) == 0);
}catch(e){}
  }
  //SLA (HL)
  //#0x26:
  ,function (o421) {try {
"use strict";
}catch(e){}
    var o581 = o421.o390[o421.o148](o421, o421.o148);
    try {
o421.o367 = (o581 > 0x7F);
}catch(e){}
    try {
o581 = (o581 << 1) & 0xFF;
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o581);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o581 == 0);
}catch(e){}
  }
  //SLA A
  //#0x27:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = (o421.o143 > 0x7F);
}catch(e){}
    try {
o421.o143 = (o421.o143 << 1) & 0xFF;
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
  }
  //SRA B
  //#0x28:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = ((o421.o144 & 0x01) == 0x01);
}catch(e){}
    try {
o421.o144 = (o421.o144 & 0x80) | (o421.o144 >> 1);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o144 == 0);
}catch(e){}
  }
  //SRA C
  //#0x29:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = ((o421.o145 & 0x01) == 0x01);
}catch(e){}
    try {
o421.o145 = (o421.o145 & 0x80) | (o421.o145 >> 1);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o145 == 0);
}catch(e){}
  }
  //SRA D
  //#0x2A:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = ((o421.o368 & 0x01) == 0x01);
}catch(e){}
    try {
o421.o368 = (o421.o368 & 0x80) | (o421.o368 >> 1);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o368 == 0);
}catch(e){}
  }
  //SRA E
  //#0x2B:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = ((o421.o146 & 0x01) == 0x01);
}catch(e){}
    try {
o421.o146 = (o421.o146 & 0x80) | (o421.o146 >> 1);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o146 == 0);
}catch(e){}
  }
  //SRA H
  //#0x2C:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = ((o421.o148 & 0x0100) == 0x0100);
}catch(e){}
    try {
o421.o148 = ((o421.o148 >> 1) & 0xFF00) | (o421.o148 & 0x80FF);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o148 < 0x100);
}catch(e){}
  }
  //SRA L
  //#0x2D:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = ((o421.o148 & 0x0001) == 0x0001);
}catch(e){}
    try {
o421.o148 = (o421.o148 & 0xFF80) | ((o421.o148 & 0xFF) >> 1);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o148 & 0xFF) == 0);
}catch(e){}
  }
  //SRA (HL)
  //#0x2E:
  ,function (o421) {try {
"use strict";
}catch(e){}
    var o581 = o421.o390[o421.o148](o421, o421.o148);
    try {
o421.o367 = ((o581 & 0x01) == 0x01);
}catch(e){}
    try {
o581 = (o581 & 0x80) | (o581 >> 1);
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o581);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o581 == 0);
}catch(e){}
  }
  //SRA A
  //#0x2F:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = ((o421.o143 & 0x01) == 0x01);
}catch(e){}
    try {
o421.o143 = (o421.o143 & 0x80) | (o421.o143 >> 1);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
  }
  //SWAP B
  //#0x30:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o144 = ((o421.o144 & 0xF) << 4) | (o421.o144 >> 4);
}catch(e){}
    try {
o421.o364 = (o421.o144 == 0);
}catch(e){}
    try {
o421.o367 = o421.o366 = o421.o365 = false;
}catch(e){}
  }
  //SWAP C
  //#0x31:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 = ((o421.o145 & 0xF) << 4) | (o421.o145 >> 4);
}catch(e){}
    try {
o421.o364 = (o421.o145 == 0);
}catch(e){}
    try {
o421.o367 = o421.o366 = o421.o365 = false;
}catch(e){}
  }
  //SWAP D
  //#0x32:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o368 = ((o421.o368 & 0xF) << 4) | (o421.o368 >> 4);
}catch(e){}
    try {
o421.o364 = (o421.o368 == 0);
}catch(e){}
    try {
o421.o367 = o421.o366 = o421.o365 = false;
}catch(e){}
  }
  //SWAP E
  //#0x33:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o146 = ((o421.o146 & 0xF) << 4) | (o421.o146 >> 4);
}catch(e){}
    try {
o421.o364 = (o421.o146 == 0);
}catch(e){}
    try {
o421.o367 = o421.o366 = o421.o365 = false;
}catch(e){}
  }
  //SWAP H
  //#0x34:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 = ((o421.o148 & 0xF00) << 4) | ((o421.o148 & 0xF000) >> 4) | (o421.o148 & 0xFF);
}catch(e){}
    try {
o421.o364 = (o421.o148 < 0x100);
}catch(e){}
    try {
o421.o367 = o421.o366 = o421.o365 = false;
}catch(e){}
  }
  //SWAP L
  //#0x35:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 = (o421.o148 & 0xFF00) | ((o421.o148 & 0xF) << 4) | ((o421.o148 & 0xF0) >> 4);
}catch(e){}
    try {
o421.o364 = ((o421.o148 & 0xFF) == 0);
}catch(e){}
    try {
o421.o367 = o421.o366 = o421.o365 = false;
}catch(e){}
  }
  //SWAP (HL)
  //#0x36:
  ,function (o421) {try {
"use strict";
}catch(e){}
    var o581 = o421.o390[o421.o148](o421, o421.o148);
    try {
o581 = ((o581 & 0xF) << 4) | (o581 >> 4);
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o581);
}catch(e){}
    try {
o421.o364 = (o581 == 0);
}catch(e){}
    try {
o421.o367 = o421.o366 = o421.o365 = false;
}catch(e){}
  }
  //SWAP A
  //#0x37:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 = ((o421.o143 & 0xF) << 4) | (o421.o143 >> 4);
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o367 = o421.o366 = o421.o365 = false;
}catch(e){}
  }
  //SRL B
  //#0x38:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = ((o421.o144 & 0x01) == 0x01);
}catch(e){}
    try {
o421.o144 >>= 1;
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o144 == 0);
}catch(e){}
  }
  //SRL C
  //#0x39:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = ((o421.o145 & 0x01) == 0x01);
}catch(e){}
    try {
o421.o145 >>= 1;
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o145 == 0);
}catch(e){}
  }
  //SRL D
  //#0x3A:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = ((o421.o368 & 0x01) == 0x01);
}catch(e){}
    try {
o421.o368 >>= 1;
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o368 == 0);
}catch(e){}
  }
  //SRL E
  //#0x3B:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = ((o421.o146 & 0x01) == 0x01);
}catch(e){}
    try {
o421.o146 >>= 1;
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o146 == 0);
}catch(e){}
  }
  //SRL H
  //#0x3C:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = ((o421.o148 & 0x0100) == 0x0100);
}catch(e){}
    try {
o421.o148 = ((o421.o148 >> 1) & 0xFF00) | (o421.o148 & 0xFF);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o148 < 0x100);
}catch(e){}
  }
  //SRL L
  //#0x3D:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = ((o421.o148 & 0x0001) == 0x0001);
}catch(e){}
    try {
o421.o148 = (o421.o148 & 0xFF00) | ((o421.o148 & 0xFF) >> 1);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o148 & 0xFF) == 0);
}catch(e){}
  }
  //SRL (HL)
  //#0x3E:
  ,function (o421) {try {
"use strict";
}catch(e){}
    var o581 = o421.o390[o421.o148](o421, o421.o148);
    try {
o421.o367 = ((o581 & 0x01) == 0x01);
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o581 >> 1);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o581 < 2);
}catch(e){}
  }
  //SRL A
  //#0x3F:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o367 = ((o421.o143 & 0x01) == 0x01);
}catch(e){}
    try {
o421.o143 >>= 1;
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
  }
  //BIT 0, B
  //#0x40:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o144 & 0x01) == 0);
}catch(e){}
  }
  //BIT 0, C
  //#0x41:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o145 & 0x01) == 0);
}catch(e){}
  }
  //BIT 0, D
  //#0x42:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o368 & 0x01) == 0);
}catch(e){}
  }
  //BIT 0, E
  //#0x43:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o146 & 0x01) == 0);
}catch(e){}
  }
  //BIT 0, H
  //#0x44:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o148 & 0x0100) == 0);
}catch(e){}
  }
  //BIT 0, L
  //#0x45:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o148 & 0x0001) == 0);
}catch(e){}
  }
  //BIT 0, (HL)
  //#0x46:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o390[o421.o148](o421, o421.o148) & 0x01) == 0);
}catch(e){}
  }
  //BIT 0, A
  //#0x47:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o143 & 0x01) == 0);
}catch(e){}
  }
  //BIT 1, B
  //#0x48:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o144 & 0x02) == 0);
}catch(e){}
  }
  //BIT 1, C
  //#0x49:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o145 & 0x02) == 0);
}catch(e){}
  }
  //BIT 1, D
  //#0x4A:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o368 & 0x02) == 0);
}catch(e){}
  }
  //BIT 1, E
  //#0x4B:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o146 & 0x02) == 0);
}catch(e){}
  }
  //BIT 1, H
  //#0x4C:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o148 & 0x0200) == 0);
}catch(e){}
  }
  //BIT 1, L
  //#0x4D:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o148 & 0x0002) == 0);
}catch(e){}
  }
  //BIT 1, (HL)
  //#0x4E:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o390[o421.o148](o421, o421.o148) & 0x02) == 0);
}catch(e){}
  }
  //BIT 1, A
  //#0x4F:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o143 & 0x02) == 0);
}catch(e){}
  }
  //BIT 2, B
  //#0x50:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o144 & 0x04) == 0);
}catch(e){}
  }
  //BIT 2, C
  //#0x51:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o145 & 0x04) == 0);
}catch(e){}
  }
  //BIT 2, D
  //#0x52:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o368 & 0x04) == 0);
}catch(e){}
  }
  //BIT 2, E
  //#0x53:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o146 & 0x04) == 0);
}catch(e){}
  }
  //BIT 2, H
  //#0x54:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o148 & 0x0400) == 0);
}catch(e){}
  }
  //BIT 2, L
  //#0x55:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o148 & 0x0004) == 0);
}catch(e){}
  }
  //BIT 2, (HL)
  //#0x56:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o390[o421.o148](o421, o421.o148) & 0x04) == 0);
}catch(e){}
  }
  //BIT 2, A
  //#0x57:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o143 & 0x04) == 0);
}catch(e){}
  }
  //BIT 3, B
  //#0x58:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o144 & 0x08) == 0);
}catch(e){}
  }
  //BIT 3, C
  //#0x59:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o145 & 0x08) == 0);
}catch(e){}
  }
  //BIT 3, D
  //#0x5A:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o368 & 0x08) == 0);
}catch(e){}
  }
  //BIT 3, E
  //#0x5B:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o146 & 0x08) == 0);
}catch(e){}
  }
  //BIT 3, H
  //#0x5C:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o148 & 0x0800) == 0);
}catch(e){}
  }
  //BIT 3, L
  //#0x5D:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o148 & 0x0008) == 0);
}catch(e){}
  }
  //BIT 3, (HL)
  //#0x5E:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o390[o421.o148](o421, o421.o148) & 0x08) == 0);
}catch(e){}
  }
  //BIT 3, A
  //#0x5F:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o143 & 0x08) == 0);
}catch(e){}
  }
  //BIT 4, B
  //#0x60:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o144 & 0x10) == 0);
}catch(e){}
  }
  //BIT 4, C
  //#0x61:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o145 & 0x10) == 0);
}catch(e){}
  }
  //BIT 4, D
  //#0x62:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o368 & 0x10) == 0);
}catch(e){}
  }
  //BIT 4, E
  //#0x63:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o146 & 0x10) == 0);
}catch(e){}
  }
  //BIT 4, H
  //#0x64:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o148 & 0x1000) == 0);
}catch(e){}
  }
  //BIT 4, L
  //#0x65:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o148 & 0x0010) == 0);
}catch(e){}
  }
  //BIT 4, (HL)
  //#0x66:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o390[o421.o148](o421, o421.o148) & 0x10) == 0);
}catch(e){}
  }
  //BIT 4, A
  //#0x67:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o143 & 0x10) == 0);
}catch(e){}
  }
  //BIT 5, B
  //#0x68:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o144 & 0x20) == 0);
}catch(e){}
  }
  //BIT 5, C
  //#0x69:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o145 & 0x20) == 0);
}catch(e){}
  }
  //BIT 5, D
  //#0x6A:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o368 & 0x20) == 0);
}catch(e){}
  }
  //BIT 5, E
  //#0x6B:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o146 & 0x20) == 0);
}catch(e){}
  }
  //BIT 5, H
  //#0x6C:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o148 & 0x2000) == 0);
}catch(e){}
  }
  //BIT 5, L
  //#0x6D:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o148 & 0x0020) == 0);
}catch(e){}
  }
  //BIT 5, (HL)
  //#0x6E:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o390[o421.o148](o421, o421.o148) & 0x20) == 0);
}catch(e){}
  }
  //BIT 5, A
  //#0x6F:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o143 & 0x20) == 0);
}catch(e){}
  }
  //BIT 6, B
  //#0x70:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o144 & 0x40) == 0);
}catch(e){}
  }
  //BIT 6, C
  //#0x71:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o145 & 0x40) == 0);
}catch(e){}
  }
  //BIT 6, D
  //#0x72:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o368 & 0x40) == 0);
}catch(e){}
  }
  //BIT 6, E
  //#0x73:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o146 & 0x40) == 0);
}catch(e){}
  }
  //BIT 6, H
  //#0x74:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o148 & 0x4000) == 0);
}catch(e){}
  }
  //BIT 6, L
  //#0x75:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o148 & 0x0040) == 0);
}catch(e){}
  }
  //BIT 6, (HL)
  //#0x76:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o390[o421.o148](o421, o421.o148) & 0x40) == 0);
}catch(e){}
  }
  //BIT 6, A
  //#0x77:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o143 & 0x40) == 0);
}catch(e){}
  }
  //BIT 7, B
  //#0x78:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o144 & 0x80) == 0);
}catch(e){}
  }
  //BIT 7, C
  //#0x79:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o145 & 0x80) == 0);
}catch(e){}
  }
  //BIT 7, D
  //#0x7A:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o368 & 0x80) == 0);
}catch(e){}
  }
  //BIT 7, E
  //#0x7B:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o146 & 0x80) == 0);
}catch(e){}
  }
  //BIT 7, H
  //#0x7C:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o148 & 0x8000) == 0);
}catch(e){}
  }
  //BIT 7, L
  //#0x7D:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o148 & 0x0080) == 0);
}catch(e){}
  }
  //BIT 7, (HL)
  //#0x7E:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o390[o421.o148](o421, o421.o148) & 0x80) == 0);
}catch(e){}
  }
  //BIT 7, A
  //#0x7F:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o143 & 0x80) == 0);
}catch(e){}
  }
  //RES 0, B
  //#0x80:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o144 &= 0xFE;
}catch(e){}
  }
  //RES 0, C
  //#0x81:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 &= 0xFE;
}catch(e){}
  }
  //RES 0, D
  //#0x82:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o368 &= 0xFE;
}catch(e){}
  }
  //RES 0, E
  //#0x83:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o146 &= 0xFE;
}catch(e){}
  }
  //RES 0, H
  //#0x84:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 &= 0xFEFF;
}catch(e){}
  }
  //RES 0, L
  //#0x85:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 &= 0xFFFE;
}catch(e){}
  }
  //RES 0, (HL)
  //#0x86:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) & 0xFE);
}catch(e){}
  }
  //RES 0, A
  //#0x87:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 &= 0xFE;
}catch(e){}
  }
  //RES 1, B
  //#0x88:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o144 &= 0xFD;
}catch(e){}
  }
  //RES 1, C
  //#0x89:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 &= 0xFD;
}catch(e){}
  }
  //RES 1, D
  //#0x8A:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o368 &= 0xFD;
}catch(e){}
  }
  //RES 1, E
  //#0x8B:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o146 &= 0xFD;
}catch(e){}
  }
  //RES 1, H
  //#0x8C:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 &= 0xFDFF;
}catch(e){}
  }
  //RES 1, L
  //#0x8D:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 &= 0xFFFD;
}catch(e){}
  }
  //RES 1, (HL)
  //#0x8E:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) & 0xFD);
}catch(e){}
  }
  //RES 1, A
  //#0x8F:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 &= 0xFD;
}catch(e){}
  }
  //RES 2, B
  //#0x90:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o144 &= 0xFB;
}catch(e){}
  }
  //RES 2, C
  //#0x91:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 &= 0xFB;
}catch(e){}
  }
  //RES 2, D
  //#0x92:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o368 &= 0xFB;
}catch(e){}
  }
  //RES 2, E
  //#0x93:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o146 &= 0xFB;
}catch(e){}
  }
  //RES 2, H
  //#0x94:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 &= 0xFBFF;
}catch(e){}
  }
  //RES 2, L
  //#0x95:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 &= 0xFFFB;
}catch(e){}
  }
  //RES 2, (HL)
  //#0x96:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) & 0xFB);
}catch(e){}
  }
  //RES 2, A
  //#0x97:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 &= 0xFB;
}catch(e){}
  }
  //RES 3, B
  //#0x98:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o144 &= 0xF7;
}catch(e){}
  }
  //RES 3, C
  //#0x99:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 &= 0xF7;
}catch(e){}
  }
  //RES 3, D
  //#0x9A:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o368 &= 0xF7;
}catch(e){}
  }
  //RES 3, E
  //#0x9B:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o146 &= 0xF7;
}catch(e){}
  }
  //RES 3, H
  //#0x9C:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 &= 0xF7FF;
}catch(e){}
  }
  //RES 3, L
  //#0x9D:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 &= 0xFFF7;
}catch(e){}
  }
  //RES 3, (HL)
  //#0x9E:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) & 0xF7);
}catch(e){}
  }
  //RES 3, A
  //#0x9F:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 &= 0xF7;
}catch(e){}
  }
  //RES 3, B
  //#0xA0:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o144 &= 0xEF;
}catch(e){}
  }
  //RES 4, C
  //#0xA1:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 &= 0xEF;
}catch(e){}
  }
  //RES 4, D
  //#0xA2:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o368 &= 0xEF;
}catch(e){}
  }
  //RES 4, E
  //#0xA3:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o146 &= 0xEF;
}catch(e){}
  }
  //RES 4, H
  //#0xA4:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 &= 0xEFFF;
}catch(e){}
  }
  //RES 4, L
  //#0xA5:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 &= 0xFFEF;
}catch(e){}
  }
  //RES 4, (HL)
  //#0xA6:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) & 0xEF);
}catch(e){}
  }
  //RES 4, A
  //#0xA7:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 &= 0xEF;
}catch(e){}
  }
  //RES 5, B
  //#0xA8:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o144 &= 0xDF;
}catch(e){}
  }
  //RES 5, C
  //#0xA9:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 &= 0xDF;
}catch(e){}
  }
  //RES 5, D
  //#0xAA:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o368 &= 0xDF;
}catch(e){}
  }
  //RES 5, E
  //#0xAB:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o146 &= 0xDF;
}catch(e){}
  }
  //RES 5, H
  //#0xAC:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 &= 0xDFFF;
}catch(e){}
  }
  //RES 5, L
  //#0xAD:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 &= 0xFFDF;
}catch(e){}
  }
  //RES 5, (HL)
  //#0xAE:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) & 0xDF);
}catch(e){}
  }
  //RES 5, A
  //#0xAF:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 &= 0xDF;
}catch(e){}
  }
  //RES 6, B
  //#0xB0:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o144 &= 0xBF;
}catch(e){}
  }
  //RES 6, C
  //#0xB1:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 &= 0xBF;
}catch(e){}
  }
  //RES 6, D
  //#0xB2:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o368 &= 0xBF;
}catch(e){}
  }
  //RES 6, E
  //#0xB3:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o146 &= 0xBF;
}catch(e){}
  }
  //RES 6, H
  //#0xB4:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 &= 0xBFFF;
}catch(e){}
  }
  //RES 6, L
  //#0xB5:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 &= 0xFFBF;
}catch(e){}
  }
  //RES 6, (HL)
  //#0xB6:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) & 0xBF);
}catch(e){}
  }
  //RES 6, A
  //#0xB7:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 &= 0xBF;
}catch(e){}
  }
  //RES 7, B
  //#0xB8:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o144 &= 0x7F;
}catch(e){}
  }
  //RES 7, C
  //#0xB9:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 &= 0x7F;
}catch(e){}
  }
  //RES 7, D
  //#0xBA:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o368 &= 0x7F;
}catch(e){}
  }
  //RES 7, E
  //#0xBB:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o146 &= 0x7F;
}catch(e){}
  }
  //RES 7, H
  //#0xBC:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 &= 0x7FFF;
}catch(e){}
  }
  //RES 7, L
  //#0xBD:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 &= 0xFF7F;
}catch(e){}
  }
  //RES 7, (HL)
  //#0xBE:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) & 0x7F);
}catch(e){}
  }
  //RES 7, A
  //#0xBF:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 &= 0x7F;
}catch(e){}
  }
  //SET 0, B
  //#0xC0:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o144 |= 0x01;
}catch(e){}
  }
  //SET 0, C
  //#0xC1:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 |= 0x01;
}catch(e){}
  }
  //SET 0, D
  //#0xC2:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o368 |= 0x01;
}catch(e){}
  }
  //SET 0, E
  //#0xC3:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o146 |= 0x01;
}catch(e){}
  }
  //SET 0, H
  //#0xC4:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 |= 0x0100;
}catch(e){}
  }
  //SET 0, L
  //#0xC5:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 |= 0x01;
}catch(e){}
  }
  //SET 0, (HL)
  //#0xC6:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) | 0x01);
}catch(e){}
  }
  //SET 0, A
  //#0xC7:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 |= 0x01;
}catch(e){}
  }
  //SET 1, B
  //#0xC8:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o144 |= 0x02;
}catch(e){}
  }
  //SET 1, C
  //#0xC9:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 |= 0x02;
}catch(e){}
  }
  //SET 1, D
  //#0xCA:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o368 |= 0x02;
}catch(e){}
  }
  //SET 1, E
  //#0xCB:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o146 |= 0x02;
}catch(e){}
  }
  //SET 1, H
  //#0xCC:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 |= 0x0200;
}catch(e){}
  }
  //SET 1, L
  //#0xCD:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 |= 0x02;
}catch(e){}
  }
  //SET 1, (HL)
  //#0xCE:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) | 0x02);
}catch(e){}
  }
  //SET 1, A
  //#0xCF:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 |= 0x02;
}catch(e){}
  }
  //SET 2, B
  //#0xD0:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o144 |= 0x04;
}catch(e){}
  }
  //SET 2, C
  //#0xD1:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 |= 0x04;
}catch(e){}
  }
  //SET 2, D
  //#0xD2:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o368 |= 0x04;
}catch(e){}
  }
  //SET 2, E
  //#0xD3:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o146 |= 0x04;
}catch(e){}
  }
  //SET 2, H
  //#0xD4:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 |= 0x0400;
}catch(e){}
  }
  //SET 2, L
  //#0xD5:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 |= 0x04;
}catch(e){}
  }
  //SET 2, (HL)
  //#0xD6:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) | 0x04);
}catch(e){}
  }
  //SET 2, A
  //#0xD7:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 |= 0x04;
}catch(e){}
  }
  //SET 3, B
  //#0xD8:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o144 |= 0x08;
}catch(e){}
  }
  //SET 3, C
  //#0xD9:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 |= 0x08;
}catch(e){}
  }
  //SET 3, D
  //#0xDA:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o368 |= 0x08;
}catch(e){}
  }
  //SET 3, E
  //#0xDB:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o146 |= 0x08;
}catch(e){}
  }
  //SET 3, H
  //#0xDC:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 |= 0x0800;
}catch(e){}
  }
  //SET 3, L
  //#0xDD:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 |= 0x08;
}catch(e){}
  }
  //SET 3, (HL)
  //#0xDE:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) | 0x08);
}catch(e){}
  }
  //SET 3, A
  //#0xDF:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 |= 0x08;
}catch(e){}
  }
  //SET 4, B
  //#0xE0:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o144 |= 0x10;
}catch(e){}
  }
  //SET 4, C
  //#0xE1:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 |= 0x10;
}catch(e){}
  }
  //SET 4, D
  //#0xE2:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o368 |= 0x10;
}catch(e){}
  }
  //SET 4, E
  //#0xE3:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o146 |= 0x10;
}catch(e){}
  }
  //SET 4, H
  //#0xE4:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 |= 0x1000;
}catch(e){}
  }
  //SET 4, L
  //#0xE5:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 |= 0x10;
}catch(e){}
  }
  //SET 4, (HL)
  //#0xE6:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) | 0x10);
}catch(e){}
  }
  //SET 4, A
  //#0xE7:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 |= 0x10;
}catch(e){}
  }
  //SET 5, B
  //#0xE8:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o144 |= 0x20;
}catch(e){}
  }
  //SET 5, C
  //#0xE9:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 |= 0x20;
}catch(e){}
  }
  //SET 5, D
  //#0xEA:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o368 |= 0x20;
}catch(e){}
  }
  //SET 5, E
  //#0xEB:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o146 |= 0x20;
}catch(e){}
  }
  //SET 5, H
  //#0xEC:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 |= 0x2000;
}catch(e){}
  }
  //SET 5, L
  //#0xED:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 |= 0x20;
}catch(e){}
  }
  //SET 5, (HL)
  //#0xEE:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) | 0x20);
}catch(e){}
  }
  //SET 5, A
  //#0xEF:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 |= 0x20;
}catch(e){}
  }
  //SET 6, B
  //#0xF0:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o144 |= 0x40;
}catch(e){}
  }
  //SET 6, C
  //#0xF1:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 |= 0x40;
}catch(e){}
  }
  //SET 6, D
  //#0xF2:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o368 |= 0x40;
}catch(e){}
  }
  //SET 6, E
  //#0xF3:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o146 |= 0x40;
}catch(e){}
  }
  //SET 6, H
  //#0xF4:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 |= 0x4000;
}catch(e){}
  }
  //SET 6, L
  //#0xF5:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 |= 0x40;
}catch(e){}
  }
  //SET 6, (HL)
  //#0xF6:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) | 0x40);
}catch(e){}
  }
  //SET 6, A
  //#0xF7:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 |= 0x40;
}catch(e){}
  }
  //SET 7, B
  //#0xF8:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o144 |= 0x80;
}catch(e){}
  }
  //SET 7, C
  //#0xF9:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 |= 0x80;
}catch(e){}
  }
  //SET 7, D
  //#0xFA:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o368 |= 0x80;
}catch(e){}
  }
  //SET 7, E
  //#0xFB:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o146 |= 0x80;
}catch(e){}
  }
  //SET 7, H
  //#0xFC:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 |= 0x8000;
}catch(e){}
  }
  //SET 7, L
  //#0xFD:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 |= 0x80;
}catch(e){}
  }
  //SET 7, (HL)
  //#0xFE:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o421.o390[o421.o148](o421, o421.o148) | 0x80);
}catch(e){}
  }
  //SET 7, A
  //#0xFF:
  ,function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o143 |= 0x80;
}catch(e){}
  }
];
}catch(e){}
try {
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
}catch(e){}
try {
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
}catch(e){}
try {
o360.prototype.o600 = function () {try {
"use strict";
}catch(e){}
  try {
if (!this.o601 || this.o157.length == 0) {
    //No battery backup...
    try {
return [];
}catch(e){}
  }
  else {
    //Return the MBC RAM for backup...
    try {
return this.o152(this.o157);
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o602 = function () {try {
"use strict";
}catch(e){}
  try {
if (!this.o519) {
    //No battery backup...
    try {
return [];
}catch(e){}
  }
  else {
    //Return the MBC RAM for backup...
    try {
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
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o603 = function () {try {
"use strict";
}catch(e){}
  try {
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
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o660 = function (o661) {try {
"use strict";
}catch(e){}
  var index = 0;
  var o142 = o661.slice(0);
  try {
this.o153 = this.o662(o142[index++], "uint8");
}catch(e){}
  try {
this.o663 = Math.floor(this.o153.length / 0x4000);
}catch(e){}
  try {
this.o375 = o142[index++];
}catch(e){}
  try {
this.o143 = o142[index++];
}catch(e){}
  try {
this.o364 = o142[index++];
}catch(e){}
  try {
this.o365 = o142[index++];
}catch(e){}
  try {
this.o366 = o142[index++];
}catch(e){}
  try {
this.o367 = o142[index++];
}catch(e){}
  try {
this.o144 = o142[index++];
}catch(e){}
  try {
this.o145 = o142[index++];
}catch(e){}
  try {
this.o368 = o142[index++];
}catch(e){}
  try {
this.o146 = o142[index++];
}catch(e){}
  try {
this.o148 = o142[index++];
}catch(e){}
  try {
this.o150 = o142[index++];
}catch(e){}
  try {
this.o149 = o142[index++];
}catch(e){}
  try {
this.o378 = o142[index++];
}catch(e){}
  try {
this.o381 = o142[index++];
}catch(e){}
  try {
this.o385 = o142[index++];
}catch(e){}
  try {
this.o386 = o142[index++];
}catch(e){}
  try {
this.o387 = o142[index++];
}catch(e){}
  try {
this.o155 = this.o662(o142[index++], "uint8");
}catch(e){}
  try {
this.o157 = this.o662(o142[index++], "uint8");
}catch(e){}
  try {
this.o394 = this.o662(o142[index++], "uint8");
}catch(e){}
  try {
this.o522 = o142[index++];
}catch(e){}
  try {
this.o395 = this.o662(o142[index++], "uint8");
}catch(e){}
  try {
this.o396 = o142[index++];
}catch(e){}
  try {
this.o397 = o142[index++];
}catch(e){}
  try {
this.o398 = o142[index++];
}catch(e){}
  try {
this.o399 = o142[index++];
}catch(e){}
  try {
this.o400 = o142[index++];
}catch(e){}
  try {
this.o401 = o142[index++];
}catch(e){}
  try {
this.o402 = o142[index++];
}catch(e){}
  try {
this.o405 = o142[index++];
}catch(e){}
  try {
this.o406 = o142[index++];
}catch(e){}
  try {
this.o407 = o142[index++];
}catch(e){}
  try {
this.name = o142[index++];
}catch(e){}
  try {
this.o408 = o142[index++];
}catch(e){}
  try {
this.o412 = o142[index++];
}catch(e){}
  try {
this.o414 = o142[index++];
}catch(e){}
  try {
this.o415 = o142[index++];
}catch(e){}
  try {
this.o416 = o142[index++];
}catch(e){}
  try {
this.o417 = o142[index++];
}catch(e){}
  try {
this.o418 = o142[index++];
}catch(e){}
  try {
this.o530 = o142[index++];
}catch(e){}
  try {
this.o525 = o142[index++];
}catch(e){}
  try {
this.o526 = o142[index++];
}catch(e){}
  try {
this.o527 = o142[index++];
}catch(e){}
  try {
this.o531 = o142[index++];
}catch(e){}
  try {
this.o532 = o142[index++];
}catch(e){}
  try {
this.o492 = o142[index++];
}catch(e){}
  try {
this.o489 = o142[index++];
}catch(e){}
  try {
this.o490 = o142[index++];
}catch(e){}
  try {
this.o491 = o142[index++];
}catch(e){}
  try {
this.o493 = o142[index++];
}catch(e){}
  try {
this.o494 = o142[index++];
}catch(e){}
  try {
this.o495 = o142[index++];
}catch(e){}
  try {
this.o496 = o142[index++];
}catch(e){}
  try {
this.o497 = o142[index++];
}catch(e){}
  try {
this.o499 = o142[index++];
}catch(e){}
  try {
this.o507 = o142[index++];
}catch(e){}
  try {
this.o508 = o142[index++];
}catch(e){}
  try {
this.o509 = o142[index++];
}catch(e){}
  try {
this.o510 = o142[index++];
}catch(e){}
  try {
this.o511 = o142[index++];
}catch(e){}
  try {
this.o512 = o142[index++];
}catch(e){}
  try {
this.o513 = o142[index++];
}catch(e){}
  try {
this.o514 = o142[index++];
}catch(e){}
  try {
this.o515 = o142[index++];
}catch(e){}
  try {
this.o516 = o142[index++];
}catch(e){}
  try {
this.o517 = o142[index++];
}catch(e){}
  try {
this.o518 = o142[index++];
}catch(e){}
  try {
this.o535 = o142[index++];
}catch(e){}
  try {
this.o565 = this.o662(o142[index++], "int32");
}catch(e){}
  try {
this.o528 = o142[index++];
}catch(e){}
  try {
this.o529 = o142[index++];
}catch(e){}
  try {
this.o604 = o142[index++];
}catch(e){}
  try {
this.o605 = o142[index++];
}catch(e){}
  try {
this.o606 = o142[index++];
}catch(e){}
  try {
this.o607 = o142[index++];
}catch(e){}
  try {
this.o608 = o142[index++];
}catch(e){}
  try {
this.o609 = o142[index++];
}catch(e){}
  try {
this.o610 = o142[index++];
}catch(e){}
  try {
this.o611 = o142[index++];
}catch(e){}
  try {
this.o612 = o142[index++];
}catch(e){}
  try {
this.o613 = o142[index++];
}catch(e){}
  try {
this.o614 = o142[index++];
}catch(e){}
  try {
this.o615 = o142[index++];
}catch(e){}
  try {
this.o616 = o142[index++];
}catch(e){}
  try {
this.o617 = o142[index++];
}catch(e){}
  try {
this.o618 = o142[index++];
}catch(e){}
  try {
this.o619 = o142[index++];
}catch(e){}
  try {
this.o620 = o142[index++];
}catch(e){}
  try {
this.o621 = o142[index++];
}catch(e){}
  try {
this.o622 = o142[index++];
}catch(e){}
  try {
this.o623 = o142[index++];
}catch(e){}
  try {
this.o624 = o142[index++];
}catch(e){}
  try {
this.o625 = o142[index++];
}catch(e){}
  try {
this.o626 = o142[index++];
}catch(e){}
  try {
this.o627 = o142[index++];
}catch(e){}
  try {
this.o628 = o142[index++];
}catch(e){}
  try {
this.o629 = o142[index++];
}catch(e){}
  try {
this.o630 = o142[index++];
}catch(e){}
  try {
this.o631 = o142[index++];
}catch(e){}
  try {
this.o632 = o142[index++];
}catch(e){}
  try {
this.o633 = o142[index++];
}catch(e){}
  try {
this.o451 = this.o662(o142[index++], "int8");
}catch(e){}
  try {
this.o634 = o142[index++];
}catch(e){}
  try {
this.o635 = o142[index++];
}catch(e){}
  try {
this.o636 = o142[index++];
}catch(e){}
  try {
this.o637 = o142[index++];
}catch(e){}
  try {
this.o638 = o142[index++];
}catch(e){}
  try {
this.o639 = o142[index++];
}catch(e){}
  try {
this.o640 = o142[index++];
}catch(e){}
  try {
this.o641 = o142[index++];
}catch(e){}
  try {
this.o642 = o142[index++];
}catch(e){}
  try {
this.o643 = o142[index++];
}catch(e){}
  try {
this.o450 = o142[index++];
}catch(e){}
  try {
this.o452 = o142[index++];
}catch(e){}
  try {
this.o453 = o142[index++];
}catch(e){}
  try {
this.o454 = o142[index++];
}catch(e){}
  try {
this.o455 = o142[index++];
}catch(e){}
  try {
this.o456 = o142[index++];
}catch(e){}
  try {
this.o457 = o142[index++];
}catch(e){}
  try {
this.o458 = o142[index++];
}catch(e){}
  try {
this.o459 = o142[index++];
}catch(e){}
  try {
this.o460 = o142[index++];
}catch(e){}
  try {
this.o461 = o142[index++];
}catch(e){}
  try {
this.o462 = o142[index++];
}catch(e){}
  try {
this.o463 = o142[index++];
}catch(e){}
  try {
this.o464 = o142[index++];
}catch(e){}
  try {
this.o465 = o142[index++];
}catch(e){}
  try {
this.o466 = o142[index++];
}catch(e){}
  try {
this.o467 = o142[index++];
}catch(e){}
  try {
this.o468 = o142[index++];
}catch(e){}
  try {
this.o469 = o142[index++];
}catch(e){}
  try {
this.o470 = o142[index++];
}catch(e){}
  try {
this.o471 = o142[index++];
}catch(e){}
  try {
this.o472 = o142[index++];
}catch(e){}
  try {
this.o473 = o142[index++];
}catch(e){}
  try {
this.o474 = o142[index++];
}catch(e){}
  try {
this.o475 = o142[index++];
}catch(e){}
  try {
this.o476 = o142[index++];
}catch(e){}
  try {
this.o477 = o142[index++];
}catch(e){}
  try {
this.o478 = o142[index++];
}catch(e){}
  try {
this.o479 = o142[index++];
}catch(e){}
  try {
this.o480 = o142[index++];
}catch(e){}
  try {
this.o481 = o142[index++];
}catch(e){}
  try {
this.o482 = o142[index++];
}catch(e){}
  try {
this.o644 = o142[index++];
}catch(e){}
  try {
this.o645 = o142[index++];
}catch(e){}
  try {
this.o646 = o142[index++];
}catch(e){}
  try {
this.o647 = o142[index++];
}catch(e){}
  try {
this.o648 = o142[index++];
}catch(e){}
  try {
this.o649 = o142[index++];
}catch(e){}
  try {
this.o650 = o142[index++];
}catch(e){}
  try {
this.o651 = o142[index++];
}catch(e){}
  try {
this.o652 = o142[index++];
}catch(e){}
  try {
this.o653 = o142[index++];
}catch(e){}
  try {
this.o654 = o142[index++];
}catch(e){}
  try {
this.o655 = o142[index++];
}catch(e){}
  try {
this.o656 = o142[index++];
}catch(e){}
  try {
this.o657 = o142[index++];
}catch(e){}
  try {
this.o658 = o142[index++];
}catch(e){}
  try {
this.o659 = o142[index++];
}catch(e){}
  try {
this.o502 = o142[index++];
}catch(e){}
  try {
this.o503 = o142[index++];
}catch(e){}
  try {
this.o504 = o142[index++];
}catch(e){}
  try {
this.o424 = o142[index++];
}catch(e){}
  try {
this.o425 = o142[index++];
}catch(e){}
  try {
this.o426 = o142[index++];
}catch(e){}
  try {
this.o427 = o142[index++];
}catch(e){}
  try {
this.o428 = o142[index++];
}catch(e){}
  try {
this.o429 = o142[index++];
}catch(e){}
  try {
this.o430 = o142[index++];
}catch(e){}
  try {
this.o431 = o142[index++];
}catch(e){}
  try {
this.o432 = o142[index++];
}catch(e){}
  try {
this.o433 = o142[index++];
}catch(e){}
  try {
this.o434 = o142[index++];
}catch(e){}
  try {
this.o435 = o142[index++];
}catch(e){}
  try {
this.o376 = o142[index++];
}catch(e){}
  try {
this.o379 = o142[index++];
}catch(e){}
  try {
this.o411 = o142[index++];
}catch(e){}
  try {
this.o403 = o142[index++];
}catch(e){}
  try {
this.o521 = o142[index++];
}catch(e){}
  try {
this.o533 = o142[index++];
}catch(e){}
  try {
this.o534 = o142[index++];
}catch(e){}
  try {
this.o547 = this.o662(o142[index++], "uint8");
}catch(e){}
  try {
this.o548 = this.o662(o142[index++], "uint8");
}catch(e){}
  try {
this.o549 = this.o662(o142[index++], "int32");
}catch(e){}
  try {
this.o550 = this.o662(o142[index++], "int32");
}catch(e){}
  try {
this.o551 = this.o662(o142[index++], "int32");
}catch(e){}
  try {
this.o552 = this.o662(o142[index++], "int32");
}catch(e){}
  try {
this.o553 = this.o662(o142[index++], "int32");
}catch(e){}
  try {
this.o554 = this.o662(o142[index++], "int32");
}catch(e){}
  try {
this.o555 = this.o662(o142[index++], "int32");
}catch(e){}
  try {
this.o556 = this.o662(o142[index++], "int32");
}catch(e){}
  try {
this.o540 = this.o662(o142[index++], "uint8");
}catch(e){}
  try {
this.o541 = this.o662(o142[index++], "uint8");
}catch(e){}
  try {
this.o506 = o142[index++];
}catch(e){}
  try {
this.o383 = o142[index++];
}catch(e){}
  try {
this.o384 = o142[index++];
}catch(e){}
  try {
this.o664();
}catch(e){}
  try {
this.o374 = o142[index++];
}catch(e){}
  try {
this.o561 = o142[index++];
}catch(e){}
  try {
this.o524 = o142[index++];
}catch(e){}
  try {
this.o523 = o142[index++];
}catch(e){}
  try {
this.o389 = o142[index];
}catch(e){}
  try {
this.o409 = true;
}catch(e){}
  try {
this.o599 = this.o662(this.o599, "uint8");
}catch(e){}
  try {
this.o591 = this.o662(this.o591, "uint8");
}catch(e){}
  try {
this.o665();
}catch(e){}
  try {
this.o666();
}catch(e){}
  try {
this.o667();
}catch(e){}
  try {
this.o668();
}catch(e){}
  try {
this.o669();
}catch(e){}
  try {
this.o448 = (this.o643 == 0x7FFF) ? this.o446 : this.o447;
}catch(e){}
  try {
this.o670 = (this.o643 == 0x7FFF) ? 15 : 7;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o671 = function () {try {
"use strict";
}catch(e){}
  try {
if (typeof this.o672 == "function" && this.o519) {
    var o673 = this.o672(this.name);
    var index = 0;
    try {
this.o499 = o673[index++];
}catch(e){}
    try {
this.o424 = o673[index++];
}catch(e){}
    try {
this.o425 = o673[index++];
}catch(e){}
    try {
this.o426 = o673[index++];
}catch(e){}
    try {
this.o427 = o673[index++];
}catch(e){}
    try {
this.o428 = o673[index++];
}catch(e){}
    try {
this.o429 = o673[index++];
}catch(e){}
    try {
this.o430 = o673[index++];
}catch(e){}
    try {
this.o431 = o673[index++];
}catch(e){}
    try {
this.o432 = o673[index++];
}catch(e){}
    try {
this.o433 = o673[index++];
}catch(e){}
    try {
this.o434 = o673[index++];
}catch(e){}
    try {
this.o435 = o673[index];
}catch(e){}
  }
}catch(e){}
}
}catch(e){}

try {
o360.prototype.o73 = function () {try {
"use strict";
}catch(e){}
  try {
this.o674();
}catch(e){}  //Write the startup memory.
  try {
this.o675();
}catch(e){}    //Load the ROM into memory and get cartridge information from it.
  try {
this.o668();
}catch(e){}    //Initialize the graphics.
  try {
this.o669();
}catch(e){}  //Sound object initialization.
  try {
this.o12();
}catch(e){}      //Start the emulation.
}
}catch(e){}
try {
o360.prototype.o674 = function () {try {
"use strict";
}catch(e){}
  //Initialize the RAM:
  try {
this.o155 = this.o676(0x10000, 0, "uint8");
}catch(e){}
  try {
this.o565 = this.o676(23040, 0xF8F8F8, "int32");
}catch(e){}
  try {
this.o540 = this.o676(0x800, 0, "uint8");
}catch(e){}
  try {
this.o599 = this.o662(this.o599, "uint8");
}catch(e){}
  try {
this.o591 = this.o662(this.o591, "uint8");
}catch(e){}
  try {
this.o451 = this.o676(0x20, 0, "int8");
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o677 = function (o678) {try {
"use strict";
}catch(e){}
  var o679 = [];
  var o680 = 0;
  try {
while (o680 < o678) {
    try {
o679[o680++] = this.o676(64, 0, "uint8");
}catch(e){}
  }
}catch(e){}
  try {
return o679;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o681 = function () {try {
"use strict";
}catch(e){}
  //Fill in the boot ROM set register values
  //Default values to the GB boot ROM values, then fill in the GBC boot ROM values after ROM loading
  var index = 0xFF;
  try {
while (index >= 0) {
    try {
if (index >= 0x30 && index < 0x40) {
      try {
this.o580(0xFF00 | index, this.o577[index]);
}catch(e){}
    }
    else {
      try {
switch (index) {
        case 0x00:
        case 0x01:
        case 0x02:
        case 0x05:
        case 0x07:
        case 0x0F:
        case 0xFF:
          try {
this.o580(0xFF00 | index, this.o577[index]);
}catch(e){}
          try {
break;
}catch(e){}
        default:
          try {
this.o155[0xFF00 | index] = this.o577[index];
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
    try {
--index;
}catch(e){}
  }
}catch(e){}
  try {
if (this.o400) {
    try {
this.o155[0xFF6C] = 0xFE;
}catch(e){}
    try {
this.o155[0xFF74] = 0xFE;
}catch(e){}
  }
  else {
    try {
this.o155[0xFF48] = 0xFF;
}catch(e){}
    try {
this.o155[0xFF49] = 0xFF;
}catch(e){}
    try {
this.o155[0xFF6C] = 0xFF;
}catch(e){}
    try {
this.o155[0xFF74] = 0xFF;
}catch(e){}
  }
}catch(e){}
  //Start as an unset device:
  try {
o113("Starting without the GBC boot ROM.", 0);
}catch(e){}
  try {
this.o143 = (this.o400) ? 0x11 : 0x1;
}catch(e){}
  try {
this.o144 = 0;
}catch(e){}
  try {
this.o145 = 0x13;
}catch(e){}
  try {
this.o368 = 0;
}catch(e){}
  try {
this.o146 = 0xD8;
}catch(e){}
  try {
this.o364 = true;
}catch(e){}
  try {
this.o365 = false;
}catch(e){}
  try {
this.o366 = true;
}catch(e){}
  try {
this.o367 = true;
}catch(e){}
  try {
this.o148 = 0x014D;
}catch(e){}
  try {
this.o422 = this.o419;
}catch(e){}
  try {
this.o381 = false;
}catch(e){}
  try {
this.o382 = 0;
}catch(e){}
  try {
this.o383 = 225;
}catch(e){}
  try {
this.o384 = 0;
}catch(e){}
  try {
this.o385 = false;
}catch(e){}
  try {
this.o386 = 12;
}catch(e){}
  try {
this.o411 = 0;
}catch(e){}
  try {
this.o412 = 1;
}catch(e){}
  try {
this.o413 = 252;
}catch(e){}
  try {
this.o414 = false;
}catch(e){}
  try {
this.o415 = false;
}catch(e){}
  try {
this.o416 = false;
}catch(e){}
  try {
this.o417 = false;
}catch(e){}
  try {
this.o418 = true;
}catch(e){}
  try {
this.o604 = 0x2000;
}catch(e){}
  try {
this.o644 = 0;
}catch(e){}
  try {
this.o645 = this.o443[2];
}catch(e){}
  try {
this.o606 = 0;
}catch(e){}
  try {
this.o607 = 0;
}catch(e){}
  try {
this.o608 = false;
}catch(e){}
  try {
this.o609 = 0;
}catch(e){}
  try {
this.o610 = 0;
}catch(e){}
  try {
this.o611 = true;
}catch(e){}
  try {
this.o612 = 1985;
}catch(e){}
  try {
this.o613 = true;
}catch(e){}
  try {
this.o614 = 1985;
}catch(e){}
  try {
this.o615 = 1;
}catch(e){}
  try {
this.o616 = 0;
}catch(e){}
  try {
this.o617 = 0;
}catch(e){}
  try {
this.o618 = 0;
}catch(e){}
  try {
this.o619 = false;
}catch(e){}
  try {
this.o620 = 0x2000;
}catch(e){}
  try {
this.o646 = 0;
}catch(e){}
  try {
this.o647 = this.o443[2];
}catch(e){}
  try {
this.o622 = 0;
}catch(e){}
  try {
this.o623 = 0;
}catch(e){}
  try {
this.o624 = false;
}catch(e){}
  try {
this.o625 = 0;
}catch(e){}
  try {
this.o626 = 0;
}catch(e){}
  try {
this.o627 = true;
}catch(e){}
  try {
this.o628 = 0;
}catch(e){}
  try {
this.o629 = false;
}catch(e){}
  try {
this.o630 = 0;
}catch(e){}
  try {
this.o631 = 4;
}catch(e){}
  try {
this.o632 = 0;
}catch(e){}
  try {
this.o633 = true;
}catch(e){}
  try {
this.o654 = 0x418;
}catch(e){}
  try {
this.o634 = 8;
}catch(e){}
  try {
this.o636 = 0;
}catch(e){}
  try {
this.o637 = 0;
}catch(e){}
  try {
this.o638 = 0;
}catch(e){}
  try {
this.o639 = false;
}catch(e){}
  try {
this.o640 = 0;
}catch(e){}
  try {
this.o641 = 0;
}catch(e){}
  try {
this.o642 = true;
}catch(e){}
  try {
this.o643 = 0x7FFF;
}catch(e){}
  try {
this.o670 = 15;
}catch(e){}
  try {
this.o605 = 0x200;
}catch(e){}
  try {
this.o621 = 0x200;
}catch(e){}
  try {
this.o654 = 0x800;
}catch(e){}
  try {
this.o658 = 0x800;
}catch(e){}
  try {
this.o659 = 0;
}catch(e){}
  try {
this.o635 = 0;
}catch(e){}
  try {
this.o452 = 1;
}catch(e){}
  try {
this.o453 = 1;
}catch(e){}
  try {
this.o450 = true;
}catch(e){}
  try {
this.o454 = true;
}catch(e){}
  try {
this.o455 = true;
}catch(e){}
  try {
this.o456 = true;
}catch(e){}
  try {
this.o457 = true;
}catch(e){}
  try {
this.o458 = true;
}catch(e){}
  try {
this.o459 = true;
}catch(e){}
  try {
this.o460 = false;
}catch(e){}
  try {
this.o461 = false;
}catch(e){}
  try {
this.o489 = 27044;
}catch(e){}
  try {
this.o490 = 160;
}catch(e){}
  try {
this.o491 = 0;
}catch(e){}
  try {
this.o492 = false;
}catch(e){}
  try {
this.o493 = 1024;
}catch(e){}
  try {
this.o494 = 0;
}catch(e){}
  try {
this.o495 = 0;
}catch(e){}
  try {
this.o496 = 0;
}catch(e){}
  try {
this.o497 = 0;
}catch(e){}
  try {
this.o502 = 144;
}catch(e){}
  try {
this.o503 = 0;
}catch(e){}
  try {
this.o525 = false;
}catch(e){}
  try {
this.o526 = false;
}catch(e){}
  try {
this.o527 = true;
}catch(e){}
  try {
this.o528 = true;
}catch(e){}
  try {
this.o529 = true;
}catch(e){}
  try {
this.o530 = 0;
}catch(e){}
  try {
this.o531 = 0;
}catch(e){}
  try {
this.o532 = 0;
}catch(e){}
  try {
this.o533 = 0;
}catch(e){}
  try {
this.o534 = 0;
}catch(e){}
  try {
this.o535 = 0;
}catch(e){}
  try {
this.o537 = -1;
}catch(e){}
  try {
this.o539 = 0;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o682 = function () {try {
"use strict";
}catch(e){}
  //Start as an unset device:
  try {
o113("Starting the selected boot ROM.", 0);
}catch(e){}
  try {
this.o149 = 0;
}catch(e){}
  try {
this.o150 = 0;
}catch(e){}
  try {
this.o381 = false;
}catch(e){}
  try {
this.o490 = 0;
}catch(e){}
  try {
this.o489 = 0;
}catch(e){}
  try {
this.o143 = 0;
}catch(e){}
  try {
this.o144 = 0;
}catch(e){}
  try {
this.o145 = 0;
}catch(e){}
  try {
this.o368 = 0;
}catch(e){}
  try {
this.o146 = 0;
}catch(e){}
  try {
this.o364 = this.o365 = this.o366 = this.o367 = false;
}catch(e){}
  try {
this.o148 = 0;
}catch(e){}
  try {
this.o454 = false;
}catch(e){}
  try {
this.o455 = false;
}catch(e){}
  try {
this.o456 = false;
}catch(e){}
  try {
this.o457 = false;
}catch(e){}
  try {
this.o458 = false;
}catch(e){}
  try {
this.o459 = false;
}catch(e){}
  try {
this.o460 = false;
}catch(e){}
  try {
this.o461 = false;
}catch(e){}
  try {
this.o628 = this.o612 = 0;
}catch(e){}
  try {
this.o642 = this.o627 = this.o611 = false;
}catch(e){}
  try {
this.o452 = 8;
}catch(e){}
  try {
this.o453 = 8;
}catch(e){}
  try {
this.o155[0xFF00] = 0xF;
}catch(e){}  //Set the joypad state.
}
}catch(e){}
try {
o360.prototype.o675 = function () {try {
"use strict";
}catch(e){}
  //Load the first two ROM banks (0x0000 - 0x7FFF) into regular gameboy memory:
  try {
this.o153 = [];
}catch(e){}
  try {
this.o376 = o683[1];
}catch(e){}
  var o684 = this.o362.length;
  try {
if (o684 < 0x4000) {
    try {
throw(new Error("ROM image size too small."));
}catch(e){}
  }
}catch(e){}
  try {
this.o153 = this.o676(o684, 0, "uint8");
}catch(e){}
  var o685 = 0;
  try {
if (this.o376) {
    try {
if (!o683[11]) {
      //Patch in the GBC boot ROM into the memory map:
      try {
for (; o685 < 0x100; ++o685) {
        try {
this.o155[o685] = this.o576[o685];
}catch(e){}                      //Load in the GameBoy Color BOOT ROM.
        try {
this.o153[o685] = (this.o362.charCodeAt(o685) & 0xFF);
}catch(e){}              //Decode the ROM binary for the switch out.
      }
}catch(e){}
      try {
for (; o685 < 0x200; ++o685) {
        try {
this.o155[o685] = this.o153[o685] = (this.o362.charCodeAt(o685) & 0xFF);
}catch(e){}  //Load in the game ROM.
      }
}catch(e){}
      try {
for (; o685 < 0x900; ++o685) {
        try {
this.o155[o685] = this.o576[o685 - 0x100];
}catch(e){}                  //Load in the GameBoy Color BOOT ROM.
        try {
this.o153[o685] = (this.o362.charCodeAt(o685) & 0xFF);
}catch(e){}              //Decode the ROM binary for the switch out.
      }
}catch(e){}
      try {
this.o377 = true;
}catch(e){}
    }
    else {
      //Patch in the GBC boot ROM into the memory map:
      try {
for (; o685 < 0x100; ++o685) {
        try {
this.o155[o685] = this.o575[o685];
}catch(e){}                      //Load in the GameBoy Color BOOT ROM.
        try {
this.o153[o685] = (this.o362.charCodeAt(o685) & 0xFF);
}catch(e){}              //Decode the ROM binary for the switch out.
      }
}catch(e){}
    }
}catch(e){}
    try {
for (; o685 < 0x4000; ++o685) {
      try {
this.o155[o685] = this.o153[o685] = (this.o362.charCodeAt(o685) & 0xFF);
}catch(e){}  //Load in the game ROM.
    }
}catch(e){}
  }
  else {
    //Don't load in the boot ROM:
    try {
for (; o685 < 0x4000; ++o685) {
      try {
this.o155[o685] = this.o153[o685] = (this.o362.charCodeAt(o685) & 0xFF);
}catch(e){}  //Load in the game ROM.
    }
}catch(e){}
  }
}catch(e){}
  //Finish the decoding of the ROM binary:
  try {
for (; o685 < o684; ++o685) {
    try {
this.o153[o685] = (this.o362.charCodeAt(o685) & 0xFF);
}catch(e){}
  }
}catch(e){}
  try {
this.o663 = Math.floor(this.o153.length / 0x4000);
}catch(e){}
  //Set up the emulator for the cartidge specifics:
  try {
this.o686();
}catch(e){}
  //Check for IRQ matching upon initialization:
  try {
this.o664();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o687 = function () {try {
"use strict";
}catch(e){}
  //Return the binary version of the ROM image currently running:
  try {
if (this.o362.length > 0) {
    try {
return this.o362.length;
}catch(e){}
  }
}catch(e){}
  var length = this.o153.length;
  try {
for (var index = 0; index < length; index++) {
    try {
this.o362 += String.fromCharCode(this.o153[index]);
}catch(e){}
  }
}catch(e){}
  try {
return this.o362;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o686 = function () {try {
"use strict";
}catch(e){}
  // ROM name
  try {
for (var index = 0x134; index < 0x13F; index++) {
    try {
if (this.o362.charCodeAt(index) > 0) {
      try {
this.name += this.o362[index];
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  // ROM game code (for newer games)
  try {
for (var index = 0x13F; index < 0x143; index++) {
    try {
if (this.o362.charCodeAt(index) > 0) {
      try {
this.o408 += this.o362[index];
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
o113("Game Title: " + this.name + "[" + this.o408 + "][" + this.o362[0x143] + "]", 0);
}catch(e){}
  try {
o113("Game Code: " + this.o408, 0);
}catch(e){}
  // Cartridge type
  try {
this.o407 = this.o153[0x147];
}catch(e){}
  try {
o113("Cartridge type #" + this.o407, 0);
}catch(e){}
  //Map out ROM cartridge sub-types.
  var o688 = "";
  try {
switch (this.o407) {
    case 0x00:
      //ROM w/o bank switching
      try {
if (!o683[9]) {
        try {
o688 = "ROM";
}catch(e){}
        try {
break;
}catch(e){}
      }
}catch(e){}
    case 0x01:
      try {
this.o507 = true;
}catch(e){}
      try {
o688 = "MBC1";
}catch(e){}
      try {
break;
}catch(e){}
    case 0x02:
      try {
this.o507 = true;
}catch(e){}
      try {
this.o512 = true;
}catch(e){}
      try {
o688 = "MBC1 + SRAM";
}catch(e){}
      try {
break;
}catch(e){}
    case 0x03:
      try {
this.o507 = true;
}catch(e){}
      try {
this.o512 = true;
}catch(e){}
      try {
this.o601 = true;
}catch(e){}
      try {
o688 = "MBC1 + SRAM + BATT";
}catch(e){}
      try {
break;
}catch(e){}
    case 0x05:
      try {
this.o508 = true;
}catch(e){}
      try {
o688 = "MBC2";
}catch(e){}
      try {
break;
}catch(e){}
    case 0x06:
      try {
this.o508 = true;
}catch(e){}
      try {
this.o601 = true;
}catch(e){}
      try {
o688 = "MBC2 + BATT";
}catch(e){}
      try {
break;
}catch(e){}
    case 0x08:
      try {
this.o512 = true;
}catch(e){}
      try {
o688 = "ROM + SRAM";
}catch(e){}
      try {
break;
}catch(e){}
    case 0x09:
      try {
this.o512 = true;
}catch(e){}
      try {
this.o601 = true;
}catch(e){}
      try {
o688 = "ROM + SRAM + BATT";
}catch(e){}
      try {
break;
}catch(e){}
    case 0x0B:
      try {
this.o513 = true;
}catch(e){}
      try {
o688 = "MMMO1";
}catch(e){}
      try {
break;
}catch(e){}
    case 0x0C:
      try {
this.o513 = true;
}catch(e){}
      try {
this.o512 = true;
}catch(e){}
      try {
o688 = "MMMO1 + SRAM";
}catch(e){}
      try {
break;
}catch(e){}
    case 0x0D:
      try {
this.o513 = true;
}catch(e){}
      try {
this.o512 = true;
}catch(e){}
      try {
this.o601 = true;
}catch(e){}
      try {
o688 = "MMMO1 + SRAM + BATT";
}catch(e){}
      try {
break;
}catch(e){}
    case 0x0F:
      try {
this.o509 = true;
}catch(e){}
      try {
this.o519 = true;
}catch(e){}
      try {
this.o601 = true;
}catch(e){}
      try {
o688 = "MBC3 + TIMER + BATT";
}catch(e){}
      try {
break;
}catch(e){}
    case 0x10:
      try {
this.o509 = true;
}catch(e){}
      try {
this.o519 = true;
}catch(e){}
      try {
this.o601 = true;
}catch(e){}
      try {
this.o512 = true;
}catch(e){}
      try {
o688 = "MBC3 + TIMER + BATT + SRAM";
}catch(e){}
      try {
break;
}catch(e){}
    case 0x11:
      try {
this.o509 = true;
}catch(e){}
      try {
o688 = "MBC3";
}catch(e){}
      try {
break;
}catch(e){}
    case 0x12:
      try {
this.o509 = true;
}catch(e){}
      try {
this.o512 = true;
}catch(e){}
      try {
o688 = "MBC3 + SRAM";
}catch(e){}
      try {
break;
}catch(e){}
    case 0x13:
      try {
this.o509 = true;
}catch(e){}
      try {
this.o512 = true;
}catch(e){}
      try {
this.o601 = true;
}catch(e){}
      try {
o688 = "MBC3 + SRAM + BATT";
}catch(e){}
      try {
break;
}catch(e){}
    case 0x19:
      try {
this.o510 = true;
}catch(e){}
      try {
o688 = "MBC5";
}catch(e){}
      try {
break;
}catch(e){}
    case 0x1A:
      try {
this.o510 = true;
}catch(e){}
      try {
this.o512 = true;
}catch(e){}
      try {
o688 = "MBC5 + SRAM";
}catch(e){}
      try {
break;
}catch(e){}
    case 0x1B:
      try {
this.o510 = true;
}catch(e){}
      try {
this.o512 = true;
}catch(e){}
      try {
this.o601 = true;
}catch(e){}
      try {
o688 = "MBC5 + SRAM + BATT";
}catch(e){}
      try {
break;
}catch(e){}
    case 0x1C:
      try {
this.o514 = true;
}catch(e){}
      try {
o688 = "RUMBLE";
}catch(e){}
      try {
break;
}catch(e){}
    case 0x1D:
      try {
this.o514 = true;
}catch(e){}
      try {
this.o512 = true;
}catch(e){}
      try {
o688 = "RUMBLE + SRAM";
}catch(e){}
      try {
break;
}catch(e){}
    case 0x1E:
      try {
this.o514 = true;
}catch(e){}
      try {
this.o512 = true;
}catch(e){}
      try {
this.o601 = true;
}catch(e){}
      try {
o688 = "RUMBLE + SRAM + BATT";
}catch(e){}
      try {
break;
}catch(e){}
    case 0x1F:
      try {
this.o515 = true;
}catch(e){}
      try {
o688 = "GameBoy Camera";
}catch(e){}
      try {
break;
}catch(e){}
    case 0x22:
      try {
this.o511 = true;
}catch(e){}
      try {
this.o512 = true;
}catch(e){}
      try {
this.o601 = true;
}catch(e){}
      try {
o688 = "MBC7 + SRAM + BATT";
}catch(e){}
      try {
break;
}catch(e){}
    case 0xFD:
      try {
this.o516 = true;
}catch(e){}
      try {
o688 = "TAMA5";
}catch(e){}
      try {
break;
}catch(e){}
    case 0xFE:
      try {
this.o517 = true;
}catch(e){}
      try {
o688 = "HuC3";
}catch(e){}
      try {
break;
}catch(e){}
    case 0xFF:
      try {
this.o518 = true;
}catch(e){}
      try {
o688 = "HuC1";
}catch(e){}
      try {
break;
}catch(e){}
    default:
      try {
o688 = "Unknown";
}catch(e){}
      try {
o113("Cartridge type is unknown.", 2);
}catch(e){}
      try {
o593();
}catch(e){}
  }
}catch(e){}
  try {
o113("Cartridge Type: " + o688 + ".", 0);
}catch(e){}
  // ROM and RAM banks
  try {
this.o689 = this.o520[this.o153[0x148]];
}catch(e){}
  try {
o113(this.o689 + " ROM banks.", 0);
}catch(e){}
  try {
switch (this.o404[this.o153[0x149]]) {
    case 0:
      try {
o113("No RAM banking requested for allocation or MBC is of type 2.", 0);
}catch(e){}
      try {
break;
}catch(e){}
    case 2:
      try {
o113("1 RAM bank requested for allocation.", 0);
}catch(e){}
      try {
break;
}catch(e){}
    case 3:
      try {
o113("4 RAM banks requested for allocation.", 0);
}catch(e){}
      try {
break;
}catch(e){}
    case 4:
      try {
o113("16 RAM banks requested for allocation.", 0);
}catch(e){}
      try {
break;
}catch(e){}
    default:
      try {
o113("RAM bank amount requested is unknown, will use maximum allowed by specified MBC type.", 0);
}catch(e){}
  }
}catch(e){}
  //Check the GB/GBC mode byte:
  try {
if (!this.o376) {
    try {
switch (this.o153[0x143]) {
      case 0x00:  //Only GB mode
        try {
this.o400 = false;
}catch(e){}
        try {
o113("Only GB mode detected.", 0);
}catch(e){}
        try {
break;
}catch(e){}
      case 0x32:  //Exception to the GBC identifying code:
        try {
if (!o683[2] && this.name + this.o408 + this.o153[0x143] == "Game and Watch 50") {
          try {
this.o400 = true;
}catch(e){}
          try {
o113("Created a boot exception for Game and Watch Gallery 2 (GBC ID byte is wrong on the cartridge).", 1);
}catch(e){}
        }
        else {
          try {
this.o400 = false;
}catch(e){}
        }
}catch(e){}
        try {
break;
}catch(e){}
      case 0x80:  //Both GB + GBC modes
        try {
this.o400 = !o683[2];
}catch(e){}
        try {
o113("GB and GBC mode detected.", 0);
}catch(e){}
        try {
break;
}catch(e){}
      case 0xC0:  //Only GBC mode
        try {
this.o400 = true;
}catch(e){}
        try {
o113("Only GBC mode detected.", 0);
}catch(e){}
        try {
break;
}catch(e){}
      default:
        try {
this.o400 = false;
}catch(e){}
        try {
o113("Unknown GameBoy game type code #" + this.o153[0x143] + ", defaulting to GB mode (Old games don't have a type code).", 1);
}catch(e){}
    }
}catch(e){}
    try {
this.o375 = false;
}catch(e){}
    try {
this.o690();
}catch(e){}  //CPU/(V)RAM initialization.
    try {
this.o681();
}catch(e){}
    try {
this.o449();
}catch(e){} // Line added for benchmarking.
  }
  else {
    try {
this.o400 = this.o377;
}catch(e){}  //Allow the GBC boot ROM to run in GBC mode...
    try {
this.o690();
}catch(e){}  //CPU/(V)RAM initialization.
    try {
this.o682();
}catch(e){}
  }
}catch(e){}
  try {
this.o691();
}catch(e){}
  //License Code Lookup:
  var o692 = this.o153[0x14B];
  var o693 = (this.o153[0x144] & 0xFF00) | (this.o153[0x145] & 0xFF);
  try {
if (o692 != 0x33) {
    //Old Style License Header
    try {
o113("Old style license code: " + o692, 0);
}catch(e){}
  }
  else {
    //New Style License Header
    try {
o113("New style license code: " + o693, 0);
}catch(e){}
  }
}catch(e){}
  try {
this.o362 = "";
}catch(e){}  //Memory consumption reduction.
}
}catch(e){}
try {
o360.prototype.o694 = function () {try {
"use strict";
}catch(e){}
  //Remove any traces of the boot ROM from ROM memory.
  try {
for (var index = 0; index < 0x100; ++index) {
    try {
this.o155[index] = this.o153[index];
}catch(e){}  //Replace the GameBoy or GameBoy Color boot ROM with the game ROM.
  }
}catch(e){}
  try {
if (this.o377) {
    //Remove any traces of the boot ROM from ROM memory.
    try {
for (index = 0x200; index < 0x900; ++index) {
      try {
this.o155[index] = this.o153[index];
}catch(e){}  //Replace the GameBoy Color boot ROM with the game ROM.
    }
}catch(e){}
    try {
if (!this.o400) {
      //Clean up the post-boot (GB mode only) state:
      try {
this.o695();
}catch(e){}
    }
    else {
      try {
this.o696();
}catch(e){}
    }
}catch(e){}
  }
  else {
    try {
this.o696();
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o483 = function () {try {
"use strict";
}catch(e){}
  //Emulator Timing:
  try {
this.o373 = 0x80000 / 0x7D * o683[6];
}catch(e){}
  try {
this.o372 = this.o373 % 4;
}catch(e){}
  try {
this.o370 = this.o369 = (this.o373 - this.o372) | 0;
}catch(e){}
  try {
this.o371 = 0;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o690 = function () {try {
"use strict";
}catch(e){}
  //Setup the auxilliary/switchable RAM:
  try {
if (this.o508) {
    try {
this.o521 = 1 / 16;
}catch(e){}
  }
  else try {
if (this.o507 || this.o514 || this.o509 || this.o517) {
    try {
this.o521 = 4;
}catch(e){}
  }
  else try {
if (this.o510) {
    try {
this.o521 = 16;
}catch(e){}
  }
  else try {
if (this.o512) {
    try {
this.o521 = 1;
}catch(e){}
  }
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
  try {
if (this.o521 > 0) {
    try {
if (!this.o697()) {
      //For ROM and unknown MBC cartridges using the external RAM:
      try {
this.o397 = true;
}catch(e){}
    }
}catch(e){}
    //Switched RAM Used
    var o157 = (typeof this.o698 == "function") ? this.o698(this.name) : [];
    try {
if (o157.length > 0) {
      //Flash the SRAM into memory:
      try {
this.o157 = this.o662(o157, "uint8");
}catch(e){}
    }
    else {
      try {
this.o157 = this.o676(this.o521 * 0x2000, 0, "uint8");
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
o113("Actual bytes of MBC RAM allocated: " + (this.o521 * 0x2000), 0);
}catch(e){}
  try {
this.o671();
}catch(e){}
  //Setup the RAM for GBC mode.
  try {
if (this.o400) {
    try {
this.o394 = this.o676(0x2000, 0, "uint8");
}catch(e){}
    try {
this.o395 = this.o676(0x7000, 0, "uint8");
}catch(e){}
  }
}catch(e){}
  try {
this.o666();
}catch(e){}
  try {
this.o667();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o697 = function () {try {
"use strict";
}catch(e){}
  try {
return this.o507 || this.o508 || this.o509 || this.o510 || this.o511 || this.o514;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o699 = function () {try {
"use strict";
}catch(e){}
  try {
o700();
}catch(e){}
  //Cache some dimension info:
  try {
this.o569 = this.o361.o109;
}catch(e){}
  try {
this.o571 = this.o361.o110;
}catch(e){}
  // The following line was modified for benchmarking:
  try {
if (o96 && o96.o701) {
    //Firefox slowness hack:
    try {
this.o361.o109 = this.o569 = (!o683[12]) ? 160 : this.o361.o109;
}catch(e){}
    try {
this.o361.o110 = this.o571 = (!o683[12]) ? 144 : this.o361.o110;
}catch(e){}
  }
  else {
    try {
this.o569 = this.o361.o109;
}catch(e){}
    try {
this.o571 = this.o361.o110;
}catch(e){}
  }
}catch(e){}
  try {
this.o570 = (!o683[12]) ? 160 : this.o361.o109;
}catch(e){}
  try {
this.o702 = (!o683[12]) ? 144 : this.o361.o110;
}catch(e){}
  try {
this.o573 = this.o570 * this.o702 * 4;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o668 = function () {try {
"use strict";
}catch(e){}
  try {
this.o699();
}catch(e){}
  try {
if (this.o573 != 92160) {
    //Only create the resizer handle if we need it:
    try {
this.o703();
}catch(e){}
  }
  else {
    //Resizer not needed:
    try {
this.o704 = null;
}catch(e){}
  }
}catch(e){}
  try {
try {
    try {
this.o705 = new o89();
}catch(e){}  // Line modified for benchmarking.
    try {
this.o705.o109 = this.o570;
}catch(e){}
    try {
this.o705.o110 = this.o702;
}catch(e){}
    try {
this.o706 = this.o705.o108("2d");
}catch(e){}
    try {
this.o707 = this.o361.o108("2d");
}catch(e){}
    //Get a CanvasPixelArray buffer:
    try {
try {
      try {
this.o567 = this.o706.o100(this.o570, this.o702);
}catch(e){}
    }
    catch (o68) {try {
"use strict";
}catch(e){}
      try {
o113("Falling back to the getImageData initialization (Error \"" + o68.o114 + "\").", 1);
}catch(e){}
      try {
this.o567 = this.o706.o708(0, 0, this.o570, this.o702);
}catch(e){}
    }
}catch(e){}
    var index = this.o573;
    try {
while (index > 0) {
      try {
this.o567.o70[index -= 4] = 0xF8;
}catch(e){}
      try {
this.o567.o70[index + 1] = 0xF8;
}catch(e){}
      try {
this.o567.o70[index + 2] = 0xF8;
}catch(e){}
      try {
this.o567.o70[index + 3] = 0xFF;
}catch(e){}
    }
}catch(e){}
    try {
this.o709();
}catch(e){}
    try {
this.o361.o111.o112 = "visible";
}catch(e){}
    try {
if (this.o566 == null) {
      try {
this.o566 = this.o676(69120, 0xFF, "uint8");
}catch(e){}
    }
}catch(e){}
    //Test the draw system and browser vblank latching:
    try {
this.o536 = true;
}catch(e){}                    //Copy the latest graphics to buffer.
    try {
this.o710();
}catch(e){}
  }
  catch (o68) {
    try {
throw(new Error("HTML5 Canvas support required: " + o68.o114 + "file: " + o68.o711 + ", line: " + o68.o712));
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o709 = function () {try {
"use strict";
}catch(e){}
  try {
if (this.o570 == this.o569 && this.o702 == this.o571) {
    try {
this.o707.o103(this.o567, 0, 0);
}catch(e){}
  }
  else {
    try {
this.o706.o103(this.o567, 0, 0);
}catch(e){}
    try {
this.o707.o107(this.o705, 0, 0, this.o569, this.o571);
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o713 = function (key, o714) {try {
"use strict";
}catch(e){}
  try {
if (o714) {
    try {
this.o388 &= 0xFF ^ (1 << key);
}catch(e){}
    try {
if (!this.o400 && (!this.o376 || !this.o377)) {
      try {
this.o383 |= 0x10;
}catch(e){}  //A real GBC doesn't set this!
      try {
this.o374 = 0;
}catch(e){}
      try {
this.o664();
}catch(e){}
    }
}catch(e){}
  }
  else {
    try {
this.o388 |= (1 << key);
}catch(e){}
  }
}catch(e){}
  try {
this.o155[0xFF00] = (this.o155[0xFF00] & 0x30) + ((((this.o155[0xFF00] & 0x20) == 0) ? (this.o388 >> 4) : 0xF) & (((this.o155[0xFF00] & 0x10) == 0) ? (this.o388 & 0xF) : 0xF));
}catch(e){}
  try {
this.o389 = false;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o715 = function (o104, o105) {try {
"use strict";
}catch(e){}
  try {
o104 *= -100;
}catch(e){}
  try {
o104 += 2047;
}catch(e){}
  try {
this.o436 = o104 >> 8;
}catch(e){}
  try {
this.o437 = o104 & 0xFF;
}catch(e){}
  try {
o105 *= -100;
}catch(e){}
  try {
o105 += 2047;
}catch(e){}
  try {
this.o438 = o105 >> 8;
}catch(e){}
  try {
this.o439 = o105 & 0xFF;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o669 = function () {try {
"use strict";
}catch(e){}
  try {
this.o442 = 0x400000 / 1000 * o683[6];
}catch(e){}
  try {
this.o484 = o683[13];
}catch(e){}
  try {
if (o683[0]) {
    try {
try {
      var o421 = this;
      try {
this.o440 = new o218(2, 0x400000 / o683[13], 0, Math.o290(this.o442 * o683[8] / o683[13], 8192) << 1, null, o683[14]);
}catch(e){}
      try {
this.o716();
}catch(e){}
    }
    catch (o68) {
      try {
o113("Audio system cannot run: " + o68.o114, 2);
}catch(e){}
      try {
o683[0] = false;
}catch(e){}
    }
}catch(e){}
  }
  else try {
if (this.o440) {
    //Mute the audio output, as it has an immediate silencing effect:
    try {
try {
      try {
this.o440.o276(0);
}catch(e){}
    }
    catch (o68) { }
}catch(e){}
  }
}catch(e){}
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o276 = function () {try {
"use strict";
}catch(e){}
  try {
if (o683[0] && this.o440) {
    try {
try {
      try {
this.o440.o276(o683[14]);
}catch(e){}
    }
    catch (o68) { }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o716 = function () {try {
"use strict";
}catch(e){}
  try {
this.o486 = 0;
}catch(e){}
  try {
this.o445 = Math.o290(this.o442 * o683[7] / o683[13], 4096) << 1;
}catch(e){}
  try {
this.o441 = (this.o442 - (this.o442 % o683[13])) | 0;
}catch(e){}
  try {
this.o444 = this.o676(this.o441, 0xF0F0, "int32");
}catch(e){}
  try {
this.o717 = this.o676((this.o441 << 1) / o683[13], 0, "float32");
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o574 = function () {try {
"use strict";
}catch(e){}
  //Noise Sample Tables:
  var o718 = 1;
  //15-bit LSFR Cache Generation:
  try {
this.o446 = this.o676(0x80000, 0, "int8");
}catch(e){}
  var o719 = 0x7FFF;  //Seed value has all its bits set.
  var o720 = 0x3FFF;
  try {
for (var index = 0; index < 0x8000; ++index) {
    //Normalize the last LSFR value for usage:
    try {
o718 = 1 - (o719 & 1);
}catch(e){}  //Docs say it's the inverse.
    //Cache the different volume level results:
    try {
this.o446[0x08000 | index] = o718;
}catch(e){}
    try {
this.o446[0x10000 | index] = o718 * 0x2;
}catch(e){}
    try {
this.o446[0x18000 | index] = o718 * 0x3;
}catch(e){}
    try {
this.o446[0x20000 | index] = o718 * 0x4;
}catch(e){}
    try {
this.o446[0x28000 | index] = o718 * 0x5;
}catch(e){}
    try {
this.o446[0x30000 | index] = o718 * 0x6;
}catch(e){}
    try {
this.o446[0x38000 | index] = o718 * 0x7;
}catch(e){}
    try {
this.o446[0x40000 | index] = o718 * 0x8;
}catch(e){}
    try {
this.o446[0x48000 | index] = o718 * 0x9;
}catch(e){}
    try {
this.o446[0x50000 | index] = o718 * 0xA;
}catch(e){}
    try {
this.o446[0x58000 | index] = o718 * 0xB;
}catch(e){}
    try {
this.o446[0x60000 | index] = o718 * 0xC;
}catch(e){}
    try {
this.o446[0x68000 | index] = o718 * 0xD;
}catch(e){}
    try {
this.o446[0x70000 | index] = o718 * 0xE;
}catch(e){}
    try {
this.o446[0x78000 | index] = o718 * 0xF;
}catch(e){}
    //Recompute the LSFR algorithm:
    try {
o720 = o719 >> 1;
}catch(e){}
    try {
o719 = o720 | (((o720 ^ o719) & 0x1) << 14);
}catch(e){}
  }
}catch(e){}
  //7-bit LSFR Cache Generation:
  try {
this.o447 = this.o676(0x800, 0, "int8");
}catch(e){}
  try {
o719 = 0x7F;
}catch(e){}  //Seed value has all its bits set.
  try {
for (index = 0; index < 0x80; ++index) {
    //Normalize the last LSFR value for usage:
    try {
o718 = 1 - (o719 & 1);
}catch(e){}  //Docs say it's the inverse.
    //Cache the different volume level results:
    try {
this.o447[0x080 | index] = o718;
}catch(e){}
    try {
this.o447[0x100 | index] = o718 * 0x2;
}catch(e){}
    try {
this.o447[0x180 | index] = o718 * 0x3;
}catch(e){}
    try {
this.o447[0x200 | index] = o718 * 0x4;
}catch(e){}
    try {
this.o447[0x280 | index] = o718 * 0x5;
}catch(e){}
    try {
this.o447[0x300 | index] = o718 * 0x6;
}catch(e){}
    try {
this.o447[0x380 | index] = o718 * 0x7;
}catch(e){}
    try {
this.o447[0x400 | index] = o718 * 0x8;
}catch(e){}
    try {
this.o447[0x480 | index] = o718 * 0x9;
}catch(e){}
    try {
this.o447[0x500 | index] = o718 * 0xA;
}catch(e){}
    try {
this.o447[0x580 | index] = o718 * 0xB;
}catch(e){}
    try {
this.o447[0x600 | index] = o718 * 0xC;
}catch(e){}
    try {
this.o447[0x680 | index] = o718 * 0xD;
}catch(e){}
    try {
this.o447[0x700 | index] = o718 * 0xE;
}catch(e){}
    try {
this.o447[0x780 | index] = o718 * 0xF;
}catch(e){}
    //Recompute the LSFR algorithm:
    try {
o720 = o719 >> 1;
}catch(e){}
    try {
o719 = o720 | (((o720 ^ o719) & 0x1) << 6);
}catch(e){}
  }
}catch(e){}
  try {
if (!this.o448 && this.o155.length == 0x10000) {
    //If enabling audio for the first time after a game is already running, set up the internal table reference:
    try {
this.o448 = ((this.o155[0xFF22] & 0x8) == 0x8) ? this.o447 : this.o446;
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o721 = function () {try {
"use strict";
}catch(e){}
  try {
if (o683[0]) {
    var o722 = this.o445 - this.o440.o243();
    try {
if (o722 > 0) {
      try {
this.o371 += (o722 >> 1) * this.o484;
}catch(e){}
      try {
this.o723();
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o449 = function () {try {
"use strict";
}catch(e){}
  try {
this.o604 = 0x2000;
}catch(e){}
  try {
this.o644 = 0;
}catch(e){}
  try {
this.o645 = this.o443[2];
}catch(e){}
  try {
this.o606 = 0;
}catch(e){}
  try {
this.o607 = 0;
}catch(e){}
  try {
this.o608 = false;
}catch(e){}
  try {
this.o609 = 0;
}catch(e){}
  try {
this.o610 = 0;
}catch(e){}
  try {
this.o611 = true;
}catch(e){}
  try {
this.o612 = 0;
}catch(e){}
  try {
this.o613 = false;
}catch(e){}
  try {
this.o614 = 0;
}catch(e){}
  try {
this.o615 = 1;
}catch(e){}
  try {
this.o616 = 0;
}catch(e){}
  try {
this.o617 = 0;
}catch(e){}
  try {
this.o618 = 0;
}catch(e){}
  try {
this.o619 = false;
}catch(e){}
  try {
this.o620 = 0x2000;
}catch(e){}
  try {
this.o646 = 0;
}catch(e){}
  try {
this.o647 = this.o443[2];
}catch(e){}
  try {
this.o622 = 0;
}catch(e){}
  try {
this.o623 = 0;
}catch(e){}
  try {
this.o624 = false;
}catch(e){}
  try {
this.o625 = 0;
}catch(e){}
  try {
this.o626 = 0;
}catch(e){}
  try {
this.o627 = true;
}catch(e){}
  try {
this.o628 = 0;
}catch(e){}
  try {
this.o629 = false;
}catch(e){}
  try {
this.o630 = 0;
}catch(e){}
  try {
this.o631 = 4;
}catch(e){}
  try {
this.o632 = 0;
}catch(e){}
  try {
this.o633 = true;
}catch(e){}
  try {
this.o654 = 0x800;
}catch(e){}
  try {
this.o634 = 8;
}catch(e){}
  try {
this.o636 = 0;
}catch(e){}
  try {
this.o637 = 0;
}catch(e){}
  try {
this.o638 = 0;
}catch(e){}
  try {
this.o639 = false;
}catch(e){}
  try {
this.o640 = 0;
}catch(e){}
  try {
this.o641 = 0;
}catch(e){}
  try {
this.o642 = true;
}catch(e){}
  try {
this.o643 = 0x7FFF;
}catch(e){}
  try {
this.o448 = this.o446;
}catch(e){}
  try {
this.o670 = 15;
}catch(e){}
  try {
this.o605 = 0x2000;
}catch(e){}
  try {
this.o621 = 0x2000;
}catch(e){}
  try {
this.o654 = 0x800;
}catch(e){}
  try {
this.o658 = 0x800;
}catch(e){}
  try {
this.o659 = 0;
}catch(e){}
  try {
this.o635 = 0;
}catch(e){}
  try {
this.o452 = 8;
}catch(e){}
  try {
this.o453 = 8;
}catch(e){}
  try {
this.o482 = 0;
}catch(e){}
  try {
this.o652 = 0x2000;
}catch(e){}
  try {
this.o653 = 0;
}catch(e){}
  try {
this.o634 = 8;
}catch(e){}
  try {
this.o655 = 8;
}catch(e){}
  try {
this.o656 = 0;
}catch(e){}
  try {
this.o657 = 0;
}catch(e){}
  try {
this.o648 = false;
}catch(e){}
  try {
this.o649 = false;
}catch(e){}
  try {
this.o650 = false;
}catch(e){}
  try {
this.o651 = false;
}catch(e){}
  try {
this.o724 = false;
}catch(e){}
  try {
this.o725 = false;
}catch(e){}
  try {
this.o726 = false;
}catch(e){}
  try {
this.o727();
}catch(e){}
  try {
this.o728();
}catch(e){}
  try {
this.o729();
}catch(e){}
  try {
this.o730();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o731 = function () {try {
"use strict";
}catch(e){}
  var o732 = 0;
  var o733 = 0;
  var o734 = 0;
  var o735 = 0;
  var o736 = 0;
  var o737 = o683[13];
  var o738 = o737 * 0xF0;
  try {
for (var o739 = 0; o739 < this.o441;) {
    try {
for (o732 = o734 = o735 = 0; o732 < o737; ++o732) {
      try {
o733 = this.o444[o739++];
}catch(e){}
      try {
o734 += o733 >> 9;
}catch(e){}
      try {
o735 += o733 & 0x1FF;
}catch(e){}
    }
}catch(e){}
    try {
this.o717[o736++] = o734 / o738 - 1;
}catch(e){}
    try {
this.o717[o736++] = o735 / o738 - 1;
}catch(e){}
  }
}catch(e){}
  try {
this.o440.o242(this.o717);
}catch(e){}
}
}catch(e){}
//Below are the audio generation functions timed against the CPU:
try {
o360.prototype.o740 = function (o741) {try {
"use strict";
}catch(e){}
  try {
if (this.o450 && !this.o389) {
    try {
for (var o742 = 0; o741 > 0;) {
      try {
o742 = (o741 < this.o652) ? o741 : this.o652;
}catch(e){}
      try {
this.o652 -= o742;
}catch(e){}
      try {
o741 -= o742;
}catch(e){}
      try {
while (--o742 > -1) {
        try {
this.o743();
}catch(e){}
        try {
this.o444[this.o486++] = this.o482;
}catch(e){}
        try {
if (this.o486 == this.o441) {
          try {
this.o486 = 0;
}catch(e){}
          try {
this.o731();
}catch(e){}
        }
}catch(e){}
      }
}catch(e){}
      try {
if (this.o652 == 0) {
        try {
this.o744();
}catch(e){}
        try {
this.o652 = 0x2000;
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
  else {
    //SILENT OUTPUT:
    try {
while (--o741 > -1) {
      try {
this.o444[this.o486++] = 0xF0F0;
}catch(e){}
      try {
if (this.o486 == this.o441) {
        try {
this.o486 = 0;
}catch(e){}
        try {
this.o731();
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
//Generate audio, but don't actually output it (Used for when sound is disabled by user/browser):
try {
o360.prototype.o745 = function (o741) {try {
"use strict";
}catch(e){}
  try {
if (this.o450 && !this.o389) {
    try {
while (--o741 > -1) {
      try {
this.o743();
}catch(e){}
      try {
if (--this.o652 == 0) {
        try {
this.o744();
}catch(e){}
        try {
this.o652 = 0x2000;
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o746 = function () {try {
"use strict";
}catch(e){}
  //Audio Sample Generation Timing:
  try {
if (o683[0]) {
    try {
this.o740(this.o485);
}catch(e){}
  }
  else {
    try {
this.o745(this.o485);
}catch(e){}
  }
}catch(e){}
  try {
this.o485 = 0;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o744 = function () {try {
"use strict";
}catch(e){}
  try {
switch (this.o653++) {
    case 0:
      try {
this.o747();
}catch(e){}
      try {
break;
}catch(e){}
    case 2:
      try {
this.o747();
}catch(e){}
      try {
this.o748();
}catch(e){}
      try {
break;
}catch(e){}
    case 4:
      try {
this.o747();
}catch(e){}
      try {
break;
}catch(e){}
    case 6:
      try {
this.o747();
}catch(e){}
      try {
this.o748();
}catch(e){}
      try {
break;
}catch(e){}
    case 7:
      try {
this.o749();
}catch(e){}
      try {
this.o653 = 0;
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o747 = function () {try {
"use strict";
}catch(e){}
  //Channel 1:
  try {
if (this.o606 > 1) {
    try {
--this.o606;
}catch(e){}
  }
  else try {
if (this.o606 == 1) {
    try {
this.o606 = 0;
}catch(e){}
    try {
this.o750();
}catch(e){}
    try {
this.o155[0xFF26] &= 0xFE;
}catch(e){}  //Channel #1 On Flag Off
  }
}catch(e){}
}catch(e){}
  //Channel 2:
  try {
if (this.o622 > 1) {
    try {
--this.o622;
}catch(e){}
  }
  else try {
if (this.o622 == 1) {
    try {
this.o622 = 0;
}catch(e){}
    try {
this.o751();
}catch(e){}
    try {
this.o155[0xFF26] &= 0xFD;
}catch(e){}  //Channel #2 On Flag Off
  }
}catch(e){}
}catch(e){}
  //Channel 3:
  try {
if (this.o630 > 1) {
    try {
--this.o630;
}catch(e){}
  }
  else try {
if (this.o630 == 1) {
    try {
this.o630 = 0;
}catch(e){}
    try {
this.o752();
}catch(e){}
    try {
this.o155[0xFF26] &= 0xFB;
}catch(e){}  //Channel #3 On Flag Off
  }
}catch(e){}
}catch(e){}
  //Channel 4:
  try {
if (this.o636 > 1) {
    try {
--this.o636;
}catch(e){}
  }
  else try {
if (this.o636 == 1) {
    try {
this.o636 = 0;
}catch(e){}
    try {
this.o753();
}catch(e){}
    try {
this.o155[0xFF26] &= 0xF7;
}catch(e){}  //Channel #4 On Flag Off
  }
}catch(e){}
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o748 = function () {try {
"use strict";
}catch(e){}
  //Channel 1:
  try {
if (!this.o613 && this.o615 > 0) {
    try {
if (--this.o615 == 0) {
      try {
this.o754();
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o754 = function () {try {
"use strict";
}catch(e){}
  //Channel 1:
  try {
if (this.o616 > 0) {
    try {
if (this.o618 > 0) {
      try {
if (this.o617 > 0) {
        try {
--this.o617;
}catch(e){}
        try {
if (this.o619) {
          try {
this.o614 -= this.o614 >> this.o618;
}catch(e){}
          try {
this.o612 = this.o614 & 0x7FF;
}catch(e){}
          try {
this.o604 = (0x800 - this.o612) << 2;
}catch(e){}
        }
        else {
          try {
this.o614 += this.o614 >> this.o618;
}catch(e){}
          try {
this.o612 = this.o614;
}catch(e){}
          try {
if (this.o614 <= 0x7FF) {
            try {
this.o604 = (0x800 - this.o612) << 2;
}catch(e){}
            //Run overflow check twice:
            try {
if ((this.o614 + (this.o614 >> this.o618)) > 0x7FF) {
              try {
this.o613 = true;
}catch(e){}
              try {
this.o750();
}catch(e){}
              try {
this.o155[0xFF26] &= 0xFE;
}catch(e){}  //Channel #1 On Flag Off
            }
}catch(e){}
          }
          else {
            try {
this.o612 &= 0x7FF;
}catch(e){}
            try {
this.o613 = true;
}catch(e){}
            try {
this.o750();
}catch(e){}
            try {
this.o155[0xFF26] &= 0xFE;
}catch(e){}  //Channel #1 On Flag Off
          }
}catch(e){}
        }
}catch(e){}
      }
}catch(e){}
      try {
this.o615 = this.o616;
}catch(e){}
    }
    else {
      //Channel has sweep disabled and timer becomes a length counter:
      try {
this.o613 = true;
}catch(e){}
      try {
this.o750();
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o749 = function () {try {
"use strict";
}catch(e){}
  //Channel 1:
  try {
if (this.o610 > -1) {
    try {
if (this.o609 > 0) {
      try {
--this.o609;
}catch(e){}
    }
    else {
      try {
if (!this.o608) {
        try {
if (this.o607 > 0) {
          try {
--this.o607;
}catch(e){}
          try {
this.o609 = this.o610;
}catch(e){}
          try {
this.o727();
}catch(e){}
        }
        else {
          try {
this.o610 = -1;
}catch(e){}
        }
}catch(e){}
      }
      else try {
if (this.o607 < 0xF) {
        try {
++this.o607;
}catch(e){}
        try {
this.o609 = this.o610;
}catch(e){}
        try {
this.o727();
}catch(e){}
      }
      else {
        try {
this.o610 = -1;
}catch(e){}
      }
}catch(e){}
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  //Channel 2:
  try {
if (this.o626 > -1) {
    try {
if (this.o625 > 0) {
      try {
--this.o625;
}catch(e){}
    }
    else {
      try {
if (!this.o624) {
        try {
if (this.o623 > 0) {
          try {
--this.o623;
}catch(e){}
          try {
this.o625 = this.o626;
}catch(e){}
          try {
this.o728();
}catch(e){}
        }
        else {
          try {
this.o626 = -1;
}catch(e){}
        }
}catch(e){}
      }
      else try {
if (this.o623 < 0xF) {
        try {
++this.o623;
}catch(e){}
        try {
this.o625 = this.o626;
}catch(e){}
        try {
this.o728();
}catch(e){}
      }
      else {
        try {
this.o626 = -1;
}catch(e){}
      }
}catch(e){}
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  //Channel 4:
  try {
if (this.o641 > -1) {
    try {
if (this.o640 > 0) {
      try {
--this.o640;
}catch(e){}
    }
    else {
      try {
if (!this.o639) {
        try {
if (this.o637 > 0) {
          try {
this.o638 = --this.o637 << this.o670;
}catch(e){}
          try {
this.o640 = this.o641;
}catch(e){}
          try {
this.o755();
}catch(e){}
        }
        else {
          try {
this.o641 = -1;
}catch(e){}
        }
}catch(e){}
      }
      else try {
if (this.o637 < 0xF) {
        try {
this.o638 = ++this.o637 << this.o670;
}catch(e){}
        try {
this.o640 = this.o641;
}catch(e){}
        try {
this.o755();
}catch(e){}
      }
      else {
        try {
this.o641 = -1;
}catch(e){}
      }
}catch(e){}
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o743 = function () {try {
"use strict";
}catch(e){}
  //Channel 1 counter:
  try {
if (--this.o605 == 0) {
    try {
this.o605 = this.o604;
}catch(e){}
    try {
this.o644 = (this.o644 + 1) & 0x7;
}catch(e){}
    try {
this.o756();
}catch(e){}
  }
}catch(e){}
  //Channel 2 counter:
  try {
if (--this.o621 == 0) {
    try {
this.o621 = this.o620;
}catch(e){}
    try {
this.o646 = (this.o646 + 1) & 0x7;
}catch(e){}
    try {
this.o757();
}catch(e){}
  }
}catch(e){}
  //Channel 3 counter:
  try {
if (--this.o654 == 0) {
    try {
if (this.o629) {
      try {
this.o659 = (this.o659 + 1) & 0x1F;
}catch(e){}
    }
}catch(e){}
    try {
this.o654 = this.o658;
}catch(e){}
    try {
this.o758();
}catch(e){}
  }
}catch(e){}
  //Channel 4 counter:
  try {
if (--this.o655 == 0) {
    try {
this.o635 = (this.o635 + 1) & this.o643;
}catch(e){}
    try {
this.o655 = this.o634;
}catch(e){}
    try {
this.o755();
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o750 = function () {try {
"use strict";
}catch(e){}
  try {
this.o648 = ((this.o611 || this.o606 > 0) && !this.o613 && this.o724);
}catch(e){}
  try {
this.o759();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o760 = function () {try {
"use strict";
}catch(e){}
  try {
this.o724 = (this.o155[0xFF12] > 7);
}catch(e){}
  try {
this.o750();
}catch(e){}
  try {
this.o759();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o727 = function () {try {
"use strict";
}catch(e){}
  try {
this.o462 = (this.o454) ? this.o607 : 0;
}catch(e){}
  try {
this.o463 = (this.o458) ? this.o607 : 0;
}catch(e){}
  try {
this.o759();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o759 = function () {try {
"use strict";
}catch(e){}
  try {
if (this.o648) {
    try {
this.o470 = this.o462;
}catch(e){}
    try {
this.o471 = this.o463;
}catch(e){}
  }
  else {
    try {
this.o470 = 0;
}catch(e){}
    try {
this.o471 = 0;
}catch(e){}
  }
}catch(e){}
  try {
this.o756();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o756 = function () {try {
"use strict";
}catch(e){}
  try {
if (this.o645[this.o644]) {
    try {
this.o478 = this.o470;
}catch(e){}
    try {
this.o479 = this.o471;
}catch(e){}
  }
  else {
    try {
this.o478 = 0;
}catch(e){}
    try {
this.o479 = 0;
}catch(e){}
  }
}catch(e){}
  try {
this.o761();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o751 = function () {try {
"use strict";
}catch(e){}
  try {
this.o649 = ((this.o627 || this.o622 > 0) && this.o725);
}catch(e){}
  try {
this.o762();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o763 = function () {try {
"use strict";
}catch(e){}
  try {
this.o725 = (this.o155[0xFF17] > 7);
}catch(e){}
  try {
this.o751();
}catch(e){}
  try {
this.o762();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o728 = function () {try {
"use strict";
}catch(e){}
  try {
this.o464 = (this.o455) ? this.o623 : 0;
}catch(e){}
  try {
this.o465 = (this.o459) ? this.o623 : 0;
}catch(e){}
  try {
this.o762();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o762 = function () {try {
"use strict";
}catch(e){}
  try {
if (this.o649) {
    try {
this.o472 = this.o464;
}catch(e){}
    try {
this.o473 = this.o465;
}catch(e){}
  }
  else {
    try {
this.o472 = 0;
}catch(e){}
    try {
this.o473 = 0;
}catch(e){}
  }
}catch(e){}
  try {
this.o757();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o757 = function () {try {
"use strict";
}catch(e){}
  try {
if (this.o647[this.o646]) {
    try {
this.o480 = this.o472;
}catch(e){}
    try {
this.o481 = this.o473;
}catch(e){}
  }
  else {
    try {
this.o480 = 0;
}catch(e){}
    try {
this.o481 = 0;
}catch(e){}
  }
}catch(e){}
  try {
this.o761();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o752 = function () {try {
"use strict";
}catch(e){}
  try {
this.o650 = (/*this.channel3canPlay && */(this.o633 || this.o630 > 0));
}catch(e){}
  try {
this.o764();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o729 = function () {try {
"use strict";
}catch(e){}
  try {
this.o466 = (this.o456) ? this.o656 : 0;
}catch(e){}
  try {
this.o467 = (this.o460) ? this.o656 : 0;
}catch(e){}
  try {
this.o764();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o764 = function () {try {
"use strict";
}catch(e){}
  try {
if (this.o650) {
    try {
this.o474 = this.o466;
}catch(e){}
    try {
this.o475 = this.o467;
}catch(e){}
  }
  else {
    try {
this.o474 = 0;
}catch(e){}
    try {
this.o475 = 0;
}catch(e){}
  }
}catch(e){}
  try {
this.o761();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o753 = function () {try {
"use strict";
}catch(e){}
  try {
this.o651 = ((this.o642 || this.o636 > 0) && this.o726);
}catch(e){}
  try {
this.o765();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o766 = function () {try {
"use strict";
}catch(e){}
  try {
this.o726 = (this.o155[0xFF21] > 7);
}catch(e){}
  try {
this.o753();
}catch(e){}
  try {
this.o765();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o730 = function () {try {
"use strict";
}catch(e){}
  try {
this.o468 = (this.o457) ? this.o657 : 0;
}catch(e){}
  try {
this.o469 = (this.o461) ? this.o657 : 0;
}catch(e){}
  try {
this.o765();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o765 = function () {try {
"use strict";
}catch(e){}
  try {
if (this.o651) {
    try {
this.o476 = this.o468;
}catch(e){}
    try {
this.o477 = this.o469;
}catch(e){}
  }
  else {
    try {
this.o476 = 0;
}catch(e){}
    try {
this.o477 = 0;
}catch(e){}
  }
}catch(e){}
  try {
this.o761();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o761 = function () {try {
"use strict";
}catch(e){}
  try {
this.o482 = ((((this.o478 + this.o480 + this.o474 + this.o476) * this.o452) << 9) +
  ((this.o479 + this.o481 + this.o475 + this.o477) * this.o453));
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o758 = function () {try {
"use strict";
}catch(e){}
  try {
this.o656 = this.o451[this.o659] >> this.o631;
}catch(e){}
  try {
this.o729();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o767 = function (o768, o70) {try {
"use strict";
}catch(e){}
  try {
if (this.o629) {
    try {
this.o746();
}catch(e){}
    //address = this.channel3lastSampleLookup >> 1;
  }
}catch(e){}
  try {
this.o155[0xFF30 | o768] = o70;
}catch(e){}
  try {
o768 <<= 1;
}catch(e){}
  try {
this.o451[o768] = o70 >> 4;
}catch(e){}
  try {
this.o451[o768 | 1] = o70 & 0xF;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o755 = function () {try {
"use strict";
}catch(e){}
  try {
this.o657 = this.o448[this.o638 | this.o635];
}catch(e){}
  try {
this.o730();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o12 = function () {try {
"use strict";
}catch(e){}
  //The preprocessing before the actual iteration loop:
  try {
if ((this.o380 & 2) == 0) {
    try {
if ((this.o380 & 1) == 1) {
      try {
if (!this.o389) {
        try {
this.o380 = 0;
}catch(e){}
        try {
this.o536 = false;
}catch(e){}
        try {
this.o721();
}catch(e){}
        try {
this.o769();
}catch(e){}      //RTC clocking.
        try {
if (!this.o378) {
          try {
this.o770();
}catch(e){}
        }
        else {            //Finish the HALT rundown execution.
          try {
this.o386 = 0;
}catch(e){}
          try {
this.o587();
}catch(e){}
          try {
if (this.o378) {
            try {
this.o771();
}catch(e){}
          }
          else {
            try {
this.o770();
}catch(e){}
          }
}catch(e){}
        }
}catch(e){}
        //Request the graphics target to be updated:
        try {
this.o710();
}catch(e){}
      }
      else {
        try {
this.o721();
}catch(e){}
        try {
this.o485 += this.o369;
}catch(e){}
        try {
this.o746();
}catch(e){}
        try {
this.o380 |= 1;
}catch(e){}      //End current loop.
      }
}catch(e){}
    }
    else {    //We can only get here if there was an internal error, but the loop was restarted.
      try {
o113("Iterator restarted a faulted core.", 2);
}catch(e){}
      try {
o593();
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}

try {
o360.prototype.o770 = function () {try {
"use strict";
}catch(e){}
  //Iterate the interpreter loop:
  var o772 = 0;
  var o773 = 0;
  try {
while (this.o380 == 0) {
    //Interrupt Arming:
    try {
switch (this.o497) {
      case 1:
        try {
this.o381 = true;
}catch(e){}
        try {
this.o664();
}catch(e){}
      case 2:
        try {
--this.o497;
}catch(e){}
    }
}catch(e){}
    //Is an IRQ set to fire?:
    try {
if (this.o382 > 0) {
      //IME is true and and interrupt was matched:
      try {
this.o774();
}catch(e){}
    }
}catch(e){}
    //Fetch the current opcode:
    try {
o772 = this.o390[this.o149](this, this.o149);
}catch(e){}
    //Increment the program counter to the next instruction:
    try {
this.o149 = (this.o149 + 1) & 0xFFFF;
}catch(e){}
    //Check for the program counter quirk:
    try {
if (this.o379) {
      try {
this.o149 = (this.o149 - 1) & 0xFFFF;
}catch(e){}
      try {
this.o379 = false;
}catch(e){}
    }
}catch(e){}
    //Get how many CPU cycles the current instruction counts for:
    try {
this.o386 = this.o599[o772];
}catch(e){}
    //Execute the current instruction:
    try {
this.o578[o772](this);
}catch(e){}
    //Update the state (Inlined updateCoreFull manually here):
    //Update the clocking for the LCD emulation:
    try {
this.o490 += this.o386 >> this.o387;
}catch(e){}  //LCD Timing
    try {
this.o422[this.o502](this);
}catch(e){}          //Scan Line and STAT Mode Control
    //Single-speed relative timing for A/V emulation:
    try {
o773 = this.o386 >> this.o387;
}catch(e){}    //CPU clocking can be updated from the LCD handling.
    try {
this.o485 += o773;
}catch(e){}                //Audio Timing
    try {
this.o488 += o773;
}catch(e){}              //Emulator Timing
    //CPU Timers:
    try {
this.o489 += this.o386;
}catch(e){}                //DIV Timing
    try {
if (this.o492) {                    //TIMA Timing
      try {
this.o491 += this.o386;
}catch(e){}
      try {
while (this.o491 >= this.o493) {
        try {
this.o491 -= this.o493;
}catch(e){}
        try {
if (++this.o155[0xFF05] == 0x100) {
          try {
this.o155[0xFF05] = this.o155[0xFF06];
}catch(e){}
          try {
this.o383 |= 0x4;
}catch(e){}
          try {
this.o664();
}catch(e){}
        }
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
    try {
if (this.o494 > 0) {                    //Serial Timing
      //IRQ Counter:
      try {
this.o494 -= this.o386;
}catch(e){}
      try {
if (this.o494 <= 0) {
        try {
this.o383 |= 0x8;
}catch(e){}
        try {
this.o664();
}catch(e){}
      }
}catch(e){}
      //Bit Shit Counter:
      try {
this.o495 -= this.o386;
}catch(e){}
      try {
if (this.o495 <= 0) {
        try {
this.o495 = this.o496;
}catch(e){}
        try {
this.o155[0xFF01] = ((this.o155[0xFF01] << 1) & 0xFE) | 0x01;
}catch(e){}  //We could shift in actual link data here if we were to implement such!!!
      }
}catch(e){}
    }
}catch(e){}
    //End of iteration routine:
    try {
if (this.o488 >= this.o369) {
      try {
this.o775();
}catch(e){}
    }
}catch(e){}
    // Start of code added for benchmarking:
    try {
this.o91 += 1;
}catch(e){}
    try {
if (this.o91 > this.o92) {
      try {
this.o775();
}catch(e){}
      try {
this.o380 |= 2;
}catch(e){}
      try {
o140();
}catch(e){}
    }
}catch(e){}
    // End of code added for benchmarking.
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o775 = function () {try {
"use strict";
}catch(e){}
  try {
if ((this.o380 & 0x1) == 0) {
    try {
this.o746();
}catch(e){}  //Make sure we at least output once per iteration.
    //Update DIV Alignment (Integer overflow safety):
    try {
this.o155[0xFF04] = (this.o155[0xFF04] + (this.o489 >> 8)) & 0xFF;
}catch(e){}
    try {
this.o489 &= 0xFF;
}catch(e){}
    //Update emulator flags:
    try {
this.o380 |= 1;
}catch(e){}      //End current loop.
    try {
this.o488 -= this.o369;
}catch(e){}
    try {
this.o371 += this.o372;
}catch(e){}
    try {
this.o723();
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o583 = function () {try {
"use strict";
}catch(e){}
  try {
this.o389 = true;
}catch(e){}            //Stop CPU until joypad input changes.
  try {
this.o775();
}catch(e){}
  try {
if (this.o488 < 0) {
    try {
this.o485 -= this.o488;
}catch(e){}
    try {
this.o746();
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o723 = function () {try {
"use strict";
}catch(e){}
  var o776 = this.o371 % 4;
  try {
this.o369 = this.o370 + this.o371 - o776;
}catch(e){}
  try {
this.o371 = o776;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o777 = function () {try {
"use strict";
}catch(e){}  //OAM Search Period
  try {
if (this.o411 != 1) {
    try {
if (this.o415) {
      try {
this.o383 |= 0x2;
}catch(e){}
      try {
this.o664();
}catch(e){}
    }
}catch(e){}
    try {
this.o411 = 1;
}catch(e){}
    try {
this.o412 = 2;
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o778 = function () {try {
"use strict";
}catch(e){}  //Scan Line Drawing Period
  try {
if (this.o412 != 3) {
    try {
if (this.o411 == 0 && this.o415) {
      try {
this.o383 |= 0x2;
}catch(e){}
      try {
this.o664();
}catch(e){}
    }
}catch(e){}
    try {
this.o411 = 1;
}catch(e){}
    try {
this.o412 = 3;
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o779 = function () {try {
"use strict";
}catch(e){}  //Horizontal Blanking Period
  try {
if (this.o412 != 0) {
    try {
if (this.o411 != 2) {
      try {
if (this.o411 == 0) {
        try {
if (this.o415) {
          try {
this.o383 |= 0x2;
}catch(e){}
          try {
this.o664();
}catch(e){}
        }
}catch(e){}
        try {
this.o412 = 3;
}catch(e){}
      }
}catch(e){}
      try {
this.o780();
}catch(e){}
      try {
this.o781(this.o502);
}catch(e){}
      try {
this.o411 = 2;
}catch(e){}
    }
}catch(e){}
    try {
if (this.o490 >= this.o413) {
      try {
if (this.o385) {
        try {
this.o782();
}catch(e){}
      }
}catch(e){}
      try {
if (this.o417) {
        try {
this.o383 |= 0x2;
}catch(e){}
        try {
this.o664();
}catch(e){}
      }
}catch(e){}
      try {
this.o411 = 3;
}catch(e){}
      try {
this.o412 = 0;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o783 = function () {try {
"use strict";
}catch(e){}
  try {
if (this.o155[0xFF45] != 0) {
    try {
if (this.o155[0xFF45] > this.o502) {
      try {
return 456 * (this.o155[0xFF45] - this.o502);
}catch(e){}
    }
}catch(e){}
    try {
return 456 * (154 - this.o502 + this.o155[0xFF45]);
}catch(e){}
  }
}catch(e){}
  try {
return (456 * ((this.o502 == 153 && this.o155[0xFF44] == 0) ? 154 : (153 - this.o502))) + 8;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o784 = function () {try {
"use strict";
}catch(e){}
  try {
switch (this.o412) {
    case 0:
      try {
if (this.o502 == 143) {
        try {
this.o781(0);
}catch(e){}
        try {
return this.o413 + 5016;
}catch(e){}
      }
}catch(e){}
      try {
this.o781(this.o502 + 1);
}catch(e){}
      try {
return this.o413 + 456;
}catch(e){}
    case 2:
    case 3:
      try {
this.o781(this.o502);
}catch(e){}
      try {
return this.o413;
}catch(e){}
    case 1:
      try {
this.o781(0);
}catch(e){}
      try {
return this.o413 + (456 * (154 - this.o502));
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o781 = function (o335) {try {
"use strict";
}catch(e){}
  try {
this.o413 = 252;
}catch(e){}
  try {
if (this.o400 && this.o526) {                    //Is the window enabled and are we in CGB mode?
    var o785 = o335 + 0x10;
    var o786 = 0;
    var o787 = (this.o527) ? 0x8 : 0x10;
    try {
for (var o788 = 0xFE00; o788 < 0xFEA0 && this.o413 < 312; o788 += 4) {
      try {
o786 = o785 - this.o155[o788];
}catch(e){}
      try {
if (o786 > -1 && o786 < o787) {
        try {
this.o413 += 6;
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o789 = function () {try {
"use strict";
}catch(e){}  //LYC Register Compare
  try {
if (this.o155[0xFF44] == this.o155[0xFF45]) {
    try {
this.o155[0xFF41] |= 0x04;
}catch(e){}
    try {
if (this.o414) {
      try {
this.o383 |= 0x2;
}catch(e){}
      try {
this.o664();
}catch(e){}
    }
}catch(e){}
  }
  else {
    try {
this.o155[0xFF41] &= 0x7B;
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o790 = function () {try {
"use strict";
}catch(e){}
  //Update the clocking for the LCD emulation:
  try {
this.o490 += this.o386 >> this.o387;
}catch(e){}  //LCD Timing
  try {
this.o422[this.o502](this);
}catch(e){}          //Scan Line and STAT Mode Control
  //Single-speed relative timing for A/V emulation:
  var o773 = this.o386 >> this.o387;  //CPU clocking can be updated from the LCD handling.
  try {
this.o485 += o773;
}catch(e){}                //Audio Timing
  try {
this.o488 += o773;
}catch(e){}              //Emulator Timing
  //CPU Timers:
  try {
this.o489 += this.o386;
}catch(e){}                //DIV Timing
  try {
if (this.o492) {                    //TIMA Timing
    try {
this.o491 += this.o386;
}catch(e){}
    try {
while (this.o491 >= this.o493) {
      try {
this.o491 -= this.o493;
}catch(e){}
      try {
if (++this.o155[0xFF05] == 0x100) {
        try {
this.o155[0xFF05] = this.o155[0xFF06];
}catch(e){}
        try {
this.o383 |= 0x4;
}catch(e){}
        try {
this.o664();
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
if (this.o494 > 0) {                    //Serial Timing
    //IRQ Counter:
    try {
this.o494 -= this.o386;
}catch(e){}
    try {
if (this.o494 <= 0) {
      try {
this.o383 |= 0x8;
}catch(e){}
      try {
this.o664();
}catch(e){}
    }
}catch(e){}
    //Bit Shit Counter:
    try {
this.o495 -= this.o386;
}catch(e){}
    try {
if (this.o495 <= 0) {
      try {
this.o495 = this.o496;
}catch(e){}
      try {
this.o155[0xFF01] = ((this.o155[0xFF01] << 1) & 0xFE) | 0x01;
}catch(e){}  //We could shift in actual link data here if we were to implement such!!!
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o771 = function () {try {
"use strict";
}catch(e){}
  //Update the state machine:
  try {
this.o790();
}catch(e){}
  //End of iteration routine:
  try {
if (this.o488 >= this.o369) {
    try {
this.o775();
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o423 = function () {try {
"use strict";
}catch(e){}
  //Display on hanlding:
  var o335 = 0;
  try {
while (o335 < 154) {
    try {
if (o335 < 143) {
      //We're on a normal scan line:
      try {
this.o419[o335] = function (o421) {try {
"use strict";
}catch(e){}
        try {
if (o421.o490 < 80) {
          try {
o421.o777();
}catch(e){}
        }
        else try {
if (o421.o490 < 252) {
          try {
o421.o778();
}catch(e){}
        }
        else try {
if (o421.o490 < 456) {
          try {
o421.o779();
}catch(e){}
        }
        else {
          //We're on a new scan line:
          try {
o421.o490 -= 456;
}catch(e){}
          try {
if (o421.o411 != 3) {
            //Make sure the mode 0 handler was run at least once per scan line:
            try {
if (o421.o411 != 2) {
              try {
if (o421.o411 == 0 && o421.o415) {
                try {
o421.o383 |= 0x2;
}catch(e){}
              }
}catch(e){}
              try {
o421.o780();
}catch(e){}
            }
}catch(e){}
            try {
if (o421.o385) {
              try {
o421.o782();
}catch(e){}
            }
}catch(e){}
            try {
if (o421.o417) {
              try {
o421.o383 |= 0x2;
}catch(e){}
            }
}catch(e){}
          }
}catch(e){}
          //Update the scanline registers and assert the LYC counter:
          try {
o421.o502 = ++o421.o155[0xFF44];
}catch(e){}
          //Perform a LYC counter assert:
          try {
if (o421.o502 == o421.o155[0xFF45]) {
            try {
o421.o155[0xFF41] |= 0x04;
}catch(e){}
            try {
if (o421.o414) {
              try {
o421.o383 |= 0x2;
}catch(e){}
            }
}catch(e){}
          }
          else {
            try {
o421.o155[0xFF41] &= 0x7B;
}catch(e){}
          }
}catch(e){}
          try {
o421.o664();
}catch(e){}
          //Reset our mode contingency variables:
          try {
o421.o411 = 0;
}catch(e){}
          try {
o421.o412 = 2;
}catch(e){}
          try {
o421.o419[o421.o502](o421);
}catch(e){}  //Scan Line and STAT Mode Control.
        }
}catch(e){}
}catch(e){}
}catch(e){}
      }
}catch(e){}
    }
    else try {
if (o335 == 143) {
      //We're on the last visible scan line of the LCD screen:
      try {
this.o419[143] = function (o421) {try {
"use strict";
}catch(e){}
        try {
if (o421.o490 < 80) {
          try {
o421.o777();
}catch(e){}
        }
        else try {
if (o421.o490 < 252) {
          try {
o421.o778();
}catch(e){}
        }
        else try {
if (o421.o490 < 456) {
          try {
o421.o779();
}catch(e){}
        }
        else {
          //Starting V-Blank:
          //Just finished the last visible scan line:
          try {
o421.o490 -= 456;
}catch(e){}
          try {
if (o421.o411 != 3) {
            //Make sure the mode 0 handler was run at least once per scan line:
            try {
if (o421.o411 != 2) {
              try {
if (o421.o411 == 0 && o421.o415) {
                try {
o421.o383 |= 0x2;
}catch(e){}
              }
}catch(e){}
              try {
o421.o780();
}catch(e){}
            }
}catch(e){}
            try {
if (o421.o385) {
              try {
o421.o782();
}catch(e){}
            }
}catch(e){}
            try {
if (o421.o417) {
              try {
o421.o383 |= 0x2;
}catch(e){}
            }
}catch(e){}
          }
}catch(e){}
          //Update the scanline registers and assert the LYC counter:
          try {
o421.o502 = o421.o155[0xFF44] = 144;
}catch(e){}
          //Perform a LYC counter assert:
          try {
if (o421.o155[0xFF45] == 144) {
            try {
o421.o155[0xFF41] |= 0x04;
}catch(e){}
            try {
if (o421.o414) {
              try {
o421.o383 |= 0x2;
}catch(e){}
            }
}catch(e){}
          }
          else {
            try {
o421.o155[0xFF41] &= 0x7B;
}catch(e){}
          }
}catch(e){}
          //Reset our mode contingency variables:
          try {
o421.o411 = 0;
}catch(e){}
          //Update our state for v-blank:
          try {
o421.o412 = 1;
}catch(e){}
          try {
o421.o383 |= (o421.o416) ? 0x3 : 0x1;
}catch(e){}
          try {
o421.o664();
}catch(e){}
          //Attempt to blit out to our canvas:
          try {
if (o421.o535 == 0) {
            //Ensure JIT framing alignment:
            try {
if (o421.o505 < 144 || (o421.o505 == 144 && o421.o537 > -1)) {
              //Make sure our gfx are up-to-date:
              try {
o421.o791();
}catch(e){}
              //Draw the frame:
              try {
o421.o792();
}catch(e){}
            }
}catch(e){}
          }
          else {
            //LCD off takes at least 2 frames:
            try {
--o421.o535;
}catch(e){}
          }
}catch(e){}
          try {
o421.o419[144](o421);
}catch(e){}  //Scan Line and STAT Mode Control.
        }
}catch(e){}
}catch(e){}
}catch(e){}
      }
}catch(e){}
    }
    else try {
if (o335 < 153) {
      //In VBlank
      try {
this.o419[o335] = function (o421) {try {
"use strict";
}catch(e){}
        try {
if (o421.o490 >= 456) {
          //We're on a new scan line:
          try {
o421.o490 -= 456;
}catch(e){}
          try {
o421.o502 = ++o421.o155[0xFF44];
}catch(e){}
          //Perform a LYC counter assert:
          try {
if (o421.o502 == o421.o155[0xFF45]) {
            try {
o421.o155[0xFF41] |= 0x04;
}catch(e){}
            try {
if (o421.o414) {
              try {
o421.o383 |= 0x2;
}catch(e){}
              try {
o421.o664();
}catch(e){}
            }
}catch(e){}
          }
          else {
            try {
o421.o155[0xFF41] &= 0x7B;
}catch(e){}
          }
}catch(e){}
          try {
o421.o419[o421.o502](o421);
}catch(e){}  //Scan Line and STAT Mode Control.
        }
}catch(e){}
      }
}catch(e){}
    }
    else {
      //VBlank Ending (We're on the last actual scan line)
      try {
this.o419[153] = function (o421) {try {
"use strict";
}catch(e){}
        try {
if (o421.o490 >= 8) {
          try {
if (o421.o411 != 4 && o421.o155[0xFF44] == 153) {
            try {
o421.o155[0xFF44] = 0;
}catch(e){}  //LY register resets to 0 early.
            //Perform a LYC counter assert:
            try {
if (o421.o155[0xFF45] == 0) {
              try {
o421.o155[0xFF41] |= 0x04;
}catch(e){}
              try {
if (o421.o414) {
                try {
o421.o383 |= 0x2;
}catch(e){}
                try {
o421.o664();
}catch(e){}
              }
}catch(e){}
            }
            else {
              try {
o421.o155[0xFF41] &= 0x7B;
}catch(e){}
            }
}catch(e){}
            try {
o421.o411 = 4;
}catch(e){}
          }
}catch(e){}
          try {
if (o421.o490 >= 456) {
            //We reset back to the beginning:
            try {
o421.o490 -= 456;
}catch(e){}
            try {
o421.o411 = o421.o502 = 0;
}catch(e){}
            try {
o421.o419[0](o421);
}catch(e){}  //Scan Line and STAT Mode Control.
          }
}catch(e){}
        }
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
}catch(e){}
}catch(e){}
    try {
++o335;
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o793 = function () {try {
"use strict";
}catch(e){}
  try {
if (this.o535 == 0) {
    //Output a blank screen to the output framebuffer:
    try {
this.o794();
}catch(e){}
    try {
this.o536 = true;
}catch(e){}
  }
}catch(e){}
  try {
this.o535 = 2;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o782 = function () {try {
"use strict";
}catch(e){}
  try {
this.o795(1);
}catch(e){}
  try {
if (this.o378) {
    try {
if ((this.o490 - this.o413) < ((4 >> this.o387) | 0x20)) {
      //HALT clocking correction:
      try {
this.o386 = 4 + ((0x20 + this.o413) << this.o387);
}catch(e){}
      try {
this.o490 = this.o413 + ((4 >> this.o387) | 0x20);
}catch(e){}
    }
}catch(e){}
  }
  else {
    try {
this.o490 += (4 >> this.o387) | 0x20;
}catch(e){}      //LCD Timing Update For HDMA.
  }
}catch(e){}
  try {
if (this.o155[0xFF55] == 0) {
    try {
this.o385 = false;
}catch(e){}
    try {
this.o155[0xFF55] = 0xFF;
}catch(e){}  //Transfer completed ("Hidden last step," since some ROMs don't imply this, but most do).
  }
  else {
    try {
--this.o155[0xFF55];
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o769 = function () {try {
"use strict";
}catch(e){}
  try {
if (this.o519) {
    var o796 = o138(); // The line is changed for benchmarking.
    var o797 = o796.o139();
    var o798 = o797 - this.o499;  //Get the numnber of milliseconds since this last executed.
    try {
this.o499 = o797;
}catch(e){}
    try {
if (this.o519 && !this.o435) {
      //Update the MBC3 RTC:
      try {
this.o430 += o798 / 1000;
}catch(e){}
      try {
while (this.o430 >= 60) {  //System can stutter, so the seconds difference can get large, thus the "while".
        try {
this.o430 -= 60;
}catch(e){}
        try {
++this.o431;
}catch(e){}
        try {
if (this.o431 >= 60) {
          try {
this.o431 -= 60;
}catch(e){}
          try {
++this.o432;
}catch(e){}
          try {
if (this.o432 >= 24) {
            try {
this.o432 -= 24
}catch(e){}
            try {
++this.o433;
}catch(e){}
            try {
if (this.o433 >= 512) {
              try {
this.o433 -= 512;
}catch(e){}
              try {
this.o434 = true;
}catch(e){}
            }
}catch(e){}
          }
}catch(e){}
        }
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o792 = function () {try {
"use strict";
}catch(e){}
  //Copy the internal frame buffer to the output buffer:
  try {
this.o799();
}catch(e){}
  try {
this.o536 = true;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o710 = function () {try {
"use strict";
}catch(e){}
  try {
if (this.o536) {
    try {
this.o800();
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o800 = function () {try {
"use strict";
}catch(e){}
  var o801 = this.o573;
  try {
if (o801 > 0) {
    //We actually updated the graphics internally, so copy out:
    var o565 = (o801 == 92160) ? this.o566 : this.o802();
    var o803 = this.o567.o70;
    var o804 = 0;
    try {
for (var o805 = 0; o805 < o801; ++o805) {
      try {
o803[o805++] = o565[o804++];
}catch(e){}
      try {
o803[o805++] = o565[o804++];
}catch(e){}
      try {
o803[o805++] = o565[o804++];
}catch(e){}
    }
}catch(e){}
    try {
this.o709();
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o799 = function () {try {
"use strict";
}catch(e){}
  //Convert our dirty 24-bit (24-bit, with internal render flags above it) framebuffer to an 8-bit buffer with separate indices for the RGB channels:
  var o565 = this.o565;
  var o566 = this.o566;
  var o804 = 0;
  try {
for (var o805 = 0; o805 < 69120;) {
    try {
o566[o805++] = (o565[o804] >> 16) & 0xFF;
}catch(e){}    //Red
    try {
o566[o805++] = (o565[o804] >> 8) & 0xFF;
}catch(e){}    //Green
    try {
o566[o805++] = o565[o804++] & 0xFF;
}catch(e){}      //Blue
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o794 = function () {try {
"use strict";
}catch(e){}
  var o804 = 0;
  var o565 = this.o566;
  try {
if (this.o400 || this.o561) {
    try {
while (o804 < 69120) {
      try {
o565[o804++] = 248;
}catch(e){}
    }
}catch(e){}
  }
  else {
    try {
while (o804 < 69120) {
      try {
o565[o804++] = 239;
}catch(e){}
      try {
o565[o804++] = 255;
}catch(e){}
      try {
o565[o804++] = 222;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o802 = function () {try {
"use strict";
}catch(e){}
  //Return a reference to the generated resized framebuffer:
  try {
return this.o704.o353(this.o566);
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o703 = function () {try {
"use strict";
}catch(e){}
  try {
if (this.o573 > 0) {
    try {
this.o704 = new o304(160, 144, this.o570, this.o702, false, true);
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o806 = function (o807) {try {
"use strict";
}catch(e){}
  try {
this.o568 = o807 * 160;
}catch(e){}
  try {
if (this.o528) {
    try {
this.o538 = 160;
}catch(e){}
    try {
this.o562(o807);
}catch(e){}
    try {
this.o563(o807);
}catch(e){}
  }
  else {
    var o808 = (o807 + 1) * 160;
    var o809 = (this.o400 || this.o561) ? 0xF8F8F8 : 0xEFFFDE;
    try {
for (var o810 = (o807 * 160) + this.o539; o810 < o808; o810++) {
      try {
this.o565[o810] = o809;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
this.o564(o807);
}catch(e){}
  try {
this.o539 = 0;
}catch(e){}
  try {
this.o537 = -1;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o811 = function () {try {
"use strict";
}catch(e){}
  try {
if (this.o502 < 144 && this.o412 == 3) {
    //TODO: Get this accurate:
    try {
if (this.o537 == -1) {
      try {
this.o537 = this.o523 & 0x7;
}catch(e){}
    }
}catch(e){}
    try {
if (this.o490 >= 82) {
      try {
this.o538 = this.o490 - 74;
}catch(e){}
      try {
this.o538 = Math.o279(this.o538 - this.o537 - (this.o538 % 0x8), 160);
}catch(e){}
      try {
if (this.o528) {
        try {
this.o568 = this.o503 * 160;
}catch(e){}
        try {
this.o562(this.o503);
}catch(e){}
        try {
this.o563(this.o503);
}catch(e){}
        //TODO: Do midscanline JIT for sprites...
      }
      else {
        var o808 = (this.o503 * 160) + this.o538;
        var o809 = (this.o400 || this.o561) ? 0xF8F8F8 : 0xEFFFDE;
        try {
for (var o810 = (this.o503 * 160) + this.o539; o810 < o808; o810++) {
          try {
this.o565[o810] = o809;
}catch(e){}
        }
}catch(e){}
      }
}catch(e){}
      try {
this.o539 = this.o538;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o691 = function () {try {
"use strict";
}catch(e){}
  try {
this.o422 = (this.o418) ? this.o419 : this.o420;
}catch(e){}
  try {
if (this.o400) {
    try {
this.o547 = this.o676(0x40, 0, "uint8");
}catch(e){}
    try {
this.o548 = this.o676(0x40, 0, "uint8");
}catch(e){}
    try {
this.o551 = this.o676(0x20, 0x1000000, "int32");
}catch(e){}
    try {
this.o552 = this.o676(0x40, 0, "int32");
}catch(e){}
    try {
this.o541 = this.o676(0x800, 0, "uint8");
}catch(e){}
    try {
this.o542 = (this.o522 > 0) ? this.o541 : this.o540;
}catch(e){}
    try {
this.o543 = this.o677(0xF80);
}catch(e){}
  }
  else {
    try {
this.o549 = this.o676(8, 0, "int32");
}catch(e){}
    try {
this.o550 = this.o676(4, 0, "int32");
}catch(e){}
    try {
this.o546 = this.o550;
}catch(e){}
    try {
this.o545 = this.o549;
}catch(e){}
    try {
this.o543 = this.o677(0x700);
}catch(e){}
    try {
this.o812 = this.o676(0x100, 0, "uint8");
}catch(e){}
    try {
this.o813 = this.o676(10, 0, "int32");
}catch(e){}
  }
}catch(e){}
  try {
this.o814();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o695 = function () {try {
"use strict";
}catch(e){}
  try {
o113("Stepping down from GBC mode.", 0);
}catch(e){}
  try {
this.o394 = this.o395 = this.o542 = this.o541 = null;
}catch(e){}
  try {
this.o543.length = 0x700;
}catch(e){}
  try {
if (o683[4]) {
    try {
this.o553 = this.o676(4, 0, "int32");
}catch(e){}
    try {
this.o554 = this.o676(8, 0, "int32");
}catch(e){}
    try {
this.o555 = this.o676(4, 0, "int32");
}catch(e){}
    try {
this.o556 = this.o676(8, 0, "int32");
}catch(e){}
    try {
this.o546 = this.o553;
}catch(e){}
    try {
this.o545 = this.o554;
}catch(e){}
    try {
this.o549 = this.o550 = null;
}catch(e){}
    try {
this.o815();
}catch(e){}
  }
  else {
    try {
this.o549 = this.o676(8, 0, "int32");
}catch(e){}
    try {
this.o550 = this.o676(4, 0, "int32");
}catch(e){}
    try {
this.o546 = this.o550;
}catch(e){}
    try {
this.o545 = this.o549;
}catch(e){}
  }
}catch(e){}
  try {
this.o812 = this.o676(0x100, 0, "uint8");
}catch(e){}
  try {
this.o813 = this.o676(10, 0, "int32");
}catch(e){}
  try {
this.o814();
}catch(e){}
  try {
this.o666();
}catch(e){}
  try {
this.o667();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o814 = function () {try {
"use strict";
}catch(e){}
  try {
if (!this.o400) {
    try {
this.o562 = this.o816;
}catch(e){}
    try {
this.o563 = this.o817;
}catch(e){}
    try {
this.o564 = this.o818;
}catch(e){}
  }
  else {
    try {
this.o819();
}catch(e){}
    try {
this.o564 = this.o820;
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o819 = function () {try {
"use strict";
}catch(e){}
  try {
if (this.o529) {
    try {
this.o562 = this.o821;
}catch(e){}
    try {
this.o563 = this.o822;
}catch(e){}
  }
  else {
    try {
this.o562 = this.o823;
}catch(e){}
    try {
this.o563 = this.o824;
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o665 = function () {try {
"use strict";
}catch(e){}
  try {
this.o422 = (this.o418) ? this.o419 : this.o420;
}catch(e){}
  var o825 = 0;
  try {
if (!this.o400) {
    try {
if (this.o561) {
      try {
this.o546 = this.o553;
}catch(e){}
      try {
this.o545 = this.o554;
}catch(e){}
      try {
this.o557 = this.o826;
}catch(e){}
      try {
this.o559 = this.o827;
}catch(e){}

    }
    else {
      try {
this.o546 = this.o550;
}catch(e){}
      try {
this.o545 = this.o549;
}catch(e){}
    }
}catch(e){}
    try {
this.o543 = this.o677(0x700);
}catch(e){}
    try {
for (o825 = 0x8000; o825 < 0x9000; o825 += 2) {
      try {
this.o828(o825);
}catch(e){}
    }
}catch(e){}
    try {
for (o825 = 0x9000; o825 < 0x9800; o825 += 2) {
      try {
this.o829(o825);
}catch(e){}
    }
}catch(e){}
    try {
this.o812 = this.o676(0x100, 0, "uint8");
}catch(e){}
    try {
this.o813 = this.o676(10, 0, "int32");
}catch(e){}
  }
  else {
    try {
this.o542 = (this.o522 > 0) ? this.o541 : this.o540;
}catch(e){}
    try {
this.o543 = this.o677(0xF80);
}catch(e){}
    try {
for (; o825 < 0x1800; o825 += 0x10) {
      try {
this.o830(o825);
}catch(e){}
      try {
this.o831(o825);
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
this.o814();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o832 = function (value) {try {
"use strict";
}catch(e){}
  //Adjustment for the GBC's tinting (According to Gambatte):
  var o833 = value & 0x1F;
  var o834 = (value >> 5) & 0x1F;
  var o835 = (value >> 10) & 0x1F;
  try {
return ((o833 * 13 + o834 * 2 + o835) >> 1) << 16 | (o834 * 3 + o835) << 9 | (o833 * 3 + o834 * 2 + o835 * 11) >> 1;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o815 = function () {try {
"use strict";
}catch(e){}
  //GBC Colorization of DMG ROMs:
  //BG
  try {
for (var o836 = 0; o836 < 4; o836++) {
    var o837 = o836 << 1;
    //BG
    try {
this.o555[o836] = this.o832((this.o548[o837 | 1] << 8) | this.o548[o837]);
}catch(e){}
    //OBJ 1
    try {
this.o556[o836] = this.o832((this.o547[o837 | 1] << 8) | this.o547[o837]);
}catch(e){}
  }
}catch(e){}
  //OBJ 2
  try {
for (o836 = 4; o836 < 8; o836++) {
    try {
o837 = o836 << 1;
}catch(e){}
    try {
this.o556[o836] = this.o832((this.o547[o837 | 1] << 8) | this.o547[o837]);
}catch(e){}
  }
}catch(e){}
  //Update the palette entries:
  try {
this.o557 = this.o826;
}catch(e){}
  try {
this.o559 = this.o827;
}catch(e){}
  try {
this.o557(this.o155[0xFF47]);
}catch(e){}
  try {
this.o559(0, this.o155[0xFF48]);
}catch(e){}
  try {
this.o559(1, this.o155[0xFF49]);
}catch(e){}
  try {
this.o561 = true;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o558 = function (o70) {try {
"use strict";
}catch(e){}
  try {
this.o550[0] = this.o544[o70 & 0x03] | 0x2000000;
}catch(e){}
  try {
this.o550[1] = this.o544[(o70 >> 2) & 0x03];
}catch(e){}
  try {
this.o550[2] = this.o544[(o70 >> 4) & 0x03];
}catch(e){}
  try {
this.o550[3] = this.o544[o70 >> 6];
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o826 = function (o70) {try {
"use strict";
}catch(e){}
  //GB colorization:
  try {
this.o553[0] = this.o555[o70 & 0x03] | 0x2000000;
}catch(e){}
  try {
this.o553[1] = this.o555[(o70 >> 2) & 0x03];
}catch(e){}
  try {
this.o553[2] = this.o555[(o70 >> 4) & 0x03];
}catch(e){}
  try {
this.o553[3] = this.o555[o70 >> 6];
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o560 = function (index, o70) {try {
"use strict";
}catch(e){}
  try {
this.o549[index | 1] = this.o544[(o70 >> 2) & 0x03];
}catch(e){}
  try {
this.o549[index | 2] = this.o544[(o70 >> 4) & 0x03];
}catch(e){}
  try {
this.o549[index | 3] = this.o544[o70 >> 6];
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o827 = function (index, o70) {try {
"use strict";
}catch(e){}
  //GB colorization:
  try {
this.o554[index | 1] = this.o556[index | ((o70 >> 2) & 0x03)];
}catch(e){}
  try {
this.o554[index | 2] = this.o556[index | ((o70 >> 4) & 0x03)];
}catch(e){}
  try {
this.o554[index | 3] = this.o556[index | (o70 >> 6)];
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o838 = function (index, o70) {try {
"use strict";
}catch(e){}
  try {
if (this.o548[index] != o70) {
    try {
this.o839();
}catch(e){}
    //Update the color palette for BG tiles since it changed:
    try {
this.o548[index] = o70;
}catch(e){}
    try {
if ((index & 0x06) == 0) {
      //Palette 0 (Special tile Priority stuff)
      try {
o70 = 0x2000000 | this.o832((this.o548[index | 1] << 8) | this.o548[index & 0x3E]);
}catch(e){}
      try {
index >>= 1;
}catch(e){}
      try {
this.o552[index] = o70;
}catch(e){}
      try {
this.o552[0x20 | index] = 0x1000000 | o70;
}catch(e){}
    }
    else {
      //Regular Palettes (No special crap)
      try {
o70 = this.o832((this.o548[index | 1] << 8) | this.o548[index & 0x3E]);
}catch(e){}
      try {
index >>= 1;
}catch(e){}
      try {
this.o552[index] = o70;
}catch(e){}
      try {
this.o552[0x20 | index] = 0x1000000 | o70;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o840 = function (index, o70) {try {
"use strict";
}catch(e){}
  try {
if (this.o547[index] != o70) {
    //Update the color palette for OBJ tiles since it changed:
    try {
this.o547[index] = o70;
}catch(e){}
    try {
if ((index & 0x06) > 0) {
      //Regular Palettes (No special crap)
      try {
this.o839();
}catch(e){}
      try {
this.o551[index >> 1] = 0x1000000 | this.o832((this.o547[index | 1] << 8) | this.o547[index & 0x3E]);
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o816 = function (o807) {try {
"use strict";
}catch(e){}
  var o841 = (this.o524 + o807) & 0xFF;            //The line of the BG we're at.
  var o842 = (o841 & 7) << 3;
  var o843 = this.o531 | ((o841 & 0xF8) << 2);  //The row of cached tiles we're fetching from.
  var o844 = (this.o523 + this.o539) & 0xFF;            //The scroll amount of the BG.
  var o810 = this.o568 + this.o539;                  //Current pixel we're working on.
  var o845 = this.o568 + ((this.o525 && (o807 - this.o533) >= 0) ? Math.o279(Math.o290(this.o534, 0) + this.o539, this.o538) : this.o538);  //Make sure we do at most 160 pixels a scanline.
  var o680 = o843 + (o844 >> 3);
  var o846 = this.o540[o680];
  try {
if (o846 < this.o532) {
    try {
o846 |= 0x100;
}catch(e){}
  }
}catch(e){}
  var o847 = this.o543[o846];
  try {
for (var o848 = (o844 & 0x7); o848 < 8 && o810 < o845 && o844 < 0x100; ++o844) {
    try {
this.o565[o810++] = this.o546[o847[o842 | o848++]];
}catch(e){}
  }
}catch(e){}
  var o849 = Math.o279(o845 - o810, 0x100 - o844) >> 3;
  try {
o844 += o849 << 3;
}catch(e){}
  try {
o849 += o680;
}catch(e){}
  try {
while (o680 < o849) {
    try {
o846 = this.o540[++o680];
}catch(e){}
    try {
if (o846 < this.o532) {
      try {
o846 |= 0x100;
}catch(e){}
    }
}catch(e){}
    try {
o847 = this.o543[o846];
}catch(e){}
    try {
o848 = o842;
}catch(e){}
    try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
    try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
    try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
    try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
    try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
    try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
    try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
    try {
this.o565[o810++] = this.o546[o847[o848]];
}catch(e){}
  }
}catch(e){}
  try {
if (o810 < o845) {
    try {
if (o844 < 0x100) {
      try {
o846 = this.o540[++o680];
}catch(e){}
      try {
if (o846 < this.o532) {
        try {
o846 |= 0x100;
}catch(e){}
      }
}catch(e){}
      try {
o847 = this.o543[o846];
}catch(e){}
      try {
for (o848 = o842 - 1; o810 < o845 && o844 < 0x100; ++o844) {
        try {
this.o565[o810++] = this.o546[o847[++o848]];
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
    try {
o849 = ((o845 - o810) >> 3) + o843;
}catch(e){}
    try {
while (o843 < o849) {
      try {
o846 = this.o540[o843++];
}catch(e){}
      try {
if (o846 < this.o532) {
        try {
o846 |= 0x100;
}catch(e){}
      }
}catch(e){}
      try {
o847 = this.o543[o846];
}catch(e){}
      try {
o848 = o842;
}catch(e){}
      try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
      try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
      try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
      try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
      try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
      try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
      try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
      try {
this.o565[o810++] = this.o546[o847[o848]];
}catch(e){}
    }
}catch(e){}
    try {
if (o810 < o845) {
      try {
o846 = this.o540[o843];
}catch(e){}
      try {
if (o846 < this.o532) {
        try {
o846 |= 0x100;
}catch(e){}
      }
}catch(e){}
      try {
o847 = this.o543[o846];
}catch(e){}
      try {
switch (o845 - o810) {
        case 7:
          try {
this.o565[o810 + 6] = this.o546[o847[o842 | 6]];
}catch(e){}
        case 6:
          try {
this.o565[o810 + 5] = this.o546[o847[o842 | 5]];
}catch(e){}
        case 5:
          try {
this.o565[o810 + 4] = this.o546[o847[o842 | 4]];
}catch(e){}
        case 4:
          try {
this.o565[o810 + 3] = this.o546[o847[o842 | 3]];
}catch(e){}
        case 3:
          try {
this.o565[o810 + 2] = this.o546[o847[o842 | 2]];
}catch(e){}
        case 2:
          try {
this.o565[o810 + 1] = this.o546[o847[o842 | 1]];
}catch(e){}
        case 1:
          try {
this.o565[o810] = this.o546[o847[o842]];
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o821 = function (o807) {try {
"use strict";
}catch(e){}
  var o841 = (this.o524 + o807) & 0xFF;            //The line of the BG we're at.
  var o842 = (o841 & 7) << 3;
  var o843 = this.o531 | ((o841 & 0xF8) << 2);  //The row of cached tiles we're fetching from.
  var o844 = (this.o523 + this.o539) & 0xFF;            //The scroll amount of the BG.
  var o810 = this.o568 + this.o539;                  //Current pixel we're working on.
  var o845 = this.o568 + ((this.o525 && (o807 - this.o533) >= 0) ? Math.o279(Math.o290(this.o534, 0) + this.o539, this.o538) : this.o538);  //Make sure we do at most 160 pixels a scanline.
  var o680 = o843 + (o844 >> 3);
  var o846 = this.o540[o680];
  try {
if (o846 < this.o532) {
    try {
o846 |= 0x100;
}catch(e){}
  }
}catch(e){}
  var o850 = this.o541[o680];
  var o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
  var o851 = ((o850 & 0x7) << 2) | ((o850 & 0x80) >> 2);
  try {
for (var o848 = (o844 & 0x7); o848 < 8 && o810 < o845 && o844 < 0x100; ++o844) {
    try {
this.o565[o810++] = this.o552[o851 | o847[o842 | o848++]];
}catch(e){}
  }
}catch(e){}
  var o849 = Math.o279(o845 - o810, 0x100 - o844) >> 3;
  try {
o844 += o849 << 3;
}catch(e){}
  try {
o849 += o680;
}catch(e){}
  try {
while (o680 < o849) {
    try {
o846 = this.o540[++o680];
}catch(e){}
    try {
if (o846 < this.o532) {
      try {
o846 |= 0x100;
}catch(e){}
    }
}catch(e){}
    try {
o850 = this.o541[o680];
}catch(e){}
    try {
o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
}catch(e){}
    try {
o851 = ((o850 & 0x7) << 2) | ((o850 & 0x80) >> 2);
}catch(e){}
    try {
o848 = o842;
}catch(e){}
    try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
    try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
    try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
    try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
    try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
    try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
    try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
    try {
this.o565[o810++] = this.o552[o851 | o847[o848]];
}catch(e){}
  }
}catch(e){}
  try {
if (o810 < o845) {
    try {
if (o844 < 0x100) {
      try {
o846 = this.o540[++o680];
}catch(e){}
      try {
if (o846 < this.o532) {
        try {
o846 |= 0x100;
}catch(e){}
      }
}catch(e){}
      try {
o850 = this.o541[o680];
}catch(e){}
      try {
o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
}catch(e){}
      try {
o851 = ((o850 & 0x7) << 2) | ((o850 & 0x80) >> 2);
}catch(e){}
      try {
for (o848 = o842 - 1; o810 < o845 && o844 < 0x100; ++o844) {
        try {
this.o565[o810++] = this.o552[o851 | o847[++o848]];
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
    try {
o849 = ((o845 - o810) >> 3) + o843;
}catch(e){}
    try {
while (o843 < o849) {
      try {
o846 = this.o540[o843];
}catch(e){}
      try {
if (o846 < this.o532) {
        try {
o846 |= 0x100;
}catch(e){}
      }
}catch(e){}
      try {
o850 = this.o541[o843++];
}catch(e){}
      try {
o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
}catch(e){}
      try {
o851 = ((o850 & 0x7) << 2) | ((o850 & 0x80) >> 2);
}catch(e){}
      try {
o848 = o842;
}catch(e){}
      try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
      try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
      try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
      try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
      try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
      try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
      try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
      try {
this.o565[o810++] = this.o552[o851 | o847[o848]];
}catch(e){}
    }
}catch(e){}
    try {
if (o810 < o845) {
      try {
o846 = this.o540[o843];
}catch(e){}
      try {
if (o846 < this.o532) {
        try {
o846 |= 0x100;
}catch(e){}
      }
}catch(e){}
      try {
o850 = this.o541[o843];
}catch(e){}
      try {
o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
}catch(e){}
      try {
o851 = ((o850 & 0x7) << 2) | ((o850 & 0x80) >> 2);
}catch(e){}
      try {
switch (o845 - o810) {
        case 7:
          try {
this.o565[o810 + 6] = this.o552[o851 | o847[o842 | 6]];
}catch(e){}
        case 6:
          try {
this.o565[o810 + 5] = this.o552[o851 | o847[o842 | 5]];
}catch(e){}
        case 5:
          try {
this.o565[o810 + 4] = this.o552[o851 | o847[o842 | 4]];
}catch(e){}
        case 4:
          try {
this.o565[o810 + 3] = this.o552[o851 | o847[o842 | 3]];
}catch(e){}
        case 3:
          try {
this.o565[o810 + 2] = this.o552[o851 | o847[o842 | 2]];
}catch(e){}
        case 2:
          try {
this.o565[o810 + 1] = this.o552[o851 | o847[o842 | 1]];
}catch(e){}
        case 1:
          try {
this.o565[o810] = this.o552[o851 | o847[o842]];
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o823 = function (o807) {try {
"use strict";
}catch(e){}
  var o841 = (this.o524 + o807) & 0xFF;            //The line of the BG we're at.
  var o842 = (o841 & 7) << 3;
  var o843 = this.o531 | ((o841 & 0xF8) << 2);  //The row of cached tiles we're fetching from.
  var o844 = (this.o523 + this.o539) & 0xFF;            //The scroll amount of the BG.
  var o810 = this.o568 + this.o539;                  //Current pixel we're working on.
  var o845 = this.o568 + ((this.o525 && (o807 - this.o533) >= 0) ? Math.o279(Math.o290(this.o534, 0) + this.o539, this.o538) : this.o538);  //Make sure we do at most 160 pixels a scanline.
  var o680 = o843 + (o844 >> 3);
  var o846 = this.o540[o680];
  try {
if (o846 < this.o532) {
    try {
o846 |= 0x100;
}catch(e){}
  }
}catch(e){}
  var o850 = this.o541[o680];
  var o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
  var o851 = (o850 & 0x7) << 2;
  try {
for (var o848 = (o844 & 0x7); o848 < 8 && o810 < o845 && o844 < 0x100; ++o844) {
    try {
this.o565[o810++] = this.o552[o851 | o847[o842 | o848++]];
}catch(e){}
  }
}catch(e){}
  var o849 = Math.o279(o845 - o810, 0x100 - o844) >> 3;
  try {
o844 += o849 << 3;
}catch(e){}
  try {
o849 += o680;
}catch(e){}
  try {
while (o680 < o849) {
    try {
o846 = this.o540[++o680];
}catch(e){}
    try {
if (o846 < this.o532) {
      try {
o846 |= 0x100;
}catch(e){}
    }
}catch(e){}
    try {
o850 = this.o541[o680];
}catch(e){}
    try {
o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
}catch(e){}
    try {
o851 = (o850 & 0x7) << 2;
}catch(e){}
    try {
o848 = o842;
}catch(e){}
    try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
    try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
    try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
    try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
    try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
    try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
    try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
    try {
this.o565[o810++] = this.o552[o851 | o847[o848]];
}catch(e){}
  }
}catch(e){}
  try {
if (o810 < o845) {
    try {
if (o844 < 0x100) {
      try {
o846 = this.o540[++o680];
}catch(e){}
      try {
if (o846 < this.o532) {
        try {
o846 |= 0x100;
}catch(e){}
      }
}catch(e){}
      try {
o850 = this.o541[o680];
}catch(e){}
      try {
o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
}catch(e){}
      try {
o851 = (o850 & 0x7) << 2;
}catch(e){}
      try {
for (o848 = o842 - 1; o810 < o845 && o844 < 0x100; ++o844) {
        try {
this.o565[o810++] = this.o552[o851 | o847[++o848]];
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
    try {
o849 = ((o845 - o810) >> 3) + o843;
}catch(e){}
    try {
while (o843 < o849) {
      try {
o846 = this.o540[o843];
}catch(e){}
      try {
if (o846 < this.o532) {
        try {
o846 |= 0x100;
}catch(e){}
      }
}catch(e){}
      try {
o850 = this.o541[o843++];
}catch(e){}
      try {
o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
}catch(e){}
      try {
o851 = (o850 & 0x7) << 2;
}catch(e){}
      try {
o848 = o842;
}catch(e){}
      try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
      try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
      try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
      try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
      try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
      try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
      try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
      try {
this.o565[o810++] = this.o552[o851 | o847[o848]];
}catch(e){}
    }
}catch(e){}
    try {
if (o810 < o845) {
      try {
o846 = this.o540[o843];
}catch(e){}
      try {
if (o846 < this.o532) {
        try {
o846 |= 0x100;
}catch(e){}
      }
}catch(e){}
      try {
o850 = this.o541[o843];
}catch(e){}
      try {
o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
}catch(e){}
      try {
o851 = (o850 & 0x7) << 2;
}catch(e){}
      try {
switch (o845 - o810) {
        case 7:
          try {
this.o565[o810 + 6] = this.o552[o851 | o847[o842 | 6]];
}catch(e){}
        case 6:
          try {
this.o565[o810 + 5] = this.o552[o851 | o847[o842 | 5]];
}catch(e){}
        case 5:
          try {
this.o565[o810 + 4] = this.o552[o851 | o847[o842 | 4]];
}catch(e){}
        case 4:
          try {
this.o565[o810 + 3] = this.o552[o851 | o847[o842 | 3]];
}catch(e){}
        case 3:
          try {
this.o565[o810 + 2] = this.o552[o851 | o847[o842 | 2]];
}catch(e){}
        case 2:
          try {
this.o565[o810 + 1] = this.o552[o851 | o847[o842 | 1]];
}catch(e){}
        case 1:
          try {
this.o565[o810] = this.o552[o851 | o847[o842]];
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o817 = function (o807) {try {
"use strict";
}catch(e){}
  try {
if (this.o525) {                  //Is the window enabled?
    var o841 = o807 - this.o533;    //The line of the BG we're at.
    try {
if (o841 >= 0) {
      var o852 = (this.o534 > 0) ? (this.o534 + this.o539) : this.o539;
      var o810 = this.o568 + o852;
      var o845 = this.o568 + this.o538;
      try {
if (o810 < o845) {
        var o842 = (o841 & 0x7) << 3;
        var o680 = (this.o530 | ((o841 & 0xF8) << 2)) + (this.o539 >> 3);
        var o846 = this.o540[o680];
        try {
if (o846 < this.o532) {
          try {
o846 |= 0x100;
}catch(e){}
        }
}catch(e){}
        var o847 = this.o543[o846];
        var o848 = (o852 - this.o534) & 0x7;
        try {
o852 = Math.o279(8, o848 + o845 - o810);
}catch(e){}
        try {
while (o848 < o852) {
          try {
this.o565[o810++] = this.o546[o847[o842 | o848++]];
}catch(e){}
        }
}catch(e){}
        try {
o852 = o680 + ((o845 - o810) >> 3);
}catch(e){}
        try {
while (o680 < o852) {
          try {
o846 = this.o540[++o680];
}catch(e){}
          try {
if (o846 < this.o532) {
            try {
o846 |= 0x100;
}catch(e){}
          }
}catch(e){}
          try {
o847 = this.o543[o846];
}catch(e){}
          try {
o848 = o842;
}catch(e){}
          try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
          try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
          try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
          try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
          try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
          try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
          try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
          try {
this.o565[o810++] = this.o546[o847[o848]];
}catch(e){}
        }
}catch(e){}
        try {
if (o810 < o845) {
          try {
o846 = this.o540[++o680];
}catch(e){}
          try {
if (o846 < this.o532) {
            try {
o846 |= 0x100;
}catch(e){}
          }
}catch(e){}
          try {
o847 = this.o543[o846];
}catch(e){}
          try {
switch (o845 - o810) {
            case 7:
              try {
this.o565[o810 + 6] = this.o546[o847[o842 | 6]];
}catch(e){}
            case 6:
              try {
this.o565[o810 + 5] = this.o546[o847[o842 | 5]];
}catch(e){}
            case 5:
              try {
this.o565[o810 + 4] = this.o546[o847[o842 | 4]];
}catch(e){}
            case 4:
              try {
this.o565[o810 + 3] = this.o546[o847[o842 | 3]];
}catch(e){}
            case 3:
              try {
this.o565[o810 + 2] = this.o546[o847[o842 | 2]];
}catch(e){}
            case 2:
              try {
this.o565[o810 + 1] = this.o546[o847[o842 | 1]];
}catch(e){}
            case 1:
              try {
this.o565[o810] = this.o546[o847[o842]];
}catch(e){}
          }
}catch(e){}
        }
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o822 = function (o807) {try {
"use strict";
}catch(e){}
  try {
if (this.o525) {                  //Is the window enabled?
    var o841 = o807 - this.o533;    //The line of the BG we're at.
    try {
if (o841 >= 0) {
      var o852 = (this.o534 > 0) ? (this.o534 + this.o539) : this.o539;
      var o810 = this.o568 + o852;
      var o845 = this.o568 + this.o538;
      try {
if (o810 < o845) {
        var o842 = (o841 & 0x7) << 3;
        var o680 = (this.o530 | ((o841 & 0xF8) << 2)) + (this.o539 >> 3);
        var o846 = this.o540[o680];
        try {
if (o846 < this.o532) {
          try {
o846 |= 0x100;
}catch(e){}
        }
}catch(e){}
        var o850 = this.o541[o680];
        var o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
        var o851 = ((o850 & 0x7) << 2) | ((o850 & 0x80) >> 2);
        var o848 = (o852 - this.o534) & 0x7;
        try {
o852 = Math.o279(8, o848 + o845 - o810);
}catch(e){}
        try {
while (o848 < o852) {
          try {
this.o565[o810++] = this.o552[o851 | o847[o842 | o848++]];
}catch(e){}
        }
}catch(e){}
        try {
o852 = o680 + ((o845 - o810) >> 3);
}catch(e){}
        try {
while (o680 < o852) {
          try {
o846 = this.o540[++o680];
}catch(e){}
          try {
if (o846 < this.o532) {
            try {
o846 |= 0x100;
}catch(e){}
          }
}catch(e){}
          try {
o850 = this.o541[o680];
}catch(e){}
          try {
o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
}catch(e){}
          try {
o851 = ((o850 & 0x7) << 2) | ((o850 & 0x80) >> 2);
}catch(e){}
          try {
o848 = o842;
}catch(e){}
          try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
          try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
          try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
          try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
          try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
          try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
          try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
          try {
this.o565[o810++] = this.o552[o851 | o847[o848]];
}catch(e){}
        }
}catch(e){}
        try {
if (o810 < o845) {
          try {
o846 = this.o540[++o680];
}catch(e){}
          try {
if (o846 < this.o532) {
            try {
o846 |= 0x100;
}catch(e){}
          }
}catch(e){}
          try {
o850 = this.o541[o680];
}catch(e){}
          try {
o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
}catch(e){}
          try {
o851 = ((o850 & 0x7) << 2) | ((o850 & 0x80) >> 2);
}catch(e){}
          try {
switch (o845 - o810) {
            case 7:
              try {
this.o565[o810 + 6] = this.o552[o851 | o847[o842 | 6]];
}catch(e){}
            case 6:
              try {
this.o565[o810 + 5] = this.o552[o851 | o847[o842 | 5]];
}catch(e){}
            case 5:
              try {
this.o565[o810 + 4] = this.o552[o851 | o847[o842 | 4]];
}catch(e){}
            case 4:
              try {
this.o565[o810 + 3] = this.o552[o851 | o847[o842 | 3]];
}catch(e){}
            case 3:
              try {
this.o565[o810 + 2] = this.o552[o851 | o847[o842 | 2]];
}catch(e){}
            case 2:
              try {
this.o565[o810 + 1] = this.o552[o851 | o847[o842 | 1]];
}catch(e){}
            case 1:
              try {
this.o565[o810] = this.o552[o851 | o847[o842]];
}catch(e){}
          }
}catch(e){}
        }
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o824 = function (o807) {try {
"use strict";
}catch(e){}
  try {
if (this.o525) {                  //Is the window enabled?
    var o841 = o807 - this.o533;    //The line of the BG we're at.
    try {
if (o841 >= 0) {
      var o852 = (this.o534 > 0) ? (this.o534 + this.o539) : this.o539;
      var o810 = this.o568 + o852;
      var o845 = this.o568 + this.o538;
      try {
if (o810 < o845) {
        var o842 = (o841 & 0x7) << 3;
        var o680 = (this.o530 | ((o841 & 0xF8) << 2)) + (this.o539 >> 3);
        var o846 = this.o540[o680];
        try {
if (o846 < this.o532) {
          try {
o846 |= 0x100;
}catch(e){}
        }
}catch(e){}
        var o850 = this.o541[o680];
        var o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
        var o851 = (o850 & 0x7) << 2;
        var o848 = (o852 - this.o534) & 0x7;
        try {
o852 = Math.o279(8, o848 + o845 - o810);
}catch(e){}
        try {
while (o848 < o852) {
          try {
this.o565[o810++] = this.o552[o851 | o847[o842 | o848++]];
}catch(e){}
        }
}catch(e){}
        try {
o852 = o680 + ((o845 - o810) >> 3);
}catch(e){}
        try {
while (o680 < o852) {
          try {
o846 = this.o540[++o680];
}catch(e){}
          try {
if (o846 < this.o532) {
            try {
o846 |= 0x100;
}catch(e){}
          }
}catch(e){}
          try {
o850 = this.o541[o680];
}catch(e){}
          try {
o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
}catch(e){}
          try {
o851 = (o850 & 0x7) << 2;
}catch(e){}
          try {
o848 = o842;
}catch(e){}
          try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
          try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
          try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
          try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
          try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
          try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
          try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
          try {
this.o565[o810++] = this.o552[o851 | o847[o848]];
}catch(e){}
        }
}catch(e){}
        try {
if (o810 < o845) {
          try {
o846 = this.o540[++o680];
}catch(e){}
          try {
if (o846 < this.o532) {
            try {
o846 |= 0x100;
}catch(e){}
          }
}catch(e){}
          try {
o850 = this.o541[o680];
}catch(e){}
          try {
o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
}catch(e){}
          try {
o851 = (o850 & 0x7) << 2;
}catch(e){}
          try {
switch (o845 - o810) {
            case 7:
              try {
this.o565[o810 + 6] = this.o552[o851 | o847[o842 | 6]];
}catch(e){}
            case 6:
              try {
this.o565[o810 + 5] = this.o552[o851 | o847[o842 | 5]];
}catch(e){}
            case 5:
              try {
this.o565[o810 + 4] = this.o552[o851 | o847[o842 | 4]];
}catch(e){}
            case 4:
              try {
this.o565[o810 + 3] = this.o552[o851 | o847[o842 | 3]];
}catch(e){}
            case 3:
              try {
this.o565[o810 + 2] = this.o552[o851 | o847[o842 | 2]];
}catch(e){}
            case 2:
              try {
this.o565[o810 + 1] = this.o552[o851 | o847[o842 | 1]];
}catch(e){}
            case 1:
              try {
this.o565[o810] = this.o552[o851 | o847[o842]];
}catch(e){}
          }
}catch(e){}
        }
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o818 = function (o807) {try {
"use strict";
}catch(e){}
  try {
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
    try {
while (o853 < 168) {
      try {
this.o812[o853++] = 0xFF;
}catch(e){}
    }
}catch(e){}
    try {
if (this.o527) {
      //Draw the visible sprites:
      try {
for (var length = this.o858(o785, 0x7); o413 < length; ++o413) {
        try {
o788 = this.o813[o413];
}catch(e){}
        try {
o786 = (o785 - this.o155[o788]) << 3;
}catch(e){}
        try {
o850 = this.o155[o788 | 3];
}catch(e){}
        try {
o851 = (o850 & 0x10) >> 2;
}catch(e){}
        try {
o847 = this.o543[((o850 & 0x60) << 4) | this.o155[o788 | 0x2]];
}catch(e){}
        try {
o857 = o854 = this.o155[o788 | 1];
}catch(e){}
        try {
o855 = Math.o279(168 - o857, 8);
}catch(e){}
        try {
o853 = (o857 > 7) ? 0 : (8 - o857);
}catch(e){}
        try {
for (o856 = this.o568 + ((o857 > 8) ? (o857 - 8) : 0); o853 < o855; ++o853, ++o856, ++o857) {
          try {
if (this.o812[o857] > o854) {
            try {
if (this.o565[o856] >= 0x2000000) {
              try {
o70 = o847[o786 | o853];
}catch(e){}
              try {
if (o70 > 0) {
                try {
this.o565[o856] = this.o545[o851 | o70];
}catch(e){}
                try {
this.o812[o857] = o854;
}catch(e){}
              }
}catch(e){}
            }
            else try {
if (this.o565[o856] < 0x1000000) {
              try {
o70 = o847[o786 | o853];
}catch(e){}
              try {
if (o70 > 0 && o850 < 0x80) {
                try {
this.o565[o856] = this.o545[o851 | o70];
}catch(e){}
                try {
this.o812[o857] = o854;
}catch(e){}
              }
}catch(e){}
            }
}catch(e){}
}catch(e){}
          }
}catch(e){}
        }
}catch(e){}
      }
}catch(e){}
    }
    else {
      //Draw the visible sprites:
      try {
for (var length = this.o858(o785, 0xF); o413 < length; ++o413) {
        try {
o788 = this.o813[o413];
}catch(e){}
        try {
o786 = (o785 - this.o155[o788]) << 3;
}catch(e){}
        try {
o850 = this.o155[o788 | 3];
}catch(e){}
        try {
o851 = (o850 & 0x10) >> 2;
}catch(e){}
        try {
if ((o850 & 0x40) == (0x40 & o786)) {
          try {
o847 = this.o543[((o850 & 0x60) << 4) | (this.o155[o788 | 0x2] & 0xFE)];
}catch(e){}
        }
        else {
          try {
o847 = this.o543[((o850 & 0x60) << 4) | this.o155[o788 | 0x2] | 1];
}catch(e){}
        }
}catch(e){}
        try {
o786 &= 0x3F;
}catch(e){}
        try {
o857 = o854 = this.o155[o788 | 1];
}catch(e){}
        try {
o855 = Math.o279(168 - o857, 8);
}catch(e){}
        try {
o853 = (o857 > 7) ? 0 : (8 - o857);
}catch(e){}
        try {
for (o856 = this.o568 + ((o857 > 8) ? (o857 - 8) : 0); o853 < o855; ++o853, ++o856, ++o857) {
          try {
if (this.o812[o857] > o854) {
            try {
if (this.o565[o856] >= 0x2000000) {
              try {
o70 = o847[o786 | o853];
}catch(e){}
              try {
if (o70 > 0) {
                try {
this.o565[o856] = this.o545[o851 | o70];
}catch(e){}
                try {
this.o812[o857] = o854;
}catch(e){}
              }
}catch(e){}
            }
            else try {
if (this.o565[o856] < 0x1000000) {
              try {
o70 = o847[o786 | o853];
}catch(e){}
              try {
if (o70 > 0 && o850 < 0x80) {
                try {
this.o565[o856] = this.o545[o851 | o70];
}catch(e){}
                try {
this.o812[o857] = o854;
}catch(e){}
              }
}catch(e){}
            }
}catch(e){}
}catch(e){}
          }
}catch(e){}
        }
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o858 = function (o807, o859) {try {
"use strict";
}catch(e){}
  var o768 = 0xFE00;
  var o413 = 0;
  var o860 = 0;
  try {
while (o768 < 0xFEA0 && o413 < 10) {
    try {
o860 = o807 - this.o155[o768];
}catch(e){}
    try {
if ((o860 & o859) == o860) {
      try {
this.o813[o413++] = o768;
}catch(e){}
    }
}catch(e){}
    try {
o768 += 4;
}catch(e){}
  }
}catch(e){}
  try {
return o413;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o820 = function (o807) {try {
"use strict";
}catch(e){}
  try {
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
    try {
if (this.o527) {
      try {
for (; o788 < 0xFEA0 && o413 < 10; o788 += 4) {
        try {
o786 = o785 - this.o155[o788];
}catch(e){}
        try {
if ((o786 & 0x7) == o786) {
          try {
o853 = this.o155[o788 | 1] - 8;
}catch(e){}
          try {
o861 = Math.o279(160, o853 + 8);
}catch(e){}
          try {
o850 = this.o155[o788 | 3];
}catch(e){}
          try {
o851 = (o850 & 7) << 2;
}catch(e){}
          try {
o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | this.o155[o788 | 2]];
}catch(e){}
          try {
o862 = (o853 > 0) ? o853 : 0;
}catch(e){}
          try {
o853 -= o786 << 3;
}catch(e){}
          try {
for (o856 = this.o568 + o862; o862 < o861; ++o862, ++o856) {
            try {
if (this.o565[o856] >= 0x2000000) {
              try {
o70 = o847[o862 - o853];
}catch(e){}
              try {
if (o70 > 0) {
                try {
this.o565[o856] = this.o551[o851 | o70];
}catch(e){}
              }
}catch(e){}
            }
            else try {
if (this.o565[o856] < 0x1000000) {
              try {
o70 = o847[o862 - o853];
}catch(e){}
              try {
if (o70 > 0 && o850 < 0x80) {    //Don't optimize for attrCode, as LICM-capable JITs should optimize its checks.
                try {
this.o565[o856] = this.o551[o851 | o70];
}catch(e){}
              }
}catch(e){}
            }
}catch(e){}
}catch(e){}
          }
}catch(e){}
          try {
++o413;
}catch(e){}
        }
}catch(e){}
      }
}catch(e){}
    }
    else {
      try {
for (; o788 < 0xFEA0 && o413 < 10; o788 += 4) {
        try {
o786 = o785 - this.o155[o788];
}catch(e){}
        try {
if ((o786 & 0xF) == o786) {
          try {
o853 = this.o155[o788 | 1] - 8;
}catch(e){}
          try {
o861 = Math.o279(160, o853 + 8);
}catch(e){}
          try {
o850 = this.o155[o788 | 3];
}catch(e){}
          try {
o851 = (o850 & 7) << 2;
}catch(e){}
          try {
if ((o850 & 0x40) == (0x40 & (o786 << 3))) {
            try {
o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | (this.o155[o788 | 0x2] & 0xFE)];
}catch(e){}
          }
          else {
            try {
o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | this.o155[o788 | 0x2] | 1];
}catch(e){}
          }
}catch(e){}
          try {
o862 = (o853 > 0) ? o853 : 0;
}catch(e){}
          try {
o853 -= (o786 & 0x7) << 3;
}catch(e){}
          try {
for (o856 = this.o568 + o862; o862 < o861; ++o862, ++o856) {
            try {
if (this.o565[o856] >= 0x2000000) {
              try {
o70 = o847[o862 - o853];
}catch(e){}
              try {
if (o70 > 0) {
                try {
this.o565[o856] = this.o551[o851 | o70];
}catch(e){}
              }
}catch(e){}
            }
            else try {
if (this.o565[o856] < 0x1000000) {
              try {
o70 = o847[o862 - o853];
}catch(e){}
              try {
if (o70 > 0 && o850 < 0x80) {    //Don't optimize for attrCode, as LICM-capable JITs should optimize its checks.
                try {
this.o565[o856] = this.o551[o851 | o70];
}catch(e){}
              }
}catch(e){}
            }
}catch(e){}
}catch(e){}
          }
}catch(e){}
          try {
++o413;
}catch(e){}
        }
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
//Generate only a single tile line for the GB tile cache mode:
try {
o360.prototype.o829 = function (o768) {try {
"use strict";
}catch(e){}
  var o863 = (this.o155[0x1 | o768] << 8) | this.o155[0x9FFE & o768];
  var o864 = this.o543[(o768 & 0x1FF0) >> 4];
  try {
o768 = (o768 & 0xE) << 2;
}catch(e){}
  try {
o864[o768 | 7] = ((o863 & 0x100) >> 7) | (o863 & 0x1);
}catch(e){}
  try {
o864[o768 | 6] = ((o863 & 0x200) >> 8) | ((o863 & 0x2) >> 1);
}catch(e){}
  try {
o864[o768 | 5] = ((o863 & 0x400) >> 9) | ((o863 & 0x4) >> 2);
}catch(e){}
  try {
o864[o768 | 4] = ((o863 & 0x800) >> 10) | ((o863 & 0x8) >> 3);
}catch(e){}
  try {
o864[o768 | 3] = ((o863 & 0x1000) >> 11) | ((o863 & 0x10) >> 4);
}catch(e){}
  try {
o864[o768 | 2] = ((o863 & 0x2000) >> 12) | ((o863 & 0x20) >> 5);
}catch(e){}
  try {
o864[o768 | 1] = ((o863 & 0x4000) >> 13) | ((o863 & 0x40) >> 6);
}catch(e){}
  try {
o864[o768] = ((o863 & 0x8000) >> 14) | ((o863 & 0x80) >> 7);
}catch(e){}
}
}catch(e){}
//Generate only a single tile line for the GBC tile cache mode (Bank 1):
try {
o360.prototype.o865 = function (o768) {try {
"use strict";
}catch(e){}
  var o863 = (this.o155[0x1 | o768] << 8) | this.o155[0x9FFE & o768];
  try {
o768 &= 0x1FFE;
}catch(e){}
  var o866 = this.o543[o768 >> 4];
  var o867 = this.o543[0x200 | (o768 >> 4)];
  var o868 = this.o543[0x400 | (o768 >> 4)];
  var o869 = this.o543[0x600 | (o768 >> 4)];
  try {
o768 = (o768 & 0xE) << 2;
}catch(e){}
  var o870 = 0x38 - o768;
  try {
o869[o870] = o867[o768] = o868[o870 | 7] = o866[o768 | 7] = ((o863 & 0x100) >> 7) | (o863 & 0x1);
}catch(e){}
  try {
o869[o870 | 1] = o867[o768 | 1] = o868[o870 | 6] = o866[o768 | 6] = ((o863 & 0x200) >> 8) | ((o863 & 0x2) >> 1);
}catch(e){}
  try {
o869[o870 | 2] = o867[o768 | 2] = o868[o870 | 5] = o866[o768 | 5] = ((o863 & 0x400) >> 9) | ((o863 & 0x4) >> 2);
}catch(e){}
  try {
o869[o870 | 3] = o867[o768 | 3] = o868[o870 | 4] = o866[o768 | 4] = ((o863 & 0x800) >> 10) | ((o863 & 0x8) >> 3);
}catch(e){}
  try {
o869[o870 | 4] = o867[o768 | 4] = o868[o870 | 3] = o866[o768 | 3] = ((o863 & 0x1000) >> 11) | ((o863 & 0x10) >> 4);
}catch(e){}
  try {
o869[o870 | 5] = o867[o768 | 5] = o868[o870 | 2] = o866[o768 | 2] = ((o863 & 0x2000) >> 12) | ((o863 & 0x20) >> 5);
}catch(e){}
  try {
o869[o870 | 6] = o867[o768 | 6] = o868[o870 | 1] = o866[o768 | 1] = ((o863 & 0x4000) >> 13) | ((o863 & 0x40) >> 6);
}catch(e){}
  try {
o869[o870 | 7] = o867[o768 | 7] = o868[o870] = o866[o768] = ((o863 & 0x8000) >> 14) | ((o863 & 0x80) >> 7);
}catch(e){}
}
}catch(e){}
//Generate all the flip combinations for a full GBC VRAM bank 1 tile:
try {
o360.prototype.o830 = function (o871) {try {
"use strict";
}catch(e){}
  var o768 = o871 >> 4;
  var o866 = this.o543[o768];
  var o867 = this.o543[0x200 | o768];
  var o868 = this.o543[0x400 | o768];
  var o869 = this.o543[0x600 | o768];
  var o863 = 0;
  try {
o871 |= 0x8000;
}catch(e){}
  try {
o768 = 0;
}catch(e){}
  var o870 = 56;
  try {
do {
    try {
o863 = (this.o155[0x1 | o871] << 8) | this.o155[o871];
}catch(e){}
    try {
o869[o870] = o867[o768] = o868[o870 | 7] = o866[o768 | 7] = ((o863 & 0x100) >> 7) | (o863 & 0x1);
}catch(e){}
    try {
o869[o870 | 1] = o867[o768 | 1] = o868[o870 | 6] = o866[o768 | 6] = ((o863 & 0x200) >> 8) | ((o863 & 0x2) >> 1);
}catch(e){}
    try {
o869[o870 | 2] = o867[o768 | 2] = o868[o870 | 5] = o866[o768 | 5] = ((o863 & 0x400) >> 9) | ((o863 & 0x4) >> 2);
}catch(e){}
    try {
o869[o870 | 3] = o867[o768 | 3] = o868[o870 | 4] = o866[o768 | 4] = ((o863 & 0x800) >> 10) | ((o863 & 0x8) >> 3);
}catch(e){}
    try {
o869[o870 | 4] = o867[o768 | 4] = o868[o870 | 3] = o866[o768 | 3] = ((o863 & 0x1000) >> 11) | ((o863 & 0x10) >> 4);
}catch(e){}
    try {
o869[o870 | 5] = o867[o768 | 5] = o868[o870 | 2] = o866[o768 | 2] = ((o863 & 0x2000) >> 12) | ((o863 & 0x20) >> 5);
}catch(e){}
    try {
o869[o870 | 6] = o867[o768 | 6] = o868[o870 | 1] = o866[o768 | 1] = ((o863 & 0x4000) >> 13) | ((o863 & 0x40) >> 6);
}catch(e){}
    try {
o869[o870 | 7] = o867[o768 | 7] = o868[o870] = o866[o768] = ((o863 & 0x8000) >> 14) | ((o863 & 0x80) >> 7);
}catch(e){}
    try {
o768 += 8;
}catch(e){}
    try {
o870 -= 8;
}catch(e){}
    try {
o871 += 2;
}catch(e){}
  } while (o870 > -1);
}catch(e){}
}
}catch(e){}
//Generate only a single tile line for the GBC tile cache mode (Bank 2):
try {
o360.prototype.o872 = function (o768) {try {
"use strict";
}catch(e){}
  var o863 = (this.o394[0x1 | o768] << 8) | this.o394[0x1FFE & o768];
  var o866 = this.o543[0x800 | (o768 >> 4)];
  var o867 = this.o543[0xA00 | (o768 >> 4)];
  var o868 = this.o543[0xC00 | (o768 >> 4)];
  var o869 = this.o543[0xE00 | (o768 >> 4)];
  try {
o768 = (o768 & 0xE) << 2;
}catch(e){}
  var o870 = 0x38 - o768;
  try {
o869[o870] = o867[o768] = o868[o870 | 7] = o866[o768 | 7] = ((o863 & 0x100) >> 7) | (o863 & 0x1);
}catch(e){}
  try {
o869[o870 | 1] = o867[o768 | 1] = o868[o870 | 6] = o866[o768 | 6] = ((o863 & 0x200) >> 8) | ((o863 & 0x2) >> 1);
}catch(e){}
  try {
o869[o870 | 2] = o867[o768 | 2] = o868[o870 | 5] = o866[o768 | 5] = ((o863 & 0x400) >> 9) | ((o863 & 0x4) >> 2);
}catch(e){}
  try {
o869[o870 | 3] = o867[o768 | 3] = o868[o870 | 4] = o866[o768 | 4] = ((o863 & 0x800) >> 10) | ((o863 & 0x8) >> 3);
}catch(e){}
  try {
o869[o870 | 4] = o867[o768 | 4] = o868[o870 | 3] = o866[o768 | 3] = ((o863 & 0x1000) >> 11) | ((o863 & 0x10) >> 4);
}catch(e){}
  try {
o869[o870 | 5] = o867[o768 | 5] = o868[o870 | 2] = o866[o768 | 2] = ((o863 & 0x2000) >> 12) | ((o863 & 0x20) >> 5);
}catch(e){}
  try {
o869[o870 | 6] = o867[o768 | 6] = o868[o870 | 1] = o866[o768 | 1] = ((o863 & 0x4000) >> 13) | ((o863 & 0x40) >> 6);
}catch(e){}
  try {
o869[o870 | 7] = o867[o768 | 7] = o868[o870] = o866[o768] = ((o863 & 0x8000) >> 14) | ((o863 & 0x80) >> 7);
}catch(e){}
}
}catch(e){}
//Generate all the flip combinations for a full GBC VRAM bank 2 tile:
try {
o360.prototype.o831 = function (o871) {try {
"use strict";
}catch(e){}
  var o768 = o871 >> 4;
  var o866 = this.o543[0x800 | o768];
  var o867 = this.o543[0xA00 | o768];
  var o868 = this.o543[0xC00 | o768];
  var o869 = this.o543[0xE00 | o768];
  var o863 = 0;
  try {
o768 = 0;
}catch(e){}
  var o870 = 56;
  try {
do {
    try {
o863 = (this.o394[0x1 | o871] << 8) | this.o394[o871];
}catch(e){}
    try {
o869[o870] = o867[o768] = o868[o870 | 7] = o866[o768 | 7] = ((o863 & 0x100) >> 7) | (o863 & 0x1);
}catch(e){}
    try {
o869[o870 | 1] = o867[o768 | 1] = o868[o870 | 6] = o866[o768 | 6] = ((o863 & 0x200) >> 8) | ((o863 & 0x2) >> 1);
}catch(e){}
    try {
o869[o870 | 2] = o867[o768 | 2] = o868[o870 | 5] = o866[o768 | 5] = ((o863 & 0x400) >> 9) | ((o863 & 0x4) >> 2);
}catch(e){}
    try {
o869[o870 | 3] = o867[o768 | 3] = o868[o870 | 4] = o866[o768 | 4] = ((o863 & 0x800) >> 10) | ((o863 & 0x8) >> 3);
}catch(e){}
    try {
o869[o870 | 4] = o867[o768 | 4] = o868[o870 | 3] = o866[o768 | 3] = ((o863 & 0x1000) >> 11) | ((o863 & 0x10) >> 4);
}catch(e){}
    try {
o869[o870 | 5] = o867[o768 | 5] = o868[o870 | 2] = o866[o768 | 2] = ((o863 & 0x2000) >> 12) | ((o863 & 0x20) >> 5);
}catch(e){}
    try {
o869[o870 | 6] = o867[o768 | 6] = o868[o870 | 1] = o866[o768 | 1] = ((o863 & 0x4000) >> 13) | ((o863 & 0x40) >> 6);
}catch(e){}
    try {
o869[o870 | 7] = o867[o768 | 7] = o868[o870] = o866[o768] = ((o863 & 0x8000) >> 14) | ((o863 & 0x80) >> 7);
}catch(e){}
    try {
o768 += 8;
}catch(e){}
    try {
o870 -= 8;
}catch(e){}
    try {
o871 += 2;
}catch(e){}
  } while (o870 > -1);
}catch(e){}
}
}catch(e){}
//Generate only a single tile line for the GB tile cache mode (OAM accessible range):
try {
o360.prototype.o828 = function (o768) {try {
"use strict";
}catch(e){}
  var o863 = (this.o155[0x1 | o768] << 8) | this.o155[0x9FFE & o768];
  try {
o768 &= 0x1FFE;
}catch(e){}
  var o866 = this.o543[o768 >> 4];
  var o867 = this.o543[0x200 | (o768 >> 4)];
  var o868 = this.o543[0x400 | (o768 >> 4)];
  var o869 = this.o543[0x600 | (o768 >> 4)];
  try {
o768 = (o768 & 0xE) << 2;
}catch(e){}
  var o870 = 0x38 - o768;
  try {
o869[o870] = o867[o768] = o868[o870 | 7] = o866[o768 | 7] = ((o863 & 0x100) >> 7) | (o863 & 0x1);
}catch(e){}
  try {
o869[o870 | 1] = o867[o768 | 1] = o868[o870 | 6] = o866[o768 | 6] = ((o863 & 0x200) >> 8) | ((o863 & 0x2) >> 1);
}catch(e){}
  try {
o869[o870 | 2] = o867[o768 | 2] = o868[o870 | 5] = o866[o768 | 5] = ((o863 & 0x400) >> 9) | ((o863 & 0x4) >> 2);
}catch(e){}
  try {
o869[o870 | 3] = o867[o768 | 3] = o868[o870 | 4] = o866[o768 | 4] = ((o863 & 0x800) >> 10) | ((o863 & 0x8) >> 3);
}catch(e){}
  try {
o869[o870 | 4] = o867[o768 | 4] = o868[o870 | 3] = o866[o768 | 3] = ((o863 & 0x1000) >> 11) | ((o863 & 0x10) >> 4);
}catch(e){}
  try {
o869[o870 | 5] = o867[o768 | 5] = o868[o870 | 2] = o866[o768 | 2] = ((o863 & 0x2000) >> 12) | ((o863 & 0x20) >> 5);
}catch(e){}
  try {
o869[o870 | 6] = o867[o768 | 6] = o868[o870 | 1] = o866[o768 | 1] = ((o863 & 0x4000) >> 13) | ((o863 & 0x40) >> 6);
}catch(e){}
  try {
o869[o870 | 7] = o867[o768 | 7] = o868[o870] = o866[o768] = ((o863 & 0x8000) >> 14) | ((o863 & 0x80) >> 7);
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o873 = function () {try {
"use strict";
}catch(e){}
  try {
if (this.o418) {
    try {
this.o505 = 0;
}catch(e){}      //Mark frame for ensuring a JIT pass for the next framebuffer output.
    try {
this.o874();
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o791 = function () {try {
"use strict";
}catch(e){}
  //JIT the graphics to v-blank framing:
  try {
this.o505 += this.o504;
}catch(e){}
  try {
this.o874();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o874 = function () {try {
"use strict";
}catch(e){}
  //Normal rendering JIT, where we try to do groups of scanlines at once:
  try {
while (this.o504 > 0) {
    try {
this.o806(this.o503);
}catch(e){}
    try {
if (this.o503 < 143) {
      try {
++this.o503;
}catch(e){}
    }
    else {
      try {
this.o503 = 0;
}catch(e){}
    }
}catch(e){}
    try {
--this.o504;
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o780 = function () {try {
"use strict";
}catch(e){}
  try {
if (this.o504 < 144) {
    try {
++this.o504;
}catch(e){}
  }
  else {
    try {
this.o539 = 0;
}catch(e){}
    try {
this.o537 = -1;
}catch(e){}
    try {
if (this.o503 < 143) {
      try {
++this.o503;
}catch(e){}
    }
    else {
      try {
this.o503 = 0;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o839 = function () {try {
"use strict";
}catch(e){}
  try {
this.o873();
}catch(e){}
  try {
this.o811();
}catch(e){}
}
}catch(e){}
//Check for the highest priority IRQ to fire:
try {
o360.prototype.o774 = function () {try {
"use strict";
}catch(e){}
  var o875 = 0;
  var o876 = 1;
  try {
do {
    //Check to see if an interrupt is enabled AND requested.
    try {
if ((o876 & this.o382) == o876) {
      try {
this.o381 = false;
}catch(e){}            //Reset the interrupt enabling.
      try {
this.o383 -= o876;
}catch(e){}  //Reset the interrupt request.
      try {
this.o382 = 0;
}catch(e){}        //Reset the IRQ assertion.
      //Interrupts have a certain clock cycle length:
      try {
this.o386 = 20;
}catch(e){}
      //Set the stack pointer to the current program counter value:
      try {
this.o150 = (this.o150 - 1) & 0xFFFF;
}catch(e){}
      try {
this.o391[this.o150](this, this.o150, this.o149 >> 8);
}catch(e){}
      try {
this.o150 = (this.o150 - 1) & 0xFFFF;
}catch(e){}
      try {
this.o391[this.o150](this, this.o150, this.o149 & 0xFF);
}catch(e){}
      //Set the program counter to the interrupt's address:
      try {
this.o149 = 0x40 | (o875 << 3);
}catch(e){}
      //Clock the core for mid-instruction updates:
      try {
this.o790();
}catch(e){}
      try {
return;
}catch(e){}                  //We only want the highest priority interrupt.
    }
}catch(e){}
    try {
o876 = 1 << ++o875;
}catch(e){}
  } while (o875 < 5);
}catch(e){}
}
}catch(e){}
/*
  Check for IRQs to be fired while not in HALT:
*/
try {
o360.prototype.o664 = function () {try {
"use strict";
}catch(e){}
  try {
if (this.o381) {
    try {
this.o382 = this.o384 & this.o383 & 0x1F;
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
/*
  Handle the HALT opcode by predicting all IRQ cases correctly,
  then selecting the next closest IRQ firing from the prediction to
  clock up to. This prevents hacky looping that doesn't predict, but
  instead just clocks through the core update procedure by one which
  is very slow. Not many emulators do this because they have to cover
  all the IRQ prediction cases and they usually get them wrong.
*/
try {
o360.prototype.o587 = function () {try {
"use strict";
}catch(e){}
  //Initialize our variables and start our prediction:
  try {
if (!this.o378) {
    try {
this.o378 = true;
}catch(e){}
    var o877 = -1;
    var o581 = 0;
    try {
if (this.o418) {
      //If the LCD is enabled, then predict the LCD IRQs enabled:
      try {
if ((this.o384 & 0x1) == 0x1) {
        try {
o877 = ((456 * (((this.o412 == 1) ? 298 : 144) - this.o502)) - this.o490) << this.o387;
}catch(e){}
      }
}catch(e){}
      try {
if ((this.o384 & 0x2) == 0x2) {
        try {
if (this.o417) {
          try {
o581 = (this.o784() - this.o490) << this.o387;
}catch(e){}
          try {
if (o581 <= o877 || o877 == -1) {
            try {
o877 = o581;
}catch(e){}
          }
}catch(e){}
        }
}catch(e){}
        try {
if (this.o416 && (this.o384 & 0x1) == 0) {
          try {
o581 = ((456 * (((this.o412 == 1) ? 298 : 144) - this.o502)) - this.o490) << this.o387;
}catch(e){}
          try {
if (o581 <= o877 || o877 == -1) {
            try {
o877 = o581;
}catch(e){}
          }
}catch(e){}
        }
}catch(e){}
        try {
if (this.o415) {
          try {
o581 = (((this.o502 >= 143) ? (456 * (154 - this.o502)) : 456) - this.o490) << this.o387;
}catch(e){}
          try {
if (o581 <= o877 || o877 == -1) {
            try {
o877 = o581;
}catch(e){}
          }
}catch(e){}
        }
}catch(e){}
        try {
if (this.o414 && this.o155[0xFF45] <= 153) {
          try {
o581 = (this.o783() - this.o490) << this.o387;
}catch(e){}
          try {
if (o581 <= o877 || o877 == -1) {
            try {
o877 = o581;
}catch(e){}
          }
}catch(e){}
        }
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
    try {
if (this.o492 && (this.o384 & 0x4) == 0x4) {
      //CPU timer IRQ prediction:
      try {
o581 = ((0x100 - this.o155[0xFF05]) * this.o493) - this.o491;
}catch(e){}
      try {
if (o581 <= o877 || o877 == -1) {
        try {
o877 = o581;
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
    try {
if (this.o494 > 0 && (this.o384 & 0x8) == 0x8) {
      //Serial IRQ prediction:
      try {
if (this.o494 <= o877 || o877 == -1) {
        try {
o877 = this.o494;
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
  else {
    var o877 = this.o374;
  }
}catch(e){}
  var o878 = (this.o369 - this.o488) << this.o387;
  try {
if (o877 >= 0) {
    try {
if (o877 <= o878) {
      //Exit out of HALT normally:
      try {
this.o386 = Math.o290(o877, this.o386);
}catch(e){}
      try {
this.o771();
}catch(e){}
      try {
this.o378 = false;
}catch(e){}
      try {
this.o386 = 0;
}catch(e){}
    }
    else {
      //Still in HALT, clock only up to the clocks specified per iteration:
      try {
this.o386 = Math.o290(o878, this.o386);
}catch(e){}
      try {
this.o374 = o877 - this.o386;
}catch(e){}
    }
}catch(e){}
  }
  else {
    //Still in HALT, clock only up to the clocks specified per iteration:
    //Will stay in HALT forever (Stuck in HALT forever), but the APU and LCD are still clocked, so don't pause:
    try {
this.o386 += o878;
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
//Memory Reading:
try {
o360.prototype.o579 = function (o768) {try {
"use strict";
}catch(e){}
  //Act as a wrapper for reading the returns from the compiled jumps to memory.
  try {
return this.o390[o768](this, o768);
}catch(e){}  //This seems to be faster than the usual if/else.
}
}catch(e){}
try {
o360.prototype.o597 = function (o768) {try {
"use strict";
}catch(e){}
  //Act as a wrapper for reading the returns from the compiled jumps to memory.
  try {
return this.o392[o768](this, o768);
}catch(e){}  //This seems to be faster than the usual if/else.
}
}catch(e){}
try {
o360.prototype.o666 = function () {try {
"use strict";
}catch(e){}
  //Faster in some browsers, since we are doing less conditionals overall by implementing them in advance.
  try {
for (var index = 0x0000; index <= 0xFFFF; index++) {
    try {
if (index < 0x4000) {
      try {
this.o390[index] = this.o879;
}catch(e){}
    }
    else try {
if (index < 0x8000) {
      try {
this.o390[index] = this.o880;
}catch(e){}
    }
    else try {
if (index < 0x9800) {
      try {
this.o390[index] = (this.o400) ? this.o881 : this.o882;
}catch(e){}
    }
    else try {
if (index < 0xA000) {
      try {
this.o390[index] = (this.o400) ? this.o883 : this.o884;
}catch(e){}
    }
    else try {
if (index >= 0xA000 && index < 0xC000) {
      try {
if ((this.o521 == 1 / 16 && index < 0xA200) || this.o521 >= 1) {
        try {
if (this.o511) {
          try {
this.o390[index] = this.o885;
}catch(e){}
        }
        else try {
if (!this.o509) {
          try {
this.o390[index] = this.o886;
}catch(e){}
        }
        else {
          //MBC3 RTC + RAM:
          try {
this.o390[index] = this.o887;
}catch(e){}
        }
}catch(e){}
}catch(e){}
      }
      else {
        try {
this.o390[index] = this.o888;
}catch(e){}
      }
}catch(e){}
    }
    else try {
if (index >= 0xC000 && index < 0xE000) {
      try {
if (!this.o400 || index < 0xD000) {
        try {
this.o390[index] = this.o879;
}catch(e){}
      }
      else {
        try {
this.o390[index] = this.o889;
}catch(e){}
      }
}catch(e){}
    }
    else try {
if (index >= 0xE000 && index < 0xFE00) {
      try {
if (!this.o400 || index < 0xF000) {
        try {
this.o390[index] = this.o890;
}catch(e){}
      }
      else {
        try {
this.o390[index] = this.o891;
}catch(e){}
      }
}catch(e){}
    }
    else try {
if (index < 0xFEA0) {
      try {
this.o390[index] = this.o892;
}catch(e){}
    }
    else try {
if (this.o400 && index >= 0xFEA0 && index < 0xFF00) {
      try {
this.o390[index] = this.o879;
}catch(e){}
    }
    else try {
if (index >= 0xFF00) {
      try {
switch (index) {
        case 0xFF00:
          //JOYPAD:
          try {
this.o392[0] = this.o390[0xFF00] = function (o421, o768) {try {
"use strict";
}catch(e){}
            try {
return 0xC0 | o421.o155[0xFF00];
}catch(e){}  //Top nibble returns as set.
          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF01:
          //SB
          try {
this.o392[0x01] = this.o390[0xFF01] = function (o421, o768) {try {
"use strict";
}catch(e){}
            try {
return (o421.o155[0xFF02] < 0x80) ? o421.o155[0xFF01] : 0xFF;
}catch(e){}
          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF02:
          //SC
          try {
if (this.o400) {
            try {
this.o392[0x02] = this.o390[0xFF02] = function (o421, o768) {try {
"use strict";
}catch(e){}
              try {
return ((o421.o494 <= 0) ? 0x7C : 0xFC) | o421.o155[0xFF02];
}catch(e){}
            }
}catch(e){}
          }
          else {
            try {
this.o392[0x02] = this.o390[0xFF02] = function (o421, o768) {try {
"use strict";
}catch(e){}
              try {
return ((o421.o494 <= 0) ? 0x7E : 0xFE) | o421.o155[0xFF02];
}catch(e){}
            }
}catch(e){}
          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF04:
          //DIV
          try {
this.o392[0x04] = this.o390[0xFF04] = function (o421, o768) {try {
"use strict";
}catch(e){}
            try {
o421.o155[0xFF04] = (o421.o155[0xFF04] + (o421.o489 >> 8)) & 0xFF;
}catch(e){}
            try {
o421.o489 &= 0xFF;
}catch(e){}
            try {
return o421.o155[0xFF04];
}catch(e){}

          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF07:
          try {
this.o392[0x07] = this.o390[0xFF07] = function (o421, o768) {try {
"use strict";
}catch(e){}
            try {
return 0xF8 | o421.o155[0xFF07];
}catch(e){}
          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF0F:
          //IF
          try {
this.o392[0x0F] = this.o390[0xFF0F] = function (o421, o768) {try {
"use strict";
}catch(e){}
            try {
return 0xE0 | o421.o383;
}catch(e){}
          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF10:
          try {
this.o392[0x10] = this.o390[0xFF10] = function (o421, o768) {try {
"use strict";
}catch(e){}
            try {
return 0x80 | o421.o155[0xFF10];
}catch(e){}
          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF11:
          try {
this.o392[0x11] = this.o390[0xFF11] = function (o421, o768) {try {
"use strict";
}catch(e){}
            try {
return 0x3F | o421.o155[0xFF11];
}catch(e){}
          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF13:
          try {
this.o392[0x13] = this.o390[0xFF13] = this.o888;
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF14:
          try {
this.o392[0x14] = this.o390[0xFF14] = function (o421, o768) {try {
"use strict";
}catch(e){}
            try {
return 0xBF | o421.o155[0xFF14];
}catch(e){}
          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF16:
          try {
this.o392[0x16] = this.o390[0xFF16] = function (o421, o768) {try {
"use strict";
}catch(e){}
            try {
return 0x3F | o421.o155[0xFF16];
}catch(e){}
          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF18:
          try {
this.o392[0x18] = this.o390[0xFF18] = this.o888;
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF19:
          try {
this.o392[0x19] = this.o390[0xFF19] = function (o421, o768) {try {
"use strict";
}catch(e){}
            try {
return 0xBF | o421.o155[0xFF19];
}catch(e){}
          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF1A:
          try {
this.o392[0x1A] = this.o390[0xFF1A] = function (o421, o768) {try {
"use strict";
}catch(e){}
            try {
return 0x7F | o421.o155[0xFF1A];
}catch(e){}
          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF1B:
          try {
this.o392[0x1B] = this.o390[0xFF1B] = this.o888;
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF1C:
          try {
this.o392[0x1C] = this.o390[0xFF1C] = function (o421, o768) {try {
"use strict";
}catch(e){}
            try {
return 0x9F | o421.o155[0xFF1C];
}catch(e){}
          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF1D:
          try {
this.o392[0x1D] = this.o390[0xFF1D] = function (o421, o768) {try {
"use strict";
}catch(e){}
            try {
return 0xFF;
}catch(e){}
          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF1E:
          try {
this.o392[0x1E] = this.o390[0xFF1E] = function (o421, o768) {try {
"use strict";
}catch(e){}
            try {
return 0xBF | o421.o155[0xFF1E];
}catch(e){}
          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF1F:
        case 0xFF20:
          try {
this.o392[index & 0xFF] = this.o390[index] = this.o888;
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF23:
          try {
this.o392[0x23] = this.o390[0xFF23] = function (o421, o768) {try {
"use strict";
}catch(e){}
            try {
return 0xBF | o421.o155[0xFF23];
}catch(e){}
          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF26:
          try {
this.o392[0x26] = this.o390[0xFF26] = function (o421, o768) {try {
"use strict";
}catch(e){}
            try {
o421.o746();
}catch(e){}
            try {
return 0x70 | o421.o155[0xFF26];
}catch(e){}
          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF27:
        case 0xFF28:
        case 0xFF29:
        case 0xFF2A:
        case 0xFF2B:
        case 0xFF2C:
        case 0xFF2D:
        case 0xFF2E:
        case 0xFF2F:
          try {
this.o392[index & 0xFF] = this.o390[index] = this.o888;
}catch(e){}
          try {
break;
}catch(e){}
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
          try {
this.o390[index] = function (o421, o768) {try {
"use strict";
}catch(e){}
            try {
return (o421.o629) ? o421.o155[0xFF00 | (o421.o659 >> 1)] : o421.o155[o768];
}catch(e){}
          }
}catch(e){}
          try {
this.o392[index & 0xFF] = function (o421, o768) {try {
"use strict";
}catch(e){}
            try {
return (o421.o629) ? o421.o155[0xFF00 | (o421.o659 >> 1)] : o421.o155[0xFF00 | o768];
}catch(e){}
          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF41:
          try {
this.o392[0x41] = this.o390[0xFF41] = function (o421, o768) {try {
"use strict";
}catch(e){}
            try {
return 0x80 | o421.o155[0xFF41] | o421.o412;
}catch(e){}
          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF42:
          try {
this.o392[0x42] = this.o390[0xFF42] = function (o421, o768) {try {
"use strict";
}catch(e){}
            try {
return o421.o524;
}catch(e){}
          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF43:
          try {
this.o392[0x43] = this.o390[0xFF43] = function (o421, o768) {try {
"use strict";
}catch(e){}
            try {
return o421.o523;
}catch(e){}
          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF44:
          try {
this.o392[0x44] = this.o390[0xFF44] = function (o421, o768) {try {
"use strict";
}catch(e){}
            try {
return ((o421.o418) ? o421.o155[0xFF44] : 0);
}catch(e){}
          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF4A:
          //WY
          try {
this.o392[0x4A] = this.o390[0xFF4A] = function (o421, o768) {try {
"use strict";
}catch(e){}
            try {
return o421.o533;
}catch(e){}
          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF4F:
          try {
this.o392[0x4F] = this.o390[0xFF4F] = function (o421, o768) {try {
"use strict";
}catch(e){}
            try {
return o421.o522;
}catch(e){}
          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF55:
          try {
if (this.o400) {
            try {
this.o392[0x55] = this.o390[0xFF55] = function (o421, o768) {try {
"use strict";
}catch(e){}
              try {
if (!o421.o418 && o421.o385) {  //Undocumented behavior alert: HDMA becomes GDMA when LCD is off (Worms Armageddon Fix).
                //DMA
                try {
o421.o795((o421.o155[0xFF55] & 0x7F) + 1);
}catch(e){}
                try {
o421.o155[0xFF55] = 0xFF;
}catch(e){}  //Transfer completed.
                try {
o421.o385 = false;
}catch(e){}
              }
}catch(e){}
              try {
return o421.o155[0xFF55];
}catch(e){}
            }
}catch(e){}
          }
          else {
            try {
this.o390[0xFF55] = this.o879;
}catch(e){}
            try {
this.o392[0x55] = this.o893;
}catch(e){}
          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF56:
          try {
if (this.o400) {
            try {
this.o392[0x56] = this.o390[0xFF56] = function (o421, o768) {try {
"use strict";
}catch(e){}
              //Return IR "not connected" status:
              try {
return 0x3C | ((o421.o155[0xFF56] >= 0xC0) ? (0x2 | (o421.o155[0xFF56] & 0xC1)) : (o421.o155[0xFF56] & 0xC3));
}catch(e){}
            }
}catch(e){}
          }
          else {
            try {
this.o390[0xFF56] = this.o879;
}catch(e){}
            try {
this.o392[0x56] = this.o893;
}catch(e){}
          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF6C:
          try {
if (this.o400) {
            try {
this.o392[0x6C] = this.o390[0xFF6C] = function (o421, o768) {try {
"use strict";
}catch(e){}
              try {
return 0xFE | o421.o155[0xFF6C];
}catch(e){}
            }
}catch(e){}
          }
          else {
            try {
this.o392[0x6C] = this.o390[0xFF6C] = this.o888;
}catch(e){}
          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF70:
          try {
if (this.o400) {
            //SVBK
            try {
this.o392[0x70] = this.o390[0xFF70] = function (o421, o768) {try {
"use strict";
}catch(e){}
              try {
return 0x40 | o421.o155[0xFF70];
}catch(e){}
            }
}catch(e){}
          }
          else {
            try {
this.o392[0x70] = this.o390[0xFF70] = this.o888;
}catch(e){}
          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF75:
          try {
this.o392[0x75] = this.o390[0xFF75] = function (o421, o768) {try {
"use strict";
}catch(e){}
            try {
return 0x8F | o421.o155[0xFF75];
}catch(e){}
          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFF76:
        case 0xFF77:
          try {
this.o392[index & 0xFF] = this.o390[index] = function (o421, o768) {try {
"use strict";
}catch(e){}
            try {
return 0;
}catch(e){}
          }
}catch(e){}
          try {
break;
}catch(e){}
        case 0xFFFF:
          //IE
          try {
this.o392[0xFF] = this.o390[0xFFFF] = function (o421, o768) {try {
"use strict";
}catch(e){}
            try {
return o421.o384;
}catch(e){}
          }
}catch(e){}
          try {
break;
}catch(e){}
        default:
          try {
this.o390[index] = this.o879;
}catch(e){}
          try {
this.o392[index & 0xFF] = this.o893;
}catch(e){}
      }
}catch(e){}
    }
    else {
      try {
this.o390[index] = this.o888;
}catch(e){}
    }
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o879 = function (o421, o768) {try {
"use strict";
}catch(e){}
  try {
return o421.o155[o768];
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o893 = function (o421, o768) {try {
"use strict";
}catch(e){}
  try {
return o421.o155[0xFF00 | o768];
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o880 = function (o421, o768) {try {
"use strict";
}catch(e){}
  try {
return o421.o153[o421.o406 + o768];
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o886 = function (o421, o768) {try {
"use strict";
}catch(e){}
  //Switchable RAM
  try {
if (o421.o397 || o683[10]) {
    try {
return o421.o157[o768 + o421.o399];
}catch(e){}
  }
}catch(e){}
  //cout("Reading from disabled RAM.", 1);
  try {
return 0xFF;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o885 = function (o421, o768) {try {
"use strict";
}catch(e){}
  //Switchable RAM
  try {
if (o421.o397 || o683[10]) {
    try {
switch (o768) {
      case 0xA000:
      case 0xA060:
      case 0xA070:
        try {
return 0;
}catch(e){}
      case 0xA080:
        //TODO: Gyro Control Register
        try {
return 0;
}catch(e){}
      case 0xA050:
        //Y High Byte
        try {
return o421.o438;
}catch(e){}
      case 0xA040:
        //Y Low Byte
        try {
return o421.o439;
}catch(e){}
      case 0xA030:
        //X High Byte
        try {
return o421.o436;
}catch(e){}
      case 0xA020:
        //X Low Byte:
        try {
return o421.o437;
}catch(e){}
      default:
        try {
return o421.o157[o768 + o421.o399];
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  //cout("Reading from disabled RAM.", 1);
  try {
return 0xFF;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o887 = function (o421, o768) {try {
"use strict";
}catch(e){}
  //Switchable RAM
  try {
if (o421.o397 || o683[10]) {
    try {
switch (o421.o398) {
      case 0x00:
      case 0x01:
      case 0x02:
      case 0x03:
        try {
return o421.o157[o768 + o421.o399];
}catch(e){}
        try {
break;
}catch(e){}
      case 0x08:
        try {
return o421.o425;
}catch(e){}
        try {
break;
}catch(e){}
      case 0x09:
        try {
return o421.o426;
}catch(e){}
        try {
break;
}catch(e){}
      case 0x0A:
        try {
return o421.o427;
}catch(e){}
        try {
break;
}catch(e){}
      case 0x0B:
        try {
return o421.o428;
}catch(e){}
        try {
break;
}catch(e){}
      case 0x0C:
        try {
return (((o421.o434) ? 0x80 : 0) + ((o421.o435) ? 0x40 : 0)) + o421.o429;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  //cout("Reading from invalid or disabled RAM.", 1);
  try {
return 0xFF;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o889 = function (o421, o768) {try {
"use strict";
}catch(e){}
  try {
return o421.o395[o768 + o421.o402];
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o892 = function (o421, o768) {try {
"use strict";
}catch(e){}
  try {
return (o421.o412 > 1) ?  0xFF : o421.o155[o768];
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o891 = function (o421, o768) {try {
"use strict";
}catch(e){}
  try {
return o421.o395[o768 + o421.o403];
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o890 = function (o421, o768) {try {
"use strict";
}catch(e){}
  try {
return o421.o155[o768 - 0x2000];
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o888 = function (o421, o768) {try {
"use strict";
}catch(e){}
  try {
return 0xFF;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o881 = function (o421, o768) {try {
"use strict";
}catch(e){}
  //CPU Side Reading The VRAM (Optimized for GameBoy Color)
  try {
return (o421.o412 > 2) ? 0xFF : ((o421.o522 == 0) ? o421.o155[o768] : o421.o394[o768 & 0x1FFF]);
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o882 = function (o421, o768) {try {
"use strict";
}catch(e){}
  //CPU Side Reading The VRAM (Optimized for classic GameBoy)
  try {
return (o421.o412 > 2) ? 0xFF : o421.o155[o768];
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o883 = function (o421, o768) {try {
"use strict";
}catch(e){}
  //CPU Side Reading the Character Data Map:
  try {
return (o421.o412 > 2) ? 0xFF : o421.o542[o768 & 0x7FF];
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o884 = function (o421, o768) {try {
"use strict";
}catch(e){}
  //CPU Side Reading the Character Data Map:
  try {
return (o421.o412 > 2) ? 0xFF : o421.o540[o768 & 0x7FF];
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o894 = function () {try {
"use strict";
}catch(e){}
  //Read the cartridge ROM data from RAM memory:
  try {
switch (this.o405) {
    case 0x00:
    case 0x20:
    case 0x40:
    case 0x60:
      //Bank calls for 0x00, 0x20, 0x40, and 0x60 are really for 0x01, 0x21, 0x41, and 0x61.
      try {
this.o406 = (this.o405 % this.o663) << 14;
}catch(e){}
      try {
break;
}catch(e){}
    default:
      try {
this.o406 = ((this.o405 % this.o663) - 1) << 14;
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o895 = function () {try {
"use strict";
}catch(e){}
  //Read the cartridge ROM data from RAM memory:
  //Only map bank 0 to bank 1 here (MBC2 is like MBC1, but can only do 16 banks, so only the bank 0 quirk appears for MBC2):
  try {
this.o406 = Math.o290((this.o405 % this.o663) - 1, 0) << 14;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o896 = function () {try {
"use strict";
}catch(e){}
  //Read the cartridge ROM data from RAM memory:
  try {
this.o406 = ((this.o405 % this.o663) - 1) << 14;
}catch(e){}
}
}catch(e){}
//Memory Writing:
try {
o360.prototype.o580 = function (o768, o70) {try {
"use strict";
}catch(e){}
  //Act as a wrapper for writing by compiled jumps to specific memory writing functions.
  try {
this.o391[o768](this, o768, o70);
}catch(e){}
}
}catch(e){}
//0xFFXX fast path:
try {
o360.prototype.o594 = function (o768, o70) {try {
"use strict";
}catch(e){}
  //Act as a wrapper for writing by compiled jumps to specific memory writing functions.
  try {
this.o393[o768](this, o768, o70);
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o667 = function () {try {
"use strict";
}catch(e){}
  //Faster in some browsers, since we are doing less conditionals overall by implementing them in advance.
  try {
for (var index = 0x0000; index <= 0xFFFF; index++) {
    try {
if (index < 0x8000) {
      try {
if (this.o507) {
        try {
if (index < 0x2000) {
          try {
this.o391[index] = this.o897;
}catch(e){}
        }
        else try {
if (index < 0x4000) {
          try {
this.o391[index] = this.o898;
}catch(e){}
        }
        else try {
if (index < 0x6000) {
          try {
this.o391[index] = this.o899;
}catch(e){}
        }
        else {
          try {
this.o391[index] = this.o900;
}catch(e){}
        }
}catch(e){}
}catch(e){}
}catch(e){}
      }
      else try {
if (this.o508) {
        try {
if (index < 0x1000) {
          try {
this.o391[index] = this.o897;
}catch(e){}
        }
        else try {
if (index >= 0x2100 && index < 0x2200) {
          try {
this.o391[index] = this.o901;
}catch(e){}
        }
        else {
          try {
this.o391[index] = this.o902;
}catch(e){}
        }
}catch(e){}
}catch(e){}
      }
      else try {
if (this.o509) {
        try {
if (index < 0x2000) {
          try {
this.o391[index] = this.o897;
}catch(e){}
        }
        else try {
if (index < 0x4000) {
          try {
this.o391[index] = this.o903;
}catch(e){}
        }
        else try {
if (index < 0x6000) {
          try {
this.o391[index] = this.o904;
}catch(e){}
        }
        else {
          try {
this.o391[index] = this.o905;
}catch(e){}
        }
}catch(e){}
}catch(e){}
}catch(e){}
      }
      else try {
if (this.o510 || this.o514 || this.o511) {
        try {
if (index < 0x2000) {
          try {
this.o391[index] = this.o897;
}catch(e){}
        }
        else try {
if (index < 0x3000) {
          try {
this.o391[index] = this.o906;
}catch(e){}
        }
        else try {
if (index < 0x4000) {
          try {
this.o391[index] = this.o907;
}catch(e){}
        }
        else try {
if (index < 0x6000) {
          try {
this.o391[index] = (this.o514) ? this.o908 : this.o909;
}catch(e){}
        }
        else {
          try {
this.o391[index] = this.o902;
}catch(e){}
        }
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
      }
      else try {
if (this.o517) {
        try {
if (index < 0x2000) {
          try {
this.o391[index] = this.o897;
}catch(e){}
        }
        else try {
if (index < 0x4000) {
          try {
this.o391[index] = this.o903;
}catch(e){}
        }
        else try {
if (index < 0x6000) {
          try {
this.o391[index] = this.o910;
}catch(e){}
        }
        else {
          try {
this.o391[index] = this.o902;
}catch(e){}
        }
}catch(e){}
}catch(e){}
}catch(e){}
      }
      else {
        try {
this.o391[index] = this.o902;
}catch(e){}
      }
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
    }
    else try {
if (index < 0x9000) {
      try {
this.o391[index] = (this.o400) ? this.o911 : this.o912;
}catch(e){}
    }
    else try {
if (index < 0x9800) {
      try {
this.o391[index] = (this.o400) ? this.o911 : this.o913;
}catch(e){}
    }
    else try {
if (index < 0xA000) {
      try {
this.o391[index] = (this.o400) ? this.o914 : this.o915;
}catch(e){}
    }
    else try {
if (index < 0xC000) {
      try {
if ((this.o521 == 1 / 16 && index < 0xA200) || this.o521 >= 1) {
        try {
if (!this.o509) {
          try {
this.o391[index] = this.o916;
}catch(e){}
        }
        else {
          //MBC3 RTC + RAM:
          try {
this.o391[index] = this.o917;
}catch(e){}
        }
}catch(e){}
      }
      else {
        try {
this.o391[index] = this.o902;
}catch(e){}
      }
}catch(e){}
    }
    else try {
if (index < 0xE000) {
      try {
if (this.o400 && index >= 0xD000) {
        try {
this.o391[index] = this.o918;
}catch(e){}
      }
      else {
        try {
this.o391[index] = this.o919;
}catch(e){}
      }
}catch(e){}
    }
    else try {
if (index < 0xFE00) {
      try {
if (this.o400 && index >= 0xF000) {
        try {
this.o391[index] = this.o920;
}catch(e){}
      }
      else {
        try {
this.o391[index] = this.o921;
}catch(e){}
      }
}catch(e){}
    }
    else try {
if (index <= 0xFEA0) {
      try {
this.o391[index] = this.o922;
}catch(e){}
    }
    else try {
if (index < 0xFF00) {
      try {
if (this.o400) {                      //Only GBC has access to this RAM.
        try {
this.o391[index] = this.o919;
}catch(e){}
      }
      else {
        try {
this.o391[index] = this.o902;
}catch(e){}
      }
}catch(e){}
    }
    else {
      //Start the I/O initialization by filling in the slots as normal memory:
      try {
this.o391[index] = this.o919;
}catch(e){}
      try {
this.o393[index & 0xFF] = this.o923;
}catch(e){}
    }
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
  }
}catch(e){}
  try {
this.o924();
}catch(e){}        //Compile the I/O write functions separately...
}
}catch(e){}
try {
o360.prototype.o897 = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
  //MBC RAM Bank Enable/Disable:
  try {
o421.o397 = ((o70 & 0x0F) == 0x0A);
}catch(e){}  //If lower nibble is 0x0A, then enable, otherwise disable.
}
}catch(e){}
try {
o360.prototype.o898 = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
  //MBC1 ROM bank switching:
  try {
o421.o405 = (o421.o405 & 0x60) | (o70 & 0x1F);
}catch(e){}
  try {
o421.o894();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o899 = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
  //MBC1 RAM bank switching
  try {
if (o421.o396) {
    //4/32 Mode
    try {
o421.o398 = o70 & 0x03;
}catch(e){}
    try {
o421.o399 = (o421.o398 << 13) - 0xA000;
}catch(e){}
  }
  else {
    //16/8 Mode
    try {
o421.o405 = ((o70 & 0x03) << 5) | (o421.o405 & 0x1F);
}catch(e){}
    try {
o421.o894();
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o900 = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
  //MBC1 mode setting:
  try {
o421.o396 = ((o70 & 0x1) == 0x1);
}catch(e){}
  try {
if (o421.o396) {
    try {
o421.o405 &= 0x1F;
}catch(e){}
    try {
o421.o894();
}catch(e){}
  }
  else {
    try {
o421.o398 = 0;
}catch(e){}
    try {
o421.o399 = -0xA000;
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o901 = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
  //MBC2 ROM bank switching:
  try {
o421.o405 = o70 & 0x0F;
}catch(e){}
  try {
o421.o895();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o903 = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
  //MBC3 ROM bank switching:
  try {
o421.o405 = o70 & 0x7F;
}catch(e){}
  try {
o421.o895();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o904 = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
  try {
o421.o398 = o70;
}catch(e){}
  try {
if (o70 < 4) {
    //MBC3 RAM bank switching
    try {
o421.o399 = (o421.o398 << 13) - 0xA000;
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o905 = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
  try {
if (o70 == 0) {
    try {
o421.o424 = false;
}catch(e){}
  }
  else try {
if (!o421.o424) {
    //Copy over the current RTC time for reading.
    try {
o421.o424 = true;
}catch(e){}
    try {
o421.o425 = o421.o430 | 0;
}catch(e){}
    try {
o421.o426 = o421.o431;
}catch(e){}
    try {
o421.o427 = o421.o432;
}catch(e){}
    try {
o421.o428 = (o421.o433 & 0xFF);
}catch(e){}
    try {
o421.o429 = o421.o433 >> 8;
}catch(e){}
  }
}catch(e){}
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o906 = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
  //MBC5 ROM bank switching:
  try {
o421.o405 = (o421.o405 & 0x100) | o70;
}catch(e){}
  try {
o421.o896();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o907 = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
  //MBC5 ROM bank switching (by least significant bit):
  try {
o421.o405  = ((o70 & 0x01) << 8) | (o421.o405 & 0xFF);
}catch(e){}
  try {
o421.o896();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o909 = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
  //MBC5 RAM bank switching
  try {
o421.o398 = o70 & 0xF;
}catch(e){}
  try {
o421.o399 = (o421.o398 << 13) - 0xA000;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o908 = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
  //MBC5 RAM bank switching
  //Like MBC5, but bit 3 of the lower nibble is used for rumbling and bit 2 is ignored.
  try {
o421.o398 = o70 & 0x03;
}catch(e){}
  try {
o421.o399 = (o421.o398 << 13) - 0xA000;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o910 = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
  //HuC3 RAM bank switching
  try {
o421.o398 = o70 & 0x03;
}catch(e){}
  try {
o421.o399 = (o421.o398 << 13) - 0xA000;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o902 = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
  //We might have encountered illegal RAM writing or such, so just do nothing...
}
}catch(e){}
try {
o360.prototype.o919 = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
  try {
o421.o155[o768] = o70;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o923 = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
  try {
o421.o155[0xFF00 | o768] = o70;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o916 = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
  try {
if (o421.o397 || o683[10]) {
    try {
o421.o157[o768 + o421.o399] = o70;
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o917 = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
  try {
if (o421.o397 || o683[10]) {
    try {
switch (o421.o398) {
      case 0x00:
      case 0x01:
      case 0x02:
      case 0x03:
        try {
o421.o157[o768 + o421.o399] = o70;
}catch(e){}
        try {
break;
}catch(e){}
      case 0x08:
        try {
if (o70 < 60) {
          try {
o421.o430 = o70;
}catch(e){}
        }
        else {
          try {
o113("(Bank #" + o421.o398 + ") RTC write out of range: " + o70, 1);
}catch(e){}
        }
}catch(e){}
        try {
break;
}catch(e){}
      case 0x09:
        try {
if (o70 < 60) {
          try {
o421.o431 = o70;
}catch(e){}
        }
        else {
          try {
o113("(Bank #" + o421.o398 + ") RTC write out of range: " + o70, 1);
}catch(e){}
        }
}catch(e){}
        try {
break;
}catch(e){}
      case 0x0A:
        try {
if (o70 < 24) {
          try {
o421.o432 = o70;
}catch(e){}
        }
        else {
          try {
o113("(Bank #" + o421.o398 + ") RTC write out of range: " + o70, 1);
}catch(e){}
        }
}catch(e){}
        try {
break;
}catch(e){}
      case 0x0B:
        try {
o421.o433 = (o70 & 0xFF) | (o421.o433 & 0x100);
}catch(e){}
        try {
break;
}catch(e){}
      case 0x0C:
        try {
o421.o434 = (o70 > 0x7F);
}catch(e){}
        try {
o421.o925 = (o70 & 0x40) == 0x40;
}catch(e){}
        try {
o421.o433 = ((o70 & 0x1) << 8) | (o421.o433 & 0xFF);
}catch(e){}
        try {
break;
}catch(e){}
      default:
        try {
o113("Invalid MBC3 bank address selected: " + o421.o398, 0);
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o918 = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
  try {
o421.o395[o768 + o421.o402] = o70;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o922 = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
  try {
if (o421.o412 < 2) {    //OAM RAM cannot be written to in mode 2 & 3
    try {
if (o421.o155[o768] != o70) {
      try {
o421.o873();
}catch(e){}
      try {
o421.o155[o768] = o70;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o920 = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
  try {
o421.o395[o768 + o421.o403] = o70;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o921 = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
  try {
o421.o155[o768 - 0x2000] = o70;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o912 = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
  try {
if (o421.o412 < 3) {  //VRAM cannot be written to during mode 3
    try {
if (o421.o155[o768] != o70) {
      //JIT the graphics render queue:
      try {
o421.o873();
}catch(e){}
      try {
o421.o155[o768] = o70;
}catch(e){}
      try {
o421.o828(o768);
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o913 = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
  try {
if (o421.o412 < 3) {  //VRAM cannot be written to during mode 3
    try {
if (o421.o155[o768] != o70) {
      //JIT the graphics render queue:
      try {
o421.o873();
}catch(e){}
      try {
o421.o155[o768] = o70;
}catch(e){}
      try {
o421.o829(o768);
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o911 = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
  try {
if (o421.o412 < 3) {  //VRAM cannot be written to during mode 3
    try {
if (o421.o522 == 0) {
      try {
if (o421.o155[o768] != o70) {
        //JIT the graphics render queue:
        try {
o421.o873();
}catch(e){}
        try {
o421.o155[o768] = o70;
}catch(e){}
        try {
o421.o865(o768);
}catch(e){}
      }
}catch(e){}
    }
    else {
      try {
o768 &= 0x1FFF;
}catch(e){}
      try {
if (o421.o394[o768] != o70) {
        //JIT the graphics render queue:
        try {
o421.o873();
}catch(e){}
        try {
o421.o394[o768] = o70;
}catch(e){}
        try {
o421.o872(o768);
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o915 = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
  try {
if (o421.o412 < 3) {  //VRAM cannot be written to during mode 3
    try {
o768 &= 0x7FF;
}catch(e){}
    try {
if (o421.o540[o768] != o70) {
      //JIT the graphics render queue:
      try {
o421.o873();
}catch(e){}
      try {
o421.o540[o768] = o70;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o914 = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
  try {
if (o421.o412 < 3) {  //VRAM cannot be written to during mode 3
    try {
o768 &= 0x7FF;
}catch(e){}
    try {
if (o421.o542[o768] != o70) {
      //JIT the graphics render queue:
      try {
o421.o873();
}catch(e){}
      try {
o421.o542[o768] = o70;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o795 = function (o926) {try {
"use strict";
}catch(e){}
  try {
if (!this.o378) {
    //Clock the CPU for the DMA transfer (CPU is halted during the transfer):
    try {
this.o386 += 4 | ((o926 << 5) << this.o387);
}catch(e){}
  }
}catch(e){}
  //Source address of the transfer:
  var source = (this.o155[0xFF51] << 8) | this.o155[0xFF52];
  //Destination address in the VRAM memory range:
  var o126 = (this.o155[0xFF53] << 8) | this.o155[0xFF54];
  //Creating some references:
  var o390 = this.o390;
  //JIT the graphics render queue:
  try {
this.o873();
}catch(e){}
  var o155 = this.o155;
  //Determining which bank we're working on so we can optimize:
  try {
if (this.o522 == 0) {
    //DMA transfer for VRAM bank 0:
    try {
do {
      try {
if (o126 < 0x1800) {
        try {
o155[0x8000 | o126] = o390[source](this, source++);
}catch(e){}
        try {
o155[0x8001 | o126] = o390[source](this, source++);
}catch(e){}
        try {
o155[0x8002 | o126] = o390[source](this, source++);
}catch(e){}
        try {
o155[0x8003 | o126] = o390[source](this, source++);
}catch(e){}
        try {
o155[0x8004 | o126] = o390[source](this, source++);
}catch(e){}
        try {
o155[0x8005 | o126] = o390[source](this, source++);
}catch(e){}
        try {
o155[0x8006 | o126] = o390[source](this, source++);
}catch(e){}
        try {
o155[0x8007 | o126] = o390[source](this, source++);
}catch(e){}
        try {
o155[0x8008 | o126] = o390[source](this, source++);
}catch(e){}
        try {
o155[0x8009 | o126] = o390[source](this, source++);
}catch(e){}
        try {
o155[0x800A | o126] = o390[source](this, source++);
}catch(e){}
        try {
o155[0x800B | o126] = o390[source](this, source++);
}catch(e){}
        try {
o155[0x800C | o126] = o390[source](this, source++);
}catch(e){}
        try {
o155[0x800D | o126] = o390[source](this, source++);
}catch(e){}
        try {
o155[0x800E | o126] = o390[source](this, source++);
}catch(e){}
        try {
o155[0x800F | o126] = o390[source](this, source++);
}catch(e){}
        try {
this.o830(o126);
}catch(e){}
        try {
o126 += 0x10;
}catch(e){}
      }
      else {
        try {
o126 &= 0x7F0;
}catch(e){}
        try {
this.o540[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o540[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o540[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o540[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o540[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o540[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o540[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o540[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o540[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o540[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o540[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o540[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o540[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o540[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o540[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o540[o126++] = o390[source](this, source++);
}catch(e){}
        try {
o126 = (o126 + 0x1800) & 0x1FF0;
}catch(e){}
      }
}catch(e){}
      try {
source &= 0xFFF0;
}catch(e){}
      try {
--o926;
}catch(e){}
    } while (o926 > 0);
}catch(e){}
  }
  else {
    var o394 = this.o394;
    //DMA transfer for VRAM bank 1:
    try {
do {
      try {
if (o126 < 0x1800) {
        try {
o394[o126] = o390[source](this, source++);
}catch(e){}
        try {
o394[o126 | 0x1] = o390[source](this, source++);
}catch(e){}
        try {
o394[o126 | 0x2] = o390[source](this, source++);
}catch(e){}
        try {
o394[o126 | 0x3] = o390[source](this, source++);
}catch(e){}
        try {
o394[o126 | 0x4] = o390[source](this, source++);
}catch(e){}
        try {
o394[o126 | 0x5] = o390[source](this, source++);
}catch(e){}
        try {
o394[o126 | 0x6] = o390[source](this, source++);
}catch(e){}
        try {
o394[o126 | 0x7] = o390[source](this, source++);
}catch(e){}
        try {
o394[o126 | 0x8] = o390[source](this, source++);
}catch(e){}
        try {
o394[o126 | 0x9] = o390[source](this, source++);
}catch(e){}
        try {
o394[o126 | 0xA] = o390[source](this, source++);
}catch(e){}
        try {
o394[o126 | 0xB] = o390[source](this, source++);
}catch(e){}
        try {
o394[o126 | 0xC] = o390[source](this, source++);
}catch(e){}
        try {
o394[o126 | 0xD] = o390[source](this, source++);
}catch(e){}
        try {
o394[o126 | 0xE] = o390[source](this, source++);
}catch(e){}
        try {
o394[o126 | 0xF] = o390[source](this, source++);
}catch(e){}
        try {
this.o831(o126);
}catch(e){}
        try {
o126 += 0x10;
}catch(e){}
      }
      else {
        try {
o126 &= 0x7F0;
}catch(e){}
        try {
this.o541[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o541[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o541[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o541[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o541[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o541[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o541[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o541[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o541[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o541[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o541[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o541[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o541[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o541[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o541[o126++] = o390[source](this, source++);
}catch(e){}
        try {
this.o541[o126++] = o390[source](this, source++);
}catch(e){}
        try {
o126 = (o126 + 0x1800) & 0x1FF0;
}catch(e){}
      }
}catch(e){}
      try {
source &= 0xFFF0;
}catch(e){}
      try {
--o926;
}catch(e){}
    } while (o926 > 0);
}catch(e){}
  }
}catch(e){}
  //Update the HDMA registers to their next addresses:
  try {
o155[0xFF51] = source >> 8;
}catch(e){}
  try {
o155[0xFF52] = source & 0xF0;
}catch(e){}
  try {
o155[0xFF53] = o126 >> 8;
}catch(e){}
  try {
o155[0xFF54] = o126 & 0xF0;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o924 = function () {try {
"use strict";
}catch(e){}
  //I/O Registers (GB + GBC):
  //JoyPad
  try {
this.o393[0] = this.o391[0xFF00] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
o421.o155[0xFF00] = (o70 & 0x30) | ((((o70 & 0x20) == 0) ? (o421.o388 >> 4) : 0xF) & (((o70 & 0x10) == 0) ? (o421.o388 & 0xF) : 0xF));
}catch(e){}
  }
}catch(e){}
  //SB (Serial Transfer Data)
  try {
this.o393[0x1] = this.o391[0xFF01] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
if (o421.o155[0xFF02] < 0x80) {  //Cannot write while a serial transfer is active.
      try {
o421.o155[0xFF01] = o70;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  //DIV
  try {
this.o393[0x4] = this.o391[0xFF04] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
o421.o489 &= 0xFF;
}catch(e){}  //Update DIV for realignment.
    try {
o421.o155[0xFF04] = 0;
}catch(e){}
  }
}catch(e){}
  //TIMA
  try {
this.o393[0x5] = this.o391[0xFF05] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
o421.o155[0xFF05] = o70;
}catch(e){}
  }
}catch(e){}
  //TMA
  try {
this.o393[0x6] = this.o391[0xFF06] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
o421.o155[0xFF06] = o70;
}catch(e){}
  }
}catch(e){}
  //TAC
  try {
this.o393[0x7] = this.o391[0xFF07] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
o421.o155[0xFF07] = o70 & 0x07;
}catch(e){}
    try {
o421.o492 = (o70 & 0x04) == 0x04;
}catch(e){}
    try {
o421.o493 = Math.o54(4, ((o70 & 0x3) != 0) ? (o70 & 0x3) : 4) << 2;
}catch(e){}  //TODO: Find a way to not make a conditional in here...
  }
}catch(e){}
  //IF (Interrupt Request)
  try {
this.o393[0xF] = this.o391[0xFF0F] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
o421.o383 = o70;
}catch(e){}
    try {
o421.o664();
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x10] = this.o391[0xFF10] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
if (o421.o450) {
      try {
o421.o746();
}catch(e){}
      try {
if (o421.o619 && (o70 & 0x08) == 0) {
        try {
if (o421.o617 != o421.o618) {
          try {
o421.o613 = true;
}catch(e){}
        }
}catch(e){}
      }
}catch(e){}
      try {
o421.o616 = (o70 & 0x70) >> 4;
}catch(e){}
      try {
o421.o618 = o70 & 0x07;
}catch(e){}
      try {
o421.o619 = ((o70 & 0x08) == 0x08);
}catch(e){}
      try {
o421.o155[0xFF10] = o70;
}catch(e){}
      try {
o421.o750();
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x11] = this.o391[0xFF11] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
if (o421.o450 || !o421.o400) {
      try {
if (o421.o450) {
        try {
o421.o746();
}catch(e){}
      }
      else {
        try {
o70 &= 0x3F;
}catch(e){}
      }
}catch(e){}
      try {
o421.o645 = o421.o443[o70 >> 6];
}catch(e){}
      try {
o421.o606 = 0x40 - (o70 & 0x3F);
}catch(e){}
      try {
o421.o155[0xFF11] = o70 & 0xC0;
}catch(e){}
      try {
o421.o750();
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x12] = this.o391[0xFF12] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
if (o421.o450) {
      try {
o421.o746();
}catch(e){}
      try {
if (o421.o648 && o421.o609 == 0) {
        //Zombie Volume PAPU Bug:
        try {
if (((o421.o155[0xFF12] ^ o70) & 0x8) == 0x8) {
          try {
if ((o421.o155[0xFF12] & 0x8) == 0) {
            try {
if ((o421.o155[0xFF12] & 0x7) == 0x7) {
              try {
o421.o607 += 2;
}catch(e){}
            }
            else {
              try {
++o421.o607;
}catch(e){}
            }
}catch(e){}
          }
}catch(e){}
          try {
o421.o607 = (16 - o421.o607) & 0xF;
}catch(e){}
        }
        else try {
if ((o421.o155[0xFF12] & 0xF) == 0x8) {
          try {
o421.o607 = (1 + o421.o607) & 0xF;
}catch(e){}
        }
}catch(e){}
}catch(e){}
        try {
o421.o727();
}catch(e){}
      }
}catch(e){}
      try {
o421.o608 = ((o70 & 0x08) == 0x08);
}catch(e){}
      try {
o421.o155[0xFF12] = o70;
}catch(e){}
      try {
o421.o760();
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x13] = this.o391[0xFF13] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
if (o421.o450) {
      try {
o421.o746();
}catch(e){}
      try {
o421.o612 = (o421.o612 & 0x700) | o70;
}catch(e){}
      try {
o421.o604 = (0x800 - o421.o612) << 2;
}catch(e){}
      try {
o421.o155[0xFF13] = o70;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x14] = this.o391[0xFF14] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
if (o421.o450) {
      try {
o421.o746();
}catch(e){}
      try {
o421.o611 = ((o70 & 0x40) == 0x0);
}catch(e){}
      try {
o421.o612 = ((o70 & 0x7) << 8) | (o421.o612 & 0xFF);
}catch(e){}
      try {
o421.o604 = (0x800 - o421.o612) << 2;
}catch(e){}
      try {
if (o70 > 0x7F) {
        //Reload 0xFF10:
        try {
o421.o615 = o421.o616;
}catch(e){}
        try {
o421.o617 = o421.o618;
}catch(e){}
        //Reload 0xFF12:
        var o927 = o421.o155[0xFF12];
        try {
o421.o607 = o927 >> 4;
}catch(e){}
        try {
o421.o727();
}catch(e){}
        try {
o421.o610 = (o927 & 0x7) - 1;
}catch(e){}
        try {
if (o421.o606 == 0) {
          try {
o421.o606 = 0x40;
}catch(e){}
        }
}catch(e){}
        try {
if (o421.o616 > 0 || o421.o618 > 0) {
          try {
o421.o155[0xFF26] |= 0x1;
}catch(e){}
        }
        else {
          try {
o421.o155[0xFF26] &= 0xFE;
}catch(e){}
        }
}catch(e){}
        try {
if ((o70 & 0x40) == 0x40) {
          try {
o421.o155[0xFF26] |= 0x1;
}catch(e){}
        }
}catch(e){}
        try {
o421.o614 = o421.o612;
}catch(e){}
        //Reset frequency overflow check + frequency sweep type check:
        try {
o421.o613 = false;
}catch(e){}
        //Supposed to run immediately:
        try {
o421.o754();
}catch(e){}
      }
}catch(e){}
      try {
o421.o750();
}catch(e){}
      try {
o421.o155[0xFF14] = o70 & 0x40;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x16] = this.o391[0xFF16] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
if (o421.o450 || !o421.o400) {
      try {
if (o421.o450) {
        try {
o421.o746();
}catch(e){}
      }
      else {
        try {
o70 &= 0x3F;
}catch(e){}
      }
}catch(e){}
      try {
o421.o647 = o421.o443[o70 >> 6];
}catch(e){}
      try {
o421.o622 = 0x40 - (o70 & 0x3F);
}catch(e){}
      try {
o421.o155[0xFF16] = o70 & 0xC0;
}catch(e){}
      try {
o421.o751();
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x17] = this.o391[0xFF17] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
if (o421.o450) {
      try {
o421.o746();
}catch(e){}
      try {
if (o421.o649 && o421.o625 == 0) {
        //Zombie Volume PAPU Bug:
        try {
if (((o421.o155[0xFF17] ^ o70) & 0x8) == 0x8) {
          try {
if ((o421.o155[0xFF17] & 0x8) == 0) {
            try {
if ((o421.o155[0xFF17] & 0x7) == 0x7) {
              try {
o421.o623 += 2;
}catch(e){}
            }
            else {
              try {
++o421.o623;
}catch(e){}
            }
}catch(e){}
          }
}catch(e){}
          try {
o421.o623 = (16 - o421.o623) & 0xF;
}catch(e){}
        }
        else try {
if ((o421.o155[0xFF17] & 0xF) == 0x8) {
          try {
o421.o623 = (1 + o421.o623) & 0xF;
}catch(e){}
        }
}catch(e){}
}catch(e){}
        try {
o421.o728();
}catch(e){}
      }
}catch(e){}
      try {
o421.o624 = ((o70 & 0x08) == 0x08);
}catch(e){}
      try {
o421.o155[0xFF17] = o70;
}catch(e){}
      try {
o421.o763();
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x18] = this.o391[0xFF18] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
if (o421.o450) {
      try {
o421.o746();
}catch(e){}
      try {
o421.o628 = (o421.o628 & 0x700) | o70;
}catch(e){}
      try {
o421.o620 = (0x800 - o421.o628) << 2;
}catch(e){}
      try {
o421.o155[0xFF18] = o70;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x19] = this.o391[0xFF19] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
if (o421.o450) {
      try {
o421.o746();
}catch(e){}
      try {
if (o70 > 0x7F) {
        //Reload 0xFF17:
        var o928 = o421.o155[0xFF17];
        try {
o421.o623 = o928 >> 4;
}catch(e){}
        try {
o421.o728();
}catch(e){}
        try {
o421.o626 = (o928 & 0x7) - 1;
}catch(e){}
        try {
if (o421.o622 == 0) {
          try {
o421.o622 = 0x40;
}catch(e){}
        }
}catch(e){}
        try {
if ((o70 & 0x40) == 0x40) {
          try {
o421.o155[0xFF26] |= 0x2;
}catch(e){}
        }
}catch(e){}
      }
}catch(e){}
      try {
o421.o627 = ((o70 & 0x40) == 0x0);
}catch(e){}
      try {
o421.o628 = ((o70 & 0x7) << 8) | (o421.o628 & 0xFF);
}catch(e){}
      try {
o421.o620 = (0x800 - o421.o628) << 2;
}catch(e){}
      try {
o421.o155[0xFF19] = o70 & 0x40;
}catch(e){}
      try {
o421.o751();
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x1A] = this.o391[0xFF1A] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
if (o421.o450) {
      try {
o421.o746();
}catch(e){}
      try {
if (!o421.o629 && o70 >= 0x80) {
        try {
o421.o659 = 0;
}catch(e){}
        try {
o421.o758();
}catch(e){}
      }
}catch(e){}
      try {
o421.o629 = (o70 > 0x7F);
}catch(e){}
      try {
if (o421.o629 && o421.o155[0xFF1A] > 0x7F && !o421.o633) {
        try {
o421.o155[0xFF26] |= 0x4;
}catch(e){}
      }
}catch(e){}
      try {
o421.o155[0xFF1A] = o70 & 0x80;
}catch(e){}
      //parentObj.channel3EnableCheck();
    }
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x1B] = this.o391[0xFF1B] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
if (o421.o450 || !o421.o400) {
      try {
if (o421.o450) {
        try {
o421.o746();
}catch(e){}
      }
}catch(e){}
      try {
o421.o630 = 0x100 - o70;
}catch(e){}
      try {
o421.o155[0xFF1B] = o70;
}catch(e){}
      try {
o421.o752();
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x1C] = this.o391[0xFF1C] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
if (o421.o450) {
      try {
o421.o746();
}catch(e){}
      try {
o70 &= 0x60;
}catch(e){}
      try {
o421.o155[0xFF1C] = o70;
}catch(e){}
      try {
o421.o631 = (o70 == 0) ? 4 : ((o70 >> 5) - 1);
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x1D] = this.o391[0xFF1D] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
if (o421.o450) {
      try {
o421.o746();
}catch(e){}
      try {
o421.o632 = (o421.o632 & 0x700) | o70;
}catch(e){}
      try {
o421.o658 = (0x800 - o421.o632) << 1;
}catch(e){}
      try {
o421.o155[0xFF1D] = o70;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x1E] = this.o391[0xFF1E] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
if (o421.o450) {
      try {
o421.o746();
}catch(e){}
      try {
if (o70 > 0x7F) {
        try {
if (o421.o630 == 0) {
          try {
o421.o630 = 0x100;
}catch(e){}
        }
}catch(e){}
        try {
o421.o659 = 0;
}catch(e){}
        try {
if ((o70 & 0x40) == 0x40) {
          try {
o421.o155[0xFF26] |= 0x4;
}catch(e){}
        }
}catch(e){}
      }
}catch(e){}
      try {
o421.o633 = ((o70 & 0x40) == 0x0);
}catch(e){}
      try {
o421.o632 = ((o70 & 0x7) << 8) | (o421.o632 & 0xFF);
}catch(e){}
      try {
o421.o658 = (0x800 - o421.o632) << 1;
}catch(e){}
      try {
o421.o155[0xFF1E] = o70 & 0x40;
}catch(e){}
      try {
o421.o752();
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x20] = this.o391[0xFF20] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
if (o421.o450 || !o421.o400) {
      try {
if (o421.o450) {
        try {
o421.o746();
}catch(e){}
      }
}catch(e){}
      try {
o421.o636 = 0x40 - (o70 & 0x3F);
}catch(e){}
      try {
o421.o155[0xFF20] = o70 | 0xC0;
}catch(e){}
      try {
o421.o753();
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x21] = this.o391[0xFF21] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
if (o421.o450) {
      try {
o421.o746();
}catch(e){}
      try {
if (o421.o651 && o421.o640 == 0) {
        //Zombie Volume PAPU Bug:
        try {
if (((o421.o155[0xFF21] ^ o70) & 0x8) == 0x8) {
          try {
if ((o421.o155[0xFF21] & 0x8) == 0) {
            try {
if ((o421.o155[0xFF21] & 0x7) == 0x7) {
              try {
o421.o637 += 2;
}catch(e){}
            }
            else {
              try {
++o421.o637;
}catch(e){}
            }
}catch(e){}
          }
}catch(e){}
          try {
o421.o637 = (16 - o421.o637) & 0xF;
}catch(e){}
        }
        else try {
if ((o421.o155[0xFF21] & 0xF) == 0x8) {
          try {
o421.o637 = (1 + o421.o637) & 0xF;
}catch(e){}
        }
}catch(e){}
}catch(e){}
        try {
o421.o638 = o421.o637 << o421.o670;
}catch(e){}
      }
}catch(e){}
      try {
o421.o639 = ((o70 & 0x08) == 0x08);
}catch(e){}
      try {
o421.o155[0xFF21] = o70;
}catch(e){}
      try {
o421.o755();
}catch(e){}
      try {
o421.o766();
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x22] = this.o391[0xFF22] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
if (o421.o450) {
      try {
o421.o746();
}catch(e){}
      try {
o421.o634 = Math.o290((o70 & 0x7) << 4, 8) << (o70 >> 4);
}catch(e){}
      var o929 = (o70 & 0x8);
      try {
if ((o929 == 0x8 && o421.o643 == 0x7FFF) || (o929 == 0 && o421.o643 == 0x7F)) {
        try {
o421.o635 = 0;
}catch(e){}
        try {
o421.o643 = (o929 == 0x8) ? 0x7F : 0x7FFF;
}catch(e){}
        try {
o421.o670 = (o929 == 0x8) ? 7 : 15;
}catch(e){}
        try {
o421.o638 = o421.o637 << o421.o670;
}catch(e){}
        try {
o421.o448 = (o929 == 0x8) ? o421.o447 : o421.o446;
}catch(e){}
      }
}catch(e){}
      try {
o421.o155[0xFF22] = o70;
}catch(e){}
      try {
o421.o755();
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x23] = this.o391[0xFF23] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
if (o421.o450) {
      try {
o421.o746();
}catch(e){}
      try {
o421.o155[0xFF23] = o70;
}catch(e){}
      try {
o421.o642 = ((o70 & 0x40) == 0x0);
}catch(e){}
      try {
if (o70 > 0x7F) {
        var o930 = o421.o155[0xFF21];
        try {
o421.o637 = o930 >> 4;
}catch(e){}
        try {
o421.o638 = o421.o637 << o421.o670;
}catch(e){}
        try {
o421.o641 = (o930 & 0x7) - 1;
}catch(e){}
        try {
if (o421.o636 == 0) {
          try {
o421.o636 = 0x40;
}catch(e){}
        }
}catch(e){}
        try {
if ((o70 & 0x40) == 0x40) {
          try {
o421.o155[0xFF26] |= 0x8;
}catch(e){}
        }
}catch(e){}
      }
}catch(e){}
      try {
o421.o753();
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x24] = this.o391[0xFF24] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
if (o421.o450 && o421.o155[0xFF24] != o70) {
      try {
o421.o746();
}catch(e){}
      try {
o421.o155[0xFF24] = o70;
}catch(e){}
      try {
o421.o452 = ((o70 >> 4) & 0x07) + 1;
}catch(e){}
      try {
o421.o453 = (o70 & 0x07) + 1;
}catch(e){}
      try {
o421.o761();
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x25] = this.o391[0xFF25] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
if (o421.o450 && o421.o155[0xFF25] != o70) {
      try {
o421.o746();
}catch(e){}
      try {
o421.o155[0xFF25] = o70;
}catch(e){}
      try {
o421.o458 = ((o70 & 0x01) == 0x01);
}catch(e){}
      try {
o421.o459 = ((o70 & 0x02) == 0x02);
}catch(e){}
      try {
o421.o460 = ((o70 & 0x04) == 0x04);
}catch(e){}
      try {
o421.o461 = ((o70 & 0x08) == 0x08);
}catch(e){}
      try {
o421.o454 = ((o70 & 0x10) == 0x10);
}catch(e){}
      try {
o421.o455 = ((o70 & 0x20) == 0x20);
}catch(e){}
      try {
o421.o456 = ((o70 & 0x40) == 0x40);
}catch(e){}
      try {
o421.o457 = (o70 > 0x7F);
}catch(e){}
      try {
o421.o727();
}catch(e){}
      try {
o421.o728();
}catch(e){}
      try {
o421.o729();
}catch(e){}
      try {
o421.o730();
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x26] = this.o391[0xFF26] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
o421.o746();
}catch(e){}
    try {
if (!o421.o450 && o70 > 0x7F) {
      try {
o421.o155[0xFF26] = 0x80;
}catch(e){}
      try {
o421.o450 = true;
}catch(e){}
      try {
o421.o449();
}catch(e){}
    }
    else try {
if (o421.o450 && o70 < 0x80) {
      try {
o421.o155[0xFF26] = 0;
}catch(e){}
      try {
o421.o450 = false;
}catch(e){}
      //GBDev wiki says the registers are written with zeros on power off:
      try {
for (var index = 0xFF10; index < 0xFF26; index++) {
        try {
o421.o391[index](o421, index, 0);
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
}catch(e){}
  }
}catch(e){}
  //0xFF27 to 0xFF2F don't do anything...
  try {
this.o393[0x27] = this.o391[0xFF27] = this.o902;
}catch(e){}
  try {
this.o393[0x28] = this.o391[0xFF28] = this.o902;
}catch(e){}
  try {
this.o393[0x29] = this.o391[0xFF29] = this.o902;
}catch(e){}
  try {
this.o393[0x2A] = this.o391[0xFF2A] = this.o902;
}catch(e){}
  try {
this.o393[0x2B] = this.o391[0xFF2B] = this.o902;
}catch(e){}
  try {
this.o393[0x2C] = this.o391[0xFF2C] = this.o902;
}catch(e){}
  try {
this.o393[0x2D] = this.o391[0xFF2D] = this.o902;
}catch(e){}
  try {
this.o393[0x2E] = this.o391[0xFF2E] = this.o902;
}catch(e){}
  try {
this.o393[0x2F] = this.o391[0xFF2F] = this.o902;
}catch(e){}
  //WAVE PCM RAM:
  try {
this.o393[0x30] = this.o391[0xFF30] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
o421.o767(0, o70);
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x31] = this.o391[0xFF31] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
o421.o767(0x1, o70);
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x32] = this.o391[0xFF32] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
o421.o767(0x2, o70);
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x33] = this.o391[0xFF33] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
o421.o767(0x3, o70);
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x34] = this.o391[0xFF34] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
o421.o767(0x4, o70);
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x35] = this.o391[0xFF35] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
o421.o767(0x5, o70);
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x36] = this.o391[0xFF36] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
o421.o767(0x6, o70);
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x37] = this.o391[0xFF37] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
o421.o767(0x7, o70);
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x38] = this.o391[0xFF38] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
o421.o767(0x8, o70);
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x39] = this.o391[0xFF39] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
o421.o767(0x9, o70);
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x3A] = this.o391[0xFF3A] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
o421.o767(0xA, o70);
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x3B] = this.o391[0xFF3B] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
o421.o767(0xB, o70);
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x3C] = this.o391[0xFF3C] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
o421.o767(0xC, o70);
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x3D] = this.o391[0xFF3D] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
o421.o767(0xD, o70);
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x3E] = this.o391[0xFF3E] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
o421.o767(0xE, o70);
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x3F] = this.o391[0xFF3F] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
o421.o767(0xF, o70);
}catch(e){}
  }
}catch(e){}
  //SCY
  try {
this.o393[0x42] = this.o391[0xFF42] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
if (o421.o524 != o70) {
      try {
o421.o839();
}catch(e){}
      try {
o421.o524 = o70;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  //SCX
  try {
this.o393[0x43] = this.o391[0xFF43] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
if (o421.o523 != o70) {
      try {
o421.o839();
}catch(e){}
      try {
o421.o523 = o70;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  //LY
  try {
this.o393[0x44] = this.o391[0xFF44] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    //Read Only:
    try {
if (o421.o418) {
      //Gambatte says to do this:
      try {
o421.o412 = 2;
}catch(e){}
      try {
o421.o537 = -1;
}catch(e){}
      try {
o421.o505 = o421.o539 = o421.o504 = o421.o503 = o421.o490 = o421.o411 = o421.o502 = o421.o155[0xFF44] = 0;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  //LYC
  try {
this.o393[0x45] = this.o391[0xFF45] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
if (o421.o155[0xFF45] != o70) {
      try {
o421.o155[0xFF45] = o70;
}catch(e){}
      try {
if (o421.o418) {
        try {
o421.o789();
}catch(e){}  //Get the compare of the first scan line.
      }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  //WY
  try {
this.o393[0x4A] = this.o391[0xFF4A] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
if (o421.o533 != o70) {
      try {
o421.o839();
}catch(e){}
      try {
o421.o533 = o70;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  //WX
  try {
this.o393[0x4B] = this.o391[0xFF4B] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
if (o421.o155[0xFF4B] != o70) {
      try {
o421.o839();
}catch(e){}
      try {
o421.o155[0xFF4B] = o70;
}catch(e){}
      try {
o421.o534 = o70 - 7;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x72] = this.o391[0xFF72] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
o421.o155[0xFF72] = o70;
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x73] = this.o391[0xFF73] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
o421.o155[0xFF73] = o70;
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x75] = this.o391[0xFF75] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
o421.o155[0xFF75] = o70;
}catch(e){}
  }
}catch(e){}
  try {
this.o393[0x76] = this.o391[0xFF76] = this.o902;
}catch(e){}
  try {
this.o393[0x77] = this.o391[0xFF77] = this.o902;
}catch(e){}
  //IE (Interrupt Enable)
  try {
this.o393[0xFF] = this.o391[0xFFFF] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
o421.o384 = o70;
}catch(e){}
    try {
o421.o664();
}catch(e){}
  }
}catch(e){}
  try {
this.o931();
}catch(e){}
  try {
this.o696();
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o931 = function () {try {
"use strict";
}catch(e){}
  try {
if (this.o400) {
    //GameBoy Color Specific I/O:
    //SC (Serial Transfer Control Register)
    try {
this.o393[0x2] = this.o391[0xFF02] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
      try {
if (((o70 & 0x1) == 0x1)) {
        //Internal clock:
        try {
o421.o155[0xFF02] = (o70 & 0x7F);
}catch(e){}
        try {
o421.o494 = ((o70 & 0x2) == 0) ? 4096 : 128;
}catch(e){}  //Set the Serial IRQ counter.
        try {
o421.o495 = o421.o496 = ((o70 & 0x2) == 0) ? 512 : 16;
}catch(e){}  //Set the transfer data shift counter.
      }
      else {
        //External clock:
        try {
o421.o155[0xFF02] = o70;
}catch(e){}
        try {
o421.o495 = o421.o496 = o421.o494 = 0;
}catch(e){}  //Zero the timers, since we're emulating as if nothing is connected.
      }
}catch(e){}
    }
}catch(e){}
    try {
this.o393[0x40] = this.o391[0xFF40] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
      try {
if (o421.o155[0xFF40] != o70) {
        try {
o421.o839();
}catch(e){}
        var o581 = (o70 > 0x7F);
        try {
if (o581 != o421.o418) {
          //When the display mode changes...
          try {
o421.o418 = o581;
}catch(e){}
          try {
o421.o155[0xFF41] &= 0x78;
}catch(e){}
          try {
o421.o537 = -1;
}catch(e){}
          try {
o421.o505 = o421.o539 = o421.o504 = o421.o503 = o421.o411 = o421.o490 = o421.o502 = o421.o155[0xFF44] = 0;
}catch(e){}
          try {
if (o421.o418) {
            try {
o421.o412 = 2;
}catch(e){}
            try {
o421.o789();
}catch(e){}  //Get the compare of the first scan line.
            try {
o421.o422 = o421.o419;
}catch(e){}
          }
          else {
            try {
o421.o412 = 0;
}catch(e){}
            try {
o421.o422 = o421.o420;
}catch(e){}
            try {
o421.o793();
}catch(e){}
          }
}catch(e){}
          try {
o421.o383 &= 0xFD;
}catch(e){}
        }
}catch(e){}
        try {
o421.o530 = ((o70 & 0x40) == 0x40) ? 0x400 : 0;
}catch(e){}
        try {
o421.o525 = ((o70 & 0x20) == 0x20);
}catch(e){}
        try {
o421.o532 = ((o70 & 0x10) == 0x10) ? 0 : 0x80;
}catch(e){}
        try {
o421.o531 = ((o70 & 0x08) == 0x08) ? 0x400 : 0;
}catch(e){}
        try {
o421.o527 = ((o70 & 0x04) == 0);
}catch(e){}
        try {
o421.o526 = ((o70 & 0x02) == 0x02);
}catch(e){}
        try {
o421.o529 = ((o70 & 0x01) == 0x01);
}catch(e){}
        try {
o421.o819();
}catch(e){}  //Special case the priority flagging as an optimization.
        try {
o421.o155[0xFF40] = o70;
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
    try {
this.o393[0x41] = this.o391[0xFF41] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
      try {
o421.o414 = ((o70 & 0x40) == 0x40);
}catch(e){}
      try {
o421.o415 = ((o70 & 0x20) == 0x20);
}catch(e){}
      try {
o421.o416 = ((o70 & 0x10) == 0x10);
}catch(e){}
      try {
o421.o417 = ((o70 & 0x08) == 0x08);
}catch(e){}
      try {
o421.o155[0xFF41] = o70 & 0x78;
}catch(e){}
    }
}catch(e){}
    try {
this.o393[0x46] = this.o391[0xFF46] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
      try {
o421.o155[0xFF46] = o70;
}catch(e){}
      try {
if (o70 < 0xE0) {
        try {
o70 <<= 8;
}catch(e){}
        try {
o768 = 0xFE00;
}catch(e){}
        var o932 = o421.o412;
        try {
o421.o412 = 0;
}catch(e){}
        var o933 = 0;
        try {
do {
          try {
o933 = o421.o390[o70](o421, o70++);
}catch(e){}
          try {
if (o933 != o421.o155[o768]) {
            //JIT the graphics render queue:
            try {
o421.o412 = o932;
}catch(e){}
            try {
o421.o873();
}catch(e){}
            try {
o421.o412 = 0;
}catch(e){}
            try {
o421.o155[o768++] = o933;
}catch(e){}
            try {
break;
}catch(e){}
          }
}catch(e){}
        } while (++o768 < 0xFEA0);
}catch(e){}
        try {
if (o768 < 0xFEA0) {
          try {
do {
            try {
o421.o155[o768++] = o421.o390[o70](o421, o70++);
}catch(e){}
            try {
o421.o155[o768++] = o421.o390[o70](o421, o70++);
}catch(e){}
            try {
o421.o155[o768++] = o421.o390[o70](o421, o70++);
}catch(e){}
            try {
o421.o155[o768++] = o421.o390[o70](o421, o70++);
}catch(e){}
          } while (o768 < 0xFEA0);
}catch(e){}
        }
}catch(e){}
        try {
o421.o412 = o932;
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
    //KEY1
    try {
this.o393[0x4D] = this.o391[0xFF4D] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
      try {
o421.o155[0xFF4D] = (o70 & 0x7F) | (o421.o155[0xFF4D] & 0x80);
}catch(e){}
    }
}catch(e){}
    try {
this.o393[0x4F] = this.o391[0xFF4F] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
      try {
o421.o522 = o70 & 0x01;
}catch(e){}
      try {
if (o421.o522 > 0) {
        try {
o421.o542 = o421.o541;
}catch(e){}
      }
      else {
        try {
o421.o542 = o421.o540;
}catch(e){}
      }
}catch(e){}
      //Only writable by GBC.
    }
}catch(e){}
    try {
this.o393[0x51] = this.o391[0xFF51] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
      try {
if (!o421.o385) {
        try {
o421.o155[0xFF51] = o70;
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
    try {
this.o393[0x52] = this.o391[0xFF52] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
      try {
if (!o421.o385) {
        try {
o421.o155[0xFF52] = o70 & 0xF0;
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
    try {
this.o393[0x53] = this.o391[0xFF53] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
      try {
if (!o421.o385) {
        try {
o421.o155[0xFF53] = o70 & 0x1F;
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
    try {
this.o393[0x54] = this.o391[0xFF54] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
      try {
if (!o421.o385) {
        try {
o421.o155[0xFF54] = o70 & 0xF0;
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
    try {
this.o393[0x55] = this.o391[0xFF55] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
      try {
if (!o421.o385) {
        try {
if ((o70 & 0x80) == 0) {
          //DMA
          try {
o421.o795((o70 & 0x7F) + 1);
}catch(e){}
          try {
o421.o155[0xFF55] = 0xFF;
}catch(e){}  //Transfer completed.
        }
        else {
          //H-Blank DMA
          try {
o421.o385 = true;
}catch(e){}
          try {
o421.o155[0xFF55] = o70 & 0x7F;
}catch(e){}
        }
}catch(e){}
      }
      else try {
if ((o70 & 0x80) == 0) {
        //Stop H-Blank DMA
        try {
o421.o385 = false;
}catch(e){}
        try {
o421.o155[0xFF55] |= 0x80;
}catch(e){}
      }
      else {
        try {
o421.o155[0xFF55] = o70 & 0x7F;
}catch(e){}
      }
}catch(e){}
}catch(e){}
    }
}catch(e){}
    try {
this.o393[0x68] = this.o391[0xFF68] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
      try {
o421.o155[0xFF69] = o421.o548[o70 & 0x3F];
}catch(e){}
      try {
o421.o155[0xFF68] = o70;
}catch(e){}
    }
}catch(e){}
    try {
this.o393[0x69] = this.o391[0xFF69] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
      try {
o421.o838(o421.o155[0xFF68] & 0x3F, o70);
}catch(e){}
      try {
if (o421.o155[0xFF68] > 0x7F) { // high bit = autoincrement
        var next = ((o421.o155[0xFF68] + 1) & 0x3F);
        try {
o421.o155[0xFF68] = (next | 0x80);
}catch(e){}
        try {
o421.o155[0xFF69] = o421.o548[next];
}catch(e){}
      }
      else {
        try {
o421.o155[0xFF69] = o70;
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
    try {
this.o393[0x6A] = this.o391[0xFF6A] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
      try {
o421.o155[0xFF6B] = o421.o547[o70 & 0x3F];
}catch(e){}
      try {
o421.o155[0xFF6A] = o70;
}catch(e){}
    }
}catch(e){}
    try {
this.o393[0x6B] = this.o391[0xFF6B] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
      try {
o421.o840(o421.o155[0xFF6A] & 0x3F, o70);
}catch(e){}
      try {
if (o421.o155[0xFF6A] > 0x7F) { // high bit = autoincrement
        var next = ((o421.o155[0xFF6A] + 1) & 0x3F);
        try {
o421.o155[0xFF6A] = (next | 0x80);
}catch(e){}
        try {
o421.o155[0xFF6B] = o421.o547[next];
}catch(e){}
      }
      else {
        try {
o421.o155[0xFF6B] = o70;
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
    //SVBK
    try {
this.o393[0x70] = this.o391[0xFF70] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
      var o934 = (o421.o155[0xFF51] << 8) | o421.o155[0xFF52];  //Cannot change the RAM bank while WRAM is the source of a running HDMA.
      try {
if (!o421.o385 || o934 < 0xD000 || o934 >= 0xE000) {
        try {
o421.o401 = Math.o290(o70 & 0x07, 1);
}catch(e){}  //Bank range is from 1-7
        try {
o421.o402 = ((o421.o401 - 1) << 12) - 0xD000;
}catch(e){}
        try {
o421.o403 = o421.o402 - 0x2000;
}catch(e){}
      }
}catch(e){}
      try {
o421.o155[0xFF70] = o70;
}catch(e){}  //Bit 6 cannot be written to.
    }
}catch(e){}
    try {
this.o393[0x74] = this.o391[0xFF74] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
      try {
o421.o155[0xFF74] = o70;
}catch(e){}
    }
}catch(e){}
  }
  else {
    //Fill in the GameBoy Color I/O registers as normal RAM for GameBoy compatibility:
    //SC (Serial Transfer Control Register)
    try {
this.o393[0x2] = this.o391[0xFF02] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
      try {
if (((o70 & 0x1) == 0x1)) {
        //Internal clock:
        try {
o421.o155[0xFF02] = (o70 & 0x7F);
}catch(e){}
        try {
o421.o494 = 4096;
}catch(e){}  //Set the Serial IRQ counter.
        try {
o421.o495 = o421.o496 = 512;
}catch(e){}  //Set the transfer data shift counter.
      }
      else {
        //External clock:
        try {
o421.o155[0xFF02] = o70;
}catch(e){}
        try {
o421.o495 = o421.o496 = o421.o494 = 0;
}catch(e){}  //Zero the timers, since we're emulating as if nothing is connected.
      }
}catch(e){}
    }
}catch(e){}
    try {
this.o393[0x40] = this.o391[0xFF40] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
      try {
if (o421.o155[0xFF40] != o70) {
        try {
o421.o839();
}catch(e){}
        var o581 = (o70 > 0x7F);
        try {
if (o581 != o421.o418) {
          //When the display mode changes...
          try {
o421.o418 = o581;
}catch(e){}
          try {
o421.o155[0xFF41] &= 0x78;
}catch(e){}
          try {
o421.o537 = -1;
}catch(e){}
          try {
o421.o505 = o421.o539 = o421.o504 = o421.o503 = o421.o411 = o421.o490 = o421.o502 = o421.o155[0xFF44] = 0;
}catch(e){}
          try {
if (o421.o418) {
            try {
o421.o412 = 2;
}catch(e){}
            try {
o421.o789();
}catch(e){}  //Get the compare of the first scan line.
            try {
o421.o422 = o421.o419;
}catch(e){}
          }
          else {
            try {
o421.o412 = 0;
}catch(e){}
            try {
o421.o422 = o421.o420;
}catch(e){}
            try {
o421.o793();
}catch(e){}
          }
}catch(e){}
          try {
o421.o383 &= 0xFD;
}catch(e){}
        }
}catch(e){}
        try {
o421.o530 = ((o70 & 0x40) == 0x40) ? 0x400 : 0;
}catch(e){}
        try {
o421.o525 = (o70 & 0x20) == 0x20;
}catch(e){}
        try {
o421.o532 = ((o70 & 0x10) == 0x10) ? 0 : 0x80;
}catch(e){}
        try {
o421.o531 = ((o70 & 0x08) == 0x08) ? 0x400 : 0;
}catch(e){}
        try {
o421.o527 = ((o70 & 0x04) == 0);
}catch(e){}
        try {
o421.o526 = (o70 & 0x02) == 0x02;
}catch(e){}
        try {
o421.o528 = ((o70 & 0x01) == 0x01);
}catch(e){}
        try {
o421.o155[0xFF40] = o70;
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
    try {
this.o393[0x41] = this.o391[0xFF41] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
      try {
o421.o414 = ((o70 & 0x40) == 0x40);
}catch(e){}
      try {
o421.o415 = ((o70 & 0x20) == 0x20);
}catch(e){}
      try {
o421.o416 = ((o70 & 0x10) == 0x10);
}catch(e){}
      try {
o421.o417 = ((o70 & 0x08) == 0x08);
}catch(e){}
      try {
o421.o155[0xFF41] = o70 & 0x78;
}catch(e){}
      try {
if ((!o421.o376 || !o421.o377) && o421.o418 && o421.o412 < 2) {
        try {
o421.o383 |= 0x2;
}catch(e){}
        try {
o421.o664();
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
    try {
this.o393[0x46] = this.o391[0xFF46] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
      try {
o421.o155[0xFF46] = o70;
}catch(e){}
      try {
if (o70 > 0x7F && o70 < 0xE0) {  //DMG cannot DMA from the ROM banks.
        try {
o70 <<= 8;
}catch(e){}
        try {
o768 = 0xFE00;
}catch(e){}
        var o932 = o421.o412;
        try {
o421.o412 = 0;
}catch(e){}
        var o933 = 0;
        try {
do {
          try {
o933 = o421.o390[o70](o421, o70++);
}catch(e){}
          try {
if (o933 != o421.o155[o768]) {
            //JIT the graphics render queue:
            try {
o421.o412 = o932;
}catch(e){}
            try {
o421.o873();
}catch(e){}
            try {
o421.o412 = 0;
}catch(e){}
            try {
o421.o155[o768++] = o933;
}catch(e){}
            try {
break;
}catch(e){}
          }
}catch(e){}
        } while (++o768 < 0xFEA0);
}catch(e){}
        try {
if (o768 < 0xFEA0) {
          try {
do {
            try {
o421.o155[o768++] = o421.o390[o70](o421, o70++);
}catch(e){}
            try {
o421.o155[o768++] = o421.o390[o70](o421, o70++);
}catch(e){}
            try {
o421.o155[o768++] = o421.o390[o70](o421, o70++);
}catch(e){}
            try {
o421.o155[o768++] = o421.o390[o70](o421, o70++);
}catch(e){}
          } while (o768 < 0xFEA0);
}catch(e){}
        }
}catch(e){}
        try {
o421.o412 = o932;
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
    try {
this.o393[0x47] = this.o391[0xFF47] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
      try {
if (o421.o155[0xFF47] != o70) {
        try {
o421.o839();
}catch(e){}
        try {
o421.o557(o70);
}catch(e){}
        try {
o421.o155[0xFF47] = o70;
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
    try {
this.o393[0x48] = this.o391[0xFF48] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
      try {
if (o421.o155[0xFF48] != o70) {
        try {
o421.o839();
}catch(e){}
        try {
o421.o559(0, o70);
}catch(e){}
        try {
o421.o155[0xFF48] = o70;
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
    try {
this.o393[0x49] = this.o391[0xFF49] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
      try {
if (o421.o155[0xFF49] != o70) {
        try {
o421.o839();
}catch(e){}
        try {
o421.o559(4, o70);
}catch(e){}
        try {
o421.o155[0xFF49] = o70;
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
    try {
this.o393[0x4D] = this.o391[0xFF4D] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
      try {
o421.o155[0xFF4D] = o70;
}catch(e){}
    }
}catch(e){}
    try {
this.o393[0x4F] = this.o391[0xFF4F] = this.o902;
}catch(e){}  //Not writable in DMG mode.
    try {
this.o393[0x55] = this.o391[0xFF55] = this.o902;
}catch(e){}
    try {
this.o393[0x68] = this.o391[0xFF68] = this.o902;
}catch(e){}
    try {
this.o393[0x69] = this.o391[0xFF69] = this.o902;
}catch(e){}
    try {
this.o393[0x6A] = this.o391[0xFF6A] = this.o902;
}catch(e){}
    try {
this.o393[0x6B] = this.o391[0xFF6B] = this.o902;
}catch(e){}
    try {
this.o393[0x6C] = this.o391[0xFF6C] = this.o902;
}catch(e){}
    try {
this.o393[0x70] = this.o391[0xFF70] = this.o902;
}catch(e){}
    try {
this.o393[0x74] = this.o391[0xFF74] = this.o902;
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o696 = function () {try {
"use strict";
}catch(e){}
  //Boot I/O Registers:
  try {
if (this.o375) {
    try {
this.o393[0x50] = this.o391[0xFF50] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
      try {
o113("Boot ROM reads blocked: Bootstrap process has ended.", 0);
}catch(e){}
      try {
o421.o375 = false;
}catch(e){}
      try {
o421.o694();
}catch(e){}      //Fill in the boot ROM ranges with ROM  bank 0 ROM ranges
      try {
o421.o155[0xFF50] = o70;
}catch(e){}  //Bits are sustained in memory?
    }
}catch(e){}
    try {
if (this.o400) {
      try {
this.o393[0x6C] = this.o391[0xFF6C] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
        try {
if (o421.o375) {
          try {
o421.o400 = ((o70 & 0x1) == 0);
}catch(e){}
          //Exception to the GBC identifying code:
          try {
if (o421.name + o421.o408 + o421.o153[0x143] == "Game and Watch 50") {
            try {
o421.o400 = true;
}catch(e){}
            try {
o113("Created a boot exception for Game and Watch Gallery 2 (GBC ID byte is wrong on the cartridge).", 1);
}catch(e){}
          }
}catch(e){}
          try {
o113("Booted to GBC Mode: " + o421.o400, 0);
}catch(e){}
        }
}catch(e){}
        try {
o421.o155[0xFF6C] = o70;
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
  else {
    //Lockout the ROMs from accessing the BOOT ROM control register:
    try {
this.o393[0x50] = this.o391[0xFF50] = this.o902;
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
//Helper Functions
try {
o360.prototype.o662 = function (o935, o936) {try {
"use strict";
}catch(e){}
  try {
try {
    // The following line was modified for benchmarking:
    try {
if (o683[5] || (o936 != "float32" && o96.o937 && this.o358())) {
      try {
return o935;
}catch(e){}
    }
}catch(e){}
    try {
if (!o935 || !o935.length) {
      try {
return [];
}catch(e){}
    }
}catch(e){}
    var length = o935.length;
    try {
switch (o936) {
      case "uint8":
        var o938 = new Uint8Array(length);
        try {
break;
}catch(e){}
      case "int8":
        var o938 = new Int8Array(length);
        try {
break;
}catch(e){}
      case "int32":
        var o938 = new Int32Array(length);
        try {
break;
}catch(e){}
      case "float32":
        var o938 = new Float32Array(length);
    }
}catch(e){}
    try {
for (var index = 0; index < length; index++) {
      try {
o938[index] = o935[index];
}catch(e){}
    }
}catch(e){}
    try {
return o938;
}catch(e){}
  }
  catch (o68) {
    try {
o113("Could not convert an array to a typed array: " + o68.o114, 1);
}catch(e){}
    try {
return o935;
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o152 = function (o935) {try {
"use strict";
}catch(e){}
  try {
try {
    try {
if (!o935 || !o935.length) {
      try {
return [];
}catch(e){}
    }
}catch(e){}
    var o939 = [];
    try {
for (var index = 0; index < o935.length; ++index) {
      try {
o939[index] = o935[index];
}catch(e){}
    }
}catch(e){}
    try {
return o939;
}catch(e){}
  }
  catch (o68) {
    try {
o113("Conversion from a typed array failed: " + o68.o114, 1);
}catch(e){}
    try {
return o935;
}catch(e){}
  }
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o676 = function (length, o940, o941) {try {
"use strict";
}catch(e){}
  try {
try {
    try {
if (o683[5]) {
      try {
throw(new Error(""));
}catch(e){}
    }
}catch(e){}
    // The following line was modified for benchmarking:
    try {
if (o941 != "float32" && o96.o937 && this.o358()) {
      //Caught Opera breaking typed array math:
      try {
throw(new Error(""));
}catch(e){}
    }
}catch(e){}
    try {
switch (o941) {
      case "int8":
        var o942 = new Int8Array(length);
        try {
break;
}catch(e){}
      case "uint8":
        var o942 = new Uint8Array(length);
        try {
break;
}catch(e){}
      case "int32":
        var o942 = new Int32Array(length);
        try {
break;
}catch(e){}
      case "float32":
        var o942 = new Float32Array(length);
    }
}catch(e){}
    try {
if (o940 != 0) {
      var index = 0;
      try {
while (index < length) {
        try {
o942[index++] = o940;
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
  catch (o68) {
    try {
o113("Could not convert an array to a typed array: " + o68.o114, 1);
}catch(e){}
    var o942 = [];
    var index = 0;
    try {
while (index < length) {
      try {
o942[index++] = o940;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
return o942;
}catch(e){}
}
}catch(e){}
try {
o360.prototype.o358 = function () {try {
"use strict";
}catch(e){}
  var o943 = new Uint8Array(1);
  try {
o943[0] = -1;
}catch(e){}
  try {
o943[0] >>= 0;
}catch(e){}
  try {
if (o943[0] != 0xFF) {
    try {
o113("Detected faulty math by your browser.", 2);
}catch(e){}
    try {
return true;
}catch(e){}
  }
  else {
    try {
return false;
}catch(e){}
  }
}catch(e){}
}
}catch(e){}

// End of js/GameBoyCore.js file.

// Start of js/GameBoyIO.js file.

try {
"use strict";
}catch(e){}
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
  try {
o944();
}catch(e){}
  try {
o945();
}catch(e){}  //If we are about to load a new game, then save the last one...
  try {
o90 = new o360(o361, o153);
}catch(e){}
  try {
o90.o698 = o946;
}catch(e){}
  try {
o90.o672 = o672;
}catch(e){}
  try {
o90.o73();
}catch(e){}
  try {
o12();
}catch(e){}
}
function o12() {
  try {
if (o947()) {
    try {
if (!o948()) {
      try {
o90.o380 &= 1;
}catch(e){}
      try {
o113("Starting the iterator.", 0);
}catch(e){}
      var o796 = o138();  // The line is changed for benchmarking.
      try {
o90.o500 = o796.o139();
}catch(e){}
      try {
o90.o501 = 0;
}catch(e){}
      // The following lines are commented out for benchmarking.
      // gbRunInterval = setInterval(function () {"use strict";
      //  if (!document.hidden && !document.msHidden && !document.mozHidden && !document.webkitHidden) {
      //    gameboy.run();
      // }
      // }, settings[6]);
    }
    else {
      try {
o113("The GameBoy core is already running.", 1);
}catch(e){}
    }
}catch(e){}
  }
  else {
    try {
o113("GameBoy core cannot run while it has not been initialized.", 1);
}catch(e){}
  }
}catch(e){}
}
function o593() {
  try {
if (o947()) {
    try {
if (o948()) {
      try {
o944();
}catch(e){}
    }
    else {
      try {
o113("GameBoy core has already been paused.", 1);
}catch(e){}
    }
}catch(e){}
  }
  else {
    try {
o113("GameBoy core cannot be paused while it has not been initialized.", 1);
}catch(e){}
  }
}catch(e){}
}
function o944() {
  try {
if (o947() && o948()) {
    try {
o949(o178);
}catch(e){}
    try {
o90.o380 |= 2;
}catch(e){}
    try {
o113("The previous emulation has been cleared.", 0);
}catch(e){}
  }
  else {
    try {
o113("No previous emulation was found to be cleared.", 0);
}catch(e){}
  }
}catch(e){}
}
function o950() {
  try {
if (o947()) {
    try {
try {
      var o951 = 0;
      try {
while (o952("FREEZE_" + o90.name + "_" + o951) != null) {
        try {
o951++;
}catch(e){}
      }
}catch(e){}
      try {
o953("FREEZE_" + o90.name + "_" + o951, o90.o603());
}catch(e){}
      try {
o113("Saved the current state as: FREEZE_" + o90.name + "_" + o951, 0);
}catch(e){}
    }
    catch (o68) {
      try {
o113("Could not save the current emulation state(\"" + o68.o114 + "\").", 2);
}catch(e){}
    }
}catch(e){}
  }
  else {
    try {
o113("GameBoy core cannot be saved while it has not been initialized.", 1);
}catch(e){}
  }
}catch(e){}
}
function o954() {
  try {
if (o947()) {
    try {
if (o90.o601) {
      try {
try {
        var o955 = o90.o600();
        try {
if (o955.length > 0) {
          try {
o113("Saving the SRAM...", 0);
}catch(e){}
          try {
if (o952("SRAM_" + o90.name) != null) {
            //Remove the outdated storage format save:
            try {
o113("Deleting the old SRAM save due to outdated format.", 0);
}catch(e){}
            try {
o956("SRAM_" + o90.name);
}catch(e){}
          }
}catch(e){}
          try {
o953("B64_SRAM_" + o90.name, o193(o955));
}catch(e){}
        }
        else {
          try {
o113("SRAM could not be saved because it was empty.", 1);
}catch(e){}
        }
}catch(e){}
      }
      catch (o68) {
        try {
o113("Could not save the current emulation state(\"" + o68.o114 + "\").", 2);
}catch(e){}
      }
}catch(e){}
    }
    else {
      try {
o113("Cannot save a game that does not have battery backed SRAM specified.", 1);
}catch(e){}
    }
}catch(e){}
    try {
o957();
}catch(e){}
  }
  else {
    try {
o113("GameBoy core cannot be saved while it has not been initialized.", 1);
}catch(e){}
  }
}catch(e){}
}
function o957() {  //Execute this when SRAM is being saved as well.
  try {
if (o947()) {
    try {
if (o90.o519) {
      try {
try {
        try {
o113("Saving the RTC...", 0);
}catch(e){}
        try {
o953("RTC_" + o90.name, o90.o602());
}catch(e){}
      }
      catch (o68) {
        try {
o113("Could not save the RTC of the current emulation state(\"" + o68.o114 + "\").", 2);
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
  else {
    try {
o113("GameBoy core cannot be saved while it has not been initialized.", 1);
}catch(e){}
  }
}catch(e){}
}
function o945() {
  try {
if (o947()) {
    try {
o113("Automatically saving the SRAM.", 0);
}catch(e){}
    try {
o954();
}catch(e){}
    try {
o957();
}catch(e){}
  }
}catch(e){}
}
function o946(o958) {
  try {
try {
    try {
if (o952("B64_SRAM_" + o958) != null) {
      try {
o113("Found a previous SRAM state (Will attempt to load).", 0);
}catch(e){}
      try {
return o196(o952("B64_SRAM_" + o958));
}catch(e){}
    }
    else try {
if (o952("SRAM_" + o958) != null) {
      try {
o113("Found a previous SRAM state (Will attempt to load).", 0);
}catch(e){}
      try {
return o952("SRAM_" + o958);
}catch(e){}
    }
    else {
      try {
o113("Could not find any previous SRAM copy for the current ROM.", 0);
}catch(e){}
    }
}catch(e){}
}catch(e){}
  }
  catch (o68) {
    try {
o113("Could not open the  SRAM of the saved emulation state.", 2);
}catch(e){}
  }
}catch(e){}
  try {
return [];
}catch(e){}
}
function o672(o958) {
  try {
try {
    try {
if (o952("RTC_" + o958) != null) {
      try {
o113("Found a previous RTC state (Will attempt to load).", 0);
}catch(e){}
      try {
return o952("RTC_" + o958);
}catch(e){}
    }
    else {
      try {
o113("Could not find any previous RTC copy for the current ROM.", 0);
}catch(e){}
    }
}catch(e){}
  }
  catch (o68) {
    try {
o113("Could not open the RTC data of the saved emulation state.", 2);
}catch(e){}
  }
}catch(e){}
  try {
return [];
}catch(e){}
}
function o959(o958, o361) {
  try {
try {
    try {
if (o952(o958) != null) {
      try {
try {
        try {
o944();
}catch(e){}
        try {
o113("Attempting to run a saved emulation state.", 0);
}catch(e){}
        try {
o90 = new o360(o361, "");
}catch(e){}
        try {
o90.o410 = o958;
}catch(e){}
        try {
o90.o660(o952(o958));
}catch(e){}
        try {
o12();
}catch(e){}
      }
      catch (o68) {
        try {
o29(o68.o114 + " file: " + o68.o711 + " line: " + o68.o712);
}catch(e){}
      }
}catch(e){}
    }
    else {
      try {
o113("Could not find the save state " + o958 + "\".", 2);
}catch(e){}
    }
}catch(e){}
  }
  catch (o68) {
    try {
o113("Could not open the saved emulation state.", 2);
}catch(e){}
  }
}catch(e){}
}
function o960(o961) {
  try {
o961 = o962(o961);
}catch(e){}
  try {
if (o961 && o961.o963) {
    try {
if (o961.o963.length > 0) {
      try {
for (var index = 0; index < o961.o963.length; ++index) {
        try {
o113("Importing blob \"" + o961.o963[index].o964 + "\"", 0);
}catch(e){}
        try {
if (o961.o963[index].o965) {
          try {
if (o961.o963[index].o964.substring(0, 5) == "SRAM_") {
            try {
o953("B64_" + o961.o963[index].o964, o181(o961.o963[index].o965));
}catch(e){}
          }
          else {
            try {
o953(o961.o963[index].o964, JSON.parse(o961.o963[index].o965));
}catch(e){}
          }
}catch(e){}
        }
        else try {
if (o961.o963[index].o964) {
          try {
o113("Save file imported had blob \"" + o961.o963[index].o964 + "\" with no blob data interpretable.", 2);
}catch(e){}
        }
        else {
          try {
o113("Blob chunk information missing completely.", 2);
}catch(e){}
        }
}catch(e){}
}catch(e){}
      }
}catch(e){}
    }
    else {
      try {
o113("Could not decode the imported file.", 2);
}catch(e){}
    }
}catch(e){}
  }
  else {
    try {
o113("Could not decode the imported file.", 2);
}catch(e){}
  }
}catch(e){}
}
function o966(o967, o968) {
  //Append the file format prefix:
  var o969 = "EMULATOR_DATA";
  var o970 = "GameBoy";
  //Figure out the length:
  var o971 = (o969.length + 4 + (1 + o970.length)) + ((1 + o967.length) + (4 + o968.length));
  //Append the total length in bytes:
  try {
o969 += o189(o971);
}catch(e){}
  //Append the console ID text's length:
  try {
o969 += o192(o970.length);
}catch(e){}
  //Append the console ID text:
  try {
o969 += o970;
}catch(e){}
  //Append the blob ID:
  try {
o969 += o192(o967.length);
}catch(e){}
  try {
o969 += o967;
}catch(e){}
  //Now append the save data:
  try {
o969 += o189(o968.length);
}catch(e){}
  try {
o969 += o968;
}catch(e){}
  try {
return o969;
}catch(e){}
}
function o972(o973) {
  var o970 = "GameBoy";
  //Figure out the initial length:
  var o971 = 13 + 4 + 1 + o970.length;
  //Append the console ID text's length:
  var o969 = o192(o970.length);
  //Append the console ID text:
  try {
o969 += o970;
}catch(e){}
  var o967 = "";
  var o968 = "";
  //Now append all the blobs:
  try {
for (var index = 0; index < o973.length; ++index) {
    try {
o967 = o973[index][0];
}catch(e){}
    try {
o968 = o973[index][1];
}catch(e){}
    //Append the blob ID:
    try {
o969 += o192(o967.length);
}catch(e){}
    try {
o969 += o967;
}catch(e){}
    //Now append the save data:
    try {
o969 += o189(o968.length);
}catch(e){}
    try {
o969 += o968;
}catch(e){}
    //Update the total length:
    try {
o971 += 1 + o967.length + 4 + o968.length;
}catch(e){}
  }
}catch(e){}
  //Now add the prefix:
  try {
o969 = "EMULATOR_DATA" + o189(o971) + o969;
}catch(e){}
  try {
return o969;
}catch(e){}
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
  try {
o974.o970 = null;
}catch(e){}
  var o975 = -1;
  try {
o974.o963 = [];
}catch(e){}
  try {
if (length > 17) {
    try {
if (o961.substring(0, 13) == "EMULATOR_DATA") {
      var length = Math.o279(((o961.charCodeAt(16) & 0xFF) << 24) | ((o961.charCodeAt(15) & 0xFF) << 16) | ((o961.charCodeAt(14) & 0xFF) << 8) | (o961.charCodeAt(13) & 0xFF), length);
      var o976 = o961.charCodeAt(17) & 0xFF;
      try {
if (length > 17 + o976) {
        try {
o974.o970 = o961.substring(18, 18 + o976);
}catch(e){}
        var o977 = 0;
        var o978 = 0;
        try {
for (var index = 18 + o976; index < length;) {
          try {
o977 = o961.charCodeAt(index++) & 0xFF;
}catch(e){}
          try {
if (index + o977 < length) {
            try {
o974.o963[++o975] = {};
}catch(e){}
            try {
o974.o963[o975].o964 = o961.substring(index, index + o977);
}catch(e){}
            try {
index += o977;
}catch(e){}
            try {
if (index + 4 < length) {
              try {
o978 = ((o961.charCodeAt(index + 3) & 0xFF) << 24) | ((o961.charCodeAt(index + 2) & 0xFF) << 16) | ((o961.charCodeAt(index + 1) & 0xFF) << 8) | (o961.charCodeAt(index) & 0xFF);
}catch(e){}
              try {
index += 4;
}catch(e){}
              try {
if (index + o978 <= length) {
                try {
o974.o963[o975].o965 =  o961.substring(index, index + o978);
}catch(e){}
                try {
index += o978;
}catch(e){}
              }
              else {
                try {
o113("Blob length check failed, blob determined to be incomplete.", 2);
}catch(e){}
                try {
break;
}catch(e){}
              }
}catch(e){}
            }
            else {
              try {
o113("Blob was incomplete, bailing out.", 2);
}catch(e){}
              try {
break;
}catch(e){}
            }
}catch(e){}
          }
          else {
            try {
o113("Blob was incomplete, bailing out.", 2);
}catch(e){}
            try {
break;
}catch(e){}
          }
}catch(e){}
        }
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
return o974;
}catch(e){}
}
function o979(key) {  //Maps a keyboard key to a gameboy key.
  //Order: Right, Left, Up, Down, A, B, Select, Start
  try {
for (var index = 0; index < o683[3].length; index++) {
    try {
if (o683[3][index] == key) {
      try {
return index;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
return -1;
}catch(e){}
}
function o947() {
  try {
return (typeof o90 == "object" && o90 != null);
}catch(e){}
}
function o948() {
  try {
return ((o90.o380 & 2) == 0);
}catch(e){}
}
function o980(o78) {
  try {
if (o947() && o948()) {
    var o981 = o979(o78.o982);
    try {
if (o981 >= 0 && o981 < 8) {
      try {
o90.o713(o981, true);
}catch(e){}
      try {
try {
        try {
o78.o983();
}catch(e){}
      }
      catch (o68) { }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
function o984(o78) {
  try {
if (o947() && o948()) {
    var o981 = o979(o78.o982);
    try {
if (o981 >= 0 && o981 < 8) {
      try {
o90.o713(o981, false);
}catch(e){}
      try {
try {
        try {
o78.o983();
}catch(e){}
      }
      catch (o68) { }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
function o985(o78) {
  try {
if (o947() && o948()) {
    try {
if (o78.o986 || o78.o987) {
      try {
o90.o715(o78.o986 * Math.o988 / 180, o78.o987 * Math.o988 / 180);
}catch(e){}
    }
    else {
      try {
o90.o715(o78.o104, o78.o105);
}catch(e){}
    }
}catch(e){}
    try {
try {
      try {
o78.o983();
}catch(e){}
    }
    catch (o68) { }
}catch(e){}
  }
}catch(e){}
}
//The emulator will call this to sort out the canvas properties for (re)initialization.
function o700() {
  try {
if (o947()) {
    try {
o90.o361.o109 = o90.o361.o989;
}catch(e){}
    try {
o90.o361.o110 = o90.o361.o990;
}catch(e){}
  }
}catch(e){}
}
//Call this when resizing the canvas:
function o991() {
  try {
if (o947()) {
    try {
if (!o683[12]) {
      try {
if (o90.o569 != 160 || o90.o571 != 144) {
        try {
o90.o668();
}catch(e){}
      }
}catch(e){}
    }
    else {
      try {
if (o90.o569 != o90.o361.o989 || o90.o571 != o90.o361.o990) {
        try {
o90.o668();
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}

// End of js/GameBoyIO.js file.

// Start of realtime.js file.
// ROM code from Public Domain LPC2000 Demo "realtime" by AGO.

var o87='r+BPyZiEZwA+AeBPySAobeEq6gAgKlYj5WJv6SRmZjjhKuXqACDJ/////////////////////////////////xgHZwCYhGcA2fX6/3/1xdXlIRPKNgHN9f/h0cHx6gAg+hLKtyAC8cnwgLcoF/CC7hjgUT6Q4FOv4FLgVOCAPv/gVfHZ8IG3IALx2fBA7gjgQA8PD+YB7gHgT/CC4FHuEOCCPojgU6/gUuBU4IE+/uBV4ID6NMs86jTL8dkKCgoKbWFkZSBieSBhZ28uIGVtYWlsOmdvYnV6b3ZAeWFob28uY29tCnVybDogc3BlY2N5LmRhLnJ1CgoKCv///////wDDSgnO7WZmzA0ACwNzAIMADAANAAgRH4iJAA7czG7m3d3Zmbu7Z2NuDuzM3dyZn7u5Mz5BR08nUyBSRUFMVElNRSCAAAAAAgEDADMBSTQeIUD/y37I8P/1y4fg//BE/pEg+su+8eD/yT7A4EY+KD0g/cnF1eWvEQPK1RITEhMGAyEAyuXFTgYAIWAMCQkqEhMqEhPB4SMFIOrhrwYIzYsU4dHByf////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAgMFBggJCwwOEBETFBYXGBobHR4fISIjJSYnKSorLC0uLzAxMjM0NTY3ODg5Ojo7PDw9PT4+Pj8/Pz9AQEBAQEBAQEBAPz8/Pz4+PT08PDs7Ojk5ODc2NTU0MzIxMC8uLCsqKSgmJSQjISAfHRwaGRcWFRMSEA8NCwoIBwUEAgH//fz6+ff29PPx8O7t6+ro5+Xk4uHg3t3c2tnY19bU09LR0M/OzczLysnJyMfGxsXFxMPDw8LCwcHBwcDAwMDAwMDAwMDBwcHBwsLDw8PExcXGxsfIycnKy8zNzs/Q0dLT1NXX2Nna3N3e4OHi5OXn6Onr7O7v8fL09vf5+vz9AAEECRAZJDFAUWR5kKnE4QAhRGmQueQRQHGk2RBJhMEAQYTJEFmk8UCR5DmQ6UShAGHEKZD5ZNFAsSSZEIkEgQCBBIkQmSSxQNFk+ZApxGEAoUTpkDnkkUDxpFkQyYRBAMGESRDZpHFAEeS5kGlEIQDhxKmQeWRRQDEkGRAJBAEAAQQJEBkkMUBRZHmQqcThACFEaZC55BFAcaTZEEmEwQBBhMkQWaTxQJHkOZDpRKEAYcQpkPlk0UCxJJkQiQSBAIEEiRCZJLFA0WT5kCnEYQChROmQOeSRQPGkWRDJhEEAwYRJENmkcUAR5LmQaUQhAOHEqZB5ZFFAMSQZEAkEAQAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAgICAgIDAwMDBAQEBAUFBQUGBgYHBwcICAkJCQoKCgsLDAwNDQ4ODw8QEBEREhITExQUFRUWFxcYGRkaGhscHB0eHh8gISEiIyQkJSYnJygpKisrLC0uLzAxMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1FSU1RVVldZWltcXV9gYWJkZWZnaWprbG5vcHJzdHZ3eXp7fX5/gYKEhYeIiouNjpCRk5SWl5manJ2foKKkpaepqqytr7GytLa3ubu9vsDCxMXHycvMztDS1NXX2dvd3+Hi5Obo6uzu8PL09vj6/P4A//z38Ofcz8CvnIdwVzwfAN+8l3BHHO/Aj1wn8Ld8PwC/fDfwp1wPwG8cx3AXvF8AnzzXcAecL8BP3Gfwd/x/AH/8d/Bn3E/AL5wHcNc8nwBfvBdwxxxvwA9cp/A3fL8AP3y38Cdcj8DvHEdwl7zfAB88V3CHnK/Az9zn8Pf8/wD//Pfw59zPwK+ch3BXPB8A37yXcEcc78CPXCfwt3w/AL98N/CnXA/AbxzHcBe8XwCfPNdwB5wvwE/cZ/B3/H8Af/x38GfcT8AvnAdw1zyfAF+8F3DHHG/AD1yn8Dd8vwA/fLfwJ1yPwO8cR3CXvN8AHzxXcIecr8DP3Ofw9/z/AP/////////////////////+/v7+/v79/f39/fz8/Pz8+/v7+vr6+vn5+fj4+Pf39/b29fX19PTz8/Ly8fHw8PDv7u7t7ezs6+vq6uno6Ofn5uXl5OPj4uHh4N/e3t3c3Nva2djY19bV1NTT0tHQz8/OzczLysnIx8bFxMPCwcDAvr28u7q5uLe2tbSzsrGwr62sq6qpqKalpKOioJ+enZyamZiWlZSTkZCPjYyLiYiHhYSCgYB+fXt6eHd1dHJxcG5sa2loZmVjYmBfXVtaWFdVU1JQTk1LSUhGREJBPz08Ojg2NDMxLy0rKigmJCIgHx0bGRcVExEPDQsJBwUDAf9/Px8PBwMBgEAgEAgEAgEAAQEBAQEBAQEBAQEA//////////////+AEAcAAQABAAEBAAEBAAEA/wD//wD//wD/AP+AKwcBAAEAAQD/AP8A/wD/AP8A/wABAAEAAQCARgcBAQEBAQD//////////////wABAQEBAQGAYQf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+AwODw+Pz+/xEAwAGxwj4E9cU+BfUKbwMKZ37+gCALI34LAiN+AwILGOsahhIDHBwcHPE9IN7BIRAAGVRdPgX1Cm8DCmcalhIjfAILfQIDAx0dHR3xPSDnIRgAGVRd8T0grskRAcAB6cI+BPUKbwMKZ37+gCALI34LAiN+AwILGOs+CvUahhIcHBwc8T0g9CN8Agt9AgMD8T0g0MkgIEZJTExFRCAgIFBPTFlHT05TIEhFTElDT1BURVJJTiBBQ1RJT04gIQDADgpwLHQsGhPWICI2ACwNIPE+oOoQyngBCQDlYmsJVF3hDMYKR3AsdCwaG9YgIjYALA0g8a/qEcrJ+hDK/jDI1gTqEMpHPqCQ/lA4Aj5QDgAM1ggw+3ghAcARBAB3xggZDSD5+hHKg+oRykf+UDgCPlAOAAzWCDD7eC4td9YIGQ0g+ckh9grzMf/PzVABr+Am4P/gD+BD4EL2SOBFPkDgQT4E4AfN9RM+CuoAAA4HeeBwJqCvIstsKPsNIPIh/v8yy30g+wEKABH1/yFpAc3kE+cCAVYAEQDBIVt2zeQTrwYYIWsOzYsUIYsOzaQUxwGwAxEAgCGhF8XlzeQT4cERAIjN5BMhAJgRAwABYMDHcc9yIwUg+BQdIPHN9RMhuxUGAc2WE82JEz5E4EGv4EU+A+D/+z4B6hLK4E0QAAB4zccTBSD6zZATxwEACFkhAIhzIwt4sSD5IQDHPv9FdyRwJCJ3JXclcCwg8x5/IQCYx3PPNgDL1DYIx3PLlCPLVCjuPoABDxARIAAhIpjF5XfL1HfLlDwZDSD1POEswQUg7D486jPLr+o0yz3qL8s+oOCCPgLqG8vNiRM+ROBBr+BFPgPg/68+ACEXyyI+CiI+IHev6h7L4ITgluodyz4B6h/L6g/D6g3KBlARnAjNxAjNcwsBLAHFzTsLzQAJwQt4sSDzzZATxwEACFkhAIhzIwt4sSD5zfUTeQYQIYMOzYsUPv/qKcsGgBGwCM3ECM2JEwEsAcXNbAzNAAnBC3ixIPOv6hLKzZATPpDgU/PHAbADEQCIIaEXzeQTzfUTIQIWBgHNlhPNiRM+ROBBr+BFPgPg//sY/j4D6gAgzcRGBgMhF8t+gCJ+gDwifoB3zckP+jDLb/oxy2fNtgs+AeCB8IG3IPv6Dcq3KAPNcwHJ+h3LBgARTg2Hb2AZKmZvTgkq4ItfKjzgjD1PKuCNe4eHg0cRAMUqEhwFIPp5h4eBRxEAxCoSHAUg+n3qMMt86jHLyfCL4I7wjOCP8I3gkBEAw9XlzcoQ4dHwpeaAEhwBAwAJ8JA94JAg6CEAxQYPKk+gXxq3IB95yzegXxq3IBYqT6BfGrcgD3nLN6BfGrcgBiwsLBhHLOXNyhDwlrcoKwYB8KXGP0/LfygBBcXwpMY/Vx4AzZMOe8H18KPGP1ceAM2TDsHhJCJwGAzhJPCjxj8i8KTGPyIsJRbDBg/wjj3gjsLiCz4C6gAgw1JhfBjcHwAL7mpIYL9vBgMhF8t+gCJ+gDwifoB3zckPIcsNEQDGzf4MI+U+A+oAICEgy83+DPocy9YIb+ocy82vYAYDESDLIWIOxeXVzcoQ4fCjxhQi8KQiNg8jVF3hIyMjwQUg5M3ERsE+AeoAIAr+/ygiEQDGbyYAKRnlAwoDbyYAKRleI1bhKmZvxc0xHMwAQMEY2T4B4IHwgbcg+8l+PMjl1c3KEAYB8KVPy38oAQXF8KTLf/UoAi88Vx4AzZMO8XsgAi88xn/B9fCjy3/1KAIvPFceAM2TDvF7KAIvPMZ/wdESE3gSE+EjIyMYsFANAgAIDAYCRCgoFANEKAAUE0QAABQSRAAoFAJVKCjsA1UoAOwTVQAA7BJVACjsAAAEBQAAAAEFAAEBAwIGAQEDBwYCAgAHAwICAAcEAwMBAgYDAwEFBgQEAAECBAQAAwIFBQQFBgUFBAcGMgAAzgAAADIAAM4AAAAyAADOKAAAHhEAChEAAAAACu8AHu8AFAAKFAD2FAAPCgAF6AAC4gAQ3gAQ4gD+CgD74g4C3Q4C4QAC4vIC3fIC4AAM4PsM4PsQ4/sJ3fsJ/wABAQICAwMEBAUFAAAGAQYCBgMGBAYFBgAHAQcCBwMHBAcFBwYICQoKCwsMDA0NDgoPDxAQEQoSEhMTERQVFRYVFxUYCBkIGggb/yAAD/AbD/DlD/9//3+XEQAAAGD/f5cRAAAYAP9/lxEAAIB8lxH/f/9/QHz/f18IAADLI8sSeC9HeS9PAyEAAH2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEssoyxkJ0BPJ+hfLJgJvfuCcLzzgnn3GQG9+4Jvgn6/gmOCZ4JrgneChPkDgl/oYy29OfcZAb0bFeOCgeeCizdMQ8KPgpvCk4KnwpeCsr+Cg4KI+QOChzdMQ8KPgp/Ck4KrwpeCtwXkvPOCgr+CheOCizdMQ8KPgmfCk4JzwpeCf8Kbgl/Cp4JrwrOCd8KfgmPCq4JvwreCe+hnLJgJvTn3GQG9GxXjgoHkvPOChr+CizdMQ8KPgpvCk4KnwpeCswXngoHjgoa/gos3TEPCj4KfwpOCq8KXgra/goOChPkDgos3TEPCj4JnwpOCc8KXgn/Cm4JfwqeCa8KzgnfCn4JjwquCb8K3gnskq4KAq4KEq4KLwl1/woCYGV8t6ICDLe3soJy88X3qTMAIvPG96g1YlXiVvfiVuZxl8LzwYH3ovPFfLeyjhey88X5IwAi88b3qDViVeJW9+JW5nGXxH8Jhf8KEmBlfLeiAgy3t7KCcvPF96kzACLzxveoNWJV4lb34lbmcZfC88GB96LzxXy3so4XsvPF+SMAIvPG96g1YlXiVvfiVuZxl8T/CZX/CiJgZXy3ogIMt7eygnLzxfepMwAi88b3qDViVeJW9+JW5nGXwvPBgfei88V8t7KOF7LzxfkjACLzxveoNWJV4lb34lbmcZfICB4KPwml/woCYGV8t6ICDLe3soJy88X3qTMAIvPG96g1YlXiVvfiVuZxl8LzwYH3ovPFfLeyjhey88X5IwAi88b3qDViVeJW9+JW5nGXxH8Jtf8KEmBlfLeiAgy3t7KCcvPF96kzACLzxveoNWJV4lb34lbmcZfC88GB96LzxXy3so4XsvPF+SMAIvPG96g1YlXiVvfiVuZxl8T/CcX/CiJgZXy3ogIMt7eygnLzxfepMwAi88b3qDViVeJW9+JW5nGXwvPBgfei88V8t7KOF7LzxfkjACLzxveoNWJV4lb34lbmcZfICB4KTwnV/woCYGV8t6ICDLe3soJy88X3qTMAIvPG96g1YlXiVvfiVuZxl8LzwYH3ovPFfLeyjhey88X5IwAi88b3qDViVeJW9+JW5nGXxH8J5f8KEmBlfLeiAgy3t7KCcvPF96kzACLzxveoNWJV4lb34lbmcZfC88GB96LzxXy3so4XsvPF+SMAIvPG96g1YlXiVvfiVuZxl8T/CfX/CiJgZXy3ogIMt7eygnLzxfepMwAi88b3qDViVeJW9+JW5nGXwvPBgfei88V8t7KOF7LzxfkjACLzxveoNWJV4lb34lbmcZfICB4KXJ9T6D4EDxyfWv4EDxyfXF1eXHKv7/KFD+FiAaTiMqh4eHVF1vJgApKXgGmAlHelRne11vGNzGYBLPeBIcGNN2ACETyjQ1KPc1yfvFBmR2AAUg+8HJ+3YABSD7yfXF1eUqEhMLeLEg+OHRwfHJxeUBAKAhAMDNAxThwcnF5XEjBSD74cHJxdXlAQCAIZXKzQMU4dHBycXV5a/qFcuwIAwaEyIaEzIEDXjqFcvlxRq+EyAPIxq+IAkTIw0gCMHhGBkrGyMjBSDmecFPBBoTIhoTIiEVyzThDSDS+hXL4dHBydVfzXIUuzD60cnF9cH6FMrLD6mAR/CLkR+AR/AFqOoUysHJ9cXltxcXF/aA4Ggq4GkFIPo+5OBH4cHxyfXF5bcXFxf2gOBqKuBrBSD6PuTgSOBJ4cHxyT4Q4ADwAC/LN+bwRz4g4ADwAC/mD7DqFsvJzyEAgK8GIE8+CCINIPwFIPnHIQCABiBPIg0g/AUg+cnFzQMVSs0eFcHJxc0RFUjNGRVLzSMVwcnFBgHNKxXBycUGABj2xQYDGPHFBgLNKxXByfXlh4eAJsBvceHxyfXlh4cmwG9GI04jXiNW4fHJ9cXV5eCDKjzK8BPWIF/wg835FF95xghPezwY6PXF1eXF1c13FdHBex4FIS3LGNUBKssR8NjNlRURGPzNlRURnP/NlRUR9v/NlRUR//8+LzwZOPwCA3ovV3svXxMZyTAwRlBT/zAwUE5UU/8wMExJTkVT/xYFB1dFTENPTUUgVE8WBQgtUkVBTFRJTUUtFgAJREVNTyBNQURFIEVTUEVDSUFMTFkWAQpGT1IgTENQJzIwMDAgUEFSVFn/FgAAR1JFRVRJTlg6ICAgICAgICAgICAWAAFEU0MsUEFOLFNBQixGQVRBTElUWRYAAkpFRkYgRlJPSFdFSU4sSUNBUlVTFgADRE9YLFFVQU5HLEFCWVNTICAgICAWAAQgICAgICAgICAgICAgICAgICAgIBYABUNSRURJVFM6ICAgICAgICAgICAgFgAGQUxMIEdGWCZDT0RFIEJZIEFHTyAWAAdIRUxJQ09QVEVSIDNEIE1PREVMIBYACENSRUFURUQgQlkgQlVTWSAgICAgFgAJICAgICAgICAgICAgICAgICAgICAWAApVU0VEIFNPRlRXQVJFOiAgICAgIBYAC1JHQkRTLE5PJENBU0gsRkFSICAgFgAMICAgICAgICAgICAgICAgICAgICAWAA1DT05UQUNUOiAgICAgICAgICAgIBYADkdPQlVaT1ZAWUFIT08uQ09NICAgFgAPSFRUUDovL1NQRUNDWS5EQS5SVSAWABAgICAgICAgICAgICAgICAgICAgIBYAEVNFRSBZT1UgT04gR0JERVYyMDAw/wAAAAAAAAAAAAAAAAAAAAAICBwUHBQ4KDgoMDBwUCAgKCh8VHxUKCgAAAAAAAAAABQUPip/QT4qfFT+gnxUKCgICDw0fkL8rP6Cfmr8hHhYJCR+Wn5SPCR4SPyU/LRISBgYPCR+Wjwkflr8tH5KNDQQEDgocFAgIAAAAAAAAAAABAQOChwUOCg4KDgoHBQICBAQOCgcFBwUHBQ4KHBQICAAABQUPio8NH5CPCx8VCgoAAAICBwUPDR+QjwsOCgQEAAAAAAAAAAAEBA4KHBQcFAAAAAAAAB8fP6CfHwAAAAAAAAAAAAAAAAwMHhIeEgwMAQEDgoeEjwkeEjwkOCgQEAYGDwkflr+qv6q/LR4SDAwGBg8JHxUPDQ4KHxs/oJ8fBwcPiJ+Wjw0eEj8vP6CfHwcHD4iflo8NE5K/LR4SDAwJCR+Wn5afFT8tP6CfGwQEBwcPiJ8XPyEfnr8tHhIMDAYGDwkeFj8pP66/LR4SDAwPDx+Qv66XFQ4KHBQcFAgIBwcPiJ+Wjwkflr8tPiIcHAcHD4iflr+sn5KfHT4iHBwAAAAAAgIHBQICBAQOCgQEAAACAgcFAgIEBA4KDgocFAAAAAAHBQ4KHBQcFA4KAAAAAAAADw8fkJ8fPyEeHgAAAAAAAA4KBwUHBQ4KHBQAAAYGDwkflr8tHhoEBA4KBAQHBw+In5a/rL8pPi4+IhwcBwcPiJ+Wv66/oL+uvy0SEg4OHxEflr8pP6a/LT4iHBwHBw+In5a5qbgoP6y/IxwcDAweEh8VH5a7qr+uvyEeHgcHD4ifFx8RHhY/Lz+gnx8HBw+Inxc/IT4uOCg4KBAQBwcPiJ+Wvy8/qL+uvyEeHgkJH5a/rr+gv66/LT8tEhIPDx+QjwsOChwUHhY/IR4eDw8fkI+Og4KXFT8tHhIMDAkJH5afFR+Qv66/LT8tEhIICBwUHBQ4KDkpP66fEQ4OCgofFR+Qv6q/rr8tPy0SEgkJH5a/pr+qv6y7qr8tEhIHBw+In5a7qruqvy0+IhwcBwcPiJ+Wv66/IT4uOCgQEAcHD4iflr+uv6q/LT+inZ2HBw+In5a/LT4iPy0/LRISBwcPiJ8XP6Cfnr8tPiIcHB8fP6CfGw4KHBQcFBwUCAgJCR+Wn5a7qruqvy0eEgwMERE7qruqnxUfFR4SHBQICAkJH5aflr+uv6q/KR8VCgoJCR+WnxUOCg8JH5a/LRISCQkflr8tPy0eEhwUHBQICA8PH5C/LT46Dwsflr8hHh4HBw+IjwsOChwUHhYfEQ4OEBA4KDwkHhIPCQeEg4KBAQ4OHxEPDQcFDgoeGj4iHBwGBg8JH5a7qpERAAAAAAAAAAAAAAAAAAAAAB8fP6CfHx81rdPfJJne5X1MAIvPEevyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxnLEcsXlDABhMsRyxeUMAGEyxHLF5QwAYTLEcsXlDABhMsRyxeUMAGEyxHLF5QwAYTLEcsXlDABhMsRyxeUMAGEeRcvT/F5MAIvPIVvJrcBAAA+t7zLEbrLED6/vcsRu8sQPj+8P8sRuj/LEL0/yxG7P8sQeLHIeKHAebcgB3xiV31rX3jLH9L/HD5AlU97lW96lPUwAi88R6/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGcsRyxeVMAGFyxHLF5UwAYXLEcsXlTABhcsRyxeVMAGFyxHLF5UwAYXLEcsXlTABhcsRyxeVMAGFyxHLF5UwAYV5Fy9P8XkwAi88hGcuQMMxHMsf0pcdPkCUT3qUZ3uV9TACLzxHr8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZyxHLF5QwAYTLEcsXlDABhMsRyxeUMAGEyxHLF5QwAYTLEcsXlDABhMsRyxeUMAGEyxHLF5QwAYTLEcsXlDABhHkXL0/xeTACLzyFbyZAwzEcyx/SoRt91r9PfZNvepT1MAIvPEevyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxnLEcsXlTABhcsRyxeVMAGFyxHLF5UwAYXLEcsXlTABhcsRyxeVMAGFyxHLF5UwAYXLEcsXlTABhcsRyxeVMAGFeRcvT/F5MAIvPIRnLr/DMRz//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////3q8MAVUZ3tdb3u90pdAfZNPepRfkTA+V3nLPy88g+CDPn+R5YdPbyYARCkpKQkBkVIJweV41kAXb3nWQB8fH+YPZ/CChGd55gcGB/YITwpP8INHLMl5S1+RV3nLPy88g+CDPneR5YdPbyYARCkpKQkBklsJweV41kAXb3nWQB8fH+YPZ/CChGd55gcGB/YITwpP8INHLMmVT3qUX5EwPld5yz8vPIPggz5/keWHT28mAEQpKSkJAR9BCcHleNZAF2951kAfHx/mD2fwgoRneeYHBgf2CE8KT/CDRyzJeUtfkVd5yz8vPIPggz53keWHT28mAEQpKSkJASBKCcHleNZAF2951kAfHx/mD2fwgoRneeYHBgf2CE8KT/CDRyzJfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkyX6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALMl+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASXJfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsyf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wHRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyIxDsrh+eEWwxgNIf3Er+oLyuoMyiwsLPCPPcjgj14sGrcqKPDGeeCT+g3Ktygm+gvKPP4DIAI+AeoLyiAH+gzKPOoMyvoMyl8WyvCT1nkSe8bH4JMqTypHKuUmxl+Hh4M8PG8qX1Z5h4eBPDxveE4sh4eARjw8bypmb3y6OAViV31rX3y4OAVgR31pT3q4OAVQR3tZT3iU4JR8h+CV5dXFr+CSzUpifeCS0eHVzUpi0eE+AeCSzUpi8JRfPniTZy5Hr8sdMAGEH8sdMAGEH8sdMAGEH8sdMAGEH8sdMAGEH8sdMAGEH8sdMAGEH8sdMAGEH8sdxkBnCA7KMQDC5fCVb8l7vTBVfZNPepRfkTAkV3nLPy88Rz5/kU3Fh09vJgBEKSkJAfdiCcHlJsLwkm94BoDJeUtfkVd5yz8vPEc+d5FNxYdPbyYARCkpCQH4ZwnB5SbC8JJveAaAyZVPepRfkTAkV3nLPy88Rz5/kU3Fh09vJgBEKSkJAalsCcHlJsLwkm94BoDJeUtfkVd5yz8vPEc+d5FNxYdPbyYARCkpCQGqcQnB5SbC8JJveAaAyYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNyXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDcmDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDMlxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggzJxg+Hh+oawXovpl96obMiei+mX3qgszIkeRgAInAtJCJwLSQicC0kInAtJCJwLSQicC0kInAtJCJwLSQicC0kInAtJCJwLSQicC0kInAtJCJwLSQW/8n///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+qqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVACEzDDPAABIAEjPAMwwAIQAhMwwzwAASABIzwDMMACEAITMMM8AAEgASM8AzDAAhACEzDDPAABIAEjPAMwwAIQAhMwwzwAASABIzwDMMACEAITMMM8AAEgASM8AzDAAhACEzDDPAABIAEjPAMwwAIQAhMwwzwAASABIzwDMMACEAITMMM8AAEgASM8AzDAAhACEzDDPAABIAEjPAMwwAIQAhMwwzwAASABIzwDMMACEAITMMM8AAEgASM8AzDAAhACEzDDPAABIAEjPAMwwAIQAhMwwzwAASABIzwDMMACEAITMMM8AAEgASM8AzDAAhACEzDDPAABIAEjPAMwwAIQj8GH4y/WT7wO+B50CzINkI/Bh+Mv1k+8DvgedAsyDZCPwYfjL9ZPvA74HnQLMg2Qj8GH4y/WT7wO+B50CzINkI/Bh+Mv1k+8DvgedAsyDZCPwYfjL9ZPvA74HnQLMg2Qj8GH4y/WT7wO+B50CzINkI/Bh+Mv1k+8DvgedAsyDZCPwYfjL9ZPvA74HnQLMg2Qj8GH4y/WT7wO+B50CzINkI/Bh+Mv1k+8DvgedAsyDZCPwYfjL9ZPvA74HnQLMg2Qj8GH4y/WT7wO+B50CzINkI/Bh+Mv1k+8DvgedAsyDZCPwYfjL9ZPvA74HnQLMg2Qj8GH4y/WT7wO+B50CzINnMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDPHxAQEBAQEBHx8QEBAQEBDx8QEBAQEBAR8fEBAQEBAQ8fEBAQEBAQEfHxAQEBAQEPHxAQEBAQEBHx8QEBAQEBDx8QEBAQEBAR8fEBAQEBAQ8fEBAQEBAQEfHxAQEBAQEPHxAQEBAQEBHx8QEBAQEBDx8QEBAQEBAR8fEBAQEBAQ8fEBAQEBAQEfHxAQEBAQEPHxAQEBAQEBHx8QEBAQEBDx8QEBAQEBAR8fEBAQEBAQ8fEBAQEBAQEfHxAQEBAQEPHxAQEBAQEBHx8QEBAQEBDx8QEBAQEBAR8fEBAQEBAQ8fEBAQEBAQEfHxAQEBAQEPHxAQEBAQEBHx8QEBAQEBCqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlUC4XIscAl7InAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJLCwly2XIJGjJycnJyeEicAlyLHAJeyJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSwsJctlyCRoycnJycnhInAJInAJcixwCXsicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCXIscAl7InAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJLCwly2XIJGjJycnJyeEicAkicAkicAkicAlyLHAJeyJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSwsJctlyCRoycnJycnhInAJInAJInAJInAJInAJcixwCXsicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCSJwCSJwCSJwCXIscAl7InAJInAJInAJInAJInAJInAJInAJInAJInAJLCwly2XIJGjJycnJyeEicAkicAkicAkicAkicAkicAkicAlyLHAJeyJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSwsJctlyCRoycnJycnhInAJInAJInAJInAJInAJInAJInAJInAJcixwCXsicAkicAkicAkicAkicAkicAkicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCXIscAl7InAJInAJInAJInAJInAJInAJLCwly2XIJGjJycnJyeEicAkicAkicAkicAkicAkicAkicAkicAkicAkicAlyLHAJeyJwCSJwCSJwCSJwCSJwCSwsJctlyCRoycnJycnhInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJcixwCXsicAkicAkicAkicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCXIscAl7InAJInAJInAJLCwly2XIJGjJycnJyeEicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAlyLHAJeyJwCSJwCSwsJctlyCRoycnJycnhInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJcixwCXsicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCXIscAl7LCwly2XIJGjJycnJydE+t5LI4IXmB8RSRPCFHx8focjlzTJE4XkicCwicCwicCwicCwicCwicCwicCwicCzJ+ABUXWhHeZAfyx1nATNZCfCCMQCv/qAoAzEAvwH/AOlHPgeQVF1HDjOvyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxlHIbRXCeViaz7/AQ8Ayfoay2/6G8uFZ/4UIAU+/y0YBtbsIAU8LOoby3zqGsvNr2AhlEbNyhDwpMagV/Cjxn9f1SGXRs3KEPCkxqBn8KPGf2/RzTEcKAsf2hhZH9oYWcPERny6OAViV31rX+XNmkbh1Xu90sxFe9ZA4Ih9k0884Il6lF/ghjzgij2RMGvgh3nLPy88g+CF8IIBDwBvVHzWQBfLN6GFZ3rmBxdvGAjwij3KAETgivCJX/CGV/CFGASCHSgLy38g+Ffwh4LghR3NYkUY2nvgifCIg1/l5gf2CG8mB1Z7aB8fHx/LHR/LHeYDxkBnrx7/6XnghpPgh3vLPy88geCF8IIBDwBvVHzWQBfLN6GFZ3rmBxdv8Ilf8IZX8IXLfyAHV/CHgh0YAYLghc1iRfCKPcoAROCKGN171kDgiHuVTzzgiXqUX+CGPOCKPZEwa+CHecs/LzyD4IXwggEPAG9UfNZAF8s3oYVneuYHF28YCPCKPcoAROCK8Ilf8IZX8IUYBIIdKAvLfyD4V/CHguCFHc0qRhjae+CJ8IiTX+XmB/YQbyYHVntoHx8fH8sdH8sd5gPGQGc+/1jpeeCGk+CHe8s/LzyB4IXwggEPAG9UfNZAF8s3oYVneuYHF2/wiV/whlfwhct/IAdX8IeCHRgBguCFzSpG8Io9ygBE4IoY3UYAALoAAHzWQMhPHx8f5h9HeeYHKAsE/gUwBvUhylblBT4PkCHJRoRn5fCCZ69vyfCCZ69vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIsnxAQ8APcqEVz0odj0oOj0idwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwksLCXLZSgCJGgidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwksLCXLZSgCJGgidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwksLCXLZSgCJGgidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkid8kicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAloyfgAVF3wgjEAr/6gKAMxAL8B/wDFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcVia/nJJgJ+4JovPOCYfcZAb37gl+Cbr+CZ4JzgneCePkDgn8n/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Aw==';

// End of realtime.js file.

////////////////////////////////////////////////////////////////////////////////
// Runner
////////////////////////////////////////////////////////////////////////////////

var o274 = true;

function o40(name) {
}

function o67(name, o68) {
  try {
o0.o1(name + " : ERROR : " +o68.o992);
}catch(e){}
  try {
o274 = false;
}catch(e){}
}

function o62(name, o45) {
  try {
if (o274) {
    try {
o0.o1("### SCORE:", o45);
}catch(e){}
  }
}catch(e){}
}

function o44(o45) {
}

try {
o23.o33({
        o40 : o40,
    o67 : o67,
    o62 : o62,
    o44 : o44
});
}catch(e){}
