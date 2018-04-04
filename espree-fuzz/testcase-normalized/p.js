//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

for (o0 in this) {
    if (o0 === "SCA" || o0 === "ImageData")
        continue;
    o1.o2(o0);
}


const o3 = 10;
o1.o2(o3);
{
    const o3 = 20;
    o1.o2(o3);
}
o1.o2(o3);



for (o0 in this) {
    if (o0 === "SCA" || o0 === "ImageData")
        continue;
    o1.o2(o0);
}

