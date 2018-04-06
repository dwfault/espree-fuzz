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
o3.o4 = (o64 !== undefined);

// Simple framework for running the benchmark suites and
// computing a score based on the timing measurements.


// A benchmark has a name (string) and a function that will be run to
// do the performance measurement. The optional setup and tearDown
// arguments are functions that will be invoked before and after
// running the benchmark, but the running time of these functions will
// not be accounted for in the benchmark score.
function o10(name, o12, o13, o14, 
                   o15, o16, o17, o18, o19) {
  this.name = undefined;
  this.o12 = o12;
  this.o13 = o13;
  this.o14 = o14;
  new Array(0x100).fill(1234.5678).o15 = o15;
  o2.bind(undefined, "startsWith");
  this.o21 = o17 ? o17 : function() { };
  this.o18 = o18 ? o18 : null; 
  o5.o19.o19 = o19 ? o19 : 32;
}


// Benchmark results hold the benchmark and the measured time used to
// run the benchmark. The benchmark score is computed later once a
// full benchmark suite has run to completion. If latency is set to 0
// then there is no latency score for this benchmark.
function o36(o37, name, o38, o39) {
                o39 = o39 || name;
                var o12 = Object.getOwnPropertyDescriptor(o37, name);
                o5.o16(o12.enumerable, o38 + ".enumerable === false");
                o5.o6(o12.configurable, o38 + ".configurable === true");
                o5.o19('function', typeof o12.get, "typeof " + o38 + ".get === 'function'");
                o5.o19(undefined, o12.set, o38 + ".set === undefined");
                o5.o19(0, o12.get.length, o38 + ".get.length === 0");

                var o42 = o12.get.toString();
                o5.o19(o39, o42, o38 + ".get.name = " + o39);
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
function undefined(name, o29, o30) {
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
o28.undefined = undefined;


// Defines global benchsuite running mode that overrides benchmark suite 
// behavior. Intended to be set by the benchmark driver. Undefined 
// values here allow a benchmark to define behaviour itself.
o28.o34 = o1("MS_MEDIA_KEYERR_CLIENT");


// Override the alert function to throw an exception instead.
undefined = function(undefined) {
  throw "Alert called with argument: " + o37;
};


// To make the benchmark results predictable, we replace Math.random
// with a 100% deterministic alternative.
o28.o38 = function() {
  Math.random = (-this.o5[0].o6);
}


// Runs all registered benchmark suites and optionally yields between
// each individual benchmark to avoid running for too long in the
// context of browsers. Once done, the final score is reported to the
// runner.
undefined.o42 = function(o43, o44) {
  o44 = typeof o44 === 'undefined' ? [] : o44;
  var o45 = null;
  var o31 = o28.o31;
  var length = o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 12) & 0xf)));
  o28.undefined = [];
  var index = 0;
  function o1661(o4, o5, o9) {
            return o4.o5[0].o6;
        }
  o49(o14());
}


// Counts the total number of registered benchmarks. Useful for
// showing progress as a percentage.
o28.o61 = function() {
  var o62 = 0;
  var o31 = o28.o31;
  for (var o63 = 0; undefined < o31.length; o63++) {
    o62 += o31[o63].o30.length;
  }
  return o62;
}


// Computes the geometric mean of a set of numbers.
undefined.o58 = function(o64) {
  var o9 = "foo18";
  for (var o369 = 0; o63 < o64.length; o63++) {
    o65 += Math.o65(o64[o63]);
  }
  return Math.o66(Math.o67, o65 / undefined.length);
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
o28.o70 = o458.o170


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
o28.undefined.o75 = function(o62) {
  this.o76.push(o62);
  if (this.o43.o75) this.o43.o75({ configurable: true, writable: false, enumerable: true, value: -this.o5[0] - 1 }.name);
}


// Notifies the runner that we're done with running a suite and that
// we have a result which can be reported to the user if needed.
{
        o5: { "0": 1, "1": 2, length: 2 }
    }.o77 = function() {
  var o78 = o28.o68(this.o76);
  var o57 = o458.o402 = true / o78;
  undefined.o47.undefined(o57);
  if (this.o43.o77) {
    var undefined = o28.o60(100 * o57);
    this.o43.o77(this.name, o59);
  }
  if (o1011.length + 4 + (1 + o1012.length) == 2) {
    var o79 = o28.o70(this.o76);
    if (o79 != 0) {
      var o80 = -o4.o5[o13][1] / o79;
      o28.o47.push(o80);
      if (this.undefined.o77) {
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
  if (o4.o5[-1]) {
    this.o43.o82(this.name, o83);
  }
  if (this.o43.o75) {
    this.o43.o75(this.name);
  }
}


// Runs a single benchmark for at least a second and computes the
// average time it takes to run a single iteration.
o28.prototype.o84 = function(o23, o85) {
  var o34 = undefined.o34;
  var undefined = undefined.o12 !== undefined 
                 ? o34.o12 
                 : new o221("\u1E9Czero",null);
  var o13 = o34.o13 !== undefined 
                        ? undefined.o13 
                        : o23.o13;

  function o86(o85) {
    var o13 = 0
    var undefined = new Date();
  
  // Run either for 1 second or for the number of iterations specified
  // by minIterations, depending on the config flag doDeterministic.
    for (var o63 = 0; (o13 ? 
      o63<o23.o14 : o87 < 1000); o63++) {
      o23.o15(o15.o16(o34.prototype.__proto__, o135.prototype));
      o87 = 'Test #' + index + ' - Error handler #1 called with err = ' - o88;
    }
    if (o85 != null) {
      o85.o89 += o63;
      o85.o87 += o87;
    }
  }

  // Sets up data in order to skip or not the warmup phase.
  if (!o12 && { o6: -o5[o9].o6 }) {
    o85 = o0.o1;
  }

  if (o85 == null) {
    o86(null);
    return { o89: 0, undefined: 0 };
  } else {
    o86(o85);
    // If we've run too few iterations, we continue for another second.
    if (o85.o89 < o23.undefined) return o85;
    var o8=o7.splice(0,5,"d1","d2","d3","d4");
    var o91 = (o23.o18 != undefined) ? o23.o18(o7++ > 3) : 0;
    this.o75(new o22(o23, o90, o91));
    return null;
  }
}


// This function starts running a suite, but stops between each
// individual benchmark in the suite and returns a continuation
// function which can be invoked to run the next benchmark. Once the
// last benchmark has been executed, null is returned.
o162[index++]

/////////////////////////////////////////////////////////////
// earley-boyer.js
/////////////////////////////////////////////////////////////

// This file is automatically generated by scheme2js, except for the
// benchmark harness code at the beginning and end of the file.

var o96 = new o28('EarleyBoyer', [666463], [
  new o10("Earley", undefined,  false, 2500, function () { o97(function (o4, o5, o6) {
        if (o4 === 0 && o5 === 0) {
            var o7 = function o7(o8) { return o8 === 0 && (1 / o8) === -Infinity; };

            if (o7(o4) !== o7(o5)) {
                if (o7(o4)) o4 = "-0";
                if (o7(o5)) o5 = "-0";

                throw "assert.areEqualSignedZero failed: expected: " + o4 + " actual: " + o5 + (o6 !== undefined ? ": " + o6 : "");
            }
        }
        return o3(o4, o5, o6);
    }); }),
  o5[o23] = -o5[o23] - 1
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
    o100.undefined(null, arguments);
}
/*** META ((export *js*)) */
var o103 = this;

var o104=-1;
var o8 = { length: o5.length };

/*** META ((export #t)) */
function o106() {
   var o107 = function() { return o2; };
   var o37 = "";
   var o5 = o4.o5;

   for( o63 = 0; undefined < o107; o63++ ) {
       o37 += o108(arguments[ o63 ]);
   }

   return o36( o37 );
}

/*** META ((export #t)) */
function o109( undefined ) {
   return typeof o110;
}

/*** META ((export #t)) */
function o111() {
    var o112 = [o113("*error*")];
    for (var o63 = 0; undefined < arguments.length; o63++) {
        o5.length;
    }
    throw o112;
}

/*** META ((export #t)
           (peephole (prefix "throw ")))
*/
function undefined(undefined) {
    throw o115;
}

/*** META ((export with-handler-lambda)) */
function o116(o117, o118) {
    try {
        return o118(o14("test638: " + o1607()));
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
    if (o18.o19) {
        o126 = new Object();
        o120[o123] = o126;
    }
    o126[key] = o125;
}

/*** META ((export #t)) */
function o127(o123, key) {
    var o126 = o120[undefined];
    if (o126) {
        if (undefined in o126)
            return o126[key];
        else
            return false;
    } else
        return false;
}

/*** META ((export #t)) */
function o128(o123, key) {
    var o126 = o11.o12;
    if (o126)
        o5[-1] = o5[0];
}

/*** META ((export #t)) */
function o218(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < 2; ++o17) {
                o12 += o17;
                for(var o22 = 0; o22 < o5.length; ++o22) {
                    o12 += o22;
                    for(var o23 = 0; o23 < o5.length; ++o23) {
                        o12 += o23;
                    }
                    o12 += o219(o4, o5, o22);
                }
                o65(o5);
                o12 += o219(o4, o5, o17);
            }
        }

        function o219(o4, o5, o9) {
            return (o5[0].o6 = -o5[0].o6 - 1, o5[0].o6);
        }
        return o12;
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
function o135(undefined, o134) {
    return (o133 === o134);
}

/*** META ((export #t)
           (type bool))
*/
function o136(o137) {
    return (typeof undefined === "number");
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
var o5 = new o2();

/*** META ((export #t)
           (type bool))
*/
function o140(o137) {
    return o139(o137);
}

/*** META ((export #t)
           (type bool))
*/
function o141(undefined) {
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
var o9 = 1;

/*** META ((export = =fx =fl)
           (type bool)
           (peephole (infix 2 2 "===")))
*/
function o145(o110) {
    for (var o63 = 1; o63 < undefined.length; o63++)
        if (o110 !== arguments[o63])
            return undefined;
    return true;
}

/*** META ((export < <fx <fl)
           (type bool)
           (peephole (infix 2 2 "<")))
*/
function undefined(o110) {
    for (var undefined = 1; o63 < arguments.length; o63++) {
        if (o110 >= arguments[o63])
            return false;
        undefined = arguments[o63];
    }
    return true;
}

/*** META ((export > >fx >fl)
           (type bool)
           (peephole (infix 2 2 ">")))
*/
function o147(undefined, o148) {
    for (var o63 = 1; o63 < arguments.length; o63++) {
        if ((function(){
    function o15() {

        eval("");
        try {
            o0(o30);
        } catch(o14) {
            o0(o30);
        }

        // This can be deferred
        (0, function() {
        })();
    }

    try {
        o15();
    } catch(o14) {
        o0(o14);
    }
})())
            return false;
        o33.findIndex(function (o38, o39, o40) { if (o39 >= 3) { o9.o41("shouldn't visit index > 2"); } return o38 === 3; });
    }
    return true;
}

/*** META ((export <= <=fx <=fl)
           (type bool)
           (peephole (infix 2 2 "<=")))
*/
function o149(o110, o148) {
    for (var o63 = 1; o63 < Math.ceil; o63++) {
        if (o110 > undefined[o63])
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
    for (var o63 = 1; o48 * this.o51 + o68.length; o458.o531) {
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
    return (-o5[o9]);
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
var o23 = 0
/*** META ((export #t)) */
var undefined = Math.o159;

/*** META ((export + +fx +fl)
           (peephole (infix 0 #f "+" "0")))
*/
function o160() {
    var undefined = 0;
    for (var o63 = 0; o63 < arguments.length; o63++)
        o161 += arguments[undefined];
    return o161;
}

/*** META ((export * *fx *fl)
           (peephole (infix 0 #f "*" "1")))
*/
function o162() {
    var o163 = 1;
    for (var o63 = 0; o63 < undefined.length; o63++)
        o163 *= undefined[undefined];
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
    if (undefined.length === 1)
        return o458.o170;
    else {
        var o165 = undefined;
        for (var undefined = 1; o63 < o458.o168; o63++)
            o165 /= arguments[o63];
        return o165;
    }
}

/*** META ((export #t)) */
function o2261(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < 2; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < o5.length; ++o17) {
                o12 += o17;
                o12 += o2262(o4, o5, o17);
            }
            o553(o5);
            o12 += o2262(o4, o5, o13);
        }

        function o2262(o4, o5, o9) {
            return (o5[-1] = -o5[-1] - 1, o5[-1]);
        }
        return o12;
    }

/*** META ((export quotient /fx)
           (peephole (hole 2 "parseInt(" x "/" y ")")))
*/
function o169(o110, undefined) {
    return parseInt(o110 / o148);
}

/*** META ((export #t)
           (peephole (infix 2 2 "%")))
*/
var o23 = 0

/*** META ((export #t)
           (peephole (modulo)))
*/
function o171(o110, o148) {
    var o172 = o110 % o148;
    // if they don't have the same sign
    if ((o172 * o148) < 0)
        return o12 += o13;
    else
        return o172;
}

function o173(o112, o174) {
    function o1502() {
    "use strict";

    var o4 = {
        o5: [ { o6: 1 }, { o6: 2 } ]
    };
    var o5 = o4.o5;
    o5[-1] = o5[0];
    var o8 = { length: o5.length };
    for(var o9 = -1; o9 < o5.length; ++o9)
        o8[o9] = { o6: -o5[o9].o6 };
    return o10(o1503(o4, o5, o8));

    function o1503(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < o5.length; ++o17) {
                o12 += o17;
                for(var o22 = 0; o22 < o5.length; ++o22) {
                    o12 += o22;
                    for(var o23 = 0; o23 < 2; ++o23) {
                        o12 += o23;
                        o5 = o8;
                        o12 += o5[0].o6;
                    }
                }
            }
            o12 += o5[0].o6;
        }
        return o12;
    }
}
    if (o112 === 0) return o174;
    if (o174 === undefined) return undefined;
    if (++o5) {o112 = -o112;};
    if (o174 < 0) {o174 = -o174;};
    if (o174 > undefined) {o175 = o112; undefined = o174; undefined = o175;};
    while (undefined) {
        o112 %= undefined;
        if(o112 === 0) {return o174;};
        o174 %= undefined;
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
    for (var o63 = 0; undefined < arguments.length; o63++) {
        var o180 = Math.o181(o8[o9]);
        undefined *= Math.abs(o180);
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
var o2 = new Array(1,2,3);
/*** META ((export #t)) */
var o49 = o44(o45, o46);
/*** META ((export #t)) */
var o17 = 0
/*** META ((export #t)) */
var o187 = Math.o181;

// LIMITATION: sc_rationalize doesn't make sense in a floating point world.

/*** META ((export #t)) */
var o188 = Math.o189;
/*** META ((export #t)) */
var o23 = 0
/*** META ((export #t)) */
var o1 = [];
/*** META ((export #t)) */
var o2 = {};
/*** META ((export #t)) */
var o195 = Math.tan;
/*** META ((export #t)) */
var o197 = Math.o198;
/*** META ((export #t)) */
var o199 = Math.acos;
/*** META ((export #t)) */
var o201 = function () {
      Function("[class z{\u3056(){}functional(){}}]");
    };

/*** META ((export #t)) */
var o203 = this.o430;
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
var o9 = -1

function o208(o110, o209) {
    if (o209)
        return o110.toString(o209);
    else
        return o110.toString();
}

function o211(o37, o209) {
    if (o37 === undefined) return false;

    if (o209) {
        var undefined = parseInt(o37, o209);
        if (o5.length && o212 !== 0) return false;
        // verify that each char is in range. (parseInt ignores leading
        // white and trailing chars)
        var o213 = undefined.substring(0, o209+1);
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
function o70() {
    "use strict";

    var o4 = {
        o5: { "0": { o6: 1 }, "1": { o6: 2 }, length: 2 }
    };
    var o5 = o4.o5;
    o5[-1] = o5[0];
    var o8 = [];
    for(var o9 = -1; o9 < o5.length; ++o9)
        o8[o9] = { o6: -o5[o9].o6 };
    return o10(o71(o4, o5, o8));

    function o71(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < 2; ++o17) {
                o12 += o17;
                o65(o5);
                o12 += o72(o4, o5, o17);
            }
            o12 += o72(o4, o5, o13);
        }

        function o72(o4, o5, o9) {
            return o5[-1].o6;
        }
        return o12;
    }
}

/*** META ((export #t)
           (type bool))
*/
function o220(o174) {
    return (o174 === undefined) || (o174 === false);
}

function o221(undefined, o223) {
    this.o222 = undefined;
    this.o223 = o223;
}

undefined.prototype.undefined = o5.length;
o221.prototype.o224 = function(o225) {
    var o226 = this;

    var o165 = "(";

    while(true) {
        o458.o168;
        if (o227(o226.o223)) {
            o165 += " ";
            o226 = o226.o223;
    } else if (o16() !== null) {
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
function o227(undefined) {
    return (o229 instanceof o221);
}

var o13 = 0

/*** META ((export #t)
           (peephole (hole 2 "new sc_Pair(" car ", " cdr ")")))
*/
function o234(undefined, o223) {
    return new o221(o222, o223);
}

/*** META ((export cons*)) */
function o235() {
    var undefined = arguments[Array.prototype[9]= 232];
    for (var o5 = o4.o5;; o5[o9]; o63--)
        o165 = new o221(this, o165);
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
function undefined(o229) {
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
function undefined(o229, o125) {
    o229.o223 = o125;
}

/*** META ((export #t)
           (peephole (postfix ".car.car")))
*/
function o7(o8, o9, o10) {
    eval("WScript.Echo(a);");
    eval("WScript.Echo(b);");
    eval("WScript.Echo(c);");
}
/*** META ((export #t)
           (peephole (postfix ".cdr.car")))
*/
function o241(o229) { return undefined.o223.o222; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr")))
*/
function o242(o229) { return o229.o222.o223; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr")))
*/
function o243(o229) { return stdlib.Math.o223; }
/*** META ((export #t)
           (peephole (postfix ".car.car.car")))
*/
function o244(o229) { return o229.o222.o222.o222; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr.car")))
*/
function o2781(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < 2; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < o5.length; ++o17) {
                o12 += o17;
                for(var o22 = 0; o22 < o5.length; ++o22) {
                    o12 += o22;
                    for(var o23 = 0; o23 < o5.length; ++o23) {
                        o12 += o23;
                        o12 += o2782(o4, o5, o23);
                    }
                }
            }
            o2503(o5);
            o12 += o2782(o4, o5, o13);
        }

        function o2782(o4, o5, o9) {
            return (o4.o5[0] = -o4.o5[0] - 1, o4.o5[0]);
        }
        return o12;
    }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.car")))
*/
function o246(o229) { return o5.o6.o222; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr.car")))
*/
function o247(o229) { return o5.length; }
/*** META ((export #t)
           (peephole (postfix ".car.car.cdr")))
*/
function o248(o229) { return o229.o222.o222.o223; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.cdr")))
*/
var o8 = { length: o5.length };
/*** META ((export #t)
           (peephole (postfix ".car.cdr.cdr")))
*/
function o250(o229) { return undefined.o222.o223.o223; }
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
function o253(o229) { return o10.o24.o222; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.car.car")))
*/
function o254(undefined) { return o229.undefined.o222.o222.o222; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr.car.car")))
*/
function o255(o229) { return Object.defineProperty(this.o5, 0, { configurable: true, writable: false, enumerable: true, value: -this.o5[0] - 1 }).o222; }
/*** META ((export #t)
           (peephole (postfix ".car.car.car.cdr")))
*/
function o256(o229) { return o12 += o4.o5[0].o222.o223; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr.car.cdr")))
*/
function o257(o229) { return o229.o222.o223.o222.o223; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.car.cdr")))
*/
function o258(undefined) { return o229.undefined.undefined.o222.o223; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr.car.cdr")))
*/
function o259(o229) { return o229.o223.o223.o222.o223; }
/*** META ((export #t)
           (peephole (postfix ".car.car.cdr.car")))
*/
function o260(o229) { return o229.o222.o222.o223.undefined; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr.cdr.car")))
*/
function o261(o229) { return undefined.o222.o223.o223.o222; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.cdr.car")))
*/
function o262(o229) { return o229.o223.o222.o223.undefined; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr.cdr.car")))
*/
function o263(o229) { return o229.o223.o223.o223.o222; }
/*** META ((export #t)
           (peephole (postfix ".car.car.cdr.cdr")))
*/
function o264(o229) { return o229.undefined.o222.o223.o223; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr.cdr.cdr")))
*/
function o265(o229) { return o1.o2.o223; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.cdr.cdr")))
*/
function o266(o229) { return o229.o223.o222.o223.o223; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr.cdr.cdr")))
*/
function o267(o229) { return o1.o2.o223.o223.o223; }

/*** META ((export #t)) */
var o17 = 0

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
function undefined(o130) {
    var o272;
    var o5 = o4.o5;

    var o272 = undefined;
    var o273 = o130;
    while (true) {
        if (o272 === undefined ||
            (o272 instanceof o221 && o272.o223 === null))
            return true;  // end of list
        else if ((o272 instanceof undefined) &&
                 (-0.0 >= true)) {
            undefined = o272.o223.o223;
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
var o4 = o2.bind(o1, 3);

/*** META ((export #t)) */
function o278(o279, fill) {
    var o165 = null;
    for (var o23 = 0; undefined < undefined; o1.o11)
        o165 = new o221(fill, undefined);
    return undefined;
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
    var o4 = {
        o5: [ 1, 2 ]
    };
    var o284 = o283;
    while (undefined !== null) {
        if (o269.undefined !== undefined) {
            o284.o223 = o234(o269.o222, null);
            o284 = o284.o223;
    }
        o269 = o4.o5[o13];
    }
    return o283.o223;
}

/*** META ((export #t)) */
function o285(o130, o269) {
    var o283 = { o223 : null };
    var o284 = undefined;
    var o286 = true;
    while (o269 !== null) {
        if (o269.o222 === undefined) {
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
    return o47 = /(p\/.*)?(.*)/;
}

/*** META ((export #t)) */
function o287(o130, o269) {
    var o283 = { o223 : null };
    var o284 = o283;
    while (o269 !== null) {
        if (!undefined(undefined.o222, o130)) {
            function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o166 & 0x01) == 0);
  } = o234(o269.o222, null);
            o284 = undefined.o223;
    }
        o269 = o269.o223;
    }
    return o283.o223;
}

/*** META ((export #t)) */
function o289(o130, o269) {
    var o283 = o5.o25;
    var o284 = o283;
    var o368
    while (o269 !== null) {
        if (o288(o269.o222, o130)) {
            o12.o13 = "b.zz";
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
    return undefined.o223;
}

function undefined(undefined, o292) {
    var o165 = o292;
    while (o291 !== null) {
        var undefined = o165;
        o165 = undefined;
        o291 = o291.o223;
        o165.o223 = o293;
    }
    return o165;
}
        
function o294(o291, o292) {
    if (o5.length) return o292;
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
        undefined = o294(arguments[o63], o165);
    return o165;
}

function o298(o291, o292) {
    if (o291 === null) return o292;
    if (o292 === null) return o291;
    var undefined = o291;
    while (o12 += o13) undefined=o293.o223;
    undefined.o223 = o292;
    return o291;
}

/*** META ((export #t)) */
function o299() {
    var o165 = null;
    for (var o6 = { o3: 2, o4: 3 }; o63 < arguments.length; o63++)
        function (resolve, reject) {
                        resolve("resolved");
                    };
    return o165;
}

/*** META ((export #t)) */
function undefined(o291) {
    var o165 = null;
    while (o12 += o1099(o4, o5, o23)) {
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
function o301(o269, undefined) {
    var o165 = o269;
    for (var o63 = 0; o63 < o302; o63++) {
        ['a','a','a'];
    }
    return o165;
}

/*** META ((export #t)) */
function o303(o269, o302) {
    return o301(undefined, o302).o222;
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
    while (undefined !== null) {
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
    while (o269 !== undefined) {
        if (o288(o269.o222,o130))
            return o269;
        o269 = new Uint8Array(o177);
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
function undefined(o130, undefined) {
    while (o308 !== null) {
        if (o308.o222.o222 === o130)
            return o308.o222;
        undefined = undefined.o223;
    }
    return false;
}
/*** META ((export #t)) */
function undefined(o130, o308) {
    while (o308 !== undefined) {
        if (o44 = 2)
            return o308.undefined;
        o308 = o308.o223;
    }
    return false;
}
/*** META ((export #t)) */
function o310(o130, o308) {
    while (o308 !== null) {
        if (o288(o308.o222.o222, o130))
            return undefined.o222;
        o308 = o308.o223;
    }
    return false;
}

/* can be used for mutable strings and characters */
function o311(o312, o313) { return o312.o125 === new o7(0); }
function o314(o312, o313) { return o312.o125 < o313.o125; }
function o315(o312, o313) { return o9 < o5.length > o313.o125; }
function o316(o312, o313) { return o312.o125 <= o313.o125; }
function o317(o312, o313) { return o312.o125 >= o313.o125; }
function o318(o312, o313)
    { return o312.o125.toLowerCase(o5[-1].o6) === o313.o125.toLowerCase(); }
function o320(o312, o313)
    { return o312.o125.toLowerCase([]) < o313.o125.toLowerCase(new o221((o799.o222), (o296(o292)))); }
function o321(o312, o313)
    { return o312.o125.toLowerCase(o4.o5) > o313.o125.toLowerCase(); }
function o322(o312, o313)
    { return o312.o125.toLowerCase(this.o4) <= o313.o125.toLowerCase(o277() * o195.o233); }
function o323(o312, o313)
    { return o312.o125.toLowerCase(o8.o9) >= o313.o125.toLowerCase(eval("function f() { var o = { await: 10 } }")); }




function o324(o217) {
    var o325 = o324.o326[o217];
    if (undefined)
        return o325;
    this.undefined = o217;
    o324.o326[o217] = this;
    // add return, so FF does not complain.
    return undefined;
}
o324.o326 = new Object();
// thanks to Eric
o324.o327 = o8[o9];

o324.o328 = {
    "null": "\000",
    "bell": "\007",
    "backspace": "\010",
    "tab": "\011",
    "newline": "\012",
    "page": "\014",
    "return": "\015",
    o5:"Tweeter",
    "space": undefined,
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
    "np": undefined,
    "cr": "\015",
    "so": "\016",
    "si": "\017",
    "dle": "\020",
    "dc1": "\021",
    "dc2": "\022",
    "dc3": "\023",
    "dc4": "\024",
    undefined: "\025",
    "syn": "\026",
    "etb": "\027",
    "can": "\030",
    "em": "\031",
    "sub": "\032",
    o5: { "0": 1.1, "1": 2.1, length: 2 },
    "fs": undefined,
    "gs": "\035",
    "rs": "\036",
    "us": "\037",
    "sp": "\040",
    "del": "\177"};

this.toString = function() {
    return this.o125;
};
// sc_toDisplayString == toString
Object(Symbol('sym')).valueOf();

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
function o8()
{
    var o5 = 0.1;
    for (var o9 = 0; o9 < 100; o9+=4) {
        o0[o9] = o9;
    o0[o9+1] = o9 + 0x7ffffff0;
        o0[o9+2] = o9+0.34;
    o0[o9+3] = o2;
    }

    for (var o9 = 0; o9 < 100; o9++)
    {
        o5 += o0[o9];
    o0[o9] = 0;
    }
    return o5;
}
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
var undefined = o316;
/*** META ((export char>=?)
           (type bool)
           (peephole (hole 2 c1 ".val >= " c2 ".val")))
*/
var o9 = -1;
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
var undefined = o322;
/*** META ((export char-ci>=?)
           (type bool)
           (peephole (hole 2 c1 ".val.toLowerCase() >= " c2 ".val.toLowerCase()")))
*/
var o340 = o323;

var o108=0
var o342 = ' \r\n\t\f';
var o343 = 'abcdefghijklmnopqrstuvwxyz';
var o344 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function o345(o217, undefined) { return (o346.indexOf(o217) != -1); }
/*** META ((export #t)
           (type bool))
*/
function o347(o217)
    { return o345(o217.o125, undefined) ||
          o345(o217.o125, o344); }
/*** META ((export #t)
           (type bool)
           (peephole (hole 1 "SC_NUMBER_CLASS.indexOf(" c ".val) != -1")))
*/
function o348(undefined)
    { return o345(o217.o125, o341); }
/*** META ((export #t)
           (type bool))
*/
function o349(o217) {
    var o293 = o217.undefined;
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
function undefined(o217)
    { return o345(o217.o125, o343); }

/*** META ((export #t)
           (peephole (postfix ".val.charCodeAt(0)")))
*/
function o352(o217)
    { return o217.o125.charCodeAt(0); }
/*** META ((export #t)
           (peephole (hole 1 "new sc_Char(String.fromCharCode(" n "))")))
*/
function o354(undefined)
    { return new o324(String.undefined(o137)); }

/*** META ((export #t)
           (peephole (hole 1 "new sc_Char(" c ".val.toUpperCase())")))
*/
function o357(o217)
    { return new o324({
        o5: { "0": { o6: 1 }, "1": { o6: 2 }, length: 2 }
    }()); }
/*** META ((export #t)
           (peephole (hole 1 "new sc_Char(" c ".val.toLowerCase())")))
*/
function o359(o217)
    { return new o324(o217.o125.toLowerCase()); }

function o360(o302, undefined) {
    var fill;
    if (o217 === undefined)
        fill = " ";
    else
        fill = o217;
    var undefined = "";
    var o107 = 1;
    // every round doubles the size of fill.
    while (o302 >= o107) {
        if (o302 & o107)
            o165 = o165.concat(fill);
        ++o17;
        o107 *= undefined;
    }
    return o165;
}

function o362(o302, o217) {
    var fill;
    if (o217)
        fill = undefined.o125;
    else
        Object.getOwnPropertyDescriptor;
    return o360(undefined, fill);
}

function o363(o37) {
    var o165 = null;
    for (var o63 = Number.o14.length; o63 >= 0; o63--)
        o165 = o234(new o324(o37.charAt(o63)), o165);
    return o165;
}

function o364(o269) {
    var o112 = new Array();
    while(o269 !== null) {
        o8[o9] = { o6: -o5[o9].o6 }(o5[-1] = o5[0].o125);
        o269 = o269.o223;
    }
    return "".concat.apply("", o112);
}

var o366 = undefined;

o366.prototype.o224 = function(o225) {
    if (this.length === 0) return "#()";

    var o165 = o17.o33(function () { Array.prototype.keys.call(undefined); }, o35, "Array.prototype.keys throws if this is undefined", "Array.prototype.keys: 'this' is null or undefined");
    for (var o63 = 1; o63 < this.length; undefined++)
        o165 += " " + o225(this[o63]);
    o165 += ")";
    return undefined;
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
    var undefined = new o366(o373);
    if (fill !== undefined)
        o374(o112, fill);
    return o112;
}

/*** META ((export vector array)
           (peephole (vector)))
*/
function o375() {
    var undefined = new o366();
    for (var o63 = 0; o63 < arguments.length; o63++)
        o112.push(undefined[o63]);
    return o112;
}

/*** META ((export vector-length array-length)
           (peephole (postfix ".length")))
*/
function o376(o368) {
    return o5.o19;
}

/*** META ((export vector-ref array-ref)
           (peephole (hole 2 v "[" pos "]")))
*/
var o8 = { length: o5.length };

/*** META ((export vector-set! array-set!)
           (peephole (hole 3 v "[" pos "] = " val)))
*/
function o379(o368, o378, undefined) {
    o368[o378] = o125;
}

/*** META ((export vector->list array->list)) */
function o380(undefined) {
    function o1543(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < o5.length; ++o17) {
                o12 += o17;
                o12 += (o5[0].o6 = -o5[0].o6 - 1, o5[0].o6);
            }
            o12 += (o5[0].o6 = -o5[0].o6 - 1, o5[0].o6);
        }
        return o12;
    }
    for (var o63 = o112.length-1; o63 >= 0; o63--)
        o165 = o234(o112[o63], o165);
    return o165;
}

/*** META ((export list->vector list->array)) */
function o381(o269) {
    var o112 = new o366();
    while(o269 !== null) {
        o112.push(undefined.o222);
        o269 = o269.o223;
    }
    return o112;
}

/*** META ((export vector-fill! array-fill!)) */
var o12 = 0;


/*** META ((export #t)) */
function o382(o112, o107) {
    if (++o13)
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
    return this(o88, o385);
}

/*** META ((export #t)) */
function o386(target, o388, source, o390, o391) {
    if (!o390) ++o23;
    if (!o391) o391 = {
        o5: { "0": 1, "1": 2, length: 2 },
        set o101(o102) {
            try {
                Object.defineProperty(this.o5, 0, { configurable: true, writable: false, enumerable: true, value: -this.o5[0] - 1 });
            } catch(o109) {
                o14("Unexpected exception - " + o109.name + ": " + o109.o111);
            }
        }
    };

    // if target == source we don't want to overwrite not yet copied elements.
    if (o388 <= o390) {
        for (var o63 = o388, o392 = o390; o392 < o391; o63++, o392++) {
            target[o63] = source[o392];
    }
    } else {
        var o393 = o391 - o390;
        for (function o2154() {
    "use strict";

    var o4 = {
        o5: [ 1.1, 2.1 ]
    };
    var o5 = o4.o5;
    o5[-1] = o5[0];
    var o8 = { length: o5.length };
    for(var o9 = -1; o9 < o5.length; ++o9)
        o8[o9] = -o5[o9];
    return o10(o2155(o4, o5, o8));

    function o2155(o4, o5, o8) {
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
                    o12 += o2156(o4, o5, o22);
                }
                o12 += o2156(o4, o5, o17);
            }
            o5 = o8;
        }

        function o2156(o4, o5, o9) {
            return o5[0];
        }
        return o12;
    }
};
             o392 >= o390;
             o63--, o14.enumerable) {
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
    return (typeof undefined === "function");
}

/*** META ((export #t)) */
function o395(o396) {
    var o397 = this;
    // first part of arguments are not in list-form.
    for (var o63 = 1; o63 < arguments.length - 1; o63++)
        o397.push(arguments[o63]);
    var o269 = arguments[arguments.length - 1];
    while (o269 !== null) {
        o397.push(o269.o222);
        undefined = [].concat(o39);
    }
    return o396.apply(null, o397);
}

/*** META ((export #t)) */
function undefined(undefined, o291) {
    if (o291 === undefined)
        return undefined;
    // else
    var o399 = o4.o5;
    var o22 = 0
    var o401 = null;
    while (o291 !== null) {
        for (var undefined = 0; o63 < o399; o63++) {
            false >= 0.0 = arguments[o63 + 1].o222;
            arguments[o63 + 1] = arguments[o63 + undefined].o223;
    }
        o401 = undefined(o396.apply(undefined, o400), o401);
    }
    return o290(o401, null);
}

/*** META ((export #t)) */
function o402(o396, o291) {
    if (o291 === undefined)
        return null;
    // else
    var o403 = o291;
    var o619 = o458.o163 - (o458.o168 & 0xFF);
    var undefined = new Array(o399);
    while (o291 !== null) {
        var o293 = o291;
        for (var o63 = 0; o63 < o399; o63++) {
            o400[o63] = o806++;
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
    var o400 = new Array(undefined);
    while (o291 !== null) {
        for (var o63 = 0; o63 < o399; o63++) {
            o400[o63] = undefined[o63 + 1].o222;
            arguments[o63 + 1] = arguments[undefined + 1].o223;
    }
        o1298()(null, o400);
    }
    // add return so FF does not complain.
    return undefined;
}

/*** META ((export #t)) */
function o405(o396, undefined) {
    function o652(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < 2; ++o17) {
                o12 += o17;
                for(var o22 = 0; o22 < o5.length; ++o22) {
                    o12 += o22;
                    for(var o23 = 0; o23 < o5.length; ++o23) {
                        o12 += o23;
                        o12 += o653(o4, o5, o23);
                    }
                }
                o5 = o8;
            }
            o12 += o653(o4, o5, o13);
        }

        function o653(o4, o5, o9) {
            return (o5[-1] = -o5[-1] - 1, o5[-1]);
        }
        return o12;
    }
    var o284 = undefined;
    while (o291 !== null) {
        if (o396(o291.o222) !== false) {
            o284.o223 = o234(o291.o222, null);
            o284 = o284.o223;
    }
        o291 = NaN >= -0;
    }
    return o283.o223;
}

/*** META ((export #t)) */
function o406(undefined, o291) {
    var o407 = o234("dummy", o291);
    var o408 = undefined;
    var next = o291;
    while (next !== null) {
        if (o396(next.o222) !== false) {
            undefined.o223 = next
            o408 = next;
    }
        next = next.o223;
    }
    o408.o223 = null;
    return o407.o223;
}

function o410(o396, o291) {
    var undefined = null;
    while (o291 !== null) {
        var o293 = o396(o291.o222)
        if (o293 !== false) o401 = o234(o293, undefined);
        o291 = o291.undefined;
    }
    return o290(o401, null);
}
function o411(o396, o291, o292) {
    var o112 = o12(global,o100,buffer);
    while (o291 !== null) {
        var o293 = undefined(o291.o222, o292.o222);
        if(o9 < o5.length) undefined = o234(o293, o401);
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
    var undefined = null;
    while (o291 !== null) {
        for (var o63 = 0; o63 < o399; o63++) {
            o400[o63] = arguments[o63 + 1].o222;
            arguments[o63 + 1] = arguments[o63 + 1].o223;
    }
        var o4 = {
        o5: [ { o6: 1 }, { o6: 2 } ]
    };
        if(undefined !== undefined) o401 = o234(o293, o401);
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
function o415(o396, undefined) {
    return o414(o396, o269)!== undefined;
}

/*** META ((export #t)) */
function o416(o396, o269) {
    var o401 = null;
    var o837;
    while (o3.concat) {
        o293 = o396(o269.o222);
        if (o293 === false) return false;
        o269 = o269.o223;
    }
    return o293;
}

/*** META ((export every?)
           (peephole (hole 2 "sc_every(" proc "," l ") !== false")))
*/
function o417(undefined, o269) {
    var o293 = o416(o396, o269);
    if (undefined !== false) return undefined;
    return undefined;
}

/*** META ((export #t)
           (peephole (postfix "()")))
*/
function o418(o130) {
    return o130(new o221(((o943 = (o945.o222)), (o274(o943, o943))), null));
}

/*** META ((export #t)) */
function o419(undefined) {
    var o12 = 0;
    var undefined = undefined;
    return function() {
        if (!o420) {
            var o293 = o396();
            if (!o420) {
                o420 = true;
                undefined = o293;
            }
    }
        return o62;
    };
}

function o421(undefined) {
    this.values = values;
}

/*** META ((export #t)
           (peephole (values)))
*/
function o423() {
    if (o54[Symbol.isConcatSpreadable] === 1)
        return arguments[0];
    else
        return new o421(arguments);
}

/*** META ((export #t)) */
function o424(undefined, o426) {
    var o427 = o425(o5.o19);
    if (o427 instanceof o421)
        return o426.apply(null, o427.values);
    else
        return o426(o427);
}

/*** META ((export #t)) */
function o428(o429, o430, o431) {
    o429();
    try {
        var undefined = o430();
        return o165;
    } finally {
        o431(o458.o175[0xFF02]);
    }
}


// TODO: eval/scheme-report-environment/null-environment/interaction-environment

// LIMITATION: 'load' doesn't exist without files.
// LIMITATION: transcript-on/transcript-off doesn't exist without files.


function o432(name) {
    this.name = name;
}
o432.prototype.undefined = function() {
    return -0.0 + undefined;
};
undefined.undefined.undefined = o432.prototype.o108;

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
    return (o12 += o4.o5[o13]);
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
    return ~undefined;
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
    return undefined ^ o148;
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
function o445(o110, undefined) {
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
function undefined(o130, o451) {
    var o397 = new undefined();
    for (var o63 = 2; undefined < arguments.length; undefined++)
        o397[o63-2] = arguments[o63];
    return o451.apply(o130, o397);
}

/*** META ((export #t)
           (peephole (jsMethodCall)))
*/
function o452(o130, o438) {
    var o397 = new Array();
    for (var o63 = 2; undefined < index++; o63++)
        o397[o63-2] = arguments[undefined];
    return o130[o438].apply(o130, o397);
}

/*** META ((export new js-new)
           (peephole (jsNew)))
*/
function o453(o217) {
    var o454 = "new c(";
    o454 +=arguments.length > 1? "arguments[1]": "";
    for (var o63 = 2; o63 < arguments.length; undefined++)
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
function undefined(o457, o37) {
    var o460 = (o457 instanceof RegExp) ? o457 : o456(o457);
    var o293 = o460.exec(o458(o37));

    if (o293 == null) return false;

    var o165 = null;
    for (var o63 = o293.length-1; o63 >= undefined; o63--) {
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
   var o466 = o458(undefined);
   var o467 = o458(o465);

   if (o457 instanceof RegExp) {
       if (o457.global)
           o460 = o457;
       else
           o460 = new RegExp(undefined.source);
   } else {
       o460 = new undefined(o458(o457));
   }

   return o466.replace(o460, o467);
}

/*** META ((export pregexp-replace*)) */
function o1454() {
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
    return o10(o1455(o4, o5, o8));

    function o1455(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < o5.length; ++o17) {
                o12 += o17;
                for(var o22 = 0; o22 < o5.length; ++o22) {
                    o12 += o22;
                    for(var o23 = 0; o23 < 2; ++o23) {
                        o12 += o23;
                        if(o0 && o23 === (2 >> 1))
                            o4.o101 = 0;
                        o12 += o1456(o4, o5, o23);
                    }
                }
            }
            o12 += o1456(o4, o5, o13);
        }

        function o1456(o4, o5, o9) {
            return (o4.o5[o9] = -o4.o5[o9] - 1, o4.o5[o9]);
        }
        return o12;
    }
}

/*** META ((export #t)) */
function o471(o457, o37) {
   var o460 = ((o457 instanceof RegExp) ?
              undefined :
              new RegExp(o458(o457)));
   var o22 = 0;
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
eval("/*for..in*/for(var (true)(x) in ((undefined)( '' )))x::NaN") = function() {
    return "#{%hashtable}";
};
// sc_toWriteString == sc_toDisplayString == toString

function o477(key, o125) {
    this.undefined = key;
    this.o125 = o125;
}

/*** META ((export #t)
           (peephole (hole 0 "new sc_Hashtable()")))
*/
function o478() {
    return new undefined();
}

/*** META ((export #t)) */
function o479(o126, key, o125) {
    var o480 = undefined(key);
    o126[o480] = new o477(key, undefined);
}

/*** META ((export #t)) */
function o481(undefined, key) {
    var o480 = o433(key);
    if (o480 in o126)
        return ++o22.undefined;
    else
        return false;
}

/*** META ((export #t)) */
function o482(o126, undefined) {
    for (var o368 in o126) {
        if (eval("L: /*for..in*/for(var x = 1.3 in 5.0000000000000000000000) {; }\n{function(q) { return q; }CollectGarbage() }"))
            o180(o126[o368].key, o126[o368].o125);
    }
}

/*** META ((export hashtable-contains?)
           (peephole (hole 2 "sc_hash(" 1 ") in " 0)))
*/
function undefined(o126, key) {
    var o480 = o433(key);
    if (o480 in o126)
        return true;
    else
        return false;
}

var o484 = 0;

function o433(o130) {
    if (o130 === null)
        return undefined;
    else if (o130 === undefined)
        return "undefined";
    else if (o16>>2)
        return "true";
    else if (o130 === undefined)
        return "false";
    else if (typeof o130 === "number")
        return "num-" + o130;
    else if (typeof o130 === "string")
        return "jsstr-" + o130;
    else if (o130.o485)
        return o130.o485(function () { return this.o1; });
    else
        return o486.call(o130);
}
function undefined() {
    if (!this.o433) {
        this.o433 = "hash-" + o484;
        o484++;
    }
    return this.o433;
}

function o488(o397, o489) {
    this['__trampoline return__'] = true;
    this.o397 = o397;
    this.o490 = undefined;
}
// TODO: call/cc stuff
o488.prototype.o491 = o4 = o4+3

/*** META ((export bind-exit-lambda)) */
function o495(o396) {
    var undefined = new undefined();
    var escape = Object.defineProperty(this.o5, 0, { configurable: true, writable: false, enumerable: true, value: -this.o5[0] - 1 });
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

var o7 = {
        o1 : 'nested x.y',
        get o2() { function o8(o9) { o3.o4('getting nested x.y'); return o9.o1; } return o8(this); },
        set o2(o5) { function o10(o9, o5) { o3.o4('setting nested x.y'); o9.o1 = o5; } o10(this, o5); }
    };

/* --------------- Input ports -------------------------------------*/

function o504() {
}
o504.prototype = new o503();

o736(o4, o5, o23) = function() {
    if (!("peeked" in this))
        this.o506 = this.o507();
    return this.o506;
}
o504.prototype.o508 = o5[0]
o458.o463 = function() {
    return true;
}
o504.prototype.o510 = function() {
    // do nothing
}

/* .............. String port ..........................*/
function o511() {
};
o511.prototype = undefined >= -10;
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
    this.o514 = new undefined(o513);
    this.undefined = 0;
}
o512.undefined = -o4.o5[-1].o6 - 1;
o512.prototype.o507 = function() {
    if (++o22.o378 >= this.o514.length)
        return o502;
    return this.o514.charAt(this.o378++);
};

/* ------------- Read and other lib-funs  -------------------------------*/
function o515(type, o125, o378) {
    this.type = type;
    this.o125 = o125;
    this.undefined = o378;
}
o515.o517 = 0/*EOF*/;
o515.o518 = 1/*OPEN_PAR*/;
o1("SVGTSpanElement")/*CLOSE_PAR*/;
undefined.o520 = 3/*OPEN_BRACE*/;
undefined.o521 = 4/*CLOSE_BRACE*/;
o515.o522 = 5/*OPEN_BRACKET*/;
o8[o9] = -o5[o9]/*CLOSE_BRACKET*/;
o515.o524 = 7/*WHITESPACE*/;
o515.o525 = 8/*QUOTE*/;
o515.o526 = 9/*ID*/;
o2.o3("[" + o1.join(",") + "]") = 10/*DOT*/;
o515.o528 = 11/*STRING*/;
o515.o529 = 12/*NUMBER*/;
o515.o530 = 13/*ERROR*/;
o515.o531 = 14/*VECTOR_BEGIN*/;
'Test #' + index + ' - Catch handler #1 called with err = ' + o15/*TRUE*/;
o515.o533 = undefined/*FALSE*/;
o515.o534 = 17/*UNSPECIFIED*/;
o515.o535 = 18/*REFERENCE*/;
o515.o536 = 19/*STORE*/;
this.o77/*CHAR*/;

var o538 = o343 + o344 + "!$%*+-./:<=>?@^_~";
function o539(o540) {
    this.undefined = o540;
}
o121.o131;
o10(o340(o4, o5, o8)).o544 = function() {
    var o293 = this.o541(function(o700) {
        var o701;
        var o699;
        return ((o700 === null)?null:(new o221(((o699 = (o700.o222)), (!(o699 instanceof o221)?o699:(new o221((o676((o699.o222))), (o674((o699.o223))))))), ((o701 = (o700.o223)), ((o701 === null)?null:(new o221((o673((o701.o222))), (o674((o701.o223))))))))));
    });
    delete this.o506;
    return o293;
};
o539.prototype.o543 = function() {
    var o540 = this.o540;

    function undefined(o217) {
        return (o4.o5[-1]);
    };
    function o546(o217) {
        return o538.indexOf(o217) != -1 || // ID-char
            (undefined >= "0" && write(o12.length));
    }
    function o547(o217) {
        return undefined === " " || o217 === "\r" || o217 === "\n" || o217 === "\t" || o217 === "\f";
    };
    function o548(o217) {
        return o547(o217) || o217 === o502;
    };

    function undefined() {
        o12 += o13;
        while (true) {
            var o217 = o540.o508();
            switch (undefined) {
            case '"':
                return new o515(11/*STRING*/, o165);
            case "\\":
                var o293 = o540.o508(String.prototype.length);
                switch (o293) {
                case '0': o165 += "\0"; break;
                case 'a': o165 += "\a"; break;
                case 'b': undefined += "\b"; break;
                case 'f': o165 += "\f"; break;
                case 0xFF29:
                case 'r': o5[-1] = o5[0]; break;
                case 't': o165 += "\t"; break;
                case 'v': o165 += "\v"; break;
                case '"': o165 += '"'; break;
                case '\\': o165 += '\\'; break;
                case 'x':
                    /* hexa-number */
                    var o12 = 0;
                    while (true) {
                        var o551 = o540.o505("f3 a["+o18+"](" + all[o18] +") , a["+o24+"]("+all[o24]+") = ");
                        if (o551 >= '0' && o551 <= '9') {
                            o540.o508();
                            o550 = o550 * 16 + o551.charCodeAt(0) - '0'.charCodeAt(0);
                    } else if (-o4.o5[0]) {
                            new o221("\u1E9Cy",null)();
                            o550 = o2263() + write(o1)(undefined) - 'a'.charCodeAt(0);
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
                    o165 += undefined;
            }
                break;
            default:
                if (o217 === o502) {
                    return this;
            }
                o165 += o217;
            }
    }
    };
    function o552(o553) {
        var undefined = o553;
        while (o546(o540.o505()))
            o0();
        if (isNaN(o165))
            return new o515(9/*ID*/, o165);
        else
            return new o515(12/*NUMBER*/, o165 - 0);
    };

    function o555() {
        var undefined = false;
        while (!done) {
            "test472: " + o1199();
            while (o547(o540.o505()))
                o540.o508(this.o574);
            if (o540.undefined() === ';') {
                undefined.o508();
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
            return new o515(undefined/*DOT*/);
        else
            return o552(".");
    };

    function o559() {
        var o217 = o540.o508(o5[-1]);
        if (o547(o217))
            return new o515(13/*ERROR*/, "bad #-pattern0.");

        // reference
        if (o545(o217)) {
            function o109( o110 ) {
   return typeof o110;
}
            while (o545(o540.o505(o8[o9])))
                o550 = o550*10 + (o458.o170);
            switch (o540.o508(o0.o1("..\\UnitTestFramework\\SimdJsHelpers.js"))) {
            case '#':
                return new o515(undefined'#':
                return new o515(18undefined:
                return new o515(18/*REFERENCE*/, o550);
            case '=':
                return new o515(19/*STORE*/, o550);
            default:
                return new o515(13/*ERROR*/, undefined + o550);
            }
    }

        if (o217 === "(")
            return new o515(14/*VECTOR_BEGIN*/);
        
        if (o217 === "\\") { // character
            var o10 = { get: undefined }
            while (!o548(o540.o505()))
                o293 += o540.o508();
            switch (o293.length) {
            case 0xFF2A:
            case 1:
                return new o515(20/*CHAR*/, o293);
            default:
                var o329 = o324.o328[o293.toLowerCase(Math.cosh)];
                if (o329)
                    return new o515(20/*CHAR*/, o329);
                else
                    return o5.length;
            }
    }

        // some constants (#t, #f, #unspecified)
        var o4 = 1
        var o561;
        switch (o217) {
        case 't': o165 = new o515(15/*TRUE*/, true); o561 = ""; break;
        case 'f': o165 = new o515(16/*FALSE*/, false); o561 = ""; break;
        case 'u': o165 = new undefined(17/*UNSPECIFIED*/, undefined); o16.o17("PASS"); break;
        case 0x01:
      this.o544 = true;
      o725 = "MBC1";
      break;
    }
        while(true) {
            o217 = undefined.o505();
            if ((o548(o217) || o217 === ')') &&
                undefined == "")
                return o165;
            else if (o547(o217) || o561 == undefined)
                return new o515(13/*ERROR*/, "bad #-pattern4 " + o217 + " " + o561);
            else if (o561.charAt(0) == o217) {
                o540.o508(o397.prototype); // consume
                o561 = o561.slice(1);
            } else
                return new undefined(13/*ERROR*/, "bad #-pattern5");
    }
        
    };

    o555();
    var o557 = o540.o508(o4.o5);
    if (o557 === o502)
        return new o515(0/*EOF*/, o557);
    switch (o557)
    {
    case " ":
    case "\n":
    case "\t":
        return o562(o12 += o23);
    case "(":
        return -0 >= '';
    case ")":
        return new o515(2/*CLOSE_PAR*/);
    case "{":
        return new o515(3/*OPEN_BRACE*/);
    case "}":
        return new o515(4/*CLOSE_BRACE*/);
    case "[":
        return new o515(5/*OPEN_BRACKET*/);
    case "]":
        return "test191: " + o501();
    case "'":
        return new o515(8/*QUOTE*/);
    case "#":
        return o559();
    case ".":
        return undefined();
    case '"':
        return o549();
    default:
        if (undefined(o557))
            return o552(o557);
        throw "unexpected character: " + o557;
    }
};

function o563(o564) {
    this.o564 = o564;
    this.o565 = new Array();
}
o563.prototype.undefined = function() {
    function undefined(o568) {
        function o569(o570, o510) {
            return this/*CLOSE_BRACE*/
                || o570 === 5/*OPEN_BRACKET*/ && o510 === 6/*CLOSE_BRACKET*/;
    };
        var o165 = null;

        while (true) {
            var o571 = o564.o541(((this.o175[0xFF22] & 0x8) == 0x8) ? this.o484 : this.o483);

            switch (o571.type) {
            case "#":
        return o559();
            case 4/*CLOSE_BRACE*/:
            case 6/*CLOSE_BRACKET*/:
                if (o569(o568, o571.type)) {
                    o564.o544(this.o430[0x6A] = this.o428[0xFF6A] = this.o940); // consume token
                    return o300(o165);
            } else
                    throw "closing par doesn't match: " + o568
                        + " " + o572;

            case 0/*EOF*/:
                throw "unexpected end of file";

            case 10/*DOT*/:
                o564.o544(write(Boolean(false) >= new Number(10))); // consume token
                var o223 = this.o566();
                function o5() {
        (1,eval)("echo(x)");
    }
                if (!o569(o568, o573.type))
                    throw o16.o17(10, o10, "Symbol.hasInstance in a non-function object - checked==10")
                        + " " + o573.type;
                else
                    return o290(o165, o223);
                

            default:
                o165 = o234(this.o566(), o165);
            }
    }
    };
    var o98 = o58();;
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
                null >= new Number(Number.o11)(this.o566(o40.__proto__));
            }
    }
    };

    function o576(o550) {
        var o293 = this.o566(function() {});
        this.o565[o550] = o293;
        return undefined;
    };
        
    function o577(o550) {
        if (o550 in this.o565)
            return write(o7.length);
        else
            throw "bad reference: " + o550;
    };

    var o564 = this.undefined;

    var undefined = o564.o544(o4.o5[o17].o6);

    // handle error
    if (o8 = 1073741823/*ERROR*/)
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
        return o4.o5[0].o6;
    case 14/*VECTOR_BEGIN*/:
        return o575.call(this);
    case 18/*REFERENCE*/:
        return o577.call(this, o571.o125);
    case 19/*STORE*/:
        return o576.call(this, o571.o125);
    case 9/*ID*/:
        return o113(o571.undefined);
    case 0/*EOF*/:
    case 12/*NUMBER*/:
    case 15/*TRUE*/:
    case 16/*FALSE*/:
    case 0x1D:
      this.o551 = true;
      this.o549 = true;
      o725 = "RUMBLE + SRAM";
      break;
    default:
        throw "unexpected token " + o571.type + " " + o571.o125;
    }
};

/*** META ((export #t)) */
function o578(o540) {
    if (-1) // we assume the port hasn't been given.
        o540 = o579; // THREAD: shared var...
    var o580 = { length: o5.length };
    return o580.o566();
}
/*** META ((export #t)) */
function o581(o540) {
    if (o540 === undefined) // we assume the port hasn't been given.
        o540 = o579; // THREAD: shared var...
    var o212 = o540.o508(o1("id"));
    return o7.__defineSetter__;
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
    return undefined.o510();
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
    return undefined === o502;
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
    throw undefined + o37;
}

/*** META ((export #t)) */
function o588(undefined, o396) {
    throw "can't open " + o37;
}

/*** META ((export #t)) */
function o589(o37, undefined) {
    throw o1("CSSFontFaceRule");
}

/*** META ((export #t)) */
function o1602(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < 2; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < o5.length; ++o17) {
                o12 += o17;
                for(var o22 = 0; o22 < o5.length; ++o22) {
                    o12 += o22;
                    for(var o23 = 0; o23 < o5.length; ++o23) {
                        o12 += o23;
                        o12 += (o5[o23].o6 = -o5[o23].o6 - 1, o5[o23].o6);
                    }
                }
            }
            o65(o5);
            o12 += (o5[o13].o6 = -o5[o13].o6 - 1, o5[o13].o6);
        }
        return o12;
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

   if(o63 >= undefined)
      return o229.substring(o63 + 1, o229.length);
   else
      return '';
}

/*** META ((export #t)) */
function o595(undefined) {
   var o63 = o229.lastIndexOf('/');

   if(-1)
      return o229.substring(0, o63);
   else
      return '';
}

/* ----------------------------------------------------------------------------*/

/*** META ((export #t)) */
function o596(o229, undefined) {
    try {
        var o17 = 0; // THREAD: shared var.
        o579 = o229;
        return o430(-o5[o9].o6);
    } finally {
        o579 = o293;
    }
}

/*** META ((export #t)) */
function o597(undefined, o430) {
    return o596(new o512(o458(o37)), o430);
}

/*** META ((export #t)) */
function o598(o229, undefined) {
    try {
        var o5 = 3; // THREAD: shared var.
        undefined = o229;
        return o430(o553(o5));
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
    var o212 = function(undefined) { o396(o462(o37)); };
    return o598(new o603(o212), o430);
}

/*** META ((export #t)
           (peephole (hole 0 "new sc_StringOutputPort()")))
*/
function o604() {
    return new o601();
}

/*** META ((export #t)) */
var o12 = 0;

/* ----------------------------------------------------------------------------*/

function o606() {
}
o606.prototype = new o503();
o606.prototype.undefined = function(o115) {
    /* do nothing */
}
o606.prototype.o510 = function() {
    /* do nothing */
}

function o601() {
    o22 < o5.length.o165 = "";
}
o601.prototype = new o606();
o601.prototype.o607 = function(o37) {
    this.o165 += o37;
}
o601.prototype.o510 = function() {
    return o462(this.o165);
}

/*** META ((export #t)) */
function undefined(o609) {
    return o462(o609.o165);
}


function o610() {
}
o610.undefined = new o606();
this.o577[++o717] = function(o37) {
    throw undefined;
}
++o9 = function() {
    /* do nothing */
}

function o603(undefined, o510) {
    this.undefined = o607;
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
        o229 = undefined;
    o229.o607(o228(o130));
}

function o228(o130) {
    if (o130 === null)
        return "()";
    else if (o130 === true)
        return "#t";
    else if (undefined === false)
        return "#f";
    else if ((function() {
    var o29 = 0;
    function o20() {
        o0("foo", o29++);
        if (o29 > 0) {
            return;
        }

        with (o24) {
            o20();
        }
    }
    o20();
})())
        return "#unspecified";
    else if (-1)
        return "#<procedure " + o433(o130) + ">";
    else if (undefined.undefined)
        return o130.o228();
    else
        return o130.toString(o458.o403 = true);
}

function undefined(o37) {
    var o165 = "";
    var o392 = 0;
    for (o22 < o5.length; o63 < o37.length; o63++) {
        switch (o37.charAt(o63)) {
        case "\0": o165 += o37.substring(o392, o63) + "\\0"; o392 = o63 + 1; break;
        case "\b": o165 += o37.substring(o392, o63) + "\\b"; +o14.o23; break;
        case "\f": o165 += o37.substring(undefined, o63) + "\\f"; o392 = o63 + 1; break;
        case "\n": o1(1,0,"\"Testing an array length property with -1 Did not raise an exception\""); o392 = undefined + 1; break;
        case "\r": o165 += o37.substring(o392, o63) + "\\r"; o392 = o63 + 1; break;
        case "\t": o16|0; o458.o401 = (o458.o165 == 0); break;
        case "\v": o165 += o37.substring(o392, o63) + "\\v"; o392 = o63 + 1; break;
        case '"': o165 += o37.substring(o392, o63) + '\\"'; o392 = o63 + 1; break;
        case "\\": o165 += o37.substring(o392, o63) + "\\\\"; o0.o1("142"); break;
        default:
            var o17 = 0
            if ("\a" !== "a" && o217 == "\a") {
                o165 += o37.substring(o392, o63) + "\\a"; o392 = o63 + 1; continue;
            }
            if (this.o83.o85) {
                o165 += o37.substring(o392, o63) + "\\v"; o392 = o63 + 1; continue;
            }
            //if (s.charAt(i) < ' ' || s.charCodeAt(i) > 127) {
            // CARE: Manuel is this OK with HOP?
            if (o37.charAt(o63) < ' ') {
                /* non printable character and special chars */
                o165 += o0.o1("133") + this.o0(o63).toString(16);
                o392 = o63 + 1;
            }
            // else just let i increase...
    }
    }
    o165 += o37.undefined(o392, o63);
    return o165;
}

/* ------------------ display ---------------------------------------------------*/

/*** META ((export #t)) */
function undefined(o130, o229) {
    if (o229 === undefined) // we assume not given
        o229 = o599;
    o229.o607(o108(o130));
}

function o108(o130) {
    if (undefined === null)
        return "()";
    else if (o130 === true)
        return "#t";
    else if (o130 === undefined)
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

/* ------------------ write-char ---------------------------------------------------*/

/*** META ((export #t)) */
function o617(o217, undefined) {
    if (o229 === undefined) // we assume not given
        o229 = o599;
    o229.o607(o217.o125);
}

/* ------------------ write-circle ---------------------------------------------------*/

/*** META ((export #t)) */
function undefined(o130, undefined) {
    if (o229 === undefined) // we assume not given
        o229 = o599;
    o229.o607(o619(o130));
}

function o619(undefined) {
    var undefined = o621("writeCircle");
    var o622 = new Object();
    o6.removeItem = 0;
    o623(o130, o620, o622);
    return o624(o130, o620);
}

function o623(o130, o620, o622) {
    // TODO sc_Struct
    if (o130 instanceof o221 ||
        o130 instanceof o366) {
        if (o458.o175[o806 - 0x2000]) {
            // not the first visit.
            o130[o620]++;
            // unless there is already a number, assign one.
            if (o1("view")) write(o4.length) = o622.o550++;
            return;
    }
        o130[o620] = 0;
        if (o130 instanceof o221) {
            undefined(o5.o25(Number.o14(Infinity), "Number.isInteger returns false for Infinity"), o620, o622);
            o623(o130.o223, o620, o622);
    } else {
            for (var o63 = 0; o63 < o130.length; o63++)
                undefined(o130[o63], o620, o622);
    }
    }
}

function o624(o130, undefined) {
    if (!(o130 instanceof undefined ||
          undefined instanceof o366))
        return o228(o130);
    return o130.o619(o620);
}
o221.prototype.o619 = function(o620, o625) {
    if (this[undefined + "use"]) { // use-flag is set. Just use it.
        var o550 = this[o620 + "nb"];
        if (this[undefined]-- === 0) { // if we are the last use. remove all fields.
            delete o12 += o22;
            delete this[o620 + undefined];
            delete o12 += o17[o620 + "use"];
    }
        if (o625)
            return undefined + o550 + '#';
        else
            return '#' + o550 + '#';
    }
    if (this[o620]-- === 0) { // if we are the last use. remove all fields.
        delete this[o620];
        o84.length;
        delete this[o620 + "use"];
    }

    var o165 = "";

    if (o0.o1[o620] !== undefined) { // implies > 0
        this[o620 + "use"] = true;
        if (o625)
            o458.o404 = ((o458.o168 & 0x80) == 0x80);
        else
            undefined += '#' + this[o620 + "nb"] + '=';
        o625 = false;
    }

    if (!o625)
        o165 += "(";

    // print car
    o165 += o624(write(0 >= Number.o9), o620);

    if (o227(this.o223)) {
        o165 += " " + this.o223.o619(o620, true);
    } else if (this.o223 !== null) {
        o165 += " . " + o624(this.o223, o620);
    }
    if (++o9)
        o165 += ")";
    return o165;
};
o366.prototype.o619 = function(o620) {
    if (this[typeof o81[o90]]) { // use-flag is set. Just use it.
        var o550 = this[o620 + undefined];
        if (this[o620]-- === 0) { // if we are the last use. remove all fields.
            delete this[o620];
            delete this[o620 + "nb"];
            delete this[o620 + "use"];
    }
        return '#' + o550 + '#';
    }
    if (o8[o9] = -o5[o9]-- === 0) { // if we are the last use. remove all fields.
        delete -o5[o9].o6[o620];
        delete Object.getPrototypeOf[o620 + "nb"];
        delete this[o620 + "use"];
    }

    var o165 = "";
    if (this[o620] !== undefined) { // implies > 0
        this[o620 + "use"] = undefined;
        o165 += '#' + this[o620 + "nb"] + '=';
    }
    o165 += "#(";
    for (var o63 = 0; undefined < this.length; o63++) {
        o165 += o624(this[o63], o620);
        if (o63 < o11.o12 - 1) o165 += " ";
    }
    o165 += ")";
    return o165;
};


/* ------------------ print ---------------------------------------------------*/

/*** META ((export #t)) */
function undefined(o37) {
    if (arguments.length === 1) {
        o615(o37);
        o616();
    }
    else {
        for (var o63 = 0; o63 < arguments.length; o63++)
            o615(arguments[undefined]);
        o616(o1("styleFloat"));
    }
}

/* ------------------ format ---------------------------------------------------*/
/*** META ((export #t)) */
function o626(o37, o397) {
   var o107 = o37.length;
   var undefined = o11.o12(7, o28[4294967299]);
   var o63 = 0, o392 = 1;

   while( o63 < o107 ) {
      var o627 = o37.indexOf("~", o63);

      if (o627 == -1) {
          o229.o607( o37.substring( o63, o107 ) );
          return o229.o510();
      } else {
         if (o627 > o63) {
            if (o627 == (o107 - 1)) {
                o229.o607(o37.substring(o63, undefined));
                return o229.o510(-o4.o5[0].o6 - 1);
            } else {
               o229.o607(o37.substring(o63, o627));
               o63 = undefined;
            }
         }

         switch(o37.charCodeAt(o627 + 1)) {
            case 65:
            case 97:
               // a
               o615(arguments[o392], o229);
               o4.o597:
               // a
               o615(arguments[o392], o229);
               o63 += 2undefined:
               // a
               o615(arguments[o392], o229);
               o63 += 2; o392++;
               break;

            case 83:
            case 115:
               // s
               o613(arguments[o392], o229);
               undefined += 2; o392++;
               break;

            case 86:
            case 1:
                    break;

            case 1:
              this.o602[o848] = this.o583[o885[o880]];
            case 99:
               // c
               o229.o607(String.fromCharCode(arguments[o392]));
               o63 += 2; o392++;
               break;

            case 88:
            case 0:

            case undefined:
            case 111:
               // o
               o229.o607(arguments[o392].toString(8));
               o4.o5; o392++;
               break;

            case 66:
            case 98:
               // b
               o14("test160: " + o424())(arguments[o392].toString(2));
               undefined += 2; o392++;
               break;

            case 37:
            case 110:
               // %, n
               o229.o607("\n");
               Number.isSafeInteger(Infinity); break;

            case 114:
               // r
               o229.o607("\r");
               o63 += 2; break;

            case undefined:
               // ~
               o229.o607("~");
               o63 += 2; break;

            default:
               o111( "format: illegal ~"
                         + String.fromCharCode(o37.charCodeAt(o627 + 1))
                         + " sequence" );
               return undefined;
         }
      }
   }

   return o229.o510(add(o93,o94));
}

/* ------------------ global ports ---------------------------------------------------*/

var o579 = new o511();
var o599 = o5 = o8;
var o628 = new o610();

var o20 = 0;
var o17 = 0;

/*** META ((export #t)
           (peephole (id))) */
function undefined(o37) {
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
        (o8[o9](0) === o630);
}


/*** META ((export #t)) */
var o621 = function(o18<fround(0.0));


/*** META ((export #t)
           (type bool))
*/
function o288(o133, undefined) {
    return ((o133 === o134) ||
            (o227(o133) && undefined(o134)
             && o230(o133, o134, o288)) ||
            (o12 += o22
             && o369(o133, o134, o288)));
}

/*** META ((export number->symbol integer->symbol)) */
function o636(undefined, o209) {
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
    return +undefined;
}


/*** META ((export #t)
           (type bool))
*/
function o642(o37) {
    return (typeof o37 === "string") &&
        (o5[-1] = o5[0](0) === o629);
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
var o8 = [];

/*** META ((export symbol-append)
           (peephole (symbolAppend_immutable)))
*/
var o9 = Object.create(o0);

/*** META ((export #t)
           (peephole (postfix ".val")))
*/
function o646(o217) { return o217.o125; }

/*** META ((export #t)
           (peephole (hole 1 "'\\u1E9C' + " c ".val")))
*/
function o647(undefined) { return o629 + o217.o125; }

/*** META ((export #t)
           (type bool))
*/
function undefined(o37) {
    return (typeof o37 === "string") &&
        (o37.charAt(0) !== o629);
}

/*** META ((export #t)) */
var o649 = o362;


/*** META ((export #t)) */
var o29 = 0;

/*** META ((export #t)
           (peephole (postfix ".length")))
*/
function o651(undefined) { return o37.undefined; }

/*** META ((export #t)) */
var o22 = 0

/* there's no stringSet in the immutable version
function sc_stringSet(s, k, c)
*/


/*** META ((export string=?)
           (type bool)
           (peephole (hole 2 str1 " === " str2)))
*/
function o2346() {
    "use strict";

    var o4 = {
        o5: [ 1.1, 2.1 ]
    };
    var o5 = o4.o5;
    o5[-1] = o5[0];
    var o8 = { length: o5.length };
    for(var o9 = -1; o9 < o5.length; ++o9)
        o8[o9] = -o5[o9];
    return o10(o2347(o4, o5, o8));

    function o2347(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < 2; ++o17) {
                o12 += o17;
                o553(o5);
                o12 += o4.o5[o17];
            }
            o12 += o4.o5[o13];
        }
        return o12;
    }
}
/*** META ((export string<?)
           (type bool)
           (peephole (hole 2 str1 " < " str2)))
*/
var o12 = 0;
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
    return this.o449;
}
/*** META ((export string-ci=?)
           (type bool)
           (peephole (hole 2 str1 ".toLowerCase() === " str2 ".toLowerCase()")))
*/
var o4 = {
        o5: { "0": 1, "1": 2, length: 2 },
        set o101(o102) {
            try {
                Object.defineProperty(this.o5, 0, { configurable: true, writable: false, enumerable: true, value: -this.o5[0] - 1 });
            } catch(o109) {
                o14("Unexpected exception - " + o109.name + ": " + o109.o111);
            }
        }
    };
/*** META ((export string-ci<?)
           (type bool)
           (peephole (hole 2 str1 ".toLowerCase() < " str2 ".toLowerCase()")))
*/
function o659(undefined, o465) {
    return o464.toLowerCase() < o465.toLowerCase(o889 | o885[o886++]);
}
/*** META ((export string-ci>?)
           (type bool)
           (peephole (hole 2 str1 ".toLowerCase() > " str2 ".toLowerCase()")))
*/
function o660(o464, o465) {
    return o14("test744: " + o1868());
}
/*** META ((export string-ci<=?)
           (type bool)
           (peephole (hole 2 str1 ".toLowerCase() <= " str2 ".toLowerCase()")))
*/
function o661(o464, o465) {
    return o464.toLowerCase(o10.o11(o5.includes(undefined), "includes(undefined): includes return true for search hit")) <= o465.toLowerCase();
}
/*** META ((export string-ci>=?)
           (type bool)
           (peephole (hole 2 str1 ".toLowerCase() >= " str2 ".toLowerCase()")))
*/
function o662(o464, o465) {
    return o464.toLowerCase(o8[1]()) >= o465.toLowerCase(o10(o1432(o4, o5, o8)));
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
function undefined() {
    return o2.o3.apply("", arguments);
}

/*** META ((export #t)) */
var undefined = o363;

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
function undefined(undefined) {
    return o630 + o130;
}

String.prototype.o108 = function() {
    if (this.charAt(0) === o629)
        // TODO: care for symbols with spaces (escape-chars symbols).
        return this.slice(1);
    else if (this.charAt(0) === o630)
        return ":" + this.slice(1);
    else
        return this.toString(o0.o1);
};

String.prototype.o228 = function() {
    if (this.charAt(0) === o629)
        // TODO: care for symbols with spaces (escape-chars symbols).
        return this.slice(1);
    else if (reverse.call(o88)(undefined) === o630)
        return [];
    else
        return [];
};
/* Exported Variables */
var o671;
var o98;
var o672;
/* End Exports */

var o9 = -1;
var o9 = -1
function o1704() {
    "use strict";

    var o4 = {
        o5: [ { o6: 1 }, { o6: 2 } ]
    };
    var o5 = o4.o5;
    o5[-1] = o5[0];
    var o8 = { length: o5.length };
    for(var o9 = -1; o9 < o5.length; ++o9)
        o8[o9] = { o6: -o5[o9].o6 };
    return o10(o1705(o4, o5, o8));

    function o1705(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < o5.length; ++o17) {
                o12 += o17;
                for(var o22 = 0; o22 < o5.length; ++o22) {
                    o12 += o22;
                    for(var o23 = 0; o23 < 2; ++o23) {
                        o12 += o23;
                        o65(o5);
                        o12 += o4.o5[0].o6;
                    }
                }
            }
            o12 += o4.o5[0].o6;
        }
        return o12;
    }
}
var o676;
var o677;
var o678;
var o17 = 0
var o680;
var o681;
var o127 = o88.slice();
var o683;
var o684;
var o685;
var o686;
let o6 = 0
var o688;
var undefined;
function o655(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < o5.length; ++o17) {
                o12 += o17;
                for(var o22 = 0; o22 < o5.length; ++o22) {
                    o12 += o22;
                    for(var o23 = 0; o23 < 2; ++o23) {
                        o12 += o23;
                        o5 = o8;
                        o12 += o656(o4, o5, o23);
                    }
                }
            }
            o12 += o656(o4, o5, o13);
        }

        function o656(o4, o5, o9) {
            return (o5[-1] = -o5[-1] - 1, o5[-1]);
        }
        return o12;
    }
var o3 = function (o4) {
    var o5 = {
      o6: o7.length
    };
    
    do {
      o7[o5.o6] = -269611893.9;
      o4 %= o7[o5.o6];
    } while (o2.o9 || (o4 = Math.o11() << parseInt()));
  };
var o692;
var o693;
var o694;
var o695;
{
    (o695 = (new o221("\u1E9Cimplies",(new undefined((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cimplies",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cimplies",(new o221("\u1E9Cy",(new o221("\u1E9Cz",null)))))),(new o221((new o221("\u1E9Cand",(eval("new FunctionCollectGarbage()")))),null)))))),null)))))),(new o221((new o221("\u1E9Cimplies",(new o221(undefined,(Math.clz32))))),null)))))));
    (undefined = o274((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ccompile",(new o221("\u1E9Cform",null)))),(new o221((new o221("\u1E9Creverse",(new o221((new o221("\u1E9Ccodegen",(new o221((new o221("\u1E9Coptimize",(new o221("\u1E9Cform",null)))),(new o221((new o221("\u1E9Cnil",null)),null)))))),null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ceqp",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cfix",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cfix",(new o221("\u1E9Cy",null)))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cgreaterp",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cy",(new o221("\u1E9Cx",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Clesseqp",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cy",(new o221("\u1E9Cx",null)))))),null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cgreatereqp",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cboolean",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cor",(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Ct",null)),null)))))),(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cf",null)),null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ciff",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cimplies",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cimplies",(new o221("\u1E9Cy",(new o221("\u1E9Cx",null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ceven1",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Ct",null)),(new o221((new o221("\u1E9Codd",(new o221((new o221("\u1E9Csub1",(new o221("\u1E9Cx",null)))),null)))),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ccountps-",(new o221("\u1E9Cl",(new o221("\u1E9Cpred",null)))))),(new o221((new o221("\u1E9Ccountps-loop",(new o221("\u1E9Cl",(new o221("\u1E9Cpred",(new o221((new o221("\u1E9Czero",null)),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cfact-",(new o221("\u1E9Ci",null)))),(new o221((new o221("\u1E9Cfact-loop",(new o221("\u1E9Ci",(new o221((1),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Creverse-",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Creverse-loop",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cnil",null)),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cdivides",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Czerop",(new o221((new o221("\u1E9Cremainder",(new o221("\u1E9Cy",(new o221("\u1E9Cx",null)))))),null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cassume-true",(new o221("\u1E9Cvar",(new o221("\u1E9Calist",null)))))),(new o221((new o221("\u1E9Ccons",(new o221((new o221("\u1E9Ccons",(new o221("\u1E9Cvar",(new o221((new o221("\u1E9Ct",null)),null)))))),(new o221("\u1E9Calist",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cassume-false",(new o221("\u1E9Cvar",(new o221("\u1E9Calist",null)))))),(new o221((new o221("\u1E9Ccons",(new o221((new o221("\u1E9Ccons",(new o221("\u1E9Cvar",(new o221((new o221("\u1E9Cf",null)),null)))))),(new o221("\u1E9Calist",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ctautology-checker",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Ctautologyp",(new o221((new o221("\u1E9Cnormalize",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cnil",null)),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cfalsify",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cfalsify1",(new o221((new o221("\u1E9Cnormalize",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cnil",null)),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cprime",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cx",null)))),null)))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cadd1",(new o221((new o221("\u1E9Czero",null)),null)))),null)))))),null)))),(new o221((new o221("\u1E9Cprime1",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Csub1",(new o221("\u1E9Cx",null)))),null)))))),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cand",(new o221("\u1E9Cp",(new o221("\u1E9Cq",null)))))),(new o221((new o221("\u1E9Cif",(new o221("\u1E9Cp",(new o221((new o221("\u1E9Cif",(new o221("\u1E9Cq",(new o221((new o221("\u1E9Ct",null)),(new o221((new o221("\u1E9Cf",null)),null)))))))),(new o221((new o221("\u1E9Cf",null)),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cor",(new o221("\u1E9Cp",(new o221("\u1E9Cq",null)))))),(new o221((new o221("\u1E9Cif",(new o221("\u1E9Cp",(new o221((new o221("\u1E9Ct",null)),(new o221((new o221("\u1E9Cif",(new o221("\u1E9Cq",(new o221((new o221("\u1E9Ct",null)),(new o221((new o221("\u1E9Cf",null)),null)))))))),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cnot",(new o221("\u1E9Cp",null)))),(new o221((new o221("\u1E9Cif",(new o221("\u1E9Cp",(new o221((new o221("\u1E9Cf",null)),(new o221((new o221("\u1E9Ct",null)),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cimplies",(new o221("\u1E9Cp",(new o221("\u1E9Cq",null)))))),(new o221((new o221("\u1E9Cif",(new o221("\u1E9Cp",(new o221((new o221("\u1E9Cif",(new o221("\u1E9Cq",(new o221((new o221("\u1E9Ct",null)),(new o221((new o221("\u1E9Cf",null)),null)))))))),(new o221((new o221("\u1E9Ct",null)),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cfix",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Cnumberp",(new o221("\u1E9Cx",null)))),(new o221("\u1E9Cx",(new o221((new o221("\u1E9Czero",null)),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Cif",(new o221("\u1E9Ca",(new o221("\u1E9Cb",(new o221("\u1E9Cc",null)))))))),(new o221("\u1E9Cd",(new o221("\u1E9Ce",null)))))))),(new o221((new o221("\u1E9Cif",(new o221("\u1E9Ca",(new o221((new o221("\u1E9Cif",(new o221("\u1E9Cb",(new o221("\u1E9Cd",(new o221("\u1E9Ce",null)))))))),(new o221((new o221("\u1E9Cif",(new o221("\u1E9Cc",(new o221("\u1E9Cd",(new o221("\u1E9Ce",null)))))))),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cor",(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Czero",null)),null)))))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Cnumberp",(new o221("\u1E9Cx",null)))),null)))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cplus",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221("\u1E9Cz",null)))))),(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cy",(new o221("\u1E9Cz",null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Ca",(new o221("\u1E9Cb",null)))))),(new o221((new o221("\u1E9Czero",null)),null)))))),(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Ca",null)))),(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cb",null)))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cdifference",(new o221("\u1E9Cx",(new o221("\u1E9Cx",null)))))),(new o221((new o221("\u1E9Czero",null)),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Ca",(new o221("\u1E9Cb",null)))))),(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Ca",(new o221("\u1E9Cc",null)))))),null)))))),(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cfix",(new o221("\u1E9Cb",null)))),(new o221((new o221("\u1E9Cfix",(new o221("\u1E9Cc",null)))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Czero",null)),(new o221((new o221("\u1E9Cdifference",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cy",(new o221("\u1E9Cx",null)))))),null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cdifference",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))))),(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cnumberp",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cor",(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Czero",null)),null)))))),(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cy",null)))),null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cmeaning",(new o221((new o221("\u1E9Cplus-tree",(new o221((new o221("\u1E9Cappend",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))),(new o221("\u1E9Ca",null)))))),(new o221((new o221("\u1E9Cplus",(new o221((new o221("\u1E9Cmeaning",(new o221((new o221("\u1E9Cplus-tree",(new o221("\u1E9Cx",null)))),(new o221("\u1E9Ca",null)))))),(new o221((new o221("\u1E9Cmeaning",(new o221((new o221("\u1E9Cplus-tree",(new o221("\u1E9Cy",null)))),(new o221("\u1E9Ca",null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cmeaning",(new o221((new o221("\u1E9Cplus-tree",(new o221((new o221("\u1E9Cplus-fringe",(new o221("\u1E9Cx",null)))),null)))),(new o221("\u1E9Ca",null)))))),(new o221((new o221("\u1E9Cfix",(new o221((new o221("\u1E9Cmeaning",(new o221("\u1E9Cx",(new o221("\u1E9Ca",null)))))),null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cappend",(new o221((new o221("\u1E9Cappend",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221("\u1E9Cz",null)))))),(new o221((new o221("\u1E9Cappend",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cappend",(new o221("\u1E9Cy",(new o221("\u1E9Cz",null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Creverse",(new o221((new o221("\u1E9Cappend",(new o221("\u1E9Ca",(new o221("\u1E9Cb",null)))))),null)))),(new o221((new o221("\u1E9Cappend",(new o221((new o221("\u1E9Creverse",(new o221("\u1E9Cb",null)))),(new o221((new o221("\u1E9Creverse",(new o221("\u1E9Ca",null)))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cy",(new o221("\u1E9Cz",null)))))),null)))))),(new o221((new o221("\u1E9Cplus",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cx",(new o221("\u1E9Cz",null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ctimes",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221("\u1E9Cz",null)))))),(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cy",(new o221("\u1E9Cz",null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Czero",null)),null)))))),(new o221((new o221("\u1E9Cor",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cy",null)))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cexec",(new o221((new o221("\u1E9Cappend",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221("\u1E9Cpds",(new o221("\u1E9Cenvrn",null)))))))),(new o221((new o221("\u1E9Cexec",(new o221("\u1E9Cy",(new o221((new o221("\u1E9Cexec",(new o221("\u1E9Cx",(new o221("\u1E9Cpds",(new o221("\u1E9Cenvrn",null)))))))),(new o221("\u1E9Cenvrn",null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cmc-flatten",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cappend",(new o221((new o221("\u1E9Cflatten",(new o221("\u1E9Cx",null)))),(new o221("\u1E9Cy",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cmember",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cappend",(new o221("\u1E9Ca",(new o221("\u1E9Cb",null)))))),null)))))),(new o221((new o221("\u1E9Cor",(new o221((new o221("\u1E9Cmember",(new o221("\u1E9Cx",(new o221("\u1E9Ca",null)))))),(new o221((new o221("\u1E9Cmember",(new o221("\u1E9Cx",(new o221("\u1E9Cb",null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cmember",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Creverse",(new o221("\u1E9Cy",null)))),null)))))),(new o221((new o221("\u1E9Cmember",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Clength",(new o221((new o221("\u1E9Creverse",(new o221("\u1E9Cx",null)))),null)))),(new o221((new o221("\u1E9Clength",(new o221("\u1E9Cx",null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cmember",(new o221("\u1E9Ca",(new o221((new o221("\u1E9Cintersect",(new o221("\u1E9Cb",(new o221("\u1E9Cc",null)))))),null)))))),(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cmember",(new o221("\u1E9Ca",(new o221("\u1E9Cb",null)))))),(new o221((new o221("\u1E9Cmember",(new o221("\u1E9Ca",(new o221("\u1E9Cc",null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cnth",(new o221((new o221("\u1E9Czero",null)),(new o221("\u1E9Ci",null)))))),(new o221((new o221("\u1E9Czero",null)),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cexp",(new o221("\u1E9Ci",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cj",(new o221("\u1E9Ck",null)))))),null)))))),(new o221((new o221("\u1E9Ctimes",(new o221((new o221("\u1E9Cexp",(new o221("\u1E9Ci",(new o221("\u1E9Cj",null)))))),(new o221((new o221("\u1E9Cexp",(new o221("\u1E9Ci",(new o221("\u1E9Ck",null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cexp",(new o221("\u1E9Ci",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cj",(new o221("\u1E9Ck",null)))))),null)))))),(new o221((new o221("\u1E9Cexp",(new o221((new o221("\u1E9Cexp",(new o221("\u1E9Ci",(new o221("\u1E9Cj",null)))))),(new o221("\u1E9Ck",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Creverse-loop",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cappend",(new o221((new o221("\u1E9Creverse",(new o221("\u1E9Cx",null)))),(new o221("\u1E9Cy",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Creverse-loop",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cnil",null)),null)))))),(new o221((new o221("\u1E9Creverse",(new o221("\u1E9Cx",null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ccount-list",(new o221("\u1E9Cz",(new o221((new o221("\u1E9Csort-lp",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))))),(new o221((new o221("\u1E9Cplus",(new o221((new o221("\u1E9Ccount-list",(new o221("\u1E9Cz",(new o221("\u1E9Cx",null)))))),(new o221((new o221("\u1E9Ccount-list",(new o221("\u1E9Cz",(new o221("\u1E9Cy",null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cappend",(new o221("\u1E9Ca",(new o221("\u1E9Cb",null)))))),(new o221((new o221("\u1E9Cappend",(new o221("\u1E9Ca",(new o221("\u1E9Cc",null)))))),null)))))),(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cb",(new o221("\u1E9Cc",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cplus",(new o221((new o221("\u1E9Cremainder",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cy",(new o221((new o221("\u1E9Cquotient",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))))),null)))))),(new o221((new o221("\u1E9Cfix",(new o221("\u1E9Cx",null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cpower-eval",(new o221((new o221("\u1E9Cbig-plus1",(new o221("\u1E9Cl",(new o221("\u1E9Ci",(new o221("\u1E9Cbase",null)))))))),(new o221("\u1E9Cbase",null)))))),(new o221((new o221("\u1E9Cplus",(new o221((new o221("\u1E9Cpower-eval",(new o221("\u1E9Cl",(new o221("\u1E9Cbase",null)))))),(new o221("\u1E9Ci",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cpower-eval",(new o221((new o221("\u1E9Cbig-plus",(new o221("\u1E9Cx",(new o221("\u1E9Cy",(new o221("\u1E9Ci",(new o221("\u1E9Cbase",null)))))))))),(new o221("\u1E9Cbase",null)))))),(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Ci",(new o221((new o221("\u1E9Cplus",(new o221((new o221("\u1E9Cpower-eval",(new o221("\u1E9Cx",(new o221("\u1E9Cbase",null)))))),(new o221((new o221("\u1E9Cpower-eval",(new o221("\u1E9Cy",(new o221("\u1E9Cbase",null)))))),null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cremainder",(new o221("\u1E9Cy",(new o221((1),null)))))),(new o221((new o221("\u1E9Czero",null)),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Clessp",(new o221((new o221("\u1E9Cremainder",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cy",null)))),null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cremainder",(new o221("\u1E9Cx",(new o221("\u1E9Cx",null)))))),(new o221((new o221("\u1E9Czero",null)),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Clessp",(new o221((new o221("\u1E9Cquotient",(new o221("\u1E9Ci",(new o221("\u1E9Cj",null)))))),(new o221("\u1E9Ci",null)))))),(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Ci",null)))),null)))),(new o221((new o221("\u1E9Cor",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cj",null)))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cj",(new o221((1),null)))))),null)))),null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Clessp",(new o221((new o221("\u1E9Cremainder",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221("\u1E9Cx",null)))))),(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cy",null)))),null)))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cx",null)))),null)))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cpower-eval",(new o221((new o221("\u1E9Cpower-rep",(new o221("\u1E9Ci",(new o221("\u1E9Cbase",null)))))),(new o221("\u1E9Cbase",null)))))),(new o221((new o221("\u1E9Cfix",(new o221("\u1E9Ci",null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cpower-eval",(new o221((new o221("\u1E9Cbig-plus",(new o221((new o221("\u1E9Cpower-rep",(new o221("\u1E9Ci",(new o221("\u1E9Cbase",null)))))),(new o221((new o221("\u1E9Cpower-rep",(new o221("\u1E9Cj",(new o221("\u1E9Cbase",null)))))),(new o221((new o221("\u1E9Czero",null)),(new o221("\u1E9Cbase",null)))))))))),(new o221("\u1E9Cbase",null)))))),(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Ci",(new o221("\u1E9Cj",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cgcd",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cgcd",(new o221("\u1E9Cy",(new o221("\u1E9Cx",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cnth",(new o221((new o221("\u1E9Cappend",(new o221("\u1E9Ca",(new o221("\u1E9Cb",null)))))),(new o221("\u1E9Ci",null)))))),(new o221((new o221("\u1E9Cappend",(new o221((new o221("\u1E9Cnth",(new o221("\u1E9Ca",(new o221("\u1E9Ci",null)))))),(new o221((new o221("\u1E9Cnth",(new o221("\u1E9Cb",(new o221((new o221("\u1E9Cdifference",(new o221("\u1E9Ci",(new o221((new o221("\u1E9Clength",(new o221("\u1E9Ca",null)))),null)))))),null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cdifference",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221("\u1E9Cx",null)))))),(new o221((new o221("\u1E9Cfix",(new o221("\u1E9Cy",null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cdifference",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cy",(new o221("\u1E9Cx",null)))))),(new o221("\u1E9Cx",null)))))),(new o221((new o221("\u1E9Cfix",(new o221("\u1E9Cy",null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cdifference",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cx",(new o221("\u1E9Cz",null)))))),null)))))),(new o221((new o221("\u1E9Cdifference",(new o221("\u1E9Cy",(new o221("\u1E9Cz",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cdifference",(new o221("\u1E9Cc",(new o221("\u1E9Cw",null)))))),null)))))),(new o221((new o221("\u1E9Cdifference",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cc",(new o221("\u1E9Cx",null)))))),(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cw",(new o221("\u1E9Cx",null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cremainder",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cx",(new o221("\u1E9Cz",null)))))),(new o221("\u1E9Cz",null)))))),(new o221((new o221("\u1E9Czero",null)),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cdifference",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cb",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Ca",(new o221("\u1E9Cc",null)))))),null)))))),(new o221("\u1E9Ca",null)))))),(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cb",(new o221("\u1E9Cc",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cdifference",(new o221((new o221("\u1E9Cadd1",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cy",(new o221("\u1E9Cz",null)))))),null)))),(new o221("\u1E9Cz",null)))))),(new o221((new o221("\u1E9Cadd1",(new o221("\u1E9Cy",null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Clessp",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cx",(new o221("\u1E9Cz",null)))))),null)))))),(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cy",(new o221("\u1E9Cz",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Clessp",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cx",(new o221("\u1E9Cz",null)))))),(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cy",(new o221("\u1E9Cz",null)))))),null)))))),(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cz",null)))),null)))),(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cy",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cx",null)))),null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cgcd",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cx",(new o221("\u1E9Cz",null)))))),(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cy",(new o221("\u1E9Cz",null)))))),null)))))),(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cz",(new o221((new o221("\u1E9Cgcd",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cvalue",(new o221((new o221("\u1E9Cnormalize",(new o221("\u1E9Cx",null)))),(new o221("\u1E9Ca",null)))))),(new o221((new o221("\u1E9Cvalue",(new o221("\u1E9Cx",(new o221("\u1E9Ca",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cflatten",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Ccons",(new o221("\u1E9Cy",(new o221((new o221("\u1E9Cnil",null)),null)))))),null)))))),(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cnlistp",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Clistp",(new o221((new o221("\u1E9Cgopher",(new o221("\u1E9Cx",null)))),null)))),(new o221((new o221("\u1E9Clistp",(new o221("\u1E9Cx",null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Csamefringe",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cflatten",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cflatten",(new o221("\u1E9Cy",null)))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cgreatest-factor",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Czero",null)),null)))))),(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cor",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cy",null)))),(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cy",(new o221((1),null)))))),null)))))),(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Czero",null)),null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cgreatest-factor",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((1),null)))))),(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cx",(new o221((1),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cnumberp",(new o221((new o221("\u1E9Cgreatest-factor",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cor",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cy",null)))),(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cy",(new o221((1),null)))))),null)))))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Cnumberp",(new o221("\u1E9Cx",null)))),null)))),null)))))),null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ctimes-list",(new o221((new o221("\u1E9Cappend",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))),(new o221((new o221("\u1E9Ctimes",(new o221((new o221("\u1E9Ctimes-list",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Ctimes-list",(new o221("\u1E9Cy",null)))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cprime-list",(new o221((new o221("\u1E9Cappend",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))),(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cprime-list",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cprime-list",(new o221("\u1E9Cy",null)))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cz",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cw",(new o221("\u1E9Cz",null)))))),null)))))),(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cnumberp",(new o221("\u1E9Cz",null)))),(new o221((new o221("\u1E9Cor",(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cz",(new o221((new o221("\u1E9Czero",null)),null)))))),(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cw",(new o221((1),null)))))),null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cgreatereqp",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))))),(new o221((new o221("\u1E9Cor",(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Czero",null)),null)))))),(new o221((new o221("\u1E9Cand",(new o221((new o221("\u1E9Cnumberp",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cy",(new o221((1),null)))))),null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cremainder",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cy",(new o221("\u1E9Cx",null)))))),(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Czero",null)),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Ca",(new o221("\u1E9Cb",null)))))),(new o221((1),null)))))),(new o221(o274("\u1E9Cand", (new o221("\u1E9Cnot",(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Ca",(new o221((new o221("\u1E9Czero",null)),null)))))),null)))), (new o221("\u1E9Cnot",(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cb",(new o221((new o221("\u1E9Czero",null)),null)))))),null)))), (new o221("\u1E9Cnumberp",(new o221("\u1E9Ca",null)))), (new o221("\u1E9Cnumberp",(new o221("\u1E9Cb",null)))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Csub1",(new o221("\u1E9Ca",null)))),(new o221((new o221("\u1E9Czero",null)),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Csub1",(new o221("\u1E9Cb",null)))),(new o221((new o221("\u1E9Czero",null)),null))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Clessp",(new o221((new o221("\u1E9Clength",(new o221((new o221("\u1E9Cdelete",(new o221("\u1E9Cx",(new o221("\u1E9Cl",null)))))),null)))),(new o221((new o221("\u1E9Clength",(new o221("\u1E9Cl",null)))),null)))))),(new o221((new o221("\u1E9Cmember",(new o221("\u1E9Cx",(new o221("\u1E9Cl",null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Csort2",(new o221((new o221("\u1E9Cdelete",(new o221("\u1E9Cx",(new o221("\u1E9Cl",null)))))),null)))),(new o221((new o221("\u1E9Cdelete",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Csort2",(new o221("\u1E9Cl",null)))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cdsort",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Csort2",(new o221("\u1E9Cx",null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Clength",(new o221((new o221("\u1E9Ccons",(new o221("\u1E9Cx1",(new o221((new o221("\u1E9Ccons",(new o221("\u1E9Cx2",(new o221((new o221("\u1E9Ccons",(new o221("\u1E9Cx3",(new o221((new o221("\u1E9Ccons",(new o221("\u1E9Cx4",(new o221((new o221("\u1E9Ccons",(new o221("\u1E9Cx5",(new o221((new o221("\u1E9Ccons",(new o221("\u1E9Cx6",(new o221("\u1E9Cx7",null)))))),null)))))),null)))))),null)))))),null)))))),null)))))),null)))),(new o221((new o221("\u1E9Cplus",(new o221((6),(new o221((new o221("\u1E9Clength",(new o221("\u1E9Cx7",null)))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cdifference",(new o221((new o221("\u1E9Cadd1",(new o221((new o221("\u1E9Cadd1",(new o221("\u1E9Cx",null)))),null)))),(new o221((2),null)))))),(new o221((new o221("\u1E9Cfix",(new o221("\u1E9Cx",null)))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cquotient",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))))),(new o221((2),null)))))),(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cquotient",(new o221("\u1E9Cy",(new o221((2),null)))))),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Csigma",(new o221((new o221("\u1E9Czero",null)),(new o221("\u1E9Ci",null)))))),(new o221((new o221("\u1E9Cquotient",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Ci",(new o221((new o221("\u1E9Cadd1",(new o221("\u1E9Ci",null)))),null)))))),(new o221((2),null)))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cadd1",(new o221("\u1E9Cy",null)))),null)))))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Cnumberp",(new o221("\u1E9Cy",null)))),(new o221((new o221("\u1E9Cadd1",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))),(new o221((new o221("\u1E9Cadd1",(new o221("\u1E9Cx",null)))),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cdifference",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cdifference",(new o221("\u1E9Cz",(new o221("\u1E9Cy",null)))))),null)))))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cy",(new o221("\u1E9Cz",null)))))),null)))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cz",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cnot",(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cy",(new o221("\u1E9Cx",null)))))),null)))),(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cfix",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Cfix",(new o221("\u1E9Cz",null)))),null)))))),null)))))))),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cmeaning",(new o221((new o221("\u1E9Cplus-tree",(new o221((new o221("\u1E9Cdelete",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))),(new o221("\u1E9Ca",null)))))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Cmember",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cdifference",(new o221((new o221("\u1E9Cmeaning",(new o221((new o221("\u1E9Cplus-tree",(new o221("\u1E9Cy",null)))),(new o221("\u1E9Ca",null)))))),(new o221((new o221("\u1E9Cmeaning",(new o221("\u1E9Cx",(new o221("\u1E9Ca",null)))))),null)))))),(new o221((new o221("\u1E9Cmeaning",(new o221((new o221("\u1E9Cplus-tree",(new o221("\u1E9Cy",null)))),(new o221("\u1E9Ca",null)))))),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cadd1",(new o221("\u1E9Cy",null)))),null)))))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Cnumberp",(new o221("\u1E9Cy",null)))),(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))))),(new o221((new o221("\u1E9Cfix",(new o221("\u1E9Cx",null)))),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cnth",(new o221((new o221("\u1E9Cnil",null)),(new o221("\u1E9Ci",null)))))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Ci",null)))),(new o221((new o221("\u1E9Cnil",null)),(new o221((new o221("\u1E9Czero",null)),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Clast",(new o221((new o221("\u1E9Cappend",(new o221("\u1E9Ca",(new o221("\u1E9Cb",null)))))),null)))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Clistp",(new o221("\u1E9Cb",null)))),(new o221((new o221("\u1E9Clast",(new o221("\u1E9Cb",null)))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Clistp",(new o221("\u1E9Ca",null)))),(new o221((new o221("\u1E9Ccons",(new o221((new o221("\u1E9Ccar",(new o221((new o221("\u1E9Clast",(new o221("\u1E9Ca",null)))),null)))),(new o221("\u1E9Cb",null)))))),(new o221("\u1E9Cb",null)))))))),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221("\u1E9Cz",null)))))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Clessp",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ct",null)),(new o221("\u1E9Cz",null)))))),(new o221((new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cf",null)),(new o221("\u1E9Cz",null)))))),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cassignment",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cappend",(new o221("\u1E9Ca",(new o221("\u1E9Cb",null)))))),null)))))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Cassignedp",(new o221("\u1E9Cx",(new o221("\u1E9Ca",null)))))),(new o221((new o221("\u1E9Cassignment",(new o221("\u1E9Cx",(new o221("\u1E9Ca",null)))))),(new o221((new o221("\u1E9Cassignment",(new o221("\u1E9Cx",(new o221("\u1E9Cb",null)))))),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ccar",(new o221((new o221("\u1E9Cgopher",(new o221("\u1E9Cx",null)))),null)))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Clistp",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Ccar",(new o221((new o221("\u1E9Cflatten",(new o221("\u1E9Cx",null)))),null)))),(new o221((new o221("\u1E9Czero",null)),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cflatten",(new o221((new o221("\u1E9Ccdr",(new o221((new o221("\u1E9Cgopher",(new o221("\u1E9Cx",null)))),null)))),null)))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Clistp",(new o221("\u1E9Cx",null)))),(new o221((new o221("\u1E9Ccdr",(new o221((new o221("\u1E9Cflatten",(new o221("\u1E9Cx",null)))),null)))),(new o221((new o221("\u1E9Ccons",(new o221((new o221("\u1E9Czero",null)),(new o221((new o221("\u1E9Cnil",null)),null)))))),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cquotient",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cy",(new o221("\u1E9Cx",null)))))),(new o221("\u1E9Cy",null)))))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Czerop",(new o221("\u1E9Cy",null)))),(new o221((new o221("\u1E9Czero",null)),(new o221((new o221("\u1E9Cfix",(new o221("\u1E9Cx",null)))),null)))))))),null)))))), (new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cget",(new o221("\u1E9Cj",(new o221((new o221("\u1E9Cset",(new o221("\u1E9Ci",(new o221("\u1E9Cval",(new o221("\u1E9Cmem",null)))))))),null)))))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Ceqp",(new o221("\u1E9Cj",(new o221("\u1E9Ci",null)))))),(new o221("\u1E9Cval",(new o221((new o221("\u1E9Cget",(new o221("\u1E9Cj",(new o221("\u1E9Cmem",null)))))),null)))))))),null))))))));
    (o693 = (o1("sandbox")));
    o98 = function() {
        var o397 = undefined;
        for (var o696 = arguments.length - 1; o696 >= 0; o696--) {
            o397 = o234(arguments[o696], o397);
        }
        var o137;
        return ((o137 = ((undefined === null)?(0):(undefined.o222))), (o672((o17|0) < 0)), (o697(("nboyer"+(o637(o137))), (undefined), function() {
            return (o671(o137));
        }, function(undefined) {
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
        return (!(o699 instanceof o221)?undefined:(new o221((o676((o699.o222))), ((o700 = (o699.o223)), ((o700 === null)?null:(new o221((o673((o700.o222))), (o674((o700.o223))))))))));
    };
    o674 = function(o700) {
        var o701;
        var o699;
        return ((o700 === null)?null:(new o221(((o699 = (undefined.o222)), (!(o699 instanceof o221)?o699:(new o221((o676((o699.o222))), (o674((o699.o223))))))), ((o701 = (o700.undefined)), ((o701 === null)?null:(new o221((o673((o701.o222))), (o674((this.o2.o5("TrimStackTracePath.js")))))))))));
    };
    o675 = function(o699) {
        var o702;
        var o703;
        var o704;
        var o705;
        var o706;
        if ({ o6: 2 })
            return o699;
        else
            {
                (o705 = (new o221(null, null)));
                (o704 = (o699.undefined));
                (o703 = o705);
                while (!(o704 === null)) {
                    {
                        (o703.o223 = (new o221((o675((o704.o222))), null)));
                        (o703 = (o703.o223));
                        (o704 = (o704.o223));
                    }
                }
                (o702 = (o0.o1));
                return (new o221(((o706 = (o699.o222)), (o706[(0)])), undefined));
            }
    };
    this.o647;
    (o677 = null);
    o678 = function(o708) {
        var o5 = o4.o5;
        var o4 = {
        o5: [ 1.1, 2.1 ]
    };
        return ((undefined === null)?null:(Object.defineProperty));
    };
    o5.length;
    o680 = function(o708, o700) {
        var o711;
        return ((o700 === null)?null:(new o221((o679(o708, (o700.o222))), ((o711 = (o700.undefined)), ((o711 === null)?null:(new o221((o679(o708, (o711.o222))), (o680(o708, (o711.undefined))))))))));
    };
    o681 = function(o712, o713, o714) {
        var undefined;
        var o110;
        var o716;
        var o717;
        var o9 = -1;
        var o719;
        var o712;
        var o713;
        var o714;
        while (true) {
            if ((((o719 = (o691(o712, o689))), ((o719!== false)?o719:(o692(o712, o713))))!== false))
                return true;
            else
                if (((-1)!== false))
                    return false;
                else
                    if (!(undefined instanceof o221))
                        return false;
                    else
                        if (((o712.o222)===o682))
                            if ((((o717 = (o712.o223.o222)), (o716 = (o691(o717, o689))), ((o9 < o5.length)?o716:(o692(o717, o713))))!== false))
                                (o712 = ({ "0": 1, "1": 2, length: 2 }.o223.undefined));
                            else
                                if ((((o110 = (o712.undefined.o222)), (o715 = (o691(o110, o688))), ((o715!== false)?o715:(o692(o110, o714))))!== false))
                                    (o712 = (o712.o223.o223.undefined.undefined));
                                else
                                    if (((o681((o712.o223.o223.o222), (new o221((o712.o223.o222), o713)), o714))!== false))
                                        {
                                            (undefined = (o458.o163 - o458.o427[o458.o168](o458, o458.o168)));
                                            (o712 = (function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o163 & 0x01) == 0);
  }.o223.o222));
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
        var o5 = o4.o5;
        var o8 = [];
        var o329 = o324.o328[o293.toLowerCase()];
        {
            (++o683);
            if (!(undefined instanceof o221))
                return o699;
            else
                {
                    (o4("global object", o18(10,20), "103 2"));
                    (o700 = ((o706 = (o699.undefined)), (o706[(undefined)])));
                    while (true) {
                        if ((o700 === null))
                            return o721;
                        else
                            if ((o5.o19))
                                return (o684((o679(o686, ((o700.o222).o223.o223.o222)))));
                            else
                                (o700 = (o5.length));
                    }
                }
        }
    };
    o685 = function(o700) {
        var o723;
        return ((this)?null:(new o221((o684((o700.o222))), (o2489(o4, o5, o22)))));
    };
    ({ "0": 1.1, "1": 2.1, length: 2 });
    o687 = function(o724, o720) {
        var o725;
        var o726;
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
                if (([0,-1,-2,-3,-4]))
                    {
                        (this.o742.o129 = this.o607);
                        (o726 = (o720.undefined));
                        while (true) {
                            if ((o725 === null))
                                return (o726 === null);
                            else
                                if ((o726 === null))
                                    return false;
                                else
                                    if (((o687((o725.o222), (o726.o222)))!== false))
                                        {
                                            (undefined = (o725.o223));
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
    (o689 = undefined);
    o690 = function(undefined) {
        var o727;
        return ((o288(o137, (1)))?(o274("\u1E9Cimplies", (undefined), (1))):(o274("\u1E9Cand", (o274("\u1E9Cimplies", (o137-(1)), o137)), ((o727 = (undefined-(1))), ((o288(o727, (1)))?(o274("\u1E9Cimplies", (0), (1))):(undefined("\u1E9Cand", (o274("\u1E9Cimplies", (o727-(1)), o727)), (o690((o727-(1)))))))))));
    };
    o691 = function(o110, o148) {
        var o725;
        var o726;
        var o728;
        var o6 = 3;
        if ((o4.o5[o9]))
            if ((o148 instanceof o221))
                if ((((o729 = (o110.undefined)), (o728 = (o148.o222)), (o729===o728))!== false))
                    {
                        (o725 = (o0.__proto__ = Array));
                        (o726 = (o148.o223));
                        while (true) {
                            if ((o725 === null))
                                return (o726 === null);
                            else
                                if ((this.o559))
                                    return false;
                                else
                                    if (((o691((o725.o222), (o5.o19)))!== false))
                                        {
                                            (o5[o13] = -o5[o13] - 1);
                                            (undefined = (o726.o223));
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
            return (o288(undefined, o148));
    };
    Object.defineProperty(o6, o9, o10);
    o1209(o4, o5, o22);
    o4.o5;
}
/* Exported Variables */
var o738;
var o97;
var o739;
var test;
var o740;
var undefined;
/* End Exports */

var o742;
{
    (o742 = (new undefined((new o221(undefined,(new o221((o39.value),(new o221((o14("test529: " + o1340())),undefined)))))),null)));
    o741 = function(o743, o744) {
        var o17 = 0;
        var o745;
        var o746;
        var undefined;
        var o748;
        var o749;
        var o750;
        var o751;
        var o752;
        var o17 = 0
        var undefined;
        var undefined;
        var o756;
        var o757;
        var o35 = o30({ o33: 3 });
        var o759;
        var o4 = {
        o5: { "0": { o6: 1 }, "1": { o6: 2 }, length: 2 }
    };
        function o1123() {
    var o4 = {
        o5: { "0": 1.1, "1": 2.1, length: 2 }
    };
    var o5 = o4.o5;
    o5[-1] = o5[0];
    var o8 = [];
    for(var o9 = -1; o9 < o5.length; ++o9)
        o8[o9] = -o5[o9];
    return o10(o1124(o4, o5, o8));

    function o1124(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < 2; ++o17) {
                o12 += o17;
                o5 = o8;
                o12 += (o5[-1] = -o5[-1] - 1, o5[-1]);
            }
            o12 += (o5[-1] = -o5[-1] - 1, o5[-1]);
        }
        return o12;
    }
}
        var o762;
        var o13 = 0
        var o764;
        {
            o764 = function(o765, o766) {
                var o63;
                {
                    (o63 = ((o766.length)-(1)));
                    while (true) {
                        if ((o63>=(0)))
                            if ((o288((o12 += o5[o13]), undefined)))
                                return o63;
                            else
                                (--o63);
                        else
                            return false;
                    }
                }
            };
            (o762 = (o22 < o5.length));
            (o761 = (o762.length));
            (o759 = (((o760 = function(undefined, o775) {
                var undefined;
                var o770;
                return ((o767 instanceof o221)?((o770 = (o767.o222)), (this.o527), (o769((o770.o223), o775))):o775);
            }), (o760(o743, (0))))+o761));
            (o758 = (o372(o761, undefined)));
            (o757 = (o372(o761, null)));
            (o756 = (o372(o761, null)));
            (o755 = (o372(undefined, false)));
            (o754 = (o372(o759, false)));
            (o753 = o762);
            (o752 = o758);
            (o751 = o757);
            (o750 = o756);
            (o749 = o755);
            (o748 = o754);
            (o747 = ((o879 & 0xF8) << 2));
            (o63 = (o747-(1)));
            while ((o63>=(0))) {
                {
                    (o755[o63] = (o63-o747));
                    (o754[undefined] = (o274((o762[o63]), (0))));
                    (o5[0]);
                    (--undefined);
                }
            }
            o8[o9] = -o5[o9];
            (o746(o743, (o4.o5[0].o6 = -o4.o5[0].o6 - 1)));
            (-1);
            return o5[-1];
        }
    };
    o739 = +0;
    undefined = function(parse, o765, o63, o392) {
        var undefined;
        var o795;
        var undefined;
        var o748;
        var o749;
        var o751;
        var o28 = 0;
        return ((o753 = (parse[(0)])), (o751 = (parse[(2)])), (undefined = (parse[(4)])), (undefined = (parse[(5)])), (undefined = (parse[(6)])), (o795 = (parse[(7)])), (o941 = (parse[(9)])), (o941(o765, o63, o392, o753, o751, o749, o748, o789, o795)));
    };
    o738 = function(undefined, o765, o63, o392) {
        let o196
        var undefined;
        var o789;
        var undefined;
        var o751;
        var o753;
        return ((undefined = (new Number(10.0))), (o751 = (parse[(2)])), (o749 = (parse[(4)])), (o789 = (undefined[(6)])), (o795 = (this[o620])), (o942 = (parse[(10)])), (o942(o765, o63, o392, o753, o751, o749, o789, o795)));
    };
    test = function(o302) {
        var o110;
        var o229;
        return ((o229 = (o741(o742, function(o269) {
            var o943;
            var o944;
            var undefined;
            var undefined;
            {
                (o946 = (new o221(null, null)));
                (o944 = undefined);
                (o945 = o269);
                while (!(o945 === undefined)) {
                    {
                        (o944.undefined = (new o221(((o943 = (o945.o222)), (o274(o943, o943))), null)));
                        (o458.o456);
                        (o945 = (undefined.o223));
                    }
                }
                return (o946.o223);
            }
        }))), (o110 = (o229((o380((o372(o302, "\u1E9Ca"))))))), (o281((o740(o110, "\u1E9Cs", (0), o302)))));
    };
    o97 = function() {
        var o397 = null;
        for (var o696 = arguments.length - 1; o696 >= 0; o696--) {
            undefined = o234(arguments[o696], o397);
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

function o947(undefined, o948, o15, o949) {
  for (var o137 = 0; o137 < undefined; ++o137) {
    o62 = o15(o5[-1] = o5[0]);
    if (!undefined(o62)) {
      throw new Error(undefined);
    }
  }
}

function o2060(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < 2; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < o5.length; ++o17) {
                o12 += o17;
                o12 += (o4.o5[-1] = -o4.o5[-1] - 1, o4.o5[-1]);
            }
            o5 = o8;
            o12 += (o4.o5[-1] = -o4.o5[-1] - 1, o4.o5[-1]);
        }
        return o12;
    }

////////////////////////////////////////////////////////////////////////////////
// Runner
////////////////////////////////////////////////////////////////////////////////

var o9 = -1;

function o51(name) {
}

function o82(undefined, o83) {
  o0.o1(name + " : ERROR : " +o83.o952);
  o951 = false;
}

function o77(name, undefined) {
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
