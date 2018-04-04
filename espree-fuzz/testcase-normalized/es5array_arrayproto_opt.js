//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function test(o1, o2)
{
    o1[o2] = 1;
    o3.o4(o1[o2]);
}

function o5(o1)
{
    o1[0] = 1;
    o3.o4(o1[0]);
}


// Populate the profile with any array that we are growing a segment length
o5([]);
Object.defineProperty(Array.prototype, "0", { value:"blah", writable: false });

// Test the jitted code with the array type check elimination
o5([]);

var o12 = [];
o12[1] = 2;
// Populate the profile to not filling a missing value.
test(o12, 1);
// Test the jitted code with the array type check elimitation
test(o12, 0);

