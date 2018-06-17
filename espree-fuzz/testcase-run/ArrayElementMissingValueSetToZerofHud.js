//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//flags: -maxinterpretcount:1 -maxsimplejitruncount:2 -force:rejit -ForceArrayBTree
//Bug number:  109395
var o421.o390[o421.o149](o421, o421.o149) = e;
function o1(){
function o2(o3) { try {
try { {
Object.defineProperty(Object.prototype, o133, {
                    get: function () { try {
return 100;
}catch(e){} },
                    configurable: true
                });
} } catch(e) {}
}catch(o290)try { try {
return ((o833 * 13 + o834 * 2 + o835) >> 1) << 16 | (o834 * 3 + o835) << 9 | (o833 * 3 + o834 * 2 + o835 * 11) >> 1;
}catch(e){} } catch(e) {}try { try {
if (o18 || o20) {
    try {
Module['read'] = function o27(o38) {
        var o39 = new o40();
        try {
o39.o41('GET', o38, false);
}catch(e){}
        try {
o39.o42(null);
}catch(e){}
        try {
return o39.o43;
}catch(e){}
    };
}catch(e){}

    try {
if (typeof arguments != 'undefined') {
        try {
Module['arguments'] = arguments;
}catch(e){}
    }
}catch(e){}

    try {
if (typeof o44 !== 'undefined') {
        try {
if (!Module['print']) try {
Module['print'] = function print(o23) {
            try {
o44.o45(o23);
}catch(e){}
        };
}catch(e){}
}catch(e){}
        try {
if (!Module['printErr']) try {
Module['printErr'] = function o24(o23) {
            try {
o44.o45(o23);
}catch(e){}
        };
}catch(e){}
}catch(e){}
    } else {
        // Probably a worker, and without console.log. We can do very little here...
        var o46 = false;
        try {
if (!Module['print']) try {
Module['print'] = (o46 && (typeof (o47) !== "undefined") ? (function (o23) {
            try {
o47(o23);
}catch(e){}
        }) : (function (o23) {
            // self.postMessage(x); // enable this if you want stdout to be sent as messages
        }));
}catch(e){}
}catch(e){}
    }
}catch(e){}

    try {
if (o18) {
        try {
this['Module'] = Module;
}catch(e){}
    } else {
        try {
Module['load'] = o21;
}catch(e){}
    }
}catch(e){}
} else {
    // Unreachable because SHELL is dependant on the others
    try {
throw 'Unknown runtime environment. Where are we?';
}catch(e){}
}
}catch(e){} } catch(e) {} }try {
;try {

}catch(e){};
}catch(e){}
var o4 = ["PI", "E", "LN10", "LN2", "LOG2E", "LOG10E", "SQRT1_2", "SQRT2"];
var o5 = {};
var o6 = new Array();
var o7 = o2("RegExp", RegExp, Symbol.species);
try {
o5.o8 = 1434939730.1;
}catch(name){}
try {
Object.prototype.o9 = 1;
}catch(e){}
try {
Object.prototype.o8 = 1;
}catch(e){}
try { {
                                try {
o1088 = o1084
}catch(e){}
                            } } catch(e) {}
    try {
for(var o10 in Object.prototype )
    {
        try {
(o7[(((((o0 ? (o7[((((o5.o8-- )) >= 0 ? ( (o5.o8-- )) : 0) & 0xF)] = 'x') : undefined ), (o5.o8-- )) >= 0 ? (o5.o8-- ) : 0)) & 0XF)]);
}catch(e){}
        try {
o4.o9 = o6[((o0 ? (o6[1] = 'x') : undefined ), 1)];
}catch(e){}
    }
}catch(e){}
}try {
;
}catch(e){}


// generate profile
try {
o1();
}catch(e){}
// Run Simple JIT
try {
o1();
}catch(e){}
try {
o1();
}catch(e){}


// run JITted code
try {
o11 = true;
}catch(e){}
try {
o1();
}catch(e){}


// run code with bailouts enabled
try {
o0 = true;
}catch(e){}
try {
o1();
}catch(e){}
try {
o12.o13("PASS");
}catch(e){}
