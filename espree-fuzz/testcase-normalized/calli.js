//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Various ways of calling/loading function with used/unused result.

(function o0(o1) {
    Math.o3;
    if (o1 <= 1) { return 1; }
    return o0(o1 - 1) + o0(o1 - 2);

})(1);

(function o0(o1) {
    Math.o3(0);
    if (o1 <= 1) { return 1; }
    return o0(o1 - 1) + o0(o1 - 2);

})(2);

(function o0(o1) {
    var o4 = Math.o3;
    if (o1 <= 1) { return 1; }
    return o0(o1 - 1) + o0(o1 - 2);

})(1);

(function o0(o1) {
    var o4 = Math.o3(0);
    if (o1 <= 1) { return 1; }
    return o0(o1 - 1) + o0(o1 - 2);

})(2);

o5.o6('pass');