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

var index = 0;

try {
if (o111 + 2 | 0 === "undefined") {
    var Boolean(false) = this.o677(0xF80)
}
}catch(e){}
var print = function () {};

var o494;
try {
o5.length = (function () {
    try {
return this.o706.o100 ||
        Date.o4;
}catch(e){}
})();
}catch(e){}


function o1(o10) {
    try {
o1.o2("### SCORE: " + (100 * o0 / o10));
}catch(e){}
}

var o11 = {};
try {
o11.o12 = {
    o13: o3.o4,
    o9: o9
};
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
for (var key in Module) {
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
var o18 = typeof o19 === 'object';
var o20 = typeof o21 === 'function';
var o22 = !o18 && !o16 && !o20;

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
o146();try {

}catch(e){}
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
var length = Math.o279(((o961.charCodeAt(16) & 0xFF) << 24) | ((o961.charCodeAt(15) & 0xFF) << 16) | ((o961.charCodeAt(14) & 0xFF) << 8) | (o961.charCodeAt(13) & 0xFF), length)
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
o142 = o268 + o48.o100(11195);
}catch(e){}
/* global initializers */
try {
o280.push();
}catch(e){}


/* memory initializer */
try {
o215([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 72, 82, 89, 83, 84, 79, 78, 69, 32, 80, 82, 79, 71, 82, 65, 77, 44, 32, 83, 79, 77, 69, 32, 83, 84, 82, 73, 78, 71], "i8", o214, o48.o151);
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




function o340(o341, o342, o250) {
    try {
o222.set(o222.subarray(o342, o342 + o250), o341);
}catch(e){}
    try {
return o341;
}catch(e){}
}
try {
Module["_memcpy"] = o343;
}catch(e){}
var o344 = o343;

function o345(o346) {
    // Implement a Linux-like 'memory area' for our 'process'.
    // Changes the size of the memory area by |bytes|; returns the
    // address of the previous top ('break') of the memory area
    // We control the "dynamic" memory - DYNAMIC_BASE to DYNAMICTOP
    var o347 = o345;
    try {
if (!o347.o348) {
        try {
o144 = o264(o144);
}catch(e){} // make sure we start out aligned
        try {
o347.o348 = true;
}catch(e){}
        try {
o73(o48.o143);
}catch(e){}
        try {
o347.o349 = o48.o143;
}catch(e){}
        try {
o48.o143 = function () {
            try {
abort('cannot dynamically allocate, sbrk now has control')
}catch(e){}
        };
}catch(e){}
    }
}catch(e){}
    var o30 = o144;
    try {
if (o346 != 0) try {
o347.o349(o346);
}catch(e){}
}catch(e){}
    try {
return o30;
}catch(e){} // Previous break location.
}



var o350 = 0;

function o351(value) {
    // For convenient setting and returning of errno.
    try {
o202[((o350) >> 2)] = value;
}catch(e){}
    try {
return value;
}catch(e){}
}

var o352 = {
    o353: 1,
    o354: 2,
    o355: 3,
    o356: 4,
    o357: 5,
    o358: 6,
    o359: 7,
    o360: 8,
    o361: 9,
    o362: 10,
    o363: 11,
    o364: 11,
    o365: 12,
    o366: 13,
    o367: 14,
    o368: 15,
    o369: 16,
    o370: 17,
    o371: 18,
    o372: 19,
    o373: 20,
    o374: 21,
    o375: 22,
    o376: 23,
    o377: 24,
    o378: 25,
    o379: 26,
    o380: 27,
    o381: 28,
    o382: 29,
    o383: 30,
    o384: 31,
    o385: 32,
    o386: 33,
    o387: 34,
    o388: 42,
    o389: 43,
    o390: 44,
    o391: 45,
    o392: 46,
    o393: 47,
    o394: 48,
    o395: 49,
    o396: 50,
    o397: 51,
    o398: 35,
    o399: 37,
    o400: 52,
    o401: 53,
    o402: 54,
    o403: 55,
    o404: 56,
    o405: 57,
    o406: 35,
    o407: 59,
    o408: 60,
    o409: 61,
    o410: 62,
    o411: 63,
    o412: 64,
    o413: 65,
    o414: 66,
    o415: 67,
    o416: 68,
    o417: 69,
    o418: 70,
    o419: 71,
    o420: 72,
    o421: 73,
    o422: 74,
    o423: 76,
    o424: 77,
    o425: 78,
    o426: 79,
    o427: 80,
    o428: 81,
    o429: 82,
    o430: 83,
    o431: 38,
    o432: 39,
    o433: 36,
    o434: 40,
    o435: 95,
    o436: 96,
    o437: 104,
    o438: 105,
    o439: 97,
    o440: 91,
    o441: 88,
    o442: 92,
    o443: 108,
    o444: 111,
    o445: 98,
    o446: 103,
    o447: 101,
    o448: 100,
    o449: 110,
    o450: 112,
    o451: 113,
    o452: 115,
    o453: 114,
    o454: 89,
    o455: 90,
    o456: 93,
    o457: 94,
    o458: 99,
    o459: 102,
    o460: 106,
    o461: 107,
    o462: 109,
    o463: 87,
    o464: 122,
    o465: 116,
    o466: 95,
    o467: 123,
    o468: 84,
    o469: 75,
    o470: 125,
    o471: 131,
    o472: 130,
    o473: 86
};

function o474(name) {
    // long sysconf(int name);
    // http://pubs.opengroup.org/onlinepubs/009695399/functions/sysconf.html
    try {
switch (name) {
    case 30:
        try {
return o263;
}catch(e){}
    case 132:
    case 133:
    case 12:
    case 137:
    case 138:
    case 15:
    case 235:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 149:
    case 13:
    case 10:
    case 236:
    case 153:
    case 9:
    case 21:
    case 22:
    case 159:
    case 154:
    case 14:
    case 77:
    case 78:
    case 139:
    case 80:
    case 81:
    case 79:
    case 82:
    case 68:
    case 67:
    case 164:
    case 11:
    case 29:
    case 47:
    case 48:
    case 95:
    case 52:
    case 51:
    case 46:
        try {
return 200809;
}catch(e){}
    case 27:
    case 246:
    case 127:
    case 128:
    case 23:
    case 24:
    case 160:
    case 161:
    case 181:
    case 182:
    case 242:
    case 183:
    case 184:
    case 243:
    case 244:
    case 245:
    case 165:
    case 178:
    case 179:
    case 49:
    case 50:
    case 168:
    case 169:
    case 175:
    case 170:
    case 171:
    case 172:
    case 97:
    case 76:
    case 32:
    case 173:
    case 35:
        try {
return -1;
}catch(e){}
    case 176:
    case 177:
    case 7:
    case 155:
    case 8:
    case 157:
    case 125:
    case 126:
    case 92:
    case 93:
    case 129:
    case 130:
    case 131:
    case 94:
    case 91:
        try {
return 1;
}catch(e){}
    case 74:
    case 60:
    case 69:
    case 70:
    case 4:
        try {
return 1024;
}catch(e){}
    case 31:
    case 42:
    case 72:
        try {
return 32;
}catch(e){}
    case 87:
    case 26:
    case 33:
        try {
return 2147483647;
}catch(e){}
    case 34:
    case 1:
        try {
return 47839;
}catch(e){}
    case 38:
    case 36:
        try {
return 99;
}catch(e){}
    case 43:
    case 37:
        try {
return 2048;
}catch(e){}
    case 0:
        try {
return 2097152;
}catch(e){}
    case 3:
        try {
return 65536;
}catch(e){}
    case 28:
        try {
return 32768;
}catch(e){}
    case 44:
        try {
return 32767;
}catch(e){}
    case 75:
        try {
return 16384;
}catch(e){}
    case 39:
        try {
return 1000;
}catch(e){}
    case 89:
        try {
return 700;
}catch(e){}
    case 71:
        try {
return 256;
}catch(e){}
    case 40:
        try {
return 255;
}catch(e){}
    case 2:
        try {
return 100;
}catch(e){}
    case 180:
        try {
return 64;
}catch(e){}
    case 25:
        try {
return 20;
}catch(e){}
    case 5:
        try {
return 16;
}catch(e){}
    case 6:
        try {
return 6;
}catch(e){}
    case 73:
        try {
return 4;
}catch(e){}
    case 84:
        try {
return 1;
}catch(e){}
    }
}catch(e){}
    try {
o351(o352.o375);
}catch(e){}
    try {
return -1;
}catch(e){}
}

function o475() {
    try {
if (o475.o476 === undefined) try {
o475.o476 = Date.o4();
}catch(e){}
}catch(e){}
    try {
return Math.floor((Date.o4() - o475.o476) * (1000000 / 1000));
}catch(e){}
}


try {
Module["_memset"] = o477;
}catch(e){}

function o478() {
    try {
return o350;
}catch(e){}
}

function o479() {
    try {
Module['abort']();
}catch(e){}
}




var o480 = {
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

var o481 = {
    o482: [],
    o483: function () {
        // https://github.com/kripken/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process['stdin']['setEncoding']('utf8');
        // }
    },
    o484: function () {
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
    o485: function (o486, o487) {
        try {
o481.o482[o486] = {
            input: [],
            o488: [],
            o487: o487
        };
}catch(e){}
        try {
o489.o490(o486, o481.o491);
}catch(e){}
    },
    o491: {
        o41: function (o492) {
            var o493 = o481.o482[o492.o494.o495];
            try {
if (!o493) {
                try {
throw new o489.o496(o352.o372);
}catch(e){}
            }
}catch(e){}
            try {
o492.o493 = o493;
}catch(e){}
            try {
o492.o497 = false;
}catch(e){}
        },
        o498: function (o492) {
            // flush any pending line data
            try {
if (o492.o493.o488.length) {
                try {
o492.o493.o487.o499(o492.o493, 10);
}catch(e){}
            }
}catch(e){}
        },
        o27: function (o492, buffer, o107, length, o500 /* ignored */ ) {
            try {
if (!o492.o493 || !o492.o493.o487.o501) {
                try {
throw new o489.o496(o352.o358);
}catch(e){}
            }
}catch(e){}
            var o502 = 0;
            try {
for (var o82 = 0; o82 < length; o82++) {
                var o503;
                try {
try {
                    try {
o503 = o492.o493.o487.o501(o492.o493);
}catch(e){}
                } catch (o189) {
                    try {
throw new o489.o496(o352.o357);
}catch(e){}
                }
}catch(e){}
                try {
if (o503 === undefined && o502 === 0) {
                    try {
throw new o489.o496(o352.o363);
}catch(e){}
                }
}catch(e){}
                try {
if (o503 === null || o503 === undefined) try {
break;
}catch(e){}
}catch(e){}
                try {
o502++;
}catch(e){}
                try {
buffer[o107 + o82] = o503;
}catch(e){}
            }
}catch(e){}
            try {
if (o502) {
                try {
o492.o494.o504 = Date.o4();
}catch(e){}
            }
}catch(e){}
            try {
return o502;
}catch(e){}
        },
        write: function (o492, buffer, o107, length, o500) {
            try {
if (!o492.o493 || !o492.o493.o487.o499) {
                try {
throw new o489.o496(o352.o358);
}catch(e){}
            }
}catch(e){}
            try {
for (var o82 = 0; o82 < length; o82++) {
                try {
try {
                    try {
o492.o493.o487.o499(o492.o493, buffer[o107 + o82]);
}catch(e){}
                } catch (o189) {
                    try {
throw new o489.o496(o352.o357);
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
if (length) {
                try {
o492.o494.o504 = Date.o4();
}catch(e){}
            }
}catch(e){}
            try {
return o82;
}catch(e){}
        }
    },
    o505: {
        o501: function (o493) {
            try {
if (!o493.input.length) {
                var o503 = null;
                try {
if (o16) {
                    try {
o503 = o17['stdin']['read']();
}catch(e){}
                    try {
if (!o503) {
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
                    typeof o19.o506 == 'function') {
                    // Browser.
                    try {
o503 = o19.o506('Input: ');
}catch(e){} // returns null on cancel
                    try {
if (o503 !== null) {
                        try {
o503 += '\n';
}catch(e){}
                    }
}catch(e){}
                } else try {
if (typeof o507 == 'function') {
                    // Command line.
                    try {
o503 = o507();
}catch(e){}
                    try {
if (o503 !== null) {
                        try {
o503 += '\n';
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){}
}catch(e){}
}catch(e){}
                try {
if (!o503) {
                    try {
return null;
}catch(e){}
                }
}catch(e){}
                try {
o493.input = o192(o503, true);
}catch(e){}
            }
}catch(e){}
            try {
return o493.input.shift();
}catch(e){}
        },
        o499: function (o493, o508) {
            try {
if (o508 === null || o508 === 10) {
                try {
Module['print'](o493.o488.join(''));
}catch(e){}
                try {
o493.o488 = [];
}catch(e){}
            } else {
                try {
o493.o488.push(o481.o229.o131(o508));
}catch(e){}
            }
}catch(e){}
        }
    },
    o509: {
        o499: function (o493, o508) {
            try {
if (o508 === null || o508 === 10) {
                try {
Module['printErr'](o493.o488.join(''));
}catch(e){}
                try {
o493.o488 = [];
}catch(e){}
            } else {
                try {
o493.o488.push(o481.o229.o131(o508));
}catch(e){}
            }
}catch(e){}
        }
    }
};

var o510 = {
    o511: null,
    o512: 1,
    o513: 2,
    o514: 3,
    o515: function (o515) {
        try {
return o510.o516(null, '/', 16384 | 511 /* 0777 */ , 0);
}catch(e){}
    },
    o516: function (o517, name, o518, o486) {
        try {
if (o489.o519(o518) || o489.o520(o518)) {
            // no supported
            try {
throw new o489.o496(o352.o353);
}catch(e){}
        }
}catch(e){}
        try {
if (!o510.o511) {
            try {
o510.o511 = {
                o521: {
                    o494: {
                        o522: o510.o523.o522,
                        o524: o510.o523.o524,
                        o525: o510.o523.o525,
                        o526: o510.o523.o526,
                        o527: o510.o523.o527,
                        o528: o510.o523.o528,
                        o529: o510.o523.o529,
                        o530: o510.o523.o530,
                        o531: o510.o523.o531
                    },
                    o492: {
                        o532: o510.o491.o532
                    }
                },
                o533: {
                    o494: {
                        o522: o510.o523.o522,
                        o524: o510.o523.o524
                    },
                    o492: {
                        o532: o510.o491.o532,
                        o27: o510.o491.o27,
                        write: o510.o491.write,
                        o215: o510.o491.o215,
                        o534: o510.o491.o534
                    }
                },
                link: {
                    o494: {
                        o522: o510.o523.o522,
                        o524: o510.o523.o524,
                        o535: o510.o523.o535
                    },
                    o492: {}
                },
                o536: {
                    o494: {
                        o522: o510.o523.o522,
                        o524: o510.o523.o524
                    },
                    o492: o489.o537
                },
            };
}catch(e){}
        }
}catch(e){}
        var o494 = o489.o516(o517, name, o518, o486);
        try {
if (o489.o538(o494.o518)) {
            try {
o494.o523 = o510.o511.o521.o494;
}catch(e){}
            try {
o494.o491 = o510.o511.o521.o492;
}catch(e){}
            try {
o494.o539 = {};
}catch(e){}
        } else try {
if (o489.o540(o494.o518)) {
            try {
o494.o523 = o510.o511.o533.o494;
}catch(e){}
            try {
o494.o491 = o510.o511.o533.o492;
}catch(e){}
            try {
o494.o539 = [];
}catch(e){}
            try {
o494.o541 = o510.o513;
}catch(e){}
        } else try {
if (o489.o542(o494.o518)) {
            try {
o494.o523 = o510.o511.link.o494;
}catch(e){}
            try {
o494.o491 = o510.o511.link.o492;
}catch(e){}
        } else try {
if (o489.o543(o494.o518)) {
            try {
o494.o523 = o510.o511.o536.o494;
}catch(e){}
            try {
o494.o491 = o510.o511.o536.o492;
}catch(e){}
        }
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
        try {
o494.o504 = Date.o4();
}catch(e){}
        // add the new node to the parent
        try {
if (o517) {
            try {
o517.o539[name] = o494;
}catch(e){}
        }
}catch(e){}
        try {
return o494;
}catch(e){}
    },
    o544: function (o494) {
        try {
if (o494.o541 !== o510.o513) {
            var o539 = o494.o539;
            try {
o494.o539 = Array.prototype.slice.call(o539);
}catch(e){}
            try {
o494.o541 = o510.o513;
}catch(e){}
        }
}catch(e){}
    },
    o523: {
        o522: function (o494) {
            var o545 = {};
            // device numbers reuse inode numbers.
            try {
o545.o486 = o489.o543(o494.o518) ? o494.o333 : 1;
}catch(e){}
            try {
o545.o546 = o494.o333;
}catch(e){}
            try {
o545.o518 = o494.o518;
}catch(e){}
            try {
o545.o547 = 1;
}catch(e){}
            try {
o545.o548 = 0;
}catch(e){}
            try {
o545.o549 = 0;
}catch(e){}
            try {
o545.o495 = o494.o495;
}catch(e){}
            try {
if (o489.o538(o494.o518)) {
                try {
o545.o85 = 4096;
}catch(e){}
            } else try {
if (o489.o540(o494.o518)) {
                try {
o545.o85 = o494.o539.length;
}catch(e){}
            } else try {
if (o489.o542(o494.o518)) {
                try {
o545.o85 = o494.link.length;
}catch(e){}
            } else {
                try {
o545.o85 = 0;
}catch(e){}
            }
}catch(e){}
}catch(e){}
}catch(e){}
            try {
o545.o550 = new Date(o494.o504);
}catch(e){}
            try {
o545.o551 = new Date(o494.o504);
}catch(e){}
            try {
o545.o552 = new Date(o494.o504);
}catch(e){}
            // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
            //       but this is not required by the standard.
            try {
o545.o553 = 4096;
}catch(e){}
            try {
o545.o554 = Math.ceil(o545.o85 / o545.o553);
}catch(e){}
            try {
return o545;
}catch(e){}
        },
        o524: function (o494, o545) {
            try {
if (o545.o518 !== undefined) {
                try {
o494.o518 = o545.o518;
}catch(e){}
            }
}catch(e){}
            try {
if (o545.o504 !== undefined) {
                try {
o494.o504 = o545.o504;
}catch(e){}
            }
}catch(e){}
            try {
if (o545.o85 !== undefined) {
                try {
o510.o544(o494);
}catch(e){}
                var o539 = o494.o539;
                try {
if (o545.o85 < o539.length) try {
o539.length = o545.o85;
}catch(e){}
                else
                    try {
while (o545.o85 > o539.length) try {
o539.push(0);
}catch(e){}
}catch(e){}
}catch(e){}
            }
}catch(e){}
        },
        o525: function (o517, name) {
            try {
throw o489.o555[o352.o354];
}catch(e){}
        },
        o526: function (o517, name, o518, o486) {
            try {
return o510.o516(o517, name, o518, o486);
}catch(e){}
        },
        o527: function (o556, o557, o558) {
            // if we're overwriting a directory at new_name, make sure it's empty.
            try {
if (o489.o538(o556.o518)) {
                var o559;
                try {
try {
                    try {
o559 = o489.o560(o557, o558);
}catch(e){}
                } catch (o189) {}
}catch(e){}
                try {
if (o559) {
                    try {
for (var o82 in o559.o539) {
                        try {
throw new o489.o496(o352.o432);
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            // do the internal rewiring
            try {
delete o556.o517.o539[o556.name];
}catch(e){}
            try {
o556.name = o558;
}catch(e){}
            try {
o557.o539[o558] = o556;
}catch(e){}
            try {
o556.o517 = o557;
}catch(e){}
        },
        o528: function (o517, name) {
            try {
delete o517.o539[name];
}catch(e){}
        },
        o529: function (o517, name) {
            var o494 = o489.o560(o517, name);
            try {
for (var o82 in o494.o539) {
                try {
throw new o489.o496(o352.o432);
}catch(e){}
            }
}catch(e){}
            try {
delete o517.o539[name];
}catch(e){}
        },
        o530: function (o494) {
            var entries = ['.', '..']
            try {
for (var key in o494.o539) {
                try {
if (!o494.o539.hasOwnProperty(key)) {
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
        o531: function (o517, o561, o562) {
            var o494 = o510.o516(o517, o561, 511 /* 0777 */ | 40960, 0);
            try {
o494.link = o562;
}catch(e){}
            try {
return o494;
}catch(e){}
        },
        o535: function (o494) {
            try {
if (!o489.o542(o494.o518)) {
                try {
throw new o489.o496(o352.o375);
}catch(e){}
            }
}catch(e){}
            try {
return o494.link;
}catch(e){}
        }
    },
    o491: {
        o27: function (o492, buffer, o107, length, o563) {
            var o539 = o492.o494.o539;
            try {
if (o563 >= o539.length)
                try {
return 0;
}catch(e){}
}catch(e){}
            var o85 = Math.o87(o539.length - o563, length);
            try {
o73(o85 >= 0);
}catch(e){}
            try {
if (o85 > 8 && o539.subarray) { // non-trivial, and typed array
                try {
buffer.set(o539.subarray(o563, o563 + o85), o107);
}catch(e){}
            } else {
                try {
for (var o82 = 0; o82 < o85; o82++) {
                    try {
buffer[o107 + o82] = o539[o563 + o82];
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
return o85;
}catch(e){}
        },
        write: function (o492, buffer, o107, length, o563, o564) {
            var o494 = o492.o494;
            try {
o494.o504 = Date.o4();
}catch(e){}
            var o539 = o494.o539;
            try {
if (length && o539.length === 0 && o563 === 0 && buffer.subarray) {
                // just replace it with the new data
                try {
if (o564 && o107 === 0) {
                    try {
o494.o539 = buffer;
}catch(e){} // this could be a subarray of Emscripten HEAP, or allocated from some other source.
                    try {
o494.o541 = (buffer.buffer === o200.buffer) ? o510.o512 : o510.o514;
}catch(e){}
                } else {
                    try {
o494.o539 = new Uint8Array(buffer.subarray(o107, o107 + length));
}catch(e){}
                    try {
o494.o541 = o510.o514;
}catch(e){}
                }
}catch(e){}
                try {
return length;
}catch(e){}
            }
}catch(e){}
            try {
o510.o544(o494);
}catch(e){}
            var o539 = o494.o539;
            try {
while (o539.length < o563) try {
o539.push(0);
}catch(e){}
}catch(e){}
            try {
for (var o82 = 0; o82 < length; o82++) {
                try {
o539[o563 + o82] = buffer[o107 + o82];
}catch(e){}
            }
}catch(e){}
            try {
return length;
}catch(e){}
        },
        o532: function (o492, o107, o565) {
            var o563 = o107;
            try {
if (o565 === 1) { // SEEK_CUR.
                try {
o563 += o492.o563;
}catch(e){}
            } else try {
if (o565 === 2) { // SEEK_END.
                try {
if (o489.o540(o492.o494.o518)) {
                    try {
o563 += o492.o494.o539.length;
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
}catch(e){}
            try {
if (o563 < 0) {
                try {
throw new o489.o496(o352.o375);
}catch(e){}
            }
}catch(e){}
            try {
o492.o566 = [];
}catch(e){}
            try {
o492.o563 = o563;
}catch(e){}
            try {
return o563;
}catch(e){}
        },
        o215: function (o492, o107, length) {
            try {
o510.o544(o492.o494);
}catch(e){}
            var o539 = o492.o494.o539;
            var o252 = o107 + length;
            try {
while (o252 > o539.length) try {
o539.push(0);
}catch(e){}
}catch(e){}
        },
        o534: function (o492, buffer, o107, length, o563, o567, flags) {
            try {
if (!o489.o540(o492.o494.o518)) {
                try {
throw new o489.o496(o352.o372);
}catch(e){}
            }
}catch(e){}
            var o114;
            var o568;
            var o539 = o492.o494.o539;
            // Only make a new copy when MAP_PRIVATE is specified.
            try {
if (!(flags & 2) &&
                (o539.buffer === buffer || o539.buffer === buffer.buffer)) {
                // We can't emulate MAP_SHARED when the file is not backed by the buffer
                // we're mapping to (e.g. the HEAP buffer).
                try {
o568 = false;
}catch(e){}
                try {
o114 = o539.byteOffset;
}catch(e){}
            } else {
                // Try to avoid unnecessary slices.
                try {
if (o563 > 0 || o563 + length < o539.length) {
                    try {
if (o539.subarray) {
                        try {
o539 = o539.subarray(o563, o563 + length);
}catch(e){}
                    } else {
                        try {
o539 = Array.prototype.slice.call(o539, o563, o563 + length);
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){}
                try {
o568 = true;
}catch(e){}
                try {
o114 = o220(length);
}catch(e){}
                try {
if (!o114) {
                    try {
throw new o489.o496(o352.o365);
}catch(e){}
                }
}catch(e){}
                try {
buffer.set(o539, o114);
}catch(e){}
            }
}catch(e){}
            try {
return {
                o114: o114,
                o568: o568
            };
}catch(e){}
        }
    }
};

var o569 = {
    o570: {},
    o571: function () {
        try {
return o19.o571 || o19.o572 || o19.o573 || o19.o574;
}catch(e){}
    },
    o575: 21,
    o576: "FILE_DATA",
    o515: function (o515) {
        // reuse all of the core MEMFS functionality
        try {
return o510.o515.apply(null, arguments);
}catch(e){}
    },
    o577: function (o515, o578, o278) {
        try {
o569.o579(o515, function (o580, o581) {
            try {
if (o580) try {
return o278(o580);
}catch(e){}
}catch(e){}

            try {
o569.o582(o515, function (o580, o583) {
                try {
if (o580) try {
return o278(o580);
}catch(e){}
}catch(e){}

                var o342 = o578 ? o583 : o581;
                var o584 = o578 ? o581 : o583;

                try {
o569.o585(o342, o584, o278);
}catch(e){}
            });
}catch(e){}
        });
}catch(e){}
    },
    o586: function (name, o278) {
        // check the cache first
        var o587 = o569.o570[name];
        try {
if (o587) {
            try {
return o278(null, o587);
}catch(e){}
        }
}catch(e){}

        var o588;
        try {
try {
            try {
o588 = o569.o571().o41(name, o569.o575);
}catch(e){}
        } catch (o189) {
            try {
return o278(o189);
}catch(e){}
        }
}catch(e){}
        try {
o588.o589 = function (o189) {
            var o587 = o189.target.o503;
            var o590 = o189.target.o590;

            var o591;

            try {
if (o587.o592.o593(o569.o576)) {
                try {
o591 = o590.o594(o569.o576);
}catch(e){}
            } else {
                try {
o591 = o587.o595(o569.o576);
}catch(e){}
            }
}catch(e){}

            try {
o591.o596('timestamp', 'timestamp', {
                o597: false
            });
}catch(e){}
        };
}catch(e){}
        try {
o588.o598 = function () {
            try {
o587 = o588.o503;
}catch(e){}

            // add to the cache
            try {
o569.o570[name] = o587;
}catch(e){}
            try {
o278(null, o587);
}catch(e){}
        };
}catch(e){}
        try {
o588.o599 = function () {
            try {
o278(this.o600);
}catch(e){}
        };
}catch(e){}
    },
    o579: function (o515, o278) {
        var entries = {};

        function o601(o602) {
            try {
return o602 !== '.' && o602 !== '..';
}catch(e){}
        }try {
;
}catch(e){}

        function o603(o604) {
            try {
return function (o602) {
                try {
return o605.o606(o604, o602);
}catch(e){}
            }
}catch(e){}
        }try {
;
}catch(e){}

        var o607 = o489.o530(o515.o608).filter(o601).map(o603(o515.o608));

        try {
while (o607.length) {
            var o31 = o607.pop();
            var o609;

            try {
try {
                try {
o609 = o489.o609(o31);
}catch(e){}
            } catch (o189) {
                try {
return o278(o189);
}catch(e){}
            }
}catch(e){}

            try {
if (o489.o538(o609.o518)) {
                try {
o607.push.apply(o607, o489.o530(o31).filter(o601).map(o603(o31)));
}catch(e){}
            }
}catch(e){}

            try {
entries[o31] = {
                o504: o609.o551
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
    o582: function (o515, o278) {
        var entries = {};

        try {
o569.o586(o515.o608, function (o580, o587) {
            try {
if (o580) try {
return o278(o580);
}catch(e){}
}catch(e){}

            var o590 = o587.o590([o569.o576], 'readonly');
            try {
o590.o599 = function () {
                try {
o278(this.o600);
}catch(e){}
            };
}catch(e){}

            var o610 = o590.o594(o569.o576);
            var index = o610.index('timestamp');

            try {
index.o611().o598 = function (o612) {
                var o613 = o612.target.o503;

                try {
if (!o613) {
                    try {
return o278(null, {
                        type: 'remote',
                        o587: o587,
                        entries: entries
                    });
}catch(e){}
                }
}catch(e){}

                try {
entries[o613.o614] = {
                    o504: o613.key
                };
}catch(e){}

                try {
o613.o615();
}catch(e){}
            };
}catch(e){}
        });
}catch(e){}
    },
    o616: function (o31, o278) {
        var o609, o494;

        try {
try {
            var o525 = o489.o617(o31);
            try {
o494 = o525.o494;
}catch(e){}
            try {
o609 = o489.o609(o31);
}catch(e){}
        } catch (o189) {
            try {
return o278(o189);
}catch(e){}
        }
}catch(e){}

        try {
if (o489.o538(o609.o518)) {
            try {
return o278(null, {
                o504: o609.o551,
                o518: o609.o518
            });
}catch(e){}
        } else try {
if (o489.o540(o609.o518)) {
            try {
return o278(null, {
                o504: o609.o551,
                o518: o609.o518,
                o539: o494.o539
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
    o618: function (o31, o619, o278) {
        try {
try {
            try {
if (o489.o538(o619.o518)) {
                try {
o489.o620(o31, o619.o518);
}catch(e){}
            } else try {
if (o489.o540(o619.o518)) {
                try {
o489.o621(o31, o619.o539, {
                    o622: 'binary',
                    o564: true
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
o489.o623(o31, o619.o504, o619.o504);
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
    o624: function (o31, o278) {
        try {
try {
            var o525 = o489.o617(o31);
            var o609 = o489.o609(o31);

            try {
if (o489.o538(o609.o518)) {
                try {
o489.o529(o31);
}catch(e){}
            } else try {
if (o489.o540(o609.o518)) {
                try {
o489.o528(o31);
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
    o625: function (o610, o31, o278) {
        var o588 = o610.get(o31);
        try {
o588.o598 = function (o612) {
            try {
o278(null, o612.target.o503);
}catch(e){}
        };
}catch(e){}
        try {
o588.o599 = function () {
            try {
o278(this.o600);
}catch(e){}
        };
}catch(e){}
    },
    o626: function (o610, o31, o619, o278) {
        var o588 = o610.o627(o619, o31);
        try {
o588.o598 = function () {
            try {
o278(null);
}catch(e){}
        };
}catch(e){}
        try {
o588.o599 = function () {
            try {
o278(this.o600);
}catch(e){}
        };
}catch(e){}
    },
    o628: function (o610, o31, o278) {
        var o588 = o610.o629(o31);
        try {
o588.o598 = function () {
            try {
o278(null);
}catch(e){}
        };
}catch(e){}
        try {
o588.o599 = function () {
            try {
o278(this.o600);
}catch(e){}
        };
}catch(e){}
    },
    o585: function (o342, o584, o278) {
        var o630 = 0;

        var create = [];
        try {
Object.keys(o342.entries).forEach(function (key) {
            var o189 = o342.entries[key];
            var o631 = o584.entries[key];
            try {
if (!o631 || o189.o504 > o631.o504) {
                try {
create.push(key);
}catch(e){}
                try {
o630++;
}catch(e){}
            }
}catch(e){}
        });
}catch(e){}

        var o632 = [];
        try {
Object.keys(o584.entries).forEach(function (key) {
            var o189 = o584.entries[key];
            var o631 = o342.entries[key];
            try {
if (!o631) {
                try {
o632.push(key);
}catch(e){}
                try {
o630++;
}catch(e){}
            }
}catch(e){}
        });
}catch(e){}

        try {
if (!o630) {
            try {
return o278(null);
}catch(e){}
        }
}catch(e){}

        var o633 = false;
        var o634 = 0;
        var o587 = o342.type === 'remote' ? o342.o587 : o584.o587;
        var o590 = o587.o590([o569.o576], 'readwrite');
        var o610 = o590.o594(o569.o576);

        function done(o580) {
            try {
if (o580) {
                try {
if (!done.o633) {
                    try {
done.o633 = true;
}catch(e){}
                    try {
return o278(o580);
}catch(e){}
                }
}catch(e){}
                try {
return;
}catch(e){}
            }
}catch(e){}
            try {
if (++o634 >= o630) {
                try {
return o278(null);
}catch(e){}
            }
}catch(e){}
        }try {
;
}catch(e){}

        try {
o590.o599 = function () {
            try {
done(this.o600);
}catch(e){}
        };
}catch(e){}

        // sort paths in ascending order so directory entries are created
        // before the files inside them
        try {
create.sort().forEach(function (o31) {
            try {
if (o584.type === 'local') {
                try {
o569.o625(o610, o31, function (o580, o619) {
                    try {
if (o580) try {
return done(o580);
}catch(e){}
}catch(e){}
                    try {
o569.o618(o31, o619, done);
}catch(e){}
                });
}catch(e){}
            } else {
                try {
o569.o616(o31, function (o580, o619) {
                    try {
if (o580) try {
return done(o580);
}catch(e){}
}catch(e){}
                    try {
o569.o626(o610, o31, o619, done);
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
o632.sort().reverse().forEach(function (o31) {
            try {
if (o584.type === 'local') {
                try {
o569.o624(o31, done);
}catch(e){}
            } else {
                try {
o569.o628(o610, o31, done);
}catch(e){}
            }
}catch(e){}
        });
}catch(e){}
    }
};

var o635 = {
    o636: false,
    o637: function () {
        try {
o635.o636 = !!o17.o638.match(/^win/);
}catch(e){}
    },
    o515: function (o515) {
        try {
o73(o16);
}catch(e){}
        try {
return o635.o516(null, '/', o635.o639(o515.o640.o604), 0);
}catch(e){}
    },
    o516: function (o517, name, o518, o486) {
        try {
if (!o489.o538(o518) && !o489.o540(o518) && !o489.o542(o518)) {
            try {
throw new o489.o496(o352.o375);
}catch(e){}
        }
}catch(e){}
        var o494 = o489.o516(o517, name, o518);
        try {
o494.o523 = o635.o523;
}catch(e){}
        try {
o494.o491 = o635.o491;
}catch(e){}
        try {
return o494;
}catch(e){}
    },
    o639: function (o31) {
        var o609;
        try {
try {
            try {
o609 = o641.o642(o31);
}catch(e){}
            try {
if (o635.o636) {
                // On Windows, directories return permission bits 'rw-rw-rw-', even though they have 'rwxrwxrwx', so 
                // propagate write bits to execute bits.
                try {
o609.o518 = o609.o518 | ((o609.o518 & 146) >> 1);
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
throw new o489.o496(o352[o189.o119]);
}catch(e){}
        }
}catch(e){}
        try {
return o609.o518;
}catch(e){}
    },
    o643: function (o494) {
        var o249 = [];
        try {
while (o494.o517 !== o494) {
            try {
o249.push(o494.name);
}catch(e){}
            try {
o494 = o494.o517;
}catch(e){}
        }
}catch(e){}
        try {
o249.push(o494.o515.o640.o604);
}catch(e){}
        try {
o249.reverse();
}catch(e){}
        try {
return o605.join.apply(null, o249);
}catch(e){}
    },
    o644: {
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
    o645: function (flags) {
        try {
if (flags in o635.o644) {
            try {
return o635.o644[flags];
}catch(e){}
        } else {
            try {
return flags;
}catch(e){}
        }
}catch(e){}
    },
    o523: {
        o522: function (o494) {
            var o31 = o635.o643(o494);
            var o609;
            try {
try {
                try {
o609 = o641.o642(o31);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o489.o496(o352[o189.o119]);
}catch(e){}
            }
}catch(e){}
            // node.js v0.10.20 doesn't report blksize and blocks on Windows. Fake them with default blksize of 4096.
            // See http://support.microsoft.com/kb/140365
            try {
if (o635.o636 && !o609.o553) {
                try {
o609.o553 = 4096;
}catch(e){}
            }
}catch(e){}
            try {
if (o635.o636 && !o609.o554) {
                try {
o609.o554 = (o609.o85 + o609.o553 - 1) / o609.o553 | 0;
}catch(e){}
            }
}catch(e){}
            try {
return {
                o486: o609.o486,
                o546: o609.o546,
                o518: o609.o518,
                o547: o609.o547,
                o548: o609.o548,
                o549: o609.o549,
                o495: o609.o495,
                o85: o609.o85,
                o550: o609.o550,
                o551: o609.o551,
                o552: o609.o552,
                o553: o609.o553,
                o554: o609.o554
            };
}catch(e){}
        },
        o524: function (o494, o545) {
            var o31 = o635.o643(o494);
            try {
try {
                try {
if (o545.o518 !== undefined) {
                    try {
o641.o646(o31, o545.o518);
}catch(e){}
                    // update the common node structure mode as well
                    try {
o494.o518 = o545.o518;
}catch(e){}
                }
}catch(e){}
                try {
if (o545.o504 !== undefined) {
                    var o647 = new Date(o545.o504);
                    try {
o641.o648(o31, o647, o647);
}catch(e){}
                }
}catch(e){}
                try {
if (o545.o85 !== undefined) {
                    try {
o641.o649(o31, o545.o85);
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
throw new o489.o496(o352[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o525: function (o517, name) {
            var o31 = o605.o606(o635.o643(o517), name);
            var o518 = o635.o639(o31);
            try {
return o635.o516(o517, name, o518);
}catch(e){}
        },
        o526: function (o517, name, o518, o486) {
            var o494 = o635.o516(o517, name, o518, o486);
            // create the backing node for this in the fs root as well
            var o31 = o635.o643(o494);
            try {
try {
                try {
if (o489.o538(o494.o518)) {
                    try {
o641.o650(o31, o494.o518);
}catch(e){}
                } else {
                    try {
o641.o651(o31, '', {
                        o518: o494.o518
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
throw new o489.o496(o352[o189.o119]);
}catch(e){}
            }
}catch(e){}
            try {
return o494;
}catch(e){}
        },
        o527: function (o652, o653, o654) {
            var o655 = o635.o643(o652);
            var o656 = o605.o606(o635.o643(o653), o654);
            try {
try {
                try {
o641.o657(o655, o656);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o489.o496(o352[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o528: function (o517, name) {
            var o31 = o605.o606(o635.o643(o517), name);
            try {
try {
                try {
o641.o658(o31);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o489.o496(o352[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o529: function (o517, name) {
            var o31 = o605.o606(o635.o643(o517), name);
            try {
try {
                try {
o641.o659(o31);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o489.o496(o352[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o530: function (o494) {
            var o31 = o635.o643(o494);
            try {
try {
                try {
return o641.o660(o31);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o489.o496(o352[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o531: function (o517, o654, o655) {
            var o656 = o605.o606(o635.o643(o517), o654);
            try {
try {
                try {
o641.o661(o655, o656);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o489.o496(o352[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o535: function (o494) {
            var o31 = o635.o643(o494);
            try {
try {
                try {
return o641.o662(o31);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o489.o496(o352[o189.o119]);
}catch(e){}
            }
}catch(e){}
        }
    },
    o491: {
        o41: function (o492) {
            var o31 = o635.o643(o492.o494);
            try {
try {
                try {
if (o489.o540(o492.o494.o518)) {
                    try {
o492.o663 = o641.o664(o31, o635.o645(o492.flags));
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
throw new o489.o496(o352[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o498: function (o492) {
            try {
try {
                try {
if (o489.o540(o492.o494.o518) && o492.o663) {
                    try {
o641.o665(o492.o663);
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
throw new o489.o496(o352[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o27: function (o492, buffer, o107, length, o563) {
            // FIXME this is terrible.
            var o666 = new o667(length);
            var o668;
            try {
try {
                try {
o668 = o641.o669(o492.o663, o666, 0, length, o563);
}catch(e){}
            } catch (o189) {
                try {
throw new o489.o496(o352[o189.o119]);
}catch(e){}
            }
}catch(e){}
            try {
if (o668 > 0) {
                try {
for (var o82 = 0; o82 < o668; o82++) {
                    try {
buffer[o107 + o82] = o666[o82];
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
return o668;
}catch(e){}
        },
        write: function (o492, buffer, o107, length, o563) {
            // FIXME this is terrible.
            var o666 = new o667(buffer.subarray(o107, o107 + length));
            var o668;
            try {
try {
                try {
o668 = o641.o670(o492.o663, o666, 0, length, o563);
}catch(e){}
            } catch (o189) {
                try {
throw new o489.o496(o352[o189.o119]);
}catch(e){}
            }
}catch(e){}
            try {
return o668;
}catch(e){}
        },
        o532: function (o492, o107, o565) {
            var o563 = o107;
            try {
if (o565 === 1) { // SEEK_CUR.
                try {
o563 += o492.o563;
}catch(e){}
            } else try {
if (o565 === 2) { // SEEK_END.
                try {
if (o489.o540(o492.o494.o518)) {
                    try {
try {
                        var o609 = o641.o671(o492.o663);
                        try {
o563 += o609.o85;
}catch(e){}
                    } catch (o189) {
                        try {
throw new o489.o496(o352[o189.o119]);
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
}catch(e){}

            try {
if (o563 < 0) {
                try {
throw new o489.o496(o352.o375);
}catch(e){}
            }
}catch(e){}

            try {
o492.o563 = o563;
}catch(e){}
            try {
return o563;
}catch(e){}
        }
    }
};

var o672 = o215(1, "i32*", o212);

var o673 = o215(1, "i32*", o212);

var o674 = o215(1, "i32*", o212);

function o675(o492) {
    // int fflush(FILE *stream);
    // http://pubs.opengroup.org/onlinepubs/000095399/functions/fflush.html
    // we don't currently perform any user-space buffering of data
}
var o489 = {
    o604: null,
    o676: [],
    o677: [null],
    o678: [],
    o679: 1,
    o680: null,
    o681: "/",
    o682: false,
    o683: true,
    o496: null,
    o555: {},
    o684: function (o189) {
        try {
if (!(o189 instanceof o489.o496)) try {
throw o189 + ' : ' + o262();
}catch(e){}
}catch(e){}
        try {
return o351(o189.o685);
}catch(e){}
    },
    o617: function (o31, o640) {
        try {
o31 = o605.resolve(o489.o686(), o31);
}catch(e){}
        try {
o640 = o640 || {};
}catch(e){}

        var o687 = {
            o688: true,
            o689: 0
        };
        try {
for (var key in o687) {
            try {
if (o640[key] === undefined) {
                try {
o640[key] = o687[key];
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}

        try {
if (o640.o689 > 8) { // max recursive lookup of 8
            try {
throw new o489.o496(o352.o434);
}catch(e){}
        }
}catch(e){}

        // split the path
        var o249 = o605.o690(o31.split('/').filter(function (o602) {
            try {
return !!o602;
}catch(e){}
        }), false);

        // start at the root
        var o691 = o489.o604;
        var o692 = '/';

        try {
for (var o82 = 0; o82 < o249.length; o82++) {
            var o693 = (o82 === o249.length - 1);
            try {
if (o693 && o640.o517) {
                // stop resolving
                try {
break;
}catch(e){}
            }
}catch(e){}

            try {
o691 = o489.o560(o691, o249[o82]);
}catch(e){}
            try {
o692 = o605.o606(o692, o249[o82]);
}catch(e){}

            // jump to the mount's root node if this is a mountpoint
            try {
if (o489.o694(o691)) {
                try {
if (!o693 || (o693 && o640.o688)) {
                    try {
o691 = o691.o695.o604;
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}

            // by default, lookupPath will not follow a symlink if it is the final path component.
            // setting opts.follow = true will override this behavior.
            try {
if (!o693 || o640.o696) {
                var o697 = 0;
                try {
while (o489.o542(o691.o518)) {
                    var link = o489.o535(o692);
                    try {
o692 = o605.resolve(o605.o698(o692), link);
}catch(e){}

                    var o525 = o489.o617(o692, {
                        o689: o640.o689
                    });
                    try {
o691 = o525.o494;
}catch(e){}

                    try {
if (o697++ > 40) { // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                        try {
throw new o489.o496(o352.o434);
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
            o31: o692,
            o494: o691
        };
}catch(e){}
    },
    o699: function (o494) {
        var o31;
        try {
while (true) {
            try {
if (o489.o700(o494)) {
                var o515 = o494.o515.o608;
                try {
if (!o31) try {
return o515;
}catch(e){}
}catch(e){}
                try {
return o515[o515.length - 1] !== '/' ? o515 + '/' + o31 : o515 + o31;
}catch(e){}
            }
}catch(e){}
            try {
o31 = o31 ? o494.name + '/' + o31 : o494.name;
}catch(e){}
            try {
o494 = o494.o517;
}catch(e){}
        }
}catch(e){}
    },
    o701: function (o702, name) {
        var o703 = 0;


        try {
for (var o82 = 0; o82 < name.length; o82++) {
            try {
o703 = ((o703 << 5) - o703 + name.charCodeAt(o82)) | 0;
}catch(e){}
        }
}catch(e){}
        try {
return ((o702 + o703) >>> 0) % o489.o680.length;
}catch(e){}
    },
    o704: function (o494) {
        var o703 = o489.o701(o494.o517.o333, o494.name);
        try {
o494.o705 = o489.o680[o703];
}catch(e){}
        try {
o489.o680[o703] = o494;
}catch(e){}
    },
    o706: function (o494) {
        var o703 = o489.o701(o494.o517.o333, o494.name);
        try {
if (o489.o680[o703] === o494) {
            try {
o489.o680[o703] = o494.o705;
}catch(e){}
        } else {
            var o691 = o489.o680[o703];
            try {
while (o691) {
                try {
if (o691.o705 === o494) {
                    try {
o691.o705 = o494.o705;
}catch(e){}
                    try {
break;
}catch(e){}
                }
}catch(e){}
                try {
o691 = o691.o705;
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
    },
    o560: function (o517, name) {
        var o580 = o489.o707(o517);
        try {
if (o580) {
            try {
throw new o489.o496(o580);
}catch(e){}
        }
}catch(e){}
        var o703 = o489.o701(o517.o333, name);
        try {
for (var o494 = o489.o680[o703]; o494; o494 = o494.o705) {
            var o708 = o494.name;
            try {
if (o494.o517.o333 === o517.o333 && o708 === name) {
                try {
return o494;
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        // if we failed to find it in the cache, call into the VFS
        try {
return o489.o525(o517, name);
}catch(e){}
    },
    o516: function (o517, name, o518, o495) {
        try {
if (!o489.o709) {
            try {
o489.o709 = function (o517, name, o518, o495) {
                try {
if (!o517) {
                    try {
o517 = this;
}catch(e){} // root node sets parent to itself
                }
}catch(e){}
                try {
this.o517 = o517;
}catch(e){}
                try {
this.o515 = o517.o515;
}catch(e){}
                try {
this.o695 = null;
}catch(e){}
                try {
this.o333 = o489.o679++;
}catch(e){}
                try {
this.name = name;
}catch(e){}
                try {
this.o518 = o518;
}catch(e){}
                try {
this.o523 = {};
}catch(e){}
                try {
this.o491 = {};
}catch(e){}
                try {
this.o495 = o495;
}catch(e){}
            };
}catch(e){}

            try {
o489.o709.prototype = {};
}catch(e){}

            // compatibility
            var o710 = 292 | 73;
            var o711 = 146;

            // NOTE we must use Object.defineProperties instead of individual calls to
            // Object.defineProperty in order to make closure compiler happy
            try {
Object.defineProperties(o489.o709.prototype, {
                o27: {
                    get: function () {
                        try {
return (this.o518 & o710) === o710;
}catch(e){}
                    },
                    set: function (o508) {
                        try {
o508 ? this.o518 |= o710 : this.o518 &= ~o710;
}catch(e){}
                    }
                },
                write: {
                    get: function () {
                        try {
return (this.o518 & o711) === o711;
}catch(e){}
                    },
                    set: function (o508) {
                        try {
o508 ? this.o518 |= o711 : this.o518 &= ~o711;
}catch(e){}
                    }
                },
                o712: {
                    get: function () {
                        try {
return o489.o538(this.o518);
}catch(e){}
                    },
                },
                o713: {
                    get: function () {
                        try {
return o489.o543(this.o518);
}catch(e){}
                    },
                },
            });
}catch(e){}
        }
}catch(e){}

        var o494 = new o489.o709(o517, name, o518, o495);

        try {
o489.o704(o494);
}catch(e){}

        try {
return o494;
}catch(e){}
    },
    o714: function (o494) {
        try {
o489.o706(o494);
}catch(e){}
    },
    o700: function (o494) {
        try {
return o494 === o494.o517;
}catch(e){}
    },
    o694: function (o494) {
        try {
return !!o494.o695;
}catch(e){}
    },
    o540: function (o518) {
        try {
return (o518 & 61440) === 32768;
}catch(e){}
    },
    o538: function (o518) {
        try {
return (o518 & 61440) === 16384;
}catch(e){}
    },
    o542: function (o518) {
        try {
return (o518 & 61440) === 40960;
}catch(e){}
    },
    o543: function (o518) {
        try {
return (o518 & 61440) === 8192;
}catch(e){}
    },
    o519: function (o518) {
        try {
return (o518 & 61440) === 24576;
}catch(e){}
    },
    o520: function (o518) {
        try {
return (o518 & 61440) === 4096;
}catch(e){}
    },
    o715: function (o518) {
        try {
return (o518 & 49152) === 49152;
}catch(e){}
    },
    o716: {
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
    o717: function (o231) {
        var flags = o489.o716[o231];
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
    o645: function (o718) {
        var o719 = o718 & 2097155;
        var o720 = ['r', 'w', 'rw'][o719];
        try {
if ((o718 & 512)) {
            try {
o720 += 'w';
}catch(e){}
        }
}catch(e){}
        try {
return o720;
}catch(e){}
    },
    o721: function (o494, o720) {
        try {
if (o489.o683) {
            try {
return 0;
}catch(e){}
        }
}catch(e){}
        // return 0 if any user, group or owner bits are set.
        try {
if (o720.indexOf('r') !== -1 && !(o494.o518 & 292)) {
            try {
return o352.o366;
}catch(e){}
        } else try {
if (o720.indexOf('w') !== -1 && !(o494.o518 & 146)) {
            try {
return o352.o366;
}catch(e){}
        } else try {
if (o720.indexOf('x') !== -1 && !(o494.o518 & 73)) {
            try {
return o352.o366;
}catch(e){}
        }
}catch(e){}
}catch(e){}
}catch(e){}
        try {
return 0;
}catch(e){}
    },
    o707: function (o521) {
        try {
return o489.o721(o521, 'x');
}catch(e){}
    },
    o722: function (o521, name) {
        try {
try {
            var o494 = o489.o560(o521, name);
            try {
return o352.o370;
}catch(e){}
        } catch (o189) {}
}catch(e){}
        try {
return o489.o721(o521, 'wx');
}catch(e){}
    },
    o723: function (o521, name, o724) {
        var o494;
        try {
try {
            try {
o494 = o489.o560(o521, name);
}catch(e){}
        } catch (o189) {
            try {
return o189.o685;
}catch(e){}
        }
}catch(e){}
        var o580 = o489.o721(o521, 'wx');
        try {
if (o580) {
            try {
return o580;
}catch(e){}
        }
}catch(e){}
        try {
if (o724) {
            try {
if (!o489.o538(o494.o518)) {
                try {
return o352.o373;
}catch(e){}
            }
}catch(e){}
            try {
if (o489.o700(o494) || o489.o699(o494) === o489.o686()) {
                try {
return o352.o369;
}catch(e){}
            }
}catch(e){}
        } else {
            try {
if (o489.o538(o494.o518)) {
                try {
return o352.o374;
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
return 0;
}catch(e){}
    },
    o725: function (o494, flags) {
        try {
if (!o494) {
            try {
return o352.o354;
}catch(e){}
        }
}catch(e){}
        try {
if (o489.o542(o494.o518)) {
            try {
return o352.o434;
}catch(e){}
        } else try {
if (o489.o538(o494.o518)) {
            try {
if ((flags & 2097155) !== 0 || // opening for write
                (flags & 512)) {
                try {
return o352.o374;
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
}catch(e){}
        try {
return o489.o721(o494, o489.o645(flags));
}catch(e){}
    },
    o726: 4096,
    o727: function (o728, o729) {
        try {
o728 = o728 || 0;
}catch(e){}
        try {
o729 = o729 || o489.o726;
}catch(e){}
        try {
for (var o730 = o728; o730 <= o729; o730++) {
            try {
if (!o489.o678[o730]) {
                try {
return o730;
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
throw new o489.o496(o352.o377);
}catch(e){}
    },
    o731: function (o730) {
        try {
return o489.o678[o730];
}catch(e){}
    },
    o732: function (o492, o728, o729) {
        try {
if (!o489.o733) {
            try {
o489.o733 = function () {};
}catch(e){}
            try {
o489.o733.prototype = {};
}catch(e){}
            // compatibility
            try {
Object.defineProperties(o489.o733.prototype, {
                o734: {
                    get: function () {
                        try {
return this.o494;
}catch(e){}
                    },
                    set: function (o508) {
                        try {
this.o494 = o508;
}catch(e){}
                    }
                },
                o735: {
                    get: function () {
                        try {
return (this.flags & 2097155) !== 1;
}catch(e){}
                    }
                },
                o736: {
                    get: function () {
                        try {
return (this.flags & 2097155) !== 0;
}catch(e){}
                    }
                },
                o737: {
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
if (o492.__proto__) {
            // reuse the object
            try {
o492.__proto__ = o489.o733.prototype;
}catch(e){}
        } else {
            var o738 = new o489.o733();
            try {
for (var o602 in o492) {
                try {
o738[o602] = o492[o602];
}catch(e){}
            }
}catch(e){}
            try {
o492 = o738;
}catch(e){}
        }
}catch(e){}
        var o730 = o489.o727(o728, o729);
        try {
o492.o730 = o730;
}catch(e){}
        try {
o489.o678[o730] = o492;
}catch(e){}
        try {
return o492;
}catch(e){}
    },
    o739: function (o730) {
        try {
o489.o678[o730] = null;
}catch(e){}
    },
    o740: function (o114) {
        try {
return o489.o678[o114 - 1];
}catch(e){}
    },
    o741: function (o492) {
        try {
return o492 ? o492.o730 + 1 : 0;
}catch(e){}
    },
    o537: {
        o41: function (o492) {
            var o742 = o489.o743(o492.o494.o495);
            // override node's stream ops with the device's
            try {
o492.o491 = o742.o491;
}catch(e){}
            // forward the open call
            try {
if (o492.o491.o41) {
                try {
o492.o491.o41(o492);
}catch(e){}
            }
}catch(e){}
        },
        o532: function () {
            try {
throw new o489.o496(o352.o382);
}catch(e){}
        }
    },
    o744: function (o486) {
        try {
return ((o486) >> 8);
}catch(e){}
    },
    o745: function (o486) {
        try {
return ((o486) & 0xff);
}catch(e){}
    },
    o746: function (o747, o748) {
        try {
return ((o747) << 8 | (o748));
}catch(e){}
    },
    o490: function (o486, o487) {
        try {
o489.o677[o486] = {
            o491: o487
        };
}catch(e){}
    },
    o743: function (o486) {
        try {
return o489.o677[o486];
}catch(e){}
    },
    o749: function (o515) {
        var o676 = [];
        var o607 = [o515];

        try {
while (o607.length) {
            var o750 = o607.pop();

            try {
o676.push(o750);
}catch(e){}

            try {
o607.push.apply(o607, o750.o676);
}catch(e){}
        }
}catch(e){}

        try {
return o676;
}catch(e){}
    },
    o577: function (o578, o278) {
        try {
if (typeof (o578) === 'function') {
            try {
o278 = o578;
}catch(e){}
            try {
o578 = false;
}catch(e){}
        }
}catch(e){}

        var o676 = o489.o749(o489.o604.o515);
        var o634 = 0;

        function done(o580) {
            try {
if (o580) {
                try {
if (!done.o633) {
                    try {
done.o633 = true;
}catch(e){}
                    try {
return o278(o580);
}catch(e){}
                }
}catch(e){}
                try {
return;
}catch(e){}
            }
}catch(e){}
            try {
if (++o634 >= o676.length) {
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
o676.forEach(function (o515) {
            try {
if (!o515.type.o577) {
                try {
return done(null);
}catch(e){}
            }
}catch(e){}
            try {
o515.type.o577(o515, o578, done);
}catch(e){}
        });
}catch(e){}
    },
    o515: function (type, o640, o608) {
        var o604 = o608 === '/';
        var o751 = !o608;
        var o494;

        try {
if (o604 && o489.o604) {
            try {
throw new o489.o496(o352.o369);
}catch(e){}
        } else try {
if (!o604 && !o751) {
            var o525 = o489.o617(o608, {
                o688: false
            });

            try {
o608 = o525.o31;
}catch(e){} // use the absolute path
            try {
o494 = o525.o494;
}catch(e){}

            try {
if (o489.o694(o494)) {
                try {
throw new o489.o496(o352.o369);
}catch(e){}
            }
}catch(e){}

            try {
if (!o489.o538(o494.o518)) {
                try {
throw new o489.o496(o352.o373);
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
}catch(e){}

        var o515 = {
            type: type,
            o640: o640,
            o608: o608,
            o676: []
        };

        // create a root node for the fs
        var o752 = type.o515(o515);
        try {
o752.o515 = o515;
}catch(e){}
        try {
o515.o604 = o752;
}catch(e){}

        try {
if (o604) {
            try {
o489.o604 = o752;
}catch(e){}
        } else try {
if (o494) {
            // set as a mountpoint
            try {
o494.o695 = o515;
}catch(e){}

            // add the new mount to the current mount's children
            try {
if (o494.o515) {
                try {
o494.o515.o676.push(o515);
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
}catch(e){}

        try {
return o752;
}catch(e){}
    },
    o753: function (o608) {
        var o525 = o489.o617(o608, {
            o688: false
        });

        try {
if (!o489.o694(o525.o494)) {
            try {
throw new o489.o496(o352.o375);
}catch(e){}
        }
}catch(e){}

        // destroy the nodes for this mount, and all its child mounts
        var o494 = o525.o494;
        var o515 = o494.o695;
        var o676 = o489.o749(o515);

        try {
Object.keys(o489.o680).forEach(function (o703) {
            var o691 = o489.o680[o703];

            try {
while (o691) {
                var next = o691.o705;

                try {
if (o676.indexOf(o691.o515) !== -1) {
                    try {
o489.o714(o691);
}catch(e){}
                }
}catch(e){}

                try {
o691 = next;
}catch(e){}
            }
}catch(e){}
        });
}catch(e){}

        // no longer a mountpoint
        try {
o494.o695 = null;
}catch(e){}

        // remove this mount from the child mounts
        var o754 = o494.o515.o676.indexOf(o515);
        try {
o73(o754 !== -1);
}catch(e){}
        try {
o494.o515.o676.splice(o754, 1);
}catch(e){}
    },
    o525: function (o517, name) {
        try {
return o517.o523.o525(o517, name);
}catch(e){}
    },
    o526: function (o31, o518, o486) {
        var o525 = o489.o617(o31, {
            o517: true
        });
        var o517 = o525.o494;
        var name = o605.o755(o31);
        var o580 = o489.o722(o517, name);
        try {
if (o580) {
            try {
throw new o489.o496(o580);
}catch(e){}
        }
}catch(e){}
        try {
if (!o517.o523.o526) {
            try {
throw new o489.o496(o352.o353);
}catch(e){}
        }
}catch(e){}
        try {
return o517.o523.o526(o517, name, o518, o486);
}catch(e){}
    },
    create: function (o31, o518) {
        try {
o518 = o518 !== undefined ? o518 : 438 /* 0666 */ ;
}catch(e){}
        try {
o518 &= 4095;
}catch(e){}
        try {
o518 |= 32768;
}catch(e){}
        try {
return o489.o526(o31, o518, 0);
}catch(e){}
    },
    o620: function (o31, o518) {
        try {
o518 = o518 !== undefined ? o518 : 511 /* 0777 */ ;
}catch(e){}
        try {
o518 &= 511 | 512;
}catch(e){}
        try {
o518 |= 16384;
}catch(e){}
        try {
return o489.o526(o31, o518, 0);
}catch(e){}
    },
    o756: function (o31, o518, o486) {
        try {
if (typeof (o486) === 'undefined') {
            try {
o486 = o518;
}catch(e){}
            try {
o518 = 438 /* 0666 */ ;
}catch(e){}
        }
}catch(e){}
        try {
o518 |= 8192;
}catch(e){}
        try {
return o489.o526(o31, o518, o486);
}catch(e){}
    },
    o531: function (o562, o757) {
        var o525 = o489.o617(o757, {
            o517: true
        });
        var o517 = o525.o494;
        var o561 = o605.o755(o757);
        var o580 = o489.o722(o517, o561);
        try {
if (o580) {
            try {
throw new o489.o496(o580);
}catch(e){}
        }
}catch(e){}
        try {
if (!o517.o523.o531) {
            try {
throw new o489.o496(o352.o353);
}catch(e){}
        }
}catch(e){}
        try {
return o517.o523.o531(o517, o561, o562);
}catch(e){}
    },
    o527: function (o758, o759) {
        var o760 = o605.o698(o758);
        var o761 = o605.o698(o759);
        var o762 = o605.o755(o758);
        var o558 = o605.o755(o759);
        // parents must exist
        var o525, o763, o557;
        try {
try {
            try {
o525 = o489.o617(o758, {
                o517: true
            });
}catch(e){}
            try {
o763 = o525.o494;
}catch(e){}
            try {
o525 = o489.o617(o759, {
                o517: true
            });
}catch(e){}
            try {
o557 = o525.o494;
}catch(e){}
        } catch (o189) {
            try {
throw new o489.o496(o352.o369);
}catch(e){}
        }
}catch(e){}
        // need to be part of the same mount
        try {
if (o763.o515 !== o557.o515) {
            try {
throw new o489.o496(o352.o371);
}catch(e){}
        }
}catch(e){}
        // source must exist
        var o556 = o489.o560(o763, o762);
        // old path should not be an ancestor of the new path
        var o764 = o605.o764(o758, o761);
        try {
if (o764.charAt(0) !== '.') {
            try {
throw new o489.o496(o352.o375);
}catch(e){}
        }
}catch(e){}
        // new path should not be an ancestor of the old path
        try {
o764 = o605.o764(o759, o760);
}catch(e){}
        try {
if (o764.charAt(0) !== '.') {
            try {
throw new o489.o496(o352.o432);
}catch(e){}
        }
}catch(e){}
        // see if the new path already exists
        var o559;
        try {
try {
            try {
o559 = o489.o560(o557, o558);
}catch(e){}
        } catch (o189) {
            // not fatal
        }
}catch(e){}
        // early out if nothing needs to change
        try {
if (o556 === o559) {
            try {
return;
}catch(e){}
        }
}catch(e){}
        // we'll need to delete the old entry
        var o724 = o489.o538(o556.o518);
        var o580 = o489.o723(o763, o762, o724);
        try {
if (o580) {
            try {
throw new o489.o496(o580);
}catch(e){}
        }
}catch(e){}
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        try {
o580 = o559 ?
            o489.o723(o557, o558, o724) :
            o489.o722(o557, o558);
}catch(e){}
        try {
if (o580) {
            try {
throw new o489.o496(o580);
}catch(e){}
        }
}catch(e){}
        try {
if (!o763.o523.o527) {
            try {
throw new o489.o496(o352.o353);
}catch(e){}
        }
}catch(e){}
        try {
if (o489.o694(o556) || (o559 && o489.o694(o559))) {
            try {
throw new o489.o496(o352.o369);
}catch(e){}
        }
}catch(e){}
        // if we are going to change the parent, check write permissions
        try {
if (o557 !== o763) {
            try {
o580 = o489.o721(o763, 'w');
}catch(e){}
            try {
if (o580) {
                try {
throw new o489.o496(o580);
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        // remove the node from the lookup hash
        try {
o489.o706(o556);
}catch(e){}
        // do the underlying fs rename
        try {
try {
            try {
o763.o523.o527(o556, o557, o558);
}catch(e){}
        } catch (o189) {
            try {
throw o189;
}catch(e){}
        } finally {
            // add the node back to the hash (in case node_ops.rename
            // changed its name)
            try {
o489.o704(o556);
}catch(e){}
        }
}catch(e){}
    },
    o529: function (o31) {
        var o525 = o489.o617(o31, {
            o517: true
        });
        var o517 = o525.o494;
        var name = o605.o755(o31);
        var o494 = o489.o560(o517, name);
        var o580 = o489.o723(o517, name, true);
        try {
if (o580) {
            try {
throw new o489.o496(o580);
}catch(e){}
        }
}catch(e){}
        try {
if (!o517.o523.o529) {
            try {
throw new o489.o496(o352.o353);
}catch(e){}
        }
}catch(e){}
        try {
if (o489.o694(o494)) {
            try {
throw new o489.o496(o352.o369);
}catch(e){}
        }
}catch(e){}
        try {
o517.o523.o529(o517, name);
}catch(e){}
        try {
o489.o714(o494);
}catch(e){}
    },
    o530: function (o31) {
        var o525 = o489.o617(o31, {
            o696: true
        });
        var o494 = o525.o494;
        try {
if (!o494.o523.o530) {
            try {
throw new o489.o496(o352.o373);
}catch(e){}
        }
}catch(e){}
        try {
return o494.o523.o530(o494);
}catch(e){}
    },
    o528: function (o31) {
        var o525 = o489.o617(o31, {
            o517: true
        });
        var o517 = o525.o494;
        var name = o605.o755(o31);
        var o494 = o489.o560(o517, name);
        var o580 = o489.o723(o517, name, false);
        try {
if (o580) {
            // POSIX says unlink should set EPERM, not EISDIR
            try {
if (o580 === o352.o374) try {
o580 = o352.o353;
}catch(e){}
}catch(e){}
            try {
throw new o489.o496(o580);
}catch(e){}
        }
}catch(e){}
        try {
if (!o517.o523.o528) {
            try {
throw new o489.o496(o352.o353);
}catch(e){}
        }
}catch(e){}
        try {
if (o489.o694(o494)) {
            try {
throw new o489.o496(o352.o369);
}catch(e){}
        }
}catch(e){}
        try {
o517.o523.o528(o517, name);
}catch(e){}
        try {
o489.o714(o494);
}catch(e){}
    },
    o535: function (o31) {
        var o525 = o489.o617(o31);
        var link = o525.o494;
        try {
if (!link.o523.o535) {
            try {
throw new o489.o496(o352.o375);
}catch(e){}
        }
}catch(e){}
        try {
return link.o523.o535(link);
}catch(e){}
    },
    o609: function (o31, o765) {
        var o525 = o489.o617(o31, {
            o696: !o765
        });
        var o494 = o525.o494;
        try {
if (!o494.o523.o522) {
            try {
throw new o489.o496(o352.o353);
}catch(e){}
        }
}catch(e){}
        try {
return o494.o523.o522(o494);
}catch(e){}
    },
    o766: function (o31) {
        try {
return o489.o609(o31, true);
}catch(e){}
    },
    o767: function (o31, o518, o765) {
        var o494;
        try {
if (typeof o31 === 'string') {
            var o525 = o489.o617(o31, {
                o696: !o765
            });
            try {
o494 = o525.o494;
}catch(e){}
        } else {
            try {
o494 = o31;
}catch(e){}
        }
}catch(e){}
        try {
if (!o494.o523.o524) {
            try {
throw new o489.o496(o352.o353);
}catch(e){}
        }
}catch(e){}
        try {
o494.o523.o524(o494, {
            o518: (o518 & 4095) | (o494.o518 & ~4095),
            o504: Date.o4()
        });
}catch(e){}
    },
    o768: function (o31, o518) {
        try {
o489.o767(o31, o518, true);
}catch(e){}
    },
    o769: function (o730, o518) {
        var o492 = o489.o731(o730);
        try {
if (!o492) {
            try {
throw new o489.o496(o352.o361);
}catch(e){}
        }
}catch(e){}
        try {
o489.o767(o492.o494, o518);
}catch(e){}
    },
    o770: function (o31, o548, o549, o765) {
        var o494;
        try {
if (typeof o31 === 'string') {
            var o525 = o489.o617(o31, {
                o696: !o765
            });
            try {
o494 = o525.o494;
}catch(e){}
        } else {
            try {
o494 = o31;
}catch(e){}
        }
}catch(e){}
        try {
if (!o494.o523.o524) {
            try {
throw new o489.o496(o352.o353);
}catch(e){}
        }
}catch(e){}
        try {
o494.o523.o524(o494, {
            o504: Date.o4()
            // we ignore the uid / gid for now
        });
}catch(e){}
    },
    o771: function (o31, o548, o549) {
        try {
o489.o770(o31, o548, o549, true);
}catch(e){}
    },
    o772: function (o730, o548, o549) {
        var o492 = o489.o731(o730);
        try {
if (!o492) {
            try {
throw new o489.o496(o352.o361);
}catch(e){}
        }
}catch(e){}
        try {
o489.o770(o492.o494, o548, o549);
}catch(e){}
    },
    o773: function (o31, o774) {
        try {
if (o774 < 0) {
            try {
throw new o489.o496(o352.o375);
}catch(e){}
        }
}catch(e){}
        var o494;
        try {
if (typeof o31 === 'string') {
            var o525 = o489.o617(o31, {
                o696: true
            });
            try {
o494 = o525.o494;
}catch(e){}
        } else {
            try {
o494 = o31;
}catch(e){}
        }
}catch(e){}
        try {
if (!o494.o523.o524) {
            try {
throw new o489.o496(o352.o353);
}catch(e){}
        }
}catch(e){}
        try {
if (o489.o538(o494.o518)) {
            try {
throw new o489.o496(o352.o374);
}catch(e){}
        }
}catch(e){}
        try {
if (!o489.o540(o494.o518)) {
            try {
throw new o489.o496(o352.o375);
}catch(e){}
        }
}catch(e){}
        var o580 = o489.o721(o494, 'w');
        try {
if (o580) {
            try {
throw new o489.o496(o580);
}catch(e){}
        }
}catch(e){}
        try {
o494.o523.o524(o494, {
            o85: o774,
            o504: Date.o4()
        });
}catch(e){}
    },
    o775: function (o730, o774) {
        var o492 = o489.o731(o730);
        try {
if (!o492) {
            try {
throw new o489.o496(o352.o361);
}catch(e){}
        }
}catch(e){}
        try {
if ((o492.flags & 2097155) === 0) {
            try {
throw new o489.o496(o352.o375);
}catch(e){}
        }
}catch(e){}
        try {
o489.o773(o492.o494, o774);
}catch(e){}
    },
    o623: function (o31, o550, o551) {
        var o525 = o489.o617(o31, {
            o696: true
        });
        var o494 = o525.o494;
        try {
o494.o523.o524(o494, {
            o504: Math.o75(o550, o551)
        });
}catch(e){}
    },
    o41: function (o31, flags, o518, o728, o729) {
        try {
flags = typeof flags === 'string' ? o489.o717(flags) : flags;
}catch(e){}
        try {
o518 = typeof o518 === 'undefined' ? 438 /* 0666 */ : o518;
}catch(e){}
        try {
if ((flags & 64)) {
            try {
o518 = (o518 & 4095) | 32768;
}catch(e){}
        } else {
            try {
o518 = 0;
}catch(e){}
        }
}catch(e){}
        var o494;
        try {
if (typeof o31 === 'object') {
            try {
o494 = o31;
}catch(e){}
        } else {
            try {
o31 = o605.normalize(o31);
}catch(e){}
            try {
try {
                var o525 = o489.o617(o31, {
                    o696: !(flags & 131072)
                });
                try {
o494 = o525.o494;
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
if (o494) {
                // if O_CREAT and O_EXCL are set, error out if the node already exists
                try {
if ((flags & 128)) {
                    try {
throw new o489.o496(o352.o370);
}catch(e){}
                }
}catch(e){}
            } else {
                // node doesn't exist, try to create it
                try {
o494 = o489.o526(o31, o518, 0);
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
if (!o494) {
            try {
throw new o489.o496(o352.o354);
}catch(e){}
        }
}catch(e){}
        // can't truncate a device
        try {
if (o489.o543(o494.o518)) {
            try {
flags &= ~512;
}catch(e){}
        }
}catch(e){}
        // check permissions
        var o580 = o489.o725(o494, flags);
        try {
if (o580) {
            try {
throw new o489.o496(o580);
}catch(e){}
        }
}catch(e){}
        // do truncation if necessary
        try {
if ((flags & 512)) {
            try {
o489.o773(o494, 0);
}catch(e){}
        }
}catch(e){}
        // we've already handled these, don't pass down to the underlying vfs
        try {
flags &= ~(128 | 512);
}catch(e){}

        // register the stream with the filesystem
        var o492 = o489.o732({
            o494: o494,
            o31: o489.o699(o494), // we want the absolute path to the node
            flags: flags,
            o497: true,
            o563: 0,
            o491: o494.o491,
            // used by the file family libc calls (fopen, fwrite, ferror, etc.)
            o566: [],
            o600: false
        }, o728, o729);
        // call the new stream's open function
        try {
if (o492.o491.o41) {
            try {
o492.o491.o41(o492);
}catch(e){}
        }
}catch(e){}
        try {
if (Module['logReadFiles'] && !(flags & 1)) {
            try {
if (!o489.o776) try {
o489.o776 = {};
}catch(e){}
}catch(e){}
            try {
if (!(o31 in o489.o776)) {
                try {
o489.o776[o31] = 1;
}catch(e){}
                try {
Module['printErr']('read file: ' + o31);
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
return o492;
}catch(e){}
    },
    o498: function (o492) {
        try {
try {
            try {
if (o492.o491.o498) {
                try {
o492.o491.o498(o492);
}catch(e){}
            }
}catch(e){}
        } catch (o189) {
            try {
throw o189;
}catch(e){}
        } finally {
            try {
o489.o739(o492.o730);
}catch(e){}
        }
}catch(e){}
    },
    o532: function (o492, o107, o565) {
        try {
if (!o492.o497 || !o492.o491.o532) {
            try {
throw new o489.o496(o352.o382);
}catch(e){}
        }
}catch(e){}
        try {
return o492.o491.o532(o492, o107, o565);
}catch(e){}
    },
    o27: function (o492, buffer, o107, length, o563) {
        try {
if (length < 0 || o563 < 0) {
            try {
throw new o489.o496(o352.o375);
}catch(e){}
        }
}catch(e){}
        try {
if ((o492.flags & 2097155) === 1) {
            try {
throw new o489.o496(o352.o361);
}catch(e){}
        }
}catch(e){}
        try {
if (o489.o538(o492.o494.o518)) {
            try {
throw new o489.o496(o352.o374);
}catch(e){}
        }
}catch(e){}
        try {
if (!o492.o491.o27) {
            try {
throw new o489.o496(o352.o375);
}catch(e){}
        }
}catch(e){}
        var o777 = true;
        try {
if (typeof o563 === 'undefined') {
            try {
o563 = o492.o563;
}catch(e){}
            try {
o777 = false;
}catch(e){}
        } else try {
if (!o492.o497) {
            try {
throw new o489.o496(o352.o382);
}catch(e){}
        }
}catch(e){}
}catch(e){}
        var o502 = o492.o491.o27(o492, buffer, o107, length, o563);
        try {
if (!o777) try {
o492.o563 += o502;
}catch(e){}
}catch(e){}
        try {
return o502;
}catch(e){}
    },
    write: function (o492, buffer, o107, length, o563, o564) {
        try {
if (length < 0 || o563 < 0) {
            try {
throw new o489.o496(o352.o375);
}catch(e){}
        }
}catch(e){}
        try {
if ((o492.flags & 2097155) === 0) {
            try {
throw new o489.o496(o352.o361);
}catch(e){}
        }
}catch(e){}
        try {
if (o489.o538(o492.o494.o518)) {
            try {
throw new o489.o496(o352.o374);
}catch(e){}
        }
}catch(e){}
        try {
if (!o492.o491.write) {
            try {
throw new o489.o496(o352.o375);
}catch(e){}
        }
}catch(e){}
        var o777 = true;
        try {
if (typeof o563 === 'undefined') {
            try {
o563 = o492.o563;
}catch(e){}
            try {
o777 = false;
}catch(e){}
        } else try {
if (!o492.o497) {
            try {
throw new o489.o496(o352.o382);
}catch(e){}
        }
}catch(e){}
}catch(e){}
        try {
if (o492.flags & 1024) {
            // seek to the end before writing in append mode
            try {
o489.o532(o492, 0, 2);
}catch(e){}
        }
}catch(e){}
        var o778 = o492.o491.write(o492, buffer, o107, length, o563, o564);
        try {
if (!o777) try {
o492.o563 += o778;
}catch(e){}
}catch(e){}
        try {
return o778;
}catch(e){}
    },
    o215: function (o492, o107, length) {
        try {
if (o107 < 0 || length <= 0) {
            try {
throw new o489.o496(o352.o375);
}catch(e){}
        }
}catch(e){}
        try {
if ((o492.flags & 2097155) === 0) {
            try {
throw new o489.o496(o352.o361);
}catch(e){}
        }
}catch(e){}
        try {
if (!o489.o540(o492.o494.o518) && !o489.o538(o494.o518)) {
            try {
throw new o489.o496(o352.o372);
}catch(e){}
        }
}catch(e){}
        try {
if (!o492.o491.o215) {
            try {
throw new o489.o496(o352.o435);
}catch(e){}
        }
}catch(e){}
        try {
o492.o491.o215(o492, o107, length);
}catch(e){}
    },
    o534: function (o492, buffer, o107, length, o563, o567, flags) {
        // TODO if PROT is PROT_WRITE, make sure we have write access
        try {
if ((o492.flags & 2097155) === 1) {
            try {
throw new o489.o496(o352.o366);
}catch(e){}
        }
}catch(e){}
        try {
if (!o492.o491.o534) {
            try {
throw new o489.o496(o352.o372);
}catch(e){}
        }
}catch(e){}
        try {
return o492.o491.o534(o492, buffer, o107, length, o563, o567, flags);
}catch(e){}
    },
    o779: function (o492, o780, o196) {
        try {
if (!o492.o491.o779) {
            try {
throw new o489.o496(o352.o378);
}catch(e){}
        }
}catch(e){}
        try {
return o492.o491.o779(o492, o780, o196);
}catch(e){}
    },
    o781: function (o31, o640) {
        try {
o640 = o640 || {};
}catch(e){}
        try {
o640.flags = o640.flags || 'r';
}catch(e){}
        try {
o640.o622 = o640.o622 || 'binary';
}catch(e){}
        try {
if (o640.o622 !== 'utf8' && o640.o622 !== 'binary') {
            try {
throw new Error('Invalid encoding type "' + o640.o622 + '"');
}catch(e){}
        }
}catch(e){}
        var o30;
        var o492 = o489.o41(o31, o640.flags);
        var o609 = o489.o609(o31);
        var length = o609.o85;
        var o782 = new Uint8Array(length);
        try {
o489.o27(o492, o782, 0, length, 0);
}catch(e){}
        try {
if (o640.o622 === 'utf8') {
            try {
o30 = '';
}catch(e){}
            var o229 = new o48.o129();
            try {
for (var o82 = 0; o82 < length; o82++) {
                try {
o30 += o229.o131(o782[o82]);
}catch(e){}
            }
}catch(e){}
        } else try {
if (o640.o622 === 'binary') {
            try {
o30 = o782;
}catch(e){}
        }
}catch(e){}
}catch(e){}
        try {
o489.o498(o492);
}catch(e){}
        try {
return o30;
}catch(e){}
    },
    o621: function (o31, o783, o640) {
        try {
o640 = o640 || {};
}catch(e){}
        try {
o640.flags = o640.flags || 'w';
}catch(e){}
        try {
o640.o622 = o640.o622 || 'utf8';
}catch(e){}
        try {
if (o640.o622 !== 'utf8' && o640.o622 !== 'binary') {
            try {
throw new Error('Invalid encoding type "' + o640.o622 + '"');
}catch(e){}
        }
}catch(e){}
        var o492 = o489.o41(o31, o640.flags, o640.o518);
        try {
if (o640.o622 === 'utf8') {
            var o229 = new o48.o129();
            var o782 = new Uint8Array(o229.o137(o783));
            try {
o489.write(o492, o782, 0, o782.length, 0, o640.o564);
}catch(e){}
        } else try {
if (o640.o622 === 'binary') {
            try {
o489.write(o492, o783, 0, o783.length, 0, o640.o564);
}catch(e){}
        }
}catch(e){}
}catch(e){}
        try {
o489.o498(o492);
}catch(e){}
    },
    o686: function () {
        try {
return o489.o681;
}catch(e){}
    },
    o784: function (o31) {
        var o525 = o489.o617(o31, {
            o696: true
        });
        try {
if (!o489.o538(o525.o494.o518)) {
            try {
throw new o489.o496(o352.o373);
}catch(e){}
        }
}catch(e){}
        var o580 = o489.o721(o525.o494, 'x');
        try {
if (o580) {
            try {
throw new o489.o496(o580);
}catch(e){}
        }
}catch(e){}
        try {
o489.o681 = o525.o31;
}catch(e){}
    },
    o785: function () {
        try {
o489.o620('/tmp');
}catch(e){}
    },
    o786: function () {
        // create /dev
        try {
o489.o620('/dev');
}catch(e){}
        // setup /dev/null
        try {
o489.o490(o489.o746(1, 3), {
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
o489.o756('/dev/null', o489.o746(1, 3));
}catch(e){}
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using Module['printErr']
        // so we register a second tty just for it.
        try {
o481.o485(o489.o746(5, 0), o481.o505);
}catch(e){}
        try {
o481.o485(o489.o746(6, 0), o481.o509);
}catch(e){}
        try {
o489.o756('/dev/tty', o489.o746(5, 0));
}catch(e){}
        try {
o489.o756('/dev/tty1', o489.o746(6, 0));
}catch(e){}
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        try {
o489.o620('/dev/shm');
}catch(e){}
        try {
o489.o620('/dev/shm/tmp');
}catch(e){}
    },
    o787: function () {
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
o489.o788('/dev', 'stdin', Module['stdin']);
}catch(e){}
        } else {
            try {
o489.o531('/dev/tty', '/dev/stdin');
}catch(e){}
        }
}catch(e){}
        try {
if (Module['stdout']) {
            try {
o489.o788('/dev', 'stdout', null, Module['stdout']);
}catch(e){}
        } else {
            try {
o489.o531('/dev/tty', '/dev/stdout');
}catch(e){}
        }
}catch(e){}
        try {
if (Module['stderr']) {
            try {
o489.o788('/dev', 'stderr', null, Module['stderr']);
}catch(e){}
        } else {
            try {
o489.o531('/dev/tty1', '/dev/stderr');
}catch(e){}
        }
}catch(e){}

        // open default streams for the stdin, stdout and stderr devices
        var o789 = o489.o41('/dev/stdin', 'r');
        try {
o202[((o672) >> 2)] = o489.o741(o789);
}catch(e){}
        try {
o73(o789.o730 === 0, 'invalid handle for stdin (' + o789.o730 + ')');
}catch(e){}

        var o790 = o489.o41('/dev/stdout', 'w');
        try {
o202[((o673) >> 2)] = o489.o741(o790);
}catch(e){}
        try {
o73(o790.o730 === 1, 'invalid handle for stdout (' + o790.o730 + ')');
}catch(e){}

        var o791 = o489.o41('/dev/stderr', 'w');
        try {
o202[((o674) >> 2)] = o489.o741(o791);
}catch(e){}
        try {
o73(o791.o730 === 2, 'invalid handle for stderr (' + o791.o730 + ')');
}catch(e){}
    },
    o792: function () {
        try {
if (o489.o496) try {
return;
}catch(e){}
}catch(e){}
        try {
o489.o496 = function o496(o685) {
            try {
this.o685 = o685;
}catch(e){}
            try {
for (var key in o352) {
                try {
if (o352[key] === o685) {
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
this.o793 = o480[o685];
}catch(e){}
        };
}catch(e){}
        try {
o489.o496.prototype = new Error();
}catch(e){}
        try {
o489.o496.prototype.constructor = o489.o496;
}catch(e){}
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        try {
[o352.o354].forEach(function (o119) {
            try {
o489.o555[o119] = new o489.o496(o119);
}catch(e){}
            try {
o489.o555[o119].o190 = '<generic error, no stack>';
}catch(e){}
        });
}catch(e){}
    },
    o637: function () {
        try {
o489.o792();
}catch(e){}

        try {
o489.o680 = new Array(4096);
}catch(e){}

        try {
o489.o515(o510, {}, '/');
}catch(e){}

        try {
o489.o785();
}catch(e){}
        try {
o489.o786();
}catch(e){}
    },
    o483: function (input, o488, o600) {
        try {
o73(!o489.o483.o682, 'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)');
}catch(e){}
        try {
o489.o483.o682 = true;
}catch(e){}

        try {
o489.o792();
}catch(e){}

        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        try {
Module['stdin'] = input || Module['stdin'];
}catch(e){}
        try {
Module['stdout'] = o488 || Module['stdout'];
}catch(e){}
        try {
Module['stderr'] = o600 || Module['stderr'];
}catch(e){}

        try {
o489.o787();
}catch(e){}
    },
    o794: function () {
        try {
o489.o483.o682 = false;
}catch(e){}
        try {
for (var o82 = 0; o82 < o489.o678.length; o82++) {
            var o492 = o489.o678[o82];
            try {
if (!o492) {
                try {
continue;
}catch(e){}
            }
}catch(e){}
            try {
o489.o498(o492);
}catch(e){}
        }
}catch(e){}
    },
    o639: function (o795, o796) {
        var o518 = 0;
        try {
if (o795) try {
o518 |= 292 | 73;
}catch(e){}
}catch(e){}
        try {
if (o796) try {
o518 |= 146;
}catch(e){}
}catch(e){}
        try {
return o518;
}catch(e){}
    },
    o797: function (o249, o798) {
        var o31 = o605.join.apply(null, o249);
        try {
if (o798 && o31[0] == '/') try {
o31 = o31.substr(1);
}catch(e){}
}catch(e){}
        try {
return o31;
}catch(e){}
    },
    o799: function (o764, o800) {
        try {
return o605.resolve(o800, o764);
}catch(e){}
    },
    o801: function (o31) {
        try {
return o605.normalize(o31);
}catch(e){}
    },
    o802: function (o31, o803) {
        var o30 = o489.o804(o31, o803);
        try {
if (o30.o805) {
            try {
return o30.o734;
}catch(e){}
        } else {
            try {
o351(o30.o600);
}catch(e){}
            try {
return null;
}catch(e){}
        }
}catch(e){}
    },
    o804: function (o31, o803) {
        // operate from within the context of the symlink's target
        try {
try {
            var o525 = o489.o617(o31, {
                o696: !o803
            });
            try {
o31 = o525.o31;
}catch(e){}
        } catch (o189) {}
}catch(e){}
        var o30 = {
            o700: false,
            o805: false,
            o600: 0,
            name: null,
            o31: null,
            o734: null,
            o806: false,
            o807: null,
            o808: null
        };
        try {
try {
            var o525 = o489.o617(o31, {
                o517: true
            });
            try {
o30.o806 = true;
}catch(e){}
            try {
o30.o807 = o525.o31;
}catch(e){}
            try {
o30.o808 = o525.o494;
}catch(e){}
            try {
o30.name = o605.o755(o31);
}catch(e){}
            try {
o525 = o489.o617(o31, {
                o696: !o803
            });
}catch(e){}
            try {
o30.o805 = true;
}catch(e){}
            try {
o30.o31 = o525.o31;
}catch(e){}
            try {
o30.o734 = o525.o494;
}catch(e){}
            try {
o30.name = o525.o494.name;
}catch(e){}
            try {
o30.o700 = o525.o31 === '/';
}catch(e){}
        } catch (o189) {
            try {
o30.o600 = o189.o685;
}catch(e){}
        }try {

}catch(e){};
}catch(e){}
        try {
return o30;
}catch(e){}
    },
    o809: function (o517, name, o795, o796) {
        var o31 = o605.o606(typeof o517 === 'string' ? o517 : o489.o699(o517), name);
        var o518 = o489.o639(o795, o796);
        try {
return o489.o620(o31, o518);
}catch(e){}
    },
    o810: function (o517, o31, o795, o796) {
        try {
o517 = typeof o517 === 'string' ? o517 : o489.o699(o517);
}catch(e){}
        var o249 = o31.split('/').reverse();
        try {
while (o249.length) {
            var o811 = o249.pop();
            try {
if (!o811) try {
continue;
}catch(e){}
}catch(e){}
            var o691 = o605.o606(o517, o811);
            try {
try {
                try {
o489.o620(o691);
}catch(e){}
            } catch (o189) {
                // ignore EEXIST
            }
}catch(e){}
            try {
o517 = o691;
}catch(e){}
        }
}catch(e){}
        try {
return o691;
}catch(e){}
    },
    o812: function (o517, name, o813, o795, o796) {
        var o31 = o605.o606(typeof o517 === 'string' ? o517 : o489.o699(o517), name);
        var o518 = o489.o639(o795, o796);
        try {
return o489.create(o31, o518);
}catch(e){}
    },
    o814: function (o517, name, o783, o795, o796, o564) {
        var o31 = name ? o605.o606(typeof o517 === 'string' ? o517 : o489.o699(o517), name) : o517;
        var o518 = o489.o639(o795, o796);
        var o494 = o489.create(o31, o518);
        try {
if (o783) {
            try {
if (typeof o783 === 'string') {
                var o815 = new Array(o783.length);
                try {
for (var o82 = 0, o774 = o783.length; o82 < o774; ++o82) try {
o815[o82] = o783.charCodeAt(o82);
}catch(e){}
}catch(e){}
                try {
o783 = o815;
}catch(e){}
            }
}catch(e){}
            // make sure we can write to the file
            try {
o489.o767(o494, o518 | 146);
}catch(e){}
            var o492 = o489.o41(o494, 'w');
            try {
o489.write(o492, o783, 0, o783.length, 0, o564);
}catch(e){}
            try {
o489.o498(o492);
}catch(e){}
            try {
o489.o767(o494, o518);
}catch(e){}
        }
}catch(e){}
        try {
return o494;
}catch(e){}
    },
    o788: function (o517, name, input, o488) {
        var o31 = o605.o606(typeof o517 === 'string' ? o517 : o489.o699(o517), name);
        var o518 = o489.o639(!!input, !!o488);
        try {
if (!o489.o788.o744) try {
o489.o788.o744 = 64;
}catch(e){}
}catch(e){}
        var o486 = o489.o746(o489.o788.o744++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        try {
o489.o490(o486, {
            o41: function (o492) {
                try {
o492.o497 = false;
}catch(e){}
            },
            o498: function (o492) {
                // flush any pending line data
                try {
if (o488 && o488.buffer && o488.buffer.length) {
                    try {
o488(10);
}catch(e){}
                }
}catch(e){}
            },
            o27: function (o492, buffer, o107, length, o500 /* ignored */ ) {
                var o502 = 0;
                try {
for (var o82 = 0; o82 < length; o82++) {
                    var o503;
                    try {
try {
                        try {
o503 = input();
}catch(e){}
                    } catch (o189) {
                        try {
throw new o489.o496(o352.o357);
}catch(e){}
                    }
}catch(e){}
                    try {
if (o503 === undefined && o502 === 0) {
                        try {
throw new o489.o496(o352.o363);
}catch(e){}
                    }
}catch(e){}
                    try {
if (o503 === null || o503 === undefined) try {
break;
}catch(e){}
}catch(e){}
                    try {
o502++;
}catch(e){}
                    try {
buffer[o107 + o82] = o503;
}catch(e){}
                }
}catch(e){}
                try {
if (o502) {
                    try {
o492.o494.o504 = Date.o4();
}catch(e){}
                }
}catch(e){}
                try {
return o502;
}catch(e){}
            },
            write: function (o492, buffer, o107, length, o500) {
                try {
for (var o82 = 0; o82 < length; o82++) {
                    try {
try {
                        try {
o488(buffer[o107 + o82]);
}catch(e){}
                    } catch (o189) {
                        try {
throw new o489.o496(o352.o357);
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){}
                try {
if (length) {
                    try {
o492.o494.o504 = Date.o4();
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
return o489.o756(o31, o518, o486);
}catch(e){}
    },
    o816: function (o517, name, target, o795, o796) {
        var o31 = o605.o606(typeof o517 === 'string' ? o517 : o489.o699(o517), name);
        try {
return o489.o531(target, o31);
}catch(e){}
    },
    o817: function (o818) {
        try {
if (o818.o713 || o818.o712 || o818.link || o818.o539) try {
return true;
}catch(e){}
}catch(e){}
        var o819 = true;
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
o818.o539 = o192(Module['read'](o818.o38), true);
}catch(e){}
            } catch (o189) {
                try {
o819 = false;
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
if (!o819) try {
o351(o352.o357);
}catch(e){}
}catch(e){}
        try {
return o819;
}catch(e){}
    },
    o820: function (o517, name, o38, o795, o796) {
        try {
if (typeof o40 !== 'undefined') {
            try {
if (!o20) try {
throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
}catch(e){}
}catch(e){}
            // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
            function o821() {
                try {
this.o822 = false;
}catch(e){}
                try {
this.o823 = [];
}catch(e){} // Loaded chunks. Index is the chunk number
            }
            try {
o821.prototype.get = function o824(o754) {
                try {
if (o754 > this.length - 1 || o754 < 0) {
                    try {
return undefined;
}catch(e){}
                }
}catch(e){}
                var o825 = o754 % this.o826;
                var o827 = Math.floor(o754 / this.o826);
                try {
return this.getter(o827)[o825];
}catch(e){}
            }
}catch(e){}
            try {
o821.prototype.o828 = function o829(getter) {
                try {
this.getter = getter;
}catch(e){}
            }
}catch(e){}
            try {
o821.prototype.o830 = function o831() {
                // Find length
                var o39 = new o40();
                try {
o39.o41('HEAD', o38, false);
}catch(e){}
                try {
o39.o42(null);
}catch(e){}
                try {
if (!(o39.o832 >= 200 && o39.o832 < 300 || o39.o832 === 304)) try {
throw new Error("Couldn't load " + o38 + ". Status: " + o39.o832);
}catch(e){}
}catch(e){}
                var o833 = Number(o39.o834("Content-length"));
                var o835;
                var o836 = (o835 = o39.o834("Accept-Ranges")) && o835 === "bytes";
                var o826 = 1024 * 1024; // Chunk size in bytes

                try {
if (!o836) try {
o826 = o833;
}catch(e){}
}catch(e){}

                // Function to get a range from the remote URL.
                var o837 = (function (from, o838) {
                    try {
if (from > o838) try {
throw new Error("invalid range (" + from + ", " + o838 + ") or no bytes requested!");
}catch(e){}
}catch(e){}
                    try {
if (o838 > o833 - 1) try {
throw new Error("only " + o833 + " bytes available! programmer error!");
}catch(e){}
}catch(e){}

                    // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
                    var o39 = new o40();
                    try {
o39.o41('GET', o38, false);
}catch(e){}
                    try {
if (o833 !== o826) try {
o39.o839("Range", "bytes=" + from + "-" + o838);
}catch(e){}
}catch(e){}

                    // Some hints to the browser that we want binary data.
                    try {
if (typeof Uint8Array != 'undefined') try {
o39.o840 = 'arraybuffer';
}catch(e){}
}catch(e){}
                    try {
if (o39.o841) {
                        try {
o39.o841('text/plain; charset=x-user-defined');
}catch(e){}
                    }
}catch(e){}

                    try {
o39.o42(null);
}catch(e){}
                    try {
if (!(o39.o832 >= 200 && o39.o832 < 300 || o39.o832 === 304)) try {
throw new Error("Couldn't load " + o38 + ". Status: " + o39.o832);
}catch(e){}
}catch(e){}
                    try {
if (o39.o842 !== undefined) {
                        try {
return new Uint8Array(o39.o842 || []);
}catch(e){}
                    } else {
                        try {
return o192(o39.o43 || '', true);
}catch(e){}
                    }
}catch(e){}
                });
                var o843 = this;
                try {
o843.o828(function (o827) {
                    var o476 = o827 * o826;
                    var o260 = (o827 + 1) * o826 - 1; // including this byte
                    try {
o260 = Math.o87(o260, o833 - 1);
}catch(e){} // if datalength-1 is selected, this is the last block
                    try {
if (typeof (o843.o823[o827]) === "undefined") {
                        try {
o843.o823[o827] = o837(o476, o260);
}catch(e){}
                    }
}catch(e){}
                    try {
if (typeof (o843.o823[o827]) === "undefined") try {
throw new Error("doXHR failed!");
}catch(e){}
}catch(e){}
                    try {
return o843.o823[o827];
}catch(e){}
                });
}catch(e){}

                try {
this.o844 = o833;
}catch(e){}
                try {
this.o845 = o826;
}catch(e){}
                try {
this.o822 = true;
}catch(e){}
            }
}catch(e){}

            var o843 = new o821();
            try {
Object.defineProperty(o843, "length", {
                get: function () {
                    try {
if (!this.o822) {
                        try {
this.o830();
}catch(e){}
                    }
}catch(e){}
                    try {
return this.o844;
}catch(e){}
                }
            });
}catch(e){}
            try {
Object.defineProperty(o843, "chunkSize", {
                get: function () {
                    try {
if (!this.o822) {
                        try {
this.o830();
}catch(e){}
                    }
}catch(e){}
                    try {
return this.o845;
}catch(e){}
                }
            });
}catch(e){}

            var o813 = {
                o713: false,
                o539: o843
            };
        } else {
            var o813 = {
                o713: false,
                o38: o38
            };
        }
}catch(e){}

        var o494 = o489.o812(o517, name, o813, o795, o796);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        try {
if (o813.o539) {
            try {
o494.o539 = o813.o539;
}catch(e){}
        } else try {
if (o813.o38) {
            try {
o494.o539 = null;
}catch(e){}
            try {
o494.o38 = o813.o38;
}catch(e){}
        }
}catch(e){}
}catch(e){}
        // override each stream op with one that tries to force load the lazy file first
        var o491 = {};
        var keys = Object.keys(o494.o491);
        try {
keys.forEach(function (key) {
            var o846 = o494.o491[key];
            try {
o491[key] = function o847() {
                try {
if (!o489.o817(o494)) {
                    try {
throw new o489.o496(o352.o357);
}catch(e){}
                }
}catch(e){}
                try {
return o846.apply(null, arguments);
}catch(e){}
            };
}catch(e){}
        });
}catch(e){}
        // use a custom read function
        try {
o491.o27 = function o848(o492, buffer, o107, length, o563) {
            try {
if (!o489.o817(o494)) {
                try {
throw new o489.o496(o352.o357);
}catch(e){}
            }
}catch(e){}
            var o539 = o492.o494.o539;
            try {
if (o563 >= o539.length)
                try {
return 0;
}catch(e){}
}catch(e){}
            var o85 = Math.o87(o539.length - o563, length);
            try {
o73(o85 >= 0);
}catch(e){}
            try {
if (o539.slice) { // normal array
                try {
for (var o82 = 0; o82 < o85; o82++) {
                    try {
buffer[o107 + o82] = o539[o563 + o82];
}catch(e){}
                }
}catch(e){}
            } else {
                try {
for (var o82 = 0; o82 < o85; o82++) { // LazyUint8Array from sync binary XHR
                    try {
buffer[o107 + o82] = o539.get(o563 + o82);
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
o494.o491 = o491;
}catch(e){}
        try {
return o494;
}catch(e){}
    },
    o849: function (o517, name, o38, o795, o796, o850, o599, o851, o564) {
        try {
o852.o483();
}catch(e){}
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var o853 = name ? o605.resolve(o605.o606(o517, name)) : o517;

        function o854(o855) {
            function o856(o855) {
                try {
if (!o851) {
                    try {
o489.o814(o517, name, o855, o795, o796, o564);
}catch(e){}
                }
}catch(e){}
                try {
if (o850) try {
o850();
}catch(e){}
}catch(e){}
                try {
o334('cp ' + o853);
}catch(e){}
            }
            var o857 = false;
            try {
Module['preloadPlugins'].forEach(function (o858) {
                try {
if (o857) try {
return;
}catch(e){}
}catch(e){}
                try {
if (o858['canHandle'](o853)) {
                    try {
o858['handle'](o855, o853, o856, function () {
                        try {
if (o599) try {
o599();
}catch(e){}
}catch(e){}
                        try {
o334('cp ' + o853);
}catch(e){}
                    });
}catch(e){}
                    try {
o857 = true;
}catch(e){}
                }
}catch(e){}
            });
}catch(e){}
            try {
if (!o857) try {
o856(o855);
}catch(e){}
}catch(e){}
        }
        try {
o332('cp ' + o853);
}catch(e){}
        try {
if (typeof o38 == 'string') {
            try {
o852.o859(o38, function (o855) {
                try {
o854(o855);
}catch(e){}
            }, o599);
}catch(e){}
        } else {
            try {
o854(o38);
}catch(e){}
        }
}catch(e){}
    },
    o571: function () {
        try {
return o19.o571 || o19.o572 || o19.o573 || o19.o574;
}catch(e){}
    },
    o860: function () {
        try {
return 'EM_FS_' + o19.o861.o862;
}catch(e){}
    },
    o575: 20,
    o576: "FILE_DATA",
    o863: function (o864, o850, o599) {
        try {
o850 = o850 || function () {};
}catch(e){}
        try {
o599 = o599 || function () {};
}catch(e){}
        var o571 = o489.o571();
        try {
try {
            var o865 = o571.o41(o489.o860(), o489.o575);
        } catch (o189) {
            try {
return o599(o189);
}catch(e){}
        }
}catch(e){}
        try {
o865.o589 = function o866() {
            try {
o44.o45('creating db');
}catch(e){}
            var o587 = o865.o503;
            try {
o587.o595(o489.o576);
}catch(e){}
        };
}catch(e){}
        try {
o865.o598 = function o867() {
            var o587 = o865.o503;
            var o590 = o587.o590([o489.o576], 'readwrite');
            var o868 = o590.o594(o489.o576);
            var o869 = 0,
                o870 = 0,
                o630 = o864.length;

            function o856() {
                try {
if (o870 == 0) try {
o850();
}catch(e){}
                else try {
o599();
}catch(e){}
}catch(e){}
            }
            try {
o864.forEach(function (o31) {
                var o871 = o868.o627(o489.o804(o31).o734.o539, o31);
                try {
o871.o598 = function o872() {
                    try {
o869++;
}catch(e){}
                    try {
if (o869 + o870 == o630) try {
o856()
}catch(e){}
}catch(e){}
                };
}catch(e){}
                try {
o871.o599 = function o873() {
                    try {
o870++;
}catch(e){}
                    try {
if (o869 + o870 == o630) try {
o856()
}catch(e){}
}catch(e){}
                };
}catch(e){}
            });
}catch(e){}
            try {
o590.o599 = o599;
}catch(e){}
        };
}catch(e){}
        try {
o865.o599 = o599;
}catch(e){}
    },
    o874: function (o864, o850, o599) {
        try {
o850 = o850 || function () {};
}catch(e){}
        try {
o599 = o599 || function () {};
}catch(e){}
        var o571 = o489.o571();
        try {
try {
            var o865 = o571.o41(o489.o860(), o489.o575);
        } catch (o189) {
            try {
return o599(o189);
}catch(e){}
        }
}catch(e){}
        try {
o865.o589 = o599;
}catch(e){} // no database to load from
        try {
o865.o598 = function o867() {
            var o587 = o865.o503;
            try {
try {
                var o590 = o587.o590([o489.o576], 'readonly');
            } catch (o189) {
                try {
o599(o189);
}catch(e){}
                try {
return;
}catch(e){}
            }
}catch(e){}
            var o868 = o590.o594(o489.o576);
            var o869 = 0,
                o870 = 0,
                o630 = o864.length;

            function o856() {
                try {
if (o870 == 0) try {
o850();
}catch(e){}
                else try {
o599();
}catch(e){}
}catch(e){}
            }
            try {
o864.forEach(function (o31) {
                var o875 = o868.get(o31);
                try {
o875.o598 = function o876() {
                    try {
if (o489.o804(o31).o805) {
                        try {
o489.o528(o31);
}catch(e){}
                    }
}catch(e){}
                    try {
o489.o814(o605.o698(o31), o605.o755(o31), o875.o503, true, true, true);
}catch(e){}
                    try {
o869++;
}catch(e){}
                    try {
if (o869 + o870 == o630) try {
o856();
}catch(e){}
}catch(e){}
                };
}catch(e){}
                try {
o875.o599 = function o877() {
                    try {
o870++;
}catch(e){}
                    try {
if (o869 + o870 == o630) try {
o856()
}catch(e){}
}catch(e){}
                };
}catch(e){}
            });
}catch(e){}
            try {
o590.o599 = o599;
}catch(e){}
        };
}catch(e){}
        try {
o865.o599 = o599;
}catch(e){}
    }
};
var o605 = {
    o878: function (o28) {
        var o879 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        try {
return o879.exec(o28).slice(1);
}catch(e){}
    },
    o690: function (o249, o880) {
        // if the path tries to go above the root, `up` ends up > 0
        var o881 = 0;
        try {
for (var o82 = o249.length - 1; o82 >= 0; o82--) {
            var o882 = o249[o82];
            try {
if (o882 === '.') {
                try {
o249.splice(o82, 1);
}catch(e){}
            } else try {
if (o882 === '..') {
                try {
o249.splice(o82, 1);
}catch(e){}
                try {
o881++;
}catch(e){}
            } else try {
if (o881) {
                try {
o249.splice(o82, 1);
}catch(e){}
                try {
o881--;
}catch(e){}
            }
}catch(e){}
}catch(e){}
}catch(e){}
        }
}catch(e){}
        // if the path is allowed to go above the root, restore leading ..s
        try {
if (o880) {
            try {
for (; o881--; o881) {
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
        var o883 = o31.charAt(0) === '/',
            o884 = o31.substr(-1) === '/';
        // Normalize the path
        try {
o31 = o605.o690(o31.split('/').filter(function (o602) {
            try {
return !!o602;
}catch(e){}
        }), !o883).join('/');
}catch(e){}
        try {
if (!o31 && !o883) {
            try {
o31 = '.';
}catch(e){}
        }
}catch(e){}
        try {
if (o31 && o884) {
            try {
o31 += '/';
}catch(e){}
        }
}catch(e){}
        try {
return (o883 ? '/' : '') + o31;
}catch(e){}
    },
    o698: function (o31) {
        var o503 = o605.o878(o31),
            o604 = o503[0],
            o521 = o503[1];
        try {
if (!o604 && !o521) {
            // No dirname whatsoever
            try {
return '.';
}catch(e){}
        }
}catch(e){}
        try {
if (o521) {
            // It has a dirname, strip trailing slash
            try {
o521 = o521.substr(0, o521.length - 1);
}catch(e){}
        }
}catch(e){}
        try {
return o604 + o521;
}catch(e){}
    },
    o755: function (o31) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        try {
if (o31 === '/') try {
return '/';
}catch(e){}
}catch(e){}
        var o885 = o31.lastIndexOf('/');
        try {
if (o885 === -1) try {
return o31;
}catch(e){}
}catch(e){}
        try {
return o31.substr(o885 + 1);
}catch(e){}
    },
    o886: function (o31) {
        try {
return o605.o878(o31)[3];
}catch(e){}
    },
    join: function () {
        var o864 = Array.prototype.slice.call(arguments, 0);
        try {
return o605.normalize(o864.join('/'));
}catch(e){}
    },
    o606: function (o65, o887) {
        try {
return o605.normalize(o65 + '/' + o887);
}catch(e){}
    },
    resolve: function () {
        var o888 = '',
            o889 = false;
        try {
for (var o82 = arguments.length - 1; o82 >= -1 && !o889; o82--) {
            var o31 = (o82 >= 0) ? arguments[o82] : o489.o686();
            // Skip empty and invalid entries
            try {
if (typeof o31 !== 'string') {
                try {
throw new o890('Arguments to path.resolve must be strings');
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
o888 = o31 + '/' + o888;
}catch(e){}
            try {
o889 = o31.charAt(0) === '/';
}catch(e){}
        }
}catch(e){}
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        try {
o888 = o605.o690(o888.split('/').filter(function (o602) {
            try {
return !!o602;
}catch(e){}
        }), !o889).join('/');
}catch(e){}
        try {
return ((o889 ? '/' : '') + o888) || '.';
}catch(e){}
    },
    o764: function (from, o838) {
        try {
from = o605.resolve(from).substr(1);
}catch(e){}
        try {
o838 = o605.resolve(o838).substr(1);
}catch(e){}

        function o891(o815) {
            var o476 = 0;
            try {
for (; o476 < o815.length; o476++) {
                try {
if (o815[o476] !== '') try {
break;
}catch(e){}
}catch(e){}
            }
}catch(e){}
            var o260 = o815.length - 1;
            try {
for (; o260 >= 0; o260--) {
                try {
if (o815[o260] !== '') try {
break;
}catch(e){}
}catch(e){}
            }
}catch(e){}
            try {
if (o476 > o260) try {
return [];
}catch(e){}
}catch(e){}
            try {
return o815.slice(o476, o260 - o476 + 1);
}catch(e){}
        }
        var o892 = o891(from.split('/'));
        var o893 = o891(o838.split('/'));
        var length = Math.o87(o892.length, o893.length);
        var o894 = length;
        try {
for (var o82 = 0; o82 < length; o82++) {
            try {
if (o892[o82] !== o893[o82]) {
                try {
o894 = o82;
}catch(e){}
                try {
break;
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        var o895 = [];
        try {
for (var o82 = o894; o82 < o892.length; o82++) {
            try {
o895.push('..');
}catch(e){}
        }
}catch(e){}
        try {
o895 = o895.concat(o893.slice(o894));
}catch(e){}
        try {
return o895.join('/');
}catch(e){}
    }
};
var o852 = {
    o896: {
        o897: null,
        o898: "",
        o899: false,
        o900: false,
        o901: [],
        o902: function () {
            try {
o852.o896.o899 = true;
}catch(e){}
        },
        o903: function () {
            try {
if (o852.o896.o900) {
                try {
o852.o896.o900 = false;
}catch(e){}
                try {
o852.o896.o897();
}catch(e){}
            }
}catch(e){}
            try {
o852.o896.o899 = false;
}catch(e){}
        },
        o904: function () {
            try {
if (Module['setStatus']) {
                var o793 = Module['statusMessage'] || 'Please wait...';
                var o905 = o852.o896.o906;
                var o907 = o852.o896.o908;
                try {
if (o905) {
                    try {
if (o905 < o907) {
                        try {
Module['setStatus'](o793 + ' (' + (o907 - o905) + '/' + o907 + ')');
}catch(e){}
                    } else {
                        try {
Module['setStatus'](o793);
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
    o909: false,
    o910: false,
    o911: [],
    o912: [],
    o483: function () {
        try {
if (!Module["preloadPlugins"]) try {
Module["preloadPlugins"] = [];
}catch(e){}
}catch(e){} // needs to exist even in workers

        try {
if (o852.o913 || o20) try {
return;
}catch(e){}
}catch(e){}
        try {
o852.o913 = true;
}catch(e){}

        try {
try {
            try {
new o914();
}catch(e){}
            try {
o852.o915 = true;
}catch(e){}
        } catch (o189) {
            try {
o852.o915 = false;
}catch(e){}
            try {
o44.o45("warning: no blob constructor, cannot create blobs with mimetypes");
}catch(e){}
        }
}catch(e){}
        try {
o852.o916 = typeof o917 != "undefined" ? o917 : (typeof o918 != "undefined" ? o918 : (!o852.o915 ? o44.o45("warning: no BlobBuilder") : null));
}catch(e){}
        try {
o852.o919 = typeof o19 != "undefined" ? (o19.o920 ? o19.o920 : o19.o921) : undefined;
}catch(e){}
        try {
if (!Module.o922 && typeof o852.o919 === 'undefined') {
            try {
o44.o45("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
}catch(e){}
            try {
Module.o922 = true;
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

        var o923 = {};
        try {
o923['canHandle'] = function o924(name) {
            try {
return !Module.o922 && /\.(jpg|jpeg|png|bmp)$/i.test(name);
}catch(e){}
        };
}catch(e){}
        try {
o923['handle'] = function o925(o855, name, o850, o599) {
            var o308 = null;
            try {
if (o852.o915) {
                try {
try {
                    try {
o308 = new o914([o855], {
                        type: o852.o926(name)
                    });
}catch(e){}
                    try {
if (o308.o85 !== o855.length) { // Safari bug #118630
                        // Safari's Blob can only take an ArrayBuffer
                        try {
o308 = new o914([(new Uint8Array(o855)).buffer], {
                            type: o852.o926(name)
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
                var o927 = new o852.o916();
                try {
o927.o928((new Uint8Array(o855)).buffer);
}catch(e){} // we need to pass a buffer, and must copy the array to get the right data range
                try {
o308 = o927.o929();
}catch(e){}
            }
}catch(e){}
            var o38 = o852.o919.o930(o308);
            var o931 = new o932();
            try {
o931.o850 = function o933() {
                try {
o73(o931.o934, 'Image ' + name + ' could not be decoded');
}catch(e){}
                var o935 = o936.o937('canvas');
                try {
o935.o938 = o931.o938;
}catch(e){}
                try {
o935.o939 = o931.o939;
}catch(e){}
                var o940 = o935.o941('2d');
                try {
o940.o942(o931, 0, 0);
}catch(e){}
                try {
Module["preloadedImages"][name] = o935;
}catch(e){}
                try {
o852.o919.o943(o38);
}catch(e){}
                try {
if (o850) try {
o850(o855);
}catch(e){}
}catch(e){}
            };
}catch(e){}
            try {
o931.o599 = function o944(o612) {
                try {
o44.o45('Image ' + o38 + ' could not be decoded');
}catch(e){}
                try {
if (o599) try {
o599();
}catch(e){}
}catch(e){}
            };
}catch(e){}
            try {
o931.o342 = o38;
}catch(e){}
        };
}catch(e){}
        try {
Module['preloadPlugins'].push(o923);
}catch(e){}

        var o945 = {};
        try {
o945['canHandle'] = function o946(name) {
            try {
return !Module.o947 && name.substr(-4) in {
                '.ogg': 1,
                '.wav': 1,
                '.mp3': 1
            };
}catch(e){}
        };
}catch(e){}
        try {
o945['handle'] = function o948(o855, name, o850, o599) {
            var done = false;

            function o856(o949) {
                try {
if (done) try {
return;
}catch(e){}
}catch(e){}
                try {
done = true;
}catch(e){}
                try {
Module["preloadedAudios"][name] = o949;
}catch(e){}
                try {
if (o850) try {
o850(o855);
}catch(e){}
}catch(e){}
            }

            function o870() {
                try {
if (done) try {
return;
}catch(e){}
}catch(e){}
                try {
done = true;
}catch(e){}
                try {
Module["preloadedAudios"][name] = new o950();
}catch(e){} // empty shim
                try {
if (o599) try {
o599();
}catch(e){}
}catch(e){}
            }
            try {
if (o852.o915) {
                try {
try {
                    var o308 = new o914([o855], {
                        type: o852.o926(name)
                    });
                } catch (o189) {
                    try {
return o870();
}catch(e){}
                }
}catch(e){}
                var o38 = o852.o919.o930(o308); // XXX we never revoke this!
                var o949 = new o950();
                try {
o949.o951('canplaythrough', function () {
                    try {
o856(o949)
}catch(e){}
                }, false);
}catch(e){} // use addEventListener due to chromium bug 124926
                try {
o949.o599 = function o952(o612) {
                    try {
if (done) try {
return;
}catch(e){}
}catch(e){}
                    try {
o44.o45('warning: browser could not fully decode audio ' + name + ', trying slower base64 approach');
}catch(e){}

                    function o953(o783) {
                        var o954 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                        var o955 = '=';
                        var o30 = '';
                        var o956 = 0;
                        var o957 = 0;
                        try {
for (var o82 = 0; o82 < o783.length; o82++) {
                            try {
o956 = (o956 << 8) | o783[o82];
}catch(e){}
                            try {
o957 += 8;
}catch(e){}
                            try {
while (o957 >= 6) {
                                var o99 = (o956 >> (o957 - 6)) & 0x3f;
                                try {
o957 -= 6;
}catch(e){}
                                try {
o30 += o954[o99];
}catch(e){}
                            }
}catch(e){}
                        }
}catch(e){}
                        try {
if (o957 == 2) {
                            try {
o30 += o954[(o956 & 3) << 4];
}catch(e){}
                            try {
o30 += o955 + o955;
}catch(e){}
                        } else try {
if (o957 == 4) {
                            try {
o30 += o954[(o956 & 0xf) << 2];
}catch(e){}
                            try {
o30 += o955;
}catch(e){}
                        }
}catch(e){}
}catch(e){}
                        try {
return o30;
}catch(e){}
                    }
                    try {
o949.o342 = 'data:audio/x-' + name.substr(-3) + ';base64,' + o953(o855);
}catch(e){}
                    try {
o856(o949);
}catch(e){} // we don't wait for confirmation this worked - but it's worth trying
                };
}catch(e){}
                try {
o949.o342 = o38;
}catch(e){}
                // workaround for chrome bug 124926 - we do not always get oncanplaythrough or onerror
                try {
o852.o958(function () {
                    try {
o856(o949);
}catch(e){} // try to use it even though it is not necessarily ready to play
                }, 10000);
}catch(e){}
            } else {
                try {
return o870();
}catch(e){}
            }
}catch(e){}
        };
}catch(e){}
        try {
Module['preloadPlugins'].push(o945);
}catch(e){}

        // Canvas event setup

        var o935 = Module['canvas'];

        // forced aspect ratio can be enabled by defining 'forcedAspectRatio' on Module
        // Module['forcedAspectRatio'] = 4 / 3;

        try {
o935.o959 = o935['requestPointerLock'] ||
            o935['mozRequestPointerLock'] ||
            o935['webkitRequestPointerLock'] ||
            o935['msRequestPointerLock'] ||
            function () {};
}catch(e){}
        try {
o935.o960 = o936['exitPointerLock'] ||
            o936['mozExitPointerLock'] ||
            o936['webkitExitPointerLock'] ||
            o936['msExitPointerLock'] ||
            function () {};
}catch(e){} // no-op if function does not exist
        try {
o935.o960 = o935.o960.bind(o936);
}catch(e){}

        function o961() {
            try {
o852.o910 = o936['pointerLockElement'] === o935 ||
                o936['mozPointerLockElement'] === o935 ||
                o936['webkitPointerLockElement'] === o935 ||
                o936['msPointerLockElement'] === o935;
}catch(e){}
        }

        try {
o936.o951('pointerlockchange', o961, false);
}catch(e){}
        try {
o936.o951('mozpointerlockchange', o961, false);
}catch(e){}
        try {
o936.o951('webkitpointerlockchange', o961, false);
}catch(e){}
        try {
o936.o951('mspointerlockchange', o961, false);
}catch(e){}

        try {
if (Module['elementPointerLock']) {
            try {
o935.o951("click", function (o962) {
                try {
if (!o852.o910 && o935.o959) {
                    try {
o935.o959();
}catch(e){}
                    try {
o962.o963();
}catch(e){}
                }
}catch(e){}
            }, false);
}catch(e){}
        }
}catch(e){}
    },
    o964: function (o935, o965, o966, o967) {
        var o940;
        var o968 = '?';

        function o969(o612) {
            try {
o968 = o612.o970 || o968;
}catch(e){}
        }
        try {
try {
            try {
if (o965) {
                var o971 = {
                    o972: false,
                    o973: false
                };

                try {
if (o967) {
                    try {
for (var o974 in o967) {
                        try {
o971[o974] = o967[o974];
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){}


                try {
o935.o951('webglcontextcreationerror', o969, false);
}catch(e){}
                try {
try {
                    try {
['experimental-webgl', 'webgl'].some(function (o975) {
                        try {
return o940 = o935.o941(o975, o971);
}catch(e){}
                    });
}catch(e){}
                } finally {
                    try {
o935.o976('webglcontextcreationerror', o969, false);
}catch(e){}
                }
}catch(e){}
            } else {
                try {
o940 = o935.o941('2d');
}catch(e){}
            }
}catch(e){}
            try {
if (!o940) try {
throw ':(';
}catch(e){}
}catch(e){}
        } catch (o189) {
            try {
Module.print('Could not create canvas: ' + [o968, o189]);
}catch(e){}
            try {
return null;
}catch(e){}
        }
}catch(e){}
        try {
if (o965) {
            // Set the background of the WebGL canvas to black
            try {
o935.o977.o978 = "black";
}catch(e){}

            // Warn on context loss
            try {
o935.o951('webglcontextlost', function (o612) {
                try {
o979('WebGL context lost. You will need to reload the page.');
}catch(e){}
            }, false);
}catch(e){}
        }
}catch(e){}
        try {
if (o966) {
            try {
o980 = Module.o940 = o940;
}catch(e){}
            try {
Module.o965 = o965;
}catch(e){}
            try {
o852.o911.forEach(function (o278) {
                try {
o278()
}catch(e){}
            });
}catch(e){}
            try {
o852.o483();
}catch(e){}
        }
}catch(e){}
        try {
return o940;
}catch(e){}
    },
    o981: function (o935, o965, o966) {},
    o982: false,
    o983: undefined,
    o984: undefined,
    o985: function (o983, o984) {
        try {
o852.o983 = o983;
}catch(e){}
        try {
o852.o984 = o984;
}catch(e){}
        try {
if (typeof o852.o983 === 'undefined') try {
o852.o983 = true;
}catch(e){}
}catch(e){}
        try {
if (typeof o852.o984 === 'undefined') try {
o852.o984 = false;
}catch(e){}
}catch(e){}

        var o935 = Module['canvas'];
        var o986 = o935.o987;

        function o988() {
            try {
o852.o909 = false;
}catch(e){}
            try {
if ((o936['webkitFullScreenElement'] || o936['webkitFullscreenElement'] ||
                o936['mozFullScreenElement'] || o936['mozFullscreenElement'] ||
                o936['fullScreenElement'] || o936['fullscreenElement'] ||
                o936['msFullScreenElement'] || o936['msFullscreenElement'] ||
                o936['webkitCurrentFullScreenElement']) === o986) {
                try {
o935.o989 = o936['cancelFullScreen'] ||
                    o936['mozCancelFullScreen'] ||
                    o936['webkitCancelFullScreen'] ||
                    o936['msExitFullscreen'] ||
                    o936['exitFullscreen'] ||
                    function () {};
}catch(e){}
                try {
o935.o989 = o935.o989.bind(o936);
}catch(e){}
                try {
if (o852.o983) try {
o935.o959();
}catch(e){}
}catch(e){}
                try {
o852.o909 = true;
}catch(e){}
                try {
if (o852.o984) try {
o852.o990();
}catch(e){}
}catch(e){}
            } else {

                // remove the full screen specific parent of the canvas again to restore the HTML structure from before going full screen
                var o986 = o935.o987;
                try {
o986.o987.o991(o935, o986);
}catch(e){}
                try {
o986.o987.o992(o986);
}catch(e){}

                try {
if (o852.o984) try {
o852.o993();
}catch(e){}
}catch(e){}
            }
}catch(e){}
            try {
if (Module['onFullScreen']) try {
Module['onFullScreen'](o852.o909);
}catch(e){}
}catch(e){}
            try {
o852.o994(o935);
}catch(e){}
        }

        try {
if (!o852.o982) {
            try {
o852.o982 = true;
}catch(e){}
            try {
o936.o951('fullscreenchange', o988, false);
}catch(e){}
            try {
o936.o951('mozfullscreenchange', o988, false);
}catch(e){}
            try {
o936.o951('webkitfullscreenchange', o988, false);
}catch(e){}
            try {
o936.o951('MSFullscreenChange', o988, false);
}catch(e){}
        }
}catch(e){}

        // create a new parent to ensure the canvas has no siblings. this allows browsers to optimize full screen performance when its parent is the full screen root
        var o986 = o936.o937("div");
        try {
o935.o987.o991(o986, o935);
}catch(e){}
        try {
o986.o995(o935);
}catch(e){}

        // use parent of canvas as full screen root to allow aspect ratio correction (Firefox stretches the root to screen size)
        try {
o986.o985 = o986['requestFullScreen'] ||
            o986['mozRequestFullScreen'] ||
            o986['msRequestFullscreen'] ||
            (o986['webkitRequestFullScreen'] ? function () {
            try {
o986['webkitRequestFullScreen'](Element['ALLOW_KEYBOARD_INPUT'])
}catch(e){}
        } : null);
}catch(e){}
        try {
o986.o985();
}catch(e){}
    },
    o996: function o996(o116) {
        try {
if (typeof o19 === 'undefined') { // Provide fallback to setTimeout if window is undefined (e.g. in Node.js)
            try {
o997(o116, 1000 / 60);
}catch(e){}
        } else {
            try {
if (!o19.o996) {
                try {
o19.o996 = o19['requestAnimationFrame'] ||
                    o19['mozRequestAnimationFrame'] ||
                    o19['webkitRequestAnimationFrame'] ||
                    o19['msRequestAnimationFrame'] ||
                    o19['oRequestAnimationFrame'] ||
                    o19['setTimeout'];
}catch(e){}
            }
}catch(e){}
            try {
o19.o996(o116);
}catch(e){}
        }
}catch(e){}
    },
    o998: function (o116) {
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
    o999: function (o116) {
        try {
return o852.o996(function () {
            try {
if (!o154) try {
o116();
}catch(e){}
}catch(e){}
        });
}catch(e){}
    },
    o958: function (o116, o1000) {
        try {
return o997(function () {
            try {
if (!o154) try {
o116();
}catch(e){}
}catch(e){}
        }, o1000);
}catch(e){}
    },
    o1001: function (o116, o1000) {
        try {
return o1002(function () {
            try {
if (!o154) try {
o116();
}catch(e){}
}catch(e){}
        }, o1000);
}catch(e){}
    },
    o926: function (name) {
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
    o1003: function (o116) {
        try {
if (!o19.o1003) {
            try {
o19.o1003 = o1004['getUserMedia'] ||
                o1004['mozGetUserMedia'];
}catch(e){}
        }
}catch(e){}
        try {
o19.o1003(o116);
}catch(e){}
    },
    o1005: function (o612) {
        try {
return o612['movementX'] ||
            o612['mozMovementX'] ||
            o612['webkitMovementX'] ||
            0;
}catch(e){}
    },
    o1006: function (o612) {
        try {
return o612['movementY'] ||
            o612['mozMovementY'] ||
            o612['webkitMovementY'] ||
            0;
}catch(e){}
    },
    o1007: function (o612) {
        try {
return Math.o75(-1, Math.o87(1, o612.type === 'DOMMouseScroll' ? o612.o1008 : -o612.o1009));
}catch(e){}
    },
    o1010: 0,
    o1011: 0,
    o1012: 0,
    o1013: 0,
    o1014: function (o612) { // event should be mousemove, mousedown or mouseup
        try {
if (o852.o910) {
            // When the pointer is locked, calculate the coordinates
            // based on the movement of the mouse.
            // Workaround for Firefox bug 764498
            try {
if (o612.type != 'mousemove' &&
                ('mozMovementX' in o612)) {
                try {
o852.o1012 = o852.o1013 = 0;
}catch(e){}
            } else {
                try {
o852.o1012 = o852.o1005(o612);
}catch(e){}
                try {
o852.o1013 = o852.o1006(o612);
}catch(e){}
            }
}catch(e){}

            // check if SDL is available
            try {
if (typeof o1015 != "undefined") {
                try {
o852.o1010 = o1015.o1010 + o852.o1012;
}catch(e){}
                try {
o852.o1011 = o1015.o1011 + o852.o1013;
}catch(e){}
            } else {
                // just add the mouse delta to the current absolut mouse position
                // FIXME: ideally this should be clamped against the canvas size and zero
                try {
o852.o1010 += o852.o1012;
}catch(e){}
                try {
o852.o1011 += o852.o1013;
}catch(e){}
            }
}catch(e){}
        } else {
            // Otherwise, calculate the movement based on the changes
            // in the coordinates.
            var o1016 = Module["canvas"].o1017();
            var o23, o64;

            // Neither .scrollX or .pageXOffset are defined in a spec, but
            // we prefer .scrollX because it is currently in a spec draft.
            // (see: http://www.w3.org/TR/2013/WD-cssom-view-20131217/)
            var o1018 = ((typeof o19.o1018 !== 'undefined') ? o19.o1018 : o19.o1019);
            var o1020 = ((typeof o19.o1020 !== 'undefined') ? o19.o1020 : o19.o1021);
            try {
if (o612.type == 'touchstart' ||
                o612.type == 'touchend' ||
                o612.type == 'touchmove') {
                var o227 = o612.o1022.o80(0);
                try {
if (o227) {
                    try {
o23 = o227.o1023 - (o1018 + o1016.o1024);
}catch(e){}
                    try {
o64 = o227.o1025 - (o1020 + o1016.o11);
}catch(e){}
                } else {
                    try {
return;
}catch(e){}
                }
}catch(e){}
            } else {
                try {
o23 = o612.o1023 - (o1018 + o1016.o1024);
}catch(e){}
                try {
o64 = o612.o1025 - (o1020 + o1016.o11);
}catch(e){}
            }
}catch(e){}

            // the canvas might be CSS-scaled compared to its backbuffer;
            // SDL-using content will want mouse coordinates in terms
            // of backbuffer units.
            var o1026 = Module["canvas"].o938;
            var o237 = Module["canvas"].o939;
            try {
o23 = o23 * (o1026 / o1016.o938);
}catch(e){}
            try {
o64 = o64 * (o237 / o1016.o939);
}catch(e){}

            try {
o852.o1012 = o23 - o852.o1010;
}catch(e){}
            try {
o852.o1013 = o64 - o852.o1011;
}catch(e){}
            try {
o852.o1010 = o23;
}catch(e){}
            try {
o852.o1011 = o64;
}catch(e){}
        }
}catch(e){}
    },
    o1027: function (o38, o850, o599) {
        var o39 = new o40();
        try {
o39.o41('GET', o38, true);
}catch(e){}
        try {
o39.o840 = 'arraybuffer';
}catch(e){}
        try {
o39.o850 = function o1028() {
            try {
if (o39.o832 == 200 || (o39.o832 == 0 && o39.o842)) { // file URLs can return 0
                try {
o850(o39.o842);
}catch(e){}
            } else {
                try {
o599();
}catch(e){}
            }
}catch(e){}
        };
}catch(e){}
        try {
o39.o599 = o599;
}catch(e){}
        try {
o39.o42(null);
}catch(e){}
    },
    o859: function (o38, o850, o599, o1029) {
        try {
o852.o1027(o38, function (o1030) {
            try {
o73(o1030, 'Loading data file "' + o38 + '" failed (no arrayBuffer).');
}catch(e){}
            try {
o850(new Uint8Array(o1030));
}catch(e){}
            try {
if (!o1029) try {
o334('al ' + o38);
}catch(e){}
}catch(e){}
        }, function (o612) {
            try {
if (o599) {
                try {
o599();
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
if (!o1029) try {
o332('al ' + o38);
}catch(e){}
}catch(e){}
    },
    o1031: [],
    o1032: function () {
        var o935 = Module['canvas'];
        try {
o852.o1031.forEach(function (o1033) {
            try {
o1033(o935.o938, o935.o939);
}catch(e){}
        });
}catch(e){}
    },
    o1034: function (o938, o939, o1035) {
        var o935 = Module['canvas'];
        try {
o852.o994(o935, o938, o939);
}catch(e){}
        try {
if (!o1035) try {
o852.o1032();
}catch(e){}
}catch(e){}
    },
    o1036: 0,
    o1037: 0,
    o990: function () {
        // check if SDL is available   
        try {
if (typeof o1015 != "undefined") {
            var flags = o267[((o1015.o1038 + o48.o71 * 0) >> 2)];
            try {
flags = flags | 0x00800000;
}catch(e){} // set SDL_FULLSCREEN flag
            try {
o202[((o1015.o1038 + o48.o71 * 0) >> 2)] = flags
}catch(e){}
        }
}catch(e){}
        try {
o852.o1032();
}catch(e){}
    },
    o993: function () {
        // check if SDL is available       
        try {
if (typeof o1015 != "undefined") {
            var flags = o267[((o1015.o1038 + o48.o71 * 0) >> 2)];
            try {
flags = flags & ~0x00800000;
}catch(e){} // clear SDL_FULLSCREEN flag
            try {
o202[((o1015.o1038 + o48.o71 * 0) >> 2)] = flags
}catch(e){}
        }
}catch(e){}
        try {
o852.o1032();
}catch(e){}
    },
    o994: function (o935, o1039, o1040) {
        try {
if (o1039 && o1040) {
            try {
o935.o1041 = o1039;
}catch(e){}
            try {
o935.o1042 = o1040;
}catch(e){}
        } else {
            try {
o1039 = o935.o1041;
}catch(e){}
            try {
o1040 = o935.o1042;
}catch(e){}
        }
}catch(e){}
        var o1043 = o1039;
        var o66 = o1040;
        try {
if (Module['forcedAspectRatio'] && Module['forcedAspectRatio'] > 0) {
            try {
if (o1043 / o66 < Module['forcedAspectRatio']) {
                try {
o1043 = Math.o67(o66 * Module['forcedAspectRatio']);
}catch(e){}
            } else {
                try {
o66 = Math.o67(o1043 / Module['forcedAspectRatio']);
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
if (((o936['webkitFullScreenElement'] || o936['webkitFullscreenElement'] ||
            o936['mozFullScreenElement'] || o936['mozFullscreenElement'] ||
            o936['fullScreenElement'] || o936['fullscreenElement'] ||
            o936['msFullScreenElement'] || o936['msFullscreenElement'] ||
            o936['webkitCurrentFullScreenElement']) === o935.o987) && (typeof o1038 != 'undefined')) {
            var o1044 = Math.o87(o1038.o938 / o1043, o1038.o939 / o66);
            try {
o1043 = Math.o67(o1043 * o1044);
}catch(e){}
            try {
o66 = Math.o67(o66 * o1044);
}catch(e){}
        }
}catch(e){}
        try {
if (o852.o984) {
            try {
if (o935.o938 != o1043) try {
o935.o938 = o1043;
}catch(e){}
}catch(e){}
            try {
if (o935.o939 != o66) try {
o935.o939 = o66;
}catch(e){}
}catch(e){}
            try {
if (typeof o935.o977 != 'undefined') {
                try {
o935.o977.o1045("width");
}catch(e){}
                try {
o935.o977.o1045("height");
}catch(e){}
            }
}catch(e){}
        } else {
            try {
if (o935.o938 != o1039) try {
o935.o938 = o1039;
}catch(e){}
}catch(e){}
            try {
if (o935.o939 != o1040) try {
o935.o939 = o1040;
}catch(e){}
}catch(e){}
            try {
if (typeof o935.o977 != 'undefined') {
                try {
if (o1043 != o1039 || o66 != o1040) {
                    try {
o935.o977.o1046("width", o1043 + "px", "important");
}catch(e){}
                    try {
o935.o977.o1046("height", o66 + "px", "important");
}catch(e){}
                } else {
                    try {
o935.o977.o1045("width");
}catch(e){}
                    try {
o935.o977.o1045("height");
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
    }
};

function o1047(o114) {
    var o30 = Math.floor(Date.o4() / 1000);
    try {
if (o114) {
        try {
o202[((o114) >> 2)] = o30;
}catch(e){}
    }
}catch(e){}
    try {
return o30;
}catch(e){}
}


try {
Module["_strlen"] = o1048;
}catch(e){}

try {
o350 = o48.o141(4);
}catch(e){}
try {
o202[((o350) >> 2)] = 0;
}catch(e){}
try {
Module["requestFullScreen"] = function o1049(o983, o984) {
    try {
o852.o985(o983, o984)
}catch(e){}
};
}catch(e){}
try {
Module["requestAnimationFrame"] = function o1050(o116) {
    try {
o852.o996(o116)
}catch(e){}
};
}catch(e){}
try {
Module["setCanvasSize"] = function o1051(o938, o939, o1035) {
    try {
o852.o1034(o938, o939, o1035)
}catch(e){}
};
}catch(e){}
try {
Module["pauseMainLoop"] = function o1052() {
    try {
o852.o896.o902()
}catch(e){}
};
}catch(e){}
try {
Module["resumeMainLoop"] = function o1053() {
    try {
o852.o896.o903()
}catch(e){}
};
}catch(e){}
try {
Module["getUserMedia"] = function o1054() {
    try {
o852.o1003()
}catch(e){}
}
}catch(e){}
try {
o489.o637();
}catch(e){}
try {
o280.unshift({
    o116: function () {
        try {
if (!Module["noFSInit"] && !o489.o483.o682) try {
o489.o483()
}catch(e){}
}catch(e){}
    }
});
}catch(e){}
try {
o281.push({
    o116: function () {
        try {
o489.o683 = false
}catch(e){}
    }
});
}catch(e){}
try {
o282.push({
    o116: function () {
        try {
o489.o794()
}catch(e){}
    }
});
}catch(e){}
try {
Module["FS_createFolder"] = o489.o809;
}catch(e){}
try {
Module["FS_createPath"] = o489.o810;
}catch(e){}
try {
Module["FS_createDataFile"] = o489.o814;
}catch(e){}
try {
Module["FS_createPreloadedFile"] = o489.o849;
}catch(e){}
try {
Module["FS_createLazyFile"] = o489.o820;
}catch(e){}
try {
Module["FS_createLink"] = o489.o816;
}catch(e){}
try {
Module["FS_createDevice"] = o489.o788;
}catch(e){}
try {
o280.unshift({
    o116: function () {
        try {
o481.o483()
}catch(e){}
    }
});
}catch(e){}
try {
o282.push({
    o116: function () {
        try {
o481.o484()
}catch(e){}
    }
});
}catch(e){}
try {
o481.o229 = new o48.o129();
}catch(e){}
try {
if (o16) {
    var o641 = require("fs");
    try {
o635.o637();
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

function o1055(o23, o64) {
    try {
Module.print('int ' + o23 + ',' + o64);
}catch(e){} // + ' ' + new Error().stack);
}

function o1056(o23, o64) {
    try {
Module.print('float ' + o23 + ',' + o64);
}catch(e){} // + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var o1057 = (function (global, o1058, buffer) {
    try {
"use asm";
}catch(e){}
    var o247 = new global.Int8Array(buffer);
    var o308 = new global.Int16Array(buffer);
    var o259 = new global.Int32Array(buffer);
    var o1059 = new global.Uint8Array(buffer);
    var o189 = new global.Uint16Array(buffer);
    var o34 = new global.Uint32Array(buffer);
    var o1060 = new global.Float32Array(buffer);
    var o66 = new global.Float64Array(buffer);
    var o82 = o1058.o50 | 0;
    var o1061 = o1058.o271 | 0;
    var o111 = o1058.o337 | 0;
    var o65 = o1058.o154 | 0;
    var o750 = 0;
    var o1062 = 0;
    var o1063 = 0;
    var o602 = 0;
    var o1064 = +o1058.NaN,
        o887 = +o1058.Infinity;
    var o1065 = 0,
        o227 = 0,
        o1066 = 0,
        o1067 = 0,
        o1043 = 0.0,
        o23 = 0,
        o64 = 0,
        o1068 = 0,
        o1069 = 0.0;
    var o1070 = 0;
    var o1071 = 0;
    var o1072 = 0;
    var o1073 = 0;
    var o1074 = 0;
    var o1075 = 0;
    var o1076 = 0;
    var o1077 = 0;
    var o1078 = 0;
    var o1079 = 0;
    var o1080 = global.Math.floor;
    var o1081 = global.Math.abs;
    var o1082 = global.Math.sqrt;
    var o1083 = global.Math.o305;
    var o1084 = global.Math.cos;
    var o1085 = global.Math.sin;
    var o1086 = global.Math.tan;
    var o1087 = global.Math.acos;
    var o1088 = global.Math.o318;
    var o1089 = global.Math.o320;
    var o1090 = global.Math.atan2;
    var o1091 = global.Math.o323;
    var o1092 = global.Math.o45;
    var o1093 = global.Math.ceil;
    var o1094 = global.Math.imul;
    var o1095 = o1058.abort;
    var o1096 = o1058.o73;
    var o1097 = o1058.o1055;
    var o1098 = o1058.o1056;
    var o1099 = o1058.o87;
    var o1100 = o1058.o475;
    var o1101 = o1058.o675;
    var o1102 = o1058.o479;
    var o1103 = o1058.o351;
    var o1104 = o1058.o345;
    var o1105 = o1058.o1047;
    var o1106 = o1058.o340;
    var o1107 = o1058.o474;
    var o1108 = o1058.o478;
    var o747 = 0.0;
    // EMSCRIPTEN_START_FUNCS
    function o1109(o247) {
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

    function o1110() {
        try {
return o82 | 0
}catch(e){}
    }

    function o1111(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        try {
o82 = o247
}catch(e){}
    }

    function o1112(o247, o308) {
        try {
o247 = o247 | 0;
}catch(e){}
        try {
o308 = o308 | 0;
}catch(e){}
        try {
if ((o750 | 0) == 0) {
            try {
o750 = o247;
}catch(e){}
            try {
o1062 = o308
}catch(e){}
        }
}catch(e){}
    }

    function o1113(o308) {
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

    function o1114(o308) {
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

    function o1115(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        try {
o1070 = o247
}catch(e){}
    }

    function o1116(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        try {
o1071 = o247
}catch(e){}
    }

    function o1117(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        try {
o1072 = o247
}catch(e){}
    }

    function o1118(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        try {
o1073 = o247
}catch(e){}
    }

    function o1119(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        try {
o1074 = o247
}catch(e){}
    }

    function o1120(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        try {
o1075 = o247
}catch(e){}
    }

    function o1121(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        try {
o1076 = o247
}catch(e){}
    }

    function o1122(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        try {
o1077 = o247
}catch(e){}
    }

    function o1123(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        try {
o1078 = o247
}catch(e){}
    }

    function o1124(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        try {
o1079 = o247
}catch(e){}
    }

    function o1125() {
        var o308 = 0,
            o1059 = 0,
            o189 = 0,
            o34 = 0;
        try {
o308 = o82;
}catch(e){}
        try {
o1100() | 0;
}catch(e){}
        try {
o1100() | 0;
}catch(e){}
        try {
o1059 = o1126(48) | 0;
}catch(e){}
        try {
o259[2] = o1059;
}catch(e){}
        try {
o189 = o1126(48) | 0;
}catch(e){}
        try {
o259[4] = o189;
}catch(e){}
        try {
o259[o189 >> 2] = o1059;
}catch(e){}
        try {
o259[o189 + 4 >> 2] = 0;
}catch(e){}
        try {
o259[o189 + 8 >> 2] = 10001;
}catch(e){}
        try {
o259[o189 + 12 >> 2] = 40;
}catch(e){}
        try {
o1059 = o189 + 16 | 0;
}catch(e){}
        try {
o189 = 24 | 0;
}catch(e){}
        try {
o34 = o1059 + 31 | 0;
}catch(e){}
        try {
do {
            try {
o247[o1059] = o247[o189] | 0;
}catch(e){}
            try {
o1059 = o1059 + 1 | 0;
}catch(e){}
            try {
o189 = o189 + 1 | 0
}catch(e){}
        } while ((o1059 | 0) < (o34 | 0));
}catch(e){}
        try {
o259[1716 >> 2] = 10;
}catch(e){}
        try {
o1100() | 0;
}catch(e){}
        try {
o189 = 0;
}catch(e){}
        try {
do {
            try {
o247[10688] = 65;
}catch(e){}
            try {
o247[10680] = 66;
}catch(e){}
            try {
o259[2616] = 1;
}catch(e){}
            try {
o259[10504 >> 2] = 7;
}catch(e){}
            try {
o259[10508 >> 2] = 7;
}catch(e){}
            try {
o259[10624 >> 2] = 8;
}catch(e){}
            try {
o259[1720 >> 2] = 8;
}catch(e){}
            try {
o259[1724 >> 2] = 8;
}catch(e){}
            try {
o259[1716 >> 2] = (o259[1716 >> 2] | 0) + 1;
}catch(e){}
            try {
o259[5800 >> 2] = 7;
}catch(e){}
            try {
o259[2674] = 5;
}catch(e){}
            try {
o1059 = o259[4] | 0;
}catch(e){}
            try {
o259[o1059 + 12 >> 2] = 5;
}catch(e){}
            try {
o34 = o259[o1059 >> 2] | 0;
}catch(e){}
            try {
o259[o34 + 12 >> 2] = 5;
}catch(e){}
            try {
o259[o34 >> 2] = o34;
}catch(e){}
            try {
o34 = o247[10680] | 0;
}catch(e){}
            try {
if (!(o34 << 24 >> 24 < 65)) {
                try {
o1059 = 65;
}catch(e){}
                try {
do {
                    try {
o1059 = o1059 + 1 << 24 >> 24;
}catch(e){}
                } while (!(o1059 << 24 >> 24 > o34 << 24 >> 24))
}catch(e){}
            }
}catch(e){}
            try {
o189 = o189 + 1 | 0;
}catch(e){}
        } while ((o189 | 0) != 1e8);
}catch(e){}
        try {
o82 = o308;
}catch(e){}
        try {
return 0
}catch(e){}
    }

    function o1126(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        var o308 = 0,
            o1059 = 0,
            o189 = 0,
            o34 = 0,
            o1060 = 0,
            o66 = 0,
            o1061 = 0,
            o111 = 0,
            o65 = 0,
            o750 = 0,
            o1062 = 0,
            o1063 = 0,
            o602 = 0,
            o1064 = 0,
            o887 = 0,
            o1065 = 0,
            o227 = 0,
            o1066 = 0,
            o1067 = 0,
            o1043 = 0,
            o23 = 0,
            o64 = 0,
            o1068 = 0,
            o1069 = 0,
            o1070 = 0,
            o1071 = 0,
            o1072 = 0,
            o1073 = 0,
            o1074 = 0,
            o1075 = 0,
            o1076 = 0,
            o1077 = 0,
            o1078 = 0,
            o1079 = 0,
            o1080 = 0,
            o1081 = 0,
            o1082 = 0,
            o1083 = 0,
            o1084 = 0,
            o1085 = 0,
            o1086 = 0,
            o1087 = 0,
            o1088 = 0,
            o1089 = 0,
            o1090 = 0,
            o1091 = 0,
            o1092 = 0,
            o1093 = 0,
            o1094 = 0,
            o1095 = 0,
            o1096 = 0,
            o1097 = 0,
            o1098 = 0,
            o1099 = 0,
            o1100 = 0,
            o1101 = 0,
            o1103 = 0,
            o1106 = 0,
            o747 = 0,
            o1109 = 0,
            o1110 = 0,
            o1111 = 0,
            o1112 = 0,
            o1113 = 0,
            o1114 = 0,
            o1115 = 0,
            o1116 = 0,
            o1117 = 0,
            o1118 = 0,
            o1119 = 0,
            o1120 = 0,
            o1121 = 0,
            o1122 = 0,
            o1123 = 0,
            o1124 = 0,
            o1125 = 0,
            o1126 = 0,
            o1127 = 0,
            o1128 = 0,
            o1129 = 0,
            o1130 = 0,
            o1131 = 0,
            o1132 = 0,
            o1133 = 0,
            o1134 = 0,
            o1135 = 0,
            o1136 = 0,
            o1137 = 0,
            o1138 = 0,
            o1139 = 0,
            o1140 = 0;
        try {
o308 = o82;
}catch(e){}
        try {
do {
            try {
if (o247 >>> 0 < 245) {
                try {
if (o247 >>> 0 < 11) {
                    try {
o1059 = 16
}catch(e){}
                } else {
                    try {
o1059 = o247 + 11 & -8
}catch(e){}
                }
}catch(e){}
                try {
o189 = o1059 >>> 3;
}catch(e){}
                try {
o34 = o259[2676] | 0;
}catch(e){}
                try {
o1060 = o34 >>> o189;
}catch(e){}
                try {
if ((o1060 & 3 | 0) != 0) {
                    try {
o66 = (o1060 & 1 ^ 1) + o189 | 0;
}catch(e){}
                    try {
o1061 = o66 << 1;
}catch(e){}
                    try {
o111 = 10744 + (o1061 << 2) | 0;
}catch(e){}
                    try {
o65 = 10744 + (o1061 + 2 << 2) | 0;
}catch(e){}
                    try {
o1061 = o259[o65 >> 2] | 0;
}catch(e){}
                    try {
o750 = o1061 + 8 | 0;
}catch(e){}
                    try {
o1062 = o259[o750 >> 2] | 0;
}catch(e){}
                    try {
do {
                        try {
if ((o111 | 0) == (o1062 | 0)) {
                            try {
o259[2676] = o34 & ~(1 << o66)
}catch(e){}
                        } else {
                            try {
if (o1062 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                                try {
o1102()
}catch(e){}
                            }
}catch(e){}
                            try {
o1063 = o1062 + 12 | 0;
}catch(e){}
                            try {
if ((o259[o1063 >> 2] | 0) == (o1061 | 0)) {
                                try {
o259[o1063 >> 2] = o111;
}catch(e){}
                                try {
o259[o65 >> 2] = o1062;
}catch(e){}
                                try {
break
}catch(e){}
                            } else {
                                try {
o1102()
}catch(e){}
                            }
}catch(e){}
                        }
}catch(e){}
                    } while (0);
}catch(e){}
                    try {
o1062 = o66 << 3;
}catch(e){}
                    try {
o259[o1061 + 4 >> 2] = o1062 | 3;
}catch(e){}
                    try {
o65 = o1061 + (o1062 | 4) | 0;
}catch(e){}
                    try {
o259[o65 >> 2] = o259[o65 >> 2] | 1;
}catch(e){}
                    try {
o602 = o750;
}catch(e){}
                    try {
o82 = o308;
}catch(e){}
                    try {
return o602 | 0
}catch(e){}
                }
}catch(e){}
                try {
if (!(o1059 >>> 0 > (o259[10712 >> 2] | 0) >>> 0)) {
                    try {
o1064 = o1059;
}catch(e){}
                    try {
break
}catch(e){}
                }
}catch(e){}
                try {
if ((o1060 | 0) != 0) {
                    try {
o65 = 2 << o189;
}catch(e){}
                    try {
o1062 = o1060 << o189 & (o65 | 0 - o65);
}catch(e){}
                    try {
o65 = (o1062 & 0 - o1062) + -1 | 0;
}catch(e){}
                    try {
o1062 = o65 >>> 12 & 16;
}catch(e){}
                    try {
o111 = o65 >>> o1062;
}catch(e){}
                    try {
o65 = o111 >>> 5 & 8;
}catch(e){}
                    try {
o1063 = o111 >>> o65;
}catch(e){}
                    try {
o111 = o1063 >>> 2 & 4;
}catch(e){}
                    try {
o887 = o1063 >>> o111;
}catch(e){}
                    try {
o1063 = o887 >>> 1 & 2;
}catch(e){}
                    try {
o1065 = o887 >>> o1063;
}catch(e){}
                    try {
o887 = o1065 >>> 1 & 1;
}catch(e){}
                    try {
o227 = (o65 | o1062 | o111 | o1063 | o887) + (o1065 >>> o887) | 0;
}catch(e){}
                    try {
o887 = o227 << 1;
}catch(e){}
                    try {
o1065 = 10744 + (o887 << 2) | 0;
}catch(e){}
                    try {
o1063 = 10744 + (o887 + 2 << 2) | 0;
}catch(e){}
                    try {
o887 = o259[o1063 >> 2] | 0;
}catch(e){}
                    try {
o111 = o887 + 8 | 0;
}catch(e){}
                    try {
o1062 = o259[o111 >> 2] | 0;
}catch(e){}
                    try {
do {
                        try {
if ((o1065 | 0) == (o1062 | 0)) {
                            try {
o259[2676] = o34 & ~(1 << o227)
}catch(e){}
                        } else {
                            try {
if (o1062 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                                try {
o1102()
}catch(e){}
                            }
}catch(e){}
                            try {
o65 = o1062 + 12 | 0;
}catch(e){}
                            try {
if ((o259[o65 >> 2] | 0) == (o887 | 0)) {
                                try {
o259[o65 >> 2] = o1065;
}catch(e){}
                                try {
o259[o1063 >> 2] = o1062;
}catch(e){}
                                try {
break
}catch(e){}
                            } else {
                                try {
o1102()
}catch(e){}
                            }
}catch(e){}
                        }
}catch(e){}
                    } while (0);
}catch(e){}
                    try {
o1062 = o227 << 3;
}catch(e){}
                    try {
o1063 = o1062 - o1059 | 0;
}catch(e){}
                    try {
o259[o887 + 4 >> 2] = o1059 | 3;
}catch(e){}
                    try {
o1065 = o887;
}catch(e){}
                    try {
o34 = o1065 + o1059 | 0;
}catch(e){}
                    try {
o259[o1065 + (o1059 | 4) >> 2] = o1063 | 1;
}catch(e){}
                    try {
o259[o1065 + o1062 >> 2] = o1063;
}catch(e){}
                    try {
o1062 = o259[10712 >> 2] | 0;
}catch(e){}
                    try {
if ((o1062 | 0) != 0) {
                        try {
o1065 = o259[10724 >> 2] | 0;
}catch(e){}
                        try {
o189 = o1062 >>> 3;
}catch(e){}
                        try {
o1062 = o189 << 1;
}catch(e){}
                        try {
o1060 = 10744 + (o1062 << 2) | 0;
}catch(e){}
                        try {
o750 = o259[2676] | 0;
}catch(e){}
                        try {
o1061 = 1 << o189;
}catch(e){}
                        try {
do {
                            try {
if ((o750 & o1061 | 0) == 0) {
                                try {
o259[2676] = o750 | o1061;
}catch(e){}
                                try {
o1066 = 10744 + (o1062 + 2 << 2) | 0;
}catch(e){}
                                try {
o1067 = o1060
}catch(e){}
                            } else {
                                try {
o189 = 10744 + (o1062 + 2 << 2) | 0;
}catch(e){}
                                try {
o66 = o259[o189 >> 2] | 0;
}catch(e){}
                                try {
if (!(o66 >>> 0 < (o259[10720 >> 2] | 0) >>> 0)) {
                                    try {
o1066 = o189;
}catch(e){}
                                    try {
o1067 = o66;
}catch(e){}
                                    try {
break
}catch(e){}
                                }
}catch(e){}
                                try {
o1102()
}catch(e){}
                            }
}catch(e){}
                        } while (0);
}catch(e){}
                        try {
o259[o1066 >> 2] = o1065;
}catch(e){}
                        try {
o259[o1067 + 12 >> 2] = o1065;
}catch(e){}
                        try {
o259[o1065 + 8 >> 2] = o1067;
}catch(e){}
                        try {
o259[o1065 + 12 >> 2] = o1060
}catch(e){}
                    }
}catch(e){}
                    try {
o259[10712 >> 2] = o1063;
}catch(e){}
                    try {
o259[10724 >> 2] = o34;
}catch(e){}
                    try {
o602 = o111;
}catch(e){}
                    try {
o82 = o308;
}catch(e){}
                    try {
return o602 | 0
}catch(e){}
                }
}catch(e){}
                try {
o1062 = o259[10708 >> 2] | 0;
}catch(e){}
                try {
if ((o1062 | 0) == 0) {
                    try {
o1064 = o1059;
}catch(e){}
                    try {
break
}catch(e){}
                }
}catch(e){}
                try {
o1061 = (o1062 & 0 - o1062) + -1 | 0;
}catch(e){}
                try {
o1062 = o1061 >>> 12 & 16;
}catch(e){}
                try {
o750 = o1061 >>> o1062;
}catch(e){}
                try {
o1061 = o750 >>> 5 & 8;
}catch(e){}
                try {
o887 = o750 >>> o1061;
}catch(e){}
                try {
o750 = o887 >>> 2 & 4;
}catch(e){}
                try {
o227 = o887 >>> o750;
}catch(e){}
                try {
o887 = o227 >>> 1 & 2;
}catch(e){}
                try {
o66 = o227 >>> o887;
}catch(e){}
                try {
o227 = o66 >>> 1 & 1;
}catch(e){}
                try {
o189 = o259[11008 + ((o1061 | o1062 | o750 | o887 | o227) + (o66 >>> o227) << 2) >> 2] | 0;
}catch(e){}
                try {
o227 = (o259[o189 + 4 >> 2] & -8) - o1059 | 0;
}catch(e){}
                try {
o66 = o189;
}catch(e){}
                try {
o887 = o189;
}catch(e){}
                try {
while (1) {
                    try {
o189 = o259[o66 + 16 >> 2] | 0;
}catch(e){}
                    try {
if ((o189 | 0) == 0) {
                        try {
o750 = o259[o66 + 20 >> 2] | 0;
}catch(e){}
                        try {
if ((o750 | 0) == 0) {
                            try {
break
}catch(e){}
                        } else {
                            try {
o1043 = o750
}catch(e){}
                        }
}catch(e){}
                    } else {
                        try {
o1043 = o189
}catch(e){}
                    }
}catch(e){}
                    try {
o189 = (o259[o1043 + 4 >> 2] & -8) - o1059 | 0;
}catch(e){}
                    try {
o750 = o189 >>> 0 < o227 >>> 0;
}catch(e){}
                    try {
o227 = o750 ? o189 : o227;
}catch(e){}
                    try {
o66 = o1043;
}catch(e){}
                    try {
o887 = o750 ? o1043 : o887
}catch(e){}
                }
}catch(e){}
                try {
o66 = o887;
}catch(e){}
                try {
o111 = o259[10720 >> 2] | 0;
}catch(e){}
                try {
if (o66 >>> 0 < o111 >>> 0) {
                    try {
o1102()
}catch(e){}
                }
}catch(e){}
                try {
o34 = o66 + o1059 | 0;
}catch(e){}
                try {
o1063 = o34;
}catch(e){}
                try {
if (!(o66 >>> 0 < o34 >>> 0)) {
                    try {
o1102()
}catch(e){}
                }
}catch(e){}
                try {
o34 = o259[o887 + 24 >> 2] | 0;
}catch(e){}
                try {
o1060 = o259[o887 + 12 >> 2] | 0;
}catch(e){}
                try {
do {
                    try {
if ((o1060 | 0) == (o887 | 0)) {
                        try {
o1065 = o887 + 20 | 0;
}catch(e){}
                        try {
o750 = o259[o1065 >> 2] | 0;
}catch(e){}
                        try {
if ((o750 | 0) == 0) {
                            try {
o189 = o887 + 16 | 0;
}catch(e){}
                            try {
o1062 = o259[o189 >> 2] | 0;
}catch(e){}
                            try {
if ((o1062 | 0) == 0) {
                                try {
o23 = 0;
}catch(e){}
                                try {
break
}catch(e){}
                            } else {
                                try {
o64 = o1062;
}catch(e){}
                                try {
o1068 = o189
}catch(e){}
                            }
}catch(e){}
                        } else {
                            try {
o64 = o750;
}catch(e){}
                            try {
o1068 = o1065
}catch(e){}
                        }
}catch(e){}
                        try {
while (1) {
                            try {
o1065 = o64 + 20 | 0;
}catch(e){}
                            try {
o750 = o259[o1065 >> 2] | 0;
}catch(e){}
                            try {
if ((o750 | 0) != 0) {
                                try {
o1068 = o1065;
}catch(e){}
                                try {
o64 = o750;
}catch(e){}
                                try {
continue
}catch(e){}
                            }
}catch(e){}
                            try {
o750 = o64 + 16 | 0;
}catch(e){}
                            try {
o1065 = o259[o750 >> 2] | 0;
}catch(e){}
                            try {
if ((o1065 | 0) == 0) {
                                try {
break
}catch(e){}
                            } else {
                                try {
o64 = o1065;
}catch(e){}
                                try {
o1068 = o750
}catch(e){}
                            }
}catch(e){}
                        }
}catch(e){}
                        try {
if (o1068 >>> 0 < o111 >>> 0) {
                            try {
o1102()
}catch(e){}
                        } else {
                            try {
o259[o1068 >> 2] = 0;
}catch(e){}
                            try {
o23 = o64;
}catch(e){}
                            try {
break
}catch(e){}
                        }
}catch(e){}
                    } else {
                        try {
o750 = o259[o887 + 8 >> 2] | 0;
}catch(e){}
                        try {
if (o750 >>> 0 < o111 >>> 0) {
                            try {
o1102()
}catch(e){}
                        }
}catch(e){}
                        try {
o1065 = o750 + 12 | 0;
}catch(e){}
                        try {
if ((o259[o1065 >> 2] | 0) != (o887 | 0)) {
                            try {
o1102()
}catch(e){}
                        }
}catch(e){}
                        try {
o189 = o1060 + 8 | 0;
}catch(e){}
                        try {
if ((o259[o189 >> 2] | 0) == (o887 | 0)) {
                            try {
o259[o1065 >> 2] = o1060;
}catch(e){}
                            try {
o259[o189 >> 2] = o750;
}catch(e){}
                            try {
o23 = o1060;
}catch(e){}
                            try {
break
}catch(e){}
                        } else {
                            try {
o1102()
}catch(e){}
                        }
}catch(e){}
                    }
}catch(e){}
                } while (0);
}catch(e){}
                try {
o247: try {
do {
                    try {
if ((o34 | 0) != 0) {
                        try {
o1060 = o259[o887 + 28 >> 2] | 0;
}catch(e){}
                        try {
o111 = 11008 + (o1060 << 2) | 0;
}catch(e){}
                        try {
do {
                            try {
if ((o887 | 0) == (o259[o111 >> 2] | 0)) {
                                try {
o259[o111 >> 2] = o23;
}catch(e){}
                                try {
if ((o23 | 0) != 0) {
                                    try {
break
}catch(e){}
                                }
}catch(e){}
                                try {
o259[10708 >> 2] = o259[10708 >> 2] & ~(1 << o1060);
}catch(e){}
                                try {
break o247
}catch(e){}
                            } else {
                                try {
if (o34 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                                    try {
o1102()
}catch(e){}
                                }
}catch(e){}
                                try {
o750 = o34 + 16 | 0;
}catch(e){}
                                try {
if ((o259[o750 >> 2] | 0) == (o887 | 0)) {
                                    try {
o259[o750 >> 2] = o23
}catch(e){}
                                } else {
                                    try {
o259[o34 + 20 >> 2] = o23
}catch(e){}
                                }
}catch(e){} try {
if ((o23 | 0) == 0) {
                                    try {
break o247
}catch(e){}
                                }
}catch(e){}
                            }
}catch(e){}
                        } while (0);
}catch(e){}
                        try {
if (o23 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                            try {
o1102()
}catch(e){}
                        }
}catch(e){}
                        try {
o259[o23 + 24 >> 2] = o34;
}catch(e){}
                        try {
o1060 = o259[o887 + 16 >> 2] | 0;
}catch(e){}
                        try {
do {
                            try {
if ((o1060 | 0) != 0) {
                                try {
if (o1060 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                                    try {
o1102()
}catch(e){}
                                } else {
                                    try {
o259[o23 + 16 >> 2] = o1060;
}catch(e){}
                                    try {
o259[o1060 + 24 >> 2] = o23;
}catch(e){}
                                    try {
break
}catch(e){}
                                }
}catch(e){}
                            }
}catch(e){}
                        } while (0);
}catch(e){}
                        try {
o1060 = o259[o887 + 20 >> 2] | 0;
}catch(e){}
                        try {
if ((o1060 | 0) == 0) {
                            try {
break
}catch(e){}
                        }
}catch(e){}
                        try {
if (o1060 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                            try {
o1102()
}catch(e){}
                        } else {
                            try {
o259[o23 + 20 >> 2] = o1060;
}catch(e){}
                            try {
o259[o1060 + 24 >> 2] = o23;
}catch(e){}
                            try {
break
}catch(e){}
                        }
}catch(e){}
                    }
}catch(e){}
                } while (0);
}catch(e){}
}catch(e){}
                try {
if (o227 >>> 0 < 16) {
                    try {
o34 = o227 + o1059 | 0;
}catch(e){}
                    try {
o259[o887 + 4 >> 2] = o34 | 3;
}catch(e){}
                    try {
o1060 = o66 + (o34 + 4) | 0;
}catch(e){}
                    try {
o259[o1060 >> 2] = o259[o1060 >> 2] | 1
}catch(e){}
                } else {
                    try {
o259[o887 + 4 >> 2] = o1059 | 3;
}catch(e){}
                    try {
o259[o66 + (o1059 | 4) >> 2] = o227 | 1;
}catch(e){}
                    try {
o259[o66 + (o227 + o1059) >> 2] = o227;
}catch(e){}
                    try {
o1060 = o259[10712 >> 2] | 0;
}catch(e){}
                    try {
if ((o1060 | 0) != 0) {
                        try {
o34 = o259[10724 >> 2] | 0;
}catch(e){}
                        try {
o111 = o1060 >>> 3;
}catch(e){}
                        try {
o1060 = o111 << 1;
}catch(e){}
                        try {
o750 = 10744 + (o1060 << 2) | 0;
}catch(e){}
                        try {
o189 = o259[2676] | 0;
}catch(e){}
                        try {
o1065 = 1 << o111;
}catch(e){}
                        try {
do {
                            try {
if ((o189 & o1065 | 0) == 0) {
                                try {
o259[2676] = o189 | o1065;
}catch(e){}
                                try {
o1069 = 10744 + (o1060 + 2 << 2) | 0;
}catch(e){}
                                try {
o1070 = o750
}catch(e){}
                            } else {
                                try {
o111 = 10744 + (o1060 + 2 << 2) | 0;
}catch(e){}
                                try {
o1062 = o259[o111 >> 2] | 0;
}catch(e){}
                                try {
if (!(o1062 >>> 0 < (o259[10720 >> 2] | 0) >>> 0)) {
                                    try {
o1069 = o111;
}catch(e){}
                                    try {
o1070 = o1062;
}catch(e){}
                                    try {
break
}catch(e){}
                                }
}catch(e){}
                                try {
o1102()
}catch(e){}
                            }
}catch(e){}
                        } while (0);
}catch(e){}
                        try {
o259[o1069 >> 2] = o34;
}catch(e){}
                        try {
o259[o1070 + 12 >> 2] = o34;
}catch(e){}
                        try {
o259[o34 + 8 >> 2] = o1070;
}catch(e){}
                        try {
o259[o34 + 12 >> 2] = o750
}catch(e){}
                    }
}catch(e){}
                    try {
o259[10712 >> 2] = o227;
}catch(e){}
                    try {
o259[10724 >> 2] = o1063
}catch(e){}
                }
}catch(e){}
                try {
o602 = o887 + 8 | 0;
}catch(e){}
                try {
o82 = o308;
}catch(e){}
                try {
return o602 | 0
}catch(e){}
            } else {
                try {
if (o247 >>> 0 > 4294967231) {
                    try {
o1064 = -1;
}catch(e){}
                    try {
break
}catch(e){}
                }
}catch(e){}
                try {
o1060 = o247 + 11 | 0;
}catch(e){}
                try {
o1065 = o1060 & -8;
}catch(e){}
                try {
o189 = o259[10708 >> 2] | 0;
}catch(e){}
                try {
if ((o189 | 0) == 0) {
                    try {
o1064 = o1065;
}catch(e){}
                    try {
break
}catch(e){}
                }
}catch(e){}
                try {
o66 = 0 - o1065 | 0;
}catch(e){}
                try {
o1062 = o1060 >>> 8;
}catch(e){}
                try {
do {
                    try {
if ((o1062 | 0) == 0) {
                        try {
o1071 = 0
}catch(e){}
                    } else {
                        try {
if (o1065 >>> 0 > 16777215) {
                            try {
o1071 = 31;
}catch(e){}
                            try {
break
}catch(e){}
                        }
}catch(e){}
                        try {
o1060 = (o1062 + 1048320 | 0) >>> 16 & 8;
}catch(e){}
                        try {
o111 = o1062 << o1060;
}catch(e){}
                        try {
o1061 = (o111 + 520192 | 0) >>> 16 & 4;
}catch(e){}
                        try {
o65 = o111 << o1061;
}catch(e){}
                        try {
o111 = (o65 + 245760 | 0) >>> 16 & 2;
}catch(e){}
                        try {
o1072 = 14 - (o1061 | o1060 | o111) + (o65 << o111 >>> 15) | 0;
}catch(e){}
                        try {
o1071 = o1065 >>> (o1072 + 7 | 0) & 1 | o1072 << 1
}catch(e){}
                    }
}catch(e){}
                } while (0);
}catch(e){}
                try {
o1062 = o259[11008 + (o1071 << 2) >> 2] | 0;
}catch(e){}
                try {
o308: try {
do {
                    try {
if ((o1062 | 0) == 0) {
                        try {
o1073 = o66;
}catch(e){}
                        try {
o1074 = 0;
}catch(e){}
                        try {
o1075 = 0
}catch(e){}
                    } else {
                        try {
if ((o1071 | 0) == 31) {
                            try {
o1076 = 0
}catch(e){}
                        } else {
                            try {
o1076 = 25 - (o1071 >>> 1) | 0
}catch(e){}
                        }
}catch(e){}
                        try {
o887 = o66;
}catch(e){}
                        try {
o1063 = 0;
}catch(e){}
                        try {
o227 = o1065 << o1076;
}catch(e){}
                        try {
o750 = o1062;
}catch(e){}
                        try {
o34 = 0;
}catch(e){}
                        try {
while (1) {
                            try {
o1072 = o259[o750 + 4 >> 2] & -8;
}catch(e){}
                            try {
o111 = o1072 - o1065 | 0;
}catch(e){}
                            try {
if (o111 >>> 0 < o887 >>> 0) {
                                try {
if ((o1072 | 0) == (o1065 | 0)) {
                                    try {
o1073 = o111;
}catch(e){}
                                    try {
o1074 = o750;
}catch(e){}
                                    try {
o1075 = o750;
}catch(e){}
                                    try {
break o308
}catch(e){}
                                } else {
                                    try {
o1077 = o111;
}catch(e){}
                                    try {
o1078 = o750
}catch(e){}
                                }
}catch(e){}
                            } else {
                                try {
o1077 = o887;
}catch(e){}
                                try {
o1078 = o34
}catch(e){}
                            }
}catch(e){}
                            try {
o111 = o259[o750 + 20 >> 2] | 0;
}catch(e){}
                            try {
o1072 = o259[o750 + (o227 >>> 31 << 2) + 16 >> 2] | 0;
}catch(e){}
                            try {
o65 = (o111 | 0) == 0 | (o111 | 0) == (o1072 | 0) ? o1063 : o111;
}catch(e){}
                            try {
if ((o1072 | 0) == 0) {
                                try {
o1073 = o1077;
}catch(e){}
                                try {
o1074 = o65;
}catch(e){}
                                try {
o1075 = o1078;
}catch(e){}
                                try {
break
}catch(e){}
                            } else {
                                try {
o887 = o1077;
}catch(e){}
                                try {
o1063 = o65;
}catch(e){}
                                try {
o227 = o227 << 1;
}catch(e){}
                                try {
o750 = o1072;
}catch(e){}
                                try {
o34 = o1078
}catch(e){}
                            }
}catch(e){}
                        }
}catch(e){}
                    }
}catch(e){}
                } while (0);
}catch(e){}
}catch(e){}
                try {
if ((o1074 | 0) == 0 & (o1075 | 0) == 0) {
                    try {
o1062 = 2 << o1071;
}catch(e){}
                    try {
o66 = o189 & (o1062 | 0 - o1062);
}catch(e){}
                    try {
if ((o66 | 0) == 0) {
                        try {
o1064 = o1065;
}catch(e){}
                        try {
break
}catch(e){}
                    }
}catch(e){}
                    try {
o1062 = (o66 & 0 - o66) + -1 | 0;
}catch(e){}
                    try {
o66 = o1062 >>> 12 & 16;
}catch(e){}
                    try {
o34 = o1062 >>> o66;
}catch(e){}
                    try {
o1062 = o34 >>> 5 & 8;
}catch(e){}
                    try {
o750 = o34 >>> o1062;
}catch(e){}
                    try {
o34 = o750 >>> 2 & 4;
}catch(e){}
                    try {
o227 = o750 >>> o34;
}catch(e){}
                    try {
o750 = o227 >>> 1 & 2;
}catch(e){}
                    try {
o1063 = o227 >>> o750;
}catch(e){}
                    try {
o227 = o1063 >>> 1 & 1;
}catch(e){}
                    try {
o1079 = o259[11008 + ((o1062 | o66 | o34 | o750 | o227) + (o1063 >>> o227) << 2) >> 2] | 0
}catch(e){}
                } else {
                    try {
o1079 = o1074
}catch(e){}
                }
}catch(e){} try {
if ((o1079 | 0) == 0) {
                    try {
o1080 = o1073;
}catch(e){}
                    try {
o1081 = o1075
}catch(e){}
                } else {
                    try {
o227 = o1073;
}catch(e){}
                    try {
o1063 = o1079;
}catch(e){}
                    try {
o750 = o1075;
}catch(e){}
                    try {
while (1) {
                        try {
o34 = (o259[o1063 + 4 >> 2] & -8) - o1065 | 0;
}catch(e){}
                        try {
o66 = o34 >>> 0 < o227 >>> 0;
}catch(e){}
                        try {
o1062 = o66 ? o34 : o227;
}catch(e){}
                        try {
o34 = o66 ? o1063 : o750;
}catch(e){}
                        try {
o66 = o259[o1063 + 16 >> 2] | 0;
}catch(e){}
                        try {
if ((o66 | 0) != 0) {
                            try {
o1082 = o34;
}catch(e){}
                            try {
o1083 = o1062;
}catch(e){}
                            try {
o750 = o1082;
}catch(e){}
                            try {
o1063 = o66;
}catch(e){}
                            try {
o227 = o1083;
}catch(e){}
                            try {
continue
}catch(e){}
                        }
}catch(e){}
                        try {
o66 = o259[o1063 + 20 >> 2] | 0;
}catch(e){}
                        try {
if ((o66 | 0) == 0) {
                            try {
o1080 = o1062;
}catch(e){}
                            try {
o1081 = o34;
}catch(e){}
                            try {
break
}catch(e){}
                        } else {
                            try {
o1082 = o34;
}catch(e){}
                            try {
o1083 = o1062;
}catch(e){}
                            try {
o1063 = o66;
}catch(e){}
                            try {
o750 = o1082;
}catch(e){}
                            try {
o227 = o1083
}catch(e){}
                        }
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){} try {
if ((o1081 | 0) == 0) {
                    try {
o1064 = o1065;
}catch(e){}
                    try {
break
}catch(e){}
                }
}catch(e){}
                try {
if (!(o1080 >>> 0 < ((o259[10712 >> 2] | 0) - o1065 | 0) >>> 0)) {
                    try {
o1064 = o1065;
}catch(e){}
                    try {
break
}catch(e){}
                }
}catch(e){}
                try {
o227 = o1081;
}catch(e){}
                try {
o750 = o259[10720 >> 2] | 0;
}catch(e){}
                try {
if (o227 >>> 0 < o750 >>> 0) {
                    try {
o1102()
}catch(e){}
                }
}catch(e){}
                try {
o1063 = o227 + o1065 | 0;
}catch(e){}
                try {
o189 = o1063;
}catch(e){}
                try {
if (!(o227 >>> 0 < o1063 >>> 0)) {
                    try {
o1102()
}catch(e){}
                }
}catch(e){}
                try {
o66 = o259[o1081 + 24 >> 2] | 0;
}catch(e){}
                try {
o1062 = o259[o1081 + 12 >> 2] | 0;
}catch(e){}
                try {
do {
                    try {
if ((o1062 | 0) == (o1081 | 0)) {
                        try {
o34 = o1081 + 20 | 0;
}catch(e){}
                        try {
o887 = o259[o34 >> 2] | 0;
}catch(e){}
                        try {
if ((o887 | 0) == 0) {
                            try {
o1072 = o1081 + 16 | 0;
}catch(e){}
                            try {
o65 = o259[o1072 >> 2] | 0;
}catch(e){}
                            try {
if ((o65 | 0) == 0) {
                                try {
o1084 = 0;
}catch(e){}
                                try {
break
}catch(e){}
                            } else {
                                try {
o1085 = o65;
}catch(e){}
                                try {
o1086 = o1072
}catch(e){}
                            }
}catch(e){}
                        } else {
                            try {
o1085 = o887;
}catch(e){}
                            try {
o1086 = o34
}catch(e){}
                        }
}catch(e){}
                        try {
while (1) {
                            try {
o34 = o1085 + 20 | 0;
}catch(e){}
                            try {
o887 = o259[o34 >> 2] | 0;
}catch(e){}
                            try {
if ((o887 | 0) != 0) {
                                try {
o1086 = o34;
}catch(e){}
                                try {
o1085 = o887;
}catch(e){}
                                try {
continue
}catch(e){}
                            }
}catch(e){}
                            try {
o887 = o1085 + 16 | 0;
}catch(e){}
                            try {
o34 = o259[o887 >> 2] | 0;
}catch(e){}
                            try {
if ((o34 | 0) == 0) {
                                try {
break
}catch(e){}
                            } else {
                                try {
o1085 = o34;
}catch(e){}
                                try {
o1086 = o887
}catch(e){}
                            }
}catch(e){}
                        }
}catch(e){}
                        try {
if (o1086 >>> 0 < o750 >>> 0) {
                            try {
o1102()
}catch(e){}
                        } else {
                            try {
o259[o1086 >> 2] = 0;
}catch(e){}
                            try {
o1084 = o1085;
}catch(e){}
                            try {
break
}catch(e){}
                        }
}catch(e){}
                    } else {
                        try {
o887 = o259[o1081 + 8 >> 2] | 0;
}catch(e){}
                        try {
if (o887 >>> 0 < o750 >>> 0) {
                            try {
o1102()
}catch(e){}
                        }
}catch(e){}
                        try {
o34 = o887 + 12 | 0;
}catch(e){}
                        try {
if ((o259[o34 >> 2] | 0) != (o1081 | 0)) {
                            try {
o1102()
}catch(e){}
                        }
}catch(e){}
                        try {
o1072 = o1062 + 8 | 0;
}catch(e){}
                        try {
if ((o259[o1072 >> 2] | 0) == (o1081 | 0)) {
                            try {
o259[o34 >> 2] = o1062;
}catch(e){}
                            try {
o259[o1072 >> 2] = o887;
}catch(e){}
                            try {
o1084 = o1062;
}catch(e){}
                            try {
break
}catch(e){}
                        } else {
                            try {
o1102()
}catch(e){}
                        }
}catch(e){}
                    }
}catch(e){}
                } while (0);
}catch(e){}
                try {
o259: try {
do {
                    try {
if ((o66 | 0) != 0) {
                        try {
o1062 = o259[o1081 + 28 >> 2] | 0;
}catch(e){}
                        try {
o750 = 11008 + (o1062 << 2) | 0;
}catch(e){}
                        try {
do {
                            try {
if ((o1081 | 0) == (o259[o750 >> 2] | 0)) {
                                try {
o259[o750 >> 2] = o1084;
}catch(e){}
                                try {
if ((o1084 | 0) != 0) {
                                    try {
break
}catch(e){}
                                }
}catch(e){}
                                try {
o259[10708 >> 2] = o259[10708 >> 2] & ~(1 << o1062);
}catch(e){}
                                try {
break o259
}catch(e){}
                            } else {
                                try {
if (o66 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                                    try {
o1102()
}catch(e){}
                                }
}catch(e){}
                                try {
o887 = o66 + 16 | 0;
}catch(e){}
                                try {
if ((o259[o887 >> 2] | 0) == (o1081 | 0)) {
                                    try {
o259[o887 >> 2] = o1084
}catch(e){}
                                } else {
                                    try {
o259[o66 + 20 >> 2] = o1084
}catch(e){}
                                }
}catch(e){} try {
if ((o1084 | 0) == 0) {
                                    try {
break o259
}catch(e){}
                                }
}catch(e){}
                            }
}catch(e){}
                        } while (0);
}catch(e){}
                        try {
if (o1084 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                            try {
o1102()
}catch(e){}
                        }
}catch(e){}
                        try {
o259[o1084 + 24 >> 2] = o66;
}catch(e){}
                        try {
o1062 = o259[o1081 + 16 >> 2] | 0;
}catch(e){}
                        try {
do {
                            try {
if ((o1062 | 0) != 0) {
                                try {
if (o1062 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                                    try {
o1102()
}catch(e){}
                                } else {
                                    try {
o259[o1084 + 16 >> 2] = o1062;
}catch(e){}
                                    try {
o259[o1062 + 24 >> 2] = o1084;
}catch(e){}
                                    try {
break
}catch(e){}
                                }
}catch(e){}
                            }
}catch(e){}
                        } while (0);
}catch(e){}
                        try {
o1062 = o259[o1081 + 20 >> 2] | 0;
}catch(e){}
                        try {
if ((o1062 | 0) == 0) {
                            try {
break
}catch(e){}
                        }
}catch(e){}
                        try {
if (o1062 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                            try {
o1102()
}catch(e){}
                        } else {
                            try {
o259[o1084 + 20 >> 2] = o1062;
}catch(e){}
                            try {
o259[o1062 + 24 >> 2] = o1084;
}catch(e){}
                            try {
break
}catch(e){}
                        }
}catch(e){}
                    }
}catch(e){}
                } while (0);
}catch(e){}
}catch(e){}
                try {
o1059: try {
do {
                    try {
if (o1080 >>> 0 < 16) {
                        try {
o66 = o1080 + o1065 | 0;
}catch(e){}
                        try {
o259[o1081 + 4 >> 2] = o66 | 3;
}catch(e){}
                        try {
o1062 = o227 + (o66 + 4) | 0;
}catch(e){}
                        try {
o259[o1062 >> 2] = o259[o1062 >> 2] | 1
}catch(e){}
                    } else {
                        try {
o259[o1081 + 4 >> 2] = o1065 | 3;
}catch(e){}
                        try {
o259[o227 + (o1065 | 4) >> 2] = o1080 | 1;
}catch(e){}
                        try {
o259[o227 + (o1080 + o1065) >> 2] = o1080;
}catch(e){}
                        try {
o1062 = o1080 >>> 3;
}catch(e){}
                        try {
if (o1080 >>> 0 < 256) {
                            try {
o66 = o1062 << 1;
}catch(e){}
                            try {
o750 = 10744 + (o66 << 2) | 0;
}catch(e){}
                            try {
o887 = o259[2676] | 0;
}catch(e){}
                            try {
o1072 = 1 << o1062;
}catch(e){}
                            try {
do {
                                try {
if ((o887 & o1072 | 0) == 0) {
                                    try {
o259[2676] = o887 | o1072;
}catch(e){}
                                    try {
o1087 = 10744 + (o66 + 2 << 2) | 0;
}catch(e){}
                                    try {
o1088 = o750
}catch(e){}
                                } else {
                                    try {
o1062 = 10744 + (o66 + 2 << 2) | 0;
}catch(e){}
                                    try {
o34 = o259[o1062 >> 2] | 0;
}catch(e){}
                                    try {
if (!(o34 >>> 0 < (o259[10720 >> 2] | 0) >>> 0)) {
                                        try {
o1087 = o1062;
}catch(e){}
                                        try {
o1088 = o34;
}catch(e){}
                                        try {
break
}catch(e){}
                                    }
}catch(e){}
                                    try {
o1102()
}catch(e){}
                                }
}catch(e){}
                            } while (0);
}catch(e){}
                            try {
o259[o1087 >> 2] = o189;
}catch(e){}
                            try {
o259[o1088 + 12 >> 2] = o189;
}catch(e){}
                            try {
o259[o227 + (o1065 + 8) >> 2] = o1088;
}catch(e){}
                            try {
o259[o227 + (o1065 + 12) >> 2] = o750;
}catch(e){}
                            try {
break
}catch(e){}
                        }
}catch(e){}
                        try {
o66 = o1063;
}catch(e){}
                        try {
o1072 = o1080 >>> 8;
}catch(e){}
                        try {
do {
                            try {
if ((o1072 | 0) == 0) {
                                try {
o1089 = 0
}catch(e){}
                            } else {
                                try {
if (o1080 >>> 0 > 16777215) {
                                    try {
o1089 = 31;
}catch(e){}
                                    try {
break
}catch(e){}
                                }
}catch(e){}
                                try {
o887 = (o1072 + 1048320 | 0) >>> 16 & 8;
}catch(e){}
                                try {
o34 = o1072 << o887;
}catch(e){}
                                try {
o1062 = (o34 + 520192 | 0) >>> 16 & 4;
}catch(e){}
                                try {
o65 = o34 << o1062;
}catch(e){}
                                try {
o34 = (o65 + 245760 | 0) >>> 16 & 2;
}catch(e){}
                                try {
o111 = 14 - (o1062 | o887 | o34) + (o65 << o34 >>> 15) | 0;
}catch(e){}
                                try {
o1089 = o1080 >>> (o111 + 7 | 0) & 1 | o111 << 1
}catch(e){}
                            }
}catch(e){}
                        } while (0);
}catch(e){}
                        try {
o1072 = 11008 + (o1089 << 2) | 0;
}catch(e){}
                        try {
o259[o227 + (o1065 + 28) >> 2] = o1089;
}catch(e){}
                        try {
o259[o227 + (o1065 + 20) >> 2] = 0;
}catch(e){}
                        try {
o259[o227 + (o1065 + 16) >> 2] = 0;
}catch(e){}
                        try {
o750 = o259[10708 >> 2] | 0;
}catch(e){}
                        try {
o111 = 1 << o1089;
}catch(e){}
                        try {
if ((o750 & o111 | 0) == 0) {
                            try {
o259[10708 >> 2] = o750 | o111;
}catch(e){}
                            try {
o259[o1072 >> 2] = o66;
}catch(e){}
                            try {
o259[o227 + (o1065 + 24) >> 2] = o1072;
}catch(e){}
                            try {
o259[o227 + (o1065 + 12) >> 2] = o66;
}catch(e){}
                            try {
o259[o227 + (o1065 + 8) >> 2] = o66;
}catch(e){}
                            try {
break
}catch(e){}
                        }
}catch(e){}
                        try {
o111 = o259[o1072 >> 2] | 0;
}catch(e){}
                        try {
if ((o1089 | 0) == 31) {
                            try {
o1090 = 0
}catch(e){}
                        } else {
                            try {
o1090 = 25 - (o1089 >>> 1) | 0
}catch(e){}
                        }
}catch(e){}
                        try {
o189: try {
do {
                            try {
if ((o259[o111 + 4 >> 2] & -8 | 0) == (o1080 | 0)) {
                                try {
o1091 = o111
}catch(e){}
                            } else {
                                try {
o1072 = o1080 << o1090;
}catch(e){}
                                try {
o750 = o111;
}catch(e){}
                                try {
while (1) {
                                    try {
o1092 = o750 + (o1072 >>> 31 << 2) + 16 | 0;
}catch(e){}
                                    try {
o34 = o259[o1092 >> 2] | 0;
}catch(e){}
                                    try {
if ((o34 | 0) == 0) {
                                        try {
break
}catch(e){}
                                    }
}catch(e){}
                                    try {
if ((o259[o34 + 4 >> 2] & -8 | 0) == (o1080 | 0)) {
                                        try {
o1091 = o34;
}catch(e){}
                                        try {
break o189
}catch(e){}
                                    } else {
                                        try {
o1072 = o1072 << 1;
}catch(e){}
                                        try {
o750 = o34
}catch(e){}
                                    }
}catch(e){}
                                }
}catch(e){}
                                try {
if (o1092 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                                    try {
o1102()
}catch(e){}
                                } else {
                                    try {
o259[o1092 >> 2] = o66;
}catch(e){}
                                    try {
o259[o227 + (o1065 + 24) >> 2] = o750;
}catch(e){}
                                    try {
o259[o227 + (o1065 + 12) >> 2] = o66;
}catch(e){}
                                    try {
o259[o227 + (o1065 + 8) >> 2] = o66;
}catch(e){}
                                    try {
break o1059
}catch(e){}
                                }
}catch(e){}
                            }
}catch(e){}
                        } while (0);
}catch(e){}
}catch(e){}
                        try {
o111 = o1091 + 8 | 0;
}catch(e){}
                        try {
o1072 = o259[o111 >> 2] | 0;
}catch(e){}
                        try {
o34 = o259[10720 >> 2] | 0;
}catch(e){}
                        try {
if (o1091 >>> 0 < o34 >>> 0) {
                            try {
o1102()
}catch(e){}
                        }
}catch(e){}
                        try {
if (o1072 >>> 0 < o34 >>> 0) {
                            try {
o1102()
}catch(e){}
                        } else {
                            try {
o259[o1072 + 12 >> 2] = o66;
}catch(e){}
                            try {
o259[o111 >> 2] = o66;
}catch(e){}
                            try {
o259[o227 + (o1065 + 8) >> 2] = o1072;
}catch(e){}
                            try {
o259[o227 + (o1065 + 12) >> 2] = o1091;
}catch(e){}
                            try {
o259[o227 + (o1065 + 24) >> 2] = 0;
}catch(e){}
                            try {
break
}catch(e){}
                        }
}catch(e){}
                    }
}catch(e){}
                } while (0);
}catch(e){}
}catch(e){}
                try {
o602 = o1081 + 8 | 0;
}catch(e){}
                try {
o82 = o308;
}catch(e){}
                try {
return o602 | 0
}catch(e){}
            }
}catch(e){}
        } while (0);
}catch(e){}
        try {
o1081 = o259[10712 >> 2] | 0;
}catch(e){}
        try {
if (!(o1064 >>> 0 > o1081 >>> 0)) {
            try {
o1091 = o1081 - o1064 | 0;
}catch(e){}
            try {
o1092 = o259[10724 >> 2] | 0;
}catch(e){}
            try {
if (o1091 >>> 0 > 15) {
                try {
o1080 = o1092;
}catch(e){}
                try {
o259[10724 >> 2] = o1080 + o1064;
}catch(e){}
                try {
o259[10712 >> 2] = o1091;
}catch(e){}
                try {
o259[o1080 + (o1064 + 4) >> 2] = o1091 | 1;
}catch(e){}
                try {
o259[o1080 + o1081 >> 2] = o1091;
}catch(e){}
                try {
o259[o1092 + 4 >> 2] = o1064 | 3
}catch(e){}
            } else {
                try {
o259[10712 >> 2] = 0;
}catch(e){}
                try {
o259[10724 >> 2] = 0;
}catch(e){}
                try {
o259[o1092 + 4 >> 2] = o1081 | 3;
}catch(e){}
                try {
o1091 = o1092 + (o1081 + 4) | 0;
}catch(e){}
                try {
o259[o1091 >> 2] = o259[o1091 >> 2] | 1
}catch(e){}
            }
}catch(e){}
            try {
o602 = o1092 + 8 | 0;
}catch(e){}
            try {
o82 = o308;
}catch(e){}
            try {
return o602 | 0
}catch(e){}
        }
}catch(e){}
        try {
o1092 = o259[10716 >> 2] | 0;
}catch(e){}
        try {
if (o1064 >>> 0 < o1092 >>> 0) {
            try {
o1091 = o1092 - o1064 | 0;
}catch(e){}
            try {
o259[10716 >> 2] = o1091;
}catch(e){}
            try {
o1092 = o259[10728 >> 2] | 0;
}catch(e){}
            try {
o1081 = o1092;
}catch(e){}
            try {
o259[10728 >> 2] = o1081 + o1064;
}catch(e){}
            try {
o259[o1081 + (o1064 + 4) >> 2] = o1091 | 1;
}catch(e){}
            try {
o259[o1092 + 4 >> 2] = o1064 | 3;
}catch(e){}
            try {
o602 = o1092 + 8 | 0;
}catch(e){}
            try {
o82 = o308;
}catch(e){}
            try {
return o602 | 0
}catch(e){}
        }
}catch(e){}
        try {
do {
            try {
if ((o259[2794] | 0) == 0) {
                try {
o1092 = o1107(30) | 0;
}catch(e){}
                try {
if ((o1092 + -1 & o1092 | 0) == 0) {
                    try {
o259[11184 >> 2] = o1092;
}catch(e){}
                    try {
o259[11180 >> 2] = o1092;
}catch(e){}
                    try {
o259[11188 >> 2] = -1;
}catch(e){}
                    try {
o259[11192 >> 2] = -1;
}catch(e){}
                    try {
o259[11196 >> 2] = 0;
}catch(e){}
                    try {
o259[11148 >> 2] = 0;
}catch(e){}
                    try {
o259[2794] = (o1105(0) | 0) & -16 ^ 1431655768;
}catch(e){}
                    try {
break
}catch(e){}
                } else {
                    try {
o1102()
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
        } while (0);
}catch(e){}
        try {
o1092 = o1064 + 48 | 0;
}catch(e){}
        try {
o1091 = o259[11184 >> 2] | 0;
}catch(e){}
        try {
o1081 = o1064 + 47 | 0;
}catch(e){}
        try {
o1080 = o1091 + o1081 | 0;
}catch(e){}
        try {
o1090 = 0 - o1091 | 0;
}catch(e){}
        try {
o1091 = o1080 & o1090;
}catch(e){}
        try {
if (!(o1091 >>> 0 > o1064 >>> 0)) {
            try {
o602 = 0;
}catch(e){}
            try {
o82 = o308;
}catch(e){}
            try {
return o602 | 0
}catch(e){}
        }
}catch(e){}
        try {
o1089 = o259[11144 >> 2] | 0;
}catch(e){}
        try {
do {
            try {
if ((o1089 | 0) != 0) {
                try {
o1088 = o259[11136 >> 2] | 0;
}catch(e){}
                try {
o1087 = o1088 + o1091 | 0;
}catch(e){}
                try {
if (o1087 >>> 0 <= o1088 >>> 0 | o1087 >>> 0 > o1089 >>> 0) {
                    try {
o602 = 0
}catch(e){}
                } else {
                    try {
break
}catch(e){}
                }
}catch(e){}
                try {
o82 = o308;
}catch(e){}
                try {
return o602 | 0
}catch(e){}
            }
}catch(e){}
        } while (0);
}catch(e){}
        try {
o34: try {
do {
            try {
if ((o259[11148 >> 2] & 4 | 0) == 0) {
                try {
o1089 = o259[10728 >> 2] | 0;
}catch(e){}
                try {
o1060: try {
do {
                    try {
if ((o1089 | 0) == 0) {
                        try {
o1093 = 182
}catch(e){}
                    } else {
                        try {
o1087 = o1089;
}catch(e){}
                        try {
o1088 = 11152 | 0;
}catch(e){}
                        try {
while (1) {
                            try {
o1094 = o1088;
}catch(e){}
                            try {
o1084 = o259[o1094 >> 2] | 0;
}catch(e){}
                            try {
if (!(o1084 >>> 0 > o1087 >>> 0)) {
                                try {
o1095 = o1088 + 4 | 0;
}catch(e){}
                                try {
if ((o1084 + (o259[o1095 >> 2] | 0) | 0) >>> 0 > o1087 >>> 0) {
                                    try {
break
}catch(e){}
                                }
}catch(e){}
                            }
}catch(e){}
                            try {
o1084 = o259[o1088 + 8 >> 2] | 0;
}catch(e){}
                            try {
if ((o1084 | 0) == 0) {
                                try {
o1093 = 182;
}catch(e){}
                                try {
break o1060
}catch(e){}
                            } else {
                                try {
o1088 = o1084
}catch(e){}
                            }
}catch(e){}
                        }
}catch(e){}
                        try {
if ((o1088 | 0) == 0) {
                            try {
o1093 = 182;
}catch(e){}
                            try {
break
}catch(e){}
                        }
}catch(e){}
                        try {
o1087 = o1080 - (o259[10716 >> 2] | 0) & o1090;
}catch(e){}
                        try {
if (!(o1087 >>> 0 < 2147483647)) {
                            try {
o1096 = 0;
}catch(e){}
                            try {
break
}catch(e){}
                        }
}catch(e){}
                        try {
o66 = o1104(o1087 | 0) | 0;
}catch(e){}
                        try {
o1084 = (o66 | 0) == ((o259[o1094 >> 2] | 0) + (o259[o1095 >> 2] | 0) | 0);
}catch(e){}
                        try {
o1097 = o66;
}catch(e){}
                        try {
o1098 = o1087;
}catch(e){}
                        try {
o1099 = o1084 ? o66 : -1;
}catch(e){}
                        try {
o1100 = o1084 ? o1087 : 0;
}catch(e){}
                        try {
o1093 = 191
}catch(e){}
                    }
}catch(e){}
                } while (0);
}catch(e){}
}catch(e){}
                try {
do {
                    try {
if ((o1093 | 0) == 182) {
                        try {
o1089 = o1104(0) | 0;
}catch(e){}
                        try {
if ((o1089 | 0) == (-1 | 0)) {
                            try {
o1096 = 0;
}catch(e){}
                            try {
break
}catch(e){}
                        }
}catch(e){}
                        try {
o1087 = o1089;
}catch(e){}
                        try {
o1084 = o259[11180 >> 2] | 0;
}catch(e){}
                        try {
o66 = o1084 + -1 | 0;
}catch(e){}
                        try {
if ((o66 & o1087 | 0) == 0) {
                            try {
o1101 = o1091
}catch(e){}
                        } else {
                            try {
o1101 = o1091 - o1087 + (o66 + o1087 & 0 - o1084) | 0
}catch(e){}
                        }
}catch(e){}
                        try {
o1084 = o259[11136 >> 2] | 0;
}catch(e){}
                        try {
o1087 = o1084 + o1101 | 0;
}catch(e){}
                        try {
if (!(o1101 >>> 0 > o1064 >>> 0 & o1101 >>> 0 < 2147483647)) {
                            try {
o1096 = 0;
}catch(e){}
                            try {
break
}catch(e){}
                        }
}catch(e){}
                        try {
o66 = o259[11144 >> 2] | 0;
}catch(e){}
                        try {
if ((o66 | 0) != 0) {
                            try {
if (o1087 >>> 0 <= o1084 >>> 0 | o1087 >>> 0 > o66 >>> 0) {
                                try {
o1096 = 0;
}catch(e){}
                                try {
break
}catch(e){}
                            }
}catch(e){}
                        }
}catch(e){}
                        try {
o66 = o1104(o1101 | 0) | 0;
}catch(e){}
                        try {
o1087 = (o66 | 0) == (o1089 | 0);
}catch(e){}
                        try {
o1097 = o66;
}catch(e){}
                        try {
o1098 = o1101;
}catch(e){}
                        try {
o1099 = o1087 ? o1089 : -1;
}catch(e){}
                        try {
o1100 = o1087 ? o1101 : 0;
}catch(e){}
                        try {
o1093 = 191
}catch(e){}
                    }
}catch(e){}
                } while (0);
}catch(e){}
                try {
o66: try {
do {
                    try {
if ((o1093 | 0) == 191) {
                        try {
o1087 = 0 - o1098 | 0;
}catch(e){}
                        try {
if ((o1099 | 0) != (-1 | 0)) {
                            try {
o1103 = o1099;
}catch(e){}
                            try {
o1106 = o1100;
}catch(e){}
                            try {
o1093 = 202;
}catch(e){}
                            try {
break o34
}catch(e){}
                        }
}catch(e){}
                        try {
do {
                            try {
if ((o1097 | 0) != (-1 | 0) & o1098 >>> 0 < 2147483647 & o1098 >>> 0 < o1092 >>> 0) {
                                try {
o1089 = o259[11184 >> 2] | 0;
}catch(e){}
                                try {
o66 = o1081 - o1098 + o1089 & 0 - o1089;
}catch(e){}
                                try {
if (!(o66 >>> 0 < 2147483647)) {
                                    try {
o747 = o1098;
}catch(e){}
                                    try {
break
}catch(e){}
                                }
}catch(e){}
                                try {
if ((o1104(o66 | 0) | 0) == (-1 | 0)) {
                                    try {
o1104(o1087 | 0) | 0;
}catch(e){}
                                    try {
o1096 = o1100;
}catch(e){}
                                    try {
break o66
}catch(e){}
                                } else {
                                    try {
o747 = o66 + o1098 | 0;
}catch(e){}
                                    try {
break
}catch(e){}
                                }
}catch(e){}
                            } else {
                                try {
o747 = o1098
}catch(e){}
                            }
}catch(e){}
                        } while (0);
}catch(e){}
                        try {
if ((o1097 | 0) == (-1 | 0)) {
                            try {
o1096 = o1100
}catch(e){}
                        } else {
                            try {
o1103 = o1097;
}catch(e){}
                            try {
o1106 = o747;
}catch(e){}
                            try {
o1093 = 202;
}catch(e){}
                            try {
break o34
}catch(e){}
                        }
}catch(e){}
                    }
}catch(e){}
                } while (0);
}catch(e){}
}catch(e){}
                try {
o259[11148 >> 2] = o259[11148 >> 2] | 4;
}catch(e){}
                try {
o1109 = o1096;
}catch(e){}
                try {
o1093 = 199
}catch(e){}
            } else {
                try {
o1109 = 0;
}catch(e){}
                try {
o1093 = 199
}catch(e){}
            }
}catch(e){}
        } while (0);
}catch(e){}
}catch(e){}
        try {
do {
            try {
if ((o1093 | 0) == 199) {
                try {
if (!(o1091 >>> 0 < 2147483647)) {
                    try {
break
}catch(e){}
                }
}catch(e){}
                try {
o1096 = o1104(o1091 | 0) | 0;
}catch(e){}
                try {
o747 = o1104(0) | 0;
}catch(e){}
                try {
if (!((o747 | 0) != (-1 | 0) & (o1096 | 0) != (-1 | 0) & o1096 >>> 0 < o747 >>> 0)) {
                    try {
break
}catch(e){}
                }
}catch(e){}
                try {
o1097 = o747 - o1096 | 0;
}catch(e){}
                try {
o747 = o1097 >>> 0 > (o1064 + 40 | 0) >>> 0;
}catch(e){}
                try {
if (o747) {
                    try {
o1103 = o1096;
}catch(e){}
                    try {
o1106 = o747 ? o1097 : o1109;
}catch(e){}
                    try {
o1093 = 202
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
        } while (0);
}catch(e){}
        try {
do {
            try {
if ((o1093 | 0) == 202) {
                try {
o1109 = (o259[11136 >> 2] | 0) + o1106 | 0;
}catch(e){}
                try {
o259[11136 >> 2] = o1109;
}catch(e){}
                try {
if (o1109 >>> 0 > (o259[11140 >> 2] | 0) >>> 0) {
                    try {
o259[11140 >> 2] = o1109
}catch(e){}
                }
}catch(e){}
                try {
o1109 = o259[10728 >> 2] | 0;
}catch(e){}
                try {
o82: try {
do {
                    try {
if ((o1109 | 0) == 0) {
                        try {
o1091 = o259[10720 >> 2] | 0;
}catch(e){}
                        try {
if ((o1091 | 0) == 0 | o1103 >>> 0 < o1091 >>> 0) {
                            try {
o259[10720 >> 2] = o1103
}catch(e){}
                        }
}catch(e){}
                        try {
o259[11152 >> 2] = o1103;
}catch(e){}
                        try {
o259[11156 >> 2] = o1106;
}catch(e){}
                        try {
o259[11164 >> 2] = 0;
}catch(e){}
                        try {
o259[10740 >> 2] = o259[2794];
}catch(e){}
                        try {
o259[10736 >> 2] = -1;
}catch(e){}
                        try {
o1091 = 0;
}catch(e){}
                        try {
do {
                            try {
o1097 = o1091 << 1;
}catch(e){}
                            try {
o747 = 10744 + (o1097 << 2) | 0;
}catch(e){}
                            try {
o259[10744 + (o1097 + 3 << 2) >> 2] = o747;
}catch(e){}
                            try {
o259[10744 + (o1097 + 2 << 2) >> 2] = o747;
}catch(e){}
                            try {
o1091 = o1091 + 1 | 0;
}catch(e){}
                        } while ((o1091 | 0) != 32);
}catch(e){}
                        try {
o1091 = o1103 + 8 | 0;
}catch(e){}
                        try {
if ((o1091 & 7 | 0) == 0) {
                            try {
o1110 = 0
}catch(e){}
                        } else {
                            try {
o1110 = 0 - o1091 & 7
}catch(e){}
                        }
}catch(e){}
                        try {
o1091 = o1106 + -40 - o1110 | 0;
}catch(e){}
                        try {
o259[10728 >> 2] = o1103 + o1110;
}catch(e){}
                        try {
o259[10716 >> 2] = o1091;
}catch(e){}
                        try {
o259[o1103 + (o1110 + 4) >> 2] = o1091 | 1;
}catch(e){}
                        try {
o259[o1103 + (o1106 + -36) >> 2] = 40;
}catch(e){}
                        try {
o259[10732 >> 2] = o259[11192 >> 2]
}catch(e){}
                    } else {
                        try {
o1091 = 11152 | 0;
}catch(e){}
                        try {
while (1) {
                            try {
o1111 = o259[o1091 >> 2] | 0;
}catch(e){}
                            try {
o1112 = o1091 + 4 | 0;
}catch(e){}
                            try {
o1113 = o259[o1112 >> 2] | 0;
}catch(e){}
                            try {
if ((o1103 | 0) == (o1111 + o1113 | 0)) {
                                try {
o1093 = 214;
}catch(e){}
                                try {
break
}catch(e){}
                            }
}catch(e){}
                            try {
o747 = o259[o1091 + 8 >> 2] | 0;
}catch(e){}
                            try {
if ((o747 | 0) == 0) {
                                try {
break
}catch(e){}
                            } else {
                                try {
o1091 = o747
}catch(e){}
                            }
}catch(e){}
                        }
}catch(e){}
                        try {
do {
                            try {
if ((o1093 | 0) == 214) {
                                try {
if ((o259[o1091 + 12 >> 2] & 8 | 0) != 0) {
                                    try {
break
}catch(e){}
                                }
}catch(e){}
                                try {
o747 = o1109;
}catch(e){}
                                try {
if (!(o747 >>> 0 >= o1111 >>> 0 & o747 >>> 0 < o1103 >>> 0)) {
                                    try {
break
}catch(e){}
                                }
}catch(e){}
                                try {
o259[o1112 >> 2] = o1113 + o1106;
}catch(e){}
                                try {
o1097 = (o259[10716 >> 2] | 0) + o1106 | 0;
}catch(e){}
                                try {
o1096 = o1109 + 8 | 0;
}catch(e){}
                                try {
if ((o1096 & 7 | 0) == 0) {
                                    try {
o1114 = 0
}catch(e){}
                                } else {
                                    try {
o1114 = 0 - o1096 & 7
}catch(e){}
                                }
}catch(e){}
                                try {
o1096 = o1097 - o1114 | 0;
}catch(e){}
                                try {
o259[10728 >> 2] = o747 + o1114;
}catch(e){}
                                try {
o259[10716 >> 2] = o1096;
}catch(e){}
                                try {
o259[o747 + (o1114 + 4) >> 2] = o1096 | 1;
}catch(e){}
                                try {
o259[o747 + (o1097 + 4) >> 2] = 40;
}catch(e){}
                                try {
o259[10732 >> 2] = o259[11192 >> 2];
}catch(e){}
                                try {
break o82
}catch(e){}
                            }
}catch(e){}
                        } while (0);
}catch(e){}
                        try {
if (o1103 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                            try {
o259[10720 >> 2] = o1103
}catch(e){}
                        }
}catch(e){}
                        try {
o1091 = o1103 + o1106 | 0;
}catch(e){}
                        try {
o1097 = 11152 | 0;
}catch(e){}
                        try {
while (1) {
                            try {
o1115 = o1097;
}catch(e){}
                            try {
if ((o259[o1115 >> 2] | 0) == (o1091 | 0)) {
                                try {
o1093 = 224;
}catch(e){}
                                try {
break
}catch(e){}
                            }
}catch(e){}
                            try {
o747 = o259[o1097 + 8 >> 2] | 0;
}catch(e){}
                            try {
if ((o747 | 0) == 0) {
                                try {
break
}catch(e){}
                            } else {
                                try {
o1097 = o747
}catch(e){}
                            }
}catch(e){}
                        }
}catch(e){}
                        try {
do {
                            try {
if ((o1093 | 0) == 224) {
                                try {
if ((o259[o1097 + 12 >> 2] & 8 | 0) != 0) {
                                    try {
break
}catch(e){}
                                }
}catch(e){}
                                try {
o259[o1115 >> 2] = o1103;
}catch(e){}
                                try {
o1091 = o1097 + 4 | 0;
}catch(e){}
                                try {
o259[o1091 >> 2] = (o259[o1091 >> 2] | 0) + o1106;
}catch(e){}
                                try {
o1091 = o1103 + 8 | 0;
}catch(e){}
                                try {
if ((o1091 & 7 | 0) == 0) {
                                    try {
o1116 = 0
}catch(e){}
                                } else {
                                    try {
o1116 = 0 - o1091 & 7
}catch(e){}
                                }
}catch(e){}
                                try {
o1091 = o1103 + (o1106 + 8) | 0;
}catch(e){}
                                try {
if ((o1091 & 7 | 0) == 0) {
                                    try {
o1117 = 0
}catch(e){}
                                } else {
                                    try {
o1117 = 0 - o1091 & 7
}catch(e){}
                                }
}catch(e){}
                                try {
o1091 = o1103 + (o1117 + o1106) | 0;
}catch(e){}
                                try {
o747 = o1091;
}catch(e){}
                                try {
o1096 = o1116 + o1064 | 0;
}catch(e){}
                                try {
o1100 = o1103 + o1096 | 0;
}catch(e){}
                                try {
o1098 = o1100;
}catch(e){}
                                try {
o1081 = o1091 - (o1103 + o1116) - o1064 | 0;
}catch(e){}
                                try {
o259[o1103 + (o1116 + 4) >> 2] = o1064 | 3;
}catch(e){}
                                try {
o1061: try {
do {
                                    try {
if ((o747 | 0) == (o259[10728 >> 2] | 0)) {
                                        try {
o1092 = (o259[10716 >> 2] | 0) + o1081 | 0;
}catch(e){}
                                        try {
o259[10716 >> 2] = o1092;
}catch(e){}
                                        try {
o259[10728 >> 2] = o1098;
}catch(e){}
                                        try {
o259[o1103 + (o1096 + 4) >> 2] = o1092 | 1
}catch(e){}
                                    } else {
                                        try {
if ((o747 | 0) == (o259[10724 >> 2] | 0)) {
                                            try {
o1092 = (o259[10712 >> 2] | 0) + o1081 | 0;
}catch(e){}
                                            try {
o259[10712 >> 2] = o1092;
}catch(e){}
                                            try {
o259[10724 >> 2] = o1098;
}catch(e){}
                                            try {
o259[o1103 + (o1096 + 4) >> 2] = o1092 | 1;
}catch(e){}
                                            try {
o259[o1103 + (o1092 + o1096) >> 2] = o1092;
}catch(e){}
                                            try {
break
}catch(e){}
                                        }
}catch(e){}
                                        try {
o1092 = o1106 + 4 | 0;
}catch(e){}
                                        try {
o1099 = o259[o1103 + (o1092 + o1117) >> 2] | 0;
}catch(e){}
                                        try {
if ((o1099 & 3 | 0) == 1) {
                                            try {
o1101 = o1099 & -8;
}catch(e){}
                                            try {
o1095 = o1099 >>> 3;
}catch(e){}
                                            try {
o111: try {
do {
                                                try {
if (o1099 >>> 0 < 256) {
                                                    try {
o1094 = o259[o1103 + ((o1117 | 8) + o1106) >> 2] | 0;
}catch(e){}
                                                    try {
o1090 = o259[o1103 + (o1106 + 12 + o1117) >> 2] | 0;
}catch(e){}
                                                    try {
o1080 = 10744 + (o1095 << 1 << 2) | 0;
}catch(e){}
                                                    try {
do {
                                                        try {
if ((o1094 | 0) != (o1080 | 0)) {
                                                            try {
if (o1094 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                                                                try {
o1102()
}catch(e){}
                                                            }
}catch(e){}
                                                            try {
if ((o259[o1094 + 12 >> 2] | 0) == (o747 | 0)) {
                                                                try {
break
}catch(e){}
                                                            }
}catch(e){}
                                                            try {
o1102()
}catch(e){}
                                                        }
}catch(e){}
                                                    } while (0);
}catch(e){}
                                                    try {
if ((o1090 | 0) == (o1094 | 0)) {
                                                        try {
o259[2676] = o259[2676] & ~(1 << o1095);
}catch(e){}
                                                        try {
break
}catch(e){}
                                                    }
}catch(e){}
                                                    try {
do {
                                                        try {
if ((o1090 | 0) == (o1080 | 0)) {
                                                            try {
o1118 = o1090 + 8 | 0
}catch(e){}
                                                        } else {
                                                            try {
if (o1090 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                                                                try {
o1102()
}catch(e){}
                                                            }
}catch(e){}
                                                            try {
o1087 = o1090 + 8 | 0;
}catch(e){}
                                                            try {
if ((o259[o1087 >> 2] | 0) == (o747 | 0)) {
                                                                try {
o1118 = o1087;
}catch(e){}
                                                                try {
break
}catch(e){}
                                                            }
}catch(e){}
                                                            try {
o1102()
}catch(e){}
                                                        }
}catch(e){}
                                                    } while (0);
}catch(e){}
                                                    try {
o259[o1094 + 12 >> 2] = o1090;
}catch(e){}
                                                    try {
o259[o1118 >> 2] = o1094
}catch(e){}
                                                } else {
                                                    try {
o1080 = o1091;
}catch(e){}
                                                    try {
o1087 = o259[o1103 + ((o1117 | 24) + o1106) >> 2] | 0;
}catch(e){}
                                                    try {
o1088 = o259[o1103 + (o1106 + 12 + o1117) >> 2] | 0;
}catch(e){}
                                                    try {
do {
                                                        try {
if ((o1088 | 0) == (o1080 | 0)) {
                                                            try {
o66 = o1117 | 16;
}catch(e){}
                                                            try {
o1089 = o1103 + (o1092 + o66) | 0;
}catch(e){}
                                                            try {
o1084 = o259[o1089 >> 2] | 0;
}catch(e){}
                                                            try {
if ((o1084 | 0) == 0) {
                                                                try {
o1085 = o1103 + (o66 + o1106) | 0;
}catch(e){}
                                                                try {
o66 = o259[o1085 >> 2] | 0;
}catch(e){}
                                                                try {
if ((o66 | 0) == 0) {
                                                                    try {
o1119 = 0;
}catch(e){}
                                                                    try {
break
}catch(e){}
                                                                } else {
                                                                    try {
o1120 = o66;
}catch(e){}
                                                                    try {
o1121 = o1085
}catch(e){}
                                                                }
}catch(e){}
                                                            } else {
                                                                try {
o1120 = o1084;
}catch(e){}
                                                                try {
o1121 = o1089
}catch(e){}
                                                            }
}catch(e){}
                                                            try {
while (1) {
                                                                try {
o1089 = o1120 + 20 | 0;
}catch(e){}
                                                                try {
o1084 = o259[o1089 >> 2] | 0;
}catch(e){}
                                                                try {
if ((o1084 | 0) != 0) {
                                                                    try {
o1121 = o1089;
}catch(e){}
                                                                    try {
o1120 = o1084;
}catch(e){}
                                                                    try {
continue
}catch(e){}
                                                                }
}catch(e){}
                                                                try {
o1084 = o1120 + 16 | 0;
}catch(e){}
                                                                try {
o1089 = o259[o1084 >> 2] | 0;
}catch(e){}
                                                                try {
if ((o1089 | 0) == 0) {
                                                                    try {
break
}catch(e){}
                                                                } else {
                                                                    try {
o1120 = o1089;
}catch(e){}
                                                                    try {
o1121 = o1084
}catch(e){}
                                                                }
}catch(e){}
                                                            }
}catch(e){}
                                                            try {
if (o1121 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                                                                try {
o1102()
}catch(e){}
                                                            } else {
                                                                try {
o259[o1121 >> 2] = 0;
}catch(e){}
                                                                try {
o1119 = o1120;
}catch(e){}
                                                                try {
break
}catch(e){}
                                                            }
}catch(e){}
                                                        } else {
                                                            try {
o1084 = o259[o1103 + ((o1117 | 8) + o1106) >> 2] | 0;
}catch(e){}
                                                            try {
if (o1084 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                                                                try {
o1102()
}catch(e){}
                                                            }
}catch(e){}
                                                            try {
o1089 = o1084 + 12 | 0;
}catch(e){}
                                                            try {
if ((o259[o1089 >> 2] | 0) != (o1080 | 0)) {
                                                                try {
o1102()
}catch(e){}
                                                            }
}catch(e){}
                                                            try {
o1085 = o1088 + 8 | 0;
}catch(e){}
                                                            try {
if ((o259[o1085 >> 2] | 0) == (o1080 | 0)) {
                                                                try {
o259[o1089 >> 2] = o1088;
}catch(e){}
                                                                try {
o259[o1085 >> 2] = o1084;
}catch(e){}
                                                                try {
o1119 = o1088;
}catch(e){}
                                                                try {
break
}catch(e){}
                                                            } else {
                                                                try {
o1102()
}catch(e){}
                                                            }
}catch(e){}
                                                        }
}catch(e){}
                                                    } while (0);
}catch(e){}
                                                    try {
if ((o1087 | 0) == 0) {
                                                        try {
break
}catch(e){}
                                                    }
}catch(e){}
                                                    try {
o1088 = o259[o1103 + (o1106 + 28 + o1117) >> 2] | 0;
}catch(e){}
                                                    try {
o1094 = 11008 + (o1088 << 2) | 0;
}catch(e){}
                                                    try {
do {
                                                        try {
if ((o1080 | 0) == (o259[o1094 >> 2] | 0)) {
                                                            try {
o259[o1094 >> 2] = o1119;
}catch(e){}
                                                            try {
if ((o1119 | 0) != 0) {
                                                                try {
break
}catch(e){}
                                                            }
}catch(e){}
                                                            try {
o259[10708 >> 2] = o259[10708 >> 2] & ~(1 << o1088);
}catch(e){}
                                                            try {
break o111
}catch(e){}
                                                        } else {
                                                            try {
if (o1087 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                                                                try {
o1102()
}catch(e){}
                                                            }
}catch(e){}
                                                            try {
o1090 = o1087 + 16 | 0;
}catch(e){}
                                                            try {
if ((o259[o1090 >> 2] | 0) == (o1080 | 0)) {
                                                                try {
o259[o1090 >> 2] = o1119
}catch(e){}
                                                            } else {
                                                                try {
o259[o1087 + 20 >> 2] = o1119
}catch(e){}
                                                            }
}catch(e){} try {
if ((o1119 | 0) == 0) {
                                                                try {
break o111
}catch(e){}
                                                            }
}catch(e){}
                                                        }
}catch(e){}
                                                    } while (0);
}catch(e){}
                                                    try {
if (o1119 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                                                        try {
o1102()
}catch(e){}
                                                    }
}catch(e){}
                                                    try {
o259[o1119 + 24 >> 2] = o1087;
}catch(e){}
                                                    try {
o1080 = o1117 | 16;
}catch(e){}
                                                    try {
o1088 = o259[o1103 + (o1080 + o1106) >> 2] | 0;
}catch(e){}
                                                    try {
do {
                                                        try {
if ((o1088 | 0) != 0) {
                                                            try {
if (o1088 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                                                                try {
o1102()
}catch(e){}
                                                            } else {
                                                                try {
o259[o1119 + 16 >> 2] = o1088;
}catch(e){}
                                                                try {
o259[o1088 + 24 >> 2] = o1119;
}catch(e){}
                                                                try {
break
}catch(e){}
                                                            }
}catch(e){}
                                                        }
}catch(e){}
                                                    } while (0);
}catch(e){}
                                                    try {
o1088 = o259[o1103 + (o1092 + o1080) >> 2] | 0;
}catch(e){}
                                                    try {
if ((o1088 | 0) == 0) {
                                                        try {
break
}catch(e){}
                                                    }
}catch(e){}
                                                    try {
if (o1088 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                                                        try {
o1102()
}catch(e){}
                                                    } else {
                                                        try {
o259[o1119 + 20 >> 2] = o1088;
}catch(e){}
                                                        try {
o259[o1088 + 24 >> 2] = o1119;
}catch(e){}
                                                        try {
break
}catch(e){}
                                                    }
}catch(e){}
                                                }
}catch(e){}
                                            } while (0);
}catch(e){}
}catch(e){}
                                            try {
o1122 = o1103 + ((o1101 | o1117) + o1106) | 0;
}catch(e){}
                                            try {
o1123 = o1101 + o1081 | 0
}catch(e){}
                                        } else {
                                            try {
o1122 = o747;
}catch(e){}
                                            try {
o1123 = o1081
}catch(e){}
                                        }
}catch(e){}
                                        try {
o1092 = o1122 + 4 | 0;
}catch(e){}
                                        try {
o259[o1092 >> 2] = o259[o1092 >> 2] & -2;
}catch(e){}
                                        try {
o259[o1103 + (o1096 + 4) >> 2] = o1123 | 1;
}catch(e){}
                                        try {
o259[o1103 + (o1123 + o1096) >> 2] = o1123;
}catch(e){}
                                        try {
o1092 = o1123 >>> 3;
}catch(e){}
                                        try {
if (o1123 >>> 0 < 256) {
                                            try {
o1095 = o1092 << 1;
}catch(e){}
                                            try {
o1099 = 10744 + (o1095 << 2) | 0;
}catch(e){}
                                            try {
o1088 = o259[2676] | 0;
}catch(e){}
                                            try {
o1087 = 1 << o1092;
}catch(e){}
                                            try {
do {
                                                try {
if ((o1088 & o1087 | 0) == 0) {
                                                    try {
o259[2676] = o1088 | o1087;
}catch(e){}
                                                    try {
o1124 = 10744 + (o1095 + 2 << 2) | 0;
}catch(e){}
                                                    try {
o1125 = o1099
}catch(e){}
                                                } else {
                                                    try {
o1092 = 10744 + (o1095 + 2 << 2) | 0;
}catch(e){}
                                                    try {
o1094 = o259[o1092 >> 2] | 0;
}catch(e){}
                                                    try {
if (!(o1094 >>> 0 < (o259[10720 >> 2] | 0) >>> 0)) {
                                                        try {
o1124 = o1092;
}catch(e){}
                                                        try {
o1125 = o1094;
}catch(e){}
                                                        try {
break
}catch(e){}
                                                    }
}catch(e){}
                                                    try {
o1102()
}catch(e){}
                                                }
}catch(e){}
                                            } while (0);
}catch(e){}
                                            try {
o259[o1124 >> 2] = o1098;
}catch(e){}
                                            try {
o259[o1125 + 12 >> 2] = o1098;
}catch(e){}
                                            try {
o259[o1103 + (o1096 + 8) >> 2] = o1125;
}catch(e){}
                                            try {
o259[o1103 + (o1096 + 12) >> 2] = o1099;
}catch(e){}
                                            try {
break
}catch(e){}
                                        }
}catch(e){}
                                        try {
o1095 = o1100;
}catch(e){}
                                        try {
o1087 = o1123 >>> 8;
}catch(e){}
                                        try {
do {
                                            try {
if ((o1087 | 0) == 0) {
                                                try {
o1126 = 0
}catch(e){}
                                            } else {
                                                try {
if (o1123 >>> 0 > 16777215) {
                                                    try {
o1126 = 31;
}catch(e){}
                                                    try {
break
}catch(e){}
                                                }
}catch(e){}
                                                try {
o1088 = (o1087 + 1048320 | 0) >>> 16 & 8;
}catch(e){}
                                                try {
o1101 = o1087 << o1088;
}catch(e){}
                                                try {
o1094 = (o1101 + 520192 | 0) >>> 16 & 4;
}catch(e){}
                                                try {
o1092 = o1101 << o1094;
}catch(e){}
                                                try {
o1101 = (o1092 + 245760 | 0) >>> 16 & 2;
}catch(e){}
                                                try {
o1090 = 14 - (o1094 | o1088 | o1101) + (o1092 << o1101 >>> 15) | 0;
}catch(e){}
                                                try {
o1126 = o1123 >>> (o1090 + 7 | 0) & 1 | o1090 << 1
}catch(e){}
                                            }
}catch(e){}
                                        } while (0);
}catch(e){}
                                        try {
o1087 = 11008 + (o1126 << 2) | 0;
}catch(e){}
                                        try {
o259[o1103 + (o1096 + 28) >> 2] = o1126;
}catch(e){}
                                        try {
o259[o1103 + (o1096 + 20) >> 2] = 0;
}catch(e){}
                                        try {
o259[o1103 + (o1096 + 16) >> 2] = 0;
}catch(e){}
                                        try {
o1099 = o259[10708 >> 2] | 0;
}catch(e){}
                                        try {
o1090 = 1 << o1126;
}catch(e){}
                                        try {
if ((o1099 & o1090 | 0) == 0) {
                                            try {
o259[10708 >> 2] = o1099 | o1090;
}catch(e){}
                                            try {
o259[o1087 >> 2] = o1095;
}catch(e){}
                                            try {
o259[o1103 + (o1096 + 24) >> 2] = o1087;
}catch(e){}
                                            try {
o259[o1103 + (o1096 + 12) >> 2] = o1095;
}catch(e){}
                                            try {
o259[o1103 + (o1096 + 8) >> 2] = o1095;
}catch(e){}
                                            try {
break
}catch(e){}
                                        }
}catch(e){}
                                        try {
o1090 = o259[o1087 >> 2] | 0;
}catch(e){}
                                        try {
if ((o1126 | 0) == 31) {
                                            try {
o1127 = 0
}catch(e){}
                                        } else {
                                            try {
o1127 = 25 - (o1126 >>> 1) | 0
}catch(e){}
                                        }
}catch(e){}
                                        try {
o65: try {
do {
                                            try {
if ((o259[o1090 + 4 >> 2] & -8 | 0) == (o1123 | 0)) {
                                                try {
o1128 = o1090
}catch(e){}
                                            } else {
                                                try {
o1087 = o1123 << o1127;
}catch(e){}
                                                try {
o1099 = o1090;
}catch(e){}
                                                try {
while (1) {
                                                    try {
o1129 = o1099 + (o1087 >>> 31 << 2) + 16 | 0;
}catch(e){}
                                                    try {
o1101 = o259[o1129 >> 2] | 0;
}catch(e){}
                                                    try {
if ((o1101 | 0) == 0) {
                                                        try {
break
}catch(e){}
                                                    }
}catch(e){}
                                                    try {
if ((o259[o1101 + 4 >> 2] & -8 | 0) == (o1123 | 0)) {
                                                        try {
o1128 = o1101;
}catch(e){}
                                                        try {
break o65
}catch(e){}
                                                    } else {
                                                        try {
o1087 = o1087 << 1;
}catch(e){}
                                                        try {
o1099 = o1101
}catch(e){}
                                                    }
}catch(e){}
                                                }
}catch(e){}
                                                try {
if (o1129 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                                                    try {
o1102()
}catch(e){}
                                                } else {
                                                    try {
o259[o1129 >> 2] = o1095;
}catch(e){}
                                                    try {
o259[o1103 + (o1096 + 24) >> 2] = o1099;
}catch(e){}
                                                    try {
o259[o1103 + (o1096 + 12) >> 2] = o1095;
}catch(e){}
                                                    try {
o259[o1103 + (o1096 + 8) >> 2] = o1095;
}catch(e){}
                                                    try {
break o1061
}catch(e){}
                                                }
}catch(e){}
                                            }
}catch(e){}
                                        } while (0);
}catch(e){}
}catch(e){}
                                        try {
o1090 = o1128 + 8 | 0;
}catch(e){}
                                        try {
o1087 = o259[o1090 >> 2] | 0;
}catch(e){}
                                        try {
o1080 = o259[10720 >> 2] | 0;
}catch(e){}
                                        try {
if (o1128 >>> 0 < o1080 >>> 0) {
                                            try {
o1102()
}catch(e){}
                                        }
}catch(e){}
                                        try {
if (o1087 >>> 0 < o1080 >>> 0) {
                                            try {
o1102()
}catch(e){}
                                        } else {
                                            try {
o259[o1087 + 12 >> 2] = o1095;
}catch(e){}
                                            try {
o259[o1090 >> 2] = o1095;
}catch(e){}
                                            try {
o259[o1103 + (o1096 + 8) >> 2] = o1087;
}catch(e){}
                                            try {
o259[o1103 + (o1096 + 12) >> 2] = o1128;
}catch(e){}
                                            try {
o259[o1103 + (o1096 + 24) >> 2] = 0;
}catch(e){}
                                            try {
break
}catch(e){}
                                        }
}catch(e){}
                                    }
}catch(e){}
                                } while (0);
}catch(e){}
}catch(e){}
                                try {
o602 = o1103 + (o1116 | 8) | 0;
}catch(e){}
                                try {
o82 = o308;
}catch(e){}
                                try {
return o602 | 0
}catch(e){}
                            }
}catch(e){}
                        } while (0);
}catch(e){}
                        try {
o1097 = o1109;
}catch(e){}
                        try {
o1096 = 11152 | 0;
}catch(e){}
                        try {
while (1) {
                            try {
o1130 = o259[o1096 >> 2] | 0;
}catch(e){}
                            try {
if (!(o1130 >>> 0 > o1097 >>> 0)) {
                                try {
o1131 = o259[o1096 + 4 >> 2] | 0;
}catch(e){}
                                try {
o1132 = o1130 + o1131 | 0;
}catch(e){}
                                try {
if (o1132 >>> 0 > o1097 >>> 0) {
                                    try {
break
}catch(e){}
                                }
}catch(e){}
                            }
}catch(e){}
                            try {
o1096 = o259[o1096 + 8 >> 2] | 0
}catch(e){}
                        }
}catch(e){}
                        try {
o1096 = o1130 + (o1131 + -39) | 0;
}catch(e){}
                        try {
if ((o1096 & 7 | 0) == 0) {
                            try {
o1133 = 0
}catch(e){}
                        } else {
                            try {
o1133 = 0 - o1096 & 7
}catch(e){}
                        }
}catch(e){}
                        try {
o1096 = o1130 + (o1131 + -47 + o1133) | 0;
}catch(e){}
                        try {
o1100 = o1096 >>> 0 < (o1109 + 16 | 0) >>> 0 ? o1097 : o1096;
}catch(e){}
                        try {
o1096 = o1100 + 8 | 0;
}catch(e){}
                        try {
o1098 = o1096;
}catch(e){}
                        try {
o1081 = o1103 + 8 | 0;
}catch(e){}
                        try {
if ((o1081 & 7 | 0) == 0) {
                            try {
o1134 = 0
}catch(e){}
                        } else {
                            try {
o1134 = 0 - o1081 & 7
}catch(e){}
                        }
}catch(e){}
                        try {
o1081 = o1106 + -40 - o1134 | 0;
}catch(e){}
                        try {
o259[10728 >> 2] = o1103 + o1134;
}catch(e){}
                        try {
o259[10716 >> 2] = o1081;
}catch(e){}
                        try {
o259[o1103 + (o1134 + 4) >> 2] = o1081 | 1;
}catch(e){}
                        try {
o259[o1103 + (o1106 + -36) >> 2] = 40;
}catch(e){}
                        try {
o259[10732 >> 2] = o259[11192 >> 2];
}catch(e){}
                        try {
o259[o1100 + 4 >> 2] = 27;
}catch(e){}
                        try {
o259[o1096 + 0 >> 2] = o259[11152 >> 2];
}catch(e){}
                        try {
o259[o1096 + 4 >> 2] = o259[11156 >> 2];
}catch(e){}
                        try {
o259[o1096 + 8 >> 2] = o259[11160 >> 2];
}catch(e){}
                        try {
o259[o1096 + 12 >> 2] = o259[11164 >> 2];
}catch(e){}
                        try {
o259[11152 >> 2] = o1103;
}catch(e){}
                        try {
o259[11156 >> 2] = o1106;
}catch(e){}
                        try {
o259[11164 >> 2] = 0;
}catch(e){}
                        try {
o259[11160 >> 2] = o1098;
}catch(e){}
                        try {
o1098 = o1100 + 28 | 0;
}catch(e){}
                        try {
o259[o1098 >> 2] = 7;
}catch(e){}
                        try {
if ((o1100 + 32 | 0) >>> 0 < o1132 >>> 0) {
                            try {
o1096 = o1098;
}catch(e){}
                            try {
while (1) {
                                try {
o1098 = o1096 + 4 | 0;
}catch(e){}
                                try {
o259[o1098 >> 2] = 7;
}catch(e){}
                                try {
if ((o1096 + 8 | 0) >>> 0 < o1132 >>> 0) {
                                    try {
o1096 = o1098
}catch(e){}
                                } else {
                                    try {
break
}catch(e){}
                                }
}catch(e){}
                            }
}catch(e){}
                        }
}catch(e){}
                        try {
if ((o1100 | 0) == (o1097 | 0)) {
                            try {
break
}catch(e){}
                        }
}catch(e){}
                        try {
o1096 = o1100 - o1109 | 0;
}catch(e){}
                        try {
o1098 = o1097 + (o1096 + 4) | 0;
}catch(e){}
                        try {
o259[o1098 >> 2] = o259[o1098 >> 2] & -2;
}catch(e){}
                        try {
o259[o1109 + 4 >> 2] = o1096 | 1;
}catch(e){}
                        try {
o259[o1097 + o1096 >> 2] = o1096;
}catch(e){}
                        try {
o1098 = o1096 >>> 3;
}catch(e){}
                        try {
if (o1096 >>> 0 < 256) {
                            try {
o1081 = o1098 << 1;
}catch(e){}
                            try {
o747 = 10744 + (o1081 << 2) | 0;
}catch(e){}
                            try {
o1091 = o259[2676] | 0;
}catch(e){}
                            try {
o750 = 1 << o1098;
}catch(e){}
                            try {
do {
                                try {
if ((o1091 & o750 | 0) == 0) {
                                    try {
o259[2676] = o1091 | o750;
}catch(e){}
                                    try {
o1135 = 10744 + (o1081 + 2 << 2) | 0;
}catch(e){}
                                    try {
o1136 = o747
}catch(e){}
                                } else {
                                    try {
o1098 = 10744 + (o1081 + 2 << 2) | 0;
}catch(e){}
                                    try {
o1087 = o259[o1098 >> 2] | 0;
}catch(e){}
                                    try {
if (!(o1087 >>> 0 < (o259[10720 >> 2] | 0) >>> 0)) {
                                        try {
o1135 = o1098;
}catch(e){}
                                        try {
o1136 = o1087;
}catch(e){}
                                        try {
break
}catch(e){}
                                    }
}catch(e){}
                                    try {
o1102()
}catch(e){}
                                }
}catch(e){}
                            } while (0);
}catch(e){}
                            try {
o259[o1135 >> 2] = o1109;
}catch(e){}
                            try {
o259[o1136 + 12 >> 2] = o1109;
}catch(e){}
                            try {
o259[o1109 + 8 >> 2] = o1136;
}catch(e){}
                            try {
o259[o1109 + 12 >> 2] = o747;
}catch(e){}
                            try {
break
}catch(e){}
                        }
}catch(e){}
                        try {
o1081 = o1109;
}catch(e){}
                        try {
o750 = o1096 >>> 8;
}catch(e){}
                        try {
do {
                            try {
if ((o750 | 0) == 0) {
                                try {
o1137 = 0
}catch(e){}
                            } else {
                                try {
if (o1096 >>> 0 > 16777215) {
                                    try {
o1137 = 31;
}catch(e){}
                                    try {
break
}catch(e){}
                                }
}catch(e){}
                                try {
o1091 = (o750 + 1048320 | 0) >>> 16 & 8;
}catch(e){}
                                try {
o1097 = o750 << o1091;
}catch(e){}
                                try {
o1100 = (o1097 + 520192 | 0) >>> 16 & 4;
}catch(e){}
                                try {
o1087 = o1097 << o1100;
}catch(e){}
                                try {
o1097 = (o1087 + 245760 | 0) >>> 16 & 2;
}catch(e){}
                                try {
o1098 = 14 - (o1100 | o1091 | o1097) + (o1087 << o1097 >>> 15) | 0;
}catch(e){}
                                try {
o1137 = o1096 >>> (o1098 + 7 | 0) & 1 | o1098 << 1
}catch(e){}
                            }
}catch(e){}
                        } while (0);
}catch(e){}
                        try {
o750 = 11008 + (o1137 << 2) | 0;
}catch(e){}
                        try {
o259[o1109 + 28 >> 2] = o1137;
}catch(e){}
                        try {
o259[o1109 + 20 >> 2] = 0;
}catch(e){}
                        try {
o259[o1109 + 16 >> 2] = 0;
}catch(e){}
                        try {
o747 = o259[10708 >> 2] | 0;
}catch(e){}
                        try {
o1098 = 1 << o1137;
}catch(e){}
                        try {
if ((o747 & o1098 | 0) == 0) {
                            try {
o259[10708 >> 2] = o747 | o1098;
}catch(e){}
                            try {
o259[o750 >> 2] = o1081;
}catch(e){}
                            try {
o259[o1109 + 24 >> 2] = o750;
}catch(e){}
                            try {
o259[o1109 + 12 >> 2] = o1109;
}catch(e){}
                            try {
o259[o1109 + 8 >> 2] = o1109;
}catch(e){}
                            try {
break
}catch(e){}
                        }
}catch(e){}
                        try {
o1098 = o259[o750 >> 2] | 0;
}catch(e){}
                        try {
if ((o1137 | 0) == 31) {
                            try {
o1138 = 0
}catch(e){}
                        } else {
                            try {
o1138 = 25 - (o1137 >>> 1) | 0
}catch(e){}
                        }
}catch(e){}
                        try {
o750: try {
do {
                            try {
if ((o259[o1098 + 4 >> 2] & -8 | 0) == (o1096 | 0)) {
                                try {
o1139 = o1098
}catch(e){}
                            } else {
                                try {
o750 = o1096 << o1138;
}catch(e){}
                                try {
o747 = o1098;
}catch(e){}
                                try {
while (1) {
                                    try {
o1140 = o747 + (o750 >>> 31 << 2) + 16 | 0;
}catch(e){}
                                    try {
o1097 = o259[o1140 >> 2] | 0;
}catch(e){}
                                    try {
if ((o1097 | 0) == 0) {
                                        try {
break
}catch(e){}
                                    }
}catch(e){}
                                    try {
if ((o259[o1097 + 4 >> 2] & -8 | 0) == (o1096 | 0)) {
                                        try {
o1139 = o1097;
}catch(e){}
                                        try {
break o750
}catch(e){}
                                    } else {
                                        try {
o750 = o750 << 1;
}catch(e){}
                                        try {
o747 = o1097
}catch(e){}
                                    }
}catch(e){}
                                }
}catch(e){}
                                try {
if (o1140 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                                    try {
o1102()
}catch(e){}
                                } else {
                                    try {
o259[o1140 >> 2] = o1081;
}catch(e){}
                                    try {
o259[o1109 + 24 >> 2] = o747;
}catch(e){}
                                    try {
o259[o1109 + 12 >> 2] = o1109;
}catch(e){}
                                    try {
o259[o1109 + 8 >> 2] = o1109;
}catch(e){}
                                    try {
break o82
}catch(e){}
                                }
}catch(e){}
                            }
}catch(e){}
                        } while (0);
}catch(e){}
}catch(e){}
                        try {
o1096 = o1139 + 8 | 0;
}catch(e){}
                        try {
o1098 = o259[o1096 >> 2] | 0;
}catch(e){}
                        try {
o750 = o259[10720 >> 2] | 0;
}catch(e){}
                        try {
if (o1139 >>> 0 < o750 >>> 0) {
                            try {
o1102()
}catch(e){}
                        }
}catch(e){}
                        try {
if (o1098 >>> 0 < o750 >>> 0) {
                            try {
o1102()
}catch(e){}
                        } else {
                            try {
o259[o1098 + 12 >> 2] = o1081;
}catch(e){}
                            try {
o259[o1096 >> 2] = o1081;
}catch(e){}
                            try {
o259[o1109 + 8 >> 2] = o1098;
}catch(e){}
                            try {
o259[o1109 + 12 >> 2] = o1139;
}catch(e){}
                            try {
o259[o1109 + 24 >> 2] = 0;
}catch(e){}
                            try {
break
}catch(e){}
                        }
}catch(e){}
                    }
}catch(e){}
                } while (0);
}catch(e){}
}catch(e){}
                try {
o1109 = o259[10716 >> 2] | 0;
}catch(e){}
                try {
if (!(o1109 >>> 0 > o1064 >>> 0)) {
                    try {
break
}catch(e){}
                }
}catch(e){}
                try {
o1098 = o1109 - o1064 | 0;
}catch(e){}
                try {
o259[10716 >> 2] = o1098;
}catch(e){}
                try {
o1109 = o259[10728 >> 2] | 0;
}catch(e){}
                try {
o1096 = o1109;
}catch(e){}
                try {
o259[10728 >> 2] = o1096 + o1064;
}catch(e){}
                try {
o259[o1096 + (o1064 + 4) >> 2] = o1098 | 1;
}catch(e){}
                try {
o259[o1109 + 4 >> 2] = o1064 | 3;
}catch(e){}
                try {
o602 = o1109 + 8 | 0;
}catch(e){}
                try {
o82 = o308;
}catch(e){}
                try {
return o602 | 0
}catch(e){}
            }
}catch(e){}
        } while (0);
}catch(e){}
        try {
o259[(o1108() | 0) >> 2] = 12;
}catch(e){}
        try {
o602 = 0;
}catch(e){}
        try {
o82 = o308;
}catch(e){}
        try {
return o602 | 0
}catch(e){}
    }

    function o1127(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        var o308 = 0,
            o1059 = 0,
            o189 = 0,
            o34 = 0,
            o1060 = 0,
            o66 = 0,
            o1061 = 0,
            o111 = 0,
            o65 = 0,
            o750 = 0,
            o1062 = 0,
            o1063 = 0,
            o602 = 0,
            o1064 = 0,
            o887 = 0,
            o1065 = 0,
            o227 = 0,
            o1066 = 0,
            o1067 = 0,
            o1043 = 0,
            o23 = 0,
            o64 = 0,
            o1068 = 0,
            o1069 = 0,
            o1070 = 0,
            o1071 = 0,
            o1072 = 0,
            o1073 = 0,
            o1074 = 0,
            o1075 = 0,
            o1076 = 0,
            o1077 = 0,
            o1078 = 0,
            o1079 = 0,
            o1080 = 0,
            o1081 = 0,
            o1082 = 0,
            o1083 = 0,
            o1084 = 0,
            o1085 = 0;
        try {
o308 = o82;
}catch(e){}
        try {
if ((o247 | 0) == 0) {
            try {
o82 = o308;
}catch(e){}
            try {
return
}catch(e){}
        }
}catch(e){}
        try {
o1059 = o247 + -8 | 0;
}catch(e){}
        try {
o189 = o1059;
}catch(e){}
        try {
o34 = o259[10720 >> 2] | 0;
}catch(e){}
        try {
if (o1059 >>> 0 < o34 >>> 0) {
            try {
o1102()
}catch(e){}
        }
}catch(e){}
        try {
o1060 = o259[o247 + -4 >> 2] | 0;
}catch(e){}
        try {
o66 = o1060 & 3;
}catch(e){}
        try {
if ((o66 | 0) == 1) {
            try {
o1102()
}catch(e){}
        }
}catch(e){}
        try {
o1061 = o1060 & -8;
}catch(e){}
        try {
o111 = o247 + (o1061 + -8) | 0;
}catch(e){}
        try {
o65 = o111;
}catch(e){}
        try {
o247: try {
do {
            try {
if ((o1060 & 1 | 0) == 0) {
                try {
o750 = o259[o1059 >> 2] | 0;
}catch(e){}
                try {
if ((o66 | 0) == 0) {
                    try {
o82 = o308;
}catch(e){}
                    try {
return
}catch(e){}
                }
}catch(e){}
                try {
o1062 = -8 - o750 | 0;
}catch(e){}
                try {
o1063 = o247 + o1062 | 0;
}catch(e){}
                try {
o602 = o1063;
}catch(e){}
                try {
o1064 = o750 + o1061 | 0;
}catch(e){}
                try {
if (o1063 >>> 0 < o34 >>> 0) {
                    try {
o1102()
}catch(e){}
                }
}catch(e){}
                try {
if ((o602 | 0) == (o259[10724 >> 2] | 0)) {
                    try {
o887 = o247 + (o1061 + -4) | 0;
}catch(e){}
                    try {
if ((o259[o887 >> 2] & 3 | 0) != 3) {
                        try {
o1065 = o602;
}catch(e){}
                        try {
o227 = o1064;
}catch(e){}
                        try {
break
}catch(e){}
                    }
}catch(e){}
                    try {
o259[10712 >> 2] = o1064;
}catch(e){}
                    try {
o259[o887 >> 2] = o259[o887 >> 2] & -2;
}catch(e){}
                    try {
o259[o247 + (o1062 + 4) >> 2] = o1064 | 1;
}catch(e){}
                    try {
o259[o111 >> 2] = o1064;
}catch(e){}
                    try {
o82 = o308;
}catch(e){}
                    try {
return
}catch(e){}
                }
}catch(e){}
                try {
o887 = o750 >>> 3;
}catch(e){}
                try {
if (o750 >>> 0 < 256) {
                    try {
o750 = o259[o247 + (o1062 + 8) >> 2] | 0;
}catch(e){}
                    try {
o1066 = o259[o247 + (o1062 + 12) >> 2] | 0;
}catch(e){}
                    try {
o1067 = 10744 + (o887 << 1 << 2) | 0;
}catch(e){}
                    try {
do {
                        try {
if ((o750 | 0) != (o1067 | 0)) {
                            try {
if (o750 >>> 0 < o34 >>> 0) {
                                try {
o1102()
}catch(e){}
                            }
}catch(e){}
                            try {
if ((o259[o750 + 12 >> 2] | 0) == (o602 | 0)) {
                                try {
break
}catch(e){}
                            }
}catch(e){}
                            try {
o1102()
}catch(e){}
                        }
}catch(e){}
                    } while (0);
}catch(e){}
                    try {
if ((o1066 | 0) == (o750 | 0)) {
                        try {
o259[2676] = o259[2676] & ~(1 << o887);
}catch(e){}
                        try {
o1065 = o602;
}catch(e){}
                        try {
o227 = o1064;
}catch(e){}
                        try {
break
}catch(e){}
                    }
}catch(e){}
                    try {
do {
                        try {
if ((o1066 | 0) == (o1067 | 0)) {
                            try {
o1043 = o1066 + 8 | 0
}catch(e){}
                        } else {
                            try {
if (o1066 >>> 0 < o34 >>> 0) {
                                try {
o1102()
}catch(e){}
                            }
}catch(e){}
                            try {
o23 = o1066 + 8 | 0;
}catch(e){}
                            try {
if ((o259[o23 >> 2] | 0) == (o602 | 0)) {
                                try {
o1043 = o23;
}catch(e){}
                                try {
break
}catch(e){}
                            }
}catch(e){}
                            try {
o1102()
}catch(e){}
                        }
}catch(e){}
                    } while (0);
}catch(e){}
                    try {
o259[o750 + 12 >> 2] = o1066;
}catch(e){}
                    try {
o259[o1043 >> 2] = o750;
}catch(e){}
                    try {
o1065 = o602;
}catch(e){}
                    try {
o227 = o1064;
}catch(e){}
                    try {
break
}catch(e){}
                }
}catch(e){}
                try {
o1067 = o1063;
}catch(e){}
                try {
o887 = o259[o247 + (o1062 + 24) >> 2] | 0;
}catch(e){}
                try {
o23 = o259[o247 + (o1062 + 12) >> 2] | 0;
}catch(e){}
                try {
do {
                    try {
if ((o23 | 0) == (o1067 | 0)) {
                        try {
o64 = o247 + (o1062 + 20) | 0;
}catch(e){}
                        try {
o1068 = o259[o64 >> 2] | 0;
}catch(e){}
                        try {
if ((o1068 | 0) == 0) {
                            try {
o1069 = o247 + (o1062 + 16) | 0;
}catch(e){}
                            try {
o1070 = o259[o1069 >> 2] | 0;
}catch(e){}
                            try {
if ((o1070 | 0) == 0) {
                                try {
o1071 = 0;
}catch(e){}
                                try {
break
}catch(e){}
                            } else {
                                try {
o1072 = o1070;
}catch(e){}
                                try {
o1073 = o1069
}catch(e){}
                            }
}catch(e){}
                        } else {
                            try {
o1072 = o1068;
}catch(e){}
                            try {
o1073 = o64
}catch(e){}
                        }
}catch(e){}
                        try {
while (1) {
                            try {
o64 = o1072 + 20 | 0;
}catch(e){}
                            try {
o1068 = o259[o64 >> 2] | 0;
}catch(e){}
                            try {
if ((o1068 | 0) != 0) {
                                try {
o1073 = o64;
}catch(e){}
                                try {
o1072 = o1068;
}catch(e){}
                                try {
continue
}catch(e){}
                            }
}catch(e){}
                            try {
o1068 = o1072 + 16 | 0;
}catch(e){}
                            try {
o64 = o259[o1068 >> 2] | 0;
}catch(e){}
                            try {
if ((o64 | 0) == 0) {
                                try {
break
}catch(e){}
                            } else {
                                try {
o1072 = o64;
}catch(e){}
                                try {
o1073 = o1068
}catch(e){}
                            }
}catch(e){}
                        }
}catch(e){}
                        try {
if (o1073 >>> 0 < o34 >>> 0) {
                            try {
o1102()
}catch(e){}
                        } else {
                            try {
o259[o1073 >> 2] = 0;
}catch(e){}
                            try {
o1071 = o1072;
}catch(e){}
                            try {
break
}catch(e){}
                        }
}catch(e){}
                    } else {
                        try {
o1068 = o259[o247 + (o1062 + 8) >> 2] | 0;
}catch(e){}
                        try {
if (o1068 >>> 0 < o34 >>> 0) {
                            try {
o1102()
}catch(e){}
                        }
}catch(e){}
                        try {
o64 = o1068 + 12 | 0;
}catch(e){}
                        try {
if ((o259[o64 >> 2] | 0) != (o1067 | 0)) {
                            try {
o1102()
}catch(e){}
                        }
}catch(e){}
                        try {
o1069 = o23 + 8 | 0;
}catch(e){}
                        try {
if ((o259[o1069 >> 2] | 0) == (o1067 | 0)) {
                            try {
o259[o64 >> 2] = o23;
}catch(e){}
                            try {
o259[o1069 >> 2] = o1068;
}catch(e){}
                            try {
o1071 = o23;
}catch(e){}
                            try {
break
}catch(e){}
                        } else {
                            try {
o1102()
}catch(e){}
                        }
}catch(e){}
                    }
}catch(e){}
                } while (0);
}catch(e){}
                try {
if ((o887 | 0) == 0) {
                    try {
o1065 = o602;
}catch(e){}
                    try {
o227 = o1064;
}catch(e){}
                    try {
break
}catch(e){}
                }
}catch(e){}
                try {
o23 = o259[o247 + (o1062 + 28) >> 2] | 0;
}catch(e){}
                try {
o1063 = 11008 + (o23 << 2) | 0;
}catch(e){}
                try {
do {
                    try {
if ((o1067 | 0) == (o259[o1063 >> 2] | 0)) {
                        try {
o259[o1063 >> 2] = o1071;
}catch(e){}
                        try {
if ((o1071 | 0) != 0) {
                            try {
break
}catch(e){}
                        }
}catch(e){}
                        try {
o259[10708 >> 2] = o259[10708 >> 2] & ~(1 << o23);
}catch(e){}
                        try {
o1065 = o602;
}catch(e){}
                        try {
o227 = o1064;
}catch(e){}
                        try {
break o247
}catch(e){}
                    } else {
                        try {
if (o887 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                            try {
o1102()
}catch(e){}
                        }
}catch(e){}
                        try {
o750 = o887 + 16 | 0;
}catch(e){}
                        try {
if ((o259[o750 >> 2] | 0) == (o1067 | 0)) {
                            try {
o259[o750 >> 2] = o1071
}catch(e){}
                        } else {
                            try {
o259[o887 + 20 >> 2] = o1071
}catch(e){}
                        }
}catch(e){} try {
if ((o1071 | 0) == 0) {
                            try {
o1065 = o602;
}catch(e){}
                            try {
o227 = o1064;
}catch(e){}
                            try {
break o247
}catch(e){}
                        }
}catch(e){}
                    }
}catch(e){}
                } while (0);
}catch(e){}
                try {
if (o1071 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                    try {
o1102()
}catch(e){}
                }
}catch(e){}
                try {
o259[o1071 + 24 >> 2] = o887;
}catch(e){}
                try {
o1067 = o259[o247 + (o1062 + 16) >> 2] | 0;
}catch(e){}
                try {
do {
                    try {
if ((o1067 | 0) != 0) {
                        try {
if (o1067 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                            try {
o1102()
}catch(e){}
                        } else {
                            try {
o259[o1071 + 16 >> 2] = o1067;
}catch(e){}
                            try {
o259[o1067 + 24 >> 2] = o1071;
}catch(e){}
                            try {
break
}catch(e){}
                        }
}catch(e){}
                    }
}catch(e){}
                } while (0);
}catch(e){}
                try {
o1067 = o259[o247 + (o1062 + 20) >> 2] | 0;
}catch(e){}
                try {
if ((o1067 | 0) == 0) {
                    try {
o1065 = o602;
}catch(e){}
                    try {
o227 = o1064;
}catch(e){}
                    try {
break
}catch(e){}
                }
}catch(e){}
                try {
if (o1067 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                    try {
o1102()
}catch(e){}
                } else {
                    try {
o259[o1071 + 20 >> 2] = o1067;
}catch(e){}
                    try {
o259[o1067 + 24 >> 2] = o1071;
}catch(e){}
                    try {
o1065 = o602;
}catch(e){}
                    try {
o227 = o1064;
}catch(e){}
                    try {
break
}catch(e){}
                }
}catch(e){}
            } else {
                try {
o1065 = o189;
}catch(e){}
                try {
o227 = o1061
}catch(e){}
            }
}catch(e){}
        } while (0);
}catch(e){}
}catch(e){}
        try {
o189 = o1065;
}catch(e){}
        try {
if (!(o189 >>> 0 < o111 >>> 0)) {
            try {
o1102()
}catch(e){}
        }
}catch(e){}
        try {
o1071 = o247 + (o1061 + -4) | 0;
}catch(e){}
        try {
o34 = o259[o1071 >> 2] | 0;
}catch(e){}
        try {
if ((o34 & 1 | 0) == 0) {
            try {
o1102()
}catch(e){}
        }
}catch(e){}
        try {
do {
            try {
if ((o34 & 2 | 0) == 0) {
                try {
if ((o65 | 0) == (o259[10728 >> 2] | 0)) {
                    try {
o1072 = (o259[10716 >> 2] | 0) + o227 | 0;
}catch(e){}
                    try {
o259[10716 >> 2] = o1072;
}catch(e){}
                    try {
o259[10728 >> 2] = o1065;
}catch(e){}
                    try {
o259[o1065 + 4 >> 2] = o1072 | 1;
}catch(e){}
                    try {
if ((o1065 | 0) != (o259[10724 >> 2] | 0)) {
                        try {
o82 = o308;
}catch(e){}
                        try {
return
}catch(e){}
                    }
}catch(e){}
                    try {
o259[10724 >> 2] = 0;
}catch(e){}
                    try {
o259[10712 >> 2] = 0;
}catch(e){}
                    try {
o82 = o308;
}catch(e){}
                    try {
return
}catch(e){}
                }
}catch(e){}
                try {
if ((o65 | 0) == (o259[10724 >> 2] | 0)) {
                    try {
o1072 = (o259[10712 >> 2] | 0) + o227 | 0;
}catch(e){}
                    try {
o259[10712 >> 2] = o1072;
}catch(e){}
                    try {
o259[10724 >> 2] = o1065;
}catch(e){}
                    try {
o259[o1065 + 4 >> 2] = o1072 | 1;
}catch(e){}
                    try {
o259[o189 + o1072 >> 2] = o1072;
}catch(e){}
                    try {
o82 = o308;
}catch(e){}
                    try {
return
}catch(e){}
                }
}catch(e){}
                try {
o1072 = (o34 & -8) + o227 | 0;
}catch(e){}
                try {
o1073 = o34 >>> 3;
}catch(e){}
                try {
o308: try {
do {
                    try {
if (o34 >>> 0 < 256) {
                        try {
o1043 = o259[o247 + o1061 >> 2] | 0;
}catch(e){}
                        try {
o66 = o259[o247 + (o1061 | 4) >> 2] | 0;
}catch(e){}
                        try {
o1059 = 10744 + (o1073 << 1 << 2) | 0;
}catch(e){}
                        try {
do {
                            try {
if ((o1043 | 0) != (o1059 | 0)) {
                                try {
if (o1043 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                                    try {
o1102()
}catch(e){}
                                }
}catch(e){}
                                try {
if ((o259[o1043 + 12 >> 2] | 0) == (o65 | 0)) {
                                    try {
break
}catch(e){}
                                }
}catch(e){}
                                try {
o1102()
}catch(e){}
                            }
}catch(e){}
                        } while (0);
}catch(e){}
                        try {
if ((o66 | 0) == (o1043 | 0)) {
                            try {
o259[2676] = o259[2676] & ~(1 << o1073);
}catch(e){}
                            try {
break
}catch(e){}
                        }
}catch(e){}
                        try {
do {
                            try {
if ((o66 | 0) == (o1059 | 0)) {
                                try {
o1074 = o66 + 8 | 0
}catch(e){}
                            } else {
                                try {
if (o66 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                                    try {
o1102()
}catch(e){}
                                }
}catch(e){}
                                try {
o1060 = o66 + 8 | 0;
}catch(e){}
                                try {
if ((o259[o1060 >> 2] | 0) == (o65 | 0)) {
                                    try {
o1074 = o1060;
}catch(e){}
                                    try {
break
}catch(e){}
                                }
}catch(e){}
                                try {
o1102()
}catch(e){}
                            }
}catch(e){}
                        } while (0);
}catch(e){}
                        try {
o259[o1043 + 12 >> 2] = o66;
}catch(e){}
                        try {
o259[o1074 >> 2] = o1043
}catch(e){}
                    } else {
                        try {
o1059 = o111;
}catch(e){}
                        try {
o1060 = o259[o247 + (o1061 + 16) >> 2] | 0;
}catch(e){}
                        try {
o1067 = o259[o247 + (o1061 | 4) >> 2] | 0;
}catch(e){}
                        try {
do {
                            try {
if ((o1067 | 0) == (o1059 | 0)) {
                                try {
o887 = o247 + (o1061 + 12) | 0;
}catch(e){}
                                try {
o23 = o259[o887 >> 2] | 0;
}catch(e){}
                                try {
if ((o23 | 0) == 0) {
                                    try {
o1063 = o247 + (o1061 + 8) | 0;
}catch(e){}
                                    try {
o750 = o259[o1063 >> 2] | 0;
}catch(e){}
                                    try {
if ((o750 | 0) == 0) {
                                        try {
o1075 = 0;
}catch(e){}
                                        try {
break
}catch(e){}
                                    } else {
                                        try {
o1076 = o750;
}catch(e){}
                                        try {
o1077 = o1063
}catch(e){}
                                    }
}catch(e){}
                                } else {
                                    try {
o1076 = o23;
}catch(e){}
                                    try {
o1077 = o887
}catch(e){}
                                }
}catch(e){}
                                try {
while (1) {
                                    try {
o887 = o1076 + 20 | 0;
}catch(e){}
                                    try {
o23 = o259[o887 >> 2] | 0;
}catch(e){}
                                    try {
if ((o23 | 0) != 0) {
                                        try {
o1077 = o887;
}catch(e){}
                                        try {
o1076 = o23;
}catch(e){}
                                        try {
continue
}catch(e){}
                                    }
}catch(e){}
                                    try {
o23 = o1076 + 16 | 0;
}catch(e){}
                                    try {
o887 = o259[o23 >> 2] | 0;
}catch(e){}
                                    try {
if ((o887 | 0) == 0) {
                                        try {
break
}catch(e){}
                                    } else {
                                        try {
o1076 = o887;
}catch(e){}
                                        try {
o1077 = o23
}catch(e){}
                                    }
}catch(e){}
                                }
}catch(e){}
                                try {
if (o1077 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                                    try {
o1102()
}catch(e){}
                                } else {
                                    try {
o259[o1077 >> 2] = 0;
}catch(e){}
                                    try {
o1075 = o1076;
}catch(e){}
                                    try {
break
}catch(e){}
                                }
}catch(e){}
                            } else {
                                try {
o23 = o259[o247 + o1061 >> 2] | 0;
}catch(e){}
                                try {
if (o23 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                                    try {
o1102()
}catch(e){}
                                }
}catch(e){}
                                try {
o887 = o23 + 12 | 0;
}catch(e){}
                                try {
if ((o259[o887 >> 2] | 0) != (o1059 | 0)) {
                                    try {
o1102()
}catch(e){}
                                }
}catch(e){}
                                try {
o1063 = o1067 + 8 | 0;
}catch(e){}
                                try {
if ((o259[o1063 >> 2] | 0) == (o1059 | 0)) {
                                    try {
o259[o887 >> 2] = o1067;
}catch(e){}
                                    try {
o259[o1063 >> 2] = o23;
}catch(e){}
                                    try {
o1075 = o1067;
}catch(e){}
                                    try {
break
}catch(e){}
                                } else {
                                    try {
o1102()
}catch(e){}
                                }
}catch(e){}
                            }
}catch(e){}
                        } while (0);
}catch(e){}
                        try {
if ((o1060 | 0) == 0) {
                            try {
break
}catch(e){}
                        }
}catch(e){}
                        try {
o1067 = o259[o247 + (o1061 + 20) >> 2] | 0;
}catch(e){}
                        try {
o1043 = 11008 + (o1067 << 2) | 0;
}catch(e){}
                        try {
do {
                            try {
if ((o1059 | 0) == (o259[o1043 >> 2] | 0)) {
                                try {
o259[o1043 >> 2] = o1075;
}catch(e){}
                                try {
if ((o1075 | 0) != 0) {
                                    try {
break
}catch(e){}
                                }
}catch(e){}
                                try {
o259[10708 >> 2] = o259[10708 >> 2] & ~(1 << o1067);
}catch(e){}
                                try {
break o308
}catch(e){}
                            } else {
                                try {
if (o1060 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                                    try {
o1102()
}catch(e){}
                                }
}catch(e){}
                                try {
o66 = o1060 + 16 | 0;
}catch(e){}
                                try {
if ((o259[o66 >> 2] | 0) == (o1059 | 0)) {
                                    try {
o259[o66 >> 2] = o1075
}catch(e){}
                                } else {
                                    try {
o259[o1060 + 20 >> 2] = o1075
}catch(e){}
                                }
}catch(e){} try {
if ((o1075 | 0) == 0) {
                                    try {
break o308
}catch(e){}
                                }
}catch(e){}
                            }
}catch(e){}
                        } while (0);
}catch(e){}
                        try {
if (o1075 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                            try {
o1102()
}catch(e){}
                        }
}catch(e){}
                        try {
o259[o1075 + 24 >> 2] = o1060;
}catch(e){}
                        try {
o1059 = o259[o247 + (o1061 + 8) >> 2] | 0;
}catch(e){}
                        try {
do {
                            try {
if ((o1059 | 0) != 0) {
                                try {
if (o1059 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                                    try {
o1102()
}catch(e){}
                                } else {
                                    try {
o259[o1075 + 16 >> 2] = o1059;
}catch(e){}
                                    try {
o259[o1059 + 24 >> 2] = o1075;
}catch(e){}
                                    try {
break
}catch(e){}
                                }
}catch(e){}
                            }
}catch(e){}
                        } while (0);
}catch(e){}
                        try {
o1059 = o259[o247 + (o1061 + 12) >> 2] | 0;
}catch(e){}
                        try {
if ((o1059 | 0) == 0) {
                            try {
break
}catch(e){}
                        }
}catch(e){}
                        try {
if (o1059 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                            try {
o1102()
}catch(e){}
                        } else {
                            try {
o259[o1075 + 20 >> 2] = o1059;
}catch(e){}
                            try {
o259[o1059 + 24 >> 2] = o1075;
}catch(e){}
                            try {
break
}catch(e){}
                        }
}catch(e){}
                    }
}catch(e){}
                } while (0);
}catch(e){}
}catch(e){}
                try {
o259[o1065 + 4 >> 2] = o1072 | 1;
}catch(e){}
                try {
o259[o189 + o1072 >> 2] = o1072;
}catch(e){}
                try {
if ((o1065 | 0) != (o259[10724 >> 2] | 0)) {
                    try {
o1078 = o1072;
}catch(e){}
                    try {
break
}catch(e){}
                }
}catch(e){}
                try {
o259[10712 >> 2] = o1072;
}catch(e){}
                try {
o82 = o308;
}catch(e){}
                try {
return
}catch(e){}
            } else {
                try {
o259[o1071 >> 2] = o34 & -2;
}catch(e){}
                try {
o259[o1065 + 4 >> 2] = o227 | 1;
}catch(e){}
                try {
o259[o189 + o227 >> 2] = o227;
}catch(e){}
                try {
o1078 = o227
}catch(e){}
            }
}catch(e){}
        } while (0);
}catch(e){}
        try {
o227 = o1078 >>> 3;
}catch(e){}
        try {
if (o1078 >>> 0 < 256) {
            try {
o189 = o227 << 1;
}catch(e){}
            try {
o34 = 10744 + (o189 << 2) | 0;
}catch(e){}
            try {
o1071 = o259[2676] | 0;
}catch(e){}
            try {
o1075 = 1 << o227;
}catch(e){}
            try {
do {
                try {
if ((o1071 & o1075 | 0) == 0) {
                    try {
o259[2676] = o1071 | o1075;
}catch(e){}
                    try {
o1079 = 10744 + (o189 + 2 << 2) | 0;
}catch(e){}
                    try {
o1080 = o34
}catch(e){}
                } else {
                    try {
o227 = 10744 + (o189 + 2 << 2) | 0;
}catch(e){}
                    try {
o1061 = o259[o227 >> 2] | 0;
}catch(e){}
                    try {
if (!(o1061 >>> 0 < (o259[10720 >> 2] | 0) >>> 0)) {
                        try {
o1079 = o227;
}catch(e){}
                        try {
o1080 = o1061;
}catch(e){}
                        try {
break
}catch(e){}
                    }
}catch(e){}
                    try {
o1102()
}catch(e){}
                }
}catch(e){}
            } while (0);
}catch(e){}
            try {
o259[o1079 >> 2] = o1065;
}catch(e){}
            try {
o259[o1080 + 12 >> 2] = o1065;
}catch(e){}
            try {
o259[o1065 + 8 >> 2] = o1080;
}catch(e){}
            try {
o259[o1065 + 12 >> 2] = o34;
}catch(e){}
            try {
o82 = o308;
}catch(e){}
            try {
return
}catch(e){}
        }
}catch(e){}
        try {
o34 = o1065;
}catch(e){}
        try {
o1080 = o1078 >>> 8;
}catch(e){}
        try {
do {
            try {
if ((o1080 | 0) == 0) {
                try {
o1081 = 0
}catch(e){}
            } else {
                try {
if (o1078 >>> 0 > 16777215) {
                    try {
o1081 = 31;
}catch(e){}
                    try {
break
}catch(e){}
                }
}catch(e){}
                try {
o1079 = (o1080 + 1048320 | 0) >>> 16 & 8;
}catch(e){}
                try {
o189 = o1080 << o1079;
}catch(e){}
                try {
o1075 = (o189 + 520192 | 0) >>> 16 & 4;
}catch(e){}
                try {
o1071 = o189 << o1075;
}catch(e){}
                try {
o189 = (o1071 + 245760 | 0) >>> 16 & 2;
}catch(e){}
                try {
o1061 = 14 - (o1075 | o1079 | o189) + (o1071 << o189 >>> 15) | 0;
}catch(e){}
                try {
o1081 = o1078 >>> (o1061 + 7 | 0) & 1 | o1061 << 1
}catch(e){}
            }
}catch(e){}
        } while (0);
}catch(e){}
        try {
o1080 = 11008 + (o1081 << 2) | 0;
}catch(e){}
        try {
o259[o1065 + 28 >> 2] = o1081;
}catch(e){}
        try {
o259[o1065 + 20 >> 2] = 0;
}catch(e){}
        try {
o259[o1065 + 16 >> 2] = 0;
}catch(e){}
        try {
o1061 = o259[10708 >> 2] | 0;
}catch(e){}
        try {
o189 = 1 << o1081;
}catch(e){}
        try {
o259: try {
do {
            try {
if ((o1061 & o189 | 0) == 0) {
                try {
o259[10708 >> 2] = o1061 | o189;
}catch(e){}
                try {
o259[o1080 >> 2] = o34;
}catch(e){}
                try {
o259[o1065 + 24 >> 2] = o1080;
}catch(e){}
                try {
o259[o1065 + 12 >> 2] = o1065;
}catch(e){}
                try {
o259[o1065 + 8 >> 2] = o1065
}catch(e){}
            } else {
                try {
o1071 = o259[o1080 >> 2] | 0;
}catch(e){}
                try {
if ((o1081 | 0) == 31) {
                    try {
o1082 = 0
}catch(e){}
                } else {
                    try {
o1082 = 25 - (o1081 >>> 1) | 0
}catch(e){}
                }
}catch(e){}
                try {
o1059: try {
do {
                    try {
if ((o259[o1071 + 4 >> 2] & -8 | 0) == (o1078 | 0)) {
                        try {
o1083 = o1071
}catch(e){}
                    } else {
                        try {
o1079 = o1078 << o1082;
}catch(e){}
                        try {
o1075 = o1071;
}catch(e){}
                        try {
while (1) {
                            try {
o1084 = o1075 + (o1079 >>> 31 << 2) + 16 | 0;
}catch(e){}
                            try {
o227 = o259[o1084 >> 2] | 0;
}catch(e){}
                            try {
if ((o227 | 0) == 0) {
                                try {
break
}catch(e){}
                            }
}catch(e){}
                            try {
if ((o259[o227 + 4 >> 2] & -8 | 0) == (o1078 | 0)) {
                                try {
o1083 = o227;
}catch(e){}
                                try {
break o1059
}catch(e){}
                            } else {
                                try {
o1079 = o1079 << 1;
}catch(e){}
                                try {
o1075 = o227
}catch(e){}
                            }
}catch(e){}
                        }
}catch(e){}
                        try {
if (o1084 >>> 0 < (o259[10720 >> 2] | 0) >>> 0) {
                            try {
o1102()
}catch(e){}
                        } else {
                            try {
o259[o1084 >> 2] = o34;
}catch(e){}
                            try {
o259[o1065 + 24 >> 2] = o1075;
}catch(e){}
                            try {
o259[o1065 + 12 >> 2] = o1065;
}catch(e){}
                            try {
o259[o1065 + 8 >> 2] = o1065;
}catch(e){}
                            try {
break o259
}catch(e){}
                        }
}catch(e){}
                    }
}catch(e){}
                } while (0);
}catch(e){}
}catch(e){}
                try {
o1071 = o1083 + 8 | 0;
}catch(e){}
                try {
o1072 = o259[o1071 >> 2] | 0;
}catch(e){}
                try {
o1079 = o259[10720 >> 2] | 0;
}catch(e){}
                try {
if (o1083 >>> 0 < o1079 >>> 0) {
                    try {
o1102()
}catch(e){}
                }
}catch(e){}
                try {
if (o1072 >>> 0 < o1079 >>> 0) {
                    try {
o1102()
}catch(e){}
                } else {
                    try {
o259[o1072 + 12 >> 2] = o34;
}catch(e){}
                    try {
o259[o1071 >> 2] = o34;
}catch(e){}
                    try {
o259[o1065 + 8 >> 2] = o1072;
}catch(e){}
                    try {
o259[o1065 + 12 >> 2] = o1083;
}catch(e){}
                    try {
o259[o1065 + 24 >> 2] = 0;
}catch(e){}
                    try {
break
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
        } while (0);
}catch(e){}
}catch(e){}
        try {
o1065 = (o259[10736 >> 2] | 0) + -1 | 0;
}catch(e){}
        try {
o259[10736 >> 2] = o1065;
}catch(e){}
        try {
if ((o1065 | 0) == 0) {
            try {
o1085 = 11160 | 0
}catch(e){}
        } else {
            try {
o82 = o308;
}catch(e){}
            try {
return
}catch(e){}
        }
}catch(e){}
        try {
while (1) {
            try {
o1065 = o259[o1085 >> 2] | 0;
}catch(e){}
            try {
if ((o1065 | 0) == 0) {
                try {
break
}catch(e){}
            } else {
                try {
o1085 = o1065 + 8 | 0
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
o259[10736 >> 2] = -1;
}catch(e){}
        try {
o82 = o308;
}catch(e){}
        try {
return
}catch(e){}
    }

    function o1128() {}

    function o1129(o308, o1059, o189) {
        try {
o308 = o308 | 0;
}catch(e){}
        try {
o1059 = o1059 | 0;
}catch(e){}
        try {
o189 = o189 | 0;
}catch(e){}
        var o34 = 0;
        try {
if ((o189 | 0) >= 4096) try {
return o1106(o308 | 0, o1059 | 0, o189 | 0) | 0;
}catch(e){}
}catch(e){}
        try {
o34 = o308 | 0;
}catch(e){}
        try {
if ((o308 & 3) == (o1059 & 3)) {
            try {
while (o308 & 3) {
                try {
if ((o189 | 0) == 0) try {
return o34 | 0;
}catch(e){}
}catch(e){}
                try {
o247[o308] = o247[o1059] | 0;
}catch(e){}
                try {
o308 = o308 + 1 | 0;
}catch(e){}
                try {
o1059 = o1059 + 1 | 0;
}catch(e){}
                try {
o189 = o189 - 1 | 0
}catch(e){}
            }
}catch(e){}
            try {
while ((o189 | 0) >= 4) {
                try {
o259[o308 >> 2] = o259[o1059 >> 2];
}catch(e){}
                try {
o308 = o308 + 4 | 0;
}catch(e){}
                try {
o1059 = o1059 + 4 | 0;
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
o247[o308] = o247[o1059] | 0;
}catch(e){}
            try {
o308 = o308 + 1 | 0;
}catch(e){}
            try {
o1059 = o1059 + 1 | 0;
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

    function o1130(o308, o1059, o189) {
        try {
o308 = o308 | 0;
}catch(e){}
        try {
o1059 = o1059 | 0;
}catch(e){}
        try {
o189 = o189 | 0;
}catch(e){}
        var o34 = 0,
            o1060 = 0,
            o66 = 0,
            o82 = 0;
        try {
o34 = o308 + o189 | 0;
}catch(e){}
        try {
if ((o189 | 0) >= 20) {
            try {
o1059 = o1059 & 255;
}catch(e){}
            try {
o1060 = o308 & 3;
}catch(e){}
            try {
o66 = o1059 | o1059 << 8 | o1059 << 16 | o1059 << 24;
}catch(e){}
            try {
o82 = o34 & ~3;
}catch(e){}
            try {
if (o1060) {
                try {
o1060 = o308 + 4 - o1060 | 0;
}catch(e){}
                try {
while ((o308 | 0) < (o1060 | 0)) {
                    try {
o247[o308] = o1059;
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
o247[o308] = o1059;
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

    function o1131(o308) {
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




    // EMSCRIPTEN_END_FUNCS
    try {
return {
        o1048: o1131,
        o1141: o1127,
        o1142: o1125,
        o477: o1130,
        o220: o1126,
        o343: o1129,
        o1143: o1128,
        o140: o1109,
        o49: o1110,
        o51: o1111,
        o1144: o1112,
        o1145: o1115,
        o1146: o1116,
        o1147: o1117,
        o1148: o1118,
        o1149: o1119,
        o1150: o1120,
        o1151: o1121,
        o1152: o1122,
        o1153: o1123,
        o1154: o1124
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
    "asmPrintInt": o1055,
    "asmPrintFloat": o1056,
    "min": o204,
    "_clock": o475,
    "_fflush": o675,
    "_abort": o479,
    "___setErrNo": o351,
    "_sbrk": o345,
    "_time": o1047,
    "_emscripten_memcpy_big": o340,
    "_sysconf": o474,
    "___errno_location": o478,
    "STACKTOP": o50,
    "STACK_MAX": o271,
    "tempDoublePtr": o337,
    "ABORT": o154,
    "NaN": NaN,
    "Infinity": Infinity
}, buffer);
var o1048 = Module["_strlen"] = o1057["_strlen"];
var o1141 = Module["_free"] = o1057["_free"];
var o1142 = Module["_main"] = o1057["_main"];
var o477 = Module["_memset"] = o1057["_memset"];
var o220 = Module["_malloc"] = o1057["_malloc"];
var o343 = Module["_memcpy"] = o1057["_memcpy"];
var o1143 = Module["runPostSets"] = o1057["runPostSets"];

try {
o48.o140 = function (o85) {
    try {
return o1057['stackAlloc'](o85)
}catch(e){}
};
}catch(e){}
try {
o48.o49 = function () {
    try {
return o1057['stackSave']()
}catch(e){}
};
}catch(e){}
try {
o48.o51 = function (o11) {
    try {
o1057['stackRestore'](o11)
}catch(e){}
};
}catch(e){}


// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var o1155 = null;

// === Auto-generated postamble setup entry stuff ===

try {
if (o336) {
    try {
if (o16 || o22) {
        var o783 = Module['readBinary'](o336);
        try {
o222.set(o783, o268);
}catch(e){}
    } else {
        try {
o332('memory initializer');
}catch(e){}
        try {
o852.o859(o336, function (o783) {
            try {
o222.set(o783, o268);
}catch(e){}
            try {
o334('memory initializer');
}catch(e){}
        }, function (o783) {
            try {
throw 'could not load memory initializer ' + o336;
}catch(e){}
        });
}catch(e){}
    }
}catch(e){}
}
}catch(e){}

function o1156(o832) {
    try {
this.name = "ExitStatus";
}catch(e){}
    try {
this.o793 = "Program terminated with exit(" + o832 + ")";
}catch(e){}
    try {
this.o832 = o832;
}catch(e){}
}try {
;
}catch(e){}
try {
o1156.prototype = new Error();
}catch(e){}
try {
o1156.prototype.constructor = o1156;
}catch(e){}

var o1157;
var o1158 = null;
var o1159 = false;

try {
o331 = function o1160() {
    // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
    try {
if (!Module['calledRun'] && o1161) try {
o1162();
}catch(e){}
}catch(e){}
    try {
if (!Module['calledRun']) try {
o331 = o1160;
}catch(e){}
}catch(e){} // try this again later, after new deps are fulfilled
}
}catch(e){}

try {
Module['callMain'] = Module.o1163 = function o1163(o81) {
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
if (o18 && o1158 !== null) {
        try {
Module.o24('preload time: ' + (Date.o4() - o1158) + ' ms');
}catch(e){}
    }
}catch(e){}

    try {
o287();
}catch(e){}

    var o1164 = o81.length + 1;

    function o1165() {
        try {
for (var o82 = 0; o82 < 4 - 1; o82++) {
            try {
o1166.push(0);
}catch(e){}
        }
}catch(e){}
    }
    var o1166 = [o215(o192("/bin/this.program"), 'i8', o210)];
    try {
o1165();
}catch(e){}
    try {
for (var o82 = 0; o82 < o1164 - 1; o82 = o82 + 1) {
        try {
o1166.push(o215(o192(o81[o82]), 'i8', o210));
}catch(e){}
        try {
o1165();
}catch(e){}
    }
}catch(e){}
    try {
o1166.push(0);
}catch(e){}
    try {
o1166 = o215(o1166, 'i32', o210);
}catch(e){}

    try {
o1157 = o50;
}catch(e){}

    try {
try {

        var o30 = Module['_main'](o1164, o1166, 0);


        // if we're not running an evented main loop, it's time to exit
        try {
if (!Module['noExitRuntime']) {
            try {
o1167(o30);
}catch(e){}
        }
}catch(e){}
    } catch (o189) {
        try {
if (o189 instanceof o1156) {
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
o1159 = true;
}catch(e){}
    }
}catch(e){}
}
}catch(e){}




function o1162(o81) {
    try {
o81 = o81 || Module['arguments'];
}catch(e){}

    try {
if (o1158 === null) try {
o1158 = Date.o4();
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

    function o1168() {
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
if (Module['_main'] && o1161) {
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
o997(function () {
            try {
o997(function () {
                try {
Module['setStatus']('');
}catch(e){}
            }, 1);
}catch(e){}
            try {
if (!o154) try {
o1168();
}catch(e){}
}catch(e){}
        }, 1);
}catch(e){}
    } else {
        try {
o1168();
}catch(e){}
    }
}catch(e){}
}
try {
Module['run'] = Module.o1162 = o1162;
}catch(e){}

function o1167(o832) {
    try {
o154 = true;
}catch(e){}
    try {
o155 = o832;
}catch(e){}
    try {
o50 = o1157;
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
throw new o1156(o832);
}catch(e){}
}
try {
Module['exit'] = Module.o1167 = o1167;
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

    var o1169 = '\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.';

    try {
throw 'abort() at ' + o262() + o1169;
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
var o1161 = true;
try {
if (Module['noInitialRun']) {
    try {
o1161 = false;
}catch(e){}
}
}catch(e){}


try {
o1162();
}catch(e){}

// {{POST_RUN_ADDITIONS}}




// {{MODULE_ADDITIONS}}

////////////////////////////////////////////////////////////////////////////////
// Runner
////////////////////////////////////////////////////////////////////////////////
var o1170 = o11.o12.o13();
try {
o11.o12.o9(o1170 - o14);
}catch(e){}