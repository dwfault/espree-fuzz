//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = false;

var o1 = o421.o391;
var o325 = Math.sqrt;
var o494.o491 = o510.o511.link.o492 = [];
var o4 = [];
function o5() {
    try { o21(    o29 - 1, Math.o28,         1, "expm1(1) = e - 1"); } catch(e) {}try { {} } catch(e) {}
}
var o4 = new Proxy(o2, {
        get: function (target, o3, o11) {
            try {
print('get on proxy2 : ' + o3.toString());
}catch(e){}
            try {
return Reflect.get(target, o3, o11);
}catch(e){}
        },
        getOwnPropertyDescriptor: function (target, o3) {
            try {
print('getOwnPropertyDescriptor on proxy2 : ' + o3.toString());
}catch(e){}

            try {
return { configurable: true, enumerable: true, value: 10 };
}catch(e){}
        },

        ownKeys: function (target) {
            try {
print('ownKeys for proxy2');
}catch(e){}
            try {
return ["prop2", "prop3",  Symbol("prop4"), Symbol("prop5")];
}catch(e){}
        }
    })try {
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
