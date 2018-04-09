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

var o0 = 2669;

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

o142 = o268 + o48.o100(20195);
/* global initializers */
o280.push();


/* memory initializer */
o215([], "i8", o214, o48.o151);




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


function o220(o340) {
    /* Over-allocate to make sure it is byte-aligned by 8.
     * This will leak memory, but this is only the dummy
     * implementation (replaced by dlmalloc normally) so
     * not an issue.
     */
    var o114 = o48.o143(o340 + 8);
    return (o114 + 8) & 0xFFFFFFF8;
}
Module["_malloc"] = o220;




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
    o202[((o464) >> 2)] = value;
    return value;
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
        o466.o467[o471] = {
            input: [],
            o473: [],
            o472: o472
        };
        o474.o475(o471, o466.o476);
    },
    o476: {
        o41: function (o477) {
            var o478 = o466.o467[o477.o479.o480];
            if (!o478) {
                throw new o474.o481(o341.o361);
            }
            o477.o478 = o478;
            o477.o482 = false;
        },
        o483: function (o477) {
            // flush any pending line data
            if (o477.o478.o473.length) {
                o477.o478.o472.o484(o477.o478, 10);
            }
        },
        o27: function (o477, buffer, o107, length, o485 /* ignored */ ) {
            if (!o477.o478 || !o477.o478.o472.o486) {
                throw new o474.o481(o341.o347);
            }
            var o487 = 0;
            for (var o82 = 0; o82 < length; o82++) {
                var o488;
                try {
                    o488 = o477.o478.o472.o486(o477.o478);
                } catch (o189) {
                    throw new o474.o481(o341.o346);
                }
                if (o488 === undefined && o487 === 0) {
                    throw new o474.o481(o341.o352);
                }
                if (o488 === null || o488 === undefined) break;
                o487++;
                buffer[o107 + o82] = o488;
            }
            if (o487) {
                o477.o479.o489 = Date.o4();
            }
            return o487;
        },
        write: function (o477, buffer, o107, length, o485) {
            if (!o477.o478 || !o477.o478.o472.o484) {
                throw new o474.o481(o341.o347);
            }
            for (var o82 = 0; o82 < length; o82++) {
                try {
                    o477.o478.o472.o484(o477.o478, buffer[o107 + o82]);
                } catch (o189) {
                    throw new o474.o481(o341.o346);
                }
            }
            if (length) {
                o477.o479.o489 = Date.o4();
            }
            return o82;
        }
    },
    o490: {
        o486: function (o478) {
            if (!o478.input.length) {
                var o488 = null;
                if (o16) {
                    o488 = o17['stdin']['read']();
                    if (!o488) {
                        if (o17['stdin']['_readableState'] && o17['stdin']['_readableState']['ended']) {
                            return null; // EOF
                        }
                        return undefined; // no data available
                    }
                } else if (typeof o19 != 'undefined' &&
                    typeof o19.o491 == 'function') {
                    // Browser.
                    o488 = o19.o491('Input: '); // returns null on cancel
                    if (o488 !== null) {
                        o488 += '\n';
                    }
                } else if (typeof o492 == 'function') {
                    // Command line.
                    o488 = o492();
                    if (o488 !== null) {
                        o488 += '\n';
                    }
                }
                if (!o488) {
                    return null;
                }
                o478.input = o192(o488, true);
            }
            return o478.input.shift();
        },
        o484: function (o478, o493) {
            if (o493 === null || o493 === 10) {
                Module['print'](o478.o473.join(''));
                o478.o473 = [];
            } else {
                o478.o473.push(o466.o229.o131(o493));
            }
        }
    },
    o494: {
        o484: function (o478, o493) {
            if (o493 === null || o493 === 10) {
                Module['printErr'](o478.o473.join(''));
                o478.o473 = [];
            } else {
                o478.o473.push(o466.o229.o131(o493));
            }
        }
    }
};

var o495 = {
    o496: null,
    o497: 1,
    o498: 2,
    o499: 3,
    o500: function (o500) {
        return o495.o501(null, '/', 16384 | 511 /* 0777 */ , 0);
    },
    o501: function (o502, name, o503, o471) {
        if (o474.o504(o503) || o474.o505(o503)) {
            // no supported
            throw new o474.o481(o341.o342);
        }
        if (!o495.o496) {
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
        }
        var o479 = o474.o501(o502, name, o503, o471);
        if (o474.o523(o479.o503)) {
            o479.o508 = o495.o496.o506.o479;
            o479.o476 = o495.o496.o506.o477;
            o479.o524 = {};
        } else if (o474.o525(o479.o503)) {
            o479.o508 = o495.o496.o518.o479;
            o479.o476 = o495.o496.o518.o477;
            o479.o524 = [];
            o479.o526 = o495.o498;
        } else if (o474.o527(o479.o503)) {
            o479.o508 = o495.o496.link.o479;
            o479.o476 = o495.o496.link.o477;
        } else if (o474.o528(o479.o503)) {
            o479.o508 = o495.o496.o521.o479;
            o479.o476 = o495.o496.o521.o477;
        }
        o479.o489 = Date.o4();
        // add the new node to the parent
        if (o502) {
            o502.o524[name] = o479;
        }
        return o479;
    },
    o529: function (o479) {
        if (o479.o526 !== o495.o498) {
            var o524 = o479.o524;
            o479.o524 = Array.prototype.slice.call(o524);
            o479.o526 = o495.o498;
        }
    },
    o508: {
        o507: function (o479) {
            var o530 = {};
            // device numbers reuse inode numbers.
            o530.o471 = o474.o528(o479.o503) ? o479.o333 : 1;
            o530.o531 = o479.o333;
            o530.o503 = o479.o503;
            o530.o532 = 1;
            o530.o533 = 0;
            o530.o534 = 0;
            o530.o480 = o479.o480;
            if (o474.o523(o479.o503)) {
                o530.o85 = 4096;
            } else if (o474.o525(o479.o503)) {
                o530.o85 = o479.o524.length;
            } else if (o474.o527(o479.o503)) {
                o530.o85 = o479.link.length;
            } else {
                o530.o85 = 0;
            }
            o530.o535 = new Date(o479.o489);
            o530.o536 = new Date(o479.o489);
            o530.o537 = new Date(o479.o489);
            // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
            //       but this is not required by the standard.
            o530.o538 = 4096;
            o530.o539 = Math.ceil(o530.o85 / o530.o538);
            return o530;
        },
        o509: function (o479, o530) {
            if (o530.o503 !== undefined) {
                o479.o503 = o530.o503;
            }
            if (o530.o489 !== undefined) {
                o479.o489 = o530.o489;
            }
            if (o530.o85 !== undefined) {
                o495.o529(o479);
                var o524 = o479.o524;
                if (o530.o85 < o524.length) o524.length = o530.o85;
                else
                    while (o530.o85 > o524.length) o524.push(0);
            }
        },
        o510: function (o502, name) {
            throw o474.o540[o341.o343];
        },
        o511: function (o502, name, o503, o471) {
            return o495.o501(o502, name, o503, o471);
        },
        o512: function (o541, o542, o543) {
            // if we're overwriting a directory at new_name, make sure it's empty.
            if (o474.o523(o541.o503)) {
                var o544;
                try {
                    o544 = o474.o545(o542, o543);
                } catch (o189) {}
                if (o544) {
                    for (var o82 in o544.o524) {
                        throw new o474.o481(o341.o421);
                    }
                }
            }
            // do the internal rewiring
            delete o541.o502.o524[o541.name];
            o541.name = o543;
            o542.o524[o543] = o541;
            o541.o502 = o542;
        },
        o513: function (o502, name) {
            delete o502.o524[name];
        },
        o514: function (o502, name) {
            var o479 = o474.o545(o502, name);
            for (var o82 in o479.o524) {
                throw new o474.o481(o341.o421);
            }
            delete o502.o524[name];
        },
        o515: function (o479) {
            var entries = ['.', '..']
            for (var key in o479.o524) {
                if (!o479.o524.hasOwnProperty(key)) {
                    continue;
                }
                entries.push(key);
            }
            return entries;
        },
        o516: function (o502, o546, o547) {
            var o479 = o495.o501(o502, o546, 511 /* 0777 */ | 40960, 0);
            o479.link = o547;
            return o479;
        },
        o520: function (o479) {
            if (!o474.o527(o479.o503)) {
                throw new o474.o481(o341.o364);
            }
            return o479.link;
        }
    },
    o476: {
        o27: function (o477, buffer, o107, length, o548) {
            var o524 = o477.o479.o524;
            if (o548 >= o524.length)
                return 0;
            var o85 = Math.o87(o524.length - o548, length);
            o73(o85 >= 0);
            if (o85 > 8 && o524.subarray) { // non-trivial, and typed array
                buffer.set(o524.subarray(o548, o548 + o85), o107);
            } else {
                for (var o82 = 0; o82 < o85; o82++) {
                    buffer[o107 + o82] = o524[o548 + o82];
                }
            }
            return o85;
        },
        write: function (o477, buffer, o107, length, o548, o549) {
            var o479 = o477.o479;
            o479.o489 = Date.o4();
            var o524 = o479.o524;
            if (length && o524.length === 0 && o548 === 0 && buffer.subarray) {
                // just replace it with the new data
                if (o549 && o107 === 0) {
                    o479.o524 = buffer; // this could be a subarray of Emscripten HEAP, or allocated from some other source.
                    o479.o526 = (buffer.buffer === o200.buffer) ? o495.o497 : o495.o499;
                } else {
                    o479.o524 = new Uint8Array(buffer.subarray(o107, o107 + length));
                    o479.o526 = o495.o499;
                }
                return length;
            }
            o495.o529(o479);
            var o524 = o479.o524;
            while (o524.length < o548) o524.push(0);
            for (var o82 = 0; o82 < length; o82++) {
                o524[o548 + o82] = buffer[o107 + o82];
            }
            return length;
        },
        o517: function (o477, o107, o550) {
            var o548 = o107;
            if (o550 === 1) { // SEEK_CUR.
                o548 += o477.o548;
            } else if (o550 === 2) { // SEEK_END.
                if (o474.o525(o477.o479.o503)) {
                    o548 += o477.o479.o524.length;
                }
            }
            if (o548 < 0) {
                throw new o474.o481(o341.o364);
            }
            o477.o551 = [];
            o477.o548 = o548;
            return o548;
        },
        o215: function (o477, o107, length) {
            o495.o529(o477.o479);
            var o524 = o477.o479.o524;
            var o252 = o107 + length;
            while (o252 > o524.length) o524.push(0);
        },
        o519: function (o477, buffer, o107, length, o548, o552, flags) {
            if (!o474.o525(o477.o479.o503)) {
                throw new o474.o481(o341.o361);
            }
            var o114;
            var o553;
            var o524 = o477.o479.o524;
            // Only make a new copy when MAP_PRIVATE is specified.
            if (!(flags & 2) &&
                (o524.buffer === buffer || o524.buffer === buffer.buffer)) {
                // We can't emulate MAP_SHARED when the file is not backed by the buffer
                // we're mapping to (e.g. the HEAP buffer).
                o553 = false;
                o114 = o524.byteOffset;
            } else {
                // Try to avoid unnecessary slices.
                if (o548 > 0 || o548 + length < o524.length) {
                    if (o524.subarray) {
                        o524 = o524.subarray(o548, o548 + length);
                    } else {
                        o524 = Array.prototype.slice.call(o524, o548, o548 + length);
                    }
                }
                o553 = true;
                o114 = o220(length);
                if (!o114) {
                    throw new o474.o481(o341.o354);
                }
                buffer.set(o524, o114);
            }
            return {
                o114: o114,
                o553: o553
            };
        }
    }
};

var o554 = {
    o555: {},
    o556: function () {
        return o19.o556 || o19.o557 || o19.o558 || o19.o559;
    },
    o560: 21,
    o561: "FILE_DATA",
    o500: function (o500) {
        // reuse all of the core MEMFS functionality
        return o495.o500.apply(null, arguments);
    },
    o562: function (o500, o563, o278) {
        o554.o564(o500, function (o565, o566) {
            if (o565) return o278(o565);

            o554.o567(o500, function (o565, o568) {
                if (o565) return o278(o565);

                var o569 = o563 ? o568 : o566;
                var o570 = o563 ? o566 : o568;

                o554.o571(o569, o570, o278);
            });
        });
    },
    o572: function (name, o278) {
        // check the cache first
        var o573 = o554.o555[name];
        if (o573) {
            return o278(null, o573);
        }

        var o574;
        try {
            o574 = o554.o556().o41(name, o554.o560);
        } catch (o189) {
            return o278(o189);
        }
        o574.o575 = function (o189) {
            var o573 = o189.target.o488;
            var o576 = o189.target.o576;

            var o577;

            if (o573.o578.o579(o554.o561)) {
                o577 = o576.o580(o554.o561);
            } else {
                o577 = o573.o581(o554.o561);
            }

            o577.o582('timestamp', 'timestamp', {
                o583: false
            });
        };
        o574.o584 = function () {
            o573 = o574.o488;

            // add to the cache
            o554.o555[name] = o573;
            o278(null, o573);
        };
        o574.o585 = function () {
            o278(this.o586);
        };
    },
    o564: function (o500, o278) {
        var entries = {};

        function o587(o588) {
            return o588 !== '.' && o588 !== '..';
        };

        function o589(o590) {
            return function (o588) {
                return o591.o592(o590, o588);
            }
        };

        var o593 = o474.o515(o500.o594).filter(o587).map(o589(o500.o594));

        while (o593.length) {
            var o31 = o593.pop();
            var o595;

            try {
                o595 = o474.o595(o31);
            } catch (o189) {
                return o278(o189);
            }

            if (o474.o523(o595.o503)) {
                o593.push.apply(o593, o474.o515(o31).filter(o587).map(o589(o31)));
            }

            entries[o31] = {
                o489: o595.o536
            };
        }

        return o278(null, {
            type: 'local',
            entries: entries
        });
    },
    o567: function (o500, o278) {
        var entries = {};

        o554.o572(o500.o594, function (o565, o573) {
            if (o565) return o278(o565);

            var o576 = o573.o576([o554.o561], 'readonly');
            o576.o585 = function () {
                o278(this.o586);
            };

            var o596 = o576.o580(o554.o561);
            var index = o596.index('timestamp');

            index.o597().o584 = function (o598) {
                var o599 = o598.target.o488;

                if (!o599) {
                    return o278(null, {
                        type: 'remote',
                        o573: o573,
                        entries: entries
                    });
                }

                entries[o599.o600] = {
                    o489: o599.key
                };

                o599.o601();
            };
        });
    },
    o602: function (o31, o278) {
        var o595, o479;

        try {
            var o510 = o474.o603(o31);
            o479 = o510.o479;
            o595 = o474.o595(o31);
        } catch (o189) {
            return o278(o189);
        }

        if (o474.o523(o595.o503)) {
            return o278(null, {
                o489: o595.o536,
                o503: o595.o503
            });
        } else if (o474.o525(o595.o503)) {
            return o278(null, {
                o489: o595.o536,
                o503: o595.o503,
                o524: o479.o524
            });
        } else {
            return o278(new Error('node type not supported'));
        }
    },
    o604: function (o31, o605, o278) {
        try {
            if (o474.o523(o605.o503)) {
                o474.o606(o31, o605.o503);
            } else if (o474.o525(o605.o503)) {
                o474.o607(o31, o605.o524, {
                    o608: 'binary',
                    o549: true
                });
            } else {
                return o278(new Error('node type not supported'));
            }

            o474.o609(o31, o605.o489, o605.o489);
        } catch (o189) {
            return o278(o189);
        }

        o278(null);
    },
    o610: function (o31, o278) {
        try {
            var o510 = o474.o603(o31);
            var o595 = o474.o595(o31);

            if (o474.o523(o595.o503)) {
                o474.o514(o31);
            } else if (o474.o525(o595.o503)) {
                o474.o513(o31);
            }
        } catch (o189) {
            return o278(o189);
        }

        o278(null);
    },
    o611: function (o596, o31, o278) {
        var o574 = o596.get(o31);
        o574.o584 = function (o598) {
            o278(null, o598.target.o488);
        };
        o574.o585 = function () {
            o278(this.o586);
        };
    },
    o612: function (o596, o31, o605, o278) {
        var o574 = o596.o613(o605, o31);
        o574.o584 = function () {
            o278(null);
        };
        o574.o585 = function () {
            o278(this.o586);
        };
    },
    o614: function (o596, o31, o278) {
        var o574 = o596.o615(o31);
        o574.o584 = function () {
            o278(null);
        };
        o574.o585 = function () {
            o278(this.o586);
        };
    },
    o571: function (o569, o570, o278) {
        var o616 = 0;

        var create = [];
        Object.keys(o569.entries).forEach(function (key) {
            var o189 = o569.entries[key];
            var o617 = o570.entries[key];
            if (!o617 || o189.o489 > o617.o489) {
                create.push(key);
                o616++;
            }
        });

        var o618 = [];
        Object.keys(o570.entries).forEach(function (key) {
            var o189 = o570.entries[key];
            var o617 = o569.entries[key];
            if (!o617) {
                o618.push(key);
                o616++;
            }
        });

        if (!o616) {
            return o278(null);
        }

        var o619 = false;
        var o620 = 0;
        var o573 = o569.type === 'remote' ? o569.o573 : o570.o573;
        var o576 = o573.o576([o554.o561], 'readwrite');
        var o596 = o576.o580(o554.o561);

        function done(o565) {
            if (o565) {
                if (!done.o619) {
                    done.o619 = true;
                    return o278(o565);
                }
                return;
            }
            if (++o620 >= o616) {
                return o278(null);
            }
        };

        o576.o585 = function () {
            done(this.o586);
        };

        // sort paths in ascending order so directory entries are created
        // before the files inside them
        create.sort().forEach(function (o31) {
            if (o570.type === 'local') {
                o554.o611(o596, o31, function (o565, o605) {
                    if (o565) return done(o565);
                    o554.o604(o31, o605, done);
                });
            } else {
                o554.o602(o31, function (o565, o605) {
                    if (o565) return done(o565);
                    o554.o612(o596, o31, o605, done);
                });
            }
        });

        // sort paths in descending order so files are deleted before their
        // parent directories
        o618.sort().reverse().forEach(function (o31) {
            if (o570.type === 'local') {
                o554.o610(o31, done);
            } else {
                o554.o614(o596, o31, done);
            }
        });
    }
};

var o621 = {
    o622: false,
    o623: function () {
        o621.o622 = !!o17.o624.match(/^win/);
    },
    o500: function (o500) {
        o73(o16);
        return o621.o501(null, '/', o621.o625(o500.o626.o590), 0);
    },
    o501: function (o502, name, o503, o471) {
        if (!o474.o523(o503) && !o474.o525(o503) && !o474.o527(o503)) {
            throw new o474.o481(o341.o364);
        }
        var o479 = o474.o501(o502, name, o503);
        o479.o508 = o621.o508;
        o479.o476 = o621.o476;
        return o479;
    },
    o625: function (o31) {
        var o595;
        try {
            o595 = o627.o628(o31);
            if (o621.o622) {
                // On Windows, directories return permission bits 'rw-rw-rw-', even though they have 'rwxrwxrwx', so 
                // propagate write bits to execute bits.
                o595.o503 = o595.o503 | ((o595.o503 & 146) >> 1);
            }
        } catch (o189) {
            if (!o189.o119) throw o189;
            throw new o474.o481(o341[o189.o119]);
        }
        return o595.o503;
    },
    o629: function (o479) {
        var o249 = [];
        while (o479.o502 !== o479) {
            o249.push(o479.name);
            o479 = o479.o502;
        }
        o249.push(o479.o500.o626.o590);
        o249.reverse();
        return o591.join.apply(null, o249);
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
        if (flags in o621.o630) {
            return o621.o630[flags];
        } else {
            return flags;
        }
    },
    o508: {
        o507: function (o479) {
            var o31 = o621.o629(o479);
            var o595;
            try {
                o595 = o627.o628(o31);
            } catch (o189) {
                if (!o189.o119) throw o189;
                throw new o474.o481(o341[o189.o119]);
            }
            // node.js v0.10.20 doesn't report blksize and blocks on Windows. Fake them with default blksize of 4096.
            // See http://support.microsoft.com/kb/140365
            if (o621.o622 && !o595.o538) {
                o595.o538 = 4096;
            }
            if (o621.o622 && !o595.o539) {
                o595.o539 = (o595.o85 + o595.o538 - 1) / o595.o538 | 0;
            }
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
        },
        o509: function (o479, o530) {
            var o31 = o621.o629(o479);
            try {
                if (o530.o503 !== undefined) {
                    o627.o632(o31, o530.o503);
                    // update the common node structure mode as well
                    o479.o503 = o530.o503;
                }
                if (o530.o489 !== undefined) {
                    var o633 = new Date(o530.o489);
                    o627.o634(o31, o633, o633);
                }
                if (o530.o85 !== undefined) {
                    o627.o635(o31, o530.o85);
                }
            } catch (o189) {
                if (!o189.o119) throw o189;
                throw new o474.o481(o341[o189.o119]);
            }
        },
        o510: function (o502, name) {
            var o31 = o591.o592(o621.o629(o502), name);
            var o503 = o621.o625(o31);
            return o621.o501(o502, name, o503);
        },
        o511: function (o502, name, o503, o471) {
            var o479 = o621.o501(o502, name, o503, o471);
            // create the backing node for this in the fs root as well
            var o31 = o621.o629(o479);
            try {
                if (o474.o523(o479.o503)) {
                    o627.o636(o31, o479.o503);
                } else {
                    o627.o637(o31, '', {
                        o503: o479.o503
                    });
                }
            } catch (o189) {
                if (!o189.o119) throw o189;
                throw new o474.o481(o341[o189.o119]);
            }
            return o479;
        },
        o512: function (o638, o639, o640) {
            var o641 = o621.o629(o638);
            var o642 = o591.o592(o621.o629(o639), o640);
            try {
                o627.o643(o641, o642);
            } catch (o189) {
                if (!o189.o119) throw o189;
                throw new o474.o481(o341[o189.o119]);
            }
        },
        o513: function (o502, name) {
            var o31 = o591.o592(o621.o629(o502), name);
            try {
                o627.o644(o31);
            } catch (o189) {
                if (!o189.o119) throw o189;
                throw new o474.o481(o341[o189.o119]);
            }
        },
        o514: function (o502, name) {
            var o31 = o591.o592(o621.o629(o502), name);
            try {
                o627.o645(o31);
            } catch (o189) {
                if (!o189.o119) throw o189;
                throw new o474.o481(o341[o189.o119]);
            }
        },
        o515: function (o479) {
            var o31 = o621.o629(o479);
            try {
                return o627.o646(o31);
            } catch (o189) {
                if (!o189.o119) throw o189;
                throw new o474.o481(o341[o189.o119]);
            }
        },
        o516: function (o502, o640, o641) {
            var o642 = o591.o592(o621.o629(o502), o640);
            try {
                o627.o647(o641, o642);
            } catch (o189) {
                if (!o189.o119) throw o189;
                throw new o474.o481(o341[o189.o119]);
            }
        },
        o520: function (o479) {
            var o31 = o621.o629(o479);
            try {
                return o627.o648(o31);
            } catch (o189) {
                if (!o189.o119) throw o189;
                throw new o474.o481(o341[o189.o119]);
            }
        }
    },
    o476: {
        o41: function (o477) {
            var o31 = o621.o629(o477.o479);
            try {
                if (o474.o525(o477.o479.o503)) {
                    o477.o649 = o627.o650(o31, o621.o631(o477.flags));
                }
            } catch (o189) {
                if (!o189.o119) throw o189;
                throw new o474.o481(o341[o189.o119]);
            }
        },
        o483: function (o477) {
            try {
                if (o474.o525(o477.o479.o503) && o477.o649) {
                    o627.o651(o477.o649);
                }
            } catch (o189) {
                if (!o189.o119) throw o189;
                throw new o474.o481(o341[o189.o119]);
            }
        },
        o27: function (o477, buffer, o107, length, o548) {
            // FIXME this is terrible.
            var o652 = new o653(length);
            var o654;
            try {
                o654 = o627.o655(o477.o649, o652, 0, length, o548);
            } catch (o189) {
                throw new o474.o481(o341[o189.o119]);
            }
            if (o654 > 0) {
                for (var o82 = 0; o82 < o654; o82++) {
                    buffer[o107 + o82] = o652[o82];
                }
            }
            return o654;
        },
        write: function (o477, buffer, o107, length, o548) {
            // FIXME this is terrible.
            var o652 = new o653(buffer.subarray(o107, o107 + length));
            var o654;
            try {
                o654 = o627.o656(o477.o649, o652, 0, length, o548);
            } catch (o189) {
                throw new o474.o481(o341[o189.o119]);
            }
            return o654;
        },
        o517: function (o477, o107, o550) {
            var o548 = o107;
            if (o550 === 1) { // SEEK_CUR.
                o548 += o477.o548;
            } else if (o550 === 2) { // SEEK_END.
                if (o474.o525(o477.o479.o503)) {
                    try {
                        var o595 = o627.o657(o477.o649);
                        o548 += o595.o85;
                    } catch (o189) {
                        throw new o474.o481(o341[o189.o119]);
                    }
                }
            }

            if (o548 < 0) {
                throw new o474.o481(o341.o364);
            }

            o477.o548 = o548;
            return o548;
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
        if (!(o189 instanceof o474.o481)) throw o189 + ' : ' + o262();
        return o465(o189.o671);
    },
    o603: function (o31, o626) {
        o31 = o591.resolve(o474.o672(), o31);
        o626 = o626 || {};

        var o673 = {
            o674: true,
            o675: 0
        };
        for (var key in o673) {
            if (o626[key] === undefined) {
                o626[key] = o673[key];
            }
        }

        if (o626.o675 > 8) { // max recursive lookup of 8
            throw new o474.o481(o341.o423);
        }

        // split the path
        var o249 = o591.o676(o31.split('/').filter(function (o588) {
            return !!o588;
        }), false);

        // start at the root
        var o677 = o474.o590;
        var o678 = '/';

        for (var o82 = 0; o82 < o249.length; o82++) {
            var o679 = (o82 === o249.length - 1);
            if (o679 && o626.o502) {
                // stop resolving
                break;
            }

            o677 = o474.o545(o677, o249[o82]);
            o678 = o591.o592(o678, o249[o82]);

            // jump to the mount's root node if this is a mountpoint
            if (o474.o680(o677)) {
                if (!o679 || (o679 && o626.o674)) {
                    o677 = o677.o681.o590;
                }
            }

            // by default, lookupPath will not follow a symlink if it is the final path component.
            // setting opts.follow = true will override this behavior.
            if (!o679 || o626.o682) {
                var o683 = 0;
                while (o474.o527(o677.o503)) {
                    var link = o474.o520(o678);
                    o678 = o591.resolve(o591.o684(o678), link);

                    var o510 = o474.o603(o678, {
                        o675: o626.o675
                    });
                    o677 = o510.o479;

                    if (o683++ > 40) { // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                        throw new o474.o481(o341.o423);
                    }
                }
            }
        }

        return {
            o31: o678,
            o479: o677
        };
    },
    o685: function (o479) {
        var o31;
        while (true) {
            if (o474.o686(o479)) {
                var o500 = o479.o500.o594;
                if (!o31) return o500;
                return o500[o500.length - 1] !== '/' ? o500 + '/' + o31 : o500 + o31;
            }
            o31 = o31 ? o479.name + '/' + o31 : o479.name;
            o479 = o479.o502;
        }
    },
    o687: function (o688, name) {
        var o689 = 0;


        for (var o82 = 0; o82 < name.length; o82++) {
            o689 = ((o689 << 5) - o689 + name.charCodeAt(o82)) | 0;
        }
        return ((o688 + o689) >>> 0) % o474.o666.length;
    },
    o690: function (o479) {
        var o689 = o474.o687(o479.o502.o333, o479.name);
        o479.o691 = o474.o666[o689];
        o474.o666[o689] = o479;
    },
    o692: function (o479) {
        var o689 = o474.o687(o479.o502.o333, o479.name);
        if (o474.o666[o689] === o479) {
            o474.o666[o689] = o479.o691;
        } else {
            var o677 = o474.o666[o689];
            while (o677) {
                if (o677.o691 === o479) {
                    o677.o691 = o479.o691;
                    break;
                }
                o677 = o677.o691;
            }
        }
    },
    o545: function (o502, name) {
        var o565 = o474.o693(o502);
        if (o565) {
            throw new o474.o481(o565);
        }
        var o689 = o474.o687(o502.o333, name);
        for (var o479 = o474.o666[o689]; o479; o479 = o479.o691) {
            var o694 = o479.name;
            if (o479.o502.o333 === o502.o333 && o694 === name) {
                return o479;
            }
        }
        // if we failed to find it in the cache, call into the VFS
        return o474.o510(o502, name);
    },
    o501: function (o502, name, o503, o480) {
        if (!o474.o695) {
            o474.o695 = function (o502, name, o503, o480) {
                if (!o502) {
                    o502 = this; // root node sets parent to itself
                }
                this.o502 = o502;
                this.o500 = o502.o500;
                this.o681 = null;
                this.o333 = o474.o665++;
                this.name = name;
                this.o503 = o503;
                this.o508 = {};
                this.o476 = {};
                this.o480 = o480;
            };

            o474.o695.prototype = {};

            // compatibility
            var o696 = 292 | 73;
            var o697 = 146;

            // NOTE we must use Object.defineProperties instead of individual calls to
            // Object.defineProperty in order to make closure compiler happy
            Object.defineProperties(o474.o695.prototype, {
                o27: {
                    get: function () {
                        return (this.o503 & o696) === o696;
                    },
                    set: function (o493) {
                        o493 ? this.o503 |= o696 : this.o503 &= ~o696;
                    }
                },
                write: {
                    get: function () {
                        return (this.o503 & o697) === o697;
                    },
                    set: function (o493) {
                        o493 ? this.o503 |= o697 : this.o503 &= ~o697;
                    }
                },
                o698: {
                    get: function () {
                        return o474.o523(this.o503);
                    },
                },
                o699: {
                    get: function () {
                        return o474.o528(this.o503);
                    },
                },
            });
        }

        var o479 = new o474.o695(o502, name, o503, o480);

        o474.o690(o479);

        return o479;
    },
    o700: function (o479) {
        o474.o692(o479);
    },
    o686: function (o479) {
        return o479 === o479.o502;
    },
    o680: function (o479) {
        return !!o479.o681;
    },
    o525: function (o503) {
        return (o503 & 61440) === 32768;
    },
    o523: function (o503) {
        return (o503 & 61440) === 16384;
    },
    o527: function (o503) {
        return (o503 & 61440) === 40960;
    },
    o528: function (o503) {
        return (o503 & 61440) === 8192;
    },
    o504: function (o503) {
        return (o503 & 61440) === 24576;
    },
    o505: function (o503) {
        return (o503 & 61440) === 4096;
    },
    o701: function (o503) {
        return (o503 & 49152) === 49152;
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
        if (typeof flags === 'undefined') {
            throw new Error('Unknown file open mode: ' + o231);
        }
        return flags;
    },
    o631: function (o704) {
        var o705 = o704 & 2097155;
        var o706 = ['r', 'w', 'rw'][o705];
        if ((o704 & 512)) {
            o706 += 'w';
        }
        return o706;
    },
    o707: function (o479, o706) {
        if (o474.o669) {
            return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (o706.indexOf('r') !== -1 && !(o479.o503 & 292)) {
            return o341.o355;
        } else if (o706.indexOf('w') !== -1 && !(o479.o503 & 146)) {
            return o341.o355;
        } else if (o706.indexOf('x') !== -1 && !(o479.o503 & 73)) {
            return o341.o355;
        }
        return 0;
    },
    o693: function (o506) {
        return o474.o707(o506, 'x');
    },
    o708: function (o506, name) {
        try {
            var o479 = o474.o545(o506, name);
            return o341.o359;
        } catch (o189) {}
        return o474.o707(o506, 'wx');
    },
    o709: function (o506, name, o710) {
        var o479;
        try {
            o479 = o474.o545(o506, name);
        } catch (o189) {
            return o189.o671;
        }
        var o565 = o474.o707(o506, 'wx');
        if (o565) {
            return o565;
        }
        if (o710) {
            if (!o474.o523(o479.o503)) {
                return o341.o362;
            }
            if (o474.o686(o479) || o474.o685(o479) === o474.o672()) {
                return o341.o358;
            }
        } else {
            if (o474.o523(o479.o503)) {
                return o341.o363;
            }
        }
        return 0;
    },
    o711: function (o479, flags) {
        if (!o479) {
            return o341.o343;
        }
        if (o474.o527(o479.o503)) {
            return o341.o423;
        } else if (o474.o523(o479.o503)) {
            if ((flags & 2097155) !== 0 || // opening for write
                (flags & 512)) {
                return o341.o363;
            }
        }
        return o474.o707(o479, o474.o631(flags));
    },
    o712: 4096,
    o713: function (o714, o715) {
        o714 = o714 || 0;
        o715 = o715 || o474.o712;
        for (var o716 = o714; o716 <= o715; o716++) {
            if (!o474.o664[o716]) {
                return o716;
            }
        }
        throw new o474.o481(o341.o366);
    },
    o717: function (o716) {
        return o474.o664[o716];
    },
    o718: function (o477, o714, o715) {
        if (!o474.o719) {
            o474.o719 = function () {};
            o474.o719.prototype = {};
            // compatibility
            Object.defineProperties(o474.o719.prototype, {
                o720: {
                    get: function () {
                        return this.o479;
                    },
                    set: function (o493) {
                        this.o479 = o493;
                    }
                },
                o721: {
                    get: function () {
                        return (this.flags & 2097155) !== 1;
                    }
                },
                o722: {
                    get: function () {
                        return (this.flags & 2097155) !== 0;
                    }
                },
                o723: {
                    get: function () {
                        return (this.flags & 1024);
                    }
                }
            });
        }
        if (o477.__proto__) {
            // reuse the object
            o477.__proto__ = o474.o719.prototype;
        } else {
            var o724 = new o474.o719();
            for (var o588 in o477) {
                o724[o588] = o477[o588];
            }
            o477 = o724;
        }
        var o716 = o474.o713(o714, o715);
        o477.o716 = o716;
        o474.o664[o716] = o477;
        return o477;
    },
    o725: function (o716) {
        o474.o664[o716] = null;
    },
    o726: function (o114) {
        return o474.o664[o114 - 1];
    },
    o727: function (o477) {
        return o477 ? o477.o716 + 1 : 0;
    },
    o522: {
        o41: function (o477) {
            var o728 = o474.o729(o477.o479.o480);
            // override node's stream ops with the device's
            o477.o476 = o728.o476;
            // forward the open call
            if (o477.o476.o41) {
                o477.o476.o41(o477);
            }
        },
        o517: function () {
            throw new o474.o481(o341.o371);
        }
    },
    o730: function (o471) {
        return ((o471) >> 8);
    },
    o731: function (o471) {
        return ((o471) & 0xff);
    },
    o732: function (o733, o734) {
        return ((o733) << 8 | (o734));
    },
    o475: function (o471, o472) {
        o474.o663[o471] = {
            o476: o472
        };
    },
    o729: function (o471) {
        return o474.o663[o471];
    },
    o735: function (o500) {
        var o662 = [];
        var o593 = [o500];

        while (o593.length) {
            var o736 = o593.pop();

            o662.push(o736);

            o593.push.apply(o593, o736.o662);
        }

        return o662;
    },
    o562: function (o563, o278) {
        if (typeof (o563) === 'function') {
            o278 = o563;
            o563 = false;
        }

        var o662 = o474.o735(o474.o590.o500);
        var o620 = 0;

        function done(o565) {
            if (o565) {
                if (!done.o619) {
                    done.o619 = true;
                    return o278(o565);
                }
                return;
            }
            if (++o620 >= o662.length) {
                o278(null);
            }
        };

        // sync all mounts
        o662.forEach(function (o500) {
            if (!o500.type.o562) {
                return done(null);
            }
            o500.type.o562(o500, o563, done);
        });
    },
    o500: function (type, o626, o594) {
        var o590 = o594 === '/';
        var o737 = !o594;
        var o479;

        if (o590 && o474.o590) {
            throw new o474.o481(o341.o358);
        } else if (!o590 && !o737) {
            var o510 = o474.o603(o594, {
                o674: false
            });

            o594 = o510.o31; // use the absolute path
            o479 = o510.o479;

            if (o474.o680(o479)) {
                throw new o474.o481(o341.o358);
            }

            if (!o474.o523(o479.o503)) {
                throw new o474.o481(o341.o362);
            }
        }

        var o500 = {
            type: type,
            o626: o626,
            o594: o594,
            o662: []
        };

        // create a root node for the fs
        var o738 = type.o500(o500);
        o738.o500 = o500;
        o500.o590 = o738;

        if (o590) {
            o474.o590 = o738;
        } else if (o479) {
            // set as a mountpoint
            o479.o681 = o500;

            // add the new mount to the current mount's children
            if (o479.o500) {
                o479.o500.o662.push(o500);
            }
        }

        return o738;
    },
    o739: function (o594) {
        var o510 = o474.o603(o594, {
            o674: false
        });

        if (!o474.o680(o510.o479)) {
            throw new o474.o481(o341.o364);
        }

        // destroy the nodes for this mount, and all its child mounts
        var o479 = o510.o479;
        var o500 = o479.o681;
        var o662 = o474.o735(o500);

        Object.keys(o474.o666).forEach(function (o689) {
            var o677 = o474.o666[o689];

            while (o677) {
                var next = o677.o691;

                if (o662.indexOf(o677.o500) !== -1) {
                    o474.o700(o677);
                }

                o677 = next;
            }
        });

        // no longer a mountpoint
        o479.o681 = null;

        // remove this mount from the child mounts
        var o740 = o479.o500.o662.indexOf(o500);
        o73(o740 !== -1);
        o479.o500.o662.splice(o740, 1);
    },
    o510: function (o502, name) {
        return o502.o508.o510(o502, name);
    },
    o511: function (o31, o503, o471) {
        var o510 = o474.o603(o31, {
            o502: true
        });
        var o502 = o510.o479;
        var name = o591.o741(o31);
        var o565 = o474.o708(o502, name);
        if (o565) {
            throw new o474.o481(o565);
        }
        if (!o502.o508.o511) {
            throw new o474.o481(o341.o342);
        }
        return o502.o508.o511(o502, name, o503, o471);
    },
    create: function (o31, o503) {
        o503 = o503 !== undefined ? o503 : 438 /* 0666 */ ;
        o503 &= 4095;
        o503 |= 32768;
        return o474.o511(o31, o503, 0);
    },
    o606: function (o31, o503) {
        o503 = o503 !== undefined ? o503 : 511 /* 0777 */ ;
        o503 &= 511 | 512;
        o503 |= 16384;
        return o474.o511(o31, o503, 0);
    },
    o742: function (o31, o503, o471) {
        if (typeof (o471) === 'undefined') {
            o471 = o503;
            o503 = 438 /* 0666 */ ;
        }
        o503 |= 8192;
        return o474.o511(o31, o503, o471);
    },
    o516: function (o547, o743) {
        var o510 = o474.o603(o743, {
            o502: true
        });
        var o502 = o510.o479;
        var o546 = o591.o741(o743);
        var o565 = o474.o708(o502, o546);
        if (o565) {
            throw new o474.o481(o565);
        }
        if (!o502.o508.o516) {
            throw new o474.o481(o341.o342);
        }
        return o502.o508.o516(o502, o546, o547);
    },
    o512: function (o744, o745) {
        var o746 = o591.o684(o744);
        var o747 = o591.o684(o745);
        var o748 = o591.o741(o744);
        var o543 = o591.o741(o745);
        // parents must exist
        var o510, o749, o542;
        try {
            o510 = o474.o603(o744, {
                o502: true
            });
            o749 = o510.o479;
            o510 = o474.o603(o745, {
                o502: true
            });
            o542 = o510.o479;
        } catch (o189) {
            throw new o474.o481(o341.o358);
        }
        // need to be part of the same mount
        if (o749.o500 !== o542.o500) {
            throw new o474.o481(o341.o360);
        }
        // source must exist
        var o541 = o474.o545(o749, o748);
        // old path should not be an ancestor of the new path
        var o750 = o591.o750(o744, o747);
        if (o750.charAt(0) !== '.') {
            throw new o474.o481(o341.o364);
        }
        // new path should not be an ancestor of the old path
        o750 = o591.o750(o745, o746);
        if (o750.charAt(0) !== '.') {
            throw new o474.o481(o341.o421);
        }
        // see if the new path already exists
        var o544;
        try {
            o544 = o474.o545(o542, o543);
        } catch (o189) {
            // not fatal
        }
        // early out if nothing needs to change
        if (o541 === o544) {
            return;
        }
        // we'll need to delete the old entry
        var o710 = o474.o523(o541.o503);
        var o565 = o474.o709(o749, o748, o710);
        if (o565) {
            throw new o474.o481(o565);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        o565 = o544 ?
            o474.o709(o542, o543, o710) :
            o474.o708(o542, o543);
        if (o565) {
            throw new o474.o481(o565);
        }
        if (!o749.o508.o512) {
            throw new o474.o481(o341.o342);
        }
        if (o474.o680(o541) || (o544 && o474.o680(o544))) {
            throw new o474.o481(o341.o358);
        }
        // if we are going to change the parent, check write permissions
        if (o542 !== o749) {
            o565 = o474.o707(o749, 'w');
            if (o565) {
                throw new o474.o481(o565);
            }
        }
        // remove the node from the lookup hash
        o474.o692(o541);
        // do the underlying fs rename
        try {
            o749.o508.o512(o541, o542, o543);
        } catch (o189) {
            throw o189;
        } finally {
            // add the node back to the hash (in case node_ops.rename
            // changed its name)
            o474.o690(o541);
        }
    },
    o514: function (o31) {
        var o510 = o474.o603(o31, {
            o502: true
        });
        var o502 = o510.o479;
        var name = o591.o741(o31);
        var o479 = o474.o545(o502, name);
        var o565 = o474.o709(o502, name, true);
        if (o565) {
            throw new o474.o481(o565);
        }
        if (!o502.o508.o514) {
            throw new o474.o481(o341.o342);
        }
        if (o474.o680(o479)) {
            throw new o474.o481(o341.o358);
        }
        o502.o508.o514(o502, name);
        o474.o700(o479);
    },
    o515: function (o31) {
        var o510 = o474.o603(o31, {
            o682: true
        });
        var o479 = o510.o479;
        if (!o479.o508.o515) {
            throw new o474.o481(o341.o362);
        }
        return o479.o508.o515(o479);
    },
    o513: function (o31) {
        var o510 = o474.o603(o31, {
            o502: true
        });
        var o502 = o510.o479;
        var name = o591.o741(o31);
        var o479 = o474.o545(o502, name);
        var o565 = o474.o709(o502, name, false);
        if (o565) {
            // POSIX says unlink should set EPERM, not EISDIR
            if (o565 === o341.o363) o565 = o341.o342;
            throw new o474.o481(o565);
        }
        if (!o502.o508.o513) {
            throw new o474.o481(o341.o342);
        }
        if (o474.o680(o479)) {
            throw new o474.o481(o341.o358);
        }
        o502.o508.o513(o502, name);
        o474.o700(o479);
    },
    o520: function (o31) {
        var o510 = o474.o603(o31);
        var link = o510.o479;
        if (!link.o508.o520) {
            throw new o474.o481(o341.o364);
        }
        return link.o508.o520(link);
    },
    o595: function (o31, o751) {
        var o510 = o474.o603(o31, {
            o682: !o751
        });
        var o479 = o510.o479;
        if (!o479.o508.o507) {
            throw new o474.o481(o341.o342);
        }
        return o479.o508.o507(o479);
    },
    o752: function (o31) {
        return o474.o595(o31, true);
    },
    o753: function (o31, o503, o751) {
        var o479;
        if (typeof o31 === 'string') {
            var o510 = o474.o603(o31, {
                o682: !o751
            });
            o479 = o510.o479;
        } else {
            o479 = o31;
        }
        if (!o479.o508.o509) {
            throw new o474.o481(o341.o342);
        }
        o479.o508.o509(o479, {
            o503: (o503 & 4095) | (o479.o503 & ~4095),
            o489: Date.o4()
        });
    },
    o754: function (o31, o503) {
        o474.o753(o31, o503, true);
    },
    o755: function (o716, o503) {
        var o477 = o474.o717(o716);
        if (!o477) {
            throw new o474.o481(o341.o350);
        }
        o474.o753(o477.o479, o503);
    },
    o756: function (o31, o533, o534, o751) {
        var o479;
        if (typeof o31 === 'string') {
            var o510 = o474.o603(o31, {
                o682: !o751
            });
            o479 = o510.o479;
        } else {
            o479 = o31;
        }
        if (!o479.o508.o509) {
            throw new o474.o481(o341.o342);
        }
        o479.o508.o509(o479, {
            o489: Date.o4()
            // we ignore the uid / gid for now
        });
    },
    o757: function (o31, o533, o534) {
        o474.o756(o31, o533, o534, true);
    },
    o758: function (o716, o533, o534) {
        var o477 = o474.o717(o716);
        if (!o477) {
            throw new o474.o481(o341.o350);
        }
        o474.o756(o477.o479, o533, o534);
    },
    o759: function (o31, o760) {
        if (o760 < 0) {
            throw new o474.o481(o341.o364);
        }
        var o479;
        if (typeof o31 === 'string') {
            var o510 = o474.o603(o31, {
                o682: true
            });
            o479 = o510.o479;
        } else {
            o479 = o31;
        }
        if (!o479.o508.o509) {
            throw new o474.o481(o341.o342);
        }
        if (o474.o523(o479.o503)) {
            throw new o474.o481(o341.o363);
        }
        if (!o474.o525(o479.o503)) {
            throw new o474.o481(o341.o364);
        }
        var o565 = o474.o707(o479, 'w');
        if (o565) {
            throw new o474.o481(o565);
        }
        o479.o508.o509(o479, {
            o85: o760,
            o489: Date.o4()
        });
    },
    o761: function (o716, o760) {
        var o477 = o474.o717(o716);
        if (!o477) {
            throw new o474.o481(o341.o350);
        }
        if ((o477.flags & 2097155) === 0) {
            throw new o474.o481(o341.o364);
        }
        o474.o759(o477.o479, o760);
    },
    o609: function (o31, o535, o536) {
        var o510 = o474.o603(o31, {
            o682: true
        });
        var o479 = o510.o479;
        o479.o508.o509(o479, {
            o489: Math.o75(o535, o536)
        });
    },
    o41: function (o31, flags, o503, o714, o715) {
        flags = typeof flags === 'string' ? o474.o703(flags) : flags;
        o503 = typeof o503 === 'undefined' ? 438 /* 0666 */ : o503;
        if ((flags & 64)) {
            o503 = (o503 & 4095) | 32768;
        } else {
            o503 = 0;
        }
        var o479;
        if (typeof o31 === 'object') {
            o479 = o31;
        } else {
            o31 = o591.normalize(o31);
            try {
                var o510 = o474.o603(o31, {
                    o682: !(flags & 131072)
                });
                o479 = o510.o479;
            } catch (o189) {
                // ignore
            }
        }
        // perhaps we need to create the node
        if ((flags & 64)) {
            if (o479) {
                // if O_CREAT and O_EXCL are set, error out if the node already exists
                if ((flags & 128)) {
                    throw new o474.o481(o341.o359);
                }
            } else {
                // node doesn't exist, try to create it
                o479 = o474.o511(o31, o503, 0);
            }
        }
        if (!o479) {
            throw new o474.o481(o341.o343);
        }
        // can't truncate a device
        if (o474.o528(o479.o503)) {
            flags &= ~512;
        }
        // check permissions
        var o565 = o474.o711(o479, flags);
        if (o565) {
            throw new o474.o481(o565);
        }
        // do truncation if necessary
        if ((flags & 512)) {
            o474.o759(o479, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512);

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
        if (o477.o476.o41) {
            o477.o476.o41(o477);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
            if (!o474.o762) o474.o762 = {};
            if (!(o31 in o474.o762)) {
                o474.o762[o31] = 1;
                Module['printErr']('read file: ' + o31);
            }
        }
        return o477;
    },
    o483: function (o477) {
        try {
            if (o477.o476.o483) {
                o477.o476.o483(o477);
            }
        } catch (o189) {
            throw o189;
        } finally {
            o474.o725(o477.o716);
        }
    },
    o517: function (o477, o107, o550) {
        if (!o477.o482 || !o477.o476.o517) {
            throw new o474.o481(o341.o371);
        }
        return o477.o476.o517(o477, o107, o550);
    },
    o27: function (o477, buffer, o107, length, o548) {
        if (length < 0 || o548 < 0) {
            throw new o474.o481(o341.o364);
        }
        if ((o477.flags & 2097155) === 1) {
            throw new o474.o481(o341.o350);
        }
        if (o474.o523(o477.o479.o503)) {
            throw new o474.o481(o341.o363);
        }
        if (!o477.o476.o27) {
            throw new o474.o481(o341.o364);
        }
        var o763 = true;
        if (typeof o548 === 'undefined') {
            o548 = o477.o548;
            o763 = false;
        } else if (!o477.o482) {
            throw new o474.o481(o341.o371);
        }
        var o487 = o477.o476.o27(o477, buffer, o107, length, o548);
        if (!o763) o477.o548 += o487;
        return o487;
    },
    write: function (o477, buffer, o107, length, o548, o549) {
        if (length < 0 || o548 < 0) {
            throw new o474.o481(o341.o364);
        }
        if ((o477.flags & 2097155) === 0) {
            throw new o474.o481(o341.o350);
        }
        if (o474.o523(o477.o479.o503)) {
            throw new o474.o481(o341.o363);
        }
        if (!o477.o476.write) {
            throw new o474.o481(o341.o364);
        }
        var o763 = true;
        if (typeof o548 === 'undefined') {
            o548 = o477.o548;
            o763 = false;
        } else if (!o477.o482) {
            throw new o474.o481(o341.o371);
        }
        if (o477.flags & 1024) {
            // seek to the end before writing in append mode
            o474.o517(o477, 0, 2);
        }
        var o764 = o477.o476.write(o477, buffer, o107, length, o548, o549);
        if (!o763) o477.o548 += o764;
        return o764;
    },
    o215: function (o477, o107, length) {
        if (o107 < 0 || length <= 0) {
            throw new o474.o481(o341.o364);
        }
        if ((o477.flags & 2097155) === 0) {
            throw new o474.o481(o341.o350);
        }
        if (!o474.o525(o477.o479.o503) && !o474.o523(o479.o503)) {
            throw new o474.o481(o341.o361);
        }
        if (!o477.o476.o215) {
            throw new o474.o481(o341.o424);
        }
        o477.o476.o215(o477, o107, length);
    },
    o519: function (o477, buffer, o107, length, o548, o552, flags) {
        // TODO if PROT is PROT_WRITE, make sure we have write access
        if ((o477.flags & 2097155) === 1) {
            throw new o474.o481(o341.o355);
        }
        if (!o477.o476.o519) {
            throw new o474.o481(o341.o361);
        }
        return o477.o476.o519(o477, buffer, o107, length, o548, o552, flags);
    },
    o765: function (o477, o766, o196) {
        if (!o477.o476.o765) {
            throw new o474.o481(o341.o367);
        }
        return o477.o476.o765(o477, o766, o196);
    },
    o767: function (o31, o626) {
        o626 = o626 || {};
        o626.flags = o626.flags || 'r';
        o626.o608 = o626.o608 || 'binary';
        if (o626.o608 !== 'utf8' && o626.o608 !== 'binary') {
            throw new Error('Invalid encoding type "' + o626.o608 + '"');
        }
        var o30;
        var o477 = o474.o41(o31, o626.flags);
        var o595 = o474.o595(o31);
        var length = o595.o85;
        var o768 = new Uint8Array(length);
        o474.o27(o477, o768, 0, length, 0);
        if (o626.o608 === 'utf8') {
            o30 = '';
            var o229 = new o48.o129();
            for (var o82 = 0; o82 < length; o82++) {
                o30 += o229.o131(o768[o82]);
            }
        } else if (o626.o608 === 'binary') {
            o30 = o768;
        }
        o474.o483(o477);
        return o30;
    },
    o607: function (o31, o769, o626) {
        o626 = o626 || {};
        o626.flags = o626.flags || 'w';
        o626.o608 = o626.o608 || 'utf8';
        if (o626.o608 !== 'utf8' && o626.o608 !== 'binary') {
            throw new Error('Invalid encoding type "' + o626.o608 + '"');
        }
        var o477 = o474.o41(o31, o626.flags, o626.o503);
        if (o626.o608 === 'utf8') {
            var o229 = new o48.o129();
            var o768 = new Uint8Array(o229.o137(o769));
            o474.write(o477, o768, 0, o768.length, 0, o626.o549);
        } else if (o626.o608 === 'binary') {
            o474.write(o477, o769, 0, o769.length, 0, o626.o549);
        }
        o474.o483(o477);
    },
    o672: function () {
        return o474.o667;
    },
    o770: function (o31) {
        var o510 = o474.o603(o31, {
            o682: true
        });
        if (!o474.o523(o510.o479.o503)) {
            throw new o474.o481(o341.o362);
        }
        var o565 = o474.o707(o510.o479, 'x');
        if (o565) {
            throw new o474.o481(o565);
        }
        o474.o667 = o510.o31;
    },
    o771: function () {
        o474.o606('/tmp');
    },
    o772: function () {
        // create /dev
        o474.o606('/dev');
        // setup /dev/null
        o474.o475(o474.o732(1, 3), {
            o27: function () {
                return 0;
            },
            write: function () {
                return 0;
            }
        });
        o474.o742('/dev/null', o474.o732(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using Module['printErr']
        // so we register a second tty just for it.
        o466.o470(o474.o732(5, 0), o466.o490);
        o466.o470(o474.o732(6, 0), o466.o494);
        o474.o742('/dev/tty', o474.o732(5, 0));
        o474.o742('/dev/tty1', o474.o732(6, 0));
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        o474.o606('/dev/shm');
        o474.o606('/dev/shm/tmp');
    },
    o773: function () {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops

        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
            o474.o774('/dev', 'stdin', Module['stdin']);
        } else {
            o474.o516('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
            o474.o774('/dev', 'stdout', null, Module['stdout']);
        } else {
            o474.o516('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
            o474.o774('/dev', 'stderr', null, Module['stderr']);
        } else {
            o474.o516('/dev/tty1', '/dev/stderr');
        }

        // open default streams for the stdin, stdout and stderr devices
        var o775 = o474.o41('/dev/stdin', 'r');
        o202[((o658) >> 2)] = o474.o727(o775);
        o73(o775.o716 === 0, 'invalid handle for stdin (' + o775.o716 + ')');

        var o776 = o474.o41('/dev/stdout', 'w');
        o202[((o659) >> 2)] = o474.o727(o776);
        o73(o776.o716 === 1, 'invalid handle for stdout (' + o776.o716 + ')');

        var o777 = o474.o41('/dev/stderr', 'w');
        o202[((o660) >> 2)] = o474.o727(o777);
        o73(o777.o716 === 2, 'invalid handle for stderr (' + o777.o716 + ')');
    },
    o778: function () {
        if (o474.o481) return;
        o474.o481 = function o481(o671) {
            this.o671 = o671;
            for (var key in o341) {
                if (o341[key] === o671) {
                    this.o119 = key;
                    break;
                }
            }
            this.o779 = o463[o671];
        };
        o474.o481.prototype = new Error();
        o474.o481.prototype.constructor = o474.o481;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [o341.o343].forEach(function (o119) {
            o474.o540[o119] = new o474.o481(o119);
            o474.o540[o119].o190 = '<generic error, no stack>';
        });
    },
    o623: function () {
        o474.o778();

        o474.o666 = new Array(4096);

        o474.o500(o495, {}, '/');

        o474.o771();
        o474.o772();
    },
    o468: function (input, o473, o586) {
        o73(!o474.o468.o668, 'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)');
        o474.o468.o668 = true;

        o474.o778();

        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = o473 || Module['stdout'];
        Module['stderr'] = o586 || Module['stderr'];

        o474.o773();
    },
    o780: function () {
        o474.o468.o668 = false;
        for (var o82 = 0; o82 < o474.o664.length; o82++) {
            var o477 = o474.o664[o82];
            if (!o477) {
                continue;
            }
            o474.o483(o477);
        }
    },
    o625: function (o781, o782) {
        var o503 = 0;
        if (o781) o503 |= 292 | 73;
        if (o782) o503 |= 146;
        return o503;
    },
    o783: function (o249, o784) {
        var o31 = o591.join.apply(null, o249);
        if (o784 && o31[0] == '/') o31 = o31.substr(1);
        return o31;
    },
    o785: function (o750, o786) {
        return o591.resolve(o786, o750);
    },
    o787: function (o31) {
        return o591.normalize(o31);
    },
    o788: function (o31, o789) {
        var o30 = o474.o790(o31, o789);
        if (o30.o791) {
            return o30.o720;
        } else {
            o465(o30.o586);
            return null;
        }
    },
    o790: function (o31, o789) {
        // operate from within the context of the symlink's target
        try {
            var o510 = o474.o603(o31, {
                o682: !o789
            });
            o31 = o510.o31;
        } catch (o189) {}
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
            var o510 = o474.o603(o31, {
                o502: true
            });
            o30.o792 = true;
            o30.o793 = o510.o31;
            o30.o794 = o510.o479;
            o30.name = o591.o741(o31);
            o510 = o474.o603(o31, {
                o682: !o789
            });
            o30.o791 = true;
            o30.o31 = o510.o31;
            o30.o720 = o510.o479;
            o30.name = o510.o479.name;
            o30.o686 = o510.o31 === '/';
        } catch (o189) {
            o30.o586 = o189.o671;
        };
        return o30;
    },
    o795: function (o502, name, o781, o782) {
        var o31 = o591.o592(typeof o502 === 'string' ? o502 : o474.o685(o502), name);
        var o503 = o474.o625(o781, o782);
        return o474.o606(o31, o503);
    },
    o796: function (o502, o31, o781, o782) {
        o502 = typeof o502 === 'string' ? o502 : o474.o685(o502);
        var o249 = o31.split('/').reverse();
        while (o249.length) {
            var o797 = o249.pop();
            if (!o797) continue;
            var o677 = o591.o592(o502, o797);
            try {
                o474.o606(o677);
            } catch (o189) {
                // ignore EEXIST
            }
            o502 = o677;
        }
        return o677;
    },
    o798: function (o502, name, o799, o781, o782) {
        var o31 = o591.o592(typeof o502 === 'string' ? o502 : o474.o685(o502), name);
        var o503 = o474.o625(o781, o782);
        return o474.create(o31, o503);
    },
    o800: function (o502, name, o769, o781, o782, o549) {
        var o31 = name ? o591.o592(typeof o502 === 'string' ? o502 : o474.o685(o502), name) : o502;
        var o503 = o474.o625(o781, o782);
        var o479 = o474.create(o31, o503);
        if (o769) {
            if (typeof o769 === 'string') {
                var o801 = new Array(o769.length);
                for (var o82 = 0, o760 = o769.length; o82 < o760; ++o82) o801[o82] = o769.charCodeAt(o82);
                o769 = o801;
            }
            // make sure we can write to the file
            o474.o753(o479, o503 | 146);
            var o477 = o474.o41(o479, 'w');
            o474.write(o477, o769, 0, o769.length, 0, o549);
            o474.o483(o477);
            o474.o753(o479, o503);
        }
        return o479;
    },
    o774: function (o502, name, input, o473) {
        var o31 = o591.o592(typeof o502 === 'string' ? o502 : o474.o685(o502), name);
        var o503 = o474.o625(!!input, !!o473);
        if (!o474.o774.o730) o474.o774.o730 = 64;
        var o471 = o474.o732(o474.o774.o730++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        o474.o475(o471, {
            o41: function (o477) {
                o477.o482 = false;
            },
            o483: function (o477) {
                // flush any pending line data
                if (o473 && o473.buffer && o473.buffer.length) {
                    o473(10);
                }
            },
            o27: function (o477, buffer, o107, length, o485 /* ignored */ ) {
                var o487 = 0;
                for (var o82 = 0; o82 < length; o82++) {
                    var o488;
                    try {
                        o488 = input();
                    } catch (o189) {
                        throw new o474.o481(o341.o346);
                    }
                    if (o488 === undefined && o487 === 0) {
                        throw new o474.o481(o341.o352);
                    }
                    if (o488 === null || o488 === undefined) break;
                    o487++;
                    buffer[o107 + o82] = o488;
                }
                if (o487) {
                    o477.o479.o489 = Date.o4();
                }
                return o487;
            },
            write: function (o477, buffer, o107, length, o485) {
                for (var o82 = 0; o82 < length; o82++) {
                    try {
                        o473(buffer[o107 + o82]);
                    } catch (o189) {
                        throw new o474.o481(o341.o346);
                    }
                }
                if (length) {
                    o477.o479.o489 = Date.o4();
                }
                return o82;
            }
        });
        return o474.o742(o31, o503, o471);
    },
    o802: function (o502, name, target, o781, o782) {
        var o31 = o591.o592(typeof o502 === 'string' ? o502 : o474.o685(o502), name);
        return o474.o516(target, o31);
    },
    o803: function (o804) {
        if (o804.o699 || o804.o698 || o804.link || o804.o524) return true;
        var o805 = true;
        if (typeof o40 !== 'undefined') {
            throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (Module['read']) {
            // Command-line.
            try {
                // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
                //          read() will try to parse UTF8.
                o804.o524 = o192(Module['read'](o804.o38), true);
            } catch (o189) {
                o805 = false;
            }
        } else {
            throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
        if (!o805) o465(o341.o346);
        return o805;
    },
    o806: function (o502, name, o38, o781, o782) {
        if (typeof o40 !== 'undefined') {
            if (!o20) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
            // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
            function o807() {
                this.o808 = false;
                this.o809 = []; // Loaded chunks. Index is the chunk number
            }
            o807.prototype.get = function o810(o740) {
                if (o740 > this.length - 1 || o740 < 0) {
                    return undefined;
                }
                var o811 = o740 % this.o812;
                var o813 = Math.floor(o740 / this.o812);
                return this.getter(o813)[o811];
            }
            o807.prototype.o814 = function o815(getter) {
                this.getter = getter;
            }
            o807.prototype.o816 = function o817() {
                // Find length
                var o39 = new o40();
                o39.o41('HEAD', o38, false);
                o39.o42(null);
                if (!(o39.o818 >= 200 && o39.o818 < 300 || o39.o818 === 304)) throw new Error("Couldn't load " + o38 + ". Status: " + o39.o818);
                var o819 = Number(o39.o820("Content-length"));
                var o821;
                var o822 = (o821 = o39.o820("Accept-Ranges")) && o821 === "bytes";
                var o812 = 1024 * 1024; // Chunk size in bytes

                if (!o822) o812 = o819;

                // Function to get a range from the remote URL.
                var o823 = (function (from, o824) {
                    if (from > o824) throw new Error("invalid range (" + from + ", " + o824 + ") or no bytes requested!");
                    if (o824 > o819 - 1) throw new Error("only " + o819 + " bytes available! programmer error!");

                    // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
                    var o39 = new o40();
                    o39.o41('GET', o38, false);
                    if (o819 !== o812) o39.o825("Range", "bytes=" + from + "-" + o824);

                    // Some hints to the browser that we want binary data.
                    if (typeof Uint8Array != 'undefined') o39.o826 = 'arraybuffer';
                    if (o39.o827) {
                        o39.o827('text/plain; charset=x-user-defined');
                    }

                    o39.o42(null);
                    if (!(o39.o818 >= 200 && o39.o818 < 300 || o39.o818 === 304)) throw new Error("Couldn't load " + o38 + ". Status: " + o39.o818);
                    if (o39.o828 !== undefined) {
                        return new Uint8Array(o39.o828 || []);
                    } else {
                        return o192(o39.o43 || '', true);
                    }
                });
                var o829 = this;
                o829.o814(function (o813) {
                    var o830 = o813 * o812;
                    var o259 = (o813 + 1) * o812 - 1; // including this byte
                    o259 = Math.o87(o259, o819 - 1); // if datalength-1 is selected, this is the last block
                    if (typeof (o829.o809[o813]) === "undefined") {
                        o829.o809[o813] = o823(o830, o259);
                    }
                    if (typeof (o829.o809[o813]) === "undefined") throw new Error("doXHR failed!");
                    return o829.o809[o813];
                });

                this.o831 = o819;
                this.o832 = o812;
                this.o808 = true;
            }

            var o829 = new o807();
            Object.defineProperty(o829, "length", {
                get: function () {
                    if (!this.o808) {
                        this.o816();
                    }
                    return this.o831;
                }
            });
            Object.defineProperty(o829, "chunkSize", {
                get: function () {
                    if (!this.o808) {
                        this.o816();
                    }
                    return this.o832;
                }
            });

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

        var o479 = o474.o798(o502, name, o799, o781, o782);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (o799.o524) {
            o479.o524 = o799.o524;
        } else if (o799.o38) {
            o479.o524 = null;
            o479.o38 = o799.o38;
        }
        // override each stream op with one that tries to force load the lazy file first
        var o476 = {};
        var keys = Object.keys(o479.o476);
        keys.forEach(function (key) {
            var o833 = o479.o476[key];
            o476[key] = function o834() {
                if (!o474.o803(o479)) {
                    throw new o474.o481(o341.o346);
                }
                return o833.apply(null, arguments);
            };
        });
        // use a custom read function
        o476.o27 = function o835(o477, buffer, o107, length, o548) {
            if (!o474.o803(o479)) {
                throw new o474.o481(o341.o346);
            }
            var o524 = o477.o479.o524;
            if (o548 >= o524.length)
                return 0;
            var o85 = Math.o87(o524.length - o548, length);
            o73(o85 >= 0);
            if (o524.slice) { // normal array
                for (var o82 = 0; o82 < o85; o82++) {
                    buffer[o107 + o82] = o524[o548 + o82];
                }
            } else {
                for (var o82 = 0; o82 < o85; o82++) { // LazyUint8Array from sync binary XHR
                    buffer[o107 + o82] = o524.get(o548 + o82);
                }
            }
            return o85;
        };
        o479.o476 = o476;
        return o479;
    },
    o836: function (o502, name, o38, o781, o782, o837, o585, o838, o549) {
        o839.o468();
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var o840 = name ? o591.resolve(o591.o592(o502, name)) : o502;

        function o841(o842) {
            function o843(o842) {
                if (!o838) {
                    o474.o800(o502, name, o842, o781, o782, o549);
                }
                if (o837) o837();
                o334('cp ' + o840);
            }
            var o844 = false;
            Module['preloadPlugins'].forEach(function (o845) {
                if (o844) return;
                if (o845['canHandle'](o840)) {
                    o845['handle'](o842, o840, o843, function () {
                        if (o585) o585();
                        o334('cp ' + o840);
                    });
                    o844 = true;
                }
            });
            if (!o844) o843(o842);
        }
        o332('cp ' + o840);
        if (typeof o38 == 'string') {
            o839.o846(o38, function (o842) {
                o841(o842);
            }, o585);
        } else {
            o841(o38);
        }
    },
    o556: function () {
        return o19.o556 || o19.o557 || o19.o558 || o19.o559;
    },
    o847: function () {
        return 'EM_FS_' + o19.o848.o849;
    },
    o560: 20,
    o561: "FILE_DATA",
    o850: function (o851, o837, o585) {
        o837 = o837 || function () {};
        o585 = o585 || function () {};
        var o556 = o474.o556();
        try {
            var o852 = o556.o41(o474.o847(), o474.o560);
        } catch (o189) {
            return o585(o189);
        }
        o852.o575 = function o853() {
            o44.o45('creating db');
            var o573 = o852.o488;
            o573.o581(o474.o561);
        };
        o852.o584 = function o854() {
            var o573 = o852.o488;
            var o576 = o573.o576([o474.o561], 'readwrite');
            var o855 = o576.o580(o474.o561);
            var o856 = 0,
                o857 = 0,
                o616 = o851.length;

            function o843() {
                if (o857 == 0) o837();
                else o585();
            }
            o851.forEach(function (o31) {
                var o858 = o855.o613(o474.o790(o31).o720.o524, o31);
                o858.o584 = function o859() {
                    o856++;
                    if (o856 + o857 == o616) o843()
                };
                o858.o585 = function o860() {
                    o857++;
                    if (o856 + o857 == o616) o843()
                };
            });
            o576.o585 = o585;
        };
        o852.o585 = o585;
    },
    o861: function (o851, o837, o585) {
        o837 = o837 || function () {};
        o585 = o585 || function () {};
        var o556 = o474.o556();
        try {
            var o852 = o556.o41(o474.o847(), o474.o560);
        } catch (o189) {
            return o585(o189);
        }
        o852.o575 = o585; // no database to load from
        o852.o584 = function o854() {
            var o573 = o852.o488;
            try {
                var o576 = o573.o576([o474.o561], 'readonly');
            } catch (o189) {
                o585(o189);
                return;
            }
            var o855 = o576.o580(o474.o561);
            var o856 = 0,
                o857 = 0,
                o616 = o851.length;

            function o843() {
                if (o857 == 0) o837();
                else o585();
            }
            o851.forEach(function (o31) {
                var o862 = o855.get(o31);
                o862.o584 = function o863() {
                    if (o474.o790(o31).o791) {
                        o474.o513(o31);
                    }
                    o474.o800(o591.o684(o31), o591.o741(o31), o862.o488, true, true, true);
                    o856++;
                    if (o856 + o857 == o616) o843();
                };
                o862.o585 = function o864() {
                    o857++;
                    if (o856 + o857 == o616) o843()
                };
            });
            o576.o585 = o585;
        };
        o852.o585 = o585;
    }
};
var o591 = {
    o865: function (o28) {
        var o866 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return o866.exec(o28).slice(1);
    },
    o676: function (o249, o867) {
        // if the path tries to go above the root, `up` ends up > 0
        var o868 = 0;
        for (var o82 = o249.length - 1; o82 >= 0; o82--) {
            var o869 = o249[o82];
            if (o869 === '.') {
                o249.splice(o82, 1);
            } else if (o869 === '..') {
                o249.splice(o82, 1);
                o868++;
            } else if (o868) {
                o249.splice(o82, 1);
                o868--;
            }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (o867) {
            for (; o868--; o868) {
                o249.unshift('..');
            }
        }
        return o249;
    },
    normalize: function (o31) {
        var o870 = o31.charAt(0) === '/',
            o871 = o31.substr(-1) === '/';
        // Normalize the path
        o31 = o591.o676(o31.split('/').filter(function (o588) {
            return !!o588;
        }), !o870).join('/');
        if (!o31 && !o870) {
            o31 = '.';
        }
        if (o31 && o871) {
            o31 += '/';
        }
        return (o870 ? '/' : '') + o31;
    },
    o684: function (o31) {
        var o488 = o591.o865(o31),
            o590 = o488[0],
            o506 = o488[1];
        if (!o590 && !o506) {
            // No dirname whatsoever
            return '.';
        }
        if (o506) {
            // It has a dirname, strip trailing slash
            o506 = o506.substr(0, o506.length - 1);
        }
        return o590 + o506;
    },
    o741: function (o31) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (o31 === '/') return '/';
        var o872 = o31.lastIndexOf('/');
        if (o872 === -1) return o31;
        return o31.substr(o872 + 1);
    },
    o873: function (o31) {
        return o591.o865(o31)[3];
    },
    join: function () {
        var o851 = Array.prototype.slice.call(arguments, 0);
        return o591.normalize(o851.join('/'));
    },
    o592: function (o65, o874) {
        return o591.normalize(o65 + '/' + o874);
    },
    resolve: function () {
        var o875 = '',
            o876 = false;
        for (var o82 = arguments.length - 1; o82 >= -1 && !o876; o82--) {
            var o31 = (o82 >= 0) ? arguments[o82] : o474.o672();
            // Skip empty and invalid entries
            if (typeof o31 !== 'string') {
                throw new o877('Arguments to path.resolve must be strings');
            } else if (!o31) {
                continue;
            }
            o875 = o31 + '/' + o875;
            o876 = o31.charAt(0) === '/';
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        o875 = o591.o676(o875.split('/').filter(function (o588) {
            return !!o588;
        }), !o876).join('/');
        return ((o876 ? '/' : '') + o875) || '.';
    },
    o750: function (from, o824) {
        from = o591.resolve(from).substr(1);
        o824 = o591.resolve(o824).substr(1);

        function o878(o801) {
            var o830 = 0;
            for (; o830 < o801.length; o830++) {
                if (o801[o830] !== '') break;
            }
            var o259 = o801.length - 1;
            for (; o259 >= 0; o259--) {
                if (o801[o259] !== '') break;
            }
            if (o830 > o259) return [];
            return o801.slice(o830, o259 - o830 + 1);
        }
        var o879 = o878(from.split('/'));
        var o880 = o878(o824.split('/'));
        var length = Math.o87(o879.length, o880.length);
        var o881 = length;
        for (var o82 = 0; o82 < length; o82++) {
            if (o879[o82] !== o880[o82]) {
                o881 = o82;
                break;
            }
        }
        var o882 = [];
        for (var o82 = o881; o82 < o879.length; o82++) {
            o882.push('..');
        }
        o882 = o882.concat(o880.slice(o881));
        return o882.join('/');
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
            o839.o883.o886 = true;
        },
        o890: function () {
            if (o839.o883.o887) {
                o839.o883.o887 = false;
                o839.o883.o884();
            }
            o839.o883.o886 = false;
        },
        o891: function () {
            if (Module['setStatus']) {
                var o779 = Module['statusMessage'] || 'Please wait...';
                var o892 = o839.o883.o893;
                var o894 = o839.o883.o895;
                if (o892) {
                    if (o892 < o894) {
                        Module['setStatus'](o779 + ' (' + (o894 - o892) + '/' + o894 + ')');
                    } else {
                        Module['setStatus'](o779);
                    }
                } else {
                    Module['setStatus']('');
                }
            }
        }
    },
    o896: false,
    o897: false,
    o898: [],
    o899: [],
    o468: function () {
        if (!Module["preloadPlugins"]) Module["preloadPlugins"] = []; // needs to exist even in workers

        if (o839.o900 || o20) return;
        o839.o900 = true;

        try {
            new o901();
            o839.o902 = true;
        } catch (o189) {
            o839.o902 = false;
            o44.o45("warning: no blob constructor, cannot create blobs with mimetypes");
        }
        o839.o903 = typeof o904 != "undefined" ? o904 : (typeof o905 != "undefined" ? o905 : (!o839.o902 ? o44.o45("warning: no BlobBuilder") : null));
        o839.o906 = typeof o19 != "undefined" ? (o19.o907 ? o19.o907 : o19.o908) : undefined;
        if (!Module.o909 && typeof o839.o906 === 'undefined') {
            o44.o45("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
            Module.o909 = true;
        }

        // Support for plugins that can process preloaded files. You can add more of these to
        // your app by creating and appending to Module.preloadPlugins.
        //
        // Each plugin is asked if it can handle a file based on the file's name. If it can,
        // it is given the file's raw data. When it is done, it calls a callback with the file's
        // (possibly modified) data. For example, a plugin might decompress a file, or it
        // might create some side data structure for use later (like an Image element, etc.).

        var o910 = {};
        o910['canHandle'] = function o911(name) {
            return !Module.o909 && /\.(jpg|jpeg|png|bmp)$/i.test(name);
        };
        o910['handle'] = function o912(o842, name, o837, o585) {
            var o308 = null;
            if (o839.o902) {
                try {
                    o308 = new o901([o842], {
                        type: o839.o913(name)
                    });
                    if (o308.o85 !== o842.length) { // Safari bug #118630
                        // Safari's Blob can only take an ArrayBuffer
                        o308 = new o901([(new Uint8Array(o842)).buffer], {
                            type: o839.o913(name)
                        });
                    }
                } catch (o189) {
                    o48.o123('Blob constructor present but fails: ' + o189 + '; falling back to blob builder');
                }
            }
            if (!o308) {
                var o914 = new o839.o903();
                o914.o915((new Uint8Array(o842)).buffer); // we need to pass a buffer, and must copy the array to get the right data range
                o308 = o914.o916();
            }
            var o38 = o839.o906.o917(o308);
            var o918 = new o919();
            o918.o837 = function o920() {
                o73(o918.o921, 'Image ' + name + ' could not be decoded');
                var o922 = o923.o924('canvas');
                o922.o925 = o918.o925;
                o922.o926 = o918.o926;
                var o927 = o922.o928('2d');
                o927.o929(o918, 0, 0);
                Module["preloadedImages"][name] = o922;
                o839.o906.o930(o38);
                if (o837) o837(o842);
            };
            o918.o585 = function o931(o598) {
                o44.o45('Image ' + o38 + ' could not be decoded');
                if (o585) o585();
            };
            o918.o569 = o38;
        };
        Module['preloadPlugins'].push(o910);

        var o932 = {};
        o932['canHandle'] = function o933(name) {
            return !Module.o934 && name.substr(-4) in {
                '.ogg': 1,
                '.wav': 1,
                '.mp3': 1
            };
        };
        o932['handle'] = function o935(o842, name, o837, o585) {
            var done = false;

            function o843(o936) {
                if (done) return;
                done = true;
                Module["preloadedAudios"][name] = o936;
                if (o837) o837(o842);
            }

            function o857() {
                if (done) return;
                done = true;
                Module["preloadedAudios"][name] = new o937(); // empty shim
                if (o585) o585();
            }
            if (o839.o902) {
                try {
                    var o308 = new o901([o842], {
                        type: o839.o913(name)
                    });
                } catch (o189) {
                    return o857();
                }
                var o38 = o839.o906.o917(o308); // XXX we never revoke this!
                var o936 = new o937();
                o936.o938('canplaythrough', function () {
                    o843(o936)
                }, false); // use addEventListener due to chromium bug 124926
                o936.o585 = function o939(o598) {
                    if (done) return;
                    o44.o45('warning: browser could not fully decode audio ' + name + ', trying slower base64 approach');

                    function o940(o769) {
                        var o941 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                        var o942 = '=';
                        var o30 = '';
                        var o943 = 0;
                        var o944 = 0;
                        for (var o82 = 0; o82 < o769.length; o82++) {
                            o943 = (o943 << 8) | o769[o82];
                            o944 += 8;
                            while (o944 >= 6) {
                                var o99 = (o943 >> (o944 - 6)) & 0x3f;
                                o944 -= 6;
                                o30 += o941[o99];
                            }
                        }
                        if (o944 == 2) {
                            o30 += o941[(o943 & 3) << 4];
                            o30 += o942 + o942;
                        } else if (o944 == 4) {
                            o30 += o941[(o943 & 0xf) << 2];
                            o30 += o942;
                        }
                        return o30;
                    }
                    o936.o569 = 'data:audio/x-' + name.substr(-3) + ';base64,' + o940(o842);
                    o843(o936); // we don't wait for confirmation this worked - but it's worth trying
                };
                o936.o569 = o38;
                // workaround for chrome bug 124926 - we do not always get oncanplaythrough or onerror
                o839.o945(function () {
                    o843(o936); // try to use it even though it is not necessarily ready to play
                }, 10000);
            } else {
                return o857();
            }
        };
        Module['preloadPlugins'].push(o932);

        // Canvas event setup

        var o922 = Module['canvas'];

        // forced aspect ratio can be enabled by defining 'forcedAspectRatio' on Module
        // Module['forcedAspectRatio'] = 4 / 3;

        o922.o946 = o922['requestPointerLock'] ||
            o922['mozRequestPointerLock'] ||
            o922['webkitRequestPointerLock'] ||
            o922['msRequestPointerLock'] ||
            function () {};
        o922.o947 = o923['exitPointerLock'] ||
            o923['mozExitPointerLock'] ||
            o923['webkitExitPointerLock'] ||
            o923['msExitPointerLock'] ||
            function () {}; // no-op if function does not exist
        o922.o947 = o922.o947.bind(o923);

        function o948() {
            o839.o897 = o923['pointerLockElement'] === o922 ||
                o923['mozPointerLockElement'] === o922 ||
                o923['webkitPointerLockElement'] === o922 ||
                o923['msPointerLockElement'] === o922;
        }

        o923.o938('pointerlockchange', o948, false);
        o923.o938('mozpointerlockchange', o948, false);
        o923.o938('webkitpointerlockchange', o948, false);
        o923.o938('mspointerlockchange', o948, false);

        if (Module['elementPointerLock']) {
            o922.o938("click", function (o949) {
                if (!o839.o897 && o922.o946) {
                    o922.o946();
                    o949.o950();
                }
            }, false);
        }
    },
    o951: function (o922, o952, o953, o954) {
        var o927;
        var o955 = '?';

        function o956(o598) {
            o955 = o598.o957 || o955;
        }
        try {
            if (o952) {
                var o958 = {
                    o959: false,
                    o960: false
                };

                if (o954) {
                    for (var o961 in o954) {
                        o958[o961] = o954[o961];
                    }
                }


                o922.o938('webglcontextcreationerror', o956, false);
                try {
                    ['experimental-webgl', 'webgl'].some(function (o962) {
                        return o927 = o922.o928(o962, o958);
                    });
                } finally {
                    o922.o963('webglcontextcreationerror', o956, false);
                }
            } else {
                o927 = o922.o928('2d');
            }
            if (!o927) throw ':(';
        } catch (o189) {
            Module.print('Could not create canvas: ' + [o955, o189]);
            return null;
        }
        if (o952) {
            // Set the background of the WebGL canvas to black
            o922.o964.o965 = "black";

            // Warn on context loss
            o922.o938('webglcontextlost', function (o598) {
                o966('WebGL context lost. You will need to reload the page.');
            }, false);
        }
        if (o953) {
            o967 = Module.o927 = o927;
            Module.o952 = o952;
            o839.o898.forEach(function (o278) {
                o278()
            });
            o839.o468();
        }
        return o927;
    },
    o968: function (o922, o952, o953) {},
    o969: false,
    o970: undefined,
    o971: undefined,
    o972: function (o970, o971) {
        o839.o970 = o970;
        o839.o971 = o971;
        if (typeof o839.o970 === 'undefined') o839.o970 = true;
        if (typeof o839.o971 === 'undefined') o839.o971 = false;

        var o922 = Module['canvas'];
        var o973 = o922.o974;

        function o975() {
            o839.o896 = false;
            if ((o923['webkitFullScreenElement'] || o923['webkitFullscreenElement'] ||
                o923['mozFullScreenElement'] || o923['mozFullscreenElement'] ||
                o923['fullScreenElement'] || o923['fullscreenElement'] ||
                o923['msFullScreenElement'] || o923['msFullscreenElement'] ||
                o923['webkitCurrentFullScreenElement']) === o973) {
                o922.o976 = o923['cancelFullScreen'] ||
                    o923['mozCancelFullScreen'] ||
                    o923['webkitCancelFullScreen'] ||
                    o923['msExitFullscreen'] ||
                    o923['exitFullscreen'] ||
                    function () {};
                o922.o976 = o922.o976.bind(o923);
                if (o839.o970) o922.o946();
                o839.o896 = true;
                if (o839.o971) o839.o977();
            } else {

                // remove the full screen specific parent of the canvas again to restore the HTML structure from before going full screen
                var o973 = o922.o974;
                o973.o974.o978(o922, o973);
                o973.o974.o979(o973);

                if (o839.o971) o839.o980();
            }
            if (Module['onFullScreen']) Module['onFullScreen'](o839.o896);
            o839.o981(o922);
        }

        if (!o839.o969) {
            o839.o969 = true;
            o923.o938('fullscreenchange', o975, false);
            o923.o938('mozfullscreenchange', o975, false);
            o923.o938('webkitfullscreenchange', o975, false);
            o923.o938('MSFullscreenChange', o975, false);
        }

        // create a new parent to ensure the canvas has no siblings. this allows browsers to optimize full screen performance when its parent is the full screen root
        var o973 = o923.o924("div");
        o922.o974.o978(o973, o922);
        o973.o982(o922);

        // use parent of canvas as full screen root to allow aspect ratio correction (Firefox stretches the root to screen size)
        o973.o972 = o973['requestFullScreen'] ||
            o973['mozRequestFullScreen'] ||
            o973['msRequestFullscreen'] ||
            (o973['webkitRequestFullScreen'] ? function () {
            o973['webkitRequestFullScreen'](Element['ALLOW_KEYBOARD_INPUT'])
        } : null);
        o973.o972();
    },
    o983: function o983(o116) {
        if (typeof o19 === 'undefined') { // Provide fallback to setTimeout if window is undefined (e.g. in Node.js)
            o984(o116, 1000 / 60);
        } else {
            if (!o19.o983) {
                o19.o983 = o19['requestAnimationFrame'] ||
                    o19['mozRequestAnimationFrame'] ||
                    o19['webkitRequestAnimationFrame'] ||
                    o19['msRequestAnimationFrame'] ||
                    o19['oRequestAnimationFrame'] ||
                    o19['setTimeout'];
            }
            o19.o983(o116);
        }
    },
    o985: function (o116) {
        return function () {
            if (!o154) return o116.apply(null, arguments);
        };
    },
    o986: function (o116) {
        return o839.o983(function () {
            if (!o154) o116();
        });
    },
    o945: function (o116, o987) {
        return o984(function () {
            if (!o154) o116();
        }, o987);
    },
    o988: function (o116, o987) {
        return o989(function () {
            if (!o154) o116();
        }, o987);
    },
    o913: function (name) {
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
    o990: function (o116) {
        if (!o19.o990) {
            o19.o990 = o991['getUserMedia'] ||
                o991['mozGetUserMedia'];
        }
        o19.o990(o116);
    },
    o992: function (o598) {
        return o598['movementX'] ||
            o598['mozMovementX'] ||
            o598['webkitMovementX'] ||
            0;
    },
    o993: function (o598) {
        return o598['movementY'] ||
            o598['mozMovementY'] ||
            o598['webkitMovementY'] ||
            0;
    },
    o994: function (o598) {
        return Math.o75(-1, Math.o87(1, o598.type === 'DOMMouseScroll' ? o598.o995 : -o598.o996));
    },
    o997: 0,
    o998: 0,
    o999: 0,
    o1000: 0,
    o1001: function (o598) { // event should be mousemove, mousedown or mouseup
        if (o839.o897) {
            // When the pointer is locked, calculate the coordinates
            // based on the movement of the mouse.
            // Workaround for Firefox bug 764498
            if (o598.type != 'mousemove' &&
                ('mozMovementX' in o598)) {
                o839.o999 = o839.o1000 = 0;
            } else {
                o839.o999 = o839.o992(o598);
                o839.o1000 = o839.o993(o598);
            }

            // check if SDL is available
            if (typeof o1002 != "undefined") {
                o839.o997 = o1002.o997 + o839.o999;
                o839.o998 = o1002.o998 + o839.o1000;
            } else {
                // just add the mouse delta to the current absolut mouse position
                // FIXME: ideally this should be clamped against the canvas size and zero
                o839.o997 += o839.o999;
                o839.o998 += o839.o1000;
            }
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
            if (o598.type == 'touchstart' ||
                o598.type == 'touchend' ||
                o598.type == 'touchmove') {
                var o227 = o598.o1009.o80(0);
                if (o227) {
                    o23 = o227.o1010 - (o1005 + o1003.o1011);
                    o64 = o227.o1012 - (o1007 + o1003.o11);
                } else {
                    return;
                }
            } else {
                o23 = o598.o1010 - (o1005 + o1003.o1011);
                o64 = o598.o1012 - (o1007 + o1003.o11);
            }

            // the canvas might be CSS-scaled compared to its backbuffer;
            // SDL-using content will want mouse coordinates in terms
            // of backbuffer units.
            var o1013 = Module["canvas"].o925;
            var o237 = Module["canvas"].o926;
            o23 = o23 * (o1013 / o1003.o925);
            o64 = o64 * (o237 / o1003.o926);

            o839.o999 = o23 - o839.o997;
            o839.o1000 = o64 - o839.o998;
            o839.o997 = o23;
            o839.o998 = o64;
        }
    },
    o1014: function (o38, o837, o585) {
        var o39 = new o40();
        o39.o41('GET', o38, true);
        o39.o826 = 'arraybuffer';
        o39.o837 = function o1015() {
            if (o39.o818 == 200 || (o39.o818 == 0 && o39.o828)) { // file URLs can return 0
                o837(o39.o828);
            } else {
                o585();
            }
        };
        o39.o585 = o585;
        o39.o42(null);
    },
    o846: function (o38, o837, o585, o1016) {
        o839.o1014(o38, function (o1017) {
            o73(o1017, 'Loading data file "' + o38 + '" failed (no arrayBuffer).');
            o837(new Uint8Array(o1017));
            if (!o1016) o334('al ' + o38);
        }, function (o598) {
            if (o585) {
                o585();
            } else {
                throw 'Loading data file "' + o38 + '" failed.';
            }
        });
        if (!o1016) o332('al ' + o38);
    },
    o1018: [],
    o1019: function () {
        var o922 = Module['canvas'];
        o839.o1018.forEach(function (o1020) {
            o1020(o922.o925, o922.o926);
        });
    },
    o1021: function (o925, o926, o1022) {
        var o922 = Module['canvas'];
        o839.o981(o922, o925, o926);
        if (!o1022) o839.o1019();
    },
    o1023: 0,
    o1024: 0,
    o977: function () {
        // check if SDL is available   
        if (typeof o1002 != "undefined") {
            var flags = o267[((o1002.o1025 + o48.o71 * 0) >> 2)];
            flags = flags | 0x00800000; // set SDL_FULLSCREEN flag
            o202[((o1002.o1025 + o48.o71 * 0) >> 2)] = flags
        }
        o839.o1019();
    },
    o980: function () {
        // check if SDL is available       
        if (typeof o1002 != "undefined") {
            var flags = o267[((o1002.o1025 + o48.o71 * 0) >> 2)];
            flags = flags & ~0x00800000; // clear SDL_FULLSCREEN flag
            o202[((o1002.o1025 + o48.o71 * 0) >> 2)] = flags
        }
        o839.o1019();
    },
    o981: function (o922, o1026, o1027) {
        if (o1026 && o1027) {
            o922.o1028 = o1026;
            o922.o1029 = o1027;
        } else {
            o1026 = o922.o1028;
            o1027 = o922.o1029;
        }
        var o1030 = o1026;
        var o66 = o1027;
        if (Module['forcedAspectRatio'] && Module['forcedAspectRatio'] > 0) {
            if (o1030 / o66 < Module['forcedAspectRatio']) {
                o1030 = Math.o67(o66 * Module['forcedAspectRatio']);
            } else {
                o66 = Math.o67(o1030 / Module['forcedAspectRatio']);
            }
        }
        if (((o923['webkitFullScreenElement'] || o923['webkitFullscreenElement'] ||
            o923['mozFullScreenElement'] || o923['mozFullscreenElement'] ||
            o923['fullScreenElement'] || o923['fullscreenElement'] ||
            o923['msFullScreenElement'] || o923['msFullscreenElement'] ||
            o923['webkitCurrentFullScreenElement']) === o922.o974) && (typeof o1025 != 'undefined')) {
            var o1031 = Math.o87(o1025.o925 / o1030, o1025.o926 / o66);
            o1030 = Math.o67(o1030 * o1031);
            o66 = Math.o67(o66 * o1031);
        }
        if (o839.o971) {
            if (o922.o925 != o1030) o922.o925 = o1030;
            if (o922.o926 != o66) o922.o926 = o66;
            if (typeof o922.o964 != 'undefined') {
                o922.o964.o1032("width");
                o922.o964.o1032("height");
            }
        } else {
            if (o922.o925 != o1026) o922.o925 = o1026;
            if (o922.o926 != o1027) o922.o926 = o1027;
            if (typeof o922.o964 != 'undefined') {
                if (o1030 != o1026 || o66 != o1027) {
                    o922.o964.o1033("width", o1030 + "px", "important");
                    o922.o964.o1033("height", o66 + "px", "important");
                } else {
                    o922.o964.o1032("width");
                    o922.o964.o1032("height");
                }
            }
        }
    }
};


Module["_memset"] = o1034;


Module["_strlen"] = o1035;


function o1036(o1037, o569, o250) {
    o222.set(o222.subarray(o569, o569 + o250), o1037);
    return o1037;
}
Module["_memcpy"] = o1038;

function o1039() {}
Module["_free"] = o1039;
Module["requestFullScreen"] = function o1040(o970, o971) {
    o839.o972(o970, o971)
};
Module["requestAnimationFrame"] = function o1041(o116) {
    o839.o983(o116)
};
Module["setCanvasSize"] = function o1042(o925, o926, o1022) {
    o839.o1021(o925, o926, o1022)
};
Module["pauseMainLoop"] = function o1043() {
    o839.o883.o889()
};
Module["resumeMainLoop"] = function o1044() {
    o839.o883.o890()
};
Module["getUserMedia"] = function o1045() {
    o839.o990()
}
o474.o623();
o280.unshift({
    o116: function () {
        if (!Module["noFSInit"] && !o474.o468.o668) o474.o468()
    }
});
o281.push({
    o116: function () {
        o474.o669 = false
    }
});
o282.push({
    o116: function () {
        o474.o780()
    }
});
Module["FS_createFolder"] = o474.o795;
Module["FS_createPath"] = o474.o796;
Module["FS_createDataFile"] = o474.o800;
Module["FS_createPreloadedFile"] = o474.o836;
Module["FS_createLazyFile"] = o474.o806;
Module["FS_createLink"] = o474.o802;
Module["FS_createDevice"] = o474.o774;
o464 = o48.o141(4);
o202[((o464) >> 2)] = 0;
o280.unshift({
    o116: function () {
        o466.o468()
    }
});
o282.push({
    o116: function () {
        o466.o469()
    }
});
o466.o229 = new o48.o129();
if (o16) {
    var o627 = require("fs");
    o621.o623();
}
o270 = o50 = o48.o100(o142);

o269 = true; // seal the static portion of memory

o271 = o270 + 5242880;

o272 = o144 = o48.o100(o271);

o73(o272 < o145, "TOTAL_MEMORY not big enough for stack");


var o204 = Math.o87;

function o1046(o23, o64) {
    Module.print('int ' + o23 + ',' + o64); // + ' ' + new Error().stack);
}

function o1047(o23, o64) {
    Module.print('float ' + o23 + ',' + o64); // + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var o1048 = (function (global, o1049, buffer) {
    "use asm";
    var o247 = new global.Int8Array(buffer);
    var o308 = new global.Int16Array(buffer);
    var o258 = new global.Int32Array(buffer);
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
        o247 = o247 | 0;
        var o308 = 0;
        o308 = o82;
        o82 = o82 + o247 | 0;
        o82 = o82 + 7 & -8;
        return o308 | 0
    }

    function o1098() {
        return o82 | 0
    }

    function o1099(o247) {
        o247 = o247 | 0;
        o82 = o247
    }

    function o733(o247, o308) {
        o247 = o247 | 0;
        o308 = o308 | 0;
        if ((o736 | 0) == 0) {
            o736 = o247;
            o1053 = o308
        }
    }

    function o1100(o308) {
        o308 = o308 | 0;
        o247[o111] = o247[o308];
        o247[o111 + 1 | 0] = o247[o308 + 1 | 0];
        o247[o111 + 2 | 0] = o247[o308 + 2 | 0];
        o247[o111 + 3 | 0] = o247[o308 + 3 | 0]
    }

    function o1101(o308) {
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

    function o1102(o247) {
        o247 = o247 | 0;
        o1061 = o247
    }

    function o1103(o247) {
        o247 = o247 | 0;
        o1062 = o247
    }

    function o1104(o247) {
        o247 = o247 | 0;
        o1063 = o247
    }

    function o1105(o247) {
        o247 = o247 | 0;
        o1064 = o247
    }

    function o1106(o247) {
        o247 = o247 | 0;
        o1065 = o247
    }

    function o1107(o247) {
        o247 = o247 | 0;
        o1066 = o247
    }

    function o1108(o247) {
        o247 = o247 | 0;
        o1067 = o247
    }

    function o1109(o247) {
        o247 = o247 | 0;
        o1068 = o247
    }

    function o1110(o247) {
        o247 = o247 | 0;
        o1069 = o247
    }

    function o1111(o247) {
        o247 = o247 | 0;
        o1070 = o247
    }

    function o1112(o247) {
        o247 = o247 | 0;
        var o308 = 0,
            o1050 = 0,
            o189 = 0,
            o34 = 0,
            o66 = 0,
            o1052 = 0.0;
        o247 = o82;
        o258[2] = 74755;
        o308 = 74755;
        o1050 = 1;
        while (1) {
            o189 = o308;
            o34 = 1;
            do {
                o189 = (o189 * 1309 | 0) + 13849 & 65535;
                o1051[16 + (o1050 * 164 | 0) + (o34 << 2) >> 2] = +(((o189 >>> 0) % 120 | 0) + -60 | 0) / 3.0;
                o34 = o34 + 1 | 0;
            } while ((o34 | 0) != 41);
            o34 = o1050 + 1 | 0;
            if ((o34 | 0) == 41) {
                break
            } else {
                o308 = o189;
                o1050 = o34
            }
        }
        o258[2] = o189;
        o1050 = o189;
        o189 = 1;
        while (1) {
            o66 = o1050;
            o308 = 1;
            do {
                o66 = (o66 * 1309 | 0) + 13849 & 65535;
                o1051[6744 + (o189 * 164 | 0) + (o308 << 2) >> 2] = +(((o66 >>> 0) % 120 | 0) + -60 | 0) / 3.0;
                o308 = o308 + 1 | 0;
            } while ((o308 | 0) != 41);
            o308 = o189 + 1 | 0;
            if ((o308 | 0) == 41) {
                break
            } else {
                o1050 = o66;
                o189 = o308
            }
        }
        o258[2] = o66;
        o66 = 1;
        do {
            o189 = 1;
            do {
                o1050 = 13472 + (o66 * 164 | 0) + (o189 << 2) | 0;
                o1051[o1050 >> 2] = 0.0;
                o1052 = 0.0;
                o308 = 1;
                do {
                    o1052 = o1052 + +o1051[16 + (o66 * 164 | 0) + (o308 << 2) >> 2] * +o1051[6744 + (o308 * 164 | 0) + (o189 << 2) >> 2];
                    o308 = o308 + 1 | 0;
                } while ((o308 | 0) != 41);
                o1051[o1050 >> 2] = o1052;
                o189 = o189 + 1 | 0;
            } while ((o189 | 0) != 41);
            o66 = o66 + 1 | 0;
        } while ((o66 | 0) != 41);
        o82 = o247;
        return
    }

    function o1113() {
        var o247 = 0,
            o308 = 0;
        o247 = o82;
        o308 = 0;
        do {
            o1112(0);
            o308 = o308 + 1 | 0;
        } while ((o308 | 0) != 5e3);
        o82 = o247;
        return 0
    }

    function o1114() {}

    function o1115(o308, o1050, o189) {
        o308 = o308 | 0;
        o1050 = o1050 | 0;
        o189 = o189 | 0;
        var o34 = 0,
            o1051 = 0,
            o66 = 0,
            o82 = 0;
        o34 = o308 + o189 | 0;
        if ((o189 | 0) >= 20) {
            o1050 = o1050 & 255;
            o1051 = o308 & 3;
            o66 = o1050 | o1050 << 8 | o1050 << 16 | o1050 << 24;
            o82 = o34 & ~3;
            if (o1051) {
                o1051 = o308 + 4 - o1051 | 0;
                while ((o308 | 0) < (o1051 | 0)) {
                    o247[o308] = o1050;
                    o308 = o308 + 1 | 0
                }
            }
            while ((o308 | 0) < (o82 | 0)) {
                o258[o308 >> 2] = o66;
                o308 = o308 + 4 | 0
            }
        }
        while ((o308 | 0) < (o34 | 0)) {
            o247[o308] = o1050;
            o308 = o308 + 1 | 0
        }
        return o308 - o189 | 0
    }

    function o1116(o308) {
        o308 = o308 | 0;
        var o258 = 0;
        o258 = o308;
        while (o247[o258] | 0) {
            o258 = o258 + 1 | 0
        }
        return o258 - o308 | 0
    }

    function o1117(o308, o1050, o189) {
        o308 = o308 | 0;
        o1050 = o1050 | 0;
        o189 = o189 | 0;
        var o34 = 0;
        if ((o189 | 0) >= 4096) return o1094(o308 | 0, o1050 | 0, o189 | 0) | 0;
        o34 = o308 | 0;
        if ((o308 & 3) == (o1050 & 3)) {
            while (o308 & 3) {
                if ((o189 | 0) == 0) return o34 | 0;
                o247[o308] = o247[o1050] | 0;
                o308 = o308 + 1 | 0;
                o1050 = o1050 + 1 | 0;
                o189 = o189 - 1 | 0
            }
            while ((o189 | 0) >= 4) {
                o258[o308 >> 2] = o258[o1050 >> 2];
                o308 = o308 + 4 | 0;
                o1050 = o1050 + 4 | 0;
                o189 = o189 - 4 | 0
            }
        }
        while ((o189 | 0) > 0) {
            o247[o308] = o247[o1050] | 0;
            o308 = o308 + 1 | 0;
            o1050 = o1050 + 1 | 0;
            o189 = o189 - 1 | 0
        }
        return o34 | 0
    }




    // EMSCRIPTEN_END_FUNCS
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

o48.o140 = function (o85) {
    return o1048['stackAlloc'](o85)
};
o48.o49 = function () {
    return o1048['stackSave']()
};
o48.o51 = function (o11) {
    o1048['stackRestore'](o11)
};


// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var o1131 = null;

// === Auto-generated postamble setup entry stuff ===

if (o336) {
    if (o16 || o22) {
        var o769 = Module['readBinary'](o336);
        o222.set(o769, o268);
    } else {
        o332('memory initializer');
        o839.o846(o336, function (o769) {
            o222.set(o769, o268);
            o334('memory initializer');
        }, function (o769) {
            throw 'could not load memory initializer ' + o336;
        });
    }
}

function o1132(o818) {
    this.name = "ExitStatus";
    this.o779 = "Program terminated with exit(" + o818 + ")";
    this.o818 = o818;
};
o1132.prototype = new Error();
o1132.prototype.constructor = o1132;

var o1133;
var o1134 = null;
var o1135 = false;

o331 = function o1136() {
    // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
    if (!Module['calledRun'] && o1137) o1138();
    if (!Module['calledRun']) o331 = o1136; // try this again later, after new deps are fulfilled
}

Module['callMain'] = Module.o1139 = function o1139(o81) {
    o73(o329 == 0, 'cannot call main when async dependencies remain! (listen on __ATMAIN__)');
    o73(o279.length == 0, 'cannot call main when preRun functions remain to be called');

    o81 = o81 || [];

    if (o18 && o1134 !== null) {
        Module.o24('preload time: ' + (Date.o4() - o1134) + ' ms');
    }

    o287();

    var o1140 = o81.length + 1;

    function o1141() {
        for (var o82 = 0; o82 < 4 - 1; o82++) {
            o1142.push(0);
        }
    }
    var o1142 = [o215(o192("/bin/this.program"), 'i8', o210)];
    o1141();
    for (var o82 = 0; o82 < o1140 - 1; o82 = o82 + 1) {
        o1142.push(o215(o192(o81[o82]), 'i8', o210));
        o1141();
    }
    o1142.push(0);
    o1142 = o215(o1142, 'i32', o210);

    o1133 = o50;

    try {

        var o30 = Module['_main'](o1140, o1142, 0);


        // if we're not running an evented main loop, it's time to exit
        if (!Module['noExitRuntime']) {
            o1143(o30);
        }
    } catch (o189) {
        if (o189 instanceof o1132) {
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
        o1135 = true;
    }
}




function o1138(o81) {
    o81 = o81 || Module['arguments'];

    if (o1134 === null) o1134 = Date.o4();

    if (o329 > 0) {
        Module.o24('run() called, but dependencies remain, so not running');
        return;
    }

    o285();

    if (o329 > 0) return; // a preRun added a dependency, run will be called later
    if (Module['calledRun']) return; // run may have just been called through dependencies being fulfilled just in this very frame

    function o1144() {
        if (Module['calledRun']) return; // run may have just been called while the async setStatus time below was happening
        Module['calledRun'] = true;

        o287();

        o288();

        if (Module['_main'] && o1137) {
            Module['callMain'](o81);
        }

        o290();
    }

    if (Module['setStatus']) {
        Module['setStatus']('Running...');
        o984(function () {
            o984(function () {
                Module['setStatus']('');
            }, 1);
            if (!o154) o1144();
        }, 1);
    } else {
        o1144();
    }
}
Module['run'] = Module.o1138 = o1138;

function o1143(o818) {
    o154 = true;
    o155 = o818;
    o50 = o1133;

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
    throw new o1132(o818);
}
Module['exit'] = Module.o1143 = o1143;

function abort(o124) {
    if (o124) {
        Module.print(o124);
        Module.o24(o124);
    }

    o154 = true;
    o155 = 1;

    var o1145 = '\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.';

    throw 'abort() at ' + o262() + o1145;
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
var o1137 = true;
if (Module['noInitialRun']) {
    o1137 = false;
}


o1138();

// {{POST_RUN_ADDITIONS}}




// {{MODULE_ADDITIONS}}

////////////////////////////////////////////////////////////////////////////////
// Runner
////////////////////////////////////////////////////////////////////////////////
var o1146 = o11.o12.o13();
o11.o12.o9(o1146 - o14);