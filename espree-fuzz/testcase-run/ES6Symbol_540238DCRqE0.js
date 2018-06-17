//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o31 = (o82 >= 0xF8) ? arguments[o82] : o474.o672(o46++);
try {
o0.__defineSetter__("something", function() {});
}catch(e){}

var o575 = Boolean(o3 + o4);
try {
o1.__defineGetter__("something else", function() {});
}catch(e){}

// Above shouldn't cause AV
try {
o2.Object.defineProperty(o10, o51, o52)('Pass');
}catch(e){}
