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
        var o1 = Object.defineProperty(o4, Symbol.hasInstance, {
                    value: function(o34) { try {
return true;
}catch(e){} }
                });
        var o2 = new Array(1);
        try {
function() {
            var o32 = {};
            try {
o32[Symbol.iterator] = 'some string';
}catch(e){}
            try {
o4.o11('some string', o32[Symbol.iterator], "o[Symbol.iterator] === 'some string'");
}catch(e){}
            try {
o4.o7(o32[Symbol.iterator.toString()] === undefined, "o[Symbol.iterator] uses the property id stored in Symbol.iterator (not the value created by Symbol.iterator.toString())");
}catch(e){}

            // use functions to wrap property access to ensure we hit JIT code
            function o33(o3, o31) {
                try {
return o3[o31];
}catch(e){}
            }
            function o34(o3, o31, o35) {
                try {
o3[o31] = o35;
}catch(e){}
            }

            try {
o32 = {};
}catch(e){}
            var o36 = Symbol();
            try {
for (var o37 = 0; o37 < 5; o37++) {
                try {
o34(o32, o36, o37);
}catch(e){}
                try {
o4.o11(o37, o33(o32, o36), "Property keyed by symbol is able to be set and get");
}catch(e){}
            }
}catch(e){}

            var o31 = Symbol('sym');
            try {
o32 = {};
}catch(e){}
            try {
o32[o31] = 'test';
}catch(e){}

            try {
o4.o11('test', o32[o31], "Symbol converted to property key works");
}catch(e){}
            try {
o4.o11(undefined, o32['sym'], "Symbol description is not added as a property to the object");
}catch(e){}

            var o38 = Symbol('uniquevalue');
            var o39 = Symbol('uniquevalue');
            try {
o32 = {};
}catch(e){}
            try {
o32[o38] = 's1';
}catch(e){}
            try {
o32[o39] = 's2';
}catch(e){}

            try {
o4.o11('s1', o32[o38], "Simple test of symbol producing a property on an object");
}catch(e){}
            try {
o4.o11('s2', o32[o39], "Simple test of symbol producing a property on an object");
}catch(e){}
            try {
o4.o7(o32[o38] != o32[o39], "Different symbols with the same description create different properties on an object");
}catch(e){}

            try {
delete o32[o38];
}catch(e){}

            try {
o4.o11(undefined, o32[o38], "deleting properties from objects also works");
}catch(e){}
            try {
o4.o11('s2', o32[o39], "deleting a property doesn't affect other properties");
}catch(e){}

            // Needs ES6 object literal improvements
            try {
o32 = { [o31] : 'string' };
}catch(e){}
            try {
o4.o11('string', o32[o31], "Object literal declared with symbol property works");
}catch(e){}
        };
}catch(e){}
        var o3 = 0;
        try {
try { {
Module['noExitRuntime'] = true;
} } catch(e) {}try { {} } catch(e) {}
}catch(e){}
        //Snippet 3: fewer arguments than formal parameters
        try {
o9lengthe = (function (o4, o5, o6, o7, o8) {
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
