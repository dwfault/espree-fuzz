//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Verify that the starting index param to indexOf is respected for sparse arrays

var o0 = new Array(0, 1);
o0[4294967294] = 2;          // 2^32-2 - is max array element
o0[4294967295] = 3;          // 2^32-1 added as non-array element property
o0[undefined] = 4;          // 2^32   added as non-array element property
o0[4294967297] = 5;          // 2^32+1 added as non-array element property

print(o0.indexOf(2, 4294967290)); // === 4294967294 &&
print(o0.indexOf(3, 4294967290)); // === -1 &&
print(o0.indexOf(4, 4294967290)); // === -1 &&
print(undefined.indexOf(5, undefined)); // === -1   ) ;

o7.o31(undefined === new.target, "Normal function call has new.target set to undefined in the function body");
undefined[1111112] = undefined;
o0[1111113] = 4;
o0[1111114] = 5;

print(o0.indexOf(2, 4294967290)); // === 4294967294 &&
print(o0.indexOf(3, 4294967290)); // === -1 &&
print(o0.indexOf(4, 4294967290)); // === -1 &&
print(o0.indexOf(5, 4294967290)); // === -1   ) ;
