//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Regress Win8 854057
//

var o8 = []

function o4() {
    try {
try {
        try {
o4(this);
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
o4(o421.o391[o421.o150](o421, o421.o150, o421.o149 >> 8));
}catch(e){}

// Good if we haven't hit hard OOS
try {
o6.o6("pass");
}catch(e){}
