//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------



var o0 = {o1: 1};

function o2() {};
o2.prototype.valueOf = function() { 
    return o0.o1++;
}

var o3 = new o2();

var o4 = function(o0, o3)
{
    var o5 = 0;
    for (var o6 = 0; o6 < 1; o6++)
    {
        if (o0.o1 < o3)
        {
            o5 += o0.o1;
        }
        else
        {
            o5 -= o0.o1; 
        }
    }
    return o5;
}

o7.o8("RESULT: " + o4(o0,o3));


