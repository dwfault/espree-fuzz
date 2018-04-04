//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1)
{
    var o2 = o3;
    var o4 = 100;
    for (var o5 =0;o5<10;o5++)
    {
        o4 += o2.o6 + o1;
    }
    o7.o8(o4);
}
var o3 = {o6:1};
var o1 = [1,2,3,4]
Array.prototype.join = function(){ return o3.o6+=100; }
o0(o1);
