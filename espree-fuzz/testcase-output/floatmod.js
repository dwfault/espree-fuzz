//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(stdlib) {
    "use asm";
    var fround = stdlib.Math.fround;
    function o4(o5,o6) {
        o5 = fround(o5);
        o6 = fround(o6);
        return fround(o5%o6);
    }
    
    return { 
        o4 : o4,
    };
}
var o7 = o0({Math:Math});
print(o7.o4(1,1));
