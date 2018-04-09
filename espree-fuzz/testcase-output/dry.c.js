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

var o0 = 1699;

if (typeof (o1) === "undefined") {
    var o1 = {
        o2: print
    }
}
var print = function () {};

var o3 = o3 || {};
o3.o4 = (function () {
    return o3.o4 ||
        o3.o5 ||
        o3.o6 ||
        o3.o7 ||
        o3.o8 ||
        Date.o4;
})();


function o9(o10) {
    o1.o2("### SCORE: " + (100 * o0 / o10));
}

var o11 = {};
o11.o12 = {
    o13: o3.o4,
    o9: o9
};

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
if (!Module) Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');

// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var o15 = {};
for (var key in Module) {
    if (Module.hasOwnProperty(key)) {
        o15[key] = Module[key];
    }
}

// The environment setup code below is customized to use Module.
// *** Environment setup code ***
var o16 = typeof o17 === 'object' && typeof require === 'function';
var o18 = typeof o19 === 'object';
var o20 = typeof o21 === 'function';
var o22 = !o18 && !o16 && !o20;

if (o16) {
    // Expose functionality in the same simple way that the shells work
    // Note that we pollute the global namespace here, otherwise we break in node
    if (!Module['print']) Module['print'] = function print(o23) {
        o17['stdout'].write(o23 + '\n');
    };
    if (!Module['printErr']) Module['printErr'] = function o24(o23) {
        o17['stderr'].write(o23 + '\n');
    };

    var o25 = require('fs');
    var o26 = require('path');

    Module['read'] = function o27(o28, o29) {
        o28 = o26['normalize'](o28);
        var o30 = o25['readFileSync'](o28);
        // The path is absolute if the normalized version is the same as the resolved.
        if (!o30 && o28 != o26['resolve'](o28)) {
            o28 = o31.join(o32, '..', 'src', o28);
            o30 = o25['readFileSync'](o28);
        }
        if (o30 && !o29) o30 = o30.toString();
        return o30;
    };

    Module['readBinary'] = function o33(o28) {
        return Module['read'](o28, true)
    };

    Module['load'] = function load(o34) {
        o35(o27(o34));
    };

    Module['arguments'] = o17['argv'].slice(2);

    o36['exports'] = Module;
} else if (o22) {
    if (!Module['print']) Module['print'] = print;
    if (typeof o24 != 'undefined') Module['printErr'] = o24; // not present in v8 or older sm

    if (typeof o27 != 'undefined') {
        Module['read'] = o27;
    } else {
        Module['read'] = function o27() {
            throw 'no read() available (jsc?)'
        };
    }

    Module['readBinary'] = function o33(o34) {
        return o27(o34, 'binary');
    };

    if (typeof o37 != 'undefined') {
        Module['arguments'] = o37;
    } else if (typeof arguments != 'undefined') {
        Module['arguments'] = arguments;
    }

    this['Module'] = Module;

    eval("if (typeof gc === 'function' && gc.toString().indexOf('[native code]') > 0) var gc = undefined"); // wipe out the SpiderMonkey shell 'gc' function, which can confuse closure (uses it as a minified name, and it is then initted to a non-falsey value unexpectedly)
} else if (o18 || o20) {
    Module['read'] = function o27(o38) {
        var o39 = new o40();
        o39.o41('GET', o38, false);
        o39.o42(null);
        return o39.o43;
    };

    if (typeof arguments != 'undefined') {
        Module['arguments'] = arguments;
    }

    if (typeof o44 !== 'undefined') {
        if (!Module['print']) Module['print'] = function print(o23) {
            o44.o45(o23);
        };
        if (!Module['printErr']) Module['printErr'] = function o24(o23) {
            o44.o45(o23);
        };
    } else {
        // Probably a worker, and without console.log. We can do very little here...
        var o46 = false;
        if (!Module['print']) Module['print'] = (o46 && (typeof (o47) !== "undefined") ? (function (o23) {
            o47(o23);
        }) : (function (o23) {
            // self.postMessage(x); // enable this if you want stdout to be sent as messages
        }));
    }

    if (o18) {
        this['Module'] = Module;
    } else {
        Module['load'] = o21;
    }
} else {
    // Unreachable because SHELL is dependant on the others
    throw 'Unknown runtime environment. Where are we?';
}

function o35(o23) {
    eval.call(null, o23);
}
if (!Module['load'] == 'undefined' && Module['read']) {
    Module['load'] = function load(o34) {
        o35(Module['read'](o34));
    };
}
if (!Module['print']) {
    Module['print'] = function () {};
}
if (!Module['printErr']) {
    Module['printErr'] = Module['print'];
}
if (!Module['arguments']) {
    Module['arguments'] = [];
}
// *** Environment setup code ***

// Closure helpers
Module.print = Module['print'];
Module.o24 = Module['printErr'];

// Callbacks
Module['preRun'] = [];
Module['postRun'] = [];

// Merge back in the overrides
for (var key in o15) {
    if (o15.hasOwnProperty(key)) {
        Module[key] = o15[key];
    }
}



// === Auto-generated preamble library stuff ===

//========================================
// Runtime code shared with compiler
//========================================

var o48 = {
    o49: function () {
        return o50;
    },
    o51: function (o52) {
        o50 = o52;
    },
    o53: function (target, o54) {
        o54 = o54 || 4;
        if (o54 == 1) return target;
        if (o55(target) && o55(o54)) {
            return Math.ceil(target / o54) * o54;
        } else if (o55(o54) && o56(o54)) {
            return '(((' + target + ')+' + (o54 - 1) + ')&' + -o54 + ')';
        }
        return 'Math.ceil((' + target + ')/' + o54 + ')*' + o54;
    },
    o57: function (type) {
        return type in o48.o58 || type in o48.o59;
    },
    o60: function o60(type) {
        return type[type.length - 1] == '*';
    },
    o61: function o61(type) {
        if (o60(type)) return false;
        if (o62(type)) return true;
        if (/<?\{ ?[^}]* ?\}>?/.test(type)) return true; // { i32, i8 } etc. - anonymous struct types
        // See comment in isStructPointerType()
        return type[0] == '%';
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
        return o65 + o66;
    },
    o68: function (o23, o64) {
        var o65 = (o23 | 0) & (o64 | 0);
        var o66 = (Math.o67(o23 / 4294967296) & Math.o67(o64 / 4294967296)) * 4294967296;
        return o65 + o66;
    },
    o69: function (o23, o64) {
        var o65 = (o23 | 0) ^ (o64 | 0);
        var o66 = (Math.o67(o23 / 4294967296) ^ Math.o67(o64 / 4294967296)) * 4294967296;
        return o65 + o66;
    },
    o70: function (type) {
        switch (type) {
        case 'i1':
        case 'i8':
            return 1;
        case 'i16':
            return 2;
        case 'i32':
            return 4;
        case 'i64':
            return 8;
        case 'float':
            return 4;
        case 'double':
            return 8;
        default:
            {
                if (type[type.length - 1] === '*') {
                    return o48.o71; // A pointer
                } else if (type[0] === 'i') {
                    var o72 = parseInt(type.substr(1));
                    o73(o72 % 8 === 0);
                    return o72 / 8;
                } else {
                    return 0;
                }
            }
        }
    },
    o74: function (type) {
        return Math.o75(o48.o70(type), o48.o71);
    },
    o76: function o76(o77, o78) {
        var o79 = {};
        if (o78) {
            return o77.filter(function (o80) {
                if (o79[o80[o78]]) return false;
                o79[o80[o78]] = true;
                return true;
            });
        } else {
            return o77.filter(function (o80) {
                if (o79[o80]) return false;
                o79[o80] = true;
                return true;
            });
        }
    },
    set: function set() {
        var o81 = typeof arguments[0] === 'object' ? arguments[0] : arguments;
        var o30 = {};
        for (var o82 = 0; o82 < o81.length; o82++) {
            o30[o81[o82]] = 0;
        }
        return o30;
    },
    o83: 8,
    o84: function (type, o85, o86) {
        // we align i64s and doubles on 64-bit boundaries, unlike x86
        if (!o86 && (type == 'i64' || type == 'double')) return 8;
        if (!type) return Math.o87(o85, 8); // align structures internally to 64 bits
        return Math.o87(o85 || (type ? o48.o74(type) : 0), o48.o71);
    },
    o88: function o88(type) {
        type.o89 = 0;
        type.o90 = 0;
        var o91 = [];
        var o92 = -1;
        var index = 0;
        type.o93 = type.o94.map(function (o95) {
            index++;
            var o85, o90;
            if (o48.o57(o95) || o48.o60(o95)) {
                o85 = o48.o70(o95); // pack char; char; in structs, also char[X]s.
                o90 = o48.o84(o95, o85);
            } else if (o48.o61(o95)) {
                if (o95[1] === '0') {
                    // this is [0 x something]. When inside another structure like here, it must be at the end,
                    // and it adds no size
                    // XXX this happens in java-nbody for example... assert(index === type.fields.length, 'zero-length in the middle!');
                    o85 = 0;
                    if (o96.o97[o95]) {
                        o90 = o48.o84(null, o96.o97[o95].o90);
                    } else {
                        o90 = type.o90 || o71;
                    }
                } else {
                    o85 = o96.o97[o95].o89;
                    o90 = o48.o84(null, o96.o97[o95].o90);
                }
            } else if (o95[0] == 'b') {
                // bN, large number field, like a [N x i8]
                o85 = o95.substr(1) | 0;
                o90 = 1;
            } else if (o95[0] === '<') {
                // vector type
                o85 = o90 = o96.o97[o95].o89; // fully aligned
            } else if (o95[0] === 'i') {
                // illegal integer field, that could not be legalized because it is an internal structure field
                // it is ok to have such fields, if we just use them as markers of field size and nothing more complex
                o85 = o90 = parseInt(o95.substr(1)) / 8;
                o73(o85 % 1 === 0, 'cannot handle non-byte-size field ' + o95);
            } else {
                o73(false, 'invalid type for calculateStructAlignment');
            }
            if (type.o98) o90 = 1;
            type.o90 = Math.o75(type.o90, o90);
            var o99 = o48.o100(type.o89, o90); // if necessary, place this on aligned memory
            type.o89 = o99 + o85;
            if (o92 >= 0) {
                o91.push(o99 - o92);
            }
            o92 = o99;
            return o99;
        });
        if (type.o101 && type.o101[0] === '[') {
            // arrays have 2 elements, so we get the proper difference. then we scale here. that way we avoid
            // allocating a potentially huge array for [999999 x i8] etc.
            type.o89 = parseInt(type.o101.substr(1)) * type.o89 / 2;
        }
        type.o89 = o48.o100(type.o89, type.o90);
        if (o91.length == 0) {
            type.o102 = type.o89;
        } else if (o48.o76(o91).length == 1) {
            type.o102 = o91[0];
        }
        type.o103 = (type.o102 != 1);
        return type.o93;
    },
    o104: function (o105, o106, o107) {
        var type, o108;
        if (o106) {
            o107 = o107 || 0;
            type = (typeof o96 === 'undefined' ? o48.o109 : o96.o97)[o106];
            if (!type) return null;
            if (type.o94.length != o105.length) {
                o24('Number of named fields must match the type for ' + o106 + ': possibly duplicate struct names. Cannot return structInfo');
                return null;
            }
            o108 = type.o93;
        } else {
            var type = {
                o94: o105.map(function (o80) {
                    return o80[0]
                })
            };
            o108 = o48.o88(type);
        }
        var o30 = {
            o110: type.o89
        };
        if (o106) {
            o105.forEach(function (o80, o82) {
                if (typeof o80 === 'string') {
                    o30[o80] = o108[o82] + o107;
                } else {
                    // embedded struct
                    var key;
                    for (var o111 in o80) key = o111;
                    o30[key] = o48.o104(o80[key], type.o94[o82], o108[o82]);
                }
            });
        } else {
            o105.forEach(function (o80, o82) {
                o30[o80[1]] = o108[o82];
            });
        }
        return o30;
    },
    o112: function (o113, o114, o81) {
        if (o81 && o81.length) {
            if (!o81.splice) o81 = Array.prototype.slice.call(o81);
            o81.splice(0, 0, o114);
            return Module['dynCall_' + o113].apply(null, o81);
        } else {
            return Module['dynCall_' + o113].call(null, o114);
        }
    },
    o115: [],
    addFunction: function (o116) {
        for (var o82 = 0; o82 < o48.o115.length; o82++) {
            if (!o48.o115[o82]) {
                o48.o115[o82] = o116;
                return 2 * (1 + o82);
            }
        }
        throw 'Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.';
    },
    o117: function (index) {
        o48.o115[(index - 2) / 2] = null;
    },
    o118: function (o119, o120) {
        // code is a constant string on the heap, so we can cache these
        if (!o48.o121) o48.o121 = {};
        var o116 = o48.o121[o119];
        if (o116) return o116;
        var o81 = [];
        for (var o82 = 0; o82 < o120; o82++) {
            o81.push(String.fromCharCode(36) + o82); // $0, $1 etc
        }
        o119 = o122(o119);
        if (o119[0] === '"') {
            // tolerate EM_ASM("..code..") even though EM_ASM(..code..) is correct
            if (o119.indexOf('"', 1) === o119.length - 1) {
                o119 = o119.substr(1, o119.length - 2);
            } else {
                // something invalid happened, e.g. EM_ASM("..code($0)..", input)
                abort('invalid EM_ASM input |' + o119 + '|. Please use EM_ASM(..code..) (no quotes) or EM_ASM({ ..code($0).. }, input) (to input values)');
            }
        }
        return o48.o121[o119] = eval('(function(' + o81.join(',') + '){ ' + o119 + ' })'); // new Function does not allow upvars in node
    },
    o123: function (o124) {
        if (!o48.o123.o125) o48.o123.o125 = {};
        if (!o48.o123.o125[o124]) {
            o48.o123.o125[o124] = 1;
            Module.o24(o124);
        }
    },
    o126: {},
    o127: function (o116, o113) {
        o73(o113);
        if (!o48.o126[o116]) {
            o48.o126[o116] = function o128() {
                return o48.o112(o113, o116, arguments);
            };
        }
        return o48.o126[o116];
    },
    o129: function () {
        var buffer = [];
        var o130 = 0;
        this.o131 = function (o119) {
            o119 = o119 & 0xFF;

            if (buffer.length == 0) {
                if ((o119 & 0x80) == 0x00) { // 0xxxxxxx
                    return String.fromCharCode(o119);
                }
                buffer.push(o119);
                if ((o119 & 0xE0) == 0xC0) { // 110xxxxx
                    o130 = 1;
                } else if ((o119 & 0xF0) == 0xE0) { // 1110xxxx
                    o130 = 2;
                } else { // 11110xxx
                    o130 = 3;
                }
                return '';
            }

            if (o130) {
                buffer.push(o119);
                o130--;
                if (o130 > 0) return '';
            }

            var o132 = buffer[0];
            var o133 = buffer[1];
            var o134 = buffer[2];
            var o135 = buffer[3];
            var o30;
            if (buffer.length == 2) {
                o30 = String.fromCharCode(((o132 & 0x1F) << 6) | (o133 & 0x3F));
            } else if (buffer.length == 3) {
                o30 = String.fromCharCode(((o132 & 0x0F) << 12) | ((o133 & 0x3F) << 6) | (o134 & 0x3F));
            } else {
                // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                var o136 = ((o132 & 0x07) << 18) | ((o133 & 0x3F) << 12) |
                    ((o134 & 0x3F) << 6) | (o135 & 0x3F);
                o30 = String.fromCharCode(
                    Math.floor((o136 - 0x10000) / 0x400) + 0xD800, (o136 - 0x10000) % 0x400 + 0xDC00);
            }
            buffer.length = 0;
            return o30;
        }
        this.o137 = function o137(o138) {
            o138 = unescape(encodeURIComponent(o138));
            var o30 = [];
            for (var o82 = 0; o82 < o138.length; o82++) {
                o30.push(o138.charCodeAt(o82));
            }
            return o30;
        }
    },
    o139: function (name) {
        throw 'You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work';
    },
    o140: function (o85) {
        var o30 = o50;
        o50 = (o50 + o85) | 0;
        o50 = (((o50) + 7) & -8);
        return o30;
    },
    o141: function (o85) {
        var o30 = o142;
        o142 = (o142 + o85) | 0;
        o142 = (((o142) + 7) & -8);
        return o30;
    },
    o143: function (o85) {
        var o30 = o144;
        o144 = (o144 + o85) | 0;
        o144 = (((o144) + 7) & -8);
        if (o144 >= o145) o146();;
        return o30;
    },
    o100: function (o85, o54) {
        var o30 = o85 = Math.ceil((o85) / (o54 ? o54 : 8)) * (o54 ? o54 : 8);
        return o30;
    },
    o147: function (o148, o149, o150) {
        var o30 = (o150 ? ((+((o148 >>> 0))) + ((+((o149 >>> 0))) * (+4294967296))) : ((+((o148 >>> 0))) + ((+((o149 | 0))) * (+4294967296))));
        return o30;
    },
    o151: 8,
    o71: 4,
    o152: 0
}


Module['Runtime'] = o48;




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
    if (!o182) {
        abort('Assertion failed: ' + o124);
    }
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
    return o187(o188(o78), o185, o186, o81);
}
Module["ccall"] = o184;

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function o188(o78) {
    try {
        var o116 = Module['_' + o78]; // closure exported function
        if (!o116) o116 = eval('_' + o78); // explicit lookup
    } catch (o189) {}
    o73(o116, 'Cannot call unknown function ' + o78 + ' (perhaps LLVM optimizations or closure removed it?)');
    return o116;
}

// Internal function that does a C call using a function, not an identifier
function o187(o116, o185, o186, o81) {
    var o190 = 0;

    function o191(value, type) {
        if (type == 'string') {
            if (value === null || value === undefined || value === 0) return 0; // null string
            value = o192(value);
            type = 'array';
        }
        if (type == 'array') {
            if (!o190) o190 = o48.o49();
            var o30 = o48.o140(value.length);
            o193(value, o30);
            return o30;
        }
        return value;
    }

    function o194(value, type) {
        if (type == 'string') {
            return o122(value);
        }
        o73(type != 'array');
        return value;
    }
    var o82 = 0;
    var o195 = o81 ? o81.map(function (o196) {
        return o191(o196, o186[o82++]);
    }) : [];
    var o30 = o194(o116.apply(null, o195), o185);
    if (o190) o48.o51(o190);
    return o30;
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
    return function () {
        return o187(o116, o185, o186, Array.prototype.slice.call(arguments));
    }
}
Module["cwrap"] = o197;

// Sets a value in memory in a dynamic way at run-time. Uses the
// type data. This is the same as makeSetValue, except that
// makeSetValue is done at compile-time and generates the needed
// code then, whereas this function picks the right code at
// run-time.
// Note that setValue and getValue only do *aligned* writes and reads!
// Note that ccall uses JS types as for defining types, while setValue and
// getValue need LLVM types ('i8', 'i32') - this is a lower-level operation
function o198(o114, value, type, o199) {
    type = type || 'i8';
    if (type.charAt(type.length - 1) === '*') type = 'i32'; // pointers are 32-bit
    switch (type) {
    case 'i1':
        o200[(o114)] = value;
        break;
    case 'i8':
        o200[(o114)] = value;
        break;
    case 'i16':
        o201[((o114) >> 1)] = value;
        break;
    case 'i32':
        o202[((o114) >> 2)] = value;
        break;
    case 'i64':
        (o170 = [value >>> 0, (o168 = value, (+(o203(o168))) >= (+1) ? (o168 > (+0) ? ((o204((+(o205((o168) / (+4294967296)))), (+4294967295))) | 0) >>> 0 : (~~((+(o206((o168 - +(((~~(o168))) >>> 0)) / (+4294967296)))))) >>> 0) : 0)], o202[((o114) >> 2)] = o170[0], o202[(((o114) + (4)) >> 2)] = o170[1]);
        break;
    case 'float':
        o207[((o114) >> 2)] = value;
        break;
    case 'double':
        o208[((o114) >> 3)] = value;
        break;
    default:
        abort('invalid type for setValue: ' + type);
    }
}
Module['setValue'] = o198;

// Parallel to setValue.
function o209(o114, type, o199) {
    type = type || 'i8';
    if (type.charAt(type.length - 1) === '*') type = 'i32'; // pointers are 32-bit
    switch (type) {
    case 'i1':
        return o200[(o114)];
    case 'i8':
        return o200[(o114)];
    case 'i16':
        return o201[((o114) >> 1)];
    case 'i32':
        return o202[((o114) >> 2)];
    case 'i64':
        return o202[((o114) >> 2)];
    case 'float':
        return o207[((o114) >> 2)];
    case 'double':
        return o208[((o114) >> 3)];
    default:
        abort('invalid type for setValue: ' + type);
    }
    return null;
}
Module['getValue'] = o209;

var o210 = 0; // Tries to use _malloc()
var o211 = 1; // Lives for the duration of the current function call
var o212 = 2; // Cannot be freed
var o213 = 3; // Cannot be freed except through sbrk
var o214 = 4; // Do not allocate
Module['ALLOC_NORMAL'] = o210;
Module['ALLOC_STACK'] = o211;
Module['ALLOC_STATIC'] = o212;
Module['ALLOC_DYNAMIC'] = o213;
Module['ALLOC_NONE'] = o214;

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
    if (typeof o216 === 'number') {
        o218 = true;
        o85 = o216;
    } else {
        o218 = false;
        o85 = o216.length;
    }

    var o219 = typeof o97 === 'string' ? o97 : null;

    var o30;
    if (o217 == o214) {
        o30 = o114;
    } else {
        o30 = [o220, o48.o140, o48.o141, o48.o143][o217 === undefined ? o212 : o217](Math.o75(o85, o219 ? 1 : o97.length));
    }

    if (o218) {
        var o114 = o30,
            o221;
        o73((o30 & 3) == 0);
        o221 = o30 + (o85 & ~3);
        for (; o114 < o221; o114 += 4) {
            o202[((o114) >> 2)] = 0;
        }
        o221 = o30 + o85;
        while (o114 < o221) {
            o200[((o114++) | 0)] = 0;
        }
        return o30;
    }

    if (o219 === 'i8') {
        if (o216.subarray || o216.slice) {
            o222.set(o216, o30);
        } else {
            o222.set(new Uint8Array(o216), o30);
        }
        return o30;
    }

    var o82 = 0,
        type, o223, o224;
    while (o82 < o85) {
        var o99 = o216[o82];

        if (typeof o99 === 'function') {
            o99 = o48.o225(o99);
        }

        type = o219 || o97[o82];
        if (type === 0) {
            o82++;
            continue;
        }

        if (type == 'i64') type = 'i32'; // special case: we have one i32 here, and one i32 later

        o198(o30 + o82, o99, type);

        // no need to look up size unless type changes, so cache it
        if (o224 !== type) {
            o223 = o48.o70(type);
            o224 = type;
        }
        o82 += o223;
    }

    return o30;
}
Module['allocate'] = o215;

function o122(o114, /* optional */ length) {
    // TODO: use TextDecoder
    // Find the length, and check for UTF while doing so
    var o226 = false;
    var o227;
    var o82 = 0;
    while (1) {
        o227 = o222[(((o114) + (o82)) | 0)];
        if (o227 >= 128) o226 = true;
        else if (o227 == 0 && !length) break;
        o82++;
        if (length && o82 == length) break;
    }
    if (!length) length = o82;

    var o30 = '';

    if (!o226) {
        var o228 = 1024; // split up into chunks, because .apply on a huge string can overflow the stack
        var o99;
        while (length > 0) {
            o99 = String.fromCharCode.apply(String, o222.subarray(o114, o114 + Math.o87(length, o228)));
            o30 = o30 ? o30 + o99 : o99;
            o114 += o228;
            length -= o228;
        }
        return o30;
    }

    var o229 = new o48.o129();
    for (o82 = 0; o82 < length; o82++) {
        o227 = o222[(((o114) + (o82)) | 0)];
        o30 += o229.o131(o227);
    }
    return o30;
}
Module['Pointer_stringify'] = o122;

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.
function o230(o114) {
    var o82 = 0;

    var o231 = '';
    while (1) {
        var o232 = o201[(((o114) + (o82 * 2)) >> 1)];
        if (o232 == 0)
            return o231;
        ++o82;
        // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
        o231 += String.fromCharCode(o232);
    }
}
Module['UTF16ToString'] = o230;

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16LE form. The copy will require at most (str.length*2+1)*2 bytes of space in the HEAP.
function o233(o231, o234) {
    for (var o82 = 0; o82 < o231.length; ++o82) {
        // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
        var o232 = o231.charCodeAt(o82); // possibly a lead surrogate
        o201[(((o234) + (o82 * 2)) >> 1)] = o232;
    }
    // Null-terminate the pointer to the HEAP.
    o201[(((o234) + (o231.length * 2)) >> 1)] = 0;
}
Module['stringToUTF16'] = o233;

// Given a pointer 'ptr' to a null-terminated UTF32LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.
function o235(o114) {
    var o82 = 0;

    var o231 = '';
    while (1) {
        var o236 = o202[(((o114) + (o82 * 4)) >> 2)];
        if (o236 == 0)
            return o231;
        ++o82;
        // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
        if (o236 >= 0x10000) {
            var o237 = o236 - 0x10000;
            o231 += String.fromCharCode(0xD800 | (o237 >> 10), 0xDC00 | (o237 & 0x3FF));
        } else {
            o231 += String.fromCharCode(o236);
        }
    }
}
Module['UTF32ToString'] = o235;

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32LE form. The copy will require at most (str.length+1)*4 bytes of space in the HEAP,
// but can use less, since str.length does not return the number of characters in the string, but the number of UTF-16 code units in the string.
function o238(o231, o234) {
    var o239 = 0;
    for (var o240 = 0; o240 < o231.length; ++o240) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
        var o232 = o231.charCodeAt(o240); // possibly a lead surrogate
        if (o232 >= 0xD800 && o232 <= 0xDFFF) {
            var o241 = o231.charCodeAt(++o240);
            o232 = 0x10000 + ((o232 & 0x3FF) << 10) | (o241 & 0x3FF);
        }
        o202[(((o234) + (o239 * 4)) >> 2)] = o232;
        ++o239;
    }
    // Null-terminate the pointer to the HEAP.
    o202[(((o234) + (o239 * 4)) >> 2)] = 0;
}
Module['stringToUTF32'] = o238;

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
        if (o23) Module.print(o23);
        Module.print(o116);
        var o246 = '';
        for (var o247 = 0; o247 < o82; o247++) o246 += ' ';
        Module.print(o246 + '^');
    }

    function o248() {
        o82++;
        if (o116[o82] === 'K') o82++; // ignore const
        var o249 = [];
        while (o116[o82] !== 'E') {
            if (o116[o82] === 'S') { // substitution
                o82++;
                var next = o116.indexOf('_', o82);
                var o250 = o116.substring(o82, next) || 0;
                o249.push(o244[o250] || '?');
                o82 = next + 1;
                continue;
            }
            if (o116[o82] === 'C') { // constructor
                o249.push(o249[o249.length - 1]);
                o82 += 2;
                continue;
            }
            var o85 = parseInt(o116.substr(o82));
            var o246 = o85.toString().length;
            if (!o85 || !o246) {
                o82--;
                break;
            } // counter i++ below us
            var o99 = o116.substr(o82 + o246, o85);
            o249.push(o99);
            o244.push(o99);
            o82 += o246 + o85;
        }
        o82++; // skip E
        return o249;
    }

    function parse(o251, o252, o253) { // main parser
        o252 = o252 || Infinity;
        var o30 = '',
            o254 = [];

        function o255() {
            return '(' + o254.join(', ') + ')';
        }
        var name;
        if (o116[o82] === 'N') {
            // namespaced N-E
            name = o248().join('::');
            o252--;
            if (o252 === 0) return o251 ? [name] : name;
        } else {
            // not namespaced
            if (o116[o82] === 'K' || (o245 && o116[o82] === 'L')) o82++; // ignore const and first 'L'
            var o85 = parseInt(o116.substr(o82));
            if (o85) {
                var o246 = o85.toString().length;
                name = o116.substr(o82 + o246, o85);
                o82 += o246 + o85;
            }
        }
        o245 = false;
        if (o116[o82] === 'I') {
            o82++;
            var o256 = parse(true);
            var o257 = parse(true, 1, true);
            o30 += o257[0] + ' ' + name + '<' + o256.join(', ') + '>';
        } else {
            o30 = name;
        }
        paramLoop: while (o82 < o116.length && o252-- > 0) {
            //dump('paramLoop');
            var o258 = o116[o82++];
            if (o258 in o243) {
                o254.push(o243[o258]);
            } else {
                switch (o258) {
                case 'P':
                    o254.push(parse(true, 1, true)[0] + '*');
                    break; // pointer
                case 'R':
                    o254.push(parse(true, 1, true)[0] + '&');
                    break; // reference
                case 'L':
                    { // literal
                        o82++; // skip basic type
                        var o259 = o116.indexOf('E', o82);
                        var o85 = o259 - o82;
                        o254.push(o116.substr(o82, o85));
                        o82 += o85 + 2; // size + 'EE'
                        break;
                    }
                case 'A':
                    { // array
                        var o85 = parseInt(o116.substr(o82));
                        o82 += o85.toString().length;
                        if (o116[o82] !== '_') throw '?';
                        o82++; // skip _
                        o254.push(parse(true, 1, true)[0] + ' [' + o85 + ']');
                        break;
                    }
                case 'E':
                    break o260;
                default:
                    o30 += '?' + o258;
                    break o260paramLoop: while (i < func.length && limit-- > 0) {
            //dump('paramLoop');
            var c = func[i++];
            if (c in basicTypes) {
                list.push(basicTypes[c]);
            } else {
                switch (c) {
                case 'P':
                    list.push(parse(true, 1, true)[0] + '*');
                    break; // pointer
                case 'R':
                    list.push(parse(true, 1, true)[0] + '&');
                    break; // reference
                case 'L':
                    { // literal
                        i++; // skip basic type
                        var end = func.indexOf('E', i);
                        var size = end - i;
                        list.push(func.substr(i, size));
                        i += size + 2; // size + 'EE'
                        break;
                    }
                case 'A':
                    { // array
                        var size = parseInt(func.substr(i));
                        i += size.toString().length;
                        if (func[i] !== '_') throw '?';
                        i++; // skip _
                        list.push(parse(true, 1, true)[0] + ' [' + size + ']');
                        break;
                    }
                case 'E':
                    break paramLoop;
                default:
                    ret += '?' + c;
                    break paramLoopo260: while (i < func.length && limit-- > 0) {
            //dump('paramLoop');
            var c = func[i++];
            if (c in basicTypes) {
                list.push(basicTypes[c]);
            } else {
                switch (c) {
                case 'P':
                    list.push(parse(true, 1, true)[0] + '*');
                    break; // pointer
                case 'R':
                    list.push(parse(true, 1, true)[0] + '&');
                    break; // reference
                case 'L':
                    { // literal
                        i++; // skip basic type
                        var end = func.indexOf('E', i);
                        var size = end - i;
                        list.push(func.substr(i, size));
                        i += size + 2; // size + 'EE'
                        break;
                    }
                case 'A':
                    { // array
                        var size = parseInt(func.substr(i));
                        i += size.toString().length;
                        if (func[i] !== '_') throw '?';
                        i++; // skip _
                        list.push(parse(true, 1, true)[0] + ' [' + size + ']');
                        break;
                    }
                case 'E':
                    break paramLoop;
                default:
                    ret += '?' + c;
                    break paramLoop;
                }
            }
        }
        if (!o253 && o254.length === 1 && o254[0] === 'void') o254 = []; // avoid (void)
        return o251 ? o254 : o30 + o255();
    }
    try {
        // Special-case the entry point, since its name differs from other name mangling.
        if (o116 == 'Object._main' || o116 == '_main') {
            return 'main()';
        }
        if (typeof o116 === 'number') o116 = o122(o116);
        if (o116[0] !== '_') return o116;
        if (o116[1] !== '_') return o116; // C function
        if (o116[2] !== 'Z') return o116;
        switch (o116[3]) {
        case 'n':
            return 'operator new()';
        case 'd':
            return 'operator delete()';
        }
        return parse();
    } catch (o189) {
        return o116;
    }
}

function o261(o124) {
    return o124.replace(/__Z[\w\d_]+/g, function (o23) {
        var o64 = o242(o23);
        return o23 === o64 ? o23 : (o23 + ' [' + o64 + ']')
    });
}

function o262() {
    var o190 = new Error().o190;
    return o190 ? o261(o190) : '(no stack trace available)'; // Stack trace is not available at least on IE10 and Safari 6.
}

// Memory management

var o263 = 4096;

function o264(o23) {
    return (o23 + 4095) & -4096;
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
    abort('Cannot enlarge memory arrays. Either (1) compile with -s TOTAL_MEMORY=X with X higher than the current value ' + o145 + ', (2) compile with ALLOW_MEMORY_GROWTH which adjusts the size at runtime but prevents some optimizations, or (3) set Module.TOTAL_MEMORY before the program runs.');
}

var o273 = Module['TOTAL_STACK'] || 5242880;
var o145 = Module['TOTAL_MEMORY'] || 16777216;
var o274 = Module['FAST_MEMORY'] || 2097152;

var o275 = 4096;
while (o275 < o145 || o275 < 2 * o273) {
    if (o275 < 16 * 1024 * 1024) {
        o275 *= 2;
    } else {
        o275 += 16 * 1024 * 1024
    }
}
if (o275 !== o145) {
    Module.o24('increasing TOTAL_MEMORY to ' + o275 + ' to be more reasonable');
    o145 = o275;
}

// Initialize the runtime's memory
// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
o73(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && !!(new Int32Array(1)['subarray']) && !!(new Int32Array(1)['set']),
    'JS engine does not provide full typed array support');

var buffer = new ArrayBuffer(o145);
o200 = new Int8Array(buffer);
o201 = new Int16Array(buffer);
o202 = new Int32Array(buffer);
o222 = new Uint8Array(buffer);
o266 = new Uint16Array(buffer);
o267 = new Uint32Array(buffer);
o207 = new Float32Array(buffer);
o208 = new Float64Array(buffer);

// Endianness check (note: assumes compiler arch was little-endian)
o202[0] = 255;
o73(o222[0] === 255 && o222[3] === 0, 'Typed arrays 2 must be run on a little-endian system');

Module['HEAP'] = o265;
Module['HEAP8'] = o200;
Module['HEAP16'] = o201;
Module['HEAP32'] = o202;
Module['HEAPU8'] = o222;
Module['HEAPU16'] = o266;
Module['HEAPU32'] = o267;
Module['HEAPF32'] = o207;
Module['HEAPF64'] = o208;

function o276(o277) {
    while (o277.length > 0) {
        var o278 = o277.shift();
        if (typeof o278 == 'function') {
            o278();
            continue;
        }
        var o116 = o278.o116;
        if (typeof o116 === 'number') {
            if (o278.o196 === undefined) {
                o48.o112('v', o116);
            } else {
                o48.o112('vi', o116, [o278.o196]);
            }
        } else {
            o116(o278.o196 === undefined ? null : o278.o196);
        }
    }
}

var o279 = []; // functions called before the runtime is initialized
var o280 = []; // functions called during startup
var o281 = []; // functions called when main() is to be run
var o282 = []; // functions called during shutdown
var o283 = []; // functions called after the runtime has exited

var o284 = false;

function o285() {
    // compatibility - merge in anything from Module['preRun'] at this time
    if (Module['preRun']) {
        if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
        while (Module['preRun'].length) {
            o286(Module['preRun'].shift());
        }
    }
    o276(o279);
}

function o287() {
    if (o284) return;
    o284 = true;
    o276(o280);
}

function o288() {
    o276(o281);
}

function o289() {
    o276(o282);
}

function o290() {
    // compatibility - merge in anything from Module['postRun'] at this time
    if (Module['postRun']) {
        if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
        while (Module['postRun'].length) {
            o291(Module['postRun'].shift());
        }
    }
    o276(o283);
}

function o286(o292) {
    o279.unshift(o292);
}
Module['addOnPreRun'] = Module.o286 = o286;

function o293(o292) {
    o280.unshift(o292);
}
Module['addOnInit'] = Module.o293 = o293;

function o294(o292) {
    o281.unshift(o292);
}
Module['addOnPreMain'] = Module.o294 = o294;

function o295(o292) {
    o282.unshift(o292);
}
Module['addOnExit'] = Module.o295 = o295;

function o291(o292) {
    o283.unshift(o292);
}
Module['addOnPostRun'] = Module.o291 = o291;

// Tools

// This processes a JS string into a C-line array of numbers, 0-terminated.
// For LLVM-originating strings, see parser.js:parseLLVMString function
function o192(o296, o297, length /* optional */ ) {
    var o30 = (new o48.o129()).o137(o296);
    if (length) {
        o30.length = length;
    }
    if (!o297) {
        o30.push(0);
    }
    return o30;
}
Module['intArrayFromString'] = o192;

function o298(o299) {
    var o30 = [];
    for (var o82 = 0; o82 < o299.length; o82++) {
        var o300 = o299[o82];
        if (o300 > 0xFF) {
            o300 &= 0xFF;
        }
        o30.push(String.fromCharCode(o300));
    }
    return o30.join('');
}
Module['intArrayToString'] = o298;

// Write a Javascript array to somewhere in the heap
function o301(o138, buffer, o297) {
    var o299 = o192(o138, o297);
    var o82 = 0;
    while (o82 < o299.length) {
        var o300 = o299[o82];
        o200[(((buffer) + (o82)) | 0)] = o300;
        o82 = o82 + 1;
    }
}
Module['writeStringToMemory'] = o301;

function o193(o299, buffer) {
    for (var o82 = 0; o82 < o299.length; o82++) {
        o200[(((buffer) + (o82)) | 0)] = o299[o82];
    }
}
Module['writeArrayToMemory'] = o193;

function o302(o231, buffer, o297) {
    for (var o82 = 0; o82 < o231.length; o82++) {
        o200[(((buffer) + (o82)) | 0)] = o231.charCodeAt(o82);
    }
    if (!o297) o200[(((buffer) + (o231.length)) | 0)] = 0;
}
Module['writeAsciiToMemory'] = o302;

function o303(value, o72, o304) {
    if (value >= 0) {
        return value;
    }
    return o72 <= 32 ? 2 * Math.abs(1 << (o72 - 1)) + value // Need some trickery, since if bits == 32, we are right at the limit of the bits JS uses in bitshifts
        : Math.o305(2, o72) + value;
}

function o306(value, o72, o304) {
    if (value <= 0) {
        return value;
    }
    var o307 = o72 <= 32 ? Math.abs(1 << (o72 - 1)) // abs is needed if bits == 32
        : Math.o305(2, o72 - 1);
    if (value >= o307 && (o72 <= 32 || value > o307)) { // for huge values, we can hit the precision limit and always get true here. so don't do that
        // but, in general there is no perfect solution here. With 64-bit ints, we get rounding and errors
        // TODO: In i64 mode 1, resign the two parts separately and safely
        value = -2 * o307 + value; // Cannot bitshift half, as it may be at the limit of the bits JS uses in bitshifts
    }
    return value;
}

// check for imul support, and also for correctness ( https://bugs.webkit.org/show_bug.cgi?id=126345 )
if (!Math['imul'] || Math['imul'](0xffffffff, 5) !== -5) Math['imul'] = function imul(o247, o308) {
    var o309 = o247 >>> 16;
    var o310 = o247 & 0xffff;
    var o311 = o308 >>> 16;
    var o312 = o308 & 0xffff;
    return (o310 * o312 + ((o309 * o312 + o310 * o311) << 16)) | 0;
};
Math.imul = Math['imul'];


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
    o329++;
    if (Module['monitorRunDependencies']) {
        Module['monitorRunDependencies'](o329);
    }
}
Module['addRunDependency'] = o332;

function o334(o333) {
    o329--;
    if (Module['monitorRunDependencies']) {
        Module['monitorRunDependencies'](o329);
    }
    if (o329 == 0) {
        if (o330 !== null) {
            o335(o330);
            o330 = null;
        }
        if (o331) {
            var o278 = o331;
            o331 = null;
            o278(); // can add another dependenciesFulfilled
        }
    }
}
Module['removeRunDependency'] = o334;

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data


var o336 = null;

// === Body ===




o268 = 8;

o142 = o268 + o48.o100(11195);
/* global initializers */
o280.push();


/* memory initializer */
o215([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 72, 82, 89, 83, 84, 79, 78, 69, 32, 80, 82, 79, 71, 82, 65, 77, 44, 32, 83, 79, 77, 69, 32, 83, 84, 82, 73, 78, 71], "i8", o214, o48.o151);




var o337 = o48.o100(o215(12, "i8", o212), 8);

o73(o337 % 8 == 0);

function o338(o114) { // functions, because inlining this code increases code size too much

    o200[o337] = o200[o114];

    o200[o337 + 1] = o200[o114 + 1];

    o200[o337 + 2] = o200[o114 + 2];

    o200[o337 + 3] = o200[o114 + 3];

}

function o339(o114) {

    o200[o337] = o200[o114];

    o200[o337 + 1] = o200[o114 + 1];

    o200[o337 + 2] = o200[o114 + 2];

    o200[o337 + 3] = o200[o114 + 3];

    o200[o337 + 4] = o200[o114 + 4];

    o200[o337 + 5] = o200[o114 + 5];

    o200[o337 + 6] = o200[o114 + 6];

    o200[o337 + 7] = o200[o114 + 7];

}




function o340(o341, o342, o250) {
    o222.set(o222.subarray(o342, o342 + o250), o341);
    return o341;
}
Module["_memcpy"] = o343;
var o344 = o343;

function o345(o346) {
    // Implement a Linux-like 'memory area' for our 'process'.
    // Changes the size of the memory area by |bytes|; returns the
    // address of the previous top ('break') of the memory area
    // We control the "dynamic" memory - DYNAMIC_BASE to DYNAMICTOP
    var o347 = o345;
    if (!o347.o348) {
        o144 = o264(o144); // make sure we start out aligned
        o347.o348 = true;
        o73(o48.o143);
        o347.o349 = o48.o143;
        o48.o143 = function () {
            abort('cannot dynamically allocate, sbrk now has control')
        };
    }
    var o30 = o144;
    if (o346 != 0) o347.o349(o346);
    return o30; // Previous break location.
}



var o350 = 0;

function o351(value) {
    // For convenient setting and returning of errno.
    o202[((o350) >> 2)] = value;
    return value;
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
    switch (name) {
    case 30:
        return o263;
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
        return 200809;
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
        return -1;
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
        return 1;
    case 74:
    case 60:
    case 69:
    case 70:
    case 4:
        return 1024;
    case 31:
    case 42:
    case 72:
        return 32;
    case 87:
    case 26:
    case 33:
        return 2147483647;
    case 34:
    case 1:
        return 47839;
    case 38:
    case 36:
        return 99;
    case 43:
    case 37:
        return 2048;
    case 0:
        return 2097152;
    case 3:
        return 65536;
    case 28:
        return 32768;
    case 44:
        return 32767;
    case 75:
        return 16384;
    case 39:
        return 1000;
    case 89:
        return 700;
    case 71:
        return 256;
    case 40:
        return 255;
    case 2:
        return 100;
    case 180:
        return 64;
    case 25:
        return 20;
    case 5:
        return 16;
    case 6:
        return 6;
    case 73:
        return 4;
    case 84:
        return 1;
    }
    o351(o352.o375);
    return -1;
}

function o475() {
    if (o475.o476 === undefined) o475.o476 = Date.o4();
    return Math.floor((Date.o4() - o475.o476) * (1000000 / 1000));
}


Module["_memset"] = o477;

function o478() {
    return o350;
}

function o479() {
    Module['abort']();
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
        o481.o482[o486] = {
            input: [],
            o488: [],
            o487: o487
        };
        o489.o490(o486, o481.o491);
    },
    o491: {
        o41: function (o492) {
            var o493 = o481.o482[o492.o494.o495];
            if (!o493) {
                throw new o489.o496(o352.o372);
            }
            o492.o493 = o493;
            o492.o497 = false;
        },
        o498: function (o492) {
            // flush any pending line data
            if (o492.o493.o488.length) {
                o492.o493.o487.o499(o492.o493, 10);
            }
        },
        o27: function (o492, buffer, o107, length, o500 /* ignored */ ) {
            if (!o492.o493 || !o492.o493.o487.o501) {
                throw new o489.o496(o352.o358);
            }
            var o502 = 0;
            for (var o82 = 0; o82 < length; o82++) {
                var o503;
                try {
                    o503 = o492.o493.o487.o501(o492.o493);
                } catch (o189) {
                    throw new o489.o496(o352.o357);
                }
                if (o503 === undefined && o502 === 0) {
                    throw new o489.o496(o352.o363);
                }
                if (o503 === null || o503 === undefined) break;
                o502++;
                buffer[o107 + o82] = o503;
            }
            if (o502) {
                o492.o494.o504 = Date.o4();
            }
            return o502;
        },
        write: function (o492, buffer, o107, length, o500) {
            if (!o492.o493 || !o492.o493.o487.o499) {
                throw new o489.o496(o352.o358);
            }
            for (var o82 = 0; o82 < length; o82++) {
                try {
                    o492.o493.o487.o499(o492.o493, buffer[o107 + o82]);
                } catch (o189) {
                    throw new o489.o496(o352.o357);
                }
            }
            if (length) {
                o492.o494.o504 = Date.o4();
            }
            return o82;
        }
    },
    o505: {
        o501: function (o493) {
            if (!o493.input.length) {
                var o503 = null;
                if (o16) {
                    o503 = o17['stdin']['read']();
                    if (!o503) {
                        if (o17['stdin']['_readableState'] && o17['stdin']['_readableState']['ended']) {
                            return null; // EOF
                        }
                        return undefined; // no data available
                    }
                } else if (typeof o19 != 'undefined' &&
                    typeof o19.o506 == 'function') {
                    // Browser.
                    o503 = o19.o506('Input: '); // returns null on cancel
                    if (o503 !== null) {
                        o503 += '\n';
                    }
                } else if (typeof o507 == 'function') {
                    // Command line.
                    o503 = o507();
                    if (o503 !== null) {
                        o503 += '\n';
                    }
                }
                if (!o503) {
                    return null;
                }
                o493.input = o192(o503, true);
            }
            return o493.input.shift();
        },
        o499: function (o493, o508) {
            if (o508 === null || o508 === 10) {
                Module['print'](o493.o488.join(''));
                o493.o488 = [];
            } else {
                o493.o488.push(o481.o229.o131(o508));
            }
        }
    },
    o509: {
        o499: function (o493, o508) {
            if (o508 === null || o508 === 10) {
                Module['printErr'](o493.o488.join(''));
                o493.o488 = [];
            } else {
                o493.o488.push(o481.o229.o131(o508));
            }
        }
    }
};

var o510 = {
    o511: null,
    o512: 1,
    o513: 2,
    o514: 3,
    o515: function (o515) {
        return o510.o516(null, '/', 16384 | 511 /* 0777 */ , 0);
    },
    o516: function (o517, name, o518, o486) {
        if (o489.o519(o518) || o489.o520(o518)) {
            // no supported
            throw new o489.o496(o352.o353);
        }
        if (!o510.o511) {
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
        }
        var o494 = o489.o516(o517, name, o518, o486);
        if (o489.o538(o494.o518)) {
            o494.o523 = o510.o511.o521.o494;
            o494.o491 = o510.o511.o521.o492;
            o494.o539 = {};
        } else if (o489.o540(o494.o518)) {
            o494.o523 = o510.o511.o533.o494;
            o494.o491 = o510.o511.o533.o492;
            o494.o539 = [];
            o494.o541 = o510.o513;
        } else if (o489.o542(o494.o518)) {
            o494.o523 = o510.o511.link.o494;
            o494.o491 = o510.o511.link.o492;
        } else if (o489.o543(o494.o518)) {
            o494.o523 = o510.o511.o536.o494;
            o494.o491 = o510.o511.o536.o492;
        }
        o494.o504 = Date.o4();
        // add the new node to the parent
        if (o517) {
            o517.o539[name] = o494;
        }
        return o494;
    },
    o544: function (o494) {
        if (o494.o541 !== o510.o513) {
            var o539 = o494.o539;
            o494.o539 = Array.prototype.slice.call(o539);
            o494.o541 = o510.o513;
        }
    },
    o523: {
        o522: function (o494) {
            var o545 = {};
            // device numbers reuse inode numbers.
            o545.o486 = o489.o543(o494.o518) ? o494.o333 : 1;
            o545.o546 = o494.o333;
            o545.o518 = o494.o518;
            o545.o547 = 1;
            o545.o548 = 0;
            o545.o549 = 0;
            o545.o495 = o494.o495;
            if (o489.o538(o494.o518)) {
                o545.o85 = 4096;
            } else if (o489.o540(o494.o518)) {
                o545.o85 = o494.o539.length;
            } else if (o489.o542(o494.o518)) {
                o545.o85 = o494.link.length;
            } else {
                o545.o85 = 0;
            }
            o545.o550 = new Date(o494.o504);
            o545.o551 = new Date(o494.o504);
            o545.o552 = new Date(o494.o504);
            // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
            //       but this is not required by the standard.
            o545.o553 = 4096;
            o545.o554 = Math.ceil(o545.o85 / o545.o553);
            return o545;
        },
        o524: function (o494, o545) {
            if (o545.o518 !== undefined) {
                o494.o518 = o545.o518;
            }
            if (o545.o504 !== undefined) {
                o494.o504 = o545.o504;
            }
            if (o545.o85 !== undefined) {
                o510.o544(o494);
                var o539 = o494.o539;
                if (o545.o85 < o539.length) o539.length = o545.o85;
                else
                    while (o545.o85 > o539.length) o539.push(0);
            }
        },
        o525: function (o517, name) {
            throw o489.o555[o352.o354];
        },
        o526: function (o517, name, o518, o486) {
            return o510.o516(o517, name, o518, o486);
        },
        o527: function (o556, o557, o558) {
            // if we're overwriting a directory at new_name, make sure it's empty.
            if (o489.o538(o556.o518)) {
                var o559;
                try {
                    o559 = o489.o560(o557, o558);
                } catch (o189) {}
                if (o559) {
                    for (var o82 in o559.o539) {
                        throw new o489.o496(o352.o432);
                    }
                }
            }
            // do the internal rewiring
            delete o556.o517.o539[o556.name];
            o556.name = o558;
            o557.o539[o558] = o556;
            o556.o517 = o557;
        },
        o528: function (o517, name) {
            delete o517.o539[name];
        },
        o529: function (o517, name) {
            var o494 = o489.o560(o517, name);
            for (var o82 in o494.o539) {
                throw new o489.o496(o352.o432);
            }
            delete o517.o539[name];
        },
        o530: function (o494) {
            var entries = ['.', '..']
            for (var key in o494.o539) {
                if (!o494.o539.hasOwnProperty(key)) {
                    continue;
                }
                entries.push(key);
            }
            return entries;
        },
        o531: function (o517, o561, o562) {
            var o494 = o510.o516(o517, o561, 511 /* 0777 */ | 40960, 0);
            o494.link = o562;
            return o494;
        },
        o535: function (o494) {
            if (!o489.o542(o494.o518)) {
                throw new o489.o496(o352.o375);
            }
            return o494.link;
        }
    },
    o491: {
        o27: function (o492, buffer, o107, length, o563) {
            var o539 = o492.o494.o539;
            if (o563 >= o539.length)
                return 0;
            var o85 = Math.o87(o539.length - o563, length);
            o73(o85 >= 0);
            if (o85 > 8 && o539.subarray) { // non-trivial, and typed array
                buffer.set(o539.subarray(o563, o563 + o85), o107);
            } else {
                for (var o82 = 0; o82 < o85; o82++) {
                    buffer[o107 + o82] = o539[o563 + o82];
                }
            }
            return o85;
        },
        write: function (o492, buffer, o107, length, o563, o564) {
            var o494 = o492.o494;
            o494.o504 = Date.o4();
            var o539 = o494.o539;
            if (length && o539.length === 0 && o563 === 0 && buffer.subarray) {
                // just replace it with the new data
                if (o564 && o107 === 0) {
                    o494.o539 = buffer; // this could be a subarray of Emscripten HEAP, or allocated from some other source.
                    o494.o541 = (buffer.buffer === o200.buffer) ? o510.o512 : o510.o514;
                } else {
                    o494.o539 = new Uint8Array(buffer.subarray(o107, o107 + length));
                    o494.o541 = o510.o514;
                }
                return length;
            }
            o510.o544(o494);
            var o539 = o494.o539;
            while (o539.length < o563) o539.push(0);
            for (var o82 = 0; o82 < length; o82++) {
                o539[o563 + o82] = buffer[o107 + o82];
            }
            return length;
        },
        o532: function (o492, o107, o565) {
            var o563 = o107;
            if (o565 === 1) { // SEEK_CUR.
                o563 += o492.o563;
            } else if (o565 === 2) { // SEEK_END.
                if (o489.o540(o492.o494.o518)) {
                    o563 += o492.o494.o539.length;
                }
            }
            if (o563 < 0) {
                throw new o489.o496(o352.o375);
            }
            o492.o566 = [];
            o492.o563 = o563;
            return o563;
        },
        o215: function (o492, o107, length) {
            o510.o544(o492.o494);
            var o539 = o492.o494.o539;
            var o252 = o107 + length;
            while (o252 > o539.length) o539.push(0);
        },
        o534: function (o492, buffer, o107, length, o563, o567, flags) {
            if (!o489.o540(o492.o494.o518)) {
                throw new o489.o496(o352.o372);
            }
            var o114;
            var o568;
            var o539 = o492.o494.o539;
            // Only make a new copy when MAP_PRIVATE is specified.
            if (!(flags & 2) &&
                (o539.buffer === buffer || o539.buffer === buffer.buffer)) {
                // We can't emulate MAP_SHARED when the file is not backed by the buffer
                // we're mapping to (e.g. the HEAP buffer).
                o568 = false;
                o114 = o539.byteOffset;
            } else {
                // Try to avoid unnecessary slices.
                if (o563 > 0 || o563 + length < o539.length) {
                    if (o539.subarray) {
                        o539 = o539.subarray(o563, o563 + length);
                    } else {
                        o539 = Array.prototype.slice.call(o539, o563, o563 + length);
                    }
                }
                o568 = true;
                o114 = o220(length);
                if (!o114) {
                    throw new o489.o496(o352.o365);
                }
                buffer.set(o539, o114);
            }
            return {
                o114: o114,
                o568: o568
            };
        }
    }
};

var o569 = {
    o570: {},
    o571: function () {
        return o19.o571 || o19.o572 || o19.o573 || o19.o574;
    },
    o575: 21,
    o576: "FILE_DATA",
    o515: function (o515) {
        // reuse all of the core MEMFS functionality
        return o510.o515.apply(null, arguments);
    },
    o577: function (o515, o578, o278) {
        o569.o579(o515, function (o580, o581) {
            if (o580) return o278(o580);

            o569.o582(o515, function (o580, o583) {
                if (o580) return o278(o580);

                var o342 = o578 ? o583 : o581;
                var o584 = o578 ? o581 : o583;

                o569.o585(o342, o584, o278);
            });
        });
    },
    o586: function (name, o278) {
        // check the cache first
        var o587 = o569.o570[name];
        if (o587) {
            return o278(null, o587);
        }

        var o588;
        try {
            o588 = o569.o571().o41(name, o569.o575);
        } catch (o189) {
            return o278(o189);
        }
        o588.o589 = function (o189) {
            var o587 = o189.target.o503;
            var o590 = o189.target.o590;

            var o591;

            if (o587.o592.o593(o569.o576)) {
                o591 = o590.o594(o569.o576);
            } else {
                o591 = o587.o595(o569.o576);
            }

            o591.o596('timestamp', 'timestamp', {
                o597: false
            });
        };
        o588.o598 = function () {
            o587 = o588.o503;

            // add to the cache
            o569.o570[name] = o587;
            o278(null, o587);
        };
        o588.o599 = function () {
            o278(this.o600);
        };
    },
    o579: function (o515, o278) {
        var entries = {};

        function o601(o602) {
            return o602 !== '.' && o602 !== '..';
        };

        function o603(o604) {
            return function (o602) {
                return o605.o606(o604, o602);
            }
        };

        var o607 = o489.o530(o515.o608).filter(o601).map(o603(o515.o608));

        while (o607.length) {
            var o31 = o607.pop();
            var o609;

            try {
                o609 = o489.o609(o31);
            } catch (o189) {
                return o278(o189);
            }

            if (o489.o538(o609.o518)) {
                o607.push.apply(o607, o489.o530(o31).filter(o601).map(o603(o31)));
            }

            entries[o31] = {
                o504: o609.o551
            };
        }

        return o278(null, {
            type: 'local',
            entries: entries
        });
    },
    o582: function (o515, o278) {
        var entries = {};

        o569.o586(o515.o608, function (o580, o587) {
            if (o580) return o278(o580);

            var o590 = o587.o590([o569.o576], 'readonly');
            o590.o599 = function () {
                o278(this.o600);
            };

            var o610 = o590.o594(o569.o576);
            var index = o610.index('timestamp');

            index.o611().o598 = function (o612) {
                var o613 = o612.target.o503;

                if (!o613) {
                    return o278(null, {
                        type: 'remote',
                        o587: o587,
                        entries: entries
                    });
                }

                entries[o613.o614] = {
                    o504: o613.key
                };

                o613.o615();
            };
        });
    },
    o616: function (o31, o278) {
        var o609, o494;

        try {
            var o525 = o489.o617(o31);
            o494 = o525.o494;
            o609 = o489.o609(o31);
        } catch (o189) {
            return o278(o189);
        }

        if (o489.o538(o609.o518)) {
            return o278(null, {
                o504: o609.o551,
                o518: o609.o518
            });
        } else if (o489.o540(o609.o518)) {
            return o278(null, {
                o504: o609.o551,
                o518: o609.o518,
                o539: o494.o539
            });
        } else {
            return o278(new Error('node type not supported'));
        }
    },
    o618: function (o31, o619, o278) {
        try {
            if (o489.o538(o619.o518)) {
                o489.o620(o31, o619.o518);
            } else if (o489.o540(o619.o518)) {
                o489.o621(o31, o619.o539, {
                    o622: 'binary',
                    o564: true
                });
            } else {
                return o278(new Error('node type not supported'));
            }

            o489.o623(o31, o619.o504, o619.o504);
        } catch (o189) {
            return o278(o189);
        }

        o278(null);
    },
    o624: function (o31, o278) {
        try {
            var o525 = o489.o617(o31);
            var o609 = o489.o609(o31);

            if (o489.o538(o609.o518)) {
                o489.o529(o31);
            } else if (o489.o540(o609.o518)) {
                o489.o528(o31);
            }
        } catch (o189) {
            return o278(o189);
        }

        o278(null);
    },
    o625: function (o610, o31, o278) {
        var o588 = o610.get(o31);
        o588.o598 = function (o612) {
            o278(null, o612.target.o503);
        };
        o588.o599 = function () {
            o278(this.o600);
        };
    },
    o626: function (o610, o31, o619, o278) {
        var o588 = o610.o627(o619, o31);
        o588.o598 = function () {
            o278(null);
        };
        o588.o599 = function () {
            o278(this.o600);
        };
    },
    o628: function (o610, o31, o278) {
        var o588 = o610.o629(o31);
        o588.o598 = function () {
            o278(null);
        };
        o588.o599 = function () {
            o278(this.o600);
        };
    },
    o585: function (o342, o584, o278) {
        var o630 = 0;

        var create = [];
        Object.keys(o342.entries).forEach(function (key) {
            var o189 = o342.entries[key];
            var o631 = o584.entries[key];
            if (!o631 || o189.o504 > o631.o504) {
                create.push(key);
                o630++;
            }
        });

        var o632 = [];
        Object.keys(o584.entries).forEach(function (key) {
            var o189 = o584.entries[key];
            var o631 = o342.entries[key];
            if (!o631) {
                o632.push(key);
                o630++;
            }
        });

        if (!o630) {
            return o278(null);
        }

        var o633 = false;
        var o634 = 0;
        var o587 = o342.type === 'remote' ? o342.o587 : o584.o587;
        var o590 = o587.o590([o569.o576], 'readwrite');
        var o610 = o590.o594(o569.o576);

        function done(o580) {
            if (o580) {
                if (!done.o633) {
                    done.o633 = true;
                    return o278(o580);
                }
                return;
            }
            if (++o634 >= o630) {
                return o278(null);
            }
        };

        o590.o599 = function () {
            done(this.o600);
        };

        // sort paths in ascending order so directory entries are created
        // before the files inside them
        create.sort().forEach(function (o31) {
            if (o584.type === 'local') {
                o569.o625(o610, o31, function (o580, o619) {
                    if (o580) return done(o580);
                    o569.o618(o31, o619, done);
                });
            } else {
                o569.o616(o31, function (o580, o619) {
                    if (o580) return done(o580);
                    o569.o626(o610, o31, o619, done);
                });
            }
        });

        // sort paths in descending order so files are deleted before their
        // parent directories
        o632.sort().reverse().forEach(function (o31) {
            if (o584.type === 'local') {
                o569.o624(o31, done);
            } else {
                o569.o628(o610, o31, done);
            }
        });
    }
};

var o635 = {
    o636: false,
    o637: function () {
        o635.o636 = !!o17.o638.match(/^win/);
    },
    o515: function (o515) {
        o73(o16);
        return o635.o516(null, '/', o635.o639(o515.o640.o604), 0);
    },
    o516: function (o517, name, o518, o486) {
        if (!o489.o538(o518) && !o489.o540(o518) && !o489.o542(o518)) {
            throw new o489.o496(o352.o375);
        }
        var o494 = o489.o516(o517, name, o518);
        o494.o523 = o635.o523;
        o494.o491 = o635.o491;
        return o494;
    },
    o639: function (o31) {
        var o609;
        try {
            o609 = o641.o642(o31);
            if (o635.o636) {
                // On Windows, directories return permission bits 'rw-rw-rw-', even though they have 'rwxrwxrwx', so 
                // propagate write bits to execute bits.
                o609.o518 = o609.o518 | ((o609.o518 & 146) >> 1);
            }
        } catch (o189) {
            if (!o189.o119) throw o189;
            throw new o489.o496(o352[o189.o119]);
        }
        return o609.o518;
    },
    o643: function (o494) {
        var o249 = [];
        while (o494.o517 !== o494) {
            o249.push(o494.name);
            o494 = o494.o517;
        }
        o249.push(o494.o515.o640.o604);
        o249.reverse();
        return o605.join.apply(null, o249);
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
        if (flags in o635.o644) {
            return o635.o644[flags];
        } else {
            return flags;
        }
    },
    o523: {
        o522: function (o494) {
            var o31 = o635.o643(o494);
            var o609;
            try {
                o609 = o641.o642(o31);
            } catch (o189) {
                if (!o189.o119) throw o189;
                throw new o489.o496(o352[o189.o119]);
            }
            // node.js v0.10.20 doesn't report blksize and blocks on Windows. Fake them with default blksize of 4096.
            // See http://support.microsoft.com/kb/140365
            if (o635.o636 && !o609.o553) {
                o609.o553 = 4096;
            }
            if (o635.o636 && !o609.o554) {
                o609.o554 = (o609.o85 + o609.o553 - 1) / o609.o553 | 0;
            }
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
        },
        o524: function (o494, o545) {
            var o31 = o635.o643(o494);
            try {
                if (o545.o518 !== undefined) {
                    o641.o646(o31, o545.o518);
                    // update the common node structure mode as well
                    o494.o518 = o545.o518;
                }
                if (o545.o504 !== undefined) {
                    var o647 = new Date(o545.o504);
                    o641.o648(o31, o647, o647);
                }
                if (o545.o85 !== undefined) {
                    o641.o649(o31, o545.o85);
                }
            } catch (o189) {
                if (!o189.o119) throw o189;
                throw new o489.o496(o352[o189.o119]);
            }
        },
        o525: function (o517, name) {
            var o31 = o605.o606(o635.o643(o517), name);
            var o518 = o635.o639(o31);
            return o635.o516(o517, name, o518);
        },
        o526: function (o517, name, o518, o486) {
            var o494 = o635.o516(o517, name, o518, o486);
            // create the backing node for this in the fs root as well
            var o31 = o635.o643(o494);
            try {
                if (o489.o538(o494.o518)) {
                    o641.o650(o31, o494.o518);
                } else {
                    o641.o651(o31, '', {
                        o518: o494.o518
                    });
                }
            } catch (o189) {
                if (!o189.o119) throw o189;
                throw new o489.o496(o352[o189.o119]);
            }
            return o494;
        },
        o527: function (o652, o653, o654) {
            var o655 = o635.o643(o652);
            var o656 = o605.o606(o635.o643(o653), o654);
            try {
                o641.o657(o655, o656);
            } catch (o189) {
                if (!o189.o119) throw o189;
                throw new o489.o496(o352[o189.o119]);
            }
        },
        o528: function (o517, name) {
            var o31 = o605.o606(o635.o643(o517), name);
            try {
                o641.o658(o31);
            } catch (o189) {
                if (!o189.o119) throw o189;
                throw new o489.o496(o352[o189.o119]);
            }
        },
        o529: function (o517, name) {
            var o31 = o605.o606(o635.o643(o517), name);
            try {
                o641.o659(o31);
            } catch (o189) {
                if (!o189.o119) throw o189;
                throw new o489.o496(o352[o189.o119]);
            }
        },
        o530: function (o494) {
            var o31 = o635.o643(o494);
            try {
                return o641.o660(o31);
            } catch (o189) {
                if (!o189.o119) throw o189;
                throw new o489.o496(o352[o189.o119]);
            }
        },
        o531: function (o517, o654, o655) {
            var o656 = o605.o606(o635.o643(o517), o654);
            try {
                o641.o661(o655, o656);
            } catch (o189) {
                if (!o189.o119) throw o189;
                throw new o489.o496(o352[o189.o119]);
            }
        },
        o535: function (o494) {
            var o31 = o635.o643(o494);
            try {
                return o641.o662(o31);
            } catch (o189) {
                if (!o189.o119) throw o189;
                throw new o489.o496(o352[o189.o119]);
            }
        }
    },
    o491: {
        o41: function (o492) {
            var o31 = o635.o643(o492.o494);
            try {
                if (o489.o540(o492.o494.o518)) {
                    o492.o663 = o641.o664(o31, o635.o645(o492.flags));
                }
            } catch (o189) {
                if (!o189.o119) throw o189;
                throw new o489.o496(o352[o189.o119]);
            }
        },
        o498: function (o492) {
            try {
                if (o489.o540(o492.o494.o518) && o492.o663) {
                    o641.o665(o492.o663);
                }
            } catch (o189) {
                if (!o189.o119) throw o189;
                throw new o489.o496(o352[o189.o119]);
            }
        },
        o27: function (o492, buffer, o107, length, o563) {
            // FIXME this is terrible.
            var o666 = new o667(length);
            var o668;
            try {
                o668 = o641.o669(o492.o663, o666, 0, length, o563);
            } catch (o189) {
                throw new o489.o496(o352[o189.o119]);
            }
            if (o668 > 0) {
                for (var o82 = 0; o82 < o668; o82++) {
                    buffer[o107 + o82] = o666[o82];
                }
            }
            return o668;
        },
        write: function (o492, buffer, o107, length, o563) {
            // FIXME this is terrible.
            var o666 = new o667(buffer.subarray(o107, o107 + length));
            var o668;
            try {
                o668 = o641.o670(o492.o663, o666, 0, length, o563);
            } catch (o189) {
                throw new o489.o496(o352[o189.o119]);
            }
            return o668;
        },
        o532: function (o492, o107, o565) {
            var o563 = o107;
            if (o565 === 1) { // SEEK_CUR.
                o563 += o492.o563;
            } else if (o565 === 2) { // SEEK_END.
                if (o489.o540(o492.o494.o518)) {
                    try {
                        var o609 = o641.o671(o492.o663);
                        o563 += o609.o85;
                    } catch (o189) {
                        throw new o489.o496(o352[o189.o119]);
                    }
                }
            }

            if (o563 < 0) {
                throw new o489.o496(o352.o375);
            }

            o492.o563 = o563;
            return o563;
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
        if (!(o189 instanceof o489.o496)) throw o189 + ' : ' + o262();
        return o351(o189.o685);
    },
    o617: function (o31, o640) {
        o31 = o605.resolve(o489.o686(), o31);
        o640 = o640 || {};

        var o687 = {
            o688: true,
            o689: 0
        };
        for (var key in o687) {
            if (o640[key] === undefined) {
                o640[key] = o687[key];
            }
        }

        if (o640.o689 > 8) { // max recursive lookup of 8
            throw new o489.o496(o352.o434);
        }

        // split the path
        var o249 = o605.o690(o31.split('/').filter(function (o602) {
            return !!o602;
        }), false);

        // start at the root
        var o691 = o489.o604;
        var o692 = '/';

        for (var o82 = 0; o82 < o249.length; o82++) {
            var o693 = (o82 === o249.length - 1);
            if (o693 && o640.o517) {
                // stop resolving
                break;
            }

            o691 = o489.o560(o691, o249[o82]);
            o692 = o605.o606(o692, o249[o82]);

            // jump to the mount's root node if this is a mountpoint
            if (o489.o694(o691)) {
                if (!o693 || (o693 && o640.o688)) {
                    o691 = o691.o695.o604;
                }
            }

            // by default, lookupPath will not follow a symlink if it is the final path component.
            // setting opts.follow = true will override this behavior.
            if (!o693 || o640.o696) {
                var o697 = 0;
                while (o489.o542(o691.o518)) {
                    var link = o489.o535(o692);
                    o692 = o605.resolve(o605.o698(o692), link);

                    var o525 = o489.o617(o692, {
                        o689: o640.o689
                    });
                    o691 = o525.o494;

                    if (o697++ > 40) { // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                        throw new o489.o496(o352.o434);
                    }
                }
            }
        }

        return {
            o31: o692,
            o494: o691
        };
    },
    o699: function (o494) {
        var o31;
        while (true) {
            if (o489.o700(o494)) {
                var o515 = o494.o515.o608;
                if (!o31) return o515;
                return o515[o515.length - 1] !== '/' ? o515 + '/' + o31 : o515 + o31;
            }
            o31 = o31 ? o494.name + '/' + o31 : o494.name;
            o494 = o494.o517;
        }
    },
    o701: function (o702, name) {
        var o703 = 0;


        for (var o82 = 0; o82 < name.length; o82++) {
            o703 = ((o703 << 5) - o703 + name.charCodeAt(o82)) | 0;
        }
        return ((o702 + o703) >>> 0) % o489.o680.length;
    },
    o704: function (o494) {
        var o703 = o489.o701(o494.o517.o333, o494.name);
        o494.o705 = o489.o680[o703];
        o489.o680[o703] = o494;
    },
    o706: function (o494) {
        var o703 = o489.o701(o494.o517.o333, o494.name);
        if (o489.o680[o703] === o494) {
            o489.o680[o703] = o494.o705;
        } else {
            var o691 = o489.o680[o703];
            while (o691) {
                if (o691.o705 === o494) {
                    o691.o705 = o494.o705;
                    break;
                }
                o691 = o691.o705;
            }
        }
    },
    o560: function (o517, name) {
        var o580 = o489.o707(o517);
        if (o580) {
            throw new o489.o496(o580);
        }
        var o703 = o489.o701(o517.o333, name);
        for (var o494 = o489.o680[o703]; o494; o494 = o494.o705) {
            var o708 = o494.name;
            if (o494.o517.o333 === o517.o333 && o708 === name) {
                return o494;
            }
        }
        // if we failed to find it in the cache, call into the VFS
        return o489.o525(o517, name);
    },
    o516: function (o517, name, o518, o495) {
        if (!o489.o709) {
            o489.o709 = function (o517, name, o518, o495) {
                if (!o517) {
                    o517 = this; // root node sets parent to itself
                }
                this.o517 = o517;
                this.o515 = o517.o515;
                this.o695 = null;
                this.o333 = o489.o679++;
                this.name = name;
                this.o518 = o518;
                this.o523 = {};
                this.o491 = {};
                this.o495 = o495;
            };

            o489.o709.prototype = {};

            // compatibility
            var o710 = 292 | 73;
            var o711 = 146;

            // NOTE we must use Object.defineProperties instead of individual calls to
            // Object.defineProperty in order to make closure compiler happy
            Object.defineProperties(o489.o709.prototype, {
                o27: {
                    get: function () {
                        return (this.o518 & o710) === o710;
                    },
                    set: function (o508) {
                        o508 ? this.o518 |= o710 : this.o518 &= ~o710;
                    }
                },
                write: {
                    get: function () {
                        return (this.o518 & o711) === o711;
                    },
                    set: function (o508) {
                        o508 ? this.o518 |= o711 : this.o518 &= ~o711;
                    }
                },
                o712: {
                    get: function () {
                        return o489.o538(this.o518);
                    },
                },
                o713: {
                    get: function () {
                        return o489.o543(this.o518);
                    },
                },
            });
        }

        var o494 = new o489.o709(o517, name, o518, o495);

        o489.o704(o494);

        return o494;
    },
    o714: function (o494) {
        o489.o706(o494);
    },
    o700: function (o494) {
        return o494 === o494.o517;
    },
    o694: function (o494) {
        return !!o494.o695;
    },
    o540: function (o518) {
        return (o518 & 61440) === 32768;
    },
    o538: function (o518) {
        return (o518 & 61440) === 16384;
    },
    o542: function (o518) {
        return (o518 & 61440) === 40960;
    },
    o543: function (o518) {
        return (o518 & 61440) === 8192;
    },
    o519: function (o518) {
        return (o518 & 61440) === 24576;
    },
    o520: function (o518) {
        return (o518 & 61440) === 4096;
    },
    o715: function (o518) {
        return (o518 & 49152) === 49152;
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
        if (typeof flags === 'undefined') {
            throw new Error('Unknown file open mode: ' + o231);
        }
        return flags;
    },
    o645: function (o718) {
        var o719 = o718 & 2097155;
        var o720 = ['r', 'w', 'rw'][o719];
        if ((o718 & 512)) {
            o720 += 'w';
        }
        return o720;
    },
    o721: function (o494, o720) {
        if (o489.o683) {
            return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (o720.indexOf('r') !== -1 && !(o494.o518 & 292)) {
            return o352.o366;
        } else if (o720.indexOf('w') !== -1 && !(o494.o518 & 146)) {
            return o352.o366;
        } else if (o720.indexOf('x') !== -1 && !(o494.o518 & 73)) {
            return o352.o366;
        }
        return 0;
    },
    o707: function (o521) {
        return o489.o721(o521, 'x');
    },
    o722: function (o521, name) {
        try {
            var o494 = o489.o560(o521, name);
            return o352.o370;
        } catch (o189) {}
        return o489.o721(o521, 'wx');
    },
    o723: function (o521, name, o724) {
        var o494;
        try {
            o494 = o489.o560(o521, name);
        } catch (o189) {
            return o189.o685;
        }
        var o580 = o489.o721(o521, 'wx');
        if (o580) {
            return o580;
        }
        if (o724) {
            if (!o489.o538(o494.o518)) {
                return o352.o373;
            }
            if (o489.o700(o494) || o489.o699(o494) === o489.o686()) {
                return o352.o369;
            }
        } else {
            if (o489.o538(o494.o518)) {
                return o352.o374;
            }
        }
        return 0;
    },
    o725: function (o494, flags) {
        if (!o494) {
            return o352.o354;
        }
        if (o489.o542(o494.o518)) {
            return o352.o434;
        } else if (o489.o538(o494.o518)) {
            if ((flags & 2097155) !== 0 || // opening for write
                (flags & 512)) {
                return o352.o374;
            }
        }
        return o489.o721(o494, o489.o645(flags));
    },
    o726: 4096,
    o727: function (o728, o729) {
        o728 = o728 || 0;
        o729 = o729 || o489.o726;
        for (var o730 = o728; o730 <= o729; o730++) {
            if (!o489.o678[o730]) {
                return o730;
            }
        }
        throw new o489.o496(o352.o377);
    },
    o731: function (o730) {
        return o489.o678[o730];
    },
    o732: function (o492, o728, o729) {
        if (!o489.o733) {
            o489.o733 = function () {};
            o489.o733.prototype = {};
            // compatibility
            Object.defineProperties(o489.o733.prototype, {
                o734: {
                    get: function () {
                        return this.o494;
                    },
                    set: function (o508) {
                        this.o494 = o508;
                    }
                },
                o735: {
                    get: function () {
                        return (this.flags & 2097155) !== 1;
                    }
                },
                o736: {
                    get: function () {
                        return (this.flags & 2097155) !== 0;
                    }
                },
                o737: {
                    get: function () {
                        return (this.flags & 1024);
                    }
                }
            });
        }
        if (o492.__proto__) {
            // reuse the object
            o492.__proto__ = o489.o733.prototype;
        } else {
            var o738 = new o489.o733();
            for (var o602 in o492) {
                o738[o602] = o492[o602];
            }
            o492 = o738;
        }
        var o730 = o489.o727(o728, o729);
        o492.o730 = o730;
        o489.o678[o730] = o492;
        return o492;
    },
    o739: function (o730) {
        o489.o678[o730] = null;
    },
    o740: function (o114) {
        return o489.o678[o114 - 1];
    },
    o741: function (o492) {
        return o492 ? o492.o730 + 1 : 0;
    },
    o537: {
        o41: function (o492) {
            var o742 = o489.o743(o492.o494.o495);
            // override node's stream ops with the device's
            o492.o491 = o742.o491;
            // forward the open call
            if (o492.o491.o41) {
                o492.o491.o41(o492);
            }
        },
        o532: function () {
            throw new o489.o496(o352.o382);
        }
    },
    o744: function (o486) {
        return ((o486) >> 8);
    },
    o745: function (o486) {
        return ((o486) & 0xff);
    },
    o746: function (o747, o748) {
        return ((o747) << 8 | (o748));
    },
    o490: function (o486, o487) {
        o489.o677[o486] = {
            o491: o487
        };
    },
    o743: function (o486) {
        return o489.o677[o486];
    },
    o749: function (o515) {
        var o676 = [];
        var o607 = [o515];

        while (o607.length) {
            var o750 = o607.pop();

            o676.push(o750);

            o607.push.apply(o607, o750.o676);
        }

        return o676;
    },
    o577: function (o578, o278) {
        if (typeof (o578) === 'function') {
            o278 = o578;
            o578 = false;
        }

        var o676 = o489.o749(o489.o604.o515);
        var o634 = 0;

        function done(o580) {
            if (o580) {
                if (!done.o633) {
                    done.o633 = true;
                    return o278(o580);
                }
                return;
            }
            if (++o634 >= o676.length) {
                o278(null);
            }
        };

        // sync all mounts
        o676.forEach(function (o515) {
            if (!o515.type.o577) {
                return done(null);
            }
            o515.type.o577(o515, o578, done);
        });
    },
    o515: function (type, o640, o608) {
        var o604 = o608 === '/';
        var o751 = !o608;
        var o494;

        if (o604 && o489.o604) {
            throw new o489.o496(o352.o369);
        } else if (!o604 && !o751) {
            var o525 = o489.o617(o608, {
                o688: false
            });

            o608 = o525.o31; // use the absolute path
            o494 = o525.o494;

            if (o489.o694(o494)) {
                throw new o489.o496(o352.o369);
            }

            if (!o489.o538(o494.o518)) {
                throw new o489.o496(o352.o373);
            }
        }

        var o515 = {
            type: type,
            o640: o640,
            o608: o608,
            o676: []
        };

        // create a root node for the fs
        var o752 = type.o515(o515);
        o752.o515 = o515;
        o515.o604 = o752;

        if (o604) {
            o489.o604 = o752;
        } else if (o494) {
            // set as a mountpoint
            o494.o695 = o515;

            // add the new mount to the current mount's children
            if (o494.o515) {
                o494.o515.o676.push(o515);
            }
        }

        return o752;
    },
    o753: function (o608) {
        var o525 = o489.o617(o608, {
            o688: false
        });

        if (!o489.o694(o525.o494)) {
            throw new o489.o496(o352.o375);
        }

        // destroy the nodes for this mount, and all its child mounts
        var o494 = o525.o494;
        var o515 = o494.o695;
        var o676 = o489.o749(o515);

        Object.keys(o489.o680).forEach(function (o703) {
            var o691 = o489.o680[o703];

            while (o691) {
                var next = o691.o705;

                if (o676.indexOf(o691.o515) !== -1) {
                    o489.o714(o691);
                }

                o691 = next;
            }
        });

        // no longer a mountpoint
        o494.o695 = null;

        // remove this mount from the child mounts
        var o754 = o494.o515.o676.indexOf(o515);
        o73(o754 !== -1);
        o494.o515.o676.splice(o754, 1);
    },
    o525: function (o517, name) {
        return o517.o523.o525(o517, name);
    },
    o526: function (o31, o518, o486) {
        var o525 = o489.o617(o31, {
            o517: true
        });
        var o517 = o525.o494;
        var name = o605.o755(o31);
        var o580 = o489.o722(o517, name);
        if (o580) {
            throw new o489.o496(o580);
        }
        if (!o517.o523.o526) {
            throw new o489.o496(o352.o353);
        }
        return o517.o523.o526(o517, name, o518, o486);
    },
    create: function (o31, o518) {
        o518 = o518 !== undefined ? o518 : 438 /* 0666 */ ;
        o518 &= 4095;
        o518 |= 32768;
        return o489.o526(o31, o518, 0);
    },
    o620: function (o31, o518) {
        o518 = o518 !== undefined ? o518 : 511 /* 0777 */ ;
        o518 &= 511 | 512;
        o518 |= 16384;
        return o489.o526(o31, o518, 0);
    },
    o756: function (o31, o518, o486) {
        if (typeof (o486) === 'undefined') {
            o486 = o518;
            o518 = 438 /* 0666 */ ;
        }
        o518 |= 8192;
        return o489.o526(o31, o518, o486);
    },
    o531: function (o562, o757) {
        var o525 = o489.o617(o757, {
            o517: true
        });
        var o517 = o525.o494;
        var o561 = o605.o755(o757);
        var o580 = o489.o722(o517, o561);
        if (o580) {
            throw new o489.o496(o580);
        }
        if (!o517.o523.o531) {
            throw new o489.o496(o352.o353);
        }
        return o517.o523.o531(o517, o561, o562);
    },
    o527: function (o758, o759) {
        var o760 = o605.o698(o758);
        var o761 = o605.o698(o759);
        var o762 = o605.o755(o758);
        var o558 = o605.o755(o759);
        // parents must exist
        var o525, o763, o557;
        try {
            o525 = o489.o617(o758, {
                o517: true
            });
            o763 = o525.o494;
            o525 = o489.o617(o759, {
                o517: true
            });
            o557 = o525.o494;
        } catch (o189) {
            throw new o489.o496(o352.o369);
        }
        // need to be part of the same mount
        if (o763.o515 !== o557.o515) {
            throw new o489.o496(o352.o371);
        }
        // source must exist
        var o556 = o489.o560(o763, o762);
        // old path should not be an ancestor of the new path
        var o764 = o605.o764(o758, o761);
        if (o764.charAt(0) !== '.') {
            throw new o489.o496(o352.o375);
        }
        // new path should not be an ancestor of the old path
        o764 = o605.o764(o759, o760);
        if (o764.charAt(0) !== '.') {
            throw new o489.o496(o352.o432);
        }
        // see if the new path already exists
        var o559;
        try {
            o559 = o489.o560(o557, o558);
        } catch (o189) {
            // not fatal
        }
        // early out if nothing needs to change
        if (o556 === o559) {
            return;
        }
        // we'll need to delete the old entry
        var o724 = o489.o538(o556.o518);
        var o580 = o489.o723(o763, o762, o724);
        if (o580) {
            throw new o489.o496(o580);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        o580 = o559 ?
            o489.o723(o557, o558, o724) :
            o489.o722(o557, o558);
        if (o580) {
            throw new o489.o496(o580);
        }
        if (!o763.o523.o527) {
            throw new o489.o496(o352.o353);
        }
        if (o489.o694(o556) || (o559 && o489.o694(o559))) {
            throw new o489.o496(o352.o369);
        }
        // if we are going to change the parent, check write permissions
        if (o557 !== o763) {
            o580 = o489.o721(o763, 'w');
            if (o580) {
                throw new o489.o496(o580);
            }
        }
        // remove the node from the lookup hash
        o489.o706(o556);
        // do the underlying fs rename
        try {
            o763.o523.o527(o556, o557, o558);
        } catch (o189) {
            throw o189;
        } finally {
            // add the node back to the hash (in case node_ops.rename
            // changed its name)
            o489.o704(o556);
        }
    },
    o529: function (o31) {
        var o525 = o489.o617(o31, {
            o517: true
        });
        var o517 = o525.o494;
        var name = o605.o755(o31);
        var o494 = o489.o560(o517, name);
        var o580 = o489.o723(o517, name, true);
        if (o580) {
            throw new o489.o496(o580);
        }
        if (!o517.o523.o529) {
            throw new o489.o496(o352.o353);
        }
        if (o489.o694(o494)) {
            throw new o489.o496(o352.o369);
        }
        o517.o523.o529(o517, name);
        o489.o714(o494);
    },
    o530: function (o31) {
        var o525 = o489.o617(o31, {
            o696: true
        });
        var o494 = o525.o494;
        if (!o494.o523.o530) {
            throw new o489.o496(o352.o373);
        }
        return o494.o523.o530(o494);
    },
    o528: function (o31) {
        var o525 = o489.o617(o31, {
            o517: true
        });
        var o517 = o525.o494;
        var name = o605.o755(o31);
        var o494 = o489.o560(o517, name);
        var o580 = o489.o723(o517, name, false);
        if (o580) {
            // POSIX says unlink should set EPERM, not EISDIR
            if (o580 === o352.o374) o580 = o352.o353;
            throw new o489.o496(o580);
        }
        if (!o517.o523.o528) {
            throw new o489.o496(o352.o353);
        }
        if (o489.o694(o494)) {
            throw new o489.o496(o352.o369);
        }
        o517.o523.o528(o517, name);
        o489.o714(o494);
    },
    o535: function (o31) {
        var o525 = o489.o617(o31);
        var link = o525.o494;
        if (!link.o523.o535) {
            throw new o489.o496(o352.o375);
        }
        return link.o523.o535(link);
    },
    o609: function (o31, o765) {
        var o525 = o489.o617(o31, {
            o696: !o765
        });
        var o494 = o525.o494;
        if (!o494.o523.o522) {
            throw new o489.o496(o352.o353);
        }
        return o494.o523.o522(o494);
    },
    o766: function (o31) {
        return o489.o609(o31, true);
    },
    o767: function (o31, o518, o765) {
        var o494;
        if (typeof o31 === 'string') {
            var o525 = o489.o617(o31, {
                o696: !o765
            });
            o494 = o525.o494;
        } else {
            o494 = o31;
        }
        if (!o494.o523.o524) {
            throw new o489.o496(o352.o353);
        }
        o494.o523.o524(o494, {
            o518: (o518 & 4095) | (o494.o518 & ~4095),
            o504: Date.o4()
        });
    },
    o768: function (o31, o518) {
        o489.o767(o31, o518, true);
    },
    o769: function (o730, o518) {
        var o492 = o489.o731(o730);
        if (!o492) {
            throw new o489.o496(o352.o361);
        }
        o489.o767(o492.o494, o518);
    },
    o770: function (o31, o548, o549, o765) {
        var o494;
        if (typeof o31 === 'string') {
            var o525 = o489.o617(o31, {
                o696: !o765
            });
            o494 = o525.o494;
        } else {
            o494 = o31;
        }
        if (!o494.o523.o524) {
            throw new o489.o496(o352.o353);
        }
        o494.o523.o524(o494, {
            o504: Date.o4()
            // we ignore the uid / gid for now
        });
    },
    o771: function (o31, o548, o549) {
        o489.o770(o31, o548, o549, true);
    },
    o772: function (o730, o548, o549) {
        var o492 = o489.o731(o730);
        if (!o492) {
            throw new o489.o496(o352.o361);
        }
        o489.o770(o492.o494, o548, o549);
    },
    o773: function (o31, o774) {
        if (o774 < 0) {
            throw new o489.o496(o352.o375);
        }
        var o494;
        if (typeof o31 === 'string') {
            var o525 = o489.o617(o31, {
                o696: true
            });
            o494 = o525.o494;
        } else {
            o494 = o31;
        }
        if (!o494.o523.o524) {
            throw new o489.o496(o352.o353);
        }
        if (o489.o538(o494.o518)) {
            throw new o489.o496(o352.o374);
        }
        if (!o489.o540(o494.o518)) {
            throw new o489.o496(o352.o375);
        }
        var o580 = o489.o721(o494, 'w');
        if (o580) {
            throw new o489.o496(o580);
        }
        o494.o523.o524(o494, {
            o85: o774,
            o504: Date.o4()
        });
    },
    o775: function (o730, o774) {
        var o492 = o489.o731(o730);
        if (!o492) {
            throw new o489.o496(o352.o361);
        }
        if ((o492.flags & 2097155) === 0) {
            throw new o489.o496(o352.o375);
        }
        o489.o773(o492.o494, o774);
    },
    o623: function (o31, o550, o551) {
        var o525 = o489.o617(o31, {
            o696: true
        });
        var o494 = o525.o494;
        o494.o523.o524(o494, {
            o504: Math.o75(o550, o551)
        });
    },
    o41: function (o31, flags, o518, o728, o729) {
        flags = typeof flags === 'string' ? o489.o717(flags) : flags;
        o518 = typeof o518 === 'undefined' ? 438 /* 0666 */ : o518;
        if ((flags & 64)) {
            o518 = (o518 & 4095) | 32768;
        } else {
            o518 = 0;
        }
        var o494;
        if (typeof o31 === 'object') {
            o494 = o31;
        } else {
            o31 = o605.normalize(o31);
            try {
                var o525 = o489.o617(o31, {
                    o696: !(flags & 131072)
                });
                o494 = o525.o494;
            } catch (o189) {
                // ignore
            }
        }
        // perhaps we need to create the node
        if ((flags & 64)) {
            if (o494) {
                // if O_CREAT and O_EXCL are set, error out if the node already exists
                if ((flags & 128)) {
                    throw new o489.o496(o352.o370);
                }
            } else {
                // node doesn't exist, try to create it
                o494 = o489.o526(o31, o518, 0);
            }
        }
        if (!o494) {
            throw new o489.o496(o352.o354);
        }
        // can't truncate a device
        if (o489.o543(o494.o518)) {
            flags &= ~512;
        }
        // check permissions
        var o580 = o489.o725(o494, flags);
        if (o580) {
            throw new o489.o496(o580);
        }
        // do truncation if necessary
        if ((flags & 512)) {
            o489.o773(o494, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512);

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
        if (o492.o491.o41) {
            o492.o491.o41(o492);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
            if (!o489.o776) o489.o776 = {};
            if (!(o31 in o489.o776)) {
                o489.o776[o31] = 1;
                Module['printErr']('read file: ' + o31);
            }
        }
        return o492;
    },
    o498: function (o492) {
        try {
            if (o492.o491.o498) {
                o492.o491.o498(o492);
            }
        } catch (o189) {
            throw o189;
        } finally {
            o489.o739(o492.o730);
        }
    },
    o532: function (o492, o107, o565) {
        if (!o492.o497 || !o492.o491.o532) {
            throw new o489.o496(o352.o382);
        }
        return o492.o491.o532(o492, o107, o565);
    },
    o27: function (o492, buffer, o107, length, o563) {
        if (length < 0 || o563 < 0) {
            throw new o489.o496(o352.o375);
        }
        if ((o492.flags & 2097155) === 1) {
            throw new o489.o496(o352.o361);
        }
        if (o489.o538(o492.o494.o518)) {
            throw new o489.o496(o352.o374);
        }
        if (!o492.o491.o27) {
            throw new o489.o496(o352.o375);
        }
        var o777 = true;
        if (typeof o563 === 'undefined') {
            o563 = o492.o563;
            o777 = false;
        } else if (!o492.o497) {
            throw new o489.o496(o352.o382);
        }
        var o502 = o492.o491.o27(o492, buffer, o107, length, o563);
        if (!o777) o492.o563 += o502;
        return o502;
    },
    write: function (o492, buffer, o107, length, o563, o564) {
        if (length < 0 || o563 < 0) {
            throw new o489.o496(o352.o375);
        }
        if ((o492.flags & 2097155) === 0) {
            throw new o489.o496(o352.o361);
        }
        if (o489.o538(o492.o494.o518)) {
            throw new o489.o496(o352.o374);
        }
        if (!o492.o491.write) {
            throw new o489.o496(o352.o375);
        }
        var o777 = true;
        if (typeof o563 === 'undefined') {
            o563 = o492.o563;
            o777 = false;
        } else if (!o492.o497) {
            throw new o489.o496(o352.o382);
        }
        if (o492.flags & 1024) {
            // seek to the end before writing in append mode
            o489.o532(o492, 0, 2);
        }
        var o778 = o492.o491.write(o492, buffer, o107, length, o563, o564);
        if (!o777) o492.o563 += o778;
        return o778;
    },
    o215: function (o492, o107, length) {
        if (o107 < 0 || length <= 0) {
            throw new o489.o496(o352.o375);
        }
        if ((o492.flags & 2097155) === 0) {
            throw new o489.o496(o352.o361);
        }
        if (!o489.o540(o492.o494.o518) && !o489.o538(o494.o518)) {
            throw new o489.o496(o352.o372);
        }
        if (!o492.o491.o215) {
            throw new o489.o496(o352.o435);
        }
        o492.o491.o215(o492, o107, length);
    },
    o534: function (o492, buffer, o107, length, o563, o567, flags) {
        // TODO if PROT is PROT_WRITE, make sure we have write access
        if ((o492.flags & 2097155) === 1) {
            throw new o489.o496(o352.o366);
        }
        if (!o492.o491.o534) {
            throw new o489.o496(o352.o372);
        }
        return o492.o491.o534(o492, buffer, o107, length, o563, o567, flags);
    },
    o779: function (o492, o780, o196) {
        if (!o492.o491.o779) {
            throw new o489.o496(o352.o378);
        }
        return o492.o491.o779(o492, o780, o196);
    },
    o781: function (o31, o640) {
        o640 = o640 || {};
        o640.flags = o640.flags || 'r';
        o640.o622 = o640.o622 || 'binary';
        if (o640.o622 !== 'utf8' && o640.o622 !== 'binary') {
            throw new Error('Invalid encoding type "' + o640.o622 + '"');
        }
        var o30;
        var o492 = o489.o41(o31, o640.flags);
        var o609 = o489.o609(o31);
        var length = o609.o85;
        var o782 = new Uint8Array(length);
        o489.o27(o492, o782, 0, length, 0);
        if (o640.o622 === 'utf8') {
            o30 = '';
            var o229 = new o48.o129();
            for (var o82 = 0; o82 < length; o82++) {
                o30 += o229.o131(o782[o82]);
            }
        } else if (o640.o622 === 'binary') {
            o30 = o782;
        }
        o489.o498(o492);
        return o30;
    },
    o621: function (o31, o783, o640) {
        o640 = o640 || {};
        o640.flags = o640.flags || 'w';
        o640.o622 = o640.o622 || 'utf8';
        if (o640.o622 !== 'utf8' && o640.o622 !== 'binary') {
            throw new Error('Invalid encoding type "' + o640.o622 + '"');
        }
        var o492 = o489.o41(o31, o640.flags, o640.o518);
        if (o640.o622 === 'utf8') {
            var o229 = new o48.o129();
            var o782 = new Uint8Array(o229.o137(o783));
            o489.write(o492, o782, 0, o782.length, 0, o640.o564);
        } else if (o640.o622 === 'binary') {
            o489.write(o492, o783, 0, o783.length, 0, o640.o564);
        }
        o489.o498(o492);
    },
    o686: function () {
        return o489.o681;
    },
    o784: function (o31) {
        var o525 = o489.o617(o31, {
            o696: true
        });
        if (!o489.o538(o525.o494.o518)) {
            throw new o489.o496(o352.o373);
        }
        var o580 = o489.o721(o525.o494, 'x');
        if (o580) {
            throw new o489.o496(o580);
        }
        o489.o681 = o525.o31;
    },
    o785: function () {
        o489.o620('/tmp');
    },
    o786: function () {
        // create /dev
        o489.o620('/dev');
        // setup /dev/null
        o489.o490(o489.o746(1, 3), {
            o27: function () {
                return 0;
            },
            write: function () {
                return 0;
            }
        });
        o489.o756('/dev/null', o489.o746(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using Module['printErr']
        // so we register a second tty just for it.
        o481.o485(o489.o746(5, 0), o481.o505);
        o481.o485(o489.o746(6, 0), o481.o509);
        o489.o756('/dev/tty', o489.o746(5, 0));
        o489.o756('/dev/tty1', o489.o746(6, 0));
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        o489.o620('/dev/shm');
        o489.o620('/dev/shm/tmp');
    },
    o787: function () {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops

        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
            o489.o788('/dev', 'stdin', Module['stdin']);
        } else {
            o489.o531('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
            o489.o788('/dev', 'stdout', null, Module['stdout']);
        } else {
            o489.o531('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
            o489.o788('/dev', 'stderr', null, Module['stderr']);
        } else {
            o489.o531('/dev/tty1', '/dev/stderr');
        }

        // open default streams for the stdin, stdout and stderr devices
        var o789 = o489.o41('/dev/stdin', 'r');
        o202[((o672) >> 2)] = o489.o741(o789);
        o73(o789.o730 === 0, 'invalid handle for stdin (' + o789.o730 + ')');

        var o790 = o489.o41('/dev/stdout', 'w');
        o202[((o673) >> 2)] = o489.o741(o790);
        o73(o790.o730 === 1, 'invalid handle for stdout (' + o790.o730 + ')');

        var o791 = o489.o41('/dev/stderr', 'w');
        o202[((o674) >> 2)] = o489.o741(o791);
        o73(o791.o730 === 2, 'invalid handle for stderr (' + o791.o730 + ')');
    },
    o792: function () {
        if (o489.o496) return;
        o489.o496 = function o496(o685) {
            this.o685 = o685;
            for (var key in o352) {
                if (o352[key] === o685) {
                    this.o119 = key;
                    break;
                }
            }
            this.o793 = o480[o685];
        };
        o489.o496.prototype = new Error();
        o489.o496.prototype.constructor = o489.o496;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [o352.o354].forEach(function (o119) {
            o489.o555[o119] = new o489.o496(o119);
            o489.o555[o119].o190 = '<generic error, no stack>';
        });
    },
    o637: function () {
        o489.o792();

        o489.o680 = new Array(4096);

        o489.o515(o510, {}, '/');

        o489.o785();
        o489.o786();
    },
    o483: function (input, o488, o600) {
        o73(!o489.o483.o682, 'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)');
        o489.o483.o682 = true;

        o489.o792();

        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = o488 || Module['stdout'];
        Module['stderr'] = o600 || Module['stderr'];

        o489.o787();
    },
    o794: function () {
        o489.o483.o682 = false;
        for (var o82 = 0; o82 < o489.o678.length; o82++) {
            var o492 = o489.o678[o82];
            if (!o492) {
                continue;
            }
            o489.o498(o492);
        }
    },
    o639: function (o795, o796) {
        var o518 = 0;
        if (o795) o518 |= 292 | 73;
        if (o796) o518 |= 146;
        return o518;
    },
    o797: function (o249, o798) {
        var o31 = o605.join.apply(null, o249);
        if (o798 && o31[0] == '/') o31 = o31.substr(1);
        return o31;
    },
    o799: function (o764, o800) {
        return o605.resolve(o800, o764);
    },
    o801: function (o31) {
        return o605.normalize(o31);
    },
    o802: function (o31, o803) {
        var o30 = o489.o804(o31, o803);
        if (o30.o805) {
            return o30.o734;
        } else {
            o351(o30.o600);
            return null;
        }
    },
    o804: function (o31, o803) {
        // operate from within the context of the symlink's target
        try {
            var o525 = o489.o617(o31, {
                o696: !o803
            });
            o31 = o525.o31;
        } catch (o189) {}
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
            var o525 = o489.o617(o31, {
                o517: true
            });
            o30.o806 = true;
            o30.o807 = o525.o31;
            o30.o808 = o525.o494;
            o30.name = o605.o755(o31);
            o525 = o489.o617(o31, {
                o696: !o803
            });
            o30.o805 = true;
            o30.o31 = o525.o31;
            o30.o734 = o525.o494;
            o30.name = o525.o494.name;
            o30.o700 = o525.o31 === '/';
        } catch (o189) {
            o30.o600 = o189.o685;
        };
        return o30;
    },
    o809: function (o517, name, o795, o796) {
        var o31 = o605.o606(typeof o517 === 'string' ? o517 : o489.o699(o517), name);
        var o518 = o489.o639(o795, o796);
        return o489.o620(o31, o518);
    },
    o810: function (o517, o31, o795, o796) {
        o517 = typeof o517 === 'string' ? o517 : o489.o699(o517);
        var o249 = o31.split('/').reverse();
        while (o249.length) {
            var o811 = o249.pop();
            if (!o811) continue;
            var o691 = o605.o606(o517, o811);
            try {
                o489.o620(o691);
            } catch (o189) {
                // ignore EEXIST
            }
            o517 = o691;
        }
        return o691;
    },
    o812: function (o517, name, o813, o795, o796) {
        var o31 = o605.o606(typeof o517 === 'string' ? o517 : o489.o699(o517), name);
        var o518 = o489.o639(o795, o796);
        return o489.create(o31, o518);
    },
    o814: function (o517, name, o783, o795, o796, o564) {
        var o31 = name ? o605.o606(typeof o517 === 'string' ? o517 : o489.o699(o517), name) : o517;
        var o518 = o489.o639(o795, o796);
        var o494 = o489.create(o31, o518);
        if (o783) {
            if (typeof o783 === 'string') {
                var o815 = new Array(o783.length);
                for (var o82 = 0, o774 = o783.length; o82 < o774; ++o82) o815[o82] = o783.charCodeAt(o82);
                o783 = o815;
            }
            // make sure we can write to the file
            o489.o767(o494, o518 | 146);
            var o492 = o489.o41(o494, 'w');
            o489.write(o492, o783, 0, o783.length, 0, o564);
            o489.o498(o492);
            o489.o767(o494, o518);
        }
        return o494;
    },
    o788: function (o517, name, input, o488) {
        var o31 = o605.o606(typeof o517 === 'string' ? o517 : o489.o699(o517), name);
        var o518 = o489.o639(!!input, !!o488);
        if (!o489.o788.o744) o489.o788.o744 = 64;
        var o486 = o489.o746(o489.o788.o744++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        o489.o490(o486, {
            o41: function (o492) {
                o492.o497 = false;
            },
            o498: function (o492) {
                // flush any pending line data
                if (o488 && o488.buffer && o488.buffer.length) {
                    o488(10);
                }
            },
            o27: function (o492, buffer, o107, length, o500 /* ignored */ ) {
                var o502 = 0;
                for (var o82 = 0; o82 < length; o82++) {
                    var o503;
                    try {
                        o503 = input();
                    } catch (o189) {
                        throw new o489.o496(o352.o357);
                    }
                    if (o503 === undefined && o502 === 0) {
                        throw new o489.o496(o352.o363);
                    }
                    if (o503 === null || o503 === undefined) break;
                    o502++;
                    buffer[o107 + o82] = o503;
                }
                if (o502) {
                    o492.o494.o504 = Date.o4();
                }
                return o502;
            },
            write: function (o492, buffer, o107, length, o500) {
                for (var o82 = 0; o82 < length; o82++) {
                    try {
                        o488(buffer[o107 + o82]);
                    } catch (o189) {
                        throw new o489.o496(o352.o357);
                    }
                }
                if (length) {
                    o492.o494.o504 = Date.o4();
                }
                return o82;
            }
        });
        return o489.o756(o31, o518, o486);
    },
    o816: function (o517, name, target, o795, o796) {
        var o31 = o605.o606(typeof o517 === 'string' ? o517 : o489.o699(o517), name);
        return o489.o531(target, o31);
    },
    o817: function (o818) {
        if (o818.o713 || o818.o712 || o818.link || o818.o539) return true;
        var o819 = true;
        if (typeof o40 !== 'undefined') {
            throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (Module['read']) {
            // Command-line.
            try {
                // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
                //          read() will try to parse UTF8.
                o818.o539 = o192(Module['read'](o818.o38), true);
            } catch (o189) {
                o819 = false;
            }
        } else {
            throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
        if (!o819) o351(o352.o357);
        return o819;
    },
    o820: function (o517, name, o38, o795, o796) {
        if (typeof o40 !== 'undefined') {
            if (!o20) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
            // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
            function o821() {
                this.o822 = false;
                this.o823 = []; // Loaded chunks. Index is the chunk number
            }
            o821.prototype.get = function o824(o754) {
                if (o754 > this.length - 1 || o754 < 0) {
                    return undefined;
                }
                var o825 = o754 % this.o826;
                var o827 = Math.floor(o754 / this.o826);
                return this.getter(o827)[o825];
            }
            o821.prototype.o828 = function o829(getter) {
                this.getter = getter;
            }
            o821.prototype.o830 = function o831() {
                // Find length
                var o39 = new o40();
                o39.o41('HEAD', o38, false);
                o39.o42(null);
                if (!(o39.o832 >= 200 && o39.o832 < 300 || o39.o832 === 304)) throw new Error("Couldn't load " + o38 + ". Status: " + o39.o832);
                var o833 = Number(o39.o834("Content-length"));
                var o835;
                var o836 = (o835 = o39.o834("Accept-Ranges")) && o835 === "bytes";
                var o826 = 1024 * 1024; // Chunk size in bytes

                if (!o836) o826 = o833;

                // Function to get a range from the remote URL.
                var o837 = (function (from, o838) {
                    if (from > o838) throw new Error("invalid range (" + from + ", " + o838 + ") or no bytes requested!");
                    if (o838 > o833 - 1) throw new Error("only " + o833 + " bytes available! programmer error!");

                    // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
                    var o39 = new o40();
                    o39.o41('GET', o38, false);
                    if (o833 !== o826) o39.o839("Range", "bytes=" + from + "-" + o838);

                    // Some hints to the browser that we want binary data.
                    if (typeof Uint8Array != 'undefined') o39.o840 = 'arraybuffer';
                    if (o39.o841) {
                        o39.o841('text/plain; charset=x-user-defined');
                    }

                    o39.o42(null);
                    if (!(o39.o832 >= 200 && o39.o832 < 300 || o39.o832 === 304)) throw new Error("Couldn't load " + o38 + ". Status: " + o39.o832);
                    if (o39.o842 !== undefined) {
                        return new Uint8Array(o39.o842 || []);
                    } else {
                        return o192(o39.o43 || '', true);
                    }
                });
                var o843 = this;
                o843.o828(function (o827) {
                    var o476 = o827 * o826;
                    var o259 = (o827 + 1) * o826 - 1; // including this byte
                    o259 = Math.o87(o259, o833 - 1); // if datalength-1 is selected, this is the last block
                    if (typeof (o843.o823[o827]) === "undefined") {
                        o843.o823[o827] = o837(o476, o259);
                    }
                    if (typeof (o843.o823[o827]) === "undefined") throw new Error("doXHR failed!");
                    return o843.o823[o827];
                });

                this.o844 = o833;
                this.o845 = o826;
                this.o822 = true;
            }

            var o843 = new o821();
            Object.defineProperty(o843, "length", {
                get: function () {
                    if (!this.o822) {
                        this.o830();
                    }
                    return this.o844;
                }
            });
            Object.defineProperty(o843, "chunkSize", {
                get: function () {
                    if (!this.o822) {
                        this.o830();
                    }
                    return this.o845;
                }
            });

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

        var o494 = o489.o812(o517, name, o813, o795, o796);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (o813.o539) {
            o494.o539 = o813.o539;
        } else if (o813.o38) {
            o494.o539 = null;
            o494.o38 = o813.o38;
        }
        // override each stream op with one that tries to force load the lazy file first
        var o491 = {};
        var keys = Object.keys(o494.o491);
        keys.forEach(function (key) {
            var o846 = o494.o491[key];
            o491[key] = function o847() {
                if (!o489.o817(o494)) {
                    throw new o489.o496(o352.o357);
                }
                return o846.apply(null, arguments);
            };
        });
        // use a custom read function
        o491.o27 = function o848(o492, buffer, o107, length, o563) {
            if (!o489.o817(o494)) {
                throw new o489.o496(o352.o357);
            }
            var o539 = o492.o494.o539;
            if (o563 >= o539.length)
                return 0;
            var o85 = Math.o87(o539.length - o563, length);
            o73(o85 >= 0);
            if (o539.slice) { // normal array
                for (var o82 = 0; o82 < o85; o82++) {
                    buffer[o107 + o82] = o539[o563 + o82];
                }
            } else {
                for (var o82 = 0; o82 < o85; o82++) { // LazyUint8Array from sync binary XHR
                    buffer[o107 + o82] = o539.get(o563 + o82);
                }
            }
            return o85;
        };
        o494.o491 = o491;
        return o494;
    },
    o849: function (o517, name, o38, o795, o796, o850, o599, o851, o564) {
        o852.o483();
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var o853 = name ? o605.resolve(o605.o606(o517, name)) : o517;

        function o854(o855) {
            function o856(o855) {
                if (!o851) {
                    o489.o814(o517, name, o855, o795, o796, o564);
                }
                if (o850) o850();
                o334('cp ' + o853);
            }
            var o857 = false;
            Module['preloadPlugins'].forEach(function (o858) {
                if (o857) return;
                if (o858['canHandle'](o853)) {
                    o858['handle'](o855, o853, o856, function () {
                        if (o599) o599();
                        o334('cp ' + o853);
                    });
                    o857 = true;
                }
            });
            if (!o857) o856(o855);
        }
        o332('cp ' + o853);
        if (typeof o38 == 'string') {
            o852.o859(o38, function (o855) {
                o854(o855);
            }, o599);
        } else {
            o854(o38);
        }
    },
    o571: function () {
        return o19.o571 || o19.o572 || o19.o573 || o19.o574;
    },
    o860: function () {
        return 'EM_FS_' + o19.o861.o862;
    },
    o575: 20,
    o576: "FILE_DATA",
    o863: function (o864, o850, o599) {
        o850 = o850 || function () {};
        o599 = o599 || function () {};
        var o571 = o489.o571();
        try {
            var o865 = o571.o41(o489.o860(), o489.o575);
        } catch (o189) {
            return o599(o189);
        }
        o865.o589 = function o866() {
            o44.o45('creating db');
            var o587 = o865.o503;
            o587.o595(o489.o576);
        };
        o865.o598 = function o867() {
            var o587 = o865.o503;
            var o590 = o587.o590([o489.o576], 'readwrite');
            var o868 = o590.o594(o489.o576);
            var o869 = 0,
                o870 = 0,
                o630 = o864.length;

            function o856() {
                if (o870 == 0) o850();
                else o599();
            }
            o864.forEach(function (o31) {
                var o871 = o868.o627(o489.o804(o31).o734.o539, o31);
                o871.o598 = function o872() {
                    o869++;
                    if (o869 + o870 == o630) o856()
                };
                o871.o599 = function o873() {
                    o870++;
                    if (o869 + o870 == o630) o856()
                };
            });
            o590.o599 = o599;
        };
        o865.o599 = o599;
    },
    o874: function (o864, o850, o599) {
        o850 = o850 || function () {};
        o599 = o599 || function () {};
        var o571 = o489.o571();
        try {
            var o865 = o571.o41(o489.o860(), o489.o575);
        } catch (o189) {
            return o599(o189);
        }
        o865.o589 = o599; // no database to load from
        o865.o598 = function o867() {
            var o587 = o865.o503;
            try {
                var o590 = o587.o590([o489.o576], 'readonly');
            } catch (o189) {
                o599(o189);
                return;
            }
            var o868 = o590.o594(o489.o576);
            var o869 = 0,
                o870 = 0,
                o630 = o864.length;

            function o856() {
                if (o870 == 0) o850();
                else o599();
            }
            o864.forEach(function (o31) {
                var o875 = o868.get(o31);
                o875.o598 = function o876() {
                    if (o489.o804(o31).o805) {
                        o489.o528(o31);
                    }
                    o489.o814(o605.o698(o31), o605.o755(o31), o875.o503, true, true, true);
                    o869++;
                    if (o869 + o870 == o630) o856();
                };
                o875.o599 = function o877() {
                    o870++;
                    if (o869 + o870 == o630) o856()
                };
            });
            o590.o599 = o599;
        };
        o865.o599 = o599;
    }
};
var o605 = {
    o878: function (o28) {
        var o879 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return o879.exec(o28).slice(1);
    },
    o690: function (o249, o880) {
        // if the path tries to go above the root, `up` ends up > 0
        var o881 = 0;
        for (var o82 = o249.length - 1; o82 >= 0; o82--) {
            var o882 = o249[o82];
            if (o882 === '.') {
                o249.splice(o82, 1);
            } else if (o882 === '..') {
                o249.splice(o82, 1);
                o881++;
            } else if (o881) {
                o249.splice(o82, 1);
                o881--;
            }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (o880) {
            for (; o881--; o881) {
                o249.unshift('..');
            }
        }
        return o249;
    },
    normalize: function (o31) {
        var o883 = o31.charAt(0) === '/',
            o884 = o31.substr(-1) === '/';
        // Normalize the path
        o31 = o605.o690(o31.split('/').filter(function (o602) {
            return !!o602;
        }), !o883).join('/');
        if (!o31 && !o883) {
            o31 = '.';
        }
        if (o31 && o884) {
            o31 += '/';
        }
        return (o883 ? '/' : '') + o31;
    },
    o698: function (o31) {
        var o503 = o605.o878(o31),
            o604 = o503[0],
            o521 = o503[1];
        if (!o604 && !o521) {
            // No dirname whatsoever
            return '.';
        }
        if (o521) {
            // It has a dirname, strip trailing slash
            o521 = o521.substr(0, o521.length - 1);
        }
        return o604 + o521;
    },
    o755: function (o31) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (o31 === '/') return '/';
        var o885 = o31.lastIndexOf('/');
        if (o885 === -1) return o31;
        return o31.substr(o885 + 1);
    },
    o886: function (o31) {
        return o605.o878(o31)[3];
    },
    join: function () {
        var o864 = Array.prototype.slice.call(arguments, 0);
        return o605.normalize(o864.join('/'));
    },
    o606: function (o65, o887) {
        return o605.normalize(o65 + '/' + o887);
    },
    resolve: function () {
        var o888 = '',
            o889 = false;
        for (var o82 = arguments.length - 1; o82 >= -1 && !o889; o82--) {
            var o31 = (o82 >= 0) ? arguments[o82] : o489.o686();
            // Skip empty and invalid entries
            if (typeof o31 !== 'string') {
                throw new o890('Arguments to path.resolve must be strings');
            } else if (!o31) {
                continue;
            }
            o888 = o31 + '/' + o888;
            o889 = o31.charAt(0) === '/';
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        o888 = o605.o690(o888.split('/').filter(function (o602) {
            return !!o602;
        }), !o889).join('/');
        return ((o889 ? '/' : '') + o888) || '.';
    },
    o764: function (from, o838) {
        from = o605.resolve(from).substr(1);
        o838 = o605.resolve(o838).substr(1);

        function o891(o815) {
            var o476 = 0;
            for (; o476 < o815.length; o476++) {
                if (o815[o476] !== '') break;
            }
            var o259 = o815.length - 1;
            for (; o259 >= 0; o259--) {
                if (o815[o259] !== '') break;
            }
            if (o476 > o259) return [];
            return o815.slice(o476, o259 - o476 + 1);
        }
        var o892 = o891(from.split('/'));
        var o893 = o891(o838.split('/'));
        var length = Math.o87(o892.length, o893.length);
        var o894 = length;
        for (var o82 = 0; o82 < length; o82++) {
            if (o892[o82] !== o893[o82]) {
                o894 = o82;
                break;
            }
        }
        var o895 = [];
        for (var o82 = o894; o82 < o892.length; o82++) {
            o895.push('..');
        }
        o895 = o895.concat(o893.slice(o894));
        return o895.join('/');
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
            o852.o896.o899 = true;
        },
        o903: function () {
            if (o852.o896.o900) {
                o852.o896.o900 = false;
                o852.o896.o897();
            }
            o852.o896.o899 = false;
        },
        o904: function () {
            if (Module['setStatus']) {
                var o793 = Module['statusMessage'] || 'Please wait...';
                var o905 = o852.o896.o906;
                var o907 = o852.o896.o908;
                if (o905) {
                    if (o905 < o907) {
                        Module['setStatus'](o793 + ' (' + (o907 - o905) + '/' + o907 + ')');
                    } else {
                        Module['setStatus'](o793);
                    }
                } else {
                    Module['setStatus']('');
                }
            }
        }
    },
    o909: false,
    o910: false,
    o911: [],
    o912: [],
    o483: function () {
        if (!Module["preloadPlugins"]) Module["preloadPlugins"] = []; // needs to exist even in workers

        if (o852.o913 || o20) return;
        o852.o913 = true;

        try {
            new o914();
            o852.o915 = true;
        } catch (o189) {
            o852.o915 = false;
            o44.o45("warning: no blob constructor, cannot create blobs with mimetypes");
        }
        o852.o916 = typeof o917 != "undefined" ? o917 : (typeof o918 != "undefined" ? o918 : (!o852.o915 ? o44.o45("warning: no BlobBuilder") : null));
        o852.o919 = typeof o19 != "undefined" ? (o19.o920 ? o19.o920 : o19.o921) : undefined;
        if (!Module.o922 && typeof o852.o919 === 'undefined') {
            o44.o45("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
            Module.o922 = true;
        }

        // Support for plugins that can process preloaded files. You can add more of these to
        // your app by creating and appending to Module.preloadPlugins.
        //
        // Each plugin is asked if it can handle a file based on the file's name. If it can,
        // it is given the file's raw data. When it is done, it calls a callback with the file's
        // (possibly modified) data. For example, a plugin might decompress a file, or it
        // might create some side data structure for use later (like an Image element, etc.).

        var o923 = {};
        o923['canHandle'] = function o924(name) {
            return !Module.o922 && /\.(jpg|jpeg|png|bmp)$/i.test(name);
        };
        o923['handle'] = function o925(o855, name, o850, o599) {
            var o308 = null;
            if (o852.o915) {
                try {
                    o308 = new o914([o855], {
                        type: o852.o926(name)
                    });
                    if (o308.o85 !== o855.length) { // Safari bug #118630
                        // Safari's Blob can only take an ArrayBuffer
                        o308 = new o914([(new Uint8Array(o855)).buffer], {
                            type: o852.o926(name)
                        });
                    }
                } catch (o189) {
                    o48.o123('Blob constructor present but fails: ' + o189 + '; falling back to blob builder');
                }
            }
            if (!o308) {
                var o927 = new o852.o916();
                o927.o928((new Uint8Array(o855)).buffer); // we need to pass a buffer, and must copy the array to get the right data range
                o308 = o927.o929();
            }
            var o38 = o852.o919.o930(o308);
            var o931 = new o932();
            o931.o850 = function o933() {
                o73(o931.o934, 'Image ' + name + ' could not be decoded');
                var o935 = o936.o937('canvas');
                o935.o938 = o931.o938;
                o935.o939 = o931.o939;
                var o940 = o935.o941('2d');
                o940.o942(o931, 0, 0);
                Module["preloadedImages"][name] = o935;
                o852.o919.o943(o38);
                if (o850) o850(o855);
            };
            o931.o599 = function o944(o612) {
                o44.o45('Image ' + o38 + ' could not be decoded');
                if (o599) o599();
            };
            o931.o342 = o38;
        };
        Module['preloadPlugins'].push(o923);

        var o945 = {};
        o945['canHandle'] = function o946(name) {
            return !Module.o947 && name.substr(-4) in {
                '.ogg': 1,
                '.wav': 1,
                '.mp3': 1
            };
        };
        o945['handle'] = function o948(o855, name, o850, o599) {
            var done = false;

            function o856(o949) {
                if (done) return;
                done = true;
                Module["preloadedAudios"][name] = o949;
                if (o850) o850(o855);
            }

            function o870() {
                if (done) return;
                done = true;
                Module["preloadedAudios"][name] = new o950(); // empty shim
                if (o599) o599();
            }
            if (o852.o915) {
                try {
                    var o308 = new o914([o855], {
                        type: o852.o926(name)
                    });
                } catch (o189) {
                    return o870();
                }
                var o38 = o852.o919.o930(o308); // XXX we never revoke this!
                var o949 = new o950();
                o949.o951('canplaythrough', function () {
                    o856(o949)
                }, false); // use addEventListener due to chromium bug 124926
                o949.o599 = function o952(o612) {
                    if (done) return;
                    o44.o45('warning: browser could not fully decode audio ' + name + ', trying slower base64 approach');

                    function o953(o783) {
                        var o954 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                        var o955 = '=';
                        var o30 = '';
                        var o956 = 0;
                        var o957 = 0;
                        for (var o82 = 0; o82 < o783.length; o82++) {
                            o956 = (o956 << 8) | o783[o82];
                            o957 += 8;
                            while (o957 >= 6) {
                                var o99 = (o956 >> (o957 - 6)) & 0x3f;
                                o957 -= 6;
                                o30 += o954[o99];
                            }
                        }
                        if (o957 == 2) {
                            o30 += o954[(o956 & 3) << 4];
                            o30 += o955 + o955;
                        } else if (o957 == 4) {
                            o30 += o954[(o956 & 0xf) << 2];
                            o30 += o955;
                        }
                        return o30;
                    }
                    o949.o342 = 'data:audio/x-' + name.substr(-3) + ';base64,' + o953(o855);
                    o856(o949); // we don't wait for confirmation this worked - but it's worth trying
                };
                o949.o342 = o38;
                // workaround for chrome bug 124926 - we do not always get oncanplaythrough or onerror
                o852.o958(function () {
                    o856(o949); // try to use it even though it is not necessarily ready to play
                }, 10000);
            } else {
                return o870();
            }
        };
        Module['preloadPlugins'].push(o945);

        // Canvas event setup

        var o935 = Module['canvas'];

        // forced aspect ratio can be enabled by defining 'forcedAspectRatio' on Module
        // Module['forcedAspectRatio'] = 4 / 3;

        o935.o959 = o935['requestPointerLock'] ||
            o935['mozRequestPointerLock'] ||
            o935['webkitRequestPointerLock'] ||
            o935['msRequestPointerLock'] ||
            function () {};
        o935.o960 = o936['exitPointerLock'] ||
            o936['mozExitPointerLock'] ||
            o936['webkitExitPointerLock'] ||
            o936['msExitPointerLock'] ||
            function () {}; // no-op if function does not exist
        o935.o960 = o935.o960.bind(o936);

        function o961() {
            o852.o910 = o936['pointerLockElement'] === o935 ||
                o936['mozPointerLockElement'] === o935 ||
                o936['webkitPointerLockElement'] === o935 ||
                o936['msPointerLockElement'] === o935;
        }

        o936.o951('pointerlockchange', o961, false);
        o936.o951('mozpointerlockchange', o961, false);
        o936.o951('webkitpointerlockchange', o961, false);
        o936.o951('mspointerlockchange', o961, false);

        if (Module['elementPointerLock']) {
            o935.o951("click", function (o962) {
                if (!o852.o910 && o935.o959) {
                    o935.o959();
                    o962.o963();
                }
            }, false);
        }
    },
    o964: function (o935, o965, o966, o967) {
        var o940;
        var o968 = '?';

        function o969(o612) {
            o968 = o612.o970 || o968;
        }
        try {
            if (o965) {
                var o971 = {
                    o972: false,
                    o973: false
                };

                if (o967) {
                    for (var o974 in o967) {
                        o971[o974] = o967[o974];
                    }
                }


                o935.o951('webglcontextcreationerror', o969, false);
                try {
                    ['experimental-webgl', 'webgl'].some(function (o975) {
                        return o940 = o935.o941(o975, o971);
                    });
                } finally {
                    o935.o976('webglcontextcreationerror', o969, false);
                }
            } else {
                o940 = o935.o941('2d');
            }
            if (!o940) throw ':(';
        } catch (o189) {
            Module.print('Could not create canvas: ' + [o968, o189]);
            return null;
        }
        if (o965) {
            // Set the background of the WebGL canvas to black
            o935.o977.o978 = "black";

            // Warn on context loss
            o935.o951('webglcontextlost', function (o612) {
                o979('WebGL context lost. You will need to reload the page.');
            }, false);
        }
        if (o966) {
            o980 = Module.o940 = o940;
            Module.o965 = o965;
            o852.o911.forEach(function (o278) {
                o278()
            });
            o852.o483();
        }
        return o940;
    },
    o981: function (o935, o965, o966) {},
    o982: false,
    o983: undefined,
    o984: undefined,
    o985: function (o983, o984) {
        o852.o983 = o983;
        o852.o984 = o984;
        if (typeof o852.o983 === 'undefined') o852.o983 = true;
        if (typeof o852.o984 === 'undefined') o852.o984 = false;

        var o935 = Module['canvas'];
        var o986 = o935.o987;

        function o988() {
            o852.o909 = false;
            if ((o936['webkitFullScreenElement'] || o936['webkitFullscreenElement'] ||
                o936['mozFullScreenElement'] || o936['mozFullscreenElement'] ||
                o936['fullScreenElement'] || o936['fullscreenElement'] ||
                o936['msFullScreenElement'] || o936['msFullscreenElement'] ||
                o936['webkitCurrentFullScreenElement']) === o986) {
                o935.o989 = o936['cancelFullScreen'] ||
                    o936['mozCancelFullScreen'] ||
                    o936['webkitCancelFullScreen'] ||
                    o936['msExitFullscreen'] ||
                    o936['exitFullscreen'] ||
                    function () {};
                o935.o989 = o935.o989.bind(o936);
                if (o852.o983) o935.o959();
                o852.o909 = true;
                if (o852.o984) o852.o990();
            } else {

                // remove the full screen specific parent of the canvas again to restore the HTML structure from before going full screen
                var o986 = o935.o987;
                o986.o987.o991(o935, o986);
                o986.o987.o992(o986);

                if (o852.o984) o852.o993();
            }
            if (Module['onFullScreen']) Module['onFullScreen'](o852.o909);
            o852.o994(o935);
        }

        if (!o852.o982) {
            o852.o982 = true;
            o936.o951('fullscreenchange', o988, false);
            o936.o951('mozfullscreenchange', o988, false);
            o936.o951('webkitfullscreenchange', o988, false);
            o936.o951('MSFullscreenChange', o988, false);
        }

        // create a new parent to ensure the canvas has no siblings. this allows browsers to optimize full screen performance when its parent is the full screen root
        var o986 = o936.o937("div");
        o935.o987.o991(o986, o935);
        o986.o995(o935);

        // use parent of canvas as full screen root to allow aspect ratio correction (Firefox stretches the root to screen size)
        o986.o985 = o986['requestFullScreen'] ||
            o986['mozRequestFullScreen'] ||
            o986['msRequestFullscreen'] ||
            (o986['webkitRequestFullScreen'] ? function () {
            o986['webkitRequestFullScreen'](Element['ALLOW_KEYBOARD_INPUT'])
        } : null);
        o986.o985();
    },
    o996: function o996(o116) {
        if (typeof o19 === 'undefined') { // Provide fallback to setTimeout if window is undefined (e.g. in Node.js)
            o997(o116, 1000 / 60);
        } else {
            if (!o19.o996) {
                o19.o996 = o19['requestAnimationFrame'] ||
                    o19['mozRequestAnimationFrame'] ||
                    o19['webkitRequestAnimationFrame'] ||
                    o19['msRequestAnimationFrame'] ||
                    o19['oRequestAnimationFrame'] ||
                    o19['setTimeout'];
            }
            o19.o996(o116);
        }
    },
    o998: function (o116) {
        return function () {
            if (!o154) return o116.apply(null, arguments);
        };
    },
    o999: function (o116) {
        return o852.o996(function () {
            if (!o154) o116();
        });
    },
    o958: function (o116, o1000) {
        return o997(function () {
            if (!o154) o116();
        }, o1000);
    },
    o1001: function (o116, o1000) {
        return o1002(function () {
            if (!o154) o116();
        }, o1000);
    },
    o926: function (name) {
        return {
            'jpg': 'image/jpeg',
            'jpeg': 'image/jpeg',
            'png': 'image/png',
            'bmp': 'image/bmp',
            'ogg': 'audio/ogg',
            'wav': 'audio/wav',
            'mp3': 'audio/mpeg'
        }[name.substr(name.lastIndexOf('.') + 1)];
    },
    o1003: function (o116) {
        if (!o19.o1003) {
            o19.o1003 = o1004['getUserMedia'] ||
                o1004['mozGetUserMedia'];
        }
        o19.o1003(o116);
    },
    o1005: function (o612) {
        return o612['movementX'] ||
            o612['mozMovementX'] ||
            o612['webkitMovementX'] ||
            0;
    },
    o1006: function (o612) {
        return o612['movementY'] ||
            o612['mozMovementY'] ||
            o612['webkitMovementY'] ||
            0;
    },
    o1007: function (o612) {
        return Math.o75(-1, Math.o87(1, o612.type === 'DOMMouseScroll' ? o612.o1008 : -o612.o1009));
    },
    o1010: 0,
    o1011: 0,
    o1012: 0,
    o1013: 0,
    o1014: function (o612) { // event should be mousemove, mousedown or mouseup
        if (o852.o910) {
            // When the pointer is locked, calculate the coordinates
            // based on the movement of the mouse.
            // Workaround for Firefox bug 764498
            if (o612.type != 'mousemove' &&
                ('mozMovementX' in o612)) {
                o852.o1012 = o852.o1013 = 0;
            } else {
                o852.o1012 = o852.o1005(o612);
                o852.o1013 = o852.o1006(o612);
            }

            // check if SDL is available
            if (typeof o1015 != "undefined") {
                o852.o1010 = o1015.o1010 + o852.o1012;
                o852.o1011 = o1015.o1011 + o852.o1013;
            } else {
                // just add the mouse delta to the current absolut mouse position
                // FIXME: ideally this should be clamped against the canvas size and zero
                o852.o1010 += o852.o1012;
                o852.o1011 += o852.o1013;
            }
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
            if (o612.type == 'touchstart' ||
                o612.type == 'touchend' ||
                o612.type == 'touchmove') {
                var o227 = o612.o1022.o80(0);
                if (o227) {
                    o23 = o227.o1023 - (o1018 + o1016.o1024);
                    o64 = o227.o1025 - (o1020 + o1016.o11);
                } else {
                    return;
                }
            } else {
                o23 = o612.o1023 - (o1018 + o1016.o1024);
                o64 = o612.o1025 - (o1020 + o1016.o11);
            }

            // the canvas might be CSS-scaled compared to its backbuffer;
            // SDL-using content will want mouse coordinates in terms
            // of backbuffer units.
            var o1026 = Module["canvas"].o938;
            var o237 = Module["canvas"].o939;
            o23 = o23 * (o1026 / o1016.o938);
            o64 = o64 * (o237 / o1016.o939);

            o852.o1012 = o23 - o852.o1010;
            o852.o1013 = o64 - o852.o1011;
            o852.o1010 = o23;
            o852.o1011 = o64;
        }
    },
    o1027: function (o38, o850, o599) {
        var o39 = new o40();
        o39.o41('GET', o38, true);
        o39.o840 = 'arraybuffer';
        o39.o850 = function o1028() {
            if (o39.o832 == 200 || (o39.o832 == 0 && o39.o842)) { // file URLs can return 0
                o850(o39.o842);
            } else {
                o599();
            }
        };
        o39.o599 = o599;
        o39.o42(null);
    },
    o859: function (o38, o850, o599, o1029) {
        o852.o1027(o38, function (o1030) {
            o73(o1030, 'Loading data file "' + o38 + '" failed (no arrayBuffer).');
            o850(new Uint8Array(o1030));
            if (!o1029) o334('al ' + o38);
        }, function (o612) {
            if (o599) {
                o599();
            } else {
                throw 'Loading data file "' + o38 + '" failed.';
            }
        });
        if (!o1029) o332('al ' + o38);
    },
    o1031: [],
    o1032: function () {
        var o935 = Module['canvas'];
        o852.o1031.forEach(function (o1033) {
            o1033(o935.o938, o935.o939);
        });
    },
    o1034: function (o938, o939, o1035) {
        var o935 = Module['canvas'];
        o852.o994(o935, o938, o939);
        if (!o1035) o852.o1032();
    },
    o1036: 0,
    o1037: 0,
    o990: function () {
        // check if SDL is available   
        if (typeof o1015 != "undefined") {
            var flags = o267[((o1015.o1038 + o48.o71 * 0) >> 2)];
            flags = flags | 0x00800000; // set SDL_FULLSCREEN flag
            o202[((o1015.o1038 + o48.o71 * 0) >> 2)] = flags
        }
        o852.o1032();
    },
    o993: function () {
        // check if SDL is available       
        if (typeof o1015 != "undefined") {
            var flags = o267[((o1015.o1038 + o48.o71 * 0) >> 2)];
            flags = flags & ~0x00800000; // clear SDL_FULLSCREEN flag
            o202[((o1015.o1038 + o48.o71 * 0) >> 2)] = flags
        }
        o852.o1032();
    },
    o994: function (o935, o1039, o1040) {
        if (o1039 && o1040) {
            o935.o1041 = o1039;
            o935.o1042 = o1040;
        } else {
            o1039 = o935.o1041;
            o1040 = o935.o1042;
        }
        var o1043 = o1039;
        var o66 = o1040;
        if (Module['forcedAspectRatio'] && Module['forcedAspectRatio'] > 0) {
            if (o1043 / o66 < Module['forcedAspectRatio']) {
                o1043 = Math.o67(o66 * Module['forcedAspectRatio']);
            } else {
                o66 = Math.o67(o1043 / Module['forcedAspectRatio']);
            }
        }
        if (((o936['webkitFullScreenElement'] || o936['webkitFullscreenElement'] ||
            o936['mozFullScreenElement'] || o936['mozFullscreenElement'] ||
            o936['fullScreenElement'] || o936['fullscreenElement'] ||
            o936['msFullScreenElement'] || o936['msFullscreenElement'] ||
            o936['webkitCurrentFullScreenElement']) === o935.o987) && (typeof o1038 != 'undefined')) {
            var o1044 = Math.o87(o1038.o938 / o1043, o1038.o939 / o66);
            o1043 = Math.o67(o1043 * o1044);
            o66 = Math.o67(o66 * o1044);
        }
        if (o852.o984) {
            if (o935.o938 != o1043) o935.o938 = o1043;
            if (o935.o939 != o66) o935.o939 = o66;
            if (typeof o935.o977 != 'undefined') {
                o935.o977.o1045("width");
                o935.o977.o1045("height");
            }
        } else {
            if (o935.o938 != o1039) o935.o938 = o1039;
            if (o935.o939 != o1040) o935.o939 = o1040;
            if (typeof o935.o977 != 'undefined') {
                if (o1043 != o1039 || o66 != o1040) {
                    o935.o977.o1046("width", o1043 + "px", "important");
                    o935.o977.o1046("height", o66 + "px", "important");
                } else {
                    o935.o977.o1045("width");
                    o935.o977.o1045("height");
                }
            }
        }
    }
};

function o1047(o114) {
    var o30 = Math.floor(Date.o4() / 1000);
    if (o114) {
        o202[((o114) >> 2)] = o30;
    }
    return o30;
}


Module["_strlen"] = o1048;

o350 = o48.o141(4);
o202[((o350) >> 2)] = 0;
Module["requestFullScreen"] = function o1049(o983, o984) {
    o852.o985(o983, o984)
};
Module["requestAnimationFrame"] = function o1050(o116) {
    o852.o996(o116)
};
Module["setCanvasSize"] = function o1051(o938, o939, o1035) {
    o852.o1034(o938, o939, o1035)
};
Module["pauseMainLoop"] = function o1052() {
    o852.o896.o902()
};
Module["resumeMainLoop"] = function o1053() {
    o852.o896.o903()
};
Module["getUserMedia"] = function o1054() {
    o852.o1003()
}
o489.o637();
o280.unshift({
    o116: function () {
        if (!Module["noFSInit"] && !o489.o483.o682) o489.o483()
    }
});
o281.push({
    o116: function () {
        o489.o683 = false
    }
});
o282.push({
    o116: function () {
        o489.o794()
    }
});
Module["FS_createFolder"] = o489.o809;
Module["FS_createPath"] = o489.o810;
Module["FS_createDataFile"] = o489.o814;
Module["FS_createPreloadedFile"] = o489.o849;
Module["FS_createLazyFile"] = o489.o820;
Module["FS_createLink"] = o489.o816;
Module["FS_createDevice"] = o489.o788;
o280.unshift({
    o116: function () {
        o481.o483()
    }
});
o282.push({
    o116: function () {
        o481.o484()
    }
});
o481.o229 = new o48.o129();
if (o16) {
    var o641 = require("fs");
    o635.o637();
}
o270 = o50 = o48.o100(o142);

o269 = true; // seal the static portion of memory

o271 = o270 + 5242880;

o272 = o144 = o48.o100(o271);

o73(o272 < o145, "TOTAL_MEMORY not big enough for stack");


var o204 = Math.o87;

function o1055(o23, o64) {
    Module.print('int ' + o23 + ',' + o64); // + ' ' + new Error().stack);
}

function o1056(o23, o64) {
    Module.print('float ' + o23 + ',' + o64); // + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var o1057 = (function (global, o1058, buffer) {
    "use asm";
    var o247 = new global.Int8Array(buffer);
    var o308 = new global.Int16Array(buffer);
    var o258 = new global.Int32Array(buffer);
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
        o247 = o247 | 0;
        var o308 = 0;
        o308 = o82;
        o82 = o82 + o247 | 0;
        o82 = o82 + 7 & -8;
        return o308 | 0
    }

    function o1110() {
        return o82 | 0
    }

    function o1111(o247) {
        o247 = o247 | 0;
        o82 = o247
    }

    function o1112(o247, o308) {
        o247 = o247 | 0;
        o308 = o308 | 0;
        if ((o750 | 0) == 0) {
            o750 = o247;
            o1062 = o308
        }
    }

    function o1113(o308) {
        o308 = o308 | 0;
        o247[o111] = o247[o308];
        o247[o111 + 1 | 0] = o247[o308 + 1 | 0];
        o247[o111 + 2 | 0] = o247[o308 + 2 | 0];
        o247[o111 + 3 | 0] = o247[o308 + 3 | 0]
    }

    function o1114(o308) {
        o308 = o308 | 0;
        o247[o111] = o247[o308];
        o247[o111 + 1 | 0] = o247[o308 + 1 | 0];
        o247[o111 + 2 | 0] = o247[o308 + 2 | 0];
        o247[o111 + 3 | 0] = o247[o308 + 3 | 0];
        o247[o111 + 4 | 0] = o247[o308 + 4 | 0];
        o247[o111 + 5 | 0] = o247[o308 + 5 | 0];
        o247[o111 + 6 | 0] = o247[o308 + 6 | 0];
        o247[o111 + 7 | 0] = o247[o308 + 7 | 0]
    }

    function o1115(o247) {
        o247 = o247 | 0;
        o1070 = o247
    }

    function o1116(o247) {
        o247 = o247 | 0;
        o1071 = o247
    }

    function o1117(o247) {
        o247 = o247 | 0;
        o1072 = o247
    }

    function o1118(o247) {
        o247 = o247 | 0;
        o1073 = o247
    }

    function o1119(o247) {
        o247 = o247 | 0;
        o1074 = o247
    }

    function o1120(o247) {
        o247 = o247 | 0;
        o1075 = o247
    }

    function o1121(o247) {
        o247 = o247 | 0;
        o1076 = o247
    }

    function o1122(o247) {
        o247 = o247 | 0;
        o1077 = o247
    }

    function o1123(o247) {
        o247 = o247 | 0;
        o1078 = o247
    }

    function o1124(o247) {
        o247 = o247 | 0;
        o1079 = o247
    }

    function o1125() {
        var o308 = 0,
            o1059 = 0,
            o189 = 0,
            o34 = 0;
        o308 = o82;
        o1100() | 0;
        o1100() | 0;
        o1059 = o1126(48) | 0;
        o258[2] = o1059;
        o189 = o1126(48) | 0;
        o258[4] = o189;
        o258[o189 >> 2] = o1059;
        o258[o189 + 4 >> 2] = 0;
        o258[o189 + 8 >> 2] = 10001;
        o258[o189 + 12 >> 2] = 40;
        o1059 = o189 + 16 | 0;
        o189 = 24 | 0;
        o34 = o1059 + 31 | 0;
        do {
            o247[o1059] = o247[o189] | 0;
            o1059 = o1059 + 1 | 0;
            o189 = o189 + 1 | 0
        } while ((o1059 | 0) < (o34 | 0));
        o258[1716 >> 2] = 10;
        o1100() | 0;
        o189 = 0;
        do {
            o247[10688] = 65;
            o247[10680] = 66;
            o258[2616] = 1;
            o258[10504 >> 2] = 7;
            o258[10508 >> 2] = 7;
            o258[10624 >> 2] = 8;
            o258[1720 >> 2] = 8;
            o258[1724 >> 2] = 8;
            o258[1716 >> 2] = (o258[1716 >> 2] | 0) + 1;
            o258[5800 >> 2] = 7;
            o258[2674] = 5;
            o1059 = o258[4] | 0;
            o258[o1059 + 12 >> 2] = 5;
            o34 = o258[o1059 >> 2] | 0;
            o258[o34 + 12 >> 2] = 5;
            o258[o34 >> 2] = o34;
            o34 = o247[10680] | 0;
            if (!(o34 << 24 >> 24 < 65)) {
                o1059 = 65;
                do {
                    o1059 = o1059 + 1 << 24 >> 24;
                } while (!(o1059 << 24 >> 24 > o34 << 24 >> 24))
            }
            o189 = o189 + 1 | 0;
        } while ((o189 | 0) != 1e8);
        o82 = o308;
        return 0
    }

    function o1126(o247) {
        o247 = o247 | 0;
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
        o308 = o82;
        do {
            if (o247 >>> 0 < 245) {
                if (o247 >>> 0 < 11) {
                    o1059 = 16
                } else {
                    o1059 = o247 + 11 & -8
                }
                o189 = o1059 >>> 3;
                o34 = o258[2676] | 0;
                o1060 = o34 >>> o189;
                if ((o1060 & 3 | 0) != 0) {
                    o66 = (o1060 & 1 ^ 1) + o189 | 0;
                    o1061 = o66 << 1;
                    o111 = 10744 + (o1061 << 2) | 0;
                    o65 = 10744 + (o1061 + 2 << 2) | 0;
                    o1061 = o258[o65 >> 2] | 0;
                    o750 = o1061 + 8 | 0;
                    o1062 = o258[o750 >> 2] | 0;
                    do {
                        if ((o111 | 0) == (o1062 | 0)) {
                            o258[2676] = o34 & ~(1 << o66)
                        } else {
                            if (o1062 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                                o1102()
                            }
                            o1063 = o1062 + 12 | 0;
                            if ((o258[o1063 >> 2] | 0) == (o1061 | 0)) {
                                o258[o1063 >> 2] = o111;
                                o258[o65 >> 2] = o1062;
                                break
                            } else {
                                o1102()
                            }
                        }
                    } while (0);
                    o1062 = o66 << 3;
                    o258[o1061 + 4 >> 2] = o1062 | 3;
                    o65 = o1061 + (o1062 | 4) | 0;
                    o258[o65 >> 2] = o258[o65 >> 2] | 1;
                    o602 = o750;
                    o82 = o308;
                    return o602 | 0
                }
                if (!(o1059 >>> 0 > (o258[10712 >> 2] | 0) >>> 0)) {
                    o1064 = o1059;
                    break
                }
                if ((o1060 | 0) != 0) {
                    o65 = 2 << o189;
                    o1062 = o1060 << o189 & (o65 | 0 - o65);
                    o65 = (o1062 & 0 - o1062) + -1 | 0;
                    o1062 = o65 >>> 12 & 16;
                    o111 = o65 >>> o1062;
                    o65 = o111 >>> 5 & 8;
                    o1063 = o111 >>> o65;
                    o111 = o1063 >>> 2 & 4;
                    o887 = o1063 >>> o111;
                    o1063 = o887 >>> 1 & 2;
                    o1065 = o887 >>> o1063;
                    o887 = o1065 >>> 1 & 1;
                    o227 = (o65 | o1062 | o111 | o1063 | o887) + (o1065 >>> o887) | 0;
                    o887 = o227 << 1;
                    o1065 = 10744 + (o887 << 2) | 0;
                    o1063 = 10744 + (o887 + 2 << 2) | 0;
                    o887 = o258[o1063 >> 2] | 0;
                    o111 = o887 + 8 | 0;
                    o1062 = o258[o111 >> 2] | 0;
                    do {
                        if ((o1065 | 0) == (o1062 | 0)) {
                            o258[2676] = o34 & ~(1 << o227)
                        } else {
                            if (o1062 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                                o1102()
                            }
                            o65 = o1062 + 12 | 0;
                            if ((o258[o65 >> 2] | 0) == (o887 | 0)) {
                                o258[o65 >> 2] = o1065;
                                o258[o1063 >> 2] = o1062;
                                break
                            } else {
                                o1102()
                            }
                        }
                    } while (0);
                    o1062 = o227 << 3;
                    o1063 = o1062 - o1059 | 0;
                    o258[o887 + 4 >> 2] = o1059 | 3;
                    o1065 = o887;
                    o34 = o1065 + o1059 | 0;
                    o258[o1065 + (o1059 | 4) >> 2] = o1063 | 1;
                    o258[o1065 + o1062 >> 2] = o1063;
                    o1062 = o258[10712 >> 2] | 0;
                    if ((o1062 | 0) != 0) {
                        o1065 = o258[10724 >> 2] | 0;
                        o189 = o1062 >>> 3;
                        o1062 = o189 << 1;
                        o1060 = 10744 + (o1062 << 2) | 0;
                        o750 = o258[2676] | 0;
                        o1061 = 1 << o189;
                        do {
                            if ((o750 & o1061 | 0) == 0) {
                                o258[2676] = o750 | o1061;
                                o1066 = 10744 + (o1062 + 2 << 2) | 0;
                                o1067 = o1060
                            } else {
                                o189 = 10744 + (o1062 + 2 << 2) | 0;
                                o66 = o258[o189 >> 2] | 0;
                                if (!(o66 >>> 0 < (o258[10720 >> 2] | 0) >>> 0)) {
                                    o1066 = o189;
                                    o1067 = o66;
                                    break
                                }
                                o1102()
                            }
                        } while (0);
                        o258[o1066 >> 2] = o1065;
                        o258[o1067 + 12 >> 2] = o1065;
                        o258[o1065 + 8 >> 2] = o1067;
                        o258[o1065 + 12 >> 2] = o1060
                    }
                    o258[10712 >> 2] = o1063;
                    o258[10724 >> 2] = o34;
                    o602 = o111;
                    o82 = o308;
                    return o602 | 0
                }
                o1062 = o258[10708 >> 2] | 0;
                if ((o1062 | 0) == 0) {
                    o1064 = o1059;
                    break
                }
                o1061 = (o1062 & 0 - o1062) + -1 | 0;
                o1062 = o1061 >>> 12 & 16;
                o750 = o1061 >>> o1062;
                o1061 = o750 >>> 5 & 8;
                o887 = o750 >>> o1061;
                o750 = o887 >>> 2 & 4;
                o227 = o887 >>> o750;
                o887 = o227 >>> 1 & 2;
                o66 = o227 >>> o887;
                o227 = o66 >>> 1 & 1;
                o189 = o258[11008 + ((o1061 | o1062 | o750 | o887 | o227) + (o66 >>> o227) << 2) >> 2] | 0;
                o227 = (o258[o189 + 4 >> 2] & -8) - o1059 | 0;
                o66 = o189;
                o887 = o189;
                while (1) {
                    o189 = o258[o66 + 16 >> 2] | 0;
                    if ((o189 | 0) == 0) {
                        o750 = o258[o66 + 20 >> 2] | 0;
                        if ((o750 | 0) == 0) {
                            break
                        } else {
                            o1043 = o750
                        }
                    } else {
                        o1043 = o189
                    }
                    o189 = (o258[o1043 + 4 >> 2] & -8) - o1059 | 0;
                    o750 = o189 >>> 0 < o227 >>> 0;
                    o227 = o750 ? o189 : o227;
                    o66 = o1043;
                    o887 = o750 ? o1043 : o887
                }
                o66 = o887;
                o111 = o258[10720 >> 2] | 0;
                if (o66 >>> 0 < o111 >>> 0) {
                    o1102()
                }
                o34 = o66 + o1059 | 0;
                o1063 = o34;
                if (!(o66 >>> 0 < o34 >>> 0)) {
                    o1102()
                }
                o34 = o258[o887 + 24 >> 2] | 0;
                o1060 = o258[o887 + 12 >> 2] | 0;
                do {
                    if ((o1060 | 0) == (o887 | 0)) {
                        o1065 = o887 + 20 | 0;
                        o750 = o258[o1065 >> 2] | 0;
                        if ((o750 | 0) == 0) {
                            o189 = o887 + 16 | 0;
                            o1062 = o258[o189 >> 2] | 0;
                            if ((o1062 | 0) == 0) {
                                o23 = 0;
                                break
                            } else {
                                o64 = o1062;
                                o1068 = o189
                            }
                        } else {
                            o64 = o750;
                            o1068 = o1065
                        }
                        while (1) {
                            o1065 = o64 + 20 | 0;
                            o750 = o258[o1065 >> 2] | 0;
                            if ((o750 | 0) != 0) {
                                o1068 = o1065;
                                o64 = o750;
                                continue
                            }
                            o750 = o64 + 16 | 0;
                            o1065 = o258[o750 >> 2] | 0;
                            if ((o1065 | 0) == 0) {
                                break
                            } else {
                                o64 = o1065;
                                o1068 = o750
                            }
                        }
                        if (o1068 >>> 0 < o111 >>> 0) {
                            o1102()
                        } else {
                            o258[o1068 >> 2] = 0;
                            o23 = o64;
                            break
                        }
                    } else {
                        o750 = o258[o887 + 8 >> 2] | 0;
                        if (o750 >>> 0 < o111 >>> 0) {
                            o1102()
                        }
                        o1065 = o750 + 12 | 0;
                        if ((o258[o1065 >> 2] | 0) != (o887 | 0)) {
                            o1102()
                        }
                        o189 = o1060 + 8 | 0;
                        if ((o258[o189 >> 2] | 0) == (o887 | 0)) {
                            o258[o1065 >> 2] = o1060;
                            o258[o189 >> 2] = o750;
                            o23 = o1060;
                            break
                        } else {
                            o1102()
                        }
                    }
                } while (0);
                a: do {
                    if ((o34 | 0) != 0) {
                        o1060 = o258[o887 + 28 >> 2] | 0;
                        o111 = 11008 + (o1060 << 2) | 0;
                        do {
                            if ((o887 | 0) == (o258[o111 >> 2] | 0)) {
                                o258[o111 >> 2] = o23;
                                if ((o23 | 0) != 0) {
                                    break
                                }
                                o258[10708 >> 2] = o258[10708 >> 2] & ~(1 << o1060);
                                break o247
                            } else {
                                if (o34 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                                    o1102()
                                }
                                o750 = o34 + 16 | 0;
                                if ((o258[o750 >> 2] | 0) == (o887 | 0)) {
                                    o258[o750 >> 2] = o23
                                } else {
                                    o258[o34 + 20 >> 2] = o23
                                } if ((o23 | 0) == 0) {
                                    break o247
                                }
                            }
                        } while (0);
                        if (o23 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                            o1102()
                        }
                        o258[o23 + 24 >> 2] = o34;
                        o1060 = o258[o887 + 16 >> 2] | 0;
                        do {
                            if ((o1060 | 0) != 0) {
                                if (o1060 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                                    o1102()
                                } else {
                                    o258[o23 + 16 >> 2] = o1060;
                                    o258[o1060 + 24 >> 2] = o23;
                                    break
                                }
                            }
                        } while (0);
                        o1060 = o258[o887 + 20 >> 2] | 0;
                        if ((o1060 | 0) == 0) {
                            break
                        }
                        if (o1060 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                            o1102()
                        } else {
                            o258[o23 + 20 >> 2] = o1060;
                            o258[o1060 + 24 >> 2] = o23a: do {
                    if ((f | 0) != 0) {
                        g = c[r + 28 >> 2] | 0;
                        k = 11008 + (g << 2) | 0;
                        do {
                            if ((r | 0) == (c[k >> 2] | 0)) {
                                c[k >> 2] = x;
                                if ((x | 0) != 0) {
                                    break
                                }
                                c[10708 >> 2] = c[10708 >> 2] & ~(1 << g);
                                break a
                            } else {
                                if (f >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                    fa()
                                }
                                m = f + 16 | 0;
                                if ((c[m >> 2] | 0) == (r | 0)) {
                                    c[m >> 2] = x
                                } else {
                                    c[f + 20 >> 2] = x
                                } if ((x | 0) == 0) {
                                    break a
                                }
                            }
                        } while (0);
                        if (x >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                            fa()
                        }
                        c[x + 24 >> 2] = f;
                        g = c[r + 16 >> 2] | 0;
                        do {
                            if ((g | 0) != 0) {
                                if (g >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                    fa()
                                } else {
                                    c[x + 16 >> 2] = g;
                                    c[g + 24 >> 2] = x;
                                    break
                                }
                            }
                        } while (0);
                        g = c[r + 20 >> 2] | 0;
                        if ((g | 0) == 0) {
                            break
                        }
                        if (g >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                            fa()
                        } else {
                            c[x + 20 >> 2] = g;
                            c[g + 24 >> 2] = xo247: do {
                    if ((f | 0) != 0) {
                        g = c[r + 28 >> 2] | 0;
                        k = 11008 + (g << 2) | 0;
                        do {
                            if ((r | 0) == (c[k >> 2] | 0)) {
                                c[k >> 2] = x;
                                if ((x | 0) != 0) {
                                    break
                                }
                                c[10708 >> 2] = c[10708 >> 2] & ~(1 << g);
                                break a
                            } else {
                                if (f >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                    fa()
                                }
                                m = f + 16 | 0;
                                if ((c[m >> 2] | 0) == (r | 0)) {
                                    c[m >> 2] = x
                                } else {
                                    c[f + 20 >> 2] = x
                                } if ((x | 0) == 0) {
                                    break a
                                }
                            }
                        } while (0);
                        if (x >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                            fa()
                        }
                        c[x + 24 >> 2] = f;
                        g = c[r + 16 >> 2] | 0;
                        do {
                            if ((g | 0) != 0) {
                                if (g >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                    fa()
                                } else {
                                    c[x + 16 >> 2] = g;
                                    c[g + 24 >> 2] = x;
                                    break
                                }
                            }
                        } while (0);
                        g = c[r + 20 >> 2] | 0;
                        if ((g | 0) == 0) {
                            break
                        }
                        if (g >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                            fa()
                        } else {
                            c[x + 20 >> 2] = g;
                            c[g + 24 >> 2] = x;
                            break
                        }
                    }
                } while (0);
                if (o227 >>> 0 < 16) {
                    o34 = o227 + o1059 | 0;
                    o258[o887 + 4 >> 2] = o34 | 3;
                    o1060 = o66 + (o34 + 4) | 0;
                    o258[o1060 >> 2] = o258[o1060 >> 2] | 1
                } else {
                    o258[o887 + 4 >> 2] = o1059 | 3;
                    o258[o66 + (o1059 | 4) >> 2] = o227 | 1;
                    o258[o66 + (o227 + o1059) >> 2] = o227;
                    o1060 = o258[10712 >> 2] | 0;
                    if ((o1060 | 0) != 0) {
                        o34 = o258[10724 >> 2] | 0;
                        o111 = o1060 >>> 3;
                        o1060 = o111 << 1;
                        o750 = 10744 + (o1060 << 2) | 0;
                        o189 = o258[2676] | 0;
                        o1065 = 1 << o111;
                        do {
                            if ((o189 & o1065 | 0) == 0) {
                                o258[2676] = o189 | o1065;
                                o1069 = 10744 + (o1060 + 2 << 2) | 0;
                                o1070 = o750
                            } else {
                                o111 = 10744 + (o1060 + 2 << 2) | 0;
                                o1062 = o258[o111 >> 2] | 0;
                                if (!(o1062 >>> 0 < (o258[10720 >> 2] | 0) >>> 0)) {
                                    o1069 = o111;
                                    o1070 = o1062;
                                    break
                                }
                                o1102()
                            }
                        } while (0);
                        o258[o1069 >> 2] = o34;
                        o258[o1070 + 12 >> 2] = o34;
                        o258[o34 + 8 >> 2] = o1070;
                        o258[o34 + 12 >> 2] = o750
                    }
                    o258[10712 >> 2] = o227;
                    o258[10724 >> 2] = o1063
                }
                o602 = o887 + 8 | 0;
                o82 = o308;
                return o602 | 0
            } else {
                if (o247 >>> 0 > 4294967231) {
                    o1064 = -1;
                    break
                }
                o1060 = o247 + 11 | 0;
                o1065 = o1060 & -8;
                o189 = o258[10708 >> 2] | 0;
                if ((o189 | 0) == 0) {
                    o1064 = o1065;
                    break
                }
                o66 = 0 - o1065 | 0;
                o1062 = o1060 >>> 8;
                do {
                    if ((o1062 | 0) == 0) {
                        o1071 = 0
                    } else {
                        if (o1065 >>> 0 > 16777215) {
                            o1071 = 31;
                            break
                        }
                        o1060 = (o1062 + 1048320 | 0) >>> 16 & 8;
                        o111 = o1062 << o1060;
                        o1061 = (o111 + 520192 | 0) >>> 16 & 4;
                        o65 = o111 << o1061;
                        o111 = (o65 + 245760 | 0) >>> 16 & 2;
                        o1072 = 14 - (o1061 | o1060 | o111) + (o65 << o111 >>> 15) | 0;
                        o1071 = o1065 >>> (o1072 + 7 | 0) & 1 | o1072 << 1
                    }
                } while (0);
                o1062 = o258[11008 + (o1071 << 2) >> 2] | 0;
                b: do {
                    if ((o1062 | 0) == 0) {
                        o1073 = o66;
                        o1074 = 0;
                        o1075 = 0
                    } else {
                        if ((o1071 | 0) == 31) {
                            o1076 = 0
                        } else {
                            o1076 = 25 - (o1071 >>> 1) | 0
                        }
                        o887 = o66;
                        o1063 = 0;
                        o227 = o1065 << o1076;
                        o750 = o1062;
                        o34 = 0;
                        while (1) {
                            o1072 = o258[o750 + 4 >> 2] & -8;
                            o111 = o1072 - o1065 | 0;
                            if (o111 >>> 0 < o887 >>> 0) {
                                if ((o1072 | 0) == (o1065 | 0)) {
                                    o1073 = o111;
                                    o1074 = o750;
                                    o1075 = o750;
                                    break o308
                                } else {
                                    o1077 = o111;
                                    o1078 = o750
                                }
                            } else {
                                o1077 = o887;
                                o1078 = o34
                            }
                            o111 = o258[o750 + 20 >> 2] | 0;
                            o1072 = o258[o750 + (o227 >>> 31 << 2) + 16 >> 2] | 0;
                            o65 = (o111 | 0) == 0 | (o111 | 0) == (o1072 | 0) ? o1063 : o111;
                            if ((o1072 | 0) == 0) {
                                o1073 = o1077;
                                o1074 = o65;
                                o1075 = o1078;
                                break
                            } else {
                                o887 = o1077;
                                o1063 = o65;
                                o227 = o227 << 1;
                                o750 = o1072;
                                o34 = o1078b: do {
                    if ((n | 0) == 0) {
                        E = h;
                        F = 0;
                        G = 0
                    } else {
                        if ((C | 0) == 31) {
                            H = 0
                        } else {
                            H = 25 - (C >>> 1) | 0
                        }
                        r = h;
                        o = 0;
                        t = s << H;
                        m = n;
                        f = 0;
                        while (1) {
                            D = c[m + 4 >> 2] & -8;
                            k = D - s | 0;
                            if (k >>> 0 < r >>> 0) {
                                if ((D | 0) == (s | 0)) {
                                    E = k;
                                    F = m;
                                    G = m;
                                    break b
                                } else {
                                    I = k;
                                    J = m
                                }
                            } else {
                                I = r;
                                J = f
                            }
                            k = c[m + 20 >> 2] | 0;
                            D = c[m + (t >>> 31 << 2) + 16 >> 2] | 0;
                            l = (k | 0) == 0 | (k | 0) == (D | 0) ? o : k;
                            if ((D | 0) == 0) {
                                E = I;
                                F = l;
                                G = J;
                                break
                            } else {
                                r = I;
                                o = l;
                                t = t << 1;
                                m = D;
                                f = Jo308: do {
                    if ((n | 0) == 0) {
                        E = h;
                        F = 0;
                        G = 0
                    } else {
                        if ((C | 0) == 31) {
                            H = 0
                        } else {
                            H = 25 - (C >>> 1) | 0
                        }
                        r = h;
                        o = 0;
                        t = s << H;
                        m = n;
                        f = 0;
                        while (1) {
                            D = c[m + 4 >> 2] & -8;
                            k = D - s | 0;
                            if (k >>> 0 < r >>> 0) {
                                if ((D | 0) == (s | 0)) {
                                    E = k;
                                    F = m;
                                    G = m;
                                    break b
                                } else {
                                    I = k;
                                    J = m
                                }
                            } else {
                                I = r;
                                J = f
                            }
                            k = c[m + 20 >> 2] | 0;
                            D = c[m + (t >>> 31 << 2) + 16 >> 2] | 0;
                            l = (k | 0) == 0 | (k | 0) == (D | 0) ? o : k;
                            if ((D | 0) == 0) {
                                E = I;
                                F = l;
                                G = J;
                                break
                            } else {
                                r = I;
                                o = l;
                                t = t << 1;
                                m = D;
                                f = J
                            }
                        }
                    }
                } while (0);
                if ((o1074 | 0) == 0 & (o1075 | 0) == 0) {
                    o1062 = 2 << o1071;
                    o66 = o189 & (o1062 | 0 - o1062);
                    if ((o66 | 0) == 0) {
                        o1064 = o1065;
                        break
                    }
                    o1062 = (o66 & 0 - o66) + -1 | 0;
                    o66 = o1062 >>> 12 & 16;
                    o34 = o1062 >>> o66;
                    o1062 = o34 >>> 5 & 8;
                    o750 = o34 >>> o1062;
                    o34 = o750 >>> 2 & 4;
                    o227 = o750 >>> o34;
                    o750 = o227 >>> 1 & 2;
                    o1063 = o227 >>> o750;
                    o227 = o1063 >>> 1 & 1;
                    o1079 = o258[11008 + ((o1062 | o66 | o34 | o750 | o227) + (o1063 >>> o227) << 2) >> 2] | 0
                } else {
                    o1079 = o1074
                } if ((o1079 | 0) == 0) {
                    o1080 = o1073;
                    o1081 = o1075
                } else {
                    o227 = o1073;
                    o1063 = o1079;
                    o750 = o1075;
                    while (1) {
                        o34 = (o258[o1063 + 4 >> 2] & -8) - o1065 | 0;
                        o66 = o34 >>> 0 < o227 >>> 0;
                        o1062 = o66 ? o34 : o227;
                        o34 = o66 ? o1063 : o750;
                        o66 = o258[o1063 + 16 >> 2] | 0;
                        if ((o66 | 0) != 0) {
                            o1082 = o34;
                            o1083 = o1062;
                            o750 = o1082;
                            o1063 = o66;
                            o227 = o1083;
                            continue
                        }
                        o66 = o258[o1063 + 20 >> 2] | 0;
                        if ((o66 | 0) == 0) {
                            o1080 = o1062;
                            o1081 = o34;
                            break
                        } else {
                            o1082 = o34;
                            o1083 = o1062;
                            o1063 = o66;
                            o750 = o1082;
                            o227 = o1083
                        }
                    }
                } if ((o1081 | 0) == 0) {
                    o1064 = o1065;
                    break
                }
                if (!(o1080 >>> 0 < ((o258[10712 >> 2] | 0) - o1065 | 0) >>> 0)) {
                    o1064 = o1065;
                    break
                }
                o227 = o1081;
                o750 = o258[10720 >> 2] | 0;
                if (o227 >>> 0 < o750 >>> 0) {
                    o1102()
                }
                o1063 = o227 + o1065 | 0;
                o189 = o1063;
                if (!(o227 >>> 0 < o1063 >>> 0)) {
                    o1102()
                }
                o66 = o258[o1081 + 24 >> 2] | 0;
                o1062 = o258[o1081 + 12 >> 2] | 0;
                do {
                    if ((o1062 | 0) == (o1081 | 0)) {
                        o34 = o1081 + 20 | 0;
                        o887 = o258[o34 >> 2] | 0;
                        if ((o887 | 0) == 0) {
                            o1072 = o1081 + 16 | 0;
                            o65 = o258[o1072 >> 2] | 0;
                            if ((o65 | 0) == 0) {
                                o1084 = 0;
                                break
                            } else {
                                o1085 = o65;
                                o1086 = o1072
                            }
                        } else {
                            o1085 = o887;
                            o1086 = o34
                        }
                        while (1) {
                            o34 = o1085 + 20 | 0;
                            o887 = o258[o34 >> 2] | 0;
                            if ((o887 | 0) != 0) {
                                o1086 = o34;
                                o1085 = o887;
                                continue
                            }
                            o887 = o1085 + 16 | 0;
                            o34 = o258[o887 >> 2] | 0;
                            if ((o34 | 0) == 0) {
                                break
                            } else {
                                o1085 = o34;
                                o1086 = o887
                            }
                        }
                        if (o1086 >>> 0 < o750 >>> 0) {
                            o1102()
                        } else {
                            o258[o1086 >> 2] = 0;
                            o1084 = o1085;
                            break
                        }
                    } else {
                        o887 = o258[o1081 + 8 >> 2] | 0;
                        if (o887 >>> 0 < o750 >>> 0) {
                            o1102()
                        }
                        o34 = o887 + 12 | 0;
                        if ((o258[o34 >> 2] | 0) != (o1081 | 0)) {
                            o1102()
                        }
                        o1072 = o1062 + 8 | 0;
                        if ((o258[o1072 >> 2] | 0) == (o1081 | 0)) {
                            o258[o34 >> 2] = o1062;
                            o258[o1072 >> 2] = o887;
                            o1084 = o1062;
                            break
                        } else {
                            o1102()
                        }
                    }
                } while (0);
                c: do {
                    if ((o66 | 0) != 0) {
                        o1062 = o258[o1081 + 28 >> 2] | 0;
                        o750 = 11008 + (o1062 << 2) | 0;
                        do {
                            if ((o1081 | 0) == (o258[o750 >> 2] | 0)) {
                                o258[o750 >> 2] = o1084;
                                if ((o1084 | 0) != 0) {
                                    break
                                }
                                o258[10708 >> 2] = o258[10708 >> 2] & ~(1 << o1062);
                                break o258
                            } else {
                                if (o66 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                                    o1102()
                                }
                                o887 = o66 + 16 | 0;
                                if ((o258[o887 >> 2] | 0) == (o1081 | 0)) {
                                    o258[o887 >> 2] = o1084
                                } else {
                                    o258[o66 + 20 >> 2] = o1084
                                } if ((o1084 | 0) == 0) {
                                    break o258
                                }
                            }
                        } while (0);
                        if (o1084 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                            o1102()
                        }
                        o258[o1084 + 24 >> 2] = o66;
                        o1062 = o258[o1081 + 16 >> 2] | 0;
                        do {
                            if ((o1062 | 0) != 0) {
                                if (o1062 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                                    o1102()
                                } else {
                                    o258[o1084 + 16 >> 2] = o1062;
                                    o258[o1062 + 24 >> 2] = o1084;
                                    break
                                }
                            }
                        } while (0);
                        o1062 = o258[o1081 + 20 >> 2] | 0;
                        if ((o1062 | 0) == 0) {
                            break
                        }
                        if (o1062 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                            o1102()
                        } else {
                            o258[o1084 + 20 >> 2] = o1062;
                            o258[o1062 + 24 >> 2] = o1084c: do {
                    if ((h | 0) != 0) {
                        n = c[M + 28 >> 2] | 0;
                        m = 11008 + (n << 2) | 0;
                        do {
                            if ((M | 0) == (c[m >> 2] | 0)) {
                                c[m >> 2] = P;
                                if ((P | 0) != 0) {
                                    break
                                }
                                c[10708 >> 2] = c[10708 >> 2] & ~(1 << n);
                                break c
                            } else {
                                if (h >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                    fa()
                                }
                                r = h + 16 | 0;
                                if ((c[r >> 2] | 0) == (M | 0)) {
                                    c[r >> 2] = P
                                } else {
                                    c[h + 20 >> 2] = P
                                } if ((P | 0) == 0) {
                                    break c
                                }
                            }
                        } while (0);
                        if (P >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                            fa()
                        }
                        c[P + 24 >> 2] = h;
                        n = c[M + 16 >> 2] | 0;
                        do {
                            if ((n | 0) != 0) {
                                if (n >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                    fa()
                                } else {
                                    c[P + 16 >> 2] = n;
                                    c[n + 24 >> 2] = P;
                                    break
                                }
                            }
                        } while (0);
                        n = c[M + 20 >> 2] | 0;
                        if ((n | 0) == 0) {
                            break
                        }
                        if (n >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                            fa()
                        } else {
                            c[P + 20 >> 2] = n;
                            c[n + 24 >> 2] = Po258: do {
                    if ((h | 0) != 0) {
                        n = c[M + 28 >> 2] | 0;
                        m = 11008 + (n << 2) | 0;
                        do {
                            if ((M | 0) == (c[m >> 2] | 0)) {
                                c[m >> 2] = P;
                                if ((P | 0) != 0) {
                                    break
                                }
                                c[10708 >> 2] = c[10708 >> 2] & ~(1 << n);
                                break c
                            } else {
                                if (h >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                    fa()
                                }
                                r = h + 16 | 0;
                                if ((c[r >> 2] | 0) == (M | 0)) {
                                    c[r >> 2] = P
                                } else {
                                    c[h + 20 >> 2] = P
                                } if ((P | 0) == 0) {
                                    break c
                                }
                            }
                        } while (0);
                        if (P >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                            fa()
                        }
                        c[P + 24 >> 2] = h;
                        n = c[M + 16 >> 2] | 0;
                        do {
                            if ((n | 0) != 0) {
                                if (n >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                    fa()
                                } else {
                                    c[P + 16 >> 2] = n;
                                    c[n + 24 >> 2] = P;
                                    break
                                }
                            }
                        } while (0);
                        n = c[M + 20 >> 2] | 0;
                        if ((n | 0) == 0) {
                            break
                        }
                        if (n >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                            fa()
                        } else {
                            c[P + 20 >> 2] = n;
                            c[n + 24 >> 2] = P;
                            break
                        }
                    }
                } while (0);
                d: do {
                    if (o1080 >>> 0 < 16) {
                        o66 = o1080 + o1065 | 0;
                        o258[o1081 + 4 >> 2] = o66 | 3;
                        o1062 = o227 + (o66 + 4) | 0;
                        o258[o1062 >> 2] = o258[o1062 >> 2] | 1
                    } else {
                        o258[o1081 + 4 >> 2] = o1065 | 3;
                        o258[o227 + (o1065 | 4) >> 2] = o1080 | 1;
                        o258[o227 + (o1080 + o1065) >> 2] = o1080;
                        o1062 = o1080 >>> 3;
                        if (o1080 >>> 0 < 256) {
                            o66 = o1062 << 1;
                            o750 = 10744 + (o66 << 2) | 0;
                            o887 = o258[2676] | 0;
                            o1072 = 1 << o1062;
                            do {
                                if ((o887 & o1072 | 0) == 0) {
                                    o258[2676] = o887 | o1072;
                                    o1087 = 10744 + (o66 + 2 << 2) | 0;
                                    o1088 = o750
                                } else {
                                    o1062 = 10744 + (o66 + 2 << 2) | 0;
                                    o34 = o258[o1062 >> 2] | 0;
                                    if (!(o34 >>> 0 < (o258[10720 >> 2] | 0) >>> 0)) {
                                        o1087 = o1062;
                                        o1088 = o34;
                                        break
                                    }
                                    o1102()
                                }
                            } while (0);
                            o258[o1087 >> 2] = o189;
                            o258[o1088 + 12 >> 2] = o189;
                            o258[o227 + (o1065 + 8) >> 2] = o1088;
                            o258[o227 + (o1065 + 12) >> 2] = o750;
                            break
                        }
                        o66 = o1063;
                        o1072 = o1080 >>> 8;
                        do {
                            if ((o1072 | 0) == 0) {
                                o1089 = 0
                            } else {
                                if (o1080 >>> 0 > 16777215) {
                                    o1089 = 31;
                                    break
                                }
                                o887 = (o1072 + 1048320 | 0) >>> 16 & 8;
                                o34 = o1072 << o887;
                                o1062 = (o34 + 520192 | 0) >>> 16 & 4;
                                o65 = o34 << o1062;
                                o34 = (o65 + 245760 | 0) >>> 16 & 2;
                                o111 = 14 - (o1062 | o887 | o34) + (o65 << o34 >>> 15) | 0;
                                o1089 = o1080 >>> (o111 + 7 | 0) & 1 | o111 << 1
                            }
                        } while (0);
                        o1072 = 11008 + (o1089 << 2) | 0;
                        o258[o227 + (o1065 + 28) >> 2] = o1089;
                        o258[o227 + (o1065 + 20) >> 2] = 0;
                        o258[o227 + (o1065 + 16) >> 2] = 0;
                        o750 = o258[10708 >> 2] | 0;
                        o111 = 1 << o1089;
                        if ((o750 & o111 | 0) == 0) {
                            o258[10708 >> 2] = o750 | o111;
                            o258[o1072 >> 2] = o66;
                            o258[o227 + (o1065 + 24) >> 2] = o1072;
                            o258[o227 + (o1065 + 12) >> 2] = o66;
                            o258[o227 + (o1065 + 8) >> 2] = o66;
                            break
                        }
                        o111 = o258[o1072 >> 2] | 0;
                        if ((o1089 | 0) == 31) {
                            o1090 = 0
                        } else {
                            o1090 = 25 - (o1089 >>> 1) | 0
                        }
                        e: do {
                            if ((o258[o111 + 4 >> 2] & -8 | 0) == (o1080 | 0)) {
                                o1091 = o111
                            } else {
                                o1072 = o1080 << o1090;
                                o750 = o111;
                                while (1) {
                                    o1092 = o750 + (o1072 >>> 31 << 2) + 16 | 0;
                                    o34 = o258[o1092 >> 2] | 0;
                                    if ((o34 | 0) == 0) {
                                        break
                                    }
                                    if ((o258[o34 + 4 >> 2] & -8 | 0) == (o1080 | 0)) {
                                        o1091 = o34;
                                        break o189
                                    } else {
                                        o1072 = o1072 << 1;
                                        o750 = o34
                                    }
                                }
                                if (o1092 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                                    o1102()
                                } else {
                                    o258[o1092 >> 2] = o66;
                                    o258[o227 + (o1065 + 24) >> 2] = o750;
                                    o258[o227 + (o1065 + 12) >> 2] = o66;
                                    o258[o227 + (o1065 + 8) >> 2] = o66;
                                    break o1059e: do {
                            if ((c[k + 4 >> 2] & -8 | 0) == (L | 0)) {
                                W = k
                            } else {
                                D = L << V;
                                m = k;
                                while (1) {
                                    X = m + (D >>> 31 << 2) + 16 | 0;
                                    f = c[X >> 2] | 0;
                                    if ((f | 0) == 0) {
                                        break
                                    }
                                    if ((c[f + 4 >> 2] & -8 | 0) == (L | 0)) {
                                        W = f;
                                        break e
                                    } else {
                                        D = D << 1;
                                        m = f
                                    }
                                }
                                if (X >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                    fa()
                                } else {
                                    c[X >> 2] = h;
                                    c[t + (s + 24) >> 2] = m;
                                    c[t + (s + 12) >> 2] = h;
                                    c[t + (s + 8) >> 2] = h;
                                    break do189: do {
                            if ((c[k + 4 >> 2] & -8 | 0) == (L | 0)) {
                                W = k
                            } else {
                                D = L << V;
                                m = k;
                                while (1) {
                                    X = m + (D >>> 31 << 2) + 16 | 0;
                                    f = c[X >> 2] | 0;
                                    if ((f | 0) == 0) {
                                        break
                                    }
                                    if ((c[f + 4 >> 2] & -8 | 0) == (L | 0)) {
                                        W = f;
                                        break e
                                    } else {
                                        D = D << 1;
                                        m = f
                                    }
                                }
                                if (X >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                    fa()
                                } else {
                                    c[X >> 2] = h;
                                    c[t + (s + 24) >> 2] = m;
                                    c[t + (s + 12) >> 2] = h;
                                    c[t + (s + 8) >> 2] = h;
                                    break d
                                }
                            }
                        } while (0);
                        o111 = o1091 + 8 | 0;
                        o1072 = o258[o111 >> 2] | 0;
                        o34 = o258[10720 >> 2] | 0;
                        if (o1091 >>> 0 < o34 >>> 0) {
                            o1102()
                        }
                        if (o1072 >>> 0 < o34 >>> 0) {
                            o1102()
                        } else {
                            o258[o1072 + 12 >> 2] = o66;
                            o258[o111 >> 2] = o66;
                            o258[o227 + (o1065 + 8) >> 2] = o1072;
                            o258[o227 + (o1065 + 12) >> 2] = o1091;
                            o258[o227 + (o1065d: do {
                    if (L >>> 0 < 16) {
                        h = L + s | 0;
                        c[M + 4 >> 2] = h | 3;
                        n = t + (h + 4) | 0;
                        c[n >> 2] = c[n >> 2] | 1
                    } else {
                        c[M + 4 >> 2] = s | 3;
                        c[t + (s | 4) >> 2] = L | 1;
                        c[t + (L + s) >> 2] = L;
                        n = L >>> 3;
                        if (L >>> 0 < 256) {
                            h = n << 1;
                            m = 10744 + (h << 2) | 0;
                            r = c[2676] | 0;
                            D = 1 << n;
                            do {
                                if ((r & D | 0) == 0) {
                                    c[2676] = r | D;
                                    S = 10744 + (h + 2 << 2) | 0;
                                    T = m
                                } else {
                                    n = 10744 + (h + 2 << 2) | 0;
                                    f = c[n >> 2] | 0;
                                    if (!(f >>> 0 < (c[10720 >> 2] | 0) >>> 0)) {
                                        S = n;
                                        T = f;
                                        break
                                    }
                                    fa()
                                }
                            } while (0);
                            c[S >> 2] = e;
                            c[T + 12 >> 2] = e;
                            c[t + (s + 8) >> 2] = T;
                            c[t + (s + 12) >> 2] = m;
                            break
                        }
                        h = o;
                        D = L >>> 8;
                        do {
                            if ((D | 0) == 0) {
                                U = 0
                            } else {
                                if (L >>> 0 > 16777215) {
                                    U = 31;
                                    break
                                }
                                r = (D + 1048320 | 0) >>> 16 & 8;
                                f = D << r;
                                n = (f + 520192 | 0) >>> 16 & 4;
                                l = f << n;
                                f = (l + 245760 | 0) >>> 16 & 2;
                                k = 14 - (n | r | f) + (l << f >>> 15) | 0;
                                U = L >>> (k + 7 | 0) & 1 | k << 1
                            }
                        } while (0);
                        D = 11008 + (U << 2) | 0;
                        c[t + (s + 28) >> 2] = U;
                        c[t + (s + 20) >> 2] = 0;
                        c[t + (s + 16) >> 2] = 0;
                        m = c[10708 >> 2] | 0;
                        k = 1 << U;
                        if ((m & k | 0) == 0) {
                            c[10708 >> 2] = m | k;
                            c[D >> 2] = h;
                            c[t + (s + 24) >> 2] = D;
                            c[t + (s + 12) >> 2] = h;
                            c[t + (s + 8) >> 2] = h;
                            break
                        }
                        k = c[D >> 2] | 0;
                        if ((U | 0) == 31) {
                            V = 0
                        } else {
                            V = 25 - (U >>> 1) | 0
                        }
                        e: do {
                            if ((c[k + 4 >> 2] & -8 | 0) == (L | 0)) {
                                W = k
                            } else {
                                D = L << V;
                                m = k;
                                while (1) {
                                    X = m + (D >>> 31 << 2) + 16 | 0;
                                    f = c[X >> 2] | 0;
                                    if ((f | 0) == 0) {
                                        break
                                    }
                                    if ((c[f + 4 >> 2] & -8 | 0) == (L | 0)) {
                                        W = f;
                                        break e
                                    } else {
                                        D = D << 1;
                                        m = f
                                    }
                                }
                                if (X >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                    fa()
                                } else {
                                    c[X >> 2] = h;
                                    c[t + (s + 24) >> 2] = m;
                                    c[t + (s + 12) >> 2] = h;
                                    c[t + (s + 8) >> 2] = h;
                                    break d
                                }
                            }
                        } while (0);
                        k = W + 8 | 0;
                        D = c[k >> 2] | 0;
                        f = c[10720 >> 2] | 0;
                        if (W >>> 0 < f >>> 0) {
                            fa()
                        }
                        if (D >>> 0 < f >>> 0) {
                            fa()
                        } else {
                            c[D + 12 >> 2] = h;
                            c[k >> 2] = h;
                            c[t + (s + 8) >> 2] = D;
                            c[t + (s + 12) >> 2] = W;
                            c[t + (so1059: do {
                    if (L >>> 0 < 16) {
                        h = L + s | 0;
                        c[M + 4 >> 2] = h | 3;
                        n = t + (h + 4) | 0;
                        c[n >> 2] = c[n >> 2] | 1
                    } else {
                        c[M + 4 >> 2] = s | 3;
                        c[t + (s | 4) >> 2] = L | 1;
                        c[t + (L + s) >> 2] = L;
                        n = L >>> 3;
                        if (L >>> 0 < 256) {
                            h = n << 1;
                            m = 10744 + (h << 2) | 0;
                            r = c[2676] | 0;
                            D = 1 << n;
                            do {
                                if ((r & D | 0) == 0) {
                                    c[2676] = r | D;
                                    S = 10744 + (h + 2 << 2) | 0;
                                    T = m
                                } else {
                                    n = 10744 + (h + 2 << 2) | 0;
                                    f = c[n >> 2] | 0;
                                    if (!(f >>> 0 < (c[10720 >> 2] | 0) >>> 0)) {
                                        S = n;
                                        T = f;
                                        break
                                    }
                                    fa()
                                }
                            } while (0);
                            c[S >> 2] = e;
                            c[T + 12 >> 2] = e;
                            c[t + (s + 8) >> 2] = T;
                            c[t + (s + 12) >> 2] = m;
                            break
                        }
                        h = o;
                        D = L >>> 8;
                        do {
                            if ((D | 0) == 0) {
                                U = 0
                            } else {
                                if (L >>> 0 > 16777215) {
                                    U = 31;
                                    break
                                }
                                r = (D + 1048320 | 0) >>> 16 & 8;
                                f = D << r;
                                n = (f + 520192 | 0) >>> 16 & 4;
                                l = f << n;
                                f = (l + 245760 | 0) >>> 16 & 2;
                                k = 14 - (n | r | f) + (l << f >>> 15) | 0;
                                U = L >>> (k + 7 | 0) & 1 | k << 1
                            }
                        } while (0);
                        D = 11008 + (U << 2) | 0;
                        c[t + (s + 28) >> 2] = U;
                        c[t + (s + 20) >> 2] = 0;
                        c[t + (s + 16) >> 2] = 0;
                        m = c[10708 >> 2] | 0;
                        k = 1 << U;
                        if ((m & k | 0) == 0) {
                            c[10708 >> 2] = m | k;
                            c[D >> 2] = h;
                            c[t + (s + 24) >> 2] = D;
                            c[t + (s + 12) >> 2] = h;
                            c[t + (s + 8) >> 2] = h;
                            break
                        }
                        k = c[D >> 2] | 0;
                        if ((U | 0) == 31) {
                            V = 0
                        } else {
                            V = 25 - (U >>> 1) | 0
                        }
                        e: do {
                            if ((c[k + 4 >> 2] & -8 | 0) == (L | 0)) {
                                W = k
                            } else {
                                D = L << V;
                                m = k;
                                while (1) {
                                    X = m + (D >>> 31 << 2) + 16 | 0;
                                    f = c[X >> 2] | 0;
                                    if ((f | 0) == 0) {
                                        break
                                    }
                                    if ((c[f + 4 >> 2] & -8 | 0) == (L | 0)) {
                                        W = f;
                                        break e
                                    } else {
                                        D = D << 1;
                                        m = f
                                    }
                                }
                                if (X >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                    fa()
                                } else {
                                    c[X >> 2] = h;
                                    c[t + (s + 24) >> 2] = m;
                                    c[t + (s + 12) >> 2] = h;
                                    c[t + (s + 8) >> 2] = h;
                                    break d
                                }
                            }
                        } while (0);
                        k = W + 8 | 0;
                        D = c[k >> 2] | 0;
                        f = c[10720 >> 2] | 0;
                        if (W >>> 0 < f >>> 0) {
                            fa()
                        }
                        if (D >>> 0 < f >>> 0) {
                            fa()
                        } else {
                            c[D + 12 >> 2] = h;
                            c[k >> 2] = h;
                            c[t + (s + 8) >> 2] = D;
                            c[t + (s + 12) >> 2] = W;
                            c[t + (s + 24) >> 2] = 0;
                            break
                        }
                    }
                } while (0);
                o602 = o1081 + 8 | 0;
                o82 = o308;
                return o602 | 0
            }
        } while (0);
        o1081 = o258[10712 >> 2] | 0;
        if (!(o1064 >>> 0 > o1081 >>> 0)) {
            o1091 = o1081 - o1064 | 0;
            o1092 = o258[10724 >> 2] | 0;
            if (o1091 >>> 0 > 15) {
                o1080 = o1092;
                o258[10724 >> 2] = o1080 + o1064;
                o258[10712 >> 2] = o1091;
                o258[o1080 + (o1064 + 4) >> 2] = o1091 | 1;
                o258[o1080 + o1081 >> 2] = o1091;
                o258[o1092 + 4 >> 2] = o1064 | 3
            } else {
                o258[10712 >> 2] = 0;
                o258[10724 >> 2] = 0;
                o258[o1092 + 4 >> 2] = o1081 | 3;
                o1091 = o1092 + (o1081 + 4) | 0;
                o258[o1091 >> 2] = o258[o1091 >> 2] | 1
            }
            o602 = o1092 + 8 | 0;
            o82 = o308;
            return o602 | 0
        }
        o1092 = o258[10716 >> 2] | 0;
        if (o1064 >>> 0 < o1092 >>> 0) {
            o1091 = o1092 - o1064 | 0;
            o258[10716 >> 2] = o1091;
            o1092 = o258[10728 >> 2] | 0;
            o1081 = o1092;
            o258[10728 >> 2] = o1081 + o1064;
            o258[o1081 + (o1064 + 4) >> 2] = o1091 | 1;
            o258[o1092 + 4 >> 2] = o1064 | 3;
            o602 = o1092 + 8 | 0;
            o82 = o308;
            return o602 | 0
        }
        do {
            if ((o258[2794] | 0) == 0) {
                o1092 = o1107(30) | 0;
                if ((o1092 + -1 & o1092 | 0) == 0) {
                    o258[11184 >> 2] = o1092;
                    o258[11180 >> 2] = o1092;
                    o258[11188 >> 2] = -1;
                    o258[11192 >> 2] = -1;
                    o258[11196 >> 2] = 0;
                    o258[11148 >> 2] = 0;
                    o258[2794] = (o1105(0) | 0) & -16 ^ 1431655768;
                    break
                } else {
                    o1102()
                }
            }
        } while (0);
        o1092 = o1064 + 48 | 0;
        o1091 = o258[11184 >> 2] | 0;
        o1081 = o1064 + 47 | 0;
        o1080 = o1091 + o1081 | 0;
        o1090 = 0 - o1091 | 0;
        o1091 = o1080 & o1090;
        if (!(o1091 >>> 0 > o1064 >>> 0)) {
            o602 = 0;
            o82 = o308;
            return o602 | 0
        }
        o1089 = o258[11144 >> 2] | 0;
        do {
            if ((o1089 | 0) != 0) {
                o1088 = o258[11136 >> 2] | 0;
                o1087 = o1088 + o1091 | 0;
                if (o1087 >>> 0 <= o1088 >>> 0 | o1087 >>> 0 > o1089 >>> 0) {
                    o602 = 0
                } else {
                    break
                }
                o82 = o308;
                return o602 | 0
            }
        } while (0);
        f: do {
            if ((o258[11148 >> 2] & 4 | 0) == 0) {
                o1089 = o258[10728 >> 2] | 0;
                g: do {
                    if ((o1089 | 0) == 0) {
                        o1093 = 182
                    } else {
                        o1087 = o1089;
                        o1088 = 11152 | 0;
                        while (1) {
                            o1094 = o1088;
                            o1084 = o258[o1094 >> 2] | 0;
                            if (!(o1084 >>> 0 > o1087 >>> 0)) {
                                o1095 = o1088 + 4 | 0;
                                if ((o1084 + (o258[o1095 >> 2] | 0) | 0) >>> 0 > o1087 >>> 0) {
                                    break
                                }
                            }
                            o1084 = o258[o1088 + 8 >> 2] | 0;
                            if ((o1084 | 0) == 0) {
                                o1093 = 182;
                                break o1060
                            } else {
                                o1088 = o1084
                            }
                        }
                        if ((o1088 | 0) == 0) {
                            o1093 = 182;
                            break
                        }
                        o1087 = o1080 - (o258[10716 >> 2] | 0) & o1090;
                        if (!(o1087 >>> 0 < 2147483647)) {
                            o1096 = 0;
                            break
                        }
                        o66 = o1104(o1087 | 0) | 0;
                        o1084 = (o66 | 0) == ((o258[o1094 >> 2] | 0) + (o258[o1095 >> 2] | 0) | 0);
                        o1097 = o66;
                        o1098 = o1087;
                        o1099 = o1084 ? o66 : -1;
                        o1100 = o1084 ? o1087 : 0;
                        o1093g: do {
                    if ((U | 0) == 0) {
                        Y = 182
                    } else {
                        S = U;
                        T = 11152 | 0;
                        while (1) {
                            Z = T;
                            P = c[Z >> 2] | 0;
                            if (!(P >>> 0 > S >>> 0)) {
                                _ = T + 4 | 0;
                                if ((P + (c[_ >> 2] | 0) | 0) >>> 0 > S >>> 0) {
                                    break
                                }
                            }
                            P = c[T + 8 >> 2] | 0;
                            if ((P | 0) == 0) {
                                Y = 182;
                                break g
                            } else {
                                T = P
                            }
                        }
                        if ((T | 0) == 0) {
                            Y = 182;
                            break
                        }
                        S = L - (c[10716 >> 2] | 0) & V;
                        if (!(S >>> 0 < 2147483647)) {
                            $ = 0;
                            break
                        }
                        h = ha(S | 0) | 0;
                        P = (h | 0) == ((c[Z >> 2] | 0) + (c[_ >> 2] | 0) | 0);
                        aa = h;
                        ba = S;
                        ca = P ? h : -1;
                        da = P ? S : 0;
                        Yo1060: do {
                    if ((U | 0) == 0) {
                        Y = 182
                    } else {
                        S = U;
                        T = 11152 | 0;
                        while (1) {
                            Z = T;
                            P = c[Z >> 2] | 0;
                            if (!(P >>> 0 > S >>> 0)) {
                                _ = T + 4 | 0;
                                if ((P + (c[_ >> 2] | 0) | 0) >>> 0 > S >>> 0) {
                                    break
                                }
                            }
                            P = c[T + 8 >> 2] | 0;
                            if ((P | 0) == 0) {
                                Y = 182;
                                break g
                            } else {
                                T = P
                            }
                        }
                        if ((T | 0) == 0) {
                            Y = 182;
                            break
                        }
                        S = L - (c[10716 >> 2] | 0) & V;
                        if (!(S >>> 0 < 2147483647)) {
                            $ = 0;
                            break
                        }
                        h = ha(S | 0) | 0;
                        P = (h | 0) == ((c[Z >> 2] | 0) + (c[_ >> 2] | 0) | 0);
                        aa = h;
                        ba = S;
                        ca = P ? h : -1;
                        da = P ? S : 0;
                        Y = 191
                    }
                } while (0);
                do {
                    if ((o1093 | 0) == 182) {
                        o1089 = o1104(0) | 0;
                        if ((o1089 | 0) == (-1 | 0)) {
                            o1096 = 0;
                            break
                        }
                        o1087 = o1089;
                        o1084 = o258[11180 >> 2] | 0;
                        o66 = o1084 + -1 | 0;
                        if ((o66 & o1087 | 0) == 0) {
                            o1101 = o1091
                        } else {
                            o1101 = o1091 - o1087 + (o66 + o1087 & 0 - o1084) | 0
                        }
                        o1084 = o258[11136 >> 2] | 0;
                        o1087 = o1084 + o1101 | 0;
                        if (!(o1101 >>> 0 > o1064 >>> 0 & o1101 >>> 0 < 2147483647)) {
                            o1096 = 0;
                            break
                        }
                        o66 = o258[11144 >> 2] | 0;
                        if ((o66 | 0) != 0) {
                            if (o1087 >>> 0 <= o1084 >>> 0 | o1087 >>> 0 > o66 >>> 0) {
                                o1096 = 0;
                                break
                            }
                        }
                        o66 = o1104(o1101 | 0) | 0;
                        o1087 = (o66 | 0) == (o1089 | 0);
                        o1097 = o66;
                        o1098 = o1101;
                        o1099 = o1087 ? o1089 : -1;
                        o1100 = o1087 ? o1101 : 0;
                        o1093 = 191
                    }
                } while (0);
                h: do {
                    if ((o1093 | 0) == 191) {
                        o1087 = 0 - o1098 | 0;
                        if ((o1099 | 0) != (-1 | 0)) {
                            o1103 = o1099;
                            o1106 = o1100;
                            o1093 = 202;
                            break o34
                        }
                        do {
                            if ((o1097 | 0) != (-1 | 0) & o1098 >>> 0 < 2147483647 & o1098 >>> 0 < o1092 >>> 0) {
                                o1089 = o258[11184 >> 2] | 0;
                                o66 = o1081 - o1098 + o1089 & 0 - o1089;
                                if (!(o66 >>> 0 < 2147483647)) {
                                    o747 = o1098;
                                    break
                                }
                                if ((o1104(o66 | 0) | 0) == (-1 | 0)) {
                                    o1104(o1087 | 0) | 0;
                                    o1096 = o1100;
                                    break o66
                                } else {
                                    o747 = o66 + o1098 | 0;
                                    break
                                }
                            } else {
                                o747 = o1098
                            }
                        } while (0);
                        if ((o1097 | 0) == (-1 | 0)) {
                            o1096 = o1100
                        } else {
                            o1103 = o1097;
                            o1106 = o747;
                            o1093 = 202;
                            break o34h: do {
                    if ((Y | 0) == 191) {
                        S = 0 - ba | 0;
                        if ((ca | 0) != (-1 | 0)) {
                            ga = ca;
                            ja = da;
                            Y = 202;
                            break f
                        }
                        do {
                            if ((aa | 0) != (-1 | 0) & ba >>> 0 < 2147483647 & ba >>> 0 < X >>> 0) {
                                U = c[11184 >> 2] | 0;
                                h = M - ba + U & 0 - U;
                                if (!(h >>> 0 < 2147483647)) {
                                    ma = ba;
                                    break
                                }
                                if ((ha(h | 0) | 0) == (-1 | 0)) {
                                    ha(S | 0) | 0;
                                    $ = da;
                                    break h
                                } else {
                                    ma = h + ba | 0;
                                    break
                                }
                            } else {
                                ma = ba
                            }
                        } while (0);
                        if ((aa | 0) == (-1 | 0)) {
                            $ = da
                        } else {
                            ga = aa;
                            ja = ma;
                            Y = 202;
                            break fo66: do {
                    if ((Y | 0) == 191) {
                        S = 0 - ba | 0;
                        if ((ca | 0) != (-1 | 0)) {
                            ga = ca;
                            ja = da;
                            Y = 202;
                            break f
                        }
                        do {
                            if ((aa | 0) != (-1 | 0) & ba >>> 0 < 2147483647 & ba >>> 0 < X >>> 0) {
                                U = c[11184 >> 2] | 0;
                                h = M - ba + U & 0 - U;
                                if (!(h >>> 0 < 2147483647)) {
                                    ma = ba;
                                    break
                                }
                                if ((ha(h | 0) | 0) == (-1 | 0)) {
                                    ha(S | 0) | 0;
                                    $ = da;
                                    break h
                                } else {
                                    ma = h + ba | 0;
                                    break
                                }
                            } else {
                                ma = ba
                            }
                        } while (0);
                        if ((aa | 0) == (-1 | 0)) {
                            $ = da
                        } else {
                            ga = aa;
                            ja = ma;
                            Y = 202;
                            break f
                        }
                    }
                } while (0);
                o258[11148 >> 2] = o258[11148 >> 2] | 4;
                o1109 = o1096;
                o1093 = 199
            } else {
                o1109 = 0;
                o1093f: do {
            if ((c[11148 >> 2] & 4 | 0) == 0) {
                U = c[10728 >> 2] | 0;
                g: do {
                    if ((U | 0) == 0) {
                        Y = 182
                    } else {
                        S = U;
                        T = 11152 | 0;
                        while (1) {
                            Z = T;
                            P = c[Z >> 2] | 0;
                            if (!(P >>> 0 > S >>> 0)) {
                                _ = T + 4 | 0;
                                if ((P + (c[_ >> 2] | 0) | 0) >>> 0 > S >>> 0) {
                                    break
                                }
                            }
                            P = c[T + 8 >> 2] | 0;
                            if ((P | 0) == 0) {
                                Y = 182;
                                break g
                            } else {
                                T = P
                            }
                        }
                        if ((T | 0) == 0) {
                            Y = 182;
                            break
                        }
                        S = L - (c[10716 >> 2] | 0) & V;
                        if (!(S >>> 0 < 2147483647)) {
                            $ = 0;
                            break
                        }
                        h = ha(S | 0) | 0;
                        P = (h | 0) == ((c[Z >> 2] | 0) + (c[_ >> 2] | 0) | 0);
                        aa = h;
                        ba = S;
                        ca = P ? h : -1;
                        da = P ? S : 0;
                        Y = 191
                    }
                } while (0);
                do {
                    if ((Y | 0) == 182) {
                        U = ha(0) | 0;
                        if ((U | 0) == (-1 | 0)) {
                            $ = 0;
                            break
                        }
                        S = U;
                        P = c[11180 >> 2] | 0;
                        h = P + -1 | 0;
                        if ((h & S | 0) == 0) {
                            ea = W
                        } else {
                            ea = W - S + (h + S & 0 - P) | 0
                        }
                        P = c[11136 >> 2] | 0;
                        S = P + ea | 0;
                        if (!(ea >>> 0 > q >>> 0 & ea >>> 0 < 2147483647)) {
                            $ = 0;
                            break
                        }
                        h = c[11144 >> 2] | 0;
                        if ((h | 0) != 0) {
                            if (S >>> 0 <= P >>> 0 | S >>> 0 > h >>> 0) {
                                $ = 0;
                                break
                            }
                        }
                        h = ha(ea | 0) | 0;
                        S = (h | 0) == (U | 0);
                        aa = h;
                        ba = ea;
                        ca = S ? U : -1;
                        da = S ? ea : 0;
                        Y = 191
                    }
                } while (0);
                h: do {
                    if ((Y | 0) == 191) {
                        S = 0 - ba | 0;
                        if ((ca | 0) != (-1 | 0)) {
                            ga = ca;
                            ja = da;
                            Y = 202;
                            break f
                        }
                        do {
                            if ((aa | 0) != (-1 | 0) & ba >>> 0 < 2147483647 & ba >>> 0 < X >>> 0) {
                                U = c[11184 >> 2] | 0;
                                h = M - ba + U & 0 - U;
                                if (!(h >>> 0 < 2147483647)) {
                                    ma = ba;
                                    break
                                }
                                if ((ha(h | 0) | 0) == (-1 | 0)) {
                                    ha(S | 0) | 0;
                                    $ = da;
                                    break h
                                } else {
                                    ma = h + ba | 0;
                                    break
                                }
                            } else {
                                ma = ba
                            }
                        } while (0);
                        if ((aa | 0) == (-1 | 0)) {
                            $ = da
                        } else {
                            ga = aa;
                            ja = ma;
                            Y = 202;
                            break f
                        }
                    }
                } while (0);
                c[11148 >> 2] = c[11148 >> 2] | 4;
                na = $;
                Y = 199
            } else {
                na = 0;
                Yo34: do {
            if ((c[11148 >> 2] & 4 | 0) == 0) {
                U = c[10728 >> 2] | 0;
                g: do {
                    if ((U | 0) == 0) {
                        Y = 182
                    } else {
                        S = U;
                        T = 11152 | 0;
                        while (1) {
                            Z = T;
                            P = c[Z >> 2] | 0;
                            if (!(P >>> 0 > S >>> 0)) {
                                _ = T + 4 | 0;
                                if ((P + (c[_ >> 2] | 0) | 0) >>> 0 > S >>> 0) {
                                    break
                                }
                            }
                            P = c[T + 8 >> 2] | 0;
                            if ((P | 0) == 0) {
                                Y = 182;
                                break g
                            } else {
                                T = P
                            }
                        }
                        if ((T | 0) == 0) {
                            Y = 182;
                            break
                        }
                        S = L - (c[10716 >> 2] | 0) & V;
                        if (!(S >>> 0 < 2147483647)) {
                            $ = 0;
                            break
                        }
                        h = ha(S | 0) | 0;
                        P = (h | 0) == ((c[Z >> 2] | 0) + (c[_ >> 2] | 0) | 0);
                        aa = h;
                        ba = S;
                        ca = P ? h : -1;
                        da = P ? S : 0;
                        Y = 191
                    }
                } while (0);
                do {
                    if ((Y | 0) == 182) {
                        U = ha(0) | 0;
                        if ((U | 0) == (-1 | 0)) {
                            $ = 0;
                            break
                        }
                        S = U;
                        P = c[11180 >> 2] | 0;
                        h = P + -1 | 0;
                        if ((h & S | 0) == 0) {
                            ea = W
                        } else {
                            ea = W - S + (h + S & 0 - P) | 0
                        }
                        P = c[11136 >> 2] | 0;
                        S = P + ea | 0;
                        if (!(ea >>> 0 > q >>> 0 & ea >>> 0 < 2147483647)) {
                            $ = 0;
                            break
                        }
                        h = c[11144 >> 2] | 0;
                        if ((h | 0) != 0) {
                            if (S >>> 0 <= P >>> 0 | S >>> 0 > h >>> 0) {
                                $ = 0;
                                break
                            }
                        }
                        h = ha(ea | 0) | 0;
                        S = (h | 0) == (U | 0);
                        aa = h;
                        ba = ea;
                        ca = S ? U : -1;
                        da = S ? ea : 0;
                        Y = 191
                    }
                } while (0);
                h: do {
                    if ((Y | 0) == 191) {
                        S = 0 - ba | 0;
                        if ((ca | 0) != (-1 | 0)) {
                            ga = ca;
                            ja = da;
                            Y = 202;
                            break f
                        }
                        do {
                            if ((aa | 0) != (-1 | 0) & ba >>> 0 < 2147483647 & ba >>> 0 < X >>> 0) {
                                U = c[11184 >> 2] | 0;
                                h = M - ba + U & 0 - U;
                                if (!(h >>> 0 < 2147483647)) {
                                    ma = ba;
                                    break
                                }
                                if ((ha(h | 0) | 0) == (-1 | 0)) {
                                    ha(S | 0) | 0;
                                    $ = da;
                                    break h
                                } else {
                                    ma = h + ba | 0;
                                    break
                                }
                            } else {
                                ma = ba
                            }
                        } while (0);
                        if ((aa | 0) == (-1 | 0)) {
                            $ = da
                        } else {
                            ga = aa;
                            ja = ma;
                            Y = 202;
                            break f
                        }
                    }
                } while (0);
                c[11148 >> 2] = c[11148 >> 2] | 4;
                na = $;
                Y = 199
            } else {
                na = 0;
                Y = 199
            }
        } while (0);
        do {
            if ((o1093 | 0) == 199) {
                if (!(o1091 >>> 0 < 2147483647)) {
                    break
                }
                o1096 = o1104(o1091 | 0) | 0;
                o747 = o1104(0) | 0;
                if (!((o747 | 0) != (-1 | 0) & (o1096 | 0) != (-1 | 0) & o1096 >>> 0 < o747 >>> 0)) {
                    break
                }
                o1097 = o747 - o1096 | 0;
                o747 = o1097 >>> 0 > (o1064 + 40 | 0) >>> 0;
                if (o747) {
                    o1103 = o1096;
                    o1106 = o747 ? o1097 : o1109;
                    o1093 = 202
                }
            }
        } while (0);
        do {
            if ((o1093 | 0) == 202) {
                o1109 = (o258[11136 >> 2] | 0) + o1106 | 0;
                o258[11136 >> 2] = o1109;
                if (o1109 >>> 0 > (o258[11140 >> 2] | 0) >>> 0) {
                    o258[11140 >> 2] = o1109
                }
                o1109 = o258[10728 >> 2] | 0;
                i: do {
                    if ((o1109 | 0) == 0) {
                        o1091 = o258[10720 >> 2] | 0;
                        if ((o1091 | 0) == 0 | o1103 >>> 0 < o1091 >>> 0) {
                            o258[10720 >> 2] = o1103
                        }
                        o258[11152 >> 2] = o1103;
                        o258[11156 >> 2] = o1106;
                        o258[11164 >> 2] = 0;
                        o258[10740 >> 2] = o258[2794];
                        o258[10736 >> 2] = -1;
                        o1091 = 0;
                        do {
                            o1097 = o1091 << 1;
                            o747 = 10744 + (o1097 << 2) | 0;
                            o258[10744 + (o1097 + 3 << 2) >> 2] = o747;
                            o258[10744 + (o1097 + 2 << 2) >> 2] = o747;
                            o1091 = o1091 + 1 | 0;
                        } while ((o1091 | 0) != 32);
                        o1091 = o1103 + 8 | 0;
                        if ((o1091 & 7 | 0) == 0) {
                            o1110 = 0
                        } else {
                            o1110 = 0 - o1091 & 7
                        }
                        o1091 = o1106 + -40 - o1110 | 0;
                        o258[10728 >> 2] = o1103 + o1110;
                        o258[10716 >> 2] = o1091;
                        o258[o1103 + (o1110 + 4) >> 2] = o1091 | 1;
                        o258[o1103 + (o1106 + -36) >> 2] = 40;
                        o258[10732 >> 2] = o258[11192 >> 2]
                    } else {
                        o1091 = 11152 | 0;
                        while (1) {
                            o1111 = o258[o1091 >> 2] | 0;
                            o1112 = o1091 + 4 | 0;
                            o1113 = o258[o1112 >> 2] | 0;
                            if ((o1103 | 0) == (o1111 + o1113 | 0)) {
                                o1093 = 214;
                                break
                            }
                            o747 = o258[o1091 + 8 >> 2] | 0;
                            if ((o747 | 0) == 0) {
                                break
                            } else {
                                o1091 = o747
                            }
                        }
                        do {
                            if ((o1093 | 0) == 214) {
                                if ((o258[o1091 + 12 >> 2] & 8 | 0) != 0) {
                                    break
                                }
                                o747 = o1109;
                                if (!(o747 >>> 0 >= o1111 >>> 0 & o747 >>> 0 < o1103 >>> 0)) {
                                    break
                                }
                                o258[o1112 >> 2] = o1113 + o1106;
                                o1097 = (o258[10716 >> 2] | 0) + o1106 | 0;
                                o1096 = o1109 + 8 | 0;
                                if ((o1096 & 7 | 0) == 0) {
                                    o1114 = 0
                                } else {
                                    o1114 = 0 - o1096 & 7
                                }
                                o1096 = o1097 - o1114 | 0;
                                o258[10728 >> 2] = o747 + o1114;
                                o258[10716 >> 2] = o1096;
                                o258[o747 + (o1114 + 4) >> 2] = o1096 | 1;
                                o258[o747 + (o1097 + 4) >> 2] = 40;
                                o258[10732 >> 2] = o258[11192 >> 2];
                                break o82
                            }
                        } while (0);
                        if (o1103 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                            o258[10720 >> 2] = o1103
                        }
                        o1091 = o1103 + o1106 | 0;
                        o1097 = 11152 | 0;
                        while (1) {
                            o1115 = o1097;
                            if ((o258[o1115 >> 2] | 0) == (o1091 | 0)) {
                                o1093 = 224;
                                break
                            }
                            o747 = o258[o1097 + 8 >> 2] | 0;
                            if ((o747 | 0) == 0) {
                                break
                            } else {
                                o1097 = o747
                            }
                        }
                        do {
                            if ((o1093 | 0) == 224) {
                                if ((o258[o1097 + 12 >> 2] & 8 | 0) != 0) {
                                    break
                                }
                                o258[o1115 >> 2] = o1103;
                                o1091 = o1097 + 4 | 0;
                                o258[o1091 >> 2] = (o258[o1091 >> 2] | 0) + o1106;
                                o1091 = o1103 + 8 | 0;
                                if ((o1091 & 7 | 0) == 0) {
                                    o1116 = 0
                                } else {
                                    o1116 = 0 - o1091 & 7
                                }
                                o1091 = o1103 + (o1106 + 8) | 0;
                                if ((o1091 & 7 | 0) == 0) {
                                    o1117 = 0
                                } else {
                                    o1117 = 0 - o1091 & 7
                                }
                                o1091 = o1103 + (o1117 + o1106) | 0;
                                o747 = o1091;
                                o1096 = o1116 + o1064 | 0;
                                o1100 = o1103 + o1096 | 0;
                                o1098 = o1100;
                                o1081 = o1091 - (o1103 + o1116) - o1064 | 0;
                                o258[o1103 + (o1116 + 4) >> 2] = o1064 | 3;
                                j: do {
                                    if ((o747 | 0) == (o258[10728 >> 2] | 0)) {
                                        o1092 = (o258[10716 >> 2] | 0) + o1081 | 0;
                                        o258[10716 >> 2] = o1092;
                                        o258[10728 >> 2] = o1098;
                                        o258[o1103 + (o1096 + 4) >> 2] = o1092 | 1
                                    } else {
                                        if ((o747 | 0) == (o258[10724 >> 2] | 0)) {
                                            o1092 = (o258[10712 >> 2] | 0) + o1081 | 0;
                                            o258[10712 >> 2] = o1092;
                                            o258[10724 >> 2] = o1098;
                                            o258[o1103 + (o1096 + 4) >> 2] = o1092 | 1;
                                            o258[o1103 + (o1092 + o1096) >> 2] = o1092;
                                            break
                                        }
                                        o1092 = o1106 + 4 | 0;
                                        o1099 = o258[o1103 + (o1092 + o1117) >> 2] | 0;
                                        if ((o1099 & 3 | 0) == 1) {
                                            o1101 = o1099 & -8;
                                            o1095 = o1099 >>> 3;
                                            k: do {
                                                if (o1099 >>> 0 < 256) {
                                                    o1094 = o258[o1103 + ((o1117 | 8) + o1106) >> 2] | 0;
                                                    o1090 = o258[o1103 + (o1106 + 12 + o1117) >> 2] | 0;
                                                    o1080 = 10744 + (o1095 << 1 << 2) | 0;
                                                    do {
                                                        if ((o1094 | 0) != (o1080 | 0)) {
                                                            if (o1094 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                                                                o1102()
                                                            }
                                                            if ((o258[o1094 + 12 >> 2] | 0) == (o747 | 0)) {
                                                                break
                                                            }
                                                            o1102()
                                                        }
                                                    } while (0);
                                                    if ((o1090 | 0) == (o1094 | 0)) {
                                                        o258[2676] = o258[2676] & ~(1 << o1095);
                                                        break
                                                    }
                                                    do {
                                                        if ((o1090 | 0) == (o1080 | 0)) {
                                                            o1118 = o1090 + 8 | 0
                                                        } else {
                                                            if (o1090 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                                                                o1102()
                                                            }
                                                            o1087 = o1090 + 8 | 0;
                                                            if ((o258[o1087 >> 2] | 0) == (o747 | 0)) {
                                                                o1118 = o1087;
                                                                break
                                                            }
                                                            o1102()
                                                        }
                                                    } while (0);
                                                    o258[o1094 + 12 >> 2] = o1090;
                                                    o258[o1118 >> 2] = o1094
                                                } else {
                                                    o1080 = o1091;
                                                    o1087 = o258[o1103 + ((o1117 | 24) + o1106) >> 2] | 0;
                                                    o1088 = o258[o1103 + (o1106 + 12 + o1117) >> 2] | 0;
                                                    do {
                                                        if ((o1088 | 0) == (o1080 | 0)) {
                                                            o66 = o1117 | 16;
                                                            o1089 = o1103 + (o1092 + o66) | 0;
                                                            o1084 = o258[o1089 >> 2] | 0;
                                                            if ((o1084 | 0) == 0) {
                                                                o1085 = o1103 + (o66 + o1106) | 0;
                                                                o66 = o258[o1085 >> 2] | 0;
                                                                if ((o66 | 0) == 0) {
                                                                    o1119 = 0;
                                                                    break
                                                                } else {
                                                                    o1120 = o66;
                                                                    o1121 = o1085
                                                                }
                                                            } else {
                                                                o1120 = o1084;
                                                                o1121 = o1089
                                                            }
                                                            while (1) {
                                                                o1089 = o1120 + 20 | 0;
                                                                o1084 = o258[o1089 >> 2] | 0;
                                                                if ((o1084 | 0) != 0) {
                                                                    o1121 = o1089;
                                                                    o1120 = o1084;
                                                                    continue
                                                                }
                                                                o1084 = o1120 + 16 | 0;
                                                                o1089 = o258[o1084 >> 2] | 0;
                                                                if ((o1089 | 0) == 0) {
                                                                    break
                                                                } else {
                                                                    o1120 = o1089;
                                                                    o1121 = o1084
                                                                }
                                                            }
                                                            if (o1121 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                                                                o1102()
                                                            } else {
                                                                o258[o1121 >> 2] = 0;
                                                                o1119 = o1120;
                                                                break
                                                            }
                                                        } else {
                                                            o1084 = o258[o1103 + ((o1117 | 8) + o1106) >> 2] | 0;
                                                            if (o1084 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                                                                o1102()
                                                            }
                                                            o1089 = o1084 + 12 | 0;
                                                            if ((o258[o1089 >> 2] | 0) != (o1080 | 0)) {
                                                                o1102()
                                                            }
                                                            o1085 = o1088 + 8 | 0;
                                                            if ((o258[o1085 >> 2] | 0) == (o1080 | 0)) {
                                                                o258[o1089 >> 2] = o1088;
                                                                o258[o1085 >> 2] = o1084;
                                                                o1119 = o1088;
                                                                break
                                                            } else {
                                                                o1102()
                                                            }
                                                        }
                                                    } while (0);
                                                    if ((o1087 | 0) == 0) {
                                                        break
                                                    }
                                                    o1088 = o258[o1103 + (o1106 + 28 + o1117) >> 2] | 0;
                                                    o1094 = 11008 + (o1088 << 2) | 0;
                                                    do {
                                                        if ((o1080 | 0) == (o258[o1094 >> 2] | 0)) {
                                                            o258[o1094 >> 2] = o1119;
                                                            if ((o1119 | 0) != 0) {
                                                                break
                                                            }
                                                            o258[10708 >> 2] = o258[10708 >> 2] & ~(1 << o1088);
                                                            break o111
                                                        } else {
                                                            if (o1087 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                                                                o1102()
                                                            }
                                                            o1090 = o1087 + 16 | 0;
                                                            if ((o258[o1090 >> 2] | 0) == (o1080 | 0)) {
                                                                o258[o1090 >> 2] = o1119
                                                            } else {
                                                                o258[o1087 + 20 >> 2] = o1119
                                                            } if ((o1119 | 0) == 0) {
                                                                break o111
                                                            }
                                                        }
                                                    } while (0);
                                                    if (o1119 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                                                        o1102()
                                                    }
                                                    o258[o1119 + 24 >> 2] = o1087;
                                                    o1080 = o1117 | 16;
                                                    o1088 = o258[o1103 + (o1080 + o1106) >> 2] | 0;
                                                    do {
                                                        if ((o1088 | 0) != 0) {
                                                            if (o1088 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                                                                o1102()
                                                            } else {
                                                                o258[o1119 + 16 >> 2] = o1088;
                                                                o258[o1088 + 24 >> 2] = o1119;
                                                                break
                                                            }
                                                        }
                                                    } while (0);
                                                    o1088 = o258[o1103 + (o1092 + o1080) >> 2] | 0;
                                                    if ((o1088 | 0) == 0) {
                                                        break
                                                    }
                                                    if (o1088 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                                                        o1102()
                                                    } else {
                                                        o258[o1119 + 20 >> 2] = o1088;
                                                        o258[o1088 + 24 >> 2] = o1119k: do {
                                                if (ca >>> 0 < 256) {
                                                    Z = c[ga + ((va | 8) + ja) >> 2] | 0;
                                                    V = c[ga + (ja + 12 + va) >> 2] | 0;
                                                    L = 10744 + (_ << 1 << 2) | 0;
                                                    do {
                                                        if ((Z | 0) != (L | 0)) {
                                                            if (Z >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            }
                                                            if ((c[Z + 12 >> 2] | 0) == (ma | 0)) {
                                                                break
                                                            }
                                                            fa()
                                                        }
                                                    } while (0);
                                                    if ((V | 0) == (Z | 0)) {
                                                        c[2676] = c[2676] & ~(1 << _);
                                                        break
                                                    }
                                                    do {
                                                        if ((V | 0) == (L | 0)) {
                                                            wa = V + 8 | 0
                                                        } else {
                                                            if (V >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            }
                                                            S = V + 8 | 0;
                                                            if ((c[S >> 2] | 0) == (ma | 0)) {
                                                                wa = S;
                                                                break
                                                            }
                                                            fa()
                                                        }
                                                    } while (0);
                                                    c[Z + 12 >> 2] = V;
                                                    c[wa >> 2] = Z
                                                } else {
                                                    L = W;
                                                    S = c[ga + ((va | 24) + ja) >> 2] | 0;
                                                    T = c[ga + (ja + 12 + va) >> 2] | 0;
                                                    do {
                                                        if ((T | 0) == (L | 0)) {
                                                            h = va | 16;
                                                            U = ga + (X + h) | 0;
                                                            P = c[U >> 2] | 0;
                                                            if ((P | 0) == 0) {
                                                                Q = ga + (h + ja) | 0;
                                                                h = c[Q >> 2] | 0;
                                                                if ((h | 0) == 0) {
                                                                    xa = 0;
                                                                    break
                                                                } else {
                                                                    ya = h;
                                                                    za = Q
                                                                }
                                                            } else {
                                                                ya = P;
                                                                za = U
                                                            }
                                                            while (1) {
                                                                U = ya + 20 | 0;
                                                                P = c[U >> 2] | 0;
                                                                if ((P | 0) != 0) {
                                                                    za = U;
                                                                    ya = P;
                                                                    continue
                                                                }
                                                                P = ya + 16 | 0;
                                                                U = c[P >> 2] | 0;
                                                                if ((U | 0) == 0) {
                                                                    break
                                                                } else {
                                                                    ya = U;
                                                                    za = P
                                                                }
                                                            }
                                                            if (za >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            } else {
                                                                c[za >> 2] = 0;
                                                                xa = ya;
                                                                break
                                                            }
                                                        } else {
                                                            P = c[ga + ((va | 8) + ja) >> 2] | 0;
                                                            if (P >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            }
                                                            U = P + 12 | 0;
                                                            if ((c[U >> 2] | 0) != (L | 0)) {
                                                                fa()
                                                            }
                                                            Q = T + 8 | 0;
                                                            if ((c[Q >> 2] | 0) == (L | 0)) {
                                                                c[U >> 2] = T;
                                                                c[Q >> 2] = P;
                                                                xa = T;
                                                                break
                                                            } else {
                                                                fa()
                                                            }
                                                        }
                                                    } while (0);
                                                    if ((S | 0) == 0) {
                                                        break
                                                    }
                                                    T = c[ga + (ja + 28 + va) >> 2] | 0;
                                                    Z = 11008 + (T << 2) | 0;
                                                    do {
                                                        if ((L | 0) == (c[Z >> 2] | 0)) {
                                                            c[Z >> 2] = xa;
                                                            if ((xa | 0) != 0) {
                                                                break
                                                            }
                                                            c[10708 >> 2] = c[10708 >> 2] & ~(1 << T);
                                                            break k
                                                        } else {
                                                            if (S >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            }
                                                            V = S + 16 | 0;
                                                            if ((c[V >> 2] | 0) == (L | 0)) {
                                                                c[V >> 2] = xa
                                                            } else {
                                                                c[S + 20 >> 2] = xa
                                                            } if ((xa | 0) == 0) {
                                                                break k
                                                            }
                                                        }
                                                    } while (0);
                                                    if (xa >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                        fa()
                                                    }
                                                    c[xa + 24 >> 2] = S;
                                                    L = va | 16;
                                                    T = c[ga + (L + ja) >> 2] | 0;
                                                    do {
                                                        if ((T | 0) != 0) {
                                                            if (T >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            } else {
                                                                c[xa + 16 >> 2] = T;
                                                                c[T + 24 >> 2] = xa;
                                                                break
                                                            }
                                                        }
                                                    } while (0);
                                                    T = c[ga + (X + L) >> 2] | 0;
                                                    if ((T | 0) == 0) {
                                                        break
                                                    }
                                                    if (T >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                        fa()
                                                    } else {
                                                        c[xa + 20 >> 2] = T;
                                                        c[T + 24 >> 2] = xao111: do {
                                                if (ca >>> 0 < 256) {
                                                    Z = c[ga + ((va | 8) + ja) >> 2] | 0;
                                                    V = c[ga + (ja + 12 + va) >> 2] | 0;
                                                    L = 10744 + (_ << 1 << 2) | 0;
                                                    do {
                                                        if ((Z | 0) != (L | 0)) {
                                                            if (Z >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            }
                                                            if ((c[Z + 12 >> 2] | 0) == (ma | 0)) {
                                                                break
                                                            }
                                                            fa()
                                                        }
                                                    } while (0);
                                                    if ((V | 0) == (Z | 0)) {
                                                        c[2676] = c[2676] & ~(1 << _);
                                                        break
                                                    }
                                                    do {
                                                        if ((V | 0) == (L | 0)) {
                                                            wa = V + 8 | 0
                                                        } else {
                                                            if (V >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            }
                                                            S = V + 8 | 0;
                                                            if ((c[S >> 2] | 0) == (ma | 0)) {
                                                                wa = S;
                                                                break
                                                            }
                                                            fa()
                                                        }
                                                    } while (0);
                                                    c[Z + 12 >> 2] = V;
                                                    c[wa >> 2] = Z
                                                } else {
                                                    L = W;
                                                    S = c[ga + ((va | 24) + ja) >> 2] | 0;
                                                    T = c[ga + (ja + 12 + va) >> 2] | 0;
                                                    do {
                                                        if ((T | 0) == (L | 0)) {
                                                            h = va | 16;
                                                            U = ga + (X + h) | 0;
                                                            P = c[U >> 2] | 0;
                                                            if ((P | 0) == 0) {
                                                                Q = ga + (h + ja) | 0;
                                                                h = c[Q >> 2] | 0;
                                                                if ((h | 0) == 0) {
                                                                    xa = 0;
                                                                    break
                                                                } else {
                                                                    ya = h;
                                                                    za = Q
                                                                }
                                                            } else {
                                                                ya = P;
                                                                za = U
                                                            }
                                                            while (1) {
                                                                U = ya + 20 | 0;
                                                                P = c[U >> 2] | 0;
                                                                if ((P | 0) != 0) {
                                                                    za = U;
                                                                    ya = P;
                                                                    continue
                                                                }
                                                                P = ya + 16 | 0;
                                                                U = c[P >> 2] | 0;
                                                                if ((U | 0) == 0) {
                                                                    break
                                                                } else {
                                                                    ya = U;
                                                                    za = P
                                                                }
                                                            }
                                                            if (za >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            } else {
                                                                c[za >> 2] = 0;
                                                                xa = ya;
                                                                break
                                                            }
                                                        } else {
                                                            P = c[ga + ((va | 8) + ja) >> 2] | 0;
                                                            if (P >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            }
                                                            U = P + 12 | 0;
                                                            if ((c[U >> 2] | 0) != (L | 0)) {
                                                                fa()
                                                            }
                                                            Q = T + 8 | 0;
                                                            if ((c[Q >> 2] | 0) == (L | 0)) {
                                                                c[U >> 2] = T;
                                                                c[Q >> 2] = P;
                                                                xa = T;
                                                                break
                                                            } else {
                                                                fa()
                                                            }
                                                        }
                                                    } while (0);
                                                    if ((S | 0) == 0) {
                                                        break
                                                    }
                                                    T = c[ga + (ja + 28 + va) >> 2] | 0;
                                                    Z = 11008 + (T << 2) | 0;
                                                    do {
                                                        if ((L | 0) == (c[Z >> 2] | 0)) {
                                                            c[Z >> 2] = xa;
                                                            if ((xa | 0) != 0) {
                                                                break
                                                            }
                                                            c[10708 >> 2] = c[10708 >> 2] & ~(1 << T);
                                                            break k
                                                        } else {
                                                            if (S >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            }
                                                            V = S + 16 | 0;
                                                            if ((c[V >> 2] | 0) == (L | 0)) {
                                                                c[V >> 2] = xa
                                                            } else {
                                                                c[S + 20 >> 2] = xa
                                                            } if ((xa | 0) == 0) {
                                                                break k
                                                            }
                                                        }
                                                    } while (0);
                                                    if (xa >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                        fa()
                                                    }
                                                    c[xa + 24 >> 2] = S;
                                                    L = va | 16;
                                                    T = c[ga + (L + ja) >> 2] | 0;
                                                    do {
                                                        if ((T | 0) != 0) {
                                                            if (T >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            } else {
                                                                c[xa + 16 >> 2] = T;
                                                                c[T + 24 >> 2] = xa;
                                                                break
                                                            }
                                                        }
                                                    } while (0);
                                                    T = c[ga + (X + L) >> 2] | 0;
                                                    if ((T | 0) == 0) {
                                                        break
                                                    }
                                                    if (T >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                        fa()
                                                    } else {
                                                        c[xa + 20 >> 2] = T;
                                                        c[T + 24 >> 2] = xa;
                                                        break
                                                    }
                                                }
                                            } while (0);
                                            o1122 = o1103 + ((o1101 | o1117) + o1106) | 0;
                                            o1123 = o1101 + o1081 | 0
                                        } else {
                                            o1122 = o747;
                                            o1123 = o1081
                                        }
                                        o1092 = o1122 + 4 | 0;
                                        o258[o1092 >> 2] = o258[o1092 >> 2] & -2;
                                        o258[o1103 + (o1096 + 4) >> 2] = o1123 | 1;
                                        o258[o1103 + (o1123 + o1096) >> 2] = o1123;
                                        o1092 = o1123 >>> 3;
                                        if (o1123 >>> 0 < 256) {
                                            o1095 = o1092 << 1;
                                            o1099 = 10744 + (o1095 << 2) | 0;
                                            o1088 = o258[2676] | 0;
                                            o1087 = 1 << o1092;
                                            do {
                                                if ((o1088 & o1087 | 0) == 0) {
                                                    o258[2676] = o1088 | o1087;
                                                    o1124 = 10744 + (o1095 + 2 << 2) | 0;
                                                    o1125 = o1099
                                                } else {
                                                    o1092 = 10744 + (o1095 + 2 << 2) | 0;
                                                    o1094 = o258[o1092 >> 2] | 0;
                                                    if (!(o1094 >>> 0 < (o258[10720 >> 2] | 0) >>> 0)) {
                                                        o1124 = o1092;
                                                        o1125 = o1094;
                                                        break
                                                    }
                                                    o1102()
                                                }
                                            } while (0);
                                            o258[o1124 >> 2] = o1098;
                                            o258[o1125 + 12 >> 2] = o1098;
                                            o258[o1103 + (o1096 + 8) >> 2] = o1125;
                                            o258[o1103 + (o1096 + 12) >> 2] = o1099;
                                            break
                                        }
                                        o1095 = o1100;
                                        o1087 = o1123 >>> 8;
                                        do {
                                            if ((o1087 | 0) == 0) {
                                                o1126 = 0
                                            } else {
                                                if (o1123 >>> 0 > 16777215) {
                                                    o1126 = 31;
                                                    break
                                                }
                                                o1088 = (o1087 + 1048320 | 0) >>> 16 & 8;
                                                o1101 = o1087 << o1088;
                                                o1094 = (o1101 + 520192 | 0) >>> 16 & 4;
                                                o1092 = o1101 << o1094;
                                                o1101 = (o1092 + 245760 | 0) >>> 16 & 2;
                                                o1090 = 14 - (o1094 | o1088 | o1101) + (o1092 << o1101 >>> 15) | 0;
                                                o1126 = o1123 >>> (o1090 + 7 | 0) & 1 | o1090 << 1
                                            }
                                        } while (0);
                                        o1087 = 11008 + (o1126 << 2) | 0;
                                        o258[o1103 + (o1096 + 28) >> 2] = o1126;
                                        o258[o1103 + (o1096 + 20) >> 2] = 0;
                                        o258[o1103 + (o1096 + 16) >> 2] = 0;
                                        o1099 = o258[10708 >> 2] | 0;
                                        o1090 = 1 << o1126;
                                        if ((o1099 & o1090 | 0) == 0) {
                                            o258[10708 >> 2] = o1099 | o1090;
                                            o258[o1087 >> 2] = o1095;
                                            o258[o1103 + (o1096 + 24) >> 2] = o1087;
                                            o258[o1103 + (o1096 + 12) >> 2] = o1095;
                                            o258[o1103 + (o1096 + 8) >> 2] = o1095;
                                            break
                                        }
                                        o1090 = o258[o1087 >> 2] | 0;
                                        if ((o1126 | 0) == 31) {
                                            o1127 = 0
                                        } else {
                                            o1127 = 25 - (o1126 >>> 1) | 0
                                        }
                                        l: do {
                                            if ((o258[o1090 + 4 >> 2] & -8 | 0) == (o1123 | 0)) {
                                                o1128 = o1090
                                            } else {
                                                o1087 = o1123 << o1127;
                                                o1099 = o1090;
                                                while (1) {
                                                    o1129 = o1099 + (o1087 >>> 31 << 2) + 16 | 0;
                                                    o1101 = o258[o1129 >> 2] | 0;
                                                    if ((o1101 | 0) == 0) {
                                                        break
                                                    }
                                                    if ((o258[o1101 + 4 >> 2] & -8 | 0) == (o1123 | 0)) {
                                                        o1128 = o1101;
                                                        break o65
                                                    } else {
                                                        o1087 = o1087 << 1;
                                                        o1099 = o1101
                                                    }
                                                }
                                                if (o1129 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                                                    o1102()
                                                } else {
                                                    o258[o1129 >> 2] = o1095;
                                                    o258[o1103 + (o1096 + 24) >> 2] = o1099;
                                                    o258[o1103 + (o1096 + 12) >> 2] = o1095;
                                                    o258[o1103 + (o1096 + 8) >> 2] = o1095;
                                                    break o1061l: do {
                                            if ((c[V + 4 >> 2] & -8 | 0) == (Ba | 0)) {
                                                Ga = V
                                            } else {
                                                S = Ba << Fa;
                                                ca = V;
                                                while (1) {
                                                    Ha = ca + (S >>> 31 << 2) + 16 | 0;
                                                    ea = c[Ha >> 2] | 0;
                                                    if ((ea | 0) == 0) {
                                                        break
                                                    }
                                                    if ((c[ea + 4 >> 2] & -8 | 0) == (Ba | 0)) {
                                                        Ga = ea;
                                                        break l
                                                    } else {
                                                        S = S << 1;
                                                        ca = ea
                                                    }
                                                }
                                                if (Ha >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                    fa()
                                                } else {
                                                    c[Ha >> 2] = _;
                                                    c[ga + ($ + 24) >> 2] = ca;
                                                    c[ga + ($ + 12) >> 2] = _;
                                                    c[ga + ($ + 8) >> 2] = _;
                                                    break jo65: do {
                                            if ((c[V + 4 >> 2] & -8 | 0) == (Ba | 0)) {
                                                Ga = V
                                            } else {
                                                S = Ba << Fa;
                                                ca = V;
                                                while (1) {
                                                    Ha = ca + (S >>> 31 << 2) + 16 | 0;
                                                    ea = c[Ha >> 2] | 0;
                                                    if ((ea | 0) == 0) {
                                                        break
                                                    }
                                                    if ((c[ea + 4 >> 2] & -8 | 0) == (Ba | 0)) {
                                                        Ga = ea;
                                                        break l
                                                    } else {
                                                        S = S << 1;
                                                        ca = ea
                                                    }
                                                }
                                                if (Ha >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                    fa()
                                                } else {
                                                    c[Ha >> 2] = _;
                                                    c[ga + ($ + 24) >> 2] = ca;
                                                    c[ga + ($ + 12) >> 2] = _;
                                                    c[ga + ($ + 8) >> 2] = _;
                                                    break j
                                                }
                                            }
                                        } while (0);
                                        o1090 = o1128 + 8 | 0;
                                        o1087 = o258[o1090 >> 2] | 0;
                                        o1080 = o258[10720 >> 2] | 0;
                                        if (o1128 >>> 0 < o1080 >>> 0) {
                                            o1102()
                                        }
                                        if (o1087 >>> 0 < o1080 >>> 0) {
                                            o1102()
                                        } else {
                                            o258[o1087 + 12 >> 2] = o1095;
                                            o258[o1090 >> 2] = o1095;
                                            o258[o1103 + (o1096 + 8) >> 2] = o1087;
                                            o258[o1103 + (o1096 + 12) >> 2] = o1128;
                                            o258[o1103 + (o1096j: do {
                                    if ((ma | 0) == (c[10728 >> 2] | 0)) {
                                        X = (c[10716 >> 2] | 0) + M | 0;
                                        c[10716 >> 2] = X;
                                        c[10728 >> 2] = ba;
                                        c[ga + ($ + 4) >> 2] = X | 1
                                    } else {
                                        if ((ma | 0) == (c[10724 >> 2] | 0)) {
                                            X = (c[10712 >> 2] | 0) + M | 0;
                                            c[10712 >> 2] = X;
                                            c[10724 >> 2] = ba;
                                            c[ga + ($ + 4) >> 2] = X | 1;
                                            c[ga + (X + $) >> 2] = X;
                                            break
                                        }
                                        X = ja + 4 | 0;
                                        ca = c[ga + (X + va) >> 2] | 0;
                                        if ((ca & 3 | 0) == 1) {
                                            ea = ca & -8;
                                            _ = ca >>> 3;
                                            k: do {
                                                if (ca >>> 0 < 256) {
                                                    Z = c[ga + ((va | 8) + ja) >> 2] | 0;
                                                    V = c[ga + (ja + 12 + va) >> 2] | 0;
                                                    L = 10744 + (_ << 1 << 2) | 0;
                                                    do {
                                                        if ((Z | 0) != (L | 0)) {
                                                            if (Z >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            }
                                                            if ((c[Z + 12 >> 2] | 0) == (ma | 0)) {
                                                                break
                                                            }
                                                            fa()
                                                        }
                                                    } while (0);
                                                    if ((V | 0) == (Z | 0)) {
                                                        c[2676] = c[2676] & ~(1 << _);
                                                        break
                                                    }
                                                    do {
                                                        if ((V | 0) == (L | 0)) {
                                                            wa = V + 8 | 0
                                                        } else {
                                                            if (V >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            }
                                                            S = V + 8 | 0;
                                                            if ((c[S >> 2] | 0) == (ma | 0)) {
                                                                wa = S;
                                                                break
                                                            }
                                                            fa()
                                                        }
                                                    } while (0);
                                                    c[Z + 12 >> 2] = V;
                                                    c[wa >> 2] = Z
                                                } else {
                                                    L = W;
                                                    S = c[ga + ((va | 24) + ja) >> 2] | 0;
                                                    T = c[ga + (ja + 12 + va) >> 2] | 0;
                                                    do {
                                                        if ((T | 0) == (L | 0)) {
                                                            h = va | 16;
                                                            U = ga + (X + h) | 0;
                                                            P = c[U >> 2] | 0;
                                                            if ((P | 0) == 0) {
                                                                Q = ga + (h + ja) | 0;
                                                                h = c[Q >> 2] | 0;
                                                                if ((h | 0) == 0) {
                                                                    xa = 0;
                                                                    break
                                                                } else {
                                                                    ya = h;
                                                                    za = Q
                                                                }
                                                            } else {
                                                                ya = P;
                                                                za = U
                                                            }
                                                            while (1) {
                                                                U = ya + 20 | 0;
                                                                P = c[U >> 2] | 0;
                                                                if ((P | 0) != 0) {
                                                                    za = U;
                                                                    ya = P;
                                                                    continue
                                                                }
                                                                P = ya + 16 | 0;
                                                                U = c[P >> 2] | 0;
                                                                if ((U | 0) == 0) {
                                                                    break
                                                                } else {
                                                                    ya = U;
                                                                    za = P
                                                                }
                                                            }
                                                            if (za >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            } else {
                                                                c[za >> 2] = 0;
                                                                xa = ya;
                                                                break
                                                            }
                                                        } else {
                                                            P = c[ga + ((va | 8) + ja) >> 2] | 0;
                                                            if (P >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            }
                                                            U = P + 12 | 0;
                                                            if ((c[U >> 2] | 0) != (L | 0)) {
                                                                fa()
                                                            }
                                                            Q = T + 8 | 0;
                                                            if ((c[Q >> 2] | 0) == (L | 0)) {
                                                                c[U >> 2] = T;
                                                                c[Q >> 2] = P;
                                                                xa = T;
                                                                break
                                                            } else {
                                                                fa()
                                                            }
                                                        }
                                                    } while (0);
                                                    if ((S | 0) == 0) {
                                                        break
                                                    }
                                                    T = c[ga + (ja + 28 + va) >> 2] | 0;
                                                    Z = 11008 + (T << 2) | 0;
                                                    do {
                                                        if ((L | 0) == (c[Z >> 2] | 0)) {
                                                            c[Z >> 2] = xa;
                                                            if ((xa | 0) != 0) {
                                                                break
                                                            }
                                                            c[10708 >> 2] = c[10708 >> 2] & ~(1 << T);
                                                            break k
                                                        } else {
                                                            if (S >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            }
                                                            V = S + 16 | 0;
                                                            if ((c[V >> 2] | 0) == (L | 0)) {
                                                                c[V >> 2] = xa
                                                            } else {
                                                                c[S + 20 >> 2] = xa
                                                            } if ((xa | 0) == 0) {
                                                                break k
                                                            }
                                                        }
                                                    } while (0);
                                                    if (xa >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                        fa()
                                                    }
                                                    c[xa + 24 >> 2] = S;
                                                    L = va | 16;
                                                    T = c[ga + (L + ja) >> 2] | 0;
                                                    do {
                                                        if ((T | 0) != 0) {
                                                            if (T >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            } else {
                                                                c[xa + 16 >> 2] = T;
                                                                c[T + 24 >> 2] = xa;
                                                                break
                                                            }
                                                        }
                                                    } while (0);
                                                    T = c[ga + (X + L) >> 2] | 0;
                                                    if ((T | 0) == 0) {
                                                        break
                                                    }
                                                    if (T >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                        fa()
                                                    } else {
                                                        c[xa + 20 >> 2] = T;
                                                        c[T + 24 >> 2] = xa;
                                                        break
                                                    }
                                                }
                                            } while (0);
                                            Aa = ga + ((ea | va) + ja) | 0;
                                            Ba = ea + M | 0
                                        } else {
                                            Aa = ma;
                                            Ba = M
                                        }
                                        X = Aa + 4 | 0;
                                        c[X >> 2] = c[X >> 2] & -2;
                                        c[ga + ($ + 4) >> 2] = Ba | 1;
                                        c[ga + (Ba + $) >> 2] = Ba;
                                        X = Ba >>> 3;
                                        if (Ba >>> 0 < 256) {
                                            _ = X << 1;
                                            ca = 10744 + (_ << 2) | 0;
                                            T = c[2676] | 0;
                                            S = 1 << X;
                                            do {
                                                if ((T & S | 0) == 0) {
                                                    c[2676] = T | S;
                                                    Ca = 10744 + (_ + 2 << 2) | 0;
                                                    Da = ca
                                                } else {
                                                    X = 10744 + (_ + 2 << 2) | 0;
                                                    Z = c[X >> 2] | 0;
                                                    if (!(Z >>> 0 < (c[10720 >> 2] | 0) >>> 0)) {
                                                        Ca = X;
                                                        Da = Z;
                                                        break
                                                    }
                                                    fa()
                                                }
                                            } while (0);
                                            c[Ca >> 2] = ba;
                                            c[Da + 12 >> 2] = ba;
                                            c[ga + ($ + 8) >> 2] = Da;
                                            c[ga + ($ + 12) >> 2] = ca;
                                            break
                                        }
                                        _ = da;
                                        S = Ba >>> 8;
                                        do {
                                            if ((S | 0) == 0) {
                                                Ea = 0
                                            } else {
                                                if (Ba >>> 0 > 16777215) {
                                                    Ea = 31;
                                                    break
                                                }
                                                T = (S + 1048320 | 0) >>> 16 & 8;
                                                ea = S << T;
                                                Z = (ea + 520192 | 0) >>> 16 & 4;
                                                X = ea << Z;
                                                ea = (X + 245760 | 0) >>> 16 & 2;
                                                V = 14 - (Z | T | ea) + (X << ea >>> 15) | 0;
                                                Ea = Ba >>> (V + 7 | 0) & 1 | V << 1
                                            }
                                        } while (0);
                                        S = 11008 + (Ea << 2) | 0;
                                        c[ga + ($ + 28) >> 2] = Ea;
                                        c[ga + ($ + 20) >> 2] = 0;
                                        c[ga + ($ + 16) >> 2] = 0;
                                        ca = c[10708 >> 2] | 0;
                                        V = 1 << Ea;
                                        if ((ca & V | 0) == 0) {
                                            c[10708 >> 2] = ca | V;
                                            c[S >> 2] = _;
                                            c[ga + ($ + 24) >> 2] = S;
                                            c[ga + ($ + 12) >> 2] = _;
                                            c[ga + ($ + 8) >> 2] = _;
                                            break
                                        }
                                        V = c[S >> 2] | 0;
                                        if ((Ea | 0) == 31) {
                                            Fa = 0
                                        } else {
                                            Fa = 25 - (Ea >>> 1) | 0
                                        }
                                        l: do {
                                            if ((c[V + 4 >> 2] & -8 | 0) == (Ba | 0)) {
                                                Ga = V
                                            } else {
                                                S = Ba << Fa;
                                                ca = V;
                                                while (1) {
                                                    Ha = ca + (S >>> 31 << 2) + 16 | 0;
                                                    ea = c[Ha >> 2] | 0;
                                                    if ((ea | 0) == 0) {
                                                        break
                                                    }
                                                    if ((c[ea + 4 >> 2] & -8 | 0) == (Ba | 0)) {
                                                        Ga = ea;
                                                        break l
                                                    } else {
                                                        S = S << 1;
                                                        ca = ea
                                                    }
                                                }
                                                if (Ha >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                    fa()
                                                } else {
                                                    c[Ha >> 2] = _;
                                                    c[ga + ($ + 24) >> 2] = ca;
                                                    c[ga + ($ + 12) >> 2] = _;
                                                    c[ga + ($ + 8) >> 2] = _;
                                                    break j
                                                }
                                            }
                                        } while (0);
                                        V = Ga + 8 | 0;
                                        S = c[V >> 2] | 0;
                                        L = c[10720 >> 2] | 0;
                                        if (Ga >>> 0 < L >>> 0) {
                                            fa()
                                        }
                                        if (S >>> 0 < L >>> 0) {
                                            fa()
                                        } else {
                                            c[S + 12 >> 2] = _;
                                            c[V >> 2] = _;
                                            c[ga + ($ + 8) >> 2] = S;
                                            c[ga + ($ + 12) >> 2] = Ga;
                                            c[ga + ($o1061: do {
                                    if ((ma | 0) == (c[10728 >> 2] | 0)) {
                                        X = (c[10716 >> 2] | 0) + M | 0;
                                        c[10716 >> 2] = X;
                                        c[10728 >> 2] = ba;
                                        c[ga + ($ + 4) >> 2] = X | 1
                                    } else {
                                        if ((ma | 0) == (c[10724 >> 2] | 0)) {
                                            X = (c[10712 >> 2] | 0) + M | 0;
                                            c[10712 >> 2] = X;
                                            c[10724 >> 2] = ba;
                                            c[ga + ($ + 4) >> 2] = X | 1;
                                            c[ga + (X + $) >> 2] = X;
                                            break
                                        }
                                        X = ja + 4 | 0;
                                        ca = c[ga + (X + va) >> 2] | 0;
                                        if ((ca & 3 | 0) == 1) {
                                            ea = ca & -8;
                                            _ = ca >>> 3;
                                            k: do {
                                                if (ca >>> 0 < 256) {
                                                    Z = c[ga + ((va | 8) + ja) >> 2] | 0;
                                                    V = c[ga + (ja + 12 + va) >> 2] | 0;
                                                    L = 10744 + (_ << 1 << 2) | 0;
                                                    do {
                                                        if ((Z | 0) != (L | 0)) {
                                                            if (Z >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            }
                                                            if ((c[Z + 12 >> 2] | 0) == (ma | 0)) {
                                                                break
                                                            }
                                                            fa()
                                                        }
                                                    } while (0);
                                                    if ((V | 0) == (Z | 0)) {
                                                        c[2676] = c[2676] & ~(1 << _);
                                                        break
                                                    }
                                                    do {
                                                        if ((V | 0) == (L | 0)) {
                                                            wa = V + 8 | 0
                                                        } else {
                                                            if (V >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            }
                                                            S = V + 8 | 0;
                                                            if ((c[S >> 2] | 0) == (ma | 0)) {
                                                                wa = S;
                                                                break
                                                            }
                                                            fa()
                                                        }
                                                    } while (0);
                                                    c[Z + 12 >> 2] = V;
                                                    c[wa >> 2] = Z
                                                } else {
                                                    L = W;
                                                    S = c[ga + ((va | 24) + ja) >> 2] | 0;
                                                    T = c[ga + (ja + 12 + va) >> 2] | 0;
                                                    do {
                                                        if ((T | 0) == (L | 0)) {
                                                            h = va | 16;
                                                            U = ga + (X + h) | 0;
                                                            P = c[U >> 2] | 0;
                                                            if ((P | 0) == 0) {
                                                                Q = ga + (h + ja) | 0;
                                                                h = c[Q >> 2] | 0;
                                                                if ((h | 0) == 0) {
                                                                    xa = 0;
                                                                    break
                                                                } else {
                                                                    ya = h;
                                                                    za = Q
                                                                }
                                                            } else {
                                                                ya = P;
                                                                za = U
                                                            }
                                                            while (1) {
                                                                U = ya + 20 | 0;
                                                                P = c[U >> 2] | 0;
                                                                if ((P | 0) != 0) {
                                                                    za = U;
                                                                    ya = P;
                                                                    continue
                                                                }
                                                                P = ya + 16 | 0;
                                                                U = c[P >> 2] | 0;
                                                                if ((U | 0) == 0) {
                                                                    break
                                                                } else {
                                                                    ya = U;
                                                                    za = P
                                                                }
                                                            }
                                                            if (za >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            } else {
                                                                c[za >> 2] = 0;
                                                                xa = ya;
                                                                break
                                                            }
                                                        } else {
                                                            P = c[ga + ((va | 8) + ja) >> 2] | 0;
                                                            if (P >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            }
                                                            U = P + 12 | 0;
                                                            if ((c[U >> 2] | 0) != (L | 0)) {
                                                                fa()
                                                            }
                                                            Q = T + 8 | 0;
                                                            if ((c[Q >> 2] | 0) == (L | 0)) {
                                                                c[U >> 2] = T;
                                                                c[Q >> 2] = P;
                                                                xa = T;
                                                                break
                                                            } else {
                                                                fa()
                                                            }
                                                        }
                                                    } while (0);
                                                    if ((S | 0) == 0) {
                                                        break
                                                    }
                                                    T = c[ga + (ja + 28 + va) >> 2] | 0;
                                                    Z = 11008 + (T << 2) | 0;
                                                    do {
                                                        if ((L | 0) == (c[Z >> 2] | 0)) {
                                                            c[Z >> 2] = xa;
                                                            if ((xa | 0) != 0) {
                                                                break
                                                            }
                                                            c[10708 >> 2] = c[10708 >> 2] & ~(1 << T);
                                                            break k
                                                        } else {
                                                            if (S >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            }
                                                            V = S + 16 | 0;
                                                            if ((c[V >> 2] | 0) == (L | 0)) {
                                                                c[V >> 2] = xa
                                                            } else {
                                                                c[S + 20 >> 2] = xa
                                                            } if ((xa | 0) == 0) {
                                                                break k
                                                            }
                                                        }
                                                    } while (0);
                                                    if (xa >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                        fa()
                                                    }
                                                    c[xa + 24 >> 2] = S;
                                                    L = va | 16;
                                                    T = c[ga + (L + ja) >> 2] | 0;
                                                    do {
                                                        if ((T | 0) != 0) {
                                                            if (T >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            } else {
                                                                c[xa + 16 >> 2] = T;
                                                                c[T + 24 >> 2] = xa;
                                                                break
                                                            }
                                                        }
                                                    } while (0);
                                                    T = c[ga + (X + L) >> 2] | 0;
                                                    if ((T | 0) == 0) {
                                                        break
                                                    }
                                                    if (T >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                        fa()
                                                    } else {
                                                        c[xa + 20 >> 2] = T;
                                                        c[T + 24 >> 2] = xa;
                                                        break
                                                    }
                                                }
                                            } while (0);
                                            Aa = ga + ((ea | va) + ja) | 0;
                                            Ba = ea + M | 0
                                        } else {
                                            Aa = ma;
                                            Ba = M
                                        }
                                        X = Aa + 4 | 0;
                                        c[X >> 2] = c[X >> 2] & -2;
                                        c[ga + ($ + 4) >> 2] = Ba | 1;
                                        c[ga + (Ba + $) >> 2] = Ba;
                                        X = Ba >>> 3;
                                        if (Ba >>> 0 < 256) {
                                            _ = X << 1;
                                            ca = 10744 + (_ << 2) | 0;
                                            T = c[2676] | 0;
                                            S = 1 << X;
                                            do {
                                                if ((T & S | 0) == 0) {
                                                    c[2676] = T | S;
                                                    Ca = 10744 + (_ + 2 << 2) | 0;
                                                    Da = ca
                                                } else {
                                                    X = 10744 + (_ + 2 << 2) | 0;
                                                    Z = c[X >> 2] | 0;
                                                    if (!(Z >>> 0 < (c[10720 >> 2] | 0) >>> 0)) {
                                                        Ca = X;
                                                        Da = Z;
                                                        break
                                                    }
                                                    fa()
                                                }
                                            } while (0);
                                            c[Ca >> 2] = ba;
                                            c[Da + 12 >> 2] = ba;
                                            c[ga + ($ + 8) >> 2] = Da;
                                            c[ga + ($ + 12) >> 2] = ca;
                                            break
                                        }
                                        _ = da;
                                        S = Ba >>> 8;
                                        do {
                                            if ((S | 0) == 0) {
                                                Ea = 0
                                            } else {
                                                if (Ba >>> 0 > 16777215) {
                                                    Ea = 31;
                                                    break
                                                }
                                                T = (S + 1048320 | 0) >>> 16 & 8;
                                                ea = S << T;
                                                Z = (ea + 520192 | 0) >>> 16 & 4;
                                                X = ea << Z;
                                                ea = (X + 245760 | 0) >>> 16 & 2;
                                                V = 14 - (Z | T | ea) + (X << ea >>> 15) | 0;
                                                Ea = Ba >>> (V + 7 | 0) & 1 | V << 1
                                            }
                                        } while (0);
                                        S = 11008 + (Ea << 2) | 0;
                                        c[ga + ($ + 28) >> 2] = Ea;
                                        c[ga + ($ + 20) >> 2] = 0;
                                        c[ga + ($ + 16) >> 2] = 0;
                                        ca = c[10708 >> 2] | 0;
                                        V = 1 << Ea;
                                        if ((ca & V | 0) == 0) {
                                            c[10708 >> 2] = ca | V;
                                            c[S >> 2] = _;
                                            c[ga + ($ + 24) >> 2] = S;
                                            c[ga + ($ + 12) >> 2] = _;
                                            c[ga + ($ + 8) >> 2] = _;
                                            break
                                        }
                                        V = c[S >> 2] | 0;
                                        if ((Ea | 0) == 31) {
                                            Fa = 0
                                        } else {
                                            Fa = 25 - (Ea >>> 1) | 0
                                        }
                                        l: do {
                                            if ((c[V + 4 >> 2] & -8 | 0) == (Ba | 0)) {
                                                Ga = V
                                            } else {
                                                S = Ba << Fa;
                                                ca = V;
                                                while (1) {
                                                    Ha = ca + (S >>> 31 << 2) + 16 | 0;
                                                    ea = c[Ha >> 2] | 0;
                                                    if ((ea | 0) == 0) {
                                                        break
                                                    }
                                                    if ((c[ea + 4 >> 2] & -8 | 0) == (Ba | 0)) {
                                                        Ga = ea;
                                                        break l
                                                    } else {
                                                        S = S << 1;
                                                        ca = ea
                                                    }
                                                }
                                                if (Ha >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                    fa()
                                                } else {
                                                    c[Ha >> 2] = _;
                                                    c[ga + ($ + 24) >> 2] = ca;
                                                    c[ga + ($ + 12) >> 2] = _;
                                                    c[ga + ($ + 8) >> 2] = _;
                                                    break j
                                                }
                                            }
                                        } while (0);
                                        V = Ga + 8 | 0;
                                        S = c[V >> 2] | 0;
                                        L = c[10720 >> 2] | 0;
                                        if (Ga >>> 0 < L >>> 0) {
                                            fa()
                                        }
                                        if (S >>> 0 < L >>> 0) {
                                            fa()
                                        } else {
                                            c[S + 12 >> 2] = _;
                                            c[V >> 2] = _;
                                            c[ga + ($ + 8) >> 2] = S;
                                            c[ga + ($ + 12) >> 2] = Ga;
                                            c[ga + ($ + 24) >> 2] = 0;
                                            break
                                        }
                                    }
                                } while (0);
                                o602 = o1103 + (o1116 | 8) | 0;
                                o82 = o308;
                                return o602 | 0
                            }
                        } while (0);
                        o1097 = o1109;
                        o1096 = 11152 | 0;
                        while (1) {
                            o1130 = o258[o1096 >> 2] | 0;
                            if (!(o1130 >>> 0 > o1097 >>> 0)) {
                                o1131 = o258[o1096 + 4 >> 2] | 0;
                                o1132 = o1130 + o1131 | 0;
                                if (o1132 >>> 0 > o1097 >>> 0) {
                                    break
                                }
                            }
                            o1096 = o258[o1096 + 8 >> 2] | 0
                        }
                        o1096 = o1130 + (o1131 + -39) | 0;
                        if ((o1096 & 7 | 0) == 0) {
                            o1133 = 0
                        } else {
                            o1133 = 0 - o1096 & 7
                        }
                        o1096 = o1130 + (o1131 + -47 + o1133) | 0;
                        o1100 = o1096 >>> 0 < (o1109 + 16 | 0) >>> 0 ? o1097 : o1096;
                        o1096 = o1100 + 8 | 0;
                        o1098 = o1096;
                        o1081 = o1103 + 8 | 0;
                        if ((o1081 & 7 | 0) == 0) {
                            o1134 = 0
                        } else {
                            o1134 = 0 - o1081 & 7
                        }
                        o1081 = o1106 + -40 - o1134 | 0;
                        o258[10728 >> 2] = o1103 + o1134;
                        o258[10716 >> 2] = o1081;
                        o258[o1103 + (o1134 + 4) >> 2] = o1081 | 1;
                        o258[o1103 + (o1106 + -36) >> 2] = 40;
                        o258[10732 >> 2] = o258[11192 >> 2];
                        o258[o1100 + 4 >> 2] = 27;
                        o258[o1096 + 0 >> 2] = o258[11152 >> 2];
                        o258[o1096 + 4 >> 2] = o258[11156 >> 2];
                        o258[o1096 + 8 >> 2] = o258[11160 >> 2];
                        o258[o1096 + 12 >> 2] = o258[11164 >> 2];
                        o258[11152 >> 2] = o1103;
                        o258[11156 >> 2] = o1106;
                        o258[11164 >> 2] = 0;
                        o258[11160 >> 2] = o1098;
                        o1098 = o1100 + 28 | 0;
                        o258[o1098 >> 2] = 7;
                        if ((o1100 + 32 | 0) >>> 0 < o1132 >>> 0) {
                            o1096 = o1098;
                            while (1) {
                                o1098 = o1096 + 4 | 0;
                                o258[o1098 >> 2] = 7;
                                if ((o1096 + 8 | 0) >>> 0 < o1132 >>> 0) {
                                    o1096 = o1098
                                } else {
                                    break
                                }
                            }
                        }
                        if ((o1100 | 0) == (o1097 | 0)) {
                            break
                        }
                        o1096 = o1100 - o1109 | 0;
                        o1098 = o1097 + (o1096 + 4) | 0;
                        o258[o1098 >> 2] = o258[o1098 >> 2] & -2;
                        o258[o1109 + 4 >> 2] = o1096 | 1;
                        o258[o1097 + o1096 >> 2] = o1096;
                        o1098 = o1096 >>> 3;
                        if (o1096 >>> 0 < 256) {
                            o1081 = o1098 << 1;
                            o747 = 10744 + (o1081 << 2) | 0;
                            o1091 = o258[2676] | 0;
                            o750 = 1 << o1098;
                            do {
                                if ((o1091 & o750 | 0) == 0) {
                                    o258[2676] = o1091 | o750;
                                    o1135 = 10744 + (o1081 + 2 << 2) | 0;
                                    o1136 = o747
                                } else {
                                    o1098 = 10744 + (o1081 + 2 << 2) | 0;
                                    o1087 = o258[o1098 >> 2] | 0;
                                    if (!(o1087 >>> 0 < (o258[10720 >> 2] | 0) >>> 0)) {
                                        o1135 = o1098;
                                        o1136 = o1087;
                                        break
                                    }
                                    o1102()
                                }
                            } while (0);
                            o258[o1135 >> 2] = o1109;
                            o258[o1136 + 12 >> 2] = o1109;
                            o258[o1109 + 8 >> 2] = o1136;
                            o258[o1109 + 12 >> 2] = o747;
                            break
                        }
                        o1081 = o1109;
                        o750 = o1096 >>> 8;
                        do {
                            if ((o750 | 0) == 0) {
                                o1137 = 0
                            } else {
                                if (o1096 >>> 0 > 16777215) {
                                    o1137 = 31;
                                    break
                                }
                                o1091 = (o750 + 1048320 | 0) >>> 16 & 8;
                                o1097 = o750 << o1091;
                                o1100 = (o1097 + 520192 | 0) >>> 16 & 4;
                                o1087 = o1097 << o1100;
                                o1097 = (o1087 + 245760 | 0) >>> 16 & 2;
                                o1098 = 14 - (o1100 | o1091 | o1097) + (o1087 << o1097 >>> 15) | 0;
                                o1137 = o1096 >>> (o1098 + 7 | 0) & 1 | o1098 << 1
                            }
                        } while (0);
                        o750 = 11008 + (o1137 << 2) | 0;
                        o258[o1109 + 28 >> 2] = o1137;
                        o258[o1109 + 20 >> 2] = 0;
                        o258[o1109 + 16 >> 2] = 0;
                        o747 = o258[10708 >> 2] | 0;
                        o1098 = 1 << o1137;
                        if ((o747 & o1098 | 0) == 0) {
                            o258[10708 >> 2] = o747 | o1098;
                            o258[o750 >> 2] = o1081;
                            o258[o1109 + 24 >> 2] = o750;
                            o258[o1109 + 12 >> 2] = o1109;
                            o258[o1109 + 8 >> 2] = o1109;
                            break
                        }
                        o1098 = o258[o750 >> 2] | 0;
                        if ((o1137 | 0) == 31) {
                            o1138 = 0
                        } else {
                            o1138 = 25 - (o1137 >>> 1) | 0
                        }
                        m: do {
                            if ((o258[o1098 + 4 >> 2] & -8 | 0) == (o1096 | 0)) {
                                o1139 = o1098
                            } else {
                                o750 = o1096 << o1138;
                                o747 = o1098;
                                while (1) {
                                    o1140 = o747 + (o750 >>> 31 << 2) + 16 | 0;
                                    o1097 = o258[o1140 >> 2] | 0;
                                    if ((o1097 | 0) == 0) {
                                        break
                                    }
                                    if ((o258[o1097 + 4 >> 2] & -8 | 0) == (o1096 | 0)) {
                                        o1139 = o1097;
                                        break o750
                                    } else {
                                        o750 = o750 << 1;
                                        o747 = o1097
                                    }
                                }
                                if (o1140 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                                    o1102()
                                } else {
                                    o258[o1140 >> 2] = o1081;
                                    o258[o1109 + 24 >> 2] = o747;
                                    o258[o1109 + 12 >> 2] = o1109;
                                    o258[o1109 + 8 >> 2] = o1109;
                                    break o82m: do {
                            if ((c[ba + 4 >> 2] & -8 | 0) == ($ | 0)) {
                                Ra = ba
                            } else {
                                m = $ << Qa;
                                ma = ba;
                                while (1) {
                                    Sa = ma + (m >>> 31 << 2) + 16 | 0;
                                    aa = c[Sa >> 2] | 0;
                                    if ((aa | 0) == 0) {
                                        break
                                    }
                                    if ((c[aa + 4 >> 2] & -8 | 0) == ($ | 0)) {
                                        Ra = aa;
                                        break m
                                    } else {
                                        m = m << 1;
                                        ma = aa
                                    }
                                }
                                if (Sa >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                    fa()
                                } else {
                                    c[Sa >> 2] = M;
                                    c[na + 24 >> 2] = ma;
                                    c[na + 12 >> 2] = na;
                                    c[na + 8 >> 2] = na;
                                    break io750: do {
                            if ((c[ba + 4 >> 2] & -8 | 0) == ($ | 0)) {
                                Ra = ba
                            } else {
                                m = $ << Qa;
                                ma = ba;
                                while (1) {
                                    Sa = ma + (m >>> 31 << 2) + 16 | 0;
                                    aa = c[Sa >> 2] | 0;
                                    if ((aa | 0) == 0) {
                                        break
                                    }
                                    if ((c[aa + 4 >> 2] & -8 | 0) == ($ | 0)) {
                                        Ra = aa;
                                        break m
                                    } else {
                                        m = m << 1;
                                        ma = aa
                                    }
                                }
                                if (Sa >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                    fa()
                                } else {
                                    c[Sa >> 2] = M;
                                    c[na + 24 >> 2] = ma;
                                    c[na + 12 >> 2] = na;
                                    c[na + 8 >> 2] = na;
                                    break i
                                }
                            }
                        } while (0);
                        o1096 = o1139 + 8 | 0;
                        o1098 = o258[o1096 >> 2] | 0;
                        o750 = o258[10720 >> 2] | 0;
                        if (o1139 >>> 0 < o750 >>> 0) {
                            o1102()
                        }
                        if (o1098 >>> 0 < o750 >>> 0) {
                            o1102()
                        } else {
                            o258[o1098 + 12 >> 2] = o1081;
                            o258[o1096 >> 2] = o1081;
                            o258[o1109 + 8 >> 2] = o1098;
                            o258[o1109 + 12 >> 2] = o1139;
                            o258[o1109i: do {
                    if ((na | 0) == 0) {
                        W = c[10720 >> 2] | 0;
                        if ((W | 0) == 0 | ga >>> 0 < W >>> 0) {
                            c[10720 >> 2] = ga
                        }
                        c[11152 >> 2] = ga;
                        c[11156 >> 2] = ja;
                        c[11164 >> 2] = 0;
                        c[10740 >> 2] = c[2794];
                        c[10736 >> 2] = -1;
                        W = 0;
                        do {
                            aa = W << 1;
                            ma = 10744 + (aa << 2) | 0;
                            c[10744 + (aa + 3 << 2) >> 2] = ma;
                            c[10744 + (aa + 2 << 2) >> 2] = ma;
                            W = W + 1 | 0;
                        } while ((W | 0) != 32);
                        W = ga + 8 | 0;
                        if ((W & 7 | 0) == 0) {
                            oa = 0
                        } else {
                            oa = 0 - W & 7
                        }
                        W = ja + -40 - oa | 0;
                        c[10728 >> 2] = ga + oa;
                        c[10716 >> 2] = W;
                        c[ga + (oa + 4) >> 2] = W | 1;
                        c[ga + (ja + -36) >> 2] = 40;
                        c[10732 >> 2] = c[11192 >> 2]
                    } else {
                        W = 11152 | 0;
                        while (1) {
                            pa = c[W >> 2] | 0;
                            qa = W + 4 | 0;
                            ra = c[qa >> 2] | 0;
                            if ((ga | 0) == (pa + ra | 0)) {
                                Y = 214;
                                break
                            }
                            ma = c[W + 8 >> 2] | 0;
                            if ((ma | 0) == 0) {
                                break
                            } else {
                                W = ma
                            }
                        }
                        do {
                            if ((Y | 0) == 214) {
                                if ((c[W + 12 >> 2] & 8 | 0) != 0) {
                                    break
                                }
                                ma = na;
                                if (!(ma >>> 0 >= pa >>> 0 & ma >>> 0 < ga >>> 0)) {
                                    break
                                }
                                c[qa >> 2] = ra + ja;
                                aa = (c[10716 >> 2] | 0) + ja | 0;
                                $ = na + 8 | 0;
                                if (($ & 7 | 0) == 0) {
                                    sa = 0
                                } else {
                                    sa = 0 - $ & 7
                                }
                                $ = aa - sa | 0;
                                c[10728 >> 2] = ma + sa;
                                c[10716 >> 2] = $;
                                c[ma + (sa + 4) >> 2] = $ | 1;
                                c[ma + (aa + 4) >> 2] = 40;
                                c[10732 >> 2] = c[11192 >> 2];
                                break i
                            }
                        } while (0);
                        if (ga >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                            c[10720 >> 2] = ga
                        }
                        W = ga + ja | 0;
                        aa = 11152 | 0;
                        while (1) {
                            ta = aa;
                            if ((c[ta >> 2] | 0) == (W | 0)) {
                                Y = 224;
                                break
                            }
                            ma = c[aa + 8 >> 2] | 0;
                            if ((ma | 0) == 0) {
                                break
                            } else {
                                aa = ma
                            }
                        }
                        do {
                            if ((Y | 0) == 224) {
                                if ((c[aa + 12 >> 2] & 8 | 0) != 0) {
                                    break
                                }
                                c[ta >> 2] = ga;
                                W = aa + 4 | 0;
                                c[W >> 2] = (c[W >> 2] | 0) + ja;
                                W = ga + 8 | 0;
                                if ((W & 7 | 0) == 0) {
                                    ua = 0
                                } else {
                                    ua = 0 - W & 7
                                }
                                W = ga + (ja + 8) | 0;
                                if ((W & 7 | 0) == 0) {
                                    va = 0
                                } else {
                                    va = 0 - W & 7
                                }
                                W = ga + (va + ja) | 0;
                                ma = W;
                                $ = ua + q | 0;
                                da = ga + $ | 0;
                                ba = da;
                                M = W - (ga + ua) - q | 0;
                                c[ga + (ua + 4) >> 2] = q | 3;
                                j: do {
                                    if ((ma | 0) == (c[10728 >> 2] | 0)) {
                                        X = (c[10716 >> 2] | 0) + M | 0;
                                        c[10716 >> 2] = X;
                                        c[10728 >> 2] = ba;
                                        c[ga + ($ + 4) >> 2] = X | 1
                                    } else {
                                        if ((ma | 0) == (c[10724 >> 2] | 0)) {
                                            X = (c[10712 >> 2] | 0) + M | 0;
                                            c[10712 >> 2] = X;
                                            c[10724 >> 2] = ba;
                                            c[ga + ($ + 4) >> 2] = X | 1;
                                            c[ga + (X + $) >> 2] = X;
                                            break
                                        }
                                        X = ja + 4 | 0;
                                        ca = c[ga + (X + va) >> 2] | 0;
                                        if ((ca & 3 | 0) == 1) {
                                            ea = ca & -8;
                                            _ = ca >>> 3;
                                            k: do {
                                                if (ca >>> 0 < 256) {
                                                    Z = c[ga + ((va | 8) + ja) >> 2] | 0;
                                                    V = c[ga + (ja + 12 + va) >> 2] | 0;
                                                    L = 10744 + (_ << 1 << 2) | 0;
                                                    do {
                                                        if ((Z | 0) != (L | 0)) {
                                                            if (Z >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            }
                                                            if ((c[Z + 12 >> 2] | 0) == (ma | 0)) {
                                                                break
                                                            }
                                                            fa()
                                                        }
                                                    } while (0);
                                                    if ((V | 0) == (Z | 0)) {
                                                        c[2676] = c[2676] & ~(1 << _);
                                                        break
                                                    }
                                                    do {
                                                        if ((V | 0) == (L | 0)) {
                                                            wa = V + 8 | 0
                                                        } else {
                                                            if (V >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            }
                                                            S = V + 8 | 0;
                                                            if ((c[S >> 2] | 0) == (ma | 0)) {
                                                                wa = S;
                                                                break
                                                            }
                                                            fa()
                                                        }
                                                    } while (0);
                                                    c[Z + 12 >> 2] = V;
                                                    c[wa >> 2] = Z
                                                } else {
                                                    L = W;
                                                    S = c[ga + ((va | 24) + ja) >> 2] | 0;
                                                    T = c[ga + (ja + 12 + va) >> 2] | 0;
                                                    do {
                                                        if ((T | 0) == (L | 0)) {
                                                            h = va | 16;
                                                            U = ga + (X + h) | 0;
                                                            P = c[U >> 2] | 0;
                                                            if ((P | 0) == 0) {
                                                                Q = ga + (h + ja) | 0;
                                                                h = c[Q >> 2] | 0;
                                                                if ((h | 0) == 0) {
                                                                    xa = 0;
                                                                    break
                                                                } else {
                                                                    ya = h;
                                                                    za = Q
                                                                }
                                                            } else {
                                                                ya = P;
                                                                za = U
                                                            }
                                                            while (1) {
                                                                U = ya + 20 | 0;
                                                                P = c[U >> 2] | 0;
                                                                if ((P | 0) != 0) {
                                                                    za = U;
                                                                    ya = P;
                                                                    continue
                                                                }
                                                                P = ya + 16 | 0;
                                                                U = c[P >> 2] | 0;
                                                                if ((U | 0) == 0) {
                                                                    break
                                                                } else {
                                                                    ya = U;
                                                                    za = P
                                                                }
                                                            }
                                                            if (za >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            } else {
                                                                c[za >> 2] = 0;
                                                                xa = ya;
                                                                break
                                                            }
                                                        } else {
                                                            P = c[ga + ((va | 8) + ja) >> 2] | 0;
                                                            if (P >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            }
                                                            U = P + 12 | 0;
                                                            if ((c[U >> 2] | 0) != (L | 0)) {
                                                                fa()
                                                            }
                                                            Q = T + 8 | 0;
                                                            if ((c[Q >> 2] | 0) == (L | 0)) {
                                                                c[U >> 2] = T;
                                                                c[Q >> 2] = P;
                                                                xa = T;
                                                                break
                                                            } else {
                                                                fa()
                                                            }
                                                        }
                                                    } while (0);
                                                    if ((S | 0) == 0) {
                                                        break
                                                    }
                                                    T = c[ga + (ja + 28 + va) >> 2] | 0;
                                                    Z = 11008 + (T << 2) | 0;
                                                    do {
                                                        if ((L | 0) == (c[Z >> 2] | 0)) {
                                                            c[Z >> 2] = xa;
                                                            if ((xa | 0) != 0) {
                                                                break
                                                            }
                                                            c[10708 >> 2] = c[10708 >> 2] & ~(1 << T);
                                                            break k
                                                        } else {
                                                            if (S >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            }
                                                            V = S + 16 | 0;
                                                            if ((c[V >> 2] | 0) == (L | 0)) {
                                                                c[V >> 2] = xa
                                                            } else {
                                                                c[S + 20 >> 2] = xa
                                                            } if ((xa | 0) == 0) {
                                                                break k
                                                            }
                                                        }
                                                    } while (0);
                                                    if (xa >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                        fa()
                                                    }
                                                    c[xa + 24 >> 2] = S;
                                                    L = va | 16;
                                                    T = c[ga + (L + ja) >> 2] | 0;
                                                    do {
                                                        if ((T | 0) != 0) {
                                                            if (T >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            } else {
                                                                c[xa + 16 >> 2] = T;
                                                                c[T + 24 >> 2] = xa;
                                                                break
                                                            }
                                                        }
                                                    } while (0);
                                                    T = c[ga + (X + L) >> 2] | 0;
                                                    if ((T | 0) == 0) {
                                                        break
                                                    }
                                                    if (T >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                        fa()
                                                    } else {
                                                        c[xa + 20 >> 2] = T;
                                                        c[T + 24 >> 2] = xa;
                                                        break
                                                    }
                                                }
                                            } while (0);
                                            Aa = ga + ((ea | va) + ja) | 0;
                                            Ba = ea + M | 0
                                        } else {
                                            Aa = ma;
                                            Ba = M
                                        }
                                        X = Aa + 4 | 0;
                                        c[X >> 2] = c[X >> 2] & -2;
                                        c[ga + ($ + 4) >> 2] = Ba | 1;
                                        c[ga + (Ba + $) >> 2] = Ba;
                                        X = Ba >>> 3;
                                        if (Ba >>> 0 < 256) {
                                            _ = X << 1;
                                            ca = 10744 + (_ << 2) | 0;
                                            T = c[2676] | 0;
                                            S = 1 << X;
                                            do {
                                                if ((T & S | 0) == 0) {
                                                    c[2676] = T | S;
                                                    Ca = 10744 + (_ + 2 << 2) | 0;
                                                    Da = ca
                                                } else {
                                                    X = 10744 + (_ + 2 << 2) | 0;
                                                    Z = c[X >> 2] | 0;
                                                    if (!(Z >>> 0 < (c[10720 >> 2] | 0) >>> 0)) {
                                                        Ca = X;
                                                        Da = Z;
                                                        break
                                                    }
                                                    fa()
                                                }
                                            } while (0);
                                            c[Ca >> 2] = ba;
                                            c[Da + 12 >> 2] = ba;
                                            c[ga + ($ + 8) >> 2] = Da;
                                            c[ga + ($ + 12) >> 2] = ca;
                                            break
                                        }
                                        _ = da;
                                        S = Ba >>> 8;
                                        do {
                                            if ((S | 0) == 0) {
                                                Ea = 0
                                            } else {
                                                if (Ba >>> 0 > 16777215) {
                                                    Ea = 31;
                                                    break
                                                }
                                                T = (S + 1048320 | 0) >>> 16 & 8;
                                                ea = S << T;
                                                Z = (ea + 520192 | 0) >>> 16 & 4;
                                                X = ea << Z;
                                                ea = (X + 245760 | 0) >>> 16 & 2;
                                                V = 14 - (Z | T | ea) + (X << ea >>> 15) | 0;
                                                Ea = Ba >>> (V + 7 | 0) & 1 | V << 1
                                            }
                                        } while (0);
                                        S = 11008 + (Ea << 2) | 0;
                                        c[ga + ($ + 28) >> 2] = Ea;
                                        c[ga + ($ + 20) >> 2] = 0;
                                        c[ga + ($ + 16) >> 2] = 0;
                                        ca = c[10708 >> 2] | 0;
                                        V = 1 << Ea;
                                        if ((ca & V | 0) == 0) {
                                            c[10708 >> 2] = ca | V;
                                            c[S >> 2] = _;
                                            c[ga + ($ + 24) >> 2] = S;
                                            c[ga + ($ + 12) >> 2] = _;
                                            c[ga + ($ + 8) >> 2] = _;
                                            break
                                        }
                                        V = c[S >> 2] | 0;
                                        if ((Ea | 0) == 31) {
                                            Fa = 0
                                        } else {
                                            Fa = 25 - (Ea >>> 1) | 0
                                        }
                                        l: do {
                                            if ((c[V + 4 >> 2] & -8 | 0) == (Ba | 0)) {
                                                Ga = V
                                            } else {
                                                S = Ba << Fa;
                                                ca = V;
                                                while (1) {
                                                    Ha = ca + (S >>> 31 << 2) + 16 | 0;
                                                    ea = c[Ha >> 2] | 0;
                                                    if ((ea | 0) == 0) {
                                                        break
                                                    }
                                                    if ((c[ea + 4 >> 2] & -8 | 0) == (Ba | 0)) {
                                                        Ga = ea;
                                                        break l
                                                    } else {
                                                        S = S << 1;
                                                        ca = ea
                                                    }
                                                }
                                                if (Ha >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                    fa()
                                                } else {
                                                    c[Ha >> 2] = _;
                                                    c[ga + ($ + 24) >> 2] = ca;
                                                    c[ga + ($ + 12) >> 2] = _;
                                                    c[ga + ($ + 8) >> 2] = _;
                                                    break j
                                                }
                                            }
                                        } while (0);
                                        V = Ga + 8 | 0;
                                        S = c[V >> 2] | 0;
                                        L = c[10720 >> 2] | 0;
                                        if (Ga >>> 0 < L >>> 0) {
                                            fa()
                                        }
                                        if (S >>> 0 < L >>> 0) {
                                            fa()
                                        } else {
                                            c[S + 12 >> 2] = _;
                                            c[V >> 2] = _;
                                            c[ga + ($ + 8) >> 2] = S;
                                            c[ga + ($ + 12) >> 2] = Ga;
                                            c[ga + ($ + 24) >> 2] = 0;
                                            break
                                        }
                                    }
                                } while (0);
                                p = ga + (ua | 8) | 0;
                                i = b;
                                return p | 0
                            }
                        } while (0);
                        aa = na;
                        $ = 11152 | 0;
                        while (1) {
                            Ia = c[$ >> 2] | 0;
                            if (!(Ia >>> 0 > aa >>> 0)) {
                                Ja = c[$ + 4 >> 2] | 0;
                                Ka = Ia + Ja | 0;
                                if (Ka >>> 0 > aa >>> 0) {
                                    break
                                }
                            }
                            $ = c[$ + 8 >> 2] | 0
                        }
                        $ = Ia + (Ja + -39) | 0;
                        if (($ & 7 | 0) == 0) {
                            La = 0
                        } else {
                            La = 0 - $ & 7
                        }
                        $ = Ia + (Ja + -47 + La) | 0;
                        da = $ >>> 0 < (na + 16 | 0) >>> 0 ? aa : $;
                        $ = da + 8 | 0;
                        ba = $;
                        M = ga + 8 | 0;
                        if ((M & 7 | 0) == 0) {
                            Ma = 0
                        } else {
                            Ma = 0 - M & 7
                        }
                        M = ja + -40 - Ma | 0;
                        c[10728 >> 2] = ga + Ma;
                        c[10716 >> 2] = M;
                        c[ga + (Ma + 4) >> 2] = M | 1;
                        c[ga + (ja + -36) >> 2] = 40;
                        c[10732 >> 2] = c[11192 >> 2];
                        c[da + 4 >> 2] = 27;
                        c[$ + 0 >> 2] = c[11152 >> 2];
                        c[$ + 4 >> 2] = c[11156 >> 2];
                        c[$ + 8 >> 2] = c[11160 >> 2];
                        c[$ + 12 >> 2] = c[11164 >> 2];
                        c[11152 >> 2] = ga;
                        c[11156 >> 2] = ja;
                        c[11164 >> 2] = 0;
                        c[11160 >> 2] = ba;
                        ba = da + 28 | 0;
                        c[ba >> 2] = 7;
                        if ((da + 32 | 0) >>> 0 < Ka >>> 0) {
                            $ = ba;
                            while (1) {
                                ba = $ + 4 | 0;
                                c[ba >> 2] = 7;
                                if (($ + 8 | 0) >>> 0 < Ka >>> 0) {
                                    $ = ba
                                } else {
                                    break
                                }
                            }
                        }
                        if ((da | 0) == (aa | 0)) {
                            break
                        }
                        $ = da - na | 0;
                        ba = aa + ($ + 4) | 0;
                        c[ba >> 2] = c[ba >> 2] & -2;
                        c[na + 4 >> 2] = $ | 1;
                        c[aa + $ >> 2] = $;
                        ba = $ >>> 3;
                        if ($ >>> 0 < 256) {
                            M = ba << 1;
                            ma = 10744 + (M << 2) | 0;
                            W = c[2676] | 0;
                            m = 1 << ba;
                            do {
                                if ((W & m | 0) == 0) {
                                    c[2676] = W | m;
                                    Na = 10744 + (M + 2 << 2) | 0;
                                    Oa = ma
                                } else {
                                    ba = 10744 + (M + 2 << 2) | 0;
                                    S = c[ba >> 2] | 0;
                                    if (!(S >>> 0 < (c[10720 >> 2] | 0) >>> 0)) {
                                        Na = ba;
                                        Oa = S;
                                        break
                                    }
                                    fa()
                                }
                            } while (0);
                            c[Na >> 2] = na;
                            c[Oa + 12 >> 2] = na;
                            c[na + 8 >> 2] = Oa;
                            c[na + 12 >> 2] = ma;
                            break
                        }
                        M = na;
                        m = $ >>> 8;
                        do {
                            if ((m | 0) == 0) {
                                Pa = 0
                            } else {
                                if ($ >>> 0 > 16777215) {
                                    Pa = 31;
                                    break
                                }
                                W = (m + 1048320 | 0) >>> 16 & 8;
                                aa = m << W;
                                da = (aa + 520192 | 0) >>> 16 & 4;
                                S = aa << da;
                                aa = (S + 245760 | 0) >>> 16 & 2;
                                ba = 14 - (da | W | aa) + (S << aa >>> 15) | 0;
                                Pa = $ >>> (ba + 7 | 0) & 1 | ba << 1
                            }
                        } while (0);
                        m = 11008 + (Pa << 2) | 0;
                        c[na + 28 >> 2] = Pa;
                        c[na + 20 >> 2] = 0;
                        c[na + 16 >> 2] = 0;
                        ma = c[10708 >> 2] | 0;
                        ba = 1 << Pa;
                        if ((ma & ba | 0) == 0) {
                            c[10708 >> 2] = ma | ba;
                            c[m >> 2] = M;
                            c[na + 24 >> 2] = m;
                            c[na + 12 >> 2] = na;
                            c[na + 8 >> 2] = na;
                            break
                        }
                        ba = c[m >> 2] | 0;
                        if ((Pa | 0) == 31) {
                            Qa = 0
                        } else {
                            Qa = 25 - (Pa >>> 1) | 0
                        }
                        m: do {
                            if ((c[ba + 4 >> 2] & -8 | 0) == ($ | 0)) {
                                Ra = ba
                            } else {
                                m = $ << Qa;
                                ma = ba;
                                while (1) {
                                    Sa = ma + (m >>> 31 << 2) + 16 | 0;
                                    aa = c[Sa >> 2] | 0;
                                    if ((aa | 0) == 0) {
                                        break
                                    }
                                    if ((c[aa + 4 >> 2] & -8 | 0) == ($ | 0)) {
                                        Ra = aa;
                                        break m
                                    } else {
                                        m = m << 1;
                                        ma = aa
                                    }
                                }
                                if (Sa >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                    fa()
                                } else {
                                    c[Sa >> 2] = M;
                                    c[na + 24 >> 2] = ma;
                                    c[na + 12 >> 2] = na;
                                    c[na + 8 >> 2] = na;
                                    break i
                                }
                            }
                        } while (0);
                        $ = Ra + 8 | 0;
                        ba = c[$ >> 2] | 0;
                        m = c[10720 >> 2] | 0;
                        if (Ra >>> 0 < m >>> 0) {
                            fa()
                        }
                        if (ba >>> 0 < m >>> 0) {
                            fa()
                        } else {
                            c[ba + 12 >> 2] = M;
                            c[$ >> 2] = M;
                            c[na + 8 >> 2] = ba;
                            c[na + 12 >> 2] = Ra;
                            c[nao82: do {
                    if ((na | 0) == 0) {
                        W = c[10720 >> 2] | 0;
                        if ((W | 0) == 0 | ga >>> 0 < W >>> 0) {
                            c[10720 >> 2] = ga
                        }
                        c[11152 >> 2] = ga;
                        c[11156 >> 2] = ja;
                        c[11164 >> 2] = 0;
                        c[10740 >> 2] = c[2794];
                        c[10736 >> 2] = -1;
                        W = 0;
                        do {
                            aa = W << 1;
                            ma = 10744 + (aa << 2) | 0;
                            c[10744 + (aa + 3 << 2) >> 2] = ma;
                            c[10744 + (aa + 2 << 2) >> 2] = ma;
                            W = W + 1 | 0;
                        } while ((W | 0) != 32);
                        W = ga + 8 | 0;
                        if ((W & 7 | 0) == 0) {
                            oa = 0
                        } else {
                            oa = 0 - W & 7
                        }
                        W = ja + -40 - oa | 0;
                        c[10728 >> 2] = ga + oa;
                        c[10716 >> 2] = W;
                        c[ga + (oa + 4) >> 2] = W | 1;
                        c[ga + (ja + -36) >> 2] = 40;
                        c[10732 >> 2] = c[11192 >> 2]
                    } else {
                        W = 11152 | 0;
                        while (1) {
                            pa = c[W >> 2] | 0;
                            qa = W + 4 | 0;
                            ra = c[qa >> 2] | 0;
                            if ((ga | 0) == (pa + ra | 0)) {
                                Y = 214;
                                break
                            }
                            ma = c[W + 8 >> 2] | 0;
                            if ((ma | 0) == 0) {
                                break
                            } else {
                                W = ma
                            }
                        }
                        do {
                            if ((Y | 0) == 214) {
                                if ((c[W + 12 >> 2] & 8 | 0) != 0) {
                                    break
                                }
                                ma = na;
                                if (!(ma >>> 0 >= pa >>> 0 & ma >>> 0 < ga >>> 0)) {
                                    break
                                }
                                c[qa >> 2] = ra + ja;
                                aa = (c[10716 >> 2] | 0) + ja | 0;
                                $ = na + 8 | 0;
                                if (($ & 7 | 0) == 0) {
                                    sa = 0
                                } else {
                                    sa = 0 - $ & 7
                                }
                                $ = aa - sa | 0;
                                c[10728 >> 2] = ma + sa;
                                c[10716 >> 2] = $;
                                c[ma + (sa + 4) >> 2] = $ | 1;
                                c[ma + (aa + 4) >> 2] = 40;
                                c[10732 >> 2] = c[11192 >> 2];
                                break i
                            }
                        } while (0);
                        if (ga >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                            c[10720 >> 2] = ga
                        }
                        W = ga + ja | 0;
                        aa = 11152 | 0;
                        while (1) {
                            ta = aa;
                            if ((c[ta >> 2] | 0) == (W | 0)) {
                                Y = 224;
                                break
                            }
                            ma = c[aa + 8 >> 2] | 0;
                            if ((ma | 0) == 0) {
                                break
                            } else {
                                aa = ma
                            }
                        }
                        do {
                            if ((Y | 0) == 224) {
                                if ((c[aa + 12 >> 2] & 8 | 0) != 0) {
                                    break
                                }
                                c[ta >> 2] = ga;
                                W = aa + 4 | 0;
                                c[W >> 2] = (c[W >> 2] | 0) + ja;
                                W = ga + 8 | 0;
                                if ((W & 7 | 0) == 0) {
                                    ua = 0
                                } else {
                                    ua = 0 - W & 7
                                }
                                W = ga + (ja + 8) | 0;
                                if ((W & 7 | 0) == 0) {
                                    va = 0
                                } else {
                                    va = 0 - W & 7
                                }
                                W = ga + (va + ja) | 0;
                                ma = W;
                                $ = ua + q | 0;
                                da = ga + $ | 0;
                                ba = da;
                                M = W - (ga + ua) - q | 0;
                                c[ga + (ua + 4) >> 2] = q | 3;
                                j: do {
                                    if ((ma | 0) == (c[10728 >> 2] | 0)) {
                                        X = (c[10716 >> 2] | 0) + M | 0;
                                        c[10716 >> 2] = X;
                                        c[10728 >> 2] = ba;
                                        c[ga + ($ + 4) >> 2] = X | 1
                                    } else {
                                        if ((ma | 0) == (c[10724 >> 2] | 0)) {
                                            X = (c[10712 >> 2] | 0) + M | 0;
                                            c[10712 >> 2] = X;
                                            c[10724 >> 2] = ba;
                                            c[ga + ($ + 4) >> 2] = X | 1;
                                            c[ga + (X + $) >> 2] = X;
                                            break
                                        }
                                        X = ja + 4 | 0;
                                        ca = c[ga + (X + va) >> 2] | 0;
                                        if ((ca & 3 | 0) == 1) {
                                            ea = ca & -8;
                                            _ = ca >>> 3;
                                            k: do {
                                                if (ca >>> 0 < 256) {
                                                    Z = c[ga + ((va | 8) + ja) >> 2] | 0;
                                                    V = c[ga + (ja + 12 + va) >> 2] | 0;
                                                    L = 10744 + (_ << 1 << 2) | 0;
                                                    do {
                                                        if ((Z | 0) != (L | 0)) {
                                                            if (Z >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            }
                                                            if ((c[Z + 12 >> 2] | 0) == (ma | 0)) {
                                                                break
                                                            }
                                                            fa()
                                                        }
                                                    } while (0);
                                                    if ((V | 0) == (Z | 0)) {
                                                        c[2676] = c[2676] & ~(1 << _);
                                                        break
                                                    }
                                                    do {
                                                        if ((V | 0) == (L | 0)) {
                                                            wa = V + 8 | 0
                                                        } else {
                                                            if (V >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            }
                                                            S = V + 8 | 0;
                                                            if ((c[S >> 2] | 0) == (ma | 0)) {
                                                                wa = S;
                                                                break
                                                            }
                                                            fa()
                                                        }
                                                    } while (0);
                                                    c[Z + 12 >> 2] = V;
                                                    c[wa >> 2] = Z
                                                } else {
                                                    L = W;
                                                    S = c[ga + ((va | 24) + ja) >> 2] | 0;
                                                    T = c[ga + (ja + 12 + va) >> 2] | 0;
                                                    do {
                                                        if ((T | 0) == (L | 0)) {
                                                            h = va | 16;
                                                            U = ga + (X + h) | 0;
                                                            P = c[U >> 2] | 0;
                                                            if ((P | 0) == 0) {
                                                                Q = ga + (h + ja) | 0;
                                                                h = c[Q >> 2] | 0;
                                                                if ((h | 0) == 0) {
                                                                    xa = 0;
                                                                    break
                                                                } else {
                                                                    ya = h;
                                                                    za = Q
                                                                }
                                                            } else {
                                                                ya = P;
                                                                za = U
                                                            }
                                                            while (1) {
                                                                U = ya + 20 | 0;
                                                                P = c[U >> 2] | 0;
                                                                if ((P | 0) != 0) {
                                                                    za = U;
                                                                    ya = P;
                                                                    continue
                                                                }
                                                                P = ya + 16 | 0;
                                                                U = c[P >> 2] | 0;
                                                                if ((U | 0) == 0) {
                                                                    break
                                                                } else {
                                                                    ya = U;
                                                                    za = P
                                                                }
                                                            }
                                                            if (za >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            } else {
                                                                c[za >> 2] = 0;
                                                                xa = ya;
                                                                break
                                                            }
                                                        } else {
                                                            P = c[ga + ((va | 8) + ja) >> 2] | 0;
                                                            if (P >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            }
                                                            U = P + 12 | 0;
                                                            if ((c[U >> 2] | 0) != (L | 0)) {
                                                                fa()
                                                            }
                                                            Q = T + 8 | 0;
                                                            if ((c[Q >> 2] | 0) == (L | 0)) {
                                                                c[U >> 2] = T;
                                                                c[Q >> 2] = P;
                                                                xa = T;
                                                                break
                                                            } else {
                                                                fa()
                                                            }
                                                        }
                                                    } while (0);
                                                    if ((S | 0) == 0) {
                                                        break
                                                    }
                                                    T = c[ga + (ja + 28 + va) >> 2] | 0;
                                                    Z = 11008 + (T << 2) | 0;
                                                    do {
                                                        if ((L | 0) == (c[Z >> 2] | 0)) {
                                                            c[Z >> 2] = xa;
                                                            if ((xa | 0) != 0) {
                                                                break
                                                            }
                                                            c[10708 >> 2] = c[10708 >> 2] & ~(1 << T);
                                                            break k
                                                        } else {
                                                            if (S >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            }
                                                            V = S + 16 | 0;
                                                            if ((c[V >> 2] | 0) == (L | 0)) {
                                                                c[V >> 2] = xa
                                                            } else {
                                                                c[S + 20 >> 2] = xa
                                                            } if ((xa | 0) == 0) {
                                                                break k
                                                            }
                                                        }
                                                    } while (0);
                                                    if (xa >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                        fa()
                                                    }
                                                    c[xa + 24 >> 2] = S;
                                                    L = va | 16;
                                                    T = c[ga + (L + ja) >> 2] | 0;
                                                    do {
                                                        if ((T | 0) != 0) {
                                                            if (T >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                                fa()
                                                            } else {
                                                                c[xa + 16 >> 2] = T;
                                                                c[T + 24 >> 2] = xa;
                                                                break
                                                            }
                                                        }
                                                    } while (0);
                                                    T = c[ga + (X + L) >> 2] | 0;
                                                    if ((T | 0) == 0) {
                                                        break
                                                    }
                                                    if (T >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                        fa()
                                                    } else {
                                                        c[xa + 20 >> 2] = T;
                                                        c[T + 24 >> 2] = xa;
                                                        break
                                                    }
                                                }
                                            } while (0);
                                            Aa = ga + ((ea | va) + ja) | 0;
                                            Ba = ea + M | 0
                                        } else {
                                            Aa = ma;
                                            Ba = M
                                        }
                                        X = Aa + 4 | 0;
                                        c[X >> 2] = c[X >> 2] & -2;
                                        c[ga + ($ + 4) >> 2] = Ba | 1;
                                        c[ga + (Ba + $) >> 2] = Ba;
                                        X = Ba >>> 3;
                                        if (Ba >>> 0 < 256) {
                                            _ = X << 1;
                                            ca = 10744 + (_ << 2) | 0;
                                            T = c[2676] | 0;
                                            S = 1 << X;
                                            do {
                                                if ((T & S | 0) == 0) {
                                                    c[2676] = T | S;
                                                    Ca = 10744 + (_ + 2 << 2) | 0;
                                                    Da = ca
                                                } else {
                                                    X = 10744 + (_ + 2 << 2) | 0;
                                                    Z = c[X >> 2] | 0;
                                                    if (!(Z >>> 0 < (c[10720 >> 2] | 0) >>> 0)) {
                                                        Ca = X;
                                                        Da = Z;
                                                        break
                                                    }
                                                    fa()
                                                }
                                            } while (0);
                                            c[Ca >> 2] = ba;
                                            c[Da + 12 >> 2] = ba;
                                            c[ga + ($ + 8) >> 2] = Da;
                                            c[ga + ($ + 12) >> 2] = ca;
                                            break
                                        }
                                        _ = da;
                                        S = Ba >>> 8;
                                        do {
                                            if ((S | 0) == 0) {
                                                Ea = 0
                                            } else {
                                                if (Ba >>> 0 > 16777215) {
                                                    Ea = 31;
                                                    break
                                                }
                                                T = (S + 1048320 | 0) >>> 16 & 8;
                                                ea = S << T;
                                                Z = (ea + 520192 | 0) >>> 16 & 4;
                                                X = ea << Z;
                                                ea = (X + 245760 | 0) >>> 16 & 2;
                                                V = 14 - (Z | T | ea) + (X << ea >>> 15) | 0;
                                                Ea = Ba >>> (V + 7 | 0) & 1 | V << 1
                                            }
                                        } while (0);
                                        S = 11008 + (Ea << 2) | 0;
                                        c[ga + ($ + 28) >> 2] = Ea;
                                        c[ga + ($ + 20) >> 2] = 0;
                                        c[ga + ($ + 16) >> 2] = 0;
                                        ca = c[10708 >> 2] | 0;
                                        V = 1 << Ea;
                                        if ((ca & V | 0) == 0) {
                                            c[10708 >> 2] = ca | V;
                                            c[S >> 2] = _;
                                            c[ga + ($ + 24) >> 2] = S;
                                            c[ga + ($ + 12) >> 2] = _;
                                            c[ga + ($ + 8) >> 2] = _;
                                            break
                                        }
                                        V = c[S >> 2] | 0;
                                        if ((Ea | 0) == 31) {
                                            Fa = 0
                                        } else {
                                            Fa = 25 - (Ea >>> 1) | 0
                                        }
                                        l: do {
                                            if ((c[V + 4 >> 2] & -8 | 0) == (Ba | 0)) {
                                                Ga = V
                                            } else {
                                                S = Ba << Fa;
                                                ca = V;
                                                while (1) {
                                                    Ha = ca + (S >>> 31 << 2) + 16 | 0;
                                                    ea = c[Ha >> 2] | 0;
                                                    if ((ea | 0) == 0) {
                                                        break
                                                    }
                                                    if ((c[ea + 4 >> 2] & -8 | 0) == (Ba | 0)) {
                                                        Ga = ea;
                                                        break l
                                                    } else {
                                                        S = S << 1;
                                                        ca = ea
                                                    }
                                                }
                                                if (Ha >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                                    fa()
                                                } else {
                                                    c[Ha >> 2] = _;
                                                    c[ga + ($ + 24) >> 2] = ca;
                                                    c[ga + ($ + 12) >> 2] = _;
                                                    c[ga + ($ + 8) >> 2] = _;
                                                    break j
                                                }
                                            }
                                        } while (0);
                                        V = Ga + 8 | 0;
                                        S = c[V >> 2] | 0;
                                        L = c[10720 >> 2] | 0;
                                        if (Ga >>> 0 < L >>> 0) {
                                            fa()
                                        }
                                        if (S >>> 0 < L >>> 0) {
                                            fa()
                                        } else {
                                            c[S + 12 >> 2] = _;
                                            c[V >> 2] = _;
                                            c[ga + ($ + 8) >> 2] = S;
                                            c[ga + ($ + 12) >> 2] = Ga;
                                            c[ga + ($ + 24) >> 2] = 0;
                                            break
                                        }
                                    }
                                } while (0);
                                p = ga + (ua | 8) | 0;
                                i = b;
                                return p | 0
                            }
                        } while (0);
                        aa = na;
                        $ = 11152 | 0;
                        while (1) {
                            Ia = c[$ >> 2] | 0;
                            if (!(Ia >>> 0 > aa >>> 0)) {
                                Ja = c[$ + 4 >> 2] | 0;
                                Ka = Ia + Ja | 0;
                                if (Ka >>> 0 > aa >>> 0) {
                                    break
                                }
                            }
                            $ = c[$ + 8 >> 2] | 0
                        }
                        $ = Ia + (Ja + -39) | 0;
                        if (($ & 7 | 0) == 0) {
                            La = 0
                        } else {
                            La = 0 - $ & 7
                        }
                        $ = Ia + (Ja + -47 + La) | 0;
                        da = $ >>> 0 < (na + 16 | 0) >>> 0 ? aa : $;
                        $ = da + 8 | 0;
                        ba = $;
                        M = ga + 8 | 0;
                        if ((M & 7 | 0) == 0) {
                            Ma = 0
                        } else {
                            Ma = 0 - M & 7
                        }
                        M = ja + -40 - Ma | 0;
                        c[10728 >> 2] = ga + Ma;
                        c[10716 >> 2] = M;
                        c[ga + (Ma + 4) >> 2] = M | 1;
                        c[ga + (ja + -36) >> 2] = 40;
                        c[10732 >> 2] = c[11192 >> 2];
                        c[da + 4 >> 2] = 27;
                        c[$ + 0 >> 2] = c[11152 >> 2];
                        c[$ + 4 >> 2] = c[11156 >> 2];
                        c[$ + 8 >> 2] = c[11160 >> 2];
                        c[$ + 12 >> 2] = c[11164 >> 2];
                        c[11152 >> 2] = ga;
                        c[11156 >> 2] = ja;
                        c[11164 >> 2] = 0;
                        c[11160 >> 2] = ba;
                        ba = da + 28 | 0;
                        c[ba >> 2] = 7;
                        if ((da + 32 | 0) >>> 0 < Ka >>> 0) {
                            $ = ba;
                            while (1) {
                                ba = $ + 4 | 0;
                                c[ba >> 2] = 7;
                                if (($ + 8 | 0) >>> 0 < Ka >>> 0) {
                                    $ = ba
                                } else {
                                    break
                                }
                            }
                        }
                        if ((da | 0) == (aa | 0)) {
                            break
                        }
                        $ = da - na | 0;
                        ba = aa + ($ + 4) | 0;
                        c[ba >> 2] = c[ba >> 2] & -2;
                        c[na + 4 >> 2] = $ | 1;
                        c[aa + $ >> 2] = $;
                        ba = $ >>> 3;
                        if ($ >>> 0 < 256) {
                            M = ba << 1;
                            ma = 10744 + (M << 2) | 0;
                            W = c[2676] | 0;
                            m = 1 << ba;
                            do {
                                if ((W & m | 0) == 0) {
                                    c[2676] = W | m;
                                    Na = 10744 + (M + 2 << 2) | 0;
                                    Oa = ma
                                } else {
                                    ba = 10744 + (M + 2 << 2) | 0;
                                    S = c[ba >> 2] | 0;
                                    if (!(S >>> 0 < (c[10720 >> 2] | 0) >>> 0)) {
                                        Na = ba;
                                        Oa = S;
                                        break
                                    }
                                    fa()
                                }
                            } while (0);
                            c[Na >> 2] = na;
                            c[Oa + 12 >> 2] = na;
                            c[na + 8 >> 2] = Oa;
                            c[na + 12 >> 2] = ma;
                            break
                        }
                        M = na;
                        m = $ >>> 8;
                        do {
                            if ((m | 0) == 0) {
                                Pa = 0
                            } else {
                                if ($ >>> 0 > 16777215) {
                                    Pa = 31;
                                    break
                                }
                                W = (m + 1048320 | 0) >>> 16 & 8;
                                aa = m << W;
                                da = (aa + 520192 | 0) >>> 16 & 4;
                                S = aa << da;
                                aa = (S + 245760 | 0) >>> 16 & 2;
                                ba = 14 - (da | W | aa) + (S << aa >>> 15) | 0;
                                Pa = $ >>> (ba + 7 | 0) & 1 | ba << 1
                            }
                        } while (0);
                        m = 11008 + (Pa << 2) | 0;
                        c[na + 28 >> 2] = Pa;
                        c[na + 20 >> 2] = 0;
                        c[na + 16 >> 2] = 0;
                        ma = c[10708 >> 2] | 0;
                        ba = 1 << Pa;
                        if ((ma & ba | 0) == 0) {
                            c[10708 >> 2] = ma | ba;
                            c[m >> 2] = M;
                            c[na + 24 >> 2] = m;
                            c[na + 12 >> 2] = na;
                            c[na + 8 >> 2] = na;
                            break
                        }
                        ba = c[m >> 2] | 0;
                        if ((Pa | 0) == 31) {
                            Qa = 0
                        } else {
                            Qa = 25 - (Pa >>> 1) | 0
                        }
                        m: do {
                            if ((c[ba + 4 >> 2] & -8 | 0) == ($ | 0)) {
                                Ra = ba
                            } else {
                                m = $ << Qa;
                                ma = ba;
                                while (1) {
                                    Sa = ma + (m >>> 31 << 2) + 16 | 0;
                                    aa = c[Sa >> 2] | 0;
                                    if ((aa | 0) == 0) {
                                        break
                                    }
                                    if ((c[aa + 4 >> 2] & -8 | 0) == ($ | 0)) {
                                        Ra = aa;
                                        break m
                                    } else {
                                        m = m << 1;
                                        ma = aa
                                    }
                                }
                                if (Sa >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                    fa()
                                } else {
                                    c[Sa >> 2] = M;
                                    c[na + 24 >> 2] = ma;
                                    c[na + 12 >> 2] = na;
                                    c[na + 8 >> 2] = na;
                                    break i
                                }
                            }
                        } while (0);
                        $ = Ra + 8 | 0;
                        ba = c[$ >> 2] | 0;
                        m = c[10720 >> 2] | 0;
                        if (Ra >>> 0 < m >>> 0) {
                            fa()
                        }
                        if (ba >>> 0 < m >>> 0) {
                            fa()
                        } else {
                            c[ba + 12 >> 2] = M;
                            c[$ >> 2] = M;
                            c[na + 8 >> 2] = ba;
                            c[na + 12 >> 2] = Ra;
                            c[na + 24 >> 2] = 0;
                            break
                        }
                    }
                } while (0);
                o1109 = o258[10716 >> 2] | 0;
                if (!(o1109 >>> 0 > o1064 >>> 0)) {
                    break
                }
                o1098 = o1109 - o1064 | 0;
                o258[10716 >> 2] = o1098;
                o1109 = o258[10728 >> 2] | 0;
                o1096 = o1109;
                o258[10728 >> 2] = o1096 + o1064;
                o258[o1096 + (o1064 + 4) >> 2] = o1098 | 1;
                o258[o1109 + 4 >> 2] = o1064 | 3;
                o602 = o1109 + 8 | 0;
                o82 = o308;
                return o602 | 0
            }
        } while (0);
        o258[(o1108() | 0) >> 2] = 12;
        o602 = 0;
        o82 = o308;
        return o602 | 0
    }

    function o1127(o247) {
        o247 = o247 | 0;
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
        o308 = o82;
        if ((o247 | 0) == 0) {
            o82 = o308;
            return
        }
        o1059 = o247 + -8 | 0;
        o189 = o1059;
        o34 = o258[10720 >> 2] | 0;
        if (o1059 >>> 0 < o34 >>> 0) {
            o1102()
        }
        o1060 = o258[o247 + -4 >> 2] | 0;
        o66 = o1060 & 3;
        if ((o66 | 0) == 1) {
            o1102()
        }
        o1061 = o1060 & -8;
        o111 = o247 + (o1061 + -8) | 0;
        o65 = o111;
        a: do {
            if ((o1060 & 1 | 0) == 0) {
                o750 = o258[o1059 >> 2] | 0;
                if ((o66 | 0) == 0) {
                    o82 = o308;
                    return
                }
                o1062 = -8 - o750 | 0;
                o1063 = o247 + o1062 | 0;
                o602 = o1063;
                o1064 = o750 + o1061 | 0;
                if (o1063 >>> 0 < o34 >>> 0) {
                    o1102()
                }
                if ((o602 | 0) == (o258[10724 >> 2] | 0)) {
                    o887 = o247 + (o1061 + -4) | 0;
                    if ((o258[o887 >> 2] & 3 | 0) != 3) {
                        o1065 = o602;
                        o227 = o1064;
                        break
                    }
                    o258[10712 >> 2] = o1064;
                    o258[o887 >> 2] = o258[o887 >> 2] & -2;
                    o258[o247 + (o1062 + 4) >> 2] = o1064 | 1;
                    o258[o111 >> 2] = o1064;
                    o82 = o308;
                    return
                }
                o887 = o750 >>> 3;
                if (o750 >>> 0 < 256) {
                    o750 = o258[o247 + (o1062 + 8) >> 2] | 0;
                    o1066 = o258[o247 + (o1062 + 12) >> 2] | 0;
                    o1067 = 10744 + (o887 << 1 << 2) | 0;
                    do {
                        if ((o750 | 0) != (o1067 | 0)) {
                            if (o750 >>> 0 < o34 >>> 0) {
                                o1102()
                            }
                            if ((o258[o750 + 12 >> 2] | 0) == (o602 | 0)) {
                                break
                            }
                            o1102()
                        }
                    } while (0);
                    if ((o1066 | 0) == (o750 | 0)) {
                        o258[2676] = o258[2676] & ~(1 << o887);
                        o1065 = o602;
                        o227 = o1064;
                        break
                    }
                    do {
                        if ((o1066 | 0) == (o1067 | 0)) {
                            o1043 = o1066 + 8 | 0
                        } else {
                            if (o1066 >>> 0 < o34 >>> 0) {
                                o1102()
                            }
                            o23 = o1066 + 8 | 0;
                            if ((o258[o23 >> 2] | 0) == (o602 | 0)) {
                                o1043 = o23;
                                break
                            }
                            o1102()
                        }
                    } while (0);
                    o258[o750 + 12 >> 2] = o1066;
                    o258[o1043 >> 2] = o750;
                    o1065 = o602;
                    o227 = o1064;
                    break
                }
                o1067 = o1063;
                o887 = o258[o247 + (o1062 + 24) >> 2] | 0;
                o23 = o258[o247 + (o1062 + 12) >> 2] | 0;
                do {
                    if ((o23 | 0) == (o1067 | 0)) {
                        o64 = o247 + (o1062 + 20) | 0;
                        o1068 = o258[o64 >> 2] | 0;
                        if ((o1068 | 0) == 0) {
                            o1069 = o247 + (o1062 + 16) | 0;
                            o1070 = o258[o1069 >> 2] | 0;
                            if ((o1070 | 0) == 0) {
                                o1071 = 0;
                                break
                            } else {
                                o1072 = o1070;
                                o1073 = o1069
                            }
                        } else {
                            o1072 = o1068;
                            o1073 = o64
                        }
                        while (1) {
                            o64 = o1072 + 20 | 0;
                            o1068 = o258[o64 >> 2] | 0;
                            if ((o1068 | 0) != 0) {
                                o1073 = o64;
                                o1072 = o1068;
                                continue
                            }
                            o1068 = o1072 + 16 | 0;
                            o64 = o258[o1068 >> 2] | 0;
                            if ((o64 | 0) == 0) {
                                break
                            } else {
                                o1072 = o64;
                                o1073 = o1068
                            }
                        }
                        if (o1073 >>> 0 < o34 >>> 0) {
                            o1102()
                        } else {
                            o258[o1073 >> 2] = 0;
                            o1071 = o1072;
                            break
                        }
                    } else {
                        o1068 = o258[o247 + (o1062 + 8) >> 2] | 0;
                        if (o1068 >>> 0 < o34 >>> 0) {
                            o1102()
                        }
                        o64 = o1068 + 12 | 0;
                        if ((o258[o64 >> 2] | 0) != (o1067 | 0)) {
                            o1102()
                        }
                        o1069 = o23 + 8 | 0;
                        if ((o258[o1069 >> 2] | 0) == (o1067 | 0)) {
                            o258[o64 >> 2] = o23;
                            o258[o1069 >> 2] = o1068;
                            o1071 = o23;
                            break
                        } else {
                            o1102()
                        }
                    }
                } while (0);
                if ((o887 | 0) == 0) {
                    o1065 = o602;
                    o227 = o1064;
                    break
                }
                o23 = o258[o247 + (o1062 + 28) >> 2] | 0;
                o1063 = 11008 + (o23 << 2) | 0;
                do {
                    if ((o1067 | 0) == (o258[o1063 >> 2] | 0)) {
                        o258[o1063 >> 2] = o1071;
                        if ((o1071 | 0) != 0) {
                            break
                        }
                        o258[10708 >> 2] = o258[10708 >> 2] & ~(1 << o23);
                        o1065 = o602;
                        o227 = o1064;
                        break o247
                    } else {
                        if (o887 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                            o1102()
                        }
                        o750 = o887 + 16 | 0;
                        if ((o258[o750 >> 2] | 0) == (o1067 | 0)) {
                            o258[o750 >> 2] = o1071
                        } else {
                            o258[o887 + 20 >> 2] = o1071
                        } if ((o1071 | 0) == 0) {
                            o1065 = o602;
                            o227 = o1064;
                            break o247
                        }
                    }
                } while (0);
                if (o1071 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                    o1102()
                }
                o258[o1071 + 24 >> 2] = o887;
                o1067 = o258[o247 + (o1062 + 16) >> 2] | 0;
                do {
                    if ((o1067 | 0) != 0) {
                        if (o1067 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                            o1102()
                        } else {
                            o258[o1071 + 16 >> 2] = o1067;
                            o258[o1067 + 24 >> 2] = o1071;
                            break
                        }
                    }
                } while (0);
                o1067 = o258[o247 + (o1062 + 20) >> 2] | 0;
                if ((o1067 | 0) == 0) {
                    o1065 = o602;
                    o227 = o1064;
                    break
                }
                if (o1067 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                    o1102()
                } else {
                    o258[o1071 + 20 >> 2] = o1067;
                    o258[o1067 + 24 >> 2] = o1071;
                    o1065 = o602;
                    o227 = o1064;
                    break
                }
            } else {
                o1065 = o189;
                o227 = o1061a: do {
            if ((g & 1 | 0) == 0) {
                m = c[d >> 2] | 0;
                if ((h | 0) == 0) {
                    i = b;
                    return
                }
                n = -8 - m | 0;
                o = a + n | 0;
                p = o;
                q = m + j | 0;
                if (o >>> 0 < f >>> 0) {
                    fa()
                }
                if ((p | 0) == (c[10724 >> 2] | 0)) {
                    r = a + (j + -4) | 0;
                    if ((c[r >> 2] & 3 | 0) != 3) {
                        s = p;
                        t = q;
                        break
                    }
                    c[10712 >> 2] = q;
                    c[r >> 2] = c[r >> 2] & -2;
                    c[a + (n + 4) >> 2] = q | 1;
                    c[k >> 2] = q;
                    i = b;
                    return
                }
                r = m >>> 3;
                if (m >>> 0 < 256) {
                    m = c[a + (n + 8) >> 2] | 0;
                    u = c[a + (n + 12) >> 2] | 0;
                    v = 10744 + (r << 1 << 2) | 0;
                    do {
                        if ((m | 0) != (v | 0)) {
                            if (m >>> 0 < f >>> 0) {
                                fa()
                            }
                            if ((c[m + 12 >> 2] | 0) == (p | 0)) {
                                break
                            }
                            fa()
                        }
                    } while (0);
                    if ((u | 0) == (m | 0)) {
                        c[2676] = c[2676] & ~(1 << r);
                        s = p;
                        t = q;
                        break
                    }
                    do {
                        if ((u | 0) == (v | 0)) {
                            w = u + 8 | 0
                        } else {
                            if (u >>> 0 < f >>> 0) {
                                fa()
                            }
                            x = u + 8 | 0;
                            if ((c[x >> 2] | 0) == (p | 0)) {
                                w = x;
                                break
                            }
                            fa()
                        }
                    } while (0);
                    c[m + 12 >> 2] = u;
                    c[w >> 2] = m;
                    s = p;
                    t = q;
                    break
                }
                v = o;
                r = c[a + (n + 24) >> 2] | 0;
                x = c[a + (n + 12) >> 2] | 0;
                do {
                    if ((x | 0) == (v | 0)) {
                        y = a + (n + 20) | 0;
                        z = c[y >> 2] | 0;
                        if ((z | 0) == 0) {
                            A = a + (n + 16) | 0;
                            B = c[A >> 2] | 0;
                            if ((B | 0) == 0) {
                                C = 0;
                                break
                            } else {
                                D = B;
                                E = A
                            }
                        } else {
                            D = z;
                            E = y
                        }
                        while (1) {
                            y = D + 20 | 0;
                            z = c[y >> 2] | 0;
                            if ((z | 0) != 0) {
                                E = y;
                                D = z;
                                continue
                            }
                            z = D + 16 | 0;
                            y = c[z >> 2] | 0;
                            if ((y | 0) == 0) {
                                break
                            } else {
                                D = y;
                                E = z
                            }
                        }
                        if (E >>> 0 < f >>> 0) {
                            fa()
                        } else {
                            c[E >> 2] = 0;
                            C = D;
                            break
                        }
                    } else {
                        z = c[a + (n + 8) >> 2] | 0;
                        if (z >>> 0 < f >>> 0) {
                            fa()
                        }
                        y = z + 12 | 0;
                        if ((c[y >> 2] | 0) != (v | 0)) {
                            fa()
                        }
                        A = x + 8 | 0;
                        if ((c[A >> 2] | 0) == (v | 0)) {
                            c[y >> 2] = x;
                            c[A >> 2] = z;
                            C = x;
                            break
                        } else {
                            fa()
                        }
                    }
                } while (0);
                if ((r | 0) == 0) {
                    s = p;
                    t = q;
                    break
                }
                x = c[a + (n + 28) >> 2] | 0;
                o = 11008 + (x << 2) | 0;
                do {
                    if ((v | 0) == (c[o >> 2] | 0)) {
                        c[o >> 2] = C;
                        if ((C | 0) != 0) {
                            break
                        }
                        c[10708 >> 2] = c[10708 >> 2] & ~(1 << x);
                        s = p;
                        t = q;
                        break a
                    } else {
                        if (r >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                            fa()
                        }
                        m = r + 16 | 0;
                        if ((c[m >> 2] | 0) == (v | 0)) {
                            c[m >> 2] = C
                        } else {
                            c[r + 20 >> 2] = C
                        } if ((C | 0) == 0) {
                            s = p;
                            t = q;
                            break a
                        }
                    }
                } while (0);
                if (C >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                    fa()
                }
                c[C + 24 >> 2] = r;
                v = c[a + (n + 16) >> 2] | 0;
                do {
                    if ((v | 0) != 0) {
                        if (v >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                            fa()
                        } else {
                            c[C + 16 >> 2] = v;
                            c[v + 24 >> 2] = C;
                            break
                        }
                    }
                } while (0);
                v = c[a + (n + 20) >> 2] | 0;
                if ((v | 0) == 0) {
                    s = p;
                    t = q;
                    break
                }
                if (v >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                    fa()
                } else {
                    c[C + 20 >> 2] = v;
                    c[v + 24 >> 2] = C;
                    s = p;
                    t = q;
                    break
                }
            } else {
                s = e;
                t = jo247: do {
            if ((g & 1 | 0) == 0) {
                m = c[d >> 2] | 0;
                if ((h | 0) == 0) {
                    i = b;
                    return
                }
                n = -8 - m | 0;
                o = a + n | 0;
                p = o;
                q = m + j | 0;
                if (o >>> 0 < f >>> 0) {
                    fa()
                }
                if ((p | 0) == (c[10724 >> 2] | 0)) {
                    r = a + (j + -4) | 0;
                    if ((c[r >> 2] & 3 | 0) != 3) {
                        s = p;
                        t = q;
                        break
                    }
                    c[10712 >> 2] = q;
                    c[r >> 2] = c[r >> 2] & -2;
                    c[a + (n + 4) >> 2] = q | 1;
                    c[k >> 2] = q;
                    i = b;
                    return
                }
                r = m >>> 3;
                if (m >>> 0 < 256) {
                    m = c[a + (n + 8) >> 2] | 0;
                    u = c[a + (n + 12) >> 2] | 0;
                    v = 10744 + (r << 1 << 2) | 0;
                    do {
                        if ((m | 0) != (v | 0)) {
                            if (m >>> 0 < f >>> 0) {
                                fa()
                            }
                            if ((c[m + 12 >> 2] | 0) == (p | 0)) {
                                break
                            }
                            fa()
                        }
                    } while (0);
                    if ((u | 0) == (m | 0)) {
                        c[2676] = c[2676] & ~(1 << r);
                        s = p;
                        t = q;
                        break
                    }
                    do {
                        if ((u | 0) == (v | 0)) {
                            w = u + 8 | 0
                        } else {
                            if (u >>> 0 < f >>> 0) {
                                fa()
                            }
                            x = u + 8 | 0;
                            if ((c[x >> 2] | 0) == (p | 0)) {
                                w = x;
                                break
                            }
                            fa()
                        }
                    } while (0);
                    c[m + 12 >> 2] = u;
                    c[w >> 2] = m;
                    s = p;
                    t = q;
                    break
                }
                v = o;
                r = c[a + (n + 24) >> 2] | 0;
                x = c[a + (n + 12) >> 2] | 0;
                do {
                    if ((x | 0) == (v | 0)) {
                        y = a + (n + 20) | 0;
                        z = c[y >> 2] | 0;
                        if ((z | 0) == 0) {
                            A = a + (n + 16) | 0;
                            B = c[A >> 2] | 0;
                            if ((B | 0) == 0) {
                                C = 0;
                                break
                            } else {
                                D = B;
                                E = A
                            }
                        } else {
                            D = z;
                            E = y
                        }
                        while (1) {
                            y = D + 20 | 0;
                            z = c[y >> 2] | 0;
                            if ((z | 0) != 0) {
                                E = y;
                                D = z;
                                continue
                            }
                            z = D + 16 | 0;
                            y = c[z >> 2] | 0;
                            if ((y | 0) == 0) {
                                break
                            } else {
                                D = y;
                                E = z
                            }
                        }
                        if (E >>> 0 < f >>> 0) {
                            fa()
                        } else {
                            c[E >> 2] = 0;
                            C = D;
                            break
                        }
                    } else {
                        z = c[a + (n + 8) >> 2] | 0;
                        if (z >>> 0 < f >>> 0) {
                            fa()
                        }
                        y = z + 12 | 0;
                        if ((c[y >> 2] | 0) != (v | 0)) {
                            fa()
                        }
                        A = x + 8 | 0;
                        if ((c[A >> 2] | 0) == (v | 0)) {
                            c[y >> 2] = x;
                            c[A >> 2] = z;
                            C = x;
                            break
                        } else {
                            fa()
                        }
                    }
                } while (0);
                if ((r | 0) == 0) {
                    s = p;
                    t = q;
                    break
                }
                x = c[a + (n + 28) >> 2] | 0;
                o = 11008 + (x << 2) | 0;
                do {
                    if ((v | 0) == (c[o >> 2] | 0)) {
                        c[o >> 2] = C;
                        if ((C | 0) != 0) {
                            break
                        }
                        c[10708 >> 2] = c[10708 >> 2] & ~(1 << x);
                        s = p;
                        t = q;
                        break a
                    } else {
                        if (r >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                            fa()
                        }
                        m = r + 16 | 0;
                        if ((c[m >> 2] | 0) == (v | 0)) {
                            c[m >> 2] = C
                        } else {
                            c[r + 20 >> 2] = C
                        } if ((C | 0) == 0) {
                            s = p;
                            t = q;
                            break a
                        }
                    }
                } while (0);
                if (C >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                    fa()
                }
                c[C + 24 >> 2] = r;
                v = c[a + (n + 16) >> 2] | 0;
                do {
                    if ((v | 0) != 0) {
                        if (v >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                            fa()
                        } else {
                            c[C + 16 >> 2] = v;
                            c[v + 24 >> 2] = C;
                            break
                        }
                    }
                } while (0);
                v = c[a + (n + 20) >> 2] | 0;
                if ((v | 0) == 0) {
                    s = p;
                    t = q;
                    break
                }
                if (v >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                    fa()
                } else {
                    c[C + 20 >> 2] = v;
                    c[v + 24 >> 2] = C;
                    s = p;
                    t = q;
                    break
                }
            } else {
                s = e;
                t = j
            }
        } while (0);
        o189 = o1065;
        if (!(o189 >>> 0 < o111 >>> 0)) {
            o1102()
        }
        o1071 = o247 + (o1061 + -4) | 0;
        o34 = o258[o1071 >> 2] | 0;
        if ((o34 & 1 | 0) == 0) {
            o1102()
        }
        do {
            if ((o34 & 2 | 0) == 0) {
                if ((o65 | 0) == (o258[10728 >> 2] | 0)) {
                    o1072 = (o258[10716 >> 2] | 0) + o227 | 0;
                    o258[10716 >> 2] = o1072;
                    o258[10728 >> 2] = o1065;
                    o258[o1065 + 4 >> 2] = o1072 | 1;
                    if ((o1065 | 0) != (o258[10724 >> 2] | 0)) {
                        o82 = o308;
                        return
                    }
                    o258[10724 >> 2] = 0;
                    o258[10712 >> 2] = 0;
                    o82 = o308;
                    return
                }
                if ((o65 | 0) == (o258[10724 >> 2] | 0)) {
                    o1072 = (o258[10712 >> 2] | 0) + o227 | 0;
                    o258[10712 >> 2] = o1072;
                    o258[10724 >> 2] = o1065;
                    o258[o1065 + 4 >> 2] = o1072 | 1;
                    o258[o189 + o1072 >> 2] = o1072;
                    o82 = o308;
                    return
                }
                o1072 = (o34 & -8) + o227 | 0;
                o1073 = o34 >>> 3;
                b: do {
                    if (o34 >>> 0 < 256) {
                        o1043 = o258[o247 + o1061 >> 2] | 0;
                        o66 = o258[o247 + (o1061 | 4) >> 2] | 0;
                        o1059 = 10744 + (o1073 << 1 << 2) | 0;
                        do {
                            if ((o1043 | 0) != (o1059 | 0)) {
                                if (o1043 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                                    o1102()
                                }
                                if ((o258[o1043 + 12 >> 2] | 0) == (o65 | 0)) {
                                    break
                                }
                                o1102()
                            }
                        } while (0);
                        if ((o66 | 0) == (o1043 | 0)) {
                            o258[2676] = o258[2676] & ~(1 << o1073);
                            break
                        }
                        do {
                            if ((o66 | 0) == (o1059 | 0)) {
                                o1074 = o66 + 8 | 0
                            } else {
                                if (o66 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                                    o1102()
                                }
                                o1060 = o66 + 8 | 0;
                                if ((o258[o1060 >> 2] | 0) == (o65 | 0)) {
                                    o1074 = o1060;
                                    break
                                }
                                o1102()
                            }
                        } while (0);
                        o258[o1043 + 12 >> 2] = o66;
                        o258[o1074 >> 2] = o1043
                    } else {
                        o1059 = o111;
                        o1060 = o258[o247 + (o1061 + 16) >> 2] | 0;
                        o1067 = o258[o247 + (o1061 | 4) >> 2] | 0;
                        do {
                            if ((o1067 | 0) == (o1059 | 0)) {
                                o887 = o247 + (o1061 + 12) | 0;
                                o23 = o258[o887 >> 2] | 0;
                                if ((o23 | 0) == 0) {
                                    o1063 = o247 + (o1061 + 8) | 0;
                                    o750 = o258[o1063 >> 2] | 0;
                                    if ((o750 | 0) == 0) {
                                        o1075 = 0;
                                        break
                                    } else {
                                        o1076 = o750;
                                        o1077 = o1063
                                    }
                                } else {
                                    o1076 = o23;
                                    o1077 = o887
                                }
                                while (1) {
                                    o887 = o1076 + 20 | 0;
                                    o23 = o258[o887 >> 2] | 0;
                                    if ((o23 | 0) != 0) {
                                        o1077 = o887;
                                        o1076 = o23;
                                        continue
                                    }
                                    o23 = o1076 + 16 | 0;
                                    o887 = o258[o23 >> 2] | 0;
                                    if ((o887 | 0) == 0) {
                                        break
                                    } else {
                                        o1076 = o887;
                                        o1077 = o23
                                    }
                                }
                                if (o1077 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                                    o1102()
                                } else {
                                    o258[o1077 >> 2] = 0;
                                    o1075 = o1076;
                                    break
                                }
                            } else {
                                o23 = o258[o247 + o1061 >> 2] | 0;
                                if (o23 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                                    o1102()
                                }
                                o887 = o23 + 12 | 0;
                                if ((o258[o887 >> 2] | 0) != (o1059 | 0)) {
                                    o1102()
                                }
                                o1063 = o1067 + 8 | 0;
                                if ((o258[o1063 >> 2] | 0) == (o1059 | 0)) {
                                    o258[o887 >> 2] = o1067;
                                    o258[o1063 >> 2] = o23;
                                    o1075 = o1067;
                                    break
                                } else {
                                    o1102()
                                }
                            }
                        } while (0);
                        if ((o1060 | 0) == 0) {
                            break
                        }
                        o1067 = o258[o247 + (o1061 + 20) >> 2] | 0;
                        o1043 = 11008 + (o1067 << 2) | 0;
                        do {
                            if ((o1059 | 0) == (o258[o1043 >> 2] | 0)) {
                                o258[o1043 >> 2] = o1075;
                                if ((o1075 | 0) != 0) {
                                    break
                                }
                                o258[10708 >> 2] = o258[10708 >> 2] & ~(1 << o1067);
                                break o308
                            } else {
                                if (o1060 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                                    o1102()
                                }
                                o66 = o1060 + 16 | 0;
                                if ((o258[o66 >> 2] | 0) == (o1059 | 0)) {
                                    o258[o66 >> 2] = o1075
                                } else {
                                    o258[o1060 + 20 >> 2] = o1075
                                } if ((o1075 | 0) == 0) {
                                    break o308
                                }
                            }
                        } while (0);
                        if (o1075 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                            o1102()
                        }
                        o258[o1075 + 24 >> 2] = o1060;
                        o1059 = o258[o247 + (o1061 + 8) >> 2] | 0;
                        do {
                            if ((o1059 | 0) != 0) {
                                if (o1059 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                                    o1102()
                                } else {
                                    o258[o1075 + 16 >> 2] = o1059;
                                    o258[o1059 + 24 >> 2] = o1075;
                                    break
                                }
                            }
                        } while (0);
                        o1059 = o258[o247 + (o1061 + 12) >> 2] | 0;
                        if ((o1059 | 0) == 0) {
                            break
                        }
                        if (o1059 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                            o1102()
                        } else {
                            o258[o1075 + 20 >> 2] = o1059;
                            o258[o1059 + 24 >> 2] = o1075b: do {
                    if (f >>> 0 < 256) {
                        w = c[a + j >> 2] | 0;
                        h = c[a + (j | 4) >> 2] | 0;
                        d = 10744 + (E << 1 << 2) | 0;
                        do {
                            if ((w | 0) != (d | 0)) {
                                if (w >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                    fa()
                                }
                                if ((c[w + 12 >> 2] | 0) == (l | 0)) {
                                    break
                                }
                                fa()
                            }
                        } while (0);
                        if ((h | 0) == (w | 0)) {
                            c[2676] = c[2676] & ~(1 << E);
                            break
                        }
                        do {
                            if ((h | 0) == (d | 0)) {
                                F = h + 8 | 0
                            } else {
                                if (h >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                    fa()
                                }
                                g = h + 8 | 0;
                                if ((c[g >> 2] | 0) == (l | 0)) {
                                    F = g;
                                    break
                                }
                                fa()
                            }
                        } while (0);
                        c[w + 12 >> 2] = h;
                        c[F >> 2] = w
                    } else {
                        d = k;
                        g = c[a + (j + 16) >> 2] | 0;
                        v = c[a + (j | 4) >> 2] | 0;
                        do {
                            if ((v | 0) == (d | 0)) {
                                r = a + (j + 12) | 0;
                                x = c[r >> 2] | 0;
                                if ((x | 0) == 0) {
                                    o = a + (j + 8) | 0;
                                    m = c[o >> 2] | 0;
                                    if ((m | 0) == 0) {
                                        G = 0;
                                        break
                                    } else {
                                        H = m;
                                        I = o
                                    }
                                } else {
                                    H = x;
                                    I = r
                                }
                                while (1) {
                                    r = H + 20 | 0;
                                    x = c[r >> 2] | 0;
                                    if ((x | 0) != 0) {
                                        I = r;
                                        H = x;
                                        continue
                                    }
                                    x = H + 16 | 0;
                                    r = c[x >> 2] | 0;
                                    if ((r | 0) == 0) {
                                        break
                                    } else {
                                        H = r;
                                        I = x
                                    }
                                }
                                if (I >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                    fa()
                                } else {
                                    c[I >> 2] = 0;
                                    G = H;
                                    break
                                }
                            } else {
                                x = c[a + j >> 2] | 0;
                                if (x >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                    fa()
                                }
                                r = x + 12 | 0;
                                if ((c[r >> 2] | 0) != (d | 0)) {
                                    fa()
                                }
                                o = v + 8 | 0;
                                if ((c[o >> 2] | 0) == (d | 0)) {
                                    c[r >> 2] = v;
                                    c[o >> 2] = x;
                                    G = v;
                                    break
                                } else {
                                    fa()
                                }
                            }
                        } while (0);
                        if ((g | 0) == 0) {
                            break
                        }
                        v = c[a + (j + 20) >> 2] | 0;
                        w = 11008 + (v << 2) | 0;
                        do {
                            if ((d | 0) == (c[w >> 2] | 0)) {
                                c[w >> 2] = G;
                                if ((G | 0) != 0) {
                                    break
                                }
                                c[10708 >> 2] = c[10708 >> 2] & ~(1 << v);
                                break b
                            } else {
                                if (g >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                    fa()
                                }
                                h = g + 16 | 0;
                                if ((c[h >> 2] | 0) == (d | 0)) {
                                    c[h >> 2] = G
                                } else {
                                    c[g + 20 >> 2] = G
                                } if ((G | 0) == 0) {
                                    break b
                                }
                            }
                        } while (0);
                        if (G >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                            fa()
                        }
                        c[G + 24 >> 2] = g;
                        d = c[a + (j + 8) >> 2] | 0;
                        do {
                            if ((d | 0) != 0) {
                                if (d >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                    fa()
                                } else {
                                    c[G + 16 >> 2] = d;
                                    c[d + 24 >> 2] = G;
                                    break
                                }
                            }
                        } while (0);
                        d = c[a + (j + 12) >> 2] | 0;
                        if ((d | 0) == 0) {
                            break
                        }
                        if (d >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                            fa()
                        } else {
                            c[G + 20 >> 2] = d;
                            c[d + 24 >> 2] = Go308: do {
                    if (f >>> 0 < 256) {
                        w = c[a + j >> 2] | 0;
                        h = c[a + (j | 4) >> 2] | 0;
                        d = 10744 + (E << 1 << 2) | 0;
                        do {
                            if ((w | 0) != (d | 0)) {
                                if (w >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                    fa()
                                }
                                if ((c[w + 12 >> 2] | 0) == (l | 0)) {
                                    break
                                }
                                fa()
                            }
                        } while (0);
                        if ((h | 0) == (w | 0)) {
                            c[2676] = c[2676] & ~(1 << E);
                            break
                        }
                        do {
                            if ((h | 0) == (d | 0)) {
                                F = h + 8 | 0
                            } else {
                                if (h >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                    fa()
                                }
                                g = h + 8 | 0;
                                if ((c[g >> 2] | 0) == (l | 0)) {
                                    F = g;
                                    break
                                }
                                fa()
                            }
                        } while (0);
                        c[w + 12 >> 2] = h;
                        c[F >> 2] = w
                    } else {
                        d = k;
                        g = c[a + (j + 16) >> 2] | 0;
                        v = c[a + (j | 4) >> 2] | 0;
                        do {
                            if ((v | 0) == (d | 0)) {
                                r = a + (j + 12) | 0;
                                x = c[r >> 2] | 0;
                                if ((x | 0) == 0) {
                                    o = a + (j + 8) | 0;
                                    m = c[o >> 2] | 0;
                                    if ((m | 0) == 0) {
                                        G = 0;
                                        break
                                    } else {
                                        H = m;
                                        I = o
                                    }
                                } else {
                                    H = x;
                                    I = r
                                }
                                while (1) {
                                    r = H + 20 | 0;
                                    x = c[r >> 2] | 0;
                                    if ((x | 0) != 0) {
                                        I = r;
                                        H = x;
                                        continue
                                    }
                                    x = H + 16 | 0;
                                    r = c[x >> 2] | 0;
                                    if ((r | 0) == 0) {
                                        break
                                    } else {
                                        H = r;
                                        I = x
                                    }
                                }
                                if (I >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                    fa()
                                } else {
                                    c[I >> 2] = 0;
                                    G = H;
                                    break
                                }
                            } else {
                                x = c[a + j >> 2] | 0;
                                if (x >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                    fa()
                                }
                                r = x + 12 | 0;
                                if ((c[r >> 2] | 0) != (d | 0)) {
                                    fa()
                                }
                                o = v + 8 | 0;
                                if ((c[o >> 2] | 0) == (d | 0)) {
                                    c[r >> 2] = v;
                                    c[o >> 2] = x;
                                    G = v;
                                    break
                                } else {
                                    fa()
                                }
                            }
                        } while (0);
                        if ((g | 0) == 0) {
                            break
                        }
                        v = c[a + (j + 20) >> 2] | 0;
                        w = 11008 + (v << 2) | 0;
                        do {
                            if ((d | 0) == (c[w >> 2] | 0)) {
                                c[w >> 2] = G;
                                if ((G | 0) != 0) {
                                    break
                                }
                                c[10708 >> 2] = c[10708 >> 2] & ~(1 << v);
                                break b
                            } else {
                                if (g >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                    fa()
                                }
                                h = g + 16 | 0;
                                if ((c[h >> 2] | 0) == (d | 0)) {
                                    c[h >> 2] = G
                                } else {
                                    c[g + 20 >> 2] = G
                                } if ((G | 0) == 0) {
                                    break b
                                }
                            }
                        } while (0);
                        if (G >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                            fa()
                        }
                        c[G + 24 >> 2] = g;
                        d = c[a + (j + 8) >> 2] | 0;
                        do {
                            if ((d | 0) != 0) {
                                if (d >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                                    fa()
                                } else {
                                    c[G + 16 >> 2] = d;
                                    c[d + 24 >> 2] = G;
                                    break
                                }
                            }
                        } while (0);
                        d = c[a + (j + 12) >> 2] | 0;
                        if ((d | 0) == 0) {
                            break
                        }
                        if (d >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                            fa()
                        } else {
                            c[G + 20 >> 2] = d;
                            c[d + 24 >> 2] = G;
                            break
                        }
                    }
                } while (0);
                o258[o1065 + 4 >> 2] = o1072 | 1;
                o258[o189 + o1072 >> 2] = o1072;
                if ((o1065 | 0) != (o258[10724 >> 2] | 0)) {
                    o1078 = o1072;
                    break
                }
                o258[10712 >> 2] = o1072;
                o82 = o308;
                return
            } else {
                o258[o1071 >> 2] = o34 & -2;
                o258[o1065 + 4 >> 2] = o227 | 1;
                o258[o189 + o227 >> 2] = o227;
                o1078 = o227
            }
        } while (0);
        o227 = o1078 >>> 3;
        if (o1078 >>> 0 < 256) {
            o189 = o227 << 1;
            o34 = 10744 + (o189 << 2) | 0;
            o1071 = o258[2676] | 0;
            o1075 = 1 << o227;
            do {
                if ((o1071 & o1075 | 0) == 0) {
                    o258[2676] = o1071 | o1075;
                    o1079 = 10744 + (o189 + 2 << 2) | 0;
                    o1080 = o34
                } else {
                    o227 = 10744 + (o189 + 2 << 2) | 0;
                    o1061 = o258[o227 >> 2] | 0;
                    if (!(o1061 >>> 0 < (o258[10720 >> 2] | 0) >>> 0)) {
                        o1079 = o227;
                        o1080 = o1061;
                        break
                    }
                    o1102()
                }
            } while (0);
            o258[o1079 >> 2] = o1065;
            o258[o1080 + 12 >> 2] = o1065;
            o258[o1065 + 8 >> 2] = o1080;
            o258[o1065 + 12 >> 2] = o34;
            o82 = o308;
            return
        }
        o34 = o1065;
        o1080 = o1078 >>> 8;
        do {
            if ((o1080 | 0) == 0) {
                o1081 = 0
            } else {
                if (o1078 >>> 0 > 16777215) {
                    o1081 = 31;
                    break
                }
                o1079 = (o1080 + 1048320 | 0) >>> 16 & 8;
                o189 = o1080 << o1079;
                o1075 = (o189 + 520192 | 0) >>> 16 & 4;
                o1071 = o189 << o1075;
                o189 = (o1071 + 245760 | 0) >>> 16 & 2;
                o1061 = 14 - (o1075 | o1079 | o189) + (o1071 << o189 >>> 15) | 0;
                o1081 = o1078 >>> (o1061 + 7 | 0) & 1 | o1061 << 1
            }
        } while (0);
        o1080 = 11008 + (o1081 << 2) | 0;
        o258[o1065 + 28 >> 2] = o1081;
        o258[o1065 + 20 >> 2] = 0;
        o258[o1065 + 16 >> 2] = 0;
        o1061 = o258[10708 >> 2] | 0;
        o189 = 1 << o1081;
        c: do {
            if ((o1061 & o189 | 0) == 0) {
                o258[10708 >> 2] = o1061 | o189;
                o258[o1080 >> 2] = o34;
                o258[o1065 + 24 >> 2] = o1080;
                o258[o1065 + 12 >> 2] = o1065;
                o258[o1065 + 8 >> 2] = o1065
            } else {
                o1071 = o258[o1080 >> 2] | 0;
                if ((o1081 | 0) == 31) {
                    o1082 = 0
                } else {
                    o1082 = 25 - (o1081 >>> 1) | 0
                }
                d: do {
                    if ((o258[o1071 + 4 >> 2] & -8 | 0) == (o1078 | 0)) {
                        o1083 = o1071
                    } else {
                        o1079 = o1078 << o1082;
                        o1075 = o1071;
                        while (1) {
                            o1084 = o1075 + (o1079 >>> 31 << 2) + 16 | 0;
                            o227 = o258[o1084 >> 2] | 0;
                            if ((o227 | 0) == 0) {
                                break
                            }
                            if ((o258[o227 + 4 >> 2] & -8 | 0) == (o1078 | 0)) {
                                o1083 = o227;
                                break o1059
                            } else {
                                o1079 = o1079 << 1;
                                o1075 = o227
                            }
                        }
                        if (o1084 >>> 0 < (o258[10720 >> 2] | 0) >>> 0) {
                            o1102()
                        } else {
                            o258[o1084 >> 2] = o34;
                            o258[o1065 + 24 >> 2] = o1075;
                            o258[o1065 + 12 >> 2] = o1065;
                            o258[o1065 + 8 >> 2] = o1065;
                            break o258d: do {
                    if ((c[C + 4 >> 2] & -8 | 0) == (J | 0)) {
                        O = C
                    } else {
                        K = J << N;
                        G = C;
                        while (1) {
                            P = G + (K >>> 31 << 2) + 16 | 0;
                            t = c[P >> 2] | 0;
                            if ((t | 0) == 0) {
                                break
                            }
                            if ((c[t + 4 >> 2] & -8 | 0) == (J | 0)) {
                                O = t;
                                break d
                            } else {
                                K = K << 1;
                                G = t
                            }
                        }
                        if (P >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                            fa()
                        } else {
                            c[P >> 2] = f;
                            c[s + 24 >> 2] = G;
                            c[s + 12 >> 2] = s;
                            c[s + 8 >> 2] = s;
                            break co1059: do {
                    if ((c[C + 4 >> 2] & -8 | 0) == (J | 0)) {
                        O = C
                    } else {
                        K = J << N;
                        G = C;
                        while (1) {
                            P = G + (K >>> 31 << 2) + 16 | 0;
                            t = c[P >> 2] | 0;
                            if ((t | 0) == 0) {
                                break
                            }
                            if ((c[t + 4 >> 2] & -8 | 0) == (J | 0)) {
                                O = t;
                                break d
                            } else {
                                K = K << 1;
                                G = t
                            }
                        }
                        if (P >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                            fa()
                        } else {
                            c[P >> 2] = f;
                            c[s + 24 >> 2] = G;
                            c[s + 12 >> 2] = s;
                            c[s + 8 >> 2] = s;
                            break c
                        }
                    }
                } while (0);
                o1071 = o1083 + 8 | 0;
                o1072 = o258[o1071 >> 2] | 0;
                o1079 = o258[10720 >> 2] | 0;
                if (o1083 >>> 0 < o1079 >>> 0) {
                    o1102()
                }
                if (o1072 >>> 0 < o1079 >>> 0) {
                    o1102()
                } else {
                    o258[o1072 + 12 >> 2] = o34;
                    o258[o1071 >> 2] = o34;
                    o258[o1065 + 8 >> 2] = o1072;
                    o258[o1065 + 12 >> 2] = o1083;
                    o258[o1065c: do {
            if ((j & e | 0) == 0) {
                c[10708 >> 2] = j | e;
                c[L >> 2] = f;
                c[s + 24 >> 2] = L;
                c[s + 12 >> 2] = s;
                c[s + 8 >> 2] = s
            } else {
                C = c[L >> 2] | 0;
                if ((M | 0) == 31) {
                    N = 0
                } else {
                    N = 25 - (M >>> 1) | 0
                }
                d: do {
                    if ((c[C + 4 >> 2] & -8 | 0) == (J | 0)) {
                        O = C
                    } else {
                        K = J << N;
                        G = C;
                        while (1) {
                            P = G + (K >>> 31 << 2) + 16 | 0;
                            t = c[P >> 2] | 0;
                            if ((t | 0) == 0) {
                                break
                            }
                            if ((c[t + 4 >> 2] & -8 | 0) == (J | 0)) {
                                O = t;
                                break d
                            } else {
                                K = K << 1;
                                G = t
                            }
                        }
                        if (P >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                            fa()
                        } else {
                            c[P >> 2] = f;
                            c[s + 24 >> 2] = G;
                            c[s + 12 >> 2] = s;
                            c[s + 8 >> 2] = s;
                            break c
                        }
                    }
                } while (0);
                C = O + 8 | 0;
                D = c[C >> 2] | 0;
                K = c[10720 >> 2] | 0;
                if (O >>> 0 < K >>> 0) {
                    fa()
                }
                if (D >>> 0 < K >>> 0) {
                    fa()
                } else {
                    c[D + 12 >> 2] = f;
                    c[C >> 2] = f;
                    c[s + 8 >> 2] = D;
                    c[s + 12 >> 2] = O;
                    c[so258: do {
            if ((j & e | 0) == 0) {
                c[10708 >> 2] = j | e;
                c[L >> 2] = f;
                c[s + 24 >> 2] = L;
                c[s + 12 >> 2] = s;
                c[s + 8 >> 2] = s
            } else {
                C = c[L >> 2] | 0;
                if ((M | 0) == 31) {
                    N = 0
                } else {
                    N = 25 - (M >>> 1) | 0
                }
                d: do {
                    if ((c[C + 4 >> 2] & -8 | 0) == (J | 0)) {
                        O = C
                    } else {
                        K = J << N;
                        G = C;
                        while (1) {
                            P = G + (K >>> 31 << 2) + 16 | 0;
                            t = c[P >> 2] | 0;
                            if ((t | 0) == 0) {
                                break
                            }
                            if ((c[t + 4 >> 2] & -8 | 0) == (J | 0)) {
                                O = t;
                                break d
                            } else {
                                K = K << 1;
                                G = t
                            }
                        }
                        if (P >>> 0 < (c[10720 >> 2] | 0) >>> 0) {
                            fa()
                        } else {
                            c[P >> 2] = f;
                            c[s + 24 >> 2] = G;
                            c[s + 12 >> 2] = s;
                            c[s + 8 >> 2] = s;
                            break c
                        }
                    }
                } while (0);
                C = O + 8 | 0;
                D = c[C >> 2] | 0;
                K = c[10720 >> 2] | 0;
                if (O >>> 0 < K >>> 0) {
                    fa()
                }
                if (D >>> 0 < K >>> 0) {
                    fa()
                } else {
                    c[D + 12 >> 2] = f;
                    c[C >> 2] = f;
                    c[s + 8 >> 2] = D;
                    c[s + 12 >> 2] = O;
                    c[s + 24 >> 2] = 0;
                    break
                }
            }
        } while (0);
        o1065 = (o258[10736 >> 2] | 0) + -1 | 0;
        o258[10736 >> 2] = o1065;
        if ((o1065 | 0) == 0) {
            o1085 = 11160 | 0
        } else {
            o82 = o308;
            return
        }
        while (1) {
            o1065 = o258[o1085 >> 2] | 0;
            if ((o1065 | 0) == 0) {
                break
            } else {
                o1085 = o1065 + 8 | 0
            }
        }
        o258[10736 >> 2] = -1;
        o82 = o308;
        return
    }

    function o1128() {}

    function o1129(o308, o1059, o189) {
        o308 = o308 | 0;
        o1059 = o1059 | 0;
        o189 = o189 | 0;
        var o34 = 0;
        if ((o189 | 0) >= 4096) return o1106(o308 | 0, o1059 | 0, o189 | 0) | 0;
        o34 = o308 | 0;
        if ((o308 & 3) == (o1059 & 3)) {
            while (o308 & 3) {
                if ((o189 | 0) == 0) return o34 | 0;
                o247[o308] = o247[o1059] | 0;
                o308 = o308 + 1 | 0;
                o1059 = o1059 + 1 | 0;
                o189 = o189 - 1 | 0
            }
            while ((o189 | 0) >= 4) {
                o258[o308 >> 2] = o258[o1059 >> 2];
                o308 = o308 + 4 | 0;
                o1059 = o1059 + 4 | 0;
                o189 = o189 - 4 | 0
            }
        }
        while ((o189 | 0) > 0) {
            o247[o308] = o247[o1059] | 0;
            o308 = o308 + 1 | 0;
            o1059 = o1059 + 1 | 0;
            o189 = o189 - 1 | 0
        }
        return o34 | 0
    }

    function o1130(o308, o1059, o189) {
        o308 = o308 | 0;
        o1059 = o1059 | 0;
        o189 = o189 | 0;
        var o34 = 0,
            o1060 = 0,
            o66 = 0,
            o82 = 0;
        o34 = o308 + o189 | 0;
        if ((o189 | 0) >= 20) {
            o1059 = o1059 & 255;
            o1060 = o308 & 3;
            o66 = o1059 | o1059 << 8 | o1059 << 16 | o1059 << 24;
            o82 = o34 & ~3;
            if (o1060) {
                o1060 = o308 + 4 - o1060 | 0;
                while ((o308 | 0) < (o1060 | 0)) {
                    o247[o308] = o1059;
                    o308 = o308 + 1 | 0
                }
            }
            while ((o308 | 0) < (o82 | 0)) {
                o258[o308 >> 2] = o66;
                o308 = o308 + 4 | 0
            }
        }
        while ((o308 | 0) < (o34 | 0)) {
            o247[o308] = o1059;
            o308 = o308 + 1 | 0
        }
        return o308 - o189 | 0
    }

    function o1131(o308) {
        o308 = o308 | 0;
        var o258 = 0;
        o258 = o308;
        while (o247[o258] | 0) {
            o258 = o258 + 1 | 0
        }
        return o258 - o308 | 0
    }




    // EMSCRIPTEN_END_FUNCS
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

o48.o140 = function (o85) {
    return o1057['stackAlloc'](o85)
};
o48.o49 = function () {
    return o1057['stackSave']()
};
o48.o51 = function (o11) {
    o1057['stackRestore'](o11)
};


// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var o1155 = null;

// === Auto-generated postamble setup entry stuff ===

if (o336) {
    if (o16 || o22) {
        var o783 = Module['readBinary'](o336);
        o222.set(o783, o268);
    } else {
        o332('memory initializer');
        o852.o859(o336, function (o783) {
            o222.set(o783, o268);
            o334('memory initializer');
        }, function (o783) {
            throw 'could not load memory initializer ' + o336;
        });
    }
}

function o1156(o832) {
    this.name = "ExitStatus";
    this.o793 = "Program terminated with exit(" + o832 + ")";
    this.o832 = o832;
};
o1156.prototype = new Error();
o1156.prototype.constructor = o1156;

var o1157;
var o1158 = null;
var o1159 = false;

o331 = function o1160() {
    // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
    if (!Module['calledRun'] && o1161) o1162();
    if (!Module['calledRun']) o331 = o1160; // try this again later, after new deps are fulfilled
}

Module['callMain'] = Module.o1163 = function o1163(o81) {
    o73(o329 == 0, 'cannot call main when async dependencies remain! (listen on __ATMAIN__)');
    o73(o279.length == 0, 'cannot call main when preRun functions remain to be called');

    o81 = o81 || [];

    if (o18 && o1158 !== null) {
        Module.o24('preload time: ' + (Date.o4() - o1158) + ' ms');
    }

    o287();

    var o1164 = o81.length + 1;

    function o1165() {
        for (var o82 = 0; o82 < 4 - 1; o82++) {
            o1166.push(0);
        }
    }
    var o1166 = [o215(o192("/bin/this.program"), 'i8', o210)];
    o1165();
    for (var o82 = 0; o82 < o1164 - 1; o82 = o82 + 1) {
        o1166.push(o215(o192(o81[o82]), 'i8', o210));
        o1165();
    }
    o1166.push(0);
    o1166 = o215(o1166, 'i32', o210);

    o1157 = o50;

    try {

        var o30 = Module['_main'](o1164, o1166, 0);


        // if we're not running an evented main loop, it's time to exit
        if (!Module['noExitRuntime']) {
            o1167(o30);
        }
    } catch (o189) {
        if (o189 instanceof o1156) {
            // exit() throws this once it's done to make sure execution
            // has been stopped completely
            return;
        } else if (o189 == 'SimulateInfiniteLoop') {
            // running an evented main loop, don't immediately exit
            Module['noExitRuntime'] = true;
            return;
        } else {
            if (o189 && typeof o189 === 'object' && o189.o190) Module.o24('exception thrown: ' + [o189, o189.o190]);
            throw o189;
        }
    } finally {
        o1159 = true;
    }
}




function o1162(o81) {
    o81 = o81 || Module['arguments'];

    if (o1158 === null) o1158 = Date.o4();

    if (o329 > 0) {
        Module.o24('run() called, but dependencies remain, so not running');
        return;
    }

    o285();

    if (o329 > 0) return; // a preRun added a dependency, run will be called later
    if (Module['calledRun']) return; // run may have just been called through dependencies being fulfilled just in this very frame

    function o1168() {
        if (Module['calledRun']) return; // run may have just been called while the async setStatus time below was happening
        Module['calledRun'] = true;

        o287();

        o288();

        if (Module['_main'] && o1161) {
            Module['callMain'](o81);
        }

        o290();
    }

    if (Module['setStatus']) {
        Module['setStatus']('Running...');
        o997(function () {
            o997(function () {
                Module['setStatus']('');
            }, 1);
            if (!o154) o1168();
        }, 1);
    } else {
        o1168();
    }
}
Module['run'] = Module.o1162 = o1162;

function o1167(o832) {
    o154 = true;
    o155 = o832;
    o50 = o1157;

    // exit the runtime
    o289();

    // TODO We should handle this differently based on environment.
    // In the browser, the best we can do is throw an exception
    // to halt execution, but in node we could process.exit and
    // I'd imagine SM shell would have something equivalent.
    // This would let us set a proper exit status (which
    // would be great for checking test exit statuses).
    // https://github.com/kripken/emscripten/issues/1371

    // throw an exception to halt the current execution
    throw new o1156(o832);
}
Module['exit'] = Module.o1167 = o1167;

function abort(o124) {
    if (o124) {
        Module.print(o124);
        Module.o24(o124);
    }

    o154 = true;
    o155 = 1;

    var o1169 = '\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.';

    throw 'abort() at ' + o262() + o1169;
}
Module['abort'] = Module.abort = abort;

// {{PRE_RUN_ADDITIONS}}

if (Module['preInit']) {
    if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
    while (Module['preInit'].length > 0) {
        Module['preInit'].pop()();
    }
}

// shouldRunNow refers to calling main(), not run().
var o1161 = true;
if (Module['noInitialRun']) {
    o1161 = false;
}


o1162();

// {{POST_RUN_ADDITIONS}}




// {{MODULE_ADDITIONS}}

////////////////////////////////////////////////////////////////////////////////
// Runner
////////////////////////////////////////////////////////////////////////////////
var o1170 = o11.o12.o13();
o11.o12.o9(o1170 - o14);