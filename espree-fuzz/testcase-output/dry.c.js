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

o185 = o322 + o62.o126(11195);
/* global initializers */
o343.push();


/* memory initializer */
o261([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 72, 82, 89, 83, 84, 79, 78, 69, 32, 80, 82, 79, 71, 82, 65, 77, 44, 32, 83, 79, 77, 69, 32, 83, 84, 82, 73, 78, 71], "i8", o260, o62.o194);




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




function o413(o414, o415, o299) {
    o269.set(o269.subarray(o415, o415 + o299), o414);
    return o414;
}
Module["_memcpy"] = o416;
var o417 = o416;

function o418(o419) {
    // Implement a Linux-like 'memory area' for our 'process'.
    // Changes the size of the memory area by |bytes|; returns the
    // address of the previous top ('break') of the memory area
    // We control the "dynamic" memory - DYNAMIC_BASE to DYNAMICTOP
    var o420 = o418;
    if (!o420.o421) {
        o187 = o318(o187); // make sure we start out aligned
        o420.o421 = true;
        o95(o62.o186);
        o420.o422 = o62.o186;
        o62.o186 = function () {
            o159('cannot dynamically allocate, sbrk now has control')
        };
    }
    var o38 = o187;
    if (o419 != 0) o420.o422(o419);
    return o38; // Previous break location.
}



var o423 = 0;

function o424(value) {
    // For convenient setting and returning of errno.
    o248[((o423) >> 2)] = value;
    return value;
}

var o425 = {
    o426: 1,
    o427: 2,
    o428: 3,
    o429: 4,
    o430: 5,
    o431: 6,
    o432: 7,
    o433: 8,
    o434: 9,
    o435: 10,
    o436: 11,
    o437: 11,
    o438: 12,
    o439: 13,
    o440: 14,
    o441: 15,
    o442: 16,
    o443: 17,
    o444: 18,
    o445: 19,
    o446: 20,
    o447: 21,
    o448: 22,
    o449: 23,
    o450: 24,
    o451: 25,
    o452: 26,
    o453: 27,
    o454: 28,
    o455: 29,
    o456: 30,
    o457: 31,
    o458: 32,
    o459: 33,
    o460: 34,
    o461: 42,
    o462: 43,
    o463: 44,
    o464: 45,
    o465: 46,
    o466: 47,
    o467: 48,
    o468: 49,
    o469: 50,
    o470: 51,
    o471: 35,
    o472: 37,
    o473: 52,
    o474: 53,
    o475: 54,
    o476: 55,
    o477: 56,
    o478: 57,
    o479: 35,
    o480: 59,
    o481: 60,
    o482: 61,
    o483: 62,
    o484: 63,
    o485: 64,
    o486: 65,
    o487: 66,
    o488: 67,
    o489: 68,
    o490: 69,
    o491: 70,
    o492: 71,
    o493: 72,
    o494: 73,
    o495: 74,
    o496: 76,
    o497: 77,
    o498: 78,
    o499: 79,
    o500: 80,
    o501: 81,
    o502: 82,
    o503: 83,
    o504: 38,
    o505: 39,
    o506: 36,
    o507: 40,
    o508: 95,
    o509: 96,
    o510: 104,
    o511: 105,
    o512: 97,
    o513: 91,
    o514: 88,
    o515: 92,
    o516: 108,
    o517: 111,
    o518: 98,
    o519: 103,
    o520: 101,
    o521: 100,
    o522: 110,
    o523: 112,
    o524: 113,
    o525: 115,
    o526: 114,
    o527: 89,
    o528: 90,
    o529: 93,
    o530: 94,
    o531: 99,
    o532: 102,
    o533: 106,
    o534: 107,
    o535: 109,
    o536: 87,
    o537: 122,
    o538: 116,
    o539: 95,
    o540: 123,
    o541: 84,
    o542: 75,
    o543: 125,
    o544: 131,
    o545: 130,
    o546: 86
};

function o547(name) {
    // long sysconf(int name);
    // http://pubs.opengroup.org/onlinepubs/009695399/functions/sysconf.html
    switch (name) {
    case 30:
        return o317;
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
    o424(o425.o448);
    return -1;
}

function o548() {
    if (o548.o549 === undefined) o548.o549 = Date.o5();
    return Math.floor((Date.o5() - o548.o549) * (1000000 / 1000));
}


Module["_memset"] = o550;

function o551() {
    return o423;
}

function o552() {
    Module['abort']();
}




var o553 = {
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

var o554 = {
    o555: [],
    o556: function () {
        // https://github.com/kripken/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process['stdin']['setEncoding']('utf8');
        // }
    },
    o557: function () {
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
    o558: function (o559, o560) {
        o554.o555[o559] = {
            input: [],
            o562: [],
            o560: o560
        };
        o563.o564(o559, o554.o565);
    },
    o565: {
        o54: function (o566) {
            var o567 = o554.o555[o566.o568.o569];
            if (!o567) {
                throw new o563.o570(o425.o445);
            }
            o566.o567 = o567;
            o566.o571 = false;
        },
        o572: function (o566) {
            // flush any pending line data
            if (o566.o567.o562.length) {
                o566.o567.o560.o573(o566.o567, 10);
            }
        },
        o35: function (o566, buffer, o134, length, o574 /* ignored */ ) {
            if (!o566.o567 || !o566.o567.o560.o575) {
                throw new o563.o570(o425.o431);
            }
            var o576 = 0;
            for (var o106 = 0; o106 < length; o106++) {
                var o577;
                try {
                    o577 = o566.o567.o560.o575(o566.o567);
                } catch (o232) {
                    throw new o563.o570(o425.o430);
                }
                if (o577 === undefined && o576 === 0) {
                    throw new o563.o570(o425.o436);
                }
                if (o577 === null || o577 === undefined) break;
                o576++;
                buffer[o134 + o106] = o577;
            }
            if (o576) {
                o566.o568.o578 = Date.o5();
            }
            return o576;
        },
        write: function (o566, buffer, o134, length, o574) {
            if (!o566.o567 || !o566.o567.o560.o573) {
                throw new o563.o570(o425.o431);
            }
            for (var o106 = 0; o106 < length; o106++) {
                try {
                    o566.o567.o560.o573(o566.o567, buffer[o134 + o106]);
                } catch (o232) {
                    throw new o563.o570(o425.o430);
                }
            }
            if (length) {
                o566.o568.o578 = Date.o5();
            }
            return o106;
        }
    },
    o579: {
        o575: function (o567) {
            if (!o567.input.length) {
                var o577 = null;
                if (o22) {
                    o577 = o23['stdin']['read']();
                    if (!o577) {
                        if (o23['stdin']['_readableState'] && o23['stdin']['_readableState']['ended']) {
                            return null; // EOF
                        }
                        return undefined; // no data available
                    }
                } else if (typeof o26 != 'undefined' &&
                    typeof o26.o580 == 'function') {
                    // Browser.
                    o577 = o26.o580('Input: '); // returns null on cancel
                    if (o577 !== null) {
                        o577 += '\n';
                    }
                } else if (typeof o581 == 'function') {
                    // Command line.
                    o577 = o581();
                    if (o577 !== null) {
                        o577 += '\n';
                    }
                }
                if (!o577) {
                    return null;
                }
                o567.input = o237(o577, true);
            }
            return o567.input.shift();
        },
        o573: function (o567, o582) {
            if (o582 === null || o582 === 10) {
                Module['print'](o567.o562.join(''));
                o567.o562 = [];
            } else {
                o567.o562.push(o554.o277.o169(o582));
            }
        }
    },
    o583: {
        o573: function (o567, o582) {
            if (o582 === null || o582 === 10) {
                Module['printErr'](o567.o562.join(''));
                o567.o562 = [];
            } else {
                o567.o562.push(o554.o277.o169(o582));
            }
        }
    }
};

var o584 = {
    o585: null,
    o586: 1,
    o587: 2,
    o588: 3,
    o589: function (o589) {
        return o584.o590(null, '/', 16384 | 511 /* 0777 */ , 0);
    },
    o590: function (o591, name, o592, o559) {
        if (o563.o593(o592) || o563.o594(o592)) {
            // no supported
            throw new o563.o570(o425.o426);
        }
        if (!o584.o585) {
            o584.o585 = {
                o595: {
                    o568: {
                        o596: o584.o597.o596,
                        o598: o584.o597.o598,
                        o599: o584.o597.o599,
                        o600: o584.o597.o600,
                        o601: o584.o597.o601,
                        o602: o584.o597.o602,
                        o603: o584.o597.o603,
                        o604: o584.o597.o604,
                        o605: o584.o597.o605
                    },
                    o566: {
                        o606: o584.o565.o606
                    }
                },
                o607: {
                    o568: {
                        o596: o584.o597.o596,
                        o598: o584.o597.o598
                    },
                    o566: {
                        o606: o584.o565.o606,
                        o35: o584.o565.o35,
                        write: o584.o565.write,
                        o261: o584.o565.o261,
                        o608: o584.o565.o608
                    }
                },
                link: {
                    o568: {
                        o596: o584.o597.o596,
                        o598: o584.o597.o598,
                        o610: o584.o597.o610
                    },
                    o566: {}
                },
                o611: {
                    o568: {
                        o596: o584.o597.o596,
                        o598: o584.o597.o598
                    },
                    o566: o563.o612
                },
            };
        }
        var o568 = o563.o590(o591, name, o592, o559);
        if (o563.o613(o568.o592)) {
            o568.o597 = o584.o585.o595.o568;
            o568.o565 = o584.o585.o595.o566;
            o568.o614 = {};
        } else if (o563.o615(o568.o592)) {
            o568.o597 = o584.o585.o607.o568;
            o568.o565 = o584.o585.o607.o566;
            o568.o614 = [];
            o568.o616 = o584.o587;
        } else if (o563.o617(o568.o592)) {
            o568.o597 = o584.o585.link.o568;
            o568.o565 = o584.o585.link.o566;
        } else if (o563.o618(o568.o592)) {
            o568.o597 = o584.o585.o611.o568;
            o568.o565 = o584.o585.o611.o566;
        }
        o568.o578 = Date.o5();
        // add the new node to the parent
        if (o591) {
            o591.o614[name] = o568;
        }
        return o568;
    },
    o619: function (o568) {
        if (o568.o616 !== o584.o587) {
            var o614 = o568.o614;
            o568.o614 = Array.prototype.slice.call(o614);
            o568.o616 = o584.o587;
        }
    },
    o597: {
        o596: function (o568) {
            var o620 = {};
            // device numbers reuse inode numbers.
            o620.o559 = o563.o618(o568.o592) ? o568.o406 : 1;
            o620.o621 = o568.o406;
            o620.o592 = o568.o592;
            o620.o622 = 1;
            o620.o623 = 0;
            o620.o624 = 0;
            o620.o569 = o568.o569;
            if (o563.o613(o568.o592)) {
                o620.o109 = 4096;
            } else if (o563.o615(o568.o592)) {
                o620.o109 = o568.o614.length;
            } else if (o563.o617(o568.o592)) {
                o620.o109 = o568.link.length;
            } else {
                o620.o109 = 0;
            }
            o620.o625 = new Date(o568.o578);
            o620.o626 = new Date(o568.o578);
            o620.o627 = new Date(o568.o578);
            // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
            //       but this is not required by the standard.
            o620.o628 = 4096;
            o620.o629 = Math.ceil(o620.o109 / o620.o628);
            return o620;
        },
        o598: function (o568, o620) {
            if (o620.o592 !== undefined) {
                o568.o592 = o620.o592;
            }
            if (o620.o578 !== undefined) {
                o568.o578 = o620.o578;
            }
            if (o620.o109 !== undefined) {
                o584.o619(o568);
                var o614 = o568.o614;
                if (o620.o109 < o614.length) o614.length = o620.o109;
                else
                    while (o620.o109 > o614.length) o614.push(0);
            }
        },
        o599: function (o591, name) {
            throw o563.o630[o425.o427];
        },
        o600: function (o591, name, o592, o559) {
            return o584.o590(o591, name, o592, o559);
        },
        o601: function (o631, o632, o633) {
            // if we're overwriting a directory at new_name, make sure it's empty.
            if (o563.o613(o631.o592)) {
                var o634;
                try {
                    o634 = o563.o635(o632, o633);
                } catch (o232) {}
                if (o634) {
                    for (var o106 in o634.o614) {
                        throw new o563.o570(o425.o505);
                    }
                }
            }
            // do the internal rewiring
            delete o631.o591.o614[o631.name];
            o631.name = o633;
            o632.o614[o633] = o631;
            o631.o591 = o632;
        },
        o602: function (o591, name) {
            delete o591.o614[name];
        },
        o603: function (o591, name) {
            var o568 = o563.o635(o591, name);
            for (var o106 in o568.o614) {
                throw new o563.o570(o425.o505);
            }
            delete o591.o614[name];
        },
        o604: function (o568) {
            var entries = ['.', '..']
            for (var key in o568.o614) {
                if (!o568.o614.hasOwnProperty(key)) {
                    continue;
                }
                entries.push(key);
            }
            return entries;
        },
        o605: function (o591, o637, o638) {
            var o568 = o584.o590(o591, o637, 511 /* 0777 */ | 40960, 0);
            o568.link = o638;
            return o568;
        },
        o610: function (o568) {
            if (!o563.o617(o568.o592)) {
                throw new o563.o570(o425.o448);
            }
            return o568.link;
        }
    },
    o565: {
        o35: function (o566, buffer, o134, length, o639) {
            var o614 = o566.o568.o614;
            if (o639 >= o614.length)
                return 0;
            var o109 = Math.o111(o614.length - o639, length);
            o95(o109 >= 0);
            if (o109 > 8 && o614.subarray) { // non-trivial, and typed array
                buffer.set(o614.subarray(o639, o639 + o109), o134);
            } else {
                for (var o106 = 0; o106 < o109; o106++) {
                    buffer[o134 + o106] = o614[o639 + o106];
                }
            }
            return o109;
        },
        write: function (o566, buffer, o134, length, o639, o640) {
            var o568 = o566.o568;
            o568.o578 = Date.o5();
            var o614 = o568.o614;
            if (length && o614.length === 0 && o639 === 0 && buffer.subarray) {
                // just replace it with the new data
                if (o640 && o134 === 0) {
                    o568.o614 = buffer; // this could be a subarray of Emscripten HEAP, or allocated from some other source.
                    o568.o616 = (buffer.buffer === o246.buffer) ? o584.o586 : o584.o588;
                } else {
                    o568.o614 = new Uint8Array(buffer.subarray(o134, o134 + length));
                    o568.o616 = o584.o588;
                }
                return length;
            }
            o584.o619(o568);
            var o614 = o568.o614;
            while (o614.length < o639) o614.push(0);
            for (var o106 = 0; o106 < length; o106++) {
                o614[o639 + o106] = buffer[o134 + o106];
            }
            return length;
        },
        o606: function (o566, o134, o641) {
            var o639 = o134;
            if (o641 === 1) { // SEEK_CUR.
                o639 += o566.o639;
            } else if (o641 === 2) { // SEEK_END.
                if (o563.o615(o566.o568.o592)) {
                    o639 += o566.o568.o614.length;
                }
            }
            if (o639 < 0) {
                throw new o563.o570(o425.o448);
            }
            o566.o642 = [];
            o566.o639 = o639;
            return o639;
        },
        o261: function (o566, o134, length) {
            o584.o619(o566.o568);
            var o614 = o566.o568.o614;
            var o303 = o134 + length;
            while (o303 > o614.length) o614.push(0);
        },
        o608: function (o566, buffer, o134, length, o639, o643, flags) {
            if (!o563.o615(o566.o568.o592)) {
                throw new o563.o570(o425.o445);
            }
            var o142;
            var o645;
            var o614 = o566.o568.o614;
            // Only make a new copy when MAP_PRIVATE is specified.
            if (!(flags & 2) &&
                (o614.buffer === buffer || o614.buffer === buffer.buffer)) {
                // We can't emulate MAP_SHARED when the file is not backed by the buffer
                // we're mapping to (e.g. the HEAP buffer).
                o645 = false;
                o142 = o614.byteOffset;
            } else {
                // Try to avoid unnecessary slices.
                if (o639 > 0 || o639 + length < o614.length) {
                    if (o614.subarray) {
                        o614 = o614.subarray(o639, o639 + length);
                    } else {
                        o614 = Array.prototype.slice.call(o614, o639, o639 + length);
                    }
                }
                o645 = true;
                o142 = o266(length);
                if (!o142) {
                    throw new o563.o570(o425.o438);
                }
                buffer.set(o614, o142);
            }
            return {
                o142: o142,
                o645: o645
            };
        }
    }
};

var o647 = {
    o648: {},
    o649: function () {
        return o26.o649 || o26.o650 || o26.o651 || o26.o652;
    },
    o653: 21,
    o654: "FILE_DATA",
    o589: function (o589) {
        // reuse all of the core MEMFS functionality
        return o584.o589.apply(null, arguments);
    },
    o655: function (o589, o656, o340) {
        o647.o657(o589, function (o658, o659) {
            if (o658) return o340(o658);

            o647.o660(o589, function (o658, o661) {
                if (o658) return o340(o658);

                var o415 = o656 ? o661 : o659;
                var o662 = o656 ? o659 : o661;

                o647.o663(o415, o662, o340);
            });
        });
    },
    o664: function (name, o340) {
        // check the cache first
        var o665 = o647.o648[name];
        if (o665) {
            return o340(null, o665);
        }

        var o666;
        try {
            o666 = o647.o649().o54(name, o647.o653);
        } catch (o232) {
            return o340(o232);
        }
        o666.o667 = function (o232) {
            var o665 = o232.target.o577;
            var o668 = o232.target.o668;

            var o669;

            if (o665.o670.o671(o647.o654)) {
                o669 = o668.o672(o647.o654);
            } else {
                o669 = o665.o673(o647.o654);
            }

            o669.o674('timestamp', 'timestamp', {
                o675: false
            });
        };
        o666.o676 = function () {
            o665 = o666.o577;

            // add to the cache
            o647.o648[name] = o665;
            o340(null, o665);
        };
        o666.o677 = function () {
            o340(this.o678);
        };
    },
    o657: function (o589, o340) {
        var entries = {};

        function o679(o680) {
            return o680 !== '.' && o680 !== '..';
        };

        function o681(o682) {
            return function (o680) {
                return o683.o684(o682, o680);
            }
        };

        var o685 = o563.o604(o589.o686).filter(o679).map(o681(o589.o686));

        while (o685.length) {
            var o39 = o685.pop();
            var o688;

            try {
                o688 = o563.o688(o39);
            } catch (o232) {
                return o340(o232);
            }

            if (o563.o613(o688.o592)) {
                o685.push.apply(o685, o563.o604(o39).filter(o679).map(o681(o39)));
            }

            entries[o39] = {
                o578: o688.o626
            };
        }

        return o340(null, {
            type: 'local',
            entries: entries
        });
    },
    o660: function (o589, o340) {
        var entries = {};

        o647.o664(o589.o686, function (o658, o665) {
            if (o658) return o340(o658);

            var o668 = o665.o668([o647.o654], 'readonly');
            o668.o677 = function () {
                o340(this.o678);
            };

            var o689 = o668.o672(o647.o654);
            var index = o689.index('timestamp');

            index.o690().o676 = function (o691) {
                var o692 = o691.target.o577;

                if (!o692) {
                    return o340(null, {
                        type: 'remote',
                        o665: o665,
                        entries: entries
                    });
                }

                entries[o692.o693] = {
                    o578: o692.key
                };

                o692.o694();
            };
        });
    },
    o695: function (o39, o340) {
        var o688, o568;

        try {
            var o599 = o563.o696(o39);
            o568 = o599.o568;
            o688 = o563.o688(o39);
        } catch (o232) {
            return o340(o232);
        }

        if (o563.o613(o688.o592)) {
            return o340(null, {
                o578: o688.o626,
                o592: o688.o592
            });
        } else if (o563.o615(o688.o592)) {
            return o340(null, {
                o578: o688.o626,
                o592: o688.o592,
                o614: o568.o614
            });
        } else {
            return o340(new Error('node type not supported'));
        }
    },
    o697: function (o39, o698, o340) {
        try {
            if (o563.o613(o698.o592)) {
                o563.o699(o39, o698.o592);
            } else if (o563.o615(o698.o592)) {
                o563.o700(o39, o698.o614, {
                    o701: 'binary',
                    o640: true
                });
            } else {
                return o340(new Error('node type not supported'));
            }

            o563.o702(o39, o698.o578, o698.o578);
        } catch (o232) {
            return o340(o232);
        }

        o340(null);
    },
    o703: function (o39, o340) {
        try {
            var o599 = o563.o696(o39);
            var o688 = o563.o688(o39);

            if (o563.o613(o688.o592)) {
                o563.o603(o39);
            } else if (o563.o615(o688.o592)) {
                o563.o602(o39);
            }
        } catch (o232) {
            return o340(o232);
        }

        o340(null);
    },
    o704: function (o689, o39, o340) {
        var o666 = o689.get(o39);
        o666.o676 = function (o691) {
            o340(null, o691.target.o577);
        };
        o666.o677 = function () {
            o340(this.o678);
        };
    },
    o706: function (o689, o39, o698, o340) {
        var o666 = o689.o707(o698, o39);
        o666.o676 = function () {
            o340(null);
        };
        o666.o677 = function () {
            o340(this.o678);
        };
    },
    o708: function (o689, o39, o340) {
        var o666 = o689.o709(o39);
        o666.o676 = function () {
            o340(null);
        };
        o666.o677 = function () {
            o340(this.o678);
        };
    },
    o663: function (o415, o662, o340) {
        var o710 = 0;

        var create = [];
        Object.keys(o415.entries).forEach(function (key) {
            var o232 = o415.entries[key];
            var o714 = o662.entries[key];
            if (!o714 || o232.o578 > o714.o578) {
                create.push(key);
                o710++;
            }
        });

        var o715 = [];
        Object.keys(o662.entries).forEach(function (key) {
            var o232 = o662.entries[key];
            var o714 = o415.entries[key];
            if (!o714) {
                o715.push(key);
                o710++;
            }
        });

        if (!o710) {
            return o340(null);
        }

        var o716 = false;
        var o717 = 0;
        var o665 = o415.type === 'remote' ? o415.o665 : o662.o665;
        var o668 = o665.o668([o647.o654], 'readwrite');
        var o689 = o668.o672(o647.o654);

        function done(o658) {
            if (o658) {
                if (!done.o716) {
                    done.o716 = true;
                    return o340(o658);
                }
                return;
            }
            if (++o717 >= o710) {
                return o340(null);
            }
        };

        o668.o677 = function () {
            done(this.o678);
        };

        // sort paths in ascending order so directory entries are created
        // before the files inside them
        create.sort().forEach(function (o39) {
            if (o662.type === 'local') {
                o647.o704(o689, o39, function (o658, o698) {
                    if (o658) return done(o658);
                    o647.o697(o39, o698, done);
                });
            } else {
                o647.o695(o39, function (o658, o698) {
                    if (o658) return done(o658);
                    o647.o706(o689, o39, o698, done);
                });
            }
        });

        // sort paths in descending order so files are deleted before their
        // parent directories
        o715.sort().reverse().forEach(function (o39) {
            if (o662.type === 'local') {
                o647.o703(o39, done);
            } else {
                o647.o708(o689, o39, done);
            }
        });
    }
};

var o721 = {
    o722: false,
    o723: function () {
        o721.o722 = !!o23.o724.match(/^win/);
    },
    o589: function (o589) {
        o95(o22);
        return o721.o590(null, '/', o721.o726(o589.o727.o682), 0);
    },
    o590: function (o591, name, o592, o559) {
        if (!o563.o613(o592) && !o563.o615(o592) && !o563.o617(o592)) {
            throw new o563.o570(o425.o448);
        }
        var o568 = o563.o590(o591, name, o592);
        o568.o597 = o721.o597;
        o568.o565 = o721.o565;
        return o568;
    },
    o726: function (o39) {
        var o688;
        try {
            o688 = o728.o729(o39);
            if (o721.o722) {
                // On Windows, directories return permission bits 'rw-rw-rw-', even though they have 'rwxrwxrwx', so 
                // propagate write bits to execute bits.
                o688.o592 = o688.o592 | ((o688.o592 & 146) >> 1);
            }
        } catch (o232) {
            if (!o232.o152) throw o232;
            throw new o563.o570(o425[o232.o152]);
        }
        return o688.o592;
    },
    o730: function (o568) {
        var o297 = [];
        while (o568.o591 !== o568) {
            o297.push(o568.name);
            o568 = o568.o591;
        }
        o297.push(o568.o589.o727.o682);
        o297.reverse();
        return o683.join.apply(null, o297);
    },
    o731: {
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
    o732: function (flags) {
        if (flags in o721.o731) {
            return o721.o731[flags];
        } else {
            return flags;
        }
    },
    o597: {
        o596: function (o568) {
            var o39 = o721.o730(o568);
            var o688;
            try {
                o688 = o728.o729(o39);
            } catch (o232) {
                if (!o232.o152) throw o232;
                throw new o563.o570(o425[o232.o152]);
            }
            // node.js v0.10.20 doesn't report blksize and blocks on Windows. Fake them with default blksize of 4096.
            // See http://support.microsoft.com/kb/140365
            if (o721.o722 && !o688.o628) {
                o688.o628 = 4096;
            }
            if (o721.o722 && !o688.o629) {
                o688.o629 = (o688.o109 + o688.o628 - 1) / o688.o628 | 0;
            }
            return {
                o559: o688.o559,
                o621: o688.o621,
                o592: o688.o592,
                o622: o688.o622,
                o623: o688.o623,
                o624: o688.o624,
                o569: o688.o569,
                o109: o688.o109,
                o625: o688.o625,
                o626: o688.o626,
                o627: o688.o627,
                o628: o688.o628,
                o629: o688.o629
            };
        },
        o598: function (o568, o620) {
            var o39 = o721.o730(o568);
            try {
                if (o620.o592 !== undefined) {
                    o728.o733(o39, o620.o592);
                    // update the common node structure mode as well
                    o568.o592 = o620.o592;
                }
                if (o620.o578 !== undefined) {
                    var o734 = new Date(o620.o578);
                    o728.o735(o39, o734, o734);
                }
                if (o620.o109 !== undefined) {
                    o728.o736(o39, o620.o109);
                }
            } catch (o232) {
                if (!o232.o152) throw o232;
                throw new o563.o570(o425[o232.o152]);
            }
        },
        o599: function (o591, name) {
            var o39 = o683.o684(o721.o730(o591), name);
            var o592 = o721.o726(o39);
            return o721.o590(o591, name, o592);
        },
        o600: function (o591, name, o592, o559) {
            var o568 = o721.o590(o591, name, o592, o559);
            // create the backing node for this in the fs root as well
            var o39 = o721.o730(o568);
            try {
                if (o563.o613(o568.o592)) {
                    o728.o737(o39, o568.o592);
                } else {
                    o728.o738(o39, '', {
                        o592: o568.o592
                    });
                }
            } catch (o232) {
                if (!o232.o152) throw o232;
                throw new o563.o570(o425[o232.o152]);
            }
            return o568;
        },
        o601: function (o739, o740, o741) {
            var o742 = o721.o730(o739);
            var o743 = o683.o684(o721.o730(o740), o741);
            try {
                o728.o744(o742, o743);
            } catch (o232) {
                if (!o232.o152) throw o232;
                throw new o563.o570(o425[o232.o152]);
            }
        },
        o602: function (o591, name) {
            var o39 = o683.o684(o721.o730(o591), name);
            try {
                o728.o745(o39);
            } catch (o232) {
                if (!o232.o152) throw o232;
                throw new o563.o570(o425[o232.o152]);
            }
        },
        o603: function (o591, name) {
            var o39 = o683.o684(o721.o730(o591), name);
            try {
                o728.o746(o39);
            } catch (o232) {
                if (!o232.o152) throw o232;
                throw new o563.o570(o425[o232.o152]);
            }
        },
        o604: function (o568) {
            var o39 = o721.o730(o568);
            try {
                return o728.o747(o39);
            } catch (o232) {
                if (!o232.o152) throw o232;
                throw new o563.o570(o425[o232.o152]);
            }
        },
        o605: function (o591, o741, o742) {
            var o743 = o683.o684(o721.o730(o591), o741);
            try {
                o728.o748(o742, o743);
            } catch (o232) {
                if (!o232.o152) throw o232;
                throw new o563.o570(o425[o232.o152]);
            }
        },
        o610: function (o568) {
            var o39 = o721.o730(o568);
            try {
                return o728.o749(o39);
            } catch (o232) {
                if (!o232.o152) throw o232;
                throw new o563.o570(o425[o232.o152]);
            }
        }
    },
    o565: {
        o54: function (o566) {
            var o39 = o721.o730(o566.o568);
            try {
                if (o563.o615(o566.o568.o592)) {
                    o566.o750 = o728.o751(o39, o721.o732(o566.flags));
                }
            } catch (o232) {
                if (!o232.o152) throw o232;
                throw new o563.o570(o425[o232.o152]);
            }
        },
        o572: function (o566) {
            try {
                if (o563.o615(o566.o568.o592) && o566.o750) {
                    o728.o752(o566.o750);
                }
            } catch (o232) {
                if (!o232.o152) throw o232;
                throw new o563.o570(o425[o232.o152]);
            }
        },
        o35: function (o566, buffer, o134, length, o639) {
            // FIXME this is terrible.
            var o753 = new o754(length);
            var o755;
            try {
                o755 = o728.o756(o566.o750, o753, 0, length, o639);
            } catch (o232) {
                throw new o563.o570(o425[o232.o152]);
            }
            if (o755 > 0) {
                for (var o106 = 0; o106 < o755; o106++) {
                    buffer[o134 + o106] = o753[o106];
                }
            }
            return o755;
        },
        write: function (o566, buffer, o134, length, o639) {
            // FIXME this is terrible.
            var o753 = new o754(buffer.subarray(o134, o134 + length));
            var o755;
            try {
                o755 = o728.o757(o566.o750, o753, 0, length, o639);
            } catch (o232) {
                throw new o563.o570(o425[o232.o152]);
            }
            return o755;
        },
        o606: function (o566, o134, o641) {
            var o639 = o134;
            if (o641 === 1) { // SEEK_CUR.
                o639 += o566.o639;
            } else if (o641 === 2) { // SEEK_END.
                if (o563.o615(o566.o568.o592)) {
                    try {
                        var o688 = o728.o758(o566.o750);
                        o639 += o688.o109;
                    } catch (o232) {
                        throw new o563.o570(o425[o232.o152]);
                    }
                }
            }

            if (o639 < 0) {
                throw new o563.o570(o425.o448);
            }

            o566.o639 = o639;
            return o639;
        }
    }
};

var o759 = o261(1, "i32*", o258);

var o760 = o261(1, "i32*", o258);

var o761 = o261(1, "i32*", o258);

function o762(o566) {
    // int fflush(FILE *stream);
    // http://pubs.opengroup.org/onlinepubs/000095399/functions/fflush.html
    // we don't currently perform any user-space buffering of data
}
var o563 = {
    o682: null,
    o763: [],
    o764: [null],
    o765: [],
    o766: 1,
    o767: null,
    o768: "/",
    o769: false,
    o770: true,
    o570: null,
    o630: {},
    o771: function (o232) {
        if (!(o232 instanceof o563.o570)) throw o232 + ' : ' + o315();
        return o424(o232.o772);
    },
    o696: function (o39, o727) {
        o39 = o683.resolve(o563.o774(), o39);
        o727 = o727 || {};

        var o775 = {
            o776: true,
            o777: 0
        };
        for (var key in o775) {
            if (o727[key] === undefined) {
                o727[key] = o775[key];
            }
        }

        if (o727.o777 > 8) { // max recursive lookup of 8
            throw new o563.o570(o425.o507);
        }

        // split the path
        var o297 = o683.o778(o39.split('/').filter(function (o680) {
            return !!o680;
        }), false);

        // start at the root
        var o780 = o563.o682;
        var o781 = '/';

        for (var o106 = 0; o106 < o297.length; o106++) {
            var o782 = (o106 === o297.length - 1);
            if (o782 && o727.o591) {
                // stop resolving
                break;
            }

            o780 = o563.o635(o780, o297[o106]);
            o781 = o683.o684(o781, o297[o106]);

            // jump to the mount's root node if this is a mountpoint
            if (o563.o783(o780)) {
                if (!o782 || (o782 && o727.o776)) {
                    o780 = o780.o784.o682;
                }
            }

            // by default, lookupPath will not follow a symlink if it is the final path component.
            // setting opts.follow = true will override this behavior.
            if (!o782 || o727.o785) {
                var o786 = 0;
                while (o563.o617(o780.o592)) {
                    var link = o563.o610(o781);
                    o781 = o683.resolve(o683.o787(o781), link);

                    var o599 = o563.o696(o781, {
                        o777: o727.o777
                    });
                    o780 = o599.o568;

                    if (o786++ > 40) { // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                        throw new o563.o570(o425.o507);
                    }
                }
            }
        }

        return {
            o39: o781,
            o568: o780
        };
    },
    o788: function (o568) {
        var o39;
        while (true) {
            if (o563.o789(o568)) {
                var o589 = o568.o589.o686;
                if (!o39) return o589;
                return o589[o589.length - 1] !== '/' ? o589 + '/' + o39 : o589 + o39;
            }
            o39 = o39 ? o568.name + '/' + o39 : o568.name;
            o568 = o568.o591;
        }
    },
    o790: function (o791, name) {
        var o792 = 0;


        for (var o106 = 0; o106 < name.length; o106++) {
            o792 = ((o792 << 5) - o792 + name.charCodeAt(o106)) | 0;
        }
        return ((o791 + o792) >>> 0) % o563.o767.length;
    },
    o793: function (o568) {
        var o792 = o563.o790(o568.o591.o406, o568.name);
        o568.o794 = o563.o767[o792];
        o563.o767[o792] = o568;
    },
    o795: function (o568) {
        var o792 = o563.o790(o568.o591.o406, o568.name);
        if (o563.o767[o792] === o568) {
            o563.o767[o792] = o568.o794;
        } else {
            var o780 = o563.o767[o792];
            while (o780) {
                if (o780.o794 === o568) {
                    o780.o794 = o568.o794;
                    break;
                }
                o780 = o780.o794;
            }
        }
    },
    o635: function (o591, name) {
        var o658 = o563.o796(o591);
        if (o658) {
            throw new o563.o570(o658);
        }
        var o792 = o563.o790(o591.o406, name);
        for (var o568 = o563.o767[o792]; o568; o568 = o568.o794) {
            var o797 = o568.name;
            if (o568.o591.o406 === o591.o406 && o797 === name) {
                return o568;
            }
        }
        // if we failed to find it in the cache, call into the VFS
        return o563.o599(o591, name);
    },
    o590: function (o591, name, o592, o569) {
        if (!o563.o798) {
            o563.o798 = function (o591, name, o592, o569) {
                if (!o591) {
                    o591 = this; // root node sets parent to itself
                }
                this.o591 = o591;
                this.o589 = o591.o589;
                this.o784 = null;
                this.o406 = o563.o766++;
                this.name = name;
                this.o592 = o592;
                this.o597 = {};
                this.o565 = {};
                this.o569 = o569;
            };

            o563.o798.prototype = {};

            // compatibility
            var o799 = 292 | 73;
            var o800 = 146;

            // NOTE we must use Object.defineProperties instead of individual calls to
            // Object.defineProperty in order to make closure compiler happy
            Object.defineProperties(o563.o798.prototype, {
                o35: {
                    get: function () {
                        return (this.o592 & o799) === o799;
                    },
                    set: function (o582) {
                        o582 ? this.o592 |= o799 : this.o592 &= ~o799;
                    }
                },
                write: {
                    get: function () {
                        return (this.o592 & o800) === o800;
                    },
                    set: function (o582) {
                        o582 ? this.o592 |= o800 : this.o592 &= ~o800;
                    }
                },
                o802: {
                    get: function () {
                        return o563.o613(this.o592);
                    },
                },
                o803: {
                    get: function () {
                        return o563.o618(this.o592);
                    },
                },
            });
        }

        var o568 = new o563.o798(o591, name, o592, o569);

        o563.o793(o568);

        return o568;
    },
    o804: function (o568) {
        o563.o795(o568);
    },
    o789: function (o568) {
        return o568 === o568.o591;
    },
    o783: function (o568) {
        return !!o568.o784;
    },
    o615: function (o592) {
        return (o592 & 61440) === 32768;
    },
    o613: function (o592) {
        return (o592 & 61440) === 16384;
    },
    o617: function (o592) {
        return (o592 & 61440) === 40960;
    },
    o618: function (o592) {
        return (o592 & 61440) === 8192;
    },
    o593: function (o592) {
        return (o592 & 61440) === 24576;
    },
    o594: function (o592) {
        return (o592 & 61440) === 4096;
    },
    o805: function (o592) {
        return (o592 & 49152) === 49152;
    },
    o806: {
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
    o807: function (o279) {
        var flags = o563.o806[o279];
        if (typeof flags === 'undefined') {
            throw new Error('Unknown file open mode: ' + o279);
        }
        return flags;
    },
    o732: function (o808) {
        var o809 = o808 & 2097155;
        var o810 = ['r', 'w', 'rw'][o809];
        if ((o808 & 512)) {
            o810 += 'w';
        }
        return o810;
    },
    o811: function (o568, o810) {
        if (o563.o770) {
            return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (o810.indexOf('r') !== -1 && !(o568.o592 & 292)) {
            return o425.o439;
        } else if (o810.indexOf('w') !== -1 && !(o568.o592 & 146)) {
            return o425.o439;
        } else if (o810.indexOf('x') !== -1 && !(o568.o592 & 73)) {
            return o425.o439;
        }
        return 0;
    },
    o796: function (o595) {
        return o563.o811(o595, 'x');
    },
    o812: function (o595, name) {
        try {
            var o568 = o563.o635(o595, name);
            return o425.o443;
        } catch (o232) {}
        return o563.o811(o595, 'wx');
    },
    o813: function (o595, name, o814) {
        var o568;
        try {
            o568 = o563.o635(o595, name);
        } catch (o232) {
            return o232.o772;
        }
        var o658 = o563.o811(o595, 'wx');
        if (o658) {
            return o658;
        }
        if (o814) {
            if (!o563.o613(o568.o592)) {
                return o425.o446;
            }
            if (o563.o789(o568) || o563.o788(o568) === o563.o774()) {
                return o425.o442;
            }
        } else {
            if (o563.o613(o568.o592)) {
                return o425.o447;
            }
        }
        return 0;
    },
    o815: function (o568, flags) {
        if (!o568) {
            return o425.o427;
        }
        if (o563.o617(o568.o592)) {
            return o425.o507;
        } else if (o563.o613(o568.o592)) {
            if ((flags & 2097155) !== 0 || // opening for write
                (flags & 512)) {
                return o425.o447;
            }
        }
        return o563.o811(o568, o563.o732(flags));
    },
    o816: 4096,
    o817: function (o818, o819) {
        o818 = o818 || 0;
        o819 = o819 || o563.o816;
        for (var o820 = o818; o820 <= o819; o820++) {
            if (!o563.o765[o820]) {
                return o820;
            }
        }
        throw new o563.o570(o425.o450);
    },
    o821: function (o820) {
        return o563.o765[o820];
    },
    o822: function (o566, o818, o819) {
        if (!o563.o823) {
            o563.o823 = function () {};
            o563.o823.prototype = {};
            // compatibility
            Object.defineProperties(o563.o823.prototype, {
                o824: {
                    get: function () {
                        return this.o568;
                    },
                    set: function (o582) {
                        this.o568 = o582;
                    }
                },
                o825: {
                    get: function () {
                        return (this.flags & 2097155) !== 1;
                    }
                },
                o826: {
                    get: function () {
                        return (this.flags & 2097155) !== 0;
                    }
                },
                o827: {
                    get: function () {
                        return (this.flags & 1024);
                    }
                }
            });
        }
        if (o566.__proto__) {
            // reuse the object
            o566.__proto__ = o563.o823.prototype;
        } else {
            var o829 = new o563.o823();
            for (var o680 in o566) {
                o829[o680] = o566[o680];
            }
            o566 = o829;
        }
        var o820 = o563.o817(o818, o819);
        o566.o820 = o820;
        o563.o765[o820] = o566;
        return o566;
    },
    o830: function (o820) {
        o563.o765[o820] = null;
    },
    o831: function (o142) {
        return o563.o765[o142 - 1];
    },
    o832: function (o566) {
        return o566 ? o566.o820 + 1 : 0;
    },
    o612: {
        o54: function (o566) {
            var o833 = o563.o834(o566.o568.o569);
            // override node's stream ops with the device's
            o566.o565 = o833.o565;
            // forward the open call
            if (o566.o565.o54) {
                o566.o565.o54(o566);
            }
        },
        o606: function () {
            throw new o563.o570(o425.o455);
        }
    },
    o835: function (o559) {
        return ((o559) >> 8);
    },
    o836: function (o559) {
        return ((o559) & 0xff);
    },
    o837: function (o838, o839) {
        return ((o838) << 8 | (o839));
    },
    o564: function (o559, o560) {
        o563.o764[o559] = {
            o565: o560
        };
    },
    o834: function (o559) {
        return o563.o764[o559];
    },
    o840: function (o589) {
        var o763 = [];
        var o685 = [o589];

        while (o685.length) {
            var o841 = o685.pop();

            o763.push(o841);

            o685.push.apply(o685, o841.o763);
        }

        return o763;
    },
    o655: function (o656, o340) {
        if (typeof (o656) === 'function') {
            o340 = o656;
            o656 = false;
        }

        var o763 = o563.o840(o563.o682.o589);
        var o717 = 0;

        function done(o658) {
            if (o658) {
                if (!done.o716) {
                    done.o716 = true;
                    return o340(o658);
                }
                return;
            }
            if (++o717 >= o763.length) {
                o340(null);
            }
        };

        // sync all mounts
        o763.forEach(function (o589) {
            if (!o589.type.o655) {
                return done(null);
            }
            o589.type.o655(o589, o656, done);
        });
    },
    o589: function (type, o727, o686) {
        var o682 = o686 === '/';
        var o842 = !o686;
        var o568;

        if (o682 && o563.o682) {
            throw new o563.o570(o425.o442);
        } else if (!o682 && !o842) {
            var o599 = o563.o696(o686, {
                o776: false
            });

            o686 = o599.o39; // use the absolute path
            o568 = o599.o568;

            if (o563.o783(o568)) {
                throw new o563.o570(o425.o442);
            }

            if (!o563.o613(o568.o592)) {
                throw new o563.o570(o425.o446);
            }
        }

        var o589 = {
            type: type,
            o727: o727,
            o686: o686,
            o763: []
        };

        // create a root node for the fs
        var o843 = type.o589(o589);
        o843.o589 = o589;
        o589.o682 = o843;

        if (o682) {
            o563.o682 = o843;
        } else if (o568) {
            // set as a mountpoint
            o568.o784 = o589;

            // add the new mount to the current mount's children
            if (o568.o589) {
                o568.o589.o763.push(o589);
            }
        }

        return o843;
    },
    o844: function (o686) {
        var o599 = o563.o696(o686, {
            o776: false
        });

        if (!o563.o783(o599.o568)) {
            throw new o563.o570(o425.o448);
        }

        // destroy the nodes for this mount, and all its child mounts
        var o568 = o599.o568;
        var o589 = o568.o784;
        var o763 = o563.o840(o589);

        Object.keys(o563.o767).forEach(function (o792) {
            var o780 = o563.o767[o792];

            while (o780) {
                var next = o780.o794;

                if (o763.indexOf(o780.o589) !== -1) {
                    o563.o804(o780);
                }

                o780 = next;
            }
        });

        // no longer a mountpoint
        o568.o784 = null;

        // remove this mount from the child mounts
        var o845 = o568.o589.o763.indexOf(o589);
        o95(o845 !== -1);
        o568.o589.o763.splice(o845, 1);
    },
    o599: function (o591, name) {
        return o591.o597.o599(o591, name);
    },
    o600: function (o39, o592, o559) {
        var o599 = o563.o696(o39, {
            o591: true
        });
        var o591 = o599.o568;
        var name = o683.o846(o39);
        var o658 = o563.o812(o591, name);
        if (o658) {
            throw new o563.o570(o658);
        }
        if (!o591.o597.o600) {
            throw new o563.o570(o425.o426);
        }
        return o591.o597.o600(o591, name, o592, o559);
    },
    create: function (o39, o592) {
        o592 = o592 !== undefined ? o592 : 438 /* 0666 */ ;
        o592 &= 4095;
        o592 |= 32768;
        return o563.o600(o39, o592, 0);
    },
    o699: function (o39, o592) {
        o592 = o592 !== undefined ? o592 : 511 /* 0777 */ ;
        o592 &= 511 | 512;
        o592 |= 16384;
        return o563.o600(o39, o592, 0);
    },
    o847: function (o39, o592, o559) {
        if (typeof (o559) === 'undefined') {
            o559 = o592;
            o592 = 438 /* 0666 */ ;
        }
        o592 |= 8192;
        return o563.o600(o39, o592, o559);
    },
    o605: function (o638, o848) {
        var o599 = o563.o696(o848, {
            o591: true
        });
        var o591 = o599.o568;
        var o637 = o683.o846(o848);
        var o658 = o563.o812(o591, o637);
        if (o658) {
            throw new o563.o570(o658);
        }
        if (!o591.o597.o605) {
            throw new o563.o570(o425.o426);
        }
        return o591.o597.o605(o591, o637, o638);
    },
    o601: function (o849, o850) {
        var o851 = o683.o787(o849);
        var o852 = o683.o787(o850);
        var o853 = o683.o846(o849);
        var o633 = o683.o846(o850);
        // parents must exist
        var o599, o854, o632;
        try {
            o599 = o563.o696(o849, {
                o591: true
            });
            o854 = o599.o568;
            o599 = o563.o696(o850, {
                o591: true
            });
            o632 = o599.o568;
        } catch (o232) {
            throw new o563.o570(o425.o442);
        }
        // need to be part of the same mount
        if (o854.o589 !== o632.o589) {
            throw new o563.o570(o425.o444);
        }
        // source must exist
        var o631 = o563.o635(o854, o853);
        // old path should not be an ancestor of the new path
        var o855 = o683.o855(o849, o852);
        if (o855.charAt(0) !== '.') {
            throw new o563.o570(o425.o448);
        }
        // new path should not be an ancestor of the old path
        o855 = o683.o855(o850, o851);
        if (o855.charAt(0) !== '.') {
            throw new o563.o570(o425.o505);
        }
        // see if the new path already exists
        var o634;
        try {
            o634 = o563.o635(o632, o633);
        } catch (o232) {
            // not fatal
        }
        // early out if nothing needs to change
        if (o631 === o634) {
            return;
        }
        // we'll need to delete the old entry
        var o814 = o563.o613(o631.o592);
        var o658 = o563.o813(o854, o853, o814);
        if (o658) {
            throw new o563.o570(o658);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        o658 = o634 ?
            o563.o813(o632, o633, o814) :
            o563.o812(o632, o633);
        if (o658) {
            throw new o563.o570(o658);
        }
        if (!o854.o597.o601) {
            throw new o563.o570(o425.o426);
        }
        if (o563.o783(o631) || (o634 && o563.o783(o634))) {
            throw new o563.o570(o425.o442);
        }
        // if we are going to change the parent, check write permissions
        if (o632 !== o854) {
            o658 = o563.o811(o854, 'w');
            if (o658) {
                throw new o563.o570(o658);
            }
        }
        // remove the node from the lookup hash
        o563.o795(o631);
        // do the underlying fs rename
        try {
            o854.o597.o601(o631, o632, o633);
        } catch (o232) {
            throw o232;
        } finally {
            // add the node back to the hash (in case node_ops.rename
            // changed its name)
            o563.o793(o631);
        }
    },
    o603: function (o39) {
        var o599 = o563.o696(o39, {
            o591: true
        });
        var o591 = o599.o568;
        var name = o683.o846(o39);
        var o568 = o563.o635(o591, name);
        var o658 = o563.o813(o591, name, true);
        if (o658) {
            throw new o563.o570(o658);
        }
        if (!o591.o597.o603) {
            throw new o563.o570(o425.o426);
        }
        if (o563.o783(o568)) {
            throw new o563.o570(o425.o442);
        }
        o591.o597.o603(o591, name);
        o563.o804(o568);
    },
    o604: function (o39) {
        var o599 = o563.o696(o39, {
            o785: true
        });
        var o568 = o599.o568;
        if (!o568.o597.o604) {
            throw new o563.o570(o425.o446);
        }
        return o568.o597.o604(o568);
    },
    o602: function (o39) {
        var o599 = o563.o696(o39, {
            o591: true
        });
        var o591 = o599.o568;
        var name = o683.o846(o39);
        var o568 = o563.o635(o591, name);
        var o658 = o563.o813(o591, name, false);
        if (o658) {
            // POSIX says unlink should set EPERM, not EISDIR
            if (o658 === o425.o447) o658 = o425.o426;
            throw new o563.o570(o658);
        }
        if (!o591.o597.o602) {
            throw new o563.o570(o425.o426);
        }
        if (o563.o783(o568)) {
            throw new o563.o570(o425.o442);
        }
        o591.o597.o602(o591, name);
        o563.o804(o568);
    },
    o610: function (o39) {
        var o599 = o563.o696(o39);
        var link = o599.o568;
        if (!link.o597.o610) {
            throw new o563.o570(o425.o448);
        }
        return link.o597.o610(link);
    },
    o688: function (o39, o856) {
        var o599 = o563.o696(o39, {
            o785: !o856
        });
        var o568 = o599.o568;
        if (!o568.o597.o596) {
            throw new o563.o570(o425.o426);
        }
        return o568.o597.o596(o568);
    },
    o857: function (o39) {
        return o563.o688(o39, true);
    },
    o858: function (o39, o592, o856) {
        var o568;
        if (typeof o39 === 'string') {
            var o599 = o563.o696(o39, {
                o785: !o856
            });
            o568 = o599.o568;
        } else {
            o568 = o39;
        }
        if (!o568.o597.o598) {
            throw new o563.o570(o425.o426);
        }
        o568.o597.o598(o568, {
            o592: (o592 & 4095) | (o568.o592 & ~4095),
            o578: Date.o5()
        });
    },
    o859: function (o39, o592) {
        o563.o858(o39, o592, true);
    },
    o860: function (o820, o592) {
        var o566 = o563.o821(o820);
        if (!o566) {
            throw new o563.o570(o425.o434);
        }
        o563.o858(o566.o568, o592);
    },
    o861: function (o39, o623, o624, o856) {
        var o568;
        if (typeof o39 === 'string') {
            var o599 = o563.o696(o39, {
                o785: !o856
            });
            o568 = o599.o568;
        } else {
            o568 = o39;
        }
        if (!o568.o597.o598) {
            throw new o563.o570(o425.o426);
        }
        o568.o597.o598(o568, {
            o578: Date.o5()
            // we ignore the uid / gid for now
        });
    },
    o862: function (o39, o623, o624) {
        o563.o861(o39, o623, o624, true);
    },
    o863: function (o820, o623, o624) {
        var o566 = o563.o821(o820);
        if (!o566) {
            throw new o563.o570(o425.o434);
        }
        o563.o861(o566.o568, o623, o624);
    },
    o864: function (o39, o865) {
        if (o865 < 0) {
            throw new o563.o570(o425.o448);
        }
        var o568;
        if (typeof o39 === 'string') {
            var o599 = o563.o696(o39, {
                o785: true
            });
            o568 = o599.o568;
        } else {
            o568 = o39;
        }
        if (!o568.o597.o598) {
            throw new o563.o570(o425.o426);
        }
        if (o563.o613(o568.o592)) {
            throw new o563.o570(o425.o447);
        }
        if (!o563.o615(o568.o592)) {
            throw new o563.o570(o425.o448);
        }
        var o658 = o563.o811(o568, 'w');
        if (o658) {
            throw new o563.o570(o658);
        }
        o568.o597.o598(o568, {
            o109: o865,
            o578: Date.o5()
        });
    },
    o866: function (o820, o865) {
        var o566 = o563.o821(o820);
        if (!o566) {
            throw new o563.o570(o425.o434);
        }
        if ((o566.flags & 2097155) === 0) {
            throw new o563.o570(o425.o448);
        }
        o563.o864(o566.o568, o865);
    },
    o702: function (o39, o625, o626) {
        var o599 = o563.o696(o39, {
            o785: true
        });
        var o568 = o599.o568;
        o568.o597.o598(o568, {
            o578: Math.o97(o625, o626)
        });
    },
    o54: function (o39, flags, o592, o818, o819) {
        flags = typeof flags === 'string' ? o563.o807(flags) : flags;
        o592 = typeof o592 === 'undefined' ? 438 /* 0666 */ : o592;
        if ((flags & 64)) {
            o592 = (o592 & 4095) | 32768;
        } else {
            o592 = 0;
        }
        var o568;
        if (typeof o39 === 'object') {
            o568 = o39;
        } else {
            o39 = o683.normalize(o39);
            try {
                var o599 = o563.o696(o39, {
                    o785: !(flags & 131072)
                });
                o568 = o599.o568;
            } catch (o232) {
                // ignore
            }
        }
        // perhaps we need to create the node
        if ((flags & 64)) {
            if (o568) {
                // if O_CREAT and O_EXCL are set, error out if the node already exists
                if ((flags & 128)) {
                    throw new o563.o570(o425.o443);
                }
            } else {
                // node doesn't exist, try to create it
                o568 = o563.o600(o39, o592, 0);
            }
        }
        if (!o568) {
            throw new o563.o570(o425.o427);
        }
        // can't truncate a device
        if (o563.o618(o568.o592)) {
            flags &= ~512;
        }
        // check permissions
        var o658 = o563.o815(o568, flags);
        if (o658) {
            throw new o563.o570(o658);
        }
        // do truncation if necessary
        if ((flags & 512)) {
            o563.o864(o568, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512);

        // register the stream with the filesystem
        var o566 = o563.o822({
            o568: o568,
            o39: o563.o788(o568), // we want the absolute path to the node
            flags: flags,
            o571: true,
            o639: 0,
            o565: o568.o565,
            // used by the file family libc calls (fopen, fwrite, ferror, etc.)
            o642: [],
            o678: false
        }, o818, o819);
        // call the new stream's open function
        if (o566.o565.o54) {
            o566.o565.o54(o566);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
            if (!o563.o868) o563.o868 = {};
            if (!(o39 in o563.o868)) {
                o563.o868[o39] = 1;
                Module['printErr']('read file: ' + o39);
            }
        }
        return o566;
    },
    o572: function (o566) {
        try {
            if (o566.o565.o572) {
                o566.o565.o572(o566);
            }
        } catch (o232) {
            throw o232;
        } finally {
            o563.o830(o566.o820);
        }
    },
    o606: function (o566, o134, o641) {
        if (!o566.o571 || !o566.o565.o606) {
            throw new o563.o570(o425.o455);
        }
        return o566.o565.o606(o566, o134, o641);
    },
    o35: function (o566, buffer, o134, length, o639) {
        if (length < 0 || o639 < 0) {
            throw new o563.o570(o425.o448);
        }
        if ((o566.flags & 2097155) === 1) {
            throw new o563.o570(o425.o434);
        }
        if (o563.o613(o566.o568.o592)) {
            throw new o563.o570(o425.o447);
        }
        if (!o566.o565.o35) {
            throw new o563.o570(o425.o448);
        }
        var o869 = true;
        if (typeof o639 === 'undefined') {
            o639 = o566.o639;
            o869 = false;
        } else if (!o566.o571) {
            throw new o563.o570(o425.o455);
        }
        var o576 = o566.o565.o35(o566, buffer, o134, length, o639);
        if (!o869) o566.o639 += o576;
        return o576;
    },
    write: function (o566, buffer, o134, length, o639, o640) {
        if (length < 0 || o639 < 0) {
            throw new o563.o570(o425.o448);
        }
        if ((o566.flags & 2097155) === 0) {
            throw new o563.o570(o425.o434);
        }
        if (o563.o613(o566.o568.o592)) {
            throw new o563.o570(o425.o447);
        }
        if (!o566.o565.write) {
            throw new o563.o570(o425.o448);
        }
        var o869 = true;
        if (typeof o639 === 'undefined') {
            o639 = o566.o639;
            o869 = false;
        } else if (!o566.o571) {
            throw new o563.o570(o425.o455);
        }
        if (o566.flags & 1024) {
            // seek to the end before writing in append mode
            o563.o606(o566, 0, 2);
        }
        var o870 = o566.o565.write(o566, buffer, o134, length, o639, o640);
        if (!o869) o566.o639 += o870;
        return o870;
    },
    o261: function (o566, o134, length) {
        if (o134 < 0 || length <= 0) {
            throw new o563.o570(o425.o448);
        }
        if ((o566.flags & 2097155) === 0) {
            throw new o563.o570(o425.o434);
        }
        if (!o563.o615(o566.o568.o592) && !o563.o613(o568.o592)) {
            throw new o563.o570(o425.o445);
        }
        if (!o566.o565.o261) {
            throw new o563.o570(o425.o508);
        }
        o566.o565.o261(o566, o134, length);
    },
    o608: function (o566, buffer, o134, length, o639, o643, flags) {
        // TODO if PROT is PROT_WRITE, make sure we have write access
        if ((o566.flags & 2097155) === 1) {
            throw new o563.o570(o425.o439);
        }
        if (!o566.o565.o608) {
            throw new o563.o570(o425.o445);
        }
        return o566.o565.o608(o566, buffer, o134, length, o639, o643, flags);
    },
    o871: function (o566, o872, o241) {
        if (!o566.o565.o871) {
            throw new o563.o570(o425.o451);
        }
        return o566.o565.o871(o566, o872, o241);
    },
    o873: function (o39, o727) {
        o727 = o727 || {};
        o727.flags = o727.flags || 'r';
        o727.o701 = o727.o701 || 'binary';
        if (o727.o701 !== 'utf8' && o727.o701 !== 'binary') {
            throw new Error('Invalid encoding type "' + o727.o701 + '"');
        }
        var o38;
        var o566 = o563.o54(o39, o727.flags);
        var o688 = o563.o688(o39);
        var length = o688.o109;
        var o874 = new Uint8Array(length);
        o563.o35(o566, o874, 0, length, 0);
        if (o727.o701 === 'utf8') {
            o38 = '';
            var o277 = new o62.o166();
            for (var o106 = 0; o106 < length; o106++) {
                o38 += o277.o169(o874[o106]);
            }
        } else if (o727.o701 === 'binary') {
            o38 = o874;
        }
        o563.o572(o566);
        return o38;
    },
    o700: function (o39, o875, o727) {
        o727 = o727 || {};
        o727.flags = o727.flags || 'w';
        o727.o701 = o727.o701 || 'utf8';
        if (o727.o701 !== 'utf8' && o727.o701 !== 'binary') {
            throw new Error('Invalid encoding type "' + o727.o701 + '"');
        }
        var o566 = o563.o54(o39, o727.flags, o727.o592);
        if (o727.o701 === 'utf8') {
            var o277 = new o62.o166();
            var o874 = new Uint8Array(o277.o176(o875));
            o563.write(o566, o874, 0, o874.length, 0, o727.o640);
        } else if (o727.o701 === 'binary') {
            o563.write(o566, o875, 0, o875.length, 0, o727.o640);
        }
        o563.o572(o566);
    },
    o774: function () {
        return o563.o768;
    },
    o876: function (o39) {
        var o599 = o563.o696(o39, {
            o785: true
        });
        if (!o563.o613(o599.o568.o592)) {
            throw new o563.o570(o425.o446);
        }
        var o658 = o563.o811(o599.o568, 'x');
        if (o658) {
            throw new o563.o570(o658);
        }
        o563.o768 = o599.o39;
    },
    o877: function () {
        o563.o699('/tmp');
    },
    o878: function () {
        // create /dev
        o563.o699('/dev');
        // setup /dev/null
        o563.o564(o563.o837(1, 3), {
            o35: function () {
                return 0;
            },
            write: function () {
                return 0;
            }
        });
        o563.o847('/dev/null', o563.o837(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using Module['printErr']
        // so we register a second tty just for it.
        o554.o558(o563.o837(5, 0), o554.o579);
        o554.o558(o563.o837(6, 0), o554.o583);
        o563.o847('/dev/tty', o563.o837(5, 0));
        o563.o847('/dev/tty1', o563.o837(6, 0));
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        o563.o699('/dev/shm');
        o563.o699('/dev/shm/tmp');
    },
    o879: function () {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops

        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
            o563.o880('/dev', 'stdin', Module['stdin']);
        } else {
            o563.o605('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
            o563.o880('/dev', 'stdout', null, Module['stdout']);
        } else {
            o563.o605('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
            o563.o880('/dev', 'stderr', null, Module['stderr']);
        } else {
            o563.o605('/dev/tty1', '/dev/stderr');
        }

        // open default streams for the stdin, stdout and stderr devices
        var o881 = o563.o54('/dev/stdin', 'r');
        o248[((o759) >> 2)] = o563.o832(o881);
        o95(o881.o820 === 0, 'invalid handle for stdin (' + o881.o820 + ')');

        var o882 = o563.o54('/dev/stdout', 'w');
        o248[((o760) >> 2)] = o563.o832(o882);
        o95(o882.o820 === 1, 'invalid handle for stdout (' + o882.o820 + ')');

        var o883 = o563.o54('/dev/stderr', 'w');
        o248[((o761) >> 2)] = o563.o832(o883);
        o95(o883.o820 === 2, 'invalid handle for stderr (' + o883.o820 + ')');
    },
    o884: function () {
        if (o563.o570) return;
        o563.o570 = function o570(o772) {
            this.o772 = o772;
            for (var key in o425) {
                if (o425[key] === o772) {
                    this.o152 = key;
                    break;
                }
            }
            this.o885 = o553[o772];
        };
        o563.o570.prototype = new Error();
        o563.o570.prototype.constructor = o563.o570;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [o425.o427].forEach(function (o152) {
            o563.o630[o152] = new o563.o570(o152);
            o563.o630[o152].o233 = '<generic error, no stack>';
        });
    },
    o723: function () {
        o563.o884();

        o563.o767 = new Array(4096);

        o563.o589(o584, {}, '/');

        o563.o877();
        o563.o878();
    },
    o556: function (input, o562, o678) {
        o95(!o563.o556.o769, 'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)');
        o563.o556.o769 = true;

        o563.o884();

        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = o562 || Module['stdout'];
        Module['stderr'] = o678 || Module['stderr'];

        o563.o879();
    },
    o887: function () {
        o563.o556.o769 = false;
        for (var o106 = 0; o106 < o563.o765.length; o106++) {
            var o566 = o563.o765[o106];
            if (!o566) {
                continue;
            }
            o563.o572(o566);
        }
    },
    o726: function (o888, o889) {
        var o592 = 0;
        if (o888) o592 |= 292 | 73;
        if (o889) o592 |= 146;
        return o592;
    },
    o890: function (o297, o891) {
        var o39 = o683.join.apply(null, o297);
        if (o891 && o39[0] == '/') o39 = o39.substr(1);
        return o39;
    },
    o892: function (o855, o893) {
        return o683.resolve(o893, o855);
    },
    o894: function (o39) {
        return o683.normalize(o39);
    },
    o895: function (o39, o896) {
        var o38 = o563.o897(o39, o896);
        if (o38.o898) {
            return o38.o824;
        } else {
            o424(o38.o678);
            return null;
        }
    },
    o897: function (o39, o896) {
        // operate from within the context of the symlink's target
        try {
            var o599 = o563.o696(o39, {
                o785: !o896
            });
            o39 = o599.o39;
        } catch (o232) {}
        var o38 = {
            o789: false,
            o898: false,
            o678: 0,
            name: null,
            o39: null,
            o824: null,
            o899: false,
            o900: null,
            o901: null
        };
        try {
            var o599 = o563.o696(o39, {
                o591: true
            });
            o38.o899 = true;
            o38.o900 = o599.o39;
            o38.o901 = o599.o568;
            o38.name = o683.o846(o39);
            o599 = o563.o696(o39, {
                o785: !o896
            });
            o38.o898 = true;
            o38.o39 = o599.o39;
            o38.o824 = o599.o568;
            o38.name = o599.o568.name;
            o38.o789 = o599.o39 === '/';
        } catch (o232) {
            o38.o678 = o232.o772;
        };
        return o38;
    },
    o902: function (o591, name, o888, o889) {
        var o39 = o683.o684(typeof o591 === 'string' ? o591 : o563.o788(o591), name);
        var o592 = o563.o726(o888, o889);
        return o563.o699(o39, o592);
    },
    o903: function (o591, o39, o888, o889) {
        o591 = typeof o591 === 'string' ? o591 : o563.o788(o591);
        var o297 = o39.split('/').reverse();
        while (o297.length) {
            var o904 = o297.pop();
            if (!o904) continue;
            var o780 = o683.o684(o591, o904);
            try {
                o563.o699(o780);
            } catch (o232) {
                // ignore EEXIST
            }
            o591 = o780;
        }
        return o780;
    },
    o905: function (o591, name, o906, o888, o889) {
        var o39 = o683.o684(typeof o591 === 'string' ? o591 : o563.o788(o591), name);
        var o592 = o563.o726(o888, o889);
        return o563.create(o39, o592);
    },
    o907: function (o591, name, o875, o888, o889, o640) {
        var o39 = name ? o683.o684(typeof o591 === 'string' ? o591 : o563.o788(o591), name) : o591;
        var o592 = o563.o726(o888, o889);
        var o568 = o563.create(o39, o592);
        if (o875) {
            if (typeof o875 === 'string') {
                var o908 = new Array(o875.length);
                for (var o106 = 0, o865 = o875.length; o106 < o865; ++o106) o908[o106] = o875.charCodeAt(o106);
                o875 = o908;
            }
            // make sure we can write to the file
            o563.o858(o568, o592 | 146);
            var o566 = o563.o54(o568, 'w');
            o563.write(o566, o875, 0, o875.length, 0, o640);
            o563.o572(o566);
            o563.o858(o568, o592);
        }
        return o568;
    },
    o880: function (o591, name, input, o562) {
        var o39 = o683.o684(typeof o591 === 'string' ? o591 : o563.o788(o591), name);
        var o592 = o563.o726(!!input, !!o562);
        if (!o563.o880.o835) o563.o880.o835 = 64;
        var o559 = o563.o837(o563.o880.o835++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        o563.o564(o559, {
            o54: function (o566) {
                o566.o571 = false;
            },
            o572: function (o566) {
                // flush any pending line data
                if (o562 && o562.buffer && o562.buffer.length) {
                    o562(10);
                }
            },
            o35: function (o566, buffer, o134, length, o574 /* ignored */ ) {
                var o576 = 0;
                for (var o106 = 0; o106 < length; o106++) {
                    var o577;
                    try {
                        o577 = input();
                    } catch (o232) {
                        throw new o563.o570(o425.o430);
                    }
                    if (o577 === undefined && o576 === 0) {
                        throw new o563.o570(o425.o436);
                    }
                    if (o577 === null || o577 === undefined) break;
                    o576++;
                    buffer[o134 + o106] = o577;
                }
                if (o576) {
                    o566.o568.o578 = Date.o5();
                }
                return o576;
            },
            write: function (o566, buffer, o134, length, o574) {
                for (var o106 = 0; o106 < length; o106++) {
                    try {
                        o562(buffer[o134 + o106]);
                    } catch (o232) {
                        throw new o563.o570(o425.o430);
                    }
                }
                if (length) {
                    o566.o568.o578 = Date.o5();
                }
                return o106;
            }
        });
        return o563.o847(o39, o592, o559);
    },
    o909: function (o591, name, target, o888, o889) {
        var o39 = o683.o684(typeof o591 === 'string' ? o591 : o563.o788(o591), name);
        return o563.o605(target, o39);
    },
    o910: function (o911) {
        if (o911.o803 || o911.o802 || o911.link || o911.o614) return true;
        var o912 = true;
        if (typeof o53 !== 'undefined') {
            throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (Module['read']) {
            // Command-line.
            try {
                // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
                //          read() will try to parse UTF8.
                o911.o614 = o237(Module['read'](o911.o51), true);
            } catch (o232) {
                o912 = false;
            }
        } else {
            throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
        if (!o912) o424(o425.o430);
        return o912;
    },
    o913: function (o591, name, o51, o888, o889) {
        if (typeof o53 !== 'undefined') {
            if (!o27) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
            // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
            function o914() {
                this.o915 = false;
                this.o916 = []; // Loaded chunks. Index is the chunk number
            }
            o914.prototype.get = function o917(o845) {
                if (o845 > this.length - 1 || o845 < 0) {
                    return undefined;
                }
                var o918 = o845 % this.o919;
                var o920 = Math.floor(o845 / this.o919);
                return this.getter(o920)[o918];
            }
            o914.prototype.o922 = function o923(getter) {
                this.getter = getter;
            }
            o914.prototype.o924 = function o925() {
                // Find length
                var o52 = new o53();
                o52.o54('HEAD', o51, false);
                o52.o55(null);
                if (!(o52.o926 >= 200 && o52.o926 < 300 || o52.o926 === 304)) throw new Error("Couldn't load " + o51 + ". Status: " + o52.o926);
                var o927 = Number(o52.o929("Content-length"));
                var o930;
                var o931 = (o930 = o52.o929("Accept-Ranges")) && o930 === "bytes";
                var o919 = 1024 * 1024; // Chunk size in bytes

                if (!o931) o919 = o927;

                // Function to get a range from the remote URL.
                var o932 = (function (from, o934) {
                    if (from > o934) throw new Error("invalid range (" + from + ", " + o934 + ") or no bytes requested!");
                    if (o934 > o927 - 1) throw new Error("only " + o927 + " bytes available! programmer error!");

                    // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
                    var o52 = new o53();
                    o52.o54('GET', o51, false);
                    if (o927 !== o919) o52.o935("Range", "bytes=" + from + "-" + o934);

                    // Some hints to the browser that we want binary data.
                    if (typeof Uint8Array != 'undefined') o52.o936 = 'arraybuffer';
                    if (o52.o937) {
                        o52.o937('text/plain; charset=x-user-defined');
                    }

                    o52.o55(null);
                    if (!(o52.o926 >= 200 && o52.o926 < 300 || o52.o926 === 304)) throw new Error("Couldn't load " + o51 + ". Status: " + o52.o926);
                    if (o52.o938 !== undefined) {
                        return new Uint8Array(o52.o938 || []);
                    } else {
                        return o237(o52.o56 || '', true);
                    }
                });
                var o939 = this;
                o939.o922(function (o920) {
                    var o549 = o920 * o919;
                    var o311 = (o920 + 1) * o919 - 1; // including this byte
                    o311 = Math.o111(o311, o927 - 1); // if datalength-1 is selected, this is the last block
                    if (typeof (o939.o916[o920]) === "undefined") {
                        o939.o916[o920] = o932(o549, o311);
                    }
                    if (typeof (o939.o916[o920]) === "undefined") throw new Error("doXHR failed!");
                    return o939.o916[o920];
                });

                this.o940 = o927;
                this.o941 = o919;
                this.o915 = true;
            }

            var o939 = new o914();
            Object.defineProperty(o939, "length", {
                get: function () {
                    if (!this.o915) {
                        this.o924();
                    }
                    return this.o940;
                }
            });
            Object.defineProperty(o939, "chunkSize", {
                get: function () {
                    if (!this.o915) {
                        this.o924();
                    }
                    return this.o941;
                }
            });

            var o906 = {
                o803: false,
                o614: o939
            };
        } else {
            var o906 = {
                o803: false,
                o51: o51
            };
        }

        var o568 = o563.o905(o591, name, o906, o888, o889);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (o906.o614) {
            o568.o614 = o906.o614;
        } else if (o906.o51) {
            o568.o614 = null;
            o568.o51 = o906.o51;
        }
        // override each stream op with one that tries to force load the lazy file first
        var o565 = {};
        var keys = Object.keys(o568.o565);
        keys.forEach(function (key) {
            var o943 = o568.o565[key];
            o565[key] = function o944() {
                if (!o563.o910(o568)) {
                    throw new o563.o570(o425.o430);
                }
                return o943.apply(null, arguments);
            };
        });
        // use a custom read function
        o565.o35 = function o945(o566, buffer, o134, length, o639) {
            if (!o563.o910(o568)) {
                throw new o563.o570(o425.o430);
            }
            var o614 = o566.o568.o614;
            if (o639 >= o614.length)
                return 0;
            var o109 = Math.o111(o614.length - o639, length);
            o95(o109 >= 0);
            if (o614.slice) { // normal array
                for (var o106 = 0; o106 < o109; o106++) {
                    buffer[o134 + o106] = o614[o639 + o106];
                }
            } else {
                for (var o106 = 0; o106 < o109; o106++) { // LazyUint8Array from sync binary XHR
                    buffer[o134 + o106] = o614.get(o639 + o106);
                }
            }
            return o109;
        };
        o568.o565 = o565;
        return o568;
    },
    o946: function (o591, name, o51, o888, o889, o947, o677, o948, o640) {
        o949.o556();
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var o950 = name ? o683.resolve(o683.o684(o591, name)) : o591;

        function o951(o952) {
            function o953(o952) {
                if (!o948) {
                    o563.o907(o591, name, o952, o888, o889, o640);
                }
                if (o947) o947();
                o407('cp ' + o950);
            }
            var o954 = false;
            Module['preloadPlugins'].forEach(function (o955) {
                if (o954) return;
                if (o955['canHandle'](o950)) {
                    o955['handle'](o952, o950, o953, function () {
                        if (o677) o677();
                        o407('cp ' + o950);
                    });
                    o954 = true;
                }
            });
            if (!o954) o953(o952);
        }
        o405('cp ' + o950);
        if (typeof o51 == 'string') {
            o949.o956(o51, function (o952) {
                o951(o952);
            }, o677);
        } else {
            o951(o51);
        }
    },
    o649: function () {
        return o26.o649 || o26.o650 || o26.o651 || o26.o652;
    },
    o957: function () {
        return 'EM_FS_' + o26.o958.o959;
    },
    o653: 20,
    o654: "FILE_DATA",
    o960: function (o961, o947, o677) {
        o947 = o947 || function () {};
        o677 = o677 || function () {};
        var o649 = o563.o649();
        try {
            var o962 = o649.o54(o563.o957(), o563.o653);
        } catch (o232) {
            return o677(o232);
        }
        o962.o667 = function o963() {
            o57.o58('creating db');
            var o665 = o962.o577;
            o665.o673(o563.o654);
        };
        o962.o676 = function o964() {
            var o665 = o962.o577;
            var o668 = o665.o668([o563.o654], 'readwrite');
            var o965 = o668.o672(o563.o654);
            var o966 = 0,
                o967 = 0,
                o710 = o961.length;

            function o953() {
                if (o967 == 0) o947();
                else o677();
            }
            o961.forEach(function (o39) {
                var o968 = o965.o707(o563.o897(o39).o824.o614, o39);
                o968.o676 = function o969() {
                    o966++;
                    if (o966 + o967 == o710) o953()
                };
                o968.o677 = function o970() {
                    o967++;
                    if (o966 + o967 == o710) o953()
                };
            });
            o668.o677 = o677;
        };
        o962.o677 = o677;
    },
    o971: function (o961, o947, o677) {
        o947 = o947 || function () {};
        o677 = o677 || function () {};
        var o649 = o563.o649();
        try {
            var o962 = o649.o54(o563.o957(), o563.o653);
        } catch (o232) {
            return o677(o232);
        }
        o962.o667 = o677; // no database to load from
        o962.o676 = function o964() {
            var o665 = o962.o577;
            try {
                var o668 = o665.o668([o563.o654], 'readonly');
            } catch (o232) {
                o677(o232);
                return;
            }
            var o965 = o668.o672(o563.o654);
            var o966 = 0,
                o967 = 0,
                o710 = o961.length;

            function o953() {
                if (o967 == 0) o947();
                else o677();
            }
            o961.forEach(function (o39) {
                var o972 = o965.get(o39);
                o972.o676 = function o973() {
                    if (o563.o897(o39).o898) {
                        o563.o602(o39);
                    }
                    o563.o907(o683.o787(o39), o683.o846(o39), o972.o577, true, true, true);
                    o966++;
                    if (o966 + o967 == o710) o953();
                };
                o972.o677 = function o974() {
                    o967++;
                    if (o966 + o967 == o710) o953()
                };
            });
            o668.o677 = o677;
        };
        o962.o677 = o677;
    }
};
var o683 = {
    o975: function (o36) {
        var o976 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return o976.exec(o36).slice(1);
    },
    o778: function (o297, o978) {
        // if the path tries to go above the root, `up` ends up > 0
        var o979 = 0;
        for (var o106 = o297.length - 1; o106 >= 0; o106--) {
            var o980 = o297[o106];
            if (o980 === '.') {
                o297.splice(o106, 1);
            } else if (o980 === '..') {
                o297.splice(o106, 1);
                o979++;
            } else if (o979) {
                o297.splice(o106, 1);
                o979--;
            }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (o978) {
            for (; o979--; o979) {
                o297.unshift('..');
            }
        }
        return o297;
    },
    normalize: function (o39) {
        var o981 = o39.charAt(0) === '/',
            o982 = o39.substr(-1) === '/';
        // Normalize the path
        o39 = o683.o778(o39.split('/').filter(function (o680) {
            return !!o680;
        }), !o981).join('/');
        if (!o39 && !o981) {
            o39 = '.';
        }
        if (o39 && o982) {
            o39 += '/';
        }
        return (o981 ? '/' : '') + o39;
    },
    o787: function (o39) {
        var o577 = o683.o975(o39),
            o682 = o577[0],
            o595 = o577[1];
        if (!o682 && !o595) {
            // No dirname whatsoever
            return '.';
        }
        if (o595) {
            // It has a dirname, strip trailing slash
            o595 = o595.substr(0, o595.length - 1);
        }
        return o682 + o595;
    },
    o846: function (o39) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (o39 === '/') return '/';
        var o983 = o39.lastIndexOf('/');
        if (o983 === -1) return o39;
        return o39.substr(o983 + 1);
    },
    o985: function (o39) {
        return o683.o975(o39)[3];
    },
    join: function () {
        var o961 = Array.prototype.slice.call(arguments, 0);
        return o683.normalize(o961.join('/'));
    },
    o684: function (o85, o986) {
        return o683.normalize(o85 + '/' + o986);
    },
    resolve: function () {
        var o987 = '',
            o988 = false;
        for (var o106 = arguments.length - 1; o106 >= -1 && !o988; o106--) {
            var o39 = (o106 >= 0) ? arguments[o106] : o563.o774();
            // Skip empty and invalid entries
            if (typeof o39 !== 'string') {
                throw new o989('Arguments to path.resolve must be strings');
            } else if (!o39) {
                continue;
            }
            o987 = o39 + '/' + o987;
            o988 = o39.charAt(0) === '/';
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        o987 = o683.o778(o987.split('/').filter(function (o680) {
            return !!o680;
        }), !o988).join('/');
        return ((o988 ? '/' : '') + o987) || '.';
    },
    o855: function (from, o934) {
        from = o683.resolve(from).substr(1);
        o934 = o683.resolve(o934).substr(1);

        function o990(o908) {
            var o549 = 0;
            for (; o549 < o908.length; o549++) {
                if (o908[o549] !== '') break;
            }
            var o311 = o908.length - 1;
            for (; o311 >= 0; o311--) {
                if (o908[o311] !== '') break;
            }
            if (o549 > o311) return [];
            return o908.slice(o549, o311 - o549 + 1);
        }
        var o991 = o990(from.split('/'));
        var o992 = o990(o934.split('/'));
        var length = Math.o111(o991.length, o992.length);
        var o993 = length;
        for (var o106 = 0; o106 < length; o106++) {
            if (o991[o106] !== o992[o106]) {
                o993 = o106;
                break;
            }
        }
        var o994 = [];
        for (var o106 = o993; o106 < o991.length; o106++) {
            o994.push('..');
        }
        o994 = o994.concat(o992.slice(o993));
        return o994.join('/');
    }
};
var o949 = {
    o996: {
        o997: null,
        o998: "",
        o999: false,
        o1000: false,
        o1001: [],
        o1002: function () {
            o949.o996.o999 = true;
        },
        o1003: function () {
            if (o949.o996.o1000) {
                o949.o996.o1000 = false;
                o949.o996.o997();
            }
            o949.o996.o999 = false;
        },
        o1004: function () {
            if (Module['setStatus']) {
                var o885 = Module['statusMessage'] || 'Please wait...';
                var o1005 = o949.o996.o1006;
                var o1007 = o949.o996.o1008;
                if (o1005) {
                    if (o1005 < o1007) {
                        Module['setStatus'](o885 + ' (' + (o1007 - o1005) + '/' + o1007 + ')');
                    } else {
                        Module['setStatus'](o885);
                    }
                } else {
                    Module['setStatus']('');
                }
            }
        }
    },
    o1009: false,
    o1010: false,
    o1011: [],
    o1012: [],
    o556: function () {
        if (!Module["preloadPlugins"]) Module["preloadPlugins"] = []; // needs to exist even in workers

        if (o949.o1013 || o27) return;
        o949.o1013 = true;

        try {
            new o1014();
            o949.o1015 = true;
        } catch (o232) {
            o949.o1015 = false;
            o57.o58("warning: no blob constructor, cannot create blobs with mimetypes");
        }
        o949.o1016 = typeof o1017 != "undefined" ? o1017 : (typeof o1018 != "undefined" ? o1018 : (!o949.o1015 ? o57.o58("warning: no BlobBuilder") : null));
        o949.o1019 = typeof o26 != "undefined" ? (o26.o1020 ? o26.o1020 : o26.o1021) : undefined;
        if (!Module.o1022 && typeof o949.o1019 === 'undefined') {
            o57.o58("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
            Module.o1022 = true;
        }

        // Support for plugins that can process preloaded files. You can add more of these to
        // your app by creating and appending to Module.preloadPlugins.
        //
        // Each plugin is asked if it can handle a file based on the file's name. If it can,
        // it is given the file's raw data. When it is done, it calls a callback with the file's
        // (possibly modified) data. For example, a plugin might decompress a file, or it
        // might create some side data structure for use later (like an Image element, etc.).

        var o1023 = {};
        o1023['canHandle'] = function o1024(name) {
            return !Module.o1022 && /\.(jpg|jpeg|png|bmp)$/i.test(name);
        };
        o1023['handle'] = function o1025(o952, name, o947, o677) {
            var o374 = null;
            if (o949.o1015) {
                try {
                    o374 = new o1014([o952], {
                        type: o949.o1026(name)
                    });
                    if (o374.o109 !== o952.length) { // Safari bug #118630
                        // Safari's Blob can only take an ArrayBuffer
                        o374 = new o1014([(new Uint8Array(o952)).buffer], {
                            type: o949.o1026(name)
                        });
                    }
                } catch (o232) {
                    o62.o160('Blob constructor present but fails: ' + o232 + '; falling back to blob builder');
                }
            }
            if (!o374) {
                var o1027 = new o949.o1016();
                o1027.o1028((new Uint8Array(o952)).buffer); // we need to pass a buffer, and must copy the array to get the right data range
                o374 = o1027.o1029();
            }
            var o51 = o949.o1019.o1030(o374);
            var o1031 = new o1032();
            o1031.o947 = function o1033() {
                o95(o1031.o1034, 'Image ' + name + ' could not be decoded');
                var o1035 = o1036.o1037('canvas');
                o1035.o1038 = o1031.o1038;
                o1035.o1039 = o1031.o1039;
                var o1040 = o1035.o1041('2d');
                o1040.o1042(o1031, 0, 0);
                Module["preloadedImages"][name] = o1035;
                o949.o1019.o1043(o51);
                if (o947) o947(o952);
            };
            o1031.o677 = function o1044(o691) {
                o57.o58('Image ' + o51 + ' could not be decoded');
                if (o677) o677();
            };
            o1031.o415 = o51;
        };
        Module['preloadPlugins'].push(o1023);

        var o1045 = {};
        o1045['canHandle'] = function o1046(name) {
            return !Module.o1047 && name.substr(-4) in {
                '.ogg': 1,
                '.wav': 1,
                '.mp3': 1
            };
        };
        o1045['handle'] = function o1048(o952, name, o947, o677) {
            var done = false;

            function o953(o1049) {
                if (done) return;
                done = true;
                Module["preloadedAudios"][name] = o1049;
                if (o947) o947(o952);
            }

            function o967() {
                if (done) return;
                done = true;
                Module["preloadedAudios"][name] = new o1050(); // empty shim
                if (o677) o677();
            }
            if (o949.o1015) {
                try {
                    var o374 = new o1014([o952], {
                        type: o949.o1026(name)
                    });
                } catch (o232) {
                    return o967();
                }
                var o51 = o949.o1019.o1030(o374); // XXX we never revoke this!
                var o1049 = new o1050();
                o1049.o1051('canplaythrough', function () {
                    o953(o1049)
                }, false); // use addEventListener due to chromium bug 124926
                o1049.o677 = function o1052(o691) {
                    if (done) return;
                    o57.o58('warning: browser could not fully decode audio ' + name + ', trying slower base64 approach');

                    function o1053(o875) {
                        var o1054 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                        var o1055 = '=';
                        var o38 = '';
                        var o1056 = 0;
                        var o1057 = 0;
                        for (var o106 = 0; o106 < o875.length; o106++) {
                            o1056 = (o1056 << 8) | o875[o106];
                            o1057 += 8;
                            while (o1057 >= 6) {
                                var o125 = (o1056 >> (o1057 - 6)) & 0x3f;
                                o1057 -= 6;
                                o38 += o1054[o125];
                            }
                        }
                        if (o1057 == 2) {
                            o38 += o1054[(o1056 & 3) << 4];
                            o38 += o1055 + o1055;
                        } else if (o1057 == 4) {
                            o38 += o1054[(o1056 & 0xf) << 2];
                            o38 += o1055;
                        }
                        return o38;
                    }
                    o1049.o415 = 'data:audio/x-' + name.substr(-3) + ';base64,' + o1053(o952);
                    o953(o1049); // we don't wait for confirmation this worked - but it's worth trying
                };
                o1049.o415 = o51;
                // workaround for chrome bug 124926 - we do not always get oncanplaythrough or onerror
                o949.o1058(function () {
                    o953(o1049); // try to use it even though it is not necessarily ready to play
                }, 10000);
            } else {
                return o967();
            }
        };
        Module['preloadPlugins'].push(o1045);

        // Canvas event setup

        var o1035 = Module['canvas'];

        // forced aspect ratio can be enabled by defining 'forcedAspectRatio' on Module
        // Module['forcedAspectRatio'] = 4 / 3;

        o1035.o1059 = o1035['requestPointerLock'] ||
            o1035['mozRequestPointerLock'] ||
            o1035['webkitRequestPointerLock'] ||
            o1035['msRequestPointerLock'] ||
            function () {};
        o1035.o1060 = o1036['exitPointerLock'] ||
            o1036['mozExitPointerLock'] ||
            o1036['webkitExitPointerLock'] ||
            o1036['msExitPointerLock'] ||
            function () {}; // no-op if function does not exist
        o1035.o1060 = o1035.o1060.bind(o1036);

        function o1062() {
            o949.o1010 = o1036['pointerLockElement'] === o1035 ||
                o1036['mozPointerLockElement'] === o1035 ||
                o1036['webkitPointerLockElement'] === o1035 ||
                o1036['msPointerLockElement'] === o1035;
        }

        o1036.o1051('pointerlockchange', o1062, false);
        o1036.o1051('mozpointerlockchange', o1062, false);
        o1036.o1051('webkitpointerlockchange', o1062, false);
        o1036.o1051('mspointerlockchange', o1062, false);

        if (Module['elementPointerLock']) {
            o1035.o1051("click", function (o1063) {
                if (!o949.o1010 && o1035.o1059) {
                    o1035.o1059();
                    o1063.o1064();
                }
            }, false);
        }
    },
    o1065: function (o1035, o1066, o1067, o1068) {
        var o1040;
        var o1069 = '?';

        function o1070(o691) {
            o1069 = o691.o1071 || o1069;
        }
        try {
            if (o1066) {
                var o1072 = {
                    o1073: false,
                    o1074: false
                };

                if (o1068) {
                    for (var o1075 in o1068) {
                        o1072[o1075] = o1068[o1075];
                    }
                }


                o1035.o1051('webglcontextcreationerror', o1070, false);
                try {
                    ['experimental-webgl', 'webgl'].some(function (o1077) {
                        return o1040 = o1035.o1041(o1077, o1072);
                    });
                } finally {
                    o1035.o1078('webglcontextcreationerror', o1070, false);
                }
            } else {
                o1040 = o1035.o1041('2d');
            }
            if (!o1040) throw ':(';
        } catch (o232) {
            Module.print('Could not create canvas: ' + [o1069, o232]);
            return null;
        }
        if (o1066) {
            // Set the background of the WebGL canvas to black
            o1035.o1079.o1080 = "black";

            // Warn on context loss
            o1035.o1051('webglcontextlost', function (o691) {
                o1081('WebGL context lost. You will need to reload the page.');
            }, false);
        }
        if (o1067) {
            o1082 = Module.o1040 = o1040;
            Module.o1066 = o1066;
            o949.o1011.forEach(function (o340) {
                o340()
            });
            o949.o556();
        }
        return o1040;
    },
    o1083: function (o1035, o1066, o1067) {},
    o1084: false,
    o1085: undefined,
    o1086: undefined,
    o1087: function (o1085, o1086) {
        o949.o1085 = o1085;
        o949.o1086 = o1086;
        if (typeof o949.o1085 === 'undefined') o949.o1085 = true;
        if (typeof o949.o1086 === 'undefined') o949.o1086 = false;

        var o1035 = Module['canvas'];
        var o1088 = o1035.o1089;

        function o1090() {
            o949.o1009 = false;
            if ((o1036['webkitFullScreenElement'] || o1036['webkitFullscreenElement'] ||
                o1036['mozFullScreenElement'] || o1036['mozFullscreenElement'] ||
                o1036['fullScreenElement'] || o1036['fullscreenElement'] ||
                o1036['msFullScreenElement'] || o1036['msFullscreenElement'] ||
                o1036['webkitCurrentFullScreenElement']) === o1088) {
                o1035.o1091 = o1036['cancelFullScreen'] ||
                    o1036['mozCancelFullScreen'] ||
                    o1036['webkitCancelFullScreen'] ||
                    o1036['msExitFullscreen'] ||
                    o1036['exitFullscreen'] ||
                    function () {};
                o1035.o1091 = o1035.o1091.bind(o1036);
                if (o949.o1085) o1035.o1059();
                o949.o1009 = true;
                if (o949.o1086) o949.o1092();
            } else {

                // remove the full screen specific parent of the canvas again to restore the HTML structure from before going full screen
                var o1088 = o1035.o1089;
                o1088.o1089.o1093(o1035, o1088);
                o1088.o1089.o1094(o1088);

                if (o949.o1086) o949.o1095();
            }
            if (Module['onFullScreen']) Module['onFullScreen'](o949.o1009);
            o949.o1096(o1035);
        }

        if (!o949.o1084) {
            o949.o1084 = true;
            o1036.o1051('fullscreenchange', o1090, false);
            o1036.o1051('mozfullscreenchange', o1090, false);
            o1036.o1051('webkitfullscreenchange', o1090, false);
            o1036.o1051('MSFullscreenChange', o1090, false);
        }

        // create a new parent to ensure the canvas has no siblings. this allows browsers to optimize full screen performance when its parent is the full screen root
        var o1088 = o1036.o1037("div");
        o1035.o1089.o1093(o1088, o1035);
        o1088.o1097(o1035);

        // use parent of canvas as full screen root to allow aspect ratio correction (Firefox stretches the root to screen size)
        o1088.o1087 = o1088['requestFullScreen'] ||
            o1088['mozRequestFullScreen'] ||
            o1088['msRequestFullscreen'] ||
            (o1088['webkitRequestFullScreen'] ? function () {
            o1088['webkitRequestFullScreen'](o1098['ALLOW_KEYBOARD_INPUT'])
        } : null);
        o1088.o1087();
    },
    o1099: function o1099(o149) {
        if (typeof o26 === 'undefined') { // Provide fallback to setTimeout if window is undefined (e.g. in Node.js)
            o1100(o149, 1000 / 60);
        } else {
            if (!o26.o1099) {
                o26.o1099 = o26['requestAnimationFrame'] ||
                    o26['mozRequestAnimationFrame'] ||
                    o26['webkitRequestAnimationFrame'] ||
                    o26['msRequestAnimationFrame'] ||
                    o26['oRequestAnimationFrame'] ||
                    o26['setTimeout'];
            }
            o26.o1099(o149);
        }
    },
    o1101: function (o149) {
        return function () {
            if (!o197) return o149.apply(null, arguments);
        };
    },
    o1102: function (o149) {
        return o949.o1099(function () {
            if (!o197) o149();
        });
    },
    o1058: function (o149, o1103) {
        return o1100(function () {
            if (!o197) o149();
        }, o1103);
    },
    o1104: function (o149, o1103) {
        return o1105(function () {
            if (!o197) o149();
        }, o1103);
    },
    o1026: function (name) {
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
    o1106: function (o149) {
        if (!o26.o1106) {
            o26.o1106 = o1107['getUserMedia'] ||
                o1107['mozGetUserMedia'];
        }
        o26.o1106(o149);
    },
    o1108: function (o691) {
        return o691['movementX'] ||
            o691['mozMovementX'] ||
            o691['webkitMovementX'] ||
            0;
    },
    o1109: function (o691) {
        return o691['movementY'] ||
            o691['mozMovementY'] ||
            o691['webkitMovementY'] ||
            0;
    },
    o1110: function (o691) {
        return Math.o97(-1, Math.o111(1, o691.type === 'DOMMouseScroll' ? o691.o1111 : -o691.o1112));
    },
    o1113: 0,
    o1114: 0,
    o1115: 0,
    o1116: 0,
    o1117: function (o691) { // event should be mousemove, mousedown or mouseup
        if (o949.o1010) {
            // When the pointer is locked, calculate the coordinates
            // based on the movement of the mouse.
            // Workaround for Firefox bug 764498
            if (o691.type != 'mousemove' &&
                ('mozMovementX' in o691)) {
                o949.o1115 = o949.o1116 = 0;
            } else {
                o949.o1115 = o949.o1108(o691);
                o949.o1116 = o949.o1109(o691);
            }

            // check if SDL is available
            if (typeof o1118 != "undefined") {
                o949.o1113 = o1118.o1113 + o949.o1115;
                o949.o1114 = o1118.o1114 + o949.o1116;
            } else {
                // just add the mouse delta to the current absolut mouse position
                // FIXME: ideally this should be clamped against the canvas size and zero
                o949.o1113 += o949.o1115;
                o949.o1114 += o949.o1116;
            }
        } else {
            // Otherwise, calculate the movement based on the changes
            // in the coordinates.
            var o1119 = Module["canvas"].o1120();
            var o30, o84;

            // Neither .scrollX or .pageXOffset are defined in a spec, but
            // we prefer .scrollX because it is currently in a spec draft.
            // (see: http://www.w3.org/TR/2013/WD-cssom-view-20131217/)
            var o1121 = ((typeof o26.o1121 !== 'undefined') ? o26.o1121 : o26.o1122);
            var o1123 = ((typeof o26.o1123 !== 'undefined') ? o26.o1123 : o26.o1124);
            if (o691.type == 'touchstart' ||
                o691.type == 'touchend' ||
                o691.type == 'touchmove') {
                var o275 = o691.o1125.o103(0);
                if (o275) {
                    o30 = o275.o1126 - (o1121 + o1119.o1127);
                    o84 = o275.o1128 - (o1123 + o1119.o13);
                } else {
                    return;
                }
            } else {
                o30 = o691.o1126 - (o1121 + o1119.o1127);
                o84 = o691.o1128 - (o1123 + o1119.o13);
            }

            // the canvas might be CSS-scaled compared to its backbuffer;
            // SDL-using content will want mouse coordinates in terms
            // of backbuffer units.
            var o1129 = Module["canvas"].o1038;
            var o285 = Module["canvas"].o1039;
            o30 = o30 * (o1129 / o1119.o1038);
            o84 = o84 * (o285 / o1119.o1039);

            o949.o1115 = o30 - o949.o1113;
            o949.o1116 = o84 - o949.o1114;
            o949.o1113 = o30;
            o949.o1114 = o84;
        }
    },
    o1130: function (o51, o947, o677) {
        var o52 = new o53();
        o52.o54('GET', o51, true);
        o52.o936 = 'arraybuffer';
        o52.o947 = function o1131() {
            if (o52.o926 == 200 || (o52.o926 == 0 && o52.o938)) { // file URLs can return 0
                o947(o52.o938);
            } else {
                o677();
            }
        };
        o52.o677 = o677;
        o52.o55(null);
    },
    o956: function (o51, o947, o677, o1132) {
        o949.o1130(o51, function (o1133) {
            o95(o1133, 'Loading data file "' + o51 + '" failed (no arrayBuffer).');
            o947(new Uint8Array(o1133));
            if (!o1132) o407('al ' + o51);
        }, function (o691) {
            if (o677) {
                o677();
            } else {
                throw 'Loading data file "' + o51 + '" failed.';
            }
        });
        if (!o1132) o405('al ' + o51);
    },
    o1134: [],
    o1135: function () {
        var o1035 = Module['canvas'];
        o949.o1134.forEach(function (o1136) {
            o1136(o1035.o1038, o1035.o1039);
        });
    },
    o1137: function (o1038, o1039, o1138) {
        var o1035 = Module['canvas'];
        o949.o1096(o1035, o1038, o1039);
        if (!o1138) o949.o1135();
    },
    o1139: 0,
    o1140: 0,
    o1092: function () {
        // check if SDL is available   
        if (typeof o1118 != "undefined") {
            var flags = o321[((o1118.o1141 + o62.o91 * 0) >> 2)];
            flags = flags | 0x00800000; // set SDL_FULLSCREEN flag
            o248[((o1118.o1141 + o62.o91 * 0) >> 2)] = flags
        }
        o949.o1135();
    },
    o1095: function () {
        // check if SDL is available       
        if (typeof o1118 != "undefined") {
            var flags = o321[((o1118.o1141 + o62.o91 * 0) >> 2)];
            flags = flags & ~0x00800000; // clear SDL_FULLSCREEN flag
            o248[((o1118.o1141 + o62.o91 * 0) >> 2)] = flags
        }
        o949.o1135();
    },
    o1096: function (o1035, o1142, o1143) {
        if (o1142 && o1143) {
            o1035.o1144 = o1142;
            o1035.o1145 = o1143;
        } else {
            o1142 = o1035.o1144;
            o1143 = o1035.o1145;
        }
        var o1146 = o1142;
        var o86 = o1143;
        if (Module['forcedAspectRatio'] && Module['forcedAspectRatio'] > 0) {
            if (o1146 / o86 < Module['forcedAspectRatio']) {
                o1146 = Math.o87(o86 * Module['forcedAspectRatio']);
            } else {
                o86 = Math.o87(o1146 / Module['forcedAspectRatio']);
            }
        }
        if (((o1036['webkitFullScreenElement'] || o1036['webkitFullscreenElement'] ||
            o1036['mozFullScreenElement'] || o1036['mozFullscreenElement'] ||
            o1036['fullScreenElement'] || o1036['fullscreenElement'] ||
            o1036['msFullScreenElement'] || o1036['msFullscreenElement'] ||
            o1036['webkitCurrentFullScreenElement']) === o1035.o1089) && (typeof o1141 != 'undefined')) {
            var o1147 = Math.o111(o1141.o1038 / o1146, o1141.o1039 / o86);
            o1146 = Math.o87(o1146 * o1147);
            o86 = Math.o87(o86 * o1147);
        }
        if (o949.o1086) {
            if (o1035.o1038 != o1146) o1035.o1038 = o1146;
            if (o1035.o1039 != o86) o1035.o1039 = o86;
            if (typeof o1035.o1079 != 'undefined') {
                o1035.o1079.o1148("width");
                o1035.o1079.o1148("height");
            }
        } else {
            if (o1035.o1038 != o1142) o1035.o1038 = o1142;
            if (o1035.o1039 != o1143) o1035.o1039 = o1143;
            if (typeof o1035.o1079 != 'undefined') {
                if (o1146 != o1142 || o86 != o1143) {
                    o1035.o1079.o1149("width", o1146 + "px", "important");
                    o1035.o1079.o1149("height", o86 + "px", "important");
                } else {
                    o1035.o1079.o1148("width");
                    o1035.o1079.o1148("height");
                }
            }
        }
    }
};

function o1150(o142) {
    var o38 = Math.floor(Date.o5() / 1000);
    if (o142) {
        o248[((o142) >> 2)] = o38;
    }
    return o38;
}


Module["_strlen"] = o1151;

o423 = o62.o184(4);
o248[((o423) >> 2)] = 0;
Module["requestFullScreen"] = function o1152(o1085, o1086) {
    o949.o1087(o1085, o1086)
};
Module["requestAnimationFrame"] = function o1153(o149) {
    o949.o1099(o149)
};
Module["setCanvasSize"] = function o1154(o1038, o1039, o1138) {
    o949.o1137(o1038, o1039, o1138)
};
Module["pauseMainLoop"] = function o1155() {
    o949.o996.o1002()
};
Module["resumeMainLoop"] = function o1156() {
    o949.o996.o1003()
};
Module["getUserMedia"] = function o1157() {
    o949.o1106()
}
o563.o723();
o343.unshift({
    o149: function () {
        if (!Module["noFSInit"] && !o563.o556.o769) o563.o556()
    }
});
o344.push({
    o149: function () {
        o563.o770 = false
    }
});
o345.push({
    o149: function () {
        o563.o887()
    }
});
Module["FS_createFolder"] = o563.o902;
Module["FS_createPath"] = o563.o903;
Module["FS_createDataFile"] = o563.o907;
Module["FS_createPreloadedFile"] = o563.o946;
Module["FS_createLazyFile"] = o563.o913;
Module["FS_createLink"] = o563.o909;
Module["FS_createDevice"] = o563.o880;
o343.unshift({
    o149: function () {
        o554.o556()
    }
});
o345.push({
    o149: function () {
        o554.o557()
    }
});
o554.o277 = new o62.o166();
if (o22) {
    var o728 = o24("fs");
    o721.o723();
}
o324 = o64 = o62.o126(o185);

o323 = true; // seal the static portion of memory

o325 = o324 + 5242880;

o326 = o187 = o62.o126(o325);

o95(o326 < o188, "TOTAL_MEMORY not big enough for stack");


var o250 = Math.o111;

function o1158(o30, o84) {
    Module.print('int ' + o30 + ',' + o84); // + ' ' + new Error().stack);
}

function o1159(o30, o84) {
    Module.print('float ' + o30 + ',' + o84); // + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var o1160 = (function (global, o1162, buffer) {
    "use asm";
    var o295 = new global.Int8Array(buffer);
    var o374 = new global.Int16Array(buffer);
    var o310 = new global.Int32Array(buffer);
    var o1163 = new global.Uint8Array(buffer);
    var o232 = new global.Uint16Array(buffer);
    var o45 = new global.Uint32Array(buffer);
    var o1164 = new global.Float32Array(buffer);
    var o86 = new global.Float64Array(buffer);
    var o106 = o1162.o64 | 0;
    var o1165 = o1162.o325 | 0;
    var o139 = o1162.o410 | 0;
    var o85 = o1162.o197 | 0;
    var o841 = 0;
    var o1166 = 0;
    var o1167 = 0;
    var o680 = 0;
    var o1168 = +o1162.NaN,
        o986 = +o1162.Infinity;
    var o1170 = 0,
        o275 = 0,
        o1171 = 0,
        o1172 = 0,
        o1146 = 0.0,
        o30 = 0,
        o84 = 0,
        o1173 = 0,
        o1174 = 0.0;
    var o1175 = 0;
    var o1176 = 0;
    var o1177 = 0;
    var o1178 = 0;
    var o1179 = 0;
    var o1180 = 0;
    var o1181 = 0;
    var o1182 = 0;
    var o1183 = 0;
    var o1184 = 0;
    var o1185 = global.Math.floor;
    var o1186 = global.Math.abs;
    var o1187 = global.Math.sqrt;
    var o1188 = global.Math.o370;
    var o1189 = global.Math.cos;
    var o1190 = global.Math.sin;
    var o1191 = global.Math.tan;
    var o1192 = global.Math.acos;
    var o1193 = global.Math.o388;
    var o1194 = global.Math.o390;
    var o1195 = global.Math.atan2;
    var o1196 = global.Math.o394;
    var o1197 = global.Math.o58;
    var o1198 = global.Math.ceil;
    var o1199 = global.Math.imul;
    var o1200 = o1162.o159;
    var o1201 = o1162.o95;
    var o1202 = o1162.o1158;
    var o1203 = o1162.o1159;
    var o1204 = o1162.o111;
    var o1205 = o1162.o548;
    var o1206 = o1162.o762;
    var o1207 = o1162.o552;
    var o1208 = o1162.o424;
    var o1209 = o1162.o418;
    var o1210 = o1162.o1150;
    var o1211 = o1162.o413;
    var o1212 = o1162.o547;
    var o1213 = o1162.o551;
    var o838 = 0.0;
    // EMSCRIPTEN_START_FUNCS
    function o1214(o295) {
        o295 = o295 | 0;
        var o374 = 0;
        o374 = o106;
        o106 = o106 + o295 | 0;
        o106 = o106 + 7 & -8;
        return o374 | 0
    }

    function o1215() {
        return o106 | 0
    }

    function o1216(o295) {
        o295 = o295 | 0;
        o106 = o295
    }

    function o1217(o295, o374) {
        o295 = o295 | 0;
        o374 = o374 | 0;
        if ((o841 | 0) == 0) {
            o841 = o295;
            o1166 = o374
        }
    }

    function o1218(o374) {
        o374 = o374 | 0;
        o295[o139] = o295[o374];
        o295[o139 + 1 | 0] = o295[o374 + 1 | 0];
        o295[o139 + 2 | 0] = o295[o374 + 2 | 0];
        o295[o139 + 3 | 0] = o295[o374 + 3 | 0]
    }

    function o1219(o374) {
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

    function o1220(o295) {
        o295 = o295 | 0;
        o1175 = o295
    }

    function o1221(o295) {
        o295 = o295 | 0;
        o1176 = o295
    }

    function o1222(o295) {
        o295 = o295 | 0;
        o1177 = o295
    }

    function o1223(o295) {
        o295 = o295 | 0;
        o1178 = o295
    }

    function o1224(o295) {
        o295 = o295 | 0;
        o1179 = o295
    }

    function o1225(o295) {
        o295 = o295 | 0;
        o1180 = o295
    }

    function o1226(o295) {
        o295 = o295 | 0;
        o1181 = o295
    }

    function o1227(o295) {
        o295 = o295 | 0;
        o1182 = o295
    }

    function o1228(o295) {
        o295 = o295 | 0;
        o1183 = o295
    }

    function o1229(o295) {
        o295 = o295 | 0;
        o1184 = o295
    }

    function o1230() {
        var o374 = 0,
            o1163 = 0,
            o232 = 0,
            o45 = 0;
        o374 = o106;
        o1205() | 0;
        o1205() | 0;
        o1163 = o1231(48) | 0;
        o310[2] = o1163;
        o232 = o1231(48) | 0;
        o310[4] = o232;
        o310[o232 >> 2] = o1163;
        o310[o232 + 4 >> 2] = 0;
        o310[o232 + 8 >> 2] = 10001;
        o310[o232 + 12 >> 2] = 40;
        o1163 = o232 + 16 | 0;
        o232 = 24 | 0;
        o45 = o1163 + 31 | 0;
        do {
            o295[o1163] = o295[o232] | 0;
            o1163 = o1163 + 1 | 0;
            o232 = o232 + 1 | 0
        } while ((o1163 | 0) < (o45 | 0));
        o310[1716 >> 2] = 10;
        o1205() | 0;
        o232 = 0;
        do {
            o295[10688] = 65;
            o295[10680] = 66;
            o310[2616] = 1;
            o310[10504 >> 2] = 7;
            o310[10508 >> 2] = 7;
            o310[10624 >> 2] = 8;
            o310[1720 >> 2] = 8;
            o310[1724 >> 2] = 8;
            o310[1716 >> 2] = (o310[1716 >> 2] | 0) + 1;
            o310[5800 >> 2] = 7;
            o310[2674] = 5;
            o1163 = o310[4] | 0;
            o310[o1163 + 12 >> 2] = 5;
            o45 = o310[o1163 >> 2] | 0;
            o310[o45 + 12 >> 2] = 5;
            o310[o45 >> 2] = o45;
            o45 = o295[10680] | 0;
            if (!(o45 << 24 >> 24 < 65)) {
                o1163 = 65;
                do {
                    o1163 = o1163 + 1 << 24 >> 24;
                } while (!(o1163 << 24 >> 24 > o45 << 24 >> 24))
            }
            o232 = o232 + 1 | 0;
        } while ((o232 | 0) != 1e8);
        o106 = o374;
        return 0
    }

    function o1231(o295) {
        o295 = o295 | 0;
        var o374 = 0,
            o1163 = 0,
            o232 = 0,
            o45 = 0,
            o1164 = 0,
            o86 = 0,
            o1165 = 0,
            o139 = 0,
            o85 = 0,
            o841 = 0,
            o1166 = 0,
            o1167 = 0,
            o680 = 0,
            o1168 = 0,
            o986 = 0,
            o1170 = 0,
            o275 = 0,
            o1171 = 0,
            o1172 = 0,
            o1146 = 0,
            o30 = 0,
            o84 = 0,
            o1173 = 0,
            o1174 = 0,
            o1175 = 0,
            o1176 = 0,
            o1177 = 0,
            o1178 = 0,
            o1179 = 0,
            o1180 = 0,
            o1181 = 0,
            o1182 = 0,
            o1183 = 0,
            o1184 = 0,
            o1185 = 0,
            o1186 = 0,
            o1187 = 0,
            o1188 = 0,
            o1189 = 0,
            o1190 = 0,
            o1191 = 0,
            o1192 = 0,
            o1193 = 0,
            o1194 = 0,
            o1195 = 0,
            o1196 = 0,
            o1197 = 0,
            o1198 = 0,
            o1199 = 0,
            o1200 = 0,
            o1201 = 0,
            o1202 = 0,
            o1203 = 0,
            o1204 = 0,
            o1205 = 0,
            o1206 = 0,
            o1208 = 0,
            o1211 = 0,
            o838 = 0,
            o1214 = 0,
            o1215 = 0,
            o1216 = 0,
            o1217 = 0,
            o1218 = 0,
            o1219 = 0,
            o1220 = 0,
            o1221 = 0,
            o1222 = 0,
            o1223 = 0,
            o1224 = 0,
            o1225 = 0,
            o1226 = 0,
            o1227 = 0,
            o1228 = 0,
            o1229 = 0,
            o1230 = 0,
            o1231 = 0,
            o1232 = 0,
            o1233 = 0,
            o1234 = 0,
            o1235 = 0,
            o1236 = 0,
            o1237 = 0,
            o1238 = 0,
            o1239 = 0,
            o1240 = 0,
            o1241 = 0,
            o1242 = 0,
            o1243 = 0,
            o1244 = 0,
            o1245 = 0;
        o374 = o106;
        do {
            if (o295 >>> 0 < 245) {
                if (o295 >>> 0 < 11) {
                    o1163 = 16
                } else {
                    o1163 = o295 + 11 & -8
                }
                o232 = o1163 >>> 3;
                o45 = o310[2676] | 0;
                o1164 = o45 >>> o232;
                if ((o1164 & 3 | 0) != 0) {
                    o86 = (o1164 & 1 ^ 1) + o232 | 0;
                    o1165 = o86 << 1;
                    o139 = 10744 + (o1165 << 2) | 0;
                    o85 = 10744 + (o1165 + 2 << 2) | 0;
                    o1165 = o310[o85 >> 2] | 0;
                    o841 = o1165 + 8 | 0;
                    o1166 = o310[o841 >> 2] | 0;
                    do {
                        if ((o139 | 0) == (o1166 | 0)) {
                            o310[2676] = o45 & ~(1 << o86)
                        } else {
                            if (o1166 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                                o1207()
                            }
                            o1167 = o1166 + 12 | 0;
                            if ((o310[o1167 >> 2] | 0) == (o1165 | 0)) {
                                o310[o1167 >> 2] = o139;
                                o310[o85 >> 2] = o1166;
                                break
                            } else {
                                o1207()
                            }
                        }
                    } while (0);
                    o1166 = o86 << 3;
                    o310[o1165 + 4 >> 2] = o1166 | 3;
                    o85 = o1165 + (o1166 | 4) | 0;
                    o310[o85 >> 2] = o310[o85 >> 2] | 1;
                    o680 = o841;
                    o106 = o374;
                    return o680 | 0
                }
                if (!(o1163 >>> 0 > (o310[10712 >> 2] | 0) >>> 0)) {
                    o1168 = o1163;
                    break
                }
                if ((o1164 | 0) != 0) {
                    o85 = 2 << o232;
                    o1166 = o1164 << o232 & (o85 | 0 - o85);
                    o85 = (o1166 & 0 - o1166) + -1 | 0;
                    o1166 = o85 >>> 12 & 16;
                    o139 = o85 >>> o1166;
                    o85 = o139 >>> 5 & 8;
                    o1167 = o139 >>> o85;
                    o139 = o1167 >>> 2 & 4;
                    o986 = o1167 >>> o139;
                    o1167 = o986 >>> 1 & 2;
                    o1170 = o986 >>> o1167;
                    o986 = o1170 >>> 1 & 1;
                    o275 = (o85 | o1166 | o139 | o1167 | o986) + (o1170 >>> o986) | 0;
                    o986 = o275 << 1;
                    o1170 = 10744 + (o986 << 2) | 0;
                    o1167 = 10744 + (o986 + 2 << 2) | 0;
                    o986 = o310[o1167 >> 2] | 0;
                    o139 = o986 + 8 | 0;
                    o1166 = o310[o139 >> 2] | 0;
                    do {
                        if ((o1170 | 0) == (o1166 | 0)) {
                            o310[2676] = o45 & ~(1 << o275)
                        } else {
                            if (o1166 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                                o1207()
                            }
                            o85 = o1166 + 12 | 0;
                            if ((o310[o85 >> 2] | 0) == (o986 | 0)) {
                                o310[o85 >> 2] = o1170;
                                o310[o1167 >> 2] = o1166;
                                break
                            } else {
                                o1207()
                            }
                        }
                    } while (0);
                    o1166 = o275 << 3;
                    o1167 = o1166 - o1163 | 0;
                    o310[o986 + 4 >> 2] = o1163 | 3;
                    o1170 = o986;
                    o45 = o1170 + o1163 | 0;
                    o310[o1170 + (o1163 | 4) >> 2] = o1167 | 1;
                    o310[o1170 + o1166 >> 2] = o1167;
                    o1166 = o310[10712 >> 2] | 0;
                    if ((o1166 | 0) != 0) {
                        o1170 = o310[10724 >> 2] | 0;
                        o232 = o1166 >>> 3;
                        o1166 = o232 << 1;
                        o1164 = 10744 + (o1166 << 2) | 0;
                        o841 = o310[2676] | 0;
                        o1165 = 1 << o232;
                        do {
                            if ((o841 & o1165 | 0) == 0) {
                                o310[2676] = o841 | o1165;
                                o1171 = 10744 + (o1166 + 2 << 2) | 0;
                                o1172 = o1164
                            } else {
                                o232 = 10744 + (o1166 + 2 << 2) | 0;
                                o86 = o310[o232 >> 2] | 0;
                                if (!(o86 >>> 0 < (o310[10720 >> 2] | 0) >>> 0)) {
                                    o1171 = o232;
                                    o1172 = o86;
                                    break
                                }
                                o1207()
                            }
                        } while (0);
                        o310[o1171 >> 2] = o1170;
                        o310[o1172 + 12 >> 2] = o1170;
                        o310[o1170 + 8 >> 2] = o1172;
                        o310[o1170 + 12 >> 2] = o1164
                    }
                    o310[10712 >> 2] = o1167;
                    o310[10724 >> 2] = o45;
                    o680 = o139;
                    o106 = o374;
                    return o680 | 0
                }
                o1166 = o310[10708 >> 2] | 0;
                if ((o1166 | 0) == 0) {
                    o1168 = o1163;
                    break
                }
                o1165 = (o1166 & 0 - o1166) + -1 | 0;
                o1166 = o1165 >>> 12 & 16;
                o841 = o1165 >>> o1166;
                o1165 = o841 >>> 5 & 8;
                o986 = o841 >>> o1165;
                o841 = o986 >>> 2 & 4;
                o275 = o986 >>> o841;
                o986 = o275 >>> 1 & 2;
                o86 = o275 >>> o986;
                o275 = o86 >>> 1 & 1;
                o232 = o310[11008 + ((o1165 | o1166 | o841 | o986 | o275) + (o86 >>> o275) << 2) >> 2] | 0;
                o275 = (o310[o232 + 4 >> 2] & -8) - o1163 | 0;
                o86 = o232;
                o986 = o232;
                while (1) {
                    o232 = o310[o86 + 16 >> 2] | 0;
                    if ((o232 | 0) == 0) {
                        o841 = o310[o86 + 20 >> 2] | 0;
                        if ((o841 | 0) == 0) {
                            break
                        } else {
                            o1146 = o841
                        }
                    } else {
                        o1146 = o232
                    }
                    o232 = (o310[o1146 + 4 >> 2] & -8) - o1163 | 0;
                    o841 = o232 >>> 0 < o275 >>> 0;
                    o275 = o841 ? o232 : o275;
                    o86 = o1146;
                    o986 = o841 ? o1146 : o986
                }
                o86 = o986;
                o139 = o310[10720 >> 2] | 0;
                if (o86 >>> 0 < o139 >>> 0) {
                    o1207()
                }
                o45 = o86 + o1163 | 0;
                o1167 = o45;
                if (!(o86 >>> 0 < o45 >>> 0)) {
                    o1207()
                }
                o45 = o310[o986 + 24 >> 2] | 0;
                o1164 = o310[o986 + 12 >> 2] | 0;
                do {
                    if ((o1164 | 0) == (o986 | 0)) {
                        o1170 = o986 + 20 | 0;
                        o841 = o310[o1170 >> 2] | 0;
                        if ((o841 | 0) == 0) {
                            o232 = o986 + 16 | 0;
                            o1166 = o310[o232 >> 2] | 0;
                            if ((o1166 | 0) == 0) {
                                o30 = 0;
                                break
                            } else {
                                o84 = o1166;
                                o1173 = o232
                            }
                        } else {
                            o84 = o841;
                            o1173 = o1170
                        }
                        while (1) {
                            o1170 = o84 + 20 | 0;
                            o841 = o310[o1170 >> 2] | 0;
                            if ((o841 | 0) != 0) {
                                o1173 = o1170;
                                o84 = o841;
                                continue
                            }
                            o841 = o84 + 16 | 0;
                            o1170 = o310[o841 >> 2] | 0;
                            if ((o1170 | 0) == 0) {
                                break
                            } else {
                                o84 = o1170;
                                o1173 = o841
                            }
                        }
                        if (o1173 >>> 0 < o139 >>> 0) {
                            o1207()
                        } else {
                            o310[o1173 >> 2] = 0;
                            o30 = o84;
                            break
                        }
                    } else {
                        o841 = o310[o986 + 8 >> 2] | 0;
                        if (o841 >>> 0 < o139 >>> 0) {
                            o1207()
                        }
                        o1170 = o841 + 12 | 0;
                        if ((o310[o1170 >> 2] | 0) != (o986 | 0)) {
                            o1207()
                        }
                        o232 = o1164 + 8 | 0;
                        if ((o310[o232 >> 2] | 0) == (o986 | 0)) {
                            o310[o1170 >> 2] = o1164;
                            o310[o232 >> 2] = o841;
                            o30 = o1164;
                            break
                        } else {
                            o1207()
                        }
                    }
                } while (0);
                a: do {
                    if ((o45 | 0) != 0) {
                        o1164 = o310[o986 + 28 >> 2] | 0;
                        o139 = 11008 + (o1164 << 2) | 0;
                        do {
                            if ((o986 | 0) == (o310[o139 >> 2] | 0)) {
                                o310[o139 >> 2] = o30;
                                if ((o30 | 0) != 0) {
                                    break
                                }
                                o310[10708 >> 2] = o310[10708 >> 2] & ~(1 << o1164);
                                break o295
                            } else {
                                if (o45 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                                    o1207()
                                }
                                o841 = o45 + 16 | 0;
                                if ((o310[o841 >> 2] | 0) == (o986 | 0)) {
                                    o310[o841 >> 2] = o30
                                } else {
                                    o310[o45 + 20 >> 2] = o30
                                } if ((o30 | 0) == 0) {
                                    break o295
                                }
                            }
                        } while (0);
                        if (o30 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                            o1207()
                        }
                        o310[o30 + 24 >> 2] = o45;
                        o1164 = o310[o986 + 16 >> 2] | 0;
                        do {
                            if ((o1164 | 0) != 0) {
                                if (o1164 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                                    o1207()
                                } else {
                                    o310[o30 + 16 >> 2] = o1164;
                                    o310[o1164 + 24 >> 2] = o30;
                                    break
                                }
                            }
                        } while (0);
                        o1164 = o310[o986 + 20 >> 2] | 0;
                        if ((o1164 | 0) == 0) {
                            break
                        }
                        if (o1164 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                            o1207()
                        } else {
                            o310[o30 + 20 >> 2] = o1164;
                            o310[o1164 + 24 >> 2] = o30a: do {
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
                            c[g + 24 >> 2] = xo295: do {
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
                if (o275 >>> 0 < 16) {
                    o45 = o275 + o1163 | 0;
                    o310[o986 + 4 >> 2] = o45 | 3;
                    o1164 = o86 + (o45 + 4) | 0;
                    o310[o1164 >> 2] = o310[o1164 >> 2] | 1
                } else {
                    o310[o986 + 4 >> 2] = o1163 | 3;
                    o310[o86 + (o1163 | 4) >> 2] = o275 | 1;
                    o310[o86 + (o275 + o1163) >> 2] = o275;
                    o1164 = o310[10712 >> 2] | 0;
                    if ((o1164 | 0) != 0) {
                        o45 = o310[10724 >> 2] | 0;
                        o139 = o1164 >>> 3;
                        o1164 = o139 << 1;
                        o841 = 10744 + (o1164 << 2) | 0;
                        o232 = o310[2676] | 0;
                        o1170 = 1 << o139;
                        do {
                            if ((o232 & o1170 | 0) == 0) {
                                o310[2676] = o232 | o1170;
                                o1174 = 10744 + (o1164 + 2 << 2) | 0;
                                o1175 = o841
                            } else {
                                o139 = 10744 + (o1164 + 2 << 2) | 0;
                                o1166 = o310[o139 >> 2] | 0;
                                if (!(o1166 >>> 0 < (o310[10720 >> 2] | 0) >>> 0)) {
                                    o1174 = o139;
                                    o1175 = o1166;
                                    break
                                }
                                o1207()
                            }
                        } while (0);
                        o310[o1174 >> 2] = o45;
                        o310[o1175 + 12 >> 2] = o45;
                        o310[o45 + 8 >> 2] = o1175;
                        o310[o45 + 12 >> 2] = o841
                    }
                    o310[10712 >> 2] = o275;
                    o310[10724 >> 2] = o1167
                }
                o680 = o986 + 8 | 0;
                o106 = o374;
                return o680 | 0
            } else {
                if (o295 >>> 0 > 4294967231) {
                    o1168 = -1;
                    break
                }
                o1164 = o295 + 11 | 0;
                o1170 = o1164 & -8;
                o232 = o310[10708 >> 2] | 0;
                if ((o232 | 0) == 0) {
                    o1168 = o1170;
                    break
                }
                o86 = 0 - o1170 | 0;
                o1166 = o1164 >>> 8;
                do {
                    if ((o1166 | 0) == 0) {
                        o1176 = 0
                    } else {
                        if (o1170 >>> 0 > 16777215) {
                            o1176 = 31;
                            break
                        }
                        o1164 = (o1166 + 1048320 | 0) >>> 16 & 8;
                        o139 = o1166 << o1164;
                        o1165 = (o139 + 520192 | 0) >>> 16 & 4;
                        o85 = o139 << o1165;
                        o139 = (o85 + 245760 | 0) >>> 16 & 2;
                        o1177 = 14 - (o1165 | o1164 | o139) + (o85 << o139 >>> 15) | 0;
                        o1176 = o1170 >>> (o1177 + 7 | 0) & 1 | o1177 << 1
                    }
                } while (0);
                o1166 = o310[11008 + (o1176 << 2) >> 2] | 0;
                b: do {
                    if ((o1166 | 0) == 0) {
                        o1178 = o86;
                        o1179 = 0;
                        o1180 = 0
                    } else {
                        if ((o1176 | 0) == 31) {
                            o1181 = 0
                        } else {
                            o1181 = 25 - (o1176 >>> 1) | 0
                        }
                        o986 = o86;
                        o1167 = 0;
                        o275 = o1170 << o1181;
                        o841 = o1166;
                        o45 = 0;
                        while (1) {
                            o1177 = o310[o841 + 4 >> 2] & -8;
                            o139 = o1177 - o1170 | 0;
                            if (o139 >>> 0 < o986 >>> 0) {
                                if ((o1177 | 0) == (o1170 | 0)) {
                                    o1178 = o139;
                                    o1179 = o841;
                                    o1180 = o841;
                                    break o374
                                } else {
                                    o1182 = o139;
                                    o1183 = o841
                                }
                            } else {
                                o1182 = o986;
                                o1183 = o45
                            }
                            o139 = o310[o841 + 20 >> 2] | 0;
                            o1177 = o310[o841 + (o275 >>> 31 << 2) + 16 >> 2] | 0;
                            o85 = (o139 | 0) == 0 | (o139 | 0) == (o1177 | 0) ? o1167 : o139;
                            if ((o1177 | 0) == 0) {
                                o1178 = o1182;
                                o1179 = o85;
                                o1180 = o1183;
                                break
                            } else {
                                o986 = o1182;
                                o1167 = o85;
                                o275 = o275 << 1;
                                o841 = o1177;
                                o45 = o1183b: do {
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
                                f = Jo374: do {
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
                if ((o1179 | 0) == 0 & (o1180 | 0) == 0) {
                    o1166 = 2 << o1176;
                    o86 = o232 & (o1166 | 0 - o1166);
                    if ((o86 | 0) == 0) {
                        o1168 = o1170;
                        break
                    }
                    o1166 = (o86 & 0 - o86) + -1 | 0;
                    o86 = o1166 >>> 12 & 16;
                    o45 = o1166 >>> o86;
                    o1166 = o45 >>> 5 & 8;
                    o841 = o45 >>> o1166;
                    o45 = o841 >>> 2 & 4;
                    o275 = o841 >>> o45;
                    o841 = o275 >>> 1 & 2;
                    o1167 = o275 >>> o841;
                    o275 = o1167 >>> 1 & 1;
                    o1184 = o310[11008 + ((o1166 | o86 | o45 | o841 | o275) + (o1167 >>> o275) << 2) >> 2] | 0
                } else {
                    o1184 = o1179
                } if ((o1184 | 0) == 0) {
                    o1185 = o1178;
                    o1186 = o1180
                } else {
                    o275 = o1178;
                    o1167 = o1184;
                    o841 = o1180;
                    while (1) {
                        o45 = (o310[o1167 + 4 >> 2] & -8) - o1170 | 0;
                        o86 = o45 >>> 0 < o275 >>> 0;
                        o1166 = o86 ? o45 : o275;
                        o45 = o86 ? o1167 : o841;
                        o86 = o310[o1167 + 16 >> 2] | 0;
                        if ((o86 | 0) != 0) {
                            o1187 = o45;
                            o1188 = o1166;
                            o841 = o1187;
                            o1167 = o86;
                            o275 = o1188;
                            continue
                        }
                        o86 = o310[o1167 + 20 >> 2] | 0;
                        if ((o86 | 0) == 0) {
                            o1185 = o1166;
                            o1186 = o45;
                            break
                        } else {
                            o1187 = o45;
                            o1188 = o1166;
                            o1167 = o86;
                            o841 = o1187;
                            o275 = o1188
                        }
                    }
                } if ((o1186 | 0) == 0) {
                    o1168 = o1170;
                    break
                }
                if (!(o1185 >>> 0 < ((o310[10712 >> 2] | 0) - o1170 | 0) >>> 0)) {
                    o1168 = o1170;
                    break
                }
                o275 = o1186;
                o841 = o310[10720 >> 2] | 0;
                if (o275 >>> 0 < o841 >>> 0) {
                    o1207()
                }
                o1167 = o275 + o1170 | 0;
                o232 = o1167;
                if (!(o275 >>> 0 < o1167 >>> 0)) {
                    o1207()
                }
                o86 = o310[o1186 + 24 >> 2] | 0;
                o1166 = o310[o1186 + 12 >> 2] | 0;
                do {
                    if ((o1166 | 0) == (o1186 | 0)) {
                        o45 = o1186 + 20 | 0;
                        o986 = o310[o45 >> 2] | 0;
                        if ((o986 | 0) == 0) {
                            o1177 = o1186 + 16 | 0;
                            o85 = o310[o1177 >> 2] | 0;
                            if ((o85 | 0) == 0) {
                                o1189 = 0;
                                break
                            } else {
                                o1190 = o85;
                                o1191 = o1177
                            }
                        } else {
                            o1190 = o986;
                            o1191 = o45
                        }
                        while (1) {
                            o45 = o1190 + 20 | 0;
                            o986 = o310[o45 >> 2] | 0;
                            if ((o986 | 0) != 0) {
                                o1191 = o45;
                                o1190 = o986;
                                continue
                            }
                            o986 = o1190 + 16 | 0;
                            o45 = o310[o986 >> 2] | 0;
                            if ((o45 | 0) == 0) {
                                break
                            } else {
                                o1190 = o45;
                                o1191 = o986
                            }
                        }
                        if (o1191 >>> 0 < o841 >>> 0) {
                            o1207()
                        } else {
                            o310[o1191 >> 2] = 0;
                            o1189 = o1190;
                            break
                        }
                    } else {
                        o986 = o310[o1186 + 8 >> 2] | 0;
                        if (o986 >>> 0 < o841 >>> 0) {
                            o1207()
                        }
                        o45 = o986 + 12 | 0;
                        if ((o310[o45 >> 2] | 0) != (o1186 | 0)) {
                            o1207()
                        }
                        o1177 = o1166 + 8 | 0;
                        if ((o310[o1177 >> 2] | 0) == (o1186 | 0)) {
                            o310[o45 >> 2] = o1166;
                            o310[o1177 >> 2] = o986;
                            o1189 = o1166;
                            break
                        } else {
                            o1207()
                        }
                    }
                } while (0);
                c: do {
                    if ((o86 | 0) != 0) {
                        o1166 = o310[o1186 + 28 >> 2] | 0;
                        o841 = 11008 + (o1166 << 2) | 0;
                        do {
                            if ((o1186 | 0) == (o310[o841 >> 2] | 0)) {
                                o310[o841 >> 2] = o1189;
                                if ((o1189 | 0) != 0) {
                                    break
                                }
                                o310[10708 >> 2] = o310[10708 >> 2] & ~(1 << o1166);
                                break o310
                            } else {
                                if (o86 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                                    o1207()
                                }
                                o986 = o86 + 16 | 0;
                                if ((o310[o986 >> 2] | 0) == (o1186 | 0)) {
                                    o310[o986 >> 2] = o1189
                                } else {
                                    o310[o86 + 20 >> 2] = o1189
                                } if ((o1189 | 0) == 0) {
                                    break o310
                                }
                            }
                        } while (0);
                        if (o1189 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                            o1207()
                        }
                        o310[o1189 + 24 >> 2] = o86;
                        o1166 = o310[o1186 + 16 >> 2] | 0;
                        do {
                            if ((o1166 | 0) != 0) {
                                if (o1166 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                                    o1207()
                                } else {
                                    o310[o1189 + 16 >> 2] = o1166;
                                    o310[o1166 + 24 >> 2] = o1189;
                                    break
                                }
                            }
                        } while (0);
                        o1166 = o310[o1186 + 20 >> 2] | 0;
                        if ((o1166 | 0) == 0) {
                            break
                        }
                        if (o1166 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                            o1207()
                        } else {
                            o310[o1189 + 20 >> 2] = o1166;
                            o310[o1166 + 24 >> 2] = o1189c: do {
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
                            c[n + 24 >> 2] = Po310: do {
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
                    if (o1185 >>> 0 < 16) {
                        o86 = o1185 + o1170 | 0;
                        o310[o1186 + 4 >> 2] = o86 | 3;
                        o1166 = o275 + (o86 + 4) | 0;
                        o310[o1166 >> 2] = o310[o1166 >> 2] | 1
                    } else {
                        o310[o1186 + 4 >> 2] = o1170 | 3;
                        o310[o275 + (o1170 | 4) >> 2] = o1185 | 1;
                        o310[o275 + (o1185 + o1170) >> 2] = o1185;
                        o1166 = o1185 >>> 3;
                        if (o1185 >>> 0 < 256) {
                            o86 = o1166 << 1;
                            o841 = 10744 + (o86 << 2) | 0;
                            o986 = o310[2676] | 0;
                            o1177 = 1 << o1166;
                            do {
                                if ((o986 & o1177 | 0) == 0) {
                                    o310[2676] = o986 | o1177;
                                    o1192 = 10744 + (o86 + 2 << 2) | 0;
                                    o1193 = o841
                                } else {
                                    o1166 = 10744 + (o86 + 2 << 2) | 0;
                                    o45 = o310[o1166 >> 2] | 0;
                                    if (!(o45 >>> 0 < (o310[10720 >> 2] | 0) >>> 0)) {
                                        o1192 = o1166;
                                        o1193 = o45;
                                        break
                                    }
                                    o1207()
                                }
                            } while (0);
                            o310[o1192 >> 2] = o232;
                            o310[o1193 + 12 >> 2] = o232;
                            o310[o275 + (o1170 + 8) >> 2] = o1193;
                            o310[o275 + (o1170 + 12) >> 2] = o841;
                            break
                        }
                        o86 = o1167;
                        o1177 = o1185 >>> 8;
                        do {
                            if ((o1177 | 0) == 0) {
                                o1194 = 0
                            } else {
                                if (o1185 >>> 0 > 16777215) {
                                    o1194 = 31;
                                    break
                                }
                                o986 = (o1177 + 1048320 | 0) >>> 16 & 8;
                                o45 = o1177 << o986;
                                o1166 = (o45 + 520192 | 0) >>> 16 & 4;
                                o85 = o45 << o1166;
                                o45 = (o85 + 245760 | 0) >>> 16 & 2;
                                o139 = 14 - (o1166 | o986 | o45) + (o85 << o45 >>> 15) | 0;
                                o1194 = o1185 >>> (o139 + 7 | 0) & 1 | o139 << 1
                            }
                        } while (0);
                        o1177 = 11008 + (o1194 << 2) | 0;
                        o310[o275 + (o1170 + 28) >> 2] = o1194;
                        o310[o275 + (o1170 + 20) >> 2] = 0;
                        o310[o275 + (o1170 + 16) >> 2] = 0;
                        o841 = o310[10708 >> 2] | 0;
                        o139 = 1 << o1194;
                        if ((o841 & o139 | 0) == 0) {
                            o310[10708 >> 2] = o841 | o139;
                            o310[o1177 >> 2] = o86;
                            o310[o275 + (o1170 + 24) >> 2] = o1177;
                            o310[o275 + (o1170 + 12) >> 2] = o86;
                            o310[o275 + (o1170 + 8) >> 2] = o86;
                            break
                        }
                        o139 = o310[o1177 >> 2] | 0;
                        if ((o1194 | 0) == 31) {
                            o1195 = 0
                        } else {
                            o1195 = 25 - (o1194 >>> 1) | 0
                        }
                        e: do {
                            if ((o310[o139 + 4 >> 2] & -8 | 0) == (o1185 | 0)) {
                                o1196 = o139
                            } else {
                                o1177 = o1185 << o1195;
                                o841 = o139;
                                while (1) {
                                    o1197 = o841 + (o1177 >>> 31 << 2) + 16 | 0;
                                    o45 = o310[o1197 >> 2] | 0;
                                    if ((o45 | 0) == 0) {
                                        break
                                    }
                                    if ((o310[o45 + 4 >> 2] & -8 | 0) == (o1185 | 0)) {
                                        o1196 = o45;
                                        break o232
                                    } else {
                                        o1177 = o1177 << 1;
                                        o841 = o45
                                    }
                                }
                                if (o1197 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                                    o1207()
                                } else {
                                    o310[o1197 >> 2] = o86;
                                    o310[o275 + (o1170 + 24) >> 2] = o841;
                                    o310[o275 + (o1170 + 12) >> 2] = o86;
                                    o310[o275 + (o1170 + 8) >> 2] = o86;
                                    break o1163e: do {
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
                                    break do232: do {
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
                        o139 = o1196 + 8 | 0;
                        o1177 = o310[o139 >> 2] | 0;
                        o45 = o310[10720 >> 2] | 0;
                        if (o1196 >>> 0 < o45 >>> 0) {
                            o1207()
                        }
                        if (o1177 >>> 0 < o45 >>> 0) {
                            o1207()
                        } else {
                            o310[o1177 + 12 >> 2] = o86;
                            o310[o139 >> 2] = o86;
                            o310[o275 + (o1170 + 8) >> 2] = o1177;
                            o310[o275 + (o1170 + 12) >> 2] = o1196;
                            o310[o275 + (o1170d: do {
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
                            c[t + (so1163: do {
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
                o680 = o1186 + 8 | 0;
                o106 = o374;
                return o680 | 0
            }
        } while (0);
        o1186 = o310[10712 >> 2] | 0;
        if (!(o1168 >>> 0 > o1186 >>> 0)) {
            o1196 = o1186 - o1168 | 0;
            o1197 = o310[10724 >> 2] | 0;
            if (o1196 >>> 0 > 15) {
                o1185 = o1197;
                o310[10724 >> 2] = o1185 + o1168;
                o310[10712 >> 2] = o1196;
                o310[o1185 + (o1168 + 4) >> 2] = o1196 | 1;
                o310[o1185 + o1186 >> 2] = o1196;
                o310[o1197 + 4 >> 2] = o1168 | 3
            } else {
                o310[10712 >> 2] = 0;
                o310[10724 >> 2] = 0;
                o310[o1197 + 4 >> 2] = o1186 | 3;
                o1196 = o1197 + (o1186 + 4) | 0;
                o310[o1196 >> 2] = o310[o1196 >> 2] | 1
            }
            o680 = o1197 + 8 | 0;
            o106 = o374;
            return o680 | 0
        }
        o1197 = o310[10716 >> 2] | 0;
        if (o1168 >>> 0 < o1197 >>> 0) {
            o1196 = o1197 - o1168 | 0;
            o310[10716 >> 2] = o1196;
            o1197 = o310[10728 >> 2] | 0;
            o1186 = o1197;
            o310[10728 >> 2] = o1186 + o1168;
            o310[o1186 + (o1168 + 4) >> 2] = o1196 | 1;
            o310[o1197 + 4 >> 2] = o1168 | 3;
            o680 = o1197 + 8 | 0;
            o106 = o374;
            return o680 | 0
        }
        do {
            if ((o310[2794] | 0) == 0) {
                o1197 = o1212(30) | 0;
                if ((o1197 + -1 & o1197 | 0) == 0) {
                    o310[11184 >> 2] = o1197;
                    o310[11180 >> 2] = o1197;
                    o310[11188 >> 2] = -1;
                    o310[11192 >> 2] = -1;
                    o310[11196 >> 2] = 0;
                    o310[11148 >> 2] = 0;
                    o310[2794] = (o1210(0) | 0) & -16 ^ 1431655768;
                    break
                } else {
                    o1207()
                }
            }
        } while (0);
        o1197 = o1168 + 48 | 0;
        o1196 = o310[11184 >> 2] | 0;
        o1186 = o1168 + 47 | 0;
        o1185 = o1196 + o1186 | 0;
        o1195 = 0 - o1196 | 0;
        o1196 = o1185 & o1195;
        if (!(o1196 >>> 0 > o1168 >>> 0)) {
            o680 = 0;
            o106 = o374;
            return o680 | 0
        }
        o1194 = o310[11144 >> 2] | 0;
        do {
            if ((o1194 | 0) != 0) {
                o1193 = o310[11136 >> 2] | 0;
                o1192 = o1193 + o1196 | 0;
                if (o1192 >>> 0 <= o1193 >>> 0 | o1192 >>> 0 > o1194 >>> 0) {
                    o680 = 0
                } else {
                    break
                }
                o106 = o374;
                return o680 | 0
            }
        } while (0);
        f: do {
            if ((o310[11148 >> 2] & 4 | 0) == 0) {
                o1194 = o310[10728 >> 2] | 0;
                g: do {
                    if ((o1194 | 0) == 0) {
                        o1198 = 182
                    } else {
                        o1192 = o1194;
                        o1193 = 11152 | 0;
                        while (1) {
                            o1199 = o1193;
                            o1189 = o310[o1199 >> 2] | 0;
                            if (!(o1189 >>> 0 > o1192 >>> 0)) {
                                o1200 = o1193 + 4 | 0;
                                if ((o1189 + (o310[o1200 >> 2] | 0) | 0) >>> 0 > o1192 >>> 0) {
                                    break
                                }
                            }
                            o1189 = o310[o1193 + 8 >> 2] | 0;
                            if ((o1189 | 0) == 0) {
                                o1198 = 182;
                                break o1164
                            } else {
                                o1193 = o1189
                            }
                        }
                        if ((o1193 | 0) == 0) {
                            o1198 = 182;
                            break
                        }
                        o1192 = o1185 - (o310[10716 >> 2] | 0) & o1195;
                        if (!(o1192 >>> 0 < 2147483647)) {
                            o1201 = 0;
                            break
                        }
                        o86 = o1209(o1192 | 0) | 0;
                        o1189 = (o86 | 0) == ((o310[o1199 >> 2] | 0) + (o310[o1200 >> 2] | 0) | 0);
                        o1202 = o86;
                        o1203 = o1192;
                        o1204 = o1189 ? o86 : -1;
                        o1205 = o1189 ? o1192 : 0;
                        o1198g: do {
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
                        Yo1164: do {
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
                    if ((o1198 | 0) == 182) {
                        o1194 = o1209(0) | 0;
                        if ((o1194 | 0) == (-1 | 0)) {
                            o1201 = 0;
                            break
                        }
                        o1192 = o1194;
                        o1189 = o310[11180 >> 2] | 0;
                        o86 = o1189 + -1 | 0;
                        if ((o86 & o1192 | 0) == 0) {
                            o1206 = o1196
                        } else {
                            o1206 = o1196 - o1192 + (o86 + o1192 & 0 - o1189) | 0
                        }
                        o1189 = o310[11136 >> 2] | 0;
                        o1192 = o1189 + o1206 | 0;
                        if (!(o1206 >>> 0 > o1168 >>> 0 & o1206 >>> 0 < 2147483647)) {
                            o1201 = 0;
                            break
                        }
                        o86 = o310[11144 >> 2] | 0;
                        if ((o86 | 0) != 0) {
                            if (o1192 >>> 0 <= o1189 >>> 0 | o1192 >>> 0 > o86 >>> 0) {
                                o1201 = 0;
                                break
                            }
                        }
                        o86 = o1209(o1206 | 0) | 0;
                        o1192 = (o86 | 0) == (o1194 | 0);
                        o1202 = o86;
                        o1203 = o1206;
                        o1204 = o1192 ? o1194 : -1;
                        o1205 = o1192 ? o1206 : 0;
                        o1198 = 191
                    }
                } while (0);
                h: do {
                    if ((o1198 | 0) == 191) {
                        o1192 = 0 - o1203 | 0;
                        if ((o1204 | 0) != (-1 | 0)) {
                            o1208 = o1204;
                            o1211 = o1205;
                            o1198 = 202;
                            break o45
                        }
                        do {
                            if ((o1202 | 0) != (-1 | 0) & o1203 >>> 0 < 2147483647 & o1203 >>> 0 < o1197 >>> 0) {
                                o1194 = o310[11184 >> 2] | 0;
                                o86 = o1186 - o1203 + o1194 & 0 - o1194;
                                if (!(o86 >>> 0 < 2147483647)) {
                                    o838 = o1203;
                                    break
                                }
                                if ((o1209(o86 | 0) | 0) == (-1 | 0)) {
                                    o1209(o1192 | 0) | 0;
                                    o1201 = o1205;
                                    break o86
                                } else {
                                    o838 = o86 + o1203 | 0;
                                    break
                                }
                            } else {
                                o838 = o1203
                            }
                        } while (0);
                        if ((o1202 | 0) == (-1 | 0)) {
                            o1201 = o1205
                        } else {
                            o1208 = o1202;
                            o1211 = o838;
                            o1198 = 202;
                            break o45h: do {
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
                            break fo86: do {
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
                o310[11148 >> 2] = o310[11148 >> 2] | 4;
                o1214 = o1201;
                o1198 = 199
            } else {
                o1214 = 0;
                o1198f: do {
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
                Yo45: do {
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
            if ((o1198 | 0) == 199) {
                if (!(o1196 >>> 0 < 2147483647)) {
                    break
                }
                o1201 = o1209(o1196 | 0) | 0;
                o838 = o1209(0) | 0;
                if (!((o838 | 0) != (-1 | 0) & (o1201 | 0) != (-1 | 0) & o1201 >>> 0 < o838 >>> 0)) {
                    break
                }
                o1202 = o838 - o1201 | 0;
                o838 = o1202 >>> 0 > (o1168 + 40 | 0) >>> 0;
                if (o838) {
                    o1208 = o1201;
                    o1211 = o838 ? o1202 : o1214;
                    o1198 = 202
                }
            }
        } while (0);
        do {
            if ((o1198 | 0) == 202) {
                o1214 = (o310[11136 >> 2] | 0) + o1211 | 0;
                o310[11136 >> 2] = o1214;
                if (o1214 >>> 0 > (o310[11140 >> 2] | 0) >>> 0) {
                    o310[11140 >> 2] = o1214
                }
                o1214 = o310[10728 >> 2] | 0;
                i: do {
                    if ((o1214 | 0) == 0) {
                        o1196 = o310[10720 >> 2] | 0;
                        if ((o1196 | 0) == 0 | o1208 >>> 0 < o1196 >>> 0) {
                            o310[10720 >> 2] = o1208
                        }
                        o310[11152 >> 2] = o1208;
                        o310[11156 >> 2] = o1211;
                        o310[11164 >> 2] = 0;
                        o310[10740 >> 2] = o310[2794];
                        o310[10736 >> 2] = -1;
                        o1196 = 0;
                        do {
                            o1202 = o1196 << 1;
                            o838 = 10744 + (o1202 << 2) | 0;
                            o310[10744 + (o1202 + 3 << 2) >> 2] = o838;
                            o310[10744 + (o1202 + 2 << 2) >> 2] = o838;
                            o1196 = o1196 + 1 | 0;
                        } while ((o1196 | 0) != 32);
                        o1196 = o1208 + 8 | 0;
                        if ((o1196 & 7 | 0) == 0) {
                            o1215 = 0
                        } else {
                            o1215 = 0 - o1196 & 7
                        }
                        o1196 = o1211 + -40 - o1215 | 0;
                        o310[10728 >> 2] = o1208 + o1215;
                        o310[10716 >> 2] = o1196;
                        o310[o1208 + (o1215 + 4) >> 2] = o1196 | 1;
                        o310[o1208 + (o1211 + -36) >> 2] = 40;
                        o310[10732 >> 2] = o310[11192 >> 2]
                    } else {
                        o1196 = 11152 | 0;
                        while (1) {
                            o1216 = o310[o1196 >> 2] | 0;
                            o1217 = o1196 + 4 | 0;
                            o1218 = o310[o1217 >> 2] | 0;
                            if ((o1208 | 0) == (o1216 + o1218 | 0)) {
                                o1198 = 214;
                                break
                            }
                            o838 = o310[o1196 + 8 >> 2] | 0;
                            if ((o838 | 0) == 0) {
                                break
                            } else {
                                o1196 = o838
                            }
                        }
                        do {
                            if ((o1198 | 0) == 214) {
                                if ((o310[o1196 + 12 >> 2] & 8 | 0) != 0) {
                                    break
                                }
                                o838 = o1214;
                                if (!(o838 >>> 0 >= o1216 >>> 0 & o838 >>> 0 < o1208 >>> 0)) {
                                    break
                                }
                                o310[o1217 >> 2] = o1218 + o1211;
                                o1202 = (o310[10716 >> 2] | 0) + o1211 | 0;
                                o1201 = o1214 + 8 | 0;
                                if ((o1201 & 7 | 0) == 0) {
                                    o1219 = 0
                                } else {
                                    o1219 = 0 - o1201 & 7
                                }
                                o1201 = o1202 - o1219 | 0;
                                o310[10728 >> 2] = o838 + o1219;
                                o310[10716 >> 2] = o1201;
                                o310[o838 + (o1219 + 4) >> 2] = o1201 | 1;
                                o310[o838 + (o1202 + 4) >> 2] = 40;
                                o310[10732 >> 2] = o310[11192 >> 2];
                                break o106
                            }
                        } while (0);
                        if (o1208 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                            o310[10720 >> 2] = o1208
                        }
                        o1196 = o1208 + o1211 | 0;
                        o1202 = 11152 | 0;
                        while (1) {
                            o1220 = o1202;
                            if ((o310[o1220 >> 2] | 0) == (o1196 | 0)) {
                                o1198 = 224;
                                break
                            }
                            o838 = o310[o1202 + 8 >> 2] | 0;
                            if ((o838 | 0) == 0) {
                                break
                            } else {
                                o1202 = o838
                            }
                        }
                        do {
                            if ((o1198 | 0) == 224) {
                                if ((o310[o1202 + 12 >> 2] & 8 | 0) != 0) {
                                    break
                                }
                                o310[o1220 >> 2] = o1208;
                                o1196 = o1202 + 4 | 0;
                                o310[o1196 >> 2] = (o310[o1196 >> 2] | 0) + o1211;
                                o1196 = o1208 + 8 | 0;
                                if ((o1196 & 7 | 0) == 0) {
                                    o1221 = 0
                                } else {
                                    o1221 = 0 - o1196 & 7
                                }
                                o1196 = o1208 + (o1211 + 8) | 0;
                                if ((o1196 & 7 | 0) == 0) {
                                    o1222 = 0
                                } else {
                                    o1222 = 0 - o1196 & 7
                                }
                                o1196 = o1208 + (o1222 + o1211) | 0;
                                o838 = o1196;
                                o1201 = o1221 + o1168 | 0;
                                o1205 = o1208 + o1201 | 0;
                                o1203 = o1205;
                                o1186 = o1196 - (o1208 + o1221) - o1168 | 0;
                                o310[o1208 + (o1221 + 4) >> 2] = o1168 | 3;
                                j: do {
                                    if ((o838 | 0) == (o310[10728 >> 2] | 0)) {
                                        o1197 = (o310[10716 >> 2] | 0) + o1186 | 0;
                                        o310[10716 >> 2] = o1197;
                                        o310[10728 >> 2] = o1203;
                                        o310[o1208 + (o1201 + 4) >> 2] = o1197 | 1
                                    } else {
                                        if ((o838 | 0) == (o310[10724 >> 2] | 0)) {
                                            o1197 = (o310[10712 >> 2] | 0) + o1186 | 0;
                                            o310[10712 >> 2] = o1197;
                                            o310[10724 >> 2] = o1203;
                                            o310[o1208 + (o1201 + 4) >> 2] = o1197 | 1;
                                            o310[o1208 + (o1197 + o1201) >> 2] = o1197;
                                            break
                                        }
                                        o1197 = o1211 + 4 | 0;
                                        o1204 = o310[o1208 + (o1197 + o1222) >> 2] | 0;
                                        if ((o1204 & 3 | 0) == 1) {
                                            o1206 = o1204 & -8;
                                            o1200 = o1204 >>> 3;
                                            k: do {
                                                if (o1204 >>> 0 < 256) {
                                                    o1199 = o310[o1208 + ((o1222 | 8) + o1211) >> 2] | 0;
                                                    o1195 = o310[o1208 + (o1211 + 12 + o1222) >> 2] | 0;
                                                    o1185 = 10744 + (o1200 << 1 << 2) | 0;
                                                    do {
                                                        if ((o1199 | 0) != (o1185 | 0)) {
                                                            if (o1199 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                                                                o1207()
                                                            }
                                                            if ((o310[o1199 + 12 >> 2] | 0) == (o838 | 0)) {
                                                                break
                                                            }
                                                            o1207()
                                                        }
                                                    } while (0);
                                                    if ((o1195 | 0) == (o1199 | 0)) {
                                                        o310[2676] = o310[2676] & ~(1 << o1200);
                                                        break
                                                    }
                                                    do {
                                                        if ((o1195 | 0) == (o1185 | 0)) {
                                                            o1223 = o1195 + 8 | 0
                                                        } else {
                                                            if (o1195 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                                                                o1207()
                                                            }
                                                            o1192 = o1195 + 8 | 0;
                                                            if ((o310[o1192 >> 2] | 0) == (o838 | 0)) {
                                                                o1223 = o1192;
                                                                break
                                                            }
                                                            o1207()
                                                        }
                                                    } while (0);
                                                    o310[o1199 + 12 >> 2] = o1195;
                                                    o310[o1223 >> 2] = o1199
                                                } else {
                                                    o1185 = o1196;
                                                    o1192 = o310[o1208 + ((o1222 | 24) + o1211) >> 2] | 0;
                                                    o1193 = o310[o1208 + (o1211 + 12 + o1222) >> 2] | 0;
                                                    do {
                                                        if ((o1193 | 0) == (o1185 | 0)) {
                                                            o86 = o1222 | 16;
                                                            o1194 = o1208 + (o1197 + o86) | 0;
                                                            o1189 = o310[o1194 >> 2] | 0;
                                                            if ((o1189 | 0) == 0) {
                                                                o1190 = o1208 + (o86 + o1211) | 0;
                                                                o86 = o310[o1190 >> 2] | 0;
                                                                if ((o86 | 0) == 0) {
                                                                    o1224 = 0;
                                                                    break
                                                                } else {
                                                                    o1225 = o86;
                                                                    o1226 = o1190
                                                                }
                                                            } else {
                                                                o1225 = o1189;
                                                                o1226 = o1194
                                                            }
                                                            while (1) {
                                                                o1194 = o1225 + 20 | 0;
                                                                o1189 = o310[o1194 >> 2] | 0;
                                                                if ((o1189 | 0) != 0) {
                                                                    o1226 = o1194;
                                                                    o1225 = o1189;
                                                                    continue
                                                                }
                                                                o1189 = o1225 + 16 | 0;
                                                                o1194 = o310[o1189 >> 2] | 0;
                                                                if ((o1194 | 0) == 0) {
                                                                    break
                                                                } else {
                                                                    o1225 = o1194;
                                                                    o1226 = o1189
                                                                }
                                                            }
                                                            if (o1226 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                                                                o1207()
                                                            } else {
                                                                o310[o1226 >> 2] = 0;
                                                                o1224 = o1225;
                                                                break
                                                            }
                                                        } else {
                                                            o1189 = o310[o1208 + ((o1222 | 8) + o1211) >> 2] | 0;
                                                            if (o1189 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                                                                o1207()
                                                            }
                                                            o1194 = o1189 + 12 | 0;
                                                            if ((o310[o1194 >> 2] | 0) != (o1185 | 0)) {
                                                                o1207()
                                                            }
                                                            o1190 = o1193 + 8 | 0;
                                                            if ((o310[o1190 >> 2] | 0) == (o1185 | 0)) {
                                                                o310[o1194 >> 2] = o1193;
                                                                o310[o1190 >> 2] = o1189;
                                                                o1224 = o1193;
                                                                break
                                                            } else {
                                                                o1207()
                                                            }
                                                        }
                                                    } while (0);
                                                    if ((o1192 | 0) == 0) {
                                                        break
                                                    }
                                                    o1193 = o310[o1208 + (o1211 + 28 + o1222) >> 2] | 0;
                                                    o1199 = 11008 + (o1193 << 2) | 0;
                                                    do {
                                                        if ((o1185 | 0) == (o310[o1199 >> 2] | 0)) {
                                                            o310[o1199 >> 2] = o1224;
                                                            if ((o1224 | 0) != 0) {
                                                                break
                                                            }
                                                            o310[10708 >> 2] = o310[10708 >> 2] & ~(1 << o1193);
                                                            break o139
                                                        } else {
                                                            if (o1192 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                                                                o1207()
                                                            }
                                                            o1195 = o1192 + 16 | 0;
                                                            if ((o310[o1195 >> 2] | 0) == (o1185 | 0)) {
                                                                o310[o1195 >> 2] = o1224
                                                            } else {
                                                                o310[o1192 + 20 >> 2] = o1224
                                                            } if ((o1224 | 0) == 0) {
                                                                break o139
                                                            }
                                                        }
                                                    } while (0);
                                                    if (o1224 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                                                        o1207()
                                                    }
                                                    o310[o1224 + 24 >> 2] = o1192;
                                                    o1185 = o1222 | 16;
                                                    o1193 = o310[o1208 + (o1185 + o1211) >> 2] | 0;
                                                    do {
                                                        if ((o1193 | 0) != 0) {
                                                            if (o1193 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                                                                o1207()
                                                            } else {
                                                                o310[o1224 + 16 >> 2] = o1193;
                                                                o310[o1193 + 24 >> 2] = o1224;
                                                                break
                                                            }
                                                        }
                                                    } while (0);
                                                    o1193 = o310[o1208 + (o1197 + o1185) >> 2] | 0;
                                                    if ((o1193 | 0) == 0) {
                                                        break
                                                    }
                                                    if (o1193 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                                                        o1207()
                                                    } else {
                                                        o310[o1224 + 20 >> 2] = o1193;
                                                        o310[o1193 + 24 >> 2] = o1224k: do {
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
                                                        c[T + 24 >> 2] = xao139: do {
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
                                            o1227 = o1208 + ((o1206 | o1222) + o1211) | 0;
                                            o1228 = o1206 + o1186 | 0
                                        } else {
                                            o1227 = o838;
                                            o1228 = o1186
                                        }
                                        o1197 = o1227 + 4 | 0;
                                        o310[o1197 >> 2] = o310[o1197 >> 2] & -2;
                                        o310[o1208 + (o1201 + 4) >> 2] = o1228 | 1;
                                        o310[o1208 + (o1228 + o1201) >> 2] = o1228;
                                        o1197 = o1228 >>> 3;
                                        if (o1228 >>> 0 < 256) {
                                            o1200 = o1197 << 1;
                                            o1204 = 10744 + (o1200 << 2) | 0;
                                            o1193 = o310[2676] | 0;
                                            o1192 = 1 << o1197;
                                            do {
                                                if ((o1193 & o1192 | 0) == 0) {
                                                    o310[2676] = o1193 | o1192;
                                                    o1229 = 10744 + (o1200 + 2 << 2) | 0;
                                                    o1230 = o1204
                                                } else {
                                                    o1197 = 10744 + (o1200 + 2 << 2) | 0;
                                                    o1199 = o310[o1197 >> 2] | 0;
                                                    if (!(o1199 >>> 0 < (o310[10720 >> 2] | 0) >>> 0)) {
                                                        o1229 = o1197;
                                                        o1230 = o1199;
                                                        break
                                                    }
                                                    o1207()
                                                }
                                            } while (0);
                                            o310[o1229 >> 2] = o1203;
                                            o310[o1230 + 12 >> 2] = o1203;
                                            o310[o1208 + (o1201 + 8) >> 2] = o1230;
                                            o310[o1208 + (o1201 + 12) >> 2] = o1204;
                                            break
                                        }
                                        o1200 = o1205;
                                        o1192 = o1228 >>> 8;
                                        do {
                                            if ((o1192 | 0) == 0) {
                                                o1231 = 0
                                            } else {
                                                if (o1228 >>> 0 > 16777215) {
                                                    o1231 = 31;
                                                    break
                                                }
                                                o1193 = (o1192 + 1048320 | 0) >>> 16 & 8;
                                                o1206 = o1192 << o1193;
                                                o1199 = (o1206 + 520192 | 0) >>> 16 & 4;
                                                o1197 = o1206 << o1199;
                                                o1206 = (o1197 + 245760 | 0) >>> 16 & 2;
                                                o1195 = 14 - (o1199 | o1193 | o1206) + (o1197 << o1206 >>> 15) | 0;
                                                o1231 = o1228 >>> (o1195 + 7 | 0) & 1 | o1195 << 1
                                            }
                                        } while (0);
                                        o1192 = 11008 + (o1231 << 2) | 0;
                                        o310[o1208 + (o1201 + 28) >> 2] = o1231;
                                        o310[o1208 + (o1201 + 20) >> 2] = 0;
                                        o310[o1208 + (o1201 + 16) >> 2] = 0;
                                        o1204 = o310[10708 >> 2] | 0;
                                        o1195 = 1 << o1231;
                                        if ((o1204 & o1195 | 0) == 0) {
                                            o310[10708 >> 2] = o1204 | o1195;
                                            o310[o1192 >> 2] = o1200;
                                            o310[o1208 + (o1201 + 24) >> 2] = o1192;
                                            o310[o1208 + (o1201 + 12) >> 2] = o1200;
                                            o310[o1208 + (o1201 + 8) >> 2] = o1200;
                                            break
                                        }
                                        o1195 = o310[o1192 >> 2] | 0;
                                        if ((o1231 | 0) == 31) {
                                            o1232 = 0
                                        } else {
                                            o1232 = 25 - (o1231 >>> 1) | 0
                                        }
                                        l: do {
                                            if ((o310[o1195 + 4 >> 2] & -8 | 0) == (o1228 | 0)) {
                                                o1233 = o1195
                                            } else {
                                                o1192 = o1228 << o1232;
                                                o1204 = o1195;
                                                while (1) {
                                                    o1234 = o1204 + (o1192 >>> 31 << 2) + 16 | 0;
                                                    o1206 = o310[o1234 >> 2] | 0;
                                                    if ((o1206 | 0) == 0) {
                                                        break
                                                    }
                                                    if ((o310[o1206 + 4 >> 2] & -8 | 0) == (o1228 | 0)) {
                                                        o1233 = o1206;
                                                        break o85
                                                    } else {
                                                        o1192 = o1192 << 1;
                                                        o1204 = o1206
                                                    }
                                                }
                                                if (o1234 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                                                    o1207()
                                                } else {
                                                    o310[o1234 >> 2] = o1200;
                                                    o310[o1208 + (o1201 + 24) >> 2] = o1204;
                                                    o310[o1208 + (o1201 + 12) >> 2] = o1200;
                                                    o310[o1208 + (o1201 + 8) >> 2] = o1200;
                                                    break o1165l: do {
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
                                                    break jo85: do {
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
                                        o1195 = o1233 + 8 | 0;
                                        o1192 = o310[o1195 >> 2] | 0;
                                        o1185 = o310[10720 >> 2] | 0;
                                        if (o1233 >>> 0 < o1185 >>> 0) {
                                            o1207()
                                        }
                                        if (o1192 >>> 0 < o1185 >>> 0) {
                                            o1207()
                                        } else {
                                            o310[o1192 + 12 >> 2] = o1200;
                                            o310[o1195 >> 2] = o1200;
                                            o310[o1208 + (o1201 + 8) >> 2] = o1192;
                                            o310[o1208 + (o1201 + 12) >> 2] = o1233;
                                            o310[o1208 + (o1201j: do {
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
                                            c[ga + ($o1165: do {
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
                                o680 = o1208 + (o1221 | 8) | 0;
                                o106 = o374;
                                return o680 | 0
                            }
                        } while (0);
                        o1202 = o1214;
                        o1201 = 11152 | 0;
                        while (1) {
                            o1235 = o310[o1201 >> 2] | 0;
                            if (!(o1235 >>> 0 > o1202 >>> 0)) {
                                o1236 = o310[o1201 + 4 >> 2] | 0;
                                o1237 = o1235 + o1236 | 0;
                                if (o1237 >>> 0 > o1202 >>> 0) {
                                    break
                                }
                            }
                            o1201 = o310[o1201 + 8 >> 2] | 0
                        }
                        o1201 = o1235 + (o1236 + -39) | 0;
                        if ((o1201 & 7 | 0) == 0) {
                            o1238 = 0
                        } else {
                            o1238 = 0 - o1201 & 7
                        }
                        o1201 = o1235 + (o1236 + -47 + o1238) | 0;
                        o1205 = o1201 >>> 0 < (o1214 + 16 | 0) >>> 0 ? o1202 : o1201;
                        o1201 = o1205 + 8 | 0;
                        o1203 = o1201;
                        o1186 = o1208 + 8 | 0;
                        if ((o1186 & 7 | 0) == 0) {
                            o1239 = 0
                        } else {
                            o1239 = 0 - o1186 & 7
                        }
                        o1186 = o1211 + -40 - o1239 | 0;
                        o310[10728 >> 2] = o1208 + o1239;
                        o310[10716 >> 2] = o1186;
                        o310[o1208 + (o1239 + 4) >> 2] = o1186 | 1;
                        o310[o1208 + (o1211 + -36) >> 2] = 40;
                        o310[10732 >> 2] = o310[11192 >> 2];
                        o310[o1205 + 4 >> 2] = 27;
                        o310[o1201 + 0 >> 2] = o310[11152 >> 2];
                        o310[o1201 + 4 >> 2] = o310[11156 >> 2];
                        o310[o1201 + 8 >> 2] = o310[11160 >> 2];
                        o310[o1201 + 12 >> 2] = o310[11164 >> 2];
                        o310[11152 >> 2] = o1208;
                        o310[11156 >> 2] = o1211;
                        o310[11164 >> 2] = 0;
                        o310[11160 >> 2] = o1203;
                        o1203 = o1205 + 28 | 0;
                        o310[o1203 >> 2] = 7;
                        if ((o1205 + 32 | 0) >>> 0 < o1237 >>> 0) {
                            o1201 = o1203;
                            while (1) {
                                o1203 = o1201 + 4 | 0;
                                o310[o1203 >> 2] = 7;
                                if ((o1201 + 8 | 0) >>> 0 < o1237 >>> 0) {
                                    o1201 = o1203
                                } else {
                                    break
                                }
                            }
                        }
                        if ((o1205 | 0) == (o1202 | 0)) {
                            break
                        }
                        o1201 = o1205 - o1214 | 0;
                        o1203 = o1202 + (o1201 + 4) | 0;
                        o310[o1203 >> 2] = o310[o1203 >> 2] & -2;
                        o310[o1214 + 4 >> 2] = o1201 | 1;
                        o310[o1202 + o1201 >> 2] = o1201;
                        o1203 = o1201 >>> 3;
                        if (o1201 >>> 0 < 256) {
                            o1186 = o1203 << 1;
                            o838 = 10744 + (o1186 << 2) | 0;
                            o1196 = o310[2676] | 0;
                            o841 = 1 << o1203;
                            do {
                                if ((o1196 & o841 | 0) == 0) {
                                    o310[2676] = o1196 | o841;
                                    o1240 = 10744 + (o1186 + 2 << 2) | 0;
                                    o1241 = o838
                                } else {
                                    o1203 = 10744 + (o1186 + 2 << 2) | 0;
                                    o1192 = o310[o1203 >> 2] | 0;
                                    if (!(o1192 >>> 0 < (o310[10720 >> 2] | 0) >>> 0)) {
                                        o1240 = o1203;
                                        o1241 = o1192;
                                        break
                                    }
                                    o1207()
                                }
                            } while (0);
                            o310[o1240 >> 2] = o1214;
                            o310[o1241 + 12 >> 2] = o1214;
                            o310[o1214 + 8 >> 2] = o1241;
                            o310[o1214 + 12 >> 2] = o838;
                            break
                        }
                        o1186 = o1214;
                        o841 = o1201 >>> 8;
                        do {
                            if ((o841 | 0) == 0) {
                                o1242 = 0
                            } else {
                                if (o1201 >>> 0 > 16777215) {
                                    o1242 = 31;
                                    break
                                }
                                o1196 = (o841 + 1048320 | 0) >>> 16 & 8;
                                o1202 = o841 << o1196;
                                o1205 = (o1202 + 520192 | 0) >>> 16 & 4;
                                o1192 = o1202 << o1205;
                                o1202 = (o1192 + 245760 | 0) >>> 16 & 2;
                                o1203 = 14 - (o1205 | o1196 | o1202) + (o1192 << o1202 >>> 15) | 0;
                                o1242 = o1201 >>> (o1203 + 7 | 0) & 1 | o1203 << 1
                            }
                        } while (0);
                        o841 = 11008 + (o1242 << 2) | 0;
                        o310[o1214 + 28 >> 2] = o1242;
                        o310[o1214 + 20 >> 2] = 0;
                        o310[o1214 + 16 >> 2] = 0;
                        o838 = o310[10708 >> 2] | 0;
                        o1203 = 1 << o1242;
                        if ((o838 & o1203 | 0) == 0) {
                            o310[10708 >> 2] = o838 | o1203;
                            o310[o841 >> 2] = o1186;
                            o310[o1214 + 24 >> 2] = o841;
                            o310[o1214 + 12 >> 2] = o1214;
                            o310[o1214 + 8 >> 2] = o1214;
                            break
                        }
                        o1203 = o310[o841 >> 2] | 0;
                        if ((o1242 | 0) == 31) {
                            o1243 = 0
                        } else {
                            o1243 = 25 - (o1242 >>> 1) | 0
                        }
                        m: do {
                            if ((o310[o1203 + 4 >> 2] & -8 | 0) == (o1201 | 0)) {
                                o1244 = o1203
                            } else {
                                o841 = o1201 << o1243;
                                o838 = o1203;
                                while (1) {
                                    o1245 = o838 + (o841 >>> 31 << 2) + 16 | 0;
                                    o1202 = o310[o1245 >> 2] | 0;
                                    if ((o1202 | 0) == 0) {
                                        break
                                    }
                                    if ((o310[o1202 + 4 >> 2] & -8 | 0) == (o1201 | 0)) {
                                        o1244 = o1202;
                                        break o841
                                    } else {
                                        o841 = o841 << 1;
                                        o838 = o1202
                                    }
                                }
                                if (o1245 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                                    o1207()
                                } else {
                                    o310[o1245 >> 2] = o1186;
                                    o310[o1214 + 24 >> 2] = o838;
                                    o310[o1214 + 12 >> 2] = o1214;
                                    o310[o1214 + 8 >> 2] = o1214;
                                    break o106m: do {
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
                                    break io841: do {
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
                        o1201 = o1244 + 8 | 0;
                        o1203 = o310[o1201 >> 2] | 0;
                        o841 = o310[10720 >> 2] | 0;
                        if (o1244 >>> 0 < o841 >>> 0) {
                            o1207()
                        }
                        if (o1203 >>> 0 < o841 >>> 0) {
                            o1207()
                        } else {
                            o310[o1203 + 12 >> 2] = o1186;
                            o310[o1201 >> 2] = o1186;
                            o310[o1214 + 8 >> 2] = o1203;
                            o310[o1214 + 12 >> 2] = o1244;
                            o310[o1214i: do {
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
                            c[nao106: do {
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
                o1214 = o310[10716 >> 2] | 0;
                if (!(o1214 >>> 0 > o1168 >>> 0)) {
                    break
                }
                o1203 = o1214 - o1168 | 0;
                o310[10716 >> 2] = o1203;
                o1214 = o310[10728 >> 2] | 0;
                o1201 = o1214;
                o310[10728 >> 2] = o1201 + o1168;
                o310[o1201 + (o1168 + 4) >> 2] = o1203 | 1;
                o310[o1214 + 4 >> 2] = o1168 | 3;
                o680 = o1214 + 8 | 0;
                o106 = o374;
                return o680 | 0
            }
        } while (0);
        o310[(o1213() | 0) >> 2] = 12;
        o680 = 0;
        o106 = o374;
        return o680 | 0
    }

    function o1232(o295) {
        o295 = o295 | 0;
        var o374 = 0,
            o1163 = 0,
            o232 = 0,
            o45 = 0,
            o1164 = 0,
            o86 = 0,
            o1165 = 0,
            o139 = 0,
            o85 = 0,
            o841 = 0,
            o1166 = 0,
            o1167 = 0,
            o680 = 0,
            o1168 = 0,
            o986 = 0,
            o1170 = 0,
            o275 = 0,
            o1171 = 0,
            o1172 = 0,
            o1146 = 0,
            o30 = 0,
            o84 = 0,
            o1173 = 0,
            o1174 = 0,
            o1175 = 0,
            o1176 = 0,
            o1177 = 0,
            o1178 = 0,
            o1179 = 0,
            o1180 = 0,
            o1181 = 0,
            o1182 = 0,
            o1183 = 0,
            o1184 = 0,
            o1185 = 0,
            o1186 = 0,
            o1187 = 0,
            o1188 = 0,
            o1189 = 0,
            o1190 = 0;
        o374 = o106;
        if ((o295 | 0) == 0) {
            o106 = o374;
            return
        }
        o1163 = o295 + -8 | 0;
        o232 = o1163;
        o45 = o310[10720 >> 2] | 0;
        if (o1163 >>> 0 < o45 >>> 0) {
            o1207()
        }
        o1164 = o310[o295 + -4 >> 2] | 0;
        o86 = o1164 & 3;
        if ((o86 | 0) == 1) {
            o1207()
        }
        o1165 = o1164 & -8;
        o139 = o295 + (o1165 + -8) | 0;
        o85 = o139;
        a: do {
            if ((o1164 & 1 | 0) == 0) {
                o841 = o310[o1163 >> 2] | 0;
                if ((o86 | 0) == 0) {
                    o106 = o374;
                    return
                }
                o1166 = -8 - o841 | 0;
                o1167 = o295 + o1166 | 0;
                o680 = o1167;
                o1168 = o841 + o1165 | 0;
                if (o1167 >>> 0 < o45 >>> 0) {
                    o1207()
                }
                if ((o680 | 0) == (o310[10724 >> 2] | 0)) {
                    o986 = o295 + (o1165 + -4) | 0;
                    if ((o310[o986 >> 2] & 3 | 0) != 3) {
                        o1170 = o680;
                        o275 = o1168;
                        break
                    }
                    o310[10712 >> 2] = o1168;
                    o310[o986 >> 2] = o310[o986 >> 2] & -2;
                    o310[o295 + (o1166 + 4) >> 2] = o1168 | 1;
                    o310[o139 >> 2] = o1168;
                    o106 = o374;
                    return
                }
                o986 = o841 >>> 3;
                if (o841 >>> 0 < 256) {
                    o841 = o310[o295 + (o1166 + 8) >> 2] | 0;
                    o1171 = o310[o295 + (o1166 + 12) >> 2] | 0;
                    o1172 = 10744 + (o986 << 1 << 2) | 0;
                    do {
                        if ((o841 | 0) != (o1172 | 0)) {
                            if (o841 >>> 0 < o45 >>> 0) {
                                o1207()
                            }
                            if ((o310[o841 + 12 >> 2] | 0) == (o680 | 0)) {
                                break
                            }
                            o1207()
                        }
                    } while (0);
                    if ((o1171 | 0) == (o841 | 0)) {
                        o310[2676] = o310[2676] & ~(1 << o986);
                        o1170 = o680;
                        o275 = o1168;
                        break
                    }
                    do {
                        if ((o1171 | 0) == (o1172 | 0)) {
                            o1146 = o1171 + 8 | 0
                        } else {
                            if (o1171 >>> 0 < o45 >>> 0) {
                                o1207()
                            }
                            o30 = o1171 + 8 | 0;
                            if ((o310[o30 >> 2] | 0) == (o680 | 0)) {
                                o1146 = o30;
                                break
                            }
                            o1207()
                        }
                    } while (0);
                    o310[o841 + 12 >> 2] = o1171;
                    o310[o1146 >> 2] = o841;
                    o1170 = o680;
                    o275 = o1168;
                    break
                }
                o1172 = o1167;
                o986 = o310[o295 + (o1166 + 24) >> 2] | 0;
                o30 = o310[o295 + (o1166 + 12) >> 2] | 0;
                do {
                    if ((o30 | 0) == (o1172 | 0)) {
                        o84 = o295 + (o1166 + 20) | 0;
                        o1173 = o310[o84 >> 2] | 0;
                        if ((o1173 | 0) == 0) {
                            o1174 = o295 + (o1166 + 16) | 0;
                            o1175 = o310[o1174 >> 2] | 0;
                            if ((o1175 | 0) == 0) {
                                o1176 = 0;
                                break
                            } else {
                                o1177 = o1175;
                                o1178 = o1174
                            }
                        } else {
                            o1177 = o1173;
                            o1178 = o84
                        }
                        while (1) {
                            o84 = o1177 + 20 | 0;
                            o1173 = o310[o84 >> 2] | 0;
                            if ((o1173 | 0) != 0) {
                                o1178 = o84;
                                o1177 = o1173;
                                continue
                            }
                            o1173 = o1177 + 16 | 0;
                            o84 = o310[o1173 >> 2] | 0;
                            if ((o84 | 0) == 0) {
                                break
                            } else {
                                o1177 = o84;
                                o1178 = o1173
                            }
                        }
                        if (o1178 >>> 0 < o45 >>> 0) {
                            o1207()
                        } else {
                            o310[o1178 >> 2] = 0;
                            o1176 = o1177;
                            break
                        }
                    } else {
                        o1173 = o310[o295 + (o1166 + 8) >> 2] | 0;
                        if (o1173 >>> 0 < o45 >>> 0) {
                            o1207()
                        }
                        o84 = o1173 + 12 | 0;
                        if ((o310[o84 >> 2] | 0) != (o1172 | 0)) {
                            o1207()
                        }
                        o1174 = o30 + 8 | 0;
                        if ((o310[o1174 >> 2] | 0) == (o1172 | 0)) {
                            o310[o84 >> 2] = o30;
                            o310[o1174 >> 2] = o1173;
                            o1176 = o30;
                            break
                        } else {
                            o1207()
                        }
                    }
                } while (0);
                if ((o986 | 0) == 0) {
                    o1170 = o680;
                    o275 = o1168;
                    break
                }
                o30 = o310[o295 + (o1166 + 28) >> 2] | 0;
                o1167 = 11008 + (o30 << 2) | 0;
                do {
                    if ((o1172 | 0) == (o310[o1167 >> 2] | 0)) {
                        o310[o1167 >> 2] = o1176;
                        if ((o1176 | 0) != 0) {
                            break
                        }
                        o310[10708 >> 2] = o310[10708 >> 2] & ~(1 << o30);
                        o1170 = o680;
                        o275 = o1168;
                        break o295
                    } else {
                        if (o986 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                            o1207()
                        }
                        o841 = o986 + 16 | 0;
                        if ((o310[o841 >> 2] | 0) == (o1172 | 0)) {
                            o310[o841 >> 2] = o1176
                        } else {
                            o310[o986 + 20 >> 2] = o1176
                        } if ((o1176 | 0) == 0) {
                            o1170 = o680;
                            o275 = o1168;
                            break o295
                        }
                    }
                } while (0);
                if (o1176 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                    o1207()
                }
                o310[o1176 + 24 >> 2] = o986;
                o1172 = o310[o295 + (o1166 + 16) >> 2] | 0;
                do {
                    if ((o1172 | 0) != 0) {
                        if (o1172 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                            o1207()
                        } else {
                            o310[o1176 + 16 >> 2] = o1172;
                            o310[o1172 + 24 >> 2] = o1176;
                            break
                        }
                    }
                } while (0);
                o1172 = o310[o295 + (o1166 + 20) >> 2] | 0;
                if ((o1172 | 0) == 0) {
                    o1170 = o680;
                    o275 = o1168;
                    break
                }
                if (o1172 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                    o1207()
                } else {
                    o310[o1176 + 20 >> 2] = o1172;
                    o310[o1172 + 24 >> 2] = o1176;
                    o1170 = o680;
                    o275 = o1168;
                    break
                }
            } else {
                o1170 = o232;
                o275 = o1165a: do {
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
                t = jo295: do {
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
        o232 = o1170;
        if (!(o232 >>> 0 < o139 >>> 0)) {
            o1207()
        }
        o1176 = o295 + (o1165 + -4) | 0;
        o45 = o310[o1176 >> 2] | 0;
        if ((o45 & 1 | 0) == 0) {
            o1207()
        }
        do {
            if ((o45 & 2 | 0) == 0) {
                if ((o85 | 0) == (o310[10728 >> 2] | 0)) {
                    o1177 = (o310[10716 >> 2] | 0) + o275 | 0;
                    o310[10716 >> 2] = o1177;
                    o310[10728 >> 2] = o1170;
                    o310[o1170 + 4 >> 2] = o1177 | 1;
                    if ((o1170 | 0) != (o310[10724 >> 2] | 0)) {
                        o106 = o374;
                        return
                    }
                    o310[10724 >> 2] = 0;
                    o310[10712 >> 2] = 0;
                    o106 = o374;
                    return
                }
                if ((o85 | 0) == (o310[10724 >> 2] | 0)) {
                    o1177 = (o310[10712 >> 2] | 0) + o275 | 0;
                    o310[10712 >> 2] = o1177;
                    o310[10724 >> 2] = o1170;
                    o310[o1170 + 4 >> 2] = o1177 | 1;
                    o310[o232 + o1177 >> 2] = o1177;
                    o106 = o374;
                    return
                }
                o1177 = (o45 & -8) + o275 | 0;
                o1178 = o45 >>> 3;
                b: do {
                    if (o45 >>> 0 < 256) {
                        o1146 = o310[o295 + o1165 >> 2] | 0;
                        o86 = o310[o295 + (o1165 | 4) >> 2] | 0;
                        o1163 = 10744 + (o1178 << 1 << 2) | 0;
                        do {
                            if ((o1146 | 0) != (o1163 | 0)) {
                                if (o1146 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                                    o1207()
                                }
                                if ((o310[o1146 + 12 >> 2] | 0) == (o85 | 0)) {
                                    break
                                }
                                o1207()
                            }
                        } while (0);
                        if ((o86 | 0) == (o1146 | 0)) {
                            o310[2676] = o310[2676] & ~(1 << o1178);
                            break
                        }
                        do {
                            if ((o86 | 0) == (o1163 | 0)) {
                                o1179 = o86 + 8 | 0
                            } else {
                                if (o86 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                                    o1207()
                                }
                                o1164 = o86 + 8 | 0;
                                if ((o310[o1164 >> 2] | 0) == (o85 | 0)) {
                                    o1179 = o1164;
                                    break
                                }
                                o1207()
                            }
                        } while (0);
                        o310[o1146 + 12 >> 2] = o86;
                        o310[o1179 >> 2] = o1146
                    } else {
                        o1163 = o139;
                        o1164 = o310[o295 + (o1165 + 16) >> 2] | 0;
                        o1172 = o310[o295 + (o1165 | 4) >> 2] | 0;
                        do {
                            if ((o1172 | 0) == (o1163 | 0)) {
                                o986 = o295 + (o1165 + 12) | 0;
                                o30 = o310[o986 >> 2] | 0;
                                if ((o30 | 0) == 0) {
                                    o1167 = o295 + (o1165 + 8) | 0;
                                    o841 = o310[o1167 >> 2] | 0;
                                    if ((o841 | 0) == 0) {
                                        o1180 = 0;
                                        break
                                    } else {
                                        o1181 = o841;
                                        o1182 = o1167
                                    }
                                } else {
                                    o1181 = o30;
                                    o1182 = o986
                                }
                                while (1) {
                                    o986 = o1181 + 20 | 0;
                                    o30 = o310[o986 >> 2] | 0;
                                    if ((o30 | 0) != 0) {
                                        o1182 = o986;
                                        o1181 = o30;
                                        continue
                                    }
                                    o30 = o1181 + 16 | 0;
                                    o986 = o310[o30 >> 2] | 0;
                                    if ((o986 | 0) == 0) {
                                        break
                                    } else {
                                        o1181 = o986;
                                        o1182 = o30
                                    }
                                }
                                if (o1182 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                                    o1207()
                                } else {
                                    o310[o1182 >> 2] = 0;
                                    o1180 = o1181;
                                    break
                                }
                            } else {
                                o30 = o310[o295 + o1165 >> 2] | 0;
                                if (o30 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                                    o1207()
                                }
                                o986 = o30 + 12 | 0;
                                if ((o310[o986 >> 2] | 0) != (o1163 | 0)) {
                                    o1207()
                                }
                                o1167 = o1172 + 8 | 0;
                                if ((o310[o1167 >> 2] | 0) == (o1163 | 0)) {
                                    o310[o986 >> 2] = o1172;
                                    o310[o1167 >> 2] = o30;
                                    o1180 = o1172;
                                    break
                                } else {
                                    o1207()
                                }
                            }
                        } while (0);
                        if ((o1164 | 0) == 0) {
                            break
                        }
                        o1172 = o310[o295 + (o1165 + 20) >> 2] | 0;
                        o1146 = 11008 + (o1172 << 2) | 0;
                        do {
                            if ((o1163 | 0) == (o310[o1146 >> 2] | 0)) {
                                o310[o1146 >> 2] = o1180;
                                if ((o1180 | 0) != 0) {
                                    break
                                }
                                o310[10708 >> 2] = o310[10708 >> 2] & ~(1 << o1172);
                                break o374
                            } else {
                                if (o1164 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                                    o1207()
                                }
                                o86 = o1164 + 16 | 0;
                                if ((o310[o86 >> 2] | 0) == (o1163 | 0)) {
                                    o310[o86 >> 2] = o1180
                                } else {
                                    o310[o1164 + 20 >> 2] = o1180
                                } if ((o1180 | 0) == 0) {
                                    break o374
                                }
                            }
                        } while (0);
                        if (o1180 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                            o1207()
                        }
                        o310[o1180 + 24 >> 2] = o1164;
                        o1163 = o310[o295 + (o1165 + 8) >> 2] | 0;
                        do {
                            if ((o1163 | 0) != 0) {
                                if (o1163 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                                    o1207()
                                } else {
                                    o310[o1180 + 16 >> 2] = o1163;
                                    o310[o1163 + 24 >> 2] = o1180;
                                    break
                                }
                            }
                        } while (0);
                        o1163 = o310[o295 + (o1165 + 12) >> 2] | 0;
                        if ((o1163 | 0) == 0) {
                            break
                        }
                        if (o1163 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                            o1207()
                        } else {
                            o310[o1180 + 20 >> 2] = o1163;
                            o310[o1163 + 24 >> 2] = o1180b: do {
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
                            c[d + 24 >> 2] = Go374: do {
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
                o310[o1170 + 4 >> 2] = o1177 | 1;
                o310[o232 + o1177 >> 2] = o1177;
                if ((o1170 | 0) != (o310[10724 >> 2] | 0)) {
                    o1183 = o1177;
                    break
                }
                o310[10712 >> 2] = o1177;
                o106 = o374;
                return
            } else {
                o310[o1176 >> 2] = o45 & -2;
                o310[o1170 + 4 >> 2] = o275 | 1;
                o310[o232 + o275 >> 2] = o275;
                o1183 = o275
            }
        } while (0);
        o275 = o1183 >>> 3;
        if (o1183 >>> 0 < 256) {
            o232 = o275 << 1;
            o45 = 10744 + (o232 << 2) | 0;
            o1176 = o310[2676] | 0;
            o1180 = 1 << o275;
            do {
                if ((o1176 & o1180 | 0) == 0) {
                    o310[2676] = o1176 | o1180;
                    o1184 = 10744 + (o232 + 2 << 2) | 0;
                    o1185 = o45
                } else {
                    o275 = 10744 + (o232 + 2 << 2) | 0;
                    o1165 = o310[o275 >> 2] | 0;
                    if (!(o1165 >>> 0 < (o310[10720 >> 2] | 0) >>> 0)) {
                        o1184 = o275;
                        o1185 = o1165;
                        break
                    }
                    o1207()
                }
            } while (0);
            o310[o1184 >> 2] = o1170;
            o310[o1185 + 12 >> 2] = o1170;
            o310[o1170 + 8 >> 2] = o1185;
            o310[o1170 + 12 >> 2] = o45;
            o106 = o374;
            return
        }
        o45 = o1170;
        o1185 = o1183 >>> 8;
        do {
            if ((o1185 | 0) == 0) {
                o1186 = 0
            } else {
                if (o1183 >>> 0 > 16777215) {
                    o1186 = 31;
                    break
                }
                o1184 = (o1185 + 1048320 | 0) >>> 16 & 8;
                o232 = o1185 << o1184;
                o1180 = (o232 + 520192 | 0) >>> 16 & 4;
                o1176 = o232 << o1180;
                o232 = (o1176 + 245760 | 0) >>> 16 & 2;
                o1165 = 14 - (o1180 | o1184 | o232) + (o1176 << o232 >>> 15) | 0;
                o1186 = o1183 >>> (o1165 + 7 | 0) & 1 | o1165 << 1
            }
        } while (0);
        o1185 = 11008 + (o1186 << 2) | 0;
        o310[o1170 + 28 >> 2] = o1186;
        o310[o1170 + 20 >> 2] = 0;
        o310[o1170 + 16 >> 2] = 0;
        o1165 = o310[10708 >> 2] | 0;
        o232 = 1 << o1186;
        c: do {
            if ((o1165 & o232 | 0) == 0) {
                o310[10708 >> 2] = o1165 | o232;
                o310[o1185 >> 2] = o45;
                o310[o1170 + 24 >> 2] = o1185;
                o310[o1170 + 12 >> 2] = o1170;
                o310[o1170 + 8 >> 2] = o1170
            } else {
                o1176 = o310[o1185 >> 2] | 0;
                if ((o1186 | 0) == 31) {
                    o1187 = 0
                } else {
                    o1187 = 25 - (o1186 >>> 1) | 0
                }
                d: do {
                    if ((o310[o1176 + 4 >> 2] & -8 | 0) == (o1183 | 0)) {
                        o1188 = o1176
                    } else {
                        o1184 = o1183 << o1187;
                        o1180 = o1176;
                        while (1) {
                            o1189 = o1180 + (o1184 >>> 31 << 2) + 16 | 0;
                            o275 = o310[o1189 >> 2] | 0;
                            if ((o275 | 0) == 0) {
                                break
                            }
                            if ((o310[o275 + 4 >> 2] & -8 | 0) == (o1183 | 0)) {
                                o1188 = o275;
                                break o1163
                            } else {
                                o1184 = o1184 << 1;
                                o1180 = o275
                            }
                        }
                        if (o1189 >>> 0 < (o310[10720 >> 2] | 0) >>> 0) {
                            o1207()
                        } else {
                            o310[o1189 >> 2] = o45;
                            o310[o1170 + 24 >> 2] = o1180;
                            o310[o1170 + 12 >> 2] = o1170;
                            o310[o1170 + 8 >> 2] = o1170;
                            break o310d: do {
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
                            break co1163: do {
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
                o1176 = o1188 + 8 | 0;
                o1177 = o310[o1176 >> 2] | 0;
                o1184 = o310[10720 >> 2] | 0;
                if (o1188 >>> 0 < o1184 >>> 0) {
                    o1207()
                }
                if (o1177 >>> 0 < o1184 >>> 0) {
                    o1207()
                } else {
                    o310[o1177 + 12 >> 2] = o45;
                    o310[o1176 >> 2] = o45;
                    o310[o1170 + 8 >> 2] = o1177;
                    o310[o1170 + 12 >> 2] = o1188;
                    o310[o1170c: do {
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
                    c[so310: do {
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
        o1170 = (o310[10736 >> 2] | 0) + -1 | 0;
        o310[10736 >> 2] = o1170;
        if ((o1170 | 0) == 0) {
            o1190 = 11160 | 0
        } else {
            o106 = o374;
            return
        }
        while (1) {
            o1170 = o310[o1190 >> 2] | 0;
            if ((o1170 | 0) == 0) {
                break
            } else {
                o1190 = o1170 + 8 | 0
            }
        }
        o310[10736 >> 2] = -1;
        o106 = o374;
        return
    }

    function o1233() {}

    function o1234(o374, o1163, o232) {
        o374 = o374 | 0;
        o1163 = o1163 | 0;
        o232 = o232 | 0;
        var o45 = 0;
        if ((o232 | 0) >= 4096) return o1211(o374 | 0, o1163 | 0, o232 | 0) | 0;
        o45 = o374 | 0;
        if ((o374 & 3) == (o1163 & 3)) {
            while (o374 & 3) {
                if ((o232 | 0) == 0) return o45 | 0;
                o295[o374] = o295[o1163] | 0;
                o374 = o374 + 1 | 0;
                o1163 = o1163 + 1 | 0;
                o232 = o232 - 1 | 0
            }
            while ((o232 | 0) >= 4) {
                o310[o374 >> 2] = o310[o1163 >> 2];
                o374 = o374 + 4 | 0;
                o1163 = o1163 + 4 | 0;
                o232 = o232 - 4 | 0
            }
        }
        while ((o232 | 0) > 0) {
            o295[o374] = o295[o1163] | 0;
            o374 = o374 + 1 | 0;
            o1163 = o1163 + 1 | 0;
            o232 = o232 - 1 | 0
        }
        return o45 | 0
    }

    function o1235(o374, o1163, o232) {
        o374 = o374 | 0;
        o1163 = o1163 | 0;
        o232 = o232 | 0;
        var o45 = 0,
            o1164 = 0,
            o86 = 0,
            o106 = 0;
        o45 = o374 + o232 | 0;
        if ((o232 | 0) >= 20) {
            o1163 = o1163 & 255;
            o1164 = o374 & 3;
            o86 = o1163 | o1163 << 8 | o1163 << 16 | o1163 << 24;
            o106 = o45 & ~3;
            if (o1164) {
                o1164 = o374 + 4 - o1164 | 0;
                while ((o374 | 0) < (o1164 | 0)) {
                    o295[o374] = o1163;
                    o374 = o374 + 1 | 0
                }
            }
            while ((o374 | 0) < (o106 | 0)) {
                o310[o374 >> 2] = o86;
                o374 = o374 + 4 | 0
            }
        }
        while ((o374 | 0) < (o45 | 0)) {
            o295[o374] = o1163;
            o374 = o374 + 1 | 0
        }
        return o374 - o232 | 0
    }

    function o1236(o374) {
        o374 = o374 | 0;
        var o310 = 0;
        o310 = o374;
        while (o295[o310] | 0) {
            o310 = o310 + 1 | 0
        }
        return o310 - o374 | 0
    }




    // EMSCRIPTEN_END_FUNCS
    return {
        o1151: o1236,
        o1246: o1232,
        o1247: o1230,
        o550: o1235,
        o266: o1231,
        o416: o1234,
        o1248: o1233,
        o183: o1214,
        o63: o1215,
        o65: o1216,
        o1249: o1217,
        o1250: o1220,
        o1251: o1221,
        o1252: o1222,
        o1253: o1223,
        o1254: o1224,
        o1255: o1225,
        o1256: o1226,
        o1257: o1227,
        o1258: o1228,
        o1259: o1229
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
    "asmPrintInt": o1158,
    "asmPrintFloat": o1159,
    "min": o250,
    "_clock": o548,
    "_fflush": o762,
    "_abort": o552,
    "___setErrNo": o424,
    "_sbrk": o418,
    "_time": o1150,
    "_emscripten_memcpy_big": o413,
    "_sysconf": o547,
    "___errno_location": o551,
    "STACKTOP": o64,
    "STACK_MAX": o325,
    "tempDoublePtr": o410,
    "ABORT": o197,
    "NaN": NaN,
    "Infinity": Infinity
}, buffer);
var o1151 = Module["_strlen"] = o1160["_strlen"];
var o1246 = Module["_free"] = o1160["_free"];
var o1247 = Module["_main"] = o1160["_main"];
var o550 = Module["_memset"] = o1160["_memset"];
var o266 = Module["_malloc"] = o1160["_malloc"];
var o416 = Module["_memcpy"] = o1160["_memcpy"];
var o1248 = Module["runPostSets"] = o1160["runPostSets"];

o62.o183 = function (o109) {
    return o1160['stackAlloc'](o109)
};
o62.o63 = function () {
    return o1160['stackSave']()
};
o62.o65 = function (o13) {
    o1160['stackRestore'](o13)
};


// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var o1260 = null;

// === Auto-generated postamble setup entry stuff ===

if (o409) {
    if (o22 || o29) {
        var o875 = Module['readBinary'](o409);
        o269.set(o875, o322);
    } else {
        o405('memory initializer');
        o949.o956(o409, function (o875) {
            o269.set(o875, o322);
            o407('memory initializer');
        }, function (o875) {
            throw 'could not load memory initializer ' + o409;
        });
    }
}

function o1261(o926) {
    this.name = "ExitStatus";
    this.o885 = "Program terminated with exit(" + o926 + ")";
    this.o926 = o926;
};
o1261.prototype = new Error();
o1261.prototype.constructor = o1261;

var o1262;
var o1263 = null;
var o1264 = false;

o404 = function o1265() {
    // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
    if (!Module['calledRun'] && o1266) o1267();
    if (!Module['calledRun']) o404 = o1265; // try this again later, after new deps are fulfilled
}

Module['callMain'] = Module.o1268 = function o1268(o105) {
    o95(o402 == 0, 'cannot call main when async dependencies remain! (listen on __ATMAIN__)');
    o95(o342.length == 0, 'cannot call main when preRun functions remain to be called');

    o105 = o105 || [];

    if (o25 && o1263 !== null) {
        Module.o32('preload time: ' + (Date.o5() - o1263) + ' ms');
    }

    o350();

    var o1269 = o105.length + 1;

    function o1270() {
        for (var o106 = 0; o106 < 4 - 1; o106++) {
            o1271.push(0);
        }
    }
    var o1271 = [o261(o237("/bin/this.program"), 'i8', o256)];
    o1270();
    for (var o106 = 0; o106 < o1269 - 1; o106 = o106 + 1) {
        o1271.push(o261(o237(o105[o106]), 'i8', o256));
        o1270();
    }
    o1271.push(0);
    o1271 = o261(o1271, 'i32', o256);

    o1262 = o64;

    try {

        var o38 = Module['_main'](o1269, o1271, 0);


        // if we're not running an evented main loop, it's time to exit
        if (!Module['noExitRuntime']) {
            o1272(o38);
        }
    } catch (o232) {
        if (o232 instanceof o1261) {
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
        o1264 = true;
    }
}




function o1267(o105) {
    o105 = o105 || Module['arguments'];

    if (o1263 === null) o1263 = Date.o5();

    if (o402 > 0) {
        Module.o32('run() called, but dependencies remain, so not running');
        return;
    }

    o348();

    if (o402 > 0) return; // a preRun added a dependency, run will be called later
    if (Module['calledRun']) return; // run may have just been called through dependencies being fulfilled just in this very frame

    function o1273() {
        if (Module['calledRun']) return; // run may have just been called while the async setStatus time below was happening
        Module['calledRun'] = true;

        o350();

        o351();

        if (Module['_main'] && o1266) {
            Module['callMain'](o105);
        }

        o353();
    }

    if (Module['setStatus']) {
        Module['setStatus']('Running...');
        o1100(function () {
            o1100(function () {
                Module['setStatus']('');
            }, 1);
            if (!o197) o1273();
        }, 1);
    } else {
        o1273();
    }
}
Module['run'] = Module.o1267 = o1267;

function o1272(o926) {
    o197 = true;
    o198 = o926;
    o64 = o1262;

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
    throw new o1261(o926);
}
Module['exit'] = Module.o1272 = o1272;

function o159(o161) {
    if (o161) {
        Module.print(o161);
        Module.o32(o161);
    }

    o197 = true;
    o198 = 1;

    var o1274 = '\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.';

    throw 'abort() at ' + o315() + o1274;
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
var o1266 = true;
if (Module['noInitialRun']) {
    o1266 = false;
}


o1267();

// {{POST_RUN_ADDITIONS}}




// {{MODULE_ADDITIONS}}

////////////////////////////////////////////////////////////////////////////////
// Runner
////////////////////////////////////////////////////////////////////////////////
var o1275 = o13.o14.o15();
o13.o14.o11(o1275 - o16);