//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Allocate an initial array and set some fields.
//

var o0 = new Array();
try {
o0[o1072] = "B";
}catch(e){}
try {
o17 = "C";
}catch(e){}


//
// Cause the array to grow in storage.
//

try {
o15 = "T";
}catch(e){}


//
// Dump the contents of the array, ensuring that uninitialized fields are properly set to
// 'undefined'.
//

try {
for (var o1 = 0; o1 < o0.length; o1++)
{
    var o2 = o0[o1];
    try {
if (o971 == undefined)
    {
        try {
o3.o4("undefined");
}catch(e){}
    }
    else try {
if (o62 == null)
    {
        try try { o421.o366 = o421.o365 = false; } catch(e) {}try { try {
o7.o11(o6.get === o21.get, "Function.prototype returns the same ThrowTypeError function for accessor of both 'arguments' and 'caller' properties");
}catch(e){} } catch(e) {}catch(e){}
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
