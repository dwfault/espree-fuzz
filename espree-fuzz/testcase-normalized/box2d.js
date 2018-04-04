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
// box2d.js
/////////////////////////////////////////////////////////////

// Portions copyright 2013 Google, Inc

/*
* Copyright (c) 2006-2007 Erin Catto http://www.gphysics.com
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/

/*
* Following code is beautified using http://jsbeautifier.org/
*/

var o96 = {};
(function (o97, o98) {
    function o99() {}
    if (!(Object.defineProperty instanceof Function) && Object.prototype.__defineGetter__ instanceof Function && Object.prototype.__defineSetter__ instanceof Function) Object.defineProperty = function (o105, o106, o107) {
        o107.get instanceof Function && o105.__defineGetter__(o106, o107.get);
        o107.set instanceof Function && o105.__defineSetter__(o106, o107.set)
    };
    o97.o110 = function (o105, o106) {
        o99.prototype = o106.prototype;
        o105.prototype = new o99;
        o105.prototype.constructor = o105
    };
    o97.o112 = function (o105, o106) {
        return function () {
            o106.apply(o105, arguments)
        }
    };
    o97.o115 = function (o105) {
        if (o105 === o98) o105 = 0;
        for (var o106 = Array(o105 || 0), o107 = 0; o107 < o105; ++o107) o106[o107] = 0;
        return o106
    };
    o97.is = function (o105, o106) {
        if (o105 === null) return false;
        if (o106 instanceof Function && o105 instanceof o106) return true;
        if (o105.constructor.o118 != o98 && o105.constructor.o118[o106]) return true;
        return false
    };
    o97.o119 = function (o105) {
        return Math.abs(parseInt(o105))
    }
})(o96);
var o122 = Array,
    o123 = o96.o115;
if (typeof o96 === "undefined") o96 = {};
if (typeof o96.o124 === "undefined") o96.o124 = {};
if (typeof o96.o124.o125 === "undefined") o96.o124.o125 = {};
if (typeof o96.o126 === "undefined") o96.o126 = {};
if (typeof o96.o126.Math === "undefined") o96.o126.Math = {};
if (typeof o96.o127 === "undefined") o96.o127 = {};
if (typeof o96.o127.o128 === "undefined") o96.o127.o128 = {};
if (typeof o96.o127.o129 === "undefined") o96.o127.o129 = {};
if (typeof o96.o127.o130 === "undefined") o96.o127.o130 = {};
(function () {
    function o97() {
        o97.o131.apply(this, arguments)
    }

    function o98() {
        o98.o132.apply(this, arguments)
    }

    function o99() {
        o99.o133.apply(this, arguments);
        this.constructor === o99 && this.o133.apply(this, arguments)
    }

    function o105() {
        o105.o134.apply(this, arguments)
    }

    function o106() {
        o106.o135.apply(this, arguments);
        this.constructor === o106 && this.o135.apply(this, arguments)
    }

    function o107() {
        o107.o136.apply(this, arguments)
    }

    function o137() {
        o137.o138.apply(this, arguments)
    }

    function o139() {
        o139.o140.apply(this,
            arguments)
    }

    function o141() {
        o141.o142.apply(this, arguments)
    }

    function o143() {
        o143.o144.apply(this, arguments)
    }

    function o145() {
        o145.o146.apply(this, arguments);
        this.constructor === o145 && this.o146.apply(this, arguments)
    }

    function o147() {
        o147.o148.apply(this, arguments)
    }

    function o149() {
        o149.o150.apply(this, arguments)
    }

    function o151() {
        o151.o152.apply(this, arguments)
    }

    function o153() {
        o153.o154.apply(this, arguments);
        this.constructor === o153 && this.o154.apply(this, arguments)
    }

    function o155() {
        o155.o156.apply(this, arguments);
        this.constructor === o155 && this.o156.apply(this, arguments)
    }

    function o157() {
        o157.o158.apply(this, arguments)
    }

    function o159() {
        o159.o160.apply(this, arguments);
        this.constructor === o159 && this.o160.apply(this, arguments)
    }

    function o161() {
        o161.o162.apply(this, arguments)
    }

    function o163() {
        o163.o164.apply(this, arguments)
    }

    function o165() {
        o165.o166.apply(this, arguments)
    }

    function o167() {
        o167.o168.apply(this, arguments);
        this.constructor === o167 && this.o168.apply(this, arguments)
    }

    function o67() {
        o67.o169.apply(this, arguments)
    }

    function o170() {
        o170.o171.apply(this, arguments)
    }

    function o172() {
        o172.o173.apply(this, arguments)
    }

    function o174() {
        o174.o175.apply(this, arguments)
    }

    function o176() {
        o176.o177.apply(this, arguments);
        this.constructor === o176 && this.o177.apply(this, arguments)
    }

    function o178() {
        o178.o179.apply(this, arguments)
    }

    function o180() {
        o180.o181.apply(this, arguments)
    }

    function o182() {
        o182.o183.apply(this, arguments);
        this.constructor === o182 && this.o183.apply(this, arguments)
    }

    function o184() {
        o184.o185.apply(this, arguments);
        this.constructor === o184 && this.o185.apply(this, arguments)
    }

    function o186() {
        o186.o187.apply(this, arguments);
        this.constructor === o186 && this.o187.apply(this, arguments)
    }

    function o188() {
        o188.o189.apply(this, arguments)
    }

    function o190() {
        o190.o191.apply(this, arguments);
        this.constructor === o190 && this.o191.apply(this, arguments)
    }

    function o192() {
        o192.o193.apply(this, arguments);
        this.constructor === o192 && this.o193.apply(this, arguments)
    }

    function o194() {
        o194.o195.apply(this, arguments);
        this.constructor === o194 && this.o195.apply(this, arguments)
    }

    function o196() {
        o196.o197.apply(this, arguments)
    }

    function o198() {
        o198.o199.apply(this, arguments);
        this.constructor === o198 && this.o199.apply(this, arguments)
    }

    function o200() {
        o200.o201.apply(this, arguments);
        this.constructor === o200 && this.o201.apply(this, arguments)
    }

    function o93() {
        o93.o202.apply(this, arguments)
    }

    function o203() {
        o203.o204.apply(this, arguments)
    }

    function o205() {
        o205.o206.apply(this,
            arguments);
        this.constructor === o205 && this.o206.apply(this, arguments)
    }

    function o207() {
        o207.o208.apply(this, arguments);
        this.constructor === o207 && this.o208.apply(this, arguments)
    }

    function o37() {
        o37.o209.apply(this, arguments);
        this.constructor === o37 && this.o209.apply(this, arguments)
    }

    function o210() {
        o210.o211.apply(this, arguments);
        this.constructor === o210 && this.o211.apply(this, arguments)
    }

    function o212() {
        o212.o213.apply(this, arguments);
        this.constructor === o212 && this.o213.apply(this, arguments)
    }

    function o214() {
        o214.o215.apply(this,
            arguments)
    }

    function o216() {
        o216.o217.apply(this, arguments)
    }

    function o218() {
        o218.o219.apply(this, arguments)
    }

    function o220() {
        o220.o221.apply(this, arguments);
        this.constructor === o220 && this.o221.apply(this, arguments)
    }

    function o222() {
        o222.o223.apply(this, arguments);
        this.constructor === o222 && this.o223.apply(this, arguments)
    }

    function o224() {
        o224.o225.apply(this, arguments)
    }

    function o226() {
        o226.o227.apply(this, arguments)
    }

    function o228() {
        o228.o229.apply(this, arguments);
        this.constructor === o228 && this.o229.apply(this, arguments)
    }

    function o230() {
        o230.o231.apply(this, arguments);
        this.constructor === o230 && this.o231.apply(this, arguments)
    }

    function o232() {
        o232.o233.apply(this, arguments);
        this.constructor === o232 && this.o233.apply(this, arguments)
    }

    function o234() {
        o234.o235.apply(this, arguments)
    }

    function o236() {
        o236.o237.apply(this, arguments);
        this.constructor === o236 && this.o237.apply(this, arguments)
    }

    function o238() {
        o238.o239.apply(this, arguments)
    }

    function o240() {
        o240.o241.apply(this,
            arguments);
        this.constructor === o240 && this.o241.apply(this, arguments)
    }

    function o242() {
        o242.o243.apply(this, arguments);
        this.constructor === o242 && this.o243.apply(this, arguments)
    }

    function o244() {
        o244.o245.apply(this, arguments)
    }

    function o246() {
        o246.o247.apply(this, arguments)
    }

    function o248() {
        o248.o249.apply(this, arguments);
        this.constructor === o248 && this.o249.apply(this, arguments)
    }

    function o250() {
        o250.o251.apply(this, arguments)
    }

    function o252() {
        o252.o253.apply(this,
            arguments)
    }

    function o254() {
        o254.o255.apply(this, arguments);
        this.constructor === o254 && this.o255.apply(this, arguments)
    }

    function o256() {
        o256.o257.apply(this, arguments)
    }

    function o258() {
        o258.o259.apply(this, arguments);
        this.constructor === o258 && this.o259.apply(this, arguments)
    }

    function o260() {
        o260.o261.apply(this, arguments)
    }

    function o262() {
        o262.o263.apply(this, arguments)
    }

    function o264() {
        o264.o265.apply(this, arguments)
    }

    function o266() {
        o266.o267.apply(this,
            arguments);
        this.constructor === o266 && this.o267.apply(this, arguments)
    }

    function o268() {
        o268.o269.apply(this, arguments)
    }

    function o270() {
        o270.o271.apply(this, arguments)
    }

    function o272() {
        o272.o273.apply(this, arguments)
    }

    function o274() {
        o274.o275.apply(this, arguments)
    }

    function o276() {
        o276.o277.apply(this, arguments)
    }

    function o278() {
        o278.o279.apply(this, arguments)
    }

    function o280() {
        o280.o281.apply(this, arguments)
    }

    function o282() {
        o282.o283.apply(this, arguments);
        this.constructor === o282 && this.o283.apply(this, arguments)
    }

    function o284() {
        o284.o285.apply(this, arguments);
        this.constructor === o284 && this.o285.apply(this, arguments)
    }

    function o286() {
        o286.o287.apply(this, arguments);
        this.constructor === o286 && this.o287.apply(this, arguments)
    }

    function o288() {
        o288.o289.apply(this, arguments);
        this.constructor === o288 && this.o289.apply(this, arguments)
    }

    function o290() {
        o290.o291.apply(this,
            arguments);
        this.constructor === o290 && this.o291.apply(this, arguments)
    }

    function o292() {
        o292.o293.apply(this, arguments);
        this.constructor === o292 && this.o293.apply(this, arguments)
    }

    function o294() {
        o294.o295.apply(this, arguments)
    }

    function o296() {
        o296.o297.apply(this, arguments);
        this.constructor === o296 && this.o297.apply(this, arguments)
    }

    function o298() {
        o298.o299.apply(this, arguments);
        this.constructor === o298 && this.o299.apply(this, arguments)
    }

    function o300() {
        o300.o301.apply(this, arguments)
    }

    function o302() {
        o302.o303.apply(this, arguments);
        this.constructor === o302 && this.o303.apply(this, arguments)
    }

    function o304() {
        o304.o305.apply(this, arguments);
        this.constructor === o304 && this.o305.apply(this, arguments)
    }

    function o306() {
        o306.o307.apply(this, arguments);
        this.constructor === o306 && this.o307.apply(this, arguments)
    }

    function o308() {
        o308.o309.apply(this, arguments);
        this.constructor === o308 && this.o309.apply(this, arguments)
    }

    function o310() {
        o310.o311.apply(this,
            arguments);
        this.constructor === o310 && this.o311.apply(this, arguments)
    }

    function o312() {
        o312.o313.apply(this, arguments);
        this.constructor === o312 && this.o313.apply(this, arguments)
    }

    function o314() {
        o314.o315.apply(this, arguments);
        this.constructor === o314 && this.o315.apply(this, arguments)
    }

    function o316() {
        o316.o317.apply(this, arguments);
        this.constructor === o316 && this.o317.apply(this, arguments)
    }

    function o318() {
        o318.o319.apply(this, arguments);
        this.constructor === o318 && this.o319.apply(this, arguments)
    }

    function o320() {
        o320.o321.apply(this, arguments);
        this.constructor === o320 && this.o321.apply(this, arguments)
    }

    function o322() {
        o322.o323.apply(this, arguments);
        this.constructor === o322 && this.o323.apply(this, arguments)
    }

    function o324() {
        o324.o325.apply(this, arguments);
        this.constructor === o324 && this.o325.apply(this, arguments)
    }
    o96.o124.o326 = "Box2D.Collision.IBroadPhase";
    o96.o124.o131 = o97;
    o96.o124.o132 = o98;
    o96.o124.o133 = o99;
    o96.o124.o134 = o105;
    o96.o124.o135 = o106;
    o96.o124.o136 = o107;
    o96.o124.o138 = o137;
    o96.o124.o140 = o139;
    o96.o124.o142 = o141;
    o96.o124.o144 = o143;
    o96.o124.o146 = o145;
    o96.o124.o148 = o147;
    o96.o124.o150 = o149;
    o96.o124.o152 = o151;
    o96.o124.o154 = o153;
    o96.o124.o156 = o155;
    o96.o124.o158 = o157;
    o96.o124.o160 = o159;
    o96.o124.o162 = o161;
    o96.o124.o164 = o163;
    o96.o124.o166 = o165;
    o96.o124.o168 = o167;
    o96.o124.o169 = o67;
    o96.o124.o171 = o170;
    o96.o124.o173 = o172;
    o96.o124.o175 = o174;
    o96.o124.o177 = o176;
    o96.o124.o179 = o178;
    o96.o124.o181 = o180;
    o96.o124.o125.o183 = o182;
    o96.o124.o125.o185 = o184;
    o96.o124.o125.o187 = o186;
    o96.o124.o125.o189 = o188;
    o96.o124.o125.o191 = o190;
    o96.o124.o125.o193 = o192;
    o96.o126.o327 = "Box2D.Common.b2internal";
    o96.o126.o195 = o194;
    o96.o126.o197 = o196;
    o96.o126.Math.o199 = o198;
    o96.o126.Math.o201 = o200;
    o96.o126.Math.o202 = o93;
    o96.o126.Math.o204 = o203;
    o96.o126.Math.o206 = o205;
    o96.o126.Math.o208 = o207;
    o96.o126.Math.o209 = o37;
    o96.o127.o211 = o210;
    o96.o127.o213 = o212;
    o96.o127.o215 = o214;
    o96.o127.o217 = o216;
    o96.o127.o219 = o218;
    o96.o127.o221 = o220;
    o96.o127.o223 = o222;
    o96.o127.o225 = o224;
    o96.o127.o227 = o226;
    o96.o127.o229 = o228;
    o96.o127.o231 = o230;
    o96.o127.o233 = o232;
    o96.o127.o235 = o234;
    o96.o127.o237 = o236;
    o96.o127.o128.o239 = o238;
    o96.o127.o128.o241 = o240;
    o96.o127.o128.o243 = o242;
    o96.o127.o128.o245 = o244;
    o96.o127.o128.o247 = o246;
    o96.o127.o128.o249 = o248;
    o96.o127.o128.o251 = o250;
    o96.o127.o128.o253 = o252;
    o96.o127.o128.o255 = o254;
    o96.o127.o128.o257 = o256;
    o96.o127.o128.o259 = o258;
    o96.o127.o128.o261 = o260;
    o96.o127.o128.o263 = o262;
    o96.o127.o128.o265 = o264;
    o96.o127.o128.o267 = o266;
    o96.o127.o129.o269 = o268;
    o96.o127.o129.o271 = o270;
    o96.o127.o129.o273 = o272;
    o96.o127.o129.o275 = o274;
    o96.o127.o129.o277 = o276;
    o96.o127.o129.o279 = o278;
    o96.o127.o129.o281 = o280;
    o96.o127.o130.o283 = o282;
    o96.o127.o130.o285 = o284;
    o96.o127.o130.o287 = o286;
    o96.o127.o130.o289 = o288;
    o96.o127.o130.o291 = o290;
    o96.o127.o130.o293 = o292;
    o96.o127.o130.o295 = o294;
    o96.o127.o130.o297 = o296;
    o96.o127.o130.o299 = o298;
    o96.o127.o130.o301 = o300;
    o96.o127.o130.o303 = o302;
    o96.o127.o130.o305 = o304;
    o96.o127.o130.o307 = o306;
    o96.o127.o130.o309 = o308;
    o96.o127.o130.o311 = o310;
    o96.o127.o130.o313 = o312;
    o96.o127.o130.o315 = o314;
    o96.o127.o130.o317 = o316;
    o96.o127.o130.o319 = o318;
    o96.o127.o130.o321 = o320;
    o96.o127.o130.o323 = o322;
    o96.o127.o130.o325 = o324
})();
o96.o328 = [];
(function () {
    var o97 = o96.o124.o125.o183,
        o98 = o96.o124.o125.o191,
        o99 = o96.o124.o125.o193,
        o105 = o96.o126.o197,
        o106 = o96.o126.Math.o202,
        o107 = o96.o126.Math.o204,
        o137 = o96.o126.Math.o206,
        o139 = o96.o126.Math.o208,
        o141 = o96.o124.o131,
        o143 = o96.o124.o132,
        o145 = o96.o124.o133,
        o147 = o96.o124.o134,
        o149 = o96.o124.o135,
        o151 = o96.o124.o136,
        o153 = o96.o124.o138,
        o155 = o96.o124.o140,
        o157 = o96.o124.o142,
        o159 = o96.o124.o144,
        o161 = o96.o124.o146,
        o163 = o96.o124.o148,
        o165 = o96.o124.o150,
        o167 = o96.o124.o152,
        o67 = o96.o124.o154,
        o170 = o96.o124.o156,
        o172 = o96.o124.o158,
        o174 = o96.o124.o160,
        o176 = o96.o124.o162,
        o178 = o96.o124.o164,
        o180 = o96.o124.o166,
        o182 = o96.o124.o168,
        o184 = o96.o124.o169,
        o186 = o96.o124.o171,
        o188 = o96.o124.o173,
        o190 = o96.o124.o175,
        o192 = o96.o124.o177,
        o194 = o96.o124.o179,
        o196 = o96.o124.o181,
        o198 = o96.o124.o326;
    o141.o131 = function () {
        this.o329 = new o139;
        this.o330 = new o139
    };
    o141.prototype.o331 = function () {
        var o200 = this.o330.o105 - this.o329.o105;
        return o200 = (o200 = this.o330.o214 - this.o329.o214 >= 0 && o200 >= 0) && this.o329.o331() && this.o330.o331()
    };
    o141.prototype.o332 = function () {
        return new o139((this.o329.o214 + this.o330.o214) / 2, (this.o329.o105 + this.o330.o105) / 2)
    };
    o141.prototype.o333 = function () {
        return new o139((this.o330.o214 - this.o329.o214) / 2, (this.o330.o105 - this.o329.o105) / 2)
    };
    o141.prototype.o334 = function (o200) {
        var o93 = true;
        return o93 = (o93 = (o93 = (o93 = o93 && this.o329.o214 <= o200.o329.o214) && this.o329.o105 <= o200.o329.o105) && o200.o330.o214 <= this.o330.o214) && o200.o330.o105 <= this.o330.o105
    };
    o141.prototype.o335 = function (o200, o93) {
        var o203 = -Number.o337,
            o205 = Number.o337,
            o207 = o93.o338.o214,
            o37 = o93.o338.o105,
            o210 = o93.o339.o214 - o93.o338.o214,
            o212 = o93.o339.o105 - o93.o338.o105,
            o214 = Math.abs(o212),
            o216 = o200.o340,
            o218 = 0,
            o220 = 0,
            o222 = o218 = 0;
        o222 = 0;
        if (Math.abs(o210) < Number.MIN_VALUE) {
            if (o207 < this.o329.o214 || this.o330.o214 < o207) return false
        } else {
            o218 = 1 / o210;
            o220 = (this.o329.o214 - o207) * o218;
            o218 = (this.o330.o214 - o207) * o218;
            o222 = -1;
            if (o220 > o218) {
                o222 = o220;
                o220 = o218;
                o218 = o222;
                o222 = 1
            }
            if (o220 > o203) {
                o216.o214 = o222;
                o216.o105 = 0;
                o203 = o220
            }
            o205 = Math.o342(o205, o218);
            if (o203 > o205) return false
        } if (o214 < Number.MIN_VALUE) {
            if (o37 < this.o329.o105 || this.o330.o105 < o37) return false
        } else {
            o218 = 1 / o212;
            o220 = (this.o329.o105 - o37) * o218;
            o218 = (this.o330.o105 - o37) * o218;
            o222 = -1;
            if (o220 > o218) {
                o222 = o220;
                o220 = o218;
                o218 = o222;
                o222 = 1
            }
            if (o220 > o203) {
                o216.o105 = o222;
                o216.o214 = 0;
                o203 = o220
            }
            o205 = Math.o342(o205, o218);
            if (o203 > o205) return false
        }
        o200.o343 = o203;
        return true
    };
    o141.prototype.o344 = function (o200) {
        var o93 = o200.o329.o105 - this.o330.o105,
            o203 = this.o329.o105 - o200.o330.o105;
        if (o200.o329.o214 - this.o330.o214 > 0 || o93 > 0) return false;
        if (this.o329.o214 - o200.o330.o214 > 0 || o203 > 0) return false;
        return true
    };
    o141.o345 = function (o200, o93) {
        var o203 = new o141;
        o203.o345(o200, o93);
        return o203
    };
    o141.prototype.o345 = function (o200, o93) {
        this.o329.o214 = Math.o342(o200.o329.o214, o93.o329.o214);
        this.o329.o105 = Math.o342(o200.o329.o105, o93.o329.o105);
        this.o330.o214 = Math.o346(o200.o330.o214, o93.o330.o214);
        this.o330.o105 = Math.o346(o200.o330.o105, o93.o330.o105)
    };
    o143.o132 = function () {};
    o143.prototype.o347 = function () {
        return (this.value & 1) == 0
    };
    o143.prototype.o348 = function () {
        return (this.value & 1) == 1
    };
    o143.prototype.o349 = function (o200) {
        var o93 = this.value,
            o203 = this.o350,
            o205 = this.o351;
        this.value = o200.value;
        this.o350 = o200.o350;
        this.o351 = o200.o351;
        o200.value = o93;
        o200.o350 = o203;
        o200.o351 = o205
    };
    o145.o133 = function () {};
    o145.prototype.o133 = function () {
        this.o352 = new o123;
        this.o352[0] = 0;
        this.o352[1] = 0;
        this.o353 = new o123;
        this.o353[0] = 0;
        this.o353[1] = 0
    };
    o147.o134 = function () {};
    o147.o354 = function (o200, o93, o203, o205) {
        if (o205 === undefined) o205 = 0;
        var o207, o37 = 0;
        o207 = o93[0];
        var o210 = o207.o210;
        o207 = o93[1];
        var o212 = o207.o210,
            o214 = o203.o214 * o210.o214 + o203.o105 * o210.o105 - o205;
        o207 = o203.o214 * o212.o214 + o203.o105 * o212.o105 - o205;
        o214 <= 0 && o200[o37++].Set(o93[0]);
        o207 <= 0 && o200[o37++].Set(o93[1]);
        if (o214 * o207 < 0) {
            o203 = o214 / (o214 - o207);
            o207 = o200[o37];
            o207 = o207.o210;
            o207.o214 = o210.o214 + o203 * (o212.o214 - o210.o214);
            o207.o105 = o210.o105 + o203 * (o212.o105 - o210.o105);
            o207 = o200[o37];
            o207.o356 = (o214 > 0 ? o93[0] : o93[1]).o356;
            ++o37
        }
        return o37
    };
    o147.o357 = function (o200, o93, o203, o205, o207) {
            if (o203 === undefined) o203 = 0;
            parseInt(o200.o358);
            var o37 = o200.o359;
            o200 = o200.o360;
            var o210 = parseInt(o205.o358),
                o212 = o205.o359,
                o214, o216;
            o214 = o93.o170;
            o216 = o200[o203];
            o200 = o214.o361.o214 * o216.o214 + o214.o362.o214 * o216.o105;
            o205 = o214.o361.o105 * o216.o214 + o214.o362.o105 * o216.o105;
            o214 = o207.o170;
            var o218 = o214.o361.o214 * o200 + o214.o361.o105 * o205;
            o214 = o214.o362.o214 * o200 + o214.o362.o105 * o205;
            for (var o220 = 0, o222 = Number.o337, o224 = 0; o224 < o210; ++o224) {
                o216 = o212[o224];
                o216 = o216.o214 * o218 + o216.o105 * o214;
                if (o216 < o222) {
                    o222 = o216;
                    o220 = o224
                }
            }
            o216 = o37[o203];
            o214 = o93.o170;
            o203 = o93.o363.o214 + (o214.o361.o214 * o216.o214 + o214.o362.o214 * o216.o105);
            o93 = o93.o363.o105 + (o214.o361.o105 * o216.o214 + o214.o362.o105 * o216.o105);
            o216 = o212[o220];
            o214 = o207.o170;
            o37 = o207.o363.o214 + (o214.o361.o214 * o216.o214 + o214.o362.o214 * o216.o105);
            o207 = o207.o363.o105 + (o214.o361.o105 * o216.o214 + o214.o362.o105 * o216.o105);
            o37 -= o203;
            o207 -= o93;
            return o37 * o200 + o207 * o205
    };
    o147.o364 = function (o200, o93, o203, o205, o207) {
        var o37 = parseInt(o93.o358),
            o210 = o93.o360,
            o212, o214;
        o214 = o207.o170;
        o212 = o205.o365;
        var o216 = o207.o363.o214 + (o214.o361.o214 * o212.o214 + o214.o362.o214 * o212.o105),
            o218 = o207.o363.o105 + (o214.o361.o105 * o212.o214 + o214.o362.o105 * o212.o105);
        o214 = o203.o170;
        o212 = o93.o365;
        o216 -= o203.o363.o214 + (o214.o361.o214 * o212.o214 + o214.o362.o214 * o212.o105);
        o218 -= o203.o363.o105 + (o214.o361.o105 * o212.o214 + o214.o362.o105 * o212.o105);
        o214 = o216 * o203.o170.o361.o214 + o218 * o203.o170.o361.o105;
        o218 = o216 * o203.o170.o362.o214 + o218 * o203.o170.o362.o105;
        o216 = 0;
        for (var o220 = -Number.o337, o222 = 0; o222 < o37; ++o222) {
            o212 = o210[o222];
            o212 = o212.o214 * o214 + o212.o105 * o218;
            if (o212 > o220) {
                o220 = o212;
                o216 = o222
            }
        }
        o210 = o147.o357(o93, o203, o216, o205, o207);
        o212 = parseInt(o216 - 1 >= 0 ? o216 - 1 : o37 - 1);
        o214 = o147.o357(o93, o203, o212, o205, o207);
        o218 = parseInt(o216 + 1 < o37 ? o216 + 1 : 0);
        o220 = o147.o357(o93, o203, o218, o205, o207);
        var o224 = o222 = 0,
            o226 = 0;
        if (o214 > o210 && o214 > o220) {
            o226 = -1;
            o222 = o212;
            o224 = o214
        } else if (o220 > o210) {
            o226 = 1;
            o222 = o218;
            o224 = o220
        } else {
            o200[0] = o216;
            return o210
        }
        for (;;) {
            o216 = o226 == -1 ? o222 - 1 >= 0 ? o222 - 1 : o37 - 1 : o222 + 1 < o37 ? o222 + 1 : 0;
            o210 = o147.o357(o93, o203, o216, o205, o207);
            if (o210 > o224) {
                o222 = o216;
                o224 = o210
            } else break
        }
        o200[0] = o222;
        return o224
    };
    o147.o366 = function (o200, o93, o203, o205, o207, o37) {
        if (o205 === undefined) o205 = 0;
        parseInt(o93.o358);
        var o210 = o93.o360,
            o212 = parseInt(o207.o358);
        o93 = o207.o359;
        o207 = o207.o360;
        var o214;
        o214 = o203.o170;
        o203 = o210[o205];
        o210 = o214.o361.o214 * o203.o214 + o214.o362.o214 * o203.o105;
        var o216 = o214.o361.o105 * o203.o214 + o214.o362.o105 * o203.o105;
        o214 = o37.o170;
        o203 = o214.o361.o214 * o210 + o214.o361.o105 * o216;
        o216 = o214.o362.o214 * o210 + o214.o362.o105 * o216;
        o210 = o203;
        o214 = 0;
        for (var o218 = Number.o337, o220 = 0; o220 < o212; ++o220) {
            o203 = o207[o220];
            o203 = o210 * o203.o214 + o216 * o203.o105;
            if (o203 < o218) {
                o218 = o203;
                o214 = o220
            }
        }
        o207 = parseInt(o214);
        o210 = parseInt(o207 + 1 < o212 ? o207 + 1 : 0);
        o212 = o200[0];
        o203 = o93[o207];
        o214 = o37.o170;
        o212.o210.o214 = o37.o363.o214 + (o214.o361.o214 * o203.o214 + o214.o362.o214 * o203.o105);
        o212.o210.o105 = o37.o363.o105 + (o214.o361.o105 * o203.o214 + o214.o362.o105 * o203.o105);
        o212.o356.o367.o368 = o205;
        o212.o356.o367.o369 = o207;
        o212.o356.o367.o370 = 0;
        o212 = o200[1];
        o203 = o93[o210];
        o214 = o37.o170;
        o212.o210.o214 = o37.o363.o214 + (o214.o361.o214 * o203.o214 + o214.o362.o214 * o203.o105);
        o212.o210.o105 = o37.o363.o105 + (o214.o361.o105 * o203.o214 + o214.o362.o105 * o203.o105);
        o212.o356.o367.o368 = o205;
        o212.o356.o367.o369 = o210;
        o212.o356.o367.o370 = 1
    };
    o147.o371 = function () {
        var o200 = new o122(2);
        o200[0] = new o194;
        o200[1] = new o194;
        return o200
    };
    o147.o372 = function (o200, o93, o203, o205, o207) {
        var o37;
        o200.o373 = 0;
        var o210 = o93.o374 + o205.o374;
        o37 = 0;
        o147.o375[0] = o37;
        var o212 = o147.o364(o147.o375, o93, o203, o205, o207);
        o37 = o147.o375[0];
        if (!(o212 > o210)) {
            var o214 = 0;
            o147.o376[0] = o214;
            var o216 = o147.o364(o147.o376,
                o205, o207, o93, o203);
            o214 = o147.o376[0];
            if (!(o216 > o210)) {
                var o218 = 0,
                    o220 = 0;
                if (o216 > 0.98 * o212 + 0.0010) {
                    o212 = o205;
                    o205 = o93;
                    o93 = o207;
                    o203 = o203;
                    o218 = o214;
                    o200.o377 = o67.o378;
                    o220 = 1
                } else {
                    o212 = o93;
                    o205 = o205;
                    o93 = o203;
                    o203 = o207;
                    o218 = o37;
                    o200.o377 = o67.o379;
                    o220 = 0
                }
                o37 = o147.o380;
                o147.o366(o37, o212, o93, o218, o205, o203);
                o214 = parseInt(o212.o358);
                o207 = o212.o359;
                o212 = o207[o218];
                var o222;
                o222 = o218 + 1 < o214 ? o207[parseInt(o218 + 1)] : o207[0];
                o218 = o147.o381;
                o218.Set(o222.o214 - o212.o214, o222.o105 - o212.o105);
                o218.o382();
                o207 = o147.o383;
                o207.o214 = o218.o105;
                o207.o105 = -o218.o214;
                o205 = o147.o384;
                o205.Set(0.5 * (o212.o214 + o222.o214), 0.5 * (o212.o105 + o222.o105));
                o216 = o147.o385;
                o214 = o93.o170;
                o216.o214 = o214.o361.o214 * o218.o214 + o214.o362.o214 * o218.o105;
                o216.o105 = o214.o361.o105 * o218.o214 + o214.o362.o105 * o218.o105;
                var o224 = o147.o386;
                o224.o214 = -o216.o214;
                o224.o105 = -o216.o105;
                o218 = o147.o387;
                o218.o214 = o216.o105;
                o218.o105 = -o216.o214;
                var o226 = o147.o388,
                    o228 = o147.o389;
                o226.o214 = o93.o363.o214 + (o214.o361.o214 * o212.o214 + o214.o362.o214 * o212.o105);
                o226.o105 = o93.o363.o105 + (o214.o361.o105 * o212.o214 + o214.o362.o105 * o212.o105);
                o228.o214 = o93.o363.o214 + (o214.o361.o214 * o222.o214 + o214.o362.o214 * o222.o105);
                o228.o105 = o93.o363.o105 + (o214.o361.o105 * o222.o214 + o214.o362.o105 * o222.o105);
                o93 = o218.o214 * o226.o214 + o218.o105 * o226.o105;
                o214 = o216.o214 * o228.o214 + o216.o105 * o228.o105 + o210;
                o222 = o147.o390;
                o212 = o147.o391;
                o228 = 0;
                o228 = o147.o354(o222, o37, o224, -o216.o214 * o226.o214 - o216.o105 * o226.o105 + o210);
                if (!(o228 < 2)) {
                    o228 = o147.o354(o212, o222, o216, o214);
                    if (!(o228 < 2)) {
                        o200.o392.o393(o207);
                        o200.o394.o393(o205);
                        for (o205 = o207 = 0; o205 < o105.o395; ++o205) {
                            o37 = o212[o205];
                            if (o218.o214 * o37.o210.o214 + o218.o105 * o37.o210.o105 - o93 <= o210) {
                                o216 = o200.o396[o207];
                                o214 = o203.o170;
                                o224 = o37.o210.o214 - o203.o363.o214;
                                o226 = o37.o210.o105 - o203.o363.o105;
                                o216.o394.o214 = o224 * o214.o361.o214 + o226 * o214.o361.o105;
                                o216.o394.o105 = o224 * o214.o362.o214 + o226 * o214.o362.o105;
                                o216.o397.Set(o37.o356);
                                o216.o397.o367.o398 = o220;
                                ++o207
                            }
                        }
                        o200.o373 = o207
                    }
                }
            }
        }
    };
    o147.o399 = function (o200, o93, o203, o205, o207) {
        o200.o373 = 0;
        var o37, o210;
        o37 = o203.o170;
        o210 = o93.o400;
        var o212 = o203.o363.o214 + (o37.o361.o214 * o210.o214 + o37.o362.o214 * o210.o105);
        o203 = o203.o363.o105 + (o37.o361.o105 * o210.o214 + o37.o362.o105 * o210.o105);
        o37 = o207.o170;
        o210 = o205.o400;
        o212 = o207.o363.o214 + (o37.o361.o214 * o210.o214 + o37.o362.o214 * o210.o105) - o212;
        o207 = o207.o363.o105 + (o37.o361.o105 * o210.o214 + o37.o362.o105 * o210.o105) - o203;
        o37 = o93.o374 + o205.o374;
        if (!(o212 * o212 + o207 * o207 > o37 * o37)) {
            o200.o377 = o67.o401;
            o200.o394.o393(o93.o400);
            o200.o392.o402();
            o200.o373 = 1;
            o200.o396[0].o394.o393(o205.o400);
            o200.o396[0].o397.key = 0
        }
    };
    o147.o404 = function (o200, o93, o203, o205, o207) {
        var o37 = o200.o373 = 0,
            o210 = 0,
            o212, o214;
        o214 = o207.o170;
        o212 = o205.o400;
        var o216 = o207.o363.o105 + (o214.o361.o105 * o212.o214 + o214.o362.o105 * o212.o105);
        o37 = o207.o363.o214 + (o214.o361.o214 * o212.o214 + o214.o362.o214 * o212.o105) - o203.o363.o214;
        o210 = o216 - o203.o363.o105;
        o214 = o203.o170;
        o203 = o37 * o214.o361.o214 + o210 * o214.o361.o105;
        o214 = o37 * o214.o362.o214 + o210 * o214.o362.o105;
        var o218 = 0;
        o216 = -Number.o337;
        o207 = o93.o374 + o205.o374;
        var o220 = parseInt(o93.o358),
            o222 = o93.o359;
        o93 = o93.o360;
        for (var o224 = 0; o224 < o220; ++o224) {
            o212 = o222[o224];
            o37 = o203 - o212.o214;
            o210 = o214 - o212.o105;
            o212 = o93[o224];
            o37 = o212.o214 * o37 + o212.o105 * o210;
            if (o37 > o207) return;
            if (o37 > o216) {
                o216 = o37;
                o218 = o224
            }
        }
        o37 = parseInt(o218);
        o210 = parseInt(o37 + 1 < o220 ? o37 + 1 : 0);
        o212 = o222[o37];
        o222 = o222[o210];
        if (o216 < Number.MIN_VALUE) {
            o200.o373 = 1;
            o200.o377 = o67.o379;
            o200.o392.o393(o93[o218]);
            o200.o394.o214 = 0.5 * (o212.o214 + o222.o214);
            o200.o394.o105 = 0.5 * (o212.o105 + o222.o105)
        } else {
            o216 = (o203 - o222.o214) * (o212.o214 - o222.o214) + (o214 - o222.o105) * (o212.o105 - o222.o105);
            if ((o203 - o212.o214) * (o222.o214 - o212.o214) + (o214 - o212.o105) * (o222.o105 - o212.o105) <= 0) {
                if ((o203 - o212.o214) * (o203 - o212.o214) + (o214 - o212.o105) * (o214 - o212.o105) > o207 * o207) return;
                o200.o373 = 1;
                o200.o377 = o67.o379;
                o200.o392.o214 = o203 - o212.o214;
                o200.o392.o105 = o214 - o212.o105;
                o200.o392.o382();
                o200.o394.o393(o212)
            } else if (o216 <= 0) {
                if ((o203 - o222.o214) * (o203 - o222.o214) + (o214 - o222.o105) * (o214 - o222.o105) > o207 * o207) return;
                o200.o373 = 1;
                o200.o377 = o67.o379;
                o200.o392.o214 = o203 - o222.o214;
                o200.o392.o105 = o214 - o222.o105;
                o200.o392.o382();
                o200.o394.o393(o222)
            } else {
                o218 = 0.5 * (o212.o214 + o222.o214);
                o212 = 0.5 * (o212.o105 + o222.o105);
                o216 = (o203 - o218) * o93[o37].o214 + (o214 - o212) * o93[o37].o105;
                if (o216 > o207) return;
                o200.o373 = 1;
                o200.o377 = o67.o379;
                o200.o392.o214 = o93[o37].o214;
                o200.o392.o105 = o93[o37].o105;
                o200.o392.o382();
                o200.o394.Set(o218, o212)
            }
        }
        o200.o396[0].o394.o393(o205.o400);
        o200.o396[0].o397.key = 0
    };
    o147.o344 = function (o200, o93) {
        var o203 = o93.o329,
            o205 = o200.o330,
            o207 = o203.o214 - o205.o214,
            o37 = o203.o105 - o205.o105;
        o203 = o200.o329;
        o205 = o93.o330;
        var o210 = o203.o105 - o205.o105;
        if (o207 > 0 || o37 > 0) return false;
        if (o203.o214 - o205.o214 > 0 || o210 > 0) return false;
        return true
    };
    o96.o328.push(function () {
        o96.o124.o134.o380 = o147.o371();
        o96.o124.o134.o390 = o147.o371();
        o96.o124.o134.o391 = o147.o371();
        o96.o124.o134.o375 = new o123(1);
        o96.o124.o134.o376 = new o123(1);
        o96.o124.o134.o381 = new o139;
        o96.o124.o134.o383 = new o139;
        o96.o124.o134.o384 = new o139;
        o96.o124.o134.o387 = new o139;
        o96.o124.o134.o385 = new o139;
        o96.o124.o134.o386 = new o139;
        o96.o124.o134.o388 = new o139;
        o96.o124.o134.o389 = new o139;
        o96.o124.o134.o405 = new o139;
        o96.o124.o134.o406 = 255
    });
    o149.o135 = function () {
        this.o367 = new o196
    };
    o149.prototype.o135 = function () {
        this.o367.o407 = this
    };
    o149.prototype.Set = function (o200) {
        this.key = o200.o408
    };
    o149.prototype.o409 = function () {
        var o200 = new o149;
        o200.key = this.key;
        return o200
    };
    Object.defineProperty(o149.prototype, "key", {
        enumerable: false,
        configurable: true,
        get: function () {
            return this.o408
        }
    });
    Object.defineProperty(o149.prototype, "key", {
        enumerable: false,
        configurable: true,
        set: function (o200) {
            if (o200 === undefined) o200 = 0;
            this.o408 = o200;
            this.o367.o412 = this.o408 & 255;
            this.o367.o413 = (this.o408 & 65280) >> 8 & 255;
            this.o367.o414 = (this.o408 & 16711680) >> 16 & 255;
            this.o367.o415 = (this.o408 & 4278190080) >> 24 & 255
        }
    });
    o151.o136 = function () {
        this.o363 = new o139;
        this.o416 = new o139;
        this.o340 = new o139;
        this.o356 = new o149
    };
    o153.o138 = function () {};
    o153.o417 = function (o200, o93, o203) {
        ++o153.o418;
        var o205 = o203.o419,
            o207 = o203.o420,
            o37 = o203.o421,
            o210 = o203.o422,
            o212 = o153.o423;
        o212.o424(o93, o205, o37, o207, o210);
        var o214 = o212.o359,
            o216 = o153.o425,
            o218 = o153.o426,
            o220 = 0;
        o212.o427().o428();
        for (var o222 = 0, o224, o226 = 0; o226 < 20;) {
            o220 = o212.o429;
            for (o222 = 0; o222 < o220; o222++) {
                o216[o222] = o214[o222].o430;
                o218[o222] = o214[o222].o431
            }
            switch (o212.o429) {
            case 1:
                break;
            case 2:
                o212.o432();
                break;
            case 3:
                o212.o433();
                break;
            default:
                o105.o434(false)
            }
            if (o212.o429 == 3) break;
            o224 = o212.o427();
            o224.o428();
            o222 = o212.o435();
            if (o222.o428() < Number.MIN_VALUE * Number.MIN_VALUE) break;
            o224 = o214[o212.o429];
            o224.o430 = o205.o436(o106.o437(o37.o170, o222.o438()));
            o224.o439 = o106.o440(o37, o205.o441(o224.o430));
            o224.o431 = o207.o436(o106.o437(o210.o170, o222));
            o224.o442 = o106.o440(o210, o207.o441(o224.o431));
            o224.o106 = o106.o443(o224.o442, o224.o439);
            ++o226;
            ++o153.o444;
            var o228 = false;
            for (o222 = 0; o222 < o220; o222++)
                if (o224.o430 == o216[o222] && o224.o431 == o218[o222]) {
                    o228 = true;
                    break
                }
            if (o228) break;
            ++o212.o429
        }
        o153.o445 = o106.o446(o153.o445, o226);
        o212.o447(o200.o448, o200.o449);
        o200.o450 = o106.o443(o200.o448,
            o200.o449).o451();
        o200.o452 = o226;
        o212.o453(o93);
        if (o203.o454) {
            o93 = o205.o374;
            o207 = o207.o374;
            if (o200.o450 > o93 + o207 && o200.o450 > Number.MIN_VALUE) {
                o200.o450 -= o93 + o207;
                o203 = o106.o443(o200.o449, o200.o448);
                o203.o382();
                o200.o448.o214 += o93 * o203.o214;
                o200.o448.o105 += o93 * o203.o105;
                o200.o449.o214 -= o207 * o203.o214;
                o200.o449.o105 -= o207 * o203.o105
            } else {
                o224 = new o139;
                o224.o214 = 0.5 * (o200.o448.o214 + o200.o449.o214);
                o224.o105 = 0.5 * (o200.o448.o105 + o200.o449.o105);
                o200.o448.o214 = o200.o449.o214 = o224.o214;
                o200.o448.o105 = o200.o449.o105 = o224.o105;
                o200.o450 = 0
            }
        }
    };
    o96.o328.push(function () {
        o96.o124.o138.o423 = new o182;
        o96.o124.o138.o425 = new o123(3);
        o96.o124.o138.o426 = new o123(3)
    });
    o155.o140 = function () {};
    o157.o142 = function () {
        this.o448 = new o139;
        this.o449 = new o139
    };
    o159.o144 = function () {};
    o159.prototype.Set = function (o200) {
        switch (o200.o455()) {
        case K.e_circleShape:
            o200 = o200 instanceof o97 ? o200 : null;
            this.o359 = new o122(1, true);
            this.o359[0] = o200.o400;
            this.o429 = 1;
            this.o374 = o200.o374K.e_circleShape:
            b = b instanceof F ? b : null;
            this.m_vertices = new Vector(1, true);
            this.m_vertices[0] = b.m_p;
            this.m_count = 1;
            this.m_radius = b.m_radiuso99.o456:
            b = b instanceof F ? b : null;
            this.m_vertices = new Vector(1, true);
            this.m_vertices[0] = b.m_p;
            this.m_count = 1;
            this.m_radius = b.m_radius;
            break;
        case K.e_polygonShape:
            o200 = o200 instanceof o98 ? o200 : null;
            this.o359 = o200.o359;
            this.o429 = o200.o358;
            this.o374 = o200.o374K.e_polygonShape:
            b = b instanceof G ? b : null;
            this.m_vertices = b.m_vertices;
            this.m_count = b.m_vertexCount;
            this.m_radius = b.m_radiuso99.o457:
            b = b instanceof G ? b : null;
            this.m_vertices = b.m_vertices;
            this.m_count = b.m_vertexCount;
            this.m_radius = b.m_radius;
            break;
        default:
            o105.o434(false)
        }
    };
    o159.prototype.o436 = function (o200) {
        for (var o93 = 0, o203 = this.o359[0].o214 * o200.o214 + this.o359[0].o105 * o200.o105, o205 = 1; o205 < this.o429; ++o205) {
            var o207 = this.o359[o205].o214 * o200.o214 + this.o359[o205].o105 * o200.o105;
            if (o207 > o203) {
                o93 = o205;
                o203 = o207
            }
        }
        return o93
    };
    o159.prototype.o458 = function (o200) {
        for (var o93 = 0, o203 = this.o359[0].o214 * o200.o214 + this.o359[0].o105 * o200.o105, o205 = 1; o205 < this.o429; ++o205) {
            var o207 = this.o359[o205].o214 * o200.o214 + this.o359[o205].o105 * o200.o105;
            if (o207 > o203) {
                o93 = o205;
                o203 = o207
            }
        }
        return this.o359[o93]
    };
    o159.prototype.o459 = function () {
        return this.o429
    };
    o159.prototype.o441 = function (o200) {
        if (o200 === undefined) o200 = 0;
        o105.o434(0 <= o200 && o200 < this.o429);
        return this.o359[o200]
    };
    o161.o146 = function () {};
    o161.prototype.o146 = function () {
        this.o460 = this.o461 = null;
        this.o462 = this.o463 = 0
    };
    o161.prototype.o464 = function (o200, o93) {
        var o203 = this.o465(),
            o205 = o105.o466,
            o207 = o105.o466;
        o203.o467.o329.o214 = o200.o329.o214 - o205;
        o203.o467.o329.o105 = o200.o329.o105 - o207;
        o203.o467.o330.o214 = o200.o330.o214 + o205;
        o203.o467.o330.o105 = o200.o330.o105 + o207;
        o203.o468 = o93;
        this.o469(o203);
        return o203
    };
    o161.prototype.o470 = function (o200) {
        this.o471(o200);
        this.o472(o200)
    };
    o161.prototype.o473 = function (o200, o93, o203) {
        o105.o434(o200.o474());
        if (o200.o467.o334(o93)) return false;
        this.o471(o200);
        var o205 = o105.o466 + o105.o475 * (o203.o214 > 0 ? o203.o214 : -o203.o214);
        o203 = o105.o466 + o105.o475 * (o203.o105 > 0 ? o203.o105 : -o203.o105);
        o200.o467.o329.o214 = o93.o329.o214 - o205;
        o200.o467.o329.o105 = o93.o329.o105 - o203;
        o200.o467.o330.o214 = o93.o330.o214 + o205;
        o200.o467.o330.o105 = o93.o330.o105 + o203;
        this.o469(o200);
        return true
    };
    o161.prototype.o476 = function (o200) {
        if (o200 === undefined) o200 = 0;
        if (this.o461 != null) for (var o93 = 0; o93 < o200; o93++) {
                for (var o203 = this.o461, o205 = 0; o203.o474() == false;) {
                    o203 = this.o463 >> o205 & 1 ? o203.o477 : o203.o478;
                    o205 = o205 + 1 & 31
                }++this.o463;
                this.o471(o203);
                this.o469(o203)
            }
    };
    o161.prototype.o479 = function (o200) {
        return o200.o467
    };
    o161.prototype.o480 = function (o200) {
        return o200.o468
    };
    o161.prototype.o481 = function (o200, o93) {
        if (this.o461 != null) {
            var o203 = new o122,
                o205 = 0;
            for (o203[o205++] = this.o461; o205 > 0;) {
                var o207 = o203[--o205];
                if (o207.o467.o344(o93))
                    if (o207.o474()) {
                        if (!o200(o207)) break
                    } else {
                        o203[o205++] = o207.o478;
                        o203[o205++] = o207.o477
                    }
            }
        }
    };
    o161.prototype.o335 = function (o200, o93) {
        if (this.o461 != null) {
            var o203 = o93.o338,
                o205 = o93.o339,
                o207 = o106.o443(o203, o205);
            o207.o382();
            o207 = o106.o482(1, o207);
            var o37 = o106.o483(o207),
                o210 = o93.o484,
                o212 = new o141,
                o214 = 0,
                o216 = 0;
            o214 = o203.o214 + o210 * (o205.o214 - o203.o214);
            o216 = o203.o105 + o210 * (o205.o105 - o203.o105);
            o212.o329.o214 = Math.o342(o203.o214, o214);
            o212.o329.o105 = Math.o342(o203.o105, o216);
            o212.o330.o214 = Math.o346(o203.o214, o214);
            o212.o330.o105 = Math.o346(o203.o105, o216);
            var o218 = new o122,
                o220 = 0;
            for (o218[o220++] = this.o461; o220 > 0;) {
                o210 = o218[--o220];
                if (o210.o467.o344(o212) != false) {
                    o214 = o210.o467.o332();
                    o216 = o210.o467.o333();
                    if (!(Math.abs(o207.o214 * (o203.o214 - o214.o214) + o207.o105 * (o203.o105 - o214.o105)) - o37.o214 * o216.o214 - o37.o105 * o216.o105 > 0))
                        if (o210.o474()) {
                            o214 = new o174;
                            o214.o338 = o93.o338;
                            o214.o339 = o93.o339;
                            o214.o484 = o93.o484;
                            o210 = o200(o214, o210);
                            if (o210 == 0) break;
                            if (o210 > 0) {
                                o214 = o203.o214 + o210 * (o205.o214 - o203.o214);
                                o216 = o203.o105 + o210 * (o205.o105 - o203.o105);
                                o212.o329.o214 = Math.o342(o203.o214, o214);
                                o212.o329.o105 = Math.o342(o203.o105, o216);
                                o212.o330.o214 = Math.o346(o203.o214, o214);
                                o212.o330.o105 = Math.o346(o203.o105, o216)
                            }
                        } else {
                            o218[o220++] = o210.o478;
                            o218[o220++] = o210.o477
                        }
                }
            }
        }
    };
    o161.prototype.o465 = function () {
        if (this.o460) {
            var o200 = this.o460;
            this.o460 = o200.o485;
            o200.o485 = null;
            o200.o478 = null;
            o200.o477 = null;
            return o200
        }
        return new o165
    };
    o161.prototype.o472 = function (o200) {
        o200.o485 = this.o460;
        this.o460 = o200
    };
    o161.prototype.o469 = function (o200) {
        ++this.o462;
        if (this.o461 == null) {
            this.o461 = o200;
            this.o461.o485 = null
        } else {
            var o93 = o200.o467.o332(),
                o203 = this.o461;
            if (o203.o474() == false) {
                do {
                    var o205 = o203.o478;
                    o203 = o203.o477;
                    o203 = Math.abs((o205.o467.o329.o214 + o205.o467.o330.o214) / 2 - o93.o214) + Math.abs((o205.o467.o329.o105 + o205.o467.o330.o105) / 2 - o93.o105) < Math.abs((o203.o467.o329.o214 + o203.o467.o330.o214) / 2 - o93.o214) + Math.abs((o203.o467.o329.o105 + o203.o467.o330.o105) / 2 - o93.o105) ? o205 : o203
                } while (o203.o474() == false)
            }
            o93 = o203.o485;
            o205 = this.o465();
            o205.o485 = o93;
            o205.o468 = null;
            o205.o467.o345(o200.o467, o203.o467);
            if (o93) {
                if (o203.o485.o478 == o203) o93.o478 = o205;
                else o93.o477 = o205;
                o205.o478 = o203;
                o205.o477 = o200;
                o203.o485 = o205;
                o200.o485 = o205;
                do {
                    if (o93.o467.o334(o205.o467)) break;
                    o93.o467.o345(o93.o478.o467, o93.o477.o467);
                    o205 = o93;
                    o93 = o93.o485
                } while (o93)
            } else {
                o205.o478 = o203;
                o205.o477 = o200;
                o203.o485 = o205;
                this.o461 = o200.o485 = o205
            }
        }
    };
    o161.prototype.o471 = function (o200) {
        if (o200 == this.o461) this.o461 = null;
        else {
            var o93 = o200.o485,
                o203 = o93.o485;
            o200 = o93.o478 == o200 ? o93.o477 : o93.o478;
            if (o203) {
                if (o203.o478 == o93) o203.o478 = o200;
                else o203.o477 = o200;
                o200.o485 = o203;
                for (this.o472(o93); o203;) {
                    o93 = o203.o467;
                    o203.o467 = o141.o345(o203.o478.o467, o203.o477.o467);
                    if (o93.o334(o203.o467)) break;
                    o203 = o203.o485
                }
            } else {
                this.o461 = o200;
                o200.o485 = null;
                this.o472(o93)
            }
        }
    };
    o163.o148 = function () {
        this.o486 = new o161;
        this.o487 = new o122;
        this.o488 = new o122;
        this.o489 = 0
    };
    o163.prototype.o464 = function (o200, o93) {
        var o203 = this.o486.o464(o200, o93);
        ++this.o490;
        this.o491(o203);
        return o203
    };
    o163.prototype.o470 = function (o200) {
        this.o492(o200);
        --this.o490;
        this.o486.o470(o200)
    };
    o163.prototype.o473 = function (o200, o93, o203) {
        this.o486.o473(o200, o93, o203) && this.o491(o200)
    };
    o163.prototype.o344 = function (o200, o93) {
        var o203 = this.o486.o479(o200),
            o205 = this.o486.o479(o93);
        return o203.o344(o205)
    };
    o163.prototype.o480 = function (o200) {
        return this.o486.o480(o200)
    };
    o163.prototype.o479 = function (o200) {
        return this.o486.o479(o200)
    };
    o163.prototype.o493 = function () {
        return this.o490
    };
    o163.prototype.o494 = function (o200) {
        var o93 = this;
        var o203 = o93.o489 = 0,
            o205;
        for (o203 = 0; o203 < o93.o487.length; ++o203) {
            o205 = o93.o487[o203];
            var o207 = o93.o486.o479(o205);
            o93.o486.o481(function (o212) {
                    if (o212 == o205) return true;
                    if (o93.o489 == o93.o488.length) o93.o488[o93.o489] = new o167;
                    var o214 = o93.o488[o93.o489];
                    o214.o419 = o212 < o205 ? o212 : o205;
                    o214.o420 = o212 >= o205 ? o212 : o205;
                    ++o93.o489;
                    return true
                },
                o207)
        }
        for (o203 = o93.o487.length = 0; o203 < o93.o489;) {
            o207 = o93.o488[o203];
            var o37 = o93.o486.o480(o207.o419),
                o210 = o93.o486.o480(o207.o420);
            o200(o37, o210);
            for (++o203; o203 < o93.o489;) {
                o37 = o93.o488[o203];
                if (o37.o419 != o207.o419 || o37.o420 != o207.o420) break;
                ++o203
            }
        }
    };
    o163.prototype.o481 = function (o200, o93) {
        this.o486.o481(o200, o93)
    };
    o163.prototype.o335 = function (o200, o93) {
        this.o486.o335(o200, o93)
    };
    o163.prototype.o495 = function () {};
    o163.prototype.o476 = function (o200) {
        if (o200 === undefined) o200 = 0;
        this.o486.o476(o200)
    };
    o163.prototype.o491 = function (o200) {
            this.o487[this.o487.length] = o200
    };
    o163.prototype.o492 = function (o200) {
        this.o487.splice(parseInt(this.o487.indexOf(o200)), 1)
    };
    o163.prototype.o497 = function () {
        return 0
    };
    o163.o118 = {};
    o163.o118[o198] = true;
    o165.o150 = function () {
        this.o467 = new o141
    };
    o165.prototype.o474 = function () {
        return this.o478 == null
    };
    o167.o152 = function () {};
    o67.o154 = function () {
        this.o373 = 0
    };
    o67.prototype.o154 = function () {
        this.o396 = new o122(o105.o395);
        for (var o200 = 0; o200 < o105.o395; o200++) this.o396[o200] = new o170;
        this.o392 = new o139;
        this.o394 = new o139
    };
    o67.prototype.o498 = function () {
        for (var o200 = 0; o200 < o105.o395; o200++)(this.o396[o200] instanceof o170 ? this.o396[o200] : null).o498();
        this.o392.o402();
        this.o394.o402();
        this.o373 = this.o377 = 0
    };
    o67.prototype.Set = function (o200) {
        this.o373 = o200.o373;
        for (var o93 = 0; o93 < o105.o395; o93++)(this.o396[o93] instanceof o170 ? this.o396[o93] : null).Set(o200.o396[o93]);
        this.o392.o393(o200.o392);
        this.o394.o393(o200.o394);
        this.o377 = o200.o377
    };
    o67.prototype.o409 = function () {
        var o200 = new o67;
        o200.Set(this);
        return o200
    };
    o96.o328.push(function () {
        o96.o124.o154.o401 = 1;
        o96.o124.o154.o379 = 2;
        o96.o124.o154.o378 = 4
    });
    o170.o156 = function () {
        this.o394 = new o139;
        this.o397 = new o149
    };
    o170.prototype.o156 = function () {
        this.o498()
    };
    o170.prototype.o498 = function () {
        this.o394.o402();
        this.o499 = this.o500 = 0;
        this.o397.key = 0
    };
    o170.prototype.Set = function (o200) {
        this.o394.o393(o200.o394);
        this.o500 = o200.o500;
        this.o499 = o200.o499;
        this.o397.Set(o200.o397)
    };
    o172.o158 = function () {
        this.o139 = new o139
    };
    o172.prototype.o501 = function () {
        return this.o139
    };
    o172.prototype.o502 = function () {
        return this.o139
    };
    o174.o160 = function () {
        this.o338 = new o139;
        this.o339 = new o139
    };
    o174.prototype.o160 = function (o200, o93, o203) {
        if (o200 === undefined) o200 = null;
        if (o93 === undefined) o93 = null;
        if (o203 === undefined) o203 = 1;
        o200 && this.o338.o393(o200);
        o93 && this.o339.o393(o93);
        this.o484 = o203
    };
    o176.o162 = function () {
        this.o340 = new o139
    };
    o178.o164 = function () {
        this.o338 = new o139;
        this.o339 = new o139
    };
    o178.prototype.o503 = function (o200, o93, o203, o205) {
        if (o205 === undefined) o205 = 0;
        var o207 = o203.o338,
            o37 = o203.o339.o214 - o207.o214,
            o210 = o203.o339.o105 - o207.o105;
        o203 = this.o339.o105 - this.o338.o105;
        var o212 = -(this.o339.o214 - this.o338.o214),
            o214 = 100 * Number.MIN_VALUE,
            o216 = -(o37 * o203 + o210 * o212);
        if (o216 > o214) {
            var o218 = o207.o214 - this.o338.o214,
                o220 = o207.o105 - this.o338.o105;
            o207 = o218 * o203 + o220 * o212;
            if (0 <= o207 && o207 <= o205 * o216) {
                o205 = -o37 * o220 + o210 * o218;
                if (-o214 * o216 <= o205 && o205 <= o216 * (1 + o214)) {
                    o207 /= o216;
                    o205 = Math.sqrt(o203 * o203 + o212 * o212);
                    o203 /= o205;
                    o212 /= o205;
                    o200[0] = o207;
                    o93.Set(o203,
                        o212);
                    return true
                }
            }
        }
        return false
    };
    o178.prototype.o505 = function (o200) {
        this.o506(o200);
        this.o507(o200)
    };
    o178.prototype.o506 = function (o200) {
        var o93 = this.o339.o214 - this.o338.o214,
            o203 = this.o339.o105 - this.o338.o105;
        o200 = Math.o342(o93 > 0 ? (o200.o330.o214 - this.o338.o214) / o93 : o93 < 0 ? (o200.o329.o214 - this.o338.o214) / o93 : Number.o508, o203 > 0 ? (o200.o330.o105 - this.o338.o105) / o203 : o203 < 0 ? (o200.o329.o105 - this.o338.o105) / o203 : Number.o508);
        this.o339.o214 = this.o338.o214 + o93 * o200;
        this.o339.o105 = this.o338.o105 + o203 * o200
    };
    o178.prototype.o507 = function (o200) {
        var o93 = -this.o339.o214 + this.o338.o214,
            o203 = -this.o339.o105 + this.o338.o105;
        o200 = Math.o342(o93 > 0 ? (o200.o330.o214 - this.o339.o214) / o93 : o93 < 0 ? (o200.o329.o214 - this.o339.o214) / o93 : Number.o508, o203 > 0 ? (o200.o330.o105 - this.o339.o105) / o203 : o203 < 0 ? (o200.o329.o105 - this.o339.o105) / o203 : Number.o508);
        this.o338.o214 = this.o339.o214 + o93 * o200;
        this.o338.o105 = this.o339.o105 + o203 * o200
    };
    o180.o166 = function () {
        this.o394 = new o139;
        this.o509 = new o139
    };
    o180.prototype.o510 = function (o200, o93, o203, o205, o207) {
        this.o511 = o93;
        this.o512 = o205;
        var o37 = parseInt(o200.o513);
        o105.o434(0 < o37 && o37 < 3);
        var o210, o212, o214, o216, o218 = o216 = o214 = o205 = o93 = 0,
            o220 = 0;
        o218 = 0;
        if (o37 == 1) {
            this.o377 = o180.o514;
            o210 = this.o511.o441(o200.o430[0]);
            o212 = this.o512.o441(o200.o431[0]);
            o37 = o210;
            o200 = o203.o170;
            o93 = o203.o363.o214 + (o200.o361.o214 * o37.o214 + o200.o362.o214 * o37.o105);
            o205 = o203.o363.o105 + (o200.o361.o105 * o37.o214 + o200.o362.o105 * o37.o105);
            o37 = o212;
            o200 = o207.o170;
            o214 = o207.o363.o214 + (o200.o361.o214 * o37.o214 + o200.o362.o214 * o37.o105);
            o216 = o207.o363.o105 + (o200.o361.o105 * o37.o214 + o200.o362.o105 * o37.o105);
            this.o509.o214 = o214 - o93;
            this.o509.o105 = o216 - o205;
            this.o509.o382()
        } else {
            if (o200.o431[0] == o200.o431[1]) {
                this.o377 = o180.o379;
                o93 = this.o511.o441(o200.o430[0]);
                o205 = this.o511.o441(o200.o430[1]);
                o212 = this.o512.o441(o200.o431[0]);
                this.o394.o214 = 0.5 * (o93.o214 + o205.o214);
                this.o394.o105 = 0.5 * (o93.o105 + o205.o105);
                this.o509 = o106.o515(o106.o443(o205, o93), 1);
                this.o509.o382();
                o37 = this.o509;
                o200 = o203.o170;
                o218 = o200.o361.o214 * o37.o214 + o200.o362.o214 * o37.o105;
                o220 = o200.o361.o105 * o37.o214 + o200.o362.o105 * o37.o105;
                o37 = this.o394;
                o200 = o203.o170;
                o93 = o203.o363.o214 + (o200.o361.o214 * o37.o214 + o200.o362.o214 * o37.o105);
                o205 = o203.o363.o105 + (o200.o361.o105 * o37.o214 + o200.o362.o105 * o37.o105);
                o37 = o212;
                o200 = o207.o170;
                o214 = o207.o363.o214 + (o200.o361.o214 * o37.o214 + o200.o362.o214 * o37.o105);
                o216 = o207.o363.o105 + (o200.o361.o105 * o37.o214 + o200.o362.o105 * o37.o105);
                o218 = (o214 - o93) * o218 + (o216 - o205) * o220
            } else if (o200.o430[0] == o200.o430[0]) {
                this.o377 = o180.o378;
                o214 = this.o512.o441(o200.o431[0]);
                o216 = this.o512.o441(o200.o431[1]);
                o210 = this.o511.o441(o200.o430[0]);
                this.o394.o214 = 0.5 * (o214.o214 + o216.o214);
                this.o394.o105 = 0.5 * (o214.o105 + o216.o105);
                this.o509 = o106.o515(o106.o443(o216, o214), 1);
                this.o509.o382();
                o37 = this.o509;
                o200 = o207.o170;
                o218 = o200.o361.o214 * o37.o214 + o200.o362.o214 * o37.o105;
                o220 = o200.o361.o105 * o37.o214 + o200.o362.o105 * o37.o105;
                o37 = this.o394;
                o200 = o207.o170;
                o214 = o207.o363.o214 + (o200.o361.o214 * o37.o214 + o200.o362.o214 * o37.o105);
                o216 = o207.o363.o105 + (o200.o361.o105 * o37.o214 + o200.o362.o105 * o37.o105);
                o37 = o210;
                o200 = o203.o170;
                o93 = o203.o363.o214 + (o200.o361.o214 * o37.o214 + o200.o362.o214 * o37.o105);
                o205 = o203.o363.o105 + (o200.o361.o105 * o37.o214 + o200.o362.o105 * o37.o105);
                o218 = (o93 - o214) * o218 + (o205 - o216) * o220
            } else {
                o93 = this.o511.o441(o200.o430[0]);
                o205 = this.o511.o441(o200.o430[1]);
                o214 = this.o512.o441(o200.o431[0]);
                o216 = this.o512.o441(o200.o431[1]);
                o106.o440(o203, o210);
                o210 = o106.o516(o203.o170, o106.o443(o205, o93));
                o106.o440(o207, o212);
                o218 = o106.o516(o207.o170, o106.o443(o216, o214));
                o207 = o210.o214 * o210.o214 + o210.o105 * o210.o105;
                o212 = o218.o214 * o218.o214 + o218.o105 * o218.o105;
                o200 = o106.o443(o218, o210);
                o203 = o210.o214 * o200.o214 + o210.o105 * o200.o105;
                o200 = o218.o214 * o200.o214 + o218.o105 * o200.o105;
                o210 = o210.o214 * o218.o214 + o210.o105 * o218.o105;
                o220 = o207 * o212 - o210 * o210;
                o218 = 0;
                if (o220 != 0) o218 = o106.o517((o210 * o200 - o203 * o212) / o220, 0, 1);
                if ((o210 * o218 + o200) / o212 < 0) o218 = o106.o517((o210 - o203) / o207, 0, 1);
                o210 = new o139;
                o210.o214 = o93.o214 + o218 * (o205.o214 - o93.o214);
                o210.o105 = o93.o105 + o218 * (o205.o105 - o93.o105);
                o212 = new o139;
                o212.o214 = o214.o214 + o218 * (o216.o214 - o214.o214);
                o212.o105 = o214.o105 + o218 * (o216.o105 - o214.o105);
                if (o218 == 0 || o218 == 1) {
                    this.o377 = o180.o378;
                    this.o509 = o106.o515(o106.o443(o216, o214), 1);
                    this.o509.o382();
                    this.o394 = o212
                } else {
                    this.o377 = o180.o379;
                    this.o509 = o106.o515(o106.o443(o205, o93), 1);
                    this.o394 = o210
                }
            }
            o218 < 0 && this.o509.o518()
        }
    };
    o180.prototype.o519 = function (o200, o93) {
        var o203, o205, o207 = 0;
        switch (this.o377) {
        case d.e_points:
            o203 = o106.o437(o200.o170, this.o509);
            o205 = o106.o437(o93.o170, this.o509.o438());
            o203 = this.o511.o458(o203);
            o205 = this.o512.o458(o205);
            o203 = o106.o440(o200, o203);
            o205 = o106.o440(o93, o205);
            return o207 = (o205.o214 - o203.o214) * this.o509.o214 + (o205.o105 - o203.o105) * this.o509.o105d.e_points:
            f = w.MulTMV(b.R, this.m_axis);
            m = w.MulTMV(e.R, this.m_axis.GetNegative());
            f = this.m_proxyA.GetSupportVertex(f);
            m = this.m_proxyB.GetSupportVertex(m);
            f = w.MulX(b, f);
            m = w.MulX(e, m);
            return r = (m.x - f.x) * this.m_axis.x + (m.y - f.y) * this.m_axis.yo180.o514:
            f = w.MulTMV(b.R, this.m_axis);
            m = w.MulTMV(e.R, this.m_axis.GetNegative());
            f = this.m_proxyA.GetSupportVertex(f);
            m = this.m_proxyB.GetSupportVertex(m);
            f = w.MulX(b, f);
            m = w.MulX(e, m);
            return r = (m.x - f.x) * this.m_axis.x + (m.y - f.y) * this.m_axis.y;
        case d.e_faceA:
            o207 = o106.o516(o200.o170, this.o509);
            o203 = o106.o440(o200, this.o394);
            o205 = o106.o437(o93.o170, o207.o438());
            o205 = this.o512.o458(o205);
            o205 = o106.o440(o93, o205);
            return o207 = (o205.o214 - o203.o214) * o207.o214 + (o205.o105 - o203.o105) * o207.o105d.e_faceA:
            r = w.MulMV(b.R, this.m_axis);
            f = w.MulX(b, this.m_localPoint);
            m = w.MulTMV(e.R, r.GetNegative());
            m = this.m_proxyB.GetSupportVertex(m);
            m = w.MulX(e, m);
            return r = (m.x - f.x) * r.x + (m.y - f.y) * r.yo180.o379:
            r = w.MulMV(b.R, this.m_axis);
            f = w.MulX(b, this.m_localPoint);
            m = w.MulTMV(e.R, r.GetNegative());
            m = this.m_proxyB.GetSupportVertex(m);
            m = w.MulX(e, m);
            return r = (m.x - f.x) * r.x + (m.y - f.y) * r.y;
        case d.e_faceB:
            o207 = o106.o516(o93.o170, this.o509);
            o205 = o106.o440(o93, this.o394);
            o203 = o106.o437(o200.o170, o207.o438());
            o203 = this.o511.o458(o203);
            o203 = o106.o440(o200, o203);
            return o207 = (o203.o214 - o205.o214) * o207.o214 + (o203.o105 - o205.o105) * o207.o105d.e_faceB:
            r = w.MulMV(e.R, this.m_axis);
            m = w.MulX(e, this.m_localPoint);
            f = w.MulTMV(b.R, r.GetNegative());
            f = this.m_proxyA.GetSupportVertex(f);
            f = w.MulX(b, f);
            return r = (f.x - m.x) * r.x + (f.y - m.y) * r.yo180.o378:
            r = w.MulMV(e.R, this.m_axis);
            m = w.MulX(e, this.m_localPoint);
            f = w.MulTMV(b.R, r.GetNegative());
            f = this.m_proxyA.GetSupportVertex(f);
            f = w.MulX(b, f);
            return r = (f.x - m.x) * r.x + (f.y - m.y) * r.y;
        default:
            o105.o434(false);
            return 0
        }
    };
    o96.o328.push(function () {
        o96.o124.o166.o514 = 1;
        o96.o124.o166.o379 = 2;
        o96.o124.o166.o378 = 4
    });
    o182.o168 = function () {
        this.o520 = new o186;
        this.o521 = new o186;
        this.o522 = new o186;
        this.o359 = new o122(3)
    };
    o182.prototype.o168 = function () {
        this.o359[0] = this.o520;
        this.o359[1] = this.o521;
        this.o359[2] = this.o522
    };
    o182.prototype.o424 = function (o200, o93, o203, o205, o207) {
        o105.o434(0 <= o200.o513 && o200.o513 <= 3);
        var o37, o210;
        this.o429 = o200.o513;
        for (var o212 = this.o359, o214 = 0; o214 < this.o429; o214++) {
            var o216 = o212[o214];
            o216.o430 = o200.o430[o214];
            o216.o431 = o200.o431[o214];
            o37 = o93.o441(o216.o430);
            o210 = o205.o441(o216.o431);
            o216.o439 = o106.o440(o203, o37);
            o216.o442 = o106.o440(o207, o210);
            o216.o106 = o106.o443(o216.o442, o216.o439);
            o216.o194 = 0
        }
        if (this.o429 > 1) {
            o200 = o200.o523;
            o37 = this.o524();
            if (o37 < 0.5 * o200 || 2 * o200 < o37 || o37 < Number.MIN_VALUE) this.o429 = 0
        }
        if (this.o429 == 0) {
            o216 = o212[0];
            o216.o430 = 0;
            o216.o431 = 0;
            o37 = o93.o441(0);
            o210 = o205.o441(0);
            o216.o439 = o106.o440(o203, o37);
            o216.o442 = o106.o440(o207, o210);
            o216.o106 = o106.o443(o216.o442, o216.o439);
            this.o429 = 1
        }
    };
    o182.prototype.o453 = function (o200) {
            o200.o523 = this.o524();
            o200.o513 = o96.o119(this.o429);
            for (var o93 = this.o359, o203 = 0; o203 < this.o429; o203++) {
                o200.o430[o203] = o96.o119(o93[o203].o430);
                o200.o431[o203] = o96.o119(o93[o203].o431)
            }
    };
    o182.prototype.o435 = function () {
        switch (this.o429) {
        case 1:
            return this.o520.o106.o438();
        case 2:
            var o200 = o106.o443(this.o521.o106, this.o520.o106);
            return o106.o525(o200, this.o520.o106.o438()) > 0 ? o106.o482(1, o200) : o106.o515(o200, 1);
        default:
            o105.o434(false);
            return new o139
        }
    };
    o182.prototype.o427 = function () {
            switch (this.o429) {
            case 0:
                o105.o434(false);
                return new o139;
            case 1:
                return this.o520.o106;
            case 2:
                return new o139(this.o520.o194 * this.o520.o106.o214 + this.o521.o194 * this.o521.o106.o214, this.o520.o194 * this.o520.o106.o105 + this.o521.o194 * this.o521.o106.o105);
            default:
                o105.o434(false);
                return new o139
            }
    };
    o182.prototype.o447 = function (o200, o93) {
        switch (this.o429) {
        case 0:
            o105.o434(false);
            break;
        case 1:
            o200.o393(this.o520.o439);
            o93.o393(this.o520.o442);
            break;
        case 2:
            o200.o214 = this.o520.o194 * this.o520.o439.o214 + this.o521.o194 * this.o521.o439.o214;
            o200.o105 = this.o520.o194 * this.o520.o439.o105 + this.o521.o194 * this.o521.o439.o105;
            o93.o214 = this.o520.o194 * this.o520.o442.o214 + this.o521.o194 * this.o521.o442.o214;
            o93.o105 = this.o520.o194 * this.o520.o442.o105 + this.o521.o194 * this.o521.o442.o105;
            break;
        case 3:
            o93.o214 = o200.o214 = this.o520.o194 * this.o520.o439.o214 + this.o521.o194 * this.o521.o439.o214 + this.o522.o194 * this.o522.o439.o214;
            o93.o105 = o200.o105 = this.o520.o194 * this.o520.o439.o105 + this.o521.o194 * this.o521.o439.o105 + this.o522.o194 * this.o522.o439.o105;
            break;
        default:
            o105.o434(false)
        }
    };
    o182.prototype.o524 = function () {
        switch (this.o429) {
        case 0:
            o105.o434(false);
            return 0;
        case 1:
            return 0;
        case 2:
            return o106.o443(this.o520.o106,
                this.o521.o106).o451();
        case 3:
            return o106.o525(o106.o443(this.o521.o106, this.o520.o106), o106.o443(this.o522.o106, this.o520.o106));
        default:
            o105.o434(false);
            return 0
        }
    };
    o182.prototype.o432 = function () {
        var o200 = this.o520.o106,
            o93 = this.o521.o106,
            o203 = o106.o443(o93, o200);
        o200 = -(o200.o214 * o203.o214 + o200.o105 * o203.o105);
        if (o200 <= 0) this.o429 = this.o520.o194 = 1;
        else {
            o93 = o93.o214 * o203.o214 + o93.o105 * o203.o105;
            if (o93 <= 0) {
                this.o429 = this.o521.o194 = 1;
                this.o520.Set(this.o521)
            } else {
                o203 = 1 / (o93 + o200);
                this.o520.o194 = o93 * o203;
                this.o521.o194 = o200 * o203;
                this.o429 = 2
            }
        }
    };
    o182.prototype.o433 = function () {
        var o200 = this.o520.o106,
            o93 = this.o521.o106,
            o203 = this.o522.o106,
            o205 = o106.o443(o93, o200),
            o207 = o106.o526(o200, o205),
            o37 = o106.o526(o93, o205);
        o207 = -o207;
        var o210 = o106.o443(o203, o200),
            o212 = o106.o526(o200, o210),
            o214 = o106.o526(o203, o210);
        o212 = -o212;
        var o216 = o106.o443(o203, o93),
            o218 = o106.o526(o93, o216);
        o216 = o106.o526(o203, o216);
        o218 = -o218;
        o210 = o106.o525(o205, o210);
        o205 = o210 * o106.o525(o93, o203);
        o203 = o210 * o106.o525(o203, o200);
        o200 = o210 * o106.o525(o200, o93);
        if (o207 <= 0 && o212 <= 0) this.o429 = this.o520.o194 = 1;
        else if (o37 > 0 && o207 > 0 && o200 <= 0) {
            o214 = 1 / (o37 + o207);
            this.o520.o194 = o37 * o214;
            this.o521.o194 = o207 * o214;
            this.o429 = 2
        } else if (o214 > 0 && o212 > 0 && o203 <= 0) {
            o37 = 1 / (o214 + o212);
            this.o520.o194 = o214 * o37;
            this.o522.o194 = o212 * o37;
            this.o429 = 2;
            this.o521.Set(this.o522)
        } else if (o37 <= 0 && o218 <= 0) {
            this.o429 = this.o521.o194 = 1;
            this.o520.Set(this.o521)
        } else if (o214 <= 0 && o216 <= 0) {
            this.o429 = this.o522.o194 = 1;
            this.o520.Set(this.o522)
        } else if (o216 > 0 && o218 > 0 && o205 <= 0) {
            o37 = 1 / (o216 + o218);
            this.o521.o194 = o216 * o37;
            this.o522.o194 = o218 * o37;
            this.o429 = 2;
            this.o520.Set(this.o522)
        } else {
            o37 = 1 / (o205 + o203 + o200);
            this.o520.o194 = o205 * o37;
            this.o521.o194 = o203 * o37;
            this.o522.o194 = o200 * o37;
            this.o429 = 3
        }
    };
    o184.o169 = function () {
        this.o430 = new o123(3);
        this.o431 = new o123(3)
    };
    o186.o171 = function () {};
    o186.prototype.Set = function (o200) {
        this.o439.o393(o200.o439);
        this.o442.o393(o200.o442);
        this.o106.o393(o200.o106);
        this.o194 = o200.o194;
        this.o430 = o200.o430;
        this.o431 = o200.o431
    };
    o188.o173 = function () {};
    o188.o527 = function (o200) {
        ++o188.o528;
        var o93 = o200.o419,
            o203 = o200.o420,
            o205 = o200.o529,
            o207 = o200.o530;
        o105.o434(o205.o531 == o207.o531);
        o105.o434(1 - o205.o531 > Number.MIN_VALUE);
        var o37 = o93.o374 + o203.o374;
        o200 = o200.o532;
        var o210 = 0,
            o212 = 0,
            o214 = 0;
        o188.o533.o513 = 0;
        for (o188.o534.o454 = false;;) {
            o205.o535(o188.o536, o210);
            o207.o535(o188.o537, o210);
            o188.o534.o419 = o93;
            o188.o534.o420 = o203;
            o188.o534.o421 = o188.o536;
            o188.o534.o422 = o188.o537;
            o153.o417(o188.o538, o188.o533, o188.o534);
            if (o188.o538.o450 <= 0) {
                o210 = 1;
                break
            }
            o188.o539.o510(o188.o533, o93, o188.o536, o203, o188.o537);
            var o216 = o188.o539.o519(o188.o536, o188.o537);
            if (o216 <= 0) {
                o210 = 1;
                break
            }
            if (o212 == 0) o214 = o216 > o37 ? o106.o446(o37 - o200, 0.75 * o37) : o106.o446(o216 - o200, 0.02 * o37);
            if (o216 - o214 < 0.5 * o200) {
                if (o212 == 0) {
                    o210 = 1;
                    break
                }
                break
            }
            var o218 = o210,
                o220 = o210,
                o222 = 1;
            o216 = o216;
            o205.o535(o188.o536, o222);
            o207.o535(o188.o537, o222);
            var o224 = o188.o539.o519(o188.o536, o188.o537);
            if (o224 >= o214) {
                o210 = 1;
                break
            }
            for (var o226 = 0;;) {
                var o228 = 0;
                o228 = o226 & 1 ? o220 + (o214 - o216) * (o222 - o220) / (o224 - o216) : 0.5 * (o220 + o222);
                o205.o535(o188.o536, o228);
                o207.o535(o188.o537, o228);
                var o230 = o188.o539.o519(o188.o536, o188.o537);
                if (o106.o540(o230 - o214) < 0.025 * o200) {
                    o218 = o228;
                    break
                }
                if (o230 > o214) {
                    o220 = o228;
                    o216 = o230
                } else {
                    o222 = o228;
                    o224 = o230
                }++o226;
                ++o188.o541;
                if (o226 == 50) break
            }
            o188.o542 = o106.o446(o188.o542, o226);
            if (o218 < (1 + 100 * Number.MIN_VALUE) * o210) break;
            o210 = o218;
            o212++;
            ++o188.o543;
            if (o212 == 1E3) break
        }
        o188.o544 = o106.o446(o188.o544, o212);
        return o210
    };
    o96.o328.push(function () {
        o96.o124.o173.o528 = 0;
        o96.o124.o173.o543 = 0;
        o96.o124.o173.o544 = 0;
        o96.o124.o173.o541 = 0;
        o96.o124.o173.o542 = 0;
        o96.o124.o173.o533 = new o184;
        o96.o124.o173.o534 = new o155;
        o96.o124.o173.o536 = new o137;
        o96.o124.o173.o537 = new o137;
        o96.o124.o173.o539 = new o180;
        o96.o124.o173.o538 = new o157
    });
    o190.o175 = function () {
        this.o419 = new o159;
        this.o420 = new o159;
        this.o529 = new o107;
        this.o530 = new o107
    };
    o192.o177 = function () {
        this.o545 = new o139
    };
    o192.prototype.o177 = function () {
        this.o396 = new o122(o105.o395);
        for (var o200 = 0; o200 < o105.o395; o200++) this.o396[o200] = new o139
    };
    o192.prototype.o510 = function (o200, o93, o203, o205, o207) {
        if (o203 === undefined) o203 = 0;
        if (o207 === undefined) o207 = 0;
        if (o200.o373 != 0) {
            var o37 = 0,
                o210, o212, o214 = 0,
                o216 = 0,
                o218 = 0,
                o220 = 0,
                o222 = 0;
            o210 = 0;
            switch (o200.o377) {
            case E.e_circles:
                o212 = o93.o170;
                o210 = o200.o394;
                o37 = o93.o363.o214 + o212.o361.o214 * o210.o214 + o212.o362.o214 * o210.o105;
                o93 = o93.o363.o105 + o212.o361.o105 * o210.o214 + o212.o362.o105 * o210.o105;
                o212 = o205.o170;
                o210 = o200.o396[0].o394;
                o200 = o205.o363.o214 + o212.o361.o214 * o210.o214 + o212.o362.o214 * o210.o105;
                o205 = o205.o363.o105 + o212.o361.o105 * o210.o214 + o212.o362.o105 * o210.o105;
                o210 = o200 - o37;
                o212 = o205 - o93;
                o214 = o210 * o210 + o212 * o212;
                if (o214 > Number.MIN_VALUE * Number.MIN_VALUE) {
                    o214 = Math.sqrt(o214);
                    this.o545.o214 = o210 / o214;
                    this.o545.o105 = o212 / o214
                } else {
                    this.o545.o214 = 1;
                    this.o545.o105 = 0
                }
                o210 = o93 + o203 * this.o545.o105;
                o205 = o205 - o207 * this.o545.o105;
                this.o396[0].o214 = 0.5 * (o37 + o203 * this.o545.o214 + (o200 - o207 * this.o545.o214));
                this.o396[0].o105 = 0.5 * (o210 + o205E.e_circles:
                t = e.R;
                v = b.m_localPoint;
                s = e.position.x + t.col1.x * v.x + t.col2.x * v.y;
                e = e.position.y + t.col1.y * v.x + t.col2.y * v.y;
                t = m.R;
                v = b.m_points[0].m_localPoint;
                b = m.position.x + t.col1.x * v.x + t.col2.x * v.y;
                m = m.position.y + t.col1.y * v.x + t.col2.y * v.y;
                v = b - s;
                t = m - e;
                x = v * v + t * t;
                if (x > Number.MIN_VALUE * Number.MIN_VALUE) {
                    x = Math.sqrt(x);
                    this.m_normal.x = v / x;
                    this.m_normal.y = t / x
                } else {
                    this.m_normal.x = 1;
                    this.m_normal.y = 0
                }
                v = e + f * this.m_normal.y;
                m = m - r * this.m_normal.y;
                this.m_points[0].x = 0.5 * (s + f * this.m_normal.x + (b - r * this.m_normal.x));
                this.m_points[0].y = 0.5 * (v + mo67.o401:
                t = e.R;
                v = b.m_localPoint;
                s = e.position.x + t.col1.x * v.x + t.col2.x * v.y;
                e = e.position.y + t.col1.y * v.x + t.col2.y * v.y;
                t = m.R;
                v = b.m_points[0].m_localPoint;
                b = m.position.x + t.col1.x * v.x + t.col2.x * v.y;
                m = m.position.y + t.col1.y * v.x + t.col2.y * v.y;
                v = b - s;
                t = m - e;
                x = v * v + t * t;
                if (x > Number.MIN_VALUE * Number.MIN_VALUE) {
                    x = Math.sqrt(x);
                    this.m_normal.x = v / x;
                    this.m_normal.y = t / x
                } else {
                    this.m_normal.x = 1;
                    this.m_normal.y = 0
                }
                v = e + f * this.m_normal.y;
                m = m - r * this.m_normal.y;
                this.m_points[0].x = 0.5 * (s + f * this.m_normal.x + (b - r * this.m_normal.x));
                this.m_points[0].y = 0.5 * (v + m);
                break;
            case E.e_faceA:
                o212 = o93.o170;
                o210 = o200.o392;
                o214 = o212.o361.o214 * o210.o214 + o212.o362.o214 * o210.o105;
                o216 = o212.o361.o105 * o210.o214 + o212.o362.o105 * o210.o105;
                o212 = o93.o170;
                o210 = o200.o394;
                o218 = o93.o363.o214 + o212.o361.o214 * o210.o214 + o212.o362.o214 * o210.o105;
                o220 = o93.o363.o105 + o212.o361.o105 * o210.o214 + o212.o362.o105 * o210.o105;
                this.o545.o214 = o214;
                this.o545.o105 = o216;
                for (o37 = 0; o37 < o200.o373; o37++) {
                    o212 = o205.o170;
                    o210 = o200.o396[o37].o394;
                    o222 = o205.o363.o214 + o212.o361.o214 * o210.o214 + o212.o362.o214 * o210.o105;
                    o210 = o205.o363.o105 + o212.o361.o105 * o210.o214 + o212.o362.o105 * o210.o105;
                    this.o396[o37].o214 = o222 + 0.5 * (o203 - (o222 - o218) * o214 - (o210 - o220) * o216 - o207) * o214;
                    this.o396[o37].o105 = o210 + 0.5 * (o203 - (o222 - o218) * o214 - (o210 - o220) * o216 - o207) * o216E.e_faceA:
                t = e.R;
                v = b.m_localPlaneNormal;
                x = t.col1.x * v.x + t.col2.x * v.y;
                C = t.col1.y * v.x + t.col2.y * v.y;
                t = e.R;
                v = b.m_localPoint;
                J = e.position.x + t.col1.x * v.x + t.col2.x * v.y;
                T = e.position.y + t.col1.y * v.x + t.col2.y * v.y;
                this.m_normal.x = x;
                this.m_normal.y = C;
                for (s = 0; s < b.m_pointCount; s++) {
                    t = m.R;
                    v = b.m_points[s].m_localPoint;
                    P = m.position.x + t.col1.x * v.x + t.col2.x * v.y;
                    v = m.position.y + t.col1.y * v.x + t.col2.y * v.y;
                    this.m_points[s].x = P + 0.5 * (f - (P - J) * x - (v - T) * C - r) * x;
                    this.m_points[s].y = v + 0.5 * (f - (P - J) * x - (v - T) * C - r) * Co67.o379:
                t = e.R;
                v = b.m_localPlaneNormal;
                x = t.col1.x * v.x + t.col2.x * v.y;
                C = t.col1.y * v.x + t.col2.y * v.y;
                t = e.R;
                v = b.m_localPoint;
                J = e.position.x + t.col1.x * v.x + t.col2.x * v.y;
                T = e.position.y + t.col1.y * v.x + t.col2.y * v.y;
                this.m_normal.x = x;
                this.m_normal.y = C;
                for (s = 0; s < b.m_pointCount; s++) {
                    t = m.R;
                    v = b.m_points[s].m_localPoint;
                    P = m.position.x + t.col1.x * v.x + t.col2.x * v.y;
                    v = m.position.y + t.col1.y * v.x + t.col2.y * v.y;
                    this.m_points[s].x = P + 0.5 * (f - (P - J) * x - (v - T) * C - r) * x;
                    this.m_points[s].y = v + 0.5 * (f - (P - J) * x - (v - T) * C - r) * C
                }
                break;
            case E.e_faceB:
                o212 = o205.o170;
                o210 = o200.o392;
                o214 = o212.o361.o214 * o210.o214 + o212.o362.o214 * o210.o105;
                o216 = o212.o361.o105 * o210.o214 + o212.o362.o105 * o210.o105;
                o212 = o205.o170;
                o210 = o200.o394;
                o218 = o205.o363.o214 + o212.o361.o214 * o210.o214 + o212.o362.o214 * o210.o105;
                o220 = o205.o363.o105 + o212.o361.o105 * o210.o214 + o212.o362.o105 * o210.o105;
                this.o545.o214 = -o214;
                this.o545.o105 = -o216;
                for (o37 = 0; o37 < o200.o373; o37++) {
                    o212 = o93.o170;
                    o210 = o200.o396[o37].o394;
                    o222 = o93.o363.o214 + o212.o361.o214 * o210.o214 + o212.o362.o214 * o210.o105;
                    o210 = o93.o363.o105 + o212.o361.o105 * o210.o214 + o212.o362.o105 * o210.o105;
                    this.o396[o37].o214 = o222 + 0.5 * (o207 - (o222 - o218) * o214 - (o210 - o220) * o216 - o203) * o214;
                    this.o396[o37].o105 = o210 + 0.5 * (o207 - (o222 - o218) * o214 - (o210 - o220) * o216 - o203) * o216E.e_faceB:
                t = m.R;
                v = b.m_localPlaneNormal;
                x = t.col1.x * v.x + t.col2.x * v.y;
                C = t.col1.y * v.x + t.col2.y * v.y;
                t = m.R;
                v = b.m_localPoint;
                J = m.position.x + t.col1.x * v.x + t.col2.x * v.y;
                T = m.position.y + t.col1.y * v.x + t.col2.y * v.y;
                this.m_normal.x = -x;
                this.m_normal.y = -C;
                for (s = 0; s < b.m_pointCount; s++) {
                    t = e.R;
                    v = b.m_points[s].m_localPoint;
                    P = e.position.x + t.col1.x * v.x + t.col2.x * v.y;
                    v = e.position.y + t.col1.y * v.x + t.col2.y * v.y;
                    this.m_points[s].x = P + 0.5 * (r - (P - J) * x - (v - T) * C - f) * x;
                    this.m_points[s].y = v + 0.5 * (r - (P - J) * x - (v - T) * C - f) * Co67.o378:
                t = m.R;
                v = b.m_localPlaneNormal;
                x = t.col1.x * v.x + t.col2.x * v.y;
                C = t.col1.y * v.x + t.col2.y * v.y;
                t = m.R;
                v = b.m_localPoint;
                J = m.position.x + t.col1.x * v.x + t.col2.x * v.y;
                T = m.position.y + t.col1.y * v.x + t.col2.y * v.y;
                this.m_normal.x = -x;
                this.m_normal.y = -C;
                for (s = 0; s < b.m_pointCount; s++) {
                    t = e.R;
                    v = b.m_points[s].m_localPoint;
                    P = e.position.x + t.col1.x * v.x + t.col2.x * v.y;
                    v = e.position.y + t.col1.y * v.x + t.col2.y * v.y;
                    this.m_points[s].x = P + 0.5 * (r - (P - J) * x - (v - T) * C - f) * x;
                    this.m_points[s].y = v + 0.5 * (r - (P - J) * x - (v - T) * C - f) * C
                }
            }
        }
    };
    o194.o179 = function () {
        this.o210 = new o139;
        this.o356 = new o149
    };
    o194.prototype.Set = function (o200) {
        this.o210.o393(o200.o210);
        this.o356.Set(o200.o356)
    };
    o196.o181 = function () {};
    Object.defineProperty(o196.prototype, "referenceEdge", {
        enumerable: false,
        configurable: true,
        get: function () {
            return this.o412
        }
    });
    Object.defineProperty(o196.prototype, "referenceEdge", {
        enumerable: false,
        configurable: true,
        set: function (o200) {
            if (o200 === undefined) o200 = 0;
            this.o412 = o200;
            this.o407.o408 = this.o407.o408 & 4294967040 | this.o412 & 255
        }
    });
    Object.defineProperty(o196.prototype, "incidentEdge", {
        enumerable: false,
        configurable: true,
        get: function () {
            return this.o413
        }
    });
    Object.defineProperty(o196.prototype,
        "incidentEdge", {
            enumerable: false,
            configurable: true,
            set: function (o200) {
                if (o200 === undefined) o200 = 0;
                this.o413 = o200;
                this.o407.o408 = this.o407.o408 & 4294902015 | this.o413 << 8 & 65280
            }
        });
    Object.defineProperty(o196.prototype, "incidentVertex", {
        enumerable: false,
        configurable: true,
        get: function () {
            return this.o414
        }
    });
    Object.defineProperty(o196.prototype, "incidentVertex", {
        enumerable: false,
        configurable: true,
        set: function (o200) {
            if (o200 === undefined) o200 = 0;
            this.o414 = o200;
            this.o407.o408 = this.o407.o408 & 4278255615 |
                this.o414 << 16 & 16711680
        }
    });
    Object.defineProperty(o196.prototype, "flip", {
        enumerable: false,
        configurable: true,
        get: function () {
            return this.o415
        }
    });
    Object.defineProperty(o196.prototype, "flip", {
        enumerable: false,
        configurable: true,
        set: function (o200) {
            if (o200 === undefined) o200 = 0;
            this.o415 = o200;
            this.o407.o408 = this.o407.o408 & 16777215 | this.o415 << 24 & 4278190080
        }
    })
})();
(function () {
    var o97 = o96.o126.o197,
        o98 = o96.o124.o125.o183,
        o99 = o96.o124.o125.o185,
        o105 = o96.o124.o125.o187,
        o106 = o96.o124.o125.o189,
        o107 = o96.o124.o125.o191,
        o137 = o96.o124.o125.o193,
        o139 = o96.o126.Math.o199,
        o141 = o96.o126.Math.o202,
        o143 = o96.o126.Math.o206,
        o145 = o96.o126.Math.o208,
        o147 = o96.o124.o138,
        o149 = o96.o124.o140,
        o151 = o96.o124.o142,
        o153 = o96.o124.o144,
        o155 = o96.o124.o169;
    o96.o110(o98, o96.o124.o125.o193);
    o98.prototype.o546 = o96.o124.o125.o193.prototype;
    o98.o183 = function () {
        o96.o124.o125.o193.o193.apply(this, arguments);
        this.o400 = new o145
    };
    o98.prototype.o409 = function () {
        var o157 = new o98;
        o157.Set(this);
        return o157
    };
    o98.prototype.Set = function (o157) {
        this.o546.Set.call(this, o157);
        if (o96.is(o157, o98)) this.o400.o393((o157 instanceof o98 ? o157 : null).o400)
    };
    o98.prototype.o548 = function (o157, o159) {
        var o161 = o157.o170,
            o163 = o157.o363.o214 + (o161.o361.o214 * this.o400.o214 + o161.o362.o214 * this.o400.o105);
        o161 = o157.o363.o105 + (o161.o361.o105 * this.o400.o214 + o161.o362.o105 * this.o400.o105);
        o163 = o159.o214 - o163;
        o161 = o159.o105 - o161;
        return o163 * o163 + o161 * o161 <= this.o374 * this.o374
    };
    o98.prototype.o335 = function (o157, o159, o161) {
        var o163 = o161.o170,
            o165 = o159.o338.o214 - (o161.o363.o214 + (o163.o361.o214 * this.o400.o214 + o163.o362.o214 * this.o400.o105));
        o161 = o159.o338.o105 - (o161.o363.o105 + (o163.o361.o105 * this.o400.o214 + o163.o362.o105 * this.o400.o105));
        o163 = o159.o339.o214 - o159.o338.o214;
        var o167 = o159.o339.o105 - o159.o338.o105,
            o67 = o165 * o163 + o161 * o167,
            o170 = o163 * o163 + o167 * o167,
            o172 = o67 * o67 - o170 * (o165 * o165 + o161 * o161 - this.o374 * this.o374);
        if (o172 < 0 || o170 < Number.MIN_VALUE) return false;
        o67 = -(o67 + Math.sqrt(o172));
        if (0 <= o67 && o67 <= o159.o484 * o170) {
            o67 /= o170;
            o157.o343 = o67;
            o157.o340.o214 = o165 + o67 * o163;
            o157.o340.o105 = o161 + o67 * o167;
            o157.o340.o382();
            return true
        }
        return false
    };
    o98.prototype.o549 = function (o157, o159) {
        var o161 = o159.o170,
            o163 = o159.o363.o214 + (o161.o361.o214 * this.o400.o214 + o161.o362.o214 * this.o400.o105);
        o161 = o159.o363.o105 + (o161.o361.o105 * this.o400.o214 + o161.o362.o105 * this.o400.o105);
        o157.o329.Set(o163 - this.o374, o161 - this.o374);
        o157.o330.Set(o163 + this.o374, o161 + this.o374)
    };
    o98.prototype.o550 = function (o157, o159) {
        if (o159 === undefined) o159 = 0;
        o157.o551 = o159 * o97.o552 * this.o374 * this.o374;
        o157.o553.o393(this.o400);
        o157.o151 = o157.o551 * (0.5 * this.o374 * this.o374 + (this.o400.o214 * this.o400.o214 + this.o400.o105 * this.o400.o105))
    };
    o98.prototype.o554 = function (o157, o159, o161, o163) {
        if (o159 === undefined) o159 = 0;
        o161 = o141.o440(o161, this.o400);
        var o165 = -(o141.o526(o157, o161) - o159);
        if (o165 < -this.o374 + Number.MIN_VALUE) return 0;
        if (o165 > this.o374) {
            o163.o393(o161);
            return Math.o555 * this.o374 * this.o374
        }
        o159 = this.o374 * this.o374;
        var o167 = o165 * o165;
        o165 = o159 * (Math.o556(o165 / this.o374) + Math.o555 / 2) + o165 * Math.sqrt(o159 - o167);
        o159 = -2 / 3 * Math.o66(o159 - o167, 1.5) / o165;
        o163.o214 = o161.o214 + o157.o214 * o159;
        o163.o105 = o161.o105 + o157.o105 * o159;
        return o165
    };
    o98.prototype.o557 = function () {
            return this.o400
    };
    o98.prototype.o558 = function (o157) {
        this.o400.o393(o157)
    };
    o98.prototype.o559 = function () {
        return this.o374
    };
    o98.prototype.o560 = function (o157) {
        if (o157 === undefined) o157 = 0;
        this.o374 = o157
    };
    o98.prototype.o183 = function (o157) {
        if (o157 === undefined) o157 = 0;
        this.o546.o193.call(this);
        this.o377 = o137.o456;
        this.o374 = o157
    };
    o99.o185 = function () {};
    o99.prototype.o185 = function () {
        this.o561 = 0;
        this.o562 = true;
        this.o563 = []
    };
    o96.o110(o105, o96.o124.o125.o193);
    o105.prototype.o546 = o96.o124.o125.o193.prototype;
    o105.o187 = function () {
        o96.o124.o125.o193.o193.apply(this, arguments);
        this.o564 = new o145;
        this.o520 = new o145;
        this.o521 = new o145;
        this.o565 = new o145;
        this.o566 = new o145;
        this.o545 = new o145;
        this.o567 = new o145;
        this.o568 = new o145;
        this.o569 = new o145
    };
    o105.prototype.o548 = function () {
        return false
    };
    o105.prototype.o335 = function (o157, o159, o161) {
        var o163, o165 = o159.o339.o214 - o159.o338.o214,
            o167 = o159.o339.o105 - o159.o338.o105;
        o163 = o161.o170;
        var o67 = o161.o363.o214 + (o163.o361.o214 * this.o520.o214 + o163.o362.o214 * this.o520.o105),
            o170 = o161.o363.o105 + (o163.o361.o105 * this.o520.o214 + o163.o362.o105 * this.o520.o105),
            o172 = o161.o363.o105 + (o163.o361.o105 * this.o521.o214 + o163.o362.o105 * this.o521.o105) - o170;
        o161 = -(o161.o363.o214 + (o163.o361.o214 * this.o521.o214 + o163.o362.o214 * this.o521.o105) - o67);
        o163 = 100 * Number.MIN_VALUE;
        var o174 = -(o165 * o172 + o167 * o161);
        if (o174 > o163) {
            o67 = o159.o338.o214 - o67;
            var o176 = o159.o338.o105 - o170;
            o170 = o67 * o172 + o176 * o161;
            if (0 <= o170 && o170 <= o159.o484 * o174) {
                o159 = -o165 * o176 + o167 * o67;
                if (-o163 * o174 <= o159 && o159 <= o174 * (1 + o163)) {
                    o170 /= o174;
                    o157.o343 = o170;
                    o159 = Math.sqrt(o172 * o172 + o161 * o161);
                    o157.o340.o214 = o172 / o159;
                    o157.o340.o105 = o161 / o159;
                    return true
                }
            }
        }
        return false
    };
    o105.prototype.o549 = function (o157, o159) {
        var o161 = o159.o170,
            o163 = o159.o363.o214 + (o161.o361.o214 * this.o520.o214 + o161.o362.o214 * this.o520.o105),
            o165 = o159.o363.o105 + (o161.o361.o105 * this.o520.o214 + o161.o362.o105 * this.o520.o105),
            o167 = o159.o363.o214 + (o161.o361.o214 * this.o521.o214 + o161.o362.o214 * this.o521.o105);
        o161 = o159.o363.o105 + (o161.o361.o105 * this.o521.o214 + o161.o362.o105 * this.o521.o105);
        if (o163 < o167) {
            o157.o329.o214 = o163;
            o157.o330.o214 = o167
        } else {
            o157.o329.o214 = o167;
            o157.o330.o214 = o163
        } if (o165 < o161) {
            o157.o329.o105 = o165;
            o157.o330.o105 = o161
        } else {
            o157.o329.o105 = o161;
            o157.o330.o105 = o165
        }
    };
    o105.prototype.o550 = function (o157) {
        o157.o551 = 0;
        o157.o553.o393(this.o520);
        o157.o151 = 0
    };
    o105.prototype.o554 = function (o157, o159, o161, o163) {
            if (o159 === undefined) o159 = 0;
            var o165 = new o145(o157.o214 * o159, o157.o105 * o159),
                o167 = o141.o440(o161, this.o520);
            o161 = o141.o440(o161, this.o521);
            var o67 = o141.o526(o157, o167) - o159;
            o157 = o141.o526(o157, o161) - o159;
            if (o67 > 0)
                if (o157 > 0) return 0;
                else {
                    o167.o214 = -o157 / (o67 - o157) * o167.o214 + o67 / (o67 - o157) * o161.o214;
                    o167.o105 = -o157 / (o67 - o157) * o167.o105 + o67 / (o67 - o157) * o161.o105
                } else if (o157 > 0) {
                o161.o214 = -o157 / (o67 - o157) * o167.o214 + o67 / (o67 - o157) * o161.o214;
                o161.o105 = -o157 / (o67 - o157) * o167.o105 + o67 / (o67 - o157) * o161.o105
            }
            o163.o214 = (o165.o214 + o167.o214 + o161.o214) / 3;
            o163.o105 = (o165.o105 + o167.o105 + o161.o105) / 3;
            return 0.5 * ((o167.o214 - o165.o214) * (o161.o105 - o165.o105) - (o167.o105 - o165.o105) * (o161.o214 - o165.o214))
    };
    o105.prototype.o570 = function () {
        return this.o571
    };
    o105.prototype.o572 = function () {
        return this.o520
    };
    o105.prototype.o573 = function () {
            return this.o521
    };
    o105.prototype.o574 = function () {
        return this.o565
    };
    o105.prototype.o575 = function () {
        return this.o566
    };
    o105.prototype.o576 = function () {
        return this.o545
    };
    o105.prototype.o577 = function () {
        return this.o567
    };
    o105.prototype.o578 = function () {
        return this.o568
    };
    o105.prototype.o579 = function () {
        return this.o569
    };
    o105.prototype.o580 = function () {
        return this.o581
    };
    o105.prototype.o582 = function () {
            return this.o583
    };
    o105.prototype.o502 = function (o157) {
        var o159 = o157.o170;
        return new o145(o157.o363.o214 + (o159.o361.o214 * this.o565.o214 + o159.o362.o214 * this.o565.o105), o157.o363.o105 + (o159.o361.o105 * this.o565.o214 + o159.o362.o105 * this.o565.o105))
    };
    o105.prototype.o584 = function () {
        return this.o585
    };
    o105.prototype.o586 = function () {
        return this.o587
    };
    o105.prototype.o501 = function (o157, o159, o161) {
        if (o159 === undefined) o159 = 0;
        if (o161 === undefined) o161 = 0;
        var o163 = o157.o170,
            o165 = o157.o363.o214 + (o163.o361.o214 * this.o565.o214 + o163.o362.o214 * this.o565.o105),
            o167 = o157.o363.o105 + (o163.o361.o105 * this.o565.o214 + o163.o362.o105 * this.o565.o105),
            o67 = o157.o363.o214 + (o163.o361.o214 * this.o566.o214 + o163.o362.o214 * this.o566.o105);
        o157 = o157.o363.o105 + (o163.o361.o105 * this.o566.o214 + o163.o362.o105 * this.o566.o105);
        if (o165 * o159 + o167 * o161 > o67 * o159 + o157 * o161) {
            this.o564.o214 = o165;
            this.o564.o105 = o167
        } else {
            this.o564.o214 = o67;
            this.o564.o105 = o157
        }
        return this.o564
    };
    o105.prototype.o187 = function (o157, o159) {
        this.o546.o193.call(this);
        this.o377 = o137.o588;
        this.o585 = this.o587 = null;
        this.o520 = o157;
        this.o521 = o159;
        this.o567.Set(this.o521.o214 - this.o520.o214, this.o521.o105 - this.o520.o105);
        this.o571 = this.o567.o382();
        this.o545.Set(this.o567.o105, -this.o567.o214);
        this.o565.Set(-o97.o589 * (this.o545.o214 - this.o567.o214) + this.o520.o214, -o97.o589 * (this.o545.o105 - this.o567.o105) + this.o520.o105);
        this.o566.Set(-o97.o589 * (this.o545.o214 + this.o567.o214) + this.o521.o214, -o97.o589 * (this.o545.o105 + this.o567.o105) + this.o521.o105);
        this.o568 = this.o545;
        this.o569.Set(-this.o545.o214, -this.o545.o105)
    };
    o105.prototype.o590 = function (o157, o159, o161, o163) {
        this.o587 = o157;
        this.o565 = o159;
        this.o568 = o161;
        this.o581 = o163
    };
    o105.prototype.o591 = function (o157, o159, o161, o163) {
        this.o585 = o157;
        this.o566 = o159;
        this.o569 = o161;
        this.o583 = o163
    };
    o106.o189 = function () {
        this.o551 = 0;
        this.o553 = new o145(0, 0);
        this.o151 = 0
    };
    o96.o110(o107, o96.o124.o125.o193);
    o107.prototype.o546 = o96.o124.o125.o193.prototype;
    o107.o191 = function () {
        o96.o124.o125.o193.o193.apply(this, arguments)
    };
    o107.prototype.o409 = function () {
        var o157 = new o107;
        o157.Set(this);
        return o157
    };
    o107.prototype.Set = function (o157) {
        this.o546.Set.call(this, o157);
        if (o96.is(o157, o107)) {
            o157 = o157 instanceof o107 ? o157 : null;
            this.o365.o393(o157.o365);
            this.o358 = o157.o358;
            this.o592(this.o358);
            for (var o159 = 0; o159 < this.o358; o159++) {
                this.o359[o159].o393(o157.o359[o159]);
                this.o360[o159].o393(o157.o360[o159])
            }
        }
    };
    o107.prototype.o593 = function (o157, o159) {
        if (o159 === undefined) o159 = 0;
        var o161 = new o122,
            o163 = 0,
            o165;
        for (o163 = 0; o163 < o157.length; ++o163) {
            o165 = o157[o163];
            o161.push(o165)
        }
        this.o594(o161,
            o159)
    };
    o107.o595 = function (o157, o159) {
        if (o159 === undefined) o159 = 0;
        var o161 = new o107;
        o161.o593(o157, o159);
        return o161
    };
    o107.prototype.o594 = function (o157, o159) {
        if (o159 === undefined) o159 = 0;
        if (o159 == 0) o159 = o157.length;
        o97.o434(2 <= o159);
        this.o358 = o159;
        this.o592(o159);
        var o161 = 0;
        for (o161 = 0; o161 < this.o358; o161++) this.o359[o161].o393(o157[o161]);
        for (o161 = 0; o161 < this.o358; ++o161) {
            var o163 = parseInt(o161),
                o165 = parseInt(o161 + 1 < this.o358 ? o161 + 1 : 0);
            o163 = o141.o443(this.o359[o165], this.o359[o163]);
            o97.o434(o163.o428() > Number.MIN_VALUE);
            this.o360[o161].o393(o141.o515(o163,
                1));
            this.o360[o161].o382()
        }
        this.o365 = o107.o596(this.o359, this.o358)
    };
    o107.o597 = function (o157, o159) {
        if (o159 === undefined) o159 = 0;
        var o161 = new o107;
        o161.o594(o157, o159);
        return o161
    };
    o107.prototype.o598 = function (o157, o159) {
        if (o157 === undefined) o157 = 0;
        if (o159 === undefined) o159 = 0;
        this.o358 = 4;
        this.o592(4);
        this.o359[0].Set(-o157, -o159);
        this.o359[1].Set(o157, -o159);
        this.o359[2].Set(o157, o159);
        this.o359[3].Set(-o157, o159);
        this.o360[0].Set(0, -1);
        this.o360[1].Set(1, 0);
        this.o360[2].Set(0,
            1);
        this.o360[3].Set(-1, 0);
        this.o365.o402()
    };
    o107.o599 = function (o157, o159) {
        if (o157 === undefined) o157 = 0;
        if (o159 === undefined) o159 = 0;
        var o161 = new o107;
        o161.o598(o157, o159);
        return o161
    };
    o107.prototype.o600 = function (o157, o159, o161, o163) {
        if (o157 === undefined) o157 = 0;
        if (o159 === undefined) o159 = 0;
        if (o161 === undefined) o161 = null;
        if (o163 === undefined) o163 = 0;
        this.o358 = 4;
        this.o592(4);
        this.o359[0].Set(-o157, -o159);
        this.o359[1].Set(o157, -o159);
        this.o359[2].Set(o157, o159);
        this.o359[3].Set(-o157, o159);
        this.o360[0].Set(0, -1);
        this.o360[1].Set(1, 0);
        this.o360[2].Set(0, 1);
        this.o360[3].Set(-1, 0);
        this.o365 = o161;
        o157 = new o143;
        o157.o363 = o161;
        o157.o170.Set(o163);
        for (o161 = 0; o161 < this.o358; ++o161) {
            this.o359[o161] = o141.o440(o157, this.o359[o161]);
            this.o360[o161] = o141.o516(o157.o170, this.o360[o161])
        }
    };
    o107.o601 = function (o157, o159, o161, o163) {
        if (o157 === undefined) o157 = 0;
        if (o159 === undefined) o159 = 0;
        if (o161 === undefined) o161 = null;
        if (o163 === undefined) o163 = 0;
        var o165 = new o107;
        o165.o600(o157, o159, o161, o163);
        return o165
    };
    o107.prototype.o602 = function (o157, o159) {
        this.o358 = 2;
        this.o592(2);
        this.o359[0].o393(o157);
        this.o359[1].o393(o159);
        this.o365.o214 = 0.5 * (o157.o214 + o159.o214);
        this.o365.o105 = 0.5 * (o157.o105 + o159.o105);
        this.o360[0] = o141.o515(o141.o443(o159, o157), 1);
        this.o360[0].o382();
        this.o360[1].o214 = -this.o360[0].o214;
        this.o360[1].o105 = -this.o360[0].o105
    };
    o107.o603 = function (o157, o159) {
        var o161 = new o107;
        o161.o602(o157, o159);
        return o161
    };
    o107.prototype.o548 = function (o157, o159) {
        var o161;
        o161 = o157.o170;
        for (var o163 = o159.o214 - o157.o363.o214, o165 = o159.o105 - o157.o363.o105, o167 = o163 * o161.o361.o214 + o165 * o161.o361.o105, o67 = o163 * o161.o362.o214 + o165 * o161.o362.o105, o170 = 0; o170 < this.o358; ++o170) {
            o161 = this.o359[o170];
            o163 = o167 - o161.o214;
            o165 = o67 - o161.o105;
            o161 = this.o360[o170];
            if (o161.o214 * o163 + o161.o105 * o165 > 0) return false
        }
        return true
    };
    o107.prototype.o335 = function (o157, o159, o161) {
        var o163 = 0,
            o165 = o159.o484,
            o167 = 0,
            o67 = 0,
            o170, o172;
        o167 = o159.o338.o214 - o161.o363.o214;
        o67 = o159.o338.o105 - o161.o363.o105;
        o170 = o161.o170;
        var o174 = o167 * o170.o361.o214 + o67 * o170.o361.o105,
            o176 = o167 * o170.o362.o214 + o67 * o170.o362.o105;
        o167 = o159.o339.o214 - o161.o363.o214;
        o67 = o159.o339.o105 - o161.o363.o105;
        o170 = o161.o170;
        o159 = o167 * o170.o361.o214 + o67 * o170.o361.o105 - o174;
        o170 = o167 * o170.o362.o214 + o67 * o170.o362.o105 - o176;
        for (var o178 = parseInt(-1), o180 = 0; o180 < this.o358; ++o180) {
            o172 = this.o359[o180];
            o167 = o172.o214 - o174;
            o67 = o172.o105 - o176;
            o172 = this.o360[o180];
            o167 = o172.o214 * o167 + o172.o105 * o67;
            o67 = o172.o214 * o159 + o172.o105 * o170;
            if (o67 == 0) {
                if (o167 < 0) return false
            } else if (o67 < 0 && o167 < o163 * o67) {
                o163 = o167 / o67;
                o178 = o180
            } else if (o67 > 0 && o167 < o165 * o67) o165 = o167 / o67;
            if (o165 < o163 - Number.MIN_VALUE) return false
        }
        if (o178 >= 0) {
            o157.o343 = o163;
            o170 = o161.o170;
            o172 = this.o360[o178];
            o157.o340.o214 = o170.o361.o214 * o172.o214 + o170.o362.o214 * o172.o105;
            o157.o340.o105 = o170.o361.o105 * o172.o214 + o170.o362.o105 * o172.o105;
            return true
        }
        return false
    };
    o107.prototype.o549 = function (o157, o159) {
        for (var o161 = o159.o170, o163 = this.o359[0], o165 = o159.o363.o214 + (o161.o361.o214 * o163.o214 + o161.o362.o214 * o163.o105), o167 = o159.o363.o105 + (o161.o361.o105 * o163.o214 + o161.o362.o105 * o163.o105), o67 = o165, o170 = o167, o172 = 1; o172 < this.o358; ++o172) {
            o163 = this.o359[o172];
            var o174 = o159.o363.o214 + (o161.o361.o214 * o163.o214 + o161.o362.o214 * o163.o105);
            o163 = o159.o363.o105 + (o161.o361.o105 * o163.o214 + o161.o362.o105 * o163.o105);
            o165 = o165 < o174 ? o165 : o174;
            o167 = o167 < o163 ? o167 : o163;
            o67 = o67 > o174 ? o67 : o174;
            o170 = o170 > o163 ? o170 : o163
        }
        o157.o329.o214 = o165 - this.o374;
        o157.o329.o105 = o167 - this.o374;
        o157.o330.o214 = o67 + this.o374;
        o157.o330.o105 = o170 + this.o374
    };
    o107.prototype.o550 = function (o157, o159) {
        if (o159 === undefined) o159 = 0;
        if (this.o358 == 2) {
            o157.o553.o214 = 0.5 * (this.o359[0].o214 + this.o359[1].o214);
            o157.o553.o105 = 0.5 * (this.o359[0].o105 + this.o359[1].o105);
            o157.o551 = 0;
            o157.o151 = 0
        } else {
            for (var o161 = 0, o163 = 0, o165 = 0, o167 = 0, o67 = 1 / 3, o170 = 0; o170 < this.o358; ++o170) {
                var o172 = this.o359[o170],
                    o174 = o170 + 1 < this.o358 ? this.o359[parseInt(o170 + 1)] : this.o359[0],
                    o176 = o172.o214 - 0,
                    o178 = o172.o105 - 0,
                    o180 = o174.o214 - 0,
                    o182 = o174.o105 - 0,
                    o184 = o176 * o182 - o178 * o180,
                    o186 = 0.5 * o184;
                o165 += o186;
                o161 += o186 * o67 * (0 + o172.o214 + o174.o214);
                o163 += o186 * o67 * (0 + o172.o105 + o174.o105);
                o172 = o176;
                o178 = o178;
                o180 = o180;
                o182 = o182;
                o167 += o184 * (o67 * (0.25 * (o172 * o172 + o180 * o172 + o180 * o180) + (0 * o172 + 0 * o180)) + 0 + (o67 * (0.25 * (o178 * o178 + o182 * o178 + o182 * o182) + (0 * o178 + 0 * o182)) + 0))
            }
            o157.o551 = o159 * o165;
            o161 *= 1 / o165;
            o163 *= 1 / o165;
            o157.o553.Set(o161, o163);
            o157.o151 = o159 * o167
        }
    };
    o107.prototype.o554 = function (o157, o159, o161, o163) {
        if (o159 === undefined) o159 = 0;
        var o165 = o141.o437(o161.o170, o157),
            o167 = o159 - o141.o526(o157, o161.o363),
            o67 = new o123,
            o170 = 0,
            o172 = parseInt(-1);
        o159 = parseInt(-1);
        var o174 = false;
        for (o157 = o157 = 0; o157 < this.o358; ++o157) {
            o67[o157] = o141.o526(o165, this.o359[o157]) - o167;
            var o176 = o67[o157] < -Number.MIN_VALUE;
            if (o157 > 0)
                if (o176) {
                    if (!o174) {
                        o172 = o157 - 1;
                        o170++
                    }
                } else if (o174) {
                o159 = o157 - 1;
                o170++
            }
            o174 = o176
        }
        switch (o170) {
        case 0:
            if (o174) {
                o157 = new o106;
                this.o550(o157, 1);
                o163.o393(o141.o440(o161, o157.o553));
                return o157.o551
            } else return 0;
        case 1:
            if (o172 == -1) o172 = this.o358 - 1;
            else o159 = this.o358 - 1
        }
        o157 = parseInt((o172 + 1) % this.o358);
        o165 = parseInt((o159 + 1) % this.o358);
        o167 = (0 - o67[o172]) / (o67[o157] - o67[o172]);
        o67 = (0 - o67[o159]) / (o67[o165] - o67[o159]);
        o172 = new o145(this.o359[o172].o214 * (1 - o167) + this.o359[o157].o214 * o167, this.o359[o172].o105 * (1 - o167) + this.o359[o157].o105 * o167);
        o159 = new o145(this.o359[o159].o214 * (1 - o67) + this.o359[o165].o214 * o67, this.o359[o159].o105 * (1 - o67) + this.o359[o165].o105 * o67);
        o67 = 0;
        o167 = new o145;
        o170 = this.o359[o157];
        for (o157 = o157; o157 != o165;) {
            o157 = (o157 + 1) % this.o358;
            o174 = o157 == o165 ? o159 : this.o359[o157];
            o176 = 0.5 * ((o170.o214 - o172.o214) * (o174.o105 - o172.o105) - (o170.o105 - o172.o105) * (o174.o214 - o172.o214));
            o67 += o176;
            o167.o214 += o176 * (o172.o214 + o170.o214 + o174.o214) / 3;
            o167.o105 += o176 * (o172.o105 + o170.o105 + o174.o105) / 3;
            o170 = o174
        }
        o167.o604(1 / o67);
        o163.o393(o141.o440(o161, o167));
        return o67
    };
    o107.prototype.o459 = function () {
        return this.o358
    };
    o107.prototype.o605 = function () {
        return this.o359
    };
    o107.prototype.o606 = function () {
        return this.o360
    };
    o107.prototype.o436 = function (o157) {
        for (var o159 = 0, o161 = this.o359[0].o214 * o157.o214 + this.o359[0].o105 * o157.o105, o163 = 1; o163 < this.o358; ++o163) {
            var o165 = this.o359[o163].o214 * o157.o214 + this.o359[o163].o105 * o157.o105;
            if (o165 > o161) {
                o159 = o163;
                o161 = o165
            }
        }
        return o159
    };
    o107.prototype.o458 = function (o157) {
        for (var o159 = 0, o161 = this.o359[0].o214 * o157.o214 + this.o359[0].o105 * o157.o105, o163 = 1; o163 < this.o358; ++o163) {
            var o165 = this.o359[o163].o214 * o157.o214 + this.o359[o163].o105 * o157.o105;
            if (o165 > o161) {
                o159 = o163;
                o161 = o165
            }
        }
        return this.o359[o159]
    };
    o107.prototype.o495 = function () {
        return false
    };
    o107.prototype.o191 = function () {
        this.o546.o193.call(this);
        this.o377 = o137.o457;
        this.o365 = new o145;
        this.o359 = new o122;
        this.o360 = new o122
    };
    o107.prototype.o592 = function (o157) {
        if (o157 === undefined) o157 = 0;
        for (var o159 = parseInt(this.o359.length); o159 < o157; o159++) {
            this.o359[o159] = new o145;
            this.o360[o159] = new o145
        }
    };
    o107.o596 = function (o157, o159) {
        if (o159 === undefined) o159 = 0;
        for (var o161 = new o145, o163 = 0, o165 = 1 / 3, o167 = 0; o167 < o159; ++o167) {
            var o67 = o157[o167],
                o170 = o167 + 1 < o159 ? o157[parseInt(o167 + 1)] : o157[0],
                o172 = 0.5 * ((o67.o214 - 0) * (o170.o105 - 0) - (o67.o105 - 0) * (o170.o214 - 0));
            o163 += o172;
            o161.o214 += o172 * o165 * (0 + o67.o214 + o170.o214);
            o161.o105 += o172 * o165 * (0 + o67.o105 + o170.o105)
        }
        o161.o214 *= 1 / o163;
        o161.o105 *= 1 / o163;
        return o161
    };
    o107.o607 = function (o157, o159, o161) {
        if (o161 === undefined) o161 = 0;
        var o163 = 0,
            o165 = new o122(o161 + 1);
        for (o163 = 0; o163 < o161; ++o163) o165[o163] = o159[o163];
        o165[o161] = o165[0];
        o159 = Number.o337;
        for (o163 = 1; o163 <= o161; ++o163) {
            var o167 = o165[parseInt(o163 - 1)],
                o67 = o165[o163].o214 - o167.o214,
                o170 = o165[o163].o105 - o167.o105,
                o172 = Math.sqrt(o67 * o67 + o170 * o170);
            o67 /= o172;
            o170 /= o172;
            for (var o174 = -o170, o176 = o67, o178 = o172 = Number.o337, o180 = -Number.o337, o182 = -Number.o337, o184 = 0; o184 < o161; ++o184) {
                var o186 = o165[o184].o214 - o167.o214,
                    o188 = o165[o184].o105 - o167.o105,
                    o190 = o67 * o186 + o170 * o188;
                o186 = o174 * o186 + o176 * o188;
                if (o190 < o172) o172 = o190;
                if (o186 < o178) o178 = o186;
                if (o190 > o180) o180 = o190;
                if (o186 > o182) o182 = o186
            }
            o184 = (o180 - o172) * (o182 - o178);
            if (o184 < 0.95 * o159) {
                o159 = o184;
                o157.o170.o361.o214 = o67;
                o157.o170.o361.o105 = o170;
                o157.o170.o362.o214 = o174;
                o157.o170.o362.o105 = o176;
                o67 = 0.5 * (o172 + o180);
                o170 = 0.5 * (o178 + o182);
                o174 = o157.o170;
                o157.o553.o214 = o167.o214 + (o174.o361.o214 * o67 + o174.o362.o214 * o170);
                o157.o553.o105 = o167.o105 + (o174.o361.o105 * o67 + o174.o362.o105 * o170);
                o157.o608.o214 = 0.5 * (o180 - o172);
                o157.o608.o105 = 0.5 * (o182 - o178)
            }
        }
    };
    o96.o328.push(function () {
        o96.o124.o125.o191.o609 = new o139
    });
    o137.o193 = function () {};
    o137.prototype.o409 = function () {
        return null
    };
    o137.prototype.Set = function (o157) {
        this.o374 = o157.o374
    };
    o137.prototype.o455 = function () {
        return this.o377
    };
    o137.prototype.o548 = function () {
        return false
    };
    o137.prototype.o335 = function () {
        return false
    };
    o137.prototype.o549 = function () {};
    o137.prototype.o550 = function () {};
    o137.prototype.o554 = function () {
        return 0
    };
    o137.o344 = function (o157, o159, o161, o163) {
        var o165 = new o149;
        o165.o419 = new o153;
        o165.o419.Set(o157);
        o165.o420 = new o153;
        o165.o420.Set(o161);
        o165.o421 = o159;
        o165.o422 = o163;
        o165.o454 = true;
        o157 = new o155;
        o157.o513 = 0;
        o159 = new o151;
        o147.o417(o159, o157, o165);
        return o159.o450 < 10 * Number.MIN_VALUE
    };
    o137.prototype.o193 = function () {
        this.o377 = o137.o610;
        this.o374 = o97.o611
    };
    o96.o328.push(function () {
        o96.o124.o125.o193.o610 = parseInt(-1);
        o96.o124.o125.o193.o456 = 0;
        o96.o124.o125.o193.o457 = 1;
        o96.o124.o125.o193.o588 = 2;
        o96.o124.o125.o193.o612 = 3;
        o96.o124.o125.o193.o613 = 1;
        o96.o124.o125.o193.o614 = 0;
        o96.o124.o125.o193.o615 = parseInt(-1)
    })
})();
(function () {
    var o97 = o96.o126.o195,
        o98 = o96.o126.o197,
        o99 = o96.o126.Math.o202;
    o97.o195 = function () {
        this.o616 = this.o617 = this.o618 = 0
    };
    o97.prototype.o195 = function (o105, o106, o107) {
        if (o105 === undefined) o105 = 0;
        if (o106 === undefined) o106 = 0;
        if (o107 === undefined) o107 = 0;
        this.o618 = o96.o119(255 * o99.o517(o105, 0, 1));
        this.o617 = o96.o119(255 * o99.o517(o106, 0, 1));
        this.o616 = o96.o119(255 * o99.o517(o107, 0, 1))
    };
    o97.prototype.Set = function (o105, o106, o107) {
        if (o105 === undefined) o105 = 0;
        if (o106 === undefined) o106 = 0;
        if (o107 === undefined) o107 = 0;
        this.o618 = o96.o119(255 * o99.o517(o105,
            0, 1));
        this.o617 = o96.o119(255 * o99.o517(o106, 0, 1));
        this.o616 = o96.o119(255 * o99.o517(o107, 0, 1))
    };
    Object.defineProperty(o97.prototype, "r", {
        enumerable: false,
        configurable: true,
        set: function (o105) {
            if (o105 === undefined) o105 = 0;
            this.o618 = o96.o119(255 * o99.o517(o105, 0, 1))
        }
    });
    Object.defineProperty(o97.prototype, "g", {
        enumerable: false,
        configurable: true,
        set: function (o105) {
            if (o105 === undefined) o105 = 0;
            this.o617 = o96.o119(255 * o99.o517(o105, 0, 1))
        }
    });
    Object.defineProperty(o97.prototype, "b", {
        enumerable: false,
        configurable: true,
        set: function (o105) {
            if (o105 === undefined) o105 = 0;
            this.o616 = o96.o119(255 * o99.o517(o105, 0, 1))
        }
    });
    Object.defineProperty(o97.prototype, "color", {
        enumerable: false,
        configurable: true,
        get: function () {
            return this.o618 << 16 | this.o617 << 8 | this.o616
        }
    });
    o98.o197 = function () {};
    o98.o619 = function (o105, o106) {
        if (o105 === undefined) o105 = 0;
        if (o106 === undefined) o106 = 0;
        return Math.sqrt(o105 * o106)
    };
    o98.o620 = function (o105, o106) {
        if (o105 === undefined) o105 = 0;
        if (o106 === undefined) o106 = 0;
        return o105 > o106 ? o105 : o106
    };
    o98.o434 = function (o105) {
        if (!o105) throw "Assertion Failed";
    };
    o96.o328.push(function () {
        o96.o126.o197.o621 = "2.1alpha";
        o96.o126.o197.o622 = 65535;
        o96.o126.o197.o552 = Math.o555;
        o96.o126.o197.o395 = 2;
        o96.o126.o197.o466 = 0.1;
        o96.o126.o197.o475 = 2;
        o96.o126.o197.o623 = 2 * o98.o611;
        o96.o126.o197.o611 = 0.0050;
        o96.o126.o197.o624 = 2 / 180 * o98.o552;
        o96.o126.o197.o589 = 8 * o98.o611;
        o96.o126.o197.o625 = 32;
        o96.o126.o197.o626 = 32;
        o96.o126.o197.o627 = 1;
        o96.o126.o197.o628 = 0.2;
        o96.o126.o197.o629 = 8 / 180 * o98.o552;
        o96.o126.o197.o630 = 2;
        o96.o126.o197.o631 = o98.o630 * o98.o630;
        o96.o126.o197.o632 = 0.5 * o98.o552;
        o96.o126.o197.o633 = o98.o632 * o98.o632;
        o96.o126.o197.o634 = 0.2;
        o96.o126.o197.o635 = 0.5;
        o96.o126.o197.o636 = 0.01;
        o96.o126.o197.o637 = 2 / 180 * o98.o552
    })
})();
(function () {
    var o97 = o96.o126.Math.o199,
        o98 = o96.o126.Math.o201,
        o99 = o96.o126.Math.o202,
        o105 = o96.o126.Math.o204,
        o106 = o96.o126.Math.o206,
        o107 = o96.o126.Math.o208,
        o137 = o96.o126.Math.o209;
    o97.o199 = function () {
        this.o361 = new o107;
        this.o362 = new o107
    };
    o97.prototype.o199 = function () {
        this.o638()
    };
    o97.o639 = function (o139) {
        if (o139 === undefined) o139 = 0;
        var o141 = new o97;
        o141.Set(o139);
        return o141
    };
    o97.o640 = function (o139, o141) {
        var o143 = new o97;
        o143.o641(o139, o141);
        return o143
    };
    o97.prototype.Set = function (o139) {
        if (o139 === undefined) o139 = 0;
        var o141 = Math.cos(o139);
        o139 = Math.sin(o139);
        this.o361.o214 = o141;
        this.o362.o214 = -o139;
        this.o361.o105 = o139;
        this.o362.o105 = o141
    };
    o97.prototype.o641 = function (o139, o141) {
        this.o361.o393(o139);
        this.o362.o393(o141)
    };
    o97.prototype.o409 = function () {
        var o139 = new o97;
        o139.o644(this);
        return o139
    };
    o97.prototype.o644 = function (o139) {
        this.o361.o393(o139.o361);
        this.o362.o393(o139.o362)
    };
    o97.prototype.o645 = function (o139) {
        this.o361.o214 += o139.o361.o214;
        this.o361.o105 += o139.o361.o105;
        this.o362.o214 += o139.o362.o214;
        this.o362.o105 += o139.o362.o105
    };
    o97.prototype.o638 = function () {
        this.o361.o214 = 1;
        this.o362.o214 = 0;
        this.o361.o105 = 0;
        this.o362.o105 = 1
    };
    o97.prototype.o402 = function () {
        this.o361.o214 = 0;
        this.o362.o214 = 0;
        this.o361.o105 = 0;
        this.o362.o105 = 0
    };
    o97.prototype.o646 = function () {
        return Math.atan2(this.o361.o105, this.o361.o214)
    };
    o97.prototype.o648 = function (o139) {
        var o141 = this.o361.o214,
            o143 = this.o362.o214,
            o145 = this.o361.o105,
            o147 = this.o362.o105,
            o149 = o141 * o147 - o143 * o145;
        if (o149 != 0) o149 = 1 / o149;
        o139.o361.o214 = o149 * o147;
        o139.o362.o214 = -o149 * o143;
        o139.o361.o105 = -o149 * o145;
        o139.o362.o105 = o149 * o141;
        return o139
    };
    o97.prototype.o649 = function (o139, o141, o143) {
        if (o141 === undefined) o141 = 0;
        if (o143 === undefined) o143 = 0;
        var o145 = this.o361.o214,
            o147 = this.o362.o214,
            o149 = this.o361.o105,
            o151 = this.o362.o105,
            o153 = o145 * o151 - o147 * o149;
        if (o153 != 0) o153 = 1 / o153;
        o139.o214 = o153 * (o151 * o141 - o147 * o143);
        o139.o105 = o153 * (o145 * o143 - o149 * o141);
        return o139
    };
    o97.prototype.o540 = function () {
        this.o361.o540();
        this.o362.o540()
    };
    o98.o201 = function () {
        this.o361 = new o137;
        this.o362 = new o137;
        this.o650 = new o137
    };
    o98.prototype.o201 = function (o139, o141, o143) {
        if (o139 === undefined) o139 = null;
        if (o141 === undefined) o141 = null;
        if (o143 === undefined) o143 = null;
        if (!o139 && !o141 && !o143) {
            this.o361.o402();
            this.o362.o402();
            this.o650.o402()
        } else {
            this.o361.o393(o139);
            this.o362.o393(o141);
            this.o650.o393(o143)
        }
    };
    o98.prototype.o651 = function (o139, o141, o143) {
        this.o361.o393(o139);
        this.o362.o393(o141);
        this.o650.o393(o143)
    };
    o98.prototype.o409 = function () {
        return new o98(this.o361, this.o362, this.o650)
    };
    o98.prototype.o644 = function (o139) {
        this.o361.o393(o139.o361);
        this.o362.o393(o139.o362);
        this.o650.o393(o139.o650)
    };
    o98.prototype.o645 = function (o139) {
        this.o361.o214 += o139.o361.o214;
        this.o361.o105 += o139.o361.o105;
        this.o361.o159 += o139.o361.o159;
        this.o362.o214 += o139.o362.o214;
        this.o362.o105 += o139.o362.o105;
        this.o362.o159 += o139.o362.o159;
        this.o650.o214 += o139.o650.o214;
        this.o650.o105 += o139.o650.o105;
        this.o650.o159 += o139.o650.o159
    };
    o98.prototype.o638 = function () {
        this.o361.o214 = 1;
        this.o362.o214 = 0;
        this.o650.o214 = 0;
        this.o361.o105 = 0;
        this.o362.o105 = 1;
        this.o650.o105 = 0;
        this.o361.o159 = 0;
        this.o362.o159 = 0;
        this.o650.o159 = 1
    };
    o98.prototype.o402 = function () {
        this.o361.o214 = 0;
        this.o362.o214 = 0;
        this.o650.o214 = 0;
        this.o361.o105 = 0;
        this.o362.o105 = 0;
        this.o650.o105 = 0;
        this.o361.o159 = 0;
        this.o362.o159 = 0;
        this.o650.o159 = 0
    };
    o98.prototype.o652 = function (o139, o141, o143) {
        if (o141 === undefined) o141 = 0;
        if (o143 === undefined) o143 = 0;
        var o145 = this.o361.o214,
            o147 = this.o362.o214,
            o149 = this.o361.o105,
            o151 = this.o362.o105,
            o153 = o145 * o151 - o147 * o149;
        if (o153 != 0) o153 = 1 / o153;
        o139.o214 = o153 * (o151 * o141 - o147 * o143);
        o139.o105 = o153 * (o145 * o143 - o149 * o141);
        return o139
    };
    o98.prototype.o653 = function (o139, o141, o143, o145) {
        if (o141 === undefined) o141 = 0;
        if (o143 === undefined) o143 = 0;
        if (o145 === undefined) o145 = 0;
        var o147 = this.o361.o214,
            o149 = this.o361.o105,
            o151 = this.o361.o159,
            o153 = this.o362.o214,
            o155 = this.o362.o105,
            o157 = this.o362.o159,
            o159 = this.o650.o214,
            o161 = this.o650.o105,
            o163 = this.o650.o159,
            o165 = o147 * (o155 * o163 - o157 * o161) + o149 * (o157 * o159 - o153 * o163) + o151 * (o153 * o161 - o155 * o159);
        if (o165 != 0) o165 = 1 / o165;
        o139.o214 = o165 * (o141 * (o155 * o163 - o157 * o161) + o143 * (o157 * o159 - o153 * o163) + o145 * (o153 * o161 - o155 * o159));
        o139.o105 = o165 * (o147 * (o143 * o163 - o145 * o161) + o149 * (o145 * o159 - o141 * o163) + o151 * (o141 * o161 - o143 * o159));
        o139.o159 = o165 * (o147 * (o155 * o145 - o157 * o143) + o149 * (o157 * o141 - o153 * o145) + o151 * (o153 * o143 - o155 * o141));
        return o139
    };
    o99.o202 = function () {};
    o99.o331 = function (o139) {
        if (o139 === undefined) o139 = 0;
        return isFinite(o139)
    };
    o99.o526 = function (o139, o141) {
        return o139.o214 * o141.o214 + o139.o105 * o141.o105
    };
    o99.o525 = function (o139, o141) {
        return o139.o214 * o141.o105 - o139.o105 * o141.o214
    };
    o99.o515 = function (o139, o141) {
        if (o141 === undefined) o141 = 0;
        return new o107(o141 * o139.o105, -o141 * o139.o214)
    };
    o99.o482 = function (o139, o141) {
        if (o139 === undefined) o139 = 0;
        return new o107(-o139 * o141.o105, o139 * o141.o214)
    };
    o99.o516 = function (o139, o141) {
        return new o107(o139.o361.o214 * o141.o214 + o139.o362.o214 * o141.o105, o139.o361.o105 * o141.o214 + o139.o362.o105 * o141.o105)
    };
    o99.o437 = function (o139, o141) {
        return new o107(o99.o526(o141, o139.o361), o99.o526(o141, o139.o362))
    };
    o99.o440 = function (o139, o141) {
        var o143 = o99.o516(o139.o170, o141);
        o143.o214 += o139.o363.o214;
        o143.o105 += o139.o363.o105;
        return o143
    };
    o99.o655 = function (o139, o141) {
        var o143 = o99.o443(o141, o139.o363),
            o145 = o143.o214 * o139.o170.o361.o214 + o143.o105 * o139.o170.o361.o105;
        o143.o105 = o143.o214 * o139.o170.o362.o214 + o143.o105 * o139.o170.o362.o105;
        o143.o214 = o145;
        return o143
    };
    o99.o656 = function (o139, o141) {
        return new o107(o139.o214 + o141.o214, o139.o105 + o141.o105)
    };
    o99.o443 = function (o139, o141) {
        return new o107(o139.o214 - o141.o214, o139.o105 - o141.o105)
    };
    o99.o417 = function (o139, o141) {
        var o143 = o139.o214 - o141.o214,
            o145 = o139.o105 - o141.o105;
        return Math.sqrt(o143 * o143 + o145 * o145)
    };
    o99.o657 = function (o139, o141) {
        var o143 = o139.o214 - o141.o214,
            o145 = o139.o105 - o141.o105;
        return o143 * o143 + o145 * o145
    };
    o99.o658 = function (o139, o141) {
        if (o139 === undefined) o139 = 0;
        return new o107(o139 * o141.o214, o139 * o141.o105)
    };
    o99.o659 = function (o139, o141) {
        return o97.o640(o99.o656(o139.o361, o141.o361), o99.o656(o139.o362, o141.o362))
    };
    o99.o660 = function (o139, o141) {
        return o97.o640(o99.o516(o139,
            o141.o361), o99.o516(o139, o141.o362))
    };
    o99.o661 = function (o139, o141) {
        var o143 = new o107(o99.o526(o139.o361, o141.o361), o99.o526(o139.o362, o141.o361)),
            o145 = new o107(o99.o526(o139.o361, o141.o362), o99.o526(o139.o362, o141.o362));
        return o97.o640(o143, o145)
    };
    o99.o540 = function (o139) {
        if (o139 === undefined) o139 = 0;
        return o139 > 0 ? o139 : -o139
    };
    o99.o483 = function (o139) {
        return new o107(o99.o540(o139.o214), o99.o540(o139.o105))
    };
    o99.o662 = function (o139) {
        return o97.o640(o99.o483(o139.o361), o99.o483(o139.o362))
    };
    o99.o663 = function (o139, o141) {
        if (o139 === undefined) o139 = 0;
        if (o141 === undefined) o141 = 0;
        return o139 < o141 ? o139 : o141
    };
    o99.o664 = function (o139, o141) {
        return new o107(o99.o663(o139.o214, o141.o214), o99.o663(o139.o105, o141.o105))
    };
    o99.o446 = function (o139, o141) {
        if (o139 === undefined) o139 = 0;
        if (o141 === undefined) o141 = 0;
        return o139 > o141 ? o139 : o141
    };
    o99.o665 = function (o139, o141) {
        return new o107(o99.o446(o139.o214, o141.o214), o99.o446(o139.o105, o141.o105))
    };
    o99.o517 = function (o139, o141, o143) {
        if (o139 === undefined) o139 = 0;
        if (o141 === undefined) o141 = 0;
        if (o143 === undefined) o143 = 0;
        return o139 < o141 ? o141 : o139 > o143 ? o143 : o139
    };
    o99.o666 = function (o139, o141, o143) {
        return o99.o665(o141, o99.o664(o139, o143))
    };
    o99.o349 = function (o139, o141) {
        var o143 = o139[0];
        o139[0] = o141[0];
        o141[0] = o143
    };
    o99.o667 = function () {
        return Math.random() * 2 - 1
    };
    o99.o668 = function (o139, o141) {
        if (o139 === undefined) o139 = 0;
        if (o141 === undefined) o141 = 0;
        var o143 = Math.random();
        return o143 = (o141 - o139) * o143 + o139
    };
    o99.o669 = function (o139) {
        if (o139 === undefined) o139 = 0;
        o139 |= o139 >> 1 & 2147483647;
        o139 |= o139 >> 2 & 1073741823;
        o139 |= o139 >> 4 & 268435455;
        o139 |= o139 >> 8 & 16777215;
        o139 |= o139 >> 16 & 65535;
        return o139 + 1
    };
    o99.o670 = function (o139) {
        if (o139 === undefined) o139 = 0;
        return o139 > 0 && (o139 & o139 - 1) == 0
    };
    o96.o328.push(function () {
        o96.o126.Math.o202.o671 = new o107(0, 0);
        o96.o126.Math.o202.o672 = o97.o640(new o107(1, 0), new o107(0, 1));
        o96.o126.Math.o202.o673 = new o106(o99.o671, o99.o672)
    });
    o105.o204 = function () {
        this.o674 = new o107;
        this.o675 = new o107;
        this.o196 = new o107
    };
    o105.prototype.Set = function (o139) {
        this.o674.o393(o139.o674);
        this.o675.o393(o139.o675);
        this.o196.o393(o139.o196);
        this.o676 = o139.o676;
        this.o194 = o139.o194;
        this.o531 = o139.o531
    };
    o105.prototype.o409 = function () {
        var o139 = new o105;
        o139.o674.o393(this.o674);
        o139.o675.o393(this.o675);
        o139.o196.o393(this.o196);
        o139.o676 = this.o676;
        o139.o194 = this.o194;
        o139.o531 = this.o531;
        return o139
    };
    o105.prototype.o535 = function (o139, o141) {
        if (o141 === undefined) o141 = 0;
        o139.o363.o214 = (1 - o141) * this.o675.o214 + o141 * this.o196.o214;
        o139.o363.o105 = (1 - o141) * this.o675.o105 + o141 * this.o196.o105;
        o139.o170.Set((1 - o141) * this.o676 + o141 * this.o194);
        var o143 = o139.o170;
        o139.o363.o214 -= o143.o361.o214 * this.o674.o214 + o143.o362.o214 * this.o674.o105;
        o139.o363.o105 -= o143.o361.o105 * this.o674.o214 + o143.o362.o105 * this.o674.o105
    };
    o105.prototype.o677 = function (o139) {
        if (o139 === undefined) o139 = 0;
        if (this.o531 < o139 && 1 - this.o531 > Number.MIN_VALUE) {
            var o141 = (o139 - this.o531) / (1 - this.o531);
            this.o675.o214 = (1 - o141) * this.o675.o214 + o141 * this.o196.o214;
            this.o675.o105 = (1 - o141) * this.o675.o105 + o141 * this.o196.o105;
            this.o676 = (1 - o141) * this.o676 + o141 * this.o194;
            this.o531 = o139
        }
    };
    o106.o206 = function () {
        this.o363 = new o107;
        this.o170 = new o97
    };
    o106.prototype.o206 = function (o139, o141) {
        if (o139 === undefined) o139 = null;
        if (o141 === undefined) o141 = null;
        if (o139) {
            this.o363.o393(o139);
            this.o170.o644(o141)
        }
    };
    o106.prototype.o510 = function (o139, o141) {
        this.o363.o393(o139);
        this.o170.o644(o141)
    };
    o106.prototype.o638 = function () {
        this.o363.o402();
        this.o170.o638()
    };
    o106.prototype.Set = function (o139) {
        this.o363.o393(o139.o363);
        this.o170.o644(o139.o170)
    };
    o106.prototype.o646 = function () {
        return Math.atan2(this.o170.o361.o105, this.o170.o361.o214)
    };
    o107.o208 = function () {};
    o107.prototype.o208 = function (o139, o141) {
        if (o139 === undefined) o139 = 0;
        if (o141 === undefined) o141 = 0;
        this.o214 = o139;
        this.o105 = o141
    };
    o107.prototype.o402 = function () {
        this.o105 = this.o214 = 0
    };
    o107.prototype.Set = function (o139, o141) {
        if (o139 === undefined) o139 = 0;
        if (o141 === undefined) o141 = 0;
        this.o214 = o139;
        this.o105 = o141
    };
    o107.prototype.o393 = function (o139) {
        this.o214 = o139.o214;
        this.o105 = o139.o105
    };
    o107.prototype.o438 = function () {
        return new o107(-this.o214, -this.o105)
    };
    o107.prototype.o518 = function () {
        this.o214 = -this.o214;
        this.o105 = -this.o105
    };
    o107.o678 = function (o139, o141) {
        if (o139 === undefined) o139 = 0;
        if (o141 === undefined) o141 = 0;
        return new o107(o139, o141)
    };
    o107.prototype.o409 = function () {
        return new o107(this.o214, this.o105)
    };
    o107.prototype.o679 = function (o139) {
        this.o214 += o139.o214;
        this.o105 += o139.o105
    };
    o107.prototype.o680 = function (o139) {
        this.o214 -= o139.o214;
        this.o105 -= o139.o105
    };
    o107.prototype.o604 = function (o139) {
        if (o139 === undefined) o139 = 0;
        this.o214 *= o139;
        this.o105 *= o139
    };
    o107.prototype.o681 = function (o139) {
        var o141 = this.o214;
        this.o214 = o139.o361.o214 * o141 + o139.o362.o214 * this.o105;
        this.o105 = o139.o361.o105 * o141 + o139.o362.o105 * this.o105
    };
    o107.prototype.o682 = function (o139) {
        var o141 = o99.o526(this, o139.o361);
        this.o105 = o99.o526(this, o139.o362);
        this.o214 = o141
    };
    o107.prototype.o515 = function (o139) {
        if (o139 === undefined) o139 = 0;
        var o141 = this.o214;
        this.o214 = o139 * this.o105;
        this.o105 = -o139 * o141
    };
    o107.prototype.o482 = function (o139) {
        if (o139 === undefined) o139 = 0;
        var o141 = this.o214;
        this.o214 = -o139 * this.o105;
        this.o105 = o139 * o141
    };
    o107.prototype.o664 = function (o139) {
        this.o214 = this.o214 < o139.o214 ? this.o214 : o139.o214;
        this.o105 = this.o105 < o139.o105 ? this.o105 : o139.o105
    };
    o107.prototype.o665 = function (o139) {
        this.o214 = this.o214 > o139.o214 ? this.o214 : o139.o214;
        this.o105 = this.o105 > o139.o105 ? this.o105 : o139.o105
    };
    o107.prototype.o540 = function () {
        if (this.o214 < 0) this.o214 = -this.o214;
        if (this.o105 < 0) this.o105 = -this.o105
    };
    o107.prototype.o451 = function () {
        return Math.sqrt(this.o214 * this.o214 + this.o105 * this.o105)
    };
    o107.prototype.o428 = function () {
        return this.o214 * this.o214 + this.o105 * this.o105
    };
    o107.prototype.o382 = function () {
        var o139 = Math.sqrt(this.o214 * this.o214 + this.o105 * this.o105);
        if (o139 < Number.MIN_VALUE) return 0;
        var o141 = 1 / o139;
        this.o214 *= o141;
        this.o105 *= o141;
        return o139
    };
    o107.prototype.o331 = function () {
        return o99.o331(this.o214) && o99.o331(this.o105)
    };
    o137.o209 = function () {};
    o137.prototype.o209 = function (o139, o141, o143) {
        if (o139 === undefined) o139 = 0;
        if (o141 === undefined) o141 = 0;
        if (o143 === undefined) o143 = 0;
        this.o214 = o139;
        this.o105 = o141;
        this.o159 = o143
    };
    o137.prototype.o402 = function () {
        this.o214 = this.o105 = this.o159 = 0
    };
    o137.prototype.Set = function (o139, o141, o143) {
        if (o139 === undefined) o139 = 0;
        if (o141 === undefined) o141 = 0;
        if (o143 === undefined) o143 = 0;
        this.o214 = o139;
        this.o105 = o141;
        this.o159 = o143
    };
    o137.prototype.o393 = function (o139) {
            this.o214 = o139.o214;
            this.o105 = o139.o105;
            this.o159 = o139.o159
    };
    o137.prototype.o438 = function () {
        return new o137(-this.o214, -this.o105, -this.o159)
    };
    o137.prototype.o518 = function () {
        this.o214 = -this.o214;
        this.o105 = -this.o105;
        this.o159 = -this.o159
    };
    o137.prototype.o409 = function () {
        return new o137(this.o214, this.o105, this.o159)
    };
    o137.prototype.o679 = function (o139) {
        this.o214 += o139.o214;
        this.o105 += o139.o105;
        this.o159 += o139.o159
    };
    o137.prototype.o680 = function (o139) {
        this.o214 -= o139.o214;
        this.o105 -= o139.o105;
        this.o159 -= o139.o159
    };
    o137.prototype.o604 = function (o139) {
        if (o139 === undefined) o139 = 0;
        this.o214 *= o139;
        this.o105 *= o139;
        this.o159 *= o139
    }
})();
(function () {
    var o97 = o96.o126.Math.o202,
        o98 = o96.o126.Math.o204,
        o99 = o96.o126.Math.o206,
        o105 = o96.o126.Math.o208,
        o106 = o96.o126.o195,
        o107 = o96.o126.o197,
        o137 = o96.o124.o131,
        o139 = o96.o124.o136,
        o141 = o96.o124.o148,
        o143 = o96.o124.o160,
        o145 = o96.o124.o162,
        o147 = o96.o124.o125.o183,
        o149 = o96.o124.o125.o187,
        o151 = o96.o124.o125.o189,
        o153 = o96.o124.o125.o191,
        o155 = o96.o124.o125.o193,
        o157 = o96.o127.o211,
        o159 = o96.o127.o213,
        o161 = o96.o127.o215,
        o163 = o96.o127.o217,
        o165 = o96.o127.o219,
        o167 = o96.o127.o221,
        o67 = o96.o127.o223,
        o170 = o96.o127.o225,
        o172 = o96.o127.o227,
        o174 = o96.o127.o229,
        o176 = o96.o127.o231,
        o178 = o96.o127.o233,
        o180 = o96.o127.o235,
        o182 = o96.o127.o237,
        o184 = o96.o127.o128.o241,
        o186 = o96.o127.o128.o249,
        o188 = o96.o127.o128.o255,
        o190 = o96.o127.o130.o297,
        o192 = o96.o127.o130.o315;
    o157.o211 = function () {
        this.o683 = new o99;
        this.o684 = new o98;
        this.o685 = new o105;
        this.o686 = new o105
    };
    o157.prototype.o687 = function (o194, o196, o198) {
        if (o198 === undefined) o198 = 0;
        var o200 = Math.atan2(o196.o577().o105, o196.o577().o214);
        o198 = o97.o658(Math.tan((o200 - o198) * 0.5), o196.o577());
        o198 = o97.o443(o198, o196.o576());
        o198 = o97.o658(o107.o589, o198);
        o198 = o97.o656(o198, o196.o572());
        var o93 = o97.o656(o194.o577(),
            o196.o577());
        o93.o382();
        var o203 = o97.o526(o194.o577(), o196.o576()) > 0;
        o194.o591(o196, o198, o93, o203);
        o196.o590(o194, o198, o93, o203);
        return o200
    };
    o157.prototype.o689 = function (o194) {
        if (this.o690.o691() == true) return null;
        var o196 = new o174;
        o196.o692(this, this.o683, o194);
        this.o693 & o157.o694 && o196.o464(this.o690.o695.o696, this.o683);
        o196.o697 = this.o698;
        this.o698 = o196;
        ++this.o699;
        o196.o700 = this;
        o196.o701 > 0 && this.o702();
        this.o690.o693 |= o182.o703;
        return o196
    };
    o157.prototype.o704 = function (o194, o196) {
        if (o196 === undefined) o196 = 0;
        var o198 = new o176;
        o198.o705 = o194;
        o198.o706 = o196;
        return this.o689(o198)
    };
    o157.prototype.o707 = function (o194) {
        if (this.o690.o691() != true) {
            for (var o196 = this.o698, o198 = null; o196 != null;) {
                if (o196 == o194) {
                    if (o198) o198.o697 = o194.o697;
                    else this.o698 = o194.o697;
                    break
                }
                o198 = o196;
                o196 = o196.o697
            }
            for (o196 = this.o708; o196;) {
                o198 = o196.o709;
                o196 = o196.next;
                var o200 = o198.o711(),
                    o93 = o198.o712();
                if (o194 == o200 || o194 == o93) this.o690.o695.o713(o198)
            }
            this.o693 &
                o157.o694 && o194.o470(this.o690.o695.o696);
            o194.o713();
            o194.o700 = null;
            o194.o697 = null;
            --this.o699;
            this.o702()
        }
    };
    o157.prototype.o714 = function (o194, o196) {
        if (o196 === undefined) o196 = 0;
        var o198;
        if (this.o690.o691() != true) {
            this.o683.o170.Set(o196);
            this.o683.o363.o393(o194);
            o198 = this.o683.o170;
            var o200 = this.o684.o674;
            this.o684.o196.o214 = o198.o361.o214 * o200.o214 + o198.o362.o214 * o200.o105;
            this.o684.o196.o105 = o198.o361.o105 * o200.o214 + o198.o362.o105 * o200.o105;
            this.o684.o196.o214 += this.o683.o363.o214;
            this.o684.o196.o105 += this.o683.o363.o105;
            this.o684.o675.o393(this.o684.o196);
            this.o684.o676 = this.o684.o194 = o196;
            o200 = this.o690.o695.o696;
            for (o198 = this.o698; o198; o198 = o198.o697) o198.o715(o200, this.o683, this.o683);
            this.o690.o695.o716()
        }
    };
    o157.prototype.o717 = function (o194) {
        this.o714(o194.o363, o194.o646())
    };
    o157.prototype.o535 = function () {
        return this.o683
    };
    o157.prototype.o718 = function () {
        return this.o683.o363
    };
    o157.prototype.o719 = function (o194) {
        this.o714(o194,
            this.o646())
    };
    o157.prototype.o646 = function () {
        return this.o684.o194
    };
    o157.prototype.o720 = function (o194) {
        if (o194 === undefined) o194 = 0;
        this.o714(this.o718(), o194)
    };
    o157.prototype.o721 = function () {
        return this.o684.o196
    };
    o157.prototype.o722 = function () {
        return this.o684.o674
    };
    o157.prototype.o723 = function (o194) {
        this.o377 != o157.o724 && this.o685.o393(o194)
    };
    o157.prototype.o725 = function () {
        return this.o685
    };
    o157.prototype.o726 = function (o194) {
            if (o194 === undefined) o194 = 0;
            if (this.o377 != o157.o724) this.o727 = o194
    };
    o157.prototype.o728 = function () {
        return this.o727
    };
    o157.prototype.o729 = function () {
        var o194 = new o159;
        o194.type = this.o455();
        o194.o731 = (this.o693 & o157.o732) == o157.o732;
        o194.o733 = this.o646();
        o194.o734 = this.o735;
        o194.o736 = this.o727;
        o194.o737 = (this.o693 & o157.o738) == o157.o738;
        o194.o739 = (this.o693 &
            o157.o740) == o157.o740;
        o194.o741 = (this.o693 & o157.o742) == o157.o742;
        o194.o743 = this.o744;
        o194.o745.o393(this.o725());
        o194.o363 = this.o718();
        o194.o468 = this.o480();
        return o194
    };
    o157.prototype.o746 = function (o194, o196) {
        if (this.o377 == o157.o747) {
            this.o748() == false && this.o749(true);
            this.o686.o214 += o194.o214;
            this.o686.o105 += o194.o105;
            this.o750 += (o196.o214 - this.o684.o196.o214) * o194.o105 - (o196.o105 - this.o684.o196.o105) * o194.o214
        }
    };
    o157.prototype.o751 = function (o194) {
        if (o194 === undefined) o194 = 0;
        if (this.o377 == o157.o747) {
            this.o748() == false && this.o749(true);
            this.o750 += o194
        }
    };
    o157.prototype.o752 = function (o194, o196) {
        if (this.o377 == o157.o747) {
            this.o748() == false && this.o749(true);
            this.o685.o214 += this.o753 * o194.o214;
            this.o685.o105 += this.o753 * o194.o105;
            this.o727 += this.o754 * ((o196.o214 - this.o684.o196.o214) * o194.o105 - (o196.o105 - this.o684.o196.o105) * o194.o214)
        }
    };
    o157.prototype.o755 = function (o194) {
        for (var o196 = this.o725().o409(), o198 = this.o728(),
                o200 = this.o721(), o93 = this.o690.o756(this.o729()), o203, o205 = this.o698; o205;)
            if (o194(o205)) {
                var o207 = o205.o697;
                if (o203) o203.o697 = o207;
                else this.o698 = o207;
                this.o699--;
                o205.o697 = o93.o698;
                o93.o698 = o205;
                o93.o699++;
                o205.o700 = o93;
                o205 = o207
            } else {
                o203 = o205;
                o205 = o205.o697
            }
        this.o702();
        o93.o702();
        o203 = this.o721();
        o194 = o93.o721();
        o203 = o97.o656(o196, o97.o482(o198, o97.o443(o203, o200)));
        o196 = o97.o656(o196, o97.o482(o198, o97.o443(o194, o200)));
        this.o723(o203);
        o93.o723(o196);
        this.o726(o198);
        o93.o726(o198);
        this.o757();
        o93.o757();
        return o93
    };
    o157.prototype.o758 = function (o194) {
        var o196;
        for (o196 = o194.o698; o196;) {
            var o198 = o196.o697;
            o194.o699--;
            o196.o697 = this.o698;
            this.o698 = o196;
            this.o699++;
            o196.o700 = o93;
            o196 = o198
        }
        o200.o699 = 0;
        var o200 = this,
            o93 = o194;
        o200.o721();
        o93.o721();
        o200.o725().o409();
        o93.o725().o409();
        o200.o728();
        o93.o728();
        o200.o702();
        this.o757()
    };
    o157.prototype.o759 = function () {
        return this.o760
    };
    o157.prototype.o761 = function () {
        return this.o762
    };
    o157.prototype.o763 = function (o194) {
        o194.o551 = this.o760;
        o194.o151 = this.o762;
        o194.o553.o393(this.o684.o674)
    };
    o157.prototype.o764 = function (o194) {
        o107.o434(this.o690.o691() == false);
        if (this.o690.o691() != true)
            if (this.o377 == o157.o747) {
                this.o754 = this.o762 = this.o753 = 0;
                this.o760 = o194.o551;
                if (this.o760 <= 0) this.o760 = 1;
                this.o753 = 1 / this.o760;
                if (o194.o151 > 0 && (this.o693 & o157.o738) == 0) {
                    this.o762 = o194.o151 - this.o760 * (o194.o553.o214 * o194.o553.o214 + o194.o553.o105 * o194.o553.o105);
                    this.o754 = 1 / this.o762
                }
                var o196 = this.o684.o196.o409();
                this.o684.o674.o393(o194.o553);
                this.o684.o675.o393(o97.o440(this.o683, this.o684.o674));
                this.o684.o196.o393(this.o684.o675);
                this.o685.o214 += this.o727 * -(this.o684.o196.o105 - o196.o105);
                this.o685.o105 += this.o727 * +(this.o684.o196.o214 - o196.o214)
            }
    };
    o157.prototype.o702 = function () {
        this.o754 = this.o762 = this.o753 = this.o760 = 0;
        this.o684.o674.o402();
        if (!(this.o377 == o157.o724 || this.o377 == o157.o765)) {
            for (var o194 = o105.o678(0, 0), o196 = this.o698; o196; o196 = o196.o697)
                if (o196.o701 != 0) {
                    var o198 = o196.o763();
                    this.o760 += o198.o551;
                    o194.o214 += o198.o553.o214 * o198.o551;
                    o194.o105 += o198.o553.o105 * o198.o551;
                    this.o762 += o198.o151
                }
            if (this.o760 > 0) {
                this.o753 = 1 / this.o760;
                o194.o214 *= this.o753;
                o194.o105 *= this.o753
            } else this.o753 = this.o760 = 1; if (this.o762 > 0 && (this.o693 & o157.o738) == 0) {
                this.o762 -= this.o760 * (o194.o214 * o194.o214 + o194.o105 * o194.o105);
                this.o762 *= this.o766;
                o107.o434(this.o762 > 0);
                this.o754 = 1 / this.o762
            } else this.o754 = this.o762 = 0;
            o196 = this.o684.o196.o409();
            this.o684.o674.o393(o194);
            this.o684.o675.o393(o97.o440(this.o683, this.o684.o674));
            this.o684.o196.o393(this.o684.o675);
            this.o685.o214 += this.o727 * -(this.o684.o196.o105 - o196.o105);
            this.o685.o105 += this.o727 * +(this.o684.o196.o214 - o196.o214)
        }
    };
    o157.prototype.o767 = function (o194) {
        var o196 = this.o683.o170;
        o194 = new o105(o196.o361.o214 * o194.o214 + o196.o362.o214 * o194.o105, o196.o361.o105 * o194.o214 + o196.o362.o105 * o194.o105);
        o194.o214 += this.o683.o363.o214;
        o194.o105 += this.o683.o363.o105;
        return o194
    };
    o157.prototype.o768 = function (o194) {
        return o97.o516(this.o683.o170, o194)
    };
    o157.prototype.o769 = function (o194) {
        return o97.o655(this.o683, o194)
    };
    o157.prototype.o770 = function (o194) {
        return o97.o437(this.o683.o170, o194)
    };
    o157.prototype.o771 = function (o194) {
        return new o105(this.o685.o214 - this.o727 * (o194.o105 - this.o684.o196.o105), this.o685.o105 + this.o727 * (o194.o214 - this.o684.o196.o214))
    };
    o157.prototype.o772 = function (o194) {
        var o196 = this.o683.o170;
        o194 = new o105(o196.o361.o214 * o194.o214 + o196.o362.o214 * o194.o105, o196.o361.o105 * o194.o214 + o196.o362.o105 * o194.o105);
        o194.o214 += this.o683.o363.o214;
        o194.o105 += this.o683.o363.o105;
        return new o105(this.o685.o214 - this.o727 * (o194.o105 - this.o684.o196.o105), this.o685.o105 + this.o727 * (o194.o214 - this.o684.o196.o214))
    };
    o157.prototype.o773 = function () {
        return this.o744
    };
    o157.prototype.o774 = function (o194) {
        if (o194 === undefined) o194 = 0;
        this.o744 = o194
    };
    o157.prototype.o775 = function () {
        return this.o735
    };
    o157.prototype.o776 = function (o194) {
        if (o194 === undefined) o194 = 0;
        this.o735 = o194
    };
    o157.prototype.o777 = function (o194) {
        if (o194 === undefined) o194 = 0;
        if (this.o377 != o194) {
            this.o377 = o194;
            this.o702();
            if (this.o377 == o157.o724) {
                this.o685.o402();
                this.o727 = 0
            }
            this.o749(true);
            this.o686.o402();
            this.o750 = 0;
            for (o194 = this.o708; o194; o194 = o194.next) o194.o709.o778()
        }
    };
    o157.prototype.o455 = function () {
        return this.o377
    };
    o157.prototype.o779 = function (o194) {
        if (o194) this.o693 |= o157.o740;
        else this.o693 &= ~o157.o740
    };
    o157.prototype.o780 = function () {
        return (this.o693 & o157.o740) == o157.o740
    };
    o157.prototype.o781 = function (o194) {
        if (o194) this.o693 |= o157.o732;
        else {
            this.o693 &= ~o157.o732;
            this.o749(true)
        }
    };
    o157.prototype.o749 = function (o194) {
        if (o194) {
            this.o693 |= o157.o742;
            this.o782 = 0
        } else {
            this.o693 &= ~o157.o742;
            this.o782 = 0;
            this.o685.o402();
            this.o727 = 0;
            this.o686.o402();
            this.o750 = 0
        }
    };
    o157.prototype.o748 = function () {
        return (this.o693 & o157.o742) == o157.o742
    };
    o157.prototype.o783 = function (o194) {
        if (o194) this.o693 |= o157.o738;
        else this.o693 &= ~o157.o738;
        this.o702()
    };
    o157.prototype.o784 = function () {
        return (this.o693 & o157.o738) == o157.o738
    };
    o157.prototype.o785 = function (o194) {
        if (o194 != this.o786()) {
            var o196;
            if (o194) {
                this.o693 |= o157.o694;
                o194 = this.o690.o695.o696;
                for (o196 = this.o698; o196; o196 = o196.o697) o196.o464(o194, this.o683)
            } else {
                this.o693 &= ~o157.o694;
                o194 = this.o690.o695.o696;
                for (o196 = this.o698; o196; o196 = o196.o697) o196.o470(o194);
                for (o194 = this.o708; o194;) {
                    o196 = o194;
                    o194 = o194.next;
                    this.o690.o695.o713(o196.o709)
                }
                this.o708 = null
            }
        }
    };
    o157.prototype.o786 = function () {
        return (this.o693 & o157.o694) == o157.o694
    };
    o157.prototype.o787 = function () {
        return (this.o693 & o157.o732) == o157.o732
    };
    o157.prototype.o788 = function () {
            return this.o698
    };
    o157.prototype.o789 = function () {
        return this.o790
    };
    o157.prototype.o791 = function () {
        return this.o792
    };
    o157.prototype.o793 = function () {
        return this.o708
    };
    o157.prototype.o794 = function () {
        return this.o697
    };
    o157.prototype.o480 = function () {
        return this.o795
    };
    o157.prototype.o796 = function (o194) {
        this.o795 = o194
    };
    o157.prototype.o797 = function () {
        return this.o690
    };
    o157.prototype.o211 = function (o194, o196) {
        this.o693 = 0;
        if (o194.o739) this.o693 |= o157.o740;
        if (o194.o737) this.o693 |= o157.o738;
        if (o194.o731) this.o693 |= o157.o732;
        if (o194.o741) this.o693 |= o157.o742;
        if (o194.o798) this.o693 |= o157.o694;
        this.o690 = o196;
        this.o683.o363.o393(o194.o363);
        this.o683.o170.Set(o194.o733);
        this.o684.o674.o402();
        this.o684.o531 = 1;
        this.o684.o676 = this.o684.o194 = o194.o733;
        var o198 = this.o683.o170,
            o200 = this.o684.o674;
        this.o684.o196.o214 = o198.o361.o214 * o200.o214 + o198.o362.o214 * o200.o105;
        this.o684.o196.o105 = o198.o361.o105 * o200.o214 + o198.o362.o105 * o200.o105;
        this.o684.o196.o214 += this.o683.o363.o214;
        this.o684.o196.o105 += this.o683.o363.o105;
        this.o684.o675.o393(this.o684.o196);
        this.o708 = this.o792 = this.o790 = null;
        this.o799 = 0;
        this.o697 = this.o800 = null;
        this.o685.o393(o194.o745);
        this.o727 = o194.o736;
        this.o744 = o194.o743;
        this.o735 = o194.o734;
        this.o686.Set(0, 0);
        this.o782 = this.o750 = 0;
        this.o377 = o194.type;
        if (this.o377 == o157.o747) this.o753 = this.o760 = 1;
        else this.o753 = this.o760 = 0;
        this.o754 = this.o762 = 0;
        this.o766 = o194.o801;
        this.o795 = o194.o468;
        this.o698 = null;
        this.o699 = 0
    };
    o157.prototype.o757 = function () {
        var o194 = o157.o802;
        o194.o170.Set(this.o684.o676);
        var o196 = o194.o170,
            o198 = this.o684.o674;
        o194.o363.o214 = this.o684.o675.o214 - (o196.o361.o214 * o198.o214 + o196.o362.o214 * o198.o105);
        o194.o363.o105 = this.o684.o675.o105 - (o196.o361.o105 * o198.o214 + o196.o362.o105 * o198.o105);
        o198 = this.o690.o695.o696;
        for (o196 = this.o698; o196; o196 = o196.o697) o196.o715(o198, o194, this.o683)
    };
    o157.prototype.o803 = function () {
        this.o683.o170.Set(this.o684.o194);
        var o194 = this.o683.o170,
            o196 = this.o684.o674;
        this.o683.o363.o214 = this.o684.o196.o214 - (o194.o361.o214 * o196.o214 + o194.o362.o214 * o196.o105);
        this.o683.o363.o105 = this.o684.o196.o105 - (o194.o361.o105 * o196.o214 + o194.o362.o105 * o196.o105)
    };
    o157.prototype.o804 = function (o194) {
        if (this.o377 != o157.o747 && o194.o377 != o157.o747) return false;
        for (var o196 = this.o790; o196; o196 = o196.next)
            if (o196.o805 == o194)
                if (o196.o806.o807 == false) return false;
        return true
    };
    o157.prototype.o677 = function (o194) {
        if (o194 === undefined) o194 = 0;
        this.o684.o677(o194);
        this.o684.o196.o393(this.o684.o675);
        this.o684.o194 = this.o684.o676;
        this.o803()
    };
    o96.o328.push(function () {
        o96.o127.o211.o802 = new o99;
        o96.o127.o211.o808 = 1;
        o96.o127.o211.o742 = 2;
        o96.o127.o211.o732 = 4;
        o96.o127.o211.o740 = 8;
        o96.o127.o211.o738 = 16;
        o96.o127.o211.o694 = 32;
        o96.o127.o211.o724 = 0;
        o96.o127.o211.o765 = 1;
        o96.o127.o211.o747 = 2
    });
    o159.o213 = function () {
        this.o363 = new o105;
        this.o745 = new o105
    };
    o159.prototype.o213 = function () {
        this.o468 = null;
        this.o363.Set(0, 0);
        this.o733 = 0;
        this.o745.Set(0, 0);
        this.o734 = this.o743 = this.o736 = 0;
        this.o741 = this.o731 = true;
        this.o739 = this.o737 = false;
        this.type = o157.o724;
        this.o798 = true;
        this.o801 = 1
    };
    o161.o215 = function () {};
    o161.prototype.o804 = function (o194, o196) {
            var o198 = o194.o809(),
                o200 = o196.o809();
            if (o198.o810 == o200.o810 && o198.o810 != 0) return o198.o810 > 0;
            return (o198.o811 & o200.o812) != 0 && (o198.o812 & o200.o811) != 0
    };
    o161.prototype.o813 = function (o194, o196) {
        if (!o194) return true;
        return this.o804(o194 instanceof o174 ? o194 : null, o196)
    };
    o96.o328.push(function () {
        o96.o127.o215.o814 = new o161
    });
    o163.o217 = function () {
        this.o815 = new o123(o107.o395);
        this.o816 = new o123(o107.o395)
    };
    o165.o219 = function () {};
    o165.prototype.o817 = function () {};
    o165.prototype.o818 = function () {};
    o165.prototype.o819 = function () {};
    o165.prototype.o820 = function () {};
    o96.o328.push(function () {
        o96.o127.o219.o821 = new o165
    });
    o167.o221 = function () {};
    o167.prototype.o221 = function () {
        this.o690 = null;
        this.o822 = 0;
        this.o823 = o161.o814;
        this.o824 = o165.o821;
        this.o825 = new o186(this.o826);
        this.o696 = new o141
    };
    o167.prototype.o827 = function (o194, o196) {
        var o198 = o194 instanceof o174 ? o194 : null,
            o200 = o196 instanceof o174 ? o196 : null,
            o93 = o198.o828(),
            o203 = o200.o828();
        if (o93 != o203) {
            for (var o205 = o203.o793(); o205;) {
                if (o205.o805 == o93) {
                    var o207 = o205.o709.o711(),
                        o37 = o205.o709.o712();
                    if (o207 == o198 && o37 == o200) return;
                    if (o207 == o200 && o37 == o198) return
                }
                o205 = o205.next
            }
            if (o203.o804(o93) != false)
                if (this.o823.o804(o198, o200) != false) {
                    o205 = this.o825.o692(o198, o200);
                    o198 = o205.o711();
                    o200 = o205.o712();
                    o93 = o198.o700;
                    o203 = o200.o700;
                    o205.o800 = null;
                    o205.o697 = this.o690.o708;
                    if (this.o690.o708 != null) this.o690.o708.o800 = o205;
                    this.o690.o708 = o205;
                    o205.o829.o709 = o205;
                    o205.o829.o805 = o203;
                    o205.o829.o830 = null;
                    o205.o829.next = o93.o708;
                    if (o93.o708 != null) o93.o708.o830 = o205.o829;
                    o93.o708 = o205.o829;
                    o205.o831.o709 = o205;
                    o205.o831.o805 = o93;
                    o205.o831.o830 = null;
                    o205.o831.next = o203.o708;
                    if (o203.o708 != null) o203.o708.o830 = o205.o831;
                    o203.o708 = o205.o831;
                    ++this.o690.o822
                }
        }
    };
    o167.prototype.o716 = function () {
        this.o696.o494(o96.o112(this, this.o827))
    };
    o167.prototype.o713 = function (o194) {
        var o196 = o194.o711(),
            o198 = o194.o712();
        o196 = o196.o828();
        o198 = o198.o828();
        o194.o832() && this.o824.o818(o194);
        if (o194.o800) o194.o800.o697 = o194.o697;
        if (o194.o697) o194.o697.o800 = o194.o800;
        if (o194 == this.o690.o708) this.o690.o708 = o194.o697;
        if (o194.o829.o830) o194.o829.o830.next = o194.o829.next;
        if (o194.o829.next) o194.o829.next.o830 = o194.o829.o830;
        if (o194.o829 == o196.o708) o196.o708 = o194.o829.next;
        if (o194.o831.o830) o194.o831.o830.next = o194.o831.next;
        if (o194.o831.next) o194.o831.next.o830 = o194.o831.o830;
        if (o194.o831 == o198.o708) o198.o708 = o194.o831.next;
        this.o825.o713(o194);
        --this.o822
    };
    o167.prototype.o833 = function () {
        for (var o194 = this.o690.o708; o194;) {
            var o196 = o194.o711(),
                o198 = o194.o712(),
                o200 = o196.o828(),
                o93 = o198.o828();
            if (o200.o748() == false && o93.o748() == false) o194 = o194.o794();
            else {
                if (o194.o693 & o184.o834) {
                    if (o93.o804(o200) == false) {
                        o196 = o194;
                        o194 = o196.o794();
                        this.o713(o196);
                        continue
                    }
                    if (this.o823.o804(o196, o198) == false) {
                        o196 = o194;
                        o194 = o196.o794();
                        this.o713(o196);
                        continue
                    }
                    o194.o693 &= ~o184.o834
                }
                if (this.o696.o344(o196.o835, o198.o835) == false) {
                    o196 = o194;
                    o194 = o196.o794();
                    this.o713(o196)
                } else {
                    o194.o836(this.o824);
                    o194 = o194.o794()
                }
            }
        }
    };
    o96.o328.push(function () {
        o96.o127.o221.o837 = new o139
    });
    o67.o223 = function () {};
    o67.prototype.o223 = function () {};
    o67.prototype.o838 = function () {};
    o67.prototype.o839 = function () {};
    o67.prototype.o840 = function () {};
    o67.prototype.o841 = function () {};
    o67.prototype.o842 = function () {};
    o67.prototype.o843 = function () {};
    o67.prototype.o844 = function () {};
    o67.prototype.o845 = function () {};
    o67.prototype.o846 = function () {};
    o67.prototype.o847 = function () {};
    o67.prototype.o848 = function () {};
    o67.prototype.o849 = function () {};
    o67.prototype.o850 = function () {};
    o67.prototype.o851 = function () {};
    o67.prototype.o852 = function () {};
    o67.prototype.o853 = function () {};
    o67.prototype.o854 = function () {};
    o67.prototype.o855 = function () {};
    o67.prototype.o856 = function () {};
    o67.prototype.o857 = function () {};
    o67.prototype.o858 = function () {};
    o67.prototype.o859 = function () {};
    o96.o328.push(function () {
        o96.o127.o223.o860 = 1;
        o96.o127.o223.o861 = 2;
        o96.o127.o223.o862 = 4;
        o96.o127.o223.o863 = 8;
        o96.o127.o223.o864 = 16;
        o96.o127.o223.o865 = 32
    });
    o170.o225 = function () {};
    o170.prototype.o866 = function () {};
    o170.prototype.o867 = function () {};
    o172.o227 = function () {
        this.o812 = 1;
        this.o811 = 65535;
        this.o810 = 0
    };
    o172.prototype.o409 = function () {
        var o194 = new o172;
        o194.o812 = this.o812;
        o194.o811 = this.o811;
        o194.o810 = this.o810;
        return o194
    };
    o174.o229 = function () {
        this.o868 = new o172
    };
    o174.prototype.o455 = function () {
        return this.o869.o455()
    };
    o174.prototype.o870 = function () {
        return this.o869
    };
    o174.prototype.o871 = function (o194) {
        if (this.o872 != o194) {
            this.o872 = o194;
            if (this.o700 != null) for (o194 = this.o700.o793(); o194;) {
                    var o196 = o194.o709,
                        o198 = o196.o711(),
                        o200 = o196.o712();
                    if (o198 == this || o200 == this) o196.o871(o198.o873() || o200.o873());
                    o194 = o194.next
                }
        }
    };
    o174.prototype.o873 = function () {
        return this.o872
    };
    o174.prototype.o874 = function (o194) {
        this.o868 = o194.o409();
        if (!this.o700) for (o194 = this.o700.o793(); o194;) {
                var o196 = o194.o709,
                    o198 = o196.o711(),
                    o200 = o196.o712();
                if (o198 == this || o200 == this) o196.o778();
                o194 = o194.next
            }
    };
    o174.prototype.o809 = function () {
        return this.o868.o409()
    };
    o174.prototype.o828 = function () {
        return this.o700
    };
    o174.prototype.o794 = function () {
        return this.o697
    };
    o174.prototype.o480 = function () {
        return this.o795
    };
    o174.prototype.o796 = function (o194) {
        this.o795 = o194
    };
    o174.prototype.o548 = function (o194) {
        return this.o869.o548(this.o700.o535(),
            o194)
    };
    o174.prototype.o335 = function (o194, o196) {
        return this.o869.o335(o194, o196, this.o700.o535())
    };
    o174.prototype.o763 = function (o194) {
        if (o194 === undefined) o194 = null;
        if (o194 == null) o194 = new o151;
        this.o869.o550(o194, this.o701);
        return o194
    };
    o174.prototype.o875 = function (o194) {
        if (o194 === undefined) o194 = 0;
        this.o701 = o194
    };
    o174.prototype.o876 = function () {
        return this.o701
    };
    o174.prototype.o877 = function () {
        return this.o878
    };
    o174.prototype.o879 = function (o194) {
        if (o194 === undefined) o194 = 0;
        this.o878 = o194
    };
    o174.prototype.o880 = function () {
            return this.o881
    };
    o174.prototype.o882 = function (o194) {
        if (o194 === undefined) o194 = 0;
        this.o881 = o194
    };
    o174.prototype.o883 = function () {
        return this.o884
    };
    o174.prototype.o229 = function () {
        this.o884 = new o137;
        this.o869 = this.o697 = this.o700 = this.o795 = null;
        this.o881 = this.o878 = this.o701 = 0
    };
    o174.prototype.o692 = function (o194, o196, o198) {
        this.o795 = o198.o468;
        this.o878 = o198.o885;
        this.o881 = o198.o886;
        this.o700 = o194;
        this.o697 = null;
        this.o868 = o198.filter.o409();
        this.o872 = o198.o888;
        this.o869 = o198.o705.o409();
        this.o701 = o198.o706
    };
    o174.prototype.o713 = function () {
        this.o869 = null
    };
    o174.prototype.o464 = function (o194, o196) {
        this.o869.o549(this.o884, o196);
        this.o835 = o194.o464(this.o884, this)
    };
    o174.prototype.o470 = function (o194) {
        if (this.o835 != null) {
            o194.o470(this.o835);
            this.o835 = null
        }
    };
    o174.prototype.o715 = function (o194, o196, o198) {
        if (this.o835) {
            var o200 = new o137,
                o93 = new o137;
            this.o869.o549(o200, o196);
            this.o869.o549(o93, o198);
            this.o884.o345(o200, o93);
            o196 = o97.o443(o198.o363, o196.o363);
            o194.o473(this.o835, this.o884, o196)
        }
    };
    o176.o231 = function () {
        this.filter = new o172
    };
    o176.prototype.o231 = function () {
        this.o468 = this.o705 = null;
        this.o885 = 0.2;
        this.o706 = this.o886 = 0;
        this.filter.o812 = 1;
        this.filter.o811 = 65535;
        this.filter.o810 = 0;
        this.o888 = false
    };
    o178.o233 = function () {};
    o178.prototype.o233 = function () {
        this.o889 = new o122;
        this.o890 = new o122;
        this.o891 = new o122
    };
    o178.prototype.o510 = function (o194, o196, o198, o200, o93, o203) {
        if (o194 === undefined) o194 = 0;
        if (o196 === undefined) o196 = 0;
        if (o198 === undefined) o198 = 0;
        var o205 = 0;
        this.o892 = o194;
        this.o893 = o196;
        this.o894 = o198;
        this.o895 = this.o822 = this.o896 = 0;
        this.o826 = o200;
        this.o897 = o93;
        this.o898 = o203;
        for (o205 = this.o889.length; o205 < o194; o205++) this.o889[o205] = null;
        for (o205 = this.o890.length; o205 < o196; o205++) this.o890[o205] = null;
        for (o205 = this.o891.length; o205 < o198; o205++) this.o891[o205] = null
    };
    o178.prototype.o899 = function () {
        this.o895 = this.o822 = this.o896 = 0
    };
    o178.prototype.o649 = function (o194, o196, o198) {
        var o200 = 0,
            o93 = 0,
            o203;
        for (o200 = 0; o200 < this.o896; ++o200) {
            o93 = this.o889[o200];
            if (o93.o455() == o157.o747) {
                o93.o685.o214 += o194.o900 * (o196.o214 + o93.o753 * o93.o686.o214);
                o93.o685.o105 += o194.o900 * (o196.o105 + o93.o753 * o93.o686.o105);
                o93.o727 += o194.o900 * o93.o754 * o93.o750;
                o93.o685.o604(o97.o517(1 - o194.o900 * o93.o744, 0, 1));
                o93.o727 *= o97.o517(1 - o194.o900 * o93.o735, 0, 1)
            }
        }
        this.o898.o510(o194, this.o890,
            this.o822, this.o826);
        o196 = this.o898;
        o196.o901(o194);
        for (o200 = 0; o200 < this.o895; ++o200) {
            o203 = this.o891[o200];
            o203.o901(o194)
        }
        for (o200 = 0; o200 < o194.o902; ++o200) {
            for (o93 = 0; o93 < this.o895; ++o93) {
                o203 = this.o891[o93];
                o203.o903(o194)
            }
            o196.o903()
        }
        for (o200 = 0; o200 < this.o895; ++o200) {
            o203 = this.o891[o200];
            o203.o904()
        }
        o196.o904();
        for (o200 = 0; o200 < this.o896; ++o200) {
            o93 = this.o889[o200];
            if (o93.o455() != o157.o724) {
                var o205 = o194.o900 * o93.o685.o214,
                    o207 = o194.o900 * o93.o685.o105;
                if (o205 * o205 + o207 * o207 > o107.o631) {
                    o93.o685.o382();
                    o93.o685.o214 *= o107.o630 * o194.o905;
                    o93.o685.o105 *= o107.o630 * o194.o905
                }
                o205 = o194.o900 * o93.o727;
                if (o205 * o205 > o107.o633) o93.o727 = o93.o727 < 0 ? -o107.o632 * o194.o905 : o107.o632 * o194.o905;
                o93.o684.o675.o393(o93.o684.o196);
                o93.o684.o676 = o93.o684.o194;
                o93.o684.o196.o214 += o194.o900 * o93.o685.o214;
                o93.o684.o196.o105 += o194.o900 * o93.o685.o105;
                o93.o684.o194 += o194.o900 * o93.o727;
                o93.o803()
            }
        }
        for (o200 = 0; o200 < o194.o906; ++o200) {
            o205 = o196.o907(o107.o634);
            o207 = true;
            for (o93 = 0; o93 < this.o895; ++o93) {
                o203 = this.o891[o93];
                o203 = o203.o907(o107.o634);
                o207 = o207 && o203
            }
            if (o205 && o207) break
        }
        this.o908(o196.o909);
        if (o198) {
            o198 = Number.o337;
            o196 = o107.o636 * o107.o636;
            o205 = o107.o637 * o107.o637;
            for (o200 = 0; o200 < this.o896; ++o200) {
                o93 = this.o889[o200];
                if (o93.o455() != o157.o724) {
                    if ((o93.o693 & o157.o732) == 0) o198 = o93.o782 = 0;
                    if ((o93.o693 & o157.o732) == 0 || o93.o727 * o93.o727 > o205 || o97.o526(o93.o685, o93.o685) > o196) o198 = o93.o782 = 0;
                    else {
                        o93.o782 += o194.o900;
                        o198 = o97.o663(o198, o93.o782)
                    }
                }
            }
            if (o198 >= o107.o635)
                for (o200 = 0; o200 < this.o896; ++o200) {
                    o93 = this.o889[o200];
                    o93.o749(false)
                }
        }
    };
    o178.prototype.o910 = function (o194) {
        var o196 = 0,
            o198 = 0;
        this.o898.o510(o194, this.o890, this.o822,
            this.o826);
        var o200 = this.o898;
        for (o196 = 0; o196 < this.o895; ++o196) this.o891[o196].o901(o194);
        for (o196 = 0; o196 < o194.o902; ++o196) {
            o200.o903();
            for (o198 = 0; o198 < this.o895; ++o198) this.o891[o198].o903(o194)
        }
        for (o196 = 0; o196 < this.o896; ++o196) {
            o198 = this.o889[o196];
            if (o198.o455() != o157.o724) {
                var o93 = o194.o900 * o198.o685.o214,
                    o203 = o194.o900 * o198.o685.o105;
                if (o93 * o93 + o203 * o203 > o107.o631) {
                    o198.o685.o382();
                    o198.o685.o214 *= o107.o630 * o194.o905;
                    o198.o685.o105 *= o107.o630 * o194.o905
                }
                o93 = o194.o900 * o198.o727;
                if (o93 * o93 > o107.o633) o198.o727 = o198.o727 < 0 ? -o107.o632 * o194.o905 : o107.o632 * o194.o905;
                o198.o684.o675.o393(o198.o684.o196);
                o198.o684.o676 = o198.o684.o194;
                o198.o684.o196.o214 += o194.o900 * o198.o685.o214;
                o198.o684.o196.o105 += o194.o900 * o198.o685.o105;
                o198.o684.o194 += o194.o900 * o198.o727;
                o198.o803()
            }
        }
        for (o196 = 0; o196 < o194.o906; ++o196) {
            o93 = o200.o907(0.75);
            o203 = true;
            for (o198 = 0; o198 <
                this.o895; ++o198) {
                var o205 = this.o891[o198].o907(o107.o634);
                o203 = o203 && o205
            }
            if (o93 && o203) break
        }
        this.o908(o200.o909)
    };
    o178.prototype.o908 = function (o194) {
        if (this.o897 != null)
            for (var o196 = 0; o196 < this.o822; ++o196) {
                for (var o198 = this.o890[o196], o200 = o194[o196], o93 = 0; o93 < o200.o911; ++o93) {
                    o178.o912.o815[o93] = o200.o913[o93].o914;
                    o178.o912.o816[o93] = o200.o913[o93].o915
                }
                this.o897.o820(o198, o178.o912)
            }
    };
    o178.prototype.o916 = function (o194) {
        o194.o917 = this.o896;
        this.o889[this.o896++] = o194
    };
    o178.prototype.o918 = function (o194) {
        this.o890[this.o822++] = o194
    };
    o178.prototype.o919 = function (o194) {
        this.o891[this.o895++] = o194
    };
    o96.o328.push(function () {
        o96.o127.o233.o912 = new o163
    });
    o180.o235 = function () {};
    o180.prototype.Set = function (o194) {
        this.o900 = o194.o900;
        this.o905 = o194.o905;
        this.o906 = o194.o906;
        this.o902 = o194.o902;
        this.o920 = o194.o920
    };
    o182.o237 = function () {
        this.o921 = new o122;
        this.o695 = new o167;
        this.o898 = new o188;
        this.o922 = new o178
    };
    o182.prototype.o237 = function (o194, o196) {
        this.o792 = this.o790 = this.o708 = this.o923 = this.o924 = this.o925 = null;
        this.o799 = this.o895 = this.o822 = this.o896 = 0;
        o182.o926 = true;
        o182.o927 = true;
        this.o928 = o196;
        this.o929 = o194;
        this.o930 = 0;
        this.o695.o690 = this;
        this.o931 = this.o756(new o159)
    };
    o182.prototype.o932 = function (o194) {
        this.o925 = o194
    };
    o182.prototype.o933 = function (o194) {
        this.o695.o823 = o194
    };
    o182.prototype.o934 = function (o194) {
        this.o695.o824 = o194
    };
    o182.prototype.o935 = function (o194) {
        this.o924 = o194
    };
    o182.prototype.o936 = function (o194) {
        var o196 = this.o695.o696;
        this.o695.o696 = o194;
        for (var o198 = this.o923; o198; o198 = o198.o697)
            for (var o200 = o198.o698; o200; o200 = o200.o697) o200.o835 = o194.o464(o196.o479(o200.o835), o200)
    };
    o182.prototype.o495 = function () {
        this.o695.o696.o495()
    };
    o182.prototype.o493 = function () {
        return this.o695.o696.o493()
    };
    o182.prototype.o756 = function (o194) {
        if (this.o691() == true) return null;
        o194 = new o157(o194, this);
        o194.o800 = null;
        if (o194.o697 = this.o923) this.o923.o800 = o194;
        this.o923 = o194;
        ++this.o896;
        return o194
    };
    o182.prototype.o937 = function (o194) {
        if (this.o691() != true) {
            for (var o196 = o194.o790; o196;) {
                var o198 = o196;
                o196 = o196.next;
                this.o925 && this.o925.o866(o198.o806);
                this.o938(o198.o806)
            }
            for (o196 = o194.o792; o196;) {
                o198 = o196;
                o196 = o196.o939;
                o198.o940.o941(o194)
            }
            for (o196 = o194.o708; o196;) {
                o198 = o196;
                o196 = o196.next;
                this.o695.o713(o198.o709)
            }
            o194.o708 = null;
            for (o196 = o194.o698; o196;) {
                o198 = o196;
                o196 = o196.o697;
                this.o925 && this.o925.o867(o198);
                o198.o470(this.o695.o696);
                o198.o713()
            }
            o194.o698 = null;
            o194.o699 = 0;
            if (o194.o800) o194.o800.o697 = o194.o697;
            if (o194.o697) o194.o697.o800 = o194.o800;
            if (o194 == this.o923) this.o923 = o194.o697;
            --this.o896
        }
    };
    o182.prototype.o942 = function (o194) {
        var o196 = o190.o692(o194, null);
        o196.o800 = null;
        if (o196.o697 = this.o790) this.o790.o800 = o196;
        this.o790 = o196;
        ++this.o895;
        o196.o943.o806 = o196;
        o196.o943.o805 = o196.o944;
        o196.o943.o830 = null;
        if (o196.o943.next = o196.o945.o790) o196.o945.o790.o830 = o196.o943;
        o196.o945.o790 = o196.o943;
        o196.o946.o806 = o196;
        o196.o946.o805 = o196.o945;
        o196.o946.o830 = null;
        if (o196.o946.next = o196.o944.o790) o196.o944.o790.o830 = o196.o946;
        o196.o944.o790 = o196.o946;
        var o198 = o194.o947,
            o200 = o194.o948;
        if (o194.o949 == false)
            for (o194 = o200.o793(); o194;) {
                o194.o805 == o198 && o194.o709.o778();
                o194 = o194.next
            }
        return o196
    };
    o182.prototype.o938 = function (o194) {
        var o196 = o194.o807;
        if (o194.o800) o194.o800.o697 = o194.o697;
        if (o194.o697) o194.o697.o800 = o194.o800;
        if (o194 == this.o790) this.o790 = o194.o697;
        var o198 = o194.o945,
            o200 = o194.o944;
        o198.o749(true);
        o200.o749(true);
        if (o194.o943.o830) o194.o943.o830.next = o194.o943.next;
        if (o194.o943.next) o194.o943.next.o830 = o194.o943.o830;
        if (o194.o943 == o198.o790) o198.o790 = o194.o943.next;
        o194.o943.o830 = null;
        o194.o943.next = null;
        if (o194.o946.o830) o194.o946.o830.next = o194.o946.next;
        if (o194.o946.next) o194.o946.next.o830 = o194.o946.o830;
        if (o194.o946 == o200.o790) o200.o790 = o194.o946.next;
        o194.o946.o830 = null;
        o194.o946.next = null;
        o190.o713(o194, null);
        --this.o895;
        if (o196 == false)
            for (o194 = o200.o793(); o194;) {
                o194.o805 == o198 && o194.o709.o778();
                o194 = o194.next
            }
    };
    o182.prototype.o950 = function (o194) {
        o194.o697 = this.o792;
        o194.o800 = null;
        this.o792 = o194;
        o194.o690 = this;
        this.o799++;
        return o194
    };
    o182.prototype.o951 = function (o194) {
        if (o194.o800) o194.o800.o697 = o194.o697;
        if (o194.o697) o194.o697.o800 = o194.o800;
        if (this.o792 == o194) this.o792 = o194.o697;
        this.o799--
    };
    o182.prototype.o952 = function (o194) {
        if (o194.o690 != this) throw Error("Controller can only be a member of one world");
        o194.o697 = this.o792;
        o194.o800 = null;
        if (this.o792) this.o792.o800 = o194;
        this.o792 = o194;
        ++this.o799;
        o194.o690 = this;
        return o194
    };
    o182.prototype.o954 = function (o194) {
        o194.o899();
        if (o194.o697) o194.o697.o800 = o194.o800;
        if (o194.o800) o194.o800.o697 = o194.o697;
        if (o194 == this.o792) this.o792 = o194.o697;
        --this.o799
    };
    o182.prototype.o955 = function (o194) {
        o182.o926 = o194
    };
    o182.prototype.o956 = function (o194) {
        o182.o927 = o194
    };
    o182.prototype.o957 = function () {
        return this.o896
    };
    o182.prototype.o958 = function () {
        return this.o895
    };
    o182.prototype.o959 = function () {
        return this.o822
    };
    o182.prototype.o960 = function (o194) {
        this.o929 = o194
    };
    o182.prototype.o961 = function () {
        return this.o929
    };
    o182.prototype.o962 = function () {
        return this.o931
    };
    o182.prototype.o963 = function (o194, o196, o198) {
        if (o194 === undefined) o194 = 0;
        if (o196 === undefined) o196 = 0;
        if (o198 === undefined) o198 = 0;
        if (this.o693 & o182.o703) {
            this.o695.o716();
            this.o693 &= ~o182.o703
        }
        this.o693 |= o182.o964;
        var o200 = o182.o965;
        o200.o900 = o194;
        o200.o902 = o196;
        o200.o906 = o198;
        o200.o905 = o194 > 0 ? 1 / o194 : 0;
        o200.o966 = this.o930 * o194;
        o200.o920 = o182.o926;
        this.o695.o833();
        o200.o900 > 0 && this.o649(o200);
        o182.o927 && o200.o900 > 0 && this.o910(o200);
        if (o200.o900 > 0) this.o930 = o200.o905;
        this.o693 &= ~o182.o964
    };
    o182.prototype.o967 = function () {
        for (var o194 = this.o923; o194; o194 = o194.o697) {
            o194.o686.o402();
            o194.o750 = 0
        }
    };
    o182.prototype.o968 = function () {
            if (this.o924 != null) {
                this.o924.o969.o970.o971();
                var o194 = this.o924.o839(),
                    o196, o198, o200;
                new o105;
                new o105;
                new o105;
                var o93;
                new o137;
                new o137;
                o93 = [new o105, new o105, new o105, new o105];
                var o203 = new o106(0, 0, 0);
                if (o194 & o67.o860)
                    for (o196 = this.o923; o196; o196 = o196.o697) {
                        o93 = o196.o683;
                        for (o198 = o196.o788(); o198; o198 = o198.o697) {
                            o200 = o198.o870();
                            if (o196.o786() == false) o203.Set(0.5, 0.5, 0.3);
                            else if (o196.o455() == o157.o724) o203.Set(0.5, 0.9, 0.5);
                            else if (o196.o455() == o157.o765) o203.Set(0.5, 0.5, 0.9);
                            else o196.o748() == false ?
                                o203.Set(0.6, 0.6, 0.6) : o203.Set(0.9, 0.7, 0.7);
                            this.o972(o200, o93, o203)
                        }
                    }
                if (o194 & o67.o861)
                    for (o196 = this.o790; o196; o196 = o196.o697) this.o973(o196);
                if (o194 & o67.o865)
                    for (o196 = this.o792; o196; o196 = o196.o697) o196.o974(this.o924);
                if (o194 & o67.o863) {
                    o203.Set(0.3, 0.9, 0.9);
                    for (o196 = this.o695.o708; o196; o196 = o196.o794()) {
                        o200 = o196.o711();
                        o198 = o196.o712();
                        o200 = o200.o883().o332();
                        o198 = o198.o883().o332();
                        this.o924.o858(o200, o198, o203)
                    }
                }
                if (o194 & o67.o862) {
                    o200 = this.o695.o696;
                    o93 = [new o105,
                        new o105, new o105, new o105
                    ];
                    for (o196 = this.o923; o196; o196 = o196.o794())
                        if (o196.o786() != false)
                            for (o198 = o196.o788(); o198; o198 = o198.o794()) {
                                var o205 = o200.o479(o198.o835);
                                o93[0].Set(o205.o329.o214, o205.o329.o105);
                                o93[1].Set(o205.o330.o214, o205.o329.o105);
                                o93[2].Set(o205.o330.o214, o205.o330.o105);
                                o93[3].Set(o205.o329.o214, o205.o330.o105);
                                this.o924.o854(o93, 4, o203)
                            }
                }
                if (o194 & o67.o864)
                    for (o196 = this.o923; o196; o196 = o196.o697) {
                        o93 = o182.o975;
                        o93.o170 = o196.o683.o170;
                        o93.o363 = o196.o721();
                        this.o924.o859(o93)
                    }
            }
    };
    o182.prototype.o976 = function (o194, o196) {
            var o198 = this.o695.o696;
            o198.o481(function (o200) {
                return o194(o198.o480(o200))
            }, o196)
    };
    o182.prototype.o977 = function (o194, o196, o198) {
        if (o198 === undefined) o198 = null;
        if (o198 == null) {
            o198 = new o99;
            o198.o638()
        }
        var o200 = this.o695.o696,
            o93 = new o137;
        o196.o549(o93, o198);
        o200.o481(function (o203) {
            o203 = o200.o480(o203) instanceof o174 ? o200.o480(o203) : null;
            if (o155.o344(o196, o198, o203.o870(), o203.o828().o535())) return o194(o203);
            return true
        }, o93)
    };
    o182.prototype.o978 = function (o194, o196) {
        var o198 = this.o695.o696,
            o200 = new o137;
        o200.o329.Set(o196.o214 - o107.o611, o196.o105 - o107.o611);
        o200.o330.Set(o196.o214 + o107.o611, o196.o105 + o107.o611);
        o198.o481(function (o93) {
            o93 = o198.o480(o93) instanceof o174 ? o198.o480(o93) : null;
            if (o93.o548(o196)) return o194(o93);
            return true
        }, o200)
    };
    o182.prototype.o335 = function (o194, o196, o198) {
        var o200 = this.o695.o696,
            o93 = new o145,
            o203 = new o143(o196, o198);
        o200.o335(function (o205, o207) {
            var o37 = o200.o480(o207);
            o37 = o37 instanceof o174 ? o37 : null;
            if (o37.o335(o93, o205)) {
                var o210 = o93.o343,
                    o212 = new o105((1 - o210) * o196.o214 + o210 * o198.o214, (1 - o210) * o196.o105 + o210 * o198.o105);
                return o194(o37,
                    o212, o93.o340, o210)
            }
            return o205.o484
        }, o203)
    };
    o182.prototype.o979 = function (o194, o196) {
        var o198;
        this.o335(function (o200, o93, o203, o205) {
            if (o205 === undefined) o205 = 0;
            o198 = o200;
            return o205
        }, o194, o196);
        return o198
    };
    o182.prototype.o980 = function (o194, o196) {
        var o198 = new o122;
        this.o335(function (o200) {
            o198[o198.length] = o200;
            return 1
        }, o194, o196);
        return o198
    };
    o182.prototype.o981 = function () {
        return this.o923
    };
    o182.prototype.o789 = function () {
        return this.o790
    };
    o182.prototype.o793 = function () {
        return this.o708
    };
    o182.prototype.o691 = function () {
        return (this.o693 &
            o182.o964) > 0
    };
    o182.prototype.o649 = function (o194) {
        for (var o196, o198 = this.o792; o198; o198 = o198.o697) o198.o963(o194);
        o198 = this.o922;
        o198.o510(this.o896, this.o822, this.o895, null, this.o695.o824, this.o898);
        for (o196 = this.o923; o196; o196 = o196.o697) o196.o693 &= ~o157.o808;
        for (var o200 = this.o708; o200; o200 = o200.o697) o200.o693 &= ~o184.o808;
        for (o200 = this.o790; o200; o200 = o200.o697) o200.o982 = false;
        parseInt(this.o896);
        o200 = this.o921;
        for (var o93 = this.o923; o93; o93 = o93.o697)
            if (!(o93.o693 & o157.o808))
                if (!(o93.o748() == false || o93.o786() == false))
                    if (o93.o455() != o157.o724) {
                        o198.o899();
                        var o203 = 0;
                        o200[o203++] = o93;
                        for (o93.o693 |= o157.o808; o203 > 0;) {
                            o196 = o200[--o203];
                            o198.o916(o196);
                            o196.o748() == false && o196.o749(true);
                            if (o196.o455() != o157.o724) {
                                for (var o205, o207 = o196.o708; o207; o207 = o207.next)
                                    if (!(o207.o709.o693 & o184.o808))
                                        if (!(o207.o709.o873() == true || o207.o709.o983() == false || o207.o709.o832() == false)) {
                                            o198.o918(o207.o709);
                                            o207.o709.o693 |= o184.o808;
                                            o205 = o207.o805;
                                            if (!(o205.o693 & o157.o808)) {
                                                o200[o203++] = o205;
                                                o205.o693 |= o157.o808
                                            }
                                        }
                                for (o196 = o196.o790; o196; o196 = o196.next)
                                    if (o196.o806.o982 != true) {
                                        o205 = o196.o805;
                                        if (o205.o786() != false) {
                                            o198.o919(o196.o806);
                                            o196.o806.o982 = true;
                                            if (!(o205.o693 & o157.o808)) {
                                                o200[o203++] = o205;
                                                o205.o693 |= o157.o808
                                            }
                                        }
                                    }
                            }
                        }
                        o198.o649(o194, this.o929, this.o928);
                        for (o203 = 0; o203 < o198.o896; ++o203) {
                            o196 = o198.o889[o203];
                            if (o196.o455() == o157.o724) o196.o693 &= ~o157.o808
                        }
                    }
        for (o203 = 0; o203 < o200.length; ++o203) {
            if (!o200[o203]) break;
            o200[o203] = null
        }
        for (o196 = this.o923; o196; o196 = o196.o697) o196.o748() == false || o196.o786() == false || o196.o455() != o157.o724 && o196.o757();
        this.o695.o716()
    };
    o182.prototype.o910 = function (o194) {
        var o196, o198, o200, o93 = this.o922;
        o93.o510(this.o896, o107.o625, o107.o626, null, this.o695.o824, this.o898);
        var o203 = o182.o984;
        for (o196 = this.o923; o196; o196 = o196.o697) {
            o196.o693 &= ~o157.o808;
            o196.o684.o531 = 0
        }
        for (o200 = this.o708; o200; o200 = o200.o697) o200.o693 &= ~(o184.o985 |
            o184.o808);
        for (o200 = this.o790; o200; o200 = o200.o697) o200.o982 = false;
        for (;;) {
            var o205 = null,
                o207 = 1;
            for (o200 = this.o708; o200; o200 = o200.o697)
                if (!(o200.o873() == true || o200.o983() == false || o200.o986() == false)) {
                    o196 = 1;
                    if (o200.o693 & o184.o985) o196 = o200.o987;
                    else {
                        o196 = o200.o988;
                        o198 = o200.o989;
                        o196 = o196.o700;
                        o198 = o198.o700;
                        if ((o196.o455() != o157.o747 || o196.o748() == false) && (o198.o455() != o157.o747 || o198.o748() == false)) continue;
                        var o37 = o196.o684.o531;
                        if (o196.o684.o531 < o198.o684.o531) {
                            o37 = o198.o684.o531;
                            o196.o684.o677(o37)
                        } else if (o198.o684.o531 <
                            o196.o684.o531) {
                            o37 = o196.o684.o531;
                            o198.o684.o677(o37)
                        }
                        o196 = o200.o990(o196.o684, o198.o684);
                        o107.o434(0 <= o196 && o196 <= 1);
                        if (o196 > 0 && o196 < 1) {
                            o196 = (1 - o196) * o37 + o196;
                            if (o196 > 1) o196 = 1
                        }
                        o200.o987 = o196;
                        o200.o693 |= o184.o985
                    } if (Number.MIN_VALUE < o196 && o196 < o207) {
                        o205 = o200;
                        o207 = o196
                    }
                }
            if (o205 == null || 1 - 100 * Number.MIN_VALUE < o207) break;
            o196 = o205.o988;
            o198 = o205.o989;
            o196 = o196.o700;
            o198 = o198.o700;
            o182.o991.Set(o196.o684);
            o182.o992.Set(o198.o684);
            o196.o677(o207);
            o198.o677(o207);
            o205.o836(this.o695.o824);
            o205.o693 &= ~o184.o985;
            if (o205.o873() == true || o205.o983() == false) {
                o196.o684.Set(o182.o991);
                o198.o684.Set(o182.o992);
                o196.o803();
                o198.o803()
            } else if (o205.o832() != false) {
                o196 = o196;
                if (o196.o455() != o157.o747) o196 = o198;
                o93.o899();
                o205 = o200 = 0;
                o203[o200 + o205++] = o196;
                for (o196.o693 |= o157.o808; o205 > 0;) {
                    o196 = o203[o200++];
                    --o205;
                    o93.o916(o196);
                    o196.o748() == false && o196.o749(true);
                    if (o196.o455() == o157.o747) {
                        for (o198 = o196.o708; o198; o198 = o198.next) {
                            if (o93.o822 == o93.o893) break;
                            if (!(o198.o709.o693 & o184.o808))
                                if (!(o198.o709.o873() == true || o198.o709.o983() == false || o198.o709.o832() == false)) {
                                    o93.o918(o198.o709);
                                    o198.o709.o693 |= o184.o808;
                                    o37 = o198.o805;
                                    if (!(o37.o693 & o157.o808)) {
                                        if (o37.o455() != o157.o724) {
                                            o37.o677(o207);
                                            o37.o749(true)
                                        }
                                        o203[o200 + o205] = o37;
                                        ++o205;
                                        o37.o693 |= o157.o808
                                    }
                                }
                        }
                        for (o196 = o196.o790; o196; o196 = o196.next)
                            if (o93.o895 != o93.o894)
                                if (o196.o806.o982 != true) {
                                    o37 = o196.o805;
                                    if (o37.o786() != false) {
                                        o93.o919(o196.o806);
                                        o196.o806.o982 = true;
                                        if (!(o37.o693 & o157.o808)) {
                                            if (o37.o455() != o157.o724) {
                                                o37.o677(o207);
                                                o37.o749(true)
                                            }
                                            o203[o200 + o205] = o37;
                                            ++o205;
                                            o37.o693 |= o157.o808
                                        }
                                    }
                                }
                    }
                }
                o200 = o182.o993;
                o200.o920 = false;
                o200.o900 = (1 - o207) * o194.o900;
                o200.o905 = 1 / o200.o900;
                o200.o966 = 0;
                o200.o902 = o194.o902;
                o200.o906 = o194.o906;
                o93.o910(o200);
                for (o207 = o207 = 0; o207 < o93.o896; ++o207) {
                    o196 = o93.o889[o207];
                    o196.o693 &= ~o157.o808;
                    if (o196.o748() != false)
                        if (o196.o455() == o157.o747) {
                            o196.o757();
                            for (o198 = o196.o708; o198; o198 = o198.next) o198.o709.o693 &= ~o184.o985
                        }
                }
                for (o207 = 0; o207 < o93.o822; ++o207) {
                    o200 = o93.o890[o207];
                    o200.o693 &= ~(o184.o985 |
                        o184.o808)
                }
                for (o207 = 0; o207 < o93.o895; ++o207) {
                    o200 = o93.o891[o207];
                    o200.o982 = false
                }
                this.o695.o716()
            }
        }
    };
    o182.prototype.o973 = function (o194) {
        var o196 = o194.o994(),
            o198 = o194.o995(),
            o200 = o196.o683.o363,
            o93 = o198.o683.o363,
            o203 = o194.o996(),
            o205 = o194.o997(),
            o207 = o182.o998;
        switch (o194.o377) {
        case q.e_distanceJoint:
            this.o924.o858(o203, o205, o207q.e_distanceJoint:
            this.m_debugDraw.DrawSegment(f, m, ro190.o999:
            this.m_debugDraw.DrawSegment(f, m, r);
            break;
        case q.e_pulleyJoint:
            o196 = o194 instanceof o192 ? o194 : null;
            o194 = o196.o1000();
            o196 = o196.o1001();
            this.o924.o858(o194, o203, o207);
            this.o924.o858(o196,
                o205, o207);
            this.o924.o858(o194, o196, o207q.e_pulleyJoint:
            c = a instanceof n ? a : null;
            a = c.GetGroundAnchorA();
            c = c.GetGroundAnchorB();
            this.m_debugDraw.DrawSegment(a, f, r);
            this.m_debugDraw.DrawSegment(c,
                m, r);
            this.m_debugDraw.DrawSegment(a, c, ro190.o1002:
            c = a instanceof n ? a : null;
            a = c.GetGroundAnchorA();
            c = c.GetGroundAnchorB();
            this.m_debugDraw.DrawSegment(a, f, r);
            this.m_debugDraw.DrawSegment(c,
                m, r);
            this.m_debugDraw.DrawSegment(a, c, r);
            break;
        case q.e_mouseJoint:
            this.o924.o858(o203, o205, o207q.e_mouseJoint:
            this.m_debugDraw.DrawSegment(f, m, ro190.o1003:
            this.m_debugDraw.DrawSegment(f, m, r);
            break;
        default:
            o196 != this.o931 && this.o924.o858(o200, o203, o207);
            this.o924.o858(o203, o205, o207);
            o198 != this.o931 && this.o924.o858(o93, o205, o207)
        }
    };
    o182.prototype.o972 = function (o194, o196, o198) {
        switch (o194.o377) {
        case Y.e_circleShape:
            var o200 = o194 instanceof o147 ? o194 : null;
            this.o924.o857(o97.o440(o196, o200.o400), o200.o374, o196.o170.o361, o198Y.e_circleShape:
            var b = a instanceof M ? a : null;
            this.m_debugDraw.DrawSolidCircle(F.MulX(c, b.m_p), b.m_radius, c.R.col1, go155.o456:
            var b = a instanceof M ? a : null;
            this.m_debugDraw.DrawSolidCircle(F.MulX(c, b.m_p), b.m_radius, c.R.col1, g);
            break;
        case Y.e_polygonShape:
            o200 = 0;
            o200 = o194 instanceof o153 ? o194 : null;
            o194 = parseInt(o200.o459());
            var o93 = o200.o605(),
                o203 = new o122(o194);
            for (o200 = 0; o200 < o194; ++o200) o203[o200] = o97.o440(o196, o93[o200]);
            this.o924.o855(o203, o194, o198Y.e_polygonShape:
            b = 0;
            b = a instanceof W ? a : null;
            a = parseInt(b.GetVertexCount());
            var e = b.GetVertices(),
                f = new Vector(a);
            for (b = 0; b < a; ++b) f[b] = F.MulX(c, e[b]);
            this.m_debugDraw.DrawSolidPolygon(f, a, go155.o457:
            b = 0;
            b = a instanceof W ? a : null;
            a = parseInt(b.GetVertexCount());
            var e = b.GetVertices(),
                f = new Vector(a);
            for (b = 0; b < a; ++b) f[b] = F.MulX(c, e[b]);
            this.m_debugDraw.DrawSolidPolygon(f, a, g);
            break;
        case Y.e_edgeShape:
            o200 = o194 instanceof o149 ? o194 : null;
            this.o924.o858(o97.o440(o196, o200.o572()), o97.o440(o196, o200.o573()), o198Y.e_edgeShape:
            b = a instanceof L ? a : null;
            this.m_debugDraw.DrawSegment(F.MulX(c, b.GetVertex1()), F.MulX(c, b.GetVertex2()), go155.o588:
            b = a instanceof L ? a : null;
            this.m_debugDraw.DrawSegment(F.MulX(c, b.GetVertex1()), F.MulX(c, b.GetVertex2()), g)
        }
    };
    o96.o328.push(function () {
        o96.o127.o237.o965 = new o180;
        o96.o127.o237.o975 = new o99;
        o96.o127.o237.o991 = new o98;
        o96.o127.o237.o992 = new o98;
        o96.o127.o237.o993 = new o180;
        o96.o127.o237.o984 = new o122;
        o96.o127.o237.o998 = new o106(0.5, 0.8, 0.8);
        o96.o127.o237.o703 = 1;
        o96.o127.o237.o964 = 2
    })
})();
(function () {
    var o97 = o96.o124.o125.o183,
        o98 = o96.o124.o125.o187,
        o99 = o96.o124.o125.o191,
        o105 = o96.o124.o125.o193,
        o106 = o96.o127.o128.o239,
        o107 = o96.o127.o128.o241,
        o137 = o96.o127.o128.o243,
        o139 = o96.o127.o128.o245,
        o141 = o96.o127.o128.o247,
        o143 = o96.o127.o128.o249,
        o145 = o96.o127.o128.o251,
        o147 = o96.o127.o128.o253,
        o149 = o96.o127.o128.o255,
        o151 = o96.o127.o128.o257,
        o153 = o96.o127.o128.o259,
        o155 = o96.o127.o128.o261,
        o157 = o96.o127.o128.o263,
        o159 = o96.o127.o128.o265,
        o161 = o96.o127.o128.o267,
        o163 = o96.o127.o211,
        o165 = o96.o127.o235,
        o167 = o96.o126.o197,
        o67 = o96.o126.Math.o199,
        o170 = o96.o126.Math.o202,
        o172 = o96.o126.Math.o208,
        o174 = o96.o124.o134,
        o176 = o96.o124.o135,
        o178 = o96.o124.o154,
        o180 = o96.o124.o173,
        o182 = o96.o124.o175,
        o184 = o96.o124.o177;
    o96.o110(o106, o96.o127.o128.o241);
    o106.prototype.o546 = o96.o127.o128.o241.prototype;
    o106.o239 = function () {
        o96.o127.o128.o241.o241.apply(this, arguments)
    };
    o106.o692 = function () {
        return new o106
    };
    o106.o713 = function () {};
    o106.prototype.o498 = function (o186, o188) {
        this.o546.o498.call(this, o186, o188)
    };
    o106.prototype.o519 = function () {
            var o186 = this.o988.o828(),
                o188 = this.o989.o828();
            o174.o399(this.o1004, this.o988.o870() instanceof o97 ? this.o988.o870() : null, o186.o683, this.o989.o870() instanceof o97 ? this.o989.o870() : null, o188.o683)
    };
    o107.o241 = function () {
        this.o829 = new o141;
        this.o831 = new o141;
        this.o1004 = new o178;
        this.o1005 = new o178
    };
    o107.prototype.o1006 = function () {
        return this.o1004
    };
    o107.prototype.o1007 = function (o186) {
        var o188 = this.o988.o828(),
            o190 = this.o989.o828(),
            o192 = this.o988.o870(),
            o194 = this.o989.o870();
        o186.o510(this.o1004, o188.o535(), o192.o374, o190.o535(), o194.o374)
    };
    o107.prototype.o832 = function () {
        return (this.o693 & o107.o1008) == o107.o1008
    };
    o107.prototype.o986 = function () {
        return (this.o693 & o107.o1009) == o107.o1009
    };
    o107.prototype.o871 = function (o186) {
        if (o186) this.o693 |= o107.o1010;
        else this.o693 &= ~o107.o1010
    };
    o107.prototype.o873 = function () {
        return (this.o693 &
            o107.o1010) == o107.o1010
    };
    o107.prototype.o1011 = function (o186) {
        if (o186) this.o693 |= o107.o1012;
        else this.o693 &= ~o107.o1012
    };
    o107.prototype.o983 = function () {
        return (this.o693 & o107.o1012) == o107.o1012
    };
    o107.prototype.o794 = function () {
        return this.o697
    };
    o107.prototype.o711 = function () {
        return this.o988
    };
    o107.prototype.o712 = function () {
        return this.o989
    };
    o107.prototype.o778 = function () {
        this.o693 |= o107.o834
    };
    o107.prototype.o241 = function () {};
    o107.prototype.o498 = function (o186, o188) {
        if (o186 === undefined) o186 = null;
        if (o188 === undefined) o188 = null;
        this.o693 = o107.o1012;
        if (!o186 || !o188) this.o989 = this.o988 = null;
        else {
            if (o186.o873() || o188.o873()) this.o693 |= o107.o1010;
            var o190 = o186.o828(),
                o192 = o188.o828();
            if (o190.o455() != o163.o747 || o190.o780() || o192.o455() != o163.o747 || o192.o780()) this.o693 |= o107.o1009;
            this.o988 = o186;
            this.o989 = o188;
            this.o1004.o373 = 0;
            this.o697 = this.o800 = null;
            this.o829.o709 = null;
            this.o829.o830 = null;
            this.o829.next = null;
            this.o829.o805 = null;
            this.o831.o709 = null;
            this.o831.o830 = null;
            this.o831.next = null;
            this.o831.o805 = null
        }
    };
    o107.prototype.o836 = function (o186) {
        var o188 = this.o1005;
        this.o1005 = this.o1004;
        this.o1004 = o188;
        this.o693 |= o107.o1012;
        var o190 = false;
        o188 = (this.o693 & o107.o1008) == o107.o1008;
        var o192 = this.o988.o700,
            o194 = this.o989.o700,
            o196 = this.o988.o884.o344(this.o989.o884);
        if (this.o693 & o107.o1010) {
            if (o196) {
                o190 = this.o988.o870();
                o196 = this.o989.o870();
                o192 = o192.o535();
                o194 = o194.o535();
                o190 = o105.o344(o190, o192, o196, o194)
            }
            this.o1004.o373 = 0
        } else {
            if (o192.o455() != o163.o747 || o192.o780() || o194.o455() != o163.o747 || o194.o780()) this.o693 |= o107.o1009;
            else this.o693 &= ~o107.o1009; if (o196) {
                this.o519();
                o190 = this.o1004.o373 > 0;
                for (o196 = 0; o196 < this.o1004.o373; ++o196) {
                    var o198 = this.o1004.o396[o196];
                    o198.o500 = 0;
                    o198.o499 = 0;
                    for (var o200 = o198.o397, o93 = 0; o93 < this.o1005.o373; ++o93) {
                        var o203 = this.o1005.o396[o93];
                        if (o203.o397.key == o200.key) {
                            o198.o500 = o203.o500;
                            o198.o499 = o203.o499;
                            break
                        }
                    }
                }
            } else this.o1004.o373 = 0; if (o190 != o188) {
                o192.o749(true);
                o194.o749(true)
            }
        } if (o190) this.o693 |= o107.o1008;
        else this.o693 &= ~o107.o1008;
        o188 == false && o190 == true && o186.o817(this);
        o188 == true && o190 == false && o186.o818(this);
        (this.o693 & o107.o1010) == 0 && o186.o819(this, this.o1005)
    };
    o107.prototype.o519 = function () {};
    o107.prototype.o990 = function (o186, o188) {
        o107.o1013.o419.Set(this.o988.o870());
        o107.o1013.o420.Set(this.o989.o870());
        o107.o1013.o529 = o186;
        o107.o1013.o530 = o188;
        o107.o1013.o532 = o167.o611;
        return o180.o527(o107.o1013)
    };
    o96.o328.push(function () {
        o96.o127.o128.o241.o1010 = 1;
        o96.o127.o128.o241.o1009 = 2;
        o96.o127.o128.o241.o808 = 4;
        o96.o127.o128.o241.o985 = 8;
        o96.o127.o128.o241.o1008 = 16;
        o96.o127.o128.o241.o1012 = 32;
        o96.o127.o128.o241.o834 = 64;
        o96.o127.o128.o241.o1013 = new o182
    });
    o137.o243 = function () {
        this.o1014 = new o172;
        this.o1015 = new o172;
        this.o340 = new o172;
        this.o1016 = new o67;
        this.o99 = new o67
    };
    o137.prototype.o243 = function () {
        this.o913 = new o122(o167.o395);
        for (var o186 = 0; o186 < o167.o395; o186++) this.o913[o186] = new o139
    };
    o139.o245 = function () {
        this.o1015 = new o172;
        this.o1017 = new o172;
        this.o1018 = new o172
    };
    o141.o247 = function () {};
    o143.o249 = function () {};
    o143.prototype.o249 = function (o186) {
        this.o826 = o186;
        this.o1019()
    };
    o143.prototype.o1020 = function (o186, o188, o190, o192) {
        if (o190 === undefined) o190 = 0;
        if (o192 === undefined) o192 = 0;
        this.o1021[o190][o192].o1022 = o186;
        this.o1021[o190][o192].o1023 = o188;
        this.o1021[o190][o192].o1024 = true;
        if (o190 != o192) {
            this.o1021[o192][o190].o1022 = o186;
            this.o1021[o192][o190].o1023 = o188;
            this.o1021[o192][o190].o1024 = false
        }
    };
    o143.prototype.o1019 = function () {
            this.o1021 = new o122(o105.o612);
            for (var o186 = 0; o186 < o105.o612; o186++) {
                this.o1021[o186] = new o122(o105.o612);
                for (var o188 = 0; o188 < o105.o612; o188++) this.o1021[o186][o188] = new o145
            }
            this.o1020(o106.o692, o106.o713, o105.o456, o105.o456);
            this.o1020(o155.o692, o155.o713, o105.o457, o105.o456);
            this.o1020(o159.o692, o159.o713, o105.o457, o105.o457);
            this.o1020(o151.o692, o151.o713, o105.o588, o105.o456);
            this.o1020(o157.o692, o157.o713,
                o105.o457, o105.o588)
    };
    o143.prototype.o692 = function (o186, o188) {
        var o190 = parseInt(o186.o455()),
            o192 = parseInt(o188.o455());
        o190 = this.o1021[o190][o192];
        if (o190.o1025) {
            o192 = o190.o1025;
            o190.o1025 = o192.o697;
            o190.o1026--;
            o192.o498(o186, o188);
            return o192
        }
        o192 = o190.o1022;
        if (o192 != null) {
            if (o190.o1024) {
                o192 = o192(this.o826);
                o192.o498(o186, o188)
            } else {
                o192 = o192(this.o826);
                o192.o498(o188, o186)
            }
            return o192
        } else return null
    };
    o143.prototype.o713 = function (o186) {
        if (o186.o1004.o373 > 0) {
            o186.o988.o700.o749(true);
            o186.o989.o700.o749(true)
        }
        var o188 = parseInt(o186.o988.o455()),
            o190 = parseInt(o186.o989.o455());
        o188 = this.o1021[o188][o190];
        o188.o1026++;
        o186.o697 = o188.o1025;
        o188.o1025 = o186;
        o188 = o188.o1023;
        o188(o186, this.o826)
    };
    o145.o251 = function () {};
    o147.o253 = function () {
        this.o363 = new o172;
        this.o340 = new o172;
        this.o356 = new o176
    };
    o149.o255 = function () {
        this.o1027 = new o165;
        this.o909 = new o122
    };
    o149.prototype.o255 = function () {};
    o149.prototype.o510 = function (o186, o188, o190, o192) {
        if (o190 === undefined) o190 = 0;
        var o194;
        this.o1027.Set(o186);
        this.o826 = o192;
        o186 = 0;
        for (this.o1028 = o190; this.o909.length < this.o1028;) this.o909[this.o909.length] = new o137;
        for (o186 = 0; o186 < o190; ++o186) {
            o194 = o188[o186];
            o192 = o194.o988;
            var o196 = o194.o989,
                o198 = o192.o869.o374,
                o200 = o196.o869.o374,
                o93 = o192.o700,
                o203 = o196.o700,
                o205 = o194.o1006(),
                o207 = o167.o619(o192.o877(), o196.o877()),
                o37 = o167.o620(o192.o880(), o196.o880()),
                o210 = o93.o685.o214,
                o212 = o93.o685.o105,
                o214 = o203.o685.o214,
                o216 = o203.o685.o105,
                o218 = o93.o727,
                o220 = o203.o727;
            o167.o434(o205.o373 > 0);
            o149.o1029.o510(o205, o93.o683, o198, o203.o683, o200);
            o196 = o149.o1029.o545.o214;
            o194 = o149.o1029.o545.o105;
            o192 = this.o909[o186];
            o192.o947 = o93;
            o192.o948 = o203;
            o192.o1030 = o205;
            o192.o340.o214 = o196;
            o192.o340.o105 = o194;
            o192.o911 = o205.o373;
            o192.o885 = o207;
            o192.o886 = o37;
            o192.o1014.o214 = o205.o392.o214;
            o192.o1014.o105 = o205.o392.o105;
            o192.o1015.o214 = o205.o394.o214;
            o192.o1015.o105 = o205.o394.o105;
            o192.o1031 = o198 + o200;
            o192.type = o205.o377;
            for (o198 = 0; o198 < o192.o911; ++o198) {
                o207 = o205.o396[o198];
                o200 = o192.o913[o198];
                o200.o914 = o207.o500;
                o200.o915 = o207.o499;
                o200.o1015.o393(o207.o394);
                o207 = o200.o1017.o214 = o149.o1029.o396[o198].o214 - o93.o684.o196.o214;
                o37 = o200.o1017.o105 = o149.o1029.o396[o198].o105 - o93.o684.o196.o105;
                var o222 = o200.o1018.o214 = o149.o1029.o396[o198].o214 - o203.o684.o196.o214,
                    o224 = o200.o1018.o105 = o149.o1029.o396[o198].o105 - o203.o684.o196.o105,
                    o226 = o207 * o194 - o37 * o196,
                    o228 = o222 * o194 - o224 * o196;
                o226 *= o226;
                o228 *= o228;
                o200.o1016 = 1 / (o93.o753 + o203.o753 + o93.o754 * o226 + o203.o754 * o228);
                var o230 = o93.o760 * o93.o753 + o203.o760 * o203.o753;
                o230 += o93.o760 * o93.o754 * o226 + o203.o760 * o203.o754 * o228;
                o200.o1032 = 1 / o230;
                o228 = o194;
                o230 = -o196;
                o226 = o207 * o230 - o37 * o228;
                o228 = o222 * o230 - o224 * o228;
                o226 *= o226;
                o228 *= o228;
                o200.o1033 = 1 / (o93.o753 + o203.o753 + o93.o754 * o226 + o203.o754 * o228);
                o200.o1034 = 0;
                o207 = o192.o340.o214 * (o214 + -o220 * o224 - o210 - -o218 * o37) + o192.o340.o105 * (o216 + o220 * o222 - o212 - o218 * o207);
                if (o207 < -o167.o627) o200.o1034 += -o192.o886 * o207
            }
            if (o192.o911 == 2) {
                o216 = o192.o913[0];
                o214 = o192.o913[1];
                o205 = o93.o753;
                o93 = o93.o754;
                o210 = o203.o753;
                o203 = o203.o754;
                o212 = o216.o1017.o214 * o194 - o216.o1017.o105 * o196;
                o216 = o216.o1018.o214 * o194 - o216.o1018.o105 * o196;
                o218 = o214.o1017.o214 * o194 - o214.o1017.o105 * o196;
                o214 = o214.o1018.o214 * o194 - o214.o1018.o105 * o196;
                o196 = o205 + o210 + o93 * o212 * o212 + o203 * o216 * o216;
                o194 = o205 + o210 + o93 * o218 * o218 + o203 * o214 * o214;
                o203 = o205 + o210 + o93 * o212 * o218 + o203 * o216 * o214;
                if (o196 * o196 < 100 * (o196 * o194 - o203 * o203)) {
                    o192.o99.o361.Set(o196, o203);
                    o192.o99.o362.Set(o203, o194);
                    o192.o99.o648(o192.o1016)
                } else o192.o911 = 1
            }
        }
    };
    o149.prototype.o901 = function (o186) {
        for (var o188 = 0; o188 < this.o1028; ++o188) {
            var o190 = this.o909[o188],
                o192 = o190.o947,
                o194 = o190.o948,
                o196 = o192.o753,
                o198 = o192.o754,
                o200 = o194.o753,
                o93 = o194.o754,
                o203 = o190.o340.o214,
                o205 = o190.o340.o105,
                o207 = o205,
                o37 = -o203,
                o210 = 0,
                o212 = 0;
            if (o186.o920) {
                o212 = o190.o911;
                for (o210 = 0; o210 < o212; ++o210) {
                    var o214 = o190.o913[o210];
                    o214.o914 *= o186.o966;
                    o214.o915 *= o186.o966;
                    var o216 = o214.o914 * o203 + o214.o915 * o207,
                        o218 = o214.o914 * o205 + o214.o915 * o37;
                    o192.o727 -= o198 * (o214.o1017.o214 * o218 - o214.o1017.o105 * o216);
                    o192.o685.o214 -= o196 * o216;
                    o192.o685.o105 -= o196 * o218;
                    o194.o727 += o93 * (o214.o1018.o214 * o218 - o214.o1018.o105 * o216);
                    o194.o685.o214 += o200 * o216;
                    o194.o685.o105 += o200 * o218
                }
            } else {
                o212 = o190.o911;
                for (o210 = 0; o210 < o212; ++o210) {
                    o192 = o190.o913[o210];
                    o192.o914 = 0;
                    o192.o915 = 0
                }
            }
        }
    };
    o149.prototype.o903 = function () {
        for (var o186 = 0, o188, o190 = 0, o192 = 0, o194 = 0, o196 = o192 = o192 = o190 = o190 = 0, o198 = o190 = o190 = 0, o200 = o190 = o194 = 0, o93 = 0, o203, o205 = 0; o205 < this.o1028; ++o205) {
            o194 = this.o909[o205];
            var o207 = o194.o947,
                o37 = o194.o948,
                o210 = o207.o727,
                o212 = o37.o727,
                o214 = o207.o685,
                o216 = o37.o685,
                o218 = o207.o753,
                o220 = o207.o754,
                o222 = o37.o753,
                o224 = o37.o754;
            o200 = o194.o340.o214;
            var o226 = o93 = o194.o340.o105;
            o203 = -o200;
            o198 = o194.o885;
            for (o186 = 0; o186 < o194.o911; o186++) {
                o188 = o194.o913[o186];
                o190 = o216.o214 - o212 * o188.o1018.o105 - o214.o214 + o210 * o188.o1017.o105;
                o192 = o216.o105 + o212 * o188.o1018.o214 - o214.o105 - o210 * o188.o1017.o214;
                o190 = o190 * o226 + o192 * o203;
                o190 = o188.o1033 * -o190;
                o192 = o198 * o188.o914;
                o192 = o170.o517(o188.o915 + o190, -o192, o192);
                o190 = o192 - o188.o915;
                o196 = o190 * o226;
                o190 = o190 * o203;
                o214.o214 -= o218 * o196;
                o214.o105 -= o218 * o190;
                o210 -= o220 * (o188.o1017.o214 * o190 - o188.o1017.o105 * o196);
                o216.o214 += o222 * o196;
                o216.o105 += o222 * o190;
                o212 += o224 * (o188.o1018.o214 * o190 - o188.o1018.o105 * o196);
                o188.o915 = o192
            }
            parseInt(o194.o911);
            if (o194.o911 == 1) {
                o188 = o194.o913[0];
                o190 = o216.o214 + -o212 * o188.o1018.o105 - o214.o214 - -o210 * o188.o1017.o105;
                o192 = o216.o105 + o212 * o188.o1018.o214 - o214.o105 - o210 * o188.o1017.o214;
                o194 = o190 * o200 + o192 * o93;
                o190 = -o188.o1016 * (o194 - o188.o1034);
                o192 = o188.o914 + o190;
                o192 = o192 > 0 ? o192 : 0;
                o190 = o192 - o188.o914;
                o196 = o190 * o200;
                o190 = o190 * o93;
                o214.o214 -= o218 * o196;
                o214.o105 -= o218 * o190;
                o210 -= o220 * (o188.o1017.o214 * o190 - o188.o1017.o105 * o196);
                o216.o214 += o222 * o196;
                o216.o105 += o222 * o190;
                o212 += o224 * (o188.o1018.o214 * o190 - o188.o1018.o105 * o196);
                o188.o914 = o192
            } else {
                o188 = o194.o913[0];
                o186 = o194.o913[1];
                o190 = o188.o914;
                o198 = o186.o914;
                var o228 = (o216.o214 - o212 * o188.o1018.o105 - o214.o214 + o210 * o188.o1017.o105) * o200 + (o216.o105 + o212 * o188.o1018.o214 - o214.o105 - o210 * o188.o1017.o214) * o93,
                    o230 = (o216.o214 - o212 * o186.o1018.o105 - o214.o214 + o210 * o186.o1017.o105) * o200 + (o216.o105 + o212 * o186.o1018.o214 - o214.o105 - o210 * o186.o1017.o214) * o93;
                o192 = o228 - o188.o1034;
                o196 = o230 - o186.o1034;
                o203 = o194.o99;
                o192 -= o203.o361.o214 * o190 + o203.o362.o214 * o198;
                for (o196 -= o203.o361.o105 * o190 + o203.o362.o105 * o198;;) {
                    o203 = o194.o1016;
                    o226 = -(o203.o361.o214 * o192 + o203.o362.o214 * o196);
                    o203 = -(o203.o361.o105 * o192 + o203.o362.o105 * o196);
                    if (o226 >= 0 && o203 >= 0) {
                        o190 = o226 - o190;
                        o198 = o203 - o198;
                        o194 = o190 * o200;
                        o190 = o190 * o93;
                        o200 = o198 * o200;
                        o93 = o198 * o93;
                        o214.o214 -= o218 * (o194 + o200);
                        o214.o105 -= o218 * (o190 + o93);
                        o210 -= o220 * (o188.o1017.o214 * o190 - o188.o1017.o105 * o194 + o186.o1017.o214 * o93 - o186.o1017.o105 * o200);
                        o216.o214 += o222 * (o194 + o200);
                        o216.o105 += o222 * (o190 + o93);
                        o212 += o224 * (o188.o1018.o214 * o190 - o188.o1018.o105 * o194 + o186.o1018.o214 * o93 - o186.o1018.o105 * o200);
                        o188.o914 = o226;
                        o186.o914 = o203;
                        break
                    }
                    o226 = -o188.o1016 * o192;
                    o203 = 0;
                    o230 = o194.o99.o361.o105 * o226 + o196;
                    if (o226 >= 0 && o230 >= 0) {
                        o190 = o226 - o190;
                        o198 = o203 - o198;
                        o194 = o190 * o200;
                        o190 = o190 * o93;
                        o200 = o198 * o200;
                        o93 = o198 * o93;
                        o214.o214 -= o218 * (o194 + o200);
                        o214.o105 -= o218 * (o190 + o93);
                        o210 -= o220 * (o188.o1017.o214 * o190 - o188.o1017.o105 * o194 + o186.o1017.o214 * o93 - o186.o1017.o105 * o200);
                        o216.o214 += o222 * (o194 + o200);
                        o216.o105 += o222 * (o190 + o93);
                        o212 += o224 * (o188.o1018.o214 * o190 - o188.o1018.o105 * o194 + o186.o1018.o214 * o93 - o186.o1018.o105 * o200);
                        o188.o914 = o226;
                        o186.o914 = o203;
                        break
                    }
                    o226 = 0;
                    o203 = -o186.o1016 * o196;
                    o228 = o194.o99.o362.o214 * o203 + o192;
                    if (o203 >= 0 && o228 >= 0) {
                        o190 = o226 - o190;
                        o198 = o203 - o198;
                        o194 = o190 * o200;
                        o190 = o190 * o93;
                        o200 = o198 * o200;
                        o93 = o198 * o93;
                        o214.o214 -= o218 * (o194 + o200);
                        o214.o105 -= o218 * (o190 + o93);
                        o210 -= o220 * (o188.o1017.o214 * o190 - o188.o1017.o105 * o194 + o186.o1017.o214 * o93 - o186.o1017.o105 * o200);
                        o216.o214 += o222 * (o194 + o200);
                        o216.o105 += o222 * (o190 + o93);
                        o212 += o224 * (o188.o1018.o214 * o190 - o188.o1018.o105 * o194 + o186.o1018.o214 * o93 - o186.o1018.o105 * o200);
                        o188.o914 = o226;
                        o186.o914 = o203;
                        break
                    }
                    o203 = o226 = 0;
                    o228 = o192;
                    o230 = o196;
                    if (o228 >= 0 && o230 >= 0) {
                        o190 = o226 - o190;
                        o198 = o203 - o198;
                        o194 = o190 * o200;
                        o190 = o190 * o93;
                        o200 = o198 * o200;
                        o93 = o198 * o93;
                        o214.o214 -= o218 * (o194 + o200);
                        o214.o105 -= o218 * (o190 + o93);
                        o210 -= o220 * (o188.o1017.o214 * o190 - o188.o1017.o105 * o194 + o186.o1017.o214 * o93 - o186.o1017.o105 * o200);
                        o216.o214 += o222 * (o194 + o200);
                        o216.o105 += o222 * (o190 + o93);
                        o212 += o224 * (o188.o1018.o214 * o190 - o188.o1018.o105 * o194 + o186.o1018.o214 * o93 - o186.o1018.o105 * o200);
                        o188.o914 = o226;
                        o186.o914 = o203;
                        break
                    }
                    break
                }
            }
            o207.o727 = o210;
            o37.o727 = o212
        }
    };
    o149.prototype.o904 = function () {
        for (var o186 = 0; o186 < this.o1028; ++o186) for (var o188 = this.o909[o186], o190 = o188.o1030, o192 = 0; o192 < o188.o911; ++o192) {
                var o194 = o190.o396[o192],
                    o196 = o188.o913[o192];
                o194.o500 = o196.o914;
                o194.o499 = o196.o915
            }
    };
    o149.prototype.o907 = function (o186) {
        if (o186 === undefined) o186 = 0;
        for (var o188 = 0, o190 = 0; o190 < this.o1028; o190++) {
            var o192 = this.o909[o190],
                o194 = o192.o947,
                o196 = o192.o948,
                o198 = o194.o760 * o194.o753,
                o200 = o194.o760 * o194.o754,
                o93 = o196.o760 * o196.o753,
                o203 = o196.o760 * o196.o754;
            o149.o1035.o510(o192);
            for (var o205 = o149.o1035.o545, o207 = 0; o207 < o192.o911; o207++) {
                var o37 = o192.o913[o207],
                    o210 = o149.o1035.o396[o207],
                    o212 = o149.o1035.o1036[o207],
                    o214 = o210.o214 - o194.o684.o196.o214,
                    o216 = o210.o105 - o194.o684.o196.o105,
                    o218 = o210.o214 - o196.o684.o196.o214;
                o210 = o210.o105 - o196.o684.o196.o105;
                o188 = o188 < o212 ? o188 : o212;
                o212 = o170.o517(o186 * (o212 + o167.o611), -o167.o628, 0);
                o212 = -o37.o1032 * o212;
                o37 = o212 * o205.o214;
                o212 = o212 * o205.o105;
                o194.o684.o196.o214 -= o198 * o37;
                o194.o684.o196.o105 -= o198 * o212;
                o194.o684.o194 -= o200 * (o214 * o212 - o216 * o37);
                o194.o803();
                o196.o684.o196.o214 += o93 * o37;
                o196.o684.o196.o105 += o93 * o212;
                o196.o684.o194 += o203 * (o218 * o212 - o210 * o37);
                o196.o803()
            }
        }
        return o188 > -1.5 * o167.o611
    };
    o96.o328.push(function () {
        o96.o127.o128.o255.o1029 = new o184;
        o96.o127.o128.o255.o1035 = new o161
    });
    o96.o110(o151, o96.o127.o128.o241);
    o151.prototype.o546 = o96.o127.o128.o241.prototype;
    o151.o257 = function () {
        o96.o127.o128.o241.o241.apply(this, arguments)
    };
    o151.o692 = function () {
        return new o151
    };
    o151.o713 = function () {};
    o151.prototype.o498 = function (o186, o188) {
        this.o546.o498.call(this, o186, o188)
    };
    o151.prototype.o519 = function () {
        var o186 = this.o988.o828(),
            o188 = this.o989.o828();
        this.o1037(this.o1004, this.o988.o870() instanceof o98 ? this.o988.o870() : null, o186.o683,
            this.o989.o870() instanceof o97 ? this.o989.o870() : null, o188.o683)
    };
    o151.prototype.o1037 = function () {};
    o96.o110(o153, o96.o127.o128.o241);
    o153.prototype.o546 = o96.o127.o128.o241.prototype;
    o153.o259 = function () {
        o96.o127.o128.o241.o241.apply(this, arguments)
    };
    o153.prototype.o259 = function () {
        this.o546.o241.call(this)
    };
    o153.prototype.o519 = function () {};
    o96.o110(o155, o96.o127.o128.o241);
    o155.prototype.o546 = o96.o127.o128.o241.prototype;
    o155.o261 = function () {
        o96.o127.o128.o241.o241.apply(this, arguments)
    };
    o155.o692 = function () {
        return new o155
    };
    o155.o713 = function () {};
    o155.prototype.o498 = function (o186, o188) {
        this.o546.o498.call(this, o186, o188);
        o167.o434(o186.o455() == o105.o457);
        o167.o434(o188.o455() == o105.o456)
    };
    o155.prototype.o519 = function () {
        var o186 = this.o988.o700,
            o188 = this.o989.o700;
        o174.o404(this.o1004, this.o988.o870() instanceof o99 ? this.o988.o870() : null, o186.o683, this.o989.o870() instanceof o97 ? this.o989.o870() : null, o188.o683)
    };
    o96.o110(o157, o96.o127.o128.o241);
    o157.prototype.o546 = o96.o127.o128.o241.prototype;
    o157.o263 = function () {
        o96.o127.o128.o241.o241.apply(this, arguments)
    };
    o157.o692 = function () {
        return new o157
    };
    o157.o713 = function () {};
    o157.prototype.o498 = function (o186, o188) {
        this.o546.o498.call(this, o186, o188);
        o167.o434(o186.o455() == o105.o457);
        o167.o434(o188.o455() == o105.o588)
    };
    o157.prototype.o519 = function () {
        var o186 = this.o988.o828(),
            o188 = this.o989.o828();
        this.o1038(this.o1004, this.o988.o870() instanceof o99 ? this.o988.o870() : null, o186.o683, this.o989.o870() instanceof o98 ? this.o989.o870() : null, o188.o683)
    };
    o157.prototype.o1038 = function () {};
    o96.o110(o159, o96.o127.o128.o241);
    o159.prototype.o546 = o96.o127.o128.o241.prototype;
    o159.o265 = function () {
            o96.o127.o128.o241.o241.apply(this, arguments)
    };
    o159.o692 = function () {
        return new o159
    };
    o159.o713 = function () {};
    o159.prototype.o498 = function (o186, o188) {
        this.o546.o498.call(this, o186, o188)
    };
    o159.prototype.o519 = function () {
        var o186 = this.o988.o828(),
            o188 = this.o989.o828();
        o174.o372(this.o1004, this.o988.o870() instanceof o99 ? this.o988.o870() : null, o186.o683, this.o989.o870() instanceof o99 ? this.o989.o870() : null, o188.o683)
    };
    o161.o267 = function () {};
    o161.prototype.o267 = function () {
        this.o545 = new o172;
        this.o1036 = new o123(o167.o395);
        this.o396 = new o122(o167.o395);
        for (var o186 = 0; o186 < o167.o395; o186++) this.o396[o186] = new o172
    };
    o161.prototype.o510 = function (o186) {
        o167.o434(o186.o911 > 0);
        var o188 = 0,
            o190 = 0,
            o192 = 0,
            o194, o196 = 0,
            o198 = 0;
        switch (o186.type) {
        case Z.e_circles:
            o194 = o186.o947.o683.o170;
            o192 = o186.o1015;
            o188 = o186.o947.o683.o363.o214 + (o194.o361.o214 * o192.o214 + o194.o362.o214 * o192.o105);
            o190 = o186.o947.o683.o363.o105 + (o194.o361.o105 * o192.o214 + o194.o362.o105 * o192.o105);
            o194 = o186.o948.o683.o170;
            o192 = o186.o913[0].o1015;
            o196 = o186.o948.o683.o363.o214 + (o194.o361.o214 * o192.o214 + o194.o362.o214 * o192.o105);
            o194 = o186.o948.o683.o363.o105 + (o194.o361.o105 * o192.o214 + o194.o362.o105 * o192.o105);
            o192 = o196 - o188;
            o198 = o194 - o190;
            var o200 = o192 * o192 + o198 * o198;
            if (o200 > Number.MIN_VALUE * Number.MIN_VALUE) {
                o200 = Math.sqrt(o200);
                this.o545.o214 = o192 / o200;
                this.o545.o105 = o198 / o200
            } else {
                this.o545.o214 = 1;
                this.o545.o105 = 0
            }
            this.o396[0].o214 = 0.5 * (o188 + o196);
            this.o396[0].o105 = 0.5 * (o190 + o194);
            this.o1036[0] = o192 * this.o545.o214 + o198 * this.o545.o105 - o186.o1031Z.e_circles:
            a = j.bodyA.m_xf.R;
            n = j.localPoint;
            o = j.bodyA.m_xf.position.x + (a.col1.x * n.x + a.col2.x * n.y);
            q = j.bodyA.m_xf.position.y + (a.col1.y * n.x + a.col2.y * n.y);
            a = j.bodyB.m_xf.R;
            n = j.points[0].localPoint;
            c = j.bodyB.m_xf.position.x + (a.col1.x * n.x + a.col2.x * n.y);
            a = j.bodyB.m_xf.position.y + (a.col1.y * n.x + a.col2.y * n.y);
            n = c - o;
            g = a - q;
            var b = n * n + g * g;
            if (b > Number.MIN_VALUE * Number.MIN_VALUE) {
                b = Math.sqrt(b);
                this.m_normal.x = n / b;
                this.m_normal.y = g / b
            } else {
                this.m_normal.x = 1;
                this.m_normal.y = 0
            }
            this.m_points[0].x = 0.5 * (o + c);
            this.m_points[0].y = 0.5 * (q + a);
            this.m_separations[0] = n * this.m_normal.x + g * this.m_normal.y - j.radiuso178.o401:
            a = j.bodyA.m_xf.R;
            n = j.localPoint;
            o = j.bodyA.m_xf.position.x + (a.col1.x * n.x + a.col2.x * n.y);
            q = j.bodyA.m_xf.position.y + (a.col1.y * n.x + a.col2.y * n.y);
            a = j.bodyB.m_xf.R;
            n = j.points[0].localPoint;
            c = j.bodyB.m_xf.position.x + (a.col1.x * n.x + a.col2.x * n.y);
            a = j.bodyB.m_xf.position.y + (a.col1.y * n.x + a.col2.y * n.y);
            n = c - o;
            g = a - q;
            var b = n * n + g * g;
            if (b > Number.MIN_VALUE * Number.MIN_VALUE) {
                b = Math.sqrt(b);
                this.m_normal.x = n / b;
                this.m_normal.y = g / b
            } else {
                this.m_normal.x = 1;
                this.m_normal.y = 0
            }
            this.m_points[0].x = 0.5 * (o + c);
            this.m_points[0].y = 0.5 * (q + a);
            this.m_separations[0] = n * this.m_normal.x + g * this.m_normal.y - j.radius;
            break;
        case Z.e_faceA:
            o194 = o186.o947.o683.o170;
            o192 = o186.o1014;
            this.o545.o214 = o194.o361.o214 * o192.o214 + o194.o362.o214 * o192.o105;
            this.o545.o105 = o194.o361.o105 * o192.o214 + o194.o362.o105 * o192.o105;
            o194 = o186.o947.o683.o170;
            o192 = o186.o1015;
            o196 = o186.o947.o683.o363.o214 + (o194.o361.o214 * o192.o214 + o194.o362.o214 * o192.o105);
            o198 = o186.o947.o683.o363.o105 + (o194.o361.o105 * o192.o214 + o194.o362.o105 * o192.o105);
            o194 = o186.o948.o683.o170;
            for (o188 = 0; o188 < o186.o911; ++o188) {
                o192 = o186.o913[o188].o1015;
                o190 = o186.o948.o683.o363.o214 + (o194.o361.o214 * o192.o214 + o194.o362.o214 * o192.o105);
                o192 = o186.o948.o683.o363.o105 + (o194.o361.o105 * o192.o214 + o194.o362.o105 * o192.o105);
                this.o1036[o188] = (o190 - o196) * this.o545.o214 + (o192 - o198) * this.o545.o105 - o186.o1031;
                this.o396[o188].o214 = o190;
                this.o396[o188].o105 = o192Z.e_faceA:
            a = j.bodyA.m_xf.R;
            n = j.localPlaneNormal;
            this.m_normal.x = a.col1.x * n.x + a.col2.x * n.y;
            this.m_normal.y = a.col1.y * n.x + a.col2.y * n.y;
            a = j.bodyA.m_xf.R;
            n = j.localPoint;
            c = j.bodyA.m_xf.position.x + (a.col1.x * n.x + a.col2.x * n.y);
            g = j.bodyA.m_xf.position.y + (a.col1.y * n.x + a.col2.y * n.y);
            a = j.bodyB.m_xf.R;
            for (o = 0; o < j.pointCount; ++o) {
                n = j.points[o].localPoint;
                q = j.bodyB.m_xf.position.x + (a.col1.x * n.x + a.col2.x * n.y);
                n = j.bodyB.m_xf.position.y + (a.col1.y * n.x + a.col2.y * n.y);
                this.m_separations[o] = (q - c) * this.m_normal.x + (n - g) * this.m_normal.y - j.radius;
                this.m_points[o].x = q;
                this.m_points[o].y = no178.o379:
            a = j.bodyA.m_xf.R;
            n = j.localPlaneNormal;
            this.m_normal.x = a.col1.x * n.x + a.col2.x * n.y;
            this.m_normal.y = a.col1.y * n.x + a.col2.y * n.y;
            a = j.bodyA.m_xf.R;
            n = j.localPoint;
            c = j.bodyA.m_xf.position.x + (a.col1.x * n.x + a.col2.x * n.y);
            g = j.bodyA.m_xf.position.y + (a.col1.y * n.x + a.col2.y * n.y);
            a = j.bodyB.m_xf.R;
            for (o = 0; o < j.pointCount; ++o) {
                n = j.points[o].localPoint;
                q = j.bodyB.m_xf.position.x + (a.col1.x * n.x + a.col2.x * n.y);
                n = j.bodyB.m_xf.position.y + (a.col1.y * n.x + a.col2.y * n.y);
                this.m_separations[o] = (q - c) * this.m_normal.x + (n - g) * this.m_normal.y - j.radius;
                this.m_points[o].x = q;
                this.m_points[o].y = n
            }
            break;
        case Z.e_faceB:
            o194 = o186.o948.o683.o170;
            o192 = o186.o1014;
            this.o545.o214 = o194.o361.o214 * o192.o214 + o194.o362.o214 * o192.o105;
            this.o545.o105 = o194.o361.o105 * o192.o214 + o194.o362.o105 * o192.o105;
            o194 = o186.o948.o683.o170;
            o192 = o186.o1015;
            o196 = o186.o948.o683.o363.o214 + (o194.o361.o214 * o192.o214 + o194.o362.o214 * o192.o105);
            o198 = o186.o948.o683.o363.o105 + (o194.o361.o105 * o192.o214 + o194.o362.o105 * o192.o105);
            o194 = o186.o947.o683.o170;
            for (o188 = 0; o188 < o186.o911; ++o188) {
                o192 = o186.o913[o188].o1015;
                o190 = o186.o947.o683.o363.o214 + (o194.o361.o214 * o192.o214 + o194.o362.o214 * o192.o105);
                o192 = o186.o947.o683.o363.o105 + (o194.o361.o105 * o192.o214 + o194.o362.o105 * o192.o105);
                this.o1036[o188] = (o190 - o196) * this.o545.o214 + (o192 - o198) * this.o545.o105 - o186.o1031;
                this.o396[o188].Set(o190, o192)
            }
            this.o545.o214 *= -1;
            this.o545.o105Z.e_faceB:
            a = j.bodyB.m_xf.R;
            n = j.localPlaneNormal;
            this.m_normal.x = a.col1.x * n.x + a.col2.x * n.y;
            this.m_normal.y = a.col1.y * n.x + a.col2.y * n.y;
            a = j.bodyB.m_xf.R;
            n = j.localPoint;
            c = j.bodyB.m_xf.position.x + (a.col1.x * n.x + a.col2.x * n.y);
            g = j.bodyB.m_xf.position.y + (a.col1.y * n.x + a.col2.y * n.y);
            a = j.bodyA.m_xf.R;
            for (o = 0; o < j.pointCount; ++o) {
                n = j.points[o].localPoint;
                q = j.bodyA.m_xf.position.x + (a.col1.x * n.x + a.col2.x * n.y);
                n = j.bodyA.m_xf.position.y + (a.col1.y * n.x + a.col2.y * n.y);
                this.m_separations[o] = (q - c) * this.m_normal.x + (n - g) * this.m_normal.y - j.radius;
                this.m_points[o].Set(q, n)
            }
            this.m_normal.x *= -1;
            this.m_normal.yo178.o378:
            a = j.bodyB.m_xf.R;
            n = j.localPlaneNormal;
            this.m_normal.x = a.col1.x * n.x + a.col2.x * n.y;
            this.m_normal.y = a.col1.y * n.x + a.col2.y * n.y;
            a = j.bodyB.m_xf.R;
            n = j.localPoint;
            c = j.bodyB.m_xf.position.x + (a.col1.x * n.x + a.col2.x * n.y);
            g = j.bodyB.m_xf.position.y + (a.col1.y * n.x + a.col2.y * n.y);
            a = j.bodyA.m_xf.R;
            for (o = 0; o < j.pointCount; ++o) {
                n = j.points[o].localPoint;
                q = j.bodyA.m_xf.position.x + (a.col1.x * n.x + a.col2.x * n.y);
                n = j.bodyA.m_xf.position.y + (a.col1.y * n.x + a.col2.y * n.y);
                this.m_separations[o] = (q - c) * this.m_normal.x + (n - g) * this.m_normal.y - j.radius;
                this.m_points[o].Set(q, n)
            }
            this.m_normal.x *= -1;
            this.m_normal.y *= -1
        }
    };
    o96.o328.push(function () {
        o96.o127.o128.o267.o1039 = new o172;
        o96.o127.o128.o267.o1040 = new o172
    })
})();
(function () {
    var o97 = o96.o126.Math.o199,
        o98 = o96.o126.Math.o202,
        o99 = o96.o126.Math.o208,
        o105 = o96.o126.o195,
        o106 = o96.o127.o129.o269,
        o107 = o96.o127.o129.o271,
        o137 = o96.o127.o129.o273,
        o139 = o96.o127.o129.o275,
        o141 = o96.o127.o129.o277,
        o143 = o96.o127.o129.o279,
        o145 = o96.o127.o129.o281;
    o96.o110(o106, o96.o127.o129.o275);
    o106.prototype.o546 = o96.o127.o129.o275.prototype;
    o106.o269 = function () {
        o96.o127.o129.o275.o275.apply(this, arguments);
        this.o340 = new o99(0, -1);
        this.o706 = this.o1041 = 0;
        this.o416 = new o99(0, 0);
        this.o1042 = 2;
        this.o1043 = 1;
        this.o1044 = false;
        this.o1045 = true;
        this.o1046 = null
    };
    o106.prototype.o963 = function () {
        if (this.o923) {
            if (this.o1045) this.o1046 = this.o797().o961().o409();
            for (var o147 = this.o923; o147; o147 = o147.o1047) {
                var o149 = o147.o1048;
                if (o149.o748() != false) {
                    for (var o151 = new o99, o153 = new o99, o155 = 0, o157 = 0, o159 = o149.o788(); o159; o159 = o159.o794()) {
                        var o161 = new o99,
                            o163 = o159.o870().o554(this.o340, this.o1041, o149.o535(), o161);
                        o155 += o163;
                        o151.o214 += o163 * o161.o214;
                        o151.o105 += o163 * o161.o105;
                        var o165 = 0;
                        o165 = 1;
                        o157 += o163 * o165;
                        o153.o214 += o163 * o161.o214 * o165;
                        o153.o105 += o163 * o161.o105 * o165
                    }
                    o151.o214 /= o155;
                    o151.o105 /= o155;
                    o153.o214 /= o157;
                    o153.o105 /= o157;
                    if (!(o155 < Number.MIN_VALUE)) {
                        o157 = this.o1046.o438();
                        o157.o604(this.o706 * o155);
                        o149.o746(o157, o153);
                        o153 = o149.o771(o151);
                        o153.o680(this.o416);
                        o153.o604(-this.o1042 * o155);
                        o149.o746(o153, o151);
                        o149.o751(-o149.o761() / o149.o759() * o155 * o149.o728() * this.o1043)
                    }
                }
            }
        }
    };
    o106.prototype.o974 = function (o147) {
        var o149 = new o99,
            o151 = new o99;
        o149.o214 = this.o340.o214 * this.o1041 + this.o340.o105 * 1E3;
        o149.o105 = this.o340.o105 * this.o1041 - this.o340.o214 * 1E3;
        o151.o214 = this.o340.o214 * this.o1041 - this.o340.o105 * 1E3;
        o151.o105 = this.o340.o105 * this.o1041 + this.o340.o214 * 1E3;
        var o153 = new o105(0, 0, 1);
        o147.o858(o149, o151, o153)
    };
    o96.o110(o107, o96.o127.o129.o275);
    o107.prototype.o546 = o96.o127.o129.o275.prototype;
    o107.o271 = function () {
        o96.o127.o129.o275.o275.apply(this, arguments);
        this.o107 = new o99(0, 0)
    };
    o107.prototype.o963 = function (o147) {
        o147 = new o99(this.o107.o214 * o147.o900, this.o107.o105 * o147.o900);
        for (var o149 = this.o923; o149; o149 = o149.o1047) {
            var o151 = o149.o1048;
            o151.o748() && o151.o723(new o99(o151.o725().o214 + o147.o214, o151.o725().o105 + o147.o105))
        }
    };
    o96.o110(o137, o96.o127.o129.o275);
    o137.prototype.o546 = o96.o127.o129.o275.prototype;
    o137.o273 = function () {
            o96.o127.o129.o275.o275.apply(this, arguments);
            this.o97 = new o99(0, 0)
    };
    o137.prototype.o963 = function () {
        for (var o147 = this.o923; o147; o147 = o147.o1047) {
            var o149 = o147.o1048;
            o149.o748() && o149.o746(this.o97, o149.o721())
        }
    };
    o139.o275 = function () {};
    o139.prototype.o963 = function () {};
    o139.prototype.o974 = function () {};
    o139.prototype.o916 = function (o147) {
        var o149 = new o141;
        o149.o940 = this;
        o149.o1048 = o147;
        o149.o1047 = this.o923;
        o149.o1049 = null;
        this.o923 = o149;
        if (o149.o1047) o149.o1047.o1049 = o149;
        this.o896++;
        o149.o939 = o147.o792;
        o149.o1050 = null;
        o147.o792 = o149;
        if (o149.o939) o149.o939.o1050 = o149;
        o147.o799++
    };
    o139.prototype.o941 = function (o147) {
        for (var o149 = o147.o792; o149 && o149.o940 != this;) o149 = o149.o939;
        if (o149.o1049) o149.o1049.o1047 = o149.o1047;
        if (o149.o1047) o149.o1047.o1049 = o149.o1049;
        if (o149.o939) o149.o939.o1050 = o149.o1050;
        if (o149.o1050) o149.o1050.o939 = o149.o939;
        if (this.o923 == o149) this.o923 = o149.o1047;
        if (o147.o792 == o149) o147.o792 = o149.o939;
        o147.o799--;
        this.o896--
    };
    o139.prototype.o899 = function () {
        for (; this.o923;) this.o941(this.o923.o1048)
    };
    o139.prototype.o794 = function () {
        return this.o697
    };
    o139.prototype.o797 = function () {
        return this.o690
    };
    o139.prototype.o981 = function () {
        return this.o923
    };
    o141.o277 = function () {};
    o96.o110(o143, o96.o127.o129.o275);
    o143.prototype.o546 = o96.o127.o129.o275.prototype;
    o143.o279 = function () {
        o96.o127.o129.o275.o275.apply(this, arguments);
        this.o98 = 1;
        this.o1051 = true
    };
    o143.prototype.o963 = function () {
        var o147 = null,
            o149 = null,
            o151 = null,
            o153 = 0,
            o155 = null,
            o157 = null,
            o159 = null,
            o161 = 0,
            o163 = 0,
            o165 = 0;
        o161 = null;
        if (this.o1051) for (o147 = this.o923; o147; o147 = o147.o1047) {
                o149 = o147.o1048;
                o151 = o149.o721();
                o153 = o149.o759();
                for (o155 = this.o923; o155 != o147; o155 = o155.o1047) {
                    o157 = o155.o1048;
                    o159 = o157.o721();
                    o161 = o159.o214 - o151.o214;
                    o163 = o159.o105 - o151.o105;
                    o165 = o161 * o161 + o163 * o163;
                    if (!(o165 < Number.MIN_VALUE)) {
                        o161 = new o99(o161, o163);
                        o161.o604(this.o98 / o165 / Math.sqrt(o165) * o153 * o157.o759());
                        o149.o748() && o149.o746(o161, o151);
                        o161.o604(-1);
                        o157.o748() && o157.o746(o161, o159)
                    }
                }
            } else
                for (o147 = this.o923; o147; o147 = o147.o1047) {
                    o149 = o147.o1048;
                    o151 = o149.o721();
                    o153 = o149.o759();
                    for (o155 = this.o923; o155 != o147; o155 = o155.o1047) {
                        o157 = o155.o1048;
                        o159 = o157.o721();
                        o161 = o159.o214 - o151.o214;
                        o163 = o159.o105 - o151.o105;
                        o165 = o161 * o161 + o163 * o163;
                        if (!(o165 < Number.MIN_VALUE)) {
                            o161 = new o99(o161, o163);
                            o161.o604(this.o98 / o165 * o153 * o157.o759());
                            o149.o748() && o149.o746(o161, o151);
                            o161.o604(-1);
                            o157.o748() && o157.o746(o161, o159)
                        }
                    }
                }
    };
    o96.o110(o145, o96.o127.o129.o275);
    o145.prototype.o546 = o96.o127.o129.o275.prototype;
    o145.o281 = function () {
        o96.o127.o129.o275.o275.apply(this, arguments);
        this.o220 = new o97;
        this.o1052 = 0
    };
    o145.prototype.o1053 = function (o147, o149) {
        if (o147 === undefined) o147 = 0;
        if (o149 === undefined) o149 = 0;
        this.o220.o361.o214 = -o147;
        this.o220.o361.o105 = 0;
        this.o220.o362.o214 = 0;
        this.o220.o362.o105 = -o149;
        this.o1052 = o147 > 0 || o149 > 0 ? 1 / Math.o346(o147, o149) : 0
    };
    o145.prototype.o963 = function (o147) {
        o147 = o147.o900;
        if (!(o147 <= Number.MIN_VALUE)) {
            if (o147 > this.o1052 && this.o1052 > 0) o147 = this.o1052;
            for (var o149 = this.o923; o149; o149 = o149.o1047) {
                var o151 = o149.o1048;
                if (o151.o748()) {
                    var o153 = o151.o768(o98.o516(this.o220, o151.o770(o151.o725())));
                    o151.o723(new o99(o151.o725().o214 + o153.o214 * o147, o151.o725().o105 + o153.o105 * o147))
                }
            }
        }
    }
})();
(function () {
    var o97 = o96.o126.o197,
        o98 = o96.o126.Math.o199,
        o99 = o96.o126.Math.o201,
        o105 = o96.o126.Math.o202,
        o106 = o96.o126.Math.o208,
        o107 = o96.o126.Math.o209,
        o137 = o96.o127.o130.o283,
        o139 = o96.o127.o130.o285,
        o141 = o96.o127.o130.o287,
        o143 = o96.o127.o130.o289,
        o145 = o96.o127.o130.o291,
        o147 = o96.o127.o130.o293,
        o149 = o96.o127.o130.o295,
        o151 = o96.o127.o130.o297,
        o153 = o96.o127.o130.o299,
        o155 = o96.o127.o130.o301,
        o157 = o96.o127.o130.o303,
        o159 = o96.o127.o130.o305,
        o161 = o96.o127.o130.o307,
        o163 = o96.o127.o130.o309,
        o165 = o96.o127.o130.o311,
        o167 = o96.o127.o130.o313,
        o67 = o96.o127.o130.o315,
        o170 = o96.o127.o130.o317,
        o172 = o96.o127.o130.o319,
        o174 = o96.o127.o130.o321,
        o176 = o96.o127.o130.o323,
        o178 = o96.o127.o130.o325;
    o96.o110(o137, o96.o127.o130.o297);
    o137.prototype.o546 = o96.o127.o130.o297.prototype;
    o137.o283 = function () {
        o96.o127.o130.o297.o297.apply(this, arguments);
        this.o1054 = new o106;
        this.o1055 = new o106;
        this.o1056 = new o106
    };
    o137.prototype.o996 = function () {
        return this.o945.o767(this.o1054)
    };
    o137.prototype.o997 = function () {
        return this.o944.o767(this.o1055)
    };
    o137.prototype.o1057 = function (o180) {
        if (o180 === undefined) o180 = 0;
        return new o106(o180 * this.o1058 * this.o1056.o214, o180 * this.o1058 * this.o1056.o105)
    };
    o137.prototype.o1059 = function () {
        return 0
    };
    o137.prototype.o570 = function () {
        return this.o571
    };
    o137.prototype.o1060 = function (o180) {
        if (o180 === undefined) o180 = 0;
        this.o571 = o180
    };
    o137.prototype.o1061 = function () {
        return this.o1062
    };
    o137.prototype.o1063 = function (o180) {
        if (o180 === undefined) o180 = 0;
        this.o1062 = o180
    };
    o137.prototype.o1064 = function () {
        return this.o1065
    };
    o137.prototype.o1066 = function (o180) {
        if (o180 === undefined) o180 = 0;
        this.o1065 = o180
    };
    o137.prototype.o283 = function (o180) {
        this.o546.o297.call(this, o180);
        this.o1054.o393(o180.o1067);
        this.o1055.o393(o180.o1068);
        this.o571 = o180.length;
        this.o1062 = o180.o1069;
        this.o1065 = o180.o1070;
        this.o1071 = this.o1072 = this.o1058 = 0
    };
    o137.prototype.o901 = function (o180) {
        var o182, o184 = 0,
            o186 = this.o945,
            o188 = this.o944;
        o182 = o186.o683.o170;
        var o190 = this.o1054.o214 - o186.o684.o674.o214,
            o192 = this.o1054.o105 - o186.o684.o674.o105;
        o184 = o182.o361.o214 * o190 + o182.o362.o214 * o192;
        o192 = o182.o361.o105 * o190 + o182.o362.o105 * o192;
        o190 = o184;
        o182 = o188.o683.o170;
        var o194 = this.o1055.o214 - o188.o684.o674.o214,
            o196 = this.o1055.o105 - o188.o684.o674.o105;
        o184 = o182.o361.o214 * o194 + o182.o362.o214 * o196;
        o196 = o182.o361.o105 * o194 + o182.o362.o105 * o196;
        o194 = o184;
        this.o1056.o214 = o188.o684.o196.o214 + o194 - o186.o684.o196.o214 - o190;
        this.o1056.o105 = o188.o684.o196.o105 + o196 - o186.o684.o196.o105 - o192;
        o184 = Math.sqrt(this.o1056.o214 * this.o1056.o214 + this.o1056.o105 * this.o1056.o105);
        o184 > o97.o611 ? this.o1056.o604(1 / o184) : this.o1056.o402();
        o182 = o190 * this.o1056.o105 - o192 * this.o1056.o214;
        var o198 = o194 * this.o1056.o105 - o196 * this.o1056.o214;
        o182 = o186.o753 + o186.o754 * o182 * o182 + o188.o753 + o188.o754 * o198 * o198;
        this.o760 = o182 != 0 ? 1 / o182 : 0;
        if (this.o1062 > 0) {
            o184 = o184 - this.o571;
            o198 = 2 * Math.o555 * this.o1062;
            var o200 = this.o760 * o198 * o198;
            this.o1072 = o180.o900 * (2 * this.o760 * this.o1065 * o198 + o180.o900 * o200);
            this.o1072 = this.o1072 != 0 ? 1 / this.o1072 : 0;
            this.o1071 = o184 * o180.o900 * o200 * this.o1072;
            this.o760 = o182 + this.o1072;
            this.o760 = this.o760 != 0 ? 1 / this.o760 : 0
        }
        if (o180.o920) {
            this.o1058 *= o180.o966;
            o180 = this.o1058 * this.o1056.o214;
            o182 = this.o1058 * this.o1056.o105;
            o186.o685.o214 -= o186.o753 * o180;
            o186.o685.o105 -= o186.o753 * o182;
            o186.o727 -= o186.o754 * (o190 * o182 - o192 * o180);
            o188.o685.o214 += o188.o753 * o180;
            o188.o685.o105 += o188.o753 * o182;
            o188.o727 += o188.o754 * (o194 * o182 - o196 * o180)
        } else this.o1058 = 0
    };
    o137.prototype.o903 = function () {
        var o180, o182 = this.o945,
            o184 = this.o944;
        o180 = o182.o683.o170;
        var o186 = this.o1054.o214 - o182.o684.o674.o214,
            o188 = this.o1054.o105 - o182.o684.o674.o105,
            o190 = o180.o361.o214 * o186 + o180.o362.o214 * o188;
        o188 = o180.o361.o105 * o186 + o180.o362.o105 * o188;
        o186 = o190;
        o180 = o184.o683.o170;
        var o192 = this.o1055.o214 - o184.o684.o674.o214,
            o194 = this.o1055.o105 - o184.o684.o674.o105;
        o190 = o180.o361.o214 * o192 + o180.o362.o214 * o194;
        o194 = o180.o361.o105 * o192 + o180.o362.o105 * o194;
        o192 = o190;
        o190 = -this.o760 * (this.o1056.o214 * (o184.o685.o214 + -o184.o727 * o194 - (o182.o685.o214 + -o182.o727 * o188)) + this.o1056.o105 * (o184.o685.o105 + o184.o727 * o192 - (o182.o685.o105 + o182.o727 * o186)) + this.o1071 + this.o1072 * this.o1058);
        this.o1058 += o190;
        o180 = o190 * this.o1056.o214;
        o190 = o190 * this.o1056.o105;
        o182.o685.o214 -= o182.o753 * o180;
        o182.o685.o105 -= o182.o753 * o190;
        o182.o727 -= o182.o754 * (o186 * o190 - o188 * o180);
        o184.o685.o214 += o184.o753 * o180;
        o184.o685.o105 += o184.o753 * o190;
        o184.o727 += o184.o754 * (o192 * o190 - o194 * o180)
    };
    o137.prototype.o907 = function () {
        var o180;
        if (this.o1062 > 0) return true;
        var o182 = this.o945,
            o184 = this.o944;
        o180 = o182.o683.o170;
        var o186 = this.o1054.o214 - o182.o684.o674.o214,
            o188 = this.o1054.o105 - o182.o684.o674.o105,
            o190 = o180.o361.o214 * o186 + o180.o362.o214 * o188;
        o188 = o180.o361.o105 * o186 + o180.o362.o105 * o188;
        o186 = o190;
        o180 = o184.o683.o170;
        var o192 = this.o1055.o214 - o184.o684.o674.o214,
            o194 = this.o1055.o105 - o184.o684.o674.o105;
        o190 = o180.o361.o214 * o192 + o180.o362.o214 * o194;
        o194 = o180.o361.o105 * o192 + o180.o362.o105 * o194;
        o192 = o190;
        o190 = o184.o684.o196.o214 + o192 - o182.o684.o196.o214 - o186;
        var o196 = o184.o684.o196.o105 + o194 - o182.o684.o196.o105 - o188;
        o180 = Math.sqrt(o190 * o190 + o196 * o196);
        o190 /= o180;
        o196 /= o180;
        o180 = o180 - this.o571;
        o180 = o105.o517(o180, -o97.o628, o97.o628);
        var o198 = -this.o760 * o180;
        this.o1056.Set(o190, o196);
        o190 = o198 * this.o1056.o214;
        o196 = o198 * this.o1056.o105;
        o182.o684.o196.o214 -= o182.o753 * o190;
        o182.o684.o196.o105 -= o182.o753 * o196;
        o182.o684.o194 -= o182.o754 * (o186 * o196 - o188 * o190);
        o184.o684.o196.o214 += o184.o753 * o190;
        o184.o684.o196.o105 += o184.o753 * o196;
        o184.o684.o194 += o184.o754 * (o192 * o196 - o194 * o190);
        o182.o803();
        o184.o803();
        return o105.o540(o180) < o97.o611
    };
    o96.o110(o139, o96.o127.o130.o299);
    o139.prototype.o546 = o96.o127.o130.o299.prototype;
    o139.o285 = function () {
        o96.o127.o130.o299.o299.apply(this, arguments);
        this.o1067 = new o106;
        this.o1068 = new o106
    };
    o139.prototype.o285 = function () {
        this.o546.o299.call(this);
        this.type = o151.o999;
        this.length = 1;
        this.o1070 = this.o1069 = 0
    };
    o139.prototype.o510 = function (o180, o182, o184, o186) {
        this.o947 = o180;
        this.o948 = o182;
        this.o1067.o393(this.o947.o769(o184));
        this.o1068.o393(this.o948.o769(o186));
        o180 = o186.o214 - o184.o214;
        o184 = o186.o105 - o184.o105;
        this.length = Math.sqrt(o180 * o180 + o184 * o184);
        this.o1070 = this.o1069 = 0
    };
    o96.o110(o141, o96.o127.o130.o297);
    o141.prototype.o546 = o96.o127.o130.o297.prototype;
    o141.o287 = function () {
        o96.o127.o130.o297.o297.apply(this, arguments);
        this.o1073 = new o106;
        this.o1074 = new o106;
        this.o1075 = new o98;
        this.o1076 = new o106
    };
    o141.prototype.o996 = function () {
        return this.o945.o767(this.o1073)
    };
    o141.prototype.o997 = function () {
        return this.o944.o767(this.o1074)
    };
    o141.prototype.o1057 = function (o180) {
        if (o180 === undefined) o180 = 0;
        return new o106(o180 * this.o1076.o214, o180 * this.o1076.o105)
    };
    o141.prototype.o1059 = function (o180) {
        if (o180 === undefined) o180 = 0;
        return o180 * this.o1077
    };
    o141.prototype.o1078 = function (o180) {
            if (o180 === undefined) o180 = 0;
            this.o1079 = o180
    };
    o141.prototype.o1080 = function () {
        return this.o1079
    };
    o141.prototype.o1081 = function (o180) {
        if (o180 === undefined) o180 = 0;
        this.o1082 = o180
    };
    o141.prototype.o1083 = function () {
        return this.o1082
    };
    o141.prototype.o287 = function (o180) {
        this.o546.o297.call(this, o180);
        this.o1073.o393(o180.o1067);
        this.o1074.o393(o180.o1068);
        this.o1075.o402();
        this.o1084 = 0;
        this.o1076.o402();
        this.o1077 = 0;
        this.o1079 = o180.o1085;
        this.o1082 = o180.o1086
    };
    o141.prototype.o901 = function (o180) {
        var o182, o184 = 0,
            o186 = this.o945,
            o188 = this.o944;
        o182 = o186.o683.o170;
        var o190 = this.o1073.o214 - o186.o684.o674.o214,
            o192 = this.o1073.o105 - o186.o684.o674.o105;
        o184 = o182.o361.o214 * o190 + o182.o362.o214 * o192;
        o192 = o182.o361.o105 * o190 + o182.o362.o105 * o192;
        o190 = o184;
        o182 = o188.o683.o170;
        var o194 = this.o1074.o214 - o188.o684.o674.o214,
            o196 = this.o1074.o105 - o188.o684.o674.o105;
        o184 = o182.o361.o214 * o194 + o182.o362.o214 * o196;
        o196 = o182.o361.o105 * o194 + o182.o362.o105 * o196;
        o194 = o184;
        o182 = o186.o753;
        o184 = o188.o753;
        var o198 = o186.o754,
            o200 = o188.o754,
            o93 = new o98;
        o93.o361.o214 = o182 + o184;
        o93.o362.o214 = 0;
        o93.o361.o105 = 0;
        o93.o362.o105 = o182 + o184;
        o93.o361.o214 += o198 * o192 * o192;
        o93.o362.o214 += -o198 * o190 * o192;
        o93.o361.o105 += -o198 * o190 * o192;
        o93.o362.o105 += o198 * o190 * o190;
        o93.o361.o214 += o200 * o196 * o196;
        o93.o362.o214 += -o200 * o194 * o196;
        o93.o361.o105 += -o200 * o194 * o196;
        o93.o362.o105 += o200 * o194 * o194;
        o93.o648(this.o1075);
        this.o1084 = o198 + o200;
        if (this.o1084 > 0) this.o1084 = 1 / this.o1084;
        if (o180.o920) {
            this.o1076.o214 *= o180.o966;
            this.o1076.o105 *= o180.o966;
            this.o1077 *= o180.o966;
            o180 = this.o1076;
            o186.o685.o214 -= o182 * o180.o214;
            o186.o685.o105 -= o182 * o180.o105;
            o186.o727 -= o198 * (o190 * o180.o105 - o192 * o180.o214 + this.o1077);
            o188.o685.o214 += o184 * o180.o214;
            o188.o685.o105 += o184 * o180.o105;
            o188.o727 += o200 * (o194 * o180.o105 - o196 * o180.o214 + this.o1077)
        } else {
            this.o1076.o402();
            this.o1077 = 0
        }
    };
    o141.prototype.o903 = function (o180) {
        var o182, o184 = 0,
            o186 = this.o945,
            o188 = this.o944,
            o190 = o186.o685,
            o192 = o186.o727,
            o194 = o188.o685,
            o196 = o188.o727,
            o198 = o186.o753,
            o200 = o188.o753,
            o93 = o186.o754,
            o203 = o188.o754;
        o182 = o186.o683.o170;
        var o205 = this.o1073.o214 - o186.o684.o674.o214,
            o207 = this.o1073.o105 - o186.o684.o674.o105;
        o184 = o182.o361.o214 * o205 + o182.o362.o214 * o207;
        o207 = o182.o361.o105 * o205 + o182.o362.o105 * o207;
        o205 = o184;
        o182 = o188.o683.o170;
        var o37 = this.o1074.o214 - o188.o684.o674.o214,
            o210 = this.o1074.o105 - o188.o684.o674.o105;
        o184 = o182.o361.o214 * o37 + o182.o362.o214 * o210;
        o210 = o182.o361.o105 * o37 + o182.o362.o105 * o210;
        o37 = o184;
        o182 = 0;
        o184 = -this.o1084 * (o196 - o192);
        var o212 = this.o1077;
        o182 = o180.o900 * this.o1082;
        this.o1077 = o105.o517(this.o1077 + o184, -o182, o182);
        o184 = this.o1077 - o212;
        o192 -= o93 * o184;
        o196 += o203 * o184;
        o182 = o105.o516(this.o1075,
            new o106(-(o194.o214 - o196 * o210 - o190.o214 + o192 * o207), -(o194.o105 + o196 * o37 - o190.o105 - o192 * o205)));
        o184 = this.o1076.o409();
        this.o1076.o679(o182);
        o182 = o180.o900 * this.o1079;
        if (this.o1076.o428() > o182 * o182) {
            this.o1076.o382();
            this.o1076.o604(o182)
        }
        o182 = o105.o443(this.o1076, o184);
        o190.o214 -= o198 * o182.o214;
        o190.o105 -= o198 * o182.o105;
        o192 -= o93 * (o205 * o182.o105 - o207 * o182.o214);
        o194.o214 += o200 * o182.o214;
        o194.o105 += o200 * o182.o105;
        o196 += o203 * (o37 * o182.o105 - o210 * o182.o214);
        o186.o727 = o192;
        o188.o727 = o196
    };
    o141.prototype.o907 = function () {
        return true
    };
    o96.o110(o143, o96.o127.o130.o299);
    o143.prototype.o546 = o96.o127.o130.o299.prototype;
    o143.o289 = function () {
        o96.o127.o130.o299.o299.apply(this, arguments);
        this.o1067 = new o106;
        this.o1068 = new o106
    };
    o143.prototype.o289 = function () {
        this.o546.o299.call(this);
        this.type = o151.o1087;
        this.o1086 = this.o1085 = 0
    };
    o143.prototype.o510 = function (o180, o182, o184) {
        this.o947 = o180;
        this.o948 = o182;
        this.o1067.o393(this.o947.o769(o184));
        this.o1068.o393(this.o948.o769(o184))
    };
    o96.o110(o145, o96.o127.o130.o297);
    o145.prototype.o546 = o96.o127.o130.o297.prototype;
    o145.o291 = function () {
        o96.o127.o130.o297.o297.apply(this, arguments);
        this.o1088 = new o106;
        this.o1089 = new o106;
        this.o1054 = new o106;
        this.o1055 = new o106;
        this.o1090 = new o149
    };
    o145.prototype.o996 = function () {
        return this.o945.o767(this.o1054)
    };
    o145.prototype.o997 = function () {
        return this.o944.o767(this.o1055)
    };
    o145.prototype.o1057 = function (o180) {
            if (o180 === undefined) o180 = 0;
            return new o106(o180 * this.o1058 * this.o1090.o1091.o214, o180 * this.o1058 * this.o1090.o1091.o105)
    };
    o145.prototype.o1059 = function (o180) {
        if (o180 === undefined) o180 = 0;
        var o182 = this.o944.o683.o170,
            o184 = this.o1054.o214 - this.o944.o684.o674.o214,
            o186 = this.o1054.o105 - this.o944.o684.o674.o105,
            o188 = o182.o361.o214 * o184 + o182.o362.o214 * o186;
        o186 = o182.o361.o105 * o184 + o182.o362.o105 * o186;
        o184 = o188;
        return o180 * (this.o1058 * this.o1090.o1092 - o184 * this.o1058 * this.o1090.o1091.o105 + o186 * this.o1058 * this.o1090.o1091.o214)
    };
    o145.prototype.o1093 = function () {
            return this.o1094
    };
    o145.prototype.o1095 = function (o180) {
        if (o180 === undefined) o180 = 0;
        this.o1094 = o180
    };
    o145.prototype.o291 = function (o180) {
        this.o546.o297.call(this, o180);
        var o182 = parseInt(o180.o1096.o377),
            o184 = parseInt(o180.o1097.o377);
        this.o1098 = this.o1099 = this.o1100 = this.o1101 = null;
        var o186 = 0,
            o188 = 0;
        this.o1102 = o180.o1096.o994();
        this.o945 = o180.o1096.o995();
        if (o182 == o151.o1103) {
            this.o1101 = o180.o1096 instanceof o172 ? o180.o1096 : null;
            this.o1088.o393(this.o1101.o1054);
            this.o1054.o393(this.o1101.o1055);
            o186 = this.o1101.o1104()
        } else {
            this.o1100 = o180.o1096 instanceof o165 ? o180.o1096 : null;
            this.o1088.o393(this.o1100.o1054);
            this.o1054.o393(this.o1100.o1055);
            o186 = this.o1100.o1105()
        }
        this.o1106 = o180.o1097.o994();
        this.o944 = o180.o1097.o995();
        if (o184 == o151.o1103) {
            this.o1099 = o180.o1097 instanceof o172 ? o180.o1097 : null;
            this.o1089.o393(this.o1099.o1054);
            this.o1055.o393(this.o1099.o1055);
            o188 = this.o1099.o1104()
        } else {
            this.o1098 = o180.o1097 instanceof o165 ? o180.o1097 : null;
            this.o1089.o393(this.o1098.o1054);
            this.o1055.o393(this.o1098.o1055);
            o188 = this.o1098.o1105()
        }
        this.o1094 = o180.o1107;
        this.o1108 = o186 + this.o1094 * o188;
        this.o1058 = 0
    };
    o145.prototype.o901 = function (o180) {
        var o182 = this.o1102,
            o184 = this.o1106,
            o186 = this.o945,
            o188 = this.o944,
            o190 = 0,
            o192 = 0,
            o194 = 0,
            o196 = 0,
            o198 = o194 = 0,
            o200 = 0;
        this.o1090.o402();
        if (this.o1101) {
            this.o1090.o1109 = -1;
            o200 += o186.o754
        } else {
            o182 = o182.o683.o170;
            o192 = this.o1100.o1110;
            o190 = o182.o361.o214 * o192.o214 + o182.o362.o214 * o192.o105;
            o192 = o182.o361.o105 * o192.o214 + o182.o362.o105 * o192.o105;
            o182 = o186.o683.o170;
            o194 = this.o1054.o214 - o186.o684.o674.o214;
            o196 = this.o1054.o105 - o186.o684.o674.o105;
            o198 = o182.o361.o214 * o194 + o182.o362.o214 * o196;
            o196 = o182.o361.o105 * o194 + o182.o362.o105 * o196;
            o194 = o198;
            o194 = o194 * o192 - o196 * o190;
            this.o1090.o1111.Set(-o190, -o192);
            this.o1090.o1109 = -o194;
            o200 += o186.o753 + o186.o754 * o194 * o194
        } if (this.o1099) {
            this.o1090.o1092 = -this.o1094;
            o200 += this.o1094 * this.o1094 * o188.o754
        } else {
            o182 = o184.o683.o170;
            o192 = this.o1098.o1110;
            o190 = o182.o361.o214 * o192.o214 + o182.o362.o214 * o192.o105;
            o192 = o182.o361.o105 * o192.o214 + o182.o362.o105 * o192.o105;
            o182 = o188.o683.o170;
            o194 = this.o1055.o214 - o188.o684.o674.o214;
            o196 = this.o1055.o105 - o188.o684.o674.o105;
            o198 = o182.o361.o214 * o194 + o182.o362.o214 * o196;
            o196 = o182.o361.o105 * o194 + o182.o362.o105 * o196;
            o194 = o198;
            o194 = o194 * o192 - o196 * o190;
            this.o1090.o1091.Set(-this.o1094 * o190, -this.o1094 * o192);
            this.o1090.o1092 = -this.o1094 * o194;
            o200 += this.o1094 * this.o1094 * (o188.o753 + o188.o754 * o194 * o194)
        }
        this.o760 = o200 > 0 ? 1 / o200 : 0;
        if (o180.o920) {
            o186.o685.o214 += o186.o753 * this.o1058 * this.o1090.o1111.o214;
            o186.o685.o105 += o186.o753 * this.o1058 * this.o1090.o1111.o105;
            o186.o727 += o186.o754 * this.o1058 * this.o1090.o1109;
            o188.o685.o214 += o188.o753 * this.o1058 * this.o1090.o1091.o214;
            o188.o685.o105 += o188.o753 * this.o1058 * this.o1090.o1091.o105;
            o188.o727 += o188.o754 * this.o1058 * this.o1090.o1092
        } else this.o1058 = 0
    };
    o145.prototype.o903 = function () {
        var o180 = this.o945,
            o182 = this.o944,
            o184 = -this.o760 * this.o1090.o1112(o180.o685,
                o180.o727, o182.o685, o182.o727);
        this.o1058 += o184;
        o180.o685.o214 += o180.o753 * o184 * this.o1090.o1111.o214;
        o180.o685.o105 += o180.o753 * o184 * this.o1090.o1111.o105;
        o180.o727 += o180.o754 * o184 * this.o1090.o1109;
        o182.o685.o214 += o182.o753 * o184 * this.o1090.o1091.o214;
        o182.o685.o105 += o182.o753 * o184 * this.o1090.o1091.o105;
        o182.o727 += o182.o754 * o184 * this.o1090.o1092
    };
    o145.prototype.o907 = function () {
        var o180 = this.o945,
            o182 = this.o944,
            o184 = 0,
            o186 = 0;
        o184 = this.o1101 ?
            this.o1101.o1104() : this.o1100.o1105();
        o186 = this.o1099 ? this.o1099.o1104() : this.o1098.o1105();
        o184 = -this.o760 * (this.o1108 - (o184 + this.o1094 * o186));
        o180.o684.o196.o214 += o180.o753 * o184 * this.o1090.o1111.o214;
        o180.o684.o196.o105 += o180.o753 * o184 * this.o1090.o1111.o105;
        o180.o684.o194 += o180.o754 * o184 * this.o1090.o1109;
        o182.o684.o196.o214 += o182.o753 * o184 * this.o1090.o1091.o214;
        o182.o684.o196.o105 += o182.o753 * o184 * this.o1090.o1091.o105;
        o182.o684.o194 += o182.o754 * o184 * this.o1090.o1092;
        o180.o803();
        o182.o803();
        return 0 < o97.o611
    };
    o96.o110(o147, o96.o127.o130.o299);
    o147.prototype.o546 = o96.o127.o130.o299.prototype;
    o147.o293 = function () {
        o96.o127.o130.o299.o299.apply(this, arguments)
    };
    o147.prototype.o293 = function () {
        this.o546.o299.call(this);
        this.type = o151.o1113;
        this.o1097 = this.o1096 = null;
        this.o1107 = 1
    };
    o149.o295 = function () {
        this.o1111 = new o106;
        this.o1091 = new o106
    };
    o149.prototype.o402 = function () {
        this.o1111.o402();
        this.o1109 = 0;
        this.o1091.o402();
        this.o1092 = 0
    };
    o149.prototype.Set = function (o180, o182, o184, o186) {
        if (o182 === undefined) o182 = 0;
        if (o186 === undefined) o186 = 0;
        this.o1111.o393(o180);
        this.o1109 = o182;
        this.o1091.o393(o184);
        this.o1092 = o186
    };
    o149.prototype.o1112 = function (o180, o182, o184, o186) {
        if (o182 === undefined) o182 = 0;
        if (o186 === undefined) o186 = 0;
        return this.o1111.o214 * o180.o214 + this.o1111.o105 * o180.o105 + this.o1109 * o182 + (this.o1091.o214 * o184.o214 + this.o1091.o105 * o184.o105) + this.o1092 * o186
    };
    o151.o297 = function () {
        this.o943 = new o155;
        this.o946 = new o155;
        this.o1114 = new o106;
        this.o1115 = new o106
    };
    o151.prototype.o455 = function () {
        return this.o377
    };
    o151.prototype.o996 = function () {
        return null
    };
    o151.prototype.o997 = function () {
        return null
    };
    o151.prototype.o1057 = function () {
        return null
    };
    o151.prototype.o1059 = function () {
        return 0
    };
    o151.prototype.o994 = function () {
        return this.o945
    };
    o151.prototype.o995 = function () {
        return this.o944
    };
    o151.prototype.o794 = function () {
        return this.o697
    };
    o151.prototype.o480 = function () {
        return this.o795
    };
    o151.prototype.o796 = function (o180) {
        this.o795 = o180
    };
    o151.prototype.o786 = function () {
        return this.o945.o786() && this.o944.o786()
    };
    o151.o692 = function (o180) {
        var o182 = null;
        switch (o180.type) {
        case I.e_distanceJoint:
            o182 = new o137(o180 instanceof o139 ? o180I.e_distanceJoint:
            h = new U(d instanceof p ? do151.o999:
            h = new U(d instanceof p ? d : null);
            break;
        case I.e_mouseJoint:
            o182 = new o161(o180 instanceof o163 ? o180I.e_mouseJoint:
            h = new u(d instanceof D ? do151.o1003:
            h = new u(d instanceof D ? d : null);
            break;
        case I.e_prismaticJoint:
            o182 = new o165(o180 instanceof o167 ? o180I.e_prismaticJoint:
            h = new H(d instanceof O ? do151.o1116:
            h = new H(d instanceof O ? d : null);
            break;
        case I.e_revoluteJoint:
            o182 = new o172(o180 instanceof o174 ? o180I.e_revoluteJoint:
            h = new N(d instanceof S ? do151.o1103:
            h = new N(d instanceof S ? d : null);
            break;
        case I.e_pulleyJoint:
            o182 = new o67(o180 instanceof o170 ? o180I.e_pulleyJoint:
            h = new E(d instanceof R ? do151.o1002:
            h = new E(d instanceof R ? d : null);
            break;
        case I.e_gearJoint:
            o182 = new o145(o180 instanceof o147 ? o180I.e_gearJoint:
            h = new V(d instanceof M ? do151.o1113:
            h = new V(d instanceof M ? d : null);
            break;
        case I.e_lineJoint:
            o182 = new o157(o180 instanceof o159 ? o180I.e_lineJoint:
            h = new k(d instanceof z ? do151.o1117:
            h = new k(d instanceof z ? d : null);
            break;
        case I.e_weldJoint:
            o182 = new o176(o180 instanceof o178 ? o180I.e_weldJoint:
            h = new aa(d instanceof Z ? do151.o1118:
            h = new aa(d instanceof Z ? d : null);
            break;
        case I.e_frictionJoint:
            o182 = new o141(o180 instanceof o143 ? o180I.e_frictionJoint:
            h = new B(d instanceof Q ? do151.o1087:
            h = new B(d instanceof Q ? d : null)
        }
        return o182
    };
    o151.o713 = function () {};
    o151.prototype.o297 = function (o180) {
        o97.o434(o180.o947 != o180.o948);
        this.o377 = o180.type;
        this.o697 = this.o800 = null;
        this.o945 = o180.o947;
        this.o944 = o180.o948;
        this.o807 = o180.o949;
        this.o982 = false;
        this.o795 = o180.o468
    };
    o151.prototype.o901 = function () {};
    o151.prototype.o903 = function () {};
    o151.prototype.o904 = function () {};
    o151.prototype.o907 = function () {
        return false
    };
    o96.o328.push(function () {
        o96.o127.o130.o297.o1119 = 0;
        o96.o127.o130.o297.o1103 = 1;
        o96.o127.o130.o297.o1116 = 2;
        o96.o127.o130.o297.o999 = 3;
        o96.o127.o130.o297.o1002 = 4;
        o96.o127.o130.o297.o1003 = 5;
        o96.o127.o130.o297.o1113 = 6;
        o96.o127.o130.o297.o1117 = 7;
        o96.o127.o130.o297.o1118 = 8;
        o96.o127.o130.o297.o1087 = 9;
        o96.o127.o130.o297.o1120 = 0;
        o96.o127.o130.o297.o1121 = 1;
        o96.o127.o130.o297.o1122 = 2;
        o96.o127.o130.o297.o1123 = 3
    });
    o153.o299 = function () {};
    o153.prototype.o299 = function () {
        this.type = o151.o1119;
        this.o948 = this.o947 = this.o468 = null;
        this.o949 = false
    };
    o155.o301 = function () {};
    o96.o110(o157, o96.o127.o130.o297);
    o157.prototype.o546 = o96.o127.o130.o297.prototype;
    o157.o303 = function () {
        o96.o127.o130.o297.o297.apply(this, arguments);
        this.o1054 = new o106;
        this.o1055 = new o106;
        this.o1110 = new o106;
        this.o1124 = new o106;
        this.o509 = new o106;
        this.o1125 = new o106;
        this.o1126 = new o98;
        this.o1058 = new o106
    };
    o157.prototype.o996 = function () {
        return this.o945.o767(this.o1054)
    };
    o157.prototype.o997 = function () {
        return this.o944.o767(this.o1055)
    };
    o157.prototype.o1057 = function (o180) {
            if (o180 === undefined) o180 = 0;
            return new o106(o180 * (this.o1058.o214 * this.o1125.o214 + (this.o1127 + this.o1058.o105) * this.o509.o214), o180 * (this.o1058.o214 * this.o1125.o105 + (this.o1127 + this.o1058.o105) * this.o509.o105))
    };
    o157.prototype.o1059 = function (o180) {
        if (o180 === undefined) o180 = 0;
        return o180 * this.o1058.o105
    };
    o157.prototype.o1105 = function () {
        var o180 = this.o945,
            o182 = this.o944,
            o184 = o180.o767(this.o1054),
            o186 = o182.o767(this.o1055);
        o182 = o186.o214 - o184.o214;
        o184 = o186.o105 - o184.o105;
        o180 = o180.o768(this.o1110);
        return o180.o214 * o182 + o180.o105 * o184
    };
    o157.prototype.o1128 = function () {
        var o180 = this.o945,
            o182 = this.o944,
            o184;
        o184 = o180.o683.o170;
        var o186 = this.o1054.o214 - o180.o684.o674.o214,
            o188 = this.o1054.o105 - o180.o684.o674.o105,
            o190 = o184.o361.o214 * o186 + o184.o362.o214 * o188;
        o188 = o184.o361.o105 * o186 + o184.o362.o105 * o188;
        o186 = o190;
        o184 = o182.o683.o170;
        var o192 = this.o1055.o214 - o182.o684.o674.o214,
            o194 = this.o1055.o105 - o182.o684.o674.o105;
        o190 = o184.o361.o214 * o192 + o184.o362.o214 * o194;
        o194 = o184.o361.o105 * o192 + o184.o362.o105 * o194;
        o192 = o190;
        o184 = o182.o684.o196.o214 + o192 - (o180.o684.o196.o214 + o186);
        o190 = o182.o684.o196.o105 + o194 - (o180.o684.o196.o105 + o188);
        var o196 = o180.o768(this.o1110),
            o198 = o180.o685,
            o200 = o182.o685;
        o180 = o180.o727;
        o182 = o182.o727;
        return o184 * -o180 * o196.o105 + o190 * o180 * o196.o214 + (o196.o214 * (o200.o214 + -o182 * o194 - o198.o214 - -o180 * o188) + o196.o105 * (o200.o105 + o182 * o192 - o198.o105 - o180 * o186))
    };
    o157.prototype.o1129 = function () {
        return this.o1130
    };
    o157.prototype.o1131 = function (o180) {
        this.o945.o749(true);
        this.o944.o749(true);
        this.o1130 = o180
    };
    o157.prototype.o1132 = function () {
        return this.o1133
    };
    o157.prototype.o1134 = function () {
        return this.o1135
    };
    o157.prototype.o1136 = function (o180,
        o182) {
        if (o180 === undefined) o180 = 0;
        if (o182 === undefined) o182 = 0;
        this.o945.o749(true);
        this.o944.o749(true);
        this.o1133 = o180;
        this.o1135 = o182
    };
    o157.prototype.o1137 = function () {
        return this.o1138
    };
    o157.prototype.o1139 = function (o180) {
        this.o945.o749(true);
        this.o944.o749(true);
        this.o1138 = o180
    };
    o157.prototype.o1140 = function (o180) {
        if (o180 === undefined) o180 = 0;
        this.o945.o749(true);
        this.o944.o749(true);
        this.o1141 = o180
    };
    o157.prototype.o1142 = function () {
        return this.o1141
    };
    o157.prototype.o1143 = function (o180) {
        if (o180 === undefined) o180 = 0;
        this.o945.o749(true);
        this.o944.o749(true);
        this.o1144 = o180
    };
    o157.prototype.o1145 = function () {
        return this.o1144
    };
    o157.prototype.o1146 = function () {
        return this.o1127
    };
    o157.prototype.o303 = function (o180) {
        this.o546.o297.call(this, o180);
        this.o1054.o393(o180.o1067);
        this.o1055.o393(o180.o1068);
        this.o1110.o393(o180.o1147);
        this.o1124.o214 = -this.o1110.o105;
        this.o1124.o105 = this.o1110.o214;
        this.o1058.o402();
        this.o1127 = this.o1148 = 0;
        this.o1133 = o180.o1149;
        this.o1135 = o180.o1150;
        this.o1144 = o180.o1151;
        this.o1141 = o180.o1152;
        this.o1130 = o180.o1153;
        this.o1138 = o180.o1154;
        this.o1155 = o151.o1120;
        this.o509.o402();
        this.o1125.o402()
    };
    o157.prototype.o901 = function (o180) {
        var o182 = this.o945,
            o184 = this.o944,
            o186, o188 = 0;
        this.o1114.o393(o182.o722());
        this.o1115.o393(o184.o722());
        var o190 = o182.o535();
        o184.o535();
        o186 = o182.o683.o170;
        var o192 = this.o1054.o214 - this.o1114.o214,
            o194 = this.o1054.o105 - this.o1114.o105;
        o188 = o186.o361.o214 * o192 + o186.o362.o214 * o194;
        o194 = o186.o361.o105 * o192 + o186.o362.o105 * o194;
        o192 = o188;
        o186 = o184.o683.o170;
        var o196 = this.o1055.o214 - this.o1115.o214,
            o198 = this.o1055.o105 - this.o1115.o105;
        o188 = o186.o361.o214 * o196 + o186.o362.o214 * o198;
        o198 = o186.o361.o105 * o196 + o186.o362.o105 * o198;
        o196 = o188;
        o186 = o184.o684.o196.o214 + o196 - o182.o684.o196.o214 - o192;
        o188 = o184.o684.o196.o105 + o198 - o182.o684.o196.o105 - o194;
        this.o1156 = o182.o753;
        this.o1157 = o184.o753;
        this.o1158 = o182.o754;
        this.o1159 = o184.o754;
        this.o509.o393(o105.o516(o190.o170, this.o1110));
        this.o1160 = (o186 + o192) * this.o509.o105 - (o188 + o194) * this.o509.o214;
        this.o1161 = o196 * this.o509.o105 - o198 * this.o509.o214;
        this.o1148 = this.o1156 + this.o1157 + this.o1158 * this.o1160 * this.o1160 + this.o1159 * this.o1161 * this.o1161;
        this.o1148 = this.o1148 > Number.MIN_VALUE ? 1 / this.o1148 : 0;
        this.o1125.o393(o105.o516(o190.o170, this.o1124));
        this.o1162 = (o186 + o192) * this.o1125.o105 - (o188 + o194) * this.o1125.o214;
        this.o1163 = o196 * this.o1125.o105 - o198 * this.o1125.o214;
        o190 = this.o1156;
        o192 = this.o1157;
        o194 = this.o1158;
        o196 = this.o1159;
        this.o1126.o361.o214 = o190 + o192 + o194 * this.o1162 * this.o1162 + o196 * this.o1163 * this.o1163;
        this.o1126.o361.o105 = o194 * this.o1162 * this.o1160 + o196 * this.o1163 * this.o1161;
        this.o1126.o362.o214 = this.o1126.o361.o105;
        this.o1126.o362.o105 = o190 + o192 + o194 * this.o1160 * this.o1160 + o196 * this.o1161 * this.o1161;
        if (this.o1130) {
            o186 = this.o509.o214 * o186 + this.o509.o105 * o188;
            if (o105.o540(this.o1135 - this.o1133) < 2 * o97.o611) this.o1155 = o151.o1123;
            else if (o186 <= this.o1133) {
                if (this.o1155 != o151.o1121) {
                    this.o1155 = o151.o1121;
                    this.o1058.o105 = 0
                }
            } else if (o186 >= this.o1135) {
                if (this.o1155 != o151.o1122) {
                    this.o1155 = o151.o1122;
                    this.o1058.o105 = 0
                }
            } else {
                this.o1155 = o151.o1120;
                this.o1058.o105 = 0
            }
        } else this.o1155 = o151.o1120; if (this.o1138 == false) this.o1127 = 0;
        if (o180.o920) {
            this.o1058.o214 *= o180.o966;
            this.o1058.o105 *= o180.o966;
            this.o1127 *= o180.o966;
            o180 = this.o1058.o214 * this.o1125.o214 + (this.o1127 + this.o1058.o105) * this.o509.o214;
            o186 = this.o1058.o214 * this.o1125.o105 + (this.o1127 + this.o1058.o105) * this.o509.o105;
            o188 = this.o1058.o214 * this.o1162 + (this.o1127 + this.o1058.o105) * this.o1160;
            o190 = this.o1058.o214 * this.o1163 + (this.o1127 + this.o1058.o105) * this.o1161;
            o182.o685.o214 -= this.o1156 * o180;
            o182.o685.o105 -= this.o1156 * o186;
            o182.o727 -= this.o1158 * o188;
            o184.o685.o214 += this.o1157 * o180;
            o184.o685.o105 += this.o1157 * o186;
            o184.o727 += this.o1159 * o190
        } else {
            this.o1058.o402();
            this.o1127 = 0
        }
    };
    o157.prototype.o903 = function (o180) {
        var o182 = this.o945,
            o184 = this.o944,
            o186 = o182.o685,
            o188 = o182.o727,
            o190 = o184.o685,
            o192 = o184.o727,
            o194 = 0,
            o196 = 0,
            o198 = 0,
            o200 = 0;
        if (this.o1138 && this.o1155 != o151.o1123) {
            o200 = this.o1148 * (this.o1141 - (this.o509.o214 * (o190.o214 - o186.o214) + this.o509.o105 * (o190.o105 - o186.o105) + this.o1161 * o192 - this.o1160 * o188));
            o194 = this.o1127;
            o196 = o180.o900 * this.o1144;
            this.o1127 = o105.o517(this.o1127 + o200, -o196, o196);
            o200 = this.o1127 - o194;
            o194 = o200 * this.o509.o214;
            o196 = o200 * this.o509.o105;
            o198 = o200 * this.o1160;
            o200 = o200 * this.o1161;
            o186.o214 -= this.o1156 * o194;
            o186.o105 -= this.o1156 * o196;
            o188 -= this.o1158 * o198;
            o190.o214 += this.o1157 * o194;
            o190.o105 += this.o1157 * o196;
            o192 += this.o1159 * o200
        }
        o196 = this.o1125.o214 * (o190.o214 - o186.o214) + this.o1125.o105 * (o190.o105 - o186.o105) + this.o1163 * o192 - this.o1162 * o188;
        if (this.o1130 && this.o1155 != o151.o1120) {
            o198 = this.o509.o214 * (o190.o214 - o186.o214) + this.o509.o105 * (o190.o105 - o186.o105) + this.o1161 * o192 - this.o1160 * o188;
            o194 = this.o1058.o409();
            o180 = this.o1126.o649(new o106, -o196, -o198);
            this.o1058.o679(o180);
            if (this.o1155 == o151.o1121) this.o1058.o105 = o105.o446(this.o1058.o105, 0);
            else if (this.o1155 == o151.o1122) this.o1058.o105 = o105.o663(this.o1058.o105, 0);
            o196 = -o196 - (this.o1058.o105 - o194.o105) * this.o1126.o362.o214;
            o198 = 0;
            o198 = this.o1126.o361.o214 != 0 ? o196 / this.o1126.o361.o214 + o194.o214 : o194.o214;
            this.o1058.o214 = o198;
            o180.o214 = this.o1058.o214 - o194.o214;
            o180.o105 = this.o1058.o105 - o194.o105;
            o194 = o180.o214 * this.o1125.o214 + o180.o105 * this.o509.o214;
            o196 = o180.o214 * this.o1125.o105 + o180.o105 * this.o509.o105;
            o198 = o180.o214 * this.o1162 + o180.o105 * this.o1160;
            o200 = o180.o214 * this.o1163 + o180.o105 * this.o1161
        } else {
            o180 = 0;
            o180 = this.o1126.o361.o214 != 0 ? -o196 / this.o1126.o361.o214 : 0;
            this.o1058.o214 += o180;
            o194 = o180 * this.o1125.o214;
            o196 = o180 * this.o1125.o105;
            o198 = o180 * this.o1162;
            o200 = o180 * this.o1163
        }
        o186.o214 -= this.o1156 * o194;
        o186.o105 -= this.o1156 * o196;
        o188 -= this.o1158 * o198;
        o190.o214 += this.o1157 * o194;
        o190.o105 += this.o1157 * o196;
        o192 += this.o1159 * o200;
        o182.o685.o393(o186);
        o182.o727 = o188;
        o184.o685.o393(o190);
        o184.o727 = o192
    };
    o157.prototype.o907 = function () {
        var o180 = this.o945,
            o182 = this.o944,
            o184 = o180.o684.o196,
            o186 = o180.o684.o194,
            o188 = o182.o684.o196,
            o190 = o182.o684.o194,
            o192, o194 = 0,
            o196 = 0,
            o198 = 0,
            o200 = 0,
            o93 = o192 = 0,
            o203 = 0;
        o196 = false;
        var o205 = 0,
            o207 = o98.o639(o186);
        o198 = o98.o639(o190);
        o192 = o207;
        o203 = this.o1054.o214 - this.o1114.o214;
        var o37 = this.o1054.o105 - this.o1114.o105;
        o194 = o192.o361.o214 * o203 + o192.o362.o214 * o37;
        o37 = o192.o361.o105 * o203 + o192.o362.o105 * o37;
        o203 = o194;
        o192 = o198;
        o198 = this.o1055.o214 - this.o1115.o214;
        o200 = this.o1055.o105 - this.o1115.o105;
        o194 = o192.o361.o214 * o198 + o192.o362.o214 * o200;
        o200 = o192.o361.o105 * o198 + o192.o362.o105 * o200;
        o198 = o194;
        o192 = o188.o214 + o198 - o184.o214 - o203;
        o194 = o188.o105 + o200 - o184.o105 - o37;
        if (this.o1130) {
            this.o509 = o105.o516(o207, this.o1110);
            this.o1160 = (o192 + o203) * this.o509.o105 - (o194 + o37) * this.o509.o214;
            this.o1161 = o198 * this.o509.o105 - o200 * this.o509.o214;
            var o210 = this.o509.o214 * o192 + this.o509.o105 * o194;
            if (o105.o540(this.o1135 - this.o1133) < 2 * o97.o611) {
                o205 = o105.o517(o210, -o97.o628, o97.o628);
                o93 = o105.o540(o210);
                o196 = true
            } else if (o210 <= this.o1133) {
                o205 = o105.o517(o210 - this.o1133 + o97.o611, -o97.o628, 0);
                o93 = this.o1133 - o210;
                o196 = true
            } else if (o210 >= this.o1135) {
                o205 = o105.o517(o210 - this.o1135 + o97.o611, 0, o97.o628);
                o93 = o210 - this.o1135;
                o196 = true
            }
        }
        this.o1125 = o105.o516(o207, this.o1124);
        this.o1162 = (o192 + o203) * this.o1125.o105 - (o194 + o37) * this.o1125.o214;
        this.o1163 = o198 * this.o1125.o105 - o200 * this.o1125.o214;
        o207 = new o106;
        o37 = this.o1125.o214 * o192 + this.o1125.o105 * o194;
        o93 = o105.o446(o93, o105.o540(o37));
        o203 = 0;
        if (o196) {
            o196 = this.o1156;
            o198 = this.o1157;
            o200 = this.o1158;
            o192 = this.o1159;
            this.o1126.o361.o214 = o196 + o198 + o200 * this.o1162 * this.o1162 + o192 * this.o1163 * this.o1163;
            this.o1126.o361.o105 = o200 * this.o1162 * this.o1160 + o192 * this.o1163 * this.o1161;
            this.o1126.o362.o214 = this.o1126.o361.o105;
            this.o1126.o362.o105 = o196 + o198 + o200 * this.o1160 * this.o1160 + o192 * this.o1161 * this.o1161;
            this.o1126.o649(o207, -o37, -o205)
        } else {
            o196 = this.o1156;
            o198 = this.o1157;
            o200 = this.o1158;
            o192 = this.o1159;
            o205 = o196 + o198 + o200 * this.o1162 * this.o1162 + o192 * this.o1163 * this.o1163;
            o196 = 0;
            o196 = o205 != 0 ? -o37 / o205 : 0;
            o207.o214 = o196;
            o207.o105 = 0
        }
        o205 = o207.o214 * this.o1125.o214 + o207.o105 * this.o509.o214;
        o196 = o207.o214 * this.o1125.o105 + o207.o105 * this.o509.o105;
        o37 = o207.o214 * this.o1162 + o207.o105 * this.o1160;
        o207 = o207.o214 * this.o1163 + o207.o105 * this.o1161;
        o184.o214 -= this.o1156 * o205;
        o184.o105 -= this.o1156 * o196;
        o186 -= this.o1158 * o37;
        o188.o214 += this.o1157 * o205;
        o188.o105 += this.o1157 * o196;
        o190 += this.o1159 * o207;
        o180.o684.o194 = o186;
        o182.o684.o194 = o190;
        o180.o803();
        o182.o803();
        return o93 <= o97.o611 && o203 <= o97.o624
    };
    o96.o110(o159, o96.o127.o130.o299);
    o159.prototype.o546 = o96.o127.o130.o299.prototype;
    o159.o305 = function () {
        o96.o127.o130.o299.o299.apply(this, arguments);
        this.o1067 = new o106;
        this.o1068 = new o106;
        this.o1147 = new o106
    };
    o159.prototype.o305 = function () {
        this.o546.o299.call(this);
        this.type = o151.o1117;
        this.o1147.Set(1, 0);
        this.o1153 = false;
        this.o1150 = this.o1149 = 0;
        this.o1154 = false;
        this.o1152 = this.o1151 = 0
    };
    o159.prototype.o510 = function (o180, o182, o184, o186) {
        this.o947 = o180;
        this.o948 = o182;
        this.o1067 = this.o947.o769(o184);
        this.o1068 = this.o948.o769(o184);
        this.o1147 = this.o947.o770(o186)
    };
    o96.o110(o161, o96.o127.o130.o297);
    o161.prototype.o546 = o96.o127.o130.o297.prototype;
    o161.o307 = function () {
        o96.o127.o130.o297.o297.apply(this, arguments);
        this.o99 = new o98;
        this.o1164 = new o98;
        this.o1165 = new o98;
        this.o1166 = new o106;
        this.o1167 = new o106;
        this.o1058 = new o106;
        this.o760 = new o98;
        this.o1168 = new o106
    };
    o161.prototype.o996 = function () {
        return this.o1167
    };
    o161.prototype.o997 = function () {
        return this.o944.o767(this.o1166)
    };
    o161.prototype.o1057 = function (o180) {
        if (o180 === undefined) o180 = 0;
        return new o106(o180 * this.o1058.o214, o180 * this.o1058.o105)
    };
    o161.prototype.o1059 = function () {
        return 0
    };
    o161.prototype.o1169 = function () {
        return this.o1167
    };
    o161.prototype.o1170 = function (o180) {
        this.o944.o748() == false && this.o944.o749(true);
        this.o1167 = o180
    };
    o161.prototype.o1080 = function () {
        return this.o1079
    };
    o161.prototype.o1078 = function (o180) {
        if (o180 === undefined) o180 = 0;
        this.o1079 = o180
    };
    o161.prototype.o1061 = function () {
        return this.o1062
    };
    o161.prototype.o1063 = function (o180) {
        if (o180 === undefined) o180 = 0;
        this.o1062 = o180
    };
    o161.prototype.o1064 = function () {
        return this.o1065
    };
    o161.prototype.o1066 = function (o180) {
        if (o180 === undefined) o180 = 0;
        this.o1065 = o180
    };
    o161.prototype.o307 = function (o180) {
            this.o546.o297.call(this, o180);
            this.o1167.o393(o180.target);
            var o182 = this.o1167.o214 - this.o944.o683.o363.o214,
                o184 = this.o1167.o105 - this.o944.o683.o363.o105,
                o186 = this.o944.o683.o170;
            this.o1166.o214 = o182 * o186.o361.o214 + o184 * o186.o361.o105;
            this.o1166.o105 = o182 * o186.o362.o214 + o184 * o186.o362.o105;
            this.o1079 = o180.o1085;
            this.o1058.o402();
            this.o1062 = o180.o1069;
            this.o1065 = o180.o1070;
            this.o1072 = this.o1172 = 0
    };
    o161.prototype.o901 = function (o180) {
        var o182 = this.o944,
            o184 = o182.o759(),
            o186 = 2 * Math.o555 * this.o1062,
            o188 = o184 * o186 * o186;
        this.o1072 = o180.o900 * (2 * o184 * this.o1065 * o186 + o180.o900 * o188);
        this.o1072 = this.o1072 != 0 ? 1 / this.o1072 : 0;
        this.o1172 = o180.o900 * o188 * this.o1072;
        o188 = o182.o683.o170;
        o184 = this.o1166.o214 - o182.o684.o674.o214;
        o186 = this.o1166.o105 - o182.o684.o674.o105;
        var o190 = o188.o361.o214 * o184 + o188.o362.o214 * o186;
        o186 = o188.o361.o105 * o184 + o188.o362.o105 * o186;
        o184 = o190;
        o188 = o182.o753;
        o190 = o182.o754;
        this.o1164.o361.o214 = o188;
        this.o1164.o362.o214 = 0;
        this.o1164.o361.o105 = 0;
        this.o1164.o362.o105 = o188;
        this.o1165.o361.o214 = o190 * o186 * o186;
        this.o1165.o362.o214 = -o190 * o184 * o186;
        this.o1165.o361.o105 = -o190 * o184 * o186;
        this.o1165.o362.o105 = o190 * o184 * o184;
        this.o99.o644(this.o1164);
        this.o99.o645(this.o1165);
        this.o99.o361.o214 += this.o1072;
        this.o99.o362.o105 += this.o1072;
        this.o99.o648(this.o760);
        this.o1168.o214 = o182.o684.o196.o214 + o184 - this.o1167.o214;
        this.o1168.o105 = o182.o684.o196.o105 + o186 - this.o1167.o105;
        o182.o727 *= 0.98;
        this.o1058.o214 *= o180.o966;
        this.o1058.o105 *= o180.o966;
        o182.o685.o214 += o188 * this.o1058.o214;
        o182.o685.o105 += o188 * this.o1058.o105;
        o182.o727 += o190 * (o184 * this.o1058.o105 - o186 * this.o1058.o214)
    };
    o161.prototype.o903 = function (o180) {
        var o182 = this.o944,
            o184, o186 = 0,
            o188 = 0;
        o184 = o182.o683.o170;
        var o190 = this.o1166.o214 - o182.o684.o674.o214,
            o192 = this.o1166.o105 - o182.o684.o674.o105;
        o186 = o184.o361.o214 * o190 + o184.o362.o214 * o192;
        o192 = o184.o361.o105 * o190 + o184.o362.o105 * o192;
        o190 = o186;
        o186 = o182.o685.o214 + -o182.o727 * o192;
        var o194 = o182.o685.o105 + o182.o727 * o190;
        o184 = this.o760;
        o186 = o186 + this.o1172 * this.o1168.o214 + this.o1072 * this.o1058.o214;
        o188 = o194 + this.o1172 * this.o1168.o105 + this.o1072 * this.o1058.o105;
        o194 = -(o184.o361.o214 * o186 + o184.o362.o214 * o188);
        o188 = -(o184.o361.o105 * o186 + o184.o362.o105 * o188);
        o184 = this.o1058.o214;
        o186 = this.o1058.o105;
        this.o1058.o214 += o194;
        this.o1058.o105 += o188;
        o180 = o180.o900 * this.o1079;
        this.o1058.o428() > o180 * o180 && this.o1058.o604(o180 / this.o1058.o451());
        o194 = this.o1058.o214 - o184;
        o188 = this.o1058.o105 - o186;
        o182.o685.o214 += o182.o753 * o194;
        o182.o685.o105 += o182.o753 * o188;
        o182.o727 += o182.o754 * (o190 * o188 - o192 * o194)
    };
    o161.prototype.o907 = function () {
        return true
    };
    o96.o110(o163, o96.o127.o130.o299);
    o163.prototype.o546 = o96.o127.o130.o299.prototype;
    o163.o309 = function () {
        o96.o127.o130.o299.o299.apply(this,
            arguments);
        this.target = new o106
    };
    o163.prototype.o309 = function () {
        this.o546.o299.call(this);
        this.type = o151.o1003;
        this.o1085 = 0;
        this.o1069 = 5;
        this.o1070 = 0.7
    };
    o96.o110(o165, o96.o127.o130.o297);
    o165.prototype.o546 = o96.o127.o130.o297.prototype;
    o165.o311 = function () {
        o96.o127.o130.o297.o297.apply(this, arguments);
        this.o1054 = new o106;
        this.o1055 = new o106;
        this.o1110 = new o106;
        this.o1124 = new o106;
        this.o509 = new o106;
        this.o1125 = new o106;
        this.o1126 = new o99;
        this.o1058 = new o107
    };
    o165.prototype.o996 = function () {
        return this.o945.o767(this.o1054)
    };
    o165.prototype.o997 = function () {
        return this.o944.o767(this.o1055)
    };
    o165.prototype.o1057 = function (o180) {
        if (o180 === undefined) o180 = 0;
        return new o106(o180 * (this.o1058.o214 * this.o1125.o214 + (this.o1127 + this.o1058.o159) * this.o509.o214), o180 * (this.o1058.o214 * this.o1125.o105 + (this.o1127 + this.o1058.o159) * this.o509.o105))
    };
    o165.prototype.o1059 = function (o180) {
            if (o180 === undefined) o180 = 0;
            return o180 * this.o1058.o105
    };
    o165.prototype.o1105 = function () {
        var o180 = this.o945,
            o182 = this.o944,
            o184 = o180.o767(this.o1054),
            o186 = o182.o767(this.o1055);
        o182 = o186.o214 - o184.o214;
        o184 = o186.o105 - o184.o105;
        o180 = o180.o768(this.o1110);
        return o180.o214 * o182 + o180.o105 * o184
    };
    o165.prototype.o1128 = function () {
        var o180 = this.o945,
            o182 = this.o944,
            o184;
        o184 = o180.o683.o170;
        var o186 = this.o1054.o214 - o180.o684.o674.o214,
            o188 = this.o1054.o105 - o180.o684.o674.o105,
            o190 = o184.o361.o214 * o186 + o184.o362.o214 * o188;
        o188 = o184.o361.o105 * o186 + o184.o362.o105 * o188;
        o186 = o190;
        o184 = o182.o683.o170;
        var o192 = this.o1055.o214 - o182.o684.o674.o214,
            o194 = this.o1055.o105 - o182.o684.o674.o105;
        o190 = o184.o361.o214 * o192 + o184.o362.o214 * o194;
        o194 = o184.o361.o105 * o192 + o184.o362.o105 * o194;
        o192 = o190;
        o184 = o182.o684.o196.o214 + o192 - (o180.o684.o196.o214 + o186);
        o190 = o182.o684.o196.o105 + o194 - (o180.o684.o196.o105 + o188);
        var o196 = o180.o768(this.o1110),
            o198 = o180.o685,
            o200 = o182.o685;
        o180 = o180.o727;
        o182 = o182.o727;
        return o184 * -o180 * o196.o105 + o190 * o180 * o196.o214 + (o196.o214 * (o200.o214 + -o182 * o194 - o198.o214 - -o180 * o188) + o196.o105 * (o200.o105 + o182 * o192 - o198.o105 - o180 * o186))
    };
    o165.prototype.o1129 = function () {
        return this.o1130
    };
    o165.prototype.o1131 = function (o180) {
        this.o945.o749(true);
        this.o944.o749(true);
        this.o1130 = o180
    };
    o165.prototype.o1132 = function () {
        return this.o1133
    };
    o165.prototype.o1134 = function () {
        return this.o1135
    };
    o165.prototype.o1136 = function (o180, o182) {
        if (o180 === undefined) o180 = 0;
        if (o182 === undefined) o182 = 0;
        this.o945.o749(true);
        this.o944.o749(true);
        this.o1133 = o180;
        this.o1135 = o182
    };
    o165.prototype.o1137 = function () {
        return this.o1138
    };
    o165.prototype.o1139 = function (o180) {
        this.o945.o749(true);
        this.o944.o749(true);
        this.o1138 = o180
    };
    o165.prototype.o1140 = function (o180) {
        if (o180 === undefined) o180 = 0;
        this.o945.o749(true);
        this.o944.o749(true);
        this.o1141 = o180
    };
    o165.prototype.o1142 = function () {
        return this.o1141
    };
    o165.prototype.o1143 = function (o180) {
        if (o180 === undefined) o180 = 0;
        this.o945.o749(true);
        this.o944.o749(true);
        this.o1144 = o180
    };
    o165.prototype.o1146 = function () {
        return this.o1127
    };
    o165.prototype.o311 = function (o180) {
        this.o546.o297.call(this, o180);
        this.o1054.o393(o180.o1067);
        this.o1055.o393(o180.o1068);
        this.o1110.o393(o180.o1147);
        this.o1124.o214 = -this.o1110.o105;
        this.o1124.o105 = this.o1110.o214;
        this.o1173 = o180.o1174;
        this.o1058.o402();
        this.o1127 = this.o1148 = 0;
        this.o1133 = o180.o1149;
        this.o1135 = o180.o1150;
        this.o1144 = o180.o1151;
        this.o1141 = o180.o1152;
        this.o1130 = o180.o1153;
        this.o1138 = o180.o1154;
        this.o1155 = o151.o1120;
        this.o509.o402();
        this.o1125.o402()
    };
    o165.prototype.o901 = function (o180) {
        var o182 = this.o945,
            o184 = this.o944,
            o186, o188 = 0;
        this.o1114.o393(o182.o722());
        this.o1115.o393(o184.o722());
        var o190 = o182.o535();
        o184.o535();
        o186 = o182.o683.o170;
        var o192 = this.o1054.o214 - this.o1114.o214,
            o194 = this.o1054.o105 - this.o1114.o105;
        o188 = o186.o361.o214 * o192 + o186.o362.o214 * o194;
        o194 = o186.o361.o105 * o192 + o186.o362.o105 * o194;
        o192 = o188;
        o186 = o184.o683.o170;
        var o196 = this.o1055.o214 - this.o1115.o214,
            o198 = this.o1055.o105 - this.o1115.o105;
        o188 = o186.o361.o214 * o196 + o186.o362.o214 * o198;
        o198 = o186.o361.o105 * o196 + o186.o362.o105 * o198;
        o196 = o188;
        o186 = o184.o684.o196.o214 + o196 - o182.o684.o196.o214 - o192;
        o188 = o184.o684.o196.o105 + o198 - o182.o684.o196.o105 - o194;
        this.o1156 = o182.o753;
        this.o1157 = o184.o753;
        this.o1158 = o182.o754;
        this.o1159 = o184.o754;
        this.o509.o393(o105.o516(o190.o170, this.o1110));
        this.o1160 = (o186 + o192) * this.o509.o105 - (o188 + o194) * this.o509.o214;
        this.o1161 = o196 * this.o509.o105 - o198 * this.o509.o214;
        this.o1148 = this.o1156 + this.o1157 + this.o1158 * this.o1160 * this.o1160 + this.o1159 * this.o1161 * this.o1161;
        if (this.o1148 > Number.MIN_VALUE) this.o1148 = 1 / this.o1148;
        this.o1125.o393(o105.o516(o190.o170, this.o1124));
        this.o1162 = (o186 + o192) * this.o1125.o105 - (o188 + o194) * this.o1125.o214;
        this.o1163 = o196 * this.o1125.o105 - o198 * this.o1125.o214;
        o190 = this.o1156;
        o192 = this.o1157;
        o194 = this.o1158;
        o196 = this.o1159;
        this.o1126.o361.o214 = o190 + o192 + o194 * this.o1162 * this.o1162 + o196 * this.o1163 * this.o1163;
        this.o1126.o361.o105 = o194 * this.o1162 + o196 * this.o1163;
        this.o1126.o361.o159 = o194 * this.o1162 * this.o1160 + o196 * this.o1163 * this.o1161;
        this.o1126.o362.o214 = this.o1126.o361.o105;
        this.o1126.o362.o105 = o194 + o196;
        this.o1126.o362.o159 = o194 * this.o1160 + o196 * this.o1161;
        this.o1126.o650.o214 = this.o1126.o361.o159;
        this.o1126.o650.o105 = this.o1126.o362.o159;
        this.o1126.o650.o159 = o190 + o192 + o194 * this.o1160 * this.o1160 + o196 * this.o1161 * this.o1161;
        if (this.o1130) {
            o186 = this.o509.o214 * o186 + this.o509.o105 * o188;
            if (o105.o540(this.o1135 - this.o1133) < 2 * o97.o611) this.o1155 = o151.o1123;
            else if (o186 <= this.o1133) {
                if (this.o1155 != o151.o1121) {
                    this.o1155 = o151.o1121;
                    this.o1058.o159 = 0
                }
            } else if (o186 >= this.o1135) {
                if (this.o1155 != o151.o1122) {
                    this.o1155 = o151.o1122;
                    this.o1058.o159 = 0
                }
            } else {
                this.o1155 = o151.o1120;
                this.o1058.o159 = 0
            }
        } else this.o1155 = o151.o1120; if (this.o1138 == false) this.o1127 = 0;
        if (o180.o920) {
            this.o1058.o214 *= o180.o966;
            this.o1058.o105 *= o180.o966;
            this.o1127 *= o180.o966;
            o180 = this.o1058.o214 * this.o1125.o214 + (this.o1127 + this.o1058.o159) * this.o509.o214;
            o186 = this.o1058.o214 * this.o1125.o105 + (this.o1127 + this.o1058.o159) * this.o509.o105;
            o188 = this.o1058.o214 * this.o1162 + this.o1058.o105 + (this.o1127 + this.o1058.o159) * this.o1160;
            o190 = this.o1058.o214 * this.o1163 + this.o1058.o105 + (this.o1127 + this.o1058.o159) * this.o1161;
            o182.o685.o214 -= this.o1156 * o180;
            o182.o685.o105 -= this.o1156 * o186;
            o182.o727 -= this.o1158 * o188;
            o184.o685.o214 += this.o1157 * o180;
            o184.o685.o105 += this.o1157 * o186;
            o184.o727 += this.o1159 * o190
        } else {
            this.o1058.o402();
            this.o1127 = 0
        }
    };
    o165.prototype.o903 = function (o180) {
        var o182 = this.o945,
            o184 = this.o944,
            o186 = o182.o685,
            o188 = o182.o727,
            o190 = o184.o685,
            o192 = o184.o727,
            o194 = 0,
            o196 = 0,
            o198 = 0,
            o200 = 0;
        if (this.o1138 && this.o1155 != o151.o1123) {
            o200 = this.o1148 * (this.o1141 - (this.o509.o214 * (o190.o214 - o186.o214) + this.o509.o105 * (o190.o105 - o186.o105) + this.o1161 * o192 - this.o1160 * o188));
            o194 = this.o1127;
            o180 = o180.o900 * this.o1144;
            this.o1127 = o105.o517(this.o1127 + o200, -o180, o180);
            o200 = this.o1127 - o194;
            o194 = o200 * this.o509.o214;
            o196 = o200 * this.o509.o105;
            o198 = o200 * this.o1160;
            o200 = o200 * this.o1161;
            o186.o214 -= this.o1156 * o194;
            o186.o105 -= this.o1156 * o196;
            o188 -= this.o1158 * o198;
            o190.o214 += this.o1157 * o194;
            o190.o105 += this.o1157 * o196;
            o192 += this.o1159 * o200
        }
        o198 = this.o1125.o214 * (o190.o214 - o186.o214) + this.o1125.o105 * (o190.o105 - o186.o105) + this.o1163 * o192 - this.o1162 * o188;
        o196 = o192 - o188;
        if (this.o1130 && this.o1155 != o151.o1120) {
            o180 = this.o509.o214 * (o190.o214 - o186.o214) + this.o509.o105 * (o190.o105 - o186.o105) + this.o1161 * o192 - this.o1160 * o188;
            o194 = this.o1058.o409();
            o180 = this.o1126.o653(new o107, -o198, -o196, -o180);
            this.o1058.o679(o180);
            if (this.o1155 == o151.o1121) this.o1058.o159 = o105.o446(this.o1058.o159, 0);
            else if (this.o1155 == o151.o1122) this.o1058.o159 = o105.o663(this.o1058.o159, 0);
            o198 = -o198 - (this.o1058.o159 - o194.o159) * this.o1126.o650.o214;
            o196 = -o196 - (this.o1058.o159 - o194.o159) * this.o1126.o650.o105;
            o196 = this.o1126.o652(new o106, o198, o196);
            o196.o214 += o194.o214;
            o196.o105 += o194.o105;
            this.o1058.o214 = o196.o214;
            this.o1058.o105 = o196.o105;
            o180.o214 = this.o1058.o214 - o194.o214;
            o180.o105 = this.o1058.o105 - o194.o105;
            o180.o159 = this.o1058.o159 - o194.o159;
            o194 = o180.o214 * this.o1125.o214 + o180.o159 * this.o509.o214;
            o196 = o180.o214 * this.o1125.o105 + o180.o159 * this.o509.o105;
            o198 = o180.o214 * this.o1162 + o180.o105 + o180.o159 * this.o1160;
            o200 = o180.o214 * this.o1163 + o180.o105 + o180.o159 * this.o1161
        } else {
            o180 = this.o1126.o652(new o106, -o198, -o196);
            this.o1058.o214 += o180.o214;
            this.o1058.o105 += o180.o105;
            o194 = o180.o214 * this.o1125.o214;
            o196 = o180.o214 * this.o1125.o105;
            o198 = o180.o214 * this.o1162 + o180.o105;
            o200 = o180.o214 * this.o1163 + o180.o105
        }
        o186.o214 -= this.o1156 * o194;
        o186.o105 -= this.o1156 * o196;
        o188 -= this.o1158 * o198;
        o190.o214 += this.o1157 * o194;
        o190.o105 += this.o1157 * o196;
        o192 += this.o1159 * o200;
        o182.o685.o393(o186);
        o182.o727 = o188;
        o184.o685.o393(o190);
        o184.o727 = o192
    };
    o165.prototype.o907 = function () {
        var o180 = this.o945,
            o182 = this.o944,
            o184 = o180.o684.o196,
            o186 = o180.o684.o194,
            o188 = o182.o684.o196,
            o190 = o182.o684.o194,
            o192, o194 = 0,
            o196 = 0,
            o198 = 0,
            o200 = o194 = o192 = 0,
            o93 = 0;
        o196 = false;
        var o203 = 0,
            o205 = o98.o639(o186),
            o207 = o98.o639(o190);
        o192 = o205;
        o93 = this.o1054.o214 - this.o1114.o214;
        var o37 = this.o1054.o105 - this.o1114.o105;
        o194 = o192.o361.o214 * o93 + o192.o362.o214 * o37;
        o37 = o192.o361.o105 * o93 + o192.o362.o105 * o37;
        o93 = o194;
        o192 = o207;
        o207 = this.o1055.o214 - this.o1115.o214;
        o198 = this.o1055.o105 - this.o1115.o105;
        o194 = o192.o361.o214 * o207 + o192.o362.o214 * o198;
        o198 = o192.o361.o105 * o207 + o192.o362.o105 * o198;
        o207 = o194;
        o192 = o188.o214 + o207 - o184.o214 - o93;
        o194 = o188.o105 + o198 - o184.o105 - o37;
        if (this.o1130) {
            this.o509 = o105.o516(o205, this.o1110);
            this.o1160 = (o192 + o93) * this.o509.o105 - (o194 + o37) * this.o509.o214;
            this.o1161 = o207 * this.o509.o105 - o198 * this.o509.o214;
            var o210 = this.o509.o214 * o192 + this.o509.o105 * o194;
            if (o105.o540(this.o1135 - this.o1133) < 2 * o97.o611) {
                o203 = o105.o517(o210, -o97.o628, o97.o628);
                o200 = o105.o540(o210);
                o196 = true
            } else if (o210 <= this.o1133) {
                o203 = o105.o517(o210 - this.o1133 + o97.o611, -o97.o628, 0);
                o200 = this.o1133 - o210;
                o196 = true
            } else if (o210 >= this.o1135) {
                o203 = o105.o517(o210 - this.o1135 + o97.o611, 0, o97.o628);
                o200 = o210 - this.o1135;
                o196 = true
            }
        }
        this.o1125 = o105.o516(o205, this.o1124);
        this.o1162 = (o192 + o93) * this.o1125.o105 - (o194 + o37) * this.o1125.o214;
        this.o1163 = o207 * this.o1125.o105 - o198 * this.o1125.o214;
        o205 = new o107;
        o37 = this.o1125.o214 * o192 + this.o1125.o105 * o194;
        o207 = o190 - o186 - this.o1173;
        o200 = o105.o446(o200, o105.o540(o37));
        o93 = o105.o540(o207);
        if (o196) {
            o196 = this.o1156;
            o198 = this.o1157;
            o192 = this.o1158;
            o194 = this.o1159;
            this.o1126.o361.o214 = o196 + o198 + o192 * this.o1162 * this.o1162 + o194 * this.o1163 * this.o1163;
            this.o1126.o361.o105 = o192 * this.o1162 + o194 * this.o1163;
            this.o1126.o361.o159 = o192 * this.o1162 * this.o1160 + o194 * this.o1163 * this.o1161;
            this.o1126.o362.o214 = this.o1126.o361.o105;
            this.o1126.o362.o105 = o192 + o194;
            this.o1126.o362.o159 = o192 * this.o1160 + o194 * this.o1161;
            this.o1126.o650.o214 = this.o1126.o361.o159;
            this.o1126.o650.o105 = this.o1126.o362.o159;
            this.o1126.o650.o159 = o196 + o198 + o192 * this.o1160 * this.o1160 + o194 * this.o1161 * this.o1161;
            this.o1126.o653(o205, -o37, -o207, -o203)
        } else {
            o196 = this.o1156;
            o198 = this.o1157;
            o192 = this.o1158;
            o194 = this.o1159;
            o203 = o192 * this.o1162 + o194 * this.o1163;
            o210 = o192 + o194;
            this.o1126.o361.Set(o196 + o198 + o192 * this.o1162 * this.o1162 + o194 * this.o1163 * this.o1163, o203, 0);
            this.o1126.o362.Set(o203,
                o210, 0);
            o203 = this.o1126.o652(new o106, -o37, -o207);
            o205.o214 = o203.o214;
            o205.o105 = o203.o105;
            o205.o159 = 0
        }
        o203 = o205.o214 * this.o1125.o214 + o205.o159 * this.o509.o214;
        o196 = o205.o214 * this.o1125.o105 + o205.o159 * this.o509.o105;
        o37 = o205.o214 * this.o1162 + o205.o105 + o205.o159 * this.o1160;
        o205 = o205.o214 * this.o1163 + o205.o105 + o205.o159 * this.o1161;
        o184.o214 -= this.o1156 * o203;
        o184.o105 -= this.o1156 * o196;
        o186 -= this.o1158 * o37;
        o188.o214 += this.o1157 * o203;
        o188.o105 += this.o1157 * o196;
        o190 += this.o1159 * o205;
        o180.o684.o194 = o186;
        o182.o684.o194 = o190;
        o180.o803();
        o182.o803();
        return o200 <= o97.o611 && o93 <= o97.o624
    };
    o96.o110(o167, o96.o127.o130.o299);
    o167.prototype.o546 = o96.o127.o130.o299.prototype;
    o167.o313 = function () {
        o96.o127.o130.o299.o299.apply(this, arguments);
        this.o1067 = new o106;
        this.o1068 = new o106;
        this.o1147 = new o106
    };
    o167.prototype.o313 = function () {
        this.o546.o299.call(this);
        this.type = o151.o1116;
        this.o1147.Set(1, 0);
        this.o1174 = 0;
        this.o1153 = false;
        this.o1150 = this.o1149 = 0;
        this.o1154 = false;
        this.o1152 = this.o1151 = 0
    };
    o167.prototype.o510 = function (o180, o182, o184, o186) {
        this.o947 = o180;
        this.o948 = o182;
        this.o1067 = this.o947.o769(o184);
        this.o1068 = this.o948.o769(o184);
        this.o1147 = this.o947.o770(o186);
        this.o1174 = this.o948.o646() - this.o947.o646()
    };
    o96.o110(o67, o96.o127.o130.o297);
    o67.prototype.o546 = o96.o127.o130.o297.prototype;
    o67.o315 = function () {
        o96.o127.o130.o297.o297.apply(this, arguments);
        this.o1088 = new o106;
        this.o1089 = new o106;
        this.o1054 = new o106;
        this.o1055 = new o106;
        this.o1175 = new o106;
        this.o1176 = new o106
    };
    o67.prototype.o996 = function () {
        return this.o945.o767(this.o1054)
    };
    o67.prototype.o997 = function () {
        return this.o944.o767(this.o1055)
    };
    o67.prototype.o1057 = function (o180) {
        if (o180 === undefined) o180 = 0;
        return new o106(o180 * this.o1058 * this.o1176.o214, o180 * this.o1058 * this.o1176.o105)
    };
    o67.prototype.o1059 = function () {
        return 0
    };
    o67.prototype.o1000 = function () {
        var o180 = this.o1177.o683.o363.o409();
        o180.o679(this.o1088);
        return o180
    };
    o67.prototype.o1001 = function () {
        var o180 = this.o1177.o683.o363.o409();
        o180.o679(this.o1089);
        return o180
    };
    o67.prototype.o1178 = function () {
        var o180 = this.o945.o767(this.o1054),
            o182 = o180.o214 - (this.o1177.o683.o363.o214 + this.o1088.o214);
        o180 = o180.o105 - (this.o1177.o683.o363.o105 + this.o1088.o105);
        return Math.sqrt(o182 * o182 + o180 * o180)
    };
    o67.prototype.o1179 = function () {
        var o180 = this.o944.o767(this.o1055),
            o182 = o180.o214 - (this.o1177.o683.o363.o214 + this.o1089.o214);
        o180 = o180.o105 - (this.o1177.o683.o363.o105 + this.o1089.o105);
        return Math.sqrt(o182 * o182 + o180 * o180)
    };
    o67.prototype.o1093 = function () {
        return this.o1094
    };
    o67.prototype.o315 = function (o180) {
        this.o546.o297.call(this, o180);
        this.o1177 = this.o945.o690.o931;
        this.o1088.o214 = o180.o1180.o214 - this.o1177.o683.o363.o214;
        this.o1088.o105 = o180.o1180.o105 - this.o1177.o683.o363.o105;
        this.o1089.o214 = o180.o1181.o214 - this.o1177.o683.o363.o214;
        this.o1089.o105 = o180.o1181.o105 - this.o1177.o683.o363.o105;
        this.o1054.o393(o180.o1067);
        this.o1055.o393(o180.o1068);
        this.o1094 = o180.o1107;
        this.o1108 = o180.o1182 + this.o1094 * o180.o1183;
        this.o1184 = o105.o663(o180.o1185, this.o1108 - this.o1094 * o67.o1186);
        this.o1187 = o105.o663(o180.o1188, (this.o1108 - o67.o1186) / this.o1094);
        this.o1189 = this.o1190 = this.o1058 = 0
    };
    o67.prototype.o901 = function (o180) {
            var o182 = this.o945,
                o184 = this.o944,
                o186;
            o186 = o182.o683.o170;
            var o188 = this.o1054.o214 - o182.o684.o674.o214,
                o190 = this.o1054.o105 - o182.o684.o674.o105,
                o192 = o186.o361.o214 * o188 + o186.o362.o214 * o190;
            o190 = o186.o361.o105 * o188 + o186.o362.o105 * o190;
            o188 = o192;
            o186 = o184.o683.o170;
            var o194 = this.o1055.o214 - o184.o684.o674.o214,
                o196 = this.o1055.o105 - o184.o684.o674.o105;
            o192 = o186.o361.o214 * o194 + o186.o362.o214 * o196;
            o196 = o186.o361.o105 * o194 + o186.o362.o105 * o196;
            o194 = o192;
            o186 = o184.o684.o196.o214 + o194;
            o192 = o184.o684.o196.o105 + o196;
            var o198 = this.o1177.o683.o363.o214 + this.o1089.o214,
                o200 = this.o1177.o683.o363.o105 + this.o1089.o105;
            this.o1175.Set(o182.o684.o196.o214 + o188 - (this.o1177.o683.o363.o214 + this.o1088.o214), o182.o684.o196.o105 + o190 - (this.o1177.o683.o363.o105 + this.o1088.o105));
            this.o1176.Set(o186 - o198, o192 - o200);
            o186 = this.o1175.o451();
            o192 = this.o1176.o451();
            o186 > o97.o611 ? this.o1175.o604(1 / o186) : this.o1175.o402();
            o192 > o97.o611 ? this.o1176.o604(1 / o192) : this.o1176.o402();
            if (this.o1108 - o186 - this.o1094 * o192 > 0) {
                this.o1191 = o151.o1120;
                this.o1058 = 0
            } else this.o1191 = o151.o1122; if (o186 < this.o1184) {
                this.o1192 = o151.o1120;
                this.o1190 = 0
            } else this.o1192 = o151.o1122; if (o192 < this.o1187) {
                this.o1193 = o151.o1120;
                this.o1189 = 0
            } else this.o1193 = o151.o1122;
            o186 = o188 * this.o1175.o105 - o190 * this.o1175.o214;
            o192 = o194 * this.o1176.o105 - o196 * this.o1176.o214;
            this.o1194 = o182.o753 + o182.o754 * o186 * o186;
            this.o1195 = o184.o753 + o184.o754 * o192 * o192;
            this.o1196 = this.o1194 + this.o1094 * this.o1094 * this.o1195;
            this.o1194 = 1 / this.o1194;
            this.o1195 = 1 / this.o1195;
            this.o1196 = 1 / this.o1196;
            if (o180.o920) {
                this.o1058 *= o180.o966;
                this.o1190 *= o180.o966;
                this.o1189 *= o180.o966;
                o180 = (-this.o1058 - this.o1190) * this.o1175.o214;
                o186 = (-this.o1058 - this.o1190) * this.o1175.o105;
                o192 = (-this.o1094 * this.o1058 - this.o1189) * this.o1176.o214;
                o198 = (-this.o1094 * this.o1058 - this.o1189) * this.o1176.o105;
                o182.o685.o214 += o182.o753 * o180;
                o182.o685.o105 += o182.o753 * o186;
                o182.o727 += o182.o754 * (o188 * o186 - o190 * o180);
                o184.o685.o214 += o184.o753 * o192;
                o184.o685.o105 += o184.o753 * o198;
                o184.o727 += o184.o754 * (o194 * o198 - o196 * o192)
            } else this.o1189 = this.o1190 = this.o1058 = 0
    };
    o67.prototype.o903 = function () {
        var o180 = this.o945,
            o182 = this.o944,
            o184;
        o184 = o180.o683.o170;
        var o186 = this.o1054.o214 - o180.o684.o674.o214,
            o188 = this.o1054.o105 - o180.o684.o674.o105,
            o190 = o184.o361.o214 * o186 + o184.o362.o214 * o188;
        o188 = o184.o361.o105 * o186 + o184.o362.o105 * o188;
        o186 = o190;
        o184 = o182.o683.o170;
        var o192 = this.o1055.o214 - o182.o684.o674.o214,
            o194 = this.o1055.o105 - o182.o684.o674.o105;
        o190 = o184.o361.o214 * o192 + o184.o362.o214 * o194;
        o194 = o184.o361.o105 * o192 + o184.o362.o105 * o194;
        o192 = o190;
        var o196 = o190 = o184 = 0,
            o198 = 0;
        o184 = o198 = o184 = o198 = o196 = o190 = o184 = 0;
        if (this.o1191 == o151.o1122) {
            o184 = o180.o685.o214 + -o180.o727 * o188;
            o190 = o180.o685.o105 + o180.o727 * o186;
            o196 = o182.o685.o214 + -o182.o727 * o194;
            o198 = o182.o685.o105 + o182.o727 * o192;
            o184 = -(this.o1175.o214 * o184 + this.o1175.o105 * o190) - this.o1094 * (this.o1176.o214 * o196 + this.o1176.o105 * o198);
            o198 = this.o1196 * -o184;
            o184 = this.o1058;
            this.o1058 = o105.o446(0, this.o1058 + o198);
            o198 = this.o1058 - o184;
            o184 = -o198 * this.o1175.o214;
            o190 = -o198 * this.o1175.o105;
            o196 = -this.o1094 * o198 * this.o1176.o214;
            o198 = -this.o1094 * o198 * this.o1176.o105;
            o180.o685.o214 += o180.o753 * o184;
            o180.o685.o105 += o180.o753 * o190;
            o180.o727 += o180.o754 * (o186 * o190 - o188 * o184);
            o182.o685.o214 += o182.o753 * o196;
            o182.o685.o105 += o182.o753 * o198;
            o182.o727 += o182.o754 * (o192 * o198 - o194 * o196)
        }
        if (this.o1192 == o151.o1122) {
            o184 = o180.o685.o214 + -o180.o727 * o188;
            o190 = o180.o685.o105 + o180.o727 * o186;
            o184 = -(this.o1175.o214 * o184 + this.o1175.o105 * o190);
            o198 = -this.o1194 * o184;
            o184 = this.o1190;
            this.o1190 = o105.o446(0, this.o1190 + o198);
            o198 = this.o1190 - o184;
            o184 = -o198 * this.o1175.o214;
            o190 = -o198 * this.o1175.o105;
            o180.o685.o214 += o180.o753 * o184;
            o180.o685.o105 += o180.o753 * o190;
            o180.o727 += o180.o754 * (o186 * o190 - o188 * o184)
        }
        if (this.o1193 == o151.o1122) {
            o196 = o182.o685.o214 + -o182.o727 * o194;
            o198 = o182.o685.o105 + o182.o727 * o192;
            o184 = -(this.o1176.o214 * o196 + this.o1176.o105 * o198);
            o198 = -this.o1195 * o184;
            o184 = this.o1189;
            this.o1189 = o105.o446(0, this.o1189 + o198);
            o198 = this.o1189 - o184;
            o196 = -o198 * this.o1176.o214;
            o198 = -o198 * this.o1176.o105;
            o182.o685.o214 += o182.o753 * o196;
            o182.o685.o105 += o182.o753 * o198;
            o182.o727 += o182.o754 * (o192 * o198 - o194 * o196)
        }
    };
    o67.prototype.o907 = function () {
        var o180 = this.o945,
            o182 = this.o944,
            o184, o186 = this.o1177.o683.o363.o214 + this.o1088.o214,
            o188 = this.o1177.o683.o363.o105 + this.o1088.o105,
            o190 = this.o1177.o683.o363.o214 + this.o1089.o214,
            o192 = this.o1177.o683.o363.o105 + this.o1089.o105,
            o194 = 0,
            o196 = 0,
            o198 = 0,
            o200 = 0,
            o93 = o184 = 0,
            o203 = 0,
            o205 = 0,
            o207 = o93 = o205 = o184 = o93 = o184 = 0;
        if (this.o1191 == o151.o1122) {
            o184 = o180.o683.o170;
            o194 = this.o1054.o214 - o180.o684.o674.o214;
            o196 = this.o1054.o105 - o180.o684.o674.o105;
            o93 = o184.o361.o214 * o194 + o184.o362.o214 * o196;
            o196 = o184.o361.o105 * o194 + o184.o362.o105 * o196;
            o194 = o93;
            o184 = o182.o683.o170;
            o198 = this.o1055.o214 - o182.o684.o674.o214;
            o200 = this.o1055.o105 - o182.o684.o674.o105;
            o93 = o184.o361.o214 * o198 + o184.o362.o214 * o200;
            o200 = o184.o361.o105 * o198 + o184.o362.o105 * o200;
            o198 = o93;
            o184 = o180.o684.o196.o214 + o194;
            o93 = o180.o684.o196.o105 + o196;
            o203 = o182.o684.o196.o214 + o198;
            o205 = o182.o684.o196.o105 + o200;
            this.o1175.Set(o184 - o186, o93 - o188);
            this.o1176.Set(o203 - o190, o205 - o192);
            o184 = this.o1175.o451();
            o93 = this.o1176.o451();
            o184 > o97.o611 ? this.o1175.o604(1 / o184) : this.o1175.o402();
            o93 > o97.o611 ? this.o1176.o604(1 / o93) : this.o1176.o402();
            o184 = this.o1108 - o184 - this.o1094 * o93;
            o207 = o105.o446(o207, -o184);
            o184 = o105.o517(o184 + o97.o611, -o97.o628, 0);
            o205 = -this.o1196 * o184;
            o184 = -o205 * this.o1175.o214;
            o93 = -o205 * this.o1175.o105;
            o203 = -this.o1094 * o205 * this.o1176.o214;
            o205 = -this.o1094 * o205 * this.o1176.o105;
            o180.o684.o196.o214 += o180.o753 * o184;
            o180.o684.o196.o105 += o180.o753 * o93;
            o180.o684.o194 += o180.o754 * (o194 * o93 - o196 * o184);
            o182.o684.o196.o214 += o182.o753 * o203;
            o182.o684.o196.o105 += o182.o753 * o205;
            o182.o684.o194 += o182.o754 * (o198 * o205 - o200 * o203);
            o180.o803();
            o182.o803()
        }
        if (this.o1192 == o151.o1122) {
            o184 = o180.o683.o170;
            o194 = this.o1054.o214 - o180.o684.o674.o214;
            o196 = this.o1054.o105 - o180.o684.o674.o105;
            o93 = o184.o361.o214 * o194 + o184.o362.o214 * o196;
            o196 = o184.o361.o105 * o194 + o184.o362.o105 * o196;
            o194 = o93;
            o184 = o180.o684.o196.o214 + o194;
            o93 = o180.o684.o196.o105 + o196;
            this.o1175.Set(o184 - o186, o93 - o188);
            o184 = this.o1175.o451();
            if (o184 > o97.o611) {
                this.o1175.o214 *= 1 / o184;
                this.o1175.o105 *= 1 / o184
            } else this.o1175.o402();
            o184 = this.o1184 - o184;
            o207 = o105.o446(o207, -o184);
            o184 = o105.o517(o184 + o97.o611, -o97.o628, 0);
            o205 = -this.o1194 * o184;
            o184 = -o205 * this.o1175.o214;
            o93 = -o205 * this.o1175.o105;
            o180.o684.o196.o214 += o180.o753 * o184;
            o180.o684.o196.o105 += o180.o753 * o93;
            o180.o684.o194 += o180.o754 * (o194 * o93 - o196 * o184);
            o180.o803()
        }
        if (this.o1193 == o151.o1122) {
            o184 = o182.o683.o170;
            o198 = this.o1055.o214 - o182.o684.o674.o214;
            o200 = this.o1055.o105 - o182.o684.o674.o105;
            o93 = o184.o361.o214 * o198 + o184.o362.o214 * o200;
            o200 = o184.o361.o105 * o198 + o184.o362.o105 * o200;
            o198 = o93;
            o203 = o182.o684.o196.o214 + o198;
            o205 = o182.o684.o196.o105 + o200;
            this.o1176.Set(o203 - o190, o205 - o192);
            o93 = this.o1176.o451();
            if (o93 > o97.o611) {
                this.o1176.o214 *= 1 / o93;
                this.o1176.o105 *= 1 / o93
            } else this.o1176.o402();
            o184 = this.o1187 - o93;
            o207 = o105.o446(o207, -o184);
            o184 = o105.o517(o184 + o97.o611, -o97.o628, 0);
            o205 = -this.o1195 * o184;
            o203 = -o205 * this.o1176.o214;
            o205 = -o205 * this.o1176.o105;
            o182.o684.o196.o214 += o182.o753 * o203;
            o182.o684.o196.o105 += o182.o753 * o205;
            o182.o684.o194 += o182.o754 * (o198 * o205 - o200 * o203);
            o182.o803()
        }
        return o207 < o97.o611
    };
    o96.o328.push(function () {
        o96.o127.o130.o315.o1186 = 2
    });
    o96.o110(o170, o96.o127.o130.o299);
    o170.prototype.o546 = o96.o127.o130.o299.prototype;
    o170.o317 = function () {
            o96.o127.o130.o299.o299.apply(this, arguments);
            this.o1180 = new o106;
            this.o1181 = new o106;
            this.o1067 = new o106;
            this.o1068 = new o106
    };
    o170.prototype.o317 = function () {
        this.o546.o299.call(this);
        this.type = o151.o1002;
        this.o1180.Set(-1, 1);
        this.o1181.Set(1, 1);
        this.o1067.Set(-1, 0);
        this.o1068.Set(1, 0);
        this.o1188 = this.o1183 = this.o1185 = this.o1182 = 0;
        this.o1107 = 1;
        this.o949 = true
    };
    o170.prototype.o510 = function (o180, o182, o184, o186, o188, o190, o192) {
            if (o192 === undefined) o192 = 0;
            this.o947 = o180;
            this.o948 = o182;
            this.o1180.o393(o184);
            this.o1181.o393(o186);
            this.o1067 = this.o947.o769(o188);
            this.o1068 = this.o948.o769(o190);
            o180 = o188.o214 - o184.o214;
            o184 = o188.o105 - o184.o105;
            this.o1182 = Math.sqrt(o180 * o180 + o184 * o184);
            o184 = o190.o214 - o186.o214;
            o186 = o190.o105 - o186.o105;
            this.o1183 = Math.sqrt(o184 * o184 + o186 * o186);
            this.o1107 = o192;
            o192 = this.o1182 + this.o1107 * this.o1183;
            this.o1185 = o192 - this.o1107 * o67.o1186;
            this.o1188 = (o192 - o67.o1186) / this.o1107
    };
    o96.o110(o172, o96.o127.o130.o297);
    o172.prototype.o546 = o96.o127.o130.o297.prototype;
    o172.o319 = function () {
        o96.o127.o130.o297.o297.apply(this, arguments);
        this.o99 = new o98;
        this.o1164 = new o98;
        this.o1165 = new o98;
        this.o1197 = new o98;
        this.o1198 = new o107;
        this.o1199 = new o106;
        this.o1200 = new o106;
        this.o1054 = new o106;
        this.o1055 = new o106;
        this.o1058 = new o107;
        this.o760 = new o99
    };
    o172.prototype.o996 = function () {
        return this.o945.o767(this.o1054)
    };
    o172.prototype.o997 = function () {
        return this.o944.o767(this.o1055)
    };
    o172.prototype.o1057 = function (o180) {
        if (o180 === undefined) o180 = 0;
        return new o106(o180 * this.o1058.o214, o180 * this.o1058.o105)
    };
    o172.prototype.o1059 = function (o180) {
        if (o180 === undefined) o180 = 0;
        return o180 * this.o1058.o159
    };
    o172.prototype.o1104 = function () {
        return this.o944.o684.o194 - this.o945.o684.o194 - this.o1201
    };
    o172.prototype.o1128 = function () {
        return this.o944.o727 - this.o945.o727
    };
    o172.prototype.o1129 = function () {
        return this.o1130
    };
    o172.prototype.o1131 = function (o180) {
            this.o1130 = o180
    };
    o172.prototype.o1132 = function () {
        return this.o1202
    };
    o172.prototype.o1134 = function () {
        return this.o1203
    };
    o172.prototype.o1136 = function (o180, o182) {
        if (o180 === undefined) o180 = 0;
        if (o182 === undefined) o182 = 0;
        this.o1202 = o180;
        this.o1203 = o182
    };
    o172.prototype.o1137 = function () {
        this.o945.o749(true);
        this.o944.o749(true);
        return this.o1138
    };
    o172.prototype.o1139 = function (o180) {
        this.o1138 = o180
    };
    o172.prototype.o1140 = function (o180) {
        if (o180 === undefined) o180 = 0;
        this.o945.o749(true);
        this.o944.o749(true);
        this.o1141 = o180
    };
    o172.prototype.o1142 = function () {
        return this.o1141
    };
    o172.prototype.o1204 = function (o180) {
        if (o180 === undefined) o180 = 0;
        this.o1205 = o180
    };
    o172.prototype.o1206 = function () {
        return this.o1205
    };
    o172.prototype.o319 = function (o180) {
        this.o546.o297.call(this, o180);
        this.o1054.o393(o180.o1067);
        this.o1055.o393(o180.o1068);
        this.o1201 = o180.o1174;
        this.o1058.o402();
        this.o1127 = 0;
        this.o1202 = o180.o1207;
        this.o1203 = o180.o1208;
        this.o1205 = o180.o1209;
        this.o1141 = o180.o1152;
        this.o1130 = o180.o1153;
        this.o1138 = o180.o1154;
        this.o1155 = o151.o1120
    };
    o172.prototype.o901 = function (o180) {
        var o182 = this.o945,
            o184 = this.o944,
            o186, o188 = 0;
        o186 = o182.o683.o170;
        var o190 = this.o1054.o214 - o182.o684.o674.o214,
            o192 = this.o1054.o105 - o182.o684.o674.o105;
        o188 = o186.o361.o214 * o190 + o186.o362.o214 * o192;
        o192 = o186.o361.o105 * o190 + o186.o362.o105 * o192;
        o190 = o188;
        o186 = o184.o683.o170;
        var o194 = this.o1055.o214 - o184.o684.o674.o214,
            o196 = this.o1055.o105 - o184.o684.o674.o105;
        o188 = o186.o361.o214 * o194 + o186.o362.o214 * o196;
        o196 = o186.o361.o105 * o194 + o186.o362.o105 * o196;
        o194 = o188;
        o186 = o182.o753;
        o188 = o184.o753;
        var o198 = o182.o754,
            o200 = o184.o754;
        this.o760.o361.o214 = o186 + o188 + o192 * o192 * o198 + o196 * o196 * o200;
        this.o760.o362.o214 = -o192 * o190 * o198 - o196 * o194 * o200;
        this.o760.o650.o214 = -o192 * o198 - o196 * o200;
        this.o760.o361.o105 = this.o760.o362.o214;
        this.o760.o362.o105 = o186 + o188 + o190 * o190 * o198 + o194 * o194 * o200;
        this.o760.o650.o105 = o190 * o198 + o194 * o200;
        this.o760.o361.o159 = this.o760.o650.o214;
        this.o760.o362.o159 = this.o760.o650.o105;
        this.o760.o650.o159 = o198 + o200;
        this.o1148 = 1 / (o198 + o200);
        if (this.o1138 == false) this.o1127 = 0;
        if (this.o1130) {
            var o93 = o184.o684.o194 - o182.o684.o194 - this.o1201;
            if (o105.o540(this.o1203 - this.o1202) < 2 * o97.o624) this.o1155 = o151.o1123;
            else if (o93 <= this.o1202) {
                if (this.o1155 != o151.o1121) this.o1058.o159 = 0;
                this.o1155 = o151.o1121
            } else if (o93 >= this.o1203) {
                if (this.o1155 != o151.o1122) this.o1058.o159 = 0;
                this.o1155 = o151.o1122
            } else {
                this.o1155 = o151.o1120;
                this.o1058.o159 = 0
            }
        } else this.o1155 = o151.o1120; if (o180.o920) {
            this.o1058.o214 *= o180.o966;
            this.o1058.o105 *= o180.o966;
            this.o1127 *= o180.o966;
            o180 = this.o1058.o214;
            o93 = this.o1058.o105;
            o182.o685.o214 -= o186 * o180;
            o182.o685.o105 -= o186 * o93;
            o182.o727 -= o198 * (o190 * o93 - o192 * o180 + this.o1127 + this.o1058.o159);
            o184.o685.o214 += o188 * o180;
            o184.o685.o105 += o188 * o93;
            o184.o727 += o200 * (o194 * o93 - o196 * o180 + this.o1127 + this.o1058.o159)
        } else {
            this.o1058.o402();
            this.o1127 = 0
        }
    };
    o172.prototype.o903 = function (o180) {
        var o182 = this.o945,
            o184 = this.o944,
            o186 = 0,
            o188 = o186 = 0,
            o190 = 0,
            o192 = 0,
            o194 = 0,
            o196 = o182.o685,
            o198 = o182.o727,
            o200 = o184.o685,
            o93 = o184.o727,
            o203 = o182.o753,
            o205 = o184.o753,
            o207 = o182.o754,
            o37 = o184.o754;
        if (this.o1138 && this.o1155 != o151.o1123) {
            o188 = this.o1148 * -(o93 - o198 - this.o1141);
            o190 = this.o1127;
            o192 = o180.o900 * this.o1205;
            this.o1127 = o105.o517(this.o1127 + o188, -o192, o192);
            o188 = this.o1127 - o190;
            o198 -= o207 * o188;
            o93 += o37 * o188
        }
        if (this.o1130 && this.o1155 != o151.o1120) {
            o180 = o182.o683.o170;
            o188 = this.o1054.o214 - o182.o684.o674.o214;
            o190 = this.o1054.o105 - o182.o684.o674.o105;
            o186 = o180.o361.o214 * o188 + o180.o362.o214 * o190;
            o190 = o180.o361.o105 * o188 + o180.o362.o105 * o190;
            o188 = o186;
            o180 = o184.o683.o170;
            o192 = this.o1055.o214 - o184.o684.o674.o214;
            o194 = this.o1055.o105 - o184.o684.o674.o105;
            o186 = o180.o361.o214 * o192 + o180.o362.o214 * o194;
            o194 = o180.o361.o105 * o192 + o180.o362.o105 * o194;
            o192 = o186;
            o180 = o200.o214 + -o93 * o194 - o196.o214 - -o198 * o190;
            var o210 = o200.o105 + o93 * o192 - o196.o105 - o198 * o188;
            this.o760.o653(this.o1198, -o180, -o210, -(o93 - o198));
            if (this.o1155 == o151.o1123) this.o1058.o679(this.o1198);
            else if (this.o1155 == o151.o1121) {
                o186 = this.o1058.o159 + this.o1198.o159;
                if (o186 < 0) {
                    this.o760.o652(this.o1200, -o180, -o210);
                    this.o1198.o214 = this.o1200.o214;
                    this.o1198.o105 = this.o1200.o105;
                    this.o1198.o159 = -this.o1058.o159;
                    this.o1058.o214 += this.o1200.o214;
                    this.o1058.o105 += this.o1200.o105;
                    this.o1058.o159 = 0
                }
            } else if (this.o1155 == o151.o1122) {
                o186 = this.o1058.o159 + this.o1198.o159;
                if (o186 > 0) {
                    this.o760.o652(this.o1200, -o180, -o210);
                    this.o1198.o214 = this.o1200.o214;
                    this.o1198.o105 = this.o1200.o105;
                    this.o1198.o159 = -this.o1058.o159;
                    this.o1058.o214 += this.o1200.o214;
                    this.o1058.o105 += this.o1200.o105;
                    this.o1058.o159 = 0
                }
            }
            o196.o214 -= o203 * this.o1198.o214;
            o196.o105 -= o203 * this.o1198.o105;
            o198 -= o207 * (o188 * this.o1198.o105 - o190 * this.o1198.o214 + this.o1198.o159);
            o200.o214 += o205 * this.o1198.o214;
            o200.o105 += o205 * this.o1198.o105;
            o93 += o37 * (o192 * this.o1198.o105 - o194 * this.o1198.o214 + this.o1198.o159)
        } else {
            o180 = o182.o683.o170;
            o188 = this.o1054.o214 - o182.o684.o674.o214;
            o190 = this.o1054.o105 - o182.o684.o674.o105;
            o186 = o180.o361.o214 * o188 + o180.o362.o214 * o190;
            o190 = o180.o361.o105 * o188 + o180.o362.o105 * o190;
            o188 = o186;
            o180 = o184.o683.o170;
            o192 = this.o1055.o214 - o184.o684.o674.o214;
            o194 = this.o1055.o105 - o184.o684.o674.o105;
            o186 = o180.o361.o214 * o192 + o180.o362.o214 * o194;
            o194 = o180.o361.o105 * o192 + o180.o362.o105 * o194;
            o192 = o186;
            this.o760.o652(this.o1199, -(o200.o214 + -o93 * o194 - o196.o214 - -o198 * o190), -(o200.o105 + o93 * o192 - o196.o105 - o198 * o188));
            this.o1058.o214 += this.o1199.o214;
            this.o1058.o105 += this.o1199.o105;
            o196.o214 -= o203 * this.o1199.o214;
            o196.o105 -= o203 * this.o1199.o105;
            o198 -= o207 * (o188 * this.o1199.o105 - o190 * this.o1199.o214);
            o200.o214 += o205 * this.o1199.o214;
            o200.o105 += o205 * this.o1199.o105;
            o93 += o37 * (o192 * this.o1199.o105 - o194 * this.o1199.o214)
        }
        o182.o685.o393(o196);
        o182.o727 = o198;
        o184.o685.o393(o200);
        o184.o727 = o93
    };
    o172.prototype.o907 = function () {
        var o180 = 0,
            o182, o184 = this.o945,
            o186 = this.o944,
            o188 = 0,
            o190 = o182 = 0,
            o192 = 0,
            o194 = 0;
        if (this.o1130 && this.o1155 != o151.o1120) {
            o180 = o186.o684.o194 - o184.o684.o194 - this.o1201;
            var o196 = 0;
            if (this.o1155 == o151.o1123) {
                o180 = o105.o517(o180 - this.o1202, -o97.o629, o97.o629);
                o196 = -this.o1148 * o180;
                o188 = o105.o540(o180)
            } else if (this.o1155 == o151.o1121) {
                o180 = o180 - this.o1202;
                o188 = -o180;
                o180 = o105.o517(o180 + o97.o624, -o97.o629, 0);
                o196 = -this.o1148 * o180
            } else if (this.o1155 == o151.o1122) {
                o188 = o180 = o180 - this.o1203;
                o180 = o105.o517(o180 - o97.o624, 0, o97.o629);
                o196 = -this.o1148 * o180
            }
            o184.o684.o194 -= o184.o754 * o196;
            o186.o684.o194 += o186.o754 * o196;
            o184.o803();
            o186.o803()
        }
        o182 = o184.o683.o170;
        o196 = this.o1054.o214 - o184.o684.o674.o214;
        o180 = this.o1054.o105 - o184.o684.o674.o105;
        o190 = o182.o361.o214 * o196 + o182.o362.o214 * o180;
        o180 = o182.o361.o105 * o196 + o182.o362.o105 * o180;
        o196 = o190;
        o182 = o186.o683.o170;
        var o198 = this.o1055.o214 - o186.o684.o674.o214,
            o200 = this.o1055.o105 - o186.o684.o674.o105;
        o190 = o182.o361.o214 * o198 + o182.o362.o214 * o200;
        o200 = o182.o361.o105 * o198 + o182.o362.o105 * o200;
        o198 = o190;
        o192 = o186.o684.o196.o214 + o198 - o184.o684.o196.o214 - o196;
        o194 = o186.o684.o196.o105 + o200 - o184.o684.o196.o105 - o180;
        var o93 = o192 * o192 + o194 * o194;
        o182 = Math.sqrt(o93);
        o190 = o184.o753;
        var o203 = o186.o753,
            o205 = o184.o754,
            o207 = o186.o754,
            o37 = 10 * o97.o611;
        if (o93 > o37 * o37) {
            o93 = 1 / (o190 + o203);
            o192 = o93 * -o192;
            o194 = o93 * -o194;
            o184.o684.o196.o214 -= 0.5 * o190 * o192;
            o184.o684.o196.o105 -= 0.5 * o190 * o194;
            o186.o684.o196.o214 += 0.5 * o203 * o192;
            o186.o684.o196.o105 += 0.5 * o203 * o194;
            o192 = o186.o684.o196.o214 + o198 - o184.o684.o196.o214 - o196;
            o194 = o186.o684.o196.o105 + o200 - o184.o684.o196.o105 - o180
        }
        this.o1164.o361.o214 = o190 + o203;
        this.o1164.o362.o214 = 0;
        this.o1164.o361.o105 = 0;
        this.o1164.o362.o105 = o190 + o203;
        this.o1165.o361.o214 = o205 * o180 * o180;
        this.o1165.o362.o214 = -o205 * o196 * o180;
        this.o1165.o361.o105 = -o205 * o196 * o180;
        this.o1165.o362.o105 = o205 * o196 * o196;
        this.o1197.o361.o214 = o207 * o200 * o200;
        this.o1197.o362.o214 = -o207 * o198 * o200;
        this.o1197.o361.o105 = -o207 * o198 * o200;
        this.o1197.o362.o105 = o207 * o198 * o198;
        this.o99.o644(this.o1164);
        this.o99.o645(this.o1165);
        this.o99.o645(this.o1197);
        this.o99.o649(o172.o1210, -o192, -o194);
        o192 = o172.o1210.o214;
        o194 = o172.o1210.o105;
        o184.o684.o196.o214 -= o184.o753 * o192;
        o184.o684.o196.o105 -= o184.o753 * o194;
        o184.o684.o194 -= o184.o754 * (o196 * o194 - o180 * o192);
        o186.o684.o196.o214 += o186.o753 * o192;
        o186.o684.o196.o105 += o186.o753 * o194;
        o186.o684.o194 += o186.o754 * (o198 * o194 - o200 * o192);
        o184.o803();
        o186.o803();
        return o182 <= o97.o611 && o188 <= o97.o624
    };
    o96.o328.push(function () {
        o96.o127.o130.o319.o1210 = new o106
    });
    o96.o110(o174, o96.o127.o130.o299);
    o174.prototype.o546 = o96.o127.o130.o299.prototype;
    o174.o321 = function () {
        o96.o127.o130.o299.o299.apply(this, arguments);
        this.o1067 = new o106;
        this.o1068 = new o106
    };
    o174.prototype.o321 = function () {
        this.o546.o299.call(this);
        this.type = o151.o1103;
        this.o1067.Set(0, 0);
        this.o1068.Set(0, 0);
        this.o1152 = this.o1209 = this.o1208 = this.o1207 = this.o1174 = 0;
        this.o1154 = this.o1153 = false
    };
    o174.prototype.o510 = function (o180, o182, o184) {
        this.o947 = o180;
        this.o948 = o182;
        this.o1067 = this.o947.o769(o184);
        this.o1068 = this.o948.o769(o184);
        this.o1174 = this.o948.o646() - this.o947.o646()
    };
    o96.o110(o176, o96.o127.o130.o297);
    o176.prototype.o546 = o96.o127.o130.o297.prototype;
    o176.o323 = function () {
        o96.o127.o130.o297.o297.apply(this, arguments);
        this.o1073 = new o106;
        this.o1074 = new o106;
        this.o1058 = new o107;
        this.o760 = new o99
    };
    o176.prototype.o996 = function () {
        return this.o945.o767(this.o1073)
    };
    o176.prototype.o997 = function () {
        return this.o944.o767(this.o1074)
    };
    o176.prototype.o1057 = function (o180) {
            if (o180 === undefined) o180 = 0;
            return new o106(o180 * this.o1058.o214, o180 * this.o1058.o105)
    };
    o176.prototype.o1059 = function (o180) {
        if (o180 === undefined) o180 = 0;
        return o180 * this.o1058.o159
    };
    o176.prototype.o323 = function (o180) {
        this.o546.o297.call(this, o180);
        this.o1073.o393(o180.o1067);
        this.o1074.o393(o180.o1068);
        this.o1201 = o180.o1174;
        this.o1058.o402();
        this.o760 = new o99
    };
    o176.prototype.o901 = function (o180) {
        var o182, o184 = 0,
            o186 = this.o945,
            o188 = this.o944;
        o182 = o186.o683.o170;
        var o190 = this.o1073.o214 - o186.o684.o674.o214,
            o192 = this.o1073.o105 - o186.o684.o674.o105;
        o184 = o182.o361.o214 * o190 + o182.o362.o214 * o192;
        o192 = o182.o361.o105 * o190 + o182.o362.o105 * o192;
        o190 = o184;
        o182 = o188.o683.o170;
        var o194 = this.o1074.o214 - o188.o684.o674.o214,
            o196 = this.o1074.o105 - o188.o684.o674.o105;
        o184 = o182.o361.o214 * o194 + o182.o362.o214 * o196;
        o196 = o182.o361.o105 * o194 + o182.o362.o105 * o196;
        o194 = o184;
        o182 = o186.o753;
        o184 = o188.o753;
        var o198 = o186.o754,
            o200 = o188.o754;
        this.o760.o361.o214 = o182 + o184 + o192 * o192 * o198 + o196 * o196 * o200;
        this.o760.o362.o214 = -o192 * o190 * o198 - o196 * o194 * o200;
        this.o760.o650.o214 = -o192 * o198 - o196 * o200;
        this.o760.o361.o105 = this.o760.o362.o214;
        this.o760.o362.o105 = o182 + o184 + o190 * o190 * o198 + o194 * o194 * o200;
        this.o760.o650.o105 = o190 * o198 + o194 * o200;
        this.o760.o361.o159 = this.o760.o650.o214;
        this.o760.o362.o159 = this.o760.o650.o105;
        this.o760.o650.o159 = o198 + o200;
        if (o180.o920) {
            this.o1058.o214 *= o180.o966;
            this.o1058.o105 *= o180.o966;
            this.o1058.o159 *= o180.o966;
            o186.o685.o214 -= o182 * this.o1058.o214;
            o186.o685.o105 -= o182 * this.o1058.o105;
            o186.o727 -= o198 * (o190 * this.o1058.o105 - o192 * this.o1058.o214 + this.o1058.o159);
            o188.o685.o214 += o184 * this.o1058.o214;
            o188.o685.o105 += o184 * this.o1058.o105;
            o188.o727 += o200 * (o194 * this.o1058.o105 - o196 * this.o1058.o214 + this.o1058.o159)
        } else this.o1058.o402()
    };
    o176.prototype.o903 = function () {
        var o180, o182 = 0,
            o184 = this.o945,
            o186 = this.o944,
            o188 = o184.o685,
            o190 = o184.o727,
            o192 = o186.o685,
            o194 = o186.o727,
            o196 = o184.o753,
            o198 = o186.o753,
            o200 = o184.o754,
            o93 = o186.o754;
        o180 = o184.o683.o170;
        var o203 = this.o1073.o214 - o184.o684.o674.o214,
            o205 = this.o1073.o105 - o184.o684.o674.o105;
        o182 = o180.o361.o214 * o203 + o180.o362.o214 * o205;
        o205 = o180.o361.o105 * o203 + o180.o362.o105 * o205;
        o203 = o182;
        o180 = o186.o683.o170;
        var o207 = this.o1074.o214 - o186.o684.o674.o214,
            o37 = this.o1074.o105 - o186.o684.o674.o105;
        o182 = o180.o361.o214 * o207 + o180.o362.o214 * o37;
        o37 = o180.o361.o105 * o207 + o180.o362.o105 * o37;
        o207 = o182;
        o180 = o192.o214 - o194 * o37 - o188.o214 + o190 * o205;
        o182 = o192.o105 + o194 * o207 - o188.o105 - o190 * o203;
        var o210 = o194 - o190,
            o212 = new o107;
        this.o760.o653(o212, -o180, -o182, -o210);
        this.o1058.o679(o212);
        o188.o214 -= o196 * o212.o214;
        o188.o105 -= o196 * o212.o105;
        o190 -= o200 * (o203 * o212.o105 - o205 * o212.o214 + o212.o159);
        o192.o214 += o198 * o212.o214;
        o192.o105 += o198 * o212.o105;
        o194 += o93 * (o207 * o212.o105 - o37 * o212.o214 + o212.o159);
        o184.o727 = o190;
        o186.o727 = o194
    };
    o176.prototype.o907 = function () {
        var o180, o182 = 0,
            o184 = this.o945,
            o186 = this.o944;
        o180 = o184.o683.o170;
        var o188 = this.o1073.o214 - o184.o684.o674.o214,
            o190 = this.o1073.o105 - o184.o684.o674.o105;
        o182 = o180.o361.o214 * o188 + o180.o362.o214 * o190;
        o190 = o180.o361.o105 * o188 + o180.o362.o105 * o190;
        o188 = o182;
        o180 = o186.o683.o170;
        var o192 = this.o1074.o214 - o186.o684.o674.o214,
            o194 = this.o1074.o105 - o186.o684.o674.o105;
        o182 = o180.o361.o214 * o192 + o180.o362.o214 * o194;
        o194 = o180.o361.o105 * o192 + o180.o362.o105 * o194;
        o192 = o182;
        o180 = o184.o753;
        o182 = o186.o753;
        var o196 = o184.o754,
            o198 = o186.o754,
            o200 = o186.o684.o196.o214 + o192 - o184.o684.o196.o214 - o188,
            o93 = o186.o684.o196.o105 + o194 - o184.o684.o196.o105 - o190,
            o203 = o186.o684.o194 - o184.o684.o194 - this.o1201,
            o205 = 10 * o97.o611,
            o207 = Math.sqrt(o200 * o200 + o93 * o93),
            o37 = o105.o540(o203);
        if (o207 > o205) {
            o196 *= 1;
            o198 *= 1
        }
        this.o760.o361.o214 = o180 + o182 + o190 * o190 * o196 + o194 * o194 * o198;
        this.o760.o362.o214 = -o190 * o188 * o196 - o194 * o192 * o198;
        this.o760.o650.o214 = -o190 * o196 - o194 * o198;
        this.o760.o361.o105 = this.o760.o362.o214;
        this.o760.o362.o105 = o180 + o182 + o188 * o188 * o196 + o192 * o192 * o198;
        this.o760.o650.o105 = o188 * o196 + o192 * o198;
        this.o760.o361.o159 = this.o760.o650.o214;
        this.o760.o362.o159 = this.o760.o650.o105;
        this.o760.o650.o159 = o196 + o198;
        o205 = new o107;
        this.o760.o653(o205, -o200, -o93, -o203);
        o184.o684.o196.o214 -= o180 * o205.o214;
        o184.o684.o196.o105 -= o180 * o205.o105;
        o184.o684.o194 -= o196 * (o188 * o205.o105 - o190 * o205.o214 + o205.o159);
        o186.o684.o196.o214 += o182 * o205.o214;
        o186.o684.o196.o105 += o182 * o205.o105;
        o186.o684.o194 += o198 * (o192 * o205.o105 - o194 * o205.o214 + o205.o159);
        o184.o803();
        o186.o803();
        return o207 <= o97.o611 && o37 <= o97.o624
    };
    o96.o110(o178, o96.o127.o130.o299);
    o178.prototype.o546 = o96.o127.o130.o299.prototype;
    o178.o325 = function () {
        o96.o127.o130.o299.o299.apply(this, arguments);
        this.o1067 = new o106;
        this.o1068 = new o106
    };
    o178.prototype.o325 = function () {
        this.o546.o299.call(this);
        this.type = o151.o1118;
        this.o1174 = 0
    };
    o178.prototype.o510 = function (o180, o182, o184) {
        this.o947 = o180;
        this.o948 = o182;
        this.o1067.o393(this.o947.o769(o184));
        this.o1068.o393(this.o948.o769(o184));
        this.o1174 = this.o948.o646() - this.o947.o646()
    }
})();
(function () {
    var o97 = o96.o127.o223;
    o97.o223 = function () {
        this.o1211 = this.o1212 = this.o1213 = this.o1214 = this.o1215 = 1;
        var o98 = this;
        this.o969 = {
            o970: {
                o971: function () {
                    o98.o1216.o1217(0, 0, o98.o1216.o1218.o1219, o98.o1216.o1218.o1220)
                }
            }
        }
    };
    o97.prototype.o1221 = function (o98, o99) {
        return "rgba(" + ((o98 & 16711680) >> 16) + "," + ((o98 & 65280) >> 8) + "," + (o98 & 255) + "," + o99 + ")"
    };
    o97.prototype.o223 = function () {
        this.o1222 = 0
    };
    o97.prototype.o838 = function (o98) {
        if (o98 === undefined) o98 = 0;
        this.o1222 = o98
    };
    o97.prototype.o839 = function () {
        return this.o1222
    };
    o97.prototype.o840 = function (o98) {
        if (o98 === undefined) o98 = 0;
        this.o1222 |= o98
    };
    o97.prototype.o841 = function (o98) {
        if (o98 === undefined) o98 = 0;
        this.o1222 &= ~o98
    };
    o97.prototype.o842 = function (o98) {
        this.o1216 = o98
    };
    o97.prototype.o843 = function () {
        return this.o1216
    };
    o97.prototype.o844 = function (o98) {
        if (o98 === undefined) o98 = 0;
        this.o1215 = o98
    };
    o97.prototype.o845 = function () {
        return this.o1215
    };
    o97.prototype.o846 = function (o98) {
        if (o98 === undefined) o98 = 0;
        this.o1214 = o98;
        this.o1216.o1223 = o98
    };
    o97.prototype.o847 = function () {
        return this.o1214
    };
    o97.prototype.o848 = function (o98) {
        if (o98 === undefined) o98 = 0;
        this.o1213 = o98
    };
    o97.prototype.o849 = function () {
        return this.o1213
    };
    o97.prototype.o850 = function (o98) {
        if (o98 === undefined) o98 = 0;
        this.o1212 = o98
    };
    o97.prototype.o851 = function () {
        return this.o1212
    };
    o97.prototype.o852 = function (o98) {
        if (o98 === undefined) o98 = 0;
        this.o1211 = o98
    };
    o97.prototype.o853 = function () {
        return this.o1211
    };
    o97.prototype.o854 = function (o98, o99, o105) {
        if (o99) {
            var o106 = this.o1216,
                o107 = this.o1215;
            o106.o1224();
            o106.o1225 = this.o1221(o105.o1226, this.o1213);
            o106.o1227(o98[0].o214 * o107, o98[0].o105 * o107);
            for (o105 = 1; o105 < o99; o105++) o106.o1228(o98[o105].o214 * o107, o98[o105].o105 * o107);
            o106.o1228(o98[0].o214 * o107, o98[0].o105 * o107);
            o106.o1229();
            o106.o1230()
        }
    };
    o97.prototype.o855 = function (o98, o99, o105) {
        if (o99) {
            var o106 = this.o1216,
                o107 = this.o1215;
            o106.o1224();
            o106.o1225 = this.o1221(o105.o1226, this.o1213);
            o106.o1231 = this.o1221(o105.o1226, this.o1212);
            o106.o1227(o98[0].o214 * o107, o98[0].o105 * o107);
            for (o105 = 1; o105 < o99; o105++) o106.o1228(o98[o105].o214 * o107, o98[o105].o105 * o107);
            o106.o1228(o98[0].o214 * o107, o98[0].o105 * o107);
            o106.o1229();
            o106.fill();
            o106.o1230()
        }
    };
    o97.prototype.o856 = function (o98, o99, o105) {
        if (o99) {
            var o106 = this.o1216,
                o107 = this.o1215;
            o106.o1224();
            o106.o1225 = this.o1221(o105.o1226, this.o1213);
            o106.o1233(o98.o214 * o107, o98.o105 * o107, o99 * o107, 0, Math.o555 * 2, true);
            o106.o1229();
            o106.o1230()
        }
    };
    o97.prototype.o857 = function (o98, o99, o105, o106) {
        if (o99) {
            var o107 = this.o1216,
                o137 = this.o1215,
                o139 = o98.o214 * o137,
                o141 = o98.o105 * o137;
            o107.o1227(0, 0);
            o107.o1224();
            o107.o1225 = this.o1221(o106.o1226, this.o1213);
            o107.o1231 = this.o1221(o106.o1226, this.o1212);
            o107.o1233(o139, o141, o99 * o137, 0, Math.o555 * 2, true);
            o107.o1227(o139, o141);
            o107.o1228((o98.o214 + o105.o214 * o99) * o137, (o98.o105 + o105.o105 * o99) * o137);
            o107.o1229();
            o107.fill();
            o107.o1230()
        }
    };
    o97.prototype.o858 = function (o98, o99, o105) {
        var o106 = this.o1216,
            o107 = this.o1215;
        o106.o1225 = this.o1221(o105.o1226, this.o1213);
        o106.o1224();
        o106.o1227(o98.o214 * o107, o98.o105 * o107);
        o106.o1228(o99.o214 * o107, o99.o105 * o107);
        o106.o1229();
        o106.o1230()
    };
    o97.prototype.o859 = function (o98) {
        var o99 = this.o1216,
            o105 = this.o1215;
        o99.o1224();
        o99.o1225 = this.o1221(16711680, this.o1213);
        o99.o1227(o98.o363.o214 * o105, o98.o363.o105 * o105);
        o99.o1228((o98.o363.o214 + this.o1211 * o98.o170.o361.o214) * o105, (o98.o363.o105 + this.o1211 * o98.o170.o361.o105) * o105);
        o99.o1225 = this.o1221(65280, this.o1213);
        o99.o1227(o98.o363.o214 * o105, o98.o363.o105 * o105);
        o99.o1228((o98.o363.o214 + this.o1211 * o98.o170.o362.o214) * o105, (o98.o363.o105 + this.o1211 * o98.o170.o362.o105) * o105);
        o99.o1229();
        o99.o1230()
    }
})();
var o63;
for (o63 = 0; o63 < o96.o328.length; ++o63) o96.o328[o63]();
delete o96.o328;

// Copyright 2013 the V8 project authors. All rights reserved.

// This program is free software; you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation; either version 2 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA

function o1234 () {
  var o1235 = o96.o126.Math.o208,
      o1236 = o96.o127.o213,
      o1237 = o96.o127.o211,
      o1238 = o96.o127.o231,
      o1239 = o96.o127.o229,
      o1240 = o96.o127.o237,
      o1241 = o96.o124.o125.o189,
      o1242 = o96.o124.o125.o191,
      o1243 = o96.o124.o125.o183;

  var o1046 = new o1235(0, -10);
  var o1244 = new o1240(o1046, true);

  var o705 = new o1242();
  o705.o602(new o1235(-40.0, 0), new o1235(40.0, 0));

  var o1245 = new o1238();
  o1245.o706 = 0.0;
  o1245.o705 = o705;
  var o1246 = new o1236();
  var o1247 = o1244.o756(o1246);
  o1247.o689(o1245);

  var o194 = .5;
  var o705 = new o1242();
  o705.o598(o194, o194);

  var o214 = new o1235(-7.0, 0.75);
  var o105 = new o1235();
  var o1248 = new o1235(0.5625, 1);
  var o1249 = new o1235(1.125, 0.0);

  for (var o63 = 0; o63 < 10; ++o63) {
    o105.Set(o214.o214, o214.o105);

    for (var o186 = 0; o186 < 5; ++o186) {
      var o1245 = new o1238();
      o1245.o706 = 5.0;
      o1245.o705 = o705;

      var o1246 = new o1236();
      o1246.type = o1237.o747;
      o1246.o363.Set(o105.o214, o105.o105);
      var o1048 = o1244.o756(o1246);
      o1048.o689(o1245);
      o105.o679(o1249);
    }

    o214.o679(o1248);
  }

  return o1244;
}

var o1244 = null;

var o1250 = new o28('Box2D', [5432788],
                                        [new o10('Box2D',
                                                       false, 
                                                       false,
                                                       60,
                                                       o1251,
                                                       o1252,
                                                       o1253,
                                                       null,
                                                       8)]);

function o1251() {
  var o1244 = o1234();
  for (var o63 = 0; o63 < 20; o63++) {
    o1244.o963(1 / 60, 10, 3);
  }
}

function o1252() {
}

function o1253() {
  o1244 = null;
  o96 = null;
}

////////////////////////////////////////////////////////////////////////////////
// Runner
////////////////////////////////////////////////////////////////////////////////

var o1254 = true;

function o51(name) {
}

function o82(name, o83) {
  o0.o1(name + " : ERROR : " +o83.o1255);
  o1254 = false;
}

function o77(name, o57) {
  if (o1254) {
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

