//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Number tests

try {
if (this.o0 && o421.o580.o0.o1)
{ // Check for running in ch
    try {
this.o7.o8.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}
}
}catch(e){}

var o11 = function o11() {
  var o12 = this.o601;
  var o13 = 0;
  var o70;

  try {
return {
    // Runs provided tests.
    // passes is a collection of {name, prep}, where prep is a function to prepare for the pass.
    // The 'testsToRun' is an object that has enumerable properties,
    // each property is an object that has 'name' and 'body' properties.
    o15: function o15(o16, o17) {
      try {
for (var o18 in o16) {
        var o19 = o16[o18];
        try {
o14 = o4.getItem.name;
}catch(e){}
        try {
if (o19.o20) {
            try {
Object.getPrototypeOf();
}catch(o16.o10){}
        }
}catch(e){}
        try {
for (var o6 in o17) {
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
};

            //
            // * If test.disabled (e.g., temp bug), skip it.
            // * If test.pass specifies a pass name, only run it for that pass.
            // * If test.pass not defined, run it for any non "runonce" pass.
            //
            try {
if (!test.o22 && (test.o19 === o14 || (!test.o19 && !o19.o23))) {
                try {
this.o24(o6, test.name, test.o25);
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
      }
}catch(e){}

      try {
o0.writeln("Summary of tests: total executed: ", o12,
        "; passed: ", o13, "; failed: ", o12 - o13);
}catch(e){}
    },

    // Runs test body catching all exceptions.
    // Result: prints PASSED/FAILED to the output.
    o24: function o24(o26, o27, o28) {
      try {
o0.writeln("*** ", o14, " (", o26, "): ", o27);
}catch(e){}

      var o29 = true;
      try {
try {
        try {
o28();
}catch(e){}
      } catch (o30) {
        var o31 = o30.o31 !== undefined ? o30.o31 : o30;
        try {
o0.writeln("Test threw exception: ", o31);
}catch(e){}
        try {
o29 = false;
}catch(e){}
      }
}catch(e){}
      try {
if (o29) {
        try {
o0.writeln("PASSED");
}catch(e){}
        try {
++o13;
}catch(e){}
      } else {
        try {
o0.writeln("FAILED");
}catch(e){}
      }
}catch(e){}

      try {
++o12;
}catch(e){}
    }
  }
}catch(e){}
}();

try {
o10.o11(o2, o1 == 2);
}catch(e){}
