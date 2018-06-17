//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o855 = o576.o580(o474.o561);
try {
o0.__defineSetter__("something", function() {});
}catch(e){}

var o1 = o1(o3 + o4);
try {
o1.__defineGetter__("something else", function() {});
}catch(e){}

// Above shouldn't cause AV
try { {
o0.o4("test5");
} } catch(e) {}
