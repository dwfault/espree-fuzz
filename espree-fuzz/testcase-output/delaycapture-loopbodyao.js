//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = [1, 0, 0, 0, 1, 1, 1, 1, 0, 0];
    var o11 = 0;
    o13(+Infinity, Math.hypot, -Infinity,         0,         0, "if any argument is -Infinity, then the result of hypot(x,y,z) is +Infinity");
}

o0();

o5.o6('pass');