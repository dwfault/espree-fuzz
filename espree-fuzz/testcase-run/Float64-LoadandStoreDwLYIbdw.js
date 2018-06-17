//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o30(o31, o32) { try {
o31.__proto__ = o32;
}catch(e){} }

var o1 = 0
var o7 = {}
var buffer = [1, 2, 3];

var o8 = o0(global,o7,buffer);

try {
o9.o10(o8());
}catch(e){}
try {
o9.e(o8());
}catch(e){}
