//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------



var o0 = {o1: 1};

function o2() {};
o2.prototype.valueOf = function() { 
    return o0.o1++;
}

var o5 = new o2();

var o6 = function(o0, o5)
{
    var o7 = undefined;
    for (var o8 = 0; o8 < 1; o8++)
    {
        if (o0.o1 < o5)
        {
            o7 += o458.o163 = 0xFF;
        }
        else
        {
            o7 -= o0.o1; 
        }
    }
    return o7;
}

o9.o10("RESULT: " + o6(o0,o5));


