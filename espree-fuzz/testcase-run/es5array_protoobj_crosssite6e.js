//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o6 = [ "NaN", "Infinity", "undefined"];

var o3 = {};
try {
Object.defineProperty(o3, "1", { value: "const", writable: false });
}catch(e){}

try {
o0.o4(o3);
}catch(e){}

