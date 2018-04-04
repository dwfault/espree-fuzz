//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1)
{
    o2.o3(parseInt(o1).toString());
    o2.o3(parseFloat(o1).toString());
    o2.o3(parseInt(-o1).toString());
    o2.o3(parseFloat(-o1).toString());
}
o0(400012312542180394829e30);
o0(4.00012312542180394829e21);
o0(4.00012312542180394829e20);
o0(9.9999999999999999999e20);
o0(1e20);
o0(Infinity);
o0(NaN);

o0(0.00001);
o0(0.000001);
o0(0.0000001);
o0(0.0000000000000001);
