//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = [true, false, new Boolean(true), new Boolean(false)];
var o2 = [true, false, new Boolean(true), new Boolean(false), -1, 0, 1, 2, 1.0, 1.1, 0.0, +0, -0, null, undefined, new Object(), "", "abc", "-1", "0", "1", "2", "true", "false", "t", "f", "True", "False", " 1.00 ", " 1. ", " +1.0 ", new Number(0), new Number(1)];

for (var o6 = 0; o6 < o0.length; o6++)
{
    for (var o8 = 0; o8 < o2.length; o8++)
    {
        o9.o10(o0[o6] + " == " + o2[o8] + ": " + (o0[o6] == o2[o8]));
    }
}
