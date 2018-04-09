//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Tests the relationship between a parent and child object.
//

function print(o0,o1)
{
    o2.o3("=== " + o1 + " ===");
    o2.o3("x.q:    " + o0.o4);
    o2.o3("x[3]:   " + o0[3]);
    o2.o3("x[4]:   " + o0[4]);
    o2.o3("x[50]:  " + o0[50]);
    o2.o3("x.p1:   " + o0.o5);
    o2.o3("x.p2:   " + o0.o6);
    o2.o3("x[\"m\"]: " + o0["m"]);
    o2.o3("");
}

var o7 = new Array(10);

for(var o8 = 0; o8 < 10; ++o8)
{
    o7[o8] = o8;
}
o7.o5 = "test";
o7.o6 = 3;

function o9(o0)
{
    this[o0] = 1;
}
o9.prototype = o7;

var o0 = new o9("q");

print(o0, "after object creation");

o7.o10 = 14;
print(o0, "after adding new property to parent");

o9.prototype = new String("glah");
print(o0, "after modifying constructor's prototype");

o7.o10--;
print(o0, "after modifying parent");

o7.o5 = undefined;
o7[3] = undefined;
o7[4] <<= 2;
o7[50] = 42;
print(o0, "after undefining properties on parent");

o7.o5 = new String("new p1");
print(o0, "after re-adding property on parent");

o0.o5 = "x's p1";
o7.o5 = undefined;
print(o0, "after re-defining property on object");
