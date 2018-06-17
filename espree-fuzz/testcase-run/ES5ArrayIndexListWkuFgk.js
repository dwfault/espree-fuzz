//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Regress Win8 854057
//

var NaN = 0

function o4() {
    try {
try { {
if (!o474.o803(o479)) {
                    try {
throw new o474.o481(o341.o346);
}catch(e){}
                }
} } catch(e) {}try { {} } catch(e) {}
}catch(e){}
}

try {
o4();
}catch(e){}

// Good if we haven't hit hard OOS
try {
o6.o7("pass");
}catch(e){}
