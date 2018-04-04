//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = 1;
var o1 = 2;
var o2 = 3;

function test()
{
    var o4 = 0;
    o4 += o0;
    o4 += o1;
    o4 += o2;
    return o4;
}

o5.o6(test());
o5.o6(test());
o2 = 1;
o5.o6(test());

function o7(o8)
{
    var o4 = 0;
    o4 += o8.o9;
    o4 += o8.o10;
    o4 += o8.o11;
    
    return o4;
}

var o12 = {o9:5, o10:6, o11:7};
o5.o6(o7(o12));
o5.o6(o7(o12));
o12.o10 = 10;

o5.o6(o7(o12));