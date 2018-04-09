//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(stdlib) {
    "use asm";
    var fround = stdlib.Math.fround;
    function o1(o2,o3) {
        o2 = fround(o2);
        o3 = fround(o3);
        return fround(o2%o3);
    }
    
    return { 
        o1 : o1,
    };
}
var o4 = o0({Math:Math});
print(o4.o1(1,1));
