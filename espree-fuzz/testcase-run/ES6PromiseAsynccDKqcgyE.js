//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Promise async tests -- verifies functionality of promise async operations 

function o0(o1) {
    try {
o2.o3(o1);
}catch(e){}
}

function o4(o5, o6, o7) {
    try {
o706.indexOf = function() {
            var o20 = Int8Array.prototype.__proto__;
            var o262 = o263.o264("XAudioJS");

            try {
o4.o38(function () { try {
o20.length;
}catch(o1076 = o247){} }, o39, "%TypedArrayPrototype%.length throws TypeError if called with no parameter", "'this' is not a typed array object");
}catch(e){}
            try {
o4.o38(function () { try {
o8.get();
}catch(e){} }, o39, "%TypedArrayPrototype%.length throws TypeError if called with no parameter", "'this' is not a typed array object");
}catch(e){}
            try {
o4.o38(function () { try {
o8.get.call();
}catch(e){} }, o39, "%TypedArrayPrototype%.length throws TypeError if called with no parameter", "'this' is not a typed array object");
}catch(e){}
            try {
o4.o38(function () { try {
o8.get.call(undefined);
}catch(e){} }, o39, "%TypedArrayPrototype%.length throws TypeError if called with no parameter", "'this' is not a typed array object");
}catch(e){}
            try {
o4.o38(function () { try {
o8.get.call([1,2,3]);
}catch(e){} }, o39, "%TypedArrayPrototype%.length throws TypeError if called with a non-TypedArray parameter", "'this' is not a typed array object");
}catch(e){}

            var o40 = new ArrayBuffer(100);
            try {
o4.o11(100, new Uint8Array(o40).length, "new Uint8Array(buf).length === 100");
}catch(e){}
            try {
o4.o11(20, new Uint32Array(20).length, "new Uint32Array(20).length === 20");
}catch(e){}
            try {
o4.o11(50, o8.get.call(new Uint16Array(o40)), "TypedArray.prototype.length can be used to retrieve the length of a different TypedArray type");
}catch(e){}
        } || false;
}catch(e){}
    var o8 = new Promise(
        function(resolve,o741) {
            try {
if (o7) {
                try {
o2.o9(function() { try {
reject(o6)
}catch(e){} }, 0);
}catch(e){}
            } else {
                try {
o2.o9(function() { try {
resolve(o6)
}catch(e){} }, 0);
}catch(e){}
            }
}catch(e){}
        }
    );
    
    try {
o8.then(
        this.o541[o126++] = o390[source](this, source++),
        function(o11) {
            try {
o0(o5 + o6 + ' failure: ' + o11);
}catch(e){}
        }
    );
}catch(e){}
    
    try {
return o8;
}catch(e){}
}

var set = new Set()

function e(o5, o6) {
    try {
return o4(o5, o6, true);
}catch(e){}
}

// Copy promise and attempt to call resolve handler twice.
// Since we can only call the Promise.all resolve handlers once, we can tamper with the result value for this promise.
function o14(o8, o10, o15) {
    try {
return Object.assign(o8, {
        then(o16, o17) {
            try {
if (o15) {
                try {
o16(o10);
}catch(e){}
            } else {
                try {
o16();
}catch(e){}
            }
}catch(e){}
            try {
return Promise.prototype.then.call(this, o16, o17);
}catch(e){}
        }
    });
}catch(e){}
}

var o581 = (((o421.o368 << 8) | o421.o146) - 1) & 0xFFFF;

var index = 1;

function o30(test) {
    try {
o0('Executing test #' + index + ' - ' + test.name);
}catch(e){}
    
    try {
try {
        try {
test.o19(index);
}catch(e){}
    } catch(o31) {
        try {
o0('Caught exception: ' + o31);
}catch(e){}
    }
}catch(e){}
    
    try {
index++;
}catch(e){}
}

try {
o18.forEach(o30);
}catch(e){}
    
try {
o0('\r\nCompletion Results:');
}catch(e){}
