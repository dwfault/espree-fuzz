//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

eval = function(){};

o1 = function () { return "ed"; }
o2 = function () { return "Fail"; }

function o3()
{
    var o4 = "Pa" + "ss";
    var o5 = o4 + o1();
    var o6 = o4 + o2();
    eval();
    o7.o8(o5);
}
o3()
