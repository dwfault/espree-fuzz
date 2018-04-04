//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1,o2,o3)
{
    var o4 = o1[o2] |0;
    var o5 = o1[o2];
    var o6 = o1[o2];
    o7.o8(""+o5);
    o7.o8(""+o6);
    var o9 = o5 + o6 + o4;
    return o9;

}
var buffer = new ArrayBuffer(1<<16);
var o12 = new Int8Array(buffer);
o12[10] = 100;
print(o0(o12,10,1));
print(o0(o12,10,1));
print(isNaN(o0(o12,1<<17,1)));

