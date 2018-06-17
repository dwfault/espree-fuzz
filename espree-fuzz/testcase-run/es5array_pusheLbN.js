//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = false;

var o6 = [];
var o17 = function (o18) {
            try {
switch ((o19)) {
                case 1:
                    try {
break;
}catch(e){}
                case (o20--):
                    try {
break;
}catch(e){}
                default:
                    try {
o16.o10 -= 1;
}catch(e){}
                    try {
break;
}catch(e){}
                case 1:
                    try {
break;
}catch(e){}
                case 1:
                    try {
break;
}catch(e){}
            }
}catch(e){}
            try {
(o14 ? (Object.defineProperty(o1, 'prop0', { writable: false, enumerable: true, configurable: true }), 1) : 1);
}catch(e){}
        };
var Object = [];
var o22 = 0;
function o1108() {
    try {
if (o4.length > 1) {
        var o6 = o4.shift();
        try {
o4.push(o6);
}catch(e){}
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
if (o282.unshift(o292)) {
            var o6 = o3.shift(-Infinity);
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
        var o8 = o1.o3;
        try {
this.o390[0xFF14] = o5(function (o421, o768, o70) {try {
"use strict";
}catch(e){}
      try {
o421.o155[0xFF74] = o70;
}catch(e){}
    });
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
