//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft Corporation and contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1, o1) {
    "use asm";
    
    var o2 = stdlib.SIMD.o3; 
    var o4 = o2.o5;
    
    var o6 = o2.o7;
    var o8 = o2.o9;
    
    var o10 = o2.sqrt;

    var fround = stdlib.Math.fround;

    function o11()
    {
        var o12 = o2(-1.0,42.0,-1.0,-1.0);
        var o13 = o2(-1.0,-1.0,-1.0,3.14);
        var o14 = o2(0.0,0.0,0.0,0.0);
        
        o12 = o10(o12); //generate nans in the right positions
        o13 = o10(o13);

        o14 = o8(o12,o13);

        return o4(o14);
    }
    
    function o15()
    {
        var o12 = o2(-1.0,42.0,-1.0,-1.0);
        var o13 = o2(-1.0,-1.0,-1.0,3.14);
        var o14 = o2(0.0,0.0,0.0,0.0);
        
        o12 = o10(o12); //generate nans in the right positions
        o13 = o10(o13);

        o14 = o6(o12,o13);

        return o4(o14);
    }
   
    return {o11:o11, o15:o15};
}

var o16 = o0(this, {});

o16.o11();
o16.o15();

print (o16.o11());
print (o16.o15());


