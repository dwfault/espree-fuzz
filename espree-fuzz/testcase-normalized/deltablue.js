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
// deltablue.js
/////////////////////////////////////////////////////////////

// Copyright 2008 the V8 project authors. All rights reserved.
// Copyright 1996 John Maloney and Mario Wolczko.

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


// This implementation of the DeltaBlue benchmark is derived
// from the Smalltalk implementation by John Maloney and Mario
// Wolczko. Some parts have been translated directly, whereas
// others have been modified more aggresively to make it feel
// more like a JavaScript program.


var o96 = new o28('DeltaBlue', [66118], [
  new o10('DeltaBlue', true, false, 4400, o97)
]);


/**
 * A JavaScript implementation of the DeltaBlue constraint-solving
 * algorithm, as described in:
 *
 * "The DeltaBlue Algorithm: An Incremental Constraint Hierarchy Solver"
 *   Bjorn N. Freeman-Benson and John Maloney
 *   January 1990 Communications of the ACM,
 *   also available as University of Washington TR 89-08-06.
 *
 * Beware: this benchmark is written in a grotesque style where
 * the constraint model is built by side-effects from constructors.
 * I've kept it this way to avoid deviating too much from the original
 * implementation.
 */


/* --- O b j e c t   M o d e l --- */

Object.defineProperty(Object.prototype, "inheritsFrom", {
  
  value: function (o100) {
    function o101() { }
    o101.prototype = o100.prototype;
    this.prototype = new o101();
    this.o102 = o100;
  }
});

function o103() {
  this.o104 = new Array();
}

o103.prototype.add = function (o107) {
  this.o104.push(o107);
}

o103.prototype.at = function (index) {
  return this.o104[index];
}

o103.prototype.o109 = function () {
  return this.o104.length;
}

o103.prototype.o110 = function () {
  return this.o104.pop();
}

o103.prototype.o112 = function (o107) {
  var index = 0, o113 = 0;
  for (var o63 = 0; o63 < this.o104.length; o63++) {
    var value = this.o104[o63];
    if (value != o107) {
      this.o104[index] = value;
      index++;
    } else {
      o113++;
    }
  }
  for (var o63 = 0; o63 < o113; o63++)
    this.o104.pop();
}

/* --- *
 * S t r e n g t h
 * --- */

/**
 * Strengths are used to measure the relative importance of constraints.
 * New strengths may be inserted in the strength hierarchy without
 * disrupting current constraints.  Strengths cannot be created outside
 * this class, so pointer comparison can be used for value comparison.
 */
function o114(o115, name) {
  this.o115 = o115;
  this.name = name;
}

o114.o116 = function (o117, o118) {
  return o117.o115 < o118.o115;
}

o114.o119 = function (o117, o118) {
  return o117.o115 > o118.o115;
}

o114.o120 = function (o117, o118) {
  return this.o119(o117, o118) ? o117 : o118;
}

o114.o121 = function (o117, o118) {
  return this.o116(o117, o118) ? o117 : o118;
}

o114.prototype.o122 = function () {
  switch (this.o115) {
    case 0: return o114.o123;
    case 1: return o114.o124;
    case 2: return o114.o125;
    case 3: return o114.o126;
    case 4: return o114.o127;
    case 5: return o114.o128;
  }
}

// Strength constants.
o114.o128        = new o114(0, "required");
o114.o129 = new o114(1, "strongPreferred");
o114.o127       = new o114(2, "preferred");
o114.o126  = new o114(3, "strongDefault");
o114.o125          = new o114(4, "normal");
o114.o124    = new o114(5, "weakDefault");
o114.o123         = new o114(6, "weakest");

/* --- *
 * C o n s t r a i n t
 * --- */

/**
 * An abstract class representing a system-maintainable relationship
 * (or "constraint") between a set of variables. A constraint supplies
 * a strength instance variable; concrete subclasses provide a means
 * of storing the constrained variables and other information required
 * to represent a constraint.
 */
function o130(o131) {
  this.o131 = o131;
}

/**
 * Activate this constraint and attempt to satisfy it.
 */
o130.prototype.o132 = function () {
  this.o133();
  o134.o135(this);
}

/**
 * Attempt to find a way to enforce this constraint. If successful,
 * record the solution, perhaps modifying the current dataflow
 * graph. Answer the constraint that this constraint overrides, if
 * there is one, or nil, if there isn't.
 * Assume: I am not already satisfied.
 */
o130.prototype.o136 = function (o137) {
  this.o138(o137);
  if (!this.o139()) {
    if (this.o131 == o114.o128)
      o36("Could not satisfy a required constraint!");
    return null;
  }
  this.o140(o137);
  var o141 = this.o142();
  var o143 = o141.o144;
  if (o143 != null) o143.o145();
  o141.o144 = this;
  if (!o134.o146(this, o137))
    o36("Cycle encountered");
  o141.o137 = o137;
  return o143;
}

o130.prototype.o147 = function () {
  if (this.o139()) o134.o148(this);
  else this.o149();
}

/**
 * Normal constraints are not input constraints.  An input constraint
 * is one that depends on external state, such as the mouse, the
 * keybord, a clock, or some arbitraty piece of imperative code.
 */
o130.prototype.o150 = function () {
  return false;
}

/* --- *
 * U n a r y   C o n s t r a i n t
 * --- */

/**
 * Abstract superclass for constraints having a single possible output
 * variable.
 */
function o151(o152, o131) {
  o151.o102.call(this, o131);
  this.o154 = o152;
  this.o155 = false;
  this.o132();
}

o151.o156(o130);

/**
 * Adds this constraint to the constraint graph
 */
o151.prototype.o133 = function () {
  this.o154.o132(this);
  this.o155 = false;
}

/**
 * Decides if this constraint can be satisfied and records that
 * decision.
 */
o151.prototype.o138 = function (o137) {
  this.o155 = (this.o154.o137 != o137)
    && o114.o116(this.o131, this.o154.o157);
}

/**
 * Returns true if this constraint is satisfied in the current solution.
 */
o151.prototype.o139 = function () {
  return this.o155;
}

o151.prototype.o140 = function (o137) {
  // has no inputs
}

/**
 * Returns the current output variable.
 */
o151.prototype.o142 = function () {
  return this.o154;
}

/**
 * Calculate the walkabout strength, the stay flag, and, if it is
 * 'stay', the value for the current output of this constraint. Assume
 * this constraint is satisfied.
 */
o151.prototype.o158 = function () {
  this.o154.o157 = this.o131;
  this.o154.o159 = !this.o150();
  if (this.o154.o159) this.o160(); // Stay optimization
}

/**
 * Records that this constraint is unsatisfied
 */
o151.prototype.o145 = function () {
  this.o155 = false;
}

o151.prototype.o161 = function () {
  return true;
}

o151.prototype.o149 = function () {
  if (this.o154 != null) this.o154.o162(this);
  this.o155 = false;
}

/* --- *
 * S t a y   C o n s t r a i n t
 * --- */

/**
 * Variables that should, with some level of preference, stay the same.
 * Planners may exploit the fact that instances, if satisfied, will not
 * change their output during plan execution.  This is called "stay
 * optimization".
 */
function o163(o152, o164) {
  o163.o102.call(this, o152, o164);
}

o163.o156(o151);

o163.prototype.o160 = function () {
  // Stay constraints do nothing
}

/* --- *
 * E d i t   C o n s t r a i n t
 * --- */

/**
 * A unary input constraint used to mark a variable that the client
 * wishes to change.
 */
function o165(o152, o164) {
  o165.o102.call(this, o152, o164);
}

o165.o156(o151);

/**
 * Edits indicate that a variable is to be changed by imperative code.
 */
o165.prototype.o150 = function () {
  return true;
}

o165.prototype.o160 = function () {
  // Edit constraints do nothing
}

/* --- *
 * B i n a r y   C o n s t r a i n t
 * --- */

var o166 = new Object();
o166.o167     = 0;
o166.o168  = 1;
o166.o169 = -1;

/**
 * Abstract superclass for constraints having two possible output
 * variables.
 */
function o170(o171, o172, o131) {
  o170.o102.call(this, o131);
  this.o173 = o171;
  this.o174 = o172;
  this.o175 = o166.o167;
  this.o132();
}

o170.o156(o130);

/**
 * Decides if this constraint can be satisfied and which way it
 * should flow based on the relative strength of the variables related,
 * and record that decision.
 */
o170.prototype.o138 = function (o137) {
  if (this.o173.o137 == o137) {
    this.o175 = (this.o174.o137 != o137 && o114.o116(this.o131, this.o174.o157))
      ? o166.o168
      : o166.o167;
  }
  if (this.o174.o137 == o137) {
    this.o175 = (this.o173.o137 != o137 && o114.o116(this.o131, this.o173.o157))
      ? o166.o169
      : o166.o167;
  }
  if (o114.o119(this.o173.o157, this.o174.o157)) {
    this.o175 = o114.o116(this.o131, this.o173.o157)
      ? o166.o169
      : o166.o167;
  } else {
    this.o175 = o114.o116(this.o131, this.o174.o157)
      ? o166.o168
      : o166.o169
  }
}

/**
 * Add this constraint to the constraint graph
 */
o170.prototype.o133 = function () {
  this.o173.o132(this);
  this.o174.o132(this);
  this.o175 = o166.o167;
}

/**
 * Answer true if this constraint is satisfied in the current solution.
 */
o170.prototype.o139 = function () {
  return this.o175 != o166.o167;
}

/**
 * Mark the input variable with the given mark.
 */
o170.prototype.o140 = function (o137) {
  this.input().o137 = o137;
}

/**
 * Returns the current input variable
 */
o170.prototype.input = function () {
  return (this.o175 == o166.o168) ? this.o173 : this.o174;
}

/**
 * Returns the current output variable
 */
o170.prototype.o142 = function () {
  return (this.o175 == o166.o168) ? this.o174 : this.o173;
}

/**
 * Calculate the walkabout strength, the stay flag, and, if it is
 * 'stay', the value for the current output of this
 * constraint. Assume this constraint is satisfied.
 */
o170.prototype.o158 = function () {
  var o177 = this.input(), o141 = this.o142();
  o141.o157 = o114.o120(this.o131, o177.o157);
  o141.o159 = o177.o159;
  if (o141.o159) this.o160();
}

/**
 * Record the fact that this constraint is unsatisfied.
 */
o170.prototype.o145 = function () {
  this.o175 = o166.o167;
}

o170.prototype.o161 = function (o137) {
  var o63 = this.input();
  return o63.o137 == o137 || o63.o159 || o63.o144 == null;
}

o170.prototype.o149 = function () {
  if (this.o173 != null) this.o173.o162(this);
  if (this.o174 != null) this.o174.o162(this);
  this.o175 = o166.o167;
}

/* --- *
 * S c a l e   C o n s t r a i n t
 * --- */

/**
 * Relates two variables by the linear scaling relationship: "v2 =
 * (v1 * scale) + offset". Either v1 or v2 may be changed to maintain
 * this relationship but the scale factor and offset are considered
 * read-only.
 */
function o178(o179, o180, o181, o182, o131) {
  this.o175 = o166.o167;
  this.o180 = o180;
  this.o181 = o181;
  o178.o102.call(this, o179, o182, o131);
}

o178.o156(o170);

/**
 * Adds this constraint to the constraint graph.
 */
o178.prototype.o133 = function () {
  o178.o102.prototype.o133.call(this);
  this.o180.o132(this);
  this.o181.o132(this);
}

o178.prototype.o149 = function () {
  o178.o102.prototype.o149.call(this);
  if (this.o180 != null) this.o180.o162(this);
  if (this.o181 != null) this.o181.o162(this);
}

o178.prototype.o140 = function (o137) {
  o178.o102.prototype.o140.call(this, o137);
  this.o180.o137 = this.o181.o137 = o137;
}

/**
 * Enforce this constraint. Assume that it is satisfied.
 */
o178.prototype.o160 = function () {
  if (this.o175 == o166.o168) {
    this.o174.value = this.o173.value * this.o180.value + this.o181.value;
  } else {
    this.o173.value = (this.o174.value - this.o181.value) / this.o180.value;
  }
}

/**
 * Calculate the walkabout strength, the stay flag, and, if it is
 * 'stay', the value for the current output of this constraint. Assume
 * this constraint is satisfied.
 */
o178.prototype.o158 = function () {
  var o177 = this.input(), o141 = this.o142();
  o141.o157 = o114.o120(this.o131, o177.o157);
  o141.o159 = o177.o159 && this.o180.o159 && this.o181.o159;
  if (o141.o159) this.o160();
}

/* --- *
 * E q u a l i t  y   C o n s t r a i n t
 * --- */

/**
 * Constrains two variables to have the same value.
 */
function o183(o171, o172, o131) {
  o183.o102.call(this, o171, o172, o131);
}

o183.o156(o170);

/**
 * Enforce this constraint. Assume that it is satisfied.
 */
o183.prototype.o160 = function () {
  this.o142().value = this.input().value;
}

/* --- *
 * V a r i a b l e
 * --- */

/**
 * A constrained variable. In addition to its value, it maintain the
 * structure of the constraint graph, the current dataflow graph, and
 * various parameters of interest to the DeltaBlue incremental
 * constraint solver.
 **/
function o184(name, o185) {
  this.value = o185 || 0;
  this.o186 = new o103();
  this.o144 = null;
  this.o137 = 0;
  this.o157 = o114.o123;
  this.o159 = true;
  this.name = name;
}

/**
 * Add the given constraint to the set of all constraints that refer
 * this variable.
 */
o184.prototype.o132 = function (o187) {
  this.o186.add(o187);
}

/**
 * Removes all traces of c from this variable.
 */
o184.prototype.o162 = function (o187) {
  this.o186.o112(o187);
  if (this.o144 == o187) this.o144 = null;
}

/* --- *
 * P l a n n e r
 * --- */

/**
 * The DeltaBlue planner
 */
function o188() {
  this.o189 = 0;
}

/**
 * Attempt to satisfy the given constraint and, if successful,
 * incrementally update the dataflow graph.  Details: If satifying
 * the constraint is successful, it may override a weaker constraint
 * on its output. The algorithm attempts to resatisfy that
 * constraint using some other method. This process is repeated
 * until either a) it reaches a variable that was not previously
 * determined by any constraint or b) it reaches a constraint that
 * is too weak to be satisfied using any of its methods. The
 * variables of constraints that have been processed are marked with
 * a unique mark value so that we know where we've been. This allows
 * the algorithm to avoid getting into an infinite loop even if the
 * constraint graph has an inadvertent cycle.
 */
o188.prototype.o135 = function (o187) {
  var o137 = this.o190();
  var o143 = o187.o136(o137);
  while (o143 != null)
    o143 = o143.o136(o137);
}

/**
 * Entry point for retracting a constraint. Remove the given
 * constraint and incrementally update the dataflow graph.
 * Details: Retracting the given constraint may allow some currently
 * unsatisfiable downstream constraint to be satisfied. We therefore collect
 * a list of unsatisfied downstream constraints and attempt to
 * satisfy each one in turn. This list is traversed by constraint
 * strength, strongest first, as a heuristic for avoiding
 * unnecessarily adding and then overriding weak constraints.
 * Assume: c is satisfied.
 */
o188.prototype.o148 = function (o187) {
  var o141 = o187.o142();
  o187.o145();
  o187.o149();
  var o191 = this.o192(o141);
  var o131 = o114.o128;
  do {
    for (var o63 = 0; o63 < o191.o109(); o63++) {
      var o193 = o191.at(o63);
      if (o193.o131 == o131)
        this.o135(o193);
    }
    o131 = o131.o122();
  } while (o131 != o114.o123);
}

/**
 * Select a previously unused mark value.
 */
o188.prototype.o190 = function () {
  return ++this.o189;
}

/**
 * Extract a plan for resatisfaction starting from the given source
 * constraints, usually a set of input constraints. This method
 * assumes that stay optimization is desired; the plan will contain
 * only constraints whose output variables are not stay. Constraints
 * that do no computation, such as stay and edit constraints, are
 * not included in the plan.
 * Details: The outputs of a constraint are marked when it is added
 * to the plan under construction. A constraint may be appended to
 * the plan when all its input variables are known. A variable is
 * known if either a) the variable is marked (indicating that has
 * been computed by a constraint appearing earlier in the plan), b)
 * the variable is 'stay' (i.e. it is a constant at plan execution
 * time), or c) the variable is not determined by any
 * constraint. The last provision is for past states of history
 * variables, which are not stay but which are also not computed by
 * any constraint.
 * Assume: sources are all satisfied.
 */
o188.prototype.o194 = function (o195) {
  var o137 = this.o190();
  var o196 = new o197();
  var o198 = o195;
  while (o198.o109() > 0) {
    var o187 = o198.o110();
    if (o187.o142().o137 != o137 && o187.o161(o137)) {
      o196.o132(o187);
      o187.o142().o137 = o137;
      this.o199(o187.o142(), o198);
    }
  }
  return o196;
}

/**
 * Extract a plan for resatisfying starting from the output of the
 * given constraints, usually a set of input constraints.
 */
o188.prototype.o200 = function (o186) {
  var o195 = new o103();
  for (var o63 = 0; o63 < o186.o109(); o63++) {
    var o187 = o186.at(o63);
    if (o187.o150() && o187.o139())
      // not in plan already and eligible for inclusion
      o195.add(o187);
  }
  return this.o194(o195);
}

/**
 * Recompute the walkabout strengths and stay flags of all variables
 * downstream of the given constraint and recompute the actual
 * values of all variables whose stay flag is true. If a cycle is
 * detected, remove the given constraint and answer
 * false. Otherwise, answer true.
 * Details: Cycles are detected when a marked variable is
 * encountered downstream of the given constraint. The sender is
 * assumed to have marked the inputs of the given constraint with
 * the given mark. Thus, encountering a marked node downstream of
 * the output constraint means that there is a path from the
 * constraint's output to one of its inputs.
 */
o188.prototype.o146 = function (o187, o137) {
  var o198 = new o103();
  o198.add(o187);
  while (o198.o109() > 0) {
    var o201 = o198.o110();
    if (o201.o142().o137 == o137) {
      this.o148(o187);
      return false;
    }
    o201.o158();
    this.o199(o201.o142(), o198);
  }
  return true;
}


/**
 * Update the walkabout strengths and stay flags of all variables
 * downstream of the given constraint. Answer a collection of
 * unsatisfied constraints sorted in order of decreasing strength.
 */
o188.prototype.o192 = function (o141) {
  o141.o144 = null;
  o141.o157 = o114.o123;
  o141.o159 = true;
  var o191 = new o103();
  var o198 = new o103();
  o198.add(o141);
  while (o198.o109() > 0) {
    var o152 = o198.o110();
    for (var o63 = 0; o63 < o152.o186.o109(); o63++) {
      var o187 = o152.o186.at(o63);
      if (!o187.o139())
        o191.add(o187);
    }
    var o202 = o152.o144;
    for (var o63 = 0; o63 < o152.o186.o109(); o63++) {
      var next = o152.o186.at(o63);
      if (next != o202 && next.o139()) {
        next.o158();
        o198.add(next.o142());
      }
    }
  }
  return o191;
}

o188.prototype.o199 = function (o152, o204) {
  var o202 = o152.o144;
  var o205 = o152.o186;
  for (var o63 = 0; o63 < o205.o109(); o63++) {
    var o187 = o205.at(o63);
    if (o187 != o202 && o187.o139())
      o204.add(o187);
  }
}

/* --- *
 * P l a n
 * --- */

/**
 * A Plan is an ordered list of constraints to be executed in sequence
 * to resatisfy all currently satisfiable constraints in the face of
 * one or more changing inputs.
 */
function o197() {
  this.o152 = new o103();
}

o197.prototype.o132 = function (o187) {
  this.o152.add(o187);
}

o197.prototype.o109 = function () {
  return this.o152.o109();
}

o197.prototype.o206 = function (index) {
  return this.o152.at(index);
}

o197.prototype.o160 = function () {
  for (var o63 = 0; o63 < this.o109(); o63++) {
    var o187 = this.o206(o63);
    o187.o160();
  }
}

/* --- *
 * M a i n
 * --- */

/**
 * This is the standard DeltaBlue benchmark. A long chain of equality
 * constraints is constructed with a stay constraint on one end. An
 * edit constraint is then added to the opposite end and the time is
 * measured for adding and removing this constraint, and extracting
 * and executing a constraint satisfaction plan. There are two cases.
 * In case 1, the added constraint is stronger than the stay
 * constraint and values must propagate down the entire length of the
 * chain. In case 2, the added constraint is weaker than the stay
 * constraint so it cannot be accomodated. The cost in this case is,
 * of course, very low. Typical situations lie somewhere between these
 * two extremes.
 */
function o207(o208) {
  o134 = new o188();
  var o209 = null, o210 = null, o211 = null;

  // Build chain of n equality constraints
  for (var o63 = 0; o63 <= o208; o63++) {
    var name = "v" + o63;
    var o152 = new o184(name);
    if (o209 != null)
      new o183(o209, o152, o114.o128);
    if (o63 == 0) o210 = o152;
    if (o63 == o208) o211 = o152;
    o209 = o152;
  }

  new o163(o211, o114.o126);
  var o212 = new o165(o210, o114.o127);
  var o213 = new o103();
  o213.add(o212);
  var o196 = o134.o200(o213);
  for (var o63 = 0; o63 < 100; o63++) {
    o210.value = o63;
    o196.o160();
    if (o211.value != o63)
      o36("Chain test failed.");
  }
}

/**
 * This test constructs a two sets of variables related to each
 * other by a simple linear transformation (scale and offset). The
 * time is measured to change a variable on either side of the
 * mapping and to change the scale and offset factors.
 */
function o214(o208) {
  o134 = new o188();
  var o180 = new o184("scale", 10);
  var o181 = new o184("offset", 1000);
  var o179 = null, o215 = null;

  var o216 = new o103();
  for (var o63 = 0; o63 < o208; o63++) {
    o179 = new o184("src" + o63, o63);
    o215 = new o184("dst" + o63, o63);
    o216.add(o215);
    new o163(o179, o114.o125);
    new o178(o179, o180, o181, o215, o114.o128);
  }

  o217(o179, 17);
  if (o215.value != 1170) o36("Projection 1 failed");
  o217(o215, 1050);
  if (o179.value != 5) o36("Projection 2 failed");
  o217(o180, 5);
  for (var o63 = 0; o63 < o208 - 1; o63++) {
    if (o216.at(o63).value != o63 * 5 + 1000)
      o36("Projection 3 failed");
  }
  o217(o181, 2000);
  for (var o63 = 0; o63 < o208 - 1; o63++) {
    if (o216.at(o63).value != o63 * 5 + 2000)
      o36("Projection 4 failed");
  }
}

function o217(o152, o218) {
  var o212 = new o165(o152, o114.o127);
  var o213 = new o103();
  o213.add(o212);
  var o196 = o134.o200(o213);
  for (var o63 = 0; o63 < 10; o63++) {
    o152.value = o218;
    o196.o160();
  }
  o212.o147();
}

// Global variable holding the current planner.
var o134 = null;

function o97() {
  o207(100);
  o214(100);
}

////////////////////////////////////////////////////////////////////////////////
// Runner
////////////////////////////////////////////////////////////////////////////////

var o219 = true;

function o51(name) {
}

function o82(name, o83) {
  o0.o1(name + " : ERROR : " +o83.o220);
  o219 = false;
}

function o77(name, o57) {
  if (o219) {
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
