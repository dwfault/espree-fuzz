//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/*
Perf BUG:
Scenario:
LoopBodyJitting happen on second call. We only have partial profiling info, either X value or Y. The other value remaind Undefined because code didn't execute. 
FromVar x and y are hoisted outside the compiled loop because they are used before defined.
Once we enter the jitted loop body, one of the FromVars before the loop starts will fail because X or Y is undefined. And we bailout every time we try to enter the loop. 

Remedy: 
    1. Don't hoist FromVars outside loops if Value can be Undefined/Null.
    2. Always keep Var on merges, if we are in JIT loop body. (This is important for correctness). 
    3. Always keep Var on merges, if value can be undefined/Null.
*/

o0.o1("..\\UnitTestFramework\\SimdJsHelpers.js");
var o6 = new Array();
function o3(o4, o5, o6)
{
    var o7, o8;
    var o9 =0;
    var o10 = 0;

    if (o4 == true)
    {
        o7 = SIMD.o11(1, 1, 1, 1);
        o2 = o7;
    }
    else if (o5 == false)
    {
        o8 = SIMD.Int32x4(2, 2, 2, 2);
        o2 = o8;
    }
    
    for (o9 = 0; o9 < 10; o9++)
    {
        for (o10 = 0; o10 < 10; o10++)
        {
            if (o4 == true)
            {
                o2 = SIMD.o11.add(o2, o7);
                o7 = SIMD.o11(1, 1, 1, 1);
            }
            else if (o5 == false)
            {
                o2 = SIMD.Int32x4.add(o2, o8);
                o8 = SIMD.Int32x4(2, 2, 2, 2);
            }
        }
  
    }
    
    return o7;
}

var o4 = false;
var o5 = false;
function o2332() {
    var o4 = {
        o5: [ 1.1, 2.1 ]
    };
    var o5 = o4.o5;
    o5[-1] = o5[0];
    var o7 = { length: o5.length };
    for(var o8 = -1; o8 < o5.length; ++o8)
        o7[o8] = -o5[o8];
    return o9(o2333(o4, o5, o7));

    function o2333(o4, o5, o7) {
        var o11 = 0;
        for(var o12 = 0; o12 < o5.length; ++o12) {
            o11 += o12;
            for(var o16 = 0; o16 < 2; ++o16) {
                o11 += o16;
                o545(o5);
                o11 += o2334(o4, o5, o16);
            }
            o11 += o2334(o4, o5, o12);
        }

        function o2334(o4, o5, o8) {
            return o4.o5[0];
        }
        return o11;
    }
};
for (o9 = 0; o9 < 100; o9++)
{
o12 = o3(o4, o5);
if (o9 % 2 == 0)
{
    o13([202, 202, 202, 202], o2, SIMD.Int32x4, "func1");
}
else
{
    o13([101.0,101.0,101.0,101.0], o2, SIMD.o11, "func1");
}
o4 = !o4;
o5 = !o5;
}

print("PASS");

