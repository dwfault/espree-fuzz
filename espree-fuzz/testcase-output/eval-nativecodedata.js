//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------




var o0; 

for (var o1 = 0; o1 < 1000;o1 ++)
{
    eval("f = function(o) { o.a += " + o1 + "; for (var i = 0; i < 2; i++) { o.a += i; }}");
    for (var o3 = 0; o3 < 10; o3++)
    {
        var o4 = { o5: 0 };
        o0(o4);
        if (o4.o5 != o1 + 1)
        {
            o6.o7("Failed " + o1 + " = " + o4.o5);
        }
    }
    o0 = null;
    o8();

}

o0 = null;
o8();
