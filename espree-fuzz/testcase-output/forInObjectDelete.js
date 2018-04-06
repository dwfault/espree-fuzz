//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("Delete current element");
var o2 = { o3: 2, o4: 3 };

for(var o5 in o2)
{
    if(o2[o5] == 2)
        delete o2[o5];
    else
        o0.o1(o2[o5]);
}

o0.o1("Delete former element");

var o6 = { o3: 2, o4: 3 }

var o7 = 0;
for(var o5 in o6)
{
    if(o7++ == 1)
        delete o6.o3;
    o0.o1(o5);
}
