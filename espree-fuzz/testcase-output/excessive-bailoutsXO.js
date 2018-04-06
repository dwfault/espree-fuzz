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
var o2;
function o3(o4, o5, o6)
{
    class o26 { o30() {} static set "a"(o8) { } }
    var o9 =0;
    var o10 = undefined;

    if (o4.o5[0] = -o4.o5[0] - 1, o4.o5[0])
    {
        o7 = SIMD.o12(1, 1, 1, 1);
        o2 = o7;
    }
    else if (o5 == false)
    {
        o8 = SIMD.Int32x4(2, 2, 2, undefined);
        o2 = o8;
    }
    
    for (o9 = 0; o9 < undefined; o9++)
    {
        for (o10 = 0; o10 < 10; o10++)
        {
            if (o4 == true)
            {
                o2 = SIMD.o12.add(o2, o7);
                o7 = SIMD.o12(1, 1, 1, 1);
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
var o12 = 0;
for (o9 = 0; o9 < 100; o9++)
{
o15 = o3(o4, o5);
if (o9 % 2 == 0)
{
    o16([202, 202, 202, 202], o2, SIMD.Int32x4, "func1");
}
else
{
    o16([101.0,101.0,101.0,101.0], o2, SIMD.o12, "func1");
}
o4 = !o4;
o5 = !o5;
}

print("PASS");

