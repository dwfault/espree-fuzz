/*
==============================================================================
LLVM Release License
==============================================================================
University of Illinois/NCSA
Open Source License

Copyright (c) 2003, 2004, 2005 University of Illinois at Urbana-Champaign.
All rights reserved.

Developed by:

    LLVM Team

    University of Illinois at Urbana-Champaign

    http://llvm.org/

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal with
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

    * Redistributions of source code must retain the above copyright notice,
        this list of conditions and the following disclaimers.

    * Redistributions in binary form must reproduce the above copyright notice,
        this list of conditions and the following disclaimers in the
        documentation and/or other materials provided with the distribution.

    * Neither the names of the LLVM Team, University of Illinois at
        Urbana-Champaign, nor the names of its contributors may be used to
        endorse or promote products derived from this Software without specific
        prior written permission.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
CONTRIBUTORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS WITH THE
SOFTWARE.

Copyright (C) 2014 Apple Inc. All rights reserved.
        
Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:
1. Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.
        
THIS SOFTWARE IS PROVIDED BY APPLE INC. ``AS IS'' AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE INC. OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
//OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.  
*/

var o1128 = 0;

try {
if (typeof (o1) === "undefined") {
    var o494
}
}catch(e){}
var o63;

var o949 = new o950();
try {
this.o391[0xFF22] = function (o421, o768, o70) {try {
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
  };
}catch(e){}


function o9(e) {
    try {
o1.entries("### SCORE: " + (100 * o0 / o10));
}catch(e){}
}

var o82 = 0;
try {
o11.o12 = o1("msScrollTranslation");
}catch(e){}

var o14 = o11.o12.o13();

////////////////////////////////////////////////////////////////////////////////
// Test
////////////////////////////////////////////////////////////////////////////////

// The Module object: Our interface to the outside world. We import
// and export values on it, and do the work to get that through
// closure compiler if necessary. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to do an eval in order to handle the closure compiler
// case, where this code here is minified but Module was defined
// elsewhere (e.g. case 4 above). We also need to check if Module
// already exists (e.g. case 3 above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module;
try {
if (!Module) try {
Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');
}catch(e){}
}catch(e){}

// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var o15 = {};
try {
for (var o4=new Array(10) in Module) {
    try {
if (Module.hasOwnProperty(key)) {
        try {
o15[key] = Module[key];
}catch(e){}
    }
}catch(e){}
}
}catch(e){}

// The environment setup code below is customized to use Module.
// *** Environment setup code ***
var o16 = typeof o17 === 'object' && typeof require === 'function';
var map = new Map();
var o58=new stdlib.Uint32Array(buffer);
var o22 = {};

try {
if (o16) {
    // Expose functionality in the same simple way that the shells work
    // Note that we pollute the global namespace here, otherwise we break in node
    try {
if (!Module['print']) try {
Module['print'] = function print(o23) {
        try {
o17['stdout'].write(o23 + '\n');
}catch(e){}
    };
}catch(e){}
}catch(e){}
    try {
if (!Module['printErr']) try {
Module['printErr'] = function o24(o23) {
        try {
o17['stderr'].write(o23 + '\n');
}catch(e){}
    };
}catch(e){}
}catch(e){}

    var o25 = require('fs');
    var o26 = require('path');

    try {
Module['read'] = function o27(o28, o29) {
        try {
o28 = o26['normalize'](o28);
}catch(e){}
        var o30 = o25['readFileSync'](o28);
        // The path is absolute if the normalized version is the same as the resolved.
        try {
if (!o30 && o28 != o26['resolve'](o28)) {
            try {
o28 = o31.join(o32, '..', 'src', o28);
}catch(e){}
            try {
o30 = o25['readFileSync'](o28);
}catch(e){}
        }
}catch(e){}
        try {
if (o30 && !o29) try {
o30 = o30.toString();
}catch(e){}
}catch(e){}
        try {
return o30;
}catch(e){}
    };
}catch(e){}

    try {
Module['readBinary'] = function o33(o28) {
        try {
return Module['read'](o28, true)
}catch(e){}
    };
}catch(e){}

    try {
Module['load'] = function load(o34) {
        try {
o35(o27(o34));
}catch(e){}
    };
}catch(e){}

    try {
Module['arguments'] = o17['argv'].slice(2);
}catch(e){}

    try {
o36['exports'] = Module;
}catch(e){}
} else try {
if (o22) {
    try {
if (!Module['print']) try {
Module['print'] = print;
}catch(e){}
}catch(e){}
    try {
if (typeof o24 != 'undefined') try {
Module['printErr'] = o24;
}catch(e){}
}catch(e){} // not present in v8 or older sm

    try {
if (typeof o27 != 'undefined') {
        try {
Module['read'] = o27;
}catch(e){}
    } else {
        try {
Module['read'] = function o27() {
            try {
throw 'no read() available (jsc?)'
}catch(e){}
        };
}catch(e){}
    }
}catch(e){}

    try {
Module['readBinary'] = function o33(o34) {
        try {
return o27(o34, 'binary');
}catch(e){}
    };
}catch(e){}

    try {
if (typeof o37 != 'undefined') {
        try {
Module['arguments'] = o37;
}catch(e){}
    } else try {
if (typeof arguments != 'undefined') {
        try {
Module['arguments'] = arguments;
}catch(e){}
    }
}catch(e){}
}catch(e){}

    try {
this['Module'] = Module;
}catch(e){}

    try {
eval("if (typeof gc === 'function' && gc.toString().indexOf('[native code]') > 0) var gc = undefined");
}catch(e){} // wipe out the SpiderMonkey shell 'gc' function, which can confuse closure (uses it as a minified name, and it is then initted to a non-falsey value unexpectedly)
} else try {
if (o18 || o20) {
    try {
Module['read'] = function o27(o38) {
        var o39 = new o40();
        try {
o39.o41('GET', o38, false);
}catch(e){}
        try {
o39.o42(null);
}catch(e){}
        try {
return o39.o43;
}catch(e){}
    };
}catch(e){}

    try {
if (typeof arguments != 'undefined') {
        try {
Module['arguments'] = arguments;
}catch(e){}
    }
}catch(e){}

    try {
if (typeof o44 !== 'undefined') {
        try {
if (!Module['print']) try {
Module['print'] = function print(o23) {
            try {
o44.o45(o23);
}catch(e){}
        };
}catch(e){}
}catch(e){}
        try {
if (!Module['printErr']) try {
Module['printErr'] = function o24(o23) {
            try {
o44.o45(o23);
}catch(e){}
        };
}catch(e){}
}catch(e){}
    } else {
        // Probably a worker, and without console.log. We can do very little here...
        var o46 = false;
        try {
if (!Module['print']) try {
Module['print'] = (o46 && (typeof (o47) !== "undefined") ? (function (o23) {
            try {
o47(o23);
}catch(e){}
        }) : (function (o23) {
            // self.postMessage(x); // enable this if you want stdout to be sent as messages
        }));
}catch(e){}
}catch(e){}
    }
}catch(e){}

    try {
if (o18) {
        try {
this['Module'] = Module;
}catch(e){}
    } else {
        try {
Module['load'] = o21;
}catch(e){}
    }
}catch(e){}
} else {
    // Unreachable because SHELL is dependant on the others
    try {
throw 'Unknown runtime environment. Where are we?';
}catch(e){}
}
}catch(e){}
}catch(e){}
}catch(e){}

function o35(o23) {
    try {
eval.call(null, o23);
}catch(e){}
}
try {
if (!Module['load'] == 'undefined' && Module['read']) {
    try {
Module['load'] = function load(o34) {
        try {
o35(Module['read'](o34));
}catch(e){}
    };
}catch(e){}
}
}catch(e){}
try {
if (!Module['print']) {
    try {
Module['print'] = function () {};
}catch(e){}
}
}catch(e){}
try {
if (!Module['printErr']) {
    try {
Module['printErr'] = Module['print'];
}catch(e){}
}
}catch(e){}
try {
if (!Module['arguments']) {
    try {
Module['arguments'] = [];
}catch(e){}
}
}catch(e){}
// *** Environment setup code ***

// Closure helpers
try {
Module.print = Module['print'];
}catch(e){}
try {
Module.o24 = Module['printErr'];
}catch(e){}

// Callbacks
try {
Module['preRun'] = [];
}catch(e){}
try {
Module['postRun'] = [];
}catch(e){}

// Merge back in the overrides
try {
for (var key in o15) {
    try {
if (o15.hasOwnProperty(key)) {
        try {
Module[key] = o15[key];
}catch(e){}
    }
}catch(e){}
}
}catch(e){}



// === Auto-generated preamble library stuff ===

//========================================
// Runtime code shared with compiler
//========================================

var o48 = {
    o49: function () {
        try {
return o50;
}catch(e){}
    },
    o51: function (o52) {
        try {
o50 = o52;
}catch(e){}
    },
    o53: function (target, o54) {
        try {
o54 = o54 || 4;
}catch(e){}
        try {
if (o54 == 1) try {
return target;
}catch(e){}
}catch(e){}
        try {
if (o55(target) && o55(o54)) {
            try {
return Math.ceil(target / o54) * o54;
}catch(e){}
        } else try {
if (o55(o54) && o56(o54)) {
            try {
return '(((' + target + ')+' + (o54 - 1) + ')&' + -o54 + ')';
}catch(e){}
        }
}catch(e){}
}catch(e){}
        try {
return 'Math.ceil((' + target + ')/' + o54 + ')*' + o54;
}catch(e){}
    },
    o57: function (type) {
        try {
return type in o48.o58 || type in o48.o59;
}catch(e){}
    },
    o60: function o60(type) {
        try {
return type[type.length - 1] == '*';
}catch(e){}
    },
    o61: function o61(type) {
        try {
if (o60(type)) try {
return false;
}catch(e){}
}catch(e){}
        try {
if (o62(type)) try {
return true;
}catch(e){}
}catch(e){}
        try {
if (/<?\{ ?[^}]* ?\}>?/.test(type)) try {
return true;
}catch(e){}
}catch(e){} // { i32, i8 } etc. - anonymous struct types
        // See comment in isStructPointerType()
        try {
return type[0] == '%';
}catch(e){}
    },
    o58: {
        "i1": 0,
        "i8": 0,
        "i16": 0,
        "i32": 0,
        "i64": 0
    },
    o59: {
        "float": 0,
        "double": 0
    },
    o63: function (o23, o64) {
        var o65 = (o23 | 0) | (o64 | 0);
        var o66 = (Math.o67(o23 / 4294967296) | Math.o67(o64 / 4294967296)) * 4294967296;
        try {
return o65 + o66;
}catch(e){}
    },
    o68: function (o23, o64) {
        var o65 = (o23 | 0) & (o64 | 0);
        var o66 = (Math.o67(o23 / 4294967296) & Math.o67(o64 / 4294967296)) * 4294967296;
        try {
return o65 + o66;
}catch(e){}
    },
    o69: function (o23, o64) {
        var o65 = (o23 | 0) ^ (o64 | 0);
        var o66 = (Math.o67(o23 / 4294967296) ^ Math.o67(o64 / 4294967296)) * 4294967296;
        try {
return o65 + o66;
}catch(e){}
    },
    o70: function (type) {
        try {
switch (type) {
        case 'i1':
        case 'i8':
            try {
return 1;
}catch(e){}
        case 'i16':
            try {
return 2;
}catch(e){}
        case 'i32':
            try {
return 4;
}catch(e){}
        case 'i64':
            try {
return 8;
}catch(e){}
        case 'float':
            try {
return 4;
}catch(e){}
        case 'double':
            try {
return 8;
}catch(e){}
        default:
            {
                try {
if (type[type.length - 1] === '*') {
                    try {
return o48.o71;
}catch(e){} // A pointer
                } else try {
if (type[0] === 'i') {
                    var o72 = parseInt(type.substr(1));
                    try {
o73(o72 % 8 === 0);
}catch(e){}
                    try {
return o72 / 8;
}catch(e){}
                } else {
                    try {
return 0;
}catch(e){}
                }
}catch(e){}
}catch(e){}
            }
        }
}catch(e){}
    },
    o74: function (type) {
        try {
return Math.o75(o48.o70(type), o48.o71);
}catch(e){}
    },
    o76: function o76(o77, o78) {
        var o79 = {};
        try {
if (o78) {
            try {
return o77.filter(function (o80) {
                try {
if (o79[o80[o78]]) try {
return false;
}catch(e){}
}catch(e){}
                try {
o79[o80[o78]] = true;
}catch(e){}
                try {
return true;
}catch(e){}
            });
}catch(e){}
        } else {
            try {
return o77.filter(function (o80) {
                try {
if (o79[o80]) try {
return false;
}catch(e){}
}catch(e){}
                try {
o79[o80] = true;
}catch(e){}
                try {
return true;
}catch(e){}
            });
}catch(e){}
        }
}catch(e){}
    },
    set: function set() {
        var o81 = typeof arguments[0] === 'object' ? arguments[0] : arguments;
        var o30 = {};
        try {
for (var o82 = 0; o82 < o81.length; o82++) {
            try {
o30[o81[o82]] = 0;
}catch(e){}
        }
}catch(e){}
        try {
return o30;
}catch(e){}
    },
    o83: 8,
    o84: function (type, o85, o86) {
        // we align i64s and doubles on 64-bit boundaries, unlike x86
        try {
if (!o86 && (type == 'i64' || type == 'double')) try {
return 8;
}catch(e){}
}catch(e){}
        try {
if (!type) try {
return Math.o87(o85, 8);
}catch(e){}
}catch(e){} // align structures internally to 64 bits
        try {
return Math.o87(o85 || (type ? o48.o74(type) : 0), o48.o71);
}catch(e){}
    },
    o88: function o88(type) {
        try {
type.o89 = 0;
}catch(e){}
        try {
type.o90 = 0;
}catch(e){}
        var o91 = [];
        var o92 = -1;
        var index = 0;
        try {
type.o93 = type.o94.map(function (o95) {
            try {
index++;
}catch(e){}
            var o85, o90;
            try {
if (o48.o57(o95) || o48.o60(o95)) {
                try {
o85 = o48.o70(o95);
}catch(e){} // pack char; char; in structs, also char[X]s.
                try {
o90 = o48.o84(o95, o85);
}catch(e){}
            } else try {
if (o48.o61(o95)) {
                try {
if (o95[1] === '0') {
                    // this is [0 x something]. When inside another structure like here, it must be at the end,
                    // and it adds no size
                    // XXX this happens in java-nbody for example... assert(index === type.fields.length, 'zero-length in the middle!');
                    try {
o85 = 0;
}catch(e){}
                    try {
if (o96.o97[o95]) {
                        try {
o90 = o48.o84(null, o96.o97[o95].o90);
}catch(e){}
                    } else {
                        try {
o90 = type.o90 || o71;
}catch(e){}
                    }
}catch(e){}
                } else {
                    try {
o85 = o96.o97[o95].o89;
}catch(e){}
                    try {
o90 = o48.o84(null, o96.o97[o95].o90);
}catch(e){}
                }
}catch(e){}
            } else try {
if (o95[0] == 'b') {
                // bN, large number field, like a [N x i8]
                try {
o85 = o95.substr(1) | 0;
}catch(e){}
                try {
o90 = 1;
}catch(e){}
            } else try {
if (o95[0] === '<') {
                // vector type
                try {
o85 = o90 = o96.o97[o95].o89;
}catch(e){} // fully aligned
            } else try {
if (o95[0] === 'i') {
                // illegal integer field, that could not be legalized because it is an internal structure field
                // it is ok to have such fields, if we just use them as markers of field size and nothing more complex
                try {
o85 = o90 = parseInt(o95.substr(1)) / 8;
}catch(e){}
                try {
o73(o85 % 1 === 0, 'cannot handle non-byte-size field ' + o95);
}catch(e){}
            } else {
                try {
o73(false, 'invalid type for calculateStructAlignment');
}catch(e){}
            }
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
            try {
if (type.o98) try {
o90 = 1;
}catch(e){}
}catch(e){}
            try {
type.o90 = Math.o75(type.o90, o90);
}catch(e){}
            var o99 = o48.o100(type.o89, o90); // if necessary, place this on aligned memory
            try {
type.o89 = o99 + o85;
}catch(e){}
            try {
if (o92 >= 0) {
                try {
o91.push(o99 - o92);
}catch(e){}
            }
}catch(e){}
            try {
o92 = o99;
}catch(e){}
            try {
return o99;
}catch(e){}
        });
}catch(e){}
        try {
if (type.o101 && type.o101[0] === '[') {
            // arrays have 2 elements, so we get the proper difference. then we scale here. that way we avoid
            // allocating a potentially huge array for [999999 x i8] etc.
            try {
type.o89 = parseInt(type.o101.substr(1)) * type.o89 / 2;
}catch(e){}
        }
}catch(e){}
        try {
type.o89 = o48.o100(type.o89, type.o90);
}catch(e){}
        try {
if (o91.length == 0) {
            try {
type.o102 = type.o89;
}catch(e){}
        } else try {
if (o48.o76(o91).length == 1) {
            try {
type.o102 = o91[0];
}catch(e){}
        }
}catch(e){}
}catch(e){}
        try {
type.o103 = (type.o102 != 1);
}catch(e){}
        try {
return type.o93;
}catch(e){}
    },
    o104: function (o105, o106, o107) {
        var type, o108;
        try {
if (o106) {
            try {
o107 = o107 || 0;
}catch(e){}
            try {
type = (typeof o96 === 'undefined' ? o48.o109 : o96.o97)[o106];
}catch(e){}
            try {
if (!type) try {
return null;
}catch(e){}
}catch(e){}
            try {
if (type.o94.length != o105.length) {
                try {
o24('Number of named fields must match the type for ' + o106 + ': possibly duplicate struct names. Cannot return structInfo');
}catch(e){}
                try {
return null;
}catch(e){}
            }
}catch(e){}
            try {
o108 = type.o93;
}catch(e){}
        } else {
            var type = {
                o94: o105.map(function (o80) {
                    try {
return o80[0]
}catch(e){}
                })
            };
            try {
o108 = o48.o88(type);
}catch(e){}
        }
}catch(e){}
        var o30 = {
            o110: type.o89
        };
        try {
if (o106) {
            try {
o105.forEach(function (o80, o82) {
                try {
if (typeof o80 === 'string') {
                    try {
o30[o80] = o108[o82] + o107;
}catch(e){}
                } else {
                    // embedded struct
                    var key;
                    try {
for (var o111 in o80) try {
key = o111;
}catch(e){}
}catch(e){}
                    try {
o30[key] = o48.o104(o80[key], type.o94[o82], o108[o82]);
}catch(e){}
                }
}catch(e){}
            });
}catch(e){}
        } else {
            try {
o105.forEach(function (o80, o82) {
                try {
o30[o80[1]] = o108[o82];
}catch(e){}
            });
}catch(e){}
        }
}catch(e){}
        try {
return o30;
}catch(e){}
    },
    o112: function (o113, o114, o81) {
        try {
if (o81 && o81.length) {
            try {
if (!o81.splice) try {
o81 = Array.prototype.slice.call(o81);
}catch(e){}
}catch(e){}
            try {
o81.splice(0, 0, o114);
}catch(e){}
            try {
return Module['dynCall_' + o113].apply(null, o81);
}catch(e){}
        } else {
            try {
return Module['dynCall_' + o113].call(null, o114);
}catch(e){}
        }
}catch(e){}
    },
    o115: [],
    addFunction: function (o116) {
        try {
for (var o82 = 0; o82 < o48.o115.length; o82++) {
            try {
if (!o48.o115[o82]) {
                try {
o48.o115[o82] = o116;
}catch(e){}
                try {
return 2 * (1 + o82);
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
throw 'Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.';
}catch(e){}
    },
    o117: function (index) {
        try {
o48.o115[(index - 2) / 2] = null;
}catch(e){}
    },
    o118: function (o119, o120) {
        // code is a constant string on the heap, so we can cache these
        try {
if (!o48.o121) try {
o48.o121 = {};
}catch(e){}
}catch(e){}
        var o116 = o48.o121[o119];
        try {
if (o116) try {
return o116;
}catch(e){}
}catch(e){}
        var o81 = [];
        try {
for (var o82 = 0; o82 < o120; o82++) {
            try {
o81.push(String.fromCharCode(36) + o82);
}catch(e){} // $0, $1 etc
        }
}catch(e){}
        try {
o119 = o122(o119);
}catch(e){}
        try {
if (o119[0] === '"') {
            // tolerate EM_ASM("..code..") even though EM_ASM(..code..) is correct
            try {
if (o119.indexOf('"', 1) === o119.length - 1) {
                try {
o119 = o119.substr(1, o119.length - 2);
}catch(e){}
            } else {
                // something invalid happened, e.g. EM_ASM("..code($0)..", input)
                try {
abort('invalid EM_ASM input |' + o119 + '|. Please use EM_ASM(..code..) (no quotes) or EM_ASM({ ..code($0).. }, input) (to input values)');
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
return o48.o121[o119] = eval('(function(' + o81.join(',') + '){ ' + o119 + ' })');
}catch(e){} // new Function does not allow upvars in node
    },
    o123: function (o124) {
        try {
if (!o48.o123.o125) try {
o48.o123.o125 = {};
}catch(e){}
}catch(e){}
        try {
if (!o48.o123.o125[o124]) {
            try {
o48.o123.o125[o124] = 1;
}catch(e){}
            try {
Module.o24(o124);
}catch(e){}
        }
}catch(e){}
    },
    o126: {},
    o127: function (o116, o113) {
        try {
o73(o113);
}catch(e){}
        try {
if (!o48.o126[o116]) {
            try {
o48.o126[o116] = function o128() {
                try {
return o48.o112(o113, o116, arguments);
}catch(e){}
            };
}catch(e){}
        }
}catch(e){}
        try {
return o48.o126[o116];
}catch(e){}
    },
    o129: function () {
        var buffer = [];
        var o130 = 0;
        try {
this.o131 = function (o119) {
            try {
o119 = o119 & 0xFF;
}catch(e){}

            try {
if (buffer.length == 0) {
                try {
if ((o119 & 0x80) == 0x00) { // 0xxxxxxx
                    try {
return String.fromCharCode(o119);
}catch(e){}
                }
}catch(e){}
                try {
buffer.push(o119);
}catch(e){}
                try {
if ((o119 & 0xE0) == 0xC0) { // 110xxxxx
                    try {
o130 = 1;
}catch(e){}
                } else try {
if ((o119 & 0xF0) == 0xE0) { // 1110xxxx
                    try {
o130 = 2;
}catch(e){}
                } else { // 11110xxx
                    try {
o130 = 3;
}catch(e){}
                }
}catch(e){}
}catch(e){}
                try {
return '';
}catch(e){}
            }
}catch(e){}

            try {
if (o130) {
                try {
buffer.push(o119);
}catch(e){}
                try {
o130--;
}catch(e){}
                try {
if (o130 > 0) try {
return '';
}catch(e){}
}catch(e){}
            }
}catch(e){}

            var o132 = buffer[0];
            var o133 = buffer[1];
            var o134 = buffer[2];
            var o135 = buffer[3];
            var o30;
            try {
if (buffer.length == 2) {
                try {
o30 = String.fromCharCode(((o132 & 0x1F) << 6) | (o133 & 0x3F));
}catch(e){}
            } else try {
if (buffer.length == 3) {
                try {
o30 = String.fromCharCode(((o132 & 0x0F) << 12) | ((o133 & 0x3F) << 6) | (o134 & 0x3F));
}catch(e){}
            } else {
                // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                var o136 = ((o132 & 0x07) << 18) | ((o133 & 0x3F) << 12) |
                    ((o134 & 0x3F) << 6) | (o135 & 0x3F);
                try {
o30 = String.fromCharCode(
                    Math.floor((o136 - 0x10000) / 0x400) + 0xD800, (o136 - 0x10000) % 0x400 + 0xDC00);
}catch(e){}
            }
}catch(e){}
}catch(e){}
            try {
buffer.length = 0;
}catch(e){}
            try {
return o30;
}catch(e){}
        }
}catch(e){}
        try {
this.o137 = function o137(o138) {
            try {
o138 = unescape(encodeURIComponent(o138));
}catch(e){}
            var o30 = [];
            try {
for (var o82 = 0; o82 < o138.length; o82++) {
                try {
o30.push(o138.charCodeAt(o82));
}catch(e){}
            }
}catch(e){}
            try {
return o30;
}catch(e){}
        }
}catch(e){}
    },
    o139: function (name) {
        try {
throw 'You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work';
}catch(e){}
    },
    o140: function (o85) {
        var o30 = o50;
        try {
o50 = (o50 + o85) | 0;
}catch(e){}
        try {
o50 = (((o50) + 7) & -8);
}catch(e){}
        try {
return o30;
}catch(e){}
    },
    o141: function (o85) {
        var o30 = o142;
        try {
o142 = (o142 + o85) | 0;
}catch(e){}
        try {
o142 = (((o142) + 7) & -8);
}catch(e){}
        try {
return o30;
}catch(e){}
    },
    o143: function (o85) {
        var o30 = o144;
        try {
o144 = (o144 + o85) | 0;
}catch(e){}
        try {
o144 = (((o144) + 7) & -8);
}catch(e){}
        try {
if (o144 >= o145) try {
o146();
}catch(e){}try {

}catch(e){};
}catch(e){}
        try {
return o30;
}catch(e){}
    },
    o100: function (o85, o54) {
        var o30 = o85 = Math.ceil((o85) / (o54 ? o54 : 8)) * (o54 ? o54 : 8);
        try {
return o30;
}catch(e){}
    },
    o147: function (o148, o149, o150) {
        var o30 = (o150 ? ((+((o148 >>> 0))) + ((+((o149 >>> 0))) * (+4294967296))) : ((+((o148 >>> 0))) + ((+((o149 | 0))) * (+4294967296))));
        try {
return o30;
}catch(e){}
    },
    o151: 8,
    o71: 4,
    o152: 0
}


try {
Module['Runtime'] = o48;
}catch(e){}




//========================================
// Runtime essentials
//========================================

var o153 = 0; // Used in checking for thrown exceptions.

var o154 = false; // whether we are quitting the application. no code should run after this. set in exit() and abort()
var o155 = 0;

var o156 = 0;
// tempInt is used for 32-bit signed values or smaller. tempBigInt is used
// for 32-bit unsigned values or more than 32 bits. TODO: audit all uses of tempInt
var o157, o158, o159, o160, o161, o162, o163, o164, o165, o166, o167, o168, o169;
var o170, o171;
var o172, o173, o174, o175, o176, o177, o178, o179, o180, o181;

function o73(o182, o124) {
    try {
if (!o182) {
        try {
abort('Assertion failed: ' + o124);
}catch(e){}
    }
}catch(e){}
}

var o183 = this;

// C calling interface. A convenient way to call C functions (in C files, or
// defined with extern "C").
//
// Note: LLVM optimizations can inline and remove functions, after which you will not be
//       able to call them. Closure can also do so. To avoid that, add your function to
//       the exports using something like
//
//         -s EXPORTED_FUNCTIONS='["_main", "_myfunc"]'
//
// @param ident      The name of the C function (note that C++ functions will be name-mangled - use extern "C")
// @param returnType The return type of the function, one of the JS types 'number', 'string' or 'array' (use 'number' for any C pointer, and
//                   'array' for JavaScript arrays and typed arrays; note that arrays are 8-bit).
// @param argTypes   An array of the types of arguments for the function (if there are no arguments, this can be ommitted). Types are as in returnType,
//                   except that 'array' is not possible (there is no way for us to know the length of the array)
// @param args       An array of the arguments to the function, as native JS values (as in returnType)
//                   Note that string arguments will be stored on the stack (the JS string will become a C string on the stack).
// @return           The return value, as a native JS value (as in returnType)
function o184(o78, o185, o186, o81) {
    try {
return o187(o188(o78), o185, o186, o81);
}catch(e){}
}
try {
Module["ccall"] = o184;
}catch(e){}

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function o188(o78) {
    try {
try {
        var o116 = Module['_' + o78]; // closure exported function
        try {
if (!o116) try {
o116 = eval('_' + o78);
}catch(e){}
}catch(e){} // explicit lookup
    } catch (o189) {}
}catch(e){}
    try {
o73(o116, 'Cannot call unknown function ' + o78 + ' (perhaps LLVM optimizations or closure removed it?)');
}catch(e){}
    try {
return o116;
}catch(e){}
}

// Internal function that does a C call using a function, not an identifier
function o187(o116, o185, o186, o81) {
    var o190 = 0;

    function o191(value, type) {
        try {
if (type == 'string') {
            try {
if (value === null || value === undefined || value === 0) try {
return 0;
}catch(e){}
}catch(e){} // null string
            try {
value = o192(value);
}catch(e){}
            try {
type = 'array';
}catch(e){}
        }
}catch(e){}
        try {
if (type == 'array') {
            try {
if (!o190) try {
o190 = o48.o49();
}catch(e){}
}catch(e){}
            var o30 = o48.o140(value.length);
            try {
o193(value, o30);
}catch(e){}
            try {
return o30;
}catch(e){}
        }
}catch(e){}
        try {
return value;
}catch(e){}
    }

    function o194(value, type) {
        try {
if (type == 'string') {
            try {
return o122(value);
}catch(e){}
        }
}catch(e){}
        try {
o73(type != 'array');
}catch(e){}
        try {
return value;
}catch(e){}
    }
    var o82 = 0;
    var o195 = o81 ? o81.map(function (o196) {
        try {
return o191(o196, o186[o82++]);
}catch(e){}
    }) : [];
    var o30 = o194(o116.apply(null, o195), o185);
    try {
if (o190) try {
o48.o51(o190);
}catch(e){}
}catch(e){}
    try {
return o30;
}catch(e){}
}

// Returns a native JS wrapper for a C function. This is similar to ccall, but
// returns a function you can call repeatedly in a normal way. For example:
//
//   var my_function = cwrap('my_c_function', 'number', ['number', 'number']);
//   alert(my_function(5, 22));
//   alert(my_function(99, 12));
//
function o197(o78, o185, o186) {
    var o116 = o188(o78);
    try {
return function () {
        try {
return o187(o116, o185, o186, Array.prototype.slice.call(arguments));
}catch(e){}
    }
}catch(e){}
}
try {
Module["cwrap"] = o197;
}catch(e){}

// Sets a value in memory in a dynamic way at run-time. Uses the
// type data. This is the same as makeSetValue, except that
// makeSetValue is done at compile-time and generates the needed
// code then, whereas this function picks the right code at
// run-time.
// Note that setValue and getValue only do *aligned* writes and reads!
// Note that ccall uses JS types as for defining types, while setValue and
// getValue need LLVM types ('i8', 'i32') - this is a lower-level operation
function o198(o114, value, type, o199) {
    try {
type = type || 'i8';
}catch(e){}
    try {
if (type.charAt(type.length - 1) === '*') try {
type = 'i32';
}catch(e){}
}catch(e){} // pointers are 32-bit
    try {
switch (type) {
    case 'i1':
        try {
o200[(o114)] = value;
}catch(e){}
        try {
break;
}catch(e){}
    case 'i8':
        try {
o200[(o114)] = value;
}catch(e){}
        try {
break;
}catch(e){}
    case 'i16':
        try {
o201[((o114) >> 1)] = value;
}catch(e){}
        try {
break;
}catch(e){}
    case 'i32':
        try {
o202[((o114) >> 2)] = value;
}catch(e){}
        try {
break;
}catch(e){}
    case 'i64':
        try {
(o170 = [value >>> 0, (o168 = value, (+(o203(o168))) >= (+1) ? (o168 > (+0) ? ((o204((+(o205((o168) / (+4294967296)))), (+4294967295))) | 0) >>> 0 : (~~((+(o206((o168 - +(((~~(o168))) >>> 0)) / (+4294967296)))))) >>> 0) : 0)], o202[((o114) >> 2)] = o170[0], o202[(((o114) + (4)) >> 2)] = o170[1]);
}catch(e){}
        try {
break;
}catch(e){}
    case 'float':
        try {
o207[((o114) >> 2)] = value;
}catch(e){}
        try {
break;
}catch(e){}
    case 'double':
        try {
o208[((o114) >> 3)] = value;
}catch(e){}
        try {
break;
}catch(e){}
    default:
        try {
abort('invalid type for setValue: ' + type);
}catch(e){}
    }
}catch(e){}
}
try {
Module['setValue'] = o198;
}catch(e){}

// Parallel to setValue.
function o209(o114, type, o199) {
    try {
type = type || 'i8';
}catch(e){}
    try {
if (type.charAt(type.length - 1) === '*') try {
type = 'i32';
}catch(e){}
}catch(e){} // pointers are 32-bit
    try {
switch (type) {
    case 'i1':
        try {
return o200[(o114)];
}catch(e){}
    case 'i8':
        try {
return o200[(o114)];
}catch(e){}
    case 'i16':
        try {
return o201[((o114) >> 1)];
}catch(e){}
    case 'i32':
        try {
return o202[((o114) >> 2)];
}catch(e){}
    case 'i64':
        try {
return o202[((o114) >> 2)];
}catch(e){}
    case 'float':
        try {
return o207[((o114) >> 2)];
}catch(e){}
    case 'double':
        try {
return o208[((o114) >> 3)];
}catch(e){}
    default:
        try {
abort('invalid type for setValue: ' + type);
}catch(e){}
    }
}catch(e){}
    try {
return null;
}catch(e){}
}
try {
Module['getValue'] = o209;
}catch(e){}

var o210 = 0; // Tries to use _malloc()
var o211 = 1; // Lives for the duration of the current function call
var o212 = 2; // Cannot be freed
var o213 = 3; // Cannot be freed except through sbrk
var o214 = 4; // Do not allocate
try {
Module['ALLOC_NORMAL'] = o210;
}catch(e){}
try {
Module['ALLOC_STACK'] = o211;
}catch(e){}
try {
Module['ALLOC_STATIC'] = o212;
}catch(e){}
try {
Module['ALLOC_DYNAMIC'] = o213;
}catch(e){}
try {
Module['ALLOC_NONE'] = o214;
}catch(e){}

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data, or a number. If a number, then the size of the block to allocate,
//        in *bytes* (note that this is sometimes confusing: the next parameter does not
//        affect this!)
// @types: Either an array of types, one for each byte (or 0 if no type at that position),
//         or a single type which is used for the entire block. This only matters if there
//         is initial data - if @slab is a number, then this does not matter at all and is
//         ignored.
// @allocator: How to allocate memory, see ALLOC_*
function o215(o216, o97, o217, o114) {
    var o218, o85;
    try {
if (typeof o216 === 'number') {
        try {
o218 = true;
}catch(e){}
        try {
o85 = o216;
}catch(e){}
    } else {
        try {
o218 = false;
}catch(e){}
        try {
o85 = o216.length;
}catch(e){}
    }
}catch(e){}

    var o219 = typeof o97 === 'string' ? o97 : null;

    var o30;
    try {
if (o217 == o214) {
        try {
o30 = o114;
}catch(e){}
    } else {
        try {
o30 = [o220, o48.o140, o48.o141, o48.o143][o217 === undefined ? o212 : o217](Math.o75(o85, o219 ? 1 : o97.length));
}catch(e){}
    }
}catch(e){}

    try {
if (o218) {
        var o114 = o30,
            o221;
        try {
o73((o30 & 3) == 0);
}catch(e){}
        try {
o221 = o30 + (o85 & ~3);
}catch(e){}
        try {
for (; o114 < o221; o114 += 4) {
            try {
o202[((o114) >> 2)] = 0;
}catch(e){}
        }
}catch(e){}
        try {
o221 = o30 + o85;
}catch(e){}
        try {
while (o114 < o221) {
            try {
o200[((o114++) | 0)] = 0;
}catch(e){}
        }
}catch(e){}
        try {
return o30;
}catch(e){}
    }
}catch(e){}

    try {
if (o219 === 'i8') {
        try {
if (o216.subarray || o216.slice) {
            try {
o222.set(o216, o30);
}catch(e){}
        } else {
            try {
o222.set(new Uint8Array(o216), o30);
}catch(e){}
        }
}catch(e){}
        try {
return o30;
}catch(e){}
    }
}catch(e){}

    var o82 = 0,
        type, o223, o224;
    try {
while (o82 < o85) {
        var o99 = o216[o82];

        try {
if (typeof o99 === 'function') {
            try {
o99 = o48.o225(o99);
}catch(e){}
        }
}catch(e){}

        try {
type = o219 || o97[o82];
}catch(e){}
        try {
if (type === 0) {
            try {
o82++;
}catch(e){}
            try {
continue;
}catch(e){}
        }
}catch(e){}

        try {
if (type == 'i64') try {
type = 'i32';
}catch(e){}
}catch(e){} // special case: we have one i32 here, and one i32 later

        try {
o198(o30 + o82, o99, type);
}catch(e){}

        // no need to look up size unless type changes, so cache it
        try {
if (o224 !== type) {
            try {
o223 = o48.o70(type);
}catch(e){}
            try {
o224 = type;
}catch(e){}
        }
}catch(e){}
        try {
o82 += o223;
}catch(e){}
    }
}catch(e){}

    try {
return o30;
}catch(e){}
}
try {
Module['allocate'] = o215;
}catch(e){}

function o122(o114, /* optional */ length) {
    // TODO: use TextDecoder
    // Find the length, and check for UTF while doing so
    var o226 = false;
    var o227;
    var o82 = 0;
    try {
while (1) {
        try {
o227 = o222[(((o114) + (o82)) | 0)];
}catch(e){}
        try {
if (o227 >= 128) try {
o226 = true;
}catch(e){}
        else try {
if (o227 == 0 && !length) try {
break;
}catch(e){}
}catch(e){}
}catch(e){}
        try {
o82++;
}catch(e){}
        try {
if (length && o82 == length) try {
break;
}catch(e){}
}catch(e){}
    }
}catch(e){}
    try {
if (!length) try {
length = o82;
}catch(e){}
}catch(e){}

    var o30 = '';

    try {
if (!o226) {
        var o228 = 1024; // split up into chunks, because .apply on a huge string can overflow the stack
        var o99;
        try {
while (length > 0) {
            try {
o99 = String.fromCharCode.apply(String, o222.subarray(o114, o114 + Math.o87(length, o228)));
}catch(e){}
            try {
o30 = o30 ? o30 + o99 : o99;
}catch(e){}
            try {
o114 += o228;
}catch(e){}
            try {
length -= o228;
}catch(e){}
        }
}catch(e){}
        try {
return o30;
}catch(e){}
    }
}catch(e){}

    var o229 = new o48.o129();
    try {
for (o82 = 0; o82 < length; o82++) {
        try {
o227 = o222[(((o114) + (o82)) | 0)];
}catch(e){}
        try {
o30 += o229.o131(o227);
}catch(e){}
    }
}catch(e){}
    try {
return o30;
}catch(e){}
}
try {
Module['Pointer_stringify'] = o122;
}catch(e){}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.
function o230(o114) {
    var o82 = 0;

    var o231 = '';
    try {
while (1) {
        var o232 = o201[(((o114) + (o82 * 2)) >> 1)];
        try {
if (o232 == 0)
            try {
return o231;
}catch(e){}
}catch(e){}
        try {
++o82;
}catch(e){}
        // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
        try {
o231 += String.fromCharCode(o232);
}catch(e){}
    }
}catch(e){}
}
try {
Module['UTF16ToString'] = o230;
}catch(e){}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16LE form. The copy will require at most (str.length*2+1)*2 bytes of space in the HEAP.
function o233(o231, o234) {
    try {
for (var o82 = 0; o82 < o231.length; ++o82) {
        // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
        var o232 = o231.charCodeAt(o82); // possibly a lead surrogate
        try {
o201[(((o234) + (o82 * 2)) >> 1)] = o232;
}catch(e){}
    }
}catch(e){}
    // Null-terminate the pointer to the HEAP.
    try {
o201[(((o234) + (o231.length * 2)) >> 1)] = 0;
}catch(e){}
}
try {
Module['stringToUTF16'] = o233;
}catch(e){}

// Given a pointer 'ptr' to a null-terminated UTF32LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.
function o235(o114) {
    var o82 = 0;

    var o231 = '';
    try {
while (1) {
        var o236 = o202[(((o114) + (o82 * 4)) >> 2)];
        try {
if (o236 == 0)
            try {
return o231;
}catch(e){}
}catch(e){}
        try {
++o82;
}catch(e){}
        // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
        try {
if (o236 >= 0x10000) {
            var o237 = o236 - 0x10000;
            try {
o231 += String.fromCharCode(0xD800 | (o237 >> 10), 0xDC00 | (o237 & 0x3FF));
}catch(e){}
        } else {
            try {
o231 += String.fromCharCode(o236);
}catch(e){}
        }
}catch(e){}
    }
}catch(e){}
}
try {
Module['UTF32ToString'] = o235;
}catch(e){}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32LE form. The copy will require at most (str.length+1)*4 bytes of space in the HEAP,
// but can use less, since str.length does not return the number of characters in the string, but the number of UTF-16 code units in the string.
function o238(o231, o234) {
    var o239 = 0;
    try {
for (var o240 = 0; o240 < o231.length; ++o240) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
        var o232 = o231.charCodeAt(o240); // possibly a lead surrogate
        try {
if (o232 >= 0xD800 && o232 <= 0xDFFF) {
            var o241 = o231.charCodeAt(++o240);
            try {
o232 = 0x10000 + ((o232 & 0x3FF) << 10) | (o241 & 0x3FF);
}catch(e){}
        }
}catch(e){}
        try {
o202[(((o234) + (o239 * 4)) >> 2)] = o232;
}catch(e){}
        try {
++o239;
}catch(e){}
    }
}catch(e){}
    // Null-terminate the pointer to the HEAP.
    try {
o202[(((o234) + (o239 * 4)) >> 2)] = 0;
}catch(e){}
}
try {
Module['stringToUTF32'] = o238;
}catch(e){}

function o242(o116) {
    var o82 = 3;
    // params, etc.
    var o243 = {
        'v': 'void',
        'b': 'bool',
        'c': 'char',
        's': 'short',
        'i': 'int',
        'l': 'long',
        'f': 'float',
        'd': 'double',
        'w': 'wchar_t',
        'a': 'signed char',
        'h': 'unsigned char',
        't': 'unsigned short',
        'j': 'unsigned int',
        'm': 'unsigned long',
        'x': 'long long',
        'y': 'unsigned long long',
        'z': '...'
    };
    var o244 = [];
    var o245 = true;

    function o47(o23) {
        //return;
        try {
if (o23) try {
Module.print(o23);
}catch(e){}
}catch(e){}
        try {
Module.print(o116);
}catch(e){}
        var o246 = '';
        try {
for (var o247 = 0; o247 < o82; o247++) try {
o246 += ' ';
}catch(e){}
}catch(e){}
        try {
Module.print(o246 + '^');
}catch(e){}
    }

    function o248() {
        try {
o82++;
}catch(e){}
        try {
if (o116[o82] === 'K') try {
o82++;
}catch(e){}
}catch(e){} // ignore const
        var o249 = [];
        try {
while (o116[o82] !== 'E') {
            try {
if (o116[o82] === 'S') { // substitution
                try {
o82++;
}catch(e){}
                var next = o116.indexOf('_', o82);
                var o250 = o116.substring(o82, next) || 0;
                try {
o249.push(o244[o250] || '?');
}catch(e){}
                try {
o82 = next + 1;
}catch(e){}
                try {
continue;
}catch(e){}
            }
}catch(e){}
            try {
if (o116[o82] === 'C') { // constructor
                try {
o249.push(o249[o249.length - 1]);
}catch(e){}
                try {
o82 += 2;
}catch(e){}
                try {
continue;
}catch(e){}
            }
}catch(e){}
            var o85 = parseInt(o116.substr(o82));
            var o246 = o85.toString().length;
            try {
if (!o85 || !o246) {
                try {
o82--;
}catch(e){}
                try {
break;
}catch(e){}
            }
}catch(e){} // counter i++ below us
            var o99 = o116.substr(o82 + o246, o85);
            try {
o249.push(o99);
}catch(e){}
            try {
o244.push(o99);
}catch(e){}
            try {
o82 += o246 + o85;
}catch(e){}
        }
}catch(e){}
        try {
o82++;
}catch(e){} // skip E
        try {
return o249;
}catch(e){}
    }

    function parse(o251, o252, o253) { // main parser
        try {
o252 = o252 || Infinity;
}catch(e){}
        var o30 = '',
            o254 = [];

        function o255() {
            try {
return '(' + o254.join(', ') + ')';
}catch(e){}
        }
        var name;
        try {
if (o116[o82] === 'N') {
            // namespaced N-E
            try {
name = o248().join('::');
}catch(e){}
            try {
o252--;
}catch(e){}
            try {
if (o252 === 0) try {
return o251 ? [name] : name;
}catch(e){}
}catch(e){}
        } else {
            // not namespaced
            try {
if (o116[o82] === 'K' || (o245 && o116[o82] === 'L')) try {
o82++;
}catch(e){}
}catch(e){} // ignore const and first 'L'
            var o85 = parseInt(o116.substr(o82));
            try {
if (o85) {
                var o246 = o85.toString().length;
                try {
name = o116.substr(o82 + o246, o85);
}catch(e){}
                try {
o82 += o246 + o85;
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
o245 = false;
}catch(e){}
        try {
if (o116[o82] === 'I') {
            try {
o82++;
}catch(e){}
            var o256 = parse(true);
            var o257 = parse(true, 1, true);
            try {
o30 += o257[0] + ' ' + name + '<' + o256.join(', ') + '>';
}catch(e){}
        } else {
            try {
o30 = name;
}catch(e){}
        }
}catch(e){}
        try {
o258: try {
while (o82 < o116.length && o252-- > 0) {
            //dump('paramLoop');
            var o259 = o116[o82++];
            try {
if (o259 in o243) {
                try {
o254.push(o243[o259]);
}catch(e){}
            } else {
                try {
switch (o259) {
                case 'P':
                    try {
o254.push(parse(true, 1, true)[0] + '*');
}catch(e){}
                    try {
break;
}catch(e){} // pointer
                case 'R':
                    try {
o254.push(parse(true, 1, true)[0] + '&');
}catch(e){}
                    try {
break;
}catch(e){} // reference
                case 'L':
                    { // literal
                        try {
o82++;
}catch(e){} // skip basic type
                        var o260 = o116.indexOf('E', o82);
                        var o85 = o260 - o82;
                        try {
o254.push(o116.substr(o82, o85));
}catch(e){}
                        try {
o82 += o85 + 2;
}catch(e){} // size + 'EE'
                        try {
break;
}catch(e){}
                    }
                case 'A':
                    { // array
                        var o85 = parseInt(o116.substr(o82));
                        try {
o82 += o85.toString().length;
}catch(e){}
                        try {
if (o116[o82] !== '_') try {
throw '?';
}catch(e){}
}catch(e){}
                        try {
o82++;
}catch(e){} // skip _
                        try {
o254.push(parse(true, 1, true)[0] + ' [' + o85 + ']');
}catch(e){}
                        try {
break;
}catch(e){}
                    }
                case 'E':
                    try {
break o258;
}catch(e){}
                default:
                    try {
o30 += '?' + o259;
}catch(e){}
                    try {
break o258;
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
}catch(e){}
        try {
if (!o253 && o254.length === 1 && o254[0] === 'void') try {
o254 = [];
}catch(e){}
}catch(e){} // avoid (void)
        try {
return o251 ? o254 : o30 + o255();
}catch(e){}
    }
    try {
try {
        // Special-case the entry point, since its name differs from other name mangling.
        try {
if (o116 == 'Object._main' || o116 == '_main') {
            try {
return 'main()';
}catch(e){}
        }
}catch(e){}
        try {
if (typeof o116 === 'number') try {
o116 = o122(o116);
}catch(e){}
}catch(e){}
        try {
if (o116[0] !== '_') try {
return o116;
}catch(e){}
}catch(e){}
        try {
if (o116[1] !== '_') try {
return o116;
}catch(e){}
}catch(e){} // C function
        try {
if (o116[2] !== 'Z') try {
return o116;
}catch(e){}
}catch(e){}
        try {
switch (o116[3]) {
        case 'n':
            try {
return 'operator new()';
}catch(e){}
        case 'd':
            try {
return 'operator delete()';
}catch(e){}
        }
}catch(e){}
        try {
return parse();
}catch(e){}
    } catch (o189) {
        try {
return o116;
}catch(e){}
    }
}catch(e){}
}

function o261(o124) {
    try {
return o124.replace(/__Z[\w\d_]+/g, function (o23) {
        var o64 = o242(o23);
        try {
return o23 === o64 ? o23 : (o23 + ' [' + o64 + ']')
}catch(e){}
    });
}catch(e){}
}

function o262() {
    var o190 = new Error().o190;
    try {
return o190 ? o261(o190) : '(no stack trace available)';
}catch(e){} // Stack trace is not available at least on IE10 and Safari 6.
}

// Memory management

var o263 = 4096;

function o264(o23) {
    try {
return (o23 + 4095) & -4096;
}catch(e){}
}

var o265;
var o200, o222, o201, o266, o202, o267, o207, o208;

var o268 = 0,
    o142 = 0,
    o269 = false; // static area
var o270 = 0,
    o50 = 0,
    o271 = 0; // stack area
var o272 = 0,
    o144 = 0; // dynamic area handled by sbrk

function o146() {
    try {
abort('Cannot enlarge memory arrays. Either (1) compile with -s TOTAL_MEMORY=X with X higher than the current value ' + o145 + ', (2) compile with ALLOW_MEMORY_GROWTH which adjusts the size at runtime but prevents some optimizations, or (3) set Module.TOTAL_MEMORY before the program runs.');
}catch(e){}
}

var o273 = Module['TOTAL_STACK'] || 5242880;
var o145 = Module['TOTAL_MEMORY'] || 16777216;
var o274 = Module['FAST_MEMORY'] || 2097152;

var o275 = 4096;
try {
while (o275 < o145 || o275 < 2 * o273) {
    try {
if (o275 < 16 * 1024 * 1024) {
        try {
o275 *= 2;
}catch(e){}
    } else {
        try {
o275 += 16 * 1024 * 1024
}catch(e){}
    }
}catch(e){}
}
}catch(e){}
try {
if (o275 !== o145) {
    try {
Module.o24('increasing TOTAL_MEMORY to ' + o275 + ' to be more reasonable');
}catch(e){}
    try {
o145 = o275;
}catch(e){}
}
}catch(e){}

// Initialize the runtime's memory
// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
try {
o73(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && !!(new Int32Array(1)['subarray']) && !!(new Int32Array(1)['set']),
    'JS engine does not provide full typed array support');
}catch(e){}

var buffer = new ArrayBuffer(o145);
try {
o200 = new Int8Array(buffer);
}catch(e){}
try {
o201 = new Int16Array(buffer);
}catch(e){}
try {
o202 = new Int32Array(buffer);
}catch(e){}
try {
o222 = new Uint8Array(buffer);
}catch(e){}
try {
o266 = new Uint16Array(buffer);
}catch(e){}
try {
o267 = new Uint32Array(buffer);
}catch(e){}
try {
o207 = new Float32Array(buffer);
}catch(e){}
try {
o208 = new Float64Array(buffer);
}catch(e){}

// Endianness check (note: assumes compiler arch was little-endian)
try {
o202[0] = 255;
}catch(e){}
try {
o73(o222[0] === 255 && o222[3] === 0, 'Typed arrays 2 must be run on a little-endian system');
}catch(e){}

try {
Module['HEAP'] = o265;
}catch(e){}
try {
Module['HEAP8'] = o200;
}catch(e){}
try {
Module['HEAP16'] = o201;
}catch(e){}
try {
Module['HEAP32'] = o202;
}catch(e){}
try {
Module['HEAPU8'] = o222;
}catch(e){}
try {
Module['HEAPU16'] = o266;
}catch(e){}
try {
Module['HEAPU32'] = o267;
}catch(e){}
try {
Module['HEAPF32'] = o207;
}catch(e){}
try {
Module['HEAPF64'] = o208;
}catch(e){}

function o276(o277) {
    try {
while (o277.length > 0) {
        var o278 = o277.shift();
        try {
if (typeof o278 == 'function') {
            try {
o278();
}catch(e){}
            try {
continue;
}catch(e){}
        }
}catch(e){}
        var o116 = o278.o116;
        try {
if (typeof o116 === 'number') {
            try {
if (o278.o196 === undefined) {
                try {
o48.o112('v', o116);
}catch(e){}
            } else {
                try {
o48.o112('vi', o116, [o278.o196]);
}catch(e){}
            }
}catch(e){}
        } else {
            try {
o116(o278.o196 === undefined ? null : o278.o196);
}catch(e){}
        }
}catch(e){}
    }
}catch(e){}
}

var o279 = []; // functions called before the runtime is initialized
var o280 = []; // functions called during startup
var o281 = []; // functions called when main() is to be run
var o282 = []; // functions called during shutdown
var o283 = []; // functions called after the runtime has exited

var o284 = false;

function o285() {
    // compatibility - merge in anything from Module['preRun'] at this time
    try {
if (Module['preRun']) {
        try {
if (typeof Module['preRun'] == 'function') try {
Module['preRun'] = [Module['preRun']];
}catch(e){}
}catch(e){}
        try {
while (Module['preRun'].length) {
            try {
o286(Module['preRun'].shift());
}catch(e){}
        }
}catch(e){}
    }
}catch(e){}
    try {
o276(o279);
}catch(e){}
}

function o287() {
    try {
if (o284) try {
return;
}catch(e){}
}catch(e){}
    try {
o284 = true;
}catch(e){}
    try {
o276(o280);
}catch(e){}
}

function o288() {
    try {
o276(o281);
}catch(e){}
}

function o289() {
    try {
o276(o282);
}catch(e){}
}

function o290() {
    // compatibility - merge in anything from Module['postRun'] at this time
    try {
if (Module['postRun']) {
        try {
if (typeof Module['postRun'] == 'function') try {
Module['postRun'] = [Module['postRun']];
}catch(e){}
}catch(e){}
        try {
while (Module['postRun'].length) {
            try {
o291(Module['postRun'].shift());
}catch(e){}
        }
}catch(e){}
    }
}catch(e){}
    try {
o276(o283);
}catch(e){}
}

function o286(o292) {
    try {
o279.unshift(o292);
}catch(e){}
}
try {
Module['addOnPreRun'] = Module.o286 = o286;
}catch(e){}

function o293(o292) {
    try {
o280.unshift(o292);
}catch(e){}
}
try {
Module['addOnInit'] = Module.o293 = o293;
}catch(e){}

function o294(o292) {
    try {
o281.unshift(o292);
}catch(e){}
}
try {
Module['addOnPreMain'] = Module.o294 = o294;
}catch(e){}

function o295(o292) {
    try {
o282.unshift(o292);
}catch(e){}
}
try {
Module['addOnExit'] = Module.o295 = o295;
}catch(e){}

function o291(o292) {
    try {
o283.unshift(o292);
}catch(e){}
}
try {
Module['addOnPostRun'] = Module.o291 = o291;
}catch(e){}

// Tools

// This processes a JS string into a C-line array of numbers, 0-terminated.
// For LLVM-originating strings, see parser.js:parseLLVMString function
function o192(o296, o297, length /* optional */ ) {
    var o30 = (new o48.o129()).o137(o296);
    try {
if (length) {
        try {
o30.length = length;
}catch(e){}
    }
}catch(e){}
    try {
if (!o297) {
        try {
o30.push(0);
}catch(e){}
    }
}catch(e){}
    try {
return o30;
}catch(e){}
}
try {
Module['intArrayFromString'] = o192;
}catch(e){}

function o298(o299) {
    var o30 = [];
    try {
for (var o82 = 0; o82 < o299.length; o82++) {
        var o300 = o299[o82];
        try {
if (o300 > 0xFF) {
            try {
o300 &= 0xFF;
}catch(e){}
        }
}catch(e){}
        try {
o30.push(String.fromCharCode(o300));
}catch(e){}
    }
}catch(e){}
    try {
return o30.join('');
}catch(e){}
}
try {
Module['intArrayToString'] = o298;
}catch(e){}

// Write a Javascript array to somewhere in the heap
function o301(o138, buffer, o297) {
    var o299 = o192(o138, o297);
    var o82 = 0;
    try {
while (o82 < o299.length) {
        var o300 = o299[o82];
        try {
o200[(((buffer) + (o82)) | 0)] = o300;
}catch(e){}
        try {
o82 = o82 + 1;
}catch(e){}
    }
}catch(e){}
}
try {
Module['writeStringToMemory'] = o301;
}catch(e){}

function o193(o299, buffer) {
    try {
for (var o82 = 0; o82 < o299.length; o82++) {
        try {
o200[(((buffer) + (o82)) | 0)] = o299[o82];
}catch(e){}
    }
}catch(e){}
}
try {
Module['writeArrayToMemory'] = o193;
}catch(e){}

function o302(o231, buffer, o297) {
    try {
for (var o82 = 0; o82 < o231.length; o82++) {
        try {
o200[(((buffer) + (o82)) | 0)] = o231.charCodeAt(o82);
}catch(e){}
    }
}catch(e){}
    try {
if (!o297) try {
o200[(((buffer) + (o231.length)) | 0)] = 0;
}catch(e){}
}catch(e){}
}
try {
Module['writeAsciiToMemory'] = o302;
}catch(e){}

function o303(value, o72, o304) {
    try {
if (value >= 0) {
        try {
return value;
}catch(e){}
    }
}catch(e){}
    try {
return o72 <= 32 ? 2 * Math.abs(1 << (o72 - 1)) + value // Need some trickery, since if bits == 32, we are right at the limit of the bits JS uses in bitshifts
        : Math.o305(2, o72) + value;
}catch(e){}
}

function o306(value, o72, o304) {
    try {
if (value <= 0) {
        try {
return value;
}catch(e){}
    }
}catch(e){}
    var o307 = o72 <= 32 ? Math.abs(1 << (o72 - 1)) // abs is needed if bits == 32
        : Math.o305(2, o72 - 1);
    try {
if (value >= o307 && (o72 <= 32 || value > o307)) { // for huge values, we can hit the precision limit and always get true here. so don't do that
        // but, in general there is no perfect solution here. With 64-bit ints, we get rounding and errors
        // TODO: In i64 mode 1, resign the two parts separately and safely
        try {
value = -2 * o307 + value;
}catch(e){} // Cannot bitshift half, as it may be at the limit of the bits JS uses in bitshifts
    }
}catch(e){}
    try {
return value;
}catch(e){}
}

// check for imul support, and also for correctness ( https://bugs.webkit.org/show_bug.cgi?id=126345 )
try {
if (!Math['imul'] || Math['imul'](0xffffffff, 5) !== -5) try {
Math['imul'] = function imul(o247, o308) {
    var o309 = o247 >>> 16;
    var o310 = o247 & 0xffff;
    var o311 = o308 >>> 16;
    var o312 = o308 & 0xffff;
    try {
return (o310 * o312 + ((o309 * o312 + o310 * o311) << 16)) | 0;
}catch(e){}
};
}catch(e){}
}catch(e){}
try {
Math.imul = Math['imul'];
}catch(e){}


var o203 = Math.abs;
var o313 = Math.cos;
var o314 = Math.sin;
var o315 = Math.tan;
var o316 = Math.acos;
var o317 = Math.o318;
var o319 = Math.o320;
var o321 = Math.atan2;
var o322 = Math.o323;
var o324 = Math.o45;
var o325 = Math.sqrt;
var o206 = Math.ceil;
var o205 = Math.floor;
var o326 = Math.o305;
var o327 = Math.imul;
var o328 = Math.fround;
var o204 = Math.o87;

// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// PRE_RUN_ADDITIONS (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var o329 = 0;
var o330 = null;
var o331 = null; // overridden to take different actions when all run dependencies are fulfilled

function o332(o333) {
    try {
o329++;
}catch(e){}
    try {
if (Module['monitorRunDependencies']) {
        try {
Module['monitorRunDependencies'](o329);
}catch(e){}
    }
}catch(e){}
}
try {
Module['addRunDependency'] = o332;
}catch(e){}

function o334(o333) {
    try {
o329--;
}catch(e){}
    try {
if (Module['monitorRunDependencies']) {
        try {
Module['monitorRunDependencies'](o329);
}catch(e){}
    }
}catch(e){}
    try {
if (o329 == 0) {
        try {
if (o330 !== null) {
            try {
o335(o330);
}catch(e){}
            try {
o330 = null;
}catch(e){}
        }
}catch(e){}
        try {
if (o331) {
            var o278 = o331;
            try {
o331 = null;
}catch(e){}
            try {
o278();
}catch(e){} // can add another dependenciesFulfilled
        }
}catch(e){}
    }
}catch(e){}
}
try {
Module['removeRunDependency'] = o334;
}catch(e){}

try {
Module["preloadedImages"] = {};
}catch(e){} // maps url to image data
try {
Module["preloadedAudios"] = {};
}catch(e){} // maps url to audio data


var o336 = null;

// === Body ===




try {
o268 = 8;
}catch(e){}

try {
o142 = o268 + o48.o100(20195);
}catch(e){}
/* global initializers */
try {
o280.push();
}catch(e){}


/* memory initializer */
try {
o215([], "i8", o214, o48.o151);
}catch(e){}




var o337 = o48.o100(o215(12, "i8", o212), 8);

try {
o73(o337 % 8 == 0);
}catch(e){}

function o338(o114) { // functions, because inlining this code increases code size too much

    try {
o200[o337] = o200[o114];
}catch(e){}

    try {
o200[o337 + 1] = o200[o114 + 1];
}catch(e){}

    try {
o200[o337 + 2] = o200[o114 + 2];
}catch(e){}

    try {
o200[o337 + 3] = o200[o114 + 3];
}catch(e){}

}

function o339(o114) {

    try {
o200[o337] = o200[o114];
}catch(e){}

    try {
o200[o337 + 1] = o200[o114 + 1];
}catch(e){}

    try {
o200[o337 + 2] = o200[o114 + 2];
}catch(e){}

    try {
o200[o337 + 3] = o200[o114 + 3];
}catch(e){}

    try {
o200[o337 + 4] = o200[o114 + 4];
}catch(e){}

    try {
o200[o337 + 5] = o200[o114 + 5];
}catch(e){}

    try {
o200[o337 + 6] = o200[o114 + 6];
}catch(e){}

    try {
o200[o337 + 7] = o200[o114 + 7];
}catch(e){}

}


function o220(o340) {
    /* Over-allocate to make sure it is byte-aligned by 8.
     * This will leak memory, but this is only the dummy
     * implementation (replaced by dlmalloc normally) so
     * not an issue.
     */
    var o114 = o48.o143(o340 + 8);
    try {
return (o114 + 8) & 0xFFFFFFF8;
}catch(e){}
}
try {
Module["_malloc"] = o220;
}catch(e){}




var o341 = {
    o342: 1,
    o343: 2,
    o344: 3,
    o345: 4,
    o346: 5,
    o347: 6,
    o348: 7,
    o349: 8,
    o350: 9,
    o351: 10,
    o352: 11,
    o353: 11,
    o354: 12,
    o355: 13,
    o356: 14,
    o357: 15,
    o358: 16,
    o359: 17,
    o360: 18,
    o361: 19,
    o362: 20,
    o363: 21,
    o364: 22,
    o365: 23,
    o366: 24,
    o367: 25,
    o368: 26,
    o369: 27,
    o370: 28,
    o371: 29,
    o372: 30,
    o373: 31,
    o374: 32,
    o375: 33,
    o376: 34,
    o377: 42,
    o378: 43,
    o379: 44,
    o380: 45,
    o381: 46,
    o382: 47,
    o383: 48,
    o384: 49,
    o385: 50,
    o386: 51,
    o387: 35,
    o388: 37,
    o389: 52,
    o390: 53,
    o391: 54,
    o392: 55,
    o393: 56,
    o394: 57,
    o395: 35,
    o396: 59,
    o397: 60,
    o398: 61,
    o399: 62,
    o400: 63,
    o401: 64,
    o402: 65,
    o403: 66,
    o404: 67,
    o405: 68,
    o406: 69,
    o407: 70,
    o408: 71,
    o409: 72,
    o410: 73,
    o411: 74,
    o412: 76,
    o413: 77,
    o414: 78,
    o415: 79,
    o416: 80,
    o417: 81,
    o418: 82,
    o419: 83,
    o420: 38,
    o421: 39,
    o422: 36,
    o423: 40,
    o424: 95,
    o425: 96,
    o426: 104,
    o427: 105,
    o428: 97,
    o429: 91,
    o430: 88,
    o431: 92,
    o432: 108,
    o433: 111,
    o434: 98,
    o435: 103,
    o436: 101,
    o437: 100,
    o438: 110,
    o439: 112,
    o440: 113,
    o441: 115,
    o442: 114,
    o443: 89,
    o444: 90,
    o445: 93,
    o446: 94,
    o447: 99,
    o448: 102,
    o449: 106,
    o450: 107,
    o451: 109,
    o452: 87,
    o453: 122,
    o454: 116,
    o455: 95,
    o456: 123,
    o457: 84,
    o458: 75,
    o459: 125,
    o460: 131,
    o461: 130,
    o462: 86
};

var o463 = {
    0: "Success",
    1: "Not super-user",
    2: "No such file or directory",
    3: "No such process",
    4: "Interrupted system call",
    5: "I/O error",
    6: "No such device or address",
    7: "Arg list too long",
    8: "Exec format error",
    9: "Bad file number",
    10: "No children",
    11: "No more processes",
    12: "Not enough core",
    13: "Permission denied",
    14: "Bad address",
    15: "Block device required",
    16: "Mount device busy",
    17: "File exists",
    18: "Cross-device link",
    19: "No such device",
    20: "Not a directory",
    21: "Is a directory",
    22: "Invalid argument",
    23: "Too many open files in system",
    24: "Too many open files",
    25: "Not a typewriter",
    26: "Text file busy",
    27: "File too large",
    28: "No space left on device",
    29: "Illegal seek",
    30: "Read only file system",
    31: "Too many links",
    32: "Broken pipe",
    33: "Math arg out of domain of func",
    34: "Math result not representable",
    35: "File locking deadlock error",
    36: "File or path name too long",
    37: "No record locks available",
    38: "Function not implemented",
    39: "Directory not empty",
    40: "Too many symbolic links",
    42: "No message of desired type",
    43: "Identifier removed",
    44: "Channel number out of range",
    45: "Level 2 not synchronized",
    46: "Level 3 halted",
    47: "Level 3 reset",
    48: "Link number out of range",
    49: "Protocol driver not attached",
    50: "No CSI structure available",
    51: "Level 2 halted",
    52: "Invalid exchange",
    53: "Invalid request descriptor",
    54: "Exchange full",
    55: "No anode",
    56: "Invalid request code",
    57: "Invalid slot",
    59: "Bad font file fmt",
    60: "Device not a stream",
    61: "No data (for no delay io)",
    62: "Timer expired",
    63: "Out of streams resources",
    64: "Machine is not on the network",
    65: "Package not installed",
    66: "The object is remote",
    67: "The link has been severed",
    68: "Advertise error",
    69: "Srmount error",
    70: "Communication error on send",
    71: "Protocol error",
    72: "Multihop attempted",
    73: "Cross mount point (not really error)",
    74: "Trying to read unreadable message",
    75: "Value too large for defined data type",
    76: "Given log. name not unique",
    77: "f.d. invalid for this operation",
    78: "Remote address changed",
    79: "Can   access a needed shared lib",
    80: "Accessing a corrupted shared lib",
    81: ".lib section in a.out corrupted",
    82: "Attempting to link in too many libs",
    83: "Attempting to exec a shared library",
    84: "Illegal byte sequence",
    86: "Streams pipe error",
    87: "Too many users",
    88: "Socket operation on non-socket",
    89: "Destination address required",
    90: "Message too long",
    91: "Protocol wrong type for socket",
    92: "Protocol not available",
    93: "Unknown protocol",
    94: "Socket type not supported",
    95: "Not supported",
    96: "Protocol family not supported",
    97: "Address family not supported by protocol family",
    98: "Address already in use",
    99: "Address not available",
    100: "Network interface is not configured",
    101: "Network is unreachable",
    102: "Connection reset by network",
    103: "Connection aborted",
    104: "Connection reset by peer",
    105: "No buffer space available",
    106: "Socket is already connected",
    107: "Socket is not connected",
    108: "Can't send after socket shutdown",
    109: "Too many references",
    110: "Connection timed out",
    111: "Connection refused",
    112: "Host is down",
    113: "Host is unreachable",
    114: "Socket already connected",
    115: "Connection already in progress",
    116: "Stale file handle",
    122: "Quota exceeded",
    123: "No medium (in tape drive)",
    125: "Operation canceled",
    130: "Previous owner died",
    131: "State not recoverable"
};


var o464 = 0;

function o465(value) {
    // For convenient setting and returning of errno.
    try {
o202[((o464) >> 2)] = value;
}catch(e){}
    try {
return value;
}catch(e){}
}

var o466 = {
    o467: [],
    o468: function () {
        // https://github.com/kripken/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process['stdin']['setEncoding']('utf8');
        // }
    },
    o469: function () {
        // https://github.com/kripken/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process['stdin']['pause']();
        // }
    },
    o470: function (o471, o472) {
        try {
o466.o467[o471] = {
            input: [],
            o473: [],
            o472: o472
        };
}catch(e){}
        try {
o474.o475(o471, o466.o476);
}catch(e){}
    },
    o476: {
        o41: function (o477) {
            var o478 = o466.o467[o477.o479.o480];
            try {
if (!o478) {
                try {
throw new o474.o481(o341.o361);
}catch(e){}
            }
}catch(e){}
            try {
o477.o478 = o478;
}catch(e){}
            try {
o477.o482 = false;
}catch(e){}
        },
        o483: function (o477) {
            // flush any pending line data
            try {
if (o477.o478.o473.length) {
                try {
o477.o478.o472.o484(o477.o478, 10);
}catch(e){}
            }
}catch(e){}
        },
        o27: function (o477, buffer, o107, length, o485 /* ignored */ ) {
            try {
if (!o477.o478 || !o477.o478.o472.o486) {
                try {
throw new o474.o481(o341.o347);
}catch(e){}
            }
}catch(e){}
            var o487 = 0;
            try {
for (var o82 = 0; o82 < length; o82++) {
                var o488;
                try {
try {
                    try {
o488 = o477.o478.o472.o486(o477.o478);
}catch(e){}
                } catch (o189) {
                    try {
throw new o474.o481(o341.o346);
}catch(e){}
                }
}catch(e){}
                try {
if (o488 === undefined && o487 === 0) {
                    try {
throw new o474.o481(o341.o352);
}catch(e){}
                }
}catch(e){}
                try {
if (o488 === null || o488 === undefined) try {
break;
}catch(e){}
}catch(e){}
                try {
o487++;
}catch(e){}
                try {
buffer[o107 + o82] = o488;
}catch(e){}
            }
}catch(e){}
            try {
if (o487) {
                try {
o477.o479.o489 = Date.o4();
}catch(e){}
            }
}catch(e){}
            try {
return o487;
}catch(e){}
        },
        write: function (o477, buffer, o107, length, o485) {
            try {
if (!o477.o478 || !o477.o478.o472.o484) {
                try {
throw new o474.o481(o341.o347);
}catch(e){}
            }
}catch(e){}
            try {
for (var o82 = 0; o82 < length; o82++) {
                try {
try {
                    try {
o477.o478.o472.o484(o477.o478, buffer[o107 + o82]);
}catch(e){}
                } catch (o189) {
                    try {
throw new o474.o481(o341.o346);
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
if (length) {
                try {
o477.o479.o489 = Date.o4();
}catch(e){}
            }
}catch(e){}
            try {
return o82;
}catch(e){}
        }
    },
    o490: {
        o486: function (o478) {
            try {
if (!o478.input.length) {
                var o488 = null;
                try {
if (o16) {
                    try {
o488 = o17['stdin']['read']();
}catch(e){}
                    try {
if (!o488) {
                        try {
if (o17['stdin']['_readableState'] && o17['stdin']['_readableState']['ended']) {
                            try {
return null;
}catch(e){} // EOF
                        }
}catch(e){}
                        try {
return undefined;
}catch(e){} // no data available
                    }
}catch(e){}
                } else try {
if (typeof o19 != 'undefined' &&
                    typeof o19.o491 == 'function') {
                    // Browser.
                    try {
o488 = o19.o491('Input: ');
}catch(e){} // returns null on cancel
                    try {
if (o488 !== null) {
                        try {
o488 += '\n';
}catch(e){}
                    }
}catch(e){}
                } else try {
if (typeof o492 == 'function') {
                    // Command line.
                    try {
o488 = o492();
}catch(e){}
                    try {
if (o488 !== null) {
                        try {
o488 += '\n';
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){}
}catch(e){}
}catch(e){}
                try {
if (!o488) {
                    try {
return null;
}catch(e){}
                }
}catch(e){}
                try {
o478.input = o192(o488, true);
}catch(e){}
            }
}catch(e){}
            try {
return o478.input.shift();
}catch(e){}
        },
        o484: function (o478, o493) {
            try {
if (o493 === null || o493 === 10) {
                try {
Module['print'](o478.o473.join(''));
}catch(e){}
                try {
o478.o473 = [];
}catch(e){}
            } else {
                try {
o478.o473.push(o466.o229.o131(o493));
}catch(e){}
            }
}catch(e){}
        }
    },
    o494: {
        o484: function (o478, o493) {
            try {
if (o493 === null || o493 === 10) {
                try {
Module['printErr'](o478.o473.join(''));
}catch(e){}
                try {
o478.o473 = [];
}catch(e){}
            } else {
                try {
o478.o473.push(o466.o229.o131(o493));
}catch(e){}
            }
}catch(e){}
        }
    }
};

var o495 = {
    o496: null,
    o497: 1,
    o498: 2,
    o499: 3,
    o500: function (o500) {
        try {
return o495.o501(null, '/', 16384 | 511 /* 0777 */ , 0);
}catch(e){}
    },
    o501: function (o502, name, o503, o471) {
        try {
if (o474.o504(o503) || o474.o505(o503)) {
            // no supported
            try {
throw new o474.o481(o341.o342);
}catch(e){}
        }
}catch(e){}
        try {
if (!o495.o496) {
            try {
o495.o496 = {
                o506: {
                    o479: {
                        o507: o495.o508.o507,
                        o509: o495.o508.o509,
                        o510: o495.o508.o510,
                        o511: o495.o508.o511,
                        o512: o495.o508.o512,
                        o513: o495.o508.o513,
                        o514: o495.o508.o514,
                        o515: o495.o508.o515,
                        o516: o495.o508.o516
                    },
                    o477: {
                        o517: o495.o476.o517
                    }
                },
                o518: {
                    o479: {
                        o507: o495.o508.o507,
                        o509: o495.o508.o509
                    },
                    o477: {
                        o517: o495.o476.o517,
                        o27: o495.o476.o27,
                        write: o495.o476.write,
                        o215: o495.o476.o215,
                        o519: o495.o476.o519
                    }
                },
                link: {
                    o479: {
                        o507: o495.o508.o507,
                        o509: o495.o508.o509,
                        o520: o495.o508.o520
                    },
                    o477: {}
                },
                o521: {
                    o479: {
                        o507: o495.o508.o507,
                        o509: o495.o508.o509
                    },
                    o477: o474.o522
                },
            };
}catch(e){}
        }
}catch(e){}
        var o479 = o474.o501(o502, name, o503, o471);
        try {
if (o474.o523(o479.o503)) {
            try {
o479.o508 = o495.o496.o506.o479;
}catch(e){}
            try {
o479.o476 = o495.o496.o506.o477;
}catch(e){}
            try {
o479.o524 = {};
}catch(e){}
        } else try {
if (o474.o525(o479.o503)) {
            try {
o479.o508 = o495.o496.o518.o479;
}catch(e){}
            try {
o479.o476 = o495.o496.o518.o477;
}catch(e){}
            try {
o479.o524 = [];
}catch(e){}
            try {
o479.o526 = o495.o498;
}catch(e){}
        } else try {
if (o474.o527(o479.o503)) {
            try {
o479.o508 = o495.o496.link.o479;
}catch(e){}
            try {
o479.o476 = o495.o496.link.o477;
}catch(e){}
        } else try {
if (o474.o528(o479.o503)) {
            try {
o479.o508 = o495.o496.o521.o479;
}catch(e){}
            try {
o479.o476 = o495.o496.o521.o477;
}catch(e){}
        }
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
        try {
o479.o489 = Date.o4();
}catch(e){}
        // add the new node to the parent
        try {
if (o502) {
            try {
o502.o524[name] = o479;
}catch(e){}
        }
}catch(e){}
        try {
return o479;
}catch(e){}
    },
    o529: function (o479) {
        try {
if (o479.o526 !== o495.o498) {
            var o524 = o479.o524;
            try {
o479.o524 = Array.prototype.slice.call(o524);
}catch(e){}
            try {
o479.o526 = o495.o498;
}catch(e){}
        }
}catch(e){}
    },
    o508: {
        o507: function (o479) {
            var o530 = {};
            // device numbers reuse inode numbers.
            try {
o530.o471 = o474.o528(o479.o503) ? o479.o333 : 1;
}catch(e){}
            try {
o530.o531 = o479.o333;
}catch(e){}
            try {
o530.o503 = o479.o503;
}catch(e){}
            try {
o530.o532 = 1;
}catch(e){}
            try {
o530.o533 = 0;
}catch(e){}
            try {
o530.o534 = 0;
}catch(e){}
            try {
o530.o480 = o479.o480;
}catch(e){}
            try {
if (o474.o523(o479.o503)) {
                try {
o530.o85 = 4096;
}catch(e){}
            } else try {
if (o474.o525(o479.o503)) {
                try {
o530.o85 = o479.o524.length;
}catch(e){}
            } else try {
if (o474.o527(o479.o503)) {
                try {
o530.o85 = o479.link.length;
}catch(e){}
            } else {
                try {
o530.o85 = 0;
}catch(e){}
            }
}catch(e){}
}catch(e){}
}catch(e){}
            try {
o530.o535 = new Date(o479.o489);
}catch(e){}
            try {
o530.o536 = new Date(o479.o489);
}catch(e){}
            try {
o530.o537 = new Date(o479.o489);
}catch(e){}
            // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
            //       but this is not required by the standard.
            try {
o530.o538 = 4096;
}catch(e){}
            try {
o530.o539 = Math.ceil(o530.o85 / o530.o538);
}catch(e){}
            try {
return o530;
}catch(e){}
        },
        o509: function (o479, o530) {
            try {
if (o530.o503 !== undefined) {
                try {
o479.o503 = o530.o503;
}catch(e){}
            }
}catch(e){}
            try {
if (o530.o489 !== undefined) {
                try {
o479.o489 = o530.o489;
}catch(e){}
            }
}catch(e){}
            try {
if (o530.o85 !== undefined) {
                try {
o495.o529(o479);
}catch(e){}
                var o524 = o479.o524;
                try {
if (o530.o85 < o524.length) try {
o524.length = o530.o85;
}catch(e){}
                else
                    try {
while (o530.o85 > o524.length) try {
o524.push(0);
}catch(e){}
}catch(e){}
}catch(e){}
            }
}catch(e){}
        },
        o510: function (o502, name) {
            try {
throw o474.o540[o341.o343];
}catch(e){}
        },
        o511: function (o502, name, o503, o471) {
            try {
return o495.o501(o502, name, o503, o471);
}catch(e){}
        },
        o512: function (o541, o542, o543) {
            // if we're overwriting a directory at new_name, make sure it's empty.
            try {
if (o474.o523(o541.o503)) {
                var o544;
                try {
try {
                    try {
o544 = o474.o545(o542, o543);
}catch(e){}
                } catch (o189) {}
}catch(e){}
                try {
if (o544) {
                    try {
for (var o82 in o544.o524) {
                        try {
throw new o474.o481(o341.o421);
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            // do the internal rewiring
            try {
delete o541.o502.o524[o541.name];
}catch(e){}
            try {
o541.name = o543;
}catch(e){}
            try {
o542.o524[o543] = o541;
}catch(e){}
            try {
o541.o502 = o542;
}catch(e){}
        },
        o513: function (o502, name) {
            try {
delete o502.o524[name];
}catch(e){}
        },
        o514: function (o502, name) {
            var o479 = o474.o545(o502, name);
            try {
for (var o82 in o479.o524) {
                try {
throw new o474.o481(o341.o421);
}catch(e){}
            }
}catch(e){}
            try {
delete o502.o524[name];
}catch(e){}
        },
        o515: function (o479) {
            var entries = ['.', '..']
            try {
for (var key in o479.o524) {
                try {
if (!o479.o524.hasOwnProperty(key)) {
                    try {
continue;
}catch(e){}
                }
}catch(e){}
                try {
entries.push(key);
}catch(e){}
            }
}catch(e){}
            try {
return entries;
}catch(e){}
        },
        o516: function (o502, o546, o547) {
            var o479 = o495.o501(o502, o546, 511 /* 0777 */ | 40960, 0);
            try {
o479.link = o547;
}catch(e){}
            try {
return o479;
}catch(e){}
        },
        o520: function (o479) {
            try {
if (!o474.o527(o479.o503)) {
                try {
throw new o474.o481(o341.o364);
}catch(e){}
            }
}catch(e){}
            try {
return o479.link;
}catch(e){}
        }
    },
    o476: {
        o27: function (o477, buffer, o107, length, o548) {
            var o524 = o477.o479.o524;
            try {
if (o548 >= o524.length)
                try {
return 0;
}catch(e){}
}catch(e){}
            var o85 = Math.o87(o524.length - o548, length);
            try {
o73(o85 >= 0);
}catch(e){}
            try {
if (o85 > 8 && o524.subarray) { // non-trivial, and typed array
                try {
buffer.set(o524.subarray(o548, o548 + o85), o107);
}catch(e){}
            } else {
                try {
for (var o82 = 0; o82 < o85; o82++) {
                    try {
buffer[o107 + o82] = o524[o548 + o82];
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
return o85;
}catch(e){}
        },
        write: function (o477, buffer, o107, length, o548, o549) {
            var o479 = o477.o479;
            try {
o479.o489 = Date.o4();
}catch(e){}
            var o524 = o479.o524;
            try {
if (length && o524.length === 0 && o548 === 0 && buffer.subarray) {
                // just replace it with the new data
                try {
if (o549 && o107 === 0) {
                    try {
o479.o524 = buffer;
}catch(e){} // this could be a subarray of Emscripten HEAP, or allocated from some other source.
                    try {
o479.o526 = (buffer.buffer === o200.buffer) ? o495.o497 : o495.o499;
}catch(e){}
                } else {
                    try {
o479.o524 = new Uint8Array(buffer.subarray(o107, o107 + length));
}catch(e){}
                    try {
o479.o526 = o495.o499;
}catch(e){}
                }
}catch(e){}
                try {
return length;
}catch(e){}
            }
}catch(e){}
            try {
o495.o529(o479);
}catch(e){}
            var o524 = o479.o524;
            try {
while (o524.length < o548) try {
o524.push(0);
}catch(e){}
}catch(e){}
            try {
for (var o82 = 0; o82 < length; o82++) {
                try {
o524[o548 + o82] = buffer[o107 + o82];
}catch(e){}
            }
}catch(e){}
            try {
return length;
}catch(e){}
        },
        o517: function (o477, o107, o550) {
            var o548 = o107;
            try {
if (o550 === 1) { // SEEK_CUR.
                try {
o548 += o477.o548;
}catch(e){}
            } else try {
if (o550 === 2) { // SEEK_END.
                try {
if (o474.o525(o477.o479.o503)) {
                    try {
o548 += o477.o479.o524.length;
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
}catch(e){}
            try {
if (o548 < 0) {
                try {
throw new o474.o481(o341.o364);
}catch(e){}
            }
}catch(e){}
            try {
o477.o551 = [];
}catch(e){}
            try {
o477.o548 = o548;
}catch(e){}
            try {
return o548;
}catch(e){}
        },
        o215: function (o477, o107, length) {
            try {
o495.o529(o477.o479);
}catch(e){}
            var o524 = o477.o479.o524;
            var o252 = o107 + length;
            try {
while (o252 > o524.length) try {
o524.push(0);
}catch(e){}
}catch(e){}
        },
        o519: function (o477, buffer, o107, length, o548, o552, flags) {
            try {
if (!o474.o525(o477.o479.o503)) {
                try {
throw new o474.o481(o341.o361);
}catch(e){}
            }
}catch(e){}
            var o114;
            var o553;
            var o524 = o477.o479.o524;
            // Only make a new copy when MAP_PRIVATE is specified.
            try {
if (!(flags & 2) &&
                (o524.buffer === buffer || o524.buffer === buffer.buffer)) {
                // We can't emulate MAP_SHARED when the file is not backed by the buffer
                // we're mapping to (e.g. the HEAP buffer).
                try {
o553 = false;
}catch(e){}
                try {
o114 = o524.byteOffset;
}catch(e){}
            } else {
                // Try to avoid unnecessary slices.
                try {
if (o548 > 0 || o548 + length < o524.length) {
                    try {
if (o524.subarray) {
                        try {
o524 = o524.subarray(o548, o548 + length);
}catch(e){}
                    } else {
                        try {
o524 = Array.prototype.slice.call(o524, o548, o548 + length);
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){}
                try {
o553 = true;
}catch(e){}
                try {
o114 = o220(length);
}catch(e){}
                try {
if (!o114) {
                    try {
throw new o474.o481(o341.o354);
}catch(e){}
                }
}catch(e){}
                try {
buffer.set(o524, o114);
}catch(e){}
            }
}catch(e){}
            try {
return {
                o114: o114,
                o553: o553
            };
}catch(e){}
        }
    }
};

var o554 = {
    o555: {},
    o556: function () {
        try {
return o19.o556 || o19.o557 || o19.o558 || o19.o559;
}catch(e){}
    },
    o560: 21,
    o561: "FILE_DATA",
    o500: function (o500) {
        // reuse all of the core MEMFS functionality
        try {
return o495.o500.apply(null, arguments);
}catch(e){}
    },
    o562: function (o500, o563, o278) {
        try {
o554.o564(o500, function (o565, o566) {
            try {
if (o565) try {
return o278(o565);
}catch(e){}
}catch(e){}

            try {
o554.o567(o500, function (o565, o568) {
                try {
if (o565) try {
return o278(o565);
}catch(e){}
}catch(e){}

                var o569 = o563 ? o568 : o566;
                var o570 = o563 ? o566 : o568;

                try {
o554.o571(o569, o570, o278);
}catch(e){}
            });
}catch(e){}
        });
}catch(e){}
    },
    o572: function (name, o278) {
        // check the cache first
        var o573 = o554.o555[name];
        try {
if (o573) {
            try {
return o278(null, o573);
}catch(e){}
        }
}catch(e){}

        var o574;
        try {
try {
            try {
o574 = o554.o556().o41(name, o554.o560);
}catch(e){}
        } catch (o189) {
            try {
return o278(o189);
}catch(e){}
        }
}catch(e){}
        try {
o574.o575 = function (o189) {
            var o573 = o189.target.o488;
            var o576 = o189.target.o576;

            var o577;

            try {
if (o573.o578.o579(o554.o561)) {
                try {
o577 = o576.o580(o554.o561);
}catch(e){}
            } else {
                try {
o577 = o573.o581(o554.o561);
}catch(e){}
            }
}catch(e){}

            try {
o577.o582('timestamp', 'timestamp', {
                o583: false
            });
}catch(e){}
        };
}catch(e){}
        try {
o574.o584 = function () {
            try {
o573 = o574.o488;
}catch(e){}

            // add to the cache
            try {
o554.o555[name] = o573;
}catch(e){}
            try {
o278(null, o573);
}catch(e){}
        };
}catch(e){}
        try {
o574.o585 = function () {
            try {
o278(this.o586);
}catch(e){}
        };
}catch(e){}
    },
    o564: function (o500, o278) {
        var entries = {};

        function o587(o588) {
            try {
return o588 !== '.' && o588 !== '..';
}catch(e){}
        }try {
;
}catch(e){}

        function o589(o590) {
            try {
return function (o588) {
                try {
return o591.o592(o590, o588);
}catch(e){}
            }
}catch(e){}
        }try {
;
}catch(e){}

        var o593 = o474.o515(o500.o594).filter(o587).map(o589(o500.o594));

        try {
while (o593.length) {
            var o31 = o593.pop();
            var o595;

            try {
try {
                try {
o595 = o474.o595(o31);
}catch(e){}
            } catch (o189) {
                try {
return o278(o189);
}catch(e){}
            }
}catch(e){}

            try {
if (o474.o523(o595.o503)) {
                try {
o593.push.apply(o593, o474.o515(o31).filter(o587).map(o589(o31)));
}catch(e){}
            }
}catch(e){}

            try {
entries[o31] = {
                o489: o595.o536
            };
}catch(e){}
        }
}catch(e){}

        try {
return o278(null, {
            type: 'local',
            entries: entries
        });
}catch(e){}
    },
    o567: function (o500, o278) {
        var entries = {};

        try {
o554.o572(o500.o594, function (o565, o573) {
            try {
if (o565) try {
return o278(o565);
}catch(e){}
}catch(e){}

            var o576 = o573.o576([o554.o561], 'readonly');
            try {
o576.o585 = function () {
                try {
o278(this.o586);
}catch(e){}
            };
}catch(e){}

            var o596 = o576.o580(o554.o561);
            var index = o596.index('timestamp');

            try {
index.o597().o584 = function (o598) {
                var o599 = o598.target.o488;

                try {
if (!o599) {
                    try {
return o278(null, {
                        type: 'remote',
                        o573: o573,
                        entries: entries
                    });
}catch(e){}
                }
}catch(e){}

                try {
entries[o599.o600] = {
                    o489: o599.key
                };
}catch(e){}

                try {
o599.o601();
}catch(e){}
            };
}catch(e){}
        });
}catch(e){}
    },
    o602: function (o31, o278) {
        var o595, o479;

        try {
try {
            var o510 = o474.o603(o31);
            try {
o479 = o510.o479;
}catch(e){}
            try {
o595 = o474.o595(o31);
}catch(e){}
        } catch (o189) {
            try {
return o278(o189);
}catch(e){}
        }
}catch(e){}

        try {
if (o474.o523(o595.o503)) {
            try {
return o278(null, {
                o489: o595.o536,
                o503: o595.o503
            });
}catch(e){}
        } else try {
if (o474.o525(o595.o503)) {
            try {
return o278(null, {
                o489: o595.o536,
                o503: o595.o503,
                o524: o479.o524
            });
}catch(e){}
        } else {
            try {
return o278(new Error('node type not supported'));
}catch(e){}
        }
}catch(e){}
}catch(e){}
    },
    o604: function (o31, o605, o278) {
        try {
try {
            try {
if (o474.o523(o605.o503)) {
                try {
o474.o606(o31, o605.o503);
}catch(e){}
            } else try {
if (o474.o525(o605.o503)) {
                try {
o474.o607(o31, o605.o524, {
                    o608: 'binary',
                    o549: true
                });
}catch(e){}
            } else {
                try {
return o278(new Error('node type not supported'));
}catch(e){}
            }
}catch(e){}
}catch(e){}

            try {
o474.o609(o31, o605.o489, o605.o489);
}catch(e){}
        } catch (o189) {
            try {
return o278(o189);
}catch(e){}
        }
}catch(e){}

        try {
o278(null);
}catch(e){}
    },
    o610: function (o31, o278) {
        try {
try {
            var o510 = o474.o603(o31);
            var o595 = o474.o595(o31);

            try {
if (o474.o523(o595.o503)) {
                try {
o474.o514(o31);
}catch(e){}
            } else try {
if (o474.o525(o595.o503)) {
                try {
o474.o513(o31);
}catch(e){}
            }
}catch(e){}
}catch(e){}
        } catch (o189) {
            try {
return o278(o189);
}catch(e){}
        }
}catch(e){}

        try {
o278(null);
}catch(e){}
    },
    o611: function (o596, o31, o278) {
        var o574 = o596.get(o31);
        try {
o574.o584 = function (o598) {
            try {
o278(null, o598.target.o488);
}catch(e){}
        };
}catch(e){}
        try {
o574.o585 = function () {
            try {
o278(this.o586);
}catch(e){}
        };
}catch(e){}
    },
    o612: function (o596, o31, o605, o278) {
        var o574 = o596.o613(o605, o31);
        try {
o574.o584 = function () {
            try {
o278(null);
}catch(e){}
        };
}catch(e){}
        try {
o574.o585 = function () {
            try {
o278(this.o586);
}catch(e){}
        };
}catch(e){}
    },
    o614: function (o596, o31, o278) {
        var o574 = o596.o615(o31);
        try {
o574.o584 = function () {
            try {
o278(null);
}catch(e){}
        };
}catch(e){}
        try {
o574.o585 = function () {
            try {
o278(this.o586);
}catch(e){}
        };
}catch(e){}
    },
    o571: function (o569, o570, o278) {
        var o616 = 0;

        var create = [];
        try {
Object.keys(o569.entries).forEach(function (key) {
            var o189 = o569.entries[key];
            var o617 = o570.entries[key];
            try {
if (!o617 || o189.o489 > o617.o489) {
                try {
create.push(key);
}catch(e){}
                try {
o616++;
}catch(e){}
            }
}catch(e){}
        });
}catch(e){}

        var o618 = [];
        try {
Object.keys(o570.entries).forEach(function (key) {
            var o189 = o570.entries[key];
            var o617 = o569.entries[key];
            try {
if (!o617) {
                try {
o618.push(key);
}catch(e){}
                try {
o616++;
}catch(e){}
            }
}catch(e){}
        });
}catch(e){}

        try {
if (!o616) {
            try {
return o278(null);
}catch(e){}
        }
}catch(e){}

        var o619 = false;
        var o620 = 0;
        var o573 = o569.type === 'remote' ? o569.o573 : o570.o573;
        var o576 = o573.o576([o554.o561], 'readwrite');
        var o596 = o576.o580(o554.o561);

        function done(o565) {
            try {
if (o565) {
                try {
if (!done.o619) {
                    try {
done.o619 = true;
}catch(e){}
                    try {
return o278(o565);
}catch(e){}
                }
}catch(e){}
                try {
return;
}catch(e){}
            }
}catch(e){}
            try {
if (++o620 >= o616) {
                try {
return o278(null);
}catch(e){}
            }
}catch(e){}
        }try {
;
}catch(e){}

        try {
o576.o585 = function () {
            try {
done(this.o586);
}catch(e){}
        };
}catch(e){}

        // sort paths in ascending order so directory entries are created
        // before the files inside them
        try {
create.sort().forEach(function (o31) {
            try {
if (o570.type === 'local') {
                try {
o554.o611(o596, o31, function (o565, o605) {
                    try {
if (o565) try {
return done(o565);
}catch(e){}
}catch(e){}
                    try {
o554.o604(o31, o605, done);
}catch(e){}
                });
}catch(e){}
            } else {
                try {
o554.o602(o31, function (o565, o605) {
                    try {
if (o565) try {
return done(o565);
}catch(e){}
}catch(e){}
                    try {
o554.o612(o596, o31, o605, done);
}catch(e){}
                });
}catch(e){}
            }
}catch(e){}
        });
}catch(e){}

        // sort paths in descending order so files are deleted before their
        // parent directories
        try {
o618.sort().reverse().forEach(function (o31) {
            try {
if (o570.type === 'local') {
                try {
o554.o610(o31, done);
}catch(e){}
            } else {
                try {
o554.o614(o596, o31, done);
}catch(e){}
            }
}catch(e){}
        });
}catch(e){}
    }
};

var o621 = {
    o622: false,
    o623: function () {
        try {
o621.o622 = !!o17.o624.match(/^win/);
}catch(e){}
    },
    o500: function (o500) {
        try {
o73(o16);
}catch(e){}
        try {
return o621.o501(null, '/', o621.o625(o500.o626.o590), 0);
}catch(e){}
    },
    o501: function (o502, name, o503, o471) {
        try {
if (!o474.o523(o503) && !o474.o525(o503) && !o474.o527(o503)) {
            try {
throw new o474.o481(o341.o364);
}catch(e){}
        }
}catch(e){}
        var o479 = o474.o501(o502, name, o503);
        try {
o479.o508 = o621.o508;
}catch(e){}
        try {
o479.o476 = o621.o476;
}catch(e){}
        try {
return o479;
}catch(e){}
    },
    o625: function (o31) {
        var o595;
        try {
try {
            try {
o595 = o627.o628(o31);
}catch(e){}
            try {
if (o621.o622) {
                // On Windows, directories return permission bits 'rw-rw-rw-', even though they have 'rwxrwxrwx', so 
                // propagate write bits to execute bits.
                try {
o595.o503 = o595.o503 | ((o595.o503 & 146) >> 1);
}catch(e){}
            }
}catch(e){}
        } catch (o189) {
            try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
            try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
        }
}catch(e){}
        try {
return o595.o503;
}catch(e){}
    },
    o629: function (o479) {
        var o249 = [];
        try {
while (o479.o502 !== o479) {
            try {
o249.push(o479.name);
}catch(e){}
            try {
o479 = o479.o502;
}catch(e){}
        }
}catch(e){}
        try {
o249.push(o479.o500.o626.o590);
}catch(e){}
        try {
o249.reverse();
}catch(e){}
        try {
return o591.join.apply(null, o249);
}catch(e){}
    },
    o630: {
        0: "r",
        1: "r+",
        2: "r+",
        64: "r",
        65: "r+",
        66: "r+",
        129: "rx+",
        193: "rx+",
        514: "w+",
        577: "w",
        578: "w+",
        705: "wx",
        706: "wx+",
        1024: "a",
        1025: "a",
        1026: "a+",
        1089: "a",
        1090: "a+",
        1153: "ax",
        1154: "ax+",
        1217: "ax",
        1218: "ax+",
        4096: "rs",
        4098: "rs+"
    },
    o631: function (flags) {
        try {
if (flags in o621.o630) {
            try {
return o621.o630[flags];
}catch(e){}
        } else {
            try {
return flags;
}catch(e){}
        }
}catch(e){}
    },
    o508: {
        o507: function (o479) {
            var o31 = o621.o629(o479);
            var o595;
            try {
try {
                try {
o595 = o627.o628(o31);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
            // node.js v0.10.20 doesn't report blksize and blocks on Windows. Fake them with default blksize of 4096.
            // See http://support.microsoft.com/kb/140365
            try {
if (o621.o622 && !o595.o538) {
                try {
o595.o538 = 4096;
}catch(e){}
            }
}catch(e){}
            try {
if (o621.o622 && !o595.o539) {
                try {
o595.o539 = (o595.o85 + o595.o538 - 1) / o595.o538 | 0;
}catch(e){}
            }
}catch(e){}
            try {
return {
                o471: o595.o471,
                o531: o595.o531,
                o503: o595.o503,
                o532: o595.o532,
                o533: o595.o533,
                o534: o595.o534,
                o480: o595.o480,
                o85: o595.o85,
                o535: o595.o535,
                o536: o595.o536,
                o537: o595.o537,
                o538: o595.o538,
                o539: o595.o539
            };
}catch(e){}
        },
        o509: function (o479, o530) {
            var o31 = o621.o629(o479);
            try {
try {
                try {
if (o530.o503 !== undefined) {
                    try {
o627.o632(o31, o530.o503);
}catch(e){}
                    // update the common node structure mode as well
                    try {
o479.o503 = o530.o503;
}catch(e){}
                }
}catch(e){}
                try {
if (o530.o489 !== undefined) {
                    var o633 = new Date(o530.o489);
                    try {
o627.o634(o31, o633, o633);
}catch(e){}
                }
}catch(e){}
                try {
if (o530.o85 !== undefined) {
                    try {
o627.o635(o31, o530.o85);
}catch(e){}
                }
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o510: function (o502, name) {
            var o31 = o591.o592(o621.o629(o502), name);
            var o503 = o621.o625(o31);
            try {
return o621.o501(o502, name, o503);
}catch(e){}
        },
        o511: function (o502, name, o503, o471) {
            var o479 = o621.o501(o502, name, o503, o471);
            // create the backing node for this in the fs root as well
            var o31 = o621.o629(o479);
            try {
try {
                try {
if (o474.o523(o479.o503)) {
                    try {
o627.o636(o31, o479.o503);
}catch(e){}
                } else {
                    try {
o627.o637(o31, '', {
                        o503: o479.o503
                    });
}catch(e){}
                }
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
            try {
return o479;
}catch(e){}
        },
        o512: function (o638, o639, o640) {
            var o641 = o621.o629(o638);
            var o642 = o591.o592(o621.o629(o639), o640);
            try {
try {
                try {
o627.o643(o641, o642);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o513: function (o502, name) {
            var o31 = o591.o592(o621.o629(o502), name);
            try {
try {
                try {
o627.o644(o31);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o514: function (o502, name) {
            var o31 = o591.o592(o621.o629(o502), name);
            try {
try {
                try {
o627.o645(o31);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o515: function (o479) {
            var o31 = o621.o629(o479);
            try {
try {
                try {
return o627.o646(o31);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o516: function (o502, o640, o641) {
            var o642 = o591.o592(o621.o629(o502), o640);
            try {
try {
                try {
o627.o647(o641, o642);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o520: function (o479) {
            var o31 = o621.o629(o479);
            try {
try {
                try {
return o627.o648(o31);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
        }
    },
    o476: {
        o41: function (o477) {
            var o31 = o621.o629(o477.o479);
            try {
try {
                try {
if (o474.o525(o477.o479.o503)) {
                    try {
o477.o649 = o627.o650(o31, o621.o631(o477.flags));
}catch(e){}
                }
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o483: function (o477) {
            try {
try {
                try {
if (o474.o525(o477.o479.o503) && o477.o649) {
                    try {
o627.o651(o477.o649);
}catch(e){}
                }
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o27: function (o477, buffer, o107, length, o548) {
            // FIXME this is terrible.
            var o652 = new o653(length);
            var o654;
            try {
try {
                try {
o654 = o627.o655(o477.o649, o652, 0, length, o548);
}catch(e){}
            } catch (o189) {
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
            try {
if (o654 > 0) {
                try {
for (var o82 = 0; o82 < o654; o82++) {
                    try {
buffer[o107 + o82] = o652[o82];
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
return o654;
}catch(e){}
        },
        write: function (o477, buffer, o107, length, o548) {
            // FIXME this is terrible.
            var o652 = new o653(buffer.subarray(o107, o107 + length));
            var o654;
            try {
try {
                try {
o654 = o627.o656(o477.o649, o652, 0, length, o548);
}catch(e){}
            } catch (o189) {
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
            try {
return o654;
}catch(e){}
        },
        o517: function (o477, o107, o550) {
            var o548 = o107;
            try {
if (o550 === 1) { // SEEK_CUR.
                try {
o548 += o477.o548;
}catch(e){}
            } else try {
if (o550 === 2) { // SEEK_END.
                try {
if (o474.o525(o477.o479.o503)) {
                    try {
try {
                        var o595 = o627.o657(o477.o649);
                        try {
o548 += o595.o85;
}catch(e){}
                    } catch (o189) {
                        try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
}catch(e){}

            try {
if (o548 < 0) {
                try {
throw new o474.o481(o341.o364);
}catch(e){}
            }
}catch(e){}

            try {
o477.o548 = o548;
}catch(e){}
            try {
return o548;
}catch(e){}
        }
    }
};

var o658 = o215(1, "i32*", o212);

var o659 = o215(1, "i32*", o212);

var o660 = o215(1, "i32*", o212);

function o661(o477) {
    // int fflush(FILE *stream);
    // http://pubs.opengroup.org/onlinepubs/000095399/functions/fflush.html
    // we don't currently perform any user-space buffering of data
}
var o474 = {
    o590: null,
    o662: [],
    o663: [null],
    o664: [],
    o665: 1,
    o666: null,
    o667: "/",
    o668: false,
    o669: true,
    o481: null,
    o540: {},
    o670: function (o189) {
        try {
if (!(o189 instanceof o474.o481)) try {
throw o189 + ' : ' + o262();
}catch(e){}
}catch(e){}
        try {
return o465(o189.o671);
}catch(e){}
    },
    o603: function (o31, o626) {
        try {
o31 = o591.resolve(o474.o672(), o31);
}catch(e){}
        try {
o626 = o626 || {};
}catch(e){}

        var o673 = {
            o674: true,
            o675: 0
        };
        try {
for (var key in o673) {
            try {
if (o626[key] === undefined) {
                try {
o626[key] = o673[key];
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}

        try {
if (o626.o675 > 8) { // max recursive lookup of 8
            try {
throw new o474.o481(o341.o423);
}catch(e){}
        }
}catch(e){}

        // split the path
        var o249 = o591.o676(o31.split('/').filter(function (o588) {
            try {
return !!o588;
}catch(e){}
        }), false);

        // start at the root
        var o677 = o474.o590;
        var o678 = '/';

        try {
for (var o82 = 0; o82 < o249.length; o82++) {
            var o679 = (o82 === o249.length - 1);
            try {
if (o679 && o626.o502) {
                // stop resolving
                try {
break;
}catch(e){}
            }
}catch(e){}

            try {
o677 = o474.o545(o677, o249[o82]);
}catch(e){}
            try {
o678 = o591.o592(o678, o249[o82]);
}catch(e){}

            // jump to the mount's root node if this is a mountpoint
            try {
if (o474.o680(o677)) {
                try {
if (!o679 || (o679 && o626.o674)) {
                    try {
o677 = o677.o681.o590;
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}

            // by default, lookupPath will not follow a symlink if it is the final path component.
            // setting opts.follow = true will override this behavior.
            try {
if (!o679 || o626.o682) {
                var o683 = 0;
                try {
while (o474.o527(o677.o503)) {
                    var link = o474.o520(o678);
                    try {
o678 = o591.resolve(o591.o684(o678), link);
}catch(e){}

                    var o510 = o474.o603(o678, {
                        o675: o626.o675
                    });
                    try {
o677 = o510.o479;
}catch(e){}

                    try {
if (o683++ > 40) { // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                        try {
throw new o474.o481(o341.o423);
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
return {
            o31: o678,
            o479: o677
        };
}catch(e){}
    },
    o685: function (o479) {
        var o31;
        try {
while (true) {
            try {
if (o474.o686(o479)) {
                var o500 = o479.o500.o594;
                try {
if (!o31) try {
return o500;
}catch(e){}
}catch(e){}
                try {
return o500[o500.length - 1] !== '/' ? o500 + '/' + o31 : o500 + o31;
}catch(e){}
            }
}catch(e){}
            try {
o31 = o31 ? o479.name + '/' + o31 : o479.name;
}catch(e){}
            try {
o479 = o479.o502;
}catch(e){}
        }
}catch(e){}
    },
    o687: function (o688, name) {
        var o689 = 0;


        try {
for (var o82 = 0; o82 < name.length; o82++) {
            try {
o689 = ((o689 << 5) - o689 + name.charCodeAt(o82)) | 0;
}catch(e){}
        }
}catch(e){}
        try {
return ((o688 + o689) >>> 0) % o474.o666.length;
}catch(e){}
    },
    o690: function (o479) {
        var o689 = o474.o687(o479.o502.o333, o479.name);
        try {
o479.o691 = o474.o666[o689];
}catch(e){}
        try {
o474.o666[o689] = o479;
}catch(e){}
    },
    o692: function (o479) {
        var o689 = o474.o687(o479.o502.o333, o479.name);
        try {
if (o474.o666[o689] === o479) {
            try {
o474.o666[o689] = o479.o691;
}catch(e){}
        } else {
            var o677 = o474.o666[o689];
            try {
while (o677) {
                try {
if (o677.o691 === o479) {
                    try {
o677.o691 = o479.o691;
}catch(e){}
                    try {
break;
}catch(e){}
                }
}catch(e){}
                try {
o677 = o677.o691;
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
    },
    o545: function (o502, name) {
        var o565 = o474.o693(o502);
        try {
if (o565) {
            try {
throw new o474.o481(o565);
}catch(e){}
        }
}catch(e){}
        var o689 = o474.o687(o502.o333, name);
        try {
for (var o479 = o474.o666[o689]; o479; o479 = o479.o691) {
            var o694 = o479.name;
            try {
if (o479.o502.o333 === o502.o333 && o694 === name) {
                try {
return o479;
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        // if we failed to find it in the cache, call into the VFS
        try {
return o474.o510(o502, name);
}catch(e){}
    },
    o501: function (o502, name, o503, o480) {
        try {
if (!o474.o695) {
            try {
o474.o695 = function (o502, name, o503, o480) {
                try {
if (!o502) {
                    try {
o502 = this;
}catch(e){} // root node sets parent to itself
                }
}catch(e){}
                try {
this.o502 = o502;
}catch(e){}
                try {
this.o500 = o502.o500;
}catch(e){}
                try {
this.o681 = null;
}catch(e){}
                try {
this.o333 = o474.o665++;
}catch(e){}
                try {
this.name = name;
}catch(e){}
                try {
this.o503 = o503;
}catch(e){}
                try {
this.o508 = {};
}catch(e){}
                try {
this.o476 = {};
}catch(e){}
                try {
this.o480 = o480;
}catch(e){}
            };
}catch(e){}

            try {
o474.o695.prototype = {};
}catch(e){}

            // compatibility
            var o696 = 292 | 73;
            var o697 = 146;

            // NOTE we must use Object.defineProperties instead of individual calls to
            // Object.defineProperty in order to make closure compiler happy
            try {
Object.defineProperties(o474.o695.prototype, {
                o27: {
                    get: function () {
                        try {
return (this.o503 & o696) === o696;
}catch(e){}
                    },
                    set: function (o493) {
                        try {
o493 ? this.o503 |= o696 : this.o503 &= ~o696;
}catch(e){}
                    }
                },
                write: {
                    get: function () {
                        try {
return (this.o503 & o697) === o697;
}catch(e){}
                    },
                    set: function (o493) {
                        try {
o493 ? this.o503 |= o697 : this.o503 &= ~o697;
}catch(e){}
                    }
                },
                o698: {
                    get: function () {
                        try {
return o474.o523(this.o503);
}catch(e){}
                    },
                },
                o699: {
                    get: function () {
                        try {
return o474.o528(this.o503);
}catch(e){}
                    },
                },
            });
}catch(e){}
        }
}catch(e){}

        var o479 = new o474.o695(o502, name, o503, o480);

        try {
o474.o690(o479);
}catch(e){}

        try {
return o479;
}catch(e){}
    },
    o700: function (o479) {
        try {
o474.o692(o479);
}catch(e){}
    },
    o686: function (o479) {
        try {
return o479 === o479.o502;
}catch(e){}
    },
    o680: function (o479) {
        try {
return !!o479.o681;
}catch(e){}
    },
    o525: function (o503) {
        try {
return (o503 & 61440) === 32768;
}catch(e){}
    },
    o523: function (o503) {
        try {
return (o503 & 61440) === 16384;
}catch(e){}
    },
    o527: function (o503) {
        try {
return (o503 & 61440) === 40960;
}catch(e){}
    },
    o528: function (o503) {
        try {
return (o503 & 61440) === 8192;
}catch(e){}
    },
    o504: function (o503) {
        try {
return (o503 & 61440) === 24576;
}catch(e){}
    },
    o505: function (o503) {
        try {
return (o503 & 61440) === 4096;
}catch(e){}
    },
    o701: function (o503) {
        try {
return (o503 & 49152) === 49152;
}catch(e){}
    },
    o702: {
        "r": 0,
        "rs": 1052672,
        "r+": 2,
        "w": 577,
        "wx": 705,
        "xw": 705,
        "w+": 578,
        "wx+": 706,
        "xw+": 706,
        "a": 1089,
        "ax": 1217,
        "xa": 1217,
        "a+": 1090,
        "ax+": 1218,
        "xa+": 1218
    },
    o703: function (o231) {
        var flags = o474.o702[o231];
        try {
if (typeof flags === 'undefined') {
            try {
throw new Error('Unknown file open mode: ' + o231);
}catch(e){}
        }
}catch(e){}
        try {
return flags;
}catch(e){}
    },
    o631: function (o704) {
        var o705 = o704 & 2097155;
        var o706 = ['r', 'w', 'rw'][o705];
        try {
if ((o704 & 512)) {
            try {
o706 += 'w';
}catch(e){}
        }
}catch(e){}
        try {
return o706;
}catch(e){}
    },
    o707: function (o479, o706) {
        try {
if (o474.o669) {
            try {
return 0;
}catch(e){}
        }
}catch(e){}
        // return 0 if any user, group or owner bits are set.
        try {
if (o706.indexOf('r') !== -1 && !(o479.o503 & 292)) {
            try {
return o341.o355;
}catch(e){}
        } else try {
if (o706.indexOf('w') !== -1 && !(o479.o503 & 146)) {
            try {
return o341.o355;
}catch(e){}
        } else try {
if (o706.indexOf('x') !== -1 && !(o479.o503 & 73)) {
            try {
return o341.o355;
}catch(e){}
        }
}catch(e){}
}catch(e){}
}catch(e){}
        try {
return 0;
}catch(e){}
    },
    o693: function (o506) {
        try {
return o474.o707(o506, 'x');
}catch(e){}
    },
    o708: function (o506, name) {
        try {
try {
            var o479 = o474.o545(o506, name);
            try {
return o341.o359;
}catch(e){}
        } catch (o189) {}
}catch(e){}
        try {
return o474.o707(o506, 'wx');
}catch(e){}
    },
    o709: function (o506, name, o710) {
        var o479;
        try {
try {
            try {
o479 = o474.o545(o506, name);
}catch(e){}
        } catch (o189) {
            try {
return o189.o671;
}catch(e){}
        }
}catch(e){}
        var o565 = o474.o707(o506, 'wx');
        try {
if (o565) {
            try {
return o565;
}catch(e){}
        }
}catch(e){}
        try {
if (o710) {
            try {
if (!o474.o523(o479.o503)) {
                try {
return o341.o362;
}catch(e){}
            }
}catch(e){}
            try {
if (o474.o686(o479) || o474.o685(o479) === o474.o672()) {
                try {
return o341.o358;
}catch(e){}
            }
}catch(e){}
        } else {
            try {
if (o474.o523(o479.o503)) {
                try {
return o341.o363;
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
return 0;
}catch(e){}
    },
    o711: function (o479, flags) {
        try {
if (!o479) {
            try {
return o341.o343;
}catch(e){}
        }
}catch(e){}
        try {
if (o474.o527(o479.o503)) {
            try {
return o341.o423;
}catch(e){}
        } else try {
if (o474.o523(o479.o503)) {
            try {
if ((flags & 2097155) !== 0 || // opening for write
                (flags & 512)) {
                try {
return o341.o363;
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
}catch(e){}
        try {
return o474.o707(o479, o474.o631(flags));
}catch(e){}
    },
    o712: 4096,
    o713: function (o714, o715) {
        try {
o714 = o714 || 0;
}catch(e){}
        try {
o715 = o715 || o474.o712;
}catch(e){}
        try {
for (var o716 = o714; o716 <= o715; o716++) {
            try {
if (!o474.o664[o716]) {
                try {
return o716;
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
throw new o474.o481(o341.o366);
}catch(e){}
    },
    o717: function (o716) {
        try {
return o474.o664[o716];
}catch(e){}
    },
    o718: function (o477, o714, o715) {
        try {
if (!o474.o719) {
            try {
o474.o719 = function () {};
}catch(e){}
            try {
o474.o719.prototype = {};
}catch(e){}
            // compatibility
            try {
Object.defineProperties(o474.o719.prototype, {
                o720: {
                    get: function () {
                        try {
return this.o479;
}catch(e){}
                    },
                    set: function (o493) {
                        try {
this.o479 = o493;
}catch(e){}
                    }
                },
                o721: {
                    get: function () {
                        try {
return (this.flags & 2097155) !== 1;
}catch(e){}
                    }
                },
                o722: {
                    get: function () {
                        try {
return (this.flags & 2097155) !== 0;
}catch(e){}
                    }
                },
                o723: {
                    get: function () {
                        try {
return (this.flags & 1024);
}catch(e){}
                    }
                }
            });
}catch(e){}
        }
}catch(e){}
        try {
if (o477.__proto__) {
            // reuse the object
            try {
o477.__proto__ = o474.o719.prototype;
}catch(e){}
        } else {
            var o724 = new o474.o719();
            try {
for (var o588 in o477) {
                try {
o724[o588] = o477[o588];
}catch(e){}
            }
}catch(e){}
            try {
o477 = o724;
}catch(e){}
        }
}catch(e){}
        var o716 = o474.o713(o714, o715);
        try {
o477.o716 = o716;
}catch(e){}
        try {
o474.o664[o716] = o477;
}catch(e){}
        try {
return o477;
}catch(e){}
    },
    o725: function (o716) {
        try {
o474.o664[o716] = null;
}catch(e){}
    },
    o726: function (o114) {
        try {
return o474.o664[o114 - 1];
}catch(e){}
    },
    o727: function (o477) {
        try {
return o477 ? o477.o716 + 1 : 0;
}catch(e){}
    },
    o522: {
        o41: function (o477) {
            var o728 = o474.o729(o477.o479.o480);
            // override node's stream ops with the device's
            try {
o477.o476 = o728.o476;
}catch(e){}
            // forward the open call
            try {
if (o477.o476.o41) {
                try {
o477.o476.o41(o477);
}catch(e){}
            }
}catch(e){}
        },
        o517: function () {
            try {
throw new o474.o481(o341.o371);
}catch(e){}
        }
    },
    o730: function (o471) {
        try {
return ((o471) >> 8);
}catch(e){}
    },
    o731: function (o471) {
        try {
return ((o471) & 0xff);
}catch(e){}
    },
    o732: function (o733, o734) {
        try {
return ((o733) << 8 | (o734));
}catch(e){}
    },
    o475: function (o471, o472) {
        try {
o474.o663[o471] = {
            o476: o472
        };
}catch(e){}
    },
    o729: function (o471) {
        try {
return o474.o663[o471];
}catch(e){}
    },
    o735: function (o500) {
        var o662 = [];
        var o593 = [o500];

        try {
while (o593.length) {
            var o736 = o593.pop();

            try {
o662.push(o736);
}catch(e){}

            try {
o593.push.apply(o593, o736.o662);
}catch(e){}
        }
}catch(e){}

        try {
return o662;
}catch(e){}
    },
    o562: function (o563, o278) {
        try {
if (typeof (o563) === 'function') {
            try {
o278 = o563;
}catch(e){}
            try {
o563 = false;
}catch(e){}
        }
}catch(e){}

        var o662 = o474.o735(o474.o590.o500);
        var o620 = 0;

        function done(o565) {
            try {
if (o565) {
                try {
if (!done.o619) {
                    try {
done.o619 = true;
}catch(e){}
                    try {
return o278(o565);
}catch(e){}
                }
}catch(e){}
                try {
return;
}catch(e){}
            }
}catch(e){}
            try {
if (++o620 >= o662.length) {
                try {
o278(null);
}catch(e){}
            }
}catch(e){}
        }try {
;
}catch(e){}

        // sync all mounts
        try {
o662.forEach(function (o500) {
            try {
if (!o500.type.o562) {
                try {
return done(null);
}catch(e){}
            }
}catch(e){}
            try {
o500.type.o562(o500, o563, done);
}catch(e){}
        });
}catch(e){}
    },
    o500: function (type, o626, o594) {
        var o590 = o594 === '/';
        var o737 = !o594;
        var o479;

        try {
if (o590 && o474.o590) {
            try {
throw new o474.o481(o341.o358);
}catch(e){}
        } else try {
if (!o590 && !o737) {
            var o510 = o474.o603(o594, {
                o674: false
            });

            try {
o594 = o510.o31;
}catch(e){} // use the absolute path
            try {
o479 = o510.o479;
}catch(e){}

            try {
if (o474.o680(o479)) {
                try {
throw new o474.o481(o341.o358);
}catch(e){}
            }
}catch(e){}

            try {
if (!o474.o523(o479.o503)) {
                try {
throw new o474.o481(o341.o362);
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
}catch(e){}

        var o500 = {
            type: type,
            o626: o626,
            o594: o594,
            o662: []
        };

        // create a root node for the fs
        var o738 = type.o500(o500);
        try {
o738.o500 = o500;
}catch(e){}
        try {
o500.o590 = o738;
}catch(e){}

        try {
if (o590) {
            try {
o474.o590 = o738;
}catch(e){}
        } else try {
if (o479) {
            // set as a mountpoint
            try {
o479.o681 = o500;
}catch(e){}

            // add the new mount to the current mount's children
            try {
if (o479.o500) {
                try {
o479.o500.o662.push(o500);
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
}catch(e){}

        try {
return o738;
}catch(e){}
    },
    o739: function (o594) {
        var o510 = o474.o603(o594, {
            o674: false
        });

        try {
if (!o474.o680(o510.o479)) {
            try {
throw new o474.o481(o341.o364);
}catch(e){}
        }
}catch(e){}

        // destroy the nodes for this mount, and all its child mounts
        var o479 = o510.o479;
        var o500 = o479.o681;
        var o662 = o474.o735(o500);

        try {
Object.keys(o474.o666).forEach(function (o689) {
            var o677 = o474.o666[o689];

            try {
while (o677) {
                var next = o677.o691;

                try {
if (o662.indexOf(o677.o500) !== -1) {
                    try {
o474.o700(o677);
}catch(e){}
                }
}catch(e){}

                try {
o677 = next;
}catch(e){}
            }
}catch(e){}
        });
}catch(e){}

        // no longer a mountpoint
        try {
o479.o681 = null;
}catch(e){}

        // remove this mount from the child mounts
        var o740 = o479.o500.o662.indexOf(o500);
        try {
o73(o740 !== -1);
}catch(e){}
        try {
o479.o500.o662.splice(o740, 1);
}catch(e){}
    },
    o510: function (o502, name) {
        try {
return o502.o508.o510(o502, name);
}catch(e){}
    },
    o511: function (o31, o503, o471) {
        var o510 = o474.o603(o31, {
            o502: true
        });
        var o502 = o510.o479;
        var name = o591.o741(o31);
        var o565 = o474.o708(o502, name);
        try {
if (o565) {
            try {
throw new o474.o481(o565);
}catch(e){}
        }
}catch(e){}
        try {
if (!o502.o508.o511) {
            try {
throw new o474.o481(o341.o342);
}catch(e){}
        }
}catch(e){}
        try {
return o502.o508.o511(o502, name, o503, o471);
}catch(e){}
    },
    create: function (o31, o503) {
        try {
o503 = o503 !== undefined ? o503 : 438 /* 0666 */ ;
}catch(e){}
        try {
o503 &= 4095;
}catch(e){}
        try {
o503 |= 32768;
}catch(e){}
        try {
return o474.o511(o31, o503, 0);
}catch(e){}
    },
    o606: function (o31, o503) {
        try {
o503 = o503 !== undefined ? o503 : 511 /* 0777 */ ;
}catch(e){}
        try {
o503 &= 511 | 512;
}catch(e){}
        try {
o503 |= 16384;
}catch(e){}
        try {
return o474.o511(o31, o503, 0);
}catch(e){}
    },
    o742: function (o31, o503, o471) {
        try {
if (typeof (o471) === 'undefined') {
            try {
o471 = o503;
}catch(e){}
            try {
o503 = 438 /* 0666 */ ;
}catch(e){}
        }
}catch(e){}
        try {
o503 |= 8192;
}catch(e){}
        try {
return o474.o511(o31, o503, o471);
}catch(e){}
    },
    o516: function (o547, o743) {
        var o510 = o474.o603(o743, {
            o502: true
        });
        var o502 = o510.o479;
        var o546 = o591.o741(o743);
        var o565 = o474.o708(o502, o546);
        try {
if (o565) {
            try {
throw new o474.o481(o565);
}catch(e){}
        }
}catch(e){}
        try {
if (!o502.o508.o516) {
            try {
throw new o474.o481(o341.o342);
}catch(e){}
        }
}catch(e){}
        try {
return o502.o508.o516(o502, o546, o547);
}catch(e){}
    },
    o512: function (o744, o745) {
        var o746 = o591.o684(o744);
        var o747 = o591.o684(o745);
        var o748 = o591.o741(o744);
        var o543 = o591.o741(o745);
        // parents must exist
        var o510, o749, o542;
        try {
try {
            try {
o510 = o474.o603(o744, {
                o502: true
            });
}catch(e){}
            try {
o749 = o510.o479;
}catch(e){}
            try {
o510 = o474.o603(o745, {
                o502: true
            });
}catch(e){}
            try {
o542 = o510.o479;
}catch(e){}
        } catch (o189) {
            try {
throw new o474.o481(o341.o358);
}catch(e){}
        }
}catch(e){}
        // need to be part of the same mount
        try {
if (o749.o500 !== o542.o500) {
            try {
throw new o474.o481(o341.o360);
}catch(e){}
        }
}catch(e){}
        // source must exist
        var o541 = o474.o545(o749, o748);
        // old path should not be an ancestor of the new path
        var o750 = o591.o750(o744, o747);
        try {
if (o750.charAt(0) !== '.') {
            try {
throw new o474.o481(o341.o364);
}catch(e){}
        }
}catch(e){}
        // new path should not be an ancestor of the old path
        try {
o750 = o591.o750(o745, o746);
}catch(e){}
        try {
if (o750.charAt(0) !== '.') {
            try {
throw new o474.o481(o341.o421);
}catch(e){}
        }
}catch(e){}
        // see if the new path already exists
        var o544;
        try {
try {
            try {
o544 = o474.o545(o542, o543);
}catch(e){}
        } catch (o189) {
            // not fatal
        }
}catch(e){}
        // early out if nothing needs to change
        try {
if (o541 === o544) {
            try {
return;
}catch(e){}
        }
}catch(e){}
        // we'll need to delete the old entry
        var o710 = o474.o523(o541.o503);
        var o565 = o474.o709(o749, o748, o710);
        try {
if (o565) {
            try {
throw new o474.o481(o565);
}catch(e){}
        }
}catch(e){}
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        try {
o565 = o544 ?
            o474.o709(o542, o543, o710) :
            o474.o708(o542, o543);
}catch(e){}
        try {
if (o565) {
            try {
throw new o474.o481(o565);
}catch(e){}
        }
}catch(e){}
        try {
if (!o749.o508.o512) {
            try {
throw new o474.o481(o341.o342);
}catch(e){}
        }
}catch(e){}
        try {
if (o474.o680(o541) || (o544 && o474.o680(o544))) {
            try {
throw new o474.o481(o341.o358);
}catch(e){}
        }
}catch(e){}
        // if we are going to change the parent, check write permissions
        try {
if (o542 !== o749) {
            try {
o565 = o474.o707(o749, 'w');
}catch(e){}
            try {
if (o565) {
                try {
throw new o474.o481(o565);
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        // remove the node from the lookup hash
        try {
o474.o692(o541);
}catch(e){}
        // do the underlying fs rename
        try {
try {
            try {
o749.o508.o512(o541, o542, o543);
}catch(e){}
        } catch (o189) {
            try {
throw o189;
}catch(e){}
        } finally {
            // add the node back to the hash (in case node_ops.rename
            // changed its name)
            try {
o474.o690(o541);
}catch(e){}
        }
}catch(e){}
    },
    o514: function (o31) {
        var o510 = o474.o603(o31, {
            o502: true
        });
        var o502 = o510.o479;
        var name = o591.o741(o31);
        var o479 = o474.o545(o502, name);
        var o565 = o474.o709(o502, name, true);
        try {
if (o565) {
            try {
throw new o474.o481(o565);
}catch(e){}
        }
}catch(e){}
        try {
if (!o502.o508.o514) {
            try {
throw new o474.o481(o341.o342);
}catch(e){}
        }
}catch(e){}
        try {
if (o474.o680(o479)) {
            try {
throw new o474.o481(o341.o358);
}catch(e){}
        }
}catch(e){}
        try {
o502.o508.o514(o502, name);
}catch(e){}
        try {
o474.o700(o479);
}catch(e){}
    },
    o515: function (o31) {
        var o510 = o474.o603(o31, {
            o682: true
        });
        var o479 = o510.o479;
        try {
if (!o479.o508.o515) {
            try {
throw new o474.o481(o341.o362);
}catch(e){}
        }
}catch(e){}
        try {
return o479.o508.o515(o479);
}catch(e){}
    },
    o513: function (o31) {
        var o510 = o474.o603(o31, {
            o502: true
        });
        var o502 = o510.o479;
        var name = o591.o741(o31);
        var o479 = o474.o545(o502, name);
        var o565 = o474.o709(o502, name, false);
        try {
if (o565) {
            // POSIX says unlink should set EPERM, not EISDIR
            try {
if (o565 === o341.o363) try {
o565 = o341.o342;
}catch(e){}
}catch(e){}
            try {
throw new o474.o481(o565);
}catch(e){}
        }
}catch(e){}
        try {
if (!o502.o508.o513) {
            try {
throw new o474.o481(o341.o342);
}catch(e){}
        }
}catch(e){}
        try {
if (o474.o680(o479)) {
            try {
throw new o474.o481(o341.o358);
}catch(e){}
        }
}catch(e){}
        try {
o502.o508.o513(o502, name);
}catch(e){}
        try {
o474.o700(o479);
}catch(e){}
    },
    o520: function (o31) {
        var o510 = o474.o603(o31);
        var link = o510.o479;
        try {
if (!link.o508.o520) {
            try {
throw new o474.o481(o341.o364);
}catch(e){}
        }
}catch(e){}
        try {
return link.o508.o520(link);
}catch(e){}
    },
    o595: function (o31, o751) {
        var o510 = o474.o603(o31, {
            o682: !o751
        });
        var o479 = o510.o479;
        try {
if (!o479.o508.o507) {
            try {
throw new o474.o481(o341.o342);
}catch(e){}
        }
}catch(e){}
        try {
return o479.o508.o507(o479);
}catch(e){}
    },
    o752: function (o31) {
        try {
return o474.o595(o31, true);
}catch(e){}
    },
    o753: function (o31, o503, o751) {
        var o479;
        try {
if (typeof o31 === 'string') {
            var o510 = o474.o603(o31, {
                o682: !o751
            });
            try {
o479 = o510.o479;
}catch(e){}
        } else {
            try {
o479 = o31;
}catch(e){}
        }
}catch(e){}
        try {
if (!o479.o508.o509) {
            try {
throw new o474.o481(o341.o342);
}catch(e){}
        }
}catch(e){}
        try {
o479.o508.o509(o479, {
            o503: (o503 & 4095) | (o479.o503 & ~4095),
            o489: Date.o4()
        });
}catch(e){}
    },
    o754: function (o31, o503) {
        try {
o474.o753(o31, o503, true);
}catch(e){}
    },
    o755: function (o716, o503) {
        var o477 = o474.o717(o716);
        try {
if (!o477) {
            try {
throw new o474.o481(o341.o350);
}catch(e){}
        }
}catch(e){}
        try {
o474.o753(o477.o479, o503);
}catch(e){}
    },
    o756: function (o31, o533, o534, o751) {
        var o479;
        try {
if (typeof o31 === 'string') {
            var o510 = o474.o603(o31, {
                o682: !o751
            });
            try {
o479 = o510.o479;
}catch(e){}
        } else {
            try {
o479 = o31;
}catch(e){}
        }
}catch(e){}
        try {
if (!o479.o508.o509) {
            try {
throw new o474.o481(o341.o342);
}catch(e){}
        }
}catch(e){}
        try {
o479.o508.o509(o479, {
            o489: Date.o4()
            // we ignore the uid / gid for now
        });
}catch(e){}
    },
    o757: function (o31, o533, o534) {
        try {
o474.o756(o31, o533, o534, true);
}catch(e){}
    },
    o758: function (o716, o533, o534) {
        var o477 = o474.o717(o716);
        try {
if (!o477) {
            try {
throw new o474.o481(o341.o350);
}catch(e){}
        }
}catch(e){}
        try {
o474.o756(o477.o479, o533, o534);
}catch(e){}
    },
    o759: function (o31, o760) {
        try {
if (o760 < 0) {
            try {
throw new o474.o481(o341.o364);
}catch(e){}
        }
}catch(e){}
        var o479;
        try {
if (typeof o31 === 'string') {
            var o510 = o474.o603(o31, {
                o682: true
            });
            try {
o479 = o510.o479;
}catch(e){}
        } else {
            try {
o479 = o31;
}catch(e){}
        }
}catch(e){}
        try {
if (!o479.o508.o509) {
            try {
throw new o474.o481(o341.o342);
}catch(e){}
        }
}catch(e){}
        try {
if (o474.o523(o479.o503)) {
            try {
throw new o474.o481(o341.o363);
}catch(e){}
        }
}catch(e){}
        try {
if (!o474.o525(o479.o503)) {
            try {
throw new o474.o481(o341.o364);
}catch(e){}
        }
}catch(e){}
        var o565 = o474.o707(o479, 'w');
        try {
if (o565) {
            try {
throw new o474.o481(o565);
}catch(e){}
        }
}catch(e){}
        try {
o479.o508.o509(o479, {
            o85: o760,
            o489: Date.o4()
        });
}catch(e){}
    },
    o761: function (o716, o760) {
        var o477 = o474.o717(o716);
        try {
if (!o477) {
            try {
throw new o474.o481(o341.o350);
}catch(e){}
        }
}catch(e){}
        try {
if ((o477.flags & 2097155) === 0) {
            try {
throw new o474.o481(o341.o364);
}catch(e){}
        }
}catch(e){}
        try {
o474.o759(o477.o479, o760);
}catch(e){}
    },
    o609: function (o31, o535, o536) {
        var o510 = o474.o603(o31, {
            o682: true
        });
        var o479 = o510.o479;
        try {
o479.o508.o509(o479, {
            o489: Math.o75(o535, o536)
        });
}catch(e){}
    },
    o41: function (o31, flags, o503, o714, o715) {
        try {
flags = typeof flags === 'string' ? o474.o703(flags) : flags;
}catch(e){}
        try {
o503 = typeof o503 === 'undefined' ? 438 /* 0666 */ : o503;
}catch(e){}
        try {
if ((flags & 64)) {
            try {
o503 = (o503 & 4095) | 32768;
}catch(e){}
        } else {
            try {
o503 = 0;
}catch(e){}
        }
}catch(e){}
        var o479;
        try {
if (typeof o31 === 'object') {
            try {
o479 = o31;
}catch(e){}
        } else {
            try {
o31 = o591.normalize(o31);
}catch(e){}
            try {
try {
                var o510 = o474.o603(o31, {
                    o682: !(flags & 131072)
                });
                try {
o479 = o510.o479;
}catch(e){}
            } catch (o189) {
                // ignore
            }
}catch(e){}
        }
}catch(e){}
        // perhaps we need to create the node
        try {
if ((flags & 64)) {
            try {
if (o479) {
                // if O_CREAT and O_EXCL are set, error out if the node already exists
                try {
if ((flags & 128)) {
                    try {
throw new o474.o481(o341.o359);
}catch(e){}
                }
}catch(e){}
            } else {
                // node doesn't exist, try to create it
                try {
o479 = o474.o511(o31, o503, 0);
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
if (!o479) {
            try {
throw new o474.o481(o341.o343);
}catch(e){}
        }
}catch(e){}
        // can't truncate a device
        try {
if (o474.o528(o479.o503)) {
            try {
flags &= ~512;
}catch(e){}
        }
}catch(e){}
        // check permissions
        var o565 = o474.o711(o479, flags);
        try {
if (o565) {
            try {
throw new o474.o481(o565);
}catch(e){}
        }
}catch(e){}
        // do truncation if necessary
        try {
if ((flags & 512)) {
            try {
o474.o759(o479, 0);
}catch(e){}
        }
}catch(e){}
        // we've already handled these, don't pass down to the underlying vfs
        try {
flags &= ~(128 | 512);
}catch(e){}

        // register the stream with the filesystem
        var o477 = o474.o718({
            o479: o479,
            o31: o474.o685(o479), // we want the absolute path to the node
            flags: flags,
            o482: true,
            o548: 0,
            o476: o479.o476,
            // used by the file family libc calls (fopen, fwrite, ferror, etc.)
            o551: [],
            o586: false
        }, o714, o715);
        // call the new stream's open function
        try {
if (o477.o476.o41) {
            try {
o477.o476.o41(o477);
}catch(e){}
        }
}catch(e){}
        try {
if (Module['logReadFiles'] && !(flags & 1)) {
            try {
if (!o474.o762) try {
o474.o762 = {};
}catch(e){}
}catch(e){}
            try {
if (!(o31 in o474.o762)) {
                try {
o474.o762[o31] = 1;
}catch(e){}
                try {
Module['printErr']('read file: ' + o31);
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
return o477;
}catch(e){}
    },
    o483: function (o477) {
        try {
try {
            try {
if (o477.o476.o483) {
                try {
o477.o476.o483(o477);
}catch(e){}
            }
}catch(e){}
        } catch (o189) {
            try {
throw o189;
}catch(e){}
        } finally {
            try {
o474.o725(o477.o716);
}catch(e){}
        }
}catch(e){}
    },
    o517: function (o477, o107, o550) {
        try {
if (!o477.o482 || !o477.o476.o517) {
            try {
throw new o474.o481(o341.o371);
}catch(e){}
        }
}catch(e){}
        try {
return o477.o476.o517(o477, o107, o550);
}catch(e){}
    },
    o27: function (o477, buffer, o107, length, o548) {
        try {
if (length < 0 || o548 < 0) {
            try {
throw new o474.o481(o341.o364);
}catch(e){}
        }
}catch(e){}
        try {
if ((o477.flags & 2097155) === 1) {
            try {
throw new o474.o481(o341.o350);
}catch(e){}
        }
}catch(e){}
        try {
if (o474.o523(o477.o479.o503)) {
            try {
throw new o474.o481(o341.o363);
}catch(e){}
        }
}catch(e){}
        try {
if (!o477.o476.o27) {
            try {
throw new o474.o481(o341.o364);
}catch(e){}
        }
}catch(e){}
        var o763 = true;
        try {
if (typeof o548 === 'undefined') {
            try {
o548 = o477.o548;
}catch(e){}
            try {
o763 = false;
}catch(e){}
        } else try {
if (!o477.o482) {
            try {
throw new o474.o481(o341.o371);
}catch(e){}
        }
}catch(e){}
}catch(e){}
        var o487 = o477.o476.o27(o477, buffer, o107, length, o548);
        try {
if (!o763) try {
o477.o548 += o487;
}catch(e){}
}catch(e){}
        try {
return o487;
}catch(e){}
    },
    write: function (o477, buffer, o107, length, o548, o549) {
        try {
if (length < 0 || o548 < 0) {
            try {
throw new o474.o481(o341.o364);
}catch(e){}
        }
}catch(e){}
        try {
if ((o477.flags & 2097155) === 0) {
            try {
throw new o474.o481(o341.o350);
}catch(e){}
        }
}catch(e){}
        try {
if (o474.o523(o477.o479.o503)) {
            try {
throw new o474.o481(o341.o363);
}catch(e){}
        }
}catch(e){}
        try {
if (!o477.o476.write) {
            try {
throw new o474.o481(o341.o364);
}catch(e){}
        }
}catch(e){}
        var o763 = true;
        try {
if (typeof o548 === 'undefined') {
            try {
o548 = o477.o548;
}catch(e){}
            try {
o763 = false;
}catch(e){}
        } else try {
if (!o477.o482) {
            try {
throw new o474.o481(o341.o371);
}catch(e){}
        }
}catch(e){}
}catch(e){}
        try {
if (o477.flags & 1024) {
            // seek to the end before writing in append mode
            try {
o474.o517(o477, 0, 2);
}catch(e){}
        }
}catch(e){}
        var o764 = o477.o476.write(o477, buffer, o107, length, o548, o549);
        try {
if (!o763) try {
o477.o548 += o764;
}catch(e){}
}catch(e){}
        try {
return o764;
}catch(e){}
    },
    o215: function (o477, o107, length) {
        try {
if (o107 < 0 || length <= 0) {
            try {
throw new o474.o481(o341.o364);
}catch(e){}
        }
}catch(e){}
        try {
if ((o477.flags & 2097155) === 0) {
            try {
throw new o474.o481(o341.o350);
}catch(e){}
        }
}catch(e){}
        try {
if (!o474.o525(o477.o479.o503) && !o474.o523(o479.o503)) {
            try {
throw new o474.o481(o341.o361);
}catch(e){}
        }
}catch(e){}
        try {
if (!o477.o476.o215) {
            try {
throw new o474.o481(o341.o424);
}catch(e){}
        }
}catch(e){}
        try {
o477.o476.o215(o477, o107, length);
}catch(e){}
    },
    o519: function (o477, buffer, o107, length, o548, o552, flags) {
        // TODO if PROT is PROT_WRITE, make sure we have write access
        try {
if ((o477.flags & 2097155) === 1) {
            try {
throw new o474.o481(o341.o355);
}catch(e){}
        }
}catch(e){}
        try {
if (!o477.o476.o519) {
            try {
throw new o474.o481(o341.o361);
}catch(e){}
        }
}catch(e){}
        try {
return o477.o476.o519(o477, buffer, o107, length, o548, o552, flags);
}catch(e){}
    },
    o765: function (o477, o766, o196) {
        try {
if (!o477.o476.o765) {
            try {
throw new o474.o481(o341.o367);
}catch(e){}
        }
}catch(e){}
        try {
return o477.o476.o765(o477, o766, o196);
}catch(e){}
    },
    o767: function (o31, o626) {
        try {
o626 = o626 || {};
}catch(e){}
        try {
o626.flags = o626.flags || 'r';
}catch(e){}
        try {
o626.o608 = o626.o608 || 'binary';
}catch(e){}
        try {
if (o626.o608 !== 'utf8' && o626.o608 !== 'binary') {
            try {
throw new Error('Invalid encoding type "' + o626.o608 + '"');
}catch(e){}
        }
}catch(e){}
        var o30;
        var o477 = o474.o41(o31, o626.flags);
        var o595 = o474.o595(o31);
        var length = o595.o85;
        var o768 = new Uint8Array(length);
        try {
o474.o27(o477, o768, 0, length, 0);
}catch(e){}
        try {
if (o626.o608 === 'utf8') {
            try {
o30 = '';
}catch(e){}
            var o229 = new o48.o129();
            try {
for (var o82 = 0; o82 < length; o82++) {
                try {
o30 += o229.o131(o768[o82]);
}catch(e){}
            }
}catch(e){}
        } else try {
if (o626.o608 === 'binary') {
            try {
o30 = o768;
}catch(e){}
        }
}catch(e){}
}catch(e){}
        try {
o474.o483(o477);
}catch(e){}
        try {
return o30;
}catch(e){}
    },
    o607: function (o31, o769, o626) {
        try {
o626 = o626 || {};
}catch(e){}
        try {
o626.flags = o626.flags || 'w';
}catch(e){}
        try {
o626.o608 = o626.o608 || 'utf8';
}catch(e){}
        try {
if (o626.o608 !== 'utf8' && o626.o608 !== 'binary') {
            try {
throw new Error('Invalid encoding type "' + o626.o608 + '"');
}catch(e){}
        }
}catch(e){}
        var o477 = o474.o41(o31, o626.flags, o626.o503);
        try {
if (o626.o608 === 'utf8') {
            var o229 = new o48.o129();
            var o768 = new Uint8Array(o229.o137(o769));
            try {
o474.write(o477, o768, 0, o768.length, 0, o626.o549);
}catch(e){}
        } else try {
if (o626.o608 === 'binary') {
            try {
o474.write(o477, o769, 0, o769.length, 0, o626.o549);
}catch(e){}
        }
}catch(e){}
}catch(e){}
        try {
o474.o483(o477);
}catch(e){}
    },
    o672: function () {
        try {
return o474.o667;
}catch(e){}
    },
    o770: function (o31) {
        var o510 = o474.o603(o31, {
            o682: true
        });
        try {
if (!o474.o523(o510.o479.o503)) {
            try {
throw new o474.o481(o341.o362);
}catch(e){}
        }
}catch(e){}
        var o565 = o474.o707(o510.o479, 'x');
        try {
if (o565) {
            try {
throw new o474.o481(o565);
}catch(e){}
        }
}catch(e){}
        try {
o474.o667 = o510.o31;
}catch(e){}
    },
    o771: function () {
        try {
o474.o606('/tmp');
}catch(e){}
    },
    o772: function () {
        // create /dev
        try {
o474.o606('/dev');
}catch(e){}
        // setup /dev/null
        try {
o474.o475(o474.o732(1, 3), {
            o27: function () {
                try {
return 0;
}catch(e){}
            },
            write: function () {
                try {
return 0;
}catch(e){}
            }
        });
}catch(e){}
        try {
o474.o742('/dev/null', o474.o732(1, 3));
}catch(e){}
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using Module['printErr']
        // so we register a second tty just for it.
        try {
o466.o470(o474.o732(5, 0), o466.o490);
}catch(e){}
        try {
o466.o470(o474.o732(6, 0), o466.o494);
}catch(e){}
        try {
o474.o742('/dev/tty', o474.o732(5, 0));
}catch(e){}
        try {
o474.o742('/dev/tty1', o474.o732(6, 0));
}catch(e){}
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        try {
o474.o606('/dev/shm');
}catch(e){}
        try {
o474.o606('/dev/shm/tmp');
}catch(e){}
    },
    o773: function () {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops

        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        try {
if (Module['stdin']) {
            try {
o474.o774('/dev', 'stdin', Module['stdin']);
}catch(e){}
        } else {
            try {
o474.o516('/dev/tty', '/dev/stdin');
}catch(e){}
        }
}catch(e){}
        try {
if (Module['stdout']) {
            try {
o474.o774('/dev', 'stdout', null, Module['stdout']);
}catch(e){}
        } else {
            try {
o474.o516('/dev/tty', '/dev/stdout');
}catch(e){}
        }
}catch(e){}
        try {
if (Module['stderr']) {
            try {
o474.o774('/dev', 'stderr', null, Module['stderr']);
}catch(e){}
        } else {
            try {
o474.o516('/dev/tty1', '/dev/stderr');
}catch(e){}
        }
}catch(e){}

        // open default streams for the stdin, stdout and stderr devices
        var o775 = o474.o41('/dev/stdin', 'r');
        try {
o202[((o658) >> 2)] = o474.o727(o775);
}catch(e){}
        try {
o73(o775.o716 === 0, 'invalid handle for stdin (' + o775.o716 + ')');
}catch(e){}

        var o776 = o474.o41('/dev/stdout', 'w');
        try {
o202[((o659) >> 2)] = o474.o727(o776);
}catch(e){}
        try {
o73(o776.o716 === 1, 'invalid handle for stdout (' + o776.o716 + ')');
}catch(e){}

        var o777 = o474.o41('/dev/stderr', 'w');
        try {
o202[((o660) >> 2)] = o474.o727(o777);
}catch(e){}
        try {
o73(o777.o716 === 2, 'invalid handle for stderr (' + o777.o716 + ')');
}catch(e){}
    },
    o778: function () {
        try {
if (o474.o481) try {
return;
}catch(e){}
}catch(e){}
        try {
o474.o481 = function o481(o671) {
            try {
this.o671 = o671;
}catch(e){}
            try {
for (var key in o341) {
                try {
if (o341[key] === o671) {
                    try {
this.o119 = key;
}catch(e){}
                    try {
break;
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
this.o779 = o463[o671];
}catch(e){}
        };
}catch(e){}
        try {
o474.o481.prototype = new Error();
}catch(e){}
        try {
o474.o481.prototype.constructor = o474.o481;
}catch(e){}
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        try {
[o341.o343].forEach(function (o119) {
            try {
o474.o540[o119] = new o474.o481(o119);
}catch(e){}
            try {
o474.o540[o119].o190 = '<generic error, no stack>';
}catch(e){}
        });
}catch(e){}
    },
    o623: function () {
        try {
o474.o778();
}catch(e){}

        try {
o474.o666 = new Array(4096);
}catch(e){}

        try {
o474.o500(o495, {}, '/');
}catch(e){}

        try {
o474.o771();
}catch(e){}
        try {
o474.o772();
}catch(e){}
    },
    o468: function (input, o473, o586) {
        try {
o73(!o474.o468.o668, 'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)');
}catch(e){}
        try {
o474.o468.o668 = true;
}catch(e){}

        try {
o474.o778();
}catch(e){}

        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        try {
Module['stdin'] = input || Module['stdin'];
}catch(e){}
        try {
Module['stdout'] = o473 || Module['stdout'];
}catch(e){}
        try {
Module['stderr'] = o586 || Module['stderr'];
}catch(e){}

        try {
o474.o773();
}catch(e){}
    },
    o780: function () {
        try {
o474.o468.o668 = false;
}catch(e){}
        try {
for (var o82 = 0; o82 < o474.o664.length; o82++) {
            var o477 = o474.o664[o82];
            try {
if (!o477) {
                try {
continue;
}catch(e){}
            }
}catch(e){}
            try {
o474.o483(o477);
}catch(e){}
        }
}catch(e){}
    },
    o625: function (o781, o782) {
        var o503 = 0;
        try {
if (o781) try {
o503 |= 292 | 73;
}catch(e){}
}catch(e){}
        try {
if (o782) try {
o503 |= 146;
}catch(e){}
}catch(e){}
        try {
return o503;
}catch(e){}
    },
    o783: function (o249, o784) {
        var o31 = o591.join.apply(null, o249);
        try {
if (o784 && o31[0] == '/') try {
o31 = o31.substr(1);
}catch(e){}
}catch(e){}
        try {
return o31;
}catch(e){}
    },
    o785: function (o750, o786) {
        try {
return o591.resolve(o786, o750);
}catch(e){}
    },
    o787: function (o31) {
        try {
return o591.normalize(o31);
}catch(e){}
    },
    o788: function (o31, o789) {
        var o30 = o474.o790(o31, o789);
        try {
if (o30.o791) {
            try {
return o30.o720;
}catch(e){}
        } else {
            try {
o465(o30.o586);
}catch(e){}
            try {
return null;
}catch(e){}
        }
}catch(e){}
    },
    o790: function (o31, o789) {
        // operate from within the context of the symlink's target
        try {
try {
            var o510 = o474.o603(o31, {
                o682: !o789
            });
            try {
o31 = o510.o31;
}catch(e){}
        } catch (o189) {}
}catch(e){}
        var o30 = {
            o686: false,
            o791: false,
            o586: 0,
            name: null,
            o31: null,
            o720: null,
            o792: false,
            o793: null,
            o794: null
        };
        try {
try {
            var o510 = o474.o603(o31, {
                o502: true
            });
            try {
o30.o792 = true;
}catch(e){}
            try {
o30.o793 = o510.o31;
}catch(e){}
            try {
o30.o794 = o510.o479;
}catch(e){}
            try {
o30.name = o591.o741(o31);
}catch(e){}
            try {
o510 = o474.o603(o31, {
                o682: !o789
            });
}catch(e){}
            try {
o30.o791 = true;
}catch(e){}
            try {
o30.o31 = o510.o31;
}catch(e){}
            try {
o30.o720 = o510.o479;
}catch(e){}
            try {
o30.name = o510.o479.name;
}catch(e){}
            try {
o30.o686 = o510.o31 === '/';
}catch(e){}
        } catch (o189) {
            try {
o30.o586 = o189.o671;
}catch(e){}
        }try {

}catch(e){};
}catch(e){}
        try {
return o30;
}catch(e){}
    },
    o795: function (o502, name, o781, o782) {
        var o31 = o591.o592(typeof o502 === 'string' ? o502 : o474.o685(o502), name);
        var o503 = o474.o625(o781, o782);
        try {
return o474.o606(o31, o503);
}catch(e){}
    },
    o796: function (o502, o31, o781, o782) {
        try {
o502 = typeof o502 === 'string' ? o502 : o474.o685(o502);
}catch(e){}
        var o249 = o31.split('/').reverse();
        try {
while (o249.length) {
            var o797 = o249.pop();
            try {
if (!o797) try {
continue;
}catch(e){}
}catch(e){}
            var o677 = o591.o592(o502, o797);
            try {
try {
                try {
o474.o606(o677);
}catch(e){}
            } catch (o189) {
                // ignore EEXIST
            }
}catch(e){}
            try {
o502 = o677;
}catch(e){}
        }
}catch(e){}
        try {
return o677;
}catch(e){}
    },
    o798: function (o502, name, o799, o781, o782) {
        var o31 = o591.o592(typeof o502 === 'string' ? o502 : o474.o685(o502), name);
        var o503 = o474.o625(o781, o782);
        try {
return o474.create(o31, o503);
}catch(e){}
    },
    o800: function (o502, name, o769, o781, o782, o549) {
        var o31 = name ? o591.o592(typeof o502 === 'string' ? o502 : o474.o685(o502), name) : o502;
        var o503 = o474.o625(o781, o782);
        var o479 = o474.create(o31, o503);
        try {
if (o769) {
            try {
if (typeof o769 === 'string') {
                var o801 = new Array(o769.length);
                try {
for (var o82 = 0, o760 = o769.length; o82 < o760; ++o82) try {
o801[o82] = o769.charCodeAt(o82);
}catch(e){}
}catch(e){}
                try {
o769 = o801;
}catch(e){}
            }
}catch(e){}
            // make sure we can write to the file
            try {
o474.o753(o479, o503 | 146);
}catch(e){}
            var o477 = o474.o41(o479, 'w');
            try {
o474.write(o477, o769, 0, o769.length, 0, o549);
}catch(e){}
            try {
o474.o483(o477);
}catch(e){}
            try {
o474.o753(o479, o503);
}catch(e){}
        }
}catch(e){}
        try {
return o479;
}catch(e){}
    },
    o774: function (o502, name, input, o473) {
        var o31 = o591.o592(typeof o502 === 'string' ? o502 : o474.o685(o502), name);
        var o503 = o474.o625(!!input, !!o473);
        try {
if (!o474.o774.o730) try {
o474.o774.o730 = 64;
}catch(e){}
}catch(e){}
        var o471 = o474.o732(o474.o774.o730++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        try {
o474.o475(o471, {
            o41: function (o477) {
                try {
o477.o482 = false;
}catch(e){}
            },
            o483: function (o477) {
                // flush any pending line data
                try {
if (o473 && o473.buffer && o473.buffer.length) {
                    try {
o473(10);
}catch(e){}
                }
}catch(e){}
            },
            o27: function (o477, buffer, o107, length, o485 /* ignored */ ) {
                var o487 = 0;
                try {
for (var o82 = 0; o82 < length; o82++) {
                    var o488;
                    try {
try {
                        try {
o488 = input();
}catch(e){}
                    } catch (o189) {
                        try {
throw new o474.o481(o341.o346);
}catch(e){}
                    }
}catch(e){}
                    try {
if (o488 === undefined && o487 === 0) {
                        try {
throw new o474.o481(o341.o352);
}catch(e){}
                    }
}catch(e){}
                    try {
if (o488 === null || o488 === undefined) try {
break;
}catch(e){}
}catch(e){}
                    try {
o487++;
}catch(e){}
                    try {
buffer[o107 + o82] = o488;
}catch(e){}
                }
}catch(e){}
                try {
if (o487) {
                    try {
o477.o479.o489 = Date.o4();
}catch(e){}
                }
}catch(e){}
                try {
return o487;
}catch(e){}
            },
            write: function (o477, buffer, o107, length, o485) {
                try {
for (var o82 = 0; o82 < length; o82++) {
                    try {
try {
                        try {
o473(buffer[o107 + o82]);
}catch(e){}
                    } catch (o189) {
                        try {
throw new o474.o481(o341.o346);
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){}
                try {
if (length) {
                    try {
o477.o479.o489 = Date.o4();
}catch(e){}
                }
}catch(e){}
                try {
return o82;
}catch(e){}
            }
        });
}catch(e){}
        try {
return o474.o742(o31, o503, o471);
}catch(e){}
    },
    o802: function (o502, name, target, o781, o782) {
        var o31 = o591.o592(typeof o502 === 'string' ? o502 : o474.o685(o502), name);
        try {
return o474.o516(target, o31);
}catch(e){}
    },
    o803: function (o804) {
        try {
if (o804.o699 || o804.o698 || o804.link || o804.o524) try {
return true;
}catch(e){}
}catch(e){}
        var o805 = true;
        try {
if (typeof o40 !== 'undefined') {
            try {
throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
}catch(e){}
        } else try {
if (Module['read']) {
            // Command-line.
            try {
try {
                // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
                //          read() will try to parse UTF8.
                try {
o804.o524 = o192(Module['read'](o804.o38), true);
}catch(e){}
            } catch (o189) {
                try {
o805 = false;
}catch(e){}
            }
}catch(e){}
        } else {
            try {
throw new Error('Cannot load without read() or XMLHttpRequest.');
}catch(e){}
        }
}catch(e){}
}catch(e){}
        try {
if (!o805) try {
o465(o341.o346);
}catch(e){}
}catch(e){}
        try {
return o805;
}catch(e){}
    },
    o806: function (o502, name, o38, o781, o782) {
        try {
if (typeof o40 !== 'undefined') {
            try {
if (!o20) try {
throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
}catch(e){}
}catch(e){}
            // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
            function o807() {
                try {
this.o808 = false;
}catch(e){}
                try {
this.o809 = [];
}catch(e){} // Loaded chunks. Index is the chunk number
            }
            try {
o807.prototype.get = function o810(o740) {
                try {
if (o740 > this.length - 1 || o740 < 0) {
                    try {
return undefined;
}catch(e){}
                }
}catch(e){}
                var o811 = o740 % this.o812;
                var o813 = Math.floor(o740 / this.o812);
                try {
return this.getter(o813)[o811];
}catch(e){}
            }
}catch(e){}
            try {
o807.prototype.o814 = function o815(getter) {
                try {
this.getter = getter;
}catch(e){}
            }
}catch(e){}
            try {
o807.prototype.o816 = function o817() {
                // Find length
                var o39 = new o40();
                try {
o39.o41('HEAD', o38, false);
}catch(e){}
                try {
o39.o42(null);
}catch(e){}
                try {
if (!(o39.o818 >= 200 && o39.o818 < 300 || o39.o818 === 304)) try {
throw new Error("Couldn't load " + o38 + ". Status: " + o39.o818);
}catch(e){}
}catch(e){}
                var o819 = Number(o39.o820("Content-length"));
                var o821;
                var o822 = (o821 = o39.o820("Accept-Ranges")) && o821 === "bytes";
                var o812 = 1024 * 1024; // Chunk size in bytes

                try {
if (!o822) try {
o812 = o819;
}catch(e){}
}catch(e){}

                // Function to get a range from the remote URL.
                var o823 = (function (from, o824) {
                    try {
if (from > o824) try {
throw new Error("invalid range (" + from + ", " + o824 + ") or no bytes requested!");
}catch(e){}
}catch(e){}
                    try {
if (o824 > o819 - 1) try {
throw new Error("only " + o819 + " bytes available! programmer error!");
}catch(e){}
}catch(e){}

                    // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
                    var o39 = new o40();
                    try {
o39.o41('GET', o38, false);
}catch(e){}
                    try {
if (o819 !== o812) try {
o39.o825("Range", "bytes=" + from + "-" + o824);
}catch(e){}
}catch(e){}

                    // Some hints to the browser that we want binary data.
                    try {
if (typeof Uint8Array != 'undefined') try {
o39.o826 = 'arraybuffer';
}catch(e){}
}catch(e){}
                    try {
if (o39.o827) {
                        try {
o39.o827('text/plain; charset=x-user-defined');
}catch(e){}
                    }
}catch(e){}

                    try {
o39.o42(null);
}catch(e){}
                    try {
if (!(o39.o818 >= 200 && o39.o818 < 300 || o39.o818 === 304)) try {
throw new Error("Couldn't load " + o38 + ". Status: " + o39.o818);
}catch(e){}
}catch(e){}
                    try {
if (o39.o828 !== undefined) {
                        try {
return new Uint8Array(o39.o828 || []);
}catch(e){}
                    } else {
                        try {
return o192(o39.o43 || '', true);
}catch(e){}
                    }
}catch(e){}
                });
                var o829 = this;
                try {
o829.o814(function (o813) {
                    var o830 = o813 * o812;
                    var o260 = (o813 + 1) * o812 - 1; // including this byte
                    try {
o260 = Math.o87(o260, o819 - 1);
}catch(e){} // if datalength-1 is selected, this is the last block
                    try {
if (typeof (o829.o809[o813]) === "undefined") {
                        try {
o829.o809[o813] = o823(o830, o260);
}catch(e){}
                    }
}catch(e){}
                    try {
if (typeof (o829.o809[o813]) === "undefined") try {
throw new Error("doXHR failed!");
}catch(e){}
}catch(e){}
                    try {
return o829.o809[o813];
}catch(e){}
                });
}catch(e){}

                try {
this.o831 = o819;
}catch(e){}
                try {
this.o832 = o812;
}catch(e){}
                try {
this.o808 = true;
}catch(e){}
            }
}catch(e){}

            var o829 = new o807();
            try {
Object.defineProperty(o829, "length", {
                get: function () {
                    try {
if (!this.o808) {
                        try {
this.o816();
}catch(e){}
                    }
}catch(e){}
                    try {
return this.o831;
}catch(e){}
                }
            });
}catch(e){}
            try {
Object.defineProperty(o829, "chunkSize", {
                get: function () {
                    try {
if (!this.o808) {
                        try {
this.o816();
}catch(e){}
                    }
}catch(e){}
                    try {
return this.o832;
}catch(e){}
                }
            });
}catch(e){}

            var o799 = {
                o699: false,
                o524: o829
            };
        } else {
            var o799 = {
                o699: false,
                o38: o38
            };
        }
}catch(e){}

        var o479 = o474.o798(o502, name, o799, o781, o782);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        try {
if (o799.o524) {
            try {
o479.o524 = o799.o524;
}catch(e){}
        } else try {
if (o799.o38) {
            try {
o479.o524 = null;
}catch(e){}
            try {
o479.o38 = o799.o38;
}catch(e){}
        }
}catch(e){}
}catch(e){}
        // override each stream op with one that tries to force load the lazy file first
        var o476 = {};
        var keys = Object.keys(o479.o476);
        try {
keys.forEach(function (key) {
            var o833 = o479.o476[key];
            try {
o476[key] = function o834() {
                try {
if (!o474.o803(o479)) {
                    try {
throw new o474.o481(o341.o346);
}catch(e){}
                }
}catch(e){}
                try {
return o833.apply(null, arguments);
}catch(e){}
            };
}catch(e){}
        });
}catch(e){}
        // use a custom read function
        try {
o476.o27 = function o835(o477, buffer, o107, length, o548) {
            try {
if (!o474.o803(o479)) {
                try {
throw new o474.o481(o341.o346);
}catch(e){}
            }
}catch(e){}
            var o524 = o477.o479.o524;
            try {
if (o548 >= o524.length)
                try {
return 0;
}catch(e){}
}catch(e){}
            var o85 = Math.o87(o524.length - o548, length);
            try {
o73(o85 >= 0);
}catch(e){}
            try {
if (o524.slice) { // normal array
                try {
for (var o82 = 0; o82 < o85; o82++) {
                    try {
buffer[o107 + o82] = o524[o548 + o82];
}catch(e){}
                }
}catch(e){}
            } else {
                try {
for (var o82 = 0; o82 < o85; o82++) { // LazyUint8Array from sync binary XHR
                    try {
buffer[o107 + o82] = o524.get(o548 + o82);
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
return o85;
}catch(e){}
        };
}catch(e){}
        try {
o479.o476 = o476;
}catch(e){}
        try {
return o479;
}catch(e){}
    },
    o836: function (o502, name, o38, o781, o782, o837, o585, o838, o549) {
        try {
o839.o468();
}catch(e){}
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var o840 = name ? o591.resolve(o591.o592(o502, name)) : o502;

        function o841(o842) {
            function o843(o842) {
                try {
if (!o838) {
                    try {
o474.o800(o502, name, o842, o781, o782, o549);
}catch(e){}
                }
}catch(e){}
                try {
if (o837) try {
o837();
}catch(e){}
}catch(e){}
                try {
o334('cp ' + o840);
}catch(e){}
            }
            var o844 = false;
            try {
Module['preloadPlugins'].forEach(function (o845) {
                try {
if (o844) try {
return;
}catch(e){}
}catch(e){}
                try {
if (o845['canHandle'](o840)) {
                    try {
o845['handle'](o842, o840, o843, function () {
                        try {
if (o585) try {
o585();
}catch(e){}
}catch(e){}
                        try {
o334('cp ' + o840);
}catch(e){}
                    });
}catch(e){}
                    try {
o844 = true;
}catch(e){}
                }
}catch(e){}
            });
}catch(e){}
            try {
if (!o844) try {
o843(o842);
}catch(e){}
}catch(e){}
        }
        try {
o332('cp ' + o840);
}catch(e){}
        try {
if (typeof o38 == 'string') {
            try {
o839.o846(o38, function (o842) {
                try {
o841(o842);
}catch(e){}
            }, o585);
}catch(e){}
        } else {
            try {
o841(o38);
}catch(e){}
        }
}catch(e){}
    },
    o556: function () {
        try {
return o19.o556 || o19.o557 || o19.o558 || o19.o559;
}catch(e){}
    },
    o847: function () {
        try {
return 'EM_FS_' + o19.o848.o849;
}catch(e){}
    },
    o560: 20,
    o561: "FILE_DATA",
    o850: function (o851, o837, o585) {
        try {
o837 = o837 || function () {};
}catch(e){}
        try {
o585 = o585 || function () {};
}catch(e){}
        var o556 = o474.o556();
        try {
try {
            var o852 = o556.o41(o474.o847(), o474.o560);
        } catch (o189) {
            try {
return o585(o189);
}catch(e){}
        }
}catch(e){}
        try {
o852.o575 = function o853() {
            try {
o44.o45('creating db');
}catch(e){}
            var o573 = o852.o488;
            try {
o573.o581(o474.o561);
}catch(e){}
        };
}catch(e){}
        try {
o852.o584 = function o854() {
            var o573 = o852.o488;
            var o576 = o573.o576([o474.o561], 'readwrite');
            var o855 = o576.o580(o474.o561);
            var o856 = 0,
                o857 = 0,
                o616 = o851.length;

            function o843() {
                try {
if (o857 == 0) try {
o837();
}catch(e){}
                else try {
o585();
}catch(e){}
}catch(e){}
            }
            try {
o851.forEach(function (o31) {
                var o858 = o855.o613(o474.o790(o31).o720.o524, o31);
                try {
o858.o584 = function o859() {
                    try {
o856++;
}catch(e){}
                    try {
if (o856 + o857 == o616) try {
o843()
}catch(e){}
}catch(e){}
                };
}catch(e){}
                try {
o858.o585 = function o860() {
                    try {
o857++;
}catch(e){}
                    try {
if (o856 + o857 == o616) try {
o843()
}catch(e){}
}catch(e){}
                };
}catch(e){}
            });
}catch(e){}
            try {
o576.o585 = o585;
}catch(e){}
        };
}catch(e){}
        try {
o852.o585 = o585;
}catch(e){}
    },
    o861: function (o851, o837, o585) {
        try {
o837 = o837 || function () {};
}catch(e){}
        try {
o585 = o585 || function () {};
}catch(e){}
        var o556 = o474.o556();
        try {
try {
            var o852 = o556.o41(o474.o847(), o474.o560);
        } catch (o189) {
            try {
return o585(o189);
}catch(e){}
        }
}catch(e){}
        try {
o852.o575 = o585;
}catch(e){} // no database to load from
        try {
o852.o584 = function o854() {
            var o573 = o852.o488;
            try {
try {
                var o576 = o573.o576([o474.o561], 'readonly');
            } catch (o189) {
                try {
o585(o189);
}catch(e){}
                try {
return;
}catch(e){}
            }
}catch(e){}
            var o855 = o576.o580(o474.o561);
            var o856 = 0,
                o857 = 0,
                o616 = o851.length;

            function o843() {
                try {
if (o857 == 0) try {
o837();
}catch(e){}
                else try {
o585();
}catch(e){}
}catch(e){}
            }
            try {
o851.forEach(function (o31) {
                var o862 = o855.get(o31);
                try {
o862.o584 = function o863() {
                    try {
if (o474.o790(o31).o791) {
                        try {
o474.o513(o31);
}catch(e){}
                    }
}catch(e){}
                    try {
o474.o800(o591.o684(o31), o591.o741(o31), o862.o488, true, true, true);
}catch(e){}
                    try {
o856++;
}catch(e){}
                    try {
if (o856 + o857 == o616) try {
o843();
}catch(e){}
}catch(e){}
                };
}catch(e){}
                try {
o862.o585 = function o864() {
                    try {
o857++;
}catch(e){}
                    try {
if (o856 + o857 == o616) try {
o843()
}catch(e){}
}catch(e){}
                };
}catch(e){}
            });
}catch(e){}
            try {
o576.o585 = o585;
}catch(e){}
        };
}catch(e){}
        try {
o852.o585 = o585;
}catch(e){}
    }
};
var o591 = {
    o865: function (o28) {
        var o866 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        try {
return o866.exec(o28).slice(1);
}catch(e){}
    },
    o676: function (o249, o867) {
        // if the path tries to go above the root, `up` ends up > 0
        var o868 = 0;
        try {
for (var o82 = o249.length - 1; o82 >= 0; o82--) {
            var o869 = o249[o82];
            try {
if (o869 === '.') {
                try {
o249.splice(o82, 1);
}catch(e){}
            } else try {
if (o869 === '..') {
                try {
o249.splice(o82, 1);
}catch(e){}
                try {
o868++;
}catch(e){}
            } else try {
if (o868) {
                try {
o249.splice(o82, 1);
}catch(e){}
                try {
o868--;
}catch(e){}
            }
}catch(e){}
}catch(e){}
}catch(e){}
        }
}catch(e){}
        // if the path is allowed to go above the root, restore leading ..s
        try {
if (o867) {
            try {
for (; o868--; o868) {
                try {
o249.unshift('..');
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
return o249;
}catch(e){}
    },
    normalize: function (o31) {
        var o870 = o31.charAt(0) === '/',
            o871 = o31.substr(-1) === '/';
        // Normalize the path
        try {
o31 = o591.o676(o31.split('/').filter(function (o588) {
            try {
return !!o588;
}catch(e){}
        }), !o870).join('/');
}catch(e){}
        try {
if (!o31 && !o870) {
            try {
o31 = '.';
}catch(e){}
        }
}catch(e){}
        try {
if (o31 && o871) {
            try {
o31 += '/';
}catch(e){}
        }
}catch(e){}
        try {
return (o870 ? '/' : '') + o31;
}catch(e){}
    },
    o684: function (o31) {
        var o488 = o591.o865(o31),
            o590 = o488[0],
            o506 = o488[1];
        try {
if (!o590 && !o506) {
            // No dirname whatsoever
            try {
return '.';
}catch(e){}
        }
}catch(e){}
        try {
if (o506) {
            // It has a dirname, strip trailing slash
            try {
o506 = o506.substr(0, o506.length - 1);
}catch(e){}
        }
}catch(e){}
        try {
return o590 + o506;
}catch(e){}
    },
    o741: function (o31) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        try {
if (o31 === '/') try {
return '/';
}catch(e){}
}catch(e){}
        var o872 = o31.lastIndexOf('/');
        try {
if (o872 === -1) try {
return o31;
}catch(e){}
}catch(e){}
        try {
return o31.substr(o872 + 1);
}catch(e){}
    },
    o873: function (o31) {
        try {
return o591.o865(o31)[3];
}catch(e){}
    },
    join: function () {
        var o851 = Array.prototype.slice.call(arguments, 0);
        try {
return o591.normalize(o851.join('/'));
}catch(e){}
    },
    o592: function (o65, o874) {
        try {
return o591.normalize(o65 + '/' + o874);
}catch(e){}
    },
    resolve: function () {
        var o875 = '',
            o876 = false;
        try {
for (var o82 = arguments.length - 1; o82 >= -1 && !o876; o82--) {
            var o31 = (o82 >= 0) ? arguments[o82] : o474.o672();
            // Skip empty and invalid entries
            try {
if (typeof o31 !== 'string') {
                try {
throw new o877('Arguments to path.resolve must be strings');
}catch(e){}
            } else try {
if (!o31) {
                try {
continue;
}catch(e){}
            }
}catch(e){}
}catch(e){}
            try {
o875 = o31 + '/' + o875;
}catch(e){}
            try {
o876 = o31.charAt(0) === '/';
}catch(e){}
        }
}catch(e){}
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        try {
o875 = o591.o676(o875.split('/').filter(function (o588) {
            try {
return !!o588;
}catch(e){}
        }), !o876).join('/');
}catch(e){}
        try {
return ((o876 ? '/' : '') + o875) || '.';
}catch(e){}
    },
    o750: function (from, o824) {
        try {
from = o591.resolve(from).substr(1);
}catch(e){}
        try {
o824 = o591.resolve(o824).substr(1);
}catch(e){}

        function o878(o801) {
            var o830 = 0;
            try {
for (; o830 < o801.length; o830++) {
                try {
if (o801[o830] !== '') try {
break;
}catch(e){}
}catch(e){}
            }
}catch(e){}
            var o260 = o801.length - 1;
            try {
for (; o260 >= 0; o260--) {
                try {
if (o801[o260] !== '') try {
break;
}catch(e){}
}catch(e){}
            }
}catch(e){}
            try {
if (o830 > o260) try {
return [];
}catch(e){}
}catch(e){}
            try {
return o801.slice(o830, o260 - o830 + 1);
}catch(e){}
        }
        var o879 = o878(from.split('/'));
        var o880 = o878(o824.split('/'));
        var length = Math.o87(o879.length, o880.length);
        var o881 = length;
        try {
for (var o82 = 0; o82 < length; o82++) {
            try {
if (o879[o82] !== o880[o82]) {
                try {
o881 = o82;
}catch(e){}
                try {
break;
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        var o882 = [];
        try {
for (var o82 = o881; o82 < o879.length; o82++) {
            try {
o882.push('..');
}catch(e){}
        }
}catch(e){}
        try {
o882 = o882.concat(o880.slice(o881));
}catch(e){}
        try {
return o882.join('/');
}catch(e){}
    }
};
var o839 = {
    o883: {
        o884: null,
        o885: "",
        o886: false,
        o887: false,
        o888: [],
        o889: function () {
            try {
o839.o883.o886 = true;
}catch(e){}
        },
        o890: function () {
            try {
if (o839.o883.o887) {
                try {
o839.o883.o887 = false;
}catch(e){}
                try {
o839.o883.o884();
}catch(e){}
            }
}catch(e){}
            try {
o839.o883.o886 = false;
}catch(e){}
        },
        o891: function () {
            try {
if (Module['setStatus']) {
                var o779 = Module['statusMessage'] || 'Please wait...';
                var o892 = o839.o883.o893;
                var o894 = o839.o883.o895;
                try {
if (o892) {
                    try {
if (o892 < o894) {
                        try {
Module['setStatus'](o779 + ' (' + (o894 - o892) + '/' + o894 + ')');
}catch(e){}
                    } else {
                        try {
Module['setStatus'](o779);
}catch(e){}
                    }
}catch(e){}
                } else {
                    try {
Module['setStatus']('');
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
        }
    },
    o896: false,
    o897: false,
    o898: [],
    o899: [],
    o468: function () {
        try {
if (!Module["preloadPlugins"]) try {
Module["preloadPlugins"] = [];
}catch(e){}
}catch(e){} // needs to exist even in workers

        try {
if (o839.o900 || o20) try {
return;
}catch(e){}
}catch(e){}
        try {
o839.o900 = true;
}catch(e){}

        try {
try {
            try {
new o901();
}catch(e){}
            try {
o839.o902 = true;
}catch(e){}
        } catch (o189) {
            try {
o839.o902 = false;
}catch(e){}
            try {
o44.o45("warning: no blob constructor, cannot create blobs with mimetypes");
}catch(e){}
        }
}catch(e){}
        try {
o839.o903 = typeof o904 != "undefined" ? o904 : (typeof o905 != "undefined" ? o905 : (!o839.o902 ? o44.o45("warning: no BlobBuilder") : null));
}catch(e){}
        try {
o839.o906 = typeof o19 != "undefined" ? (o19.o907 ? o19.o907 : o19.o908) : undefined;
}catch(e){}
        try {
if (!Module.o909 && typeof o839.o906 === 'undefined') {
            try {
o44.o45("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
}catch(e){}
            try {
Module.o909 = true;
}catch(e){}
        }
}catch(e){}

        // Support for plugins that can process preloaded files. You can add more of these to
        // your app by creating and appending to Module.preloadPlugins.
        //
        // Each plugin is asked if it can handle a file based on the file's name. If it can,
        // it is given the file's raw data. When it is done, it calls a callback with the file's
        // (possibly modified) data. For example, a plugin might decompress a file, or it
        // might create some side data structure for use later (like an Image element, etc.).

        var o910 = {};
        try {
o910['canHandle'] = function o911(name) {
            try {
return !Module.o909 && /\.(jpg|jpeg|png|bmp)$/i.test(name);
}catch(e){}
        };
}catch(e){}
        try {
o910['handle'] = function o912(o842, name, o837, o585) {
            var o308 = null;
            try {
if (o839.o902) {
                try {
try {
                    try {
o308 = new o901([o842], {
                        type: o839.o913(name)
                    });
}catch(e){}
                    try {
if (o308.o85 !== o842.length) { // Safari bug #118630
                        // Safari's Blob can only take an ArrayBuffer
                        try {
o308 = new o901([(new Uint8Array(o842)).buffer], {
                            type: o839.o913(name)
                        });
}catch(e){}
                    }
}catch(e){}
                } catch (o189) {
                    try {
o48.o123('Blob constructor present but fails: ' + o189 + '; falling back to blob builder');
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
if (!o308) {
                var o914 = new o839.o903();
                try {
o914.o915((new Uint8Array(o842)).buffer);
}catch(e){} // we need to pass a buffer, and must copy the array to get the right data range
                try {
o308 = o914.o916();
}catch(e){}
            }
}catch(e){}
            var o38 = o839.o906.o917(o308);
            var o918 = new o919();
            try {
o918.o837 = function o920() {
                try {
o73(o918.o921, 'Image ' + name + ' could not be decoded');
}catch(e){}
                var o922 = o923.o924('canvas');
                try {
o922.o925 = o918.o925;
}catch(e){}
                try {
o922.o926 = o918.o926;
}catch(e){}
                var o927 = o922.o928('2d');
                try {
o927.o929(o918, 0, 0);
}catch(e){}
                try {
Module["preloadedImages"][name] = o922;
}catch(e){}
                try {
o839.o906.o930(o38);
}catch(e){}
                try {
if (o837) try {
o837(o842);
}catch(e){}
}catch(e){}
            };
}catch(e){}
            try {
o918.o585 = function o931(o598) {
                try {
o44.o45('Image ' + o38 + ' could not be decoded');
}catch(e){}
                try {
if (o585) try {
o585();
}catch(e){}
}catch(e){}
            };
}catch(e){}
            try {
o918.o569 = o38;
}catch(e){}
        };
}catch(e){}
        try {
Module['preloadPlugins'].push(o910);
}catch(e){}

        var o932 = {};
        try {
o932['canHandle'] = function o933(name) {
            try {
return !Module.o934 && name.substr(-4) in {
                '.ogg': 1,
                '.wav': 1,
                '.mp3': 1
            };
}catch(e){}
        };
}catch(e){}
        try {
o932['handle'] = function o935(o842, name, o837, o585) {
            var done = false;

            function o843(o936) {
                try {
if (done) try {
return;
}catch(e){}
}catch(e){}
                try {
done = true;
}catch(e){}
                try {
Module["preloadedAudios"][name] = o936;
}catch(e){}
                try {
if (o837) try {
o837(o842);
}catch(e){}
}catch(e){}
            }

            function o857() {
                try {
if (done) try {
return;
}catch(e){}
}catch(e){}
                try {
done = true;
}catch(e){}
                try {
Module["preloadedAudios"][name] = new o937();
}catch(e){} // empty shim
                try {
if (o585) try {
o585();
}catch(e){}
}catch(e){}
            }
            try {
if (o839.o902) {
                try {
try {
                    var o308 = new o901([o842], {
                        type: o839.o913(name)
                    });
                } catch (o189) {
                    try {
return o857();
}catch(e){}
                }
}catch(e){}
                var o38 = o839.o906.o917(o308); // XXX we never revoke this!
                var o936 = new o937();
                try {
o936.o938('canplaythrough', function () {
                    try {
o843(o936)
}catch(e){}
                }, false);
}catch(e){} // use addEventListener due to chromium bug 124926
                try {
o936.o585 = function o939(o598) {
                    try {
if (done) try {
return;
}catch(e){}
}catch(e){}
                    try {
o44.o45('warning: browser could not fully decode audio ' + name + ', trying slower base64 approach');
}catch(e){}

                    function o940(o769) {
                        var o941 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                        var o942 = '=';
                        var o30 = '';
                        var o943 = 0;
                        var o944 = 0;
                        try {
for (var o82 = 0; o82 < o769.length; o82++) {
                            try {
o943 = (o943 << 8) | o769[o82];
}catch(e){}
                            try {
o944 += 8;
}catch(e){}
                            try {
while (o944 >= 6) {
                                var o99 = (o943 >> (o944 - 6)) & 0x3f;
                                try {
o944 -= 6;
}catch(e){}
                                try {
o30 += o941[o99];
}catch(e){}
                            }
}catch(e){}
                        }
}catch(e){}
                        try {
if (o944 == 2) {
                            try {
o30 += o941[(o943 & 3) << 4];
}catch(e){}
                            try {
o30 += o942 + o942;
}catch(e){}
                        } else try {
if (o944 == 4) {
                            try {
o30 += o941[(o943 & 0xf) << 2];
}catch(e){}
                            try {
o30 += o942;
}catch(e){}
                        }
}catch(e){}
}catch(e){}
                        try {
return o30;
}catch(e){}
                    }
                    try {
o936.o569 = 'data:audio/x-' + name.substr(-3) + ';base64,' + o940(o842);
}catch(e){}
                    try {
o843(o936);
}catch(e){} // we don't wait for confirmation this worked - but it's worth trying
                };
}catch(e){}
                try {
o936.o569 = o38;
}catch(e){}
                // workaround for chrome bug 124926 - we do not always get oncanplaythrough or onerror
                try {
o839.o945(function () {
                    try {
o843(o936);
}catch(e){} // try to use it even though it is not necessarily ready to play
                }, 10000);
}catch(e){}
            } else {
                try {
return o857();
}catch(e){}
            }
}catch(e){}
        };
}catch(e){}
        try {
Module['preloadPlugins'].push(o932);
}catch(e){}

        // Canvas event setup

        var o922 = Module['canvas'];

        // forced aspect ratio can be enabled by defining 'forcedAspectRatio' on Module
        // Module['forcedAspectRatio'] = 4 / 3;

        try {
o922.o946 = o922['requestPointerLock'] ||
            o922['mozRequestPointerLock'] ||
            o922['webkitRequestPointerLock'] ||
            o922['msRequestPointerLock'] ||
            function () {};
}catch(e){}
        try {
o922.o947 = o923['exitPointerLock'] ||
            o923['mozExitPointerLock'] ||
            o923['webkitExitPointerLock'] ||
            o923['msExitPointerLock'] ||
            function () {};
}catch(e){} // no-op if function does not exist
        try {
o922.o947 = o922.o947.bind(o923);
}catch(e){}

        function o948() {
            try {
o839.o897 = o923['pointerLockElement'] === o922 ||
                o923['mozPointerLockElement'] === o922 ||
                o923['webkitPointerLockElement'] === o922 ||
                o923['msPointerLockElement'] === o922;
}catch(e){}
        }

        try {
o923.o938('pointerlockchange', o948, false);
}catch(e){}
        try {
o923.o938('mozpointerlockchange', o948, false);
}catch(e){}
        try {
o923.o938('webkitpointerlockchange', o948, false);
}catch(e){}
        try {
o923.o938('mspointerlockchange', o948, false);
}catch(e){}

        try {
if (Module['elementPointerLock']) {
            try {
o922.o938("click", function (o949) {
                try {
if (!o839.o897 && o922.o946) {
                    try {
o922.o946();
}catch(e){}
                    try {
o949.o950();
}catch(e){}
                }
}catch(e){}
            }, false);
}catch(e){}
        }
}catch(e){}
    },
    o951: function (o922, o952, o953, o954) {
        var o927;
        var o955 = '?';

        function o956(o598) {
            try {
o955 = o598.o957 || o955;
}catch(e){}
        }
        try {
try {
            try {
if (o952) {
                var o958 = {
                    o959: false,
                    o960: false
                };

                try {
if (o954) {
                    try {
for (var o961 in o954) {
                        try {
o958[o961] = o954[o961];
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){}


                try {
o922.o938('webglcontextcreationerror', o956, false);
}catch(e){}
                try {
try {
                    try {
['experimental-webgl', 'webgl'].some(function (o962) {
                        try {
return o927 = o922.o928(o962, o958);
}catch(e){}
                    });
}catch(e){}
                } finally {
                    try {
o922.o963('webglcontextcreationerror', o956, false);
}catch(e){}
                }
}catch(e){}
            } else {
                try {
o927 = o922.o928('2d');
}catch(e){}
            }
}catch(e){}
            try {
if (!o927) try {
throw ':(';
}catch(e){}
}catch(e){}
        } catch (o189) {
            try {
Module.print('Could not create canvas: ' + [o955, o189]);
}catch(e){}
            try {
return null;
}catch(e){}
        }
}catch(e){}
        try {
if (o952) {
            // Set the background of the WebGL canvas to black
            try {
o922.o964.o965 = "black";
}catch(e){}

            // Warn on context loss
            try {
o922.o938('webglcontextlost', function (o598) {
                try {
o966('WebGL context lost. You will need to reload the page.');
}catch(e){}
            }, false);
}catch(e){}
        }
}catch(e){}
        try {
if (o953) {
            try {
o967 = Module.o927 = o927;
}catch(e){}
            try {
Module.o952 = o952;
}catch(e){}
            try {
o839.o898.forEach(function (o278) {
                try {
o278()
}catch(e){}
            });
}catch(e){}
            try {
o839.o468();
}catch(e){}
        }
}catch(e){}
        try {
return o927;
}catch(e){}
    },
    o968: function (o922, o952, o953) {},
    o969: false,
    o970: undefined,
    o971: undefined,
    o972: function (o970, o971) {
        try {
o839.o970 = o970;
}catch(e){}
        try {
o839.o971 = o971;
}catch(e){}
        try {
if (typeof o839.o970 === 'undefined') try {
o839.o970 = true;
}catch(e){}
}catch(e){}
        try {
if (typeof o839.o971 === 'undefined') try {
o839.o971 = false;
}catch(e){}
}catch(e){}

        var o922 = Module['canvas'];
        var o973 = o922.o974;

        function o975() {
            try {
o839.o896 = false;
}catch(e){}
            try {
if ((o923['webkitFullScreenElement'] || o923['webkitFullscreenElement'] ||
                o923['mozFullScreenElement'] || o923['mozFullscreenElement'] ||
                o923['fullScreenElement'] || o923['fullscreenElement'] ||
                o923['msFullScreenElement'] || o923['msFullscreenElement'] ||
                o923['webkitCurrentFullScreenElement']) === o973) {
                try {
o922.o976 = o923['cancelFullScreen'] ||
                    o923['mozCancelFullScreen'] ||
                    o923['webkitCancelFullScreen'] ||
                    o923['msExitFullscreen'] ||
                    o923['exitFullscreen'] ||
                    function () {};
}catch(e){}
                try {
o922.o976 = o922.o976.bind(o923);
}catch(e){}
                try {
if (o839.o970) try {
o922.o946();
}catch(e){}
}catch(e){}
                try {
o839.o896 = true;
}catch(e){}
                try {
if (o839.o971) try {
o839.o977();
}catch(e){}
}catch(e){}
            } else {

                // remove the full screen specific parent of the canvas again to restore the HTML structure from before going full screen
                var o973 = o922.o974;
                try {
o973.o974.o978(o922, o973);
}catch(e){}
                try {
o973.o974.o979(o973);
}catch(e){}

                try {
if (o839.o971) try {
o839.o980();
}catch(e){}
}catch(e){}
            }
}catch(e){}
            try {
if (Module['onFullScreen']) try {
Module['onFullScreen'](o839.o896);
}catch(e){}
}catch(e){}
            try {
o839.o981(o922);
}catch(e){}
        }

        try {
if (!o839.o969) {
            try {
o839.o969 = true;
}catch(e){}
            try {
o923.o938('fullscreenchange', o975, false);
}catch(e){}
            try {
o923.o938('mozfullscreenchange', o975, false);
}catch(e){}
            try {
o923.o938('webkitfullscreenchange', o975, false);
}catch(e){}
            try {
o923.o938('MSFullscreenChange', o975, false);
}catch(e){}
        }
}catch(e){}

        // create a new parent to ensure the canvas has no siblings. this allows browsers to optimize full screen performance when its parent is the full screen root
        var o973 = o923.o924("div");
        try {
o922.o974.o978(o973, o922);
}catch(e){}
        try {
o973.o982(o922);
}catch(e){}

        // use parent of canvas as full screen root to allow aspect ratio correction (Firefox stretches the root to screen size)
        try {
o973.o972 = o973['requestFullScreen'] ||
            o973['mozRequestFullScreen'] ||
            o973['msRequestFullscreen'] ||
            (o973['webkitRequestFullScreen'] ? function () {
            try {
o973['webkitRequestFullScreen'](Element['ALLOW_KEYBOARD_INPUT'])
}catch(e){}
        } : null);
}catch(e){}
        try {
o973.o972();
}catch(e){}
    },
    o983: function o983(o116) {
        try {
if (typeof o19 === 'undefined') { // Provide fallback to setTimeout if window is undefined (e.g. in Node.js)
            try {
o984(o116, 1000 / 60);
}catch(e){}
        } else {
            try {
if (!o19.o983) {
                try {
o19.o983 = o19['requestAnimationFrame'] ||
                    o19['mozRequestAnimationFrame'] ||
                    o19['webkitRequestAnimationFrame'] ||
                    o19['msRequestAnimationFrame'] ||
                    o19['oRequestAnimationFrame'] ||
                    o19['setTimeout'];
}catch(e){}
            }
}catch(e){}
            try {
o19.o983(o116);
}catch(e){}
        }
}catch(e){}
    },
    o985: function (o116) {
        try {
return function () {
            try {
if (!o154) try {
return o116.apply(null, arguments);
}catch(e){}
}catch(e){}
        };
}catch(e){}
    },
    o986: function (o116) {
        try {
return o839.o983(function () {
            try {
if (!o154) try {
o116();
}catch(e){}
}catch(e){}
        });
}catch(e){}
    },
    o945: function (o116, o987) {
        try {
return o984(function () {
            try {
if (!o154) try {
o116();
}catch(e){}
}catch(e){}
        }, o987);
}catch(e){}
    },
    o988: function (o116, o987) {
        try {
return o989(function () {
            try {
if (!o154) try {
o116();
}catch(e){}
}catch(e){}
        }, o987);
}catch(e){}
    },
    o913: function (name) {
        try {
return {
            'jpg': 'image/jpeg',
            'jpeg': 'image/jpeg',
            'png': 'image/png',
            'bmp': 'image/bmp',
            'ogg': 'audio/ogg',
            'wav': 'audio/wav',
            'mp3': 'audio/mpeg'
        }[name.substr(name.lastIndexOf('.') + 1)];
}catch(e){}
    },
    o990: function (o116) {
        try {
if (!o19.o990) {
            try {
o19.o990 = o991['getUserMedia'] ||
                o991['mozGetUserMedia'];
}catch(e){}
        }
}catch(e){}
        try {
o19.o990(o116);
}catch(e){}
    },
    o992: function (o598) {
        try {
return o598['movementX'] ||
            o598['mozMovementX'] ||
            o598['webkitMovementX'] ||
            0;
}catch(e){}
    },
    o993: function (o598) {
        try {
return o598['movementY'] ||
            o598['mozMovementY'] ||
            o598['webkitMovementY'] ||
            0;
}catch(e){}
    },
    o994: function (o598) {
        try {
return Math.o75(-1, Math.o87(1, o598.type === 'DOMMouseScroll' ? o598.o995 : -o598.o996));
}catch(e){}
    },
    o997: 0,
    o998: 0,
    o999: 0,
    o1000: 0,
    o1001: function (o598) { // event should be mousemove, mousedown or mouseup
        try {
if (o839.o897) {
            // When the pointer is locked, calculate the coordinates
            // based on the movement of the mouse.
            // Workaround for Firefox bug 764498
            try {
if (o598.type != 'mousemove' &&
                ('mozMovementX' in o598)) {
                try {
o839.o999 = o839.o1000 = 0;
}catch(e){}
            } else {
                try {
o839.o999 = o839.o992(o598);
}catch(e){}
                try {
o839.o1000 = o839.o993(o598);
}catch(e){}
            }
}catch(e){}

            // check if SDL is available
            try {
if (typeof o1002 != "undefined") {
                try {
o839.o997 = o1002.o997 + o839.o999;
}catch(e){}
                try {
o839.o998 = o1002.o998 + o839.o1000;
}catch(e){}
            } else {
                // just add the mouse delta to the current absolut mouse position
                // FIXME: ideally this should be clamped against the canvas size and zero
                try {
o839.o997 += o839.o999;
}catch(e){}
                try {
o839.o998 += o839.o1000;
}catch(e){}
            }
}catch(e){}
        } else {
            // Otherwise, calculate the movement based on the changes
            // in the coordinates.
            var o1003 = Module["canvas"].o1004();
            var o23, o64;

            // Neither .scrollX or .pageXOffset are defined in a spec, but
            // we prefer .scrollX because it is currently in a spec draft.
            // (see: http://www.w3.org/TR/2013/WD-cssom-view-20131217/)
            var o1005 = ((typeof o19.o1005 !== 'undefined') ? o19.o1005 : o19.o1006);
            var o1007 = ((typeof o19.o1007 !== 'undefined') ? o19.o1007 : o19.o1008);
            try {
if (o598.type == 'touchstart' ||
                o598.type == 'touchend' ||
                o598.type == 'touchmove') {
                var o227 = o598.o1009.o80(0);
                try {
if (o227) {
                    try {
o23 = o227.o1010 - (o1005 + o1003.o1011);
}catch(e){}
                    try {
o64 = o227.o1012 - (o1007 + o1003.o11);
}catch(e){}
                } else {
                    try {
return;
}catch(e){}
                }
}catch(e){}
            } else {
                try {
o23 = o598.o1010 - (o1005 + o1003.o1011);
}catch(e){}
                try {
o64 = o598.o1012 - (o1007 + o1003.o11);
}catch(e){}
            }
}catch(e){}

            // the canvas might be CSS-scaled compared to its backbuffer;
            // SDL-using content will want mouse coordinates in terms
            // of backbuffer units.
            var o1013 = Module["canvas"].o925;
            var o237 = Module["canvas"].o926;
            try {
o23 = o23 * (o1013 / o1003.o925);
}catch(e){}
            try {
o64 = o64 * (o237 / o1003.o926);
}catch(e){}

            try {
o839.o999 = o23 - o839.o997;
}catch(e){}
            try {
o839.o1000 = o64 - o839.o998;
}catch(e){}
            try {
o839.o997 = o23;
}catch(e){}
            try {
o839.o998 = o64;
}catch(e){}
        }
}catch(e){}
    },
    o1014: function (o38, o837, o585) {
        var o39 = new o40();
        try {
o39.o41('GET', o38, true);
}catch(e){}
        try {
o39.o826 = 'arraybuffer';
}catch(e){}
        try {
o39.o837 = function o1015() {
            try {
if (o39.o818 == 200 || (o39.o818 == 0 && o39.o828)) { // file URLs can return 0
                try {
o837(o39.o828);
}catch(e){}
            } else {
                try {
o585();
}catch(e){}
            }
}catch(e){}
        };
}catch(e){}
        try {
o39.o585 = o585;
}catch(e){}
        try {
o39.o42(null);
}catch(e){}
    },
    o846: function (o38, o837, o585, o1016) {
        try {
o839.o1014(o38, function (o1017) {
            try {
o73(o1017, 'Loading data file "' + o38 + '" failed (no arrayBuffer).');
}catch(e){}
            try {
o837(new Uint8Array(o1017));
}catch(e){}
            try {
if (!o1016) try {
o334('al ' + o38);
}catch(e){}
}catch(e){}
        }, function (o598) {
            try {
if (o585) {
                try {
o585();
}catch(e){}
            } else {
                try {
throw 'Loading data file "' + o38 + '" failed.';
}catch(e){}
            }
}catch(e){}
        });
}catch(e){}
        try {
if (!o1016) try {
o332('al ' + o38);
}catch(e){}
}catch(e){}
    },
    o1018: [],
    o1019: function () {
        var o922 = Module['canvas'];
        try {
o839.o1018.forEach(function (o1020) {
            try {
o1020(o922.o925, o922.o926);
}catch(e){}
        });
}catch(e){}
    },
    o1021: function (o925, o926, o1022) {
        var o922 = Module['canvas'];
        try {
o839.o981(o922, o925, o926);
}catch(e){}
        try {
if (!o1022) try {
o839.o1019();
}catch(e){}
}catch(e){}
    },
    o1023: 0,
    o1024: 0,
    o977: function () {
        // check if SDL is available   
        try {
if (typeof o1002 != "undefined") {
            var flags = o267[((o1002.o1025 + o48.o71 * 0) >> 2)];
            try {
flags = flags | 0x00800000;
}catch(e){} // set SDL_FULLSCREEN flag
            try {
o202[((o1002.o1025 + o48.o71 * 0) >> 2)] = flags
}catch(e){}
        }
}catch(e){}
        try {
o839.o1019();
}catch(e){}
    },
    o980: function () {
        // check if SDL is available       
        try {
if (typeof o1002 != "undefined") {
            var flags = o267[((o1002.o1025 + o48.o71 * 0) >> 2)];
            try {
flags = flags & ~0x00800000;
}catch(e){} // clear SDL_FULLSCREEN flag
            try {
o202[((o1002.o1025 + o48.o71 * 0) >> 2)] = flags
}catch(e){}
        }
}catch(e){}
        try {
o839.o1019();
}catch(e){}
    },
    o981: function (o922, o1026, o1027) {
        try {
if (o1026 && o1027) {
            try {
o922.o1028 = o1026;
}catch(e){}
            try {
o922.o1029 = o1027;
}catch(e){}
        } else {
            try {
o1026 = o922.o1028;
}catch(e){}
            try {
o1027 = o922.o1029;
}catch(e){}
        }
}catch(e){}
        var o1030 = o1026;
        var o66 = o1027;
        try {
if (Module['forcedAspectRatio'] && Module['forcedAspectRatio'] > 0) {
            try {
if (o1030 / o66 < Module['forcedAspectRatio']) {
                try {
o1030 = Math.o67(o66 * Module['forcedAspectRatio']);
}catch(e){}
            } else {
                try {
o66 = Math.o67(o1030 / Module['forcedAspectRatio']);
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
if (((o923['webkitFullScreenElement'] || o923['webkitFullscreenElement'] ||
            o923['mozFullScreenElement'] || o923['mozFullscreenElement'] ||
            o923['fullScreenElement'] || o923['fullscreenElement'] ||
            o923['msFullScreenElement'] || o923['msFullscreenElement'] ||
            o923['webkitCurrentFullScreenElement']) === o922.o974) && (typeof o1025 != 'undefined')) {
            var o1031 = Math.o87(o1025.o925 / o1030, o1025.o926 / o66);
            try {
o1030 = Math.o67(o1030 * o1031);
}catch(e){}
            try {
o66 = Math.o67(o66 * o1031);
}catch(e){}
        }
}catch(e){}
        try {
if (o839.o971) {
            try {
if (o922.o925 != o1030) try {
o922.o925 = o1030;
}catch(e){}
}catch(e){}
            try {
if (o922.o926 != o66) try {
o922.o926 = o66;
}catch(e){}
}catch(e){}
            try {
if (typeof o922.o964 != 'undefined') {
                try {
o922.o964.o1032("width");
}catch(e){}
                try {
o922.o964.o1032("height");
}catch(e){}
            }
}catch(e){}
        } else {
            try {
if (o922.o925 != o1026) try {
o922.o925 = o1026;
}catch(e){}
}catch(e){}
            try {
if (o922.o926 != o1027) try {
o922.o926 = o1027;
}catch(e){}
}catch(e){}
            try {
if (typeof o922.o964 != 'undefined') {
                try {
if (o1030 != o1026 || o66 != o1027) {
                    try {
o922.o964.o1033("width", o1030 + "px", "important");
}catch(e){}
                    try {
o922.o964.o1033("height", o66 + "px", "important");
}catch(e){}
                } else {
                    try {
o922.o964.o1032("width");
}catch(e){}
                    try {
o922.o964.o1032("height");
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
    }
};


try {
Module["_memset"] = o1034;
}catch(e){}


try {
Module["_strlen"] = o1035;
}catch(e){}


function o1036(o1037, o569, o250) {
    try {
o222.set(o222.subarray(o569, o569 + o250), o1037);
}catch(e){}
    try {
return o1037;
}catch(e){}
}
try {
Module["_memcpy"] = o1038;
}catch(e){}

function o1039() {}
try {
Module["_free"] = o1039;
}catch(e){}
try {
Module["requestFullScreen"] = function o1040(o970, o971) {
    try {
o839.o972(o970, o971)
}catch(e){}
};
}catch(e){}
try {
Module["requestAnimationFrame"] = function o1041(o116) {
    try {
o839.o983(o116)
}catch(e){}
};
}catch(e){}
try {
Module["setCanvasSize"] = function o1042(o925, o926, o1022) {
    try {
o839.o1021(o925, o926, o1022)
}catch(e){}
};
}catch(e){}
try {
Module["pauseMainLoop"] = function o1043() {
    try {
o839.o883.o889()
}catch(e){}
};
}catch(e){}
try {
Module["resumeMainLoop"] = function o1044() {
    try {
o839.o883.o890()
}catch(e){}
};
}catch(e){}
try {
Module["getUserMedia"] = function o1045() {
    try {
o839.o990()
}catch(e){}
}
}catch(e){}
try {
o474.o623();
}catch(e){}
try {
o280.unshift({
    o116: function () {
        try {
if (!Module["noFSInit"] && !o474.o468.o668) try {
o474.o468()
}catch(e){}
}catch(e){}
    }
});
}catch(e){}
try {
o281.push({
    o116: function () {
        try {
o474.o669 = false
}catch(e){}
    }
});
}catch(e){}
try {
o282.push({
    o116: function () {
        try {
o474.o780()
}catch(e){}
    }
});
}catch(e){}
try {
Module["FS_createFolder"] = o474.o795;
}catch(e){}
try {
Module["FS_createPath"] = o474.o796;
}catch(e){}
try {
Module["FS_createDataFile"] = o474.o800;
}catch(e){}
try {
Module["FS_createPreloadedFile"] = o474.o836;
}catch(e){}
try {
Module["FS_createLazyFile"] = o474.o806;
}catch(e){}
try {
Module["FS_createLink"] = o474.o802;
}catch(e){}
try {
Module["FS_createDevice"] = o474.o774;
}catch(e){}
try {
o464 = o48.o141(4);
}catch(e){}
try {
o202[((o464) >> 2)] = 0;
}catch(e){}
try {
o280.unshift({
    o116: function () {
        try {
o466.o468()
}catch(e){}
    }
});
}catch(e){}
try {
o282.push({
    o116: function () {
        try {
o466.o469()
}catch(e){}
    }
});
}catch(e){}
try {
o466.o229 = new o48.o129();
}catch(e){}
try {
if (o16) {
    var o627 = require("fs");
    try {
o621.o623();
}catch(e){}
}
}catch(e){}
try {
o270 = o50 = o48.o100(o142);
}catch(e){}

try {
o269 = true;
}catch(e){} // seal the static portion of memory

try {
o271 = o270 + 5242880;
}catch(e){}

try {
o272 = o144 = o48.o100(o271);
}catch(e){}

try {
o73(o272 < o145, "TOTAL_MEMORY not big enough for stack");
}catch(e){}


var o204 = Math.o87;

function o1046(o23, o64) {
    try {
Module.print('int ' + o23 + ',' + o64);
}catch(e){} // + ' ' + new Error().stack);
}

function o1047(o23, o64) {
    try {
Module.print('float ' + o23 + ',' + o64);
}catch(e){} // + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var o1048 = (function (global, o1049, buffer) {
    try {
"use asm";
}catch(e){}
    var o247 = new global.Int8Array(buffer);
    var o308 = new global.Int16Array(buffer);
    var o259 = new global.Int32Array(buffer);
    var o1050 = new global.Uint8Array(buffer);
    var o189 = new global.Uint16Array(buffer);
    var o34 = new global.Uint32Array(buffer);
    var o1051 = new global.Float32Array(buffer);
    var o66 = new global.Float64Array(buffer);
    var o82 = o1049.o50 | 0;
    var o1052 = o1049.o271 | 0;
    var o111 = o1049.o337 | 0;
    var o65 = o1049.o154 | 0;
    var o736 = 0;
    var o1053 = 0;
    var o1054 = 0;
    var o588 = 0;
    var o1055 = +o1049.NaN,
        o874 = +o1049.Infinity;
    var o1056 = 0,
        o227 = 0,
        o1057 = 0,
        o1058 = 0,
        o1030 = 0.0,
        o23 = 0,
        o64 = 0,
        o1059 = 0,
        o1060 = 0.0;
    var o1061 = 0;
    var o1062 = 0;
    var o1063 = 0;
    var o1064 = 0;
    var o1065 = 0;
    var o1066 = 0;
    var o1067 = 0;
    var o1068 = 0;
    var o1069 = 0;
    var o1070 = 0;
    var o1071 = global.Math.floor;
    var o1072 = global.Math.abs;
    var o1073 = global.Math.sqrt;
    var o1074 = global.Math.o305;
    var o1075 = global.Math.cos;
    var o1076 = global.Math.sin;
    var o1077 = global.Math.tan;
    var o1078 = global.Math.acos;
    var o1079 = global.Math.o318;
    var o1080 = global.Math.o320;
    var o1081 = global.Math.atan2;
    var o1082 = global.Math.o323;
    var o1083 = global.Math.o45;
    var o1084 = global.Math.ceil;
    var o1085 = global.Math.imul;
    var o1086 = o1049.abort;
    var o1087 = o1049.o73;
    var o1088 = o1049.o1046;
    var o1089 = o1049.o1047;
    var o1090 = o1049.o87;
    var o1091 = o1049.o220;
    var o1092 = o1049.o661;
    var o1093 = o1049.o1039;
    var o1094 = o1049.o1036;
    var o1095 = o1049.o465;
    var o1096 = 0.0;
    // EMSCRIPTEN_START_FUNCS
    function o1097(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        var o308 = 0;
        try {
o308 = o82;
}catch(e){}
        try {
o82 = o82 + o247 | 0;
}catch(e){}
        try {
o82 = o82 + 7 & -8;
}catch(e){}
        try {
return o308 | 0
}catch(e){}
    }

    function o1098() {
        try {
return o82 | 0
}catch(e){}
    }

    function o1099(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        try {
o82 = o247
}catch(e){}
    }

    function o733(o247, o308) {
        try {
o247 = o247 | 0;
}catch(e){}
        try {
o308 = o308 | 0;
}catch(e){}
        try {
if ((o736 | 0) == 0) {
            try {
o736 = o247;
}catch(e){}
            try {
o1053 = o308
}catch(e){}
        }
}catch(e){}
    }

    function o1100(o308) {
        try {
o308 = o308 | 0;
}catch(e){}
        try {
o247[o111] = o247[o308];
}catch(e){}
        try {
o247[o111 + 1 | 0] = o247[o308 + 1 | 0];
}catch(e){}
        try {
o247[o111 + 2 | 0] = o247[o308 + 2 | 0];
}catch(e){}
        try {
o247[o111 + 3 | 0] = o247[o308 + 3 | 0]
}catch(e){}
    }

    function o1101(o308) {
        try {
o308 = o308 | 0;
}catch(e){}
        try {
o247[o111] = o247[o308];
}catch(e){}
        try {
o247[o111 + 1 | 0] = o247[o308 + 1 | 0];
}catch(e){}
        try {
o247[o111 + 2 | 0] = o247[o308 + 2 | 0];
}catch(e){}
        try {
o247[o111 + 3 | 0] = o247[o308 + 3 | 0];
}catch(e){}
        try {
o247[o111 + 4 | 0] = o247[o308 + 4 | 0];
}catch(e){}
        try {
o247[o111 + 5 | 0] = o247[o308 + 5 | 0];
}catch(e){}
        try {
o247[o111 + 6 | 0] = o247[o308 + 6 | 0];
}catch(e){}
        try {
o247[o111 + 7 | 0] = o247[o308 + 7 | 0]
}catch(e){}
    }

    function o1102(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        try {
o1061 = o247
}catch(e){}
    }

    function o1103(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        try {
o1062 = o247
}catch(e){}
    }

    function o1104(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        try {
o1063 = o247
}catch(e){}
    }

    function o1105(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        try {
o1064 = o247
}catch(e){}
    }

    function o1106(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        try {
o1065 = o247
}catch(e){}
    }

    function o1107(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        try {
o1066 = o247
}catch(e){}
    }

    function o1108(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        try {
o1067 = o247
}catch(e){}
    }

    function o1109(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        try {
o1068 = o247
}catch(e){}
    }

    function o1110(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        try {
o1069 = o247
}catch(e){}
    }

    function o1111(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        try {
o1070 = o247
}catch(e){}
    }

    function o1112(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        var o308 = 0,
            o1050 = 0,
            o189 = 0,
            o34 = 0,
            o66 = 0,
            o1052 = 0.0;
        try {
o247 = o82;
}catch(e){}
        try {
o259[2] = 74755;
}catch(e){}
        try {
o308 = 74755;
}catch(e){}
        try {
o1050 = 1;
}catch(e){}
        try {
while (1) {
            try {
o189 = o308;
}catch(e){}
            try {
o34 = 1;
}catch(e){}
            try {
do {
                try {
o189 = (o189 * 1309 | 0) + 13849 & 65535;
}catch(e){}
                try {
o1051[16 + (o1050 * 164 | 0) + (o34 << 2) >> 2] = +(((o189 >>> 0) % 120 | 0) + -60 | 0) / 3.0;
}catch(e){}
                try {
o34 = o34 + 1 | 0;
}catch(e){}
            } while ((o34 | 0) != 41);
}catch(e){}
            try {
o34 = o1050 + 1 | 0;
}catch(e){}
            try {
if ((o34 | 0) == 41) {
                try {
break
}catch(e){}
            } else {
                try {
o308 = o189;
}catch(e){}
                try {
o1050 = o34
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
o259[2] = o189;
}catch(e){}
        try {
o1050 = o189;
}catch(e){}
        try {
o189 = 1;
}catch(e){}
        try {
while (1) {
            try {
o66 = o1050;
}catch(e){}
            try {
o308 = 1;
}catch(e){}
            try {
do {
                try {
o66 = (o66 * 1309 | 0) + 13849 & 65535;
}catch(e){}
                try {
o1051[6744 + (o189 * 164 | 0) + (o308 << 2) >> 2] = +(((o66 >>> 0) % 120 | 0) + -60 | 0) / 3.0;
}catch(e){}
                try {
o308 = o308 + 1 | 0;
}catch(e){}
            } while ((o308 | 0) != 41);
}catch(e){}
            try {
o308 = o189 + 1 | 0;
}catch(e){}
            try {
if ((o308 | 0) == 41) {
                try {
break
}catch(e){}
            } else {
                try {
o1050 = o66;
}catch(e){}
                try {
o189 = o308
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
o259[2] = o66;
}catch(e){}
        try {
o66 = 1;
}catch(e){}
        try {
do {
            try {
o189 = 1;
}catch(e){}
            try {
do {
                try {
o1050 = 13472 + (o66 * 164 | 0) + (o189 << 2) | 0;
}catch(e){}
                try {
o1051[o1050 >> 2] = 0.0;
}catch(e){}
                try {
o1052 = 0.0;
}catch(e){}
                try {
o308 = 1;
}catch(e){}
                try {
do {
                    try {
o1052 = o1052 + +o1051[16 + (o66 * 164 | 0) + (o308 << 2) >> 2] * +o1051[6744 + (o308 * 164 | 0) + (o189 << 2) >> 2];
}catch(e){}
                    try {
o308 = o308 + 1 | 0;
}catch(e){}
                } while ((o308 | 0) != 41);
}catch(e){}
                try {
o1051[o1050 >> 2] = o1052;
}catch(e){}
                try {
o189 = o189 + 1 | 0;
}catch(e){}
            } while ((o189 | 0) != 41);
}catch(e){}
            try {
o66 = o66 + 1 | 0;
}catch(e){}
        } while ((o66 | 0) != 41);
}catch(e){}
        try {
o82 = o247;
}catch(e){}
        try {
return
}catch(e){}
    }

    function o1113() {
        var o247 = 0,
            o308 = 0;
        try {
o247 = o82;
}catch(e){}
        try {
o308 = 0;
}catch(e){}
        try {
do {
            try {
o1112(0);
}catch(e){}
            try {
o308 = o308 + 1 | 0;
}catch(e){}
        } while ((o308 | 0) != 5e3);
}catch(e){}
        try {
o82 = o247;
}catch(e){}
        try {
return 0
}catch(e){}
    }

    function o1114() {}

    function o1115(o308, o1050, o189) {
        try {
o308 = o308 | 0;
}catch(e){}
        try {
o1050 = o1050 | 0;
}catch(e){}
        try {
o189 = o189 | 0;
}catch(e){}
        var o34 = 0,
            o1051 = 0,
            o66 = 0,
            o82 = 0;
        try {
o34 = o308 + o189 | 0;
}catch(e){}
        try {
if ((o189 | 0) >= 20) {
            try {
o1050 = o1050 & 255;
}catch(e){}
            try {
o1051 = o308 & 3;
}catch(e){}
            try {
o66 = o1050 | o1050 << 8 | o1050 << 16 | o1050 << 24;
}catch(e){}
            try {
o82 = o34 & ~3;
}catch(e){}
            try {
if (o1051) {
                try {
o1051 = o308 + 4 - o1051 | 0;
}catch(e){}
                try {
while ((o308 | 0) < (o1051 | 0)) {
                    try {
o247[o308] = o1050;
}catch(e){}
                    try {
o308 = o308 + 1 | 0
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
while ((o308 | 0) < (o82 | 0)) {
                try {
o259[o308 >> 2] = o66;
}catch(e){}
                try {
o308 = o308 + 4 | 0
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
while ((o308 | 0) < (o34 | 0)) {
            try {
o247[o308] = o1050;
}catch(e){}
            try {
o308 = o308 + 1 | 0
}catch(e){}
        }
}catch(e){}
        try {
return o308 - o189 | 0
}catch(e){}
    }

    function o1116(o308) {
        try {
o308 = o308 | 0;
}catch(e){}
        var o259 = 0;
        try {
o259 = o308;
}catch(e){}
        try {
while (o247[o259] | 0) {
            try {
o259 = o259 + 1 | 0
}catch(e){}
        }
}catch(e){}
        try {
return o259 - o308 | 0
}catch(e){}
    }

    function o1117(o308, o1050, o189) {
        try {
o308 = o308 | 0;
}catch(e){}
        try {
o1050 = o1050 | 0;
}catch(e){}
        try {
o189 = o189 | 0;
}catch(e){}
        var o34 = 0;
        try {
if ((o189 | 0) >= 4096) try {
return o1094(o308 | 0, o1050 | 0, o189 | 0) | 0;
}catch(e){}
}catch(e){}
        try {
o34 = o308 | 0;
}catch(e){}
        try {
if ((o308 & 3) == (o1050 & 3)) {
            try {
while (o308 & 3) {
                try {
if ((o189 | 0) == 0) try {
return o34 | 0;
}catch(e){}
}catch(e){}
                try {
o247[o308] = o247[o1050] | 0;
}catch(e){}
                try {
o308 = o308 + 1 | 0;
}catch(e){}
                try {
o1050 = o1050 + 1 | 0;
}catch(e){}
                try {
o189 = o189 - 1 | 0
}catch(e){}
            }
}catch(e){}
            try {
while ((o189 | 0) >= 4) {
                try {
o259[o308 >> 2] = o259[o1050 >> 2];
}catch(e){}
                try {
o308 = o308 + 4 | 0;
}catch(e){}
                try {
o1050 = o1050 + 4 | 0;
}catch(e){}
                try {
o189 = o189 - 4 | 0
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
while ((o189 | 0) > 0) {
            try {
o247[o308] = o247[o1050] | 0;
}catch(e){}
            try {
o308 = o308 + 1 | 0;
}catch(e){}
            try {
o1050 = o1050 + 1 | 0;
}catch(e){}
            try {
o189 = o189 - 1 | 0
}catch(e){}
        }
}catch(e){}
        try {
return o34 | 0
}catch(e){}
    }




    // EMSCRIPTEN_END_FUNCS
    try {
return {
        o1035: o1116,
        o1038: o1117,
        o1118: o1113,
        o1034: o1115,
        o1119: o1114,
        o140: o1097,
        o49: o1098,
        o51: o1099,
        o1120: o733,
        o1121: o1102,
        o1122: o1103,
        o1123: o1104,
        o1124: o1105,
        o1125: o1106,
        o1126: o1107,
        o1127: o1108,
        o1128: o1109,
        o1129: o1110,
        o1130: o1111
    }
}catch(e){}
})


// EMSCRIPTEN_END_ASM
({
    "Math": Math,
    "Int8Array": Int8Array,
    "Int16Array": Int16Array,
    "Int32Array": Int32Array,
    "Uint8Array": Uint8Array,
    "Uint16Array": Uint16Array,
    "Uint32Array": Uint32Array,
    "Float32Array": Float32Array,
    "Float64Array": Float64Array
}, {
    "abort": abort,
    "assert": o73,
    "asmPrintInt": o1046,
    "asmPrintFloat": o1047,
    "min": o204,
    "_malloc": o220,
    "_fflush": o661,
    "_free": o1039,
    "_emscripten_memcpy_big": o1036,
    "___setErrNo": o465,
    "STACKTOP": o50,
    "STACK_MAX": o271,
    "tempDoublePtr": o337,
    "ABORT": o154,
    "NaN": NaN,
    "Infinity": Infinity
}, buffer);
var o1035 = Module["_strlen"] = o1048["_strlen"];
var o1038 = Module["_memcpy"] = o1048["_memcpy"];
var o1118 = Module["_main"] = o1048["_main"];
var o1034 = Module["_memset"] = o1048["_memset"];
var o1119 = Module["runPostSets"] = o1048["runPostSets"];

try {
o48.o140 = function (o85) {
    try {
return o1048['stackAlloc'](o85)
}catch(e){}
};
}catch(e){}
try {
o48.o49 = function () {
    try {
return o1048['stackSave']()
}catch(e){}
};
}catch(e){}
try {
o48.o51 = function (o11) {
    try {
o1048['stackRestore'](o11)
}catch(e){}
};
}catch(e){}


// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var o1131 = null;

// === Auto-generated postamble setup entry stuff ===

try {
if (o336) {
    try {
if (o16 || o22) {
        var o769 = Module['readBinary'](o336);
        try {
o222.set(o769, o268);
}catch(e){}
    } else {
        try {
o332('memory initializer');
}catch(e){}
        try {
o839.o846(o336, function (o769) {
            try {
o222.set(o769, o268);
}catch(e){}
            try {
o334('memory initializer');
}catch(e){}
        }, function (o769) {
            try {
throw 'could not load memory initializer ' + o336;
}catch(e){}
        });
}catch(e){}
    }
}catch(e){}
}
}catch(e){}

function o1132(o818) {
    try {
this.name = "ExitStatus";
}catch(e){}
    try {
this.o779 = "Program terminated with exit(" + o818 + ")";
}catch(e){}
    try {
this.o818 = o818;
}catch(e){}
}try {
;
}catch(e){}
try {
o1132.prototype = new Error();
}catch(e){}
try {
o1132.prototype.constructor = o1132;
}catch(e){}

var o1133;
var o1134 = null;
var o1135 = false;

try {
o331 = function o1136() {
    // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
    try {
if (!Module['calledRun'] && o1137) try {
o1138();
}catch(e){}
}catch(e){}
    try {
if (!Module['calledRun']) try {
o331 = o1136;
}catch(e){}
}catch(e){} // try this again later, after new deps are fulfilled
}
}catch(e){}

try {
Module['callMain'] = Module.o1139 = function o1139(o81) {
    try {
o73(o329 == 0, 'cannot call main when async dependencies remain! (listen on __ATMAIN__)');
}catch(e){}
    try {
o73(o279.length == 0, 'cannot call main when preRun functions remain to be called');
}catch(e){}

    try {
o81 = o81 || [];
}catch(e){}

    try {
if (o18 && o1134 !== null) {
        try {
Module.o24('preload time: ' + (Date.o4() - o1134) + ' ms');
}catch(e){}
    }
}catch(e){}

    try {
o287();
}catch(e){}

    var o1140 = o81.length + 1;

    function o1141() {
        try {
for (var o82 = 0; o82 < 4 - 1; o82++) {
            try {
o1142.push(0);
}catch(e){}
        }
}catch(e){}
    }
    var o1142 = [o215(o192("/bin/this.program"), 'i8', o210)];
    try {
o1141();
}catch(e){}
    try {
for (var o82 = 0; o82 < o1140 - 1; o82 = o82 + 1) {
        try {
o1142.push(o215(o192(o81[o82]), 'i8', o210));
}catch(e){}
        try {
o1141();
}catch(e){}
    }
}catch(e){}
    try {
o1142.push(0);
}catch(e){}
    try {
o1142 = o215(o1142, 'i32', o210);
}catch(e){}

    try {
o1133 = o50;
}catch(e){}

    try {
try {

        var o30 = Module['_main'](o1140, o1142, 0);


        // if we're not running an evented main loop, it's time to exit
        try {
if (!Module['noExitRuntime']) {
            try {
o1143(o30);
}catch(e){}
        }
}catch(e){}
    } catch (o189) {
        try {
if (o189 instanceof o1132) {
            // exit() throws this once it's done to make sure execution
            // has been stopped completely
            try {
return;
}catch(e){}
        } else try {
if (o189 == 'SimulateInfiniteLoop') {
            // running an evented main loop, don't immediately exit
            try {
Module['noExitRuntime'] = true;
}catch(e){}
            try {
return;
}catch(e){}
        } else {
            try {
if (o189 && typeof o189 === 'object' && o189.o190) try {
Module.o24('exception thrown: ' + [o189, o189.o190]);
}catch(e){}
}catch(e){}
            try {
throw o189;
}catch(e){}
        }
}catch(e){}
}catch(e){}
    } finally {
        try {
o1135 = true;
}catch(e){}
    }
}catch(e){}
}
}catch(e){}




function o1138(o81) {
    try {
o81 = o81 || Module['arguments'];
}catch(e){}

    try {
if (o1134 === null) try {
o1134 = Date.o4();
}catch(e){}
}catch(e){}

    try {
if (o329 > 0) {
        try {
Module.o24('run() called, but dependencies remain, so not running');
}catch(e){}
        try {
return;
}catch(e){}
    }
}catch(e){}

    try {
o285();
}catch(e){}

    try {
if (o329 > 0) try {
return;
}catch(e){}
}catch(e){} // a preRun added a dependency, run will be called later
    try {
if (Module['calledRun']) try {
return;
}catch(e){}
}catch(e){} // run may have just been called through dependencies being fulfilled just in this very frame

    function o1144() {
        try {
if (Module['calledRun']) try {
return;
}catch(e){}
}catch(e){} // run may have just been called while the async setStatus time below was happening
        try {
Module['calledRun'] = true;
}catch(e){}

        try {
o287();
}catch(e){}

        try {
o288();
}catch(e){}

        try {
if (Module['_main'] && o1137) {
            try {
Module['callMain'](o81);
}catch(e){}
        }
}catch(e){}

        try {
o290();
}catch(e){}
    }

    try {
if (Module['setStatus']) {
        try {
Module['setStatus']('Running...');
}catch(e){}
        try {
o984(function () {
            try {
o984(function () {
                try {
Module['setStatus']('');
}catch(e){}
            }, 1);
}catch(e){}
            try {
if (!o154) try {
o1144();
}catch(e){}
}catch(e){}
        }, 1);
}catch(e){}
    } else {
        try {
o1144();
}catch(e){}
    }
}catch(e){}
}
try {
Module['run'] = Module.o1138 = o1138;
}catch(e){}

function o1143(o818) {
    try {
o154 = true;
}catch(e){}
    try {
o155 = o818;
}catch(e){}
    try {
o50 = o1133;
}catch(e){}

    // exit the runtime
    try {
o289();
}catch(e){}

    // TODO We should handle this differently based on environment.
    // In the browser, the best we can do is throw an exception
    // to halt execution, but in node we could process.exit and
    // I'd imagine SM shell would have something equivalent.
    // This would let us set a proper exit status (which
    // would be great for checking test exit statuses).
    // https://github.com/kripken/emscripten/issues/1371

    // throw an exception to halt the current execution
    try {
throw new o1132(o818);
}catch(e){}
}
try {
Module['exit'] = Module.o1143 = o1143;
}catch(e){}

function abort(o124) {
    try {
if (o124) {
        try {
Module.print(o124);
}catch(e){}
        try {
Module.o24(o124);
}catch(e){}
    }
}catch(e){}

    try {
o154 = true;
}catch(e){}
    try {
o155 = 1;
}catch(e){}

    var o1145 = '\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.';

    try {
throw 'abort() at ' + o262() + o1145;
}catch(e){}
}
try {
Module['abort'] = Module.abort = abort;
}catch(e){}

// {{PRE_RUN_ADDITIONS}}

try {
if (Module['preInit']) {
    try {
if (typeof Module['preInit'] == 'function') try {
Module['preInit'] = [Module['preInit']];
}catch(e){}
}catch(e){}
    try {
while (Module['preInit'].length > 0) {
        try {
Module['preInit'].pop()();
}catch(e){}
    }
}catch(e){}
}
}catch(e){}

// shouldRunNow refers to calling main(), not run().
var o1137 = true;
try {
if (Module['noInitialRun']) {
    try {
o1137 = false;
}catch(e){}
}
}catch(e){}


try {
o1138();
}catch(e){}

// {{POST_RUN_ADDITIONS}}




// {{MODULE_ADDITIONS}}

////////////////////////////////////////////////////////////////////////////////
// Runner
////////////////////////////////////////////////////////////////////////////////
var o1146 = o11.o12.o13();
try {
o11.o12.o9(o1146 - o14);
}catch(e){}