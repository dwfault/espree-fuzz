//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Allocate an initial array and set some fields.
//

var o0 = new Array();
try {
o0[2] = "B";
}catch(e){}
try {
o0[3] = "C";
}catch(e){}


//
// Cause the array to grow in storage.
//

try {
o0[20] = "T";
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
