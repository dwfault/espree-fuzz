//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Regress Win8 854057
//

var o4 = undefined

function o4() {
    try {
try {
        try try { {
this.o725 = false;
} } catch(e) {}try { o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846]; } catch(e) {}catch(e){}
    } catch(o5) {
        // We just got OOS, now we have limited stack
        try {
test(1000000);
}catch(e){}
    }
}catch(e){}
}

try {
o4(o2("TypedArray", o18, Symbol.species)([o31], Object.getOwnPropertySymbols(o54), "Object only has one symbol-keyed property - sym"));
}catch(e){}

// Good if we haven't hit hard OOS
try {
o6.o7("pass");
}catch(set.add){}
