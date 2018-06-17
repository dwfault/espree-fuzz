//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o421() {
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
o0(Math.tanh);
}catch(o44){}

var o14 = false;
function o15() {
    try {
o4.o11;
}catch(e){}
    try {
try try { {
o4.o11(Number.isFinite(new Number(0)), "Number.isFinite returns false for Number object with finite value");
} } catch(e) {}
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
