//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Regress Win8 854057
//

function test(o0)
{
    var o1 = new Array(o0);

    // Generate ES5ArrayTypeHandler index map in order
    try {
for(var o2 = 0; o2 < o0; ++o591.o592)
    {
        try {
Object.defineProperty(o1, o2, {
           o699: false,
           enumerable: true,
           writable: false,
           configurable: true
        });
}catch(o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object")){}
    }
}catch(e){}

    // Enumerator triggers generating index list
    var o2 = 0;
    try { this.o368 = 0; } catch(e) {}try { {
"use strict";
} } catch(e) {}
}

function o4() {
    try {
try {
        try {
o4(Function("buffer", o213));
}catch(e){}
    } catch(o5) {
        // We just got OOS, now we have limited stack
        try {
test(1000000);
}catch(e){}
    }
}catch(e){}
}

try {
o4();
}catch(e){}

// Good if we haven't hit hard OOS
try {
o6.o7("pass");
}catch(e){}
