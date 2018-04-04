//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft Corporation and contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(stdlib, o2) {
    "use asm";
    
    var o3 = stdlib.SIMD.o5; 
    var o6 = o3.o7;
    
    var o8 = o3.o9;
    var o10 = o3.o11;
    
    var o12 = o3.sqrt;

    var fround = stdlib.Math.fround;

    function o16()
    {
        var o17 = o3(-1.0,42.0,-1.0,-1.0);
        var o18 = o3(-1.0,-1.0,-1.0,3.14);
        var o19 = o3(0.0,0.0,0.0,0.0);
        
        o17 = o12(o17); //generate nans in the right positions
        o18 = o12(o18);

        o19 = o10(o17,o18);

        return o6(o19);
    }
    
    function o20()
    {
        var o17 = o3(-1.0,42.0,-1.0,-1.0);
        var o18 = o3(-1.0,-1.0,-1.0,3.14);
        var o19 = o3(0.0,0.0,0.0,0.0);
        
        o17 = o12(o17); //generate nans in the right positions
        o18 = o12(o18);

        o19 = o8(o17,o18);

        return o6(o19);
    }
   
    return {o16:o16, o20:o20};
}

var o21 = o0(this, {});

o21.o16();
o21.o20();

print (o21.o16());
print (o21.o20());


