//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    try {
'use strict';
}catch(e){}
    try {
try {
        var o1 = {};
        var o2 = new Array(10);
        try {
o1.length = 1;
}catch(e){}
        var o3 = 0;
        try {
while ((1) && o3 < 3) {
            try {
o3++;
}catch(e){}
            try {
o2.length = -804513990;
}catch(e){}
        }
}catch(e){}
        //Snippet 3: fewer arguments than formal parameters
        try {
o1.length = (function (o4, o5, o6, o7, o8) {
            try {
o9 *= o1.o10;
}catch(e){}
            var o11 = o4 + o5 + o6 + o7 + o8;
            try {
return o11 + o2[(1)];
}catch(e){}
        })(1, 1, 1);
}catch(e){}
    }
    catch(o9) {
        try {
o12.o13(o9);
}catch(e){}
    }
}catch(e){}
}try {
;
}catch(e){}

// generate profile
try {
o0();
}catch(e){}

// run JITted code
try {
o0();
}catch(e){}

var o14 = false;
function o15() {
    try {
'use strict';
}catch(e){}
    try {
try {
        var o1 = {};
        var o16 = {};
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
        }
        try {
o16.o21 = o17;
}catch(e){}
        var o20 = 1;
        var o19 = -27;
        try {
o16.o21();
}catch(e){}
        var o22 = 0;
        try {
do {
            try {
o22++;
}catch(e){}
        } while (((o1.length & (o14 ? (o1.o10 = { valueOf: function () { try {
o12.o13('obj0.prop0 valueOf');
}catch(e){} try {
return 3;
}catch(e){} } }, 1) : 1))) && o22 < 3)
}catch(e){}
    }
    catch (o9) {
        try {
o12.o13(o9);
}catch(e){}
    }
}catch(e){}
    try {
o12.o13("obj1.prop0 = " + (o16.o10 | 0));
}catch(e){}
}try {
;
}catch(e){}

// generate profile
try {
o15();
}catch(e){}

// run JITted code
try {
o15();
}catch(e){}

// run code with bailouts enabled
try {
o14 = true;
}catch(e){}
try {
o15();
}catch(e){}
