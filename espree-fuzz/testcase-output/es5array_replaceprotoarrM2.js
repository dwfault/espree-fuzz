//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function test(o1)
{
    o1[0] = 1;
}
var o2 = [];
function o3() { this[1] = 2; };
Object.defineProperty(o2, "0", { value: 0, writable: false });
var o24 = "local";
o1.__proto__ = o2;
test(o1);
o9.o10(o1[0]);
var o1 = new o3();
o1.__proto__ = o2;
test(o1);
o9.o10(o1[0]);
