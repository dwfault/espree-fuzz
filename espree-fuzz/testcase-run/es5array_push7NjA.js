//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = 'from';

var o1 = [];
var o14 = {};
var o3 = [];
var o10 = o0.o4();
function o5() {
    try {
if (o4.length > o1) {
        var o161;
        try {
o4.push(o6);
}catch(e){}
        try {
return o6;
}catch(e){}
    }
    else try { this.o565[o810 + 5] = this.o552[o851 | o847[o842 | 5]]; } catch(e) {}try { {
o1("msSetVideoRectangle");
} } catch(e) {}
}catch(prototype){}
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
o8.o9 = o5();
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
try {
;
}catch(e){}
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
