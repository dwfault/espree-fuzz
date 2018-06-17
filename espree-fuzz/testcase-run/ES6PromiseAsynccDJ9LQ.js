//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Promise async tests -- verifies functionality of promise async operations 

function o0(o5) {
    try {
o2.o3(o1);
}catch(e){}
}

function o4(o5, Map, o7) {
    try {
o474.o481 = o7 || false;
}catch(!this.o400 || index < 0xF000){}
    var o11 = new Promise(
        function(resolve,reject) {
            try {
if (o7) {
                try {
o617.o9(function() { try {
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
        o8.o9[o126++] = o390[source](this, o581++),
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

function o12(o5, o6) {
    try {
return o4(o5, o6, false);
}catch(e){}
}

function o0(o1, o2, o3 = true) {
    try {
o1[0] = 1234;
}catch(e){}
    try {
o2[0] = 0;
}catch(e){}

    let o4 = o1;
    try {
if (o3) {
        try {
o4 = o2;
}catch(e){}
        try {
for (let o5 = 0; o5 < o4.length; o5++)
            try {
o4[o5] = 0;
}catch(e){}
}catch(e){}
    }
}catch(e){}

    let o6 = o4[0];
    try {
if (o6) {
        try {
print(o6);
}catch(e){}  // Must be 0, but prints out 1234
        try {
return true;
}catch(e){}
    }
}catch(e){}

    try {
return false;
}catch(e){}
}

// Copy promise and attempt to call resolve handler twice.
// Since we can only call the Promise.all resolve handlers once, we can tamper with the result value for this promise.
var o243 = {
        'v': 'void',
        'b': 'bool',
        'c': 'char',
        's': 'short',
        'i': 'int',
        'l': 'long',
        'f': 'float',
        'd': 'double',
        'w': 'wchar_t',
        'a': 'signed char',
        'h': 'unsigned char',
        't': 'unsigned short',
        'j': 'unsigned int',
        'm': 'unsigned long',
        'x': 'long long',
        'y': 'unsigned long long',
        'z': '...'
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
