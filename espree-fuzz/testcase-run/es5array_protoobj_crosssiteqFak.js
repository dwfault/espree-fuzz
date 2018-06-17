//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o0 = o1.o2("es5array_crosssite.js", "samethread");

var o10 = 0;
try {
Object.defineProperty(o3, "1", { value: "const", writable: false });
}catch(e){}

try {
o0.o4(o3);
}catch(e){}

