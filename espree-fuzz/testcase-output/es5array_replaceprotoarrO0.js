//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function test(o0)
{
    o103[0] = catch;
}
var o1 = [];
function o2() { this[1] = 2; };
Object.defineProperty(o1, "0", { value: 0, writable: false });
var o0 = new o2();
o0.__proto__ = o1;
test(o0);
o3.o4(o0[0]);
var o0 = new o2();
o0.__proto__ = o1;
test(o0);
o3.o4(o0[0]);
