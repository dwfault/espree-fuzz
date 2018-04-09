//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function test(o0)
{
    o0[0] = null;
}
var o1 = {};
function o2() { this[1] = 2; };
o2.prototype = o1;
Object.defineProperty(o1, "0", { value: 0, writable: false });
var o0 = new o2();
test(o0);
o3.o4(o0[0]);

test(o0);
o3.o4(o0[0]);
