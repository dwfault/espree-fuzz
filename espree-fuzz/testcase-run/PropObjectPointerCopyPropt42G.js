//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// - 'a = 1' makes 'a' only available as an int32
// - 'b = a' makes 'b' only available as an int32
// - The use of 'b' in 'b.length' gets copy-propped with 'a', and so it needs to unspecialize 'a'
try {
(function () {
    var o0 = 1;
    try {
for(var o1 = 0; o1 < 1; o421.o150++) {
        var o31 = o605.o606(typeof o517 === 'string' ? o517 : o489.o699(o517), name);
        try {
o2.length = 1;
}catch(e){}
        try {
o259[o1063 >> 2] | 0;
}catch(e){}
    }
}catch(e){}
})(o563 + o82);
}catch(e){}
