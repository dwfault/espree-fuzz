//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = [1, 2, 3, 4, 5, 6, 7, 8]
o1.o2(o0.slice(9,11));
o1.o2(o0.slice(1, "abc", 5, 9));
o1.o2(o0.slice());
o1.o2(o0.slice(3));
o1.o2(o0.slice(9));
o1.o2(o0.slice(-19));
o1.o2(o0.slice(-7, 4));
o1.o2(o0.slice(2, -4));
o1.o2(o0.slice(5, 2));
o1.o2(o0.slice(-12, -9));
o1.o2(o0.slice(-12, -15));


var o3 = new Array(1000000);
for (var o4 = 0; o4 < o3.length; o4++)
{
    o3[o4] = 0;
}

o5 = o3.slice(0, o3.length - 1);

o1.o2(o5.length);



