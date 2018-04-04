//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() { }
var o1 = { };
o1.o2 = function* () { yield 0; };

if (o1.o2().next().value === 0) {
    o5.o6("passed");
} else {
    o5.o6("failed");
}
