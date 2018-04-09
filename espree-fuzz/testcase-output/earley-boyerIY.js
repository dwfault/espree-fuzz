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
    var o2 = {toJSON:function(){
  o1('o2');
  o3();
  return 'x';
}}
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
function o8(name, o9, o10, o11, 
                   o12, o13, o14, o15, o16) {
  this.name = name;
  this.o9 = o9;
  this.o10 = o10;
  this.o11 = o11;
  this.o12 = o12;
  this.o17 = o13 ? o13 : function() { };
  this.o18 = o14 ? o14 : function() { };
  this.o15 = o15 ? o15 : null; 
  this.o16 = o16 ? o16 : 32;
}


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

/////////////////////////////////////////////////////////////
// earley-boyer.js
/////////////////////////////////////////////////////////////

// This file is automatically generated by scheme2js, except for the
// benchmark harness code at the beginning and end of the file.

var o81 = new o23('EarleyBoyer', [666463], [
  new o8("Earley", true,  false, 2500, function () { o82(); }),
  new o8("Boyer", true, false, 200, function () { o83(); })
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


function o84() {
    o85.apply(null, arguments);
}
/*** META ((export *js*)) */
var o86 = this;

var o87=-1;
var o88="";

/*** META ((export #t)) */
var o12 = 0;

/*** META ((export #t)) */
function o92( o93 ) {
   return typeof o93;
}

/*** META ((export #t)) */
function o94() {
    var o95 = [o96("*error*")];
    for (var o51 = 0; o51 < arguments.length; o51++) {
        o95[o51+1] = arguments[o51];
    }
    throw o95;
}

/*** META ((export #t)
           (peephole (prefix "throw ")))
*/
function o97(o98) {
    throw o98;
}

/*** META ((export with-handler-lambda)) */
function o99(o100, o101) {
    try {
        return o101();
    } catch(o78) {
        if (!o78.o102)
            return o100(o78);
        else
            throw o78;
    }
}

var o103 = new Object();

/*** META ((export #t)) */
function o104(o105, key, o106) {
    var o107 = o103[o105];
    if (!o107) {
        o107 = new Object();
        o103[o105] = o107;
    }
    o107[key] = o106;
}

/*** META ((export #t)) */
function o108(o105, key) {
    var o107 = o103[o105];
    if (o107) {
        if (key in o107)
            return o107[key];
        else
            return false;
    } else
        return false;
}

/*** META ((export #t)) */
function o109(o105, key) {
    var o107 = o103[o105];
    if (o107)
        delete o107[key];
}

/*** META ((export #t)) */
function o110(o111) {
    return o112(o91(o111));
}

/*** META ((export #t)
           (peephole (infix 2 2 "==="))
           (type bool))
*/
function o113(o114, o115) {
    return (o114 === o115);
}

/*** META ((export #t)
           (peephole (infix 2 2 "==="))
           (type bool))
*/
function o116(o114, o115) {
    return (o114 === o115);
}

/*** META ((export #t)
           (type bool))
*/
function o117(o118) {
    return (typeof o118 === "number");
}

/*** META ((export #t)
           (type bool))
*/
function o119(o118) {
    return o117(o118);
}

/*** META ((export #t)
           (type bool))
*/
function o120(o118) {
    return o117(o118);
}

/*** META ((export #t)
           (type bool))
*/
function o121(o118) {
    return o120(o118);
}

/*** META ((export #t)
           (type bool))
*/
function o122(o118) {
    return (parseInt(o118) === o118);
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix ", false")))
*/
// we don't have exact numbers...
function o123(o118) {
    return false;
}

/*** META ((export #t)
           (peephole (postfix ", true"))
           (type bool))
*/
function o124(o118) {
    return true;
}

/*** META ((export = =fx =fl)
           (type bool)
           (peephole (infix 2 2 "===")))
*/
function o125(o93) {
    for (var o51 = 1; o51 < arguments.length; o51++)
        if (o93 !== arguments[o51])
            return false;
    return true;
}

/*** META ((export < <fx <fl)
           (type bool)
           (peephole (infix 2 2 "<")))
*/
function o126(o93) {
    for (var o51 = 1; o51 < arguments.length; o51++) {
        if (o93 >= arguments[o51])
            return false;
        o93 = arguments[o51];
    }
    return true;
}

/*** META ((export > >fx >fl)
           (type bool)
           (peephole (infix 2 2 ">")))
*/
function o127(o93, o128) {
    for (var o51 = 1; o51 < arguments.length; o51++) {
        if (o93 <= arguments[o51])
            return false;
        o93 = arguments[o51];
    }
    return true;
}

/*** META ((export <= <=fx <=fl)
           (type bool)
           (peephole (infix 2 2 "<=")))
*/
function o129(o93, o128) {
    for (var o51 = 1; o51 < arguments.length; o51++) {
        if (o93 > arguments[o51])
            return false;
        o93 = arguments[o51];
    }
    return true;
}

/*** META ((export >= >=fl >=fx)
           (type bool)
           (peephole (infix 2 2 ">=")))
*/
function o130(o93, o128) {
    for (var o51 = 1; o51 < arguments.length; o51++) {
        if (o93 < arguments[o51])
            return false;
        o93 = arguments[o51];
    }
    return true;
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix "=== 0")))
*/
function o131(o93) {
    return (o93 === 0);
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix "> 0")))
*/
function o132(o93) {
    return (o93 > 0);
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix "< 0")))
*/
function o133(o93) {
    return (o93 < 0);
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix "%2===1")))
*/
function o134(o93) {
    return (o93 % 2 === 1);
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix "%2===0")))
*/
function o135(o93) {
    return (o93 % 2 === 0);
}

/*** META ((export #t)) */
var o136 = Math.o137;
/*** META ((export #t)) */
var o138 = Math.o139;

/*** META ((export + +fx +fl)
           (peephole (infix 0 #f "+" "0")))
*/
function o140() {
    var o141 = 0;
    for (var o51 = 0; o51 < arguments.length; o51++)
        o141 += arguments[o51];
    return o141;
}

/*** META ((export * *fx *fl)
           (peephole (infix 0 #f "*" "1")))
*/
function o142() {
    var o143 = 1;
    for (var o51 = 0; o51 < arguments.length; o51++)
        o143 *= arguments[o51];
    return o143;
}

/*** META ((export - -fx -fl)
           (peephole (minus)))
*/
function o144(o93) {
    if (arguments.length === 1)
        return -o93;
    else {
        var o145 = o93;
        for (var o51 = 1; o51 < arguments.length; o51++)
            o145 -= arguments[o51];
        return o145;
    }
}

/*** META ((export / /fl)
           (peephole (div)))
*/
function o146(o93) {
    if (arguments.length === 1)
        return 1/o93;
    else {
        var o145 = o93;
        for (var o51 = 1; o51 < arguments.length; o51++)
            o145 /= arguments[o51];
        return o145;
    }
}

/*** META ((export #t)) */
var o147 = Math.abs;

/*** META ((export quotient /fx)
           (peephole (hole 2 "parseInt(" x "/" y ")")))
*/
function o148(o93, o128) {
    return parseInt(o93 / o128);
}

/*** META ((export #t)
           (peephole (infix 2 2 "%")))
*/
function o149(o93, o128) {
    return o93 % o128;
}

/*** META ((export #t)
           (peephole (modulo)))
*/
function o150(o93, o128) {
    var o151 = o93 % o128;
    // if they don't have the same sign
    if ((o151 * o128) < 0)
        return o151 + o128;
    else
        return o151;
}

function o152(o95, o153) {
    var o154;
    if (o95 === 0) return o153;
    if (o153 === 0) return o95;
    if (o95 < 0) {o95 = -o95;};
    if (o153 < 0) {o153 = -o153;};
    if (o153 > o95) {o154 = o95; o95 = o153; o153 = o154;};
    while (true) {
        o95 %= o153;
        if(o95 === 0) {return o153;};
        o153 %= o95;
        if(o153 === 0) {return o95;};
    };
    return o153;
}

/*** META ((export #t)) */
function o155() {
    var o156 = 0;
    for (var o51 = 0; o51 < arguments.length; o51++)
        o156 = o152(o156, arguments[o51]);
    return o156;
}

/*** META ((export #t)) */
function o157() {
    var o158 = 1;
    for (var o51 = 0; o51 < arguments.length; o51++) {
        var o159 = Math.o160(arguments[o51] / o152(arguments[o51], o158));
        o158 *= Math.abs(o159);
    }
    return o158;
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
var o161 = Math.floor;
/*** META ((export #t)) */
var o162 = Math.ceil;
/*** META ((export #t)) */
var o163 = parseInt;
/*** META ((export #t)) */
var o164 = Math.o160;

// LIMITATION: sc_rationalize doesn't make sense in a floating point world.

/*** META ((export #t)) */
var o165 = Math.o166;
/*** META ((export #t)) */
var o167 = Math.o53;
/*** META ((export #t)) */
var o168 = Math.sin;
/*** META ((export #t)) */
var o169 = Math.cos;
/*** META ((export #t)) */
var o170 = Math.tan;
/*** META ((export #t)) */
var o171 = Math.o172;
/*** META ((export #t)) */
var o173 = Math.acos;
/*** META ((export #t)) */
var o174 = Math.o175;

/*** META ((export #t)) */
var o176 = Math.sqrt;
/*** META ((export #t)) */
var o177 = Math.o54;

// LIMITATION: we don't have complex numbers.
// LIMITATION: the following functions are hence not implemented.
// LIMITATION: make-rectangular, make-polar, real-part, imag-part, magnitude, angle
// LIMITATION: 2 argument atan

/*** META ((export #t)
           (peephole (id)))
*/
function o178(o93) {
    return o93;
}

/*** META ((export #t)
           (peephole (id)))
*/
function o179(o93) {
    return o93;
}

function o180(o93, o181) {
    if (o181)
        return o93.toString(o181);
    else
        return o93.toString();
}

function o182(o30, o181) {
    if (o30 === "") return false;

    if (o181) {
        var o183 = parseInt(o30, o181);
        if (!o183 && o183 !== 0) return false;
        // verify that each char is in range. (parseInt ignores leading
        // white and trailing chars)
        var o184 = "01234567890abcdefghijklmnopqrstuvwxyz".substring(0, o181+1);
        if ((new RegExp("^["+o184+"]*$", "i")).test(o30))
            return o183;
        else return false;
    } else {
        var o183 = +o30; // does not ignore trailing chars.
        if (!o183 && o183 !== 0) return false;
        // simply verify that first char is not whitespace.
        var o185 = o30.charAt(0);
        // if +c is 0, but the char is not "0", then we have a whitespace.
        if (+o185 === 0 && o185 !== "0") return false;
        return o183;
    }
}

/*** META ((export #t)
           (type bool)
           (peephole (not)))
*/
function o186(o153) {
    return o153 === false;
}

/*** META ((export #t)
           (type bool))
*/
function o187(o153) {
    return (o153 === true) || (o153 === false);
}

function o188(o189, o190) {
    this.o189 = o189;
    this.o190 = o190;
}

o188.prototype.toString = function() {
    return o91(this);
};
o188.prototype.o191 = function(o192) {
    var o193 = this;

    var o145 = "(";

    while(true) {
        o145 += o192(o193.o189);
        if (o194(o193.o190)) {
            o145 += " ";
            o193 = o193.o190;
    } else if (o193.o190 !== null) {
            o145 += " . " + o192(o193.o190);
            break;
    } else // current.cdr == null
            break;
    }
        
    o145 += ")";

    return o145;
};
o188.prototype.o91 = function() {
    return this.o191(o91);
};
o188.prototype.o195 = function() {
    return this.o191(o195);
};
// sc_Pair.prototype.sc_toWriteCircleString in IO.js

/*** META ((export #t)
           (type bool)
           (peephole (postfix " instanceof sc_Pair")))
*/
function o194(o196) {
    return (o196 instanceof o188);
}

function o197(o198, o199, o200) {
    return (o200(o198.o189, o199.o189) && o200(o198.o190, o199.o190));
}

/*** META ((export #t)
           (peephole (hole 2 "new sc_Pair(" car ", " cdr ")")))
*/
function o201(o189, o190) {
    return new o188(o189, o190);
}

/*** META ((export cons*)) */
function o202() {
    var o145 = arguments[arguments.length - 1];
    for (var o51 = arguments.length-2; o51 >= 0; o51--)
        o145 = new o188(arguments[o51], o145);
    return o145;
}

/*** META ((export #t)
           (peephole (postfix ".car")))
*/
function o203(o196) {
    return o196.o189;
}

/*** META ((export #t)
           (peephole (postfix ".cdr")))
*/
function o204(o196) {
    return o196.o190;
}

/*** META ((export #t)
           (peephole (hole 2 p ".car = " val)))
*/
function o205(o196, o106) {
    o196.o189 = o106;
}

/*** META ((export #t)
           (peephole (hole 2 p ".cdr = " val)))
*/
function o206(o196, o106) {
    o196.o190 = o106;
}

/*** META ((export #t)
           (peephole (postfix ".car.car")))
*/
function o207(o196) { return o196.o189.o189; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car")))
*/
function o208(o196) { return o196.o190.o189; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr")))
*/
function o209(o196) { return o196.o189.o190; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr")))
*/
function o210(o196) { return o196.o190.o190; }
/*** META ((export #t)
           (peephole (postfix ".car.car.car")))
*/
function o211(o196) { return o196.o189.o189.o189; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr.car")))
*/
function o212(o196) { return o196.o189.o190.o189; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.car")))
*/
function o213(o196) { return o196.o190.o189.o189; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr.car")))
*/
function o214(o196) { return o196.o190.o190.o189; }
/*** META ((export #t)
           (peephole (postfix ".car.car.cdr")))
*/
function o215(o196) { return o196.o189.o189.o190; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.cdr")))
*/
function o216(o196) { return o196.o190.o189.o190; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr.cdr")))
*/
function o217(o196) { return o196.o189.o190.o190; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr.cdr")))
*/
function o218(o196) { return o196.o190.o190.o190; }
/*** META ((export #t)
           (peephole (postfix ".car.car.car.car")))
*/
function o219(o196) { return o196.o189.o189.o189.o189; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr.car.car")))
*/
function o220(o196) { return o196.o189.o190.o189.o189; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.car.car")))
*/
function o221(o196) { return o196.o190.o189.o189.o189; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr.car.car")))
*/
function o222(o196) { return o196.o190.o190.o189.o189; }
/*** META ((export #t)
           (peephole (postfix ".car.car.car.cdr")))
*/
function o223(o196) { return o196.o189.o189.o189.o190; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr.car.cdr")))
*/
function o224(o196) { return o196.o189.o190.o189.o190; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.car.cdr")))
*/
function o225(o196) { return o196.o190.o189.o189.o190; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr.car.cdr")))
*/
function o226(o196) { return o196.o190.o190.o189.o190; }
/*** META ((export #t)
           (peephole (postfix ".car.car.cdr.car")))
*/
function o227(o196) { return o196.o189.o189.o190.o189; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr.cdr.car")))
*/
function o228(o196) { return o196.o189.o190.o190.o189; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.cdr.car")))
*/
function o229(o196) { return o196.o190.o189.o190.o189; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr.cdr.car")))
*/
function o230(o196) { return o196.o190.o190.o190.o189; }
/*** META ((export #t)
           (peephole (postfix ".car.car.cdr.cdr")))
*/
function o231(o196) { return o196.o189.o189.o190.o190; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr.cdr.cdr")))
*/
function o232(o196) { return o196.o189.o190.o190.o190; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.cdr.cdr")))
*/
function o233(o196) { return o196.o190.o189.o190.o190; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr.cdr.cdr")))
*/
function o234(o196) { return o196.o190.o190.o190.o190; }

/*** META ((export #t)) */
function o235(o236) {
    if (!o194(o236)) o94("sc_lastPair: pair expected");
    var o145 = o236;
    var o190 = o236.o190;
    while (o194(o190)) {
        o145 = o190;
        o190 = o145.o190;
    }
    return o145;
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix " === null")))
*/
function o237(o111) {
    return (o111 === null);
}

/*** META ((export #t)
           (type bool))
*/
function o238(o111) {
    var o239;
    var o240;

    var o239 = o111;
    var o240 = o111;
    while (true) {
        if (o239 === null ||
            (o239 instanceof o188 && o239.o190 === null))
            return true;  // end of list
        else if ((o239 instanceof o188) &&
                 (o239.o190 instanceof o188)) {
            o239 = o239.o190.o190;
            o240 = o240.o190;
            if (o239 === o240) return false; // cycle
    } else
            return false; // not pair
    }
}

/*** META ((export #t)) */
function o241() {
    var o145 = null;
    var o95 = arguments;
    for (var o51 = o95.length-1; o51 >= 0; o51--)
        o145 = new o188(o95[o51], o145);
    return o145;
}

/*** META ((export #t)) */
function o242(o243, o244) {
   var o145 = null;
   if (!o244) o244 = 0;
   for (var o51 = o243 - 1; o51 >= 0; o51--)
      o145 = new o188(o51 + o244, o145);
   return o145;
}

/*** META ((export #t)) */
function o245(o246, fill) {
    var o145 = null;
    for (var o51 = 0; o51 < o246; o51++)
        o145 = new o188(fill, o145);
    return o145;
}

/*** META ((export #t)) */
function o247(o236) {
    var o145 = 0;
    while (o236 !== null) {
        o145++;
        o236 = o236.o190;
    }
    return o145;
}

/*** META ((export #t)) */
function o248(o111, o236) {
    var o249 = { o190 : null };
    var o250 = o249;
    while (o236 !== null) {
        if (o236.o189 !== o111) {
            o250.o190 = o201(o236.o189, null);
            o250 = o250.o190;
    }
        o236 = o236.o190;
    }
    return o249.o190;
}

/*** META ((export #t)) */
function o251(o111, o236) {
    var o249 = { o190 : null };
    var o250 = o249;
    var o252 = true;
    while (o236 !== null) {
        if (o236.o189 === o111) {
            o252 = true;
    } else {
            if (o252) {
                o250.o190 = o236;
                o252 = false;
            }
            o250 = o236;
    }
        o236 = o236.o190;
    }
    o250.o190 = null;
    return o249.o190;
}

/*** META ((export #t)) */
function o253(o111, o236) {
    var o249 = { o190 : null };
    var o250 = o249;
    while (o236 !== null) {
        if (!o254(o236.o189, o111)) {
            o250.o190 = o201(o236.o189, null);
            o250 = o250.o190;
    }
        o236 = o236.o190;
    }
    return o249.o190;
}

/*** META ((export #t)) */
function o255(o111, o236) {
    var o249 = { o190 : null };
    var o250 = o249;
    var o252 = true;
    while (o236 !== null) {
        if (o254(o236.o189, o111)) {
            o252 = true;
    } else {
            if (o252) {
                o250.o190 = o236;
                o252 = false;
            }
            o250 = o236;
    }
        o236 = o236.o190;
    }
    o250.o190 = null;
    return o249.o190;
}

function o256(o257, o258) {
    var o145 = o258;
    while (o257 !== null) {
        var o259 = o145;
        o145 = o257;
        o257 = o257.o190;
        o145.o190 = o259;
    }
    return o145;
}
        
function o260(o257, o258) {
    if (o257 === null) return o258;
    if (o258 === null) return o257;
    var o261 = o262(o257);
    return o256(o261, o258);
}

/*** META ((export #t)) */
function o263() {
    if (arguments.length === 0)
        return null;
    var o145 = arguments[arguments.length - 1];
    for (var o51 = arguments.length - 2; o51 >= 0; o51--)
        o145 = o260(arguments[o51], o145);
    return o145;
}

function o264(o257, o258) {
    if (o257 === null) return o258;
    if (o258 === null) return o257;
    var o259 = o257;
    while (o259.o190 !== null) o259=o259.o190;
    o259.o190 = o258;
    return o257;
}

/*** META ((export #t)) */
function o265() {
    var o145 = null;
    for (var o51 = 0; o51 < arguments.length; o51++)
        o145 = o264(o145, arguments[o51]);
    return o145;
}

/*** META ((export #t)) */
function o262(o257) {
    var o145 = null;
    while (o257 !== null) {
        o145 = o201(o257.o189, o145);
        o257 = o257.o190;
    }
    return o145;
}

/*** META ((export #t)) */
function o266(o236) {
    return o256(o236, null);
}

/*** META ((export #t)) */
function o267(o236, o268) {
    var o145 = o236;
    for (var o51 = 0; o51 < o268; o51++) {
        o145 = o145.o190;
    }
    return o145;
}

/*** META ((export #t)) */
function o269(o236, o268) {
    return o267(o236, o268).o189;
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
function o270(o111, o236) {
    while (o236 !== null) {
        if (o236.o189 === o111)
            return o236;
        o236 = o236.o190;
    }
    return false;
}
/*** META ((export #t)) */
function o271(o111, o236) {
    while (o236 !== null) {
        if (o236.o189 === o111)
            return o236;
        o236 = o236.o190;
    }
    return false;
}
/*** META ((export #t)) */
function o272(o111, o236) {
    while (o236 !== null) {
        if (o254(o236.o189,o111))
            return o236;
        o236 = o236.o190;
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
function o273(o111, o274) {
    while (o274 !== null) {
        if (o274.o189.o189 === o111)
            return o274.o189;
        o274 = o274.o190;
    }
    return false;
}
/*** META ((export #t)) */
function o275(o111, o274) {
    while (o274 !== null) {
        if (o274.o189.o189 === o111)
            return o274.o189;
        o274 = o274.o190;
    }
    return false;
}
/*** META ((export #t)) */
function o276(o111, o274) {
    while (o274 !== null) {
        if (o254(o274.o189.o189, o111))
            return o274.o189;
        o274 = o274.o190;
    }
    return false;
}

/* can be used for mutable strings and characters */
function o277(o278, o279) { return o278.o106 === o279.o106; }
function o280(o278, o279) { return o278.o106 < o279.o106; }
function o281(o278, o279) { return o278.o106 > o279.o106; }
function o282(o278, o279) { return o278.o106 <= o279.o106; }
function o283(o278, o279) { return o278.o106 >= o279.o106; }
function o284(o278, o279)
    { return o278.o106.toLowerCase() === o279.o106.toLowerCase(); }
function o285(o278, o279)
    { return o278.o106.toLowerCase() < o279.o106.toLowerCase(); }
function o286(o278, o279)
    { return o278.o106.toLowerCase() > o279.o106.toLowerCase(); }
function o287(o278, o279)
    { return o278.o106.toLowerCase() <= o279.o106.toLowerCase(); }
function o288(o278, o279)
    { return o278.o106.toLowerCase() >= o279.o106.toLowerCase(); }




function o289(o185) {
    var o290 = o289.o291[o185];
    if (o290)
        return o290;
    this.o106 = o185;
    o289.o291[o185] = this;
    // add return, so FF does not complain.
    return undefined;
}
o289.o291 = new Object();
// thanks to Eric
o289.o292 = {
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

o289.o293 = {
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

o289.prototype.toString = function() {
    return this.o106;
};
// sc_toDisplayString == toString
o289.prototype.o195 = function() {
    var o294 = o289.o292[this.o106];
    if (o294)
        return o294;
    else
        return "#\\" + this.o106;
};

/*** META ((export #t)
           (type bool)
           (peephole (postfix "instanceof sc_Char")))
*/
function o295(o185) {
    return (o185 instanceof o289);
}

/*** META ((export char=?)
           (type bool)
           (peephole (hole 2 c1 ".val === " c2 ".val")))
*/
var o296 = o277;
/*** META ((export char<?)
           (type bool)
           (peephole (hole 2 c1 ".val < " c2 ".val")))
*/
var o297 = o280;
/*** META ((export char>?)
           (type bool)
           (peephole (hole 2 c1 ".val > " c2 ".val")))
*/
var o298 = o281;
/*** META ((export char<=?)
           (type bool)
           (peephole (hole 2 c1 ".val <= " c2 ".val")))
*/
var o299 = o282;
/*** META ((export char>=?)
           (type bool)
           (peephole (hole 2 c1 ".val >= " c2 ".val")))
*/
var o300 = o283;
/*** META ((export char-ci=?)
           (type bool)
           (peephole (hole 2 c1 ".val.toLowerCase() === " c2 ".val.toLowerCase()")))
*/
var o301 = o284;
/*** META ((export char-ci<?)
           (type bool)
           (peephole (hole 2 c1 ".val.toLowerCase() < " c2 ".val.toLowerCase()")))
*/
var o302 = o285;
/*** META ((export char-ci>?)
           (type bool)
           (peephole (hole 2 c1 ".val.toLowerCase() > " c2 ".val.toLowerCase()")))
*/
var o303 = o286;
/*** META ((export char-ci<=?)
           (type bool)
           (peephole (hole 2 c1 ".val.toLowerCase() <= " c2 ".val.toLowerCase()")))
*/
var o304 = o287;
/*** META ((export char-ci>=?)
           (type bool)
           (peephole (hole 2 c1 ".val.toLowerCase() >= " c2 ".val.toLowerCase()")))
*/
var o305 = o288;

var o306 = "0123456789";
var o307 = ' \r\n\t\f';
var o308 = 'abcdefghijklmnopqrstuvwxyz';
var o309 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function o310(o185, o311) { return (o311.indexOf(o185) != -1); }
/*** META ((export #t)
           (type bool))
*/
function o312(o185)
    { return o310(o185.o106, o308) ||
          o310(o185.o106, o309); }
/*** META ((export #t)
           (type bool)
           (peephole (hole 1 "SC_NUMBER_CLASS.indexOf(" c ".val) != -1")))
*/
function o313(o185)
    { return o310(o185.o106, o306); }
/*** META ((export #t)
           (type bool))
*/
function o314(o185) {
    var o259 = o185.o106;
    return o259 === " " || o259 === "\r" || o259 === "\n" || o259 === "\t" || o259 === "\f";
}
/*** META ((export #t)
           (type bool)
           (peephole (hole 1 "SC_UPPER_CLASS.indexOf(" c ".val) != -1")))
*/
function o315(o185)
    { return o310(o185.o106, o309); }
/*** META ((export #t)
           (type bool)
           (peephole (hole 1 "SC_LOWER_CLASS.indexOf(" c ".val) != -1")))
*/
function o316(o185)
    { return o310(o185.o106, o308); }

/*** META ((export #t)
           (peephole (postfix ".val.charCodeAt(0)")))
*/
function o317(o185)
    { return o185.o106.charCodeAt(0); }
/*** META ((export #t)
           (peephole (hole 1 "new sc_Char(String.fromCharCode(" n "))")))
*/
function o318(o118)
    { return new o289(String.fromCharCode(o118)); }

/*** META ((export #t)
           (peephole (hole 1 "new sc_Char(" c ".val.toUpperCase())")))
*/
function o319(o185)
    { return new o289(o185.o106.toUpperCase()); }
/*** META ((export #t)
           (peephole (hole 1 "new sc_Char(" c ".val.toLowerCase())")))
*/
function o320(o185)
    { return new o289(o185.o106.toLowerCase()); }

function o321(o268, o185) {
    var fill;
    if (o185 === undefined)
        fill = " ";
    else
        fill = o185;
    var o145 = "";
    var o90 = 1;
    // every round doubles the size of fill.
    while (o268 >= o90) {
        if (o268 & o90)
            o145 = o145.concat(fill);
        fill = fill.concat(fill);
        o90 *= 2;
    }
    return o145;
}

function o322(o268, o185) {
    var fill;
    if (o185)
        fill = o185.o106;
    else
        fill = " ";
    return o321(o268, fill);
}

function o323(o30) {
    var o145 = null;
    for (var o51 = o30.length - 1; o51 >= 0; o51--)
        o145 = o201(new o289(o30.charAt(o51)), o145);
    return o145;
}

function o324(o236) {
    var o95 = new Array();
    while(o236 !== null) {
        o95.push(o236.o189.o106);
        o236 = o236.o190;
    }
    return "".concat.apply("", o95);
}

var o325 = Array;

o325.prototype.o191 = function(o192) {
    if (this.length === 0) return "#()";

    var o145 = "#(" + o192(this[0]);
    for (var o51 = 1; o51 < this.length; o51++)
        o145 += " " + o192(this[o51]);
    o145 += ")";
    return o145;
};
o325.prototype.o91 = function() {
    return this.o191(o91);
};
o325.prototype.o195 = function() {
    return this.o191(o195);
};

/*** META ((export vector? array?)
           (type bool)
           (peephole (postfix " instanceof sc_Vector")))
*/
function o326(o327) {
    return (o327 instanceof o325);
}

// only applies to vectors
function o328(o329, o330, o200) {
    if (o329.length !== o330.length) return false;
    for (var o51 = 0; o51 < o329.length; o51++)
        if (!o200(o329[o51], o330[o51])) return false;
    return true;
}

/*** META ((export make-vector make-array)) */
function o331(o332, fill) {
    var o95 = new o325(o332);
    if (fill !== undefined)
        o333(o95, fill);
    return o95;
}

/*** META ((export vector array)
           (peephole (vector)))
*/
function o334() {
    var o95 = new o325();
    for (var o51 = 0; o51 < arguments.length; o51++)
        o95.push(arguments[o51]);
    return o95;
}

/*** META ((export vector-length array-length)
           (peephole (postfix ".length")))
*/
function o335(o327) {
    return o327.length;
}

/*** META ((export vector-ref array-ref)
           (peephole (hole 2 v "[" pos "]")))
*/
function o336(o327, o337) {
    return o327[o337];
}

/*** META ((export vector-set! array-set!)
           (peephole (hole 3 v "[" pos "] = " val)))
*/
function o338(o327, o337, o106) {
    o327[o337] = o106;
}

/*** META ((export vector->list array->list)) */
function o339(o95) {
    var o145 = null;
    for (var o51 = o95.length-1; o51 >= 0; o51--)
        o145 = o201(o95[o51], o145);
    return o145;
}

/*** META ((export list->vector list->array)) */
function o340(o236) {
    var o95 = new o325();
    while(o236 !== null) {
        o95.push(o236.o189);
        o236 = o236.o190;
    }
    return o95;
}

/*** META ((export vector-fill! array-fill!)) */
function o333(o95, fill) {
    for (var o51 = 0; o51 < o95.length; o51++)
        o95[o51] = fill;
}


/*** META ((export #t)) */
function o341(o95, o90) {
    if (o90 <= o95.length)
        return o95.slice(0, o90);
    else {
        var o259 = o95.concat();
        o259.length = o90;
        return o259;
    }
}

/*** META ((export #t)
           (peephole (hole 3 a ".slice(" start "," end ")")))
*/
function o342(o95, o73, o343) {
    return o95.slice(o73, o343);
}

/*** META ((export #t)) */
function o344(target, o345, source, o346, o347) {
    if (!o346) o346 = 0;
    if (!o347) o347 = source.length;

    // if target == source we don't want to overwrite not yet copied elements.
    if (o345 <= o346) {
        for (var o51 = o345, o348 = o346; o348 < o347; o51++, o348++) {
            target[o51] = source[o348];
    }
    } else {
        var o349 = o347 - o346;
        for (var o51 = o345 + o349 - 1, o348 = o347 - 1;
             o348 >= o346;
             o51--, o348--) {
            target[o51] = source[o348];
    }
    }
    return target;
}

/*** META ((export #t)
           (type bool)
           (peephole (hole 1 "typeof " o " === 'function'")))
*/
function o350(o111) {
    return (typeof o111 === "function");
}

/*** META ((export #t)) */
function o351(o352) {
    var o353 = new Array();
    // first part of arguments are not in list-form.
    for (var o51 = 1; o51 < arguments.length - 1; o51++)
        o353.push(arguments[o51]);
    var o236 = arguments[arguments.length - 1];
    while (o236 !== null) {
        o353.push(o236.o189);
        o236 = o236.o190;
    }
    return o352.apply(null, o353);
}

/*** META ((export #t)) */
function o354(o352, o257) {
    if (o257 === undefined)
        return null;
    // else
    var o355 = arguments.length - 1;
    var o356 = new Array(o355);
    var o357 = null;
    while (o257 !== null) {
        for (var o51 = 0; o51 < o355; o51++) {
            o356[o51] = arguments[o51 + 1].o189;
            arguments[o51 + 1] = arguments[o51 + 1].o190;
    }
        o357 = o201(o352.apply(null, o356), o357);
    }
    return o256(o357, null);
}

/*** META ((export #t)) */
function o358(o352, o257) {
    if (o257 === undefined)
        return null;
    // else
    var o359 = o257;
    var o355 = arguments.length - 1;
    var o356 = new Array(o355);
    while (o257 !== null) {
        var o259 = o257;
        for (var o51 = 0; o51 < o355; o51++) {
            o356[o51] = arguments[o51 + 1].o189;
            arguments[o51 + 1] = arguments[o51 + 1].o190;
    }
        o259.o189 = o352.apply(null, o356);
    }
    return o359;
}

/*** META ((export #t)) */
function o360(o352, o257) {
    if (o257 === undefined)
        return undefined;
    // else
    var o355 = arguments.length - 1;
    var o356 = new Array(o355);
    while (o257 !== null) {
        for (var o51 = 0; o51 < o355; o51++) {
            o356[o51] = arguments[o51 + 1].o189;
            arguments[o51 + 1] = arguments[o51 + 1].o190;
    }
        o352.apply(null, o356);
    }
    // add return so FF does not complain.
    return undefined;
}

/*** META ((export #t)) */
function o361(o352, o257) {
    var o249 = { o190 : null };
    var o250 = o249;
    while (o257 !== null) {
        if (o352(o257.o189) !== false) {
            o250.o190 = o201(o257.o189, null);
            o250 = o250.o190;
    }
        o257 = o257.o190;
    }
    return o249.o190;
}

/*** META ((export #t)) */
function o362(o352, o257) {
    var o363 = o201("dummy", o257);
    var o364 = o363;
    var next = o257;
    while (next !== null) {
        if (o352(next.o189) !== false) {
            o364.o190 = next
            o364 = next;
    }
        next = next.o190;
    }
    o364.o190 = null;
    return o363.o190;
}

function o365(o352, o257) {
    var o357 = null;
    while (o257 !== null) {
        var o259 = o352(o257.o189)
        if (o259 !== false) o357 = o201(o259, o357);
        o257 = o257.o190;
    }
    return o256(o357, null);
}
function o366(o352, o257, o258) {
    var o357 = null;
    while (o257 !== null) {
        var o259 = o352(o257.o189, o258.o189);
        if(o259 !== false) o357 = o201(o259, o357);
        o257 = o257.o190;
        o258 = o258.o190
    }
    return o256(o357, null);
}

/*** META ((export #t)) */
function o367(o352, o257, o258, o368) {
    if (o258 === undefined)
        return o365(o352, o257);
    else if (o368 === undefined)
        return o366(o352, o257, o258);
    // else
    var o355 = arguments.length - 1;
    var o356 = new Array(o355);
    var o357 = null;
    while (o257 !== null) {
        for (var o51 = 0; o51 < o355; o51++) {
            o356[o51] = arguments[o51 + 1].o189;
            arguments[o51 + 1] = arguments[o51 + 1].o190;
    }
        var o259 = o352.apply(null, o356);
        if(o259 !== false) o357 = o201(o259, o357);
    }
    return o256(o357, null);
}

/*** META ((export #t)) */
function o369(o352, o236) {
    var o357 = null;
    while (o236 !== null) {
        var o259 = o352(o236.o189);
        if(o259 !== false) return o259;
        o236 = o236.o190;
    }
    return false;
}

/*** META ((export any?)
           (peephole (hole 2 "sc_any(" proc "," l ") !== false")))
*/
function o370(o352, o236) {
    return o369(o352, o236)!== false;
}

/*** META ((export #t)) */
function o371(o352, o236) {
    var o357 = null;
    var o259 = true;
    while (o236 !== null) {
        o259 = o352(o236.o189);
        if (o259 === false) return false;
        o236 = o236.o190;
    }
    return o259;
}

/*** META ((export every?)
           (peephole (hole 2 "sc_every(" proc "," l ") !== false")))
*/
function o372(o352, o236) {
    var o259 = o371(o352, o236);
    if (o259 !== false) return true;
    return false;
}

/*** META ((export #t)
           (peephole (postfix "()")))
*/
function o373(o111) {
    return o111();
}

/*** META ((export #t)) */
function o374(o352) {
    var o375 = false;
    var o50 = undefined;
    return function() {
        if (!o375) {
            var o259 = o352();
            if (!o375) {
                o375 = true;
                o50 = o259;
            }
    }
        return o50;
    };
}

function o376(values) {
    this.values = values;
}

/*** META ((export #t)
           (peephole (values)))
*/
function o377() {
    if (arguments.length === 1)
        return arguments[0];
    else
        return new o376(arguments);
}

/*** META ((export #t)) */
function o378(o379, o380) {
    var o381 = o379();
    if (o381 instanceof o376)
        return o380.apply(null, o381.values);
    else
        return o380(o381);
}

/*** META ((export #t)) */
function o382(o383, o384, o385) {
    o383();
    try {
        var o145 = o384();
        return o145;
    } finally {
        o385();
    }
}


// TODO: eval/scheme-report-environment/null-environment/interaction-environment

// LIMITATION: 'load' doesn't exist without files.
// LIMITATION: transcript-on/transcript-off doesn't exist without files.


function o386(name) {
    this.name = name;
}
o386.prototype.o91 = function() {
    return "#<struct" + o387(this) + ">";
};
o386.prototype.o195 = o386.prototype.o91;

/*** META ((export #t)
           (peephole (hole 1 "new sc_Struct(" name ")")))
*/
function o388(name) {
    return new o386(name);
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix " instanceof sc_Struct")))
*/
function o389(o111) {
    return (o111 instanceof o386);
}

/*** META ((export #t)
           (type bool)
           (peephole (hole 2 "(" 1 " instanceof sc_Struct) && ( " 1 ".name === " 0 ")")))
*/
function o390(name, o30) {
    return ((o30 instanceof o386) && (o30.name === name));
}

/*** META ((export struct-field)
           (peephole (hole 3 0 "[" 2 "]")))
*/
function o391(o30, name, o392) {
    return o30[o392];
}

/*** META ((export struct-field-set!)
           (peephole (hole 4 0 "[" 2 "] = " 3)))
*/
function o393(o30, name, o392, o106) {
    o30[o392] = o106;
}

/*** META ((export #t)
           (peephole (prefix "~")))
*/
function o394(o93) {
    return ~o93;
}

/*** META ((export #t)
           (peephole (infix 2 2 "&")))
*/
function o395(o93, o128) {
    return o93 & o128;
}

/*** META ((export #t)
           (peephole (infix 2 2 "|")))
*/
function o396(o93, o128) {
    return o93 | o128;
}

/*** META ((export #t)
           (peephole (infix 2 2 "^")))
*/
function o397(o93, o128) {
    return o93 ^ o128;
}

/*** META ((export #t)
           (peephole (infix 2 2 "<<")))
*/
function o398(o93, o128) {
    return o93 << o128;
}

/*** META ((export #t)
           (peephole (infix 2 2 ">>")))
*/
function o399(o93, o128) {
    return o93 >> o128;
}

/*** META ((export #t)
           (peephole (infix 2 2 ">>>")))
*/
function o400(o93, o128) {
    return o93 >>> o128;
}

/*** META ((export js-field js-property)
           (peephole (hole 2 o "[" field "]")))
*/
function o401(o111, o392) {
    return o111[o392];
}

/*** META ((export js-field-set! js-property-set!)
           (peephole (hole 3 o "[" field "] = " val)))
*/
function o402(o111, o392, o106) {
    return o111[o392] = o106;
}

/*** META ((export js-field-delete! js-property-delete!)
           (peephole (hole 2 "delete" o "[" field "]")))
*/
function o403(o111, o392) {
    delete o111[o392];
}

/*** META ((export #t)
           (peephole (jsCall)))
*/
function o404(o111, o405) {
    var o353 = new Array();
    for (var o51 = 2; o51 < arguments.length; o51++)
        o353[o51-2] = arguments[o51];
    return o405.apply(o111, o353);
}

/*** META ((export #t)
           (peephole (jsMethodCall)))
*/
function o406(o111, o392) {
    var o353 = new Array();
    for (var o51 = 2; o51 < arguments.length; o51++)
        o353[o51-2] = arguments[o51];
    return o111[o392].apply(o111, o353);
}

/*** META ((export new js-new)
           (peephole (jsNew)))
*/
function o407(o185) {
    var o408 = "new c(";
    o408 +=arguments.length > 1? "arguments[1]": "";
    for (var o51 = 2; o51 < arguments.length; o51++)
        o408 += ", arguments[" + o51 + "]";
    o408 +=")";
    return eval(o408);
}

// ======================== RegExp ====================
/*** META ((export #t)) */
function o409(o410) {
    return new RegExp(o411(o410));
}

/*** META ((export #t)) */
function o412(o410, o30) {
    var o413 = (o410 instanceof RegExp) ? o410 : o409(o410);
    var o259 = o413.exec(o411(o30));

    if (o259 == null) return false;

    var o145 = null;
    for (var o51 = o259.length-1; o51 >= 0; o51--) {
        if (o259[o51] !== null) {
            o145 = o201(o414(o259[o51]), o145);
    } else {
            o145 = o201(false, o145);
    }
    }
    return o145;
}

/*** META ((export #t)) */
function o415(o410, o416, o417) {
   var o413;
   var o418 = o411(o416);
   var o419 = o411(o417);

   if (o410 instanceof RegExp) {
       if (o410.global)
           o413 = o410;
       else
           o413 = new RegExp(o410.source);
   } else {
       o413 = new RegExp(o411(o410));
   }

   return o418.replace(o413, o419);
}

/*** META ((export pregexp-replace*)) */
function o420(o410, o416, o417) {
   var o413;
   var o418 = o411(o416);
   var o419 = o411(o417);

   if (o410 instanceof RegExp) {
      if (o410.global)
          o413 = o410;
      else
          o413 = new RegExp(o410.source, "g");
   } else {
       o413 = new RegExp(o411(o410), "g");
   }

   return o418.replace(o413, o419);
}

/*** META ((export #t)) */
function o421(o410, o30) {
   var o413 = ((o410 instanceof RegExp) ?
              o410 :
              new RegExp(o411(o410)));
   var o422 = o411(o30);
   var o259 = o422.split(o413);

   if (o259 == null) return false;

   return o339(o259);
}


/* =========================================================================== */
/* Other library stuff */
/* =========================================================================== */

/*** META ((export #t)
           (peephole (hole 1 "Math.floor(Math.random()*" 'n ")")))
*/
function o423(o118) {
    return Math.floor(Math.random()*o118);
}

/*** META ((export current-date)
           (peephole (hole 0 "new Date()")))
*/
function o424() {
   return new Date();
}

function o425() {
}
o425.prototype.toString = function() {
    return "#{%hashtable}";
};
// sc_toWriteString == sc_toDisplayString == toString

function o426(key, o106) {
    this.key = key;
    this.o106 = o106;
}

/*** META ((export #t)
           (peephole (hole 0 "new sc_Hashtable()")))
*/
function o427() {
    return new o425();
}

/*** META ((export #t)) */
function o428(o107, key, o106) {
    var o429 = o387(key);
    o107[o429] = new o426(key, o106);
}

/*** META ((export #t)) */
function o430(o107, key) {
    var o429 = o387(key);
    if (o429 in o107)
        return o107[o429].o106;
    else
        return false;
}

/*** META ((export #t)) */
function o431(o107, o159) {
    for (var o327 in o107) {
        if (o107[o327] instanceof o426)
            o159(o107[o327].key, o107[o327].o106);
    }
}

/*** META ((export hashtable-contains?)
           (peephole (hole 2 "sc_hash(" 1 ") in " 0)))
*/
function o432(o107, key) {
    var o429 = o387(key);
    if (o429 in o107)
        return true;
    else
        return false;
}

var o433 = 0;

function o387(o111) {
    if (o111 === null)
        return "null";
    else if (o111 === undefined)
        return "undefined";
    else if (o111 === true)
        return "true";
    else if (o111 === false)
        return "false";
    else if (typeof o111 === "number")
        return "num-" + o111;
    else if (typeof o111 === "string")
        return "jsstr-" + o111;
    else if (o111.o434)
        return o111.o434();
    else
        return o435.call(o111);
}
function o435() {
    if (!this.o387) {
        this.o387 = "hash-" + o433;
        o433++;
    }
    return this.o387;
}

function o436(o353, o437) {
    this['__trampoline return__'] = true;
    this.o353 = o353;
    this.o438 = o437;
}
// TODO: call/cc stuff
o436.prototype.o439 = function() {
    var o111 = this;
    while (true) {
        // set both globals.
        o440.o441 = o111.o438-1;
        var o405 = o111.o353.callee;
        var o145 = o405.apply(o440, o111.o353);
        if (o145 instanceof o436)
            o111 = o145;
        else
            return o145;
    }
}

/*** META ((export bind-exit-lambda)) */
function o442(o352) {
    var o443 = new o444();
    var escape = function(o145) {
        o443.o145 = o145;
        throw o443;
    };
    try {
        return o352(escape);
    } catch(o78) {
        if (o78 === o443) {
            return o78.o145;
    }
        throw o78;
    }
}
function o444() {
    this.o102 = true;
}

var o445 = new Object();

// default tail-call depth.
// normally the program should set it again. but just in case...
var o440 = new Object();
o445.o446 = o440;
// ======================== I/O =======================

/*------------------------------------------------------------------*/

function o447() {
}
var o448 = new o447();

function o449() {
}

/* --------------- Input ports -------------------------------------*/

function o450() {
}
o450.prototype = new o449();

o450.prototype.o451 = function() {
    if (!("peeked" in this))
        this.o452 = this.o453();
    return this.o452;
}
o450.prototype.o454 = function() {
    var o259 = this.o451();
    delete this.o452;
    return o259;
}
o450.prototype.o455 = function() {
    return true;
}
o450.prototype.o456 = function() {
    // do nothing
}

/* .............. String port ..........................*/
function o457() {
};
o457.prototype = new o450();
o457.prototype.o453 = function() {
    throw "can't read from error-port.";
};
o457.prototype.o455 = function() {
    return false;
};


/* .............. String port ..........................*/

function o458(o459) {
    // we are going to do some charAts on the str.
    // instead of recreating all the time a String-object, we
    // create one in the beginning. (not sure, if this is really an optim)
    this.o460 = new String(o459);
    this.o337 = 0;
}
o458.prototype = new o450();
o458.prototype.o453 = function() {
    if (this.o337 >= this.o460.length)
        return o448;
    return this.o460.charAt(this.o337++);
};

/* ------------- Read and other lib-funs  -------------------------------*/
function o461(type, o106, o337) {
    this.type = type;
    this.o106 = o106;
    this.o337 = o337;
}
o461.o462 = 0/*EOF*/;
o461.o463 = 1/*OPEN_PAR*/;
o461.o464 = 2/*CLOSE_PAR*/;
o461.o465 = 3/*OPEN_BRACE*/;
o461.o466 = 4/*CLOSE_BRACE*/;
o461.o467 = 5/*OPEN_BRACKET*/;
o461.o468 = 6/*CLOSE_BRACKET*/;
o461.o469 = 7/*WHITESPACE*/;
o461.o470 = 8/*QUOTE*/;
o461.o471 = 9/*ID*/;
o461.o472 = 10/*DOT*/;
o461.o473 = 11/*STRING*/;
o461.o474 = 12/*NUMBER*/;
o461.o475 = 13/*ERROR*/;
o461.o476 = 14/*VECTOR_BEGIN*/;
o461.o477 = 15/*TRUE*/;
o461.o478 = 16/*FALSE*/;
o461.o479 = 17/*UNSPECIFIED*/;
o461.o480 = 18/*REFERENCE*/;
o461.o481 = 19/*STORE*/;
o461.o482 = 20/*CHAR*/;

var o483 = o308 + o309 + "!$%*+-./:<=>?@^_~";
function o484(o485) {
    this.o485 = o485;
}
o484.prototype.o486 = function() {
    if (this.o452)
        return this.o452;
    var o487 = this.o488();
    this.o452 = o487;
    return o487;
};
o484.prototype.o489 = function() {
    var o259 = this.o486();
    delete this.o452;
    return o259;
};
o484.prototype.o488 = function() {
    var o485 = this.o485;

    function o490(o185) {
        return (o185 >= "0" && o185 <= "9");
    };
    function o491(o185) {
        return o483.indexOf(o185) != -1 || // ID-char
            (o185 >= "0" && o185 <= "9");
    }
    function o492(o185) {
        return o185 === " " || o185 === "\r" || o185 === "\n" || o185 === "\t" || o185 === "\f";
    };
    function o493(o185) {
        return o492(o185) || o185 === o448;
    };

    function o494() {
        o145 = "";
        while (true) {
            var o185 = o485.o454();
            switch (o185) {
            case '"':
                return new o461(11/*STRING*/, o145);
            case "\\":
                var o259 = o485.o454();
                switch (o259) {
                case '0': o145 += "\0"; break;
                case 'a': o145 += "\a"; break;
                case 'b': o145 += "\b"; break;
                case 'f': o145 += "\f"; break;
                case 'n': o145 += "\n"; break;
                case 'r': o145 += "\r"; break;
                case 't': o145 += "\t"; break;
                case 'v': o145 += "\v"; break;
                case '"': o145 += '"'; break;
                case '\\': o145 += '\\'; break;
                case 'x':
                    /* hexa-number */
                    var o495 = 0;
                    while (true) {
                        var o496 = o485.o451();
                        if (o496 >= '0' && o496 <= '9') {
                            o485.o454();
                            o495 = o495 * 16 + o496.charCodeAt(0) - '0'.charCodeAt(0);
                    } else if (o496 >= 'a' && o496 <= 'f') {
                            o485.o454();
                            o495 = o495 * 16 + o496.charCodeAt(0) - 'a'.charCodeAt(0);
                    } else if (o496 >= 'A' && o496 <= 'F') {
                            o485.o454();
                            o495 = o495 * 16 + o496.charCodeAt(0) - 'A'.charCodeAt(0);
                    } else {
                            // next char isn't part of hex.
                            o145 += String.fromCharCode(o495);
                            break;
                    }
                    }
                    break;
                default:
                    if (o259 === o448) {
                        return new o461(13/*ERROR*/, "unclosed string-literal" + o145);
                    }
                    o145 += o259;
            }
                break;
            default:
                if (o185 === o448) {
                    return new o461(13/*ERROR*/, "unclosed string-literal" + o145);
            }
                o145 += o185;
            }
    }
    };
    function o497(o498) {
        var o145 = o498;
        while (o491(o485.o451()))
            o145 += o485.o454();
        if (isNaN(o145))
            return new o461(9/*ID*/, o145);
        else
            return new o461(12/*NUMBER*/, o145 - 0);
    };

    function o499() {
        var done = false;
        while (!done) {
            done = true;
            while (o492(o485.o451()))
                o485.o454();
            if (o485.o451() === ';') {
                o485.o454();
                done = false;
                while (true) {
                    o500 = o485.o454();
                    if (o500 === o448 ||
                        o500 === '\n')
                        break;
            }
            }
    }
    };

    function o501() {
        if (o492(o485.o451()))
            return new o461(10/*DOT*/);
        else
            return o497(".");
    };

    function o502() {
        var o185 = o485.o454();
        if (o492(o185))
            return new o461(13/*ERROR*/, "bad #-pattern0.");

        // reference
        if (o490(o185)) {
            var o495 = o185 - 0;
            while (o490(o485.o451()))
                o495 = o495*10 + (o485.o454() - 0);
            switch (o485.o454()) {
            case '#':
                return new o461(18/*REFERENCE*/, o495);
            case '=':
                return new o461(19/*STORE*/, o495);
            default:
                return new o461(13/*ERROR*/, "bad #-pattern1." + o495);
            }
    }

        if (o185 === "(")
            return new o461(14/*VECTOR_BEGIN*/);
        
        if (o185 === "\\") { // character
            var o259 = ""
            while (!o493(o485.o451()))
                o259 += o485.o454();
            switch (o259.length) {
            case 0: // it's escaping a whitespace char:
                if (o503(o485.o451))
                    return new o461(13/*ERROR*/, "bad #-pattern2.");
                else
                    return new o461(20/*CHAR*/, o485.o454());
            case 1:
                return new o461(20/*CHAR*/, o259);
            default:
                var o294 = o289.o293[o259.toLowerCase()];
                if (o294)
                    return new o461(20/*CHAR*/, o294);
                else
                    return new o461(13/*ERROR*/, "unknown character description: #\\" + o259);
            }
    }

        // some constants (#t, #f, #unspecified)
        var o145;
        var o504;
        switch (o185) {
        case 't': o145 = new o461(15/*TRUE*/, true); o504 = ""; break;
        case 'f': o145 = new o461(16/*FALSE*/, false); o504 = ""; break;
        case 'u': o145 = new o461(17/*UNSPECIFIED*/, undefined); o504 = "nspecified"; break;
        default:
            return new o461(13/*ERROR*/, "bad #-pattern3: " + o185);
    }
        while(true) {
            o185 = o485.o451();
            if ((o493(o185) || o185 === ')') &&
                o504 == "")
                return o145;
            else if (o492(o185) || o504 == "")
                return new o461(13/*ERROR*/, "bad #-pattern4 " + o185 + " " + o504);
            else if (o504.charAt(0) == o185) {
                o485.o454(); // consume
                o504 = o504.slice(1);
            } else
                return new o461(13/*ERROR*/, "bad #-pattern5");
    }
        
    };

    o499();
    var o500 = o485.o454();
    if (o500 === o448)
        return new o461(0/*EOF*/, o500);
    switch (o500)
    {
    case " ":
    case "\n":
    case "\t":
        return o505();
    case "(":
        return new o461(1/*OPEN_PAR*/);
    case ")":
        return new o461(2/*CLOSE_PAR*/);
    case "{":
        return new o461(3/*OPEN_BRACE*/);
    case "}":
        return new o461(4/*CLOSE_BRACE*/);
    case "[":
        return new o461(5/*OPEN_BRACKET*/);
    case "]":
        return new o461(6/*CLOSE_BRACKET*/);
    case "'":
        return new o461(8/*QUOTE*/);
    case "#":
        return o502();
    case ".":
        return o501();
    case '"':
        return o494();
    default:
        if (o491(o500))
            return o497(o500);
        throw "unexpected character: " + o500;
    }
};

function o506(o507) {
    this.o507 = o507;
    this.o508 = new Array();
}
o506.prototype.o509 = function() {
    function o510(o511) {
        function o512(o513, o456) {
            return o513 === 1/*OPEN_PAR*/ && o456 === 2/*CLOSE_PAR*/
                || o513 === 3/*OPEN_BRACE*/ && o456 === 4/*CLOSE_BRACE*/
                || o513 === 5/*OPEN_BRACKET*/ && o456 === 6/*CLOSE_BRACKET*/;
    };
        var o145 = null;

        while (true) {
            var o514 = o507.o486();

            switch (o514.type) {
            case 2/*CLOSE_PAR*/:
            case 4/*CLOSE_BRACE*/:
            case 6/*CLOSE_BRACKET*/:
                if (o512(o511, o514.type)) {
                    o507.o489(); // consume token
                    return o266(o145);
            } else
                    throw "closing par doesn't match: " + o511
                        + " " + o515;

            case 0/*EOF*/:
                throw "unexpected end of file";

            case 10/*DOT*/:
                o507.o489(); // consume token
                var o190 = this.o509();
                var o516 = o507.o489();
                if (!o512(o511, o516.type))
                    throw "closing par doesn't match: " + o511
                        + " " + o516.type;
                else
                    return o256(o145, o190);
                

            default:
                o145 = o201(this.o509(), o145);
            }
    }
    };
    function o517() {
        return o201("quote", o201(this.o509(), null));
    };
    function o518() {
        // opening-parenthesis is already consumed
        var o95 = new Array();
        while (true) {
            var o514 = o507.o486();
            switch (o514.type) {
            case 2/*CLOSE_PAR*/:
                o507.o489();
                return o95;
                
            default:
                o95.push(this.o509());
            }
    }
    };

    function o519(o495) {
        var o259 = this.o509();
        this.o508[o495] = o259;
        return o259;
    };
        
    function o520(o495) {
        if (o495 in this.o508)
            return this.o508[o495];
        else
            throw "bad reference: " + o495;
    };

    var o507 = this.o507;

    var o514 = o507.o489();

    // handle error
    if (o514.type === 13/*ERROR*/)
        throw o514.o106;

    switch (o514.type) {
    case 1/*OPEN_PAR*/:
    case 3/*OPEN_BRACE*/:
    case 5/*OPEN_BRACKET*/:
        return o510.call(this, o514.type);
    case 8/*QUOTE*/:
        return o517.call(this);
    case 11/*STRING*/:
        return o414(o514.o106);
    case 20/*CHAR*/:
        return new o289(o514.o106);
    case 14/*VECTOR_BEGIN*/:
        return o518.call(this);
    case 18/*REFERENCE*/:
        return o520.call(this, o514.o106);
    case 19/*STORE*/:
        return o519.call(this, o514.o106);
    case 9/*ID*/:
        return o96(o514.o106);
    case 0/*EOF*/:
    case 12/*NUMBER*/:
    case 15/*TRUE*/:
    case 16/*FALSE*/:
    case 17/*UNSPECIFIED*/:
        return o514.o106;
    default:
        throw "unexpected token " + o514.type + " " + o514.o106;
    }
};

/*** META ((export #t)) */
function o521(o485) {
    if (o485 === undefined) // we assume the port hasn't been given.
        o485 = o522; // THREAD: shared var...
    var o523 = new o506(new o484(o485));
    return o523.o509();
}
/*** META ((export #t)) */
function o524(o485) {
    if (o485 === undefined) // we assume the port hasn't been given.
        o485 = o522; // THREAD: shared var...
    var o183 = o485.o454();
    return o183 === o448? o183: new o289(o183);
}
/*** META ((export #t)) */
function o525(o485) {
    if (o485 === undefined) // we assume the port hasn't been given.
        o485 = o522; // THREAD: shared var...
    var o183 = o485.o451();
    return o183 === o448? o183: new o289(o183);
}
/*** META ((export #t)
           (type bool))
*/
function o526(o485) {
    if (o485 === undefined) // we assume the port hasn't been given.
        o485 = o522; // THREAD: shared var...
    return o485.o455();
}
/*** META ((export #t)
           (peephole (postfix ".close()")))
*/
function o527(o196) {
    return o196.o456();
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix " instanceof sc_InputPort")))
*/
function o528(o111) {
    return (o111 instanceof o450);
}

/*** META ((export eof-object?)
           (type bool)
           (peephole (postfix " === SC_EOF_OBJECT")))
*/
function o503(o111) {
    return o111 === o448;
}

/*** META ((export #t)
           (peephole (hole 0 "SC_DEFAULT_IN")))
*/
function o529() {
    return o522;
}

/* ------------ file operations are not supported -----------*/
/*** META ((export #t)) */
function o530(o30, o352) {
    throw "can't open " + o30;
}

/*** META ((export #t)) */
function o531(o30, o352) {
    throw "can't open " + o30;
}

/*** META ((export #t)) */
function o532(o30, o384) {
    throw "can't open " + o30;
}

/*** META ((export #t)) */
function o533(o30, o384) {
    throw "can't open " + o30;
}

/*** META ((export #t)) */
function o534(o30) {
    throw "can't open " + o30;
}

/*** META ((export #t)) */
function o535(o30) {
    throw "can't open " + o30;
}

/* ----------------------------------------------------------------------------*/
/*** META ((export #t)) */
function o536(o196) {
   var o51 = o196.lastIndexOf('/');

   if(o51 >= 0)
      return o196.substring(o51 + 1, o196.length);
   else
      return '';
}

/*** META ((export #t)) */
function o537(o196) {
   var o51 = o196.lastIndexOf('/');

   if(o51 >= 0)
      return o196.substring(0, o51);
   else
      return '';
}

/* ----------------------------------------------------------------------------*/

/*** META ((export #t)) */
function o538(o196, o384) {
    try {
        var o259 = o522; // THREAD: shared var.
        o522 = o196;
        return o384();
    } finally {
        o522 = o259;
    }
}

/*** META ((export #t)) */
function o539(o30, o384) {
    return o538(new o458(o411(o30)), o384);
}

/*** META ((export #t)) */
function o540(o196, o384) {
    try {
        var o259 = o541; // THREAD: shared var.
        o541 = o196;
        return o384();
    } finally {
        o541 = o259;
    }
}

/*** META ((export #t)) */
function o542(o384) {
    var o196 = new o543();
    o540(o196, o384);
    return o196.o456();
}

/*** META ((export #t)) */
function o544(o352, o384) {
    var o183 = function(o30) { o352(o414(o30)); };
    return o540(new o545(o183), o384);
}

/*** META ((export #t)
           (peephole (hole 0 "new sc_StringOutputPort()")))
*/
function o546() {
    return new o543();
}

/*** META ((export #t)) */
function o547(o460) {
    return new o458(o411(o460));
}

/* ----------------------------------------------------------------------------*/

function o548() {
}
o548.prototype = new o449();
o548.prototype.o549 = function(o98) {
    /* do nothing */
}
o548.prototype.o456 = function() {
    /* do nothing */
}

function o543() {
    this.o145 = "";
}
o543.prototype = new o548();
o543.prototype.o549 = function(o30) {
    this.o145 += o30;
}
o543.prototype.o456 = function() {
    return o414(this.o145);
}

/*** META ((export #t)) */
function o550(o551) {
    return o414(o551.o145);
}


function o552() {
}
o552.prototype = new o548();
o552.prototype.o549 = function(o30) {
    throw "don't write on ErrorPort!";
}
o552.prototype.o456 = function() {
    /* do nothing */
}

function o545(o549, o456) {
    this.o549 = o549;
    if (o456)
        this.o456 = o456;
}
o545.prototype = new o548();

/*** META ((export #t)
           (type bool)
           (peephole (postfix " instanceof sc_OutputPort")))
*/
function o553(o111) {
    return (o111 instanceof o548);
}

/*** META ((export #t)
           (peephole (postfix ".close()")))
*/
function o554(o196) {
    return o196.o456();
}

/* ------------------ write ---------------------------------------------------*/

/*** META ((export #t)) */
function o555(o111, o196) {
    if (o196 === undefined) // we assume not given
        o196 = o541;
    o196.o549(o195(o111));
}

function o195(o111) {
    if (o111 === null)
        return "()";
    else if (o111 === true)
        return "#t";
    else if (o111 === false)
        return "#f";
    else if (o111 === undefined)
        return "#unspecified";
    else if (typeof o111 === 'function')
        return "#<procedure " + o387(o111) + ">";
    else if (o111.o195)
        return o111.o195();
    else
        return o111.toString();
}

function o556(o30) {
    var o145 = "";
    var o348 = 0;
    for (o51 = 0; o51 < o30.length; o51++) {
        switch (o30.charAt(o51)) {
        case "\0": o145 += o30.substring(o348, o51) + "\\0"; o348 = o51 + 1; break;
        case "\b": o145 += o30.substring(o348, o51) + "\\b"; o348 = o51 + 1; break;
        case "\f": o145 += o30.substring(o348, o51) + "\\f"; o348 = o51 + 1; break;
        case "\n": o145 += o30.substring(o348, o51) + "\\n"; o348 = o51 + 1; break;
        case "\r": o145 += o30.substring(o348, o51) + "\\r"; o348 = o51 + 1; break;
        case "\t": o145 += o30.substring(o348, o51) + "\\t"; o348 = o51 + 1; break;
        case "\v": o145 += o30.substring(o348, o51) + "\\v"; o348 = o51 + 1; break;
        case '"': o145 += o30.substring(o348, o51) + '\\"'; o348 = o51 + 1; break;
        case "\\": o145 += o30.substring(o348, o51) + "\\\\"; o348 = o51 + 1; break;
        default:
            var o185 = o30.charAt(o51);
            if ("\a" !== "a" && o185 == "\a") {
                o145 += o30.substring(o348, o51) + "\\a"; o348 = o51 + 1; continue;
            }
            if ("\v" !== "v" && o185 == "\v") {
                o145 += o30.substring(o348, o51) + "\\v"; o348 = o51 + 1; continue;
            }
            //if (s.charAt(i) < ' ' || s.charCodeAt(i) > 127) {
            // CARE: Manuel is this OK with HOP?
            if (o30.charAt(o51) < ' ') {
                /* non printable character and special chars */
                o145 += o30.substring(o348, o51) + "\\x" + o30.charCodeAt(o51).toString(16);
                o348 = o51 + 1;
            }
            // else just let i increase...
    }
    }
    o145 += o30.substring(o348, o51);
    return o145;
}

/* ------------------ display ---------------------------------------------------*/

/*** META ((export #t)) */
function o557(o111, o196) {
    if (o196 === undefined) // we assume not given
        o196 = o541;
    o196.o549(o91(o111));
}

function o91(o111) {
    if (o111 === null)
        return "()";
    else if (o111 === true)
        return "#t";
    else if (o111 === false)
        return "#f";
    else if (o111 === undefined)
        return "#unspecified";
    else if (typeof o111 === 'function')
        return "#<procedure " + o387(o111) + ">";
    else if (o111.o91)
        return o111.o91();
    else
        return o111.toString();
}

/* ------------------ newline ---------------------------------------------------*/

/*** META ((export #t)) */
function o558(o196) {
    if (o196 === undefined) // we assume not given
        o196 = o541;
    o196.o549("\n");
}

/* ------------------ write-char ---------------------------------------------------*/

/*** META ((export #t)) */
function o559(o185, o196) {
    if (o196 === undefined) // we assume not given
        o196 = o541;
    o196.o549(o185.o106);
}

/* ------------------ write-circle ---------------------------------------------------*/

/*** META ((export #t)) */
function o560(o111, o196) {
    if (o196 === undefined) // we assume not given
        o196 = o541;
    o196.o549(o561(o111));
}

function o561(o111) {
    var o562 = o563("writeCircle");
    var o564 = new Object();
    o564.o495 = 0;
    o565(o111, o562, o564);
    return o566(o111, o562);
}

function o565(o111, o562, o564) {
    // TODO sc_Struct
    if (o111 instanceof o188 ||
        o111 instanceof o325) {
        if (o111[o562] !== undefined) {
            // not the first visit.
            o111[o562]++;
            // unless there is already a number, assign one.
            if (!o111[o562 + "nb"]) o111[o562 + "nb"] = o564.o495++;
            return;
    }
        o111[o562] = 0;
        if (o111 instanceof o188) {
            o565(o111.o189, o562, o564);
            o565(o111.o190, o562, o564);
    } else {
            for (var o51 = 0; o51 < o111.length; o51++)
                o565(o111[o51], o562, o564);
    }
    }
}

function o566(o111, o562) {
    if (!(o111 instanceof o188 ||
          o111 instanceof o325))
        return o195(o111);
    return o111.o561(o562);
}
o188.prototype.o561 = function(o562, o567) {
    if (this[o562 + "use"]) { // use-flag is set. Just use it.
        var o495 = this[o562 + "nb"];
        if (this[o562]-- === 0) { // if we are the last use. remove all fields.
            delete this[o562];
            delete this[o562 + "nb"];
            delete this[o562 + "use"];
    }
        if (o567)
            return '. #' + o495 + '#';
        else
            return '#' + o495 + '#';
    }
    if (this[o562]-- === 0) { // if we are the last use. remove all fields.
        delete this[o562];
        delete this[o562 + "nb"];
        delete this[o562 + "use"];
    }

    var o145 = "";

    if (this[o562] !== undefined) { // implies > 0
        this[o562 + "use"] = true;
        if (o567)
            o145 += '. #' + this[o562 + "nb"] + '=';
        else
            o145 += '#' + this[o562 + "nb"] + '=';
        o567 = false;
    }

    if (!o567)
        o145 += "(";

    // print car
    o145 += o566(this.o189, o562);

    if (o194(this.o190)) {
        o145 += " " + this.o190.o561(o562, true);
    } else if (this.o190 !== null) {
        o145 += " . " + o566(this.o190, o562);
    }
    if (!o567)
        o145 += ")";
    return o145;
};
o325.prototype.o561 = function(o562) {
    if (this[o562 + "use"]) { // use-flag is set. Just use it.
        var o495 = this[o562 + "nb"];
        if (this[o562]-- === 0) { // if we are the last use. remove all fields.
            delete this[o562];
            delete this[o562 + "nb"];
            delete this[o562 + "use"];
    }
        return '#' + o495 + '#';
    }
    if (this[o562]-- === 0) { // if we are the last use. remove all fields.
        delete this[o562];
        delete this[o562 + "nb"];
        delete this[o562 + "use"];
    }

    var o145 = "";
    if (this[o562] !== undefined) { // implies > 0
        this[o562 + "use"] = true;
        o145 += '#' + this[o562 + "nb"] + '=';
    }
    o145 += "#(";
    for (var o51 = 0; o51 < this.length; o51++) {
        o145 += o566(this[o51], o562);
        if (o51 < this.length - 1) o145 += " ";
    }
    o145 += ")";
    return o145;
};


/* ------------------ print ---------------------------------------------------*/

/*** META ((export #t)) */
function o85(o30) {
    if (arguments.length === 1) {
        o557(o30);
        o558();
    }
    else {
        for (var o51 = 0; o51 < arguments.length; o51++)
            o557(arguments[o51]);
        o558();
    }
}

/* ------------------ format ---------------------------------------------------*/
/*** META ((export #t)) */
function o568(o30, o353) {
   var o90 = o30.length;
   var o196 = new o543();
   var o51 = 0, o348 = 1;

   while( o51 < o90 ) {
      var o569 = o30.indexOf("~", o51);

      if (o569 == -1) {
          o196.o549( o30.substring( o51, o90 ) );
          return o196.o456();
      } else {
         if (o569 > o51) {
            if (o569 == (o90 - 1)) {
                o196.o549(o30.substring(o51, o90));
                return o196.o456();
            } else {
               o196.o549(o30.substring(o51, o569));
               o51 = o569;
            }
         }

         switch(o30.charCodeAt(o569 + 1)) {
            case 65:
            case 97:
               // a
               o557(arguments[o348], o196);
               o51 += 2; o348++;
               break;

            case 83:
            case 115:
               // s
               o555(arguments[o348], o196);
               o51 += 2; o348++;
               break;

            case 86:
            case 118:
               // v
               o557(arguments[o348], o196);
               o196.o549("\n");
               o51 += 2; o348++;
               break;

            case 67:
            case 99:
               // c
               o196.o549(String.fromCharCode(arguments[o348]));
               o51 += 2; o348++;
               break;

            case 88:
            case 120:
               // x
               o196.o549(arguments[o348].toString(6));
               o51 += 2; o348++;
               break;

            case 79:
            case 111:
               // o
               o196.o549(arguments[o348].toString(8));
               o51 += 2; o348++;
               break;

            case 66:
            case 98:
               // b
               o196.o549(arguments[o348].toString(2));
               o51 += 2; o348++;
               break;

            case 37:
            case 110:
               // %, n
               o196.o549("\n");
               o51 += 2; break;

            case 114:
               // r
               o196.o549("\r");
               o51 += 2; break;

            case 126:
               // ~
               o196.o549("~");
               o51 += 2; break;

            default:
               o94( "format: illegal ~"
                         + String.fromCharCode(o30.charCodeAt(o569 + 1))
                         + " sequence" );
               return "";
         }
      }
   }

   return o196.o456();
}

/* ------------------ global ports ---------------------------------------------------*/

var o522 = new o457();
var o541 = new o552();
var o570 = new o552();

var o571 = "\u1E9C";
var o572 = "\u1E9D";

/*** META ((export #t)
           (peephole (id))) */
function o414(o30) {
    return o30;
}

/*** META ((export #t)
           (peephole (prefix "'\\u1E9C' +")))
*/
function o96(o30) {
    return o571 + o30;
}

/*** META ((export #t)
           (peephole (id)))
*/
function o411(o30) {
    return o30;
}

/*** META ((export #t)
           (peephole (symbol2jsstring_immutable)))
*/
function o573(o30) {
    return o30.slice(1);
}

/*** META ((export #t)
           (peephole (postfix ".slice(1)")))
*/
function o574(o268) {
    return o268.slice(1);
}

/*** META ((export #t)
           (peephole (prefix "'\\u1E9D' +")))
*/
function o575(o30) {
    return o572 + o30;
}

/*** META ((export #t)
           (type bool))
*/
function o576(o30) {
    return (typeof o30 === "string") &&
        (o30.charAt(0) === o572);
}


/*** META ((export #t)) */
var o563 = function() {
    var o577 = 1000;
    return function(o105) {
        o577++;
        if (!o105) o105 = o571;
        return o105 + "s" + o577 + "~" + "^sC-GeNsYm ";
    };
}();


/*** META ((export #t)
           (type bool))
*/
function o254(o114, o115) {
    return ((o114 === o115) ||
            (o194(o114) && o194(o115)
             && o197(o114, o115, o254)) ||
            (o326(o114) && o326(o115)
             && o328(o114, o115, o254)));
}

/*** META ((export number->symbol integer->symbol)) */
function o578(o93, o181) {
    return o571 + o180(o93, o181);
}

/*** META ((export number->string integer->string)) */
var o579 = o180;

/*** META ((export #t)) */
function o580(o30, o181) {
    return o182(o30.slice(1), o181);
}

/*** META ((export #t)) */
var o581 = o182;

/*** META ((export #t)
           (peephole (prefix "+" s)))
           ;; peephole will only apply if no radix is given.
*/
function o582(o30, o181) {
    if (!o181) return +o30;
    return parseInt(o30, o181);
}

/*** META ((export #t)
           (peephole (prefix "+")))
*/
function o583(o30) {
    return +o30;
}


/*** META ((export #t)
           (type bool))
*/
function o584(o30) {
    return (typeof o30 === "string") &&
        (o30.charAt(0) === o571);
}

/*** META ((export #t)
           (peephole (symbol2string_immutable)))
*/
function o585(o30) {
    return o30.slice(1);
}

/*** META ((export #t)
           (peephole (prefix "'\\u1E9C' +")))
*/
function o586(o30) {
    return o571 + o30;
}

/*** META ((export symbol-append)
           (peephole (symbolAppend_immutable)))
*/
function o587() {
    var o145 = o571;
    for (var o51 = 0; o51 < arguments.length; o51++)
        o145 += arguments[o51].slice(1);
    return o145;
}

/*** META ((export #t)
           (peephole (postfix ".val")))
*/
function o588(o185) { return o185.o106; }

/*** META ((export #t)
           (peephole (hole 1 "'\\u1E9C' + " c ".val")))
*/
function o589(o185) { return o571 + o185.o106; }

/*** META ((export #t)
           (type bool))
*/
function o590(o30) {
    return (typeof o30 === "string") &&
        (o30.charAt(0) !== o571);
}

/*** META ((export #t)) */
var o591 = o322;


/*** META ((export #t)) */
function o592() {
    for (var o51 = 0; o51 < arguments.length; o51++)
        arguments[o51] = arguments[o51].o106;
    return "".concat.apply("", arguments);
}

/*** META ((export #t)
           (peephole (postfix ".length")))
*/
function o593(o30) { return o30.length; }

/*** META ((export #t)) */
function o594(o30, o268) {
    return new o289(o30.charAt(o268));
}

/* there's no stringSet in the immutable version
function sc_stringSet(s, k, c)
*/


/*** META ((export string=?)
           (type bool)
           (peephole (hole 2 str1 " === " str2)))
*/
function o595(o416, o417) {
    return o416 === o417;
}
/*** META ((export string<?)
           (type bool)
           (peephole (hole 2 str1 " < " str2)))
*/
function o596(o416, o417) {
    return o416 < o417;
}
/*** META ((export string>?)
           (type bool)
           (peephole (hole 2 str1 " > " str2)))
*/
function o597(o416, o417) {
    return o416 > o417;
}
/*** META ((export string<=?)
           (type bool)
           (peephole (hole 2 str1 " <= " str2)))
*/
function o598(o416, o417) {
    return o416 <= o417;
}
/*** META ((export string>=?)
           (type bool)
           (peephole (hole 2 str1 " >= " str2)))
*/
function o599(o416, o417) {
    return o416 >= o417;
}
/*** META ((export string-ci=?)
           (type bool)
           (peephole (hole 2 str1 ".toLowerCase() === " str2 ".toLowerCase()")))
*/
function o600(o416, o417) {
    return o416.toLowerCase() === o417.toLowerCase();
}
/*** META ((export string-ci<?)
           (type bool)
           (peephole (hole 2 str1 ".toLowerCase() < " str2 ".toLowerCase()")))
*/
function o601(o416, o417) {
    return o416.toLowerCase() < o417.toLowerCase();
}
/*** META ((export string-ci>?)
           (type bool)
           (peephole (hole 2 str1 ".toLowerCase() > " str2 ".toLowerCase()")))
*/
function o602(o416, o417) {
    return o416.toLowerCase() > o417.toLowerCase();
}
/*** META ((export string-ci<=?)
           (type bool)
           (peephole (hole 2 str1 ".toLowerCase() <= " str2 ".toLowerCase()")))
*/
function o603(o416, o417) {
    return o416.toLowerCase() <= o417.toLowerCase();
}
/*** META ((export string-ci>=?)
           (type bool)
           (peephole (hole 2 str1 ".toLowerCase() >= " str2 ".toLowerCase()")))
*/
function o604(o416, o417) {
    return o416.toLowerCase() >= o417.toLowerCase();
}

/*** META ((export #t)
           (peephole (hole 3 s ".substring(" start ", " end ")")))
*/
function o605(o30, o73, o343) {
    return o30.substring(o73, o343);
}

/*** META ((export #t))
*/
function o606(o416, o417, o51) {
    return o417 == o416.substring(o51, o51+ o417.length);
}

/*** META ((export #t)
           (peephole (infix 0 #f "+" "''")))
*/
function o607() {
    return "".concat.apply("", arguments);
}

/*** META ((export #t)) */
var o608 = o323;

/*** META ((export #t)) */
var o609 = o324;

/*** META ((export #t)
           (peephole (id)))
*/
function o610(o30) {
    return o30;
}

/* there's no string-fill in the immutable version
function sc_stringFill(s, c)
*/

/*** META ((export #t)
           (peephole (postfix ".slice(1)")))
*/
function o611(o111) {
    return o111.slice(1);
}

/*** META ((export #t)
           (peephole (prefix "'\\u1E9D' +")))
*/
function o612(o111) {
    return o572 + o111;
}

String.prototype.o91 = function() {
    if (this.charAt(0) === o571)
        // TODO: care for symbols with spaces (escape-chars symbols).
        return this.slice(1);
    else if (this.charAt(0) === o572)
        return ":" + this.slice(1);
    else
        return this.toString();
};

String.prototype.o195 = function() {
    if (this.charAt(0) === o571)
        // TODO: care for symbols with spaces (escape-chars symbols).
        return this.slice(1);
    else if (this.charAt(0) === o572)
        return ":" + this.slice(1);
    else
        return '"' + o556(this) + '"';
};
/* Exported Variables */
var o613;
var o83;
var o614;
/* End Exports */

var o615;
var o616;
var o617;
var o618;
var o619;
var o620;
var o621;
var o622;
var o623;
var o624;
var o625;
var o626;
var o627;
var o628;
var o629;
var o630;
var o631;
var o632;
var o633;
var o634;
var o635;
var o636;
var o637;
{
    (o637 = (new o188("\u1E9Cimplies",(new o188((new o188("\u1E9Cand",(new o188((new o188("\u1E9Cimplies",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188((new o188("\u1E9Cand",(new o188((new o188("\u1E9Cimplies",(new o188("\u1E9Cy",(new o188("\u1E9Cz",null)))))),(new o188((new o188("\u1E9Cand",(new o188((new o188("\u1E9Cimplies",(new o188("\u1E9Cz",(new o188("\u1E9Cu",null)))))),(new o188((new o188("\u1E9Cimplies",(new o188("\u1E9Cu",(new o188("\u1E9Cw",null)))))),null)))))),null)))))),null)))))),(new o188((new o188("\u1E9Cimplies",(new o188("\u1E9Cx",(new o188("\u1E9Cw",null)))))),null)))))));
    (o636 = o241((new o188("\u1E9Cequal",(new o188((new o188("\u1E9Ccompile",(new o188("\u1E9Cform",null)))),(new o188((new o188("\u1E9Creverse",(new o188((new o188("\u1E9Ccodegen",(new o188((new o188("\u1E9Coptimize",(new o188("\u1E9Cform",null)))),(new o188((new o188("\u1E9Cnil",null)),null)))))),null)))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Ceqp",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188((new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cfix",(new o188("\u1E9Cx",null)))),(new o188((new o188("\u1E9Cfix",(new o188("\u1E9Cy",null)))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cgreaterp",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188((new o188("\u1E9Clessp",(new o188("\u1E9Cy",(new o188("\u1E9Cx",null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Clesseqp",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188((new o188("\u1E9Cnot",(new o188((new o188("\u1E9Clessp",(new o188("\u1E9Cy",(new o188("\u1E9Cx",null)))))),null)))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cgreatereqp",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188((new o188("\u1E9Cnot",(new o188((new o188("\u1E9Clessp",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),null)))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cboolean",(new o188("\u1E9Cx",null)))),(new o188((new o188("\u1E9Cor",(new o188((new o188("\u1E9Cequal",(new o188("\u1E9Cx",(new o188((new o188("\u1E9Ct",null)),null)))))),(new o188((new o188("\u1E9Cequal",(new o188("\u1E9Cx",(new o188((new o188("\u1E9Cf",null)),null)))))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Ciff",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188((new o188("\u1E9Cand",(new o188((new o188("\u1E9Cimplies",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188((new o188("\u1E9Cimplies",(new o188("\u1E9Cy",(new o188("\u1E9Cx",null)))))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Ceven1",(new o188("\u1E9Cx",null)))),(new o188((new o188("\u1E9Cif",(new o188((new o188("\u1E9Czerop",(new o188("\u1E9Cx",null)))),(new o188((new o188("\u1E9Ct",null)),(new o188((new o188("\u1E9Codd",(new o188((new o188("\u1E9Csub1",(new o188("\u1E9Cx",null)))),null)))),null)))))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Ccountps-",(new o188("\u1E9Cl",(new o188("\u1E9Cpred",null)))))),(new o188((new o188("\u1E9Ccountps-loop",(new o188("\u1E9Cl",(new o188("\u1E9Cpred",(new o188((new o188("\u1E9Czero",null)),null)))))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cfact-",(new o188("\u1E9Ci",null)))),(new o188((new o188("\u1E9Cfact-loop",(new o188("\u1E9Ci",(new o188((1),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Creverse-",(new o188("\u1E9Cx",null)))),(new o188((new o188("\u1E9Creverse-loop",(new o188("\u1E9Cx",(new o188((new o188("\u1E9Cnil",null)),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cdivides",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188((new o188("\u1E9Czerop",(new o188((new o188("\u1E9Cremainder",(new o188("\u1E9Cy",(new o188("\u1E9Cx",null)))))),null)))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cassume-true",(new o188("\u1E9Cvar",(new o188("\u1E9Calist",null)))))),(new o188((new o188("\u1E9Ccons",(new o188((new o188("\u1E9Ccons",(new o188("\u1E9Cvar",(new o188((new o188("\u1E9Ct",null)),null)))))),(new o188("\u1E9Calist",null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cassume-false",(new o188("\u1E9Cvar",(new o188("\u1E9Calist",null)))))),(new o188((new o188("\u1E9Ccons",(new o188((new o188("\u1E9Ccons",(new o188("\u1E9Cvar",(new o188((new o188("\u1E9Cf",null)),null)))))),(new o188("\u1E9Calist",null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Ctautology-checker",(new o188("\u1E9Cx",null)))),(new o188((new o188("\u1E9Ctautologyp",(new o188((new o188("\u1E9Cnormalize",(new o188("\u1E9Cx",null)))),(new o188((new o188("\u1E9Cnil",null)),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cfalsify",(new o188("\u1E9Cx",null)))),(new o188((new o188("\u1E9Cfalsify1",(new o188((new o188("\u1E9Cnormalize",(new o188("\u1E9Cx",null)))),(new o188((new o188("\u1E9Cnil",null)),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cprime",(new o188("\u1E9Cx",null)))),(new o188((new o188("\u1E9Cand",(new o188((new o188("\u1E9Cnot",(new o188((new o188("\u1E9Czerop",(new o188("\u1E9Cx",null)))),null)))),(new o188((new o188("\u1E9Cnot",(new o188((new o188("\u1E9Cequal",(new o188("\u1E9Cx",(new o188((new o188("\u1E9Cadd1",(new o188((new o188("\u1E9Czero",null)),null)))),null)))))),null)))),(new o188((new o188("\u1E9Cprime1",(new o188("\u1E9Cx",(new o188((new o188("\u1E9Csub1",(new o188("\u1E9Cx",null)))),null)))))),null)))))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cand",(new o188("\u1E9Cp",(new o188("\u1E9Cq",null)))))),(new o188((new o188("\u1E9Cif",(new o188("\u1E9Cp",(new o188((new o188("\u1E9Cif",(new o188("\u1E9Cq",(new o188((new o188("\u1E9Ct",null)),(new o188((new o188("\u1E9Cf",null)),null)))))))),(new o188((new o188("\u1E9Cf",null)),null)))))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cor",(new o188("\u1E9Cp",(new o188("\u1E9Cq",null)))))),(new o188((new o188("\u1E9Cif",(new o188("\u1E9Cp",(new o188((new o188("\u1E9Ct",null)),(new o188((new o188("\u1E9Cif",(new o188("\u1E9Cq",(new o188((new o188("\u1E9Ct",null)),(new o188((new o188("\u1E9Cf",null)),null)))))))),null)))))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cnot",(new o188("\u1E9Cp",null)))),(new o188((new o188("\u1E9Cif",(new o188("\u1E9Cp",(new o188((new o188("\u1E9Cf",null)),(new o188((new o188("\u1E9Ct",null)),null)))))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cimplies",(new o188("\u1E9Cp",(new o188("\u1E9Cq",null)))))),(new o188((new o188("\u1E9Cif",(new o188("\u1E9Cp",(new o188((new o188("\u1E9Cif",(new o188("\u1E9Cq",(new o188((new o188("\u1E9Ct",null)),(new o188((new o188("\u1E9Cf",null)),null)))))))),(new o188((new o188("\u1E9Ct",null)),null)))))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cfix",(new o188("\u1E9Cx",null)))),(new o188((new o188("\u1E9Cif",(new o188((new o188("\u1E9Cnumberp",(new o188("\u1E9Cx",null)))),(new o188("\u1E9Cx",(new o188((new o188("\u1E9Czero",null)),null)))))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cif",(new o188((new o188("\u1E9Cif",(new o188("\u1E9Ca",(new o188("\u1E9Cb",(new o188("\u1E9Cc",null)))))))),(new o188("\u1E9Cd",(new o188("\u1E9Ce",null)))))))),(new o188((new o188("\u1E9Cif",(new o188("\u1E9Ca",(new o188((new o188("\u1E9Cif",(new o188("\u1E9Cb",(new o188("\u1E9Cd",(new o188("\u1E9Ce",null)))))))),(new o188((new o188("\u1E9Cif",(new o188("\u1E9Cc",(new o188("\u1E9Cd",(new o188("\u1E9Ce",null)))))))),null)))))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Czerop",(new o188("\u1E9Cx",null)))),(new o188((new o188("\u1E9Cor",(new o188((new o188("\u1E9Cequal",(new o188("\u1E9Cx",(new o188((new o188("\u1E9Czero",null)),null)))))),(new o188((new o188("\u1E9Cnot",(new o188((new o188("\u1E9Cnumberp",(new o188("\u1E9Cx",null)))),null)))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cplus",(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188("\u1E9Cz",null)))))),(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Cx",(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Cy",(new o188("\u1E9Cz",null)))))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Ca",(new o188("\u1E9Cb",null)))))),(new o188((new o188("\u1E9Czero",null)),null)))))),(new o188((new o188("\u1E9Cand",(new o188((new o188("\u1E9Czerop",(new o188("\u1E9Ca",null)))),(new o188((new o188("\u1E9Czerop",(new o188("\u1E9Cb",null)))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cdifference",(new o188("\u1E9Cx",(new o188("\u1E9Cx",null)))))),(new o188((new o188("\u1E9Czero",null)),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Ca",(new o188("\u1E9Cb",null)))))),(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Ca",(new o188("\u1E9Cc",null)))))),null)))))),(new o188((new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cfix",(new o188("\u1E9Cb",null)))),(new o188((new o188("\u1E9Cfix",(new o188("\u1E9Cc",null)))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cequal",(new o188((new o188("\u1E9Czero",null)),(new o188((new o188("\u1E9Cdifference",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),null)))))),(new o188((new o188("\u1E9Cnot",(new o188((new o188("\u1E9Clessp",(new o188("\u1E9Cy",(new o188("\u1E9Cx",null)))))),null)))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cequal",(new o188("\u1E9Cx",(new o188((new o188("\u1E9Cdifference",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),null)))))),(new o188((new o188("\u1E9Cand",(new o188((new o188("\u1E9Cnumberp",(new o188("\u1E9Cx",null)))),(new o188((new o188("\u1E9Cor",(new o188((new o188("\u1E9Cequal",(new o188("\u1E9Cx",(new o188((new o188("\u1E9Czero",null)),null)))))),(new o188((new o188("\u1E9Czerop",(new o188("\u1E9Cy",null)))),null)))))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cmeaning",(new o188((new o188("\u1E9Cplus-tree",(new o188((new o188("\u1E9Cappend",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),null)))),(new o188("\u1E9Ca",null)))))),(new o188((new o188("\u1E9Cplus",(new o188((new o188("\u1E9Cmeaning",(new o188((new o188("\u1E9Cplus-tree",(new o188("\u1E9Cx",null)))),(new o188("\u1E9Ca",null)))))),(new o188((new o188("\u1E9Cmeaning",(new o188((new o188("\u1E9Cplus-tree",(new o188("\u1E9Cy",null)))),(new o188("\u1E9Ca",null)))))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cmeaning",(new o188((new o188("\u1E9Cplus-tree",(new o188((new o188("\u1E9Cplus-fringe",(new o188("\u1E9Cx",null)))),null)))),(new o188("\u1E9Ca",null)))))),(new o188((new o188("\u1E9Cfix",(new o188((new o188("\u1E9Cmeaning",(new o188("\u1E9Cx",(new o188("\u1E9Ca",null)))))),null)))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cappend",(new o188((new o188("\u1E9Cappend",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188("\u1E9Cz",null)))))),(new o188((new o188("\u1E9Cappend",(new o188("\u1E9Cx",(new o188((new o188("\u1E9Cappend",(new o188("\u1E9Cy",(new o188("\u1E9Cz",null)))))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Creverse",(new o188((new o188("\u1E9Cappend",(new o188("\u1E9Ca",(new o188("\u1E9Cb",null)))))),null)))),(new o188((new o188("\u1E9Cappend",(new o188((new o188("\u1E9Creverse",(new o188("\u1E9Cb",null)))),(new o188((new o188("\u1E9Creverse",(new o188("\u1E9Ca",null)))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Ctimes",(new o188("\u1E9Cx",(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Cy",(new o188("\u1E9Cz",null)))))),null)))))),(new o188((new o188("\u1E9Cplus",(new o188((new o188("\u1E9Ctimes",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188((new o188("\u1E9Ctimes",(new o188("\u1E9Cx",(new o188("\u1E9Cz",null)))))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Ctimes",(new o188((new o188("\u1E9Ctimes",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188("\u1E9Cz",null)))))),(new o188((new o188("\u1E9Ctimes",(new o188("\u1E9Cx",(new o188((new o188("\u1E9Ctimes",(new o188("\u1E9Cy",(new o188("\u1E9Cz",null)))))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cequal",(new o188((new o188("\u1E9Ctimes",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188((new o188("\u1E9Czero",null)),null)))))),(new o188((new o188("\u1E9Cor",(new o188((new o188("\u1E9Czerop",(new o188("\u1E9Cx",null)))),(new o188((new o188("\u1E9Czerop",(new o188("\u1E9Cy",null)))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cexec",(new o188((new o188("\u1E9Cappend",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188("\u1E9Cpds",(new o188("\u1E9Cenvrn",null)))))))),(new o188((new o188("\u1E9Cexec",(new o188("\u1E9Cy",(new o188((new o188("\u1E9Cexec",(new o188("\u1E9Cx",(new o188("\u1E9Cpds",(new o188("\u1E9Cenvrn",null)))))))),(new o188("\u1E9Cenvrn",null)))))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cmc-flatten",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188((new o188("\u1E9Cappend",(new o188((new o188("\u1E9Cflatten",(new o188("\u1E9Cx",null)))),(new o188("\u1E9Cy",null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cmember",(new o188("\u1E9Cx",(new o188((new o188("\u1E9Cappend",(new o188("\u1E9Ca",(new o188("\u1E9Cb",null)))))),null)))))),(new o188((new o188("\u1E9Cor",(new o188((new o188("\u1E9Cmember",(new o188("\u1E9Cx",(new o188("\u1E9Ca",null)))))),(new o188((new o188("\u1E9Cmember",(new o188("\u1E9Cx",(new o188("\u1E9Cb",null)))))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cmember",(new o188("\u1E9Cx",(new o188((new o188("\u1E9Creverse",(new o188("\u1E9Cy",null)))),null)))))),(new o188((new o188("\u1E9Cmember",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Clength",(new o188((new o188("\u1E9Creverse",(new o188("\u1E9Cx",null)))),null)))),(new o188((new o188("\u1E9Clength",(new o188("\u1E9Cx",null)))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cmember",(new o188("\u1E9Ca",(new o188((new o188("\u1E9Cintersect",(new o188("\u1E9Cb",(new o188("\u1E9Cc",null)))))),null)))))),(new o188((new o188("\u1E9Cand",(new o188((new o188("\u1E9Cmember",(new o188("\u1E9Ca",(new o188("\u1E9Cb",null)))))),(new o188((new o188("\u1E9Cmember",(new o188("\u1E9Ca",(new o188("\u1E9Cc",null)))))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cnth",(new o188((new o188("\u1E9Czero",null)),(new o188("\u1E9Ci",null)))))),(new o188((new o188("\u1E9Czero",null)),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cexp",(new o188("\u1E9Ci",(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Cj",(new o188("\u1E9Ck",null)))))),null)))))),(new o188((new o188("\u1E9Ctimes",(new o188((new o188("\u1E9Cexp",(new o188("\u1E9Ci",(new o188("\u1E9Cj",null)))))),(new o188((new o188("\u1E9Cexp",(new o188("\u1E9Ci",(new o188("\u1E9Ck",null)))))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cexp",(new o188("\u1E9Ci",(new o188((new o188("\u1E9Ctimes",(new o188("\u1E9Cj",(new o188("\u1E9Ck",null)))))),null)))))),(new o188((new o188("\u1E9Cexp",(new o188((new o188("\u1E9Cexp",(new o188("\u1E9Ci",(new o188("\u1E9Cj",null)))))),(new o188("\u1E9Ck",null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Creverse-loop",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188((new o188("\u1E9Cappend",(new o188((new o188("\u1E9Creverse",(new o188("\u1E9Cx",null)))),(new o188("\u1E9Cy",null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Creverse-loop",(new o188("\u1E9Cx",(new o188((new o188("\u1E9Cnil",null)),null)))))),(new o188((new o188("\u1E9Creverse",(new o188("\u1E9Cx",null)))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Ccount-list",(new o188("\u1E9Cz",(new o188((new o188("\u1E9Csort-lp",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),null)))))),(new o188((new o188("\u1E9Cplus",(new o188((new o188("\u1E9Ccount-list",(new o188("\u1E9Cz",(new o188("\u1E9Cx",null)))))),(new o188((new o188("\u1E9Ccount-list",(new o188("\u1E9Cz",(new o188("\u1E9Cy",null)))))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cappend",(new o188("\u1E9Ca",(new o188("\u1E9Cb",null)))))),(new o188((new o188("\u1E9Cappend",(new o188("\u1E9Ca",(new o188("\u1E9Cc",null)))))),null)))))),(new o188((new o188("\u1E9Cequal",(new o188("\u1E9Cb",(new o188("\u1E9Cc",null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cplus",(new o188((new o188("\u1E9Cremainder",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188((new o188("\u1E9Ctimes",(new o188("\u1E9Cy",(new o188((new o188("\u1E9Cquotient",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),null)))))),null)))))),(new o188((new o188("\u1E9Cfix",(new o188("\u1E9Cx",null)))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cpower-eval",(new o188((new o188("\u1E9Cbig-plus1",(new o188("\u1E9Cl",(new o188("\u1E9Ci",(new o188("\u1E9Cbase",null)))))))),(new o188("\u1E9Cbase",null)))))),(new o188((new o188("\u1E9Cplus",(new o188((new o188("\u1E9Cpower-eval",(new o188("\u1E9Cl",(new o188("\u1E9Cbase",null)))))),(new o188("\u1E9Ci",null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cpower-eval",(new o188((new o188("\u1E9Cbig-plus",(new o188("\u1E9Cx",(new o188("\u1E9Cy",(new o188("\u1E9Ci",(new o188("\u1E9Cbase",null)))))))))),(new o188("\u1E9Cbase",null)))))),(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Ci",(new o188((new o188("\u1E9Cplus",(new o188((new o188("\u1E9Cpower-eval",(new o188("\u1E9Cx",(new o188("\u1E9Cbase",null)))))),(new o188((new o188("\u1E9Cpower-eval",(new o188("\u1E9Cy",(new o188("\u1E9Cbase",null)))))),null)))))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cremainder",(new o188("\u1E9Cy",(new o188((1),null)))))),(new o188((new o188("\u1E9Czero",null)),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Clessp",(new o188((new o188("\u1E9Cremainder",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188("\u1E9Cy",null)))))),(new o188((new o188("\u1E9Cnot",(new o188((new o188("\u1E9Czerop",(new o188("\u1E9Cy",null)))),null)))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cremainder",(new o188("\u1E9Cx",(new o188("\u1E9Cx",null)))))),(new o188((new o188("\u1E9Czero",null)),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Clessp",(new o188((new o188("\u1E9Cquotient",(new o188("\u1E9Ci",(new o188("\u1E9Cj",null)))))),(new o188("\u1E9Ci",null)))))),(new o188((new o188("\u1E9Cand",(new o188((new o188("\u1E9Cnot",(new o188((new o188("\u1E9Czerop",(new o188("\u1E9Ci",null)))),null)))),(new o188((new o188("\u1E9Cor",(new o188((new o188("\u1E9Czerop",(new o188("\u1E9Cj",null)))),(new o188((new o188("\u1E9Cnot",(new o188((new o188("\u1E9Cequal",(new o188("\u1E9Cj",(new o188((1),null)))))),null)))),null)))))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Clessp",(new o188((new o188("\u1E9Cremainder",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188("\u1E9Cx",null)))))),(new o188((new o188("\u1E9Cand",(new o188((new o188("\u1E9Cnot",(new o188((new o188("\u1E9Czerop",(new o188("\u1E9Cy",null)))),null)))),(new o188((new o188("\u1E9Cnot",(new o188((new o188("\u1E9Czerop",(new o188("\u1E9Cx",null)))),null)))),(new o188((new o188("\u1E9Cnot",(new o188((new o188("\u1E9Clessp",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),null)))),null)))))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cpower-eval",(new o188((new o188("\u1E9Cpower-rep",(new o188("\u1E9Ci",(new o188("\u1E9Cbase",null)))))),(new o188("\u1E9Cbase",null)))))),(new o188((new o188("\u1E9Cfix",(new o188("\u1E9Ci",null)))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cpower-eval",(new o188((new o188("\u1E9Cbig-plus",(new o188((new o188("\u1E9Cpower-rep",(new o188("\u1E9Ci",(new o188("\u1E9Cbase",null)))))),(new o188((new o188("\u1E9Cpower-rep",(new o188("\u1E9Cj",(new o188("\u1E9Cbase",null)))))),(new o188((new o188("\u1E9Czero",null)),(new o188("\u1E9Cbase",null)))))))))),(new o188("\u1E9Cbase",null)))))),(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Ci",(new o188("\u1E9Cj",null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cgcd",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188((new o188("\u1E9Cgcd",(new o188("\u1E9Cy",(new o188("\u1E9Cx",null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cnth",(new o188((new o188("\u1E9Cappend",(new o188("\u1E9Ca",(new o188("\u1E9Cb",null)))))),(new o188("\u1E9Ci",null)))))),(new o188((new o188("\u1E9Cappend",(new o188((new o188("\u1E9Cnth",(new o188("\u1E9Ca",(new o188("\u1E9Ci",null)))))),(new o188((new o188("\u1E9Cnth",(new o188("\u1E9Cb",(new o188((new o188("\u1E9Cdifference",(new o188("\u1E9Ci",(new o188((new o188("\u1E9Clength",(new o188("\u1E9Ca",null)))),null)))))),null)))))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cdifference",(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188("\u1E9Cx",null)))))),(new o188((new o188("\u1E9Cfix",(new o188("\u1E9Cy",null)))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cdifference",(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Cy",(new o188("\u1E9Cx",null)))))),(new o188("\u1E9Cx",null)))))),(new o188((new o188("\u1E9Cfix",(new o188("\u1E9Cy",null)))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cdifference",(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Cx",(new o188("\u1E9Cz",null)))))),null)))))),(new o188((new o188("\u1E9Cdifference",(new o188("\u1E9Cy",(new o188("\u1E9Cz",null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Ctimes",(new o188("\u1E9Cx",(new o188((new o188("\u1E9Cdifference",(new o188("\u1E9Cc",(new o188("\u1E9Cw",null)))))),null)))))),(new o188((new o188("\u1E9Cdifference",(new o188((new o188("\u1E9Ctimes",(new o188("\u1E9Cc",(new o188("\u1E9Cx",null)))))),(new o188((new o188("\u1E9Ctimes",(new o188("\u1E9Cw",(new o188("\u1E9Cx",null)))))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cremainder",(new o188((new o188("\u1E9Ctimes",(new o188("\u1E9Cx",(new o188("\u1E9Cz",null)))))),(new o188("\u1E9Cz",null)))))),(new o188((new o188("\u1E9Czero",null)),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cdifference",(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Cb",(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Ca",(new o188("\u1E9Cc",null)))))),null)))))),(new o188("\u1E9Ca",null)))))),(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Cb",(new o188("\u1E9Cc",null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cdifference",(new o188((new o188("\u1E9Cadd1",(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Cy",(new o188("\u1E9Cz",null)))))),null)))),(new o188("\u1E9Cz",null)))))),(new o188((new o188("\u1E9Cadd1",(new o188("\u1E9Cy",null)))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Clessp",(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Cx",(new o188("\u1E9Cz",null)))))),null)))))),(new o188((new o188("\u1E9Clessp",(new o188("\u1E9Cy",(new o188("\u1E9Cz",null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Clessp",(new o188((new o188("\u1E9Ctimes",(new o188("\u1E9Cx",(new o188("\u1E9Cz",null)))))),(new o188((new o188("\u1E9Ctimes",(new o188("\u1E9Cy",(new o188("\u1E9Cz",null)))))),null)))))),(new o188((new o188("\u1E9Cand",(new o188((new o188("\u1E9Cnot",(new o188((new o188("\u1E9Czerop",(new o188("\u1E9Cz",null)))),null)))),(new o188((new o188("\u1E9Clessp",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Clessp",(new o188("\u1E9Cy",(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),null)))))),(new o188((new o188("\u1E9Cnot",(new o188((new o188("\u1E9Czerop",(new o188("\u1E9Cx",null)))),null)))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cgcd",(new o188((new o188("\u1E9Ctimes",(new o188("\u1E9Cx",(new o188("\u1E9Cz",null)))))),(new o188((new o188("\u1E9Ctimes",(new o188("\u1E9Cy",(new o188("\u1E9Cz",null)))))),null)))))),(new o188((new o188("\u1E9Ctimes",(new o188("\u1E9Cz",(new o188((new o188("\u1E9Cgcd",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cvalue",(new o188((new o188("\u1E9Cnormalize",(new o188("\u1E9Cx",null)))),(new o188("\u1E9Ca",null)))))),(new o188((new o188("\u1E9Cvalue",(new o188("\u1E9Cx",(new o188("\u1E9Ca",null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cflatten",(new o188("\u1E9Cx",null)))),(new o188((new o188("\u1E9Ccons",(new o188("\u1E9Cy",(new o188((new o188("\u1E9Cnil",null)),null)))))),null)))))),(new o188((new o188("\u1E9Cand",(new o188((new o188("\u1E9Cnlistp",(new o188("\u1E9Cx",null)))),(new o188((new o188("\u1E9Cequal",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Clistp",(new o188((new o188("\u1E9Cgopher",(new o188("\u1E9Cx",null)))),null)))),(new o188((new o188("\u1E9Clistp",(new o188("\u1E9Cx",null)))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Csamefringe",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188((new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cflatten",(new o188("\u1E9Cx",null)))),(new o188((new o188("\u1E9Cflatten",(new o188("\u1E9Cy",null)))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cgreatest-factor",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188((new o188("\u1E9Czero",null)),null)))))),(new o188((new o188("\u1E9Cand",(new o188((new o188("\u1E9Cor",(new o188((new o188("\u1E9Czerop",(new o188("\u1E9Cy",null)))),(new o188((new o188("\u1E9Cequal",(new o188("\u1E9Cy",(new o188((1),null)))))),null)))))),(new o188((new o188("\u1E9Cequal",(new o188("\u1E9Cx",(new o188((new o188("\u1E9Czero",null)),null)))))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cgreatest-factor",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188((1),null)))))),(new o188((new o188("\u1E9Cequal",(new o188("\u1E9Cx",(new o188((1),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cnumberp",(new o188((new o188("\u1E9Cgreatest-factor",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),null)))),(new o188((new o188("\u1E9Cnot",(new o188((new o188("\u1E9Cand",(new o188((new o188("\u1E9Cor",(new o188((new o188("\u1E9Czerop",(new o188("\u1E9Cy",null)))),(new o188((new o188("\u1E9Cequal",(new o188("\u1E9Cy",(new o188((1),null)))))),null)))))),(new o188((new o188("\u1E9Cnot",(new o188((new o188("\u1E9Cnumberp",(new o188("\u1E9Cx",null)))),null)))),null)))))),null)))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Ctimes-list",(new o188((new o188("\u1E9Cappend",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),null)))),(new o188((new o188("\u1E9Ctimes",(new o188((new o188("\u1E9Ctimes-list",(new o188("\u1E9Cx",null)))),(new o188((new o188("\u1E9Ctimes-list",(new o188("\u1E9Cy",null)))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cprime-list",(new o188((new o188("\u1E9Cappend",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),null)))),(new o188((new o188("\u1E9Cand",(new o188((new o188("\u1E9Cprime-list",(new o188("\u1E9Cx",null)))),(new o188((new o188("\u1E9Cprime-list",(new o188("\u1E9Cy",null)))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cequal",(new o188("\u1E9Cz",(new o188((new o188("\u1E9Ctimes",(new o188("\u1E9Cw",(new o188("\u1E9Cz",null)))))),null)))))),(new o188((new o188("\u1E9Cand",(new o188((new o188("\u1E9Cnumberp",(new o188("\u1E9Cz",null)))),(new o188((new o188("\u1E9Cor",(new o188((new o188("\u1E9Cequal",(new o188("\u1E9Cz",(new o188((new o188("\u1E9Czero",null)),null)))))),(new o188((new o188("\u1E9Cequal",(new o188("\u1E9Cw",(new o188((1),null)))))),null)))))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cgreatereqp",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188((new o188("\u1E9Cnot",(new o188((new o188("\u1E9Clessp",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),null)))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cequal",(new o188("\u1E9Cx",(new o188((new o188("\u1E9Ctimes",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),null)))))),(new o188((new o188("\u1E9Cor",(new o188((new o188("\u1E9Cequal",(new o188("\u1E9Cx",(new o188((new o188("\u1E9Czero",null)),null)))))),(new o188((new o188("\u1E9Cand",(new o188((new o188("\u1E9Cnumberp",(new o188("\u1E9Cx",null)))),(new o188((new o188("\u1E9Cequal",(new o188("\u1E9Cy",(new o188((1),null)))))),null)))))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cremainder",(new o188((new o188("\u1E9Ctimes",(new o188("\u1E9Cy",(new o188("\u1E9Cx",null)))))),(new o188("\u1E9Cy",null)))))),(new o188((new o188("\u1E9Czero",null)),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cequal",(new o188((new o188("\u1E9Ctimes",(new o188("\u1E9Ca",(new o188("\u1E9Cb",null)))))),(new o188((1),null)))))),(new o188(o241("\u1E9Cand", (new o188("\u1E9Cnot",(new o188((new o188("\u1E9Cequal",(new o188("\u1E9Ca",(new o188((new o188("\u1E9Czero",null)),null)))))),null)))), (new o188("\u1E9Cnot",(new o188((new o188("\u1E9Cequal",(new o188("\u1E9Cb",(new o188((new o188("\u1E9Czero",null)),null)))))),null)))), (new o188("\u1E9Cnumberp",(new o188("\u1E9Ca",null)))), (new o188("\u1E9Cnumberp",(new o188("\u1E9Cb",null)))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Csub1",(new o188("\u1E9Ca",null)))),(new o188((new o188("\u1E9Czero",null)),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Csub1",(new o188("\u1E9Cb",null)))),(new o188((new o188("\u1E9Czero",null)),null))))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Clessp",(new o188((new o188("\u1E9Clength",(new o188((new o188("\u1E9Cdelete",(new o188("\u1E9Cx",(new o188("\u1E9Cl",null)))))),null)))),(new o188((new o188("\u1E9Clength",(new o188("\u1E9Cl",null)))),null)))))),(new o188((new o188("\u1E9Cmember",(new o188("\u1E9Cx",(new o188("\u1E9Cl",null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Csort2",(new o188((new o188("\u1E9Cdelete",(new o188("\u1E9Cx",(new o188("\u1E9Cl",null)))))),null)))),(new o188((new o188("\u1E9Cdelete",(new o188("\u1E9Cx",(new o188((new o188("\u1E9Csort2",(new o188("\u1E9Cl",null)))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cdsort",(new o188("\u1E9Cx",null)))),(new o188((new o188("\u1E9Csort2",(new o188("\u1E9Cx",null)))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Clength",(new o188((new o188("\u1E9Ccons",(new o188("\u1E9Cx1",(new o188((new o188("\u1E9Ccons",(new o188("\u1E9Cx2",(new o188((new o188("\u1E9Ccons",(new o188("\u1E9Cx3",(new o188((new o188("\u1E9Ccons",(new o188("\u1E9Cx4",(new o188((new o188("\u1E9Ccons",(new o188("\u1E9Cx5",(new o188((new o188("\u1E9Ccons",(new o188("\u1E9Cx6",(new o188("\u1E9Cx7",null)))))),null)))))),null)))))),null)))))),null)))))),null)))))),null)))),(new o188((new o188("\u1E9Cplus",(new o188((6),(new o188((new o188("\u1E9Clength",(new o188("\u1E9Cx7",null)))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cdifference",(new o188((new o188("\u1E9Cadd1",(new o188((new o188("\u1E9Cadd1",(new o188("\u1E9Cx",null)))),null)))),(new o188((2),null)))))),(new o188((new o188("\u1E9Cfix",(new o188("\u1E9Cx",null)))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cquotient",(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Cx",(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),null)))))),(new o188((2),null)))))),(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Cx",(new o188((new o188("\u1E9Cquotient",(new o188("\u1E9Cy",(new o188((2),null)))))),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Csigma",(new o188((new o188("\u1E9Czero",null)),(new o188("\u1E9Ci",null)))))),(new o188((new o188("\u1E9Cquotient",(new o188((new o188("\u1E9Ctimes",(new o188("\u1E9Ci",(new o188((new o188("\u1E9Cadd1",(new o188("\u1E9Ci",null)))),null)))))),(new o188((2),null)))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Cx",(new o188((new o188("\u1E9Cadd1",(new o188("\u1E9Cy",null)))),null)))))),(new o188((new o188("\u1E9Cif",(new o188((new o188("\u1E9Cnumberp",(new o188("\u1E9Cy",null)))),(new o188((new o188("\u1E9Cadd1",(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),null)))),(new o188((new o188("\u1E9Cadd1",(new o188("\u1E9Cx",null)))),null)))))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cdifference",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188((new o188("\u1E9Cdifference",(new o188("\u1E9Cz",(new o188("\u1E9Cy",null)))))),null)))))),(new o188((new o188("\u1E9Cif",(new o188((new o188("\u1E9Clessp",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188((new o188("\u1E9Cnot",(new o188((new o188("\u1E9Clessp",(new o188("\u1E9Cy",(new o188("\u1E9Cz",null)))))),null)))),(new o188((new o188("\u1E9Cif",(new o188((new o188("\u1E9Clessp",(new o188("\u1E9Cz",(new o188("\u1E9Cy",null)))))),(new o188((new o188("\u1E9Cnot",(new o188((new o188("\u1E9Clessp",(new o188("\u1E9Cy",(new o188("\u1E9Cx",null)))))),null)))),(new o188((new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cfix",(new o188("\u1E9Cx",null)))),(new o188((new o188("\u1E9Cfix",(new o188("\u1E9Cz",null)))),null)))))),null)))))))),null)))))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cmeaning",(new o188((new o188("\u1E9Cplus-tree",(new o188((new o188("\u1E9Cdelete",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),null)))),(new o188("\u1E9Ca",null)))))),(new o188((new o188("\u1E9Cif",(new o188((new o188("\u1E9Cmember",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188((new o188("\u1E9Cdifference",(new o188((new o188("\u1E9Cmeaning",(new o188((new o188("\u1E9Cplus-tree",(new o188("\u1E9Cy",null)))),(new o188("\u1E9Ca",null)))))),(new o188((new o188("\u1E9Cmeaning",(new o188("\u1E9Cx",(new o188("\u1E9Ca",null)))))),null)))))),(new o188((new o188("\u1E9Cmeaning",(new o188((new o188("\u1E9Cplus-tree",(new o188("\u1E9Cy",null)))),(new o188("\u1E9Ca",null)))))),null)))))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Ctimes",(new o188("\u1E9Cx",(new o188((new o188("\u1E9Cadd1",(new o188("\u1E9Cy",null)))),null)))))),(new o188((new o188("\u1E9Cif",(new o188((new o188("\u1E9Cnumberp",(new o188("\u1E9Cy",null)))),(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Cx",(new o188((new o188("\u1E9Ctimes",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),null)))))),(new o188((new o188("\u1E9Cfix",(new o188("\u1E9Cx",null)))),null)))))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cnth",(new o188((new o188("\u1E9Cnil",null)),(new o188("\u1E9Ci",null)))))),(new o188((new o188("\u1E9Cif",(new o188((new o188("\u1E9Czerop",(new o188("\u1E9Ci",null)))),(new o188((new o188("\u1E9Cnil",null)),(new o188((new o188("\u1E9Czero",null)),null)))))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Clast",(new o188((new o188("\u1E9Cappend",(new o188("\u1E9Ca",(new o188("\u1E9Cb",null)))))),null)))),(new o188((new o188("\u1E9Cif",(new o188((new o188("\u1E9Clistp",(new o188("\u1E9Cb",null)))),(new o188((new o188("\u1E9Clast",(new o188("\u1E9Cb",null)))),(new o188((new o188("\u1E9Cif",(new o188((new o188("\u1E9Clistp",(new o188("\u1E9Ca",null)))),(new o188((new o188("\u1E9Ccons",(new o188((new o188("\u1E9Ccar",(new o188((new o188("\u1E9Clast",(new o188("\u1E9Ca",null)))),null)))),(new o188("\u1E9Cb",null)))))),(new o188("\u1E9Cb",null)))))))),null)))))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cequal",(new o188((new o188("\u1E9Clessp",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188("\u1E9Cz",null)))))),(new o188((new o188("\u1E9Cif",(new o188((new o188("\u1E9Clessp",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),(new o188((new o188("\u1E9Cequal",(new o188((new o188("\u1E9Ct",null)),(new o188("\u1E9Cz",null)))))),(new o188((new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cf",null)),(new o188("\u1E9Cz",null)))))),null)))))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cassignment",(new o188("\u1E9Cx",(new o188((new o188("\u1E9Cappend",(new o188("\u1E9Ca",(new o188("\u1E9Cb",null)))))),null)))))),(new o188((new o188("\u1E9Cif",(new o188((new o188("\u1E9Cassignedp",(new o188("\u1E9Cx",(new o188("\u1E9Ca",null)))))),(new o188((new o188("\u1E9Cassignment",(new o188("\u1E9Cx",(new o188("\u1E9Ca",null)))))),(new o188((new o188("\u1E9Cassignment",(new o188("\u1E9Cx",(new o188("\u1E9Cb",null)))))),null)))))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Ccar",(new o188((new o188("\u1E9Cgopher",(new o188("\u1E9Cx",null)))),null)))),(new o188((new o188("\u1E9Cif",(new o188((new o188("\u1E9Clistp",(new o188("\u1E9Cx",null)))),(new o188((new o188("\u1E9Ccar",(new o188((new o188("\u1E9Cflatten",(new o188("\u1E9Cx",null)))),null)))),(new o188((new o188("\u1E9Czero",null)),null)))))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cflatten",(new o188((new o188("\u1E9Ccdr",(new o188((new o188("\u1E9Cgopher",(new o188("\u1E9Cx",null)))),null)))),null)))),(new o188((new o188("\u1E9Cif",(new o188((new o188("\u1E9Clistp",(new o188("\u1E9Cx",null)))),(new o188((new o188("\u1E9Ccdr",(new o188((new o188("\u1E9Cflatten",(new o188("\u1E9Cx",null)))),null)))),(new o188((new o188("\u1E9Ccons",(new o188((new o188("\u1E9Czero",null)),(new o188((new o188("\u1E9Cnil",null)),null)))))),null)))))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cquotient",(new o188((new o188("\u1E9Ctimes",(new o188("\u1E9Cy",(new o188("\u1E9Cx",null)))))),(new o188("\u1E9Cy",null)))))),(new o188((new o188("\u1E9Cif",(new o188((new o188("\u1E9Czerop",(new o188("\u1E9Cy",null)))),(new o188((new o188("\u1E9Czero",null)),(new o188((new o188("\u1E9Cfix",(new o188("\u1E9Cx",null)))),null)))))))),null)))))), (new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cget",(new o188("\u1E9Cj",(new o188((new o188("\u1E9Cset",(new o188("\u1E9Ci",(new o188("\u1E9Cval",(new o188("\u1E9Cmem",null)))))))),null)))))),(new o188((new o188("\u1E9Cif",(new o188((new o188("\u1E9Ceqp",(new o188("\u1E9Cj",(new o188("\u1E9Ci",null)))))),(new o188("\u1E9Cval",(new o188((new o188("\u1E9Cget",(new o188("\u1E9Cj",(new o188("\u1E9Cmem",null)))))),null)))))))),null))))))));
    (o635 = (new o188((new o188("\u1E9Cx",(new o188("\u1E9Cf",(new o188((new o188("\u1E9Cplus",(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Ca",(new o188("\u1E9Cb",null)))))),(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Cc",(new o188((new o188("\u1E9Czero",null)),null)))))),null)))))),null)))))),(new o188((new o188("\u1E9Cy",(new o188("\u1E9Cf",(new o188((new o188("\u1E9Ctimes",(new o188((new o188("\u1E9Ctimes",(new o188("\u1E9Ca",(new o188("\u1E9Cb",null)))))),(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Cc",(new o188("\u1E9Cd",null)))))),null)))))),null)))))),(new o188((new o188("\u1E9Cz",(new o188("\u1E9Cf",(new o188((new o188("\u1E9Creverse",(new o188((new o188("\u1E9Cappend",(new o188((new o188("\u1E9Cappend",(new o188("\u1E9Ca",(new o188("\u1E9Cb",null)))))),(new o188((new o188("\u1E9Cnil",null)),null)))))),null)))),null)))))),(new o188((new o188("\u1E9Cu",(new o188("\u1E9Cequal",(new o188((new o188("\u1E9Cplus",(new o188("\u1E9Ca",(new o188("\u1E9Cb",null)))))),(new o188((new o188("\u1E9Cdifference",(new o188("\u1E9Cx",(new o188("\u1E9Cy",null)))))),null)))))))),(new o188((new o188("\u1E9Cw",(new o188("\u1E9Clessp",(new o188((new o188("\u1E9Cremainder",(new o188("\u1E9Ca",(new o188("\u1E9Cb",null)))))),(new o188((new o188("\u1E9Cmember",(new o188("\u1E9Ca",(new o188((new o188("\u1E9Clength",(new o188("\u1E9Cb",null)))),null)))))),null)))))))),null)))))))))));
    o83 = function() {
        var o353 = null;
        for (var o638 = arguments.length - 1; o638 >= 0; o638--) {
            o353 = o201(arguments[o638], o353);
        }
        var o118;
        return ((o118 = ((o353 === null)?(0):(o353.o189))), (o614()), (o639(("nboyer"+(o579(o118))), (1), function() {
            return (o613(o118));
        }, function(o640) {
            if ((o117(o640)))
                switch (o118) {
                case (0):
                    return (o640===(95024));
                    break;
                case (1):
                    return (o640===(591777));
                    break;
                case (2):
                    return (o640===(1813975));
                    break;
                case (3):
                    return (o640===(5375678));
                    break;
                case (4):
                    return (o640===(16445406));
                    break;
                case (5):
                    return (o640===(51507739));
                    break;
                default:
                    return true;
                    break;
                }
            else
                return false;
        })));
    };
    o614 = function() {
        return true;
    };
    o613 = function() {
        return true;
    };
    o615 = function(o641) {
        var o642;
        return (!(o641 instanceof o188)?o641:(new o188((o618((o641.o189))), ((o642 = (o641.o190)), ((o642 === null)?null:(new o188((o615((o642.o189))), (o616((o642.o190))))))))));
    };
    o616 = function(o642) {
        var o643;
        var o641;
        return ((o642 === null)?null:(new o188(((o641 = (o642.o189)), (!(o641 instanceof o188)?o641:(new o188((o618((o641.o189))), (o616((o641.o190))))))), ((o643 = (o642.o190)), ((o643 === null)?null:(new o188((o615((o643.o189))), (o616((o643.o190))))))))));
    };
    o617 = function(o641) {
        var o644;
        var o645;
        var o646;
        var o647;
        var o648;
        if (!(o641 instanceof o188))
            return o641;
        else
            {
                (o647 = (new o188(null, null)));
                (o646 = (o641.o190));
                (o645 = o647);
                while (!(o646 === null)) {
                    {
                        (o645.o190 = (new o188((o617((o646.o189))), null)));
                        (o645 = (o645.o190));
                        (o646 = (o646.o190));
                    }
                }
                (o644 = (o647.o190));
                return (new o188(((o648 = (o641.o189)), (o648[(0)])), o644));
            }
    };
    o618 = function(o105) {
        var o649;
        var o93;
        return ((o93 = (o273(o105, o619))), ((o93!== false)?(o93.o190):((o649 = [o105, null]), (o619 = (new o188((new o188(o105, o649)), o619))), o649)));
    };
    (o619 = null);
    o620 = function(o650) {
        var o651;
        var o641;
        return ((o650 === null)?null:(new o188((new o188((o650.o189.o189), ((o641 = (o650.o189.o190)), (!(o641 instanceof o188)?o641:(new o188((o618((o641.o189))), (o616((o641.o190))))))))), ((o651 = (o650.o190)), ((o651 === null)?null:(new o188((new o188((o651.o189.o189), (o615((o651.o189.o190))))), (o620((o651.o190))))))))));
    };
    o621 = function(o650, o641) {
        var o642;
        var o652;
        return (!(o641 instanceof o188)?((o652 = (o273(o641, o650))), ((o652!== false)?(o652.o190):o641)):(new o188((o641.o189), ((o642 = (o641.o190)), ((o642 === null)?null:(new o188((o621(o650, (o642.o189))), (o622(o650, (o642.o190))))))))));
    };
    o622 = function(o650, o642) {
        var o653;
        return ((o642 === null)?null:(new o188((o621(o650, (o642.o189))), ((o653 = (o642.o190)), ((o653 === null)?null:(new o188((o621(o650, (o653.o189))), (o622(o650, (o653.o190))))))))));
    };
    o623 = function(o654, o655, o656) {
        var o657;
        var o93;
        var o658;
        var o659;
        var o660;
        var o661;
        var o654;
        var o655;
        var o656;
        while (true) {
            if ((((o661 = (o633(o654, o631))), ((o661!== false)?o661:(o634(o654, o655))))!== false))
                return true;
            else
                if ((((o660 = (o633(o654, o630))), ((o660!== false)?o660:(o634(o654, o656))))!== false))
                    return false;
                else
                    if (!(o654 instanceof o188))
                        return false;
                    else
                        if (((o654.o189)===o624))
                            if ((((o659 = (o654.o190.o189)), (o658 = (o633(o659, o631))), ((o658!== false)?o658:(o634(o659, o655))))!== false))
                                (o654 = (o654.o190.o190.o189));
                            else
                                if ((((o93 = (o654.o190.o189)), (o657 = (o633(o93, o630))), ((o657!== false)?o657:(o634(o93, o656))))!== false))
                                    (o654 = (o654.o190.o190.o190.o189));
                                else
                                    if (((o623((o654.o190.o190.o189), (new o188((o654.o190.o189), o655)), o656))!== false))
                                        {
                                            (o656 = (new o188((o654.o190.o189), o656)));
                                            (o654 = (o654.o190.o190.o190.o189));
                                        }
                                    else
                                        return false;
                        else
                            return false;
        }
    };
    (o624 = "\u1E9C*");
    (o625 = (0));
    o626 = function(o641) {
        var o662;
        var o663;
        var o642;
        var o648;
        var o664;
        {
            (++o625);
            if (!(o641 instanceof o188))
                return o641;
            else
                {
                    (o663 = (new o188((o641.o189), ((o664 = (o641.o190)), ((o664 === null)?null:(new o188((o626((o664.o189))), (o627((o664.o190))))))))));
                    (o642 = ((o648 = (o641.o189)), (o648[(1)])));
                    while (true) {
                        if ((o642 === null))
                            return o663;
                        else
                            if ((((o662 = ((o642.o189).o190.o189)), (o628 = null), (o629(o663, o662)))!== false))
                                return (o626((o621(o628, ((o642.o189).o190.o190.o189)))));
                            else
                                (o642 = (o642.o190));
                    }
                }
        }
    };
    o627 = function(o642) {
        var o665;
        return ((o642 === null)?null:(new o188((o626((o642.o189))), ((o665 = (o642.o190)), ((o665 === null)?null:(new o188((o626((o665.o189))), (o627((o665.o190))))))))));
    };
    (o628 = "\u1E9C*");
    o629 = function(o666, o662) {
        var o667;
        var o668;
        var o652;
        if (!(o662 instanceof o188))
            {
                (o652 = (o273(o662, o628)));
                if ((o652!== false))
                    return (o633(o666, (o652.o190)));
                else
                    if ((o117(o662)))
                        return (o254(o666, o662));
                    else
                        {
                            (o628 = (new o188((new o188(o662, o666)), o628)));
                            return true;
                        }
            }
        else
            if (!(o666 instanceof o188))
                return false;
            else
                if (((o666.o189)===(o662.o189)))
                    {
                        (o667 = (o666.o190));
                        (o668 = (o662.o190));
                        while (true) {
                            if ((o667 === null))
                                return (o668 === null);
                            else
                                if ((o668 === null))
                                    return false;
                                else
                                    if (((o629((o667.o189), (o668.o189)))!== false))
                                        {
                                            (o667 = (o667.o190));
                                            (o668 = (o668.o190));
                                        }
                                    else
                                        return false;
                        }
                    }
                else
                    return false;
    };
    (o630 = "\u1E9C*");
    (o631 = "\u1E9C*");
    o632 = function(o118) {
        var o669;
        return ((o254(o118, (1)))?(o241("\u1E9Cimplies", (0), (1))):(o241("\u1E9Cand", (o241("\u1E9Cimplies", (o118-(1)), o118)), ((o669 = (o118-(1))), ((o254(o669, (1)))?(o241("\u1E9Cimplies", (0), (1))):(o241("\u1E9Cand", (o241("\u1E9Cimplies", (o669-(1)), o669)), (o632((o669-(1)))))))))));
    };
    o633 = function(o93, o128) {
        var o667;
        var o668;
        var o670;
        var o671;
        if ((o93 instanceof o188))
            if ((o128 instanceof o188))
                if ((((o671 = (o93.o189)), (o670 = (o128.o189)), (o671===o670))!== false))
                    {
                        (o667 = (o93.o190));
                        (o668 = (o128.o190));
                        while (true) {
                            if ((o667 === null))
                                return (o668 === null);
                            else
                                if ((o668 === null))
                                    return false;
                                else
                                    if (((o633((o667.o189), (o668.o189)))!== false))
                                        {
                                            (o667 = (o667.o190));
                                            (o668 = (o668.o190));
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
            return (o254(o93, o128));
    };
    o634 = function(o93, o642) {
        var o93;
        var o642;
        while (true) {
            if ((o642 === null))
                return false;
            else
                if (((o633(o93, (o642.o189)))!== false))
                    return true;
                else
                    (o642 = (o642.o190));
        }
    };
    o614 = function() {
        var o648;
        var value;
        var o672;
        var o105;
        var o673;
        var o641;
        var o642;
        var o674;
        var o675;
        {
            (o619 = null);
            (o624 = (o618("\u1E9Cif")));
            (o630 = ((o675 = (new o188("\u1E9Cf",null))), (!(o675 instanceof o188)?o675:(new o188((o618((o675.o189))), (o616((o675.o190))))))));
            (o631 = ((o674 = (new o188("\u1E9Ct",null))), (!(o674 instanceof o188)?o674:(new o188((o618((o674.o189))), (o616((o674.o190))))))));
            (o642 = o636);
            while (!(o642 === null)) {
                {
                    (o641 = (o642.o189));
                    if (((o641 instanceof o188)&&(((o641.o189)==="\u1E9Cequal")&&((o641.o190.o189) instanceof o188))))
                        {
                            (o673 = ((o641.o190.o189).o189));
                            (value = (new o188((!(o641 instanceof o188)?o641:(new o188((o618((o641.o189))), (o616((o641.o190)))))), ((o105 = ((o641.o190.o189).o189)), (o672 = (o618(o105))), (o672[(1)])))));
                            (o648 = (o618(o673)));
                            (o648[(1)] = value);
                        }
                    else
                        (o94("ADD-LEMMA did not like term:  ", o641));
                    (o642 = (o642.o190));
                }
            }
            return true;
        }
    };
    o613 = function(o118) {
        var o644;
        var o641;
        var o676;
        var o677;
        var o678;
        var o679;
        {
            (o625 = (0));
            (o641 = o637);
            (o676 = o118);
            while (!(o676=== 0)) {
                {
                    (o641 = (o241("\u1E9Cor", o641, (new o188("\u1E9Cf",null)))));
                    (--o676);
                }
            }
            (o679 = o641);
            if (!(o679 instanceof o188))
                (o644 = o679);
            else
                (o644 = (new o188((o618((o679.o189))), (o616((o679.o190))))));
            (o678 = (o621(((o635 === null)?null:(new o188((new o188((o635.o189.o189), (o615((o635.o189.o190))))), (o620((o635.o190)))))), o644)));
            (o677 = (o623((o626(o678)), null, null)));
            (o555(o625));
            (o557(" rewrites"));
            (o558());
            if ((o677!== false))
                return o625;
            else
                return false;
        }
    };
}
/* Exported Variables */
var o680;
var o82;
var o681;
var test;
var o682;
var o683;
/* End Exports */

var o684;
{
    (o684 = (new o188((new o188("\u1E9Cs",(new o188((new o188("\u1E9Ca",null)),(new o188((new o188("\u1E9Cs",(new o188("\u1E9Cs",null)))),null)))))),null)));
    o683 = function(o685, o686) {
        var o51;
        var o687;
        var o688;
        var o689;
        var o690;
        var o691;
        var o692;
        var o693;
        var o694;
        var o695;
        var o696;
        var o697;
        var o698;
        var o699;
        var o700;
        var o701;
        var o702;
        var o703;
        var o704;
        var o705;
        var o706;
        {
            o706 = function(o707, o708) {
                var o51;
                {
                    (o51 = ((o708.length)-(1)));
                    while (true) {
                        if ((o51>=(0)))
                            if ((o254((o708[o51]), o707)))
                                return o51;
                            else
                                (--o51);
                        else
                            return false;
                    }
                }
            };
            (o704 = ((o705 = function(o709, o710) {
                var o711;
                var o363;
                var o712;
                return ((o709 instanceof o188)?((o712 = (o709.o189)), (o363 = (o712.o189)), (o711 = function(o713, o714) {
                    var o707;
                    var o236;
                    var o715;
                    var o716;
                    if ((o713 instanceof o188))
                        {
                            (o716 = (o713.o189));
                            (o236 = o716);
                            (o715 = o714);
                            while ((o236 instanceof o188)) {
                                {
                                    (o707 = (o236.o189));
                                    (o236 = (o236.o190));
                                    (o715 = (((o272(o707, o715))!== false)?o715:(new o188(o707, o715))));
                                }
                            }
                            return (o711((o713.o190), o715));
                        }
                    else
                        return (o705((o709.o190), o714));
                }), (o711((o712.o190), (((o272(o363, o710))!== false)?o710:(new o188(o363, o710)))))):(o340((o262(o710)))));
            }), (o705(o685, null))));
            (o703 = (o704.length));
            (o701 = (((o702 = function(o709, o717) {
                var o711;
                var o712;
                return ((o709 instanceof o188)?((o712 = (o709.o189)), (o711 = function(o713, o718) {
                    var o236;
                    var o719;
                    var o716;
                    if ((o713 instanceof o188))
                        {
                            (o716 = (o713.o189));
                            (o236 = o716);
                            (o719 = o718);
                            while ((o236 instanceof o188)) {
                                {
                                    (o236 = (o236.o190));
                                    (++o719);
                                }
                            }
                            return (o711((o713.o190), (o719+(1))));
                        }
                    else
                        return (o702((o709.o190), o718));
                }), (o711((o712.o190), o717))):o717);
            }), (o702(o685, (0))))+o703));
            (o700 = (o331(o703, null)));
            (o699 = (o331(o703, null)));
            (o698 = (o331(o703, null)));
            (o697 = (o331(o701, false)));
            (o696 = (o331(o701, false)));
            (o695 = o704);
            (o694 = o700);
            (o693 = o699);
            (o692 = o698);
            (o691 = o697);
            (o690 = o696);
            (o689 = (o704.length));
            (o51 = (o689-(1)));
            while ((o51>=(0))) {
                {
                    (o697[o51] = (o51-o689));
                    (o696[o51] = (o241((o704[o51]), (0))));
                    (o699[o51] = (o241(o51)));
                    (--o51);
                }
            }
            o688 = function(o709, o720) {
                var o711;
                var o363;
                var o712;
                return ((o709 instanceof o188)?((o712 = (o709.o189)), (o363 = (o712.o189)), (o711 = function(o713, o720, o721) {
                    var o51;
                    var o722;
                    var o707;
                    var o236;
                    var o723;
                    var o724;
                    var o716;
                    if ((o713 instanceof o188))
                        {
                            (o716 = (o713.o189));
                            (o690[o720] = (o241(o363, o721)));
                            (o724 = (o706(o363, o695)));
                            (o694[o724] = (new o188(o720, (o694[o724]))));
                            (o236 = o716);
                            (o723 = o720);
                            while ((o236 instanceof o188)) {
                                {
                                    (o707 = (o236.o189));
                                    (o691[o723] = (o706(o707, o695)));
                                    (o722 = (o706(o707, o695)));
                                    (o692[o722] = (new o188(o723, (o692[o722]))));
                                    (o236 = (o236.o190));
                                    (++o723);
                                }
                            }
                            (o691[o723] = ((o706(o363, o695))-o689));
                            (o51 = (o706(o363, o695)));
                            (o693[o51] = (new o188(o723, (o693[o51]))));
                            return (o711((o713.o190), (o723+(1)), (o721+(1))));
                        }
                    else
                        return (o688((o709.o190), o720));
                }), (o711((o712.o190), o720, (1)))):undefined);
            };
            (o688(o685, (o704.length)));
            (o687 = [o686, o704, o700, o699, o698, o697, o696]);
            return function(input) {
                var o644;
                var o725;
                var o726;
                var o727;
                var o728;
                var o729;
                var o730;
                var o731;
                var o732;
                var o733;
                var o734;
                var o735;
                var o736;
                var o51;
                var o720;
                var o236;
                var o737;
                var o738;
                var o739;
                var o257;
                var o258;
                var o740;
                var o741;
                var o742;
                var o743;
                var o744;
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
                var o686;
                var o760;
                var o761;
                var o762;
                var o763;
                var o764;
                var o765;
                var o766;
                var o767;
                var o768;
                var o769;
                var o770;
                var o771;
                var o772;
                var o773;
                {
                    o760 = function(o707, o774) {
                        var o51;
                        {
                            (o51 = ((o774.length)-(1)));
                            while (true) {
                                if ((o51>=(0)))
                                    if ((o254((o774[o51]), o707)))
                                        return o51;
                                    else
                                        (--o51);
                                else
                                    return false;
                            }
                        }
                    };
                    o761 = function(o775, o776) {
                        var o327;
                        var o51;
                        var o777;
                        {
                            (o777 = (o331((o775+(1)), false)));
                            (o51 = o775);
                            while ((o51>=(0))) {
                                {
                                    (o327 = (o331((o776+(1)), false)));
                                    (o327[(0)] = (-1));
                                    (o777[o51] = o327);
                                    (--o51);
                                }
                            }
                            return o777;
                        }
                    };
                    o762 = function(o778, o779, o780) {
                        var o781;
                        var o782;
                        return ((o782 = (o778[(o780+(1))])), ((o782!== false)?o782:((o781 = (o331((o779+(6)), false))), (o781[(1)] = (-3)), (o781[(2)] = (-1)), (o781[(3)] = (-1)), (o781[(4)] = (-1)), (o778[(o780+(1))] = o781), o781)));
                    };
                    o763 = function(o781) {
                        return ((o781[((o781[(1)])+(5))] = (o781[(4)])), (o781[(1)] = (o781[(3)])), (o781[(3)] = (-1)), (o781[(4)] = (-1)));
                    };
                    o764 = function(o778, o781, o783, o51) {
                        var o250;
                        return ((o250 = (o781[(3)])), (o781[(o51+(5))] = (-1)), (o781[(o250+(5))] = o51), (o781[(3)] = o51), ((o250<(0))?((o781[(0)] = (o778[(0)])), (o778[(0)] = o783)):undefined));
                    };
                    o765 = function(o784, o785, o236, o51) {
                        var o781;
                        var o786;
                        var o257;
                        var o778;
                        {
                            (o778 = (o784[o785]));
                            (o257 = o236);
                            while ((o257 instanceof o188)) {
                                {
                                    (o786 = (o257.o189));
                                    (o781 = (o762(o778, o785, o786)));
                                    if (((o781[(o51+(5))])=== false))
                                        {
                                            (o764(o778, o781, o786, o51));
                                            (o257 = (o257.o190));
                                        }
                                    else
                                        (o257 = (o257.o190));
                                }
                            }
                            return undefined;
                        }
                    };
                    o766 = function(o787, o788, o789, o790, o51) {
                        var o791;
                        var o792;
                        var o781;
                        var o778;
                        return ((o778 = (o787[o789])), ((((o781 = (o778[(o790+(1))])), ((o781!== false)?(o781[(o51+(5))]):false))!== false)?((o792 = (o788[o789])), (o791 = (o762(o792, o789, o790))), (((o791[(o51+(5))])=== false)?(o764(o792, o791, o790, o51)):undefined), true):false));
                    };
                    o767 = function(o778, o781, o793, o794) {
                        var o51;
                        {
                            (o51 = (o794[(2)]));
                            while ((o51>=(0))) {
                                if (((o781[(o51+(5))])=== false))
                                    {
                                        (o764(o778, o781, o793, o51));
                                        (o51 = (o794[(o51+(5))]));
                                    }
                                else
                                    (o51 = (o794[(o51+(5))]));
                            }
                            return undefined;
                        }
                    };
                    o768 = function(o795, o796, o797, o798, o799, o800, o801) {
                        var o802;
                        var next;
                        var o781;
                        var o803;
                        var o236;
                        var o804;
                        var o805;
                        var o806;
                        var o807;
                        var o363;
                        var o808;
                        var o809;
                        var o778;
                        var o810;
                        var o811;
                        var o812;
                        var o813;
                        var o814;
                        var o815;
                        var o816;
                        {
                            (o816 = (o795[o796]));
                            (o815 = (o801.length));
                            while (true) {
                                {
                                    (o814 = (o816[(0)]));
                                    if ((o814>=(0)))
                                        {
                                            (o813 = (o800[o814]));
                                            (o812 = (o816[(o814+(1))]));
                                            (o363 = (o812[(4)]));
                                            (o816[(0)] = (o812[(0)]));
                                            (o763(o812));
                                            if ((o813>=(0)))
                                                {
                                                    (o806 = (o797[o813]));
                                                    while ((o806 instanceof o188)) {
                                                        {
                                                            (o805 = (o806.o189));
                                                            (o804 = (o762(o816, o796, o805)));
                                                            if (((o804[(o796+(5))])=== false))
                                                                {
                                                                    (o764(o816, o804, o805, o796));
                                                                    (o806 = (o806.o190));
                                                                }
                                                            else
                                                                (o806 = (o806.o190));
                                                        }
                                                    }
                                                    (o236 = (o798[o813]));
                                                    while ((o236 instanceof o188)) {
                                                        {
                                                            (o803 = (o236.o189));
                                                            if ((((o781 = (o816[(o803+(1))])), ((o781!== false)?(o781[(o796+(5))]):false))!== false))
                                                                {
                                                                    (next = (o814+(1)));
                                                                    (o802 = (o762(o816, o796, next)));
                                                                    (o767(o816, o802, next, o812));
                                                                    (o236 = (o236.o190));
                                                                }
                                                            else
                                                                (o236 = (o236.o190));
                                                        }
                                                    }
                                                }
                                            else
                                                {
                                                    (o811 = (o799[(o813+o815)]));
                                                    (o810 = o795);
                                                    (o778 = o816);
                                                    (o809 = o796);
                                                    (o808 = o812);
                                                    o807 = function(o236) {
                                                        var o817;
                                                        var o818;
                                                        var o819;
                                                        var o820;
                                                        var o51;
                                                        var o821;
                                                        if ((o236 instanceof o188))
                                                            {
                                                                (o821 = (o236.o189));
                                                                (o51 = o363);
                                                                while ((o51>=(0))) {
                                                                    {
                                                                        (o820 = ((o817 = (o810[o51])), (o817[(o821+(1))])));
                                                                        if ((o820!== false))
                                                                            {
                                                                                (o819 = (o821+(1)));
                                                                                (o818 = (o762(o778, o809, o819)));
                                                                                (o767(o778, o818, o819, o820));
                                                                            }
                                                                        (o51 = (o808[(o51+(5))]));
                                                                    }
                                                                }
                                                                return (o807((o236.o190)));
                                                            }
                                                        else
                                                            return undefined;
                                                    };
                                                    (o807(o811));
                                                }
                                        }
                                    else
                                        return undefined;
                                }
                            }
                        }
                    };
                    o769 = function(o707, o51, o348, o822, o823, o824) {
                        var o781;
                        var o778;
                        var o825;
                        var o236;
                        var o826;
                        {
                            (o826 = (o760(o707, o822)));
                            if ((o826!== false))
                                {
                                    (o822.length);
                                    (o236 = (o823[o826]));
                                    while (true) {
                                        if ((o236 instanceof o188))
                                            {
                                                (o825 = (o236.o189));
                                                if ((((o778 = (o824[o348])), (o781 = (o778[(o825+(1))])), ((o781!== false)?(o781[(o51+(5))]):false))!== false))
                                                    return true;
                                                else
                                                    (o236 = (o236.o190));
                                            }
                                        else
                                            return false;
                                    }
                                }
                            else
                                return false;
                        }
                    };
                    o770 = function(o827, o51, o348, o828, o829, o830, o831, o832, o833) {
                        var o834;
                        var o835;
                        var name;
                        return ((name = (o830[o827])), ((name!== false)?((o827<o833)?(o241((o241(name, ((o831[o51]).o189))))):(o241((o241(name))))):((o835 = (o827-(1))), (o834 = function(o257, o258) {
                            var o836;
                            var o837;
                            var o778;
                            var o803;
                            var o257;
                            var o258;
                            while (true) {
                                if ((o257 instanceof o188))
                                    {
                                        (o803 = (o257.o189));
                                        (o837 = ((o778 = (o832[o348])), (o778[(o803+(1))])));
                                        if ((o837!== false))
                                            {
                                                o836 = function(o268, o258) {
                                                    var o838;
                                                    var o839;
                                                    var o840;
                                                    var o781;
                                                    var o841;
                                                    var o268;
                                                    var o258;
                                                    while (true) {
                                                        if ((o268>=(0)))
                                                            if (((o268>=o51)&&(((o841 = (o832[o268])), (o781 = (o841[(o835+(1))])), ((o781!== false)?(o781[(o51+(5))]):false))!== false)))
                                                                {
                                                                    (o840 = (o770(o835, o51, o268, o828, o829, o830, o831, o832, o833)));
                                                                    (o839 = (o770(o803, o268, o348, o828, o829, o830, o831, o832, o833)));
                                                                    o838 = function(o368, o258) {
                                                                        var o842;
                                                                        var o843;
                                                                        var o844;
                                                                        if ((o368 instanceof o188))
                                                                            {
                                                                                (o844 = (o241((o368.o189))));
                                                                                (o842 = o840);
                                                                                (o843 = o258);
                                                                                while ((o842 instanceof o188)) {
                                                                                    {
                                                                                        (o843 = (new o188((o263((o842.o189), o844)), o843)));
                                                                                        (o842 = (o842.o190));
                                                                                    }
                                                                                }
                                                                                return (o838((o368.o190), o843));
                                                                            }
                                                                        else
                                                                            return (o836((o837[(o268+(5))]), o258));
                                                                    };
                                                                    return (o838(o839, o258));
                                                                }
                                                            else
                                                                (o268 = (o837[(o268+(5))]));
                                                        else
                                                            return (o834((o257.o190), o258));
                                                    }
                                                };
                                                return (o836((o837[(2)]), o258));
                                            }
                                        else
                                            (o257 = (o257.o190));
                                    }
                                else
                                    return o258;
                            }
                        }), (o834((o828[(o829[o835])]), null)))));
                    };
                    o771 = function(o707, o51, o348, o845, o846, o847, o848, o849, o850) {
                        var o781;
                        var o778;
                        var o851;
                        var o236;
                        var o852;
                        var o853;
                        var o854;
                        {
                            (o854 = (o760(o707, o845)));
                            if ((o854!== false))
                                {
                                    (o853 = (o845.length));
                                    (o236 = (o846[o854]));
                                    (o852 = null);
                                    while ((o236 instanceof o188)) {
                                        {
                                            (o851 = (o236.o189));
                                            if ((((o778 = (o850[o348])), (o781 = (o778[(o851+(1))])), ((o781!== false)?(o781[(o51+(5))]):false))!== false))
                                                {
                                                    (o236 = (o236.o190));
                                                    (o852 = (o263((o770(o851, o51, o348, o846, o847, o848, o849, o850, o853)), o852)));
                                                }
                                            else
                                                (o236 = (o236.o190));
                                        }
                                    }
                                    return o852;
                                }
                            else
                                return false;
                        }
                    };
                    o772 = function(o855, o51, o348, o856, o857, o858, o859, o860) {
                        var o861;
                        var o862;
                        var o835;
                        return ((o835 = (o855-(1))), ((((o862 = (o855<o860)), ((o862!== false)?o862:((o857[o835])<(0))))!== false)?(1):((o861 = function(o236, o863) {
                            var o864;
                            var o865;
                            var o781;
                            var o778;
                            var o268;
                            var o118;
                            var o837;
                            var o866;
                            var o803;
                            var o236;
                            var o863;
                            while (true) {
                                if ((o236 instanceof o188))
                                    {
                                        (o803 = (o236.o189));
                                        (o837 = ((o866 = (o859[o348])), (o866[(o803+(1))])));
                                        if ((o837!== false))
                                            {
                                                (o268 = (o837[(2)]));
                                                (o118 = o863);
                                                while ((o268>=(0))) {
                                                    if (((o268>=o51)&&(((o778 = (o859[o268])), (o781 = (o778[(o835+(1))])), ((o781!== false)?(o781[(o51+(5))]):false))!== false)))
                                                        {
                                                            (o865 = (o772(o835, o51, o268, o856, o857, o858, o859, o860)));
                                                            (o864 = (o772(o803, o268, o348, o856, o857, o858, o859, o860)));
                                                            (o268 = (o837[(o268+(5))]));
                                                            (o118 +=(o865*o864));
                                                        }
                                                    else
                                                        (o268 = (o837[(o268+(5))]));
                                                }
                                                return (o861((o236.o190), o118));
                                            }
                                        else
                                            (o236 = (o236.o190));
                                    }
                                else
                                    return o863;
                            }
                        }), (o861((o856[(o857[o835])]), (0))))));
                    };
                    o773 = function(o707, o51, o348, o867, o868, o869, o870, o871) {
                        var o781;
                        var o778;
                        var o872;
                        var o236;
                        var o873;
                        var o874;
                        var o875;
                        {
                            (o875 = (o760(o707, o867)));
                            if ((o875!== false))
                                {
                                    (o874 = (o867.length));
                                    (o236 = (o868[o875]));
                                    (o873 = (0));
                                    while ((o236 instanceof o188)) {
                                        {
                                            (o872 = (o236.o189));
                                            if ((((o778 = (o871[o348])), (o781 = (o778[(o872+(1))])), ((o781!== false)?(o781[(o51+(5))]):false))!== false))
                                                {
                                                    (o236 = (o236.o190));
                                                    (o873 = ((o772(o872, o51, o348, o868, o869, o870, o871, o874))+o873));
                                                }
                                            else
                                                (o236 = (o236.o190));
                                        }
                                    }
                                    return o873;
                                }
                            else
                                return false;
                        }
                    };
                    (o686 = (o687[(0)]));
                    (o759 = (o687[(1)]));
                    (o758 = (o687[(2)]));
                    (o757 = (o687[(3)]));
                    (o756 = (o687[(4)]));
                    (o755 = (o687[(5)]));
                    (o754 = (o687[(6)]));
                    (o753 = (new o188(null, null)));
                    (o742 = (o686(input)));
                    (o741 = o753);
                    while (!(o742 === null)) {
                        {
                            (o740 = (o742.o189));
                            (o257 = (o740.o190));
                            (o258 = null);
                            while ((o257 instanceof o188)) {
                                {
                                    (o739 = (o760((o257.o189), o759)));
                                    if ((o739!== false))
                                        {
                                            (o257 = (o257.o190));
                                            (o258 = (new o188(o739, o258)));
                                        }
                                    else
                                        (o257 = (o257.o190));
                                }
                            }
                            (o727 = (new o188((o740.o189), (o262(o258)))));
                            (o726 = (new o188(o727, null)));
                            (o741.o190 = o726);
                            (o741 = (o741.o190));
                            (o742 = (o742.o190));
                        }
                    }
                    (o725 = (o753.o190));
                    (o752 = (o340(o725)));
                    (o751 = (o752.length));
                    (o750 = (o755.length));
                    (o749 = (o761(o751, o750)));
                    (o748 = (o758[(0)]));
                    (o765(o749, (0), o748, (0)));
                    (o768(o749, (0), o758, o757, o756, o755, o759));
                    (o738 = (0));
                    while ((o738<o751)) {
                        {
                            (o737 = ((o752[o738]).o190));
                            (o765(o749, (o738+(1)), o737, o738));
                            (o768(o749, (o738+(1)), o758, o757, o756, o755, o759));
                            (++o738);
                        }
                    }
                    (o747 = (o752.length));
                    (o746 = (o755.length));
                    (o745 = (o759.length));
                    (o744 = (o761(o747, o746)));
                    (o743 = (o757[(0)]));
                    (o236 = o743);
                    while ((o236 instanceof o188)) {
                        {
                            (o720 = (o236.o189));
                            (o766(o749, o744, o747, o720, (0)));
                            (o236 = (o236.o190));
                        }
                    }
                    (o51 = o747);
                    while ((o51>=(0))) {
                        {
                            (o736 = o749);
                            (o735 = o744);
                            (o734 = o51);
                            (o733 = o757);
                            (o732 = o755);
                            (o731 = o745);
                            (o730 = o752);
                            (o729 = (o744[o51]));
                            o728 = function() {
                                var o876;
                                var o835;
                                var o877;
                                var o878;
                                var o348;
                                var o51;
                                var o879;
                                var o363;
                                var o781;
                                var o880;
                                {
                                    (o880 = (o729[(0)]));
                                    if ((o880>=(0)))
                                        {
                                            (o781 = (o729[(o880+(1))]));
                                            (o363 = (o781[(4)]));
                                            (o729[(0)] = (o781[(0)]));
                                            (o763(o781));
                                            (o879 = o363);
                                            while ((o879>=(0))) {
                                                {
                                                    (o51 = o879);
                                                    (o348 = o734);
                                                    (o878 = o736);
                                                    (o877 = o735);
                                                    (o835 = (o880-(1)));
                                                    if (((o880>=o731)&&((o732[o835])>=(0))))
                                                        {
                                                            o876 = function(o236) {
                                                                var o268;
                                                                var o837;
                                                                var o778;
                                                                var o803;
                                                                var o236;
                                                                while (true) {
                                                                    if ((o236 instanceof o188))
                                                                        {
                                                                            (o803 = (o236.o189));
                                                                            (o837 = ((o778 = (o878[o348])), (o778[(o803+(1))])));
                                                                            if ((o837!== false))
                                                                                {
                                                                                    (o268 = (o837[(2)]));
                                                                                    while ((o268>=(0))) {
                                                                                        {
                                                                                            if ((o268>=o51))
                                                                                                if (((o766(o878, o877, o268, o835, o51))!== false))
                                                                                                    (o766(o878, o877, o348, o803, o268));
                                                                                            (o268 = (o837[(o268+(5))]));
                                                                                        }
                                                                                    }
                                                                                    return (o876((o236.o190)));
                                                                                }
                                                                            else
                                                                                (o236 = (o236.o190));
                                                                        }
                                                                    else
                                                                        return undefined;
                                                                }
                                                            };
                                                            (o876((o733[(o732[o835])])));
                                                        }
                                                    (o879 = (o781[(o879+(5))]));
                                                }
                                            }
                                            return (o728());
                                        }
                                    else
                                        return undefined;
                                }
                            };
                            (o728());
                            (--o51);
                        }
                    }
                    (o644 = o744);
                    return [o759, o758, o757, o756, o755, o754, o752, o644, o769, o771, o773];
                }
            };
        }
    };
    o681 = function(parse, o707, o51, o348) {
        var o769;
        var o736;
        var o693;
        var o695;
        return ((o695 = (parse[(0)])), (o693 = (parse[(2)])), (o736 = (parse[(7)])), (o769 = (parse[(8)])), (o769(o707, o51, o348, o695, o693, o736)));
    };
    o682 = function(parse, o707, o51, o348) {
        var o881;
        var o736;
        var o730;
        var o690;
        var o691;
        var o693;
        var o695;
        return ((o695 = (parse[(0)])), (o693 = (parse[(2)])), (o691 = (parse[(4)])), (o690 = (parse[(5)])), (o730 = (parse[(6)])), (o736 = (parse[(7)])), (o881 = (parse[(9)])), (o881(o707, o51, o348, o695, o693, o691, o690, o730, o736)));
    };
    o680 = function(parse, o707, o51, o348) {
        var o882;
        var o736;
        var o730;
        var o691;
        var o693;
        var o695;
        return ((o695 = (parse[(0)])), (o693 = (parse[(2)])), (o691 = (parse[(4)])), (o730 = (parse[(6)])), (o736 = (parse[(7)])), (o882 = (parse[(10)])), (o882(o707, o51, o348, o695, o693, o691, o730, o736)));
    };
    test = function(o268) {
        var o93;
        var o196;
        return ((o196 = (o683(o684, function(o236) {
            var o883;
            var o884;
            var o885;
            var o886;
            {
                (o886 = (new o188(null, null)));
                (o884 = o886);
                (o885 = o236);
                while (!(o885 === null)) {
                    {
                        (o884.o190 = (new o188(((o883 = (o885.o189)), (o241(o883, o883))), null)));
                        (o884 = (o884.o190));
                        (o885 = (o885.o190));
                    }
                }
                return (o886.o190);
            }
        }))), (o93 = (o196((o339((o331(o268, "\u1E9Ca"))))))), (o247((o682(o93, "\u1E9Cs", (0), o268)))));
    };
    o82 = function() {
        var o353 = null;
        for (var o638 = arguments.length - 1; o638 >= 0; o638--) {
            o353 = o201(arguments[o638], o353);
        }
        var o268;
        return ((o268 = ((o353 === null)?(7):(o353.o189))), (o639("earley", (1), function() {
            return (test(o268));
        }, function(o50) {
            return ((o557(o50)), (o558()), o50 == 132);
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

o541 = new o545(function(o30) {});
o570 = o541;

function o887(name, o888, o12, o889) {
  for (var o118 = 0; o118 < o888; ++o118) {
    o50 = o12();
    if (!o889(o50)) {
      throw new Error("Earley or Boyer did incorrect number of rewrites");
    }
  }
}

var o639 = o887;

////////////////////////////////////////////////////////////////////////////////
// Runner
////////////////////////////////////////////////////////////////////////////////

var o890 = true;

function o40(name) {
}

function o67(name, o68) {
  o0.o1(name + " : ERROR : " +o68.o891);
  o890 = false;
}

function o62(name, o45) {
  if (o890) {
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
