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

var o4 = o4 || {};
o4.o5 = (function () {
    return o4.o5 ||
        o4.o6 ||
        o4.o7 ||
        o4.o8 ||
        o4.o9 ||
        Date.o5;
})();


function o11(o12) {
    o1.o2("### SCORE: " + (100 * o0 / o12));
}

var o13 = {};
o13.o14 = {
    o15: o4.o5,
    o11: o11
};

var o16 = o13.o14.o15();

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
var o19 = {};
for (var key in Module) {
    if (Module.hasOwnProperty(key)) {
        o19[key] = Module[key];
    }
}

// The environment setup code below is customized to use Module.
// *** Environment setup code ***
var o22 = typeof o23 === 'object' && typeof o24 === 'function';
var o25 = typeof o26 === 'object';
var o27 = typeof o28 === 'function';
var o29 = !o25 && !o22 && !o27;

if (o22) {
    // Expose functionality in the same simple way that the shells work
    // Note that we pollute the global namespace here, otherwise we break in node
    if (!Module['print']) Module['print'] = function print(o30) {
        o23['stdout'].write(o30 + '\n');
    };
    if (!Module['printErr']) Module['printErr'] = function o32(o30) {
        o23['stderr'].write(o30 + '\n');
    };

    var o33 = o24('fs');
    var o34 = o24('path');

    Module['read'] = function o35(o36, o37) {
        o36 = o34['normalize'](o36);
        var o38 = o33['readFileSync'](o36);
        // The path is absolute if the normalized version is the same as the resolved.
        if (!o38 && o36 != o34['resolve'](o36)) {
            o36 = o39.join(o41, '..', 'src', o36);
            o38 = o33['readFileSync'](o36);
        }
        if (o38 && !o37) o38 = o38.toString();
        return o38;
    };

    Module['readBinary'] = function o43(o36) {
        return Module['read'](o36, true)
    };

    Module['load'] = function o44(o45) {
        o46(o35(o45));
    };

    Module['arguments'] = o23['argv'].slice(2);

    o48['exports'] = Module;
} else if (o29) {
    if (!Module['print']) Module['print'] = print;
    if (typeof o32 != 'undefined') Module['printErr'] = o32; // not present in v8 or older sm

    if (typeof o35 != 'undefined') {
        Module['read'] = o35;
    } else {
        Module['read'] = function o35() {
            throw 'no read() available (jsc?)'
        };
    }

    Module['readBinary'] = function o43(o45) {
        return o35(o45, 'binary');
    };

    if (typeof o49 != 'undefined') {
        Module['arguments'] = o49;
    } else if (typeof arguments != 'undefined') {
        Module['arguments'] = arguments;
    }

    this['Module'] = Module;

    eval("if (typeof gc === 'function' && gc.toString().indexOf('[native code]') > 0) var gc = undefined"); // wipe out the SpiderMonkey shell 'gc' function, which can confuse closure (uses it as a minified name, and it is then initted to a non-falsey value unexpectedly)
} else if (o25 || o27) {
    Module['read'] = function o35(o51) {
        var o52 = new o53();
        o52.o54('GET', o51, false);
        o52.o55(null);
        return o52.o56;
    };

    if (typeof arguments != 'undefined') {
        Module['arguments'] = arguments;
    }

    if (typeof o57 !== 'undefined') {
        if (!Module['print']) Module['print'] = function print(o30) {
            o57.o58(o30);
        };
        if (!Module['printErr']) Module['printErr'] = function o32(o30) {
            o57.o58(o30);
        };
    } else {
        // Probably a worker, and without console.log. We can do very little here...
        var o59 = false;
        if (!Module['print']) Module['print'] = (o59 && (typeof (o60) !== "undefined") ? (function (o30) {
            o60(o30);
        }) : (function (o30) {
            // self.postMessage(x); // enable this if you want stdout to be sent as messages
        }));
    }

    if (o25) {
        this['Module'] = Module;
    } else {
        Module['load'] = o28;
    }
} else {
    // Unreachable because SHELL is dependant on the others
    throw 'Unknown runtime environment. Where are we?';
}

function o46(o30) {
    eval.call(null, o30);
}
if (!Module['load'] == 'undefined' && Module['read']) {
    Module['load'] = function o44(o45) {
        o46(Module['read'](o45));
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
Module.o32 = Module['printErr'];

// Callbacks
Module['preRun'] = [];
Module['postRun'] = [];

// Merge back in the overrides
for (var key in o19) {
    if (o19.hasOwnProperty(key)) {
        Module[key] = o19[key];
    }
}



// === Auto-generated preamble library stuff ===

//========================================
// Runtime code shared with compiler
//========================================

var o62 = {
    o63: function () {
        return o64;
    },
    o65: function (o66) {
        o64 = o66;
    },
    o67: function (target, o69) {
        o69 = o69 || 4;
        if (o69 == 1) return target;
        if (o70(target) && o70(o69)) {
            return Math.ceil(target / o69) * o69;
        } else if (o70(o69) && o73(o69)) {
            return '(((' + target + ')+' + (o69 - 1) + ')&' + -o69 + ')';
        }
        return 'Math.ceil((' + target + ')/' + o69 + ')*' + o69;
    },
    o74: function (type) {
        return type in o62.o76 || type in o62.o77;
    },
    o78: function o78(type) {
        return type[type.length - 1] == '*';
    },
    o80: function o80(type) {
        if (o78(type)) return false;
        if (o81(type)) return true;
        if (/<?\{ ?[^}]* ?\}>?/.test(type)) return true; // { i32, i8 } etc. - anonymous struct types
        // See comment in isStructPointerType()
        return type[0] == '%';
    },
    o76: {
        "i1": 0,
        "i8": 0,
        "i16": 0,
        "i32": 0,
        "i64": 0
    },
    o77: {
        "float": 0,
        "double": 0
    },
    o83: function (o30, o84) {
        var o85 = (o30 | 0) | (o84 | 0);
        var o86 = (Math.o87(o30 / 4294967296) | Math.o87(o84 / 4294967296)) * 4294967296;
        return o85 + o86;
    },
    o88: function (o30, o84) {
        var o85 = (o30 | 0) & (o84 | 0);
        var o86 = (Math.o87(o30 / 4294967296) & Math.o87(o84 / 4294967296)) * 4294967296;
        return o85 + o86;
    },
    o89: function (o30, o84) {
        var o85 = (o30 | 0) ^ (o84 | 0);
        var o86 = (Math.o87(o30 / 4294967296) ^ Math.o87(o84 / 4294967296)) * 4294967296;
        return o85 + o86;
    },
    o90: function (type) {
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
                    return o62.o91; // A pointer
                } else if (type[0] === 'i') {
                    var o92 = parseInt(type.substr(1));
                    o95(o92 % 8 === 0);
                    return o92 / 8;
                } else {
                    return 0;
                }
            }
        }
    },
    o96: function (type) {
        return Math.o97(o62.o90(type), o62.o91);
    },
    o98: function o98(o99, o100) {
        var o101 = {};
        if (o100) {
            return o99.filter(function (o103) {
                if (o101[o103[o100]]) return false;
                o101[o103[o100]] = true;
                return true;
            });
        } else {
            return o99.filter(function (o103) {
                if (o101[o103]) return false;
                o101[o103] = true;
                return true;
            });
        }
    },
    set: function set() {
        var o105 = typeof arguments[0] === 'object' ? arguments[0] : arguments;
        var o38 = {};
        for (var o106 = 0; o106 < o105.length; o106++) {
            o38[o105[o106]] = 0;
        }
        return o38;
    },
    o107: 8,
    o108: function (type, o109, o110) {
        // we align i64s and doubles on 64-bit boundaries, unlike x86
        if (!o110 && (type == 'i64' || type == 'double')) return 8;
        if (!type) return Math.o111(o109, 8); // align structures internally to 64 bits
        return Math.o111(o109 || (type ? o62.o96(type) : 0), o62.o91);
    },
    o112: function o112(type) {
        type.o113 = 0;
        type.o114 = 0;
        var o115 = [];
        var o116 = -1;
        var index = 0;
        type.o118 = type.o119.map(function (o121) {
            index++;
            var o109, o114;
            if (o62.o74(o121) || o62.o78(o121)) {
                o109 = o62.o90(o121); // pack char; char; in structs, also char[X]s.
                o114 = o62.o108(o121, o109);
            } else if (o62.o80(o121)) {
                if (o121[1] === '0') {
                    // this is [0 x something]. When inside another structure like here, it must be at the end,
                    // and it adds no size
                    // XXX this happens in java-nbody for example... assert(index === type.fields.length, 'zero-length in the middle!');
                    o109 = 0;
                    if (o122.o123[o121]) {
                        o114 = o62.o108(null, o122.o123[o121].o114);
                    } else {
                        o114 = type.o114 || o91;
                    }
                } else {
                    o109 = o122.o123[o121].o113;
                    o114 = o62.o108(null, o122.o123[o121].o114);
                }
            } else if (o121[0] == 'b') {
                // bN, large number field, like a [N x i8]
                o109 = o121.substr(1) | 0;
                o114 = 1;
            } else if (o121[0] === '<') {
                // vector type
                o109 = o114 = o122.o123[o121].o113; // fully aligned
            } else if (o121[0] === 'i') {
                // illegal integer field, that could not be legalized because it is an internal structure field
                // it is ok to have such fields, if we just use them as markers of field size and nothing more complex
                o109 = o114 = parseInt(o121.substr(1)) / 8;
                o95(o109 % 1 === 0, 'cannot handle non-byte-size field ' + o121);
            } else {
                o95(false, 'invalid type for calculateStructAlignment');
            }
            if (type.o124) o114 = 1;
            type.o114 = Math.o97(type.o114, o114);
            var o125 = o62.o126(type.o113, o114); // if necessary, place this on aligned memory
            type.o113 = o125 + o109;
            if (o116 >= 0) {
                o115.push(o125 - o116);
            }
            o116 = o125;
            return o125;
        });
        if (type.o128 && type.o128[0] === '[') {
            // arrays have 2 elements, so we get the proper difference. then we scale here. that way we avoid
            // allocating a potentially huge array for [999999 x i8] etc.
            type.o113 = parseInt(type.o128.substr(1)) * type.o113 / 2;
        }
        type.o113 = o62.o126(type.o113, type.o114);
        if (o115.length == 0) {
            type.o129 = type.o113;
        } else if (o62.o98(o115).length == 1) {
            type.o129 = o115[0];
        }
        type.o130 = (type.o129 != 1);
        return type.o118;
    },
    o131: function (o132, o133, o134) {
        var type, o135;
        if (o133) {
            o134 = o134 || 0;
            type = (typeof o122 === 'undefined' ? o62.o136 : o122.o123)[o133];
            if (!type) return null;
            if (type.o119.length != o132.length) {
                o32('Number of named fields must match the type for ' + o133 + ': possibly duplicate struct names. Cannot return structInfo');
                return null;
            }
            o135 = type.o118;
        } else {
            var type = {
                o119: o132.map(function (o103) {
                    return o103[0]
                })
            };
            o135 = o62.o112(type);
        }
        var o38 = {
            o137: type.o113
        };
        if (o133) {
            o132.forEach(function (o103, o106) {
                if (typeof o103 === 'string') {
                    o38[o103] = o135[o106] + o134;
                } else {
                    // embedded struct
                    var key;
                    for (var o139 in o103) key = o139;
                    o38[key] = o62.o131(o103[key], type.o119[o106], o135[o106]);
                }
            });
        } else {
            o132.forEach(function (o103, o106) {
                o38[o103[1]] = o135[o106];
            });
        }
        return o38;
    },
    o140: function (o141, o142, o105) {
        if (o105 && o105.length) {
            if (!o105.splice) o105 = Array.prototype.slice.call(o105);
            o105.splice(0, 0, o142);
            return Module['dynCall_' + o141].apply(null, o105);
        } else {
            return Module['dynCall_' + o141].call(null, o142);
        }
    },
    o147: [],
    addFunction: function (o149) {
        for (var o106 = 0; o106 < o62.o147.length; o106++) {
            if (!o62.o147[o106]) {
                o62.o147[o106] = o149;
                return 2 * (1 + o106);
            }
        }
        throw 'Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.';
    },
    o150: function (index) {
        o62.o147[(index - 2) / 2] = null;
    },
    o151: function (o152, o153) {
        // code is a constant string on the heap, so we can cache these
        if (!o62.o154) o62.o154 = {};
        var o149 = o62.o154[o152];
        if (o149) return o149;
        var o105 = [];
        for (var o106 = 0; o106 < o153; o106++) {
            o105.push(String.fromCharCode(36) + o106); // $0, $1 etc
        }
        o152 = o157(o152);
        if (o152[0] === '"') {
            // tolerate EM_ASM("..code..") even though EM_ASM(..code..) is correct
            if (o152.indexOf('"', 1) === o152.length - 1) {
                o152 = o152.substr(1, o152.length - 2);
            } else {
                // something invalid happened, e.g. EM_ASM("..code($0)..", input)
                o159('invalid EM_ASM input |' + o152 + '|. Please use EM_ASM(..code..) (no quotes) or EM_ASM({ ..code($0).. }, input) (to input values)');
            }
        }
        return o62.o154[o152] = eval('(function(' + o105.join(',') + '){ ' + o152 + ' })'); // new Function does not allow upvars in node
    },
    o160: function (o161) {
        if (!o62.o160.o162) o62.o160.o162 = {};
        if (!o62.o160.o162[o161]) {
            o62.o160.o162[o161] = 1;
            Module.o32(o161);
        }
    },
    o163: {},
    o164: function (o149, o141) {
        o95(o141);
        if (!o62.o163[o149]) {
            o62.o163[o149] = function o165() {
                return o62.o140(o141, o149, arguments);
            };
        }
        return o62.o163[o149];
    },
    o166: function () {
        var buffer = [];
        var o168 = 0;
        this.o169 = function (o152) {
            o152 = o152 & 0xFF;

            if (buffer.length == 0) {
                if ((o152 & 0x80) == 0x00) { // 0xxxxxxx
                    return String.fromCharCode(o152);
                }
                buffer.push(o152);
                if ((o152 & 0xE0) == 0xC0) { // 110xxxxx
                    o168 = 1;
                } else if ((o152 & 0xF0) == 0xE0) { // 1110xxxx
                    o168 = 2;
                } else { // 11110xxx
                    o168 = 3;
                }
                return '';
            }

            if (o168) {
                buffer.push(o152);
                o168--;
                if (o168 > 0) return '';
            }

            var o170 = buffer[0];
            var o171 = buffer[1];
            var o172 = buffer[2];
            var o173 = buffer[3];
            var o38;
            if (buffer.length == 2) {
                o38 = String.fromCharCode(((o170 & 0x1F) << 6) | (o171 & 0x3F));
            } else if (buffer.length == 3) {
                o38 = String.fromCharCode(((o170 & 0x0F) << 12) | ((o171 & 0x3F) << 6) | (o172 & 0x3F));
            } else {
                // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                var o174 = ((o170 & 0x07) << 18) | ((o171 & 0x3F) << 12) |
                    ((o172 & 0x3F) << 6) | (o173 & 0x3F);
                o38 = String.fromCharCode(
                    Math.floor((o174 - 0x10000) / 0x400) + 0xD800, (o174 - 0x10000) % 0x400 + 0xDC00);
            }
            buffer.length = 0;
            return o38;
        }
        this.o176 = function o176(o177) {
            o177 = unescape(encodeURIComponent(o177));
            var o38 = [];
            for (var o106 = 0; o106 < o177.length; o106++) {
                o38.push(o177.charCodeAt(o106));
            }
            return o38;
        }
    },
    o181: function (name) {
        throw 'You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work';
    },
    o183: function (o109) {
        var o38 = o64;
        o64 = (o64 + o109) | 0;
        o64 = (((o64) + 7) & -8);
        return o38;
    },
    o184: function (o109) {
        var o38 = o185;
        o185 = (o185 + o109) | 0;
        o185 = (((o185) + 7) & -8);
        return o38;
    },
    o186: function (o109) {
        var o38 = o187;
        o187 = (o187 + o109) | 0;
        o187 = (((o187) + 7) & -8);
        if (o187 >= o188) o189();;
        return o38;
    },
    o126: function (o109, o69) {
        var o38 = o109 = Math.ceil((o109) / (o69 ? o69 : 8)) * (o69 ? o69 : 8);
        return o38;
    },
    o190: function (o191, o192, o193) {
        var o38 = (o193 ? ((+((o191 >>> 0))) + ((+((o192 >>> 0))) * (+4294967296))) : ((+((o191 >>> 0))) + ((+((o192 | 0))) * (+4294967296))));
        return o38;
    },
    o194: 8,
    o91: 4,
    o195: 0
}


Module['Runtime'] = o62;




//========================================
// Runtime essentials
//========================================

var o196 = 0; // Used in checking for thrown exceptions.

var o197 = false; // whether we are quitting the application. no code should run after this. set in exit() and abort()
var o198 = 0;

var o199 = 0;
// tempInt is used for 32-bit signed values or smaller. tempBigInt is used
// for 32-bit unsigned values or more than 32 bits. TODO: audit all uses of tempInt
var o200, o201, o202, o203, o204, o205, o206, o207, o208, o209, o210, o211, o212;
var o213, o214;
var o215, o216, o217, o218, o219, o220, o221, o222, o223, o224;

function o95(o225, o161) {
    if (!o225) {
        o159('Assertion failed: ' + o161);
    }
}

var o226 = this;

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
function o227(o100, o228, o229, o105) {
    return o230(o231(o100), o228, o229, o105);
}
Module["ccall"] = o227;

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function o231(o100) {
    try {
        var o149 = Module['_' + o100]; // closure exported function
        if (!o149) o149 = eval('_' + o100); // explicit lookup
    } catch (o232) {}
    o95(o149, 'Cannot call unknown function ' + o100 + ' (perhaps LLVM optimizations or closure removed it?)');
    return o149;
}

// Internal function that does a C call using a function, not an identifier
function o230(o149, o228, o229, o105) {
    var o233 = 0;

    function o234(value, type) {
        if (type == 'string') {
            if (value === null || value === undefined || value === 0) return 0; // null string
            value = o237(value);
            type = 'array';
        }
        if (type == 'array') {
            if (!o233) o233 = o62.o63();
            var o38 = o62.o183(value.length);
            o238(value, o38);
            return o38;
        }
        return value;
    }

    function o239(value, type) {
        if (type == 'string') {
            return o157(value);
        }
        o95(type != 'array');
        return value;
    }
    var o106 = 0;
    var o240 = o105 ? o105.map(function (o241) {
        return o234(o241, o229[o106++]);
    }) : [];
    var o38 = o239(o149.apply(null, o240), o228);
    if (o233) o62.o65(o233);
    return o38;
}

// Returns a native JS wrapper for a C function. This is similar to ccall, but
// returns a function you can call repeatedly in a normal way. For example:
//
//   var my_function = cwrap('my_c_function', 'number', ['number', 'number']);
//   alert(my_function(5, 22));
//   alert(my_function(99, 12));
//
function o242(o100, o228, o229) {
    var o149 = o231(o100);
    return function () {
        return o230(o149, o228, o229, Array.prototype.slice.call(arguments));
    }
}
Module["cwrap"] = o242;

// Sets a value in memory in a dynamic way at run-time. Uses the
// type data. This is the same as makeSetValue, except that
// makeSetValue is done at compile-time and generates the needed
// code then, whereas this function picks the right code at
// run-time.
// Note that setValue and getValue only do *aligned* writes and reads!
// Note that ccall uses JS types as for defining types, while setValue and
// getValue need LLVM types ('i8', 'i32') - this is a lower-level operation
function o243(o142, value, type, o244) {
    type = type || 'i8';
    if (type.charAt(type.length - 1) === '*') type = 'i32'; // pointers are 32-bit
    switch (type) {
    case 'i1':
        o246[(o142)] = value;
        break;
    case 'i8':
        o246[(o142)] = value;
        break;
    case 'i16':
        o247[((o142) >> 1)] = value;
        break;
    case 'i32':
        o248[((o142) >> 2)] = value;
        break;
    case 'i64':
        (o213 = [value >>> 0, (o211 = value, (+(o249(o211))) >= (+1) ? (o211 > (+0) ? ((o250((+(o251((o211) / (+4294967296)))), (+4294967295))) | 0) >>> 0 : (~~((+(o252((o211 - +(((~~(o211))) >>> 0)) / (+4294967296)))))) >>> 0) : 0)], o248[((o142) >> 2)] = o213[0], o248[(((o142) + (4)) >> 2)] = o213[1]);
        break;
    case 'float':
        o253[((o142) >> 2)] = value;
        break;
    case 'double':
        o254[((o142) >> 3)] = value;
        break;
    default:
        o159('invalid type for setValue: ' + type);
    }
}
Module['setValue'] = o243;

// Parallel to setValue.
function o255(o142, type, o244) {
    type = type || 'i8';
    if (type.charAt(type.length - 1) === '*') type = 'i32'; // pointers are 32-bit
    switch (type) {
    case 'i1':
        return o246[(o142)];
    case 'i8':
        return o246[(o142)];
    case 'i16':
        return o247[((o142) >> 1)];
    case 'i32':
        return o248[((o142) >> 2)];
    case 'i64':
        return o248[((o142) >> 2)];
    case 'float':
        return o253[((o142) >> 2)];
    case 'double':
        return o254[((o142) >> 3)];
    default:
        o159('invalid type for setValue: ' + type);
    }
    return null;
}
Module['getValue'] = o255;

var o256 = 0; // Tries to use _malloc()
var o257 = 1; // Lives for the duration of the current function call
var o258 = 2; // Cannot be freed
var o259 = 3; // Cannot be freed except through sbrk
var o260 = 4; // Do not allocate
Module['ALLOC_NORMAL'] = o256;
Module['ALLOC_STACK'] = o257;
Module['ALLOC_STATIC'] = o258;
Module['ALLOC_DYNAMIC'] = o259;
Module['ALLOC_NONE'] = o260;

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
function o261(o262, o123, o263, o142) {
    var o264, o109;
    if (typeof o262 === 'number') {
        o264 = true;
        o109 = o262;
    } else {
        o264 = false;
        o109 = o262.length;
    }

    var o265 = typeof o123 === 'string' ? o123 : null;

    var o38;
    if (o263 == o260) {
        o38 = o142;
    } else {
        o38 = [o266, o62.o183, o62.o184, o62.o186][o263 === undefined ? o258 : o263](Math.o97(o109, o265 ? 1 : o123.length));
    }

    if (o264) {
        var o142 = o38,
            o267;
        o95((o38 & 3) == 0);
        o267 = o38 + (o109 & ~3);
        for (; o142 < o267; o142 += 4) {
            o248[((o142) >> 2)] = 0;
        }
        o267 = o38 + o109;
        while (o142 < o267) {
            o246[((o142++) | 0)] = 0;
        }
        return o38;
    }

    if (o265 === 'i8') {
        if (o262.subarray || o262.slice) {
            o269.set(o262, o38);
        } else {
            o269.set(new Uint8Array(o262), o38);
        }
        return o38;
    }

    var o106 = 0,
        type, o271, o272;
    while (o106 < o109) {
        var o125 = o262[o106];

        if (typeof o125 === 'function') {
            o125 = o62.o273(o125);
        }

        type = o265 || o123[o106];
        if (type === 0) {
            o106++;
            continue;
        }

        if (type == 'i64') type = 'i32'; // special case: we have one i32 here, and one i32 later

        o243(o38 + o106, o125, type);

        // no need to look up size unless type changes, so cache it
        if (o272 !== type) {
            o271 = o62.o90(type);
            o272 = type;
        }
        o106 += o271;
    }

    return o38;
}
Module['allocate'] = o261;

function o157(o142, /* optional */ length) {
    // TODO: use TextDecoder
    // Find the length, and check for UTF while doing so
    var o274 = false;
    var o275;
    var o106 = 0;
    while (1) {
        o275 = o269[(((o142) + (o106)) | 0)];
        if (o275 >= 128) o274 = true;
        else if (o275 == 0 && !length) break;
        o106++;
        if (length && o106 == length) break;
    }
    if (!length) length = o106;

    var o38 = '';

    if (!o274) {
        var o276 = 1024; // split up into chunks, because .apply on a huge string can overflow the stack
        var o125;
        while (length > 0) {
            o125 = String.fromCharCode.apply(String, o269.subarray(o142, o142 + Math.o111(length, o276)));
            o38 = o38 ? o38 + o125 : o125;
            o142 += o276;
            length -= o276;
        }
        return o38;
    }

    var o277 = new o62.o166();
    for (o106 = 0; o106 < length; o106++) {
        o275 = o269[(((o142) + (o106)) | 0)];
        o38 += o277.o169(o275);
    }
    return o38;
}
Module['Pointer_stringify'] = o157;

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.
function o278(o142) {
    var o106 = 0;

    var o279 = '';
    while (1) {
        var o280 = o247[(((o142) + (o106 * 2)) >> 1)];
        if (o280 == 0)
            return o279;
        ++o106;
        // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
        o279 += String.fromCharCode(o280);
    }
}
Module['UTF16ToString'] = o278;

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16LE form. The copy will require at most (str.length*2+1)*2 bytes of space in the HEAP.
function o281(o279, o282) {
    for (var o106 = 0; o106 < o279.length; ++o106) {
        // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
        var o280 = o279.charCodeAt(o106); // possibly a lead surrogate
        o247[(((o282) + (o106 * 2)) >> 1)] = o280;
    }
    // Null-terminate the pointer to the HEAP.
    o247[(((o282) + (o279.length * 2)) >> 1)] = 0;
}
Module['stringToUTF16'] = o281;

// Given a pointer 'ptr' to a null-terminated UTF32LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.
function o283(o142) {
    var o106 = 0;

    var o279 = '';
    while (1) {
        var o284 = o248[(((o142) + (o106 * 4)) >> 2)];
        if (o284 == 0)
            return o279;
        ++o106;
        // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
        if (o284 >= 0x10000) {
            var o285 = o284 - 0x10000;
            o279 += String.fromCharCode(0xD800 | (o285 >> 10), 0xDC00 | (o285 & 0x3FF));
        } else {
            o279 += String.fromCharCode(o284);
        }
    }
}
Module['UTF32ToString'] = o283;

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32LE form. The copy will require at most (str.length+1)*4 bytes of space in the HEAP,
// but can use less, since str.length does not return the number of characters in the string, but the number of UTF-16 code units in the string.
function o286(o279, o282) {
    var o287 = 0;
    for (var o288 = 0; o288 < o279.length; ++o288) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
        var o280 = o279.charCodeAt(o288); // possibly a lead surrogate
        if (o280 >= 0xD800 && o280 <= 0xDFFF) {
            var o289 = o279.charCodeAt(++o288);
            o280 = 0x10000 + ((o280 & 0x3FF) << 10) | (o289 & 0x3FF);
        }
        o248[(((o282) + (o287 * 4)) >> 2)] = o280;
        ++o287;
    }
    // Null-terminate the pointer to the HEAP.
    o248[(((o282) + (o287 * 4)) >> 2)] = 0;
}
Module['stringToUTF32'] = o286;

function o290(o149) {
    var o106 = 3;
    // params, etc.
    var o291 = {
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
    var o292 = [];
    var o293 = true;

    function o60(o30) {
        //return;
        if (o30) Module.print(o30);
        Module.print(o149);
        var o294 = '';
        for (var o295 = 0; o295 < o106; o295++) o294 += ' ';
        Module.print(o294 + '^');
    }

    function o296() {
        o106++;
        if (o149[o106] === 'K') o106++; // ignore const
        var o297 = [];
        while (o149[o106] !== 'E') {
            if (o149[o106] === 'S') { // substitution
                o106++;
                var next = o149.indexOf('_', o106);
                var o299 = o149.substring(o106, next) || 0;
                o297.push(o292[o299] || '?');
                o106 = next + 1;
                continue;
            }
            if (o149[o106] === 'C') { // constructor
                o297.push(o297[o297.length - 1]);
                o106 += 2;
                continue;
            }
            var o109 = parseInt(o149.substr(o106));
            var o294 = o109.toString().length;
            if (!o109 || !o294) {
                o106--;
                break;
            } // counter i++ below us
            var o125 = o149.substr(o106 + o294, o109);
            o297.push(o125);
            o292.push(o125);
            o106 += o294 + o109;
        }
        o106++; // skip E
        return o297;
    }

    function parse(o302, o303, o304) { // main parser
        o303 = o303 || Infinity;
        var o38 = '',
            o306 = [];

        function o307() {
            return '(' + o306.join(', ') + ')';
        }
        var name;
        if (o149[o106] === 'N') {
            // namespaced N-E
            name = o296().join('::');
            o303--;
            if (o303 === 0) return o302 ? [name] : name;
        } else {
            // not namespaced
            if (o149[o106] === 'K' || (o293 && o149[o106] === 'L')) o106++; // ignore const and first 'L'
            var o109 = parseInt(o149.substr(o106));
            if (o109) {
                var o294 = o109.toString().length;
                name = o149.substr(o106 + o294, o109);
                o106 += o294 + o109;
            }
        }
        o293 = false;
        if (o149[o106] === 'I') {
            o106++;
            var o308 = parse(true);
            var o309 = parse(true, 1, true);
            o38 += o309[0] + ' ' + name + '<' + o308.join(', ') + '>';
        } else {
            o38 = name;
        }
        paramLoop: while (o106 < o149.length && o303-- > 0) {
            //dump('paramLoop');
            var o310 = o149[o106++];
            if (o310 in o291) {
                o306.push(o291[o310]);
            } else {
                switch (o310) {
                case 'P':
                    o306.push(parse(true, 1, true)[0] + '*');
                    break; // pointer
                case 'R':
                    o306.push(parse(true, 1, true)[0] + '&');
                    break; // reference
                case 'L':
                    { // literal
                        o106++; // skip basic type
                        var o311 = o149.indexOf('E', o106);
                        var o109 = o311 - o106;
                        o306.push(o149.substr(o106, o109));
                        o106 += o109 + 2; // size + 'EE'
                        break;
                    }
                case 'A':
                    { // array
                        var o109 = parseInt(o149.substr(o106));
                        o106 += o109.toString().length;
                        if (o149[o106] !== '_') throw '?';
                        o106++; // skip _
                        o306.push(parse(true, 1, true)[0] + ' [' + o109 + ']');
                        break;
                    }
                case 'E':
                    break o312;
                default:
                    o38 += '?' + o310;
                    break o312paramLoop: while (i < func.length && limit-- > 0) {
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
                    break paramLoopo312: while (i < func.length && limit-- > 0) {
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
        if (!o304 && o306.length === 1 && o306[0] === 'void') o306 = []; // avoid (void)
        return o302 ? o306 : o38 + o307();
    }
    try {
        // Special-case the entry point, since its name differs from other name mangling.
        if (o149 == 'Object._main' || o149 == '_main') {
            return 'main()';
        }
        if (typeof o149 === 'number') o149 = o157(o149);
        if (o149[0] !== '_') return o149;
        if (o149[1] !== '_') return o149; // C function
        if (o149[2] !== 'Z') return o149;
        switch (o149[3]) {
        case 'n':
            return 'operator new()';
        case 'd':
            return 'operator delete()';
        }
        return parse();
    } catch (o232) {
        return o149;
    }
}

function o313(o161) {
    return o161.replace(/__Z[\w\d_]+/g, function (o30) {
        var o84 = o290(o30);
        return o30 === o84 ? o30 : (o30 + ' [' + o84 + ']')
    });
}

function o315() {
    var o233 = new Error().o233;
    return o233 ? o313(o233) : '(no stack trace available)'; // Stack trace is not available at least on IE10 and Safari 6.
}

// Memory management

var o317 = 4096;

function o318(o30) {
    return (o30 + 4095) & -4096;
}

var o319;
var o246, o269, o247, o320, o248, o321, o253, o254;

var o322 = 0,
    o185 = 0,
    o323 = false; // static area
var o324 = 0,
    o64 = 0,
    o325 = 0; // stack area
var o326 = 0,
    o187 = 0; // dynamic area handled by sbrk

function o189() {
    o159('Cannot enlarge memory arrays. Either (1) compile with -s TOTAL_MEMORY=X with X higher than the current value ' + o188 + ', (2) compile with ALLOW_MEMORY_GROWTH which adjusts the size at runtime but prevents some optimizations, or (3) set Module.TOTAL_MEMORY before the program runs.');
}

var o327 = Module['TOTAL_STACK'] || 5242880;
var o188 = Module['TOTAL_MEMORY'] || 16777216;
var o328 = Module['FAST_MEMORY'] || 2097152;

var o329 = 4096;
while (o329 < o188 || o329 < 2 * o327) {
    if (o329 < 16 * 1024 * 1024) {
        o329 *= 2;
    } else {
        o329 += 16 * 1024 * 1024
    }
}
if (o329 !== o188) {
    Module.o32('increasing TOTAL_MEMORY to ' + o329 + ' to be more reasonable');
    o188 = o329;
}

// Initialize the runtime's memory
// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
o95(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && !!(new Int32Array(1)['subarray']) && !!(new Int32Array(1)['set']),
    'JS engine does not provide full typed array support');

var buffer = new ArrayBuffer(o188);
o246 = new Int8Array(buffer);
o247 = new Int16Array(buffer);
o248 = new Int32Array(buffer);
o269 = new Uint8Array(buffer);
o320 = new Uint16Array(buffer);
o321 = new Uint32Array(buffer);
o253 = new Float32Array(buffer);
o254 = new Float64Array(buffer);

// Endianness check (note: assumes compiler arch was little-endian)
o248[0] = 255;
o95(o269[0] === 255 && o269[3] === 0, 'Typed arrays 2 must be run on a little-endian system');

Module['HEAP'] = o319;
Module['HEAP8'] = o246;
Module['HEAP16'] = o247;
Module['HEAP32'] = o248;
Module['HEAPU8'] = o269;
Module['HEAPU16'] = o320;
Module['HEAPU32'] = o321;
Module['HEAPF32'] = o253;
Module['HEAPF64'] = o254;

function o338(o339) {
    while (o339.length > 0) {
        var o340 = o339.shift();
        if (typeof o340 == 'function') {
            o340();
            continue;
        }
        var o149 = o340.o149;
        if (typeof o149 === 'number') {
            if (o340.o241 === undefined) {
                o62.o140('v', o149);
            } else {
                o62.o140('vi', o149, [o340.o241]);
            }
        } else {
            o149(o340.o241 === undefined ? null : o340.o241);
        }
    }
}

var o342 = []; // functions called before the runtime is initialized
var o343 = []; // functions called during startup
var o344 = []; // functions called when main() is to be run
var o345 = []; // functions called during shutdown
var o346 = []; // functions called after the runtime has exited

var o347 = false;

function o348() {
    // compatibility - merge in anything from Module['preRun'] at this time
    if (Module['preRun']) {
        if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
        while (Module['preRun'].length) {
            o349(Module['preRun'].shift());
        }
    }
    o338(o342);
}

function o350() {
    if (o347) return;
    o347 = true;
    o338(o343);
}

function o351() {
    o338(o344);
}

function o352() {
    o338(o345);
}

function o353() {
    // compatibility - merge in anything from Module['postRun'] at this time
    if (Module['postRun']) {
        if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
        while (Module['postRun'].length) {
            o354(Module['postRun'].shift());
        }
    }
    o338(o346);
}

function o349(o355) {
    o342.unshift(o355);
}
Module['addOnPreRun'] = Module.o349 = o349;

function o357(o355) {
    o343.unshift(o355);
}
Module['addOnInit'] = Module.o357 = o357;

function o358(o355) {
    o344.unshift(o355);
}
Module['addOnPreMain'] = Module.o358 = o358;

function o359(o355) {
    o345.unshift(o355);
}
Module['addOnExit'] = Module.o359 = o359;

function o354(o355) {
    o346.unshift(o355);
}
Module['addOnPostRun'] = Module.o354 = o354;

// Tools

// This processes a JS string into a C-line array of numbers, 0-terminated.
// For LLVM-originating strings, see parser.js:parseLLVMString function
function o237(o360, o361, length /* optional */ ) {
    var o38 = (new o62.o166()).o176(o360);
    if (length) {
        o38.length = length;
    }
    if (!o361) {
        o38.push(0);
    }
    return o38;
}
Module['intArrayFromString'] = o237;

function o362(o363) {
    var o38 = [];
    for (var o106 = 0; o106 < o363.length; o106++) {
        var o364 = o363[o106];
        if (o364 > 0xFF) {
            o364 &= 0xFF;
        }
        o38.push(String.fromCharCode(o364));
    }
    return o38.join('');
}
Module['intArrayToString'] = o362;

// Write a Javascript array to somewhere in the heap
function o365(o177, buffer, o361) {
    var o363 = o237(o177, o361);
    var o106 = 0;
    while (o106 < o363.length) {
        var o364 = o363[o106];
        o246[(((buffer) + (o106)) | 0)] = o364;
        o106 = o106 + 1;
    }
}
Module['writeStringToMemory'] = o365;

function o238(o363, buffer) {
    for (var o106 = 0; o106 < o363.length; o106++) {
        o246[(((buffer) + (o106)) | 0)] = o363[o106];
    }
}
Module['writeArrayToMemory'] = o238;

function o366(o279, buffer, o361) {
    for (var o106 = 0; o106 < o279.length; o106++) {
        o246[(((buffer) + (o106)) | 0)] = o279.charCodeAt(o106);
    }
    if (!o361) o246[(((buffer) + (o279.length)) | 0)] = 0;
}
Module['writeAsciiToMemory'] = o366;

function o367(value, o92, o368) {
    if (value >= 0) {
        return value;
    }
    return o92 <= 32 ? 2 * Math.abs(1 << (o92 - 1)) + value // Need some trickery, since if bits == 32, we are right at the limit of the bits JS uses in bitshifts
        : Math.o370(2, o92) + value;
}

function o371(value, o92, o368) {
    if (value <= 0) {
        return value;
    }
    var o372 = o92 <= 32 ? Math.abs(1 << (o92 - 1)) // abs is needed if bits == 32
        : Math.o370(2, o92 - 1);
    if (value >= o372 && (o92 <= 32 || value > o372)) { // for huge values, we can hit the precision limit and always get true here. so don't do that
        // but, in general there is no perfect solution here. With 64-bit ints, we get rounding and errors
        // TODO: In i64 mode 1, resign the two parts separately and safely
        value = -2 * o372 + value; // Cannot bitshift half, as it may be at the limit of the bits JS uses in bitshifts
    }
    return value;
}

// check for imul support, and also for correctness ( https://bugs.webkit.org/show_bug.cgi?id=126345 )
if (!Math['imul'] || Math['imul'](0xffffffff, 5) !== -5) Math['imul'] = function imul(o295, o374) {
    var o375 = o295 >>> 16;
    var o376 = o295 & 0xffff;
    var o377 = o374 >>> 16;
    var o378 = o374 & 0xffff;
    return (o376 * o378 + ((o375 * o378 + o376 * o377) << 16)) | 0;
};
Math.imul = Math['imul'];


var o249 = Math.abs;
var o379 = Math.cos;
var o381 = Math.sin;
var o383 = Math.tan;
var o385 = Math.acos;
var o387 = Math.o388;
var o389 = Math.o390;
var o391 = Math.atan2;
var o393 = Math.o394;
var o395 = Math.o58;
var o396 = Math.sqrt;
var o252 = Math.ceil;
var o251 = Math.floor;
var o398 = Math.o370;
var o399 = Math.imul;
var o400 = Math.fround;
var o250 = Math.o111;

// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// PRE_RUN_ADDITIONS (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var o402 = 0;
var o403 = null;
var o404 = null; // overridden to take different actions when all run dependencies are fulfilled

function o405(o406) {
    o402++;
    if (Module['monitorRunDependencies']) {
        Module['monitorRunDependencies'](o402);
    }
}
Module['addRunDependency'] = o405;

function o407(o406) {
    o402--;
    if (Module['monitorRunDependencies']) {
        Module['monitorRunDependencies'](o402);
    }
    if (o402 == 0) {
        if (o403 !== null) {
            o408(o403);
            o403 = null;
        }
        if (o404) {
            var o340 = o404;
            o404 = null;
            o340(); // can add another dependenciesFulfilled
        }
    }
}
Module['removeRunDependency'] = o407;

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data


var o409 = null;

// === Body ===




o322 = 8;

o185 = o322 + o62.o126(20195);
/* global initializers */
o343.push();


/* memory initializer */
o261([], "i8", o260, o62.o194);




var o410 = o62.o126(o261(12, "i8", o258), 8);

o95(o410 % 8 == 0);

function o411(o142) { // functions, because inlining this code increases code size too much

    o246[o410] = o246[o142];

    o246[o410 + 1] = o246[o142 + 1];

    o246[o410 + 2] = o246[o142 + 2];

    o246[o410 + 3] = o246[o142 + 3];

}

function o412(o142) {

    o246[o410] = o246[o142];

    o246[o410 + 1] = o246[o142 + 1];

    o246[o410 + 2] = o246[o142 + 2];

    o246[o410 + 3] = o246[o142 + 3];

    o246[o410 + 4] = o246[o142 + 4];

    o246[o410 + 5] = o246[o142 + 5];

    o246[o410 + 6] = o246[o142 + 6];

    o246[o410 + 7] = o246[o142 + 7];

}


function o266(o413) {
    /* Over-allocate to make sure it is byte-aligned by 8.
     * This will leak memory, but this is only the dummy
     * implementation (replaced by dlmalloc normally) so
     * not an issue.
     */
    var o142 = o62.o186(o413 + 8);
    return (o142 + 8) & 0xFFFFFFF8;
}
Module["_malloc"] = o266;




var o414 = {
    o415: 1,
    o416: 2,
    o417: 3,
    o418: 4,
    o419: 5,
    o420: 6,
    o421: 7,
    o422: 8,
    o423: 9,
    o424: 10,
    o425: 11,
    o426: 11,
    o427: 12,
    o428: 13,
    o429: 14,
    o430: 15,
    o431: 16,
    o432: 17,
    o433: 18,
    o434: 19,
    o435: 20,
    o436: 21,
    o437: 22,
    o438: 23,
    o439: 24,
    o440: 25,
    o441: 26,
    o442: 27,
    o443: 28,
    o444: 29,
    o445: 30,
    o446: 31,
    o447: 32,
    o448: 33,
    o449: 34,
    o450: 42,
    o451: 43,
    o452: 44,
    o453: 45,
    o454: 46,
    o455: 47,
    o456: 48,
    o457: 49,
    o458: 50,
    o459: 51,
    o460: 35,
    o461: 37,
    o462: 52,
    o463: 53,
    o464: 54,
    o465: 55,
    o466: 56,
    o467: 57,
    o468: 35,
    o469: 59,
    o470: 60,
    o471: 61,
    o472: 62,
    o473: 63,
    o474: 64,
    o475: 65,
    o476: 66,
    o477: 67,
    o478: 68,
    o479: 69,
    o480: 70,
    o481: 71,
    o482: 72,
    o483: 73,
    o484: 74,
    o485: 76,
    o486: 77,
    o487: 78,
    o488: 79,
    o489: 80,
    o490: 81,
    o491: 82,
    o492: 83,
    o493: 38,
    o494: 39,
    o495: 36,
    o496: 40,
    o497: 95,
    o498: 96,
    o499: 104,
    o500: 105,
    o501: 97,
    o502: 91,
    o503: 88,
    o504: 92,
    o505: 108,
    o506: 111,
    o507: 98,
    o508: 103,
    o509: 101,
    o510: 100,
    o511: 110,
    o512: 112,
    o513: 113,
    o514: 115,
    o515: 114,
    o516: 89,
    o517: 90,
    o518: 93,
    o519: 94,
    o520: 99,
    o521: 102,
    o522: 106,
    o523: 107,
    o524: 109,
    o525: 87,
    o526: 122,
    o527: 116,
    o528: 95,
    o529: 123,
    o530: 84,
    o531: 75,
    o532: 125,
    o533: 131,
    o534: 130,
    o535: 86
};

var o536 = {
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


var o537 = 0;

function o538(value) {
    // For convenient setting and returning of errno.
    o248[((o537) >> 2)] = value;
    return value;
}

var o539 = {
    o540: [],
    o541: function () {
        // https://github.com/kripken/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process['stdin']['setEncoding']('utf8');
        // }
    },
    o542: function () {
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
    o543: function (o544, o545) {
        o539.o540[o544] = {
            input: [],
            o547: [],
            o545: o545
        };
        o548.o549(o544, o539.o550);
    },
    o550: {
        o54: function (o551) {
            var o552 = o539.o540[o551.o553.o554];
            if (!o552) {
                throw new o548.o555(o414.o434);
            }
            o551.o552 = o552;
            o551.o556 = false;
        },
        o557: function (o551) {
            // flush any pending line data
            if (o551.o552.o547.length) {
                o551.o552.o545.o558(o551.o552, 10);
            }
        },
        o35: function (o551, buffer, o134, length, o559 /* ignored */ ) {
            if (!o551.o552 || !o551.o552.o545.o560) {
                throw new o548.o555(o414.o420);
            }
            var o561 = 0;
            for (var o106 = 0; o106 < length; o106++) {
                var o562;
                try {
                    o562 = o551.o552.o545.o560(o551.o552);
                } catch (o232) {
                    throw new o548.o555(o414.o419);
                }
                if (o562 === undefined && o561 === 0) {
                    throw new o548.o555(o414.o425);
                }
                if (o562 === null || o562 === undefined) break;
                o561++;
                buffer[o134 + o106] = o562;
            }
            if (o561) {
                o551.o553.o563 = Date.o5();
            }
            return o561;
        },
        write: function (o551, buffer, o134, length, o559) {
            if (!o551.o552 || !o551.o552.o545.o558) {
                throw new o548.o555(o414.o420);
            }
            for (var o106 = 0; o106 < length; o106++) {
                try {
                    o551.o552.o545.o558(o551.o552, buffer[o134 + o106]);
                } catch (o232) {
                    throw new o548.o555(o414.o419);
                }
            }
            if (length) {
                o551.o553.o563 = Date.o5();
            }
            return o106;
        }
    },
    o564: {
        o560: function (o552) {
            if (!o552.input.length) {
                var o562 = null;
                if (o22) {
                    o562 = o23['stdin']['read']();
                    if (!o562) {
                        if (o23['stdin']['_readableState'] && o23['stdin']['_readableState']['ended']) {
                            return null; // EOF
                        }
                        return undefined; // no data available
                    }
                } else if (typeof o26 != 'undefined' &&
                    typeof o26.o565 == 'function') {
                    // Browser.
                    o562 = o26.o565('Input: '); // returns null on cancel
                    if (o562 !== null) {
                        o562 += '\n';
                    }
                } else if (typeof o566 == 'function') {
                    // Command line.
                    o562 = o566();
                    if (o562 !== null) {
                        o562 += '\n';
                    }
                }
                if (!o562) {
                    return null;
                }
                o552.input = o237(o562, true);
            }
            return o552.input.shift();
        },
        o558: function (o552, o567) {
            if (o567 === null || o567 === 10) {
                Module['print'](o552.o547.join(''));
                o552.o547 = [];
            } else {
                o552.o547.push(o539.o277.o169(o567));
            }
        }
    },
    o568: {
        o558: function (o552, o567) {
            if (o567 === null || o567 === 10) {
                Module['printErr'](o552.o547.join(''));
                o552.o547 = [];
            } else {
                o552.o547.push(o539.o277.o169(o567));
            }
        }
    }
};

var o569 = {
    o570: null,
    o571: 1,
    o572: 2,
    o573: 3,
    o574: function (o574) {
        return o569.o575(null, '/', 16384 | 511 /* 0777 */ , 0);
    },
    o575: function (o576, name, o577, o544) {
        if (o548.o578(o577) || o548.o579(o577)) {
            // no supported
            throw new o548.o555(o414.o415);
        }
        if (!o569.o570) {
            o569.o570 = {
                o580: {
                    o553: {
                        o581: o569.o582.o581,
                        o583: o569.o582.o583,
                        o584: o569.o582.o584,
                        o585: o569.o582.o585,
                        o586: o569.o582.o586,
                        o587: o569.o582.o587,
                        o588: o569.o582.o588,
                        o589: o569.o582.o589,
                        o590: o569.o582.o590
                    },
                    o551: {
                        o591: o569.o550.o591
                    }
                },
                o592: {
                    o553: {
                        o581: o569.o582.o581,
                        o583: o569.o582.o583
                    },
                    o551: {
                        o591: o569.o550.o591,
                        o35: o569.o550.o35,
                        write: o569.o550.write,
                        o261: o569.o550.o261,
                        o593: o569.o550.o593
                    }
                },
                link: {
                    o553: {
                        o581: o569.o582.o581,
                        o583: o569.o582.o583,
                        o595: o569.o582.o595
                    },
                    o551: {}
                },
                o596: {
                    o553: {
                        o581: o569.o582.o581,
                        o583: o569.o582.o583
                    },
                    o551: o548.o597
                },
            };
        }
        var o553 = o548.o575(o576, name, o577, o544);
        if (o548.o598(o553.o577)) {
            o553.o582 = o569.o570.o580.o553;
            o553.o550 = o569.o570.o580.o551;
            o553.o599 = {};
        } else if (o548.o600(o553.o577)) {
            o553.o582 = o569.o570.o592.o553;
            o553.o550 = o569.o570.o592.o551;
            o553.o599 = [];
            o553.o601 = o569.o572;
        } else if (o548.o602(o553.o577)) {
            o553.o582 = o569.o570.link.o553;
            o553.o550 = o569.o570.link.o551;
        } else if (o548.o603(o553.o577)) {
            o553.o582 = o569.o570.o596.o553;
            o553.o550 = o569.o570.o596.o551;
        }
        o553.o563 = Date.o5();
        // add the new node to the parent
        if (o576) {
            o576.o599[name] = o553;
        }
        return o553;
    },
    o604: function (o553) {
        if (o553.o601 !== o569.o572) {
            var o599 = o553.o599;
            o553.o599 = Array.prototype.slice.call(o599);
            o553.o601 = o569.o572;
        }
    },
    o582: {
        o581: function (o553) {
            var o605 = {};
            // device numbers reuse inode numbers.
            o605.o544 = o548.o603(o553.o577) ? o553.o406 : 1;
            o605.o606 = o553.o406;
            o605.o577 = o553.o577;
            o605.o607 = 1;
            o605.o608 = 0;
            o605.o609 = 0;
            o605.o554 = o553.o554;
            if (o548.o598(o553.o577)) {
                o605.o109 = 4096;
            } else if (o548.o600(o553.o577)) {
                o605.o109 = o553.o599.length;
            } else if (o548.o602(o553.o577)) {
                o605.o109 = o553.link.length;
            } else {
                o605.o109 = 0;
            }
            o605.o610 = new Date(o553.o563);
            o605.o611 = new Date(o553.o563);
            o605.o612 = new Date(o553.o563);
            // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
            //       but this is not required by the standard.
            o605.o613 = 4096;
            o605.o614 = Math.ceil(o605.o109 / o605.o613);
            return o605;
        },
        o583: function (o553, o605) {
            if (o605.o577 !== undefined) {
                o553.o577 = o605.o577;
            }
            if (o605.o563 !== undefined) {
                o553.o563 = o605.o563;
            }
            if (o605.o109 !== undefined) {
                o569.o604(o553);
                var o599 = o553.o599;
                if (o605.o109 < o599.length) o599.length = o605.o109;
                else
                    while (o605.o109 > o599.length) o599.push(0);
            }
        },
        o584: function (o576, name) {
            throw o548.o615[o414.o416];
        },
        o585: function (o576, name, o577, o544) {
            return o569.o575(o576, name, o577, o544);
        },
        o586: function (o616, o617, o618) {
            // if we're overwriting a directory at new_name, make sure it's empty.
            if (o548.o598(o616.o577)) {
                var o619;
                try {
                    o619 = o548.o620(o617, o618);
                } catch (o232) {}
                if (o619) {
                    for (var o106 in o619.o599) {
                        throw new o548.o555(o414.o494);
                    }
                }
            }
            // do the internal rewiring
            delete o616.o576.o599[o616.name];
            o616.name = o618;
            o617.o599[o618] = o616;
            o616.o576 = o617;
        },
        o587: function (o576, name) {
            delete o576.o599[name];
        },
        o588: function (o576, name) {
            var o553 = o548.o620(o576, name);
            for (var o106 in o553.o599) {
                throw new o548.o555(o414.o494);
            }
            delete o576.o599[name];
        },
        o589: function (o553) {
            var entries = ['.', '..']
            for (var key in o553.o599) {
                if (!o553.o599.hasOwnProperty(key)) {
                    continue;
                }
                entries.push(key);
            }
            return entries;
        },
        o590: function (o576, o622, o623) {
            var o553 = o569.o575(o576, o622, 511 /* 0777 */ | 40960, 0);
            o553.link = o623;
            return o553;
        },
        o595: function (o553) {
            if (!o548.o602(o553.o577)) {
                throw new o548.o555(o414.o437);
            }
            return o553.link;
        }
    },
    o550: {
        o35: function (o551, buffer, o134, length, o624) {
            var o599 = o551.o553.o599;
            if (o624 >= o599.length)
                return 0;
            var o109 = Math.o111(o599.length - o624, length);
            o95(o109 >= 0);
            if (o109 > 8 && o599.subarray) { // non-trivial, and typed array
                buffer.set(o599.subarray(o624, o624 + o109), o134);
            } else {
                for (var o106 = 0; o106 < o109; o106++) {
                    buffer[o134 + o106] = o599[o624 + o106];
                }
            }
            return o109;
        },
        write: function (o551, buffer, o134, length, o624, o625) {
            var o553 = o551.o553;
            o553.o563 = Date.o5();
            var o599 = o553.o599;
            if (length && o599.length === 0 && o624 === 0 && buffer.subarray) {
                // just replace it with the new data
                if (o625 && o134 === 0) {
                    o553.o599 = buffer; // this could be a subarray of Emscripten HEAP, or allocated from some other source.
                    o553.o601 = (buffer.buffer === o246.buffer) ? o569.o571 : o569.o573;
                } else {
                    o553.o599 = new Uint8Array(buffer.subarray(o134, o134 + length));
                    o553.o601 = o569.o573;
                }
                return length;
            }
            o569.o604(o553);
            var o599 = o553.o599;
            while (o599.length < o624) o599.push(0);
            for (var o106 = 0; o106 < length; o106++) {
                o599[o624 + o106] = buffer[o134 + o106];
            }
            return length;
        },
        o591: function (o551, o134, o626) {
            var o624 = o134;
            if (o626 === 1) { // SEEK_CUR.
                o624 += o551.o624;
            } else if (o626 === 2) { // SEEK_END.
                if (o548.o600(o551.o553.o577)) {
                    o624 += o551.o553.o599.length;
                }
            }
            if (o624 < 0) {
                throw new o548.o555(o414.o437);
            }
            o551.o627 = [];
            o551.o624 = o624;
            return o624;
        },
        o261: function (o551, o134, length) {
            o569.o604(o551.o553);
            var o599 = o551.o553.o599;
            var o303 = o134 + length;
            while (o303 > o599.length) o599.push(0);
        },
        o593: function (o551, buffer, o134, length, o624, o628, flags) {
            if (!o548.o600(o551.o553.o577)) {
                throw new o548.o555(o414.o434);
            }
            var o142;
            var o630;
            var o599 = o551.o553.o599;
            // Only make a new copy when MAP_PRIVATE is specified.
            if (!(flags & 2) &&
                (o599.buffer === buffer || o599.buffer === buffer.buffer)) {
                // We can't emulate MAP_SHARED when the file is not backed by the buffer
                // we're mapping to (e.g. the HEAP buffer).
                o630 = false;
                o142 = o599.byteOffset;
            } else {
                // Try to avoid unnecessary slices.
                if (o624 > 0 || o624 + length < o599.length) {
                    if (o599.subarray) {
                        o599 = o599.subarray(o624, o624 + length);
                    } else {
                        o599 = Array.prototype.slice.call(o599, o624, o624 + length);
                    }
                }
                o630 = true;
                o142 = o266(length);
                if (!o142) {
                    throw new o548.o555(o414.o427);
                }
                buffer.set(o599, o142);
            }
            return {
                o142: o142,
                o630: o630
            };
        }
    }
};

var o632 = {
    o633: {},
    o634: function () {
        return o26.o634 || o26.o635 || o26.o636 || o26.o637;
    },
    o638: 21,
    o639: "FILE_DATA",
    o574: function (o574) {
        // reuse all of the core MEMFS functionality
        return o569.o574.apply(null, arguments);
    },
    o640: function (o574, o641, o340) {
        o632.o642(o574, function (o643, o644) {
            if (o643) return o340(o643);

            o632.o645(o574, function (o643, o646) {
                if (o643) return o340(o643);

                var o647 = o641 ? o646 : o644;
                var o648 = o641 ? o644 : o646;

                o632.o649(o647, o648, o340);
            });
        });
    },
    o650: function (name, o340) {
        // check the cache first
        var o651 = o632.o633[name];
        if (o651) {
            return o340(null, o651);
        }

        var o652;
        try {
            o652 = o632.o634().o54(name, o632.o638);
        } catch (o232) {
            return o340(o232);
        }
        o652.o653 = function (o232) {
            var o651 = o232.target.o562;
            var o654 = o232.target.o654;

            var o655;

            if (o651.o656.o657(o632.o639)) {
                o655 = o654.o658(o632.o639);
            } else {
                o655 = o651.o659(o632.o639);
            }

            o655.o660('timestamp', 'timestamp', {
                o661: false
            });
        };
        o652.o662 = function () {
            o651 = o652.o562;

            // add to the cache
            o632.o633[name] = o651;
            o340(null, o651);
        };
        o652.o663 = function () {
            o340(this.o664);
        };
    },
    o642: function (o574, o340) {
        var entries = {};

        function o665(o666) {
            return o666 !== '.' && o666 !== '..';
        };

        function o667(o668) {
            return function (o666) {
                return o669.o670(o668, o666);
            }
        };

        var o671 = o548.o589(o574.o672).filter(o665).map(o667(o574.o672));

        while (o671.length) {
            var o39 = o671.pop();
            var o674;

            try {
                o674 = o548.o674(o39);
            } catch (o232) {
                return o340(o232);
            }

            if (o548.o598(o674.o577)) {
                o671.push.apply(o671, o548.o589(o39).filter(o665).map(o667(o39)));
            }

            entries[o39] = {
                o563: o674.o611
            };
        }

        return o340(null, {
            type: 'local',
            entries: entries
        });
    },
    o645: function (o574, o340) {
        var entries = {};

        o632.o650(o574.o672, function (o643, o651) {
            if (o643) return o340(o643);

            var o654 = o651.o654([o632.o639], 'readonly');
            o654.o663 = function () {
                o340(this.o664);
            };

            var o675 = o654.o658(o632.o639);
            var index = o675.index('timestamp');

            index.o676().o662 = function (o677) {
                var o678 = o677.target.o562;

                if (!o678) {
                    return o340(null, {
                        type: 'remote',
                        o651: o651,
                        entries: entries
                    });
                }

                entries[o678.o679] = {
                    o563: o678.key
                };

                o678.o680();
            };
        });
    },
    o681: function (o39, o340) {
        var o674, o553;

        try {
            var o584 = o548.o682(o39);
            o553 = o584.o553;
            o674 = o548.o674(o39);
        } catch (o232) {
            return o340(o232);
        }

        if (o548.o598(o674.o577)) {
            return o340(null, {
                o563: o674.o611,
                o577: o674.o577
            });
        } else if (o548.o600(o674.o577)) {
            return o340(null, {
                o563: o674.o611,
                o577: o674.o577,
                o599: o553.o599
            });
        } else {
            return o340(new Error('node type not supported'));
        }
    },
    o683: function (o39, o684, o340) {
        try {
            if (o548.o598(o684.o577)) {
                o548.o685(o39, o684.o577);
            } else if (o548.o600(o684.o577)) {
                o548.o686(o39, o684.o599, {
                    o687: 'binary',
                    o625: true
                });
            } else {
                return o340(new Error('node type not supported'));
            }

            o548.o688(o39, o684.o563, o684.o563);
        } catch (o232) {
            return o340(o232);
        }

        o340(null);
    },
    o689: function (o39, o340) {
        try {
            var o584 = o548.o682(o39);
            var o674 = o548.o674(o39);

            if (o548.o598(o674.o577)) {
                o548.o588(o39);
            } else if (o548.o600(o674.o577)) {
                o548.o587(o39);
            }
        } catch (o232) {
            return o340(o232);
        }

        o340(null);
    },
    o690: function (o675, o39, o340) {
        var o652 = o675.get(o39);
        o652.o662 = function (o677) {
            o340(null, o677.target.o562);
        };
        o652.o663 = function () {
            o340(this.o664);
        };
    },
    o692: function (o675, o39, o684, o340) {
        var o652 = o675.o693(o684, o39);
        o652.o662 = function () {
            o340(null);
        };
        o652.o663 = function () {
            o340(this.o664);
        };
    },
    o694: function (o675, o39, o340) {
        var o652 = o675.o695(o39);
        o652.o662 = function () {
            o340(null);
        };
        o652.o663 = function () {
            o340(this.o664);
        };
    },
    o649: function (o647, o648, o340) {
        var o696 = 0;

        var create = [];
        Object.keys(o647.entries).forEach(function (key) {
            var o232 = o647.entries[key];
            var o700 = o648.entries[key];
            if (!o700 || o232.o563 > o700.o563) {
                create.push(key);
                o696++;
            }
        });

        var o701 = [];
        Object.keys(o648.entries).forEach(function (key) {
            var o232 = o648.entries[key];
            var o700 = o647.entries[key];
            if (!o700) {
                o701.push(key);
                o696++;
            }
        });

        if (!o696) {
            return o340(null);
        }

        var o702 = false;
        var o703 = 0;
        var o651 = o647.type === 'remote' ? o647.o651 : o648.o651;
        var o654 = o651.o654([o632.o639], 'readwrite');
        var o675 = o654.o658(o632.o639);

        function done(o643) {
            if (o643) {
                if (!done.o702) {
                    done.o702 = true;
                    return o340(o643);
                }
                return;
            }
            if (++o703 >= o696) {
                return o340(null);
            }
        };

        o654.o663 = function () {
            done(this.o664);
        };

        // sort paths in ascending order so directory entries are created
        // before the files inside them
        create.sort().forEach(function (o39) {
            if (o648.type === 'local') {
                o632.o690(o675, o39, function (o643, o684) {
                    if (o643) return done(o643);
                    o632.o683(o39, o684, done);
                });
            } else {
                o632.o681(o39, function (o643, o684) {
                    if (o643) return done(o643);
                    o632.o692(o675, o39, o684, done);
                });
            }
        });

        // sort paths in descending order so files are deleted before their
        // parent directories
        o701.sort().reverse().forEach(function (o39) {
            if (o648.type === 'local') {
                o632.o689(o39, done);
            } else {
                o632.o694(o675, o39, done);
            }
        });
    }
};

var o707 = {
    o708: false,
    o709: function () {
        o707.o708 = !!o23.o710.match(/^win/);
    },
    o574: function (o574) {
        o95(o22);
        return o707.o575(null, '/', o707.o712(o574.o713.o668), 0);
    },
    o575: function (o576, name, o577, o544) {
        if (!o548.o598(o577) && !o548.o600(o577) && !o548.o602(o577)) {
            throw new o548.o555(o414.o437);
        }
        var o553 = o548.o575(o576, name, o577);
        o553.o582 = o707.o582;
        o553.o550 = o707.o550;
        return o553;
    },
    o712: function (o39) {
        var o674;
        try {
            o674 = o714.o715(o39);
            if (o707.o708) {
                // On Windows, directories return permission bits 'rw-rw-rw-', even though they have 'rwxrwxrwx', so 
                // propagate write bits to execute bits.
                o674.o577 = o674.o577 | ((o674.o577 & 146) >> 1);
            }
        } catch (o232) {
            if (!o232.o152) throw o232;
            throw new o548.o555(o414[o232.o152]);
        }
        return o674.o577;
    },
    o716: function (o553) {
        var o297 = [];
        while (o553.o576 !== o553) {
            o297.push(o553.name);
            o553 = o553.o576;
        }
        o297.push(o553.o574.o713.o668);
        o297.reverse();
        return o669.join.apply(null, o297);
    },
    o717: {
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
    o718: function (flags) {
        if (flags in o707.o717) {
            return o707.o717[flags];
        } else {
            return flags;
        }
    },
    o582: {
        o581: function (o553) {
            var o39 = o707.o716(o553);
            var o674;
            try {
                o674 = o714.o715(o39);
            } catch (o232) {
                if (!o232.o152) throw o232;
                throw new o548.o555(o414[o232.o152]);
            }
            // node.js v0.10.20 doesn't report blksize and blocks on Windows. Fake them with default blksize of 4096.
            // See http://support.microsoft.com/kb/140365
            if (o707.o708 && !o674.o613) {
                o674.o613 = 4096;
            }
            if (o707.o708 && !o674.o614) {
                o674.o614 = (o674.o109 + o674.o613 - 1) / o674.o613 | 0;
            }
            return {
                o544: o674.o544,
                o606: o674.o606,
                o577: o674.o577,
                o607: o674.o607,
                o608: o674.o608,
                o609: o674.o609,
                o554: o674.o554,
                o109: o674.o109,
                o610: o674.o610,
                o611: o674.o611,
                o612: o674.o612,
                o613: o674.o613,
                o614: o674.o614
            };
        },
        o583: function (o553, o605) {
            var o39 = o707.o716(o553);
            try {
                if (o605.o577 !== undefined) {
                    o714.o719(o39, o605.o577);
                    // update the common node structure mode as well
                    o553.o577 = o605.o577;
                }
                if (o605.o563 !== undefined) {
                    var o720 = new Date(o605.o563);
                    o714.o721(o39, o720, o720);
                }
                if (o605.o109 !== undefined) {
                    o714.o722(o39, o605.o109);
                }
            } catch (o232) {
                if (!o232.o152) throw o232;
                throw new o548.o555(o414[o232.o152]);
            }
        },
        o584: function (o576, name) {
            var o39 = o669.o670(o707.o716(o576), name);
            var o577 = o707.o712(o39);
            return o707.o575(o576, name, o577);
        },
        o585: function (o576, name, o577, o544) {
            var o553 = o707.o575(o576, name, o577, o544);
            // create the backing node for this in the fs root as well
            var o39 = o707.o716(o553);
            try {
                if (o548.o598(o553.o577)) {
                    o714.o723(o39, o553.o577);
                } else {
                    o714.o724(o39, '', {
                        o577: o553.o577
                    });
                }
            } catch (o232) {
                if (!o232.o152) throw o232;
                throw new o548.o555(o414[o232.o152]);
            }
            return o553;
        },
        o586: function (o725, o726, o727) {
            var o728 = o707.o716(o725);
            var o729 = o669.o670(o707.o716(o726), o727);
            try {
                o714.o730(o728, o729);
            } catch (o232) {
                if (!o232.o152) throw o232;
                throw new o548.o555(o414[o232.o152]);
            }
        },
        o587: function (o576, name) {
            var o39 = o669.o670(o707.o716(o576), name);
            try {
                o714.o731(o39);
            } catch (o232) {
                if (!o232.o152) throw o232;
                throw new o548.o555(o414[o232.o152]);
            }
        },
        o588: function (o576, name) {
            var o39 = o669.o670(o707.o716(o576), name);
            try {
                o714.o732(o39);
            } catch (o232) {
                if (!o232.o152) throw o232;
                throw new o548.o555(o414[o232.o152]);
            }
        },
        o589: function (o553) {
            var o39 = o707.o716(o553);
            try {
                return o714.o733(o39);
            } catch (o232) {
                if (!o232.o152) throw o232;
                throw new o548.o555(o414[o232.o152]);
            }
        },
        o590: function (o576, o727, o728) {
            var o729 = o669.o670(o707.o716(o576), o727);
            try {
                o714.o734(o728, o729);
            } catch (o232) {
                if (!o232.o152) throw o232;
                throw new o548.o555(o414[o232.o152]);
            }
        },
        o595: function (o553) {
            var o39 = o707.o716(o553);
            try {
                return o714.o735(o39);
            } catch (o232) {
                if (!o232.o152) throw o232;
                throw new o548.o555(o414[o232.o152]);
            }
        }
    },
    o550: {
        o54: function (o551) {
            var o39 = o707.o716(o551.o553);
            try {
                if (o548.o600(o551.o553.o577)) {
                    o551.o736 = o714.o737(o39, o707.o718(o551.flags));
                }
            } catch (o232) {
                if (!o232.o152) throw o232;
                throw new o548.o555(o414[o232.o152]);
            }
        },
        o557: function (o551) {
            try {
                if (o548.o600(o551.o553.o577) && o551.o736) {
                    o714.o738(o551.o736);
                }
            } catch (o232) {
                if (!o232.o152) throw o232;
                throw new o548.o555(o414[o232.o152]);
            }
        },
        o35: function (o551, buffer, o134, length, o624) {
            // FIXME this is terrible.
            var o739 = new o740(length);
            var o741;
            try {
                o741 = o714.o742(o551.o736, o739, 0, length, o624);
            } catch (o232) {
                throw new o548.o555(o414[o232.o152]);
            }
            if (o741 > 0) {
                for (var o106 = 0; o106 < o741; o106++) {
                    buffer[o134 + o106] = o739[o106];
                }
            }
            return o741;
        },
        write: function (o551, buffer, o134, length, o624) {
            // FIXME this is terrible.
            var o739 = new o740(buffer.subarray(o134, o134 + length));
            var o741;
            try {
                o741 = o714.o743(o551.o736, o739, 0, length, o624);
            } catch (o232) {
                throw new o548.o555(o414[o232.o152]);
            }
            return o741;
        },
        o591: function (o551, o134, o626) {
            var o624 = o134;
            if (o626 === 1) { // SEEK_CUR.
                o624 += o551.o624;
            } else if (o626 === 2) { // SEEK_END.
                if (o548.o600(o551.o553.o577)) {
                    try {
                        var o674 = o714.o744(o551.o736);
                        o624 += o674.o109;
                    } catch (o232) {
                        throw new o548.o555(o414[o232.o152]);
                    }
                }
            }

            if (o624 < 0) {
                throw new o548.o555(o414.o437);
            }

            o551.o624 = o624;
            return o624;
        }
    }
};

var o745 = o261(1, "i32*", o258);

var o746 = o261(1, "i32*", o258);

var o747 = o261(1, "i32*", o258);

function o748(o551) {
    // int fflush(FILE *stream);
    // http://pubs.opengroup.org/onlinepubs/000095399/functions/fflush.html
    // we don't currently perform any user-space buffering of data
}
var o548 = {
    o668: null,
    o749: [],
    o750: [null],
    o751: [],
    o752: 1,
    o753: null,
    o754: "/",
    o755: false,
    o756: true,
    o555: null,
    o615: {},
    o757: function (o232) {
        if (!(o232 instanceof o548.o555)) throw o232 + ' : ' + o315();
        return o538(o232.o758);
    },
    o682: function (o39, o713) {
        o39 = o669.resolve(o548.o760(), o39);
        o713 = o713 || {};

        var o761 = {
            o762: true,
            o763: 0
        };
        for (var key in o761) {
            if (o713[key] === undefined) {
                o713[key] = o761[key];
            }
        }

        if (o713.o763 > 8) { // max recursive lookup of 8
            throw new o548.o555(o414.o496);
        }

        // split the path
        var o297 = o669.o764(o39.split('/').filter(function (o666) {
            return !!o666;
        }), false);

        // start at the root
        var o766 = o548.o668;
        var o767 = '/';

        for (var o106 = 0; o106 < o297.length; o106++) {
            var o768 = (o106 === o297.length - 1);
            if (o768 && o713.o576) {
                // stop resolving
                break;
            }

            o766 = o548.o620(o766, o297[o106]);
            o767 = o669.o670(o767, o297[o106]);

            // jump to the mount's root node if this is a mountpoint
            if (o548.o769(o766)) {
                if (!o768 || (o768 && o713.o762)) {
                    o766 = o766.o770.o668;
                }
            }

            // by default, lookupPath will not follow a symlink if it is the final path component.
            // setting opts.follow = true will override this behavior.
            if (!o768 || o713.o771) {
                var o772 = 0;
                while (o548.o602(o766.o577)) {
                    var link = o548.o595(o767);
                    o767 = o669.resolve(o669.o773(o767), link);

                    var o584 = o548.o682(o767, {
                        o763: o713.o763
                    });
                    o766 = o584.o553;

                    if (o772++ > 40) { // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                        throw new o548.o555(o414.o496);
                    }
                }
            }
        }

        return {
            o39: o767,
            o553: o766
        };
    },
    o774: function (o553) {
        var o39;
        while (true) {
            if (o548.o775(o553)) {
                var o574 = o553.o574.o672;
                if (!o39) return o574;
                return o574[o574.length - 1] !== '/' ? o574 + '/' + o39 : o574 + o39;
            }
            o39 = o39 ? o553.name + '/' + o39 : o553.name;
            o553 = o553.o576;
        }
    },
    o776: function (o777, name) {
        var o778 = 0;


        for (var o106 = 0; o106 < name.length; o106++) {
            o778 = ((o778 << 5) - o778 + name.charCodeAt(o106)) | 0;
        }
        return ((o777 + o778) >>> 0) % o548.o753.length;
    },
    o779: function (o553) {
        var o778 = o548.o776(o553.o576.o406, o553.name);
        o553.o780 = o548.o753[o778];
        o548.o753[o778] = o553;
    },
    o781: function (o553) {
        var o778 = o548.o776(o553.o576.o406, o553.name);
        if (o548.o753[o778] === o553) {
            o548.o753[o778] = o553.o780;
        } else {
            var o766 = o548.o753[o778];
            while (o766) {
                if (o766.o780 === o553) {
                    o766.o780 = o553.o780;
                    break;
                }
                o766 = o766.o780;
            }
        }
    },
    o620: function (o576, name) {
        var o643 = o548.o782(o576);
        if (o643) {
            throw new o548.o555(o643);
        }
        var o778 = o548.o776(o576.o406, name);
        for (var o553 = o548.o753[o778]; o553; o553 = o553.o780) {
            var o783 = o553.name;
            if (o553.o576.o406 === o576.o406 && o783 === name) {
                return o553;
            }
        }
        // if we failed to find it in the cache, call into the VFS
        return o548.o584(o576, name);
    },
    o575: function (o576, name, o577, o554) {
        if (!o548.o784) {
            o548.o784 = function (o576, name, o577, o554) {
                if (!o576) {
                    o576 = this; // root node sets parent to itself
                }
                this.o576 = o576;
                this.o574 = o576.o574;
                this.o770 = null;
                this.o406 = o548.o752++;
                this.name = name;
                this.o577 = o577;
                this.o582 = {};
                this.o550 = {};
                this.o554 = o554;
            };

            o548.o784.prototype = {};

            // compatibility
            var o785 = 292 | 73;
            var o786 = 146;

            // NOTE we must use Object.defineProperties instead of individual calls to
            // Object.defineProperty in order to make closure compiler happy
            Object.defineProperties(o548.o784.prototype, {
                o35: {
                    get: function () {
                        return (this.o577 & o785) === o785;
                    },
                    set: function (o567) {
                        o567 ? this.o577 |= o785 : this.o577 &= ~o785;
                    }
                },
                write: {
                    get: function () {
                        return (this.o577 & o786) === o786;
                    },
                    set: function (o567) {
                        o567 ? this.o577 |= o786 : this.o577 &= ~o786;
                    }
                },
                o788: {
                    get: function () {
                        return o548.o598(this.o577);
                    },
                },
                o789: {
                    get: function () {
                        return o548.o603(this.o577);
                    },
                },
            });
        }

        var o553 = new o548.o784(o576, name, o577, o554);

        o548.o779(o553);

        return o553;
    },
    o790: function (o553) {
        o548.o781(o553);
    },
    o775: function (o553) {
        return o553 === o553.o576;
    },
    o769: function (o553) {
        return !!o553.o770;
    },
    o600: function (o577) {
        return (o577 & 61440) === 32768;
    },
    o598: function (o577) {
        return (o577 & 61440) === 16384;
    },
    o602: function (o577) {
        return (o577 & 61440) === 40960;
    },
    o603: function (o577) {
        return (o577 & 61440) === 8192;
    },
    o578: function (o577) {
        return (o577 & 61440) === 24576;
    },
    o579: function (o577) {
        return (o577 & 61440) === 4096;
    },
    o791: function (o577) {
        return (o577 & 49152) === 49152;
    },
    o792: {
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
    o793: function (o279) {
        var flags = o548.o792[o279];
        if (typeof flags === 'undefined') {
            throw new Error('Unknown file open mode: ' + o279);
        }
        return flags;
    },
    o718: function (o794) {
        var o795 = o794 & 2097155;
        var o796 = ['r', 'w', 'rw'][o795];
        if ((o794 & 512)) {
            o796 += 'w';
        }
        return o796;
    },
    o797: function (o553, o796) {
        if (o548.o756) {
            return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (o796.indexOf('r') !== -1 && !(o553.o577 & 292)) {
            return o414.o428;
        } else if (o796.indexOf('w') !== -1 && !(o553.o577 & 146)) {
            return o414.o428;
        } else if (o796.indexOf('x') !== -1 && !(o553.o577 & 73)) {
            return o414.o428;
        }
        return 0;
    },
    o782: function (o580) {
        return o548.o797(o580, 'x');
    },
    o798: function (o580, name) {
        try {
            var o553 = o548.o620(o580, name);
            return o414.o432;
        } catch (o232) {}
        return o548.o797(o580, 'wx');
    },
    o799: function (o580, name, o800) {
        var o553;
        try {
            o553 = o548.o620(o580, name);
        } catch (o232) {
            return o232.o758;
        }
        var o643 = o548.o797(o580, 'wx');
        if (o643) {
            return o643;
        }
        if (o800) {
            if (!o548.o598(o553.o577)) {
                return o414.o435;
            }
            if (o548.o775(o553) || o548.o774(o553) === o548.o760()) {
                return o414.o431;
            }
        } else {
            if (o548.o598(o553.o577)) {
                return o414.o436;
            }
        }
        return 0;
    },
    o801: function (o553, flags) {
        if (!o553) {
            return o414.o416;
        }
        if (o548.o602(o553.o577)) {
            return o414.o496;
        } else if (o548.o598(o553.o577)) {
            if ((flags & 2097155) !== 0 || // opening for write
                (flags & 512)) {
                return o414.o436;
            }
        }
        return o548.o797(o553, o548.o718(flags));
    },
    o802: 4096,
    o803: function (o804, o805) {
        o804 = o804 || 0;
        o805 = o805 || o548.o802;
        for (var o806 = o804; o806 <= o805; o806++) {
            if (!o548.o751[o806]) {
                return o806;
            }
        }
        throw new o548.o555(o414.o439);
    },
    o807: function (o806) {
        return o548.o751[o806];
    },
    o808: function (o551, o804, o805) {
        if (!o548.o809) {
            o548.o809 = function () {};
            o548.o809.prototype = {};
            // compatibility
            Object.defineProperties(o548.o809.prototype, {
                o810: {
                    get: function () {
                        return this.o553;
                    },
                    set: function (o567) {
                        this.o553 = o567;
                    }
                },
                o811: {
                    get: function () {
                        return (this.flags & 2097155) !== 1;
                    }
                },
                o812: {
                    get: function () {
                        return (this.flags & 2097155) !== 0;
                    }
                },
                o813: {
                    get: function () {
                        return (this.flags & 1024);
                    }
                }
            });
        }
        if (o551.__proto__) {
            // reuse the object
            o551.__proto__ = o548.o809.prototype;
        } else {
            var o815 = new o548.o809();
            for (var o666 in o551) {
                o815[o666] = o551[o666];
            }
            o551 = o815;
        }
        var o806 = o548.o803(o804, o805);
        o551.o806 = o806;
        o548.o751[o806] = o551;
        return o551;
    },
    o816: function (o806) {
        o548.o751[o806] = null;
    },
    o817: function (o142) {
        return o548.o751[o142 - 1];
    },
    o818: function (o551) {
        return o551 ? o551.o806 + 1 : 0;
    },
    o597: {
        o54: function (o551) {
            var o819 = o548.o820(o551.o553.o554);
            // override node's stream ops with the device's
            o551.o550 = o819.o550;
            // forward the open call
            if (o551.o550.o54) {
                o551.o550.o54(o551);
            }
        },
        o591: function () {
            throw new o548.o555(o414.o444);
        }
    },
    o821: function (o544) {
        return ((o544) >> 8);
    },
    o822: function (o544) {
        return ((o544) & 0xff);
    },
    o823: function (o824, o825) {
        return ((o824) << 8 | (o825));
    },
    o549: function (o544, o545) {
        o548.o750[o544] = {
            o550: o545
        };
    },
    o820: function (o544) {
        return o548.o750[o544];
    },
    o826: function (o574) {
        var o749 = [];
        var o671 = [o574];

        while (o671.length) {
            var o827 = o671.pop();

            o749.push(o827);

            o671.push.apply(o671, o827.o749);
        }

        return o749;
    },
    o640: function (o641, o340) {
        if (typeof (o641) === 'function') {
            o340 = o641;
            o641 = false;
        }

        var o749 = o548.o826(o548.o668.o574);
        var o703 = 0;

        function done(o643) {
            if (o643) {
                if (!done.o702) {
                    done.o702 = true;
                    return o340(o643);
                }
                return;
            }
            if (++o703 >= o749.length) {
                o340(null);
            }
        };

        // sync all mounts
        o749.forEach(function (o574) {
            if (!o574.type.o640) {
                return done(null);
            }
            o574.type.o640(o574, o641, done);
        });
    },
    o574: function (type, o713, o672) {
        var o668 = o672 === '/';
        var o828 = !o672;
        var o553;

        if (o668 && o548.o668) {
            throw new o548.o555(o414.o431);
        } else if (!o668 && !o828) {
            var o584 = o548.o682(o672, {
                o762: false
            });

            o672 = o584.o39; // use the absolute path
            o553 = o584.o553;

            if (o548.o769(o553)) {
                throw new o548.o555(o414.o431);
            }

            if (!o548.o598(o553.o577)) {
                throw new o548.o555(o414.o435);
            }
        }

        var o574 = {
            type: type,
            o713: o713,
            o672: o672,
            o749: []
        };

        // create a root node for the fs
        var o829 = type.o574(o574);
        o829.o574 = o574;
        o574.o668 = o829;

        if (o668) {
            o548.o668 = o829;
        } else if (o553) {
            // set as a mountpoint
            o553.o770 = o574;

            // add the new mount to the current mount's children
            if (o553.o574) {
                o553.o574.o749.push(o574);
            }
        }

        return o829;
    },
    o830: function (o672) {
        var o584 = o548.o682(o672, {
            o762: false
        });

        if (!o548.o769(o584.o553)) {
            throw new o548.o555(o414.o437);
        }

        // destroy the nodes for this mount, and all its child mounts
        var o553 = o584.o553;
        var o574 = o553.o770;
        var o749 = o548.o826(o574);

        Object.keys(o548.o753).forEach(function (o778) {
            var o766 = o548.o753[o778];

            while (o766) {
                var next = o766.o780;

                if (o749.indexOf(o766.o574) !== -1) {
                    o548.o790(o766);
                }

                o766 = next;
            }
        });

        // no longer a mountpoint
        o553.o770 = null;

        // remove this mount from the child mounts
        var o831 = o553.o574.o749.indexOf(o574);
        o95(o831 !== -1);
        o553.o574.o749.splice(o831, 1);
    },
    o584: function (o576, name) {
        return o576.o582.o584(o576, name);
    },
    o585: function (o39, o577, o544) {
        var o584 = o548.o682(o39, {
            o576: true
        });
        var o576 = o584.o553;
        var name = o669.o832(o39);
        var o643 = o548.o798(o576, name);
        if (o643) {
            throw new o548.o555(o643);
        }
        if (!o576.o582.o585) {
            throw new o548.o555(o414.o415);
        }
        return o576.o582.o585(o576, name, o577, o544);
    },
    create: function (o39, o577) {
        o577 = o577 !== undefined ? o577 : 438 /* 0666 */ ;
        o577 &= 4095;
        o577 |= 32768;
        return o548.o585(o39, o577, 0);
    },
    o685: function (o39, o577) {
        o577 = o577 !== undefined ? o577 : 511 /* 0777 */ ;
        o577 &= 511 | 512;
        o577 |= 16384;
        return o548.o585(o39, o577, 0);
    },
    o833: function (o39, o577, o544) {
        if (typeof (o544) === 'undefined') {
            o544 = o577;
            o577 = 438 /* 0666 */ ;
        }
        o577 |= 8192;
        return o548.o585(o39, o577, o544);
    },
    o590: function (o623, o834) {
        var o584 = o548.o682(o834, {
            o576: true
        });
        var o576 = o584.o553;
        var o622 = o669.o832(o834);
        var o643 = o548.o798(o576, o622);
        if (o643) {
            throw new o548.o555(o643);
        }
        if (!o576.o582.o590) {
            throw new o548.o555(o414.o415);
        }
        return o576.o582.o590(o576, o622, o623);
    },
    o586: function (o835, o836) {
        var o837 = o669.o773(o835);
        var o838 = o669.o773(o836);
        var o839 = o669.o832(o835);
        var o618 = o669.o832(o836);
        // parents must exist
        var o584, o840, o617;
        try {
            o584 = o548.o682(o835, {
                o576: true
            });
            o840 = o584.o553;
            o584 = o548.o682(o836, {
                o576: true
            });
            o617 = o584.o553;
        } catch (o232) {
            throw new o548.o555(o414.o431);
        }
        // need to be part of the same mount
        if (o840.o574 !== o617.o574) {
            throw new o548.o555(o414.o433);
        }
        // source must exist
        var o616 = o548.o620(o840, o839);
        // old path should not be an ancestor of the new path
        var o841 = o669.o841(o835, o838);
        if (o841.charAt(0) !== '.') {
            throw new o548.o555(o414.o437);
        }
        // new path should not be an ancestor of the old path
        o841 = o669.o841(o836, o837);
        if (o841.charAt(0) !== '.') {
            throw new o548.o555(o414.o494);
        }
        // see if the new path already exists
        var o619;
        try {
            o619 = o548.o620(o617, o618);
        } catch (o232) {
            // not fatal
        }
        // early out if nothing needs to change
        if (o616 === o619) {
            return;
        }
        // we'll need to delete the old entry
        var o800 = o548.o598(o616.o577);
        var o643 = o548.o799(o840, o839, o800);
        if (o643) {
            throw new o548.o555(o643);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        o643 = o619 ?
            o548.o799(o617, o618, o800) :
            o548.o798(o617, o618);
        if (o643) {
            throw new o548.o555(o643);
        }
        if (!o840.o582.o586) {
            throw new o548.o555(o414.o415);
        }
        if (o548.o769(o616) || (o619 && o548.o769(o619))) {
            throw new o548.o555(o414.o431);
        }
        // if we are going to change the parent, check write permissions
        if (o617 !== o840) {
            o643 = o548.o797(o840, 'w');
            if (o643) {
                throw new o548.o555(o643);
            }
        }
        // remove the node from the lookup hash
        o548.o781(o616);
        // do the underlying fs rename
        try {
            o840.o582.o586(o616, o617, o618);
        } catch (o232) {
            throw o232;
        } finally {
            // add the node back to the hash (in case node_ops.rename
            // changed its name)
            o548.o779(o616);
        }
    },
    o588: function (o39) {
        var o584 = o548.o682(o39, {
            o576: true
        });
        var o576 = o584.o553;
        var name = o669.o832(o39);
        var o553 = o548.o620(o576, name);
        var o643 = o548.o799(o576, name, true);
        if (o643) {
            throw new o548.o555(o643);
        }
        if (!o576.o582.o588) {
            throw new o548.o555(o414.o415);
        }
        if (o548.o769(o553)) {
            throw new o548.o555(o414.o431);
        }
        o576.o582.o588(o576, name);
        o548.o790(o553);
    },
    o589: function (o39) {
        var o584 = o548.o682(o39, {
            o771: true
        });
        var o553 = o584.o553;
        if (!o553.o582.o589) {
            throw new o548.o555(o414.o435);
        }
        return o553.o582.o589(o553);
    },
    o587: function (o39) {
        var o584 = o548.o682(o39, {
            o576: true
        });
        var o576 = o584.o553;
        var name = o669.o832(o39);
        var o553 = o548.o620(o576, name);
        var o643 = o548.o799(o576, name, false);
        if (o643) {
            // POSIX says unlink should set EPERM, not EISDIR
            if (o643 === o414.o436) o643 = o414.o415;
            throw new o548.o555(o643);
        }
        if (!o576.o582.o587) {
            throw new o548.o555(o414.o415);
        }
        if (o548.o769(o553)) {
            throw new o548.o555(o414.o431);
        }
        o576.o582.o587(o576, name);
        o548.o790(o553);
    },
    o595: function (o39) {
        var o584 = o548.o682(o39);
        var link = o584.o553;
        if (!link.o582.o595) {
            throw new o548.o555(o414.o437);
        }
        return link.o582.o595(link);
    },
    o674: function (o39, o842) {
        var o584 = o548.o682(o39, {
            o771: !o842
        });
        var o553 = o584.o553;
        if (!o553.o582.o581) {
            throw new o548.o555(o414.o415);
        }
        return o553.o582.o581(o553);
    },
    o843: function (o39) {
        return o548.o674(o39, true);
    },
    o844: function (o39, o577, o842) {
        var o553;
        if (typeof o39 === 'string') {
            var o584 = o548.o682(o39, {
                o771: !o842
            });
            o553 = o584.o553;
        } else {
            o553 = o39;
        }
        if (!o553.o582.o583) {
            throw new o548.o555(o414.o415);
        }
        o553.o582.o583(o553, {
            o577: (o577 & 4095) | (o553.o577 & ~4095),
            o563: Date.o5()
        });
    },
    o845: function (o39, o577) {
        o548.o844(o39, o577, true);
    },
    o846: function (o806, o577) {
        var o551 = o548.o807(o806);
        if (!o551) {
            throw new o548.o555(o414.o423);
        }
        o548.o844(o551.o553, o577);
    },
    o847: function (o39, o608, o609, o842) {
        var o553;
        if (typeof o39 === 'string') {
            var o584 = o548.o682(o39, {
                o771: !o842
            });
            o553 = o584.o553;
        } else {
            o553 = o39;
        }
        if (!o553.o582.o583) {
            throw new o548.o555(o414.o415);
        }
        o553.o582.o583(o553, {
            o563: Date.o5()
            // we ignore the uid / gid for now
        });
    },
    o848: function (o39, o608, o609) {
        o548.o847(o39, o608, o609, true);
    },
    o849: function (o806, o608, o609) {
        var o551 = o548.o807(o806);
        if (!o551) {
            throw new o548.o555(o414.o423);
        }
        o548.o847(o551.o553, o608, o609);
    },
    o850: function (o39, o851) {
        if (o851 < 0) {
            throw new o548.o555(o414.o437);
        }
        var o553;
        if (typeof o39 === 'string') {
            var o584 = o548.o682(o39, {
                o771: true
            });
            o553 = o584.o553;
        } else {
            o553 = o39;
        }
        if (!o553.o582.o583) {
            throw new o548.o555(o414.o415);
        }
        if (o548.o598(o553.o577)) {
            throw new o548.o555(o414.o436);
        }
        if (!o548.o600(o553.o577)) {
            throw new o548.o555(o414.o437);
        }
        var o643 = o548.o797(o553, 'w');
        if (o643) {
            throw new o548.o555(o643);
        }
        o553.o582.o583(o553, {
            o109: o851,
            o563: Date.o5()
        });
    },
    o852: function (o806, o851) {
        var o551 = o548.o807(o806);
        if (!o551) {
            throw new o548.o555(o414.o423);
        }
        if ((o551.flags & 2097155) === 0) {
            throw new o548.o555(o414.o437);
        }
        o548.o850(o551.o553, o851);
    },
    o688: function (o39, o610, o611) {
        var o584 = o548.o682(o39, {
            o771: true
        });
        var o553 = o584.o553;
        o553.o582.o583(o553, {
            o563: Math.o97(o610, o611)
        });
    },
    o54: function (o39, flags, o577, o804, o805) {
        flags = typeof flags === 'string' ? o548.o793(flags) : flags;
        o577 = typeof o577 === 'undefined' ? 438 /* 0666 */ : o577;
        if ((flags & 64)) {
            o577 = (o577 & 4095) | 32768;
        } else {
            o577 = 0;
        }
        var o553;
        if (typeof o39 === 'object') {
            o553 = o39;
        } else {
            o39 = o669.normalize(o39);
            try {
                var o584 = o548.o682(o39, {
                    o771: !(flags & 131072)
                });
                o553 = o584.o553;
            } catch (o232) {
                // ignore
            }
        }
        // perhaps we need to create the node
        if ((flags & 64)) {
            if (o553) {
                // if O_CREAT and O_EXCL are set, error out if the node already exists
                if ((flags & 128)) {
                    throw new o548.o555(o414.o432);
                }
            } else {
                // node doesn't exist, try to create it
                o553 = o548.o585(o39, o577, 0);
            }
        }
        if (!o553) {
            throw new o548.o555(o414.o416);
        }
        // can't truncate a device
        if (o548.o603(o553.o577)) {
            flags &= ~512;
        }
        // check permissions
        var o643 = o548.o801(o553, flags);
        if (o643) {
            throw new o548.o555(o643);
        }
        // do truncation if necessary
        if ((flags & 512)) {
            o548.o850(o553, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512);

        // register the stream with the filesystem
        var o551 = o548.o808({
            o553: o553,
            o39: o548.o774(o553), // we want the absolute path to the node
            flags: flags,
            o556: true,
            o624: 0,
            o550: o553.o550,
            // used by the file family libc calls (fopen, fwrite, ferror, etc.)
            o627: [],
            o664: false
        }, o804, o805);
        // call the new stream's open function
        if (o551.o550.o54) {
            o551.o550.o54(o551);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
            if (!o548.o854) o548.o854 = {};
            if (!(o39 in o548.o854)) {
                o548.o854[o39] = 1;
                Module['printErr']('read file: ' + o39);
            }
        }
        return o551;
    },
    o557: function (o551) {
        try {
            if (o551.o550.o557) {
                o551.o550.o557(o551);
            }
        } catch (o232) {
            throw o232;
        } finally {
            o548.o816(o551.o806);
        }
    },
    o591: function (o551, o134, o626) {
        if (!o551.o556 || !o551.o550.o591) {
            throw new o548.o555(o414.o444);
        }
        return o551.o550.o591(o551, o134, o626);
    },
    o35: function (o551, buffer, o134, length, o624) {
        if (length < 0 || o624 < 0) {
            throw new o548.o555(o414.o437);
        }
        if ((o551.flags & 2097155) === 1) {
            throw new o548.o555(o414.o423);
        }
        if (o548.o598(o551.o553.o577)) {
            throw new o548.o555(o414.o436);
        }
        if (!o551.o550.o35) {
            throw new o548.o555(o414.o437);
        }
        var o855 = true;
        if (typeof o624 === 'undefined') {
            o624 = o551.o624;
            o855 = false;
        } else if (!o551.o556) {
            throw new o548.o555(o414.o444);
        }
        var o561 = o551.o550.o35(o551, buffer, o134, length, o624);
        if (!o855) o551.o624 += o561;
        return o561;
    },
    write: function (o551, buffer, o134, length, o624, o625) {
        if (length < 0 || o624 < 0) {
            throw new o548.o555(o414.o437);
        }
        if ((o551.flags & 2097155) === 0) {
            throw new o548.o555(o414.o423);
        }
        if (o548.o598(o551.o553.o577)) {
            throw new o548.o555(o414.o436);
        }
        if (!o551.o550.write) {
            throw new o548.o555(o414.o437);
        }
        var o855 = true;
        if (typeof o624 === 'undefined') {
            o624 = o551.o624;
            o855 = false;
        } else if (!o551.o556) {
            throw new o548.o555(o414.o444);
        }
        if (o551.flags & 1024) {
            // seek to the end before writing in append mode
            o548.o591(o551, 0, 2);
        }
        var o856 = o551.o550.write(o551, buffer, o134, length, o624, o625);
        if (!o855) o551.o624 += o856;
        return o856;
    },
    o261: function (o551, o134, length) {
        if (o134 < 0 || length <= 0) {
            throw new o548.o555(o414.o437);
        }
        if ((o551.flags & 2097155) === 0) {
            throw new o548.o555(o414.o423);
        }
        if (!o548.o600(o551.o553.o577) && !o548.o598(o553.o577)) {
            throw new o548.o555(o414.o434);
        }
        if (!o551.o550.o261) {
            throw new o548.o555(o414.o497);
        }
        o551.o550.o261(o551, o134, length);
    },
    o593: function (o551, buffer, o134, length, o624, o628, flags) {
        // TODO if PROT is PROT_WRITE, make sure we have write access
        if ((o551.flags & 2097155) === 1) {
            throw new o548.o555(o414.o428);
        }
        if (!o551.o550.o593) {
            throw new o548.o555(o414.o434);
        }
        return o551.o550.o593(o551, buffer, o134, length, o624, o628, flags);
    },
    o857: function (o551, o858, o241) {
        if (!o551.o550.o857) {
            throw new o548.o555(o414.o440);
        }
        return o551.o550.o857(o551, o858, o241);
    },
    o859: function (o39, o713) {
        o713 = o713 || {};
        o713.flags = o713.flags || 'r';
        o713.o687 = o713.o687 || 'binary';
        if (o713.o687 !== 'utf8' && o713.o687 !== 'binary') {
            throw new Error('Invalid encoding type "' + o713.o687 + '"');
        }
        var o38;
        var o551 = o548.o54(o39, o713.flags);
        var o674 = o548.o674(o39);
        var length = o674.o109;
        var o860 = new Uint8Array(length);
        o548.o35(o551, o860, 0, length, 0);
        if (o713.o687 === 'utf8') {
            o38 = '';
            var o277 = new o62.o166();
            for (var o106 = 0; o106 < length; o106++) {
                o38 += o277.o169(o860[o106]);
            }
        } else if (o713.o687 === 'binary') {
            o38 = o860;
        }
        o548.o557(o551);
        return o38;
    },
    o686: function (o39, o861, o713) {
        o713 = o713 || {};
        o713.flags = o713.flags || 'w';
        o713.o687 = o713.o687 || 'utf8';
        if (o713.o687 !== 'utf8' && o713.o687 !== 'binary') {
            throw new Error('Invalid encoding type "' + o713.o687 + '"');
        }
        var o551 = o548.o54(o39, o713.flags, o713.o577);
        if (o713.o687 === 'utf8') {
            var o277 = new o62.o166();
            var o860 = new Uint8Array(o277.o176(o861));
            o548.write(o551, o860, 0, o860.length, 0, o713.o625);
        } else if (o713.o687 === 'binary') {
            o548.write(o551, o861, 0, o861.length, 0, o713.o625);
        }
        o548.o557(o551);
    },
    o760: function () {
        return o548.o754;
    },
    o862: function (o39) {
        var o584 = o548.o682(o39, {
            o771: true
        });
        if (!o548.o598(o584.o553.o577)) {
            throw new o548.o555(o414.o435);
        }
        var o643 = o548.o797(o584.o553, 'x');
        if (o643) {
            throw new o548.o555(o643);
        }
        o548.o754 = o584.o39;
    },
    o863: function () {
        o548.o685('/tmp');
    },
    o864: function () {
        // create /dev
        o548.o685('/dev');
        // setup /dev/null
        o548.o549(o548.o823(1, 3), {
            o35: function () {
                return 0;
            },
            write: function () {
                return 0;
            }
        });
        o548.o833('/dev/null', o548.o823(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using Module['printErr']
        // so we register a second tty just for it.
        o539.o543(o548.o823(5, 0), o539.o564);
        o539.o543(o548.o823(6, 0), o539.o568);
        o548.o833('/dev/tty', o548.o823(5, 0));
        o548.o833('/dev/tty1', o548.o823(6, 0));
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        o548.o685('/dev/shm');
        o548.o685('/dev/shm/tmp');
    },
    o865: function () {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops

        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
            o548.o866('/dev', 'stdin', Module['stdin']);
        } else {
            o548.o590('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
            o548.o866('/dev', 'stdout', null, Module['stdout']);
        } else {
            o548.o590('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
            o548.o866('/dev', 'stderr', null, Module['stderr']);
        } else {
            o548.o590('/dev/tty1', '/dev/stderr');
        }

        // open default streams for the stdin, stdout and stderr devices
        var o867 = o548.o54('/dev/stdin', 'r');
        o248[((o745) >> 2)] = o548.o818(o867);
        o95(o867.o806 === 0, 'invalid handle for stdin (' + o867.o806 + ')');

        var o868 = o548.o54('/dev/stdout', 'w');
        o248[((o746) >> 2)] = o548.o818(o868);
        o95(o868.o806 === 1, 'invalid handle for stdout (' + o868.o806 + ')');

        var o869 = o548.o54('/dev/stderr', 'w');
        o248[((o747) >> 2)] = o548.o818(o869);
        o95(o869.o806 === 2, 'invalid handle for stderr (' + o869.o806 + ')');
    },
    o870: function () {
        if (o548.o555) return;
        o548.o555 = function o555(o758) {
            this.o758 = o758;
            for (var key in o414) {
                if (o414[key] === o758) {
                    this.o152 = key;
                    break;
                }
            }
            this.o871 = o536[o758];
        };
        o548.o555.prototype = new Error();
        o548.o555.prototype.constructor = o548.o555;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [o414.o416].forEach(function (o152) {
            o548.o615[o152] = new o548.o555(o152);
            o548.o615[o152].o233 = '<generic error, no stack>';
        });
    },
    o709: function () {
        o548.o870();

        o548.o753 = new Array(4096);

        o548.o574(o569, {}, '/');

        o548.o863();
        o548.o864();
    },
    o541: function (input, o547, o664) {
        o95(!o548.o541.o755, 'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)');
        o548.o541.o755 = true;

        o548.o870();

        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = o547 || Module['stdout'];
        Module['stderr'] = o664 || Module['stderr'];

        o548.o865();
    },
    o873: function () {
        o548.o541.o755 = false;
        for (var o106 = 0; o106 < o548.o751.length; o106++) {
            var o551 = o548.o751[o106];
            if (!o551) {
                continue;
            }
            o548.o557(o551);
        }
    },
    o712: function (o874, o875) {
        var o577 = 0;
        if (o874) o577 |= 292 | 73;
        if (o875) o577 |= 146;
        return o577;
    },
    o876: function (o297, o877) {
        var o39 = o669.join.apply(null, o297);
        if (o877 && o39[0] == '/') o39 = o39.substr(1);
        return o39;
    },
    o878: function (o841, o879) {
        return o669.resolve(o879, o841);
    },
    o880: function (o39) {
        return o669.normalize(o39);
    },
    o881: function (o39, o882) {
        var o38 = o548.o883(o39, o882);
        if (o38.o884) {
            return o38.o810;
        } else {
            o538(o38.o664);
            return null;
        }
    },
    o883: function (o39, o882) {
        // operate from within the context of the symlink's target
        try {
            var o584 = o548.o682(o39, {
                o771: !o882
            });
            o39 = o584.o39;
        } catch (o232) {}
        var o38 = {
            o775: false,
            o884: false,
            o664: 0,
            name: null,
            o39: null,
            o810: null,
            o885: false,
            o886: null,
            o887: null
        };
        try {
            var o584 = o548.o682(o39, {
                o576: true
            });
            o38.o885 = true;
            o38.o886 = o584.o39;
            o38.o887 = o584.o553;
            o38.name = o669.o832(o39);
            o584 = o548.o682(o39, {
                o771: !o882
            });
            o38.o884 = true;
            o38.o39 = o584.o39;
            o38.o810 = o584.o553;
            o38.name = o584.o553.name;
            o38.o775 = o584.o39 === '/';
        } catch (o232) {
            o38.o664 = o232.o758;
        };
        return o38;
    },
    o888: function (o576, name, o874, o875) {
        var o39 = o669.o670(typeof o576 === 'string' ? o576 : o548.o774(o576), name);
        var o577 = o548.o712(o874, o875);
        return o548.o685(o39, o577);
    },
    o889: function (o576, o39, o874, o875) {
        o576 = typeof o576 === 'string' ? o576 : o548.o774(o576);
        var o297 = o39.split('/').reverse();
        while (o297.length) {
            var o890 = o297.pop();
            if (!o890) continue;
            var o766 = o669.o670(o576, o890);
            try {
                o548.o685(o766);
            } catch (o232) {
                // ignore EEXIST
            }
            o576 = o766;
        }
        return o766;
    },
    o891: function (o576, name, o892, o874, o875) {
        var o39 = o669.o670(typeof o576 === 'string' ? o576 : o548.o774(o576), name);
        var o577 = o548.o712(o874, o875);
        return o548.create(o39, o577);
    },
    o893: function (o576, name, o861, o874, o875, o625) {
        var o39 = name ? o669.o670(typeof o576 === 'string' ? o576 : o548.o774(o576), name) : o576;
        var o577 = o548.o712(o874, o875);
        var o553 = o548.create(o39, o577);
        if (o861) {
            if (typeof o861 === 'string') {
                var o894 = new Array(o861.length);
                for (var o106 = 0, o851 = o861.length; o106 < o851; ++o106) o894[o106] = o861.charCodeAt(o106);
                o861 = o894;
            }
            // make sure we can write to the file
            o548.o844(o553, o577 | 146);
            var o551 = o548.o54(o553, 'w');
            o548.write(o551, o861, 0, o861.length, 0, o625);
            o548.o557(o551);
            o548.o844(o553, o577);
        }
        return o553;
    },
    o866: function (o576, name, input, o547) {
        var o39 = o669.o670(typeof o576 === 'string' ? o576 : o548.o774(o576), name);
        var o577 = o548.o712(!!input, !!o547);
        if (!o548.o866.o821) o548.o866.o821 = 64;
        var o544 = o548.o823(o548.o866.o821++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        o548.o549(o544, {
            o54: function (o551) {
                o551.o556 = false;
            },
            o557: function (o551) {
                // flush any pending line data
                if (o547 && o547.buffer && o547.buffer.length) {
                    o547(10);
                }
            },
            o35: function (o551, buffer, o134, length, o559 /* ignored */ ) {
                var o561 = 0;
                for (var o106 = 0; o106 < length; o106++) {
                    var o562;
                    try {
                        o562 = input();
                    } catch (o232) {
                        throw new o548.o555(o414.o419);
                    }
                    if (o562 === undefined && o561 === 0) {
                        throw new o548.o555(o414.o425);
                    }
                    if (o562 === null || o562 === undefined) break;
                    o561++;
                    buffer[o134 + o106] = o562;
                }
                if (o561) {
                    o551.o553.o563 = Date.o5();
                }
                return o561;
            },
            write: function (o551, buffer, o134, length, o559) {
                for (var o106 = 0; o106 < length; o106++) {
                    try {
                        o547(buffer[o134 + o106]);
                    } catch (o232) {
                        throw new o548.o555(o414.o419);
                    }
                }
                if (length) {
                    o551.o553.o563 = Date.o5();
                }
                return o106;
            }
        });
        return o548.o833(o39, o577, o544);
    },
    o895: function (o576, name, target, o874, o875) {
        var o39 = o669.o670(typeof o576 === 'string' ? o576 : o548.o774(o576), name);
        return o548.o590(target, o39);
    },
    o896: function (o897) {
        if (o897.o789 || o897.o788 || o897.link || o897.o599) return true;
        var o898 = true;
        if (typeof o53 !== 'undefined') {
            throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (Module['read']) {
            // Command-line.
            try {
                // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
                //          read() will try to parse UTF8.
                o897.o599 = o237(Module['read'](o897.o51), true);
            } catch (o232) {
                o898 = false;
            }
        } else {
            throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
        if (!o898) o538(o414.o419);
        return o898;
    },
    o899: function (o576, name, o51, o874, o875) {
        if (typeof o53 !== 'undefined') {
            if (!o27) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
            // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
            function o900() {
                this.o901 = false;
                this.o902 = []; // Loaded chunks. Index is the chunk number
            }
            o900.prototype.get = function o903(o831) {
                if (o831 > this.length - 1 || o831 < 0) {
                    return undefined;
                }
                var o904 = o831 % this.o905;
                var o906 = Math.floor(o831 / this.o905);
                return this.getter(o906)[o904];
            }
            o900.prototype.o908 = function o909(getter) {
                this.getter = getter;
            }
            o900.prototype.o910 = function o911() {
                // Find length
                var o52 = new o53();
                o52.o54('HEAD', o51, false);
                o52.o55(null);
                if (!(o52.o912 >= 200 && o52.o912 < 300 || o52.o912 === 304)) throw new Error("Couldn't load " + o51 + ". Status: " + o52.o912);
                var o913 = Number(o52.o915("Content-length"));
                var o916;
                var o917 = (o916 = o52.o915("Accept-Ranges")) && o916 === "bytes";
                var o905 = 1024 * 1024; // Chunk size in bytes

                if (!o917) o905 = o913;

                // Function to get a range from the remote URL.
                var o918 = (function (from, o920) {
                    if (from > o920) throw new Error("invalid range (" + from + ", " + o920 + ") or no bytes requested!");
                    if (o920 > o913 - 1) throw new Error("only " + o913 + " bytes available! programmer error!");

                    // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
                    var o52 = new o53();
                    o52.o54('GET', o51, false);
                    if (o913 !== o905) o52.o921("Range", "bytes=" + from + "-" + o920);

                    // Some hints to the browser that we want binary data.
                    if (typeof Uint8Array != 'undefined') o52.o922 = 'arraybuffer';
                    if (o52.o923) {
                        o52.o923('text/plain; charset=x-user-defined');
                    }

                    o52.o55(null);
                    if (!(o52.o912 >= 200 && o52.o912 < 300 || o52.o912 === 304)) throw new Error("Couldn't load " + o51 + ". Status: " + o52.o912);
                    if (o52.o924 !== undefined) {
                        return new Uint8Array(o52.o924 || []);
                    } else {
                        return o237(o52.o56 || '', true);
                    }
                });
                var o925 = this;
                o925.o908(function (o906) {
                    var o926 = o906 * o905;
                    var o311 = (o906 + 1) * o905 - 1; // including this byte
                    o311 = Math.o111(o311, o913 - 1); // if datalength-1 is selected, this is the last block
                    if (typeof (o925.o902[o906]) === "undefined") {
                        o925.o902[o906] = o918(o926, o311);
                    }
                    if (typeof (o925.o902[o906]) === "undefined") throw new Error("doXHR failed!");
                    return o925.o902[o906];
                });

                this.o927 = o913;
                this.o928 = o905;
                this.o901 = true;
            }

            var o925 = new o900();
            Object.defineProperty(o925, "length", {
                get: function () {
                    if (!this.o901) {
                        this.o910();
                    }
                    return this.o927;
                }
            });
            Object.defineProperty(o925, "chunkSize", {
                get: function () {
                    if (!this.o901) {
                        this.o910();
                    }
                    return this.o928;
                }
            });

            var o892 = {
                o789: false,
                o599: o925
            };
        } else {
            var o892 = {
                o789: false,
                o51: o51
            };
        }

        var o553 = o548.o891(o576, name, o892, o874, o875);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (o892.o599) {
            o553.o599 = o892.o599;
        } else if (o892.o51) {
            o553.o599 = null;
            o553.o51 = o892.o51;
        }
        // override each stream op with one that tries to force load the lazy file first
        var o550 = {};
        var keys = Object.keys(o553.o550);
        keys.forEach(function (key) {
            var o930 = o553.o550[key];
            o550[key] = function o931() {
                if (!o548.o896(o553)) {
                    throw new o548.o555(o414.o419);
                }
                return o930.apply(null, arguments);
            };
        });
        // use a custom read function
        o550.o35 = function o932(o551, buffer, o134, length, o624) {
            if (!o548.o896(o553)) {
                throw new o548.o555(o414.o419);
            }
            var o599 = o551.o553.o599;
            if (o624 >= o599.length)
                return 0;
            var o109 = Math.o111(o599.length - o624, length);
            o95(o109 >= 0);
            if (o599.slice) { // normal array
                for (var o106 = 0; o106 < o109; o106++) {
                    buffer[o134 + o106] = o599[o624 + o106];
                }
            } else {
                for (var o106 = 0; o106 < o109; o106++) { // LazyUint8Array from sync binary XHR
                    buffer[o134 + o106] = o599.get(o624 + o106);
                }
            }
            return o109;
        };
        o553.o550 = o550;
        return o553;
    },
    o933: function (o576, name, o51, o874, o875, o934, o663, o935, o625) {
        o936.o541();
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var o937 = name ? o669.resolve(o669.o670(o576, name)) : o576;

        function o938(o939) {
            function o940(o939) {
                if (!o935) {
                    o548.o893(o576, name, o939, o874, o875, o625);
                }
                if (o934) o934();
                o407('cp ' + o937);
            }
            var o941 = false;
            Module['preloadPlugins'].forEach(function (o942) {
                if (o941) return;
                if (o942['canHandle'](o937)) {
                    o942['handle'](o939, o937, o940, function () {
                        if (o663) o663();
                        o407('cp ' + o937);
                    });
                    o941 = true;
                }
            });
            if (!o941) o940(o939);
        }
        o405('cp ' + o937);
        if (typeof o51 == 'string') {
            o936.o943(o51, function (o939) {
                o938(o939);
            }, o663);
        } else {
            o938(o51);
        }
    },
    o634: function () {
        return o26.o634 || o26.o635 || o26.o636 || o26.o637;
    },
    o944: function () {
        return 'EM_FS_' + o26.o945.o946;
    },
    o638: 20,
    o639: "FILE_DATA",
    o947: function (o948, o934, o663) {
        o934 = o934 || function () {};
        o663 = o663 || function () {};
        var o634 = o548.o634();
        try {
            var o949 = o634.o54(o548.o944(), o548.o638);
        } catch (o232) {
            return o663(o232);
        }
        o949.o653 = function o950() {
            o57.o58('creating db');
            var o651 = o949.o562;
            o651.o659(o548.o639);
        };
        o949.o662 = function o951() {
            var o651 = o949.o562;
            var o654 = o651.o654([o548.o639], 'readwrite');
            var o952 = o654.o658(o548.o639);
            var o953 = 0,
                o954 = 0,
                o696 = o948.length;

            function o940() {
                if (o954 == 0) o934();
                else o663();
            }
            o948.forEach(function (o39) {
                var o955 = o952.o693(o548.o883(o39).o810.o599, o39);
                o955.o662 = function o956() {
                    o953++;
                    if (o953 + o954 == o696) o940()
                };
                o955.o663 = function o957() {
                    o954++;
                    if (o953 + o954 == o696) o940()
                };
            });
            o654.o663 = o663;
        };
        o949.o663 = o663;
    },
    o958: function (o948, o934, o663) {
        o934 = o934 || function () {};
        o663 = o663 || function () {};
        var o634 = o548.o634();
        try {
            var o949 = o634.o54(o548.o944(), o548.o638);
        } catch (o232) {
            return o663(o232);
        }
        o949.o653 = o663; // no database to load from
        o949.o662 = function o951() {
            var o651 = o949.o562;
            try {
                var o654 = o651.o654([o548.o639], 'readonly');
            } catch (o232) {
                o663(o232);
                return;
            }
            var o952 = o654.o658(o548.o639);
            var o953 = 0,
                o954 = 0,
                o696 = o948.length;

            function o940() {
                if (o954 == 0) o934();
                else o663();
            }
            o948.forEach(function (o39) {
                var o959 = o952.get(o39);
                o959.o662 = function o960() {
                    if (o548.o883(o39).o884) {
                        o548.o587(o39);
                    }
                    o548.o893(o669.o773(o39), o669.o832(o39), o959.o562, true, true, true);
                    o953++;
                    if (o953 + o954 == o696) o940();
                };
                o959.o663 = function o961() {
                    o954++;
                    if (o953 + o954 == o696) o940()
                };
            });
            o654.o663 = o663;
        };
        o949.o663 = o663;
    }
};
var o669 = {
    o962: function (o36) {
        var o963 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return o963.exec(o36).slice(1);
    },
    o764: function (o297, o965) {
        // if the path tries to go above the root, `up` ends up > 0
        var o966 = 0;
        for (var o106 = o297.length - 1; o106 >= 0; o106--) {
            var o967 = o297[o106];
            if (o967 === '.') {
                o297.splice(o106, 1);
            } else if (o967 === '..') {
                o297.splice(o106, 1);
                o966++;
            } else if (o966) {
                o297.splice(o106, 1);
                o966--;
            }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (o965) {
            for (; o966--; o966) {
                o297.unshift('..');
            }
        }
        return o297;
    },
    normalize: function (o39) {
        var o968 = o39.charAt(0) === '/',
            o969 = o39.substr(-1) === '/';
        // Normalize the path
        o39 = o669.o764(o39.split('/').filter(function (o666) {
            return !!o666;
        }), !o968).join('/');
        if (!o39 && !o968) {
            o39 = '.';
        }
        if (o39 && o969) {
            o39 += '/';
        }
        return (o968 ? '/' : '') + o39;
    },
    o773: function (o39) {
        var o562 = o669.o962(o39),
            o668 = o562[0],
            o580 = o562[1];
        if (!o668 && !o580) {
            // No dirname whatsoever
            return '.';
        }
        if (o580) {
            // It has a dirname, strip trailing slash
            o580 = o580.substr(0, o580.length - 1);
        }
        return o668 + o580;
    },
    o832: function (o39) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (o39 === '/') return '/';
        var o970 = o39.lastIndexOf('/');
        if (o970 === -1) return o39;
        return o39.substr(o970 + 1);
    },
    o972: function (o39) {
        return o669.o962(o39)[3];
    },
    join: function () {
        var o948 = Array.prototype.slice.call(arguments, 0);
        return o669.normalize(o948.join('/'));
    },
    o670: function (o85, o973) {
        return o669.normalize(o85 + '/' + o973);
    },
    resolve: function () {
        var o974 = '',
            o975 = false;
        for (var o106 = arguments.length - 1; o106 >= -1 && !o975; o106--) {
            var o39 = (o106 >= 0) ? arguments[o106] : o548.o760();
            // Skip empty and invalid entries
            if (typeof o39 !== 'string') {
                throw new o976('Arguments to path.resolve must be strings');
            } else if (!o39) {
                continue;
            }
            o974 = o39 + '/' + o974;
            o975 = o39.charAt(0) === '/';
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        o974 = o669.o764(o974.split('/').filter(function (o666) {
            return !!o666;
        }), !o975).join('/');
        return ((o975 ? '/' : '') + o974) || '.';
    },
    o841: function (from, o920) {
        from = o669.resolve(from).substr(1);
        o920 = o669.resolve(o920).substr(1);

        function o977(o894) {
            var o926 = 0;
            for (; o926 < o894.length; o926++) {
                if (o894[o926] !== '') break;
            }
            var o311 = o894.length - 1;
            for (; o311 >= 0; o311--) {
                if (o894[o311] !== '') break;
            }
            if (o926 > o311) return [];
            return o894.slice(o926, o311 - o926 + 1);
        }
        var o978 = o977(from.split('/'));
        var o979 = o977(o920.split('/'));
        var length = Math.o111(o978.length, o979.length);
        var o980 = length;
        for (var o106 = 0; o106 < length; o106++) {
            if (o978[o106] !== o979[o106]) {
                o980 = o106;
                break;
            }
        }
        var o981 = [];
        for (var o106 = o980; o106 < o978.length; o106++) {
            o981.push('..');
        }
        o981 = o981.concat(o979.slice(o980));
        return o981.join('/');
    }
};
var o936 = {
    o983: {
        o984: null,
        o985: "",
        o986: false,
        o987: false,
        o988: [],
        o989: function () {
            o936.o983.o986 = true;
        },
        o990: function () {
            if (o936.o983.o987) {
                o936.o983.o987 = false;
                o936.o983.o984();
            }
            o936.o983.o986 = false;
        },
        o991: function () {
            if (Module['setStatus']) {
                var o871 = Module['statusMessage'] || 'Please wait...';
                var o992 = o936.o983.o993;
                var o994 = o936.o983.o995;
                if (o992) {
                    if (o992 < o994) {
                        Module['setStatus'](o871 + ' (' + (o994 - o992) + '/' + o994 + ')');
                    } else {
                        Module['setStatus'](o871);
                    }
                } else {
                    Module['setStatus']('');
                }
            }
        }
    },
    o996: false,
    o997: false,
    o998: [],
    o999: [],
    o541: function () {
        if (!Module["preloadPlugins"]) Module["preloadPlugins"] = []; // needs to exist even in workers

        if (o936.o1000 || o27) return;
        o936.o1000 = true;

        try {
            new o1001();
            o936.o1002 = true;
        } catch (o232) {
            o936.o1002 = false;
            o57.o58("warning: no blob constructor, cannot create blobs with mimetypes");
        }
        o936.o1003 = typeof o1004 != "undefined" ? o1004 : (typeof o1005 != "undefined" ? o1005 : (!o936.o1002 ? o57.o58("warning: no BlobBuilder") : null));
        o936.o1006 = typeof o26 != "undefined" ? (o26.o1007 ? o26.o1007 : o26.o1008) : undefined;
        if (!Module.o1009 && typeof o936.o1006 === 'undefined') {
            o57.o58("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
            Module.o1009 = true;
        }

        // Support for plugins that can process preloaded files. You can add more of these to
        // your app by creating and appending to Module.preloadPlugins.
        //
        // Each plugin is asked if it can handle a file based on the file's name. If it can,
        // it is given the file's raw data. When it is done, it calls a callback with the file's
        // (possibly modified) data. For example, a plugin might decompress a file, or it
        // might create some side data structure for use later (like an Image element, etc.).

        var o1010 = {};
        o1010['canHandle'] = function o1011(name) {
            return !Module.o1009 && /\.(jpg|jpeg|png|bmp)$/i.test(name);
        };
        o1010['handle'] = function o1012(o939, name, o934, o663) {
            var o374 = null;
            if (o936.o1002) {
                try {
                    o374 = new o1001([o939], {
                        type: o936.o1013(name)
                    });
                    if (o374.o109 !== o939.length) { // Safari bug #118630
                        // Safari's Blob can only take an ArrayBuffer
                        o374 = new o1001([(new Uint8Array(o939)).buffer], {
                            type: o936.o1013(name)
                        });
                    }
                } catch (o232) {
                    o62.o160('Blob constructor present but fails: ' + o232 + '; falling back to blob builder');
                }
            }
            if (!o374) {
                var o1014 = new o936.o1003();
                o1014.o1015((new Uint8Array(o939)).buffer); // we need to pass a buffer, and must copy the array to get the right data range
                o374 = o1014.o1016();
            }
            var o51 = o936.o1006.o1017(o374);
            var o1018 = new o1019();
            o1018.o934 = function o1020() {
                o95(o1018.o1021, 'Image ' + name + ' could not be decoded');
                var o1022 = o1023.o1024('canvas');
                o1022.o1025 = o1018.o1025;
                o1022.o1026 = o1018.o1026;
                var o1027 = o1022.o1028('2d');
                o1027.o1029(o1018, 0, 0);
                Module["preloadedImages"][name] = o1022;
                o936.o1006.o1030(o51);
                if (o934) o934(o939);
            };
            o1018.o663 = function o1031(o677) {
                o57.o58('Image ' + o51 + ' could not be decoded');
                if (o663) o663();
            };
            o1018.o647 = o51;
        };
        Module['preloadPlugins'].push(o1010);

        var o1032 = {};
        o1032['canHandle'] = function o1033(name) {
            return !Module.o1034 && name.substr(-4) in {
                '.ogg': 1,
                '.wav': 1,
                '.mp3': 1
            };
        };
        o1032['handle'] = function o1035(o939, name, o934, o663) {
            var done = false;

            function o940(o1036) {
                if (done) return;
                done = true;
                Module["preloadedAudios"][name] = o1036;
                if (o934) o934(o939);
            }

            function o954() {
                if (done) return;
                done = true;
                Module["preloadedAudios"][name] = new o1037(); // empty shim
                if (o663) o663();
            }
            if (o936.o1002) {
                try {
                    var o374 = new o1001([o939], {
                        type: o936.o1013(name)
                    });
                } catch (o232) {
                    return o954();
                }
                var o51 = o936.o1006.o1017(o374); // XXX we never revoke this!
                var o1036 = new o1037();
                o1036.o1038('canplaythrough', function () {
                    o940(o1036)
                }, false); // use addEventListener due to chromium bug 124926
                o1036.o663 = function o1039(o677) {
                    if (done) return;
                    o57.o58('warning: browser could not fully decode audio ' + name + ', trying slower base64 approach');

                    function o1040(o861) {
                        var o1041 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                        var o1042 = '=';
                        var o38 = '';
                        var o1043 = 0;
                        var o1044 = 0;
                        for (var o106 = 0; o106 < o861.length; o106++) {
                            o1043 = (o1043 << 8) | o861[o106];
                            o1044 += 8;
                            while (o1044 >= 6) {
                                var o125 = (o1043 >> (o1044 - 6)) & 0x3f;
                                o1044 -= 6;
                                o38 += o1041[o125];
                            }
                        }
                        if (o1044 == 2) {
                            o38 += o1041[(o1043 & 3) << 4];
                            o38 += o1042 + o1042;
                        } else if (o1044 == 4) {
                            o38 += o1041[(o1043 & 0xf) << 2];
                            o38 += o1042;
                        }
                        return o38;
                    }
                    o1036.o647 = 'data:audio/x-' + name.substr(-3) + ';base64,' + o1040(o939);
                    o940(o1036); // we don't wait for confirmation this worked - but it's worth trying
                };
                o1036.o647 = o51;
                // workaround for chrome bug 124926 - we do not always get oncanplaythrough or onerror
                o936.o1045(function () {
                    o940(o1036); // try to use it even though it is not necessarily ready to play
                }, 10000);
            } else {
                return o954();
            }
        };
        Module['preloadPlugins'].push(o1032);

        // Canvas event setup

        var o1022 = Module['canvas'];

        // forced aspect ratio can be enabled by defining 'forcedAspectRatio' on Module
        // Module['forcedAspectRatio'] = 4 / 3;

        o1022.o1046 = o1022['requestPointerLock'] ||
            o1022['mozRequestPointerLock'] ||
            o1022['webkitRequestPointerLock'] ||
            o1022['msRequestPointerLock'] ||
            function () {};
        o1022.o1047 = o1023['exitPointerLock'] ||
            o1023['mozExitPointerLock'] ||
            o1023['webkitExitPointerLock'] ||
            o1023['msExitPointerLock'] ||
            function () {}; // no-op if function does not exist
        o1022.o1047 = o1022.o1047.bind(o1023);

        function o1049() {
            o936.o997 = o1023['pointerLockElement'] === o1022 ||
                o1023['mozPointerLockElement'] === o1022 ||
                o1023['webkitPointerLockElement'] === o1022 ||
                o1023['msPointerLockElement'] === o1022;
        }

        o1023.o1038('pointerlockchange', o1049, false);
        o1023.o1038('mozpointerlockchange', o1049, false);
        o1023.o1038('webkitpointerlockchange', o1049, false);
        o1023.o1038('mspointerlockchange', o1049, false);

        if (Module['elementPointerLock']) {
            o1022.o1038("click", function (o1050) {
                if (!o936.o997 && o1022.o1046) {
                    o1022.o1046();
                    o1050.o1051();
                }
            }, false);
        }
    },
    o1052: function (o1022, o1053, o1054, o1055) {
        var o1027;
        var o1056 = '?';

        function o1057(o677) {
            o1056 = o677.o1058 || o1056;
        }
        try {
            if (o1053) {
                var o1059 = {
                    o1060: false,
                    o1061: false
                };

                if (o1055) {
                    for (var o1062 in o1055) {
                        o1059[o1062] = o1055[o1062];
                    }
                }


                o1022.o1038('webglcontextcreationerror', o1057, false);
                try {
                    ['experimental-webgl', 'webgl'].some(function (o1064) {
                        return o1027 = o1022.o1028(o1064, o1059);
                    });
                } finally {
                    o1022.o1065('webglcontextcreationerror', o1057, false);
                }
            } else {
                o1027 = o1022.o1028('2d');
            }
            if (!o1027) throw ':(';
        } catch (o232) {
            Module.print('Could not create canvas: ' + [o1056, o232]);
            return null;
        }
        if (o1053) {
            // Set the background of the WebGL canvas to black
            o1022.o1066.o1067 = "black";

            // Warn on context loss
            o1022.o1038('webglcontextlost', function (o677) {
                o1068('WebGL context lost. You will need to reload the page.');
            }, false);
        }
        if (o1054) {
            o1069 = Module.o1027 = o1027;
            Module.o1053 = o1053;
            o936.o998.forEach(function (o340) {
                o340()
            });
            o936.o541();
        }
        return o1027;
    },
    o1070: function (o1022, o1053, o1054) {},
    o1071: false,
    o1072: undefined,
    o1073: undefined,
    o1074: function (o1072, o1073) {
        o936.o1072 = o1072;
        o936.o1073 = o1073;
        if (typeof o936.o1072 === 'undefined') o936.o1072 = true;
        if (typeof o936.o1073 === 'undefined') o936.o1073 = false;

        var o1022 = Module['canvas'];
        var o1075 = o1022.o1076;

        function o1077() {
            o936.o996 = false;
            if ((o1023['webkitFullScreenElement'] || o1023['webkitFullscreenElement'] ||
                o1023['mozFullScreenElement'] || o1023['mozFullscreenElement'] ||
                o1023['fullScreenElement'] || o1023['fullscreenElement'] ||
                o1023['msFullScreenElement'] || o1023['msFullscreenElement'] ||
                o1023['webkitCurrentFullScreenElement']) === o1075) {
                o1022.o1078 = o1023['cancelFullScreen'] ||
                    o1023['mozCancelFullScreen'] ||
                    o1023['webkitCancelFullScreen'] ||
                    o1023['msExitFullscreen'] ||
                    o1023['exitFullscreen'] ||
                    function () {};
                o1022.o1078 = o1022.o1078.bind(o1023);
                if (o936.o1072) o1022.o1046();
                o936.o996 = true;
                if (o936.o1073) o936.o1079();
            } else {

                // remove the full screen specific parent of the canvas again to restore the HTML structure from before going full screen
                var o1075 = o1022.o1076;
                o1075.o1076.o1080(o1022, o1075);
                o1075.o1076.o1081(o1075);

                if (o936.o1073) o936.o1082();
            }
            if (Module['onFullScreen']) Module['onFullScreen'](o936.o996);
            o936.o1083(o1022);
        }

        if (!o936.o1071) {
            o936.o1071 = true;
            o1023.o1038('fullscreenchange', o1077, false);
            o1023.o1038('mozfullscreenchange', o1077, false);
            o1023.o1038('webkitfullscreenchange', o1077, false);
            o1023.o1038('MSFullscreenChange', o1077, false);
        }

        // create a new parent to ensure the canvas has no siblings. this allows browsers to optimize full screen performance when its parent is the full screen root
        var o1075 = o1023.o1024("div");
        o1022.o1076.o1080(o1075, o1022);
        o1075.o1084(o1022);

        // use parent of canvas as full screen root to allow aspect ratio correction (Firefox stretches the root to screen size)
        o1075.o1074 = o1075['requestFullScreen'] ||
            o1075['mozRequestFullScreen'] ||
            o1075['msRequestFullscreen'] ||
            (o1075['webkitRequestFullScreen'] ? function () {
            o1075['webkitRequestFullScreen'](o1085['ALLOW_KEYBOARD_INPUT'])
        } : null);
        o1075.o1074();
    },
    o1086: function o1086(o149) {
        if (typeof o26 === 'undefined') { // Provide fallback to setTimeout if window is undefined (e.g. in Node.js)
            o1087(o149, 1000 / 60);
        } else {
            if (!o26.o1086) {
                o26.o1086 = o26['requestAnimationFrame'] ||
                    o26['mozRequestAnimationFrame'] ||
                    o26['webkitRequestAnimationFrame'] ||
                    o26['msRequestAnimationFrame'] ||
                    o26['oRequestAnimationFrame'] ||
                    o26['setTimeout'];
            }
            o26.o1086(o149);
        }
    },
    o1088: function (o149) {
        return function () {
            if (!o197) return o149.apply(null, arguments);
        };
    },
    o1089: function (o149) {
        return o936.o1086(function () {
            if (!o197) o149();
        });
    },
    o1045: function (o149, o1090) {
        return o1087(function () {
            if (!o197) o149();
        }, o1090);
    },
    o1091: function (o149, o1090) {
        return o1092(function () {
            if (!o197) o149();
        }, o1090);
    },
    o1013: function (name) {
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
    o1093: function (o149) {
        if (!o26.o1093) {
            o26.o1093 = o1094['getUserMedia'] ||
                o1094['mozGetUserMedia'];
        }
        o26.o1093(o149);
    },
    o1095: function (o677) {
        return o677['movementX'] ||
            o677['mozMovementX'] ||
            o677['webkitMovementX'] ||
            0;
    },
    o1096: function (o677) {
        return o677['movementY'] ||
            o677['mozMovementY'] ||
            o677['webkitMovementY'] ||
            0;
    },
    o1097: function (o677) {
        return Math.o97(-1, Math.o111(1, o677.type === 'DOMMouseScroll' ? o677.o1098 : -o677.o1099));
    },
    o1100: 0,
    o1101: 0,
    o1102: 0,
    o1103: 0,
    o1104: function (o677) { // event should be mousemove, mousedown or mouseup
        if (o936.o997) {
            // When the pointer is locked, calculate the coordinates
            // based on the movement of the mouse.
            // Workaround for Firefox bug 764498
            if (o677.type != 'mousemove' &&
                ('mozMovementX' in o677)) {
                o936.o1102 = o936.o1103 = 0;
            } else {
                o936.o1102 = o936.o1095(o677);
                o936.o1103 = o936.o1096(o677);
            }

            // check if SDL is available
            if (typeof o1105 != "undefined") {
                o936.o1100 = o1105.o1100 + o936.o1102;
                o936.o1101 = o1105.o1101 + o936.o1103;
            } else {
                // just add the mouse delta to the current absolut mouse position
                // FIXME: ideally this should be clamped against the canvas size and zero
                o936.o1100 += o936.o1102;
                o936.o1101 += o936.o1103;
            }
        } else {
            // Otherwise, calculate the movement based on the changes
            // in the coordinates.
            var o1106 = Module["canvas"].o1107();
            var o30, o84;

            // Neither .scrollX or .pageXOffset are defined in a spec, but
            // we prefer .scrollX because it is currently in a spec draft.
            // (see: http://www.w3.org/TR/2013/WD-cssom-view-20131217/)
            var o1108 = ((typeof o26.o1108 !== 'undefined') ? o26.o1108 : o26.o1109);
            var o1110 = ((typeof o26.o1110 !== 'undefined') ? o26.o1110 : o26.o1111);
            if (o677.type == 'touchstart' ||
                o677.type == 'touchend' ||
                o677.type == 'touchmove') {
                var o275 = o677.o1112.o103(0);
                if (o275) {
                    o30 = o275.o1113 - (o1108 + o1106.o1114);
                    o84 = o275.o1115 - (o1110 + o1106.o13);
                } else {
                    return;
                }
            } else {
                o30 = o677.o1113 - (o1108 + o1106.o1114);
                o84 = o677.o1115 - (o1110 + o1106.o13);
            }

            // the canvas might be CSS-scaled compared to its backbuffer;
            // SDL-using content will want mouse coordinates in terms
            // of backbuffer units.
            var o1116 = Module["canvas"].o1025;
            var o285 = Module["canvas"].o1026;
            o30 = o30 * (o1116 / o1106.o1025);
            o84 = o84 * (o285 / o1106.o1026);

            o936.o1102 = o30 - o936.o1100;
            o936.o1103 = o84 - o936.o1101;
            o936.o1100 = o30;
            o936.o1101 = o84;
        }
    },
    o1117: function (o51, o934, o663) {
        var o52 = new o53();
        o52.o54('GET', o51, true);
        o52.o922 = 'arraybuffer';
        o52.o934 = function o1118() {
            if (o52.o912 == 200 || (o52.o912 == 0 && o52.o924)) { // file URLs can return 0
                o934(o52.o924);
            } else {
                o663();
            }
        };
        o52.o663 = o663;
        o52.o55(null);
    },
    o943: function (o51, o934, o663, o1119) {
        o936.o1117(o51, function (o1120) {
            o95(o1120, 'Loading data file "' + o51 + '" failed (no arrayBuffer).');
            o934(new Uint8Array(o1120));
            if (!o1119) o407('al ' + o51);
        }, function (o677) {
            if (o663) {
                o663();
            } else {
                throw 'Loading data file "' + o51 + '" failed.';
            }
        });
        if (!o1119) o405('al ' + o51);
    },
    o1121: [],
    o1122: function () {
        var o1022 = Module['canvas'];
        o936.o1121.forEach(function (o1123) {
            o1123(o1022.o1025, o1022.o1026);
        });
    },
    o1124: function (o1025, o1026, o1125) {
        var o1022 = Module['canvas'];
        o936.o1083(o1022, o1025, o1026);
        if (!o1125) o936.o1122();
    },
    o1126: 0,
    o1127: 0,
    o1079: function () {
        // check if SDL is available   
        if (typeof o1105 != "undefined") {
            var flags = o321[((o1105.o1128 + o62.o91 * 0) >> 2)];
            flags = flags | 0x00800000; // set SDL_FULLSCREEN flag
            o248[((o1105.o1128 + o62.o91 * 0) >> 2)] = flags
        }
        o936.o1122();
    },
    o1082: function () {
        // check if SDL is available       
        if (typeof o1105 != "undefined") {
            var flags = o321[((o1105.o1128 + o62.o91 * 0) >> 2)];
            flags = flags & ~0x00800000; // clear SDL_FULLSCREEN flag
            o248[((o1105.o1128 + o62.o91 * 0) >> 2)] = flags
        }
        o936.o1122();
    },
    o1083: function (o1022, o1129, o1130) {
        if (o1129 && o1130) {
            o1022.o1131 = o1129;
            o1022.o1132 = o1130;
        } else {
            o1129 = o1022.o1131;
            o1130 = o1022.o1132;
        }
        var o1133 = o1129;
        var o86 = o1130;
        if (Module['forcedAspectRatio'] && Module['forcedAspectRatio'] > 0) {
            if (o1133 / o86 < Module['forcedAspectRatio']) {
                o1133 = Math.o87(o86 * Module['forcedAspectRatio']);
            } else {
                o86 = Math.o87(o1133 / Module['forcedAspectRatio']);
            }
        }
        if (((o1023['webkitFullScreenElement'] || o1023['webkitFullscreenElement'] ||
            o1023['mozFullScreenElement'] || o1023['mozFullscreenElement'] ||
            o1023['fullScreenElement'] || o1023['fullscreenElement'] ||
            o1023['msFullScreenElement'] || o1023['msFullscreenElement'] ||
            o1023['webkitCurrentFullScreenElement']) === o1022.o1076) && (typeof o1128 != 'undefined')) {
            var o1134 = Math.o111(o1128.o1025 / o1133, o1128.o1026 / o86);
            o1133 = Math.o87(o1133 * o1134);
            o86 = Math.o87(o86 * o1134);
        }
        if (o936.o1073) {
            if (o1022.o1025 != o1133) o1022.o1025 = o1133;
            if (o1022.o1026 != o86) o1022.o1026 = o86;
            if (typeof o1022.o1066 != 'undefined') {
                o1022.o1066.o1135("width");
                o1022.o1066.o1135("height");
            }
        } else {
            if (o1022.o1025 != o1129) o1022.o1025 = o1129;
            if (o1022.o1026 != o1130) o1022.o1026 = o1130;
            if (typeof o1022.o1066 != 'undefined') {
                if (o1133 != o1129 || o86 != o1130) {
                    o1022.o1066.o1136("width", o1133 + "px", "important");
                    o1022.o1066.o1136("height", o86 + "px", "important");
                } else {
                    o1022.o1066.o1135("width");
                    o1022.o1066.o1135("height");
                }
            }
        }
    }
};


Module["_memset"] = o1137;


Module["_strlen"] = o1138;


function o1139(o1140, o647, o299) {
    o269.set(o269.subarray(o647, o647 + o299), o1140);
    return o1140;
}
Module["_memcpy"] = o1141;

function o1142() {}
Module["_free"] = o1142;
Module["requestFullScreen"] = function o1143(o1072, o1073) {
    o936.o1074(o1072, o1073)
};
Module["requestAnimationFrame"] = function o1144(o149) {
    o936.o1086(o149)
};
Module["setCanvasSize"] = function o1145(o1025, o1026, o1125) {
    o936.o1124(o1025, o1026, o1125)
};
Module["pauseMainLoop"] = function o1146() {
    o936.o983.o989()
};
Module["resumeMainLoop"] = function o1147() {
    o936.o983.o990()
};
Module["getUserMedia"] = function o1148() {
    o936.o1093()
}
o548.o709();
o343.unshift({
    o149: function () {
        if (!Module["noFSInit"] && !o548.o541.o755) o548.o541()
    }
});
o344.push({
    o149: function () {
        o548.o756 = false
    }
});
o345.push({
    o149: function () {
        o548.o873()
    }
});
Module["FS_createFolder"] = o548.o888;
Module["FS_createPath"] = o548.o889;
Module["FS_createDataFile"] = o548.o893;
Module["FS_createPreloadedFile"] = o548.o933;
Module["FS_createLazyFile"] = o548.o899;
Module["FS_createLink"] = o548.o895;
Module["FS_createDevice"] = o548.o866;
o537 = o62.o184(4);
o248[((o537) >> 2)] = 0;
o343.unshift({
    o149: function () {
        o539.o541()
    }
});
o345.push({
    o149: function () {
        o539.o542()
    }
});
o539.o277 = new o62.o166();
if (o22) {
    var o714 = o24("fs");
    o707.o709();
}
o324 = o64 = o62.o126(o185);

o323 = true; // seal the static portion of memory

o325 = o324 + 5242880;

o326 = o187 = o62.o126(o325);

o95(o326 < o188, "TOTAL_MEMORY not big enough for stack");


var o250 = Math.o111;

function o1149(o30, o84) {
    Module.print('int ' + o30 + ',' + o84); // + ' ' + new Error().stack);
}

function o1150(o30, o84) {
    Module.print('float ' + o30 + ',' + o84); // + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var o1151 = (function (global, o1153, buffer) {
    "use asm";
    var o295 = new global.Int8Array(buffer);
    var o374 = new global.Int16Array(buffer);
    var o310 = new global.Int32Array(buffer);
    var o1154 = new global.Uint8Array(buffer);
    var o232 = new global.Uint16Array(buffer);
    var o45 = new global.Uint32Array(buffer);
    var o1155 = new global.Float32Array(buffer);
    var o86 = new global.Float64Array(buffer);
    var o106 = o1153.o64 | 0;
    var o1156 = o1153.o325 | 0;
    var o139 = o1153.o410 | 0;
    var o85 = o1153.o197 | 0;
    var o827 = 0;
    var o1157 = 0;
    var o1158 = 0;
    var o666 = 0;
    var o1159 = +o1153.NaN,
        o973 = +o1153.Infinity;
    var o1161 = 0,
        o275 = 0,
        o1162 = 0,
        o1163 = 0,
        o1133 = 0.0,
        o30 = 0,
        o84 = 0,
        o1164 = 0,
        o1165 = 0.0;
    var o1166 = 0;
    var o1167 = 0;
    var o1168 = 0;
    var o1169 = 0;
    var o1170 = 0;
    var o1171 = 0;
    var o1172 = 0;
    var o1173 = 0;
    var o1174 = 0;
    var o1175 = 0;
    var o1176 = global.Math.floor;
    var o1177 = global.Math.abs;
    var o1178 = global.Math.sqrt;
    var o1179 = global.Math.o370;
    var o1180 = global.Math.cos;
    var o1181 = global.Math.sin;
    var o1182 = global.Math.tan;
    var o1183 = global.Math.acos;
    var o1184 = global.Math.o388;
    var o1185 = global.Math.o390;
    var o1186 = global.Math.atan2;
    var o1187 = global.Math.o394;
    var o1188 = global.Math.o58;
    var o1189 = global.Math.ceil;
    var o1190 = global.Math.imul;
    var o1191 = o1153.o159;
    var o1192 = o1153.o95;
    var o1193 = o1153.o1149;
    var o1194 = o1153.o1150;
    var o1195 = o1153.o111;
    var o1196 = o1153.o266;
    var o1197 = o1153.o748;
    var o1198 = o1153.o1142;
    var o1199 = o1153.o1139;
    var o1200 = o1153.o538;
    var o1201 = 0.0;
    // EMSCRIPTEN_START_FUNCS
    function o1202(o295) {
        o295 = o295 | 0;
        var o374 = 0;
        o374 = o106;
        o106 = o106 + o295 | 0;
        o106 = o106 + 7 & -8;
        return o374 | 0
    }

    function o1203() {
        return o106 | 0
    }

    function o1204(o295) {
        o295 = o295 | 0;
        o106 = o295
    }

    function o824(o295, o374) {
        o295 = o295 | 0;
        o374 = o374 | 0;
        if ((o827 | 0) == 0) {
            o827 = o295;
            o1157 = o374
        }
    }

    function o1205(o374) {
        o374 = o374 | 0;
        o295[o139] = o295[o374];
        o295[o139 + 1 | 0] = o295[o374 + 1 | 0];
        o295[o139 + 2 | 0] = o295[o374 + 2 | 0];
        o295[o139 + 3 | 0] = o295[o374 + 3 | 0]
    }

    function o1206(o374) {
        o374 = o374 | 0;
        o295[o139] = o295[o374];
        o295[o139 + 1 | 0] = o295[o374 + 1 | 0];
        o295[o139 + 2 | 0] = o295[o374 + 2 | 0];
        o295[o139 + 3 | 0] = o295[o374 + 3 | 0];
        o295[o139 + 4 | 0] = o295[o374 + 4 | 0];
        o295[o139 + 5 | 0] = o295[o374 + 5 | 0];
        o295[o139 + 6 | 0] = o295[o374 + 6 | 0];
        o295[o139 + 7 | 0] = o295[o374 + 7 | 0]
    }

    function o1207(o295) {
        o295 = o295 | 0;
        o1166 = o295
    }

    function o1208(o295) {
        o295 = o295 | 0;
        o1167 = o295
    }

    function o1209(o295) {
        o295 = o295 | 0;
        o1168 = o295
    }

    function o1210(o295) {
        o295 = o295 | 0;
        o1169 = o295
    }

    function o1211(o295) {
        o295 = o295 | 0;
        o1170 = o295
    }

    function o1212(o295) {
        o295 = o295 | 0;
        o1171 = o295
    }

    function o1213(o295) {
        o295 = o295 | 0;
        o1172 = o295
    }

    function o1214(o295) {
        o295 = o295 | 0;
        o1173 = o295
    }

    function o1215(o295) {
        o295 = o295 | 0;
        o1174 = o295
    }

    function o1216(o295) {
        o295 = o295 | 0;
        o1175 = o295
    }

    function o1217(o295) {
        o295 = o295 | 0;
        var o374 = 0,
            o1154 = 0,
            o232 = 0,
            o45 = 0,
            o86 = 0,
            o1156 = 0.0;
        o295 = o106;
        o310[2] = 74755;
        o374 = 74755;
        o1154 = 1;
        while (1) {
            o232 = o374;
            o45 = 1;
            do {
                o232 = (o232 * 1309 | 0) + 13849 & 65535;
                o1155[16 + (o1154 * 164 | 0) + (o45 << 2) >> 2] = +(((o232 >>> 0) % 120 | 0) + -60 | 0) / 3.0;
                o45 = o45 + 1 | 0;
            } while ((o45 | 0) != 41);
            o45 = o1154 + 1 | 0;
            if ((o45 | 0) == 41) {
                break
            } else {
                o374 = o232;
                o1154 = o45
            }
        }
        o310[2] = o232;
        o1154 = o232;
        o232 = 1;
        while (1) {
            o86 = o1154;
            o374 = 1;
            do {
                o86 = (o86 * 1309 | 0) + 13849 & 65535;
                o1155[6744 + (o232 * 164 | 0) + (o374 << 2) >> 2] = +(((o86 >>> 0) % 120 | 0) + -60 | 0) / 3.0;
                o374 = o374 + 1 | 0;
            } while ((o374 | 0) != 41);
            o374 = o232 + 1 | 0;
            if ((o374 | 0) == 41) {
                break
            } else {
                o1154 = o86;
                o232 = o374
            }
        }
        o310[2] = o86;
        o86 = 1;
        do {
            o232 = 1;
            do {
                o1154 = 13472 + (o86 * 164 | 0) + (o232 << 2) | 0;
                o1155[o1154 >> 2] = 0.0;
                o1156 = 0.0;
                o374 = 1;
                do {
                    o1156 = o1156 + +o1155[16 + (o86 * 164 | 0) + (o374 << 2) >> 2] * +o1155[6744 + (o374 * 164 | 0) + (o232 << 2) >> 2];
                    o374 = o374 + 1 | 0;
                } while ((o374 | 0) != 41);
                o1155[o1154 >> 2] = o1156;
                o232 = o232 + 1 | 0;
            } while ((o232 | 0) != 41);
            o86 = o86 + 1 | 0;
        } while ((o86 | 0) != 41);
        o106 = o295;
        return
    }

    function o1218() {
        var o295 = 0,
            o374 = 0;
        o295 = o106;
        o374 = 0;
        do {
            o1217(0);
            o374 = o374 + 1 | 0;
        } while ((o374 | 0) != 5e3);
        o106 = o295;
        return 0
    }

    function o1219() {}

    function o1220(o374, o1154, o232) {
        o374 = o374 | 0;
        o1154 = o1154 | 0;
        o232 = o232 | 0;
        var o45 = 0,
            o1155 = 0,
            o86 = 0,
            o106 = 0;
        o45 = o374 + o232 | 0;
        if ((o232 | 0) >= 20) {
            o1154 = o1154 & 255;
            o1155 = o374 & 3;
            o86 = o1154 | o1154 << 8 | o1154 << 16 | o1154 << 24;
            o106 = o45 & ~3;
            if (o1155) {
                o1155 = o374 + 4 - o1155 | 0;
                while ((o374 | 0) < (o1155 | 0)) {
                    o295[o374] = o1154;
                    o374 = o374 + 1 | 0
                }
            }
            while ((o374 | 0) < (o106 | 0)) {
                o310[o374 >> 2] = o86;
                o374 = o374 + 4 | 0
            }
        }
        while ((o374 | 0) < (o45 | 0)) {
            o295[o374] = o1154;
            o374 = o374 + 1 | 0
        }
        return o374 - o232 | 0
    }

    function o1221(o374) {
        o374 = o374 | 0;
        var o310 = 0;
        o310 = o374;
        while (o295[o310] | 0) {
            o310 = o310 + 1 | 0
        }
        return o310 - o374 | 0
    }

    function o1222(o374, o1154, o232) {
        o374 = o374 | 0;
        o1154 = o1154 | 0;
        o232 = o232 | 0;
        var o45 = 0;
        if ((o232 | 0) >= 4096) return o1199(o374 | 0, o1154 | 0, o232 | 0) | 0;
        o45 = o374 | 0;
        if ((o374 & 3) == (o1154 & 3)) {
            while (o374 & 3) {
                if ((o232 | 0) == 0) return o45 | 0;
                o295[o374] = o295[o1154] | 0;
                o374 = o374 + 1 | 0;
                o1154 = o1154 + 1 | 0;
                o232 = o232 - 1 | 0
            }
            while ((o232 | 0) >= 4) {
                o310[o374 >> 2] = o310[o1154 >> 2];
                o374 = o374 + 4 | 0;
                o1154 = o1154 + 4 | 0;
                o232 = o232 - 4 | 0
            }
        }
        while ((o232 | 0) > 0) {
            o295[o374] = o295[o1154] | 0;
            o374 = o374 + 1 | 0;
            o1154 = o1154 + 1 | 0;
            o232 = o232 - 1 | 0
        }
        return o45 | 0
    }




    // EMSCRIPTEN_END_FUNCS
    return {
        o1138: o1221,
        o1141: o1222,
        o1223: o1218,
        o1137: o1220,
        o1224: o1219,
        o183: o1202,
        o63: o1203,
        o65: o1204,
        o1225: o824,
        o1226: o1207,
        o1227: o1208,
        o1228: o1209,
        o1229: o1210,
        o1230: o1211,
        o1231: o1212,
        o1232: o1213,
        o1233: o1214,
        o1234: o1215,
        o1235: o1216
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
    "abort": o159,
    "assert": o95,
    "asmPrintInt": o1149,
    "asmPrintFloat": o1150,
    "min": o250,
    "_malloc": o266,
    "_fflush": o748,
    "_free": o1142,
    "_emscripten_memcpy_big": o1139,
    "___setErrNo": o538,
    "STACKTOP": o64,
    "STACK_MAX": o325,
    "tempDoublePtr": o410,
    "ABORT": o197,
    "NaN": NaN,
    "Infinity": Infinity
}, buffer);
var o1138 = Module["_strlen"] = o1151["_strlen"];
var o1141 = Module["_memcpy"] = o1151["_memcpy"];
var o1223 = Module["_main"] = o1151["_main"];
var o1137 = Module["_memset"] = o1151["_memset"];
var o1224 = Module["runPostSets"] = o1151["runPostSets"];

o62.o183 = function (o109) {
    return o1151['stackAlloc'](o109)
};
o62.o63 = function () {
    return o1151['stackSave']()
};
o62.o65 = function (o13) {
    o1151['stackRestore'](o13)
};


// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var o1236 = null;

// === Auto-generated postamble setup entry stuff ===

if (o409) {
    if (o22 || o29) {
        var o861 = Module['readBinary'](o409);
        o269.set(o861, o322);
    } else {
        o405('memory initializer');
        o936.o943(o409, function (o861) {
            o269.set(o861, o322);
            o407('memory initializer');
        }, function (o861) {
            throw 'could not load memory initializer ' + o409;
        });
    }
}

function o1237(o912) {
    this.name = "ExitStatus";
    this.o871 = "Program terminated with exit(" + o912 + ")";
    this.o912 = o912;
};
o1237.prototype = new Error();
o1237.prototype.constructor = o1237;

var o1238;
var o1239 = null;
var o1240 = false;

o404 = function o1241() {
    // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
    if (!Module['calledRun'] && o1242) o1243();
    if (!Module['calledRun']) o404 = o1241; // try this again later, after new deps are fulfilled
}

Module['callMain'] = Module.o1244 = function o1244(o105) {
    o95(o402 == 0, 'cannot call main when async dependencies remain! (listen on __ATMAIN__)');
    o95(o342.length == 0, 'cannot call main when preRun functions remain to be called');

    o105 = o105 || [];

    if (o25 && o1239 !== null) {
        Module.o32('preload time: ' + (Date.o5() - o1239) + ' ms');
    }

    o350();

    var o1245 = o105.length + 1;

    function o1246() {
        for (var o106 = 0; o106 < 4 - 1; o106++) {
            o1247.push(0);
        }
    }
    var o1247 = [o261(o237("/bin/this.program"), 'i8', o256)];
    o1246();
    for (var o106 = 0; o106 < o1245 - 1; o106 = o106 + 1) {
        o1247.push(o261(o237(o105[o106]), 'i8', o256));
        o1246();
    }
    o1247.push(0);
    o1247 = o261(o1247, 'i32', o256);

    o1238 = o64;

    try {

        var o38 = Module['_main'](o1245, o1247, 0);


        // if we're not running an evented main loop, it's time to exit
        if (!Module['noExitRuntime']) {
            o1248(o38);
        }
    } catch (o232) {
        if (o232 instanceof o1237) {
            // exit() throws this once it's done to make sure execution
            // has been stopped completely
            return;
        } else if (o232 == 'SimulateInfiniteLoop') {
            // running an evented main loop, don't immediately exit
            Module['noExitRuntime'] = true;
            return;
        } else {
            if (o232 && typeof o232 === 'object' && o232.o233) Module.o32('exception thrown: ' + [o232, o232.o233]);
            throw o232;
        }
    } finally {
        o1240 = true;
    }
}




function o1243(o105) {
    o105 = o105 || Module['arguments'];

    if (o1239 === null) o1239 = Date.o5();

    if (o402 > 0) {
        Module.o32('run() called, but dependencies remain, so not running');
        return;
    }

    o348();

    if (o402 > 0) return; // a preRun added a dependency, run will be called later
    if (Module['calledRun']) return; // run may have just been called through dependencies being fulfilled just in this very frame

    function o1249() {
        if (Module['calledRun']) return; // run may have just been called while the async setStatus time below was happening
        Module['calledRun'] = true;

        o350();

        o351();

        if (Module['_main'] && o1242) {
            Module['callMain'](o105);
        }

        o353();
    }

    if (Module['setStatus']) {
        Module['setStatus']('Running...');
        o1087(function () {
            o1087(function () {
                Module['setStatus']('');
            }, 1);
            if (!o197) o1249();
        }, 1);
    } else {
        o1249();
    }
}
Module['run'] = Module.o1243 = o1243;

function o1248(o912) {
    o197 = true;
    o198 = o912;
    o64 = o1238;

    // exit the runtime
    o352();

    // TODO We should handle this differently based on environment.
    // In the browser, the best we can do is throw an exception
    // to halt execution, but in node we could process.exit and
    // I'd imagine SM shell would have something equivalent.
    // This would let us set a proper exit status (which
    // would be great for checking test exit statuses).
    // https://github.com/kripken/emscripten/issues/1371

    // throw an exception to halt the current execution
    throw new o1237(o912);
}
Module['exit'] = Module.o1248 = o1248;

function o159(o161) {
    if (o161) {
        Module.print(o161);
        Module.o32(o161);
    }

    o197 = true;
    o198 = 1;

    var o1250 = '\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.';

    throw 'abort() at ' + o315() + o1250;
}
Module['abort'] = Module.o159 = o159;

// {{PRE_RUN_ADDITIONS}}

if (Module['preInit']) {
    if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
    while (Module['preInit'].length > 0) {
        Module['preInit'].pop()();
    }
}

// shouldRunNow refers to calling main(), not run().
var o1242 = true;
if (Module['noInitialRun']) {
    o1242 = false;
}


o1243();

// {{POST_RUN_ADDITIONS}}




// {{MODULE_ADDITIONS}}

////////////////////////////////////////////////////////////////////////////////
// Runner
////////////////////////////////////////////////////////////////////////////////
var o1251 = o13.o14.o15();
o13.o14.o11(o1251 - o16);