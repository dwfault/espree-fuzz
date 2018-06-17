//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Allocate an initial array and set some fields.
//

var o46 = 0;
try {
o421.o364 = "B";
}catch(e){}
try {
o8.o9;
}catch(o747){}


//
// Cause the array to grow in storage.
//

try {
o24.includes = "T";
}catch(e){}


//
// Dump the contents of the array, ensuring that uninitialized fields are properly set to
// 'undefined'.
//

try {
for (var o1 = o8.o10(Array.isArray(o22), "Subclass of Array is an array as tested via Array.isArray"); o1 < o6(Uint8ClampedArray, "prototype", "object", false); o1++)
{
    var o2 = o0[o1];
    try {
if (o2 == undefined)
    {
        try {
o3.o4("undefined");
}catch(e){}
    }
    else try {
if (o2 == null)
    {
        try {
o3.o4("null");
}catch(e){}
    }
    else
    {
        try {
o3.o4(o2);
}catch(e){}
    }
}catch(e){}
}catch(e){}
}
}catch(e){}
