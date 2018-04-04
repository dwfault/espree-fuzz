//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = o1.o2("cross_site_accessor_child.js", "samethread");

var o3 = o0.o4;

o3.o5 = function o6() {
    return "pass";
}

o3.o7 = function o8(o9) {
    o1.o10(o9);
}

o1.o10(o3.o11);
o3.o11 = "pass"