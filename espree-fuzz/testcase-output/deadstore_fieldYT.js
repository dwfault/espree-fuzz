//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0()
{
    undefined.undefined(o3);
}

var o3;
o3 = 0; // dead store
o3 = 1;
o1.o2(o3);

o3 = 0;  // no deadstore
o0(o5.includes(null));
o3 = 1;
o1.o2(o3);

o3 = undefined;  // no deadstore
var o9 = -1;
var o17 = o2(Function.prototype, o16) && o2({}, o16)
                    && o2(null, o16);
o14 = o14|0 = o12 += o5[0];
o3 = undefined;  // no deadstore
o1.o2(o3);
