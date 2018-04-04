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
// earley-boyer.js
/////////////////////////////////////////////////////////////

// This file is automatically generated by scheme2js, except for the
// benchmark harness code at the beginning and end of the file.

var o96 = new o28('EarleyBoyer', [666463], [
  new o10("Earley", true,  false, 2500, function () { o97(); }),
  new o10("Boyer", true, false, 200, function () { o98(); })
]);


/************* GENERATED FILE - DO NOT EDIT *************/
/************* GENERATED FILE - DO NOT EDIT *************/
/************* GENERATED FILE - DO NOT EDIT *************/
/************* GENERATED FILE - DO NOT EDIT *************/
/************* GENERATED FILE - DO NOT EDIT *************/
/************* GENERATED FILE - DO NOT EDIT *************/
/************* GENERATED FILE - DO NOT EDIT *************/
/************* GENERATED FILE - DO NOT EDIT *************/
/*
 * To use write/prints/... the default-output port has to be set first.
 * Simply setting SC_DEFAULT_OUT and SC_ERROR_OUT to the desired values
 * should do the trick.
 * In the following example the std-out and error-port are redirected to
 * a DIV.
function initRuntime() {
    function escapeHTML(s) {
        var tmp = s;
        tmp = tmp.replace(/&/g, "&amp;");
        tmp = tmp.replace(/</g, "&lt;");
        tmp = tmp.replace(/>/g, "&gt;");
        tmp = tmp.replace(/ /g, "&nbsp;");
        tmp = tmp.replace(/\n/g, "<br />");
        tmp = tmp.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp");
        return tmp;
        
    }

    document.write("<div id='stdout'></div>");
    SC_DEFAULT_OUT = new sc_GenericOutputPort(
        function(s) {
            var stdout = document.getElementById('stdout');
            stdout.innerHTML = stdout.innerHTML + escapeHTML(s);
    });
    SC_ERROR_OUT = SC_DEFAULT_OUT;
}
*/


function o99() {
    o100.apply(null, arguments);
}
/*** META ((export *js*)) */
var o103 = this;

var o104=-1;
var o105="";

/*** META ((export #t)) */
function o106() {
   var o107 = arguments.length;
   var o37 = "";
   var o63;

   for( o63 = 0; o63 < o107; o63++ ) {
       o37 += o108(arguments[ o63 ]);
   }

   return o36( o37 );
}

/*** META ((export #t)) */
function o109( o110 ) {
   return typeof o110;
}

/*** META ((export #t)) */
function o111() {
    var o112 = [o113("*error*")];
    for (var o63 = 0; o63 < arguments.length; o63++) {
        o112[o63+1] = arguments[o63];
    }
    throw o112;
}

/*** META ((export #t)
           (peephole (prefix "throw ")))
*/
function o114(o115) {
    throw o115;
}

/*** META ((export with-handler-lambda)) */
function o116(o117, o118) {
    try {
        return o118();
    } catch(o93) {
        if (!o93.o119)
            return o117(o93);
        else
            throw o93;
    }
}

var o120 = new Object();

/*** META ((export #t)) */
function o122(o123, key, o125) {
    var o126 = o120[o123];
    if (!o126) {
        o126 = new Object();
        o120[o123] = o126;
    }
    o126[key] = o125;
}

/*** META ((export #t)) */
function o127(o123, key) {
    var o126 = o120[o123];
    if (o126) {
        if (key in o126)
            return o126[key];
        else
            return false;
    } else
        return false;
}

/*** META ((export #t)) */
function o128(o123, key) {
    var o126 = o120[o123];
    if (o126)
        delete o126[key];
}

/*** META ((export #t)) */
function o129(o130) {
    return o131(o108(o130));
}

/*** META ((export #t)
           (peephole (infix 2 2 "==="))
           (type bool))
*/
function o132(o133, o134) {
    return (o133 === o134);
}

/*** META ((export #t)
           (peephole (infix 2 2 "==="))
           (type bool))
*/
function o135(o133, o134) {
    return (o133 === o134);
}

/*** META ((export #t)
           (type bool))
*/
function o136(o137) {
    return (typeof o137 === "number");
}

/*** META ((export #t)
           (type bool))
*/
function o138(o137) {
    return o136(o137);
}

/*** META ((export #t)
           (type bool))
*/
function o139(o137) {
    return o136(o137);
}

/*** META ((export #t)
           (type bool))
*/
function o140(o137) {
    return o139(o137);
}

/*** META ((export #t)
           (type bool))
*/
function o141(o137) {
    return (parseInt(o137) === o137);
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix ", false")))
*/
// we don't have exact numbers...
function o143(o137) {
    return false;
}

/*** META ((export #t)
           (peephole (postfix ", true"))
           (type bool))
*/
function o144(o137) {
    return true;
}

/*** META ((export = =fx =fl)
           (type bool)
           (peephole (infix 2 2 "===")))
*/
function o145(o110) {
    for (var o63 = 1; o63 < arguments.length; o63++)
        if (o110 !== arguments[o63])
            return false;
    return true;
}

/*** META ((export < <fx <fl)
           (type bool)
           (peephole (infix 2 2 "<")))
*/
function o146(o110) {
    for (var o63 = 1; o63 < arguments.length; o63++) {
        if (o110 >= arguments[o63])
            return false;
        o110 = arguments[o63];
    }
    return true;
}

/*** META ((export > >fx >fl)
           (type bool)
           (peephole (infix 2 2 ">")))
*/
function o147(o110, o148) {
    for (var o63 = 1; o63 < arguments.length; o63++) {
        if (o110 <= arguments[o63])
            return false;
        o110 = arguments[o63];
    }
    return true;
}

/*** META ((export <= <=fx <=fl)
           (type bool)
           (peephole (infix 2 2 "<=")))
*/
function o149(o110, o148) {
    for (var o63 = 1; o63 < arguments.length; o63++) {
        if (o110 > arguments[o63])
            return false;
        o110 = arguments[o63];
    }
    return true;
}

/*** META ((export >= >=fl >=fx)
           (type bool)
           (peephole (infix 2 2 ">=")))
*/
function o150(o110, o148) {
    for (var o63 = 1; o63 < arguments.length; o63++) {
        if (o110 < arguments[o63])
            return false;
        o110 = arguments[o63];
    }
    return true;
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix "=== 0")))
*/
function o151(o110) {
    return (o110 === 0);
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix "> 0")))
*/
function o152(o110) {
    return (o110 > 0);
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix "< 0")))
*/
function o153(o110) {
    return (o110 < 0);
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix "%2===1")))
*/
function o154(o110) {
    return (o110 % 2 === 1);
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix "%2===0")))
*/
function o155(o110) {
    return (o110 % 2 === 0);
}

/*** META ((export #t)) */
var o156 = Math.o157;
/*** META ((export #t)) */
var o158 = Math.o159;

/*** META ((export + +fx +fl)
           (peephole (infix 0 #f "+" "0")))
*/
function o160() {
    var o161 = 0;
    for (var o63 = 0; o63 < arguments.length; o63++)
        o161 += arguments[o63];
    return o161;
}

/*** META ((export * *fx *fl)
           (peephole (infix 0 #f "*" "1")))
*/
function o162() {
    var o163 = 1;
    for (var o63 = 0; o63 < arguments.length; o63++)
        o163 *= arguments[o63];
    return o163;
}

/*** META ((export - -fx -fl)
           (peephole (minus)))
*/
function o164(o110) {
    if (arguments.length === 1)
        return -o110;
    else {
        var o165 = o110;
        for (var o63 = 1; o63 < arguments.length; o63++)
            o165 -= arguments[o63];
        return o165;
    }
}

/*** META ((export / /fl)
           (peephole (div)))
*/
function o166(o110) {
    if (arguments.length === 1)
        return 1/o110;
    else {
        var o165 = o110;
        for (var o63 = 1; o63 < arguments.length; o63++)
            o165 /= arguments[o63];
        return o165;
    }
}

/*** META ((export #t)) */
var o167 = Math.abs;

/*** META ((export quotient /fx)
           (peephole (hole 2 "parseInt(" x "/" y ")")))
*/
function o169(o110, o148) {
    return parseInt(o110 / o148);
}

/*** META ((export #t)
           (peephole (infix 2 2 "%")))
*/
function o170(o110, o148) {
    return o110 % o148;
}

/*** META ((export #t)
           (peephole (modulo)))
*/
function o171(o110, o148) {
    var o172 = o110 % o148;
    // if they don't have the same sign
    if ((o172 * o148) < 0)
        return o172 + o148;
    else
        return o172;
}

function o173(o112, o174) {
    var o175;
    if (o112 === 0) return o174;
    if (o174 === 0) return o112;
    if (o112 < 0) {o112 = -o112;};
    if (o174 < 0) {o174 = -o174;};
    if (o174 > o112) {o175 = o112; o112 = o174; o174 = o175;};
    while (true) {
        o112 %= o174;
        if(o112 === 0) {return o174;};
        o174 %= o112;
        if(o174 === 0) {return o112;};
    };
    return o174;
}

/*** META ((export #t)) */
function o176() {
    var o177 = 0;
    for (var o63 = 0; o63 < arguments.length; o63++)
        o177 = o173(o177, arguments[o63]);
    return o177;
}

/*** META ((export #t)) */
function o178() {
    var o179 = 1;
    for (var o63 = 0; o63 < arguments.length; o63++) {
        var o180 = Math.o181(arguments[o63] / o173(arguments[o63], o179));
        o179 *= Math.abs(o180);
    }
    return o179;
}

// LIMITATION: numerator and denominator don't make sense in floating point world.
//var SC_MAX_DECIMALS = 1000000
//
// function sc_numerator(x) {
//     var rounded = Math.round(x * SC_MAX_DECIMALS);
//     return Math.round(rounded / sc_euclid_gcd(rounded, SC_MAX_DECIMALS));
// }

// function sc_denominator(x) {
//     var rounded = Math.round(x * SC_MAX_DECIMALS);
//     return Math.round(SC_MAX_DECIMALS / sc_euclid_gcd(rounded, SC_MAX_DECIMALS));
// }

/*** META ((export #t)) */
var o182 = Math.floor;
/*** META ((export #t)) */
var o184 = Math.ceil;
/*** META ((export #t)) */
var o186 = parseInt;
/*** META ((export #t)) */
var o187 = Math.o181;

// LIMITATION: sc_rationalize doesn't make sense in a floating point world.

/*** META ((export #t)) */
var o188 = Math.o189;
/*** META ((export #t)) */
var o190 = Math.o65;
/*** META ((export #t)) */
var o191 = Math.sin;
/*** META ((export #t)) */
var o193 = Math.cos;
/*** META ((export #t)) */
var o195 = Math.tan;
/*** META ((export #t)) */
var o197 = Math.o198;
/*** META ((export #t)) */
var o199 = Math.acos;
/*** META ((export #t)) */
var o201 = Math.o202;

/*** META ((export #t)) */
var o203 = Math.sqrt;
/*** META ((export #t)) */
var o205 = Math.o66;

// LIMITATION: we don't have complex numbers.
// LIMITATION: the following functions are hence not implemented.
// LIMITATION: make-rectangular, make-polar, real-part, imag-part, magnitude, angle
// LIMITATION: 2 argument atan

/*** META ((export #t)
           (peephole (id)))
*/
function o206(o110) {
    return o110;
}

/*** META ((export #t)
           (peephole (id)))
*/
function o207(o110) {
    return o110;
}

function o208(o110, o209) {
    if (o209)
        return o110.toString(o209);
    else
        return o110.toString();
}

function o211(o37, o209) {
    if (o37 === "") return false;

    if (o209) {
        var o212 = parseInt(o37, o209);
        if (!o212 && o212 !== 0) return false;
        // verify that each char is in range. (parseInt ignores leading
        // white and trailing chars)
        var o213 = "01234567890abcdefghijklmnopqrstuvwxyz".substring(0, o209+1);
        if ((new RegExp("^["+o213+"]*$", "i")).test(o37))
            return o212;
        else return false;
    } else {
        var o212 = +o37; // does not ignore trailing chars.
        if (!o212 && o212 !== 0) return false;
        // simply verify that first char is not whitespace.
        var o217 = o37.charAt(0);
        // if +c is 0, but the char is not "0", then we have a whitespace.
        if (+o217 === 0 && o217 !== "0") return false;
        return o212;
    }
}

/*** META ((export #t)
           (type bool)
           (peephole (not)))
*/
function o219(o174) {
    return o174 === false;
}

/*** META ((export #t)
           (type bool))
*/
function o220(o174) {
    return (o174 === true) || (o174 === false);
}

function o221(o222, o223) {
    this.o222 = o222;
    this.o223 = o223;
}

o221.prototype.toString = function() {
    return o108(this);
};
o221.prototype.o224 = function(o225) {
    var o226 = this;

    var o165 = "(";

    while(true) {
        o165 += o225(o226.o222);
        if (o227(o226.o223)) {
            o165 += " ";
            o226 = o226.o223;
    } else if (o226.o223 !== null) {
            o165 += " . " + o225(o226.o223);
            break;
    } else // current.cdr == null
            break;
    }
        
    o165 += ")";

    return o165;
};
o221.prototype.o108 = function() {
    return this.o224(o108);
};
o221.prototype.o228 = function() {
    return this.o224(o228);
};
// sc_Pair.prototype.sc_toWriteCircleString in IO.js

/*** META ((export #t)
           (type bool)
           (peephole (postfix " instanceof sc_Pair")))
*/
function o227(o229) {
    return (o229 instanceof o221);
}

function o230(o231, o232, o233) {
    return (o233(o231.o222, o232.o222) && o233(o231.o223, o232.o223));
}

/*** META ((export #t)
           (peephole (hole 2 "new sc_Pair(" car ", " cdr ")")))
*/
function o234(o222, o223) {
    return new o221(o222, o223);
}

/*** META ((export cons*)) */
function o235() {
    var o165 = arguments[arguments.length - 1];
    for (var o63 = arguments.length-2; o63 >= 0; o63--)
        o165 = new o221(arguments[o63], o165);
    return o165;
}

/*** META ((export #t)
           (peephole (postfix ".car")))
*/
function o236(o229) {
    return o229.o222;
}

/*** META ((export #t)
           (peephole (postfix ".cdr")))
*/
function o237(o229) {
    return o229.o223;
}

/*** META ((export #t)
           (peephole (hole 2 p ".car = " val)))
*/
function o238(o229, o125) {
    o229.o222 = o125;
}

/*** META ((export #t)
           (peephole (hole 2 p ".cdr = " val)))
*/
function o239(o229, o125) {
    o229.o223 = o125;
}

/*** META ((export #t)
           (peephole (postfix ".car.car")))
*/
function o240(o229) { return o229.o222.o222; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car")))
*/
function o241(o229) { return o229.o223.o222; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr")))
*/
function o242(o229) { return o229.o222.o223; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr")))
*/
function o243(o229) { return o229.o223.o223; }
/*** META ((export #t)
           (peephole (postfix ".car.car.car")))
*/
function o244(o229) { return o229.o222.o222.o222; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr.car")))
*/
function o245(o229) { return o229.o222.o223.o222; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.car")))
*/
function o246(o229) { return o229.o223.o222.o222; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr.car")))
*/
function o247(o229) { return o229.o223.o223.o222; }
/*** META ((export #t)
           (peephole (postfix ".car.car.cdr")))
*/
function o248(o229) { return o229.o222.o222.o223; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.cdr")))
*/
function o249(o229) { return o229.o223.o222.o223; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr.cdr")))
*/
function o250(o229) { return o229.o222.o223.o223; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr.cdr")))
*/
function o251(o229) { return o229.o223.o223.o223; }
/*** META ((export #t)
           (peephole (postfix ".car.car.car.car")))
*/
function o252(o229) { return o229.o222.o222.o222.o222; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr.car.car")))
*/
function o253(o229) { return o229.o222.o223.o222.o222; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.car.car")))
*/
function o254(o229) { return o229.o223.o222.o222.o222; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr.car.car")))
*/
function o255(o229) { return o229.o223.o223.o222.o222; }
/*** META ((export #t)
           (peephole (postfix ".car.car.car.cdr")))
*/
function o256(o229) { return o229.o222.o222.o222.o223; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr.car.cdr")))
*/
function o257(o229) { return o229.o222.o223.o222.o223; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.car.cdr")))
*/
function o258(o229) { return o229.o223.o222.o222.o223; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr.car.cdr")))
*/
function o259(o229) { return o229.o223.o223.o222.o223; }
/*** META ((export #t)
           (peephole (postfix ".car.car.cdr.car")))
*/
function o260(o229) { return o229.o222.o222.o223.o222; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr.cdr.car")))
*/
function o261(o229) { return o229.o222.o223.o223.o222; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.cdr.car")))
*/
function o262(o229) { return o229.o223.o222.o223.o222; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr.cdr.car")))
*/
function o263(o229) { return o229.o223.o223.o223.o222; }
/*** META ((export #t)
           (peephole (postfix ".car.car.cdr.cdr")))
*/
function o264(o229) { return o229.o222.o222.o223.o223; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr.cdr.cdr")))
*/
function o265(o229) { return o229.o222.o223.o223.o223; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.cdr.cdr")))
*/
function o266(o229) { return o229.o223.o222.o223.o223; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr.cdr.cdr")))
*/
function o267(o229) { return o229.o223.o223.o223.o223; }

/*** META ((export #t)) */
function o268(o269) {
    if (!o227(o269)) o111("sc_lastPair: pair expected");
    var o165 = o269;
    var o223 = o269.o223;
    while (o227(o223)) {
        o165 = o223;
        o223 = o165.o223;
    }
    return o165;
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix " === null")))
*/
function o270(o130) {
    return (o130 === null);
}

/*** META ((export #t)
           (type bool))
*/
function o271(o130) {
    var o272;
    var o273;

    var o272 = o130;
    var o273 = o130;
    while (true) {
        if (o272 === null ||
            (o272 instanceof o221 && o272.o223 === null))
            return true;  // end of list
        else if ((o272 instanceof o221) &&
                 (o272.o223 instanceof o221)) {
            o272 = o272.o223.o223;
            o273 = o273.o223;
            if (o272 === o273) return false; // cycle
    } else
            return false; // not pair
    }
}

/*** META ((export #t)) */
function o274() {
    var o165 = null;
    var o112 = arguments;
    for (var o63 = o112.length-1; o63 >= 0; o63--)
        o165 = new o221(o112[o63], o165);
    return o165;
}

/*** META ((export #t)) */
function o275(o276, o277) {
   var o165 = null;
   if (!o277) o277 = 0;
   for (var o63 = o276 - 1; o63 >= 0; o63--)
      o165 = new o221(o63 + o277, o165);
   return o165;
}

/*** META ((export #t)) */
function o278(o279, fill) {
    var o165 = null;
    for (var o63 = 0; o63 < o279; o63++)
        o165 = new o221(fill, o165);
    return o165;
}

/*** META ((export #t)) */
function o281(o269) {
    var o165 = 0;
    while (o269 !== null) {
        o165++;
        o269 = o269.o223;
    }
    return o165;
}

/*** META ((export #t)) */
function o282(o130, o269) {
    var o283 = { o223 : null };
    var o284 = o283;
    while (o269 !== null) {
        if (o269.o222 !== o130) {
            o284.o223 = o234(o269.o222, null);
            o284 = o284.o223;
    }
        o269 = o269.o223;
    }
    return o283.o223;
}

/*** META ((export #t)) */
function o285(o130, o269) {
    var o283 = { o223 : null };
    var o284 = o283;
    var o286 = true;
    while (o269 !== null) {
        if (o269.o222 === o130) {
            o286 = true;
    } else {
            if (o286) {
                o284.o223 = o269;
                o286 = false;
            }
            o284 = o269;
    }
        o269 = o269.o223;
    }
    o284.o223 = null;
    return o283.o223;
}

/*** META ((export #t)) */
function o287(o130, o269) {
    var o283 = { o223 : null };
    var o284 = o283;
    while (o269 !== null) {
        if (!o288(o269.o222, o130)) {
            o284.o223 = o234(o269.o222, null);
            o284 = o284.o223;
    }
        o269 = o269.o223;
    }
    return o283.o223;
}

/*** META ((export #t)) */
function o289(o130, o269) {
    var o283 = { o223 : null };
    var o284 = o283;
    var o286 = true;
    while (o269 !== null) {
        if (o288(o269.o222, o130)) {
            o286 = true;
    } else {
            if (o286) {
                o284.o223 = o269;
                o286 = false;
            }
            o284 = o269;
    }
        o269 = o269.o223;
    }
    o284.o223 = null;
    return o283.o223;
}

function o290(o291, o292) {
    var o165 = o292;
    while (o291 !== null) {
        var o293 = o165;
        o165 = o291;
        o291 = o291.o223;
        o165.o223 = o293;
    }
    return o165;
}
        
function o294(o291, o292) {
    if (o291 === null) return o292;
    if (o292 === null) return o291;
    var o295 = o296(o291);
    return o290(o295, o292);
}

/*** META ((export #t)) */
function o297() {
    if (arguments.length === 0)
        return null;
    var o165 = arguments[arguments.length - 1];
    for (var o63 = arguments.length - 2; o63 >= 0; o63--)
        o165 = o294(arguments[o63], o165);
    return o165;
}

function o298(o291, o292) {
    if (o291 === null) return o292;
    if (o292 === null) return o291;
    var o293 = o291;
    while (o293.o223 !== null) o293=o293.o223;
    o293.o223 = o292;
    return o291;
}

/*** META ((export #t)) */
function o299() {
    var o165 = null;
    for (var o63 = 0; o63 < arguments.length; o63++)
        o165 = o298(o165, arguments[o63]);
    return o165;
}

/*** META ((export #t)) */
function o296(o291) {
    var o165 = null;
    while (o291 !== null) {
        o165 = o234(o291.o222, o165);
        o291 = o291.o223;
    }
    return o165;
}

/*** META ((export #t)) */
function o300(o269) {
    return o290(o269, null);
}

/*** META ((export #t)) */
function o301(o269, o302) {
    var o165 = o269;
    for (var o63 = 0; o63 < o302; o63++) {
        o165 = o165.o223;
    }
    return o165;
}

/*** META ((export #t)) */
function o303(o269, o302) {
    return o301(o269, o302).o222;
}

/* // unoptimized generic versions
function sc_memX(o, l, comp) {
    while (l != null) {
        if (comp(l.car, o))
            return l;
        l = l.cdr;
    }
    return false;
}
function sc_memq(o, l) { return sc_memX(o, l, sc_isEq); }
function sc_memv(o, l) { return sc_memX(o, l, sc_isEqv); }
function sc_member(o, l) { return sc_memX(o, l, sc_isEqual); }
*/

/* optimized versions */
/*** META ((export #t)) */
function o304(o130, o269) {
    while (o269 !== null) {
        if (o269.o222 === o130)
            return o269;
        o269 = o269.o223;
    }
    return false;
}
/*** META ((export #t)) */
function o305(o130, o269) {
    while (o269 !== null) {
        if (o269.o222 === o130)
            return o269;
        o269 = o269.o223;
    }
    return false;
}
/*** META ((export #t)) */
function o306(o130, o269) {
    while (o269 !== null) {
        if (o288(o269.o222,o130))
            return o269;
        o269 = o269.o223;
    }
    return false;
}

/* // generic unoptimized versions
function sc_assX(o, al, comp) {
    while (al != null) {
        if (comp(al.car.car, o))
            return al.car;
        al = al.cdr;
    }
    return false;
}
function sc_assq(o, al) { return sc_assX(o, al, sc_isEq); }
function sc_assv(o, al) { return sc_assX(o, al, sc_isEqv); }
function sc_assoc(o, al) { return sc_assX(o, al, sc_isEqual); }
*/
// optimized versions
/*** META ((export #t)) */
function o307(o130, o308) {
    while (o308 !== null) {
        if (o308.o222.o222 === o130)
            return o308.o222;
        o308 = o308.o223;
    }
    return false;
}
/*** META ((export #t)) */
function o309(o130, o308) {
    while (o308 !== null) {
        if (o308.o222.o222 === o130)
            return o308.o222;
        o308 = o308.o223;
    }
    return false;
}
/*** META ((export #t)) */
function o310(o130, o308) {
    while (o308 !== null) {
        if (o288(o308.o222.o222, o130))
            return o308.o222;
        o308 = o308.o223;
    }
    return false;
}

/* can be used for mutable strings and characters */
function o311(o312, o313) { return o312.o125 === o313.o125; }
function o314(o312, o313) { return o312.o125 < o313.o125; }
function o315(o312, o313) { return o312.o125 > o313.o125; }
function o316(o312, o313) { return o312.o125 <= o313.o125; }
function o317(o312, o313) { return o312.o125 >= o313.o125; }
function o318(o312, o313)
    { return o312.o125.toLowerCase() === o313.o125.toLowerCase(); }
function o320(o312, o313)
    { return o312.o125.toLowerCase() < o313.o125.toLowerCase(); }
function o321(o312, o313)
    { return o312.o125.toLowerCase() > o313.o125.toLowerCase(); }
function o322(o312, o313)
    { return o312.o125.toLowerCase() <= o313.o125.toLowerCase(); }
function o323(o312, o313)
    { return o312.o125.toLowerCase() >= o313.o125.toLowerCase(); }




function o324(o217) {
    var o325 = o324.o326[o217];
    if (o325)
        return o325;
    this.o125 = o217;
    o324.o326[o217] = this;
    // add return, so FF does not complain.
    return undefined;
}
o324.o326 = new Object();
// thanks to Eric
o324.o327 = {
    "\000": "#\\null",
    "\007": "#\\bell",
    "\010": "#\\backspace",
    "\011": "#\\tab",
    "\012": "#\\newline",
    "\014": "#\\page",
    "\015": "#\\return",
    "\033": "#\\escape",
    "\040": "#\\space",
    "\177": "#\\delete",

  /* poeticless names */
    "\001": "#\\soh",
    "\002": "#\\stx",
    "\003": "#\\etx",
    "\004": "#\\eot",
    "\005": "#\\enq",
    "\006": "#\\ack",

    "\013": "#\\vt",
    "\016": "#\\so",
    "\017": "#\\si",

    "\020": "#\\dle",
    "\021": "#\\dc1",
    "\022": "#\\dc2",
    "\023": "#\\dc3",
    "\024": "#\\dc4",
    "\025": "#\\nak",
    "\026": "#\\syn",
    "\027": "#\\etb",

    "\030": "#\\can",
    "\031": "#\\em",
    "\032": "#\\sub",
    "\033": "#\\esc",
    "\034": "#\\fs",
    "\035": "#\\gs",
    "\036": "#\\rs",
    "\037": "#\\us"};

o324.o328 = {
    "null": "\000",
    "bell": "\007",
    "backspace": "\010",
    "tab": "\011",
    "newline": "\012",
    "page": "\014",
    "return": "\015",
    "escape": "\033",
    "space": "\040",
    "delete": "\000",
    "soh": "\001",
    "stx": "\002",
    "etx": "\003",
    "eot": "\004",
    "enq": "\005",
    "ack": "\006",
    "bel": "\007",
    "bs": "\010",
    "ht": "\011",
    "nl": "\012",
    "vt": "\013",
    "np": "\014",
    "cr": "\015",
    "so": "\016",
    "si": "\017",
    "dle": "\020",
    "dc1": "\021",
    "dc2": "\022",
    "dc3": "\023",
    "dc4": "\024",
    "nak": "\025",
    "syn": "\026",
    "etb": "\027",
    "can": "\030",
    "em": "\031",
    "sub": "\032",
    "esc": "\033",
    "fs": "\034",
    "gs": "\035",
    "rs": "\036",
    "us": "\037",
    "sp": "\040",
    "del": "\177"};

o324.prototype.toString = function() {
    return this.o125;
};
// sc_toDisplayString == toString
o324.prototype.o228 = function() {
    var o329 = o324.o327[this.o125];
    if (o329)
        return o329;
    else
        return "#\\" + this.o125;
};

/*** META ((export #t)
           (type bool)
           (peephole (postfix "instanceof sc_Char")))
*/
function o330(o217) {
    return (o217 instanceof o324);
}

/*** META ((export char=?)
           (type bool)
           (peephole (hole 2 c1 ".val === " c2 ".val")))
*/
var o331 = o311;
/*** META ((export char<?)
           (type bool)
           (peephole (hole 2 c1 ".val < " c2 ".val")))
*/
var o332 = o314;
/*** META ((export char>?)
           (type bool)
           (peephole (hole 2 c1 ".val > " c2 ".val")))
*/
var o333 = o315;
/*** META ((export char<=?)
           (type bool)
           (peephole (hole 2 c1 ".val <= " c2 ".val")))
*/
var o334 = o316;
/*** META ((export char>=?)
           (type bool)
           (peephole (hole 2 c1 ".val >= " c2 ".val")))
*/
var o335 = o317;
/*** META ((export char-ci=?)
           (type bool)
           (peephole (hole 2 c1 ".val.toLowerCase() === " c2 ".val.toLowerCase()")))
*/
var o336 = o318;
/*** META ((export char-ci<?)
           (type bool)
           (peephole (hole 2 c1 ".val.toLowerCase() < " c2 ".val.toLowerCase()")))
*/
var o337 = o320;
/*** META ((export char-ci>?)
           (type bool)
           (peephole (hole 2 c1 ".val.toLowerCase() > " c2 ".val.toLowerCase()")))
*/
var o338 = o321;
/*** META ((export char-ci<=?)
           (type bool)
           (peephole (hole 2 c1 ".val.toLowerCase() <= " c2 ".val.toLowerCase()")))
*/
var o339 = o322;
/*** META ((export char-ci>=?)
           (type bool)
           (peephole (hole 2 c1 ".val.toLowerCase() >= " c2 ".val.toLowerCase()")))
*/
var o340 = o323;

var o341 = "0123456789";
var o342 = ' \r\n\t\f';
var o343 = 'abcdefghijklmnopqrstuvwxyz';
var o344 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function o345(o217, o346) { return (o346.indexOf(o217) != -1); }
/*** META ((export #t)
           (type bool))
*/
function o347(o217)
    { return o345(o217.o125, o343) ||
          o345(o217.o125, o344); }
/*** META ((export #t)
           (type bool)
           (peephole (hole 1 "SC_NUMBER_CLASS.indexOf(" c ".val) != -1")))
*/
function o348(o217)
    { return o345(o217.o125, o341); }
/*** META ((export #t)
           (type bool))
*/
function o349(o217) {
    var o293 = o217.o125;
    return o293 === " " || o293 === "\r" || o293 === "\n" || o293 === "\t" || o293 === "\f";
}
/*** META ((export #t)
           (type bool)
           (peephole (hole 1 "SC_UPPER_CLASS.indexOf(" c ".val) != -1")))
*/
function o350(o217)
    { return o345(o217.o125, o344); }
/*** META ((export #t)
           (type bool)
           (peephole (hole 1 "SC_LOWER_CLASS.indexOf(" c ".val) != -1")))
*/
function o351(o217)
    { return o345(o217.o125, o343); }

/*** META ((export #t)
           (peephole (postfix ".val.charCodeAt(0)")))
*/
function o352(o217)
    { return o217.o125.charCodeAt(0); }
/*** META ((export #t)
           (peephole (hole 1 "new sc_Char(String.fromCharCode(" n "))")))
*/
function o354(o137)
    { return new o324(String.fromCharCode(o137)); }

/*** META ((export #t)
           (peephole (hole 1 "new sc_Char(" c ".val.toUpperCase())")))
*/
function o357(o217)
    { return new o324(o217.o125.toUpperCase()); }
/*** META ((export #t)
           (peephole (hole 1 "new sc_Char(" c ".val.toLowerCase())")))
*/
function o359(o217)
    { return new o324(o217.o125.toLowerCase()); }

function o360(o302, o217) {
    var fill;
    if (o217 === undefined)
        fill = " ";
    else
        fill = o217;
    var o165 = "";
    var o107 = 1;
    // every round doubles the size of fill.
    while (o302 >= o107) {
        if (o302 & o107)
            o165 = o165.concat(fill);
        fill = fill.concat(fill);
        o107 *= 2;
    }
    return o165;
}

function o362(o302, o217) {
    var fill;
    if (o217)
        fill = o217.o125;
    else
        fill = " ";
    return o360(o302, fill);
}

function o363(o37) {
    var o165 = null;
    for (var o63 = o37.length - 1; o63 >= 0; o63--)
        o165 = o234(new o324(o37.charAt(o63)), o165);
    return o165;
}

function o364(o269) {
    var o112 = new Array();
    while(o269 !== null) {
        o112.push(o269.o222.o125);
        o269 = o269.o223;
    }
    return "".concat.apply("", o112);
}

var o366 = Array;

o366.prototype.o224 = function(o225) {
    if (this.length === 0) return "#()";

    var o165 = "#(" + o225(this[0]);
    for (var o63 = 1; o63 < this.length; o63++)
        o165 += " " + o225(this[o63]);
    o165 += ")";
    return o165;
};
o366.prototype.o108 = function() {
    return this.o224(o108);
};
o366.prototype.o228 = function() {
    return this.o224(o228);
};

/*** META ((export vector? array?)
           (type bool)
           (peephole (postfix " instanceof sc_Vector")))
*/
function o367(o368) {
    return (o368 instanceof o366);
}

// only applies to vectors
function o369(o370, o371, o233) {
    if (o370.length !== o371.length) return false;
    for (var o63 = 0; o63 < o370.length; o63++)
        if (!o233(o370[o63], o371[o63])) return false;
    return true;
}

/*** META ((export make-vector make-array)) */
function o372(o373, fill) {
    var o112 = new o366(o373);
    if (fill !== undefined)
        o374(o112, fill);
    return o112;
}

/*** META ((export vector array)
           (peephole (vector)))
*/
function o375() {
    var o112 = new o366();
    for (var o63 = 0; o63 < arguments.length; o63++)
        o112.push(arguments[o63]);
    return o112;
}

/*** META ((export vector-length array-length)
           (peephole (postfix ".length")))
*/
function o376(o368) {
    return o368.length;
}

/*** META ((export vector-ref array-ref)
           (peephole (hole 2 v "[" pos "]")))
*/
function o377(o368, o378) {
    return o368[o378];
}

/*** META ((export vector-set! array-set!)
           (peephole (hole 3 v "[" pos "] = " val)))
*/
function o379(o368, o378, o125) {
    o368[o378] = o125;
}

/*** META ((export vector->list array->list)) */
function o380(o112) {
    var o165 = null;
    for (var o63 = o112.length-1; o63 >= 0; o63--)
        o165 = o234(o112[o63], o165);
    return o165;
}

/*** META ((export list->vector list->array)) */
function o381(o269) {
    var o112 = new o366();
    while(o269 !== null) {
        o112.push(o269.o222);
        o269 = o269.o223;
    }
    return o112;
}

/*** META ((export vector-fill! array-fill!)) */
function o374(o112, fill) {
    for (var o63 = 0; o63 < o112.length; o63++)
        o112[o63] = fill;
}


/*** META ((export #t)) */
function o382(o112, o107) {
    if (o107 <= o112.length)
        return o112.slice(0, o107);
    else {
        var o293 = o112.concat();
        o293.length = o107;
        return o293;
    }
}

/*** META ((export #t)
           (peephole (hole 3 a ".slice(" start "," end ")")))
*/
function o384(o112, o88, o385) {
    return o112.slice(o88, o385);
}

/*** META ((export #t)) */
function o386(target, o388, source, o390, o391) {
    if (!o390) o390 = 0;
    if (!o391) o391 = source.length;

    // if target == source we don't want to overwrite not yet copied elements.
    if (o388 <= o390) {
        for (var o63 = o388, o392 = o390; o392 < o391; o63++, o392++) {
            target[o63] = source[o392];
    }
    } else {
        var o393 = o391 - o390;
        for (var o63 = o388 + o393 - 1, o392 = o391 - 1;
             o392 >= o390;
             o63--, o392--) {
            target[o63] = source[o392];
    }
    }
    return target;
}

/*** META ((export #t)
           (type bool)
           (peephole (hole 1 "typeof " o " === 'function'")))
*/
function o394(o130) {
    return (typeof o130 === "function");
}

/*** META ((export #t)) */
function o395(o396) {
    var o397 = new Array();
    // first part of arguments are not in list-form.
    for (var o63 = 1; o63 < arguments.length - 1; o63++)
        o397.push(arguments[o63]);
    var o269 = arguments[arguments.length - 1];
    while (o269 !== null) {
        o397.push(o269.o222);
        o269 = o269.o223;
    }
    return o396.apply(null, o397);
}

/*** META ((export #t)) */
function o398(o396, o291) {
    if (o291 === undefined)
        return null;
    // else
    var o399 = arguments.length - 1;
    var o400 = new Array(o399);
    var o401 = null;
    while (o291 !== null) {
        for (var o63 = 0; o63 < o399; o63++) {
            o400[o63] = arguments[o63 + 1].o222;
            arguments[o63 + 1] = arguments[o63 + 1].o223;
    }
        o401 = o234(o396.apply(null, o400), o401);
    }
    return o290(o401, null);
}

/*** META ((export #t)) */
function o402(o396, o291) {
    if (o291 === undefined)
        return null;
    // else
    var o403 = o291;
    var o399 = arguments.length - 1;
    var o400 = new Array(o399);
    while (o291 !== null) {
        var o293 = o291;
        for (var o63 = 0; o63 < o399; o63++) {
            o400[o63] = arguments[o63 + 1].o222;
            arguments[o63 + 1] = arguments[o63 + 1].o223;
    }
        o293.o222 = o396.apply(null, o400);
    }
    return o403;
}

/*** META ((export #t)) */
function o404(o396, o291) {
    if (o291 === undefined)
        return undefined;
    // else
    var o399 = arguments.length - 1;
    var o400 = new Array(o399);
    while (o291 !== null) {
        for (var o63 = 0; o63 < o399; o63++) {
            o400[o63] = arguments[o63 + 1].o222;
            arguments[o63 + 1] = arguments[o63 + 1].o223;
    }
        o396.apply(null, o400);
    }
    // add return so FF does not complain.
    return undefined;
}

/*** META ((export #t)) */
function o405(o396, o291) {
    var o283 = { o223 : null };
    var o284 = o283;
    while (o291 !== null) {
        if (o396(o291.o222) !== false) {
            o284.o223 = o234(o291.o222, null);
            o284 = o284.o223;
    }
        o291 = o291.o223;
    }
    return o283.o223;
}

/*** META ((export #t)) */
function o406(o396, o291) {
    var o407 = o234("dummy", o291);
    var o408 = o407;
    var next = o291;
    while (next !== null) {
        if (o396(next.o222) !== false) {
            o408.o223 = next
            o408 = next;
    }
        next = next.o223;
    }
    o408.o223 = null;
    return o407.o223;
}

function o410(o396, o291) {
    var o401 = null;
    while (o291 !== null) {
        var o293 = o396(o291.o222)
        if (o293 !== false) o401 = o234(o293, o401);
        o291 = o291.o223;
    }
    return o290(o401, null);
}
function o411(o396, o291, o292) {
    var o401 = null;
    while (o291 !== null) {
        var o293 = o396(o291.o222, o292.o222);
        if(o293 !== false) o401 = o234(o293, o401);
        o291 = o291.o223;
        o292 = o292.o223
    }
    return o290(o401, null);
}

/*** META ((export #t)) */
function o412(o396, o291, o292, o413) {
    if (o292 === undefined)
        return o410(o396, o291);
    else if (o413 === undefined)
        return o411(o396, o291, o292);
    // else
    var o399 = arguments.length - 1;
    var o400 = new Array(o399);
    var o401 = null;
    while (o291 !== null) {
        for (var o63 = 0; o63 < o399; o63++) {
            o400[o63] = arguments[o63 + 1].o222;
            arguments[o63 + 1] = arguments[o63 + 1].o223;
    }
        var o293 = o396.apply(null, o400);
        if(o293 !== false) o401 = o234(o293, o401);
    }
    return o290(o401, null);
}

/*** META ((export #t)) */
function o414(o396, o269) {
    var o401 = null;
    while (o269 !== null) {
        var o293 = o396(o269.o222);
        if(o293 !== false) return o293;
        o269 = o269.o223;
    }
    return false;
}

/*** META ((export any?)
           (peephole (hole 2 "sc_any(" proc "," l ") !== false")))
*/
function o415(o396, o269) {
    return o414(o396, o269)!== false;
}

/*** META ((export #t)) */
function o416(o396, o269) {
    var o401 = null;
    var o293 = true;
    while (o269 !== null) {
        o293 = o396(o269.o222);
        if (o293 === false) return false;
        o269 = o269.o223;
    }
    return o293;
}

/*** META ((export every?)
           (peephole (hole 2 "sc_every(" proc "," l ") !== false")))
*/
function o417(o396, o269) {
    var o293 = o416(o396, o269);
    if (o293 !== false) return true;
    return false;
}

/*** META ((export #t)
           (peephole (postfix "()")))
*/
function o418(o130) {
    return o130();
}

/*** META ((export #t)) */
function o419(o396) {
    var o420 = false;
    var o62 = undefined;
    return function() {
        if (!o420) {
            var o293 = o396();
            if (!o420) {
                o420 = true;
                o62 = o293;
            }
    }
        return o62;
    };
}

function o421(values) {
    this.values = values;
}

/*** META ((export #t)
           (peephole (values)))
*/
function o423() {
    if (arguments.length === 1)
        return arguments[0];
    else
        return new o421(arguments);
}

/*** META ((export #t)) */
function o424(o425, o426) {
    var o427 = o425();
    if (o427 instanceof o421)
        return o426.apply(null, o427.values);
    else
        return o426(o427);
}

/*** META ((export #t)) */
function o428(o429, o430, o431) {
    o429();
    try {
        var o165 = o430();
        return o165;
    } finally {
        o431();
    }
}


// TODO: eval/scheme-report-environment/null-environment/interaction-environment

// LIMITATION: 'load' doesn't exist without files.
// LIMITATION: transcript-on/transcript-off doesn't exist without files.


function o432(name) {
    this.name = name;
}
o432.prototype.o108 = function() {
    return "#<struct" + o433(this) + ">";
};
o432.prototype.o228 = o432.prototype.o108;

/*** META ((export #t)
           (peephole (hole 1 "new sc_Struct(" name ")")))
*/
function o434(name) {
    return new o432(name);
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix " instanceof sc_Struct")))
*/
function o435(o130) {
    return (o130 instanceof o432);
}

/*** META ((export #t)
           (type bool)
           (peephole (hole 2 "(" 1 " instanceof sc_Struct) && ( " 1 ".name === " 0 ")")))
*/
function o436(name, o37) {
    return ((o37 instanceof o432) && (o37.name === name));
}

/*** META ((export struct-field)
           (peephole (hole 3 0 "[" 2 "]")))
*/
function o437(o37, name, o438) {
    return o37[o438];
}

/*** META ((export struct-field-set!)
           (peephole (hole 4 0 "[" 2 "] = " 3)))
*/
function o439(o37, name, o438, o125) {
    o37[o438] = o125;
}

/*** META ((export #t)
           (peephole (prefix "~")))
*/
function o440(o110) {
    return ~o110;
}

/*** META ((export #t)
           (peephole (infix 2 2 "&")))
*/
function o441(o110, o148) {
    return o110 & o148;
}

/*** META ((export #t)
           (peephole (infix 2 2 "|")))
*/
function o442(o110, o148) {
    return o110 | o148;
}

/*** META ((export #t)
           (peephole (infix 2 2 "^")))
*/
function o443(o110, o148) {
    return o110 ^ o148;
}

/*** META ((export #t)
           (peephole (infix 2 2 "<<")))
*/
function o444(o110, o148) {
    return o110 << o148;
}

/*** META ((export #t)
           (peephole (infix 2 2 ">>")))
*/
function o445(o110, o148) {
    return o110 >> o148;
}

/*** META ((export #t)
           (peephole (infix 2 2 ">>>")))
*/
function o446(o110, o148) {
    return o110 >>> o148;
}

/*** META ((export js-field js-property)
           (peephole (hole 2 o "[" field "]")))
*/
function o447(o130, o438) {
    return o130[o438];
}

/*** META ((export js-field-set! js-property-set!)
           (peephole (hole 3 o "[" field "] = " val)))
*/
function o448(o130, o438, o125) {
    return o130[o438] = o125;
}

/*** META ((export js-field-delete! js-property-delete!)
           (peephole (hole 2 "delete" o "[" field "]")))
*/
function o449(o130, o438) {
    delete o130[o438];
}

/*** META ((export #t)
           (peephole (jsCall)))
*/
function o450(o130, o451) {
    var o397 = new Array();
    for (var o63 = 2; o63 < arguments.length; o63++)
        o397[o63-2] = arguments[o63];
    return o451.apply(o130, o397);
}

/*** META ((export #t)
           (peephole (jsMethodCall)))
*/
function o452(o130, o438) {
    var o397 = new Array();
    for (var o63 = 2; o63 < arguments.length; o63++)
        o397[o63-2] = arguments[o63];
    return o130[o438].apply(o130, o397);
}

/*** META ((export new js-new)
           (peephole (jsNew)))
*/
function o453(o217) {
    var o454 = "new c(";
    o454 +=arguments.length > 1? "arguments[1]": "";
    for (var o63 = 2; o63 < arguments.length; o63++)
        o454 += ", arguments[" + o63 + "]";
    o454 +=")";
    return eval(o454);
}

// ======================== RegExp ====================
/*** META ((export #t)) */
function o456(o457) {
    return new RegExp(o458(o457));
}

/*** META ((export #t)) */
function o459(o457, o37) {
    var o460 = (o457 instanceof RegExp) ? o457 : o456(o457);
    var o293 = o460.exec(o458(o37));

    if (o293 == null) return false;

    var o165 = null;
    for (var o63 = o293.length-1; o63 >= 0; o63--) {
        if (o293[o63] !== null) {
            o165 = o234(o462(o293[o63]), o165);
    } else {
            o165 = o234(false, o165);
    }
    }
    return o165;
}

/*** META ((export #t)) */
function o463(o457, o464, o465) {
   var o460;
   var o466 = o458(o464);
   var o467 = o458(o465);

   if (o457 instanceof RegExp) {
       if (o457.global)
           o460 = o457;
       else
           o460 = new RegExp(o457.source);
   } else {
       o460 = new RegExp(o458(o457));
   }

   return o466.replace(o460, o467);
}

/*** META ((export pregexp-replace*)) */
function o470(o457, o464, o465) {
   var o460;
   var o466 = o458(o464);
   var o467 = o458(o465);

   if (o457 instanceof RegExp) {
      if (o457.global)
          o460 = o457;
      else
          o460 = new RegExp(o457.source, "g");
   } else {
       o460 = new RegExp(o458(o457), "g");
   }

   return o466.replace(o460, o467);
}

/*** META ((export #t)) */
function o471(o457, o37) {
   var o460 = ((o457 instanceof RegExp) ?
              o457 :
              new RegExp(o458(o457)));
   var o472 = o458(o37);
   var o293 = o472.split(o460);

   if (o293 == null) return false;

   return o380(o293);
}


/* =========================================================================== */
/* Other library stuff */
/* =========================================================================== */

/*** META ((export #t)
           (peephole (hole 1 "Math.floor(Math.random()*" 'n ")")))
*/
function o474(o137) {
    return Math.floor(Math.random()*o137);
}

/*** META ((export current-date)
           (peephole (hole 0 "new Date()")))
*/
function o475() {
   return new Date();
}

function o476() {
}
o476.prototype.toString = function() {
    return "#{%hashtable}";
};
// sc_toWriteString == sc_toDisplayString == toString

function o477(key, o125) {
    this.key = key;
    this.o125 = o125;
}

/*** META ((export #t)
           (peephole (hole 0 "new sc_Hashtable()")))
*/
function o478() {
    return new o476();
}

/*** META ((export #t)) */
function o479(o126, key, o125) {
    var o480 = o433(key);
    o126[o480] = new o477(key, o125);
}

/*** META ((export #t)) */
function o481(o126, key) {
    var o480 = o433(key);
    if (o480 in o126)
        return o126[o480].o125;
    else
        return false;
}

/*** META ((export #t)) */
function o482(o126, o180) {
    for (var o368 in o126) {
        if (o126[o368] instanceof o477)
            o180(o126[o368].key, o126[o368].o125);
    }
}

/*** META ((export hashtable-contains?)
           (peephole (hole 2 "sc_hash(" 1 ") in " 0)))
*/
function o483(o126, key) {
    var o480 = o433(key);
    if (o480 in o126)
        return true;
    else
        return false;
}

var o484 = 0;

function o433(o130) {
    if (o130 === null)
        return "null";
    else if (o130 === undefined)
        return "undefined";
    else if (o130 === true)
        return "true";
    else if (o130 === false)
        return "false";
    else if (typeof o130 === "number")
        return "num-" + o130;
    else if (typeof o130 === "string")
        return "jsstr-" + o130;
    else if (o130.o485)
        return o130.o485();
    else
        return o486.call(o130);
}
function o486() {
    if (!this.o433) {
        this.o433 = "hash-" + o484;
        o484++;
    }
    return this.o433;
}

function o488(o397, o489) {
    this['__trampoline return__'] = true;
    this.o397 = o397;
    this.o490 = o489;
}
// TODO: call/cc stuff
o488.prototype.o491 = function() {
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
}

/*** META ((export bind-exit-lambda)) */
function o495(o396) {
    var o496 = new o497();
    var escape = function(o165) {
        o496.o165 = o165;
        throw o496;
    };
    try {
        return o396(escape);
    } catch(o93) {
        if (o93 === o496) {
            return o93.o165;
    }
        throw o93;
    }
}
function o497() {
    this.o119 = true;
}

var o499 = new Object();

// default tail-call depth.
// normally the program should set it again. but just in case...
var o492 = new Object();
o499.o500 = o492;
// ======================== I/O =======================

/*------------------------------------------------------------------*/

function o501() {
}
var o502 = new o501();

function o503() {
}

/* --------------- Input ports -------------------------------------*/

function o504() {
}
o504.prototype = new o503();

o504.prototype.o505 = function() {
    if (!("peeked" in this))
        this.o506 = this.o507();
    return this.o506;
}
o504.prototype.o508 = function() {
    var o293 = this.o505();
    delete this.o506;
    return o293;
}
o504.prototype.o509 = function() {
    return true;
}
o504.prototype.o510 = function() {
    // do nothing
}

/* .............. String port ..........................*/
function o511() {
};
o511.prototype = new o504();
o511.prototype.o507 = function() {
    throw "can't read from error-port.";
};
o511.prototype.o509 = function() {
    return false;
};


/* .............. String port ..........................*/

function o512(o513) {
    // we are going to do some charAts on the str.
    // instead of recreating all the time a String-object, we
    // create one in the beginning. (not sure, if this is really an optim)
    this.o514 = new String(o513);
    this.o378 = 0;
}
o512.prototype = new o504();
o512.prototype.o507 = function() {
    if (this.o378 >= this.o514.length)
        return o502;
    return this.o514.charAt(this.o378++);
};

/* ------------- Read and other lib-funs  -------------------------------*/
function o515(type, o125, o378) {
    this.type = type;
    this.o125 = o125;
    this.o378 = o378;
}
o515.o517 = 0/*EOF*/;
o515.o518 = 1/*OPEN_PAR*/;
o515.o519 = 2/*CLOSE_PAR*/;
o515.o520 = 3/*OPEN_BRACE*/;
o515.o521 = 4/*CLOSE_BRACE*/;
o515.o522 = 5/*OPEN_BRACKET*/;
o515.o523 = 6/*CLOSE_BRACKET*/;
o515.o524 = 7/*WHITESPACE*/;
o515.o525 = 8/*QUOTE*/;
o515.o526 = 9/*ID*/;
o515.o527 = 10/*DOT*/;
o515.o528 = 11/*STRING*/;
o515.o529 = 12/*NUMBER*/;
o515.o530 = 13/*ERROR*/;
o515.o531 = 14/*VECTOR_BEGIN*/;
o515.o532 = 15/*TRUE*/;
o515.o533 = 16/*FALSE*/;
o515.o534 = 17/*UNSPECIFIED*/;
o515.o535 = 18/*REFERENCE*/;
o515.o536 = 19/*STORE*/;
o515.o537 = 20/*CHAR*/;

var o538 = o343 + o344 + "!$%*+-./:<=>?@^_~";
function o539(o540) {
    this.o540 = o540;
}
o539.prototype.o541 = function() {
    if (this.o506)
        return this.o506;
    var o542 = this.o543();
    this.o506 = o542;
    return o542;
};
o539.prototype.o544 = function() {
    var o293 = this.o541();
    delete this.o506;
    return o293;
};
o539.prototype.o543 = function() {
    var o540 = this.o540;

    function o545(o217) {
        return (o217 >= "0" && o217 <= "9");
    };
    function o546(o217) {
        return o538.indexOf(o217) != -1 || // ID-char
            (o217 >= "0" && o217 <= "9");
    }
    function o547(o217) {
        return o217 === " " || o217 === "\r" || o217 === "\n" || o217 === "\t" || o217 === "\f";
    };
    function o548(o217) {
        return o547(o217) || o217 === o502;
    };

    function o549() {
        o165 = "";
        while (true) {
            var o217 = o540.o508();
            switch (o217) {
            case '"':
                return new o515(11/*STRING*/, o165);
            case "\\":
                var o293 = o540.o508();
                switch (o293) {
                case '0': o165 += "\0"; break;
                case 'a': o165 += "\a"; break;
                case 'b': o165 += "\b"; break;
                case 'f': o165 += "\f"; break;
                case 'n': o165 += "\n"; break;
                case 'r': o165 += "\r"; break;
                case 't': o165 += "\t"; break;
                case 'v': o165 += "\v"; break;
                case '"': o165 += '"'; break;
                case '\\': o165 += '\\'; break;
                case 'x':
                    /* hexa-number */
                    var o550 = 0;
                    while (true) {
                        var o551 = o540.o505();
                        if (o551 >= '0' && o551 <= '9') {
                            o540.o508();
                            o550 = o550 * 16 + o551.charCodeAt(0) - '0'.charCodeAt(0);
                    } else if (o551 >= 'a' && o551 <= 'f') {
                            o540.o508();
                            o550 = o550 * 16 + o551.charCodeAt(0) - 'a'.charCodeAt(0);
                    } else if (o551 >= 'A' && o551 <= 'F') {
                            o540.o508();
                            o550 = o550 * 16 + o551.charCodeAt(0) - 'A'.charCodeAt(0);
                    } else {
                            // next char isn't part of hex.
                            o165 += String.fromCharCode(o550);
                            break;
                    }
                    }
                    break;
                default:
                    if (o293 === o502) {
                        return new o515(13/*ERROR*/, "unclosed string-literal" + o165);
                    }
                    o165 += o293;
            }
                break;
            default:
                if (o217 === o502) {
                    return new o515(13/*ERROR*/, "unclosed string-literal" + o165);
            }
                o165 += o217;
            }
    }
    };
    function o552(o553) {
        var o165 = o553;
        while (o546(o540.o505()))
            o165 += o540.o508();
        if (isNaN(o165))
            return new o515(9/*ID*/, o165);
        else
            return new o515(12/*NUMBER*/, o165 - 0);
    };

    function o555() {
        var done = false;
        while (!done) {
            done = true;
            while (o547(o540.o505()))
                o540.o508();
            if (o540.o505() === ';') {
                o540.o508();
                done = false;
                while (true) {
                    o557 = o540.o508();
                    if (o557 === o502 ||
                        o557 === '\n')
                        break;
            }
            }
    }
    };

    function o558() {
        if (o547(o540.o505()))
            return new o515(10/*DOT*/);
        else
            return o552(".");
    };

    function o559() {
        var o217 = o540.o508();
        if (o547(o217))
            return new o515(13/*ERROR*/, "bad #-pattern0.");

        // reference
        if (o545(o217)) {
            var o550 = o217 - 0;
            while (o545(o540.o505()))
                o550 = o550*10 + (o540.o508() - 0);
            switch (o540.o508()) {
            case '#':
                return new o515(18/*REFERENCE*/, o550);
            case '=':
                return new o515(19/*STORE*/, o550);
            default:
                return new o515(13/*ERROR*/, "bad #-pattern1." + o550);
            }
    }

        if (o217 === "(")
            return new o515(14/*VECTOR_BEGIN*/);
        
        if (o217 === "\\") { // character
            var o293 = ""
            while (!o548(o540.o505()))
                o293 += o540.o508();
            switch (o293.length) {
            case 0: // it's escaping a whitespace char:
                if (o560(o540.o505))
                    return new o515(13/*ERROR*/, "bad #-pattern2.");
                else
                    return new o515(20/*CHAR*/, o540.o508());
            case 1:
                return new o515(20/*CHAR*/, o293);
            default:
                var o329 = o324.o328[o293.toLowerCase()];
                if (o329)
                    return new o515(20/*CHAR*/, o329);
                else
                    return new o515(13/*ERROR*/, "unknown character description: #\\" + o293);
            }
    }

        // some constants (#t, #f, #unspecified)
        var o165;
        var o561;
        switch (o217) {
        case 't': o165 = new o515(15/*TRUE*/, true); o561 = ""; break;
        case 'f': o165 = new o515(16/*FALSE*/, false); o561 = ""; break;
        case 'u': o165 = new o515(17/*UNSPECIFIED*/, undefined); o561 = "nspecified"; break;
        default:
            return new o515(13/*ERROR*/, "bad #-pattern3: " + o217);
    }
        while(true) {
            o217 = o540.o505();
            if ((o548(o217) || o217 === ')') &&
                o561 == "")
                return o165;
            else if (o547(o217) || o561 == "")
                return new o515(13/*ERROR*/, "bad #-pattern4 " + o217 + " " + o561);
            else if (o561.charAt(0) == o217) {
                o540.o508(); // consume
                o561 = o561.slice(1);
            } else
                return new o515(13/*ERROR*/, "bad #-pattern5");
    }
        
    };

    o555();
    var o557 = o540.o508();
    if (o557 === o502)
        return new o515(0/*EOF*/, o557);
    switch (o557)
    {
    case " ":
    case "\n":
    case "\t":
        return o562();
    case "(":
        return new o515(1/*OPEN_PAR*/);
    case ")":
        return new o515(2/*CLOSE_PAR*/);
    case "{":
        return new o515(3/*OPEN_BRACE*/);
    case "}":
        return new o515(4/*CLOSE_BRACE*/);
    case "[":
        return new o515(5/*OPEN_BRACKET*/);
    case "]":
        return new o515(6/*CLOSE_BRACKET*/);
    case "'":
        return new o515(8/*QUOTE*/);
    case "#":
        return o559();
    case ".":
        return o558();
    case '"':
        return o549();
    default:
        if (o546(o557))
            return o552(o557);
        throw "unexpected character: " + o557;
    }
};

function o563(o564) {
    this.o564 = o564;
    this.o565 = new Array();
}
o563.prototype.o566 = function() {
    function o567(o568) {
        function o569(o570, o510) {
            return o570 === 1/*OPEN_PAR*/ && o510 === 2/*CLOSE_PAR*/
                || o570 === 3/*OPEN_BRACE*/ && o510 === 4/*CLOSE_BRACE*/
                || o570 === 5/*OPEN_BRACKET*/ && o510 === 6/*CLOSE_BRACKET*/;
    };
        var o165 = null;

        while (true) {
            var o571 = o564.o541();

            switch (o571.type) {
            case 2/*CLOSE_PAR*/:
            case 4/*CLOSE_BRACE*/:
            case 6/*CLOSE_BRACKET*/:
                if (o569(o568, o571.type)) {
                    o564.o544(); // consume token
                    return o300(o165);
            } else
                    throw "closing par doesn't match: " + o568
                        + " " + o572;

            case 0/*EOF*/:
                throw "unexpected end of file";

            case 10/*DOT*/:
                o564.o544(); // consume token
                var o223 = this.o566();
                var o573 = o564.o544();
                if (!o569(o568, o573.type))
                    throw "closing par doesn't match: " + o568
                        + " " + o573.type;
                else
                    return o290(o165, o223);
                

            default:
                o165 = o234(this.o566(), o165);
            }
    }
    };
    function o574() {
        return o234("quote", o234(this.o566(), null));
    };
    function o575() {
        // opening-parenthesis is already consumed
        var o112 = new Array();
        while (true) {
            var o571 = o564.o541();
            switch (o571.type) {
            case 2/*CLOSE_PAR*/:
                o564.o544();
                return o112;
                
            default:
                o112.push(this.o566());
            }
    }
    };

    function o576(o550) {
        var o293 = this.o566();
        this.o565[o550] = o293;
        return o293;
    };
        
    function o577(o550) {
        if (o550 in this.o565)
            return this.o565[o550];
        else
            throw "bad reference: " + o550;
    };

    var o564 = this.o564;

    var o571 = o564.o544();

    // handle error
    if (o571.type === 13/*ERROR*/)
        throw o571.o125;

    switch (o571.type) {
    case 1/*OPEN_PAR*/:
    case 3/*OPEN_BRACE*/:
    case 5/*OPEN_BRACKET*/:
        return o567.call(this, o571.type);
    case 8/*QUOTE*/:
        return o574.call(this);
    case 11/*STRING*/:
        return o462(o571.o125);
    case 20/*CHAR*/:
        return new o324(o571.o125);
    case 14/*VECTOR_BEGIN*/:
        return o575.call(this);
    case 18/*REFERENCE*/:
        return o577.call(this, o571.o125);
    case 19/*STORE*/:
        return o576.call(this, o571.o125);
    case 9/*ID*/:
        return o113(o571.o125);
    case 0/*EOF*/:
    case 12/*NUMBER*/:
    case 15/*TRUE*/:
    case 16/*FALSE*/:
    case 17/*UNSPECIFIED*/:
        return o571.o125;
    default:
        throw "unexpected token " + o571.type + " " + o571.o125;
    }
};

/*** META ((export #t)) */
function o578(o540) {
    if (o540 === undefined) // we assume the port hasn't been given.
        o540 = o579; // THREAD: shared var...
    var o580 = new o563(new o539(o540));
    return o580.o566();
}
/*** META ((export #t)) */
function o581(o540) {
    if (o540 === undefined) // we assume the port hasn't been given.
        o540 = o579; // THREAD: shared var...
    var o212 = o540.o508();
    return o212 === o502? o212: new o324(o212);
}
/*** META ((export #t)) */
function o582(o540) {
    if (o540 === undefined) // we assume the port hasn't been given.
        o540 = o579; // THREAD: shared var...
    var o212 = o540.o505();
    return o212 === o502? o212: new o324(o212);
}
/*** META ((export #t)
           (type bool))
*/
function o583(o540) {
    if (o540 === undefined) // we assume the port hasn't been given.
        o540 = o579; // THREAD: shared var...
    return o540.o509();
}
/*** META ((export #t)
           (peephole (postfix ".close()")))
*/
function o584(o229) {
    return o229.o510();
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix " instanceof sc_InputPort")))
*/
function o585(o130) {
    return (o130 instanceof o504);
}

/*** META ((export eof-object?)
           (type bool)
           (peephole (postfix " === SC_EOF_OBJECT")))
*/
function o560(o130) {
    return o130 === o502;
}

/*** META ((export #t)
           (peephole (hole 0 "SC_DEFAULT_IN")))
*/
function o586() {
    return o579;
}

/* ------------ file operations are not supported -----------*/
/*** META ((export #t)) */
function o587(o37, o396) {
    throw "can't open " + o37;
}

/*** META ((export #t)) */
function o588(o37, o396) {
    throw "can't open " + o37;
}

/*** META ((export #t)) */
function o589(o37, o430) {
    throw "can't open " + o37;
}

/*** META ((export #t)) */
function o590(o37, o430) {
    throw "can't open " + o37;
}

/*** META ((export #t)) */
function o591(o37) {
    throw "can't open " + o37;
}

/*** META ((export #t)) */
function o592(o37) {
    throw "can't open " + o37;
}

/* ----------------------------------------------------------------------------*/
/*** META ((export #t)) */
function o593(o229) {
   var o63 = o229.lastIndexOf('/');

   if(o63 >= 0)
      return o229.substring(o63 + 1, o229.length);
   else
      return '';
}

/*** META ((export #t)) */
function o595(o229) {
   var o63 = o229.lastIndexOf('/');

   if(o63 >= 0)
      return o229.substring(0, o63);
   else
      return '';
}

/* ----------------------------------------------------------------------------*/

/*** META ((export #t)) */
function o596(o229, o430) {
    try {
        var o293 = o579; // THREAD: shared var.
        o579 = o229;
        return o430();
    } finally {
        o579 = o293;
    }
}

/*** META ((export #t)) */
function o597(o37, o430) {
    return o596(new o512(o458(o37)), o430);
}

/*** META ((export #t)) */
function o598(o229, o430) {
    try {
        var o293 = o599; // THREAD: shared var.
        o599 = o229;
        return o430();
    } finally {
        o599 = o293;
    }
}

/*** META ((export #t)) */
function o600(o430) {
    var o229 = new o601();
    o598(o229, o430);
    return o229.o510();
}

/*** META ((export #t)) */
function o602(o396, o430) {
    var o212 = function(o37) { o396(o462(o37)); };
    return o598(new o603(o212), o430);
}

/*** META ((export #t)
           (peephole (hole 0 "new sc_StringOutputPort()")))
*/
function o604() {
    return new o601();
}

/*** META ((export #t)) */
function o605(o514) {
    return new o512(o458(o514));
}

/* ----------------------------------------------------------------------------*/

function o606() {
}
o606.prototype = new o503();
o606.prototype.o607 = function(o115) {
    /* do nothing */
}
o606.prototype.o510 = function() {
    /* do nothing */
}

function o601() {
    this.o165 = "";
}
o601.prototype = new o606();
o601.prototype.o607 = function(o37) {
    this.o165 += o37;
}
o601.prototype.o510 = function() {
    return o462(this.o165);
}

/*** META ((export #t)) */
function o608(o609) {
    return o462(o609.o165);
}


function o610() {
}
o610.prototype = new o606();
o610.prototype.o607 = function(o37) {
    throw "don't write on ErrorPort!";
}
o610.prototype.o510 = function() {
    /* do nothing */
}

function o603(o607, o510) {
    this.o607 = o607;
    if (o510)
        this.o510 = o510;
}
o603.prototype = new o606();

/*** META ((export #t)
           (type bool)
           (peephole (postfix " instanceof sc_OutputPort")))
*/
function o611(o130) {
    return (o130 instanceof o606);
}

/*** META ((export #t)
           (peephole (postfix ".close()")))
*/
function o612(o229) {
    return o229.o510();
}

/* ------------------ write ---------------------------------------------------*/

/*** META ((export #t)) */
function o613(o130, o229) {
    if (o229 === undefined) // we assume not given
        o229 = o599;
    o229.o607(o228(o130));
}

function o228(o130) {
    if (o130 === null)
        return "()";
    else if (o130 === true)
        return "#t";
    else if (o130 === false)
        return "#f";
    else if (o130 === undefined)
        return "#unspecified";
    else if (typeof o130 === 'function')
        return "#<procedure " + o433(o130) + ">";
    else if (o130.o228)
        return o130.o228();
    else
        return o130.toString();
}

function o614(o37) {
    var o165 = "";
    var o392 = 0;
    for (o63 = 0; o63 < o37.length; o63++) {
        switch (o37.charAt(o63)) {
        case "\0": o165 += o37.substring(o392, o63) + "\\0"; o392 = o63 + 1; break;
        case "\b": o165 += o37.substring(o392, o63) + "\\b"; o392 = o63 + 1; break;
        case "\f": o165 += o37.substring(o392, o63) + "\\f"; o392 = o63 + 1; break;
        case "\n": o165 += o37.substring(o392, o63) + "\\n"; o392 = o63 + 1; break;
        case "\r": o165 += o37.substring(o392, o63) + "\\r"; o392 = o63 + 1; break;
        case "\t": o165 += o37.substring(o392, o63) + "\\t"; o392 = o63 + 1; break;
        case "\v": o165 += o37.substring(o392, o63) + "\\v"; o392 = o63 + 1; break;
        case '"': o165 += o37.substring(o392, o63) + '\\"'; o392 = o63 + 1; break;
        case "\\": o165 += o37.substring(o392, o63) + "\\\\"; o392 = o63 + 1; break;
        default:
            var o217 = o37.charAt(o63);
            if ("\a" !== "a" && o217 == "\a") {
                o165 += o37.substring(o392, o63) + "\\a"; o392 = o63 + 1; continue;
            }
            if ("\v" !== "v" && o217 == "\v") {
                o165 += o37.substring(o392, o63) + "\\v"; o392 = o63 + 1; continue;
            }
            //if (s.charAt(i) < ' ' || s.charCodeAt(i) > 127) {
            // CARE: Manuel is this OK with HOP?
            if (o37.charAt(o63) < ' ') {
                /* non printable character and special chars */
                o165 += o37.substring(o392, o63) + "\\x" + o37.charCodeAt(o63).toString(16);
                o392 = o63 + 1;
            }
            // else just let i increase...
    }
    }
    o165 += o37.substring(o392, o63);
    return o165;
}

/* ------------------ display ---------------------------------------------------*/

/*** META ((export #t)) */
function o615(o130, o229) {
    if (o229 === undefined) // we assume not given
        o229 = o599;
    o229.o607(o108(o130));
}

function o108(o130) {
    if (o130 === null)
        return "()";
    else if (o130 === true)
        return "#t";
    else if (o130 === false)
        return "#f";
    else if (o130 === undefined)
        return "#unspecified";
    else if (typeof o130 === 'function')
        return "#<procedure " + o433(o130) + ">";
    else if (o130.o108)
        return o130.o108();
    else
        return o130.toString();
}

/* ------------------ newline ---------------------------------------------------*/

/*** META ((export #t)) */
function o616(o229) {
    if (o229 === undefined) // we assume not given
        o229 = o599;
    o229.o607("\n");
}

/* ------------------ write-char ---------------------------------------------------*/

/*** META ((export #t)) */
function o617(o217, o229) {
    if (o229 === undefined) // we assume not given
        o229 = o599;
    o229.o607(o217.o125);
}

/* ------------------ write-circle ---------------------------------------------------*/

/*** META ((export #t)) */
function o618(o130, o229) {
    if (o229 === undefined) // we assume not given
        o229 = o599;
    o229.o607(o619(o130));
}

function o619(o130) {
    var o620 = o621("writeCircle");
    var o622 = new Object();
    o622.o550 = 0;
    o623(o130, o620, o622);
    return o624(o130, o620);
}

function o623(o130, o620, o622) {
    // TODO sc_Struct
    if (o130 instanceof o221 ||
        o130 instanceof o366) {
        if (o130[o620] !== undefined) {
            // not the first visit.
            o130[o620]++;
            // unless there is already a number, assign one.
            if (!o130[o620 + "nb"]) o130[o620 + "nb"] = o622.o550++;
            return;
    }
        o130[o620] = 0;
        if (o130 instanceof o221) {
            o623(o130.o222, o620, o622);
            o623(o130.o223, o620, o622);
    } else {
            for (var o63 = 0; o63 < o130.length; o63++)
                o623(o130[o63], o620, o622);
    }
    }
}

function o624(o130, o620) {
    if (!(o130 instanceof o221 ||
          o130 instanceof o366))
        return o228(o130);
    return o130.o619(o620);
}
o221.prototype.o619 = function(o620, o625) {
    if (this[o620 + "use"]) { // use-flag is set. Just use it.
        var o550 = this[o620 + "nb"];
        if (this[o620]-- === 0) { // if we are the last use. remove all fields.
            delete this[o620];
            delete this[o620 + "nb"];
            delete this[o620 + "use"];
    }
        if (o625)
            return '. #' + o550 + '#';
        else
            return '#' + o550 + '#';
    }
    if (this[o620]-- === 0) { // if we are the last use. remove all fields.
        delete this[o620];
        delete this[o620 + "nb"];
        delete this[o620 + "use"];
    }

    var o165 = "";

    if (this[o620] !== undefined) { // implies > 0
        this[o620 + "use"] = true;
        if (o625)
            o165 += '. #' + this[o620 + "nb"] + '=';
        else
            o165 += '#' + this[o620 + "nb"] + '=';
        o625 = false;
    }

    if (!o625)
        o165 += "(";

    // print car
    o165 += o624(this.o222, o620);

    if (o227(this.o223)) {
        o165 += " " + this.o223.o619(o620, true);
    } else if (this.o223 !== null) {
        o165 += " . " + o624(this.o223, o620);
    }
    if (!o625)
        o165 += ")";
    return o165;
};
o366.prototype.o619 = function(o620) {
    if (this[o620 + "use"]) { // use-flag is set. Just use it.
        var o550 = this[o620 + "nb"];
        if (this[o620]-- === 0) { // if we are the last use. remove all fields.
            delete this[o620];
            delete this[o620 + "nb"];
            delete this[o620 + "use"];
    }
        return '#' + o550 + '#';
    }
    if (this[o620]-- === 0) { // if we are the last use. remove all fields.
        delete this[o620];
        delete this[o620 + "nb"];
        delete this[o620 + "use"];
    }

    var o165 = "";
    if (this[o620] !== undefined) { // implies > 0
        this[o620 + "use"] = true;
        o165 += '#' + this[o620 + "nb"] + '=';
    }
    o165 += "#(";
    for (var o63 = 0; o63 < this.length; o63++) {
        o165 += o624(this[o63], o620);
        if (o63 < this.length - 1) o165 += " ";
    }
    o165 += ")";
    return o165;
};


/* ------------------ print ---------------------------------------------------*/

/*** META ((export #t)) */
function o100(o37) {
    if (arguments.length === 1) {
        o615(o37);
        o616();
    }
    else {
        for (var o63 = 0; o63 < arguments.length; o63++)
            o615(arguments[o63]);
        o616();
    }
}

/* ------------------ format ---------------------------------------------------*/
/*** META ((export #t)) */
function o626(o37, o397) {
   var o107 = o37.length;
   var o229 = new o601();
   var o63 = 0, o392 = 1;

   while( o63 < o107 ) {
      var o627 = o37.indexOf("~", o63);

      if (o627 == -1) {
          o229.o607( o37.substring( o63, o107 ) );
          return o229.o510();
      } else {
         if (o627 > o63) {
            if (o627 == (o107 - 1)) {
                o229.o607(o37.substring(o63, o107));
                return o229.o510();
            } else {
               o229.o607(o37.substring(o63, o627));
               o63 = o627;
            }
         }

         switch(o37.charCodeAt(o627 + 1)) {
            case 65:
            case 97:
               // a
               o615(arguments[o392], o229);
               o63 += 2; o392++;
               break;

            case 83:
            case 115:
               // s
               o613(arguments[o392], o229);
               o63 += 2; o392++;
               break;

            case 86:
            case 118:
               // v
               o615(arguments[o392], o229);
               o229.o607("\n");
               o63 += 2; o392++;
               break;

            case 67:
            case 99:
               // c
               o229.o607(String.fromCharCode(arguments[o392]));
               o63 += 2; o392++;
               break;

            case 88:
            case 120:
               // x
               o229.o607(arguments[o392].toString(6));
               o63 += 2; o392++;
               break;

            case 79:
            case 111:
               // o
               o229.o607(arguments[o392].toString(8));
               o63 += 2; o392++;
               break;

            case 66:
            case 98:
               // b
               o229.o607(arguments[o392].toString(2));
               o63 += 2; o392++;
               break;

            case 37:
            case 110:
               // %, n
               o229.o607("\n");
               o63 += 2; break;

            case 114:
               // r
               o229.o607("\r");
               o63 += 2; break;

            case 126:
               // ~
               o229.o607("~");
               o63 += 2; break;

            default:
               o111( "format: illegal ~"
                         + String.fromCharCode(o37.charCodeAt(o627 + 1))
                         + " sequence" );
               return "";
         }
      }
   }

   return o229.o510();
}

/* ------------------ global ports ---------------------------------------------------*/

var o579 = new o511();
var o599 = new o610();
var o628 = new o610();

var o629 = "\u1E9C";
var o630 = "\u1E9D";

/*** META ((export #t)
           (peephole (id))) */
function o462(o37) {
    return o37;
}

/*** META ((export #t)
           (peephole (prefix "'\\u1E9C' +")))
*/
function o113(o37) {
    return o629 + o37;
}

/*** META ((export #t)
           (peephole (id)))
*/
function o458(o37) {
    return o37;
}

/*** META ((export #t)
           (peephole (symbol2jsstring_immutable)))
*/
function o631(o37) {
    return o37.slice(1);
}

/*** META ((export #t)
           (peephole (postfix ".slice(1)")))
*/
function o632(o302) {
    return o302.slice(1);
}

/*** META ((export #t)
           (peephole (prefix "'\\u1E9D' +")))
*/
function o633(o37) {
    return o630 + o37;
}

/*** META ((export #t)
           (type bool))
*/
function o634(o37) {
    return (typeof o37 === "string") &&
        (o37.charAt(0) === o630);
}


/*** META ((export #t)) */
var o621 = function() {
    var o635 = 1000;
    return function(o123) {
        o635++;
        if (!o123) o123 = o629;
        return o123 + "s" + o635 + "~" + "^sC-GeNsYm ";
    };
}();


/*** META ((export #t)
           (type bool))
*/
function o288(o133, o134) {
    return ((o133 === o134) ||
            (o227(o133) && o227(o134)
             && o230(o133, o134, o288)) ||
            (o367(o133) && o367(o134)
             && o369(o133, o134, o288)));
}

/*** META ((export number->symbol integer->symbol)) */
function o636(o110, o209) {
    return o629 + o208(o110, o209);
}

/*** META ((export number->string integer->string)) */
var o637 = o208;

/*** META ((export #t)) */
function o638(o37, o209) {
    return o211(o37.slice(1), o209);
}

/*** META ((export #t)) */
var o639 = o211;

/*** META ((export #t)
           (peephole (prefix "+" s)))
           ;; peephole will only apply if no radix is given.
*/
function o640(o37, o209) {
    if (!o209) return +o37;
    return parseInt(o37, o209);
}

/*** META ((export #t)
           (peephole (prefix "+")))
*/
function o641(o37) {
    return +o37;
}


/*** META ((export #t)
           (type bool))
*/
function o642(o37) {
    return (typeof o37 === "string") &&
        (o37.charAt(0) === o629);
}

/*** META ((export #t)
           (peephole (symbol2string_immutable)))
*/
function o643(o37) {
    return o37.slice(1);
}

/*** META ((export #t)
           (peephole (prefix "'\\u1E9C' +")))
*/
function o644(o37) {
    return o629 + o37;
}

/*** META ((export symbol-append)
           (peephole (symbolAppend_immutable)))
*/
function o645() {
    var o165 = o629;
    for (var o63 = 0; o63 < arguments.length; o63++)
        o165 += arguments[o63].slice(1);
    return o165;
}

/*** META ((export #t)
           (peephole (postfix ".val")))
*/
function o646(o217) { return o217.o125; }

/*** META ((export #t)
           (peephole (hole 1 "'\\u1E9C' + " c ".val")))
*/
function o647(o217) { return o629 + o217.o125; }

/*** META ((export #t)
           (type bool))
*/
function o648(o37) {
    return (typeof o37 === "string") &&
        (o37.charAt(0) !== o629);
}

/*** META ((export #t)) */
var o649 = o362;


/*** META ((export #t)) */
function o650() {
    for (var o63 = 0; o63 < arguments.length; o63++)
        arguments[o63] = arguments[o63].o125;
    return "".concat.apply("", arguments);
}

/*** META ((export #t)
           (peephole (postfix ".length")))
*/
function o651(o37) { return o37.length; }

/*** META ((export #t)) */
function o652(o37, o302) {
    return new o324(o37.charAt(o302));
}

/* there's no stringSet in the immutable version
function sc_stringSet(s, k, c)
*/


/*** META ((export string=?)
           (type bool)
           (peephole (hole 2 str1 " === " str2)))
*/
function o653(o464, o465) {
    return o464 === o465;
}
/*** META ((export string<?)
           (type bool)
           (peephole (hole 2 str1 " < " str2)))
*/
function o654(o464, o465) {
    return o464 < o465;
}
/*** META ((export string>?)
           (type bool)
           (peephole (hole 2 str1 " > " str2)))
*/
function o655(o464, o465) {
    return o464 > o465;
}
/*** META ((export string<=?)
           (type bool)
           (peephole (hole 2 str1 " <= " str2)))
*/
function o656(o464, o465) {
    return o464 <= o465;
}
/*** META ((export string>=?)
           (type bool)
           (peephole (hole 2 str1 " >= " str2)))
*/
function o657(o464, o465) {
    return o464 >= o465;
}
/*** META ((export string-ci=?)
           (type bool)
           (peephole (hole 2 str1 ".toLowerCase() === " str2 ".toLowerCase()")))
*/
function o658(o464, o465) {
    return o464.toLowerCase() === o465.toLowerCase();
}
/*** META ((export string-ci<?)
           (type bool)
           (peephole (hole 2 str1 ".toLowerCase() < " str2 ".toLowerCase()")))
*/
function o659(o464, o465) {
    return o464.toLowerCase() < o465.toLowerCase();
}
/*** META ((export string-ci>?)
           (type bool)
           (peephole (hole 2 str1 ".toLowerCase() > " str2 ".toLowerCase()")))
*/
function o660(o464, o465) {
    return o464.toLowerCase() > o465.toLowerCase();
}
/*** META ((export string-ci<=?)
           (type bool)
           (peephole (hole 2 str1 ".toLowerCase() <= " str2 ".toLowerCase()")))
*/
function o661(o464, o465) {
    return o464.toLowerCase() <= o465.toLowerCase();
}
/*** META ((export string-ci>=?)
           (type bool)
           (peephole (hole 2 str1 ".toLowerCase() >= " str2 ".toLowerCase()")))
*/
function o662(o464, o465) {
    return o464.toLowerCase() >= o465.toLowerCase();
}

/*** META ((export #t)
           (peephole (hole 3 s ".substring(" start ", " end ")")))
*/
function o663(o37, o88, o385) {
    return o37.substring(o88, o385);
}

/*** META ((export #t))
*/
function o664(o464, o465, o63) {
    return o465 == o464.substring(o63, o63+ o465.length);
}

/*** META ((export #t)
           (peephole (infix 0 #f "+" "''")))
*/
function o665() {
    return "".concat.apply("", arguments);
}

/*** META ((export #t)) */
var o666 = o363;

/*** META ((export #t)) */
var o667 = o364;

/*** META ((export #t)
           (peephole (id)))
*/
function o668(o37) {
    return o37;
}

/* there's no string-fill in the immutable version
function sc_stringFill(s, c)
*/

/*** META ((export #t)
           (peephole (postfix ".slice(1)")))
*/
function o669(o130) {
    return o130.slice(1);
}

/*** META ((export #t)
           (peephole (prefix "'\\u1E9D' +")))
*/
function o670(o130) {
    return o630 + o130;
}

String.prototype.o108 = function() {
    if (this.charAt(0) === o629)
        // TODO: care for symbols with spaces (escape-chars symbols).
        return this.slice(1);
    else if (this.charAt(0) === o630)
        return ":" + this.slice(1);
    else
        return this.toString();
};

String.prototype.o228 = function() {
    if (this.charAt(0) === o629)
        // TODO: care for symbols with spaces (escape-chars symbols).
        return this.slice(1);
    else if (this.charAt(0) === o630)
        return ":" + this.slice(1);
    else
        return '"' + o614(this) + '"';
};
/* Exported Variables */
var o671;
var o98;
var o672;
/* End Exports */

var o673;
var o674;
var o675;
var o676;
var o677;
var o678;
var o679;
var o680;
var o681;
var o682;
var o683;
var o684;
var o685;
var o686;
var o687;
var o688;
var o689;
var o690;
var o691;
var o692;
var o693;
var o694;
var o695;
{
    (o695 = (new o221("\u1E9Cimplies",(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cimplies",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cimplies",(new o221("\u1E9Cy",(new o221("\u1E9Cz",null)))))),(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cimplies",(new o221("\u1E9Cz",(new o221("\u1E9Cu",null)))))),(new o221((new o221("\u1E9Cimplies",(new o221("\u1E9Cu",(new o221("\u1E9Cw",null)))))),null)))))),null)))))),null)))))),(new o221((new o221("\u1E9Cimplies",(new o221("\u1E9Cx",(new o221("\u1E9Cw",null)))))),null)))))));
    (o694 = o274((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ccompile",(new o221("\u1E9Cform",null)))),(new o221((new o221("\u1E9Creverse",(new o221((new o221("\u1E9Ccodegen",(new o221((new o221("\u1E9Coptimize",(new o221("\u1E9Cform",null)))),(new o221((new o221("\u1E9Cnil",null)),null)))))),null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ceqp",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cfix",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cfix",(new o221("\u1E9Cy",null)))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cgreaterp",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cy",(new o221("\u1E9Cx",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Clesseqp",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cy",(new o221("\u1E9Cx",null)))))),null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cgreatereqp",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cboolean",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cor",(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Ct",null)),null)))))),(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cf",null)),null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ciff",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cimplies",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cimplies",(new o221("\u1E9Cy",(new o221("\u1E9Cx",null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ceven1",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Ct",null)),(new o221((new o221("\u1E9Codd",(new o221((new o221("\u1E9Csub1",(new o221("\u1E9Cx",null)))),null)))),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ccountps-",(new o221("\u1E9Cl",(new o221("\u1E9Cpred",null)))))),(new o221((new o221("\u1E9Ccountps-loop",(new o221("\u1E9Cl",(new o221("\u1E9Cpred",(new o221((new o221("\u1E9Czero",null)),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cfact-",(new o221("\u1E9Ci",null)))),(new o221((new o221("\u1E9Cfact-loop",(new o221("\u1E9Ci",(new o221((1),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Creverse-",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Creverse-loop",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cnil",null)),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cdivides",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Czerop",(new o221((new o221("\u1E9Cremainder",(new o221("\u1E9Cy",(new o221("\u1E9Cx",null)))))),null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cassume-true",(new o221("\u1E9Cvar",(new o221("\u1E9Calist",null)))))),(new o221((new o221("\u1E9Ccons",(new o221((new o221("\u1E9Ccons",(new o221("\u1E9Cvar",(new o221((new o221("\u1E9Ct",null)),null)))))),(new o221("\u1E9Calist",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cassume-false",(new o221("\u1E9Cvar",(new o221("\u1E9Calist",null)))))),(new o221((new o221("\u1E9Ccons",(new o221((new o221("\u1E9Ccons",(new o221("\u1E9Cvar",(new o221((new o221("\u1E9Cf",null)),null)))))),(new o221("\u1E9Calist",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ctautology-checker",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Ctautologyp",(new o221((new o221("\u1E9Cnormalize",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cnil",null)),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cfalsify",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cfalsify1",(new o221((new o221("\u1E9Cnormalize",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cnil",null)),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cprime",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cx",null)))),null)))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cadd1",(new o221((new o221("\u1E9Czero",null)),null)))),null)))))),null)))),(new o221((new o221("\u1E9Cprime1",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Csub1",(new o221("\u1E9Cx",null)))),null)))))),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cand",(new o221("\u1E9Cp",(new o221("\u1E9Cq",null)))))),(new o221((new o221("\u1E9Cif",(new o221("\u1E9Cp",(new o221((new o221("\u1E9Cif",(new o221("\u1E9Cq",(new o221((new o221("\u1E9Ct",null)),(new o221((new o221("\u1E9Cf",null)),null)))))))),(new o221((new o221("\u1E9Cf",null)),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cor",(new o221("\u1E9Cp",(new o221("\u1E9Cq",null)))))),(new o221((new o221("\u1E9Cif",(new o221("\u1E9Cp",(new o221((new o221("\u1E9Ct",null)),(new o221((new o221("\u1E9Cif",(new o221("\u1E9Cq",(new o221((new o221("\u1E9Ct",null)),(new o221((new o221("\u1E9Cf",null)),null)))))))),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cnot",(new o221("\u1E9Cp",null)))),(new o221((new o221("\u1E9Cif",(new o221("\u1E9Cp",(new o221((new o221("\u1E9Cf",null)),(new o221((new o221("\u1E9Ct",null)),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cimplies",(new o221("\u1E9Cp",(new o221("\u1E9Cq",null)))))),(new o221((new o221("\u1E9Cif",(new o221("\u1E9Cp",(new o221((new o221("\u1E9Cif",(new o221("\u1E9Cq",(new o221((new o221("\u1E9Ct",null)),(new o221((new o221("\u1E9Cf",null)),null)))))))),(new o221((new o221("\u1E9Ct",null)),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cfix",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Cnumberp",(new o221("\u1E9Cx",null)))),(new o221("\u1E9Cx",(new o221((new o221("\u1E9Czero",null)),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Cif",(new o221("\u1E9Ca",(new o221("\u1E9Cb",(new o221("\u1E9Cc",null)))))))),(new o221("\u1E9Cd",(new o221("\u1E9Ce",null)))))))),(new o221((new o221("\u1E9Cif",(new o221("\u1E9Ca",(new o221((new o221("\u1E9Cif",(new o221("\u1E9Cb",(new o221("\u1E9Cd",(new o221("\u1E9Ce",null)))))))),(new o221((new o221("\u1E9Cif",(new o221("\u1E9Cc",(new o221("\u1E9Cd",(new o221("\u1E9Ce",null)))))))),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cor",(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Czero",null)),null)))))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Cnumberp",(new o221("\u1E9Cx",null)))),null)))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cplus",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221("\u1E9Cz",null)))))),(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cy",(new o221("\u1E9Cz",null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Ca",(new o221("\u1E9Cb",null)))))),(new o221((new o221("\u1E9Czero",null)),null)))))),(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Ca",null)))),(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cb",null)))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cdifference",(new o221("\u1E9Cx",(new o221("\u1E9Cx",null)))))),(new o221((new o221("\u1E9Czero",null)),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Ca",(new o221("\u1E9Cb",null)))))),(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Ca",(new o221("\u1E9Cc",null)))))),null)))))),(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cfix",(new o221("\u1E9Cb",null)))),(new o221((new o221("\u1E9Cfix",(new o221("\u1E9Cc",null)))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Czero",null)),(new o221((new o221("\u1E9Cdifference",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cy",(new o221("\u1E9Cx",null)))))),null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cdifference",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))))),(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cnumberp",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cor",(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Czero",null)),null)))))),(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cy",null)))),null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cmeaning",(new o221((new o221("\u1E9Cplus-tree",(new o221((new o221("\u1E9Cappend",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))),(new o221("\u1E9Ca",null)))))),(new o221((new o221("\u1E9Cplus",(new o221((new o221("\u1E9Cmeaning",(new o221((new o221("\u1E9Cplus-tree",(new o221("\u1E9Cx",null)))),(new o221("\u1E9Ca",null)))))),(new o221((new o221("\u1E9Cmeaning",(new o221((new o221("\u1E9Cplus-tree",(new o221("\u1E9Cy",null)))),(new o221("\u1E9Ca",null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cmeaning",(new o221((new o221("\u1E9Cplus-tree",(new o221((new o221("\u1E9Cplus-fringe",(new o221("\u1E9Cx",null)))),null)))),(new o221("\u1E9Ca",null)))))),(new o221((new o221("\u1E9Cfix",(new o221((new o221("\u1E9Cmeaning",(new o221("\u1E9Cx",(new o221("\u1E9Ca",null)))))),null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cappend",(new o221((new o221("\u1E9Cappend",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221("\u1E9Cz",null)))))),(new o221((new o221("\u1E9Cappend",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cappend",(new o221("\u1E9Cy",(new o221("\u1E9Cz",null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Creverse",(new o221((new o221("\u1E9Cappend",(new o221("\u1E9Ca",(new o221("\u1E9Cb",null)))))),null)))),(new o221((new o221("\u1E9Cappend",(new o221((new o221("\u1E9Creverse",(new o221("\u1E9Cb",null)))),(new o221((new o221("\u1E9Creverse",(new o221("\u1E9Ca",null)))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cy",(new o221("\u1E9Cz",null)))))),null)))))),(new o221((new o221("\u1E9Cplus",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cx",(new o221("\u1E9Cz",null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ctimes",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221("\u1E9Cz",null)))))),(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cy",(new o221("\u1E9Cz",null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Czero",null)),null)))))),(new o221((new o221("\u1E9Cor",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cy",null)))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cexec",(new o221((new o221("\u1E9Cappend",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221("\u1E9Cpds",(new o221("\u1E9Cenvrn",null)))))))),(new o221((new o221("\u1E9Cexec",(new o221("\u1E9Cy",(new o221((new o221("\u1E9Cexec",(new o221("\u1E9Cx",(new o221("\u1E9Cpds",(new o221("\u1E9Cenvrn",null)))))))),(new o221("\u1E9Cenvrn",null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cmc-flatten",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cappend",(new o221((new o221("\u1E9Cflatten",(new o221("\u1E9Cx",null)))),(new o221("\u1E9Cy",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cmember",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cappend",(new o221("\u1E9Ca",(new o221("\u1E9Cb",null)))))),null)))))),(new o221((new o221("\u1E9Cor",(new o221((new o221("\u1E9Cmember",(new o221("\u1E9Cx",(new o221("\u1E9Ca",null)))))),(new o221((new o221("\u1E9Cmember",(new o221("\u1E9Cx",(new o221("\u1E9Cb",null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cmember",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Creverse",(new o221("\u1E9Cy",null)))),null)))))),(new o221((new o221("\u1E9Cmember",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Clength",(new o221((new o221("\u1E9Creverse",(new o221("\u1E9Cx",null)))),null)))),(new o221((new o221("\u1E9Clength",(new o221("\u1E9Cx",null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cmember",(new o221("\u1E9Ca",(new o221((new o221("\u1E9Cintersect",(new o221("\u1E9Cb",(new o221("\u1E9Cc",null)))))),null)))))),(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cmember",(new o221("\u1E9Ca",(new o221("\u1E9Cb",null)))))),(new o221((new o221("\u1E9Cmember",(new o221("\u1E9Ca",(new o221("\u1E9Cc",null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cnth",(new o221((new o221("\u1E9Czero",null)),(new o221("\u1E9Ci",null)))))),(new o221((new o221("\u1E9Czero",null)),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cexp",(new o221("\u1E9Ci",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cj",(new o221("\u1E9Ck",null)))))),null)))))),(new o221((new o221("\u1E9Ctimes",(new o221((new o221("\u1E9Cexp",(new o221("\u1E9Ci",(new o221("\u1E9Cj",null)))))),(new o221((new o221("\u1E9Cexp",(new o221("\u1E9Ci",(new o221("\u1E9Ck",null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cexp",(new o221("\u1E9Ci",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cj",(new o221("\u1E9Ck",null)))))),null)))))),(new o221((new o221("\u1E9Cexp",(new o221((new o221("\u1E9Cexp",(new o221("\u1E9Ci",(new o221("\u1E9Cj",null)))))),(new o221("\u1E9Ck",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Creverse-loop",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cappend",(new o221((new o221("\u1E9Creverse",(new o221("\u1E9Cx",null)))),(new o221("\u1E9Cy",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Creverse-loop",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cnil",null)),null)))))),(new o221((new o221("\u1E9Creverse",(new o221("\u1E9Cx",null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ccount-list",(new o221("\u1E9Cz",(new o221((new o221("\u1E9Csort-lp",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))))),(new o221((new o221("\u1E9Cplus",(new o221((new o221("\u1E9Ccount-list",(new o221("\u1E9Cz",(new o221("\u1E9Cx",null)))))),(new o221((new o221("\u1E9Ccount-list",(new o221("\u1E9Cz",(new o221("\u1E9Cy",null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cappend",(new o221("\u1E9Ca",(new o221("\u1E9Cb",null)))))),(new o221((new o221("\u1E9Cappend",(new o221("\u1E9Ca",(new o221("\u1E9Cc",null)))))),null)))))),(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cb",(new o221("\u1E9Cc",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cplus",(new o221((new o221("\u1E9Cremainder",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cy",(new o221((new o221("\u1E9Cquotient",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))))),null)))))),(new o221((new o221("\u1E9Cfix",(new o221("\u1E9Cx",null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cpower-eval",(new o221((new o221("\u1E9Cbig-plus1",(new o221("\u1E9Cl",(new o221("\u1E9Ci",(new o221("\u1E9Cbase",null)))))))),(new o221("\u1E9Cbase",null)))))),(new o221((new o221("\u1E9Cplus",(new o221((new o221("\u1E9Cpower-eval",(new o221("\u1E9Cl",(new o221("\u1E9Cbase",null)))))),(new o221("\u1E9Ci",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cpower-eval",(new o221((new o221("\u1E9Cbig-plus",(new o221("\u1E9Cx",(new o221("\u1E9Cy",(new o221("\u1E9Ci",(new o221("\u1E9Cbase",null)))))))))),(new o221("\u1E9Cbase",null)))))),(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Ci",(new o221((new o221("\u1E9Cplus",(new o221((new o221("\u1E9Cpower-eval",(new o221("\u1E9Cx",(new o221("\u1E9Cbase",null)))))),(new o221((new o221("\u1E9Cpower-eval",(new o221("\u1E9Cy",(new o221("\u1E9Cbase",null)))))),null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cremainder",(new o221("\u1E9Cy",(new o221((1),null)))))),(new o221((new o221("\u1E9Czero",null)),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Clessp",(new o221((new o221("\u1E9Cremainder",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cy",null)))),null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cremainder",(new o221("\u1E9Cx",(new o221("\u1E9Cx",null)))))),(new o221((new o221("\u1E9Czero",null)),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Clessp",(new o221((new o221("\u1E9Cquotient",(new o221("\u1E9Ci",(new o221("\u1E9Cj",null)))))),(new o221("\u1E9Ci",null)))))),(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Ci",null)))),null)))),(new o221((new o221("\u1E9Cor",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cj",null)))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cj",(new o221((1),null)))))),null)))),null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Clessp",(new o221((new o221("\u1E9Cremainder",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221("\u1E9Cx",null)))))),(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cy",null)))),null)))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cx",null)))),null)))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cpower-eval",(new o221((new o221("\u1E9Cpower-rep",(new o221("\u1E9Ci",(new o221("\u1E9Cbase",null)))))),(new o221("\u1E9Cbase",null)))))),(new o221((new o221("\u1E9Cfix",(new o221("\u1E9Ci",null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cpower-eval",(new o221((new o221("\u1E9Cbig-plus",(new o221((new o221("\u1E9Cpower-rep",(new o221("\u1E9Ci",(new o221("\u1E9Cbase",null)))))),(new o221((new o221("\u1E9Cpower-rep",(new o221("\u1E9Cj",(new o221("\u1E9Cbase",null)))))),(new o221((new o221("\u1E9Czero",null)),(new o221("\u1E9Cbase",null)))))))))),(new o221("\u1E9Cbase",null)))))),(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Ci",(new o221("\u1E9Cj",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cgcd",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cgcd",(new o221("\u1E9Cy",(new o221("\u1E9Cx",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cnth",(new o221((new o221("\u1E9Cappend",(new o221("\u1E9Ca",(new o221("\u1E9Cb",null)))))),(new o221("\u1E9Ci",null)))))),(new o221((new o221("\u1E9Cappend",(new o221((new o221("\u1E9Cnth",(new o221("\u1E9Ca",(new o221("\u1E9Ci",null)))))),(new o221((new o221("\u1E9Cnth",(new o221("\u1E9Cb",(new o221((new o221("\u1E9Cdifference",(new o221("\u1E9Ci",(new o221((new o221("\u1E9Clength",(new o221("\u1E9Ca",null)))),null)))))),null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cdifference",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221("\u1E9Cx",null)))))),(new o221((new o221("\u1E9Cfix",(new o221("\u1E9Cy",null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cdifference",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cy",(new o221("\u1E9Cx",null)))))),(new o221("\u1E9Cx",null)))))),(new o221((new o221("\u1E9Cfix",(new o221("\u1E9Cy",null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cdifference",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cx",(new o221("\u1E9Cz",null)))))),null)))))),(new o221((new o221("\u1E9Cdifference",(new o221("\u1E9Cy",(new o221("\u1E9Cz",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cdifference",(new o221("\u1E9Cc",(new o221("\u1E9Cw",null)))))),null)))))),(new o221((new o221("\u1E9Cdifference",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cc",(new o221("\u1E9Cx",null)))))),(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cw",(new o221("\u1E9Cx",null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cremainder",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cx",(new o221("\u1E9Cz",null)))))),(new o221("\u1E9Cz",null)))))),(new o221((new o221("\u1E9Czero",null)),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cdifference",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cb",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Ca",(new o221("\u1E9Cc",null)))))),null)))))),(new o221("\u1E9Ca",null)))))),(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cb",(new o221("\u1E9Cc",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cdifference",(new o221((new o221("\u1E9Cadd1",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cy",(new o221("\u1E9Cz",null)))))),null)))),(new o221("\u1E9Cz",null)))))),(new o221((new o221("\u1E9Cadd1",(new o221("\u1E9Cy",null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Clessp",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cx",(new o221("\u1E9Cz",null)))))),null)))))),(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cy",(new o221("\u1E9Cz",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Clessp",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cx",(new o221("\u1E9Cz",null)))))),(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cy",(new o221("\u1E9Cz",null)))))),null)))))),(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cz",null)))),null)))),(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cy",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cx",null)))),null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cgcd",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cx",(new o221("\u1E9Cz",null)))))),(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cy",(new o221("\u1E9Cz",null)))))),null)))))),(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cz",(new o221((new o221("\u1E9Cgcd",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cvalue",(new o221((new o221("\u1E9Cnormalize",(new o221("\u1E9Cx",null)))),(new o221("\u1E9Ca",null)))))),(new o221((new o221("\u1E9Cvalue",(new o221("\u1E9Cx",(new o221("\u1E9Ca",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cflatten",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Ccons",(new o221("\u1E9Cy",(new o221((new o221("\u1E9Cnil",null)),null)))))),null)))))),(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cnlistp",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Clistp",(new o221((new o221("\u1E9Cgopher",(new o221("\u1E9Cx",null)))),null)))),(new o221((new o221("\u1E9Clistp",(new o221("\u1E9Cx",null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Csamefringe",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cflatten",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cflatten",(new o221("\u1E9Cy",null)))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cgreatest-factor",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Czero",null)),null)))))),(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cor",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cy",null)))),(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cy",(new o221((1),null)))))),null)))))),(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Czero",null)),null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cgreatest-factor",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((1),null)))))),(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cx",(new o221((1),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cnumberp",(new o221((new o221("\u1E9Cgreatest-factor",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cor",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cy",null)))),(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cy",(new o221((1),null)))))),null)))))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Cnumberp",(new o221("\u1E9Cx",null)))),null)))),null)))))),null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ctimes-list",(new o221((new o221("\u1E9Cappend",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))),(new o221((new o221("\u1E9Ctimes",(new o221((new o221("\u1E9Ctimes-list",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Ctimes-list",(new o221("\u1E9Cy",null)))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cprime-list",(new o221((new o221("\u1E9Cappend",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))),(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cprime-list",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cprime-list",(new o221("\u1E9Cy",null)))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cz",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cw",(new o221("\u1E9Cz",null)))))),null)))))),(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cnumberp",(new o221("\u1E9Cz",null)))),(new o221((new o221("\u1E9Cor",(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cz",(new o221((new o221("\u1E9Czero",null)),null)))))),(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cw",(new o221((1),null)))))),null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cgreatereqp",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))))),(new o221((new o221("\u1E9Cor",(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Czero",null)),null)))))),(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cnumberp",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cy",(new o221((1),null)))))),null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cremainder",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cy",(new o221("\u1E9Cx",null)))))),(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Czero",null)),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Ca",(new o221("\u1E9Cb",null)))))),(new o221((1),null)))))),(new o221(o274("\u1E9Cand", (new o221("\u1E9Cnot",(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Ca",(new o221((new o221("\u1E9Czero",null)),null)))))),null)))), (new o221("\u1E9Cnot",(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cb",(new o221((new o221("\u1E9Czero",null)),null)))))),null)))), (new o221("\u1E9Cnumberp",(new o221("\u1E9Ca",null)))), (new o221("\u1E9Cnumberp",(new o221("\u1E9Cb",null)))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Csub1",(new o221("\u1E9Ca",null)))),(new o221((new o221("\u1E9Czero",null)),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Csub1",(new o221("\u1E9Cb",null)))),(new o221((new o221("\u1E9Czero",null)),null))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Clessp",(new o221((new o221("\u1E9Clength",(new o221((new o221("\u1E9Cdelete",(new o221("\u1E9Cx",(new o221("\u1E9Cl",null)))))),null)))),(new o221((new o221("\u1E9Clength",(new o221("\u1E9Cl",null)))),null)))))),(new o221((new o221("\u1E9Cmember",(new o221("\u1E9Cx",(new o221("\u1E9Cl",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Csort2",(new o221((new o221("\u1E9Cdelete",(new o221("\u1E9Cx",(new o221("\u1E9Cl",null)))))),null)))),(new o221((new o221("\u1E9Cdelete",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Csort2",(new o221("\u1E9Cl",null)))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cdsort",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Csort2",(new o221("\u1E9Cx",null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Clength",(new o221((new o221("\u1E9Ccons",(new o221("\u1E9Cx1",(new o221((new o221("\u1E9Ccons",(new o221("\u1E9Cx2",(new o221((new o221("\u1E9Ccons",(new o221("\u1E9Cx3",(new o221((new o221("\u1E9Ccons",(new o221("\u1E9Cx4",(new o221((new o221("\u1E9Ccons",(new o221("\u1E9Cx5",(new o221((new o221("\u1E9Ccons",(new o221("\u1E9Cx6",(new o221("\u1E9Cx7",null)))))),null)))))),null)))))),null)))))),null)))))),null)))))),null)))),(new o221((new o221("\u1E9Cplus",(new o221((6),(new o221((new o221("\u1E9Clength",(new o221("\u1E9Cx7",null)))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cdifference",(new o221((new o221("\u1E9Cadd1",(new o221((new o221("\u1E9Cadd1",(new o221("\u1E9Cx",null)))),null)))),(new o221((2),null)))))),(new o221((new o221("\u1E9Cfix",(new o221("\u1E9Cx",null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cquotient",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))))),(new o221((2),null)))))),(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cquotient",(new o221("\u1E9Cy",(new o221((2),null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Csigma",(new o221((new o221("\u1E9Czero",null)),(new o221("\u1E9Ci",null)))))),(new o221((new o221("\u1E9Cquotient",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Ci",(new o221((new o221("\u1E9Cadd1",(new o221("\u1E9Ci",null)))),null)))))),(new o221((2),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cadd1",(new o221("\u1E9Cy",null)))),null)))))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Cnumberp",(new o221("\u1E9Cy",null)))),(new o221((new o221("\u1E9Cadd1",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))),(new o221((new o221("\u1E9Cadd1",(new o221("\u1E9Cx",null)))),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cdifference",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cdifference",(new o221("\u1E9Cz",(new o221("\u1E9Cy",null)))))),null)))))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cy",(new o221("\u1E9Cz",null)))))),null)))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cz",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cy",(new o221("\u1E9Cx",null)))))),null)))),(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cfix",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cfix",(new o221("\u1E9Cz",null)))),null)))))),null)))))))),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cmeaning",(new o221((new o221("\u1E9Cplus-tree",(new o221((new o221("\u1E9Cdelete",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))),(new o221("\u1E9Ca",null)))))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Cmember",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cdifference",(new o221((new o221("\u1E9Cmeaning",(new o221((new o221("\u1E9Cplus-tree",(new o221("\u1E9Cy",null)))),(new o221("\u1E9Ca",null)))))),(new o221((new o221("\u1E9Cmeaning",(new o221("\u1E9Cx",(new o221("\u1E9Ca",null)))))),null)))))),(new o221((new o221("\u1E9Cmeaning",(new o221((new o221("\u1E9Cplus-tree",(new o221("\u1E9Cy",null)))),(new o221("\u1E9Ca",null)))))),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cadd1",(new o221("\u1E9Cy",null)))),null)))))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Cnumberp",(new o221("\u1E9Cy",null)))),(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))))),(new o221((new o221("\u1E9Cfix",(new o221("\u1E9Cx",null)))),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cnth",(new o221((new o221("\u1E9Cnil",null)),(new o221("\u1E9Ci",null)))))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Ci",null)))),(new o221((new o221("\u1E9Cnil",null)),(new o221((new o221("\u1E9Czero",null)),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Clast",(new o221((new o221("\u1E9Cappend",(new o221("\u1E9Ca",(new o221("\u1E9Cb",null)))))),null)))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Clistp",(new o221("\u1E9Cb",null)))),(new o221((new o221("\u1E9Clast",(new o221("\u1E9Cb",null)))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Clistp",(new o221("\u1E9Ca",null)))),(new o221((new o221("\u1E9Ccons",(new o221((new o221("\u1E9Ccar",(new o221((new o221("\u1E9Clast",(new o221("\u1E9Ca",null)))),null)))),(new o221("\u1E9Cb",null)))))),(new o221("\u1E9Cb",null)))))))),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221("\u1E9Cz",null)))))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ct",null)),(new o221("\u1E9Cz",null)))))),(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cf",null)),(new o221("\u1E9Cz",null)))))),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cassignment",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cappend",(new o221("\u1E9Ca",(new o221("\u1E9Cb",null)))))),null)))))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Cassignedp",(new o221("\u1E9Cx",(new o221("\u1E9Ca",null)))))),(new o221((new o221("\u1E9Cassignment",(new o221("\u1E9Cx",(new o221("\u1E9Ca",null)))))),(new o221((new o221("\u1E9Cassignment",(new o221("\u1E9Cx",(new o221("\u1E9Cb",null)))))),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ccar",(new o221((new o221("\u1E9Cgopher",(new o221("\u1E9Cx",null)))),null)))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Clistp",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Ccar",(new o221((new o221("\u1E9Cflatten",(new o221("\u1E9Cx",null)))),null)))),(new o221((new o221("\u1E9Czero",null)),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cflatten",(new o221((new o221("\u1E9Ccdr",(new o221((new o221("\u1E9Cgopher",(new o221("\u1E9Cx",null)))),null)))),null)))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Clistp",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Ccdr",(new o221((new o221("\u1E9Cflatten",(new o221("\u1E9Cx",null)))),null)))),(new o221((new o221("\u1E9Ccons",(new o221((new o221("\u1E9Czero",null)),(new o221((new o221("\u1E9Cnil",null)),null)))))),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cquotient",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cy",(new o221("\u1E9Cx",null)))))),(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cy",null)))),(new o221((new o221("\u1E9Czero",null)),(new o221((new o221("\u1E9Cfix",(new o221("\u1E9Cx",null)))),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cget",(new o221("\u1E9Cj",(new o221((new o221("\u1E9Cset",(new o221("\u1E9Ci",(new o221("\u1E9Cval",(new o221("\u1E9Cmem",null)))))))),null)))))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Ceqp",(new o221("\u1E9Cj",(new o221("\u1E9Ci",null)))))),(new o221("\u1E9Cval",(new o221((new o221("\u1E9Cget",(new o221("\u1E9Cj",(new o221("\u1E9Cmem",null)))))),null)))))))),null))))))));
    (o693 = (new o221((new o221("\u1E9Cx",(new o221("\u1E9Cf",(new o221((new o221("\u1E9Cplus",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Ca",(new o221("\u1E9Cb",null)))))),(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cc",(new o221((new o221("\u1E9Czero",null)),null)))))),null)))))),null)))))),(new o221((new o221("\u1E9Cy",(new o221("\u1E9Cf",(new o221((new o221("\u1E9Ctimes",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Ca",(new o221("\u1E9Cb",null)))))),(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cc",(new o221("\u1E9Cd",null)))))),null)))))),null)))))),(new o221((new o221("\u1E9Cz",(new o221("\u1E9Cf",(new o221((new o221("\u1E9Creverse",(new o221((new o221("\u1E9Cappend",(new o221((new o221("\u1E9Cappend",(new o221("\u1E9Ca",(new o221("\u1E9Cb",null)))))),(new o221((new o221("\u1E9Cnil",null)),null)))))),null)))),null)))))),(new o221((new o221("\u1E9Cu",(new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Ca",(new o221("\u1E9Cb",null)))))),(new o221((new o221("\u1E9Cdifference",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))))))),(new o221((new o221("\u1E9Cw",(new o221("\u1E9Clessp",(new o221((new o221("\u1E9Cremainder",(new o221("\u1E9Ca",(new o221("\u1E9Cb",null)))))),(new o221((new o221("\u1E9Cmember",(new o221("\u1E9Ca",(new o221((new o221("\u1E9Clength",(new o221("\u1E9Cb",null)))),null)))))),null)))))))),null)))))))))));
    o98 = function() {
        var o397 = null;
        for (var o696 = arguments.length - 1; o696 >= 0; o696--) {
            o397 = o234(arguments[o696], o397);
        }
        var o137;
        return ((o137 = ((o397 === null)?(0):(o397.o222))), (o672()), (o697(("nboyer"+(o637(o137))), (1), function() {
            return (o671(o137));
        }, function(o698) {
            if ((o136(o698)))
                switch (o137) {
                case (0):
                    return (o698===(95024));
                    break;
                case (1):
                    return (o698===(591777));
                    break;
                case (2):
                    return (o698===(1813975));
                    break;
                case (3):
                    return (o698===(5375678));
                    break;
                case (4):
                    return (o698===(16445406));
                    break;
                case (5):
                    return (o698===(51507739));
                    break;
                default:
                    return true;
                    break;
                }
            else
                return false;
        })));
    };
    o672 = function() {
        return true;
    };
    o671 = function() {
        return true;
    };
    o673 = function(o699) {
        var o700;
        return (!(o699 instanceof o221)?o699:(new o221((o676((o699.o222))), ((o700 = (o699.o223)), ((o700 === null)?null:(new o221((o673((o700.o222))), (o674((o700.o223))))))))));
    };
    o674 = function(o700) {
        var o701;
        var o699;
        return ((o700 === null)?null:(new o221(((o699 = (o700.o222)), (!(o699 instanceof o221)?o699:(new o221((o676((o699.o222))), (o674((o699.o223))))))), ((o701 = (o700.o223)), ((o701 === null)?null:(new o221((o673((o701.o222))), (o674((o701.o223))))))))));
    };
    o675 = function(o699) {
        var o702;
        var o703;
        var o704;
        var o705;
        var o706;
        if (!(o699 instanceof o221))
            return o699;
        else
            {
                (o705 = (new o221(null, null)));
                (o704 = (o699.o223));
                (o703 = o705);
                while (!(o704 === null)) {
                    {
                        (o703.o223 = (new o221((o675((o704.o222))), null)));
                        (o703 = (o703.o223));
                        (o704 = (o704.o223));
                    }
                }
                (o702 = (o705.o223));
                return (new o221(((o706 = (o699.o222)), (o706[(0)])), o702));
            }
    };
    o676 = function(o123) {
        var o707;
        var o110;
        return ((o110 = (o307(o123, o677))), ((o110!== false)?(o110.o223):((o707 = [o123, null]), (o677 = (new o221((new o221(o123, o707)), o677))), o707)));
    };
    (o677 = null);
    o678 = function(o708) {
        var o709;
        var o699;
        return ((o708 === null)?null:(new o221((new o221((o708.o222.o222), ((o699 = (o708.o222.o223)), (!(o699 instanceof o221)?o699:(new o221((o676((o699.o222))), (o674((o699.o223))))))))), ((o709 = (o708.o223)), ((o709 === null)?null:(new o221((new o221((o709.o222.o222), (o673((o709.o222.o223))))), (o678((o709.o223))))))))));
    };
    o679 = function(o708, o699) {
        var o700;
        var o710;
        return (!(o699 instanceof o221)?((o710 = (o307(o699, o708))), ((o710!== false)?(o710.o223):o699)):(new o221((o699.o222), ((o700 = (o699.o223)), ((o700 === null)?null:(new o221((o679(o708, (o700.o222))), (o680(o708, (o700.o223))))))))));
    };
    o680 = function(o708, o700) {
        var o711;
        return ((o700 === null)?null:(new o221((o679(o708, (o700.o222))), ((o711 = (o700.o223)), ((o711 === null)?null:(new o221((o679(o708, (o711.o222))), (o680(o708, (o711.o223))))))))));
    };
    o681 = function(o712, o713, o714) {
        var o715;
        var o110;
        var o716;
        var o717;
        var o718;
        var o719;
        var o712;
        var o713;
        var o714;
        while (true) {
            if ((((o719 = (o691(o712, o689))), ((o719!== false)?o719:(o692(o712, o713))))!== false))
                return true;
            else
                if ((((o718 = (o691(o712, o688))), ((o718!== false)?o718:(o692(o712, o714))))!== false))
                    return false;
                else
                    if (!(o712 instanceof o221))
                        return false;
                    else
                        if (((o712.o222)===o682))
                            if ((((o717 = (o712.o223.o222)), (o716 = (o691(o717, o689))), ((o716!== false)?o716:(o692(o717, o713))))!== false))
                                (o712 = (o712.o223.o223.o222));
                            else
                                if ((((o110 = (o712.o223.o222)), (o715 = (o691(o110, o688))), ((o715!== false)?o715:(o692(o110, o714))))!== false))
                                    (o712 = (o712.o223.o223.o223.o222));
                                else
                                    if (((o681((o712.o223.o223.o222), (new o221((o712.o223.o222), o713)), o714))!== false))
                                        {
                                            (o714 = (new o221((o712.o223.o222), o714)));
                                            (o712 = (o712.o223.o223.o223.o222));
                                        }
                                    else
                                        return false;
                        else
                            return false;
        }
    };
    (o682 = "\u1E9C*");
    (o683 = (0));
    o684 = function(o699) {
        var o720;
        var o721;
        var o700;
        var o706;
        var o722;
        {
            (++o683);
            if (!(o699 instanceof o221))
                return o699;
            else
                {
                    (o721 = (new o221((o699.o222), ((o722 = (o699.o223)), ((o722 === null)?null:(new o221((o684((o722.o222))), (o685((o722.o223))))))))));
                    (o700 = ((o706 = (o699.o222)), (o706[(1)])));
                    while (true) {
                        if ((o700 === null))
                            return o721;
                        else
                            if ((((o720 = ((o700.o222).o223.o222)), (o686 = null), (o687(o721, o720)))!== false))
                                return (o684((o679(o686, ((o700.o222).o223.o223.o222)))));
                            else
                                (o700 = (o700.o223));
                    }
                }
        }
    };
    o685 = function(o700) {
        var o723;
        return ((o700 === null)?null:(new o221((o684((o700.o222))), ((o723 = (o700.o223)), ((o723 === null)?null:(new o221((o684((o723.o222))), (o685((o723.o223))))))))));
    };
    (o686 = "\u1E9C*");
    o687 = function(o724, o720) {
        var o725;
        var o726;
        var o710;
        if (!(o720 instanceof o221))
            {
                (o710 = (o307(o720, o686)));
                if ((o710!== false))
                    return (o691(o724, (o710.o223)));
                else
                    if ((o136(o720)))
                        return (o288(o724, o720));
                    else
                        {
                            (o686 = (new o221((new o221(o720, o724)), o686)));
                            return true;
                        }
            }
        else
            if (!(o724 instanceof o221))
                return false;
            else
                if (((o724.o222)===(o720.o222)))
                    {
                        (o725 = (o724.o223));
                        (o726 = (o720.o223));
                        while (true) {
                            if ((o725 === null))
                                return (o726 === null);
                            else
                                if ((o726 === null))
                                    return false;
                                else
                                    if (((o687((o725.o222), (o726.o222)))!== false))
                                        {
                                            (o725 = (o725.o223));
                                            (o726 = (o726.o223));
                                        }
                                    else
                                        return false;
                        }
                    }
                else
                    return false;
    };
    (o688 = "\u1E9C*");
    (o689 = "\u1E9C*");
    o690 = function(o137) {
        var o727;
        return ((o288(o137, (1)))?(o274("\u1E9Cimplies", (0), (1))):(o274("\u1E9Cand", (o274("\u1E9Cimplies", (o137-(1)), o137)), ((o727 = (o137-(1))), ((o288(o727, (1)))?(o274("\u1E9Cimplies", (0), (1))):(o274("\u1E9Cand", (o274("\u1E9Cimplies", (o727-(1)), o727)), (o690((o727-(1)))))))))));
    };
    o691 = function(o110, o148) {
        var o725;
        var o726;
        var o728;
        var o729;
        if ((o110 instanceof o221))
            if ((o148 instanceof o221))
                if ((((o729 = (o110.o222)), (o728 = (o148.o222)), (o729===o728))!== false))
                    {
                        (o725 = (o110.o223));
                        (o726 = (o148.o223));
                        while (true) {
                            if ((o725 === null))
                                return (o726 === null);
                            else
                                if ((o726 === null))
                                    return false;
                                else
                                    if (((o691((o725.o222), (o726.o222)))!== false))
                                        {
                                            (o725 = (o725.o223));
                                            (o726 = (o726.o223));
                                        }
                                    else
                                        return false;
                        }
                    }
                else
                    return false;
            else
                return false;
        else
            return (o288(o110, o148));
    };
    o692 = function(o110, o700) {
        var o110;
        var o700;
        while (true) {
            if ((o700 === null))
                return false;
            else
                if (((o691(o110, (o700.o222)))!== false))
                    return true;
                else
                    (o700 = (o700.o223));
        }
    };
    o672 = function() {
        var o706;
        var value;
        var o730;
        var o123;
        var o731;
        var o699;
        var o700;
        var o732;
        var o733;
        {
            (o677 = null);
            (o682 = (o676("\u1E9Cif")));
            (o688 = ((o733 = (new o221("\u1E9Cf",null))), (!(o733 instanceof o221)?o733:(new o221((o676((o733.o222))), (o674((o733.o223))))))));
            (o689 = ((o732 = (new o221("\u1E9Ct",null))), (!(o732 instanceof o221)?o732:(new o221((o676((o732.o222))), (o674((o732.o223))))))));
            (o700 = o694);
            while (!(o700 === null)) {
                {
                    (o699 = (o700.o222));
                    if (((o699 instanceof o221)&&(((o699.o222)==="\u1E9Cequal")&&((o699.o223.o222) instanceof o221))))
                        {
                            (o731 = ((o699.o223.o222).o222));
                            (value = (new o221((!(o699 instanceof o221)?o699:(new o221((o676((o699.o222))), (o674((o699.o223)))))), ((o123 = ((o699.o223.o222).o222)), (o730 = (o676(o123))), (o730[(1)])))));
                            (o706 = (o676(o731)));
                            (o706[(1)] = value);
                        }
                    else
                        (o111("ADD-LEMMA did not like term:  ", o699));
                    (o700 = (o700.o223));
                }
            }
            return true;
        }
    };
    o671 = function(o137) {
        var o702;
        var o699;
        var o734;
        var o735;
        var o736;
        var o737;
        {
            (o683 = (0));
            (o699 = o695);
            (o734 = o137);
            while (!(o734=== 0)) {
                {
                    (o699 = (o274("\u1E9Cor", o699, (new o221("\u1E9Cf",null)))));
                    (--o734);
                }
            }
            (o737 = o699);
            if (!(o737 instanceof o221))
                (o702 = o737);
            else
                (o702 = (new o221((o676((o737.o222))), (o674((o737.o223))))));
            (o736 = (o679(((o693 === null)?null:(new o221((new o221((o693.o222.o222), (o673((o693.o222.o223))))), (o678((o693.o223)))))), o702)));
            (o735 = (o681((o684(o736)), null, null)));
            (o613(o683));
            (o615(" rewrites"));
            (o616());
            if ((o735!== false))
                return o683;
            else
                return false;
        }
    };
}
/* Exported Variables */
var o738;
var o97;
var o739;
var test;
var o740;
var o741;
/* End Exports */

var o742;
{
    (o742 = (new o221((new o221("\u1E9Cs",(new o221((new o221("\u1E9Ca",null)),(new o221((new o221("\u1E9Cs",(new o221("\u1E9Cs",null)))),null)))))),null)));
    o741 = function(o743, o744) {
        var o63;
        var o745;
        var o746;
        var o747;
        var o748;
        var o749;
        var o750;
        var o751;
        var o752;
        var o753;
        var o754;
        var o755;
        var o756;
        var o757;
        var o758;
        var o759;
        var o760;
        var o761;
        var o762;
        var o763;
        var o764;
        {
            o764 = function(o765, o766) {
                var o63;
                {
                    (o63 = ((o766.length)-(1)));
                    while (true) {
                        if ((o63>=(0)))
                            if ((o288((o766[o63]), o765)))
                                return o63;
                            else
                                (--o63);
                        else
                            return false;
                    }
                }
            };
            (o762 = ((o763 = function(o767, o768) {
                var o769;
                var o407;
                var o770;
                return ((o767 instanceof o221)?((o770 = (o767.o222)), (o407 = (o770.o222)), (o769 = function(o771, o772) {
                    var o765;
                    var o269;
                    var o773;
                    var o774;
                    if ((o771 instanceof o221))
                        {
                            (o774 = (o771.o222));
                            (o269 = o774);
                            (o773 = o772);
                            while ((o269 instanceof o221)) {
                                {
                                    (o765 = (o269.o222));
                                    (o269 = (o269.o223));
                                    (o773 = (((o306(o765, o773))!== false)?o773:(new o221(o765, o773))));
                                }
                            }
                            return (o769((o771.o223), o773));
                        }
                    else
                        return (o763((o767.o223), o772));
                }), (o769((o770.o223), (((o306(o407, o768))!== false)?o768:(new o221(o407, o768)))))):(o381((o296(o768)))));
            }), (o763(o743, null))));
            (o761 = (o762.length));
            (o759 = (((o760 = function(o767, o775) {
                var o769;
                var o770;
                return ((o767 instanceof o221)?((o770 = (o767.o222)), (o769 = function(o771, o776) {
                    var o269;
                    var o777;
                    var o774;
                    if ((o771 instanceof o221))
                        {
                            (o774 = (o771.o222));
                            (o269 = o774);
                            (o777 = o776);
                            while ((o269 instanceof o221)) {
                                {
                                    (o269 = (o269.o223));
                                    (++o777);
                                }
                            }
                            return (o769((o771.o223), (o777+(1))));
                        }
                    else
                        return (o760((o767.o223), o776));
                }), (o769((o770.o223), o775))):o775);
            }), (o760(o743, (0))))+o761));
            (o758 = (o372(o761, null)));
            (o757 = (o372(o761, null)));
            (o756 = (o372(o761, null)));
            (o755 = (o372(o759, false)));
            (o754 = (o372(o759, false)));
            (o753 = o762);
            (o752 = o758);
            (o751 = o757);
            (o750 = o756);
            (o749 = o755);
            (o748 = o754);
            (o747 = (o762.length));
            (o63 = (o747-(1)));
            while ((o63>=(0))) {
                {
                    (o755[o63] = (o63-o747));
                    (o754[o63] = (o274((o762[o63]), (0))));
                    (o757[o63] = (o274(o63)));
                    (--o63);
                }
            }
            o746 = function(o767, o778) {
                var o769;
                var o407;
                var o770;
                return ((o767 instanceof o221)?((o770 = (o767.o222)), (o407 = (o770.o222)), (o769 = function(o771, o778, o779) {
                    var o63;
                    var o780;
                    var o765;
                    var o269;
                    var o781;
                    var o782;
                    var o774;
                    if ((o771 instanceof o221))
                        {
                            (o774 = (o771.o222));
                            (o748[o778] = (o274(o407, o779)));
                            (o782 = (o764(o407, o753)));
                            (o752[o782] = (new o221(o778, (o752[o782]))));
                            (o269 = o774);
                            (o781 = o778);
                            while ((o269 instanceof o221)) {
                                {
                                    (o765 = (o269.o222));
                                    (o749[o781] = (o764(o765, o753)));
                                    (o780 = (o764(o765, o753)));
                                    (o750[o780] = (new o221(o781, (o750[o780]))));
                                    (o269 = (o269.o223));
                                    (++o781);
                                }
                            }
                            (o749[o781] = ((o764(o407, o753))-o747));
                            (o63 = (o764(o407, o753)));
                            (o751[o63] = (new o221(o781, (o751[o63]))));
                            return (o769((o771.o223), (o781+(1)), (o779+(1))));
                        }
                    else
                        return (o746((o767.o223), o778));
                }), (o769((o770.o223), o778, (1)))):undefined);
            };
            (o746(o743, (o762.length)));
            (o745 = [o744, o762, o758, o757, o756, o755, o754]);
            return function(input) {
                var o702;
                var o784;
                var o785;
                var o786;
                var o787;
                var o788;
                var o789;
                var o790;
                var o791;
                var o792;
                var o793;
                var o794;
                var o795;
                var o63;
                var o778;
                var o269;
                var o796;
                var o797;
                var o798;
                var o291;
                var o292;
                var o799;
                var o800;
                var o801;
                var o802;
                var o803;
                var o804;
                var o805;
                var o806;
                var o807;
                var o808;
                var o809;
                var o810;
                var o811;
                var o812;
                var o813;
                var o814;
                var o815;
                var o816;
                var o817;
                var o818;
                var o744;
                var o819;
                var o820;
                var o821;
                var o822;
                var o823;
                var o824;
                var o825;
                var o826;
                var o827;
                var o828;
                var o829;
                var o830;
                var o831;
                var o832;
                {
                    o819 = function(o765, o833) {
                        var o63;
                        {
                            (o63 = ((o833.length)-(1)));
                            while (true) {
                                if ((o63>=(0)))
                                    if ((o288((o833[o63]), o765)))
                                        return o63;
                                    else
                                        (--o63);
                                else
                                    return false;
                            }
                        }
                    };
                    o820 = function(o834, o835) {
                        var o368;
                        var o63;
                        var o836;
                        {
                            (o836 = (o372((o834+(1)), false)));
                            (o63 = o834);
                            while ((o63>=(0))) {
                                {
                                    (o368 = (o372((o835+(1)), false)));
                                    (o368[(0)] = (-1));
                                    (o836[o63] = o368);
                                    (--o63);
                                }
                            }
                            return o836;
                        }
                    };
                    o821 = function(o837, o838, o839) {
                        var o840;
                        var o841;
                        return ((o841 = (o837[(o839+(1))])), ((o841!== false)?o841:((o840 = (o372((o838+(6)), false))), (o840[(1)] = (-3)), (o840[(2)] = (-1)), (o840[(3)] = (-1)), (o840[(4)] = (-1)), (o837[(o839+(1))] = o840), o840)));
                    };
                    o822 = function(o840) {
                        return ((o840[((o840[(1)])+(5))] = (o840[(4)])), (o840[(1)] = (o840[(3)])), (o840[(3)] = (-1)), (o840[(4)] = (-1)));
                    };
                    o823 = function(o837, o840, o842, o63) {
                        var o284;
                        return ((o284 = (o840[(3)])), (o840[(o63+(5))] = (-1)), (o840[(o284+(5))] = o63), (o840[(3)] = o63), ((o284<(0))?((o840[(0)] = (o837[(0)])), (o837[(0)] = o842)):undefined));
                    };
                    o824 = function(o843, o844, o269, o63) {
                        var o840;
                        var o845;
                        var o291;
                        var o837;
                        {
                            (o837 = (o843[o844]));
                            (o291 = o269);
                            while ((o291 instanceof o221)) {
                                {
                                    (o845 = (o291.o222));
                                    (o840 = (o821(o837, o844, o845)));
                                    if (((o840[(o63+(5))])=== false))
                                        {
                                            (o823(o837, o840, o845, o63));
                                            (o291 = (o291.o223));
                                        }
                                    else
                                        (o291 = (o291.o223));
                                }
                            }
                            return undefined;
                        }
                    };
                    o825 = function(o846, o847, o848, o849, o63) {
                        var o850;
                        var o851;
                        var o840;
                        var o837;
                        return ((o837 = (o846[o848])), ((((o840 = (o837[(o849+(1))])), ((o840!== false)?(o840[(o63+(5))]):false))!== false)?((o851 = (o847[o848])), (o850 = (o821(o851, o848, o849))), (((o850[(o63+(5))])=== false)?(o823(o851, o850, o849, o63)):undefined), true):false));
                    };
                    o826 = function(o837, o840, o852, o853) {
                        var o63;
                        {
                            (o63 = (o853[(2)]));
                            while ((o63>=(0))) {
                                if (((o840[(o63+(5))])=== false))
                                    {
                                        (o823(o837, o840, o852, o63));
                                        (o63 = (o853[(o63+(5))]));
                                    }
                                else
                                    (o63 = (o853[(o63+(5))]));
                            }
                            return undefined;
                        }
                    };
                    o827 = function(o854, o855, o856, o857, o858, o859, o860) {
                        var o861;
                        var next;
                        var o840;
                        var o862;
                        var o269;
                        var o863;
                        var o864;
                        var o865;
                        var o866;
                        var o407;
                        var o867;
                        var o868;
                        var o837;
                        var o869;
                        var o870;
                        var o871;
                        var o872;
                        var o873;
                        var o874;
                        var o875;
                        {
                            (o875 = (o854[o855]));
                            (o874 = (o860.length));
                            while (true) {
                                {
                                    (o873 = (o875[(0)]));
                                    if ((o873>=(0)))
                                        {
                                            (o872 = (o859[o873]));
                                            (o871 = (o875[(o873+(1))]));
                                            (o407 = (o871[(4)]));
                                            (o875[(0)] = (o871[(0)]));
                                            (o822(o871));
                                            if ((o872>=(0)))
                                                {
                                                    (o865 = (o856[o872]));
                                                    while ((o865 instanceof o221)) {
                                                        {
                                                            (o864 = (o865.o222));
                                                            (o863 = (o821(o875, o855, o864)));
                                                            if (((o863[(o855+(5))])=== false))
                                                                {
                                                                    (o823(o875, o863, o864, o855));
                                                                    (o865 = (o865.o223));
                                                                }
                                                            else
                                                                (o865 = (o865.o223));
                                                        }
                                                    }
                                                    (o269 = (o857[o872]));
                                                    while ((o269 instanceof o221)) {
                                                        {
                                                            (o862 = (o269.o222));
                                                            if ((((o840 = (o875[(o862+(1))])), ((o840!== false)?(o840[(o855+(5))]):false))!== false))
                                                                {
                                                                    (next = (o873+(1)));
                                                                    (o861 = (o821(o875, o855, next)));
                                                                    (o826(o875, o861, next, o871));
                                                                    (o269 = (o269.o223));
                                                                }
                                                            else
                                                                (o269 = (o269.o223));
                                                        }
                                                    }
                                                }
                                            else
                                                {
                                                    (o870 = (o858[(o872+o874)]));
                                                    (o869 = o854);
                                                    (o837 = o875);
                                                    (o868 = o855);
                                                    (o867 = o871);
                                                    o866 = function(o269) {
                                                        var o876;
                                                        var o877;
                                                        var o878;
                                                        var o879;
                                                        var o63;
                                                        var o880;
                                                        if ((o269 instanceof o221))
                                                            {
                                                                (o880 = (o269.o222));
                                                                (o63 = o407);
                                                                while ((o63>=(0))) {
                                                                    {
                                                                        (o879 = ((o876 = (o869[o63])), (o876[(o880+(1))])));
                                                                        if ((o879!== false))
                                                                            {
                                                                                (o878 = (o880+(1)));
                                                                                (o877 = (o821(o837, o868, o878)));
                                                                                (o826(o837, o877, o878, o879));
                                                                            }
                                                                        (o63 = (o867[(o63+(5))]));
                                                                    }
                                                                }
                                                                return (o866((o269.o223)));
                                                            }
                                                        else
                                                            return undefined;
                                                    };
                                                    (o866(o870));
                                                }
                                        }
                                    else
                                        return undefined;
                                }
                            }
                        }
                    };
                    o828 = function(o765, o63, o392, o881, o882, o883) {
                        var o840;
                        var o837;
                        var o884;
                        var o269;
                        var o885;
                        {
                            (o885 = (o819(o765, o881)));
                            if ((o885!== false))
                                {
                                    (o881.length);
                                    (o269 = (o882[o885]));
                                    while (true) {
                                        if ((o269 instanceof o221))
                                            {
                                                (o884 = (o269.o222));
                                                if ((((o837 = (o883[o392])), (o840 = (o837[(o884+(1))])), ((o840!== false)?(o840[(o63+(5))]):false))!== false))
                                                    return true;
                                                else
                                                    (o269 = (o269.o223));
                                            }
                                        else
                                            return false;
                                    }
                                }
                            else
                                return false;
                        }
                    };
                    o829 = function(o886, o63, o392, o887, o888, o889, o890, o891, o892) {
                        var o893;
                        var o894;
                        var name;
                        return ((name = (o889[o886])), ((name!== false)?((o886<o892)?(o274((o274(name, ((o890[o63]).o222))))):(o274((o274(name))))):((o894 = (o886-(1))), (o893 = function(o291, o292) {
                            var o895;
                            var o896;
                            var o837;
                            var o862;
                            var o291;
                            var o292;
                            while (true) {
                                if ((o291 instanceof o221))
                                    {
                                        (o862 = (o291.o222));
                                        (o896 = ((o837 = (o891[o392])), (o837[(o862+(1))])));
                                        if ((o896!== false))
                                            {
                                                o895 = function(o302, o292) {
                                                    var o897;
                                                    var o898;
                                                    var o899;
                                                    var o840;
                                                    var o900;
                                                    var o302;
                                                    var o292;
                                                    while (true) {
                                                        if ((o302>=(0)))
                                                            if (((o302>=o63)&&(((o900 = (o891[o302])), (o840 = (o900[(o894+(1))])), ((o840!== false)?(o840[(o63+(5))]):false))!== false)))
                                                                {
                                                                    (o899 = (o829(o894, o63, o302, o887, o888, o889, o890, o891, o892)));
                                                                    (o898 = (o829(o862, o302, o392, o887, o888, o889, o890, o891, o892)));
                                                                    o897 = function(o413, o292) {
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
                                                                    };
                                                                    return (o897(o898, o292));
                                                                }
                                                            else
                                                                (o302 = (o896[(o302+(5))]));
                                                        else
                                                            return (o893((o291.o223), o292));
                                                    }
                                                };
                                                return (o895((o896[(2)]), o292));
                                            }
                                        else
                                            (o291 = (o291.o223));
                                    }
                                else
                                    return o292;
                            }
                        }), (o893((o887[(o888[o894])]), null)))));
                    };
                    o830 = function(o765, o63, o392, o904, o905, o906, o907, o908, o909) {
                        var o840;
                        var o837;
                        var o910;
                        var o269;
                        var o911;
                        var o912;
                        var o913;
                        {
                            (o913 = (o819(o765, o904)));
                            if ((o913!== false))
                                {
                                    (o912 = (o904.length));
                                    (o269 = (o905[o913]));
                                    (o911 = null);
                                    while ((o269 instanceof o221)) {
                                        {
                                            (o910 = (o269.o222));
                                            if ((((o837 = (o909[o392])), (o840 = (o837[(o910+(1))])), ((o840!== false)?(o840[(o63+(5))]):false))!== false))
                                                {
                                                    (o269 = (o269.o223));
                                                    (o911 = (o297((o829(o910, o63, o392, o905, o906, o907, o908, o909, o912)), o911)));
                                                }
                                            else
                                                (o269 = (o269.o223));
                                        }
                                    }
                                    return o911;
                                }
                            else
                                return false;
                        }
                    };
                    o831 = function(o914, o63, o392, o915, o916, o917, o918, o919) {
                        var o920;
                        var o921;
                        var o894;
                        return ((o894 = (o914-(1))), ((((o921 = (o914<o919)), ((o921!== false)?o921:((o916[o894])<(0))))!== false)?(1):((o920 = function(o269, o922) {
                            var o923;
                            var o924;
                            var o840;
                            var o837;
                            var o302;
                            var o137;
                            var o896;
                            var o925;
                            var o862;
                            var o269;
                            var o922;
                            while (true) {
                                if ((o269 instanceof o221))
                                    {
                                        (o862 = (o269.o222));
                                        (o896 = ((o925 = (o918[o392])), (o925[(o862+(1))])));
                                        if ((o896!== false))
                                            {
                                                (o302 = (o896[(2)]));
                                                (o137 = o922);
                                                while ((o302>=(0))) {
                                                    if (((o302>=o63)&&(((o837 = (o918[o302])), (o840 = (o837[(o894+(1))])), ((o840!== false)?(o840[(o63+(5))]):false))!== false)))
                                                        {
                                                            (o924 = (o831(o894, o63, o302, o915, o916, o917, o918, o919)));
                                                            (o923 = (o831(o862, o302, o392, o915, o916, o917, o918, o919)));
                                                            (o302 = (o896[(o302+(5))]));
                                                            (o137 +=(o924*o923));
                                                        }
                                                    else
                                                        (o302 = (o896[(o302+(5))]));
                                                }
                                                return (o920((o269.o223), o137));
                                            }
                                        else
                                            (o269 = (o269.o223));
                                    }
                                else
                                    return o922;
                            }
                        }), (o920((o915[(o916[o894])]), (0))))));
                    };
                    o832 = function(o765, o63, o392, o926, o927, o928, o929, o930) {
                        var o840;
                        var o837;
                        var o931;
                        var o269;
                        var o932;
                        var o933;
                        var o934;
                        {
                            (o934 = (o819(o765, o926)));
                            if ((o934!== false))
                                {
                                    (o933 = (o926.length));
                                    (o269 = (o927[o934]));
                                    (o932 = (0));
                                    while ((o269 instanceof o221)) {
                                        {
                                            (o931 = (o269.o222));
                                            if ((((o837 = (o930[o392])), (o840 = (o837[(o931+(1))])), ((o840!== false)?(o840[(o63+(5))]):false))!== false))
                                                {
                                                    (o269 = (o269.o223));
                                                    (o932 = ((o831(o931, o63, o392, o927, o928, o929, o930, o933))+o932));
                                                }
                                            else
                                                (o269 = (o269.o223));
                                        }
                                    }
                                    return o932;
                                }
                            else
                                return false;
                        }
                    };
                    (o744 = (o745[(0)]));
                    (o818 = (o745[(1)]));
                    (o817 = (o745[(2)]));
                    (o816 = (o745[(3)]));
                    (o815 = (o745[(4)]));
                    (o814 = (o745[(5)]));
                    (o813 = (o745[(6)]));
                    (o812 = (new o221(null, null)));
                    (o801 = (o744(input)));
                    (o800 = o812);
                    while (!(o801 === null)) {
                        {
                            (o799 = (o801.o222));
                            (o291 = (o799.o223));
                            (o292 = null);
                            while ((o291 instanceof o221)) {
                                {
                                    (o798 = (o819((o291.o222), o818)));
                                    if ((o798!== false))
                                        {
                                            (o291 = (o291.o223));
                                            (o292 = (new o221(o798, o292)));
                                        }
                                    else
                                        (o291 = (o291.o223));
                                }
                            }
                            (o786 = (new o221((o799.o222), (o296(o292)))));
                            (o785 = (new o221(o786, null)));
                            (o800.o223 = o785);
                            (o800 = (o800.o223));
                            (o801 = (o801.o223));
                        }
                    }
                    (o784 = (o812.o223));
                    (o811 = (o381(o784)));
                    (o810 = (o811.length));
                    (o809 = (o814.length));
                    (o808 = (o820(o810, o809)));
                    (o807 = (o817[(0)]));
                    (o824(o808, (0), o807, (0)));
                    (o827(o808, (0), o817, o816, o815, o814, o818));
                    (o797 = (0));
                    while ((o797<o810)) {
                        {
                            (o796 = ((o811[o797]).o223));
                            (o824(o808, (o797+(1)), o796, o797));
                            (o827(o808, (o797+(1)), o817, o816, o815, o814, o818));
                            (++o797);
                        }
                    }
                    (o806 = (o811.length));
                    (o805 = (o814.length));
                    (o804 = (o818.length));
                    (o803 = (o820(o806, o805)));
                    (o802 = (o816[(0)]));
                    (o269 = o802);
                    while ((o269 instanceof o221)) {
                        {
                            (o778 = (o269.o222));
                            (o825(o808, o803, o806, o778, (0)));
                            (o269 = (o269.o223));
                        }
                    }
                    (o63 = o806);
                    while ((o63>=(0))) {
                        {
                            (o795 = o808);
                            (o794 = o803);
                            (o793 = o63);
                            (o792 = o816);
                            (o791 = o814);
                            (o790 = o804);
                            (o789 = o811);
                            (o788 = (o803[o63]));
                            o787 = function() {
                                var o935;
                                var o894;
                                var o936;
                                var o937;
                                var o392;
                                var o63;
                                var o938;
                                var o407;
                                var o840;
                                var o939;
                                {
                                    (o939 = (o788[(0)]));
                                    if ((o939>=(0)))
                                        {
                                            (o840 = (o788[(o939+(1))]));
                                            (o407 = (o840[(4)]));
                                            (o788[(0)] = (o840[(0)]));
                                            (o822(o840));
                                            (o938 = o407);
                                            while ((o938>=(0))) {
                                                {
                                                    (o63 = o938);
                                                    (o392 = o793);
                                                    (o937 = o795);
                                                    (o936 = o794);
                                                    (o894 = (o939-(1)));
                                                    if (((o939>=o790)&&((o791[o894])>=(0))))
                                                        {
                                                            o935 = function(o269) {
                                                                var o302;
                                                                var o896;
                                                                var o837;
                                                                var o862;
                                                                var o269;
                                                                while (true) {
                                                                    if ((o269 instanceof o221))
                                                                        {
                                                                            (o862 = (o269.o222));
                                                                            (o896 = ((o837 = (o937[o392])), (o837[(o862+(1))])));
                                                                            if ((o896!== false))
                                                                                {
                                                                                    (o302 = (o896[(2)]));
                                                                                    while ((o302>=(0))) {
                                                                                        {
                                                                                            if ((o302>=o63))
                                                                                                if (((o825(o937, o936, o302, o894, o63))!== false))
                                                                                                    (o825(o937, o936, o392, o862, o302));
                                                                                            (o302 = (o896[(o302+(5))]));
                                                                                        }
                                                                                    }
                                                                                    return (o935((o269.o223)));
                                                                                }
                                                                            else
                                                                                (o269 = (o269.o223));
                                                                        }
                                                                    else
                                                                        return undefined;
                                                                }
                                                            };
                                                            (o935((o792[(o791[o894])])));
                                                        }
                                                    (o938 = (o840[(o938+(5))]));
                                                }
                                            }
                                            return (o787());
                                        }
                                    else
                                        return undefined;
                                }
                            };
                            (o787());
                            (--o63);
                        }
                    }
                    (o702 = o803);
                    return [o818, o817, o816, o815, o814, o813, o811, o702, o828, o830, o832];
                }
            };
        }
    };
    o739 = function(parse, o765, o63, o392) {
        var o828;
        var o795;
        var o751;
        var o753;
        return ((o753 = (parse[(0)])), (o751 = (parse[(2)])), (o795 = (parse[(7)])), (o828 = (parse[(8)])), (o828(o765, o63, o392, o753, o751, o795)));
    };
    o740 = function(parse, o765, o63, o392) {
        var o941;
        var o795;
        var o789;
        var o748;
        var o749;
        var o751;
        var o753;
        return ((o753 = (parse[(0)])), (o751 = (parse[(2)])), (o749 = (parse[(4)])), (o748 = (parse[(5)])), (o789 = (parse[(6)])), (o795 = (parse[(7)])), (o941 = (parse[(9)])), (o941(o765, o63, o392, o753, o751, o749, o748, o789, o795)));
    };
    o738 = function(parse, o765, o63, o392) {
        var o942;
        var o795;
        var o789;
        var o749;
        var o751;
        var o753;
        return ((o753 = (parse[(0)])), (o751 = (parse[(2)])), (o749 = (parse[(4)])), (o789 = (parse[(6)])), (o795 = (parse[(7)])), (o942 = (parse[(10)])), (o942(o765, o63, o392, o753, o751, o749, o789, o795)));
    };
    test = function(o302) {
        var o110;
        var o229;
        return ((o229 = (o741(o742, function(o269) {
            var o943;
            var o944;
            var o945;
            var o946;
            {
                (o946 = (new o221(null, null)));
                (o944 = o946);
                (o945 = o269);
                while (!(o945 === null)) {
                    {
                        (o944.o223 = (new o221(((o943 = (o945.o222)), (o274(o943, o943))), null)));
                        (o944 = (o944.o223));
                        (o945 = (o945.o223));
                    }
                }
                return (o946.o223);
            }
        }))), (o110 = (o229((o380((o372(o302, "\u1E9Ca"))))))), (o281((o740(o110, "\u1E9Cs", (0), o302)))));
    };
    o97 = function() {
        var o397 = null;
        for (var o696 = arguments.length - 1; o696 >= 0; o696--) {
            o397 = o234(arguments[o696], o397);
        }
        var o302;
        return ((o302 = ((o397 === null)?(7):(o397.o222))), (o697("earley", (1), function() {
            return (test(o302));
        }, function(o62) {
            return ((o615(o62)), (o616()), o62 == 132);
        })));
    };
}


/************* END OF GENERATED CODE *************/
// Invoke this function to run a benchmark.
// The first argument is a string identifying the benchmark.
// The second argument is the number of times to run the benchmark.
// The third argument is a function that runs the benchmark.
// The fourth argument is a unary function that warns if the result
// returned by the benchmark is incorrect.
//
// Example:
// RunBenchmark("new Array()",
//              1,
//              function () { new Array(1000000); }
//              function (v) {
//                return (v instanceof Array) && (v.length == 1000000);
//              });

o599 = new o603(function(o37) {});
o628 = o599;

function o947(name, o948, o15, o949) {
  for (var o137 = 0; o137 < o948; ++o137) {
    o62 = o15();
    if (!o949(o62)) {
      throw new Error("Earley or Boyer did incorrect number of rewrites");
    }
  }
}

var o697 = o947;

////////////////////////////////////////////////////////////////////////////////
// Runner
////////////////////////////////////////////////////////////////////////////////

var o951 = true;

function o51(name) {
}

function o82(name, o83) {
  o0.o1(name + " : ERROR : " +o83.o952);
  o951 = false;
}

function o77(name, o57) {
  if (o951) {
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
