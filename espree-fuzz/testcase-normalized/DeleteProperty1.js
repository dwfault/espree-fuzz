//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = {o1:0, o2:10, o3:20};
for (o4 in o0)
{
    o5.o6(o4 + " = " + o0[o4]);
}
delete o0.o2;
for (o4 in o0)
{
    o5.o6(o4 + " = " + o0[o4]);
}
o0.o2 = 23;
for (o4 in o0)
{
    o5.o6(o4 + " = " + o0[o4]);
}
delete o0.o2;
for (o4 in o0)
{
    o5.o6(o4 + " = " + o0[o4]);
}
