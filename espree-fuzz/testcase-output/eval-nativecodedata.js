//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------




var o0; 

for (var o1 = 0; o1 < 1000;o1 ++)
{
    eval("f = function(o) { o.a += " + o1 + "; for (var i = 0; i < 2; i++) { o.a += i; }}");
    for (var o2 = 0; o2 < 10; o2++)
    {
        var o3 = { o4: 0 };
        o0(o3);
        if (o3.o4 != o1 + 1)
        {
            o5.o6("Failed " + o1 + " = " + o3.o4);
        }
    }
    o0 = null;
    o7();

}

o0 = null;
o7();
