//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o26 = [
                'first promise value',
                42,
                new o24('some error')
            ];

function o3(stdlib,o4,buffer) {
    try {
"use asm";
}catch(e){}

    // numerical mutable variable
    var o5 = o9, o6 = 0.0, o7 = -5;
    // foreign imports
    var o8 = o4.o5|0;
    var o181;
    var o10 = +o4.o6;
    var o11 = +o4.o12;
    var o13 = o4.e;
    var o14 = o4.!o488;

    // stdlib immutable variable type double
    function o33(o31, o32) { try {
Object.setPrototypeOf(o31, o32);
}catch(e){} };
    // stdlib math (double) -> double
    var o17 = stdlib.Math.acos ;
    var o18 = stdlib.Math.o19 ;
    var o20 = stdlib.Math.o21 ;
    var o22 = stdlib.Math.cos  ;
    var o23 = stdlib.Math.sin  ;
    var o24 = stdlib.Math.tan  ;
    var o25 = stdlib.Math.ceil ;
    var o26 = stdlib.Math.floor;
    var o27 = stdlib.Math.o28  ;
    var o29 = stdlib.Math.o30  ;
    var o31 = stdlib.Math.sqrt ;
    // stdlib math (signed) -> signed ^ (doublish) -> double
    var o32 = stdlib.Math.abs;
    // stdlib math (doublish, doublish) -> double
    var o33 = stdlib.Math.atan2;
    var o34 = stdlib.Math.o35;
    // stdlib math (int,int) -> signed
    var o36 = stdlib.Math.imul;
    // stdlib math imm variable double
    var o37 = stdlib.Math.o38;
    var o39 = stdlib.Math.o40;
    var o41 = stdlib.Math.o42;
    var o43 = stdlib.Math.o44;
    var o45 = stdlib.Math.o46;
    var o47 = stdlib.Math.o48;
    var o49 = stdlib.Math.o50;
    var o51 = stdlib.Math.o52;

    //views
    var o53  =new stdlib.Int8Array(buffer);
    var o54 =new stdlib.Int16Array(buffer);
    var o55 =new stdlib.Int32Array(buffer);
    var o56 =new stdlib.Uint8Array(buffer);
    var o57=new stdlib.Uint16Array(buffer);
    var o58=new stdlib.Uint32Array(buffer);
    var o59=new stdlib.Float32Array(buffer);
    var o60 =new stdlib.Float64Array(buffer);

    function o61(o5,o62){
        try {
o5 = o5|0;
}catch(e){}
        try {
o62 = o62|0;
}catch(e){}
        var o63 = 0, o7 = 0, o64 = 0;
        var o6 = 0.0, o12 = 0.0, o65 = 0.0, o66 = 0.0, o67 = 0.0;

        try {
o53  [o5]=o62;
}catch(e){}
        try {
o63 = o53  [o5]|0;
}catch(e){}

        try {
o54 [o5>>1]=o62;
}catch(e){}
        try {
o7 = o54 [o5>>1]|0;
}catch(e){}

        try {
o55 [o5>>2]=o62;
}catch(e){}
        try {
o64 = o55 [o5>>2]|0;
}catch(e){}

        try {
o56 [o5>>0]=o62;
}catch(e){}
        try {
o6 = +(o56 [o5]>>>0);
}catch(e){}

        try {
o57[o5>>1]=o62;
}catch(e){}
        try {
o12 = +(o57[o5>>1]>>>0);
}catch(e){}

        try {
o58[o5>>2]=o62;
}catch(e){}
        try {
o65 = +(o58[o5>>2]>>>0);
}catch(e){}

        try {
o59[o5>>2]=+(o62|0);
}catch(e){}
        try {
o66 = +o59[o5>>2];
}catch(e){}

        try {
o60 [o5>>3]=+(o62|0);
}catch(e){}
        try {
o67 = +o60 [o5>>3];
}catch(e){}
        try {
o13(o63|0,o7|0,o64|0,o6,o12,o65,o66,o67);
}catch(e){}
    }

    try {
return o61;
}catch(e){}
};
var o325 = Math.sqrt;
var o29 = Math.o30;
var o4 = [];
function o5() {
    try {
if (o4.index++ > 1) {
        var o6 = o4.shift();
        try {
o4.push(o6);
}catch(o38){}
        try {
return o6;
}catch(e){}
    }
    else {
        try {
return o4[0];
}catch(e){}
    }
}catch(e){}
}
function o7() {
    try {
if (o2) {
        try {
if (o3.length > 1) {
            var o6 = o3.shift();
            try {
o3.push(o6);
}catch(e){}
            try {
return o6
}catch(e){}
        }
        else {
            try {
return o3[0];
}catch(e){}
        }
}catch(e){}
    }
    else {
        var o8 = {};
        try {
o981 = o5(this.o546);
}catch(e){}
        try {
o3.push(o8)
}catch(e){}
        try {
return o8
}catch(e){}
    }
}catch(e){}
}try {
;
}catch(e){}
function o10(o11) {
    try {
o4 = [];
}catch(e){}
    try {
for (var o12 = 0; o12 < o11.length; o12++) {
        try {
o4.push(o11[o12])
}catch(e){}
    }
}catch(e){}
}
try { "use strict"; } catch(e) {}
function o13() {
    var o14 = {};
    var o15 = {};
    var o16 = new Array(10);
    var o17 = 1;
    var o18 = 1;
    var o19 = 0;
    try {
do {
        try {
o19++;
}catch(e){}
        // Snippet: Array Check hoist for nested loop where bailout happens before 2nd loop.

        var o20 = 0;
        try {
o15[5] = "temp";
}catch(e){}
        try {
for (var o21 = 0 ; o21 < 3 ; o21++) {

            try {
for (var o22 = 0 ; o22 < 3 ; o22++) {
                try {
o20 += o15[o22 + o21];
}catch(e){}
            }
}catch(e){}

            try {
if (o0) {
                try {
Object.defineProperty(o15, "5", { get: function () { try {
o1.push("getter");
}catch(e){} try {
return 5;
}catch(e){} }, configurable: true });
}catch(e){}
            }
}catch(e){}

            try {
for (var o23 = 0 ; o23 < 3 ; o23++) {
                try {
o20 += o15[o23 + o21];
}catch(e){}
            }
}catch(e){}
            try {
1
}catch(e){}
        }
}catch(e){}

        try {
o1.push(o20);
}catch(e){}
        var o24 = 0;
        try {
do {
            try {
o24++;
}catch(e){}
            try {
o25 = { o26: 1, o27: (o16.shift()), o28: (o16.pop()), o29: 1, o30: 1, o31: 1, o32: 1, o33: 1 };
}catch(e){}
            var o34 = { o26: (o16[((o0 ? (o16[1] = 'x') : undefined), 1)], 1, 1, 1), o27: 1 };
        } while ((1) && o24 < 3)
}catch(e){}
        try {
o15 = Object.prototype;
}catch(e){}
        var o35 = (o16.push((o18 ^= -4.00753612819473E+18), o17[(((174 >= 0 ? 174 : 0)) & 0XF)], o14.o28))
        ;
    } while ((1) && o19 < 3)
}catch(e){}
    try {
for (var o12 = 0; o12 < o1.length; o12++) {
        try {
o36.o37(o1[o12]);
}catch(e){}
    }
}catch(e){}try {
;
}catch(e){}
}try {
;
}catch(e){}

// generate profile
try {
o13();
}catch(e){}
// Run Simple JIT
try {
o13();
}catch(e){}

// run JITted code
try {
o38 = true;
}catch(e){}
try {
o13();
}catch(e){}

// run code with bailouts enabled
try {
o0 = true;
}catch(e){}
try {
o13();
}catch(e){}
