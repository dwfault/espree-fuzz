//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\SimdJsHelpers.js");
function o2(o3, o4, o5)
{
    var o6;
    var o7 =0;
    
    if (o3 == true)
    {
        o6 = SIMD.Int32x4(1, 2.0, 3, 4);
    }
    else
    {
        o6 = SIMD.o10(5, 6.5, 7, 8.5);
    }
    
    for (o7 = 0; o7 < 10; o7++)
    {
        if (o4 == true)
        {
            return SIMD.Int32x4.add(o6, o6);
        }
        else
        {
            return SIMD.o10.add(o6, o6);
        }
    }
    
    
}

var o3 = true;
var o4 = true;
var o12;
for (o7 = 0; o7 < 100; o7++)
{
    o12 = o2(o3, o4);
    o3 = !o3;
    o4 = !o4;
}
o13([10.0,13.0,14.0,17.0], o12, SIMD.o10, "func1");
print("PASS");